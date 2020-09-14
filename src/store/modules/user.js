import { getInfo, logout } from '@/api/login'
const user = {
  state: {
    name: '',
    info: undefined
  },

  mutations: {
    SET_INFO: (state, info) => {
      if (info) {
        state.name = info.name || info.account
        state.info = info
      }
    }
  },

  actions: {
    // 获取用户信息
    GetInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          commit('SET_INFO', response)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    Logout ({ commit }) {
      return new Promise((resolve) => {
        logout().then(() => {
          resolve()
        }).catch(() => {
          resolve()
        }).finally(() => {
          commit('SET_INFO', undefined)
        })
      })
    }
  }
}

export default user
