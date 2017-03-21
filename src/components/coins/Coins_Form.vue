<template>
  <!---------------------------- 角色信息 ---------------------------->
  <div class="js-msg mt-20 bg-fff clearfix">

    <ul class="bg-fff">
      <li class="w-100 border-bottom clearfix lh110 px-30 f32 pr">
        <span class="f32">收货角色名</span>
        <input class="coin-input lh110 pa" type="text" name="" value="" id="username" v-model="name" v-on:blur="books" placeholder="请输入接收游戏币的角色名" />
        <i class="pa" v-if="isTrue" id="divselect" @click="show()"><img src="/static/images/coins/coinuser.png"/></i>
      </li>
      <li class="w-100 border-bottom clearfix lh110 px-30 f32 pr">
        <span class="f32">我的手机号</span>
        <input class="coin-input lh110 pa" type="text" name="" id="phoneFrom" v-model="phone" placeholder="请输入手机号" />
      </li>
      <li class="w-100 border-bottom clearfix lh110 px-30 f32 pr">
        <span class="f32">我的QQ号</span>
        <input class="coin-input lh110 pa" type="text" name="" id="QQFrom"  v-model="QQ" placeholder="请输入QQ号" />
      </li>
    </ul>
    <drop-down :xianshi="xianshi" @change="xianshi = !xianshi" v-on:ee="incrementTotal"></drop-down>
    <!---------------------------- 遮料层 ---------------------------->
    <div class="dialog_cover" v-if="dialog_cover"></div>
			<!--弹出框-->
			<div class="dialog-box2"  v-if="dialog_box2">
				<div class="dialog-main">
					<div class="dialog-body color-fff" id="errortx">
						<i class="coinx mr-30" @click="dialogBox2_hide"><img src="static/images/coins/coinx.png"></i>请填写收货角色姓名
					</div>
				</div>
			</div>
    
  </div>
</template>

<script>
  import DropDown from "../DropDown.vue"
  export default {
    name: "CoinsForm",
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
        name:'',
        phone:'',
        QQ:'',
        dialog_cover:false,
        dialog_box2:false,
        isTrue:(this.url[0] == undefined)?false:true

      }
    },
    methods:{
        show:function(){
        		document.getElementById('drop_down').style.display="block"
        		this.dialog_box2=false
            this.xianshi=true
        },
        incrementTotal:function (b) {
          this.name=b
        },
        books:function(){
	  
	    		if(this.name==""){
	    			this.dialog_box2=true
	    		}
    		},
    		dialogBox2_hide:function(){
    			this.dialog_box2=false
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
    },
    watch:{
    	
    	
    }
  }
</script>
<style>

</style>
