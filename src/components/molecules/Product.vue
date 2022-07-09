<template>
  <div class="w-full flex bg-card md:rounded-[5px] md:p-2.5">
    <!-- Images Section -->
    <div v-if="!loadingFetchData">
      <ImageLibrary :main-image="data.mainImage" :sub-images="data.subImages" />
    </div>
    <div v-else>
      <ImageLibraryLoading />
    </div>
    <!-- Description Section -->
    <div
      v-if="!loadingFetchData"
      class="ml-4 md:p-0 p-2.5 flex md:flex-row flex-col justify-between flex-1"
    >
      <div class="flex-1">
        <div class="flex text-left md:pt-4">
          <div class="text-black-three text-base font-[700]">
            {{ data.productName }}
          </div>
          <div class="pt-1 pl-2">
            <StarRating :rating="data.rating" />
          </div>
        </div>
        <div class="text-black-three text-xs text-left">
          {{ data.address }}
        </div>
        <div
          class="md:block hidden mt-[7px] text-placeholder text-left text-xs"
        >
          {{ data.description }}
        </div>
        <div class="text-left mt-[11px] md:flex hidden">
          <TicketList :titles="titles" />
        </div>
        <div class="md:flex hidden py-[15px]">
          <img
            class="w-[16px] h-[20px] mx-[11px]"
            src="@/assets/images/Shield.svg"
            alt=""
          />
          <div class="text-base text-black-thress">Singapore - SG Clean</div>
        </div>
      </div>
      <!-- Price Section -->
      <div class="flex flex-col md:justify-between justify-end">
        <img
          src="https://storage.googleapis.com/dev.zumata.com/static/hiring/job01/TY-score-widget-transparent.png"
          alt=""
          class="w-full md:block hidden"
        />
        <div class="flex flex-col justify-end items-end">
          <div class="">
            <div class="text-white text-xs p-[5px] bg-blue-2 w-fit">
              SAVE 16% TODAY!
            </div>
          </div>
          <div class="text-right text-placeholder text-base mt-1">
            Nightly avg.
          </div>
          <div>
            <span class="text-xs line-through">SGD 100</span> {{ " " }}
            <span class="text-xl font-[700]">SGD 100</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="ml-[15px] w-full">
      <div class="my-2" />
      <SkeletonLoading :styled="'w-[100%] h-[20px]'" />
      <div class="my-2" />
      <SkeletonLoading :styled="'w-[100%] h-[20px]'" />
      <div class="my-2" />
      <SkeletonLoading :styled="'w-[100%] h-[20px]'" />
      <div class="my-5" />
      <SkeletonLoading :styled="'w-[50%] h-[20px]'" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TicketView from "@/components/atoms/Ticket.vue";
import SkeletonLoading from "@/components/atoms/SkeletonLoading.vue";
import ImageLibrary from "@/components/atoms/ImageLibrary.vue";
import ImageLibraryLoading from "@/components/atoms/ImageLibraryLoading.vue";
import StarRating from "@/components/atoms/Rating.vue";
import ToolTip from "@/components/atoms/Tooltip.vue";
import TooltipContent from "@/components/atoms/ToolTipContent.vue";
import TicketList from "@/components/atoms/Tickets.vue";

@Component({
  components: {
    TicketView,
    SkeletonLoading,
    ImageLibrary,
    ImageLibraryLoading,
    StarRating,
    ToolTip,
    TooltipContent,
    TicketList,
  },
})
export default class Product extends Vue {
  public titles: Array<string>;
  public data: {
    mainImage?: string;
    subImages?: Array<string>;
    rating?: number;
    productName?: string;
    address?: string;
    description?: string;
  };
  public loadingFetchData: boolean;

  constructor() {
    super();
    this.titles = [
      "Breakfast",
      "Free Cancellation",
      "Pay later",
      "Pay at hotel",
    ];

    this.data = {};
    this.loadingFetchData = false;
  }
  mounted() {
    this.fetchImages();
  }

  public fetchImages() {
    this.loadingFetchData = true;
    setTimeout(() => {
      this.data = {
        mainImage: require("@/assets/images/CardImage1.png"),
        subImages: [
          require("@/assets/images/CardImage2.png"),
          require("@/assets/images/CardImage3.png"),
          require("@/assets/images/CardImage4.png"),
          require("@/assets/images/CardImage5.png"),
        ],
        rating: 5,
        productName: "The Fullerton Bay Hotel",
        address:
          "80 Collyer quay, Marina Bay, Singapore, Singapore, 049326 (view map)",
        description:
          "“Excellent boutique hotel. Great rooms in excellent location. Awesome vibe. Beautiful beac...",
      };
      this.loadingFetchData = false;
    }, 2000);
  }
}
</script>

<style lang="scss">
.bg-card {
  cursor: pointer;
  background-color: white;
}
.bg-card:hover {
  cursor: pointer;
  background-color: white;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.3));
}
</style>
