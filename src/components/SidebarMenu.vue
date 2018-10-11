<template>
  <ion-menu v-if="user">
    <ion-header>
      <ion-toolbar color="light">
        <ion-img src="images/fortuna.png" style="height: 30px; margin: 10px 0;"></ion-img>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-list-header>
          Личный Кабинет
        </ion-list-header>
        <ion-menu-toggle auto-hide="false">
          <ion-item button>
            <ion-icon name='home'></ion-icon>
            <ion-label>
              Новости
            </ion-label>
          </ion-item>
          <ion-item button>
            <ion-icon name='home'></ion-icon>
            <ion-label>
              Главная
            </ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
  </ion-menu>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({

  }),

  computed: mapGetters({
    user: 'auth/user'
  }),
  mounted: () => {
  },
  created () {

  },
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

<style>
</style>
