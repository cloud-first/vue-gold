<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <coins-head :title="$route.query.gname+'/'+$route.query.areaname+'/'+$route.query.servername"></coins-head>
    <!---------------------------- 购买信息 ---------------------------->
    <div class="mt-100 bg-fff" @click="dropDrow_hide">
      <div class="px-30 py-30 border-bottom clearfix">
        <div class="fl">
          <div class="col-left01">
            <span class="sp01 color-000 f36">{{$route.query.unitNum}}{{$route.query.unitName}}</span>
          </div>
          <div class="pt-20">
            <span class="s1 f28 color-888">单价: </span>
            <span class="s2 f28 color-000">1元={{$route.query.price}}{{$route.query.unitName}}</span>
          </div>
        </div>
        <div class="fr">
          <span class="d-block f36 color-m1 text-right">￥{{numMoney}}</span>
          <span class="d-block coin-s2 pt-20 f28 color-888"><em class="mr-20"><img src="~images/coins/mobile.png" /></em><em class="coin-e1">库存 {{$route.query.deliveryNum}}件</em></span>
        </div>
      </div>
      <div class="box border-bottom">
        <div class="line py-10">
          <span class="f32 color-000">库存数量</span>
          <div class="count2">
            <input class="reduce fl f48" name="" type="button" value="-" @click="coins_reduce">
            <input class="num fl f36" name=""  v-model="coins_num" v-on:blur="coins_blur">
            <input class="add fl common-color f48" name="" type="button" value="+" @click="coins_add">
          </div>
          <span class="f32 fr">件</span>
        </div>
      </div>
    </div>
    <!---------------------------- 购买 ---------------------------->
    <div class="fixed-bottom01 bg-fff px-30 py-20 pr">
      <div class="f32 color-000 lh110">合计<span class="f40 color-f75e46">￥{{numMoney}}</span></div>
  	<button class="coin-btn bg-f75e46 lh110 color-fff f36 pa"  @click="dialogBox">立即购买</button>
    </div>
    <!---------------------------- 角色信息 ---------------------------->
    <coins-form :url="isTest" v-on:formRoleName="formRoleName" v-on:formQqname="formQqname" v-on:formPhoneName="formPhoneName"></coins-form>
		 <!---------------------------- 遮料层 ---------------------------->
	  	<dialog-cover v-if="dialog_cover"></dialog-cover>
      <!--弹出框1-->
      <dialog-smbox v-if="smBox" :smbox="smboxMessage"></dialog-smbox>
    <!--弹出框2-->
    <dialog-box v-if="dialog_box" :title="boxMessage"></dialog-box>
	  </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Head from "../publicCoins/Head.vue"
  import CoinsForm from "./CoinsForm.vue"
  import DialogCover from "../publicCoins/DialogCover.vue"
  import DialogBox from "../publicCoins/DialogBox.vue"
  import Smbox from "./Smbox.vue"
