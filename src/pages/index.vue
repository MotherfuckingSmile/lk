<template>
  <div class="page has-navbar">
    <ion-tabs v-if="user" color="dark" tabs-style="tabs-positive">
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
  mounted () {
    if (this.user) {

    }
  },
  data () {
    return {
      menu: [
        { label: 'Кабинет', icon: 'home', link: 'cabinet', comp: 'cabinet' },
        { label: 'Обновления', icon: 'paper', link: 'cabinet', comp: 'news' },
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
  .toasted-left{
    justify-content: start !important;
  }
  .page-content{
    background: transparent !important;
  }
  .item-divider{
    background: transparent !important;
    color: rgba(255,255,255,0.8);
  }
  .list{
    border: solid 1px rgba(54,57,62,1) !important;
    box-shadow: 0px 0px 2px rgb(105,111,117), inset 0px 1px 2px -1px #CCC, inset 0px -1px 2px -1px #CCC !important;
  }
  .list-ios{
    background: transparent !important;
  }
  .page{
    background: rgb(92,94,98);
  }
</style>
