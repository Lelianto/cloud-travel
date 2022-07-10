<template>
  <div class="sticky top-0 z-40">
    <!-- Header Web Version-->
    <div class="lg:block hidden">
      <div class="w-full bg-white">
        <div class="flex justify-between lg:container px-4 py-[13px]">
          <img
            src="https://storage.googleapis.com/dev.zumata.com/static/hiring/job01/cloudtravel-logo.jpg"
            alt="img-logo"
            class="h-[35px]"
          />
          <div class="flex flex-col justify-center">
            <div class="flex flex-row justify-between">
              <div class="px-3">
                <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link text-black text-base">
                    {{ language }}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                      class="text-base text-black font-normal pb-1"
                      command="English"
                      >English</el-dropdown-item
                    >
                    <el-dropdown-item
                      class="text-base text-black"
                      command="Bahasa"
                      >Bahasa</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              <div class="px-3">
                <el-dropdown @command="handleCommandExchange">
                  <span class="el-dropdown-link text-black text-base">
                    {{ exchange }}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                      class="text-base text-black font-normal pb-1"
                      command="USD"
                      >USD</el-dropdown-item
                    >
                    <el-dropdown-item class="text-base text-black" command="IDR"
                      >IDR</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              <a href="#" class="px-3">My Account</a>
              <a href="#" class="pl-3">Logout</a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full bg-blue-1">
        <div class="grid grid-cols-2 gap-2 lg:container px-4">
          <div class="relative w-full">
            <el-input
              class="py-[10px] h-full w-search-1"
              placeholder="Please input"
              v-model="inputCity"
            >
              <template slot="prepend">
                <img
                  class="w-[15px] h-[15px] mx-auto"
                  src="@/assets/images/Search.svg"
                  alt="search"
                />
              </template>
            </el-input>
            <div
              v-if="inputCity"
              class="absolute bg-white top-[55px] rounded-md border-line border-[1px] w-full"
            >
              <div class="flex flex-col justify-around w-full cursor-pointer">
                <div
                  class="flex justify-left py-[10px] pl-[12px] w-full hover:bg-gray-200 hover:rounded-sm"
                >
                  <img src="@/assets/images/LocationPoint.svg" alt="point" />
                  <div class="pl-[10px] cursor-pointer">
                    Singapore, Singapore
                  </div>
                </div>
                <div
                  class="flex justify-left py-[10px] pl-[12px] w-full hover:bg-gray-200 hover:rounded-sm"
                >
                  <img src="@/assets/images/LocationPoint.svg" alt="point" />
                  <div class="pl-[10px] cursor-pointer">
                    Kuala Lumpur, Malaysia
                  </div>
                </div>
                <div
                  class="flex justify-left py-[10px] pl-[12px] w-full hover:bg-gray-200 hover:rounded-sm"
                >
                  <img src="@/assets/images/LocationPoint.svg" alt="point" />
                  <div class="pl-[10px] cursor-pointer">
                    Manila, Phillipines
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-2">
            <div class="py-[10px] relative">
              <el-date-picker
                v-model="date"
                type="daterange"
                align="right"
                start-placeholder="Start"
                end-placeholder="End"
                default-value="2022-07-01"
                class="h-full w-date"
                format="MMM dd"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
              <div
                class="absolute right-[10px] top-0 bottom-0 m-auto z-10 text-xs flex flex-col justify-center text-placeholder"
              >
                {{ nights }} night
              </div>
            </div>
            <div class="relative">
              <label
                class="absolute w-full z-10 flex flex-col justify-center h-full text-xs text-black px-2"
                for="selectValueId"
                >{{ selectValue.length !== 0 ? selectValue : "" }}
              </label>
              <el-select
                v-model="selectValue"
                id="selectValueId"
                class="py-[10px] h-full col-span-1 w-full delete-suffix"
                multiple
                allow-create
                default-first-option
                placeholder=""
              >
                <el-option :value="''" disabled class="option-size">
                  <el-input-number
                    v-model="options.value1"
                    :min="0"
                    :max="10"
                  ></el-input-number>
                  <div
                    class="text-black pl-2 flex flex-col justify-center relative z-10"
                  >
                    Adults
                  </div>
                </el-option>
                <el-option :value="''" disabled class="option-size">
                  <el-input-number
                    v-model="options.value2"
                    :min="0"
                    :max="10"
                  ></el-input-number>
                  <div
                    class="text-black pl-2 flex flex-col justify-center relative z-1"
                  >
                    Children
                  </div>
                </el-option>
                <el-option :value="''" disabled class="option-size">
                  <el-input-number
                    v-model="options.value3"
                    :min="0"
                    :max="10"
                  ></el-input-number>
                  <div
                    class="text-black pl-2 flex flex-col justify-center relative z-1"
                  >
                    Rooms
                  </div>
                </el-option>
              </el-select>
            </div>

            <div class="py-[10px] flex flex-start">
              <el-button class="bg-blue-2 w-[150px] text-white border-none"
                >Search</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Header Mobile Version-->
    <div class="lg:hidden">
      <div class="flex justify-between w-full bg-white px-5 py-4 border-b">
        <img
          src="https://storage.googleapis.com/dev.zumata.com/static/hiring/job01/cloudtravel-logo.jpg"
          alt="img-logo"
          class="h-[25px]"
        />
        <svg
          v-if="!navbarBurger"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="openBurger"
        >
          <path
            d="M21.1875 3.75H2.8125C2.70937 3.75 2.625 3.83437 2.625 3.9375V5.4375C2.625 5.54062 2.70937 5.625 2.8125 5.625H21.1875C21.2906 5.625 21.375 5.54062 21.375 5.4375V3.9375C21.375 3.83437 21.2906 3.75 21.1875 3.75ZM21.1875 18.375H2.8125C2.70937 18.375 2.625 18.4594 2.625 18.5625V20.0625C2.625 20.1656 2.70937 20.25 2.8125 20.25H21.1875C21.2906 20.25 21.375 20.1656 21.375 20.0625V18.5625C21.375 18.4594 21.2906 18.375 21.1875 18.375ZM21.1875 11.0625H2.8125C2.70937 11.0625 2.625 11.1469 2.625 11.25V12.75C2.625 12.8531 2.70937 12.9375 2.8125 12.9375H21.1875C21.2906 12.9375 21.375 12.8531 21.375 12.75V11.25C21.375 11.1469 21.2906 11.0625 21.1875 11.0625Z"
            fill="#757575"
          />
        </svg>
        <svg
          v-else
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="openBurger"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.657 12.071L5 6.414L6.414 5L12.071 10.657L17.728 5L19.142 6.414L13.485 12.071L19.142 17.728L17.728 19.142L12.071 13.485L6.414 19.142L5 17.728L10.657 12.071Z"
            fill="#757575"
          />
        </svg>
      </div>
      <div class="bg-white border-b px-5 py-2">
        <div class="flex items-center space-x-3" @click="navbarSearch = true">
          <!--icon search-->
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8564 14.5735L11.1375 10.6129C12.0937 9.449 12.6176 7.98455 12.6176 6.45999C12.6176 2.89801 9.78739 0 6.30878 0C2.83017 0 0 2.89801 0 6.45999C0 10.022 2.83017 12.92 6.30878 12.92C7.6147 12.92 8.85917 12.5167 9.92316 11.751L13.6703 15.7416C13.8269 15.9082 14.0376 16 14.2633 16C14.477 16 14.6797 15.9166 14.8336 15.7649C15.1606 15.4428 15.171 14.9085 14.8564 14.5735ZM6.30878 1.68522C8.88002 1.68522 10.9718 3.82712 10.9718 6.45999C10.9718 9.09286 8.88002 11.2348 6.30878 11.2348C3.73754 11.2348 1.64577 9.09286 1.64577 6.45999C1.64577 3.82712 3.73754 1.68522 6.30878 1.68522Z"
              fill="#757575"
            />
          </svg>
          <div>
            <h5 class="font-semibold">Singapore, Singapore</h5>
            <div class="flex flex-row flex-wrap space-x-6 items-center text-sm">
              <span>Aug 18 - Aug 19</span>
              <span>2 adults, 1 room, 0 children</span>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2">
        <div
          class="bg-white flex items-center justify-center space-x-3 py-4 text-blue-1 border-r"
          @click="navbarFilters = true"
        >
          <IconFilters />
          <span>Sort & Filter</span>
        </div>
        <div
          class="bg-white flex items-center justify-center space-x-3 py-4 text-blue-1"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 4.5C8.44374 4.5 7.89997 4.66495 7.43746 4.97399C6.97495 5.28303 6.61446 5.72229 6.40159 6.2362C6.18872 6.75012 6.13302 7.31562 6.24154 7.86119C6.35006 8.40676 6.61793 8.9079 7.01126 9.30124C7.4046 9.69457 7.90574 9.96244 8.45131 10.071C8.99688 10.1795 9.56238 10.1238 10.0763 9.91091C10.5902 9.69804 11.0295 9.33755 11.3385 8.87504C11.6475 8.41253 11.8125 7.86876 11.8125 7.3125C11.8116 6.56684 11.5151 5.85197 10.9878 5.32471C10.4605 4.79745 9.74566 4.50086 9 4.5ZM9 9C8.66624 9 8.33998 8.90103 8.06248 8.7156C7.78497 8.53018 7.56868 8.26663 7.44095 7.95828C7.31323 7.64993 7.27981 7.31063 7.34492 6.98328C7.41004 6.65594 7.57076 6.35526 7.80676 6.11926C8.04276 5.88326 8.34344 5.72254 8.67078 5.65742C8.99813 5.59231 9.33743 5.62573 9.64578 5.75345C9.95413 5.88118 10.2177 6.09747 10.4031 6.37498C10.5885 6.65248 10.6875 6.97874 10.6875 7.3125C10.687 7.7599 10.509 8.18883 10.1927 8.50519C9.87633 8.82155 9.4474 8.9995 9 9ZM9 1.125C7.35954 1.12686 5.78681 1.77935 4.62683 2.93933C3.46685 4.09931 2.81436 5.67204 2.8125 7.3125C2.8125 9.52003 3.83273 11.8602 5.76302 14.0801C6.63166 15.0831 7.60912 15.9864 8.67741 16.7733C8.77196 16.8395 8.88458 16.875 9 16.875C9.11542 16.875 9.22804 16.8395 9.32259 16.7733C10.3909 15.9864 11.3683 15.0831 12.237 14.0801C14.1672 11.8602 15.1875 9.5201 15.1875 7.3125C15.1856 5.67204 14.5331 4.09931 13.3732 2.93933C12.2132 1.77935 10.6405 1.12686 9 1.125ZM9 15.608C7.83752 14.6962 3.9375 11.3366 3.9375 7.3125C3.9375 5.96984 4.47087 4.68217 5.42027 3.73277C6.36967 2.78337 7.65734 2.25 9 2.25C10.3427 2.25 11.6303 2.78337 12.5797 3.73277C13.5291 4.68217 14.0625 5.96984 14.0625 7.3125C14.0625 11.3366 10.1623 14.6964 9 15.608Z"
              fill="#002D63"
            />
          </svg>
          <span>Map View</span>
        </div>
      </div>
      <!-- Burger Navbar -->
      <Transition name="fade">
        <div v-if="navbarBurger" class="bg-white burger-nav">
          <div class="flex flex-col space-y-6 items-start">
            <el-dropdown @command="handleCommand" class="w-full">
              <span
                class="el-dropdown-link text-black text-base flex justify-between items-center"
              >
                {{ language }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  class="text-base text-black font-normal pb-1"
                  command="English"
                  >English</el-dropdown-item
                >
                <el-dropdown-item class="text-base text-black" command="Bahasa"
                  >Bahasa</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown @command="handleCommandExchange" class="w-full">
              <span
                class="el-dropdown-link text-black text-base flex justify-between items-center"
              >
                {{ exchange }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  class="text-base text-black font-normal pb-1"
                  command="USD"
                  >USD</el-dropdown-item
                >
                <el-dropdown-item class="text-base text-black" command="IDR"
                  >IDR</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
            <a href="#">My Account</a>
            <a href="#">Logout</a>
          </div>
        </div>
      </Transition>
      <!-- Sort & Filter Navbar -->
      <Transition name="fade">
        <div
          v-if="navbarFilters"
          class="fixed inset-0 bg-light-grey overflow-y-auto"
        >
          <!--Header Filters-->
          <div class="sticky top-0 z-50 bg-white p-4 border-b">
            <div class="flex items-center space-x-4 text-blue-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="closeNavbar"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.657 12.071L5 6.414L6.414 5L12.071 10.657L17.728 5L19.142 6.414L13.485 12.071L19.142 17.728L17.728 19.142L12.071 13.485L6.414 19.142L5 17.728L10.657 12.071Z"
                  fill="currentColor"
                />
              </svg>
              <span class="font-semibold">Sort & Filter</span>
            </div>
          </div>
          <div>
            <p class="px-4 py-3 text-blue-1 font-semibold text-sm">Sort by</p>
            <div class="w-full relative bg-white">
              <div
                @click="showOption = !showOption"
                class="flex justify-between items-center py-3 px-4 text-sm hover:bg-blue-1 hover:font-[700] hover:text-white cursor-pointer"
              >
                <span>{{ sortByPrice.choosen }}</span>
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0L4 5L8 0H0Z" fill="currentColor" />
                </svg>
              </div>
              <div
                v-if="showOption"
                class="absolute z-10 w-full text-black-three p-3 text-sm bg-white border-y-white rounded-[3px] shadow-custom mt-1 border-l-white hover:bg-blue-1 hover:font-[700] hover:text-white cursor-pointer"
                @click="chooseSorting(sortByPrice.notChoosen)"
              >
                {{ sortByPrice.notChoosen }}
              </div>
            </div>
            <p class="px-4 py-3 text-blue-1 font-semibold text-sm">Filter by</p>
            <div>
              <!--Price per night-->
              <Reviews
                :title="'Price per night'"
                :clear-list="'CLEAR'"
                :restart-check-list="restartReviewCheckList"
                :check-list="[2500, 7500]"
              >
                <SliderBox />
              </Reviews>
              <!--Reviews-->
              <Reviews
                :title="reviews.title"
                :clear-list="reviews.clearList"
                :check-list="reviews.checkList"
                :options="reviews.options"
                :show="reviews.show"
                :restart-check-list="restartReviewCheckList"
                @updateCheckList="updateReviewCheckList"
              >
                <ViewersAmount
                  :options="reviews.options"
                  :show="reviews.show"
                />
              </Reviews>
              <!-- Hotel section -->
              <Reviews :title="'Hotel Name'">
                <SearchHotel />
              </Reviews>
              <!-- Reservations -->
              <Reviews
                :title="reservations.title"
                :clear-list="reservations.clearList"
                :check-list="reservations.checkList"
                :options="reservations.options"
                :restart-check-list="restartReservationCheckList"
                @updateCheckList="updateReservationCheckList"
              >
                <ViewersAmount :options="reservations.options" />
              </Reviews>
              <!-- Meal Plan -->
              <Reviews
                :title="mealPlan.title"
                :clear-list="mealPlan.clearList"
                :check-list="mealPlan.checkList"
                :options="mealPlan.options"
                :restart-check-list="restartMealPlanCheckList"
                @updateShow="updateMealPlanShow"
                @updateCheckList="updateMealPlanCheckList"
                :show="mealPlan.show"
              >
                <ViewersAmount
                  :options="mealPlan.options"
                  :show="mealPlan.show"
                />
              </Reviews>
              <!-- Property type -->
              <Reviews
                :title="propertyType.title"
                :clear-list="propertyType.clearList"
                :check-list="propertyType.checkList"
                :options="propertyType.options"
                :restart-check-list="restartPropertyTypeCheckList"
                @updateShow="updatePropertyTypeShow"
                @updateCheckList="updatePropertyTypeCheckList"
                :show="propertyType.show"
              >
                <ViewersAmount
                  :options="propertyType.options"
                  :show="propertyType.show"
                />
              </Reviews>
              <!-- Facilities -->
              <Reviews
                :title="facilities.title"
                :clear-list="facilities.clearList"
                :check-list="facilities.checkList"
                :options="facilities.options"
                :restart-check-list="restartFacilitiesCheckList"
                @updateShow="updateFacilitiesShow"
                @updateCheckList="updateFacilitiesCheckList"
                :show="facilities.show"
              >
                <ViewersAmount
                  :options="facilities.options"
                  :show="facilities.show"
                />
              </Reviews>
            </div>
          </div>
        </div>
      </Transition>
      <!-- Search Navbar -->
      <Transition name="fade">
        <div v-if="navbarSearch" class="fixed inset-0 bg-white">
          <div class="bg-white p-4 border-b">
            <div class="flex items-center space-x-4 text-blue-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="closeNavbar"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.657 12.071L5 6.414L6.414 5L12.071 10.657L17.728 5L19.142 6.414L13.485 12.071L19.142 17.728L17.728 19.142L12.071 13.485L6.414 19.142L5 17.728L10.657 12.071Z"
                  fill="currentColor"
                />
              </svg>
              <span class="font-semibold">Where?</span>
            </div>
          </div>
          <div class="p-5">
            <div class="flex flex-col space-y-4">
              <el-input
                class="w-search-2"
                placeholder="Please input"
                v-model="inputCity"
              >
                <template slot="prepend">
                  <img
                    class="w-[15px] h-[15px] mx-auto"
                    src="@/assets/images/Search.svg"
                    alt="search"
                  />
                </template>
              </el-input>
              <div class="relative">
                <el-date-picker
                  v-model="date"
                  type="daterange"
                  align="right"
                  start-placeholder="Start"
                  end-placeholder="End"
                  default-value="2022-07-01"
                  class="w-date"
                  format="MMM dd"
                  :picker-options="pickerOptions"
                >
                </el-date-picker>
                <div
                  class="absolute right-[10px] top-0 bottom-0 m-auto z-10 text-xs flex flex-col justify-center text-placeholder"
                >
                  {{ nights }} night
                </div>
              </div>
              <div class="relative">
                <label
                  class="absolute w-full z-10 flex flex-col justify-center h-full text-xs text-black px-2"
                  for="selectValueId"
                  >{{ selectValue.length !== 0 ? selectValue : "" }}
                </label>
                <el-select
                  v-model="selectValue"
                  id="selectValueId"
                  class="w-full delete-suffix"
                  multiple
                  allow-create
                  default-first-option
                  placeholder=""
                >
                  <el-option :value="''" disabled class="option-size">
                    <el-input-number
                      v-model="options.value1"
                      :min="0"
                      :max="10"
                    ></el-input-number>
                    <div
                      class="text-black pl-2 flex flex-col justify-center relative z-10"
                    >
                      Adults
                    </div>
                  </el-option>
                  <el-option :value="''" disabled class="option-size">
                    <el-input-number
                      v-model="options.value2"
                      :min="0"
                      :max="10"
                    ></el-input-number>
                    <div
                      class="text-black pl-2 flex flex-col justify-center relative z-1"
                    >
                      Children
                    </div>
                  </el-option>
                  <el-option :value="''" disabled class="option-size">
                    <el-input-number
                      v-model="options.value3"
                      :min="0"
                      :max="10"
                    ></el-input-number>
                    <div
                      class="text-black pl-2 flex flex-col justify-center relative z-1"
                    >
                      Rooms
                    </div>
                  </el-option>
                </el-select>
              </div>
              <el-button class="bg-blue-2 w-[150px] text-white border-none">
                Search
              </el-button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import IconFilters from "@/components/icons/IconFilters.vue";
import Reviews from "@/components/molecules/Reviews.vue";
import SliderBox from "@/components/atoms/Slider.vue";
import { ReviewsProps } from "@/utils/interface";
import ViewersAmount from "@/components/atoms/ViewersAmount.vue";
import SearchHotel from "@/components/atoms/SearchHotel.vue";

@Component({
  components: {
    IconFilters,
    Reviews,
    SliderBox,
    ViewersAmount,
    SearchHotel,
  },
})
export default class HeaderOrg extends Vue {
  public inputCity: string;
  public options: object;
  public selectValue: string;
  public language: string;
  public exchange: string;
  public date: string;
  public pickerOptions: object;
  public nights: number;
  public navbarBurger: boolean;
  public navbarFilters: boolean;
  public navbarSearch: boolean;
  public showOption: boolean;
  public sortByPrice: { choosen: string; notChoosen: string };
  public reviews: ReviewsProps;
  public reservations: ReviewsProps;
  public mealPlan: ReviewsProps;
  public propertyType: ReviewsProps;
  public facilities: ReviewsProps;

  constructor() {
    super();
    this.inputCity = "";
    this.options = {
      value1: 0,
      value2: 0,
      value3: 0,
    };
    this.selectValue = "";
    this.language = "English";
    this.exchange = "USD";
    this.date = "";
    this.pickerOptions = {
      disabledDate(time: Date) {
        return time.getTime() < Date.now() - 86400000;
      },
    };
    this.nights = 0;
    this.navbarBurger = false;
    this.navbarFilters = false;
    this.navbarSearch = false;
    this.showOption = false;
    this.sortByPrice = {
      choosen: "Price (lowest first)",
      notChoosen: "Price (highest first)",
    };
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

  @Watch("date")
  dateChanged(newVal: Array<number>) {
    if (newVal.length !== 0) {
      this.nights = (newVal[1] - newVal[0]) / 86400000;
    } else {
      this.nights = 0;
    }
  }

  @Watch("options", {
    immediate: true,
    deep: true,
  })
  optionsChanged(newVal: { value1: number; value2: number; value3: number }) {
    this.selectValue = `${newVal.value1} adults, ${newVal.value2} children, ${newVal.value3} rooms`;
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

  public updateReviewCheckList(data: Array<string>) {
    this.reviews.checkList = data;
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

  public handleCommand(command: string) {
    this.language = command;
  }

  public handleCommandExchange(command: string) {
    this.exchange = command;
  }

  public openBurger() {
    this.navbarBurger = !this.navbarBurger;
    if (this.navbarBurger) {
      window.document.body.style.overflowY = "hidden";
    } else {
      window.document.body.removeAttribute("style");
    }
  }

  public closeNavbar() {
    this.navbarFilters = false;
    this.navbarSearch = false;
  }

  public chooseSorting(text: string) {
    this.sortByPrice = {
      choosen: text,
      notChoosen: this.sortByPrice.choosen,
    };
    this.showOption = false;
  }

  public restartReviewCheckList() {
    this.reviews.checkList = [];
  }
}
</script>

<style lang="scss">
.burger-nav {
  @apply fixed inset-0 p-4;
  z-index: 9999;
  margin-top: 58px;
  height: calc(100vh - 58px);
}
.w-search-1 {
  .el-input__inner {
    border: none;
    padding-left: 0;
  }
  .el-input-group__prepend {
    padding: 0;
    width: 30px;
    background: white !important;
    border: none;
  }
}
.w-search-2 {
  @apply border rounded-[3px];
  .el-input__inner {
    border: none;
    padding-left: 0;
  }
  .el-input-group__prepend {
    padding: 0;
    width: 30px;
    background: white !important;
    border: none;
  }
}
.option-size {
  padding: 5px 5px !important;
  height: fit-content;
  font-weight: normal !important;
  display: flex;
  color: white !important;
}
.delete-suffix {
  .el-input__suffix {
    display: none;
  }
}
.w-date {
  width: 100% !important;
  .el-range-input {
    font-size: 12px !important;
    color: black;
    width: 26% !important;
  }
  .el-range-separator {
    padding: 0 !important;
  }
}
</style>
