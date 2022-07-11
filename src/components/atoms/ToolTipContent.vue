<template functional>
  <div class="grid grid-rows-2 grid-flow-col py-[6px]">
    <div
      v-for="(check, i) in props.titles"
      :key="`${check}-check-${i}`"
      class="flex text-xs px-[15px] py-[6px]"
      :data-testId="`tooltip-content-${i}`"
    >
      <slot></slot>
      {{ check }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TooltipContent",
  props: {
    titles: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
