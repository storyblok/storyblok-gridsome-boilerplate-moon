// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import DefaultLayout from '~/layouts/Default.vue'
import Components from './components'

import './assets/css/reset.css'
import './assets/sass/global.scss'

export default function (Vue, { router, head, isClient }) {
  NProgress.configure()

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // registering the components
  Object.keys(Components).forEach(key => {
    Vue.component(key, Components[key])
  })

  router.beforeEach((_, from, next) => {
    if (from.name !== null) {
      if (from.query._storyblok) {
        return next(false)
      }
      NProgress.start()
    }
    next()
  })
      
  router.afterEach(() => {
    NProgress.done()
  })
}
