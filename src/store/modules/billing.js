import axios from 'axios'
import * as types from '../mutation-types'

// state
export const state = {
  account: [],
  subscriptions: [],
  subsView: []
}

// getters
export const getters = {
  account: state => state.account,
  subscriptions: state => state.subscriptions,
  subsView: state => state.subsView
}

// mutations
export const mutations = {
  [types.FETCH_ACCOUNT] (state, { account }) {
    state.account = account
  },
  [types.FETCH_SUBSCRIPTIONS] (state, { subs }) {
    state.subscriptions = subs
  },
  [types.FETCH_SUBS_VIEW] (state, { subsView }) {
    state.subsView = subsView
  }
}

// actions
export const actions = {

  async fetchAccount ({ commit }) {
    try {
      const { data } = await axios.get('/cabinet/account/get')

      commit(types.FETCH_ACCOUNT, { account: data })
    } catch (e) {
      console.log('FAILURE TO GET DATA.')
    }
  },
  async fetchSubscriptions ({ commit }) {
    try {
      const { data } = await axios.get('/subscriptions')

      commit(types.FETCH_SUBSCRIPTIONS, { subs: data })
    } catch (e) {
      console.log('FAILURE TO GET DATA.')
    }
  },
  async fetchViewSubs ({ commit }) {
    try {
      const { data } = await axios.get('/subs/view')

      commit(types.FETCH_SUBS_VIEW, { subsView: data })
    } catch (e) {
      console.log('FAILURE TO GET DATA.')
    }
  }

}
