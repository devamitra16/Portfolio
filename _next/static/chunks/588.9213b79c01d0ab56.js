(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[588], {
    4077: function(e, t, r) {
        var n;
        n = function(e) {
            "use strict";
            var t, r, n, o, a = e && "object" == typeof e && "default"in e ? e : {
                default: e
            }, s = {
                exports: {}
            };
            function u(t, r, n=window) {
                let o = e.useRef();
                e.useEffect(()=>{
                    o.current = r
                }
                , [r]),
                e.useEffect(()=>{
                    let e = n && n.addEventListener;
                    if (!e)
                        return;
                    let r = e=>o.current(e);
                    return n.addEventListener(t, r),
                    ()=>{
                        n.removeEventListener(t, r)
                    }
                }
                , [t, n])
            }
            s.exports = (function() {
                if (o)
                    return n;
                o = 1;
                var e = r ? t : (r = 1,
                t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                function a() {}
                function s() {}
                return s.resetWarningCache = a,
                n = function() {
                    function t(t, r, n, o, a, s) {
                        if (s !== e) {
                            var u = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw u.name = "Invariant Violation",
                            u
                        }
                    }
                    function r() {
                        return t
                    }
                    t.isRequired = t;
                    var n = {
                        array: t,
                        bigint: t,
                        bool: t,
                        func: t,
                        number: t,
                        object: t,
                        string: t,
                        symbol: t,
                        any: t,
                        arrayOf: r,
                        element: t,
                        elementType: t,
                        instanceOf: r,
                        node: t,
                        objectOf: r,
                        oneOf: r,
                        oneOfType: r,
                        shape: r,
                        exact: r,
                        checkPropTypes: s,
                        resetWarningCache: a
                    };
                    return n.PropTypes = n,
                    n
                }
            }
            )()();
            let i = (()=>{
                if ("undefined" == typeof navigator)
                    return;
                let e = navigator.userAgent;
                return {
                    info: e,
                    Android: ()=>e.match(/Android/i),
                    BlackBerry: ()=>e.match(/BlackBerry/i),
                    IEMobile: ()=>e.match(/IEMobile/i),
                    iOS: ()=>e.match(/iPhone|iPad|iPod/i),
                    iPad: ()=>e.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2,
                    OperaMini: ()=>e.match(/Opera Mini/i),
                    any: ()=>i.Android() || i.BlackBerry() || i.iOS() || i.iPad() || i.OperaMini() || i.IEMobile()
                }
            }
            )();
            function c({outerStyle: t, innerStyle: r, color: n="220, 90, 90", outerAlpha: o=.3, innerSize: s=8, outerSize: i=8, outerScale: c=6, innerScale: l=.6, trailingSpeed: p=8, clickables: f=["a", 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', "label[for]", "select", "textarea", "button", ".link"]}) {
                let m = e.useRef()
                  , d = e.useRef()
                  , y = e.useRef()
                  , b = e.useRef()
                  , [v,E] = e.useState({
                    x: 0,
                    y: 0
                })
                  , [h,x] = e.useState(!1)
                  , [k,g] = e.useState(!1)
                  , [S,O] = e.useState(!1)
                  , C = e.useRef(0)
                  , L = e.useRef(0)
                  , R = e.useCallback(({clientX: e, clientY: t})=>{
                    E({
                        x: e,
                        y: t
                    }),
                    d.current.style.top = `${t}px`,
                    d.current.style.left = `${e}px`,
                    C.current = e,
                    L.current = t
                }
                , [])
                  , P = e.useCallback(e=>{
                    void 0 !== b.current && (v.x += (C.current - v.x) / p,
                    v.y += (L.current - v.y) / p,
                    m.current.style.top = `${v.y}px`,
                    m.current.style.left = `${v.x}px`),
                    b.current = e,
                    y.current = requestAnimationFrame(P)
                }
                , [y]);
                e.useEffect(()=>(y.current = requestAnimationFrame(P),
                ()=>cancelAnimationFrame(y.current)), [P]);
                let T = e.useCallback(()=>g(!0), [])
                  , _ = e.useCallback(()=>g(!1), [])
                  , w = e.useCallback(()=>x(!0), [])
                  , A = e.useCallback(()=>x(!1), []);
                u("mousemove", R),
                u("mousedown", T),
                u("mouseup", _),
                u("mouseover", w),
                u("mouseout", A),
                e.useEffect(()=>{
                    k ? (d.current.style.transform = `translate(-50%, -50%) scale(${l})`,
                    m.current.style.transform = `translate(-50%, -50%) scale(${c})`) : (d.current.style.transform = "translate(-50%, -50%) scale(1)",
                    m.current.style.transform = "translate(-50%, -50%) scale(1)")
                }
                , [l, c, k]),
                e.useEffect(()=>{
                    S && (d.current.style.transform = `translate(-50%, -50%) scale(${1.2 * l})`,
                    m.current.style.transform = `translate(-50%, -50%) scale(${1.4 * c})`)
                }
                , [l, c, S]),
                e.useEffect(()=>{
                    h ? (d.current.style.opacity = 1,
                    m.current.style.opacity = 1) : (d.current.style.opacity = 0,
                    m.current.style.opacity = 0)
                }
                , [h]),
                e.useEffect(()=>{
                    let e = document.querySelectorAll(f.join(","));
                    return e.forEach(e=>{
                        e.style.cursor = "none",
                        e.addEventListener("mouseover", ()=>{
                            g(!0)
                        }
                        ),
                        e.addEventListener("click", ()=>{
                            g(!0),
                            O(!1)
                        }
                        ),
                        e.addEventListener("mousedown", ()=>{
                            O(!0)
                        }
                        ),
                        e.addEventListener("mouseup", ()=>{
                            g(!0)
                        }
                        ),
                        e.addEventListener("mouseout", ()=>{
                            g(!1),
                            O(!1)
                        }
                        )
                    }
                    ),
                    ()=>{
                        e.forEach(e=>{
                            e.removeEventListener("mouseover", ()=>{
                                g(!0)
                            }
                            ),
                            e.removeEventListener("click", ()=>{
                                g(!0),
                                O(!1)
                            }
                            ),
                            e.removeEventListener("mousedown", ()=>{
                                O(!0)
                            }
                            ),
                            e.removeEventListener("mouseup", ()=>{
                                g(!0)
                            }
                            ),
                            e.removeEventListener("mouseout", ()=>{
                                g(!1),
                                O(!1)
                            }
                            )
                        }
                        )
                    }
                }
                , [k, f]);
                let I = {
                    cursorInner: {
                        zIndex: 999,
                        display: "block",
                        position: "fixed",
                        borderRadius: "50%",
                        width: s,
                        height: s,
                        pointerEvents: "none",
                        backgroundColor: `rgba(${n}, 1)`,
                        ...r && r,
                        transition: "opacity 0.15s ease-in-out, transform 0.25s ease-in-out"
                    },
                    cursorOuter: {
                        zIndex: 999,
                        display: "block",
                        position: "fixed",
                        borderRadius: "50%",
                        pointerEvents: "none",
                        width: i,
                        height: i,
                        backgroundColor: `rgba(${n}, ${o})`,
                        transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
                        willChange: "transform",
                        ...t && t
                    }
                };
                return document.body.style.cursor = "none",
                a.default.createElement(a.default.Fragment, null, a.default.createElement("div", {
                    ref: m,
                    style: I.cursorOuter
                }), a.default.createElement("div", {
                    ref: d,
                    style: I.cursorInner
                }))
            }
            function l({outerStyle: e, innerStyle: t, color: r, outerAlpha: n, innerSize: o, innerScale: s, outerSize: u, outerScale: l, trailingSpeed: p, clickables: f}) {
                return "undefined" != typeof navigator && i.any() ? a.default.createElement(a.default.Fragment, null) : a.default.createElement(c, {
                    outerStyle: e,
                    innerStyle: t,
                    color: r,
                    outerAlpha: n,
                    innerSize: o,
                    innerScale: s,
                    outerSize: u,
                    outerScale: l,
                    trailingSpeed: p,
                    clickables: f
                })
            }
            return l.propTypes = {
                color: s.exports.string,
                outerAlpha: s.exports.number,
                innerSize: s.exports.number,
                outerSize: s.exports.number,
                outerScale: s.exports.number,
                innerScale: s.exports.number,
                outerStyle: s.exports.object,
                innerStyle: s.exports.object,
                trailingSpeed: s.exports.number,
                clickables: s.exports.array
            },
            l
        }
        ,
        e.exports = n(r(7294))
    }
}]);
