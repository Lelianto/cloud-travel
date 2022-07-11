<template>
  <div>
    <div
      :class="`grid grid-cols-1 ${
        $store.state.search === 'HAS_RESULTS' ? 'lg:grid-cols-3' : ''
      } mb-10 px-0 lg:px-[115px]`"
    >
      <div
        :class="`col-span-2 grid grid-cols-3 ${
          $store.state.search === 'HAS_RESULTS' ? 'grid-cols-3' : 'grid-cols-1'
        }`"
      >
        <div
          @click="scrollToTop"
          class="text-center text-sm flex flex-col justify-center cursor-pointer"
        >
          Back to top
        </div>
        <div
          v-if="$store.state.search === 'HAS_RESULTS'"
          class="col-span-2 pr-4 flex flex-col justify-center text-center text-sm cursor-pointer"
        >
          Showing Results 1 – 20 of 9999
        </div>
      </div>
      <div
        v-if="$store.state.search === 'HAS_RESULTS'"
        class="block lg:flex justify-end"
      >
        <el-pagination
          :page-size="1"
          :pager-count="11"
          layout="prev, pager, next"
          :total="13"
          class="custom-pagination text-center lg:text-right"
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

@media screen and (max-width: 900px) {
  .custom-pagination {
    .el-pager {
      li {
        min-width: fit-content !important;
        margin: 0px 3px;
      }
    }
  }
}
</style>
