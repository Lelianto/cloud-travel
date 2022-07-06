<template>
  <div class="flex justify-between relative">
    <el-checkbox-group v-model="checkListModel" class="flex flex-col">
      <el-checkbox
        v-for="(option, index) in options"
        :key="`${option.label}-${index}`"
        :label="option.label"
        :disabled="option.disabled"
        :checked="checkList.includes(option.label)"
        :class="`text-left custom-color ${hideLabel ? 'hide-label' : ''}`"
      ></el-checkbox>
    </el-checkbox-group>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class CheckBox extends Vue {
  @Prop() public checkList!: Array<string>;
  @Prop() public options!: Array<{ label: string; disabled?: boolean }>;
  @Prop() public hideLabel!: boolean;

  public checkListModel: Array<string>;

  constructor() {
    super();
    this.checkListModel = [];
  }

  @Watch("checkList")
  checkParent(newVal: Array<string>) {
    this.checkListModel = newVal;
  }

  @Emit("checkList")
  checked() {
    return this.checkListModel;
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
</style>
