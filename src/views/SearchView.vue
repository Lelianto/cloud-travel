<template>
  <SearchTemplate
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
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchTemplate from "@/components/templates/SearchTemplate.vue";
import { ReviewsProps } from "@/utils/interface";

@Component({
  components: {
    SearchTemplate,
  },
})
export default class SearchView extends Vue {
  public reviews: ReviewsProps;
  public starRating: ReviewsProps;
  public reservations: ReviewsProps;
  public mealPlan: ReviewsProps;
  public propertyType: ReviewsProps;
  public facilities: ReviewsProps;

  constructor() {
    super();
    this.reviews = {
      title: "Reviews",
      clearList: "CLEAR",
      hideLabel: false,
      checkList: [],
      options: [
        {
          label: "Excellent",
        },
        {
          label: "Very Good",
        },
        {
          label: "Good",
        },
        {
          label: "Fair",
        },
        {
          label: "Poor",
        },
        {
          label: "No review",
        },
      ],
    };
    this.starRating = {
      title: "Price per night",
      clearList: "CLEAR",
      hideLabel: true,
      checkList: [],
      options: [
        {
          label: "5",
        },
        {
          label: "4",
        },
        {
          label: "3",
        },
        {
          label: "2",
        },
        {
          label: "1",
        },
        {
          label: "0",
        },
      ],
    };
    this.reservations = {
      title: "Reservation policy",
      clearList: "CLEAR",
      hideLabel: false,
      checkList: [],
      options: [
        {
          label: "Free cancellation",
        },
        {
          label: "Book now, pay later",
        },
        {
          label: "Pay at hotel",
        },
      ],
    };
    this.mealPlan = {
      title: "Meal plan",
      clearList: "CLEAR",
      hideLabel: false,
      show: 2,
      checkList: [],
      options: [
        {
          label: "Room only",
        },
        {
          label: "Breakfast",
        },
        {
          label: "Meal 1",
        },
        {
          label: "Meal 2",
        },
        {
          label: "Meal 3",
        },
        {
          label: "Meal 4",
        },
        {
          label: "Meal 5",
        },
      ],
    };
    this.propertyType = {
      title: "Property type",
      clearList: "CLEAR",
      hideLabel: false,
      show: 3,
      checkList: [],
      options: [
        {
          label: "Hotel",
        },
        {
          label: "Hostel/Backpacker",
        },
        {
          label: "Apartment",
        },
        {
          label: "Hotel 1",
        },
        {
          label: "Hotel 2",
        },
        {
          label: "Hotel 3",
        },
        {
          label: "Hotel 4",
        },
      ],
    };
    this.facilities = {
      title: "Facilities",
      clearList: "CLEAR",
      hideLabel: false,
      show: 3,
      checkList: [],
      options: [
        {
          label: "Swimming pool",
        },
        {
          label: "Internet access",
        },
        {
          label: "Non-smoking floor",
        },
        {
          label: "Facility 1",
        },
        {
          label: "Facility 2",
        },
        {
          label: "Facility 3",
        },
        {
          label: "Facility 4",
        },
        {
          label: "Facility 5",
        },
        {
          label: "Facility 6",
        },
        {
          label: "Facility 7",
        },
        {
          label: "Facility 8",
        },
        {
          label: "Facility 9",
        },
        {
          label: "Facility 10",
        },
        {
          label: "Facility 11",
        },
        {
          label: "Facility 12",
        },
        {
          label: "Facility 13",
        },
        {
          label: "Facility 1",
        },
        {
          label: "Facility 2",
        },
        {
          label: "Facility 3",
        },
        {
          label: "Facility 4",
        },
        {
          label: "Facility 5",
        },
        {
          label: "Facility 6",
        },
        {
          label: "Facility 7",
        },
        {
          label: "Facility 8",
        },
        {
          label: "Facility 9",
        },
        {
          label: "Facility 10",
        },
        {
          label: "Facility 11",
        },
        {
          label: "Facility 12",
        },
        {
          label: "Facility 13",
        },
      ],
    };
  }

  public restartReviewCheckList() {
    this.reviews.checkList = [];
  }

  public restartStarCheckList() {
    this.starRating.checkList = [];
  }

  public restartReservationCheckList() {
    this.reservations.checkList = [];
  }

  public restartMealPlanCheckList() {
    this.mealPlan.checkList = [];
  }

  public restartPropertyTypeCheckList() {
    this.propertyType.checkList = [];
  }

  public restartFacilitiesCheckList() {
    this.facilities.checkList = [];
  }

  public updateMealPlanShow(data: number) {
    this.mealPlan.show = data;
  }

  public updatePropertyTypeShow(data: number) {
    this.propertyType.show = data;
  }

  public updateFacilitiesShow(data: number) {
    this.facilities.show = data;
  }

  public updateReviewCheckList(data: Array<string>) {
    console.log({ data });
    this.reviews.checkList = data;
  }

  public updateStarRatingCheckList(data: Array<string>) {
    this.starRating.checkList = data;
  }

  public updateReservationCheckList(data: Array<string>) {
    this.reservations.checkList = data;
  }

  public updateMealPlanCheckList(data: Array<string>) {
    this.mealPlan.checkList = data;
  }

  public updatePropertyTypeCheckList(data: Array<string>) {
    this.propertyType.checkList = data;
  }

  public updateFacilitiesCheckList(data: Array<string>) {
    this.facilities.checkList = data;
  }
}
</script>
