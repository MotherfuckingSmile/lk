<template>
  <div v-show="show">
    <div class="bg"></div>
    <div class="popup-container popup-showing active">
      <div class="popup">
        <div class="popup-head">
          <div class="popup-title">Кредит</div>
        </div>
        <div class="popup-body">
          <p class="padding">Кредит разблокирует услуги связи сроком на 3 дня, в течение которого необходимо оплатить задолженность.</p>
          <p class="padding">В случае неуплаты в указанный срок, возможность взятия кредита блокируется на следующий месяц.</p>
          <p class="padding">Желаете взять кредит?</p>
        </div>
        <div class="popup-buttons">
          <button @click="$emit('hideModal')" class="button button-block button-default">Нет</button>
          <button @click="getCredit()" class="button button-block button-positive">Да</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import axios from 'axios'

export default {
  props: [
    'show'
  ],
  methods: {
    async getCredit () {
      try {
        await axios.post('/cabinet/account/credit')
        await this.$store.dispatch('billing/fetchAccount')
        this.$emit('hideModal')
      } catch (e) {
        console.log('FAILURE TO BRING STATUS')
      }
    }
  }
}
</script>
<style scoped>
  .bg{
    display: block;
    position: fixed;
    z-index: 10;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.3);
  }
</style>
