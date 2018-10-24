<template>
  <div>
    <logo-header></logo-header>
    <div class="page-content">
      <account-data></account-data>
      <br>
      <div class="list list-borderless hl-list list-ios">
        <list-item-link title="Услуги и тарифы" link="cabinet.service"></list-item-link>
        <list-item-link title="Контактные данные" link="cabinet.account"></list-item-link>
        <list-item-link title="Карты SMART-UNION" link="cabinet.account"></list-item-link>
        <list-item-link title="История платежей" link="cabinet.account"></list-item-link>
        <list-item-link title="Журнал действий" link="cabinet.account"></list-item-link>
      </div>
      <div class="item item-divider text-center">Телефон: 8(800)775-66-33</div>
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
      user: 'auth/user',
      account: 'billing/account'
    })
  },
  async created () {
    await this.$store.dispatch('billing/fetchAccount')
  }
}
</script>
