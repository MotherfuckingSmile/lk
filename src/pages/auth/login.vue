<template>
    <div class="page-content">
      <div style="width: 100%;">
        <img src="static/images/fortuna.png" class="logo">
        <br>
        <img src="static/images/logo.png" class="logo">
        <br>
        <form @submit.prevent="login" @keydown="form.onKeydown($event)">
          <div class="von-input-wrapper">
            <label class="item item-borderless item-input von-input">
              <div class="hairline-top"></div>
              <span class="input-label">Лицевой счёт</span>
              <input type="number" v-model="form.aid" autofocus>
              <div class="hairline-bottom"></div>
            </label>
            <span class="input-clear"></span>
          </div>
          <div class="von-input-wrapper">
            <label class="item item-borderless item-input von-input">
              <div class="hairline-top"></div>
              <span class="input-label">Пароль</span>
              <input type="password" v-model="form.password">
              <div class="hairline-bottom"></div>
            </label>
            <span class="input-clear"></span>
          </div>
          <div class="von-input-wrapper padding-top">
            <button type="submit" class="button button-positive button-full button-block">Войти</button>
          </div>
        </form>
      </div>
    </div>
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
      const { data } = await this.form.post('/login')
      // Save the token.
      this.$store.dispatch('auth/saveToken', {
        token: data.token
      })

      // Redirect home.
      this.$router.push({ name: 'cabinet.account' })
    }
  }
}
</script>
<style scoped>
  .page-content{
    display: flex;
    align-items: center;
  }
  .logo{
    display: block;
    height: 35px;
    margin: 0 auto;
  }
</style>
