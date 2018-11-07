<template>
  <div class="item item-borderless hl-item thin mi" :class="{'item-icon-left': icon}">
    {{ title }}
    <i v-if="icon" class="icon material-icons">{{ icon }}</i>
    <span class="item-note">{{ content }}</span>
  </div>
</template>
<script>
export default {
  name: 'ListItem',
  props: [
    'title', 'content', 'icon'
  ]
}
</script>
<style>
  .mi{
    background: rgba(61,64,69,0.8) !important;
    color: rgba(255,255,255,0.8) !important;
  }
  .item-note{
    color: rgba(255,255,255,0.6) !important;
  }
</style>
