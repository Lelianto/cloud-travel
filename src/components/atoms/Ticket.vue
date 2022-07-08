<template functional>
  <div
    class="w-fit text-blue-2 text-xs px-[5px] py-[2px] border-[1px] border-blue-2 cursor-pointer"
  >
    {{ props.title }}
  </div>
</template>

<script lang="ts">
export default {
  name: "TicketView",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
