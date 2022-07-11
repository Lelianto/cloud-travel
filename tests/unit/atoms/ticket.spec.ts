import TicketView from "@/components/atoms/Ticket.vue";
import { mount } from "@vue/test-utils";

describe("CheckBox.vue", () => {
  it("Check content in Ticket Atom", () => {
    const propsData = {
      title: "ticket-1",
    };
    const wrapper = mount(TicketView, {
      propsData,
    });
    const ticketComp = wrapper.find('[data-testId="ticket-title"]');
    expect(ticketComp.text()).toEqual("ticket-1");
  });
});
