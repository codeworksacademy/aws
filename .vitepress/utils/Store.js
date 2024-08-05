const APP_NAME = "codeworks.course"

export function saveState(key, value) {
  try {
    const keyName = `${APP_NAME}_${key}`
    let data = value
    if (typeof value != 'string') {
      data = JSON.stringify(data)
    }
    window.localStorage.setItem(keyName, data)
    if (typeof value == 'undefined' || value == null) {
      window.localStorage.removeItem(keyName)
    }
  } catch (error) {
    console.error('[SAVING_STATE]', { key, value })
  }
}

export function loadState(key, instanceType) {
  try {
    const keyName = `${APP_NAME}_${key}`
    const rawData = window.localStorage.getItem(keyName)

    if (!instanceType) {
      try {
        return JSON.parse(rawData)
      } catch (error) {
        return rawData
      }
    }

    const keyType = Array.isArray(instanceType) ? '[]' : '{}'
    let data = JSON.parse(window.localStorage.getItem(keyName) || keyType)
    instanceType = Array.isArray(instanceType) ? instanceType[0] : instanceType
    if (Array.isArray(data) && instanceType) {
      return data.map(i => new instanceType(i))
    }
    if (instanceType && data) {
      return new instanceType(data)
    }
    if (keyType == '{}' && !Object.keys(data).length) { return null }
    return data
  } catch (error) {
    console.error('[ATTEMPTING_TO_LOAD_STATE]', { key, instanceType })
  }
}