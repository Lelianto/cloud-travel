<template>
  <el-input
    v-model="searchHotel"
    class="text-sm"
    placeholder="e.g. Hilton, Ibis ..."
    suffix-icon="el-icon-search"
  >
  </el-input>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class SearchHotel extends Vue {
  public searchHotel: string;

  constructor() {
    super();
    this.searchHotel = "";
  }
}
</script>
