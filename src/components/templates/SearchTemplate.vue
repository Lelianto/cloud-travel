<template>
  <div class="bg-light-grey">
    <HeaderOrg />
    <div class="flex px-[115px] pt-[60px] w-full">
      <div>
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
          :update-review-check-list="updateReviewCheckList"
          :update-star-rating-check-list="updateStarRatingCheckList"
          :update-reservation-check-list="updateReservationCheckList"
          :update-meal-plan-check-list="updateMealPlanCheckList"
          :update-property-type-check-list="updatePropertyTypeCheckList"
          :update-facilities-check-list="updateFacilitiesCheckList"
          :update-meal-plan-show="updateMealPlanShow"
          :update-property-type-show="updatePropertyTypeShow"
          :update-facilities-show="updateFacilitiesShow"
        />
      </div>
      <div class="w-full pl-4">
        <SearchResultOrg />
      </div>
    </div>
    <div class="w-full mt-[88px]">
      <FooterOrg />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HeaderOrg from "@/components/organisms/HeaderOrg.vue";
import SideMenusOrg from "@/components/organisms/SideMenusOrg.vue";
import SearchResultOrg from "@/components/organisms/SearchResultOrg.vue";
import FooterOrg from "@/components/organisms/FooterOrg.vue";
import { ReviewsProps } from "@/utils/interface";

@Component({
  components: {
    HeaderOrg,
    SideMenusOrg,
    SearchResultOrg,
    FooterOrg,
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
