<template>
  <div class="bg-white rounded-[5px] pt-[15px] pr-[19px] pb-[16px] pl-[20px]">
    <div class="flex justify-between">
      <span class="text-sm font-[700] text-black cursor-pointer mb-4">{{
        title
      }}</span>
      <span
        @click="deleteFunction"
        class="text-xs font-[700] text-blue-1 cursor-pointer"
        >{{ deleteText }}</span
      >
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class MenuBox extends Vue {
  @Prop() public title!: string;
  @Prop() public deleteText!: string;
  @Prop() public deleteFunction!: () => void;
}
</script>
