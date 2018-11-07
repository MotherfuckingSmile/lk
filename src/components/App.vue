<template>
  <div id="app">
    <loading ref="loading"/>
    <transition name="page" mode="out-in">
      <main-page></main-page>
    </transition>
  </div>
</template>

<script>

import Loading from './Loading'
import MainPage from '~/pages'

export default {
  el: '#app',

  components: {
    Loading,
    MainPage
  },

  mounted () {
    this.$loading = this.$refs.loading
  }
}

</script>
