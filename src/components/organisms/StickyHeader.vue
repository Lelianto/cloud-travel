<template>
  <div class="lg:block hidden sticky top-0 z-[9999] w-full bg-blue-1">
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
          v-if="
            inputCity && !routeSaved && $props?.citySuggestion?.length !== 0
          "
          class="absolute bg-white top-[55px] rounded-md border-line border-[1px] w-full"
        >
          <div class="flex flex-col justify-around w-full cursor-pointer">
            <div
              v-for="(suggest, index) in $props.citySuggestion"
              :key="`suggest-${suggest.cityCode}-${index}`"
              class="flex justify-left py-[10px] pl-[12px] w-full hover:bg-gray-200 hover:rounded-sm"
              @click="inputSearch(suggest)"
            >
              <!-- @click="addQueryParams(suggest.cityCode)" -->
              <img src="@/assets/images/LocationPoint.svg" alt="point" />
              <div class="pl-[10px] cursor-pointer">
                {{ suggest.label }}
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
            class="absolute w-full z-10 flex flex-col justify-center h-full text-xs text-black px-2"
            for="selectValueId"
            >{{ selectValue.length !== 0 ? selectValue : "" }}
          </label>
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
          <el-button
            @click="routeSaved ? addQueryParams(routeSaved) : ''"
            :disabled="!routeSaved"
            class="bg-blue-2 w-[150px] text-white border-none"
            >Search</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({})
export default class StickyHeader extends Vue {
  @Prop() public citySuggestion!: Array<{ label: string; cityCode: string }>;
  public inputCity: string;
  public options: object;
  public selectValue: string;
  public date: string;
  public pickerOptions: object;
  public nights: number;
  public routeSaved: string;

  constructor() {
    super();
    this.inputCity = "";
    this.options = {
      value1: 0,
      value2: 0,
      value3: 0,
    };
    this.selectValue = "";
    this.date = "";
    this.pickerOptions = {
      disabledDate(time: Date) {
        return time.getTime() < Date.now() - 86400000;
      },
    };
    this.nights = 0;
    this.routeSaved = "";
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

  @Watch("inputCity")
  onInputSearch(newVal: string) {
    const filterResult = this.$props.citySuggestion.filter(
      (city: { label: string }) => {
        return city.label === newVal;
      }
    );
    if (filterResult.length !== 0) {
      this.routeSaved = filterResult[0].cityCode;
    } else {
      this.routeSaved = "";
    }
  }

  mounted() {
    if (this.$route?.query?.city) {
      this.searchPlace(this.$route.query.city as string);
    }
  }

  public inputSearch(suggest: { label: string; cityCode: string }) {
    this.inputCity = suggest.label;
  }

  public addQueryParams(param: string) {
    this.searchPlace(param);
    this.$router.push(`/?city=${param}`);
    this.inputCity = "";
  }

  public searchPlace(cityCode: string) {
    this.$store.dispatch("search", {
      cityCode,
    });
  }
}
</script>
