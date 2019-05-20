/*
 * @Author: lanten
 * @Date: 2019-05-16 16:07:07
 * 子路由嵌套 自动载入所有 ./views 目录中的 routes.ts 文件
 */

import Vue from 'vue'
import Router from 'vue-router'

const views = require.context('./views', true, /routes\.ts$/)
const routes = views.keys().map(path => {
  return views(path).default
})

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
