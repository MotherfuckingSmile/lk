<template>
    <div class="page-content">
      <account-data></account-data>
      <br>
      <div class="list list-borderless hl-list list-ios">
        <list-item-link title="Услуги и тарифы" link="cabinet.service"></list-item-link>
        <list-item-link title="Контактные данные" link="cabinet.contacts"></list-item-link>
        <list-item-link v-if="account.smart_card" title="Карты SMART-UNION" link="cabinet.cards"></list-item-link>
        <list-item-link title="Изменения баланса" link="cabinet.balances"></list-item-link>
        <list-item-link title="Журнал действий" link="cabinet.log"></list-item-link>
      </div>
    </div>
</template>
<script>

import { mapGetters } from 'vuex'
import AccountData from '~/components/AccountData'

export default{
  middleware: 'auth',
  components: {
    AccountData
  },
  computed: {
    ...mapGetters({
      account: 'billing/account'
    })
  },
  async created () {
    await this.$store.dispatch('billing/fetchAccount')
    await this.$store.dispatch('meta/setTitle', '')
  }
}
</script>
