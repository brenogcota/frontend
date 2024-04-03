import { expect, test } from 'vitest'
import InvestmentCalculator from './InvestmentCalculator.vue'
import { shallowMount } from "@vue/test-utils";

test('should return an income', () => {
    const wrapper = shallowMount(InvestmentCalculator)
    expect(wrapper.text()).toContain('6.048,76');
    expect(wrapper.text()).toContain('7.313,43');
})