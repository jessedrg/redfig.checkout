!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).AdyenCheckout = t());
})(this, function () {
  "use strict";
  var e =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {};
  function t(e) {
    var t = { exports: {} };
    return e(t, t.exports), t.exports;
  }
  var a = function (e) {
      return e && e.Math == Math && e;
    },
    r =
      a("object" == typeof globalThis && globalThis) ||
      a("object" == typeof window && window) ||
      a("object" == typeof self && self) ||
      a("object" == typeof e && e) ||
      (function () {
        return this;
      })() ||
      Function("return this")(),
    n = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    },
    i = !n(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    }),
    o = {}.propertyIsEnumerable,
    l = Object.getOwnPropertyDescriptor,
    s = {
      f:
        l && !o.call({ 1: 2 }, 1)
          ? function (e) {
              var t = l(this, e);
              return !!t && t.enumerable;
            }
          : o,
    },
    d = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    },
    c = {}.toString,
    u = function (e) {
      return c.call(e).slice(8, -1);
    },
    p = "".split,
    m = n(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" == u(e) ? p.call(e, "") : Object(e);
        }
      : Object,
    h = function (e) {
      if (null == e) throw TypeError("Can't call method on " + e);
      return e;
    },
    f = function (e) {
      return m(h(e));
    },
    y = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    },
    b = function (e, t) {
      if (!y(e)) return e;
      var a, r;
      if (t && "function" == typeof (a = e.toString) && !y((r = a.call(e))))
        return r;
      if ("function" == typeof (a = e.valueOf) && !y((r = a.call(e)))) return r;
      if (!t && "function" == typeof (a = e.toString) && !y((r = a.call(e))))
        return r;
      throw TypeError("Can't convert object to primitive value");
    },
    v = {}.hasOwnProperty,
    g = function (e, t) {
      return v.call(e, t);
    },
    k = r.document,
    C = y(k) && y(k.createElement),
    _ = function (e) {
      return C ? k.createElement(e) : {};
    },
    N =
      !i &&
      !n(function () {
        return (
          7 !=
          Object.defineProperty(_("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    w = Object.getOwnPropertyDescriptor,
    P = {
      f: i
        ? w
        : function (e, t) {
            if (((e = f(e)), (t = b(t, !0)), N))
              try {
                return w(e, t);
              } catch (e) {}
            if (g(e, t)) return d(!s.f.call(e, t), e[t]);
          },
    },
    F = function (e) {
      if (!y(e)) throw TypeError(String(e) + " is not an object");
      return e;
    },
    D = Object.defineProperty,
    S = {
      f: i
        ? D
        : function (e, t, a) {
            if ((F(e), (t = b(t, !0)), F(a), N))
              try {
                return D(e, t, a);
              } catch (e) {}
            if ("get" in a || "set" in a)
              throw TypeError("Accessors not supported");
            return "value" in a && (e[t] = a.value), e;
          },
    },
    A = i
      ? function (e, t, a) {
          return S.f(e, t, d(1, a));
        }
      : function (e, t, a) {
          return (e[t] = a), e;
        },
    x = function (e, t) {
      try {
        A(r, e, t);
      } catch (a) {
        r[e] = t;
      }
      return t;
    },
    B = "__core-js_shared__",
    z = r[B] || x(B, {}),
    T = Function.toString;
  "function" != typeof z.inspectSource &&
    (z.inspectSource = function (e) {
      return T.call(e);
    });
  var M,
    I,
    j,
    O = z.inspectSource,
    E = r.WeakMap,
    R = "function" == typeof E && /native code/.test(O(E)),
    L = t(function (e) {
      (e.exports = function (e, t) {
        return z[e] || (z[e] = void 0 !== t ? t : {});
      })("versions", []).push({
        version: "3.9.1",
        mode: "global",
        copyright: "\xa9 2021 Denis Pushkarev (zloirock.ru)",
      });
    }),
    V = 0,
    U = Math.random(),
    K = function (e) {
      return (
        "Symbol(" +
        String(void 0 === e ? "" : e) +
        ")_" +
        (++V + U).toString(36)
      );
    },
    H = L("keys"),
    q = function (e) {
      return H[e] || (H[e] = K(e));
    },
    G = {},
    Y = r.WeakMap;
  if (R) {
    var W = z.state || (z.state = new Y()),
      J = W.get,
      Z = W.has,
      Q = W.set;
    (M = function (e, t) {
      return (t.facade = e), Q.call(W, e, t), t;
    }),
      (I = function (e) {
        return J.call(W, e) || {};
      }),
      (j = function (e) {
        return Z.call(W, e);
      });
  } else {
    var $ = q("state");
    (G[$] = !0),
      (M = function (e, t) {
        return (t.facade = e), A(e, $, t), t;
      }),
      (I = function (e) {
        return g(e, $) ? e[$] : {};
      }),
      (j = function (e) {
        return g(e, $);
      });
  }
  var X = {
      set: M,
      get: I,
      has: j,
      enforce: function (e) {
        return j(e) ? I(e) : M(e, {});
      },
      getterFor: function (e) {
        return function (t) {
          var a;
          if (!y(t) || (a = I(t)).type !== e)
            throw TypeError("Incompatible receiver, " + e + " required");
          return a;
        };
      },
    },
    ee = t(function (e) {
      var t = X.get,
        a = X.enforce,
        n = String(String).split("String");
      (e.exports = function (e, t, i, o) {
        var l,
          s = !!o && !!o.unsafe,
          d = !!o && !!o.enumerable,
          c = !!o && !!o.noTargetGet;
        "function" == typeof i &&
          ("string" != typeof t || g(i, "name") || A(i, "name", t),
          (l = a(i)).source ||
            (l.source = n.join("string" == typeof t ? t : ""))),
          e !== r
            ? (s ? !c && e[t] && (d = !0) : delete e[t],
              d ? (e[t] = i) : A(e, t, i))
            : d
            ? (e[t] = i)
            : x(t, i);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && t(this).source) || O(this);
      });
    }),
    te = r,
    ae = function (e) {
      return "function" == typeof e ? e : void 0;
    },
    re = function (e, t) {
      return arguments.length < 2
        ? ae(te[e]) || ae(r[e])
        : (te[e] && te[e][t]) || (r[e] && r[e][t]);
    },
    ne = Math.ceil,
    ie = Math.floor,
    oe = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? ie : ne)(e);
    },
    le = Math.min,
    se = function (e) {
      return e > 0 ? le(oe(e), 9007199254740991) : 0;
    },
    de = Math.max,
    ce = Math.min,
    ue = function (e) {
      return function (t, a, r) {
        var n,
          i = f(t),
          o = se(i.length),
          l = (function (e, t) {
            var a = oe(e);
            return a < 0 ? de(a + t, 0) : ce(a, t);
          })(r, o);
        if (e && a != a) {
          for (; o > l; ) if ((n = i[l++]) != n) return !0;
        } else
          for (; o > l; l++)
            if ((e || l in i) && i[l] === a) return e || l || 0;
        return !e && -1;
      };
    },
    pe = { includes: ue(!0), indexOf: ue(!1) },
    me = pe.indexOf,
    he = function (e, t) {
      var a,
        r = f(e),
        n = 0,
        i = [];
      for (a in r) !g(G, a) && g(r, a) && i.push(a);
      for (; t.length > n; ) g(r, (a = t[n++])) && (~me(i, a) || i.push(a));
      return i;
    },
    fe = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ],
    ye = fe.concat("length", "prototype"),
    be = {
      f:
        Object.getOwnPropertyNames ||
        function (e) {
          return he(e, ye);
        },
    },
    ve = { f: Object.getOwnPropertySymbols },
    ge =
      re("Reflect", "ownKeys") ||
      function (e) {
        var t = be.f(F(e)),
          a = ve.f;
        return a ? t.concat(a(e)) : t;
      },
    ke = function (e, t) {
      for (var a = ge(t), r = S.f, n = P.f, i = 0; i < a.length; i++) {
        var o = a[i];
        g(e, o) || r(e, o, n(t, o));
      }
    },
    Ce = /#|\.prototype\./,
    _e = function (e, t) {
      var a = we[Ne(e)];
      return a == Fe || (a != Pe && ("function" == typeof t ? n(t) : !!t));
    },
    Ne = (_e.normalize = function (e) {
      return String(e).replace(Ce, ".").toLowerCase();
    }),
    we = (_e.data = {}),
    Pe = (_e.NATIVE = "N"),
    Fe = (_e.POLYFILL = "P"),
    De = _e,
    Se = P.f,
    Ae = function (e, t) {
      var a,
        n,
        i,
        o,
        l,
        s = e.target,
        d = e.global,
        c = e.stat;
      if ((a = d ? r : c ? r[s] || x(s, {}) : (r[s] || {}).prototype))
        for (n in t) {
          if (
            ((o = t[n]),
            (i = e.noTargetGet ? (l = Se(a, n)) && l.value : a[n]),
            !De(d ? n : s + (c ? "." : "#") + n, e.forced) && void 0 !== i)
          ) {
            if (typeof o == typeof i) continue;
            ke(o, i);
          }
          (e.sham || (i && i.sham)) && A(o, "sham", !0), ee(a, n, o, e);
        }
    },
    xe =
      Object.keys ||
      function (e) {
        return he(e, fe);
      },
    Be = function (e) {
      return Object(h(e));
    },
    ze = Object.assign,
    Te = Object.defineProperty,
    Me =
      !ze ||
      n(function () {
        if (
          i &&
          1 !==
            ze(
              { b: 1 },
              ze(
                Te({}, "a", {
                  enumerable: !0,
                  get: function () {
                    Te(this, "b", { value: 3, enumerable: !1 });
                  },
                }),
                { b: 2 }
              )
            ).b
        )
          return !0;
        var e = {},
          t = {},
          a = Symbol(),
          r = "abcdefghijklmnopqrst";
        return (
          (e[a] = 7),
          r.split("").forEach(function (e) {
            t[e] = e;
          }),
          7 != ze({}, e)[a] || xe(ze({}, t)).join("") != r
        );
      })
        ? function (e, t) {
            for (
              var a = Be(e), r = arguments.length, n = 1, o = ve.f, l = s.f;
              r > n;

            )
              for (
                var d,
                  c = m(arguments[n++]),
                  u = o ? xe(c).concat(o(c)) : xe(c),
                  p = u.length,
                  h = 0;
                p > h;

              )
                (d = u[h++]), (i && !l.call(c, d)) || (a[d] = c[d]);
            return a;
          }
        : ze;
  Ae(
    { target: "Object", stat: !0, forced: Object.assign !== Me },
    { assign: Me }
  ),
    te.Object.assign,
    Ae(
      {
        target: "Object",
        stat: !0,
        forced: n(function () {
          xe(1);
        }),
      },
      {
        keys: function (e) {
          return xe(Be(e));
        },
      }
    ),
    te.Object.keys;
  var Ie,
    je,
    Oe = "process" == u(r.process),
    Ee = re("navigator", "userAgent") || "",
    Re = r.process,
    Le = Re && Re.versions,
    Ve = Le && Le.v8;
  Ve
    ? (je = (Ie = Ve.split("."))[0] + Ie[1])
    : Ee &&
      (!(Ie = Ee.match(/Edge\/(\d+)/)) || Ie[1] >= 74) &&
      (Ie = Ee.match(/Chrome\/(\d+)/)) &&
      (je = Ie[1]);
  var Ue,
    Ke = je && +je,
    He =
      !!Object.getOwnPropertySymbols &&
      !n(function () {
        return !Symbol.sham && (Oe ? 38 === Ke : Ke > 37 && Ke < 41);
      }),
    qe = He && !Symbol.sham && "symbol" == typeof Symbol.iterator,
    Ge = L("wks"),
    Ye = r.Symbol,
    We = qe ? Ye : (Ye && Ye.withoutSetter) || K,
    Je = function (e) {
      return (
        (g(Ge, e) && (He || "string" == typeof Ge[e])) ||
          (He && g(Ye, e) ? (Ge[e] = Ye[e]) : (Ge[e] = We("Symbol." + e))),
        Ge[e]
      );
    },
    Ze = i
      ? Object.defineProperties
      : function (e, t) {
          F(e);
          for (var a, r = xe(t), n = r.length, i = 0; n > i; )
            S.f(e, (a = r[i++]), t[a]);
          return e;
        },
    Qe = re("document", "documentElement"),
    $e = q("IE_PROTO"),
    Xe = function () {},
    et = function (e) {
      return "<script>" + e + "</" + "script>";
    },
    tt = function () {
      try {
        Ue = document.domain && new ActiveXObject("htmlfile");
      } catch (e) {}
      var e, t;
      tt = Ue
        ? (function (e) {
            e.write(et("")), e.close();
            var t = e.parentWindow.Object;
            return (e = null), t;
          })(Ue)
        : (((t = _("iframe")).style.display = "none"),
          Qe.appendChild(t),
          (t.src = String("javascript:")),
          (e = t.contentWindow.document).open(),
          e.write(et("document.F=Object")),
          e.close(),
          e.F);
      for (var a = fe.length; a--; ) delete tt.prototype[fe[a]];
      return tt();
    };
  G[$e] = !0;
  var at =
      Object.create ||
      function (e, t) {
        var a;
        return (
          null !== e
            ? ((Xe.prototype = F(e)),
              (a = new Xe()),
              (Xe.prototype = null),
              (a[$e] = e))
            : (a = tt()),
          void 0 === t ? a : Ze(a, t)
        );
      },
    rt = Je("unscopables"),
    nt = Array.prototype;
  null == nt[rt] && S.f(nt, rt, { configurable: !0, value: at(null) });
  var it = function (e) {
      nt[rt][e] = !0;
    },
    ot = pe.includes;
  Ae(
    { target: "Array", proto: !0 },
    {
      includes: function (e) {
        return ot(this, e, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  ),
    it("includes");
  var lt = function (e, t, a) {
      if (
        ((function (e) {
          if ("function" != typeof e)
            throw TypeError(String(e) + " is not a function");
        })(e),
        void 0 === t)
      )
        return e;
      switch (a) {
        case 0:
          return function () {
            return e.call(t);
          };
        case 1:
          return function (a) {
            return e.call(t, a);
          };
        case 2:
          return function (a, r) {
            return e.call(t, a, r);
          };
        case 3:
          return function (a, r, n) {
            return e.call(t, a, r, n);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    },
    st = Function.call,
    dt = function (e, t, a) {
      return lt(st, r[e].prototype[t], a);
    };
  dt("Array", "includes");
  var ct =
      Array.isArray ||
      function (e) {
        return "Array" == u(e);
      },
    ut = Je("species"),
    pt = function (e, t) {
      var a;
      return (
        ct(e) &&
          ("function" != typeof (a = e.constructor) ||
          (a !== Array && !ct(a.prototype))
            ? y(a) && null === (a = a[ut]) && (a = void 0)
            : (a = void 0)),
        new (void 0 === a ? Array : a)(0 === t ? 0 : t)
      );
    },
    mt = [].push,
    ht = function (e) {
      var t = 1 == e,
        a = 2 == e,
        r = 3 == e,
        n = 4 == e,
        i = 6 == e,
        o = 7 == e,
        l = 5 == e || i;
      return function (s, d, c, u) {
        for (
          var p,
            h,
            f = Be(s),
            y = m(f),
            b = lt(d, c, 3),
            v = se(y.length),
            g = 0,
            k = u || pt,
            C = t ? k(s, v) : a || o ? k(s, 0) : void 0;
          v > g;
          g++
        )
          if ((l || g in y) && ((h = b((p = y[g]), g, f)), e))
            if (t) C[g] = h;
            else if (h)
              switch (e) {
                case 3:
                  return !0;
                case 5:
                  return p;
                case 6:
                  return g;
                case 2:
                  mt.call(C, p);
              }
            else
              switch (e) {
                case 4:
                  return !1;
                case 7:
                  mt.call(C, p);
              }
        return i ? -1 : r || n ? n : C;
      };
    },
    ft = {
      forEach: ht(0),
      map: ht(1),
      filter: ht(2),
      some: ht(3),
      every: ht(4),
      find: ht(5),
      findIndex: ht(6),
      filterOut: ht(7),
    },
    yt = ft.find,
    bt = "find",
    vt = !0;
  bt in [] &&
    Array(1).find(function () {
      vt = !1;
    }),
    Ae(
      { target: "Array", proto: !0, forced: vt },
      {
        find: function (e) {
          return yt(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
    it(bt),
    dt("Array", "find");
  var gt = ft.findIndex,
    kt = "findIndex",
    Ct = !0;
  kt in [] &&
    Array(1).findIndex(function () {
      Ct = !1;
    }),
    Ae(
      { target: "Array", proto: !0, forced: Ct },
      {
        findIndex: function (e) {
          return gt(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
    it(kt),
    dt("Array", "findIndex"),
    [
      Element.prototype,
      CharacterData.prototype,
      DocumentType.prototype,
    ].forEach(function (e) {
      e.hasOwnProperty("remove") ||
        Object.defineProperty(e, "remove", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function () {
            null !== this.parentNode && this.parentNode.removeChild(this);
          },
        });
    }),
    "undefined" == typeof Promise &&
      (window.Promise = require("promise/lib/es6-extensions.js"));
  var _t = function (e, t) {
    return (_t =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var a in t)
          Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
      })(e, t);
  };
  function Nt(e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError(
        "Class extends value " + String(t) + " is not a constructor or null"
      );
    function a() {
      this.constructor = e;
    }
    _t(e, t),
      (e.prototype =
        null === t ? Object.create(t) : ((a.prototype = t.prototype), new a()));
  }
  var wt = function () {
    return (wt =
      Object.assign ||
      function (e) {
        for (var t, a = 1, r = arguments.length; a < r; a++)
          for (var n in (t = arguments[a]))
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
      }).apply(this, arguments);
  };
  function Pt(e, t) {
    var a = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (a[r] = e[r]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
      var n = 0;
      for (r = Object.getOwnPropertySymbols(e); n < r.length; n++)
        t.indexOf(r[n]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[n]) &&
          (a[r[n]] = e[r[n]]);
    }
    return a;
  }
  function Ft(e, t, a, r) {
    return new (a || (a = Promise))(function (n, i) {
      function o(e) {
        try {
          s(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function l(e) {
        try {
          s(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function s(e) {
        var t;
        e.done
          ? n(e.value)
          : ((t = e.value),
            t instanceof a
              ? t
              : new a(function (e) {
                  e(t);
                })).then(o, l);
      }
      s((r = r.apply(e, t || [])).next());
    });
  }
  function Dt(e, t) {
    var a,
      r,
      n,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & n[0]) throw n[1];
          return n[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: l(0), throw: l(1), return: l(2) }),
      "function" == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function l(i) {
      return function (l) {
        return (function (i) {
          if (a) throw new TypeError("Generator is already executing.");
          for (; o; )
            try {
              if (
                ((a = 1),
                r &&
                  (n =
                    2 & i[0]
                      ? r.return
                      : i[0]
                      ? r.throw || ((n = r.return) && n.call(r), 0)
                      : r.next) &&
                  !(n = n.call(r, i[1])).done)
              )
                return n;
              switch (((r = 0), n && (i = [2 & i[0], n.value]), i[0])) {
                case 0:
                case 1:
                  n = i;
                  break;
                case 4:
                  return o.label++, { value: i[1], done: !1 };
                case 5:
                  o.label++, (r = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = o.ops.pop()), o.trys.pop();
                  continue;
                default:
                  if (
                    !((n = o.trys),
                    (n = n.length > 0 && n[n.length - 1]) ||
                      (6 !== i[0] && 2 !== i[0]))
                  ) {
                    o = 0;
                    continue;
                  }
                  if (3 === i[0] && (!n || (i[1] > n[0] && i[1] < n[3]))) {
                    o.label = i[1];
                    break;
                  }
                  if (6 === i[0] && o.label < n[1]) {
                    (o.label = n[1]), (n = i);
                    break;
                  }
                  if (n && o.label < n[2]) {
                    (o.label = n[2]), o.ops.push(i);
                    break;
                  }
                  n[2] && o.ops.pop(), o.trys.pop();
                  continue;
              }
              i = t.call(e, o);
            } catch (e) {
              (i = [6, e]), (r = 0);
            } finally {
              a = n = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, l]);
      };
    }
  }
  function St(e, t) {
    for (var a = 0, r = t.length, n = e.length; a < r; a++, n++) e[n] = t[a];
    return e;
  }
  var At = {
      payButton: "Pay",
      "payButton.redirecting": "Redirecting...",
      storeDetails: "Save for my next payment",
      "creditCard.holderName": "Name on card",
      "creditCard.holderName.placeholder": "J. Smith",
      "creditCard.holderName.invalid": "Invalid cardholder name",
      "creditCard.numberField.title": "Card number",
      "creditCard.numberField.placeholder": "1234 5678 9012 3456",
      "creditCard.expiryDateField.title": "Expiry date",
      "creditCard.expiryDateField.placeholder": "MM/YY",
      "creditCard.expiryDateField.month": "Month",
      "creditCard.expiryDateField.month.placeholder": "MM",
      "creditCard.expiryDateField.year.placeholder": "YY",
      "creditCard.expiryDateField.year": "Year",
      "creditCard.cvcField.title": "CVC / CVV",
      "creditCard.cvcField.placeholder": "123",
      "creditCard.storeDetailsButton": "Remember for next time",
      "creditCard.cvcField.placeholder.4digits": "4 digits",
      "creditCard.cvcField.placeholder.3digits": "3 digits",
      "creditCard.taxNumber.placeholder": "YYMMDD / 0123456789",
      installments: "Number of installments",
      installmentOption: "%{times}x %{partialValue}",
      installmentOptionMonths: "%{times} months",
      "installments.oneTime": "One time payment",
      "installments.installments": "Installments payment",
      "installments.revolving": "Revolving payment",
      "sepaDirectDebit.ibanField.invalid": "Invalid account number",
      "sepaDirectDebit.nameField.placeholder": "J. Smith",
      "sepa.ownerName": "Holder Name",
      "sepa.ibanNumber": "Account Number (IBAN)",
      "error.title": "Error",
      "error.subtitle.redirect": "Redirect failed",
      "error.subtitle.payment": "Payment failed",
      "error.subtitle.refused": "Payment refused",
      "error.message.unknown": "An unknown error occurred",
      "idealIssuer.selectField.title": "Bank",
      "idealIssuer.selectField.placeholder": "Select your bank",
      "creditCard.success": "Payment Successful",
      loading: "Loading\u2026",
      continue: "Continue",
      continueTo: "Continue to",
      "wechatpay.timetopay": "You have %@ to pay",
      "wechatpay.scanqrcode": "Scan QR code",
      personalDetails: "Personal details",
      companyDetails: "Company details",
      "companyDetails.name": "Company name",
      "companyDetails.registrationNumber": "Registration number",
      socialSecurityNumber: "Social security number",
      firstName: "First name",
      infix: "Prefix",
      lastName: "Last name",
      mobileNumber: "Mobile number",
      "mobileNumber.invalid": "Invalid mobile number",
      city: "City",
      postalCode: "Postal code",
      countryCode: "Country Code",
      telephoneNumber: "Telephone number",
      dateOfBirth: "Date of birth",
      shopperEmail: "Email address",
      gender: "Gender",
      male: "Male",
      female: "Female",
      billingAddress: "Billing address",
      street: "Street",
      stateOrProvince: "State or province",
      country: "Country",
      houseNumberOrName: "House number",
      separateDeliveryAddress: "Specify a separate delivery address",
      deliveryAddress: "Delivery Address",
      zipCode: "Zip code",
      apartmentSuite: "Apartment / Suite",
      provinceOrTerritory: "Province or Territory",
      cityTown: "City / Town",
      address: "Address",
      state: "State",
      "field.title.optional": "(optional)",
      "creditCard.cvcField.title.optional": "CVC / CVV (optional)",
      "issuerList.wallet.placeholder": "Select your wallet",
      privacyPolicy: "Privacy policy",
      "afterPay.agreement": "I agree with the %@ of AfterPay",
      paymentConditions: "payment conditions",
      openApp: "Open the app",
      "voucher.readInstructions": "Read instructions",
      "voucher.introduction":
        "Thank you for your purchase, please use the following coupon to complete your payment.",
      "voucher.expirationDate": "Expiration Date",
      "voucher.alternativeReference": "Alternative Reference",
      "dragonpay.voucher.non.bank.selectField.placeholder":
        "Select your provider",
      "dragonpay.voucher.bank.selectField.placeholder": "Select your bank",
      "voucher.paymentReferenceLabel": "Payment Reference",
      "voucher.surcharge": "Incl. %@ surcharge",
      "voucher.introduction.doku":
        "Thank you for your purchase, please use the following information to complete your payment.",
      "voucher.shopperName": "Shopper Name",
      "voucher.merchantName": "Merchant",
      "voucher.introduction.econtext":
        "Thank you for your purchase, please use the following information to complete your payment.",
      "voucher.telephoneNumber": "Phone Number",
      "voucher.shopperReference": "Shopper Reference",
      "voucher.collectionInstitutionNumber": "Collection Institution Number",
      "voucher.econtext.telephoneNumber.invalid":
        "Telephone number must be 10 or 11 digits long",
      "boletobancario.btnLabel": "Generate Boleto",
      "boleto.sendCopyToEmail": "Send a copy to my email",
      "button.copy": "Copy",
      "button.download": "Download",
      "boleto.socialSecurityNumber": "CPF/CNPJ",
      "creditCard.storedCard.description.ariaLabel": "Stored card ends in %@",
      "voucher.entity": "Entity",
      donateButton: "Donate",
      notNowButton: "Not now",
      thanksForYourSupport: "Thanks for your support!",
      preauthorizeWith: "Preauthorize with",
      confirmPreauthorization: "Confirm preauthorization",
      confirmPurchase: "Confirm purchase",
      applyGiftcard: "Redeem",
      giftcardBalance: "Gift card balance",
      deductedBalance: "Deducted balance",
      "creditCard.pin.title": "Pin",
      "creditCard.encryptedPassword.label": "First 2 digits of card password",
      "creditCard.encryptedPassword.placeholder": "12",
      "creditCard.encryptedPassword.invalid": "Invalid password",
      "creditCard.taxNumber.label":
        "Cardholder birthdate (YYMMDD) or Corporate registration number (10 digits)",
      "creditCard.taxNumber.labelAlt":
        "Corporate registration number (10 digits)",
      "creditCard.taxNumber.invalid":
        "Invalid Cardholder birthdate or Corporate registration number",
      "storedPaymentMethod.disable.button": "Remove",
      "storedPaymentMethod.disable.confirmation":
        "Remove stored payment method",
      "storedPaymentMethod.disable.confirmButton": "Yes, remove",
      "storedPaymentMethod.disable.cancelButton": "Cancel",
      "ach.bankAccount": "Bank account",
      "ach.accountHolderNameField.title": "Account holder name",
      "ach.accountHolderNameField.placeholder": "J. Smith",
      "ach.accountHolderNameField.invalid": "Invalid account holder name",
      "ach.accountNumberField.title": "Account number",
      "ach.accountNumberField.invalid": "Invalid account number",
      "ach.accountLocationField.title": "ABA routing number",
      "ach.accountLocationField.invalid": "Invalid ABA routing number",
      "select.state": "Select state",
      "select.stateOrProvince": "Select state or province",
      "select.provinceOrTerritory": "Select province or territory",
      "select.country": "Select country",
      "select.noOptionsFound": "No options found",
      "select.filter.placeholder": "Search...",
      "telephoneNumber.invalid": "Invalid telephone number",
      qrCodeOrApp: "or",
      "paypal.processingPayment": "Processing payment...",
      generateQRCode: "Generate QR code",
      "await.waitForConfirmation": "Waiting for confirmation",
      "mbway.confirmPayment": "Confirm your payment on the MB WAY app",
      "shopperEmail.invalid": "Invalid email address",
      "dateOfBirth.format": "DD/MM/YYYY",
      "dateOfBirth.invalid": "You must be at least 18 years old",
      "blik.confirmPayment": "Open your banking app to confirm the payment.",
      "blik.invalid": "Enter 6 numbers",
      "blik.code": "6-digit code",
      "blik.help": "Get the code from your banking app.",
      "swish.pendingMessage":
        "After you scan, the status can be pending for up to 10 minutes. Attempting to pay again within this time may result in multiple charges.",
      "error.va.gen.01": "Incomplete field",
      "error.va.gen.02": "Field not valid",
      "error.va.sf-cc-num.01": "Invalid card number",
      "error.va.sf-cc-num.03": "Unsupported card entered",
      "error.va.sf-cc-dat.01": "Card too old",
      "error.va.sf-cc-dat.02": "Date too far in the future",
      "error.giftcard.no-balance": "This gift card has zero balance",
      "error.giftcard.card-error":
        "In our records we have no gift card with this number",
      "error.giftcard.currency-error":
        "Gift cards are only valid in the currency they were issued in",
      "amazonpay.signout": "Sign out from Amazon",
      "amazonpay.changePaymentDetails": "Change payment details",
      "partialPayment.warning":
        "Select another payment method to pay the remaining",
      "partialPayment.remainingBalance": "Remaining balance will be %{amount}",
      "bankTransfer.beneficiary": "Beneficiary",
      "bankTransfer.iban": "IBAN",
      "bankTransfer.bic": "BIC",
      "bankTransfer.reference": "Reference",
      "bankTransfer.introduction":
        "Continue to create a new bank transfer payment. You can use the details in the following screen to finalize this payment.",
      "bankTransfer.instructions":
        "Thank you for your purchase, please use the following information to complete your payment.",
      "bacs.accountHolderName": "Bank account holder name",
      "bacs.accountHolderName.invalid": "Invalid bank account holder name",
      "bacs.accountNumber": "Bank account number",
      "bacs.accountNumber.invalid": "Invalid bank account number",
      "bacs.bankLocationId": "Sort code",
      "bacs.bankLocationId.invalid": "Invalid sort code",
      "bacs.consent.amount":
        "I agree that the above amount will be deducted from my bank account.",
      "bacs.consent.account":
        "I confirm the account is in my name and I am the only signatory required to authorise the Direct Debit on this account.",
      edit: "Edit",
      "bacs.confirm": "Confirm and pay",
      "bacs.result.introduction":
        "Download your Direct Debit Instruction (DDI / Mandate)",
      "download.pdf": "Download PDF",
      "creditCard.encryptedCardNumber.aria.iframeTitle":
        "Iframe for secured card number",
      "creditCard.encryptedCardNumber.aria.label": "Card number field",
      "creditCard.encryptedExpiryDate.aria.iframeTitle":
        "Iframe for secured card expiry date",
      "creditCard.encryptedExpiryDate.aria.label": "Expiry date field",
      "creditCard.encryptedExpiryMonth.aria.iframeTitle":
        "Iframe for secured card expiry month",
      "creditCard.encryptedExpiryMonth.aria.label": "Expiry month field",
      "creditCard.encryptedExpiryYear.aria.iframeTitle":
        "Iframe for secured card expiry year",
      "creditCard.encryptedExpiryYear.aria.label": "Expiry year field",
      "creditCard.encryptedSecurityCode.aria.iframeTitle":
        "Iframe for secured card security code",
      "creditCard.encryptedSecurityCode.aria.label": "Security code field",
      "giftcard.encryptedCardNumber.aria.iframeTitle":
        "Iframe for secured gift card number",
      "giftcard.encryptedCardNumber.aria.label": "Gift card number field",
      "giftcard.encryptedSecurityCode.aria.iframeTitle":
        "Iframe for secured gift card security code",
      "giftcard.encryptedSecurityCode.aria.label":
        "Gift card security code field",
      giftcardTransactionLimit:
        "Max. %{amount} allowed per transaction on this gift card",
      "ach.encryptedBankAccountNumber.aria.iframeTitle":
        "Iframe for secured bank account number",
      "ach.encryptedBankAccountNumber.aria.label": "Bank account field",
      "ach.encryptedBankLocationId.aria.iframeTitle":
        "Iframe for secured bank routing number",
      "ach.encryptedBankLocationId.aria.label": "Bank routing number field",
      "pix.instructions":
        "Open the app with the PIX registered key, choose Pay with PIX and scan the QR Code or copy and paste the code",
    },
    xt = Object.freeze({ __proto__: null, default: At }),
    Bt = "en-US",
    zt = At,
    Tt = {
      "cs-CZ": function () {
        return Promise.resolve().then(function () {
          return Hu;
        });
      },
      "da-DK": function () {
        return Promise.resolve().then(function () {
          return qu;
        });
      },
      "de-DE": function () {
        return Promise.resolve().then(function () {
          return Gu;
        });
      },
      "el-GR": function () {
        return Promise.resolve().then(function () {
          return Yu;
        });
      },
      "en-US": function () {
        return Promise.resolve().then(function () {
          return xt;
        });
      },
      "es-ES": function () {
        return Promise.resolve().then(function () {
          return Wu;
        });
      },
      "fi-FI": function () {
        return Promise.resolve().then(function () {
          return Ju;
        });
      },
      "fr-FR": function () {
        return Promise.resolve().then(function () {
          return Zu;
        });
      },
      "hr-HR": function () {
        return Promise.resolve().then(function () {
          return Qu;
        });
      },
      "hu-HU": function () {
        return Promise.resolve().then(function () {
          return $u;
        });
      },
      "it-IT": function () {
        return Promise.resolve().then(function () {
          return Xu;
        });
      },
      "ja-JP": function () {
        return Promise.resolve().then(function () {
          return ep;
        });
      },
      "ko-KR": function () {
        return Promise.resolve().then(function () {
          return tp;
        });
      },
      "nl-NL": function () {
        return Promise.resolve().then(function () {
          return ap;
        });
      },
      "no-NO": function () {
        return Promise.resolve().then(function () {
          return rp;
        });
      },
      "pl-PL": function () {
        return Promise.resolve().then(function () {
          return np;
        });
      },
      "pt-BR": function () {
        return Promise.resolve().then(function () {
          return ip;
        });
      },
      "ro-RO": function () {
        return Promise.resolve().then(function () {
          return op;
        });
      },
      "ru-RU": function () {
        return Promise.resolve().then(function () {
          return lp;
        });
      },
      "sk-SK": function () {
        return Promise.resolve().then(function () {
          return sp;
        });
      },
      "sl-SI": function () {
        return Promise.resolve().then(function () {
          return dp;
        });
      },
      "sv-SE": function () {
        return Promise.resolve().then(function () {
          return cp;
        });
      },
      "zh-CN": function () {
        return Promise.resolve().then(function () {
          return up;
        });
      },
      "zh-TW": function () {
        return Promise.resolve().then(function () {
          return pp;
        });
      },
    },
    Mt = function (e) {
      return e.toLowerCase().substring(0, 2);
    };
  function It(e) {
    var t = e.replace("_", "-");
    if (new RegExp("([a-z]{2})([-])([A-Z]{2})").test(t)) return t;
    var a = t.split("-"),
      r = a[0],
      n = a[1];
    if (!r || !n) return null;
    var i = [r.toLowerCase(), n.toUpperCase()].join("-");
    return 5 === i.length ? i : null;
  }
  function jt(e, t) {
    if ((void 0 === t && (t = []), !e || e.length < 1 || e.length > 5))
      return Bt;
    var a = It(e);
    return t.indexOf(a) > -1
      ? a
      : (function (e, t) {
          return (
            (e &&
              "string" == typeof e &&
              t.find(function (t) {
                return Mt(t) === Mt(e);
              })) ||
            null
          );
        })(a || e, t);
  }
  var Ot,
    Et,
    Rt,
    Lt,
    Vt,
    Ut = function (e, t) {
      return e.replace(/%{(\w+)}/g, function (e, a) {
        return t[a] || "";
      });
    },
    Kt = {
      IDR: 1,
      JPY: 1,
      KRW: 1,
      VND: 1,
      BYR: 1,
      CVE: 1,
      DJF: 1,
      GHC: 1,
      GNF: 1,
      KMF: 1,
      PYG: 1,
      RWF: 1,
      UGX: 1,
      VUV: 1,
      XAF: 1,
      XOF: 1,
      XPF: 1,
      MRO: 10,
      BHD: 1e3,
      IQD: 1e3,
      JOD: 1e3,
      KWD: 1e3,
      OMR: 1e3,
      LYD: 1e3,
      TND: 1e3,
    },
    Ht = function (e, t) {
      var a = (function (e) {
        return Kt[e] || 100;
      })(t);
      return parseInt(String(e), 10) / a;
    },
    qt = (function () {
      function e(e, t) {
        var a = this;
        void 0 === e && (e = Bt),
          void 0 === t && (t = {}),
          (this.translations = zt);
        var r = Object.keys(Tt);
        this.customTranslations = (function (e, t) {
          return (
            void 0 === e && (e = {}),
            Object.keys(e).reduce(function (a, r) {
              var n = It(r) || jt(r, t);
              return n && (a[n] = e[r]), a;
            }, {})
          );
        })(t, r);
        var n = Object.keys(this.customTranslations);
        (this.supportedLocales = St(St([], r), n).filter(function (e, t, a) {
          return a.indexOf(e) === t;
        })),
          (this.locale = It(e) || jt(e, this.supportedLocales) || Bt);
        var i = this.locale.split("-")[0];
        (this.languageCode = i),
          (this.loaded = (function (e, t) {
            return (
              void 0 === t && (t = {}),
              Ft(void 0, void 0, void 0, function () {
                var a, r;
                return Dt(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (a = jt(e, Object.keys(Tt)) || Bt), [4, Tt[a]()];
                    case 1:
                      return (
                        (r = n.sent()),
                        [2, wt(wt(wt({}, zt), r.default), !!t[e] && t[e])]
                      );
                  }
                });
              })
            );
          })(this.locale, this.customTranslations).then(function (e) {
            a.translations = e;
          }));
      }
      return (
        (e.prototype.get = function (e, t) {
          var a = (function (e, t, a) {
            void 0 === a && (a = { values: {}, count: 0 });
            var r = t + "__plural",
              n = function (e) {
                return t + "__" + e;
              };
            return Object.prototype.hasOwnProperty.call(e, n(a.count))
              ? Ut(e[n(a.count)], a.values)
              : Object.prototype.hasOwnProperty.call(e, r) && a.count > 1
              ? Ut(e[r], a.values)
              : Object.prototype.hasOwnProperty.call(e, t)
              ? Ut(e[t], a.values)
              : null;
          })(this.translations, e, t);
          return null !== a ? a : e;
        }),
        (e.prototype.amount = function (e, t, a) {
          return (function (e, t, a, r) {
            void 0 === r && (r = {});
            var n = e.toString(),
              i = Ht(n, a),
              o = t.replace("_", "-"),
              l = wt(
                { style: "currency", currency: a, currencyDisplay: "symbol" },
                r
              );
            try {
              return i.toLocaleString(o, l);
            } catch (e) {
              return n;
            }
          })(e, this.locale, t, a);
        }),
        (e.prototype.date = function (e, t) {
          void 0 === t && (t = {});
          var a = wt({ year: "numeric", month: "2-digit", day: "2-digit" }, t);
          return new Date(e).toLocaleDateString(this.locale, a);
        }),
        e
      );
    })(),
    Gt = {},
    Yt = [],
    Wt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function Jt(e, t) {
    for (var a in t) e[a] = t[a];
    return e;
  }
  function Zt(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function Qt(e, t, a) {
    var r,
      n,
      i,
      o = arguments,
      l = {};
    for (i in t)
      "key" == i ? (r = t[i]) : "ref" == i ? (n = t[i]) : (l[i] = t[i]);
    if (arguments.length > 3)
      for (a = [a], i = 3; i < arguments.length; i++) a.push(o[i]);
    if (
      (null != a && (l.children = a),
      "function" == typeof e && null != e.defaultProps)
    )
      for (i in e.defaultProps) void 0 === l[i] && (l[i] = e.defaultProps[i]);
    return $t(e, l, r, n, null);
  }
  function $t(e, t, a, r, n) {
    var i = {
      type: e,
      props: t,
      key: a,
      ref: r,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: null == n ? ++Ot.__v : n,
    };
    return null != Ot.vnode && Ot.vnode(i), i;
  }
  function Xt(e) {
    return e.children;
  }
  function ea(e, t) {
    (this.props = e), (this.context = t);
  }
  function ta(e, t) {
    if (null == t) return e.__ ? ta(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var a; t < e.__k.length; t++)
      if (null != (a = e.__k[t]) && null != a.__e) return a.__e;
    return "function" == typeof e.type ? ta(e) : null;
  }
  function aa(e) {
    var t, a;
    if (null != (e = e.__) && null != e.__c) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if (null != (a = e.__k[t]) && null != a.__e) {
          e.__e = e.__c.base = a.__e;
          break;
        }
      return aa(e);
    }
  }
  function ra(e) {
    ((!e.__d && (e.__d = !0) && Et.push(e) && !na.__r++) ||
      Lt !== Ot.debounceRendering) &&
      ((Lt = Ot.debounceRendering) || Rt)(na);
  }
  function na() {
    for (var e; (na.__r = Et.length); )
      (e = Et.sort(function (e, t) {
        return e.__v.__b - t.__v.__b;
      })),
        (Et = []),
        e.some(function (e) {
          var t, a, r, n, i, o;
          e.__d &&
            ((i = (n = (t = e).__v).__e),
            (o = t.__P) &&
              ((a = []),
              ((r = Jt({}, n)).__v = n.__v + 1),
              ma(
                o,
                n,
                r,
                t.__n,
                void 0 !== o.ownerSVGElement,
                null != n.__h ? [i] : null,
                a,
                null == i ? ta(n) : i,
                n.__h
              ),
              ha(a, n),
              n.__e != i && aa(n)));
        });
  }
  function ia(e, t, a, r, n, i, o, l, s, d) {
    var c,
      u,
      p,
      m,
      h,
      f,
      y,
      b = (r && r.__k) || Yt,
      v = b.length;
    for (a.__k = [], c = 0; c < t.length; c++)
      if (
        null !=
        (m = a.__k[c] =
          null == (m = t[c]) || "boolean" == typeof m
            ? null
            : "string" == typeof m ||
              "number" == typeof m ||
              "bigint" == typeof m
            ? $t(null, m, null, null, m)
            : Array.isArray(m)
            ? $t(Xt, { children: m }, null, null, null)
            : m.__b > 0
            ? $t(m.type, m.props, m.key, null, m.__v)
            : m)
      ) {
        if (
          ((m.__ = a),
          (m.__b = a.__b + 1),
          null === (p = b[c]) || (p && m.key == p.key && m.type === p.type))
        )
          b[c] = void 0;
        else
          for (u = 0; u < v; u++) {
            if ((p = b[u]) && m.key == p.key && m.type === p.type) {
              b[u] = void 0;
              break;
            }
            p = null;
          }
        ma(e, m, (p = p || Gt), n, i, o, l, s, d),
          (h = m.__e),
          (u = m.ref) &&
            p.ref != u &&
            (y || (y = []),
            p.ref && y.push(p.ref, null, m),
            y.push(u, m.__c || h, m)),
          null != h
            ? (null == f && (f = h),
              "function" == typeof m.type && null != m.__k && m.__k === p.__k
                ? (m.__d = s = oa(m, s, e))
                : (s = sa(e, m, p, b, h, s)),
              d || "option" !== a.type
                ? "function" == typeof a.type && (a.__d = s)
                : (e.value = ""))
            : s && p.__e == s && s.parentNode != e && (s = ta(p));
      }
    for (a.__e = f, c = v; c--; )
      null != b[c] &&
        ("function" == typeof a.type &&
          null != b[c].__e &&
          b[c].__e == a.__d &&
          (a.__d = ta(r, c + 1)),
        ya(b[c], b[c]));
    if (y) for (c = 0; c < y.length; c++) fa(y[c], y[++c], y[++c]);
  }
  function oa(e, t, a) {
    var r, n;
    for (r = 0; r < e.__k.length; r++)
      (n = e.__k[r]) &&
        ((n.__ = e),
        (t =
          "function" == typeof n.type
            ? oa(n, t, a)
            : sa(a, n, n, e.__k, n.__e, t)));
    return t;
  }
  function la(e, t) {
    return (
      (t = t || []),
      null == e ||
        "boolean" == typeof e ||
        (Array.isArray(e)
          ? e.some(function (e) {
              la(e, t);
            })
          : t.push(e)),
      t
    );
  }
  function sa(e, t, a, r, n, i) {
    var o, l, s;
    if (void 0 !== t.__d) (o = t.__d), (t.__d = void 0);
    else if (null == a || n != i || null == n.parentNode)
      e: if (null == i || i.parentNode !== e) e.appendChild(n), (o = null);
      else {
        for (l = i, s = 0; (l = l.nextSibling) && s < r.length; s += 2)
          if (l == n) break e;
        e.insertBefore(n, i), (o = i);
      }
    return void 0 !== o ? o : n.nextSibling;
  }
  function da(e, t, a) {
    "-" === t[0]
      ? e.setProperty(t, a)
      : (e[t] =
          null == a ? "" : "number" != typeof a || Wt.test(t) ? a : a + "px");
  }
  function ca(e, t, a, r, n) {
    var i;
    e: if ("style" === t)
      if ("string" == typeof a) e.style.cssText = a;
      else {
        if (("string" == typeof r && (e.style.cssText = r = ""), r))
          for (t in r) (a && t in a) || da(e.style, t, "");
        if (a) for (t in a) (r && a[t] === r[t]) || da(e.style, t, a[t]);
      }
    else if ("o" === t[0] && "n" === t[1])
      (i = t !== (t = t.replace(/Capture$/, ""))),
        (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + i] = a),
        a
          ? r || e.addEventListener(t, i ? pa : ua, i)
          : e.removeEventListener(t, i ? pa : ua, i);
    else if ("dangerouslySetInnerHTML" !== t) {
      if (n) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
      else if (
        "href" !== t &&
        "list" !== t &&
        "form" !== t &&
        "tabIndex" !== t &&
        "download" !== t &&
        t in e
      )
        try {
          e[t] = null == a ? "" : a;
          break e;
        } catch (e) {}
      "function" == typeof a ||
        (null != a && (!1 !== a || ("a" === t[0] && "r" === t[1]))
          ? e.setAttribute(t, a)
          : e.removeAttribute(t));
    }
  }
  function ua(e) {
    this.l[e.type + !1](Ot.event ? Ot.event(e) : e);
  }
  function pa(e) {
    this.l[e.type + !0](Ot.event ? Ot.event(e) : e);
  }
  function ma(e, t, a, r, n, i, o, l, s) {
    var d,
      c,
      u,
      p,
      m,
      h,
      f,
      y,
      b,
      v,
      g,
      k = t.type;
    if (void 0 !== t.constructor) return null;
    null != a.__h &&
      ((s = a.__h), (l = t.__e = a.__e), (t.__h = null), (i = [l])),
      (d = Ot.__b) && d(t);
    try {
      e: if ("function" == typeof k) {
        if (
          ((y = t.props),
          (b = (d = k.contextType) && r[d.__c]),
          (v = d ? (b ? b.props.value : d.__) : r),
          a.__c
            ? (f = (c = t.__c = a.__c).__ = c.__E)
            : ("prototype" in k && k.prototype.render
                ? (t.__c = c = new k(y, v))
                : ((t.__c = c = new ea(y, v)),
                  (c.constructor = k),
                  (c.render = ba)),
              b && b.sub(c),
              (c.props = y),
              c.state || (c.state = {}),
              (c.context = v),
              (c.__n = r),
              (u = c.__d = !0),
              (c.__h = [])),
          null == c.__s && (c.__s = c.state),
          null != k.getDerivedStateFromProps &&
            (c.__s == c.state && (c.__s = Jt({}, c.__s)),
            Jt(c.__s, k.getDerivedStateFromProps(y, c.__s))),
          (p = c.props),
          (m = c.state),
          u)
        )
          null == k.getDerivedStateFromProps &&
            null != c.componentWillMount &&
            c.componentWillMount(),
            null != c.componentDidMount && c.__h.push(c.componentDidMount);
        else {
          if (
            (null == k.getDerivedStateFromProps &&
              y !== p &&
              null != c.componentWillReceiveProps &&
              c.componentWillReceiveProps(y, v),
            (!c.__e &&
              null != c.shouldComponentUpdate &&
              !1 === c.shouldComponentUpdate(y, c.__s, v)) ||
              t.__v === a.__v)
          ) {
            (c.props = y),
              (c.state = c.__s),
              t.__v !== a.__v && (c.__d = !1),
              (c.__v = t),
              (t.__e = a.__e),
              (t.__k = a.__k),
              t.__k.forEach(function (e) {
                e && (e.__ = t);
              }),
              c.__h.length && o.push(c);
            break e;
          }
          null != c.componentWillUpdate && c.componentWillUpdate(y, c.__s, v),
            null != c.componentDidUpdate &&
              c.__h.push(function () {
                c.componentDidUpdate(p, m, h);
              });
        }
        (c.context = v),
          (c.props = y),
          (c.state = c.__s),
          (d = Ot.__r) && d(t),
          (c.__d = !1),
          (c.__v = t),
          (c.__P = e),
          (d = c.render(c.props, c.state, c.context)),
          (c.state = c.__s),
          null != c.getChildContext && (r = Jt(Jt({}, r), c.getChildContext())),
          u ||
            null == c.getSnapshotBeforeUpdate ||
            (h = c.getSnapshotBeforeUpdate(p, m)),
          (g =
            null != d && d.type === Xt && null == d.key ? d.props.children : d),
          ia(e, Array.isArray(g) ? g : [g], t, a, r, n, i, o, l, s),
          (c.base = t.__e),
          (t.__h = null),
          c.__h.length && o.push(c),
          f && (c.__E = c.__ = null),
          (c.__e = !1);
      } else
        null == i && t.__v === a.__v
          ? ((t.__k = a.__k), (t.__e = a.__e))
          : (t.__e = (function (e, t, a, r, n, i, o, l) {
              var s,
                d,
                c,
                u,
                p = a.props,
                m = t.props,
                h = t.type,
                f = 0;
              if (("svg" === h && (n = !0), null != i))
                for (; f < i.length; f++)
                  if (
                    (s = i[f]) &&
                    (s === e || (h ? s.localName == h : 3 == s.nodeType))
                  ) {
                    (e = s), (i[f] = null);
                    break;
                  }
              if (null == e) {
                if (null === h) return document.createTextNode(m);
                (e = n
                  ? document.createElementNS("http://www.w3.org/2000/svg", h)
                  : document.createElement(h, m.is && m)),
                  (i = null),
                  (l = !1);
              }
              if (null === h) p === m || (l && e.data === m) || (e.data = m);
              else {
                if (
                  ((i = i && Yt.slice.call(e.childNodes)),
                  (d = (p = a.props || Gt).dangerouslySetInnerHTML),
                  (c = m.dangerouslySetInnerHTML),
                  !l)
                ) {
                  if (null != i)
                    for (p = {}, u = 0; u < e.attributes.length; u++)
                      p[e.attributes[u].name] = e.attributes[u].value;
                  (c || d) &&
                    ((c &&
                      ((d && c.__html == d.__html) ||
                        c.__html === e.innerHTML)) ||
                      (e.innerHTML = (c && c.__html) || ""));
                }
                if (
                  ((function (e, t, a, r, n) {
                    var i;
                    for (i in a)
                      "children" === i ||
                        "key" === i ||
                        i in t ||
                        ca(e, i, null, a[i], r);
                    for (i in t)
                      (n && "function" != typeof t[i]) ||
                        "children" === i ||
                        "key" === i ||
                        "value" === i ||
                        "checked" === i ||
                        a[i] === t[i] ||
                        ca(e, i, t[i], a[i], r);
                  })(e, m, p, n, l),
                  c)
                )
                  t.__k = [];
                else if (
                  ((f = t.props.children),
                  ia(
                    e,
                    Array.isArray(f) ? f : [f],
                    t,
                    a,
                    r,
                    n && "foreignObject" !== h,
                    i,
                    o,
                    e.firstChild,
                    l
                  ),
                  null != i)
                )
                  for (f = i.length; f--; ) null != i[f] && Zt(i[f]);
                l ||
                  ("value" in m &&
                    void 0 !== (f = m.value) &&
                    (f !== e.value || ("progress" === h && !f)) &&
                    ca(e, "value", f, p.value, !1),
                  "checked" in m &&
                    void 0 !== (f = m.checked) &&
                    f !== e.checked &&
                    ca(e, "checked", f, p.checked, !1));
              }
              return e;
            })(a.__e, t, a, r, n, i, o, s));
      (d = Ot.diffed) && d(t);
    } catch (e) {
      (t.__v = null),
        (s || null != i) &&
          ((t.__e = l), (t.__h = !!s), (i[i.indexOf(l)] = null)),
        Ot.__e(e, t, a);
    }
  }
  function ha(e, t) {
    Ot.__c && Ot.__c(t, e),
      e.some(function (t) {
        try {
          (e = t.__h),
            (t.__h = []),
            e.some(function (e) {
              e.call(t);
            });
        } catch (e) {
          Ot.__e(e, t.__v);
        }
      });
  }
  function fa(e, t, a) {
    try {
      "function" == typeof e ? e(t) : (e.current = t);
    } catch (e) {
      Ot.__e(e, a);
    }
  }
  function ya(e, t, a) {
    var r, n, i;
    if (
      (Ot.unmount && Ot.unmount(e),
      (r = e.ref) && ((r.current && r.current !== e.__e) || fa(r, null, t)),
      a || "function" == typeof e.type || (a = null != (n = e.__e)),
      (e.__e = e.__d = void 0),
      null != (r = e.__c))
    ) {
      if (r.componentWillUnmount)
        try {
          r.componentWillUnmount();
        } catch (e) {
          Ot.__e(e, t);
        }
      r.base = r.__P = null;
    }
    if ((r = e.__k)) for (i = 0; i < r.length; i++) r[i] && ya(r[i], t, a);
    null != n && Zt(n);
  }
  function ba(e, t, a) {
    return this.constructor(e, a);
  }
  function va(e, t, a) {
    var r, n, i;
    Ot.__ && Ot.__(e, t),
      (n = (r = "function" == typeof a) ? null : (a && a.__k) || t.__k),
      (i = []),
      ma(
        t,
        (e = ((!r && a) || t).__k = Qt(Xt, null, [e])),
        n || Gt,
        Gt,
        void 0 !== t.ownerSVGElement,
        !r && a
          ? [a]
          : n
          ? null
          : t.firstChild
          ? Yt.slice.call(t.childNodes)
          : null,
        i,
        !r && a ? a : n ? n.__e : t.firstChild,
        r
      ),
      ha(i, e);
  }
  (Ot = {
    __e: function (e, t) {
      for (var a, r, n; (t = t.__); )
        if ((a = t.__c) && !a.__)
          try {
            if (
              ((r = a.constructor) &&
                null != r.getDerivedStateFromError &&
                (a.setState(r.getDerivedStateFromError(e)), (n = a.__d)),
              null != a.componentDidCatch &&
                (a.componentDidCatch(e), (n = a.__d)),
              n)
            )
              return (a.__E = a);
          } catch (t) {
            e = t;
          }
      throw e;
    },
    __v: 0,
  }),
    (ea.prototype.setState = function (e, t) {
      var a;
      (a =
        null != this.__s && this.__s !== this.state
          ? this.__s
          : (this.__s = Jt({}, this.state))),
        "function" == typeof e && (e = e(Jt({}, a), this.props)),
        e && Jt(a, e),
        null != e && this.__v && (t && this.__h.push(t), ra(this));
    }),
    (ea.prototype.forceUpdate = function (e) {
      this.__v && ((this.__e = !0), e && this.__h.push(e), ra(this));
    }),
    (ea.prototype.render = Xt),
    (Et = []),
    (Rt =
      "function" == typeof Promise
        ? Promise.prototype.then.bind(Promise.resolve())
        : setTimeout),
    (na.__r = 0),
    (Vt = 0);
  var ga = function (e, t) {
      return t.split(".").reduce(function (e, t) {
        return e && e[t] ? e[t] : void 0;
      }, e);
    },
    ka = function () {
      var e = this;
      (this.events = {}),
        (this.on = function (t, a) {
          (e.events[t] = e.events[t] || []), e.events[t].push(a);
        }),
        (this.off = function (t, a) {
          e.events[t] &&
            (e.events[t] = e.events[t].reduce(function (e, t) {
              return t !== a && e.push(t), e;
            }, []));
        }),
        (this.emit = function (t, a) {
          e.events[t] &&
            e.events[t].forEach(function (e) {
              e(a);
            });
        });
    };
  function Ca() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (e) {
        var t = (16 * Math.random()) | 0;
        return ("x" == e ? t : (3 & t) | 8).toString(16);
      }
    );
  }
  var _a,
    Na,
    wa,
    Pa = (function () {
      function e(e) {
        (this._id = this.constructor.type + "-" + Ca()),
          (this.eventEmitter = new ka()),
          (this.props = this.formatProps(
            wt(wt({}, this.constructor.defaultProps), e)
          )),
          (this._parentInstance = this.props._parentInstance),
          (this._node = null),
          (this.state = {});
      }
      return (
        (e.prototype.formatProps = function (e) {
          return e;
        }),
        (e.prototype.formatData = function () {
          return {};
        }),
        (e.prototype.setState = function (e) {
          this.state = wt(wt({}, this.state), e);
        }),
        Object.defineProperty(e.prototype, "data", {
          get: function () {
            var e = ga(this.props, "modules.risk.data"),
              t = ga(this.props, "modules.analytics.conversionId"),
              a = this.state.order || this.props.order;
            return wt(
              wt(
                wt(
                  wt(
                    wt({}, e && { riskData: { clientData: e } }),
                    t && { conversionId: t }
                  ),
                  a && {
                    order: {
                      orderData: a.orderData,
                      pspReference: a.pspReference,
                    },
                  }
                ),
                this.formatData()
              ),
              { clientStateDataIndicator: !0 }
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.render = function () {
          throw new Error("Payment method cannot be rendered.");
        }),
        (e.prototype.mount = function (e) {
          var t,
            a = "string" == typeof e ? document.querySelector(e) : e;
          if (!a)
            throw new Error(
              "Component could not mount. Root node was not found."
            );
          if (this._node) throw new Error("Component is already mounted.");
          return (
            (this._node = a),
            (this._component = this.render()),
            va(this._component, a),
            this.props.modules &&
              this.props.modules.analytics &&
              !this.props.isDropin &&
              this.props.modules.analytics.send({
                containerWidth: this._node && this._node.offsetWidth,
                component:
                  null !== (t = this.constructor.analyticsType) && void 0 !== t
                    ? t
                    : this.constructor.type,
                flavor: "components",
              }),
            this
          );
        }),
        (e.prototype.update = function (e) {
          return (
            (this.props = this.formatProps(wt(wt({}, this.props), e))),
            (this.state = {}),
            this.unmount().remount()
          );
        }),
        (e.prototype.remount = function (e) {
          if (!this._node) throw new Error("Component is not mounted.");
          return va(e || this.render(), this._node, null), this;
        }),
        (e.prototype.unmount = function () {
          return this._node && va(null, this._node), this;
        }),
        (e.prototype.remove = function () {
          this.unmount(),
            this._parentInstance && this._parentInstance.remove(this);
        }),
        (e.defaultProps = {}),
        e
      );
    })(),
    Fa = "https://checkoutshopper-live.adyen.com/checkoutshopper/",
    Da = [
      "amount",
      "countryCode",
      "environment",
      "loadingContext",
      "i18n",
      "modules",
      "order",
      "clientKey",
      "showPayButton",
      "installmentOptions",
      "onSubmit",
      "onAdditionalDetails",
      "onCancel",
      "onChange",
      "onError",
      "onBalanceCheck",
      "onOrderRequest",
    ],
    Sa = function (e) {
      var t = e.name,
        a = e.loadingContext,
        r = e.imageFolder,
        n = void 0 === r ? "" : r,
        i = e.parentFolder,
        o = void 0 === i ? "" : i,
        l = e.extension,
        s = e.size,
        d = void 0 === s ? "" : s,
        c = e.subFolder;
      return a + "images/" + n + (void 0 === c ? "" : c) + o + t + d + "." + l;
    },
    Aa = function (e) {
      var t = e.loadingContext,
        a = void 0 === t ? Fa : t,
        r = e.extension,
        n = void 0 === r ? "svg" : r,
        i = e.size,
        o = void 0 === i ? "3x" : i,
        l = Pt(e, ["loadingContext", "extension", "size"]);
      return function (e) {
        var t = wt(
          {
            extension: n,
            loadingContext: a,
            imageFolder: "logos/",
            parentFolder: "",
            name: e,
          },
          l
        );
        return Sa(
          "svg" !== n ? wt({ size: "@" + o, subFolder: "small/" }, t) : t
        );
      };
    },
    xa = t(function (e) {
      !(function () {
        var t = {}.hasOwnProperty;
        function a() {
          for (var e = [], r = 0; r < arguments.length; r++) {
            var n = arguments[r];
            if (n) {
              var i = typeof n;
              if ("string" === i || "number" === i) e.push(n);
              else if (Array.isArray(n) && n.length) {
                var o = a.apply(null, n);
                o && e.push(o);
              } else if ("object" === i)
                for (var l in n) t.call(n, l) && n[l] && e.push(l);
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((a.default = a), (e.exports = a))
          : (window.classNames = a);
      })();
    }),
    Ba = function (e) {
      var t = e.inline,
        a = void 0 !== t && t,
        r = e.size;
      return Qt(
        "div",
        {
          className:
            "adyen-checkout__spinner__wrapper " +
            (a ? "adyen-checkout__spinner__wrapper--inline" : ""),
        },
        Qt("div", {
          className:
            "adyen-checkout__spinner adyen-checkout__spinner--" +
            (void 0 === r ? "large" : r),
        })
      );
    },
    za = 0,
    Ta = [],
    Ma = Ot.__b,
    Ia = Ot.__r,
    ja = Ot.diffed,
    Oa = Ot.__c,
    Ea = Ot.unmount;
  function Ra(e, t) {
    Ot.__h && Ot.__h(Na, e, za || t), (za = 0);
    var a = Na.__H || (Na.__H = { __: [], __h: [] });
    return e >= a.__.length && a.__.push({}), a.__[e];
  }
  function La(e) {
    return (za = 1), Va($a, e);
  }
  function Va(e, t, a) {
    var r = Ra(_a++, 2);
    return (
      (r.t = e),
      r.__c ||
        ((r.__ = [
          a ? a(t) : $a(void 0, t),
          function (e) {
            var t = r.t(r.__[0], e);
            r.__[0] !== t && ((r.__ = [t, r.__[1]]), r.__c.setState({}));
          },
        ]),
        (r.__c = Na)),
      r.__
    );
  }
  function Ua(e, t) {
    var a = Ra(_a++, 3);
    !Ot.__s && Qa(a.__H, t) && ((a.__ = e), (a.__H = t), Na.__H.__h.push(a));
  }
  function Ka(e, t) {
    var a = Ra(_a++, 4);
    !Ot.__s && Qa(a.__H, t) && ((a.__ = e), (a.__H = t), Na.__h.push(a));
  }
  function Ha(e) {
    return (
      (za = 5),
      qa(function () {
        return { current: e };
      }, [])
    );
  }
  function qa(e, t) {
    var a = Ra(_a++, 7);
    return Qa(a.__H, t) && ((a.__ = e()), (a.__H = t), (a.__h = e)), a.__;
  }
  function Ga(e, t) {
    return (
      (za = 8),
      qa(function () {
        return e;
      }, t)
    );
  }
  function Ya() {
    Ta.forEach(function (e) {
      if (e.__P)
        try {
          e.__H.__h.forEach(Ja), e.__H.__h.forEach(Za), (e.__H.__h = []);
        } catch (t) {
          (e.__H.__h = []), Ot.__e(t, e.__v);
        }
    }),
      (Ta = []);
  }
  (Ot.__b = function (e) {
    (Na = null), Ma && Ma(e);
  }),
    (Ot.__r = function (e) {
      Ia && Ia(e), (_a = 0);
      var t = (Na = e.__c).__H;
      t && (t.__h.forEach(Ja), t.__h.forEach(Za), (t.__h = []));
    }),
    (Ot.diffed = function (e) {
      ja && ja(e);
      var t = e.__c;
      t &&
        t.__H &&
        t.__H.__h.length &&
        ((1 !== Ta.push(t) && wa === Ot.requestAnimationFrame) ||
          (
            (wa = Ot.requestAnimationFrame) ||
            function (e) {
              var t,
                a = function () {
                  clearTimeout(r), Wa && cancelAnimationFrame(t), setTimeout(e);
                },
                r = setTimeout(a, 100);
              Wa && (t = requestAnimationFrame(a));
            }
          )(Ya)),
        (Na = void 0);
    }),
    (Ot.__c = function (e, t) {
      t.some(function (e) {
        try {
          e.__h.forEach(Ja),
            (e.__h = e.__h.filter(function (e) {
              return !e.__ || Za(e);
            }));
        } catch (a) {
          t.some(function (e) {
            e.__h && (e.__h = []);
          }),
            (t = []),
            Ot.__e(a, e.__v);
        }
      }),
        Oa && Oa(e, t);
    }),
    (Ot.unmount = function (e) {
      Ea && Ea(e);
      var t = e.__c;
      if (t && t.__H)
        try {
          t.__H.__.forEach(Ja);
        } catch (e) {
          Ot.__e(e, t.__v);
        }
    });
  var Wa = "function" == typeof requestAnimationFrame;
  function Ja(e) {
    var t = Na;
    "function" == typeof e.__c && e.__c(), (Na = t);
  }
  function Za(e) {
    var t = Na;
    (e.__c = e.__()), (Na = t);
  }
  function Qa(e, t) {
    return (
      !e ||
      e.length !== t.length ||
      t.some(function (t, a) {
        return t !== e[a];
      })
    );
  }
  function $a(e, t) {
    return "function" == typeof t ? t(e) : t;
  }
  var Xa = (function (e, t) {
    var a = {
      __c: (t = "__cC" + Vt++),
      __: e,
      Consumer: function (e, t) {
        return e.children(t);
      },
      Provider: function (e) {
        var a, r;
        return (
          this.getChildContext ||
            ((a = []),
            ((r = {})[t] = this),
            (this.getChildContext = function () {
              return r;
            }),
            (this.shouldComponentUpdate = function (e) {
              this.props.value !== e.value && a.some(ra);
            }),
            (this.sub = function (e) {
              a.push(e);
              var t = e.componentWillUnmount;
              e.componentWillUnmount = function () {
                a.splice(a.indexOf(e), 1), t && t.call(e);
              };
            })),
          e.children
        );
      },
    };
    return (a.Provider.__ = a.Consumer.contextType = a);
  })({ i18n: new qt(), loadingContext: "" });
  function er() {
    return (function (e) {
      var t = Na.context[e.__c],
        a = Ra(_a++, 9);
      return (
        (a.__c = e),
        t ? (null == a.__ && ((a.__ = !0), t.sub(Na)), t.props.value) : e.__
      );
    })(Xa);
  }
  var tr = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.onClick = function (e) {
            e.preventDefault(),
              t.props.disabled || t.props.onClick(e, { complete: t.complete });
          }),
          (t.complete = function (e) {
            void 0 === e && (e = 1e3),
              t.setState({ completed: !0 }),
              setTimeout(function () {
                t.setState({ completed: !1 });
              }, e);
          }),
          t
        );
      }
      return (
        Nt(t, e),
        (t.prototype.render = function (e, t) {
          var a = e.classNameModifiers,
            r = void 0 === a ? [] : a,
            n = e.disabled,
            i = e.href,
            o = e.icon,
            l = e.secondary,
            s = e.inline,
            d = e.label,
            c = e.status,
            u = t.completed,
            p = er().i18n,
            m = o
              ? Qt("img", {
                  className: "adyen-checkout__button__icon",
                  src: o,
                  alt: "",
                  "aria-hidden": "true",
                })
              : "",
            h = St(
              St(
                St(St(St([], r), s ? ["inline"] : []), u ? ["completed"] : []),
                l ? ["secondary"] : []
              ),
              "loading" === c || "redirect" === c ? ["loading"] : []
            ),
            f = xa(
              St(
                ["adyen-checkout__button"],
                h.map(function (e) {
                  return "adyen-checkout__button--" + e;
                })
              )
            ),
            y = {
              loading: Qt(Ba, { size: "medium" }),
              redirect: Qt(
                "span",
                { className: "adyen-checkout__button__content" },
                Qt(Ba, { size: "small", inline: !0 }),
                p.get("payButton.redirecting")
              ),
              default: Qt(
                "span",
                { className: "adyen-checkout__button__content" },
                m,
                Qt("span", { className: "adyen-checkout__button__text" }, d)
              ),
            },
            b = y[c] || y.default;
          return i
            ? Qt(
                "a",
                {
                  className: f,
                  href: i,
                  disabled: n,
                  target: this.props.target,
                  rel: this.props.rel,
                },
                b
              )
            : Qt(
                "button",
                {
                  className: f,
                  type: "button",
                  disabled: n,
                  onClick: this.onClick,
                },
                b
              );
        }),
        (t.defaultProps = {
          status: "default",
          disabled: !1,
          label: "",
          secondary: !1,
          inline: !1,
          target: "_self",
          onClick: function () {},
        }),
        t
      );
    })(ea),
    ar = function (e) {
      var t = e.amount,
        a = e.classNameModifiers,
        r = void 0 === a ? [] : a,
        n = e.label,
        i = Pt(e, ["amount", "classNameModifiers", "label"]),
        o = er().i18n,
        l =
          t && {}.hasOwnProperty.call(t, "value") && 0 === t.value
            ? o.get("confirmPreauthorization")
            : o.get("payButton") +
              " " +
              ((null == t ? void 0 : t.value) &&
              (null == t ? void 0 : t.currency)
                ? o.amount(t.value, t.currency)
                : "");
      return Qt(
        tr,
        wt({}, i, { classNameModifiers: St(St([], r), ["pay"]), label: n || l })
      );
    },
    rr = (function (e) {
      function t(t) {
        var a = e.call(this, t) || this;
        return (
          (a.payButton = function (e) {
            return Qt(
              ar,
              wt({}, e, { amount: a.props.amount, onClick: a.submit })
            );
          }),
          (a.submit = a.submit.bind(a)),
          (a.setState = a.setState.bind(a)),
          (a.onValid = a.onValid.bind(a)),
          (a.onComplete = a.onComplete.bind(a)),
          (a.handleAction = a.handleAction.bind(a)),
          (a.elementRef = (t && t.elementRef) || a),
          a
        );
      }
      return (
        Nt(t, e),
        (t.prototype.setState = function (e) {
          (this.state = wt(wt({}, this.state), e)), this.onChange();
        }),
        (t.prototype.onChange = function () {
          var e = this.isValid,
            t = {
              data: this.data,
              errors: this.state.errors,
              valid: this.state.valid,
              isValid: e,
            };
          return (
            this.props.onChange && this.props.onChange(t, this.elementRef),
            e && this.onValid(),
            t
          );
        }),
        (t.prototype.onValid = function () {
          var e = { data: this.data };
          return (
            this.props.onValid && this.props.onValid(e, this.elementRef), e
          );
        }),
        (t.prototype.startPayment = function () {
          return Promise.resolve(!0);
        }),
        (t.prototype.submit = function () {
          var e = this,
            t = this.props,
            a = t.onError,
            r = void 0 === a ? function () {} : a,
            n = t.onSubmit,
            i = void 0 === n ? function () {} : n;
          this.startPayment()
            .then(function () {
              var t = e,
                a = t.data,
                r = t.isValid;
              return r
                ? i({ data: a, isValid: r }, e.elementRef)
                : (e.showValidation(), !1);
            })
            .catch(function (e) {
              return r(e);
            });
        }),
        (t.prototype.onComplete = function (e) {
          this.props.onComplete && this.props.onComplete(e, this.elementRef);
        }),
        (t.prototype.showValidation = function () {
          return (
            this.componentRef &&
              this.componentRef.showValidation &&
              this.componentRef.showValidation(),
            this
          );
        }),
        (t.prototype.setStatus = function (e) {
          return (
            this.componentRef &&
              this.componentRef.setStatus &&
              this.componentRef.setStatus(e),
            this
          );
        }),
        (t.prototype.handleAction = function (e, t) {
          var a = this;
          if ((void 0 === t && (t = {}), !e || !e.type))
            throw new Error("Invalid Action");
          var r = this.props._parentInstance.createFromAction(
            e,
            wt(wt({}, t), {
              onAdditionalDetails: function (e) {
                return a.props.onAdditionalDetails(e, a.elementRef);
              },
            })
          );
          return r ? (this.unmount(), r.mount(this._node), r) : null;
        }),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return !1;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "icon", {
          get: function () {
            return Aa({ loadingContext: this.props.loadingContext })(
              this.constructor.type
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "displayName", {
          get: function () {
            return this.props.name || this.constructor.type;
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })(Pa),
    nr = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.iframeOnLoad = function () {
          this.props.callback &&
            "function" == typeof this.props.callback &&
            this.props.callback(this.iframeEl.contentWindow);
        }),
        (t.prototype.componentDidMount = function () {
          this.iframeEl.addEventListener
            ? this.iframeEl.addEventListener(
                "load",
                this.iframeOnLoad.bind(this),
                !1
              )
            : this.iframeEl.attachEvent
            ? this.iframeEl.attachEvent("onload", this.iframeOnLoad.bind(this))
            : (this.iframeEl.onload = this.iframeOnLoad.bind(this));
        }),
        (t.prototype.componentWillUnmount = function () {
          this.iframeEl.removeEventListener
            ? this.iframeEl.removeEventListener(
                "load",
                this.iframeOnLoad.bind(this),
                !1
              )
            : this.iframeEl.detachEvent
            ? this.iframeEl.detachEvent("onload", this.iframeOnLoad.bind(this))
            : (this.iframeEl.onload = null);
        }),
        (t.prototype.render = function (e) {
          var t = this,
            a = e.name,
            r = e.src,
            n = e.width,
            i = e.height,
            o = e.minWidth,
            l = e.minHeight,
            s = e.border;
          return Qt("iframe", {
            ref: function (e) {
              t.iframeEl = e;
            },
            allow: e.allow,
            className: "adyen-checkout__iframe adyen-checkout__iframe--" + a,
            name: a,
            src: r,
            width: n,
            height: i,
            "min-width": o,
            "min-height": l,
            border: s,
            style: { border: 0 },
            frameBorder: "0",
            title: e.title,
            referrerpolicy: "origin",
          });
        }),
        (t.defaultProps = {
          width: "0",
          height: "0",
          minWidth: "0",
          minHeight: "0",
          border: "0",
          src: null,
          allow: null,
          title: "components iframe",
        }),
        t
      );
    })(ea),
    ir = function (e, t, a) {
      var r;
      return {
        promise: new Promise(function (n, i) {
          (r = setTimeout(function () {
            i(a);
          }, e)),
            t
              .then(function (e) {
                clearTimeout(r), n(e);
              })
              .catch(function (e) {
                clearTimeout(r), i(e);
              });
        }),
        cancel: function () {
          clearTimeout(r);
        },
      };
    },
    or = "deviceFingerprint",
    lr = { result: { type: or, value: "df-timedOut" }, errorCode: "timeout" },
    sr = { result: { type: or, value: "df-failed" } },
    dr = "unknownError",
    cr = {
      timeout: "iframe loading timed out",
      wrongOrigin: "Result did not come from the expected origin",
      wrongDataType: "Result data was not of the expected type",
      missingProperty: "Result data did not contain the expected properties",
      unknownError: "An unknown error occurred",
    },
    ur = function (e, t, a, r, n) {
      return function (i) {
        var o = wt({}, r);
        if ((i.origin || i.originalEvent.origin) !== e)
          return "Message was not sent from the expected domain";
        if ("string" != typeof i.data)
          return "Event data was not of type string";
        if (!i.data.length) return "Invalid event data string";
        try {
          var l = JSON.parse(i.data);
          if (!Object.prototype.hasOwnProperty.call(l, "type") || l.type !== n)
            return "Event data was not of expected type";
          t(l);
        } catch (e) {
          return a(o), !1;
        }
        return !0;
      };
    },
    pr = function (e) {
      var t =
        /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.exec(
          e
        );
      if (!t) return null;
      var a = t[1],
        r = t[2],
        n = t[3],
        i = t[4];
      return a && r && n ? a + ":" + r + n + (i ? ":" + i : "") : null;
    },
    mr = (function (e) {
      function t(t) {
        var a = e.call(this, t) || this;
        return (
          (a.postMessageDomain =
            pr(a.props.loadingContext) || a.props.loadingContext),
          a
        );
      }
      return (
        Nt(t, e),
        (t.prototype.getDfpPromise = function () {
          var e = this;
          return new Promise(function (t, a) {
            (e.processMessageHandler = ur(e.postMessageDomain, t, a, sr, or)),
              window.addEventListener("message", e.processMessageHandler);
          });
        }),
        (t.prototype.componentDidMount = function () {
          var e = this;
          (this.deviceFingerPrintPromise = ir(2e4, this.getDfpPromise(), lr)),
            this.deviceFingerPrintPromise.promise
              .then(function (t) {
                e.props.onCompleteFingerprint(t),
                  window.removeEventListener(
                    "message",
                    e.processMessageHandler
                  );
              })
              .catch(function (t) {
                e.props.onErrorFingerprint(t),
                  window.removeEventListener(
                    "message",
                    e.processMessageHandler
                  );
              });
        }),
        (t.prototype.render = function (e) {
          var t = e.dfpURL;
          return Qt(
            "div",
            { className: "adyen-checkout-risk__device-fingerprint" },
            Qt(nr, {
              name: "dfIframe",
              src: t,
              allow: "geolocation; microphone; camera;",
              title: "devicefingerprinting iframe",
            })
          );
        }),
        t
      );
    })(ea),
    hr = (function (e) {
      function t(t) {
        var a = e.call(this, t) || this;
        return (
          t.clientKey &&
            (a.state = {
              status: "retrievingFingerPrint",
              dfpURL:
                a.props.loadingContext +
                "assets/html/" +
                t.clientKey +
                "/dfp.1.0.0.html",
            }),
          a
        );
      }
      return (
        Nt(t, e),
        (t.prototype.setStatusComplete = function (e) {
          var t = this;
          this.setState({ status: "complete" }, function () {
            t.props.onComplete(e);
          });
        }),
        (t.prototype.render = function (e, t) {
          var a = this,
            r = e.loadingContext,
            n = t.dfpURL;
          return "retrievingFingerPrint" === this.state.status
            ? Qt(
                "div",
                {
                  className: "adyen-checkout-risk__device-fingerprint--wrapper",
                  style: { position: "absolute", width: 0, height: 0 },
                },
                Qt(mr, {
                  loadingContext: r,
                  dfpURL: n,
                  onCompleteFingerprint: function (e) {
                    a.setStatusComplete(e);
                  },
                  onErrorFingerprint: function (e) {
                    var t;
                    a.props.onError({
                      errorCode: (t = e.errorCode),
                      message: cr[t] || cr[dr],
                      type: or,
                    }),
                      a.setStatusComplete(e.result);
                  },
                })
              )
            : null;
        }),
        (t.defaultProps = {
          onComplete: function () {},
          onError: function () {},
        }),
        t
      );
    })(ea),
    fr = window.atob,
    yr = window.btoa,
    br = {
      decode: function (e) {
        return (
          !!br.isBase64(e) &&
          !!br.isBase64(e) &&
          ((t = e),
          decodeURIComponent(
            Array.prototype.map
              .call(fr(t), function (e) {
                return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
              })
              .join("")
          ))
        );
        var t;
      },
      encode: function (e) {
        return yr(e);
      },
      isBase64: function (e) {
        return !!e && !(e.length % 4) && yr(fr(e)) === e;
      },
    },
    vr = (function (e) {
      function t(t) {
        var a,
          r = e.call(this, t) || this;
        (r.nodeRiskContainer = null),
          (r.onComplete = function (e) {
            var t,
              a = wt(
                wt({}, r.state.data),
                (((t = {})[e.type] = e.value),
                (t.persistentCookie = e.persistentCookie),
                (t.components = e.components),
                t)
              );
            r.setState({ data: a, isValid: !0 }),
              r.props.risk.onComplete(r.data),
              r.cleanUp();
          }),
          (r.onError = function (e) {
            r.props.risk.onError(e), r.cleanUp();
          }),
          (r.cleanUp = function () {
            r.nodeRiskContainer && r.nodeRiskContainer.remove();
          });
        var n = (((a = {}).deviceFingerprint = null), a);
        return (
          r.setState({ data: n }),
          !0 === r.props.risk.enabled &&
            (document.querySelector(r.props.risk.node)
              ? ((r.nodeRiskContainer = document.createElement("div")),
                document
                  .querySelector(r.props.risk.node)
                  .appendChild(r.nodeRiskContainer),
                r.mount(r.nodeRiskContainer))
              : r.onError({ message: "RiskModule node was not found" })),
          r
        );
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (e) {
          return wt(wt({}, e), {
            risk: wt(wt({}, t.defaultProps.risk), e.risk),
          });
        }),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return this.state.isValid;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "data", {
          get: function () {
            if (this.isValid) {
              var e = wt({ version: "1.0.0" }, this.state.data);
              return br.encode(JSON.stringify(e));
            }
            return !1;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.componentWillUnmount = function () {
          this.cleanUp();
        }),
        (t.prototype.render = function () {
          return Qt(
            hr,
            wt({}, this.props, {
              loadingContext: this.props.loadingContext,
              onComplete: this.onComplete,
              onError: this.onError,
            })
          );
        }),
        (t.type = "risk"),
        (t.defaultProps = {
          risk: {
            enabled: !0,
            onComplete: function () {},
            onError: function () {},
            node: "body",
          },
        }),
        t
      );
    })(Pa);
  function gr(e) {
    var t = e.children,
      a = e.classNameModifiers,
      r = void 0 === a ? [] : a,
      n = e.label,
      i = e.readonly,
      o = void 0 !== i && i,
      l = er().i18n;
    return Qt(
      "div",
      {
        className: xa(
          St(
            St(
              ["adyen-checkout__fieldset"],
              r.map(function (e) {
                return "adyen-checkout__fieldset--" + e;
              })
            ),
            [{ "adyen-checkout__fieldset--readonly": o }]
          )
        ),
      },
      n &&
        Qt("div", { className: "adyen-checkout__fieldset__title" }, l.get(n)),
      Qt("div", { className: "adyen-checkout__fieldset__fields" }, t)
    );
  }
  var kr = function (e) {
      var t = e.type,
        a = e.className,
        r = void 0 === a ? "" : a,
        n = er().loadingContext,
        i = Aa({ loadingContext: n, imageFolder: "components/" })(t);
      return Qt("img", {
        className: xa("adyen-checkout__icon", r),
        alt: t,
        src: i,
      });
    },
    Cr = (function (e) {
      function t(t) {
        var a = e.call(this, t) || this;
        return (
          (a.state = { focused: !1 }),
          (a.onFocus = a.onFocus.bind(a)),
          (a.onBlur = a.onBlur.bind(a)),
          a
        );
      }
      return (
        Nt(t, e),
        (t.prototype.onFocus = function (e) {
          var t = this;
          this.setState({ focused: !0 }, function () {
            t.props.onFocus && t.props.onFocus(e);
          });
        }),
        (t.prototype.onBlur = function (e) {
          var t = this;
          this.setState({ focused: !1 }, function () {
            t.props.onBlur && t.props.onBlur(e),
              t.props.onFieldBlur && t.props.onFieldBlur(e);
          });
        }),
        (t.getDerivedStateFromProps = function (e, t) {
          return void 0 !== e.focused && e.focused !== t.focused
            ? { focused: e.focused }
            : void 0 !== e.filled && e.filled !== t.filled
            ? { filled: e.filled }
            : null;
        }),
        (t.prototype.render = function (e) {
          var t = this,
            a = e.className,
            r = void 0 === a ? "" : a,
            n = e.classNameModifiers,
            i = void 0 === n ? [] : n,
            o = e.children,
            l = e.errorMessage,
            s = e.helper,
            d = e.inputWrapperModifiers,
            c = void 0 === d ? [] : d,
            u = e.isLoading,
            p = e.isValid,
            m = e.label,
            h = e.dualBrandingElements;
          return Qt(
            "div",
            {
              className: xa(
                "adyen-checkout__field",
                r,
                i.map(function (e) {
                  return "adyen-checkout__field--" + e;
                }),
                {
                  "adyen-checkout__field--error": l,
                  "adyen-checkout__field--valid": p,
                }
              ),
            },
            Qt(
              "label",
              {
                onClick: this.props.onFocusField,
                className: xa({
                  "adyen-checkout__label": !0,
                  "adyen-checkout__label--focused": this.state.focused,
                  "adyen-checkout__label--filled": this.state.filled,
                  "adyen-checkout__label--disabled": this.props.disabled,
                }),
              },
              "string" == typeof m &&
                Qt(
                  "span",
                  {
                    className: xa({
                      "adyen-checkout__label__text": !0,
                      "adyen-checkout__label__text--error": l,
                    }),
                  },
                  m
                ),
              "function" == typeof m && m(),
              s && Qt("span", { className: "adyen-checkout__helper-text" }, s),
              Qt(
                "div",
                {
                  className: xa(
                    St(
                      ["adyen-checkout__input-wrapper"],
                      c.map(function (e) {
                        return "adyen-checkout__input-wrapper--" + e;
                      })
                    )
                  ),
                },
                la(o).map(function (e) {
                  return (function (e, t, a) {
                    var r,
                      n,
                      i,
                      o = arguments,
                      l = Jt({}, e.props);
                    for (i in t)
                      "key" == i
                        ? (r = t[i])
                        : "ref" == i
                        ? (n = t[i])
                        : (l[i] = t[i]);
                    if (arguments.length > 3)
                      for (a = [a], i = 3; i < arguments.length; i++)
                        a.push(o[i]);
                    return (
                      null != a && (l.children = a),
                      $t(e.type, l, r || e.key, n || e.ref, null)
                    );
                  })(e, {
                    isValid: p,
                    onFocus: t.onFocus,
                    onBlur: t.onBlur,
                    isInvalid: !!l,
                  });
                }),
                u &&
                  Qt(
                    "span",
                    {
                      className:
                        "adyen-checkout-input__inline-validation adyen-checkout-input__inline-validation--loading",
                    },
                    Qt(Ba, { size: "small" })
                  ),
                p &&
                  !h &&
                  Qt(
                    "span",
                    {
                      className:
                        "adyen-checkout-input__inline-validation adyen-checkout-input__inline-validation--valid",
                    },
                    Qt(kr, { type: "checkmark" })
                  ),
                l &&
                  Qt(
                    "span",
                    {
                      className:
                        "adyen-checkout-input__inline-validation adyen-checkout-input__inline-validation--invalid",
                    },
                    Qt(kr, { type: "field_error" })
                  )
              ),
              l &&
                l.length &&
                Qt(
                  "span",
                  {
                    className: "adyen-checkout__error-text",
                    "aria-live": "polite",
                  },
                  l
                )
            )
          );
        }),
        t
      );
    })(ea),
    _r = function (e) {
      var t = e.data,
        a = t.name,
        r = t.registrationNumber;
      return Qt(
        gr,
        {
          classNameModifiers: ["companyDetails"],
          label: "companyDetails",
          readonly: !0,
        },
        a && a + " ",
        r && r + " "
      );
    };
  function Nr(e) {
    var t = e.autoCorrect,
      a = e.classNameModifiers,
      r = e.isInvalid,
      n = e.isValid,
      i = e.readonly,
      o = void 0 === i ? null : i,
      l = e.spellCheck,
      s = e.type,
      d = xa(
        "adyen-checkout__input",
        ["adyen-checkout__input--" + s],
        e.className,
        {
          "adyen-checkout__input--invalid": r,
          "adyen-checkout__input--valid": n,
        },
        a.map(function (e) {
          return "adyen-checkout__input--" + e;
        })
      );
    return Qt(
      "input",
      wt({}, e, {
        type: s,
        className: d,
        onInput: function (t) {
          (t.target.value = t.target.value.replace(
            /[\uff01-\uff5e]/g,
            function (e) {
              return String.fromCharCode(e.charCodeAt(0) - 65248);
            }
          )),
            e.onInput(t);
        },
        readOnly: o,
        spellCheck: l,
        autoCorrect: t,
      })
    );
  }
  function wr(e) {
    return Qt(Nr, wt({ classNameModifiers: ["large"] }, e, { type: "text" }));
  }
  Nr.defaultProps = { type: "text", classNameModifiers: [] };
  var Pr = function () {
      var e = document.createElement("input");
      return e.setAttribute("type", "date"), "date" === e.type;
    },
    Fr = function (e) {
      if ((void 0 === e && (e = ""), -1 === e.indexOf("/"))) return e;
      var t = e.split("/"),
        a = t[0],
        r = void 0 === a ? "" : a,
        n = t[1],
        i = void 0 === n ? "" : n,
        o = t[2],
        l = void 0 === o ? "" : o;
      return r && i && l ? l + "-" + i + "-" + r : null;
    };
  function Dr(e) {
    return Qt(
      Nr,
      qa(Pr, [])
        ? wt({}, e, { type: "date" })
        : wt({}, e, {
            onInput: function (t) {
              var a = t.target.value;
              (t.target.value = (function (e) {
                var t = e
                    .replace(/\D|\s/g, "")
                    .replace(/^(00)(.*)?/, "01$2")
                    .replace(/^(3[2-9])(.*)?/, "0$1$2")
                    .replace(/^([4-9])(.*)?/, "0$1")
                    .replace(/^([0-9]{2})(00)(.*)?/, "$101")
                    .replace(/^(3[01])(02)(.*)?/, "29$2")
                    .replace(/^([0-9]{2})([2-9]|1[3-9])(.*)?/, "$10$2")
                    .replace(/^([0-9]{2})([0-9]{2})([0-9])/, "$1/$2/$3")
                    .replace(/^([0-9]{2})([0-9])/, "$1/$2"),
                  a = t.split("/"),
                  r = a[0],
                  n = void 0 === r ? "" : r,
                  i = a[1],
                  o = void 0 === i ? "" : i,
                  l = a[2],
                  s = void 0 === l ? "" : l;
                return 4 === s.length &&
                  "29" === n &&
                  "02" === o &&
                  (Number(s) % 4 != 0 ||
                    ("00" === s.substr(2, 2) && Number(s) % 400 != 0))
                  ? t.replace(/^29/, "28")
                  : t;
              })(a)),
                e.onInput(t);
            },
            maxLength: 10,
          })
    );
  }
  function Sr(e) {
    return Qt(Nr, wt({}, e, { type: "tel" }));
  }
  function Ar(e) {
    return Qt(Nr, wt({}, e, { type: "email", autoCapitalize: "off" }));
  }
  function xr(e) {
    var t = e.items,
      a = e.i18n,
      r = e.name,
      n = e.onChange,
      i = e.value,
      o = e.isInvalid;
    return Qt(
      "div",
      { className: "adyen-checkout__radio_group" },
      t.map(function (t) {
        return Qt(
          "label",
          {
            key: t.id,
            className: "adyen-checkout__radio_group__input-wrapper",
          },
          Qt("input", {
            type: "radio",
            checked: i === t.id,
            className: "adyen-checkout__radio_group__input",
            name: r,
            onChange: n,
            onClick: n,
            value: t.id,
          }),
          Qt(
            "span",
            {
              className: xa([
                "adyen-checkout__label__text",
                "adyen-checkout__radio_group__label",
                e.className,
                { "adyen-checkout__radio_group__label--invalid": o },
              ]),
            },
            a.get(t.name)
          )
        );
      })
    );
  }
  function Br(e) {
    var t = e.classNameModifiers,
      a = void 0 === t ? [] : t,
      r = e.label,
      n = e.isInvalid,
      i = e.onChange,
      o = Pt(e, ["classNameModifiers", "label", "isInvalid", "onChange"]);
    return Qt(
      "label",
      { className: "adyen-checkout__checkbox" },
      Qt(
        "input",
        wt({}, o, {
          className: xa([
            "adyen-checkout__checkbox__input",
            [o.className],
            { "adyen-checkout__checkbox__input--invalid": n },
            a.map(function (e) {
              return "adyen-checkout__input--" + e;
            }),
          ]),
          type: "checkbox",
          onChange: i,
        })
      ),
      Qt("span", { className: "adyen-checkout__checkbox__label" }, r)
    );
  }
  (xr.defaultProps = { onChange: function () {}, items: [] }),
    (Br.defaultProps = { onChange: function () {} });
  var zr = "Select-module_adyen-checkout__dropdown__2kGp2",
    Tr = "Select-module_adyen-checkout__dropdown__button__waz0I",
    Mr = "Select-module_adyen-checkout__dropdown__button--active__1EqeU",
    Ir = "Select-module_adyen-checkout__filter-input__HMjy5",
    jr = "Select-module_adyen-checkout__dropdown__list__2UxAp",
    Or = "Select-module_adyen-checkout__dropdown__list--active__Mlt8t",
    Er = "Select-module_adyen-checkout__dropdown__element__3nIQR";
  function Rr(e) {
    var t = e.filterable,
      a = e.toggleButtonRef,
      r = Pt(e, ["filterable", "toggleButtonRef"]);
    return Qt(t ? "div" : "button", wt({}, r, { ref: a }));
  }
  function Lr(e) {
    var t,
      a = er().i18n,
      r = e.active,
      n = e.readonly,
      i = e.showList;
    return Qt(
      Rr,
      {
        "aria-disabled": n,
        "aria-expanded": i,
        "aria-haspopup": "listbox",
        className: xa(
          ((t = { "adyen-checkout__dropdown__button": !0 }),
          (t[Tr] = !0),
          (t["adyen-checkout__dropdown__button--readonly"] = n),
          (t["adyen-checkout__dropdown__button--active"] = i),
          (t[Mr] = i),
          (t["adyen-checkout__dropdown__button--invalid"] = e.isInvalid),
          t)
        ),
        filterable: e.filterable,
        onClick: n ? null : e.toggleList,
        onKeyDown: n ? null : e.onButtonKeyDown,
        role: e.filterable ? "button" : null,
        tabIndex: "0",
        title: r.name || e.placeholder,
        toggleButtonRef: e.toggleButtonRef,
        type: e.filterable ? null : "button",
      },
      i && e.filterable
        ? Qt("input", {
            "aria-autocomplete": "list",
            "aria-controls": e.selectListId,
            "aria-expanded": i,
            "aria-owns": e.selectListId,
            autoComplete: "off",
            className: xa("adyen-checkout__filter-input", [Ir]),
            onInput: e.onInput,
            placeholder: a.get("select.filter.placeholder"),
            ref: e.filterInputRef,
            role: "combobox",
            type: "text",
          })
        : Qt(
            Xt,
            null,
            Qt(
              "span",
              { className: "adyen-checkout__dropdown__button__text" },
              r.selectedOptionName || r.name || e.placeholder
            ),
            r.icon &&
              Qt("img", {
                className: "adyen-checkout__dropdown__button__icon",
                src: r.icon,
                alt: r.name,
              })
          )
    );
  }
  var Vr = function (e) {
    var t = e.item,
      a = e.selected,
      r = Pt(e, ["item", "selected"]);
    return Qt(
      "li",
      {
        "aria-disabled": !!t.disabled,
        "aria-selected": a,
        className: xa([
          "adyen-checkout__dropdown__element",
          Er,
          {
            "adyen-checkout__dropdown__element--active": a,
            "adyen-checkout__dropdown__element--disabled": !!t.disabled,
          },
        ]),
        "data-disabled": !!t.disabled,
        "data-value": t.id,
        onClick: r.onSelect,
        onKeyDown: r.onKeyDown,
        role: "option",
        tabIndex: -1,
      },
      Qt("span", null, t.name),
      t.icon &&
        Qt("img", {
          className: "adyen-checkout__dropdown__element__icon",
          alt: t.name,
          src: t.icon,
        })
    );
  };
  function Ur(e) {
    var t,
      a = e.active,
      r = e.items,
      n = e.showList,
      i = e.textFilter,
      o = Pt(e, ["active", "items", "showList", "textFilter"]),
      l = er().i18n,
      s = r.filter(function (e) {
        return !i || e.name.toLowerCase().includes(i);
      });
    return Qt(
      "ul",
      {
        className: xa(
          ((t = { test: !0, "adyen-checkout__dropdown__list": !0 }),
          (t[jr] = !0),
          (t["adyen-checkout__dropdown__list--active"] = n),
          (t[Or] = n),
          t)
        ),
        id: o.selectListId,
        ref: o.selectListRef,
        role: "listbox",
      },
      s.length
        ? s.map(function (e) {
            return Qt(Vr, {
              item: e,
              key: e.id,
              onKeyDown: o.onKeyDown,
              onSelect: o.onSelect,
              selected: e.id === a.id,
            });
          })
        : Qt(
            "div",
            {
              className:
                "adyen-checkout__dropdown__element adyen-checkout__dropdown__element--no-options",
            },
            l.get("select.noOptionsFound")
          )
    );
  }
  var Kr = {
    arrowDown: "ArrowDown",
    arrowUp: "ArrowUp",
    enter: "Enter",
    escape: "Escape",
    space: " ",
  };
  function Hr(e) {
    var t = Ha(null),
      a = Ha(null),
      r = Ha(null),
      n = Ha(null),
      i = La(null),
      o = i[0],
      l = i[1],
      s = La(!1),
      d = s[0],
      c = s[1],
      u = qa(function () {
        return "select-" + Ca();
      }, []),
      p =
        e.items.find(function (t) {
          return t.id === e.selected;
        }) || {},
      m = function (e) {
        a.current.contains(e.target) || c(!1);
      },
      h = function (t) {
        t.preventDefault();
        var a = n.current.contains(t.currentTarget)
          ? t.currentTarget
          : n.current.firstElementChild;
        if (!a.getAttribute("data-disabled")) {
          l(null), c(!1), r.current && r.current.focus();
          var i = a.getAttribute("data-value");
          e.onChange({ target: { value: i, name: e.name } });
        }
      };
    return (
      Ua(
        function () {
          d && e.filterable && t.current && t.current.focus();
        },
        [d]
      ),
      Ua(function () {
        return (
          document.addEventListener("click", m, !1),
          function () {
            document.removeEventListener("click", m, !1);
          }
        );
      }, []),
      Qt(
        "div",
        {
          className: xa(
            St(
              ["adyen-checkout__dropdown", zr, e.className],
              e.classNameModifiers.map(function (e) {
                return "adyen-checkout__dropdown--" + e;
              })
            )
          ),
          ref: a,
        },
        Qt(Lr, {
          active: p,
          filterInputRef: t,
          filterable: e.filterable,
          isInvalid: e.isInvalid,
          onButtonKeyDown: function (t) {
            var a;
            t.key === Kr.enter && e.filterable && d && o
              ? h(t)
              : (![Kr.arrowUp, Kr.arrowDown, Kr.enter].includes(t.key) &&
                  (t.key !== Kr.space || (e.filterable && d))) ||
                (t.preventDefault(),
                c(!0),
                (null === (a = n.current) || void 0 === a
                  ? void 0
                  : a.firstElementChild) &&
                  n.current.firstElementChild.focus());
          },
          onInput: function (e) {
            var t = e.target.value;
            l(t.toLowerCase());
          },
          placeholder: e.placeholder,
          readonly: e.readonly,
          selectListId: u,
          showList: d,
          toggleButtonRef: r,
          toggleList: function (e) {
            e.preventDefault(), c(!d);
          },
        }),
        Qt(Ur, {
          active: p,
          items: e.items,
          onKeyDown: function (a) {
            var r = a.target;
            switch (a.key) {
              case Kr.escape:
                a.preventDefault(), c(!1);
                break;
              case Kr.space:
              case Kr.enter:
                h(a);
                break;
              case Kr.arrowDown:
                a.preventDefault(),
                  r.nextElementSibling && r.nextElementSibling.focus();
                break;
              case Kr.arrowUp:
                a.preventDefault(),
                  r.previousElementSibling
                    ? r.previousElementSibling.focus()
                    : e.filterable && t.current && t.current.focus();
            }
          },
          onSelect: h,
          selectListId: u,
          selectListRef: n,
          showList: d,
          textFilter: o,
        })
      )
    );
  }
  Hr.defaultProps = {
    className: "",
    classNameModifiers: [],
    filterable: !0,
    items: [],
    readonly: !1,
    onChange: function () {},
  };
  var qr = function (e, t) {
      var a = {
        boolean: Br,
        date: Dr,
        emailAddress: Ar,
        radio: xr,
        select: Hr,
        tel: Sr,
        text: wr,
        default: wr,
      };
      return Qt(a[e] || a.default, wt({}, t));
    },
    Gr = /^\s*[\w\-+_]+(\.[\w\-+_]+)*@[\w\-+_]+\.[\w\-+_]+(\.[\w-+_]+)*\s*$/,
    Yr = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/,
    Wr = (function () {
      function e(e, t, a, r) {
        (this.shouldValidate = e.modes.includes(a)),
          (this.isValid = e.validate(t, r)),
          (this.errorMessage = e.errorMessage);
      }
      return (
        (e.prototype.hasError = function () {
          return !this.isValid && this.shouldValidate;
        }),
        e
      );
    })(),
    Jr = (function () {
      function e(e) {
        this.validationResults = e;
      }
      return (
        Object.defineProperty(e.prototype, "isValid", {
          get: function () {
            return this.validationResults.every(function (e) {
              return e.isValid;
            });
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.hasError = function () {
          return Boolean(this.getError());
        }),
        (e.prototype.getError = function () {
          return this.validationResults.find(function (e) {
            return e.hasError();
          });
        }),
        (e.prototype.getAllErrors = function () {
          return this.validationResults.filter(function (e) {
            return e.hasError();
          });
        }),
        e
      );
    })(),
    Zr = (function () {
      function e(e) {
        void 0 === e && (e = {}),
          (this.rules = {
            shopperEmail: {
              validate: function (e) {
                return Gr.test(e);
              },
              errorMessage: "error.va.gen.01",
              modes: ["blur"],
            },
            default: {
              validate: function () {
                return !0;
              },
              modes: ["blur", "input"],
            },
          }),
          this.setRules(e);
      }
      return (
        (e.prototype.setRules = function (e) {
          this.rules = wt(wt({}, this.rules), e);
        }),
        (e.prototype.getRulesFor = function (e) {
          var t,
            a =
              null !== (t = this.rules[e]) && void 0 !== t
                ? t
                : this.rules.default;
          return Array.isArray(a) || (a = [a]), a;
        }),
        (e.prototype.validate = function (e, t) {
          var a = e.key,
            r = e.value,
            n = e.mode,
            i = void 0 === n ? "blur" : n,
            o = this.getRulesFor(a).map(function (e) {
              return new Wr(e, r, i, t);
            });
          return new Jr(o);
        }),
        e
      );
    })(),
    Qr = function (e, t) {
      return Object.keys(e)
        .filter(function (e) {
          return !t.includes(e);
        })
        .reduce(function (t, a) {
          return (t[a] = e[a]), t;
        }, {});
    },
    $r = function (e, t, a, r) {
      return t.reduce(function (e, t) {
        var n, i, o;
        return wt(
          wt({}, e),
          (((n = {})[t] =
            null !== (o = null !== (i = e[t]) && void 0 !== i ? i : r[t]) &&
            void 0 !== o
              ? o
              : a),
          n)
        );
      }, e);
    };
  function Xr(e) {
    var t = e.schema,
      a = e.defaultData,
      r = e.processField,
      n = t.reduce(
        function (e, t) {
          var n,
            i,
            o,
            l = (function (e) {
              var t;
              if (void 0 === a[e])
                return { valid: !1, errors: null, data: null };
              var n = r({ field: e, value: a[e], mode: "blur" }, { state: a }),
                i = n[0],
                o = n[1];
              return {
                valid: null !== (t = o.isValid) && void 0 !== t && t,
                errors: o.hasError() ? o.getError() : null,
                data: i,
              };
            })(t),
            s = l.valid,
            d = l.errors,
            c = l.data;
          return {
            valid: wt(wt({}, e.valid), ((n = {}), (n[t] = s), n)),
            errors: wt(wt({}, e.errors), ((i = {}), (i[t] = d), i)),
            data: wt(wt({}, e.data), ((o = {}), (o[t] = c), o)),
          };
        },
        { data: {}, valid: {}, errors: {} }
      );
    return { schema: t, data: n.data, valid: n.valid, errors: n.errors };
  }
  function en(e) {
    var t,
      a = e.rules,
      r = void 0 === a ? {} : a,
      n = e.formatters,
      i = void 0 === n ? {} : n,
      o = e.defaultData,
      l = void 0 === o ? {} : o,
      s = qa(function () {
        return new Zr(r);
      }, []),
      d = function (e, t) {
        var a = e.key,
          r = e.value,
          n = e.mode,
          o = i[a] ? i[a](null != r ? r : "") : r;
        return [o, s.validate({ key: a, value: o, mode: n }, t)];
      },
      c = Va(
        (function (e) {
          return function (t, a) {
            var r,
              n,
              i,
              o,
              l,
              s,
              d,
              c = a.type,
              u = a.key,
              p = a.value,
              m = a.mode,
              h = a.defaultData,
              f = a.schema;
            switch (c) {
              case "setData":
                return wt(wt({}, t), {
                  data: wt(wt({}, t.data), ((r = {}), (r[u] = p), r)),
                });
              case "setValid":
                return wt(wt({}, t), {
                  valid: wt(wt({}, t.valid), ((n = {}), (n[u] = p), n)),
                });
              case "setErrors":
                return wt(wt({}, t), {
                  errors: wt(wt({}, t.errors), ((i = {}), (i[u] = p), i)),
                });
              case "updateField":
                var y = e({ key: u, value: p, mode: m }, { state: t }),
                  b = y[0],
                  v = y[1];
                return wt(wt({}, t), {
                  data: wt(wt({}, t.data), ((o = {}), (o[u] = b), o)),
                  errors: wt(
                    wt({}, t.errors),
                    ((l = {}), (l[u] = v.hasError() ? v.getError() : null), l)
                  ),
                  valid: wt(
                    wt({}, t.valid),
                    ((s = {}),
                    (s[u] = null !== (d = v.isValid) && void 0 !== d && d),
                    s)
                  ),
                });
              case "setSchema":
                var g = Xr({ schema: f, defaultData: h, processField: e }),
                  k = t.schema.filter(function (e) {
                    return !f.includes(e);
                  }),
                  C = f.filter(function (e) {
                    return !t.schema.includes(e);
                  }),
                  _ = $r(Qr(t.data, k), C, null, g.data),
                  N = $r(Qr(t.valid, k), C, !1, g.valid),
                  w = $r(Qr(t.errors, k), C, null, g.errors);
                return wt(wt({}, t), {
                  schema: f,
                  data: _,
                  valid: N,
                  errors: w,
                });
              case "validateForm":
                var P = t.schema.reduce(
                  function (a, r) {
                    var n,
                      i,
                      o,
                      l = e(
                        { key: r, value: t.data[r], mode: "blur" },
                        { state: t }
                      )[1];
                    return {
                      valid: wt(
                        wt({}, a.valid),
                        ((n = {}),
                        (n[r] = null !== (o = l.isValid) && void 0 !== o && o),
                        n)
                      ),
                      errors: wt(
                        wt({}, a.errors),
                        ((i = {}),
                        (i[r] = l.hasError() ? l.getError() : null),
                        i)
                      ),
                    };
                  },
                  { valid: t.valid, errors: t.errors }
                );
                return wt(wt({}, t), { valid: P.valid, errors: P.errors });
              default:
                throw new Error("Undefined useForm action");
            }
          };
        })(d),
        {
          defaultData: l,
          schema: null !== (t = e.schema) && void 0 !== t ? t : [],
          processField: d,
        },
        Xr
      ),
      u = c[0],
      p = c[1],
      m = qa(
        function () {
          return u.schema.every(function (e) {
            return u.valid[e];
          });
        },
        [u.schema, u.valid]
      ),
      h = Ga(function () {
        p({ type: "validateForm" });
      }, []),
      f = Ga(function (e, t) {
        return p({ type: "setErrors", key: e, value: t });
      }, []),
      y = Ga(function (e, t) {
        return p({ type: "setValid", key: e, value: t });
      }, []),
      b = Ga(function (e, t) {
        return p({ type: "setData", key: e, value: t });
      }, []);
    return {
      handleChangeFor: function (e, t) {
        return (
          void 0 === t && (t = "blur"),
          function (a) {
            var r = (function (e, t) {
              return t.target
                ? "checkbox" === t.target.type
                  ? !u.data[e]
                  : t.target.value
                : t;
            })(e, a);
            p({ type: "updateField", key: e, value: r, mode: t });
          }
        );
      },
      triggerValidation: h,
      setSchema: Ga(
        function (e) {
          return p({ type: "setSchema", schema: e, defaultData: l });
        },
        [u.schema]
      ),
      setData: b,
      setValid: y,
      setErrors: f,
      isValid: m,
      schema: u.schema,
      valid: u.valid,
      errors: u.errors,
      data: u.data,
    };
  }
  function tn(e) {
    var t = e.label,
      a = void 0 === t ? "" : t,
      r = e.namePrefix,
      n = e.requiredFields,
      i = e.visibility,
      o = er().i18n,
      l = en({ schema: n, rules: e.validationRules, defaultData: e.data }),
      s = l.handleChangeFor,
      d = l.triggerValidation,
      c = l.data,
      u = l.valid,
      p = l.errors,
      m = l.isValid,
      h = function (e) {
        return (r ? r + "." : "") + e;
      },
      f = function (e) {
        return function (t) {
          var a = t.target.name.split(r + ".").pop();
          s(a, e)(t);
        };
      };
    return (
      Ua(
        function () {
          var t = (function (e) {
            var t = e.name,
              a = e.registrationNumber;
            return wt(
              {},
              (t || a) && {
                company: wt(
                  wt({}, t && { name: t }),
                  a && { registrationNumber: a }
                ),
              }
            );
          })(c);
          e.onChange({ data: t, valid: u, errors: p, isValid: m });
        },
        [c, u, p, m]
      ),
      (this.showValidation = d),
      "hidden" === i
        ? null
        : "readOnly" === i
        ? Qt(_r, wt({}, e, { data: c }))
        : Qt(
            gr,
            { classNameModifiers: [a], label: a },
            n.includes("name") &&
              Qt(
                Cr,
                {
                  label: o.get("companyDetails.name"),
                  classNameModifiers: ["name"],
                  errorMessage: !!p.name,
                },
                qr("text", {
                  name: h("name"),
                  value: c.name,
                  classNameModifiers: ["name"],
                  onInput: f("input"),
                  onChange: f("blur"),
                  spellCheck: !1,
                })
              ),
            n.includes("registrationNumber") &&
              Qt(
                Cr,
                {
                  label: o.get("companyDetails.registrationNumber"),
                  classNameModifiers: ["registrationNumber"],
                  errorMessage: !!p.registrationNumber,
                },
                qr("text", {
                  name: h("registrationNumber"),
                  value: c.registrationNumber,
                  classNameModifiers: ["registrationNumber"],
                  onInput: f("input"),
                  onChange: f("blur"),
                  spellCheck: !1,
                })
              )
          )
    );
  }
  tn.defaultProps = {
    data: {},
    onChange: function () {},
    visibility: "editable",
    requiredFields: ["name", "registrationNumber"],
    validationRules: {
      default: {
        validate: function (e) {
          return e && e.length > 0;
        },
        modes: ["blur"],
      },
    },
  };
  var an = function (e) {
      var t = e.data,
        a = t.firstName,
        r = t.lastName,
        n = t.shopperEmail,
        i = t.telephoneNumber;
      return Qt(
        gr,
        {
          classNameModifiers: ["personalDetails"],
          label: "personalDetails",
          readonly: !0,
        },
        a && a + " ",
        r && r + " ",
        n && Qt(Xt, null, Qt("br", null), n),
        i && Qt(Xt, null, Qt("br", null), i)
      );
    },
    rn = {
      default: {
        validate: function (e) {
          return e && e.length > 0;
        },
        modes: ["blur"],
      },
      dateOfBirth: {
        validate: function (e) {
          return (function (e) {
            if (!e) return !1;
            var t = Fr(e),
              a = Date.now() - Date.parse(t);
            return new Date(a).getFullYear() - 1970 >= 18;
          })(e);
        },
        errorMessage: "dateOfBirth.invalid",
        modes: ["blur"],
      },
      telephoneNumber: {
        validate: function (e) {
          return Yr.test(e);
        },
        modes: ["blur"],
      },
      shopperEmail: {
        validate: function (e) {
          return Gr.test(e);
        },
        modes: ["blur"],
      },
    };
  function nn(e) {
    var t = e.label,
      a = void 0 === t ? "" : t,
      r = e.namePrefix,
      n = e.placeholders,
      i = e.requiredFields,
      o = e.visibility,
      l = er().i18n,
      s = qa(Pr, []),
      d = en({ schema: i, rules: e.validationRules, defaultData: e.data }),
      c = d.handleChangeFor,
      u = d.triggerValidation,
      p = d.data,
      m = d.valid,
      h = d.errors,
      f = d.isValid,
      y = function (e) {
        return function (t) {
          var a = t.target.name.split(r + ".").pop();
          c(a, e)(t);
        };
      },
      b = function (e) {
        return (r ? r + "." : "") + e;
      },
      v = function (e) {
        return e && e.errorMessage ? l.get(e.errorMessage) : !!e;
      };
    return (
      Ua(
        function () {
          var t = (function (e) {
            var t = e.firstName,
              a = e.lastName,
              r = e.gender,
              n = e.dateOfBirth,
              i = e.shopperEmail,
              o = e.telephoneNumber;
            return wt(
              wt(
                wt(
                  wt(
                    {},
                    (t || a) && {
                      shopperName: wt(
                        wt(wt({}, t && { firstName: t }), a && { lastName: a }),
                        r && { gender: r }
                      ),
                    }
                  ),
                  n && { dateOfBirth: Fr(n) }
                ),
                i && { shopperEmail: i }
              ),
              o && { telephoneNumber: o }
            );
          })(p);
          e.onChange({ data: t, valid: m, errors: h, isValid: f });
        },
        [p, m, h, f]
      ),
      (this.showValidation = u),
      "hidden" === o
        ? null
        : "readOnly" === o
        ? Qt(an, wt({}, e, { data: p }))
        : Qt(
            gr,
            { classNameModifiers: ["personalDetails"], label: a },
            i.includes("firstName") &&
              Qt(
                Cr,
                {
                  label: l.get("firstName"),
                  classNameModifiers: ["col-50", "firstName"],
                  errorMessage: !!h.firstName,
                },
                qr("text", {
                  name: b("firstName"),
                  value: p.firstName,
                  classNameModifiers: ["firstName"],
                  onInput: y("input"),
                  onChange: y("blur"),
                  placeholder: n.firstName,
                  spellCheck: !1,
                })
              ),
            i.includes("lastName") &&
              Qt(
                Cr,
                {
                  label: l.get("lastName"),
                  classNameModifiers: ["col-50", "lastName"],
                  errorMessage: !!h.lastName,
                },
                qr("text", {
                  name: b("lastName"),
                  value: p.lastName,
                  classNameModifiers: ["lastName"],
                  onInput: y("input"),
                  onChange: y("blur"),
                  placeholder: n.lastName,
                  spellCheck: !1,
                })
              ),
            i.includes("gender") &&
              Qt(
                Cr,
                { errorMessage: !!h.gender, classNameModifiers: ["gender"] },
                qr("radio", {
                  i18n: l,
                  name: b("gender"),
                  value: p.gender,
                  items: [
                    { id: "MALE", name: "male" },
                    { id: "FEMALE", name: "female" },
                  ],
                  classNameModifiers: ["gender"],
                  onInput: y("input"),
                  onChange: y("blur"),
                })
              ),
            i.includes("dateOfBirth") &&
              Qt(
                Cr,
                {
                  label: l.get("dateOfBirth"),
                  classNameModifiers: ["col-50", "lastName"],
                  errorMessage: v(h.dateOfBirth),
                  helper: s ? null : l.get("dateOfBirth.format"),
                },
                qr("date", {
                  name: b("dateOfBirth"),
                  value: p.dateOfBirth,
                  classNameModifiers: ["dateOfBirth"],
                  onInput: y("input"),
                  onChange: y("blur"),
                  placeholder: n.dateOfBirth,
                })
              ),
            i.includes("shopperEmail") &&
              Qt(
                Cr,
                {
                  label: l.get("shopperEmail"),
                  classNameModifiers: ["shopperEmail"],
                  errorMessage: v(h.shopperEmail),
                },
                qr("emailAddress", {
                  name: b("shopperEmail"),
                  value: p.shopperEmail,
                  classNameModifiers: ["shopperEmail"],
                  onInput: y("input"),
                  onChange: y("blur"),
                  placeholder: n.shopperEmail,
                })
              ),
            i.includes("telephoneNumber") &&
              Qt(
                Cr,
                {
                  label: l.get("telephoneNumber"),
                  classNameModifiers: ["telephoneNumber"],
                  errorMessage: v(h.telephoneNumber),
                },
                qr("tel", {
                  name: b("telephoneNumber"),
                  value: p.telephoneNumber,
                  classNameModifiers: ["telephoneNumber"],
                  onInput: y("input"),
                  onChange: y("blur"),
                  placeholder: n.telephoneNumber,
                })
              )
          )
    );
  }
  nn.defaultProps = {
    data: {},
    onChange: function () {},
    placeholders: {},
    requiredFields: [
      "firstName",
      "lastName",
      "gender",
      "dateOfBirth",
      "shopperEmail",
      "telephoneNumber",
    ],
    validationRules: rn,
    visibility: "editable",
  };
  var on = function (e) {
      var t = e.data,
        a = e.label,
        r = t.street,
        n = t.houseNumberOrName,
        i = t.city,
        o = t.postalCode,
        l = t.stateOrProvince,
        s = t.country;
      return Qt(
        gr,
        { classNameModifiers: [a], label: a, readonly: !0 },
        !!r && r,
        n && ", " + n + ",",
        Qt("br", null),
        o && "" + o,
        i && ", " + i,
        l && "N/A" !== l && ", " + l,
        s && ", " + s + " "
      );
    },
    ln = function (e) {
      return {
        houseNumberOrName: {
          validate: function (t, a) {
            var r,
              n,
              i =
                null ===
                  (n =
                    null === (r = a.state) || void 0 === r ? void 0 : r.data) ||
                void 0 === n
                  ? void 0
                  : n.country;
            return (
              (i && e.countryHasOptionalField(i, "houseNumberOrName")) ||
              (null == t ? void 0 : t.length) > 0
            );
          },
          modes: ["blur"],
        },
        default: {
          validate: function (e) {
            return (null == e ? void 0 : e.length) > 0;
          },
          modes: ["blur"],
        },
      };
    },
    sn =
      ("undefined" != typeof globalThis && globalThis) ||
      ("undefined" != typeof self && self) ||
      (void 0 !== sn && sn),
    dn = "URLSearchParams" in sn,
    cn = "Symbol" in sn && "iterator" in Symbol,
    un =
      "FileReader" in sn &&
      "Blob" in sn &&
      (function () {
        try {
          return new Blob(), !0;
        } catch (e) {
          return !1;
        }
      })(),
    pn = "FormData" in sn,
    mn = "ArrayBuffer" in sn;
  if (mn)
    var hn = [
        "[object Int8Array]",
        "[object Uint8Array]",
        "[object Uint8ClampedArray]",
        "[object Int16Array]",
        "[object Uint16Array]",
        "[object Int32Array]",
        "[object Uint32Array]",
        "[object Float32Array]",
        "[object Float64Array]",
      ],
      fn =
        ArrayBuffer.isView ||
        function (e) {
          return e && hn.indexOf(Object.prototype.toString.call(e)) > -1;
        };
  function yn(e) {
    if (
      ("string" != typeof e && (e = String(e)),
      /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)
    )
      throw new TypeError(
        'Invalid character in header field name: "' + e + '"'
      );
    return e.toLowerCase();
  }
  function bn(e) {
    return "string" != typeof e && (e = String(e)), e;
  }
  function vn(e) {
    var t = {
      next: function () {
        var t = e.shift();
        return { done: void 0 === t, value: t };
      },
    };
    return (
      cn &&
        (t[Symbol.iterator] = function () {
          return t;
        }),
      t
    );
  }
  function gn(e) {
    (this.map = {}),
      e instanceof gn
        ? e.forEach(function (e, t) {
            this.append(t, e);
          }, this)
        : Array.isArray(e)
        ? e.forEach(function (e) {
            this.append(e[0], e[1]);
          }, this)
        : e &&
          Object.getOwnPropertyNames(e).forEach(function (t) {
            this.append(t, e[t]);
          }, this);
  }
  function kn(e) {
    if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
    e.bodyUsed = !0;
  }
  function Cn(e) {
    return new Promise(function (t, a) {
      (e.onload = function () {
        t(e.result);
      }),
        (e.onerror = function () {
          a(e.error);
        });
    });
  }
  function _n(e) {
    var t = new FileReader(),
      a = Cn(t);
    return t.readAsArrayBuffer(e), a;
  }
  function Nn(e) {
    if (e.slice) return e.slice(0);
    var t = new Uint8Array(e.byteLength);
    return t.set(new Uint8Array(e)), t.buffer;
  }
  function wn() {
    return (
      (this.bodyUsed = !1),
      (this._initBody = function (e) {
        var t;
        (this.bodyUsed = this.bodyUsed),
          (this._bodyInit = e),
          e
            ? "string" == typeof e
              ? (this._bodyText = e)
              : un && Blob.prototype.isPrototypeOf(e)
              ? (this._bodyBlob = e)
              : pn && FormData.prototype.isPrototypeOf(e)
              ? (this._bodyFormData = e)
              : dn && URLSearchParams.prototype.isPrototypeOf(e)
              ? (this._bodyText = e.toString())
              : mn && un && (t = e) && DataView.prototype.isPrototypeOf(t)
              ? ((this._bodyArrayBuffer = Nn(e.buffer)),
                (this._bodyInit = new Blob([this._bodyArrayBuffer])))
              : mn && (ArrayBuffer.prototype.isPrototypeOf(e) || fn(e))
              ? (this._bodyArrayBuffer = Nn(e))
              : (this._bodyText = e = Object.prototype.toString.call(e))
            : (this._bodyText = ""),
          this.headers.get("content-type") ||
            ("string" == typeof e
              ? this.headers.set("content-type", "text/plain;charset=UTF-8")
              : this._bodyBlob && this._bodyBlob.type
              ? this.headers.set("content-type", this._bodyBlob.type)
              : dn &&
                URLSearchParams.prototype.isPrototypeOf(e) &&
                this.headers.set(
                  "content-type",
                  "application/x-www-form-urlencoded;charset=UTF-8"
                ));
      }),
      un &&
        ((this.blob = function () {
          var e = kn(this);
          if (e) return e;
          if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }),
        (this.arrayBuffer = function () {
          if (this._bodyArrayBuffer) {
            var e = kn(this);
            return (
              e ||
              (ArrayBuffer.isView(this._bodyArrayBuffer)
                ? Promise.resolve(
                    this._bodyArrayBuffer.buffer.slice(
                      this._bodyArrayBuffer.byteOffset,
                      this._bodyArrayBuffer.byteOffset +
                        this._bodyArrayBuffer.byteLength
                    )
                  )
                : Promise.resolve(this._bodyArrayBuffer))
            );
          }
          return this.blob().then(_n);
        })),
      (this.text = function () {
        var e,
          t,
          a,
          r = kn(this);
        if (r) return r;
        if (this._bodyBlob)
          return (
            (e = this._bodyBlob),
            (t = new FileReader()),
            (a = Cn(t)),
            t.readAsText(e),
            a
          );
        if (this._bodyArrayBuffer)
          return Promise.resolve(
            (function (e) {
              for (
                var t = new Uint8Array(e), a = new Array(t.length), r = 0;
                r < t.length;
                r++
              )
                a[r] = String.fromCharCode(t[r]);
              return a.join("");
            })(this._bodyArrayBuffer)
          );
        if (this._bodyFormData)
          throw new Error("could not read FormData body as text");
        return Promise.resolve(this._bodyText);
      }),
      pn &&
        (this.formData = function () {
          return this.text().then(Dn);
        }),
      (this.json = function () {
        return this.text().then(JSON.parse);
      }),
      this
    );
  }
  (gn.prototype.append = function (e, t) {
    (e = yn(e)), (t = bn(t));
    var a = this.map[e];
    this.map[e] = a ? a + ", " + t : t;
  }),
    (gn.prototype.delete = function (e) {
      delete this.map[yn(e)];
    }),
    (gn.prototype.get = function (e) {
      return (e = yn(e)), this.has(e) ? this.map[e] : null;
    }),
    (gn.prototype.has = function (e) {
      return this.map.hasOwnProperty(yn(e));
    }),
    (gn.prototype.set = function (e, t) {
      this.map[yn(e)] = bn(t);
    }),
    (gn.prototype.forEach = function (e, t) {
      for (var a in this.map)
        this.map.hasOwnProperty(a) && e.call(t, this.map[a], a, this);
    }),
    (gn.prototype.keys = function () {
      var e = [];
      return (
        this.forEach(function (t, a) {
          e.push(a);
        }),
        vn(e)
      );
    }),
    (gn.prototype.values = function () {
      var e = [];
      return (
        this.forEach(function (t) {
          e.push(t);
        }),
        vn(e)
      );
    }),
    (gn.prototype.entries = function () {
      var e = [];
      return (
        this.forEach(function (t, a) {
          e.push([a, t]);
        }),
        vn(e)
      );
    }),
    cn && (gn.prototype[Symbol.iterator] = gn.prototype.entries);
  var Pn = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
  function Fn(e, t) {
    if (!(this instanceof Fn))
      throw new TypeError(
        'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
      );
    var a,
      r,
      n = (t = t || {}).body;
    if (e instanceof Fn) {
      if (e.bodyUsed) throw new TypeError("Already read");
      (this.url = e.url),
        (this.credentials = e.credentials),
        t.headers || (this.headers = new gn(e.headers)),
        (this.method = e.method),
        (this.mode = e.mode),
        (this.signal = e.signal),
        n || null == e._bodyInit || ((n = e._bodyInit), (e.bodyUsed = !0));
    } else this.url = String(e);
    if (
      ((this.credentials = t.credentials || this.credentials || "same-origin"),
      (!t.headers && this.headers) || (this.headers = new gn(t.headers)),
      (this.method =
        ((a = t.method || this.method || "GET"),
        (r = a.toUpperCase()),
        Pn.indexOf(r) > -1 ? r : a)),
      (this.mode = t.mode || this.mode || null),
      (this.signal = t.signal || this.signal),
      (this.referrer = null),
      ("GET" === this.method || "HEAD" === this.method) && n)
    )
      throw new TypeError("Body not allowed for GET or HEAD requests");
    if (
      (this._initBody(n),
      !(
        ("GET" !== this.method && "HEAD" !== this.method) ||
        ("no-store" !== t.cache && "no-cache" !== t.cache)
      ))
    ) {
      var i = /([?&])_=[^&]*/;
      if (i.test(this.url))
        this.url = this.url.replace(i, "$1_=" + new Date().getTime());
      else {
        this.url +=
          (/\?/.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
      }
    }
  }
  function Dn(e) {
    var t = new FormData();
    return (
      e
        .trim()
        .split("&")
        .forEach(function (e) {
          if (e) {
            var a = e.split("="),
              r = a.shift().replace(/\+/g, " "),
              n = a.join("=").replace(/\+/g, " ");
            t.append(decodeURIComponent(r), decodeURIComponent(n));
          }
        }),
      t
    );
  }
  function Sn(e, t) {
    if (!(this instanceof Sn))
      throw new TypeError(
        'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
      );
    t || (t = {}),
      (this.type = "default"),
      (this.status = void 0 === t.status ? 200 : t.status),
      (this.ok = this.status >= 200 && this.status < 300),
      (this.statusText = void 0 === t.statusText ? "" : "" + t.statusText),
      (this.headers = new gn(t.headers)),
      (this.url = t.url || ""),
      this._initBody(e);
  }
  (Fn.prototype.clone = function () {
    return new Fn(this, { body: this._bodyInit });
  }),
    wn.call(Fn.prototype),
    wn.call(Sn.prototype),
    (Sn.prototype.clone = function () {
      return new Sn(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new gn(this.headers),
        url: this.url,
      });
    }),
    (Sn.error = function () {
      var e = new Sn(null, { status: 0, statusText: "" });
      return (e.type = "error"), e;
    });
  var An = [301, 302, 303, 307, 308];
  Sn.redirect = function (e, t) {
    if (-1 === An.indexOf(t)) throw new RangeError("Invalid status code");
    return new Sn(null, { status: t, headers: { location: e } });
  };
  var xn = sn.DOMException;
  try {
    new xn();
  } catch (e) {
    ((xn = function (e, t) {
      (this.message = e), (this.name = t);
      var a = Error(e);
      this.stack = a.stack;
    }).prototype = Object.create(Error.prototype)),
      (xn.prototype.constructor = xn);
  }
  function Bn(e, t) {
    return new Promise(function (a, r) {
      var n = new Fn(e, t);
      if (n.signal && n.signal.aborted)
        return r(new xn("Aborted", "AbortError"));
      var i = new XMLHttpRequest();
      function o() {
        i.abort();
      }
      (i.onload = function () {
        var e,
          t,
          r = {
            status: i.status,
            statusText: i.statusText,
            headers:
              ((e = i.getAllResponseHeaders() || ""),
              (t = new gn()),
              e
                .replace(/\r?\n[\t ]+/g, " ")
                .split("\r")
                .map(function (e) {
                  return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e;
                })
                .forEach(function (e) {
                  var a = e.split(":"),
                    r = a.shift().trim();
                  if (r) {
                    var n = a.join(":").trim();
                    t.append(r, n);
                  }
                }),
              t),
          };
        r.url =
          "responseURL" in i ? i.responseURL : r.headers.get("X-Request-URL");
        var n = "response" in i ? i.response : i.responseText;
        setTimeout(function () {
          a(new Sn(n, r));
        }, 0);
      }),
        (i.onerror = function () {
          setTimeout(function () {
            r(new TypeError("Network request failed"));
          }, 0);
        }),
        (i.ontimeout = function () {
          setTimeout(function () {
            r(new TypeError("Network request failed"));
          }, 0);
        }),
        (i.onabort = function () {
          setTimeout(function () {
            r(new xn("Aborted", "AbortError"));
          }, 0);
        }),
        i.open(
          n.method,
          (function (e) {
            try {
              return "" === e && sn.location.href ? sn.location.href : e;
            } catch (t) {
              return e;
            }
          })(n.url),
          !0
        ),
        "include" === n.credentials
          ? (i.withCredentials = !0)
          : "omit" === n.credentials && (i.withCredentials = !1),
        "responseType" in i &&
          (un
            ? (i.responseType = "blob")
            : mn &&
              n.headers.get("Content-Type") &&
              -1 !==
                n.headers
                  .get("Content-Type")
                  .indexOf("application/octet-stream") &&
              (i.responseType = "arraybuffer")),
        !t || "object" != typeof t.headers || t.headers instanceof gn
          ? n.headers.forEach(function (e, t) {
              i.setRequestHeader(t, e);
            })
          : Object.getOwnPropertyNames(t.headers).forEach(function (e) {
              i.setRequestHeader(e, bn(t.headers[e]));
            }),
        n.signal &&
          (n.signal.addEventListener("abort", o),
          (i.onreadystatechange = function () {
            4 === i.readyState && n.signal.removeEventListener("abort", o);
          })),
        i.send(void 0 === n._bodyInit ? null : n._bodyInit);
    });
  }
  (Bn.polyfill = !0),
    sn.fetch ||
      ((sn.fetch = Bn),
      (sn.Headers = gn),
      (sn.Request = Fn),
      (sn.Response = Sn));
  var zn = "fetch" in window ? window.fetch : Bn;
  function Tn(e, t) {
    var a = e.headers,
      r = void 0 === a ? [] : a,
      n = e.errorLevel,
      i = void 0 === n ? "warn" : n,
      o = e.loadingContext,
      l = void 0 === o ? Fa : o,
      s = e.method,
      d = void 0 === s ? "GET" : s,
      c = e.path,
      u = wt(
        {
          method: d,
          mode: "cors",
          cache: "default",
          credentials: "same-origin",
          headers: wt(
            {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "POST" === d ? "application/json" : "text/plain",
            },
            r
          ),
          redirect: "follow",
          referrerPolicy: "no-referrer-when-downgrade",
        },
        t && { body: JSON.stringify(t) }
      ),
      p = "" + l + c;
    return zn(p, u)
      .then(function (t) {
        return t.ok
          ? t.json()
          : Mn(e.errorMessage || "Service at " + p + " is not available", i);
      })
      .catch(function (t) {
        return Mn(e.errorMessage || "Call to " + p + " failed. Error= " + t, i);
      });
  }
  function Mn(e, t) {
    switch (t) {
      case "silent":
        return null;
      case "info":
      case "warn":
      case "error":
        return console[t](e);
      default:
        throw new Error(e);
    }
  }
  var In,
    jn,
    On,
    En,
    Rn,
    Ln,
    Vn,
    Un = function (e, t) {
      return Tn(wt(wt({}, e), { method: "GET" }), t);
    },
    Kn = function (e, t) {
      return Tn(wt(wt({}, e), { method: "POST" }), t);
    };
  function Hn(e, t, a) {
    return Un({
      loadingContext: t,
      errorLevel: "warn",
      errorMessage: "Dataset " + e + " is not available",
      path: "datasets/" + e + "/" + a + ".json",
    });
  }
  function qn(e) {
    var t = e.classNameModifiers,
      a = e.label,
      r = e.onDropdownChange,
      n = e.readOnly,
      i = e.selectedCountry,
      o = e.specifications,
      l = e.value,
      s = er(),
      d = s.i18n,
      c = s.loadingContext,
      u = La([]),
      p = u[0],
      m = u[1],
      h = La(!1),
      f = h[0],
      y = h[1],
      b = o.getPlaceholderKeyForField("stateOrProvince", i);
    return (
      Ka(
        function () {
          if (!i || !o.countryHasDataset(i)) return m([]), void y(!0);
          Hn("states/" + i, c, d.locale)
            .then(function (e) {
              var t = e && e.length ? e : [];
              m(t), y(!0);
            })
            .catch(function () {
              m([]), y(!0);
            });
        },
        [i]
      ),
      f && p.length
        ? Qt(
            Cr,
            { label: a, classNameModifiers: t, errorMessage: e.errorMessage },
            qr("select", {
              name: "stateOrProvince",
              onChange: r,
              selected: l,
              placeholder: d.get(b),
              items: p,
              readonly: n && !!l,
            })
          )
        : null
    );
  }
  function Gn(e) {
    var t = e.allowedCountries,
      a = void 0 === t ? [] : t,
      r = e.classNameModifiers,
      n = void 0 === r ? [] : r,
      i = e.errorMessage,
      o = e.onDropdownChange,
      l = e.value,
      s = er(),
      d = s.i18n,
      c = s.loadingContext,
      u = La([]),
      p = u[0],
      m = u[1],
      h = La(!1),
      f = h[0],
      y = h[1],
      b = La(e.readOnly),
      v = b[0],
      g = b[1];
    return (
      Ka(function () {
        Hn("countries", c, d.locale)
          .then(function (e) {
            var t = a.length
              ? e.filter(function (e) {
                  return a.includes(e.id);
                })
              : e;
            m(t || []), g(1 === t.length || v), y(!0);
          })
          .catch(function (e) {
            console.error(e), m([]), y(!0);
          });
      }, []),
      f
        ? Qt(
            Cr,
            { label: d.get("country"), errorMessage: i, classNameModifiers: n },
            qr("select", {
              onChange: o,
              name: "country",
              placeholder: d.get("select.country"),
              selected: l,
              items: p,
              readonly: v && !!l,
            })
          )
        : null
    );
  }
  function Yn(e) {
    var t = er().i18n,
      a = e.classNameModifiers,
      r = void 0 === a ? [] : a,
      n = e.data,
      i = e.errors,
      o = e.fieldName,
      l = e.onInput,
      s = !!i[o],
      d = n[o],
      c = n.country,
      u = e.specifications.countryHasOptionalField(c, o),
      p = e.specifications.getKeyForField(o, c),
      m = u ? " " + t.get("field.title.optional") : "",
      h = "" + t.get(p) + m;
    switch (o) {
      case "country":
        return Qt(Gn, {
          allowedCountries: e.allowedCountries,
          classNameModifiers: r,
          label: h,
          errorMessage: s,
          onDropdownChange: e.onDropdownChange,
          value: d,
        });
      case "stateOrProvince":
        return Qt(qn, {
          classNameModifiers: r,
          label: h,
          errorMessage: s,
          onDropdownChange: e.onDropdownChange,
          selectedCountry: c,
          specifications: e.specifications,
          value: d,
        });
      default:
        return Qt(
          Cr,
          { label: h, classNameModifiers: r, errorMessage: s },
          qr("text", { classNameModifiers: r, name: o, value: d, onInput: l })
        );
    }
  }
  var Wn = [
      "street",
      "houseNumberOrName",
      "postalCode",
      "city",
      "stateOrProvince",
      "country",
    ],
    Jn = Wn[0],
    Zn = Wn[1],
    Qn = Wn[2],
    $n = Wn[3],
    Xn = Wn[4],
    ei = Wn[5],
    ti = {
      BR: {
        hasDataset: !0,
        labels: ((In = {}), (In[Xn] = "state"), In),
        placeholders: ((jn = {}), (jn[Xn] = "select.state"), jn),
      },
      CA: {
        hasDataset: !0,
        labels:
          ((On = {}),
          (On[Zn] = "apartmentSuite"),
          (On[Xn] = "provinceOrTerritory"),
          (On[Jn] = "address"),
          On),
        optionalFields: [Zn],
        schema: [
          ei,
          Jn,
          Zn,
          [
            [$n, 70],
            [Qn, 30],
          ],
          Xn,
        ],
      },
      GB: {
        labels: ((En = {}), (En[$n] = "cityTown"), En),
        schema: [
          ei,
          [
            [Zn, 30],
            [Jn, 70],
          ],
          [
            [$n, 70],
            [Qn, 30],
          ],
          Xn,
        ],
      },
      US: {
        hasDataset: !0,
        labels:
          ((Rn = {}),
          (Rn[Qn] = "zipCode"),
          (Rn[Zn] = "apartmentSuite"),
          (Rn[Xn] = "state"),
          (Rn[Jn] = "address"),
          Rn),
        optionalFields: [Zn],
        placeholders: ((Ln = {}), (Ln[Xn] = "select.state"), Ln),
        schema: [
          ei,
          Jn,
          Zn,
          $n,
          [
            [Xn, 50],
            [Qn, 50],
          ],
        ],
      },
      default: {
        placeholders: ((Vn = {}), (Vn[Xn] = "select.provinceOrTerritory"), Vn),
        schema: [
          ei,
          [
            [Jn, 70],
            [Zn, 30],
          ],
          [
            [Qn, 30],
            [$n, 70],
          ],
          Xn,
        ],
      },
    },
    ai = (function () {
      function e(e) {
        this.specifications = wt(wt({}, ti), e);
      }
      return (
        (e.prototype.countryHasDataset = function (e) {
          var t, a;
          return !!(null ===
            (a =
              null === (t = this.specifications) || void 0 === t
                ? void 0
                : t[e]) || void 0 === a
            ? void 0
            : a.hasDataset);
        }),
        (e.prototype.countryHasOptionalField = function (e, t) {
          var a, r, n;
          return !!(null ===
            (n =
              null ===
                (r =
                  null === (a = this.specifications) || void 0 === a
                    ? void 0
                    : a[e]) || void 0 === r
                ? void 0
                : r.optionalFields) || void 0 === n
            ? void 0
            : n.includes(t));
        }),
        (e.prototype.getAddressSchemaForCountry = function (e) {
          var t, a;
          return (
            (null ===
              (a =
                null === (t = this.specifications) || void 0 === t
                  ? void 0
                  : t[e]) || void 0 === a
              ? void 0
              : a.schema) || this.specifications.default.schema
          );
        }),
        (e.prototype.getKeyForField = function (e, t) {
          var a, r, n;
          return (
            (null ===
              (n =
                null ===
                  (r =
                    null === (a = this.specifications) || void 0 === a
                      ? void 0
                      : a[t]) || void 0 === r
                  ? void 0
                  : r.labels) || void 0 === n
              ? void 0
              : n[e]) || e
          );
        }),
        (e.prototype.getPlaceholderKeyForField = function (e, t) {
          var a, r, n, i, o, l;
          return (
            (null ===
              (n =
                null ===
                  (r =
                    null === (a = this.specifications) || void 0 === a
                      ? void 0
                      : a[t]) || void 0 === r
                  ? void 0
                  : r.placeholders) || void 0 === n
              ? void 0
              : n[e]) ||
            (null ===
              (l =
                null ===
                  (o =
                    null === (i = this.specifications) || void 0 === i
                      ? void 0
                      : i.default) || void 0 === o
                  ? void 0
                  : o.placeholders) || void 0 === l
              ? void 0
              : l[e])
          );
        }),
        e
      );
    })();
  function ri(e) {
    var t = e.label,
      a = void 0 === t ? "" : t,
      r = e.requiredFields,
      n = e.visibility,
      i = qa(
        function () {
          return new ai(e.specifications);
        },
        [e.specifications]
      ),
      o = en({
        schema: r,
        defaultData: e.data,
        rules: e.validationRules || ln(i),
      }),
      l = o.data,
      s = o.errors,
      d = o.valid,
      c = o.isValid,
      u = o.handleChangeFor,
      p = o.triggerValidation;
    if (
      (Ua(
        function () {
          var e = i.countryHasDataset(l.country) ? "" : "N/A";
          u("stateOrProvince", "input")(e);
        },
        [l.country]
      ),
      Ua(function () {
        var e = r.includes("stateOrProvince"),
          t = l.country && i.countryHasDataset(l.country),
          a = e && t,
          n = l.stateOrProvince || (a ? "" : "N/A");
        u("stateOrProvince", "input")(n);
      }, []),
      Ua(
        function () {
          var t = Wn.reduce(function (t, a) {
            var n,
              i = r.includes(a) || l[a] || !e.data[a] ? "N/A" : e.data[a];
            return wt(
              wt({}, t),
              (((n = {})[a] = r.includes(a) || l[a] ? l[a] : i), n)
            );
          }, {});
          e.onChange({ data: t, valid: d, errors: s, isValid: c });
        },
        [l, d, s, c]
      ),
      (this.showValidation = p),
      "hidden" === n)
    )
      return null;
    if ("readOnly" === n) return Qt(on, { data: l, label: a });
    var m = function (t, a) {
      var n = a.classNameModifiers,
        o = void 0 === n ? [] : n;
      return r.includes(t)
        ? Qt(Yn, {
            key: t,
            allowedCountries: e.allowedCountries,
            classNameModifiers: St(St([], o), [t]),
            data: l,
            errors: s,
            fieldName: t,
            onInput: u(t, "input"),
            onDropdownChange: u(t, "blur"),
            specifications: i,
          })
        : null;
    };
    return Qt(
      gr,
      { classNameModifiers: [a], label: a },
      i.getAddressSchemaForCountry(l.country).map(function (e) {
        return e instanceof Array
          ? Qt(
              "div",
              { className: "adyen-checkout__field-group" },
              e.map(function (e) {
                var t = e[0],
                  a = e[1];
                return m(t, { classNameModifiers: ["col-" + a] });
              })
            )
          : m(e, {});
      })
    );
  }
  function ni(e) {
    var t,
      a,
      r = e.errorMessage,
      n = e.label,
      i = e.onChange,
      o = Pt(e, ["errorMessage", "label", "onChange"]);
    return Qt(
      Cr,
      { classNameModifiers: ["consentCheckbox"], errorMessage: r },
      Qt(Br, {
        name: "consentCheckbox",
        classNameModifiers: St(
          St(
            [],
            null !== (t = o.classNameModifiers) && void 0 !== t
              ? t
              : (o.classNameModifiers = [])
          ),
          ["consentCheckbox"]
        ),
        onInput: i,
        value:
          null === (a = null == o ? void 0 : o.data) || void 0 === a
            ? void 0
            : a.consentCheckbox,
        label: n,
        checked: o.checked,
      })
    );
  }
  ri.defaultProps = {
    countryCode: null,
    data: {},
    onChange: function () {},
    visibility: "editable",
    requiredFields: Wn,
    specifications: {},
  };
  var ii = [
      "companyDetails",
      "personalDetails",
      "billingAddress",
      "deliveryAddress",
    ],
    oi = function (e, t) {
      return (
        void 0 === t && (t = {}),
        ii.reduce(function (a, r) {
          var n,
            i = "hidden" !== e[r],
            o = "deliveryAddress" === r,
            l = "hidden" === (null == e ? void 0 : e.billingAddress);
          return (
            (a[r] =
              i &&
              (!o ||
                l ||
                (void 0 === (n = t[r]) && (n = {}),
                Object.keys(n).length > 1))),
            a
          );
        }, {})
      );
    };
  function li(e) {
    var t = e.countryCode,
      a = e.visibility,
      r = er().i18n,
      n = La(oi(a, e.data)),
      i = n[0],
      o = n[1],
      l = ii.reduce(function (e, t) {
        return (e[t] = { current: null }), e;
      }, {}),
      s = !!e.consentCheckboxLabel,
      d =
        !s &&
        Object.keys(i).every(function (e) {
          return !i[e];
        }),
      c = "editable" === a.deliveryAddress && "hidden" !== a.billingAddress,
      u = La(wt(wt({}, e.data), s && { consentCheckbox: !1 })),
      p = u[0],
      m = u[1],
      h = La({}),
      f = h[0],
      y = h[1],
      b = La({}),
      v = b[0],
      g = b[1],
      k = La("ready"),
      C = k[0],
      _ = k[1];
    (this.setStatus = _),
      Ua(
        function () {
          var t = Object.keys(i).every(function (e) {
              return !i[e] || !!v[e];
            }),
            a = !s || !!v.consentCheckbox,
            r = t && a,
            n = (function (e, t) {
              return Object.keys(t)
                .filter(function (t) {
                  return e[t];
                })
                .reduce(function (e, a) {
                  return (e[a] = t[a]), e;
                }, {});
            })(i, p);
          e.onChange({ data: n, errors: f, valid: v, isValid: r });
        },
        [p, i]
      );
    var N = function (e) {
      return function (t) {
        m(function (a) {
          var r;
          return wt(wt({}, a), (((r = {})[e] = t.data), r));
        }),
          g(function (a) {
            var r;
            return wt(wt({}, a), (((r = {})[e] = t.isValid), r));
          }),
          y(function (a) {
            var r;
            return wt(wt({}, a), (((r = {})[e] = t.errors), r));
          });
      };
    };
    return (
      (this.showValidation = function () {
        ii.forEach(function (e) {
          l[e].current && l[e].current.showValidation();
        }),
          y(wt({}, s && { consentCheckbox: !p.consentCheckbox }));
      }),
      Qt(
        "div",
        { className: "adyen-checkout__open-invoice" },
        i.companyDetails &&
          Qt(tn, {
            data: e.data.companyDetails,
            label: "companyDetails",
            onChange: N("companyDetails"),
            ref: l.companyDetails,
            visibility: a.companyDetails,
          }),
        i.personalDetails &&
          Qt(nn, {
            data: e.data.personalDetails,
            requiredFields: e.personalDetailsRequiredFields,
            label: "personalDetails",
            onChange: N("personalDetails"),
            ref: l.personalDetails,
            visibility: a.personalDetails,
          }),
        i.billingAddress &&
          Qt(ri, {
            allowedCountries: e.allowedCountries,
            countryCode: t,
            data: p.billingAddress,
            label: "billingAddress",
            onChange: N("billingAddress"),
            ref: l.billingAddress,
            visibility: a.billingAddress,
          }),
        c &&
          Qt(Br, {
            label: r.get("separateDeliveryAddress"),
            checked: i.deliveryAddress,
            classNameModifiers: ["separateDeliveryAddress"],
            name: "separateDeliveryAddress",
            onChange: function () {
              o(function (e) {
                return wt(wt({}, e), { deliveryAddress: !i.deliveryAddress });
              });
            },
          }),
        i.deliveryAddress &&
          Qt(ri, {
            allowedCountries: e.allowedCountries,
            countryCode: t,
            data: p.deliveryAddress,
            label: "deliveryAddress",
            onChange: N("deliveryAddress"),
            ref: l.deliveryAddress,
            visibility: a.deliveryAddress,
          }),
        s &&
          Qt(ni, {
            data: p,
            errorMessage: !!f.consentCheckbox,
            label: e.consentCheckboxLabel,
            onChange: function (e) {
              var t = e.target.checked;
              m(function (e) {
                return wt(wt({}, e), { consentCheckbox: t });
              }),
                g(function (e) {
                  return wt(wt({}, e), { consentCheckbox: t });
                }),
                y(function (e) {
                  return wt(wt({}, e), { consentCheckbox: !t });
                });
            },
          }),
        e.showPayButton &&
          e.payButton({
            status: C,
            classNameModifiers: St([], d ? ["standalone"] : []),
            label: r.get("confirmPurchase"),
          })
      )
    );
  }
  var si = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (t.state = { loaded: !1 }), t;
      }
      return (
        Nt(t, e),
        (t.prototype.componentDidMount = function () {
          var e = this;
          this.props.i18n
            ? this.props.i18n.loaded.then(function () {
                e.setState({ loaded: !0 });
              })
            : this.setState({ loaded: !0 });
        }),
        (t.prototype.render = function (e) {
          var t = e.children;
          return this.state.loaded
            ? Qt(
                Xa.Provider,
                {
                  value: {
                    i18n: this.props.i18n,
                    loadingContext: this.props.loadingContext,
                  },
                },
                la(t)
              )
            : null;
        }),
        t
      );
    })(ea),
    di = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return !!this.state.isValid;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.formatProps = function (e) {
          var a,
            r,
            n =
              e.countryCode ||
              (null ===
                (r =
                  null === (a = e.data) || void 0 === a
                    ? void 0
                    : a.billingAddress) || void 0 === r
                ? void 0
                : r.countryCode);
          return wt(wt({}, e), {
            allowedCountries: [n],
            visibility: wt(wt({}, t.defaultProps.visibility), e.visibility),
            data: wt(wt({}, e.data), {
              billingAddress: wt(wt({}, e.data.billingAddress), { country: n }),
              deliveryAddress: wt(wt({}, e.data.deliveryAddress), {
                country: n,
              }),
            }),
          });
        }),
        (t.prototype.formatData = function () {
          var e = this.state.data,
            t = void 0 === e ? {} : e,
            a = t.companyDetails,
            r = void 0 === a ? {} : a,
            n = t.personalDetails,
            i = void 0 === n ? {} : n,
            o = t.billingAddress,
            l = t.deliveryAddress;
          return wt(
            wt(
              wt(wt({ paymentMethod: { type: this.constructor.type } }, i), r),
              o && { billingAddress: o }
            ),
            (l || o) && { deliveryAddress: l || o }
          );
        }),
        (t.prototype.render = function () {
          var e = this;
          return Qt(
            si,
            {
              i18n: this.props.i18n,
              loadingContext: this.props.loadingContext,
            },
            Qt(
              li,
              wt(
                {
                  ref: function (t) {
                    e.componentRef = t;
                  },
                },
                this.props,
                this.state,
                {
                  consentCheckbox: this.props.consentCheckbox,
                  onChange: this.setState,
                  onSubmit: this.submit,
                  payButton: this.payButton,
                }
              )
            )
          );
        }),
        (t.defaultProps = {
          onChange: function () {},
          data: {
            companyDetails: {},
            personalDetails: {},
            billingAddress: {},
            deliveryAddress: {},
          },
          visibility: {
            companyDetails: "hidden",
            personalDetails: "editable",
            billingAddress: "editable",
            deliveryAddress: "editable",
          },
        }),
        t
      );
    })(rr);
  function ci(e) {
    var t = er().i18n,
      a = t.get("paymentConditions"),
      r = t.get("afterPay.agreement").split("%@"),
      n = r[0],
      i = r[1];
    return n && i
      ? Qt(
          Xt,
          null,
          n,
          Qt(
            "a",
            {
              className: "adyen-checkout__link",
              target: "_blank",
              rel: "noopener noreferrer",
              href: e.url,
            },
            a
          ),
          i
        )
      : Qt(
          "span",
          { className: "adyen-checkout__checkbox__label" },
          t.get("privacyPolicy")
        );
  }
  var ui = ["BE", "NL"];
  var pi = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (t) {
          var a, r, n;
          return wt(wt({}, e.prototype.formatProps.call(this, t)), {
            allowedCountries: t.countryCode ? [t.countryCode] : ui,
            consentCheckboxLabel: Qt(ci, {
              url:
                ((r = t.countryCode),
                (n = null === (a = t.i18n) || void 0 === a ? void 0 : a.locale),
                "en" === (null == n ? void 0 : n.toLowerCase().slice(0, 2))
                  ? "https://www.afterpay.nl/en/algemeen/pay-with-afterpay/payment-conditions"
                  : "be" === (null == r ? void 0 : r.toLowerCase())
                  ? "https://www.afterpay.be/be/footer/betalen-met-afterpay/betalingsvoorwaarden"
                  : "https://www.afterpay.nl/nl/algemeen/betalen-met-afterpay/betalingsvoorwaarden"),
            }),
          });
        }),
        (t.type = "afterpay_default"),
        t
      );
    })(di),
    mi = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (t) {
          return wt(wt({}, e.prototype.formatProps.call(this, t)), {
            allowedCountries: t.countryCode ? [t.countryCode] : ui,
            consentCheckboxLabel: Qt(ci, {
              url: "https://www.afterpay.nl/nl/algemeen/zakelijke-partners/betalingsvoorwaarden-zakelijk",
            }),
          });
        }),
        (t.type = "afterpay_b2b"),
        (t.defaultProps = {
          onChange: function () {},
          data: {
            companyDetails: {},
            personalDetails: {},
            billingAddress: {},
            deliveryAddress: {},
          },
          visibility: {
            companyDetails: "editable",
            personalDetails: "editable",
            billingAddress: "editable",
            deliveryAddress: "editable",
          },
        }),
        t
      );
    })(di);
  function hi() {
    var e = ga(window, "screen.colorDepth") || "",
      t =
        !!ga(window, "navigator.javaEnabled") && window.navigator.javaEnabled(),
      a = ga(window, "screen.height") || "",
      r = ga(window, "screen.width") || "",
      n = ga(window, "navigator.userAgent") || "";
    return {
      acceptHeader: "*/*",
      colorDepth: e,
      language:
        ga(window, "navigator.language") ||
        ga(window, "navigator.browserLanguage"),
      javaEnabled: t,
      screenHeight: a,
      screenWidth: r,
      userAgent: n,
      timeZoneOffset: new Date().getTimezoneOffset(),
    };
  }
  var fi = ["en_GB", "de_DE", "fr_FR", "it_IT", "es_ES"],
    yi = ["en_US"];
  function bi(e, t) {
    return (function (e) {
      return "US" === e ? yi : fi;
    })(t).includes(e)
      ? e
      : (function (e) {
          return "US" === e ? "en_US" : "en_GB";
        })(t);
  }
  function vi(e) {
    return "noTagline" === e ? "C0001" : null;
  }
  function gi(e) {
    var t = e.amount,
      a = e.addressDetails,
      r = e.cancelUrl,
      n = e.checkoutMode,
      i = e.deliverySpecifications,
      o = e.returnUrl,
      l = e.merchantMetadata,
      s = e.configuration.storeId,
      d = "ProcessOrder" === n,
      c = d
        ? (function (e) {
            return {
              amount: String(Ht(e.value, e.currency)),
              currencyCode: e.currency,
            };
          })(t)
        : null;
    return wt(
      wt(
        wt(
          wt(
            {
              storeId: s,
              webCheckoutDetails: wt(
                wt(
                  wt(
                    {},
                    d
                      ? { checkoutResultReturnUrl: o }
                      : { checkoutReviewReturnUrl: o }
                  ),
                  r && { checkoutCancelUrl: r }
                ),
                d && { checkoutMode: n }
              ),
            },
            d && {
              paymentDetails: { chargeAmount: c, paymentIntent: "Confirm" },
            }
          ),
          l && { merchantMetadata: l }
        ),
        i && { deliverySpecifications: i }
      ),
      a && { addressDetails: a }
    );
  }
  function ki(e, t, a) {
    return Kn(
      {
        loadingContext: e,
        path: "v1/AmazonPayUtility/getCheckoutDetails?clientKey=" + t,
      },
      a
    );
  }
  function Ci(e) {
    var t = this,
      a = er().loadingContext,
      r = e.amazonRef,
      n = e.configuration,
      i = void 0 === n ? {} : n,
      o = La(null),
      l = o[0],
      s = o[1],
      d = gi(e),
      c = (function (e) {
        var t;
        return wt(
          wt(
            wt({}, e.buttonColor && { buttonColor: e.buttonColor }),
            e.design && { design: vi(e.design) }
          ),
          {
            checkoutLanguage: bi(e.locale, e.region),
            ledgerCurrency:
              e.currency ||
              (null === (t = e.amount) || void 0 === t ? void 0 : t.currency),
            merchantId: e.configuration.merchantId,
            productType: e.productType,
            placement: e.placement,
            sandbox: "TEST" === e.environment,
          }
        );
      })(e),
      u = function () {
        new Promise(e.onClick).then(t.initCheckout).catch(function (a) {
          e.onError(a, t.componentRef);
        });
      };
    return (
      (this.initCheckout = function () {
        var e = {
          payloadJSON: JSON.stringify(d),
          publicKeyId: i.publicKeyId,
          signature: l,
        };
        r.Pay.initCheckout(wt(wt({}, c), { createCheckoutSessionConfig: e }));
      }),
      Ua(function () {
        var n = e.clientKey;
        (function (e, t, a) {
          var r = {
              loadingContext: e,
              path: "v1/AmazonPayUtility/signString?clientKey=" + t,
            },
            n = { stringToSign: JSON.stringify(a) };
          return Kn(r, n);
        })(a, n, d)
          .then(function (t) {
            if (!(null == t ? void 0 : t.signature))
              return console.error("Could not get AmazonPay signature");
            s(t.signature),
              e.showPayButton &&
                r.Pay.renderButton("#amazonPayButton", c).onClick(u);
          })
          .catch(function (a) {
            console.error(a), e.onError && e.onError(a, t.componentRef);
          });
      }, []),
      e.showPayButton
        ? Qt("div", {
            className: "adyen-checkout__amazonpay__button",
            id: "amazonPayButton",
          })
        : null
    );
  }
  function _i(e) {
    var t = er().i18n,
      a = e.amazonRef,
      r = e.amazonCheckoutSessionId;
    return (
      Ua(function () {
        var e = { amazonCheckoutSessionId: r, changeAction: "changeAddress" };
        a.Pay.bindChangeAction(
          ".adyen-checkout__amazonpay__button--changeAddress",
          e
        );
      }, []),
      Qt(
        "button",
        {
          type: "button",
          className:
            "adyen-checkout__button adyen-checkout__button--ghost adyen-checkout__amazonpay__button--changeAddress",
        },
        t.get("amazonpay.changePaymentDetails")
      )
    );
  }
  function Ni(e) {
    var t = this,
      a = er(),
      r = a.i18n,
      n = a.loadingContext;
    return (
      (this.createOrder = function () {
        var a = e.amazonCheckoutSessionId,
          r = e.amount,
          i = e.clientKey,
          o = e.returnUrl;
        (function (e, t, a) {
          return Kn(
            {
              loadingContext: e,
              path: "v1/AmazonPayUtility/updateCheckoutSession?clientKey=" + t,
            },
            a
          );
        })(n, i, {
          amount: r,
          checkoutResultReturnUrl: o,
          checkoutSessionId: a,
        })
          .then(function (e) {
            var t;
            if (
              !(null === (t = null == e ? void 0 : e.action) || void 0 === t
                ? void 0
                : t.type)
            )
              return console.error(
                e.errorMessage || "Could not get the AmazonPay URL"
              );
            "redirect" === e.action.type &&
              window.location.assign(e.action.url);
          })
          .catch(function (a) {
            e.onError && e.onError(a, t.componentRef);
          });
      }),
      Qt(tr, {
        classNameModifiers: ["standalone", "pay"],
        label: r.get("confirmPurchase"),
        onClick: this.createOrder,
      })
    );
  }
  function wi(e) {
    return Qt(
      "button",
      {
        type: "button",
        className:
          "adyen-checkout__button  adyen-checkout__button--ghost adyen-checkout__amazonpay__button--signOut",
        onClick: function () {
          new Promise(e.onSignOut)
            .then(function () {
              e.amazonRef.Pay.signout();
            })
            .catch(console.error);
        },
      },
      er().i18n.get("amazonpay.signout")
    );
  }
  var Pi = function (e, t) {
    var a = this;
    void 0 === t && (t = "body"),
      (this.load = function () {
        return new Promise(function (e, t) {
          (a.script.src = a.src),
            (a.script.async = !0),
            (a.script.onload = e),
            (a.script.onerror = function () {
              a.remove(), t(new Error("Unable to load script " + a.src));
            }),
            document.querySelector(a.node).appendChild(a.script);
        });
      }),
      (this.remove = function () {
        return a.script.remove();
      }),
      (this.script = document.createElement("script")),
      (this.src = e),
      (this.node = t);
  };
  function Fi(e) {
    var t = La("pending"),
      a = t[0],
      r = t[1],
      n = Ha(null),
      i = Ha(null),
      o = function () {
        r("ready");
      };
    return (
      (this.submit = function () {
        return n.current && n.current.initCheckout
          ? n.current.initCheckout()
          : i.current && i.current.createOrder
          ? i.current.createOrder()
          : void 0;
      }),
      Ua(function () {
        var t =
            "US" === e.region
              ? "https://static-na.payments-amazon.com/checkout.js"
              : "https://static-eu.payments-amazon.com/checkout.js",
          a = new Pi(t);
        return (
          a.load().then(o),
          function () {
            a.remove();
          }
        );
      }, []),
      "pending" === a
        ? Qt(
            "div",
            { className: "adyen-checkout__amazonpay" },
            Qt(
              "div",
              {
                className:
                  "adyen-checkout__amazonpay__status adyen-checkout__amazonpay__status--pending",
              },
              Qt(Ba, null)
            )
          )
        : e.showSignOutButton
        ? Qt(
            "div",
            { className: "adyen-checkout__amazonpay" },
            Qt(wi, { amazonRef: window.amazon, onSignOut: e.onSignOut })
          )
        : e.amazonCheckoutSessionId
        ? Qt(
            "div",
            { className: "adyen-checkout__amazonpay" },
            e.showOrderButton &&
              Qt(Ni, {
                amazonCheckoutSessionId: e.amazonCheckoutSessionId,
                amount: e.amount,
                clientKey: e.clientKey,
                onError: e.onError,
                returnUrl: e.returnUrl,
                ref: i,
              }),
            e.showChangePaymentDetailsButton &&
              Qt(_i, {
                amazonCheckoutSessionId: e.amazonCheckoutSessionId,
                amazonRef: window.amazon,
              })
          )
        : Qt(
            "div",
            { className: "adyen-checkout__amazonpay" },
            Qt(Ci, wt({}, e, { amazonRef: window.amazon, ref: n }))
          )
    );
  }
  var Di = {
      cancelUrl: window.location.href,
      configuration: {},
      environment: "TEST",
      locale: "en_GB",
      placement: "Cart",
      productType: "PayAndShip",
      region: "EU",
      returnUrl: window.location.href,
      showOrderButton: !0,
      showChangePaymentDetailsButton: !1,
      showSignOutButton: !1,
      showPayButton: !0,
      onClick: function (e) {
        return e();
      },
      onSignOut: function (e) {
        return e();
      },
    },
    Si = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (e) {
          return wt(wt({}, e), {
            checkoutMode: e.isDropin ? "ProcessOrder" : e.checkoutMode,
            environment: e.environment.toUpperCase(),
            locale: e.locale.replace("-", "_"),
            productType:
              e.isDropin && !e.addressDetails ? "PayOnly" : e.productType,
            region: e.region.toUpperCase(),
          });
        }),
        (t.prototype.formatData = function () {
          var e = this.props.amazonCheckoutSessionId;
          return {
            paymentMethod: wt({ type: t.type }, e && { checkoutSessionId: e }),
            browserInfo: this.browserInfo,
          };
        }),
        (t.prototype.getShopperDetails = function () {
          var e = this.props,
            t = e.amazonCheckoutSessionId,
            a = e.configuration,
            r = void 0 === a ? {} : a,
            n = e.loadingContext,
            i = e.clientKey;
          return t
            ? ki(n, i, {
                checkoutSessionId: t,
                getDeliveryAddress: !0,
                publicKeyId: r.publicKeyId,
              })
            : console.error(
                "Could not shopper details. Missing checkoutSessionId."
              );
        }),
        (t.prototype.handleDeclineFlow = function () {
          var e = this,
            t = this.props,
            a = t.amazonCheckoutSessionId,
            r = t.configuration,
            n = void 0 === r ? {} : r,
            i = t.loadingContext,
            o = t.clientKey;
          if (!a)
            return console.error(
              "Could handle the decline flow. Missing checkoutSessionId."
            );
          ki(i, o, {
            checkoutSessionId: a,
            getDeclineFlowUrl: !0,
            publicKeyId: n.publicKeyId,
          })
            .then(function (e) {
              if (
                (void 0 === e && (e = {}),
                !(null == e ? void 0 : e.declineFlowUrl))
              )
                throw e;
              window.location.assign(e.declineFlowUrl);
            })
            .catch(function (t) {
              e.props.onError && e.props.onError(t, e.componentRef);
            });
        }),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return !0;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "browserInfo", {
          get: function () {
            return hi();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.submit = function () {
          var e = this.data,
            t = this.isValid,
            a = this.props.onSubmit,
            r = void 0 === a ? function () {} : a;
          return this.componentRef && this.componentRef.submit
            ? this.componentRef.submit()
            : r({ data: e, isValid: t }, this);
        }),
        (t.prototype.render = function () {
          var e = this;
          return Qt(
            si,
            {
              i18n: this.props.i18n,
              loadingContext: this.props.loadingContext,
            },
            Qt(
              Fi,
              wt(
                {
                  ref: function (t) {
                    e.componentRef = t;
                  },
                },
                this.props
              )
            )
          );
        }),
        (t.type = "amazonpay"),
        (t.defaultProps = Di),
        t
      );
    })(rr),
    Ai = {
      "apple-pay-button": "ApplePayButton-module_apple-pay-button__26P3-",
      "apple-pay-button-black":
        "ApplePayButton-module_apple-pay-button-black__3Ml54",
      "apple-pay-button-white":
        "ApplePayButton-module_apple-pay-button-white__1qE8A",
      "apple-pay-button-white-with-line":
        "ApplePayButton-module_apple-pay-button-white-with-line__j9FE5",
      "apple-pay-button--type-plain":
        "ApplePayButton-module_apple-pay-button--type-plain__2mnnX",
      "apple-pay-button--type-buy":
        "ApplePayButton-module_apple-pay-button--type-buy__eMnIy",
      "apple-pay-button--type-donate":
        "ApplePayButton-module_apple-pay-button--type-donate__3zvI8",
      "apple-pay-button--type-check-out":
        "ApplePayButton-module_apple-pay-button--type-check-out__ipg0J",
      "apple-pay-button--type-book":
        "ApplePayButton-module_apple-pay-button--type-book__155Xs",
      "apple-pay-button--type-subscribe":
        "ApplePayButton-module_apple-pay-button--type-subscribe__3uPJ5",
      "apple-pay-button--type-add-money":
        "ApplePayButton-module_apple-pay-button--type-add-money__xmCaj",
      "apple-pay-button--type-contribute":
        "ApplePayButton-module_apple-pay-button--type-contribute__RCq2P",
      "apple-pay-button--type-order":
        "ApplePayButton-module_apple-pay-button--type-order__f5tpZ",
      "apple-pay-button--type-reload":
        "ApplePayButton-module_apple-pay-button--type-reload__1P53C",
      "apple-pay-button--type-rent":
        "ApplePayButton-module_apple-pay-button--type-rent__2J4wk",
      "apple-pay-button--type-support":
        "ApplePayButton-module_apple-pay-button--type-support__3-p0R",
      "apple-pay-button--type-tip":
        "ApplePayButton-module_apple-pay-button--type-tip__2-gCt",
      "apple-pay-button--type-top-up":
        "ApplePayButton-module_apple-pay-button--type-top-up__9UKXI",
    },
    xi = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.render = function (e) {
          var t = e.buttonColor,
            a = e.buttonType;
          return Qt("button", {
            type: "button",
            "aria-label": this.props.i18n.get("payButton"),
            lang: this.props.i18n.languageCode,
            className: xa(
              "adyen-checkout__applepay__button",
              "adyen-checkout__applepay__button--" + t,
              "adyen-checkout__applepay__button--" + a,
              [Ai["apple-pay-button"]],
              [Ai["apple-pay-button-" + t]],
              [Ai["apple-pay-button--type-" + a]]
            ),
            onClick: this.props.onClick,
          });
        }),
        (t.defaultProps = {
          onClick: function () {},
          buttonColor: "black",
          buttonType: "plain",
        }),
        t
      );
    })(ea),
    Bi = (function () {
      function e(e, t) {
        var a = this;
        (this.session = new ApplePaySession(t.version, e)),
          (this.session.onvalidatemerchant = function (e) {
            return a.onvalidatemerchant(e, t.onValidateMerchant);
          }),
          (this.session.onpaymentauthorized = function (e) {
            return a.onpaymentauthorized(e, t.onPaymentAuthorized);
          }),
          (this.session.oncancel = function (e) {
            return a.oncancel(e, t.onCancel);
          }),
          "function" == typeof t.onPaymentMethodSelected &&
            (this.session.onpaymentmethodselected = function (e) {
              return a.onpaymentmethodselected(e, t.onPaymentMethodSelected);
            }),
          "function" == typeof t.onShippingContactSelected &&
            (this.session.onshippingcontactselected = function (e) {
              return a.onshippingcontactselected(
                e,
                t.onShippingContactSelected
              );
            }),
          "function" == typeof t.onShippingMethodSelected &&
            (this.session.onshippingmethodselected = function (e) {
              return a.onshippingmethodselected(e, t.onShippingMethodSelected);
            });
      }
      return (
        (e.prototype.begin = function () {
          return this.session.begin();
        }),
        (e.prototype.onvalidatemerchant = function (e, t) {
          var a = this;
          new Promise(function (a, r) {
            return t(a, r, e.validationURL);
          })
            .then(function (e) {
              a.session.completeMerchantValidation(e);
            })
            .catch(function (e) {
              console.error(e), a.session.abort();
            });
        }),
        (e.prototype.onpaymentauthorized = function (e, t) {
          var a = this;
          return new Promise(function (a, r) {
            return t(a, r, e);
          })
            .then(function () {
              a.session.completePayment(ApplePaySession.STATUS_SUCCESS);
            })
            .catch(function () {
              a.session.completePayment(ApplePaySession.STATUS_FAILURE);
            });
        }),
        (e.prototype.onpaymentmethodselected = function (e, t) {
          var a = this;
          return new Promise(function (a, r) {
            return t(a, r, e);
          })
            .then(function (e) {
              a.session.completePaymentMethodSelection(e);
            })
            .catch(function (e) {
              a.session.completePaymentMethodSelection(e);
            });
        }),
        (e.prototype.onshippingcontactselected = function (e, t) {
          var a = this;
          return new Promise(function (a, r) {
            return t(a, r, e);
          })
            .then(function (e) {
              a.session.completeShippingContactSelection(e);
            })
            .catch(function (e) {
              a.session.completeShippingContactSelection(e);
            });
        }),
        (e.prototype.onshippingmethodselected = function (e, t) {
          var a = this;
          return new Promise(function (a, r) {
            return t(a, r, e);
          })
            .then(function (e) {
              a.session.completeShippingMethodSelection(e);
            })
            .catch(function (e) {
              a.session.completeShippingMethodSelection(e);
            });
        }),
        (e.prototype.oncancel = function (e, t) {
          return t(e);
        }),
        e
      );
    })(),
    zi = {
      amount: { currency: "USD", value: 0 },
      countryCode: "US",
      totalPriceStatus: "final",
      totalPriceLabel: void 0,
      configuration: { merchantName: "", merchantId: "" },
      initiative: "web",
      lineItems: void 0,
      merchantCapabilities: ["supports3DS"],
      shippingMethods: void 0,
      shippingType: void 0,
      supportedCountries: void 0,
      supportedNetworks: ["amex", "discover", "masterCard", "visa"],
      requiredBillingContactFields: void 0,
      requiredShippingContactFields: void 0,
      billingContact: void 0,
      shippingContact: void 0,
      applicationData: void 0,
      onClick: function (e) {
        return e();
      },
      onSubmit: function () {},
      onError: function () {},
      onAuthorized: function (e) {
        return e();
      },
      onPaymentMethodSelected: null,
      onShippingContactSelected: null,
      onShippingMethodSelected: null,
      buttonType: "plain",
      buttonColor: "black",
      showPayButton: !0,
    },
    Ti = function (e) {
      var t = e.countryCode;
      e.companyName;
      var a = e.amount,
        r = Pt(e, ["countryCode", "companyName", "amount"]),
        n = (function (e) {
          return String(Ht(e.value, e.currency));
        })(a);
      return {
        countryCode: t,
        currencyCode: a.currency,
        total: {
          label: r.totalPriceLabel,
          amount: n,
          type: r.totalPriceStatus,
        },
        lineItems: r.lineItems,
        shippingMethods: r.shippingMethods,
        shippingType: r.shippingType,
        merchantCapabilities: r.merchantCapabilities,
        supportedCountries: r.supportedCountries,
        supportedNetworks: r.supportedNetworks,
        requiredShippingContactFields: r.requiredShippingContactFields,
        requiredBillingContactFields: r.requiredBillingContactFields,
        billingContact: r.billingContact,
        shippingContact: r.shippingContact,
        applicationData: r.applicationData,
      };
    };
  var Mi = (function (e) {
      function t(t) {
        var a = e.call(this, t) || this;
        return (
          (a.startSession = a.startSession.bind(a)),
          (a.submit = a.submit.bind(a)),
          (a.validateMerchant = a.validateMerchant.bind(a)),
          a
        );
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (e) {
          var t,
            a,
            r,
            n,
            i =
              e.version ||
              (function (e) {
                for (var t = [], a = e; a > 0; a--) t.push(a);
                return t.find(function (e) {
                  return (
                    e &&
                    window.ApplePaySession &&
                    ApplePaySession.supportsVersion(e)
                  );
                });
              })(10),
            o = (null === (t = e.brands) || void 0 === t ? void 0 : t.length)
              ? ((r = e.brands),
                (n = {
                  mc: "masterCard",
                  amex: "amex",
                  visa: "visa",
                  elodebit: "elo",
                  elo: "elo",
                  interac: "interac",
                  discover: "discover",
                  jcb: "jcb",
                  electron: "electron",
                  maestro: "maestro",
                }),
                r.reduce(function (e, t) {
                  return n[t] && !e.includes(n[t]) && e.push(n[t]), e;
                }, []))
              : e.supportedNetworks;
          return wt(wt({}, e), {
            configuration: e.configuration,
            supportedNetworks: o,
            version: i,
            totalPriceLabel:
              e.totalPriceLabel ||
              (null === (a = e.configuration) || void 0 === a
                ? void 0
                : a.merchantName),
            onCancel: function (t) {
              return e.onError(t);
            },
          });
        }),
        (t.prototype.formatData = function () {
          return { paymentMethod: wt({ type: t.type }, this.state) };
        }),
        (t.prototype.submit = function () {
          this.startPayment();
        }),
        (t.prototype.startPayment = function () {
          return Promise.resolve(this.startSession(this.props.onAuthorized));
        }),
        (t.prototype.startSession = function (e) {
          var t = this,
            a = this.props,
            r = a.version,
            n = a.onValidateMerchant,
            i = a.onSubmit,
            o = a.onCancel,
            l = a.onPaymentMethodSelected,
            s = a.onShippingMethodSelected,
            d = a.onShippingContactSelected;
          return new Promise(function (e, a) {
            return t.props.onClick(e, a);
          }).then(function () {
            var a = Ti(
              wt({ companyName: t.props.configuration.merchantName }, t.props)
            );
            new Bi(a, {
              version: r,
              onCancel: o,
              onPaymentMethodSelected: l,
              onShippingMethodSelected: s,
              onShippingContactSelected: d,
              onValidateMerchant: n || t.validateMerchant,
              onPaymentAuthorized: function (a, r, n) {
                n.payment.token &&
                  n.payment.token.paymentData &&
                  t.setState({
                    applePayToken: btoa(
                      JSON.stringify(n.payment.token.paymentData)
                    ),
                  }),
                  i({ data: t.data, isValid: t.isValid }, t),
                  e(a, r, n);
              },
            }).begin();
          });
        }),
        (t.prototype.validateMerchant = function (e, t) {
          return Ft(this, void 0, void 0, function () {
            var a, r, n, i, o, l, s, d, c, u, p, m, h;
            return Dt(this, function (f) {
              switch (f.label) {
                case 0:
                  (a = window.location.hostname),
                    (r = this.props),
                    (n = r.clientKey),
                    (i = r.configuration),
                    (o = r.loadingContext),
                    (l = r.initiative),
                    (s = i.merchantName),
                    (d = i.merchantId),
                    (c = {
                      loadingContext: o,
                      path: "v1/applePay/sessions?clientKey=" + n,
                    }),
                    (u = {
                      displayName: s,
                      domainName: a,
                      initiative: l,
                      merchantIdentifier: d,
                    }),
                    (f.label = 1);
                case 1:
                  return f.trys.push([1, 3, , 4]), [4, Kn(c, u)];
                case 2:
                  return (
                    (p = f.sent()),
                    (m = br.decode(p.data)) ||
                      t("Could not decode Apple Pay session"),
                    (h = JSON.parse(m)),
                    e(h),
                    [3, 4]
                  );
                case 3:
                  return f.sent(), t("Could not get Apple Pay session"), [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        }),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return !0;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.isAvailable = function () {
          return "https:" !== document.location.protocol
            ? Promise.reject(
                new Error(
                  "Trying to start an Apple Pay session from an insecure document"
                )
              )
            : this.props.onValidateMerchant || this.props.clientKey
            ? window.ApplePaySession &&
              ApplePaySession.canMakePayments() &&
              ApplePaySession.supportsVersion(this.props.version)
              ? Promise.resolve(ApplePaySession.canMakePayments())
              : Promise.reject(
                  new Error("Apple Pay is not available on this device")
                )
            : Promise.reject(new Error("clientKey was not provided"));
        }),
        (t.prototype.render = function () {
          var e = this;
          return this.props.showPayButton
            ? Qt(xi, {
                i18n: this.props.i18n,
                buttonColor: this.props.buttonColor,
                buttonType: this.props.buttonType,
                onClick: function (t) {
                  t.preventDefault(), e.submit();
                },
              })
            : null;
        }),
        (t.type = "applepay"),
        (t.defaultProps = zi),
        t
      );
    })(rr),
    Ii = function (e, t) {
      var a,
        r = e.issuer,
        n =
          null ===
            (a = e.items.find(function (e) {
              return e.id === r;
            })) || void 0 === a
            ? void 0
            : a.name;
      return r && n ? t.get("continueTo") + " " + n : t.get("continue");
    },
    ji = ["issuer"],
    Oi = {
      issuer: {
        validate: function (e) {
          return !!e && e.length > 0;
        },
        modes: ["blur"],
      },
    };
  function Ei(e) {
    var t = e.items,
      a = e.placeholder,
      r = e.issuer,
      n = Pt(e, ["items", "placeholder", "issuer"]),
      i = er().i18n,
      o = en({ schema: ji, defaultData: { issuer: r }, rules: Oi }),
      l = o.handleChangeFor,
      s = o.triggerValidation,
      d = o.data,
      c = o.valid,
      u = o.errors,
      p = o.isValid,
      m = La("ready"),
      h = m[0],
      f = m[1];
    return (
      (this.setStatus = function (e) {
        f(e);
      }),
      Ua(
        function () {
          n.onChange({ data: d, valid: c, errors: u, isValid: p });
        },
        [d, c, u, p]
      ),
      (this.showValidation = function () {
        s();
      }),
      Qt(
        "div",
        { className: "adyen-checkout__issuer-list" },
        Qt(
          Cr,
          { errorMessage: !!u.issuer, classNameModifiers: ["issuer-list"] },
          qr("select", {
            items: t,
            selected: d.issuer,
            placeholder: i.get(a),
            name: "issuer",
            className: "adyen-checkout__issuer-list__dropdown",
            onChange: l("issuer"),
          })
        ),
        n.showPayButton &&
          n.payButton({
            status: h,
            label: Ii({ issuer: d.issuer, items: t }, i),
          })
      )
    );
  }
  Ei.defaultProps = {
    onChange: function () {},
    placeholder: "idealIssuer.selectField.placeholder",
  };
  var Ri = function (e, t) {
      return function (a) {
        if (!a) return null;
        var r = wt({ parentFolder: a ? t + "/" : "", type: a || t }, e);
        return Aa(r)(a);
      };
    },
    Li = (function (e) {
      function t(t) {
        var a = e.call(this, t) || this;
        if (a.props.showImage) {
          var r = Ri(
            { loadingContext: a.props.loadingContext },
            a.constructor.type
          );
          a.props.issuers = a.props.issuers.map(function (e) {
            return wt(wt({}, e), { icon: r(e.id) });
          });
        }
        return a;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (e) {
          var t =
            (e.details &&
              e.details.length &&
              (
                e.details.find(function (e) {
                  return "issuer" === e.key;
                }) || {}
              ).items) ||
            e.issuers ||
            [];
          return wt(wt({}, e), { issuers: t });
        }),
        (t.prototype.formatData = function () {
          var e, t;
          return {
            paymentMethod: {
              type: this.constructor.type,
              issuer:
                null ===
                  (t =
                    null === (e = this.state) || void 0 === e
                      ? void 0
                      : e.data) || void 0 === t
                  ? void 0
                  : t.issuer,
            },
          };
        }),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            var e;
            return !!(null === (e = this.state) || void 0 === e
              ? void 0
              : e.isValid);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.render = function () {
          var e = this;
          return Qt(
            si,
            {
              i18n: this.props.i18n,
              loadingContext: this.props.loadingContext,
            },
            Qt(
              Ei,
              wt(
                {
                  ref: function (t) {
                    e.componentRef = t;
                  },
                  items: this.props.issuers,
                },
                this.props,
                this.state,
                {
                  onChange: this.setState,
                  onSubmit: this.submit,
                  payButton: this.payButton,
                }
              )
            )
          );
        }),
        (t.defaultProps = {
          showImage: !0,
          onValid: function () {},
          issuers: [],
          loadingContext: Fa,
        }),
        t
      );
    })(rr),
    Vi = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (t) {
          return wt(wt({}, e.prototype.formatProps.call(this, t)), {
            showImage: !1,
          });
        }),
        (t.type = "billdesk_online"),
        t
      );
    })(Li),
    Ui = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (t) {
          return wt(wt({}, e.prototype.formatProps.call(this, t)), {
            showImage: !1,
            placeholder: "issuerList.wallet.placeholder",
          });
        }),
        (t.type = "billdesk_wallet"),
        t
      );
    })(Li),
    Ki = "encryptedCardNumber",
    Hi = "encryptedExpiryDate",
    qi = "encryptedExpiryMonth",
    Gi = "encryptedExpiryYear",
    Yi = "encryptedSecurityCode",
    Wi = "encryptedPassword",
    Ji = "giftcard",
    Zi = ["amex", "mc", "visa"],
    Qi = ["sepa", "sepadirectdebit", "ach", Ji],
    $i = "required",
    Xi = "optional",
    eo = "hidden",
    to = $i,
    ao = eo,
    ro = function (e, t) {
      return Aa({
        type: "card" === e ? "nocard" : e || "nocard",
        extension: "svg",
        loadingContext: t,
      })(e);
    },
    no = function (e) {
      return function (t) {
        return t.brand === e;
      };
    },
    io = function (e) {
      return e.brand.includes("plcc") || e.brand.includes("cbcc");
    },
    oo = {
      "card-input__wrapper": "CardInput-module_card-input__wrapper__2tAzu",
      "card-input__icon": "CardInput-module_card-input__icon__2Iaf5",
      "card-input__form": "CardInput-module_card-input__form__2Ij_n",
      "card-input__spinner": "CardInput-module_card-input__spinner__1wHzq",
      "card-input__spinner--active":
        "CardInput-module_card-input__spinner--active__1Dzoe",
      "card-input__form--loading":
        "CardInput-module_card-input__form--loading__3zh3Y",
      "adyen-checkout__input": "CardInput-module_adyen-checkout__input__3Jmld",
      "adyen-checkout__card__cvc__input--hidden":
        "CardInput-module_adyen-checkout__card__cvc__input--hidden__1Z1lp",
      "adyen-checkout__card__exp-date__input--hidden":
        "CardInput-module_adyen-checkout__card__exp-date__input--hidden__3850Y",
      "adyen-checkout__card__exp-cvc__exp-date__input--hidden":
        "CardInput-module_adyen-checkout__card__exp-cvc__exp-date__input--hidden__3wxr3",
      "revolving-plan-installments__disabled":
        "CardInput-module_revolving-plan-installments__disabled__2yP53",
    };
  function lo(e) {
    var t = e.brand,
      a = er().loadingContext;
    return Qt("img", {
      className:
        oo["card-input__icon"] + " adyen-checkout__card__cardNumber__brandIcon",
      onError: function (e) {
        e.target.style.cssText = "display: none";
      },
      alt: t,
      src: ro("card" === t ? "nocard" : t, a),
    });
  }
  var so = function (e) {
    var t = e.brand,
      a = e.onClick,
      r = e.dataValue,
      n = e.notSelected,
      i = er().loadingContext;
    return Qt("img", {
      className:
        oo["card-input__icon"] +
        " " +
        (n ? "adyen-checkout__card__cardNumber__brandIcon--not-selected" : "") +
        " adyen-checkout__card__cardNumber__brandIcon",
      onError: function (e) {
        e.target.style.cssText = "display: none";
      },
      alt: t,
      src: ro("card" === t ? "nocard" : t, i),
      onClick: a,
      "data-value": r,
    });
  };
  function co(e) {
    var t,
      a = er().i18n,
      r = e.error,
      n = void 0 === r ? "" : r,
      i = e.isValid,
      o = void 0 !== i && i,
      l = e.onFocusField,
      s = void 0 === l ? function () {} : l,
      d = e.dualBrandingElements,
      c = e.dualBrandingChangeHandler,
      u = e.dualBrandingSelected;
    return Qt(
      Cr,
      {
        label: e.label,
        focused: e.focused,
        filled: e.filled,
        classNameModifiers: ["cardNumber"],
        onFocusField: function () {
          return s("encryptedCardNumber");
        },
        errorMessage: n && a.get(n),
        isValid: o,
        dualBrandingElements: d,
      },
      Qt(
        "span",
        {
          "data-cse": "encryptedCardNumber",
          className: xa(
            ((t = {
              "adyen-checkout__input": !0,
              "adyen-checkout__input--large": !0,
              "adyen-checkout__card__cardNumber__input": !0,
            }),
            (t[oo["adyen-checkout__input"]] = !0),
            (t["adyen-checkout__input--error"] = n),
            (t["adyen-checkout__input--focus"] = e.focused),
            (t["adyen-checkout__input--valid"] = o),
            (t["adyen-checkout__card__cardNumber__input--noBrand"] =
              !e.showBrandIcon),
            t)
          ),
        },
        e.showBrandIcon && !d && Qt(lo, { brand: e.brand })
      ),
      d &&
        !n &&
        Qt(
          "div",
          {
            className: xa([
              "adyen-checkout__card__dual-branding__buttons",
              { "adyen-checkout__card__dual-branding__buttons--active": o },
            ]),
          },
          d.map(function (e) {
            return Qt(so, {
              key: e.id,
              brand: e.id,
              onClick: c,
              dataValue: e.id,
              notSelected: "" !== u && u !== e.id,
            });
          })
        )
    );
  }
  function uo(e) {
    var t = e.frontCVC,
      a = void 0 !== t && t;
    return Qt(
      "div",
      {
        className: xa({
          "adyen-checkout__card__cvc__hint__wrapper": !0,
          "adyen-checkout__field__cvc--front-hint": !!a,
          "adyen-checkout__field__cvc--back-hint": !a,
        }),
      },
      Qt(
        "svg",
        {
          className:
            "adyen-checkout__card__cvc__hint adyen-checkout__card__cvc__hint--front",
          width: "27",
          height: "18",
          viewBox: "0 0 27 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        Qt("path", {
          d: "M0 3C0 1.34315 1.34315 0 3 0H24C25.6569 0 27 1.34315 27 3V15C27 16.6569 25.6569 18 24 18H3C1.34315 18 0 16.6569 0 15V3Z",
          fill: "#E6E9EB",
        }),
        Qt("rect", {
          x: "4",
          y: "12",
          width: "19",
          height: "2",
          fill: "#B9C4C9",
        }),
        Qt("rect", {
          x: "4",
          y: "4",
          width: "4",
          height: "4",
          rx: "1",
          fill: "white",
        }),
        Qt("rect", {
          className: "adyen-checkout__card__cvc__hint__location",
          x: "16.5",
          y: "4.5",
          width: "7",
          height: "5",
          rx: "2.5",
          stroke: "#D10244",
        })
      ),
      Qt(
        "svg",
        {
          className:
            "adyen-checkout__card__cvc__hint adyen-checkout__card__cvc__hint--back",
          width: "27",
          height: "18",
          viewBox: "0 0 27 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        Qt("path", {
          d: "M27 4.00001V3.37501C27 2.4799 26.6444 1.62146 26.0115 0.988518C25.3786 0.355581 24.5201 0 23.625 0H3.375C2.47989 0 1.62145 0.355581 0.988514 0.988518C0.355579 1.62146 0 2.4799 0 3.37501V4.00001H27Z",
          fill: "#E6E9EB",
        }),
        Qt("path", {
          d: "M0 6.99994V14.6666C0 15.5507 0.355579 16.3985 0.988514 17.0237C1.62145 17.6488 2.47989 18 3.375 18H23.625C24.5201 18 25.3786 17.6488 26.0115 17.0237C26.6444 16.3985 27 15.5507 27 14.6666V6.99994H0Z",
          fill: "#E6E9EB",
        }),
        Qt("rect", {
          y: "4.00012",
          width: "27",
          height: "3.00001",
          fill: "#687282",
        }),
        Qt("path", {
          d: "M4 11C4 10.4477 4.44772 10 5 10H21C22.1046 10 23 10.8954 23 12C23 13.1046 22.1046 14 21 14H5C4.44771 14 4 13.5523 4 13V11Z",
          fill: "white",
        }),
        Qt("rect", {
          className: "adyen-checkout__card__cvc__hint__location",
          x: "16.5",
          y: "9.5",
          width: "7",
          height: "5",
          rx: "2.5",
          stroke: "#D10244",
        })
      )
    );
  }
  function po(e) {
    var t,
      a,
      r = e.label,
      n = e.onFocusField,
      i = void 0 === n ? function () {} : n,
      o = e.error,
      l = void 0 === o ? "" : o,
      s = e.className,
      d = void 0 === s ? "" : s,
      c = e.classNameModifiers,
      u = void 0 === c ? [] : c,
      p = e.focused,
      m = e.filled,
      h = e.isValid,
      f = e.frontCVC,
      y = void 0 !== f && f,
      b = e.cvcPolicy,
      v = void 0 === b ? $i : b,
      g = er().i18n,
      k = xa(
        d,
        (((t = { "adyen-checkout__field__cvc": !0 })[
          oo["adyen-checkout__card__cvc__input--hidden"]
        ] = v === eo),
        (t["adyen-checkout__field__cvc--optional"] = v === Xi),
        t)
      ),
      C = xa(
        (((a = {
          "adyen-checkout__input": !0,
          "adyen-checkout__input--small": !0,
          "adyen-checkout__card__cvc__input": !0,
          "adyen-checkout__input--error": l,
          "adyen-checkout__input--focus": p,
          "adyen-checkout__input--valid": h,
        })[oo["adyen-checkout__input"]] = !0),
        a)
      ),
      _ = v !== Xi ? r : g.get("creditCard.cvcField.title.optional");
    return Qt(
      Cr,
      {
        label: _,
        focused: p,
        filled: m,
        classNameModifiers: St(St([], u), ["securityCode"]),
        onFocusField: function () {
          return i("encryptedSecurityCode");
        },
        className: k,
        errorMessage: l && g.get(l),
        isValid: h,
      },
      Qt("span", { className: C, "data-cse": "encryptedSecurityCode" }),
      Qt(uo, { frontCVC: y })
    );
  }
  function mo(e) {
    var t,
      a = e.label,
      r = e.focused,
      n = e.filled,
      i = e.onFocusField,
      o = e.className,
      l = void 0 === o ? "" : o,
      s = e.error,
      d = void 0 === s ? "" : s,
      c = e.isValid,
      u = void 0 !== c && c,
      p = e.hideDateForBrand,
      m = void 0 !== p && p,
      h = er().i18n,
      f = xa(
        l,
        (((t = {})[oo["adyen-checkout__card__exp-date__input--hidden"]] = m), t)
      );
    return Qt(
      Cr,
      {
        label: a,
        classNameModifiers: ["expiryDate"],
        className: f,
        focused: r,
        filled: n,
        onFocusField: function () {
          return i("encryptedExpiryDate");
        },
        errorMessage: d && h.get(d),
        isValid: u,
      },
      Qt("span", {
        "data-cse": "encryptedExpiryDate",
        className: xa(
          "adyen-checkout__input",
          "adyen-checkout__input--small",
          "adyen-checkout__card__exp-date__input",
          [oo["adyen-checkout__input"]],
          {
            "adyen-checkout__input--error": d,
            "adyen-checkout__input--focus": r,
            "adyen-checkout__input--valid": u,
          }
        ),
      })
    );
  }
  function ho(e) {
    var t,
      a = e.brand,
      r = e.dualBrandingElements,
      n = e.dualBrandingChangeHandler,
      i = e.dualBrandingSelected,
      o = e.errors,
      l = e.focusedElement,
      s = e.hasCVC,
      d = e.cvcPolicy,
      c = e.hideDateForBrand,
      u = e.onFocusField,
      p = e.showBrandIcon,
      m = e.valid,
      h = er().i18n;
    return Qt(
      "div",
      { className: "adyen-checkout__card__form" },
      Qt(co, {
        brand: a,
        error: o.encryptedCardNumber,
        focused: "encryptedCardNumber" === l,
        isValid: !!m.encryptedCardNumber,
        label: h.get("creditCard.numberField.title"),
        onFocusField: u,
        filled: !!o.encryptedCardNumber || !!m.encryptedCardNumber,
        showBrandIcon: p,
        dualBrandingElements: r,
        dualBrandingChangeHandler: n,
        dualBrandingSelected: i,
      }),
      Qt(
        "div",
        {
          className: xa(
            "adyen-checkout__card__exp-cvc adyen-checkout__field-wrapper",
            ((t = {}),
            (t[oo["adyen-checkout__card__exp-cvc__exp-date__input--hidden"]] =
              c),
            t)
          ),
        },
        Qt(mo, {
          error:
            o.encryptedExpiryDate ||
            o.encryptedExpiryYear ||
            o.encryptedExpiryMonth,
          focused: "encryptedExpiryDate" === l,
          isValid: !!m.encryptedExpiryMonth && !!m.encryptedExpiryYear,
          filled: !!o.encryptedExpiryDate || !!m.encryptedExpiryYear,
          label: h.get("creditCard.expiryDateField.title"),
          onFocusField: u,
          className: "adyen-checkout__field--50",
          hideDateForBrand: c,
        }),
        s &&
          Qt(po, {
            error: o.encryptedSecurityCode,
            focused: "encryptedSecurityCode" === l,
            cvcPolicy: d,
            isValid: !!m.encryptedSecurityCode,
            filled: !!o.encryptedSecurityCode || !!m.encryptedSecurityCode,
            label: h.get("creditCard.cvcField.title"),
            onFocusField: u,
            className: "adyen-checkout__field--50",
            frontCVC: "amex" === a,
          })
      )
    );
  }
  function fo(e) {
    var t = e.onChange,
      a = e.placeholder,
      r = e.value,
      n = e.required,
      i = e.error,
      o = void 0 !== i && i,
      l = e.isValid,
      s = er().i18n;
    return Qt(
      Cr,
      {
        label: s.get("creditCard.holderName"),
        className: "adyen-checkout__card__holderName",
        errorMessage: o && s.get("creditCard.holderName.invalid"),
        isValid: !!l,
      },
      qr("text", {
        className:
          "adyen-checkout__card__holderName__input " +
          oo["adyen-checkout__input"],
        placeholder: a || s.get("creditCard.holderName.placeholder"),
        value: r,
        required: n,
        onInput: t,
      })
    );
  }
  function yo(e) {
    var t,
      a,
      r = er().i18n,
      n = e.amount,
      i = e.brand,
      o = e.onChange,
      l = e.type,
      s = e.installmentOptions[i] || e.installmentOptions.card,
      d = La(
        (null == s ? void 0 : s.preselectedValue) ||
          (null == s ? void 0 : s.values[0])
      ),
      c = d[0],
      u = d[1],
      p = La("onetime"),
      m = p[0],
      h = p[1],
      f =
        null === (t = null == s ? void 0 : s.plans) || void 0 === t
          ? void 0
          : t.includes("revolving"),
      y = function (e) {
        var t = e.target.value;
        u(Number(t));
      },
      b = function (e) {
        var t, a, i;
        return (
          "amount" === l
            ? ((t = "installmentOption"),
              (a = {
                count: e,
                values: {
                  times: e,
                  partialValue: ((i = e), r.amount(n.value / i, n.currency)),
                },
              }))
            : ((t = "installmentOptionMonths"),
              (a = { count: e, values: { times: e } })),
          { id: e, name: n.value ? r.get(t, a) : "" + e }
        );
      };
    return (
      Ua(
        function () {
          var e,
            t = (
              null === (e = null == s ? void 0 : s.values) || void 0 === e
                ? void 0
                : e.includes(c)
            )
              ? c
              : null == s
              ? void 0
              : s.values[0];
          u(t);
        },
        [i]
      ),
      Ua(
        function () {
          var e = wt(
            wt({ value: c }, f && "revolving" === m && { plan: m, value: 1 }),
            f && "onetime" === m && { value: 1 }
          );
          o(s ? e : { value: null });
        },
        [c, s, m]
      ),
      s
        ? 0 === n.value
          ? null
          : Qt(
              "div",
              { className: "adyen-checkout__installments" },
              f
                ? Qt(
                    gr,
                    { classNameModifiers: ["revolving-plan"], label: "" },
                    Qt(xr, {
                      items: [
                        { id: "onetime", name: "installments.oneTime" },
                        {
                          id: "installments",
                          name: "installments.installments",
                        },
                        { id: "revolving", name: "installments.revolving" },
                      ],
                      i18n: r,
                      onChange: function (e) {
                        var t = e.currentTarget.getAttribute("value");
                        h(t);
                      },
                      value: m,
                    }),
                    Qt(
                      Cr,
                      {
                        className:
                          "installments" !== m
                            ? "" + oo["revolving-plan-installments__disabled"]
                            : "" + oo["revolving-plan-installments"],
                        classNameModifiers: ["revolving-plan-installments"],
                      },
                      qr("select", {
                        filterable: !1,
                        items: s.values.map(b),
                        selected: c,
                        onChange: y,
                        name: "installments",
                      })
                    )
                  )
                : Qt(
                    Cr,
                    {
                      label: r.get("installments"),
                      classNameModifiers: ["installments"],
                    },
                    qr("select", {
                      filterable: !1,
                      items: s.values.map(b),
                      selected: c,
                      onChange: y,
                      name: "installments",
                      readonly:
                        1 ===
                        (null === (a = null == s ? void 0 : s.values) ||
                        void 0 === a
                          ? void 0
                          : a.length),
                    })
                  )
            )
        : null
    );
  }
  function bo(e) {
    var t,
      a = er().i18n,
      r = function (e) {
        return void 0 === e && (e = ""), 6 === e.length || 10 === e.length;
      },
      n = La({ taxNumber: e.taxNumber }),
      i = n[0],
      o = n[1],
      l = La({ taxNumber: r(e.taxNumber) }),
      s = l[0],
      d = l[1],
      c = La({}),
      u = c[0],
      p = c[1],
      m = qa(
        function () {
          var e;
          return (null === (e = i.taxNumber) || void 0 === e
            ? void 0
            : e.length) > 6
            ? a.get("creditCard.taxNumber.labelAlt")
            : a.get("creditCard.taxNumber.label");
        },
        [i.taxNumber]
      ),
      h = function (e) {
        o(wt(wt({}, i), { taxNumber: e.target.value })),
          d(wt(wt({}, s), { taxNumber: r(e.target.value) })),
          p(wt(wt({}, u), { taxNumber: !1 }));
      };
    return (
      Ua(
        function () {
          e.onChange(i, s);
        },
        [i.taxNumber]
      ),
      Ua(function () {
        return function () {
          e.onChange({ taxNumber: void 0 }, { taxNumber: !1 });
        };
      }, []),
      (this.showValidation = function () {
        p({ taxNumber: !r(i.taxNumber) });
      }),
      Qt(
        "div",
        { className: "adyen-checkout__card__kcp-authentication" },
        Qt(
          Cr,
          {
            label: m,
            filled: e.filled,
            classNameModifiers: ["kcp-taxNumber"],
            errorMessage: u.taxNumber && a.get("creditCard.taxNumber.invalid"),
            isValid: s.taxNumber,
          },
          qr("tel", {
            className:
              "adyen-checkout__card__kcp-taxNumber__input " +
              oo["adyen-checkout__input"],
            placeholder: a.get("creditCard.taxNumber.placeholder"),
            maxLength: 10,
            minLength: 6,
            autoComplete: !1,
            value: i.taxNumber,
            required: !0,
            onChange: h,
            onInput: h,
          })
        ),
        Qt(
          Cr,
          {
            label: a.get("creditCard.encryptedPassword.label"),
            focused: "encryptedPassword" === e.focusedElement,
            filled: e.filled,
            classNameModifiers: [
              "50",
              "koreanAuthentication-encryptedPassword",
            ],
            onFocusField: function () {
              return e.onFocusField("encryptedPassword");
            },
            errorMessage:
              e.encryptedPasswordState.errors &&
              a.get("creditCard.encryptedPassword.invalid"),
            isValid: e.encryptedPasswordState.valid,
          },
          Qt("span", {
            "data-cse": "encryptedPassword",
            className: xa(
              ((t = {
                "adyen-checkout__input": !0,
                "adyen-checkout__input--large": !0,
              }),
              (t[oo["adyen-checkout__input"]] = !0),
              (t["adyen-checkout__input--error"] =
                e.encryptedPasswordState.errors),
              (t["adyen-checkout__input--valid"] =
                e.encryptedPasswordState.valid),
              (t["adyen-checkout__input--focus"] =
                "encryptedPassword" === e.focusedElement),
              t)
            ),
          })
        )
      )
    );
  }
  yo.defaultProps = { brand: "", amount: {}, onChange: function () {} };
  var vo,
    go = "LoadingWrapper-module_loading-input__form__1jpVs",
    ko = "LoadingWrapper-module_loading-input__form--loading__3LDWz",
    Co = "LoadingWrapper-module_loading-input__spinner__3eCyK",
    _o = "LoadingWrapper-module_loading-input__spinner--active__3UDtX",
    No = function (e) {
      var t,
        a,
        r = e.children,
        n = e.status,
        i = xa(
          "adyen-checkout__loading-input__form",
          go,
          (((t = {})[ko] = "loading" === n), t)
        );
      return Qt(
        "div",
        { style: { position: "relative" } },
        Qt(
          "div",
          {
            className: xa((((a = {})[Co] = !0), (a[_o] = "loading" === n), a)),
          },
          Qt(Ba, null)
        ),
        Qt("div", { className: i }, r)
      );
    };
  function wo(e) {
    var t = e.brand,
      a = e.hasCVC,
      r = e.onFocusField,
      n = e.errors,
      i = e.valid,
      o = Pt(e, ["brand", "hasCVC", "onFocusField", "errors", "valid"]),
      l = er().i18n;
    return Qt(
      "div",
      {
        className:
          "adyen-checkout__card__form adyen-checkout__card__form--oneClick",
        "aria-label":
          l
            .get("creditCard.storedCard.description.ariaLabel")
            .replace("%@", o.lastFour) +
          " " +
          l.get("creditCard.expiryDateField.title") +
          " " +
          o.expiryMonth +
          "/" +
          o.expiryYear,
      },
      Qt(
        "div",
        {
          className:
            "adyen-checkout__card__exp-cvc adyen-checkout__field-wrapper",
        },
        Qt(
          Cr,
          {
            label: l.get("creditCard.expiryDateField.title"),
            className: "adyen-checkout__field--50",
            classNameModifiers: ["storedCard"],
            disabled: !0,
          },
          Qt(
            "div",
            {
              className:
                "adyen-checkout__input adyen-checkout__input--disabled adyen-checkout__card__exp-date__input--oneclick",
            },
            o.expiryMonth,
            " / ",
            o.expiryYear
          )
        ),
        a &&
          Qt(po, {
            cvcPolicy: o.cvcPolicy,
            error: n.encryptedSecurityCode,
            focused: "encryptedSecurityCode" === o.focusedElement,
            filled: !!i.encryptedSecurityCode || !!n.encryptedSecurityCode,
            isValid: !!i.encryptedSecurityCode,
            label: l.get("creditCard.cvcField.title"),
            onFocusField: r,
            className: "adyen-checkout__field--50",
            classNameModifiers: ["storedCard"],
            frontCVC: "amex" === t,
          })
      )
    );
  }
  var Po = "Unsupported card entered",
    Fo =
      (((vo = {})["incomplete field"] = "error.va.gen.01"),
      (vo["field not valid"] = "error.va.gen.02"),
      (vo["luhn check failed"] = "error.va.sf-cc-num.01"),
      (vo["Card too old"] = "error.va.sf-cc-dat.01"),
      (vo["Date too far in future"] = "error.va.sf-cc-dat.02"),
      (vo["Unsupported card entered"] = "error.va.sf-cc-num.03"),
      vo),
    Do = Fo["incomplete field"],
    So = function (e, t) {
      return (
        t === Hi
          ? ((e.encryptedExpiryMonth = !1), (e.encryptedExpiryYear = !1))
          : (e[t] = !1),
        e
      );
    },
    Ao = function (e, t) {
      return function (a, r) {
        var n =
          !0 !== t.valid[r]
            ? (function (e, t) {
                return 1 !== t || (e !== qi && e !== Gi) ? e : Hi;
              })(r, e)
            : null;
        return (
          (n = (function (e, t) {
            var a = e === Yi,
              r = !t.errors.encryptedSecurityCode;
            return (t.cvcPolicy === Xi || t.cvcPolicy === eo) && r && a
              ? null
              : e;
          })(n, t)) &&
            !a.includes(n) &&
            a.push(n),
          a
        );
      };
    };
  function xo(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      "[object Array]" === Object.prototype.toString.call(e)
    );
  }
  function Bo() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var a = xo(e[0]) ? e[0] : e;
    return {
      from: function (e) {
        return a
          .map(function (t) {
            var a;
            return t in e ? (((a = {})[t] = e[t]), a) : {};
          })
          .reduce(function (e, t) {
            return wt(wt({}, e), t);
          }, {});
      },
    };
  }
  var zo = Object.prototype.toString;
  function To(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      "[object Array]" === Object.prototype.toString.call(e)
    );
  }
  function Mo(e) {
    return null != e;
  }
  function Io(e) {
    return !1 !== e && Mo(e);
  }
  function jo(e) {
    return !!e && "object" == typeof e;
  }
  function Oo(e, t) {
    void 0 === e && (e = {}), void 0 === t && (t = {});
    var a = Object.keys(e),
      r = Object.keys(t);
    if (a.length !== r.length) return !1;
    for (var n = 0, i = a; n < i.length; n++) {
      var o = i[n];
      if (jo(e[o]) && !Oo(e[o], t[o])) return !1;
      if (e[o] !== t[o]) return !1;
    }
    return !0;
  }
  function Eo(e) {
    return (
      !Io(e) ||
      !(
        !(
          "number" == typeof (t = e) ||
          (jo(t) && "[object Number]" === zo.call(t))
        ) ||
        (0 !== e && !Number.isNaN(e))
      ) ||
      !(
        (!To(e) &&
          !(function (e) {
            return (
              "string" == typeof e ||
              (jo(e) && "[object String]" === zo.call(e))
            );
          })(e)) ||
        0 !== e.length
      ) ||
      !(!jo(e) || 0 !== Object.keys(e).length)
    );
    var t;
  }
  var Ro =
    window.console &&
    window.console.error &&
    window.console.error.bind(window.console);
  window.console &&
    window.console.info &&
    window.console.info.bind(window.console);
  var Lo =
      window.console &&
      window.console.log &&
      window.console.log.bind(window.console),
    Vo =
      window.console &&
      window.console.warn &&
      window.console.warn.bind(window.console);
  function Uo() {
    var e;
    this.config.cardGroupTypes =
      To((e = this.props.cardGroupTypes)) && e.length ? e : Zi;
    var t = this.props.loadingContext;
    if (t) {
      var a;
      (this.config.loadingContext =
        "/" === (a = t).charAt(a.length - 1) ? t : t + "/"),
        (this.config.isCreditCardType = !1 === Qi.includes(this.props.type)),
        (this.config.iframeUIConfig = this.props.iframeUIConfig),
        (this.config.allowedDOMAccess = !(
          !1 === this.props.allowedDOMAccess ||
          "false" === this.props.allowedDOMAccess
        )),
        (this.config.autoFocus = !(
          !1 === this.props.autoFocus || "false" === this.props.autoFocus
        )),
        (this.config.showWarnings =
          !0 === this.props.showWarnings || "true" === this.props.showWarnings),
        (this.config.trimTrailingSeparator = !(
          !1 === this.props.trimTrailingSeparator ||
          "false" === this.props.trimTrailingSeparator
        )),
        (this.config.keypadFix = !(
          !1 === this.props.keypadFix || "false" === this.props.keypadFix
        )),
        (this.config.legacyInputMode = this.props.legacyInputMode || null),
        (this.config.minimumExpiryDate = this.props.minimumExpiryDate || null),
        (this.config.sfLogAtStart = !0 === this.props._b$dl);
      var r = this.config.isCreditCardType ? "card" : this.props.type;
      r.indexOf("sepa") > -1 && (r = "iban");
      var n = btoa(window.location.origin);
      this.config.iframeSrc =
        this.config.loadingContext +
        "securedfields/" +
        this.props.clientKey +
        "/3.4.1/securedFields.html?type=" +
        r +
        "&d=" +
        n;
    } else Vo("WARNING Config :: no loadingContext has been specified!");
  }
  var Ko = function () {};
  function Ho(e) {
    void 0 === e && (e = {}),
      (this.callbacks.onLoad = e.onLoad ? e.onLoad : Ko),
      (this.callbacks.onConfigSuccess = e.onConfigSuccess
        ? e.onConfigSuccess
        : Ko),
      (this.callbacks.onFieldValid = e.onFieldValid ? e.onFieldValid : Ko),
      (this.callbacks.onAllValid = e.onAllValid ? e.onAllValid : Ko),
      (this.callbacks.onBrand = e.onBrand ? e.onBrand : Ko),
      (this.callbacks.onError = e.onError ? e.onError : Ko),
      (this.callbacks.onFocus = e.onFocus ? e.onFocus : Ko),
      (this.callbacks.onBinValue = e.onBinValue ? e.onBinValue : Ko),
      (this.callbacks.onAutoComplete = e.onAutoComplete
        ? e.onAutoComplete
        : Ko),
      (this.callbacks.onAdditionalSFConfig = e.onAdditionalSFConfig
        ? e.onAdditionalSFConfig
        : Ko),
      (this.callbacks.onAdditionalSFRemoved = e.onAdditionalSFRemoved
        ? e.onAdditionalSFRemoved
        : Ko);
  }
  var qo = function (e, t, a) {
    if (t) {
      var r = JSON.stringify(e);
      t.postMessage(r, a);
    }
  };
  function Go(e) {
    var t, a;
    if (e.fieldType === Ki) {
      var r = {
          brand: e.brand,
          cvcPolicy: e.cvcPolicy,
          showSocialSecurityNumber: e.showSocialSecurityNumber,
        },
        n = ((t = r), (a = this.state.brand), !Oo(t, a));
      if (!n) return null;
      var i = "card" === this.state.type || "bcmc" === this.state.type;
      if (
        i &&
        n &&
        ((this.state.brand = r),
        Object.prototype.hasOwnProperty.call(this.state.securedFields, Yi))
      ) {
        var o = wt({
          txVariant: this.state.type,
          brand: r.brand,
          fieldType: Yi,
          cvcPolicy: e.cvcPolicy,
          numKey: this.state.securedFields.encryptedSecurityCode.numKey,
        });
        qo(o, this.getIframeContentWin(Yi), this.config.loadingContext);
      }
      var l = i
        ? Bo([
            "brand",
            "cvcPolicy",
            "cvcText",
            "datePolicy",
            "showSocialSecurityNumber",
          ]).from(e)
        : null;
      if (l && l.brand) {
        var s = l;
        (s.type = this.state.type),
          (s.rootNode = this.props.rootNode),
          this.callbacks.onBrand(s);
      }
      return !0;
    }
    return !1;
  }
  var Yo = function (e, t, a, r, n, i) {
      return {
        fieldType: e,
        encryptedFieldName: t,
        uid: a,
        valid: r,
        type: n,
        rootNode: i,
      };
    },
    Wo = function (e, t) {
      var a = [];
      return (
        e &&
          "function" == typeof e.querySelectorAll &&
          (a = [].slice.call(e.querySelectorAll(t))),
        a
      );
    },
    Jo = function (e, t) {
      if (e) return e.querySelector(t);
    },
    Zo = function (e, t) {
      if (e) return e.getAttribute(t);
    },
    Qo = function (e, t, a, r) {
      if ("function" != typeof e.addEventListener) {
        if (!e.attachEvent) throw new Error(": Unable to bind " + t + "-event");
        e.attachEvent("on" + t, a);
      } else e.addEventListener(t, a, r);
    },
    $o = function (e, t, a, r) {
      if ("function" == typeof e.addEventListener)
        e.removeEventListener(t, a, r);
      else {
        if (!e.attachEvent)
          throw new Error(": Unable to unbind " + t + "-event");
        e.detachEvent("on" + t, a);
      }
    },
    Xo = function (e, t, a, r, n) {
      if (!Object.prototype.hasOwnProperty.call(e, "error")) return null;
      var i = t,
        o = { rootNode: r, fieldType: e.fieldType, error: null, type: null },
        l = "" !== e.error;
      return l || i.hasError
        ? i.errorType === Fo["Unsupported card entered"]
          ? null
          : ((o.error = l ? e.error : ""),
            (o.type = a),
            (i.hasError = l),
            (i.errorType = o.error),
            n(o),
            o)
        : null;
    };
  function el(e) {
    var t,
      a,
      r,
      n,
      i = e.fieldType;
    if (
      ("card" === this.state.type &&
        Object.prototype.hasOwnProperty.call(e, "cvcPolicy") &&
        Mo(e.cvcPolicy) &&
        Object.prototype.hasOwnProperty.call(this.state.securedFields, Yi) &&
        (this.state.securedFields.encryptedSecurityCode.cvcPolicy =
          e.cvcPolicy),
      Xo(
        e,
        this.state.securedFields[i],
        this.state.type,
        this.props.rootNode,
        this.callbacks.onError
      ),
      this.state.securedFields[i].isEncrypted)
    ) {
      (t = (function (e, t, a) {
        var r,
          n,
          i = e === Hi,
          o = [],
          l = ["encryptedExpiryMonth", "encryptedExpiryYear"],
          s = i ? 2 : 1;
        for (r = 0; r < s; r += 1) {
          n = i ? l[r] : e;
          var d = Yo(e, i ? n : e, t + "-encrypted-" + n, !1, t, a);
          o.push(d);
        }
        return o;
      })(i, this.state.type, this.props.rootNode)),
        i === Ki && (t[0].endDigits = "");
      for (var o = 0, l = t.length; o < l; o += 1)
        this.config.allowedDOMAccess &&
          ((a = this.props.rootNode),
          (r = t[o].uid),
          (n = void 0),
          (n = Jo(a, "#" + r)) && a.removeChild(n)),
          this.callbacks.onFieldValid(t[o]);
      this.state.securedFields[i].isEncrypted = !1;
    }
    this.assessFormValidity(),
      Object.prototype.hasOwnProperty.call(e, "brand") && this.processBrand(e);
  }
  function tl(e) {
    var t,
      a,
      r = e.fieldType;
    this.config.autoFocus &&
      (("year" !== e.type && r !== Gi) || this.setFocusOnFrame(Yi),
      r === qi && this.setFocusOnFrame(Gi));
    var n = e[r];
    (this.state.securedFields[r].isEncrypted = !0),
      this.config.allowedDOMAccess &&
        (function (e, t, a) {
          var r, n, i, o, l, s, d, c;
          for (r = 0; r < e.length; r += 1) {
            var u = e[r];
            (n = t + "-encrypted-" + (i = u.encryptedFieldName)),
              (l = i),
              (s = u.blob),
              (c = void 0),
              (c = Jo((o = a), "#" + (d = n))) ||
                (((c = document.createElement("input")).type = "hidden"),
                (c.name = l),
                (c.id = d),
                o.appendChild(c)),
              c.setAttribute("value", s);
          }
        })(n, this.state.type, this.props.rootNode),
      Xo(
        { error: "", fieldType: r },
        this.state.securedFields[r],
        this.state.type,
        this.props.rootNode,
        this.callbacks.onError
      );
    var i = (function (e, t, a, r) {
      var n,
        i,
        o,
        l,
        s,
        d = [];
      for (n = 0; n < r.length; n += 1) {
        (i = t + "-encrypted-" + (l = (o = r[n]).encryptedFieldName)),
          (s = o.blob);
        var c = Yo(e, l, i, !0, t, a);
        (c.blob = s), d.push(c);
      }
      return d;
    })(r, this.state.type, this.props.rootNode, n);
    for (
      r === Ki && Io(e.endDigits) && (i[0].endDigits = e.endDigits),
        t = 0,
        a = i.length;
      t < a;
      t += 1
    )
      this.callbacks.onFieldValid(i[t]);
    this.assessFormValidity();
  }
  var al = { __NO_BRAND: "noBrand", cards: [] };
  al.cards.push({
    cardType: "mc",
    startingRules: [51, 52, 53, 54, 55, 22, 23, 24, 25, 26, 27],
    permittedLengths: [16],
    pattern: /^(5[1-5][0-9]{0,14}|2[2-7][0-9]{0,14})$/,
    securityCode: "CVC",
  }),
    al.cards.push({
      cardType: "visadankort",
      startingRules: [4571],
      permittedLengths: [16],
      pattern: /^(4571)[0-9]{0,12}$/,
    }),
    al.cards.push({
      cardType: "visa",
      startingRules: [4],
      permittedLengths: [13, 16, 19],
      pattern: /^4[0-9]{0,18}$/,
      securityCode: "CVV",
    }),
    al.cards.push({
      cardType: "amex",
      startingRules: [34, 37],
      permittedLengths: [15],
      pattern: /^3[47][0-9]{0,13}$/,
      securityCode: "CID",
    }),
    al.cards.push({
      cardType: "diners",
      startingRules: [36],
      permittedLengths: [14],
      pattern: /^(36)[0-9]{0,12}$/,
    }),
    al.cards.push({
      cardType: "maestrouk",
      startingRules: [6759],
      permittedLengths: [16, 18, 19],
      pattern: /^(6759)[0-9]{0,15}$/,
    }),
    al.cards.push({
      cardType: "solo",
      startingRules: [6767],
      permittedLengths: [16, 18, 19],
      pattern: /^(6767)[0-9]{0,15}$/,
    }),
    al.cards.push({
      cardType: "laser",
      startingRules: [6304, 6706, 677117, 677120],
      permittedLengths: [16, 17, 18, 19],
      pattern: /^(6304|6706|6709|6771)[0-9]{0,15}$/,
      cvcPolicy: "optional",
    }),
    al.cards.push({
      cardType: "discover",
      startingRules: [6011, 644, 645, 646, 647, 648, 649, 65],
      permittedLengths: [16],
      pattern:
        /^(6011[0-9]{0,12}|(644|645|646|647|648|649)[0-9]{0,13}|65[0-9]{0,14})$/,
    }),
    al.cards.push({
      cardType: "jcb",
      startingRules: [3528, 3529, 353, 354, 355, 356, 357, 358],
      permittedLengths: [16, 19],
      pattern: /^(352[8,9]{1}[0-9]{0,15}|35[4-8]{1}[0-9]{0,16})$/,
      securityCode: "CAV",
    }),
    al.cards.push({
      cardType: "bcmc",
      startingRules: [6703, 479658, 606005],
      permittedLengths: [16, 17, 18, 19],
      pattern: /^((6703)[0-9]{0,15}|(479658|606005)[0-9]{0,13})$/,
      cvcPolicy: "hidden",
    }),
    al.cards.push({
      cardType: "bijcard",
      startingRules: [5100081],
      permittedLengths: [16],
      pattern: /^(5100081)[0-9]{0,9}$/,
    }),
    al.cards.push({
      cardType: "dankort",
      startingRules: [5019],
      permittedLengths: [16],
      pattern: /^(5019)[0-9]{0,12}$/,
    }),
    al.cards.push({
      cardType: "hipercard",
      startingRules: [606282],
      permittedLengths: [16],
      pattern: /^(606282)[0-9]{0,10}$/,
    }),
    al.cards.push({
      cardType: "cup",
      startingRules: [62, 81],
      permittedLengths: [14, 15, 16, 17, 18, 19],
      pattern: /^(62|81)[0-9]{0,17}$/,
    }),
    al.cards.push({
      cardType: "maestro",
      startingRules: [50, 56, 57, 58, 6],
      permittedLengths: [16, 17, 18, 19],
      pattern: /^(5[0|6-8][0-9]{0,17}|6[0-9]{0,18})$/,
      cvcPolicy: "optional",
    }),
    al.cards.push({
      cardType: "elo",
      startingRules: [
        506699, 50670, 50671, 50672, 50673, 50674, 50675, 50676, 506770, 506771,
        506772, 506773, 506774, 506775, 506776, 506777, 506778, 401178, 438935,
        451416, 457631, 457632, 504175, 627780, 636297, 636368,
      ],
      permittedLengths: [16],
      pattern:
        /^((((506699)|(506770)|(506771)|(506772)|(506773)|(506774)|(506775)|(506776)|(506777)|(506778)|(401178)|(438935)|(451416)|(457631)|(457632)|(504175)|(627780)|(636368)|(636297))[0-9]{0,10})|((50676)|(50675)|(50674)|(50673)|(50672)|(50671)|(50670))[0-9]{0,11})$/,
    }),
    al.cards.push({
      cardType: "uatp",
      startingRules: [1],
      permittedLengths: [15],
      pattern: /^1[0-9]{0,14}$/,
      cvcPolicy: "optional",
    }),
    al.cards.push({
      cardType: "cartebancaire",
      startingRules: [4, 5, 6],
      permittedLengths: [16],
      pattern: /^[4-6][0-9]{0,15}$/,
    }),
    al.cards.push({
      cardType: "visaalphabankbonus",
      startingRules: [450903],
      permittedLengths: [16],
      pattern: /^(450903)[0-9]{0,10}$/,
    }),
    al.cards.push({
      cardType: "mcalphabankbonus",
      startingRules: [510099],
      permittedLengths: [16],
      pattern: /^(510099)[0-9]{0,10}$/,
    }),
    al.cards.push({
      cardType: "hiper",
      startingRules: [637095, 637568, 637599, 637609, 637612],
      permittedLengths: [16],
      pattern: /^(637095|637568|637599|637609|637612)[0-9]{0,10}$/,
    }),
    al.cards.push({
      cardType: "oasis",
      startingRules: [982616],
      permittedLengths: [16],
      pattern: /^(982616)[0-9]{0,10}$/,
      cvcPolicy: "optional",
    }),
    al.cards.push({
      cardType: "karenmillen",
      startingRules: [98261465],
      permittedLengths: [16],
      pattern: /^(98261465)[0-9]{0,8}$/,
      cvcPolicy: "optional",
    }),
    al.cards.push({
      cardType: "warehouse",
      startingRules: [982633],
      permittedLengths: [16],
      pattern: /^(982633)[0-9]{0,10}$/,
      cvcPolicy: "optional",
    }),
    al.cards.push({
      cardType: "mir",
      startingRules: [220],
      permittedLengths: [16, 17, 18, 19],
      pattern: /^(220)[0-9]{0,16}$/,
    }),
    al.cards.push({
      cardType: "codensa",
      startingRules: [590712],
      permittedLengths: [16],
      pattern: /^(590712)[0-9]{0,10}$/,
    }),
    al.cards.push({
      cardType: "naranja",
      startingRules: [377798, 377799, 402917, 402918, 527571, 527572, 589562],
      permittedLengths: [16, 17, 18, 19],
      pattern: /^(37|40|5[28])([279])\d*$/,
    }),
    al.cards.push({
      cardType: "cabal",
      startingRules: [589657, 600691, 603522, 6042, 6043, 636908],
      permittedLengths: [16, 17, 18, 19],
      pattern: /^(58|6[03])([03469])\d*$/,
    }),
    al.cards.push({
      cardType: "shopping",
      startingRules: [2799, 589407, 603488],
      permittedLengths: [16, 17, 18, 19],
      pattern: /^(27|58|60)([39])\d*$/,
    }),
    al.cards.push({
      cardType: "argencard",
      startingRules: [501],
      permittedLengths: [16, 17, 18, 19],
      pattern: /^(50)(1)\d*$/,
    }),
    al.cards.push({
      cardType: "troy",
      startingRules: [9792],
      permittedLengths: [16],
      pattern: /^(97)(9)\d*$/,
    }),
    al.cards.push({
      cardType: "forbrugsforeningen",
      startingRules: [600722],
      permittedLengths: [16],
      pattern: /^(60)(0)\d*$/,
    }),
    al.cards.push({
      cardType: "vpay",
      startingRules: [
        401, 408, 413, 434, 435, 437, 439, 441, 442, 443, 444, 446, 447, 455,
        458, 460, 461, 463, 466, 471, 479, 482, 483, 487,
      ],
      permittedLengths: [13, 14, 15, 16, 17, 18, 19],
      pattern:
        /^(40[1,8]|413|43[4,5]|44[1,2,3,4,6,7]|45[5,8]|46[0,1,3,6]|47[1,9]|48[2,3,7])[0-9]{0,16}$/,
    });
  var rl = function (e) {
      return al.cards.filter(function (t) {
        return t.cardType === e;
      })[0];
    },
    nl = function (e) {
      return void 0 === e && (e = "card"), "card" === e || "scheme" === e;
    };
  al.__NO_BRAND, al.cards;
  var il = function (e) {
      var t = Fo[e];
      return (
        t ||
        (t = Object.keys(Fo).find(function (t) {
          return Fo[t] === e;
        })) ||
        e
      );
    },
    ol = function (e, t) {
      var a = wt({}, e);
      return (
        (a.error = a.error
          ? a.error
          : (function (e) {
              return Object.keys(Fo).reduce(function (t, a) {
                var r = Fo[a];
                return (
                  (r.indexOf("sf-") > -1 || r.indexOf("gen.01") > -1) &&
                    (t[r] = e.get(r)),
                  t
                );
              }, {});
            })(t)),
        a
      );
    };
  var ll,
    sl = (function (e) {
      function t(t, a) {
        var r = e.call(this) || this,
          n = [
            "fieldType",
            "iframeSrc",
            "cvcPolicy",
            "datePolicy",
            "loadingContext",
            "holderEl",
          ],
          i = (function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var a = xo(e[0]) ? e[0] : e;
            return {
              from: function (e) {
                var t = Object.keys(e).filter(function (e) {
                  return !a.includes(e);
                });
                return Bo.apply(void 0, t).from(e);
              },
            };
          })(n).from(t);
        r.config = wt(wt(wt({}, r.config), i), {
          iframeUIConfig: wt({}, i.iframeUIConfig),
        });
        var o = Bo(n).from(t);
        return (
          (r.fieldType = o.fieldType),
          (r.cvcPolicy = o.cvcPolicy),
          (r.datePolicy = o.datePolicy),
          (r.iframeSrc = o.iframeSrc),
          (r.loadingContext = o.loadingContext),
          (r.holderEl = o.holderEl),
          (r.isValid = !1),
          (r.iframeContentWindow = null),
          (r.numKey = (function () {
            if (!window.crypto) return (4294967296 * Math.random()) | 0;
            var e = new Uint32Array(1);
            return window.crypto.getRandomValues(e), e[0];
          })()),
          (r.isEncrypted = !1),
          (r.hasError = !1),
          (r.errorType = ""),
          r.init(a)
        );
      }
      return (
        Nt(t, e),
        (t.prototype.init = function (e) {
          var t = (function (e, t, a) {
            var r,
              n = "card" === e.txVariant ? "creditCard" : e.txVariant,
              i = a.get(n + "." + t + ".aria.iframeTitle"),
              o = a.get(n + "." + t + ".aria.label"),
              l = a.locale,
              s = ol({ iframeTitle: i, label: o }, a);
            return wt(wt({}, l && { lang: l }), (((r = {})[t] = s), r));
          })(this.config, this.fieldType, e);
          this.config.iframeUIConfig.ariaConfig = t;
          var a = (function (e, t, a) {
            var r,
              n,
              i,
              o = e.txVariant,
              l = (function (e) {
                var t;
                return (
                  ((t = {}).encryptedCardNumber =
                    e.get && e.get("creditCard.numberField.placeholder")),
                  (t.encryptedExpiryDate =
                    e.get && e.get("creditCard.expiryDateField.placeholder")),
                  (t.encryptedExpiryMonth =
                    e.get &&
                    e.get("creditCard.expiryDateField.month.placeholder")),
                  (t.encryptedExpiryYear =
                    e.get &&
                    e.get("creditCard.expiryDateField.year.placeholder")),
                  (t.encryptedSecurityCode =
                    e.get && e.get("creditCard.cvcField.placeholder")),
                  (t.encryptedSecurityCode3digits =
                    e.get && e.get("creditCard.cvcField.placeholder.3digits")),
                  (t.encryptedSecurityCode4digits =
                    e.get && e.get("creditCard.cvcField.placeholder.4digits")),
                  (t.encryptedPassword =
                    e.get && e.get("creditCard.encryptedPassword.placeholder")),
                  t
                );
              })(a);
            return wt(
              wt(
                wt({}, t !== Yi && (((r = {})[t] = l[t]), r)),
                t === Yi && o === Ji && (((n = {})[t] = l[t]), n)
              ),
              t === Yi &&
                o !== Ji &&
                (((i = {}).encryptedSecurityCode3digits =
                  l.encryptedSecurityCode3digits),
                (i.encryptedSecurityCode4digits =
                  l.encryptedSecurityCode4digits),
                i)
            );
          })(this.config, this.fieldType, e);
          this.config.iframeUIConfig.placeholders = a;
          var r = (function (e) {
            var t = e.src,
              a = e.title,
              r = void 0 === a ? "iframe element" : a,
              n = e.policy,
              i = void 0 === n ? "origin" : n,
              o = e.styleStr,
              l = void 0 === o ? "border: none; height:100%; width:100%;" : o,
              s = document.createElement("iframe");
            s.setAttribute("src", t),
              s.setAttribute("class", "js-iframe"),
              s.setAttribute("title", r),
              s.setAttribute("frameborder", "0"),
              s.setAttribute("scrolling", "no"),
              s.setAttribute("allowtransparency", "true"),
              s.setAttribute("style", l),
              s.setAttribute("referrerpolicy", i);
            var d = document.createTextNode(
              "<p>Your browser does not support iframes.</p>"
            );
            return s.appendChild(d), s;
          })({
            src: this.iframeSrc,
            title: t[this.fieldType].iframeTitle,
            policy: "origin",
          });
          this.holderEl.appendChild(r);
          var n = Jo(this.holderEl, ".js-iframe");
          return (
            n &&
              ((this.iframeContentWindow = n.contentWindow),
              (this.iframeOnLoadListener = this.iframeOnLoadListenerFn),
              Qo(n, "load", this.iframeOnLoadListener, !1)),
            this
          );
        }),
        (t.prototype.iframeOnLoadListenerFn = function () {
          $o(window, "load", this.iframeOnLoadListener, !1),
            (this.postMessageListener = this.postMessageListenerFn),
            Qo(window, "message", this.postMessageListener, !1);
          var e = {
            fieldType: this.fieldType,
            cvcPolicy: this.cvcPolicy,
            numKey: this.numKey,
            txVariant: this.config.txVariant,
            extraFieldData: this.config.extraFieldData,
            cardGroupTypes: this.config.cardGroupTypes,
            iframeUIConfig: this.config.iframeUIConfig,
            sfLogAtStart: this.config.sfLogAtStart,
            showWarnings: this.config.showWarnings,
            trimTrailingSeparator: this.config.trimTrailingSeparator,
            isCreditCardType: this.config.isCreditCardType,
            legacyInputMode: this.config.legacyInputMode,
            minimumExpiryDate: this.config.minimumExpiryDate,
          };
          qo(e, this.iframeContentWindow, this.loadingContext),
            this.onIframeLoadedCallback();
        }),
        (t.prototype.postMessageListenerFn = function (e) {
          if (
            (function (e, t, a) {
              var r = e.origin,
                n = t.indexOf("/checkoutshopper/"),
                i = n > -1 ? t.substring(0, n) : t,
                o = i.length - 1;
              return (
                "/" === i.charAt(o) && (i = i.substring(0, o)),
                r === i ||
                  (a &&
                    (Vo(
                      "WARNING postMessageValidation: postMessage listener for iframe::origin mismatch!\n Received message with origin:",
                      r,
                      "but the only allowed origin for messages to CSF is",
                      i
                    ),
                    Vo("### event.data=", e.data)),
                  !1)
              );
            })(e, this.loadingContext, this.config.showWarnings)
          ) {
            var t;
            try {
              t = JSON.parse(e.data);
            } catch (t) {
              return (function (e) {
                return (
                  e.data &&
                  e.data.type &&
                  "string" == typeof e.data.type &&
                  e.data.type.indexOf("webpack") > -1
                );
              })(e)
                ? void (
                    this.config.showWarnings &&
                    Lo(
                      "### SecuredField::postMessageListenerFn:: PARSE FAIL - WEBPACK"
                    )
                  )
                : (function (e) {
                    return (
                      e.data &&
                      "string" == typeof e.data &&
                      e.data.indexOf("cvox") > -1
                    );
                  })(e)
                ? void (
                    this.config.showWarnings &&
                    Lo(
                      "### SecuredField::postMessageListenerFn:: PARSE FAIL - CHROMEVOX"
                    )
                  )
                : void (
                    this.config.showWarnings &&
                    Lo(
                      "### SecuredField::postMessageListenerFn:: PARSE FAIL - UNKNOWN REASON: event.data=",
                      e.data
                    )
                  );
            }
            if (
              Object.prototype.hasOwnProperty.call(t, "action") &&
              Object.prototype.hasOwnProperty.call(t, "numKey")
            )
              if (this.numKey === t.numKey)
                switch (t.action) {
                  case "encryption":
                    (this.isValid = !0), this.onEncryptionCallback(t);
                    break;
                  case "config":
                    this.onConfigCallback(t);
                    break;
                  case "focus":
                    this.onFocusCallback(t);
                    break;
                  case "binValue":
                    this.onBinValueCallback(t);
                    break;
                  case "click":
                    this.onClickCallback(t);
                    break;
                  case "shifttab":
                    this.onShiftTabCallback(t);
                    break;
                  case "autoComplete":
                    this.onAutoCompleteCallback(t);
                    break;
                  default:
                    (this.isValid = !1), this.onValidationCallback(t);
                }
              else
                this.config.showWarnings &&
                  Vo(
                    "WARNING SecuredField :: postMessage listener for iframe :: data mismatch! (Probably a message from an unrelated securedField)"
                  );
            else
              this.config.showWarnings &&
                Vo(
                  "WARNING SecuredField :: postMessage listener for iframe :: data mismatch!"
                );
          }
        }),
        (t.prototype.destroy = function () {
          $o(window, "message", this.postMessageListener, !1),
            (this.iframeContentWindow = null),
            (function (e) {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
            })(this.holderEl);
        }),
        (t.prototype.onIframeLoaded = function (e) {
          return (this.onIframeLoadedCallback = e), this;
        }),
        (t.prototype.onEncryption = function (e) {
          return (this.onEncryptionCallback = e), this;
        }),
        (t.prototype.onValidation = function (e) {
          return (this.onValidationCallback = e), this;
        }),
        (t.prototype.onConfig = function (e) {
          return (this.onConfigCallback = e), this;
        }),
        (t.prototype.onFocus = function (e) {
          return (this.onFocusCallback = e), this;
        }),
        (t.prototype.onBinValue = function (e) {
          return (this.onBinValueCallback = e), this;
        }),
        (t.prototype.onClick = function (e) {
          return (this.onClickCallback = e), this;
        }),
        (t.prototype.onShiftTab = function (e) {
          return (this.onShiftTabCallback = e), this;
        }),
        (t.prototype.onAutoComplete = function (e) {
          return (this.onAutoCompleteCallback = e), this;
        }),
        Object.defineProperty(t.prototype, "errorType", {
          get: function () {
            return this._errorType;
          },
          set: function (e) {
            this._errorType = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "hasError", {
          get: function () {
            return this._hasError;
          },
          set: function (e) {
            this._hasError = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            if (this.fieldType === Yi)
              switch (this.cvcPolicy) {
                case eo:
                  return !0;
                case Xi:
                  return !this.hasError;
                default:
                  return this._isValid;
              }
            return (
              (this.fieldType === Hi && this.datePolicy === ao) || this._isValid
            );
          },
          set: function (e) {
            this._isValid = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "cvcPolicy", {
          get: function () {
            return this._cvcPolicy;
          },
          set: function (e) {
            this.fieldType === Yi &&
              e !== this.cvcPolicy &&
              ((this._cvcPolicy = e),
              this.hasError &&
                "isValidated" === this.errorType &&
                (this.hasError = !1));
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "datePolicy", {
          get: function () {
            return this._datePolicy;
          },
          set: function (e) {
            this.fieldType === Hi &&
              e !== this.datePolicy &&
              (this._datePolicy = e);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "iframeContentWindow", {
          get: function () {
            return this._iframeContentWindow;
          },
          set: function (e) {
            this._iframeContentWindow = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "isEncrypted", {
          get: function () {
            return this._isEncrypted;
          },
          set: function (e) {
            this._isEncrypted = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "numKey", {
          get: function () {
            return this._numKey;
          },
          set: function (e) {
            this._numKey = e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "iframeOnLoadListener", {
          get: function () {
            return this._iframeOnLoadListener;
          },
          set: function (e) {
            this._iframeOnLoadListener = e.bind(this);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "postMessageListener", {
          get: function () {
            return this._postMessageListener;
          },
          set: function (e) {
            this._postMessageListener = e.bind(this);
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })(function () {
      this.config = {};
    });
  function dl() {
    this.encryptedAttrName = "data-encrypted-field";
    var e = Wo(this.props.rootNode, "[" + this.encryptedAttrName + "]");
    return (
      e.length ||
        ((this.encryptedAttrName = "data-cse"),
        (e = Wo(this.props.rootNode, "[" + this.encryptedAttrName + "]"))),
      (ll = $i),
      this.config.isCreditCardType
        ? ((this.isSingleBrandedCard = !1),
          (this.securityCode = ""),
          this.createCardSecuredFields(e))
        : this.createNonCardSecuredFields(e)
    );
  }
  function cl(e) {
    return e.forEach(this.setupSecuredField.bind(this)), e.length;
  }
  function ul(e) {
    var t = this,
      a = this.state.type;
    if (
      ("card" === a &&
        1 === this.config.cardGroupTypes.length &&
        ((a = this.config.cardGroupTypes[0]), (this.state.type = a)),
      (this.isSingleBrandedCard = "card" !== a),
      this.isSingleBrandedCard)
    ) {
      var r = rl(a);
      Mo(r)
        ? ((ll = r.cvcPolicy || $i), (this.securityCode = r.securityCode))
        : (this.state.type = "unrecognised-single-brand");
    }
    if (
      (e.forEach(this.setupSecuredField.bind(this)), this.isSingleBrandedCard)
    ) {
      var n = {
        type: this.state.type,
        rootNode: this.props.rootNode,
        brand: a,
        cvcPolicy: ll,
        cvcText: this.securityCode,
      };
      setTimeout(function () {
        t.callbacks.onBrand(n);
      }, 0);
    }
    return e.length;
  }
  function pl(e) {
    var t = this,
      a = Zo(e, this.encryptedAttrName);
    a === Gi && (this.state.hasSeparateDateFields = !0);
    var r = {
        fieldType: a,
        extraFieldData: Zo(e, "data-info"),
        txVariant: this.state.type,
        cardGroupTypes: this.config.cardGroupTypes,
        iframeUIConfig: this.config.iframeUIConfig
          ? this.config.iframeUIConfig
          : {},
        sfLogAtStart: this.config.sfLogAtStart,
        trimTrailingSeparator: this.config.trimTrailingSeparator,
        cvcPolicy: ll,
        datePolicy: to,
        isCreditCardType: this.config.isCreditCardType,
        iframeSrc: this.config.iframeSrc,
        loadingContext: this.config.loadingContext,
        showWarnings: this.config.showWarnings,
        holderEl: e,
        legacyInputMode: this.config.legacyInputMode,
        minimumExpiryDate: this.config.minimumExpiryDate,
      },
      n = new sl(r, this.props.i18n)
        .onIframeLoaded(function () {
          if (
            ((t.state.iframeCount += 1),
            t.state.iframeCount === t.state.originalNumIframes)
          ) {
            t.callbacks.onLoad({ iframesLoaded: !0 });
          }
        })
        .onConfig(function (e) {
          t.handleIframeConfigFeedback(e);
        })
        .onFocus(function (e) {
          t.handleFocus(e);
        })
        .onBinValue(function (e) {
          t.handleBinValue(e);
        })
        .onClick(function (e) {
          t.postMessageToAllIframes({ fieldType: e.fieldType, click: !0 });
        })
        .onShiftTab(function (e) {
          t.handleSFShiftTab(e.fieldType);
        })
        .onEncryption(function (e) {
          t.handleEncryption(e);
        })
        .onValidation(function (e) {
          t.handleValidation(e);
        })
        .onAutoComplete(function (e) {
          t.processAutoComplete(e);
        });
    this.state.securedFields[a] = n;
  }
  function ml(e, t) {
    if (Object.prototype.hasOwnProperty.call(this.state.securedFields, e)) {
      var a = {
        txVariant: this.state.type,
        fieldType: e,
        focus: !0,
        numKey: this.state.securedFields[e].numKey,
      };
      qo(a, this.getIframeContentWin(e), this.config.loadingContext);
    }
  }
  function hl(e) {
    var t = this,
      a = Object.keys(e || {});
    a.length &&
      Object.keys(this.state.securedFields).forEach(function (r) {
        var n = {
          txVariant: t.state.type,
          fieldType: r,
          numKey: t.state.securedFields[r].numKey,
        };
        a.forEach(function (t) {
          n[t] = e[t];
        }),
          qo(n, t.getIframeContentWin(r), t.config.loadingContext);
      });
  }
  function fl() {
    var e = this;
    this.postMessageToAllIframes({ destroy: !0 }),
      Object.keys(this.state.securedFields).forEach(function (t) {
        var a = e.state.securedFields[t];
        a && a.destroy(), (e.state.securedFields[t] = null);
      }),
      this.destroyTouchendListener(),
      (this.state.securedFields = {});
  }
  function yl(e) {
    var t = this;
    if ("cc-name" === e.name) {
      var a = wt({}, e);
      delete a.numKey;
      var r = a;
      this.callbacks.onAutoComplete(r);
    }
    if ("cc-exp" === e.name) {
      var n = e.value.replace(/[^0-9]/gi, "/").split("/");
      if (2 !== n.length) return;
      1 === n[0].length && (n[0] = "0" + n[0]);
      var i = n[0],
        o = n[1].substr(2),
        l = i + "/" + o;
      if (Object.prototype.hasOwnProperty.call(this.state.securedFields, Hi)) {
        var s = {
          txVariant: this.state.type,
          fieldType: Hi,
          autoComplete: l,
          numKey: this.state.securedFields.encryptedExpiryDate.numKey,
        };
        return void qo(
          s,
          this.getIframeContentWin(Hi),
          this.config.loadingContext
        );
      }
      if (Object.prototype.hasOwnProperty.call(this.state.securedFields, qi)) {
        s = {
          txVariant: this.state.type,
          fieldType: qi,
          autoComplete: i,
          numKey: this.state.securedFields.encryptedExpiryMonth.numKey,
        };
        qo(s, this.getIframeContentWin(qi), this.config.loadingContext);
      }
      Object.prototype.hasOwnProperty.call(this.state.securedFields, Gi) &&
        setTimeout(function () {
          var e = {
            txVariant: t.state.type,
            fieldType: Gi,
            autoComplete: o,
            numKey: t.state.securedFields.encryptedExpiryYear.numKey,
          };
          qo(e, t.getIframeContentWin(Gi), t.config.loadingContext);
        }, 0);
    }
  }
  function bl(e) {
    var t = wt({}, e);
    delete t.numKey,
      (t.rootNode = this.props.rootNode),
      (t.type = this.state.type);
    var a = t.fieldType;
    t.focus
      ? this.state.currentFocusObject !== a &&
        ((this.state.currentFocusObject = a),
        this.state.registerFieldForIos || this.handleAdditionalFields())
      : this.state.currentFocusObject === a &&
        (this.state.currentFocusObject = null);
    var r = t;
    (r.currentFocusObject = this.state.currentFocusObject),
      this.callbacks.onFocus(r);
  }
  function vl(e) {
    if (((this.state.iframeConfigCount += 1), this.state.isConfigured)) {
      var t = {
        additionalIframeConfigured: !0,
        fieldType: e.fieldType,
        type: this.state.type,
      };
      this.callbacks.onAdditionalSFConfig(t);
    } else if (this.state.iframeConfigCount === this.state.originalNumIframes) return this.isConfigured(), !0;
    return !1;
  }
  function gl() {
    var e;
    this.state.isConfigured = !0;
    var t = { iframesConfigured: !0, type: this.state.type };
    if (
      (this.callbacks.onConfigSuccess(t),
      1 === this.state.numIframes && this.config.isCreditCardType)
    ) {
      if ("card" === this.state.type)
        return void Ro(
          "ERROR: Payment method with a single secured field - but 'type' has not been set to a specific card brand"
        );
      var a = rl(this.state.type);
      if (a)
        (null !== (e = a.cvcPolicy) && void 0 !== e ? e : $i) !== $i &&
          this.assessFormValidity();
    }
  }
  function kl() {
    var e = (function (e) {
        for (var t = Object.keys(e), a = 0, r = t.length; a < r; a += 1)
          if (!e[t[a]].isValid) return !1;
        return !0;
      })(this.state.securedFields),
      t = e !== this.state.allValid;
    if (((this.state.allValid = e), e || t)) {
      var a = {
        allValid: e,
        type: this.state.type,
        rootNode: this.props.rootNode,
      };
      this.callbacks.onAllValid(a);
    }
  }
  function Cl(e) {
    var t = e.binValue,
      a = e.encryptedBin,
      r = e.uuid,
      n = { binValue: t, type: this.state.type };
    a && ((n.encryptedBin = a), (n.uuid = r)), this.callbacks.onBinValue(n);
  }
  function _l(e) {
    if (Object.prototype.hasOwnProperty.call(this.state.securedFields, Ki)) {
      var t = wt(wt({ txVariant: this.state.type }, e), {
        fieldType: Ki,
        numKey: this.state.securedFields.encryptedCardNumber.numKey,
      });
      qo(t, this.getIframeContentWin(Ki), this.config.loadingContext);
    }
  }
  function Nl(e) {
    var t,
      a = "card" === this.state.type;
    if (!e)
      return (
        a && this.sendBrandToCardSF({ brand: "reset" }),
        void (
          "card" === this.state.type &&
          Object.prototype.hasOwnProperty.call(this.state.securedFields, Hi) &&
          (this.state.securedFields.encryptedExpiryDate.datePolicy = to)
        )
      );
    var r = e.supportedBrands[0],
      n = r.brand,
      i = !0 === r.showExpiryDate ? to : ao,
      o = {
        brand: n,
        cvcPolicy: r.cvcPolicy,
        datePolicy: i,
        cvcText: "Security code",
        showSocialSecurityNumber:
          null !== (t = r.showSocialSecurityNumber) && void 0 !== t && t,
        fieldType: Ki,
      };
    this.processBrand(o),
      a &&
        this.sendBrandToCardSF({
          brand: n,
          enableLuhnCheck: !1 !== e.supportedBrands[0].enableLuhnCheck,
        }),
      Object.prototype.hasOwnProperty.call(this.state.securedFields, Yi) &&
        (this.state.securedFields.encryptedSecurityCode.cvcPolicy =
          r.cvcPolicy),
      Object.prototype.hasOwnProperty.call(this.state.securedFields, Hi) &&
        (this.state.securedFields.encryptedExpiryDate.datePolicy = i),
      this.assessFormValidity();
  }
  var wl = {
    __IS_ANDROID: /(android)/i.test(navigator.userAgent),
    __IS_IE: (function () {
      var e = navigator.userAgent,
        t = e.indexOf("MSIE ");
      if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
      if (e.indexOf("Trident/") > 0) {
        var a = e.indexOf("rv:");
        return parseInt(e.substring(a + 3, e.indexOf(".", a)), 10);
      }
      var r = e.indexOf("Edge/");
      return r > 0 && parseInt(e.substring(r + 5, e.indexOf(".", r)), 10);
    })(),
    __IS_IOS: /iphone|ipod|ipad/i.test(navigator.userAgent),
    __IS_FIREFOX: /(firefox)/i.test(navigator.userAgent),
    __IS_SAFARI:
      /(safari)/i.test(navigator.userAgent) &&
      !/(chrome)/i.test(navigator.userAgent),
  };
  var Pl = {
      touchendListener: function (e) {
        var t,
          a = e.target;
        if (
          a instanceof HTMLInputElement ||
          (HTMLTextAreaElement && a instanceof HTMLTextAreaElement)
        ) {
          var r = a.value,
            n = "selectionStart" in (t = a) ? t.selectionStart : 0,
            i = !1;
          n === r.length && ((n -= 1), (i = !0)),
            (a.value = r),
            a.setSelectionRange &&
              (a.focus(),
              a.setSelectionRange(n, n),
              i &&
                ((n += 1),
                setTimeout(function () {
                  a.setSelectionRange(n, n);
                }, 0)));
        } else {
          if (this.config.keypadFix) {
            var o = this.props.rootNode,
              l = document.createElement("input");
            (l.style.width = "1px"),
              (l.style.height = "1px"),
              (l.style.opacity = "0"),
              (l.style.fontSize = "18px"),
              o.appendChild(l),
              l.focus(),
              o.removeChild(l);
          }
        }
        this.destroyTouchendListener(),
          (this.state.registerFieldForIos = !1),
          this.postMessageToAllIframes({
            fieldType: "additionalField",
            click: !0,
          });
      },
      handleAdditionalFields: function () {
        if (wl.__IS_IOS) {
          var e = Jo(document, "body");
          (e.style.cursor = "pointer"),
            Qo(e, "touchend", this.touchendListener),
            (this.state.registerFieldForIos = !0);
        }
      },
      destroyTouchendListener: function () {
        if (wl.__IS_IOS) {
          var e = Jo(document, "body");
          (e.style.cursor = "auto"), $o(e, "touchend", this.touchendListener);
        }
      },
    },
    Fl = function (e, t) {
      return (function (e, t) {
        void 0 === t && (t = !0);
        var a = Array.prototype.slice.call(
            Wo(
              document,
              "*[data-cse], a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), object, embed, *[tabindex], *[contenteditable]"
            )
          ),
          r = [];
        a.forEach(function (e) {
          var t = e.getAttribute("tabindex"),
            a = !t || parseInt(t, 10) >= 0,
            n = e.getBoundingClientRect(),
            i = n.width > 0 && n.height > 0;
          a && i && r.push(e);
        });
        var n = (function (e, t) {
          for (var a = 0; a < e.length; a += 1) if (t(e[a])) return a;
          return -1;
        })(r, function (t) {
          return t === e || e.contains(t);
        });
        return r[n + (t ? -1 : 1)];
      })(Jo(t, "[data-cse=" + e + "]"));
    };
  var Dl = function (e) {
      var t;
      switch (this.state.type) {
        case "ach":
          t = (function (e) {
            var t;
            return (
              "encryptedBankLocationId" === e &&
                (t = "encryptedBankAccountNumber"),
              { fieldToFocus: t, additionalField: void 0 }
            );
          })(e);
          break;
        case "giftcard":
          t = (function (e, t) {
            var a, r;
            switch (e) {
              case Ki:
                a = Fl(Ki, t);
                break;
              case Yi:
                r = Ki;
            }
            return { fieldToFocus: r, additionalField: a };
          })(e, this.props.rootNode);
          break;
        default:
          t = this.state.isKCP
            ? (function (e, t, a) {
                var r, n;
                switch (e) {
                  case Ki:
                    r = Fl(Ki, t);
                    break;
                  case Hi:
                  case qi:
                    n = Ki;
                    break;
                  case Gi:
                    n = qi;
                    break;
                  case Yi:
                    n = a ? Gi : Hi;
                    break;
                  case Wi:
                  case "encryptedPin":
                    r = Fl(e, t);
                }
                return { fieldToFocus: n, additionalField: r };
              })(e, this.props.rootNode, this.state.hasSeparateDateFields)
            : (function (e, t, a, r) {
                var n, i;
                switch (e) {
                  case Ki:
                    n = Fl(Ki, t);
                    break;
                  case Hi:
                  case qi:
                    i = Ki;
                    break;
                  case Gi:
                    i = qi;
                    break;
                  case Yi:
                    1 === r ? (n = Fl(Yi, t)) : (i = a ? Gi : Hi);
                }
                return { fieldToFocus: i, additionalField: n };
              })(
                e,
                this.props.rootNode,
                this.state.hasSeparateDateFields,
                this.state.numIframes
              );
      }
      var a,
        r = t.fieldToFocus,
        n = t.additionalField;
      r
        ? this.setFocusOnFrame(r, false)
        : n && (a = n) && (a.focus(), a.blur(), a.focus());
    },
    Sl = function (e) {
      (wl.__IS_FIREFOX || (wl.__IS_IE && wl.__IS_IE <= 11)) &&
        this.handleShiftTab(e);
    },
    Al = function (e) {
      void 0 === e && (e = "You cannot use secured fields"),
        Vo(
          e +
            " - they are not yet configured. Use the 'onConfigSuccess' callback to know when this has happened."
        );
    },
    xl = (function (e) {
      function t(t) {
        var a = e.call(this, t) || this;
        return (
          (a.state = {
            type: a.props.type,
            brand:
              "card" !== a.props.type
                ? { brand: a.props.type, cvcPolicy: "required" }
                : { brand: null, cvcPolicy: "required" },
            allValid: void 0,
            numIframes: 0,
            originalNumIframes: 0,
            iframeCount: 0,
            iframeConfigCount: 0,
            isConfigured: !1,
            hasSeparateDateFields: !1,
            currentFocusObject: null,
            registerFieldForIos: !1,
            securedFields: {},
            isKCP: !1,
          }),
          (a.configHandler = Uo),
          (a.callbacksHandler = Ho),
          (a.handleIframeConfigFeedback = vl),
          (a.isConfigured = gl),
          (a.assessFormValidity = kl),
          (a.processBrand = Go),
          (a.handleValidation = el),
          (a.handleEncryption = tl),
          (a.createSecuredFields = dl),
          (a.createNonCardSecuredFields = cl),
          (a.createCardSecuredFields = ul),
          (a.setupSecuredField = pl),
          (a.postMessageToAllIframes = hl),
          (a.setFocusOnFrame = ml),
          (a.handleFocus = bl),
          (a.handleAdditionalFields = Pl.handleAdditionalFields),
          (a.touchendListener = Pl.touchendListener.bind(a)),
          (a.destroyTouchendListener = Pl.destroyTouchendListener),
          (a.handleSFShiftTab = Sl),
          (a.handleShiftTab = Dl),
          (a.destroySecuredFields = fl),
          (a.processAutoComplete = yl),
          (a.handleBinValue = Cl),
          (a.brandsFromBinLookup = Nl),
          (a.sendBrandToCardSF = _l),
          a.init(),
          a
        );
      }
      return (
        Nt(t, e),
        (t.prototype.init = function () {
          this.configHandler(), this.callbacksHandler(this.props.callbacks);
          var e = this.createSecuredFields();
          (this.state.numIframes = this.state.originalNumIframes = e),
            (this.state.isKCP = !!this.props.isKCP);
        }),
        (t.prototype.createReturnObject = function () {
          var e = this;
          return {
            updateStyles: function (t) {
              e.state.isConfigured
                ? e.postMessageToAllIframes({ styleObject: t })
                : Vo(
                    "You cannot update the secured fields styling - they are not yet configured. Use the 'onConfigSuccess' callback to know when this has happened."
                  );
            },
            setFocusOnFrame: function (t) {
              e.state.isConfigured
                ? e.setFocusOnFrame(t)
                : Al("You cannot set focus on any secured field");
            },
            isValidated: function (t, a) {
              if (e.state.isConfigured) {
                if (
                  Object.prototype.hasOwnProperty.call(e.state.securedFields, t)
                ) {
                  (e.state.securedFields[t].hasError = !0),
                    "" === e.state.securedFields[t].errorType &&
                      (e.state.securedFields[t].errorType = "isValidated");
                  var r = {
                    txVariant: e.state.type,
                    fieldType: t,
                    externalValidation: !0,
                    code: a,
                    numKey: e.state.securedFields[t].numKey,
                  };
                  qo(r, e.getIframeContentWin(t), e.config.loadingContext);
                }
              } else Al("You cannot set validated on any secured field");
            },
            hasUnsupportedCard: function (t, a) {
              if (e.state.isConfigured) {
                if (
                  Object.prototype.hasOwnProperty.call(e.state.securedFields, t)
                ) {
                  (e.state.securedFields[t].hasError = !!a),
                    (e.state.securedFields[t].errorType = a);
                  var r = {
                    txVariant: e.state.type,
                    fieldType: t,
                    unsupportedCard: !!a,
                    code: a,
                    numKey: e.state.securedFields[t].numKey,
                  };
                  qo(r, e.getIframeContentWin(t), e.config.loadingContext);
                }
              } else
                Al("You cannot set hasUnsupportedCard on any secured field");
            },
            destroy: function () {
              e.state.isConfigured
                ? e.destroySecuredFields()
                : Al("You cannot destroy secured fields");
            },
            brandsFromBinLookup: function (t) {
              if (!e.config.isCreditCardType) return null;
              e.state.isConfigured
                ? e.brandsFromBinLookup(t)
                : Al("You cannot set pass brands to secured fields");
            },
            addSecuredField: function (t) {
              var a = Jo(e.props.rootNode, '[data-cse="' + t + '"]');
              a && ((e.state.numIframes += 1), e.setupSecuredField(a));
            },
            removeSecuredField: function (t) {
              if (e.state.securedFields[t]) {
                e.state.securedFields[t].destroy(),
                  delete e.state.securedFields[t],
                  (e.state.numIframes -= 1);
                var a = {
                  additionalIframeRemoved: !0,
                  fieldType: t,
                  type: e.state.type,
                };
                e.callbacks.onAdditionalSFRemoved(a);
              }
            },
            setKCPStatus: function (t) {
              e.state.isKCP = t;
            },
          };
        }),
        (t.prototype.getIframeContentWin = function (e) {
          var t;
          return (
            (null === (t = this.state.securedFields[e]) || void 0 === t
              ? void 0
              : t.iframeContentWindow) || null
          );
        }),
        t
      );
    })(function (e) {
      (this.props = e),
        (this.state = {}),
        (this.config = {}),
        (this.callbacks = {});
    }),
    Bl = function (e) {
      if (!e) throw new Error("No securedFields configuration object defined");
      var t = wt({}, e),
        a = nl(t.type);
      if (
        ((t.type = a ? "card" : t.type),
        !Object.prototype.hasOwnProperty.call(t, "rootNode"))
      )
        return (
          Ro(
            'ERROR: SecuredFields configuration object is missing a "rootNode" property'
          ),
          null
        );
      if (Eo(t.clientKey))
        return (
          Vo(
            'WARNING: AdyenCheckout configuration object is missing a "clientKey" property.'
          ),
          null
        );
      var r = (function (e) {
        var t;
        return (
          "object" == typeof e && (t = e),
          "string" != typeof e || (t = Jo(document, e)) ? t : null
        );
      })(t.rootNode);
      return r
        ? ((t.rootNode = r), new xl(t).createReturnObject())
        : (window.console &&
            window.console.error &&
            window.console.error(
              "ERROR: SecuredFields cannot find a valid rootNode element for",
              t.type
            ),
          null);
    };
  var zl = {
      handleFocus: function (e) {
        e.fieldType === Yi && (this.numCharsInCVC = e.numChars),
          this.props.onFocus(e);
      },
      handleOnAllValid: function (e) {
        var t = this;
        return (
          !this.state.hasUnsupportedCard &&
          (this.setState({ isSfpValid: e.allValid }, function () {
            t.props.onChange(t.state), t.props.onAllValid(e);
          }),
          !0)
        );
      },
      handleOnAutoComplete: function (e) {
        var t = this;
        this.setState({ autoCompleteName: e.value }, function () {
          t.props.onChange(t.state), t.setState({ autoCompleteName: null });
        }),
          this.props.onAutoComplete(e);
      },
      handleOnFieldValid: function (e) {
        var t = this;
        return (
          (!this.state.hasUnsupportedCard || e.fieldType !== Ki) &&
          (this.setState(
            function (t) {
              var a, r, n;
              return {
                data: wt(
                  wt({}, t.data),
                  ((a = {}), (a[e.encryptedFieldName] = e.blob), a)
                ),
                valid: wt(
                  wt({}, t.valid),
                  ((r = {}), (r[e.encryptedFieldName] = e.valid), r)
                ),
                errors: wt(
                  wt({}, t.errors),
                  ((n = {}), (n[e.fieldType] = !0 === t.errors[e.fieldType]), n)
                ),
              };
            },
            function () {
              t.props.onChange(t.state), t.props.onFieldValid(e);
            }
          ),
          !0)
        );
      },
      handleOnLoad: function (e) {
        var t = this;
        this.props.onLoad(e),
          (this.originKeyErrorTimeout = setTimeout(function () {
            "ready" !== t.state.status &&
              (t.setState({ status: "originKeyError" }),
              t.props.onError({
                error: "originKeyError",
                fieldType: "defaultError",
              }));
          }, this.originKeyTimeoutMS));
      },
      handleOnConfigSuccess: function (e) {
        var t = this;
        clearTimeout(this.originKeyErrorTimeout),
          this.setState({ status: "ready" }, function () {
            t.props.onConfigSuccess(e);
          });
      },
      handleOnBrand: function (e) {
        var t = this;
        this.setState(
          function (a) {
            var r, n;
            return {
              brand: e.brand,
              cvcPolicy: null !== (n = e.cvcPolicy) && void 0 !== n ? n : $i,
              showSocialSecurityNumber: e.showSocialSecurityNumber,
              errors: wt(
                wt({}, a.errors),
                ((r = {}),
                (r.encryptedSecurityCode =
                  ((e.cvcPolicy !== Xi && e.cvcPolicy !== eo) ||
                    0 !== t.numCharsInCVC) &&
                  a.errors.encryptedSecurityCode),
                r)
              ),
              hideDateForBrand: e.datePolicy === ao,
            };
          },
          function () {
            var a, r, n;
            t.props.onChange(t.state),
              t.props.onBrand(
                wt(wt({}, e), {
                  brandImageUrl:
                    ((a = e.brand),
                    (r = t.props.loadingContext),
                    (n = "card" === a ? "nocard" : a || "nocard"),
                    Aa({ type: n, extension: "svg", loadingContext: r })(n)),
                })
              );
          }
        );
      },
      handleOnError: function (e, t) {
        void 0 === t && (t = null),
          this.state.hasUnsupportedCard && e.fieldType;
        var a = e.error;
        this.setState(function (r) {
          var n;
          return {
            errors: wt(
              wt({}, r.errors),
              ((n = {}), (n[e.fieldType] = a || !1), n)
            ),
            hasUnsupportedCard: null !== t && t,
          };
        }),
          (e.errorI18n = this.props.i18n.get(a));
        var r = il(a);
        return (
          (e.errorText = "" !== r ? r : "error was cleared"),
          this.props.onError(e),
          !0
        );
      },
      handleOnNoDataRequired: function () {
        var e = this;
        this.setState({ status: "ready" }, function () {
          return e.props.onChange({ isSfpValid: !0 });
        });
      },
    },
    Tl = {
      type: "card",
      keypadFix: !0,
      rootNode: null,
      loadingContext: null,
      groupTypes: [],
      allowedDOMAccess: !1,
      showWarnings: !1,
      autoFocus: !0,
      trimTrailingSeparator: !0,
      onChange: function () {},
      onLoad: function () {},
      onConfigSuccess: function () {},
      onAllValid: function () {},
      onFieldValid: function () {},
      onBrand: function () {},
      onError: function () {},
      onBinValue: function () {},
      onFocus: function () {},
      onAutoComplete: function () {},
      placeholders: {},
      styles: {},
    },
    Ml = (function (e) {
      function t(t) {
        var a = e.call(this, t) || this;
        a.setRootNode = function (e) {
          a.rootNode = e;
        };
        var r = {
          status: "loading",
          brand: t.type,
          errors: {},
          valid: {},
          data: {},
          cvcPolicy: $i,
          isSfpValid: !1,
          hasKoreanFields: a.props.hasKoreanFields,
        };
        return (
          (a.state = r),
          (a.originKeyErrorTimeout = null),
          (a.originKeyTimeoutMS = 15e3),
          (a.numCharsInCVC = 0),
          (a.handleOnLoad = zl.handleOnLoad.bind(a)),
          (a.handleOnConfigSuccess = zl.handleOnConfigSuccess.bind(a)),
          (a.handleOnFieldValid = zl.handleOnFieldValid.bind(a)),
          (a.handleOnAllValid = zl.handleOnAllValid.bind(a)),
          (a.handleOnBrand = zl.handleOnBrand.bind(a)),
          (a.handleFocus = zl.handleFocus.bind(a)),
          (a.handleOnError = zl.handleOnError.bind(a)),
          (a.handleOnNoDataRequired = zl.handleOnNoDataRequired.bind(a)),
          (a.handleOnAutoComplete = zl.handleOnAutoComplete.bind(a)),
          (a.processBinLookupResponse = a.processBinLookupResponse.bind(a)),
          (a.setFocusOn = a.setFocusOn.bind(a)),
          (a.updateStyles = a.updateStyles.bind(a)),
          (a.handleUnsupportedCard = a.handleUnsupportedCard.bind(a)),
          (a.showValidation = a.showValidation.bind(a)),
          (a.destroy = a.destroy.bind(a)),
          a
        );
      }
      return (
        Nt(t, e),
        (t.prototype.componentDidMount = function () {
          this.props.rootNode && this.setRootNode(this.props.rootNode);
          var e,
            t = (e = this.rootNode)
              ? Array.prototype.slice
                  .call(e.querySelectorAll('[data-cse*="encrypted"]'))
                  .map(function (e) {
                    return e.getAttribute("data-cse");
                  })
              : [],
            a = t.reduce(So, {});
          this.setState({ valid: a }),
            (this.numDateFields = t.filter(function (e) {
              return e.match(/Expiry/);
            }).length),
            t.length
              ? (this.destroy(), this.initializeCSF(this.rootNode))
              : this.handleOnNoDataRequired();
        }),
        (t.prototype.componentDidUpdate = function () {
          this.checkForKCPFields();
        }),
        (t.prototype.componentWillUnmount = function () {
          this.csf = null;
        }),
        (t.prototype.initializeCSF = function (e) {
          var t = this.props.loadingContext,
            a = {
              rootNode: e,
              type: this.props.type,
              clientKey: this.props.clientKey,
              cardGroupTypes: this.props.groupTypes,
              allowedDOMAccess: this.props.allowedDOMAccess,
              autoFocus: this.props.autoFocus,
              trimTrailingSeparator: this.props.trimTrailingSeparator,
              loadingContext: t,
              keypadFix: this.props.keypadFix,
              showWarnings: this.props.showWarnings,
              iframeUIConfig: { sfStyles: this.props.styles },
              i18n: this.props.i18n,
              callbacks: {
                onLoad: this.handleOnLoad,
                onConfigSuccess: this.handleOnConfigSuccess,
                onFieldValid: this.handleOnFieldValid,
                onAllValid: this.handleOnAllValid,
                onBrand: this.handleOnBrand,
                onError: this.handleOnError,
                onFocus: this.handleFocus,
                onBinValue: this.props.onBinValue,
                onAutoComplete: this.handleOnAutoComplete,
                onAdditionalSFConfig: this.props.onAdditionalSFConfig,
                onAdditionalSFRemoved: this.props.onAdditionalSFRemoved,
              },
              isKCP: this.state.hasKoreanFields,
              legacyInputMode: this.props.legacyInputMode,
              minimumExpiryDate: this.props.minimumExpiryDate,
            };
          this.csf = Bl(a);
        }),
        (t.prototype.checkForKCPFields = function () {
          var e = this,
            t = !1;
          if (
            (this.props.koreanAuthenticationRequired &&
              (t = this.issuingCountryCode
                ? "kr" === this.issuingCountryCode
                : "kr" === this.props.countryCode),
            this.state.hasKoreanFields && !t)
          ) {
            this.setState(
              function (e) {
                var t, a, r;
                return {
                  data: wt(
                    wt({}, e.data),
                    ((t = {}), (t.encryptedPassword = void 0), t)
                  ),
                  valid: wt(
                    wt({}, e.valid),
                    ((a = {}), (a.encryptedPassword = !1), a)
                  ),
                  errors: wt(
                    wt({}, e.errors),
                    ((r = {}), (r.encryptedPassword = !1), r)
                  ),
                  hasKoreanFields: !1,
                };
              },
              function () {
                e.props.onChange(e.state);
              }
            ),
              this.csf.removeSecuredField(Wi),
              this.csf.setKCPStatus(!1);
          }
          if (!this.state.hasKoreanFields && t) {
            this.setState(
              function (e) {
                var t;
                return {
                  valid: wt(
                    wt({}, e.valid),
                    ((t = {}), (t.encryptedPassword = !1), t)
                  ),
                  hasKoreanFields: !0,
                  isSfpValid: !1,
                };
              },
              function () {
                e.props.onChange(e.state);
              }
            ),
              this.csf.addSecuredField(Wi),
              this.csf.setKCPStatus(!0);
          }
        }),
        (t.prototype.getChildContext = function () {
          return { i18n: this.props.i18n };
        }),
        (t.prototype.handleUnsupportedCard = function (e) {
          var t = !!e.error;
          return (
            this.handleOnError(e, t),
            this.csf && this.csf.hasUnsupportedCard(Ki, e.error),
            t
          );
        }),
        (t.prototype.setFocusOn = function (e) {
          this.csf && this.csf.setFocusOnFrame(e);
        }),
        (t.prototype.updateStyles = function (e) {
          this.csf && this.csf.updateStyles(e);
        }),
        (t.prototype.destroy = function () {
          this.csf && this.csf.destroy();
        }),
        (t.prototype.showValidation = function () {
          var e = this,
            t = this.numDateFields,
            a = this.state;
          Object.keys(a.valid)
            .reduce(Ao(t, a), [])
            .forEach(function (t) {
              var r = (function (e, t, a) {
                return {
                  rootNode: t,
                  fieldType: e,
                  error: ga(a, "errors." + e) || Do,
                  type: "card",
                };
              })(t, e.rootNode, a);
              e.handleOnError(r),
                e.csf && e.csf.isValidated && e.csf.isValidated(t, r.error);
            });
        }),
        (t.prototype.processBinLookupResponse = function (e, t) {
          var a,
            r = this;
          this.state.hasUnsupportedCard &&
            (this.setState(function (e) {
              var t;
              return {
                errors: wt(
                  wt({}, e.errors),
                  ((t = {}), (t.encryptedCardNumber = !1), t)
                ),
                hasUnsupportedCard: !1,
              };
            }),
            this.csf && this.csf.hasUnsupportedCard(Ki, "")),
            (this.issuingCountryCode =
              null === (a = null == e ? void 0 : e.issuingCountryCode) ||
              void 0 === a
                ? void 0
                : a.toLowerCase()),
            (null == t ? void 0 : t.brand) &&
              this.setState(t, function () {
                r.props.onChange(r.state);
              }),
            this.csf && this.csf.brandsFromBinLookup(e);
        }),
        (t.prototype.render = function (e, t) {
          return e.render(
            { setRootNode: this.setRootNode, setFocusOn: this.setFocusOn },
            t
          );
        }),
        (t.defaultProps = Tl),
        t
      );
    })(ea);
  function Il(e) {
    var t = e.storeDetails,
      a = void 0 !== t && t,
      r = Pt(e, ["storeDetails"]),
      n = er().i18n,
      i = La(a),
      o = i[0],
      l = i[1];
    return (
      Ua(
        function () {
          r.onChange(o);
        },
        [o]
      ),
      Qt(
        "div",
        { className: "adyen-checkout__store-details" },
        qr("boolean", {
          onChange: function (e) {
            l(e.target.checked);
          },
          label: n.get("storeDetails"),
          value: o,
          name: "storeDetails",
        })
      )
    );
  }
  var jl = {
      details: [],
      type: "card",
      hasHolderName: !1,
      holderNameRequired: !1,
      enableStoreDetails: !1,
      hideCVC: !1,
      hasCVC: !0,
      hasStoreDetails: !1,
      storedDetails: !1,
      showBrandIcon: !0,
      positionHolderNameOnTop: !1,
      billingAddressRequired: !1,
      billingAddressRequiredFields: [
        "street",
        "houseNumberOrName",
        "postalCode",
        "city",
        "stateOrProvince",
        "country",
      ],
      installmentOptions: {},
      configuration: {
        koreanAuthenticationRequired: !1,
        socialSecurityNumberMode: "auto",
      },
      onLoad: function () {},
      onConfigSuccess: function () {},
      onAllValid: function () {},
      onFieldValid: function () {},
      onBrand: function () {},
      onError: function () {},
      onBinValue: function () {},
      onBlur: function () {},
      onFocus: function () {},
      onChange: function () {},
      holderName: "",
      data: { holderName: "", billingAddress: {} },
      styles: {},
      placeholders: {},
    },
    Ol = { base: { caretColor: "#0066FF" } },
    El = function (e, t) {
      return (
        void 0 === t && (t = !1),
        !t || (!!e && "string" == typeof e && e.trim().length > 0)
      );
    };
  function Rl(e) {
    return e.replace(/[^0-9]/g, "").trim();
  }
  function Ll(e) {
    if ((void 0 === e && (e = ""), "string" != typeof e)) return "";
    var t = Rl(e);
    return t.length > 11
      ? (function (e) {
          return e.replace(
            /^(\d{2})(\d{3})(\d{3})?(\d{4})?(\d{1,2})?$/g,
            function (e, t, a, r, n, i) {
              return (
                void 0 === n && (n = ""),
                void 0 === i && (i = ""),
                t + "." + a + "." + r + "/" + n + (i.length ? "-" + i : "")
              );
            }
          );
        })(t)
      : (function (e) {
          return e
            .replace(/\W/gi, "")
            .replace(/(\d{3})(?!$)/g, "$1.")
            .replace(/(.{11}).(\d{1,2})$/g, "$1-$2");
        })(t);
  }
  function Vl(e) {
    return /(^\d{3}\.\d{3}\.\d{3}-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$)/.test(
      e
    );
  }
  var Ul = {
    handleFocus: function (e) {
      var t = !0 === e.focus;
      this.setState({ focusedElement: e.currentFocusObject }),
        t ? this.props.onFocus(e) : this.props.onBlur(e);
    },
    handleAddress: function (e) {
      this.setState(function (t) {
        return wt(wt({}, t), {
          billingAddress: e.data,
          valid: wt(wt({}, t.valid), { billingAddress: e.isValid }),
        });
      });
    },
    handleKCPAuthentication: function (e, t) {
      this.setState(function (a) {
        return { data: wt(wt({}, a.data), e), valid: wt(wt({}, a.valid), t) };
      });
    },
    handleCPF: function (e, t) {
      void 0 === t && (t = !1);
      var a = Ll(e.target.value),
        r = Vl(a);
      this.setState(function (e) {
        return wt(wt({}, e), {
          socialSecurityNumber: a,
          errors: wt(wt({}, e.errors), { socialSecurityNumber: t && !r }),
          valid: wt(wt({}, e.valid), { socialSecurityNumber: r }),
        });
      });
    },
    handleOnStoreDetails: function (e) {
      this.setState({ storePaymentMethod: e });
    },
    handleHolderName: function (e) {
      var t = this,
        a = e.target.value;
      this.setState(function (e) {
        return {
          data: wt(wt({}, e.data), { holderName: a }),
          errors: wt(wt({}, e.errors), {
            holderName: !!t.props.holderNameRequired && !El(a),
          }),
          valid: wt(wt({}, e.valid), {
            holderName:
              !t.props.holderNameRequired || El(a, t.props.holderNameRequired),
          }),
        };
      });
    },
    handleInstallments: function (e) {
      this.setState({ installments: e });
    },
    handleSecuredFieldsChange: function (e) {
      var t = this,
        a = e,
        r =
          a.autoCompleteName && this.props.hasHolderName
            ? a.autoCompleteName
            : this.state.data.holderName;
      this.setState(function (e) {
        return wt(wt({}, e), {
          data: wt(wt(wt({}, t.state.data), a.data), { holderName: r }),
          errors: wt(wt({}, t.state.errors), a.errors),
          valid: wt(wt(wt({}, t.state.valid), a.valid), {
            holderName:
              !t.props.holderNameRequired || El(r, t.props.holderNameRequired),
          }),
          isSfpValid: a.isSfpValid,
          cvcPolicy: a.cvcPolicy,
          showSocialSecurityNumber: a.showSocialSecurityNumber,
          hideDateForBrand: a.hideDateForBrand,
          brand: a.brand,
        });
      });
    },
    handleAdditionalDataSelection: function (e) {
      var t = e.target.getAttribute("data-value");
      this.setState({ additionalSelectValue: t });
      var a = this.state.additionalSelectElements.reduce(function (e, a) {
        return a.brandObject.brand === t && e.push(a.brandObject), e;
      }, []);
      this.sfp.current.processBinLookupResponse({
        issuingCountryCode: this.state.issuingCountryCode,
        supportedBrands: a,
      });
    },
    validateCardInput: function () {
      var e,
        t = this,
        a = this.props,
        r = a.configuration,
        n = a.countryCode,
        i = a.billingAddressRequired,
        o = a.holderNameRequired,
        l = El(this.state.data.holderName, o),
        s = this.state.isSfpValid,
        d = !i || this.state.valid.billingAddress,
        c =
          null !== (e = this.state.issuingCountryCode) && void 0 !== e ? e : n,
        u =
          !r.koreanAuthenticationRequired ||
          "kr" !== c ||
          (!!this.state.valid.taxNumber &&
            !!this.state.valid.encryptedPassword),
        p =
          !(
            (this.state.showSocialSecurityNumber &&
              "auto" === r.socialSecurityNumberMode) ||
            "show" === r.socialSecurityNumberMode
          ) || !!this.state.valid.socialSecurityNumber,
        m = s && l && d && u && p;
      this.setState({ isValid: m }, function () {
        t.props.onChange(t.state);
      });
    },
  };
  function Kl(e, t) {
    var a;
    if (e) {
      if (
        null === (a = e.supportedBrands) || void 0 === a ? void 0 : a.length
      ) {
        var r = e.supportedBrands;
        if (r.length > 1) {
          var n =
            ((o = (i = r)[0]),
            (l = i[1]),
            {
              stateObject: {
                additionalSelectElements: [
                  { id: o.brand, brandObject: o },
                  { id: l.brand, brandObject: l },
                ],
                additionalSelectValue: "",
              },
              leadBrand: o,
            });
          this.setState(n.stateObject),
            this.sfp.current.processBinLookupResponse({
              issuingCountryCode: e.issuingCountryCode,
              supportedBrands: [n.leadBrand],
            });
        } else
          this.resetAdditionalSelectState(),
            this.setState({ additionalSelectValue: r[0].brand }),
            this.sfp.current.processBinLookupResponse({
              issuingCountryCode: e.issuingCountryCode,
              supportedBrands: r,
            });
      }
      var i, o, l;
    } else {
      this.resetAdditionalSelectState();
      var s = t && "card" !== this.props.type ? this.props.type : null;
      this.sfp.current.processBinLookupResponse(e, {
        brand: s,
        cvcPolicy: this.props.cvcPolicy,
      });
    }
  }
  function Hl(e) {
    var t = e.onChange,
      a = e.onInput,
      r = e.valid,
      n = void 0 !== r && r,
      i = e.error,
      o = void 0 === i ? null : i,
      l = e.data,
      s = void 0 === l ? "" : l,
      d = er().i18n;
    return Qt(
      Cr,
      {
        label: "" + d.get("boleto.socialSecurityNumber"),
        classNameModifiers: ["socialSecurityNumber"],
        errorMessage: !!o,
        isValid: Boolean(n),
      },
      qr("text", {
        name: "socialSecurityNumber",
        autocorrect: "off",
        spellcheck: !1,
        value: s,
        maxLength: 18,
        onInput: a,
        onChange: t,
      })
    );
  }
  var ql = (function (e) {
    function t(t) {
      var a = e.call(this, t) || this;
      return (
        (a.sfp = { current: null }),
        (a.billingAddressRef = { current: null }),
        (a.kcpAuthenticationRef = { current: null }),
        (a.state = wt(
          wt(
            {
              status: "ready",
              errors: {},
              valid: wt({}, a.props.holderNameRequired && { holderName: !1 }),
              data: wt(
                {},
                a.props.hasHolderName && {
                  holderName: a.props.holderName || a.props.data.holderName,
                }
              ),
            },
            a.props.billingAddressRequired && {
              billingAddress: wt({}, a.props.data.billingAddress),
            }
          ),
          {
            isValid: !1,
            cvcPolicy: $i,
            hideDateForBrand: !1,
            focusedElement: "",
            additionalSelectElements: [],
            additionalSelectValue: "",
            issuingCountryCode: null,
          }
        )),
        (a.validateCardInput = Ul.validateCardInput.bind(a)),
        (a.handleFocus = Ul.handleFocus.bind(a)),
        (a.handleAddress = Ul.handleAddress.bind(a)),
        (a.handleHolderName = Ul.handleHolderName.bind(a)),
        (a.handleInstallments = Ul.handleInstallments.bind(a)),
        (a.handleKCPAuthentication = Ul.handleKCPAuthentication.bind(a)),
        (a.handleCPF = Ul.handleCPF.bind(a)),
        (a.handleSecuredFieldsChange = Ul.handleSecuredFieldsChange.bind(a)),
        (a.handleOnStoreDetails = Ul.handleOnStoreDetails.bind(a)),
        (a.handleAdditionalDataSelection =
          Ul.handleAdditionalDataSelection.bind(a)),
        (a.processBinLookup = Kl.bind(a)),
        a
      );
    }
    return (
      Nt(t, e),
      (t.prototype.componentDidMount = function () {
        (this.setFocusOn = this.sfp.current.setFocusOn),
          (this.updateStyles = this.sfp.current.updateStyles),
          (this.handleUnsupportedCard = this.sfp.current.handleUnsupportedCard);
      }),
      (t.prototype.componentDidUpdate = function (e, t) {
        (Oo(t.billingAddress, this.state.billingAddress) &&
          t.storePaymentMethod === this.state.storePaymentMethod &&
          t.socialSecurityNumber === this.state.socialSecurityNumber &&
          Oo(t.installments, this.state.installments) &&
          t.isSfpValid === this.state.isSfpValid &&
          t.cvcPolicy === this.state.cvcPolicy &&
          t.hideDateForBrand === this.state.hideDateForBrand &&
          t.brand === this.state.brand &&
          t.additionalSelectValue === this.state.additionalSelectValue &&
          Oo(t.data, this.state.data)) ||
          this.validateCardInput();
      }),
      (t.prototype.componentWillUnmount = function () {
        this.sfp.current.destroy(), (this.sfp = null);
      }),
      (t.prototype.getChildContext = function () {
        return { i18n: this.props.i18n };
      }),
      (t.prototype.setStatus = function (e) {
        this.setState({ status: e });
      }),
      (t.prototype.resetAdditionalSelectState = function () {
        this.setState({
          additionalSelectElements: [],
          additionalSelectValue: "",
        });
      }),
      (t.prototype.showValidation = function () {
        var e, t;
        this.sfp.current.showValidation(),
          this.props.holderNameRequired &&
            !this.state.valid.holderName &&
            this.setState(function (e) {
              return { errors: wt(wt({}, e.errors), { holderName: !0 }) };
            }),
          ((this.state.showSocialSecurityNumber &&
            "auto" === this.props.configuration.socialSecurityNumberMode) ||
            "show" === this.props.configuration.socialSecurityNumberMode) &&
            !this.state.valid.socialSecurityNumber &&
            this.setState(function (e) {
              return {
                errors: wt(wt({}, e.errors), { socialSecurityNumber: !0 }),
              };
            }),
          (null === (e = this.billingAddressRef) || void 0 === e
            ? void 0
            : e.current) && this.billingAddressRef.current.showValidation(),
          (null === (t = this.kcpAuthenticationRef) || void 0 === t
            ? void 0
            : t.current) && this.kcpAuthenticationRef.current.showValidation();
      }),
      (t.prototype.processBinLookupResponse = function (e, t) {
        var a = this,
          r = (null == e ? void 0 : e.issuingCountryCode)
            ? e.issuingCountryCode.toLowerCase()
            : null;
        this.setState({ issuingCountryCode: r }, function () {
          a.processBinLookup(e, t);
        });
      }),
      (t.prototype.render = function (e, t) {
        var a = this,
          r = e.countryCode,
          n = e.loadingContext,
          i = e.hasHolderName,
          o = e.hasCVC,
          l = e.installmentOptions,
          s = e.positionHolderNameOnTop,
          d = e.showInstallmentAmounts,
          c = e.configuration,
          u = t.status,
          p = t.cvcPolicy,
          m = t.hideDateForBrand,
          h = t.focusedElement,
          f = t.issuingCountryCode,
          y = !!Object.keys(l).length,
          b = this.props.oneClick || !!this.props.storedPaymentMethodId,
          v = "kr" === (null != f ? f : r),
          g = null == d || d,
          k =
            (this.state.showSocialSecurityNumber &&
              "auto" === c.socialSecurityNumberMode) ||
            "show" === c.socialSecurityNumberMode,
          C = function () {
            return Qt(fo, {
              required: a.props.holderNameRequired,
              placeholder: a.props.placeholders.holderName,
              value: a.state.data.holderName,
              error: !!a.state.errors.holderName,
              isValid: !!a.state.valid.holderName,
              onChange: a.handleHolderName,
            });
          };
        return Qt(
          Ml,
          wt({ ref: this.sfp }, this.props, {
            styles: wt(wt({}, Ol), this.props.styles),
            koreanAuthenticationRequired: c.koreanAuthenticationRequired,
            hasKoreanFields: !(!c.koreanAuthenticationRequired || "kr" !== r),
            onChange: this.handleSecuredFieldsChange,
            onBrand: this.props.onBrand,
            onFocus: this.handleFocus,
            type: this.props.brand,
            oneClick: b,
            render: function (e, t) {
              var r,
                d,
                f,
                b = e.setRootNode,
                _ = e.setFocusOn;
              return Qt(
                "div",
                {
                  ref: b,
                  className:
                    "adyen-checkout__card-input " +
                    oo["card-input__wrapper"] +
                    " adyen-checkout__card-input--" +
                    (null !== (r = a.props.fundingSource) && void 0 !== r
                      ? r
                      : "credit"),
                },
                a.props.storedPaymentMethodId
                  ? Qt(
                      No,
                      { status: t.status },
                      Qt(
                        wo,
                        wt({}, a.props, {
                          errors: t.errors,
                          brand: t.brand,
                          hasCVC: o,
                          cvcPolicy: p,
                          onFocusField: _,
                          focusedElement: h,
                          status: t.status,
                          valid: t.valid,
                        })
                      ),
                      y &&
                        Qt(yo, {
                          amount: a.props.amount,
                          brand: t.brand,
                          installmentOptions: l,
                          onChange: a.handleInstallments,
                          type: g ? "amount" : "months",
                        })
                    )
                  : Qt(
                      No,
                      { status: t.status },
                      i && s && Qt(C, null),
                      Qt(
                        ho,
                        wt({}, a.props, {
                          brand: t.brand,
                          focusedElement: h,
                          onFocusField: _,
                          hasCVC: o,
                          cvcPolicy: p,
                          hideDateForBrand: m,
                          errors: t.errors,
                          valid: t.valid,
                          dualBrandingElements:
                            a.state.additionalSelectElements.length > 0 &&
                            a.state.additionalSelectElements,
                          dualBrandingChangeHandler:
                            a.handleAdditionalDataSelection,
                          dualBrandingSelected: a.state.additionalSelectValue,
                        })
                      ),
                      i && !s && Qt(C, null),
                      c.koreanAuthenticationRequired &&
                        v &&
                        Qt(bo, {
                          onFocusField: _,
                          focusedElement: h,
                          encryptedPasswordState: {
                            data: t.encryptedPassword,
                            valid: !!t.valid && t.valid.encryptedPassword,
                            errors: !!t.errors && t.errors.encryptedPassword,
                          },
                          ref: a.kcpAuthenticationRef,
                          onChange: a.handleKCPAuthentication,
                        }),
                      k &&
                        Qt(
                          "div",
                          {
                            className:
                              "adyen-checkout__card__socialSecurityNumber",
                          },
                          Qt(Hl, {
                            onChange: function (e) {
                              return a.handleCPF(e, !0);
                            },
                            onInput: function (e) {
                              return a.handleCPF(e);
                            },
                            error:
                              null === (d = a.state.errors) || void 0 === d
                                ? void 0
                                : d.socialSecurityNumber,
                            valid:
                              null === (f = a.state.valid) || void 0 === f
                                ? void 0
                                : f.socialSecurityNumber,
                            data: a.state.socialSecurityNumber,
                          })
                        ),
                      a.props.enableStoreDetails &&
                        Qt(Il, { onChange: a.handleOnStoreDetails }),
                      y &&
                        Qt(yo, {
                          amount: a.props.amount,
                          brand: t.brand,
                          installmentOptions: l,
                          onChange: a.handleInstallments,
                          type: g ? "amount" : "months",
                        }),
                      a.props.billingAddressRequired &&
                        Qt(ri, {
                          label: "billingAddress",
                          data: a.state.billingAddress,
                          onChange: a.handleAddress,
                          allowedCountries:
                            a.props.billingAddressAllowedCountries,
                          requiredFields: a.props.billingAddressRequiredFields,
                          ref: a.billingAddressRef,
                        })
                    ),
                a.props.showPayButton &&
                  a.props.payButton({
                    status: u,
                    icon: Aa({ loadingContext: n, imageFolder: "components/" })(
                      "lock"
                    ),
                  })
              );
            },
          })
        );
      }),
      (t.defaultProps = jl),
      t
    );
  })(ea);
  function Gl(e) {
    var t = this;
    if (!1 !== this.props.doBinLookup) {
      if (e.encryptedBin && this.props.clientKey)
        (this.currentRequestId = e.uuid),
          Kn(
            {
              loadingContext: this.props.loadingContext,
              path: "v2/bin/binLookup?token=" + this.props.clientKey,
            },
            {
              supportedBrands: this.props.brands || Zi,
              encryptedBin: e.encryptedBin,
              requestId: e.uuid,
            }
          ).then(function (a) {
            var r;
            if ((null == a ? void 0 : a.requestId) === t.currentRequestId)
              if (null === (r = a.brands) || void 0 === r ? void 0 : r.length) {
                var n = (
                  2 === a.brands.length
                    ? (function (e, t) {
                        var a = e.map(function (e) {
                            return wt({}, e);
                          }),
                          r = a.some(no("bcmc")),
                          n = a.some(no("maestro")),
                          i = a.some(no("visa")),
                          o = a.some(no("cartebancaire")),
                          l = a.some(io);
                        return (
                          "bcmc" === t &&
                            r &&
                            "bcmc" !== a[0].brand &&
                            a.reverse(),
                          "bcmc" === t && r && n && (a[1].cvcPolicy = eo),
                          "card" === t &&
                            i &&
                            o &&
                            "visa" !== a[0].brand &&
                            a.reverse(),
                          "card" === t &&
                            l &&
                            (a[0].brand.includes("plcc") ||
                              a[0].brand.includes("cbcc") ||
                              a.reverse()),
                          a
                        );
                      })(a.brands, t.props.type)
                    : a.brands
                ).reduce(
                  function (e, t) {
                    return (
                      e.detectedBrands.push(t.brand),
                      !0 === t.supported ? (e.supportedBrands.push(t), e) : e
                    );
                  },
                  { supportedBrands: [], detectedBrands: [] }
                );
                if (n.supportedBrands.length)
                  return (
                    t.processBinLookupResponse(
                      wt(
                        {
                          issuingCountryCode: a.issuingCountryCode,
                          supportedBrands: n.supportedBrands,
                        },
                        a.showSocialSecurityNumber
                          ? {
                              showSocialSecurityNumber:
                                a.showSocialSecurityNumber,
                            }
                          : {}
                      )
                    ),
                    void t.props.onBinLookup({
                      type: e.type,
                      detectedBrands: n.detectedBrands,
                      supportedBrands: n.supportedBrands.map(function (e) {
                        return e.brand;
                      }),
                      brands: t.props.brands || Zi,
                    })
                  );
                if (n.detectedBrands.length) {
                  var i = {
                    type: "card",
                    fieldType: "encryptedCardNumber",
                    error: il(Po),
                    detectedBrands: n.detectedBrands,
                  };
                  return (
                    t.handleUnsupportedCard(i),
                    void t.props.onBinLookup({
                      type: e.type,
                      detectedBrands: n.detectedBrands,
                      supportedBrands: null,
                      brands: t.props.brands || Zi,
                    })
                  );
                }
              } else
                t.props.onBinLookup({
                  type: e.type,
                  detectedBrands: null,
                  supportedBrands: null,
                  brands: t.props.brands || Zi,
                }),
                  t.processBinLookupResponse(null, !0);
            else
              (null == a ? void 0 : a.requestId) ||
                t.props.onError(
                  a || { errorType: "binLookup", message: "unknownError" }
                );
          });
      else if (this.currentRequestId) {
        this.processBinLookupResponse(null, !0), (this.currentRequestId = null);
        this.handleUnsupportedCard({
          type: "card",
          fieldType: "encryptedCardNumber",
          error: "",
        });
      }
      this.props.onBinValue && this.props.onBinValue(e);
    } else this.props.onBinValue && this.props.onBinValue(e);
  }
  var Yl = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.onBrand = function (e) {
            t.eventEmitter.emit(
              "brand",
              wt(wt({}, e), { brand: "card" === e.brand ? null : e.brand })
            ),
              t.props.onBrand && t.props.onBrand(e);
          }),
          (t.onBinValue = Gl.bind(t)),
          t
        );
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (e) {
          var t, a, r;
          return wt(
            wt(
              wt(wt({}, e), {
                holderNameRequired: !!e.hasHolderName && e.holderNameRequired,
                hasCVC: !((e.brand && "bcmc" === e.brand) || e.hideCVC),
                billingAddressRequired:
                  !e.storedPaymentMethodId && e.billingAddressRequired,
              }),
              e.brands && !e.groupTypes && { groupTypes: e.brands }
            ),
            {
              type: "scheme" === e.type ? "card" : e.type,
              countryCode: e.countryCode ? e.countryCode.toLowerCase() : null,
              configuration: wt(wt({}, e.configuration), {
                socialSecurityNumberMode:
                  null !==
                    (a =
                      null === (t = e.configuration) || void 0 === t
                        ? void 0
                        : t.socialSecurityNumberMode) && void 0 !== a
                    ? a
                    : "auto",
              }),
              onBinLookup:
                null !== (r = e.onBinLookup) && void 0 !== r
                  ? r
                  : (e.onBinLookup = function () {}),
            }
          );
        }),
        (t.prototype.formatData = function () {
          var e = this.state.additionalSelectValue || this.props.brand,
            a =
              this.props.enableStoreDetails &&
              void 0 !== this.state.storePaymentMethod;
          return wt(
            wt(
              wt(
                wt(
                  wt(
                    {
                      paymentMethod: wt(
                        wt(
                          wt(
                            wt({ type: t.type }, this.state.data),
                            this.props.storedPaymentMethodId && {
                              storedPaymentMethodId:
                                this.props.storedPaymentMethodId,
                            }
                          ),
                          e && { brand: e }
                        ),
                        this.props.fundingSource && {
                          fundingSource: this.props.fundingSource,
                        }
                      ),
                    },
                    this.state.billingAddress && {
                      billingAddress: this.state.billingAddress,
                    }
                  ),
                  this.state.socialSecurityNumber && {
                    socialSecurityNumber: this.state.socialSecurityNumber,
                  }
                ),
                a && {
                  storePaymentMethod: Boolean(this.state.storePaymentMethod),
                }
              ),
              this.state.installments &&
                this.state.installments.value && {
                  installments: this.state.installments,
                }
            ),
            { browserInfo: this.browserInfo }
          );
        }),
        (t.prototype.updateStyles = function (e) {
          var t;
          return (
            (null === (t = this.componentRef) || void 0 === t
              ? void 0
              : t.updateStyles) && this.componentRef.updateStyles(e),
            this
          );
        }),
        (t.prototype.setFocusOn = function (e) {
          var t;
          return (
            (null === (t = this.componentRef) || void 0 === t
              ? void 0
              : t.setFocusOn) && this.componentRef.setFocusOn(e),
            this
          );
        }),
        (t.prototype.processBinLookupResponse = function (e, t) {
          var a;
          return (
            void 0 === t && (t = !1),
            (null === (a = this.componentRef) || void 0 === a
              ? void 0
              : a.processBinLookupResponse) &&
              this.componentRef.processBinLookupResponse(e, t),
            this
          );
        }),
        (t.prototype.handleUnsupportedCard = function (e) {
          var t;
          return (
            (null === (t = this.componentRef) || void 0 === t
              ? void 0
              : t.handleUnsupportedCard) &&
              this.componentRef.handleUnsupportedCard(e),
            this
          );
        }),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return !!this.state.isValid;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "icon", {
          get: function () {
            return Aa({ loadingContext: this.props.loadingContext })(
              this.brand
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "brands", {
          get: function () {
            var e = this.props,
              t = e.brands,
              a = e.loadingContext;
            return t
              ? t.map(function (e) {
                  return { icon: Aa({ loadingContext: a })(e), name: e };
                })
              : [];
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "brand", {
          get: function () {
            return this.props.brand || this.props.type;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "displayName", {
          get: function () {
            return this.props.storedPaymentMethodId
              ? "\u2022\u2022\u2022\u2022 " + this.props.lastFour
              : this.props.name || t.type;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "browserInfo", {
          get: function () {
            return hi();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.render = function () {
          var e = this;
          return Qt(
            si,
            {
              i18n: this.props.i18n,
              loadingContext: this.props.loadingContext,
            },
            Qt(
              ql,
              wt(
                {
                  ref: function (t) {
                    e.componentRef = t;
                  },
                },
                this.props,
                this.state,
                {
                  onChange: this.setState,
                  onSubmit: this.submit,
                  payButton: this.payButton,
                  onBrand: this.onBrand,
                  onBinValue: this.onBinValue,
                  brand: this.brand,
                }
              )
            )
          );
        }),
        (t.type = "scheme"),
        t
      );
    })(rr),
    Wl = (function (e) {
      function t(t) {
        var a = e.call(this, t) || this;
        return (
          (a.onBrand = function (e) {
            a.props.onBrand && a.props.onBrand(e);
          }),
          a
        );
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (t) {
          return wt(wt({}, e.prototype.formatProps.call(this, t)), {
            brands: ["bcmc", "maestro", "visa"],
            type: "bcmc",
            cvcPolicy: eo,
          });
        }),
        t
      );
    })(Yl);
  function Jl(e) {
    var t = e.backgroundUrl,
      a = void 0 === t ? "" : t,
      r = e.className,
      n = void 0 === r ? "" : r,
      i = e.classNameModifiers,
      o = void 0 === i ? [] : i,
      l = e.src,
      s = void 0 === l ? "" : l,
      d = e.alt,
      c = void 0 === d ? "" : d,
      u = e.showOnError,
      p = void 0 !== u && u,
      m = La(!1),
      h = m[0],
      f = m[1],
      y = Ha(null),
      b = function () {
        f(!0);
      },
      v = xa.apply(
        void 0,
        St(
          [
            [n],
            "adyen-checkout__image",
            { "adyen-checkout__image--loaded": h },
          ],
          o.map(function (e) {
            return "adyen-checkout__image--" + e;
          })
        )
      );
    return (
      Ua(function () {
        var e = a ? new Image() : y.current;
        (e.src = a || s), (e.onload = b), f(!!e.complete);
      }, []),
      a
        ? Qt("div", wt({ style: { backgroundUrl: a } }, e, { className: v }))
        : Qt(
            "img",
            wt({}, e, {
              alt: c,
              ref: y,
              className: v,
              onError: function () {
                f(p);
              },
            })
          )
    );
  }
  function Zl(e) {
    var t = e.description,
      a = void 0 === t ? "" : t,
      r = e.name,
      n = void 0 === r ? "" : r,
      i = e.logoUrl,
      o = void 0 === i ? "" : i,
      l = e.url,
      s = void 0 === l ? "" : l,
      d = e.backgroundUrl,
      c = void 0 === d ? "" : d;
    return Qt(
      "div",
      { className: "adyen-checkout__campaign-container" },
      Qt(Jl, {
        className: "adyen-checkout__campaign-background-image",
        style: {
          backgroundImage: "linear-gradient(0, #000, #0003), url(" + c + ")",
        },
        backgroundUrl: c,
      }),
      Qt(
        "div",
        { className: "adyen-checkout__campaign-content" },
        o &&
          Qt("img", {
            src: o,
            className: "adyen-checkout__campaign-logo",
            alt: n,
          }),
        n && Qt("div", { className: "adyen-checkout__campaign-title" }, n),
        a &&
          Qt(
            "div",
            { className: "adyen-checkout__campaign-description" },
            a,
            s && " \u203a"
          )
      )
    );
  }
  function Ql(e) {
    var t = e.url;
    return Qt(
      "div",
      { className: "adyen-checkout__campaign" },
      !t && Qt(Zl, wt({}, e)),
      t &&
        Qt(
          "a",
          {
            href: t,
            className: "adyen-checkout__campaign-link",
            target: "_blank",
            rel: "noopener noreferrer",
          },
          Qt(Zl, wt({}, e))
        )
    );
  }
  var $l = function (e) {
    var t = e.options,
      a = void 0 === t ? [] : t,
      r = e.name,
      n = e.onChange;
    return Qt(
      "div",
      { className: "adyen-checkout__button-group" },
      a.map(function (e, t) {
        var a = e.label,
          i = e.selected,
          o = e.value,
          l = e.disabled;
        return Qt(
          "label",
          {
            key: "" + r + t,
            className: xa({
              "adyen-checkout__button": !0,
              "adyen-checkout__button--selected": i,
              "adyen-checkout__button--disabled": l,
            }),
          },
          Qt("input", {
            type: "radio",
            className: "adyen-checkout__button-group__input",
            value: o,
            checked: i,
            onChange: n,
            disabled: l,
          }),
          Qt("span", { className: "adyen-checkout__button-text" }, a)
        );
      })
    );
  };
  function Xl(e) {
    var t = e.amounts,
      a = e.onCancel,
      r = e.onDonate,
      n = e.showCancelButton,
      i = void 0 === n || n,
      o = er(),
      l = o.i18n,
      s = o.loadingContext,
      d = t.currency,
      c = La("ready"),
      u = c[0],
      p = c[1],
      m = La(!1),
      h = m[0],
      f = m[1],
      y = La({ currency: d, value: null }),
      b = y[0],
      v = y[1];
    this.setStatus = function (e) {
      p(e);
    };
    var g = function (e, t) {
      return l.amount(e, t, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    };
    return (
      Ua(
        function () {
          e.onChange({ data: { amount: b }, isValid: h });
        },
        [b, h]
      ),
      "error" === u
        ? Qt(
            "div",
            { className: "adyen-checkout__adyen-giving" },
            Qt(Jl, {
              className:
                "adyen-checkout__status__icon adyen-checkout__status__icon--error",
              src: Aa({ loadingContext: s, imageFolder: "components/" })(
                "error"
              ),
              alt: l.get("error.message.unknown"),
            }),
            Qt(
              "div",
              { className: "adyen-checkout__status__text" },
              l.get("error.message.unknown")
            )
          )
        : "success" === u
        ? Qt(
            "div",
            { className: "adyen-checkout__adyen-giving" },
            Qt(Jl, {
              className:
                "adyen-checkout__status__icon adyen-checkout__status__icon--success",
              src: Aa({ loadingContext: s, imageFolder: "components/" })(
                "heart"
              ),
              alt: l.get("thanksForYourSupport"),
            }),
            Qt(
              "div",
              { className: "adyen-checkout__status__text" },
              l.get("thanksForYourSupport")
            )
          )
        : Qt(
            "div",
            { className: "adyen-checkout__adyen-giving" },
            Qt(Ql, wt({}, e)),
            Qt(
              "div",
              { className: "adyen-checkout__adyen-giving-actions" },
              Qt(
                "div",
                { className: "adyen-checkout__amounts" },
                Qt($l, {
                  options: t.values.map(function (e) {
                    return {
                      value: e,
                      label: g(e, d),
                      disabled: "loading" === u,
                      selected: e === b.value,
                    };
                  }),
                  name: "amount",
                  onChange: function (e) {
                    var t = e.target,
                      a = parseInt(t.value, 10);
                    f(!0),
                      v(function (e) {
                        return wt(wt({}, e), { value: a });
                      });
                  },
                })
              ),
              Qt(tr, {
                classNameModifiers: ["donate"],
                onClick: function () {
                  p("loading"), r({ data: { amount: b } });
                },
                label: l.get("donateButton"),
                disabled: !b.value,
                status: u,
              }),
              i &&
                Qt(tr, {
                  classNameModifiers: ["ghost", "decline"],
                  onClick: function () {
                    p("loading"), a({ data: { amount: b }, isValid: h });
                  },
                  disabled: "loading" === u,
                  label: l.get("notNowButton") + " \u203a",
                })
            )
          )
    );
  }
  Xl.defaultProps = {
    onCancel: function () {},
    onChange: function () {},
    onDonate: function () {},
    amounts: {},
    showCancelButton: !0,
  };
  var es = (function (e) {
      function t(t) {
        var a = e.call(this, t) || this;
        return (
          (a.handleRef = function (e) {
            a.componentRef = e;
          }),
          (a.donate = a.donate.bind(a)),
          a
        );
      }
      return (
        Nt(t, e),
        Object.defineProperty(t.prototype, "data", {
          get: function () {
            return this.state.data;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return this.state.isValid;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.setState = function (e) {
          this.state = wt(wt({}, this.state), e);
        }),
        (t.prototype.donate = function () {
          var e = this.data,
            t = this.isValid;
          this.props.onDonate({ data: e, isValid: t }, this);
        }),
        (t.prototype.render = function () {
          return Qt(
            si,
            {
              i18n: this.props.i18n,
              loadingContext: this.props.loadingContext,
            },
            Qt(
              Xl,
              wt({}, this.props, {
                ref: this.handleRef,
                onChange: this.setState,
                onDonate: this.donate,
              })
            )
          );
        }),
        (t.type = "donation"),
        (t.defaultProps = {
          onCancel: function () {},
          onDonate: function () {},
        }),
        t
      );
    })(rr),
    ts = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.componentDidMount = function () {
          var e = this;
          new Promise(function (t, a) {
            return e.props.beforeRedirect(t, a, e.props.url);
          })
            .then(function () {
              e.postForm
                ? e.postForm.submit()
                : window.location.assign(e.props.url);
            })
            .catch(function () {});
        }),
        (t.prototype.render = function (e) {
          var t = this,
            a = e.url,
            r = e.method,
            n = e.data,
            i = void 0 === n ? {} : n;
          return "POST" === r
            ? Qt(
                "form",
                {
                  method: "post",
                  action: a,
                  style: { display: "none" },
                  ref: function (e) {
                    t.postForm = e;
                  },
                },
                Object.keys(i).map(function (e) {
                  return Qt("input", {
                    type: "hidden",
                    name: e,
                    key: e,
                    value: i[e],
                  });
                })
              )
            : null;
        }),
        (t.defaultProps = {
          beforeRedirect: function (e) {
            return e();
          },
          method: "GET",
          data: {},
        }),
        t
      );
    })(ea);
  function as(e) {
    var t = e.payButton,
      a = e.onSubmit,
      r = e.amount,
      n = void 0 === r ? null : r,
      i = e.name,
      o = Pt(e, ["payButton", "onSubmit", "amount", "name"]),
      l = er().i18n,
      s = La("ready"),
      d = s[0],
      c = s[1];
    this.setStatus = function (e) {
      c(e);
    };
    return Qt(
      Xt,
      null,
      t(
        wt(wt({}, o), {
          status: d,
          classNameModifiers: ["standalone"],
          label:
            n && {}.hasOwnProperty.call(n, "value") && 0 === n.value
              ? l.get("preauthorizeWith") + " " + i
              : l.get("continueTo") + " " + i,
          onClick: a,
        })
      )
    );
  }
  var rs = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (e) {
          return wt(wt({}, e), { showButton: !!e.showPayButton });
        }),
        (t.prototype.formatData = function () {
          return { paymentMethod: { type: this.props.type } };
        }),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return !0;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "icon", {
          get: function () {
            return Aa({ loadingContext: this.props.loadingContext })(
              this.props.type
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.render = function () {
          var e = this;
          return this.props.url && this.props.method
            ? Qt(ts, wt({}, this.props))
            : this.props.showButton
            ? Qt(
                si,
                wt({}, this.props, {
                  loadingContext: this.props.loadingContext,
                }),
                Qt(
                  as,
                  wt({}, this.props, {
                    onSubmit: this.submit,
                    payButton: this.payButton,
                    ref: function (t) {
                      e.componentRef = t;
                    },
                  })
                )
              )
            : null;
        }),
        (t.type = "redirect"),
        (t.defaultProps = { type: t.type, showPayButton: !0 }),
        t
      );
    })(rr),
    ns = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (e) {
          var t;
          return wt(wt({}, e), {
            showPayButton:
              null !== (t = e.showButton) && void 0 !== t ? t : e.showPayButton,
          });
        }),
        (t.prototype.formatData = function () {
          return { paymentMethod: { type: t.type } };
        }),
        Object.defineProperty(t.prototype, "displayName", {
          get: function () {
            return this.props.name || this.constructor.type;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.render = function () {
          var e = this;
          return this.props.showPayButton
            ? Qt(
                si,
                {
                  i18n: this.props.i18n,
                  loadingContext: this.props.loadingContext,
                },
                Qt(
                  as,
                  wt({}, this.props, {
                    name: this.displayName,
                    onSubmit: this.submit,
                    payButton: this.payButton,
                    ref: function (t) {
                      e.componentRef = t;
                    },
                  })
                )
              )
            : null;
        }),
        (t.type = "giropay"),
        t
      );
    })(rs),
    is = 2,
    os = 0,
    ls = "adyen",
    ss = "https://pay.google.com/gp/p/js/pay.js";
  function ds(e) {
    var t = e.amount,
      a = e.countryCode,
      r = void 0 === a ? "US" : a,
      n = e.totalPriceStatus,
      i = void 0 === n ? "FINAL" : n,
      o = Pt(e, ["amount", "countryCode", "totalPriceStatus"]),
      l = String(Ht(t.value, t.currency));
    return wt(
      {
        countryCode: r,
        currencyCode: t.currency,
        totalPrice: l,
        totalPriceStatus: i,
      },
      o.transactionInfo
    );
  }
  function cs(e) {
    var t = e.configuration,
      a = Pt(e, ["configuration"]);
    return {
      apiVersion: is,
      apiVersionMinor: os,
      transactionInfo: ds(a),
      merchantInfo: { merchantId: t.merchantId, merchantName: t.merchantName },
      allowedPaymentMethods: [
        {
          type: "CARD",
          tokenizationSpecification: {
            type: "PAYMENT_GATEWAY",
            parameters: { gateway: ls, gatewayMerchantId: t.gatewayMerchantId },
          },
          parameters: {
            allowedAuthMethods: a.allowedAuthMethods,
            allowedCardNetworks: a.allowedCardNetworks,
            allowPrepaidCards: a.allowPrepaidCards,
            allowCreditCards: a.allowCreditCards,
            billingAddressRequired: a.billingAddressRequired,
            billingAddressParameters: a.billingAddressParameters,
          },
        },
      ],
      emailRequired: a.emailRequired,
      shippingAddressRequired: a.shippingAddressRequired,
      shippingAddressParameters: a.shippingAddressParameters,
      shippingOptionRequired: a.shippingOptionRequired,
      shippingOptionParameters: a.shippingOptionParameters,
      callbackIntents: a.callbackIntents,
    };
  }
  var us = [
    "en",
    "ar",
    "bg",
    "ca",
    "cs",
    "da",
    "de",
    "el",
    "es",
    "et",
    "fi",
    "fr",
    "hr",
    "id",
    "it",
    "ja",
    "ko",
    "ms",
    "nl",
    "no",
    "pl",
    "pt",
    "ru",
    "sk",
    "sl",
    "sr",
    "sv",
    "th",
    "tr",
    "uk",
    "zh",
  ];
  var ps = (function () {
      function e(e) {
        var t = (function (e) {
          switch ((void 0 === e && (e = "TEST"), e.toLowerCase())) {
            case "production":
            case "live":
              return "PRODUCTION";
            default:
              return "TEST";
          }
        })(e.environment);
        this.paymentsClient = this.getGooglePaymentsClient({
          environment: t,
          paymentDataCallbacks: e.paymentDataCallbacks,
        });
      }
      return (
        (e.prototype.getGooglePaymentsClient = function (e) {
          var t;
          return Ft(this, void 0, void 0, function () {
            return Dt(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    null === (t = window.google) || void 0 === t
                      ? void 0
                      : t.payments
                  )
                    ? [3, 2]
                    : [4, new Pi(ss).load()];
                case 1:
                  a.sent(), (a.label = 2);
                case 2:
                  return [2, new google.payments.api.PaymentsClient(e)];
              }
            });
          });
        }),
        (e.prototype.isReadyToPay = function (e) {
          return this.paymentsClient
            ? this.paymentsClient.then(function (t) {
                return t.isReadyToPay(
                  (function (e) {
                    var t = e.allowedAuthMethods,
                      a = e.allowedCardNetworks,
                      r = e.existingPaymentMethodRequired;
                    return {
                      apiVersion: is,
                      apiVersionMinor: os,
                      allowedPaymentMethods: [
                        {
                          type: "CARD",
                          parameters: {
                            allowedAuthMethods: t,
                            allowedCardNetworks: a,
                          },
                          tokenizationSpecification: {
                            type: "PAYMENT_GATEWAY",
                            parameters: {},
                          },
                        },
                      ],
                      existingPaymentMethodRequired: void 0 !== r && r,
                    };
                  })(e)
                );
              })
            : Promise.reject(new Error("Google Pay is not available"));
        }),
        (e.prototype.prefetchPaymentData = function (e) {
          if (!this.paymentsClient)
            throw new Error("Google Pay is not available");
          var t = cs(e);
          this.paymentsClient.then(function (e) {
            return e.prefetchPaymentData(t);
          });
        }),
        (e.prototype.initiatePayment = function (e) {
          if (!this.paymentsClient)
            throw new Error("Google Pay is not available");
          var t = cs(e);
          return this.paymentsClient.then(function (e) {
            return e.loadPaymentData(t);
          });
        }),
        e
      );
    })(),
    ms = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.clicked = !1),
          (t.handleClick = function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              t.clicked ||
                (t.props.onClick(e),
                (t.clicked = !0),
                setTimeout(function () {
                  t.clicked = !1;
                }, 300));
          }),
          t
        );
      }
      return (
        Nt(t, e),
        (t.prototype.componentDidMount = function () {
          var e = this,
            t = this.props,
            a = t.buttonColor,
            r = t.buttonType,
            n = t.buttonLocale,
            i = t.buttonSizeMode;
          t.paymentsClient
            .then(function (t) {
              return t.createButton({
                onClick: e.handleClick,
                buttonType: r,
                buttonColor: a,
                buttonLocale: n,
                buttonSizeMode: i,
              });
            })
            .then(function (t) {
              e.paywithgoogleWrapper.appendChild(t);
            });
        }),
        (t.prototype.render = function () {
          var e = this;
          return Qt("span", {
            className: "adyen-checkout__paywithgoogle",
            ref: function (t) {
              e.paywithgoogleWrapper = t;
            },
          });
        }),
        (t.defaultProps = {
          buttonColor: "default",
          buttonType: "long",
          buttonSizeMode: "static",
        }),
        t
      );
    })(ea),
    hs = {
      environment: "TEST",
      existingPaymentMethodRequired: !1,
      buttonColor: "default",
      buttonType: "long",
      buttonSizeMode: void 0,
      showPayButton: !0,
      configuration: {
        gatewayMerchantId: "",
        merchantId: "",
        merchantName: "",
      },
      amount: { value: 0, currency: "USD" },
      countryCode: "US",
      totalPriceStatus: "FINAL",
      onError: function () {},
      onAuthorized: function (e) {
        return e;
      },
      onSubmit: function () {},
      onClick: function (e) {
        return e();
      },
      allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
      allowedCardNetworks: ["AMEX", "DISCOVER", "JCB", "MASTERCARD", "VISA"],
      allowCreditCards: !0,
      allowPrepaidCards: !0,
      billingAddressRequired: !1,
      billingAddressParameters: void 0,
      emailRequired: !1,
      shippingAddressRequired: !1,
      shippingAddressParameters: void 0,
      shippingOptionRequired: !1,
      shippingOptionParameters: void 0,
      paymentMethods: [],
    },
    fs = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.googlePay = new ps(t.props)),
          (t.loadPayment = function () {
            var e = t.props,
              a = e.onSubmit,
              r = void 0 === a ? function () {} : a,
              n = e.onAuthorized,
              i = void 0 === n ? function () {} : n;
            return new Promise(function (e, a) {
              return t.props.onClick(e, a);
            })
              .then(function () {
                return t.googlePay.initiatePayment(t.props);
              })
              .then(function (e) {
                return (
                  t.setState({
                    googlePayToken: e.paymentMethodData.tokenizationData.token,
                    googlePayCardNetwork: e.paymentMethodData.info.cardNetwork,
                  }),
                  r({ data: t.data, isValid: t.isValid }, t),
                  i(e)
                );
              })
              .catch(function (e) {
                return t.props.onError(e), Promise.reject(e);
              });
          }),
          (t.submit = function () {
            return t.loadPayment();
          }),
          (t.startPayment = function () {
            return t.loadPayment();
          }),
          (t.isAvailable = function () {
            return t
              .isReadyToPay()
              .then(function (e) {
                if (!e.result) throw new Error("Google Pay is not available");
                if (!1 === e.paymentMethodPresent)
                  throw new Error("Google Pay - No paymentMethodPresent");
                return !0;
              })
              .catch(function () {
                return !1;
              });
          }),
          (t.isReadyToPay = function () {
            return t.googlePay.isReadyToPay(t.props);
          }),
          (t.prefetch = function () {
            return t.googlePay.prefetchPaymentData(t.props);
          }),
          t
        );
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (e) {
          var t,
            a,
            r,
            n,
            i,
            o,
            l = (null === (t = e.brands) || void 0 === t ? void 0 : t.length)
              ? ((i = e.brands),
                (o = {
                  mc: "MASTERCARD",
                  amex: "AMEX",
                  visa: "VISA",
                  interac: "INTERAC",
                  discover: "DISCOVER",
                }),
                i.reduce(function (e, t) {
                  return o[t] && !e.includes(o[t]) && e.push(o[t]), e;
                }, []))
              : e.allowedCardNetworks,
            s =
              null !== (a = e.buttonSizeMode) && void 0 !== a
                ? a
                : e.isDropin
                ? "fill"
                : "static",
            d = (function (e) {
              void 0 === e && (e = "");
              var t = e.toLowerCase().substring(0, 2);
              return us.includes(t) ? t : null;
            })(
              null !== (r = e.buttonLocale) && void 0 !== r
                ? r
                : null === (n = e.i18n) || void 0 === n
                ? void 0
                : n.locale
            );
          return wt(wt({}, e), {
            showButton: !0 === e.showPayButton,
            configuration: e.configuration,
            allowedCardNetworks: l,
            buttonSizeMode: s,
            buttonLocale: d,
          });
        }),
        (t.prototype.formatData = function () {
          var e;
          return {
            paymentMethod: wt(
              {
                type:
                  null !== (e = this.props.type) && void 0 !== e ? e : t.type,
              },
              this.state
            ),
            browserInfo: this.browserInfo,
          };
        }),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return !!this.state.googlePayToken;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "browserInfo", {
          get: function () {
            return hi();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.render = function () {
          return this.props.showPayButton
            ? Qt(ms, {
                buttonColor: this.props.buttonColor,
                buttonType: this.props.buttonType,
                buttonSizeMode: this.props.buttonSizeMode,
                buttonLocale: this.props.buttonLocale,
                paymentsClient: this.googlePay.paymentsClient,
                onClick: this.submit,
              })
            : null;
        }),
        (t.type = "paywithgoogle"),
        (t.defaultProps = hs),
        t
      );
    })(rr),
    ys = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return Nt(t, e), (t.type = "entercash"), t;
    })(Li),
    bs = {
      telephoneNumber: [
        {
          validate: function (e) {
            return !!e && e.length <= 11;
          },
          errorMessage: "voucher.econtext.telephoneNumber.invalid",
          modes: ["input", "blur"],
        },
        {
          validate: function (e) {
            return !!e && Yr.test(e) && (10 === e.length || 11 === e.length);
          },
          errorMessage: "voucher.econtext.telephoneNumber.invalid",
          modes: ["blur"],
        },
      ],
    };
  function vs(e) {
    var t = Ha(null),
      a = er().i18n,
      r = La("ready"),
      n = r[0],
      i = r[1];
    return (
      (this.setStatus = i),
      (this.showValidation = function () {
        t.current && t.current.showValidation();
      }),
      Qt(
        "div",
        { className: "adyen-checkout__econtext-input__field" },
        Qt(nn, {
          data: e.data,
          requiredFields: [
            "firstName",
            "lastName",
            "telephoneNumber",
            "shopperEmail",
          ],
          onChange: e.onChange,
          namePrefix: "econtext",
          ref: t,
          validationRules: bs,
        }),
        e.showPayButton &&
          e.payButton({ status: n, label: a.get("confirmPurchase") })
      )
    );
  }
  function gs(e) {
    var t,
      a,
      r =
        ((t = e),
        ((a = document.createElement("textArea")).readOnly = !0),
        (a.value = t),
        document.body.appendChild(a),
        a);
    if (window.navigator.userAgent.match(/ipad|iphone/i)) {
      var n = document.createRange();
      n.selectNodeContents(r);
      var i = window.getSelection();
      i.removeAllRanges(), i.addRange(n), r.setSelectionRange(0, 999999);
    } else r.select();
    document.execCommand("copy"), document.body.removeChild(r);
  }
  function ks(e) {
    var t = e.voucherDetails,
      a = void 0 === t ? [] : t,
      r = e.className,
      n = void 0 === r ? "" : r,
      i = Pt(e, ["voucherDetails", "className"]),
      o = er(),
      l = o.i18n,
      s = o.loadingContext;
    return Qt(
      "div",
      {
        className: xa(
          "adyen-checkout__voucher-result",
          "adyen-checkout__voucher-result--" + i.paymentMethodType,
          n
        ),
      },
      Qt(
        "div",
        { className: "adyen-checkout__voucher-result__top" },
        Qt(
          "div",
          { className: "adyen-checkout__voucher-result__image" },
          !!i.imageUrl &&
            Qt(
              "span",
              { className: "adyen-checkout__voucher-result__image__wrapper" },
              Qt("img", {
                alt: i.paymentMethodType,
                className: "adyen-checkout__voucher-result__image__brand",
                src: i.imageUrl,
              })
            ),
          !!i.issuerImageUrl &&
            Qt(
              "span",
              { className: "adyen-checkout__voucher-result__image__wrapper" },
              Qt("img", {
                alt: i.paymentMethodType,
                className: "adyen-checkout__voucher-result__image__issuer",
                src: i.issuerImageUrl,
              })
            )
        ),
        Qt(
          "div",
          { className: "adyen-checkout__voucher-result__introduction" },
          i.introduction,
          " ",
          i.instructionsUrl &&
            Qt(
              "a",
              {
                className:
                  "adyen-checkout__link adyen-checkout__link--voucher-result-instructions",
                href: i.instructionsUrl,
                target: "_blank",
                rel: "noopener noreferrer",
              },
              l.get("voucher.readInstructions"),
              " \u203a"
            )
        ),
        i.amount &&
          Qt(
            "div",
            { className: "adyen-checkout__voucher-result__amount" },
            i.amount,
            i.surcharge &&
              Qt(
                "span",
                { className: "adyen-checkout__voucher-result__surcharge" },
                "(",
                l.get("voucher.surcharge").replace("%@", i.surcharge),
                ")"
              )
          )
      ),
      i.reference &&
        Qt(
          "div",
          { className: "adyen-checkout__voucher-result__separator" },
          Qt("div", {
            className: "adyen-checkout__voucher-result__separator__inner",
          }),
          Qt(
            "div",
            { className: "adyen-checkout__voucher-result__code__label" },
            Qt(
              "span",
              {
                className: "adyen-checkout__voucher-result__code__label__text",
              },
              l.get("voucher.paymentReferenceLabel")
            )
          )
        ),
      Qt(
        "div",
        { className: "adyen-checkout__voucher-result__bottom" },
        i.reference &&
          Qt(
            "div",
            { className: "adyen-checkout__voucher-result__code" },
            i.barcode &&
              Qt("img", {
                alt: l.get("voucher.paymentReferenceLabel"),
                className: "adyen-checkout__voucher-result__code__barcode",
                src: i.barcode,
              }),
            Qt("span", null, i.reference)
          ),
        (!!i.downloadUrl || !!i.copyBtn) &&
          Qt(
            "ul",
            { className: "adyen-checkout__voucher-result__actions" },
            !!i.copyBtn &&
              Qt(
                "li",
                { className: "adyen-checkout__voucher-result__actions__item" },
                Qt(tr, {
                  inline: !0,
                  secondary: !0,
                  onClick: function (e, t) {
                    var a = t.complete;
                    gs(i.reference), a();
                  },
                  icon: Aa({ loadingContext: s, imageFolder: "components/" })(
                    "copy"
                  ),
                  label: l.get("button.copy"),
                })
              ),
            !!i.downloadUrl &&
              Qt(
                "li",
                { className: "adyen-checkout__voucher-result__actions__item" },
                Qt(tr, {
                  inline: !0,
                  secondary: !0,
                  href: i.downloadUrl,
                  icon: Aa({ loadingContext: s, imageFolder: "components/" })(
                    "download"
                  ),
                  label: i.downloadButtonText || l.get("button.download"),
                  target: "_blank",
                  rel: "noopener noreferrer",
                })
              )
          ),
        Qt(
          "ul",
          { className: "adyen-checkout__voucher-result__details" },
          a
            .filter(function (e) {
              var t = e.label,
                a = e.value;
              return !!t && !!a;
            })
            .map(function (e, t) {
              var a = e.label,
                r = e.value;
              return Qt(
                "li",
                {
                  key: t,
                  className: "adyen-checkout__voucher-result__details__item",
                },
                Qt(
                  "span",
                  {
                    className: "adyen-checkout__voucher-result__details__label",
                  },
                  a
                ),
                Qt(
                  "span",
                  {
                    className: "adyen-checkout__voucher-result__details__value",
                  },
                  r
                )
              );
            })
        )
      )
    );
  }
  var Cs = function (e) {
      var t = e.reference,
        a = e.totalAmount,
        r = e.expiresAt,
        n = e.paymentMethodType,
        i = e.maskedTelephoneNumber,
        o = e.instructionsUrl,
        l = e.collectionInstitutionNumber,
        s = er(),
        d = s.loadingContext,
        c = s.i18n;
      return Qt(ks, {
        paymentMethodType: n,
        reference: t,
        introduction: c.get("voucher.introduction.econtext"),
        imageUrl: Aa({ loadingContext: d })(n),
        instructionsUrl: o,
        amount: a && c.amount(a.value, a.currency),
        voucherDetails: [
          { label: c.get("voucher.collectionInstitutionNumber"), value: l },
          { label: c.get("voucher.expirationDate"), value: c.date(r) },
          { label: c.get("voucher.telephoneNumber"), value: i },
        ],
        copyBtn: !0,
      });
    },
    _s = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return !!this.state.isValid;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.formatData = function () {
          return wt(wt({}, this.state.data), {
            paymentMethod: { type: this.props.type || t.type },
          });
        }),
        Object.defineProperty(t.prototype, "icon", {
          get: function () {
            return Aa({ loadingContext: this.props.loadingContext })(
              this.props.type
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.render = function () {
          var e = this;
          return Qt(
            si,
            {
              i18n: this.props.i18n,
              loadingContext: this.props.loadingContext,
            },
            this.props.reference
              ? Qt(
                  Cs,
                  wt(
                    {
                      ref: function (t) {
                        e.componentRef = t;
                      },
                    },
                    this.props
                  )
                )
              : Qt(
                  vs,
                  wt(
                    {
                      ref: function (t) {
                        e.componentRef = t;
                      },
                    },
                    this.props,
                    {
                      onChange: this.setState,
                      onSubmit: this.submit,
                      payButton: this.payButton,
                    }
                  )
                )
          );
        }),
        (t.type = "econtext"),
        t
      );
    })(rr),
    Ns = ["ES", "FR"],
    ws = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (t) {
          return wt(wt({}, e.prototype.formatProps.call(this, t)), {
            allowedCountries: t.countryCode ? [t.countryCode] : Ns,
          });
        }),
        (t.type = "facilypay_3x"),
        t
      );
    })(di),
    Ps = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (t) {
          return wt(wt({}, e.prototype.formatProps.call(this, t)), {
            allowedCountries: t.countryCode ? [t.countryCode] : Ns,
          });
        }),
        (t.type = "facilypay_4x"),
        t
      );
    })(di),
    Fs = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (t) {
          return wt(wt({}, e.prototype.formatProps.call(this, t)), {
            allowedCountries: t.countryCode ? [t.countryCode] : Ns,
          });
        }),
        (t.type = "facilypay_6x"),
        t
      );
    })(di),
    Ds = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (t) {
          return wt(wt({}, e.prototype.formatProps.call(this, t)), {
            allowedCountries: t.countryCode ? [t.countryCode] : Ns,
          });
        }),
        (t.type = "facilypay_10x"),
        t
      );
    })(di),
    Ss = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (t) {
          return wt(wt({}, e.prototype.formatProps.call(this, t)), {
            allowedCountries: t.countryCode ? [t.countryCode] : Ns,
          });
        }),
        (t.type = "facilypay_12x"),
        t
      );
    })(di),
    As = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return Nt(t, e), (t.type = "ideal"), t;
    })(Li),
    xs = ["black", "white"],
    Bs = [
      "en_US",
      "en_AU",
      "en_GB",
      "fr_CA",
      "es_ES",
      "it_IT",
      "fr_FR",
      "de_DE",
      "pt_BR",
      "zh_CN",
      "da_DK",
      "zh_HK",
      "id_ID",
      "he_IL",
      "ja_JP",
      "ko_KR",
      "nl_NL",
      "no_NO",
      "pl_PL",
      "pt_PT",
      "ru_RU",
      "sv_SE",
      "th_TH",
      "zh_TW",
    ],
    zs = function (e, t) {
      return (
        void 0 === t && (t = {}),
        "paypal" === e
          ? wt({}, t)
          : Object.keys(t).reduce(function (e, a) {
              var r = t[a];
              return ("color" !== a || xs.includes(r)) && (e[a] = r), e;
            }, {})
      );
    },
    Ts = function (e) {
      var t = e.amount,
        a = e.countryCode,
        r = e.debug,
        n = e.environment,
        i = void 0 === n ? "" : n,
        o = e.locale,
        l = e.configuration,
        s = e.commit,
        d = e.vault,
        c = (function (e) {
          var t = e ? e.replace("-", "_") : null;
          return Bs.includes(t) ? t : null;
        })(o),
        u = t ? t.currency : null,
        p = "test" === i.toLowerCase(),
        m = p
          ? "AVzsPoGmjcm99YG02kq0iWL3KP3JedbMQJO2QUnVUc-t7aUzjkBWte7relkAC5SPUL50ovLGKmxfA674"
          : "AU0Z-TP9t5_9196agaBN6ZD3UAwypdP1IX8ZYH3PcNNAQMXUTDQlChruXqQEhyI6-NKBKowN6ydkj477",
        h = l.merchantId,
        f = l.intent;
      return wt(
        wt(
          wt(
            wt(
              wt(
                wt(wt({}, h && { "merchant-id": h }), c && { locale: c }),
                a && p && { "buyer-country": a }
              ),
              r && p && { debug: r }
            ),
            u && { currency: u }
          ),
          f && { intent: f }
        ),
        {
          commit: s,
          vault: d,
          "client-id": m,
          "integration-date": "2020-02-01",
          components: "buttons,funding-eligibility",
        }
      );
    };
  function Ms(e) {
    var t = e.onInit,
      a = e.onComplete,
      r = e.onClick,
      n = e.onCancel,
      i = e.onError,
      o = e.onShippingChange,
      l = e.onSubmit,
      s = e.paypalRef,
      d = e.style,
      c = Ha(null),
      u = Ha(null),
      p = function (e, c) {
        var u = s.Buttons({
          fundingSource: e,
          style: zs(e, d),
          onInit: t,
          onClick: r,
          onCancel: n,
          onError: i,
          onShippingChange: o,
          createOrder: l,
          onApprove: a,
        });
        u.isEligible() && u.render(c.current);
      };
    return (
      Ua(function () {
        var e = s.FUNDING,
          t = e.PAYPAL,
          a = e.CREDIT;
        p(t, c), p(a, u);
      }, []),
      Qt(
        "div",
        { className: "adyen-checkout__paypal__buttons" },
        Qt("div", {
          className:
            "adyen-checkout__paypal__button adyen-checkout__paypal__button--paypal",
          ref: c,
        }),
        Qt("div", {
          className:
            "adyen-checkout__paypal__button adyen-checkout__paypal__button--credit",
          ref: u,
        })
      )
    );
  }
  function Is(e) {
    var t = er().i18n,
      a = La("pending"),
      r = a[0],
      n = a[1];
    this.setStatus = function (e) {
      n(e);
    };
    var i = function () {
      n("ready");
    };
    return (
      Ua(function () {
        var t = (function (e) {
            var t = Ts(e);
            return (
              "https://www.paypal.com/sdk/js?" +
              decodeURIComponent(
                Object.keys(t)
                  .map(function (e) {
                    return e + "=" + t[e];
                  })
                  .join("&")
              )
            );
          })(e),
          a = new Pi(t);
        return (
          a.load().then(i),
          function () {
            a.remove();
          }
        );
      }, []),
      Qt(
        "div",
        { className: "adyen-checkout__paypal" },
        "pending" === r
          ? Qt(
              "div",
              {
                className:
                  "adyen-checkout__paypal__status adyen-checkout__paypal__status--pending",
              },
              Qt(Ba, null)
            )
          : "processing" === r
          ? Qt(
              "div",
              {
                className:
                  "adyen-checkout__paypal__status adyen-checkout__paypal__status--processing",
              },
              Qt(Ba, { size: "medium", inline: !0 }),
              " ",
              t.get("paypal.processingPayment")
            )
          : Qt(
              Ms,
              wt({}, e, {
                onComplete: function (t) {
                  n("processing"), e.onComplete(t);
                },
                paypalRef: window.paypal,
              })
            )
      )
    );
  }
  var js = {
      environment: "TEST",
      status: "loading",
      showPayButton: !0,
      merchantId: "",
      intent: null,
      commit: !0,
      vault: !1,
      style: { height: 48 },
      configuration: { merchantId: "", intent: null },
      onSubmit: function () {},
      onAdditionalDetails: function () {},
      onInit: function () {},
      onClick: function () {},
      onCancel: function () {},
      onError: function () {},
      onShippingChange: function () {},
    },
    Os = (function (e) {
      function t(t) {
        var a = e.call(this, t) || this;
        return (
          (a.paymentData = null),
          (a.resolve = null),
          (a.reject = null),
          (a.handleAction = a.handleAction.bind(a)),
          (a.updateWithAction = a.updateWithAction.bind(a)),
          (a.handleCancel = a.handleCancel.bind(a)),
          (a.handleComplete = a.handleComplete.bind(a)),
          (a.handleError = a.handleError.bind(a)),
          (a.handleSubmit = a.handleSubmit.bind(a)),
          (a.submit = a.submit.bind(a)),
          a
        );
      }
      return (
        Nt(t, e),
        (t.prototype.formatData = function () {
          return { paymentMethod: { type: t.type, subtype: t.subtype } };
        }),
        (t.prototype.handleAction = function (e) {
          return this.updateWithAction(e);
        }),
        (t.prototype.updateWithAction = function (e) {
          if (e.paymentMethodType !== this.data.paymentMethod.type)
            throw new Error("Invalid Action");
          return (
            e.paymentData && (this.paymentData = e.paymentData),
            e.sdkData && e.sdkData.token
              ? this.resolve(e.sdkData.token)
              : this.reject(new Error("No token was provided")),
            null
          );
        }),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return !0;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.handleCancel = function (e) {
          this.props.onCancel(e, this.elementRef);
        }),
        (t.prototype.handleComplete = function (e) {
          var t = { data: { details: e, paymentData: this.paymentData } };
          this.props.onAdditionalDetails(t, this.elementRef);
        }),
        (t.prototype.handleError = function (e) {
          this.props.onError(e, this.elementRef);
        }),
        (t.prototype.startPayment = function () {
          return Promise.reject(
            "Calling submit() is not supported for this payment method"
          );
        }),
        (t.prototype.handleSubmit = function () {
          var e = this,
            t = this.data,
            a = this.isValid;
          return (
            this.props.onSubmit &&
              this.props.onSubmit({ data: t, isValid: a }, this.elementRef),
            new Promise(function (t, a) {
              (e.resolve = t), (e.reject = a);
            })
          );
        }),
        (t.prototype.submit = function () {
          var e = this;
          this.startPayment().catch(function (t) {
            e.props.onError(t, e.elementRef);
          });
        }),
        (t.prototype.render = function () {
          var e = this;
          return this.props.showPayButton
            ? Qt(
                si,
                {
                  i18n: this.props.i18n,
                  loadingContext: this.props.loadingContext,
                },
                Qt(
                  Is,
                  wt(
                    {
                      ref: function (t) {
                        e.componentRef = t;
                      },
                    },
                    this.props,
                    {
                      onCancel: this.handleCancel,
                      onChange: this.setState,
                      onComplete: this.handleComplete,
                      onError: this.handleError,
                      onSubmit: this.handleSubmit,
                    }
                  )
                )
              )
            : null;
        }),
        (t.type = "paypal"),
        (t.subtype = "sdk"),
        (t.defaultProps = js),
        t
      );
    })(rr);
  function Es(e) {
    var t,
      a = er().i18n,
      r = La("ready"),
      n = r[0],
      i = r[1],
      o = !!(null === (t = null == e ? void 0 : e.items) || void 0 === t
        ? void 0
        : t.length),
      l = en({
        schema: St(St([], o ? ["phonePrefix"] : []), ["phoneNumber"]),
        defaultData: wt({}, o ? { phonePrefix: e.selected } : {}),
        rules: {
          phoneNumber: {
            modes: ["blur"],
            errorMessage: "error.va.gen.01",
            validate: function (e) {
              return (null == e ? void 0 : e.length) > 6;
            },
          },
        },
      }),
      s = l.handleChangeFor,
      d = l.triggerValidation,
      c = l.data,
      u = l.valid,
      p = l.errors,
      m = l.isValid;
    return (
      Ua(
        function () {
          e.onChange({ data: c, valid: u, errors: p, isValid: m });
        },
        [c, u, p, m]
      ),
      (this.showValidation = d),
      (this.setStatus = i),
      Qt(
        "div",
        { className: "adyen-checkout__phone-input" },
        Qt(
          Cr,
          {
            errorMessage: !!p.phoneNumber,
            label: a.get(e.phoneLabel),
            className: xa({ "adyen-checkout__input--phone-number": !0 }),
            inputWrapperModifiers: ["phoneInput"],
          },
          Qt(
            "div",
            { className: "adyen-checkout__input-wrapper" },
            Qt(
              "div",
              {
                className: xa({
                  "adyen-checkout__input": !0,
                  "adyen-checkout__input--invalid": !!p.phoneNumber,
                }),
              },
              !!o &&
                Qt(
                  Cr,
                  { inputWrapperModifiers: ["phoneInput"] },
                  qr("select", {
                    className:
                      "adyen-checkout__dropdown--small adyen-checkout__countryFlag",
                    filterable: !1,
                    items: e.items,
                    name: e.prefixName,
                    onChange: s("phonePrefix"),
                    placeholder: a.get("infix"),
                    selected: c.phonePrefix,
                  }),
                  Qt(
                    "div",
                    { className: "adyen-checkout__phoneNumber" },
                    Qt("div", null, c.phonePrefix),
                    Qt("input", {
                      type: "tel",
                      name: e.phoneName,
                      value: c.phoneNumber,
                      onInput: s("phoneNumber", "input"),
                      onChange: s("phoneNumber", "blur"),
                      placeholder: "123 456 789",
                      className:
                        "adyen-checkout__input adyen-checkout__input--phoneNumber",
                      autoCorrect: "off",
                    })
                  )
                )
            )
          )
        ),
        this.props.showPayButton && this.props.payButton({ status: n })
      )
    );
  }
  Es.defaultProps = { phoneLabel: "telephoneNumber" };
  var Rs = function (e) {
      if (!e) throw new Error("No item passed");
      if (!e.code || !e.id) return !1;
      var t = e.code.toUpperCase().replace(/./g, function (e) {
        return String.fromCodePoint
          ? String.fromCodePoint(e.charCodeAt(0) + 127397)
          : "";
      });
      return wt(wt({}, e), {
        name: t + " " + e.name + " (" + e.id + ")",
        selectedOptionName: t,
      });
    },
    Ls = function (e, t) {
      if (e && t) {
        var a = e.find(function (e) {
          return e.code === t;
        });
        return !!a && a.id;
      }
      return !1;
    },
    Vs = [
      { id: "+7", name: "Russian Federation", code: "RU" },
      { id: "+9955", name: "Georgia", code: "GE" },
      { id: "+507", name: "Panama", code: "PA" },
      { id: "+44", name: "United Kingdom", code: "GB" },
      { id: "+992", name: "Tajikistan", code: "TJ" },
      { id: "+370", name: "Lithuania", code: "LT" },
      { id: "+972", name: "Israel", code: "IL" },
      { id: "+996", name: "Kyrgyzstan", code: "KG" },
      { id: "+380", name: "Ukraine", code: "UA" },
      { id: "+84", name: "Viet Nam", code: "VN" },
      { id: "+90", name: "Turkey", code: "TR" },
      { id: "+994", name: "Azerbaijan", code: "AZ" },
      { id: "+374", name: "Armenia", code: "AM" },
      { id: "+371", name: "Latvia", code: "LV" },
      { id: "+91", name: "India", code: "IN" },
      { id: "+66", name: "Thailand", code: "TH" },
      { id: "+373", name: "Moldova", code: "MD" },
      { id: "+1", name: "United States", code: "US" },
      { id: "+81", name: "Japan", code: "JP" },
      { id: "+998", name: "Uzbekistan", code: "UZ" },
      { id: "+77", name: "Kazakhstan", code: "KZ" },
      { id: "+375", name: "Belarus", code: "BY" },
      { id: "+372", name: "Estonia", code: "EE" },
      { id: "+40", name: "Romania", code: "RO" },
      { id: "+82", name: "Korea", code: "KR" },
    ],
    Us = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return !!this.state.isValid;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.formatProps = function (e) {
          return wt(wt({ onValid: function () {} }, e), {
            selected: Ls(e.items, e.countryCode),
          });
        }),
        (t.prototype.formatData = function () {
          return {
            paymentMethod: {
              type: t.type,
              "qiwiwallet.telephoneNumberPrefix": this.state.data
                ? this.state.data.phonePrefix
                : "",
              "qiwiwallet.telephoneNumber": this.state.data
                ? this.state.data.phoneNumber
                : "",
            },
          };
        }),
        (t.prototype.render = function () {
          var e = this;
          return Qt(
            si,
            {
              i18n: this.props.i18n,
              loadingContext: this.props.loadingContext,
            },
            Qt(
              Es,
              wt(
                {
                  ref: function (t) {
                    e.componentRef = t;
                  },
                },
                this.props,
                this.state,
                {
                  phoneLabel: "mobileNumber",
                  onChange: this.setState,
                  onSubmit: this.submit,
                  payButton: this.payButton,
                }
              )
            )
          );
        }),
        (t.type = "qiwiwallet"),
        (t.defaultProps = {
          items: Vs.map(Rs).filter(function (e) {
            return !1 !== e;
          }),
          countryCode: Vs[0].code,
          prefixName: "qiwiwallet.telephoneNumberPrefix",
          phoneName: "qiwiwallet.telephoneNumber",
        }),
        t
      );
    })(rr),
    Ks = (function (e) {
      function t(t) {
        var a = e.call(this, t) || this;
        return (
          (a.handleSecuredFieldsRef = function (e) {
            a.sfp = e;
          }),
          (a.handleSecuredFieldsChange = function (e) {
            a.setState(wt(wt({}, e), { isValid: e.isSfpValid }));
          }),
          a
        );
      }
      return (
        Nt(t, e),
        (t.prototype.componentDidMount = function () {
          (this.setFocusOn = this.sfp.setFocusOn),
            (this.updateStyles = this.sfp.updateStyles),
            (this.showValidation = this.sfp.showValidation),
            (this.processBinLookupResponse = this.sfp.processBinLookupResponse);
        }),
        (t.prototype.componentDidUpdate = function () {
          this.props.onChange(this.state);
        }),
        (t.prototype.componentWillUnmount = function () {
          this.sfp.destroy(), (this.sfp = null);
        }),
        (t.prototype.getChildContext = function () {
          return { i18n: this.props.i18n };
        }),
        (t.prototype.render = function () {
          return Qt(
            Ml,
            wt({ ref: this.handleSecuredFieldsRef }, this.props, {
              onChange: this.handleSecuredFieldsChange,
              render: function () {
                return null;
              },
            })
          );
        }),
        (t.defaultProps = {
          onChange: function () {},
          onError: function () {},
        }),
        t
      );
    })(ea),
    Hs = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (e) {
          return wt(
            wt(wt({}, e), { type: "scheme" === e.type ? "card" : e.type }),
            e.brands && !e.groupTypes && { groupTypes: e.brands }
          );
        }),
        (t.prototype.formatData = function () {
          return {
            paymentMethod: wt({ type: t.type }, this.state.data),
            browserInfo: this.browserInfo,
          };
        }),
        (t.prototype.updateStyles = function (e) {
          var t;
          return (
            (null === (t = this.componentRef) || void 0 === t
              ? void 0
              : t.updateStyles) && this.componentRef.updateStyles(e),
            this
          );
        }),
        (t.prototype.setFocusOn = function (e) {
          var t;
          return (
            (null === (t = this.componentRef) || void 0 === t
              ? void 0
              : t.setFocusOn) && this.componentRef.setFocusOn(e),
            this
          );
        }),
        (t.prototype.processBinLookupResponse = function (e) {
          var t;
          return (
            (null === (t = this.componentRef) || void 0 === t
              ? void 0
              : t.processBinLookupResponse) &&
              this.componentRef.processBinLookupResponse(e),
            this
          );
        }),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return !!this.state.isValid;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "icon", {
          get: function () {
            return Aa({ loadingContext: this.props.loadingContext })(
              this.props.type
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "browserInfo", {
          get: function () {
            return hi();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.render = function () {
          var e = this;
          return Qt(
            si,
            {
              i18n: this.props.i18n,
              loadingContext: this.props.loadingContext,
            },
            Qt(
              Ks,
              wt(
                {
                  ref: function (t) {
                    e.componentRef = t;
                  },
                },
                this.props,
                this.state,
                { rootNode: this._node, onChange: this.setState }
              )
            )
          );
        }),
        (t.type = "scheme"),
        (t.analyticsType = "custom-scheme"),
        t
      );
    })(rr),
    qs = {
      AD: {
        length: 24,
        structure: "F04F04A12",
        example: "AD9912345678901234567890",
      },
      AE: {
        length: 23,
        structure: "F03F16",
        example: "AE993331234567890123456",
      },
      AL: {
        length: 28,
        structure: "F08A16",
        example: "AL47212110090000000235698741",
      },
      AT: { length: 20, structure: "F05F11", example: "AT611904300234573201" },
      AZ: {
        length: 28,
        structure: "U04A20",
        example: "AZ21NABZ00000000137010001944",
      },
      BA: {
        length: 20,
        structure: "F03F03F08F02",
        example: "BA391290079401028494",
      },
      BE: {
        length: 16,
        structure: "F03F07F02",
        example: "BE68 5390 0754 7034",
      },
      BG: {
        length: 22,
        structure: "U04F04F02A08",
        example: "BG80BNBG96611020345678",
      },
      BH: {
        length: 22,
        structure: "U04A14",
        example: "BH67BMAG00001299123456",
      },
      BR: {
        length: 29,
        structure: "F08F05F10U01A01",
        example: "BR9700360305000010009795493P1",
      },
      CH: { length: 21, structure: "F05A12", example: "CH9300762011623852957" },
      CR: {
        length: 22,
        structure: "F04F14",
        example: "CR72012300000171549015",
      },
      CY: {
        length: 28,
        structure: "F03F05A16",
        example: "CY17002001280000001200527600",
      },
      CZ: {
        length: 24,
        structure: "F04F06F10",
        example: "CZ6508000000192000145399",
      },
      DE: {
        length: 22,
        structure: "F08F10",
        example: "DE00123456789012345678",
      },
      DK: { length: 18, structure: "F04F09F01", example: "DK5000400440116243" },
      DO: {
        length: 28,
        structure: "U04F20",
        example: "DO28BAGR00000001212453611324",
      },
      EE: {
        length: 20,
        structure: "F02F02F11F01",
        example: "EE382200221020145685",
      },
      ES: {
        length: 24,
        structure: "F04F04F01F01F10",
        example: "ES9121000418450200051332",
      },
      FI: { length: 18, structure: "F06F07F01", example: "FI2112345600000785" },
      FO: { length: 18, structure: "F04F09F01", example: "FO6264600001631634" },
      FR: {
        length: 27,
        structure: "F05F05A11F02",
        example: "FR1420041010050500013M02606",
      },
      GB: {
        length: 22,
        structure: "U04F06F08",
        example: "GB29NWBK60161331926819",
      },
      GE: {
        length: 22,
        structure: "U02F16",
        example: "GE29NB0000000101904917",
      },
      GI: {
        length: 23,
        structure: "U04A15",
        example: "GI75NWBK000000007099453",
      },
      GL: { length: 18, structure: "F04F09F01", example: "GL8964710001000206" },
      GR: {
        length: 27,
        structure: "F03F04A16",
        example: "GR1601101250000000012300695",
      },
      GT: {
        length: 28,
        structure: "A04A20",
        example: "GT82TRAJ01020000001210029690",
      },
      HR: { length: 21, structure: "F07F10", example: "HR1210010051863000160" },
      HU: {
        length: 28,
        structure: "F03F04F01F15F01",
        example: "HU42117730161111101800000000",
      },
      IE: {
        length: 22,
        structure: "U04F06F08",
        example: "IE29AIBK93115212345678",
      },
      IL: {
        length: 23,
        structure: "F03F03F13",
        example: "IL620108000000099999999",
      },
      IS: {
        length: 26,
        structure: "F04F02F06F10",
        example: "IS140159260076545510730339",
      },
      IT: {
        length: 27,
        structure: "U01F05F05A12",
        example: "IT60X0542811101000000123456",
      },
      KW: {
        length: 30,
        structure: "U04A22",
        example: "KW81CBKU0000000000001234560101",
      },
      KZ: { length: 20, structure: "F03A13", example: "KZ86125KZT5004100100" },
      LB: {
        length: 28,
        structure: "F04A20",
        example: "LB62099900000001001901229114",
      },
      LC: {
        length: 32,
        structure: "U04F24",
        example: "LC07HEMM000100010012001200013015",
      },
      LI: { length: 21, structure: "F05A12", example: "LI21088100002324013AA" },
      LT: { length: 20, structure: "F05F11", example: "LT121000011101001000" },
      LU: { length: 20, structure: "F03A13", example: "LU280019400644750000" },
      LV: { length: 21, structure: "U04A13", example: "LV80BANK0000435195001" },
      MC: {
        length: 27,
        structure: "F05F05A11F02",
        example: "MC5811222000010123456789030",
      },
      MD: {
        length: 24,
        structure: "U02A18",
        example: "MD24AG000225100013104168",
      },
      ME: {
        length: 22,
        structure: "F03F13F02",
        example: "ME25505000012345678951",
      },
      MK: {
        length: 19,
        structure: "F03A10F02",
        example: "MK07250120000058984",
      },
      MR: {
        length: 27,
        structure: "F05F05F11F02",
        example: "MR1300020001010000123456753",
      },
      MT: {
        length: 31,
        structure: "U04F05A18",
        example: "MT84MALT011000012345MTLCAST001S",
      },
      MU: {
        length: 30,
        structure: "U04F02F02F12F03U03",
        example: "MU17BOMM0101101030300200000MUR",
      },
      NL: { length: 18, structure: "U04F10", example: "NL99BANK0123456789" },
      NO: { length: 15, structure: "F04F06F01", example: "NO9386011117947" },
      PK: {
        length: 24,
        structure: "U04A16",
        example: "PK36SCBL0000001123456702",
      },
      PL: {
        length: 28,
        structure: "F08F16",
        example: "PL00123456780912345678901234",
      },
      PS: {
        length: 29,
        structure: "U04A21",
        example: "PS92PALS000000000400123456702",
      },
      PT: {
        length: 25,
        structure: "F04F04F11F02",
        example: "PT50000201231234567890154",
      },
      RO: {
        length: 24,
        structure: "U04A16",
        example: "RO49AAAA1B31007593840000",
      },
      RS: {
        length: 22,
        structure: "F03F13F02",
        example: "RS35260005601001611379",
      },
      SA: {
        length: 24,
        structure: "F02A18",
        example: "SA0380000000608010167519",
      },
      SE: {
        length: 24,
        structure: "F03F16F01",
        example: "SE4550000000058398257466",
      },
      SI: {
        length: 19,
        structure: "F05F08F02",
        example: "SI56263300012039086",
      },
      SK: {
        length: 24,
        structure: "F04F06F10",
        example: "SK3112000000198742637541",
      },
      SM: {
        length: 27,
        structure: "U01F05F05A12",
        example: "SM86U0322509800000000270100",
      },
      ST: {
        length: 25,
        structure: "F08F11F02",
        example: "ST68000100010051845310112",
      },
      TL: {
        length: 23,
        structure: "F03F14F02",
        example: "TL380080012345678910157",
      },
      TN: {
        length: 24,
        structure: "F02F03F13F02",
        example: "TN5910006035183598478831",
      },
      TR: {
        length: 26,
        structure: "F05F01A16",
        example: "TR330006100519786457841326",
      },
      VG: {
        length: 24,
        structure: "U04F16",
        example: "VG96VPVG0000012345678901",
      },
      XK: {
        length: 20,
        structure: "F04F10F02",
        example: "XK051212012345678906",
      },
      AO: {
        length: 25,
        structure: "F21",
        example: "AO69123456789012345678901",
      },
      BF: {
        length: 27,
        structure: "F23",
        example: "BF2312345678901234567890123",
      },
      BI: { length: 16, structure: "F12", example: "BI41123456789012" },
      BJ: {
        length: 28,
        structure: "F24",
        example: "BJ39123456789012345678901234",
      },
      CI: {
        length: 28,
        structure: "U01F23",
        example: "CI17A12345678901234567890123",
      },
      CM: {
        length: 27,
        structure: "F23",
        example: "CM9012345678901234567890123",
      },
      CV: {
        length: 25,
        structure: "F21",
        example: "CV30123456789012345678901",
      },
      DZ: { length: 24, structure: "F20", example: "DZ8612345678901234567890" },
      IR: {
        length: 26,
        structure: "F22",
        example: "IR861234568790123456789012",
      },
      JO: {
        length: 30,
        structure: "A04F22",
        example: "JO15AAAA1234567890123456789012",
      },
      MG: {
        length: 27,
        structure: "F23",
        example: "MG1812345678901234567890123",
      },
      ML: {
        length: 28,
        structure: "U01F23",
        example: "ML15A12345678901234567890123",
      },
      MZ: {
        length: 25,
        structure: "F21",
        example: "MZ25123456789012345678901",
      },
      QA: {
        length: 29,
        structure: "U04A21",
        example: "QA30AAAA123456789012345678901",
      },
      SN: {
        length: 28,
        structure: "U01F23",
        example: "SN52A12345678901234567890123",
      },
      UA: {
        length: 29,
        structure: "F25",
        example: "UA511234567890123456789012345",
      },
    },
    Gs = function (e) {
      return e
        .replace(/\W/gi, "")
        .replace(/(.{4})(?!$)/g, "$1 ")
        .trim();
    },
    Ys = function (e) {
      return e.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
    },
    Ws = function (e, t) {
      return (function (e, t) {
        if (null === t || !qs[t] || !qs[t].structure) return !1;
        var a = qs[t].structure.match(/(.{3})/g).map(function (e) {
          var t,
            a = e.slice(0, 1),
            r = parseInt(e.slice(1), 10);
          switch (a) {
            case "A":
              t = "0-9A-Za-z";
              break;
            case "B":
              t = "0-9A-Z";
              break;
            case "C":
              t = "A-Za-z";
              break;
            case "F":
              t = "0-9";
              break;
            case "L":
              t = "a-z";
              break;
            case "U":
              t = "A-Z";
              break;
            case "W":
              t = "0-9a-z";
          }
          return "([" + t + "]{" + r + "})";
        });
        return new RegExp("^" + a.join("") + "$");
      })(0, t);
    },
    Js = function (e) {
      return (
        void 0 === e && (e = null),
        e && qs[e] && qs[e].example
          ? Gs(qs[e].example)
          : "AB00 1234 5678 9012 3456 7890"
      );
    };
  function Zs(e, t) {
    void 0 === t && (t = null), (this.status = e), (this.code = t);
  }
  var Qs = function (e) {
      var t = Ys(e);
      return (
        1 ===
          (function (e) {
            for (var t, a = e; a.length > 2; )
              (t = a.slice(0, 9)),
                (a = (parseInt(t, 10) % 97) + a.slice(t.length));
            return parseInt(a, 10) % 97;
          })(
            (function (e) {
              var t = e,
                a = "A".charCodeAt(0),
                r = "Z".charCodeAt(0);
              return (t = (t = t.toUpperCase()).substr(4) + t.substr(0, 4))
                .split("")
                .map(function (e) {
                  var t = e.charCodeAt(0);
                  return t >= a && t <= r ? t - a + 10 : e;
                })
                .join("");
            })(t)
          ) &&
        (function (e) {
          var t = e.slice(0, 2),
            a = Ws(0, t);
          return (a.test && a.test(e.slice(4))) || !1;
        })(t)
      );
    },
    $s = function (e) {
      var t = Ys(e);
      if (e.length < 2) return new Zs("no-validate", "TOO_SHORT");
      var a = (function (e) {
        return !(!e || !qs[e]) && qs[e];
      })(t.slice(0, 2));
      return a
        ? t.length > a.length
          ? new Zs("invalid", "TOO_LONG")
          : t.length === a.length
          ? Qs(e)
            ? new Zs("valid", "VALID")
            : new Zs("invalid", "INVALID_IBAN")
          : new Zs("no-validate", "UNKNOWN")
        : new Zs("invalid", "INVALID_COUNTRY");
    },
    Xs = function (e) {
      return !!(e && e.length && e.length > 0);
    },
    ed = (function (e) {
      function t(t) {
        var a,
          r,
          n = e.call(this, t) || this;
        if (
          ((n.setData = function (e, t, a) {
            n.setState(function (a) {
              var r;
              return { data: wt(wt({}, a.data), ((r = {}), (r[e] = t), r)) };
            }, a);
          }),
          (n.setError = function (e, t, a) {
            n.setState(function (a) {
              var r;
              return {
                errors: wt(wt({}, a.errors), ((r = {}), (r[e] = t), r)),
              };
            }, a);
          }),
          (n.setValid = function (e, t, a) {
            n.setState(function (a) {
              var r;
              return { valid: wt(wt({}, a.valid), ((r = {}), (r[e] = t), r)) };
            }, a);
          }),
          (n.handleHolderInput = function (e) {
            n.setState(
              function (t) {
                return { data: wt(wt({}, t.data), { "sepa.ownerName": e }) };
              },
              function () {
                n.setError("holder", !Xs(n.state.data["sepa.ownerName"])),
                  n.onChange();
              }
            );
          }),
          (n.handleIbanInput = function (e) {
            var t = e.target.value,
              a = Ys(t),
              r = Gs(a),
              i = $s(r).status,
              o = e.target.selectionStart,
              l = n.state.data["sepa.ibanNumber"],
              s = (function (e, t, a) {
                if (0 === e || !t.length) return 0;
                var r = t.length - a.length,
                  n = r > 0,
                  i = function (e, t) {
                    return /\s/.test(e.charAt(t));
                  },
                  o = e - r;
                return n && (i(t, o + 1) || i(t, o))
                  ? e + 1
                  : !n && i(t, e - 1)
                  ? e - 1
                  : e;
              })(o, r, l);
            n.setState(
              function (e) {
                return {
                  data: wt(wt({}, e.data), { "sepa.ibanNumber": r }),
                  errors: wt(wt({}, e.errors), {
                    iban:
                      "invalid" === i
                        ? "sepaDirectDebit.ibanField.invalid"
                        : null,
                  }),
                  valid: wt(wt({}, e.valid), { iban: "valid" === i }),
                };
              },
              function () {
                e.target.setSelectionRange(s, s), n.onChange();
              }
            );
          }),
          (n.handleIbanBlur = function (e) {
            var t = e.target.value;
            if (t.length > 0) {
              var a = $s(t).status;
              n.setError(
                "iban",
                "valid" !== a ? "sepaDirectDebit.ibanField.invalid" : null
              );
            }
          }),
          (n.state = {
            status: "ready",
            data: {
              "sepa.ownerName":
                (null === (a = null == t ? void 0 : t.data) || void 0 === a
                  ? void 0
                  : a.ownerName) || "",
              "sepa.ibanNumber":
                (null === (r = null == t ? void 0 : t.data) || void 0 === r
                  ? void 0
                  : r.ibanNumber) || "",
            },
            isValid: !1,
            cursor: 0,
            errors: {},
            valid: {},
          }),
          n.state.data["sepa.ibanNumber"])
        ) {
          var i = Ys(n.state.data["sepa.ibanNumber"]);
          n.state.data["sepa.ibanNumber"] = Gs(i);
        }
        if (n.state.data["sepa.ibanNumber"] || n.state.data["sepa.ownerName"]) {
          var o = n.props.holderName ? Xs(n.state.data["sepa.ownerName"]) : "",
            l =
              (n.state.data["sepa.ibanNumber"]
                ? "valid" === $s(n.state.data["sepa.ibanNumber"]).status
                : "") && o,
            s = { data: n.state.data, isValid: l };
          n.props.onChange(s);
        }
        return n;
      }
      return (
        Nt(t, e),
        (t.prototype.setStatus = function (e) {
          this.setState({ status: e });
        }),
        (t.prototype.onChange = function () {
          var e = this.props.holderName
              ? Xs(this.state.data["sepa.ownerName"])
              : "",
            t = "valid" === $s(this.state.data["sepa.ibanNumber"]).status && e,
            a = { data: this.state.data, isValid: t };
          this.props.onChange(a);
        }),
        (t.prototype.showValidation = function () {
          var e = $s(this.state.data["sepa.ibanNumber"]).status,
            t = Xs(this.state.data["sepa.ownerName"]);
          this.setError(
            "iban",
            "valid" !== e ? "sepaDirectDebit.ibanField.invalid" : null
          ),
            this.setError("holder", !t || null);
        }),
        (t.prototype.render = function (e, t) {
          var a = this,
            r = e.placeholders,
            n = e.countryCode,
            i = t.data,
            o = t.errors,
            l = t.valid,
            s = er().i18n;
          return Qt(
            "div",
            { className: "adyen-checkout__iban-input" },
            this.props.holderName &&
              Qt(
                Cr,
                {
                  className: "adyen-checkout__field--owner-name",
                  label: s.get("sepa.ownerName"),
                  filled: i["sepa.ownerName"] && i["sepa.ownerName"].length,
                  errorMessage:
                    !!o.holder && s.get("creditCard.holderName.invalid"),
                },
                qr("text", {
                  name: "sepa.ownerName",
                  className: "adyen-checkout__iban-input__owner-name",
                  placeholder:
                    "ownerName" in r
                      ? r.ownerName
                      : s.get("sepaDirectDebit.nameField.placeholder"),
                  value: i["sepa.ownerName"],
                  "aria-invalid": !!this.state.errors.holder,
                  "aria-label": s.get("sepa.ownerName"),
                  onInput: function (e) {
                    return a.handleHolderInput(e.target.value);
                  },
                })
              ),
            Qt(
              Cr,
              {
                className: "adyen-checkout__field--iban-number",
                label: s.get("sepa.ibanNumber"),
                errorMessage: !!o.iban && s.get(o.iban),
                filled: i["sepa.ibanNumber"] && i["sepa.ibanNumber"].length,
                isValid: l.iban,
                onBlur: this.handleIbanBlur,
              },
              qr("text", {
                ref: function (e) {
                  a.ibanNumber = e;
                },
                name: "sepa.ibanNumber",
                className: "adyen-checkout__iban-input__iban-number",
                classNameModifiers: ["large"],
                placeholder: "ibanNumber" in r ? r.ibanNumber : Js(n),
                value: i["sepa.ibanNumber"],
                onInput: this.handleIbanInput,
                "aria-invalid": !!this.state.errors.iban,
                "aria-label": s.get("sepa.ibanNumber"),
                autocorrect: "off",
                spellcheck: !1,
              })
            ),
            this.props.showPayButton &&
              this.props.payButton({ status: this.state.status })
          );
        }),
        (t.defaultProps = {
          onChange: function () {},
          countryCode: null,
          holderName: !0,
          placeholders: {},
        }),
        t
      );
    })(ea),
    td = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (e) {
          return wt({ holderName: !0 }, e);
        }),
        (t.prototype.formatData = function () {
          return {
            paymentMethod: {
              type: t.type,
              iban: this.state.data["sepa.ibanNumber"],
              ownerName: this.state.data["sepa.ownerName"],
            },
          };
        }),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return !!this.state.isValid;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.render = function () {
          var e = this;
          return Qt(
            si,
            wt({}, this.props, { loadingContext: this.props.loadingContext }),
            Qt(
              ed,
              wt(
                {
                  ref: function (t) {
                    e.componentRef = t;
                  },
                },
                this.props,
                {
                  onChange: this.setState,
                  onSubmit: this.submit,
                  payButton: this.payButton,
                }
              )
            )
          );
        }),
        (t.type = "sepadirectdebit"),
        t
      );
    })(rr),
    ad = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.componentDidMount = function () {
          this.formEl.submit();
        }),
        (t.prototype.render = function (e) {
          var t = this,
            a = e.name,
            r = e.action,
            n = e.target,
            i = e.inputName,
            o = e.inputValue;
          return Qt(
            "form",
            {
              ref: function (e) {
                t.formEl = e;
              },
              method: "POST",
              className: xa([
                "adyen-checkout__threeds2__form",
                "adyen-checkout__threeds2__form--" + a,
              ]),
              name: a,
              action: r,
              target: n,
              style: { display: "none" },
            },
            Qt("input", { name: i, value: o })
          );
        }),
        t
      );
    })(ea),
    rd = { result: { transStatus: "U" }, type: "challengeResult" },
    nd = {
      result: { transStatus: "U" },
      type: "challengeResult",
      errorCode: "timeout",
    },
    id = { result: { threeDSCompInd: "N" }, type: "fingerPrintResult" },
    od = {
      result: { threeDSCompInd: "N" },
      type: "fingerPrintResult",
      errorCode: "timeout",
    },
    ld = "unknownError",
    sd = {
      timeout: "ThreeDS2 timed out",
      wrongOrigin:
        "Result came in the right format but not from the expected origin",
      HTMLElementError: "No proper HTML element was passed",
      wrongDataType: "Result data was not of the expected type",
      missingProperty: "Result data did not contain the expected properties",
      unknownError: "An unknown error occurred",
    },
    dd = {
      "01": ["250px", "400px"],
      "02": ["390px", "400px"],
      "03": ["500px", "600px"],
      "04": ["600px", "400px"],
      "05": ["100%", "100%"],
    },
    cd = function (e) {
      var t = br.decode(e);
      try {
        return t && JSON.parse(t);
      } catch (e) {
        throw new Error("Could not decode token");
      }
    },
    ud = function (e) {
      if (!e || !Object.keys(e).length)
        throw new Error("No (populated) data object to encode");
      return br.encode(JSON.stringify(e));
    },
    pd = function (e) {
      var t = 1 === e.length ? "0" + e : e;
      return Object.prototype.hasOwnProperty.call(dd, t) ? t : "02";
    },
    md = function (e, t, a) {
      var r;
      return {
        data:
          ((r = {}),
          (r[e] = ud({ threeDSCompInd: t.threeDSCompInd })),
          (r.paymentData = a),
          r),
      };
    },
    hd = function (e, t, a) {
      return {
        data: { details: { "threeds2.fingerprint": ud(t) }, paymentData: a },
      };
    },
    fd = function (e, t, a) {
      var r;
      return {
        data: {
          details:
            ((r = {}),
            (r[e] = ud({ transStatus: t, authorisationToken: a })),
            r),
        },
      };
    },
    yd = function (e, t, a) {
      return {
        data: {
          details: { "threeds2.challengeResult": ud({ transStatus: t }) },
          paymentData: a,
        },
      };
    },
    bd = function (e) {
      return { errorCode: e, message: sd[e] || sd[ld] };
    },
    vd = function (e) {
      var t = window.btoa(e).split("=")[0];
      return (t = (t = t.replace(/\+/g, "-")).replace(/\//g, "_"));
    },
    gd = ["elementRef"],
    kd = ["createFromAction", "onAdditionalDetails", "challengeWindowSize"],
    Cd = ["challengeWindowSize"],
    _d = "threeDSIframe",
    Nd = (function (e) {
      function t(t) {
        var a = e.call(this, t) || this;
        a.iframeCallback = function () {
          a.setState({ status: "iframeLoaded" });
        };
        var r = JSON.stringify(a.props.cReqData),
          n = vd(r);
        return (a.state = { base64URLencodedData: n }), a;
      }
      return (
        Nt(t, e),
        (t.prototype.get3DS2ChallengePromise = function () {
          var e = this;
          return new Promise(function (t, a) {
            (e.processMessageHandler = ur(
              e.props.postMessageDomain,
              t,
              a,
              rd,
              "challengeResult"
            )),
              window.addEventListener("message", e.processMessageHandler);
          });
        }),
        (t.prototype.componentDidMount = function () {
          var e = this;
          (this.challengePromise = ir(6e5, this.get3DS2ChallengePromise(), nd)),
            this.challengePromise.promise
              .then(function (t) {
                window.removeEventListener("message", e.processMessageHandler),
                  e.props.onCompleteChallenge(t);
              })
              .catch(function (t) {
                window.removeEventListener("message", e.processMessageHandler),
                  e.props.onErrorChallenge(t);
              });
        }),
        (t.prototype.componentWillUnmount = function () {
          this.challengePromise && this.challengePromise.cancel(),
            window.removeEventListener("message", this.processMessageHandler);
        }),
        (t.prototype.render = function (e, t) {
          var a = e.acsURL,
            r = e.cReqData,
            n = e.iframeSizeArr,
            i = t.base64URLencodedData,
            o = t.status,
            l = n[0],
            s = n[1];
          return Qt(
            "div",
            {
              className: xa([
                "adyen-checkout__threeds2__challenge",
                "adyen-checkout__threeds2__challenge--" + r.challengeWindowSize,
              ]),
            },
            "iframeLoaded" !== o && Qt(Ba, null),
            Qt(nr, {
              name: _d,
              width: l,
              height: s,
              callback: this.iframeCallback,
            }),
            Qt(ad, {
              name: "cReqForm",
              action: a,
              target: _d,
              inputName: "creq",
              inputValue: i,
            })
          );
        }),
        t
      );
    })(ea),
    wd = (function (e) {
      function t(t) {
        var a = e.call(this, t) || this;
        if (a.props.token) {
          var r = (function (e) {
            var t,
              a = e.token,
              r = e.size,
              n = cd(a),
              i = n.acsTransID,
              o = n.acsURL,
              l = n.messageVersion,
              s = n.threeDSNotificationURL,
              d = n.threeDSServerTransID,
              c = pr(s);
            return {
              acsURL: o,
              cReqData: {
                acsTransID: i,
                messageVersion: l,
                threeDSServerTransID: d,
                messageType: "CReq",
                challengeWindowSize: pd(r),
              },
              iframeSizeArr: ((t = r), dd[pd(t)]),
              postMessageDomain: c,
            };
          })({
            token: a.props.token,
            size: a.props.challengeWindowSize || a.props.size,
          });
          a.state = { status: "retrievingChallengeToken", challengeData: r };
        } else
          (a.state = { status: "error" }),
            a.props.onError("Missing challengeToken parameter");
        return a;
      }
      return (
        Nt(t, e),
        (t.prototype.setStatusComplete = function (e) {
          var t = this;
          this.setState({ status: "complete" }, function () {
            var a = (t.props.useOriginalFlow ? yd : fd)(
              t.props.dataKey,
              e.transStatus,
              t.props.paymentData
            );
            t.props.onComplete(a);
          });
        }),
        (t.prototype.render = function (e, t) {
          var a = this,
            r = t.challengeData;
          return "retrievingChallengeToken" === this.state.status
            ? Qt(
                Nd,
                wt(
                  {
                    onCompleteChallenge: function (e) {
                      a.setStatusComplete(e.result);
                    },
                    onErrorChallenge: function (e) {
                      var t = bd(e.errorCode);
                      a.props.onError(t), a.setStatusComplete(e.result);
                    },
                  },
                  r
                )
              )
            : null;
        }),
        (t.defaultProps = {
          onComplete: function () {},
          onError: function () {},
        }),
        t
      );
    })(ea),
    Pd = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.render = function () {
          return Mo(this.props.paymentData)
            ? Qt(wd, wt({}, this.props, { onComplete: this.onComplete }))
            : (this.props.onError({
                errorCode: "threeds2.challenge",
                message: "No paymentData received. Challenge cannot proceed",
              }),
              null);
        }),
        (t.type = "threeDS2Challenge"),
        (t.defaultProps = {
          dataKey: "threeDSResult",
          size: "02",
          type: "ChallengeShopper",
        }),
        t
      );
    })(rr),
    Fd = "threeDSMethodIframe",
    Dd = (function (e) {
      function t(t) {
        var a = e.call(this, t) || this,
          r = a.props,
          n = r.threeDSServerTransID,
          i = r.threeDSMethodNotificationURL,
          o = JSON.stringify({
            threeDSServerTransID: n,
            threeDSMethodNotificationURL: i,
          }),
          l = vd(o);
        return (a.state = { base64URLencodedData: l }), a;
      }
      return (
        Nt(t, e),
        (t.prototype.get3DS2MethodPromise = function () {
          var e = this;
          return new Promise(function (t, a) {
            (e.processMessageHandler = ur(
              e.props.postMessageDomain,
              t,
              a,
              id,
              "fingerPrintResult"
            )),
              window.addEventListener("message", e.processMessageHandler);
          });
        }),
        (t.prototype.componentDidMount = function () {
          var e = this;
          (this.fingerPrintPromise = ir(1e4, this.get3DS2MethodPromise(), od)),
            this.fingerPrintPromise.promise
              .then(function (t) {
                window.removeEventListener("message", e.processMessageHandler),
                  e.props.onCompleteFingerprint(t);
              })
              .catch(function (t) {
                window.removeEventListener("message", e.processMessageHandler),
                  e.props.onErrorFingerprint(t);
              });
        }),
        (t.prototype.componentWillUnmount = function () {
          this.fingerPrintPromise && this.fingerPrintPromise.cancel(),
            window.removeEventListener("message", this.processMessageHandler);
        }),
        (t.prototype.render = function (e, t) {
          var a = e.threeDSMethodURL,
            r = t.base64URLencodedData;
          return Qt(
            "div",
            { className: "adyen-checkout__3ds2-device-fingerprint" },
            this.props.showSpinner && Qt(Ba, null),
            Qt(
              "div",
              { style: { display: "none" } },
              Qt(nr, { name: Fd }),
              Qt(ad, {
                name: "threeDSMethodForm",
                action: a,
                target: Fd,
                inputName: "threeDSMethodData",
                inputValue: r,
              })
            )
          );
        }),
        (t.defaultProps = { showSpinner: !0 }),
        t
      );
    })(ea),
    Sd = (function (e) {
      function t(t) {
        var a = e.call(this, t) || this,
          r = a.props,
          n = r.token,
          i = r.notificationURL;
        if (n) {
          var o = (function (e) {
            var t = e.token,
              a = e.notificationURL,
              r = cd(t),
              n = r.threeDSMethodNotificationURL,
              i = r.threeDSMethodUrl,
              o = a || n;
            return {
              threeDSServerTransID: r.threeDSServerTransID,
              threeDSMethodURL: i,
              threeDSMethodNotificationURL: o,
              postMessageDomain: pr(o),
            };
          })({ token: n, notificationURL: i });
          a.state = { status: "init", fingerPrintData: o };
        } else
          (a.state = { status: "error" }),
            a.props.onError("Missing fingerprintToken parameter");
        return a;
      }
      return (
        Nt(t, e),
        (t.prototype.componentDidMount = function () {
          this.state.fingerPrintData &&
          this.state.fingerPrintData.threeDSMethodURL &&
          this.state.fingerPrintData.threeDSMethodURL.length
            ? this.setState({ status: "retrievingFingerPrint" })
            : this.setStatusComplete({ threeDSCompInd: "U" });
        }),
        (t.prototype.setStatusComplete = function (e) {
          var t = this;
          this.setState({ status: "complete" }, function () {
            var a = (t.props.useOriginalFlow ? hd : md)(
              t.props.dataKey,
              e,
              t.props.paymentData
            );
            t.props.onComplete(a);
          });
        }),
        (t.prototype.render = function (e, t) {
          var a = this,
            r = t.fingerPrintData;
          return "retrievingFingerPrint" === this.state.status
            ? Qt(
                Dd,
                wt(
                  {
                    onCompleteFingerprint: function (e) {
                      a.setStatusComplete(e.result);
                    },
                    onErrorFingerprint: function (e) {
                      var t = bd(e.errorCode);
                      a.props.onError(t), a.setStatusComplete(e.result);
                    },
                    showSpinner: this.props.showSpinner,
                  },
                  r
                )
              )
            : null;
        }),
        (t.type = "scheme"),
        (t.defaultProps = {
          onComplete: function () {},
          onError: function () {},
          paymentData: "",
          showSpinner: !0,
        }),
        t
      );
    })(ea);
  function Ad(e) {
    var t = this,
      a = e.data;
    Kn(
      {
        path: "v1/submitThreeDS2Fingerprint?token=" + this.props.clientKey,
        loadingContext: this.props.loadingContext,
      },
      wt({}, a)
    ).then(function (e) {
      var a,
        r,
        n,
        i = null !== (a = t.props.elementRef) && void 0 !== a ? a : t;
      if (e.action || e.details) {
        if ("completed" === e.type) {
          var o = e.details;
          return t.onComplete({ data: { details: o } });
        }
        return "threeDS2" ===
          (null === (r = e.action) || void 0 === r ? void 0 : r.type) ||
          "redirect" ===
            (null === (n = e.action) || void 0 === n ? void 0 : n.type)
          ? i.handleAction(e.action)
          : void 0;
      }
      console.error(
        "Handled Error::callSubmit3DS2Fingerprint::FAILED:: resData=",
        e
      );
    });
  }
  var xd = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (t.callSubmit3DS2Fingerprint = Ad.bind(t)), t;
      }
      return (
        Nt(t, e),
        (t.prototype.render = function () {
          return Mo(this.props.paymentData)
            ? Qt(
                Sd,
                wt({}, this.props, {
                  onComplete: this.props.useOriginalFlow
                    ? this.onComplete
                    : this.callSubmit3DS2Fingerprint,
                })
              )
            : (this.props.onError({
                errorCode: t.defaultProps.dataKey,
                message:
                  "No paymentData received. Fingerprinting cannot proceed",
              }),
              null);
        }),
        (t.type = "threeDS2Fingerprint"),
        (t.defaultProps = {
          dataKey: "fingerprintResult",
          type: "IdentifyShopper",
        }),
        t
      );
    })(rr),
    Bd = function (e, t) {
      if ((void 0 === t && (t = 2), 0 === t)) return e;
      var a = String(e);
      return a.length >= t ? a : ("0".repeat(t) + a).slice(-1 * t);
    },
    zd = function (e, t) {
      var a = new Date(),
        r = t.getTime() - a.getTime(),
        n = r / 1e3,
        i = (function (e, t, a) {
          var r = a.getTime() - e.getTime();
          return 100 - Math.round((100 * (t.getTime() - e.getTime())) / r);
        })(e, a, t);
      return {
        total: r,
        minutes: Bd(Math.floor((n / 60) % 60)),
        seconds: Bd(Math.floor(n % 60)),
        completed: r <= 0,
        percentage: i,
      };
    },
    Td = (function (e) {
      function t(t) {
        var a = e.call(this, t) || this,
          r = 6e4 * a.props.minutesFromNow,
          n = new Date().getTime();
        return (
          (a.state = {
            startTime: new Date(n),
            endTime: new Date(n + r),
            minutes: "-",
            seconds: "-",
          }),
          a
        );
      }
      return (
        Nt(t, e),
        (t.prototype.tick = function () {
          var e = zd(this.state.startTime, this.state.endTime);
          if (e.completed)
            return this.props.onCompleted(), this.clearInterval();
          var t = {
            minutes: e.minutes,
            seconds: e.seconds,
            percentage: e.percentage,
          };
          return this.setState(wt({}, t)), this.props.onTick(t), t;
        }),
        (t.prototype.clearInterval = function () {
          clearInterval(this.interval), delete this.interval;
        }),
        (t.prototype.componentDidMount = function () {
          var e = this;
          this.interval = setInterval(function () {
            e.tick();
          }, 1e3);
        }),
        (t.prototype.componentWillUnmount = function () {
          this.clearInterval();
        }),
        (t.prototype.render = function () {
          return Qt(
            "span",
            { className: "adyen-checkout__countdown" },
            Qt("span", { className: "countdown__minutes" }, this.state.minutes),
            Qt("span", { className: "countdown__separator" }, ":"),
            Qt("span", { className: "countdown__seconds" }, this.state.seconds)
          );
        }),
        (t.defaultProps = {
          onTick: function () {},
          onCompleted: function () {},
        }),
        t
      );
    })(ea);
  function Md(e, t, a) {
    if (!e || !t) throw new Error("Could not check the payment status");
    return Kn(
      {
        loadingContext: a,
        path: "services/PaymentInitiation/v1/status?clientKey=" + t,
      },
      { paymentData: e }
    );
  }
  var Id = function (e) {
      switch (e.resultCode.toLowerCase()) {
        case "refused":
        case "error":
        case "cancelled":
          return {
            type: "error",
            props: wt(wt({}, e), { message: "error.subtitle.refused" }),
          };
        case "unknown":
          return {
            type: "error",
            props: wt(wt({}, e), { message: "error.message.unknown" }),
          };
        case "pending":
        case "received":
          return { type: e.resultCode.toLowerCase(), props: e };
        case "authorised":
        default:
          return { type: "success", props: e };
      }
    },
    jd = function (e) {
      if (!e.type && e.resultCode) return Id(e);
      if (!e.type) return { type: "error", props: e };
      switch (e.type.toLowerCase()) {
        case "pending":
          return { type: "pending", props: e };
        case "complete":
          return Id(e);
        case "validation":
        default:
          return { type: "error", props: e };
      }
    },
    Od = (function (e) {
      function t(t) {
        var a = e.call(this, t) || this;
        return (
          (a.statusInterval = function () {
            a.checkStatus(),
              a.setState({ timePassed: a.state.timePassed + a.props.delay }),
              a.state.timePassed >= a.props.throttleTime &&
                a.setState({ delay: a.props.throttledInterval });
          }),
          (a.redirectToApp = function (e, t) {
            void 0 === t && (t = function () {}),
              setTimeout(function () {
                a.props.onError(a.props.type + " App was not found"), t();
              }, 25),
              window.location.assign(e);
          }),
          (a.state = {
            buttonStatus: "default",
            completed: !1,
            delay: t.delay,
            expired: !1,
            loading: !0,
            onError: function () {},
            percentage: 100,
            timePassed: 0,
          }),
          (a.onTimeUp = a.onTimeUp.bind(a)),
          (a.onTick = a.onTick.bind(a)),
          (a.onComplete = a.onComplete.bind(a)),
          (a.onError = a.onError.bind(a)),
          (a.checkStatus = a.checkStatus.bind(a)),
          a
        );
      }
      return (
        Nt(t, e),
        (t.prototype.componentDidMount = function () {
          var e = this,
            t = this.props,
            a = t.shouldRedirectOnMobile,
            r = t.url,
            n =
              window.matchMedia("(max-width: 768px)").matches &&
              /Android|iPhone|iPod/.test(navigator.userAgent),
            i = function () {
              e.interval = setInterval(e.statusInterval, e.state.delay);
            };
          a && r && n ? this.redirectToApp(r, i) : i();
        }),
        (t.prototype.componentDidUpdate = function (e, t) {
          t.delay !== this.state.delay &&
            (clearInterval(this.interval),
            (this.interval = setInterval(
              this.statusInterval,
              this.state.delay
            )));
        }),
        (t.prototype.componentWillUnmount = function () {
          clearInterval(this.interval);
        }),
        (t.prototype.onTick = function (e) {
          this.setState({ percentage: e.percentage });
        }),
        (t.prototype.onTimeUp = function () {
          return (
            this.setState({ expired: !0 }),
            clearInterval(this.interval),
            this.props.onError({
              type: "error",
              props: { errorMessage: "Payment Expired" },
            })
          );
        }),
        (t.prototype.onComplete = function (e) {
          return (
            clearInterval(this.interval),
            this.setState({ completed: !0, loading: !1 }),
            this.props.onComplete({
              data: {
                details: { payload: e.props.payload },
                paymentData: this.props.paymentData,
              },
            }),
            e
          );
        }),
        (t.prototype.onError = function (e) {
          return (
            clearInterval(this.interval),
            this.setState({ expired: !0, loading: !1 }),
            this.props.onComplete({
              data: {
                details: { payload: e.props.payload },
                paymentData: this.props.paymentData,
              },
            }),
            e
          );
        }),
        (t.prototype.checkStatus = function () {
          var e = this,
            t = this.props;
          return Md(t.paymentData, t.clientKey, t.loadingContext)
            .then(jd)
            .catch(function (e) {
              return { type: "network-error", props: e };
            })
            .then(function (t) {
              switch (t.type) {
                case "success":
                  return e.onComplete(t);
                case "error":
                  return e.onError(t);
                default:
                  e.setState({ loading: !1 });
              }
              return t;
            });
        }),
        (t.prototype.render = function (e, t) {
          var a = this,
            r = e.amount,
            n = e.url,
            i = e.brandLogo,
            o = e.countdownTime,
            l = e.i18n,
            s = e.loadingContext,
            d = e.type,
            c = t.expired,
            u = t.completed,
            p = t.loading,
            m = this.props.qrCodeData
              ? s +
                "barcode.shtml?barcodeType=qrCode&fileType=png&data=" +
                this.props.qrCodeData
              : this.props.qrCodeImage,
            h = function (e, t) {
              return Qt(
                "div",
                {
                  className:
                    "adyen-checkout__qr-loader adyen-checkout__qr-loader--result",
                },
                Qt("img", {
                  className:
                    "adyen-checkout__qr-loader__icon adyen-checkout__qr-loader__icon--result",
                  src: Aa({ loadingContext: s, imageFolder: "components/" })(e),
                  alt: l.get(t),
                }),
                Qt(
                  "div",
                  {
                    className:
                      "adyen-checkout__qr-loader__subtitle adyen-checkout__qr-loader__subtitle--result",
                  },
                  l.get(t)
                )
              );
            };
          if (c) return h("error", "error.subtitle.payment");
          if (u) return h("success", "creditCard.success");
          if (p)
            return Qt(
              "div",
              { className: "adyen-checkout__qr-loader" },
              i &&
                Qt("img", {
                  alt: d,
                  src: i,
                  className: "adyen-checkout__qr-loader__brand-logo",
                }),
              Qt(Ba, null)
            );
          var f = l.get("wechatpay.timetopay").split("%@");
          return Qt(
            "div",
            {
              className:
                "\n                    adyen-checkout__qr-loader\n                    adyen-checkout__qr-loader--" +
                d +
                "\n                    " +
                this.props.classNameModifiers.map(function (e) {
                  return "adyen-checkout__qr-loader--" + e;
                }) +
                "\n                ",
            },
            i &&
              Qt("img", {
                src: i,
                alt: d,
                className: "adyen-checkout__qr-loader__brand-logo",
              }),
            Qt(
              "div",
              { className: "adyen-checkout__qr-loader__subtitle" },
              l.get(this.props.introduction)
            ),
            Qt("img", { src: m, alt: l.get("wechatpay.scanqrcode") }),
            r &&
              r.value &&
              r.currency &&
              Qt(
                "div",
                { className: "adyen-checkout__qr-loader__payment_amount" },
                l.amount(r.value, r.currency)
              ),
            Qt(
              "div",
              { className: "adyen-checkout__qr-loader__progress" },
              Qt("span", {
                className: "adyen-checkout__qr-loader__percentage",
                style: { width: this.state.percentage + "%" },
              })
            ),
            Qt(
              "div",
              { className: "adyen-checkout__qr-loader__countdown" },
              f[0],
              "\xa0",
              Qt(Td, {
                minutesFromNow: o,
                onTick: this.onTick,
                onCompleted: this.onTimeUp,
              }),
              "\xa0",
              f[1]
            ),
            this.props.instructions &&
              Qt(
                "div",
                { className: "adyen-checkout__qr-loader__instructions" },
                l.get(this.props.instructions)
              ),
            this.props.copyBtn &&
              Qt(
                "div",
                { className: "adyen-checkout__qr-loader__actions" },
                Qt(tr, {
                  inline: !0,
                  secondary: !0,
                  onClick: function (e, t) {
                    var r = t.complete;
                    gs(a.props.qrCodeData), r();
                  },
                  icon: Aa({ loadingContext: s, imageFolder: "components/" })(
                    "copy"
                  ),
                  label: l.get("button.copy"),
                })
              ),
            n &&
              Qt(
                "div",
                { className: "adyen-checkout__qr-loader__app-link" },
                Qt(
                  "span",
                  { className: "adyen-checkout__qr-loader__separator__label" },
                  l.get("or")
                ),
                Qt(tr, {
                  classNameModifiers: ["qr-loader"],
                  onClick: function () {
                    return a.redirectToApp(n);
                  },
                  label: l.get("openApp"),
                })
              )
          );
        }),
        (t.defaultProps = {
          delay: 2e3,
          countdownTime: 15,
          onError: function () {},
          onComplete: function () {},
          throttleTime: 6e4,
          classNameModifiers: [],
          throttledInterval: 1e4,
          introduction: "wechatpay.scanqrcode",
        }),
        t
      );
    })(ea),
    Ed = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatData = function () {
          return {
            paymentMethod: wt(
              { type: this.props.type || this.constructor.type },
              this.state.data
            ),
          };
        }),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return !0;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.render = function () {
          var e = this;
          return this.props.paymentData
            ? Qt(
                si,
                {
                  i18n: this.props.i18n,
                  loadingContext: this.props.loadingContext,
                },
                Qt(
                  Od,
                  wt(
                    {
                      ref: function (t) {
                        e.componentRef = t;
                      },
                    },
                    this.props,
                    {
                      shouldRedirectOnMobile: this.props.shouldRedirectOnMobile,
                      type: this.constructor.type,
                      brandLogo: this.props.brandLogo || this.icon,
                      delay: this.props.delay,
                      onComplete: this.onComplete,
                      countdownTime: this.props.countdownTime,
                      instructions: this.props.instructions,
                    }
                  )
                )
              )
            : this.props.showPayButton
            ? Qt(
                si,
                {
                  i18n: this.props.i18n,
                  loadingContext: this.props.loadingContext,
                },
                Qt(as, {
                  name: this.displayName,
                  onSubmit: this.submit,
                  payButton: this.payButton,
                  ref: function (t) {
                    e.componentRef = t;
                  },
                })
              )
            : null;
        }),
        (t.defaultProps = {
          qrCodeImage: "",
          amount: null,
          paymentData: null,
          onError: function () {},
          onComplete: function () {},
        }),
        t
      );
    })(rr),
    Rd = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (t) {
          return wt(
            { delay: 2e3, countdownTime: 15 },
            e.prototype.formatProps.call(this, t)
          );
        }),
        (t.type = "wechatpayQR"),
        t
      );
    })(Ed),
    Ld = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (t) {
          var a =
            window.matchMedia("(max-width: 768px)").matches &&
            /Android|iPhone|iPod/.test(navigator.userAgent);
          return wt(
            {
              delay: 2e3,
              countdownTime: 15,
              shouldRedirectOnMobile: !0,
              buttonLabel: a ? "openApp" : "generateQRCode",
            },
            e.prototype.formatProps.call(this, t)
          );
        }),
        (t.type = "bcmc_mobile"),
        t
      );
    })(Ed),
    Vd = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return Nt(t, e), (t.type = "molpay_ebanking_fpx_MY"), t;
    })(Li),
    Ud = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return Nt(t, e), (t.type = "molpay_ebanking_TH"), t;
    })(Li),
    Kd = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return Nt(t, e), (t.type = "molpay_ebanking_VN"), t;
    })(Li),
    Hd = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return Nt(t, e), (t.type = "openbanking_UK"), t;
    })(Li);
  function qd(e) {
    var t = er().i18n,
      a = function () {
        return (
          [
            "dragonpay_ebanking",
            "dragonpay_otc_banking",
            "dragonpay_otc_non_banking",
          ].indexOf(e.type) > -1
        );
      },
      r = en({
        schema: St(St([], a() ? ["issuer"] : []), ["shopperEmail"]),
        rules: {
          issuer: {
            validate: function (e) {
              return a() && !!e;
            },
            modes: ["input", "blur"],
          },
        },
      }),
      n = r.handleChangeFor,
      i = r.triggerValidation,
      o = r.data,
      l = r.valid,
      s = r.errors,
      d = r.isValid,
      c = Ri({}, e.type),
      u = e.items.map(function (e) {
        return wt(wt({}, e), { icon: c(e.id && e.id.toLowerCase()) });
      }),
      p = function (e) {
        return "dragonpay_otc_non_banking" === e
          ? "dragonpay.voucher.non.bank.selectField.placeholder"
          : "dragonpay.voucher.bank.selectField.placeholder";
      };
    Ua(
      function () {
        e.onChange({ isValid: d, data: o, valid: l, errors: s });
      },
      [d, o, l, s]
    );
    var m = La("ready"),
      h = m[0],
      f = m[1];
    return (
      (this.setStatus = f),
      (this.showValidation = i),
      Qt(
        "div",
        { className: "adyen-checkout__dragonpay-input__field" },
        Qt(
          Cr,
          { label: t.get("shopperEmail"), errorMessage: !!s.shopperEmail },
          qr("emailAddress", {
            name: "dragonpay.shopperEmail",
            autoCorrect: "off",
            value: o.shopperEmail,
            className: "adyen-checkout__input--large",
            spellCheck: !1,
            onInput: n("shopperEmail", "input"),
            onChange: n("shopperEmail", "blur"),
          })
        ),
        a() &&
          Qt(
            Cr,
            { label: t.get(p(e.type)), errorMessage: !!s.issuer },
            qr("select", {
              items: u,
              selected: o.issuer,
              placeholder: t.get(p(e.type)),
              name: "issuer",
              className:
                "adyen-checkout__dropdown--large adyen-checkout__issuer-list__dropdown",
              onChange: n("issuer"),
            })
          ),
        e.showPayButton &&
          e.payButton({ status: h, label: t.get("confirmPurchase") })
      )
    );
  }
  function Gd(e) {
    var t = e.reference,
      a = e.totalAmount,
      r = e.surcharge,
      n = e.expiresAt,
      i = e.alternativeReference,
      o = e.instructionsUrl,
      l = e.icon,
      s = e.issuer,
      d = e.paymentMethodType,
      c = er(),
      u = c.loadingContext,
      p = c.i18n,
      m = Ri({ loadingContext: u }, d)(s.toLowerCase());
    return Qt(ks, {
      reference: t,
      paymentMethodType: d,
      introduction: p.get("voucher.introduction"),
      imageUrl: l,
      issuerImageUrl: m,
      instructionsUrl: o,
      amount: a && p.amount(a.value, a.currency),
      surcharge: r && p.amount(r.value, r.currency),
      voucherDetails: [
        { label: p.get("voucher.expirationDate"), value: p.date(n) },
        { label: p.get("voucher.alternativeReference"), value: i },
      ],
      copyBtn: !0,
    });
  }
  qd.defaultProps = { data: {}, items: [], onChange: function () {} };
  var Yd = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return (
      Nt(t, e),
      Object.defineProperty(t.prototype, "isValid", {
        get: function () {
          return !!this.state.isValid;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.formatData = function () {
        var e = this.state.data,
          a = e.issuer,
          r = e.shopperEmail;
        return wt(wt({}, r && { shopperEmail: r }), {
          paymentMethod: wt(wt({}, a && { issuer: a }), {
            type: this.props.type || t.type,
          }),
        });
      }),
      (t.prototype.formatProps = function (e) {
        var t, a, r;
        return wt(wt({}, e), {
          issuers:
            null !==
              (r =
                null ===
                  (a =
                    null === (t = e.details) || void 0 === t
                      ? void 0
                      : t.find(function (e) {
                          return "issuer" === e.key;
                        })) || void 0 === a
                  ? void 0
                  : a.items) && void 0 !== r
              ? r
              : e.issuers,
        });
      }),
      (t.prototype.render = function () {
        var e = this;
        return Qt(
          si,
          { i18n: this.props.i18n, loadingContext: this.props.loadingContext },
          this.props.reference
            ? Qt(
                Gd,
                wt(
                  {
                    ref: function (t) {
                      e.componentRef = t;
                    },
                    icon: this.icon,
                  },
                  this.props
                )
              )
            : Qt(
                qd,
                wt(
                  {
                    ref: function (t) {
                      e.componentRef = t;
                    },
                    items: this.props.issuers,
                  },
                  this.props,
                  {
                    onChange: this.setState,
                    onSubmit: this.submit,
                    payButton: this.payButton,
                  }
                )
              )
        );
      }),
      (t.type = "dragonpay"),
      t
    );
  })(rr);
  function Wd(e) {
    var t = Ha(null),
      a = er().i18n,
      r = La("ready"),
      n = r[0],
      i = r[1];
    return (
      (this.setStatus = i),
      (this.showValidation = function () {
        t.current && t.current.showValidation();
      }),
      Qt(
        "div",
        { className: "adyen-checkout__doku-input__field" },
        Qt(nn, {
          data: e.data,
          requiredFields: ["firstName", "lastName", "shopperEmail"],
          onChange: e.onChange,
          namePrefix: "doku",
          ref: t,
        }),
        e.showPayButton &&
          e.payButton({ status: n, label: a.get("confirmPurchase") })
      )
    );
  }
  var Jd = function (e) {
      var t = e.reference,
        a = e.expiresAt,
        r = e.instructionsUrl,
        n = e.shopperName,
        i = e.merchantName,
        o = e.totalAmount,
        l = e.paymentMethodType,
        s = er(),
        d = s.loadingContext,
        c = s.i18n;
      return Qt(ks, {
        paymentMethodType: l,
        reference: t,
        introduction: c.get("voucher.introduction.doku"),
        imageUrl: Aa({ loadingContext: d })(l),
        instructionsUrl: r,
        amount: o && c.amount(o.value, o.currency),
        voucherDetails: [
          { label: c.get("voucher.expirationDate"), value: c.date(a) },
          { label: c.get("voucher.shopperName"), value: n },
          { label: c.get("voucher.merchantName"), value: i },
        ],
        copyBtn: !0,
      });
    },
    Zd = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return !!this.state.isValid;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.formatData = function () {
          return wt(wt({}, this.state.data), {
            paymentMethod: { type: this.props.type || t.type },
          });
        }),
        Object.defineProperty(t.prototype, "icon", {
          get: function () {
            return Aa({ loadingContext: this.props.loadingContext })(
              this.props.type
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.render = function () {
          var e = this;
          return Qt(
            si,
            {
              i18n: this.props.i18n,
              loadingContext: this.props.loadingContext,
            },
            this.props.reference
              ? Qt(
                  Jd,
                  wt(
                    {
                      ref: function (t) {
                        e.componentRef = t;
                      },
                    },
                    this.props
                  )
                )
              : Qt(
                  Wd,
                  wt(
                    {
                      ref: function (t) {
                        e.componentRef = t;
                      },
                    },
                    this.props,
                    {
                      onChange: this.setState,
                      onSubmit: this.submit,
                      payButton: this.payButton,
                    }
                  )
                )
          );
        }),
        (t.type = "doku"),
        t
      );
    })(rr),
    Qd = {
      socialSecurityNumber: { validate: Vl, errorMessage: "", modes: ["blur"] },
      default: {
        validate: function (e) {
          return !!e && e.length > 0;
        },
        errorMessage: "",
        modes: ["blur"],
      },
    },
    $d = {
      socialSecurityNumber: function (e) {
        return Ll(e);
      },
    };
  function Xd(e) {
    var t = e.errors,
      a = e.value,
      r = e.onInput,
      n = e.onChange,
      i = er().i18n,
      o = La(!1),
      l = o[0],
      s = o[1];
    return Qt(
      "div",
      {
        className: xa(
          "adyen-checkout__fieldset",
          "adyen-checkout__fieldset--sendCopyToEmail",
          e.classNames
        ),
      },
      Qt(
        Cr,
        { classNameModifiers: ["sendCopyToEmail"] },
        qr("boolean", {
          onChange: function (t) {
            s(t.target.checked), e.onToggle(l);
          },
          label: i.get("boleto.sendCopyToEmail"),
          name: "sendCopyToEmail",
          value: l,
        })
      ),
      l &&
        Qt(
          Cr,
          {
            label: i.get("shopperEmail"),
            classNameModifiers: ["shopperEmail"],
            errorMessage: t,
          },
          qr("emailAddress", {
            name: "shopperEmail",
            autoCorrect: "off",
            spellCheck: !1,
            value: a,
            onInput: r,
            onChange: n,
          })
        )
    );
  }
  function ec(e) {
    var t = er().i18n,
      a = Ha(null),
      r = en({
        schema: [
          "firstName",
          "lastName",
          "socialSecurityNumber",
          "billingAddress",
          "shopperEmail",
        ],
        defaultData: e.data,
        rules: Qd,
        formatters: $d,
      }),
      n = r.handleChangeFor,
      i = r.triggerValidation,
      o = r.setSchema,
      l = r.setData,
      s = r.setValid,
      d = r.setErrors,
      c = r.data,
      u = r.valid,
      p = r.errors,
      m = r.isValid,
      h = La(!1),
      f = h[0],
      y = h[1];
    Ua(
      function () {
        var t = St(
          St(
            St(
              [],
              e.personalDetailsRequired
                ? ["firstName", "lastName", "socialSecurityNumber"]
                : []
            ),
            e.billingAddressRequired ? ["billingAddress"] : []
          ),
          f ? ["shopperEmail"] : []
        );
        o(t);
      },
      [f, e.personalDetailsRequired, e.billingAddressRequired]
    );
    var b = La("ready"),
      v = b[0],
      g = b[1];
    (this.setStatus = g),
      (this.showValidation = function () {
        i(), e.billingAddressRequired && a.current.showValidation();
      }),
      Ua(
        function () {
          var t = !e.billingAddressRequired || Boolean(u.billingAddress);
          e.onChange({ data: c, valid: u, errors: p, isValid: m && t });
        },
        [c, u, p]
      );
    var k = St(
      [],
      e.personalDetailsRequired ||
        e.billingAddressRequired ||
        e.showEmailAddress
        ? []
        : ["standalone"]
    );
    return Qt(
      "div",
      { className: "adyen-checkout__boleto-input__field" },
      e.personalDetailsRequired &&
        Qt(
          "div",
          {
            className:
              "adyen-checkout__fieldset adyen-checkout__fieldset--address adyen-checkout__fieldset--personalDetails",
          },
          Qt(
            "div",
            { className: "adyen-checkout__fieldset__title" },
            t.get("personalDetails")
          ),
          Qt(
            "div",
            { className: "adyen-checkout__fieldset__fields" },
            Qt(
              Cr,
              {
                label: t.get("firstName"),
                classNameModifiers: ["firstName", "col-50"],
                errorMessage: !!p.firstName,
              },
              qr("text", {
                name: "firstName",
                autocorrect: "off",
                spellcheck: !1,
                value: c.firstName,
                onInput: n("firstName", "input"),
                onChange: n("firstName"),
              })
            ),
            Qt(
              Cr,
              {
                label: t.get("lastName"),
                classNameModifiers: ["lastName", "col-50"],
                errorMessage: !!p.lastName,
              },
              qr("text", {
                name: "lastName",
                autocorrect: "off",
                spellcheck: !1,
                value: c.lastName,
                onInput: n("lastName", "input"),
                onChange: n("lastName"),
              })
            ),
            Qt(Hl, {
              data: c.socialSecurityNumber,
              error: p.socialSecurityNumber,
              valid: u.socialSecurityNumber,
              onInput: n("socialSecurityNumber", "input"),
              onChange: n("socialSecurityNumber"),
            })
          )
        ),
      e.billingAddressRequired &&
        Qt(ri, {
          label: "billingAddress",
          data: wt(wt({}, e.data.billingAddress), { country: "BR" }),
          onChange: function (e) {
            l("billingAddress", e.data),
              s("billingAddress", e.isValid),
              d("billingAddress", e.errors);
          },
          requiredFields: [
            "street",
            "houseNumberOrName",
            "postalCode",
            "city",
            "stateOrProvince",
          ],
          ref: a,
        }),
      e.showEmailAddress &&
        Qt(Xd, {
          value: c.shopperEmail,
          errors: p.shopperEmail,
          onToggle: function () {
            return y(!f);
          },
          onInput: n("shopperEmail", "input"),
          onChange: n("shopperEmail"),
        }),
      e.showPayButton &&
        e.payButton({
          status: v,
          label: t.get("boletobancario.btnLabel"),
          classNameModifiers: k,
        })
    );
  }
  ec.defaultProps = {
    data: {},
    showEmailAddress: !0,
    personalDetailsRequired: !0,
    billingAddressRequired: !0,
  };
  var tc = function (e) {
      var t = er(),
        a = t.i18n,
        r = t.loadingContext,
        n = e.reference,
        i = e.expiresAt,
        o = e.totalAmount,
        l = e.paymentMethodType,
        s = e.downloadUrl,
        d = n
          .replace(/[^\d]/g, "")
          .replace(
            /^(\d{4})(\d{5})\d{1}(\d{10})\d{1}(\d{10})\d{1}(\d{15})$/,
            "$1$5$2$3$4"
          );
      return Qt(ks, {
        reference: n,
        paymentMethodType: "boletobancario",
        barcode:
          r +
          "barcode.shtml?data=" +
          d +
          "&barcodeType=BT_Int2of5A&fileType=png",
        introduction: a.get("voucher.introduction"),
        imageUrl: Aa({ loadingContext: r })(l),
        amount: o && a.amount(o.value, o.currency),
        voucherDetails: [
          { label: a.get("voucher.expirationDate"), value: a.date(i) },
        ],
        downloadUrl: s,
        copyBtn: !0,
      });
    },
    ac = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.handleRef = function (e) {
            t.componentRef = e;
          }),
          t
        );
      }
      return (
        Nt(t, e),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return !!this.state.isValid;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.formatData = function () {
          var e = this.state.data,
            a = void 0 === e ? {} : e,
            r = a.billingAddress,
            n = a.shopperEmail,
            i = a.firstName,
            o = a.lastName,
            l = a.socialSecurityNumber,
            s = void 0 === l ? "" : l;
          return wt(
            wt(
              wt(
                wt(
                  { paymentMethod: { type: this.props.type || t.type } },
                  r && { billingAddress: r }
                ),
                n && { shopperEmail: n }
              ),
              i && o && { shopperName: { firstName: i, lastName: o } }
            ),
            s && { socialSecurityNumber: Rl(s) }
          );
        }),
        (t.prototype.render = function () {
          return Qt(
            si,
            {
              i18n: this.props.i18n,
              loadingContext: this.props.loadingContext,
            },
            this.props.reference
              ? Qt(tc, wt({ ref: this.handleRef, icon: this.icon }, this.props))
              : Qt(
                  ec,
                  wt({ ref: this.handleRef }, this.props, {
                    onChange: this.setState,
                    onSubmit: this.submit,
                    payButton: this.payButton,
                  })
                )
          );
        }),
        (t.type = "boletobancario"),
        t
      );
    })(rr),
    rc = function (e) {
      var t = er(),
        a = t.i18n,
        r = t.loadingContext,
        n = e.alternativeReference,
        i = e.reference,
        o = e.expiresAt,
        l = e.merchantReference,
        s = e.totalAmount,
        d = e.paymentMethodType,
        c = e.downloadUrl,
        u =
          r +
          "barcode.shtml?data=" +
          i +
          "&barcodeType=BT_Code128C&fileType=png",
        p = St(
          St(
            St(
              [],
              o
                ? [{ label: a.get("voucher.expirationDate"), value: a.date(o) }]
                : []
            ),
            l ? [{ label: a.get("voucher.shopperReference"), value: l }] : []
          ),
          n ? [{ label: a.get("voucher.alternativeReference"), value: n }] : []
        );
      return Qt(ks, {
        amount: s && a.amount(s.value, s.currency),
        barcode: u,
        copyBtn: !0,
        downloadUrl: c,
        imageUrl: Aa({ loadingContext: r })(d),
        introduction: a.get("voucher.introduction"),
        paymentMethodType: "oxxo",
        reference: i,
        voucherDetails: p,
      });
    },
    nc = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.handleRef = function (e) {
            t.componentRef = e;
          }),
          t
        );
      }
      return (
        Nt(t, e),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return !0;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.formatProps = function (e) {
          return wt(wt({}, e), { name: "Oxxo" });
        }),
        (t.prototype.formatData = function () {
          return { paymentMethod: { type: this.props.type || t.type } };
        }),
        (t.prototype.render = function () {
          return Qt(
            si,
            {
              i18n: this.props.i18n,
              loadingContext: this.props.loadingContext,
            },
            this.props.reference
              ? Qt(rc, wt({ ref: this.handleRef }, this.props))
              : this.payButton(
                  wt(wt({}, this.props), {
                    classNameModifiers: ["standalone"],
                    label:
                      this.props.i18n.get("continueTo") + " " + this.props.name,
                    onClick: this.submit,
                  })
                )
          );
        }),
        (t.type = "oxxo"),
        t
      );
    })(rr),
    ic = function (e) {
      var t = er(),
        a = t.i18n,
        r = t.loadingContext,
        n = e.entity,
        i = e.reference,
        o = e.expiresAt,
        l = e.merchantReference,
        s = e.totalAmount,
        d = e.paymentMethodType,
        c = e.downloadUrl,
        u = St(
          St(
            St([], n ? [{ label: a.get("voucher.entity"), value: n }] : []),
            o
              ? [{ label: a.get("voucher.expirationDate"), value: a.date(o) }]
              : []
          ),
          l ? [{ label: a.get("voucher.shopperReference"), value: l }] : []
        );
      return Qt(ks, {
        amount: s && a.amount(s.value, s.currency),
        barcode: null,
        copyBtn: !0,
        downloadUrl: c,
        imageUrl: Aa({ loadingContext: r })(d),
        introduction: a.get("voucher.introduction"),
        paymentMethodType: "multibanco",
        reference: i,
        voucherDetails: u,
      });
    },
    oc = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.handleRef = function (e) {
            t.componentRef = e;
          }),
          t
        );
      }
      return (
        Nt(t, e),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return !0;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.formatProps = function (e) {
          return wt(wt({}, e), { name: e.name || "Multibanco" });
        }),
        (t.prototype.formatData = function () {
          return { paymentMethod: { type: this.props.type || t.type } };
        }),
        (t.prototype.render = function () {
          var e = this;
          return this.props.reference
            ? Qt(
                si,
                {
                  i18n: this.props.i18n,
                  loadingContext: this.props.loadingContext,
                },
                Qt(ic, wt({ ref: this.handleRef }, this.props))
              )
            : this.props.showPayButton
            ? Qt(
                si,
                {
                  i18n: this.props.i18n,
                  loadingContext: this.props.loadingContext,
                },
                Qt(as, {
                  name: this.displayName,
                  amount: this.props.amount,
                  payButton: this.payButton,
                  onSubmit: this.submit,
                  ref: function (t) {
                    e.componentRef = t;
                  },
                })
              )
            : null;
        }),
        (t.type = "multibanco"),
        (t.defaultProps = { showPayButton: !0 }),
        t
      );
    })(rr),
    lc = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return Nt(t, e), (t.type = "dotpay"), t;
    })(Li),
    sc = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (t) {
          return wt(wt({}, e.prototype.formatProps.call(this, t)), {
            showImage: !1,
          });
        }),
        (t.type = "eps"),
        t
      );
    })(Li);
  function dc(e) {
    var t = e.children,
      a = e.classNames,
      r = void 0 === a ? [] : a,
      n = e.type,
      i = void 0 === n ? "error" : n,
      o = e.icon;
    return Qt(
      "div",
      {
        className: xa(
          "adyen-checkout__alert-message",
          "adyen-checkout__alert-message--" + i,
          r
        ),
      },
      o &&
        Qt(kr, { className: "adyen-checkout__alert-message__icon", type: o }),
      t
    );
  }
  function cc(e) {
    e.brand;
    var t = e.amount,
      a = e.balance,
      r = e.transactionLimit,
      n = Pt(e, ["brand", "amount", "balance", "transactionLimit"]),
      i = er().i18n,
      o = t.value > (null == r ? void 0 : r.value) ? r : t,
      l = (null == a ? void 0 : a.value) - (null == o ? void 0 : o.value);
    return Qt(
      "div",
      { className: "adyen-checkout__giftcard-result" },
      Qt(
        "ul",
        { className: "adyen-checkout__giftcard-result__balance" },
        Qt(
          "li",
          { className: "adyen-checkout__giftcard-result__balance__item" },
          Qt(
            "span",
            { className: "adyen-checkout__giftcard-result__balance__title" },
            i.get("giftcardBalance")
          ),
          Qt(
            "span",
            {
              className:
                "adyen-checkout__giftcard-result__balance__value adyen-checkout__giftcard-result__balance__value--amount",
            },
            i.amount(a.value, a.currency)
          )
        ),
        r &&
          Qt(
            "li",
            { className: "adyen-checkout__giftcard-result__balance__item" },
            Qt(
              "span",
              {
                className:
                  "adyen-checkout__giftcard-result__balance__title adyen-checkout__giftcard-result__balance__title--transactionLimit",
              },
              i.get("giftcardTransactionLimit", {
                values: { amount: i.amount(r.value, r.currency) },
              })
            )
          )
      ),
      this.props.showPayButton &&
        this.props.payButton({
          amount: o,
          status: n.status,
          onClick: n.onSubmit,
        }),
      Qt(
        "p",
        { className: "adyen-checkout__giftcard-result__remaining-balance" },
        i.get("partialPayment.remainingBalance", {
          values: { amount: i.amount(l, a.currency) },
        })
      )
    );
  }
  var uc = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.state = {
            status: "ready",
            data: {},
            balance: null,
            transactionLimit: null,
            focusedElement: !1,
            isValid: !1,
          }),
          (t.onChange = function (e) {
            t.props.onChange({ data: e.data, isValid: e.isSfpValid });
          }),
          (t.showValidation = function () {
            t.sfp.showValidation();
          }),
          (t.handleFocus = function (e) {
            t.setState({ focusedElement: e.currentFocusObject }),
              !0 === e.focus ? t.props.onFocus(e) : t.props.onBlur(e);
          }),
          (t.setBalance = function (e) {
            var a = e.balance,
              r = e.transactionLimit;
            t.setState({ balance: a, transactionLimit: r });
          }),
          t
        );
      }
      return (
        Nt(t, e),
        (t.prototype.setStatus = function (e) {
          this.setState({ status: e });
        }),
        (t.prototype.render = function (e, t) {
          var a,
            r = this,
            n = t.focusedElement,
            i = t.balance,
            o = t.transactionLimit,
            l = er().i18n,
            s =
              (null == o ? void 0 : o.value) < (null == i ? void 0 : i.value)
                ? o
                : i,
            d =
              (null == s ? void 0 : s.value) >=
              (null === (a = this.props.amount) || void 0 === a
                ? void 0
                : a.value);
          if (s && d)
            return Qt(
              cc,
              wt({ balance: i, transactionLimit: o, onSubmit: e.onSubmit }, e)
            );
          var c = function (e) {
            if (e.errors.encryptedCardNumber) return l.get("error.va.gen.01");
            switch (r.state.status) {
              case "no-balance":
                return l.get("error.giftcard.no-balance");
              case "card-error":
                return l.get("error.giftcard.card-error");
              case "currency-error":
                return l.get("error.giftcard.currency-error");
              default:
                return null;
            }
          };
          return Qt(
            "div",
            { className: "adyen-checkout__giftcard" },
            "error" === this.state.status &&
              Qt(dc, { icon: "cross" }, l.get("error.message.unknown")),
            Qt(
              Ml,
              wt({}, this.props, {
                ref: function (e) {
                  r.sfp = e;
                },
                onChange: this.onChange,
                onFocus: this.handleFocus,
                type: Ji,
                render: function (t, a) {
                  var r = t.setRootNode,
                    i = t.setFocusOn;
                  return Qt(
                    "div",
                    { ref: r, className: "adyen-checkout__field-wrapper" },
                    Qt(
                      Cr,
                      {
                        label: l.get("creditCard.numberField.title"),
                        classNameModifiers: St(
                          ["number"],
                          e.pinRequired ? ["70"] : ["100"]
                        ),
                        errorMessage: c(a),
                        focused: "encryptedCardNumber" === n,
                        onFocusField: function () {
                          return i("encryptedCardNumber");
                        },
                      },
                      Qt("span", {
                        "data-cse": "encryptedCardNumber",
                        "data-info": '{"length":"15-22", "maskInterval":4}',
                        className: xa({
                          "adyen-checkout__input": !0,
                          "adyen-checkout__input--large": !0,
                          "adyen-checkout__card__cardNumber__input": !0,
                          "adyen-checkout__input--error": c(a),
                          "adyen-checkout__input--focus":
                            "encryptedCardNumber" === n,
                        }),
                      })
                    ),
                    e.pinRequired &&
                      Qt(
                        Cr,
                        {
                          label: l.get("creditCard.pin.title"),
                          classNameModifiers: ["pin", "30"],
                          errorMessage:
                            a.errors.encryptedSecurityCode &&
                            l.get(a.errors.encryptedSecurityCode),
                          focused: "encryptedSecurityCode" === n,
                          onFocusField: function () {
                            return i("encryptedSecurityCode");
                          },
                        },
                        Qt("span", {
                          "data-cse": "encryptedSecurityCode",
                          "data-info": '{"length":"3-10", "maskInterval": 0}',
                          className: xa({
                            "adyen-checkout__input": !0,
                            "adyen-checkout__input--large": !0,
                            "adyen-checkout__card__cvc__input": !0,
                            "adyen-checkout__input--error":
                              a.errors.encryptedSecurityCode,
                            "adyen-checkout__input--focus":
                              "encryptedSecurityCode" === n,
                          }),
                        })
                      )
                  );
                },
              })
            ),
            this.props.showPayButton &&
              this.props.payButton({
                status: this.state.status,
                onClick: this.props.onBalanceCheck,
                label: l.get("applyGiftcard"),
              })
          );
        }),
        (t.defaultProps = {
          pinRequired: !0,
          onChange: function () {},
          onFocus: function () {},
          onBlur: function () {},
        }),
        t
      );
    })(ea),
    pc = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.onBalanceCheck = function () {
            return t.props.onBalanceCheck
              ? t.isValid
                ? new Promise(function (e, a) {
                    t.setStatus("loading"),
                      t.props.onBalanceCheck(e, a, t.formatData());
                  })
                    .then(function (e) {
                      var a,
                        r = e.balance,
                        n = e.transactionLimit;
                      if (!r) throw new Error("card-error");
                      if (
                        (null == r ? void 0 : r.currency) !==
                        (null === (a = t.props.amount) || void 0 === a
                          ? void 0
                          : a.currency)
                      )
                        throw new Error("currency-error");
                      if ((null == r ? void 0 : r.value) <= 0)
                        throw new Error("no-balance");
                      if (
                        (t.componentRef.setBalance({
                          balance: r,
                          transactionLimit: n,
                        }),
                        t.props.amount.value > r.value ||
                          t.props.amount.value > n.value)
                      )
                        return t.props.order
                          ? t.submit()
                          : t.onOrderRequest(t.data);
                    })
                    .catch(function (e) {
                      t.setStatus((null == e ? void 0 : e.message) || "error"),
                        t.props.onError && t.props.onError(e);
                    })
                : (t.showValidation(), !1)
              : t.submit();
          }),
          (t.onOrderRequest = function (e) {
            return new Promise(function (a, r) {
              t.props.onOrderRequest(a, r, e);
            }).then(function (e) {
              t.setState({
                order: { orderData: e.orderData, pspReference: e.pspReference },
              }),
                t.submit();
            });
          }),
          (t.payButton = function (e) {
            return Qt(ar, wt({}, e));
          }),
          t
        );
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (e) {
          return e;
        }),
        (t.prototype.formatData = function () {
          var e, t;
          return {
            paymentMethod: {
              type: this.constructor.type,
              brand: this.props.brand,
              encryptedCardNumber:
                null === (e = this.state.data) || void 0 === e
                  ? void 0
                  : e.encryptedCardNumber,
              encryptedSecurityCode:
                null === (t = this.state.data) || void 0 === t
                  ? void 0
                  : t.encryptedSecurityCode,
            },
          };
        }),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return !!this.state.isValid;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "icon", {
          get: function () {
            return Aa({ loadingContext: this.props.loadingContext })(
              this.props.brand
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "displayName", {
          get: function () {
            return this.props.name;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.render = function () {
          var e = this;
          return Qt(
            si,
            {
              i18n: this.props.i18n,
              loadingContext: this.props.loadingContext,
            },
            Qt(
              uc,
              wt(
                {
                  ref: function (t) {
                    e.componentRef = t;
                  },
                },
                this.props,
                {
                  onChange: this.setState,
                  onBalanceCheck: this.onBalanceCheck,
                  onSubmit: this.submit,
                  payButton: this.payButton,
                }
              )
            )
          );
        }),
        (t.type = "giftcard"),
        t
      );
    })(rr),
    mc = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.type = "vipps"),
        (t.defaultProps = { type: t.type, showPayButton: !0, name: "Vipps" }),
        t
      );
    })(rs),
    hc = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (t) {
          return wt(wt({}, e.prototype.formatProps.call(this, t)), {
            showImage: !1,
          });
        }),
        (t.type = "payu_IN_cashcard"),
        t
      );
    })(Li),
    fc = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (t) {
          return wt(wt({}, e.prototype.formatProps.call(this, t)), {
            showImage: !1,
          });
        }),
        (t.type = "payu_IN_nb"),
        t
      );
    })(Li),
    yc = ["AT", "CH", "DE", "NL"],
    bc = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (t) {
          return wt(wt({}, e.prototype.formatProps.call(this, t)), {
            allowedCountries: t.countryCode ? [t.countryCode] : yc,
          });
        }),
        (t.type = "ratepay"),
        t
      );
    })(di),
    vc = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (t) {
          return wt(
            {
              shouldRedirectOnMobile: !0,
              delay: 2e3,
              countdownTime: 15,
              instructions: "swish.pendingMessage",
            },
            e.prototype.formatProps.call(this, t)
          );
        }),
        (t.type = "swish"),
        t
      );
    })(Ed),
    gc = {
      isDropin: !0,
      onReady: function () {},
      onComplete: function () {},
      onCancel: function () {},
      onError: function () {},
      onSelect: function () {},
      onDisableStoredPaymentMethod: null,
      onChange: function () {},
      onSubmit: function () {},
      onAdditionalDetails: function () {},
      amount: {},
      installmentOptions: {},
      paymentMethodsConfiguration: {},
      openFirstPaymentMethod: !0,
      openFirstStoredPaymentMethod: !0,
      showStoredPaymentMethods: !0,
      showPaymentMethods: !0,
      showRemoveStoredPaymentMethodButton: !1,
      showPayButton: !0,
    },
    kc = function (e) {
      var t = e.paymentMethodComponent,
        a = e.isLoaded;
      return t && a
        ? Qt(
            "div",
            { className: "adyen-checkout__payment-method__details__content" },
            t
          )
        : null;
    },
    Cc = {
      "adyen-checkout__payment-methods-list":
        "DropinComponent-module_adyen-checkout__payment-methods-list__2T9kQ",
      "adyen-checkout__payment-method":
        "DropinComponent-module_adyen-checkout__payment-method__2ZClo",
      "adyen-checkout__payment-method__details":
        "DropinComponent-module_adyen-checkout__payment-method__details__2_jFP",
      "adyen-checkout__payment-method__image":
        "DropinComponent-module_adyen-checkout__payment-method__image__Fg2uw",
      "adyen-checkout__payment-method__image__wrapper":
        "DropinComponent-module_adyen-checkout__payment-method__image__wrapper__pTTKr",
      "adyen-checkout__payment-method--selected":
        "DropinComponent-module_adyen-checkout__payment-method--selected__1zXEA",
    },
    _c = function (e) {
      var t = e.src,
        a = e.name,
        r = e.disabled;
      return Qt(
        "span",
        {
          className: xa(
            "adyen-checkout__payment-method__image__wrapper",
            Cc["adyen-checkout__payment-method__image__wrapper"],
            {
              "adyen-checkout__payment-method__image__wrapper--disabled": !!(
                void 0 !== r && r
              ),
            }
          ),
          "aria-hidden": "true",
        },
        Qt(Jl, {
          className:
            "adyen-checkout__payment-method__image " +
            Cc["adyen-checkout__payment-method__image"],
          src: t,
          alt: a,
          "aria-label": a,
          focusable: "false",
        })
      );
    },
    Nc = function (e) {
      var t = e.id,
        a = e.open,
        r = e.onDisable,
        n = e.onCancel,
        i = er().i18n;
      return Qt(
        "div",
        {
          id: t,
          "aria-hidden": !a,
          className: xa({
            "adyen-checkout__payment-method__disable-confirmation": !0,
            "adyen-checkout__payment-method__disable-confirmation--open": a,
          }),
        },
        Qt(
          "div",
          {
            className:
              "adyen-checkout__payment-method__disable-confirmation__content",
          },
          i.get("storedPaymentMethod.disable.confirmation"),
          Qt(
            "div",
            {
              className:
                "adyen-checkout__payment-method__disable-confirmation__buttons",
            },
            Qt(
              "button",
              {
                className: xa(
                  "adyen-checkout__button",
                  "adyen-checkout__payment-method__disable-confirmation__button",
                  "adyen-checkout__payment-method__disable-confirmation__button--remove"
                ),
                disabled: !a,
                onClick: r,
              },
              i.get("storedPaymentMethod.disable.confirmButton")
            ),
            Qt(
              "button",
              {
                className: xa(
                  "adyen-checkout__button",
                  "adyen-checkout__payment-method__disable-confirmation__button",
                  "adyen-checkout__payment-method__disable-confirmation__button--cancel"
                ),
                disabled: !a,
                onClick: n,
              },
              i.get("storedPaymentMethod.disable.cancelButton")
            )
          )
        )
      );
    },
    wc = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.state = { showDisableStoredPaymentMethodConfirmation: !1 }),
          (t.isMouseDown = !1),
          (t.onFocus = function () {
            t.isMouseDown || t.props.onSelect();
          }),
          (t.onMouseDown = function () {
            t.isMouseDown = !0;
          }),
          (t.onMouseUp = function () {
            t.isMouseDown = !1;
          }),
          (t.toggleDisableConfirmation = function () {
            t.setState({
              showDisableStoredPaymentMethodConfirmation:
                !t.state.showDisableStoredPaymentMethodConfirmation,
            });
          }),
          (t.onDisableStoredPaymentMethod = function () {
            t.props.onDisableStoredPaymentMethod(t.props.paymentMethod),
              t.toggleDisableConfirmation();
          }),
          t
        );
      }
      return (
        Nt(t, e),
        (t.prototype.componentDidMount = function () {
          var e = this;
          this.props.paymentMethod.eventEmitter.on("brand", function (t) {
            e.setState({ activeBrand: t.brand });
          });
        }),
        (t.prototype.componentWillUnmount = function () {
          var e = this;
          this.props.paymentMethod.eventEmitter.off("brand", function (t) {
            e.setState({ activeBrand: t.brand });
          });
        }),
        (t.prototype.render = function (e, t) {
          var a,
            r,
            n = e.paymentMethod,
            i = e.isSelected,
            o = e.isDisabling,
            l = e.isLoaded,
            s = e.isLoading,
            d = e.onSelect,
            c = e.standalone,
            u = t.activeBrand,
            p = void 0 === u ? null : u,
            m = er().i18n;
          if (!n) return null;
          var h = xa(
              (((a = { "adyen-checkout__payment-method": !0 })[
                Cc["adyen-checkout__payment-method"]
              ] = !0),
              (a["adyen-checkout__payment-method--" + n.props.type] = !0),
              (a[
                "adyen-checkout__payment-method--" +
                  (null !== (r = n.props.fundingSource) && void 0 !== r
                    ? r
                    : "credit")
              ] = !0),
              (a["adyen-checkout__payment-method--selected"] = i),
              (a[Cc["adyen-checkout__payment-method--selected"]] = i),
              (a["adyen-checkout__payment-method--loading"] = s),
              (a["adyen-checkout__payment-method--disabling"] = o),
              (a["adyen-checkout__payment-method--confirming"] =
                this.state.showDisableStoredPaymentMethodConfirmation),
              (a["adyen-checkout__payment-method--standalone"] = c),
              (a[Cc["adyen-checkout__payment-method--loading"]] = s),
              (a[n._id] = !0),
              (a[this.props.className] = !0),
              a)
            ),
            f =
              this.props.showRemovePaymentMethodButton && n.props.oneClick && i,
            y = "remove-" + n._id,
            b = !n.props.oneClick && n.brands && n.brands.length > 0;
          return Qt(
            "li",
            {
              key: n._id,
              className: h,
              onFocus: this.onFocus,
              onClick: d,
              onMouseDown: this.onMouseDown,
              onMouseUp: this.onMouseUp,
              tabIndex: s ? -1 : 0,
            },
            Qt(
              "div",
              { className: "adyen-checkout__payment-method__header" },
              Qt(
                "div",
                { className: "adyen-checkout__payment-method__header__title" },
                Qt("span", {
                  className: xa({
                    "adyen-checkout__payment-method__radio": !0,
                    "adyen-checkout__payment-method__radio--selected": i,
                  }),
                  "aria-hidden": "true",
                }),
                Qt(_c, { name: n.props.name, src: n.icon }),
                Qt(
                  "span",
                  {
                    className: xa({
                      "adyen-checkout__payment-method__name": !0,
                      "adyen-checkout__payment-method__name--selected": i,
                    }),
                    "aria-hidden": "true",
                  },
                  n.displayName
                )
              ),
              f &&
                Qt(
                  "button",
                  {
                    type: "button",
                    className:
                      "adyen-checkout__button adyen-checkout__button--inline adyen-checkout__button--link",
                    onClick: this.toggleDisableConfirmation,
                    "aria-expanded":
                      this.state.showDisableStoredPaymentMethodConfirmation,
                    "aria-controls": y,
                  },
                  m.get("storedPaymentMethod.disable.button")
                ),
              b &&
                Qt(
                  "span",
                  { className: "adyen-checkout__payment-method__brands" },
                  n.brands.map(function (e) {
                    return Qt(_c, {
                      key: e.name,
                      name: e.name,
                      disabled: p && e.name !== p,
                      src: e.icon,
                    });
                  })
                )
            ),
            Qt(
              "div",
              {
                className:
                  "adyen-checkout__payment-method__details " +
                  Cc["adyen-checkout__payment-method__details"],
              },
              f &&
                Qt(Nc, {
                  id: y,
                  open: this.state.showDisableStoredPaymentMethodConfirmation,
                  onDisable: this.onDisableStoredPaymentMethod,
                  onCancel: this.toggleDisableConfirmation,
                }),
              Qt(kc, { paymentMethodComponent: n.render(), isLoaded: l })
            )
          );
        }),
        (t.defaultProps = {
          paymentMethod: null,
          isSelected: !1,
          isLoaded: !1,
          isLoading: !1,
          showDisableStoredPaymentMethodConfirmation: !1,
          onSelect: function () {},
        }),
        t
      );
    })(ea),
    Pc = function (e) {
      var t,
        a = e.order,
        r = e.orderStatus,
        n = e.onOrderCancel,
        i = er(),
        o = i.loadingContext,
        l = i.i18n;
      return Qt(
        "div",
        null,
        Qt(
          "ul",
          { className: "adyen-checkout__order-payment-methods-list" },
          null === (t = null == r ? void 0 : r.paymentMethods) || void 0 === t
            ? void 0
            : t.map(function (e, t) {
                return Qt(
                  "li",
                  {
                    key: e.type + "-" + t,
                    className: "adyen-checkout__order-payment-method",
                  },
                  Qt(
                    "div",
                    {
                      className: "adyen-checkout__order-payment-method__header",
                    },
                    Qt(
                      "div",
                      {
                        className:
                          "adyen-checkout__payment-method__header__title",
                      },
                      Qt(_c, {
                        name: e.type,
                        src: Aa({ loadingContext: o })(e.type),
                      }),
                      "\u2022\u2022\u2022\u2022 ",
                      e.lastFour
                    ),
                    n &&
                      Qt(
                        "button",
                        {
                          type: "button",
                          className:
                            "adyen-checkout__button adyen-checkout__button--inline adyen-checkout__button--link",
                          onClick: function () {
                            n({ order: a });
                          },
                        },
                        l.get("storedPaymentMethod.disable.button")
                      )
                  ),
                  Qt(
                    "div",
                    {
                      className:
                        "adyen-checkout__order-payment-method__details",
                    },
                    Qt(
                      "div",
                      {
                        className:
                          "adyen-checkout__order-payment-method__deducted-amount",
                      },
                      Qt(
                        "div",
                        {
                          className:
                            "adyen-checkout__order-payment-method__deducted-amount__label",
                        },
                        l.get("deductedBalance")
                      ),
                      Qt(
                        "div",
                        {
                          className:
                            "adyen-checkout__order-payment-method__deducted-amount__value",
                        },
                        l.amount(e.amount.value, e.amount.currency)
                      )
                    )
                  )
                );
              })
        ),
        r.remainingAmount &&
          Qt(
            "div",
            { className: "adyen-checkout__order-remaining-amount" },
            l.get("partialPayment.warning"),
            " ",
            Qt(
              "strong",
              null,
              l.amount(r.remainingAmount.value, r.remainingAmount.currency)
            )
          )
      );
    },
    Fc = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.onSelect = function (e) {
            return function () {
              return t.props.onSelect(e);
            };
          }),
          t
        );
      }
      return (
        Nt(t, e),
        (t.prototype.componentDidMount = function () {
          if (this.props.paymentMethods[0]) {
            var e = this.props.paymentMethods[0];
            ((this.props.openFirstStoredPaymentMethod &&
              !0 === ga(e, "props.oneClick")) ||
              this.props.openFirstPaymentMethod) &&
              this.onSelect(e)();
          }
        }),
        (t.prototype.render = function (e) {
          var t,
            a = this,
            r = e.paymentMethods,
            n = e.activePaymentMethod,
            i = e.cachedPaymentMethods,
            o = e.isLoading,
            l = xa(
              (((t = {})[Cc["adyen-checkout__payment-methods-list"]] = !0),
              (t["adyen-checkout__payment-methods-list"] = !0),
              (t["adyen-checkout__payment-methods-list--loading"] = o),
              t)
            );
          return Qt(
            Xt,
            null,
            this.props.orderStatus &&
              Qt(Pc, {
                order: this.props.order,
                orderStatus: this.props.orderStatus,
                onOrderCancel: this.props.onOrderCancel,
              }),
            Qt(
              "ul",
              { className: l },
              r.map(function (e, t, l) {
                var s = n && n._id === e._id,
                  d = e._id in i,
                  c = n && l[t + 1] && n._id === l[t + 1]._id;
                return Qt(wc, {
                  className: xa({
                    "adyen-checkout__payment-method--next-selected": c,
                  }),
                  standalone: 1 === r.length,
                  paymentMethod: e,
                  isSelected: s,
                  isDisabling: s && a.props.isDisabling,
                  isLoaded: d,
                  isLoading: o,
                  onSelect: a.onSelect(e),
                  key: e._id,
                  showRemovePaymentMethodButton:
                    a.props.showRemovePaymentMethodButton,
                  onDisableStoredPaymentMethod:
                    a.props.onDisableStoredPaymentMethod,
                });
              })
            )
          );
        }),
        (t.defaultProps = {
          paymentMethods: [],
          activePaymentMethod: null,
          cachedPaymentMethods: {},
          orderStatus: null,
          onSelect: function () {},
          onDisableStoredPaymentMethod: function () {},
          isDisabling: !1,
          isLoading: !1,
        }),
        t
      );
    })(ea),
    Dc = function (e) {
      var t = e.message,
        a = er(),
        r = a.i18n,
        n = a.loadingContext;
      return Qt(
        "div",
        { className: "adyen-checkout__status adyen-checkout__status--success" },
        Qt(Jl, {
          height: "88",
          className: "adyen-checkout__status__icon",
          src: Aa({ loadingContext: n, imageFolder: "components/" })("success"),
          alt: r.get(t || "creditCard.success"),
        }),
        Qt(
          "span",
          { className: "adyen-checkout__status__text" },
          r.get(t || "creditCard.success")
        )
      );
    },
    Sc = function (e) {
      var t = e.message,
        a = er(),
        r = a.loadingContext,
        n = a.i18n;
      return Qt(
        "div",
        { className: "adyen-checkout__status adyen-checkout__status--error" },
        Qt(Jl, {
          className: "adyen-checkout__status__icon",
          src: Aa({ loadingContext: r, imageFolder: "components/" })("error"),
          alt: n.get(t || "error.message.unknown"),
          height: "88",
        }),
        Qt(
          "span",
          { className: "adyen-checkout__status__text" },
          n.get(t || "error.message.unknown")
        )
      );
    };
  function Ac(e, t) {
    var a = {
      path: "/v1/order/status?clientKey=" + e.clientKey,
      loadingContext: e.loadingContext,
    };
    return Un(a, { orderData: t.orderData });
  }
  var xc = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (
        (t.state = {
          elements: [],
          orderStatus: null,
          isDisabling: !1,
          status: { type: "loading" },
          activePaymentMethod: null,
          cachedPaymentMethods: {},
        }),
        (t.prepareDropinData = function () {
          var e = t.props,
            a = e.order,
            r = e.clientKey,
            n = e.loadingContext,
            i = t.props.onCreateElements(),
            o = i[0],
            l = i[1],
            s = a ? Ac({ clientKey: r, loadingContext: n }, a) : null;
          Promise.all([o, l, s]).then(function (e) {
            var a = e[0],
              r = e[1],
              n = e[2];
            t.setState({ elements: St(St([], a), r), orderStatus: n }),
              t.setStatus({ type: "ready" }),
              t.props.modules.analytics &&
                t.props.modules.analytics.send({
                  containerWidth: t.base && t.base.offsetWidth,
                  paymentMethods: r.map(function (e) {
                    return e.props.type;
                  }),
                  component: "dropin",
                  flavor: "dropin",
                });
          });
        }),
        (t.setStatus = function (e) {
          t.setState({ status: e });
        }),
        (t.setActivePaymentMethod = function (e) {
          t.setState(function (t) {
            var a;
            return {
              activePaymentMethod: e,
              cachedPaymentMethods: wt(
                wt({}, t.cachedPaymentMethods),
                ((a = {}), (a[e._id] = !0), a)
              ),
            };
          });
        }),
        (t.handleOnSelectPaymentMethod = function (e) {
          var a = t.state.activePaymentMethod;
          t.setActivePaymentMethod(e),
            ((a && a._id !== e._id) || !a) && t.props.onSelect(e);
        }),
        (t.handleDisableStoredPaymentMethod = function (e) {
          t.setState({ isDisabling: !0 }),
            new Promise(function (a, r) {
              return t.props.onDisableStoredPaymentMethod(
                e.props.storedPaymentMethodId,
                a,
                r
              );
            })
              .then(function () {
                t.setState(function (t) {
                  return {
                    elements: t.elements.filter(function (t) {
                      return t._id !== e._id;
                    }),
                  };
                }),
                  t.setState({ isDisabling: !1 });
              })
              .catch(function () {
                t.setState({ isDisabling: !1 });
              });
        }),
        t
      );
    }
    return (
      Nt(t, e),
      (t.prototype.componentDidMount = function () {
        this.prepareDropinData();
      }),
      (t.prototype.componentDidUpdate = function (e, t) {
        t.status.type !== this.state.status.type &&
          this.state.activePaymentMethod &&
          this.state.activePaymentMethod.setStatus(this.state.status.type),
          "ready" === this.state.status.type &&
            "ready" !== t.status.type &&
            this.props.onReady &&
            this.props.onReady();
      }),
      (t.prototype.closeActivePaymentMethod = function () {
        this.setState({ activePaymentMethod: null });
      }),
      (t.prototype.render = function (e, t) {
        var a,
          r,
          n = t.elements,
          i = t.status,
          o = t.activePaymentMethod,
          l = t.cachedPaymentMethods,
          s = "loading" === i.type,
          d = "redirect" === i.type;
        switch (i.type) {
          case "success":
            return Qt(Dc, {
              message:
                null === (a = i.props) || void 0 === a ? void 0 : a.message,
            });
          case "error":
            return Qt(Sc, {
              message:
                null === (r = i.props) || void 0 === r ? void 0 : r.message,
            });
          case "custom":
            return i.props.component.render();
          default:
            return Qt(
              "div",
              {
                className:
                  "adyen-checkout__dropin adyen-checkout__dropin--" + i.type,
              },
              d && i.props.component && i.props.component.render(),
              s && i.props && i.props.component && i.props.component.render(),
              n &&
                !!n.length &&
                Qt(Fc, {
                  isLoading: s || d,
                  isDisabling: this.state.isDisabling,
                  paymentMethods: n,
                  activePaymentMethod: o,
                  cachedPaymentMethods: l,
                  order: this.props.order,
                  orderStatus: this.state.orderStatus,
                  onOrderCancel: this.props.onOrderCancel,
                  onSelect: this.handleOnSelectPaymentMethod,
                  openFirstPaymentMethod: this.props.openFirstPaymentMethod,
                  openFirstStoredPaymentMethod:
                    this.props.openFirstStoredPaymentMethod,
                  onDisableStoredPaymentMethod:
                    this.handleDisableStoredPaymentMethod,
                  showRemovePaymentMethodButton:
                    this.props.showRemovePaymentMethodButton,
                })
            );
        }
      }),
      t
    );
  })(ea);
  var Bc = ["androidpay", "samsungpay"],
    zc = function (e) {
      return !Bc.includes(e.constructor.type);
    },
    Tc = function (e) {
      return !!e;
    },
    Mc = function (e) {
      if (e.isAvailable) {
        var t = new Promise(function (e, t) {
          return setTimeout(t, 5e3);
        });
        return Promise.race([e.isAvailable(), t]);
      }
      return Promise.resolve(!!e);
    },
    Ic = function (e, t, a) {
      void 0 === e && (e = []);
      var r = e
          .map(function (e) {
            return a(e, t);
          })
          .filter(Tc)
          .filter(zc),
        n = r.map(Mc).map(function (e) {
          return e.catch(function (e) {
            return e;
          });
        });
      return Promise.all(n).then(function (e) {
        return r.filter(function (t, a) {
          return !0 === e[a];
        });
      });
    },
    jc = (function (e) {
      function t(t) {
        var a = e.call(this, t) || this;
        return (
          (a.dropinRef = null),
          (a.handleSubmit = function () {
            var e = a.activePaymentMethod,
              t = e.data,
              r = e.isValid;
            return r
              ? a.props.onSubmit({ data: t, isValid: r }, a)
              : (a.showValidation(), !1);
          }),
          (a.handleCreate = function () {
            var e = a.props,
              t = e.paymentMethods,
              r = e.storedPaymentMethods,
              n = e.showStoredPaymentMethods,
              i = e.showPaymentMethods,
              o = e._parentInstance,
              l = (function (e) {
                return {
                  elementRef: e.elementRef,
                  showPayButton: e.showPayButton,
                  isDropin: !0,
                };
              })(wt(wt({}, a.props), { elementRef: a.elementRef }));
            return [
              n
                ? (function (e, t, a) {
                    return (
                      void 0 === e && (e = []),
                      Ic(e, wt(wt({}, t), { oneClick: !0 }), a)
                    );
                  })(r, l, null == o ? void 0 : o.create)
                : [],
              i ? Ic(t, l, null == o ? void 0 : o.create) : [],
            ];
          }),
          (a.submit = a.submit.bind(a)),
          a
        );
      }
      return (
        Nt(t, e),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return (
              !!this.dropinRef &&
              !!this.dropinRef.state.activePaymentMethod &&
              !!this.dropinRef.state.activePaymentMethod.isValid
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.showValidation = function () {
          return (
            this.dropinRef.state.activePaymentMethod &&
              this.dropinRef.state.activePaymentMethod.showValidation(),
            this
          );
        }),
        (t.prototype.setStatus = function (e, t) {
          var a;
          return (
            void 0 === t && (t = {}),
            null === (a = this.dropinRef) ||
              void 0 === a ||
              a.setStatus({ type: e, props: t }),
            this
          );
        }),
        Object.defineProperty(t.prototype, "activePaymentMethod", {
          get: function () {
            var e, t;
            return (null === (e = this.dropinRef) || void 0 === e
              ? void 0
              : e.state) ||
              (null === (t = this.dropinRef) || void 0 === t
                ? void 0
                : t.state.activePaymentMethod)
              ? this.dropinRef.state.activePaymentMethod
              : null;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "data", {
          get: function () {
            return this.activePaymentMethod
              ? this.dropinRef.state.activePaymentMethod.data
              : null;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.submit = function () {
          var e = this;
          if (!this.activePaymentMethod)
            throw new Error("No active payment method.");
          this.activePaymentMethod
            .startPayment()
            .then(this.handleSubmit)
            .catch(function (t) {
              return e.props.onError(t);
            });
        }),
        (t.prototype.handleAction = function (e, t) {
          var a,
            r = this;
          if ((void 0 === t && (t = {}), !e || !e.type))
            throw new Error("Invalid Action");
          if (
            null === (a = this.activePaymentMethod) || void 0 === a
              ? void 0
              : a.updateWithAction
          )
            return this.activePaymentMethod.updateWithAction(e);
          var n = this.props._parentInstance.createFromAction(
            e,
            wt(wt({}, t), {
              elementRef: this.elementRef,
              onAdditionalDetails: function (e) {
                return r.props.onAdditionalDetails(e, r.elementRef);
              },
              isDropin: !0,
            })
          );
          return n
            ? this.setStatus(n.props.statusType, { component: n })
            : null;
        }),
        (t.prototype.closeActivePaymentMethod = function () {
          this.dropinRef.closeActivePaymentMethod();
        }),
        (t.prototype.render = function () {
          var e = this;
          return Qt(
            si,
            {
              i18n: this.props.i18n,
              loadingContext: this.props.loadingContext,
            },
            Qt(
              xc,
              wt({}, this.props, {
                onChange: this.setState,
                onSubmit: this.handleSubmit,
                elementRef: this.elementRef,
                onCreateElements: this.handleCreate,
                ref: function (t) {
                  e.dropinRef = t;
                },
              })
            )
          );
        }),
        (t.type = "dropin"),
        (t.defaultProps = gc),
        t
      );
    })(rr),
    Oc = "AchInput-module_sf-input__wrapper__1V7mk",
    Ec = "AchInput-module_adyen-checkout__input__1SeSl",
    Rc = function (e) {
      var t,
        a = e.id,
        r = e.dataInfo,
        n = e.className,
        i = void 0 === n ? "" : n,
        o = e.label,
        l = e.focused,
        s = e.filled,
        d = e.errorMessage,
        c = void 0 === d ? "" : d,
        u = e.isValid,
        p = void 0 !== u && u,
        m = e.onFocusField,
        h = "encrypted" + (a.charAt(0).toUpperCase() + a.slice(1));
      return Qt(
        Cr,
        {
          label: o,
          focused: l,
          filled: s,
          classNameModifiers: [a],
          onFocusField: function () {
            return m(h);
          },
          errorMessage: c,
          isValid: p,
          className: i,
        },
        Qt("span", {
          "data-cse": h,
          "data-info": r,
          className: xa(
            ((t = {
              "adyen-checkout__input": !0,
              "adyen-checkout__input--large": !0,
            }),
            (t[Ec] = !0),
            (t["adyen-checkout__input--error"] = c.length),
            (t["adyen-checkout__input--focus"] = l),
            (t["adyen-checkout__input--valid"] = p),
            t)
          ),
        })
      );
    },
    Lc = function (e) {
      var t = e.focusedElement,
        a = e.onFocusField,
        r = e.errors,
        n = e.valid,
        i = er().i18n;
      return Qt(
        "div",
        {
          className:
            "adyen-checkout__ach-sf__form adyen-checkout__field-wrapper",
        },
        Qt(Rc, {
          id: "bankAccountNumber",
          focused: "encryptedBankAccountNumber" === t,
          isValid: !!n.encryptedBankAccountNumber,
          label: i.get("ach.accountNumberField.title"),
          onFocusField: a,
          filled:
            !!r.encryptedBankAccountNumber || !!n.encryptedBankAccountNumber,
          errorMessage:
            !!r.encryptedBankAccountNumber &&
            i.get("ach.accountNumberField.invalid"),
          dataInfo: '{"length":"4-17", "maskInterval": 4}',
          className: "adyen-checkout__field--50",
        }),
        Qt(Rc, {
          id: "bankLocationId",
          focused: "encryptedBankLocationId" === t,
          isValid: !!n.encryptedBankLocationId,
          label: i.get("ach.accountLocationField.title"),
          onFocusField: a,
          filled: !!r.encryptedBankLocationId || !!n.encryptedBankLocationId,
          errorMessage:
            !!r.encryptedBankLocationId &&
            i.get("ach.accountLocationField.invalid"),
          dataInfo: '{"length":9}',
          className: "adyen-checkout__field--50",
        })
      );
    },
    Vc = { base: { caretColor: "#0066FF" } };
  function Uc(e, t) {
    return (
      void 0 === t && (t = !1),
      !t || (!!e && "string" == typeof e && e.trim().length > 0)
    );
  }
  function Kc(e) {
    var t = this,
      a = er().i18n,
      r = e.hasHolderName && (e.holderName || e.data.holderName),
      n = La({}),
      i = n[0],
      o = n[1],
      l = La(wt({}, e.holderNameRequired && { holderName: r })),
      s = l[0],
      d = l[1],
      c = La(
        wt(
          {},
          e.hasHolderName && { holderName: e.holderName || e.data.holderName }
        )
      ),
      u = c[0],
      p = c[1],
      m = La(e.billingAddressRequired ? e.data.billingAddress : null),
      h = m[0],
      f = m[1],
      y = La(!1),
      b = y[0],
      v = y[1],
      g = La(""),
      k = g[0],
      C = g[1],
      _ = function (e) {
        f(wt(wt({}, h), e.data)),
          d(wt(wt({}, s), { billingAddress: e.isValid }));
      },
      N = function (t) {
        var a = t.target.value;
        p(wt(wt({}, u), { holderName: a })),
          o(wt(wt({}, i), { holderName: !!e.holderNameRequired && !Uc(a) })),
          d(
            wt(wt({}, s), {
              holderName: !e.holderNameRequired || Uc(a, e.holderNameRequired),
            })
          );
      },
      w = Ha(null),
      P = Ha(null),
      F = La("ready"),
      D = F[0],
      S = F[1];
    return (
      (this.setStatus = function (e) {
        S(e);
      }),
      (this.showValidation = function () {
        w.current.showValidation(),
          e.holderNameRequired &&
            !s.holderName &&
            o(wt(wt({}, i), { holderName: !0 })),
          P.current && P.current.showValidation();
      }),
      Ua(function () {
        return (
          (t.setFocusOn = w.current.setFocusOn),
          (t.updateStyles = w.current.updateStyles),
          function () {
            w.current.destroy();
          }
        );
      }, []),
      Ua(
        function () {
          var t = Uc(u.holderName, e.holderNameRequired),
            a = b,
            r = !e.billingAddressRequired || Boolean(s.billingAddress),
            n = a && t && r;
          e.onChange({ data: u, isValid: n, billingAddress: h });
        },
        [u, s, i]
      ),
      Qt(
        "div",
        { className: "adyen-checkout__ach" },
        Qt(
          Ml,
          wt({ ref: w }, e, {
            styles: wt(wt({}, Vc), e.styles),
            onChange: function (t) {
              var a = t,
                r = a.autoCompleteName ? a.autoCompleteName : u.holderName;
              p(wt(wt(wt({}, u), a.data), { holderName: r })),
                o(wt(wt({}, i), a.errors)),
                d(
                  wt(wt(wt({}, s), a.valid), {
                    holderName:
                      !e.holderNameRequired || Uc(r, e.holderNameRequired),
                  })
                ),
                v(a.isSfpValid);
            },
            onFocus: function (t) {
              var a = !0 === t.focus;
              C(t.currentFocusObject), a ? e.onFocus(t) : e.onBlur(t);
            },
            render: function (t, r) {
              var n = t.setRootNode,
                o = t.setFocusOn;
              return Qt(
                "div",
                { ref: n, className: "adyen-checkout__ach-input " + Oc },
                Qt(
                  No,
                  { status: r.status },
                  Qt(
                    "div",
                    {
                      className: xa([
                        "adyen-checkout__fieldset",
                        "adyen-checkout__fieldset--ach",
                      ]),
                    },
                    Qt(
                      "div",
                      { className: "adyen-checkout__fieldset__title" },
                      a.get("ach.bankAccount")
                    ),
                    e.hasHolderName &&
                      Qt(
                        Cr,
                        {
                          label: a.get("ach.accountHolderNameField.title"),
                          className: "adyen-checkout__pm__holderName",
                          errorMessage:
                            !!i.holderName &&
                            a.get("ach.accountHolderNameField.invalid"),
                          isValid: !!s.holderName,
                        },
                        qr("text", {
                          className:
                            "adyen-checkout__pm__holderName__input " + Ec,
                          placeholder:
                            e.placeholders.holderName ||
                            a.get("ach.accountHolderNameField.placeholder"),
                          value: u.holderName,
                          required: e.holderNameRequired,
                          onInput: N,
                        })
                      ),
                    Qt(Lc, {
                      focusedElement: k,
                      onFocusField: o,
                      errors: r.errors,
                      valid: r.valid,
                    })
                  ),
                  e.billingAddressRequired &&
                    Qt(ri, {
                      label: "billingAddress",
                      data: h,
                      onChange: _,
                      allowedCountries: e.billingAddressAllowedCountries,
                      requiredFields: e.billingAddressRequiredFields,
                      ref: P,
                    })
                )
              );
            },
          })
        ),
        e.showPayButton &&
          e.payButton({ status: D, label: a.get("confirmPurchase") })
      )
    );
  }
  Kc.defaultProps = {
    details: [],
    type: "ach",
    hasHolderName: !0,
    holderNameRequired: !0,
    billingAddressRequired: !0,
    billingAddressAllowedCountries: ["US", "PR"],
    onLoad: function () {},
    onConfigSuccess: function () {},
    onAllValid: function () {},
    onFieldValid: function () {},
    onBrand: function () {},
    onError: function () {},
    onBinValue: function () {},
    onBlur: function () {},
    onFocus: function () {},
    onChange: function () {},
    holderName: "",
    data: { holderName: "", billingAddress: {} },
    styles: {},
    placeholders: {},
  };
  var Hc = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (e) {
          var t;
          return wt(wt({}, e), {
            holderNameRequired:
              null !== (t = e.hasHolderName) && void 0 !== t
                ? t
                : e.holderNameRequired,
          });
        }),
        (t.prototype.formatData = function () {
          var e,
            a = wt(wt({ type: t.type }, this.state.data), {
              ownerName:
                null === (e = this.state.data) || void 0 === e
                  ? void 0
                  : e.holderName,
            });
          return (
            delete a.holderName,
            wt(
              { paymentMethod: a },
              this.state.billingAddress && {
                billingAddress: this.state.billingAddress,
              }
            )
          );
        }),
        (t.prototype.updateStyles = function (e) {
          return (
            this.componentRef &&
              this.componentRef.updateStyles &&
              this.componentRef.updateStyles(e),
            this
          );
        }),
        (t.prototype.setFocusOn = function (e) {
          return (
            this.componentRef &&
              this.componentRef.setFocusOn &&
              this.componentRef.setFocusOn(e),
            this
          );
        }),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return !!this.state.isValid;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "displayName", {
          get: function () {
            return this.props.name;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.render = function () {
          var e = this;
          return Qt(
            si,
            {
              i18n: this.props.i18n,
              loadingContext: this.props.loadingContext,
            },
            Qt(
              Kc,
              wt(
                {
                  ref: function (t) {
                    e.componentRef = t;
                  },
                },
                this.props,
                {
                  onChange: this.setState,
                  onSubmit: this.submit,
                  payButton: this.payButton,
                }
              )
            )
          );
        }),
        (t.type = "ach"),
        t
      );
    })(rr),
    qc = /^[+]*[0-9]{1,4}[\s/0-9]*$/;
  function Gc(e) {
    var t = er().i18n,
      a = en({
        schema: ["telephoneNumber"],
        defaultData: e.data,
        rules: {
          telephoneNumber: {
            validate: function (e) {
              return qc.test(e) && e.length >= 7;
            },
            errorMessage: "mobileNumber.invalid",
            modes: ["blur"],
          },
        },
        formatters: {
          telephoneNumber: function (e) {
            return e.replace(/[^0-9+\s]/g, "");
          },
        },
      }),
      r = a.handleChangeFor,
      n = a.triggerValidation,
      i = a.data,
      o = a.valid,
      l = a.errors,
      s = a.isValid,
      d = La("ready"),
      c = d[0],
      u = d[1];
    return (
      (this.setStatus = u),
      (this.showValidation = n),
      Ua(
        function () {
          e.onChange({ data: i, valid: o, errors: l, isValid: s });
        },
        [i, o, l, s]
      ),
      Qt(
        "div",
        { className: "adyen-checkout__mb-way" },
        Qt(
          Cr,
          {
            errorMessage: !!l.telephoneNumber && t.get("mobileNumber.invalid"),
            label: t.get("mobileNumber"),
            className: xa("adyen-checkout__input--phone-number"),
            isValid: o.telephoneNumber,
          },
          qr("tel", {
            value: i.telephoneNumber,
            className: "adyen-checkout__pm__phoneNumber__input",
            placeholder: e.placeholders.telephoneNumber,
            required: !0,
            autoCorrect: "off",
            onChange: r("telephoneNumber", "blur"),
            onInput: r("telephoneNumber", "input"),
          })
        ),
        e.showPayButton &&
          e.payButton({ status: c, label: t.get("confirmPurchase") })
      )
    );
  }
  Gc.defaultProps = { onChange: function () {} };
  var Yc = 2e3,
    Wc = 15,
    Jc = 6e4,
    Zc = 1e4,
    Qc = "mbway",
    $c = "mbway.confirmPayment",
    Xc = "await.waitForConfirmation",
    eu = !1;
  function tu(e) {
    var t = this,
      a = er(),
      r = a.i18n,
      n = a.loadingContext,
      i = La(!1),
      o = i[0],
      l = i[1],
      s = La(!1),
      d = s[0],
      c = s[1],
      u = La(!0),
      p = u[0],
      m = u[1],
      h = La(e.delay),
      f = h[0],
      y = h[1],
      b = La(100),
      v = b[0],
      g = b[1],
      k = La(0),
      C = k[0],
      _ = k[1],
      N = La(!1),
      w = N[0],
      P = N[1],
      F = La(null),
      D = F[0],
      S = F[1],
      A = function () {
        Md(e.paymentData, e.clientKey, n)
          .then(jd)
          .catch(function (e) {
            var a = e.message,
              r = Pt(e, ["message"]);
            return {
              type: "network-error",
              props: wt(wt({}, a && { message: t.props.i18n.get(a) }), r),
            };
          })
          .then(function (a) {
            switch (a.type) {
              case "success":
                !(function (a) {
                  l(!0);
                  var r = {
                    data: {
                      details: { payload: a.props.payload },
                      paymentData: e.paymentData,
                    },
                  };
                  e.onComplete(r, t);
                })(a);
                break;
              case "error":
                !(function (a) {
                  c(!0);
                  var r = {
                    data: {
                      details: { payload: a.props.payload },
                      paymentData: e.paymentData,
                    },
                  };
                  e.onComplete(r, t);
                })(a);
                break;
              default:
                m(!1);
            }
          });
      };
    Ua(function () {
      var a = e.shouldRedirectOnMobile,
        r = e.url,
        n =
          window.matchMedia("(max-width: 768px)").matches &&
          /Android|iPhone|iPod/.test(navigator.userAgent);
      return (
        a && r && n ? t.redirectToApp(r, A) : A(),
        function () {
          clearTimeout(D);
        }
      );
    }, []),
      Ua(
        function () {
          if (d) return clearTimeout(D);
          if (o) return clearTimeout(D);
          if (!p) {
            S(
              setTimeout(function () {
                A();
                var t = C + f;
                _(t),
                  t >= e.throttleTime && !w && (y(e.throttleInterval), P(!0));
              }, f)
            );
          }
        },
        [p, C, d, o]
      );
    var x = function (e, t) {
      return Qt(
        "div",
        { className: "adyen-checkout__await adyen-checkout__await--result" },
        Qt("img", {
          className:
            "adyen-checkout__await__icon adyen-checkout__await__icon--result",
          src: Aa({ loadingContext: n, imageFolder: "components/" })(e),
          alt: r.get(t),
        }),
        Qt(
          "div",
          {
            className:
              "adyen-checkout__await__subtitle adyen-checkout__await__subtitle--result",
          },
          r.get(t)
        )
      );
    };
    if (d) return x("error", "error.subtitle.payment");
    if (o) return x("success", "creditCard.success");
    if (p)
      return Qt(
        "div",
        { className: "adyen-checkout__await" },
        e.brandLogo &&
          Qt("img", {
            src: e.brandLogo,
            alt: e.type,
            className: "adyen-checkout__await__brand-logo",
          }),
        Qt(Ba, { inline: !1, size: "large" })
      );
    var B = r.get("wechatpay.timetopay").split("%@");
    return Qt(
      "div",
      {
        className: xa(
          "adyen-checkout__await",
          "adyen-checkout__await--" + e.type,
          e.classNameModifiers.map(function (e) {
            return "adyen-checkout__await--" + e;
          })
        ),
      },
      e.brandLogo &&
        Qt("img", {
          src: e.brandLogo,
          alt: e.type,
          className: "adyen-checkout__await__brand-logo",
        }),
      Qt(
        "div",
        { className: "adyen-checkout__await__subtitle" },
        e.messageText
      ),
      Qt(
        "div",
        { className: "adyen-checkout__await__indicator-holder" },
        Qt(
          "div",
          { className: "adyen-checkout__await__indicator-spinner" },
          Qt(Ba, { inline: !1, size: "medium" })
        ),
        Qt(
          "div",
          { className: "adyen-checkout__await__indicator-text" },
          e.awaitText
        )
      ),
      e.showCountdownTimer &&
        Qt(
          "div",
          { className: "adyen-checkout__await__countdown-holder" },
          Qt(
            "div",
            { className: "adyen-checkout__await__progress" },
            Qt("span", {
              className: "adyen-checkout__await__percentage",
              style: { width: v + "%" },
            })
          ),
          Qt(
            "div",
            { className: "adyen-checkout__await__countdown" },
            B[0],
            "\xa0",
            Qt(Td, {
              minutesFromNow: e.countdownTime,
              onTick: function (e) {
                g(e.percentage);
              },
              onCompleted: function () {
                c(!0), clearTimeout(D);
                e.onError(
                  { type: "error", props: { errorMessage: "Payment Expired" } },
                  t
                );
              },
            }),
            "\xa0",
            B[1]
          )
        ),
      e.url &&
        Qt(
          "div",
          { className: "adyen-checkout__await__app-link" },
          Qt(
            "span",
            { className: "adyen-checkout__await__separator__label" },
            r.get("or")
          ),
          Qt(tr, {
            classNameModifiers: ["await"],
            onClick: function () {
              return (
                (a = e.url),
                void 0 === r && (r = function () {}),
                setTimeout(function () {
                  var a = e.type + " App was not found";
                  e.onError(a, t), r();
                }, 25),
                void window.location.assign(a)
              );
              var a, r;
            },
            label: r.get("openApp"),
          })
        )
    );
  }
  tu.defaultProps = {
    countdownTime: 15,
    onError: function () {},
    onComplete: function () {},
    throttleTime: 6e4,
    throttleInterval: 1e4,
    showCountdownTimer: !0,
    classNameModifiers: [],
    shouldRedirectOnMobile: !1,
    url: null,
  };
  var au = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return (
      Nt(t, e),
      (t.prototype.formatProps = function (e) {
        var t = e.data,
          a = void 0 === t ? {} : t,
          r = e.placeholders,
          n = void 0 === r ? {} : r;
        return wt(wt({}, e), {
          data: { telephoneNumber: a.telephoneNumber || a.phoneNumber },
          placeholders: {
            telephoneNumber:
              n.telephoneNumber || n.phoneNumber || "+351 932 123 456",
          },
        });
      }),
      (t.prototype.formatData = function () {
        var e;
        return {
          paymentMethod: wt(
            { type: t.type },
            (null === (e = this.state.data) || void 0 === e
              ? void 0
              : e.telephoneNumber) && {
              telephoneNumber: this.state.data.telephoneNumber,
            }
          ),
        };
      }),
      Object.defineProperty(t.prototype, "isValid", {
        get: function () {
          return !!this.state.isValid;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "displayName", {
        get: function () {
          return this.props.name;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.render = function () {
        var e = this;
        return this.props.paymentData
          ? Qt(
              si,
              {
                i18n: this.props.i18n,
                loadingContext: this.props.loadingContext,
              },
              Qt(tu, {
                ref: function (t) {
                  e.componentRef = t;
                },
                clientKey: this.props.clientKey,
                paymentData: this.props.paymentData,
                onError: this.props.onError,
                onComplete: this.onComplete,
                brandLogo: this.icon,
                type: Qc,
                messageText: this.props.i18n.get($c),
                awaitText: this.props.i18n.get(Xc),
                showCountdownTimer: eu,
                delay: Yc,
                countdownTime: Wc,
                throttleTime: Jc,
                throttleInterval: Zc,
              })
            )
          : Qt(
              si,
              {
                i18n: this.props.i18n,
                loadingContext: this.props.loadingContext,
              },
              Qt(
                Gc,
                wt(
                  {
                    ref: function (t) {
                      e.componentRef = t;
                    },
                  },
                  this.props,
                  {
                    onChange: this.setState,
                    onSubmit: this.submit,
                    payButton: this.payButton,
                  }
                )
              )
            );
      }),
      (t.type = "mbway"),
      t
    );
  })(rr);
  function ru(e) {
    var t = this,
      a = er(),
      r = a.i18n,
      n = a.loadingContext,
      i = en({
        schema: ["blikCode"],
        rules: {
          blikCode: {
            validate: function (e) {
              return 6 === (null == e ? void 0 : e.length);
            },
            errorMessage: "blik.invalid",
            modes: ["blur"],
          },
        },
      }),
      o = i.handleChangeFor,
      l = i.triggerValidation,
      s = i.data,
      d = i.valid,
      c = i.errors,
      u = i.isValid;
    Ua(
      function () {
        e.onChange({ data: s, errors: c, valid: d, isValid: u }, t);
      },
      [s, d, c, u]
    );
    var p = La("ready"),
      m = p[0],
      h = p[1];
    return (
      (this.setStatus = h),
      (this.showValidation = l),
      Qt(
        "div",
        { className: "adyen-checkout__blik" },
        Qt(
          "p",
          { className: "adyen-checkout__blik__helper" },
          r.get("blik.help")
        ),
        Qt(
          Cr,
          {
            errorMessage: !!c.blikCode && r.get(c.blikCode.errorMessage),
            label: r.get("blik.code"),
            classNameModifiers: ["blikCode", "50"],
            isValid: d.blikCode,
          },
          qr("text", {
            value: s.blikCode,
            name: "blikCode",
            spellcheck: !1,
            required: !0,
            autocorrect: "off",
            onInput: o("blikCode", "input"),
            onChange: o("blikCode", "blur"),
            placeholder: "123456",
            maxLength: 6,
          })
        ),
        e.showPayButton &&
          e.payButton({
            status: m,
            icon: Aa({ loadingContext: n, imageFolder: "components/" })("lock"),
          })
      )
    );
  }
  ru.defaultProps = { data: { blikCode: "" } };
  var nu = 2e3,
    iu = 15,
    ou = 6e4,
    lu = 1e4,
    su = "blik",
    du = "blik.confirmPayment",
    cu = "await.waitForConfirmation",
    uu = !1,
    pu = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatData = function () {
          var e = !!this.props.storedPaymentMethodId;
          return {
            paymentMethod: wt(
              wt(
                { type: t.type },
                !e && { blikCode: this.state.data.blikCode }
              ),
              e && { storedPaymentMethodId: this.props.storedPaymentMethodId }
            ),
          };
        }),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return !!this.props.storedPaymentMethodId || !!this.state.isValid;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.render = function () {
          var e = this;
          return this.props.paymentData
            ? Qt(
                si,
                {
                  i18n: this.props.i18n,
                  loadingContext: this.props.loadingContext,
                },
                Qt(tu, {
                  ref: function (t) {
                    e.componentRef = t;
                  },
                  clientKey: this.props.clientKey,
                  paymentData: this.props.paymentData,
                  onError: this.props.onError,
                  onComplete: this.onComplete,
                  brandLogo: this.icon,
                  type: su,
                  messageText: this.props.i18n.get(du),
                  awaitText: this.props.i18n.get(cu),
                  showCountdownTimer: uu,
                  delay: nu,
                  countdownTime: iu,
                  throttleTime: ou,
                  throttleInterval: lu,
                })
              )
            : Qt(
                si,
                {
                  i18n: this.props.i18n,
                  loadingContext: this.props.loadingContext,
                },
                this.props.storedPaymentMethodId
                  ? Qt(as, {
                      name: this.displayName,
                      amount: this.props.amount,
                      payButton: this.payButton,
                      onSubmit: this.submit,
                      ref: function (t) {
                        e.componentRef = t;
                      },
                    })
                  : Qt(
                      ru,
                      wt(
                        {
                          ref: function (t) {
                            e.componentRef = t;
                          },
                        },
                        this.props,
                        {
                          onChange: this.setState,
                          onSubmit: this.submit,
                          payButton: this.payButton,
                        }
                      )
                    )
              );
        }),
        (t.type = "blik"),
        t
      );
    })(rr);
  function mu(e) {
    var t = e.reference,
      a = e.totalAmount,
      r = e.paymentMethodType,
      n = er(),
      i = n.loadingContext,
      o = n.i18n;
    return Qt(ks, {
      paymentMethodType: r,
      introduction: o.get("bankTransfer.instructions"),
      imageUrl: Aa({ loadingContext: i })(r),
      amount: a && o.amount(a.value, a.currency),
      voucherDetails: [
        { label: o.get("bankTransfer.beneficiary"), value: e.beneficiary },
        { label: o.get("bankTransfer.iban"), value: e.iban },
        { label: o.get("bankTransfer.bic"), value: e.bic },
        { label: o.get("bankTransfer.reference"), value: t },
      ],
    });
  }
  function hu(e) {
    var t = er().i18n,
      a = La(!1),
      r = a[0],
      n = a[1],
      i = en({ schema: [], defaultData: e.data }),
      o = i.handleChangeFor,
      l = i.triggerValidation,
      s = i.data,
      d = i.valid,
      c = i.errors,
      u = i.isValid,
      p = i.setSchema;
    return (
      Ua(
        function () {
          p(r ? ["shopperEmail"] : []);
        },
        [r]
      ),
      (this.showValidation = l),
      Ua(
        function () {
          e.onChange({ data: s, errors: c, valid: d, isValid: u });
        },
        [s, d, c, r, u]
      ),
      Qt(
        "div",
        { className: "adyen-checkout__bankTransfer" },
        Qt(
          "p",
          { className: "adyen-checkout__bankTransfer__introduction" },
          t.get("bankTransfer.introduction")
        ),
        Qt(Xd, {
          classNames: "adyen-checkout__bankTransfer__emailField",
          value: s.shopperEmail,
          errors: c.shopperEmail,
          onToggle: function () {
            return n(!r);
          },
          onInput: o("shopperEmail", "input"),
          onChange: o("shopperEmail", "blur"),
        })
      )
    );
  }
  var fu = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.state = { isValid: !t.props.showEmailAddress, data: {} }),
          (t.handleRef = function (e) {
            t.componentRef = e;
          }),
          t
        );
      }
      return (
        Nt(t, e),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return !!this.state.isValid;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.formatData = function () {
          var e = this.state.data.shopperEmail;
          return wt(
            { paymentMethod: { type: t.type } },
            e && { shopperEmail: e }
          );
        }),
        (t.prototype.render = function () {
          return this.props.reference
            ? Qt(
                si,
                {
                  i18n: this.props.i18n,
                  loadingContext: this.props.loadingContext,
                },
                Qt(mu, wt({ ref: this.handleRef }, this.props))
              )
            : this.props.showPayButton
            ? Qt(
                si,
                {
                  i18n: this.props.i18n,
                  loadingContext: this.props.loadingContext,
                },
                Qt(
                  hu,
                  wt({ ref: this.handleRef }, this.props, {
                    onChange: this.setState,
                  })
                ),
                Qt(
                  as,
                  wt({}, this.props, {
                    name: this.displayName,
                    onSubmit: this.submit,
                    payButton: this.payButton,
                  })
                )
              )
            : null;
        }),
        (t.type = "bankTransfer_IBAN"),
        (t.defaultProps = { showPayButton: !0, showEmailAddress: !0 }),
        t
      );
    })(rr),
    yu = ["CA", "US"],
    bu = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (t) {
          return wt(wt({}, e.prototype.formatProps.call(this, t)), {
            allowedCountries: yu,
            personalDetailsRequiredFields: [
              "firstName",
              "lastName",
              "telephoneNumber",
              "shopperEmail",
            ],
          });
        }),
        (t.type = "affirm"),
        t
      );
    })(di),
    vu = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Nt(t, e),
        (t.prototype.formatProps = function (t) {
          return wt(
            {
              delay: 2e3,
              countdownTime: 15,
              copyBtn: !0,
              introduction: "pix.instructions",
            },
            e.prototype.formatProps.call(this, t)
          );
        }),
        (t.type = "pix"),
        t
      );
    })(Ed),
    gu = /^(\d){1,8}$/,
    ku = /^(\d){6}$/,
    Cu = /[^0-9]/g,
    _u = {
      bankAccountNumber: {
        modes: ["blur", "input"],
        validate: function (e) {
          return !!e && gu.test(e);
        },
      },
      bankLocationId: [
        {
          modes: ["input"],
          validate: function (e) {
            return !!e && /^(\d){1,6}$/.test(e);
          },
        },
        {
          modes: ["blur"],
          validate: function (e) {
            return !!e && ku.test(e);
          },
        },
      ],
      amountConsentCheckbox: {
        modes: ["blur"],
        validate: function (e) {
          return !!e;
        },
      },
      accountConsentCheckbox: {
        modes: ["blur"],
        validate: function (e) {
          return !!e;
        },
      },
      default: {
        modes: ["blur"],
        validate: function (e) {
          return !!e && e.length > 0;
        },
      },
    },
    Nu = {
      bankAccountNumber: function (e) {
        return e.replace(Cu, "");
      },
      bankLocationId: function (e) {
        return e.replace(Cu, "");
      },
    },
    wu = "enter-data",
    Pu = "confirm-data";
  function Fu(e) {
    var t,
      a,
      r = this,
      n = er().i18n,
      i = en({
        schema: [
          "holderName",
          "bankAccountNumber",
          "bankLocationId",
          "shopperEmail",
          "amountConsentCheckbox",
          "accountConsentCheckbox",
        ],
        defaultData: e.data,
        formatters: Nu,
        rules: _u,
      }),
      o = i.handleChangeFor,
      l = i.triggerValidation,
      s = i.data,
      d = i.valid,
      c = i.errors,
      u = i.isValid,
      p = La(wu),
      m = p[0],
      h = p[1];
    (this.setStatus = h), (this.showValidation = l);
    return (
      Ua(
        function () {
          e.onChange({ data: s, valid: d, errors: c, isValid: u });
        },
        [s, d, c, u]
      ),
      Qt(
        "div",
        {
          className: xa({
            "adyen-checkout__bacs": !0,
            "adyen-checkout__bacs--confirm": m === Pu || "loading" === m,
          }),
        },
        m == Pu &&
          Qt(
            "div",
            {
              className: xa({
                "adyen-checkout__bacs--edit": !0,
                "adyen-checkout__bacs--edit-dropin": e.isDropin,
              }),
            },
            qr("text", {
              name: "bacsEdit",
              className: "adyen-checkout__bacs--edit-button",
              value: n.get("edit"),
              "aria-label": n.get("edit"),
              readonly: !0,
              onClick: function () {
                return r.setStatus(wu);
              },
            })
          ),
        Qt(
          Cr,
          {
            className: xa({
              "adyen-checkout__bacs--holder-name": !0,
              "adyen-checkout__field--inactive": m === Pu || "loading" === m,
            }),
            label: n.get("bacs.accountHolderName"),
            errorMessage:
              !!c.holderName && n.get("bacs.accountHolderName.invalid"),
            isValid: d.holderName,
          },
          qr("text", {
            name: "bacs.accountHolderName",
            className: "adyen-checkout__bacs-input--holder-name",
            placeholder: e.placeholders.holderName,
            value: s.holderName,
            "aria-invalid": !d.holderName,
            "aria-label": n.get("bacs.accountHolderName"),
            "aria-required": "true",
            required: !0,
            readonly: m === Pu || "loading" === m,
            autocorrect: "off",
            onChange: o("holderName", "blur"),
            onInput: o("holderName", "input"),
          })
        ),
        Qt(
          "div",
          {
            className:
              "adyen-checkout__bacs__num-id adyen-checkout__field-wrapper",
          },
          Qt(
            Cr,
            {
              errorMessage:
                !!c.bankAccountNumber && n.get("bacs.accountNumber.invalid"),
              label: n.get("bacs.accountNumber"),
              className: xa({
                "adyen-checkout__bacs--bank-account-number": !0,
                "adyen-checkout__field--inactive": m === Pu || "loading" === m,
              }),
              classNameModifiers: ["col-70"],
              isValid: d.bankAccountNumber,
            },
            qr("text", {
              value: s.bankAccountNumber,
              className: "adyen-checkout__bacs-input--bank-account-number",
              placeholder: e.placeholders.bankAccountNumber,
              "aria-invalid": !d.bankAccountNumber,
              "aria-label": n.get("bacs.accountNumber"),
              "aria-required": "true",
              required: !0,
              readonly: m === Pu || "loading" === m,
              autocorrect: "off",
              onChange: o("bankAccountNumber", "blur"),
              onInput: o("bankAccountNumber", "input"),
            })
          ),
          Qt(
            Cr,
            {
              errorMessage:
                !!c.bankLocationId && n.get("bacs.bankLocationId.invalid"),
              label: n.get("bacs.bankLocationId"),
              className: xa({
                "adyen-checkout__bacs--bank-location-id": !0,
                "adyen-checkout__field--inactive": m === Pu || "loading" === m,
              }),
              classNameModifiers: ["col-30"],
              isValid: d.bankLocationId,
            },
            qr("text", {
              value: s.bankLocationId,
              className: "adyen-checkout__bacs-input--bank-location-id",
              placeholder: e.placeholders.bankLocationId,
              "aria-invalid": !d.bankLocationId,
              "aria-label": n.get("bacs.bankLocationId"),
              "aria-required": "true",
              required: !0,
              readonly: m === Pu || "loading" === m,
              autocorrect: "off",
              onChange: o("bankLocationId", "blur"),
              onInput: o("bankLocationId", "input"),
            })
          )
        ),
        Qt(
          Cr,
          {
            errorMessage: !!c.shopperEmail && n.get("shopperEmail.invalid"),
            label: n.get("shopperEmail"),
            className: xa({
              "adyen-checkout__bacs--shopper-email": !0,
              "adyen-checkout__field--inactive": m === Pu || "loading" === m,
            }),
            isValid: d.shopperEmail,
          },
          qr("emailAddress", {
            value: s.shopperEmail,
            name: "shopperEmail",
            className: "adyen-checkout__bacs-input--shopper-email",
            classNameModifiers: ["large"],
            placeholder: e.placeholders.shopperEmail,
            spellcheck: !1,
            "aria-invalid": !d.shopperEmail,
            "aria-label": n.get("shopperEmail"),
            "aria-required": "true",
            required: !0,
            readonly: m === Pu || "loading" === m,
            autocorrect: "off",
            onInput: o("shopperEmail", "input"),
            onChange: o("shopperEmail", "blur"),
          })
        ),
        m === wu &&
          Qt(ni, {
            classNameModifiers: ["amountConsentCheckbox"],
            errorMessage: !!c.amountConsentCheckbox,
            label: n.get("bacs.consent.amount"),
            onChange: o("amountConsentCheckbox"),
            checked: !!s.amountConsentCheckbox,
          }),
        m === wu &&
          Qt(ni, {
            classNameModifiers: ["accountConsentCheckbox"],
            errorMessage: !!c.accountConsentCheckbox,
            label: n.get("bacs.consent.account"),
            onChange: o("accountConsentCheckbox"),
            checked: !!s.accountConsentCheckbox,
          }),
        e.showPayButton &&
          e.payButton({
            status: m,
            label:
              m === wu
                ? n.get("continue")
                : n.get("bacs.confirm") +
                  " " +
                  ((null === (t = e.amount) || void 0 === t
                    ? void 0
                    : t.value) &&
                  (null === (a = e.amount) || void 0 === a
                    ? void 0
                    : a.currency)
                    ? n.amount(e.amount.value, e.amount.currency)
                    : ""),
            icon: Aa({
              loadingContext: e.loadingContext,
              imageFolder: "components/",
            })("lock"),
            onClick: function () {
              return u
                ? m === wu
                  ? r.setStatus(Pu)
                  : m === Pu
                  ? e.onSubmit()
                  : void 0
                : r.showValidation();
            },
          })
      )
    );
  }
  Fu.defaultProps = { data: {}, placeholders: {} };
  var Du = function (e) {
      var t = er(),
        a = t.i18n,
        r = t.loadingContext,
        n = e.url,
        i = e.paymentMethodType;
      return Qt(ks, {
        paymentMethodType: i,
        introduction: a.get("bacs.result.introduction"),
        imageUrl: Aa({ loadingContext: r })(i),
        downloadUrl: n,
        downloadButtonText: a.get("download.pdf"),
      });
    },
    Su = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (
          (t.payButton = function (e) {
            return Qt(ar, wt({ amount: t.props.amount, onClick: t.submit }, e));
          }),
          t
        );
      }
      return (
        Nt(t, e),
        (t.prototype.formatData = function () {
          var e, a, r, n;
          return wt(
            {
              paymentMethod: wt(
                wt(
                  wt(
                    { type: t.type },
                    (null === (e = this.state.data) || void 0 === e
                      ? void 0
                      : e.holderName) && {
                      holderName: this.state.data.holderName,
                    }
                  ),
                  (null === (a = this.state.data) || void 0 === a
                    ? void 0
                    : a.bankAccountNumber) && {
                    bankAccountNumber: this.state.data.bankAccountNumber,
                  }
                ),
                (null === (r = this.state.data) || void 0 === r
                  ? void 0
                  : r.bankLocationId) && {
                  bankLocationId: this.state.data.bankLocationId,
                }
              ),
            },
            (null === (n = this.state.data) || void 0 === n
              ? void 0
              : n.shopperEmail) && {
              shopperEmail: this.state.data.shopperEmail,
            }
          );
        }),
        Object.defineProperty(t.prototype, "isValid", {
          get: function () {
            return !!this.state.isValid;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.render = function () {
          var e = this;
          return Qt(
            si,
            {
              i18n: this.props.i18n,
              loadingContext: this.props.loadingContext,
            },
            this.props.url
              ? Qt(Du, {
                  ref: function (t) {
                    e.componentRef = t;
                  },
                  icon: this.icon,
                  url: this.props.url,
                  paymentMethodType: this.props.paymentMethodType,
                })
              : Qt(
                  Fu,
                  wt(
                    {
                      ref: function (t) {
                        e.componentRef = t;
                      },
                    },
                    this.props,
                    {
                      onChange: this.setState,
                      payButton: this.payButton,
                      onSubmit: this.submit,
                    }
                  )
                )
          );
        }),
        (t.type = "directdebit_GB"),
        t
      );
    })(rr),
    Au = {
      dropin: jc,
      ach: Hc,
      address: (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Nt(t, e),
          Object.defineProperty(t.prototype, "data", {
            get: function () {
              return this.state.data;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "isValid", {
            get: function () {
              return !!this.state.isValid;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.render = function () {
            var e = this;
            return Qt(
              si,
              {
                i18n: this.props.i18n,
                loadingContext: this.props.loadingContext,
              },
              Qt(
                ri,
                wt(
                  {
                    ref: function (t) {
                      e.componentRef = t;
                    },
                  },
                  this.props,
                  { onChange: this.setState }
                )
              )
            );
          }),
          t
        );
      })(rr),
      afterpay: pi,
      afterpay_default: pi,
      afterpay_b2b: mi,
      amazonpay: Si,
      amex: Yl,
      applepay: Mi,
      bankTransfer_IBAN: fu,
      bcmc: Wl,
      bcmc_mobile: Ld,
      bcmc_mobile_QR: Ld,
      blik: pu,
      billdesk_online: Vi,
      billdesk_wallet: Ui,
      boletobancario: ac,
      boletobancario_bancodobrasil: ac,
      boletobancario_bradesco: ac,
      boletobancario_hsbc: ac,
      boletobancario_itau: ac,
      boletobancario_santander: ac,
      primeiropay_boleto: ac,
      card: Yl,
      storedCard: Yl,
      diners: Yl,
      directdebit_GB: Su,
      discover: Yl,
      doku: Zd,
      doku_alfamart: Zd,
      doku_permata_lite_atm: Zd,
      doku_indomaret: Zd,
      doku_atm_mandiri_va: Zd,
      doku_sinarmas_va: Zd,
      doku_mandiri_va: Zd,
      doku_cimb_va: Zd,
      doku_danamon_va: Zd,
      doku_bri_va: Zd,
      doku_bni_va: Zd,
      doku_bca_va: Zd,
      doku_wallet: Zd,
      donation: es,
      dotpay: lc,
      dragonpay_ebanking: Yd,
      dragonpay_otc_banking: Yd,
      dragonpay_otc_non_banking: Yd,
      dragonpay_otc_philippines: Yd,
      econtext_seven_eleven: _s,
      econtext_atm: _s,
      econtext_stores: _s,
      econtext_online: _s,
      entercash: ys,
      eps: sc,
      facilypay_3x: ws,
      facilypay_4x: Ps,
      facilypay_6x: Fs,
      facilypay_10x: Ds,
      facilypay_12x: Ss,
      giropay: ns,
      ideal: As,
      jcb: Yl,
      kcp: Yl,
      maestro: Yl,
      mbway: au,
      mc: Yl,
      molpay_ebanking_fpx_MY: Vd,
      molpay_ebanking_TH: Ud,
      molpay_ebanking_VN: Kd,
      openbanking_UK: Hd,
      paypal: Os,
      payu_IN_cashcard: hc,
      payu_IN_nb: fc,
      paywithgoogle: fs,
      personal_details: (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Nt(t, e),
          Object.defineProperty(t.prototype, "data", {
            get: function () {
              return this.state.data;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "isValid", {
            get: function () {
              return !!this.state.isValid;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.render = function () {
            var e = this;
            return Qt(
              si,
              {
                i18n: this.props.i18n,
                loadingContext: this.props.loadingContext,
              },
              Qt(
                nn,
                wt(
                  {
                    ref: function (t) {
                      e.componentRef = t;
                    },
                  },
                  this.props,
                  { onChange: this.setState }
                )
              )
            );
          }),
          t
        );
      })(rr),
      googlepay: fs,
      pix: vu,
      qiwiwallet: Us,
      ratepay: bc,
      redirect: rs,
      securedfields: Hs,
      sepadirectdebit: td,
      scheme: Yl,
      threeDS2Challenge: Pd,
      threeDS2DeviceFingerprint: xd,
      visa: Yl,
      wechatpay: Rd,
      wechatpayQR: Rd,
      oxxo: nc,
      multibanco: oc,
      giftcard: pc,
      vipps: mc,
      swish: vc,
      affirm: bu,
      default: null,
    },
    xu = function (e, t) {
      var a = Au[e] || Au.default;
      return a ? new a(wt(wt({}, t), { id: e + "-" + Ca() })) : null;
    },
    Bu = function (e, t, a) {
      void 0 === t && (t = {}), void 0 === a && (a = !1);
      var r = e;
      return "scheme" === e && (r = a ? "storedCard" : "card"), t[r] || {};
    };
  function zu(e) {
    return !this.length || this.indexOf(e.type) > -1;
  }
  function Tu(e) {
    return !this.length || this.indexOf(e.type) < 0;
  }
  function Mu(e) {
    return (
      !!e &&
      !!e.supportedShopperInteractions &&
      e.supportedShopperInteractions.includes("Ecommerce")
    );
  }
  var Iu = ["scheme", "blik"];
  function ju(e) {
    return !!e && !!e.type && Iu.includes(e.type);
  }
  var Ou = function (e) {
      return wt(wt({}, e), { storedPaymentMethodId: e.id });
    },
    Eu = (function () {
      function e(e, t) {
        void 0 === t && (t = {}),
          (this.paymentMethods = []),
          (this.storedPaymentMethods = []),
          (function (e) {
            var t, a;
            if ("string" == typeof e)
              throw new Error(
                'paymentMethodsResponse was provided but of an incorrect type (should be an object but a string was provided).Try JSON.parse("{...}") your paymentMethodsResponse.'
              );
            if (e instanceof Array)
              throw new Error(
                "paymentMethodsResponse was provided but of an incorrect type (should be an object but an array was provided).Please check you are passing the whole response."
              );
            !e ||
              (null === (t = null == e ? void 0 : e.paymentMethods) ||
              void 0 === t
                ? void 0
                : t.length) ||
              (null === (a = null == e ? void 0 : e.storePaymentMethods) ||
              void 0 === a
                ? void 0
                : a.length) ||
              console.warn(
                "paymentMethodsResponse was provided but no payment methods were found."
              );
          })(e),
          (this.paymentMethods = e
            ? (function (e, t) {
                var a = t.allowPaymentMethods,
                  r = void 0 === a ? [] : a,
                  n = t.removePaymentMethods,
                  i = void 0 === n ? [] : n;
                return e ? e.filter(zu, r).filter(Tu, i) : [];
              })(e.paymentMethods, t)
            : []),
          (this.storedPaymentMethods = e
            ? (function (e, t) {
                var a = t.allowPaymentMethods,
                  r = void 0 === a ? [] : a,
                  n = t.removePaymentMethods,
                  i = void 0 === n ? [] : n;
                return e
                  ? e.filter(ju).filter(zu, r).filter(Tu, i).filter(Mu).map(Ou)
                  : [];
              })(e.storedPaymentMethods, t)
            : []);
      }
      return (
        (e.prototype.has = function (e) {
          return Boolean(
            this.paymentMethods.find(function (t) {
              return t.type === e;
            })
          );
        }),
        (e.prototype.find = function (e) {
          return this.paymentMethods.find(function (t) {
            return t.type === e;
          });
        }),
        e
      );
    })(),
    Ru = {
      redirect: function (e, t) {
        return xu("redirect", wt(wt(wt({}, t), e), { statusType: "redirect" }));
      },
      threeDS2Fingerprint: function (e, t) {
        return xu(
          "threeDS2DeviceFingerprint",
          wt(
            wt(
              {
                createFromAction: t.createFromAction,
                token: e.token,
                paymentData: e.paymentData,
                onError: t.onError,
                showSpinner: !t.isDropin,
                isDropin: !!t.isDropin,
              },
              t
            ),
            {
              type: "IdentifyShopper",
              onComplete: t.onAdditionalDetails,
              statusType: "loading",
              useOriginalFlow: !0,
            }
          )
        );
      },
      threeDS2Challenge: function (e, t) {
        var a;
        return xu(
          "threeDS2Challenge",
          wt(wt({}, t), {
            token: e.token,
            paymentData: e.paymentData,
            onComplete: t.onAdditionalDetails,
            onError: t.onError,
            size: null !== (a = t.size) && void 0 !== a ? a : "02",
            isDropin: !!t.isDropin,
            type: "ChallengeShopper",
            statusType: "custom",
            useOriginalFlow: !0,
          })
        );
      },
      threeDS2: function (e, t) {
        var a =
            "fingerprint" === e.subtype
              ? "threeDS2DeviceFingerprint"
              : "threeDS2Challenge",
          r =
            "fingerprint" === e.subtype ? e.paymentData : e.authorisationToken,
          n = wt(
            {
              token: e.token,
              paymentData: r,
              onComplete: t.onAdditionalDetails,
              onError: t.onError,
              isDropin: !!t.isDropin,
              loadingContext: t.loadingContext,
              clientKey: t.clientKey,
              _parentInstance: t._parentInstance,
              paymentMethodType: t.paymentMethodType,
            },
            (function (e, t) {
              if ("fingerprint" === e) {
                var a = Bo(t.elementRef ? gd : kd).from(t);
                return (
                  (a.showSpinner = !t.isDropin), (a.statusType = "loading"), a
                );
              }
              var r = Bo(Cd).from(t);
              return (r.statusType = "custom"), r;
            })(e.subtype, t)
          );
        return xu(a, n);
      },
      voucher: function (e, t) {
        return xu(
          e.paymentMethodType,
          wt(wt(wt({}, e), t), {
            i18n: t.i18n,
            loadingContext: t.loadingContext,
            statusType: "custom",
          })
        );
      },
      qrCode: function (e, t) {
        return xu(
          e.paymentMethodType,
          wt(wt(wt({}, e), t), {
            onComplete: t.onAdditionalDetails,
            onError: t.onError,
            statusType: "custom",
          })
        );
      },
      await: function (e, t) {
        return xu(
          e.paymentMethodType,
          wt(wt(wt({}, e), t), {
            onComplete: t.onAdditionalDetails,
            onError: t.onError,
            statusType: "custom",
          })
        );
      },
      bankTransfer: function (e, t) {
        return xu(
          e.paymentMethodType,
          wt(wt(wt({}, e), t), {
            onComplete: t.onAdditionalDetails,
            onError: t.onError,
            statusType: "custom",
          })
        );
      },
    };
  var Lu = (function () {
      function e() {
        this.events = [];
      }
      return (
        (e.prototype.add = function (e) {
          this.events.push(e);
        }),
        (e.prototype.run = function (e) {
          var t = this.events.map(function (t) {
            return t(e);
          });
          return (this.events = []), Promise.all(t);
        }),
        e
      );
    })(),
    Vu = (function () {
      function e(t) {
        var a = t.loadingContext,
          r = t.locale,
          n = t.clientKey,
          i = t.analytics;
        (this.conversionId = null),
          (this.queue = new Lu()),
          (this.props = wt(wt({}, e.defaultProps), i)),
          (this.logEvent = (function (e) {
            return function (t) {
              var a = wt(
                  {
                    version: "4.2.0",
                    payload_version: 1,
                    platform: "web",
                    locale: e.locale,
                  },
                  t
                ),
                r = Object.keys(a)
                  .map(function (e) {
                    return (
                      encodeURIComponent(e) + "=" + encodeURIComponent(a[e])
                    );
                  })
                  .join("&");
              new Image().src = e.loadingContext + "images/analytics.png?" + r;
            };
          })({ loadingContext: a, locale: r })),
          (this.logTelemetry = (function (e) {
            return function (t) {
              if (!e.clientKey) return Promise.reject();
              var a = {
                  errorLevel: "silent",
                  loadingContext: e.loadingContext,
                  path: "v1/analytics/log?clientKey=" + e.clientKey,
                },
                r = wt(
                  {
                    version: "4.2.0",
                    platform: "web",
                    locale: e.locale,
                    flavor: "components",
                    userAgent: navigator.userAgent,
                    referrer: window.location.href,
                    screenWidth: window.screen.width,
                  },
                  t
                );
              return Kn(a, r);
            };
          })({ loadingContext: a, locale: r, clientKey: n })),
          (this.collectId = (function (e) {
            var t,
              a = e.loadingContext,
              r = e.clientKey,
              n = {
                errorLevel: "silent",
                loadingContext: a,
                path: "v1/analytics/id?clientKey=" + r,
              };
            return function () {
              return (
                t ||
                (r
                  ? (t = Kn(n)
                      .then(function (e) {
                        return null == e ? void 0 : e.id;
                      })
                      .catch(function () {}))
                  : Promise.reject())
              );
            };
          })({ loadingContext: a, clientKey: n }));
        var o = this.props,
          l = o.conversion,
          s = o.enabled;
        !0 === l &&
          !0 === s &&
          this.props.conversionId &&
          ((this.conversionId = this.props.conversionId),
          this.queue.run(this.conversionId));
      }
      return (
        (e.prototype.send = function (e) {
          var t = this,
            a = this.props,
            r = a.conversion,
            n = a.enabled,
            i = a.telemetry;
          if (!0 === n) {
            if (
              (!0 !== r ||
                this.conversionId ||
                this.collectId().then(function (e) {
                  (t.conversionId = e), t.queue.run(t.conversionId);
                }),
              !0 === i)
            ) {
              this.queue.add(function (a) {
                return t
                  .logTelemetry(wt(wt({}, e), { conversionId: a }))
                  .catch(function () {});
              }),
                (r && !this.conversionId) || this.queue.run(this.conversionId);
            }
            this.logEvent(e);
          }
        }),
        (e.defaultProps = {
          enabled: !0,
          telemetry: !0,
          conversion: !1,
          conversionId: null,
        }),
        e
      );
    })();
  function Uu(e) {
    return Object.keys(e).reduce(function (t, a) {
      return Da.includes(a) && (t[a] = e[a]), t;
    }, {});
  }
  var Ku = (function () {
      function e(e) {
        var t = this;
        (this.components = []),
          (this.update = function (e) {
            return (
              void 0 === e && (e = {}),
              t.setOptions(e),
              t.components.forEach(function (e) {
                return e.update(t.getPropsForComponent(t.options));
              }),
              t
            );
          }),
          (this.remove = function (e) {
            return (
              (t.components = t.components.filter(function (t) {
                return t._id !== e._id;
              })),
              e.unmount(),
              t
            );
          }),
          (this.setOptions = function (e) {
            return (
              (t.options = wt(wt({}, t.options), e)),
              (t.options.loadingContext = (function (e) {
                void 0 === e &&
                  (e =
                    "https://checkoutshopper-live.adyen.com/checkoutshopper/");
                var t = {
                  test: "https://checkoutshopper-test.adyen.com/checkoutshopper/",
                  live: "https://checkoutshopper-live.adyen.com/checkoutshopper/",
                  "live-us":
                    "https://checkoutshopper-live-us.adyen.com/checkoutshopper/",
                  "live-au":
                    "https://checkoutshopper-live-au.adyen.com/checkoutshopper/",
                };
                return t[e] || t[e.toLowerCase()] || e;
              })(t.options.environment)),
              (t.modules = {
                risk: new vr(t.options),
                analytics: new Vu(t.options),
                i18n: new qt(t.options.locale, t.options.translations),
              }),
              (t.paymentMethodsResponse = new Eu(
                t.options.paymentMethodsResponse,
                t.options
              )),
              t
            );
          }),
          (this.create = this.create.bind(this)),
          (this.createFromAction = this.createFromAction.bind(this)),
          this.setOptions(e);
      }
      return (
        (e.prototype.create = function (e, t) {
          var a = this.getPropsForComponent(t);
          return e ? this.handleCreate(e, a) : this.handleCreateError();
        }),
        (e.prototype.createFromAction = function (e, t) {
          if ((void 0 === t && (t = {}), e.type)) {
            var a = Bu(e.type, this.options.paymentMethodsConfiguration);
            return (function (e, t) {
              void 0 === t && (t = {});
              var a = Ru[e.type];
              if (a && "function" == typeof a) return a(e, t);
              throw new Error("Invalid Action");
            })(
              e,
              wt(wt(wt({}, Uu(this.options)), a), this.getPropsForComponent(t))
            );
          }
          return this.handleCreateError();
        }),
        (e.prototype.getPropsForComponent = function (e) {
          return wt(
            wt(
              {
                paymentMethods: this.paymentMethodsResponse.paymentMethods,
                storedPaymentMethods:
                  this.paymentMethodsResponse.storedPaymentMethods,
              },
              e
            ),
            {
              i18n: this.modules.i18n,
              modules: this.modules,
              createFromAction: this.createFromAction,
              _parentInstance: this,
            }
          );
        }),
        (e.prototype.handleCreate = function (e, t) {
          if ((void 0 === t && (t = {}), e.prototype instanceof rr)) {
            var a = t.supportedShopperInteractions
                ? []
                : this.paymentMethodsResponse.find(e.type),
              r = Bu(
                e.type,
                this.options.paymentMethodsConfiguration,
                !!t.storedPaymentMethodId
              ),
              n = Uu(this.options),
              i = new e(wt(wt(wt(wt({}, n), a), r), t));
            return t.isDropin || this.components.push(i), i;
          }
          if ("string" == typeof e && Au[e]) return this.handleCreate(Au[e], t);
          if ("string" == typeof e && this.paymentMethodsResponse.has(e)) {
            r = Bu(e, this.options.paymentMethodsConfiguration);
            return this.handleCreate(
              Au.redirect,
              wt(
                wt(
                  wt(
                    wt({}, Uu(this.options)),
                    this.paymentMethodsResponse.find(e)
                  ),
                  r
                ),
                t
              )
            );
          }
          if ("object" == typeof e && "string" == typeof e.type) {
            r = Bu(
              e.type,
              this.options.paymentMethodsConfiguration,
              !!e.storedPaymentMethodId
            );
            return this.handleCreate(e.type, wt(wt(wt({}, e), t), r));
          }
          return this.handleCreateError(e);
        }),
        (e.prototype.handleCreateError = function (e) {
          var t = e && e.name ? e.name : "The passed payment method";
          throw new Error(
            e
              ? t + " is not a valid Checkout Component"
              : "No Payment Method component was passed"
          );
        }),
        (e.version = {
          version: "4.2.0",
          revision: "be73858",
          branch: "HEAD",
          buildId: "@adyen/adyen-web-2bd20ae3-0bd1-4906-8b65-780dbdf5bb68",
        }),
        e
      );
    })(),
    Hu = Object.freeze({
      __proto__: null,
      default: {
        payButton: "Zaplatit",
        "payButton.redirecting": "P\u0159esm\u011brov\xe1n\xed...",
        storeDetails: "Ulo\u017eit pro\xa0p\u0159\xed\u0161t\xed platby",
        "creditCard.holderName": "Jm\xe9no na\xa0kart\u011b",
        "creditCard.holderName.placeholder": "Jan Nov\xe1k",
        "creditCard.holderName.invalid":
          "Neplatn\xe9 jm\xe9no dr\u017eitele karty",
        "creditCard.numberField.title": "\u010c\xedslo karty",
        "creditCard.numberField.placeholder": "1234 5678 9012 3456",
        "creditCard.expiryDateField.title": "Konec platnosti",
        "creditCard.expiryDateField.placeholder": "MM/RR",
        "creditCard.expiryDateField.month": "M\u011bs\xedc",
        "creditCard.expiryDateField.month.placeholder": "MM",
        "creditCard.expiryDateField.year.placeholder": "RR",
        "creditCard.expiryDateField.year": "Rok",
        "creditCard.cvcField.title": "K\xf3d CVC/CVV",
        "creditCard.cvcField.placeholder": "123",
        "creditCard.storeDetailsButton":
          "Zapamatovat si pro\xa0p\u0159\xed\u0161t\u011b",
        "creditCard.cvcField.placeholder.4digits": "4 \u010d\xedslice",
        "creditCard.cvcField.placeholder.3digits": "3 \u010d\xedslice",
        "creditCard.taxNumber.placeholder": "RRMMDD / 0123456789",
        installments: "Po\u010det spl\xe1tek",
        installmentOption: "%{times}\xd7 %{partialValue}",
        installmentOptionMonths: "%{times} m\u011bs\xedc\u016f",
        "installments.oneTime": "Jednor\xe1zov\xe1 platba",
        "installments.installments": "Platba na\xa0spl\xe1tky",
        "installments.revolving": "Opakuj\xedc\xed se platba",
        "sepaDirectDebit.ibanField.invalid":
          "Neplatn\xe9 \u010d\xedslo \xfa\u010dtu",
        "sepaDirectDebit.nameField.placeholder": "Jan Nov\xe1k",
        "sepa.ownerName": "Jm\xe9no dr\u017eitele \xfa\u010dtu",
        "sepa.ibanNumber": "\u010c\xedslo \xfa\u010dtu (IBAN)",
        "error.title": "Chyba",
        "error.subtitle.redirect": "P\u0159esm\u011brov\xe1n\xed selhalo",
        "error.subtitle.payment": "Platba selhala",
        "error.subtitle.refused": "Platba zam\xedtnuta",
        "error.message.unknown": "Do\u0161lo k\xa0nezn\xe1m\xe9 chyb\u011b",
        "idealIssuer.selectField.title": "Banka",
        "idealIssuer.selectField.placeholder": "Vyberte svou banku",
        "creditCard.success": "Platba prob\u011bhla \xfasp\u011b\u0161n\u011b",
        loading: "Na\u010d\xedt\xe1n\xed\u2026",
        continue: "Pokra\u010dovat",
        continueTo: "Pokra\u010dovat k",
        "wechatpay.timetopay": "Na\xa0zaplacen\xed v\xe1m zb\xfdv\xe1 %@",
        "wechatpay.scanqrcode": "Naskenovat QR k\xf3d",
        personalDetails: "Osobn\xed \xfadaje",
        companyDetails: "\xdadaje o\xa0spole\u010dnosti",
        "companyDetails.name": "N\xe1zev spole\u010dnosti",
        "companyDetails.registrationNumber":
          "Registra\u010dn\xed \u010d\xedslo",
        socialSecurityNumber: "Rodn\xe9 \u010d\xedslo",
        firstName: "Jm\xe9no",
        infix: "Prefix",
        lastName: "P\u0159\xedjmen\xed",
        mobileNumber: "\u010c\xedslo na mobil",
        "mobileNumber.invalid":
          "Neplatn\xe9 \u010d\xedslo mobiln\xedho telefonu",
        city: "M\u011bsto",
        postalCode: "PS\u010c",
        countryCode: "K\xf3d zem\u011b",
        telephoneNumber: "Telefonn\xed \u010d\xedslo",
        dateOfBirth: "Datum narozen\xed",
        shopperEmail: "E-mailov\xe1 adresa",
        gender: "Pohlav\xed",
        male: "Mu\u017e",
        female: "\u017dena",
        billingAddress: "Faktura\u010dn\xed adresa",
        street: "Ulice",
        stateOrProvince: "Kraj nebo okres",
        country: "Zem\u011b",
        houseNumberOrName: "\u010c\xedslo popisn\xe9",
        separateDeliveryAddress:
          "Zadat dodac\xed adresu odli\u0161nou od faktura\u010dn\xed",
        deliveryAddress: "Dodac\xed adresa",
        zipCode: "PS\u010c",
        apartmentSuite: "Byt",
        provinceOrTerritory: "Provincie nebo teritorium",
        cityTown: "M\u011bsto",
        address: "Adresa",
        state: "St\xe1t",
        "field.title.optional": "(nepovinn\xe9)",
        "creditCard.cvcField.title.optional": "K\xf3d CVC/CVV (voliteln\xe9)",
        "issuerList.wallet.placeholder": "Vyberte svou pen\u011b\u017eenku",
        privacyPolicy: "Z\xe1sady ochrany osobn\xedch \xfadaj\u016f",
        "afterPay.agreement": "Souhlas\xedm s %@ spole\u010dnosti AfterPay",
        paymentConditions: "platebn\xedmi podm\xednkami",
        openApp: "Otev\u0159ete aplikaci",
        "voucher.readInstructions": "P\u0159e\u010dt\u011bte si pokyny",
        "voucher.introduction":
          "D\u011bkujeme za\xa0n\xe1kup. K\xa0dokon\u010den\xed platby pou\u017eijte pros\xedm n\xe1sleduj\xedc\xed kup\xf3n.",
        "voucher.expirationDate": "Datum konce platnosti",
        "voucher.alternativeReference": "N\xe1hradn\xed \u010d\xedslo",
        "dragonpay.voucher.non.bank.selectField.placeholder":
          "Vyberte sv\xe9ho poskytovatele",
        "dragonpay.voucher.bank.selectField.placeholder": "Vyberte svou banku",
        "voucher.paymentReferenceLabel": "\u010c\xedslo platby",
        "voucher.surcharge": "V\u010detn\u011b p\u0159ir\xe1\u017eky %@",
        "voucher.introduction.doku":
          "D\u011bkujeme za n\xe1kup. K dokon\u010den\xed platby pou\u017eijte pros\xedm n\xe1sleduj\xedc\xed informace.",
        "voucher.shopperName": "Jm\xe9no kupuj\xedc\xedho",
        "voucher.merchantName": "Obchodn\xedk",
        "voucher.introduction.econtext":
          "D\u011bkujeme za n\xe1kup. K dokon\u010den\xed platby pou\u017eijte pros\xedm n\xe1sleduj\xedc\xed informace.",
        "voucher.telephoneNumber": "Telefonn\xed \u010d\xedslo",
        "voucher.shopperReference": "\u010c\xedslo kupuj\xedc\xedho",
        "voucher.collectionInstitutionNumber":
          "\u010c\xedslo inkasn\xed instituce",
        "voucher.econtext.telephoneNumber.invalid":
          "Telefonn\xed \u010d\xedslo mus\xed obsahovat 10 nebo 11 \u010d\xedslic.",
        "boletobancario.btnLabel": "Vygenerovat Boleto",
        "boleto.sendCopyToEmail": "Poslat mi kopii na e-mail",
        "button.copy": "Kop\xedrovat",
        "button.download": "St\xe1hnout",
        "creditCard.storedCard.description.ariaLabel":
          "Ulo\u017een\xe1 karta kon\u010d\xed na %@",
        "voucher.entity": "Subjekt",
        donateButton: "P\u0159isp\u011bt",
        notNowButton: "Te\u010f ne",
        thanksForYourSupport: "D\u011bkujeme v\xe1m za podporu!",
        preauthorizeWith: "P\u0159edautorizovat pomoc\xed",
        confirmPreauthorization: "Potvrdit p\u0159edautorizaci",
        confirmPurchase: "Potvrdit n\xe1kup",
        applyGiftcard: "Uplatnit",
        giftcardBalance: "Z\u016fstatek na d\xe1rkov\xe9 kart\u011b",
        deductedBalance: "Ode\u010dten\xfd z\u016fstatek",
        "creditCard.pin.title": "Pin",
        "creditCard.encryptedPassword.label":
          "Prvn\xed 2 \u010d\xedslice hesla karty",
        "creditCard.encryptedPassword.placeholder": "12",
        "creditCard.encryptedPassword.invalid": "Neplatn\xe9 heslo",
        "creditCard.taxNumber.label":
          "Datum narozen\xed dr\u017eitele karty (RRMMDD) nebo registra\u010dn\xed \u010d\xedslo spole\u010dnosti (10 \u010d\xedslic)",
        "creditCard.taxNumber.labelAlt":
          "Registra\u010dn\xed \u010d\xedslo spole\u010dnosti (10 \u010d\xedslic)",
        "creditCard.taxNumber.invalid":
          "Neplatn\xe9 datum narozen\xed dr\u017eitele karty nebo registra\u010dn\xed \u010d\xedslo spole\u010dnosti",
        "storedPaymentMethod.disable.button": "Odebrat",
        "storedPaymentMethod.disable.confirmation":
          "Odebrat ulo\u017een\xfd zp\u016fsob platby",
        "storedPaymentMethod.disable.confirmButton": "Ano, odebrat",
        "storedPaymentMethod.disable.cancelButton": "Zru\u0161it",
        "ach.bankAccount": "Bankovn\xed \xfa\u010det",
        "ach.accountHolderNameField.title":
          "Jm\xe9no dr\u017eitele \xfa\u010dtu",
        "ach.accountHolderNameField.placeholder": "Jan Nov\xe1k",
        "ach.accountHolderNameField.invalid":
          "Neplatn\xe9 jm\xe9no dr\u017eitele \xfa\u010dtu",
        "ach.accountNumberField.title": "\u010c\xedslo \xfa\u010dtu",
        "ach.accountNumberField.invalid":
          "Neplatn\xe9 \u010d\xedslo \xfa\u010dtu",
        "ach.accountLocationField.title":
          "Sm\u011brovac\xed tranzitn\xed \u010d\xedslo ABA",
        "ach.accountLocationField.invalid":
          "Neplatn\xe9 sm\u011brovac\xed tranzitn\xed \u010d\xedslo ABA",
        "select.state": "Vyberte st\xe1t",
        "select.stateOrProvince": "Vyberte kraj nebo okres",
        "select.provinceOrTerritory": "Vyberte provincii nebo teritorium",
        "select.country": "Vyberte zemi",
        "select.noOptionsFound":
          "Nebyly nalezeny \u017e\xe1dn\xe9 mo\u017enosti",
        "select.filter.placeholder": "Hledat...",
        "telephoneNumber.invalid": "Neplatn\xe9 telefonn\xed \u010d\xedslo",
        qrCodeOrApp: "nebo",
        "paypal.processingPayment": "Zpracov\xe1n\xed platby...",
        generateQRCode: "Vygenerovat QR k\xf3d",
        "await.waitForConfirmation": "\u010cek\xe1 se na\xa0potvrzen\xed",
        "mbway.confirmPayment": "Potvr\u010fte platbu v\xa0aplikaci MB WAY",
        "shopperEmail.invalid": "Neplatn\xe1 e-mailov\xe1 adresa",
        "dateOfBirth.format": "DD/MM/RRRR",
        "dateOfBirth.invalid": "Mus\xed v\xe1m b\xfdt alespo\u0148 18 let",
        "blik.confirmPayment":
          "Spus\u0165te bankovn\xed aplikaci a potvr\u010fte platbu.",
        "blik.invalid": "Zadejte 6 \u010d\xedsel",
        "blik.code": "\u0160estim\xedstn\xfd k\xf3d",
        "blik.help": "Z\xedskejte k\xf3d z bankovn\xed aplikace.",
        "swish.pendingMessage":
          "Po naskenov\xe1n\xed QR k\xf3du m\u016f\u017ee trvat a\u017e 10 minut, ne\u017e se stav zm\u011bn\xed. Pokud budete zkou\u0161et b\u011bhem t\xe9to doby platbu opakovat, m\u016f\u017ee b\xfdt \u010d\xe1stka zaplacena v\xedcekr\xe1t.",
        "error.va.gen.01": "Ne\xfapln\xe9 pole",
        "error.va.gen.02": "Pole nen\xed platn\xe9",
        "error.va.sf-cc-num.01": "Neplatn\xe9 \u010d\xedslo karty",
        "error.va.sf-cc-num.03": "Zad\xe1na nepodporovan\xe1 karta",
        "error.va.sf-cc-dat.01": "P\u0159\xedli\u0161 star\xe1 karta",
        "error.va.sf-cc-dat.02":
          "Datum p\u0159\xedli\u0161 daleko v budoucnosti",
        "error.giftcard.no-balance":
          "Na d\xe1rkov\xe9 kart\u011b je nulov\xfd z\u016fstatek",
        "error.giftcard.card-error":
          "V\xa0na\u0161ich z\xe1znamech nen\xed \u017e\xe1dn\xe1 d\xe1rkov\xe1 karta s\xa0t\xedmto \u010d\xedslem",
        "error.giftcard.currency-error":
          "D\xe1rkov\xe9 karty jsou platn\xe9 jenom v\xa0m\u011bn\u011b, ve kter\xe9 byly vystaven\xe9",
        "amazonpay.signout": "Odhl\xe1sit se z Amazonu",
        "amazonpay.changePaymentDetails": "Zm\u011bnit \xfadaje o platb\u011b",
        "partialPayment.warning":
          "Zvolte jin\xfd zp\u016fsob platby pro platbu zb\xfdvaj\xedc\xedch",
        "partialPayment.remainingBalance":
          "Zb\xfdvaj\xedc\xed z\u016fstatek bude %{amount}",
        "bankTransfer.beneficiary": "P\u0159\xedjemce",
        "bankTransfer.iban": "IBAN",
        "bankTransfer.bic": "BIC",
        "bankTransfer.reference": "Odkaz",
        "bankTransfer.introduction":
          "Vytvo\u0159te novou platbu bankovn\xedm p\u0159evodem. K dokon\u010den\xed t\xe9to platby m\u016f\u017eete pou\u017e\xedt \xfadaje na n\xe1sleduj\xedc\xed obrazovce.",
        "bankTransfer.instructions":
          "D\u011bkujeme za n\xe1kup. K dokon\u010den\xed platby pou\u017eijte pros\xedm n\xe1sleduj\xedc\xed informace.",
        "bacs.accountHolderName":
          "Jm\xe9no dr\u017eitele bankovn\xedho \xfa\u010dtu",
        "bacs.accountHolderName.invalid":
          "Neplatn\xe9 jm\xe9no dr\u017eitele bankovn\xedho \xfa\u010dtu",
        "bacs.accountNumber": "\u010c\xedslo bankovn\xedho \xfa\u010dtu",
        "bacs.accountNumber.invalid":
          "Neplatn\xe9 \u010d\xedslo bankovn\xedho \xfa\u010dtu",
        "bacs.bankLocationId": "K\xf3d Sort",
        "bacs.bankLocationId.invalid": "Neplatn\xfd k\xf3d Sort",
        "bacs.consent.amount":
          "Souhlas\xedm s\xa0t\xedm, \u017ee mi bude n\xe1sleduj\xedc\xed \u010d\xe1stka ode\u010dtena z\xa0bankovn\xedho \xfa\u010dtu.",
        "bacs.consent.account":
          "Potvrzuji, \u017ee \xfa\u010det je veden na moje jm\xe9no a\xa0jsem jedin\xfdm disponentem, jeho\u017e podpis je nutn\xfd ke schv\xe1len\xed p\u0159\xedm\xe9ho inkasa.",
        edit: "Editovat",
        "bacs.confirm": "Potvrdit a\xa0zaplatit",
        "bacs.result.introduction":
          "St\xe1hn\u011bte si pokyny k\xa0p\u0159\xedm\xe9mu inkasu (DDI / podpisov\xe9 pr\xe1vo)",
        "download.pdf": "St\xe1hnout PDF",
        "creditCard.encryptedCardNumber.aria.iframeTitle":
          "Iframe pro \u010d\xedslo zabezpe\u010den\xe9 karty",
        "creditCard.encryptedCardNumber.aria.label":
          "Pole pro \u010d\xedslo karty",
        "creditCard.encryptedExpiryDate.aria.iframeTitle":
          "Iframe pro datum vypr\u0161en\xed platnosti zabezpe\u010den\xe9 karty",
        "creditCard.encryptedExpiryDate.aria.label":
          "Pole pro datum vypr\u0161en\xed platnosti",
        "creditCard.encryptedExpiryMonth.aria.iframeTitle":
          "Iframe pro m\u011bs\xedc vypr\u0161en\xed platnosti zabezpe\u010den\xe9 karty",
        "creditCard.encryptedExpiryMonth.aria.label":
          "Pole pro m\u011bs\xedc vypr\u0161en\xed platnosti",
        "creditCard.encryptedExpiryYear.aria.iframeTitle":
          "Iframe pro rok vypr\u0161en\xed platnosti zabezpe\u010den\xe9 karty",
        "creditCard.encryptedExpiryYear.aria.label":
          "Pole pro rok vypr\u0161en\xed platnosti",
        "creditCard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe pro bezpe\u010dnostn\xed k\xf3d zabezpe\u010den\xe9 karty",
        "creditCard.encryptedSecurityCode.aria.label":
          "Pole pro bezpe\u010dnostn\xed k\xf3d",
        "giftcard.encryptedCardNumber.aria.iframeTitle":
          "Iframe pro \u010d\xedslo zabezpe\u010den\xe9 d\xe1rkov\xe9 karty",
        "giftcard.encryptedCardNumber.aria.label":
          "Pole pro \u010d\xedslo d\xe1rkov\xe9 karty",
        "giftcard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe pro bezpe\u010dnostn\xed k\xf3d zabezpe\u010den\xe9 d\xe1rkov\xe9 karty",
        "giftcard.encryptedSecurityCode.aria.label":
          "Pole pro bezpe\u010dnostn\xed k\xf3d d\xe1rkov\xe9 karty",
        giftcardTransactionLimit:
          "Maxim\xe1ln\xed povolen\xe1 \u010d\xe1stka za jednu transakci touto d\xe1rkovou kartou je %{amount}.",
        "ach.encryptedBankAccountNumber.aria.iframeTitle":
          "Iframe pro \u010d\xedslo zabezpe\u010den\xe9ho bankovn\xedho \xfa\u010dtu",
        "ach.encryptedBankAccountNumber.aria.label":
          "Pole pro bankovn\xed \xfa\u010det",
        "ach.encryptedBankLocationId.aria.iframeTitle":
          "Iframe pro \u010d\xedslo zabezpe\u010den\xe9ho k\xf3du banky",
        "ach.encryptedBankLocationId.aria.label": "Pole pro k\xf3d banky",
      },
    }),
    qu = Object.freeze({
      __proto__: null,
      default: {
        payButton: "Betal",
        "payButton.redirecting": "Omdirigerer ...",
        storeDetails: "Gem til min n\xe6ste betaling",
        "creditCard.holderName": "Navn p\xe5 kort",
        "creditCard.holderName.placeholder": "J. Hansen",
        "creditCard.holderName.invalid": "Ugyldigt kortholdernavn",
        "creditCard.numberField.title": "Kortnummer",
        "creditCard.numberField.placeholder": "1234 5678 9012 3456",
        "creditCard.expiryDateField.title": "Udl\xf8bsdato",
        "creditCard.expiryDateField.placeholder": "MM/\xc5\xc5",
        "creditCard.expiryDateField.month": "M\xe5ned",
        "creditCard.expiryDateField.month.placeholder": "MM",
        "creditCard.expiryDateField.year.placeholder": "\xc5\xc5",
        "creditCard.expiryDateField.year": "\xc5r",
        "creditCard.cvcField.title": "CVC / CVV",
        "creditCard.cvcField.placeholder": "123",
        "creditCard.storeDetailsButton": "Husk til n\xe6ste gang",
        "creditCard.cvcField.placeholder.4digits": "4 cifre",
        "creditCard.cvcField.placeholder.3digits": "3 cifre",
        "creditCard.taxNumber.placeholder": "\xc5\xc5MMDD/0123456789",
        installments: "Antal rater",
        installmentOption: "%{times}x %{partialValue}",
        installmentOptionMonths: "%{times} m\xe5neder",
        "installments.oneTime": "Engangsbetaling",
        "installments.installments": "Afdragsbetaling",
        "installments.revolving": "L\xf8bende betaling",
        "sepaDirectDebit.ibanField.invalid": "Ugyldigt kontonummer",
        "sepaDirectDebit.nameField.placeholder": "J. Smith",
        "sepa.ownerName": "Kontohavernavn",
        "sepa.ibanNumber": "Kontonummer (IBAN)",
        "error.title": "Fejl",
        "error.subtitle.redirect": "Omdirigering fejlede",
        "error.subtitle.payment": "Betaling fejlede",
        "error.subtitle.refused": "Betaling afvist",
        "error.message.unknown": "Der opstod en ukendt fejl",
        "idealIssuer.selectField.title": "Bank",
        "idealIssuer.selectField.placeholder": "V\xe6lg din bank",
        "creditCard.success": "Betaling gennemf\xf8rt",
        loading: "Indl\xe6ser\u2026",
        continue: "Forts\xe6t",
        continueTo: "Forts\xe6t til",
        "wechatpay.timetopay": "Du har %@ at betale",
        "wechatpay.scanqrcode": "Scan QR-kode",
        personalDetails: "Personlige oplysninger",
        companyDetails: "Virksomhedsoplysninger",
        "companyDetails.name": "Virksomhedsnavn",
        "companyDetails.registrationNumber": "CVR-nummer",
        socialSecurityNumber: "CPR-nummer",
        firstName: "Fornavn",
        infix: "Pr\xe6fiks",
        lastName: "Efternavn",
        mobileNumber: "Mobilnummer",
        "mobileNumber.invalid": "Ugyldigt mobilnummer",
        city: "By",
        postalCode: "Postnummer",
        countryCode: "Landekode",
        telephoneNumber: "Telefonnummer",
        dateOfBirth: "F\xf8dselsdato",
        shopperEmail: "E-mailadresse",
        gender: "K\xf8n",
        male: "Mand",
        female: "Kvinde",
        billingAddress: "Faktureringsadresse",
        street: "Gade",
        stateOrProvince: "Region eller kommune",
        country: "Land",
        houseNumberOrName: "Husnummer",
        separateDeliveryAddress: "Angiv en separat leveringsadresse",
        deliveryAddress: "Leveringsadresse",
        zipCode: "Postnummer",
        apartmentSuite: "Lejlighed/suite",
        provinceOrTerritory: "Provins eller territorium",
        cityTown: "By",
        address: "Adresse",
        state: "Stat",
        "field.title.optional": "(valgfrit)",
        "creditCard.cvcField.title.optional": "CVC / CVV (valgfrit)",
        "issuerList.wallet.placeholder": "V\xe6lg tegnebog",
        privacyPolicy: "Politik om privatlivets fred",
        "afterPay.agreement": "Jeg accepterer AfterPays %@",
        paymentConditions: "betalingsbetingelser",
        openApp: "\xc5bn appen",
        "voucher.readInstructions": "L\xe6s anvisningerne",
        "voucher.introduction":
          "Tak for dit k\xf8b. Brug f\xf8lgende kupon til at gennemf\xf8re din betaling.",
        "voucher.expirationDate": "Udl\xf8bsdato",
        "voucher.alternativeReference": "Alternativ reference",
        "dragonpay.voucher.non.bank.selectField.placeholder":
          "V\xe6lg din udbyder",
        "dragonpay.voucher.bank.selectField.placeholder": "V\xe6lg din bank",
        "voucher.paymentReferenceLabel": "Betalingsreference",
        "voucher.surcharge": "Inkl. till\xe6gsbegyr p\xe5 %@",
        "voucher.introduction.doku":
          "Tak for dit k\xf8b. Brug f\xf8lgende oplysninger til at gennemf\xf8re din betaling.",
        "voucher.shopperName": "Kundenavn",
        "voucher.merchantName": "S\xe6lger",
        "voucher.introduction.econtext":
          "Tak for dit k\xf8b. Brug f\xf8lgende oplysninger til at gennemf\xf8re din betaling.",
        "voucher.telephoneNumber": "Telefonnummer",
        "voucher.shopperReference": "K\xf8bers reference",
        "voucher.collectionInstitutionNumber":
          "Id-nummer til opkr\xe6vningsinstitution",
        "voucher.econtext.telephoneNumber.invalid":
          "Telefonnummer skal best\xe5 af 10 eller 11 cifre",
        "boletobancario.btnLabel": "Gener\xe9r Boleto",
        "boleto.sendCopyToEmail": "Send en kopi til min e-mail",
        "button.copy": "Kopi\xe9r",
        "button.download": "Download",
        "creditCard.storedCard.description.ariaLabel":
          "Gemt kort ender p\xe5 %@",
        "voucher.entity": "Enhed",
        donateButton: "Giv et bidrag",
        notNowButton: "Ikke nu",
        thanksForYourSupport: "Tak for din st\xf8tte!",
        preauthorizeWith: "Forh\xe5ndsgodkend med",
        confirmPreauthorization: "Bekr\xe6ft forh\xe5ndsgodkendelse",
        confirmPurchase: "Bekr\xe6ft k\xf8b",
        applyGiftcard: "Indl\xf8s",
        giftcardBalance: "Saldo p\xe5 gavekort",
        deductedBalance: "Fratrukket saldo",
        "creditCard.pin.title": "Pinkode",
        "creditCard.encryptedPassword.label":
          "F\xf8rste 2 cifre i adgangskode til kort",
        "creditCard.encryptedPassword.placeholder": "12",
        "creditCard.encryptedPassword.invalid": "Ugyldig adgangskode",
        "creditCard.taxNumber.label":
          "Kortholders f\xf8dselsdato (\xc5\xc5MMDD) eller virksomheds registreringsnummer (10 cifre)",
        "creditCard.taxNumber.labelAlt":
          "Virksomheds registreringsnummer (10 cifre)",
        "creditCard.taxNumber.invalid":
          "Ugyldig f\xf8dselsdato for kortholder eller virksomheds registreringsnummer",
        "storedPaymentMethod.disable.button": "Fjern",
        "storedPaymentMethod.disable.confirmation":
          "Fjern gemt betalingsm\xe5de",
        "storedPaymentMethod.disable.confirmButton": "Ja, fjern",
        "storedPaymentMethod.disable.cancelButton": "Annuller",
        "ach.bankAccount": "Bankkonto",
        "ach.accountHolderNameField.title": "Kontohavers navn",
        "ach.accountHolderNameField.placeholder": "J. Hansen",
        "ach.accountHolderNameField.invalid": "Ugyldigt kontohavernavn",
        "ach.accountNumberField.title": "Kontonummer",
        "ach.accountNumberField.invalid": "Ugyldigt kontonummer",
        "ach.accountLocationField.title": "ABA-registreringsnummer",
        "ach.accountLocationField.invalid": "Ugyldigt ABA-registreringsnummer",
        "select.state": "V\xe6lg stat",
        "select.stateOrProvince": "V\xe6lg region eller kommune",
        "select.provinceOrTerritory": "V\xe6lg provins eller territorium",
        "select.country": "V\xe6lg land",
        "select.noOptionsFound": "Ingen muligheder fundet",
        "select.filter.placeholder": "S\xf8g ...",
        "telephoneNumber.invalid": "Ugyldigt telefonnummer",
        qrCodeOrApp: "eller",
        "paypal.processingPayment": "Behandler betaling ...",
        generateQRCode: "Gener\xe9r QR-kode",
        "await.waitForConfirmation": "Venter p\xe5 bekr\xe6ftelse",
        "mbway.confirmPayment": "Bekr\xe6ft din betaling p\xe5 appen MB WAY",
        "shopperEmail.invalid": "Ugyldig e-mailadresse",
        "dateOfBirth.format": "DD/MM/\xc5\xc5\xc5\xc5",
        "dateOfBirth.invalid": "Du skal v\xe6re mindst 18 \xe5r",
        "blik.confirmPayment":
          "\xc5bn din bankapp for at bekr\xe6fte betalingen.",
        "blik.invalid": "Indtast 6 tal",
        "blik.code": "6-cifret kode",
        "blik.help": "F\xe5 koden fra din bankapp.",
        "swish.pendingMessage":
          "Visning af status kan tage op til 10 minutter efter scanning. Et nyt fors\xf8g p\xe5 betaling inden for dette tidsrum kan muligvis medf\xf8re flere gebyrer.",
        "error.va.gen.01": "Felt ikke udfyldt",
        "error.va.gen.02": "Ugyldigt felt",
        "error.va.sf-cc-num.01": "Ugyldigt kortnummer",
        "error.va.sf-cc-num.03": "Ikke-underst\xf8ttet kort indtastet",
        "error.va.sf-cc-dat.01": "Kort for gammelt",
        "error.va.sf-cc-dat.02": "Dato for langt ude i fremtiden",
        "error.giftcard.no-balance": "Saldoen p\xe5 gavekortet er 0",
        "error.giftcard.card-error":
          "Vi har ikke et gavekort med dette nummer i vores optegnelser",
        "error.giftcard.currency-error":
          "Gavekort er kun gyldige i udstedelsesvalutaen",
        "amazonpay.signout": "Log ud af Amazon",
        "amazonpay.changePaymentDetails": "Skift betalingsoplysninger",
        "partialPayment.warning":
          "V\xe6lg en anden betalingsm\xe5de til betaling af restbel\xf8bet",
        "partialPayment.remainingBalance":
          "Restbel\xf8bet vil v\xe6re %{amount}",
        "bankTransfer.beneficiary": "Betalingsmodtager",
        "bankTransfer.iban": "IBAN",
        "bankTransfer.bic": "BIC",
        "bankTransfer.reference": "Reference",
        "bankTransfer.introduction":
          "Forts\xe6t med at oprette ny betalingsoverf\xf8rsel via bank. Du kan bruge oplysningerne p\xe5 den f\xf8lgende sk\xe6rm til at afslutte betalingen.",
        "bankTransfer.instructions":
          "Tak for dit k\xf8b. Brug f\xf8lgende oplysninger til at gennemf\xf8re din betaling.",
        "bacs.accountHolderName": "Bankkontohavers navn",
        "bacs.accountHolderName.invalid": "Ugyldigt navn p\xe5 bankkontohaver",
        "bacs.accountNumber": "Bankkontonummer",
        "bacs.accountNumber.invalid": "Ugyldigt bankkontonummer",
        "bacs.bankLocationId": "Registreringsnummer",
        "bacs.bankLocationId.invalid": "Ugyldigt registreringsnummer",
        "bacs.consent.amount":
          "Jeg accepterer, at bel\xf8bet ovenfor tr\xe6kkes p\xe5 min bankkonto.",
        "bacs.consent.account":
          "Jeg bekr\xe6fter, at kontoen er i mit navn, og at jeg er den eneste underskriver, der kr\xe6ves for at godkende direkte debitering af kontoen.",
        edit: "Rediger",
        "bacs.confirm": "Bekr\xe6ft, og betal",
        "bacs.result.introduction":
          "Download vejledningen til direkte debitering (fuldmagt til direkte debitering)",
        "download.pdf": "Download PDF",
        "creditCard.encryptedCardNumber.aria.iframeTitle":
          "Iframe til sikret kortnummer",
        "creditCard.encryptedCardNumber.aria.label": "Kortnummerfelt",
        "creditCard.encryptedExpiryDate.aria.iframeTitle":
          "Iframe til udl\xf8bsdato for sikret kort",
        "creditCard.encryptedExpiryDate.aria.label": "Felt til udl\xf8bsdato",
        "creditCard.encryptedExpiryMonth.aria.iframeTitle":
          "Iframe til udl\xf8bsm\xe5ned for sikret kort",
        "creditCard.encryptedExpiryMonth.aria.label":
          "Felt til udl\xf8bsm\xe5ned",
        "creditCard.encryptedExpiryYear.aria.iframeTitle":
          "Iframe til udl\xf8bs\xe5r for sikret kort",
        "creditCard.encryptedExpiryYear.aria.label": "Felt til udl\xf8bs\xe5r",
        "creditCard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe til sikkerhedskode for sikret kort",
        "creditCard.encryptedSecurityCode.aria.label":
          "Felt til sikkerhedskode",
        "giftcard.encryptedCardNumber.aria.iframeTitle":
          "Iframe til nummer for sikret gavekort",
        "giftcard.encryptedCardNumber.aria.label": "Felt til gavekortnummer",
        "giftcard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe til sikkerhedskode for sikret gavekort",
        "giftcard.encryptedSecurityCode.aria.label":
          "Felt til sikkerhedskode for gavekort",
        giftcardTransactionLimit:
          "Maks. %{amount} tilladt pr. transaktion p\xe5 dette gavekort",
        "ach.encryptedBankAccountNumber.aria.iframeTitle":
          "Iframe til sikret bankkontonummer",
        "ach.encryptedBankAccountNumber.aria.label": "Felt til bankkonto",
        "ach.encryptedBankLocationId.aria.iframeTitle":
          "Iframe til registreringsnummer for sikret bank",
        "ach.encryptedBankLocationId.aria.label":
          "Felt til registreringsnummer for bank",
      },
    }),
    Gu = Object.freeze({
      __proto__: null,
      default: {
        payButton: "Zahlen",
        "payButton.redirecting": "Umleiten\xa0\u2026",
        storeDetails: "F\xfcr zuk\xfcnftige Zahlvorg\xe4nge speichern",
        "creditCard.holderName": "Name auf der Karte",
        "creditCard.holderName.placeholder": "A. M\xfcller",
        "creditCard.holderName.invalid": "Ung\xfcltiger Karteninhabername",
        "creditCard.numberField.title": "Kartennummer",
        "creditCard.numberField.placeholder": "1234 5678 9012 3456",
        "creditCard.expiryDateField.title": "Ablaufdatum",
        "creditCard.expiryDateField.placeholder": "MM/JJ",
        "creditCard.expiryDateField.month": "Monat",
        "creditCard.expiryDateField.month.placeholder": "MM",
        "creditCard.expiryDateField.year.placeholder": "JJ",
        "creditCard.expiryDateField.year": "Jahr",
        "creditCard.cvcField.title": "CVC / CVV",
        "creditCard.cvcField.placeholder": "123",
        "creditCard.storeDetailsButton": "F\xfcr das n\xe4chste Mal speichern",
        "creditCard.cvcField.placeholder.4digits": "4 Stellen",
        "creditCard.cvcField.placeholder.3digits": "3 Stellen",
        "creditCard.taxNumber.placeholder": "JJMMTT/0123456789",
        installments: "Anzahl der Raten",
        installmentOption: "%{times}x %{partialValue}",
        installmentOptionMonths: "%{times} Monate",
        "installments.oneTime": "Einmalige Zahlung",
        "installments.installments": "Ratenzahlung",
        "installments.revolving": "Ratenzahlung",
        "sepaDirectDebit.ibanField.invalid": "Ung\xfcltige Kontonummer",
        "sepaDirectDebit.nameField.placeholder": "L. Schmidt",
        "sepa.ownerName": "Name des Kontoinhabers",
        "sepa.ibanNumber": "Kontonummer (IBAN)",
        "error.title": "Fehler",
        "error.subtitle.redirect": "Weiterleitung fehlgeschlagen",
        "error.subtitle.payment": "Zahlung fehlgeschlagen",
        "error.subtitle.refused": "Zahlvorgang verweigert",
        "error.message.unknown": "Es ist ein unbekannter Fehler aufgetreten.",
        "idealIssuer.selectField.title": "Bank",
        "idealIssuer.selectField.placeholder": "W\xe4hlen Sie Ihre Bank",
        "creditCard.success": "Zahlung erfolgreich",
        loading: "Laden \u2026",
        continue: "Weiter",
        continueTo: "Weiter zu",
        "wechatpay.timetopay": "Sie haben noch %@ um zu zahlen",
        "wechatpay.scanqrcode": "QR-Code scannen",
        personalDetails: "Pers\xf6nliche Angaben",
        companyDetails: "Unternehmensdaten",
        "companyDetails.name": "Unternehmensname",
        "companyDetails.registrationNumber": "Registrierungsnummer",
        socialSecurityNumber: "Sozialversicherungsnummer",
        firstName: "Vorname",
        infix: "Vorwahl",
        lastName: "Nachname",
        mobileNumber: "Handynummer",
        "mobileNumber.invalid": "Ung\xfcltige Handynummer",
        city: "Stadt",
        postalCode: "Postleitzahl",
        countryCode: "Landesvorwahl",
        telephoneNumber: "Telefonnummer",
        dateOfBirth: "Geburtsdatum",
        shopperEmail: "E-Mail-Adresse",
        gender: "Geschlecht",
        male: "M\xe4nnlich",
        female: "Weiblich",
        billingAddress: "Rechnungsadresse",
        street: "Stra\xdfe",
        stateOrProvince: "Bundesland",
        country: "Land",
        houseNumberOrName: "Hausnummer",
        separateDeliveryAddress: "Abweichende Lieferadresse angeben",
        deliveryAddress: "Lieferadresse",
        zipCode: "PLZ",
        apartmentSuite: "Wohnung/Geschoss",
        provinceOrTerritory: "Provinz oder Territorium",
        cityTown: "Ort",
        address: "Stra\xdfe und Hausnummer",
        state: "Bundesstaat",
        "field.title.optional": "(optional)",
        "creditCard.cvcField.title.optional": "CVC / CVV (optional)",
        "issuerList.wallet.placeholder": "Virtuelle Brieftasche ausw\xe4hlen",
        privacyPolicy: "Datenschutz",
        "afterPay.agreement": "Ich bin mit den %@ von AfterPay einverstanden",
        paymentConditions: "Zahlungsbedingungen",
        openApp: "App \xf6ffnen",
        "voucher.readInstructions": "Anweisungen lesen",
        "voucher.introduction":
          "Vielen Dank f\xfcr Ihren Kauf. Bitte schlie\xdfen Sie Ihre Zahlung unter Verwendung des folgenden Gutscheins ab.",
        "voucher.expirationDate": "G\xfcltig bis",
        "voucher.alternativeReference": "Alternative Referenz",
        "dragonpay.voucher.non.bank.selectField.placeholder":
          "Anbieter ausw\xe4hlen",
        "dragonpay.voucher.bank.selectField.placeholder": "Bank ausw\xe4hlen",
        "voucher.paymentReferenceLabel": "Zahlungsreferenz",
        "voucher.surcharge": "Inkl. % @Zuschlag",
        "voucher.introduction.doku":
          "Vielen Dank f\xfcr Ihren Kauf. Bitte schlie\xdfen Sie Ihre Zahlung unter Verwendung der folgenden Informationen ab.",
        "voucher.shopperName": "Name des K\xe4ufers",
        "voucher.merchantName": "H\xe4ndler",
        "voucher.introduction.econtext":
          "Vielen Dank f\xfcr Ihren Kauf. Bitte schlie\xdfen Sie Ihre Zahlung unter Verwendung der folgenden Informationen ab.",
        "voucher.telephoneNumber": "Telefonnummer",
        "voucher.shopperReference": "Kundenreferenz",
        "voucher.collectionInstitutionNumber":
          "Nummer der Zahlungsannahmestelle",
        "voucher.econtext.telephoneNumber.invalid":
          "Die Telefonnummer muss 10- oder 11-stellig sein",
        "boletobancario.btnLabel": "Boleto generieren",
        "boleto.sendCopyToEmail": "Eine Kopie an meine E-Mail-Adresse senden",
        "button.copy": "Kopieren",
        "button.download": "Herunterladen",
        "creditCard.storedCard.description.ariaLabel":
          "Gespeicherte Karte endet auf %@",
        "voucher.entity": "Entit\xe4t",
        donateButton: "Spenden",
        notNowButton: "Nicht jetzt",
        thanksForYourSupport: "Danke f\xfcr Ihre Unterst\xfctzung!",
        preauthorizeWith: "Vorautorisieren mit",
        confirmPreauthorization: "Vorautorisierung best\xe4tigen",
        confirmPurchase: "Kauf best\xe4tigen",
        applyGiftcard: "Einl\xf6sen",
        giftcardBalance: "Saldo der Geschenkkarte",
        deductedBalance: "Abgezogener Betrag",
        "creditCard.pin.title": "PIN",
        "creditCard.encryptedPassword.label":
          "Die ersten zwei Ziffern des Kartenpassworts",
        "creditCard.encryptedPassword.placeholder": "12",
        "creditCard.encryptedPassword.invalid": "Ung\xfcltiges Passwort",
        "creditCard.taxNumber.label":
          "Geburtsdatum des Karteninhabers (JJMMTT) oder Unternehmensregistrierungsnummer (10-stellig)",
        "creditCard.taxNumber.labelAlt":
          "Unternehmensregistrierungsnummer (10-stellig)",
        "creditCard.taxNumber.invalid":
          "Ung\xfcltiges Geburtsdatum des Karteninhabers oder ung\xfcltige Unternehmensregistrierungsnummer",
        "storedPaymentMethod.disable.button": "Entfernen",
        "storedPaymentMethod.disable.confirmation":
          "Gespeicherte Zahlungsmethode entfernen",
        "storedPaymentMethod.disable.confirmButton": "Ja, entfernen",
        "storedPaymentMethod.disable.cancelButton": "Abbrechen",
        "ach.bankAccount": "Bankkonto",
        "ach.accountHolderNameField.title": "Name des Kontoinhabers",
        "ach.accountHolderNameField.placeholder": "A. M\xfcller",
        "ach.accountHolderNameField.invalid": "Ung\xfcltiger Kontoinhabername",
        "ach.accountNumberField.title": "Kontonummer",
        "ach.accountNumberField.invalid": "Ung\xfcltige Kontonummer",
        "ach.accountLocationField.title": "ABA-Nummer",
        "ach.accountLocationField.invalid": "Ung\xfcltige ABA-Nummer",
        "select.state": "Bundesstaat ausw\xe4hlen",
        "select.stateOrProvince": "Bundesland oder Provinz/Region ausw\xe4hlen",
        "select.provinceOrTerritory": "Provinz oder Territorium ausw\xe4hlen",
        "select.country": "Land ausw\xe4hlen",
        "select.noOptionsFound": "Keine Optionen gefunden",
        "select.filter.placeholder": "Suche\xa0\u2026",
        "telephoneNumber.invalid": "Ung\xfcltige Telefonnummer",
        qrCodeOrApp: "oder",
        "paypal.processingPayment": "Zahlung wird verarbeitet\xa0\u2026",
        generateQRCode: "QR-Code generieren",
        "await.waitForConfirmation": "Warten auf Best\xe4tigung",
        "mbway.confirmPayment":
          "Best\xe4tigen Sie Ihre Zahlung in der MB WAY-App",
        "shopperEmail.invalid": "Ung\xfcltige E-Mail-Adresse",
        "dateOfBirth.format": "TT.MM.JJJJ",
        "dateOfBirth.invalid": "Sie m\xfcssen mindestens 18 Jahre alt sein",
        "blik.confirmPayment":
          "\xd6ffnen Sie Ihre Banking-App, um die Zahlung zu best\xe4tigen.",
        "blik.invalid": "6 Zahlen eingeben",
        "blik.code": "6-stelliger Code",
        "blik.help": "Rufen Sie den Code \xfcber Ihre Banking-App ab.",
        "swish.pendingMessage":
          "Es kann sein, dass der Status bis zu 10 Minuten nach dem Scan \u201eausstehend\u201c lautet. Wenn Sie w\xe4hrenddessen einen neuen Zahlungsversuch unternehmen, kann es sein, dass Ihnen mehrere Betr\xe4ge in Rechnung gestellt werden.",
        "error.va.gen.01": "Feld nicht ausgef\xfcllt",
        "error.va.gen.02": "Feld ung\xfcltig",
        "error.va.sf-cc-num.01": "Ung\xfcltige Kartennummer",
        "error.va.sf-cc-num.03": "Nicht unterst\xfctzte Karte eingegeben",
        "error.va.sf-cc-dat.01": "Karte zu alt",
        "error.va.sf-cc-dat.02": "Datum zu weit in der Zukunft",
        "error.giftcard.no-balance":
          "Auf dieser Geschenkkarte ist kein Guthaben vorhanden",
        "error.giftcard.card-error":
          "Es gibt in unserem System keine Geschenkkarte mit dieser Nummer",
        "error.giftcard.currency-error":
          "Geschenkkarten sind nur in der W\xe4hrung g\xfcltig, in der sie ausgestellt wurden",
        "amazonpay.signout": "Von Amazon abmelden",
        "amazonpay.changePaymentDetails": "Zahlungsinformationen \xe4ndern",
        "partialPayment.warning":
          "W\xe4hlen Sie eine andere Zahlungsmethode zur Zahlung des Restbetrags",
        "partialPayment.remainingBalance":
          "Es verbleibt ein Restbetrag von %{amount}",
        "bankTransfer.beneficiary": "Empf\xe4nger",
        "bankTransfer.iban": "IBAN",
        "bankTransfer.bic": "BIC",
        "bankTransfer.reference": "Referenz",
        "bankTransfer.introduction":
          "Fortfahren, um eine neue Bank\xfcberweisungszahlung zu erstellen. Sie k\xf6nnen die Informationen auf dem n\xe4chsten Bildschirm verwenden, um diese Zahlung abzuschlie\xdfen.",
        "bankTransfer.instructions":
          "Vielen Dank f\xfcr Ihren Kauf. Bitte schlie\xdfen Sie Ihre Zahlung unter Verwendung der folgenden Informationen ab.",
        "bacs.accountHolderName": "Name des Bankkontoinhabers",
        "bacs.accountHolderName.invalid": "Ung\xfcltiger Bankkontoinhabername",
        "bacs.accountNumber": "Bankkontonummer",
        "bacs.accountNumber.invalid": "Ung\xfcltige Bankkontonummer",
        "bacs.bankLocationId": "Bankleitzahl",
        "bacs.bankLocationId.invalid": "Ung\xfcltige Bankleitzahl",
        "bacs.consent.amount":
          "Ich bin damit einverstanden, dass der oben genannte Betrag von meinem Bankkonto abgebucht wird.",
        "bacs.consent.account":
          "Ich best\xe4tige, dass das Konto unter meinem Namen l\xe4uft und ich der einzige erforderliche Unterzeichner bin, um die Lastschrift f\xfcr dieses Konto zu autorisieren.",
        edit: "Bearbeiten",
        "bacs.confirm": "Best\xe4tigen und bezahlen",
        "bacs.result.introduction":
          "Laden Sie Ihre Lastschriftanweisung (DDI/Einzugserm\xe4chtigung) herunter",
        "download.pdf": "PDF herunterladen",
        "creditCard.encryptedCardNumber.aria.iframeTitle":
          "Iframe f\xfcr Nummer der gesicherten Karte",
        "creditCard.encryptedCardNumber.aria.label":
          "Feld \u201eKartennummer\u201c",
        "creditCard.encryptedExpiryDate.aria.iframeTitle":
          "Iframe f\xfcr Ablaufdatum der gesicherten Karte",
        "creditCard.encryptedExpiryDate.aria.label":
          "Feld \u201eAblaufdatum\u201c",
        "creditCard.encryptedExpiryMonth.aria.iframeTitle":
          "Iframe f\xfcr Monat des Ablaufdatums der gesicherten Karte",
        "creditCard.encryptedExpiryMonth.aria.label":
          "Feld \u201eMonat des Ablaufdatums\u201c",
        "creditCard.encryptedExpiryYear.aria.iframeTitle":
          "Iframe f\xfcr Jahr des Ablaufdatums der gesicherten Karte",
        "creditCard.encryptedExpiryYear.aria.label":
          "Feld \u201eJahr des Ablaufdatums\u201c",
        "creditCard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe f\xfcr Sicherheitscode der gesicherten Karte",
        "creditCard.encryptedSecurityCode.aria.label":
          "Feld \u201eSicherheitscode\u201c",
        "giftcard.encryptedCardNumber.aria.iframeTitle":
          "Iframe f\xfcr Geschenkkartennummer der gesicherten Karte",
        "giftcard.encryptedCardNumber.aria.label":
          "Feld \u201eGeschenkkartennummer\u201c",
        "giftcard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe f\xfcr Sicherheitscode der gesicherten Geschenkkarte",
        "giftcard.encryptedSecurityCode.aria.label":
          "Feld \u201eSicherheitscode der Geschenkkarte\u201c",
        giftcardTransactionLimit:
          "Der zul\xe4ssige H\xf6chstbetrag pro Transaktion f\xfcr diese Geschenkkarte ist %{amount}",
        "ach.encryptedBankAccountNumber.aria.iframeTitle":
          "Iframe f\xfcr gesicherte Bankkontonummer",
        "ach.encryptedBankAccountNumber.aria.label":
          "Feld \u201eBankkonto\u201c",
        "ach.encryptedBankLocationId.aria.iframeTitle":
          "Iframe f\xfcr gesicherte BLZ",
        "ach.encryptedBankLocationId.aria.label": "Bankleitzahl-Feld",
      },
    }),
    Yu = Object.freeze({
      __proto__: null,
      default: {
        payButton: "\u03a0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae",
        "payButton.redirecting":
          "\u0391\u03bd\u03b1\u03ba\u03b1\u03c4\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7...",
        storeDetails:
          "\u0391\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b5\u03c0\u03cc\u03bc\u03b5\u03bd\u03b7 \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae \u03bc\u03bf\u03c5",
        "creditCard.holderName":
          "\u038c\u03bd\u03bf\u03bc\u03b1 \u03c3\u03c4\u03b7\u03bd \u03ba\u03ac\u03c1\u03c4\u03b1",
        "creditCard.holderName.placeholder":
          "\u0393. \u03a0\u03b1\u03c0\u03b1\u03b4\u03ac\u03ba\u03b7\u03c2",
        "creditCard.holderName.invalid":
          "\u039c\u03b7 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf \u03cc\u03bd\u03bf\u03bc\u03b1 \u03ba\u03b1\u03c4\u03cc\u03c7\u03bf\u03c5 \u03ba\u03ac\u03c1\u03c4\u03b1\u03c2",
        "creditCard.numberField.title":
          "\u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03ba\u03ac\u03c1\u03c4\u03b1\u03c2",
        "creditCard.numberField.placeholder": "1234 5678 9012 3456",
        "creditCard.expiryDateField.title":
          "\u0397\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1 \u03bb\u03ae\u03be\u03b7\u03c2",
        "creditCard.expiryDateField.placeholder": "\u039c\u039c/\u0395\u0395",
        "creditCard.expiryDateField.month": "\u039c\u03ae\u03bd\u03b1\u03c2",
        "creditCard.expiryDateField.month.placeholder": "\u039c\u039c",
        "creditCard.expiryDateField.year.placeholder": "\u0395\u0395",
        "creditCard.expiryDateField.year": "\u0388\u03c4\u03bf\u03c2",
        "creditCard.cvcField.title": "CVC/CVV",
        "creditCard.cvcField.placeholder": "123",
        "creditCard.storeDetailsButton":
          "\u0391\u03c0\u03bf\u03bc\u03bd\u03b7\u03bc\u03cc\u03bd\u03b5\u03c5\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b5\u03c0\u03cc\u03bc\u03b5\u03bd\u03b7 \u03c6\u03bf\u03c1\u03ac",
        "creditCard.cvcField.placeholder.4digits":
          "4\u03c8\u03ae\u03c6\u03b9\u03bf\u03c2",
        "creditCard.cvcField.placeholder.3digits":
          "3\u03c8\u03ae\u03c6\u03b9\u03bf\u03c2",
        "creditCard.taxNumber.placeholder":
          "\u0395\u0395\u039c\u039c\u0397\u0397 / 0123456789",
        installments:
          "\u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03b4\u03cc\u03c3\u03b5\u03c9\u03bd",
        installmentOption: "%{times}x %{partialValue}",
        installmentOptionMonths: "%{times} \u03bc\u03ae\u03bd\u03b5\u03c2",
        "installments.oneTime":
          "\u0395\u03c6\u03ac\u03c0\u03b1\u03be \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae",
        "installments.installments":
          "\u03a0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae \u03bc\u03b5 \u03b4\u03cc\u03c3\u03b5\u03b9\u03c2",
        "installments.revolving":
          "\u0391\u03bd\u03b1\u03ba\u03c5\u03ba\u03bb\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7 \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae",
        "sepaDirectDebit.ibanField.invalid":
          "\u039c\u03b7 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf\u03c2 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd",
        "sepaDirectDebit.nameField.placeholder":
          "\u0393. \u03a0\u03b1\u03c0\u03b1\u03b4\u03ac\u03ba\u03b7\u03c2",
        "sepa.ownerName":
          "\u038c\u03bd\u03bf\u03bc\u03b1 \u03ba\u03b1\u03c4\u03cc\u03c7\u03bf\u03c5",
        "sepa.ibanNumber":
          "\u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd (IBAN)",
        "error.title": "\u03a3\u03c6\u03ac\u03bb\u03bc\u03b1",
        "error.subtitle.redirect":
          "\u0397 \u03b1\u03bd\u03b1\u03ba\u03b1\u03c4\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 \u03b1\u03c0\u03ad\u03c4\u03c5\u03c7\u03b5",
        "error.subtitle.payment":
          "\u0397 \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae \u03b1\u03c0\u03ad\u03c4\u03c5\u03c7\u03b5",
        "error.subtitle.refused":
          "\u0397 \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae \u03b1\u03c0\u03bf\u03c1\u03c1\u03af\u03c6\u03b8\u03b7\u03ba\u03b5",
        "error.message.unknown":
          "\u03a0\u03c1\u03bf\u03ad\u03ba\u03c5\u03c8\u03b5 \u03ac\u03b3\u03bd\u03c9\u03c3\u03c4\u03bf \u03c3\u03c6\u03ac\u03bb\u03bc\u03b1",
        "idealIssuer.selectField.title":
          "\u03a4\u03c1\u03ac\u03c0\u03b5\u03b6\u03b1",
        "idealIssuer.selectField.placeholder":
          "\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03c4\u03b7\u03bd \u03c4\u03c1\u03ac\u03c0\u03b5\u03b6\u03ac \u03c3\u03b1\u03c2",
        "creditCard.success":
          "\u0397 \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae \u03bf\u03bb\u03bf\u03ba\u03bb\u03b7\u03c1\u03ce\u03b8\u03b7\u03ba\u03b5 \u03b5\u03c0\u03b9\u03c4\u03c5\u03c7\u03ce\u03c2",
        loading: "\u03a6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7...",
        continue: "\u03a3\u03c5\u03bd\u03ad\u03c7\u03b5\u03b9\u03b1",
        continueTo:
          "\u039c\u03b5\u03c4\u03ac\u03b2\u03b1\u03c3\u03b7 \u03c3\u03c4\u03b7\u03bd",
        "wechatpay.timetopay":
          "\u0388\u03c7\u03b5\u03c4\u03b5 \u03c3\u03c4\u03b7 \u03b4\u03b9\u03ac\u03b8\u03b5\u03c3\u03ae \u03c3\u03b1\u03c2 %@ \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae",
        "wechatpay.scanqrcode":
          "\u03a3\u03ac\u03c1\u03c9\u03c3\u03b7 \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03cd QR",
        personalDetails:
          "\u03a0\u03c1\u03bf\u03c3\u03c9\u03c0\u03b9\u03ba\u03ac \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03b1",
        companyDetails:
          "\u03a3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03b1 \u03b5\u03c4\u03b1\u03b9\u03c1\u03b5\u03af\u03b1\u03c2",
        "companyDetails.name":
          "\u038c\u03bd\u03bf\u03bc\u03b1 \u03b5\u03c4\u03b1\u03b9\u03c1\u03b5\u03af\u03b1\u03c2",
        "companyDetails.registrationNumber":
          "\u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03bc\u03b7\u03c4\u03c1\u03ce\u03bf\u03c5",
        socialSecurityNumber:
          "\u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c6\u03bf\u03c1\u03bf\u03bb\u03bf\u03b3\u03b9\u03ba\u03bf\u03cd \u03bc\u03b7\u03c4\u03c1\u03ce\u03bf\u03c5",
        firstName: "\u038c\u03bd\u03bf\u03bc\u03b1",
        infix: "\u03a0\u03c1\u03cc\u03b8\u03b5\u03bc\u03b1",
        lastName: "\u0395\u03c0\u03ce\u03bd\u03c5\u03bc\u03bf",
        mobileNumber:
          "\u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03ba\u03b9\u03bd\u03b7\u03c4\u03bf\u03cd",
        "mobileNumber.invalid":
          "\u039c\u03b7 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf\u03c2 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03ba\u03b9\u03bd\u03b7\u03c4\u03bf\u03cd",
        city: "\u03a0\u03cc\u03bb\u03b7",
        postalCode:
          "\u03a4\u03b1\u03c7\u03c5\u03b4\u03c1\u03bf\u03bc\u03b9\u03ba\u03cc\u03c2 \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2",
        countryCode:
          "\u039a\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2 \u03c7\u03ce\u03c1\u03b1\u03c2",
        telephoneNumber:
          "\u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c4\u03b7\u03bb\u03b5\u03c6\u03ce\u03bd\u03bf\u03c5",
        dateOfBirth:
          "\u0397\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1 \u03b3\u03ad\u03bd\u03bd\u03b7\u03c3\u03b7\u03c2",
        shopperEmail:
          "\u0394\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 email",
        gender: "\u03a6\u03cd\u03bb\u03bf",
        male: "\u0386\u03bd\u03c4\u03c1\u03b1\u03c2",
        female: "\u0393\u03c5\u03bd\u03b1\u03af\u03ba\u03b1",
        billingAddress:
          "\u0394\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 \u03c4\u03b9\u03bc\u03bf\u03bb\u03cc\u03b3\u03b7\u03c3\u03b7\u03c2",
        street: "\u039f\u03b4\u03cc\u03c2",
        stateOrProvince:
          "\u03a0\u03bf\u03bb\u03b9\u03c4\u03b5\u03af\u03b1 \u03ae \u03b5\u03c0\u03b1\u03c1\u03c7\u03af\u03b1",
        country: "\u03a7\u03ce\u03c1\u03b1",
        houseNumberOrName:
          "\u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03bf\u03b9\u03ba\u03af\u03b1\u03c2",
        separateDeliveryAddress:
          "\u039a\u03b1\u03b8\u03bf\u03c1\u03af\u03c3\u03c4\u03b5 \u03bc\u03b9\u03b1 \u03be\u03b5\u03c7\u03c9\u03c1\u03b9\u03c3\u03c4\u03ae \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 \u03c0\u03b1\u03c1\u03ac\u03b4\u03bf\u03c3\u03b7\u03c2",
        deliveryAddress:
          "\u0394\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 \u03c0\u03b1\u03c1\u03ac\u03b4\u03bf\u03c3\u03b7\u03c2",
        zipCode:
          "\u03a4\u03b1\u03c7\u03c5\u03b4\u03c1\u03bf\u03bc\u03b9\u03ba\u03cc\u03c2 \u03ba\u03ce\u03b4\u03b9\u03ba\u03b1\u03c2",
        apartmentSuite:
          "\u0394\u03b9\u03b1\u03bc\u03ad\u03c1\u03b9\u03c3\u03bc\u03b1/\u0393\u03c1\u03b1\u03c6\u03b5\u03af\u03bf",
        provinceOrTerritory:
          "\u0395\u03c0\u03b1\u03c1\u03c7\u03af\u03b1 \u03ae \u03c0\u03b5\u03c1\u03b9\u03c6\u03ad\u03c1\u03b5\u03b9\u03b1",
        cityTown:
          "\u03a0\u03cc\u03bb\u03b7 / \u039a\u03bf\u03b9\u03bd\u03cc\u03c4\u03b7\u03c4\u03b1",
        address: "\u0394\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7",
        state: "\u03a0\u03bf\u03bb\u03b9\u03c4\u03b5\u03af\u03b1",
        "field.title.optional":
          "(\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc)",
        "creditCard.cvcField.title.optional":
          "CVC/CVV (\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03ac)",
        "issuerList.wallet.placeholder":
          "\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03c4\u03bf \u03c0\u03bf\u03c1\u03c4\u03bf\u03c6\u03cc\u03bb\u03b9 \u03c3\u03b1\u03c2",
        privacyPolicy:
          "\u03a0\u03bf\u03bb\u03b9\u03c4\u03b9\u03ba\u03ae \u03b1\u03c0\u03bf\u03c1\u03c1\u03ae\u03c4\u03bf\u03c5",
        "afterPay.agreement":
          "\u0391\u03c0\u03bf\u03b4\u03ad\u03c7\u03bf\u03bc\u03b1\u03b9 \u03c4\u03bf\u03c5\u03c2 %@ \u03c4\u03bf\u03c5 AfterPay",
        paymentConditions:
          "\u03cc\u03c1\u03bf\u03c5\u03c2 \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae\u03c2",
        openApp:
          "\u0386\u03bd\u03bf\u03b9\u03b3\u03bc\u03b1 \u03c4\u03b7\u03c2 \u03b5\u03c6\u03b1\u03c1\u03bc\u03bf\u03b3\u03ae\u03c2",
        "voucher.readInstructions":
          "\u0394\u03b9\u03b1\u03b2\u03ac\u03c3\u03c4\u03b5 \u03c4\u03b9\u03c2 \u03bf\u03b4\u03b7\u03b3\u03af\u03b5\u03c2",
        "voucher.introduction":
          "\u03a3\u03b1\u03c2 \u03b5\u03c5\u03c7\u03b1\u03c1\u03b9\u03c3\u03c4\u03bf\u03cd\u03bc\u03b5 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b1\u03b3\u03bf\u03c1\u03ac. \u03a7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03c4\u03b5 \u03c4\u03bf \u03c0\u03b1\u03c1\u03b1\u03ba\u03ac\u03c4\u03c9 \u03ba\u03bf\u03c5\u03c0\u03cc\u03bd\u03b9 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03bf\u03bb\u03bf\u03ba\u03bb\u03b7\u03c1\u03ce\u03c3\u03b5\u03c4\u03b5 \u03c4\u03b7\u03bd \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae.",
        "voucher.expirationDate":
          "\u0397\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1 \u03bb\u03ae\u03be\u03b7\u03c2",
        "voucher.alternativeReference":
          "\u0395\u03bd\u03b1\u03bb\u03bb\u03b1\u03ba\u03c4\u03b9\u03ba\u03ae \u03b1\u03bd\u03b1\u03c6\u03bf\u03c1\u03ac",
        "dragonpay.voucher.non.bank.selectField.placeholder":
          "\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03c4\u03bf\u03bd \u03c0\u03ac\u03c1\u03bf\u03c7\u03cc \u03c3\u03b1\u03c2",
        "dragonpay.voucher.bank.selectField.placeholder":
          "\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03c4\u03b7\u03bd \u03c4\u03c1\u03ac\u03c0\u03b5\u03b6\u03ac \u03c3\u03b1\u03c2",
        "voucher.paymentReferenceLabel":
          "\u0391\u03bd\u03b1\u03c6\u03bf\u03c1\u03ac \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae\u03c2",
        "voucher.surcharge":
          "\u03a0\u03b5\u03c1\u03b9\u03bb\u03b1\u03bc\u03b2\u03ac\u03bd\u03b5\u03c4\u03b1\u03b9 \u03c0\u03c1\u03cc\u03c3\u03b8\u03b5\u03c4\u03b7 \u03c7\u03c1\u03ad\u03c9\u03c3\u03b7 %@",
        "voucher.introduction.doku":
          "\u03a3\u03b1\u03c2 \u03b5\u03c5\u03c7\u03b1\u03c1\u03b9\u03c3\u03c4\u03bf\u03cd\u03bc\u03b5 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b1\u03b3\u03bf\u03c1\u03ac. \u03a7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03c4\u03b5 \u03c4\u03b9\u03c2 \u03b1\u03ba\u03cc\u03bb\u03bf\u03c5\u03b8\u03b5\u03c2 \u03c0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03bf\u03bb\u03bf\u03ba\u03bb\u03b7\u03c1\u03ce\u03c3\u03b5\u03c4\u03b5 \u03c4\u03b7\u03bd \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae.",
        "voucher.shopperName":
          "\u038c\u03bd\u03bf\u03bc\u03b1 \u03b1\u03b3\u03bf\u03c1\u03b1\u03c3\u03c4\u03ae",
        "voucher.merchantName": "\u0388\u03bc\u03c0\u03bf\u03c1\u03bf\u03c2",
        "voucher.introduction.econtext":
          "\u03a3\u03b1\u03c2 \u03b5\u03c5\u03c7\u03b1\u03c1\u03b9\u03c3\u03c4\u03bf\u03cd\u03bc\u03b5 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b1\u03b3\u03bf\u03c1\u03ac. \u03a7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03c4\u03b5 \u03c4\u03b9\u03c2 \u03b1\u03ba\u03cc\u03bb\u03bf\u03c5\u03b8\u03b5\u03c2 \u03c0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03bf\u03bb\u03bf\u03ba\u03bb\u03b7\u03c1\u03ce\u03c3\u03b5\u03c4\u03b5 \u03c4\u03b7\u03bd \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae.",
        "voucher.telephoneNumber":
          "\u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c4\u03b7\u03bb\u03b5\u03c6\u03ce\u03bd\u03bf\u03c5",
        "voucher.shopperReference":
          "\u0391\u03bd\u03b1\u03c6\u03bf\u03c1\u03ac \u03b1\u03b3\u03bf\u03c1\u03b1\u03c3\u03c4\u03ae",
        "voucher.collectionInstitutionNumber":
          "\u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c0\u03c1\u03b1\u03ba\u03c4\u03bf\u03c1\u03b5\u03af\u03bf\u03c5 \u03b5\u03b9\u03c3\u03c0\u03c1\u03ac\u03be\u03b5\u03c9\u03bd",
        "voucher.econtext.telephoneNumber.invalid":
          "\u039f \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c4\u03b7\u03bb\u03b5\u03c6\u03ce\u03bd\u03bf\u03c5 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9 10 \u03ae 11 \u03c8\u03b7\u03c6\u03af\u03b1",
        "boletobancario.btnLabel":
          "\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 Boleto",
        "boleto.sendCopyToEmail":
          "\u0391\u03c0\u03bf\u03c3\u03c4\u03bf\u03bb\u03ae \u03b1\u03bd\u03c4\u03b9\u03b3\u03c1\u03ac\u03c6\u03bf\u03c5 \u03c3\u03c4\u03b7 \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 email \u03bc\u03bf\u03c5",
        "button.copy": "\u0391\u03bd\u03c4\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae",
        "button.download": "\u039b\u03ae\u03c8\u03b7",
        "creditCard.storedCard.description.ariaLabel":
          "\u0397 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03c5\u03bc\u03ad\u03bd\u03b7 \u03ba\u03ac\u03c1\u03c4\u03b1 \u03c4\u03b5\u03bb\u03b5\u03b9\u03ce\u03bd\u03b5\u03b9 \u03c3\u03b5 %@",
        "voucher.entity": "\u039f\u03bd\u03c4\u03cc\u03c4\u03b7\u03c4\u03b1",
        donateButton: "\u0394\u03c9\u03c1\u03b5\u03ac",
        notNowButton: "\u038c\u03c7\u03b9 \u03c4\u03ce\u03c1\u03b1",
        thanksForYourSupport:
          "\u03a3\u03b1\u03c2 \u03b5\u03c5\u03c7\u03b1\u03c1\u03b9\u03c3\u03c4\u03bf\u03cd\u03bc\u03b5 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03c5\u03c0\u03bf\u03c3\u03c4\u03ae\u03c1\u03b9\u03be\u03b7!",
        preauthorizeWith:
          "\u03a0\u03c1\u03bf\u03b5\u03be\u03bf\u03c5\u03c3\u03b9\u03bf\u03b4\u03cc\u03c4\u03b7\u03c3\u03b7 \u03bc\u03b5",
        confirmPreauthorization:
          "\u0395\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03af\u03c9\u03c3\u03b7 \u03c0\u03c1\u03bf\u03b5\u03be\u03bf\u03c5\u03c3\u03b9\u03bf\u03b4\u03cc\u03c4\u03b7\u03c3\u03b7\u03c2",
        confirmPurchase:
          "\u0395\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03af\u03c9\u03c3\u03b7 \u03b1\u03b3\u03bf\u03c1\u03ac\u03c2",
        applyGiftcard:
          "\u0395\u03be\u03b1\u03c1\u03b3\u03cd\u03c1\u03c9\u03c3\u03b7",
        giftcardBalance:
          "\u03a5\u03c0\u03cc\u03bb\u03bf\u03b9\u03c0\u03bf \u03b4\u03c9\u03c1\u03bf\u03ba\u03ac\u03c1\u03c4\u03b1\u03c2",
        deductedBalance:
          "\u03a5\u03c0\u03cc\u03bb\u03bf\u03b9\u03c0\u03bf \u03c0\u03bf\u03c5 \u03b1\u03c6\u03b1\u03b9\u03c1\u03ad\u03b8\u03b7\u03ba\u03b5",
        "creditCard.pin.title":
          "\u039a\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2 PIN",
        "creditCard.encryptedPassword.label":
          "\u03a4\u03b1 \u03c0\u03c1\u03ce\u03c4\u03b1 2 \u03c8\u03b7\u03c6\u03af\u03b1 \u03c4\u03bf\u03c5 \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03cd \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2 \u03c4\u03b7\u03c2 \u03ba\u03ac\u03c1\u03c4\u03b1\u03c2",
        "creditCard.encryptedPassword.placeholder": "12",
        "creditCard.encryptedPassword.invalid":
          "\u039c\u03b7 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf\u03c2 \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2 \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2",
        "creditCard.taxNumber.label":
          "\u0397\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1 \u03b3\u03ad\u03bd\u03bd\u03b7\u03c3\u03b7\u03c2 \u03ba\u03b1\u03c4\u03cc\u03c7\u03bf\u03c5 \u03ba\u03ac\u03c1\u03c4\u03b1\u03c2 (YYMMDD) \u03ae \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03bc\u03b7\u03c4\u03c1\u03ce\u03bf\u03c5 \u03b5\u03c4\u03b1\u03b9\u03c1\u03b5\u03b9\u03ce\u03bd (10 \u03c8\u03b7\u03c6\u03af\u03b1)",
        "creditCard.taxNumber.labelAlt":
          "\u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03bc\u03b7\u03c4\u03c1\u03ce\u03bf\u03c5 \u03b5\u03c4\u03b1\u03b9\u03c1\u03b5\u03b9\u03ce\u03bd (10 \u03c8\u03b7\u03c6\u03af\u03b1)",
        "creditCard.taxNumber.invalid":
          "\u039c\u03b7 \u03ad\u03b3\u03ba\u03c5\u03c1\u03b7 \u03b7\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1 \u03b3\u03ad\u03bd\u03bd\u03b7\u03c3\u03b7\u03c2 \u03ba\u03b1\u03c4\u03cc\u03c7\u03bf\u03c5 \u03ba\u03ac\u03c1\u03c4\u03b1\u03c2 \u03ae \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03bc\u03b7\u03c4\u03c1\u03ce\u03bf\u03c5 \u03b5\u03c4\u03b1\u03b9\u03c1\u03b5\u03b9\u03ce\u03bd",
        "storedPaymentMethod.disable.button":
          "\u0391\u03c6\u03b1\u03af\u03c1\u03b5\u03c3\u03b7",
        "storedPaymentMethod.disable.confirmation":
          "\u0391\u03c6\u03b1\u03af\u03c1\u03b5\u03c3\u03b7 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03c5\u03bc\u03ad\u03bd\u03bf\u03c5 \u03c4\u03c1\u03cc\u03c0\u03bf\u03c5 \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae\u03c2",
        "storedPaymentMethod.disable.confirmButton":
          "\u039d\u03b1\u03b9, \u03b1\u03c6\u03b1\u03af\u03c1\u03b5\u03c3\u03b7",
        "storedPaymentMethod.disable.cancelButton":
          "\u0386\u03ba\u03c5\u03c1\u03bf",
        "ach.bankAccount":
          "\u03a4\u03c1\u03b1\u03c0\u03b5\u03b6\u03b9\u03ba\u03cc\u03c2 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc\u03c2",
        "ach.accountHolderNameField.title":
          "\u038c\u03bd\u03bf\u03bc\u03b1 \u03ba\u03b1\u03c4\u03cc\u03c7\u03bf\u03c5 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd",
        "ach.accountHolderNameField.placeholder":
          "\u0393. \u03a0\u03b1\u03c0\u03b1\u03b4\u03ac\u03ba\u03b7\u03c2",
        "ach.accountHolderNameField.invalid":
          "\u039c\u03b7 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf \u03cc\u03bd\u03bf\u03bc\u03b1 \u03ba\u03b1\u03c4\u03cc\u03c7\u03bf\u03c5 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd",
        "ach.accountNumberField.title":
          "\u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd",
        "ach.accountNumberField.invalid":
          "\u039c\u03b7 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf\u03c2 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd",
        "ach.accountLocationField.title":
          "\u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03b4\u03c1\u03bf\u03bc\u03bf\u03bb\u03cc\u03b3\u03b7\u03c3\u03b7\u03c2 ABA",
        "ach.accountLocationField.invalid":
          "\u039c\u03b7 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf\u03c2 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03b4\u03c1\u03bf\u03bc\u03bf\u03bb\u03cc\u03b3\u03b7\u03c3\u03b7\u03c2 ABA",
        "select.state":
          "\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03c0\u03bf\u03bb\u03b9\u03c4\u03b5\u03af\u03b1",
        "select.stateOrProvince":
          "\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03c0\u03bf\u03bb\u03b9\u03c4\u03b5\u03af\u03b1 \u03ae \u03b5\u03c0\u03b1\u03c1\u03c7\u03af\u03b1",
        "select.provinceOrTerritory":
          "\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03b5\u03c0\u03b1\u03c1\u03c7\u03af\u03b1 \u03ae \u03c0\u03b5\u03c1\u03b9\u03c6\u03ad\u03c1\u03b5\u03b9\u03b1",
        "select.country":
          "\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03c7\u03ce\u03c1\u03b1",
        "select.noOptionsFound":
          "\u0394\u03b5\u03bd \u03b2\u03c1\u03ad\u03b8\u03b7\u03ba\u03b1\u03bd \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",
        "select.filter.placeholder":
          "\u0391\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7...",
        "telephoneNumber.invalid":
          "\u039c\u03b7 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf\u03c2 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c4\u03b7\u03bb\u03b5\u03c6\u03ce\u03bd\u03bf\u03c5",
        qrCodeOrApp: "\u03ae",
        "paypal.processingPayment":
          "\u0395\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1 \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae\u03c2...",
        generateQRCode:
          "\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03cd QR",
        "await.waitForConfirmation":
          "\u0391\u03bd\u03b1\u03bc\u03bf\u03bd\u03ae \u03b3\u03b9\u03b1 \u03b5\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03af\u03c9\u03c3\u03b7\u2026",
        "mbway.confirmPayment":
          "\u0395\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03b9\u03ce\u03c3\u03c4\u03b5 \u03c4\u03b7\u03bd \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae \u03c3\u03c4\u03b7\u03bd \u03b5\u03c6\u03b1\u03c1\u03bc\u03bf\u03b3\u03ae MB WAY",
        "shopperEmail.invalid":
          "\u039c\u03b7 \u03ad\u03b3\u03ba\u03c5\u03c1\u03b7 \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 email",
        "dateOfBirth.format":
          "\u0397\u0397/\u039c\u039c/\u0395\u0395\u0395\u0395",
        "dateOfBirth.invalid":
          "\u03a0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03c3\u03c4\u03b5 \u03c4\u03bf\u03c5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf\u03bd 18 \u03b5\u03c4\u03ce\u03bd",
        "blik.confirmPayment":
          "\u0391\u03bd\u03bf\u03af\u03be\u03c4\u03b5 \u03c4\u03b7\u03bd \u03b5\u03c6\u03b1\u03c1\u03bc\u03bf\u03b3\u03ae \u03c4\u03c1\u03b1\u03c0\u03b5\u03b6\u03b9\u03ba\u03ae\u03c2 \u03c3\u03b1\u03c2 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b5\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03b9\u03ce\u03c3\u03b5\u03c4\u03b5 \u03c4\u03b7\u03bd \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae.",
        "blik.invalid":
          "\u0395\u03b9\u03c3\u03b1\u03b3\u03ac\u03b3\u03b5\u03c4\u03b5 6 \u03c8\u03b7\u03c6\u03af\u03b1",
        "blik.code":
          "6\u03c8\u03ae\u03c6\u03b9\u03bf\u03c2 \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2",
        "blik.help":
          "\u039b\u03ac\u03b2\u03b5\u03c4\u03b5 \u03c4\u03bf\u03bd \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc \u03b1\u03c0\u03cc \u03c4\u03b7\u03bd \u03b5\u03c6\u03b1\u03c1\u03bc\u03bf\u03b3\u03ae \u03c4\u03c1\u03b1\u03c0\u03b5\u03b6\u03b9\u03ba\u03ae\u03c2 \u03c3\u03b1\u03c2.",
        "swish.pendingMessage":
          "\u039c\u03b5\u03c4\u03ac \u03c4\u03b7 \u03c3\u03ac\u03c1\u03c9\u03c3\u03b7, \u03b7 \u03ba\u03b1\u03c4\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7 \u03bc\u03c0\u03bf\u03c1\u03b5\u03af \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b5\u03ba\u03ba\u03c1\u03b5\u03bc\u03ae\u03c2 \u03b3\u03b9\u03b1 \u03ad\u03c9\u03c2 10 \u03bb\u03b5\u03c0\u03c4\u03ac. \u0397 \u03b1\u03c0\u03cc\u03c0\u03b5\u03b9\u03c1\u03b1 \u03b5\u03ba \u03bd\u03ad\u03bf\u03c5 \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae\u03c2 \u03b5\u03bd\u03c4\u03cc\u03c2 \u03b1\u03c5\u03c4\u03bf\u03cd \u03c4\u03bf\u03c5 \u03c7\u03c1\u03bf\u03bd\u03b9\u03ba\u03bf\u03cd \u03b4\u03b9\u03b1\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2 \u03b5\u03bd\u03b4\u03ad\u03c7\u03b5\u03c4\u03b1\u03b9 \u03bd\u03b1 \u03c0\u03c1\u03bf\u03ba\u03b1\u03bb\u03ad\u03c3\u03b5\u03b9 \u03c0\u03c1\u03cc\u03c3\u03b8\u03b5\u03c4\u03b7 \u03c7\u03c1\u03ad\u03c9\u03c3\u03b7.",
        "error.va.gen.01":
          "\u0395\u03bb\u03bb\u03b9\u03c0\u03ad\u03c2 \u03c0\u03b5\u03b4\u03af\u03bf",
        "error.va.gen.02":
          "\u03a4\u03bf \u03c0\u03b5\u03b4\u03af\u03bf \u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf",
        "error.va.sf-cc-num.01":
          "\u039c\u03b7 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf\u03c2 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03ba\u03ac\u03c1\u03c4\u03b1\u03c2",
        "error.va.sf-cc-num.03":
          "\u0395\u03b9\u03c3\u03ac\u03c7\u03b8\u03b7\u03ba\u03b5 \u03bc\u03b7 \u03c5\u03c0\u03bf\u03c3\u03c4\u03b7\u03c1\u03b9\u03b6\u03cc\u03bc\u03b5\u03bd\u03b7 \u03ba\u03ac\u03c1\u03c4\u03b1",
        "error.va.sf-cc-dat.01":
          "\u0397 \u03ba\u03ac\u03c1\u03c4\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03c0\u03b1\u03bb\u03b9\u03ac",
        "error.va.sf-cc-dat.02":
          "\u0397 \u03b7\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b1\u03ba\u03c1\u03b9\u03bd\u03ae",
        "error.giftcard.no-balance":
          "\u0397 \u03c3\u03c5\u03b3\u03ba\u03b5\u03ba\u03c1\u03b9\u03bc\u03ad\u03bd\u03b7 \u03b4\u03c9\u03c1\u03bf\u03ba\u03ac\u03c1\u03c4\u03b1 \u03ad\u03c7\u03b5\u03b9 \u03bc\u03b7\u03b4\u03b5\u03bd\u03b9\u03ba\u03cc \u03c5\u03c0\u03cc\u03bb\u03bf\u03b9\u03c0\u03bf",
        "error.giftcard.card-error":
          "\u03a3\u03c4\u03b1 \u03b1\u03c1\u03c7\u03b5\u03af\u03b1 \u03bc\u03b1\u03c2 \u03b4\u03b5\u03bd \u03c5\u03c0\u03ac\u03c1\u03c7\u03b5\u03b9 \u03b4\u03c9\u03c1\u03bf\u03ba\u03ac\u03c1\u03c4\u03b1 \u03bc\u03b5 \u03b1\u03c5\u03c4\u03cc\u03bd \u03c4\u03bf\u03bd \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc",
        "error.giftcard.currency-error":
          "\u039f\u03b9 \u03b4\u03c9\u03c1\u03bf\u03ba\u03ac\u03c1\u03c4\u03b5\u03c2 \u03b9\u03c3\u03c7\u03cd\u03bf\u03c5\u03bd \u03bc\u03cc\u03bd\u03bf \u03b3\u03b9\u03b1 \u03c4\u03bf \u03bd\u03cc\u03bc\u03b9\u03c3\u03bc\u03b1 \u03c3\u03c4\u03bf \u03bf\u03c0\u03bf\u03af\u03bf \u03b5\u03ba\u03b4\u03cc\u03b8\u03b7\u03ba\u03b1\u03bd",
        "amazonpay.signout":
          "\u0391\u03c0\u03bf\u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7 \u03b1\u03c0\u03cc \u03c4\u03bf Amazon",
        "amazonpay.changePaymentDetails":
          "\u0391\u03bb\u03bb\u03b1\u03b3\u03ae \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03c9\u03bd \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae\u03c2",
        "partialPayment.warning":
          "\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03ad\u03bd\u03b1\u03bd \u03ac\u03bb\u03bb\u03bf \u03c4\u03c1\u03cc\u03c0\u03bf \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae\u03c2 \u03b3\u03b9\u03b1 \u03ba\u03b1\u03c4\u03b1\u03b2\u03bf\u03bb\u03ae \u03c4\u03bf\u03c5 \u03b5\u03bd\u03b1\u03c0\u03bf\u03bc\u03b5\u03af\u03bd\u03b1\u03bd\u03c4\u03bf\u03c2 \u03c0\u03bf\u03c3\u03bf\u03cd",
        "partialPayment.remainingBalance":
          "\u03a4\u03bf \u03c5\u03c0\u03cc\u03bb\u03bf\u03b9\u03c0\u03bf \u03b8\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 %{amount}",
        "bankTransfer.beneficiary":
          "\u0394\u03b9\u03ba\u03b1\u03b9\u03bf\u03cd\u03c7\u03bf\u03c2",
        "bankTransfer.iban": "\u0399\u0392\u0391\u039d",
        "bankTransfer.bic": "BIC",
        "bankTransfer.reference": "\u0391\u03bd\u03b1\u03c6\u03bf\u03c1\u03ac",
        "bankTransfer.introduction":
          "\u03a3\u03c5\u03bd\u03b5\u03c7\u03af\u03c3\u03c4\u03b5 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03ae\u03c3\u03b5\u03c4\u03b5 \u03bd\u03ad\u03b1 \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae \u03bc\u03ad\u03c3\u03c9 \u03c4\u03c1\u03b1\u03c0\u03b5\u03b6\u03b9\u03ba\u03ae\u03c2 \u03bc\u03b5\u03c4\u03b1\u03c6\u03bf\u03c1\u03ac\u03c2. \u039c\u03c0\u03bf\u03c1\u03b5\u03af\u03c4\u03b5 \u03bd\u03b1 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03b5\u03c4\u03b5 \u03c4\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03b1 \u03c3\u03c4\u03b7\u03bd \u03b1\u03ba\u03cc\u03bb\u03bf\u03c5\u03b8\u03b7 \u03bf\u03b8\u03cc\u03bd\u03b7 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03bf\u03bb\u03bf\u03ba\u03bb\u03b7\u03c1\u03ce\u03c3\u03b5\u03c4\u03b5 \u03b1\u03c5\u03c4\u03ae\u03bd \u03c4\u03b7\u03bd \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae.",
        "bankTransfer.instructions":
          "\u03a3\u03b1\u03c2 \u03b5\u03c5\u03c7\u03b1\u03c1\u03b9\u03c3\u03c4\u03bf\u03cd\u03bc\u03b5 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b1\u03b3\u03bf\u03c1\u03ac. \u03a7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03c4\u03b5 \u03c4\u03b9\u03c2 \u03b1\u03ba\u03cc\u03bb\u03bf\u03c5\u03b8\u03b5\u03c2 \u03c0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03bf\u03bb\u03bf\u03ba\u03bb\u03b7\u03c1\u03ce\u03c3\u03b5\u03c4\u03b5 \u03c4\u03b7\u03bd \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae.",
        "bacs.accountHolderName":
          "\u038c\u03bd\u03bf\u03bc\u03b1 \u03b4\u03b9\u03ba\u03b1\u03b9\u03bf\u03cd\u03c7\u03bf\u03c5 \u03c4\u03c1\u03b1\u03c0\u03b5\u03b6\u03b9\u03ba\u03bf\u03cd \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd",
        "bacs.accountHolderName.invalid":
          "\u039c\u03b7 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf \u03cc\u03bd\u03bf\u03bc\u03b1 \u03b4\u03b9\u03ba\u03b1\u03b9\u03bf\u03cd\u03c7\u03bf\u03c5 \u03c4\u03c1\u03b1\u03c0\u03b5\u03b6\u03b9\u03ba\u03bf\u03cd \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd",
        "bacs.accountNumber":
          "\u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c4\u03c1\u03b1\u03c0\u03b5\u03b6\u03b9\u03ba\u03bf\u03cd \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd",
        "bacs.accountNumber.invalid":
          "\u039c\u03b7 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf\u03c2 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c4\u03c1\u03b1\u03c0\u03b5\u03b6\u03b9\u03ba\u03bf\u03cd \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd",
        "bacs.bankLocationId":
          "\u039a\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2 \u03c4\u03c1\u03ac\u03c0\u03b5\u03b6\u03b1\u03c2",
        "bacs.bankLocationId.invalid":
          "\u039c\u03b7 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf\u03c2 \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2 \u03c4\u03c1\u03ac\u03c0\u03b5\u03b6\u03b1\u03c2",
        "bacs.consent.amount":
          "\u0391\u03c0\u03bf\u03b4\u03ad\u03c7\u03bf\u03bc\u03b1\u03b9 \u03cc\u03c4\u03b9 \u03c4\u03bf \u03c0\u03b9\u03bf \u03c0\u03ac\u03bd\u03c9 \u03c0\u03bf\u03c3\u03cc \u03b8\u03b1 \u03b1\u03c6\u03b1\u03b9\u03c1\u03b5\u03b8\u03b5\u03af \u03b1\u03c0\u03cc \u03c4\u03bf\u03bd \u03c4\u03c1\u03b1\u03c0\u03b5\u03b6\u03b9\u03ba\u03cc \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc \u03bc\u03bf\u03c5.",
        "bacs.consent.account":
          "\u0395\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03b9\u03ce\u03bd\u03c9 \u03cc\u03c4\u03b9 \u03bf \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c3\u03c4\u03bf \u03cc\u03bd\u03bf\u03bc\u03ac \u03bc\u03bf\u03c5 \u03ba\u03b1\u03b9 \u03c0\u03c9\u03c2 \u03b5\u03af\u03bc\u03b1\u03b9 \u03bf/\u03b7 \u03bc\u03bf\u03bd\u03b1\u03b4\u03b9\u03ba\u03cc\u03c2/\u03bc\u03bf\u03bd\u03b1\u03b4\u03b9\u03ba\u03ae \u03c5\u03c0\u03bf\u03b3\u03c1\u03ac\u03c6\u03c9\u03bd/\u03c5\u03c0\u03bf\u03b3\u03c1\u03ac\u03c6\u03bf\u03c5\u03c3\u03b1 \u03c0\u03bf\u03c5 \u03b1\u03c0\u03b1\u03b9\u03c4\u03b5\u03af\u03c4\u03b1\u03b9 \u03b3\u03b9\u03b1 \u03b5\u03be\u03bf\u03c5\u03c3\u03b9\u03bf\u03b4\u03cc\u03c4\u03b7\u03c3\u03b7 \u03c4\u03b7\u03c2 \u0386\u03bc\u03b5\u03c3\u03b7\u03c2 \u03a7\u03c1\u03ad\u03c9\u03c3\u03b7\u03c2 \u03c3\u03b5 \u03b1\u03c5\u03c4\u03cc\u03bd \u03c4\u03bf\u03bd \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc.",
        edit: "\u0395\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1",
        "bacs.confirm":
          "\u0395\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03af\u03c9\u03c3\u03b7 \u03ba\u03b1\u03b9 \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae",
        "bacs.result.introduction":
          "\u039a\u03b1\u03c4\u03b5\u03b2\u03ac\u03c3\u03c4\u03b5 \u03c4\u03b7\u03bd \u0395\u03bd\u03c4\u03bf\u03bb\u03ae \u0386\u03bc\u03b5\u03c3\u03b7\u03c2 \u03a7\u03c1\u03ad\u03c9\u03c3\u03b7\u03c2 (DDI/\u0395\u03bd\u03c4\u03bf\u03bb\u03ae)",
        "download.pdf": "\u039b\u03ae\u03c8\u03b7 PDF",
        "creditCard.encryptedCardNumber.aria.iframeTitle":
          "Iframe \u03b3\u03b9\u03b1 \u03b1\u03c3\u03c6\u03b1\u03bb\u03ae \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc \u03ba\u03ac\u03c1\u03c4\u03b1\u03c2",
        "creditCard.encryptedCardNumber.aria.label":
          "\u03a0\u03b5\u03b4\u03af\u03bf \u03b1\u03c1\u03b9\u03b8\u03bc\u03bf\u03cd \u03ba\u03ac\u03c1\u03c4\u03b1\u03c2",
        "creditCard.encryptedExpiryDate.aria.iframeTitle":
          "Iframe \u03b3\u03b9\u03b1 \u03b1\u03c3\u03c6\u03b1\u03bb\u03ae \u03b7\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1 \u03bb\u03ae\u03be\u03b7\u03c2 \u03ba\u03ac\u03c1\u03c4\u03b1\u03c2",
        "creditCard.encryptedExpiryDate.aria.label":
          "\u03a0\u03b5\u03b4\u03af\u03bf \u03b7\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1\u03c2 \u03bb\u03ae\u03be\u03b7\u03c2",
        "creditCard.encryptedExpiryMonth.aria.iframeTitle":
          "Iframe \u03b3\u03b9\u03b1 \u03b1\u03c3\u03c6\u03b1\u03bb\u03ae \u03bc\u03ae\u03bd\u03b1 \u03bb\u03ae\u03be\u03b7\u03c2 \u03ba\u03ac\u03c1\u03c4\u03b1\u03c2",
        "creditCard.encryptedExpiryMonth.aria.label":
          "\u03a0\u03b5\u03b4\u03af\u03bf \u03bc\u03ae\u03bd\u03b1 \u03bb\u03ae\u03be\u03b7\u03c2",
        "creditCard.encryptedExpiryYear.aria.iframeTitle":
          "Iframe \u03b3\u03b9\u03b1 \u03b1\u03c3\u03c6\u03b1\u03bb\u03ad\u03c2 \u03ad\u03c4\u03bf\u03c2 \u03bb\u03ae\u03be\u03b7\u03c2 \u03ba\u03ac\u03c1\u03c4\u03b1\u03c2",
        "creditCard.encryptedExpiryYear.aria.label":
          "\u03a0\u03b5\u03b4\u03af\u03bf \u03ad\u03c4\u03bf\u03c5\u03c2 \u03bb\u03ae\u03be\u03b7\u03c2",
        "creditCard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe \u03b3\u03b9\u03b1 \u03b1\u03c3\u03c6\u03b1\u03bb\u03ae \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc \u03b1\u03c3\u03c6\u03b1\u03bb\u03b5\u03af\u03b1\u03c2 \u03ba\u03ac\u03c1\u03c4\u03b1\u03c2",
        "creditCard.encryptedSecurityCode.aria.label":
          "\u03a0\u03b5\u03b4\u03af\u03bf \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03cd \u03b1\u03c3\u03c6\u03b1\u03bb\u03b5\u03af\u03b1\u03c2",
        "giftcard.encryptedCardNumber.aria.iframeTitle":
          "Iframe \u03b3\u03b9\u03b1 \u03b1\u03c3\u03c6\u03b1\u03bb\u03ae \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc \u03b4\u03c9\u03c1\u03bf\u03ba\u03ac\u03c1\u03c4\u03b1\u03c2",
        "giftcard.encryptedCardNumber.aria.label":
          "\u03a0\u03b5\u03b4\u03af\u03bf \u03b1\u03c1\u03b9\u03b8\u03bc\u03bf\u03cd \u03b4\u03c9\u03c1\u03bf\u03ba\u03ac\u03c1\u03c4\u03b1\u03c2",
        "giftcard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe \u03b3\u03b9\u03b1 \u03b1\u03c3\u03c6\u03b1\u03bb\u03ae \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc \u03b1\u03c3\u03c6\u03b1\u03bb\u03b5\u03af\u03b1\u03c2 \u03b4\u03c9\u03c1\u03bf\u03ba\u03ac\u03c1\u03c4\u03b1\u03c2",
        "giftcard.encryptedSecurityCode.aria.label":
          "\u03a0\u03b5\u03b4\u03af\u03bf \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03cd \u03b1\u03c3\u03c6\u03b1\u03bb\u03b5\u03af\u03b1\u03c2 \u03b4\u03c9\u03c1\u03bf\u03ba\u03ac\u03c1\u03c4\u03b1\u03c2",
        giftcardTransactionLimit:
          "\u03a4\u03bf \u03bc\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf \u03b5\u03c0\u03b9\u03c4\u03c1\u03b5\u03c0\u03cc\u03bc\u03b5\u03bd\u03bf \u03c0\u03bf\u03c3\u03cc \u03b1\u03bd\u03ac \u03c3\u03c5\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ae \u03c3\u03b5 \u03b1\u03c5\u03c4\u03ae\u03bd \u03c4\u03b7 \u03b4\u03c9\u03c1\u03bf\u03ba\u03ac\u03c1\u03c4\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 %{amount}",
        "ach.encryptedBankAccountNumber.aria.iframeTitle":
          "Iframe \u03b3\u03b9\u03b1 \u03b1\u03c3\u03c6\u03b1\u03bb\u03ae \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc \u03c4\u03c1\u03b1\u03c0\u03b5\u03b6\u03b9\u03ba\u03bf\u03cd \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd",
        "ach.encryptedBankAccountNumber.aria.label":
          "\u03a0\u03b5\u03b4\u03af\u03bf \u03c4\u03c1\u03b1\u03c0\u03b5\u03b6\u03b9\u03ba\u03bf\u03cd \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd",
        "ach.encryptedBankLocationId.aria.iframeTitle":
          "Iframe \u03b3\u03b9\u03b1 \u03b1\u03c3\u03c6\u03b1\u03bb\u03ae \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03cd \u03c5\u03c0\u03bf\u03ba\u03b1\u03c4\u03b1\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2 \u03c4\u03c1\u03ac\u03c0\u03b5\u03b6\u03b1\u03c2",
        "ach.encryptedBankLocationId.aria.label":
          "\u03a0\u03b5\u03b4\u03af\u03bf \u03b1\u03c1\u03b9\u03b8\u03bc\u03bf\u03cd \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03cd \u03c5\u03c0\u03bf\u03ba\u03b1\u03c4\u03b1\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2 \u03c4\u03c1\u03ac\u03c0\u03b5\u03b6\u03b1\u03c2",
      },
    }),
    Wu = Object.freeze({
      __proto__: null,
      default: {
        payButton: "Pagar",
        "payButton.redirecting": "Redirigiendo...",
        storeDetails: "Recordar para mi pr\xf3ximo pago",
        "creditCard.holderName": "Nombre en la tarjeta",
        "creditCard.holderName.placeholder": "Juan P\xe9rez",
        "creditCard.holderName.invalid":
          "Nombre del titular de tarjeta no v\xe1lido",
        "creditCard.numberField.title": "N\xfamero de tarjeta",
        "creditCard.numberField.placeholder": "1234 5678 9012 3456",
        "creditCard.expiryDateField.title": "Fecha de expiraci\xf3n",
        "creditCard.expiryDateField.placeholder": "MM/AA",
        "creditCard.expiryDateField.month": "Mes",
        "creditCard.expiryDateField.month.placeholder": "MM",
        "creditCard.expiryDateField.year.placeholder": "AA",
        "creditCard.expiryDateField.year": "A\xf1o",
        "creditCard.cvcField.title": "CVC / CVV",
        "creditCard.cvcField.placeholder": "123",
        "creditCard.storeDetailsButton": "Recordar para la pr\xf3xima vez",
        "creditCard.cvcField.placeholder.4digits": "4 d\xedgitos",
        "creditCard.cvcField.placeholder.3digits": "3 d\xedgitos",
        "creditCard.taxNumber.placeholder": "YYMMDD/0123456789",
        installments: "N\xfamero de plazos",
        installmentOption: "%{times}x %{partialValue}",
        installmentOptionMonths: "%{times}\xa0meses",
        "installments.oneTime": "Pago \xfanico",
        "installments.installments": "Pago fraccionado",
        "installments.revolving": "Pago rotativo",
        "sepaDirectDebit.ibanField.invalid": "N\xfamero de cuenta no v\xe1lido",
        "sepaDirectDebit.nameField.placeholder": "J. Smith",
        "sepa.ownerName": "Nombre del titular de cuenta",
        "sepa.ibanNumber": "N\xfamero de cuenta (IBAN)",
        "error.title": "Error",
        "error.subtitle.redirect": "Redirecci\xf3n fallida",
        "error.subtitle.payment": "Pago fallido",
        "error.subtitle.refused": "Pago rechazado",
        "error.message.unknown": "Se ha producido un error desconocido",
        "idealIssuer.selectField.title": "Banco",
        "idealIssuer.selectField.placeholder": "Seleccione su banco",
        "creditCard.success": "Pago realizado correctamente",
        loading: "Cargando...",
        continue: "Continuar",
        continueTo: "Continuar a",
        "wechatpay.timetopay": "Tiene %@ para pagar",
        "wechatpay.scanqrcode": "Escanear c\xf3digo QR",
        personalDetails: "Datos personales",
        companyDetails: "Datos de la empresa",
        "companyDetails.name": "Nombre de la empresa",
        "companyDetails.registrationNumber": "N\xfamero de registro",
        socialSecurityNumber: "N\xfamero de seguridad social",
        firstName: "Nombre",
        infix: "Prefijo",
        lastName: "Apellidos",
        mobileNumber: "Tel\xe9fono m\xf3vil",
        "mobileNumber.invalid": "N\xfamero de m\xf3vil no v\xe1lido",
        city: "Ciudad",
        postalCode: "C\xf3digo postal",
        countryCode: "Prefijo internacional",
        telephoneNumber: "N\xfamero de tel\xe9fono",
        dateOfBirth: "Fecha de nacimiento",
        shopperEmail: "Direcci\xf3n de correo electr\xf3nico",
        gender: "G\xe9nero",
        male: "Masculino",
        female: "Femenino",
        billingAddress: "Direcci\xf3n de facturaci\xf3n",
        street: "Calle",
        stateOrProvince: "Provincia o estado",
        country: "Pa\xeds",
        houseNumberOrName: "N\xfamero de vivienda",
        separateDeliveryAddress: "Especificar otra direcci\xf3n de env\xedo",
        deliveryAddress: "Direcci\xf3n de env\xedo",
        zipCode: "C\xf3digo postal",
        apartmentSuite: "Apartamento/suite",
        provinceOrTerritory: "Provincia o territorio",
        cityTown: "Ciudad/poblaci\xf3n",
        address: "Direcci\xf3n",
        state: "Estado",
        "field.title.optional": "(opcional)",
        "creditCard.cvcField.title.optional": "CVC / CVV (opcional)",
        "issuerList.wallet.placeholder":
          "Seleccione su monedero electr\xf3nico",
        privacyPolicy: "Pol\xedtica de privacidad",
        "afterPay.agreement": "S\xed, acepto las %@ de AfterPay",
        paymentConditions: "condiciones de pago",
        openApp: "Abrir la aplicaci\xf3n",
        "voucher.readInstructions": "Leer instrucciones",
        "voucher.introduction":
          "Gracias por su compra. Use el siguiente cup\xf3n para completar su pago.",
        "voucher.expirationDate": "Fecha de caducidad",
        "voucher.alternativeReference": "Referencia alternativa",
        "dragonpay.voucher.non.bank.selectField.placeholder":
          "Seleccione su proveedor",
        "dragonpay.voucher.bank.selectField.placeholder": "Seleccione su banco",
        "voucher.paymentReferenceLabel": "Referencia de pago",
        "voucher.surcharge": "Incluye recargo de %@",
        "voucher.introduction.doku":
          "Gracias por su compra. Use la informaci\xf3n siguiente para completar su pago.",
        "voucher.shopperName": "Nombre del comprador",
        "voucher.merchantName": "Vendedor",
        "voucher.introduction.econtext":
          "Gracias por su compra. Use la informaci\xf3n siguiente para completar su pago.",
        "voucher.telephoneNumber": "N\xfamero de tel\xe9fono",
        "voucher.shopperReference": "Referencia cliente",
        "voucher.collectionInstitutionNumber":
          "N\xfamero de instituci\xf3n de cobro",
        "voucher.econtext.telephoneNumber.invalid":
          "El n\xfamero de tel\xe9fono debe tener 10 u 11 d\xedgitos",
        "boletobancario.btnLabel": "Generar Boleto",
        "boleto.sendCopyToEmail": "Enviar copia a mi correo electr\xf3nico",
        "button.copy": "Copiar",
        "button.download": "Descargar",
        "creditCard.storedCard.description.ariaLabel":
          "La tarjeta almacenada termina en %@",
        "voucher.entity": "Entidad",
        donateButton: "Donar",
        notNowButton: "Ahora no",
        thanksForYourSupport: "\xa1Gracias por su contribuci\xf3n!",
        preauthorizeWith: "Preautorizar con",
        confirmPreauthorization: "Confirmar preautorizaci\xf3n",
        confirmPurchase: "Confirmar compra",
        applyGiftcard: "Canjear",
        giftcardBalance: "Saldo de la tarjeta regalo",
        deductedBalance: "Saldo deducido",
        "creditCard.pin.title": "PIN",
        "creditCard.encryptedPassword.label":
          "Primeros 2 d\xedgitos de la contrase\xf1a de la tarjeta",
        "creditCard.encryptedPassword.placeholder": "12",
        "creditCard.encryptedPassword.invalid": "Contrase\xf1a incorrecta",
        "creditCard.taxNumber.label":
          "Fecha de nacimiento del titular de la tarjeta (AAMMDD) o n\xfamero de registro comercial (10 d\xedgitos)",
        "creditCard.taxNumber.labelAlt":
          "N\xfamero de registro comercial (10 d\xedgitos)",
        "creditCard.taxNumber.invalid":
          "Fecha de nacimiento del titular o n\xfamero de registro comercial incorrectos",
        "storedPaymentMethod.disable.button": "Eliminar",
        "storedPaymentMethod.disable.confirmation":
          "Eliminar m\xe9todo de pago almacenado",
        "storedPaymentMethod.disable.confirmButton": "S\xed, eliminar",
        "storedPaymentMethod.disable.cancelButton": "Cancelar",
        "ach.bankAccount": "Cuenta bancaria",
        "ach.accountHolderNameField.title": "Nombre del titular de la cuenta",
        "ach.accountHolderNameField.placeholder": "Juan P\xe9rez",
        "ach.accountHolderNameField.invalid":
          "El nombre del titular de la cuenta no es v\xe1lido",
        "ach.accountNumberField.title": "N\xfamero de cuenta",
        "ach.accountNumberField.invalid": "N\xfamero de cuenta no v\xe1lido",
        "ach.accountLocationField.title": "N\xfamero de ruta ABA",
        "ach.accountLocationField.invalid":
          "El n\xfamero de ruta ABA no es v\xe1lido",
        "select.state": "Seleccione el estado",
        "select.stateOrProvince": "Seleccione el estado o provincia",
        "select.provinceOrTerritory": "Seleccione la provincia o territorio",
        "select.country": "Seleccione el pa\xeds",
        "select.noOptionsFound": "No se encontraron opciones",
        "select.filter.placeholder": "Buscar...",
        "telephoneNumber.invalid":
          "El n\xfamero de tel\xe9fono no es v\xe1lido",
        qrCodeOrApp: "o",
        "paypal.processingPayment": "Procesando pago...",
        generateQRCode: "Generar c\xf3digo QR",
        "await.waitForConfirmation": "Esperando confirmaci\xf3n",
        "mbway.confirmPayment": "Confirme su pago en la aplicaci\xf3n MB WAY",
        "shopperEmail.invalid":
          "La direcci\xf3n de correo electr\xf3nico no es v\xe1lida",
        "dateOfBirth.format": "DD/MM/AAAA",
        "dateOfBirth.invalid": "Debe ser mayor de 18 a\xf1os",
        "blik.confirmPayment":
          "Abra la aplicaci\xf3n de su banco para confirmar el pago.",
        "blik.invalid": "Introduzca 6 d\xedgitos",
        "blik.code": "C\xf3digo de 6 d\xedgitos",
        "blik.help": "Consiga el c\xf3digo en la aplicaci\xf3n de su banco.",
        "swish.pendingMessage":
          "Tras escanearlo, su estado puede seguir en pendiente hasta 10\xa0minutos. Podr\xedan realizarse varios cargos si se intenta pagar de nuevo durante este periodo.",
        "error.va.gen.01": "Campo incompleto",
        "error.va.gen.02": "Campo no v\xe1lido",
        "error.va.sf-cc-num.01": "N\xfamero de tarjeta no v\xe1lido",
        "error.va.sf-cc-num.03": "Se ha introducido una tarjeta no admitida",
        "error.va.sf-cc-dat.01": "Tarjeta demasiado vieja",
        "error.va.sf-cc-dat.02": "Fecha con demasiada antelaci\xf3n",
        "error.giftcard.no-balance": "Esta tarjeta regalo no tiene saldo",
        "error.giftcard.card-error":
          "No tenemos ninguna tarjeta regalo con este n\xfamero en nuestros registros.",
        "error.giftcard.currency-error":
          "Las tarjetas regalo solo son v\xe1lidas en la moneda en que fueron emitidas",
        "amazonpay.signout": "Salir de Amazon",
        "amazonpay.changePaymentDetails": "Cambiar detalles de pago",
        "partialPayment.warning":
          "Seleccione otro m\xe9todo de pago para pagar la cantidad restante",
        "partialPayment.remainingBalance":
          "El saldo restante ser\xe1 %{{amount}",
        "bankTransfer.beneficiary": "Beneficiario",
        "bankTransfer.iban": "IBAN",
        "bankTransfer.bic": "BIC",
        "bankTransfer.reference": "referencia",
        "bankTransfer.introduction":
          "Contin\xfae para crear un nuevo pago mediante transferencia bancaria. Puede utilizar los detalles en la siguiente pantalla para finalizar este pago.",
        "bankTransfer.instructions":
          "Gracias por su compra. Use la siguiente informaci\xf3n para completar su pago.",
        "bacs.accountHolderName": "Nombre del titular de la cuenta bancaria",
        "bacs.accountHolderName.invalid":
          "El nombre del titular de la cuenta bancaria no es v\xe1lido",
        "bacs.accountNumber": "N\xfamero de cuenta bancaria",
        "bacs.accountNumber.invalid":
          "El n\xfamero de cuenta bancaria no es v\xe1lido",
        "bacs.bankLocationId": "C\xf3digo de sucursal",
        "bacs.bankLocationId.invalid":
          "El c\xf3digo de sucursal no es v\xe1lido",
        "bacs.consent.amount":
          "Estoy de acuerdo con que la cantidad anterior se deduzca de mi cuenta bancaria.",
        "bacs.consent.account":
          "Confirmo que la cuenta est\xe1 a mi nombre y soy el \xfanico firmante necesario para autorizar d\xe9bitos directos en esta cuenta.",
        edit: "Editar",
        "bacs.confirm": "Confirmar y pagar",
        "bacs.result.introduction":
          "Descargue su instrucci\xf3n de d\xe9bito directo (IDD/mandato)",
        "download.pdf": "Descargar PDF",
        "creditCard.encryptedCardNumber.aria.iframeTitle":
          "Iframe del n\xfamero de tarjeta asegurada",
        "creditCard.encryptedCardNumber.aria.label":
          "Campo del n\xfamero de tarjeta",
        "creditCard.encryptedExpiryDate.aria.iframeTitle":
          "Iframe de la fecha de caducidad de la tarjeta asegurada",
        "creditCard.encryptedExpiryDate.aria.label":
          "Campo de la fecha de caducidad",
        "creditCard.encryptedExpiryMonth.aria.iframeTitle":
          "Iframe del mes de caducidad de tarjeta asegurada",
        "creditCard.encryptedExpiryMonth.aria.label":
          "Campo del mes de caducidad",
        "creditCard.encryptedExpiryYear.aria.iframeTitle":
          "Iframe del a\xf1o de caducidad de la tarjeta asegurada",
        "creditCard.encryptedExpiryYear.aria.label":
          "Campo del a\xf1o de caducidad",
        "creditCard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe del c\xf3digo de seguridad de la tarjeta asegurada",
        "creditCard.encryptedSecurityCode.aria.label":
          "Campo del c\xf3digo de seguridad",
        "giftcard.encryptedCardNumber.aria.iframeTitle":
          "Iframe del n\xfamero de la tarjeta de regalo asegurada",
        "giftcard.encryptedCardNumber.aria.label":
          "Campo del n\xfamero de la tarjeta de regalo",
        "giftcard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe del c\xf3digo de seguridad de la tarjeta de regalo asegurada",
        "giftcard.encryptedSecurityCode.aria.label":
          "Campo del c\xf3digo de seguridad de la tarjeta de regalo",
        giftcardTransactionLimit:
          "Se permite un m\xe1ximo de %{amount} por transacci\xf3n en esta tarjeta regalo",
        "ach.encryptedBankAccountNumber.aria.iframeTitle":
          "Iframe del n\xfamero de la cuenta bancaria asegurada",
        "ach.encryptedBankAccountNumber.aria.label":
          "Campo de la cuenta bancaria",
        "ach.encryptedBankLocationId.aria.iframeTitle":
          "Iframe del n\xfamero de ruta del banco asegurado",
        "ach.encryptedBankLocationId.aria.label":
          "Campo del n\xfamero de ruta del banco",
      },
    }),
    Ju = Object.freeze({
      __proto__: null,
      default: {
        payButton: "Maksa",
        "payButton.redirecting": "Uudelleenohjataan ...",
        storeDetails: "Tallenna seuraavaa maksuani varten",
        "creditCard.holderName": "Nimi kortilla",
        "creditCard.holderName.placeholder": "J. Smith",
        "creditCard.holderName.invalid": "Ei-kelvollinen kortinhaltijan nimi",
        "creditCard.numberField.title": "Kortin numero",
        "creditCard.numberField.placeholder": "1234 5678 9012 3456",
        "creditCard.expiryDateField.title":
          "Voimassaolop\xe4iv\xe4m\xe4\xe4r\xe4",
        "creditCard.expiryDateField.placeholder": "KK / VV",
        "creditCard.expiryDateField.month": "Kuukausi",
        "creditCard.expiryDateField.month.placeholder": "KK",
        "creditCard.expiryDateField.year.placeholder": "VV",
        "creditCard.expiryDateField.year": "Vuosi",
        "creditCard.cvcField.title": "CVC / CVV",
        "creditCard.cvcField.placeholder": "123",
        "creditCard.storeDetailsButton": "Muista seuraavalla kerralla",
        "creditCard.cvcField.placeholder.4digits": "4 lukua",
        "creditCard.cvcField.placeholder.3digits": "3 lukua",
        "creditCard.taxNumber.placeholder": "VVKKPP / 0123456789",
        installments: "Asennusten m\xe4\xe4r\xe4",
        installmentOption: "% {kertaa} x% {osittainenarvo}",
        installmentOptionMonths: "% {kertaa} kuukautta",
        "installments.oneTime": "Kertamaksu",
        "installments.installments": "Er\xe4maksu",
        "installments.revolving": "Toistuva maksu",
        "sepaDirectDebit.ibanField.invalid": "V\xe4\xe4r\xe4 tilin numero",
        "sepaDirectDebit.nameField.placeholder": "J. Smith",
        "sepa.ownerName": "Haltijan nimi",
        "sepa.ibanNumber": "Tilinumero (IBAN)",
        "error.title": "Virhe",
        "error.subtitle.redirect": "Uuteen kohteeseen siirto ep\xe4onnistui",
        "error.subtitle.payment": "Maksu ep\xe4nnistui",
        "error.subtitle.refused": "Maksu hyl\xe4tty",
        "error.message.unknown": "Tapahtui tuntematon virhe",
        "idealIssuer.selectField.title": "Pankki",
        "idealIssuer.selectField.placeholder": "Valitse pankkisi",
        "creditCard.success": "Maksu onnistui",
        loading: "Ladataan...",
        continue: "Jatka",
        continueTo: "Jatka kohteeseen",
        "wechatpay.timetopay": "Sinulla on %@ maksettavana",
        "wechatpay.scanqrcode": "Skannaa QR-koodi",
        personalDetails: "Henkil\xf6tiedot",
        companyDetails: "Yhti\xf6n tiedot",
        "companyDetails.name": "Yhti\xf6n nimi",
        "companyDetails.registrationNumber": "Rekisterinumero",
        socialSecurityNumber: "Sosiaaliturvatunnus",
        firstName: "Etunimi",
        infix: "Etuliite",
        lastName: "Sukunimi",
        mobileNumber: "Matkapuhelinnumero",
        "mobileNumber.invalid": "Ei-kelvollinen matkapuhelinnumero",
        city: "Kaupunki",
        postalCode: "Postinumero",
        countryCode: "Maakoodi",
        telephoneNumber: "Puhelinnumero",
        dateOfBirth: "Syntym\xe4aika",
        shopperEmail: "S\xe4hk\xf6postiosoite",
        gender: "Sukupuoli",
        male: "Mies",
        female: "Nainen",
        billingAddress: "Laskutusosoite",
        street: "Katu",
        stateOrProvince: "Osavaltio tai l\xe4\xe4ni",
        country: "Maa",
        houseNumberOrName: "Talon numero",
        separateDeliveryAddress: "M\xe4\xe4rit\xe4 erillinen toimitusosoite",
        deliveryAddress: "Toimitusosoite",
        zipCode: "Postinumero",
        apartmentSuite: "Huoneisto / sviitti",
        provinceOrTerritory: "Maakunta tai alue",
        cityTown: "Kaupunki / taajama",
        address: "Osoite",
        state: "Osavaltio",
        "field.title.optional": "(valinnainen)",
        "creditCard.cvcField.title.optional": "CVC / CVV (valinnainen)",
        "issuerList.wallet.placeholder": "Valitse lompakkosi",
        privacyPolicy: "Tietosuojamenettely",
        "afterPay.agreement": "Hyv\xe4ksyn AfterPayn %@",
        paymentConditions: "maksuehdot",
        openApp: "Avaa sovellus",
        "voucher.readInstructions": "Lue ohjeet",
        "voucher.introduction":
          "Kiitos hankinnastasi, k\xe4yt\xe4 seuraavaa kuponkia vied\xe4ksesi maksusi p\xe4\xe4t\xf6kseen.",
        "voucher.expirationDate": "Vanhenemisp\xe4iv\xe4m\xe4\xe4r\xe4",
        "voucher.alternativeReference": "Vaihtoehtoinen viite",
        "dragonpay.voucher.non.bank.selectField.placeholder":
          "Valitse toimittajasi",
        "dragonpay.voucher.bank.selectField.placeholder": "Valitse pankkisi",
        "voucher.paymentReferenceLabel": "Maksun viite",
        "voucher.surcharge": "Sis. %@ lis\xe4maksun",
        "voucher.introduction.doku":
          "Kiitos hankinnastasi, k\xe4yt\xe4 seuraavia tietoja p\xe4\xe4tt\xe4\xe4ksesi maksusi.",
        "voucher.shopperName": "Ostajan nimi",
        "voucher.merchantName": "Kauppias",
        "voucher.introduction.econtext":
          "Kiitos hankinnastasi, k\xe4yt\xe4 seuraavia tietoja p\xe4\xe4tt\xe4\xe4ksesi maksusi.",
        "voucher.telephoneNumber": "Puhelinnumero",
        "voucher.shopperReference": "Ostajan viite",
        "voucher.collectionInstitutionNumber":
          "Ker\xe4\xe4v\xe4n laitoksen numero",
        "voucher.econtext.telephoneNumber.invalid":
          "Puhelinnumeron on oltava 10 tai 11 numeroa pitk\xe4",
        "boletobancario.btnLabel": "Luo Boleto",
        "boleto.sendCopyToEmail": "L\xe4het\xe4 kopio s\xe4hk\xf6postiini",
        "button.copy": "Kopio",
        "button.download": "Lataa",
        "creditCard.storedCard.description.ariaLabel":
          "Tallennetun kortin viimeiset luvut ovat %@",
        "voucher.entity": "Kokonaisuus",
        donateButton: "Lahjoita",
        notNowButton: "Ei nyt",
        thanksForYourSupport: "Kiitos tuestasi!",
        preauthorizeWith: "Ennkkolupa k\xe4ytt\xe4j\xe4n kanssa",
        confirmPreauthorization: "Vahvista ennakkolupa",
        confirmPurchase: "Vahvista hankinta",
        applyGiftcard: "Lunasta",
        giftcardBalance: "Lahjakortin saldo",
        deductedBalance: "V\xe4hennetty saldo",
        "creditCard.pin.title": "Pin-tunnus",
        "creditCard.encryptedPassword.label":
          "Kortin salasanan ensimm\xe4iset 2 lukua",
        "creditCard.encryptedPassword.placeholder": "12",
        "creditCard.encryptedPassword.invalid": "Kelpaamaton salasana",
        "creditCard.taxNumber.label":
          "Kortinhaltijan syntym\xe4p\xe4iv\xe4 (VVKKPP) tai yrityksen rekisterinumero (10 lukua)",
        "creditCard.taxNumber.labelAlt": "Yrityksen rekisterinumero (10 lukua)",
        "creditCard.taxNumber.invalid":
          "Kelpaamaton kortinhaltijan syntym\xe4p\xe4iv\xe4 (VVKKPP) tai yrityksen rekisterinumero",
        "storedPaymentMethod.disable.button": "Poista",
        "storedPaymentMethod.disable.confirmation":
          "Poista tallennettu maksutapa",
        "storedPaymentMethod.disable.confirmButton": "Kyll\xe4, poista",
        "storedPaymentMethod.disable.cancelButton": "Peruuta",
        "ach.bankAccount": "Pankkitili",
        "ach.accountHolderNameField.title": "Tilinhaltijan nimi",
        "ach.accountHolderNameField.placeholder": "J. Smith",
        "ach.accountHolderNameField.invalid":
          "Ei-kelvollinen tilinhaltijan nimi",
        "ach.accountNumberField.title": "Tilinumero",
        "ach.accountNumberField.invalid": "V\xe4\xe4r\xe4 tilin numero",
        "ach.accountLocationField.title": "ABA-reititysnumero",
        "ach.accountLocationField.invalid": "Ei-kelvollinen ABA-reititysnumero",
        "select.state": "Valitse osavaltio",
        "select.stateOrProvince": "Valitse osavaltio tai l\xe4\xe4ni",
        "select.provinceOrTerritory": "Valitse maakunta tai alue",
        "select.country": "Valitse maa",
        "select.noOptionsFound": "Vaihtoehtoja ei l\xf6ytynyt",
        "select.filter.placeholder": "Hae...",
        "telephoneNumber.invalid": "Ei-kelvollinen puhelinnumero",
        qrCodeOrApp: "tai",
        "paypal.processingPayment": "Maksua k\xe4sitell\xe4\xe4n...",
        generateQRCode: "Tuota QR-koodi",
        "await.waitForConfirmation": "Odottaa vahvistusta",
        "mbway.confirmPayment": "Vahvista maksusi MB WAY -sovelluksella",
        "shopperEmail.invalid": "Ei-kelvollinen s\xe4hk\xf6postiosoite",
        "dateOfBirth.format": "PP/KK/VVVV",
        "dateOfBirth.invalid": "Sinun on oltava v\xe4hint\xe4\xe4n 18-vuotias",
        "blik.confirmPayment": "Avaa pankkisovelluksesi vahvistaaksesi maksun.",
        "blik.invalid": "Sy\xf6t\xe4 6 lukua",
        "blik.code": "6-numeroinen koodi",
        "blik.help": "Hanki koodi pankkisovelluksestasi.",
        "swish.pendingMessage":
          "Skannattuasi, tila voi odottaa jopa 10 minuuttia. Yritys maksaa uudelleen t\xe4ss\xe4 ajassa voi tuottaa moninkertaisia maksuja.",
        "error.va.gen.01": "T\xe4ydent\xe4m\xe4t\xf6n kentt\xe4",
        "error.va.gen.02": "Kentt\xe4 ei kelpaa",
        "error.va.sf-cc-num.01": "V\xe4\xe4r\xe4 kortin numero",
        "error.va.sf-cc-num.03": "Ei-tuettu kortti asetettu",
        "error.va.sf-cc-dat.01": "Kortti on liian vanha",
        "error.va.sf-cc-dat.02":
          "P\xe4iv\xe4m\xe4\xe4r\xe4 liian kaukana tulevaisuudessa",
        "error.giftcard.no-balance": "Lahjakortin saldo on nolla",
        "error.giftcard.card-error":
          "Asiakirjoissamme ei ole t\xe4m\xe4n numeron lahjakorttia",
        "error.giftcard.currency-error":
          "Gift cards are only valid in the currency they were issued in",
        "amazonpay.signout": "Kirjaudu ulos Amazonista",
        "amazonpay.changePaymentDetails": "Muuta maksutietoja",
        "partialPayment.warning":
          "Valitse toinen maksutapa j\xe4\xe4nn\xf6ksen maksamiseksi",
        "partialPayment.remainingBalance":
          "J\xe4ljell\xe4 oleva saldo on% {summa}",
        "bankTransfer.beneficiary": "Edunsaaja",
        "bankTransfer.iban": "IBAN",
        "bankTransfer.bic": "BIC",
        "bankTransfer.reference": "Viite",
        "bankTransfer.introduction":
          "Jatka uuden pankkisiirtomaksun luomista. Voit viimeistell\xe4 t\xe4m\xe4n maksun seuraavan n\xe4yt\xf6n tietojen avulla.",
        "bankTransfer.instructions":
          "Kiitos hankinnastasi, k\xe4yt\xe4 seuraavia tietoja p\xe4\xe4tt\xe4\xe4ksesi maksusi.",
        "bacs.accountHolderName": "Tilinhaltijan nimi",
        "bacs.accountHolderName.invalid": "Ei-kelvollinen tilinhaltijan nimi",
        "bacs.accountNumber": "Pankkitilinumero",
        "bacs.accountNumber.invalid": "V\xe4\xe4r\xe4 tilin numero",
        "bacs.bankLocationId": "Lajittelukoodi",
        "bacs.bankLocationId.invalid": "Ei-kelvollinen lajittelukoodi",
        "bacs.consent.amount":
          "Hyv\xe4ksyn, ett\xe4 alla oleva summa veloitetaan pankkitililt\xe4ni.",
        "bacs.consent.account":
          "Vahvistan, ett\xe4 tili on nimess\xe4ni ja olen ainoa allekirjoittaja, joka vaaditaan valtuuttamaan suoraveloitus t\xe4ll\xe4 tilill\xe4.",
        edit: "Muokkaa",
        "bacs.confirm": "Vahvista ja maksa",
        "bacs.result.introduction": "Lataa suoraveloitusohjeet (DDI / Mandate)",
        "download.pdf": "Lataa PDF",
        "creditCard.encryptedCardNumber.aria.iframeTitle":
          "Iframe suojatulle kortin numerolle",
        "creditCard.encryptedCardNumber.aria.label": "Kortin numero -kentt\xe4",
        "creditCard.encryptedExpiryDate.aria.iframeTitle":
          "Iframe suojatulle kortin viimeiselle k\xe4ytt\xf6p\xe4iv\xe4lle",
        "creditCard.encryptedExpiryDate.aria.label":
          "Viimeinen voimassaolop\xe4iv\xe4 -kentt\xe4",
        "creditCard.encryptedExpiryMonth.aria.iframeTitle":
          "Iframe suojatulle kortin viimeiselle k\xe4ytt\xf6kuukaudelle",
        "creditCard.encryptedExpiryMonth.aria.label":
          "Viimeinen voimassaolokuukausi -kentt\xe4",
        "creditCard.encryptedExpiryYear.aria.iframeTitle":
          "Iframe suojatulle kortin viimeiselle voimassaolovuodelle",
        "creditCard.encryptedExpiryYear.aria.label":
          "Viimeinen voimassaolovuosi-kentt\xe4",
        "creditCard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe suojatulle kortin turvakoodille",
        "creditCard.encryptedSecurityCode.aria.label": "Turvakoodikentt\xe4",
        "giftcard.encryptedCardNumber.aria.iframeTitle":
          "Iframe suojatulle lahjakortin numerolle",
        "giftcard.encryptedCardNumber.aria.label":
          "Lahjakorttinumeron kentt\xe4",
        "giftcard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe suojatulle lahjakortin turvakoodille",
        "giftcard.encryptedSecurityCode.aria.label":
          "Lahjakortin turvakoodikentt\xe4",
        giftcardTransactionLimit:
          "Maks. % {summa} sallittu tapahtumaa kohti t\xe4ll\xe4 lahjakortilla",
        "ach.encryptedBankAccountNumber.aria.iframeTitle":
          "Iframe suojatulle pankkitilinumerolle",
        "ach.encryptedBankAccountNumber.aria.label": "Pankkitilikentt\xe4",
        "ach.encryptedBankLocationId.aria.iframeTitle":
          "Iframe suojatulle pankin reititysnumerolle",
        "ach.encryptedBankLocationId.aria.label":
          "Pankin reititysnumerokentt\xe4",
      },
    }),
    Zu = Object.freeze({
      __proto__: null,
      default: {
        payButton: "Payer",
        "payButton.redirecting": "Redirection...",
        storeDetails: "Sauvegarder pour mon prochain paiement",
        "creditCard.holderName": "Nom sur la carte",
        "creditCard.holderName.placeholder": "J. Smith",
        "creditCard.holderName.invalid": "Nom du porteur de carte incorrect",
        "creditCard.numberField.title": "Num\xe9ro de la carte",
        "creditCard.numberField.placeholder": "1234 5678 9012 3456",
        "creditCard.expiryDateField.title": "Date d'expiration",
        "creditCard.expiryDateField.placeholder": "MM/AA",
        "creditCard.expiryDateField.month": "Mois",
        "creditCard.expiryDateField.month.placeholder": "MM",
        "creditCard.expiryDateField.year.placeholder": "AA",
        "creditCard.expiryDateField.year": "Ann\xe9e",
        "creditCard.cvcField.title": "CVC / CVV",
        "creditCard.cvcField.placeholder": "123",
        "creditCard.storeDetailsButton": "Enregistrer pour la prochaine fois",
        "creditCard.cvcField.placeholder.4digits": "4\xa0chiffres",
        "creditCard.cvcField.placeholder.3digits": "3\xa0chiffres",
        "creditCard.taxNumber.placeholder": "AAMMJJ / 0123456789",
        installments: "Nombre de versements",
        installmentOption: "%{times}x %{partialValue}",
        installmentOptionMonths: "%{times}\xa0mois",
        "installments.oneTime": "Paiement unique",
        "installments.installments": "Paiement \xe9chelonn\xe9",
        "installments.revolving": "Paiement en plusieurs fois",
        "sepaDirectDebit.ibanField.invalid": "Num\xe9ro de compte non valide",
        "sepaDirectDebit.nameField.placeholder": "N. Bernard",
        "sepa.ownerName": "Au nom de",
        "sepa.ibanNumber": "Num\xe9ro de compte (IBAN)",
        "error.title": "Erreur",
        "error.subtitle.redirect": "\xc9chec de la redirection",
        "error.subtitle.payment": "\xc9chec du paiement",
        "error.subtitle.refused": "Paiement refus\xe9",
        "error.message.unknown": "Une erreur inconnue s'est produite",
        "idealIssuer.selectField.title": "Banque",
        "idealIssuer.selectField.placeholder": "S\xe9lectionnez votre banque",
        "creditCard.success": "Paiement r\xe9ussi",
        loading: "Chargement en cours...",
        continue: "Continuer",
        continueTo: "Poursuivre vers",
        "wechatpay.timetopay": "Vous avez %@ pour payer cette somme",
        "wechatpay.scanqrcode": "Scanner le code QR",
        personalDetails: "Informations personnelles",
        companyDetails: "Coordonn\xe9es de l'entreprise",
        "companyDetails.name": "Nom de l'entreprise",
        "companyDetails.registrationNumber": "Num\xe9ro d'enregistrement",
        socialSecurityNumber: "Num\xe9ro de s\xe9curit\xe9 sociale",
        firstName: "Pr\xe9nom",
        infix: "Pr\xe9fixe",
        lastName: "Nom de famille",
        mobileNumber: "Num\xe9ro de portable",
        "mobileNumber.invalid": "Num\xe9ro de portable non valide",
        city: "Ville",
        postalCode: "Code postal",
        countryCode: "Code pays",
        telephoneNumber: "Num\xe9ro de t\xe9l\xe9phone",
        dateOfBirth: "Date de naissance",
        shopperEmail: "Adresse e-mail",
        gender: "Sexe",
        male: "Homme",
        female: "Femme",
        billingAddress: "Adresse de facturation",
        street: "Rue",
        stateOrProvince: "\xc9tat ou province",
        country: "Pays",
        houseNumberOrName: "Num\xe9ro de rue",
        separateDeliveryAddress: "Indiquer une adresse de livraison distincte",
        deliveryAddress: "Adresse de livraison",
        zipCode: "Code postal",
        apartmentSuite: "Appartement",
        provinceOrTerritory: "Province ou territoire",
        cityTown: "Ville",
        address: "Adresse",
        state: "\xc9tat",
        "field.title.optional": "(facultatif)",
        "creditCard.cvcField.title.optional": "CVC / CVV (facultatif)",
        "issuerList.wallet.placeholder": "S\xe9lectionnez votre portefeuille",
        privacyPolicy: "Politique de confidentialit\xe9",
        "afterPay.agreement": "J'accepte les %@ de AfterPay",
        paymentConditions: "conditions de paiement",
        openApp: "Ouvrir l'application",
        "voucher.readInstructions": "Lire les instructions",
        "voucher.introduction":
          "Merci pour votre achat, veuillez utiliser le coupon suivant pour finaliser votre paiement.",
        "voucher.expirationDate": "Date d'expiration",
        "voucher.alternativeReference": "Autre r\xe9f\xe9rence",
        "dragonpay.voucher.non.bank.selectField.placeholder":
          "S\xe9lectionnez votre fournisseur",
        "dragonpay.voucher.bank.selectField.placeholder":
          "S\xe9lectionnez votre banque",
        "voucher.paymentReferenceLabel": "R\xe9f\xe9rence du paiement",
        "voucher.surcharge": "Comprend une surcharge de %@",
        "voucher.introduction.doku":
          "Nous vous remercions de votre achat. Veuillez finaliser votre paiement \xe0 l'aide des informations suivantes.",
        "voucher.shopperName": "Nom de l'acheteur",
        "voucher.merchantName": "Marchand",
        "voucher.introduction.econtext":
          "Nous vous remercions de votre achat. Veuillez finaliser votre paiement \xe0 l'aide des informations suivantes.",
        "voucher.telephoneNumber": "Num\xe9ro de t\xe9l\xe9phone",
        "voucher.shopperReference": "R\xe9f\xe9rence client",
        "voucher.collectionInstitutionNumber": "Num\xe9ro du point de paiement",
        "voucher.econtext.telephoneNumber.invalid":
          "Le num\xe9ro de t\xe9l\xe9phone doit comporter 10 ou 11\xa0chiffres",
        "boletobancario.btnLabel": "G\xe9n\xe9rer un Boleto",
        "boleto.sendCopyToEmail": "Envoyer une copie \xe0 mon adresse e-mail",
        "button.copy": "Copier",
        "button.download": "T\xe9l\xe9charger",
        "creditCard.storedCard.description.ariaLabel":
          "La carte enregistr\xe9e se termine en %@",
        "voucher.entity": "Entit\xe9",
        donateButton: "Faire un don",
        notNowButton: "Pas maintenant",
        thanksForYourSupport: "Merci de votre soutien\xa0!",
        preauthorizeWith: "Pr\xe9-autoriser avec",
        confirmPreauthorization: "Confirmer la pr\xe9-autorisation",
        confirmPurchase: "Confirmer l'achat",
        applyGiftcard: "Utiliser",
        giftcardBalance: "Solde de la carte cadeau",
        deductedBalance: "Solde d\xe9duit",
        "creditCard.pin.title": "PIN",
        "creditCard.encryptedPassword.label":
          "Les deux premiers chiffres du code de votre carte",
        "creditCard.encryptedPassword.placeholder": "12",
        "creditCard.encryptedPassword.invalid": "Code incorrect",
        "creditCard.taxNumber.label":
          "Date de naissance du porteur de carte (au format AAMMJJ) ou num\xe9ro d'identification de l'entreprise (\xe0 10\xa0chiffres)",
        "creditCard.taxNumber.labelAlt":
          "Num\xe9ro d'identification de l'entreprise (\xe0 10\xa0chiffres)",
        "creditCard.taxNumber.invalid":
          "Date de naissance du porteur de carte ou num\xe9ro d'identification de l'entreprise incorrect(e)",
        "storedPaymentMethod.disable.button": "Supprimer",
        "storedPaymentMethod.disable.confirmation":
          "Supprimer le mode de paiement enregistr\xe9",
        "storedPaymentMethod.disable.confirmButton": "Oui, supprimer",
        "storedPaymentMethod.disable.cancelButton": "Annuler",
        "ach.bankAccount": "Compte bancaire",
        "ach.accountHolderNameField.title": "Nom du titulaire du compte",
        "ach.accountHolderNameField.placeholder": "J. Smith",
        "ach.accountHolderNameField.invalid":
          "Nom du titulaire du compte incorrect",
        "ach.accountNumberField.title": "Num\xe9ro du compte",
        "ach.accountNumberField.invalid": "Num\xe9ro du compte incorrect",
        "ach.accountLocationField.title": "Code ABA",
        "ach.accountLocationField.invalid": "Code ABA incorrect",
        "select.state": "S\xe9lectionnez l'\xc9tat",
        "select.stateOrProvince": "S\xe9lectionnez l'\xc9tat ou la province",
        "select.provinceOrTerritory":
          "S\xe9lectionnez la province ou le territoire",
        "select.country": "S\xe9lectionnez le pays",
        "select.noOptionsFound": "Aucune option trouv\xe9e",
        "select.filter.placeholder": "Recherche...",
        "telephoneNumber.invalid": "Num\xe9ro de t\xe9l\xe9phone incorrect",
        qrCodeOrApp: "ou",
        "paypal.processingPayment": "Traitement du paiement en cours...",
        generateQRCode: "G\xe9n\xe9rer un code QR",
        "await.waitForConfirmation": "En attente de confirmation",
        "mbway.confirmPayment":
          "Confirmez votre paiement sur l'application MB WAY",
        "shopperEmail.invalid": "Adresse e-mail incorrecte",
        "dateOfBirth.format": "JJ/MM/AAAA",
        "dateOfBirth.invalid":
          "Vous devez \xeatre \xe2g\xe9(e) d'au moins 18\xa0ans",
        "blik.confirmPayment":
          "Ouvrez votre application bancaire pour confirmer le paiement.",
        "blik.invalid": "Saisissez les 6\xa0chiffres",
        "blik.code": "Code \xe0 6\xa0chiffres",
        "blik.help": "Ouvrez votre application bancaire pour obtenir le code.",
        "swish.pendingMessage":
          "Apr\xe8s avoir scann\xe9 le code QR, la mise \xe0 jour du statut de paiement peut prendre jusqu'\xe0 10\xa0minutes. Si vous effectuez une nouvelle tentative de paiement dans ce d\xe9lai, cela pourrait occasionner plusieurs d\xe9bits.",
        "error.va.gen.01": "Champ incomplet",
        "error.va.gen.02": "Champ non valide",
        "error.va.sf-cc-num.01": "Num\xe9ro de carte non valide",
        "error.va.sf-cc-num.03": "Carte ins\xe9r\xe9e non prise en charge",
        "error.va.sf-cc-dat.01": "Carte trop ancienne",
        "error.va.sf-cc-dat.02": "La date doit \xeatre plus proche",
        "error.giftcard.no-balance":
          "Aucun solde n'est disponible sur cette carte cadeau",
        "error.giftcard.card-error":
          "Aucune carte cadeau ne correspond \xe0 ce num\xe9ro",
        "error.giftcard.currency-error":
          "Les cartes cadeaux sont valables uniquement dans la devise dans laquelle elles ont \xe9t\xe9 \xe9mises",
        "amazonpay.signout": "Se d\xe9connecter d'Amazon",
        "amazonpay.changePaymentDetails":
          "Modifier les informations de paiement",
        "partialPayment.warning":
          "S\xe9lectionnez un autre mode de paiement pour r\xe9gler le solde",
        "partialPayment.remainingBalance": "Le solde restant sera de %{amount}",
        "bankTransfer.beneficiary": "B\xe9n\xe9ficiaire",
        "bankTransfer.iban": "IBAN",
        "bankTransfer.bic": "BIC",
        "bankTransfer.reference": "R\xe9f\xe9rence",
        "bankTransfer.introduction":
          "Continuez \xe0 cr\xe9er un nouveau paiement par virement bancaire. Utilisez les informations de l'\xe9cran suivant pour finaliser ce paiement.",
        "bankTransfer.instructions":
          "Merci pour votre achat\xa0! Veuillez utiliser les informations suivantes pour finaliser votre paiement.",
        "bacs.accountHolderName": "Nom du titulaire du compte bancaire",
        "bacs.accountHolderName.invalid":
          "Nom du titulaire du compte bancaire incorrect",
        "bacs.accountNumber": "Num\xe9ro du compte bancaire",
        "bacs.accountNumber.invalid": "Num\xe9ro du compte bancaire incorrect",
        "bacs.bankLocationId": "Code de tri (sort code)",
        "bacs.bankLocationId.invalid": "Code de tri (sort code) non valide",
        "bacs.consent.amount":
          "J'accepte que le montant ci-dessus soit d\xe9duit de mon compte bancaire.",
        "bacs.consent.account":
          "Je confirme \xeatre le titulaire du compte et qu'aucune autre signature que la mienne n'est requise pour autoriser un pr\xe9l\xe8vement sur ce compte.",
        edit: "Modifier",
        "bacs.confirm": "Confirmer et payer",
        "bacs.result.introduction":
          "T\xe9l\xe9chargez votre mandat de pr\xe9l\xe8vement (DDI)",
        "download.pdf": "T\xe9l\xe9charger le PDF",
        "creditCard.encryptedCardNumber.aria.iframeTitle":
          "Iframe pour le num\xe9ro de carte avec garantie",
        "creditCard.encryptedCardNumber.aria.label":
          "Champ du num\xe9ro de carte",
        "creditCard.encryptedExpiryDate.aria.iframeTitle":
          "Iframe pour la date d'expiration de la carte avec garantie",
        "creditCard.encryptedExpiryDate.aria.label":
          "Champ de la date d'expiration",
        "creditCard.encryptedExpiryMonth.aria.iframeTitle":
          "Iframe pour le mois d'expiration de la carte avec garantie",
        "creditCard.encryptedExpiryMonth.aria.label":
          "Champ du mois d'expiration",
        "creditCard.encryptedExpiryYear.aria.iframeTitle":
          "Iframe pour l'ann\xe9e d'expiration de la carte avec garantie",
        "creditCard.encryptedExpiryYear.aria.label":
          "Champ de l'ann\xe9e d'expiration",
        "creditCard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe pour le code de s\xe9curit\xe9 de la carte avec garantie",
        "creditCard.encryptedSecurityCode.aria.label":
          "Champ du code de s\xe9curit\xe9",
        "giftcard.encryptedCardNumber.aria.iframeTitle":
          "Iframe pour le num\xe9ro de la carte-cadeau avec garantie",
        "giftcard.encryptedCardNumber.aria.label":
          "Champ du num\xe9ro de la carte cadeau",
        "giftcard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe pour le code de s\xe9curit\xe9 de la carte-cadeau avec garantie",
        "giftcard.encryptedSecurityCode.aria.label":
          "Champ du code de s\xe9curit\xe9 de la carte-cadeau",
        giftcardTransactionLimit:
          "Montant maximum autoris\xe9 par transaction avec cette carte cadeau\xa0: %{amount}",
        "ach.encryptedBankAccountNumber.aria.iframeTitle":
          "Iframe pour le num\xe9ro du compte bancaire avec garantie",
        "ach.encryptedBankAccountNumber.aria.label": "Champ du compte bancaire",
        "ach.encryptedBankLocationId.aria.iframeTitle":
          "Iframe pour le num\xe9ro de routage du compte avec garantie",
        "ach.encryptedBankLocationId.aria.label":
          "Champ du num\xe9ro de routage",
      },
    }),
    Qu = Object.freeze({
      __proto__: null,
      default: {
        payButton: "Platiti",
        "payButton.redirecting": "Preusmjeravanje...",
        storeDetails: "Pohrani za moje sljede\u0107e pla\u0107anje",
        "creditCard.holderName": "Ime na kartici",
        "creditCard.holderName.placeholder": "J. Smith",
        "creditCard.holderName.invalid":
          "Neva\u017ee\u0107e ime vlasnika kartice",
        "creditCard.numberField.title": "Broj kartice",
        "creditCard.numberField.placeholder": "1234 5678 9012 3456",
        "creditCard.expiryDateField.title": "Datum isteka",
        "creditCard.expiryDateField.placeholder": "MM/GG",
        "creditCard.expiryDateField.month": "Mjesec",
        "creditCard.expiryDateField.month.placeholder": "MM",
        "creditCard.expiryDateField.year.placeholder": "GG",
        "creditCard.expiryDateField.year": "Godina",
        "creditCard.cvcField.title": "CVC/CVV",
        "creditCard.cvcField.placeholder": "123",
        "creditCard.storeDetailsButton": "Zapamtiti za sljede\u0107i put",
        "creditCard.cvcField.placeholder.4digits": "4 znamenke",
        "creditCard.cvcField.placeholder.3digits": "3 znamenke",
        "creditCard.taxNumber.placeholder": "YYMMDD / 0123456789",
        installments: "Broj rata",
        installmentOption: "%{times} x %{partialValue}",
        installmentOptionMonths: "Mjeseci: %{times}",
        "installments.oneTime": "Jednokratno pla\u0107anje",
        "installments.installments": "Pla\u0107anje na rate",
        "installments.revolving": "Obnovljivo pla\u0107anje",
        "sepaDirectDebit.ibanField.invalid":
          "Neva\u017ee\u0107i broj ra\u010duna",
        "sepaDirectDebit.nameField.placeholder": "J. Smith",
        "sepa.ownerName": "Ime vlasnika",
        "sepa.ibanNumber": "Broj ra\u010duna (IBAN)",
        "error.title": "Gre\u0161ka",
        "error.subtitle.redirect": "Preusmjeravanje nije uspjelo",
        "error.subtitle.payment": "Pla\u0107anje nije uspjelo",
        "error.subtitle.refused": "Pla\u0107anje odbijeno",
        "error.message.unknown": "Dogodila se nepoznata gre\u0161ka",
        "idealIssuer.selectField.title": "Banka",
        "idealIssuer.selectField.placeholder": "Odaberite banku",
        "creditCard.success": "Pla\u0107anje uspje\u0161no",
        loading: "U\u010ditavanje\u2026",
        continue: "Nastavi",
        continueTo: "Nastavi na",
        "wechatpay.timetopay": "Imate %@ za pla\u0107anje",
        "wechatpay.scanqrcode": "Skeniraj QR k\xf4d",
        personalDetails: "Osobni podatci",
        companyDetails: "Detalji tvrtke",
        "companyDetails.name": "Naziv tvrtke",
        "companyDetails.registrationNumber": "Mati\u010dni broj",
        socialSecurityNumber: "Broj socijalnog osiguranja",
        firstName: "Ime",
        infix: "Prefiks",
        lastName: "Prezime",
        mobileNumber: "Broj mobilnog telefona",
        "mobileNumber.invalid": "Neva\u017ee\u0107i broj mobilnog telefona",
        city: "Grad",
        postalCode: "Po\u0161tanski broj",
        countryCode: "Pozivni broj dr\u017eave",
        telephoneNumber: "Telefonski broj",
        dateOfBirth: "Datum ro\u0111enja",
        shopperEmail: "Adresa e-po\u0161te",
        gender: "Spol",
        male: "Mu\u0161karac",
        female: "\u017dena",
        billingAddress: "Adresa za ra\u010dun",
        street: "Ulica",
        stateOrProvince: "Dr\u017eava ili pokrajina",
        country: "Zemlja",
        houseNumberOrName: "Ku\u0107ni broj",
        separateDeliveryAddress: "Navedite zasebnu adresu za dostavu",
        deliveryAddress: "Adresa za dostavu",
        zipCode: "Po\u0161tanski broj",
        apartmentSuite: "Stan/apartman",
        provinceOrTerritory: "Pokrajina ili teritorij",
        cityTown: "Grad",
        address: "Adresa",
        state: "Savezna dr\u017eava",
        "field.title.optional": "(neobavezno)",
        "creditCard.cvcField.title.optional": "CVC/CVV (nije obavezno)",
        "issuerList.wallet.placeholder": "Odaberite svoju nov\u010danik",
        privacyPolicy: "Politika privatnosti",
        "afterPay.agreement": "Sla\u017eem se s %@ usluge AfterPay",
        paymentConditions: "uvjetima pla\u0107anja",
        openApp: "Otvorite aplikaciju",
        "voucher.readInstructions": "Pro\u010ditajte upute",
        "voucher.introduction":
          "Zahvaljujemo na kupnji, upotrijebite sljede\u0107i kupon za dovr\u0161etak pla\u0107anja.",
        "voucher.expirationDate": "Datum isteka",
        "voucher.alternativeReference": "Alternativna referenca",
        "dragonpay.voucher.non.bank.selectField.placeholder":
          "Odaberite davatelja usluge",
        "dragonpay.voucher.bank.selectField.placeholder": "Odaberite banku",
        "voucher.paymentReferenceLabel": "Referenca za pla\u0107anje",
        "voucher.surcharge": "Uklju\u010duje %@ nadoplate",
        "voucher.introduction.doku":
          "Zahvaljujemo na kupnji, upotrijebite sljede\u0107e podatke za dovr\u0161etak pla\u0107anja.",
        "voucher.shopperName": "Ime kupca",
        "voucher.merchantName": "Trgovac",
        "voucher.introduction.econtext":
          "Zahvaljujemo na kupnji, upotrijebite sljede\u0107e podatke za dovr\u0161etak pla\u0107anja.",
        "voucher.telephoneNumber": "Broj telefona",
        "voucher.shopperReference": "Referenca kupca",
        "voucher.collectionInstitutionNumber": "Broj ustanove za prikupljanje",
        "voucher.econtext.telephoneNumber.invalid":
          "Telefonski broj mora imati 10 ili 11 znamenki",
        "boletobancario.btnLabel": "Generiraj Boleto",
        "boleto.sendCopyToEmail": "Po\u0161alji kopiju na moju e-po\u0161tu",
        "button.copy": "Kopiraj",
        "button.download": "Preuzmi",
        "creditCard.storedCard.description.ariaLabel":
          "Pohranjena kartica zavr\u0161ava na %@",
        "voucher.entity": "Entitet",
        donateButton: "Doniraj",
        notNowButton: "Ne sada",
        thanksForYourSupport: "Hvala na podr\u0161ci!",
        preauthorizeWith: "Prethodno odobri s",
        confirmPreauthorization: "Potvrdite prethodno odobrenje",
        confirmPurchase: "Potvrdite kupnju",
        applyGiftcard: "Iskoristite",
        giftcardBalance: "Stanje na poklon-kartici",
        deductedBalance: "Potro\u0161eni iznos",
        "creditCard.pin.title": "Pin",
        "creditCard.encryptedPassword.label": "Prve 2 znamenke lozinke kartice",
        "creditCard.encryptedPassword.placeholder": "12",
        "creditCard.encryptedPassword.invalid": "Lozinka je neto\u010dna",
        "creditCard.taxNumber.label":
          "Datum ro\u0111enja vlasnika kartice (GGMMDD) ili registracijski broj tvrtke (10 znamenki)",
        "creditCard.taxNumber.labelAlt":
          "Registracijski broj tvrtke (10 znamenki)",
        "creditCard.taxNumber.invalid":
          "Neto\u010dan datum ro\u0111enja vlasnika kartice (GGMMDD) ili registracijski broj tvrtke (10 znamenki)",
        "storedPaymentMethod.disable.button": "Ukloni",
        "storedPaymentMethod.disable.confirmation":
          "Uklonite pohranjeni na\u010din pla\u0107anja",
        "storedPaymentMethod.disable.confirmButton": "Da, ukloni",
        "storedPaymentMethod.disable.cancelButton": "Otka\u017ei",
        "ach.bankAccount": "Bankovni ra\u010dun",
        "ach.accountHolderNameField.title": "Ime vlasnika ra\u010duna",
        "ach.accountHolderNameField.placeholder": "J. Smith",
        "ach.accountHolderNameField.invalid":
          "Neva\u017ee\u0107e ime vlasnika ra\u010duna",
        "ach.accountNumberField.title": "Broj ra\u010duna",
        "ach.accountNumberField.invalid": "Neva\u017ee\u0107i broj ra\u010duna",
        "ach.accountLocationField.title": "ABA identifikacijski broj",
        "ach.accountLocationField.invalid":
          "Neva\u017ee\u0107i ABA identifikacijski broj",
        "select.state": "Odaberite saveznu dr\u017eavu",
        "select.stateOrProvince": "Odaberite dr\u017eavu ili provinciju",
        "select.provinceOrTerritory": "Odaberite provinciju ili teritorij",
        "select.country": "Odaberite dr\u017eavu",
        "select.noOptionsFound": "Nije prona\u0111ena nijedna opcija",
        "select.filter.placeholder": "Tra\u017ei...",
        "telephoneNumber.invalid": "Neva\u017ee\u0107i telefonski broj",
        qrCodeOrApp: "ili",
        "paypal.processingPayment": "Obrada pla\u0107anja u tijeku...",
        generateQRCode: "Generirajte QR k\xf4d",
        "await.waitForConfirmation": "\u010ceka se potvrda",
        "mbway.confirmPayment": "Potvrdite uplatu u aplikaciji MB WAY",
        "shopperEmail.invalid": "Neva\u017ee\u0107a adresa e-po\u0161te",
        "dateOfBirth.format": "DD/MM/GGGG",
        "dateOfBirth.invalid": "Morate imati najmanje 18 godina",
        "blik.confirmPayment":
          "Otvorite svoju bankovnu aplikaciju kako biste potvrdili pla\u0107anje.",
        "blik.invalid": "Unesite 6 znamenki",
        "blik.code": "6-znamenkasti k\xf4d",
        "blik.help": "Preuzmite k\xf4d iz bankovne aplikacije.",
        "swish.pendingMessage":
          "Nakon skeniranja status mo\u017ee biti na \u010dekanju do 10 minuta. Poku\u0161aj ponovnog pla\u0107anja u istom periodu mo\u017ee rezultirati vi\u0161estrukim naplatama.",
        "error.va.gen.01": "Nepotpuno polje",
        "error.va.gen.02": "Neva\u017ee\u0107e polje",
        "error.va.sf-cc-num.01": "Neva\u017ee\u0107i broj kartice",
        "error.va.sf-cc-num.03": "Unijeli ste nepodr\u017eanu vrstu kartice",
        "error.va.sf-cc-dat.01": "Kartica je prestara",
        "error.va.sf-cc-dat.02": "Datum je predaleko u budu\u0107nosti",
        "error.giftcard.no-balance":
          "Stanje na ovoj poklon-kartici iznosi nula",
        "error.giftcard.card-error":
          "U na\u0161oj evidenciji nemamo poklon-karticu s ovim brojem",
        "error.giftcard.currency-error":
          "Poklon-kartice vrijede samo u valuti u kojoj su izdane",
        "amazonpay.signout": "Odjava iz Amazona",
        "amazonpay.changePaymentDetails":
          "Promijenite pojedinosti o pla\u0107anju",
        "partialPayment.warning":
          "Odaberite drugi na\u010din pla\u0107anja da biste platili preostali iznos",
        "partialPayment.remainingBalance":
          "Preostalo stanje na ra\u010dunu iznosit \u0107e %{amount}",
        "bankTransfer.beneficiary": "Primatelj",
        "bankTransfer.iban": "IBAN",
        "bankTransfer.bic": "BIC",
        "bankTransfer.reference": "Referenca",
        "bankTransfer.introduction":
          "Nastavite da biste kreirali novu uplatu putem bankovne transakcije. Za finaliziranje ovog pla\u0107anja mo\u017eete se koristiti pojedinostima na sljede\u0107em zaslonu.",
        "bankTransfer.instructions":
          "Zahvaljujemo na kupnji, upotrijebite sljede\u0107e podatke za dovr\u0161etak pla\u0107anja.",
        "bacs.accountHolderName": "Ime vlasnika bankovnog ra\u010duna",
        "bacs.accountHolderName.invalid":
          "Neva\u017ee\u0107e ime vlasnika bankovnog ra\u010duna",
        "bacs.accountNumber": "Broj bankovnog ra\u010duna",
        "bacs.accountNumber.invalid":
          "Neva\u017ee\u0107i broj bankovnog ra\u010duna",
        "bacs.bankLocationId": "Identifikacijski k\xf4d banke (UK)",
        "bacs.bankLocationId.invalid":
          "Neva\u017ee\u0107i identifikacijski k\xf4d banke (UK)",
        "bacs.consent.amount":
          "Sla\u017eem se da se gore navedeni iznos oduzme s mog bankovnog ra\u010duna.",
        "bacs.consent.account":
          "Potvr\u0111ujem da je ra\u010dun na moje ime i da sam jedini potpisnik potreban za autorizaciju izravnog tere\u0107enja na ovom ra\u010dunu.",
        edit: "Uredi",
        "bacs.confirm": "Potvrdi i plati",
        "bacs.result.introduction":
          "Preuzmite upute za izravno tere\u0107enje (DDI / mandat)",
        "download.pdf": "Preuzmite PDF",
        "creditCard.encryptedCardNumber.aria.iframeTitle":
          "Iframe za broj prepaid kartice",
        "creditCard.encryptedCardNumber.aria.label": "Polje za broj kartice",
        "creditCard.encryptedExpiryDate.aria.iframeTitle":
          "Iframe za datum isteka prepaid kartice",
        "creditCard.encryptedExpiryDate.aria.label": "Polje za datum isteka",
        "creditCard.encryptedExpiryMonth.aria.iframeTitle":
          "Iframe za mjesec isteka prepaid kartice",
        "creditCard.encryptedExpiryMonth.aria.label": "Polje za mjesec isteka",
        "creditCard.encryptedExpiryYear.aria.iframeTitle":
          "Iframe za godinu isteka prepaid kartice",
        "creditCard.encryptedExpiryYear.aria.label": "Polje za godinu isteka",
        "creditCard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe za sigurnosni k\xf4d prepaid kartice",
        "creditCard.encryptedSecurityCode.aria.label":
          "Polje za sigurnosni k\xf4d",
        "giftcard.encryptedCardNumber.aria.iframeTitle":
          "Iframe za broj prepaid poklon-kartice",
        "giftcard.encryptedCardNumber.aria.label":
          "Polje za broj poklon-kartice",
        "giftcard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe za sigurnosni k\xf4d prepaid poklon-kartice",
        "giftcard.encryptedSecurityCode.aria.label":
          "Polje za sigurnosni k\xf4d poklon-kartice",
        giftcardTransactionLimit:
          "Na ovoj je poklon-kartici maks. dopu\u0161teno %{amount} po transakciji",
        "ach.encryptedBankAccountNumber.aria.iframeTitle":
          "Iframe za prepaid broj bankovnog ra\u010duna",
        "ach.encryptedBankAccountNumber.aria.label":
          "Polje za broj bankovnog ra\u010duna",
        "ach.encryptedBankLocationId.aria.iframeTitle":
          "Iframe za identifikacijski broj prepaid banke",
        "ach.encryptedBankLocationId.aria.label":
          "Polje za identifikacijski broj banke",
      },
    }),
    $u = Object.freeze({
      __proto__: null,
      default: {
        payButton: "Fizet\xe9s",
        "payButton.redirecting": "\xc1tir\xe1ny\xedt\xe1s...",
        storeDetails: "Ment\xe9s a k\xf6vetkez\u0151 fizet\xe9shez",
        "creditCard.holderName": "A k\xe1rty\xe1n szerepl\u0151 n\xe9v",
        "creditCard.holderName.placeholder": "Gipsz Jakab",
        "creditCard.holderName.invalid":
          "A k\xe1rtyatulajdonos neve \xe9rv\xe9nytelen",
        "creditCard.numberField.title": "K\xe1rtyasz\xe1m",
        "creditCard.numberField.placeholder": "1234 5678 9012 3456",
        "creditCard.expiryDateField.title": "Lej\xe1rati d\xe1tum",
        "creditCard.expiryDateField.placeholder": "HH/\xc9\xc9",
        "creditCard.expiryDateField.month": "H\xf3nap",
        "creditCard.expiryDateField.month.placeholder": "HH",
        "creditCard.expiryDateField.year.placeholder": "\xc9\xc9",
        "creditCard.expiryDateField.year": "\xc9v",
        "creditCard.cvcField.title": "CVC/CVV",
        "creditCard.cvcField.placeholder": "123",
        "creditCard.storeDetailsButton":
          "Megjegyz\xe9s a k\xf6vetkez\u0151 alkalomra",
        "creditCard.cvcField.placeholder.4digits": "4 sz\xe1mjegy\u0171",
        "creditCard.cvcField.placeholder.3digits": "3 sz\xe1mjegy\u0171",
        "creditCard.taxNumber.placeholder": "\xc9\xc9HHNN / 0123456789",
        installments: "R\xe9szletek sz\xe1ma",
        installmentOption: "%{times} x %{partialValue}",
        installmentOptionMonths: "%{times} h\xf3nap",
        "installments.oneTime": "Egy\xf6sszeg\u0171 fizet\xe9s",
        "installments.installments": "R\xe9szletfizet\xe9s",
        "installments.revolving": "T\xf6bb\xf6sszeg\u0171 fizet\xe9s",
        "sepaDirectDebit.ibanField.invalid":
          "\xc9rv\xe9nytelen sz\xe1mlasz\xe1m",
        "sepaDirectDebit.nameField.placeholder": "Gipsz Jakab",
        "sepa.ownerName": "Sz\xe1mlatulajdonos neve",
        "sepa.ibanNumber": "Sz\xe1mlasz\xe1m (IBAN)",
        "error.title": "Hiba",
        "error.subtitle.redirect": "Sikertelen \xe1tir\xe1ny\xedt\xe1s",
        "error.subtitle.payment": "Sikertelen fizet\xe9s",
        "error.subtitle.refused": "A fizet\xe9s elutas\xedtva",
        "error.message.unknown": "Ismeretlen hiba t\xf6rt\xe9nt",
        "idealIssuer.selectField.title": "Bank",
        "idealIssuer.selectField.placeholder": "Bank kiv\xe1laszt\xe1sa",
        "creditCard.success": "Sikeres fizet\xe9s",
        loading: "Bet\xf6lt\xe9s\u2026",
        continue: "Folytat\xe1s",
        continueTo: "Folytat\xe1s a k\xf6vetkez\u0151vel:",
        "wechatpay.timetopay":
          "Fizet\xe9shez rendelkez\xe9sre \xe1ll\xf3 id\u0151: %@",
        "wechatpay.scanqrcode": "QR-k\xf3d beolvas\xe1sa",
        personalDetails: "Szem\xe9lyes adatok",
        companyDetails: "C\xe9g adatai",
        "companyDetails.name": "C\xe9gn\xe9v",
        "companyDetails.registrationNumber": "C\xe9gjegyz\xe9ksz\xe1m",
        socialSecurityNumber: "Szem\xe9lyi igazolv\xe1ny sz\xe1ma",
        firstName: "Keresztn\xe9v",
        infix: "El\u0151tag",
        lastName: "Vezet\xe9kn\xe9v",
        mobileNumber: "Mobiltelefonsz\xe1m",
        "mobileNumber.invalid": "\xc9rv\xe9nytelen mobilsz\xe1m",
        city: "V\xe1ros",
        postalCode: "Ir\xe1ny\xedt\xf3sz\xe1m",
        countryCode: "Orsz\xe1gk\xf3d",
        telephoneNumber: "Telefonsz\xe1m",
        dateOfBirth: "Sz\xfclet\xe9si d\xe1tum",
        shopperEmail: "E-mail-c\xedm",
        gender: "Nem",
        male: "F\xe9rfi",
        female: "N\u0151",
        billingAddress: "Sz\xe1ml\xe1z\xe1si c\xedm",
        street: "Utca",
        stateOrProvince: "\xc1llam vagy tartom\xe1ny",
        country: "Orsz\xe1g",
        houseNumberOrName: "H\xe1zsz\xe1m",
        separateDeliveryAddress:
          "Elt\xe9r\u0151 sz\xe1ll\xedt\xe1si c\xedm megad\xe1sa",
        deliveryAddress: "Sz\xe1ll\xedt\xe1si c\xedm",
        zipCode: "Ir\xe1ny\xedt\xf3sz\xe1m",
        apartmentSuite: "Lak\xe1s/ajt\xf3sz\xe1m",
        provinceOrTerritory: "Tartom\xe1ny vagy ter\xfclet",
        cityTown: "V\xe1ros",
        address: "C\xedm",
        state: "\xc1llam",
        "field.title.optional": "(nem k\xf6telez\u0151)",
        "creditCard.cvcField.title.optional": "CVC/CVV (opcion\xe1lis)",
        "issuerList.wallet.placeholder": "P\xe9nzt\xe1rca kiv\xe1laszt\xe1sa",
        privacyPolicy: "Adatv\xe9delmi szab\xe1lyzat",
        "afterPay.agreement": "Elfogadom az AfterPay %@",
        paymentConditions: "fizet\xe9si felt\xe9teleit",
        openApp: "Alkalmaz\xe1s megnyit\xe1sa",
        "voucher.readInstructions": "Olvassa el az utas\xedt\xe1sokat",
        "voucher.introduction":
          "K\xf6sz\xf6nj\xfck a v\xe1s\xe1rl\xe1st! K\xe9rj\xfck, a fizet\xe9shez haszn\xe1lja a k\xf6vetkez\u0151 kupont.",
        "voucher.expirationDate": "Lej\xe1rati d\xe1tum",
        "voucher.alternativeReference": "Alternat\xedv hivatkoz\xe1s",
        "dragonpay.voucher.non.bank.selectField.placeholder":
          "Szolg\xe1ltat\xf3 kiv\xe1laszt\xe1sa",
        "dragonpay.voucher.bank.selectField.placeholder":
          "Bank kiv\xe1laszt\xe1sa",
        "voucher.paymentReferenceLabel": "Fizet\xe9si referencia",
        "voucher.surcharge": "%@ p\xf3td\xedjat tartalmaz",
        "voucher.introduction.doku":
          "K\xf6sz\xf6nj\xfck a v\xe1s\xe1rl\xe1st! K\xe9rj\xfck, a fizet\xe9shez haszn\xe1lja a k\xf6vetkez\u0151 inform\xe1ci\xf3t.",
        "voucher.shopperName": "V\xe1s\xe1rl\xf3 neve",
        "voucher.merchantName": "Keresked\u0151",
        "voucher.introduction.econtext":
          "K\xf6sz\xf6nj\xfck a v\xe1s\xe1rl\xe1st! K\xe9rj\xfck, a fizet\xe9shez haszn\xe1lja a k\xf6vetkez\u0151 inform\xe1ci\xf3t.",
        "voucher.telephoneNumber": "Telefonsz\xe1m",
        "voucher.shopperReference": "V\xe1s\xe1rl\xf3i referencia",
        "voucher.collectionInstitutionNumber": "Beszed\u0151 c\xe9g sz\xe1ma",
        "voucher.econtext.telephoneNumber.invalid":
          "A telefonsz\xe1mnak 10 vagy 11 sz\xe1mjegyb\u0151l kell \xe1llnia",
        "boletobancario.btnLabel": "Boleto l\xe9trehoz\xe1sa",
        "boleto.sendCopyToEmail":
          "M\xe1solat k\xfcld\xe9se az e-mail-c\xedmemre",
        "button.copy": "M\xe1sol\xe1s",
        "button.download": "Let\xf6lt\xe9s",
        "creditCard.storedCard.description.ariaLabel":
          "A t\xe1rolt k\xe1rtya sz\xe1m\xe1nak v\xe9gz\u0151d\xe9se: %@",
        "voucher.entity": "Entit\xe1s",
        donateButton: "Adom\xe1nyoz\xe1s",
        notNowButton: "Most nem",
        thanksForYourSupport: "K\xf6sz\xf6nj\xfck a t\xe1mogat\xe1s\xe1t!",
        preauthorizeWith:
          "El\u0151zetes meghatalmaz\xe1s a k\xf6vetkez\u0151vel:",
        confirmPreauthorization:
          "El\u0151zetes meghatalmaz\xe1s j\xf3v\xe1hagy\xe1sa",
        confirmPurchase: "Fizet\xe9s j\xf3v\xe1hagy\xe1sa",
        applyGiftcard: "Bev\xe1lt\xe1s",
        giftcardBalance: "Aj\xe1nd\xe9kk\xe1rtya egyenlege",
        deductedBalance: "Levont egyenleg",
        "creditCard.pin.title": "PIN-k\xf3d",
        "creditCard.encryptedPassword.label":
          "K\xe1rtya jelszav\xe1nak els\u0151 2 sz\xe1mjegye",
        "creditCard.encryptedPassword.placeholder": "12",
        "creditCard.encryptedPassword.invalid": "\xc9rv\xe9nytelen jelsz\xf3",
        "creditCard.taxNumber.label":
          "K\xe1rtyatulajdonos sz\xfclet\xe9si d\xe1tuma (\xc9\xc9HHNN) vagy c\xe9gjegyz\xe9ksz\xe1m (10 sz\xe1mjegy\u0171)",
        "creditCard.taxNumber.labelAlt":
          "C\xe9gjegyz\xe9ksz\xe1m (10 sz\xe1mjegy\u0171)",
        "creditCard.taxNumber.invalid":
          "A k\xe1rtyatulajdonos sz\xfclet\xe9si d\xe1tuma vagy a c\xe9gjegyz\xe9ksz\xe1m \xe9rv\xe9nytelen",
        "storedPaymentMethod.disable.button": "Elt\xe1vol\xedt\xe1s",
        "storedPaymentMethod.disable.confirmation":
          "T\xe1rolt fizet\xe9si m\xf3d elt\xe1vol\xedt\xe1sa",
        "storedPaymentMethod.disable.confirmButton": "Igen, elt\xe1vol\xedtom",
        "storedPaymentMethod.disable.cancelButton": "M\xe9gse",
        "ach.bankAccount": "Banksz\xe1mla",
        "ach.accountHolderNameField.title": "Sz\xe1mlatulajdonos neve",
        "ach.accountHolderNameField.placeholder": "Gipsz Jakab",
        "ach.accountHolderNameField.invalid":
          "A sz\xe1mlatulajdonos neve \xe9rv\xe9nytelen",
        "ach.accountNumberField.title": "Sz\xe1mlasz\xe1m",
        "ach.accountNumberField.invalid": "\xc9rv\xe9nytelen sz\xe1mlasz\xe1m",
        "ach.accountLocationField.title": "ABA-ir\xe1ny\xedt\xf3sz\xe1m",
        "ach.accountLocationField.invalid":
          "\xc9rv\xe9nytelen ABA-ir\xe1ny\xedt\xf3sz\xe1m",
        "select.state": "\xc1llam kiv\xe1laszt\xe1sa",
        "select.stateOrProvince":
          "\xc1llam vagy tartom\xe1ny kiv\xe1laszt\xe1sa",
        "select.provinceOrTerritory":
          "Tartom\xe1ny vagy ter\xfclet kiv\xe1laszt\xe1sa",
        "select.country": "Orsz\xe1g kiv\xe1laszt\xe1sa",
        "select.noOptionsFound": "Nincsenek tal\xe1latok",
        "select.filter.placeholder": "Keres\xe9s...",
        "telephoneNumber.invalid": "\xc9rv\xe9nytelen telefonsz\xe1m",
        qrCodeOrApp: "vagy",
        "paypal.processingPayment": "Fizet\xe9s feldolgoz\xe1sa\u2026",
        generateQRCode: "QR-k\xf3d l\xe9trehoz\xe1sa",
        "await.waitForConfirmation": "V\xe1rakoz\xe1s a j\xf3v\xe1hagy\xe1sra",
        "mbway.confirmPayment":
          "Fizet\xe9s j\xf3v\xe1hagy\xe1sa az MB WAY alkalmaz\xe1sban",
        "shopperEmail.invalid": "\xc9rv\xe9nytelen e-mail-c\xedm",
        "dateOfBirth.format": "NN/HH/\xc9\xc9\xc9\xc9",
        "dateOfBirth.invalid": "Legal\xe1bb 18 \xe9vesnek kell lennie",
        "blik.confirmPayment":
          "A fizet\xe9s j\xf3v\xe1hagy\xe1s\xe1hoz nyissa meg a banki alkalmaz\xe1st.",
        "blik.invalid": "Adjon meg 6 sz\xe1mjegyet",
        "blik.code": "6 sz\xe1mjegy\u0171 k\xf3d",
        "blik.help": "K\xf3d lek\xe9r\xe9se a banki alkalmaz\xe1sb\xf3l.",
        "swish.pendingMessage":
          "A QR-k\xf3d beolvas\xe1s\xe1t k\xf6vet\u0151en az \xe1llapot ak\xe1r 10 percig is f\xfcgg\u0151ben lehet. Ha ek\xf6zben \xfajb\xf3l fizet\xe9st k\xeds\xe9rel meg, az t\xf6bbsz\xf6ri fizet\xe9st eredm\xe9nyezhet.",
        "error.va.gen.01": "Hi\xe1nyos mez\u0151",
        "error.va.gen.02": "\xc9rv\xe9nytelen mez\u0151",
        "error.va.sf-cc-num.01": "\xc9rv\xe9nytelen k\xe1rtyasz\xe1m",
        "error.va.sf-cc-num.03": "A megadott k\xe1rtya nem t\xe1mogatott",
        "error.va.sf-cc-dat.01": "A k\xe1rtya t\xfal r\xe9gi",
        "error.va.sf-cc-dat.02": "T\xfal t\xe1voli j\xf6v\u0151beli d\xe1tum",
        "error.giftcard.no-balance":
          "Az aj\xe1nd\xe9kk\xe1rtya egyenlege nulla",
        "error.giftcard.card-error":
          "Nyilv\xe1ntart\xe1sunkban nem szerepel ilyen sz\xe1m\xfa aj\xe1nd\xe9kk\xe1rtya",
        "error.giftcard.currency-error":
          "Az aj\xe1nd\xe9kk\xe1rty\xe1k csak abban a p\xe9nznemben \xe9rv\xe9nyesek, amelyre ki\xe1ll\xedtott\xe1k azokat",
        "amazonpay.signout": "Kijelentkez\xe9s az Amazonr\xf3l",
        "amazonpay.changePaymentDetails":
          "Fizet\xe9si adatok m\xf3dos\xedt\xe1sa",
        "partialPayment.warning":
          "M\xe1sik fizet\xe9si m\xf3d v\xe1laszt\xe1sa a fennmarad\xf3 r\xe9sz fizet\xe9s\xe9hez",
        "partialPayment.remainingBalance":
          "A fennmarad\xf3 egyenleg %{amount} lesz",
        "bankTransfer.beneficiary": "Kedvezm\xe9nyezett",
        "bankTransfer.iban": "IBAN",
        "bankTransfer.bic": "BIC",
        "bankTransfer.reference": "Referencia",
        "bankTransfer.introduction":
          "Folytassa, hogy elind\xedtson egy \xfaj banki \xe1tutal\xe1sos fizet\xe9st. A fizet\xe9s v\xe9gleges\xedt\xe9s\xe9hez felhaszn\xe1lhatja a k\xf6vetkez\u0151 k\xe9perny\u0151n megjelen\u0151 adatokat.",
        "bankTransfer.instructions":
          "K\xf6sz\xf6nj\xfck a v\xe1s\xe1rl\xe1st! K\xe9rj\xfck, a fizet\xe9shez haszn\xe1lja a k\xf6vetkez\u0151 inform\xe1ci\xf3t.",
        "bacs.accountHolderName": "Banksz\xe1mla-tulajdonos neve",
        "bacs.accountHolderName.invalid":
          "A banksz\xe1mla-tulajdonos neve \xe9rv\xe9nytelen",
        "bacs.accountNumber": "Banksz\xe1mlasz\xe1m",
        "bacs.accountNumber.invalid": "\xc9rv\xe9nytelen banksz\xe1mlasz\xe1m",
        "bacs.bankLocationId": "Banki azonos\xedt\xf3",
        "bacs.bankLocationId.invalid":
          "\xc9rv\xe9nytelen banki azonos\xedt\xf3",
        "bacs.consent.amount":
          "Elfogadom, hogy a fenti \xf6sszeget levonj\xe1k a banksz\xe1ml\xe1mr\xf3l.",
        "bacs.consent.account":
          "Meger\u0151s\xedtem, hogy a banksz\xe1mla az \xe9n nevemen van, \xe9s \xe9n vagyok a banksz\xe1ml\xe1t \xe9rint\u0151 beszed\xe9si megb\xedz\xe1s j\xf3v\xe1hagy\xe1s\xe1hoz sz\xfcks\xe9ges egyetlen al\xe1\xedr\xf3.",
        edit: "Szerkeszt\xe9s",
        "bacs.confirm": "Meger\u0151s\xedt\xe9s \xe9s fizet\xe9s",
        "bacs.result.introduction":
          "Beszed\xe9si megb\xedz\xe1si utas\xedt\xe1s (meghatalmaz\xe1s) let\xf6lt\xe9se",
        "download.pdf": "PDF let\xf6lt\xe9se",
        "creditCard.encryptedCardNumber.aria.iframeTitle":
          "Iframe a biztons\xe1gos k\xe1rtyasz\xe1mhoz",
        "creditCard.encryptedCardNumber.aria.label":
          "K\xe1rtyasz\xe1m mez\u0151je",
        "creditCard.encryptedExpiryDate.aria.iframeTitle":
          "Iframe a biztons\xe1gos k\xe1rtyalej\xe1rati d\xe1tumhoz",
        "creditCard.encryptedExpiryDate.aria.label":
          "Lej\xe1rati d\xe1tum mez\u0151je",
        "creditCard.encryptedExpiryMonth.aria.iframeTitle":
          "Iframe a biztons\xe1gos k\xe1rtyalej\xe1rati h\xf3naphoz",
        "creditCard.encryptedExpiryMonth.aria.label":
          "Lej\xe1rati h\xf3nap mez\u0151je",
        "creditCard.encryptedExpiryYear.aria.iframeTitle":
          "Iframe a biztons\xe1gos k\xe1rtyalej\xe1rati \xe9vhez",
        "creditCard.encryptedExpiryYear.aria.label":
          "Lej\xe1rati \xe9v mez\u0151je",
        "creditCard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe a biztons\xe1gos k\xe1rtyabiztons\xe1gi k\xf3dhoz",
        "creditCard.encryptedSecurityCode.aria.label":
          "Biztons\xe1gi k\xf3d mez\u0151je",
        "giftcard.encryptedCardNumber.aria.iframeTitle":
          "Iframe a biztons\xe1gos aj\xe1nd\xe9kk\xe1rtyasz\xe1mhoz",
        "giftcard.encryptedCardNumber.aria.label":
          "Aj\xe1nd\xe9kk\xe1rtyasz\xe1m mez\u0151je",
        "giftcard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe a biztons\xe1gos aj\xe1nd\xe9kk\xe1rtya biztons\xe1gi k\xf3dhoz",
        "giftcard.encryptedSecurityCode.aria.label":
          "Aj\xe1nd\xe9kk\xe1rtya biztons\xe1gi k\xf3dj\xe1nak mez\u0151je",
        giftcardTransactionLimit:
          "Ezen az aj\xe1nd\xe9kk\xe1rty\xe1n a tranzakci\xf3nk\xe9nt enged\xe9lyezett maxim\xe1lis \xf6sszeg %{amount}",
        "ach.encryptedBankAccountNumber.aria.iframeTitle":
          "Iframe a biztons\xe1gos banksz\xe1mlasz\xe1mhoz",
        "ach.encryptedBankAccountNumber.aria.label":
          "Banksz\xe1mla mez\u0151je",
        "ach.encryptedBankLocationId.aria.iframeTitle":
          "Iframe a biztons\xe1gos bankazonos\xedt\xf3 k\xf3dhoz",
        "ach.encryptedBankLocationId.aria.label":
          "Bankazonos\xedt\xf3 k\xf3d mez\u0151je",
      },
    }),
    Xu = Object.freeze({
      __proto__: null,
      default: {
        payButton: "Paga",
        "payButton.redirecting": "Reindirizzamento...",
        storeDetails: "Salva per il prossimo pagamento",
        "creditCard.holderName": "Nome sulla carta",
        "creditCard.holderName.placeholder": "J. Smith",
        "creditCard.holderName.invalid":
          "Nome del titolare della carta non valido",
        "creditCard.numberField.title": "Numero carta",
        "creditCard.numberField.placeholder": "1234 5678 9012 3456",
        "creditCard.expiryDateField.title": "Data di scadenza",
        "creditCard.expiryDateField.placeholder": "MM/AA",
        "creditCard.expiryDateField.month": "Mese",
        "creditCard.expiryDateField.month.placeholder": "MM",
        "creditCard.expiryDateField.year.placeholder": "AA",
        "creditCard.expiryDateField.year": "Anno",
        "creditCard.cvcField.title": "CVC / CVV",
        "creditCard.cvcField.placeholder": "123",
        "creditCard.storeDetailsButton": "Ricorda per la prossima volta",
        "creditCard.cvcField.placeholder.4digits": "4 cifre",
        "creditCard.cvcField.placeholder.3digits": "3 cifre",
        "creditCard.taxNumber.placeholder": "AAMMGG/0123456789",
        installments: "Numero di rate",
        installmentOption: "%{partialValue} x%{times}",
        installmentOptionMonths: "%{times} mesi",
        "installments.oneTime": "Pagamento una tantum",
        "installments.installments": "Pagamento rateale",
        "installments.revolving": "Pagamento ricorrente",
        "sepaDirectDebit.ibanField.invalid": "Numero di conto non valido",
        "sepaDirectDebit.nameField.placeholder": "A. Bianchi",
        "sepa.ownerName": "Nome Intestatario Conto",
        "sepa.ibanNumber": "Numero di conto (IBAN)",
        "error.title": "Errore",
        "error.subtitle.redirect": "Reindirizzamento non riuscito",
        "error.subtitle.payment": "Pagamento non riuscito",
        "error.subtitle.refused": "Pagamento respinto",
        "error.message.unknown": "Si \xe8 verificato un errore sconosciuto",
        "idealIssuer.selectField.title": "Banca",
        "idealIssuer.selectField.placeholder": "Seleziona la banca",
        "creditCard.success": "Pagamento riuscito",
        loading: "Caricamento in corso...",
        continue: "Continua",
        continueTo: "Procedi verso",
        "wechatpay.timetopay": "Devi pagare %@",
        "wechatpay.scanqrcode": "Scansiona il codice QR",
        personalDetails: "Dati personali",
        companyDetails: "Informazioni dell'azienda",
        "companyDetails.name": "Ragione sociale",
        "companyDetails.registrationNumber": "Numero di registrazione",
        socialSecurityNumber: "Numero di previdenza sociale",
        firstName: "Nome",
        infix: "Prefisso",
        lastName: "Cognome",
        mobileNumber: "Numero di cellulare",
        "mobileNumber.invalid": "Numero di cellulare non valido",
        city: "Citt\xe0",
        postalCode: "Codice postale",
        countryCode: "Codice nazionale",
        telephoneNumber: "Numero di telefono",
        dateOfBirth: "Data di nascita",
        shopperEmail: "Indirizzo e-mail",
        gender: "Sesso",
        male: "Uomo",
        female: "Donna",
        billingAddress: "Indirizzo di fatturazione",
        street: "Via",
        stateOrProvince: "Stato o provincia",
        country: "Paese",
        houseNumberOrName: "Numero civico",
        separateDeliveryAddress:
          "Specifica un indirizzo di consegna alternativo",
        deliveryAddress: "Indirizzo di consegna",
        zipCode: "CAP",
        apartmentSuite: "Appartamento/suite",
        provinceOrTerritory: "Provincia o territorio",
        cityTown: "Citt\xe0",
        address: "Indirizzo",
        state: "Stato",
        "field.title.optional": "(facoltativo)",
        "creditCard.cvcField.title.optional": "CVC/CVV (facoltativo)",
        "issuerList.wallet.placeholder": "Seleziona il tuo portafoglio",
        privacyPolicy: "Informativa sulla privacy",
        "afterPay.agreement": "Accetto i %@ di AfterPay",
        paymentConditions: "termini di pagamento",
        openApp: "Apri l'app",
        "voucher.readInstructions": "Leggi le istruzioni",
        "voucher.introduction":
          "Grazie per il tuo acquisto, utilizza il seguente coupon per completare il pagamento.",
        "voucher.expirationDate": "Data di scadenza",
        "voucher.alternativeReference": "Riferimento alternativo",
        "dragonpay.voucher.non.bank.selectField.placeholder":
          "Seleziona il tuo fornitore",
        "dragonpay.voucher.bank.selectField.placeholder": "Seleziona la banca",
        "voucher.paymentReferenceLabel": "Riferimento del pagamento",
        "voucher.surcharge": "Include un sovrapprezzo di %@",
        "voucher.introduction.doku":
          "Grazie per il tuo acquisto, utilizza i seguenti dati per completare il pagamento.",
        "voucher.shopperName": "Nome dell'acquirente",
        "voucher.merchantName": "Esercente",
        "voucher.introduction.econtext":
          "Grazie per il tuo acquisto, utilizza i seguenti dati per completare il pagamento.",
        "voucher.telephoneNumber": "Numero di telefono",
        "voucher.shopperReference": "Riferimento dell'acquirente",
        "voucher.collectionInstitutionNumber":
          "Codice identificativo del negozio",
        "voucher.econtext.telephoneNumber.invalid":
          "Il numero di telefono deve essere di 10 o 11 cifre",
        "boletobancario.btnLabel": "Genera Boleto",
        "boleto.sendCopyToEmail": "Invia una copia alla mia e-mail",
        "button.copy": "Copia",
        "button.download": "Scarica",
        "creditCard.storedCard.description.ariaLabel":
          "La carta memorizzata termina in %@",
        "voucher.entity": "Entit\xe0",
        donateButton: "Dona",
        notNowButton: "Non ora",
        thanksForYourSupport: "Grazie per il tuo sostegno!",
        preauthorizeWith: "Preautorizza con",
        confirmPreauthorization: "Conferma preautorizzazione",
        confirmPurchase: "Conferma acquisto",
        applyGiftcard: "Riscatta",
        giftcardBalance: "Saldo del buono",
        deductedBalance: "Importo detratto",
        "creditCard.pin.title": "Pin",
        "creditCard.encryptedPassword.label":
          "Prime 2 cifre della password della carta",
        "creditCard.encryptedPassword.placeholder": "12",
        "creditCard.encryptedPassword.invalid": "Password non valida",
        "creditCard.taxNumber.label":
          "Data di nascita del titolare della carta (AAMMGG) o numero di registrazione aziendale (10 cifre)",
        "creditCard.taxNumber.labelAlt":
          "Numero di registrazione aziendale (10 cifre)",
        "creditCard.taxNumber.invalid":
          "Data di nascita del titolare della carta o numero di registrazione aziendale non validi",
        "storedPaymentMethod.disable.button": "Rimuovi",
        "storedPaymentMethod.disable.confirmation":
          "Rimuovi il metodo di pagamento archiviato",
        "storedPaymentMethod.disable.confirmButton": "S\xec, rimuoverli",
        "storedPaymentMethod.disable.cancelButton": "Cancella",
        "ach.bankAccount": "Conto bancario",
        "ach.accountHolderNameField.title": "Nome del titolare del conto",
        "ach.accountHolderNameField.placeholder": "J. Smith",
        "ach.accountHolderNameField.invalid":
          "Nome del titolare del conto non valido",
        "ach.accountNumberField.title": "Numero di conto",
        "ach.accountNumberField.invalid": "Numero di conto non valido",
        "ach.accountLocationField.title": "Codice ABA",
        "ach.accountLocationField.invalid": "Codice ABA non valido",
        "select.state": "Seleziona stato",
        "select.stateOrProvince": "Seleziona stato o provincia",
        "select.provinceOrTerritory": "Seleziona provincia o territorio",
        "select.country": "Seleziona paese",
        "select.noOptionsFound": "Nessuna opzione trovata",
        "select.filter.placeholder": "Cerca...",
        "telephoneNumber.invalid": "Numero di telefono non valido",
        qrCodeOrApp: "o",
        "paypal.processingPayment": "Elaborazione del pagamento in corso...",
        generateQRCode: "Genera codice QR",
        "await.waitForConfirmation": "In attesa di conferma",
        "mbway.confirmPayment": "Conferma il pagamento con l'app MB WAY",
        "shopperEmail.invalid": "Indirizzo e-mail non valido",
        "dateOfBirth.format": "GG/MM/AAAA",
        "dateOfBirth.invalid": "Devi avere almeno 18 anni",
        "blik.confirmPayment":
          "Apri l'app della tua banca per confermare il pagamento.",
        "blik.invalid": "Inserisci 6 numeri",
        "blik.code": "Codice a 6 cifre",
        "blik.help": "Ottieni il codice dalla app della tua banca.",
        "swish.pendingMessage":
          "In seguito alla scansione, lo stato della transazione pu\xf2 rimanere in sospeso per un massimo di 10 minuti. Un nuovo tentativo di pagamento durante questo lasso di tempo pu\xf2 comportare pagamenti multipli.",
        "error.va.gen.01": "Campo incompleto",
        "error.va.gen.02": "Campo non valido",
        "error.va.sf-cc-num.01": "Numero carta non valido",
        "error.va.sf-cc-num.03": "Tipo di carta non supportato",
        "error.va.sf-cc-dat.01": "Carta troppo vecchia",
        "error.va.sf-cc-dat.02": "Data troppo avanti nel futuro",
        "error.giftcard.no-balance":
          "Questo buono regalo ha un saldo pari a zero",
        "error.giftcard.card-error":
          "Non abbiamo alcun buono regalo con questo numero nei nostri archivi",
        "error.giftcard.currency-error":
          "I buono regalo sono validi solo nella valuta in cui sono state emessi",
        "amazonpay.signout": "Esci da Amazon",
        "amazonpay.changePaymentDetails": "Modifica i dettagli di pagamento",
        "partialPayment.warning":
          "Seleziona un altro metodo di pagamento per pagare l'importo rimanente",
        "partialPayment.remainingBalance":
          "Il saldo rimanente sar\xe0 di %{amount}",
        "bankTransfer.beneficiary": "Beneficiario",
        "bankTransfer.iban": "IBAN",
        "bankTransfer.bic": "BIC",
        "bankTransfer.reference": "Riferimento",
        "bankTransfer.introduction":
          "Continua per creare un nuovo pagamento tramite bonifico bancario. Puoi utilizzare i dettagli nella schermata seguente per completare l'operazione.",
        "bankTransfer.instructions":
          "Grazie per il tuo acquisto, utilizza i seguenti dati per completare il pagamento.",
        "bacs.accountHolderName": "Nome del titolare del conto bancario",
        "bacs.accountHolderName.invalid":
          "Nome del titolare del conto bancario non valido",
        "bacs.accountNumber": "Numero di conto bancario",
        "bacs.accountNumber.invalid": "Numero di conto bancario non valido",
        "bacs.bankLocationId": "Sort code",
        "bacs.bankLocationId.invalid": "Sort code non valido",
        "bacs.consent.amount":
          "Accetto che l'importo sopra indicato venga detratto dal mio conto bancario.",
        "bacs.consent.account":
          "Confermo che il conto \xe8 intestato al sottoscritto e che sono l'unico firmatario a dover autorizzare l'addebito diretto su questo conto.",
        edit: "Modifica",
        "bacs.confirm": "Conferma e paga",
        "bacs.result.introduction":
          "Scarica le Istruzioni per l'addebito diretto (DDI / Mandato)",
        "download.pdf": "Scarica PDF",
        "creditCard.encryptedCardNumber.aria.iframeTitle":
          "Iframe per numero di carta protetta",
        "creditCard.encryptedCardNumber.aria.label": "Campo numero di carta",
        "creditCard.encryptedExpiryDate.aria.iframeTitle":
          "Iframe data di scadenza per numero di carta protetta",
        "creditCard.encryptedExpiryDate.aria.label": "Campo data di scadenza",
        "creditCard.encryptedExpiryMonth.aria.iframeTitle":
          "Iframe mese di scadenza per numero di carta protetta",
        "creditCard.encryptedExpiryMonth.aria.label": "Campo mese di scadenza",
        "creditCard.encryptedExpiryYear.aria.iframeTitle":
          "Iframe anno di scadenza per numero di carta protetta",
        "creditCard.encryptedExpiryYear.aria.label": "Campo anno di scadenza",
        "creditCard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe per codice di sicurezza della carta protetta",
        "creditCard.encryptedSecurityCode.aria.label":
          "Campo codice di sicurezza",
        "giftcard.encryptedCardNumber.aria.iframeTitle":
          "Iframe per numero di carta regalo protetta",
        "giftcard.encryptedCardNumber.aria.label": "Campo numero carta regalo",
        "giftcard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe per codice di sicurezza della carta regalo protetta",
        "giftcard.encryptedSecurityCode.aria.label":
          "Campo codice di sicurezza della carta regalo",
        giftcardTransactionLimit:
          "Importo massimo di %{amount} per transazione su questo buono regalo",
        "ach.encryptedBankAccountNumber.aria.iframeTitle":
          "Iframe per numero di numero di conto bancario protetto",
        "ach.encryptedBankAccountNumber.aria.label": "Campo conto bancario",
        "ach.encryptedBankLocationId.aria.iframeTitle":
          "Iframe per numero di routing bancario sicuro",
        "ach.encryptedBankLocationId.aria.label":
          "Campo numero di routing bancario",
      },
    }),
    ep = Object.freeze({
      __proto__: null,
      default: {
        payButton: "\u652f\u6255\u3046",
        "payButton.redirecting":
          "\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3057\u3066\u3044\u307e\u3059...",
        storeDetails:
          "\u6b21\u56de\u306e\u304a\u652f\u6255\u3044\u306e\u305f\u3081\u8a73\u7d30\u3092\u4fdd\u5b58",
        "creditCard.holderName": "\u30ab\u30fc\u30c9\u4e0a\u306e\u540d\u524d",
        "creditCard.holderName.placeholder": "Taro Yamada",
        "creditCard.holderName.invalid":
          "\u7121\u52b9\u306a\u30ab\u30fc\u30c9\u6240\u6709\u8005\u540d",
        "creditCard.numberField.title": "\u30ab\u30fc\u30c9\u756a\u53f7",
        "creditCard.numberField.placeholder": "1234 5678 9012 3456",
        "creditCard.expiryDateField.title": "\u6709\u52b9\u671f\u9650",
        "creditCard.expiryDateField.placeholder": "MM/YY",
        "creditCard.expiryDateField.month": "\u6708",
        "creditCard.expiryDateField.month.placeholder": "MM",
        "creditCard.expiryDateField.year.placeholder": "YY",
        "creditCard.expiryDateField.year": "\u5e74",
        "creditCard.cvcField.title":
          "\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30fc\u30b3\u30fc\u30c9 (CVC)",
        "creditCard.cvcField.placeholder": "123",
        "creditCard.storeDetailsButton":
          "\u6b21\u56de\u306e\u305f\u3081\u306b\u4fdd\u5b58\u3057\u307e\u3059",
        "creditCard.cvcField.placeholder.4digits": "4\u6841",
        "creditCard.cvcField.placeholder.3digits": "3\u6841",
        "creditCard.taxNumber.placeholder":
          "\u5e74\u6708\u65e5\uff08YYMMDD\uff09/ 0123456789",
        installments: "\u5206\u5272\u56de\u6570",
        installmentOption: "%{times}x %{partialValue}",
        installmentOptionMonths: "%{times}\u304b\u6708",
        "installments.oneTime": "\u4e00\u62ec\u6255\u3044",
        "installments.installments": "\u5206\u5272\u6255\u3044",
        "installments.revolving": "\u30ea\u30dc\u6255\u3044",
        "sepaDirectDebit.ibanField.invalid":
          "\u53e3\u5ea7\u756a\u53f7\u306e\u5165\u529b\u9593\u9055\u3044",
        "sepaDirectDebit.nameField.placeholder": "J. Smith",
        "sepa.ownerName": "\u540d\u7fa9",
        "sepa.ibanNumber": "\u53e3\u5ea7\u756a\u53f7 (IBAN)",
        "error.title": "\u30a8\u30e9\u30fc",
        "error.subtitle.redirect":
          "\u753b\u9762\u306e\u5207\u308a\u66ff\u3048\u5931\u6557\u306b\u3057\u307e\u3057\u305f",
        "error.subtitle.payment":
          "\u652f\u6255\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",
        "error.subtitle.refused":
          "\u30ab\u30fc\u30c9\u4f1a\u793e\u3067\u53d6\u5f15\u304c\u627f\u8a8d\u3055\u308c\u307e\u305b\u3093\u3067\u3057\u305f\u3002",
        "error.message.unknown":
          "\u4e0d\u660e\u306a\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f",
        "idealIssuer.selectField.title": "\u9280\u884c",
        "idealIssuer.selectField.placeholder":
          "\u9280\u884c\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",
        "creditCard.success":
          "\u8a8d\u8a3c\u304c\u6210\u529f\u3057\u307e\u3057\u305f",
        loading: "\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059...",
        continue: "\u7d9a\u3051\u308b",
        continueTo: "\u6b21\u3078\u9032\u3080\uff1a",
        "wechatpay.timetopay":
          "%@\u3092\u304a\u652f\u6255\u3044\u4e0b\u3055\u3044\u3002",
        "wechatpay.scanqrcode":
          "QR \u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3\u3059\u308b",
        personalDetails: "\u500b\u4eba\u60c5\u5831",
        companyDetails: "\u4f1a\u793e\u60c5\u5831",
        "companyDetails.name": "\u4f1a\u793e\u540d",
        "companyDetails.registrationNumber": "\u767b\u9332\u756a\u53f7",
        socialSecurityNumber:
          "\u30bd\u30fc\u30b7\u30e3\u30eb\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30fc\u756a\u53f7",
        firstName: "\u540d",
        infix: "\u656c\u79f0",
        lastName: "\u59d3",
        mobileNumber: "\u643a\u5e2f\u756a\u53f7",
        "mobileNumber.invalid":
          "\u7121\u52b9\u306a\u643a\u5e2f\u96fb\u8a71\u756a\u53f7",
        city: "\u5e02\u533a",
        postalCode: "\u90f5\u4fbf\u756a\u53f7",
        countryCode: "\u56fd\u30b3\u30fc\u30c9",
        telephoneNumber: "\u96fb\u8a71\u756a\u53f7",
        dateOfBirth: "\u751f\u5e74\u6708\u65e5",
        shopperEmail: "E\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",
        gender: "\u6027\u5225",
        male: "\u7537\u6027",
        female: "\u5973\u6027",
        billingAddress: "\u3054\u8acb\u6c42\u4f4f\u6240",
        street: "\u756a\u5730",
        stateOrProvince: "\u90fd\u9053\u5e9c\u770c",
        country: "\u56fd",
        houseNumberOrName: "\u90e8\u5c4b\u756a\u53f7",
        separateDeliveryAddress:
          "\u5225\u306e\u914d\u9001\u5148\u4f4f\u6240\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044",
        deliveryAddress: "\u914d\u9001\u5148\u4f4f\u6240",
        zipCode: "\u90f5\u4fbf\u756a\u53f7",
        apartmentSuite: "\u30a2\u30d1\u30fc\u30c8\u540d/\u90e8\u5c4b\u540d",
        provinceOrTerritory: "\u5dde\u307e\u305f\u306f\u6e96\u5dde",
        cityTown: "\u5e02\u533a\u753a\u6751",
        address: "\u4f4f\u6240",
        state: "\u90fd\u9053\u5e9c\u770c",
        "field.title.optional": "\uff08\u4efb\u610f\uff09",
        "creditCard.cvcField.title.optional":
          "\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30fc\u30b3\u30fc\u30c9(\u4efb\u610f)",
        "issuerList.wallet.placeholder":
          "\u30a6\u30a9\u30ec\u30c3\u30c8\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",
        privacyPolicy:
          "\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc",
        "afterPay.agreement": "AfterPay\u306e%@\u3067\u540c\u610f",
        paymentConditions: "\u652f\u6255\u6761\u4ef6",
        openApp: "\u30a2\u30d7\u30ea\u3092\u958b\u304f",
        "voucher.readInstructions":
          "\u624b\u9806\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044",
        "voucher.introduction":
          "\u304a\u8cb7\u3044\u4e0a\u3052\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u30af\u30fc\u30dd\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3001\u304a\u652f\u6255\u3044\u3092\u5b8c\u4e86\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
        "voucher.expirationDate": "\u6709\u52b9\u671f\u9650",
        "voucher.alternativeReference": "\u5225\u306e\u53c2\u7167",
        "dragonpay.voucher.non.bank.selectField.placeholder":
          "\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",
        "dragonpay.voucher.bank.selectField.placeholder":
          "\u9280\u884c\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",
        "voucher.paymentReferenceLabel": "\u652f\u6255\u306e\u53c2\u7167",
        "voucher.surcharge":
          "%@ \u306e\u8ffd\u52a0\u6599\u91d1\u3092\u542b\u3080",
        "voucher.introduction.doku":
          "\u304a\u8cb7\u3044\u4e0a\u3052\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u60c5\u5831\u3092\u4f7f\u7528\u3057\u3066\u3001\u304a\u652f\u6255\u3044\u3092\u5b8c\u4e86\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
        "voucher.shopperName": "\u8cfc\u5165\u8005\u6c0f\u540d",
        "voucher.merchantName": "\u696d\u8005",
        "voucher.introduction.econtext":
          "\u304a\u8cb7\u3044\u4e0a\u3052\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u60c5\u5831\u3092\u4f7f\u7528\u3057\u3066\u3001\u304a\u652f\u6255\u3044\u3092\u5b8c\u4e86\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
        "voucher.telephoneNumber": "\u96fb\u8a71\u756a\u53f7",
        "voucher.shopperReference":
          "\u8cfc\u5165\u8005\u5411\u3051\u53c2\u8003\u60c5\u5831",
        "voucher.collectionInstitutionNumber":
          "\u53ce\u7d0d\u6a5f\u95a2\u756a\u53f7",
        "voucher.econtext.telephoneNumber.invalid":
          "\u96fb\u8a71\u756a\u53f7\u306f10\u6841\u307e\u305f\u306f11\u6841\u306b\u3057\u3066\u304f\u3060\u3055\u3044",
        "boletobancario.btnLabel": "Boleto\u3092\u751f\u6210\u3059\u308b",
        "boleto.sendCopyToEmail":
          "\u81ea\u5206\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u30b3\u30d4\u30fc\u3092\u9001\u4fe1\u3059\u308b",
        "button.copy": "\u30b3\u30d4\u30fc",
        "button.download": "\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",
        "creditCard.storedCard.description.ariaLabel":
          "\u4fdd\u5b58\u3055\u308c\u305f\u30ab\u30fc\u30c9\u306f\uff05@\u306b\u7d42\u4e86\u3057\u307e\u3059",
        "voucher.entity": "\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3",
        donateButton: "\u5bc4\u4ed8\u3059\u308b",
        notNowButton: "\u4eca\u306f\u3057\u306a\u3044",
        thanksForYourSupport:
          "\u3054\u652f\u63f4\u3044\u305f\u3060\u304d\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002",
        preauthorizeWith:
          "\u6b21\u3067\u4e8b\u524d\u8a8d\u8a3c\u3059\u308b\uff1a",
        confirmPreauthorization:
          "\u4e8b\u524d\u627f\u8a8d\u3092\u78ba\u8a8d\u3059\u308b",
        confirmPurchase: "\u8cfc\u5165\u3092\u78ba\u8a8d\u3059\u308b",
        applyGiftcard: "\u5229\u7528\u3059\u308b",
        giftcardBalance:
          "\u30ae\u30d5\u30c8\u30ab\u30fc\u30c9\u306e\u6b8b\u9ad8",
        deductedBalance: "\u5dee\u3057\u5f15\u304d\u5f8c\u6b8b\u9ad8",
        "creditCard.pin.title": "PIN",
        "creditCard.encryptedPassword.label":
          "\u30ab\u30fc\u30c9\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u6700\u521d\u306e2\u6841",
        "creditCard.encryptedPassword.placeholder": "12",
        "creditCard.encryptedPassword.invalid":
          "\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u7121\u52b9\u3067\u3059",
        "creditCard.taxNumber.label":
          "\u30ab\u30fc\u30c9\u6240\u6709\u8005\u306e\u751f\u5e74\u6708\u65e5\uff08YYMMDD\uff09\u307e\u305f\u306f\u6cd5\u4eba\u767b\u9332\u756a\u53f7\uff0810\u6841\uff09",
        "creditCard.taxNumber.labelAlt":
          "\u6cd5\u4eba\u767b\u9332\u756a\u53f7\uff0810\u6841\uff09",
        "creditCard.taxNumber.invalid":
          "\u30ab\u30fc\u30c9\u6240\u6709\u8005\u306e\u751f\u5e74\u6708\u65e5\u307e\u305f\u306f\u6cd5\u4eba\u767b\u9332\u756a\u53f7\u304c\u7121\u52b9\u3067\u3059",
        "storedPaymentMethod.disable.button": "\u524a\u9664",
        "storedPaymentMethod.disable.confirmation":
          "\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u652f\u6255\u65b9\u6cd5\u3092\u524a\u9664\u3059\u308b",
        "storedPaymentMethod.disable.confirmButton":
          "\u306f\u3044\u3001\u524a\u9664\u3057\u307e\u3059",
        "storedPaymentMethod.disable.cancelButton":
          "\u30ad\u30e3\u30f3\u30bb\u30eb",
        "ach.bankAccount": "\u9280\u884c\u53e3\u5ea7",
        "ach.accountHolderNameField.title": "\u53e3\u5ea7\u540d\u7fa9",
        "ach.accountHolderNameField.placeholder": "Taro Yamada",
        "ach.accountHolderNameField.invalid":
          "\u7121\u52b9\u306a\u53e3\u5ea7\u540d\u7fa9",
        "ach.accountNumberField.title": "\u53e3\u5ea7\u756a\u53f7",
        "ach.accountNumberField.invalid":
          "\u53e3\u5ea7\u756a\u53f7\u306e\u5165\u529b\u9593\u9055\u3044",
        "ach.accountLocationField.title": "ABA\u30ca\u30f3\u30d0\u30fc",
        "ach.accountLocationField.invalid":
          "\u7121\u52b9\u306aABA\u30ca\u30f3\u30d0\u30fc",
        "select.state":
          "\u90fd\u9053\u5e9c\u770c\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",
        "select.stateOrProvince":
          "\u90fd\u9053\u5e9c\u770c\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",
        "select.provinceOrTerritory":
          "\u5dde\u307e\u305f\u306f\u6e96\u5dde\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",
        "select.country":
          "\u56fd\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",
        "select.noOptionsFound":
          "\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f",
        "select.filter.placeholder": "\u691c\u7d22...",
        "telephoneNumber.invalid": "\u7121\u52b9\u306a\u96fb\u8a71\u756a\u53f7",
        qrCodeOrApp: "\u307e\u305f\u306f",
        "paypal.processingPayment":
          "\u652f\u6255\u3044\u3092\u51e6\u7406\u3057\u3066\u3044\u307e\u3059...",
        generateQRCode: "QR\u30b3\u30fc\u30c9\u3092\u751f\u6210\u3059\u308b",
        "await.waitForConfirmation":
          "\u78ba\u8a8d\u3092\u5f85\u3063\u3066\u3044\u307e\u3059",
        "mbway.confirmPayment":
          "MB WAY\u30a2\u30d7\u30ea\u3067\u652f\u6255\u3092\u78ba\u8a8d\u3059\u308b",
        "shopperEmail.invalid":
          "E\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u304c\u7121\u52b9\u3067\u3059",
        "dateOfBirth.format": "DD/MM/YYYY",
        "dateOfBirth.invalid":
          "18\u6b73\u4ee5\u4e0a\u306e\u65b9\u306e\u307f\u3054\u5229\u7528\u3044\u305f\u3060\u3051\u307e\u3059",
        "blik.confirmPayment":
          "\u30d0\u30f3\u30ad\u30f3\u30b0\u30a2\u30d7\u30ea\u3092\u958b\u3044\u3066\u3001\u652f\u6255\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
        "blik.invalid":
          "6\u3064\u306e\u6570\u5b57\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",
        "blik.code": "6\u6841\u306e\u30b3\u30fc\u30c9",
        "blik.help":
          "\u30d0\u30f3\u30ad\u30f3\u30b0\u30a2\u30d7\u30ea\u304b\u3089\u30b3\u30fc\u30c9\u3092\u53d6\u5f97\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
        "swish.pendingMessage":
          "\u30b9\u30ad\u30e3\u30f3\u5f8c\u3001\u30b9\u30c6\u30fc\u30bf\u30b9\u306f\u6700\u592710\u5206\u9593\u4fdd\u7559\u72b6\u614b\u306b\u306a\u308a\u307e\u3059\u3002\u3053\u306e\u9593\u306b\u518d\u5ea6\u304a\u652f\u6255\u3044\u3044\u305f\u3060\u3053\u3046\u3068\u3059\u308b\u3068\u3001\u8907\u6570\u306e\u8acb\u6c42\u304c\u767a\u751f\u3059\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002",
        "error.va.gen.01":
          "\u4e0d\u5b8c\u5168\u306a\u30d5\u30a3\u30fc\u30eb\u30c9",
        "error.va.gen.02":
          "\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u7121\u52b9\u3067\u3059",
        "error.va.sf-cc-num.01":
          "\u30ab\u30fc\u30c9\u756a\u53f7\u304c\u7121\u52b9\u3067\u3059",
        "error.va.sf-cc-num.03":
          "\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u30ab\u30fc\u30c9\u304c\u5165\u529b\u3055\u308c\u307e\u3057\u305f",
        "error.va.sf-cc-dat.01":
          "\u30ab\u30fc\u30c9\u304c\u53e4\u3059\u304e\u307e\u3059",
        "error.va.sf-cc-dat.02":
          "\u672a\u6765\u306e\u65e5\u4ed8\u304c\u5148\u3059\u304e\u3067\u3059",
        "error.giftcard.no-balance":
          "\u3053\u306e\u30ae\u30d5\u30c8\u30ab\u30fc\u30c9\u306e\u6b8b\u9ad8\u306f\u30bc\u30ed\u3067\u3059",
        "error.giftcard.card-error":
          "\u8a18\u9332\u3067\u306f\u3001\u3053\u306e\u756a\u53f7\u306e\u30ae\u30d5\u30c8\u30ab\u30fc\u30c9\u306f\u3042\u308a\u307e\u305b\u3093",
        "error.giftcard.currency-error":
          "\u30ae\u30d5\u30c8\u30ab\u30fc\u30c9\u306f\u3001\u767a\u884c\u3055\u308c\u305f\u901a\u8ca8\u3067\u306e\u307f\u6709\u52b9\u3067\u3059\u3002",
        "amazonpay.signout":
          "Amazon\u304b\u3089\u30b5\u30a4\u30f3\u30a2\u30a6\u30c8\u3059\u308b",
        "amazonpay.changePaymentDetails":
          "\u652f\u6255\u660e\u7d30\u3092\u5909\u66f4\u3059\u308b",
        "partialPayment.warning":
          "\u6b8b\u91d1\u3092\u652f\u6255\u3046\u5225\u306e\u652f\u6255\u65b9\u6cd5\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",
        "partialPayment.remainingBalance":
          "\u6b8b\u308a\u306e\u6b8b\u9ad8\u306f%{amount}\u306b\u306a\u308a\u307e\u3059",
        "bankTransfer.beneficiary": "\u53d7\u76ca\u8005",
        "bankTransfer.iban": "IBAN",
        "bankTransfer.bic": "BIC",
        "bankTransfer.reference": "\u53c2\u7167",
        "bankTransfer.introduction":
          "\u65b0\u3057\u3044\u9280\u884c\u632f\u8fbc\u306b\u3088\u308b\u304a\u652f\u6255\u306e\u4f5c\u6210\u3092\u7d9a\u884c\u3057\u307e\u3059\u3002\u6b21\u306e\u753b\u9762\u306e\u8a73\u7d30\u3092\u4f7f\u7528\u3057\u3066\u3001\u3053\u306e\u304a\u652f\u6255\u3044\u3092\u78ba\u5b9a\u3067\u304d\u307e\u3059\u3002",
        "bankTransfer.instructions":
          "\u304a\u8cb7\u3044\u4e0a\u3052\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u60c5\u5831\u3092\u4f7f\u7528\u3057\u3066\u3001\u304a\u652f\u6255\u3044\u3092\u5b8c\u4e86\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
        "bacs.accountHolderName": "\u9280\u884c\u53e3\u5ea7\u540d\u7fa9",
        "bacs.accountHolderName.invalid":
          "\u9280\u884c\u53e3\u5ea7\u540d\u7fa9\u304c\u7121\u52b9\u3067\u3059",
        "bacs.accountNumber": "\u9280\u884c\u53e3\u5ea7\u756a\u53f7",
        "bacs.accountNumber.invalid":
          "\u9280\u884c\u53e3\u5ea7\u756a\u53f7\u304c\u7121\u52b9\u3067\u3059",
        "bacs.bankLocationId": "\u30bd\u30fc\u30c8\u30b3\u30fc\u30c9",
        "bacs.bankLocationId.invalid":
          "\u30bd\u30fc\u30c8\u30b3\u30fc\u30c9\u304c\u7121\u52b9\u3067\u3059",
        "bacs.consent.amount":
          "\u4e0a\u8a18\u306e\u91d1\u984d\u304c\u79c1\u306e\u9280\u884c\u53e3\u5ea7\u304b\u3089\u5f15\u304d\u843d\u3068\u3055\u308c\u308b\u3053\u3068\u306b\u540c\u610f\u3057\u307e\u3059\u3002",
        "bacs.consent.account":
          "\u53e3\u5ea7\u304c\u79c1\u306e\u540d\u7fa9\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3001\u3053\u306e\u53e3\u5ea7\u304b\u3089\u306e\u81ea\u52d5\u5f15\u304d\u843d\u3068\u3057\u3092\u627f\u8a8d\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u552f\u4e00\u306e\u7f72\u540d\u8005\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",
        edit: "\u7de8\u96c6",
        "bacs.confirm": "\u78ba\u8a8d\u3057\u3066\u652f\u6255\u3046",
        "bacs.result.introduction":
          "\u81ea\u52d5\u5f15\u304d\u843d\u3068\u3057\u306e\u8aac\u660e (DDI/\u59d4\u4efb\u72b6) \u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b",
        "download.pdf": "PDF\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",
        "creditCard.encryptedCardNumber.aria.iframeTitle":
          "\u4fdd\u8b77\u3055\u308c\u305f\u30ab\u30fc\u30c9\u756a\u53f7\u306e iframe",
        "creditCard.encryptedCardNumber.aria.label":
          "\u30ab\u30fc\u30c9\u756a\u53f7\u30d5\u30a3\u30fc\u30eb\u30c9",
        "creditCard.encryptedExpiryDate.aria.iframeTitle":
          "\u4fdd\u8b77\u3055\u308c\u305f\u30ab\u30fc\u30c9\u306e\u6709\u52b9\u671f\u9650\u65e5\u306e iframe",
        "creditCard.encryptedExpiryDate.aria.label":
          "\u6709\u52b9\u671f\u9650\u65e5\u30d5\u30a3\u30fc\u30eb\u30c9",
        "creditCard.encryptedExpiryMonth.aria.iframeTitle":
          "\u4fdd\u8b77\u3055\u308c\u305f\u30ab\u30fc\u30c9\u306e\u6709\u52b9\u671f\u9650\u6708\u306e iframe",
        "creditCard.encryptedExpiryMonth.aria.label":
          "\u6709\u52b9\u671f\u9650\u6708\u30d5\u30a3\u30fc\u30eb\u30c9",
        "creditCard.encryptedExpiryYear.aria.iframeTitle":
          "\u4fdd\u8b77\u3055\u308c\u305f\u30ab\u30fc\u30c9\u306e\u6709\u52b9\u671f\u9650\u5e74\u306e iframe",
        "creditCard.encryptedExpiryYear.aria.label":
          "\u6709\u52b9\u671f\u9650\u5e74\u30d5\u30a3\u30fc\u30eb\u30c9",
        "creditCard.encryptedSecurityCode.aria.iframeTitle":
          "\u4fdd\u8b77\u3055\u308c\u305f\u30ab\u30fc\u30c9\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30b3\u30fc\u30c9\u306e iframe",
        "creditCard.encryptedSecurityCode.aria.label":
          "\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30b3\u30fc\u30c9\u30d5\u30a3\u30fc\u30eb\u30c9",
        "giftcard.encryptedCardNumber.aria.iframeTitle":
          "\u4fdd\u8b77\u3055\u308c\u305f\u30ae\u30d5\u30c8\u30ab\u30fc\u30c9\u756a\u53f7\u306e iframe",
        "giftcard.encryptedCardNumber.aria.label":
          "\u30ae\u30d5\u30c8\u30ab\u30fc\u30c9\u756a\u53f7\u30d5\u30a3\u30fc\u30eb\u30c9",
        "giftcard.encryptedSecurityCode.aria.iframeTitle":
          "\u4fdd\u8b77\u3055\u308c\u305f\u30ae\u30d5\u30c8\u30ab\u30fc\u30c9\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30b3\u30fc\u30c9\u306e iframe",
        "giftcard.encryptedSecurityCode.aria.label":
          "\u30ae\u30d5\u30c8\u30ab\u30fc\u30c9\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30b3\u30fc\u30c9\u30d5\u30a3\u30fc\u30eb\u30c9",
        giftcardTransactionLimit:
          "\u3053\u306e\u30ae\u30d5\u30c8\u30ab\u30fc\u30c9\u3067\u306e\u53d6\u5f15\u3054\u3068\u306b\u8a31\u53ef\u3055\u308c\u308b\u6700\u5927%{amount}",
        "ach.encryptedBankAccountNumber.aria.iframeTitle":
          "\u4fdd\u8b77\u3055\u308c\u305f\u9280\u884c\u53e3\u5ea7\u756a\u53f7\u306e iframe",
        "ach.encryptedBankAccountNumber.aria.label":
          "\u9280\u884c\u53e3\u5ea7\u30d5\u30a3\u30fc\u30eb\u30c9",
        "ach.encryptedBankLocationId.aria.iframeTitle":
          "\u4fdd\u8b77\u3055\u308c\u305f\u9280\u884c\u652f\u5e97\u756a\u53f7\u306e iframe",
        "ach.encryptedBankLocationId.aria.label":
          "\u9280\u884c\u652f\u5e97\u756a\u53f7\u30d5\u30a3\u30fc\u30eb\u30c9",
      },
    }),
    tp = Object.freeze({
      __proto__: null,
      default: {
        payButton: "\uacb0\uc81c",
        "payButton.redirecting": "\ub9ac\ub514\ub809\uc158 \uc911...",
        storeDetails:
          "\ub2e4\uc74c \uacb0\uc81c\ub97c \uc704\ud574 \uc774 \uc218\ub2e8 \uc800\uc7a5",
        "creditCard.holderName": "\uce74\ub4dc\uc0c1\uc758 \uc774\ub984",
        "creditCard.holderName.placeholder": "J. Smith",
        "creditCard.holderName.invalid":
          "\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uce74\ub4dc \uc18c\uc720\uc790 \uc774\ub984",
        "creditCard.numberField.title": "\uce74\ub4dc \ubc88\ud638",
        "creditCard.numberField.placeholder": "1234 5678 9012 3456",
        "creditCard.expiryDateField.title": "\ub9cc\ub8cc\uc77c",
        "creditCard.expiryDateField.placeholder": "MM/YY",
        "creditCard.expiryDateField.month": "\uc6d4",
        "creditCard.expiryDateField.month.placeholder": "MM",
        "creditCard.expiryDateField.year.placeholder": "YY",
        "creditCard.expiryDateField.year": "\uc5f0\ub3c4",
        "creditCard.cvcField.title": "CVC / CVV",
        "creditCard.cvcField.placeholder": "123",
        "creditCard.storeDetailsButton":
          "\ub2e4\uc74c\uc744 \uc704\ud574 \uc800\uc7a5",
        "creditCard.cvcField.placeholder.4digits": "4\uc790\ub9ac",
        "creditCard.cvcField.placeholder.3digits": "3\uc790\ub9ac",
        "creditCard.taxNumber.placeholder": "YYMMDD / 0123456789",
        installments: "\ud560\ubd80 \uac1c\uc6d4 \uc218",
        installmentOption: "%{times}x %{partialValue}",
        installmentOptionMonths: "%{times}\uac1c\uc6d4",
        "installments.oneTime": "\uc77c\uc2dc\ubd88 \uacb0\uc81c",
        "installments.installments": "\ud560\ubd80 \uacb0\uc81c",
        "installments.revolving": "\ub9ac\ubcfc\ube59 \uacb0\uc81c",
        "sepaDirectDebit.ibanField.invalid":
          "\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uacc4\uc88c \ubc88\ud638",
        "sepaDirectDebit.nameField.placeholder": "J. Smith",
        "sepa.ownerName": "\uc18c\uc720\uc790 \uc774\ub984",
        "sepa.ibanNumber": "\uacc4\uc88c \ubc88\ud638(IBAN)",
        "error.title": "\uc624\ub958",
        "error.subtitle.redirect": "\ub9ac\ub514\ub809\uc158 \uc2e4\ud328",
        "error.subtitle.payment": "\uacb0\uc81c \uc2e4\ud328",
        "error.subtitle.refused": "\uacb0\uc81c \uac70\ubd80",
        "error.message.unknown":
          "\uc54c \uc218 \uc5c6\ub294 \uc624\ub958 \ubc1c\uc0dd",
        "idealIssuer.selectField.title": "\uc740\ud589",
        "idealIssuer.selectField.placeholder": "\uc740\ud589 \uc120\ud0dd",
        "creditCard.success": "\uacb0\uc81c \uc131\uacf5",
        loading: "\ub85c\ub4dc \uc911\u2026",
        continue: "\uacc4\uc18d",
        continueTo: "\ub2e4\uc74c\uc73c\ub85c \uacc4\uc18d:",
        "wechatpay.timetopay": "\ub0a8\uc740 \uacb0\uc81c \uc2dc\ud55c: %@",
        "wechatpay.scanqrcode": "QR \ucf54\ub4dc \uc2a4\uce94",
        personalDetails: "\uac1c\uc778 \uc815\ubcf4",
        companyDetails: "\ud68c\uc0ac \uc815\ubcf4",
        "companyDetails.name": "\ud68c\uc0ac\uba85",
        "companyDetails.registrationNumber": "\ub4f1\ub85d \ubc88\ud638",
        socialSecurityNumber:
          "\uc0ac\ud68c \ubcf4\uc7a5 \ubc88\ud638(\uc8fc\ubbfc\ub4f1\ub85d\ubc88\ud638)",
        firstName: "\uc774\ub984",
        infix: "\uba85\uce6d",
        lastName: "\uc131",
        mobileNumber: "\ud734\ub300\ud3f0 \ubc88\ud638",
        "mobileNumber.invalid":
          "\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \ud734\ub300\ud3f0 \ubc88\ud638",
        city: "\uc2dc",
        postalCode: "\uc6b0\ud3b8\ubc88\ud638",
        countryCode: "\uad6d\uac00 \ucf54\ub4dc",
        telephoneNumber: "\uc804\ud654\ubc88\ud638",
        dateOfBirth: "\uc0dd\ub144\uc6d4\uc77c",
        shopperEmail: "\uc774\uba54\uc77c \uc8fc\uc18c",
        gender: "\uc131\ubcc4",
        male: "\ub0a8\uc131",
        female: "\uc5ec\uc131",
        billingAddress: "\uccad\uad6c\uc9c0 \uc8fc\uc18c",
        street: "\ub3c4\ub85c\uba85",
        stateOrProvince: "\uc8fc/\ub3c4",
        country: "\uad6d\uac00",
        houseNumberOrName: "\uc9d1 \uc804\ud654\ubc88\ud638",
        separateDeliveryAddress:
          "\ubc30\uc1a1 \uc8fc\uc18c \ubcc4\ub3c4 \uc9c0\uc815",
        deliveryAddress: "\ubc30\uc1a1 \uc8fc\uc18c",
        zipCode: "\uc6b0\ud3b8\ubc88\ud638",
        apartmentSuite: "\uc544\ud30c\ud2b8/\uac74\ubb3c",
        provinceOrTerritory: "\ub3c4",
        cityTown: "\uc2dc/\uad6c",
        address: "\uc8fc\uc18c",
        state: "\uc8fc",
        "field.title.optional": "(\uc120\ud0dd \uc0ac\ud56d)",
        "creditCard.cvcField.title.optional": "CVC / CVV (\uc120\ud0dd)",
        "issuerList.wallet.placeholder":
          "\uc804\uc790 \uc9c0\uac11 \uc120\ud0dd",
        privacyPolicy: "\uac1c\uc778\uc815\ubcf4 \ubcf4\ud638\uc815\ucc45",
        "afterPay.agreement":
          "AfterPay\uc758 %@\uc5d0 \ub3d9\uc758\ud569\ub2c8\ub2e4.",
        paymentConditions: "\uacb0\uc81c \uc870\uac74",
        openApp: "\uc571 \uc5f4\uae30",
        "voucher.readInstructions": "\uc548\ub0b4 \uc77d\uae30",
        "voucher.introduction":
          "\uad6c\ub9e4\ud574 \uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4. \ub2e4\uc74c \ucfe0\ud3f0\uc744 \uc0ac\uc6a9\ud558\uc5ec \uacb0\uc81c\ub97c \uc644\ub8cc\ud558\uc2ed\uc2dc\uc624.",
        "voucher.expirationDate": "\ub9cc\ub8cc\uc77c",
        "voucher.alternativeReference": "\ub300\uccb4 \ucc38\uc870\ubc88\ud638",
        "dragonpay.voucher.non.bank.selectField.placeholder":
          "\uc81c\uacf5 \uc5c5\uccb4 \uc120\ud0dd",
        "dragonpay.voucher.bank.selectField.placeholder":
          "\uc740\ud589 \uc120\ud0dd",
        "voucher.paymentReferenceLabel":
          "\uacb0\uc81c \ucc38\uc870\ubc88\ud638",
        "voucher.surcharge": "%@ \ud560\uc99d\ub8cc \ud3ec\ud568",
        "voucher.introduction.doku":
          "\uad6c\ub9e4\ud574 \uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4. \ub2e4\uc74c \uc815\ubcf4\ub97c \uc774\uc6a9\ud558\uc5ec \uacb0\uc81c\ub97c \uc644\ub8cc\ud558\uc2ed\uc2dc\uc624.",
        "voucher.shopperName": "\uad6c\ub9e4\uc790 \uc774\ub984",
        "voucher.merchantName": "\uac00\ub9f9\uc810",
        "voucher.introduction.econtext":
          "\uad6c\ub9e4\ud574 \uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4. \ub2e4\uc74c \uc815\ubcf4\ub97c \uc774\uc6a9\ud558\uc5ec \uacb0\uc81c\ub97c \uc644\ub8cc\ud558\uc2ed\uc2dc\uc624.",
        "voucher.telephoneNumber": "\uc804\ud654\ubc88\ud638",
        "voucher.shopperReference":
          "\uad6c\ub9e4\uc790 \ucc38\uc870\ubc88\ud638",
        "voucher.collectionInstitutionNumber":
          "\uc218\uae08 \uae30\uad00 \ubc88\ud638",
        "voucher.econtext.telephoneNumber.invalid":
          "\uc804\ud654\ubc88\ud638\ub294 10\uc790\ub9ac \ub610\ub294 11\uc790\ub9ac \uc22b\uc790\uc5ec\uc57c \ud569\ub2c8\ub2e4",
        "boletobancario.btnLabel": "Boleto \uc0dd\uc131",
        "boleto.sendCopyToEmail":
          "\ub0b4 \uc774\uba54\uc77c\ub85c \uc0ac\ubcf8 \ubcf4\ub0b4\uae30",
        "button.copy": "\ubcf5\uc0ac",
        "button.download": "\ub2e4\uc6b4\ub85c\ub4dc",
        "creditCard.storedCard.description.ariaLabel":
          "\uc800\uc7a5\ub41c \uce74\ub4dc\ub294 %@ \ud6c4 \uc885\ub8cc\ub429\ub2c8\ub2e4.",
        "voucher.entity": "\ubc1c\uae09\uc0ac",
        donateButton: "\uae30\ubd80\ud558\uae30",
        notNowButton: "\ub2e4\uc74c\uc5d0 \ud558\uae30",
        thanksForYourSupport:
          "\ub3c4\uc640\uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4!",
        preauthorizeWith: "\uc0ac\uc804 \uc2b9\uc778 \ubc29\ubc95:",
        confirmPreauthorization: "\uc0ac\uc804 \uc2b9\uc778 \ud655\uc778",
        confirmPurchase: "\uad6c\ub9e4 \ud655\uc778",
        applyGiftcard: "\uae30\ud504\ud2b8 \uce74\ub4dc\ub85c \uacb0\uc81c",
        giftcardBalance: "\uae30\ud504\ud2b8 \uce74\ub4dc \uc794\uc561",
        deductedBalance: "\uacf5\uc81c \uc794\uc561",
        "creditCard.pin.title": "\ube44\ubc00\ubc88\ud638",
        "creditCard.encryptedPassword.label":
          "\uce74\ub4dc \ube44\ubc00\ubc88\ud638 \uccab 2\uc790\ub9ac",
        "creditCard.encryptedPassword.placeholder": "12",
        "creditCard.encryptedPassword.invalid":
          "\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \ubc88\ud638",
        "creditCard.taxNumber.label":
          "\uce74\ub4dc \uc18c\uc720\uc790 \uc0dd\ub144\uc6d4\uc77c(\uc608: 870130) \ub610\ub294 \ubc95\uc778 \ub4f1\ub85d \ubc88\ud638(10\uc790\ub9ac)",
        "creditCard.taxNumber.labelAlt":
          "\ubc95\uc778 \ub4f1\ub85d \ubc88\ud638(10\uc790\ub9ac)",
        "creditCard.taxNumber.invalid":
          "\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uce74\ub4dc \uc18c\uc720\uc790 \uc0dd\ub144\uc6d4\uc77c \ub610\ub294 \ubc95\uc778 \ub4f1\ub85d \ubc88\ud638",
        "storedPaymentMethod.disable.button": "\uc0ad\uc81c",
        "storedPaymentMethod.disable.confirmation":
          "\uc800\uc7a5\ub41c \uacb0\uc81c \uc218\ub2e8 \uc0ad\uc81c",
        "storedPaymentMethod.disable.confirmButton":
          "\uc608, \uc0ad\uc81c\ud569\ub2c8\ub2e4",
        "storedPaymentMethod.disable.cancelButton": "\ucde8\uc18c",
        "ach.bankAccount": "\uc740\ud589 \uacc4\uc88c",
        "ach.accountHolderNameField.title":
          "\uacc4\uc88c \uc18c\uc720\uc790 \uc774\ub984",
        "ach.accountHolderNameField.placeholder": "J. Smith",
        "ach.accountHolderNameField.invalid":
          "\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uacc4\uc88c \uc18c\uc720\uc790 \uc774\ub984",
        "ach.accountNumberField.title": "\uacc4\uc88c \ubc88\ud638",
        "ach.accountNumberField.invalid":
          "\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uacc4\uc88c \ubc88\ud638",
        "ach.accountLocationField.title": "ABA \ub77c\uc6b0\ud305 \ubc88\ud638",
        "ach.accountLocationField.invalid":
          "\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 ABA \ub77c\uc6b0\ud305 \ubc88\ud638",
        "select.state": "\uc8fc \uc120\ud0dd",
        "select.stateOrProvince": "\uc8fc/\ub3c4 \uc120\ud0dd",
        "select.provinceOrTerritory": "\ub3c4 \uc120\ud0dd",
        "select.country": "\uad6d\uac00 \uc120\ud0dd",
        "select.noOptionsFound": "\uac80\uc0c9\ub41c \uc635\uc158 \uc5c6\uc74c",
        "select.filter.placeholder": "\uac80\uc0c9...",
        "telephoneNumber.invalid":
          "\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uc804\ud654\ubc88\ud638",
        qrCodeOrApp: "\ub610\ub294",
        "paypal.processingPayment": "\uacb0\uc81c \ucc98\ub9ac \uc911...",
        generateQRCode: "QR \ucf54\ub4dc \uc0dd\uc131",
        "await.waitForConfirmation": "\ud655\uc778 \ub300\uae30\uc911",
        "mbway.confirmPayment":
          "MB WAY \uc571\uc5d0\uc11c \uacb0\uc81c\ub97c \ud655\uc778\ud558\uc2ed\uc2dc\uc624",
        "shopperEmail.invalid":
          "\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uc774\uba54\uc77c \uc8fc\uc18c",
        "dateOfBirth.format": "DD(\uc77c)/MM(\uc6d4)/YYYY(\uc5f0\ub3c4)",
        "dateOfBirth.invalid":
          "\ucd5c\uc18c 18\uc138 \uc774\uc0c1\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4",
        "blik.confirmPayment":
          "\ubc45\ud0b9 \uc571\uc744 \uc5f4\uc5b4\uc11c \uacb0\uc81c\ub97c \ud655\uc778\ud558\uc138\uc694.",
        "blik.invalid": "6\uc790\ub9ac \uc22b\uc790 \uc785\ub825",
        "blik.code": "6\uc790\ub9ac \ucf54\ub4dc",
        "blik.help":
          "\ubc45\ud0b9 \uc571\uc5d0\uc11c \ucf54\ub4dc\ub97c \uac00\uc838\uc624\uc138\uc694.",
        "swish.pendingMessage":
          "\uc2a4\uce94 \ud6c4 \ucd5c\ub300 10\ubd84 \ub3d9\uc548 \uc0c1\ud0dc\uac00 \ubcf4\ub958\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. 10\ubd84 \ub0b4\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud560 \uacbd\uc6b0 \uae08\uc561\uc774 \uc5ec\ub7ec \ubc88 \uccad\uad6c\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
        "error.va.gen.01": "\ubbf8\uc644\ub8cc \ud544\ub4dc",
        "error.va.gen.02":
          "\ud544\ub4dc\uac00 \uc720\ud6a8\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4",
        "error.va.sf-cc-num.01":
          "\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uce74\ub4dc \ubc88\ud638\uc785\ub2c8\ub2e4",
        "error.va.sf-cc-num.03":
          "\uc9c0\uc6d0\ub418\uc9c0 \uc54a\ub294 \uce74\ub4dc\uac00 \uc785\ub825\ub418\uc5c8\uc2b5\ub2c8\ub2e4",
        "error.va.sf-cc-dat.01":
          "\uce74\ub4dc\uac00 \ub108\ubb34 \uc624\ub798\ub418\uc5c8\uc2b5\ub2c8\ub2e4",
        "error.va.sf-cc-dat.02":
          "\ud604\uc7ac\ub85c\ubd80\ud130 \ub108\ubb34 \uba3c \ub0a0\uc9dc\uc785\ub2c8\ub2e4",
        "error.giftcard.no-balance":
          "\uc774 \uae30\ud504\ud2b8 \uce74\ub4dc\uc5d0\ub294 \uc794\uc561\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",
        "error.giftcard.card-error":
          "\uc774 \uae30\ud504\ud2b8 \uce74\ub4dc \ubc88\ud638\ub294 \ub2f9\uc0ac\uc5d0 \ub4f1\ub85d\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4",
        "error.giftcard.currency-error":
          "\uae30\ud504\ud2b8 \uce74\ub4dc\ub294 \ubc1c\uae09\ub41c \ud1b5\ud654\ub85c\ub9cc \uc0ac\uc6a9\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4",
        "amazonpay.signout": "Amazon\uc5d0\uc11c \ub85c\uadf8\uc544\uc6c3",
        "amazonpay.changePaymentDetails":
          "\uacb0\uc81c \uc815\ubcf4 \ubcc0\uacbd",
        "partialPayment.warning":
          "\ub098\uba38\uc9c0 \ube44\uc6a9 \uc9c0\ubd88\uc5d0 \uc0ac\uc6a9\ud560 \ub2e4\ub978 \uacb0\uc81c \uc218\ub2e8 \uc120\ud0dd\ud558\uae30",
        "partialPayment.remainingBalance":
          "\ub0a8\uc740 \uc794\uc561\uc740 %{amount}\uc785\ub2c8\ub2e4",
        "bankTransfer.beneficiary": "\uc218\ub839\uc778",
        "bankTransfer.iban": "IBAN",
        "bankTransfer.bic": "BIC",
        "bankTransfer.reference": "\ucc38\uc870 \ubc88\ud638",
        "bankTransfer.introduction":
          "\uc0c8 \uacc4\uc88c \uc774\uccb4 \uac74\uc744 \uacc4\uc18d \uc9c4\ud589\ud569\ub2c8\ub2e4. \ub2e4\uc74c \ud654\uba74\uc5d0 \ub098\uc624\ub294 \uc815\ubcf4\ub97c \uc774\uc6a9\ud574 \uc774\uccb4\ub97c \uc644\ub8cc\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
        "bankTransfer.instructions":
          "\uad6c\ub9e4\ud574 \uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4. \ub2e4\uc74c \uc815\ubcf4\ub97c \uc774\uc6a9\ud558\uc5ec \uacb0\uc81c\ub97c \uc644\ub8cc\ud558\uc2ed\uc2dc\uc624.",
        "bacs.accountHolderName": "\uc608\uae08\uc8fc \uc774\ub984",
        "bacs.accountHolderName.invalid":
          "\uc608\uae08\uc8fc \uc774\ub984\uc774 \uc720\ud6a8\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4",
        "bacs.accountNumber": "\uacc4\uc88c \ubc88\ud638",
        "bacs.accountNumber.invalid":
          "\uacc4\uc88c \ubc88\ud638\uac00 \uc720\ud6a8\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4",
        "bacs.bankLocationId": "\uc740\ud589 \uc2dd\ubcc4 \ucf54\ub4dc",
        "bacs.bankLocationId.invalid":
          "\uc740\ud589 \uc2dd\ubcc4 \ucf54\ub4dc\uac00 \uc720\ud6a8\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4",
        "bacs.consent.amount":
          "\uacc4\uc88c\uc5d0\uc11c \uc704\uc758 \uae08\uc561\uc744 \uc774\uccb4\ud558\ub294 \uac83\uc5d0 \ub3d9\uc758\ud569\ub2c8\ub2e4.",
        "bacs.consent.account":
          "\ubcf8\uc778\uc774 \uc774 \uacc4\uc88c\uc758 \uc608\uae08\uc8fc\uc774\uba70, \uc774 \uacc4\uc88c\uc5d0\uc11c\uc758 \uc790\ub3d9 \uc774\uccb4\ub97c \uc2b9\uc778\ud558\uae30 \uc704\ud574 \ud544\uc694\ud55c \uc720\uc77c\ud55c \uc11c\uba85\uc778\uc785\ub2c8\ub2e4.",
        edit: "\uc218\uc815",
        "bacs.confirm": "\ud655\uc778 \ubc0f \uacb0\uc81c",
        "bacs.result.introduction":
          "\uc790\ub3d9 \uc774\uccb4 \uc548\ub0b4(DDI/\ud544\uc218) \ub2e4\uc6b4\ub85c\ub4dc",
        "download.pdf": "PDF \ub2e4\uc6b4\ub85c\ub4dc",
        "creditCard.encryptedCardNumber.aria.iframeTitle":
          "\uce74\ub4dc \ubc88\ud638 \ubcf4\uc548\uc744 \uc704\ud55c Iframe",
        "creditCard.encryptedCardNumber.aria.label":
          "\uce74\ub4dc \ubc88\ud638 \uc785\ub825\ub780",
        "creditCard.encryptedExpiryDate.aria.iframeTitle":
          "\uce74\ub4dc \ub9cc\ub8cc \ub0a0\uc9dc \ubcf4\uc548\uc744 \uc704\ud55c Iframe",
        "creditCard.encryptedExpiryDate.aria.label":
          "\ub9cc\ub8cc \ub0a0\uc9dc \uc785\ub825\ub780",
        "creditCard.encryptedExpiryMonth.aria.iframeTitle":
          "\uce74\ub4dc \ub9cc\ub8cc \uc6d4 \ubcf4\uc548\uc744 \uc704\ud55c Iframe",
        "creditCard.encryptedExpiryMonth.aria.label":
          "\ub9cc\ub8cc \uc6d4 \uc785\ub825\ub780",
        "creditCard.encryptedExpiryYear.aria.iframeTitle":
          "\uce74\ub4dc \ub9cc\ub8cc \uc5f0\ub3c4 \ubcf4\uc548\uc744 \uc704\ud55c Iframe",
        "creditCard.encryptedExpiryYear.aria.label":
          "\ub9cc\ub8cc \uc5f0\ub3c4 \uc785\ub825\ub780",
        "creditCard.encryptedSecurityCode.aria.iframeTitle":
          "\uce74\ub4dc \ubcf4\uc548 \ucf54\ub4dc \ubcf4\uc548\uc744 \uc704\ud55c Iframe",
        "creditCard.encryptedSecurityCode.aria.label":
          "\ubcf4\uc548 \ucf54\ub4dc \uc785\ub825\ub780",
        "giftcard.encryptedCardNumber.aria.iframeTitle":
          "\uae30\ud504\ud2b8 \uce74\ub4dc \ubc88\ud638 \ubcf4\uc548\uc744 \uc704\ud55c Iframe",
        "giftcard.encryptedCardNumber.aria.label":
          "\uae30\ud504\ud2b8 \uce74\ub4dc \ubc88\ud638 \uc785\ub825\ub780",
        "giftcard.encryptedSecurityCode.aria.iframeTitle":
          "\uae30\ud504\ud2b8 \uce74\ub4dc \ubcf4\uc548 \ucf54\ub4dc \ubcf4\uc548\uc744 \uc704\ud55c Iframe",
        "giftcard.encryptedSecurityCode.aria.label":
          "\uae30\ud504\ud2b8 \uce74\ub4dc \ubcf4\uc548 \ucf54\ub4dc \uc785\ub825\ub780",
        giftcardTransactionLimit:
          "\uc774 \uae30\ud504\ud2b8\uce74\ub4dc\ub85c \uac74\ub2f9 \uacb0\uc81c \uac00\ub2a5\ud55c \ucd5c\uace0 \uc561\uc218\ub294 %{amount}",
        "ach.encryptedBankAccountNumber.aria.iframeTitle":
          "\uc740\ud589 \uacc4\uc88c \ubc88\ud638 \ubcf4\uc548\uc744 \uc704\ud55c Iframe",
        "ach.encryptedBankAccountNumber.aria.label":
          "\uc740\ud589 \uacc4\uc88c \uc785\ub825\ub780",
        "ach.encryptedBankLocationId.aria.iframeTitle":
          "\uc740\ud589 \ub77c\uc6b0\ud305 \ubc88\ud638 \ubcf4\uc548\uc744 \uc704\ud55c Iframe",
        "ach.encryptedBankLocationId.aria.label":
          "\uc740\ud589 \ub77c\uc6b0\ud305 \ubc88\ud638 \uc785\ub825\ub780",
      },
    }),
    ap = Object.freeze({
      __proto__: null,
      default: {
        payButton: "Betaal",
        "payButton.redirecting": "U wordt doorverwezen...",
        storeDetails: "Bewaar voor mijn volgende betaling",
        "creditCard.holderName": "Naam op kaart",
        "creditCard.holderName.placeholder": "J. Janssen",
        "creditCard.holderName.invalid": "Ongeldige naam kaarthouder",
        "creditCard.numberField.title": "Kaartnummer",
        "creditCard.numberField.placeholder": "1234 5678 9012 3456",
        "creditCard.expiryDateField.title": "Vervaldatum",
        "creditCard.expiryDateField.placeholder": "MM/JJ",
        "creditCard.expiryDateField.month": "Maand",
        "creditCard.expiryDateField.month.placeholder": "MM",
        "creditCard.expiryDateField.year.placeholder": "JJ",
        "creditCard.expiryDateField.year": "Jaar",
        "creditCard.cvcField.title": "Verificatiecode",
        "creditCard.cvcField.placeholder": "123",
        "creditCard.storeDetailsButton": "Onthouden voor de volgende keer",
        "creditCard.cvcField.placeholder.4digits": "4 cijfers",
        "creditCard.cvcField.placeholder.3digits": "3 cijfers",
        "creditCard.taxNumber.placeholder": "JJMMDD / 0123456789",
        installments: "Aantal termijnen",
        installmentOption: "%{times}x %{partialValue}",
        installmentOptionMonths: "%{times} maanden",
        "installments.oneTime": "Eenmalige betaling",
        "installments.installments": "Betaling termijnen",
        "installments.revolving": "Terugkerende betaling",
        "sepaDirectDebit.ibanField.invalid": "Ongeldig rekeningnummer",
        "sepaDirectDebit.nameField.placeholder": "P. de Ridder",
        "sepa.ownerName": "Ten name van",
        "sepa.ibanNumber": "Rekeningnummer (IBAN)",
        "error.title": "Fout",
        "error.subtitle.redirect": "Doorsturen niet gelukt",
        "error.subtitle.payment": "Betaling is niet geslaagd",
        "error.subtitle.refused": "Betaling geweigerd",
        "error.message.unknown": "Er is een onbekende fout opgetreden",
        "idealIssuer.selectField.title": "Bank",
        "idealIssuer.selectField.placeholder": "Selecteer uw bank",
        "creditCard.success": "Betaling geslaagd",
        loading: "Laden....",
        continue: "Doorgaan",
        continueTo: "Doorgaan naar",
        "wechatpay.timetopay": "U heeft %@ om te betalen",
        "wechatpay.scanqrcode": "QR-code scannen",
        personalDetails: "Persoonlijke gegevens",
        companyDetails: "Bedrijfsgegevens",
        "companyDetails.name": "Bedrijfsnaam",
        "companyDetails.registrationNumber": "Registratienummer",
        socialSecurityNumber: "Burgerservicenummer",
        firstName: "Voornaam",
        infix: "Voorvoegsel",
        lastName: "Achternaam",
        mobileNumber: "Telefoonnummer mobiel",
        "mobileNumber.invalid": "Ongeldig mobiel nummer",
        city: "Stad",
        postalCode: "Postcode",
        countryCode: "Landcode",
        telephoneNumber: "Telefoonnummer",
        dateOfBirth: "Geboortedatum",
        shopperEmail: "E-mailadres",
        gender: "Geslacht",
        male: "Man",
        female: "Vrouw",
        billingAddress: "Factuuradres",
        street: "Straatnaam",
        stateOrProvince: "Staat of provincie",
        country: "Land",
        houseNumberOrName: "Huisnummer",
        separateDeliveryAddress: "Een afwijkend bezorgadres opgeven",
        deliveryAddress: "Bezorgadres",
        zipCode: "Postcode",
        apartmentSuite: "Appartement/Suite",
        provinceOrTerritory: "Provincie of territorium",
        cityTown: "Stad",
        address: "Adres",
        state: "Staat",
        "field.title.optional": "(optioneel)",
        "creditCard.cvcField.title.optional": "CVC / CVV (optioneel)",
        "issuerList.wallet.placeholder": "Selecteer uw portemonnee",
        privacyPolicy: "Privacybeleid",
        "afterPay.agreement": "Ik ga akkoord met de %@ van AfterPay",
        paymentConditions: "betalingsvoorwaarden",
        openApp: "Open de app",
        "voucher.readInstructions": "Instructies lezen",
        "voucher.introduction":
          "Bedankt voor uw aankoop. Gebruik deze coupon om uw betaling te voltooien.",
        "voucher.expirationDate": "Vervaldatum",
        "voucher.alternativeReference": "Alternatieve referentie",
        "dragonpay.voucher.non.bank.selectField.placeholder":
          "Selecteer uw aanbieder",
        "dragonpay.voucher.bank.selectField.placeholder": "Selecteer uw bank",
        "voucher.paymentReferenceLabel": "Betalingsreferentie",
        "voucher.surcharge": "Inclusief %@ toeslag",
        "voucher.introduction.doku":
          "Bedankt voor uw aankoop. Gebruik de volgende informatie om uw betaling te voltooien.",
        "voucher.shopperName": "Klantnaam",
        "voucher.merchantName": "Verkoper",
        "voucher.introduction.econtext":
          "Bedankt voor uw aankoop. Gebruik de volgende informatie om uw betaling te voltooien.",
        "voucher.telephoneNumber": "Telefoonnummer",
        "voucher.shopperReference": "Klant referentie",
        "voucher.collectionInstitutionNumber": "Nummer ophaallocatie",
        "voucher.econtext.telephoneNumber.invalid":
          "Het telefoonnummer moet uit 10 of 11 cijfers bestaan",
        "boletobancario.btnLabel": "Boleto genereren",
        "boleto.sendCopyToEmail": "Stuur een kopie naar mijn e-mailadres",
        "button.copy": "Kopi\xebren",
        "button.download": "Downloaden",
        "creditCard.storedCard.description.ariaLabel":
          "Opgeslagen kaart eindigt op %@",
        "voucher.entity": "Entiteit",
        donateButton: "Doneren",
        notNowButton: "Niet nu",
        thanksForYourSupport: "Bedankt voor uw donatie!",
        preauthorizeWith: "Preautorisatie uitvoeren met",
        confirmPreauthorization: "Preautorisatie bevestigen",
        confirmPurchase: "Aankoop bevestigen",
        applyGiftcard: "Inwisselen",
        giftcardBalance: "Saldo cadeaukaart",
        deductedBalance: "Afgetrokken bedrag",
        "creditCard.pin.title": "PIN",
        "creditCard.encryptedPassword.label":
          "Eerste twee cijfers van het wachtwoord van de kaart",
        "creditCard.encryptedPassword.placeholder": "12",
        "creditCard.encryptedPassword.invalid": "Ongeldig wachtwoord",
        "creditCard.taxNumber.label":
          "Geboortedatum (JJ-MM-DD) of bedrijfsregistratienummer (10 cijfers) van kaarthouder",
        "creditCard.taxNumber.labelAlt":
          "Bedrijfsregistratienummer (10 cijfers)",
        "creditCard.taxNumber.invalid":
          "Geboortedatum of bedrijfsregistratienummer van kaarthouder is ongeldig",
        "storedPaymentMethod.disable.button": "Verwijderen",
        "storedPaymentMethod.disable.confirmation":
          "Opgeslagen betalingsmethode verwijderen",
        "storedPaymentMethod.disable.confirmButton": "Ja, verwijderen",
        "storedPaymentMethod.disable.cancelButton": "Annuleren",
        "ach.bankAccount": "Bankrekening",
        "ach.accountHolderNameField.title": "Naam rekeninghouder",
        "ach.accountHolderNameField.placeholder": "J. Janssen",
        "ach.accountHolderNameField.invalid": "Ongeldige naam rekeninghouder",
        "ach.accountNumberField.title": "Rekeningnummer",
        "ach.accountNumberField.invalid": "Ongeldig rekeningnummer",
        "ach.accountLocationField.title": "Routingnummer (ABA)",
        "ach.accountLocationField.invalid": "Ongeldig routingnummer (ABA)",
        "select.state": "Selecteer staat",
        "select.stateOrProvince": "Selecteer staat of provincie",
        "select.provinceOrTerritory": "Selecteer provincie of territorium",
        "select.country": "Selecteer land",
        "select.noOptionsFound": "Geen opties gevonden",
        "select.filter.placeholder": "Zoeken...",
        "telephoneNumber.invalid": "Ongeldig telefoonnummer",
        qrCodeOrApp: "of",
        "paypal.processingPayment": "Betaling wordt verwerkt...",
        generateQRCode: "Genereer QR-code",
        "await.waitForConfirmation": "Wacht op bevestiging",
        "mbway.confirmPayment": "Bevestig uw betaling via de MB WAY-app",
        "shopperEmail.invalid": "Ongeldig e-mailadres",
        "dateOfBirth.format": "DD/MM/JJJJ",
        "dateOfBirth.invalid": "U moet minimaal 18 jaar oud zijn",
        "blik.confirmPayment": "Open uw bankapp om de betaling te bevestigen.",
        "blik.invalid": "Voer 6 cijfers in",
        "blik.code": "6-cijferige code",
        "blik.help": "Haal de code op in uw bankapp.",
        "swish.pendingMessage":
          "Nadat u hebt gescand, kan de status maximaal 10 minuten in behandeling zijn. Als u binnen deze periode opnieuw probeert te betalen, kunnen er meerdere keren kosten in rekening worden gebracht.",
        "error.va.gen.01": "Onvolledig veld",
        "error.va.gen.02": "Veld niet geldig",
        "error.va.sf-cc-num.01": "Ongeldig kaartnummer",
        "error.va.sf-cc-num.03": "Niet-ondersteunde kaart ingevoerd",
        "error.va.sf-cc-dat.01": "Kaart te oud",
        "error.va.sf-cc-dat.02": "Datum te ver in de toekomst",
        "error.giftcard.no-balance": "Deze cadeaukaart heeft geen saldo",
        "error.giftcard.card-error":
          "We hebben geen cadeaukaart met dit nummer in onze administratie",
        "error.giftcard.currency-error":
          "Cadeaukaarten zijn alleen geldig in de valuta waarin ze zijn uitgegeven",
        "amazonpay.signout": "Afmelden bij Amazon",
        "amazonpay.changePaymentDetails": "Betalingsgegevens wijzigen",
        "partialPayment.warning":
          "Selecteer een andere betaalmethode om het resterende deel te betalen",
        "partialPayment.remainingBalance": "Het resterende saldo is %{amount}",
        "bankTransfer.beneficiary": "Begunstigde",
        "bankTransfer.iban": "IBAN",
        "bankTransfer.bic": "BIC",
        "bankTransfer.reference": "Referentie",
        "bankTransfer.introduction":
          "Ga door om een nieuwe overschrijving aan te maken. U kunt de gegevens in het volgende scherm gebruiken om deze betaling af te ronden.",
        "bankTransfer.instructions":
          "Bedankt voor uw aankoop. Gebruik de volgende informatie om uw betaling te voltooien.",
        "bacs.accountHolderName": "Naam bankrekeninghouder",
        "bacs.accountHolderName.invalid": "Ongeldige naam bankrekeninghouder",
        "bacs.accountNumber": "Bankrekeningnummer",
        "bacs.accountNumber.invalid": "Ongeldig bankrekeningnummer",
        "bacs.bankLocationId": "Bankcode",
        "bacs.bankLocationId.invalid": "Ongeldige bankcode",
        "bacs.consent.amount":
          "Ik ga ermee akkoord dat het bovengenoemde bedrag van mijn bankrekening wordt afgeschreven.",
        "bacs.consent.account":
          "Ik bevestig dat de rekening op mijn naam staat en dat ik de enige ondertekenaar ben die toestemming kan geven voor automatische incasso's vanaf deze rekening.",
        edit: "Bewerken",
        "bacs.confirm": "Bevestigen en betalen",
        "bacs.result.introduction":
          "Download uw machtiging automatische incasso",
        "download.pdf": "PDF downloaden",
        "creditCard.encryptedCardNumber.aria.iframeTitle":
          "Iframe voor beveiligd kaartnummer",
        "creditCard.encryptedCardNumber.aria.label": "Veld voor kaartnummer",
        "creditCard.encryptedExpiryDate.aria.iframeTitle":
          "Iframe voor vervaldatum beveiligde kaart",
        "creditCard.encryptedExpiryDate.aria.label": "Veld voor vervaldatum",
        "creditCard.encryptedExpiryMonth.aria.iframeTitle":
          "Iframe voor vervalmaand beveiligde kaart",
        "creditCard.encryptedExpiryMonth.aria.label": "Veld voor vervalmaand",
        "creditCard.encryptedExpiryYear.aria.iframeTitle":
          "Iframe voor vervaljaar beveiligde kaart",
        "creditCard.encryptedExpiryYear.aria.label": "Veld voor vervaljaar",
        "creditCard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe voor beveiligingscode beveiligde kaart",
        "creditCard.encryptedSecurityCode.aria.label":
          "Veld voor beveiligingscode",
        "giftcard.encryptedCardNumber.aria.iframeTitle":
          "Iframe voor beveiligd cadeaubonnummer",
        "giftcard.encryptedCardNumber.aria.label": "Veld voor cadeaubonnummer",
        "giftcard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe voor beveiligingscode beveiligde cadeaubon",
        "giftcard.encryptedSecurityCode.aria.label":
          "Veld beveiligingscode cadeaubon",
        giftcardTransactionLimit:
          "Max. %{amount} toegestaan per transactie met deze cadeaubon",
        "ach.encryptedBankAccountNumber.aria.iframeTitle":
          "Iframe voor beveiligd bankrekeningnummer",
        "ach.encryptedBankAccountNumber.aria.label": "Veld voor bankrekening",
        "ach.encryptedBankLocationId.aria.iframeTitle":
          "Iframe voor beveiligde BIC-code",
        "ach.encryptedBankLocationId.aria.label": "Veld voor BIC-code",
      },
    }),
    rp = Object.freeze({
      __proto__: null,
      default: {
        payButton: "Betal",
        "payButton.redirecting": "Omdirigerer...",
        storeDetails: "Lagre til min neste betaling",
        "creditCard.holderName": "Navn p\xe5 kortet",
        "creditCard.holderName.placeholder": "O. Nordmann",
        "creditCard.holderName.invalid": "Ugyldig navn p\xe5 kortholder",
        "creditCard.numberField.title": "Kortnummer",
        "creditCard.numberField.placeholder": "1234 5678 9012 3456",
        "creditCard.expiryDateField.title": "Utl\xf8psdato",
        "creditCard.expiryDateField.placeholder": "MM/\xc5\xc5",
        "creditCard.expiryDateField.month": "M\xe5ned",
        "creditCard.expiryDateField.month.placeholder": "MM",
        "creditCard.expiryDateField.year.placeholder": "\xc5\xc5",
        "creditCard.expiryDateField.year": "\xc5r",
        "creditCard.cvcField.title": "CVC / CVV",
        "creditCard.cvcField.placeholder": "123",
        "creditCard.storeDetailsButton": "Husk til neste gang",
        "creditCard.cvcField.placeholder.4digits": "4 siffer",
        "creditCard.cvcField.placeholder.3digits": "3 siffer",
        "creditCard.taxNumber.placeholder": "YYMMDD / 0123456789",
        installments: "Antall avdrag",
        installmentOption: "%{times}x %{partialValue}",
        installmentOptionMonths: "%{times} m\xe5neder",
        "installments.oneTime": "Engangsbetaling",
        "installments.installments": "Avdragsbetaling",
        "installments.revolving": "Gjentakende betaling",
        "sepaDirectDebit.ibanField.invalid": "Ugyldig kontonummer",
        "sepaDirectDebit.nameField.placeholder": "O. Nordmann",
        "sepa.ownerName": "Kortholders navn",
        "sepa.ibanNumber": "Kontonummer (IBAN)",
        "error.title": "Feil",
        "error.subtitle.redirect": "Videresending feilet",
        "error.subtitle.payment": "Betaling feilet",
        "error.subtitle.refused": "Betaling avvist",
        "error.message.unknown": "En ukjent feil oppstod",
        "idealIssuer.selectField.title": "Bank",
        "idealIssuer.selectField.placeholder": "Velg din bank",
        "creditCard.success": "Betalingen var vellykket",
        loading: "Laster...",
        continue: "Fortsett",
        continueTo: "Fortsett til",
        "wechatpay.timetopay": "Du har %@ igjen til \xe5 betale",
        "wechatpay.scanqrcode": "Skann QR-kode",
        personalDetails: "Personopplysninger",
        companyDetails: "Firmadetaljer",
        "companyDetails.name": "Firmanavn",
        "companyDetails.registrationNumber": "Registreringsnummer",
        socialSecurityNumber: "Personnummer",
        firstName: "Fornavn",
        infix: "Prefiks",
        lastName: "Etternavn",
        mobileNumber: "Mobilnummer",
        "mobileNumber.invalid": "Ugyldig mobilnummer",
        city: "Poststed",
        postalCode: "Postnummer",
        countryCode: "Landkode",
        telephoneNumber: "Telefonnummer",
        dateOfBirth: "F\xf8dselsdato",
        shopperEmail: "E-postadresse",
        gender: "Kj\xf8nn",
        male: "Mann",
        female: "Kvinne",
        billingAddress: "Faktureringsadresse",
        street: "Gate",
        stateOrProvince: "Fylke",
        country: "Land",
        houseNumberOrName: "Husnummer",
        separateDeliveryAddress: "Spesifiser en separat leveringsadresse",
        deliveryAddress: "Leveringsadresse",
        zipCode: "Postnummer",
        apartmentSuite: "Leilighet/suite",
        provinceOrTerritory: "Provins eller territorium",
        cityTown: "By",
        address: "Adresse",
        state: "Delstat",
        "field.title.optional": "(valgfritt)",
        "creditCard.cvcField.title.optional": "CVC / CVV (valgfritt)",
        "issuerList.wallet.placeholder": "Velg lommebok",
        privacyPolicy: "Retningslinjer for personvern",
        "afterPay.agreement": "Jeg godtar AfterPays %@",
        paymentConditions: "betalingsbetingelser",
        openApp: "\xc5pne appen",
        "voucher.readInstructions": "Les instruksjoner",
        "voucher.introduction":
          "Takk for ditt kj\xf8p. Vennligst bruk den f\xf8lgende kupongen til \xe5 fullf\xf8re betalingen.",
        "voucher.expirationDate": "Utl\xf8psdato",
        "voucher.alternativeReference": "Alternativ referanse",
        "dragonpay.voucher.non.bank.selectField.placeholder":
          "Velg din leverand\xf8r",
        "dragonpay.voucher.bank.selectField.placeholder": "Velg din bank",
        "voucher.paymentReferenceLabel": "Betalingsreferanse",
        "voucher.surcharge": "Inkl. %@ tilleggsavgift",
        "voucher.introduction.doku":
          "Takk for ditt kj\xf8p, vennligst bruk den f\xf8lgende informasjonen for \xe5 fullf\xf8re betalingen.",
        "voucher.shopperName": "Kundenavn",
        "voucher.merchantName": "Forhandler",
        "voucher.introduction.econtext":
          "Takk for ditt kj\xf8p, vennligst bruk den f\xf8lgende informasjonen for \xe5 fullf\xf8re betalingen.",
        "voucher.telephoneNumber": "Telefonnummer",
        "voucher.shopperReference": "Kundereferanse",
        "voucher.collectionInstitutionNumber": "Innbetalingslokasjonsnummer",
        "voucher.econtext.telephoneNumber.invalid":
          "Telefonnummeret m\xe5 v\xe6re 10 eller 11 sifre langt",
        "boletobancario.btnLabel": "Generer Boleto",
        "boleto.sendCopyToEmail": "Send meg en kopi p\xe5 e-post",
        "button.copy": "Kopier",
        "button.download": "Last ned",
        "creditCard.storedCard.description.ariaLabel":
          "Lagret kort slutter p\xe5 %@",
        "voucher.entity": "Enhet",
        donateButton: "Don\xe9r",
        notNowButton: "Ikke n\xe5",
        thanksForYourSupport: "Takk for din st\xf8tte!",
        preauthorizeWith: "Forh\xe5ndsgodkjenn med",
        confirmPreauthorization: "Bekreft forh\xe5ndsgodkjenning",
        confirmPurchase: "Bekreft kj\xf8p",
        applyGiftcard: "L\xf8s inn",
        giftcardBalance: "Gavekortsaldo",
        deductedBalance: "Fratrukket bel\xf8p",
        "creditCard.pin.title": "PIN",
        "creditCard.encryptedPassword.label":
          "F\xf8rste 2 sifre av kortpassord",
        "creditCard.encryptedPassword.placeholder": "12",
        "creditCard.encryptedPassword.invalid": "Ugyldig passord",
        "creditCard.taxNumber.label":
          "Kortholders f\xf8dselsdato (YYMMDD) eller bedriftsregistreringsnummer (10 siffer)",
        "creditCard.taxNumber.labelAlt":
          "Bedriftsregistreringsnummer (10 siffer)",
        "creditCard.taxNumber.invalid":
          "Ugyldig kortholders f\xf8dselsdato eller bedriftsregistreringsnummer",
        "storedPaymentMethod.disable.button": "Fjern",
        "storedPaymentMethod.disable.confirmation":
          "Fjern lagret betalingsmetode",
        "storedPaymentMethod.disable.confirmButton": "Ja, fjern",
        "storedPaymentMethod.disable.cancelButton": "Avbryt",
        "ach.bankAccount": "Bankkonto",
        "ach.accountHolderNameField.title": "Kontoholders navn",
        "ach.accountHolderNameField.placeholder": "O. Nordmann",
        "ach.accountHolderNameField.invalid": "Ugyldig navn p\xe5 kontoholder",
        "ach.accountNumberField.title": "Kontonummer",
        "ach.accountNumberField.invalid": "Ugyldig kontonummer",
        "ach.accountLocationField.title": "ABA-dirigeringsnummer",
        "ach.accountLocationField.invalid": "Ugyldig ABA-dirigeringsnummer",
        "select.state": "Velg delstat",
        "select.stateOrProvince": "Velg delstat eller provins",
        "select.provinceOrTerritory": "Velg provins eller territorium",
        "select.country": "Velg land",
        "select.noOptionsFound": "Ingen alternativer funnet",
        "select.filter.placeholder": "S\xf8k\xa0\u2026",
        "telephoneNumber.invalid": "Ugyldig telefonnummer",
        qrCodeOrApp: "eller",
        "paypal.processingPayment": "Behandler betaling \u2026",
        generateQRCode: "Generer QR-kode",
        "await.waitForConfirmation": "Venter p\xe5 bekreftelse",
        "mbway.confirmPayment": "Bekreft betalingen din i MB WAY-appen",
        "shopperEmail.invalid": "Ugyldig e-postadresse",
        "dateOfBirth.format": "DD/MM/\xc5\xc5\xc5\xc5",
        "dateOfBirth.invalid": "Du m\xe5 v\xe6re minst 18 \xe5r gammel",
        "blik.confirmPayment":
          "\xc5pne bank-appen din for \xe5 bekrefte betalingen.",
        "blik.invalid": "Tast inn 6 tall",
        "blik.code": "6-sifret kode",
        "blik.help": "Hent koden fra bank-appen din.",
        "swish.pendingMessage":
          "Etter at du har skannet koden kan det ta opptil 10 minutter f\xf8r betalingen vises som bekreftet. Fors\xf8k p\xe5 \xe5 betale igjen kan f\xf8re til flere innbetalinger.",
        "error.va.gen.01": "Ufullstendig felt",
        "error.va.gen.02": "Feltet er ikke gyldig",
        "error.va.sf-cc-num.01": "Ugyldig kortnummer",
        "error.va.sf-cc-num.03": "Det angitte kortet st\xf8ttes ikke",
        "error.va.sf-cc-dat.01": "Kortet er for gammelt",
        "error.va.sf-cc-dat.02": "Datoen er for langt inn i fremtiden",
        "error.giftcard.no-balance": "Dette gavekortet har en saldo p\xe5 null",
        "error.giftcard.card-error":
          "Vi har ikke noe gavekort med dette nummeret i registrene v\xe5re",
        "error.giftcard.currency-error":
          "Gavekort er kun gyldige i den valutaen de ble utstedt i",
        "amazonpay.signout": "Logg ut av Amazon",
        "amazonpay.changePaymentDetails": "Endre betalingsdetaljer",
        "partialPayment.warning":
          "Velg en annen betalingsmetode for \xe5 betale det gjenv\xe6rende",
        "partialPayment.remainingBalance":
          "Gjenv\xe6rende saldo vil v\xe6re %{amount}",
        "bankTransfer.beneficiary": "Mottaker",
        "bankTransfer.iban": "IBAN",
        "bankTransfer.bic": "BIC",
        "bankTransfer.reference": "referanse",
        "bankTransfer.introduction":
          "Fortsett for \xe5 opprette en ny betaling via bankoverf\xf8ring. Du kan bruke detaljene i det f\xf8lgende skjermbildet for \xe5 fullf\xf8re betalingen.",
        "bankTransfer.instructions":
          "Takk for kj\xf8pet. Vennligst benytt den f\xf8lgende informasjonen til \xe5 fullf\xf8re betalingen.",
        "bacs.accountHolderName": "Kontoholders navn",
        "bacs.accountHolderName.invalid": "Ugyldig kontoholdernavn",
        "bacs.accountNumber": "Bankkontonummer",
        "bacs.accountNumber.invalid": "Ugyldig bankkontonummer",
        "bacs.bankLocationId": "Sorteringskode",
        "bacs.bankLocationId.invalid": "Ugyldig sorteringskode",
        "bacs.consent.amount":
          "Jeg samtykker til at bel\xf8pet ovenfor blir trukket fra bankkontoen min.",
        "bacs.consent.account":
          "Jeg bekrefter at kontoen st\xe5r i mitt navn, og at jeg er den eneste signataren som kreves for \xe5 autorisere direktebelastningen p\xe5 denne kontoen.",
        edit: "Endre",
        "bacs.confirm": "Bekreft og betal",
        "bacs.result.introduction":
          "Last ned instruksjoner for direktebelastning (DDI/ mandat)",
        "download.pdf": "Last ned PDF",
        "creditCard.encryptedCardNumber.aria.iframeTitle":
          "Iframe for sikret kortnummer",
        "creditCard.encryptedCardNumber.aria.label": "Kortnummerfelt",
        "creditCard.encryptedExpiryDate.aria.iframeTitle":
          "Iframe for sikret kortutl\xf8psdato",
        "creditCard.encryptedExpiryDate.aria.label": "Felt for utl\xf8psdato",
        "creditCard.encryptedExpiryMonth.aria.iframeTitle":
          "Iframe for sikret kortutl\xf8psm\xe5ned",
        "creditCard.encryptedExpiryMonth.aria.label":
          "Felt for utl\xf8psm\xe5ned",
        "creditCard.encryptedExpiryYear.aria.iframeTitle":
          "Iframe for sikret kortutl\xf8ps\xe5r",
        "creditCard.encryptedExpiryYear.aria.label": "Felt for utl\xf8ps\xe5r",
        "creditCard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe for sikret kortsikkerhetskode",
        "creditCard.encryptedSecurityCode.aria.label":
          "Felt for sikkerhetskode",
        "giftcard.encryptedCardNumber.aria.iframeTitle":
          "Iframe for sikret gavekortnummer",
        "giftcard.encryptedCardNumber.aria.label": "Felt for gavekortnummer",
        "giftcard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe for sikret gavekort-sikkerhetskode",
        "giftcard.encryptedSecurityCode.aria.label":
          "Felt for sikkerhetskode for gavekort",
        giftcardTransactionLimit:
          "Maksimalt %{amount} per transaksjon er tillatt p\xe5 dette gavekortet",
        "ach.encryptedBankAccountNumber.aria.iframeTitle":
          "Iframe for sikret bankkontonummer",
        "ach.encryptedBankAccountNumber.aria.label": "Bankkontofelt",
        "ach.encryptedBankLocationId.aria.iframeTitle":
          "Iframe for sikret bankdirigeringsnummer",
        "ach.encryptedBankLocationId.aria.label":
          "Felt for bankdirigeringsnummer",
      },
    }),
    np = Object.freeze({
      __proto__: null,
      default: {
        payButton: "Zap\u0142a\u0107",
        "payButton.redirecting": "Przekierowywanie...",
        storeDetails: "Zapisz na potrzeby nast\u0119pnej p\u0142atno\u015bci",
        "creditCard.holderName": "Imi\u0119 i nazwisko na karcie",
        "creditCard.holderName.placeholder": "J. Kowalski",
        "creditCard.holderName.invalid":
          "Nieprawid\u0142owe imi\u0119 i nazwisko posiadacza karty",
        "creditCard.numberField.title": "Numer karty ",
        "creditCard.numberField.placeholder": "1234 5678 9012 3456",
        "creditCard.expiryDateField.title": "Data wa\u017cno\u015bci",
        "creditCard.expiryDateField.placeholder": "MM/RR",
        "creditCard.expiryDateField.month": "Miesi\u0105c",
        "creditCard.expiryDateField.month.placeholder": "MM",
        "creditCard.expiryDateField.year.placeholder": "RR",
        "creditCard.expiryDateField.year": "Rok",
        "creditCard.cvcField.title": "CVC / CVV",
        "creditCard.cvcField.placeholder": "123",
        "creditCard.storeDetailsButton":
          "Zapami\u0119taj na przysz\u0142o\u015b\u0107",
        "creditCard.cvcField.placeholder.4digits": "4 cyfry",
        "creditCard.cvcField.placeholder.3digits": "3 cyfry",
        "creditCard.taxNumber.placeholder": "RRMMDD / 0123456789",
        installments: "Liczba rat",
        installmentOption: "%{times}x %{partialValue}",
        installmentOptionMonths: "%{times} miesi\u0119cy",
        "installments.oneTime": "P\u0142atno\u015b\u0107 jednorazowa",
        "installments.installments": "P\u0142atno\u015b\u0107 ratalna",
        "installments.revolving": "P\u0142atno\u015b\u0107 odnawialna",
        "sepaDirectDebit.ibanField.invalid":
          "Nieprawid\u0142owy numer rachunku",
        "sepaDirectDebit.nameField.placeholder": "J. Kowalski",
        "sepa.ownerName": "Imi\u0119 i nazwisko posiadacza karty",
        "sepa.ibanNumber": "Numer rachunku (IBAN)",
        "error.title": "B\u0142\u0105d",
        "error.subtitle.redirect": "Przekierowanie nie powiod\u0142o si\u0119",
        "error.subtitle.payment":
          "P\u0142atno\u015b\u0107 nie powiod\u0142a si\u0119",
        "error.subtitle.refused":
          "P\u0142atno\u015b\u0107 zosta\u0142a odrzucona",
        "error.message.unknown":
          "Wyst\u0105pi\u0142 nieoczekiwany b\u0142\u0105d",
        "idealIssuer.selectField.title": "Bank",
        "idealIssuer.selectField.placeholder": "Wybierz sw\xf3j bank",
        "creditCard.success":
          "P\u0142atno\u015b\u0107 zako\u0144czona sukcesem",
        loading: "\u0141adowanie...",
        continue: "Kontynuuj",
        continueTo: "Przejd\u017a do",
        "wechatpay.timetopay": "Masz do zap\u0142acenia %@",
        "wechatpay.scanqrcode": "Zeskanuj kod QR",
        personalDetails: "Dane osobowe",
        companyDetails: "Dane firmy",
        "companyDetails.name": "Nazwa firmy",
        "companyDetails.registrationNumber": "Numer w rejestrze",
        socialSecurityNumber: "Numer dowodu osobistego",
        firstName: "Imi\u0119",
        infix: "Prefiks",
        lastName: "Nazwisko",
        mobileNumber: "Numer telefonu kom\xf3rkowego",
        "mobileNumber.invalid":
          "Nieprawid\u0142owy numer telefonu kom\xf3rkowego",
        city: "Miasto",
        postalCode: "Kod pocztowy",
        countryCode: "Kod kraju",
        telephoneNumber: "Numer telefonu",
        dateOfBirth: "Data urodzenia",
        shopperEmail: "Adres e-mail",
        gender: "P\u0142e\u0107",
        male: "M\u0119\u017cczyzna",
        female: "Kobieta",
        billingAddress: "Adres rozliczeniowy",
        street: "Ulica",
        stateOrProvince: "Wojew\xf3dztwo",
        country: "Kraj",
        houseNumberOrName: "Numer domu i mieszkania",
        separateDeliveryAddress: "Podaj osobny adres dostawy",
        deliveryAddress: "Adres dostawy",
        zipCode: "Kod pocztowy",
        apartmentSuite: "Numer domu/mieszkania",
        provinceOrTerritory: "Region lub terytorium",
        cityTown: "Miejscowo\u015b\u0107",
        address: "Adres",
        state: "Stan",
        "field.title.optional": "(opcjonalnie)",
        "creditCard.cvcField.title.optional": "CVC / CVV (opcjonalnie)",
        "issuerList.wallet.placeholder": "Wybierz sw\xf3j portfel",
        privacyPolicy: "Polityka prywatno\u015bci.",
        "afterPay.agreement": "Zgadzam si\u0119 z dokumentem %@ AfterPay",
        paymentConditions: "warunki p\u0142atno\u015bci",
        openApp: "Otw\xf3rz aplikacj\u0119",
        "voucher.readInstructions": "Przeczytaj instrukcje",
        "voucher.introduction":
          "Dzi\u0119kujemy za zakup, doko\u0144cz p\u0142atno\u015b\u0107 przy u\u017cyciu tego kuponu.",
        "voucher.expirationDate": "Data wa\u017cno\u015bci",
        "voucher.alternativeReference": "Dodatkowy numer referencyjny",
        "dragonpay.voucher.non.bank.selectField.placeholder":
          "Wybierz dostawc\u0119",
        "dragonpay.voucher.bank.selectField.placeholder":
          "Wybierz sw\xf3j bank",
        "voucher.paymentReferenceLabel": "Nr referencyjny p\u0142atno\u015bci",
        "voucher.surcharge": "Zawiera %@ op\u0142aty dodatkowej",
        "voucher.introduction.doku":
          "Dzi\u0119kujemy za zakup. Doko\u0144cz p\u0142atno\u015b\u0107 przy u\u017cyciu poni\u017cszych informacji.",
        "voucher.shopperName": "Imi\u0119 i nazwisko klienta",
        "voucher.merchantName": "Sprzedaj\u0105cy",
        "voucher.introduction.econtext":
          "Dzi\u0119kujemy za zakup. Doko\u0144cz p\u0142atno\u015b\u0107 przy u\u017cyciu poni\u017cszych informacji.",
        "voucher.telephoneNumber": "Numer telefonu",
        "voucher.shopperReference": "Dane referencyjne kupuj\u0105cych",
        "voucher.collectionInstitutionNumber":
          "Numer instytucji pobieraj\u0105cej op\u0142at\u0119",
        "voucher.econtext.telephoneNumber.invalid":
          "Numer telefonu musi mie\u0107 10 lub 11 cyfr",
        "boletobancario.btnLabel": "Wygeneruj p\u0142atno\u015b\u0107 Boleto",
        "boleto.sendCopyToEmail": "Wy\u015blij kopi\u0119 na m\xf3j e-mail",
        "button.copy": "Kopiuj",
        "button.download": "Pobierz",
        "creditCard.storedCard.description.ariaLabel":
          "Zapisana karta ko\u0144czy si\u0119 na % @",
        "voucher.entity": "Pozycja",
        donateButton: "Przeka\u017c darowizn\u0119",
        notNowButton: "Nie teraz",
        thanksForYourSupport: "Dzi\u0119kujemy za wsparcie!",
        preauthorizeWith: "Autoryzuj wst\u0119pnie za pomoc\u0105:",
        confirmPreauthorization:
          "Potwierd\u017a autoryzacj\u0119 wst\u0119pn\u0105",
        confirmPurchase: "Potwierd\u017a zakup",
        applyGiftcard: "Wykorzystaj",
        giftcardBalance: "Saldo karty podarunkowej",
        deductedBalance: "Saldo potr\u0105cone",
        "creditCard.pin.title": "PIN",
        "creditCard.encryptedPassword.label":
          "Pierwsze 2 cyfry has\u0142a karty",
        "creditCard.encryptedPassword.placeholder": "12",
        "creditCard.encryptedPassword.invalid": "Nieprawid\u0142owe has\u0142o",
        "creditCard.taxNumber.label":
          "Data urodzenia posiadacza karty (RRMMDD) lub firmowy numer rejestracyjny (10 cyfr)",
        "creditCard.taxNumber.labelAlt":
          "Firmowy numer rejestracyjny (10 cyfr)",
        "creditCard.taxNumber.invalid":
          "Nieprawid\u0142owa data urodzenia posiadacza karty lub nieprawid\u0142owy firmowy numer rejestracyjny",
        "storedPaymentMethod.disable.button": "Usu\u0144",
        "storedPaymentMethod.disable.confirmation":
          "Usu\u0144 zapisan\u0105 metod\u0119 p\u0142atno\u015bci",
        "storedPaymentMethod.disable.confirmButton": "Tak, usu\u0144",
        "storedPaymentMethod.disable.cancelButton": "Anuluj",
        "ach.bankAccount": "Rachunek bankowy",
        "ach.accountHolderNameField.title":
          "Imi\u0119 i nazwisko posiadacza rachunku",
        "ach.accountHolderNameField.placeholder": "J. Kowalski",
        "ach.accountHolderNameField.invalid":
          "Nieprawid\u0142owe imi\u0119 i nazwisko posiadacza rachunku",
        "ach.accountNumberField.title": "Numer rachunku",
        "ach.accountNumberField.invalid": "Nieprawid\u0142owy numer rachunku",
        "ach.accountLocationField.title": "Kod bankowy ABA Routing Number",
        "ach.accountLocationField.invalid":
          "Nieprawid\u0142owy kod bankowy ABA Routing Number",
        "select.state": "Wybierz stan",
        "select.stateOrProvince": "Wybierz stan/wojew\xf3dztwo",
        "select.provinceOrTerritory": "Wybierz region/terytorium",
        "select.country": "Wybierz kraj",
        "select.noOptionsFound": "Nie znaleziono opcji",
        "select.filter.placeholder": "Szukaj...",
        "telephoneNumber.invalid": "Nieprawid\u0142owy numer telefonu",
        qrCodeOrApp: "lub",
        "paypal.processingPayment": "Przetwarzanie p\u0142atno\u015bci...",
        generateQRCode: "Wygeneruj kod QR",
        "await.waitForConfirmation": "Oczekiwanie na potwierdzenie",
        "mbway.confirmPayment":
          "Potwierd\u017a p\u0142atno\u015b\u0107 w aplikacji MB WAY",
        "shopperEmail.invalid": "Niepoprawny adres email",
        "dateOfBirth.format": "DD/MM/RRRR",
        "dateOfBirth.invalid": "Musisz mie\u0107 co najmniej 18 lat",
        "blik.confirmPayment":
          "Otw\xf3rz aplikacj\u0119 bankow\u0105, aby potwierdzi\u0107 p\u0142atno\u015b\u0107.",
        "blik.invalid": "Wpisz 6 cyfr",
        "blik.code": "6-cyfrowy kod",
        "blik.help": "Uzyskaj kod ze swojej aplikacji bankowej.",
        "swish.pendingMessage":
          "Po zeskanowaniu transakcja mo\u017ce mie\u0107 status \u201eOczekuj\u0105ca\u201d do 10 minut. Pr\xf3ba ponownego dokonania p\u0142atno\u015bci w tym czasie mo\u017ce spowodowa\u0107 wielokrotne naliczenie op\u0142aty.",
        "error.va.gen.01": "Niekompletne dane w polu",
        "error.va.gen.02": "Dane w polu s\u0105 nieprawid\u0142owe",
        "error.va.sf-cc-num.01": "Nieprawid\u0142owy numer karty",
        "error.va.sf-cc-num.03":
          "Wprowadzono nieobs\u0142ugiwan\u0105 kart\u0119",
        "error.va.sf-cc-dat.01":
          "Termin wa\u017cno\u015bci karty min\u0105\u0142",
        "error.va.sf-cc-dat.02":
          "Data w zbyt odleg\u0142ej przysz\u0142o\u015bci",
        "error.giftcard.no-balance": "Saldo karty podarunkowej jest puste",
        "error.giftcard.card-error":
          "W naszych rejestrach nie ma karty podarunkowej o tym numerze",
        "error.giftcard.currency-error":
          "Karty podarunkowe s\u0105 wa\u017cne tylko w walucie, w kt\xf3rej zosta\u0142y wydane",
        "amazonpay.signout": "Wyloguj si\u0119 z Amazon",
        "amazonpay.changePaymentDetails":
          "Zmie\u0144 szczeg\xf3\u0142y p\u0142atno\u015bci",
        "partialPayment.warning":
          "Wybierz inn\u0105 metod\u0119 p\u0142atno\u015bci, aby zap\u0142aci\u0107 pozosta\u0142\u0105 kwot\u0119",
        "partialPayment.remainingBalance":
          "Pozosta\u0142e saldo wynosi %(kwota}",
        "bankTransfer.beneficiary": "Beneficjent",
        "bankTransfer.iban": "IBAN",
        "bankTransfer.bic": "BIC",
        "bankTransfer.reference": "Ref. sprze.",
        "bankTransfer.introduction":
          "Kontynuuj tworzenie nowej p\u0142atno\u015bci przelewem bankowym. Mo\u017cesz u\u017cy\u0107 szczeg\xf3\u0142\xf3w na nast\u0119pnym ekranie, aby sfinalizowa\u0107 t\u0119 p\u0142atno\u015b\u0107.",
        "bankTransfer.instructions":
          "Dzi\u0119kujemy za zakup. Doko\u0144cz p\u0142atno\u015b\u0107 przy u\u017cyciu poni\u017cszych informacji.",
        "bacs.accountHolderName": "Imi\u0119 i nazwisko posiadacza rachunku",
        "bacs.accountHolderName.invalid":
          "Nieprawid\u0142owe imi\u0119 i nazwisko posiadacza rachunku",
        "bacs.accountNumber": "Numer rachunku",
        "bacs.accountNumber.invalid": "Nieprawid\u0142owy numer rachunku",
        "bacs.bankLocationId": "Numer rozliczeniowy SORT",
        "bacs.bankLocationId.invalid":
          "Nieprawid\u0142owy numer rozliczeniowy SORT",
        "bacs.consent.amount":
          "Wyra\u017cam zgod\u0119 na pobranie powy\u017cszej kwoty z mojego rachunku bankowego.",
        "bacs.consent.account":
          "Potwierdzam, \u017ce konto jest zarejestrowane na moje nazwisko i jestem jedynym sygnatariuszem wymaganym do autoryzacji polecenia zap\u0142aty na tym koncie.",
        edit: "Edytuj",
        "bacs.confirm": "Potwierd\u017a i zap\u0142a\u0107",
        "bacs.result.introduction":
          "Pobierz dyspozycj\u0119 polecenia zap\u0142aty (DDI/upowa\u017cnienie)",
        "download.pdf": "Pobierz PDF",
        "creditCard.encryptedCardNumber.aria.iframeTitle":
          "Element Iframe dla numeru zabezpieczonej karty",
        "creditCard.encryptedCardNumber.aria.label": "Pole numeru karty",
        "creditCard.encryptedExpiryDate.aria.iframeTitle":
          "Element Iframe dla daty wa\u017cno\u015bci zabezpieczonej karty",
        "creditCard.encryptedExpiryDate.aria.label":
          "Pole daty wa\u017cno\u015bci",
        "creditCard.encryptedExpiryMonth.aria.iframeTitle":
          "Element Iframe dla miesi\u0105ca wyga\u015bni\u0119cia zabezpieczonej karty",
        "creditCard.encryptedExpiryMonth.aria.label":
          "Pole miesi\u0105ca wyga\u015bni\u0119cia",
        "creditCard.encryptedExpiryYear.aria.iframeTitle":
          "Element Iframe dla roku wyga\u015bni\u0119cia zabezpieczonej karty",
        "creditCard.encryptedExpiryYear.aria.label":
          "Pole roku wyga\u015bni\u0119cia",
        "creditCard.encryptedSecurityCode.aria.iframeTitle":
          "Element Iframe dla kodu bezpiecze\u0144stwa zabezpieczonej karty",
        "creditCard.encryptedSecurityCode.aria.label":
          "Pole kodu bezpiecze\u0144stwa",
        "giftcard.encryptedCardNumber.aria.iframeTitle":
          "Element Iframe dla numeru zabezpieczonej karty podarunkowej",
        "giftcard.encryptedCardNumber.aria.label":
          "Pole numeru karty podarunkowej",
        "giftcard.encryptedSecurityCode.aria.iframeTitle":
          "Element Iframe dla kodu bezpiecze\u0144stwa zabezpieczonej karty podarunkowej",
        "giftcard.encryptedSecurityCode.aria.label":
          "Pole kodu bezpiecze\u0144stwa karty podarunkowej",
        giftcardTransactionLimit:
          "Maks. dozwolona kwota (%{amount}) na transakcj\u0119 t\u0105 kart\u0105 upominkow\u0105",
        "ach.encryptedBankAccountNumber.aria.iframeTitle":
          "Element Iframe dla zabezpieczonego numeru rachunku bankowego",
        "ach.encryptedBankAccountNumber.aria.label": "Pole rachunku bankowego",
        "ach.encryptedBankLocationId.aria.iframeTitle":
          "Element Iframe dla zabezpieczonego kodu bankowego (Bank Routing Number)",
        "ach.encryptedBankLocationId.aria.label":
          "Pole kodu bankowego (Bank Routing Number)",
      },
    }),
    ip = Object.freeze({
      __proto__: null,
      default: {
        payButton: "Pagar",
        "payButton.redirecting": "Redirecionando...",
        storeDetails: "Salvar para meu pr\xf3ximo pagamento",
        "creditCard.holderName": "Nome no cart\xe3o",
        "creditCard.holderName.placeholder": "J. Smith",
        "creditCard.holderName.invalid":
          "Nome do titular do cart\xe3o inv\xe1lido",
        "creditCard.numberField.title": "N\xfamero do cart\xe3o",
        "creditCard.numberField.placeholder": "1234 5678 9012 3456",
        "creditCard.expiryDateField.title": "Data de validade",
        "creditCard.expiryDateField.placeholder": "MM/AA",
        "creditCard.expiryDateField.month": "M\xeas",
        "creditCard.expiryDateField.month.placeholder": "MM",
        "creditCard.expiryDateField.year.placeholder": "AA",
        "creditCard.expiryDateField.year": "Ano",
        "creditCard.cvcField.title": "CVC / CVV",
        "creditCard.cvcField.placeholder": "123",
        "creditCard.storeDetailsButton": "Lembrar para a pr\xf3xima vez",
        "creditCard.cvcField.placeholder.4digits": "4 d\xedgitos",
        "creditCard.cvcField.placeholder.3digits": "3 d\xedgitos",
        "creditCard.taxNumber.placeholder": "AAAMMDD / 0123456789",
        installments: "Op\xe7\xf5es de Parcelamento",
        installmentOption: "%{times}x %{partialValue}",
        installmentOptionMonths: "%{times} meses",
        "installments.oneTime": "Pagamento \xe0 vista",
        "installments.installments": "Pagamento parcelado",
        "installments.revolving": "Pagamento rotativo",
        "sepaDirectDebit.ibanField.invalid": "N\xfamero de conta inv\xe1lido",
        "sepaDirectDebit.nameField.placeholder": "J. Silva",
        "sepa.ownerName": "Nome do titular da conta banc\xe1ria",
        "sepa.ibanNumber": "N\xfamero de conta (NIB)",
        "error.title": "Erro",
        "error.subtitle.redirect": "Falha no redirecionamento",
        "error.subtitle.payment": "Falha no pagamento",
        "error.subtitle.refused": "Pagamento recusado",
        "error.message.unknown": "Ocorreu um erro desconhecido",
        "idealIssuer.selectField.title": "Banco",
        "idealIssuer.selectField.placeholder": "Selecione seu banco",
        "creditCard.success": "Pagamento bem-sucedido",
        loading: "Carregando...",
        continue: "Continuar",
        continueTo: "Continuar para",
        "wechatpay.timetopay": "Voc\xea tem %@ para pagar",
        "wechatpay.scanqrcode": "Escanear c\xf3digo QR",
        personalDetails: "Informa\xe7\xf5es pessoais",
        companyDetails: "Dados da empresa",
        "companyDetails.name": "Nome da empresa",
        "companyDetails.registrationNumber": "N\xfamero de registro",
        socialSecurityNumber: "CPF",
        firstName: "Nome",
        infix: "Prefixo",
        lastName: "Sobrenome",
        mobileNumber: "Celular",
        "mobileNumber.invalid": "N\xfamero de celular inv\xe1lido",
        city: "Cidade",
        postalCode: "CEP",
        countryCode: "C\xf3digo do pa\xeds",
        telephoneNumber: "N\xfamero de telefone",
        dateOfBirth: "Data de nascimento",
        shopperEmail: "Endere\xe7o de e-mail",
        gender: "G\xeanero",
        male: "Masculino",
        female: "Feminino",
        billingAddress: "Endere\xe7o de cobran\xe7a",
        street: "Rua",
        stateOrProvince: "Estado ou prov\xedncia",
        country: "Pa\xeds",
        houseNumberOrName: "N\xfamero da casa",
        separateDeliveryAddress:
          "Especificar um endere\xe7o de entrega separado",
        deliveryAddress: "Endere\xe7o de entrega",
        zipCode: "C\xf3digo postal",
        apartmentSuite: "Apartamento/Conjunto",
        provinceOrTerritory: "Prov\xedncia ou territ\xf3rio",
        cityTown: "Cidade",
        address: "Endere\xe7o",
        state: "Estado",
        "field.title.optional": "(opcional)",
        "creditCard.cvcField.title.optional": "CVC / CVV (opcional)",
        "issuerList.wallet.placeholder": "Selecione uma carteira",
        privacyPolicy: "Pol\xedtica de Privacidade",
        "afterPay.agreement": "Eu concordo com as %@ do AfterPay",
        paymentConditions: "condi\xe7\xf5es de pagamento",
        openApp: "Abrir o aplicativo",
        "voucher.readInstructions": "Leia as instru\xe7\xf5es",
        "voucher.introduction":
          "Obrigado pela sua compra, use o cupom a seguir para concluir o seu pagamento.",
        "voucher.expirationDate": "Data de validade",
        "voucher.alternativeReference": "Refer\xeancia alternativa",
        "dragonpay.voucher.non.bank.selectField.placeholder":
          "Selecione o seu fornecedor",
        "dragonpay.voucher.bank.selectField.placeholder": "Selecione seu banco",
        "voucher.paymentReferenceLabel": "Refer\xeancia de pagamento",
        "voucher.surcharge": "Inclui %@ de sobretaxa",
        "voucher.introduction.doku":
          "Obrigado pela sua compra, use a informa\xe7\xe3o a seguir para concluir o seu pagamento.",
        "voucher.shopperName": "Nome do consumidor",
        "voucher.merchantName": "Comerciante online",
        "voucher.introduction.econtext":
          "Obrigado pela sua compra, use a informa\xe7\xe3o a seguir para concluir o seu pagamento.",
        "voucher.telephoneNumber": "N\xfamero de telefone",
        "voucher.shopperReference": "Refer\xeancia do consumidor",
        "voucher.collectionInstitutionNumber":
          "N\xfamero da institui\xe7\xe3o de cobran\xe7a",
        "voucher.econtext.telephoneNumber.invalid":
          "O n\xfamero de telefone deve ter 10 ou 11 d\xedgitos",
        "boletobancario.btnLabel": "Gerar Boleto",
        "boleto.sendCopyToEmail": "Enviar uma c\xf3pia por e-mail",
        "button.copy": "Copiar",
        "button.download": "Baixar",
        "creditCard.storedCard.description.ariaLabel":
          "O cart\xe3o armazenado termina em %@",
        "voucher.entity": "Entidade",
        donateButton: "Doar",
        notNowButton: "Agora n\xe3o",
        thanksForYourSupport: "Obrigado pelo apoio!",
        preauthorizeWith: "Pr\xe9-autorizar com",
        confirmPreauthorization: "Confirmar pr\xe9-autoriza\xe7\xe3o",
        confirmPurchase: "Confirmar compra",
        applyGiftcard: "Resgatar",
        giftcardBalance: "Saldo do vale-presente",
        deductedBalance: "Saldo debitado",
        "creditCard.pin.title": "Pin",
        "creditCard.encryptedPassword.label":
          "Primeiros dois d\xedgitos da senha do cart\xe3o",
        "creditCard.encryptedPassword.placeholder": "12",
        "creditCard.encryptedPassword.invalid": "Senha inv\xe1lida",
        "creditCard.taxNumber.label":
          "Data de nascimento do titular do cart\xe3o (AAMMDD) ou n\xfamero de registro corporativo (10 d\xedgitos)",
        "creditCard.taxNumber.labelAlt":
          "N\xfamero de registro corporativo (10 d\xedgitos)",
        "creditCard.taxNumber.invalid":
          "Data de nascimento do titular do cart\xe3o ou n\xfamero de registro corporativo inv\xe1lidos",
        "storedPaymentMethod.disable.button": "Remover",
        "storedPaymentMethod.disable.confirmation":
          "Remover m\xe9todo de pagamento armazenado",
        "storedPaymentMethod.disable.confirmButton": "Sim, remover",
        "storedPaymentMethod.disable.cancelButton": "Cancelar",
        "ach.bankAccount": "Conta banc\xe1ria",
        "ach.accountHolderNameField.title": "Nome do titular da conta",
        "ach.accountHolderNameField.placeholder": "J. Smith",
        "ach.accountHolderNameField.invalid":
          "Nome do titular da conta inv\xe1lido",
        "ach.accountNumberField.title": "N\xfamero da conta",
        "ach.accountNumberField.invalid": "N\xfamero de conta inv\xe1lido",
        "ach.accountLocationField.title": "N\xfamero de roteamento ABA",
        "ach.accountLocationField.invalid":
          "N\xfamero de roteamento ABA inv\xe1lido",
        "select.state": "Selecionar estado",
        "select.stateOrProvince": "Selecione estado ou prov\xedncia",
        "select.provinceOrTerritory":
          "Selecionar prov\xedncia ou territ\xf3rio",
        "select.country": "Selecione o pa\xeds",
        "select.noOptionsFound": "Nenhuma op\xe7\xe3o encontrada",
        "select.filter.placeholder": "Pesquisar...",
        "telephoneNumber.invalid": "N\xfamero de telefone inv\xe1lido",
        qrCodeOrApp: "ou",
        "paypal.processingPayment": "Processando pagamento...",
        generateQRCode: "Gerar c\xf3digo QR",
        "await.waitForConfirmation": "Aguardando confirma\xe7\xe3o",
        "mbway.confirmPayment": "Confirme seu pagamento no aplicativo MB WAY",
        "shopperEmail.invalid": "Endere\xe7o de e-mail inv\xe1lido",
        "dateOfBirth.format": "DD/MM/AAAA",
        "dateOfBirth.invalid": "Voc\xea deve ter pelo menos 18 anos",
        "blik.confirmPayment":
          "Abra o aplicativo do seu banco para confirmar o pagamento.",
        "blik.invalid": "Digite 6 n\xfameros",
        "blik.code": "C\xf3digo de 6 d\xedgitos",
        "blik.help": "Obtenha o c\xf3digo no aplicativo do seu banco.",
        "swish.pendingMessage":
          "Depois de escanear o QR, o status pode ficar pendente por at\xe9 10 minutos. N\xe3o tente refazer o pagamento antes desse per\xedodo para evitar cobran\xe7a duplicada.",
        "error.va.gen.01": "Campo incompleto",
        "error.va.gen.02": "Campo inv\xe1lido",
        "error.va.sf-cc-num.01": "N\xfamero de cart\xe3o inv\xe1lido",
        "error.va.sf-cc-num.03": "O cart\xe3o inserido n\xe3o \xe9 aceito",
        "error.va.sf-cc-dat.01": "Cart\xe3o muito antigo",
        "error.va.sf-cc-dat.02": "Data muito distante",
        "error.giftcard.no-balance": "Este vale-presente tem saldo zero",
        "error.giftcard.card-error":
          "N\xe3o existe um vale-presente com esse n\xfamero em nossos registros",
        "error.giftcard.currency-error":
          "Os vales-presente s\xe3o v\xe1lidos somente na moeda em que foram emitidos",
        "amazonpay.signout": "Sair do Amazon",
        "amazonpay.changePaymentDetails": "Alterar dados de pagamento",
        "partialPayment.warning":
          "Selecione outro m\xe9todo de pagamento para pagar o restante",
        "partialPayment.remainingBalance": "O saldo restante ser\xe1 %{amount}",
        "bankTransfer.beneficiary": "Benefici\xe1rio",
        "bankTransfer.iban": "IBAN",
        "bankTransfer.bic": "BIC",
        "bankTransfer.reference": "Refer\xeancia",
        "bankTransfer.introduction":
          "Continue criando o novo pagamento por transfer\xeancia banc\xe1ria. Use as informa\xe7\xf5es na tela a seguir para conclu\xed-lo.",
        "bankTransfer.instructions":
          "Obrigado pela sua compra, use a informa\xe7\xe3o a seguir para concluir o seu pagamento.",
        "bacs.accountHolderName": "Nome do titular da conta banc\xe1ria",
        "bacs.accountHolderName.invalid":
          "Nome do titular da conta banc\xe1ria inv\xe1lido",
        "bacs.accountNumber": "N\xfamero da conta banc\xe1ria",
        "bacs.accountNumber.invalid":
          "N\xfamero da conta banc\xe1ria inv\xe1lido",
        "bacs.bankLocationId": "C\xf3digo de classifica\xe7\xe3o",
        "bacs.bankLocationId.invalid":
          "C\xf3digo de classifica\xe7\xe3o inv\xe1lido",
        "bacs.consent.amount":
          "Concordo que o valor acima seja deduzido da minha conta banc\xe1ria.",
        "bacs.consent.account":
          "Confirmo que a conta est\xe1 em meu nome e que sou o \xfanico signat\xe1rio que deve autorizar o d\xe9bito direto nessa conta.",
        edit: "Editar",
        "bacs.confirm": "Confirmar e pagar",
        "bacs.result.introduction":
          "Baixar instru\xe7\xe3o de d\xe9bito direto (DDI)",
        "download.pdf": "Baixar PDF",
        "creditCard.encryptedCardNumber.aria.iframeTitle":
          "Iframe para n\xfamero de cart\xe3o seguro",
        "creditCard.encryptedCardNumber.aria.label":
          "Campo de n\xfamero de cart\xe3o",
        "creditCard.encryptedExpiryDate.aria.iframeTitle":
          "Iframe para data de validade do cart\xe3o seguro",
        "creditCard.encryptedExpiryDate.aria.label":
          "Campo de data de validade",
        "creditCard.encryptedExpiryMonth.aria.iframeTitle":
          "Iframe para m\xeas de validade do cart\xe3o seguro",
        "creditCard.encryptedExpiryMonth.aria.label":
          "Campo de m\xeas de validade",
        "creditCard.encryptedExpiryYear.aria.iframeTitle":
          "Iframe para ano de validade do cart\xe3o seguro",
        "creditCard.encryptedExpiryYear.aria.label": "Campo de ano de validade",
        "creditCard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe para c\xf3digo de seguran\xe7a do cart\xe3o seguro",
        "creditCard.encryptedSecurityCode.aria.label":
          "Campo de c\xf3digo de seguran\xe7a",
        "giftcard.encryptedCardNumber.aria.iframeTitle":
          "Iframe para n\xfamero de cart\xe3o-presente seguro",
        "giftcard.encryptedCardNumber.aria.label":
          "Campo de n\xfamero do cart\xe3o-presente",
        "giftcard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe para c\xf3digo de seguran\xe7a do cart\xe3o-presente seguro",
        "giftcard.encryptedSecurityCode.aria.label":
          "Campo de c\xf3digo de seguran\xe7a do cart\xe3o-presente",
        giftcardTransactionLimit:
          "M\xe1ximo de %{amount} permitido por transa\xe7\xe3o neste cart\xe3o-presente",
        "ach.encryptedBankAccountNumber.aria.iframeTitle":
          "Iframe para n\xfamero de conta banc\xe1ria segura",
        "ach.encryptedBankAccountNumber.aria.label":
          "Campo de conta banc\xe1ria",
        "ach.encryptedBankLocationId.aria.iframeTitle":
          "Iframe para n\xfamero de roteamento banc\xe1rio seguro",
        "ach.encryptedBankLocationId.aria.label":
          "Campo de n\xfamero de roteamento banc\xe1rio",
        "pix.instructions":
          "Abra o app com sua chave PIX cadastrada, escolha Pagar com Pix e escaneie o QR Code ou copie e cole o c\xf3digo",
      },
    }),
    op = Object.freeze({
      __proto__: null,
      default: {
        payButton: "Pl\u0103ti\u021bi",
        "payButton.redirecting": "Se redirec\u021bioneaz\u0103...",
        storeDetails: "Salveaz\u0103 pentru urm\u0103toarea mea plat\u0103",
        "creditCard.holderName": "Numele de pe card",
        "creditCard.holderName.placeholder": "J. Smith",
        "creditCard.holderName.invalid":
          "Numele posesorului de card este incorect",
        "creditCard.numberField.title": "Num\u0103r card",
        "creditCard.numberField.placeholder": "1234 5678 9012 3456",
        "creditCard.expiryDateField.title": "Data expir\u0103rii",
        "creditCard.expiryDateField.placeholder": "LL/AA",
        "creditCard.expiryDateField.month": "Lun\u0103",
        "creditCard.expiryDateField.month.placeholder": "LL",
        "creditCard.expiryDateField.year.placeholder": "AA",
        "creditCard.expiryDateField.year": "An",
        "creditCard.cvcField.title": "CVC/CVV",
        "creditCard.cvcField.placeholder": "123",
        "creditCard.storeDetailsButton": "Re\u021bine pentru data viitoare",
        "creditCard.cvcField.placeholder.4digits": "4 cifre",
        "creditCard.cvcField.placeholder.3digits": "3 cifre",
        "creditCard.taxNumber.placeholder": "AALLZZ / 0123456789",
        installments: "Num\u0103r de rate",
        installmentOption: "%{times}x %{partialValue}",
        installmentOptionMonths: "%{times} luni",
        "installments.oneTime": "Plat\u0103 unic\u0103",
        "installments.installments": "Plat\u0103 \xeen rate",
        "installments.revolving": "Plat\u0103 recurent\u0103",
        "sepaDirectDebit.ibanField.invalid":
          "Num\u0103rul de cont este incorect",
        "sepaDirectDebit.nameField.placeholder": "J. Smith",
        "sepa.ownerName": "Nume posesor",
        "sepa.ibanNumber": "Num\u0103r cont (IBAN)",
        "error.title": "Eroare",
        "error.subtitle.redirect": "Redirec\u021bionare e\u0219uat\u0103",
        "error.subtitle.payment": "Plat\u0103 e\u0219uat\u0103",
        "error.subtitle.refused": "Plat\u0103 refuzat\u0103",
        "error.message.unknown": "S-a produs o eroare necunoscut\u0103",
        "idealIssuer.selectField.title": "Banc\u0103",
        "idealIssuer.selectField.placeholder": "Selecta\u021bi-v\u0103 banca",
        "creditCard.success": "Plat\u0103 reu\u0219it\u0103",
        loading: "Se \xeencarc\u0103...",
        continue: "Continuare",
        continueTo: "Continua\u021bi c\u0103tre",
        "wechatpay.timetopay": "Trebuie s\u0103 achita\u021bi %@",
        "wechatpay.scanqrcode": "Scana\u021bi codul QR",
        personalDetails: "Informa\u021bii personale",
        companyDetails: "Informa\u021bii societate",
        "companyDetails.name": "Denumirea societ\u0103\u021bii",
        "companyDetails.registrationNumber": "Num\u0103r de \xeenregistrare",
        socialSecurityNumber: "Cod numeric personal",
        firstName: "Prenume",
        infix: "Titulatur\u0103",
        lastName: "Nume de familie",
        mobileNumber: "Num\u0103r de mobil",
        "mobileNumber.invalid": "Num\u0103r de telefon mobil incorect",
        city: "Ora\u0219",
        postalCode: "Cod po\u0219tal",
        countryCode: "Codul \u021b\u0103rii",
        telephoneNumber: "Num\u0103r de telefon",
        dateOfBirth: "Data na\u0219terii",
        shopperEmail: "Adres\u0103 de e-mail",
        gender: "Gen",
        male: "B\u0103rbat",
        female: "Femeie",
        billingAddress: "Adresa de facturare",
        street: "Strada",
        stateOrProvince: "Jude\u021b sau provincie",
        country: "\u021aar\u0103",
        houseNumberOrName: "Num\u0103r",
        separateDeliveryAddress:
          "Specifica\u021bi o adres\u0103 de livrare separat\u0103",
        deliveryAddress: "Adres\u0103 de livrare",
        zipCode: "Cod po\u0219tal",
        apartmentSuite: "Apartament",
        provinceOrTerritory: "Provincie sau teritoriu",
        cityTown: "Ora\u0219/localitate",
        address: "Adres\u0103",
        state: "Stat",
        "field.title.optional": "(op\u021bional)",
        "creditCard.cvcField.title.optional": "CVC/CVV (op\u021bional)",
        "issuerList.wallet.placeholder": "Selecta\u021bi-v\u0103 portofelul",
        privacyPolicy: "Politica de confiden\u021bialitate",
        "afterPay.agreement": "Sunt de acord cu %@ apar\u021bin\xe2nd AfterPay",
        paymentConditions: "condi\u021bii de plat\u0103",
        openApp: "Deschide\u021bi aplica\u021bia",
        "voucher.readInstructions": "Citi\u021bi instruc\u021biunile",
        "voucher.introduction":
          "V\u0103 mul\u021bumim pentru cump\u0103r\u0103turi, v\u0103 rug\u0103m s\u0103 utiliza\u021bi urm\u0103torul cupon pentru a v\u0103 finaliza plata.",
        "voucher.expirationDate": "Data de expirare",
        "voucher.alternativeReference": "Referin\u021b\u0103 alternativ\u0103",
        "dragonpay.voucher.non.bank.selectField.placeholder":
          "Selecta\u021bi furnizorul dvs.",
        "dragonpay.voucher.bank.selectField.placeholder":
          "Selecta\u021bi banca dvs.",
        "voucher.paymentReferenceLabel": "Referin\u021ba pl\u0103\u021bii",
        "voucher.surcharge": "Include suprataxa de %@",
        "voucher.introduction.doku":
          "V\u0103 mul\u021bumim pentru cump\u0103r\u0103turi, v\u0103 rug\u0103m s\u0103 utiliza\u021bi urm\u0103toarele informa\u021bii pentru a v\u0103 finaliza plata.",
        "voucher.shopperName": "Nume cump\u0103r\u0103tor",
        "voucher.merchantName": "Comerciant",
        "voucher.introduction.econtext":
          "V\u0103 mul\u021bumim pentru cump\u0103r\u0103turi, v\u0103 rug\u0103m s\u0103 utiliza\u021bi urm\u0103toarele informa\u021bii pentru a v\u0103 finaliza plata.",
        "voucher.telephoneNumber": "Num\u0103r de telefon",
        "voucher.shopperReference": "Referin\u021b\u0103 cump\u0103r\u0103tor",
        "voucher.collectionInstitutionNumber":
          "Num\u0103r institu\u021bie de colectare",
        "voucher.econtext.telephoneNumber.invalid":
          "Num\u0103rul de telefon trebuie s\u0103 aib\u0103 10 sau 11 cifre",
        "boletobancario.btnLabel": "Generare Boleto",
        "boleto.sendCopyToEmail": "Trimite o copie la adresa mea de e-mail",
        "button.copy": "Copiere",
        "button.download": "Desc\u0103rcare",
        "creditCard.storedCard.description.ariaLabel":
          "Cardul memorat se termin\u0103 \xeen %@",
        "voucher.entity": "Entitate",
        donateButton: "Dona\u021bi",
        notNowButton: "Nu acum",
        thanksForYourSupport: "V\u0103 mul\u021bumim pentru sprijin!",
        preauthorizeWith: "Preautorizare cu",
        confirmPreauthorization: "Confirma\u021bi preautorizarea",
        confirmPurchase: "Confirma\u021bi achizi\u021bia",
        applyGiftcard: "Valorificare",
        giftcardBalance: "Soldul de pe cardul cadou",
        deductedBalance: "Sold sc\u0103zut",
        "creditCard.pin.title": "PIN",
        "creditCard.encryptedPassword.label":
          "Primele 2 cifre ale parolei aferente cardului",
        "creditCard.encryptedPassword.placeholder": "12",
        "creditCard.encryptedPassword.invalid": "Parol\u0103 incorect\u0103",
        "creditCard.taxNumber.label":
          "Data de na\u0219tere a posesorului de card (AALLZZ) sau num\u0103rul de \xeenregistrare al societ\u0103\u021bii (10 cifre).",
        "creditCard.taxNumber.labelAlt":
          "Num\u0103rul de \xeenregistrare al societ\u0103\u021bii (10 cifre)",
        "creditCard.taxNumber.invalid":
          "Data de na\u0219tere a posesorului de card sau num\u0103rul de \xeenregistrare al societ\u0103\u021bii este incorect",
        "storedPaymentMethod.disable.button": "\u0218tergere",
        "storedPaymentMethod.disable.confirmation":
          "\u0218terge\u021bi metoda de plat\u0103 memorat\u0103",
        "storedPaymentMethod.disable.confirmButton": "Da, \u0219terge",
        "storedPaymentMethod.disable.cancelButton": "Anulare",
        "ach.bankAccount": "Cont bancar",
        "ach.accountHolderNameField.title": "Numele titularului de cont",
        "ach.accountHolderNameField.placeholder": "J. Smith",
        "ach.accountHolderNameField.invalid":
          "Numele titularului de cont este incorect",
        "ach.accountNumberField.title": "Num\u0103r de cont",
        "ach.accountNumberField.invalid": "Num\u0103rul de cont este incorect",
        "ach.accountLocationField.title": "Num\u0103r de direc\u021bionare ABA",
        "ach.accountLocationField.invalid":
          "Num\u0103r de direc\u021bionare ABA incorect",
        "select.state": "Selecta\u021bi statul",
        "select.stateOrProvince": "Selecta\u021bi jude\u021bul sau provincia",
        "select.provinceOrTerritory": "Selecta\u021bi provincia sau teritoriul",
        "select.country": "Selecta\u021bi \u021bara",
        "select.noOptionsFound": "Nu s-a g\u0103sit nicio op\u021biune",
        "select.filter.placeholder": "C\u0103utare...",
        "telephoneNumber.invalid": "Num\u0103r de telefon incorect",
        qrCodeOrApp: "sau",
        "paypal.processingPayment": "Se prelucreaz\u0103 plata...",
        generateQRCode: "Genera\u021bi codul QR",
        "await.waitForConfirmation": "Se a\u0219teapt\u0103 confirmarea",
        "mbway.confirmPayment":
          "Confirma\u021bi plata \xeen aplica\u021bia MB WAY",
        "shopperEmail.invalid": "Adres\u0103 de e-mail incorect\u0103",
        "dateOfBirth.format": "ZZ/LL/AAAA",
        "dateOfBirth.invalid": "Trebuie s\u0103 ave\u021bi minimum 18 ani",
        "blik.confirmPayment":
          "Deschide\u021bi aplica\u021bia dvs. de banking pentru a confirma plata.",
        "blik.invalid": "Introduce\u021bi 6 cifre",
        "blik.code": "Cod din 6 cifre",
        "blik.help":
          "Ob\u021bine\u021bi codul din aplica\u021bia dvs. de banking.",
        "swish.pendingMessage":
          "Dup\u0103 ce scana\u021bi, starea poate fi \u201e\xeen a\u0219teptare\u201d timp de maximum 10 minute. \xcencerc\u0103rile de a pl\u0103ti din nou \xeen acest r\u0103stimp pot genera prelev\u0103ri multiple de fonduri.",
        "error.va.gen.01": "C\xe2mp incomplet",
        "error.va.gen.02": "C\xe2mp incorect",
        "error.va.sf-cc-num.01": "Num\u0103r de card incorect",
        "error.va.sf-cc-num.03": "A fost introdus un card neacceptat",
        "error.va.sf-cc-dat.01": "Cardul este prea vechi",
        "error.va.sf-cc-dat.02": "Data este prea departe \xeen viitor",
        "error.giftcard.no-balance": "Acest card cadou are soldul zero",
        "error.giftcard.card-error":
          "\xcen eviden\u021bele noastre nu figureaz\u0103 niciun card cadou cu acest num\u0103r",
        "error.giftcard.currency-error":
          "Cardurile cadou sunt valabile numai \xeen moneda \xeen care au fost emise",
        "amazonpay.signout": "Deconecta\u021bi-v\u0103 de pe platforma Amazon",
        "amazonpay.changePaymentDetails":
          "Modifica\u021bi detaliile de plat\u0103",
        "partialPayment.warning":
          "Pentru a achita suma r\u0103mas\u0103, selecta\u021bi o alt\u0103 metod\u0103 de plat\u0103",
        "partialPayment.remainingBalance":
          "Soldul r\u0103mas va fi de %{amount}",
        "bankTransfer.beneficiary": "Beneficiar",
        "bankTransfer.iban": "IBAN",
        "bankTransfer.bic": "BIC",
        "bankTransfer.reference": "Referin\u0163\u0103",
        "bankTransfer.introduction":
          "Continua\u021bi s\u0103 crea\u021bi o nou\u0103 plat\u0103 prin transfer bancar. Pute\u021bi utiliza detaliile din ecranul urm\u0103tor pentru a finaliza aceast\u0103 plat\u0103.",
        "bankTransfer.instructions":
          "V\u0103 mul\u021bumim pentru cump\u0103r\u0103turi, v\u0103 rug\u0103m s\u0103 utiliza\u021bi urm\u0103toarele informa\u021bii pentru a v\u0103 finaliza plata.",
        "bacs.accountHolderName": "Numele titularului contului bancar",
        "bacs.accountHolderName.invalid":
          "Numele titularului contului bancar este incorect",
        "bacs.accountNumber": "Num\u0103rul contului bancar",
        "bacs.accountNumber.invalid":
          "Num\u0103rul contului bancar este incorect",
        "bacs.bankLocationId": "Cod de identificare bancar\u0103",
        "bacs.bankLocationId.invalid":
          "Cod de identificare bancar\u0103 incorect",
        "bacs.consent.amount":
          "Sunt de acord ca suma men\u021bionat\u0103 mai sus s\u0103 fie dedus\u0103 din contul meu bancar.",
        "bacs.consent.account":
          "Confirm c\u0103 sunt titularul acestui cont \u0219i c\u0103 sunt singurul semnatar necesar pentru autorizarea debitului direct pentru acest cont.",
        edit: "Editare",
        "bacs.confirm": "Confirma\u021bi \u0219i pl\u0103ti\u021bi",
        "bacs.result.introduction":
          "Desc\u0103rca\u021bi instruc\u021biunile de debitare direct\u0103 (DDI/mandat)",
        "download.pdf": "Desc\u0103rca\u021bi PDF",
        "creditCard.encryptedCardNumber.aria.iframeTitle":
          "Iframe pentru num\u0103rul cardului securizat",
        "creditCard.encryptedCardNumber.aria.label":
          "C\xe2mp aferent num\u0103rului cardului",
        "creditCard.encryptedExpiryDate.aria.iframeTitle":
          "Iframe pentru data de expirare a cardului securizat",
        "creditCard.encryptedExpiryDate.aria.label":
          "C\xe2mp aferent datei de expirare",
        "creditCard.encryptedExpiryMonth.aria.iframeTitle":
          "Iframe pentru luna de expirare a cardului securizat",
        "creditCard.encryptedExpiryMonth.aria.label":
          "C\xe2mp aferent lunii de expirare",
        "creditCard.encryptedExpiryYear.aria.iframeTitle":
          "Iframe pentru anul de expirare a cardului securizat",
        "creditCard.encryptedExpiryYear.aria.label":
          "C\xe2mp aferent anului de expirare",
        "creditCard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe pentru codul de securitate al cardului securizat",
        "creditCard.encryptedSecurityCode.aria.label":
          "C\xe2mp aferent codului de securitate",
        "giftcard.encryptedCardNumber.aria.iframeTitle":
          "Iframe pentru num\u0103rul cardului cadou securizat",
        "giftcard.encryptedCardNumber.aria.label":
          "C\xe2mp aferent num\u0103rului cardului cadou",
        "giftcard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe pentru codul de securitate al cardului cadou securizat",
        "giftcard.encryptedSecurityCode.aria.label":
          "C\xe2mp aferent codului de securitate al cardului cadou",
        giftcardTransactionLimit:
          "Pentru acest card cadou, suma maxim\u0103 permis\u0103 per tranzac\u021bie este de %{amount}",
        "ach.encryptedBankAccountNumber.aria.iframeTitle":
          "Iframe pentru num\u0103rul contului bancar securizat",
        "ach.encryptedBankAccountNumber.aria.label":
          "C\xe2mp aferent contului bancar",
        "ach.encryptedBankLocationId.aria.iframeTitle":
          "Iframe pentru num\u0103rul securizat de direc\u021bionare bancar\u0103 (routing number)",
        "ach.encryptedBankLocationId.aria.label":
          "C\xe2mp aferent codului de direc\u021bionare bancar\u0103 (routing number)",
      },
    }),
    lp = Object.freeze({
      __proto__: null,
      default: {
        payButton: "\u0417\u0430\u043f\u043b\u0430\u0442\u0438\u0442\u044c",
        "payButton.redirecting":
          "\u041f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435...",
        storeDetails:
          "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0434\u043b\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e \u043f\u043b\u0430\u0442\u0435\u0436\u0430",
        "creditCard.holderName":
          "\u0418\u043c\u044f \u043d\u0430 \u043a\u0430\u0440\u0442\u0435",
        "creditCard.holderName.placeholder":
          "\u0418. \u041f\u0435\u0442\u0440\u043e\u0432",
        "creditCard.holderName.invalid":
          "\u041d\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u0438\u043c\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u043a\u0430\u0440\u0442\u044b",
        "creditCard.numberField.title":
          "\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b",
        "creditCard.numberField.placeholder": "1234 5678 9012 3456",
        "creditCard.expiryDateField.title":
          "\u0421\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f",
        "creditCard.expiryDateField.placeholder": "\u041c\u041c/\u0413\u0413",
        "creditCard.expiryDateField.month": "\u041c\u0435\u0441\u044f\u0446",
        "creditCard.expiryDateField.month.placeholder": "\u041c\u041c",
        "creditCard.expiryDateField.year.placeholder": "\u0413\u0413",
        "creditCard.expiryDateField.year": "\u0413\u043e\u0434",
        "creditCard.cvcField.title": "CVC / CVV",
        "creditCard.cvcField.placeholder": "123",
        "creditCard.storeDetailsButton":
          "\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0440\u0430\u0437",
        "creditCard.cvcField.placeholder.4digits":
          "4 \u0446\u0438\u0444\u0440\u044b",
        "creditCard.cvcField.placeholder.3digits":
          "3 \u0446\u0438\u0444\u0440\u044b",
        "creditCard.taxNumber.placeholder":
          "\u0413\u0413\u041c\u041c\u0414\u0414 / 0123456789",
        installments:
          "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043b\u0430\u0442\u0435\u0436\u0435\u0439",
        installmentOption: "%{times}\xd7 %{partialValue}",
        installmentOptionMonths: "%{times} \u043c\u0435\u0441.",
        "installments.oneTime":
          "\u041e\u0434\u043d\u043e\u0440\u0430\u0437\u043e\u0432\u044b\u0439 \u043f\u043b\u0430\u0442\u0435\u0436",
        "installments.installments":
          "\u0420\u0430\u0441\u0441\u0440\u043e\u0447\u043a\u0430",
        "installments.revolving":
          "\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u044e\u0449\u0430\u044f\u0441\u044f \u043e\u043f\u043b\u0430\u0442\u0430",
        "sepaDirectDebit.ibanField.invalid":
          "\u041d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0441\u0447\u0435\u0442\u0430",
        "sepaDirectDebit.nameField.placeholder":
          "\u0418. \u041f\u0435\u0442\u0440\u043e\u0432",
        "sepa.ownerName":
          "\u0418\u043c\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430",
        "sepa.ibanNumber":
          "\u041d\u043e\u043c\u0435\u0440 \u0441\u0447\u0435\u0442\u0430 (IBAN)",
        "error.title": "\u041e\u0448\u0438\u0431\u043a\u0430",
        "error.subtitle.redirect":
          "\u0421\u0431\u043e\u0439 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",
        "error.subtitle.payment":
          "\u0421\u0431\u043e\u0439 \u043e\u043f\u043b\u0430\u0442\u044b",
        "error.subtitle.refused":
          "\u041e\u043f\u043b\u0430\u0442\u0430 \u043e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u0430",
        "error.message.unknown":
          "\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430",
        "idealIssuer.selectField.title": "\u0411\u0430\u043d\u043a",
        "idealIssuer.selectField.placeholder":
          "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0430\u043d\u043a",
        "creditCard.success":
          "\u041f\u043b\u0430\u0442\u0435\u0436 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d",
        loading: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430\u2026",
        continue:
          "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c",
        continueTo: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a",
        "wechatpay.timetopay":
          "\u0423 \u0432\u0430\u0441 %@ \u043d\u0430 \u043e\u043f\u043b\u0430\u0442\u0443",
        "wechatpay.scanqrcode":
          "\u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c QR-\u043a\u043e\u0434",
        personalDetails:
          "\u041b\u0438\u0447\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",
        companyDetails:
          "\u0414\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438",
        "companyDetails.name":
          "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438",
        "companyDetails.registrationNumber":
          "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440",
        socialSecurityNumber:
          "\u041d\u043e\u043c\u0435\u0440 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043b\u0438 \u0418\u041d\u041d",
        firstName: "\u0418\u043c\u044f",
        infix: "\u041f\u0440\u0438\u0441\u0442\u0430\u0432\u043a\u0430",
        lastName: "\u0424\u0430\u043c\u0438\u043b\u0438\u044f",
        mobileNumber:
          "\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",
        "mobileNumber.invalid":
          "\u041d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u043d\u043e\u043c\u0435\u0440 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0433\u043e",
        city: "\u0413\u043e\u0440\u043e\u0434",
        postalCode:
          "\u041f\u043e\u0447\u0442\u043e\u0432\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441",
        countryCode: "\u041a\u043e\u0434 \u0441\u0442\u0440\u0430\u043d\u044b",
        telephoneNumber:
          "\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",
        dateOfBirth:
          "\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",
        shopperEmail:
          "\u0410\u0434\u0440\u0435\u0441 \u044d\u043b. \u043f\u043e\u0447\u0442\u044b",
        gender: "\u041f\u043e\u043b",
        male: "\u041c\u0443\u0436\u0447\u0438\u043d\u0430",
        female: "\u0416\u0435\u043d\u0449\u0438\u043d\u0430",
        billingAddress:
          "\u041f\u043b\u0430\u0442\u0435\u0436\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441",
        street: "\u0423\u043b\u0438\u0446\u0430",
        stateOrProvince: "\u0420\u0435\u0433\u0438\u043e\u043d",
        country: "\u0421\u0442\u0440\u0430\u043d\u0430",
        houseNumberOrName:
          "\u041d\u043e\u043c\u0435\u0440 \u0434\u043e\u043c\u0430",
        separateDeliveryAddress:
          "\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",
        deliveryAddress:
          "\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",
        zipCode:
          "\u041f\u043e\u0447\u0442\u043e\u0432\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441",
        apartmentSuite: "\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430",
        provinceOrTerritory:
          "\u041f\u0440\u043e\u0432\u0438\u043d\u0446\u0438\u044f \u0438\u043b\u0438 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u044f",
        cityTown: "\u0413\u043e\u0440\u043e\u0434",
        address: "\u0410\u0434\u0440\u0435\u0441",
        state: "\u0428\u0442\u0430\u0442",
        "field.title.optional":
          "(\u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)",
        "creditCard.cvcField.title.optional":
          "CVC / CVV (\u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)",
        "issuerList.wallet.placeholder":
          "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043e\u0448\u0435\u043b\u0435\u043a",
        privacyPolicy:
          "\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438",
        "afterPay.agreement":
          "\u042f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e %@ AfterPay",
        paymentConditions:
          "\u0443\u0441\u043b\u043e\u0432\u0438\u044f \u043e\u043f\u043b\u0430\u0442\u044b",
        openApp:
          "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435",
        "voucher.readInstructions":
          "\u041f\u0440\u043e\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438",
        "voucher.introduction":
          "\u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u0438\u043c \u0437\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443. \u0414\u043b\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u043e\u043f\u043b\u0430\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043a\u0443\u043f\u043e\u043d.",
        "voucher.expirationDate":
          "\u0421\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f",
        "voucher.alternativeReference":
          "\u0414\u0440\u0443\u0433\u043e\u0439 \u043a\u043e\u0434",
        "dragonpay.voucher.non.bank.selectField.placeholder":
          "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043e\u0435\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430",
        "dragonpay.voucher.bank.selectField.placeholder":
          "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0430\u043d\u043a",
        "voucher.paymentReferenceLabel":
          "\u041a\u043e\u0434 \u043e\u043f\u043b\u0430\u0442\u044b",
        "voucher.surcharge":
          "\u0412\u043a\u043b. \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u044e %@",
        "voucher.introduction.doku":
          "\u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u0438\u043c \u0437\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443. \u0414\u043b\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u043e\u043f\u043b\u0430\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f.",
        "voucher.shopperName":
          "\u0418\u043c\u044f \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044f",
        "voucher.merchantName":
          "\u041f\u0440\u043e\u0434\u0430\u0432\u0435\u0446",
        "voucher.introduction.econtext":
          "\u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u0438\u043c \u0437\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443. \u0414\u043b\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u043e\u043f\u043b\u0430\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f.",
        "voucher.telephoneNumber":
          "\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",
        "voucher.shopperReference":
          "\u0421\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044f",
        "voucher.collectionInstitutionNumber":
          "\u041d\u043e\u043c\u0435\u0440 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f \u0441\u0440\u0435\u0434\u0441\u0442\u0432",
        "voucher.econtext.telephoneNumber.invalid":
          "\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0434\u043b\u0438\u043d\u043e\u0439 10 \u0438\u043b\u0438 11 \u0446\u0438\u0444\u0440",
        "boletobancario.btnLabel":
          "\u0421\u043e\u0437\u0434\u0430\u0442\u044c Boleto",
        "boleto.sendCopyToEmail":
          "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043c\u043d\u0435 \u043a\u043e\u043f\u0438\u044e \u043d\u0430 \u044d\u043b. \u043f\u043e\u0447\u0442\u0443",
        "button.copy": "\u041a\u043e\u043f\u0438\u044f",
        "button.download":
          "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c",
        "creditCard.storedCard.description.ariaLabel":
          "\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u0430 \u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430 %@",
        "voucher.entity": "\u041e\u0431\u044a\u0435\u043a\u0442",
        donateButton:
          "\u041f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u0442\u044c",
        notNowButton: "\u041f\u043e\u0437\u0436\u0435",
        thanksForYourSupport:
          "\u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u0438\u043c \u0437\u0430 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443!",
        preauthorizeWith:
          "\u041f\u0440\u0435\u0434\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0432",
        confirmPreauthorization:
          "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044e",
        confirmPurchase:
          "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u043f\u043e\u043a\u0443\u043f\u043a\u0443",
        applyGiftcard:
          "\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c",
        giftcardBalance:
          "\u0411\u0430\u043b\u0430\u043d\u0441 \u043f\u043e\u0434\u0430\u0440\u043e\u0447\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u044b",
        deductedBalance:
          "\u0411\u0430\u043b\u0430\u043d\u0441 \u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0439",
        "creditCard.pin.title": "PIN-\u043a\u043e\u0434",
        "creditCard.encryptedPassword.label":
          "\u041f\u0435\u0440\u0432\u044b\u0435 2 \u0446\u0438\u0444\u0440\u044b \u043f\u0430\u0440\u043e\u043b\u044f \u043a\u0430\u0440\u0442\u044b",
        "creditCard.encryptedPassword.placeholder": "12",
        "creditCard.encryptedPassword.invalid":
          "\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",
        "creditCard.taxNumber.label":
          "\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u043a\u0430\u0440\u0442\u044b (\u0413\u0413\u041c\u041c\u0414\u0414) \u0438\u043b\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u044f (10 \u0446\u0438\u0444\u0440)",
        "creditCard.taxNumber.labelAlt":
          "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u044f (10 \u0446\u0438\u0444\u0440)",
        "creditCard.taxNumber.invalid":
          "\u041d\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u0434\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u043a\u0430\u0440\u0442\u044b \u0438\u043b\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u043d\u043e\u043c\u0435\u0440\u0430 \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u044f",
        "storedPaymentMethod.disable.button":
          "\u0423\u0434\u0430\u043b\u0438\u0442\u044c",
        "storedPaymentMethod.disable.confirmation":
          "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b",
        "storedPaymentMethod.disable.confirmButton":
          "\u0414\u0430, \u0443\u0434\u0430\u043b\u0438\u0442\u044c",
        "storedPaymentMethod.disable.cancelButton":
          "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",
        "ach.bankAccount":
          "\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0439 \u0441\u0447\u0435\u0442",
        "ach.accountHolderNameField.title":
          "\u0418\u043c\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u043a\u0430\u0440\u0442\u044b",
        "ach.accountHolderNameField.placeholder":
          "\u0418. \u041f\u0435\u0442\u0440\u043e\u0432",
        "ach.accountHolderNameField.invalid":
          "\u041d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0438\u043c\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u043a\u0430\u0440\u0442\u044b",
        "ach.accountNumberField.title":
          "\u041d\u043e\u043c\u0435\u0440 \u0441\u0447\u0435\u0442\u0430",
        "ach.accountNumberField.invalid":
          "\u041d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0441\u0447\u0435\u0442\u0430",
        "ach.accountLocationField.title":
          "\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 ABA",
        "ach.accountLocationField.invalid":
          "\u041d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 ABA",
        "select.state":
          "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0448\u0442\u0430\u0442",
        "select.stateOrProvince":
          "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0448\u0442\u0430\u0442 \u0438\u043b\u0438 \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
        "select.provinceOrTerritory":
          "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u043e\u0432\u0438\u043d\u0446\u0438\u044e \u0438\u043b\u0438 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u044e",
        "select.country":
          "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0443",
        "select.noOptionsFound":
          "\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e",
        "select.filter.placeholder": "\u041f\u043e\u0438\u0441\u043a\u2026",
        "telephoneNumber.invalid":
          "\u041d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",
        qrCodeOrApp: "\u0438\u043b\u0438",
        "paypal.processingPayment":
          "\u041f\u043b\u0430\u0442\u0435\u0436 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f\u2026",
        generateQRCode:
          "\u0421\u043e\u0437\u0434\u0430\u0442\u044c QR-\u043a\u043e\u0434",
        "await.waitForConfirmation":
          "\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f",
        "mbway.confirmPayment":
          "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043e\u043f\u043b\u0430\u0442\u0443 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 MB WAY",
        "shopperEmail.invalid":
          "\u041d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b. \u043f\u043e\u0447\u0442\u044b",
        "dateOfBirth.format":
          "\u0414\u0414/\u041c\u041c/\u0413\u0413\u0413\u0413",
        "dateOfBirth.invalid":
          "\u0412\u0430\u043c \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c 18 \u043b\u0435\u0442 \u0438\u043b\u0438 \u0431\u043e\u043b\u044c\u0448\u0435",
        "blik.confirmPayment":
          "\u0414\u043b\u044f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u043b\u0430\u0442\u044b \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0431\u0430\u043d\u043a\u0430.",
        "blik.invalid":
          "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 6 \u0446\u0438\u0444\u0440",
        "blik.code":
          "6-\u0437\u043d\u0430\u0447\u043d\u044b\u0439 \u043a\u043e\u0434",
        "blik.help":
          "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043a\u043e\u0434 \u0438\u0437 \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f.",
        "swish.pendingMessage":
          "\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u043f\u043b\u0430\u0442\u044b \u043f\u043e\u0441\u043b\u0435 \u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u043d\u044f\u0442\u044c 10 \u043c\u0438\u043d\u0443\u0442. \u041f\u043e\u043f\u044b\u0442\u043a\u0430 \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u043e\u043f\u043b\u0430\u0442\u0443 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c \u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f\u043c \u0441\u043e \u0441\u0447\u0435\u0442\u0430.",
        "error.va.gen.01":
          "\u041d\u0435\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",
        "error.va.gen.02":
          "\u041d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",
        "error.va.sf-cc-num.01":
          "\u041d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b",
        "error.va.sf-cc-num.03":
          "\u0412\u0432\u0435\u0434\u0435\u043d\u0430 \u043d\u0435\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u0430\u044f \u043a\u0430\u0440\u0442\u0430",
        "error.va.sf-cc-dat.01":
          "\u0423\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0430\u044f \u043a\u0430\u0440\u0442\u0430",
        "error.va.sf-cc-dat.02":
          "\u0414\u0430\u0442\u0430 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u0430\u043b\u0435\u043a\u043e \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043c",
        "error.giftcard.no-balance":
          "\u041d\u0430 \u044d\u0442\u043e\u0439 \u043f\u043e\u0434\u0430\u0440\u043e\u0447\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u0435 \u043d\u0435\u0442 \u0441\u0440\u0435\u0434\u0441\u0442\u0432",
        "error.giftcard.card-error":
          "\u0423 \u043d\u0430\u0441 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u043a\u0430\u0440\u0442\u0430 \u0441 \u0442\u0430\u043a\u0438\u043c \u043d\u043e\u043c\u0435\u0440\u043e\u043c",
        "error.giftcard.currency-error":
          "\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0434\u0430\u0440\u043e\u0447\u043d\u044b\u0435 \u043a\u0430\u0440\u0442\u044b \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0432\u0430\u043b\u044e\u0442\u044b",
        "amazonpay.signout":
          "\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 Amazon",
        "amazonpay.changePaymentDetails":
          "\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u0435",
        "partialPayment.warning":
          "\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b \u043e\u0441\u0442\u0430\u0442\u043a\u0430",
        "partialPayment.remainingBalance":
          "\u041e\u0441\u0442\u0430\u0442\u043e\u043a \u043d\u0430 \u0431\u0430\u043b\u0430\u043d\u0441\u0435 \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u0442 %{amount}",
        "bankTransfer.beneficiary":
          "\u041f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044c",
        "bankTransfer.iban": "IBAN",
        "bankTransfer.bic": "BIC",
        "bankTransfer.reference": "\u0421\u0441\u044b\u043b\u043a\u0430",
        "bankTransfer.introduction":
          "\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0434\u0430\u043b\u0435\u0435. \u0414\u043b\u044f \u043e\u043a\u043e\u043d\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u043f\u043b\u0430\u0442\u0435\u0436\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u044d\u043a\u0440\u0430\u043d\u0435.",
        "bankTransfer.instructions":
          "\u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u0438\u043c \u0437\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443. \u0414\u043b\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u043e\u043f\u043b\u0430\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f.",
        "bacs.accountHolderName":
          "\u0418\u043c\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u0441\u0447\u0435\u0442\u0430",
        "bacs.accountHolderName.invalid":
          "\u041d\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u0438\u043c\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u0441\u0447\u0435\u0442\u0430",
        "bacs.accountNumber":
          "\u041d\u043e\u043c\u0435\u0440 \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u0441\u0447\u0435\u0442\u0430",
        "bacs.accountNumber.invalid":
          "\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u0441\u0447\u0435\u0442\u0430",
        "bacs.bankLocationId":
          "\u041a\u043e\u0434 \u0431\u0430\u043d\u043a\u0430",
        "bacs.bankLocationId.invalid":
          "\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043a\u043e\u0434 \u0431\u0430\u043d\u043a\u0430",
        "bacs.consent.amount":
          "\u0412\u044b\u0440\u0430\u0436\u0430\u044e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0432\u044b\u0448\u0435\u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0441\u0443\u043c\u043c\u044b \u0441 \u043c\u043e\u0435\u0433\u043e \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u0441\u0447\u0435\u0442\u0430.",
        "bacs.consent.account":
          "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044e, \u0447\u0442\u043e \u0441\u0447\u0435\u0442 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d \u043d\u0430 \u043c\u043e\u0435 \u0438\u043c\u044f \u0438 \u0447\u0442\u043e \u044f \u2013 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u043b\u0438\u0446\u043e, \u0438\u043c\u0435\u044e\u0449\u0435\u0435 \u043f\u0440\u0430\u0432\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u0438, \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u044e\u0449\u0435\u0439 \u043f\u0440\u044f\u043c\u043e\u0435 \u0434\u0435\u0431\u0435\u0442\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0441\u043e \u0441\u0447\u0435\u0442\u0430.",
        edit: "\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",
        "bacs.confirm":
          "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u0438 \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c",
        "bacs.result.introduction":
          "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0440\u0430\u0441\u043f\u043e\u0440\u044f\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u044f\u043c\u043e\u0433\u043e \u0434\u0435\u0431\u0435\u0442\u043e\u0432\u0430\u043d\u0438\u044f (DDI / \u043f\u043e\u0440\u0443\u0447\u0435\u043d\u0438\u0435)",
        "download.pdf":
          "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c PDF",
        "creditCard.encryptedCardNumber.aria.iframeTitle":
          "Iframe \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u043d\u043e\u043c\u0435\u0440\u0430 \u043a\u0430\u0440\u0442\u044b",
        "creditCard.encryptedCardNumber.aria.label":
          "\u041f\u043e\u043b\u0435 \u043d\u043e\u043c\u0435\u0440\u0430 \u043a\u0430\u0440\u0442\u044b",
        "creditCard.encryptedExpiryDate.aria.iframeTitle":
          "Iframe \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u0434\u0430\u0442\u044b \u0441\u0440\u043e\u043a\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043a\u0430\u0440\u0442\u044b",
        "creditCard.encryptedExpiryDate.aria.label":
          "\u041f\u043e\u043b\u0435 \u0434\u0430\u0442\u044b \u0441\u0440\u043e\u043a\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f",
        "creditCard.encryptedExpiryMonth.aria.iframeTitle":
          "Iframe \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u0435\u0441\u044f\u0446\u0430 \u0441\u0440\u043e\u043a\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043a\u0430\u0440\u0442\u044b",
        "creditCard.encryptedExpiryMonth.aria.label":
          "\u041f\u043e\u043b\u0435 \u043c\u0435\u0441\u044f\u0446\u0430 \u0441\u0440\u043e\u043a\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f",
        "creditCard.encryptedExpiryYear.aria.iframeTitle":
          "Iframe \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0433\u043e\u0434\u0430 \u0441\u0440\u043e\u043a\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043a\u0430\u0440\u0442\u044b",
        "creditCard.encryptedExpiryYear.aria.label":
          "\u041f\u043e\u043b\u0435 \u0433\u043e\u0434\u0430 \u0441\u0440\u043e\u043a\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f",
        "creditCard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u0437\u0430\u0449\u0438\u0442\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430",
        "creditCard.encryptedSecurityCode.aria.label":
          "\u041f\u043e\u043b\u0435 \u0437\u0430\u0449\u0438\u0442\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430",
        "giftcard.encryptedCardNumber.aria.iframeTitle":
          "Iframe \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u043d\u043e\u043c\u0435\u0440\u0430 \u043f\u043e\u0434\u0430\u0440\u043e\u0447\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u044b",
        "giftcard.encryptedCardNumber.aria.label":
          "\u041f\u043e\u043b\u0435 \u043d\u043e\u043c\u0435\u0440\u0430 \u043f\u043e\u0434\u0430\u0440\u043e\u0447\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u044b",
        "giftcard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u0437\u0430\u0449\u0438\u0442\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430 \u043f\u043e\u0434\u0430\u0440\u043e\u0447\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u044b",
        "giftcard.encryptedSecurityCode.aria.label":
          "\u041f\u043e\u043b\u0435 \u0437\u0430\u0449\u0438\u0442\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430 \u043f\u043e\u0434\u0430\u0440\u043e\u0447\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u044b",
        giftcardTransactionLimit:
          "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430, \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043d\u0430\u044f \u0434\u043b\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u043e \u044d\u0442\u043e\u0439 \u043f\u043e\u0434\u0430\u0440\u043e\u0447\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u0435: %{amount}",
        "ach.encryptedBankAccountNumber.aria.iframeTitle":
          "Iframe \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u043d\u043e\u043c\u0435\u0440\u0430 \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u0441\u0447\u0435\u0442\u0430",
        "ach.encryptedBankAccountNumber.aria.label":
          "\u041f\u043e\u043b\u0435 \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u0441\u0447\u0435\u0442\u0430",
        "ach.encryptedBankLocationId.aria.iframeTitle":
          "Iframe \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u043a\u043e\u0434\u0430 \u0431\u0430\u043d\u043a\u0430",
        "ach.encryptedBankLocationId.aria.label":
          "\u041f\u043e\u043b\u0435 \u043a\u043e\u0434\u0430 \u0431\u0430\u043d\u043a\u0430",
      },
    }),
    sp = Object.freeze({
      __proto__: null,
      default: {
        payButton: "Zaplati\u0165",
        "payButton.redirecting": "Prebieha presmerovanie ...",
        storeDetails: "Ulo\u017ei\u0165 pre moju \u010fal\u0161iu platbu",
        "creditCard.holderName": "Meno na karte",
        "creditCard.holderName.placeholder": "J. Nov\xe1k",
        "creditCard.holderName.invalid":
          "Neplatn\xe9 meno dr\u017eite\u013ea karty",
        "creditCard.numberField.title": "\u010c\xedslo karty",
        "creditCard.numberField.placeholder": "1234 5678 9012 3456",
        "creditCard.expiryDateField.title": "Koniec platnosti",
        "creditCard.expiryDateField.placeholder": "MM/RR",
        "creditCard.expiryDateField.month": "Mesiac",
        "creditCard.expiryDateField.month.placeholder": "MM",
        "creditCard.expiryDateField.year.placeholder": "RR",
        "creditCard.expiryDateField.year": "Rok",
        "creditCard.cvcField.title": "CVC/CVV",
        "creditCard.cvcField.placeholder": "123",
        "creditCard.storeDetailsButton":
          "Zapam\xe4ta\u0165 na bud\xface pou\u017eitie",
        "creditCard.cvcField.placeholder.4digits": "4 \u010d\xedslice",
        "creditCard.cvcField.placeholder.3digits": "3 \u010d\xedslice",
        "creditCard.taxNumber.placeholder": "RRMMDD/0123456789",
        installments: "Po\u010det spl\xe1tok",
        installmentOption: "% {times} x % {partialValue}",
        installmentOptionMonths: "%{times} mesiace/-ov",
        "installments.oneTime": "Jednorazov\xe1 platba",
        "installments.installments": "Platba po spl\xe1tkach",
        "installments.revolving": "Revolvingov\xe1 platba",
        "sepaDirectDebit.ibanField.invalid":
          "Neplatn\xe9 \u010d\xedslo \xfa\u010dtu",
        "sepaDirectDebit.nameField.placeholder": "J. Nov\xe1k",
        "sepa.ownerName": "Meno dr\u017eite\u013ea",
        "sepa.ibanNumber": "\u010c\xedslo \xfa\u010dtu (IBAN)",
        "error.title": "Chyba",
        "error.subtitle.redirect": "Nepodarilo sa presmerova\u0165",
        "error.subtitle.payment": "Platba zlyhala",
        "error.subtitle.refused": "Platba bola zamietnut\xe1",
        "error.message.unknown": "Vyskytla sa nezn\xe1ma chyba",
        "idealIssuer.selectField.title": "Banka",
        "idealIssuer.selectField.placeholder": "Vyberte svoju banku",
        "creditCard.success": "Platba bola \xfaspe\u0161n\xe1",
        loading: "Na\u010d\xedtava sa\u2026",
        continue: "Pokra\u010dova\u0165",
        continueTo: "Pokra\u010dova\u0165 do",
        "wechatpay.timetopay": "Na zaplatenie m\xe1te %@",
        "wechatpay.scanqrcode": "Naskenujte QR k\xf3d",
        personalDetails: "Osobn\xe9 \xfadaje",
        companyDetails: "\xdadaje o spolo\u010dnosti",
        "companyDetails.name": "N\xe1zov spolo\u010dnosti",
        "companyDetails.registrationNumber":
          "Identifika\u010dn\xe9 \u010d\xedslo",
        socialSecurityNumber: "Rodn\xe9 \u010d\xedslo",
        firstName: "Krstn\xe9 meno",
        infix: "Predpona k priezvisku (ak existuje)",
        lastName: "Priezvisko",
        mobileNumber: "Mobiln\xe9 telef\xf3nne \u010d\xedslo",
        "mobileNumber.invalid": "Neplatn\xe9 \u010d\xedslo na mobil",
        city: "Mesto",
        postalCode: "PS\u010c",
        countryCode: "K\xf3d krajiny",
        telephoneNumber: "Telef\xf3nne \u010d\xedslo",
        dateOfBirth: "D\xe1tum narodenia",
        shopperEmail: "E-mailov\xe1 adresa",
        gender: "Pohlavie",
        male: "Mu\u017e",
        female: "\u017dena",
        billingAddress: "Faktura\u010dn\xe1 adresa",
        street: "Ulica",
        stateOrProvince: "Kraj",
        country: "Krajina",
        houseNumberOrName: "\u010c\xedslo domu",
        separateDeliveryAddress: "Zadajte samostatn\xfa dodaciu adresu",
        deliveryAddress: "Dodacia adresa",
        zipCode: "PS\u010c",
        apartmentSuite: "Byt/apartm\xe1n",
        provinceOrTerritory: "Okres alebo \xfazemie",
        cityTown: "Mesto/obec",
        address: "Adresa",
        state: "\u0160t\xe1t",
        "field.title.optional": "(volite\u013en\xe9)",
        "creditCard.cvcField.title.optional": "CVC/CVV (volite\u013en\xe9)",
        "issuerList.wallet.placeholder": "Vyberte si pe\u0148a\u017eenku",
        privacyPolicy: "Z\xe1sady ochrany osobn\xfdch \xfadajov",
        "afterPay.agreement": "S\xfahlas\xedm s %@ AfterPay",
        paymentConditions: "podmienkami platby",
        openApp: "Otvorte aplik\xe1ciu",
        "voucher.readInstructions": "Pre\u010d\xedtajte si pokyny",
        "voucher.introduction":
          "\u010eakujeme v\xe1m za n\xe1kup; na dokon\u010denie platby pou\u017eite nasleduj\xfaci kup\xf3n.",
        "voucher.expirationDate": "D\xe1tum vypr\u0161ania platnosti",
        "voucher.alternativeReference": "Alternat\xedvny odkaz",
        "dragonpay.voucher.non.bank.selectField.placeholder":
          "Vyberte si poskytovate\u013ea",
        "dragonpay.voucher.bank.selectField.placeholder": "Vyberte svoju banku",
        "voucher.paymentReferenceLabel": "Platobn\xe1 referencia",
        "voucher.surcharge": "Vr\xe1tane poplatku vo v\xfd\u0161ke %@",
        "voucher.introduction.doku":
          "\u010eakujeme v\xe1m za n\xe1kup. Na dokon\u010denie platby pou\u017eite nasleduj\xface inform\xe1cie.",
        "voucher.shopperName": "Meno kupuj\xfaceho",
        "voucher.merchantName": "Predajca",
        "voucher.introduction.econtext":
          "\u010eakujeme v\xe1m za n\xe1kup. Na dokon\u010denie platby pou\u017eite nasleduj\xface inform\xe1cie.",
        "voucher.telephoneNumber": "Telef\xf3nne \u010d\xedslo",
        "voucher.shopperReference": "Referencia kupuj\xfaceho",
        "voucher.collectionInstitutionNumber":
          "\u010c\xedslo inkasnej in\u0161tit\xfacie",
        "voucher.econtext.telephoneNumber.invalid":
          "Telef\xf3nne \u010d\xedslo mus\xed ma\u0165 10 alebo 11 \u010d\xedslic",
        "boletobancario.btnLabel": "Generova\u0165 Boleto",
        "boleto.sendCopyToEmail": "Zasla\u0165 k\xf3piu na m\xf4j e-mail",
        "button.copy": "Kop\xedrova\u0165",
        "button.download": "Stiahnu\u0165",
        "creditCard.storedCard.description.ariaLabel":
          "Platnos\u0165 ulo\u017eenej karty kon\u010d\xed o %@",
        "voucher.entity": "Subjekt",
        donateButton: "Prispie\u0165",
        notNowButton: "Teraz nie",
        thanksForYourSupport: "\u010eakujeme za podporu!",
        preauthorizeWith: "Predbe\u017ene autorizova\u0165 pomocou",
        confirmPreauthorization:
          "Potvr\u010fte predbe\u017en\xfa autoriz\xe1ciu",
        confirmPurchase: "Potvr\u010fte n\xe1kup",
        applyGiftcard: "Uplatni\u0165",
        giftcardBalance: "Zostatok na dar\u010dekovej karte",
        deductedBalance: "Zn\xed\u017een\xfd zostatok",
        "creditCard.pin.title": "K\xf3d PIN",
        "creditCard.encryptedPassword.label":
          "Prv\xe9 2 \u010d\xedslice hesla karty",
        "creditCard.encryptedPassword.placeholder": "12",
        "creditCard.encryptedPassword.invalid": "Neplan\xe9 heslo",
        "creditCard.taxNumber.label":
          "D\xe1tum narodenia dr\u017eite\u013ea karty (RRRMMDD) alebo identifika\u010dn\xe9 \u010d\xedslo organiz\xe1cie (10 \u010d\xedslic)",
        "creditCard.taxNumber.labelAlt":
          "Identifika\u010dn\xe9 \u010d\xedslo organiz\xe1cie (10 \u010d\xedslic)",
        "creditCard.taxNumber.invalid":
          "Neplatn\xfd d\xe1tum narodenia dr\u017eite\u013ea karty alebo identifika\u010dn\xe9 \u010d\xedslo organiz\xe1cie",
        "storedPaymentMethod.disable.button": "Odstr\xe1ni\u0165",
        "storedPaymentMethod.disable.confirmation":
          "Odstr\xe1ni\u0165 ulo\u017een\xfd sp\xf4sob platby",
        "storedPaymentMethod.disable.confirmButton":
          "\xc1no, odstr\xe1ni\u0165",
        "storedPaymentMethod.disable.cancelButton": "Zru\u0161i\u0165",
        "ach.bankAccount": "Bankov\xfd \xfa\u010det",
        "ach.accountHolderNameField.title": "Meno majite\u013ea \xfa\u010dtu",
        "ach.accountHolderNameField.placeholder": "J. Nov\xe1k",
        "ach.accountHolderNameField.invalid":
          "Neplatn\xe9 meno majite\u013ea \xfa\u010dtu",
        "ach.accountNumberField.title": "\u010c\xedslo \xfa\u010dtu",
        "ach.accountNumberField.invalid":
          "Neplatn\xe9 \u010d\xedslo \xfa\u010dtu",
        "ach.accountLocationField.title": "Smerovacie \u010d\xedslo ABA",
        "ach.accountLocationField.invalid":
          "Neplatn\xe9 smerovacie \u010d\xedslo ABA",
        "select.state": "Vyberte kraj",
        "select.stateOrProvince": "Vyberte kraj alebo okres",
        "select.provinceOrTerritory": "Vyberte okres alebo \xfazemie",
        "select.country": "Vyberte krajinu",
        "select.noOptionsFound":
          "Neboli n\xe1jden\xe9 \u017eiadne mo\u017enosti",
        "select.filter.placeholder": "Vyh\u013ead\xe1vanie...",
        "telephoneNumber.invalid": "Neplatn\xe9 telef\xf3nne \u010d\xedslo",
        qrCodeOrApp: "alebo",
        "paypal.processingPayment": "Platba sa sprac\xfava.",
        generateQRCode: "Generova\u0165 QR k\xf3d",
        "await.waitForConfirmation": "\u010cak\xe1 sa na potvrdenie",
        "mbway.confirmPayment":
          "Potvr\u010fte svoju platbu v aplik\xe1cii MB WAY",
        "shopperEmail.invalid": "Neplatn\xe1 emailov\xe1 adresa",
        "dateOfBirth.format": "DD/MM/RRRR",
        "dateOfBirth.invalid": "Mus\xedte ma\u0165 aspo\u0148 18 rokov",
        "blik.confirmPayment":
          "Otvorte svoju bankov\xfa aplik\xe1ciu a potvr\u010fte platbu.",
        "blik.invalid": "Zadajte 6 \u010d\xedslic",
        "blik.code": "6-cifern\xfd k\xf3d",
        "blik.help": "Z\xedskajte k\xf3d zo svojej bankovej aplik\xe1cie.",
        "swish.pendingMessage":
          "Po nasn\xedman\xed m\xf4\u017ee spracovanie trva\u0165 a\u017e 10 min\xfat. Pokus o op\xe4tovn\xe9 zaplatenie v tejto lehote m\xf4\u017ee vies\u0165 k nieko\u013ek\xfdm poplatkom.",
        "error.va.gen.01": "Ne\xfapln\xe9 pole",
        "error.va.gen.02": "Pole je neplatn\xe9",
        "error.va.sf-cc-num.01": "Neplatn\xe9 \u010d\xedslo karty",
        "error.va.sf-cc-num.03": "Zadali ste nepodporovan\xfa kartu",
        "error.va.sf-cc-dat.01": "Karta je pr\xedli\u0161 star\xe1",
        "error.va.sf-cc-dat.02":
          "D\xe1tum je pr\xedli\u0161 \u010faleko v bud\xfacnosti",
        "error.giftcard.no-balance":
          "T\xe1to dar\u010dekov\xe1 karta m\xe1 nulov\xfd zostatok",
        "error.giftcard.card-error":
          "V na\u0161ich z\xe1znamoch nem\xe1me \u017eiadnu dar\u010dekov\xfa kartu s t\xfdmto \u010d\xedslom",
        "error.giftcard.currency-error":
          "Dar\u010dekov\xe9 karty s\xfa platn\xe9 iba v mene, v ktorej boli vydan\xe9",
        "amazonpay.signout": "Odhl\xe1si\u0165 sa z Amazonu",
        "amazonpay.changePaymentDetails": "Zmeni\u0165 podrobnosti o platbe",
        "partialPayment.warning":
          "Ak chcete zaplati\u0165 zostatok, vyberte in\xfd sp\xf4sob platby",
        "partialPayment.remainingBalance":
          "Zvy\u0161n\xfd zostatok bude %{amount}",
        "bankTransfer.beneficiary": "Pr\xedjemca",
        "bankTransfer.iban": "IBAN",
        "bankTransfer.bic": "BIC",
        "bankTransfer.reference": "Referencie",
        "bankTransfer.introduction":
          "Pokra\u010dujte vo vytv\xe1ran\xed novej platby bankov\xfdm prevodom. T\xfato platbu m\xf4\u017eete dokon\u010di\u0165 pomocou inform\xe1ci\xed na nasleduj\xfacej obrazovke.",
        "bankTransfer.instructions":
          "\u010eakujeme v\xe1m za n\xe1kup. Na dokon\u010denie platby pou\u017eite nasleduj\xface inform\xe1cie.",
        "bacs.accountHolderName":
          "Meno majite\u013ea bankov\xe9ho \xfa\u010dtu",
        "bacs.accountHolderName.invalid":
          "Neplatn\xe9 meno majite\u013ea bankov\xe9ho \xfa\u010dtu",
        "bacs.accountNumber": "\u010c\xedslo bankov\xe9ho \xfa\u010dtu",
        "bacs.accountNumber.invalid":
          "Neplatn\xe9 \u010d\xedslo bankov\xe9ho \xfa\u010dtu",
        "bacs.bankLocationId": "Variabiln\xfd symbol",
        "bacs.bankLocationId.invalid": "Neplatn\xfd variabiln\xfd symbol",
        "bacs.consent.amount":
          "S\xfahlas\xedm s t\xfdm, \u017ee ni\u017e\u0161ie uveden\xe1 \u010diastka bude odp\xedsan\xe1 z m\xf4jho bankov\xe9ho \xfa\u010dtu.",
        "bacs.consent.account":
          "Potvrdzujem, \u017ee \xfa\u010det je na moje meno a som jedin\xfd podpisovate\u013e, ktor\xfd je povinn\xfd autorizova\u0165 inkaso v tomto \xfa\u010dte.",
        edit: "Upravi\u0165",
        "bacs.confirm": "Potvrdi\u0165 a zaplati\u0165",
        "bacs.result.introduction":
          "Stiahnite si pokyny k inkasu (DDI/Mand\xe1t)",
        "download.pdf": "Stiahnu\u0165 vo form\xe1te PDF",
        "creditCard.encryptedCardNumber.aria.iframeTitle":
          "Iframe pre zabezpe\u010den\xe9 \u010d\xedslo karty",
        "creditCard.encryptedCardNumber.aria.label":
          "Pole pre \u010d\xedslo karty",
        "creditCard.encryptedExpiryDate.aria.iframeTitle":
          "Iframe pre de\u0148 konca platnosti zabezpe\u010denej karty",
        "creditCard.encryptedExpiryDate.aria.label":
          "Pole d\u0148a konca platnosti",
        "creditCard.encryptedExpiryMonth.aria.iframeTitle":
          "Iframe pre mesiac konca platnosti zabezpe\u010denej karty",
        "creditCard.encryptedExpiryMonth.aria.label":
          "Pole mesiaca konca platnosti",
        "creditCard.encryptedExpiryYear.aria.iframeTitle":
          "Iframe pre rok konca platnosti zabezpe\u010denej karty",
        "creditCard.encryptedExpiryYear.aria.label":
          "Pole roka konca platnosti",
        "creditCard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe pre bezpe\u010dnostn\xfd k\xf3d zabezpe\u010denej karty",
        "creditCard.encryptedSecurityCode.aria.label":
          "Pole bezpe\u010dnostn\xe9ho k\xf3du",
        "giftcard.encryptedCardNumber.aria.iframeTitle":
          "Iframe pre \u010d\xedslo zabezpe\u010denej dar\u010dekovej karty",
        "giftcard.encryptedCardNumber.aria.label":
          "Pole pre \u010d\xedslo dar\u010dekovej karty",
        "giftcard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe pre bezpe\u010dnostn\xfd k\xf3d zabezpe\u010denej dar\u010dekovej karty",
        "giftcard.encryptedSecurityCode.aria.label":
          "Pole bezpe\u010dnostn\xe9ho k\xf3du dar\u010dekovej karty",
        giftcardTransactionLimit:
          "Pre transakciu s touto dar\u010dekovou kartou je povolen\xe9 maximum %{amount}",
        "ach.encryptedBankAccountNumber.aria.iframeTitle":
          "Iframe pre \u010d\xedslo zabezpe\u010den\xe9ho bankov\xe9ho \xfa\u010dtu",
        "ach.encryptedBankAccountNumber.aria.label":
          "Pole bankov\xe9ho \xfa\u010dtu",
        "ach.encryptedBankLocationId.aria.iframeTitle":
          "Iframe pre zabezpe\u010den\xe9 smerovacie \u010d\xedslo banky",
        "ach.encryptedBankLocationId.aria.label":
          "Pole smerovacieho \u010d\xedsla banky",
      },
    }),
    dp = Object.freeze({
      __proto__: null,
      default: {
        payButton: "Pla\u010dilo",
        "payButton.redirecting": "Preusmerjanje ...",
        storeDetails: "Shrani za moje naslednje pla\u010dilo",
        "creditCard.holderName": "Ime na kartici",
        "creditCard.holderName.placeholder": "J. Novak",
        "creditCard.holderName.invalid": "Neveljavno ime imetnika kartice",
        "creditCard.numberField.title": "\u0160tevilka kartice",
        "creditCard.numberField.placeholder": "1234 5678 9012 3456",
        "creditCard.expiryDateField.title": "Datum veljavnosti",
        "creditCard.expiryDateField.placeholder": "MM/LL",
        "creditCard.expiryDateField.month": "Mesec",
        "creditCard.expiryDateField.month.placeholder": "MM",
        "creditCard.expiryDateField.year.placeholder": "LL",
        "creditCard.expiryDateField.year": "Leto",
        "creditCard.cvcField.title": "CVC/CVV",
        "creditCard.cvcField.placeholder": "123",
        "creditCard.storeDetailsButton": "Zapomni si za prihodnji\u010d",
        "creditCard.cvcField.placeholder.4digits": "4 \u0161tevke",
        "creditCard.cvcField.placeholder.3digits": "3 \u0161tevke",
        "creditCard.taxNumber.placeholder": "LLMMDD / 0123456789",
        installments: "\u0160tevilo obrokov",
        installmentOption: "%{times} \xd7 %{partialValue}",
        installmentOptionMonths: "\u0160t. mesecev: %{times}",
        "installments.oneTime": "Enkratno pla\u010dilo",
        "installments.installments": "Obro\u010dno pla\u010dilo",
        "installments.revolving": "Revolving pla\u010dilo",
        "sepaDirectDebit.ibanField.invalid":
          "Neveljavna \u0161tevilka ra\u010duna",
        "sepaDirectDebit.nameField.placeholder": "J. Novak",
        "sepa.ownerName": "Ime imetnika",
        "sepa.ibanNumber": "\u0160tevilka ra\u010duna (IBAN)",
        "error.title": "Napaka",
        "error.subtitle.redirect": "Preusmeritev ni uspela",
        "error.subtitle.payment": "Pla\u010dilo ni uspelo",
        "error.subtitle.refused": "Pla\u010dilo je bilo zavrnjeno",
        "error.message.unknown": "Pri\u0161lo je do neznane napake",
        "idealIssuer.selectField.title": "Banka",
        "idealIssuer.selectField.placeholder": "Izberite svojo banko",
        "creditCard.success": "Pla\u010dilo je bilo uspe\u0161no",
        loading: "Nalaganje \u2026",
        continue: "Nadaljuj",
        continueTo: "Nadaljujte na",
        "wechatpay.timetopay": "Pla\u010dati morate %@",
        "wechatpay.scanqrcode": "Opti\u010dno preberite kodo QR",
        personalDetails: "Osebni podatki",
        companyDetails: "Podrobnosti o podjetju",
        "companyDetails.name": "Ime podjetja",
        "companyDetails.registrationNumber":
          "Mati\u010dna \u0161tevilka podjetja",
        socialSecurityNumber: "\u0160tevilka socialnega zavarovanja",
        firstName: "Ime",
        infix: "Naziv",
        lastName: "Priimek",
        mobileNumber: "\u0160tevilka mobilnega telefona",
        "mobileNumber.invalid": "Neveljavna \u0161tevilka mobilnega telefona",
        city: "Mesto",
        postalCode: "Po\u0161tna \u0161tevilka",
        countryCode: "Koda dr\u017eave",
        telephoneNumber: "Telefonska \u0161tevilka",
        dateOfBirth: "Datum rojstva",
        shopperEmail: "Elektronski naslov",
        gender: "Spol",
        male: "Mo\u0161ki",
        female: "\u017denski",
        billingAddress: "Naslov za ra\u010dun",
        street: "Ulica",
        stateOrProvince: "Dr\u017eava ali provinca",
        country: "Dr\u017eava",
        houseNumberOrName: "Hi\u0161na \u0161tevilka",
        separateDeliveryAddress: "Navedite lo\u010den naslov za dostavo",
        deliveryAddress: "Naslov za dostavo",
        zipCode: "Po\u0161tna \u0161tevilka",
        apartmentSuite: "\u0160t. apartmaja/stanovanja",
        provinceOrTerritory: "Obmo\u010dje ali ozemlje",
        cityTown: "Mesto",
        address: "Naslov",
        state: "Dr\u017eava",
        "field.title.optional": "(izbirno)",
        "creditCard.cvcField.title.optional": "CVC/CVV (neobvezno)",
        "issuerList.wallet.placeholder": "Izberite svojo denarnico",
        privacyPolicy: "Pravilnik o zasebnosti",
        "afterPay.agreement": "Strinjam se s %@ ponudnika AfterPay",
        paymentConditions: "pla\u010dilnimi pogoji",
        openApp: "Odprite aplikacijo",
        "voucher.readInstructions": "Preberite navodila",
        "voucher.introduction":
          "Zahvaljujemo se vam za nakup. Za dokon\u010danje pla\u010dila uporabite naslednji kupon.",
        "voucher.expirationDate": "Datum poteka veljavnosti",
        "voucher.alternativeReference": "Druga referen\u010dna \u0161tevilka",
        "dragonpay.voucher.non.bank.selectField.placeholder":
          "Izberite svojega ponudnika",
        "dragonpay.voucher.bank.selectField.placeholder":
          "Izberite svojo banko",
        "voucher.paymentReferenceLabel":
          "Referen\u010dna \u0161tevilka pla\u010dila",
        "voucher.surcharge": "Vklj. %@ dopla\u010dila",
        "voucher.introduction.doku":
          "Zahvaljujemo se vam za nakup. Za dokon\u010danje pla\u010dila uporabite naslednji kupon.",
        "voucher.shopperName": "Ime kupca",
        "voucher.merchantName": "Trgovec",
        "voucher.introduction.econtext":
          "Zahvaljujemo se vam za nakup. Za dokon\u010danje pla\u010dila uporabite naslednji kupon.",
        "voucher.telephoneNumber": "Telefonska \u0161tevilka",
        "voucher.shopperReference": "Referen\u010dna \u0161tevilka kupca",
        "voucher.collectionInstitutionNumber":
          "\u0160tevilka ustanove za zbiranje",
        "voucher.econtext.telephoneNumber.invalid":
          "Telefonska \u0161tevilka mora vsebovati 10 ali 11 \u0161tevk",
        "boletobancario.btnLabel": "Ustvari Boleto",
        "boleto.sendCopyToEmail":
          "Po\u0161lji kopijo na moj elektronski naslov",
        "button.copy": "Kopiraj",
        "button.download": "Prenesi",
        "creditCard.storedCard.description.ariaLabel":
          "Shranjena kartica se kon\u010da na %@",
        "voucher.entity": "Entiteta",
        donateButton: "Donirajte",
        notNowButton: "Ne zdaj",
        thanksForYourSupport: "Zahvaljujemo se vam za podporo!",
        preauthorizeWith: "Predhodna odobritev s/z:",
        confirmPreauthorization: "Potrdi predhodno odobritev",
        confirmPurchase: "Potrditev nakupa",
        applyGiftcard: "Unov\u010di",
        giftcardBalance: "Stanje na darilni kartici",
        deductedBalance: "Odbiti znesek",
        "creditCard.pin.title": "PIN",
        "creditCard.encryptedPassword.label":
          "Prvi dve \u0161tevki gesla za kartico",
        "creditCard.encryptedPassword.placeholder": "12",
        "creditCard.encryptedPassword.invalid": "Neveljavno geslo",
        "creditCard.taxNumber.label":
          "Datum rojstva imetnika kartice (LLMMDD) ali registracijska \u0161tevilka podjetja (10 \u0161tevk)",
        "creditCard.taxNumber.labelAlt":
          "Mati\u010dna \u0161tevilka podjetja (10 \u0161tevk)",
        "creditCard.taxNumber.invalid":
          "Neveljaven datum rojstva imetnika kartice ali mati\u010dna \u0161tevilka podjetja",
        "storedPaymentMethod.disable.button": "Odstrani",
        "storedPaymentMethod.disable.confirmation":
          "Odstrani shranjen na\u010din pla\u010dila",
        "storedPaymentMethod.disable.confirmButton": "Da, odstrani",
        "storedPaymentMethod.disable.cancelButton": "Prekli\u010di",
        "ach.bankAccount": "Ban\u010dni ra\u010dun",
        "ach.accountHolderNameField.title": "Ime imetnika ra\u010duna",
        "ach.accountHolderNameField.placeholder": "J. Novak",
        "ach.accountHolderNameField.invalid":
          "Neveljavno ime imetnika ra\u010duna",
        "ach.accountNumberField.title": "\u0160tevilka ra\u010duna",
        "ach.accountNumberField.invalid":
          "Neveljavna \u0161tevilka ra\u010duna",
        "ach.accountLocationField.title": "Koda banke ABA",
        "ach.accountLocationField.invalid": "Neveljavna koda banke ABA",
        "select.state": "Izberite dr\u017eavo",
        "select.stateOrProvince": "Izberite dr\u017eavo ali provinco",
        "select.provinceOrTerritory": "Izberite obmo\u010dje ali ozemlje",
        "select.country": "Izberite dr\u017eavo",
        "select.noOptionsFound": "Ni najdenih mo\u017enosti",
        "select.filter.placeholder": "Iskanje ...",
        "telephoneNumber.invalid": "Neveljavna telefonska \u0161tevilka",
        qrCodeOrApp: "ali",
        "paypal.processingPayment": "Obdelava pla\u010dila ...",
        generateQRCode: "Ustvari kodo QR",
        "await.waitForConfirmation": "\u010cakanje na potrditev",
        "mbway.confirmPayment":
          "Potrdite svoje pla\u010dilo v aplikaciji MB WAY",
        "shopperEmail.invalid": "Neveljaven elektronski naslov",
        "dateOfBirth.format": "DD/MM/LLLL",
        "dateOfBirth.invalid": "Imeti morate najmanj 18 let",
        "blik.confirmPayment":
          "Za potrditev pla\u010dila odprite svojo ban\u010dno aplikacijo.",
        "blik.invalid": "Vnesite 6 \u0161tevilk",
        "blik.code": "6-mestna koda",
        "blik.help": "Pridobite kodo iz ban\u010dne aplikacije.",
        "swish.pendingMessage":
          "Ko opti\u010dno preberete, lahko \u010dakanje traja do 10 minut. Poskus ponovnega pla\u010dila v tem \u010dasu lahko povzro\u010di ve\u010d odtegljajev.",
        "error.va.gen.01": "Nepopolno polje",
        "error.va.gen.02": "Polje ni veljavno",
        "error.va.sf-cc-num.01": "Neveljavna \u0161tevilka kartice",
        "error.va.sf-cc-num.03": "Vnesena je nepodprta kartica",
        "error.va.sf-cc-dat.01": "Kartica je prestara",
        "error.va.sf-cc-dat.02": "Datum je predale\u010d v prihodnosti",
        "error.giftcard.no-balance": "Na tej darilni kartici ni sredstev",
        "error.giftcard.card-error":
          "V na\u0161i evidenci nimamo darilne kartice s to \u0161tevilko",
        "error.giftcard.currency-error":
          "Darilne kartice so veljavne samo za valuto, za katero so bile izdane",
        "amazonpay.signout": "Odjava iz Amazona",
        "amazonpay.changePaymentDetails": "Sprememba podrobnosti pla\u010dila",
        "partialPayment.warning":
          "Izberite drugo vrsto pla\u010dila za pla\u010dilo ostanka",
        "partialPayment.remainingBalance": "Preostalo stanje bo %{amount}",
        "bankTransfer.beneficiary": "Upravi\u010denec",
        "bankTransfer.iban": "IBAN",
        "bankTransfer.bic": "BIC",
        "bankTransfer.reference": "Referenca",
        "bankTransfer.introduction":
          "Nadaljujte ustvarjanje novega pla\u010dila z ban\u010dnim nakazilom. Za dokon\u010danje tega pla\u010dila lahko uporabite podatke na naslednjem zaslonu.",
        "bankTransfer.instructions":
          "Zahvaljujemo se vam za nakup. Za dokon\u010danje pla\u010dila uporabite naslednji kupon.",
        "bacs.accountHolderName": "Ime imetnika ban\u010dnega ra\u010duna",
        "bacs.accountHolderName.invalid": "Neveljavno ime imetnika ra\u010duna",
        "bacs.accountNumber": "\u0160tevilka ban\u010dnega ra\u010duna",
        "bacs.accountNumber.invalid":
          "Neveljavna \u0161tevilka ban\u010dnega ra\u010duna",
        "bacs.bankLocationId": "\u0160tevilka banke",
        "bacs.bankLocationId.invalid": "Neveljavna \u0161tevilka banke",
        "bacs.consent.amount":
          "Sogla\u0161am s tem, da bo zgornji znesek odtegnjen z mojega ban\u010dnega ra\u010duna.",
        "bacs.consent.account":
          "Potrjujem, da je ra\u010dun ustvarjen v mojem imenu in sem edini podpisnik za odobritev neposredne bremenitve za ta ra\u010dun.",
        edit: "Uredi",
        "bacs.confirm": "Potrdi in pla\u010daj",
        "bacs.result.introduction":
          "Prenesite navodila za neposredno bremenitev (DDI/mandat)",
        "download.pdf": "Prenos datoteke PDF",
        "creditCard.encryptedCardNumber.aria.iframeTitle":
          "Iframe za zavarovano \u0161tevilko kartice",
        "creditCard.encryptedCardNumber.aria.label":
          "Polje s \u0161tevilko kartice",
        "creditCard.encryptedExpiryDate.aria.iframeTitle":
          "Iframe za zavarovan potek veljavnosti kartice",
        "creditCard.encryptedExpiryDate.aria.label":
          "Polje z datumom poteka veljavnosti",
        "creditCard.encryptedExpiryMonth.aria.iframeTitle":
          "Iframe za zavarovan mesec poteka veljavnosti kartice",
        "creditCard.encryptedExpiryMonth.aria.label":
          "Polje z mesecem poteka veljavnosti",
        "creditCard.encryptedExpiryYear.aria.iframeTitle":
          "Iframe za zavarovano leto poteka veljavnosti kartice",
        "creditCard.encryptedExpiryYear.aria.label":
          "Polje z letom poteka veljavnosti",
        "creditCard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe za zavarovano varnostno kodo kartice",
        "creditCard.encryptedSecurityCode.aria.label": "Polje z varnostno kodo",
        "giftcard.encryptedCardNumber.aria.iframeTitle":
          "Iframe za zavarovano \u0161tevilko darilne kartice",
        "giftcard.encryptedCardNumber.aria.label":
          "Polje s \u0161tevilko darilne kartice",
        "giftcard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe za zavarovano varnostno kodo darilne kartice",
        "giftcard.encryptedSecurityCode.aria.label":
          "Polje z varnostno kodo darilne kartice",
        giftcardTransactionLimit:
          "Za posamezno transakcijo na tej darilni kartici je dovoljeno najve\u010d %{amount}",
        "ach.encryptedBankAccountNumber.aria.iframeTitle":
          "Iframe za zavarovano \u0161tevilko ban\u010dnega ra\u010duna",
        "ach.encryptedBankAccountNumber.aria.label":
          "Polje z ban\u010dnim ra\u010dunom",
        "ach.encryptedBankLocationId.aria.iframeTitle":
          "Iframe za zavarovano kodo banke",
        "ach.encryptedBankLocationId.aria.label": "Polje s kodo banke",
      },
    }),
    cp = Object.freeze({
      __proto__: null,
      default: {
        payButton: "Betala",
        "payButton.redirecting": "Omdirigerar\u2026",
        storeDetails: "Spara till min n\xe4sta betalning",
        "creditCard.holderName": "Namn p\xe5 kort",
        "creditCard.holderName.placeholder": "J. Smith",
        "creditCard.holderName.invalid": "Kortinnehavarens namn \xe4r ogiltigt",
        "creditCard.numberField.title": "Kortnummer",
        "creditCard.numberField.placeholder": "1234 5678 9012 3456",
        "creditCard.expiryDateField.title": "Utg\xe5ngsdatum",
        "creditCard.expiryDateField.placeholder": "MM/AA",
        "creditCard.expiryDateField.month": "M\xe5nad",
        "creditCard.expiryDateField.month.placeholder": "MM",
        "creditCard.expiryDateField.year.placeholder": "\xc5\xc5",
        "creditCard.expiryDateField.year": "\xc5r",
        "creditCard.cvcField.title": "CVC / CVV",
        "creditCard.cvcField.placeholder": "123",
        "creditCard.storeDetailsButton": "Kom ih\xe5g till n\xe4sta g\xe5ng",
        "creditCard.cvcField.placeholder.4digits": "4 siffror",
        "creditCard.cvcField.placeholder.3digits": "3 siffror",
        "creditCard.taxNumber.placeholder": "\xc5\xc5MMDD / 0123456789",
        installments: "Number of installments",
        installmentOption: "%{times} x %{partialValue}",
        installmentOptionMonths: "%{times} m\xe5nader",
        "installments.oneTime": "Eng\xe5ngsbetalning",
        "installments.installments": "Delbetalningar",
        "installments.revolving": "Uppdelad betalning",
        "sepaDirectDebit.ibanField.invalid": "Ogiltigt kontonummer",
        "sepaDirectDebit.nameField.placeholder": "J. Johansson",
        "sepa.ownerName": "K\xe4nt av kontoinnehavaren",
        "sepa.ibanNumber": "Kontonummer (IBAN)",
        "error.title": "Fel",
        "error.subtitle.redirect": "Omdirigering misslyckades",
        "error.subtitle.payment": "Betalning misslyckades",
        "error.subtitle.refused": "Betalning avvisad",
        "error.message.unknown": "Ett ok\xe4nt fel uppstod",
        "idealIssuer.selectField.title": "Bank",
        "idealIssuer.selectField.placeholder": "V\xe4lj din bank",
        "creditCard.success": "Betalning lyckades",
        loading: "Laddar\u2026",
        continue: "Forts\xe4tt",
        continueTo: "Forts\xe4tt till",
        "wechatpay.timetopay": "Du har %@ att betala",
        "wechatpay.scanqrcode": "Skanna QR-kod",
        personalDetails: "Personuppgifter",
        companyDetails: "F\xf6retagsinformation",
        "companyDetails.name": "F\xf6retagsnamn",
        "companyDetails.registrationNumber": "Registreringsnummer",
        socialSecurityNumber: "Personnummer",
        firstName: "F\xf6rnamn",
        infix: "Prefix",
        lastName: "Efternamn",
        mobileNumber: "Mobilnummer",
        "mobileNumber.invalid": "Ogiltigt mobilnummer",
        city: "Stad",
        postalCode: "Postnummer",
        countryCode: "Landskod",
        telephoneNumber: "Telefonnummer",
        dateOfBirth: "F\xf6delsedatum",
        shopperEmail: "E-postadress",
        gender: "K\xf6n",
        male: "Man",
        female: "Kvinna",
        billingAddress: "Faktureringsadress",
        street: "Gatuadress",
        stateOrProvince: "Delstat eller region",
        country: "Land",
        houseNumberOrName: "Husnummer",
        separateDeliveryAddress: "Ange en separat leveransadress",
        deliveryAddress: "Leveransadress",
        zipCode: "Postnummer",
        apartmentSuite: "L\xe4genhetsnummer",
        provinceOrTerritory: "Provins eller territorium",
        cityTown: "Ort",
        address: "Adress",
        state: "Delstat",
        "field.title.optional": "(valfritt)",
        "creditCard.cvcField.title.optional": "CVC/CVV (tillval)",
        "issuerList.wallet.placeholder": "V\xe4j din pl\xe5nbok",
        privacyPolicy: "Sekretesspolicy",
        "afterPay.agreement": "Jag godk\xe4nner AfterPays %@",
        paymentConditions: "betalvillkor",
        openApp: "\xd6ppna appen",
        "voucher.readInstructions": "L\xe4s instruktionerna",
        "voucher.introduction":
          "Tack f\xf6r ditt k\xf6p, v\xe4nligen anv\xe4nd f\xf6ljande kupong f\xf6r att slutf\xf6ra din betalning.",
        "voucher.expirationDate": "Utg\xe5ngsdatum",
        "voucher.alternativeReference": "Alternativ referens",
        "dragonpay.voucher.non.bank.selectField.placeholder":
          "V\xe4lj din leverant\xf6r",
        "dragonpay.voucher.bank.selectField.placeholder": "V\xe4lj din bank",
        "voucher.paymentReferenceLabel": "Betalreferens",
        "voucher.surcharge": "Inklusive %@ i avgift",
        "voucher.introduction.doku":
          "Tack f\xf6r ditt k\xf6p, v\xe4nligen anv\xe4nd f\xf6ljande information f\xf6r att slutf\xf6ra din betalning.",
        "voucher.shopperName": "Konsumentens namn",
        "voucher.merchantName": "Handlare",
        "voucher.introduction.econtext":
          "Tack f\xf6r ditt k\xf6p, v\xe4nligen anv\xe4nd f\xf6ljande information f\xf6r att slutf\xf6ra din betalning.",
        "voucher.telephoneNumber": "Telefonnummer",
        "voucher.shopperReference": "K\xf6parreferens",
        "voucher.collectionInstitutionNumber":
          "Nummer p\xe5 upph\xe4mtningsplats",
        "voucher.econtext.telephoneNumber.invalid":
          "Telefonnumret m\xe5ste inneh\xe5lla 10 eller 11 siffror",
        "boletobancario.btnLabel": "Generera Boleto",
        "boleto.sendCopyToEmail": "Skicka en kopia till min e-post",
        "button.copy": "Kopiera",
        "button.download": "Ladda ner",
        "creditCard.storedCard.description.ariaLabel":
          "Sparat kort slutar p\xe5 %@",
        "voucher.entity": "Enhet",
        donateButton: "Donera",
        notNowButton: "Inte nu",
        thanksForYourSupport: "Tack f\xf6r ditt st\xf6d!",
        preauthorizeWith: "F\xf6rauktorisera med",
        confirmPreauthorization: "Bekr\xe4fta f\xf6rauktorisering",
        confirmPurchase: "Bekr\xe4fta k\xf6p",
        applyGiftcard: "L\xf6s in",
        giftcardBalance: "Presentkortssaldo",
        deductedBalance: "Avdraget saldo",
        "creditCard.pin.title": "PIN-kod",
        "creditCard.encryptedPassword.label":
          "De tv\xe5 f\xf6rsta siffrorna i kortets l\xf6senord",
        "creditCard.encryptedPassword.placeholder": "12",
        "creditCard.encryptedPassword.invalid": "Ogiltigt l\xf6senord",
        "creditCard.taxNumber.label":
          "Kortinnehavarens f\xf6delsedatum (\xc5\xc5MMDD) eller f\xf6retagets organisationsnummer (10 siffror)",
        "creditCard.taxNumber.labelAlt":
          "F\xf6retagets organisationsnummer (10 siffror)",
        "creditCard.taxNumber.invalid":
          "Ogiltigt f\xf6delsedatum eller organisationsnummer",
        "storedPaymentMethod.disable.button": "Ta bort",
        "storedPaymentMethod.disable.confirmation":
          "Ta bort sparat betalningss\xe4tt",
        "storedPaymentMethod.disable.confirmButton": "Ja, ta bort",
        "storedPaymentMethod.disable.cancelButton": "Avbryt",
        "ach.bankAccount": "Bankkonto",
        "ach.accountHolderNameField.title": "Kontoinnehavarens namn",
        "ach.accountHolderNameField.placeholder": "A. Andersson",
        "ach.accountHolderNameField.invalid":
          "Kontoinnehavarens namn \xe4r ogiltigt",
        "ach.accountNumberField.title": "Kontonummer",
        "ach.accountNumberField.invalid": "Ogiltigt kontonummer",
        "ach.accountLocationField.title": "ABA-nummer",
        "ach.accountLocationField.invalid": "Ogiltigt ABA-nummer",
        "select.state": "V\xe4lj delstat",
        "select.stateOrProvince": "V\xe4lj delstat eller provins",
        "select.provinceOrTerritory": "V\xe4lj provins eller territorium",
        "select.country": "V\xe4lj land",
        "select.noOptionsFound": "Inga alternativ hittades",
        "select.filter.placeholder": "S\xf6k efter\u2026",
        "telephoneNumber.invalid": "Ogiltigt telefonnummer",
        qrCodeOrApp: "eller",
        "paypal.processingPayment": "Behandlar betalning \u2026",
        generateQRCode: "Generera QR-kod",
        "await.waitForConfirmation": "V\xe4ntar p\xe5 bekr\xe4ftelse",
        "mbway.confirmPayment": "Bekr\xe4fta din betalning i appen MB WAY",
        "shopperEmail.invalid": "Ogiltig e-postadress",
        "dateOfBirth.format": "DD/MM/\xc5\xc5\xc5\xc5",
        "dateOfBirth.invalid": "Du m\xe5ste vara minst 18 \xe5r",
        "blik.confirmPayment":
          "\xd6ppna din bankapp f\xf6r att bekr\xe4fta betalningen.",
        "blik.invalid": "Ange 6 siffror",
        "blik.code": "Sexsiffrig kod",
        "blik.help": "H\xe4mta koden fr\xe5n din bankapp.",
        "swish.pendingMessage":
          "N\xe4r du har skannat kan statusen vara v\xe4ntande i upp till tio minuter. Att f\xf6rs\xf6ka betala igen inom denna tid kan leda till flera debiteringar.",
        "error.va.gen.01": "Ofullst\xe4ndigt f\xe4lt",
        "error.va.gen.02": "F\xe4ltet ogiltigt",
        "error.va.sf-cc-num.01": "Ogiltigt kortnummer",
        "error.va.sf-cc-num.03": "Det angivna kortet st\xf6ds inte",
        "error.va.sf-cc-dat.01": "Kortet \xe4r f\xf6r gammalt",
        "error.va.sf-cc-dat.02":
          "Datumet ligger f\xf6r l\xe5ngt fram i framtiden",
        "error.giftcard.no-balance":
          "Saldot f\xf6r detta presentkort \xe4r noll",
        "error.giftcard.card-error":
          "Vi har inte registrerat n\xe5got presentkort med det numret",
        "error.giftcard.currency-error":
          "Presentkort \xe4r endast giltiga i den valuta som de utf\xe4rdades i",
        "amazonpay.signout": "Logga ut fr\xe5n Amazon",
        "amazonpay.changePaymentDetails": "\xc4ndra betalningsuppgifter",
        "partialPayment.warning":
          "V\xe4lj ett annat betalningss\xe4tt f\xf6r att betala det \xe5terst\xe5ende",
        "partialPayment.remainingBalance":
          "\xc5terst\xe5ende saldo blir %{amount}",
        "bankTransfer.beneficiary": "Mottagare",
        "bankTransfer.iban": "IBAN",
        "bankTransfer.bic": "BIC",
        "bankTransfer.reference": "referens",
        "bankTransfer.introduction":
          "Forts\xe4tt f\xf6r att skapa en ny bank\xf6verf\xf6ring. Du kan anv\xe4nda informationen p\xe5 f\xf6ljande sk\xe4rm f\xf6r att slutf\xf6ra denna betalning.",
        "bankTransfer.instructions":
          "Tack f\xf6r ditt k\xf6p! Anv\xe4nd f\xf6ljande information f\xf6r att slutf\xf6ra din betalning.",
        "bacs.accountHolderName": "Bankkontoinnehavarens namn",
        "bacs.accountHolderName.invalid":
          "Ogiltigt namn p\xe5 bankkontoinnehavare",
        "bacs.accountNumber": "Bankkontonummer",
        "bacs.accountNumber.invalid": "Ogiltigt bankkontonummer",
        "bacs.bankLocationId": "Clearingnummer",
        "bacs.bankLocationId.invalid": "Ogiltigt clearingnummer",
        "bacs.consent.amount":
          "Jag godk\xe4nner att ovanst\xe5ende belopp dras fr\xe5n mitt bankkonto.",
        "bacs.consent.account":
          "Jag bekr\xe4ftar att jag \xe4r kontoinnehavare och att jag \xe4r den enda person vars godk\xe4nnande kr\xe4vs f\xf6r att auktorisera autogiro fr\xe5n detta konto.",
        edit: "Redigera",
        "bacs.confirm": "Bekr\xe4fta och betala",
        "bacs.result.introduction":
          "Ladda ner din instruktion f\xf6r autogiro/direktdebitering (DDI / Mandate)",
        "download.pdf": "Ladda ner PDF",
        "creditCard.encryptedCardNumber.aria.iframeTitle":
          "Iframe f\xf6r s\xe4krat kortnummer",
        "creditCard.encryptedCardNumber.aria.label":
          "F\xe4lt f\xf6r kortnummer",
        "creditCard.encryptedExpiryDate.aria.iframeTitle":
          "Iframe f\xf6r s\xe4krat utg\xe5ngsdatum f\xf6r kort",
        "creditCard.encryptedExpiryDate.aria.label":
          "F\xe4lt f\xf6r utg\xe5ngsdatum",
        "creditCard.encryptedExpiryMonth.aria.iframeTitle":
          "Iframe f\xf6r s\xe4krad utg\xe5ngsm\xe5nad f\xf6r kort",
        "creditCard.encryptedExpiryMonth.aria.label":
          "F\xe4lt f\xf6r utg\xe5ngsm\xe5nad",
        "creditCard.encryptedExpiryYear.aria.iframeTitle":
          "Iframe f\xf6r s\xe4krat utg\xe5ngs\xe5r f\xf6r kort",
        "creditCard.encryptedExpiryYear.aria.label":
          "F\xe4lt f\xf6r utg\xe5ngs\xe5r",
        "creditCard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe f\xf6r s\xe4krad s\xe4kerhetskod f\xf6r kort",
        "creditCard.encryptedSecurityCode.aria.label":
          "F\xe4lt f\xf6r s\xe4kerhetskod",
        "giftcard.encryptedCardNumber.aria.iframeTitle":
          "Iframe f\xf6r s\xe4krat presentkortsnummer",
        "giftcard.encryptedCardNumber.aria.label":
          "F\xe4lt f\xf6r presentkortsnummer",
        "giftcard.encryptedSecurityCode.aria.iframeTitle":
          "Iframe f\xf6r s\xe4krad s\xe4kerhetskod f\xf6r presentkort",
        "giftcard.encryptedSecurityCode.aria.label":
          "F\xe4lt f\xf6r s\xe4kerhetskod f\xf6r presentkort",
        giftcardTransactionLimit:
          "Maximalt %{amount} per transaktion \xe4r till\xe5tet p\xe5 detta presentkort",
        "ach.encryptedBankAccountNumber.aria.iframeTitle":
          "Iframe f\xf6r s\xe4krat bankkontonummer",
        "ach.encryptedBankAccountNumber.aria.label":
          "F\xe4lt f\xf6r bankkontonummer",
        "ach.encryptedBankLocationId.aria.iframeTitle":
          "Iframe f\xf6r s\xe4krat clearingnummer",
        "ach.encryptedBankLocationId.aria.label":
          "F\xe4lt f\xf6r clearingnummer",
      },
    }),
    up = Object.freeze({
      __proto__: null,
      default: {
        payButton: "\u652f\u4ed8",
        "payButton.redirecting": "\u6b63\u5728\u91cd\u5b9a\u5411...",
        storeDetails:
          "\u4fdd\u5b58\u4ee5\u4fbf\u4e0b\u6b21\u652f\u4ed8\u4f7f\u7528",
        "creditCard.holderName": "\u5361\u7247\u4e0a\u7684\u59d3\u540d",
        "creditCard.holderName.placeholder": "J. Smith",
        "creditCard.holderName.invalid":
          "\u65e0\u6548\u7684\u6301\u5361\u4eba\u59d3\u540d",
        "creditCard.numberField.title": "\u5361\u53f7",
        "creditCard.numberField.placeholder": "1234 5678 9012 3456",
        "creditCard.expiryDateField.title": "\u6709\u6548\u671f",
        "creditCard.expiryDateField.placeholder": "\u6708\u6708/\u5e74\u5e74",
        "creditCard.expiryDateField.month": "\u6708",
        "creditCard.expiryDateField.month.placeholder": "\u6708\u6708",
        "creditCard.expiryDateField.year.placeholder": "\u5e74\u5e74",
        "creditCard.expiryDateField.year": "\u5e74",
        "creditCard.cvcField.title": "CVC / CVV",
        "creditCard.cvcField.placeholder": "123",
        "creditCard.storeDetailsButton":
          "\u8bb0\u4f4f\u4ee5\u4fbf\u4e0b\u6b21\u4f7f\u7528",
        "creditCard.cvcField.placeholder.4digits": "4 \u4f4d\u6570",
        "creditCard.cvcField.placeholder.3digits": "3 \u4f4d\u6570",
        "creditCard.taxNumber.placeholder": "\u5e74\u6708\u65e5 / 0123456789",
        installments: "\u5206\u671f\u4ed8\u6b3e\u671f\u6570",
        installmentOption: "%{times}x %{partialValue}",
        installmentOptionMonths: "%{times} \u4e2a\u6708",
        "installments.oneTime": "\u5168\u6b3e\u652f\u4ed8",
        "installments.installments": "\u5206\u671f\u652f\u4ed8",
        "installments.revolving": "\u5faa\u73af\u652f\u4ed8",
        "sepaDirectDebit.ibanField.invalid": "\u65e0\u6548\u7684\u8d26\u53f7",
        "sepaDirectDebit.nameField.placeholder": "J. Smith",
        "sepa.ownerName": "\u6301\u5361\u4eba\u59d3\u540d",
        "sepa.ibanNumber": "\u8d26\u53f7 (IBAN)",
        "error.title": "\u9519\u8bef",
        "error.subtitle.redirect": "\u91cd\u5b9a\u5411\u5931\u8d25",
        "error.subtitle.payment": "\u652f\u4ed8\u5931\u8d25",
        "error.subtitle.refused": "\u652f\u4ed8\u88ab\u62d2",
        "error.message.unknown": "\u53d1\u751f\u672a\u77e5\u9519\u8bef",
        "idealIssuer.selectField.title": "\u94f6\u884c",
        "idealIssuer.selectField.placeholder":
          "\u9009\u62e9\u60a8\u7684\u94f6\u884c",
        "creditCard.success": "\u652f\u4ed8\u6210\u529f",
        loading: "\u6b63\u5728\u52a0\u8f7d...",
        continue: "\u7ee7\u7eed",
        continueTo: "\u7ee7\u7eed\u81f3",
        "wechatpay.timetopay": "\u60a8\u9700\u8981\u652f\u4ed8 %@",
        "wechatpay.scanqrcode": "\u626b\u63cf\u4e8c\u7ef4\u7801",
        personalDetails: "\u4e2a\u4eba\u8be6\u7ec6\u4fe1\u606f",
        companyDetails: "\u516c\u53f8\u8be6\u60c5",
        "companyDetails.name": "\u516c\u53f8\u540d\u79f0",
        "companyDetails.registrationNumber": "\u6ce8\u518c\u53f7",
        socialSecurityNumber: "\u793e\u4f1a\u4fdd\u9669\u53f7\u7801",
        firstName: "\u540d\u5b57",
        infix: "\u524d\u7f00",
        lastName: "\u59d3\u6c0f",
        mobileNumber: "\u624b\u673a\u53f7",
        "mobileNumber.invalid": "\u65e0\u6548\u7684\u624b\u673a\u53f7\u7801",
        city: "\u57ce\u5e02",
        postalCode: "\u90ae\u653f\u7f16\u7801",
        countryCode: "\u56fd\u5bb6\u4ee3\u7801",
        telephoneNumber: "\u7535\u8bdd\u53f7\u7801",
        dateOfBirth: "\u51fa\u751f\u65e5\u671f",
        shopperEmail: "\u7535\u5b50\u90ae\u4ef6\u5730\u5740",
        gender: "\u6027\u522b",
        male: "\u7537",
        female: "\u5973",
        billingAddress: "\u8d26\u5355\u5730\u5740",
        street: "\u8857\u9053",
        stateOrProvince: "\u5dde\u6216\u7701",
        country: "\u56fd\u5bb6/\u5730\u533a",
        houseNumberOrName: "\u95e8\u724c\u53f7",
        separateDeliveryAddress:
          "\u6307\u5b9a\u4e00\u4e2a\u5355\u72ec\u7684\u5bc4\u9001\u5730\u5740",
        deliveryAddress: "\u5bc4\u9001\u5730\u5740",
        zipCode: "\u90ae\u653f\u7f16\u7801",
        apartmentSuite: "\u516c\u5bd3 / \u5957\u623f",
        provinceOrTerritory: "\u7701\u6216\u5730\u533a",
        cityTown: "\u5e02 / \u9547",
        address: "\u5730\u5740",
        state: "\u5dde",
        "field.title.optional": "\uff08\u53ef\u9009\uff09",
        "creditCard.cvcField.title.optional":
          "CVC / CVV\uff08\u53ef\u9009\uff09",
        "issuerList.wallet.placeholder": "\u9009\u62e9\u60a8\u7684\u94b1\u5305",
        privacyPolicy: "\u9690\u79c1\u653f\u7b56",
        "afterPay.agreement": "\u6211\u540c\u610f AfterPay \u7684 %@",
        paymentConditions: "\u652f\u4ed8\u6761\u4ef6",
        openApp: "\u6253\u5f00\u5e94\u7528",
        "voucher.readInstructions": "\u9605\u8bfb\u8bf4\u660e",
        "voucher.introduction":
          "\u611f\u8c22\u60a8\u7684\u8d2d\u4e70\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u4f18\u60e0\u5238\u5b8c\u6210\u652f\u4ed8\u3002",
        "voucher.expirationDate": "\u6709\u6548\u671f",
        "voucher.alternativeReference": "\u5907\u9009\u4ee3\u7801",
        "dragonpay.voucher.non.bank.selectField.placeholder":
          "\u9009\u62e9\u60a8\u7684\u63d0\u4f9b\u5546",
        "dragonpay.voucher.bank.selectField.placeholder":
          "\u9009\u62e9\u60a8\u7684\u94f6\u884c",
        "voucher.paymentReferenceLabel": "\u4ea4\u6613\u53f7",
        "voucher.surcharge": "\u5305\u62ec %@ \u7684\u9644\u52a0\u8d39",
        "voucher.introduction.doku":
          "\u611f\u8c22\u60a8\u7684\u8d2d\u4e70\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u4fe1\u606f\u5b8c\u6210\u652f\u4ed8\u3002",
        "voucher.shopperName": "\u987e\u5ba2\u59d3\u540d",
        "voucher.merchantName": "\u5546\u6237",
        "voucher.introduction.econtext":
          "\u611f\u8c22\u60a8\u7684\u8d2d\u4e70\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u4fe1\u606f\u5b8c\u6210\u652f\u4ed8\u3002",
        "voucher.telephoneNumber": "\u7535\u8bdd\u53f7\u7801",
        "voucher.shopperReference": "\u987e\u5ba2\u53c2\u8003",
        "voucher.collectionInstitutionNumber":
          "\u6536\u6b3e\u673a\u6784\u7f16\u53f7",
        "voucher.econtext.telephoneNumber.invalid":
          "\u7535\u8bdd\u53f7\u7801\u5fc5\u987b\u4e3a 10 \u6216 11 \u4f4d\u6570\u5b57",
        "boletobancario.btnLabel": "\u751f\u6210 Boleto",
        "boleto.sendCopyToEmail":
          "\u5c06\u526f\u672c\u53d1\u9001\u5230\u6211\u7684\u7535\u5b50\u90ae\u7bb1",
        "button.copy": "\u590d\u5236",
        "button.download": "\u4e0b\u8f7d",
        "creditCard.storedCard.description.ariaLabel":
          "\u5b58\u50a8\u7684\u5361\u7247\u4ee5 \uff05@ \u7ed3\u5c3e",
        "voucher.entity": "\u5b9e\u4f53",
        donateButton: "\u6350\u8d60",
        notNowButton: "\u6682\u4e0d",
        thanksForYourSupport: "\u611f\u8c22\u60a8\u7684\u652f\u6301\uff01",
        preauthorizeWith: "\u9884\u5148\u6388\u6743",
        confirmPreauthorization: "\u786e\u8ba4\u9884\u5148\u6388\u6743",
        confirmPurchase: "\u786e\u8ba4\u8d2d\u4e70",
        applyGiftcard: "\u5151\u6362",
        giftcardBalance: "\u793c\u54c1\u5361\u4f59\u989d",
        deductedBalance: "\u6263\u51cf\u4f59\u989d",
        "creditCard.pin.title": "Pin",
        "creditCard.encryptedPassword.label":
          "\u5361\u7247\u5bc6\u7801\u7684\u524d 2 \u4f4d\u6570",
        "creditCard.encryptedPassword.placeholder": "12",
        "creditCard.encryptedPassword.invalid":
          "\u65e0\u6548\u7684\u5bc6\u7801",
        "creditCard.taxNumber.label":
          "\u6301\u5361\u4eba\u751f\u65e5 (YYMMDD) \u6216\u516c\u53f8\u6ce8\u518c\u53f7\uff0810 \u4f4d\u6570\uff09",
        "creditCard.taxNumber.labelAlt":
          "\u516c\u53f8\u6ce8\u518c\u53f7\uff0810 \u4f4d\u6570\uff09",
        "creditCard.taxNumber.invalid":
          "\u65e0\u6548\u7684\u6301\u5361\u4eba\u751f\u65e5\u6216\u516c\u53f8\u6ce8\u518c\u53f7",
        "storedPaymentMethod.disable.button": "\u5220\u9664",
        "storedPaymentMethod.disable.confirmation":
          "\u5220\u9664\u5b58\u50a8\u7684\u652f\u4ed8\u65b9\u5f0f",
        "storedPaymentMethod.disable.confirmButton": "\u662f\uff0c\u5220\u9664",
        "storedPaymentMethod.disable.cancelButton": "\u53d6\u6d88",
        "ach.bankAccount": "\u94f6\u884c\u8d26\u6237",
        "ach.accountHolderNameField.title":
          "\u8d26\u6237\u6301\u6709\u4eba\u59d3\u540d",
        "ach.accountHolderNameField.placeholder": "J. Smith",
        "ach.accountHolderNameField.invalid":
          "\u65e0\u6548\u7684\u8d26\u6237\u6301\u6709\u4eba\u59d3\u540d",
        "ach.accountNumberField.title": "\u8d26\u53f7",
        "ach.accountNumberField.invalid": "\u65e0\u6548\u7684\u8d26\u53f7",
        "ach.accountLocationField.title":
          "ABA \u8def\u7531\u7535\u6c47\u7f16\u7801",
        "ach.accountLocationField.invalid":
          "\u65e0\u6548\u7684 ABA \u8def\u7531\u7535\u6c47\u7f16\u7801",
        "select.state": "\u9009\u62e9\u5dde",
        "select.stateOrProvince": "\u9009\u62e9\u5dde\u6216\u7701",
        "select.provinceOrTerritory": "\u9009\u62e9\u7701\u6216\u5730\u533a",
        "select.country": "\u9009\u62e9\u56fd\u5bb6/\u5730\u533a",
        "select.noOptionsFound": "\u672a\u627e\u5230\u4efb\u4f55\u9009\u9879",
        "select.filter.placeholder": "\u641c\u7d22\u2026\u2026",
        "telephoneNumber.invalid": "\u65e0\u6548\u7684\u7535\u8bdd\u53f7\u7801",
        qrCodeOrApp: "\u6216\u8005",
        "paypal.processingPayment": "\u6b63\u5728\u5904\u7406\u4ed8\u6b3e...",
        generateQRCode: "\u751f\u6210\u4e8c\u7ef4\u7801",
        "await.waitForConfirmation": "\u7b49\u5f85\u786e\u8ba4",
        "mbway.confirmPayment":
          "\u5728 MB WAY \u5e94\u7528\u4e0a\u786e\u8ba4\u60a8\u7684\u4ed8\u6b3e",
        "shopperEmail.invalid": "\u65e0\u6548\u7684\u90ae\u4ef6\u5730\u5740",
        "dateOfBirth.format": "DD/MM/YYYY",
        "dateOfBirth.invalid": "\u60a8\u5fc5\u987b\u5e74\u6ee1 18 \u5468\u5c81",
        "blik.confirmPayment":
          "\u6253\u5f00\u60a8\u7684\u94f6\u884c\u5e94\u7528\u4ee5\u786e\u8ba4\u652f\u4ed8\u3002",
        "blik.invalid": "\u8f93\u5165 6 \u4f4d\u6570",
        "blik.code": "6 \u4f4d\u6570\u4ee3\u7801",
        "blik.help":
          "\u4ece\u60a8\u7684\u94f6\u884c\u5e94\u7528\u4e2d\u83b7\u53d6\u4ee3\u7801\u3002",
        "swish.pendingMessage":
          "\u626b\u63cf\u540e\uff0c\u72b6\u6001\u53ef\u80fd\u4f1a\u4fdd\u6301\u6700\u591a 10 \u5206\u949f\u3002\u5728\u6b64\u65f6\u95f4\u5185\u518d\u6b21\u5c1d\u8bd5\u4ed8\u6b3e\u53ef\u80fd\u4f1a\u5bfc\u81f4\u591a\u6b21\u6536\u8d39\u3002",
        "error.va.gen.01": "\u4e0d\u5b8c\u6574\u5b57\u6bb5",
        "error.va.gen.02": "\u65e0\u6548\u5b57\u6bb5",
        "error.va.sf-cc-num.01": "\u65e0\u6548\u7684\u5361\u53f7",
        "error.va.sf-cc-num.03":
          "\u4e0d\u652f\u6301\u8f93\u5165\u7684\u5361\u7247",
        "error.va.sf-cc-dat.01": "\u5361\u7247\u592a\u65e7",
        "error.va.sf-cc-dat.02": "\u65e5\u671f\u592a\u4e45\u8fdc",
        "error.giftcard.no-balance":
          "\u793c\u54c1\u5361\u4f59\u989d\u4e3a\u96f6",
        "error.giftcard.card-error":
          "\u6211\u4eec\u7684\u6570\u636e\u5e93\u4e2d\u6ca1\u6709\u8fd9\u4e2a\u53f7\u7801\u7684\u793c\u54c1\u5361",
        "error.giftcard.currency-error":
          "\u793c\u54c1\u5361\u4ec5\u4ee5\u5176\u53d1\u884c\u7684\u8d27\u5e01\u4e3a\u6709\u6548\u8d27\u5e01",
        "amazonpay.signout": "\u9000\u51fa Amazon",
        "amazonpay.changePaymentDetails":
          "\u66f4\u6539\u652f\u4ed8\u8be6\u60c5",
        "partialPayment.warning":
          "\u8bf7\u9009\u62e9\u5176\u4ed6\u652f\u4ed8\u65b9\u5f0f\u652f\u4ed8\u5269\u4f59\u6b3e\u9879",
        "partialPayment.remainingBalance":
          "\u5269\u4f59\u989d\u5ea6\u4e3a %{amount}",
        "bankTransfer.beneficiary": "\u6536\u6b3e\u4eba",
        "bankTransfer.iban": "IBAN",
        "bankTransfer.bic": "\u4e2d\u56fd\u5de5\u5546\u94f6\u884c",
        "bankTransfer.reference": "\u53c2\u8003",
        "bankTransfer.introduction":
          "\u7ee7\u7eed\u65b0\u5efa\u94f6\u884c\u8f6c\u8d26\u4ed8\u6b3e\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u5c4f\u5e55\u4e2d\u7684\u8be6\u7ec6\u4fe1\u606f\u6765\u5b8c\u6210\u8fd9\u7b14\u4ed8\u6b3e\u3002",
        "bankTransfer.instructions":
          "\u611f\u8c22\u60a8\u7684\u8d2d\u4e70\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u4fe1\u606f\u5b8c\u6210\u652f\u4ed8\u3002",
        "bacs.accountHolderName":
          "\u94f6\u884c\u8d26\u6237\u6301\u6709\u4eba\u59d3\u540d",
        "bacs.accountHolderName.invalid":
          "\u65e0\u6548\u7684\u94f6\u884c\u8d26\u6237\u6301\u6709\u4eba\u59d3\u540d",
        "bacs.accountNumber": "\u94f6\u884c\u8d26\u53f7",
        "bacs.accountNumber.invalid":
          "\u65e0\u6548\u7684\u94f6\u884c\u8d26\u53f7",
        "bacs.bankLocationId": "\u5206\u7c7b\u4ee3\u7801",
        "bacs.bankLocationId.invalid":
          "\u65e0\u6548\u7684\u5206\u7c7b\u4ee3\u7801",
        "bacs.consent.amount":
          "\u6211\u540c\u610f\u4ece\u94f6\u884c\u8d26\u6237\u4e2d\u6263\u9664\u4e0a\u8ff0\u91d1\u989d\u3002",
        "bacs.consent.account":
          "\u6211\u786e\u8ba4\u8be5\u8d26\u6237\u4e3a\u6211\u540d\u4e0b\u7684\u8d26\u6237\uff0c\u5e76\u4e14\u6211\u662f\u6388\u6743\u8be5\u8d26\u6237\u76f4\u63a5\u501f\u8bb0\u7684\u552f\u4e00\u7b7e\u7f72\u4eba\u3002",
        edit: "\u7f16\u8f91",
        "bacs.confirm": "\u786e\u8ba4\u5e76\u652f\u4ed8",
        "bacs.result.introduction":
          "\u4e0b\u8f7d\u60a8\u7684\u76f4\u63a5\u501f\u8bb0\u6307\u793a\uff08DDI/\u59d4\u6258\uff09",
        "download.pdf": "\u4e0b\u8f7d PDF \u6587\u4ef6",
        "creditCard.encryptedCardNumber.aria.iframeTitle":
          "\u5b89\u5168\u5361\u53f7 Iframe",
        "creditCard.encryptedCardNumber.aria.label": "\u5361\u53f7\u5b57\u6bb5",
        "creditCard.encryptedExpiryDate.aria.iframeTitle":
          "\u5b89\u5168\u5361\u7247\u8fc7\u671f\u65e5\u671f Iframe",
        "creditCard.encryptedExpiryDate.aria.label":
          "\u8fc7\u671f\u65e5\u671f\u5b57\u6bb5",
        "creditCard.encryptedExpiryMonth.aria.iframeTitle":
          "\u5b89\u5168\u5361\u7247\u8fc7\u671f\u6708\u4efd Iframe",
        "creditCard.encryptedExpiryMonth.aria.label":
          "\u8fc7\u671f\u6708\u4efd\u5b57\u6bb5",
        "creditCard.encryptedExpiryYear.aria.iframeTitle":
          "\u5b89\u5168\u5361\u7247\u8fc7\u671f\u5e74\u4efd Iframe",
        "creditCard.encryptedExpiryYear.aria.label":
          "\u8fc7\u671f\u5e74\u4efd\u5b57\u6bb5",
        "creditCard.encryptedSecurityCode.aria.iframeTitle":
          "\u5b89\u5168\u5361\u7247\u5b89\u5168\u7801 Iframe",
        "creditCard.encryptedSecurityCode.aria.label":
          "\u5b89\u5168\u7801\u5b57\u6bb5",
        "giftcard.encryptedCardNumber.aria.iframeTitle":
          "\u5b89\u5168\u793c\u54c1\u5361\u53f7 Iframe",
        "giftcard.encryptedCardNumber.aria.label":
          "\u793c\u54c1\u5361\u53f7\u5b57\u6bb5",
        "giftcard.encryptedSecurityCode.aria.iframeTitle":
          "\u5b89\u5168\u793c\u54c1\u5361\u5b89\u5168\u7801 Iframe",
        "giftcard.encryptedSecurityCode.aria.label":
          "\u793c\u54c1\u5361\u5b89\u5168\u7801\u5b57\u6bb5",
        giftcardTransactionLimit:
          "\u6b64\u793c\u54c1\u5361\u4e0a\u6bcf\u7b14\u4ea4\u6613\u5141\u8bb8\u7684\u6700\u5927\u91d1\u989d\u4e3a %{amount}",
        "ach.encryptedBankAccountNumber.aria.iframeTitle":
          "\u5b89\u5168\u94f6\u884c\u8d26\u53f7 Iframe",
        "ach.encryptedBankAccountNumber.aria.label":
          "\u94f6\u884c\u8d26\u53f7\u5b57\u6bb5",
        "ach.encryptedBankLocationId.aria.iframeTitle":
          "\u5b89\u5168\u94f6\u884c\u8def\u7531\u7535\u6c47\u7f16\u7801 Iframe",
        "ach.encryptedBankLocationId.aria.label":
          "\u94f6\u884c\u8def\u7531\u7535\u6c47\u7f16\u7801\u5b57\u6bb5",
      },
    }),
    pp = Object.freeze({
      __proto__: null,
      default: {
        payButton: "\u652f\u4ed8",
        "payButton.redirecting": "\u91cd\u65b0\u5c0e\u5411\u4e2d......",
        storeDetails:
          "\u5132\u5b58\u4ee5\u4f9b\u4e0b\u6b21\u4ed8\u6b3e\u4f7f\u7528",
        "creditCard.holderName": "\u4fe1\u7528\u5361\u4e0a\u7684\u59d3\u540d",
        "creditCard.holderName.placeholder": "J. Smith",
        "creditCard.holderName.invalid":
          "\u6301\u5361\u4eba\u59d3\u540d\u7121\u6548",
        "creditCard.numberField.title": "\u4fe1\u7528\u5361\u865f\u78bc",
        "creditCard.numberField.placeholder": "1234 5678 9012 3456",
        "creditCard.expiryDateField.title": "\u5230\u671f\u65e5\u671f",
        "creditCard.expiryDateField.placeholder": "MM/YY",
        "creditCard.expiryDateField.month": "\u6708\u4efd",
        "creditCard.expiryDateField.month.placeholder": "MM",
        "creditCard.expiryDateField.year.placeholder": "YY",
        "creditCard.expiryDateField.year": "\u5e74\u4efd",
        "creditCard.cvcField.title":
          "\u4fe1\u7528\u5361\u9a57\u8b49\u78bc / \u4fe1\u7528\u5361\u5b89\u5168\u78bc",
        "creditCard.cvcField.placeholder": "123",
        "creditCard.storeDetailsButton":
          "\u8a18\u4f4f\u4f9b\u4e0b\u6b21\u4f7f\u7528",
        "creditCard.cvcField.placeholder.4digits": "4 \u4f4d\u6578",
        "creditCard.cvcField.placeholder.3digits": "3 \u4f4d\u6578",
        "creditCard.taxNumber.placeholder":
          "\u5e74\u6708\u65e5\uff0f0123456789",
        installments: "\u5206\u671f\u4ed8\u6b3e\u7684\u671f\u6578",
        installmentOption: "%{times}x %{partialValue}",
        installmentOptionMonths: "\uff05{times} \u500b\u6708",
        "installments.oneTime": "\u4e00\u6b21\u6027\u4ed8\u6b3e",
        "installments.installments": "\u5206\u671f\u4ed8\u6b3e",
        "installments.revolving": "\u5ef6\u671f\u4ed8\u6b3e",
        "sepaDirectDebit.ibanField.invalid":
          "\u5e33\u6236\u865f\u78bc\u7121\u6548",
        "sepaDirectDebit.nameField.placeholder": "J. Smith",
        "sepa.ownerName": "\u6301\u6709\u4eba\u540d\u7a31",
        "sepa.ibanNumber": "\u5e33\u6236\u865f\u78bc (IBAN)",
        "error.title": "\u932f\u8aa4",
        "error.subtitle.redirect": "\u7121\u6cd5\u91cd\u65b0\u5c0e\u5411",
        "error.subtitle.payment": "\u4ed8\u6b3e\u5931\u6557",
        "error.subtitle.refused": "\u4ed8\u6b3e\u906d\u62d2\u7d55",
        "error.message.unknown": "\u767c\u751f\u672a\u77e5\u932f\u8aa4",
        "idealIssuer.selectField.title": "\u9280\u884c",
        "idealIssuer.selectField.placeholder":
          "\u9078\u53d6\u60a8\u7684\u9280\u884c",
        "creditCard.success": "\u4ed8\u6b3e\u6210\u529f",
        loading: "\u6b63\u5728\u8f09\u5165...",
        continue: "\u7e7c\u7e8c",
        continueTo: "\u7e7c\u7e8c\u524d\u5f80",
        "wechatpay.timetopay": "\u60a8\u6709 %@ \u53ef\u4ee5\u652f\u4ed8",
        "wechatpay.scanqrcode": "\u6383\u63cf QR \u4ee3\u78bc",
        personalDetails: "\u500b\u4eba\u8a73\u7d30\u8cc7\u6599",
        companyDetails: "\u516c\u53f8\u8a73\u60c5",
        "companyDetails.name": "\u516c\u53f8\u540d\u7a31",
        "companyDetails.registrationNumber": "\u8a3b\u518a\u865f\u78bc",
        socialSecurityNumber: "\u793e\u6703\u5b89\u5168\u78bc",
        firstName: "\u540d\u5b57",
        infix: "\u524d\u7db4",
        lastName: "\u59d3\u6c0f",
        mobileNumber: "\u884c\u52d5\u96fb\u8a71\u865f\u78bc",
        "mobileNumber.invalid": "\u624b\u6a5f\u865f\u78bc\u7121\u6548",
        city: "\u57ce\u5e02",
        postalCode: "\u90f5\u905e\u5340\u865f",
        countryCode: "\u570b\u5bb6\u4ee3\u78bc",
        telephoneNumber: "\u96fb\u8a71\u865f\u78bc",
        dateOfBirth: "\u51fa\u751f\u65e5\u671f",
        shopperEmail: "\u96fb\u5b50\u90f5\u4ef6\u5730\u5740",
        gender: "\u6027\u5225",
        male: "\u7537",
        female: "\u5973",
        billingAddress: "\u5e33\u55ae\u5730\u5740",
        street: "\u8857\u9053",
        stateOrProvince: "\u5dde/\u7e23/\u5e02",
        country: "\u570b\u5bb6/\u5730\u5340",
        houseNumberOrName: "\u9580\u724c\u865f",
        separateDeliveryAddress:
          "\u6307\u5b9a\u53e6\u4e00\u500b\u6d3e\u9001\u5730\u5740",
        deliveryAddress: "\u6d3e\u9001\u5730\u5740",
        zipCode: "\u90f5\u905e\u5340\u865f",
        apartmentSuite: "\u516c\u5bd3\uff0f\u5957\u623f",
        provinceOrTerritory: "\u7701\u6216\u5730\u5340",
        cityTown: "\u5e02\uff0f\u93ae",
        address: "\u5730\u5740",
        state: "\u5dde",
        "field.title.optional": "\uff08\u9078\u7528\uff09",
        "creditCard.cvcField.title.optional": "CVC / CVV (\u53ef\u9078)",
        "issuerList.wallet.placeholder":
          "\u9078\u53d6\u60a8\u7684\u96fb\u5b50\u9322\u5305",
        privacyPolicy: "\u96b1\u79c1\u6b0a\u653f\u7b56",
        "afterPay.agreement": "\u6211\u540c\u610f AfterPay \u7684%@",
        paymentConditions: "\u4ed8\u6b3e\u7d30\u5247",
        openApp: "\u958b\u555f\u61c9\u7528\u7a0b\u5f0f",
        "voucher.readInstructions": "\u95b1\u89bd\u8aaa\u660e",
        "voucher.introduction":
          "\u591a\u8b1d\u60e0\u9867\uff0c\u8acb\u4f7f\u7528\u4ee5\u4e0b\u512a\u60e0\u5238\u5b8c\u6210\u4ed8\u6b3e\u3002",
        "voucher.expirationDate": "\u5230\u671f\u65e5\u671f",
        "voucher.alternativeReference": "\u5099\u9078\u53c3\u7167",
        "dragonpay.voucher.non.bank.selectField.placeholder":
          "\u9078\u64c7\u60a8\u7684\u4f9b\u61c9\u5546",
        "dragonpay.voucher.bank.selectField.placeholder":
          "\u9078\u53d6\u60a8\u7684\u9280\u884c",
        "voucher.paymentReferenceLabel": "\u4ed8\u6b3e\u53c3\u7167\u865f\u78bc",
        "voucher.surcharge": "\u5305\u542b %@ \u9644\u52a0\u8cbb",
        "voucher.introduction.doku":
          "\u591a\u8b1d\u60e0\u9867\uff0c\u8acb\u4f7f\u7528\u4ee5\u4e0b\u8cc7\u8a0a\u5b8c\u6210\u4ed8\u6b3e\u3002",
        "voucher.shopperName": "\u8cfc\u7269\u8005\u59d3\u540d",
        "voucher.merchantName": "\u5546\u5bb6",
        "voucher.introduction.econtext":
          "\u591a\u8b1d\u60e0\u9867\uff0c\u8acb\u4f7f\u7528\u4ee5\u4e0b\u8cc7\u8a0a\u5b8c\u6210\u4ed8\u6b3e\u3002",
        "voucher.telephoneNumber": "\u96fb\u8a71\u865f\u78bc",
        "voucher.shopperReference": "\u8cfc\u7269\u8005\u53c3\u8003",
        "voucher.collectionInstitutionNumber":
          "\u6536\u6b3e\u6a5f\u69cb\u7de8\u865f",
        "voucher.econtext.telephoneNumber.invalid":
          "\u96fb\u8a71\u865f\u78bc\u7684\u9577\u5ea6\u5fc5\u9808\u70ba 10 \u6216 11 \u4f4d\u6578",
        "boletobancario.btnLabel": "\u7522\u751f Boleto",
        "boleto.sendCopyToEmail":
          "\u5c07\u8907\u672c\u50b3\u9001\u81f3\u6211\u7684\u96fb\u5b50\u90f5\u4ef6",
        "button.copy": "\u8907\u88fd",
        "button.download": "\u4e0b\u8f09",
        "creditCard.storedCard.description.ariaLabel":
          "\u5df2\u5132\u5b58\u4ee5 %@ \u7d50\u5c3e\u7684\u4fe1\u7528\u5361",
        "voucher.entity": "\u5be6\u9ad4",
        donateButton: "\u6350\u8d08",
        notNowButton: "\u7a0d\u5f8c\u518d\u8aaa",
        thanksForYourSupport: "\u611f\u8b1d\u60a8\u7684\u652f\u6301\uff01",
        preauthorizeWith:
          "\u900f\u904e\u4ee5\u4e0b\u65b9\u5f0f\u9032\u884c\u9810\u5148\u6388\u6b0a\uff1a",
        confirmPreauthorization: "\u78ba\u8a8d\u9810\u5148\u6388\u6b0a",
        confirmPurchase: "\u78ba\u8a8d\u8cfc\u8cb7",
        applyGiftcard: "\u514c\u63db",
        giftcardBalance: "\u79ae\u54c1\u5361\u9918\u984d",
        deductedBalance: "\u6263\u9664\u9918\u984d",
        "creditCard.pin.title": "\u6578\u5b57\u5bc6\u78bc",
        "creditCard.encryptedPassword.label":
          "\u5361\u5bc6\u78bc\u7684\u524d 2 \u4f4d\u6578\u5b57",
        "creditCard.encryptedPassword.placeholder": "12",
        "creditCard.encryptedPassword.invalid": "\u5bc6\u78bc\u7121\u6548",
        "creditCard.taxNumber.label":
          "\u6301\u5361\u4eba\u751f\u65e5\uff08\u5e74\u6708\u65e5\uff09\u6216\u516c\u53f8\u8a3b\u518a\u865f\u78bc\uff0810 \u4f4d\u6578\uff09",
        "creditCard.taxNumber.labelAlt":
          "\u516c\u53f8\u8a3b\u518a\u865f\u78bc\uff0810 \u4f4d\u6578\uff09",
        "creditCard.taxNumber.invalid":
          "\u6301\u5361\u4eba\u751f\u65e5\u6216\u516c\u53f8\u8a3b\u518a\u865f\u78bc\u7121\u6548",
        "storedPaymentMethod.disable.button": "\u79fb\u9664",
        "storedPaymentMethod.disable.confirmation":
          "\u79fb\u9664\u5df2\u5132\u5b58\u4ed8\u6b3e\u65b9\u5f0f",
        "storedPaymentMethod.disable.confirmButton":
          "\u662f\uff0c\u8acb\u79fb\u9664",
        "storedPaymentMethod.disable.cancelButton": "\u53d6\u6d88",
        "ach.bankAccount": "\u9280\u884c\u5e33\u6236",
        "ach.accountHolderNameField.title":
          "\u5e33\u6236\u6301\u6709\u4eba\u59d3\u540d",
        "ach.accountHolderNameField.placeholder": "J. Smith",
        "ach.accountHolderNameField.invalid":
          "\u5e33\u6236\u6301\u6709\u4eba\u59d3\u540d\u7121\u6548",
        "ach.accountNumberField.title": "\u5e33\u6236\u865f\u78bc",
        "ach.accountNumberField.invalid":
          "\u5e33\u6236\u865f\u78bc\u7121\u6548",
        "ach.accountLocationField.title":
          "ABA \u532f\u6b3e\u8def\u5f91\u7de8\u865f",
        "ach.accountLocationField.invalid":
          "ABA \u532f\u6b3e\u8def\u5f91\u7de8\u865f\u7121\u6548",
        "select.state": "\u9078\u53d6\u5dde",
        "select.stateOrProvince": "\u9078\u64c7\u5dde\u6216\u7701",
        "select.provinceOrTerritory": "\u9078\u53d6\u7701\u6216\u5730\u5340",
        "select.country": "\u9078\u64c7\u570b\u5bb6\uff0f\u5730\u5340",
        "select.noOptionsFound": "\u627e\u4e0d\u5230\u4efb\u4f55\u9078\u9805",
        "select.filter.placeholder": "\u641c\u5c0b\u2026\u2026",
        "telephoneNumber.invalid": "\u96fb\u8a71\u865f\u78bc\u7121\u6548",
        qrCodeOrApp: "\u6216",
        "paypal.processingPayment":
          "\u6b63\u5728\u8655\u7406\u4ed8\u6b3e\u2026\u2026",
        generateQRCode: "\u7522\u751f QR \u4ee3\u78bc",
        "await.waitForConfirmation": "\u6b63\u5728\u7b49\u5019\u78ba\u8a8d",
        "mbway.confirmPayment":
          "\u5728 MB WAY \u61c9\u7528\u7a0b\u5f0f\u4e0a\u78ba\u8a8d\u60a8\u7684\u4ed8\u6b3e",
        "shopperEmail.invalid":
          "\u96fb\u5b50\u90f5\u4ef6\u5730\u5740\u7121\u6548",
        "dateOfBirth.format": "\u65e5\uff0f\u6708\uff0f\u5e74",
        "dateOfBirth.invalid": "\u60a8\u5fc5\u9808\u5e74\u6eff 18 \u6b72",
        "blik.confirmPayment":
          "\u958b\u555f\u60a8\u7684\u9280\u884c\u61c9\u7528\u7a0b\u5f0f\u4ee5\u78ba\u8a8d\u4ed8\u6b3e\u3002",
        "blik.invalid": "\u8f38\u5165 6 \u500b\u6578\u5b57",
        "blik.code": "6 \u4f4d\u6578\u4ee3\u78bc",
        "blik.help":
          "\u5f9e\u60a8\u7684\u9280\u884c\u61c9\u7528\u7a0b\u5f0f\u4e2d\u7372\u53d6\u4ee3\u78bc\u3002",
        "swish.pendingMessage":
          "\u6383\u63cf\u5f8c\uff0c\u8a72\u5f85\u5b8c\u6210\u72c0\u614b\u53ef\u80fd\u6301\u7e8c\u9577\u9054 10 \u5206\u9418\u3002\u8a66\u5716\u5728\u9019\u6bb5\u6642\u9593\u5167\u518d\u6b21\u4ed8\u6b3e\u53ef\u80fd\u6703\u5c0e\u81f4\u591a\u91cd\u6536\u8cbb\u3002",
        "error.va.gen.01": "\u4e0d\u5b8c\u6574\u6b04\u4f4d",
        "error.va.gen.02": "\u6b04\u4f4d\u7121\u6548",
        "error.va.sf-cc-num.01": "\u4fe1\u7528\u5361\u865f\u78bc\u7121\u6548",
        "error.va.sf-cc-num.03":
          "\u8f38\u5165\u4e86\u4e0d\u652f\u63f4\u7684\u5361",
        "error.va.sf-cc-dat.01": "\u5361\u592a\u820a",
        "error.va.sf-cc-dat.02":
          "\u672a\u4f86\u65e5\u671f\u8ddd\u4eca\u592a\u4e45",
        "error.giftcard.no-balance":
          "\u6b64\u79ae\u54c1\u5361\u7684\u9918\u984d\u70ba\u96f6",
        "error.giftcard.card-error":
          "\u6211\u5011\u7684\u8a18\u9304\u4e2d\u4e26\u6c92\u6709\u9019\u500b\u865f\u78bc\u7684\u79ae\u54c1\u5361",
        "error.giftcard.currency-error":
          "\u79ae\u54c1\u5361\u53ea\u80fd\u4ee5\u5176\u7c3d\u767c\u6642\u6240\u4f7f\u7528\u7684\u8ca8\u5e63\u9032\u884c\u7d50\u7b97",
        "amazonpay.signout": "\u5f9e Amazon \u767b\u51fa",
        "amazonpay.changePaymentDetails":
          "\u8b8a\u66f4\u4ed8\u6b3e\u660e\u7d30",
        "partialPayment.warning":
          "\u9078\u53d6\u5176\u4ed6\u4ed8\u6b3e\u65b9\u5f0f\u4f86\u652f\u4ed8\u9918\u984d",
        "partialPayment.remainingBalance": "\u9918\u984d\u5c07\u70ba %{amount}",
        "bankTransfer.beneficiary": "\u53d7\u6b3e\u4eba",
        "bankTransfer.iban": "IBAN",
        "bankTransfer.bic": "BIC",
        "bankTransfer.reference": "\u53c3\u7167",
        "bankTransfer.introduction":
          "\u7e7c\u7e8c\u5efa\u7acb\u65b0\u7684\u9280\u884c\u8f49\u5e33\u4ed8\u6b3e\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u87a2\u5e55\u4e2d\u7684\u8a73\u7d30\u8cc7\u8a0a\u4f86\u5b8c\u6210\u6b64\u9805\u4ed8\u6b3e\u3002",
        "bankTransfer.instructions":
          "\u591a\u8b1d\u60e0\u9867\uff0c\u8acb\u4f7f\u7528\u4ee5\u4e0b\u8cc7\u8a0a\u5b8c\u6210\u4ed8\u6b3e\u3002",
        "bacs.accountHolderName":
          "\u9280\u884c\u5e33\u6236\u6301\u6709\u4eba\u59d3\u540d",
        "bacs.accountHolderName.invalid":
          "\u9280\u884c\u5e33\u6236\u6301\u6709\u4eba\u59d3\u540d\u7121\u6548",
        "bacs.accountNumber": "\u9280\u884c\u5e33\u6236\u865f\u78bc",
        "bacs.accountNumber.invalid":
          "\u9280\u884c\u5e33\u6236\u865f\u78bc\u7121\u6548",
        "bacs.bankLocationId": "\u9280\u884c\u4ee3\u78bc",
        "bacs.bankLocationId.invalid": "\u9280\u884c\u4ee3\u78bc\u7121\u6548",
        "bacs.consent.amount":
          "\u6211\u540c\u610f\u5f9e\u6211\u7684\u9280\u884c\u5e33\u6236\u6263\u9664\u4e0a\u8ff0\u91d1\u984d\u3002",
        "bacs.consent.account":
          "\u6211\u78ba\u8a8d\u8a72\u5e33\u6236\u4ee5\u6211\u7684\u540d\u7fa9\u958b\u8a2d\uff0c\u4e26\u4e14\u6211\u662f\u6388\u6b0a\u5f9e\u8a72\u5e33\u6236\u76f4\u63a5\u6263\u6b3e\u7684\u552f\u4e00\u7c3d\u7f72\u4eba\u3002",
        edit: "\u7de8\u8f2f",
        "bacs.confirm": "\u78ba\u8a8d\u4e26\u652f\u4ed8",
        "bacs.result.introduction":
          "\u4e0b\u8f09\u60a8\u7684\u76f4\u63a5\u6263\u6b3e\u6307\u793a\uff08DDI\uff0f\u6388\u6b0a\uff09",
        "download.pdf": "\u4e0b\u8f09 PDF",
        "creditCard.encryptedCardNumber.aria.iframeTitle":
          "\u5b89\u5168\u5361\u865f\u7684 IFrame",
        "creditCard.encryptedCardNumber.aria.label": "\u5361\u865f\u6b04\u4f4d",
        "creditCard.encryptedExpiryDate.aria.iframeTitle":
          "\u5b89\u5168\u5361\u5230\u671f\u65e5\u671f\u7684 IFrame",
        "creditCard.encryptedExpiryDate.aria.label":
          "\u5230\u671f\u65e5\u671f\u6b04\u4f4d",
        "creditCard.encryptedExpiryMonth.aria.iframeTitle":
          "\u5b89\u5168\u5361\u5230\u671f\u6708\u4efd\u7684 IFrame",
        "creditCard.encryptedExpiryMonth.aria.label":
          "\u5230\u671f\u6708\u4efd\u6b04\u4f4d",
        "creditCard.encryptedExpiryYear.aria.iframeTitle":
          "\u5b89\u5168\u5361\u5230\u671f\u5e74\u4efd\u7684 IFrame",
        "creditCard.encryptedExpiryYear.aria.label":
          "\u5230\u671f\u5e74\u4efd\u6b04\u4f4d",
        "creditCard.encryptedSecurityCode.aria.iframeTitle":
          "\u5b89\u5168\u5361\u5b89\u5168\u78bc\u7684 IFrame",
        "creditCard.encryptedSecurityCode.aria.label":
          "\u5b89\u5168\u78bc\u6b04\u4f4d",
        "giftcard.encryptedCardNumber.aria.iframeTitle":
          "\u5b89\u5168\u79ae\u54c1\u5361\u865f\u7684 IFrame",
        "giftcard.encryptedCardNumber.aria.label":
          "\u79ae\u54c1\u5361\u865f\u6b04\u4f4d",
        "giftcard.encryptedSecurityCode.aria.iframeTitle":
          "\u5b89\u5168\u79ae\u54c1\u5361\u5b89\u5168\u78bc\u7684 IFrame",
        "giftcard.encryptedSecurityCode.aria.label":
          "\u79ae\u54c1\u5361\u5b89\u5168\u78bc\u6b04\u4f4d",
        giftcardTransactionLimit:
          "\u6b64\u79ae\u54c1\u5361\u6bcf\u7b46\u4ea4\u6613\u7684\u91d1\u984d\u4e0a\u9650\u70ba %{amount}",
        "ach.encryptedBankAccountNumber.aria.iframeTitle":
          "\u5b89\u5168\u9280\u884c\u5e33\u6236\u865f\u78bc\u7684 IFrame",
        "ach.encryptedBankAccountNumber.aria.label":
          "\u9280\u884c\u5e33\u6236\u6b04\u4f4d",
        "ach.encryptedBankLocationId.aria.iframeTitle":
          "\u5b89\u5168\u9280\u884c\u532f\u6b3e\u8def\u5f91\u7de8\u865f\u7684 IFrame",
        "ach.encryptedBankLocationId.aria.label":
          "\u9280\u884c\u532f\u6b3e\u8def\u5f91\u7de8\u865f\u6b04\u4f4d",
      },
    });
  return Ku;
});
//# sourceMappingURL=adyen.js.map
