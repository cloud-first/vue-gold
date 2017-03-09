<template>
  <div class="top-header fixed-top border-bottom">
    <div class="top-back">
      <a href="javascript:history.go(-1)"></a>
    </div>
    <h2 class="f36 " v-text="title"></h2>
    <div class="top-right"></div>
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

<style>

</style>
