let deviceReady = false

document.addEventListener('deviceReady', () => {
  deviceReady = true
  let push = PushNotification.init({
    android: {
    },
    ios: {
      alert: 'true',
      badge: true,
      sound: 'false'
    }
  })
  push.on('registration', function (data) {
    if (!localStorage.getItem('pushId') || localStorage.getItem('pushId') !== data.registrationId) {
      localStorage.setItem('pushId', data.registrationId)
    }
  })
}, false)
