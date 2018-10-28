import axios from 'axios'
import * as types from '../mutation-types'

// state
export const state = {
  account: [],
  subscriptions: [],
  services: [],
  contacts: [],
  tariffs: []
}

// getters
export const getters = {
  account: state => state.account,
  subscriptions: state => state.subscriptions,
  services: state => state.services,
  contacts: state => state.contacts,
  tariffs: state => state.tariffs
}

// mutations
export const mutations = {
  [types.FETCH_ACCOUNT] (state, { account }) {
    state.account = account
  },
  [types.FETCH_SUBSCRIPTIONS] (state, { subs }) {
    state.subscriptions = subs
  },
  [types.FETCH_SERVICES] (state, { services }) {
    state.services = services
  },
  [types.FETCH_CONTACTS] (state, { contacts }) {
    state.contacts = contacts
  },
  [types.FETCH_TARIFFS] (state, { tariffs }) {
    state.tariffs = tariffs
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
  async fetchServices ({ commit }) {
    try {
      const { data } = await axios.get('/cabinet/services/get')

      commit(types.FETCH_SERVICES, { services: data })
    } catch (e) {
      console.log('FAILURE TO GET DATA.')
    }
  },
  async fetchContacts ({ commit }) {
    try {
      const { data } = await axios.get('/cabinet/contacts/get')

      commit(types.FETCH_CONTACTS, { contacts: data })
    } catch (e) {
      console.log('FAILURE TO GET DATA.')
    }
  },
  async fetchTariffs ({ commit }) {
    try {
      const { data } = await axios.get('/cabinet/services/tariffs')

      commit(types.FETCH_TARIFFS, { tariffs: data })
    } catch (e) {
      console.log('FAILURE TO GET DATA.')
    }
  }
}
