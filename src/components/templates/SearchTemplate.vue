<template>
  <div class="bg-light-grey">
    <HeaderOrg />
    <div class="flex px-[115px] pt-[60px]">
      <div class="w-[290px]">
        <SideMenusOrg />
      </div>
      <div class="w-full pl-4">
        <SearchResultOrg />
      </div>
    </div>
    <FooterOrg />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HeaderOrg from "@/components/organisms/HeaderOrg.vue";
import SideMenusOrg from "@/components/organisms/SideMenusOrg.vue";
import SearchResultOrg from "@/components/organisms/SearchResultOrg.vue";
import FooterOrg from "@/components/organisms/FooterOrg.vue";

@Component({
  components: {
    HeaderOrg,
    SideMenusOrg,
    SearchResultOrg,
    FooterOrg,
  },
})
export default class SearchTemplate extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
