<template functional>
  <div class="animate-pulse space-x-5">
    <div
      :class="`bg-gray-300 ${
        props.styled ? props.styled : 'w-[195px] h-[160px]'
      }`"
    ></div>
  </div>
</template>

<script lang="ts">
export default {
  name: "SkeletonLoading",
  props: {
    styled: {
      type: String,
      default: "",
    },
  },
};
</script>
