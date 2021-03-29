<template>
  <div>
    <span></span>
  </div>
</template>

<script lang="ts">
import { Fragment, h, Portal } from '@/try/VNode/core'
import Vue from 'vue'
import Component from 'vue-class-component'
import MyDefinedComponent from '@/try/VNode/Component'
@Component
export default class Demo3 extends Vue {
  mounted() {
    // --------------------------------------------------
    // description:2021/3/29 simple html tag
    // --------------------------------------------------
    const elementWithTextVNode = h('div', null, '我是文本')
    console.log('elementWithTextVNode->', elementWithTextVNode)
    // --------------------------------------------------
    // description:2021/3/29 simple fragment virtual element
    // --------------------------------------------------
    const fragmentVNode = h(Fragment, null, [h('td'), h('td')])
    console.log('fragment:', fragmentVNode)
    // --------------------------------------------------
    // line:25; description:2021/3/29; portal
    // --------------------------------------------------
    const portalVNode = h(Portal, { target: '#box' }, h('h1'))
    console.log('portalVNode', portalVNode)
    // --------------------------------------------------
    // line:30; description:2021/3/29; functional component
    // --------------------------------------------------
    function MyFunctionalComponents() {}
    const functionalComponentVNode = h(MyFunctionalComponents, null, h('div'))
    console.log('functionalComponent=>', functionalComponentVNode)
    // --------------------------------------------------
    // line:36; description:2021/3/29; stateful component
    // --------------------------------------------------
    class MyStatefulComponent extends MyDefinedComponent {}
    const myStatefulComponentVNode = h(MyStatefulComponent, null, h('div'))
    console.log('myStatefulComponentVNode=>', myStatefulComponentVNode)
  }
}
</script>

<style scoped></style>
