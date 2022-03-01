<template>
  <button class="btn btn-info">
    <i class="fa fa-2x" :class="icon"></i>
  </button>
</template>

<script>
export default {
  props:['icon']
}
</script>

<style lang="scss" scoped>
button{
  position: fixed;
  bottom:20px;
  right:20px;
  width:60px;
  height: 60px;
  border-radius: 100%;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.4);
}
</style>