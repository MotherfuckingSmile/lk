<template>
  <div>
    <logo-header></logo-header>
    <div class="page-content">
      <p class="scnd-text">Телефон: 8-800-775-66-33
        <br>support@fortuna-dv.ru</p>
        <div @click.prevent="logout" class="item item-borderless hl-item text-center" style="color: red;">
          <div class="hairline-top"></div>
          <div class="hairline-bottom"></div>
          Выйти из аккаунта
        </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
