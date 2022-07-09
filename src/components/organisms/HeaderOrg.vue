<template>
  <div class="sticky top-0 z-40">
    <!-- Header Web Version-->
    <div class="lg:block hidden">
      <div class="w-full bg-white">
        <div class="flex justify-between lg:container px-4 py-[13px]">
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
      <div class="w-full bg-blue-1">
        <div class="grid grid-cols-2 gap-2 lg:container px-4">
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
                  <div class="pl-[10px] cursor-pointer">
                    Singapore, Singapore
                  </div>
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
                  <div class="pl-[10px] cursor-pointer">
                    Manila, Phillipines
                  </div>
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
    <!-- Header Mobile Version-->
    <div class="lg:hidden">
      <div class="flex justify-between w-full bg-white px-5 py-4">
        <img
          src="https://storage.googleapis.com/dev.zumata.com/static/hiring/job01/cloudtravel-logo.jpg"
          alt="img-logo"
          class="h-[25px]"
        />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.1875 3.75H2.8125C2.70937 3.75 2.625 3.83437 2.625 3.9375V5.4375C2.625 5.54062 2.70937 5.625 2.8125 5.625H21.1875C21.2906 5.625 21.375 5.54062 21.375 5.4375V3.9375C21.375 3.83437 21.2906 3.75 21.1875 3.75ZM21.1875 18.375H2.8125C2.70937 18.375 2.625 18.4594 2.625 18.5625V20.0625C2.625 20.1656 2.70937 20.25 2.8125 20.25H21.1875C21.2906 20.25 21.375 20.1656 21.375 20.0625V18.5625C21.375 18.4594 21.2906 18.375 21.1875 18.375ZM21.1875 11.0625H2.8125C2.70937 11.0625 2.625 11.1469 2.625 11.25V12.75C2.625 12.8531 2.70937 12.9375 2.8125 12.9375H21.1875C21.2906 12.9375 21.375 12.8531 21.375 12.75V11.25C21.375 11.1469 21.2906 11.0625 21.1875 11.0625Z"
            fill="#757575"
          />
        </svg>
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
