<template>
  <div class="bar bar-header bar-light">
    <div class="buttons"><button @click.prevent="back" class="button button-icon ion-ios-arrow-back"></button></div>
    <h1 class="title">{{ title }}</h1>
    <div class="buttons"></div>
  </div>
</template>
<script>
export default{
  name: 'BackHeader',
  props: [
    'link', 'title'
  ],
  methods: {
    async back () {
      this.$router.push({name: this.link})
    }
  }
}
</script>
