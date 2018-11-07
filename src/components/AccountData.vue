<template>
  <div>
    <credit-modal :show="showModal" v-on:hideModal="showModal = false"></credit-modal>
    <div class="item item-divider text-center">{{ account.aname }}</div>
    <div class="list list-borderless">
      <list-item title="Номер счёта" :content="account.aid" icon="account_box"></list-item>
      <list-item title="Статус счёта" :content="account.status" icon="sync"></list-item>
      <list-item title="Баланс" :content="account.balance + ' руб.'" icon="account_balance"></list-item>
      <list-item title="К оплате" :content="account.demand + ' руб.'" icon="attach_money"></list-item>
      <list-item v-if="account.bonus > 0" title="Бонусы" :content="account.bonus + ' руб.'" icon="card_giftcard"></list-item>
      <list-item v-if="account.status == 'Активен' && account.free_fund" title="Свободных средств" :content="account.free_fund + ' руб.'" icon="payment"></list-item>
    </div>
    <div class="padding" v-if="account.status == 'Блокировка' && !account.overdue">
      <button class="button button-positive button-full button-outline" @click="showModal = true">Взять кредит</button>
    </div>
    <div v-if="account.overdue" class="item item-divider text-center">Вы не можете взять кредит <br> в данный момент.</div>
    <div v-if="account.credit_date" class="item item-divider text-center">Кредит до {{ account.credit_date }}</div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'
import CreditModal from '~/components/Modals/Credit'

export default{
  components: {
    CreditModal
  },
  data () {
    return {
      showModal: false
    }
  },
  computed: {
    ...mapGetters({
      account: 'billing/account'
    })
  }
}
</script>
