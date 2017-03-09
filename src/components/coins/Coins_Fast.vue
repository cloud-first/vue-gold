<template>
  <div>
    <div class="coin-msg mt-20 bg-fff pb-30">
      <div class="box4 clearfix">
        <div class="fl f28 lh110"><span class="color-888 mr-20">单价</span>1元=40万金</div>
        <div class="fr f28 color-888 lh110">5分钟内发货</div>
      </div>
      <ul class="clearfix px-30">
        <li class="fl text-center mx-5 mt-20">
          <a class="d-block f28 mt-25">
            <span class="d-block f32 color-f75e46">10元</span> 400万金
          </a>
        </li>
        <li class="fl text-center mx-5 mt-20">
          <a class="d-block f28 mt-25">
            <span class="d-block f32 color-f75e46">50元</span> 2000万金
          </a>
        </li>
        <li class="fl text-center mx-5 mt-20">
          <a class="d-block f28 mt-25">
            <span class="d-block f32 color-f75e46">100元</span> 4000万金
          </a>
        </li>
        <li class="fl text-center mx-5 mt-20">
          <a class="d-block f28 mt-25">
            <span class="d-block f32 color-f75e46">200元</span> 8000万金
          </a>
        </li>
        <li class="fl text-center mx-5 mt-20">
          <a class="d-block f28 mt-25">
            <span class="d-block f32 color-f75e46">300元</span> 1200万金
          </a>
        </li>
        <li class="fl text-center mx-5 mt-20">
          <a class="d-block f28 mt-25">
            <span class="d-block f32 color-f75e46">500元</span> 20000万金
          </a>
        </li>
        <li class="fl text-center mx-5 mt-20">
          <a class="d-block f28 mt-25">
            <span class="d-block f32 color-f75e46">800元</span> 32000万金
          </a>
        </li>
        <li class="fl text-center mx-5 mt-20">
          <a class="d-block f28 mt-25">
            <span class="d-block f32 color-f75e46"> 1000元</span> 40000万金
          </a>
        </li>
        <li class="fl text-center mx-5 mt-20">

            <router-link  class="d-block f32 color-f75e46 lh110" :to="{name:'CoinsSome', query:$route.query}">其他数额</router-link>

        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
      name: "CoinsFast"
  }
</script>

<style>

</style>
