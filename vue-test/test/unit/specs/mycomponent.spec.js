import Vue from 'vue'
import mycomponent from '@/components/mycomponent'

/// 挂载元素并返回已渲染的文本的工具函数
function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}

describe('mycomponent', () => {
  it('renders correctly with different props', () => {
    expect(getRenderedText(mycomponent, {
      msg: 'Hello'
    })).toBe('Hello')

    expect(getRenderedText(mycomponent, {
      msg: 'Bye'
    })).toBe('Bye')
  })
})

