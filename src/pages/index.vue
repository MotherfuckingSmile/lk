<template>
  <div class="page has-navbar">
    <ion-tabs v-if="user" color="primary" tabs-style="tabs-positive">
      <ion-tab v-for="item in menu" :key="item.comp" :label="item.label" :icon="item.icon">
        <!--<transition name="slide" mode="out-in">-->
          <component :is="item.comp"></component>
        <!--</transition>-->
      </ion-tab>
    </ion-tabs>
    <child v-else></child>
  </div>
</template>

<script>

import Cabinet from '~/pages/cabinet'
import News from '~/pages/news'
import Payment from '~/pages/payment'
import Settings from '~/pages/settings'
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',

  components: {
    Cabinet,
    News,
    Payment,
    Settings
  },
  computed: mapGetters({
    user: 'auth/user'
  }),
  data () {
    return {
      menu: [
        { label: 'Кабинет', icon: 'home', link: 'cabinet', comp: 'cabinet' },
        { label: 'Новости', icon: 'paper', link: 'cabinet', comp: 'news' },
        { label: 'Оплата', icon: 'card', link: 'cabinet', comp: 'payment' },
        { label: 'Настройки', icon: 'settings', link: 'settings', comp: 'settings' }
      ]
    }
  }
}

</script>
<style>
  .scnd-text{
    color: rgba(102,102,102);
    padding: 3px 0;
    text-align: center;
  }
</style>
