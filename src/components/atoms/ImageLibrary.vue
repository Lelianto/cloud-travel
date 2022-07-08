<template functional>
  <div>
    <img
      v-if="props.mainImage"
      class="w-[200px] h-[160px]"
      :src="props.mainImage"
      alt=""
    />
    <div
      v-if="props.subImages?.length !== 0"
      class="flex justify-between mt-[2px]"
    >
      <div
        v-for="(image, index) in props.subImages"
        :key="`sub-image-${index}`"
      >
        <img
          :class="`h-[48px] w-[48px] ${index !== 0 ? 'ml-[2px]' : ''}`"
          :src="image"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ImageLibrary",
  props: {
    mainImage: {
      type: String,
      default: "",
    },
    subImages: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
