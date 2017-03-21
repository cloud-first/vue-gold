<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <coins-head :title="$route.query.gname+'/'+$route.query.areaname+'/'+$route.query.servername"></coins-head>
    <!---------------------------- 购买信息 ---------------------------->
    <div class="mt-100 bg-fff" @click="dropDrow_hide">
      <div class="px-30 py-30 border-bottom clearfix">
        <div class="fl">
          <div class="col-left01">
            <span class="sp01 color-000 f36">171混沌石</span>
          </div>
          <div class="pt-20">
            <span class="s1 f28 color-888">单价: </span>
            <span class="s2 f28 color-000">1元=17.1个</span>
          </div>
        </div>
        <div class="fr">
          <span class="d-block f36 color-m1 text-right">￥10</span>
          <span class="d-block coin-s2 pt-20 f28 color-888"><em class="mr-20"><img src="static/images/coins/mobile.png" /></em><em class="coin-e1">库存 1件</em></span>
        </div>
      </div>
      <div class="box border-bottom">
        <div class="line py-10">
          <span class="f32 color-000">库存数量</span>
          <div class="count2">
            <input class="reduce fl f48" name="" type="button" value="-" @click="coins_reduce">
            <input class="num fl f36" name="" type="number" v-model="coins_num">
            <input class="add fl common-color f48" name="" type="button" value="+" @click="coins_add">
          </div>
          <span class="f32 fr">件</span>
        </div>
      </div>
    </div>
    <!---------------------------- 购买 ---------------------------->
    <div class="fixed-bottom01 bg-fff px-30 py-20 pr">
      <div class="f32 color-000 lh110">合计<span class="f40 color-f75e46">￥501</span></div>
  	<button class="coin-btn bg-f75e46 lh110 color-fff f36 pa"  @click="dialogBox">立即购买</button>
    </div>
    <!---------------------------- 角色信息 ---------------------------->
    <coins-form :url="isTest"></coins-form>
		 <!---------------------------- 遮料层 ---------------------------->
	  	<dialog-cover v-if="dialog_cover"></dialog-cover>
	  		<!--弹出框-->
	  	<dialog-box v-if="dialog_box"></dialog-box>
	  </div> 	
  </div>
</template>

<script>
  import Vue from 'vue'
  import Head from "../Head.vue"
  import CoinsForm from "./Coins_Form.vue"
  import DialogCover from "../DialogCover.vue"
  import DialogBox from "../DialogBox.vue"
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
    name:"CoinsSales",
    data() {
      return {
        buyNum:'',
        isActive:false,
        dialog_box:false,
      	dialog_cover:false,
        msg:"订单详情",
        isTest: (typeof this.$route.query.list == 'string')?JSON.parse(this.$route.query.list).list: [],
        coins_num:5
      }
    },
    components: {
      "coins-head": Head,
      "coins-form": CoinsForm,
      "dialog-cover":DialogCover,
      "dialog-box":DialogBox

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
      },
      coins_add:function () {
          this.coins_num++
      },
      coins_reduce:function () {
          this.coins_num--
      },
      dropDrow_hide:function(){
    		document.getElementById('drop_down').style.display="none"
    	},
    	 dialogBox:function(){
        	this.dialog_box = true;
        	this.dialog_cover =true;
        },
    }

  };
</script>

<style>

</style>
