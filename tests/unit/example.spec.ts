
import { mount } from "@vue/test-utils"
import HelloWorld from "src/components/HelloWorld.vue"
import { describe, it, expect } from "vitest"

describe("HelloWorld.vue", () => {

  it("should renders is page content is correct", () => {
    const msg = 'new message'
    const wrapper = mount(HelloWorld, {
      props: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
})