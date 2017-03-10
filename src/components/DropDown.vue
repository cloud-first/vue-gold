<template>
  <div v-if="xianshi" >
    <div class="w-100 showlist pa">
      <div class="pr bg-f6 color-000 f32 lh110 text-center px-30">

        收货角色名<i @click="show()" class="pa" id="coin-close"><img src="/static/images/common/close.png"/></i>
      </div>
      <ul>
        <li class="bg-fff f28 color-000 border-bottom">
          <a href="" class="pl-30 lh110 d-block w-100">德玛西亚啦啦</a>
        </li>
        <li class="bg-fff f28 color-000 border-bottom">
          <a href="" class="pl-30 lh110 d-block w-100">女枪wlgq</a>
        </li>
        <li class="bg-fff f28 color-000 border-bottom">
          <a href="" class="pl-30 lh110 d-block w-100">金刚狼</a>
        </li>
        <li class="bg-fff f28 color-000 border-bottom">
          <a href="" class="pl-30 lh110 d-block w-100">极限特工</a>
        </li>
        <li class="bg-fff f28 color-000 border-bottom">
          <a href="" class="pl-30 lh110 d-block w-100">范.迪塞尔</a>
        </li>
        <li class="bg-fff f28 color-000">
          <a href="" class="pl-30 lh110 d-block w-100">露丝</a>
        </li>
      </ul>
    </div>
    <!--遮罩-->
    <div class="shade pa"></div>
  </div>
</template>

<script>
export default {
    name:"DropDown",
    props: ['xianshi'],
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',

      }
    },
    methods:{
      show:function(){
          this.$emit("change")
      }

    }
}
</script>

<style>

</style>
