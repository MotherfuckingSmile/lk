<template>
    <ion-content padding>
      <h1>Main Content</h1>
      <p>Click the icon in the top left to toggle the menu.</p>
    </ion-content>
</template>

<script>
export default {
  middleware: 'auth',
  async created () {
    await this.$store.dispatch('meta/updateTitle', 'Главная')
  }
}
</script>
