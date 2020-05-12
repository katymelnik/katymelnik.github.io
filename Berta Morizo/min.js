! function (e, t, n, o, r) {
    "function" == typeof define && define.amd ? define(function () {
        return e.fullpage = o(t, n), e.fullpage
    }) : "object" == typeof exports ? module.exports = o(t, n) : t.fullpage = o(t, n)
}(this, window, document, function (rn, ln) {
    "use strict";
    var an = "fullpage-wrapper",
        sn = "." + an,
        cn = "fp-responsive",
        un = "fp-notransition",
        fn = "fp-destroyed",
        dn = "fp-enabled",
        vn = "fp-viewing",
        pn = "active",
        hn = "." + pn,
        gn = "fp-completely",
        mn = "fp-section",
        Sn = "." + mn,
        bn = Sn + hn,
        wn = "fp-tableCell",
        yn = "." + wn,
        En = "fp-auto-height",
        xn = "fp-normal-scroll",
        An = "fp-nav",
        Ln = "#" + An,
        Mn = "fp-tooltip",
        Tn = "fp-slide",
        On = "." + Tn,
        kn = On + hn,
        Cn = "fp-slides",
        Hn = "." + Cn,
        Rn = "fp-slidesContainer",
        In = "." + Rn,
        zn = "fp-table",
        Bn = "fp-slidesNav",
        Nn = "." + Bn,
        jn = Nn + " a",
        e = "fp-controlArrow",
        Pn = "." + e,
        Wn = "fp-prev",
        Dn = Pn + ".fp-prev",
        Yn = Pn + ".fp-next";

    function Vn(e, t) {
        rn.console && rn.console[e] && rn.console[e]("fullPage: " + t)
    }

    function Zn(e, t) {
        return (t = 1 < arguments.length ? t : ln) ? t.querySelectorAll(e) : null
    }

    function Xn(e) {
        e = e || {};
        for (var t = 1, n = arguments.length; t < n; ++t) {
            var o = arguments[t];
            if (o)
                for (var r in o) o.hasOwnProperty(r) && ("[object Object]" !== Object.prototype.toString.call(o[r]) ? e[r] = o[r] : e[r] = Xn(e[r], o[r]))
        }
        return e
    }

    function Gn(e, t) {
        return null != e && (e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className))
    }

    function Fn() {
        return "innerHeight" in rn ? rn.innerHeight : ln.documentElement.offsetHeight
    }

    function Un() {
        return rn.innerWidth
    }

    function Qn(e, t) {
        var n;
        for (n in e = l(e), t)
            if (t.hasOwnProperty(n) && null !== n)
                for (var o = 0; o < e.length; o++) {
                    e[o].style[n] = t[n]
                }
        return e
    }

    function n(e, t, n) {
        for (var o = e[n]; o && !bo(o, t);) o = o[n];
        return o
    }

    function _n(e, t) {
        return n(e, t, "previousElementSibling")
    }

    function Jn(e, t) {
        return n(e, t, "nextElementSibling")
    }

    function Kn(e, t) {
        if (null == t) return e.previousElementSibling;
        var n = Kn(e);
        return n && bo(n, t) ? n : null
    }

    function $n(e, t) {
        if (null == t) return e.nextElementSibling;
        var n = $n(e);
        return n && bo(n, t) ? n : null
    }

    function qn(e) {
        return e[e.length - 1]
    }

    function eo(e, t) {
        e = oo(e) ? e[0] : e;
        for (var n = null != t ? Zn(t, e.parentNode) : e.parentNode.childNodes, o = 0, r = 0; r < n.length; r++) {
            if (n[r] == e) return o;
            1 == n[r].nodeType && o++
        }
        return -1
    }

    function l(e) {
        return oo(e) ? e : [e]
    }

    function to(e) {
        e = l(e);
        for (var t = 0; t < e.length; t++) e[t].style.display = "none";
        return e
    }

    function no(e) {
        e = l(e);
        for (var t = 0; t < e.length; t++) e[t].style.display = "block";
        return e
    }

    function oo(e) {
        return "[object Array]" === Object.prototype.toString.call(e) || "[object NodeList]" === Object.prototype.toString.call(e)
    }

    function ro(e, t) {
        e = l(e);
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.classList ? o.classList.add(t) : o.className += " " + t
        }
        return e
    }

    function io(e, t) {
        e = l(e);
        for (var n = t.split(" "), o = 0; o < n.length; o++) {
            t = n[o];
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.classList ? i.classList.remove(t) : i.className = i.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")
            }
        }
        return e
    }

    function lo(e, t) {
        t.appendChild(e)
    }

    function o(e, t, n) {
        var o;
        t = t || ln.createElement("div");
        for (var r = 0; r < e.length; r++) {
            var i = e[r];
            (n && !r || !n) && (o = t.cloneNode(!0), i.parentNode.insertBefore(o, i)), o.appendChild(i)
        }
        return e
    }

    function ao(e, t) {
        o(e, t, !0)
    }

    function so(e, t) {
        for ("string" == typeof t && (t = yo(t)), e.appendChild(t); e.firstChild !== t;) t.appendChild(e.firstChild)
    }

    function co(e) {
        for (var t = ln.createDocumentFragment(); e.firstChild;) t.appendChild(e.firstChild);
        e.parentNode.replaceChild(t, e)
    }

    function uo(e, t) {
        return e && 1 === e.nodeType ? bo(e, t) ? e : uo(e.parentNode, t) : null
    }

    function fo(e, t) {
        r(e, e.nextSibling, t)
    }

    function vo(e, t) {
        r(e, e, t)
    }

    function r(e, t, n) {
        oo(n) || ("string" == typeof n && (n = yo(n)), n = [n]);
        for (var o = 0; o < n.length; o++) e.parentNode.insertBefore(n[o], t)
    }

    function po() {
        var e = ln.documentElement;
        return (rn.pageYOffset || e.scrollTop) - (e.clientTop || 0)
    }

    function ho(t) {
        return Array.prototype.filter.call(t.parentNode.children, function (e) {
            return e !== t
        })
    }

    function go(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }

    function mo(e) {
        if ("function" == typeof e) return !0;
        var t = Object.prototype.toString(e);
        return "[object Function]" === t || "[object GeneratorFunction]" === t
    }

    function So(e, t, n) {
        var o;
        n = void 0 === n ? {} : n, "function" == typeof rn.CustomEvent ? o = new CustomEvent(t, {
            detail: n
        }) : (o = ln.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n), e.dispatchEvent(o)
    }

    function bo(e, t) {
        return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t)
    }

    function wo(e, t) {
        if ("boolean" == typeof t)
            for (var n = 0; n < e.length; n++) e[n].style.display = t ? "block" : "none";
        return e
    }

    function yo(e) {
        var t = ln.createElement("div");
        return t.innerHTML = e.trim(), t.firstChild
    }

    function Eo(e) {
        e = l(e);
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            n && n.parentElement && n.parentNode.removeChild(n)
        }
    }

    function i(e, t, n) {
        for (var o = e[n], r = []; o;)(bo(o, t) || null == t) && r.push(o), o = o[n];
        return r
    }

    function xo(e, t) {
        return i(e, t, "nextElementSibling")
    }

    function Ao(e, t) {
        return i(e, t, "previousElementSibling")
    }

    function Lo(e, t) {
        e.insertBefore(t, e.firstChild)
    }
    return rn.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function (e, t) {
            t = t || rn;
            for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this)
        }), rn.fp_utils = {
            $: Zn,
            deepExtend: Xn,
            hasClass: Gn,
            getWindowHeight: Fn,
            css: Qn,
            until: n,
            prevUntil: _n,
            nextUntil: Jn,
            prev: Kn,
            next: $n,
            last: qn,
            index: eo,
            getList: l,
            hide: to,
            show: no,
            isArrayOrList: oo,
            addClass: ro,
            removeClass: io,
            appendTo: lo,
            wrap: o,
            wrapAll: ao,
            wrapInner: so,
            unwrap: co,
            closest: uo,
            after: fo,
            before: vo,
            insertBefore: r,
            getScrollTop: po,
            siblings: ho,
            preventDefault: go,
            isFunction: mo,
            trigger: So,
            matches: bo,
            toggle: wo,
            createElementFromHTML: yo,
            remove: Eo,
            filter: function (e, t) {
                Array.prototype.filter.call(e, t)
            },
            untilAll: i,
            nextAll: xo,
            prevAll: Ao,
            showError: Vn,
            prependTo: Lo,
            toggleClass: function (e, t, n) {
                if (e.classList && null == n) e.classList.toggle(t);
                else {
                    var o = Gn(e, t);
                    o && null == n || !n ? io(e, t) : (!o && null == n || n) && ro(e, t)
                }
            }
        },
        function (e, g) {
            var n = g && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(g.licenseKey) || -1 < ln.domain.indexOf("alvarotrigo.com"),
                r = Zn("html, body"),
                s = Zn("html")[0],
                m = Zn("body")[0];
            if (!Gn(s, dn)) {
                var S = {};
                g = Xn({
                    menu: !1,
                    anchors: [],
                    lockAnchors: !1,
                    navigation: !1,
                    navigationPosition: "right",
                    navigationTooltips: [],
                    showActiveTooltip: !1,
                    slidesNavigation: !1,
                    slidesNavPosition: "bottom",
                    scrollBar: !1,
                    hybrid: !1,
                    css3: !0,
                    scrollingSpeed: 700,
                    autoScrolling: !0,
                    fitToSection: !0,
                    fitToSectionDelay: 1e3,
                    easing: "easeInOutCubic",
                    easingcss3: "ease",
                    loopBottom: !1,
                    loopTop: !1,
                    loopHorizontal: !0,
                    continuousVertical: !1,
                    continuousHorizontal: !1,
                    scrollHorizontally: !1,
                    interlockedSlides: !1,
                    dragAndMove: !1,
                    offsetSections: !1,
                    resetSliders: !1,
                    fadingEffect: !1,
                    normalScrollElements: null,
                    scrollOverflow: !1,
                    scrollOverflowReset: !1,
                    scrollOverflowHandler: rn.fp_scrolloverflow ? rn.fp_scrolloverflow.iscrollHandler : null,
                    scrollOverflowOptions: null,
                    touchSensitivity: 5,
                    touchWrapper: "string" == typeof e ? Zn(e)[0] : e,
                    bigSectionsDestination: null,
                    keyboardScrolling: !0,
                    animateAnchor: !0,
                    recordHistory: !0,
                    controlArrows: !0,
                    controlArrowColor: "#fff",
                    verticalCentered: !0,
                    sectionsColor: [],
                    paddingTop: 0,
                    paddingBottom: 0,
                    fixedElements: null,
                    responsive: 0,
                    responsiveWidth: 0,
                    responsiveHeight: 0,
                    responsiveSlides: !1,
                    parallax: !1,
                    parallaxOptions: {
                        type: "reveal",
                        percentage: 62,
                        property: "translate"
                    },
                    cards: !1,
                    cardsOptions: {
                        perspective: 100,
                        fadeContent: !0,
                        fadeBackground: !0
                    },
                    sectionSelector: ".section",
                    slideSelector: ".slide",
                    v2compatible: !1,
                    afterLoad: null,
                    onLeave: null,
                    afterRender: null,
                    afterResize: null,
                    afterReBuild: null,
                    afterSlideLoad: null,
                    onSlideLeave: null,
                    afterResponsive: null,
                    lazyLoading: !0
                }, g);
                var b, l, c, o, a = !1,
                    i = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                    u = "ontouchstart" in rn || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints,
                    w = "string" == typeof e ? Zn(e)[0] : e,
                    y = Fn(),
                    f = Un(),
                    E = !1,
                    t = !0,
                    x = !0,
                    d = [],
                    v = {
                        m: {
                            up: !0,
                            down: !0,
                            left: !0,
                            right: !0
                        }
                    };
                v.k = Xn({}, v.m);
                var p, h, A, L, M, T, O, k, C, H, R = Dt(),
                    I = {
                        touchmove: "ontouchmove" in rn ? "touchmove" : R.move,
                        touchstart: "ontouchstart" in rn ? "touchstart" : R.down
                    },
                    z = !1,
                    B = !Gn(m, nt("OHNsd3AtZnVsbHBhZ2UtanM5T20=")),
                    N = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
                    j = !1;
                try {
                    var P = Object.defineProperty({}, "passive", {
                        get: function () {
                            j = !0
                        }
                    });
                    rn.addEventListener("testPassive", null, P), rn.removeEventListener("testPassive", null, P)
                } catch (e) {}
                var W, D, Y = Xn({}, g),
                    V = !1,
                    Z = !0,
                    X = {};
                $t(), rn.fp_easings = Xn(rn.fp_easings, {
                    easeInOutCubic: function (e, t, n, o) {
                        return (e /= o / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
                    }
                }), w && (S.version = "3.0.8", S.setAutoScrolling = oe, S.setRecordHistory = re, S.setScrollingSpeed = ie, S.setFitToSection = le, S.setLockAnchors = function (e) {
                    g.lockAnchors = e
                }, S.setMouseWheelScrolling = ae, S.setAllowScrolling = se, S.setKeyboardScrolling = ue, S.moveSectionUp = fe, S.moveSectionDown = de, S.silentMoveTo = ve, S.moveTo = pe, S.moveSlideRight = he, S.moveSlideLeft = ge, S.fitToSection = He, S.reBuild = me, S.setResponsive = be, S.getFullpageData = function () {
                    return {
                        options: g,
                        internals: {
                            container: w,
                            canScroll: x,
                            isScrollAllowed: v,
                            getDestinationPosition: Ye,
                            isTouch: u,
                            c: lt,
                            getXmovement: kt,
                            removeAnimation: Mt,
                            getTransforms: Xt,
                            lazyLoad: Je,
                            addAnimation: Lt,
                            performHorizontalMove: yt,
                            landscapeScroll: St,
                            silentLandscapeScroll: Vt,
                            keepSlidesPosition: De,
                            silentScroll: Zt,
                            styleSlides: Le,
                            styleSection: Te,
                            scrollHandler: Ce,
                            getEventsPage: Yt,
                            getMSPointer: Dt,
                            isReallyTouch: Be,
                            usingExtension: Ut,
                            toggleControlArrows: bt,
                            touchStartHandler: Ne,
                            touchMoveHandler: ze
                        }
                    }
                }, S.destroy = function (e) {
                    So(w, "destroy", e), oe(!1, "internal"), se(!0), ce(!1), ue(!1), ro(w, fn), [M, L, h, T, O, C, A].forEach(function (e) {
                        clearTimeout(e)
                    }), rn.removeEventListener("scroll", Ce), rn.removeEventListener("hashchange", ct), rn.removeEventListener("resize", Et), ln.removeEventListener("keydown", ft), ln.removeEventListener("keyup", dt), ["click", "touchstart"].forEach(function (e) {
                        ln.removeEventListener(e, we)
                    }), ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function (e) {
                        ln.removeEventListener(e, Ee, !0)
                    }), Qt("dragAndMove", "destroy"), e && (Zt(0), Zn("img[data-src], source[data-src], audio[data-src], iframe[data-src]", w).forEach(function (e) {
                        Qe(e, "src")
                    }), Zn("img[data-srcset]").forEach(function (e) {
                        Qe(e, "srcset")
                    }), Eo(Zn(Ln + ", " + Nn + ", " + Pn)), Qn(Zn(Sn), {
                        height: "",
                        "background-color": "",
                        padding: ""
                    }), Qn(Zn(On), {
                        width: ""
                    }), Qn(w, {
                        height: "",
                        position: "",
                        "-ms-touch-action": "",
                        "touch-action": ""
                    }), Qn(r, {
                        overflow: "",
                        height: ""
                    }), io(s, dn), io(m, cn), m.className.split(/\s+/).forEach(function (e) {
                        0 === e.indexOf(vn) && io(m, e)
                    }), Zn(Sn + ", " + On).forEach(function (e) {
                        g.scrollOverflowHandler && g.scrollOverflow && g.scrollOverflowHandler.remove(e), io(e, zn + " " + pn + " " + gn);
                        var t = e.getAttribute("data-fp-styles");
                        t && e.setAttribute("style", e.getAttribute("data-fp-styles")), Gn(e, mn) && !V && e.removeAttribute("data-anchor")
                    }), Ft(w), [yn, In, Hn].forEach(function (e) {
                        Zn(e, w).forEach(function (e) {
                            co(e)
                        })
                    }), rn.scrollTo(0, 0), [mn, Tn, Rn].forEach(function (e) {
                        io(Zn("." + e), e)
                    }))
                }, S.getActiveSection = function () {
                    return new nn(Zn(bn)[0])
                }, S.getActiveSlide = function () {
                    return Ge(Zn(kn, Zn(bn)[0])[0])
                }, S.landscapeScroll = St, S.test = {
                    top: "0px",
                    translate3d: "translate3d(0px, 0px, 0px)",
                    translate3dH: function () {
                        for (var e = [], t = 0; t < Zn(g.sectionSelector, w).length; t++) e.push("translate3d(0px, 0px, 0px)");
                        return e
                    }(),
                    left: function () {
                        for (var e = [], t = 0; t < Zn(g.sectionSelector, w).length; t++) e.push(0);
                        return e
                    }(),
                    options: g,
                    setAutoScrolling: oe
                }, S.shared = {
                    afterRenderActions: ke,
                    isNormalScrollElement: !1
                }, rn.fullpage_api = S, rn.fullpage_extensions = !0, g.$ && Object.keys(S).forEach(function (e) {
                    g.$.fn.fullpage[e] = S[e]
                }), Ae("continuousHorizontal"), Ae("scrollHorizontally"), Ae("resetSliders"), Ae("interlockedSlides"), Ae("responsiveSlides"), Ae("fadingEffect"), Ae("dragAndMove"), Ae("offsetSections"), Ae("scrollOverflowReset"), Ae("parallax"), Ae("cards"), Qt("dragAndMove", "init"), g.css3 && (g.css3 = function () {
                    var e, t = ln.createElement("p"),
                        n = {
                            webkitTransform: "-webkit-transform",
                            OTransform: "-o-transform",
                            msTransform: "-ms-transform",
                            MozTransform: "-moz-transform",
                            transform: "transform"
                        };
                    for (var o in t.style.display = "block", ln.body.insertBefore(t, null), n) void 0 !== t.style[o] && (t.style[o] = "translate3d(1px,1px,1px)", e = rn.getComputedStyle(t).getPropertyValue(n[o]));
                    return ln.body.removeChild(t), void 0 !== e && 0 < e.length && "none" !== e
                }()), g.scrollBar = g.scrollBar || g.hybrid, function () {
                    if (!g.anchors.length) {
                        var e = "[data-anchor]",
                            t = Zn(g.sectionSelector.split(",").join(e + ",") + e, w);
                        t.length && (V = !0, t.forEach(function (e) {
                            g.anchors.push(e.getAttribute("data-anchor").toString())
                        }))
                    }
                    if (!g.navigationTooltips.length) {
                        var n = "[data-tooltip]",
                            o = Zn(g.sectionSelector.split(",").join(n + ",") + n, w);
                        o.length && o.forEach(function (e) {
                            g.navigationTooltips.push(e.getAttribute("data-tooltip").toString())
                        })
                    }
                }(), function () {
                    Qn(w, {
                        height: "100%",
                        position: "relative"
                    }), ro(w, an), ro(s, dn), y = Fn(), io(w, fn), ro(Zn(g.sectionSelector, w), mn), ro(Zn(g.slideSelector, w), Tn), Qt("parallax", "init");
                    for (var e = Zn(Sn), t = 0; t < e.length; t++) {
                        var n = t,
                            o = e[t],
                            r = Zn(On, o),
                            i = r.length;
                        o.setAttribute("data-fp-styles", o.getAttribute("style")), Te(o, n), l = o, a = n, void 0 !== g.anchors[a] && Gn(l, pn) && Tt(g.anchors[a], a), g.menu && g.css3 && null != uo(Zn(g.menu)[0], sn) && Zn(g.menu).forEach(function (e) {
                            m.appendChild(e)
                        }), 0 < i ? Le(o, r, i) : g.verticalCentered && Ct(o)
                    }
                    var l, a;
                    g.fixedElements && g.css3 && Zn(g.fixedElements).forEach(function (e) {
                        m.appendChild(e)
                    }), g.navigation && function () {
                        var e = ln.createElement("div");
                        e.setAttribute("id", An);
                        var t = ln.createElement("ul");
                        e.appendChild(t), lo(e, m);
                        var n = Zn(Ln)[0];
                        ro(n, "fp-" + g.navigationPosition), g.showActiveTooltip && ro(n, "fp-show-active");
                        for (var o = "", r = 0; r < Zn(Sn).length; r++) {
                            var i = "";
                            g.anchors.length && (i = g.anchors[r]), o += '<li><a href="#' + i + '"><span class="fp-sr-only">' + Oe(r, "Section") + "</span><span></span></a>";
                            var l = g.navigationTooltips[r];
                            void 0 !== l && "" !== l && (o += '<div class="' + Mn + " fp-" + g.navigationPosition + '">' + l + "</div>"), o += "</li>"
                        }
                        Zn("ul", n)[0].innerHTML = o, Qn(Zn(Ln), {
                            "margin-top": "-" + Zn(Ln)[0].offsetHeight / 2 + "px"
                        }), ro(Zn("a", Zn("li", Zn(Ln)[0])[eo(Zn(bn)[0], Sn)]), pn)
                    }(), Zn('iframe[src*="youtube.com/embed/"]', w).forEach(function (e) {
                        var t, n, o;
                        n = "enablejsapi=1", o = (t = e).getAttribute("src"), t.setAttribute("src", o + (/\?/.test(o) ? "&" : "?") + n)
                    }), Qt("fadingEffect", "apply"), Qt("cards", "init"), g.scrollOverflow && (p = g.scrollOverflowHandler.init(g))
                }(), se(!0), ce(!0), oe(g.autoScrolling, "internal"), At(), Wt(), "complete" === ln.readyState && st(), rn.addEventListener("load", st), g.scrollOverflow || ke(), function () {
                    for (var e = 1; e < 4; e++) C = setTimeout(xe, 350 * e)
                }(), B || lt("l"), rn.addEventListener("scroll", Ce), rn.addEventListener("hashchange", ct), rn.addEventListener("blur", gt), rn.addEventListener("resize", Et), ln.addEventListener("keydown", ft), ln.addEventListener("keyup", dt), ["click", "touchstart"].forEach(function (e) {
                    ln.addEventListener(e, we)
                }), g.normalScrollElements && (["mouseenter", "touchstart"].forEach(function (e) {
                    ye(e, !1)
                }), ["mouseleave", "touchend"].forEach(function (e) {
                    ye(e, !0)
                })), Qt("dragAndMove", "turnOffTouch"));
                var G, F, U, Q = !1,
                    _ = 0,
                    J = 0,
                    K = 0,
                    $ = 0,
                    q = (new Date).getTime(),
                    ee = 0,
                    te = 0,
                    ne = y;
                return S
            }

            function oe(e, t) {
                e || Zt(0), Kt("autoScrolling", e, t);
                var n = Zn(bn)[0];
                if (g.autoScrolling && !g.scrollBar) Qn(r, {
                    overflow: "hidden",
                    height: "100%"
                }), re(Y.recordHistory, "internal"), Qn(w, {
                    "-ms-touch-action": "none",
                    "touch-action": "none"
                }), null != n && Zt(n.offsetTop);
                else if (Qn(r, {
                        overflow: "visible",
                        height: "initial"
                    }), re(!!g.autoScrolling && Y.recordHistory, "internal"), Qn(w, {
                        "-ms-touch-action": "",
                        "touch-action": ""
                    }), Ft(w), null != n) {
                    var o = Fe(n.offsetTop);
                    o.element.scrollTo(0, o.options)
                }
                So(w, "setAutoScrolling", e)
            }

            function re(e, t) {
                Kt("recordHistory", e, t)
            }

            function ie(e, t) {
                "internal" !== t && Ut("fadingEffect") && S.fadingEffect.update(e), Ut("cards") && S.cards.update(e), Kt("scrollingSpeed", e, t)
            }

            function le(e, t) {
                Kt("fitToSection", e, t)
            }

            function ae(e) {
                e ? (function () {
                    var e, t = "";
                    rn.addEventListener ? e = "addEventListener" : (e = "attachEvent", t = "on");
                    var n = "onwheel" in ln.createElement("div") ? "wheel" : void 0 !== ln.onmousewheel ? "mousewheel" : "DOMMouseScroll",
                        o = !!j && {
                            passive: !1
                        };
                    "DOMMouseScroll" == n ? ln[e](t + "MozMousePixelScroll", Pe, o) : ln[e](t + n, Pe, o)
                }(), w.addEventListener("mousedown", vt), w.addEventListener("mouseup", pt)) : (ln.addEventListener ? (ln.removeEventListener("mousewheel", Pe, !1), ln.removeEventListener("wheel", Pe, !1), ln.removeEventListener("MozMousePixelScroll", Pe, !1)) : ln.detachEvent("onmousewheel", Pe), w.removeEventListener("mousedown", vt), w.removeEventListener("mouseup", pt))
            }

            function se(t, e) {
                void 0 !== e ? (e = e.replace(/ /g, "").split(",")).forEach(function (e) {
                    Gt(t, e, "m")
                }) : Gt(t, "all", "m"), So(w, "setAllowScrolling", {
                    value: t,
                    directions: e
                })
            }

            function ce(e) {
                e ? (ae(!0), function () {
                    if (i || u) {
                        g.autoScrolling && (m.removeEventListener(I.touchmove, Ie, {
                            passive: !1
                        }), m.addEventListener(I.touchmove, Ie, {
                            passive: !1
                        }));
                        var e = g.touchWrapper;
                        e.removeEventListener(I.touchstart, Ne), e.removeEventListener(I.touchmove, ze, {
                            passive: !1
                        }), e.addEventListener(I.touchstart, Ne), e.addEventListener(I.touchmove, ze, {
                            passive: !1
                        })
                    }
                }()) : (ae(!1), function () {
                    if (i || u) {
                        g.autoScrolling && (m.removeEventListener(I.touchmove, ze, {
                            passive: !1
                        }), m.removeEventListener(I.touchmove, Ie, {
                            passive: !1
                        }));
                        var e = g.touchWrapper;
                        e.removeEventListener(I.touchstart, Ne), e.removeEventListener(I.touchmove, ze, {
                            passive: !1
                        })
                    }
                }())
            }

            function ue(t, e) {
                void 0 !== e ? (e = e.replace(/ /g, "").split(",")).forEach(function (e) {
                    Gt(t, e, "k")
                }) : (Gt(t, "all", "k"), g.keyboardScrolling = t)
            }

            function fe() {
                var e = _n(Zn(bn)[0], Sn);
                e || !g.loopTop && !g.continuousVertical || (e = qn(Zn(Sn))), null != e && Ve(e, null, !0)
            }

            function de() {
                var e = Jn(Zn(bn)[0], Sn);
                e || !g.loopBottom && !g.continuousVertical || (e = Zn(Sn)[0]), null != e && Ve(e, null, !1)
            }

            function ve(e, t) {
                ie(0, "internal"), pe(e, t), ie(Y.scrollingSpeed, "internal")
            }

            function pe(e, t) {
                var n = It(e);
                void 0 !== t ? zt(e, t) : null != n && Ve(n)
            }

            function he(e) {
                We("right", e)
            }

            function ge(e) {
                We("left", e)
            }

            function me(e) {
                if (!Gn(w, fn)) {
                    E = !0, y = Fn(), f = Un();
                    for (var t = Zn(Sn), n = 0; n < t.length; ++n) {
                        var o = t[n],
                            r = Zn(Hn, o)[0],
                            i = Zn(On, o);
                        g.verticalCentered && Qn(Zn(yn, o), {
                            height: Ht(o) + "px"
                        }), Qn(o, {
                            height: Me(o) + "px"
                        }), 1 < i.length && St(r, Zn(kn, r)[0])
                    }
                    g.scrollOverflow && p.createScrollBarForAll();
                    var l = eo(Zn(bn)[0], Sn);
                    l && !Ut("fadingEffect") && ve(l + 1), E = !1, mo(g.afterResize) && e && g.afterResize.call(w, rn.innerWidth, rn.innerHeight), mo(g.afterReBuild) && !e && g.afterReBuild.call(w), So(w, "afterRebuild")
                }
            }

            function Se() {
                return Gn(m, cn)
            }

            function be(e) {
                var t = Se();
                e ? t || (oe(!1, "internal"), le(!1, "internal"), to(Zn(Ln)), ro(m, cn), mo(g.afterResponsive) && g.afterResponsive.call(w, e), Qt("responsiveSlides", "toSections"), So(w, "afterResponsive", e), g.scrollOverflow && p.createScrollBarForAll()) : t && (oe(Y.autoScrolling, "internal"), le(Y.autoScrolling, "internal"), no(Zn(Ln)), io(m, cn), mo(g.afterResponsive) && g.afterResponsive.call(w, e), Qt("responsiveSlides", "toSlides"), So(w, "afterResponsive", e))
            }

            function we(e) {
                var t = e.target;
                t && uo(t, Ln + " a") ? function (e) {
                    go(e);
                    var t = eo(uo(this, Ln + " li"));
                    Ve(Zn(Sn)[t])
                }.call(t, e) : bo(t, ".fp-tooltip") ? function () {
                    So(Kn(this), "click")
                }.call(t) : bo(t, Pn) ? function () {
                    var e = uo(this, Sn);
                    Gn(this, Wn) ? v.m.left && ge(e) : v.m.right && he(e)
                }.call(t, e) : bo(t, jn) || null != uo(t, jn) ? function (e) {
                    go(e);
                    var t = Zn(Hn, uo(this, Sn))[0],
                        n = Zn(On, t)[eo(uo(this, "li"))];
                    St(t, n)
                }.call(t, e) : uo(t, g.menu + " [data-menuanchor]") && function (e) {
                    !Zn(g.menu)[0] || !g.lockAnchors && g.anchors.length || (go(e), pe(this.getAttribute("data-menuanchor")))
                }.call(t, e)
            }

            function ye(e, t) {
                ln["fp_" + e] = t, ln.addEventListener(e, Ee, !0)
            }

            function Ee(e) {
                var t = e.type,
                    o = !1,
                    r = g.scrollOverflow,
                    i = "mouseleave" === t ? e.toElement || e.relatedTarget : e.target;
                if (i == ln || !i) return ce(!0), void(r && g.scrollOverflowHandler.setIscroll(i, !0));
                "touchend" === t && (Z = !1, setTimeout(function () {
                    Z = !0
                }, 800)), ("mouseenter" !== t || Z) && (g.normalScrollElements.split(",").forEach(function (e) {
                    if (!o) {
                        var t = bo(i, e),
                            n = uo(i, e);
                        (t || n) && (S.shared.isNormalScrollElement || (ce(!1), r && g.scrollOverflowHandler.setIscroll(i, !1)), S.shared.isNormalScrollElement = !0, o = !0)
                    }
                }), !o && S.shared.isNormalScrollElement && (ce(!0), r && g.scrollOverflowHandler.setIscroll(i, !0), S.shared.isNormalScrollElement = !1))
            }

            function xe() {
                var e = Fn(),
                    t = Un();
                y === e && f === t || (y = e, f = t, me(!0))
            }

            function Ae(e) {
                var t = "fp_" + e + "Extension";
                X[e] = g[e + "Key"], S[e] = void 0 !== rn[t] ? new rn[t] : null, S[e] && S[e].c(e)
            }

            function Le(e, t, n) {
                var o = 100 * n,
                    r = 100 / n,
                    i = ln.createElement("div");
                i.className = Cn, ao(t, i);
                var l, a, s = ln.createElement("div");
                s.className = Rn, ao(t, s), Qn(Zn(In, e), {
                    width: o + "%"
                }), 1 < n && (g.controlArrows && (l = e, a = [yo('<div class="fp-controlArrow fp-prev"></div>'), yo('<div class="fp-controlArrow fp-next"></div>')], fo(Zn(Hn, l)[0], a), "#fff" !== g.controlArrowColor && (Qn(Zn(Yn, l), {
                    "border-color": "transparent transparent transparent " + g.controlArrowColor
                }), Qn(Zn(Dn, l), {
                    "border-color": "transparent " + g.controlArrowColor + " transparent transparent"
                })), g.loopHorizontal || to(Zn(Dn, l))), g.slidesNavigation && function (e, t) {
                    lo(yo('<div class="' + Bn + '"><ul></ul></div>'), e);
                    var n = Zn(Nn, e)[0];
                    ro(n, "fp-" + g.slidesNavPosition);
                    for (var o = 0; o < t; o++) lo(yo('<li><a href="#"><span class="fp-sr-only">' + Oe(o, "Slide") + "</span><span></span></a></li>"), Zn("ul", n)[0]);
                    Qn(n, {
                        "margin-left": "-" + n.innerWidth / 2 + "px"
                    }), ro(Zn("a", Zn("li", n)[0]), pn)
                }(e, n)), t.forEach(function (e) {
                    Qn(e, {
                        width: r + "%"
                    }), g.verticalCentered && Ct(e)
                });
                var c = Zn(kn, e)[0];
                null != c && (0 !== eo(Zn(bn), Sn) || 0 === eo(Zn(bn), Sn) && 0 !== eo(c)) ? (Vt(c, "internal"), ro(c, "fp-initial")) : ro(t[0], pn)
            }

            function Me(e) {
                return g.offsetSections && S.offsetSections ? Math.round(S.offsetSections.getWindowHeight(e)) : Fn()
            }

            function Te(e, t) {
                t || null != Zn(bn)[0] || ro(e, pn), o = Zn(bn)[0], Qn(e, {
                    height: Me(e) + "px"
                }), g.paddingTop && Qn(e, {
                    "padding-top": g.paddingTop
                }), g.paddingBottom && Qn(e, {
                    "padding-bottom": g.paddingBottom
                }), void 0 !== g.sectionsColor[t] && Qn(e, {
                    "background-color": g.sectionsColor[t]
                }), void 0 !== g.anchors[t] && e.setAttribute("data-anchor", g.anchors[t])
            }

            function Oe(e, t) {
                return g.navigationTooltips[e] || g.anchors[e] || t + " " + (e + 1)
            }

            function ke() {
                var e, t, n = Zn(bn)[0];
                ro(n, gn), Je(n), _e(), $e(n), g.scrollOverflow && g.scrollOverflowHandler.afterLoad(), e = ut(), t = It(e.section), e.section && t && (void 0 === t || eo(t) !== eo(o)) || !mo(g.afterLoad) || Ze("afterLoad", {
                    activeSection: n,
                    element: n,
                    direction: null,
                    anchorLink: n.getAttribute("data-anchor"),
                    sectionIndex: eo(n, Sn)
                }), mo(g.afterRender) && Ze("afterRender"), So(w, "afterRender")
            }

            function Ce() {
                var e;
                if (So(w, "onScroll"), (!g.autoScrolling || g.scrollBar || Ut("dragAndMove")) && !Jt()) {
                    var t = Ut("dragAndMove") ? Math.abs(S.dragAndMove.getCurrentScroll()) : po(),
                        n = 0,
                        o = t + Fn() / 2,
                        r = (Ut("dragAndMove") ? S.dragAndMove.getDocumentHeight() : m.offsetHeight - Fn()) === t,
                        i = Zn(Sn);
                    if (r) n = i.length - 1;
                    else if (t)
                        for (var l = 0; l < i.length; ++l) i[l].offsetTop <= o && (n = l);
                    else n = 0;
                    if (!Gn(e = i[n], pn)) {
                        Q = !0;
                        var a, s, c = Zn(bn)[0],
                            u = eo(c, Sn) + 1,
                            f = Ot(e),
                            d = e.getAttribute("data-anchor"),
                            v = eo(e, Sn) + 1,
                            p = Zn(kn, e)[0],
                            h = {
                                activeSection: c,
                                sectionIndex: v - 1,
                                anchorLink: d,
                                element: e,
                                leavingSection: u,
                                direction: f
                            };
                        p && (s = p.getAttribute("data-anchor"), a = eo(p)), x && (ro(e, pn), io(ho(e), pn), Qt("parallax", "afterLoad"), mo(g.onLeave) && Ze("onLeave", h), mo(g.afterLoad) && Ze("afterLoad", h), Ut("resetSliders") && S.resetSliders.apply({
                            localIsResizing: E,
                            leavingSection: u
                        }), et(c), Je(e), $e(e), Tt(d, v - 1), g.anchors.length && (b = d), Nt(a, s, d)), clearTimeout(T), T = setTimeout(function () {
                            Q = !1
                        }, 100)
                    }
                    g.fitToSection && (clearTimeout(O), O = setTimeout(function () {
                        g.fitToSection && Zn(bn)[0].offsetHeight <= y && He()
                    }, g.fitToSectionDelay))
                }
            }

            function He() {
                x && (E = !0, Ve(Zn(bn)[0]), E = !1)
            }

            function Re(e) {
                if (v.m[e]) {
                    var t = "down" === e ? de : fe;
                    if (Ut("scrollHorizontally") && (t = S.scrollHorizontally.getScrollSection(e, t)), g.scrollOverflow) {
                        var n = g.scrollOverflowHandler.scrollable(Zn(bn)[0]),
                            o = "down" === e ? "bottom" : "top";
                        if (null != n) {
                            if (!g.scrollOverflowHandler.isScrolled(o, n)) return !0;
                            t()
                        } else t()
                    } else t()
                }
            }

            function Ie(e) {
                g.autoScrolling && Be(e) && v.m.up && go(e)
            }

            function ze(e) {
                var t = uo(e.target, Sn) || Zn(bn)[0];
                if (Be(e)) {
                    g.autoScrolling && go(e);
                    var n = Yt(e);
                    K = n.y, $ = n.x, Zn(Hn, t).length && Math.abs(J - $) > Math.abs(_ - K) ? !a && Math.abs(J - $) > Un() / 100 * g.touchSensitivity && ($ < J ? v.m.right && he(t) : v.m.left && ge(t)) : g.autoScrolling && x && Math.abs(_ - K) > rn.innerHeight / 100 * g.touchSensitivity && (K < _ ? Re("down") : _ < K && Re("up"))
                }
            }

            function Be(e) {
                return void 0 === e.pointerType || "mouse" != e.pointerType
            }

            function Ne(e) {
                if (g.fitToSection && (W = !1), Be(e)) {
                    var t = Yt(e);
                    _ = t.y, J = t.x
                }
            }

            function je(e, t) {
                for (var n = 0, o = e.slice(Math.max(e.length - t, 1)), r = 0; r < o.length; r++) n += o[r];
                return Math.ceil(n / t)
            }

            function Pe(e) {
                var t = (new Date).getTime(),
                    n = Gn(Zn(".fp-completely")[0], xn);
                if (!v.m.down && !v.m.up) return go(e), !1;
                if (g.autoScrolling && !c && !n) {
                    var o = (e = e || rn.event).wheelDelta || -e.deltaY || -e.detail,
                        r = Math.max(-1, Math.min(1, o)),
                        i = void 0 !== e.wheelDeltaX || void 0 !== e.deltaX,
                        l = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !i;
                    149 < d.length && d.shift(), d.push(Math.abs(o)), g.scrollBar && go(e);
                    var a = t - q;
                    if (q = t, 200 < a && (d = []), x && !_t()) {
                        var s = je(d, 10);
                        je(d, 70) <= s && l && Re(r < 0 ? "down" : "up")
                    }
                    return !1
                }
                g.fitToSection && (W = !1)
            }

            function We(e, t) {
                var n = null == t ? Zn(bn)[0] : t,
                    o = Zn(Hn, n)[0];
                if (!(null == o || _t() || a || Zn(On, o).length < 2)) {
                    var r = Zn(kn, o)[0],
                        i = null;
                    if (null == (i = "left" === e ? _n(r, On) : Jn(r, On))) {
                        if (!g.loopHorizontal) return;
                        var l = ho(r);
                        i = "left" === e ? l[l.length - 1] : l[0]
                    }
                    a = !S.test.isTesting, St(o, i, e)
                }
            }

            function De() {
                for (var e = Zn(kn), t = 0; t < e.length; t++) Vt(e[t], "internal")
            }

            function Ye(e) {
                var t = e.offsetHeight,
                    n = e.offsetTop,
                    o = n,
                    r = Ut("dragAndMove") && S.dragAndMove.isGrabbing ? S.dragAndMove.isScrollingDown() : ee < n,
                    i = o - y + t,
                    l = g.bigSectionsDestination;
                return y < t ? (r || l) && "bottom" !== l || (o = i) : (r || E && null == $n(e)) && (o = i), g.offsetSections && S.offsetSections && (o = S.offsetSections.getSectionPosition(r, o, e)), ee = o
            }

            function Ve(e, t, n) {
                if (null != e) {
                    var o, r, i = {
                        element: e,
                        callback: t,
                        isMovementUp: n,
                        dtop: Ye(e),
                        yMovement: Ot(e),
                        anchorLink: e.getAttribute("data-anchor"),
                        sectionIndex: eo(e, Sn),
                        activeSlide: Zn(kn, e)[0],
                        activeSection: Zn(bn)[0],
                        leavingSection: eo(Zn(bn), Sn) + 1,
                        localIsResizing: E
                    };
                    if (!(i.activeSection == e && !E || g.scrollBar && po() === i.dtop && !Gn(e, En))) {
                        if (null != i.activeSlide && (o = i.activeSlide.getAttribute("data-anchor"), r = eo(i.activeSlide)), !i.localIsResizing) {
                            var l = i.yMovement;
                            if (void 0 !== n && (l = n ? "up" : "down"), i.direction = l, mo(g.onLeave) && !1 === Ze("onLeave", i)) return
                        }
                        var a;
                        Qt("parallax", "apply", i), Qt("cards", "apply", i), g.autoScrolling && g.continuousVertical && void 0 !== i.isMovementUp && (!i.isMovementUp && "up" == i.yMovement || i.isMovementUp && "down" == i.yMovement) && ((s = i).isMovementUp ? vo(Zn(bn)[0], xo(s.activeSection, Sn)) : fo(Zn(bn)[0], Ao(s.activeSection, Sn).reverse()), Zt(Zn(bn)[0].offsetTop), De(), s.wrapAroundElements = s.activeSection, s.dtop = s.element.offsetTop, s.yMovement = Ot(s.element), s.leavingSection = eo(s.activeSection, Sn) + 1, s.sectionIndex = eo(s.element, Sn), So(Zn(sn)[0], "onContinuousVertical", s), i = s), Ut("scrollOverflowReset") && S.scrollOverflowReset.setPrevious(i.activeSection), i.localIsResizing || et(i.activeSection), g.scrollOverflow && g.scrollOverflowHandler.beforeLeave(), ro(e, pn), io(ho(e), pn), Je(e), g.scrollOverflow && g.scrollOverflowHandler.onLeave(), x = S.test.isTesting, Nt(r, o, i.anchorLink, i.sectionIndex),
                            function (e) {
                                if (g.css3 && g.autoScrolling && !g.scrollBar) {
                                    var t = "translate3d(0px, -" + Math.round(e.dtop) + "px, 0px)";
                                    Rt(t, !0), g.scrollingSpeed ? (clearTimeout(L), L = setTimeout(function () {
                                        Ue(e)
                                    }, g.scrollingSpeed)) : Ue(e)
                                } else {
                                    var n = Fe(e.dtop);
                                    S.test.top = -e.dtop + "px", qt(n.element, n.options, g.scrollingSpeed, function () {
                                        g.scrollBar ? setTimeout(function () {
                                            Ue(e)
                                        }, 30) : Ue(e)
                                    })
                                }
                            }(i), b = i.anchorLink, Tt(i.anchorLink, null == (a = i).wrapAroundElements ? a.sectionIndex : a.isMovementUp ? Zn(Sn).length - 1 : 0)
                    }
                }
                var s
            }

            function Ze(e, t) {
                var n, o, r, i, l = (o = e, r = t, (i = g.v2compatible ? {
                    afterRender: function () {
                        return [w]
                    },
                    onLeave: function () {
                        return [r.activeSection, r.leavingSection, r.sectionIndex + 1, r.direction]
                    },
                    afterLoad: function () {
                        return [r.element, r.anchorLink, r.sectionIndex + 1]
                    },
                    afterSlideLoad: function () {
                        return [r.destiny, r.anchorLink, r.sectionIndex + 1, r.slideAnchor, r.slideIndex]
                    },
                    onSlideLeave: function () {
                        return [r.prevSlide, r.anchorLink, r.sectionIndex + 1, r.prevSlideIndex, r.direction, r.slideIndex]
                    }
                } : {
                    afterRender: function () {
                        return {
                            section: Xe(Zn(bn)[0]),
                            slide: Ge(Zn(kn, Zn(bn)[0])[0])
                        }
                    },
                    onLeave: function () {
                        return {
                            origin: Xe(r.activeSection),
                            destination: Xe(r.element),
                            direction: r.direction
                        }
                    },
                    afterLoad: function () {
                        return i.onLeave()
                    },
                    afterSlideLoad: function () {
                        return {
                            section: Xe(r.section),
                            origin: Ge(r.prevSlide),
                            destination: Ge(r.destiny),
                            direction: r.direction
                        }
                    },
                    onSlideLeave: function () {
                        return i.afterSlideLoad()
                    }
                })[o]());
                if (g.v2compatible) {
                    if (!1 === g[e].apply(l[0], l.slice(1))) return !1
                } else if (So(w, e, l), !1 === g[e].apply(l[Object.keys(l)[0]], (n = l, Object.keys(n).map(function (e) {
                        return n[e]
                    })))) return !1;
                return !0
            }

            function Xe(e) {
                return e ? new nn(e) : null
            }

            function Ge(e) {
                return e ? new on(e) : null
            }

            function Fe(e) {
                var t = {};
                return g.autoScrolling && !g.scrollBar ? (t.options = -e, t.element = Zn(sn)[0]) : (t.options = e, t.element = rn), t
            }

            function Ue(e) {
                var t;
                null != (t = e).wrapAroundElements && (t.isMovementUp ? vo(Zn(Sn)[0], t.wrapAroundElements) : fo(Zn(Sn)[Zn(Sn).length - 1], t.wrapAroundElements), Zt(Zn(bn)[0].offsetTop), De(), t.sectionIndex = eo(t.element, Sn), t.leavingSection = eo(t.activeSection, Sn) + 1), mo(g.afterLoad) && !e.localIsResizing && Ze("afterLoad", e), g.scrollOverflow && g.scrollOverflowHandler.afterLoad(), Qt("parallax", "afterLoad"), Qt("scrollOverflowReset", "reset"), Ut("resetSliders") && S.resetSliders.apply(e), e.localIsResizing || $e(e.element), ro(e.element, gn), io(ho(e.element), gn), _e(), x = !0, mo(e.callback) && e.callback()
            }

            function Qe(e, t) {
                e.setAttribute(t, e.getAttribute("data-" + t)), e.removeAttribute("data-" + t)
            }

            function _e() {
                var e = Zn(".fp-auto-height")[0] || Se() && Zn(".fp-auto-height-responsive")[0];
                g.lazyLoading && e && Zn(Sn + ":not(" + hn + ")").forEach(function (e) {
                    var t, n, o;
                    t = e.getBoundingClientRect(), n = t.top, o = t.bottom, (n + 2 < y && 0 < n || 2 < o && o < y) && Je(e)
                })
            }

            function Je(o) {
                g.lazyLoading && Zn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", tt(o)).forEach(function (n) {
                    if (["src", "srcset"].forEach(function (e) {
                            var t = n.getAttribute("data-" + e);
                            null != t && t && (Qe(n, e), n.addEventListener("load", function () {
                                Ke(o)
                            }))
                        }), bo(n, "source")) {
                        var e = uo(n, "video, audio");
                        e && (e.load(), e.onloadeddata = function () {
                            Ke(o)
                        })
                    }
                })
            }

            function Ke(e) {
                g.scrollOverflow && (clearTimeout(D), D = setTimeout(function () {
                    p.createScrollBar(e)
                }, 200))
            }

            function $e(e) {
                var t = tt(e);
                Zn("video, audio", t).forEach(function (e) {
                    e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play()
                }), Zn('iframe[src*="youtube.com/embed/"]', t).forEach(function (e) {
                    e.hasAttribute("data-autoplay") && qe(e), e.onload = function () {
                        e.hasAttribute("data-autoplay") && qe(e)
                    }
                })
            }

            function qe(e) {
                e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
            }

            function et(e) {
                var t = tt(e);
                Zn("video, audio", t).forEach(function (e) {
                    e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause()
                }), Zn('iframe[src*="youtube.com/embed/"]', t).forEach(function (e) {
                    /youtube\.com\/embed\//.test(e.getAttribute("src")) && !e.hasAttribute("data-keepplaying") && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                })
            }

            function tt(e) {
                var t = Zn(kn, e);
                return t.length && (e = t[0]), e
            }

            function nt(e) {
                var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

                function o(e) {
                    var t, n, o, r, i, l, a = "",
                        s = 0;
                    for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); s < e.length;) t = c.indexOf(e.charAt(s++)) << 2 | (r = c.indexOf(e.charAt(s++))) >> 4, n = (15 & r) << 4 | (i = c.indexOf(e.charAt(s++))) >> 2, o = (3 & i) << 6 | (l = c.indexOf(e.charAt(s++))), a += String.fromCharCode(t), 64 != i && (a += String.fromCharCode(n)), 64 != l && (a += String.fromCharCode(o));
                    return a = function (e) {
                        for (var t, n = "", o = 0, r = 0, i = 0; o < e.length;)(r = e.charCodeAt(o)) < 128 ? (n += String.fromCharCode(r), o++) : 191 < r && r < 224 ? (i = e.charCodeAt(o + 1), n += String.fromCharCode((31 & r) << 6 | 63 & i), o += 2) : (i = e.charCodeAt(o + 1), t = e.charCodeAt(o + 2), n += String.fromCharCode((15 & r) << 12 | (63 & i) << 6 | 63 & t), o += 3);
                        return n
                    }(a)
                }

                function r(e) {
                    return e.slice(3).slice(0, -3)
                }
                return function (e) {
                    var t = e.split("_");
                    if (1 < t.length) {
                        var n = t[1];
                        return e.replace(r(t[1]), "").split("_")[0] + "_" + o(n.slice(3).slice(0, -3))
                    }
                    return r(e)
                }(o(e))
            }

            function ot(f) {
                var d = void 0 !== X[f] && X[f].length,
                    e = [],
                    v = !1;
                return oo(X[f]) ? e = X[f] : e.push(X[f]), e.forEach(function (e) {
                    var t = function () {
                            if (ln.domain.length) {
                                for (var e = ln.domain.replace(/^(www\.)/, "").split("."); 2 < e.length;) e.shift();
                                return e.join(".").replace(/(^\.*)|(\.*$)/g, "")
                            }
                            return ""
                        }(),
                        n = ["MTM0bG9jYWxob3N0MjM0", "MTM0MC4xMjM0", "MTM0anNoZWxsLm5ldDIzNA==", "UDdDQU5ZNlNN"],
                        o = nt(n[0]),
                        r = nt(n[1]),
                        i = nt(n[2]),
                        l = nt(n[3]),
                        a = [o, r, i].indexOf(t) < 0 && 0 !== t.length;
                    if (!d && a) return !1;
                    var s = d ? nt(e) : "",
                        c = 1 < (s = s.split("_")).length && -1 < s[1].indexOf(f, s[1].length - f.length),
                        u = s[0].indexOf(t, s[0].length - t.length) < 0;
                    v = v || !(u && a && l != s[0]) && c || !a
                }), v
            }

            function rt(e) {
                e.forEach(function (e) {
                    if (e.removedNodes[0] && e.removedNodes[0].isEqualNode(F)) {
                        clearTimeout(U);
                        var t = nt("bDIwc2V0VGltZW91dDAzbA==");
                        U = rn[t](it, 900)
                    }
                })
            }

            function it() {
                z = !1
            }

            function lt(e) {
                if (F = ln.createElement("div"), G = nt("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="), B || (G = G.replace("extensions/", "").replace("Extension", "")), F.innerHTML = G, F = F.firstChild, "MutationObserver" in rn && new MutationObserver(rt).observe(ln.body, {
                        childList: !0,
                        subtree: !1
                    }), (!B || Ut(e) && S[e]) && (!ot(e) || !B)) {
                    at();
                    var t = nt("MzQ1c2V0SW50ZXJ2YWwxMjM=");
                    rn[t](at, 2e3)
                }
            }

            function at() {
                F && (z || (Math.random() < .5 ? Lo(m, F) : lo(F, m), z = !0), F.setAttribute("style", nt("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g, nt("MTIzICFpbXBvcnRhbnQ7MzQ1"))))
            }

            function st() {
                var e = ut(),
                    t = e.section,
                    n = e.slide;
                t && (g.animateAnchor ? zt(t, n) : ve(t, n))
            }

            function ct() {
                if (!Q && !g.lockAnchors) {
                    var e = ut(),
                        t = e.section,
                        n = e.slide,
                        o = void 0 === b,
                        r = void 0 === b && void 0 === n && !a;
                    if (t && t.length) {
                        var i = !Ut("dragAndMove") || l;
                        (t && t !== b && !o || r || !a && l != n && i) && zt(t, n)
                    }
                }
            }

            function ut() {
                var e, t, n = rn.location.hash;
                if (n.length) {
                    var o = n.replace("#", "").split("/"),
                        r = -1 < n.indexOf("#/");
                    e = r ? "/" + o[1] : decodeURIComponent(o[0]);
                    var i = r ? o[2] : o[1];
                    i && i.length && (t = decodeURIComponent(i))
                }
                return {
                    section: e,
                    slide: t
                }
            }

            function ft(e) {
                clearTimeout(k);
                var t = ln.activeElement,
                    n = e.keyCode;
                9 === n ? function (e) {
                    var t, n, o, r, i, l, a, s = e.shiftKey,
                        c = ln.activeElement,
                        u = ht(tt(Zn(bn)[0]));

                    function f(e) {
                        return go(e), u[0] ? u[0].focus() : null
                    }(t = e, n = ht(ln), o = n.indexOf(ln.activeElement), r = t.shiftKey ? o - 1 : o + 1, i = n[r], l = Ge(uo(i, On)), a = Xe(uo(i, Sn)), l || a) && (c ? null == uo(c, bn + "," + bn + " " + kn) && (c = f(e)) : f(e), (!s && c == u[u.length - 1] || s && c == u[0]) && go(e))
                }(e) : bo(t, "textarea") || bo(t, "input") || bo(t, "select") || "true" === t.getAttribute("contentEditable") || "" === t.getAttribute("contentEditable") || !g.keyboardScrolling || !g.autoScrolling || (-1 < [40, 38, 32, 33, 34].indexOf(n) && go(e), c = e.ctrlKey, k = setTimeout(function () {
                    ! function (e) {
                        var t = e.shiftKey,
                            n = ln.activeElement,
                            o = bo(n, "video") || bo(n, "audio");
                        if (x || !([37, 39].indexOf(e.keyCode) < 0)) switch (e.keyCode) {
                            case 38:
                            case 33:
                                v.k.up && fe();
                                break;
                            case 32:
                                if (t && v.k.up && !o) {
                                    fe();
                                    break
                                }
                                case 40:
                                case 34:
                                    v.k.down && (32 === e.keyCode && o || de());
                                    break;
                                case 36:
                                    v.k.up && pe(1);
                                    break;
                                case 35:
                                    v.k.down && pe(Zn(Sn).length);
                                    break;
                                case 37:
                                    v.k.left && ge();
                                    break;
                                case 39:
                                    v.k.right && he()
                        }
                    }(e)
                }, 150))
            }

            function dt(e) {
                t && (c = e.ctrlKey)
            }

            function vt(e) {
                2 == e.which && (te = e.pageY, w.addEventListener("mousemove", mt))
            }

            function pt(e) {
                2 == e.which && w.removeEventListener("mousemove", mt)
            }

            function ht(e) {
                return [].slice.call(Zn(N, e)).filter(function (e) {
                    return "-1" !== e.getAttribute("tabindex") && null !== e.offsetParent
                })
            }

            function gt() {
                c = t = !1
            }

            function mt(e) {
                g.autoScrolling && (x && (e.pageY < te && v.m.up ? fe() : e.pageY > te && v.m.down && de()), te = e.pageY)
            }

            function St(e, t, n) {
                var o = uo(e, Sn),
                    r = {
                        slides: e,
                        destiny: t,
                        direction: n,
                        destinyPos: {
                            left: t.offsetLeft
                        },
                        slideIndex: eo(t),
                        section: o,
                        sectionIndex: eo(o, Sn),
                        anchorLink: o.getAttribute("data-anchor"),
                        slidesNav: Zn(Nn, o)[0],
                        slideAnchor: Pt(t),
                        prevSlide: Zn(kn, o)[0],
                        prevSlideIndex: eo(Zn(kn, o)[0]),
                        localIsResizing: E
                    };
                r.xMovement = kt(r.prevSlideIndex, r.slideIndex), r.direction = r.direction ? r.direction : r.xMovement, r.localIsResizing || (x = !1), Qt("parallax", "applyHorizontal", r), Qt("cards", "apply", r), g.onSlideLeave && !r.localIsResizing && "none" !== r.xMovement && mo(g.onSlideLeave) && !1 === Ze("onSlideLeave", r) ? a = !1 : (ro(t, pn), io(ho(t), pn), r.localIsResizing || (et(r.prevSlide), Je(t)), bt(r), Gn(o, pn) && !r.localIsResizing && Nt(r.slideIndex, r.slideAnchor, r.anchorLink, r.sectionIndex), S.continuousHorizontal && S.continuousHorizontal.apply(r), Jt() ? wt(r) : yt(e, r, !0), g.interlockedSlides && S.interlockedSlides && (Ut("continuousHorizontal") && void 0 !== n && n !== r.xMovement || S.interlockedSlides.apply(r)))
            }

            function bt(e) {
                !g.loopHorizontal && g.controlArrows && (wo(Zn(Dn, e.section), 0 !== e.slideIndex), wo(Zn(Yn, e.section), null != $n(e.destiny)))
            }

            function wt(e) {
                var t, n;
                S.continuousHorizontal && S.continuousHorizontal.afterSlideLoads(e), t = e.slidesNav, n = e.slideIndex, g.slidesNavigation && null != t && (io(Zn(hn, t), pn), ro(Zn("a", Zn("li", t)[n]), pn)), e.localIsResizing || (Qt("parallax", "afterSlideLoads"), Qt("scrollOverflowReset", "setPrevious", e.prevSlide), Qt("scrollOverflowReset", "reset"), mo(g.afterSlideLoad) && Ze("afterSlideLoad", e), x = !0, $e(e.destiny)), a = !1, Ut("interlockedSlides") && S.interlockedSlides.apply(e)
            }

            function yt(e, t, n) {
                var o = t.destinyPos;
                if (g.css3) {
                    var r = "translate3d(-" + Math.round(o.left) + "px, 0px, 0px)";
                    S.test.translate3dH[t.sectionIndex] = r, Qn(Lt(Zn(In, e)), Xt(r)), M = setTimeout(function () {
                        n && wt(t)
                    }, g.scrollingSpeed)
                } else S.test.left[t.sectionIndex] = Math.round(o.left), qt(e, Math.round(o.left), g.scrollingSpeed, function () {
                    n && wt(t)
                })
            }

            function Et() {
                clearTimeout(h), h = setTimeout(function () {
                    for (var e = 0; e < 4; e++) A = setTimeout(xt, 200 * e)
                }, 200)
            }

            function xt() {
                if (So(w, "onResize"), At(), i) {
                    var e = ln.activeElement;
                    if (!bo(e, "textarea") && !bo(e, "input") && !bo(e, "select")) {
                        var t = Fn();
                        Math.abs(t - ne) > 20 * Math.max(ne, t) / 100 && (me(!0), ne = t)
                    }
                } else xe()
            }

            function At() {
                var e = g.responsive || g.responsiveWidth,
                    t = g.responsiveHeight,
                    n = e && rn.innerWidth < e,
                    o = t && rn.innerHeight < t;
                e && t ? be(n || o) : e ? be(n) : t && be(o)
            }

            function Lt(e) {
                var t = "all " + g.scrollingSpeed + "ms " + g.easingcss3;
                return io(e, un), Qn(e, {
                    "-webkit-transition": t,
                    transition: t
                })
            }

            function Mt(e) {
                return ro(e, un)
            }

            function Tt(e, t) {
                var n, o, r, i;
                n = e, Zn(g.menu).forEach(function (e) {
                    g.menu && null != e && (io(Zn(hn, e), pn), ro(Zn('[data-menuanchor="' + n + '"]', e), pn))
                }), o = e, r = t, i = Zn(Ln)[0], g.navigation && null != i && "none" !== i.style.display && (io(Zn(hn, Zn(Ln)[0]), pn), ro(o ? Zn('a[href="#' + o + '"]', Zn(Ln)[0]) : Zn("a", Zn("li", Zn(Ln)[0])[r]), pn))
            }

            function Ot(e) {
                var t = eo(Zn(bn)[0], Sn),
                    n = eo(e, Sn);
                return t == n ? "none" : n < t ? "up" : "down"
            }

            function kt(e, t) {
                return e == t ? "none" : t < e ? "left" : "right"
            }

            function Ct(e) {
                if (!Gn(e, zn)) {
                    var t = ln.createElement("div");
                    t.className = wn, t.style.height = Ht(e) + "px", ro(e, zn), so(e, t)
                }
            }

            function Ht(e) {
                var t = Me(e);
                if (g.paddingTop || g.paddingBottom) {
                    var n = e;
                    Gn(n, mn) || (n = uo(e, Sn)), t -= parseInt(getComputedStyle(n)["padding-top"]) + parseInt(getComputedStyle(n)["padding-bottom"])
                }
                return t
            }

            function Rt(e, t) {
                t ? Lt(w) : Mt(w), clearTimeout(H), Qn(w, Xt(e)), S.test.translate3d = e, H = setTimeout(function () {
                    io(w, un)
                }, 10)
            }

            function It(e) {
                var t = Zn(Sn + '[data-anchor="' + e + '"]', w)[0];
                if (!t) {
                    var n = void 0 !== e ? e - 1 : 0;
                    t = Zn(Sn)[n]
                }
                return t
            }

            function zt(e, t) {
                var n = It(e);
                if (null != n) {
                    var o, r, i, l = (null == (i = Zn(On + '[data-anchor="' + (o = t) + '"]', r = n)[0]) && (o = void 0 !== o ? o : 0, i = Zn(On, r)[o]), i);
                    Pt(n) === b || Gn(n, pn) ? Bt(l) : Ve(n, function () {
                        Bt(l)
                    })
                }
            }

            function Bt(e) {
                null != e && St(uo(e, Hn), e)
            }

            function Nt(e, t, n, o) {
                var r = "";
                g.anchors.length && !g.lockAnchors && (e ? (null != n && (r = n), null == t && (t = e), jt(r + "/" + (l = t))) : (null != e && (l = t), jt(n))), Wt()
            }

            function jt(e) {
                if (g.recordHistory) location.hash = e;
                else if (i || u) rn.history.replaceState(void 0, void 0, "#" + e);
                else {
                    var t = rn.location.href.split("#")[0];
                    rn.location.replace(t + "#" + e)
                }
            }

            function Pt(e) {
                if (!e) return null;
                var t = e.getAttribute("data-anchor"),
                    n = eo(e);
                return null == t && (t = n), t
            }

            function Wt() {
                var e = Zn(bn)[0],
                    t = Zn(kn, e)[0],
                    n = Pt(e),
                    o = Pt(t),
                    r = String(n);
                t && (r = r + "-" + o), r = r.replace("/", "-").replace("#", "");
                var i = new RegExp("\\b\\s?" + vn + "-[^\\s]+\\b", "g");
                m.className = m.className.replace(i, ""), ro(m, vn + "-" + r)
            }

            function Dt() {
                return rn.PointerEvent ? {
                    down: "pointerdown",
                    move: "pointermove"
                } : {
                    down: "MSPointerDown",
                    move: "MSPointerMove"
                }
            }

            function Yt(e) {
                var t = [];
                return t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, u && Be(e) && g.scrollBar && void 0 !== e.touches && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
            }

            function Vt(e, t) {
                ie(0, "internal"), void 0 !== t && (E = !0), St(uo(e, Hn), e), void 0 !== t && (E = !1), ie(Y.scrollingSpeed, "internal")
            }

            function Zt(e) {
                var t = Math.round(e);
                if (g.css3 && g.autoScrolling && !g.scrollBar) Rt("translate3d(0px, -" + t + "px, 0px)", !1);
                else if (g.autoScrolling && !g.scrollBar) Qn(w, {
                    top: -t + "px"
                }), S.test.top = -t + "px";
                else {
                    var n = Fe(t);
                    en(n.element, n.options)
                }
            }

            function Xt(e) {
                return {
                    "-webkit-transform": e,
                    "-moz-transform": e,
                    "-ms-transform": e,
                    transform: e
                }
            }

            function Gt(t, e, n) {
                "all" !== e ? v[n][e] = t : Object.keys(v[n]).forEach(function (e) {
                    v[n][e] = t
                })
            }

            function Ft(e) {
                return Qn(e, {
                    "-webkit-transition": "none",
                    transition: "none"
                })
            }

            function Ut(e) {
                return null !== g[e] && "[object Array]" === Object.prototype.toString.call(g[e]) ? g[e].length && S[e] : g[e] && S[e]
            }

            function Qt(e, t, n) {
                if (Ut(e)) return S[e][t](n)
            }

            function _t() {
                return Ut("dragAndMove") && S.dragAndMove.isAnimating
            }

            function Jt() {
                return Ut("dragAndMove") && S.dragAndMove.isGrabbing
            }

            function Kt(e, t, n) {
                g[e] = t, "internal" !== n && (Y[e] = t)
            }

            function $t() {
                var e = g.licenseKey,
                    t = "font-size: 15px;background:yellow;";
                n ? e && e.length < 20 && (console.warn("%c This website was made using fullPage.js slider. More info on the following website:", t), console.warn("%c https://alvarotrigo.com/fullPage/", t)) : (Vn("error", "Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"), Vn("error", "https://github.com/alvarotrigo/fullPage.js#options.")), Gn(s, dn) ? Vn("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (g.continuousVertical && (g.loopTop || g.loopBottom) && (g.continuousVertical = !1, Vn("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !g.scrollOverflow || !g.scrollBar && g.autoScrolling || Vn("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !g.continuousVertical || !g.scrollBar && g.autoScrolling || (g.continuousVertical = !1, Vn("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), g.scrollOverflow && null == g.scrollOverflowHandler && (g.scrollOverflow = !1, Vn("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), g.anchors.forEach(function (t) {
                    var e = [].slice.call(Zn("[name]")).filter(function (e) {
                            return e.getAttribute("name") && e.getAttribute("name").toLowerCase() == t.toLowerCase()
                        }),
                        n = [].slice.call(Zn("[id]")).filter(function (e) {
                            return e.getAttribute("id") && e.getAttribute("id").toLowerCase() == t.toLowerCase()
                        });
                    if (n.length || e.length) {
                        Vn("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
                        var o = n.length ? "id" : "name";
                        (n.length || e.length) && Vn("error", '"' + t + '" is is being used by another element `' + o + "` property")
                    }
                }))
            }

            function qt(t, n, o, r) {
                var e, i = (e = t).self != rn && Gn(e, Cn) ? e.scrollLeft : !g.autoScrolling || g.scrollBar ? po() : e.offsetTop,
                    l = n - i,
                    a = 0;
                W = !0;
                var s = function () {
                    if (W) {
                        var e = n;
                        a += 20, o && (e = rn.fp_easings[g.easing](a, i, l, o)), en(t, e), a < o ? setTimeout(s, 20) : void 0 !== r && r()
                    } else a < o && r()
                };
                s()
            }

            function en(e, t) {
                !g.autoScrolling || g.scrollBar || e.self != rn && Gn(e, Cn) ? e.self != rn && Gn(e, Cn) ? e.scrollLeft = t : e.scrollTo(0, t) : e.style.top = t + "px"
            }

            function tn(e, t) {
                this.anchor = e.getAttribute("data-anchor"), this.item = e, this.index = eo(e, t), this.isLast = this.index === e.parentElement.querySelectorAll(t).length - 1, this.isFirst = !this.index
            }

            function nn(e) {
                tn.call(this, e, Sn)
            }

            function on(e) {
                tn.call(this, e, On)
            }
            $t()
        }
}), window.jQuery && window.fullpage && function (t, n) {
    "use strict";
    t && n ? t.fn.fullpage = function (e) {
        e = t.extend({}, e, {
            $: t
        });
        new n(this[0], e)
    } : window.fp_utils.showError("error", "jQuery is required to use the jQuery fullpage adapter!")
}(window.jQuery, window.fullpage);
