<template>

  <div v-show="xianshi" id="drop_down">
    <div class="w-100 showlist pa">
      <ul>
        <li class="bg-fff f28 color-000 border-bottom pr" v-for="(dropDown,index) in dropDowns" @click="drop_show(dropDown,index)">
          <a @click="show()">
            <span class="pl-30 lh110 d-block w-100">{{dropDown.roleName}}</span>
            <em v-if="index == i" class="pa coinok"></em>
          </a>
        </li>
      </ul>
    </div>
    <!--遮罩-->
    <div @click="show()" class="shade" style="display: block;"></div>
  </div>
</template>

<script>
export default {
    name:"DropDown",
    props: ['xianshi'],
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        dropDowns:[],
        i:localStorage.getItem("num")
      }
    },
    methods:{
      show:function(){
          this.$emit("change")
      },
      drop_show:function (dropDown,index) {
        console.log(dropDown.roleName,index)
        self = this;
        this.i = index;
        localStorage.setItem("num",index)
        localStorage.setItem("openid",dropDown.roleName)
        this.$emit('ee',dropDown.roleName)
        //获取角色名
        this.$http.get(
          '/api/mobile-goods-service/rs/purchaseData/selectHistoryRole',
          {
            params: {
              regionName: this.$route.query.areaname,
              serverName: this.$route.query.servername,
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

          console.log("请求角色成功");
          console.log(res.data.data)
          res.data.data.forEach(function (item) {
            console.log(item.roleName)
            if(dropDown.roleName == item.roleName){
              localStorage.setItem("openid",item.roleName)
              localStorage.setItem("mobileNumber",item.mobileNumber)
              localStorage.setItem("qqNumber",item.qqNumber)
              self.$emit('ff',item.mobileNumber)
              self.$emit('gg',item.qqNumber)
            }
          })
//          if(){
//
//          }
              // localStorage.openid =res.data.data[0].roleName

        }, () => {
          console.log("请求错误！");

        });

      }

    },
    mounted:function(){
      //获取角色名

        this.$http.get(
          '/api/mobile-goods-service/rs/purchaseData/selectHistoryRole',
          {
            params: {
              regionName: this.$route.query.areaname,
              serverName: this.$route.query.servername,
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
                console.log("请求角色成功");
                console.log(res.data.data)
//                localStorage.openid =res.data.data[0].roleName
                this.dropDowns =res.data.data
              }, () => {
                console.log("请求错误！");

        });





    }
}
</script>

<style>

</style>
