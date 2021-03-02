<template>

</template>

<script>
import { h } from 'snabbdom/build/package/h'
import { init } from 'snabbdom/build/package/init'
import { classModule } from 'snabbdom/build/package/modules/class'
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
