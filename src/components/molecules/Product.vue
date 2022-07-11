<template>
  <div class="w-full flex bg-card md:rounded-[5px] md:p-2.5">
    <!-- Images Section -->
    <template v-if="!loadingFetchData">
      <ImageLibrary
        class="h-full"
        :main-image="$props.outlet?.property?.heroImage?.url"
        :sub-images="images"
      />
    </template>
    <template v-else>
      <ImageLibraryLoading />
    </template>
    <!-- Description Section -->
    <div
      v-if="!loadingFetchData"
      class="md:ml-4 ml-2 md:p-0 p-2.5 flex md:flex-row flex-col justify-between md:space-y-0 space-y-2 flex-1"
    >
      <div class="flex-1">
        <div class="md:flex items-center md:space-x-2 text-left md:pt-4">
          <div class="text-black-three text-base font-[700]">
            {{ $props.outlet?.property?.name }}
          </div>
          <div>
            <StarRating :rating="$props.outlet?.property?.starRating" />
          </div>
        </div>
        <div class="text-black-three text-xs text-left mt-1">
          {{ setLocation($props.outlet?.property?.location) }}
        </div>
        <div
          v-if="$props.outlet?.property?.reviews?.summary?.text"
          class="md:block hidden mt-[7px] h-[18px] w-[450px] text-placeholder text-left text-xs truncate"
        >
          {{ $props.outlet?.property?.reviews?.summary?.text }}
        </div>
        <div class="text-left mt-[11px] md:flex hidden">
          <TicketList :titles="setTitles($props.outlet?.packages) || []" />
        </div>
        <div class="md:flex hidden py-[15px]">
          <img
            class="w-[16px] h-[20px] mx-[11px]"
            src="@/assets/images/Shield.svg"
            alt=""
          />
          <div class="text-base text-black-thress">
            {{ $props.outlet?.property?.reviews?.covidSafety || "-" }}
          </div>
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
          <div
            v-if="calculateDiscount($props.outlet?.packages) * 1 > 0"
            class=""
          >
            <div class="text-white text-xs p-[5px] bg-blue-2 w-fit">
              SAVE {{ calculateDiscount($props.outlet?.packages) }}% TODAY!
            </div>
          </div>
          <div class="text-right text-placeholder text-base mt-1">
            Nightly avg.
          </div>
          <div>
            <span
              v-if="calculateDiscount($props.outlet?.packages) * 1 > 0"
              class="text-xs line-through"
              >{{ $props.outlet?.packages[0]?.displayRate.currency }}
              {{ $props.outlet?.packages[0]?.displayRate.value }}{{ " " }}</span
            >
            <span class="text-xl font-[700]"
              >{{ $props.outlet?.packages[0]?.adjustedDisplayRate.currency }}
              {{ $props.outlet?.packages[0]?.adjustedDisplayRate.value }}</span
            >
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
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
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
  @Prop() public outlet!: object;
  @Prop() public index!: number;
  public titles: Array<string>;
  public loadingFetchData: boolean;
  public images: Array<string | undefined>;

  constructor() {
    super();
    this.titles = [
      "Breakfast",
      "Free Cancellation",
      "Pay later",
      "Pay at hotel",
    ];

    this.loadingFetchData = false;
    this.images = [];
  }
  mounted() {
    this.fetchImages();
  }
  @Watch("$store.state.outlets")
  getImages(newVal: string) {
    if (newVal) {
      this.fetchImages();
    }
  }

  public fetchImages() {
    this.loadingFetchData = true;
    if (
      this.$store.state.outlets.availability.results[this.$props.index].property
        .gallery
    ) {
      const gallery =
        this.$store.state.outlets.availability.results[this.$props.index]
          .property.gallery;
      const images: Array<string | undefined> = [];

      gallery.forEach(
        (image: {
          xs?: { url: string };
          s?: { url: string };
          m?: { url: string };
          l?: { url: string };
          xl?: { url: string };
        }) => {
          switch (true) {
            case Object.keys(image).includes("xs"):
              images.push(image?.xs?.url);
              break;
            case Object.keys(image).includes("s"):
              images.push(image?.s?.url);
              break;
            case Object.keys(image).includes("m"):
              images.push(image?.m?.url);
              break;
            case Object.keys(image).includes("l"):
              images.push(image?.l?.url);
              break;
            case Object.keys(image).includes("xl"):
              images.push(image?.xl?.url);
              break;
          }
        }
      );
      this.images = images;
      setTimeout(() => {
        this.loadingFetchData = false;
      }, 1000);
    }
  }

  public setLocation(location: {
    address: string;
    city: string;
    country: string;
    postalCode: string;
  }) {
    let address = "";

    if (location.address) {
      address += location.address;
    }
    if (location.city) {
      address += ", " + location.address;
    }
    if (location.country) {
      address += ", " + location.country;
    }
    if (location.postalCode) {
      address += ", " + location.postalCode;
    }

    return address;
  }

  public calculateDiscount(
    packages: {
      displayRate: { value: number };
      adjustedDisplayRate: { value: number };
    }[]
  ) {
    const pack = packages[0];
    const discountPercentage =
      ((pack.displayRate.value - pack.adjustedDisplayRate.value) /
        pack.displayRate.value) *
      100;
    const formattedValue =
      discountPercentage.toString().match(/^-?\d+(?:\.\d{0,2})?/) || [];
    return formattedValue?.length !== 0 && formattedValue[0];
  }

  public setTitles(
    packages: {
      foodCode: number;
      nonRefundable: boolean;
      payLater: boolean;
      payAtHotel: boolean;
    }[]
  ) {
    const titles: Array<string> = [];
    packages.forEach(
      (pack: {
        foodCode: number;
        nonRefundable: boolean;
        payLater: boolean;
        payAtHotel: boolean;
      }) => {
        if (pack.foodCode) {
          switch (pack.foodCode) {
            case 1:
              titles.push("Room only");
              break;
            case 2:
              titles.push("Breakfast");
              break;
            case 3:
              titles.push("Lunch");
              break;
            case 4:
              titles.push("Dinner");
              break;
            case 5:
              titles.push("Half board");
              break;
            case 6:
              titles.push("Full board");
              break;
            case 7:
              titles.push("All inclusive");
          }
        }
        if (pack.nonRefundable) {
          titles.push("Free Cancellation");
        }
        if (pack.payLater) {
          titles.push("Pay later");
        }
        if (pack.payAtHotel) {
          titles.push("Pay at hotel");
        }
      }
    );
    return titles;
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
