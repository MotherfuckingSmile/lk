<template>
  <div class="item item-borderless hl-item thin">
    <div class="hairline-top"></div>
    <div class="hairline-bottom"></div>
    {{ title }}
    <span class="item-note">{{ content }}</span>
  </div>
</template>
<script>
export default {
  name: 'ListItem',
  props: [
    'title', 'content'
  ]
}
</script>
