<template>
  <div>
    <div class="grid grid-cols-3 mb-10 px-[115px]">
      <div
        @click="scrollToTop"
        class="text-center text-sm flex flex-col justify-center cursor-pointer"
      >
        Back to top
      </div>
      <div class="flex justify-end col-span-2">
        <div class="pr-4 flex flex-col justify-center text-sm cursor-pointer">
          Showing Results 1 – 20 of 9999
        </div>
        <el-pagination
          :page-size="20"
          :pager-count="11"
          layout="prev, pager, next"
          :total="9999"
          class="custom-pagination"
        >
        </el-pagination>
      </div>
    </div>
    <div
      class="bg-black-three text-white text-sm flex justify-center pt-[30px] pb-[20px]"
    >
      <div class="px-4">FAQ</div>
      <div class="px-4">Terms of use</div>
      <div class="px-4">Privacy policy</div>
      <div class="px-4">Contact us</div>
    </div>
    <div class="bg-black text-white text-sm flex justify-center py-[13px]">
      <div class="text-xs">Copyright CloudTravel 2021.</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class FooterOrg extends Vue {
  public scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
}
</script>

<style lang="scss">
.custom-pagination {
  .btn-prev {
    background-color: transparent !important;
    .el-icon-arrow-left {
      color: #002d63;
    }
  }
  .el-pager {
    .number {
      background-color: transparent;
    }
    .active {
      background: #002d63;
      border-radius: 5px;
      height: 24px;
      width: 24px;
      color: white;
    }
    li {
      min-width: fit-content !important;
      margin: 0px 5px;
    }
    .el-icon-more {
      background-color: transparent;
    }
  }
  .btn-next {
    background-color: transparent !important;
    .el-icon-arrow-right {
      color: #002d63;
      background-color: transparent !important;
    }
  }
}
</style>
