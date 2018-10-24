<template>
  <router-link :to="{ name: link }" class="item item-borderless hl-item item-icon-right" style="color: #4a90e2;">
    <div class="hairline-top"></div>
    <div class="hairline-bottom"></div>
    {{ title }}
    <span v-if="content" class="item-note">{{ content }}</span>
    <i class="icon ion-ios-arrow-right"></i>
  </router-link>
</template>
<script>
export default {
  name: 'ListItemLink',
  props: [
    'link', 'title', 'content'
  ]
}
</script>
