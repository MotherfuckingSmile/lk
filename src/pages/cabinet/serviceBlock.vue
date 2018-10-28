<template>
    <div class="page-content">
      <div v-if="services[0].block_on || services[0].block_off">
        <div v-if="services[0].block_on !== null" class="item item-divider text-center">Запланирована блокировка <br> на {{ formatDate(services[0].block_on) }}</div>
        <div v-if="services[0].block_off !== null" class="item item-divider text-center">Запланирована разблокировка <br> на {{ formatDate(services[0].block_off) }}</div>
        <button class="button button-assertive button-full" @click="cancel">Отменить</button>
      </div>
      <div v-else>
        <div class="item item-divider text-center">{{ blockTitle }} услугу</div>
        <form @submit.prevent="blockAwait" @keydown="form.onKeydown($event)">
          <div class="von-input-wrapper">
            <label class="item item-borderless item-input von-input">
              <div class="hairline-top"></div>
              <span class="input-label">Дата</span>
              <input type="date" v-model="date" placeholder="Выберите дату">
              <div class="hairline-bottom"></div>
            </label>
          </div>
          <button type="submit" class="button button-positive button-full">Запланировать</button>
        </form>
        <br>
        <div class="item item-divider text-center">или</div>
        <br>
        <button class="button button-positive button-full" @click="blockNow">{{ blockTitle + ' сейчас' }}</button>
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
        block: null,
        block_on: null,
        block_off: null
      }),
      date: null
    }
  },
  async created () {
    await this.$store.dispatch('meta/setTitle', this.services[0].tname)
    await this.$store.dispatch('meta/setLink', 'cabinet.service')
    this.form.block = this.services[0].block
    this.form.block_on = this.services[0].block_on
    this.form.block_off = this.services[0].block_off
  },
  computed: {
    ...mapGetters({
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
  methods: {
    formatDate (date) {
      let arrDate = date.split('-')
      // let date = new Date(arrDate[0], (arrDate[1] - 1), arrDate[2])
      return arrDate[2] + '.' + arrDate[1] + '.' + arrDate[0]
    },
    async blockAwait () {
      let arrDate = this.date.split('-')
      let remoteDate = new Date(arrDate[0], (arrDate[1] - 1), arrDate[2])
      let curDate = new Date()
      if ((remoteDate - curDate) > 0) {
        if (this.services[0].block === false) {
          this.form.block_on = this.date
        } else {
          this.form.block_off = this.date
        }
        await this.form.patch('/cabinet/services/block')
        this.$router.push({name: 'cabinet.service'})
      }
    },
    async blockNow () {
      this.form.block = !this.services[0].block
      console.log(this.form.block)
      await this.form.patch('/cabinet/services/block')
      this.$router.push({name: 'cabinet.service'})
    },
    async cancel () {
      this.form.block_on = null
      this.form.block_off = null
      await this.form.patch('/cabinet/services/block')
      await this.$store.dispatch('billing/fetchServices')
    }
  }
}
</script>
