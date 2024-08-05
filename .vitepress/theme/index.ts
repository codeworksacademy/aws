// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import './main.scss'
import './style.css'
// @ts-ignore
import Layout from './_layouts/Default.vue'
import AccountDetails from './components/Account.vue'
import CourseStore from './components/CourseStore.vue'
import LoginButton from './components/LoginButton.vue'
import '@mdi/font/css/materialdesignicons.min.css'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('AccountPage', AccountDetails)
    app.component('LoginButton', LoginButton)
    app.component('CourseStore', CourseStore)
  }
}


