<template>
  <div id="home">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h4>{{ author }}</h4>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Vue Demos',
      author: 'Written by XyinM'
    }
  }
}
</script>

<style>
  #home{
    text-align: center;
    margin-top: 80px;
  }
</style>
