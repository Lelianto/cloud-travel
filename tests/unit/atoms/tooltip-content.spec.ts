import ToolTipContent from "@/components/atoms/ToolTipContent.vue";
import { mount } from "@vue/test-utils";

describe("CheckBox.vue", () => {
  it("Check content in Tooltip Content Atom", () => {
    const propsData = {
      titles: ["title-1", "title-2", "title-3"],
    };
    const wrapper = mount(ToolTipContent, {
      propsData,
    });
    const toolTipComp = wrapper.find('[data-testid="tooltip-content-2"]');
    expect(toolTipComp.text()).toEqual("title-3");
  });
});
