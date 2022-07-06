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
            <div class="px-3">
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link text-black text-base">
                  {{ language }}
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    class="text-base text-black font-normal pb-1"
                    command="English"
                    >English</el-dropdown-item
                  >
                  <el-dropdown-item
                    class="text-base text-black"
                    command="Bahasa"
                    >Bahasa</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div class="px-3">
              <el-dropdown @command="handleCommandExchange">
                <span class="el-dropdown-link text-black text-base">
                  {{ exchange }}
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    class="text-base text-black font-normal pb-1"
                    command="USD"
                    >USD</el-dropdown-item
                  >
                  <el-dropdown-item class="text-base text-black" command="IDR"
                    >IDR</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div class="px-3">My Account</div>
            <div class="pl-3">Logout</div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed top-0 right-0 left-0 w-full bg-blue-1 mt-[61px]">
      <div class="grid grid-cols-2 gap-2 px-[145px]">
        <div class="relative w-full">
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
          <div
            v-if="inputCity"
            class="absolute bg-white top-[55px] rounded-md border-line border-[1px] w-full"
          >
            <div class="flex flex-col justify-around w-full cursor-pointer">
              <div
                class="flex justify-left py-[10px] pl-[12px] w-full hover:bg-gray-200 hover:rounded-sm"
              >
                <img src="@/assets/images/LocationPoint.svg" alt="point" />
                <div class="pl-[10px] cursor-pointer">Singapore, Singapore</div>
              </div>
              <div
                class="flex justify-left py-[10px] pl-[12px] w-full hover:bg-gray-200 hover:rounded-sm"
              >
                <img src="@/assets/images/LocationPoint.svg" alt="point" />
                <div class="pl-[10px] cursor-pointer">
                  Kuala Lumpur, Malaysia
                </div>
              </div>
              <div
                class="flex justify-left py-[10px] pl-[12px] w-full hover:bg-gray-200 hover:rounded-sm"
              >
                <img src="@/assets/images/LocationPoint.svg" alt="point" />
                <div class="pl-[10px] cursor-pointer">Manila, Phillipines</div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <div class="py-[10px] relative">
            <el-date-picker
              v-model="date"
              type="daterange"
              align="right"
              start-placeholder="Start"
              end-placeholder="End"
              default-value="2022-07-01"
              class="h-full w-date"
              format="MMM dd"
              :picker-options="pickerOptions"
            >
            </el-date-picker>
            <div
              class="absolute right-[10px] top-0 bottom-0 m-auto z-10 text-xs flex flex-col justify-center text-placeholder"
            >
              {{ nights }} night
            </div>
          </div>
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
                <div
                  class="text-black pl-2 flex flex-col justify-center relative z-10"
                >
                  Adults
                </div>
              </el-option>
              <el-option :value="''" disabled class="option-size">
                <el-input-number
                  v-model="options.value2"
                  :min="0"
                  :max="10"
                ></el-input-number>
                <div
                  class="text-black pl-2 flex flex-col justify-center relative z-1"
                >
                  Children
                </div>
              </el-option>
              <el-option :value="''" disabled class="option-size">
                <el-input-number
                  v-model="options.value3"
                  :min="0"
                  :max="10"
                ></el-input-number>
                <div
                  class="text-black pl-2 flex flex-col justify-center relative z-1"
                >
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
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class HeaderOrg extends Vue {
  public inputCity: string;
  public options: object;
  public selectValue: string;
  public language: string;
  public exchange: string;
  public date: string;
  public pickerOptions: object;
  public nights: number;

  constructor() {
    super();
    this.inputCity = "";
    this.options = {
      value1: 0,
      value2: 0,
      value3: 0,
    };
    this.selectValue = "";
    this.language = "English";
    this.exchange = "USD";
    this.date = "";
    this.pickerOptions = {
      disabledDate(time: Date) {
        return time.getTime() < Date.now() - 86400000;
      },
    };
    this.nights = 0;
  }

  @Watch("date")
  dateChanged(newVal: Array<number>) {
    if (newVal.length !== 0) {
      this.nights = (newVal[1] - newVal[0]) / 86400000;
    } else {
      this.nights = 0;
    }
  }

  @Watch("options", {
    immediate: true,
    deep: true,
  })
  optionsChanged(newVal: { value1: number; value2: number; value3: number }) {
    this.selectValue = `${newVal.value1} adults, ${newVal.value2} children, ${newVal.value3} rooms`;
  }

  public handleCommand(command: string) {
    this.language = command;
  }

  public handleCommandExchange(command: string) {
    this.exchange = command;
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
.w-date {
  width: 100% !important;
  .el-range-input {
    font-size: 12px !important;
    color: black;
    width: 26% !important;
  }
  .el-range-separator {
    padding: 0 !important;
  }
}
</style>
