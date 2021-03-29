import { VNodeFlags } from '@/enum/VNodeFlags'
import { ChildrenFlags } from '@/enum/ChildrenFlags'
import { VNode } from '@/try/VNode/VNode'
import { isObject, isArray, isString } from '@/try/VNode/util'

export const Fragment = Symbol.for('Fragment')
export const Portal = Symbol.for('Portal')

function normalizeVNodes(children: any) {
  const newChildren = []
  // 遍历 children
  for (let i = 0; i < children.length; i++) {
    const child = children[i]
    if (child.key == null) {
      // 如果原来的 VNode 没有key，则使用竖线(|)与该VNode在数组中的索引拼接而成的字符串作为key
      child.key = '|' + i
    }
    newChildren.push(child)
  }
  // 返回新的children，此时 children 的类型就是 ChildrenFlags.KEYED_VNODES
  return newChildren
}
function normalizeClass(classValue: any) {
  function concatString() {
    for (let i = 0; i < classValue.length; i++) {
      res += normalizeClass(classValue[i]) + ' '
    }
  }
  function concatObjectValue() {
    for (const name in classValue) {
      if (classValue[name]) {
        res += name + ' '
      }
    }
  }
  let res = ''
  isString(classValue) && (res = classValue)
  isArray(classValue) && concatString()
  isObject(classValue) && concatObjectValue()

  return res.trim()
}

function createTextVNode(text: string) {
  return {
    _isVNode: true,
    // flags 是 VNodeFlags.TEXT
    flags: VNodeFlags.TEXT,
    tag: null,
    data: null,
    // 纯文本类型的 VNode，其 children 属性存储的是与之相符的文本内容
    children: text,
    // 文本节点没有子节点
    childFlags: ChildrenFlags.NO_CHILDREN,
    el: null,
  }
}

export function h(tag, data = null, children = null) {
  let flags = null
  if (typeof tag === 'string') {
    flags = tag === 'svg' ? VNodeFlags.ELEMENT_SVG : VNodeFlags.ELEMENT_HTML
  } else if (tag === Fragment) {
    flags = VNodeFlags.FRAGMENT
  } else if (tag === Portal) {
    flags = VNodeFlags.PORTAL
    tag = data && data.target
  } else {
    // 兼容 Vue2 的对象式组件
    if (tag !== null && typeof tag === 'object') {
      flags = tag.functional
        ? VNodeFlags.COMPONENT_FUNCTIONAL // 函数式组件
        : VNodeFlags.COMPONENT_STATEFUL_NORMAL // 有状态组件
    } else if (typeof tag === 'function') {
      // Vue3 的类组件
      flags =
        tag.prototype && tag.prototype.render
          ? VNodeFlags.COMPONENT_STATEFUL_NORMAL // 有状态组件
          : VNodeFlags.COMPONENT_FUNCTIONAL // 函数式组件
    }
  }

  let childFlags = null
  if (!Array.isArray(children)) {
    if (children == null) {
      // 没有子节点
      childFlags = ChildrenFlags.NO_CHILDREN
    } else if (children._isVNode) {
      // 单个子节点
      childFlags = ChildrenFlags.SINGLE_VNODE
    } else {
      // 其他情况都作为文本节点处理，即单个子节点，会调用 createTextVNode 创建纯文本类型的 VNode
      childFlags = ChildrenFlags.SINGLE_VNODE
      children = createTextVNode(children + '')
    }
  } else {
    const { length } = children
    switch (length) {
      case 0: // 没有 children
        childFlags = ChildrenFlags.NO_CHILDREN
        break
      case 1: // 单个子节点
        childFlags = ChildrenFlags.SINGLE_VNODE
        children = children[0]
        break
      default:
        // 多个子节点，且子节点使用key
        childFlags = ChildrenFlags.KEYED_VNODES
        children = normalizeVNodes(children)
        break
    }
  }

  return {
    _isVNode: true,
    tag,
    data,
    children,
    flags,
    childFlags,
    el: null,
    // 其他属性...
  }
}

/**
 * 挂载普通元素
 * @param vnode {VNode}
 * @param container {HTMLElement}
 * @param isSVG {boolean}
 */
