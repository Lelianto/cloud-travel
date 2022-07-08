<template>
  <div class="w-[290px]">
    <!-- Map section -->
    <MapView />
    <div class="py-1" />
    <!-- Slider section -->
    <Reviews
      :title="'Price per night'"
      :clear-list="'CLEAR'"
      :restart-check-list="restartReviewCheckList"
      :check-list="[2500, 7500]"
    >
      <SliderBox />
    </Reviews>
    <div class="py-1" />
    <!-- Reviews section -->
    <Reviews
      :title="reviews.title"
      :clear-list="reviews.clearList"
      :check-list="reviews.checkList"
      :options="reviews.options"
      :restart-check-list="restartReviewCheckList"
      :show="reviews.show"
      :update-check-list="updateReviewCheckList"
    >
      <ViewersAmount :options="reviews.options" :show="reviews.show" />
    </Reviews>
    <div class="py-1" />
    <!-- Star Rating -->
    <Reviews
      :title="starRating.title"
      :clear-list="starRating.clearList"
      :check-list="starRating.checkList"
      :options="starRating.options"
      :restart-check-list="restartStarCheckList"
      :hide-label="starRating.hideLabel"
      :show="starRating.show"
      :update-check-list="updateStarRatingCheckList"
    >
      <div class="absolute left-5 h-full">
        <div class="flex flex-col text-xs justify-around mr-[2px] h-full">
          <div
            v-for="(option, index) in starRating.options"
            :key="`${option.label}-star-${index}`"
          >
            <div v-if="option.label * 1 !== 0" class="flex justify-start">
              <img
                v-for="(item, i) in [...Array(option.label * 1)]"
                :key="`${option.label}-star-${index}-${i}`"
                class="w-[15px] h-[15px]"
                src="@/assets/images/Star.svg"
                alt=""
              />
            </div>
            <div v-else class="text-xs text-left text-black-three">
              No rating
            </div>
          </div>
        </div>
      </div>
      <ViewersAmount :options="starRating.options" :show="starRating.show" />
    </Reviews>
    <div class="py-1" />
    <!-- Hotel section -->
    <Reviews :title="'Hotel Name'">
      <SearchHotel />
    </Reviews>
    <div class="py-1" />
    <!-- Reservation Policy -->
    <Reviews
      :title="reservations.title"
      :clear-list="reservations.clearList"
      :check-list="reservations.checkList"
      :options="reservations.options"
      :restart-check-list="restartReservationCheckList"
      :update-show="updateReservationShow"
      :update-check-list="updateReservationCheckList"
    >
      <ViewersAmount :options="reservations.options" />
    </Reviews>
    <div class="py-1" />
    <!-- Meal Plan -->
    <Reviews
      :title="mealPlan.title"
      :clear-list="mealPlan.clearList"
      :check-list="mealPlan.checkList"
      :options="mealPlan.options"
      :restart-check-list="restartMealPlanCheckList"
      :update-show="updateMealPlanShow"
      :update-check-list="updateMealPlanCheckList"
      :show="mealPlan.show"
    >
      <ViewersAmount :options="mealPlan.options" :show="mealPlan.show" />
    </Reviews>
    <div class="py-1" />
    <!-- Property type -->
    <Reviews
      :title="propertyType.title"
      :clear-list="propertyType.clearList"
      :check-list="propertyType.checkList"
      :options="propertyType.options"
      :restart-check-list="restartPropertyTypeCheckList"
      :update-show="updatePropertyTypeShow"
      :update-check-list="updatePropertyTypeCheckList"
      :show="propertyType.show"
    >
      <ViewersAmount
        :options="propertyType.options"
        :show="propertyType.show"
      />
    </Reviews>
    <div class="py-1" />
    <!-- Facilities -->
    <Reviews
      :title="facilities.title"
      :clear-list="facilities.clearList"
      :check-list="facilities.checkList"
      :options="facilities.options"
      :restart-check-list="restartFacilitiesCheckList"
      :update-show="updateFacilitiesShow"
      :update-check-list="updateFacilitiesCheckList"
      :show="facilities.show"
    >
      <ViewersAmount :options="facilities.options" :show="facilities.show" />
    </Reviews>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Reviews from "@/components/molecules/Reviews.vue";
import ViewersAmount from "@/components/atoms/ViewersAmount.vue";
import MapView from "@/components/atoms/Map.vue";
import SliderBox from "@/components/atoms/Slider.vue";
import SearchHotel from "@/components/atoms/SearchHotel.vue";
import { ReviewsProps } from "@/utils/interface";

@Component({
  components: {
    Reviews,
    ViewersAmount,
    MapView,
    SliderBox,
    SearchHotel,
  },
})
export default class SideMenusOrg extends Vue {
  @Prop() public reviews!: ReviewsProps;
  @Prop() public restartReviewCheckList!: () => void;

  @Prop() public starRating!: ReviewsProps;
  @Prop() public restartStarCheckList!: () => void;

  @Prop() public reservations!: ReviewsProps;
  @Prop() public restartReservationCheckList!: () => void;

  @Prop() public mealPlan!: ReviewsProps;
  @Prop() public restartMealPlanCheckList!: () => void;

  @Prop() public propertyType!: ReviewsProps;
  @Prop() public restartPropertyTypeCheckList!: () => void;

  @Prop() public facilities!: ReviewsProps;
  @Prop() public restartFacilitiesCheckList!: () => void;

  @Prop() public updateReviewCheckList!: (e: Array<string>) => void;
  @Prop() public updateReservationCheckList!: (e: Array<string>) => void;
  @Prop() public updateReservationShow!: (e: Array<string>) => void;
  @Prop() public updateStarRatingCheckList!: (e: Array<string>) => void;
  @Prop() public updateMealPlanCheckList!: (e: Array<string>) => void;
  @Prop() public updatePropertyTypeCheckList!: (e: Array<string>) => void;
  @Prop() public updateFacilitiesCheckList!: (e: Array<string>) => void;

  @Prop() public updateMealPlanShow!: (e: Array<string>) => void;
  @Prop() public updatePropertyTypeShow!: (e: Array<string>) => void;
  @Prop() public updateFacilitiesShow!: (e: Array<string>) => void;
}
</script>
