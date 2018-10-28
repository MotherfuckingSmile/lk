<!--suppress ALL -->
<template>
  <div>
    <logo-header v-if="title === ''"></logo-header>
    <back-header v-else :link="link" :title="title"></back-header>
    <transition :name="transitionName" mode="out-in">
      <router-view style="animation-duration: 0.3s"></router-view>
    </transition>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default{
  data () {
    return {
      transitionName: 'slideLeft'
    }
  },
  computed: mapGetters({
    title: 'meta/title',
    link: 'meta/link'
  }),
  watch: {
    $route: function (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = (toDepth < fromDepth || to.path === '/cabinet/account') ? 'slideUp' : 'slideDown'
    }
  }
}
</script>
