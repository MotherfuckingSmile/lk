<template>
  <div class="page-content">
    <div class="item item-divider text-center">Ваш тарифный план:</div>
    <div class="item-divider text-center">{{ services[0].tname }}</div>
    <div class="item item-divider text-center">Доступные тарифные планы:</div>
    <div class="padding-top padding-bottom" v-for="tariff in tariffs" :key="tariff.tname" v-if="tariff.tid !== services[0].tid">
      <list-item title="Тариф" :content="tariff.tname"></list-item>
      <list-item title="Стоимость в месяц" :content="tariff.fee"></list-item>
      <list-item title="Скорость" :content="tariff.shapes/1024 + ' Мбит/c'"></list-item>
      <button class="button button-positive button-full" @click="switchTariff(tariff.tid)">Сменить сейчас</button>
      <button class="button button-positive button-full" @click="switchTariff(tariff.tid, 1)">Запланировать</button>
    </div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'
import Form from 'vform'

export default{
  middleware: 'auth',
  data () {
    return {
      form: new Form({
        tid: null,
        alt: null
      })
    }
  },
  async created () {
    await this.$store.dispatch('meta/setTitle', 'Смена тарифа')
    await this.$store.dispatch('meta/setLink', 'cabinet.service')
    await this.$store.dispatch('billing/fetchTariffs')
  },
  computed: {
    ...mapGetters({
      tariffs: 'billing/tariffs',
      services: 'billing/services'
    })
  },
  methods: {
    async switchTariff (tid, alt = null) {
      this.form.alt = alt || null
      this.form.tid = tid
      await this.form.patch('/cabinet/services/switch')
      this.$router.push({name: 'cabinet.service'})
    }
  }
}
</script>
