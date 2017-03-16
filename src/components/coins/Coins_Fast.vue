<template>
  <div>
  <div class="box4 border-bottom clearfix">
    <div class="fl f28 lh110 color-000"><span class="f32 color-000 mr-20 brl pl-20">店铺发货</span>1元=40万金</div>
    <div class="fr f28 color-888 lh110">15分钟内发货</div>
  </div>
    <ul class="clearfix px-20 mt-30">
      <li class="fl text-center px-10 ">
        <a class="d-block f28 my-10 pt-10">
          <b class="d-block f32 pb-5 color-f75e46 ">10元</b> 400万金
        </a>
      </li>
      <li class="fl text-center px-10 ">
        <a class="d-block f28 my-10  pt-10">
          <b class="d-block f32 pb-5 color-f75e46 ">50元</b> 2000万金
        </a>
      </li>
      <li class="fl text-center px-10 ">
        <a class="d-block f28 my-10  pt-10">
          <b class="d-block f32 pb-5 color-f75e46 ">100元</b> 4000万金
        </a>
      </li>
      <li class="fl text-center px-10 ">
        <a class="d-block f28 my-10  pt-10">
          <b class="d-block f32 pb-5 color-f75e46 ">200元</b> 8000万金
        </a>
      </li>
      <li class="fl text-center px-10 ">
        <a class="d-block f28 my-10  pt-10">
          <b class="d-block f32 pb-5 color-f75e46 ">300元</b> 1200万金
        </a>
      </li>
      <li class="fl text-center px-10 ">
        <a class="d-block f28 my-10  pt-10">
          <b class="d-block f32 pb-5 color-f75e46 ">500元</b> 20000万金
        </a>
      </li>
      <li class="fl text-center px-10 ">
        <a class="d-block f28 my-10  pt-10">
          <b class="d-block f32 pb-5 color-f75e46 ">800元</b> 32000万金
        </a>
      </li>
      <li class="fl text-center px-10 ">
        <a class="d-block f28 my-10 pt-10">
          <b class="d-block f32 pb-5 color-f75e46 ">1000元</b> 40000万金
        </a>
      </li>
      <li class="fl text-center px-10 ">
        <a class="d-block f32 my-10 color-f75e46 ">
          <b class="lh110">其他数额</b>
        </a>
      </li>
    </ul>
    <!--<div class="coin-msg mt-20 bg-fff pb-30">-->
      <!--<div class="box4 clearfix">-->
        <!--<div class="fl f28 lh110"><span class="color-888 mr-20">单价</span>1元=40万金</div>-->
        <!--<div class="fr f28 color-888 lh110">5分钟内发货</div>-->
      <!--</div>-->
      <!--<ul class="clearfix px-30">-->
        <!--<li class="fl text-center mx-5 mt-20" v-for="fastList in fastLists">-->
          <!--<a class="d-block f28 mt-25">-->
            <!--<span class="d-block f32 color-f75e46">{{fastList.money}}元</span> {{fastList.prices}}万金-->
          <!--</a>-->
        <!--</li>-->
        <!--<li class="fl text-center mx-5 mt-20">-->

            <!--<router-link  class="d-block f32 color-f75e46 lh110" :to="{name:'CoinsSome', query:$route.query}">其他数额</router-link>-->

        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->

  </div>
</template>

<script>
  export default {
    name:"CoinsPerson",
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
