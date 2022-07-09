<template>
  <div>
    <div class="flex justify-between relative">
      <el-checkbox-group v-model="checkListModel" class="flex flex-col">
        <el-checkbox
          v-for="(option, index) in options"
          :key="`${option.label}-${index}`"
          :label="option.label"
          :disabled="option.disabled"
          :checked="checkList.includes(option.label)"
          :class="`text-left custom-color ${hideLabel ? 'hide-label' : ''} ${
            show && index >= show ? 'hide-temporary' : ''
          }`"
        ></el-checkbox>
      </el-checkbox-group>
      <slot></slot>
    </div>
    <div
      v-if="show && show !== options.length"
      class="text-left text-xs mt-1 text-blue-1 cursor-pointer"
      @click="updateShow(options.length)"
    >
      Show {{ options.length - show }} more
      <span class="text-[8px]">&#x25BC;</span>
    </div>
    <div
      v-if="show && show === options.length"
      class="text-left text-xs mt-1 text-blue-1 cursor-pointer"
      @click="updateShow(initialShow)"
    >
      Show less
      <span class="text-[8px]">&#x25B4;</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class CheckBox extends Vue {
  @Prop({ required: false }) public checkList!: Array<string>;
  @Prop({ required: false }) public options!: Array<{
    label: string;
    disabled?: boolean;
  }>;
  @Prop({ required: false }) public hideLabel!: boolean;
  @Prop({ required: false }) public show!: number;

  public checkListModel: Array<string>;
  public initialShow: number;

  constructor() {
    super();
    this.checkListModel = [];
    this.initialShow = 0;
  }

  mounted() {
    this.initialShow = this.$props.show || 0;
  }

  @Watch("checkListModel")
  emitToCheckList(newVal: Array<string>) {
    this.$emit("updateCheckList", newVal);
  }

  public updateShow(e: Array<string>) {
    this.$emit("updateShow", e);
  }
}
</script>

<style lang="scss">
.custom-color {
  .el-checkbox__label {
    color: #333333 !important;
    font-size: 12px;
  }
  .el-checkbox__input.is-checked {
    .el-checkbox__inner {
      background-color: #002d63 !important;
      border-color: #002d63 !important;
    }
  }
  .el-checkbox__input {
    padding: 2px 0px;
  }
}
.hide-label {
  margin-right: 0 !important;
  .el-checkbox__label {
    display: none;
  }
}
.hide-temporary {
  display: none;
}
</style>
