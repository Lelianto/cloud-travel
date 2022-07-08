<template>
  <div class="w-full">
    <el-slider v-model="value" range :max="10000"> </el-slider>
    <div class="flex justify-between mt-4">
      <el-input v-model="value[0]" @input="change($event, 0)" class="w-range">
        <template slot="prepend">SGD</template>
      </el-input>
      <div class="relative h-full mt-5 mx-2">
        <div class="text-transparent w-[14px] bg-blue-1 h-[1px]">.</div>
      </div>
      <el-input :value="value[1]" @input="change($event, 1)" class="w-range">
        <template slot="prepend">SGD</template>
      </el-input>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class SliderBox extends Vue {
  public value: Array<number>;

  constructor() {
    super();
    this.value = [2500, 7500];
  }

  public change($event: number, index: number) {
    this.value[index] = $event * 1;

    console.log(this.value);
  }
}
</script>

<style lang="scss">
.w-range {
  .el-input-group__prepend {
    padding: 9px 10px;
    background-color: white !important;
    color: #333333;
    font-size: 14px;
  }
  .el-input__inner {
    border-left: none;
    padding: 0px;
    color: #333333;
    font-size: 14px;
  }
}
</style>
