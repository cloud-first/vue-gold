<template>
  <div>
    <h1></h1>
    <h1>辅助菜单</h1>
    <ul>
      <li>
        <router-link
          :to="{path: '/vue/coins-type/list-coins?',
            query: urlName}"
        >
          广东一区 唯一入口
        </router-link>
      </li>

    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        list: [],
        gname: "地下城与勇士",
        gameId:'YX16053120241378200001',
        areaname: "广东区",
        regionId : 'YXQ16053120274791000015',
        servername: "广东1区",
        serverId :'YXF16053120325978800016',
        raceName :(typeof this.$route.query.raceName == 'string')?raceName: undefined,
        gameName: "",
        urlName: {},
        isGoldMallEnable:'',
      }
    },
    created () {
        //获取角色信息
      this.$http.get(
        '/api/mobile-goods-service/rs/purchaseData/selectHistoryRole',
        {
          params: {
            regionName:this.areaname,
            serverName: this.servername,
            gameName: this.gname
          }
        },
        {
          headers: {
            contentType: "aplication/json; charset = UTF-8",
            dataType: 'json'
          }
        }
      ).then((res) => {
        console.log(res.body.data[0])
        if(res.body.data[0]!=undefined){
          console.log(res.body.data[0].roleName);
          localStorage.openid = res.body.data[0].roleName;
          localStorage.qqNumber = res.body.data[0].qqNumber;
          localStorage.mobileNumber = res.body.data[0].mobileNumber;
          this.list=[{"name": localStorage.getItem('openid')}]
        }else{
          localStorage.openid = "";
          localStorage.qqNumber = "";
          localStorage.mobileNumber = "";
          this.list=[];
        }

      }, () => {
        console.log("请求错误！");

      });
      //对接商城状态
      this.$http.get(
        '/api/mobile-goods-service/rs/purchaseData/getGoldMallOpenedStatus',
        {
          params: {
            gameName:this.gname,
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
          this.urlName.gname = this.gname,    //游戏名
          this.urlName.gameId = this.gameId,  //游戏名Id
          this.urlName.areaname = this.areaname,     //游戏区
          this.urlName.regionId = this.regionId,  //游戏区id
          this.urlName.servername = this.servername,               //游戏服
          this.urlName.serverId = this.serverId,  //游戏服id
          this.urlName.raceName = this.raceName,  //游戏服id
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
    //获取角色信息
    historyRole:function () {
      this.$http.get(
        '/api/mobile-goods-service/rs/purchaseData/selectHistoryRole',
        {
          params: {
            regionName:this.areaname,
            serverName: this.servername,
            gameName: this.gname
          }
        },
        {
          headers: {
            contentType: "aplication/json; charset = UTF-8",
            dataType: 'json'
          }
        }
      ).then((res) => {
          console.log(res.body.data[0])
        if(res.body.data[0]!=undefined){
          console.log(res.body.data[0].roleName);
          localStorage.openid = res.body.data[0].roleName;
          localStorage.qqNumber = res.body.data[0].qqNumber;
          localStorage.mobileNumber = res.body.data[0].mobileNumber ;
        }else{
          localStorage.openid = "";
          localStorage.qqNumber = "";
          localStorage.mobileNumber = "";
          this.list=[];
        }

      }, () => {
        console.log("请求错误！");

      });
    },


  }
  }
</script>

<style scoped>
  @import "~css/fost-base.css";
  @import "~css/coins/coins-zch.css";
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
