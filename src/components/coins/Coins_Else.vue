<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <coins-head :title="$route.query.gname+'/'+$route.query.areaname+'/'+$route.query.servername"></coins-head>
    <!---------------------------- 金币信息 ---------------------------->
    <div class="mt-100 bg-f6 clearfix">
      <ul class="tab-2 clearfix">
        <li class="fl border-right text-center lh110 f28">
          <span class="color-888 mr-20">单价</span>1元=40.2万金
        </li>
        <li class="fl text-center lh110 f28">
          <span class="color-888 mr-20">库存</span>1,202,540万金
        </li>
      </ul>
      <div class="bg-fff clearfix px-30 pr">
        <div class="fl lh110 w80 f32 color-000">购买数量<input class="coin-input lh110 pa" type="text" placeholder="请填写购买数量" v-model="buyNum"/></div>
        <div class="fr lh110 f32 color-000 pa r30">万金</div>
      </div>

    </div>
    <!---------------------------- 角色信息 ---------------------------->
    <coins-form :url="test"></coins-form>
    <!---------------------------- 购买 ---------------------------->
    <div class="fixed-bottom01 bg-fff px-30 py-20 pr">
      <div class="f32 color-000 lh110">价格<span class="f40 color-f75e46">￥{{buyNum/40.2|mathFilter}}</span></div>
      <button class="coin-btn bg-f75e46 lh110 color-fff f36 pa">立即购买</button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import CoinsForm from "./Coins_Form.vue"
  import Head from "../Head.vue"
  Vue.filter('mathFilter',function(value){
//      console.log(value)
//    if (!value) { return ''}
    return value.toFixed(2)
  });
  export default{
    props:{
      buyPrice: {
        type: Number,
        default: 40.2
      }
    },
    name:"CoinsSome",
    data() {
      return {
        buyNum:'',
        isActive:false,
        msg:"订单详情",
        test: (typeof this.$route.query.list == 'string')?JSON.parse(this.$route.query.list).list: []
      }
    },
    components: {
      "coins-head": Head,
      "coins-form": CoinsForm,
    },
    watch:{
      buyNum:
        function (val, oldVal){
          if(val==""){
            return
          }
          var patrn = /^\d+(\.\d{1,2}|\.)?$/;
          console.log(this.buyNum)
          if(patrn.test(val)){
            this.buyNum=this.buyNum
          }else{
            this.buyNum=oldVal
          }
          if(val/40.2>20||val/40.2==20){
            this.isActive=true
          }else{
            this.isActive=false
          }

        }
    },
    methods:{
      blur:function(){
        if(this.buyNum.substr(-1, 1) == '.'){
          this.buyNum = parseInt(this.buyNum)
        }
      }
    }

  };
</script>

<style>

</style>
