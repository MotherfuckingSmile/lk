<template>
    <div class="page-content">
        <div class="item item-divider text-center">Изменения</div>
        <div class="list list-borderless hl-list list-ios">
          <list-item v-for="item in log" :key="item.stamp" :title="item.stamp" :content="item.notes"></list-item>
        </div>
      <infinite-loading @infinite="infiniteHandler">
        <div slot="no-more" class="item-divider scnd-text">- Больше нет данных -</div>
        <div slot="no-results" class="item item-divider text-center">Нет данных</div>
      </infinite-loading>
    </div>
</template>
<script>

import axios from 'axios'

export default {
  middleware: 'auth',
  data () {
    return {
      limit: 15,
      offset: 0,
      log: []
    }
  },
  async created () {
    await this.$store.dispatch('meta/setTitle', 'Журнал действий')
    await this.$store.dispatch('meta/setLink', 'cabinet.account')
  },
  methods: {
    infiniteHandler ($state) {
      axios.get('/cabinet/log/get', {
        params: {
          limit: this.limit,
          offset: this.offset
        }
      }).then(({ data }) => {
        if (data.length) {
          this.offset += this.limit
          this.log.push(...data)
          $state.loaded()
        } else {
          $state.complete()
        }
      })
    }
  }
}
</script>
