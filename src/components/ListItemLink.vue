<template>
  <router-link :to="{ name: link }" class="item item-borderless hl-item item-icon-right">
    <div class="hairline-top"></div>
    <div class="hairline-bottom"></div>
    {{ title }}
    <span v-if="content" class="item-note">{{ content }}</span>
    <i class="icon ion-ios-arrow-right"></i>
  </router-link>
</template>
<script>
export default {
  // #4a90e2
  name: 'ListItemLink',
  props: [
    'link', 'title', 'content'
  ]
}
</script>
<style>
  .item{
    background: transparent;
  }
</style>
