<template>

</template>

<script>
import { init } from 'snabbdom/init'
import { h } from 'snabbdom/h' // helper function for creating vnodes
const MyComponent = props => {
  return h('h1', props.title)
}
export default {
  name: "demo1",
  methods:{

  }
}
</script>

<style scoped lang="scss">

</style>
