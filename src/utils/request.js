import axios from 'axios'
import store from '@/store'
import { VueAxios } from './axios'
import notification from 'ant-design-vue/es/notification'

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 300000 // 请求超时时间
  // timeout: 60000 // 请求超时时间
})

const err = (error) => {
  if (error.response) {
    if (error.response.status === 401) {
      if (store.getters.userInfo !== undefined) {
        store.dispatch('Logout').then(() => {
          setTimeout(() => {
            window.location.reload()
          }, 1500)
        })
      }
    }
    if (error.response.status === 400 || error.response.status === 400) {
      var msg = error.response.data.msg || error.response.data
      if (msg !== '无法获取验证信息' && msg !== '无效的用户名或密码。') {
        notification.error({
          message: '错误',
          description: msg
        })
      }
    }
  }
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {
  if (config.method === 'get') {
    if (config.url.indexOf('?') !== -1) {
      config.url = config.url + `&t=${new Date().getTime()}`
    } else {
      config.url = config.url + `?t=${new Date().getTime()}`
    }
  }
  return config
}, err)

// response interceptor
service.interceptors.response.use((response) => {
  return response.data
}, err)

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, service)
  }
}

export {
  installer as VueAxios,
  service as axios
}
