<template>
  <div v-if="xianshi" >
    <div class="w-100 showlist pa">
      <div class="pr bg-f6 color-000 f32 lh110 text-center px-30">

        收货角色名<i @click="show()" class="pa" id="coin-close"><img src="/static/images/common/close.png"/></i>
      </div>
      <ul>
        <li class="bg-fff f28 color-000 border-bottom" v-for="(dropDown,index) in dropDowns" @click="drop_show(dropDown,index)">
          <a @click="show()" class="pl-30 pr-30 lh110 d-block w-100">{{dropDown.name}}<span v-if="index == i" class="coin-span f48 fr color-f75e46 text-center">✔</span></a>
        </li>
        <!--<li class="bg-fff f28 color-000 border-bottom">-->
          <!--<a href="#" class="pl-30 lh110 d-block w-100">德玛西亚啦啦</a>-->
        <!--</li>-->
        <!--<li class="bg-fff f28 color-000 border-bottom">-->
          <!--<a href="#" class="pl-30 lh110 d-block w-100">女枪wlgq</a>-->
        <!--</li>-->
        <!--<li class="bg-fff f28 color-000 border-bottom">-->
          <!--<a href="#" class="pl-30 lh110 d-block w-100">金刚狼</a>-->
        <!--</li>-->
        <!--<li class="bg-fff f28 color-000 border-bottom">-->
          <!--<a href="#" class="pl-30 lh110 d-block w-100">极限特工</a>-->
        <!--</li>-->
        <!--<li class="bg-fff f28 color-000 border-bottom">-->
          <!--<a href="#" class="pl-30 lh110 d-block w-100">范.迪塞尔</a>-->
        <!--</li>-->
        <!--<li class="bg-fff f28 color-000">-->
          <!--<a href="#" class="pl-30 lh110 d-block w-100">露丝</a>-->
        <!--</li>-->
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
        dropDowns:[],
        i:localStorage.getItem("num")
      }
    },
    methods:{
      show:function(){
          this.$emit("change")
      },
      drop_show:function (dropDown,index) {
        console.log(dropDown.name,index)

        this.i = index;
        localStorage.setItem("num",index)
        localStorage.setItem("openid",dropDown.name)
        this.$emit('ee',dropDown.name)

      }

    },
    created:function(){
      const selfs = this
      this.$http.get('/static/json/data.json').then((response)=>{
        setTimeout(() => {
          selfs.dropDowns = response.body.juese
        }, 500)
      },(response)=>{
        console.log("error")
      })
    }
}
</script>

<style>

</style>
