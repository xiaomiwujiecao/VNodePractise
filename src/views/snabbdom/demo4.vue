<template>
  <div>
    <div id="demo4"></div>
    <div id="demo4-input"></div>
    <div id="text-node"></div>
    <div id="demo4-fragment"></div>
    <div id="portal-box"></div>
    <div id="portal-native"></div>
    <div id="customer-class-component"></div>
    <div id="functional-component"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Fragment, h, Portal, render } from '@/try/VNode/core'
import { MyComponent } from '@/views/snabbdom/MyComponent'
import { MyFunctionalComponent } from '@/views/snabbdom/MyFunctionalComponent'

@Component
export default class Demo4 extends Vue {
  mounted() {
    // 事件回调函数
    function handler() {
      alert('click me')
    }
    const elVNode = h(
      'div',
      {
        style: { height: '100px', width: '200px', background: 'red' },
        // 点击事件
        onclick: handler,
      },
      h('div', {
        style: {
          height: '50px',
          width: '50px',
          background: 'green',
        },
        class: [
          'class-a',
          {
            'class-b': true,
            'class-c': false,
          },
        ],
      }),
    )
    render(elVNode, document.getElementById('demo4'))

    const elInputVNode = h(
      'input',
      { class: 'cls-a', type: 'checkbox', checked: true, custom: '1' },
      null,
    )

    render(elInputVNode, document.getElementById('demo4-input'))

    const textVNode = h('div', {}, '我是新文本')
    render(textVNode, document.getElementById('text-node'))

    const elFragmentVNode = h(Fragment, null, [
      h('span', null, '我是标题1......'),
      h('span', null, '我是标题2......'),
    ])

    render(elFragmentVNode, document.getElementById('demo4-fragment'))

    const elementPortalVNode = h(
      'div',
      {
        style: {
          height: '100px',
          width: '100px',
          background: 'red',
        },
      },
      h(Portal, { target: '#portal-box' }, [
        h('span', null, '我是标题1......'),
        h('span', null, '我是标题2......'),
      ]),
    )

    render(elementPortalVNode, document.getElementById('portal-native'))

    // h 函数的第一个参数是组件类
    const elCLassComponentVNode = h(MyComponent)
    render(
      elCLassComponentVNode,
      document.getElementById('customer-class-component'),
    )

    const functionalComponent = h(MyFunctionalComponent)
    render(functionalComponent, document.getElementById('functional-component'))
  }
}
</script>

<style scoped lang="scss">
/deep/ .class-c {
  transform: rotate(45deg);
}
</style>
