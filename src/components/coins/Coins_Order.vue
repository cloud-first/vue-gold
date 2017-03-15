<template>
  <div>
    <coins-head :title="订单详情"></coins-head>

    <!---------------------------- 订单取消 ---------------------------->
    <div class="mt-100 px-30 or-title lh130 pr">
      <img class="pa w-100" src="../images/coins/border-bg.png" />
      <span class="pl-20">交易取消</span>
    </div>

    <router-view></router-view>

    <coins-person></coins-person>
  </div>
</template>

<script>

  export default {
    name: "CoinsOrder",

    data () {


    }

  }
</script>
