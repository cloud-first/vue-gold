<template>
  <div>
    <coins-head :title="msg"></coins-head>
    <!---------------------------- 订单取消 ---------------------------->
    <div class="mt-100 px-30 or-title lh130 pr">
      <img class="pa w-100" src="~images/coins/border-bg.png" />
      <span class="pl-20 f32">交易{{status}}</span>
    </div>
    <!---------------------------- 商品信息 ---------------------------->
    <div class="mt-20 border-bottom bg-fff">
      <dl class="pt-30 px-30">
        <dt class="f28 color-999">商品标题</dt>
        <dd class="f30 color-000 mt-30">{{title}}</dd>
      </dl>
      <dl class="mt-40 px-30">
        <dt class="f28 color-999">游戏区服</dt>
        <dd class="f30 color-000 mt-30">{{gameName}}/{{regionName}}/{{serverName}}</dd>
      </dl>
      <dl class="mt-40 pb-30 px-30">
        <dt class="f28 color-999">商品类型</dt>
        <dd class="f30 color-000 mt-30">帐号</dd>
      </dl>
      <ul class="pl-30 clearfix">
        <li class="border-top clearfix lh110 pr-30">
          <div class="fl f30 color-000">
            订单号
          </div>
          <div class="fr f30 color-000">
            {{orderId}}
          </div>
        </li>
        <li class="border-top clearfix lh110 pr-30">
          <div class="fl f30 color-000">
            商品类型
          </div>
          <div class="fr f30 color-000">
            ￥20.00x1
          </div>
        </li>
        <li class="border-top clearfix lh110 pr-30">
          <div class="fl f30 color-000">
            取消原因：等待时间太长
          </div>
        </li>
        <li class="border-top pr-30 py-30">
          <div class="f30 color-666 text-right">合计<span class="color-f75e46 f32">￥{{realAmount}}</span></div>
          <div class="f24 color-999 text-right mt-25">下单时间 2016-12-09 01:56:01</div>
        </li>
      </ul>
    </div>
    <!---------------------------- 联系客服 ---------------------------->
    <div class="fixed-bottom border-top bg-fff coin-kf pr-30">
      <button class="bg-fff color-f75e46 lh82 my-20 f32 fr" @click="getGold">对接商城状态</button>
      <button class="bg-fff color-f75e46 lh82 my-20 f32 fr" @click="purchaseData">我的订单列表</button>
      <button class="bg-fff color-f75e46 lh82 my-20 f32 fr" @click="myBuyOrderList">我的订单详情</button>
      <!--<button class="bg-fff color-f75e46 lh82 my-20 f32 fr" @click="show">联系客服</button>-->
    </div>
  </div>
</template>

<script>
  import Head from "../publicCoins/Head.vue"
  export default {
    name: "CoinsOrder",
    data () {
      return {
        msg:"订单详情",
        title:'',
        gameName:'',
        regionName:'',
        serverName:'',
        orderId:'',
        realAmount:'',
        status:''
      }

    },
    components: {
      "coins-head": Head,
    },
    created () {
      const self = this

    },
    methods:{
      //商城状态
      getGold:function () {
        this.$http.get(
          '/api/mobile-goods-service/rs/purchaseData/getGoldMallOpenedStatus',
          {
            params: {
              gameName: this.$route.query.gname,
            }
          },
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
      //订单列表
      purchaseData:function () {
          this.$http.get(
            '/api/mobile-goods-service/rs/purchaseData/myBuyOrderList',
            {
              params: {
                orderState: "1",
                pageSize: "5",
                start: "0"
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
      myBuyOrderList:function () {
        this.$http.get(
          '/api/mobile-goods-service/rs/purchaseData/getOrder',
          {
            params: {
               orderId: this.$route.query.orderId,
               // orderId: "YX1703290003316",
            }
          },
          {
            headers: {
              contentType: "aplication/json; charset = UTF-8",
              dataType: 'json'
            }
          }
        ).then((res) => {
          console.log("获取订单成功！");
          console.log(res.body.order);
          this.title = res.body.order.title;
          this.count = res.body.order.count;
          this.gameName = res.body.order.gameName;//游戏区
          this.regionName = res.body.order.regionName;
          this.serverName = res.body.order.serverName;
          this.status = res.body.order.status;
          this.reason = res.body.order.reason;
          this.realAmount = res.body.order.realAmount;
          this.createTime = res.body.order.createTime;
          this.orderId = res.body.order.orderId;
          if(this.status==1){
            this.status="待付款"
          }


        }, () => {
          console.log("请求错误！");

        });

      },



    }

  }
</script>
