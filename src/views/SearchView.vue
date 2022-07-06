<template>
  <SearchTemplate msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
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
