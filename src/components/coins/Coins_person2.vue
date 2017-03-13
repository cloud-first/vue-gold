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
      <!--列表循环end-->
      <!--<li class="border-bottom p-30">-->
      <!--<div class="clearfix">-->
      <!--<span class="fl f32 color-010101">20400万金</span>-->
      <!--<span class="fr f32 color-f75e46">500元</span>-->
      <!--</div>-->
      <!--<div class="clearfix mt-25">-->
      <!--<div class="fl f28 color-010101">-->
      <!--<span class="color-888">单价</span>1元=40.80万金-->
      <!--</div>-->
      <!--<div class="fr">-->
      <!--<i class="mr-20"><img src="/static/images/common/mobile.png"/></i><span class="f28 color-888">库存 1</span>-->
      <!--</div>-->
      <!--</div>-->
      <!--</li>-->
      <!--<li class="border-bottom p-30">-->
      <!--<div class="clearfix">-->
      <!--<span class="fl f32 color-010101">8012万金</span>-->
      <!--<span class="fr f32 color-f75e46">200元</span>-->
      <!--</div>-->
      <!--<div class="clearfix mt-25">-->
      <!--<div class="fl f28 color-010101">-->
      <!--<span class="color-888">单价</span>1元=40.80万金-->
      <!--</div>-->
      <!--<div class="fr">-->
      <!--<i class="mr-20"><img src="/static/images/common/mobile.png"/></i><span class="f28 color-888">库存 1</span>-->
      <!--</div>-->
      <!--</div>-->
      <!--</li>-->
      <!--<li class="border-bottom p-30">-->
      <!--<div class="clearfix">-->
      <!--<span class="fl f32 color-010101">20400万金</span>-->
      <!--<span class="fr f32 color-f75e46">500元</span>-->
      <!--</div>-->
      <!--<div class="clearfix mt-25">-->
      <!--<div class="fl f28 color-010101">-->
      <!--<span class="color-888">单价</span>1元=40.80万金-->
      <!--</div>-->
      <!--<div class="fr">-->
      <!--<i class="mr-20"><img src="/static/images/common/pc.png"/></i><span class="f28 color-888">库存 5</span>-->
      <!--</div>-->
      <!--</div>-->
      <!--</li>-->
      <!--<li class="border-bottom p-30">-->
      <!--<div class="clearfix">-->
      <!--<span class="fl f32 color-010101">3910万金</span>-->
      <!--<span class="fr f32 color-f75e46">200元</span>-->
      <!--</div>-->
      <!--<div class="clearfix mt-25">-->
      <!--<div class="fl f28 color-010101">-->
      <!--<span class="color-888">单价</span>1元=40.80万金-->
      <!--</div>-->
      <!--<div class="fr">-->
      <!--<i class="mr-20"><img src="/static/images/common/pc.png"/></i><span class="f28 color-888">库存 3</span>-->
      <!--</div>-->
      <!--</div>-->
      <!--</li>-->
    </ul>
  </div>
</template>

<script>

  import Vue from 'vue'
  import VueResource from 'vue-resource'
  Vue.use(VueResource)
  export default{
    name:"CoinsPerson",
    data () {
      return {
        personObject:{},
        personLists:[{
          prices:''
        },
          {
            money:''
          },
          {
            url:''
          },
          {
            kusun:''
          },
          {
            perPrices:''
          }
        ],

      }
    },

    methods: {

    },
    created () {
      const self = this
      this.$http.get('/static/json/data.json').then((response)=>{
        setTimeout(() => {
        console.log(response.body.lists)
        response.body.lists.forEach(function(i,n){
          console.log(i);
          self.personLists[n].prices = response.body.lists[n].prices
          self.personLists[n].money = response.body.lists[n].money
          self.personLists[n].url = response.body.lists[n].url
          self.personLists[n].kusun = response.body.lists[n].kusun
          self.personLists[n].perPrices = response.body.lists[n].perPrices

        })
        console.log(self.personLists)
//            this.personLists = response.body.lists
      }, 100)

    },(response)=>{
        console.log("error")
      })
    }

  }
</script>

<style>

</style>
