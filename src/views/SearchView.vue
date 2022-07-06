<template>
  <div>
    <div class="fixed top-0 right-0 left-0 w-full bg-white">
      <div class="flex justify-between px-[147px] py-[13px]">
        <img
          src="https://storage.googleapis.com/dev.zumata.com/static/hiring/job01/cloudtravel-logo.jpg"
          alt="img-logo"
          class="h-[35px]"
        />
        <div class="flex flex-col justify-center">
          <div class="flex flex-row justify-between">
            <div class="px-3">English</div>
            <div class="px-3">USD</div>
            <div class="px-3">My Account</div>
            <div class="pl-3">Logout</div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed top-0 right-0 left-0 w-full bg-blue-1 mt-[61px]">
      <div class="grid grid-cols-2 gap-2 px-[145px]">
        <el-input
          class="py-[10px] h-full w-search-1"
          placeholder="Please input"
          v-model="inputCity"
        >
          <template slot="prepend">
            <img
              class="w-[15px] h-[15px] mx-auto"
              src="@/assets/images/Search.svg"
              alt="search"
            />
          </template>
        </el-input>
        <div class="grid grid-cols-3 gap-2">
          <el-input
            class="py-[10px] h-full col-span-1 w-full"
            placeholder="Please input"
            v-model="inputCity"
          >
            <template slot="prepend">Http://</template>
          </el-input>
          <div class="relative">
            <label
              class="absolute w-full z-10 flex flex-col justify-center h-full text-xs text-black"
              for="selectValueId"
              >{{ selectValue.length !== 0 ? selectValue : "" }}</label
            >
            <el-select
              v-model="selectValue"
              id="selectValueId"
              class="py-[10px] h-full col-span-1 w-full delete-suffix"
              multiple
              allow-create
              default-first-option
              placeholder=""
            >
              <el-option :value="''" disabled class="option-size">
                <el-input-number
                  v-model="options.value1"
                  :min="0"
                  :max="10"
                ></el-input-number>
                <div class="text-black pl-2 flex flex-col justify-center">
                  Adults
                </div>
              </el-option>
              <el-option :value="''" disabled class="option-size">
                <el-input-number
                  v-model="options.value2"
                  :min="0"
                  :max="10"
                ></el-input-number>
                <div class="text-black pl-2 flex flex-col justify-center">
                  Children
                </div>
              </el-option>
              <el-option :value="''" disabled class="option-size">
                <el-input-number
                  v-model="options.value3"
                  :min="0"
                  :max="10"
                ></el-input-number>
                <div class="text-black pl-2 flex flex-col justify-center">
                  Rooms
                </div>
              </el-option>
            </el-select>
          </div>

          <div class="py-[10px] flex flex-start">
            <el-button class="bg-blue-2 w-[150px] text-white border-none"
              >Search</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <SearchTemplate msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import SearchTemplate from "@/components/templates/SearchTemplate.vue";

@Component({
  components: {
    SearchTemplate,
  },
})
export default class SearchView extends Vue {
  public inputCity: string;
  public options: object;
  public selectValue: string;

  constructor() {
    super();
    this.inputCity = "";
    this.options = {
      value1: 0,
      value2: 0,
      value3: 0,
    };
    this.selectValue = "";
  }

  @Watch("options", {
    immediate: true,
    deep: true,
  })
  optionsChanged(newVal: { value1: number; value2: number; value3: number }) {
    this.selectValue = `${newVal.value1} adults, ${newVal.value2} children, ${newVal.value3} rooms`;
    console.log("selectValue", this.selectValue);
  }

  public handleChange(value: number) {
    console.log({ value });
  }
}
</script>

<style lang="scss">
.w-search-1 {
  .el-input__inner {
    border: none;
    padding-left: 0;
  }
  .el-input-group__prepend {
    padding: 0;
    width: 30px;
    background: white !important;
    border: none;
  }
}
.option-size {
  padding: 5px 5px !important;
  height: fit-content;
  font-weight: normal !important;
  display: flex;
  color: white !important;
}
.delete-suffix {
  .el-input__suffix {
    display: none;
  }
}
</style>
