<template>
  <div>
    <!---------------------------- 金币信息 ---------------------------->
    <div class="mt-20 bg-f6 clearfix">
      <ul class="tab-2 clearfix">
        <li class="fl border-right text-center lh110 f28">
          <span class="color-888 mr-20">单价</span>1元=40.2万金
        </li>
        <li class="fl text-center lh110 f28">
          <span class="color-888 mr-20">库存</span>1,202,540万金
        </li>
      </ul>
      <div class="bg-fff clearfix px-30">
        <div class="fl lh110 w80 f32 color-000">购买数量<input class="coin-input lh110 pl-30" type="text" placeholder="不得少于单价数量" /></div>
        <div class="fr lh110 f32 color-000">万金</div>
      </div>
    </div>
    <!---------------------------- 购买 ---------------------------->
    <div class="mt-20 bg-fff">
      <div class="p-30">
        <div class="f32 color-000">价格：<span class="color-f75e46">0元</span>（最少购买20元）</div>
        <button class="w-100 bg-f75e46 bg-ccc lh110 color-fff f36 mt-30">立即购买</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
      name:"CoinsSome"
  };
</script>

<style>

</style>
