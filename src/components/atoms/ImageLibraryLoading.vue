<template functional>
  <div>
    <SkeletonLoading :styled="'w-[200px] h-[160px]'" />
    <div class="flex justify-between mt-[2px]">
      <div
        v-for="(item, index) in [...Array(4)]"
        :key="`image-${item}-${index}`"
      >
        <SkeletonLoading :styled="'w-[48px] h-[48px]'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ImageLibraryLoading",
};
</script>
