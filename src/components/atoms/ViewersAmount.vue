<template functional>
  <div class="flex flex-col text-xs justify-around mr-[2px]">
    <div
      v-for="(option, index) in props.options"
      :key="`${option.label}-number-${index}`"
      :class="`${props.show && index >= props.show ? 'hide-temporary' : ''}`"
    >
      999
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ViewersAmount",
  props: {
    options: Array,
    show: {
      type: Number,
      required: false,
    },
  },
};
</script>

<style lang="scss">
.hide-temporary {
  display: none;
}
</style>
