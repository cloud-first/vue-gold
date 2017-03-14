<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <!---------------------------- 金币信息 ---------------------------->
    <div class="mt-20 bg-f6 clearfix">
      <ul class="tab-2 clearfix">
        <li class="fl border-right text-center lh110 f28">
          <span class="color-888 mr-20">单价</span>1元={{buyPrice}}万金
        </li>
        <li class="fl text-center lh110 f28">
          <span class="color-888 mr-20">库存</span>1,202,540万金
        </li>
      </ul>
      <div class="bg-fff clearfix px-30">
        <div class="fl lh110 w80 f32 color-000">购买数量<input v-model="buyNum" :blur="blur" class="coin-input lh110 pl-30" type="text" placeholder="不得少于单价数量" /></div>
        <div class="fr lh110 f32 color-000">万金</div>
      </div>
    </div>
    <!---------------------------- 购买 ---------------------------->
    <div class="mt-20 bg-fff">
      <div class="p-30">
        <div class="f32 color-000">价格：<span class="color-f75e46">{{buyNum/40.2|mathFilter}}元</span>（最少购买20元）</div>
        <button :class="{'bg-f75e46':isActive,'bg-ccc':!isActive}" class=" w-100 lh110 color-fff f36 mt-30">立即购买</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
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
          isActive:false
        }
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
