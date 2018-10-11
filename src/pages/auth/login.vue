<template>
  <ion-page>

    <ion-grid>
      <ion-row align-items-center>
        <ion-col>
          <ion-row >
          <ion-col>
            <ion-img src="~images/fortuna.png" style="height: 50px;"></ion-img>
          </ion-col>
      </ion-row>
      <ion-row >
        <ion-col >
          <h4 text-center>Требуется вход</h4>
        </ion-col>
      </ion-row>
          <form @submit.prevent="login" @keydown="form.onKeydown($event)">
      <ion-row >
        <ion-col >
          <div>
            <ion-item>
              <ion-label position="floating">Лицевой счёт</ion-label>
              <ion-input type="text" :value="form.aid" @input="form.aid = $event.target.value"></ion-input>
            </ion-item>
          </div>
        </ion-col>
      </ion-row>
      <ion-row >
        <ion-col >
          <div>
            <ion-item>
              <ion-label position="floating">Пароль</ion-label>
              <ion-input type="password" :value="form.password" @input="form.password = $event.target.value"></ion-input>
            </ion-item>
          </div>
        </ion-col>
      </ion-row>
            <ion-row>
              <ion-col>
                  <ion-button type="submit" :loading="form.busy">Войти</ion-button>
              </ion-col>
            </ion-row>
          </form>
        </ion-col>
      </ion-row>
    </ion-grid>

  </ion-page>

</template>

<script>

import Form from 'vform'

export default {
  middleware: 'guest',

  data: () => ({
    form: new Form({
      aid: '',
      password: ''
    })
  }),

  methods: {
    async login () {
      // Submit the form.
      const { data } = await this.form.post('http://192.168.33.101:82/api/login')
      // Save the token.
      this.$store.dispatch('auth/saveToken', {
        token: data.token
      })

      // Redirect home.
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
<style>
  ion-page{
    background: #efefef;
    height: 100%;
  }
  .vertical-align-content >
  {
    display: flex !important;
    align-content: center !important;
    align-items: center !important;
  }
</style>
