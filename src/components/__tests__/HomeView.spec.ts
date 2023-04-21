import { describe, it, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('content check', () => {
  test('mount component', async () => {
    expect(HomeView).toBeTruthy()
  })

  it('renders correct text', async () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('Dashboard')
  })
})
