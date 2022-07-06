<template>
  <div>
    <Reviews
      :title="title"
      :clear-list="clearList"
      :check-list="checkList"
      :options="options"
      :restart-check-list="restartCheckList"
    >
      <div class="flex flex-col text-xs justify-around mr-[2px]">
        <div
          v-for="(option, index) in options"
          :key="`${option.label}-number-${index}`"
        >
          999
        </div>
      </div>
    </Reviews>
    <div class="py-1" />
    <Reviews
      :title="title"
      :clear-list="clearList"
      :check-list="checkList"
      :options="starsOptions"
      :restart-check-list="restartCheckList"
      :hide-label="hideLabel"
    >
      <div class="absolute left-5 h-full">
        <div class="flex flex-col text-xs justify-around mr-[2px] h-full">
          <div
            v-for="(option, index) in starsOptions"
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
      <div class="flex flex-col text-xs justify-around mr-[2px]">
        <div
          v-for="(option, index) in options"
          :key="`${option.label}-number-${index}`"
        >
          999
        </div>
      </div>
    </Reviews>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Reviews from "@/components/molecules/Reviews.vue";

@Component({
  components: {
    Reviews,
  },
})
export default class SideMenusOrg extends Vue {
  public title!: string;
  public clearList!: string;
  public hideLabel!: boolean;
  public checkList: Array<string>;
  public starsOptions: Array<{ label: string; disabled?: boolean }>;
  public options: Array<{ label: string; disabled?: boolean }>;

  constructor() {
    super();
    this.title = "Price per night";
    this.clearList = "CLEAR";
    this.hideLabel = true;
    this.checkList = [];
    this.starsOptions = [
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
    ];
    this.options = [
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
    ];
  }

  public restartCheckList() {
    this.checkList = [];
  }
}
</script>
