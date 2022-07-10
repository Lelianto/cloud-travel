<template>
  <div>
    <div class="flex justify-between relative">
      <div class="flex flex-col">
        <div
          v-for="(option, index) in options"
          :key="`${option.label}-custom-${index}`"
          class="flex"
        >
          <input
            :id="`${option.label}-custom-${index}`"
            type="checkbox"
            :name="option.label"
            :value="option.label"
            :class="`${show && index >= show ? 'hide-temporary' : ''} ${
              index !== 0 ? 'mt-[10px]' : ''
            }`"
            :checked="checkListModel.includes(option.label)"
            :data-testId="`check-box-${index}`"
            v-model="checkListModel"
          />
          <div
            :class="`flex flex-col justify-center text-xs ${
              hideLabel ? 'text-white text-[1px]' : 'text-black pl-1'
            } ${show && index >= show ? 'hide-temporary' : ''} ${
              index !== 0 ? 'mt-[10px]' : ''
            }`"
            :data-testid="`label-${index}`"
          >
            {{ option.label }}
          </div>
        </div>
      </div>
      <slot></slot>
    </div>
    <div
      v-if="show && show !== options.length"
      class="text-left text-xs mt-[10px] text-blue-1 cursor-pointer"
      @click="updateShow(options.length)"
      data-testId="show-more"
    >
      Show {{ options.length - show }} more
      <span class="text-[8px]">&#x25BC;</span>
    </div>
    <div
      v-if="show && show === options.length"
      class="text-left text-xs mt-[10px] text-blue-1 cursor-pointer"
      @click="updateShow(initialShow)"
      data-testId="show-less"
    >
      Show less
      <span class="text-[16px]">&#x25B4;</span>
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
    this.initialShow = 0;
    this.checkListModel = [];
  }

  mounted() {
    this.initialShow = this.$props.show || 0;
  }

  @Watch("checkList")
  emitFromParent(newVal: Array<string>) {
    if (newVal.length === 0 && this.checkListModel.length !== 0) {
      this.checkListModel = [];
    }
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
  display: none !important;
}
</style>
