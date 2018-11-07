<template>
    <div class="page-content">
      <div style="width: 100%;">
        <img src="static/images/fortuna.png" class="logo">
        <br>
        <br>
        <form @submit.prevent="login" @keydown="form.onKeydown($event)">
          <div class="von-input-wrapper">
            <label class="item item-input von-input">
              <div class="hairline-top"></div>
              <span class="input-label">Лицевой счёт</span>
              <input type="number" v-model="form.aid" autofocus>
              <div class="hairline-bottom"></div>
            </label>
            <span class="input-clear"></span>
          </div>
          <div class="von-input-wrapper">
            <label class="item item-input von-input">
              <div class="hairline-top"></div>
              <span class="input-label">Пароль</span>
              <input type="password" v-model="form.password">
              <div class="hairline-bottom"></div>
            </label>
            <span class="input-clear"></span>
          </div>
          <br>
          <br>
          <div class="von-input-wrapper">
            <button type="submit" class="button button-positive button-block">Войти</button>
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
      password: '',
      push: '',
      subscribe: true
    })
  }),
  methods: {
    async login () {
      this.form.push = localStorage.getItem('pushId') || 'empty'
      // Submit the form.
      const { data } = await this.form.post('/login')
      if (data.message) {
        this.$toasted.global.errorMessage(data)
      } else {
        // Save the token.
        this.$store.dispatch('auth/saveToken', {
          token: data.token
        })
        // Redirect home.
        this.$router.push({ name: 'cabinet.account' })
      }
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
    height: 50px;
    margin: 0 auto;
    background: #fff;
    padding: 8px 14px;
    border-radius: 30px;
  }
  .page-content{
    background: rgba(54,57,62, 0.8);
  }
  .item-input{
    background: rgb(105,111,117);
    border: solid 1px rgba(54,57,62, 0.4);
  }
  .input-label{
    color: #fff;
  }
  input{
    color: rgba(255,255,255,0.9);
  }
  .von-input-wrapper{
    border: none !important;
  }
  .button-positive{
    border:solid 1px #1b417d;
    border-radius: 4px;
    color:#e9f2f2;
    background-color:#2072c7;
    background-image: -moz-linear-gradient(top, #2072c7 0%, #1a58cc 100%);
    background-image: -webkit-gradient(linear, left top, left bottom, from(#2072c7) ,to(#1a58cc));
    background-image: -o-linear-gradient(top, #2072c7 0%, #1a58cc 100%);
    background-image: -ms-linear-gradient(top, #2072c7 0% ,#1a58cc 100%);
    background-image: linear-gradient(top, #2072c7 0% ,#1a58cc 100%);
    -webkit-box-shadow:0px 0px 2px rgb(105,111,117), inset 0px 0px 1px #ccc;
    -moz-box-shadow: 0px 0px 2px rgb(105,111,117),  inset 0px 0px 1px #ccc;
    box-shadow:0px 0px 2px rgb(105,111,117), inset 0px 0px 2px #ccc;
  }
  .button-block{
    width: 50%;
    margin: auto;
  }
</style>