//  Vue.filter('mathFilter',function(value){
//    return value.toFixed(2)
//    //return Math.round(value*100) / 100
//  });
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
        perPrice:10,
        isActive:false,
        dialog_box:false,
      	dialog_cover:false,
        msg:"订单详情",
        receiver:"",
        qqName:'',
        phoneName:'',
        smBox:false,
        smboxMessage:"",
        numMoney:this.$route.query.numMoney,
        boxMessage:'很抱歉，该商品类型手机版尚未开通,建议您去电脑版发布出售。',
        isTest: (typeof this.$route.query.list == 'string')?JSON.parse(this.$route.query.list): [],
        coins_num:this.$route.query.deliveryNum,
      }
    },
    components: {
      "coins-head": Head,
      "coins-form": CoinsForm,
      "dialog-cover":DialogCover,
      "dialog-box":DialogBox,
      "dialog-smbox":Smbox,

    },
    watch:{
      coins_num:
        function (val, oldVal){
          if(val==""){
            return
          }
          var patrn =/^[0-9]+$/;
          console.log(this.buyNum)
          if(patrn.test(val)){
            this.coins_num=this.coins_num
          }else{
            this.coins_num=oldVal
          }
          if(val>this.$route.query.deliveryNum){
            this.coins_num=oldVal
          }else if(val<1){
            this.coins_num=1
          }

        }
    },
    methods:{
      coins_blur:function () {
        if(this.coins_num=="") {
          this.coins_num = 1
        }
      },
      //收货角色名
      formRoleName:function (str) {
        console.log("我是父组件传来的",str)
        this.receiver = str
      },
      //qq名
      formQqname:function (str) {
        console.log("我是父组件传来的",str)
        this.qqName = str
      },
      //手机号
      formPhoneName:function (str) {
        console.log("我是父组件传来的",str)
        this.phoneName = str
      },
      coins_add:function () {
          this.coins_num++
          if(this.coins_num>5){
            this.coins_num=5
          }
      },
      coins_reduce:function () {
          this.coins_num--
        if(this.coins_num<1){
          this.coins_num=1
        }
      },
      dropDrow_hide:function(){
    		document.getElementById('drop_down').style.display="none"
    	},

      //提交订单
    	 dialogBox:function(){
         const self = this;
         var qqReg=/^[1-9]\d{4,10}$/;
         var mobileReg = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
         if(this.buyNum==""){
           this.smBox=true;
           this.smboxMessage="请输入购买数量";
           return false
         }else if(this.receiver==""){
           this.smBox=true;
           this.smboxMessage="请填写收货角色姓名";
           return false;
         }else if(this.phoneName==""){
           this.smBox=true;
           this.smboxMessage="请填写收货手机号";
           return false;
         }else if(!mobileReg.test(this.phoneName)){
           this.smBox=true;
           this.smboxMessage="你输入的手机号有误！";
           return false;
         }else if(this.qqName==""){
           this.smBox=true;
           this.smboxMessage="请填写收货qq号";
           return false
         }else if(!qqReg.test(this.qqName)){
           this.smBox=true;
           this.smboxMessage="你输入的qq号有误！";
           return false;
         }
//         this.dialog_box = true;
//         this.dialog_cover =true;
         //添加角色信息
         this.$http.get(
           '/api/mobile-goods-service/rs/purchaseData/addHistoryRole',
           {
             params: {
               regionName: this.$route.query.areaname,
               serverName:this.$route.query.servername,
               gameName:  this.$route.query.gname,
               mobileNumber:this.phoneName,        //手机号
               roleName:this.receiver,             //角色名
               qqNumber:this.qqName,                //qq号
             }
           },
           {
             headers: {
               contentType: "aplication/json; charset = UTF-8",
               dataType: 'json'
             }
           }
         ).then((res) => {
           console.log("添加角色成功！");
           localStorage.openid = this.receiver;
           localStorage.mobileNumber = this.phoneName;
           localStorage.qqNumber = this.qqName;
           //添加订单
           this.$http.post(
             '/api/mobile-goods-service/rs/purchaseData/addOrder',
             {
               gameName: this.$route.query.gname,
               region:this.$route.query.areaname,
               server:this.$route.query.servername,
               gameId:this.$route.query.gid,
               regionId:this.$route.query.areaid,
               serverId:this.$route.query.serverid,
               receiver:this.receiver,
               mobileNumber:this.phoneName,
               qq:this.qqName,
               goldCount:Number(this.$route.query.unitNum),
//               unitPrice:Number(this.$route.query.unitPrice),
               unitPrice:0.02115,
             },
             {
               headers: {
                 contentType: "aplication/json; charset = UTF-8",
                 dataType: 'json'
               }
             }
           ).then((res) => {
//               判断库存量
//              if(res.message=="库存不足"){
//                this.dialog_box = true;
//                this.dialog_cover =true;
//                this.boxMessage = "库存不足"
//              }
             res = res.body;
             console.log("55566555")
             this.indicator = false
             if (res.responseStatus.code == '00') {
               console.log("购买成功",res);
               console.log("购买成功",res.orderId);
               //this.$router.push({path: '/vue/coins-type/coins-order',query: {'orderId':res.orderId}})
               location.href = "http://yxbmall.5173.com/gamegold-facade-frontend/mPayment?orderId="+res.orderId
             }else {
               if(res.responseStatus.message == "商品件数不足"){
                 this.dialog_box = true;
                 this.dialog_cover =true;
                 this.boxMessage = "抱歉，手慢一步，库存已不足"
               }
             }
           }, () => {
             console.log("请求错误！");
             resolve({list: []})
           });
         }, () => {
           console.log("请求错误！");
         });


       },
    }

  };
</script>

<style>

</style>