function mountElement(
  vnode: VNode,
  container: HTMLElement,
  isSVG: boolean | number,
) {
  isSVG = isSVG || vnode.flags & VNodeFlags.ELEMENT_SVG

  // --------------------------------------------------
  // line:112; description:2021/3/29; bind style options
  // --------------------------------------------------
  function bindStyle() {
    // 如果 VNodeData 存在，则遍历之
    for (let key in data) {
      // key 可能是 class、style、on 等等
      switch (key) {
        case 'style':
          // 如果 key 的值是 style，说明是内联样式，逐个将样式规则应用到 el
          for (let k in data.style) {
            el.style[k] = data.style[k]
          }
          break
        case 'class':
          if (isSVG) {
            el.setAttribute('class', normalizeClass(data[key]))
          } else {
            el.className = normalizeClass(data[key])
          }
          break
      }
    }
  }
  // --------------------------------------------------
  // line:129; description:2021/3/29; bind children options
  // --------------------------------------------------
  function bindChildren() {
    // 检测如果没有子节点则无需递归挂载
    if (childFlags === ChildrenFlags.NO_CHILDREN) {
      return
    }
    if (childFlags & ChildrenFlags.SINGLE_VNODE) {
      // 如果是单个子节点则调用 mount 函数挂载
      mount(children, el, isSVG)
    } else if (childFlags & ChildrenFlags.MULTIPLE_VNODES) {
      // 如果是单多个子节点则遍历并调用 mount 函数挂载
      for (let i = 0; i < children.length; i++) {
        mount(children[i], el, isSVG)
      }
    }
  }

  const el = isSVG
    ? document.createElementNS('http://www.w3.org/2000/svg', vnode.tag)
    : document.createElement(vnode.tag)
  // 获取 data
  const data = vnode.data
  data && bindStyle()
  // child flags children
  const childFlags = vnode.childFlags
  const children = vnode.children
  // bind children
  bindChildren()
  vnode.el = el
  container.appendChild(el)
}

/**
 * 挂载组件
 * @param vnode {VNode}
 * @param container {HTMLElement}
 * @param isSVG
 */
function mountComponent(vnode, container, isSVG) {}

/**
 * 挂载文本
 * @param vnode {VNode}
 * @param container {HTMLElement}
 */
function mountText(vnode, container) {}

/**
 * 挂载 Fragment
 * @param vnode {VNode}
 * @param container {HTMLElement}
 * @param isSVG
 */
function mountFragment(vnode, container, isSVG) {}

/**
 * 挂载 Portal
 * @param vnode {VNode}
 * @param container {HTMLElement}
 * @param isSVG
 */
function mountPortal(vnode, container, isSVG) {}

/**
 * 渲染函数
 * @param vnode {VNode}
 * @param container {HTMLElement}
 * @param isSVG {boolean}
 */
function mount(vnode, container, isSVG?) {
  const { flags } = vnode
  if (flags & VNodeFlags.ELEMENT) {
    // 挂载普通标签
    mountElement(vnode, container, isSVG)
  } else if (flags & VNodeFlags.COMPONENT) {
    // 挂载组件
    mountComponent(vnode, container, isSVG)
  } else if (flags & VNodeFlags.TEXT) {
    // 挂载纯文本
    mountText(vnode, container)
  } else if (flags & VNodeFlags.FRAGMENT) {
    // 挂载 Fragment
    mountFragment(vnode, container, isSVG)
  } else if (flags & VNodeFlags.PORTAL) {
    // 挂载 Portal
    mountPortal(vnode, container, isSVG)
  }
}

/**
 * patch
 * @param vnode {VNode}
 * @param container {HTMLElement}
 */
function patch(prevVNode: any, vnode, container) {}

/**
 * 渲染函数
 * @param vnode {VNode}
 * @param container {HTMLElement}
 */
export function render(vnode, container) {
  const prevVNode = container.vnode
  if (prevVNode == null) {
    if (vnode) {
      // 没有旧的 VNode，只有新的 VNode。使用 `mount` 函数挂载全新的 VNode
      mount(vnode, container)
      // 将新的 VNode 添加到 container.vnode 属性下，这样下一次渲染时旧的 VNode 就存在了
      container.vnode = vnode
    }
  } else {
    if (vnode) {
      // 有旧的 VNode，也有新的 VNode。则调用 `patch` 函数打补丁
      patch(prevVNode, vnode, container)
      // 更新 container.vnode
      container.vnode = vnode
    } else {
      // 有旧的 VNode 但是没有新的 VNode，这说明应该移除 DOM，在浏览器中可以使用 removeChild 函数。
      container.removeChild(prevVNode.el)
      container.vnode = null
    }
  }
}
