<template>
  <div class="js-msg mt-100 bg-fff clearfix">
    <ul class="bg-fff">
      <li class="w-100 border-bottom clearfix lh110 px-30 f32 pr">
        <span class="f32">收货角色名</span>
        <input class="coin-input lh110 pa" type="text" name="" id="username" v-model="name" />
        <i class="pa" v-if="isTrue" id="divselect" @click="show()"><img src="/static/images/coins/coinuser.png"/></i>
        <drop-down :xianshi="xianshi" @change="xianshi = !xianshi" v-on:ee="incrementTotal"></drop-down>
      </li>
      <li class="w-100 border-bottom clearfix lh110 px-30 f32 pr">
        <span class="f32">我的手机号</span>
        <input class="coin-input lh110 pa" type="text" name="" id="phoneFrom" v-model="phone" />
      </li>
      <li class="w-100 border-bottom clearfix lh110 px-30 f32 pr">
        <span class="f32">我的QQ号</span>
        <input class="coin-input lh110 pa" type="text" name="" id="QQFrom" v-model="QQ" />
      </li>
    </ul>
  </div>
</template>

<script>
  import DropDown from "../DropDown.vue"
  export default {
    name: "CoinsFrom",
    props:{
      url: {
//        type: Array,
        default:function() {
            return []
        }
      }
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        xianshi:false,
        name:'22',
        phone:'',
        QQ:'',
        isTrue:(this.url[0] == undefined)?false:true

      }
    },
    methods:{
        show:function(){
            this.xianshi=true
        },
        incrementTotal:function (b) {
          this.name=b
        }

    },
    created:function(){
//       console.log("-----------------------",this.url[0])
        if(this.url[0]!=undefined){
//            this.name = this.url[0].name,
            this.name = localStorage.getItem('openid')
            this.phone = this.url[0].phone,
            this.QQ = this.url[0].QQ
        }
    },
    components: {
      "drop-down": DropDown,
    }
  }
</script>
<style>

</style>
