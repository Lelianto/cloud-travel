<template functional>
  <div class="flex">
    <img
      v-for="(rate, index) in [...Array(props.rating)]"
      :key="`rate-${rate}-${index}`"
      :class="props.sizeStyle"
      src="@/assets/images/Star.svg"
      alt=""
    />
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
