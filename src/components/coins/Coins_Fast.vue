<template>

  <!---------------------------- 金币信息 ---------------------------->
  <div class="coin-msg mt-100 bg-fff pb-30">
    <div class="box4 border-bottom clearfix">
      <div class="fl f28 lh110 color-000"><span class="f32 color-000 mr-20 brl pl-20">店铺发货</span>1元=40万金</div>
      <div class="fr f28 color-888 lh110">15分钟内发货</div>
    </div>
    <ul class="clearfix px-20 mt-30">
      <li class="fl text-center px-10" v-for="fastList in fastLists">
        <router-link class="d-block f28 my-10 pt-10" :to="{name:'CoinsSome', query:$route.query}">
          <b class="d-block f32 pb-5 color-f75e46 ">{{fastList.money}}元</b> {{fastList.money}}万金
        </router-link>
      </li>
      <li class="fl text-center px-10 ">
        <router-link class="d-block f32 my-10 color-f75e46" :to="{name:'CoinsElse', query:$route.query}">
          <b class="lh110">其他数额</b>
        </router-link>
      </li>

    </ul>
  </div>
</template>

<script>
  export default {
    name:"CoinsFast",
    data () {
      return {
        fastLists:[],
      }
    },
    created:function(){
      const selfs = this
      this.$http.get('/static/json/data.json').then((response)=>{
        setTimeout(() => {
          selfs.fastLists = response.body.fasts
        }, 500)
        },(response)=>{
            console.log("error")
          })
        }

  }
</script>

<style>

</style>
