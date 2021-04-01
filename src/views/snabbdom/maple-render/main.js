!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.maplerender = t())
    : (e.maplerender = t())
})(window, function() {
  return (function(e) {
    var t = {}
    function n(r) {
      if (t[r]) return t[r].exports
      var l = (t[r] = { i: r, l: !1, exports: {} })
      return e[r].call(l.exports, l, l.exports, n), (l.l = !0), l.exports
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
      }),
      (n.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e
        var r = Object.create(null)
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var l in e)
            n.d(
              r,
              l,
              function(t) {
                return e[t]
              }.bind(null, l),
            )
        return r
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default
              }
            : function() {
                return e
              }
        return n.d(t, 'a', t), t
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (n.p = ''),
      n((n.s = 3))
    )
  })([
    function(e, t, n) {
      'use strict'
      function r(e) {
        return (r =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.normalizeVNodes = t.createTextVNode = t.h = t.Portal = t.Fragment = void 0)
      var l = n(1),
        a = n(2)
      function o(e) {
        return {
          _isVNode: !0,
          flags: l.VNodeFlags.TEXT,
          tag: null,
          data: null,
          children: e,
          childFlags: a.ChildrenFlags.NO_CHILDREN,
          el: null,
        }
      }
      function i(e) {
        for (var t = [], n = 0; n < e.length; n++) {
          var r = e[n]
          null == r.key && (r.key = '|' + n), t.push(r)
        }
        return t
      }
      ;(t.Fragment = Symbol.for('Fragment')),
        (t.Portal = Symbol.for('Portal')),
        (t.h = function(e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            c =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            d = null
          'string' == typeof e
            ? (d =
                'svg' === e
                  ? l.VNodeFlags.ELEMENT_SVG
                  : l.VNodeFlags.ELEMENT_HTML)
            : e === t.Fragment
            ? (d = l.VNodeFlags.FRAGMENT)
            : e === t.Portal
            ? ((d = l.VNodeFlags.PORTAL), (e = n && n.target))
            : null !== e && 'object' === r(e)
            ? (d = e.functional
                ? l.VNodeFlags.COMPONENT_FUNCTIONAL
                : l.VNodeFlags.COMPONENT_STATEFUL_NORMAL)
            : 'function' == typeof e &&
              (d =
                e.prototype && e.prototype.render
                  ? l.VNodeFlags.COMPONENT_STATEFUL_NORMAL
                  : l.VNodeFlags.COMPONENT_FUNCTIONAL)
          var u = null
          if (Array.isArray(c)) {
            var s = c,
              f = s.length
            switch (f) {
              case 0:
                u = a.ChildrenFlags.NO_CHILDREN
                break
              case 1:
                ;(u = a.ChildrenFlags.SINGLE_VNODE), (c = c[0])
                break
              default:
                ;(u = a.ChildrenFlags.KEYED_VNODES), (c = i(c))
            }
          } else
            null == c
              ? (u = a.ChildrenFlags.NO_CHILDREN)
              : c._isVNode
              ? (u = a.ChildrenFlags.SINGLE_VNODE)
              : ((u = a.ChildrenFlags.SINGLE_VNODE), (c = o(c + '')))
          return {
            _isVNode: !0,
            tag: e,
            data: n,
            key: n && n.key ? n.key : null,
            children: c,
            flags: d,
            childFlags: u,
            el: null,
          }
        }),
        (t.createTextVNode = o),
        (t.normalizeVNodes = i)
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.VNodeFlags = void 0),
        (function(e) {
          ;(e[(e.ELEMENT_HTML = 1)] = 'ELEMENT_HTML'),
            (e[(e.ELEMENT_SVG = 2)] = 'ELEMENT_SVG'),
            (e[(e.COMPONENT_STATEFUL_NORMAL = 4)] =
              'COMPONENT_STATEFUL_NORMAL'),
            (e[(e.COMPONENT_STATEFUL_SHOULD_KEEP_ALIVE = 8)] =
              'COMPONENT_STATEFUL_SHOULD_KEEP_ALIVE'),
            (e[(e.COMPONENT_STATEFUL_KEPT_ALIVE = 16)] =
              'COMPONENT_STATEFUL_KEPT_ALIVE'),
            (e[(e.COMPONENT_FUNCTIONAL = 32)] = 'COMPONENT_FUNCTIONAL'),
            (e[(e.TEXT = 64)] = 'TEXT'),
            (e[(e.FRAGMENT = 128)] = 'FRAGMENT'),
            (e[(e.PORTAL = 256)] = 'PORTAL'),
            (e[(e.ELEMENT = 3)] = 'ELEMENT'),
            (e[(e.COMPONENT_STATEFUL = 28)] = 'COMPONENT_STATEFUL'),
            (e[(e.COMPONENT = 60)] = 'COMPONENT')
        })(t.VNodeFlags || (t.VNodeFlags = {}))
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ChildrenFlags = void 0),
        (function(e) {
          ;(e[(e.UNKNOWN_CHILDREN = 0)] = 'UNKNOWN_CHILDREN'),
            (e[(e.NO_CHILDREN = 1)] = 'NO_CHILDREN'),
            (e[(e.SINGLE_VNODE = 2)] = 'SINGLE_VNODE'),
            (e[(e.KEYED_VNODES = 4)] = 'KEYED_VNODES'),
            (e[(e.NONE_KEYED_VNODES = 8)] = 'NONE_KEYED_VNODES'),
            (e[(e.MULTIPLE_VNODES = 12)] = 'MULTIPLE_VNODES')
        })(t.ChildrenFlags || (t.ChildrenFlags = {}))
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.render = t.Fragment = t.Portal = t.h = void 0)
      var r = n(0)
      Object.defineProperty(t, 'h', {
        enumerable: !0,
        get: function() {
          return r.h
        },
      }),
        Object.defineProperty(t, 'Portal', {
          enumerable: !0,
          get: function() {
            return r.Portal
          },
        }),
        Object.defineProperty(t, 'Fragment', {
          enumerable: !0,
          get: function() {
            return r.Fragment
          },
        })
      var l = n(4)
      Object.defineProperty(t, 'render', {
        enumerable: !0,
        get: function() {
          return l.render
        },
      }),
        (t.default = {
          h: r.h,
          Portal: r.Portal,
          Fragment: r.Fragment,
          render: l.render,
        })
    },
    function(e, t, n) {
      'use strict'
      function r(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function(e, t) {
              if (!e) return
              if ('string' == typeof e) return l(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return l(e, t)
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n)
            var r = 0,
              a = function() {}
            return {
              s: a,
              n: function() {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] }
              },
              e: function(e) {
                throw e
              },
              f: a,
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        }
        var o,
          i = !0,
          c = !1
        return {
          s: function() {
            n = e[Symbol.iterator]()
          },
          n: function() {
            var e = n.next()
            return (i = e.done), e
          },
          e: function(e) {
            ;(c = !0), (o = e)
          },
          f: function() {
            try {
              i || null == n.return || n.return()
            } finally {
              if (c) throw o
            }
          },
        }
      }
      function l(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.patch = t.patchPortal = t.patchFragment = t.patchText = t.patchComponent = t.patchElement = t.patchChildren = t.patchData = t.mount = t.mountPortal = t.mountFragment = t.mountText = t.mountComponent = t.mountFunctionalComponent = t.mountStatefulComponent = t.mountElement = t.replaceVNode = t.normalizeClass = t.render = void 0)
      var a = n(1),
        o = n(2),
        i = n(5),
        c = n(6),
        d = n(0)
      function u(e) {
        var t = ''
        return (
          i.isString(e) && (t = e),
          i.isArray(e) &&
            (function() {
              for (var n = 0; n < e.length; n++) t += u(e[n]) + ' '
            })(),
          i.isObject(e) &&
            (function() {
              for (var n in e) e[n] && (t += n + ' ')
            })(),
          t.trim()
        )
      }
      function s(e, t, n) {
        if (
          (n.removeChild(e.el),
          e.flags & a.VNodeFlags.COMPONENT_STATEFUL_NORMAL)
        ) {
          var r = e.children
          r.unmounted && r.unmounted()
        }
        O(t, n)
      }
      function f(e, t, n, l) {
        var i = (n = n || e.flags & a.VNodeFlags.ELEMENT_SVG)
            ? document.createElementNS('http://www.w3.org/2000/svg', e.tag)
            : document.createElement(e.tag),
          d = e.data
        d &&
          (function() {
            for (var e in d)
              switch (e) {
                case 'style':
                  for (var t in d.style) d.style[t] && (i.style[t] = d.style[t])
                  break
                case 'class':
                  n ? i.setAttribute('class', u(d[e])) : (i.className = u(d[e]))
                  break
                default:
                  'o' === e.charAt(0) && 'n' === e.charAt(1)
                    ? i.addEventListener(e.slice(2), d[e])
                    : c.domPropsRE.test(e)
                    ? (i[e] = d[e])
                    : i.setAttribute(e, d[e])
              }
          })()
        var s = e.childFlags,
          f = e.children
        !(function() {
          if (s !== o.ChildrenFlags.NO_CHILDREN)
            if (s & o.ChildrenFlags.SINGLE_VNODE) O(f, i, n)
            else if (s & o.ChildrenFlags.MULTIPLE_VNODES) {
              var e,
                t = r(f)
              try {
                for (t.s(); !(e = t.n()).done; ) {
                  O(e.value, i, n)
                }
              } catch (e) {
                t.e(e)
              } finally {
                t.f()
              }
            }
        })(),
          (e.el = i),
          l ? t.insertBefore(i, l) : t.appendChild(i)
      }
      function N(e, t, n) {
        var r = (e.children = new e.tag())
        ;(r.$props = e.data),
          (r._update = function() {
            if (r._mounted) {
              var l = r.$vnode
              L(l, (r.$vnode = r.render()), l.el.parentNode),
                (r.$el = e.el = r.$vnode.el)
            } else
              (r.$vnode = r.render()),
                O(r.$vnode, t, n),
                (r._mounted = !0),
                (r.$el = e.el = r.$vnode.el),
                r.mounted && r.mounted()
          }),
          r._update()
      }
      function E(e, t, n) {
        ;(e.handle = {
          prev: null,
          next: e,
          container: t,
          update: function() {
            if (e.handle.prev) {
              var r = e.handle.prev,
                l = e.handle.next,
                a = r.children,
                o = e.data
              L(a, (l.children = l.tag(o)), e.handle.container)
            } else {
              var i = e.data,
                c = (e.children = e.tag(i))
              O(c, t, n), (e.el = c.el)
            }
          },
        }),
          e.handle.update()
      }
      function h(e, t, n) {
        e.flags & a.VNodeFlags.COMPONENT_STATEFUL ? N(e, t, n) : E(e, t, n)
      }
      function g(e, t) {
        var n = document.createTextNode(e.children)
        ;(e.el = n), t.appendChild(n)
      }
      function v(e, t, n) {
        var l = e.children
        switch (e.childFlags) {
          case o.ChildrenFlags.NO_CHILDREN:
            var a = d.createTextVNode('')
            g(a, t), (e.el = a.el)
            break
          case o.ChildrenFlags.SINGLE_VNODE:
            O(l, t, n), (e.el = l.el)
            break
          default:
            var i,
              c = r(l)
            try {
              for (c.s(); !(i = c.n()).done; ) {
                O(i.value, t, n)
              }
            } catch (e) {
              c.e(e)
            } finally {
              c.f()
            }
            e.el = l[0].el
        }
      }
      function p(e, t, n) {
        var l = e.tag,
          a = e.children,
          c = e.childFlags,
          u = i.isString(l) ? document.querySelector(l) : l
        if (c & o.ChildrenFlags.SINGLE_VNODE) O(a, u)
        else if (c & o.ChildrenFlags.MULTIPLE_VNODES) {
          var s,
            f = r(a)
          try {
            for (f.s(); !(s = f.n()).done; ) {
              O(s.value, u)
            }
          } catch (e) {
            f.e(e)
          } finally {
            f.f()
          }
        }
        var N = d.createTextVNode('')
        g(N, t), (e.el = N.el)
      }
      function O(e, t, n, r) {
        var l = e.flags
        l & a.VNodeFlags.ELEMENT
          ? f(e, t, n, r)
          : l & a.VNodeFlags.COMPONENT
          ? h(e, t, n)
          : l & a.VNodeFlags.TEXT
          ? g(e, t)
          : l & a.VNodeFlags.FRAGMENT
          ? v(e, t, n)
          : l & a.VNodeFlags.PORTAL && p(e, t)
      }
      function m(e, t, n, r) {
        switch (t) {
          case 'style':
            for (var l in r) e.style[l] = r[l]
            for (var a in n) r.hasOwnProperty(a) || (e.style[a] = '')
            break
          case 'class':
            e.className = r
            break
          default:
            'o' === t.charAt(0) && 'n' === t.charAt(1)
              ? (n && e.removeEventListener(t.slice(2), n),
                r && e.addEventListener(t.slice(2), r))
              : c.domPropsRE.test(t)
              ? (e[t] = r)
              : e.setAttribute(t, r)
        }
      }
      function y(e, t, n, l, a) {
        switch (e) {
          case o.ChildrenFlags.SINGLE_VNODE:
            switch (t) {
              case o.ChildrenFlags.SINGLE_VNODE:
                L(n, l, a)
                break
              case o.ChildrenFlags.NO_CHILDREN:
                a.removeChild(n.el)
                break
              default:
                a.removeChild(n.el)
                var c,
                  d = r(l)
                try {
                  for (d.s(); !(c = d.n()).done; ) {
                    O(c.value, a)
                  }
                } catch (e) {
                  d.e(e)
                } finally {
                  d.f()
                }
            }
            break
          case o.ChildrenFlags.NO_CHILDREN:
            switch (t) {
              case o.ChildrenFlags.SINGLE_VNODE:
                O(l, a)
                break
              case o.ChildrenFlags.NO_CHILDREN:
                break
              default:
                var u,
                  s = r(l)
                try {
                  for (s.s(); !(u = s.n()).done; ) {
                    O(u.value, a)
                  }
                } catch (e) {
                  s.e(e)
                } finally {
                  s.f()
                }
            }
            break
          default:
            switch (t) {
              case o.ChildrenFlags.SINGLE_VNODE:
                var f,
                  N = r(n)
                try {
                  for (N.s(); !(f = N.n()).done; ) {
                    var E = f.value
                    a.removeChild(E.el)
                  }
                } catch (e) {
                  N.e(e)
                } finally {
                  N.f()
                }
                O(l, a)
                break
              case o.ChildrenFlags.NO_CHILDREN:
                var h,
                  g = r(n)
                try {
                  for (g.s(); !(h = g.n()).done; ) {
                    var v = h.value
                    a.removeChild(v.el)
                  }
                } catch (e) {
                  g.e(e)
                } finally {
                  g.f()
                }
                break
              default:
                var p = 0,
                  m = n[p],
                  y = l[p],
                  F = n.length - 1,
                  _ = l.length - 1
                ;(m = n[F]), (y = l[_])
                e: {
                  for (; m.key === y.key; ) {
                    if ((L(m, y, a), ++p > F || p > _)) break e
                    ;(m = n[p]), (y = l[p])
                  }
                  for (; m.key === y.key; ) {
                    if ((L(m, y, a), _--, p > --F || p > _)) break e
                    ;(m = n[F]), (y = l[_])
                  }
                }
                if (p > F && p <= _)
                  for (
                    var T = _ + 1, b = T < l.length ? l[T].el : null;
                    p <= _;

                  )
                    O(l[p++], a, !1, b)
                else if (p > _) for (; p <= F; ) a.removeChild(n[p++].el)
                else {
                  for (var C = _ - p + 1, S = [], P = 0; P < C; P++) S.push(-1)
                  for (
                    var V = p, M = p, A = !1, D = 0, I = {}, j = M;
                    j <= _;
                    j++
                  )
                    I[l[j].key] = j
                  for (var R = 0, k = V; k <= F; k++)
                    if (((m = n[k]), R < C)) {
                      var U = I[m.key]
                      void 0 !== U
                        ? (L(m, (y = l[U]), a),
                          R++,
                          (S[U - M] = k),
                          U < D ? (A = !0) : (D = U))
                        : a.removeChild(m.el)
                    } else a.removeChild(m.el)
                  if (A)
                    for (
                      var w = i.lis(S), G = w.length - 1, x = C - 1;
                      x >= 0;
                      x--
                    )
                      if (-1 === S[x]) {
                        var H = x + M,
                          $ = H + 1
                        O(l[H], a, !1, $ < l.length ? l[$].el : null)
                      } else if (x !== w[G]) {
                        var K = x + M,
                          X = l[K],
                          Y = K + 1
                        a.insertBefore(X.el, Y < l.length ? l[Y].el : null)
                      } else G--
                }
            }
        }
      }
      function F(e, t, n) {
        if (e.tag === t.tag) {
          var r = (t.el = e.el),
            l = e.data,
            a = t.data
          a &&
            (function() {
              for (var e in a) {
                var t = l[e],
                  n = a[e]
                m(r, e, t, n)
              }
            })(),
            l &&
              (function() {
                for (var e in l) {
                  var t = l[e]
                  t && !a.hasOwnProperty(e) && m(r, e, t, null)
                }
              })(),
            y(e.childFlags, t.childFlags, e.children, t.children, r)
        } else s(e, t, n)
      }
      function _(e, t, n) {
        if (t.tag !== e.tag) s(e, t, n)
        else if (t.flags & a.VNodeFlags.COMPONENT_STATEFUL_NORMAL) {
          var r = (t.children = e.children)
          ;(r.$props = t.data), r._update()
        } else {
          var l = (t.handle = e.handle)
          ;(l.prev = e), (l.next = t), (l.container = n), l.update()
        }
      }
      function T(e, t) {
        var n = (t.el = e.el)
        t.children !== e.children && (n.nodeValue = t.children)
      }
      function b(e, t, n) {
        switch (
          (y(e.childFlags, t.childFlags, e.children, t.children, n),
          t.childFlags)
        ) {
          case o.ChildrenFlags.NO_CHILDREN:
            t.el = e.el
            break
          case o.ChildrenFlags.SINGLE_VNODE:
            t.el = e.children.el
            break
          default:
            t.el = e.children[0].el
        }
      }
      function C(e, t) {
        if (
          (y(e.childFlags, t.childFlags, e.children, t.children, e.tag),
          (t.el = e.el),
          t.tag !== e.tag)
        ) {
          var n =
            'string' == typeof t.tag ? document.querySelector(t.tag) : t.tag
          switch (t.childFlags) {
            case o.ChildrenFlags.SINGLE_VNODE:
              n.appendChild(t.children.el)
              break
            case o.ChildrenFlags.NO_CHILDREN:
              break
            default:
              for (var r = 0; r < t.children.length; r++)
                n.appendChild(t.children[r].el)
          }
        }
      }
      function L(e, t, n) {
        var r = t.flags
        e.flags !== r
          ? s(e, t, n)
          : r & a.VNodeFlags.ELEMENT
          ? F(e, t, n)
          : r & a.VNodeFlags.COMPONENT
          ? _(e, t, n)
          : r & a.VNodeFlags.TEXT
          ? T(e, t)
          : r & a.VNodeFlags.FRAGMENT
          ? b(e, t, n)
          : r & a.VNodeFlags.PORTAL && C(e, t)
      }
      ;(t.render = function(e, t) {
        var n = t.vnode
        null == n
          ? e && (O(e, t), (t.vnode = e))
          : e
          ? (L(n, e, t), (t.vnode = e))
          : (t.removeChild(n.el), (t.vnode = null))
      }),
        (t.normalizeClass = u),
        (t.replaceVNode = s),
        (t.mountElement = f),
        (t.mountStatefulComponent = N),
        (t.mountFunctionalComponent = E),
        (t.mountComponent = h),
        (t.mountText = g),
        (t.mountFragment = v),
        (t.mountPortal = p),
        (t.mount = O),
        (t.patchData = m),
        (t.patchChildren = y),
        (t.patchElement = F),
        (t.patchComponent = _),
        (t.patchText = T),
        (t.patchFragment = b),
        (t.patchPortal = C),
        (t.patch = L)
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.lis = t.isUndefined = t.isNull = t.isNumber = t.isString = t.isFunction = t.isObject = t.isArray = void 0),
        (t.isObject = function(e) {
          return '[object Object]' === Object.prototype.toString.call(e)
        }),
        (t.isArray = function(e) {
          return '[object Array]' === Object.prototype.toString.call(e)
        }),
        (t.isFunction = function(e) {
          return '[object Function]' === Object.prototype.toString.call(e)
        }),
        (t.isString = function(e) {
          return '[object String]' === Object.prototype.toString.call(e)
        }),
        (t.isNumber = function(e) {
          return '[object Number]' === Object.prototype.toString.call(e)
        }),
        (t.isUndefined = function(e) {
          return '[object Undefined]' === Object.prototype.toString.call(e)
        }),
        (t.isNull = function(e) {
          return '[object Null]' === Object.prototype.toString.call(e)
        }),
        (t.lis = function(e) {
          for (var t = {}, n = e.length, r = 0; r < n; r++) t[e[r]] = 1
          for (var l = n - 1, a = e[l], o = e[l - 1]; void 0 !== o; ) {
            for (var i = l; i < n; ) {
              if (o < (a = e[i])) {
                var c = t[a] + 1
                t[o] = 1 !== t[o] && t[o] > c ? t[o] : c
              }
              i++
            }
            ;(a = e[--l]), (o = e[l - 1])
          }
          var d = []
          for (l = 1; --n >= 0; ) {
            t[e[n]] === l && (l++, d.unshift(n))
          }
          return d
        })
    },
    function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.domPropsRE = void 0),
        (t.domPropsRE = /\[A-Z]|^(?:value|checked|selected|muted)$/)
    },
  ])
})
