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
          query: {'serverid':'YXF16053120325978800016','areaid':'YXQ16053120274791000015','gname': '地下城与勇士','areaname':'广东区','servername':'广东1区','goodsType':3,'list': JSON.stringify(list)} }"
        >
          广东一区 有历史
        </router-link>
      </li>
      <li style="height: 30px">
       <button @click="checkout" style="height: 30px;width: 200px">查找</button>
      </li>
      <li>
        <router-link
          :to="{path: '/vue/coins-type/list-coins?',
          query: {'status':'2','areaid':'YXQ16053120274791000015','gname': '地下城与勇士','areaname':'广东区','servername':'广东1区','goodsType':3,'list': JSON.stringify(list)} }"
        >
          广东二区 2状态
        </router-link>
      </li>
      <li>
        <router-link
          to="/vue/coins-type/list-coins?serverid=YXF16053120330995500018&areaid=YXQ16053120274791000015&gid=YX16053120241378200001&operatorId=undefined&operatorName=&gname=地下城与勇士&areaname=广东区&servername=广东3区&goodsType=3&typename=%2F%2F游戏币&gameImageUrl=">
          广东三区
        </router-link>
      </li>
      <li>
        <router-link
          to="/vue/coins-type/coins-order?serverid=YXF16053120330995500018&areaid=YXQ16053120274791000015&gid=YX16053120241378200001&operatorId=undefined&operatorName=&gname=地下城与勇士&areaname=广东区&servername=广东3区&goodsType=3&typename=%2F%2F游戏币&gameImageUrl=">
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
        }
      }
    },
    created () {

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
      checkout:function () {
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

        }, () => {
          console.log("请求错误！");

        });
      }
    }
  }
</script>

<style scoped>
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


</style>
