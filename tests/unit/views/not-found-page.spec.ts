import NotFoundPage from "@/views/NotFoundPage.vue";
import { mount } from "@vue/test-utils";

describe("CheckBox.vue", () => {
  it("Check 404 Page", () => {
    const wrapper = mount(NotFoundPage);
    const h1Comp = wrapper.find("h1");
    expect(h1Comp.text()).toEqual("404 not found");
    const h2Comp = wrapper.find("h2");
    expect(h2Comp.text()).toEqual("it seems you're in the wrong page");
  });
});
