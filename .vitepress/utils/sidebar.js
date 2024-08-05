// const fs = require('fs')
// const path = require('path')
import fs from 'fs'
import path from 'path'

const { resolve } = path

export const scanDir = pathName => {
  const qualified_path = resolve(__dirname, `../../${pathName}`)
  return getMsg(qualified_path, pathName)
}

export const getMsg = (qualified_path, pathName) => {
  let res = fs.readdirSync(qualified_path).filter(item => !(String(item) === '.DS_Store'))
  if (res) {
    let arr = res.map(item => {
      if (typeof item !== 'string') { return console.log('!![NO RES]!!', item) }
      let text = item.split('.')[0]
      text = text.replace(/-/g, ' ')
      text = text.replace(/^\d+\s*/, '')
      if (text.includes('checkpoint')) {
        text = '🚩 ' + text
      }

      if (text.includes('assignments')) {
        text = '🧪 ' + 'Labs'
      }

      if (String(item).endsWith('.md')) {
        return {
          text,
          link: resolve(qualified_path, item),
        }
      } else {
        return {
          text,
          items: getMsg(resolve(qualified_path, item), pathName),
          collapsed: true,
        }
      }
    })

    arr = arr.map(item => {
      if (item.link) {
        item.link = translateDir(item.link)
      }
      return item
    })
    return arr
  } else {
    console.warn('!![NO RES]!!')
  }
}

/**
 *
 * @param {string} path
 * @returns
 */
function translateDir(path) {
  const cleaned = path.replace(/\\/g, '/')
  const returnPath = '/docs' + cleaned.split('docs')[1]
  return returnPath
}
