<template>  
		<!--弹出框-->
	<div class="dialog-box bg-fff" id="dialog_show2" @click="dialogBox_hide">
			<div class="dialog-main">
				<div class="dialog-body" id="errortx">很抱歉，该商品类型手机版尚未开通,建议您去电脑版发布出售。</div>
					<div class="dialog-foot">
						<a class="dialog_close " href="javascript:void(0);" id="Ise">知道了</a>
					</div>
				</div>
		</div>
 </div>
</template>

<script>
export default {
    name:"DropDown",
    props: ['xianshi'],
    data () {
      return {
        
      }
    },
    methods:{
       dialogBox_hide:function(){
        	this.$parent.dialog_cover = false;
        	this.$parent.dialog_box = false;
        }


    },
    created:function(){
     
    }
}
</script>

<style>

</style>
