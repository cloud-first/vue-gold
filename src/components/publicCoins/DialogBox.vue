<template>
		<!--弹出框-->
	<div class="dialog-box bg-fff" id="dialog_show2" @click="dialogBox_hide">
			<div class="dialog-main">
				<div class="dialog-body" id="errortx">{{title}}</div>
					<div class="dialog-foot">
						<a class="dialog_close " href="javascript:void(0);" id="Ise">朕知道了</a>
					</div>
				</div>
		</div>
</template>

<script>
export default {
    name:"DropDown",
    props: ['xianshi','title'],
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
