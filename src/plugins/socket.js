import Vue from 'vue'
import store from '~/store'
import VueSocketio from 'vue-socket.io'
import io from 'socket.io-client'

if (localStorage.getItem('user')) {
  let socket = io('http://192.168.33.101:3000/?user=' + localStorage.getItem('user'))
  Vue.use(VueSocketio, socket, store)
}
