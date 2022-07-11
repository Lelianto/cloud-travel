import MapView from "@/components/atoms/Map.vue";
import { mount } from "@vue/test-utils";

describe("CheckBox.vue", () => {
  it("Check content in Map Atom", () => {
    const wrapper = mount(MapView);
    const mapComp = wrapper.find('[data-testid="text-map"]');
    expect(mapComp.text()).toEqual("Show on map");
  });
});
