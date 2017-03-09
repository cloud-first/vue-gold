<template>
  <div>快冲
    <router-link :to="{name:'CoinsSome', query:$route.query}" style="color: red">进入自定义金额</router-link>
  </div>
</template>

<script>
  export default {
      name: "CoinsFast"
  }
</script>

<style>

</style>
