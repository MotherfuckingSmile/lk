import axios from 'axios'
import * as types from '../mutation-types'

// state
export const state = {
  user: localStorage.user ? localStorage.user : null,
  token: localStorage.token ? localStorage.token : null
}

// getters
export const getters = {
  user: state => state.user,
  token: state => state.token,
  check: state => state.user !== null
}

// mutations
export const mutations = {
  [types.SAVE_TOKEN] (state, { token }) {
    state.token = token
    localStorage.setItem('token', token)
  },

  [types.FETCH_USER_SUCCESS] (state, { user }) {
    state.user = user.aid
    localStorage.setItem('user', user.aid)
  },

  [types.FETCH_USER_FAILURE] (state) {
    state.token = null
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  },

  [types.LOGOUT] (state) {
    state.user = null
    state.token = null

    localStorage.removeItem('token')
    localStorage.removeItem('user')
  },

  [types.UPDATE_USER] (state, { user }) {
    state.user = user.aid
  }
}

// actions
export const actions = {
  saveToken ({ commit, dispatch }, payload) {
    commit(types.SAVE_TOKEN, payload)
  },

  async fetchUser ({ commit }) {
    try {
      const { data } = await axios.get('/user')

      commit(types.FETCH_USER_SUCCESS, { user: data })
    } catch (e) {
      commit(types.FETCH_USER_FAILURE)
    }
  },

  updateUser ({ commit }, payload) {
    commit(types.UPDATE_USER, payload)
  },

  async logout ({ commit }) {
    try {
      await axios({
        method: 'get',
        url: '/logout?aid=' + state.user + '&push=' + localStorage.getItem('pushId')
      })
      commit(types.LOGOUT)
      // commit(types.FETCH_USER_FAILURE)
    } catch (e) { }

    commit(types.LOGOUT)
  },

  async fetchOauthUrl (ctx, { provider }) {
    const { data } = await axios.post(`/oauth/${provider}`)

    return data.url
  }
}
