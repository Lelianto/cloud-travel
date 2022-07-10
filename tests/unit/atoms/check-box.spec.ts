import { mount } from "@vue/test-utils";
import CheckBox from "@/components/atoms/CheckBox.vue";

describe("CheckBox.vue", () => {
  const propsData = {
    checkList: [],
    options: [{ label: "label", disabled: false }],
    hideLabel: false,
    show: 1,
  };
  it("Check and uncheck testing for CheckBox components.", async () => {
    const wrapper = mount(CheckBox, {
      propsData,
    });
    const checkBoxComp = wrapper.find('[data-testid="check-box-0"]');
    expect((checkBoxComp.element as HTMLInputElement).checked).toBe(false);
    await checkBoxComp.setChecked();
    expect((checkBoxComp.element as HTMLInputElement).checked).toBe(true);
  });
  it("Hide Label testing for CheckBox components.", () => {
    const wrapperDefault = mount(CheckBox, {
      propsData,
    });
    const labelCompDefault = wrapperDefault.find('[data-testid="label-0"]');
    const blackenedText = (
      (labelCompDefault.element as Element).classList as DOMTokenList
    ).contains("text-white");
    expect(blackenedText).toBe(false);

    propsData.hideLabel = true;
    const wrapper = mount(CheckBox, {
      propsData,
    });
    const labelComp = wrapper.find('[data-testid="label-0"]');
    expect(labelComp.element.textContent?.trim()).toEqual(
      propsData.options[0].label
    );
    const bleachedText = (
      (labelComp.element as Element).classList as DOMTokenList
    ).contains("text-white");
    expect(bleachedText).toBe(true);
  });
  it("'Show more and less' testing for CheckBox components.", async () => {
    propsData.options.push({
      label: "label2",
      disabled: false,
    });
    propsData.options.push({
      label: "label3",
      disabled: false,
    });

    propsData.show = 3;
    const newWrapper = mount(CheckBox, {
      propsData,
    });
    const checkBoxComp2 = newWrapper.find('[data-testid="check-box-2"]');
    let hideTemporary = (
      (checkBoxComp2.element as Element).classList as DOMTokenList
    ).contains("hide-temporary");
    expect(hideTemporary).toBe(false);

    propsData.show = 2;
    const wrapper = mount(CheckBox, {
      propsData,
    });
    const checkBoxComp = wrapper.find('[data-testid="check-box-2"]');
    hideTemporary = (
      (checkBoxComp.element as Element).classList as DOMTokenList
    ).contains("hide-temporary");
    expect(hideTemporary).toBe(true);

    const showMore = wrapper.find('[data-testid="show-more"]');
    showMore.trigger("click");
    propsData.show = propsData.checkList.length;
    const wrapperShowMore = mount(CheckBox, {
      propsData,
    });
    const showMoreCB = wrapperShowMore.find('[data-testid="check-box-2"]');
    hideTemporary = (
      (showMoreCB.element as Element).classList as DOMTokenList
    ).contains("hide-temporary");
    expect(hideTemporary).toBe(false);
  });
});
