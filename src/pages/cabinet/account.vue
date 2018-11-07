<template>
    <div class="page-content">
      <account-data></account-data>
      <br>
      <div class="list list-borderless hl-list list-ios mi">
        <list-item-link title="Услуги и тарифы" link="cabinet.service"></list-item-link>
        <list-item-link title="Контактные данные" link="cabinet.contacts"></list-item-link>
        <list-item-link v-if="account.smart_card" title="Карты SMART-UNION" link="cabinet.cards"></list-item-link>
        <list-item-link title="Изменения баланса" link="cabinet.balances"></list-item-link>
        <!-- <list-item-link title="Журнал действий" link="cabinet.log"></list-item-link> -->
      </div>
    </div>
</template>
<script>

import { mapGetters } from 'vuex'
import axios from 'axios'
// import io from 'socket.io-client'
import AccountData from '~/components/AccountData'

export default{
  middleware: 'auth',
  components: {
    AccountData
  },
  data: () => ({
    notification: false
  }),
  computed: {
    ...mapGetters({
      account: 'billing/account',
      user: 'auth/user'
    }),
    channel () {
      return 'push.' + this.user + ':App\\Events\\PushNotification'
    }
  },
  async created () {
    await this.$store.dispatch('billing/fetchAccount')
    await this.$store.dispatch('meta/setTitle', '')
    /* if (this.user) {
      var socket = io('http://192.168.33.101:3000/?user=' + localStorage.getItem('user'))
      socket.on(this.channel, function (data) {
        console.log(data)
        this.notification = data
      }.bind(this))
    } */
  },
  methods: {
    async sendPush () {
      axios({
        method: 'get',
        url: 'push',
        params: {
          channel: 'push.' + this.user, message: 'SOCKET NOTIFICATION IS WORKING!'
        }
      })
    }
  }
}
</script>
