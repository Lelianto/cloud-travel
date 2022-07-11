<template>
  <div>
    <div
      v-if="productUi === 'HAS_RESULTS'"
      class="text-base text-black font-[700] text-left mb-3"
    >
      Singapore: 9999 properties found
    </div>
    <div class="w-full lg:grid hidden grid-cols-4 mb-[15px]">
      <div
        :class="`text-center p-3 text-sm border-y-white border-l-white border-custom rounded-l-[3px] hover:bg-blue-1 hover:font-[700] hover:text-white cursor-pointer ${
          choosenMenu === 1
            ? 'bg-blue-1 text-white font-[700]'
            : 'text-black-three bg-white'
        }`"
        @click="chooseMenu(1)"
      >
        Popularity
      </div>
      <div class="w-full relative">
        <div
          :class="`text-center p-3 text-sm border-y-white border-l-white border-custom hover:bg-blue-1 hover:font-[700] hover:text-white cursor-pointer ${
            choosenMenu === 2
              ? 'bg-blue-1 text-white font-[700]'
              : 'text-black-three bg-white'
          }`"
          @click="chooseMenu(2)"
        >
          {{ sortByPrice.choosen }}
          <span @click="showOption = !showOption" class="text-[8px]"
            >&#x25BC;</span
          >
        </div>
        <div
          v-if="showOption"
          class="text-center absolute z-10 w-full text-black-three py-3 text-sm bg-white border-y-white rounded-[3px] shadow-custom mt-1 border-l-white hover:bg-blue-1 hover:font-[700] hover:text-white cursor-pointer"
          @click="chooseSorting(sortByPrice.notChoosen)"
        >
          {{ sortByPrice.notChoosen }}
        </div>
      </div>
      <div
        :class="`text-center p-3 text-sm border-y-white border-l-white border-custom hover:bg-blue-1 hover:font-[700] hover:text-white cursor-pointer ${
          choosenMenu === 3
            ? 'bg-blue-1 text-white font-[700]'
            : 'text-black-three bg-white'
        }`"
        @click="chooseMenu(3)"
      >
        Reviews
      </div>
      <div
        :class="`text-center p-3 text-sm border-y-white border-l-white rounded-r-[3px] hover:bg-blue-1 hover:font-[700] hover:text-white cursor-pointer ${
          choosenMenu === 4
            ? 'bg-blue-1 text-white font-[700]'
            : 'text-black-three bg-white'
        }`"
        @click="chooseMenu(4)"
      >
        Discount
      </div>
    </div>
    <div
      v-if="
        productUi === 'HAS_RESULTS' &&
        $store.state.outlets?.availability?.results
      "
      class="w-full"
    >
      <div
        v-for="(outlet, index) in $store.state.outlets.availability.results"
        :key="`product-${outlet}-${index}`"
        :class="`${index !== 0 ? 'mt-[10px]' : ''}`"
      >
        <Product :outlet="outlet" :index="index" />
      </div>
    </div>
    <div
      v-for="(handle, index) in ['NO_RESULT', 'SEARCH_ERROR']"
      :key="`${handle}-${index}`"
    >
      <div v-if="productUi === `${handle}`" class="mt-16">
        <CustomHandling
          :image="customErrorHandling[`${handle}`].image"
          :text="customErrorHandling[`${handle}`].text"
          :description="customErrorHandling[`${handle}`].description"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Product from "@/components/molecules/Product.vue";
import CustomHandling from "@/components/atoms/CustomHandling.vue";

@Component({
  components: {
    Product,
    CustomHandling,
  },
})
export default class SearchResultOrg extends Vue {
  public choosenMenu: number;
  public sortByPrice: { choosen: string; notChoosen: string };
  public showOption: boolean;
  public productUi: "HAS_RESULTS" | "NO_RESULT" | "SEARCH_ERROR";
  public customErrorHandling: {
    NO_RESULT: { image: string; text: string; description?: string };
    SEARCH_ERROR: { image: string; text: string; description?: string };
  };
  constructor() {
    super();
    this.choosenMenu = 1;
    this.sortByPrice = {
      choosen: "Price (lowest first)",
      notChoosen: "Price (highest first)",
    };
    this.showOption = false;
    this.productUi = "HAS_RESULTS";
    this.customErrorHandling = {
      NO_RESULT: {
        image: require("@/assets/images/Search.svg"),
        text: "Sorry! We couldn't find any properties for your search.",
      },
      SEARCH_ERROR: {
        image: require("@/assets/images/Warning.svg"),
        text: "Opps, something went wrong.",
        description: "error message here",
      },
    };
  }

  @Watch("$route")
  checkRoute(newRoute: { query: { city: string } }) {
    this.translateRoute(newRoute.query.city);
  }

  mounted() {
    this.translateRoute(this.$route.query.city as string);
  }

  public translateRoute(route?: string) {
    switch (route) {
      case "klmy":
        this.productUi = "NO_RESULT";
        this.$store.commit("setSearchResults", "NO_RESULT");
        break;
      case "mlph":
        this.productUi = "SEARCH_ERROR";
        this.$store.commit("setSearchResults", "SEARCH_ERROR");
        break;
      default:
        this.productUi = "HAS_RESULTS";
        this.$store.commit("setSearchResults", "HAS_RESULTS");
    }
  }

  public chooseMenu(index: number) {
    this.choosenMenu = index;
  }

  public chooseSorting(text: string) {
    const sortPrice = {
      choosen: text,
      notChoosen: this.sortByPrice.choosen,
    };

    this.sortByPrice = sortPrice;
    this.showOption = false;
  }
}
</script>

<style lang="scss">
.border-custom {
  border-right-color: #dddddd !important;
  border-right-width: 2px;
}

.shadow-custom {
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.3));
}
</style>
