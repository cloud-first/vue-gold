<template>
  <div class="dialog-box2">
    <div class="dialog-main">
      <div class="dialog-body color-fff" id="errortx">
        <i class="coinx mr-30" @click="dialogBox2_hide"><img src="~images/coins/coinx.png"></i>{{smbox}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"Smbox",
    props: ['smbox'],
    data () {
      return {

      }
    },
    methods:{
      //弹出框隐藏
      dialogBox2_hide:function(){
        this.$parent.smBox=false
      },

    }
  }
</script>

<style>

</style>
