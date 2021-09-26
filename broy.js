! function (e, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define("guify", [], n) : "object" == typeof exports ? exports.guify = n() : e.guify = n()
}(this, function () {
    return function (e) {
        function n(o) {
            if (t[o]) return t[o].exports;
            var i = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        var t = {};
        return n.m = e, n.c = t, n.d = function (e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: o
            })
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, n.p = "", n(n.s = 16)
    }([function (e, n, t) {
        function o(e, n, t) {
            var o = l[n];
            if (void 0 === o && (o = r(n)), o) {
                if (void 0 === t) return e.style[o];
                e.style[o] = c(o, t)
            }
        }
        
        function i(e, n) {
            for (var t in n) n.hasOwnProperty(t) && o(e, t, n[t])
        }
        
        function r(e) {
            var n = u(e),
                t = s(n);
            return l[n] = l[e] = l[t] = t, t
        }
        
        function a() {
            2 === arguments.length ? "string" == typeof arguments[1] ? arguments[0].style.cssText = arguments[1] : i(arguments[0], arguments[1]) : o(arguments[0], arguments[1], arguments[2])
        }
        var s = t(18),
            u = t(19),
            l = {
                float: "cssFloat"
            },
            c = t(22);
        e.exports = a, e.exports.set = a, e.exports.get = function (e, n) {
            return Array.isArray(n) ? n.reduce(function (n, t) {
                return n[t] = o(e, t || ""), n
            }, {}) : o(e, n || "")
        }
    }, function (e, n, t) {
        "use strict";
        
        function o(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.theme = void 0;
        var i = function () {
                function e(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var o = n[t];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (n, t, o) {
                    return t && e(n.prototype, t), o && e(n, o), n
                }
            }(),
            r = t(9),
            a = (function (e) {
                e && e.__esModule
            }(r), function () {
                function e() {
                    o(this, e)
                }
                return i(e, [{
                    key: "Set",
                    value: function (e) {
                        Object.assign(this, s, e)
                    }
                }]), e
            }()),
            s = {
                name: "BaseTheme",
                colors: {
                    menuBarBackground: "black",
                    menuBarText: "black",
                    panelBackground: "black",
                    componentBackground: "black",
                    componentBackgroundHover: "black",
                    componentForeground: "black",
                    componentActive: "black",
                    textPrimary: "black",
                    textSecondary: "black",
                    textHover: "black",
                    textActive: "black"
                },
                sizing: {
                    menuBarHeight: "25px",
                    componentHeight: "20px",
                    componentSpacing: "5px",
                    labelWidth: "42%"
                }
            };
        n.theme = new a
    }, function (e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = t(0),
            i = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o),
            r = function (e, n, t) {
                var o = e.appendChild(document.createElement("div"));
                return o.classList.add("guify-component-container"), (0, i.default)(o, {
                    position: "relative",
                    "min-height": t.sizing.componentHeight,
                    "margin-bottom": t.sizing.componentSpacing
                }), o
            };
        n.default = r, e.exports = n.default
    }, function (e, n, t) {
        "use strict";
        var o = t(31);
        e.exports = o, e.exports.csjs = o, e.exports.getCss = t(45)
    }, function (e, n, t) {
        var o;
        ! function (n) {
            "use strict";
            
            function i() {}
            
            function r(e, n) {
                for (var t = e.length; t--;)
                    if (e[t].listener === n) return t;
                return -1
            }
            
            function a(e) {
                return function () {
                    return this[e].apply(this, arguments)
                }
            }
            
            function s(e) {
                return "function" == typeof e || e instanceof RegExp || !(!e || "object" != typeof e) && s(e.listener)
            }
            var u = i.prototype,
                l = n.EventEmitter;
            u.getListeners = function (e) {
                var n, t, o = this._getEvents();
                if (e instanceof RegExp) {
                    n = {};
                    for (t in o) o.hasOwnProperty(t) && e.test(t) && (n[t] = o[t])
                } else n = o[e] || (o[e] = []);
                return n
            }, u.flattenListeners = function (e) {
                var n, t = [];
                for (n = 0; n < e.length; n += 1) t.push(e[n].listener);
                return t
            }, u.getListenersAsObject = function (e) {
                var n, t = this.getListeners(e);
                return t instanceof Array && (n = {}, n[e] = t), n || t
            }, u.addListener = function (e, n) {
                if (!s(n)) throw new TypeError("listener must be a function");
                var t, o = this.getListenersAsObject(e),
                    i = "object" == typeof n;
                for (t in o) o.hasOwnProperty(t) && -1 === r(o[t], n) && o[t].push(i ? n : {
                    listener: n,
                    once: !1
                });
                return this
            }, u.on = a("addListener"), u.addOnceListener = function (e, n) {
                return this.addListener(e, {
                    listener: n,
                    once: !0
                })
            }, u.once = a("addOnceListener"), u.defineEvent = function (e) {
                return this.getListeners(e), this
            }, u.defineEvents = function (e) {
                for (var n = 0; n < e.length; n += 1) this.defineEvent(e[n]);
                return this
            }, u.removeListener = function (e, n) {
                var t, o, i = this.getListenersAsObject(e);
                for (o in i) i.hasOwnProperty(o) && -1 !== (t = r(i[o], n)) && i[o].splice(t, 1);
                return this
            }, u.off = a("removeListener"), u.addListeners = function (e, n) {
                return this.manipulateListeners(!1, e, n)
            }, u.removeListeners = function (e, n) {
                return this.manipulateListeners(!0, e, n)
            }, u.manipulateListeners = function (e, n, t) {
                var o, i, r = e ? this.removeListener : this.addListener,
                    a = e ? this.removeListeners : this.addListeners;
                if ("object" != typeof n || n instanceof RegExp)
                    for (o = t.length; o--;) r.call(this, n, t[o]);
                else
                    for (o in n) n.hasOwnProperty(o) && (i = n[o]) && ("function" == typeof i ? r.call(this, o, i) : a.call(this, o, i));
                return this
            }, u.removeEvent = function (e) {
                var n, t = typeof e,
                    o = this._getEvents();
                if ("string" === t) delete o[e];
                else if (e instanceof RegExp)
                    for (n in o) o.hasOwnProperty(n) && e.test(n) && delete o[n];
                else delete this._events;
                return this
            }, u.removeAllListeners = a("removeEvent"), u.emitEvent = function (e, n) {
                var t, o, i, r, a = this.getListenersAsObject(e);
                for (r in a)
                    if (a.hasOwnProperty(r))
                        for (t = a[r].slice(0), i = 0; i < t.length; i++) o = t[i], !0 === o.once && this.removeListener(e, o.listener), o.listener.apply(this, n || []) === this._getOnceReturnValue() && this.removeListener(e, o.listener);
                return this
            }, u.trigger = a("emitEvent"), u.emit = function (e) {
                var n = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(e, n)
            }, u.setOnceReturnValue = function (e) {
                return this._onceReturnValue = e, this
            }, u._getOnceReturnValue = function () {
                return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
            }, u._getEvents = function () {
                return this._events || (this._events = {})
            }, i.noConflict = function () {
                return n.EventEmitter = l, i
            }, void 0 !== (o = function () {
                return i
            }.call(n, t, n, e)) && (e.exports = o)
        }("undefined" != typeof window ? window : this || {})
    }, function (e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = t(0),
            i = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o);
        n.default = function (e, n, t) {
            var o = e.appendChild(document.createElement("div"));
            (0, i.default)(o, {
                left: 0,
                width: "calc(" + t.sizing.labelWidth + " - 2%)",
                display: "inline-block",
                "margin-right": "2%",
                verticalAlign: "top"
            });
            var r = o.appendChild(document.createElement("div"));
            return r.innerHTML = n, (0, i.default)(r, {
                color: t.colors.textPrimary,
                display: "inline-block",
                verticalAlign: "sub",
                "min-height": t.sizing.componentHeight,
                "line-height": t.sizing.componentHeight
            }), r
        }, e.exports = n.default
    }, function (e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = t(0),
            i = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o);
        n.default = function (e, n, t, o, r) {
            var a = e.appendChild(document.createElement("input"));
            a.type = "text", a.value = n;
            var s = {
                position: "absolute",
                backgroundColor: t.colors.componentBackground,
                paddingLeft: "1%",
                height: t.sizing.componentHeight,
                width: o,
                display: "inline-block",
                overflow: "hidden",
                border: "none",
                "font-family": "'Hack', monospace",
                "font-size": "11px",
                color: t.colors.textSecondary,
                userSelect: "text",
                cursor: "text",
                lineHeight: t.sizing.componentHeight,
                wordBreak: "break-all",
                "box-sizing": "border-box",
                "-moz-box-sizing": "border-box",
                "-webkit-box-sizing": "border-box"
            };
            return r || (s.right = 0), (0, i.default)(a, s), a
        }, e.exports = n.default
    }, function (e, n, t) {
        "use strict";
        
        function o(e, n, t) {
            var o = e.join(" ");
            return Object.create(a.prototype, {
                classNames: {
                    value: Object.freeze(e),
                    configurable: !1,
                    writable: !1,
                    enumerable: !0
                },
                unscoped: {
                    value: Object.freeze(n),
                    configurable: !1,
                    writable: !1,
                    enumerable: !0
                },
                className: {
                    value: o,
                    configurable: !1,
                    writable: !1,
                    enumerable: !0
                },
                selector: {
                    value: e.map(function (e) {
                            return t ? e : "." + e
                        })
                        .join(", "),
                    configurable: !1,
                    writable: !1,
                    enumerable: !0
                },
                toString: {
                    value: function () {
                        return o
                    },
                    configurable: !1,
                    writeable: !1,
                    enumerable: !1
                }
            })
        }
        
        function i(e) {
            return e instanceof a
        }
        
        function r(e) {
            return e.reduce(function (e, n) {
                return i(n) && n.classNames.forEach(function (t, o) {
                    e[t] = n.unscoped[o]
                }), e
            }, {})
        }
        
        function a() {}
        e.exports = {
            makeComposition: o,
            isComposition: i,
            ignoreComposition: r
        }
    }, function (e, n, t) {
        "use strict";
        var o = /(\.)(?!\d)([^\s\.,{\[>+~#:)]*)(?![^{]*})/.source,
            i = /(@\S*keyframes\s*)([^{\s]*)/.source,
            r = /(?!(?:[^*\/]|\*[^\/]|\/[^*])*\*+\/)/.source,
            a = new RegExp(o + r, "g"),
            s = new RegExp(i + r, "g");
        e.exports = {
            classRegex: a,
            keyframesRegex: s,
            ignoreComments: r
        }
    }, function (e, n, t) {
        "use strict";
        e.exports = {
            light: {
                name: "Light",
                colors: {
                    menuBarBackground: "rgb(227, 227, 227)",
                    menuBarText: "rgb(36, 36, 36)",
                    panelBackground: "rgb(227, 227, 227)",
                    componentBackground: "rgb(204, 204, 204)",
                    componentBackgroundHover: "rgb(190, 190, 190)",
                    componentForeground: "rgb(105, 105, 105)",
                    componentActive: "rgb(36, 36, 36)",
                    textPrimary: "rgb(36, 36, 36)",
                    textSecondary: "rgb(87, 87, 87)",
                    textHover: "rgb(204, 204, 204)",
                    textActive: "rgb(204, 204, 204)"
                }
            },
            dark: {
                name: "Dark",
                colors: {
                    menuBarBackground: "rgb(35, 35, 35)",
                    menuBarText: "rgb(235, 235, 235)",
                    panelBackground: "rgb(35, 35, 35)",
                    componentBackground: "rgb(54, 54, 54)",
                    componentBackgroundHover: "rgb(76, 76, 76)",
                    componentForeground: "rgb(112, 112, 112)",
                    componentActive: "rgb(202, 202, 202)",
                    textPrimary: "rgb(235, 235, 235)",
                    textSecondary: "rgb(181, 181, 181)",
                    textHover: "rgb(235, 235, 235)",
                    textActive: "rgb(54, 54, 54)"
                }
            },
            yorha: {
                name: "YoRHa",
                colors: {
                    menuBarBackground: "#CCC8B1",
                    menuBarText: "#454138",
                    panelBackground: "#CCC8B1",
                    componentBackground: "#BAB5A1",
                    componentBackgroundHover: "#877F6E",
                    componentForeground: "#454138",
                    componentActive: "#978F7E",
                    textPrimary: "#454138",
                    textSecondary: "#454138",
                    textHover: "#CCC8B1",
                    textActive: "#CCC8B1"
                },
                font: {
                    fontFamily: "helvetica, sans-serif",
                    fontSize: "14px",
                    fontWeight: "100"
                }
            }
        }
    }, function (e, n, t) {
        ! function (t) {
            "use strict";
            
            function o(e) {
                return "number" == typeof e && !isNaN(e) || !!(e = (e || "")
                    .toString()
                    .trim()) && !isNaN(e)
            }
            void 0 !== e && e.exports && (n = e.exports = o), n.isNumeric = o
        }()
    }, function (e, n, t) {
        "use strict";
        e.exports = " css "
    }, function (e, n, t) {
        "use strict";
        e.exports = t(44)
    }, function (e, n) {
        function t(e, n) {
            if (n = n || {}, void 0 === e) throw new Error(a);
            var t = !0 === n.prepend ? "prepend" : "append",
                s = void 0 !== n.container ? n.container : document.querySelector("head"),
                u = i.indexOf(s); - 1 === u && (u = i.push(s) - 1, r[u] = {});
            var l;
            return void 0 !== r[u] && void 0 !== r[u][t] ? l = r[u][t] : (l = r[u][t] = o(), "prepend" === t ? s.insertBefore(l, s.childNodes[0]) : s.appendChild(l)), 65279 === e.charCodeAt(0) && (e = e.substr(1, e.length)), l.styleSheet ? l.styleSheet.cssText += e : l.textContent += e, l
        }
        
        function o() {
            var e = document.createElement("style");
            return e.setAttribute("type", "text/css"), e
        }
        var i = [],
            r = [],
            a = "insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";
        e.exports = t, e.exports.insertCss = t
    }, function (e, n, t) {
        var o;
        ! function (i) {
            function r(e, n) {
                if (e = e || "", n = n || {}, e instanceof r) return e;
                if (!(this instanceof r)) return new r(e, n);
                var t = a(e);
                this._originalInput = e, this._r = t.r, this._g = t.g, this._b = t.b, this._a = t.a, this._roundA = D(100 * this._a) / 100, this._format = n.format || t.format, this._gradientType = n.gradientType, this._r < 1 && (this._r = D(this._r)), this._g < 1 && (this._g = D(this._g)), this._b < 1 && (this._b = D(this._b)), this._ok = t.ok, this._tc_id = I++
            }
            
            function a(e) {
                var n = {
                        r: 0,
                        g: 0,
                        b: 0
                    },
                    t = 1,
                    o = null,
                    i = null,
                    r = null,
                    a = !1,
                    u = !1;
                return "string" == typeof e && (e = V(e)), "object" == typeof e && (B(e.r) && B(e.g) && B(e.b) ? (n = s(e.r, e.g, e.b), a = !0, u = "%" === String(e.r)
                    .substr(-1) ? "prgb" : "rgb") : B(e.h) && B(e.s) && B(e.v) ? (o = F(e.s), i = F(e.v), n = f(e.h, o, i), a = !0, u = "hsv") : B(e.h) && B(e.s) && B(e.l) && (o = F(e.s), r = F(e.l), n = l(e.h, o, r), a = !0, u = "hsl"), e.hasOwnProperty("a") && (t = e.a)), t = j(t), {
                    ok: a,
                    format: e.format || u,
                    r: q(255, W(n.r, 0)),
                    g: q(255, W(n.g, 0)),
                    b: q(255, W(n.b, 0)),
                    a: t
                }
            }
            
            function s(e, n, t) {
                return {
                    r: 255 * C(e, 255),
                    g: 255 * C(n, 255),
                    b: 255 * C(t, 255)
                }
            }
            
            function u(e, n, t) {
                e = C(e, 255), n = C(n, 255), t = C(t, 255);
                var o, i, r = W(e, n, t),
                    a = q(e, n, t),
                    s = (r + a) / 2;
                if (r == a) o = i = 0;
                else {
                    var u = r - a;
                    switch (i = s > .5 ? u / (2 - r - a) : u / (r + a), r) {
                    case e:
                        o = (n - t) / u + (n < t ? 6 : 0);
                        break;
                    case n:
                        o = (t - e) / u + 2;
                        break;
                    case t:
                        o = (e - n) / u + 4
                    }
                    o /= 6
                }
                return {
                    h: o,
                    s: i,
                    l: s
                }
            }
            
            function l(e, n, t) {
                function o(e, n, t) {
                    return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + 6 * (n - e) * t : t < .5 ? n : t < 2 / 3 ? e + (n - e) * (2 / 3 - t) * 6 : e
                }
                var i, r, a;
                if (e = C(e, 360), n = C(n, 100), t = C(t, 100), 0 === n) i = r = a = t;
                else {
                    var s = t < .5 ? t * (1 + n) : t + n - t * n,
                        u = 2 * t - s;
                    i = o(u, s, e + 1 / 3), r = o(u, s, e), a = o(u, s, e - 1 / 3)
                }
                return {
                    r: 255 * i,
                    g: 255 * r,
                    b: 255 * a
                }
            }
            
            function c(e, n, t) {
                e = C(e, 255), n = C(n, 255), t = C(t, 255);
                var o, i, r = W(e, n, t),
                    a = q(e, n, t),
                    s = r,
                    u = r - a;
                if (i = 0 === r ? 0 : u / r, r == a) o = 0;
                else {
                    switch (r) {
                    case e:
                        o = (n - t) / u + (n < t ? 6 : 0);
                        break;
                    case n:
                        o = (t - e) / u + 2;
                        break;
                    case t:
                        o = (e - n) / u + 4
                    }
                    o /= 6
                }
                return {
                    h: o,
                    s: i,
                    v: s
                }
            }
            
            function f(e, n, t) {
                e = 6 * C(e, 360), n = C(n, 100), t = C(t, 100);
                var o = i.floor(e),
                    r = e - o,
                    a = t * (1 - n),
                    s = t * (1 - r * n),
                    u = t * (1 - (1 - r) * n),
                    l = o % 6;
                return {
                    r: 255 * [t, s, a, a, u, t][l],
                    g: 255 * [u, t, t, s, a, a][l],
                    b: 255 * [a, a, u, t, t, s][l]
                }
            }
            
            function p(e, n, t, o) {
                var i = [P(D(e)
                    .toString(16)), P(D(n)
                    .toString(16)), P(D(t)
                    .toString(16))];
                return o && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
            }
            
            function h(e, n, t, o, i) {
                var r = [P(D(e)
                    .toString(16)), P(D(n)
                    .toString(16)), P(D(t)
                    .toString(16)), P(T(o))];
                return i && r[0].charAt(0) == r[0].charAt(1) && r[1].charAt(0) == r[1].charAt(1) && r[2].charAt(0) == r[2].charAt(1) && r[3].charAt(0) == r[3].charAt(1) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) + r[3].charAt(0) : r.join("")
            }
            
            function d(e, n, t, o) {
                return [P(T(o)), P(D(e)
                    .toString(16)), P(D(n)
                    .toString(16)), P(D(t)
                    .toString(16))].join("")
            }
            
            function g(e, n) {
                n = 0 === n ? 0 : n || 10;
                var t = r(e)
                    .toHsl();
                return t.s -= n / 100, t.s = O(t.s), r(t)
            }
            
            function b(e, n) {
                n = 0 === n ? 0 : n || 10;
                var t = r(e)
                    .toHsl();
                return t.s += n / 100, t.s = O(t.s), r(t)
            }
            
            function m(e) {
                return r(e)
                    .desaturate(100)
            }
            
            function y(e, n) {
                n = 0 === n ? 0 : n || 10;
                var t = r(e)
                    .toHsl();
                return t.l += n / 100, t.l = O(t.l), r(t)
            }
            
            function v(e, n) {
                n = 0 === n ? 0 : n || 10;
                var t = r(e)
                    .toRgb();
                return t.r = W(0, q(255, t.r - D(-n / 100 * 255))), t.g = W(0, q(255, t.g - D(-n / 100 * 255))), t.b = W(0, q(255, t.b - D(-n / 100 * 255))), r(t)
            }
            
            function x(e, n) {
                n = 0 === n ? 0 : n || 10;
                var t = r(e)
                    .toHsl();
                return t.l -= n / 100, t.l = O(t.l), r(t)
            }
            
            function w(e, n) {
                var t = r(e)
                    .toHsl(),
                    o = (t.h + n) % 360;
                return t.h = o < 0 ? 360 + o : o, r(t)
            }
            
            function k(e) {
                var n = r(e)
                    .toHsl();
                return n.h = (n.h + 180) % 360, r(n)
            }
            
            function _(e) {
                var n = r(e)
                    .toHsl(),
                    t = n.h;
                return [r(e), r({
                    h: (t + 120) % 360,
                    s: n.s,
                    l: n.l
                }), r({
                    h: (t + 240) % 360,
                    s: n.s,
                    l: n.l
                })]
            }
            
            function S(e) {
                var n = r(e)
                    .toHsl(),
                    t = n.h;
                return [r(e), r({
                    h: (t + 90) % 360,
                    s: n.s,
                    l: n.l
                }), r({
                    h: (t + 180) % 360,
                    s: n.s,
                    l: n.l
                }), r({
                    h: (t + 270) % 360,
                    s: n.s,
                    l: n.l
                })]
            }
            
            function z(e) {
                var n = r(e)
                    .toHsl(),
                    t = n.h;
                return [r(e), r({
                    h: (t + 72) % 360,
                    s: n.s,
                    l: n.l
                }), r({
                    h: (t + 216) % 360,
                    s: n.s,
                    l: n.l
                })]
            }
            
            function E(e, n, t) {
                n = n || 6, t = t || 30;
                var o = r(e)
                    .toHsl(),
                    i = 360 / t,
                    a = [r(e)];
                for (o.h = (o.h - (i * n >> 1) + 720) % 360; --n;) o.h = (o.h + i) % 360, a.push(r(o));
                return a
            }
            
            function M(e, n) {
                n = n || 6;
                for (var t = r(e)
                        .toHsv(), o = t.h, i = t.s, a = t.v, s = [], u = 1 / n; n--;) s.push(r({
                    h: o,
                    s: i,
                    v: a
                })), a = (a + u) % 1;
                return s
            }
            
            function j(e) {
                return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
            }
            
            function C(e, n) {
                A(e) && (e = "100%");
                var t = L(e);
                return e = q(n, W(0, parseFloat(e))), t && (e = parseInt(e * n, 10) / 100), i.abs(e - n) < 1e-6 ? 1 : e % n / parseFloat(n)
            }
            
            function O(e) {
                return q(1, W(0, e))
            }
            
            function H(e) {
                return parseInt(e, 16)
            }
            
            function A(e) {
                return "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e)
            }
            
            function L(e) {
                return "string" == typeof e && -1 != e.indexOf("%")
            }
            
            function P(e) {
                return 1 == e.length ? "0" + e : "" + e
            }
            
            function F(e) {
                return e <= 1 && (e = 100 * e + "%"), e
            }
            
            function T(e) {
                return i.round(255 * parseFloat(e))
                    .toString(16)
            }
            
            function R(e) {
                return H(e) / 255
            }
            
            function B(e) {
                return !!Z.CSS_UNIT.exec(e)
            }
            
            function V(e) {
                e = e.replace(N, "")
                    .replace($, "")
                    .toLowerCase();
                var n = !1;
                if (X[e]) e = X[e], n = !0;
                else if ("transparent" == e) return {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0,
                    format: "name"
                };
                var t;
                return (t = Z.rgb.exec(e)) ? {
                    r: t[1],
                    g: t[2],
                    b: t[3]
                } : (t = Z.rgba.exec(e)) ? {
                    r: t[1],
                    g: t[2],
                    b: t[3],
                    a: t[4]
                } : (t = Z.hsl.exec(e)) ? {
                    h: t[1],
                    s: t[2],
                    l: t[3]
                } : (t = Z.hsla.exec(e)) ? {
                    h: t[1],
                    s: t[2],
                    l: t[3],
                    a: t[4]
                } : (t = Z.hsv.exec(e)) ? {
                    h: t[1],
                    s: t[2],
                    v: t[3]
                } : (t = Z.hsva.exec(e)) ? {
                    h: t[1],
                    s: t[2],
                    v: t[3],
                    a: t[4]
                } : (t = Z.hex8.exec(e)) ? {
                    r: H(t[1]),
                    g: H(t[2]),
                    b: H(t[3]),
                    a: R(t[4]),
                    format: n ? "name" : "hex8"
                } : (t = Z.hex6.exec(e)) ? {
                    r: H(t[1]),
                    g: H(t[2]),
                    b: H(t[3]),
                    format: n ? "name" : "hex"
                } : (t = Z.hex4.exec(e)) ? {
                    r: H(t[1] + "" + t[1]),
                    g: H(t[2] + "" + t[2]),
                    b: H(t[3] + "" + t[3]),
                    a: R(t[4] + "" + t[4]),
                    format: n ? "name" : "hex8"
                } : !!(t = Z.hex3.exec(e)) && {
                    r: H(t[1] + "" + t[1]),
                    g: H(t[2] + "" + t[2]),
                    b: H(t[3] + "" + t[3]),
                    format: n ? "name" : "hex"
                }
            }
            
            function U(e) {
                var n, t;
                return e = e || {
                        level: "AA",
                        size: "small"
                    }, n = (e.level || "AA")
                    .toUpperCase(), t = (e.size || "small")
                    .toLowerCase(), "AA" !== n && "AAA" !== n && (n = "AA"), "small" !== t && "large" !== t && (t = "small"), {
                        level: n,
                        size: t
                    }
            }
            var N = /^\s+/,
                $ = /\s+$/,
                I = 0,
                D = i.round,
                q = i.min,
                W = i.max,
                G = i.random;
            r.prototype = {
                isDark: function () {
                    return this.getBrightness() < 128
                },
                isLight: function () {
                    return !this.isDark()
                },
                isValid: function () {
                    return this._ok
                },
                getOriginalInput: function () {
                    return this._originalInput
                },
                getFormat: function () {
                    return this._format
                },
                getAlpha: function () {
                    return this._a
                },
                getBrightness: function () {
                    var e = this.toRgb();
                    return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
                },
                getLuminance: function () {
                    var e, n, t, o, r, a, s = this.toRgb();
                    return e = s.r / 255, n = s.g / 255, t = s.b / 255, o = e <= .03928 ? e / 12.92 : i.pow((e + .055) / 1.055, 2.4), r = n <= .03928 ? n / 12.92 : i.pow((n + .055) / 1.055, 2.4), a = t <= .03928 ? t / 12.92 : i.pow((t + .055) / 1.055, 2.4), .2126 * o + .7152 * r + .0722 * a
                },
                setAlpha: function (e) {
                    return this._a = j(e), this._roundA = D(100 * this._a) / 100, this
                },
                toHsv: function () {
                    var e = c(this._r, this._g, this._b);
                    return {
                        h: 360 * e.h,
                        s: e.s,
                        v: e.v,
                        a: this._a
                    }
                },
                toHsvString: function () {
                    var e = c(this._r, this._g, this._b),
                        n = D(360 * e.h),
                        t = D(100 * e.s),
                        o = D(100 * e.v);
                    return 1 == this._a ? "hsv(" + n + ", " + t + "%, " + o + "%)" : "hsva(" + n + ", " + t + "%, " + o + "%, " + this._roundA + ")"
                },
                toHsl: function () {
                    var e = u(this._r, this._g, this._b);
                    return {
                        h: 360 * e.h,
                        s: e.s,
                        l: e.l,
                        a: this._a
                    }
                },
                toHslString: function () {
                    var e = u(this._r, this._g, this._b),
                        n = D(360 * e.h),
                        t = D(100 * e.s),
                        o = D(100 * e.l);
                    return 1 == this._a ? "hsl(" + n + ", " + t + "%, " + o + "%)" : "hsla(" + n + ", " + t + "%, " + o + "%, " + this._roundA + ")"
                },
                toHex: function (e) {
                    return p(this._r, this._g, this._b, e)
                },
                toHexString: function (e) {
                    return "#" + this.toHex(e)
                },
                toHex8: function (e) {
                    return h(this._r, this._g, this._b, this._a, e)
                },
                toHex8String: function (e) {
                    return "#" + this.toHex8(e)
                },
                toRgb: function () {
                    return {
                        r: D(this._r),
                        g: D(this._g),
                        b: D(this._b),
                        a: this._a
                    }
                },
                toRgbString: function () {
                    return 1 == this._a ? "rgb(" + D(this._r) + ", " + D(this._g) + ", " + D(this._b) + ")" : "rgba(" + D(this._r) + ", " + D(this._g) + ", " + D(this._b) + ", " + this._roundA + ")"
                },
                toPercentageRgb: function () {
                    return {
                        r: D(100 * C(this._r, 255)) + "%",
                        g: D(100 * C(this._g, 255)) + "%",
                        b: D(100 * C(this._b, 255)) + "%",
                        a: this._a
                    }
                },
                toPercentageRgbString: function () {
                    return 1 == this._a ? "rgb(" + D(100 * C(this._r, 255)) + "%, " + D(100 * C(this._g, 255)) + "%, " + D(100 * C(this._b, 255)) + "%)" : "rgba(" + D(100 * C(this._r, 255)) + "%, " + D(100 * C(this._g, 255)) + "%, " + D(100 * C(this._b, 255)) + "%, " + this._roundA + ")"
                },
                toName: function () {
                    return 0 === this._a ? "transparent" : !(this._a < 1) && (Y[p(this._r, this._g, this._b, !0)] || !1)
                },
                toFilter: function (e) {
                    var n = "#" + d(this._r, this._g, this._b, this._a),
                        t = n,
                        o = this._gradientType ? "GradientType = 1, " : "";
                    if (e) {
                        var i = r(e);
                        t = "#" + d(i._r, i._g, i._b, i._a)
                    }
                    return "progid:DXImageTransform.Microsoft.gradient(" + o + "startColorstr=" + n + ",endColorstr=" + t + ")"
                },
                toString: function (e) {
                    var n = !!e;
                    e = e || this._format;
                    var t = !1,
                        o = this._a < 1 && this._a >= 0;
                    return n || !o || "hex" !== e && "hex6" !== e && "hex3" !== e && "hex4" !== e && "hex8" !== e && "name" !== e ? ("rgb" === e && (t = this.toRgbString()), "prgb" === e && (t = this.toPercentageRgbString()), "hex" !== e && "hex6" !== e || (t = this.toHexString()), "hex3" === e && (t = this.toHexString(!0)), "hex4" === e && (t = this.toHex8String(!0)), "hex8" === e && (t = this.toHex8String()), "name" === e && (t = this.toName()), "hsl" === e && (t = this.toHslString()), "hsv" === e && (t = this.toHsvString()), t || this.toHexString()) : "name" === e && 0 === this._a ? this.toName() : this.toRgbString()
                },
                clone: function () {
                    return r(this.toString())
                },
                _applyModification: function (e, n) {
                    var t = e.apply(null, [this].concat([].slice.call(n)));
                    return this._r = t._r, this._g = t._g, this._b = t._b, this.setAlpha(t._a), this
                },
                lighten: function () {
                    return this._applyModification(y, arguments)
                },
                brighten: function () {
                    return this._applyModification(v, arguments)
                },
                darken: function () {
                    return this._applyModification(x, arguments)
                },
                desaturate: function () {
                    return this._applyModification(g, arguments)
                },
                saturate: function () {
                    return this._applyModification(b, arguments)
                },
                greyscale: function () {
                    return this._applyModification(m, arguments)
                },
                spin: function () {
                    return this._applyModification(w, arguments)
                },
                _applyCombination: function (e, n) {
                    return e.apply(null, [this].concat([].slice.call(n)))
                },
                analogous: function () {
                    return this._applyCombination(E, arguments)
                },
                complement: function () {
                    return this._applyCombination(k, arguments)
                },
                monochromatic: function () {
                    return this._applyCombination(M, arguments)
                },
                splitcomplement: function () {
                    return this._applyCombination(z, arguments)
                },
                triad: function () {
                    return this._applyCombination(_, arguments)
                },
                tetrad: function () {
                    return this._applyCombination(S, arguments)
                }
            }, r.fromRatio = function (e, n) {
                if ("object" == typeof e) {
                    var t = {};
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = "a" === o ? e[o] : F(e[o]));
                    e = t
                }
                return r(e, n)
            }, r.equals = function (e, n) {
                return !(!e || !n) && r(e)
                    .toRgbString() == r(n)
                    .toRgbString()
            }, r.random = function () {
                return r.fromRatio({
                    r: G(),
                    g: G(),
                    b: G()
                })
            }, r.mix = function (e, n, t) {
                t = 0 === t ? 0 : t || 50;
                var o = r(e)
                    .toRgb(),
                    i = r(n)
                    .toRgb(),
                    a = t / 100;
                return r({
                    r: (i.r - o.r) * a + o.r,
                    g: (i.g - o.g) * a + o.g,
                    b: (i.b - o.b) * a + o.b,
                    a: (i.a - o.a) * a + o.a
                })
            }, r.readability = function (e, n) {
                var t = r(e),
                    o = r(n);
                return (i.max(t.getLuminance(), o.getLuminance()) + .05) / (i.min(t.getLuminance(), o.getLuminance()) + .05)
            }, r.isReadable = function (e, n, t) {
                var o, i, a = r.readability(e, n);
                switch (i = !1, o = U(t), o.level + o.size) {
                case "AAsmall":
                case "AAAlarge":
                    i = a >= 4.5;
                    break;
                case "AAlarge":
                    i = a >= 3;
                    break;
                case "AAAsmall":
                    i = a >= 7
                }
                return i
            }, r.mostReadable = function (e, n, t) {
                var o, i, a, s, u = null,
                    l = 0;
                t = t || {}, i = t.includeFallbackColors, a = t.level, s = t.size;
                for (var c = 0; c < n.length; c++)(o = r.readability(e, n[c])) > l && (l = o, u = r(n[c]));
                return r.isReadable(e, u, {
                    level: a,
                    size: s
                }) || !i ? u : (t.includeFallbackColors = !1, r.mostReadable(e, ["#fff", "#000"], t))
            };
            var X = r.names = {
                    aliceblue: "f0f8ff",
                    antiquewhite: "faebd7",
                    aqua: "0ff",
                    aquamarine: "7fffd4",
                    azure: "f0ffff",
                    beige: "f5f5dc",
                    bisque: "ffe4c4",
                    black: "000",
                    blanchedalmond: "ffebcd",
                    blue: "00f",
                    blueviolet: "8a2be2",
                    brown: "a52a2a",
                    burlywood: "deb887",
                    burntsienna: "ea7e5d",
                    cadetblue: "5f9ea0",
                    chartreuse: "7fff00",
                    chocolate: "d2691e",
                    coral: "ff7f50",
                    cornflowerblue: "6495ed",
                    cornsilk: "fff8dc",
                    crimson: "dc143c",
                    cyan: "0ff",
                    darkblue: "00008b",
                    darkcyan: "008b8b",
                    darkgoldenrod: "b8860b",
                    darkgray: "a9a9a9",
                    darkgreen: "006400",
                    darkgrey: "a9a9a9",
                    darkkhaki: "bdb76b",
                    darkmagenta: "8b008b",
                    darkolivegreen: "556b2f",
                    darkorange: "ff8c00",
                    darkorchid: "9932cc",
                    darkred: "8b0000",
                    darksalmon: "e9967a",
                    darkseagreen: "8fbc8f",
                    darkslateblue: "483d8b",
                    darkslategray: "2f4f4f",
                    darkslategrey: "2f4f4f",
                    darkturquoise: "00ced1",
                    darkviolet: "9400d3",
                    deeppink: "ff1493",
                    deepskyblue: "00bfff",
                    dimgray: "696969",
                    dimgrey: "696969",
                    dodgerblue: "1e90ff",
                    firebrick: "b22222",
                    floralwhite: "fffaf0",
                    forestgreen: "228b22",
                    fuchsia: "f0f",
                    gainsboro: "dcdcdc",
                    ghostwhite: "f8f8ff",
                    gold: "ffd700",
                    goldenrod: "daa520",
                    gray: "808080",
                    green: "008000",
                    greenyellow: "adff2f",
                    grey: "808080",
                    honeydew: "f0fff0",
                    hotpink: "ff69b4",
                    indianred: "cd5c5c",
                    indigo: "4b0082",
                    ivory: "fffff0",
                    khaki: "f0e68c",
                    lavender: "e6e6fa",
                    lavenderblush: "fff0f5",
                    lawngreen: "7cfc00",
                    lemonchiffon: "fffacd",
                    lightblue: "add8e6",
                    lightcoral: "f08080",
                    lightcyan: "e0ffff",
                    lightgoldenrodyellow: "fafad2",
                    lightgray: "d3d3d3",
                    lightgreen: "90ee90",
                    lightgrey: "d3d3d3",
                    lightpink: "ffb6c1",
                    lightsalmon: "ffa07a",
                    lightseagreen: "20b2aa",
                    lightskyblue: "87cefa",
                    lightslategray: "789",
                    lightslategrey: "789",
                    lightsteelblue: "b0c4de",
                    lightyellow: "ffffe0",
                    lime: "0f0",
                    limegreen: "32cd32",
                    linen: "faf0e6",
                    magenta: "f0f",
                    maroon: "800000",
                    mediumaquamarine: "66cdaa",
                    mediumblue: "0000cd",
                    mediumorchid: "ba55d3",
                    mediumpurple: "9370db",
                    mediumseagreen: "3cb371",
                    mediumslateblue: "7b68ee",
                    mediumspringgreen: "00fa9a",
                    mediumturquoise: "48d1cc",
                    mediumvioletred: "c71585",
                    midnightblue: "191970",
                    mintcream: "f5fffa",
                    mistyrose: "ffe4e1",
                    moccasin: "ffe4b5",
                    navajowhite: "ffdead",
                    navy: "000080",
                    oldlace: "fdf5e6",
                    olive: "808000",
                    olivedrab: "6b8e23",
                    orange: "ffa500",
                    orangered: "ff4500",
                    orchid: "da70d6",
                    palegoldenrod: "eee8aa",
                    palegreen: "98fb98",
                    paleturquoise: "afeeee",
                    palevioletred: "db7093",
                    papayawhip: "ffefd5",
                    peachpuff: "ffdab9",
                    peru: "cd853f",
                    pink: "ffc0cb",
                    plum: "dda0dd",
                    powderblue: "b0e0e6",
                    purple: "800080",
                    rebeccapurple: "663399",
                    red: "f00",
                    rosybrown: "bc8f8f",
                    royalblue: "4169e1",
                    saddlebrown: "8b4513",
                    salmon: "fa8072",
                    sandybrown: "f4a460",
                    seagreen: "2e8b57",
                    seashell: "fff5ee",
                    sienna: "a0522d",
                    silver: "c0c0c0",
                    skyblue: "87ceeb",
                    slateblue: "6a5acd",
                    slategray: "708090",
                    slategrey: "708090",
                    snow: "fffafa",
                    springgreen: "00ff7f",
                    steelblue: "4682b4",
                    tan: "d2b48c",
                    teal: "008080",
                    thistle: "d8bfd8",
                    tomato: "ff6347",
                    turquoise: "40e0d0",
                    violet: "ee82ee",
                    wheat: "f5deb3",
                    white: "fff",
                    whitesmoke: "f5f5f5",
                    yellow: "ff0",
                    yellowgreen: "9acd32"
                },
                Y = r.hexNames = function (e) {
                    var n = {};
                    for (var t in e) e.hasOwnProperty(t) && (n[e[t]] = t);
                    return n
                }(X),
                Z = function () {
                    var e = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
                        n = "[\\s|\\(]+(" + e + ")[,|\\s]+(" + e + ")[,|\\s]+(" + e + ")\\s*\\)?",
                        t = "[\\s|\\(]+(" + e + ")[,|\\s]+(" + e + ")[,|\\s]+(" + e + ")[,|\\s]+(" + e + ")\\s*\\)?";
                    return {
                        CSS_UNIT: new RegExp(e),
                        rgb: new RegExp("rgb" + n),
                        rgba: new RegExp("rgba" + t),
                        hsl: new RegExp("hsl" + n),
                        hsla: new RegExp("hsla" + t),
                        hsv: new RegExp("hsv" + n),
                        hsva: new RegExp("hsva" + t),
                        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                    }
                }();
            void 0 !== e && e.exports ? e.exports = r : void 0 !== (o = function () {
                return r
            }.call(n, t, n, e)) && (e.exports = o)
        }(Math)
    }, function (e, n) {
        /*!
         * screenfull
         * v5.0.0 - 2019-09-09
         * (c) Sindre Sorhus; MIT License
         */
        ! function () {
            "use strict";
            var n = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
                t = void 0 !== e && e.exports,
                o = function () {
                    for (var e, t = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], o = 0, i = t.length, r = {}; o < i; o++)
                        if ((e = t[o]) && e[1] in n) {
                            for (o = 0; o < e.length; o++) r[t[0][o]] = e[o];
                            return r
                        } return !1
                }(),
                i = {
                    change: o.fullscreenchange,
                    error: o.fullscreenerror
                },
                r = {
                    request: function (e) {
                        return new Promise(function (t, i) {
                            var r = function () {
                                this.off("change", r), t()
                            }.bind(this);
                            this.on("change", r), e = e || n.documentElement, Promise.resolve(e[o.requestFullscreen]())
                                .catch(i)
                        }.bind(this))
                    },
                    exit: function () {
                        return new Promise(function (e, t) {
                            if (!this.isFullscreen) return void e();
                            var i = function () {
                                this.off("change", i), e()
                            }.bind(this);
                            this.on("change", i), Promise.resolve(n[o.exitFullscreen]())
                                .catch(t)
                        }.bind(this))
                    },
                    toggle: function (e) {
                        return this.isFullscreen ? this.exit() : this.request(e)
                    },
                    onchange: function (e) {
                        this.on("change", e)
                    },
                    onerror: function (e) {
                        this.on("error", e)
                    },
                    on: function (e, t) {
                        var o = i[e];
                        o && n.addEventListener(o, t, !1)
                    },
                    off: function (e, t) {
                        var o = i[e];
                        o && n.removeEventListener(o, t, !1)
                    },
                    raw: o
                };
            if (!o) return void(t ? e.exports = {
                isEnabled: !1
            } : window.screenfull = {
                isEnabled: !1
            });
            Object.defineProperties(r, {
                isFullscreen: {
                    get: function () {
                        return Boolean(n[o.fullscreenElement])
                    }
                },
                element: {
                    enumerable: !0,
                    get: function () {
                        return n[o.fullscreenElement]
                    }
                },
                isEnabled: {
                    enumerable: !0,
                    get: function () {
                        return Boolean(n[o.fullscreenEnabled])
                    }
                }
            }), t ? e.exports = r : window.screenfull = r
        }()
    }, function (e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = t(17),
            i = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o);
        n.default = i.default, e.exports = n.default
    }, function (e, n, t) {
        "use strict";
        
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        
        function i(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = function () {
                function e(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var o = n[t];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (n, t, o) {
                    return t && e(n.prototype, t), o && e(n, o), n
                }
            }(),
            a = t(0),
            s = o(a),
            u = t(23),
            l = o(u),
            c = t(9),
            f = o(c),
            p = t(1),
            h = t(24),
            d = t(72),
            g = t(74),
            b = t(77),
            m = t(15),
            y = o(m),
            v = t(79),
            x = function () {
                function e(n) {
                    i(this, e), this.opts = n, this.hasRoot = void 0 !== n.root, n.width = n.width || 300, n.root = n.root || document.body, n.align = n.align || "left", n.opacity = n.opacity || 1, n.barMode = n.barMode || "offset", n.panelMode = n.panelMode || "inner", n.pollRateMS = n.pollRateMS || 100, n.open = n.open || !1;
                    var t = n.theme;
                    void 0 === n.theme && (t = f.default.dark), (0, l.default)(n.theme) && (void 0 === f.default[n.theme] ? (console.error("There is no theme preset with the name '" + n.theme + "'! Defaulting to dark theme."), t = f.default.dark) : t = f.default[n.theme]), p.theme.Set(t), this._ConstructElements(), this._LoadStyles(), this.componentManager = new h.ComponentManager, this.loadedComponents = [], this._UpdateComponents()
                }
                return r(e, [{
                    key: "_LoadStyles",
                    value: function () {
                        var e = function (e) {
                            var n = document.createElement("style");
                            n.setAttribute("type", "text/css"), n.setAttribute("rel", "stylesheet"), n.setAttribute("href", e), document.getElementsByTagName("head")[0].appendChild(n)
                        };
                        e("//cdn.jsdelivr.net/font-hack/2.019/css/hack.min.css"), p.theme.font ? (p.theme.font.fontURL && e(p.theme.font.fontURL), p.theme.font.fontFamily && (0, s.default)(this.container, "font-family", p.theme.font.fontFamily), p.theme.font.fontSize && (0, s.default)(this.container, "font-size", p.theme.font.fontSize), p.theme.font.fontWeight && (0, s.default)(this.container, "font-weight", p.theme.font.fontWeight)) : (0, s.default)(this.container, "font-family", "'Hack', monospace")
                    }
                }, {
                    key: "_ConstructElements",
                    value: function () {
                        var e = this;
                        this.container = document.createElement("div"), this.container.classList.add(v["guify-container"]);
                        var n = {};
                        "overlay" != this.opts.barMode && "above" != this.opts.barMode && "none" != this.opts.barMode || (n.position = "absolute"), this.hasRoot && "above" == this.opts.barMode && (n.top = "-" + p.theme.sizing.menuBarHeight), (0, s.default)(this.container, n), this.opts.root.insertBefore(this.container, this.opts.root.childNodes[0]), "none" !== this.opts.barMode && (this.bar = new d.MenuBar(this.container, this.opts), this.bar.addListener("ontogglepanel", function () {
                            e.panel.ToggleVisible()
                        }), this.bar.addListener("onfullscreenrequested", function () {
                            e.ToggleFullscreen()
                        })), this.panel = new g.Panel(this.container, this.opts), "none" === this.opts.barMode || !0 === this.opts.open ? this.panel.SetVisible(!0) : this.panel.SetVisible(!1), this.toaster = new b.ToastArea(this.container, this.opts)
                    }
                }, {
                    key: "_UpdateComponents",
                    value: function () {
                        var e = this;
                        this.loadedComponents.forEach(function (e) {
                            e.binding && e.binding.object[e.binding.property] != e.oldValue && (e.SetValue(e.binding.object[e.binding.property]), e.oldValue = e.binding.object[e.binding.property])
                        }), setTimeout(function () {
                            window.requestAnimationFrame(function () {
                                e._UpdateComponents()
                            })
                        }, this.opts.pollRateMS)
                    }
                }, {
                    key: "Register",
                    value: function (e) {
                        var n = this,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!Array.isArray(e)) {
                            var o = Object.assign(e, t);
                            return this._Register(o)
                        }
                        e.forEach(function (e) {
                            var o = Object.assign(e, t);
                            n._Register(o)
                        })
                    }
                }, {
                    key: "Remove",
                    value: function (e) {
                        e.Remove(), this.loadedComponents = this.loadedComponents.filter(function (n) {
                            return n !== e
                        })
                    }
                }, {
                    key: "_Register",
                    value: function (e) {
                        if (e.object && e.property && void 0 === e.object[e.property]) throw new Error("Object " + e.object + " has no property '" + e.property + "'");
                        e.object && e.property && (e.initial = e.object[e.property]);
                        var n = this.panel.panel;
                        if (e.folder) {
                            var t = this.loadedComponents.find(function (n) {
                                return "folder" === n.opts.type && n.opts.label === e.folder
                            });
                            if (!t) throw new Error("No folder exists with the name " + e.folder);
                            n = t.folderContainer
                        }
                        var o = this.componentManager.Create(n, e);
                        return e.object && e.property && (o.binding = {
                            object: e.object,
                            property: e.property
                        }), o.on && (o.on("initialized", function (n) {
                            e.onInitialize && e.onInitialize(n)
                        }), o.on("input", function (n) {
                            e.object && e.property && (e.object[e.property] = n), e.onChange && e.onChange(n)
                        })), this.loadedComponents.push(o), o
                    }
                }, {
                    key: "Toast",
                    value: function (e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e3,
                            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        this.toaster.CreateToast(e, n, t)
                    }
                }, {
                    key: "ToggleFullscreen",
                    value: function () {
                        y.default.isFullscreen ? y.default.exit() : (console.log("Request fullscreen"), y.default.request(this.opts.root))
                    }
                }]), e
            }();
        n.default = x, e.exports = n.default
    }, function (e, n) {
        var t = null,
            o = ["Webkit", "Moz", "O", "ms"];
        e.exports = function (e) {
            t || (t = document.createElement("div"));
            var n = t.style;
            if (e in n) return e;
            for (var i = e.charAt(0)
                    .toUpperCase() + e.slice(1), r = o.length; r >= 0; r--) {
                var a = o[r] + i;
                if (a in n) return a
            }
            return !1
        }
    }, function (e, n, t) {
        function o(e) {
            return i(e)
                .replace(/\s(\w)/g, function (e, n) {
                    return n.toUpperCase()
                })
        }
        var i = t(20);
        e.exports = o
    }, function (e, n, t) {
        function o(e) {
            return i(e)
                .replace(/[\W_]+(.|$)/g, function (e, n) {
                    return n ? " " + n : ""
                })
                .trim()
        }
        var i = t(21);
        e.exports = o
    }, function (e, n) {
        function t(e) {
            return r.test(e) ? e.toLowerCase() : a.test(e) ? (o(e) || e)
                .toLowerCase() : s.test(e) ? i(e)
                .toLowerCase() : e.toLowerCase()
        }
        
        function o(e) {
            return e.replace(u, function (e, n) {
                return n ? " " + n : ""
            })
        }
        
        function i(e) {
            return e.replace(l, function (e, n, t) {
                return n + " " + t.toLowerCase()
                    .split("")
                    .join(" ")
            })
        }
        e.exports = t;
        var r = /\s/,
            a = /(_|-|\.|:)/,
            s = /([a-z][A-Z]|[A-Z][a-z])/,
            u = /[\W_]+(.|$)/g,
            l = /(.)([A-Z]+)/g
    }, function (e, n) {
        var t = {
            animationIterationCount: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridColumn: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            stopOpacity: !0,
            strokeDashoffset: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        };
        e.exports = function (e, n) {
            return "number" != typeof n || t[e] ? n : n + "px"
        }
    }, function (e, n, t) {
        "use strict";
        var o = String.prototype.valueOf,
            i = function (e) {
                try {
                    return o.call(e), !0
                } catch (e) {
                    return !1
                }
            },
            r = Object.prototype.toString,
            a = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
        e.exports = function (e) {
            return "string" == typeof e || "object" == typeof e && (a ? i(e) : "[object String]" === r.call(e))
        }
    }, function (e, n, t) {
        "use strict";
        
        function o(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.ComponentManager = void 0;
        var i = function () {
                function e(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var o = n[t];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (n, t, o) {
                    return t && e(n.prototype, t), o && e(n, o), n
                }
            }(),
            r = t(25),
            a = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r),
            s = t(1);
        n.ComponentManager = function () {
            function e() {
                o(this, e), this.uuid = (0, a.default)(), this.components = {
                    title: "Flux v11 By Aloxx",
                    range: t(29),
                    button: t(46),
                    checkbox: t(48),
                    select: t(50),
                    text: t(52),
                    color: t(53),
                    folder: t(65),
                    file: t(67),
                    display: t(69),
                    interval: t(70)
                }
            }
            return i(e, [{
                key: "Create",
                value: function (e, n) {
                    if (void 0 === this.components[n.type]) throw new Error("No component type named '" + n.type + "' exists.");
                    var t = new this.components[n.type](e, n, s.theme, this.uuid);
                    return Object.assign(t, {
                        Remove: function () {
                            this.container.parentNode.removeChild(this.container)
                        }
                    }), t
                }
            }]), e
        }()
    }, function (e, n, t) {
        function o(e, n, t) {
            var o = n && t || 0;
            "string" == typeof e && (n = "binary" === e ? new Array(16) : null, e = null), e = e || {};
            var a = e.random || (e.rng || i)();
            if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, n)
                for (var s = 0; s < 16; ++s) n[o + s] = a[s];
            return n || r(a)
        }
        var i = t(26),
            r = t(27);
        e.exports = o
    }, function (e, n) {
        var t = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (t) {
            var o = new Uint8Array(16);
            e.exports = function () {
                return t(o), o
            }
        } else {
            var i = new Array(16);
            e.exports = function () {
                for (var e, n = 0; n < 16; n++) 0 == (3 & n) && (e = 4294967296 * Math.random()), i[n] = e >>> ((3 & n) << 3) & 255;
                return i
            }
        }
    }, function (e, n) {
        function t(e, n) {
            var t = n || 0,
                i = o;
            return [i[e[t++]], i[e[t++]], i[e[t++]], i[e[t++]], "-", i[e[t++]], i[e[t++]], "-", i[e[t++]], i[e[t++]], "-", i[e[t++]], i[e[t++]], "-", i[e[t++]], i[e[t++]], i[e[t++]], i[e[t++]], i[e[t++]], i[e[t++]]].join("")
        }
        for (var o = [], i = 0; i < 256; ++i) o[i] = (i + 256)
            .toString(16)
            .substr(1);
        e.exports = t
    }, function (e, n, t) {
        "use strict";
        
        function o(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t(0),
            r = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            a = function e(n, i, a) {
                o(this, e), this.opts = i, this.container = t(2)(n, i.label, a), (0, r.default)(this.container, {});
                var s = this.container.appendChild(document.createElement("div"));
                (0, r.default)(s, {
                    "box-sizing": "border-box",
                    width: "100%",
                    display: "inline-block",
                    height: a.sizing.componentHeight,
                    verticalAlign: "top"
                });
                var u = s.appendChild(document.createElement("div"));
                u.innerHTML = "&#9632; " + i.label + " &#9632;", (0, r.default)(u, {
                    display: "inline-block",
                    verticalAlign: "sub",
                    height: a.sizing.componentHeight,
                    "line-height": a.sizing.componentHeight,
                    "padding-left": "5px",
                    "padding-right": "5px",
                    "background-color": a.colors.textPrimary,
                    color: a.colors.panelBackground
                })
            };
        n.default = a, e.exports = n.default
    }, function (e, n, t) {
        "use strict";
        
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        
        function i(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        
        function r(e, n) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != typeof n && "function" != typeof n ? e : n
        }
        
        function a(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            e.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = function () {
                function e(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var o = n[t];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (n, t, o) {
                    return t && e(n.prototype, t), o && e(n, o), n
                }
            }(),
            u = t(4),
            l = o(u),
            c = t(0),
            f = o(c),
            p = t(10),
            h = o(p),
            d = t(30),
            g = function (e) {
                function n(e, o, a, s) {
                    i(this, n);
                    var u = r(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    if (u.opts = o, u.container = t(2)(e, o.label, a), t(5)(u.container, o.label, a), o.step && o.steps) throw new Error("Cannot specify both step and steps. Got step = " + o.step + ", steps = ", o.steps);
                    if (u.input = u.container.appendChild(document.createElement("input")), u.input.type = "range", u.input.className = d["guify-range"], o.label && u.input.setAttribute("aria-label", o.label + " input"), "log" === o.scale) {
                        if (o.max = (0, h.default)(o.max) ? o.max : 100, o.min = (0, h.default)(o.min) ? o.min : .1, o.min * o.max <= 0) throw new Error("Log range min/max must have the same sign and not equal zero. Got min = " + o.min + ", max = " + o.max);
                        if (u.logmin = o.min, u.logmax = o.max, u.logsign = o.min > 0 ? 1 : -1, u.logmin = Math.abs(u.logmin), u.logmax = Math.abs(u.logmax), o.min = 0, o.max = 100, (0, h.default)(o.step)) throw new Error("Log may only use steps (integer number of steps), not a step value. Got step =" + o.step);
                        if (o.step = 1, o.initial = u.InverseScaleValue((0, h.default)(o.initial) ? o.initial : scaleValue(.5 * (o.min + o.max))), o.initial * u.InverseScaleValue(o.max) <= 0) throw new Error("Log range initial value must have the same sign as min/max and must not equal zero. Got initial value = " + o.initial)
                    } else o.max = (0, h.default)(o.max) ? o.max : 100, o.min = (0, h.default)(o.min) ? o.min : 0, o.step = (0, h.default)(o.step) ? o.step : .01, o.initial = (0, h.default)(o.initial) ? o.initial : .5 * (o.min + o.max);
                    (0, h.default)(o.steps) && (o.step = (0, h.default)(o.steps) ? (o.max - o.min) / o.steps : o.step);
                    var l = Math.round((o.initial - o.min) / o.step);
                    return o.initial = o.min + o.step * l, u.input.min = o.min, u.input.max = o.max, u.input.step = o.step, u.input.value = o.initial, (0, f.default)(u.input, {
                        width: "calc(100% - " + a.sizing.labelWidth + " - 16% - 0.5em)"
                    }), u.valueComponent = t(6)(u.container, u.ScaleValue(o.initial), a, "16%"), o.label && u.valueComponent.setAttribute("aria-label", o.label + " value"), setTimeout(function () {
                        u.emit("initialized", parseFloat(u.input.value))
                    }), u.userIsModifying = !1, u.input.addEventListener("focus", function () {
                        u.focused = !0
                    }), u.input.addEventListener("blur", function () {
                        u.focused = !1
                    }), u.input.addEventListener("mouseup", function () {
                        u.input.blur()
                    }), u.input.oninput = function (e) {
                        var n = u.ScaleValue(parseFloat(e.target.value));
                        u.valueComponent.value = u.FormatNumber(n), u.lastValue = n, u.emit("input", n)
                    }, u.valueComponent.onchange = function () {
                        var e = u.valueComponent.value;
                        if (Number(parseFloat(e)) == e) {
                            var n = parseFloat(e);
                            n = Math.min(Math.max(n, o.min), o.max), n = Math.ceil((n - o.min) / o.step) * o.step + o.min, u.valueComponent.value = n, u.emit("input", n)
                        } else u.valueComponent.value = u.lastValue
                    }, u
                }
                return a(n, e), s(n, [{
                    key: "ScaleValue",
                    value: function (e) {
                        return "log" === this.opts.scale ? this.logsign * Math.exp(Math.log(this.logmin) + (Math.log(this.logmax) - Math.log(this.logmin)) * e / 100) : e
                    }
                }, {
                    key: "InverseScaleValue",
                    value: function (e) {
                        return "log" === this.opts.scale ? 100 * (Math.log(e * this.logsign) - Math.log(this.logmin)) / (Math.log(this.logmax) - Math.log(this.logmin)) : e
                    }
                }, {
                    key: "SetValue",
                    value: function (e) {
                        !0 !== this.focused && (this.valueComponent.value = this.FormatNumber(e), this.input.value = this.InverseScaleValue(e), this.lastValue = this.input.value)
                    }
                }, {
                    key: "GetValue",
                    value: function () {
                        return this.input.value
                    }
                }, {
                    key: "FormatNumber",
                    value: function (e) {
                        return e.toFixed(3)
                            .replace(/\.?0*$/, "")
                    }
                }]), n
            }(l.default);
        n.default = g, e.exports = n.default
    }, function (e, n, t) {
        "use strict";
        var o = function (e, n) {
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }(["\n\ninput[type=range].guify-range {\n    -webkit-appearance: none;\n    width: 100%;\n    height: ", ";\n    margin: 0px 0;\n    padding: 0;\n    display: inline-block;\n}\n\n/* Remove outlines since we'll be adding our own */\ninput[type=range].guify-range:focus {\n    outline: none;\n}\ninput[type=range].guify-range::-moz-focus-outer {\n    border: 0;\n}\n\n/* Webkit */\ninput[type=range].guify-range::-webkit-slider-runnable-track {\n    width: 100%;\n    height: ", ";\n    cursor: ew-resize;\n    background: ", ";\n}\ninput[type=range].guify-range::-webkit-slider-thumb {\n    height: ", ";\n    width: 10px;\n    background: ", ";\n    cursor: ew-resize;\n    -webkit-appearance: none;\n    margin-top: 0px;\n}\ninput[type=range].guify-range:focus::-webkit-slider-runnable-track {\n    background: ", ";\n    outline: none;\n}\n\n/* Gecko */\ninput[type=range].guify-range::-moz-range-track {\n    width: 100%;\n    height: ", ";\n    cursor: ew-resize;\n    background: ", ";\n}\ninput[type=range].guify-range:focus::-moz-range-track {\n    background: ", ";\n}\ninput[type=range].guify-range::-moz-range-thumb {\n    height: ", ";\n    width: 10px;\n    background: ", ";\n    cursor: ew-resize;\n    border: none;\n    border-radius: 0;\n}\n\n/* IE */\ninput[type=range].guify-range::-ms-track {\n    width: 100%;\n    height: ", ";\n    cursor: ew-resize;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n}\ninput[type=range].guify-range::-ms-fill-lower {\n    background: ", ";\n}\ninput[type=range].guify-range::-ms-fill-upper {\n    background: ", ";\n}\ninput[type=range].guify-range:focus::-ms-fill-lower {\n    background: ", ";\n}\ninput[type=range].guify-range:focus::-ms-fill-upper {\n    background: ", ";\n}\ninput[type=range].guify-range::-ms-thumb {\n    width: 10px;\n    border-radius: 0px;\n    background: ", ";\n    cursor: ew-resize;\n    height: ", ";\n}\ninput[type=range].guify-range:focus::-ms-fill-lower {\n    background: ", ";\n    outline: none;\n}\ninput[type=range].guify-range:focus::-ms-fill-upper {\n    background: ", ";\n    outline: none;\n}\n\n"], ["\n\ninput[type=range].guify-range {\n    -webkit-appearance: none;\n    width: 100%;\n    height: ", ";\n    margin: 0px 0;\n    padding: 0;\n    display: inline-block;\n}\n\n/* Remove outlines since we'll be adding our own */\ninput[type=range].guify-range:focus {\n    outline: none;\n}\ninput[type=range].guify-range::-moz-focus-outer {\n    border: 0;\n}\n\n/* Webkit */\ninput[type=range].guify-range::-webkit-slider-runnable-track {\n    width: 100%;\n    height: ", ";\n    cursor: ew-resize;\n    background: ", ";\n}\ninput[type=range].guify-range::-webkit-slider-thumb {\n    height: ", ";\n    width: 10px;\n    background: ", ";\n    cursor: ew-resize;\n    -webkit-appearance: none;\n    margin-top: 0px;\n}\ninput[type=range].guify-range:focus::-webkit-slider-runnable-track {\n    background: ", ";\n    outline: none;\n}\n\n/* Gecko */\ninput[type=range].guify-range::-moz-range-track {\n    width: 100%;\n    height: ", ";\n    cursor: ew-resize;\n    background: ", ";\n}\ninput[type=range].guify-range:focus::-moz-range-track {\n    background: ", ";\n}\ninput[type=range].guify-range::-moz-range-thumb {\n    height: ", ";\n    width: 10px;\n    background: ", ";\n    cursor: ew-resize;\n    border: none;\n    border-radius: 0;\n}\n\n/* IE */\ninput[type=range].guify-range::-ms-track {\n    width: 100%;\n    height: ", ";\n    cursor: ew-resize;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n}\ninput[type=range].guify-range::-ms-fill-lower {\n    background: ", ";\n}\ninput[type=range].guify-range::-ms-fill-upper {\n    background: ", ";\n}\ninput[type=range].guify-range:focus::-ms-fill-lower {\n    background: ", ";\n}\ninput[type=range].guify-range:focus::-ms-fill-upper {\n    background: ", ";\n}\ninput[type=range].guify-range::-ms-thumb {\n    width: 10px;\n    border-radius: 0px;\n    background: ", ";\n    cursor: ew-resize;\n    height: ", ";\n}\ninput[type=range].guify-range:focus::-ms-fill-lower {\n    background: ", ";\n    outline: none;\n}\ninput[type=range].guify-range:focus::-ms-fill-upper {\n    background: ", ";\n    outline: none;\n}\n\n"]),
            i = t(1),
            r = t(3),
            a = i.theme.colors.componentBackground,
            s = i.theme.colors.componentForeground,
            u = i.theme.colors.componentActive;
        e.exports = r(o, i.theme.sizing.componentHeight, i.theme.sizing.componentHeight, a, i.theme.sizing.componentHeight, s, u, i.theme.sizing.componentHeight, a, u, i.theme.sizing.componentHeight, s, i.theme.sizing.componentHeight, a, a, u, u, s, i.theme.sizing.componentHeight, u, u)
    }, function (e, n, t) {
        "use strict";
        (function (n) {
            function o() {
                var e = Array.prototype.slice.call(arguments),
                    t = i.apply(null, e);
                return n.document && r(i.getCss(t)), t
            }
            var i = t(33),
                r = t(13);
            e.exports = o
        })
        .call(n, t(32))
    }, function (e, n) {
        var t;
        t = function () {
            return this
        }();
        try {
            t = t || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (t = window)
        }
        e.exports = t
    }, function (e, n, t) {
        "use strict";
        var o = t(34);
        e.exports = o(), e.exports.csjs = o, e.exports.noScope = o({
            noscope: !0
        }), e.exports.getCss = t(12)
    }, function (e, n, t) {
        "use strict";
        e.exports = t(35)
    }, function (e, n, t) {
        "use strict";
        
        function o(e) {
            return u(e) ? e.selector : e
        }
        
        function i(e, n) {
            return e.map(function (e, t) {
                    return t !== n.length ? e + n[t] : e
                })
                .join("")
        }
        
        function r(e, n) {
            return Object.keys(e)
                .reduce(function (t, o) {
                    return n[o] || (t[o] = e[o]), t
                }, {})
        }
        var a = t(36),
            s = t(7),
            u = s.isComposition,
            l = s.ignoreComposition,
            c = t(37),
            f = t(38),
            p = t(11),
            h = t(43);
        e.exports = function (e) {
            e = void 0 === e ? {} : e;
            var n = void 0 !== e.noscope && e.noscope;
            return function (e, t) {
                for (var t = Array(arguments.length - 1), s = 1; s < arguments.length; s++) t[s - 1] = arguments[s];
                var u = i(e, t.map(o)),
                    d = l(t),
                    g = n ? h(u) : f(u, d),
                    b = a(g.css),
                    m = r(g.classes, d),
                    y = r(g.keyframes, d),
                    v = b.compositions,
                    x = c(m, y, v);
                return Object.defineProperty(x, p, {
                    enumerable: !1,
                    configurable: !1,
                    writeable: !1,
                    value: b.css
                })
            }
        }
    }, function (e, n, t) {
        "use strict";
        
        function o(e) {
            return e.split(",")
                .map(i)
        }
        
        function i(e) {
            var n = e.trim();
            return "." === n[0] ? n.substr(1) : n
        }
        var r = (t(7)
            .makeComposition, /\.([^\s]+)(\s+)(extends\s+)(\.[^{]+)/g);
        e.exports = function (e) {
            function n(e, n) {
                var t = i(n[1]),
                    r = n[3],
                    a = n[4],
                    s = n.index + n[1].length + n[2].length,
                    u = r.length + a.length;
                return e.css = e.css.slice(0, s) + " " + e.css.slice(s + u + 1), o(a)
                    .forEach(function (n) {
                        e.compositions[t] || (e.compositions[t] = {}), e.compositions[n] || (e.compositions[n] = {}), e.compositions[t][n] = e.compositions[n]
                    }), e
            }
            for (var t, a = []; t = r.exec(e);) a.unshift(t);
            return a.reduce(n, {
                css: e,
                compositions: {}
            })
        }
    }, function (e, n, t) {
        "use strict";
        
        function o(e) {
            function n(e) {
                return Object.keys(e)
                    .forEach(function (i) {
                        t[i] || (t[i] = !0, o.push(i), n(e[i]))
                    })
            }
            var t = {},
                o = [];
            return n(e), o
        }
        var i = t(7)
            .makeComposition;
        e.exports = function (e, n, t) {
            var r = Object.keys(n)
                .reduce(function (e, t) {
                    var o = n[t];
                    return e[o] = i([t], [o], !0), e
                }, {});
            return Object.keys(e)
                .reduce(function (n, r) {
                    var a = e[r],
                        s = t[r],
                        u = s ? o(s) : [],
                        l = [r].concat(u),
                        c = l.map(function (n) {
                            return e[n] ? e[n] : n
                        });
                    return n[a] = i(l, c), n
                }, r)
        }
    }, function (e, n, t) {
        "use strict";
        
        function o(e, n) {
            function t(e, t) {
                function i(i, r, a) {
                    var s = n[a] ? a : o(a);
                    return e[t][s] = a, r + s
                }
                var r = a[t];
                return {
                    css: e.css.replace(r, i),
                    keyframes: e.keyframes,
                    classes: e.classes
                }
            }
            var o = i(e),
                a = {
                    classes: s,
                    keyframes: u
                },
                l = Object.keys(a)
                .reduce(t, {
                    css: e,
                    keyframes: {},
                    classes: {}
                });
            return r(l)
        }
        var i = t(39),
            r = t(42),
            a = t(8),
            s = a.classRegex,
            u = a.keyframesRegex;
        e.exports = o
    }, function (e, n, t) {
        "use strict";
        var o = t(40),
            i = t(41);
        e.exports = function (e) {
            var n = o(i(e));
            return function (e) {
                return e + "_" + n
            }
        }
    }, function (e, n, t) {
        "use strict";
        e.exports = function (e) {
            if (0 === e) return "0";
            for (var n = ""; e > 0;) n = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [e % 62] + n, e = Math.floor(e / 62);
            return n
        }
    }, function (e, n, t) {
        "use strict";
        e.exports = function (e) {
            for (var n = 5381, t = e.length; t;) n = 33 * n ^ e.charCodeAt(--t);
            return n >>> 0
        }
    }, function (e, n, t) {
        function o(e) {
            var n = Object.keys(e.keyframes)
                .reduce(function (n, t) {
                    return n[e.keyframes[t]] = t, n
                }, {}),
                t = Object.keys(n);
            if (t.length) {
                var o = "((?:animation|animation-name)\\s*:[^};]*)(" + t.join("|") + ")([;\\s])" + i,
                    r = new RegExp(o, "g");
                return {
                    css: e.css.replace(r, function (e, t, o, i) {
                        return t + n[o] + i
                    }),
                    keyframes: e.keyframes,
                    classes: e.classes
                }
            }
            return e
        }
        var i = t(8)
            .ignoreComments;
        e.exports = o
    }, function (e, n, t) {
        "use strict";
        
        function o(e) {
            return {
                css: e,
                keyframes: i(e, s),
                classes: i(e, a)
            }
        }
        
        function i(e, n) {
            for (var t, o = {}; null !== (t = n.exec(e));) {
                var i = t[2];
                o[i] = i
            }
            return o
        }
        var r = t(8),
            a = r.classRegex,
            s = r.keyframesRegex;
        e.exports = o
    }, function (e, n, t) {
        "use strict";
        var o = t(11);
        e.exports = function (e) {
            return e[o]
        }
    }, function (e, n, t) {
        "use strict";
        e.exports = t(12)
    }, function (e, n, t) {
        "use strict";
        
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        
        function i(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        
        function r(e, n) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != typeof n && "function" != typeof n ? e : n
        }
        
        function a(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            e.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t(4),
            u = o(s),
            l = t(0),
            c = (o(l), t(47)),
            f = function (e) {
                function n(e, o, a, s) {
                    i(this, n);
                    var u = r(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u.opts = o, u.container = t(2)(e, o.label, a), t(5)(u.container, "", a);
                    var l = u.container.appendChild(document.createElement("button"));
                    return l.className = c["guify-button"], l.textContent = o.label, l.addEventListener("click", o.action), l.addEventListener("mouseup", function () {
                        l.blur()
                    }), u
                }
                return a(n, e), n
            }(u.default);
        n.default = f, e.exports = n.default
    }, function (e, n, t) {
        "use strict";
        var o = function (e, n) {
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }(["\n\n.guify-button {\n    box-sizing: border-box !important;\n    color: ", ";\n    background-color: ", ";\n\n    position: absolute;\n    text-align: center;\n    height: ", ";\n    line-height: ", ";\n    padding-top: 0px;\n    padding-bottom: 0px;\n    width: calc(100% - ", ");\n    border: none;\n    cursor: pointer;\n    right: 0;\n    font-family: inherit;\n}\n\n\n.guify-button:focus {\n    outline:none;\n}\n.guify-button::-moz-focus-inner {\n    border:0;\n}\n\n.guify-button:hover,\n.guify-button:focus {\n    color: ", ";\n    background-color: ", ";\n}\n\n.guify-button:active {\n    color: ", " !important;\n    background-color: ", " !important;\n}\n\n"], ["\n\n.guify-button {\n    box-sizing: border-box !important;\n    color: ", ";\n    background-color: ", ";\n\n    position: absolute;\n    text-align: center;\n    height: ", ";\n    line-height: ", ";\n    padding-top: 0px;\n    padding-bottom: 0px;\n    width: calc(100% - ", ");\n    border: none;\n    cursor: pointer;\n    right: 0;\n    font-family: inherit;\n}\n\n\n.guify-button:focus {\n    outline:none;\n}\n.guify-button::-moz-focus-inner {\n    border:0;\n}\n\n.guify-button:hover,\n.guify-button:focus {\n    color: ", ";\n    background-color: ", ";\n}\n\n.guify-button:active {\n    color: ", " !important;\n    background-color: ", " !important;\n}\n\n"]),
            i = t(1),
            r = t(3);
        e.exports = r(o, i.theme.colors.textSecondary, i.theme.colors.componentBackground, i.theme.sizing.componentHeight, i.theme.sizing.componentHeight, i.theme.sizing.labelWidth, i.theme.colors.textHover, i.theme.colors.componentForeground, i.theme.colors.textActive, i.theme.colors.componentActive)
    }, function (e, n, t) {
        "use strict";
        
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        
        function i(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        
        function r(e, n) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != typeof n && "function" != typeof n ? e : n
        }
        
        function a(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            e.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = function () {
                function e(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var o = n[t];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (n, t, o) {
                    return t && e(n.prototype, t), o && e(n, o), n
                }
            }(),
            u = t(4),
            l = o(u),
            c = t(0),
            f = (o(c), t(49)),
            p = function (e) {
                function n(e, o, a, s) {
                    i(this, n);
                    var u = r(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    return u.opts = o, u.container = t(2)(e, o.label, a), t(5)(u.container, o.label, a), u.input = u.container.appendChild(document.createElement("input")), u.input.id = "checkbox-" + o.label + s, u.input.type = "checkbox", u.input.checked = o.initial, u.input.className = f["guify-checkbox"], o.label && u.input.setAttribute("aria-label", o.label), u.container.appendChild(document.createElement("label"))
                        .htmlFor = u.input.id, setTimeout(function () {
                            u.emit("initialized", u.input.checked)
                        }), u.input.onchange = function (e) {
                            u.emit("input", e.target.checked)
                        }, u
                }
                return a(n, e), s(n, [{
                    key: "SetValue",
                    value: function (e) {
                        this.input.checked = e
                    }
                }, {
                    key: "GetValue",
                    value: function () {
                        return this.input.checked
                    }
                }]), n
            }(l.default);
        n.default = p, e.exports = n.default
    }, function (e, n, t) {
        "use strict";
        var o = function (e, n) {
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }(['\n\ninput[type=checkbox].guify-checkbox {\n    opacity: 0;\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    margin: 0;\n    border-radius: 0;\n    cursor: pointer;\n}\n\ninput[type=checkbox].guify-checkbox + label {\n    margin: 0;\n}\n\ninput[type=checkbox].guify-checkbox + label:before {\n    content: "";\n    display: inline-block;\n    width: ', ";\n    height: ", ";\n    padding: 0;\n    margin: 0;\n    vertical-align: middle;\n    background-color: ", ";\n    border-radius: 0px;\n    cursor: pointer;\n    box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box;\n\n}\n\n/* Hover style */\ninput[type=checkbox].guify-checkbox:hover + label:before {\n    width: calc(", " - (", " * 2));\n    height: calc(", " - (", " * 2));\n    background-color: ", ";\n    border: solid 4px ", ";\n}\n\n/* Checked style */\ninput[type=checkbox]:checked.guify-checkbox + label:before {\n    width: calc(", " - (", " * 2));\n    height: calc(", " - (", " * 2));\n    background-color: ", ";\n    border: solid ", " ", ";\n}\n\n/* Focused and checked */\ninput[type=checkbox]:checked.guify-checkbox:focus + label:before {\n    width: calc(", " - (", " * 2));\n    height: calc(", " - (", " * 2));\n    background-color: ", ";\n    border: solid ", " ", ";\n}\n\n/* Focus and unchecked */\ninput[type=checkbox].guify-checkbox:focus + label:before {\n    background-color: ", ";\n}\n\n"], ['\n\ninput[type=checkbox].guify-checkbox {\n    opacity: 0;\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    margin: 0;\n    border-radius: 0;\n    cursor: pointer;\n}\n\ninput[type=checkbox].guify-checkbox + label {\n    margin: 0;\n}\n\ninput[type=checkbox].guify-checkbox + label:before {\n    content: "";\n    display: inline-block;\n    width: ', ";\n    height: ", ";\n    padding: 0;\n    margin: 0;\n    vertical-align: middle;\n    background-color: ", ";\n    border-radius: 0px;\n    cursor: pointer;\n    box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box;\n\n}\n\n/* Hover style */\ninput[type=checkbox].guify-checkbox:hover + label:before {\n    width: calc(", " - (", " * 2));\n    height: calc(", " - (", " * 2));\n    background-color: ", ";\n    border: solid 4px ", ";\n}\n\n/* Checked style */\ninput[type=checkbox]:checked.guify-checkbox + label:before {\n    width: calc(", " - (", " * 2));\n    height: calc(", " - (", " * 2));\n    background-color: ", ";\n    border: solid ", " ", ";\n}\n\n/* Focused and checked */\ninput[type=checkbox]:checked.guify-checkbox:focus + label:before {\n    width: calc(", " - (", " * 2));\n    height: calc(", " - (", " * 2));\n    background-color: ", ";\n    border: solid ", " ", ";\n}\n\n/* Focus and unchecked */\ninput[type=checkbox].guify-checkbox:focus + label:before {\n    background-color: ", ";\n}\n\n"]),
            i = t(1),
            r = t(3);
        e.exports = r(o, i.theme.sizing.componentHeight, i.theme.sizing.componentHeight, i.theme.colors.componentBackground, i.theme.sizing.componentHeight, "4px", i.theme.sizing.componentHeight, "4px", i.theme.colors.componentBackgroundHover, i.theme.colors.componentBackground, i.theme.sizing.componentHeight, "4px", i.theme.sizing.componentHeight, "4px", i.theme.colors.componentForeground, "4px", i.theme.colors.componentBackground, i.theme.sizing.componentHeight, "4px", i.theme.sizing.componentHeight, "4px", i.theme.colors.componentForeground, "4px", i.theme.colors.componentBackgroundHover, i.theme.colors.componentBackgroundHover)
    }, function (e, n, t) {
        "use strict";
        
        function o(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        
        function i(e, n) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != typeof n && "function" != typeof n ? e : n
        }
        
        function r(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            e.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function () {
                function e(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var o = n[t];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (n, t, o) {
                    return t && e(n.prototype, t), o && e(n, o), n
                }
            }(),
            s = t(4),
            u = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(s),
            l = t(51),
            c = function (e) {
                function n(e, r, a, s) {
                    o(this, n);
                    var u = i(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u.opts = r;
                    var c, f, p, h, d, g, b;
                    if (u.container = t(2)(e, r.label, a), t(5)(u.container, r.label, a), u.input = document.createElement("select"), u.input.className = l["guify-select-dropdown"], r.label && u.input.setAttribute("aria-label", r.label), f = document.createElement("span"), f.classList.add(l["guify-select-triangle"], l["guify-select-triangle--down"]), p = document.createElement("span"), p.classList.add(l["guify-select-triangle"], l["guify-select-triangle--up"]), u.container.appendChild(f), u.container.appendChild(p), Array.isArray(r.options))
                        for (c = 0; c < r.options.length; c++) d = r.options[c], g = document.createElement("option"), g.value = g.textContent = d, r.initial === d && (g.selected = "selected"), u.input.appendChild(g);
                    else
                        for (b = Object.keys(r.options), c = 0; c < b.length; c++) h = b[c], g = document.createElement("option"), g.value = h, r.initial === h && (g.selected = "selected"), g.textContent = r.options[h], u.input.appendChild(g);
                    u.container.appendChild(u.input), u.input.onchange = function (e) {
                        u.emit("input", e.target.value)
                    };
                    var m = function () {
                            f.classList.add(l["guify-select-triangle--down-highlight"]), p.classList.add(l["guify-select-triangle--up-highlight"])
                        },
                        y = function () {
                            f.classList.remove(l["guify-select-triangle--down-highlight"]), p.classList.remove(l["guify-select-triangle--up-highlight"])
                        },
                        v = !1;
                    return u.input.addEventListener("mouseover", m), u.input.addEventListener("focus", function () {
                        v = !0, m()
                    }), u.input.addEventListener("blur", function () {
                        v = !1, y()
                    }), u.input.addEventListener("mouseleave", function () {
                        v || y()
                    }), u
                }
                return r(n, e), a(n, [{
                    key: "SetValue",
                    value: function (e) {
                        this.input.value = e
                    }
                }, {
                    key: "GetValue",
                    value: function () {
                        return this.input.value
                    }
                }]), n
            }(u.default);
        n.default = c, e.exports = n.default
    }, function (e, n, t) {
        "use strict";
        var o = function (e, n) {
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }(["\n\n.guify-select-dropdown {\n    display: inline-block;\n    position: absolute;\n    width: calc(100% - ", ");\n    padding-left: 1.5%;\n    height: ", ";\n    border: none;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -o-appearance:none;\n    appearance: none;\n    font-family: inherit;\n    background-color: ", ";\n    color: ", ";\n    box-sizing: border-box !important;\n    -moz-box-sizing: border-box !important;\n    -webkit-box-sizing: border-box !important;\n}\n\n/* Disable default outline since we're providing our own */\n.guify-select-dropdown:focus {\n    outline: none;\n}\n.guify-select-dropdown::-moz-focus-inner {\n    border: 0;\n}\n\n\n.guify-select-dropdown:focus,\n.guify-select-dropdown:hover {\n    color: ", ";\n    background-color: ", ";\n}\n\n.guify-select-dropdown::-ms-expand {\n    display:none;\n}\n.guify-select-triangle {\n    content: ' ';\n    border-right: 3px solid transparent;\n    border-left: 3px solid transparent;\n    line-height: ", ";\n    position: absolute;\n    right: 2.5%;\n    z-index: 1;\n    pointer-events: none;\n}\n\n.guify-select-triangle--up {\n    bottom: 55%;\n    border-bottom: 5px solid ", ";\n    border-top: 0px transparent;\n}\n\n.guify-select-triangle--down {\n    top: 55%;\n    border-top: 5px solid ", ";\n    border-bottom: 0px transparent;\n}\n\n.guify-select-triangle--up-highlight {\n    border-bottom-color: ", ";\n}\n\n.guify-select-triangle--down-highlight {\n    border-top-color: ", ";\n}\n\n"], ["\n\n.guify-select-dropdown {\n    display: inline-block;\n    position: absolute;\n    width: calc(100% - ", ");\n    padding-left: 1.5%;\n    height: ", ";\n    border: none;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -o-appearance:none;\n    appearance: none;\n    font-family: inherit;\n    background-color: ", ";\n    color: ", ";\n    box-sizing: border-box !important;\n    -moz-box-sizing: border-box !important;\n    -webkit-box-sizing: border-box !important;\n}\n\n/* Disable default outline since we're providing our own */\n.guify-select-dropdown:focus {\n    outline: none;\n}\n.guify-select-dropdown::-moz-focus-inner {\n    border: 0;\n}\n\n\n.guify-select-dropdown:focus,\n.guify-select-dropdown:hover {\n    color: ", ";\n    background-color: ", ";\n}\n\n.guify-select-dropdown::-ms-expand {\n    display:none;\n}\n.guify-select-triangle {\n    content: ' ';\n    border-right: 3px solid transparent;\n    border-left: 3px solid transparent;\n    line-height: ", ";\n    position: absolute;\n    right: 2.5%;\n    z-index: 1;\n    pointer-events: none;\n}\n\n.guify-select-triangle--up {\n    bottom: 55%;\n    border-bottom: 5px solid ", ";\n    border-top: 0px transparent;\n}\n\n.guify-select-triangle--down {\n    top: 55%;\n    border-top: 5px solid ", ";\n    border-bottom: 0px transparent;\n}\n\n.guify-select-triangle--up-highlight {\n    border-bottom-color: ", ";\n}\n\n.guify-select-triangle--down-highlight {\n    border-top-color: ", ";\n}\n\n"]),
            i = t(1),
            r = t(3);
        e.exports = r(o, i.theme.sizing.labelWidth, i.theme.sizing.componentHeight, i.theme.colors.componentBackground, i.theme.colors.textSecondary, i.theme.colors.textHover, i.theme.colors.componentForeground, i.theme.sizing.componentHeight, i.theme.colors.textSecondary, i.theme.colors.textSecondary, i.theme.colors.textHover, i.theme.colors.textHover)
    }, function (e, n, t) {
        "use strict";
        
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        
        function i(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        
        function r(e, n) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != typeof n && "function" != typeof n ? e : n
        }
        
        function a(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            e.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = function () {
                function e(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var o = n[t];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (n, t, o) {
                    return t && e(n.prototype, t), o && e(n, o), n
                }
            }(),
            u = t(4),
            l = o(u),
            c = t(0),
            f = o(c),
            p = function (e) {
                function n(e, o, a, s) {
                    i(this, n);
                    var u = r(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    return u.opts = o, u.container = t(2)(e, o.label, a), t(5)(u.container, o.label, a), u.input = u.container.appendChild(document.createElement("input")), u.input.type = "text", u.input.className = "guify-text", o.initial && (u.input.value = o.initial), o.label && u.input.setAttribute("aria-label", o.label), (0, f.default)(u.input, {
                        position: "absolute",
                        paddingLeft: "6px",
                        height: a.sizing.componentHeight,
                        width: "calc(100% - " + a.sizing.labelWidth + ")",
                        border: "none",
                        background: a.colors.componentBackground,
                        color: a.colors.textSecondary,
                        fontFamily: "inherit",
                        "box-sizing": "border-box",
                        "-moz-box-sizing": "border-box",
                        "-webkit-box-sizing": "border-box",
                        resize: "vertical"
                    }), setTimeout(function () {
                        u.emit("initialized", u.input.value)
                    }), u.input.oninput = function (e) {
                        u.emit("input", e.target.value)
                    }, u.input.addEventListener("focus", function () {
                        (0, f.default)(u.input, {
                            outline: "none"
                        }), u.focused = !0
                    }), u.input.addEventListener("blur", function () {
                        u.focused = !1
                    }), u
                }
                return a(n, e), s(n, [{
                    key: "SetValue",
                    value: function (e) {
                        !0 !== this.focused && (this.input.value = e)
                    }
                }, {
                    key: "GetValue",
                    value: function () {
                        return this.input.value
                    }
                }]), n
            }(l.default);
        n.default = p, e.exports = n.default
    }, function (e, n, t) {
        "use strict";
        
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        
        function i(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        
        function r(e, n) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != typeof n && "function" != typeof n ? e : n
        }
        
        function a(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            e.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = function () {
                function e(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var o = n[t];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (n, t, o) {
                    return t && e(n.prototype, t), o && e(n, o), n
                }
            }(),
            u = t(4),
            l = o(u),
            c = t(54),
            f = o(c),
            p = t(0),
            h = o(p),
            d = t(14),
            g = o(d),
            b = t(13),
            m = o(b),
            y = function (e) {
                function n(e, o, a, s) {
                    i(this, n);
                    var u = r(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u.opts = o, u.theme = a, o.format = o.format || "rgb", o.initial = o.initial || "#123456", u.container = t(2)(e, o.label, a), t(5)(u.container, o.label, a);
                    var l = u.container.appendChild(document.createElement("span"));
                    l.className = "guify-color-" + s;
                    var c = t(6)(u.container, "", a, "calc(100% - " + a.sizing.labelWidth + " - 12% - 0.5em)");
                    c.setAttribute("readonly", "true"), l.onmouseover = function () {
                        u.picker.$el.style.display = ""
                    };
                    var p = o.initial;
                    switch (o.format) {
                    case "rgb":
                    case "hex":
                        p = (0, g.default)(p)
                            .toHexString();
                        break;
                    case "array":
                        p = g.default.fromRatio({
                                r: p[0],
                                g: p[1],
                                b: p[2]
                            })
                            .toHexString()
                    }
                    return u.picker = new f.default({
                        el: l,
                        color: p,
                        background: a.colors.componentBackground,
                        width: 125,
                        height: 100
                    }), (0, h.default)(u.picker.$el, {
                        marginTop: a.sizing.componentHeight,
                        display: "none",
                        position: "absolute"
                    }), (0, h.default)(l, {
                        position: "relative",
                        display: "inline-block",
                        width: "12.5%",
                        height: a.sizing.componentHeight,
                        backgroundColor: u.picker.getHexString()
                    }), u.InjectStyles(), l.onmouseout = function (e) {
                        u.picker.$el.style.display = "none"
                    }, setTimeout(function () {
                        u.emit("initialized", p)
                    }), u.picker.onChange(function (e) {
                        c.value = u.Format(e), (0, h.default)(l, {
                            backgroundColor: e
                        }), u.emit("input", u.Format(e))
                    }), u
                }
                return a(n, e), s(n, [{
                    key: "Format",
                    value: function (e) {
                        switch (this.opts.format) {
                        case "rgb":
                            return (0, g.default)(e)
                                .toRgbString();
                        case "hex":
                            return (0, g.default)(e)
                                .toHexString();
                        case "array":
                            var n = (0, g.default)(e)
                                .toRgb();
                            return [n.r / 255, n.g / 255, n.b / 255].map(function (e) {
                                return e.toFixed(2)
                            });
                        default:
                            return e
                        }
                    }
                }, {
                    key: "SetValue",
                    value: function (e) {
                        this.picker.setColor(e)
                    }
                }, {
                    key: "GetValue",
                    value: function () {
                        return this.Format(this.picker.getColor())
                    }
                }, {
                    key: "InjectStyles",
                    value: function () {
                        (0, m.default)("\n\n        .Scp {\n            width: 125px;\n            height: 100px;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n                -ms-user-select: none;\n                    user-select: none;\n            position: relative;\n            z-index: 1000;\n            cursor: pointer;\n        }\n        .Scp-saturation {\n            position: relative;\n            width: calc(100% - 25px);\n            height: 100%;\n            background: linear-gradient(to right, #fff 0%, #f00 100%);\n            float: left;\n            margin-right: 5px;\n        }\n        .Scp-brightness {\n            width: 100%;\n            height: 100%;\n            background: linear-gradient(to top, #000 0%, rgba(255,255,255,0) 100%);\n        }\n        .Scp-sbSelector {\n            border: 1px solid;\n            position: absolute;\n            width: 14px;\n            height: 14px;\n            background: #fff;\n            border-radius: 10px;\n            top: -7px;\n            left: -7px;\n            box-sizing: border-box;\n            z-index: 10;\n        }\n        .Scp-hue {\n            width: 20px;\n            height: 100%;\n            position: relative;\n            float: left;\n            background: linear-gradient(to bottom, #f00 0%, #f0f 17%, #00f 34%, #0ff 50%, #0f0 67%, #ff0 84%, #f00 100%);\n        }\n        .Scp-hSelector {\n            position: absolute;\n            background: #fff;\n            border-bottom: 1px solid #000;\n            right: -3px;\n            width: 10px;\n            height: 2px;\n        }\n\n        ")
                    }
                }]), n
            }(l.default);
        n.default = y, e.exports = n.default
    }, function (e, n, t) {
        "use strict";
        ! function () {
            function n(e) {
                return e = e || {}, this.color = null, this.width = 0, this.widthUnits = "px", this.height = 0, this.heightUnits = "px", this.hue = 0, this.position = {
                    x: 0,
                    y: 0
                }, this.huePosition = 0, this.saturationWidth = 0, this.hueHeight = 0, this.maxHue = 0, this.inputIsNumber = !1, this._onSaturationMouseDown = this._onSaturationMouseDown.bind(this), this._onSaturationMouseMove = this._onSaturationMouseMove.bind(this), this._onSaturationMouseUp = this._onSaturationMouseUp.bind(this), this._onHueMouseDown = this._onHueMouseDown.bind(this), this._onHueMouseMove = this._onHueMouseMove.bind(this), this._onHueMouseUp = this._onHueMouseUp.bind(this), this.$el = document.createElement("div"), this.$el.className = "Scp", this.$el.innerHTML = ['<div class="Scp-saturation">', '<div class="Scp-brightness"></div>', '<div class="Scp-sbSelector"></div>', "</div>", '<div class="Scp-hue">', '<div class="Scp-hSelector"></div>', "</div>"].join(""), this.$saturation = this.$el.querySelector(".Scp-saturation"), this.$hue = this.$el.querySelector(".Scp-hue"), this.$sbSelector = this.$el.querySelector(".Scp-sbSelector"), this.$hSelector = this.$el.querySelector(".Scp-hSelector"), this.$saturation.addEventListener("mousedown", this._onSaturationMouseDown), this.$saturation.addEventListener("touchstart", this._onSaturationMouseDown), this.$hue.addEventListener("mousedown", this._onHueMouseDown), this.$hue.addEventListener("touchstart", this._onHueMouseDown), e.el && this.appendTo(e.el), e.background && this.setBackgroundColor(e.background), e.widthUnits && (this.widthUnits = e.widthUnits), e.heightUnits && (this.heightUnits = e.heightUnits), this.setSize(e.width || 175, e.height || 150), this.setColor(e.color), this
            }
            
            function o(e, n, t) {
                return Math.min(Math.max(e, n), t)
            }
            
            function i(e) {
                return e = 0 === e.type.indexOf("touch") ? e.touches[0] : e, {
                    x: e.clientX,
                    y: e.clientY
                }
            }
            
            function r(e) {
                return e = "#" + ("00000" + (0 | e)
                        .toString(16))
                    .substr(-6)
            }
            var a = t(55),
                s = t(56),
                u = t(14),
                l = t(59);
            a(n.prototype), n.prototype.appendTo = function (e) {
                return e.appendChild(this.$el), this
            }, n.prototype.remove = function () {
                this._onSaturationMouseUp(), this._onHueMouseUp(), this.$saturation.removeEventListener("mousedown", this._onSaturationMouseDown), this.$saturation.removeEventListener("touchstart", this._onSaturationMouseDown), this.$hue.removeEventListener("mousedown", this._onHueMouseDown), this.$hue.removeEventListener("touchstart", this._onHueMouseDown), this.off(), this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
            }, n.prototype.setColor = function (e) {
                s(e) ? (this.inputIsNumber = !0, e = r(e)) : this.inputIsNumber = !1, this.color = u(e);
                var n = this.color.toHsv();
                return isNaN(n.h) || (this.hue = n.h), this._moveSelectorTo(this.saturationWidth * n.s, (1 - n.v) * this.hueHeight), this._moveHueTo((1 - this.hue / 360) * this.hueHeight), this._updateHue(), this
            }, n.prototype.setSize = function (e, n) {
                return this.width = e, this.height = n, this.$el.style.width = this.width + this.widthUnits, this.$el.style.height = this.height + this.heightUnits, this.saturationWidth = this.width - 25, this.$saturation.style.width = this.saturationWidth + "px", this.hueHeight = this.height, this.maxHue = this.hueHeight - 2, this
            }, n.prototype.setBackgroundColor = function (e) {
                return s(e) && (e = r(e)), this.$el.style.padding = "5px", this.$el.style.background = u(e)
                    .toHexString(), this
            }, n.prototype.setNoBackground = function () {
                this.$el.style.padding = "0px", this.$el.style.background = "none"
            }, n.prototype.onChange = function (e) {
                return this.on("update", e), this.emit("update", this.getHexString()), this
            }, n.prototype.getColor = function () {
                return this.inputIsNumber ? this.getHexNumber() : this.color.toString()
            }, n.prototype.getHexString = function () {
                return this.color.toHexString()
                    .toUpperCase()
            }, n.prototype.getHexNumber = function () {
                return parseInt(this.color.toHex(), 16)
            }, n.prototype.getRGB = function () {
                return this.color.toRgb()
            }, n.prototype.getHSV = function () {
                return this.color.toHsv()
            }, n.prototype.isDark = function () {
                return this.color.isDark()
            }, n.prototype.isLight = function () {
                return this.color.isLight()
            }, n.prototype._moveSelectorTo = function (e, n) {
                this.position.x = o(e, 0, this.saturationWidth), this.position.y = o(n, 0, this.hueHeight), l(this.$sbSelector, {
                    x: this.position.x,
                    y: this.position.y
                })
            }, n.prototype._updateColorFromPosition = function () {
                this.color = u({
                    h: this.hue,
                    s: this.position.x / this.saturationWidth,
                    v: 1 - this.position.y / this.hueHeight
                }), this._updateColor()
            }, n.prototype._moveHueTo = function (e) {
                this.huePosition = o(e, 0, this.maxHue), l(this.$hSelector, {
                    y: this.huePosition
                })
            }, n.prototype._updateHueFromPosition = function () {
                var e = this.color.toHsv();
                this.hue = 360 * (1 - this.huePosition / this.maxHue), this.color = u({
                    h: this.hue,
                    s: e.s,
                    v: e.v
                }), this._updateHue()
            }, n.prototype._updateHue = function () {
                var e = u({
                    h: this.hue,
                    s: 1,
                    v: 1
                });
                this.$saturation.style.background = "linear-gradient(to right, #fff, " + e.toHexString() + ")", this._updateColor()
            }, n.prototype._updateColor = function () {
                this.$sbSelector.style.background = this.color.toHexString(), this.$sbSelector.style.borderColor = this.color.isDark() ? "#fff" : "#000", this.emit("update", this.color.toHexString())
            }, n.prototype._onSaturationMouseDown = function (e) {
                var n = this.$saturation.getBoundingClientRect(),
                    t = i(e)
                    .x,
                    o = i(e)
                    .y;
                this._moveSelectorTo(t - n.left, o - n.top), this._updateColorFromPosition(), window.addEventListener("mouseup", this._onSaturationMouseUp), window.addEventListener("touchend", this._onSaturationMouseUp), window.addEventListener("mousemove", this._onSaturationMouseMove), window.addEventListener("touchmove", this._onSaturationMouseMove), e.preventDefault()
            }, n.prototype._onSaturationMouseMove = function (e) {
                var n = this.$saturation.getBoundingClientRect(),
                    t = i(e)
                    .x,
                    o = i(e)
                    .y;
                this._moveSelectorTo(t - n.left, o - n.top), this._updateColorFromPosition()
            }, n.prototype._onSaturationMouseUp = function () {
                window.removeEventListener("mouseup", this._onSaturationMouseUp), window.removeEventListener("touchend", this._onSaturationMouseUp), window.removeEventListener("mousemove", this._onSaturationMouseMove), window.removeEventListener("touchmove", this._onSaturationMouseMove)
            }, n.prototype._onHueMouseDown = function (e) {
                var n = this.$hue.getBoundingClientRect(),
                    t = i(e)
                    .y;
                this._moveHueTo(t - n.top), this._updateHueFromPosition(), window.addEventListener("mouseup", this._onHueMouseUp), window.addEventListener("touchend", this._onHueMouseUp), window.addEventListener("mousemove", this._onHueMouseMove), window.addEventListener("touchmove", this._onHueMouseMove), e.preventDefault()
            }, n.prototype._onHueMouseMove = function (e) {
                var n = this.$hue.getBoundingClientRect(),
                    t = i(e)
                    .y;
                this._moveHueTo(t - n.top), this._updateHueFromPosition()
            }, n.prototype._onHueMouseUp = function () {
                window.removeEventListener("mouseup", this._onHueMouseUp), window.removeEventListener("touchend", this._onHueMouseUp), window.removeEventListener("mousemove", this._onHueMouseMove), window.removeEventListener("touchmove", this._onHueMouseMove)
            }, void 0 !== e && e.exports && (e.exports = n)
        }()
    }, function (e, n, t) {
        function o(e) {
            if (e) return i(e)
        }
        
        function i(e) {
            for (var n in o.prototype) e[n] = o.prototype[n];
            return e
        }
        e.exports = o, o.prototype.on = o.prototype.addEventListener = function (e, n) {
            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || [])
                .push(n), this
        }, o.prototype.once = function (e, n) {
            function t() {
                this.off(e, t), n.apply(this, arguments)
            }
            return t.fn = n, this.on(e, t), this
        }, o.prototype.off = o.prototype.removeListener = o.prototype.removeAllListeners = o.prototype.removeEventListener = function (e, n) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
            var t = this._callbacks["$" + e];
            if (!t) return this;
            if (1 == arguments.length) return delete this._callbacks["$" + e], this;
            for (var o, i = 0; i < t.length; i++)
                if ((o = t[i]) === n || o.fn === n) {
                    t.splice(i, 1);
                    break
                } return this
        }, o.prototype.emit = function (e) {
            this._callbacks = this._callbacks || {};
            var n = [].slice.call(arguments, 1),
                t = this._callbacks["$" + e];
            if (t) {
                t = t.slice(0);
                for (var o = 0, i = t.length; o < i; ++o) t[o].apply(this, n)
            }
            return this
        }, o.prototype.listeners = function (e) {
            return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
        }, o.prototype.hasListeners = function (e) {
            return !!this.listeners(e)
                .length
        }
    }, function (e, n, t) {
        "use strict";
        /*!
         * is-number <https://github.com/jonschlinkert/is-number>
         *
         * Copyright (c) 2014-2015, Jon Schlinkert.
         * Licensed under the MIT License.
         */
        var o = t(57);
        e.exports = function (e) {
            var n = o(e);
            if ("string" === n) {
                if (!e.trim()) return !1
            } else if ("number" !== n) return !1;
            return e - e + 1 >= 0
        }
    }, function (e, n, t) {
        var o = t(58),
            i = Object.prototype.toString;
        e.exports = function (e) {
            if (void 0 === e) return "undefined";
            if (null === e) return "null";
            if (!0 === e || !1 === e || e instanceof Boolean) return "boolean";
            if ("string" == typeof e || e instanceof String) return "string";
            if ("number" == typeof e || e instanceof Number) return "number";
            if ("function" == typeof e || e instanceof Function) return "function";
            if (void 0 !== Array.isArray && Array.isArray(e)) return "array";
            if (e instanceof RegExp) return "regexp";
            if (e instanceof Date) return "date";
            var n = i.call(e);
            return "[object RegExp]" === n ? "regexp" : "[object Date]" === n ? "date" : "[object Arguments]" === n ? "arguments" : "[object Error]" === n ? "error" : o(e) ? "buffer" : "[object Set]" === n ? "set" : "[object WeakSet]" === n ? "weakset" : "[object Map]" === n ? "map" : "[object WeakMap]" === n ? "weakmap" : "[object Symbol]" === n ? "symbol" : "[object Int8Array]" === n ? "int8array" : "[object Uint8Array]" === n ? "uint8array" : "[object Uint8ClampedArray]" === n ? "uint8clampedarray" : "[object Int16Array]" === n ? "int16array" : "[object Uint16Array]" === n ? "uint16array" : "[object Int32Array]" === n ? "int32array" : "[object Uint32Array]" === n ? "uint32array" : "[object Float32Array]" === n ? "float32array" : "[object Float64Array]" === n ? "float64array" : "object"
        }
    }, function (e, n) {
        function t(e) {
            return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
        
        function o(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && t(e.slice(0, 0))
        }
        /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        e.exports = function (e) {
            return null != e && (t(e) || o(e) || !!e._isBuffer)
        }
    }, function (e, n, t) {
        "use strict";
        
        function o(e, n) {
            var t, o, i, r = [];
            s(n);
            for (t in n) h.call(n, t) && (o = n[t], h.call(f.transform, t) ? (i = f.transform[t], c(o) && (o = o.join(i.separator)), r.push(t + "(" + p(o, i.defaultUnit, i.separator) + ")")) : h.call(f, t) ? (i = f[t], c(o) && (o = o.join(i.separator)), e.style[l(t)] = p(o, i.defaultUnit, i.separator)) : console.warn("dom-transform: this property (`" + t + "`) is not supported."));
            e.style[d] = r.join(" ")
        }
        
        function i(e, n) {
            var t = e.style;
            if ("string" == typeof n) return h.call(f.transform, n) ? t[d] : t[l(n)];
            n || (n = u());
            var o = {};
            return n.forEach(function (e) {
                o[e] = t[l(e)]
            }), o
        }
        
        function r(e, n) {
            var t = e.style;
            if ("string" == typeof n) return void(t[l(n)] = null);
            n || (n = u()), n.forEach(function (e) {
                t[l(e)] = null
            })
        }
        
        function a() {
            return d.length > 0
        }
        
        function s(e) {
            var n;
            for (n in e) h.call(g, n) && (e[g[n]] = e[n], delete e[n])
        }
        
        function u() {
            return Object.keys(f)
                .map(function (e) {
                    return e
                })
        }
        var l = t(60),
            c = t(61),
            f = t(62),
            p = t(63),
            h = Object.prototype.hasOwnProperty,
            d = l("transform"),
            g = {
                x: "translateX",
                y: "translateY",
                z: "translateZ",
                origin: "transformOrigin"
            };
        n = e.exports = o, n.get = i, n.reset = r, n.isSupported = a
    }, function (e, n) {
        function t(e) {
            if (e = e.replace(/-([a-z])/g, function (e, n) {
                    return n.toUpperCase()
                }), void 0 !== r[e]) return e;
            for (var n = e.charAt(0)
                    .toUpperCase() + e.slice(1), t = a.length; t--;) {
                var o = a[t] + n;
                if (void 0 !== r[o]) return o
            }
            return e
        }
        
        function o(e) {
            return e in u ? u[e] : u[e] = t(e)
        }
        
        function i(e) {
            return e = t(e), s.test(e) && (e = "-" + e.replace(s, "-$1"), s.lastIndex = 0), e.toLowerCase()
        }
        var r = "undefined" != typeof document ? document.createElement("p")
            .style : {},
            a = ["O", "ms", "Moz", "Webkit"],
            s = /([A-Z])/g,
            u = {};
        e.exports = o, e.exports.dash = i
    }, function (e, n) {
        var t = Array.isArray,
            o = Object.prototype.toString;
        e.exports = t || function (e) {
            return !!e && "[object Array]" == o.call(e)
        }
    }, function (e, n, t) {
        "use strict";
        e.exports = {
            transform: {
                translate: {
                    defaultUnit: "px"
                },
                translate3d: {
                    defaultUnit: "px"
                },
                translateX: {
                    defaultUnit: "px"
                },
                translateY: {
                    defaultUnit: "px"
                },
                translateZ: {
                    defaultUnit: "px"
                },
                scale: {
                    defaultUnit: ""
                },
                scale3d: {
                    defaultUnit: ""
                },
                scaleX: {
                    defaultUnit: ""
                },
                scaleY: {
                    defaultUnit: ""
                },
                scaleZ: {
                    defaultUnit: ""
                },
                rotate: {
                    defaultUnit: "deg"
                },
                rotate3d: {
                    defaultUnit: ""
                },
                rotateX: {
                    defaultUnit: "deg"
                },
                rotateY: {
                    defaultUnit: "deg"
                },
                rotateZ: {
                    defaultUnit: "deg"
                },
                skew: {
                    defaultUnit: "deg"
                },
                skewX: {
                    defaultUnit: "deg"
                },
                skewY: {
                    defaultUnit: "deg"
                },
                perspective: {
                    defaultUnit: "px"
                },
                matrix: {
                    defaultUnit: ""
                },
                matrix3d: {
                    defaultUnit: ""
                }
            },
            transformOrigin: {
                defaultUnit: "px",
                separator: " "
            }
        }
    }, function (e, n, t) {
        "use strict";
        var o = t(64),
            i = /^-?\d+(\.\d+)?$/;
        e.exports = function (e, n, t) {
            if (t = t || ",", "number" == typeof e) return "" + e + n;
            var r = new RegExp(t, "g");
            return e.split(r.test(e) ? t : " ")
                .map(function (e) {
                    return e = o(e), i.test(e) && (e += n), e
                })
                .join(t)
        }
    }, function (e, n) {
        function t(e) {
            return e.replace(/^\s*|\s*$/g, "")
        }
        n = e.exports = t, n.left = function (e) {
            return e.replace(/^\s*/, "")
        }, n.right = function (e) {
            return e.replace(/\s*$/, "")
        }
    }, function (e, n, t) {
        "use strict";
        
        function o(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function () {
                function e(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var o = n[t];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (n, t, o) {
                    return t && e(n.prototype, t), o && e(n, o), n
                }
            }(),
            r = t(0),
            a = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r),
            s = t(66),
            u = function () {
                function e(n, i, r, u) {
                    var l = this;
                    o(this, e), this.opts = i, this.container = t(2)(n, i.label, r), this.container.classList.add(s["guify-folder"]), this.container.setAttribute("role", "button"), this.container.setAttribute("tabIndex", "0"), this.arrow = this.container.appendChild(document.createElement("div")), this.arrow.innerHTML = "&#9662;", (0, a.default)(this.arrow, {
                        width: "1.5em"
                    }), this.label = this.container.appendChild(document.createElement("div")), this.label.innerHTML = i.label, this.container.onclick = function () {
                        l.Toggle()
                    }, this.container.addEventListener("mouseup", function () {
                        l.container.blur()
                    }), this.container.addEventListener("keydown", function (e) {
                        13 !== e.which && 32 !== e.which || l.Toggle()
                    }), this.folderContainer = n.appendChild(document.createElement("div")), this.folderContainer.classList.add(s["guify-folder-contents"]), this.open = this.opts.open || !1, this.SetOpen(this.open)
                }
                return i(e, [{
                    key: "Toggle",
                    value: function () {
                        this.open = !this.open, this.SetOpen(this.open)
                    }
                }, {
                    key: "SetOpen",
                    value: function (e) {
                        this.open = e, e ? (this.folderContainer.classList.remove(s["guify-folder-closed"]), this.arrow.innerHTML = "&#9662;") : (this.folderContainer.classList.add(s["guify-folder-closed"]), this.arrow.innerHTML = "&#9656;")
                    }
                }]), e
            }();
        n.default = u, e.exports = n.default
    }, function (e, n, t) {
        "use strict";
        var o = function (e, n) {
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }(["\n\n.guify-folder {\n    cursor: pointer;\n    padding-left: 0.5em;\n    color: ", ";\n}\n\n.guify-folder div {\n    display: inline-block;\n    vertical-align: sub;\n    line-height: calc(", " + 5px);\n}\n\n.guify-folder:hover,\n.guify-folder:focus {\n    color: ", ";\n    background-color: ", ";\n    outline: none;\n}\n\n\n.guify-folder-contents {\n    display: block;\n    box-sizing: border-box;\n    padding-left: 14px;\n    margin-bottom: 5px;\n    border-left: 2px solid ", ";\n}\n\n.guify-folder-contents.guify-folder-closed {\n    height: 0;\n    display: none;\n}\n\n\n"], ["\n\n.guify-folder {\n    cursor: pointer;\n    padding-left: 0.5em;\n    color: ", ";\n}\n\n.guify-folder div {\n    display: inline-block;\n    vertical-align: sub;\n    line-height: calc(", " + 5px);\n}\n\n.guify-folder:hover,\n.guify-folder:focus {\n    color: ", ";\n    background-color: ", ";\n    outline: none;\n}\n\n\n.guify-folder-contents {\n    display: block;\n    box-sizing: border-box;\n    padding-left: 14px;\n    margin-bottom: 5px;\n    border-left: 2px solid ", ";\n}\n\n.guify-folder-contents.guify-folder-closed {\n    height: 0;\n    display: none;\n}\n\n\n"]),
            i = t(1),
            r = t(3);
        e.exports = r(o, i.theme.colors.textPrimary, i.theme.sizing.componentHeight, i.theme.colors.textHover, i.theme.colors.componentForeground, i.theme.colors.componentBackground)
    }, function (e, n, t) {
        "use strict";
        
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        
        function i(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        
        function r(e, n) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != typeof n && "function" != typeof n ? e : n
        }
        
        function a(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            e.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = function () {
                function e(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var o = n[t];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (n, t, o) {
                    return t && e(n.prototype, t), o && e(n, o), n
                }
            }(),
            u = t(4),
            l = o(u),
            c = t(0),
            f = o(c),
            p = t(68),
            h = function (e) {
                function n(e, o, a, s) {
                    i(this, n);
                    var u = r(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    u.opts = o, u.opts.fileReadFunc = u.opts.fileReadFunc || "readAsDataURL", u.file = null, u.fileName = null, u.container = t(2)(e, o.label, a), u.container.classList.add(p["guify-file-container"]), u.container.setAttribute("role", "button"), u.container.setAttribute("tabIndex", "0"), (0, f.default)(u.container, {
                        width: "100%",
                        "box-sizing": "border-box",
                        "-moz-box-sizing": "border-box",
                        "-webkit-box-sizing": "border-box",
                        height: "unset",
                        padding: "8px"
                    });
                    var l = u.container.appendChild(document.createElement("div"));
                    l.innerHTML = o.label, (0, f.default)(l, "padding-bottom", "5px");
                    var c = u.container.appendChild(document.createElement("input"));
                    c.setAttribute("type", "file"), c.setAttribute("multiple", !1), c.style.display = "none", o.label && c.setAttribute("aria-label", o.label), u.fileLabel = u.container.appendChild(document.createElement("div")), u.fileLabel.innerHTML = "Choose a file...";
                    var h = function (e) {
                        var n;
                        e.dataTransfer ? n = e.dataTransfer.files : e.target && (n = e.target.files);
                        var t = (n[0], new FileReader);
                        t.onload = function () {
                            u.file = t.result, u.fileLabel.innerHTML = n[0].name, u.emit("input", u.file)
                        }, t[u.opts.fileReadFunc](n[0])
                    };
                    return c.addEventListener("change", h), u.container.addEventListener("dragover", function (e) {
                        e.preventDefault(), e.stopPropagation(), u.container.classList.add(p["guify-dragover"])
                    }), u.container.addEventListener("dragleave", function (e) {
                        e.preventDefault(), e.stopPropagation(), u.container.classList.remove(p["guify-dragover"])
                    }), u.container.addEventListener("drop", function (e) {
                        e.preventDefault(), e.stopPropagation(), u.container.classList.remove(p["guify-dragover"]), h(e)
                    }), u.container.onclick = function () {
                        c.click()
                    }, u.container.addEventListener("keydown", function (e) {
                        13 !== e.which && 32 !== e.which || c.click()
                    }), u.container.addEventListener("mouseup", function () {
                        u.container.blur()
                    }), u
                }
                return a(n, e), s(n, [{
                    key: "SetValue",
                    value: function (e) {}
                }, {
                    key: "GetValue",
                    value: function () {
                        return this.file
                    }
                }]), n
            }(l.default);
        n.default = h, e.exports = n.default
    }, function (e, n, t) {
        "use strict";
        var o = function (e, n) {
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }(["\n\n.guify-file-container {\n    display: inline-block;\n    outline: none;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    color: ", ";\n    background-color: ", ";\n}\n\n.guify-file-container:hover,\n.guify-file-container:focus {\n    color: ", ";\n    background-color: ", ";\n}\n\n.guify-file-container:active {\n    color: ", " !important;\n    background-color: ", " !important;\n}\n\n.guify-dragover {\n    background-color: ", ";\n    box-shadow: inset 0 0 0 3px ", ";\n}\n\n\n"], ["\n\n.guify-file-container {\n    display: inline-block;\n    outline: none;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    color: ", ";\n    background-color: ", ";\n}\n\n.guify-file-container:hover,\n.guify-file-container:focus {\n    color: ", ";\n    background-color: ", ";\n}\n\n.guify-file-container:active {\n    color: ", " !important;\n    background-color: ", " !important;\n}\n\n.guify-dragover {\n    background-color: ", ";\n    box-shadow: inset 0 0 0 3px ", ";\n}\n\n\n"]),
            i = t(1),
            r = t(3);
        e.exports = r(o, i.theme.colors.textPrimary, i.theme.colors.componentBackground, i.theme.colors.textHover, i.theme.colors.componentForeground, i.theme.colors.textActive, i.theme.colors.componentActive, i.theme.colors.componentBackground, i.theme.colors.componentForeground)
    }, function (e, n, t) {
        "use strict";
        
        function o(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function () {
                function e(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var o = n[t];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (n, t, o) {
                    return t && e(n.prototype, t), o && e(n, o), n
                }
            }(),
            r = t(0),
            a = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r),
            s = function () {
                function e(n, i, r, s) {
                    o(this, e), this.opts = i, this.container = t(2)(n, i.label, r), t(5)(this.container, i.label, r), this.text = this.container.appendChild(document.createElement("div")), (0, a.default)(this.text, {
                        display: "inline-block",
                        height: "unset",
                        width: "calc(100% - " + r.sizing.labelWidth + ")",
                        border: "none",
                        color: r.colors.textSecondary,
                        fontFamily: "inherit",
                        "box-sizing": "border-box",
                        "-moz-box-sizing": "border-box",
                        "-webkit-box-sizing": "border-box",
                        verticalAlign: "sub",
                        "line-height": r.sizing.componentHeight,
                        "user-select": "text"
                    }), i.label && this.text.setAttribute("aria-label", i.label)
                }
                return i(e, [{
                    key: "SetValue",
                    value: function (e) {
                        this.text.innerHTML = e.toString()
                    }
                }, {
                    key: "GetValue",
                    value: function () {
                        return this.text.innerHTML.toString()
                    }
                }]), e
            }();
        n.default = s, e.exports = n.default
    }, function (e, n, t) {
        "use strict";
        
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        
        function i(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        
        function r(e, n) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != typeof n && "function" != typeof n ? e : n
        }
        
        function a(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            e.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
        }
        
        function s(e, n, t) {
            return Math.min(Math.max(e, n), t)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var u = function () {
                function e(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var o = n[t];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (n, t, o) {
                    return t && e(n.prototype, t), o && e(n, o), n
                }
            }(),
            l = t(4),
            c = o(l),
            f = t(0),
            p = o(f),
            h = t(10),
            d = o(h),
            g = t(71),
            b = function (e) {
                function n(e, o, a, u) {
                    i(this, n);
                    var l = r(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this));
                    if (l.opts = o, l.container = t(2)(e, o.label, a), t(5)(l.container, o.label, a), o.step && o.steps) throw new Error("Cannot specify both step and steps. Got step = " + o.step + ", steps = ", o.steps);
                    if (l.input = l.container.appendChild(document.createElement("span")), l.input.className = g["guify-interval"], l.handle = document.createElement("span"), l.handle.className = g["guify-interval-handle"], l.input.appendChild(l.handle), Array.isArray(o.initial) || (o.initial = []), "log" === o.scale) {
                        if (o.max = (0, d.default)(o.max) ? o.max : 100, o.min = (0, d.default)(o.min) ? o.min : .1, o.min * o.max <= 0) throw new Error("Log range min/max must have the same sign and not equal zero. Got min = " + o.min + ", max = " + o.max);
                        if (l.logmin = o.min, l.logmax = o.max, l.logsign = o.min > 0 ? 1 : -1, l.logmin = Math.abs(l.logmin), l.logmax = Math.abs(l.logmax), o.min = 0, o.max = 100, (0, d.default)(o.step)) throw new Error("Log may only use steps (integer number of steps), not a step value. Got step =" + o.step);
                        if (o.step = 1, o.initial = [l.InverseScaleValue((0, d.default)(o.initial) ? o.initial[0] : scaleValue(o.min + .25 * (o.max - o.min))), l.InverseScaleValue((0, d.default)(o.initial) ? o.initial[1] : scaleValue(o.min + .75 * (o.max - o.min)))], l.ScaleValue(o.initial[0]) * l.ScaleValue(o.max) <= 0 || scaleValue(o.initial[1]) * l.ScaleValue(o.max) <= 0) throw new Error("Log range initial value must have the same sign as min/max and must not equal zero. Got initial value = [" + l.ScaleValue(o.initial[0]) + ", " + l.ScaleValue(o.initial[1]) + "]")
                    } else o.max = (0, d.default)(o.max) ? o.max : 100, o.min = (0, d.default)(o.min) ? o.min : 0, o.step = (0, d.default)(o.step) ? o.step : .01, o.initial = [(0, d.default)(o.initial[0]) ? o.initial[0] : .25 * (o.min + o.max), (0, d.default)(o.initial[1]) ? o.initial[1] : .75 * (o.min + o.max)];
                    (0, d.default)(o.steps) && (o.step = (0, d.default)(o.steps) ? (o.max - o.min) / o.steps : o.step), o.initial[0] = o.min + o.step * Math.round((o.initial[0] - o.min) / o.step), o.initial[1] = o.min + o.step * Math.round((o.initial[1] - o.min) / o.step), l.value = o.initial, (0, p.default)(l.handle, {
                        left: (l.value[0] - o.min) / (o.max - o.min) * 100 + "%",
                        right: 100 - (l.value[1] - o.min) / (o.max - o.min) * 100 + "%"
                    }), l.lValue = t(6)(l.container, l.ScaleValue(o.initial[0]), a, "11%", !0), l.rValue = t(6)(l.container, l.ScaleValue(o.initial[1]), a, "11%"), o.label && l.lValue.setAttribute("aria-label", o.label + " lower value"), o.label && l.lValue.setAttribute("aria-label", o.label + " upper value"), l.activeIndex = -1, setTimeout(function () {
                        var e = l.ScaleValue(l.value[0]),
                            n = l.ScaleValue(l.value[1]);
                        l.lValue.innerHTML = e, l.rValue.innerHTML = n, l.emit("initialized", [e, n])
                    }), l.input.addEventListener("focus", function () {
                        l.focused = !0
                    }), l.input.addEventListener("blur", function () {
                        l.focused = !1
                    });
                    var c = function (e) {
                            return e.pageX - l.input.getBoundingClientRect()
                                .left
                        },
                        f = function (e) {
                            var n = s(c(e) / l.input.offsetWidth, 0, 1);
                            l.setActiveValue(n)
                        },
                        h = function e(n) {
                            var t = s(c(n) / l.input.offsetWidth, 0, 1);
                            l.setActiveValue(t), document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", e), l.activeIndex = -1
                        };
                    return l.input.addEventListener("mousedown", function (e) {
                        var n = s(c(e) / l.input.offsetWidth, 0, 1),
                            t = (l.value[0] - o.min) / (o.max - o.min),
                            i = (l.value[1] - o.min) / (o.max - o.min);
                        t -= 1e-15 * Math.abs(o.max - o.min), i += 1e-15 * Math.abs(o.max - o.min);
                        var r = Math.abs(t - n),
                            a = Math.abs(i - n);
                        l.activeIndex = r < a ? 0 : 1, console.log(l.activeIndex), document.addEventListener("mousemove", f), document.addEventListener("mouseup", h)
                    }), l.input.addEventListener("mouseup", function () {
                        l.input.blur()
                    }), l.input.oninput = function () {
                        var e = l.ScaleValue(l.value[0]),
                            n = l.ScaleValue(l.value[1]);
                        l.lValue.value = e, l.rValue.value = n, l.emit("input", [e, n])
                    }, l.lValue.onchange = function () {
                        var e = l.lValue.value,
                            n = parseFloat(l.rValue.value);
                        if (Number(parseFloat(e)) == e) {
                            var t = parseFloat(e);
                            t = Math.min(Math.max(t, o.min), o.max), t = Math.ceil((t - o.min) / o.step) * o.step + o.min, t = Math.min(t, n), l.lValue.value = t, l.emit("input", [t, n]), l.RefreshHandle([t, n])
                        } else l.lValue.value = l.lastValue[0]
                    }, l.rValue.onchange = function () {
                        var e = l.rValue.value,
                            n = parseFloat(l.lValue.value);
                        if (Number(parseFloat(e)) == e) {
                            var t = parseFloat(e);
                            t = Math.min(Math.max(t, o.min), o.max), t = Math.ceil((t - o.min) / o.step) * o.step + o.min, t = Math.max(t, n), l.rValue.value = t, l.emit("input", [n, t]), l.RefreshHandle([n, t])
                        } else l.rValue.value = l.lastValue[1]
                    }, l
                }
                return a(n, e), u(n, [{
                    key: "ScaleValue",
                    value: function (e) {
                        return "log" === this.opts.scale ? this.logsign * Math.exp(Math.log(this.logmin) + (Math.log(this.logmax) - Math.log(this.logmin)) * e / 100) : e
                    }
                }, {
                    key: "InverseScaleValue",
                    value: function (e) {
                        return "log" === this.opts.scale ? 100 * (Math.log(e * this.logsign) - Math.log(this.logmin)) / (Math.log(this.logmax) - Math.log(this.logmin)) : e
                    }
                }, {
                    key: "setActiveValue",
                    value: function (e) {
                        if (-1 !== this.activeIndex) {
                            var n = this.opts,
                                t = (this.value[0] - n.min) / (n.max - n.min),
                                o = (this.value[1] - n.min) / (n.max - n.min);
                            e = 0 === this.activeIndex ? Math.min(o, e) : Math.max(t, e);
                            var i = n.min + Math.round((n.max - n.min) * e / n.step) * n.step;
                            this.value[this.activeIndex] = i, (0, p.default)(this.handle, {
                                left: (this.value[0] - n.min) / (n.max - n.min) * 100 + "%",
                                right: 100 - (this.value[1] - n.min) / (n.max - n.min) * 100 + "%"
                            }), this.input.oninput()
                        }
                    }
                }, {
                    key: "SetValue",
                    value: function (e) {
                        !0 !== this.focused && (this.lValue.value = this.FormatNumber(e[0]), this.rValue.value = this.FormatNumber(e[1]), this.lastValue = [this.lValue.value, this.rValue.value])
                    }
                }, {
                    key: "FormatNumber",
                    value: function (e) {
                        return e.toFixed(3)
                            .replace(/\.?0*$/, "")
                    }
                }, {
                    key: "GetValue",
                    value: function () {
                        return [this.lValue.value, this.rValue.value]
                    }
                }, {
                    key: "RefreshHandle",
                    value: function (e) {
                        var n = (parseFloat(e[0]) - this.opts.min) / (this.opts.max - this.opts.min) * 100,
                            t = 100 - (parseFloat(e[1]) - this.opts.min) / (this.opts.max - this.opts.min) * 100;
                        (0, p.default)(this.handle, {
                            left: n + "%",
                            right: t + "%"
                        })
                    }
                }]), n
            }(c.default);
        n.default = b, e.exports = n.default
    }, function (e, n, t) {
        "use strict";
        var o = function (e, n) {
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }(["\n.guify-interval {\n    -webkit-appearance: none;\n    position: absolute;\n    height: 20px;\n    margin: 0px 0;\n    width: 33%;\n    left: 54.5%;\n    background-color: ", ";\n    cursor: ew-resize;\n\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.guify-interval-handle {\n    background-color: ", ";\n    position: absolute;\n    height: ", ";\n    min-width: 1px;\n}\n.guify-interval-handle:focus {\n    background: ", ";\n}\n"], ["\n.guify-interval {\n    -webkit-appearance: none;\n    position: absolute;\n    height: 20px;\n    margin: 0px 0;\n    width: 33%;\n    left: 54.5%;\n    background-color: ", ";\n    cursor: ew-resize;\n\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.guify-interval-handle {\n    background-color: ", ";\n    position: absolute;\n    height: ", ";\n    min-width: 1px;\n}\n.guify-interval-handle:focus {\n    background: ", ";\n}\n"]),
            i = t(1),
            r = t(3),
            a = i.theme.colors.componentBackground,
            s = i.theme.colors.componentForeground,
            u = i.theme.colors.componentActive;
        e.exports = r(o, a, s, i.theme.sizing.componentHeight, u)
    }, function (e, n, t) {
        "use strict";
        
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        
        function i(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        
        function r(e, n) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != typeof n && "function" != typeof n ? e : n
        }
        
        function a(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            e.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.MenuBar = void 0;
        var s = function () {
                function e(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var o = n[t];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (n, t, o) {
                    return t && e(n.prototype, t), o && e(n, o), n
                }
            }(),
            u = t(0),
            l = o(u),
            c = t(4),
            f = o(c),
            p = (t(1), t(15)),
            h = o(p);
        n.MenuBar = function (e) {
            function n(e, o) {
                i(this, n);
                var a = r(this, (n.__proto__ || Object.getPrototypeOf(n))
                        .call(this)),
                    s = t(73);
                if (a.element = document.createElement("div"), a.element.className = s["guify-bar"], e.appendChild(a.element), o.title) {
                    var u = a.element.appendChild(document.createElement("div"));
                    u.className = s["guify-bar-title"], u.innerHTML = o.title
                }
                var c = a.element.appendChild(document.createElement("button"));
                if (c.className = s["guify-bar-button"], c.innerHTML = "Controls", (0, l.default)(c, {
                        left: "left" == o.align ? "0" : "unset",
                        right: "left" == o.align ? "unset" : "0"
                    }), c.onclick = function () {
                        a.emit("ontogglepanel")
                    }, h.default.isEnabled) {
                    var f = a.element.appendChild(document.createElement("button"));
                    f.className = s["guify-bar-button"], f.innerHTML = "「　」", f.setAttribute("aria-label", "Toggle Fullscreen"), (0, l.default)(f, {
                        left: "left" == o.align ? "unset" : "0",
                        right: "left" == o.align ? "0" : "unset"
                    }), f.onclick = function () {
                        a.emit("onfullscreenrequested")
                    }
                }
                return a
            }
            return a(n, e), s(n, [{
                key: "SetVisible",
                value: function (e) {
                    this.element.style.display = e ? "block" : "none"
                }
            }]), n
        }(f.default)
    }, function (e, n, t) {
        "use strict";
        var o = function (e, n) {
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }(["\n\n.guify-bar {\n    background-color: ", ";\n    height: ", ";\n    width: 100%;\n    opacity: 1.0;\n    position: relative;\n    cursor: default;\n}\n\n.guify-bar-title {\n    color: ", ";\n    text-align: center;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    line-height: ", ";\n    color: ", ";\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.guify-bar-button {\n    text-align: center;\n    border: none;\n    cursor: pointer;\n    font-family: inherit;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    color: ", ";\n    background-color: ", ";\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    margin: 0;\n\n}\n\n/* Hide default accessibility outlines since we're providing our own visual feedback */\n.guify-bar-button:focus {\n    outline:none;\n}\n.guify-bar-button::-moz-focus-inner {\n    border:0;\n}\n\n.guify-bar-button:hover,\n.guify-bar-button:focus {\n    color: ", ";\n    background-color: ", ";\n}\n\n.guify-bar-button:active {\n    color: ", " !important;\n    background-color: ", " !important;\n}\n\n\n"], ["\n\n.guify-bar {\n    background-color: ", ";\n    height: ", ";\n    width: 100%;\n    opacity: 1.0;\n    position: relative;\n    cursor: default;\n}\n\n.guify-bar-title {\n    color: ", ";\n    text-align: center;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    line-height: ", ";\n    color: ", ";\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.guify-bar-button {\n    text-align: center;\n    border: none;\n    cursor: pointer;\n    font-family: inherit;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    color: ", ";\n    background-color: ", ";\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    margin: 0;\n\n}\n\n/* Hide default accessibility outlines since we're providing our own visual feedback */\n.guify-bar-button:focus {\n    outline:none;\n}\n.guify-bar-button::-moz-focus-inner {\n    border:0;\n}\n\n.guify-bar-button:hover,\n.guify-bar-button:focus {\n    color: ", ";\n    background-color: ", ";\n}\n\n.guify-bar-button:active {\n    color: ", " !important;\n    background-color: ", " !important;\n}\n\n\n"]),
            i = t(1),
            r = t(3);
        e.exports = r(o, i.theme.colors.menuBarBackground, i.theme.sizing.menuBarHeight, i.theme.colors.text1, i.theme.sizing.menuBarHeight, i.theme.colors.menuBarText, i.theme.colors.textPrimary, i.theme.colors.componentBackground, i.theme.colors.textHover, i.theme.colors.componentForeground, i.theme.colors.textActive, i.theme.colors.componentActive)
    }, function (e, n, t) {
        "use strict";
        
        function o(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.Panel = void 0;
        var i = function () {
                function e(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var o = n[t];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (n, t, o) {
                    return t && e(n.prototype, t), o && e(n, o), n
                }
            }(),
            r = t(0),
            a = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r),
            s = t(1);
        n.Panel = function () {
            function e(n, i) {
                o(this, e), this.opts = i, this.styles = t(75), this.container = n.appendChild(document.createElement("div")), this.container.className = this.styles["guify-panel-container"], (0, a.default)(this.container, {
                    width: i.width,
                    opacity: i.opacity || 1,
                    left: "left" == i.align ? "0" : "unset",
                    right: "left" == i.align ? "unset" : "0"
                }), "outer" == i.panelMode && (0, a.default)(this.container, {
                    left: "left" == i.align ? "unset" : "100%",
                    right: "left" == i.align ? "100%" : "unset"
                }), "none" === i.barMode && this._MakeToggleButton(), this.panel = this.container.appendChild(document.createElement("div")), this.panel.className = this.styles["guify-panel"], "none" === i.barMode && i.title && t(76)(this.panel, i.title, s.theme)
            }
            return i(e, [{
                key: "SetVisible",
                value: function (e) {
                    e ? (this.panel.classList.remove(this.styles["guify-panel-hidden"]), this.menuButton && this.menuButton.setAttribute("alt", "Close GUI")) : (this.panel.classList.add(this.styles["guify-panel-hidden"]), this.menuButton && this.menuButton.setAttribute("alt", "Open GUI"))
                }
            }, {
                key: "ToggleVisible",
                value: function () {
                    this.panel.classList.contains(this.styles["guify-panel-hidden"]) ? this.SetVisible(!0) : this.SetVisible(!1)
                }
            }, {
                key: "_MakeToggleButton",
                value: function () {
                    var e = this;
                    this.menuButton = this.container.appendChild(document.createElement("button")), this.menuButton.className = this.styles["guify-panel-toggle-button"], (0, a.default)(this.menuButton, {
                        left: "left" == this.opts.align ? "0px" : "unset",
                        right: "left" == this.opts.align ? "unset" : "0px"
                    }), this.menuButton.onclick = function () {
                        e.ToggleVisible()
                    }, this.menuButton.addEventListener("mouseup", function () {
                        e.menuButton.blur()
                    }), this.menuButton.innerHTML = '\n        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">\n            <rect x="10%" y="10%" width="80%" height="80%"/>\n        </svg>\n        '
                }
            }]), e
        }()
    }, function (e, n, t) {
        "use strict";
        var o = function (e, n) {
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }(["\n\n.guify-panel-container {\n    position: absolute;\n    background: ", ";\n}\n\n.guify-panel {\n    padding: 14px;\n    /* Last component will have a margin, so reduce padding to account for this */\n    padding-bottom: calc(14px - ", ");\n\n    /* all: initial;  */\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default;\n    text-align: left;\n    box-sizing: border-box;\n}\n\n.guify-panel.guify-panel-hidden {\n    height: 0px;\n    display: none;\n}\n\n.guify-panel * {\n    box-sizing: initial;\n    -webkit-box-sizing: initial;\n    -moz-box-sizing: initial;\n}\n\n.guify-panel input {\n    font-family: 'Hack';\n    font-size: 11px;\n    display: inline;\n}\n\n.guify-panel a {\n    color: inherit;\n    text-decoration: none;\n}\n\n.guify-panel-toggle-button {\n    position: absolute;\n    top: 0;\n    margin: 0;\n    padding: 0;\n    width: 15px;\n    height: 15px;\n    line-height: 15px;\n    text-align: center;\n    border: none;\n    cursor: pointer;\n    font-family: inherit;\n    color: ", ";\n    background-color: ", ";\n\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n}\n\n/* Open/Close button styling */\n.guify-panel-toggle-button svg {\n    fill-opacity: 0;\n    stroke-width: 3;\n    stroke: ", ";\n}\n\n/* Remove browser default outlines since we're providing our own */\n.guify-panel-toggle-button:focus {\n    outline:none;\n}\n.guify-panel-toggle-button::-moz-focus-inner {\n    border: 0;\n}\n\n.guify-panel-toggle-button:hover,\n.guify-panel-toggle-button:focus {\n    color: ", ";\n    background-color: ", ";\n}\n\n.guify-panel-toggle-button:active {\n    color: ", ";\n    background-color: ", ";\n}\n\n"], ["\n\n.guify-panel-container {\n    position: absolute;\n    background: ", ";\n}\n\n.guify-panel {\n    padding: 14px;\n    /* Last component will have a margin, so reduce padding to account for this */\n    padding-bottom: calc(14px - ", ");\n\n    /* all: initial;  */\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default;\n    text-align: left;\n    box-sizing: border-box;\n}\n\n.guify-panel.guify-panel-hidden {\n    height: 0px;\n    display: none;\n}\n\n.guify-panel * {\n    box-sizing: initial;\n    -webkit-box-sizing: initial;\n    -moz-box-sizing: initial;\n}\n\n.guify-panel input {\n    font-family: 'Hack';\n    font-size: 11px;\n    display: inline;\n}\n\n.guify-panel a {\n    color: inherit;\n    text-decoration: none;\n}\n\n.guify-panel-toggle-button {\n    position: absolute;\n    top: 0;\n    margin: 0;\n    padding: 0;\n    width: 15px;\n    height: 15px;\n    line-height: 15px;\n    text-align: center;\n    border: none;\n    cursor: pointer;\n    font-family: inherit;\n    color: ", ";\n    background-color: ", ";\n\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n}\n\n/* Open/Close button styling */\n.guify-panel-toggle-button svg {\n    fill-opacity: 0;\n    stroke-width: 3;\n    stroke: ", ";\n}\n\n/* Remove browser default outlines since we're providing our own */\n.guify-panel-toggle-button:focus {\n    outline:none;\n}\n.guify-panel-toggle-button::-moz-focus-inner {\n    border: 0;\n}\n\n.guify-panel-toggle-button:hover,\n.guify-panel-toggle-button:focus {\n    color: ", ";\n    background-color: ", ";\n}\n\n.guify-panel-toggle-button:active {\n    color: ", ";\n    background-color: ", ";\n}\n\n"]),
            i = t(1),
            r = t(3);
        e.exports = r(o, i.theme.colors.panelBackground, i.theme.sizing.componentSpacing, i.theme.colors.textPrimary, i.theme.colors.componentBackground, i.theme.colors.componentForeground, i.theme.colors.textHover, i.theme.colors.componentForeground, i.theme.colors.textActive, i.theme.colors.componentActive)
    }, function (e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = function (e, n, t) {
            var o = e.appendChild(document.createElement("div"));
            return o.innerHTML = n, (0, i.default)(o, {
                width: "100%",
                textAlign: "center",
                color: t.colors.textSecondary,
                height: "20px",
                marginBottom: "4px"
            }), o
        };
        var o = t(0),
            i = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o);
        e.exports = n.default
    }, function (e, n, t) {
        "use strict";
        
        function o(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.ToastArea = void 0;
        var i = function () {
                function e(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var o = n[t];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function (n, t, o) {
                    return t && e(n.prototype, t), o && e(n, o), n
                }
            }(),
            r = t(0),
            a = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r);
        t(1), n.ToastArea = function () {
            function e(n, i) {
                o(this, e), this.opts = i, this.styles = t(78), this.element = n.appendChild(document.createElement("div")), this.element.classList.add(this.styles["guify-toast-area"]), (0, a.default)(this.element, {
                    position: "absolute",
                    width: "100%"
                })
            }
            return i(e, [{
                key: "CreateToast",
                value: function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e3,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    console.log("[Toast] " + e);
                    var o = this.element.appendChild(document.createElement("div"));
                    o.classList.add(this.styles["guify-toast-notification"]), o.setAttribute("aria-live", "polite"), o.innerHTML = e, (0, a.default)(o, {});
                    var i = o.appendChild(document.createElement("button"));
                    i.innerHTML = "&#10006;", i.classList.add(this.styles["guify-toast-close-button"]);
                    var r = void 0,
                        s = function () {
                            o.blur(), (0, a.default)(o, {
                                opacity: "0"
                            }), clearTimeout(r), r = setTimeout(function () {
                                o && o.parentNode.removeChild(o)
                            }, t)
                        };
                    r = setTimeout(s, n), i.onclick = s
                }
            }]), e
        }()
    }, function (e, n, t) {
        "use strict";
        var o = function (e, n) {
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }(["\n\n.guify-toast-notification {\n    box-sizing: border-box;\n    color: theme.colors.text1;\n    position: relative;\n    width: 100%;\n    /* height: 20px; */\n    padding: 8px;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-align: center;\n    font-family: 'Hack', monospace;\n    font-size: 11px;\n}\n\n.guify-toast-area .guify-toast-notification:nth-child(odd) {\n    color: ", ";\n    background-color: ", ";\n}\n\n.guify-toast-area .guify-toast-notification:nth-child(even) {\n    color: ", ";\n    background-color: ", ";\n}\n\n.guify-toast-close-button {\n    color: ", ";\n    background: transparent;\n    position: absolute;\n    textAlign: center;\n    margin-top: auto;\n    margin-bottom: auto;\n    border: none;\n    cursor: pointer;\n    top: 0;\n    bottom: 0;\n    right: 8px;\n}\n\n"], ["\n\n.guify-toast-notification {\n    box-sizing: border-box;\n    color: theme.colors.text1;\n    position: relative;\n    width: 100%;\n    /* height: 20px; */\n    padding: 8px;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-align: center;\n    font-family: 'Hack', monospace;\n    font-size: 11px;\n}\n\n.guify-toast-area .guify-toast-notification:nth-child(odd) {\n    color: ", ";\n    background-color: ", ";\n}\n\n.guify-toast-area .guify-toast-notification:nth-child(even) {\n    color: ", ";\n    background-color: ", ";\n}\n\n.guify-toast-close-button {\n    color: ", ";\n    background: transparent;\n    position: absolute;\n    textAlign: center;\n    margin-top: auto;\n    margin-bottom: auto;\n    border: none;\n    cursor: pointer;\n    top: 0;\n    bottom: 0;\n    right: 8px;\n}\n\n"]),
            i = t(1),
            r = t(3);
        e.exports = r(o, i.theme.colors.textPrimary, i.theme.colors.panelBackground, i.theme.colors.textPrimary, i.theme.colors.menuBarBackground, i.theme.colors.textPrimary)
    }, function (e, n, t) {
        "use strict";
        var o = function (e, n) {
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }(["\n\n.guify-container {\n    position: relative;\n    left: 0;\n    width: 100%;\n    font-size: 11px;\n    z-index: 9999;\n}\n\n"], ["\n\n.guify-container {\n    position: relative;\n    left: 0;\n    width: 100%;\n    font-size: 11px;\n    z-index: 9999;\n}\n\n"]),
            i = (t(1), t(3));
        e.exports = i(o)
    }])
});
