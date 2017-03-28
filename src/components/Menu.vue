<template>
  <div>
    <h1></h1>
    <h1>辅助菜单</h1>
    <ul>
      <li>
        <router-link
          :to="{path: '/vue/coins-type/list-coins?serverid=YXF16053120325978800016&areaid=YXQ16053120274791000015&gid=YX16053120241378200001&operatorId=undefined&operatorName=&gname=地下城与勇士&areaname=广东区&servername=广东1区&goodsType=3&typename=%2F%2F游戏币&gameImageUrl='}"
        >
          广东一区 无历史
        </router-link>
      </li>
      <li>
        <router-link
          :to="{path: '/vue/coins-type/list-coins?',
          query: {'status':'1','areaid':'YXQ16053120274791000015','gname': '地下城与勇士', gameId:'YX16053120241378200001',regionId:'YXQ16053120274791000015',serverId:'YXF16053120325978800016','areaname':'广东区','servername':'广东1区','goodsType':3,'list': JSON.stringify(list)} }"
        >
          广东一区 有历史
        </router-link>
      </li>
      <li>
        <input type="text" placeholder="游戏区" v-model="regionName">
        <input type="text" placeholder="游戏服" v-model="serverName">
        <input type="text" placeholder="游戏名字" v-model="gameName">
        <button @click="checkout" style="height: 30px;width: 200px">登录</button>
        <button @click="historyRole" style="height: 30px;width: 200px">获取角色信心</button>
      </li>
      <li>
        <router-link
          :to="{path: '/vue/coins-type/list-coins?',query: urlName}"
        >
          广东二区 2状态
        </router-link>
      </li>
      <li>
        <router-link
          to="/vue/coins-type/list-coins?serverid=YXF16053120330995500018&gid=YX16053120241378200001&operatorId=undefined&operatorName=&gname=地下城与勇士&areaname=广东区&servername=广东3区&goodsType=3&typename=%2F%2F游戏币&gameImageUrl=">
          广东三区
        </router-link>
      </li>
      <li>
        <router-link
          to="/vue/coins-type/coins-order?serverid=YXF16053120330995500018&gid=YX16053120241378200001&operatorId=undefined&operatorName=&gname=地下城与勇士&areaname=广东区&servername=广东3区&goodsType=3&typename=%2F%2F游戏币&gameImageUrl=">
          订单详情
        </router-link>
      </li>

    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        list: {
          list: [{
            "name": localStorage.getItem('openid'),
          }
          ]
        },
        regionName: "",
        serverName: "",
        gameName: "",
        urlName: {},
        isGoldMallEnable:'',
      }
    },
    created () {

      this.$http.get(
        '/api/mobile-goods-service/rs/purchaseData/getGoldMallOpenedStatus',
        {
          params: {
            gameName: "地下城与勇士",
          }
        },
        {
          headers: {
            contentType: "aplication/json; charset = UTF-8",
            dataType: 'json'
          }
        }
      ).then((res) => {
          console.log("请求成功！",res.body.isGoldMallEnable);
          this.isGoldMallEnable = res.body.isGoldMallEnable;
          this.urlName.isGoldMallEnable = res.body.isGoldMallEnable;
          this.urlName.gname = '地下城与勇士',
          this.urlName.gameId = 'YX16053120241378200001',
          this.urlName.regionId = 'YXQ16053120274791000015',
          this.urlName.serverId = 'YXF16053120325978800016',
          this.urlName.areaname = '广东区',
          this.urlName.servername = '广东1区',
          this.urlName.goodsType = 3,
          this.urlName.list = JSON.stringify(this.list)
      }, () => {
        console.log("请求错误l！");

      });
    },
  mounted (){


  },
  methods:{
    //登录
    checkout:function () {
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
    //获取角色信息
    historyRole:function () {
      this.$http.get(
        '/api/mobile-goods-service/rs/purchaseData/selectHistoryRole',
        {
          params: {
            regionName: "广东区",
            serverName: "广东1区",
            gameName: "地下城与勇士",
          }
        },
        {
          headers: {
            contentType: "aplication/json; charset = UTF-8",
            dataType: 'json'
          }
        }
      ).then((res) => {
        console.log(res.body.data[0].roleName)
        localStorage.openid = res.body.data[0].roleName
        localStorage.qqNumber = res.body.data[0].qqNumber
        localStorage.mobileNumber = res.body.data[0].mobileNumber
      }, () => {
        console.log("请求错误！");

      });
    },


    //商城状态




  }
  }
</script>

<style scoped>
  @import "/css/fost-base.css";
  @import "/css/coins/coins-zch.css";
  h1 {
    text-align: center;
    margin-top: 2em;
    margin-bottom: 1em;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul > li:nth-child(even) {
    background-color: #bbefa0;
  }

  ul > li:nth-child(odd) {
    background-color: #efbdcb;
  }

  li a {
    border-bottom: 1px solid gainsboro;
    padding: 20px 30px;
    display: block;
  }

  input {
    width: 80%;
    height: 3em;
    margin: 0.5em;
    text-align: center;
    border: 0;

  }

  button {
    background: salmon;
    margin-left: 4em;
    margin-bottom: 0.5em;
  }

</style>
