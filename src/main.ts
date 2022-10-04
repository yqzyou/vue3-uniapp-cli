/*
 * @Author: your name
 * @Date: 2022-09-30 10:27:31
 * @LastEditors: your name
 * @LastEditTime: 2022-09-30 17:29:45
 * @Description:
 */
import 'uno.css'

import { createSSRApp } from 'vue'

import store from '@/store'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App).use(store)
  return {
    app,
  }
}
