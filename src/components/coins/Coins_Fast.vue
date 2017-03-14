<template>
  <div>
    <div class="coin-msg mt-20 bg-fff pb-30">
      <div class="box4 clearfix">
        <div class="fl f28 lh110"><span class="color-888 mr-20">单价</span>1元=40万金</div>
        <div class="fr f28 color-888 lh110">5分钟内发货</div>
      </div>
      <ul class="clearfix px-30">
        <li class="fl text-center mx-5 mt-20" v-for="fastList in fastLists">
          <a class="d-block f28 mt-25">
            <span class="d-block f32 color-f75e46">{{fastList.money}}元</span> {{fastList.prices}}万金
          </a>
        </li>
        <li class="fl text-center mx-5 mt-20">

            <router-link  class="d-block f32 color-f75e46 lh110" :to="{name:'CoinsSome', query:$route.query}">其他数额</router-link>

        </li>
      </ul>
    </div>

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
