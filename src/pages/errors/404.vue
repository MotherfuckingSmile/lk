<template>
  <ion-content>
    {{ $route.path }}
  </ion-content>
</template>

<script>
export default {
  name: 'NotFound',

  created () {
    console.log(this.$route)
  }
}
</script>
