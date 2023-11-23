import {mount} from "@vue/test-utils";
import {describe, expect, it} from "vitest";
import App from "../App.vue";
import Foo from "./foo.vue";

describe('foo', () => {
  it('props work',() => {
    const wrapper = mount(App)
    const fooWrapper = wrapper.findComponent(Foo)
    const maybe = fooWrapper.props('maybe')

    expect(maybe).toBe('default')
  })
})