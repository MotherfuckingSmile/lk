import * as types from '../mutation-types'

// state
export const state = {
  title: '',
  link: ''
}

// getters
export const getters = {
  title: state => state.title,
  link: state => state.link
}

// mutations
export const mutations = {
  [types.SET_TITLE] (state, title) {
    state.title = title
  },
  [types.SET_LINK] (state, link) {
    state.link = link
  }
}

// actions
export const actions = {

  async setTitle ({ commit }, title) {
    commit(types.SET_TITLE, title)
  },
  async setLink ({ commit }, link) {
    commit(types.SET_LINK, link)
  }
}
