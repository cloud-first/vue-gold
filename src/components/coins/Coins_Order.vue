<template>
  <div>
    <coins-head :title="msg"></coins-head>
    <!---------------------------- 订单取消 ---------------------------->
    <div class="mt-100 px-30 or-title lh130 pr">
      <img class="pa w-100" src="/images/coins/border-bg.png" />
      <span class="pl-20 f32">交易取消</span>
    </div>
    <!---------------------------- 商品信息 ---------------------------->
    <div class="mt-20 border-bottom bg-fff">
      <dl class="pt-30 px-30">
        <dt class="f28 color-999">商品标题</dt>
        <dd class="f30 color-000 mt-30">购买 7600金币</dd>
      </dl>
      <dl class="mt-40 px-30">
        <dt class="f28 color-999">游戏区服</dt>
        <dd class="f30 color-000 mt-30">英雄联盟/电信/艾欧尼亚</dd>
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
            DB1254287568756544
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
          <div class="f30 color-666 text-right">合计<span class="color-f75e46 f32">￥20.00</span></div>
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
  import Head from "../Head.vue"
  export default {
    name: "CoinsOrder",
    data () {
      return {
        msg:"订单详情"
      }

    },
    components: {
      "coins-head": Head,
    },
    created () {
      const self = this
      this.$http.get(
        '/api/mobile-user-service/rs/account/login/loginbyverifycode?callback=jQuery1111005482065579084616_1490073131896&promotionUserId=0&phone="M2_18958478815"&verifyCode=7777&_=1490073131897',
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
              orderId: "YX1703280003300",
            }
          },
          {
            headers: {
              contentType: "aplication/json; charset = UTF-8",
              dataType: 'json'
            }
          }
        ).then((res) => {
          console.log("角色成功！");
        }, () => {
          console.log("请求错误！");

        });

      },



    }

  }
</script>
