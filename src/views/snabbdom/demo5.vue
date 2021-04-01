<template>
  <div>
    <div id="demo5"></div>
    <div id="demo5-input"></div>
    <div id="text-node"></div>
    <div id="demo5-fragment"></div>
    <div id="portal-box"></div>
    <div id="portal-native"></div>
    <div id="customer-class-component"></div>
    <div id="functional-component"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { h, render } from './maple-render/main.js'
import Main from './maple-render/main.js'
console.log(Main)
console.log(h)
console.log(render)
// import { render } from '@/try/VNode/core.ts'
@Component
export default class Demo5 extends Vue {
  mounted() {
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
    render(elVNode, document.getElementById('demo5'))
  }
}
</script>

<style scoped></style>
