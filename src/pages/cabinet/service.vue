<template>
  <div class="page-content">
    <div v-for="sub in services" :key="sub.id">
      <div class="item item-divider text-center">{{ sub.service }}</div>
      <list-item title="Тариф" :content="sub.tname"></list-item>
      <list-item title="Стоимость" :content="sub.fee + ' руб./мес.'"></list-item>
      <list-item v-if="sub.sid === -1 && !isObjShapes()" title="Скорость" :content="'До ' + sub.shapes/1024 + ' Мбит/с'"></list-item>
      <div v-if="sub.sid === -1 && isObjShapes()" class="item item-divider text-center">Скорость</div>
      <list-item v-if="sub.sid === -1 && isObjShapes()" :title="'С ' + sub.shapes[1].hop + ':00 по ' + sub.shapes[0].hop + ':00'" :content="'До ' + sub.shapes[1].shape/1024 + ' Мбит/с'"></list-item>
      <list-item v-if="sub.sid === -1 && isObjShapes()" :title="'С ' + sub.shapes[0].hop + ':00 по ' + sub.shapes[1].hop + ':00'" :content="'До ' + sub.shapes[0].shape/1024 + ' Мбит/с'"></list-item>
      <div v-if="sub.block === true" class="item item-divider text-center" style="color: red;">Услуга заблокирована</div>
      <div v-if="sub.block_on !== null" class="item item-divider text-center">Запланирована блокировка <br> на {{ formatDate(sub.block_on) }}</div>
      <div v-if="sub.block_off !== null" class="item item-divider text-center">Запланирована разблокировка <br> на {{ formatDate(sub.block_off) }}</div>
      <div v-if="sub.alt_date !== null" class="item item-divider text-center">Запланирована смена тарифа <br> на {{ formatDate(sub.alt_date) }}</div>
      <br v-if="sub.block === false && !sub.block_on">
      <div v-if="sub.sid === -1 && account.status === 'Активен'" class="list list-borderless hl-list list-ios">
        <list-item-link :title="blockTitle" link="cabinet.serviceBlock"></list-item-link>
        <list-item-link title="Сменить тариф" link="cabinet.serviceSwitch"></list-item-link>
      </div>
    </div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'

export default{
  middleware: 'auth',
  computed: {
    ...mapGetters({
      account: 'billing/account',
      services: 'billing/services'
    }),
    blockTitle () {
      if (this.services[0].block === false) {
        return 'Заблокировать'
      } else {
        return 'Разблокировать'
      }
    }
  },
  async created () {
    await this.$store.dispatch('billing/fetchServices')
    await this.$store.dispatch('meta/setTitle', 'Услуги и Тарифы')
    await this.$store.dispatch('meta/setLink', 'cabinet.account')
  },
  methods: {
    isObjShapes () {
      for (let service in this.services) {
        if (this.services[service].sid === -1) {
          if (typeof this.services[service].shapes === 'object') {
            return true
          } else {
            return false
          }
        }
      }
    },
    formatDate (date) {
      let arrDate = date.split('-')
      // let date = new Date(arrDate[0], (arrDate[1] - 1), arrDate[2])
      return arrDate[2] + '.' + arrDate[1] + '.' + arrDate[0]
    }
  }
}
</script>
<style>
</style>
