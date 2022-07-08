<template>
  <div class="w-full flex bg-card rounded-[5px] p-[10px]">
    <div>
      <img
        class="w-[200px] h-[160px]"
        src="@/assets/images/CardImage1.png"
        alt=""
      />
      <div class="flex justify-between mt-[2px]">
        <img
          class="h-[48px] w-[48px]"
          src="@/assets/images/CardImage2.png"
          alt=""
        />
        <img
          class="h-[48px] w-[48px] ml-[2px]"
          src="@/assets/images/CardImage3.png"
          alt=""
        />
        <img
          class="h-[48px] w-[48px] ml-[2px]"
          src="@/assets/images/CardImage4.png"
          alt=""
        />
        <img
          class="h-[48px] w-[48px] ml-[2px]"
          src="@/assets/images/CardImage5.png"
          alt=""
        />
      </div>
    </div>
    <div class="ml-[15px]">
      <div class="flex text-left pt-4">
        <div class="text-black-three text-base font-[700]">
          The Fullerton Bay Hotel
        </div>
        <div class="flex pt-1 pl-2">
          <img class="w-3 h-3" src="@/assets/images/Star.svg" alt="" />
          <img class="w-3 h-3" src="@/assets/images/Star.svg" alt="" />
          <img class="w-3 h-3" src="@/assets/images/Star.svg" alt="" />
          <img class="w-3 h-3" src="@/assets/images/Star.svg" alt="" />
          <img class="w-3 h-3" src="@/assets/images/Star.svg" alt="" />
        </div>
      </div>
      <div class="text-black-three text-xs text-left">
        80 Collyer quay, Marina Bay, Singapore, Singapore, 049326 (view map)
      </div>
      <div class="mt-[7px] text-placeholder text-left text-xs">
        “Excellent boutique hotel. Great rooms in excellent location. Awesome
        vibe. Beautiful beac...
      </div>
      <div class="text-left mt-[11px] flex">
        <div
          v-for="(title, index) in titles"
          :key="`${title}-${index}`"
          :class="`${index !== 0 ? 'ml-[5px]' : ''}`"
        >
          <div v-if="index < 3">
            <TicketView :title="title" />
          </div>
          <div v-else-if="titles.length > 3" class="tooltip">
            <TicketView :title="`+${titles.length - 3}`" />
            <div class="tooltiptext">
              <div class="grid grid-rows-2 grid-flow-col py-[6px]">
                <div
                  v-for="(check, i) in titles"
                  :key="`${check}-check-${i}`"
                  class="flex text-xs px-[15px] py-[6px]"
                >
                  <div class="flex h-full flex-row justify-center">
                    <img
                      class="w-[15px] h-[10px] pr-1"
                      src="@/assets/images/Check.svg"
                      alt=""
                    />
                  </div>
                  {{ check }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex py-[15px]">
        <img
          class="w-[16px] h-[20px] mx-[11px]"
          src="@/assets/images/Shield.svg"
          alt=""
        />
        <div class="text-base text-black-thress">Singapore - SG Clean</div>
      </div>
    </div>
    <div class="pt-[7px] flex flex-col justify-between">
      <img
        src="https://storage.googleapis.com/dev.zumata.com/static/hiring/job01/TY-score-widget-transparent.png"
        alt=""
        class="w-full"
      />
      <div>
        <div class="flex justify-end">
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
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TicketView from "@/components/atoms/Ticket.vue";

@Component({
  components: {
    TicketView,
  },
})
export default class Product extends Vue {
  public titles: Array<string>;

  constructor() {
    super();
    this.titles = [
      "Breakfast",
      "Free Cancellation",
      "Pay later",
      "Pay at hotel",
    ];
  }
}
</script>

<style lang="scss">
.bg-card {
  background-color: white;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.3));
}
.tooltip {
  position: relative;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 250px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  left: -190%;
  top: 120%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: -10%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
  transform: scaleY(-1);
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
