<template functional>
  <div class="flex">
    <div
      v-for="(title, index) in props.titles"
      :key="`${title}-${index}`"
      :class="`${index !== 0 ? 'ml-[5px]' : ''}`"
    >
      <div v-if="index < 3">
        <TicketView :title="title" />
      </div>
      <div v-else-if="props.titles.length > 3">
        <ToolTip>
          <template v-slot:visible>
            <TicketView :title="`+${props.titles.length - 3}`" />
          </template>
          <template v-slot:text>
            <TooltipContent :titles="props.titles">
              <div class="flex h-full flex-row justify-center">
                <img
                  class="w-[15px] h-[10px] pr-1"
                  src="@/assets/images/Check.svg"
                  alt=""
                />
              </div>
            </TooltipContent>
          </template>
        </ToolTip>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TicketList",
  props: {
    titles: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
