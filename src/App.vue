<template>
  <div id="app" class="bg-light-grey">
    <HeaderOrg :city-suggestion="citySuggestion" />
    <StickyHeader :city-suggestion="citySuggestion" />
    <router-view />
    <div class="w-full mt-[35vh] lg:mt-[88px]">
      <FooterOrg />
    </div>
  </div>
</template>

<script lang="ts">
import HeaderOrg from "@/components/organisms/HeaderOrg.vue";
import StickyHeader from "@/components/organisms/StickyHeader.vue";
import FooterOrg from "@/components/organisms/FooterOrg.vue";
import { Component } from "vue-property-decorator";
import Vue from "vue";

@Component({
  components: { FooterOrg, HeaderOrg, StickyHeader },
})
export default class App extends Vue {
  public citySuggestion: Array<{ label: string; cityCode: string }>;

  constructor() {
    super();
    this.citySuggestion = [];
  }

  mounted() {
    this.getAutoSuggest();
  }

  public async getAutoSuggest() {
    await this.$store
      .dispatch("getSuggestion")
      .then((response) => {
        this.citySuggestion = response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-overflow-scrolling: touch;
}
</style>
