<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <coins-head :title="$route.query.gname+'/'+$route.query.areaname+'/'+$route.query.servername"></coins-head>
    <!---------------------------- 金币信息 ---------------------------->
    <div class="mt-100 bg-f6 clearfix" @click="dropDrow_hide">
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
    <coins-form :url="isTest" v-on:formContent="coinsElse" v-on:formQqname="formQqname" v-on:formPhoneName="formPhoneName"></coins-form>
    <!---------------------------- 购买 ---------------------------->
    <div class="fixed-bottom01 bg-fff px-30 py-20 pr">
      <div class="f32 color-000 lh110">价格<span class="f40 color-f75e46">￥{{buyNum/40.2|mathFilter}}</span></div>
      <button class="coin-btn bg-f75e46 lh110 color-fff f36 pa" @click="dialogBox">立即购买{{receiver}}</button>
    </div>
     <!---------------------------- 遮料层 ---------------------------->
	  	<dialog-cover v-if="dialog_cover"></dialog-cover>
	  		<!--弹出框-->
	  	<dialog-box v-if="dialog_box"></dialog-box>
	  </div>
</template>

<script>
  import Vue from 'vue'
  import CoinsForm from "./CoinsForm.vue"
  import Head from "../Head.vue"
  import DialogCover from "../DialogCover.vue"
  import DialogBox from "../DialogBox.vue"
  Vue.filter('mathFilter',function(value){
    return value.toFixed(2)
  });
  export default{
    name:"CoinsSome",
    data() {
      return {
        buyNum:'',
     		dialog_box:false,
      	dialog_cover:false,
        msg:"订单详情",
        receiver:"",
        qqName:'',
        phoneName:'',
        isTest: (typeof this.$route.query.list == 'string')?JSON.parse(this.$route.query.list).list: []

      }
    },
    props:{
      buyPrice: {
        type: Number,
        default: 40.2
      }
    },
    components: {
      "coins-head": Head,
      "coins-form": CoinsForm,
      "dialog-cover":DialogCover,
      "dialog-box":DialogBox

    },
    watch:{

    },
    created(){
      this.$http.get(
        '/api/mobile-user-service/rs/account/login/loginbyverifycode?callback=jQuery1111005482065579084616_1490073131896&promotionUserId=0&phone=18958478815&verifyCode=7777&_=1490073131897',
        {},
        {
          headers: {
            contentType: "aplication/json; charset = UTF-8",
            dataType: 'json'
          }
        }
      ).then((res) => {

      }, () => {
        console.log("请求错误l！");

      });


    },
    methods:{
      dropDrow_hide:function(){
    		document.getElementById('drop_down').style.display="none"
        console.log(this.name)
    	},
      //收货角色名
      coinsElse:function (str) {
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
    	dialogBox:function(){
        const self = this
        	this.dialog_box = true;
        	this.dialog_cover =true;
        this.$http.post(
          '/api/mobile-goods-service/rs/purchaseData/addOrder',
          {
//            gameName: this.$route.query.gname,
//            region:this.$route.query.areaname,
//            server:this.$route.query.servername,
//            gameId:"YX16053120241378200001",
//            regionId:"YXQ16053120274791000015",
//            serverId:"YXF16053120325978800016",
//            receiver:this.name,
//            mobileNumber:this.phone,
//            qq:this.QQ,
//            goldCount:20,
//            unitPrice:0.00749,
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
            unitPrice:"0.00749",
          },
          {
            headers: {
              contentType: "aplication/json; charset = UTF-8",
              dataType: 'json'
            }
          }
        ).then((res) => {
          res = res.body;
          console.log("55566555")
          if (res.responseStatus.code == '00') {
            console.log("购买成功")

          }
        }, () => {
          console.log("请求错误！");
          resolve({list: []})
        });

        this.$http.get(
          '/api/mobile-goods-service/rs/purchaseData/addHistoryRole',
          {
            params: {
              regionName: "广东区",
              serverName: "广东1区",
              gameName: "地下城与勇士",
              mobileNumber:"18738161475",
              roleName:this.name,
              qqNumber:"601819456"


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
        }, () => {
          console.log("请求错误！");

        });









      },

    }


  };
</script>

<style>

</style>
