<template functional>
  <div class="flex relative">
    <el-rate
      v-model="props.rating"
      class="custom-rate"
      disabled
      text-color="#ff9900"
    >
    </el-rate>
  </div>
</template>

<script lang="ts">
export default {
  name: "StarRating",
  props: {
    rating: {
      type: Number,
      default: 1,
    },
    sizeStyle: {
      type: String,
      default: "w-3 h-3",
    },
  },
};
</script>

<style lang="scss">
.custom-rate {
  .el-rate__icon {
    margin: 0 !important;
  }
}
</style>
