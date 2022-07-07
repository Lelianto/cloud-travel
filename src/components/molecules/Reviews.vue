<template>
  <div>
    <MenuBox
      :title="title"
      :delete-text="clearList"
      :delete-function="restartCheckList"
      :check-list="checkList"
    >
      <CheckBox
        :check-list="checkList"
        :options="options"
        :hide-label="hideLabel"
        :show="show"
        :update-check-list="updateCheckList"
        :update-show="updateShow"
      >
        <slot></slot>
      </CheckBox>
    </MenuBox>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import MenuBox from "@/components/atoms/MenuBox.vue";
import CheckBox from "@/components/atoms/CheckBox.vue";

@Component({
  components: {
    MenuBox,
    CheckBox,
  },
})
export default class Reviews extends Vue {
  @Prop() public title!: string;
  @Prop() public clearList!: string;
  @Prop() public hideLabel!: boolean;
  @Prop() public checkList!: Array<string>;
  @Prop() public options!: Array<{ label: string; disabled?: boolean }>;
  @Prop({ required: false }) public show!: number;
  @Prop() public restartCheckList!: () => void;
  @Prop() public updateCheckList!: (e: Array<string>) => void;
  @Prop({ required: false }) public updateShow!: (e: Array<string>) => void;
}
</script>
