/*
 * @Author: your name
 * @Date: 2022-09-30 11:35:23
 * @LastEditors: your name
 * @LastEditTime: 2022-09-30 11:35:26
 * @Description:
 */
import piniaPluginPersist from 'pinia-plugin-persist-uni'

const store = createPinia()
store.use(piniaPluginPersist)

export default store
