import Vue from 'vue'
import increment from '@/components/increment'

describe('increment', () => {
  it('点击自增按钮后，它的值应该为1',()=>{
    //获取组件实例
    const Constructor=Vue.extend(increment);
    //挂载组件
    const vm=new Constructor().$mount();
    //获取button
    const button=vm.$el.querySelector('button');
    //新建点击事件
    const clickEvent=new window.Event('click');
    //触发点击事件
    button.dispatchEvent(clickEvent);
    //监听点击事件
    vm._watcher.run();
    //断言：count的值应该是1
    expect(Number(vm.$el.querySelector('.num').textContent)).toEqual(1);
    })
  it('点击异步自增后，它的值应该为1',(done)=>{

    const Constructer=Vue.extend(increment)

    const vm=new Constructer().$mount()

    const button=vm.$el.querySelectorAll('button')[1]

    const clickEvent=new window.Event('click');

    button.dispatchEvent(clickEvent)

    vm._watcher.run()

    var number=Number(vm.$el.querySelector('.num').textContent);
    expect(number).toEqual(0);

    window.setTimeout(()=>{
      var number1=Number(vm.$el.querySelector('.num').textContent);
      expect(number1).toEqual(1)
      done()
    },1001)
  })
})
