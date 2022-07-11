import ViewersAmount from "@/components/atoms/ViewersAmount.vue";
import { mount } from "@vue/test-utils";

describe("CheckBox.vue", () => {
  it("Check content in Viewers Amount Atom", () => {
    const propsData = {
      options: [
        {
          label: "label",
        },
        {
          label: "label",
        },
        {
          label: "label",
        },
      ],
    };
    const wrapper = mount(ViewersAmount, {
      propsData,
    });
    const viewerComp = wrapper.find('[data-testid="viewer-2"]');
    expect(viewerComp.text()).toEqual("999");
  });
});
