<template>
  <div>
    <div id="demo4"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { h, render } from '@/try/VNode/core'

@Component
export default class Demo4 extends Vue {
  mounted() {
    const elVNode = h(
      'div',
      {
        style: { height: '100px', width: '200px', background: 'red' },
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
  }
}
</script>

<style scoped lang="scss">
/deep/ .class-c {
  transform: rotate(45deg);
}
</style>
