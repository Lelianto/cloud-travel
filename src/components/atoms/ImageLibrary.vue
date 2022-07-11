<template functional>
  <div class="flex flex-col items-center sm:max-w-[204px] max-w-[150px]">
    <img
      v-if="props.mainImage"
      class="w-full h-full object-cover lg:max-h-[160px]"
      :src="props.mainImage"
      alt="main-image"
    />
    <div
      v-if="props.subImages?.length !== 0"
      class="sm:flex hidden justify-between space-x-1 mt-1 sm:max-w-[204px] max-w-[150px] overflow-scroll"
    >
      <img
        v-for="(image, index) in props.subImages"
        class="h-[48px] w-[48px] object-cover"
        :key="`sub-image-${index}`"
        :src="image"
        alt="sub-image"
      />
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
