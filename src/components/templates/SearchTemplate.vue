<template>
  <div class="mt-4 relative">
    <div
      class="flex lg:flex-nowrap flex-wrap lg:container px-4 w-full lg:space-x-4"
    >
      <div class="lg:block hidden lg:w-1/4">
        <SideMenusOrg
          :reviews="reviews"
          :restart-review-check-list="restartReviewCheckList"
          :star-rating="starRating"
          :restart-star-check-list="restartStarCheckList"
          :reservations="reservations"
          :restart-reservation-check-list="restartReservationCheckList"
          :meal-plan="mealPlan"
          :restart-meal-plan-check-list="restartMealPlanCheckList"
          :property-type="propertyType"
          :restart-property-type-check-list="restartPropertyTypeCheckList"
          :facilities="facilities"
          :restart-facilities-check-list="restartFacilitiesCheckList"
          @updateReviewCheckList="updateReviewCheckList"
          @updateStarRatingCheckList="updateStarRatingCheckList"
          @updateReservationCheckList="updateReservationCheckList"
          @updateMealPlanCheckList="updateMealPlanCheckList"
          @updatePropertyTypeCheckList="updatePropertyTypeCheckList"
          @updateFacilitiesCheckList="updateFacilitiesCheckList"
          @updateMealPlanShow="updateMealPlanShow"
          @updatePropertyTypeShow="updatePropertyTypeShow"
          @updateFacilitiesShow="updateFacilitiesShow"
        />
      </div>
      <div class="w-full lg:w-3/4">
        <SearchResultOrg :route="route" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SideMenusOrg from "@/components/organisms/SideMenusOrg.vue";
import SearchResultOrg from "@/components/organisms/SearchResultOrg.vue";
import { ReviewsProps } from "@/utils/interface";

@Component({
  components: {
    SideMenusOrg,
    SearchResultOrg,
  },
})
export default class SearchTemplate extends Vue {
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

  @Prop() public route?: string;

  public updateReviewCheckList(e: Array<string>) {
    this.$emit("updateReviewCheckList", e);
  }
  public updateReservationCheckList(e: Array<string>) {
    this.$emit("updateReservationCheckList", e);
  }
  public updateReservationShow(e: Array<string>) {
    this.$emit("updateReservationShow", e);
  }
  public updateStarRatingCheckList(e: Array<string>) {
    this.$emit("updateStarRatingCheckList", e);
  }
  public updateMealPlanCheckList(e: Array<string>) {
    this.$emit("updateMealPlanCheckList", e);
  }
  public updatePropertyTypeCheckList(e: Array<string>) {
    this.$emit("updatePropertyTypeCheckList", e);
  }
  public updateFacilitiesCheckList(e: Array<string>) {
    this.$emit("updateFacilitiesCheckList", e);
  }
  /**
   * @function updateMealPlanShow, @function updatePropertyTypeShow, @function updateFacilitiesShow
   * are to update the show more and show less checkboxes
   */
  public updateMealPlanShow(e: Array<string>) {
    this.$emit("updateMealPlanShow", e);
  }
  public updatePropertyTypeShow(e: Array<string>) {
    this.$emit("updatePropertyTypeShow", e);
  }
  public updateFacilitiesShow(e: Array<string>) {
    this.$emit("updateFacilitiesShow", e);
  }
}
</script>
