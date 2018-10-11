<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-toggle>
          <ion-button>
            <ion-icon slot="icon-only" name="menu"></ion-icon>
          </ion-button>
        </ion-menu-toggle>
      </ion-buttons>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>
<script>
import { mapGetters } from 'vuex'

export default{
  computed: mapGetters({
    title: 'meta/title'
  })
}
</script>
<style>

</style>
