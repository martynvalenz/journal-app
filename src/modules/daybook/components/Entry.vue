<template>
  <div class="mb-3 pointer p-2 entry-container" @click="$router.push({name:'entry',params:{id:10}})">
    <div class="entry-title d-flex">
      <span class="mx-1 fs-5 text-primary">{{item.date}}</span>
    </div>
    <div class="entry-description">
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  props:['item']
}
</script>

<style lang="scss" scoped>
.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition:0.2s all ease-in;

  &:hover{
    background-color:lighten($color:grey, $amount:45);
    transition:0.2s all ease-in;
  }

  .entry-description{
    font-size:12px;
  }
}
</style>