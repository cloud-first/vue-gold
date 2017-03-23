<template>

  <div v-show="xianshi" id="drop_down">
    <div class="w-100 showlist pa">
      <ul>
        <li class="bg-fff f28 color-000 border-bottom pr" v-for="(dropDown,index) in dropDowns" @click="drop_show(dropDown,index)">
          <a @click="show()">
            <span class="pl-30 lh110 d-block w-100">{{dropDown.name}}</span>
            <em v-if="index == i" class="pa coinok"></em>
          </a>
        </li>
      </ul>
    </div>
    <!--遮罩-->
    <div @click="show()" class="shade" style="display: block;"></div>
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
      this.$http.get('/json/data.json').then((response)=>{
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
