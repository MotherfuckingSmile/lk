import axios from 'axios'
import join from 'url-join'
import store from '~/store'
import router from '~/router'
import swal from 'sweetalert2'

// Request interceptor
axios.interceptors.request.use(request => {
  const token = store.getters['auth/token']
  if (token) {
    request.headers.common['Authorization'] = `Bearer ${token}`
  }

  request.url = join('http://192.168.33.101:82/api', request.url)
  // request.headers['X-Socket-Id'] = Echo.socketId()

  return request
})

// Response interceptor
axios.interceptors.response.use(response => response, error => {
  const { status } = error.response

  if (status >= 500) {
    swal({
      type: 'error',
      title: 'error_alert_title',
      text: 'error_alert_text',
      reverseButtons: true,
      confirmButtonText: 'ok',
      cancelButtonText: 'cancel'
    })
  }

  if (status === 401 && store.getters['auth/check']) {
    swal({
      type: 'warning',
      title: 'token_expired_alert_title',
      text: 'token_expired_alert_text',
      reverseButtons: true,
      confirmButtonText: 'ok',
      cancelButtonText: 'cancel'
    }).then(async () => {
      await store.dispatch('auth/logout')

      router.push({ name: 'login' })
    })
  }

  return Promise.reject(error)
})
