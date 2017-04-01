<template>
    <!---------------------------- 遮料层 ---------------------------->
    <div class="dialog_cover" @click="dialogBox_hide"></div>
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
