<template>
  <div class="bar bar-header bar-light">
    <div class="buttons"></div>
    <h1 class="title"><img src="static/images/fortuna.png" class="logo"></h1>
    <div class="buttons"></div>
  </div>
</template>
<script>
export default{
  name: 'LogoHeader'
}
</script>
<style scoped>
  .logo{
    display: block;
    height: 30px;
    margin: 7px auto;
    padding: 5px 10px;
    background: #fff;
    border-radius: 30px;
  }
  .bar{
    background: rgb(61,64,69);
  }
</style>
