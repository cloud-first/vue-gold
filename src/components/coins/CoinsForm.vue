<template>
  <!---------------------------- 角色信息 ---------------------------->
  <div class="js-msg mt-20 bg-fff clearfix">

    <ul class="bg-fff">
      <li class="w-100 border-bottom clearfix lh110 px-30 f32 pr">
        <span class="f32">收货角色名</span>
        <input class="coin-input lh110 pa" type="text" name="" value="" id="username" v-model="receiver" placeholder="请输入接收游戏币的角色名" />
        <i class="pa" v-if="isTrue" id="divselect" @click="show()"><img src="~images/coins/coinuser.png"/></i>
      </li>
      <li class="w-100 border-bottom clearfix lh110 px-30 f32 pr">
        <span class="f32">我的手机号</span>
        <input class="coin-input lh110 pa" type="text" name="" id="phoneFrom" v-model="phoneName" placeholder="请输入手机号" />
      </li>
      <li class="w-100 border-bottom clearfix lh110 px-30 f32 pr">
        <span class="f32">我的QQ号</span>
        <input class="coin-input lh110 pa" type="text" name="" id="QQFrom"  v-model="qqName" placeholder="请输入QQ号" />
      </li>
    </ul>
    <drop-down :xianshi="xianshi" @change="xianshi = !xianshi" v-on:ee="incrementTotal" v-on:ff="mobileNumberTotal" v-on:gg="qqNumberTotal"></drop-down>
    <!---------------------------- 遮料层 ---------------------------->
    <div class="dialog_cover" v-if="dialog_cover"></div>
    <!--弹出框1-->
    <dialog-smbox v-if="smBox" :smbox="smboxMessage"></dialog-smbox>
			<!--&lt;!&ndash;弹出框&ndash;&gt;-->
			<!--<div class="dialog-box2"  v-if="dialog_box2">-->
				<!--<div class="dialog-main">-->
					<!--<div class="dialog-body color-fff" id="errortx">-->
						<!--<i class="coinx mr-30" @click="dialogBox2_hide"><img src="~images/coins/coinx.png"></i>{{message}}-->
					<!--</div>-->
				<!--</div>-->
			<!--</div>-->

  </div>
</template>

<script>
  import DropDown from "../publicCoins/DropDown.vue"
  import Smbox from "./Smbox.vue"
  export default {
    name: "CoinsForm",
    props:{
      url: {
        default:function() {
            return []
        }
      }
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        xianshi:false,
        receiver:'',
        phone:'',
        qqName:'',
        phoneName:"",
        dialog_cover:false,
        dialog_box2:false,
        smBox:false,
        smboxMessage:"",
        message:"",
        isTrue:(this.url[0] == undefined)?false:true

      }
    },
    components: {
      "drop-down": DropDown,
      "dialog-smbox":Smbox,
    },
    methods:{
        show:function(){
        		document.getElementById('drop_down').style.display="block";
        		this.smBox=false;
            this.xianshi=true;
            console.log(this.receiver);
        },
        incrementTotal:function (b) {
          console.log("1",b);
          this.receiver=b;
        },
       mobileNumberTotal:function (b) {
         console.log("2",b);
          this.phoneName=b;
        },
        qqNumberTotal:function (b) {
          console.log("3",b);
          this.qqName=b;
        },
    		dialogBox2_hide:function(){
    			this.smBox=false
    		}

    },
    created(){
        if(this.url[0]!=undefined){
            this.receiver = localStorage.getItem('openid');
            this.qqName = localStorage.getItem('qqNumber');
            this.phoneName = localStorage.getItem('mobileNumber');
        }else{
          this.receiver="";
          this.qqName="";
          this.phoneName="";
        }
    },
    mounted(){
      this.$emit('formRoleName',this.receiver)
      this.$emit('formQqname',this.qqName)
      this.$emit('formPhoneName',this.phoneName)
    },
    watch:{
      receiver(val){
          this.$emit('formRoleName',this.receiver)
        },
      qqName(val){
        this.$emit('formQqname',this.qqName)
      },
      phoneName(val){
        this.$emit('formPhoneName',this.phoneName)
      }


    },


  }
</script>
<style>

</style>
