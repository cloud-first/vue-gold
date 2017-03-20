<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <coins-head :title="$route.query.gname+'/'+$route.query.areaname+'/'+$route.query.servername"></coins-head>
    <!---------------------------- 金币信息 ---------------------------->
    <div class="mt-100 bg-f6 clearfix" @click="dropDrow_hide">
      <div class="bg-fff clearfix px-30 pr">
        <div class="fl lh110 f32 color-000">购买数量<span class="coin-num f32 pa">400万金</span></div>
        <div class="fr lh110 f28 color-666">单价 1元=40万金</div>
      </div>
    </div>
    <!---------------------------- 角色信息 ---------------------------->
    <coins-form :url="isTest"></coins-form>
    <!---------------------------- 购买 ---------------------------->
    <div class="fixed-bottom01 bg-fff px-30 py-20 pr">
      <div class="f32 color-000 lh110">价格<span class="f40 color-f75e46">￥0</span></div>
      <button class="coin-btn bg-f75e46 lh110 color-fff f36 pa" @click="dialogBox">立即购买</button>
    </div>
    <!---------------------------- 遮料层 ---------------------------->
    <div class="dialog_cover" v-if="dialog_cover"></div>
    <!--弹出框-->
			<div class="dialog-box2" @click="dropDrow_hide" v-if="dialog_box2">
				<div class="dialog-main">
					<div class="dialog-body color-fff" id="errortx">
						<i class="coinx mr-30"><img src="static/images/coins/coinx.png"></i>请填写收货角色姓名
					</div>
				</div>
			</div>

			<!--弹出框-->
			<div class="dialog-box bg-fff" id="dialog_show2" v-if="dialog_box">
				<div class="dialog-main">
					<div class="dialog-body" id="errortx">很抱歉，该商品类型手机版尚未开通,建议您去电脑版发布出售。</div>
					<div class="dialog-foot">
						<a class="dialog_close " href="javascript:void(0);" id="Ise" @click="dialogBox_hide">知道了</a>
					</div>
				</div>
			</div>
    
    
    
</div>
</template>

<script>
  import Vue from 'vue'
  import Head from "../Head.vue"
  import CoinsForm from "./Coins_Form.vue"
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
      name:"CoinsElse",
      data() {
        return {
          buyNum:'',
          isActive:false,
          msg:"订单详情",
          dialog_box2:false,
          dialog_box:false,
          dialog_cover:false,
          isTest: (typeof this.$route.query.list == 'string')?JSON.parse(this.$route.query.list).list: []
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
        },
        dropDrow_hide:function(){
        	document.getElementById('drop_down').style.display="none"
        },
        dialogBox:function(){
        	this.dialog_box = true;
        	this.dialog_cover =true;
        },
        dialogBox_hide:function(){
        	this.dialog_box = false;
        	this.dialog_cover =false;
        }
      }

  };
</script>

<style>

</style>
