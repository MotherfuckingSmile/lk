<template>
    <div class="page-content">
      <div class="item item-divider text-center">Редактировать данные</div>
      <form @submit.prevent="" @keydown="form.onKeydown($event)">
        <div class="von-input-wrapper">
          <label class="item item-borderless item-input von-input">
            <div class="hairline-top"></div>
            <span class="input-label">E-mail:</span>
            <input type="text" v-model="form.email" placeholder="Введите E-mail">
            <div class="hairline-bottom"></div>
          </label>
          <span class="input-clear"></span>
        </div>
        <div v-for="phone in form.phones" :key="phone.id" class="von-input-wrapper">
          <label class="item item-borderless item-input von-input">
            <div class="hairline-top"></div>
            <span class="input-label">Телефон:</span>
            <input type="tel" minlength="11" maxlength="14" v-model="phone.value" placeholder="Введите телефон">
            <div class="hairline-bottom"></div>
          </label>
          <span class="input-clear"></span>
        </div>
        <button class="button button-positive button-full" @click="addPhone">Добавить телефон</button>
        <button type="submit" class="button button-positive button-full" @click="save">Сохранить</button>
      </form>
    </div>
</template>
<script>

import Form from 'vform'
import { mapGetters } from 'vuex'

export default{
  middleware: 'auth',
  data: () => ({
    form: new Form({
      email: '',
      phones: []
    })
  }),
  computed: {
    ...mapGetters({
      contacts: 'billing/contacts'
    }),
    errors () {
      return this.form.errors.errors
    }
  },
  async created () {
    this.refresh()
    await this.$store.dispatch('meta/setTitle', 'Контактные данные')
    await this.$store.dispatch('meta/setLink', 'cabinet.account')
  },
  methods: {
    async refresh () {
      await this.$store.dispatch('billing/fetchContacts')
      this.form.email = this.contacts.email
      this.form.phones = this.contacts.phones
    },
    addPhone () {
      if (this.form.phones[this.form.phones.length - 1].value !== '') { this.form.phones.push({id: this.form.phones[this.form.phones.length], value: ''}) }
    },
    async save () {
      try {
        const { data } = await this.form.patch('/cabinet/contacts/update')
        if (data === 1) {
          let data = {}
          data.message = 'Данные сохранены'
          console.log(data)
          this.$toasted.global.successMessage(data)
        }
      } catch (e) {
        if (this.errors.email) {
          this.errors.message = this.errors.email[0]
          this.$toasted.global.errorMessage(this.errors)
        }
      }

      // SHOW MODAL, UPDATE PAGE ETC...
      // this.refresh()
    }
  }
}
</script>
