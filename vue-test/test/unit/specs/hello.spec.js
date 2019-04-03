import Vue from 'vue'
import hello from '@/components/hello'

describe('hello', () => {
  // 检查原始组件选项
  it('has a created hook', () => {
    expect(typeof hello.created).toBe('function')
  })

  // 评估原始组件选项中的函数的结果
  it('sets the correct default data', () => {
    expect(typeof hello.data).toBe('function')
    const defaultData = hello.data()
    expect(defaultData.message).toBe('hello!')
    expect(defaultData.price).toBe(123)
  })

  // 检查 mount 中的组件实例
  it('correctly sets the message when created', () => {
    const vm = new Vue(hello).$mount()
    expect(vm.message).toBe('bye!')
  })

  // 创建一个实例并检查渲染输出
  it('renders the correct message', () => {
    const Constructor = Vue.extend(hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent).toBe('bye!')
  })
})
