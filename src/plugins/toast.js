import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
  iconPack: 'material' // set your iconPack, defaults to material. material|fontawesome|custom-class
})

let optionsError = {
  theme: 'primary',
  type: 'error',
  duration: 3000,
  position: 'top-center',
  singleton: true,
  fullWidth: true,
  fitToScreen: true,
  icon: 'error_outline',
  className: 'toasted-left'
}

let optionsSuccess = {
  theme: 'primary',
  type: 'success',
  duration: 3000,
  position: 'bottom-right',
  singleton: true,
  fullWidth: true,
  icon: 'check',
  className: 'toasted-left'
}

Vue.toasted.register('errorMessage',
  (payload) => {
    // if there is no message passed show default message
    if (!payload.message) {
      return 'Уууупс... Что-то пошло не так...'
    }

    // if there is a message show it with the message
    return payload.message
  },
  optionsError
)
Vue.toasted.register('successMessage',
  (payload) => {
    // if there is no message passed show default message
    if (!payload.message) {
      return 'Успешно!'
    }

    // if there is a message show it with the message
    return payload.message
  },
  optionsSuccess
)
