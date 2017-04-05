<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <coins-head :title="$route.query.gname+'/'+$route.query.areaname+'/'+$route.query.servername"></coins-head>
    <!---------------------------- 金币信息 ---------------------------->
    <div class="mt-100 bg-f6 clearfix" @click="dropDrow_hide">
      <div class="bg-fff clearfix px-30 pr">
        <div class="fl lh110 f32 color-000">购买数量<span class="coin-num f32 pa">{{$route.query.fastListMoney}}{{$route.query.moneyName}}</span></div>
        <div class="fr lh110 f28 color-666">单价 1元={{$route.query.unPrice}}{{$route.query.moneyName}}</div>
      </div>
    </div>
    <!---------------------------- 角色信息 ---------------------------->
    <coins-form :url="isTest" v-on:formRoleName="formRoleName" v-on:formQqname="formQqname" v-on:formPhoneName="formPhoneName"></coins-form>
    <!---------------------------- 购买 ---------------------------->
    <div class="fixed-bottom01 bg-fff px-30 py-20 pr">
      <div class="f32 color-000 lh110">价格<span class="f40 color-f75e46">￥{{$route.query.fastListMoney/$route.query.unPrice}}</span></div>
      <button class="coin-btn bg-f75e46 lh110 color-fff f36 pa" @click="dialogBox">立即购买</button>
    </div>
    <!---------------------------- 点击发生 ---------------------------->
    <div class="mint-indicator" v-if="indicator">
      <div class="mint-indicator-wrapper" style="padding: 15px;">
          <span class="mint-indicator-spin">
            <div class="mint-spinner-snake" style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); border-bottom-color: rgb(204, 204, 204); height: 32px; width: 32px;"></div>
          </span> <span class="mint-indicator-text" style="display: none;"></span>
      </div>
      <div class="mint-indicator-mask"></div>
    </div>
    <!--弹出框1-->
     <dialog-smbox v-if="smBox" :smbox="smboxMessage"></dialog-smbox>
     <!---------------------------- 遮料层 ---------------------------->
	  	<dialog-cover v-if="dialog_cover"></dialog-cover>
    <!--弹出框2-->
  <dialog-box v-if="dialog_box" :title="boxMessage"></dialog-box>
</div>
</template>

<script>
  import Vue from 'vue'
  import Head from "../publicCoins/Head.vue"
  import CoinsForm from "./CoinsForm.vue"
  import DialogCover from "../publicCoins/DialogCover.vue"
  import DialogBox from "../publicCoins/DialogBox.vue"
  import Smbox from "./Smbox.vue"
  Vue.filter('mathFilter',function(value){
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
          dialog_box:false,
          dialog_cover:false,
          smBox:false,
          smboxMessage:"",
          isTest: (typeof this.$route.query.list == 'string')?JSON.parse(this.$route.query.list): [],
          receiver:"",
          qqName:'',
          phoneName:'',
          boxMessage:'很抱歉，该商品类型手机版尚未开通,建议您去电脑版发布出售。',
          perprice:'40',
          fastListMoney:this.$route.query.fastListMoney,
          receiver:"",
          indicator:false,

        }
      },
      components: {
        "coins-head": Head,
        "coins-form": CoinsForm,
        "dialog-cover":DialogCover,
      	"dialog-box":DialogBox,
        "dialog-smbox":Smbox,

      },

      methods:{
        //隐藏下拉框
        dropDrow_hide:function(){
        	document.getElementById('drop_down').style.display="none"
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
        //提交订单
        dialogBox:function(){
          const self = this
//          this.dialog_box = true;
//          this.dialog_cover =true;

          var qqReg=/^[1-9]\d{4,10}$/;
          var mobileReg = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
          if(this.receiver==""){
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
          this.indicator = true
        //添加角色信息
          this.$http.get(
            '/api/mobile-goods-service/rs/purchaseData/addHistoryRole',
            {
              params: {
                regionName: this.$route.query.areaname,
                serverName:this.$route.query.servername,
                gameName:  this.$route.query.gname,
                mobileNumber:this.phoneName,
                roleName:this.receiver,
                qqNumber:this.qqName,
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
                goldCount:Number(this.$route.query.fastListMoney),
                unitPrice:Number(this.$route.query.unitPrice),
              },
              {
                headers: {
                  contentType: "aplication/json; charset = UTF-8",
                  dataType: 'json'
                }
              }
            ).then((res) => {
              res = res.body;
              this.indicator = false
              console.log("55566555")
              if (res.responseStatus.code == '00') {
                console.log("购买成功")
                //this.$router.push({path: '/vue/coins-type/coins-order',query: {'orderId':res.orderId}})
                location.href = "http://yxbmall.5173.com/gamegold-facade-frontend/mPayment?orderId="+res.orderId

              }else{
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
