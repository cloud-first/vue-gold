<template>
  <div class="js-msg mt-100 bg-fff clearfix">
    <ul class="bg-fff">
      <li class="w-100 border-bottom clearfix lh110 px-30 f32 pr">
        <span class="f32">收货角色名</span>
        <input class="coin-input lh110 pa" type="text" name="" id="username" value="舒含潇" />
        <i class="pa" id="divselect" @click="show()"><img src="/static/images/coins/coinuser.png"/></i>
        <drop-down :xianshi="xianshi" @change="xianshi = !xianshi"></drop-down>
      </li>
      <li class="w-100 border-bottom clearfix lh110 px-30 f32 pr">
        <span class="f32">我的手机号</span>
        <input class="coin-input lh110 pa" type="text" name="" id="" value="13905896617" />
      </li>
      <li class="w-100 border-bottom clearfix lh110 px-30 f32 pr">
        <span class="f32">我的QQ号</span>
        <input class="coin-input lh110 pa" type="text" name="" id="" value="960028161" />
      </li>
    </ul>
  </div>
</template>

<script>
  import DropDown from "../DropDown.vue"
  export default {
    name: "CoinsFrom",
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        xianshi:false
      }
    },
    methods:{
        show:function(){
            this.xianshi=true
        }

    },
    components: {
      "drop-down": DropDown,
    }
  }
</script>
<style>

</style>
