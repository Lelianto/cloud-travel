<template>
  <div id="app" class="bg-light-grey">
    <HeaderOrg />
    <router-view />
    <div class="w-full mt-[88px]">
      <FooterOrg />
    </div>
  </div>
</template>

<script lang="ts">
import HeaderOrg from "@/components/organisms/HeaderOrg.vue";
import FooterOrg from "@/components/organisms/FooterOrg.vue";
import { Component } from "vue-property-decorator";
import Vue from "vue";

@Component({
  components: { FooterOrg, HeaderOrg },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
