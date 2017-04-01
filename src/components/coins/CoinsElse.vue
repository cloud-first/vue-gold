<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <coins-head :title="$route.query.gname+'/'+$route.query.areaname+'/'+$route.query.servername"></coins-head>
    <!---------------------------- 金币信息 ---------------------------->
    <div class="mt-100 bg-f6 clearfix" @click="dropDrow_hide">
      <ul class="tab-2 clearfix">
        <li class="fl border-right text-center lh110 f28">
          <span class="color-888 mr-20">单价</span>1元={{$route.query.unPrice}}{{$route.query.moneyName}}
        </li>
        <li class="fl text-center lh110 f28">
          <span class="color-888 mr-20">库存</span>{{$route.query.totalCount}}{{$route.query.moneyName}}
        </li>
      </ul>
      <div class="bg-fff clearfix px-30 pr">
        <div class="fl lh110 w80 f32 color-000">购买数量<input class="coin-input lh110 pa" type="text" placeholder="请填写购买数量" v-model="buyNum" v-on:blur="Mybuynum"/></div>
        <div class="fr lh110 f32 color-000 pa r30">{{$route.query.moneyName}}</div>
      </div>

    </div>
    <!---------------------------- 角色信息 ---------------------------->
    <coins-form :url="isTest" v-on:formRoleName="formRoleName" v-on:formQqname="formQqname" v-on:formPhoneName="formPhoneName"></coins-form>
    <!---------------------------- 购买 ---------------------------->
    <div class="fixed-bottom01 bg-fff px-30 py-20 pr">
      <div class="f32 color-000 lh110">价格<span class="f35 color-f75e46">￥{{buyNum/$route.query.unPrice|mathFilter}}</span></div>
      <button class="coin-btn bg-f75e46 lh110 color-fff f36 pa" v-on:click="dialogBox">立即购买</button>
    </div>
    <!---------------------------- 点击发生一次 ---------------------------->
    <div class="mint-indicator" v-if="indicator">
      <div class="mint-indicator-wrapper" style="padding: 15px;">
          <span class="mint-indicator-spin">
            <div class="mint-spinner-snake" style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); border-bottom-color: rgb(204, 204, 204); height: 32px; width: 32px;"></div>
          </span> <span class="mint-indicator-text" style="display: none;"></span>
      </div>
      <div class="mint-indicator-mask"></div>
    </div>
     <!---------------------------- 遮料层 ---------------------------->
	  	<dialog-cover v-if="dialog_cover"></dialog-cover>
      <!--弹出框1-->
     <dialog-smbox v-if="smBox" :smbox="smboxMessage"></dialog-smbox>
	  		<!--弹出框2-->
	  	<dialog-box v-if="dialog_box" :title="boxMessage"></dialog-box>
	  </div>
</template>

<script>
  import Vue from 'vue'
  import CoinsForm from "./CoinsForm.vue"
  import Head from "../publicCoins/Head.vue"
  import DialogCover from "../publicCoins/DialogCover.vue"
  import DialogBox from "../publicCoins/DialogBox.vue"
  import Smbox from "./Smbox.vue"
  import { Indicator } from 'mint-ui'
  Vue.filter('mathFilter',function(value){
    return value.toFixed(2)
  });
  export default{
    name:"CoinsElse",
    data() {
      return {
        buyNum:'',
     		dialog_box:false,
      	dialog_cover:false,
        msg:"订单详情",
        receiver:"",
        qqName:'',
        phoneName:'',
        boxMessage:'很抱歉，该商品类型手机版尚未开通,建议您去电脑版发布出售。',
        smBox:false,
        smboxMessage:"",
        dialog_box2:false,
        isTest: (typeof this.$route.query.list == 'string')?JSON.parse(this.$route.query.list): [],
        indicator:false,
        maximum:this.$route.query.totalCount
      }
    },
    components: {
      "coins-head": Head,
      "coins-form": CoinsForm,
      "dialog-cover":DialogCover,
      "dialog-box":DialogBox,
      "dialog-smbox":Smbox,

    },
    mounted:function(){

    },
    watch:{
      buyNum:
        function (val, oldVal){
          if(val==""){
            return
          }
          if(val>this.maximum){
            this.buyNum=oldVal
          }
          var patrn = /^\d+(\.\d{1,2}|\.)?$/;
          console.log(this.buyNum)
          if(patrn.test(val)){
            this.buyNum=this.buyNum
          }else{
            this.buyNum=oldVal
          }
        }
    },
    created(){
      //Indicator.open();

    },
    methods:{
        //隐藏下拉框
      dropDrow_hide:function(){
    		document.getElementById('drop_down').style.display="none"
        console.log(this.name)
    	},
      //收货角色名
      formRoleName:function (str) {
        console.log("我是父组件传来的",str);
        this.receiver = str;
      },
      //qq名
      formQqname:function (str) {
        console.log("我是父组件传来的",str);
        this.qqName = str;
      },
      //手机号
      formPhoneName:function (str) {
        console.log("我是父组件传来的",str);
        this.phoneName = str;
      },
      //购买数量判断
      Mybuynum:function(){
        //失去焦点去除小数点
        if(this.buyNum.substr(-1, 1) == '.'){
          this.buyNum = parseInt(this.buyNum)
        };
        if(this.buyNum>this.$route.query.totalCount){
          this.smBox=true;
          this.smboxMessage="购买金额大于库存量";
        }
      },

      //提交订单
    	dialogBox:function(){
        const self = this
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
        //location.href = "http://yxbmall.5173.com/gamegold-facade-frontend/mPayment?orderId=YX1703310003376"


        this.indicator = true
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
                gameId:this.$route.query.gameId,
                regionId:this.$route.query.regionId,
                serverId:this.$route.query.serverId,
                receiver:this.receiver,
                mobileNumber:this.phoneName,
                qq:this.qqName,
                goldCount:this.buyNum,
//                unitPrice:this.$route.query.unitPrice,
                unitPrice:Number(this.$route.query.unitPrice),
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
              //location.href = "http://yxbmall.5173.com/gamegold-facade-frontend/mPayment?orderId=YX1703310003376"
              location.href = "http://yxbmall.5173.com/gamegold-facade-frontend/mPayment?orderId="+res.orderId

            }else{
                this.dialog_box = true;
               this.dialog_cover =true;
               this.boxMessage = "库存不足"
            }
          }, () => {
              console.log("请求错误！");
              resolve({list: []})
            });
      }, () => {
          console.log("请求错误！");
        });

      //币m站订单 支付接口调用
//         location.href = "http://yxbmall.5173.com/gamegold-facade-frontend/mPayment?orderId=YX1703310003376"

      },
    }
  };
</script>

<style>

</style>
