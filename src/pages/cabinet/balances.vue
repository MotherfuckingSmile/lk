<template>
    <div class="page-content">
      <div v-for="item in balances" :key="item.date">
        <div class="item item-divider text-center">{{ item.date }}</div>
        <div class="list list-borderless hl-list list-ios">
          <list-item title="Операция" :content="item.operation"></list-item>
          <list-item title="Примечание" :content="item.note"></list-item>
          <list-item title="Сумма" :content="item.sum + ' руб.'"></list-item>
          <list-item title="Баланс" :content="item.balance + ' руб.'"></list-item>
        </div>
      </div>
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </div>
</template>
<script>

import axios from 'axios'

export default {
  data () {
    return {
      limit: 10,
      offset: 0,
      balances: []
    }
  },
  async created () {
    await this.$store.dispatch('meta/setTitle', 'Изменения баланса')
    await this.$store.dispatch('meta/setLink', 'cabinet.account')
  },
  methods: {
    infiniteHandler ($state) {
      axios.get('/cabinet/balances/get', {
        params: {
          limit: this.limit,
          offset: this.offset
        }
      }).then(({ data }) => {
        if (data.length) {
          this.offset += this.limit
          this.balances.push(...data)
          $state.loaded()
        } else {
          $state.complete()
        }
      })
    }
  }
}
</script>
