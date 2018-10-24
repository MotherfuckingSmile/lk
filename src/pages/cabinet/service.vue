<template>
  <div>
  <back-header link="cabinet.account" title="Услуги и Тарифы"></back-header>
  <div class="page-content">
    <div v-for="sub in subsView" :key="sub.id">
      <div class="item item-divider text-center">{{ sub.service }}</div>
      <list-item title="Тариф" :content="sub.tname"></list-item>
      <list-item title="Стоимость" :content="sub.fee + ' руб./мес.'"></list-item>
      <list-item v-if="sub.sid === -1 && !isObjShapes()" title="Скорость" :content="'До ' + sub.shapes/1024 + ' Мбит/с'"></list-item>
      <div v-if="sub.sid === -1 && isObjShapes()" class="item item-divider text-center">Скорость</div>
      <list-item v-if="sub.sid === -1 && isObjShapes()" :title="'С ' + sub.shapes[1].hop + ':00 по ' + sub.shapes[0].hop + ':00'" :content="'До ' + sub.shapes[1].shape/1024 + ' Мбит/с'"></list-item>
      <list-item v-if="sub.sid === -1 && isObjShapes()" :title="'С ' + sub.shapes[0].hop + ':00 по ' + sub.shapes[1].hop + ':00'" :content="'До ' + sub.shapes[0].shape/1024 + ' Мбит/с'"></list-item>
      <div v-if="sub.block === true" class="item item-divider text-center">Стоит блокировка</div>
      <br v-if="sub.block === false">
      <div v-if="sub.sid === -1 && userData.status === 'Активен'" class="list list-borderless hl-list list-ios">
        <list-item-link v-if="sub.block === false" title="Заблокировать" link="cabinet.service"></list-item-link>
        <list-item-link v-if="sub.block === true" title="Разблокировать" link="cabinet.service"></list-item-link>
        <list-item-link title="Сменить тариф" link="cabinet.service"></list-item-link>
      </div>
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
      user: 'auth/user',
      userData: 'billing/account',
      subsView: 'billing/subsView'
    })
  },
  async created () {
    await this.$store.dispatch('billing/fetchViewSubs')
  },
  methods: {
    async back () {
      this.$router.push({ name: 'cabinet.account' })
    },
    isObjShapes () {
      for (let sub in this.subsView) {
        if (this.subsView[sub].sid === -1) {
          if (typeof this.subsView[sub].shapes === 'object') {
            return true
          } else {
            return false
          }
        }
      }
    }
  }
}
</script>
<style>
</style>
