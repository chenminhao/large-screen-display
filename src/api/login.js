import api from './index'
import { axios } from '@/utils/request'

/**
 * @param parameter
 * @returns {*}
 */
export function login (parameter) {
  return axios({
    url: '/mod/passport/login',
    method: 'post',
    data: parameter
  })
}

export function modityPsw (parameter) {
  return axios({
    url: '/mod/passport/updPasswd',
    method: 'post',
    data: parameter
  })
}
export function updperson (parameter) {
  return axios({
    url: '/mod/passport/updperson',
    method: 'post',
    data: parameter
  })
}

export function getSmsCaptcha (parameter) {
  return axios({
    url: api.SendSms,
    method: 'post',
    data: parameter
  })
}

export function getInfo (parameter) {
  return axios({
    url: '/mod/passport/currentInfo',
    method: 'get',
    params: parameter
  })
}

export function logout () {
  return axios({
    url: '/mod/passport/logout',
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * @param parameter {*}
 */
export function get2step (parameter) {
  return axios({
    url: api.twoStepCode,
    method: 'post',
    data: parameter
  })
}

// 1、重置密码。
export function resetPassword (params) {
  return axios({
    url: '/mod/common/reset_password',
    method: 'get',
    params
  })
}
