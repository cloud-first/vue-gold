<template>
  <div class="coin-kc mt-20 bg-fff">
    <ul class="clearfix">
      <!--列表循环-->
      <li class="border-bottom p-30" v-for="personList in personLists">
        <div class="clearfix">
          <span class="fl f32 color-010101">{{personList.prices}}万金</span>
          <span class="fr f32 color-f75e46">{{personList.money}}元</span>
        </div>
        <div class="clearfix mt-25">
          <div class="fl f28 color-010101">
            <span class="color-888">单价</span>1元={{personList.perPrices}}万金
          </div>
          <div class="fr">
            <i class="mr-20"><img :src="personList.url"/></i><span class="f28 color-888">库存 {{personList.kusun}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
      name:"CoinsPerson",
      data () {
        return {
          personLists:[],
        }
      },
      methods: {

      },
      created () {
        const self = this
        this.$http.get('/static/json/data.json').then((response)=>{
          setTimeout(() => {
//            console.log(response.body.lists)
            response.body.lists.forEach(function(i,n){

            })
            this.personLists = response.body.lists
          }, 500)
        },(response)=>{
            console.log("error")
          })
        }

  }
</script>

<style>

</style>
