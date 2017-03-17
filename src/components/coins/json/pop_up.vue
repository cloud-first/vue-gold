<template>
  <!--弹出框-->
  <div class="dialog-box bg-fff hide" id="dialog_show">
    <!--提示成功-->
    <div class="dialog-main">

      <div class="dialog-body" id="errortx">
        <i class="coinx mr-30"><img src="../images/coins/coinx.png"/></i>请填写收货角色姓名
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    props: {
      title: {
        type: String,
        default: "123"

      }
    }
  }
</script>
