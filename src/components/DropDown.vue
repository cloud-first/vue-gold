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

        this.i = index;
        localStorage.setItem("num",index)
        localStorage.setItem("openid",dropDown.roleName)
        this.$emit('ee',dropDown.roleName)

      }

    },
    created:function(){
      const selfs = this
      this.$http.get('/json/data.json').then((response)=>{
          console.log(response.body.juese)
        setTimeout(() => {
          selfs.dropDowns = response.body.juese
        }, 500)
      },(response)=>{
        console.log("error")
      })

      //  获取角色名
//      this.$http.get(
//        '/api/mobile-goods-service/rs/purchaseData/selectHistoryRole',
//        {
//          params: {
//            regionName: "广东区",
//            serverName: "广东1区",
//            gameName: "地下城与勇士",
//          }
//        },
//        {
//          headers: {
//            contentType: "aplication/json; charset = UTF-8",
//            dataType: 'json'
//          }
//        }
//      ).then((res) => {
//        console.log(res.body.data[0].roleName)
//        localStorage.openid = res.body.data[0].roleName
//        selfs.dropDowns = res.body.data
//      }, () => {
//        console.log("请求错误！");
//
//      });



















    }
}
</script>

<style>

</style>
