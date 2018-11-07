// import * as types from '../mutation-types'

export const state = {
  connect: false
}

export const getters = {
  connect: state => state.connect
}

export const mutations = {
  SOCKET_CONNECT (state, status) {
    let user = localStorage.getItem('user')
    if (user) {
      state.connect = true
      console.log(user + ' connected to socket server.')
    } else {
      state.connect = false
      console.error('auth required to connect to socket server.')
    }
  }
}
