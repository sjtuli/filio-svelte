<script>
  export let data;
</script>

<template>
  <span>Most active stock - {data.mostActiveStock.symbol}</span>
  <span>Top gaining stock - {data.topGainingStock.symbol}</span>
  <span>Top losing stock - {data.topLosingStock.symbol}</span>
  <slot />
</template>

<style>
  span {
    margin-right: 30px;
    font-size: 24px;
  }
</style>
