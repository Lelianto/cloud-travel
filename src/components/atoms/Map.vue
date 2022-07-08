<template>
  <div class="w-full h-full relative cursor-pointer">
    <img
      src="https://storage.googleapis.com/dev.zumata.com/static/hiring/job01/map-bg.jpeg"
      alt=""
    />
    <div
      class="absolute top-0 bottom-0 left-0 right-0 m-auto flex justify-center"
    >
      <div class="h-full flex flex-col justify-center">
        <div
          class="text-sm bg-blue-1 text-white w-fit h-fit py-3 px-[39px] rounded-[3px]"
        >
          Show on map
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MapView",
};
</script>
