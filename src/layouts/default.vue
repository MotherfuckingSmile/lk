<template>
<ion-app>
  <sidebar-menu/>
  <transition name="transitionContent" mode="out-in" appear>
    <ion-page class="ion-page" main>
      <app-header/>
      <child/>
    </ion-page>
  </transition>
  <ion-menu-controller></ion-menu-controller>
</ion-app>
</template>

<script>
import SidebarMenu from '~/components/SidebarMenu'
import AppHeader from '~/components/AppHeader'

export default {
  name: 'MainLayout',

  components: {
    SidebarMenu,
    AppHeader
  }
}
</script>
<style>

</style>
