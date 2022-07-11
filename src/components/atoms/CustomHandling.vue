<template functional>
  <div class="text-center w-full">
    <div class="flex justify-center mb-4">
      <img :src="props.image" alt="custom" />
    </div>
    <div class="text-base text-placeholder">{{ props.text }}</div>
    <div v-if="props.description" class="text-xs text-placeholder mt-1">
      {{ props.description }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CustomHandling",
  props: {
    image: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>
