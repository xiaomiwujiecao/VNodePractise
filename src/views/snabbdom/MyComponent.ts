import MYSuperComponent from '@/try/VNode/Component'
import { h } from '@/try/VNode/core'

export class MyComponent extends MYSuperComponent {
  render() {
    return h(
      'div',
      {
        style: {
          background: 'green',
        },
      },
      [
        h('span', null, '我是组件的标题1......'),
        h('span', null, '我是组件的标题2......'),
      ],
    )
  }
}
