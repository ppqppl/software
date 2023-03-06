/*! For license information please see ../LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([[20, 2, 4], {
    1329: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return r
        }));
        var i = n(1332);

        function r(e) {
            return Object(i.createDecorator)((function (t, n) {
                if (!t.methods) throw new Error("This decorator must be used on a vue component method.");
                var i = "number" == typeof e ? e : e.time, r = t.methods[n], o = 0, a = function () {
                    o && (clearTimeout(o), o = 0)
                };
                t.methods[n] = function () {
                    for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    a(), o = setTimeout((function () {
                        o = 0, r.apply(e, t)
                    }), i)
                }
            }))
        }
    }, 1331: function (e, t, n) {
        "use strict";
        n(10), n(11), n(4), n(32);
        var i = n(33), r = n(40), o = n(70), a = n(71), s = n(37), c = n(29), l = n(18), u = n(3);

        function d(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(s.a)(e);
                if (t) {
                    var r = Object(s.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(a.a)(this, n)
            }
        }

        var p = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(c.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, f = function (e) {
            Object(o.a)(n, e);
            var t = d(n);

            function n() {
                var e;
                return Object(i.a)(this, n), (e = t.apply(this, arguments)).visible = !1, e.eventId = 0, e
            }

            return Object(r.a)(n, [{
                key: "show", value: function () {
                    this.visible = !0
                }
            }, {
                key: "emit", value: function () {
                    this.visible = !1, this.$destroy(), this.resolve()
                }
            }, {
                key: "close", value: function () {
                    this.visible = !1, this.$destroy(), this.reject()
                }
            }, {
                key: "mounted", value: function () {
                    var e = this;
                    this.eventId = u.a.attachServerEvent("OnLogout", (function () {
                        e.close()
                    }))
                }
            }, {
                key: "beforeDestroy", value: function () {
                    u.a.detachServerEvent("OnLogout", this.eventId)
                }
            }]), n
        }(l.Vue);
        p([Object(l.Prop)({})], f.prototype, "resolve", void 0), p([Object(l.Prop)({})], f.prototype, "reject", void 0), p([Object(l.Prop)({})], f.prototype, "content", void 0), p([Object(l.Prop)({})], f.prototype, "title", void 0), p([Object(l.Prop)({default: "确定"})], f.prototype, "confirmText", void 0), p([Object(l.Prop)({default: !1})], f.prototype, "danger", void 0);
        var h = f = p([Object(l.Component)({})], f), v = (n(280), n(72)), y = Object(v.a)(h, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("td-dialog", {
                attrs: {"custom-class": "xly-dialog-prompt", visible: e.visible},
                on: {
                    "update:visible": function (t) {
                        e.visible = t
                    }, close: e.close
                }
            }, [n("h2", {
                attrs: {slot: "header"},
                slot: "header"
            }, [e._v("\n    " + e._s(e.title) + "\n  ")]), e._v(" "), n("p", {staticClass: "xly-dialog-prompt__text"}, [e._v("\n    " + e._s(e.content) + "\n  ")]), e._v(" "), n("div", {
                staticClass: "xly-dialog__footer",
                attrs: {slot: "footer"},
                slot: "footer"
            }, [n("div", {staticClass: "xly-dialog__button"}, [n("td-button", {
                attrs: {danger: e.danger},
                on: {click: e.emit}
            }, [e._v("\n        " + e._s(e.confirmText) + "\n      ")]), e._v(" "), n("td-button", {
                staticClass: "td-button--other",
                on: {click: e.close}
            }, [e._v("\n        取消\n      ")])], 1)])])
        }), [], !1, null, null, null);
        t.a = y.exports
    }, 1332: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i, r = (i = n(5)) && "object" == typeof i && "default" in i ? i.default : i,
            o = "undefined" != typeof Reflect && Reflect.defineMetadata;

        function a(e, t, n) {
            (n ? Reflect.getOwnMetadataKeys(t, n) : Reflect.getOwnMetadataKeys(t)).forEach((function (i) {
                var r = n ? Reflect.getOwnMetadata(i, t, n) : Reflect.getOwnMetadata(i, t);
                n ? Reflect.defineMetadata(i, r, e, n) : Reflect.defineMetadata(i, r, e)
            }))
        }

        var s = {__proto__: []} instanceof Array;
        var c = ["data", "beforeCreate", "created", "beforeMount", "mounted", "beforeDestroy", "destroyed", "beforeUpdate", "updated", "activated", "deactivated", "render", "errorCaptured"];

        function l(e, t) {
            void 0 === t && (t = {}), t.name = t.name || e._componentTag || e.name;
            var n = e.prototype;
            Object.getOwnPropertyNames(n).forEach((function (e) {
                if ("constructor" !== e) if (c.indexOf(e) > -1) t[e] = n[e]; else {
                    var i = Object.getOwnPropertyDescriptor(n, e);
                    void 0 !== i.value ? "function" == typeof i.value ? (t.methods || (t.methods = {}))[e] = i.value : (t.mixins || (t.mixins = [])).push({
                        data: function () {
                            var t;
                            return (t = {})[e] = i.value, t
                        }
                    }) : (i.get || i.set) && ((t.computed || (t.computed = {}))[e] = {get: i.get, set: i.set})
                }
            })), (t.mixins || (t.mixins = [])).push({
                data: function () {
                    return function (e, t) {
                        var n = t.prototype._init;
                        t.prototype._init = function () {
                            var t = this, n = Object.getOwnPropertyNames(e);
                            if (e.$options.props) for (var i in e.$options.props) e.hasOwnProperty(i) || n.push(i);
                            n.forEach((function (n) {
                                "_" !== n.charAt(0) && Object.defineProperty(t, n, {
                                    get: function () {
                                        return e[n]
                                    }, set: function (t) {
                                        e[n] = t
                                    }, configurable: !0
                                })
                            }))
                        };
                        var i = new t;
                        t.prototype._init = n;
                        var r = {};
                        return Object.keys(i).forEach((function (e) {
                            void 0 !== i[e] && (r[e] = i[e])
                        })), r
                    }(this, e)
                }
            });
            var i = e.__decorators__;
            i && (i.forEach((function (e) {
                return e(t)
            })), delete e.__decorators__);
            var l, u, d = Object.getPrototypeOf(e.prototype), p = d instanceof r ? d.constructor : r, f = p.extend(t);
            return function (e, t, n) {
                Object.getOwnPropertyNames(t).forEach((function (i) {
                    if ("prototype" !== i) {
                        var r = Object.getOwnPropertyDescriptor(e, i);
                        if (!r || r.configurable) {
                            var o, a, c = Object.getOwnPropertyDescriptor(t, i);
                            if (!s) {
                                if ("cid" === i) return;
                                var l = Object.getOwnPropertyDescriptor(n, i);
                                if (o = c.value, a = typeof o, null != o && ("object" === a || "function" === a) && l && l.value === c.value) return
                            }
                            0, Object.defineProperty(e, i, c)
                        }
                    }
                }))
            }(f, e, p), o && (a(l = f, u = e), Object.getOwnPropertyNames(u.prototype).forEach((function (e) {
                a(l.prototype, u.prototype, e)
            })), Object.getOwnPropertyNames(u).forEach((function (e) {
                a(l, u, e)
            }))), f
        }

        function u(e) {
            return "function" == typeof e ? l(e) : function (t) {
                return l(t, e)
            }
        }

        u.registerHooks = function (e) {
            c.push.apply(c, e)
        }, t.default = u, t.createDecorator = function (e) {
            return function (t, n, i) {
                var r = "function" == typeof t ? t : t.constructor;
                r.__decorators__ || (r.__decorators__ = []), "number" != typeof i && (i = void 0), r.__decorators__.push((function (t) {
                    return e(t, n, i)
                }))
            }
        }, t.mixins = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return r.extend({mixins: e})
        }
    }, 1342: function (e, t, n) {
        var i = n(1348);
        "string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        (0, n(90).default)("014d4508", i, !0, {sourceMap: !1})
    }, 1343: function (e, t, n) {
        var i = n(1349);
        "string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        (0, n(90).default)("59a38204", i, !0, {sourceMap: !1})
    }, 1344: function (e, t, n) {
        var i = n(1350);
        "string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        (0, n(90).default)("19d22f20", i, !0, {sourceMap: !1})
    }, 1345: function (e, t, n) {
        var i = n(1351);
        "string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        (0, n(90).default)("4c53d628", i, !0, {sourceMap: !1})
    }, 1348: function (e, t, n) {
        var i = n(89), r = n(126), o = n(473);
        t = i(!1);
        var a = r(o);
        t.push([e.i, "body{--color-primary:#3f85ff;--color-hover:#2670ea;--color-start:#2670ea;--color-end:#3f85ff;--color-light:#0cf;--color-title:#1a1a1a;--color-default:#4d4d4d;--color-auxiliary:#727272;--color-secondary:#b3b3b3;--color-disabled:#ccc;--color-icon:#6a707c;--color-border:#e6e6e6;--color-border-form:#ccc;--color-border-2:#e2e2e2;--color-item-hover:#eff6fe;--color-item-active:#e5f0fe;--color-list-hover:#e6e6e6;--color-shadow:rgba(26,26,26,0.2);--color-link:var(--color-default);--background-main:#f5f5f5;--background-area:#fff;--background-module:#fff;--background-progress:#e6e6e6;--background-bar:#fff8e4;--background-icon-hover:rgba(106,112,124,0.4);--background-aside:linear-gradient(180deg,var(--color-start),var(--color-end));--color-scrollbar:rgba(0,0,0,0.2);--color-scrollbar-hover:rgba(0,0,0,0.3);--icon-opacity:0.4;--table-color-line:var(--color-border-form);--input-border-color:var(--color-border);--button-default-fill:var(--color-primary);--button-default-fill-hover:var(--color-hover);--button-secondary-fill:var(--background-main);--button-secondary-color:var(--color-auxiliary);--input-border-color-hover:var(--color-border-form);--dropdown-border-color:var(--color-border);--badge-background:var(--color-danger);--color-danger:#ff7b5f;--color-note:#ff9701;--color-success:#00b36a;--color-danger-1:#ff7b5f;--color-danger-2:#ff7b5f;--color-danger-3:#ff927b}body,body.is-dark{--dialog-background:var(--background-module)}body.is-dark{--color-start:#121212;--color-end:#121212;--color-title:#e6e6e6;--color-default:#c8c8c8;--color-auxiliary:#aaa;--color-secondary:#858585;--color-disabled:#4b4b4b;--color-icon:#6a707c;--color-border:#3d3d3d;--color-border-form:#4d4d4d;--color-border-2:#464646;--color-item-hover:#2e2e2e;--color-item-active:#1c1d1d;--color-list-hover:#414141;--color-shadow:rgba(0,0,0,0.5);--color-scrollbar:hsla(0,0%,100%,0.18);--color-scrollbar-hover:hsla(0,0%,100%,0.3);--background-main:#121212;--background-area:#232526;--background-module:#333;--background-progress:#414141;--background-bar:rgba(255,248,228,0.8);--background-icon-hover:rgba(106,112,124,0.4);--icon-opacity:0.8}body.is-dark .xly-browser-search .td-input-group{background:#000}body.is-dark .xly-browser-tab .td-browser-tab .td-browser-tab__item:hover .td-browser-tab__text{background:hsla(0,0%,100%,.18)}body.is-dark .xly-drag{background:rgba(0,0,0,.6)}body.is-theme{--color-start:#f60045;--background-aside:url(" + a + "),linear-gradient(#f60045,#e32131)}body.is-theme .xly-aside{background-size:100% auto,100% 100%;background-position:bottom,50%;background-repeat:no-repeat}", ""]), e.exports = t
    }, 1349: function (e, t, n) {
        var i = n(89), r = n(126), o = n(675), a = n(676), s = n(677), c = n(678), l = n(679), u = n(680), d = n(681),
            p = n(682);
        t = i(!1);
        var f = r(o), h = r(a), v = r(s), y = r(c), m = r(l), b = r(u), g = r(d), x = r(p);
        t.push([e.i, 'pre{font-family:"microsoft yahei",-apple-system,"PingFang SC","simsun",Arial,sans-serif}@font-face{font-family:"dincond";src:url(' + f + ') format("woff")}body::-webkit-scrollbar{width:8px;background:transparent}body::-webkit-scrollbar:horizontal{height:8px}body::-webkit-scrollbar-thumb{border-radius:2px;width:6px;background:var(--color-scrollbar)}body::-webkit-scrollbar-thumb:hover{background:var(--color-scrollbar-hover)}body::-webkit-scrollbar-corner{background:transparent}body .td-progress-bar__outer,body .td-slider__bar{background:var(--background-progress)}body .td-input__inner,body .td-textarea__inner{background:var(--background-module);border-color:var(--color-border-form)}body .td-input__inner::-moz-placeholder,body .td-textarea__inner::-moz-placeholder{color:var(--color-secondary)}body .td-input__inner:-ms-input-placeholder,body .td-textarea__inner:-ms-input-placeholder{color:var(--color-secondary)}body .td-input__inner::-ms-input-placeholder,body .td-textarea__inner::-ms-input-placeholder{color:var(--color-secondary)}body .td-input__inner::placeholder,body .td-textarea__inner::placeholder{color:var(--color-secondary)}body .td-textarea__inner::-webkit-scrollbar-thumb{border-right:unset}body .is-disabled .td-input__inner{background:var(--color-border)}body .td-textarea.is-disabled .td-textarea__inner{background:var(--background-main)}body .td-checkbox{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}body .td-checkbox .td-checkbox__inner{width:14px;height:14px;background:var(--background-area);border-color:var(--color-border-form)}body .td-checkbox .td-checkbox__inner:hover{border-color:var(--color-primary)}body .td-checkbox .td-checkbox__inner:checked:before{left:2px;width:7px;border-width:2px;border-color:var(--color-primary)}body .td-checkbox.is-indeterminate .td-checkbox__inner{background:unset;border-color:var(--color-border-form)}body .td-checkbox.is-indeterminate .td-checkbox__inner:before{top:50%;left:50%;width:6px;height:6px;background:var(--color-primary);border:unset;transform:translate3d(-50%,-50%,0)}body .td-checkbox.is-indeterminate .td-checkbox__inner:hover{border-color:var(--color-primary)}body .td-checkbox.is-disabled{cursor:default}body .td-checkbox.is-disabled .td-checkbox__inner,body .td-checkbox.is-disabled .td-checkbox__inner:checked{background:var(--color-border);border:1px solid var(--color-border-form)}body .td-checkbox.is-disabled .td-checkbox__inner:checked:before{border-color:var(--color-border-form)}body .td-checkbox.is-disabled.is-indeterminate .td-checkbox__inner{background:var(--color-border);border:1px solid var(--color-border-form)}body .td-checkbox.is-disabled.is-indeterminate .td-checkbox__inner:before{background:var(--color-border-form)}body .td-icon-success:before{font-family:"xly-icon"!important;content:"\\e7b6"}body .td-dialog{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}body .td-dialog__close{-webkit-app-region:no-drag}body .td-select,body .td-select.is-disabled{background:transparent}body .td-select.is-disabled .td-select-group__label{color:var(--color-disabled)}body .td-select.is-disabled .td-select-group{background:var(--background-main);border-color:var(--color-border-form)}body .td-select.is-disabled .td-select__drop{opacity:.2}body .td-select.is-disabled .td-input__inner{background:transparent;color:var(--color-disabled)}body .td-select-group,body .td-select-group:hover{border-color:var(--color-border-form)}body .td-select__drop{color:var(--color-secondary)}body .td-tooltip{box-shadow:0 0 10px var(--color-shadow)}body .td-poper__arrow,body .td-tooltip{background:var(--background-module)}body .td-radio__inner{width:14px;height:14px}body .td-radio__inner,body .td-radio__inner:checked{border-color:var(--color-border-form)}body .td-radio__inner:checked:after{width:8px;height:8px}body .td-table{background:unset;border-color:var(--color-border)}body .td-table th{height:23px;border-bottom:unset}body .td-table td{height:28px;border-bottom:unset}body .td-table__panel::-webkit-scrollbar-thumb{border-right:var(--background-module)}body .td-button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}body .td-button.is-disabled{color:var(--color-disabled);background:var(--background-main);cursor:default}body .td-button.td-button--large{font-size:14px}body .td-button.td-button--secondary{color:var(--color-auxiliary);background:var(--background-main)}body .td-button.td-button--secondary:hover{color:var(--color-primary)}body .td-button.td-button--secondary.is-disabled,body .td-button.td-button--secondary.is-disabled:hover{color:var(--color-disabled)}body .td-button.td-button--other{font-size:12px;color:var(--color-default);border-color:var(--color-border-form)}body .td-button.td-button--other:hover{color:var(--color-primary)}body .td-button.td-button--other:active{background:var(--color-item-active);border-color:var(--color-primary)}body .td-button.td-button--other.is-disabled{color:var(--color-disabled);background:var(--background-main);border-color:var(--color-border)}body .td-button.td-button--text.is-disabled{color:var(--color-secondary);background:transparent}body .td-button.is-status{background:rgba(63,133,255,.5)}body .td-icon-arrow-drop:before{font-family:"xly-icon"!important;content:"\\e7b1"}body .td-dropdown-menu{background:var(--background-module);box-shadow:0 0 20px var(--color-shadow);border:unset}body .td-dropdown-menu::-webkit-scrollbar{width:8px;background:transparent}body .td-dropdown-menu::-webkit-scrollbar:horizontal{height:8px}body .td-dropdown-menu::-webkit-scrollbar-thumb{border-radius:2px;width:6px;background:var(--color-scrollbar)}body .td-dropdown-menu::-webkit-scrollbar-thumb:hover{background:var(--color-scrollbar-hover)}body .td-dropdown-menu::-webkit-scrollbar-corner{background:transparent}body .td-dropdown-menu::-webkit-scrollbar{width:10px}body .td-dropdown-menu::-webkit-scrollbar-thumb{border-left:2px solid var(--background-module)}body .td-dropdown-menu__item:hover{background:var(--color-list-hover)}body .xly-pop-loading{position:fixed;top:50%;left:50%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0;width:120px;height:120px;background:var(--background-module);box-shadow:0 0 10px var(--color-shadow);border-radius:6px;transform:translate3d(-50%,-50%,0);z-index:99;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}body .xly-pop-loading .td-dialog__header{min-height:unset}body .xly-pop-loading .td-dialog__body{display:flex;flex-direction:column;justify-content:center;align-items:center}body .xly-pop-loading .td-dialog__close:hover{background:unset}body .xly-pop-loading .td-dialog__close:hover .td-icon-close{color:var(--color-primary)}body .xly-pop-loading .td-icon-close{position:absolute;top:6px;right:6px;color:var(--color-secondary);cursor:pointer}body .xly-pop-loading p{margin-top:8px;white-space:nowrap}.xly-line{width:1px;height:10px;margin:0 4px;background:var(--color-border)}.xly-select{position:relative;-webkit-appearance:unset;padding:0 24px 0 8px;height:30px;color:var(--color-default);font-size:12px;border:1px solid var(--color-border-form);border-radius:4px;outline:none;background:url(' + h + ") 99% no-repeat;background-size:16px auto}.xly-select option{height:30px;background:var(--background-module)}.xly-img-empty-netdisk{width:160px;height:140px;background:url(" + v + ") no-repeat;background-size:100% auto}.xly-img-network{width:160px;height:140px;background:url(" + y + ") no-repeat;background-size:100% auto}.xly-img-404{width:160px;height:140px;background:url(" + m + ") no-repeat;background-size:100% auto}.xly-img-message{width:160px;height:140px;background:url(" + b + ') no-repeat;background-size:100% auto}.xly-empty{display:flex;justify-content:center;align-items:center;width:100%;height:100%;background:var(--background-main)}.xly-empty i.xly-icon-logo{font-size:120px;color:var(--color-border)}.xly-404,.xly-error{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.xly-error{flex-direction:column;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.xly-error p{margin:20px 0 22px;color:var(--color-secondary)}.xly-error .td-button{margin:0 6px;width:72px}.xly-error__button{display:flex}.xly-error__button .td-button.td-button--other{line-height:23px}body .td-cover{line-height:1.5}body .td-cover .td-icon-error,body .td-cover .td-icon-warning{font-family:"xly-icon"!important}body .td-cover .td-icon-error:before,body .td-cover .td-icon-warning:before{content:"\\e7a5"}body .td-cover.td-cover--message{justify-content:flex-end}body .td-cover .td-message{margin-bottom:66px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}body .td-cover .td-message__text{margin-left:12px}body .td-cover .td-message--error{color:#fff;background:#e66056}body .td-cover .td-message--warning{color:#fff;background:#ff9700}body .td-cover .td-message--success{color:#fff;background:#38b878}body .td-icon-close:before{font-family:"xly-icon";content:"\\e768"}.xly-tips{display:none;position:absolute;left:50%;bottom:28px;padding:0 12px;color:#fff;white-space:nowrap;text-align:center;line-height:30px;background:#46423c;box-shadow:0 0 10px 0 rgba(26,26,26,.2);border-radius:4px;transform:translateX(-50%);z-index:2}i.xly-img-icon-rocket{margin-right:5px;width:27px;height:15px;background:url(' + g + ');background-size:100% auto}.xly-more-drop{display:none;position:absolute;top:24px;left:0;min-width:100px;padding:6px 0;width:76px;background:var(--background-module);box-shadow:0 0 10px 0 var(--color-shadow);border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.xly-more-drop li{padding-left:20px;height:30px;line-height:30px;cursor:default}.xly-more-drop li:hover{background:var(--color-list-hover)}.xly-point{display:inline-block;width:12px;vertical-align:top}.xly-point:before{content:"";animation:content 1.5s infinite both}@keyframes content{0%{content:""}25%{content:"."}50%{content:".."}75%{content:"..."}}.xly-drop-file{top:0;padding:6px 0 0;background:var(--background-module)}.xly-drop-file .td-dropdown-menu__item{position:relative;padding:0 0 0 8px;line-height:30px}.xly-drop-file .td-dropdown-menu__item:hover .xly-drop-file__close{display:block}.xly-drop-file ul{max-height:unset;overflow:visible}.xly-drop-file__close{display:none;position:absolute;top:0;right:12px;color:var(--color-secondary)}.xly-drop-file__close:hover{color:var(--color-primary)}.xly-drop-file__link{margin-top:6px;display:block;line-height:30px;text-align:center;color:var(--color-default);border-top:1px solid var(--color-border)}.xly-drop-file__link:hover{color:var(--color-primary)}i.img-icon-loading{display:block;width:48px;height:48px;background:url(' + x + ") no-repeat;background-size:100%;animation:rotate 2s linear infinite both}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(1turn)}}", ""]), e.exports = t
    }, 1350: function (e, t, n) {
        var i = n(89), r = n(126), o = n(478);
        t = i(!1);
        var a = r(o);
        t.push([e.i, '@font-face{font-family:"xly-icon";src:url(' + a + ') format("woff")}[class*=" xly-icon-"],[class^=xly-icon]{font-family:"xly-icon"!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.xly-icon-unzip:before{content:"\\e7ea"}.xly-icon-mobile-bold:before{content:"\\e7e8"}.xly-icon-connect:before{content:"\\e7e6"}.xly-icon-accelerate:before{content:"\\e7e5"}.xly-icon-menu-chosen:before{content:"\\e7e4"}.xly-icon-add:before{content:"\\e74a"}.xly-icon-menu:before{content:"\\e74b"}.xly-icon-search:before{content:"\\e74c"}.xly-icon-nav-find:before{content:"\\e74d"}.xly-icon-nav-message:before{content:"\\e74e"}.xly-icon-nav-down:before{content:"\\e74f"}.xly-icon-nav-game:before{content:"\\e7e9"}.xly-icon-share:before{content:"\\e750"}.xly-icon-theme:before{content:"\\e751"}.xly-icon-nav-cloud:before{content:"\\e752"}.xly-icon-link:before{content:"\\e661"}.xly-icon-send:before{content:"\\e63e"}.xly-icon-face:before{content:"\\e642"}.xly-icon-img:before{content:"\\e68f"}.xly-icon-maximize:before{content:"\\e753"}.xly-icon-minimize:before{content:"\\e754"}.xly-icon-close:before{content:"\\e755"}.xly-icon-message:before{content:"\\e7b4"}.xly-icon-download:before{content:"\\e75a"}.xly-icon-pause:before{content:"\\e759"}.xly-icon-praise:before{content:"\\e758"}.xly-icon-note:before{content:"\\e757"}.xly-icon-more:before{content:"\\e756"}.xly-icon-add-tab:before{content:"\\e75c"}.xly-icon-fav:before{content:"\\e75d"}.xly-icon-delete-comment:before{content:"\\e75e"}.xly-icon-comment:before{content:"\\e75f"}.xly-icon-resize:before{content:"\\e761"}.xly-icon-arrow-right:before{content:"\\e762"}.xly-icon-rename:before{content:"\\e763"}.xly-icon-file:before{content:"\\e760"}.xly-icon-open:before{content:"\\e764"}.xly-icon-restore:before{content:"\\e765"}.xly-icon-clear:before{content:"\\e766"}.xly-icon-play:before{content:"\\e767"}.xly-icon-close-small:before{content:"\\e768"}.xly-icon-help:before{content:"\\e769"}.xly-icon-clear-1:before{content:"\\e76a"}.xly-icon-upload:before{content:"\\e76b"}.xly-icon-retry:before{content:"\\e76c"}.xly-icon-logo:before{content:"\\e76f"}.xly-icon-drag:before{content:"\\e76d"}.xly-icon-transport:before{content:"\\e76e"}.xly-icon-sequence:before{content:"\\e770"}.xly-icon-success:before{content:"\\e771"}.xly-icon-refresh:before{content:"\\e772"}.xly-icon-copy:before{content:"\\e773"}.xly-icon-arrow-down:before{content:"\\e774"}.xly-icon-play-detail:before{content:"\\e775"}.xly-icon-magnifier:before{content:"\\e77c"}.xly-icon-collapse:before{content:"\\e778"}.xly-icon-report-fill:before{content:"\\e779"}.xly-icon-comment-fill:before{content:"\\e77a"}.xly-icon-quote:before{content:"\\e77b"}.xly-icon-hot:before{content:"\\e777"}.xly-icon-delete:before{content:"\\e776"}.xly-icon-sort:before{content:"\\e77d"}.xly-icon-upload-total:before{content:"\\e77e"}.xly-icon-time:before{content:"\\e77f"}.xly-icon-user:before{content:"\\e780"}.xly-icon-peak-upload:before{content:"\\e781"}.xly-icon-speed:before{content:"\\e782"}.xly-icon-peak-download:before{content:"\\e783"}.xly-icon-file-1:before{content:"\\e784"}.xly-icon-download-total:before{content:"\\e785"}.xly-icon-luky:before{content:"\\e786"}.xly-icon-qzone:before{content:"\\e787"}.xly-icon-qq:before{content:"\\e788"}.xly-icon-net:before{content:"\\e696"}.xly-icon-disk:before{content:"\\e78a"}.xly-icon-refresh-1:before{content:"\\e789"}.xly-icon-arrow-right-1:before{content:"\\e78c"}.xly-icon-arrow-left:before{content:"\\e78b"}.xly-icon-history:before{content:"\\e78e"}.xly-icon-search-1:before{content:"\\e78f"}.xly-icon-close-search:before{content:"\\e790"}.xly-icon-success-fill:before{content:"\\e78d"}.xly-icon-success-bold:before{content:"\\e7b6"}.xly-icon-minimize-small:before{content:"\\e791"}.xly-icon-maximize-small:before{content:"\\e793"}.xly-icon-magnify:before{content:"\\e794"}.xly-icon-ratio:before{content:"\\e795"}.xly-icon-minify:before{content:"\\e796"}.xly-icon-reduce-small:before{content:"\\e792"}.xly-icon-reduce:before{content:"\\e797"}.xly-icon-eye:before{content:"\\e79c"}.xly-icon-eye-open:before{content:"\\e79d"}.xly-icon-arrow-down-1:before{content:"\\e798"}.xly-icon-alipay:before{content:"\\e79b"}.xly-icon-wechat:before{content:"\\e799"}.xly-icon-weibo:before{content:"\\e79a"}.xly-icon-parse:before{content:"\\e79e"}.xly-icon-loading{color:var(--color-secondary);animation:loading 2s linear infinite both}.xly-icon-loading:before{content:"\\e79f"}@keyframes loading{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.xly-icon-vip:before{content:"\\e7a0"}.xly-icon-super:before{content:"\\e7a1"}.xly-icon-time-1:before{content:"\\e7a2"}.xly-icon-speed-1:before{content:"\\e7a3"}.xly-icon-together:before{content:"\\e7a4"}.xly-icon-note-bold:before{content:"\\e7a5"}.xly-icon-skip:before{content:"\\e7a6"}.xly-icon-replace:before{content:"\\e7a7"}.xly-icon-cast-screen:before,.xly-icon-screen:before{content:"\\e7a9"}.xly-icon-back:before{content:"\\e7ab"}.xly-icon-ratio-optimal:before{content:"\\e7aa"}.xly-icon-open-file:before{content:"\\e7ad"}.xly-icon-fav-fill:before{content:"\\e7ac"}.xly-icon-play-small:before{content:"\\e7ae"}.xly-icon-file-small:before{content:"\\e7af"}.xly-icon-open-small:before{content:"\\e7b0"}.xly-icon-personal:before{content:"\\e7b2"}.xly-icon-fav-file:before{content:"\\e7b3"}.xly-icon-vip-1:before{content:"\\e7b7"}.xly-icon-mobile:before{content:"\\e7b8"}.xly-icon-thunder:before{content:"\\e7b9"}.xly-icon-bird:before{content:"\\e7ba"}.xly-icon-transport-up:before{content:"\\e7bc"}.xly-icon-transport-down:before{content:"\\e7bd"}.xly-icon-link-bold:before{content:"\\e7bb"}.xly-icon-refresh-message:before{content:"\\e7c1"}.xly-icon-face-message:before{content:"\\e7c0"}.xly-icon-note-message:before{content:"\\e7bf"}.xly-icon-shield:before{content:"\\e7be"}.xly-icon-user-message:before{content:"\\e7c2"}.xly-icon-vip-message:before{content:"\\e7c3"}.xly-icon-gift:before{content:"\\e7c4"}.xly-icon-official:before{content:"\\e7c5"}.xly-icon-clear-input:before{content:"\\e7c6"}.xly-icon-wait:before{content:"\\e7c7"}.xly-icon-create:before{content:"\\e7cb"}.xly-icon-setting-bold:before{content:"\\e7cd"}.xly-icon-arrow-both:before{content:"\\e7c8"}.xly-icon-attention:before{content:"\\e7ce"}.xly-icon-default:before{content:"\\e7cf"}.xly-icon-secret:before{content:"\\e7d0"}.xly-icon-browser:before{content:"\\e7d1"}.xly-icon-recycle:before{content:"\\e7d2"}.xly-icon-player-small:before{content:"\\e7d3"}.xly-icon-arrow-file:before{content:"\\e7b1"}.xly-icon-code:before{content:"\\e7cc"}.xly-icon-code-both:before{content:"\\e7c9"}.xly-icon-invite:before{content:"\\e7ca"}.xly-icon-share-1:before{content:"\\e7d4"}.xly-icon-netdisk:before{content:"\\e7d5"}.xly-icon-device:before{content:"\\e7d6"}.xly-icon-cloudcast:before{content:"\\e7d7"}.xly-icon-add-netdisk:before{content:"\\e7d8"}.xly-icon-gift-1:before{content:"\\e7d9"}.xly-icon-game:before{content:"\\e7da"}.xly-icon-picture-bold:before{content:"\\e7db"}.xly-icon-music-bold:before{content:"\\e7dc"}.xly-icon-file-bold:before{content:"\\e7dd"}.xly-icon-android-bold:before{content:"\\e7de"}.xly-icon-menu-more:before{content:"\\e7e3"}.xly-icon-menu-setting:before{content:"\\e7df"}.xly-icon-menu-xmp:before{content:"\\e7e0"}.xly-icon-menu-explore:before{content:"\\e7e1"}.xly-icon-menu-support:before{content:"\\e7e2"}', ""]), e.exports = t
    }, 1351: function (e, t, n) {
        var i = n(89), r = n(126), o = n(684);
        t = i(!1);
        var a = r(o);
        t.push([e.i, ".xly-icon-type{display:inline-block;width:30px;height:30px;background:url(" + a + ") -125px -125px no-repeat;background-size:210px auto;vertical-align:top}.xly-icon-type.is-middle{zoom:.8}.xly-icon-type.is-small{zoom:.5333}.xly-icon-type.xly-type-apk{background-position:-5px -5px}.xly-icon-type.xly-type-bt-file{background-position:-45px -5px}.xly-icon-type.xly-type-bt-link{background-position:-5px -45px}.xly-icon-type.xly-type-doc{background-position:-45px -45px}.xly-icon-type.xly-type-group{background-position:-85px -5px}.xly-icon-type.xly-type-link{background-position:-85px -45px}.xly-icon-type.xly-type-magnetic{background-position:-5px -85px}.xly-icon-type.xly-type-music{background-position:-45px -85px}.xly-icon-type.xly-type-pdf{background-position:-85px -85px}.xly-icon-type.xly-type-pic{background-position:-125px -5px}.xly-icon-type.xly-type-ppt{background-position:-125px -45px}.xly-icon-type.xly-type-rar{background-position:-125px -85px}.xly-icon-type.xly-type-save{background-position:-45px -125px}.xly-icon-type.xly-type-txt{background-position:-85px -125px}.xly-icon-type.xly-type-unknow{background-position:-125px -125px}.xly-icon-type.xly-type-avi,.xly-icon-type.xly-type-flv,.xly-icon-type.xly-type-mkv,.xly-icon-type.xly-type-mov,.xly-icon-type.xly-type-mp4,.xly-icon-type.xly-type-mpg,.xly-icon-type.xly-type-rm,.xly-icon-type.xly-type-rmvb,.xly-icon-type.xly-type-video,.xly-icon-type.xly-type-wmv{background-position:-165px -5px}.xly-icon-type.xly-type-word{background-position:-165px -45px}.xly-icon-type.xly-type-xls{background-position:-165px -85px}.xly-icon-type.xly-type-saveto{background-position:-45px -125px}.xly-icon-type.xly-type-resource{background-position:-5px -125px}.xly-icon-type.xly-type-gif{background-position:-165px -125px}.xly-icon-type.xly-type-ipa{background-position:-5px -165px}.xly-icon-type.xly-type-ipsw{background-position:-45px -165px}.xly-icon-type.xly-type-dll{background-position:-85px -165px}.xly-icon-type.xly-type-chm{background-position:-125px -165px}.xly-icon-type.xly-type-text{background-position:-165px -165px}.xly-icon-type.xly-type-exe,.xly-icon-type.xly-type-install{background-position:-5px -205px}.xly-icon-type.xly-type-iso{background-position:-45px -205px}.xly-icon-type.xly-type-safe{background-position:-85px -205px}", ""]), e.exports = t
    }, 1388: function (e, t, n) {
        var i = n(1469);
        "string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        (0, n(90).default)("40148104", i, !0, {sourceMap: !1})
    }, 1389: function (e, t, n) {
        var i = n(1471);
        "string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        (0, n(90).default)("31514b62", i, !0, {sourceMap: !1})
    }, 1390: function (e, t, n) {
        var i = n(1473);
        "string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        (0, n(90).default)("f79d938e", i, !0, {sourceMap: !1})
    }, 1391: function (e, t, n) {
        var i = n(1479);
        "string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        (0, n(90).default)("305f0a85", i, !0, {sourceMap: !1})
    }, 1392: function (e, t, n) {
        var i = n(1481);
        "string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        (0, n(90).default)("5cd06d34", i, !0, {sourceMap: !1})
    }, 1393: function (e, t, n) {
        var i = n(1484);
        "string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        (0, n(90).default)("02ffc3af", i, !0, {sourceMap: !1})
    }, 1394: function (e, t, n) {
        var i = n(1486);
        "string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        (0, n(90).default)("00001c4c", i, !0, {sourceMap: !1})
    }, 1395: function (e, t, n) {
        var i = n(1495);
        "string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        (0, n(90).default)("28f3e16a", i, !0, {sourceMap: !1})
    }, 1396: function (e, t, n) {
        var i = n(1496);
        "string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        (0, n(90).default)("5a5236ec", i, !0, {sourceMap: !1})
    }, 1397: function (e, t, n) {
        var i = n(1498);
        "string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        (0, n(90).default)("269aa694", i, !0, {sourceMap: !1})
    }, 1398: function (e, t, n) {
        var i = n(1502);
        "string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        (0, n(90).default)("69e9e931", i, !0, {sourceMap: !1})
    }, 1399: function (e, t, n) {
        "use strict";
        n(10), n(11), n(32), n(7);
        var i = n(83), r = (n(471), n(33)), o = n(40), a = n(70), s = n(71), c = n(37), l = (n(4), n(29)), u = n(18),
            d = n(139), p = n(13);

        function f(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var h = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, v = function (e, t, n, i) {
            return new (n || (n = Promise))((function (r, o) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        }, y = function (e) {
            Object(a.a)(n, e);
            var t = f(n);

            function n() {
                var e, o;
                return Object(r.a)(this, n), (o = t.apply(this, arguments)).validDateMap = Object.freeze((e = {}, Object(i.a)(e, d.VipType.normal, 10), Object(i.a)(e, d.VipType.normalVip, 15), Object(i.a)(e, d.VipType.platinum, 15), e)), o
            }

            return Object(o.a)(n, [{
                key: "handleClickExtendHref", value: function () {
                    return v(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return this.$eventTrack("recycler_prolong_save_textlink_click", {vip_type: this.vipType}), e.prev = 1, e.next = 4, p.client.callRemoteClientFunction("vip-download-webview", "OpenPayVipUrl", "https://pay.xunlei.com/pay.html?referfrom=v_pc_xlx_hytq_yp_recycle&aidfrom=recycle_ycwzl");
                                case 4:
                                    e.next = 9;
                                    break;
                                case 6:
                                    e.prev = 6, e.t0 = e.catch(1), console.error(e.t0);
                                case 9:
                                    window.close();
                                case 10:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[1, 6]])
                    })))
                }
            }, {
                key: "mounted", value: function () {
                    this.$eventTrack("recycler_prolong_save_textlink_show", {vip_type: this.vipType})
                }
            }, {
                key: "handleActiveChange", value: function (e) {
                }
            }, {
                key: "vipType", get: function () {
                    return this.$store.getters["users/curVipType"]
                }
            }, {
                key: "isSuperVip", get: function () {
                    return this.vipType === d.VipType.superv
                }
            }, {
                key: "active", get: function () {
                    return this.$store.state.drive.activeCollapseItemType
                }
            }]), n
        }(u.Vue);
        h([Object(u.Watch)("active", {immediate: !0})], y.prototype, "handleActiveChange", null);
        var m = y = h([Object(u.Component)({})], y), b = n(72), g = Object(b.a)(m, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {staticClass: "xly-recycle-note "}, [n("p", {staticClass: "xly-recycle-note__text"}, [e._v("\n    " + e._s(e.isSuperVip ? "尊贵的超级会员，您可享受回收站文件保存30天" : "回收站保留" + e.validDateMap[e.vipType] + "天内删除的文件") + "\n  ")]), e._v(" "), e.isSuperVip ? e._e() : n("span", {
                staticClass: "xly-recycle-note__side",
                on: {
                    click: function (t) {
                        return e.handleClickExtendHref()
                    }
                }
            }, [e._v("延长至30天>")])])
        }), [], !1, null, null, null);
        t.a = g.exports
    }, 1406: function (e, t, n) {
        "use strict";
        var i = n(1395);
        n.n(i).a
    }, 1407: function (e, t, n) {
        "use strict";
        var i = n(1396);
        n.n(i).a
    }, 1468: function (e, t, n) {
        "use strict";
        var i = n(1388);
        n.n(i).a
    }, 1469: function (e, t, n) {
        (t = n(89)(!1)).push([e.i, ".disabled-pointer-events{pointer-events:none}", ""]), e.exports = t
    }, 1470: function (e, t, n) {
        "use strict";
        var i = n(1389);
        n.n(i).a
    }, 1471: function (e, t, n) {
        (t = n(89)(!1)).push([e.i, ".no-animation{animation:none!important}", ""]), e.exports = t
    }, 1472: function (e, t, n) {
        "use strict";
        var i = n(1390);
        n.n(i).a
    }, 1473: function (e, t, n) {
        var i = n(89), r = n(126), o = n(675), a = n(676), s = n(677), c = n(678), l = n(679), u = n(680), d = n(681),
            p = n(682);
        t = i(!1);
        var f = r(o), h = r(a), v = r(s), y = r(c), m = r(l), b = r(u), g = r(d), x = r(p);
        t.push([e.i, 'pre{font-family:"microsoft yahei",-apple-system,"PingFang SC","simsun",Arial,sans-serif}@font-face{font-family:"dincond";src:url(' + f + ') format("woff")}body::-webkit-scrollbar{width:8px;background:transparent}body::-webkit-scrollbar:horizontal{height:8px}body::-webkit-scrollbar-thumb{border-radius:2px;width:6px;background:var(--color-scrollbar)}body::-webkit-scrollbar-thumb:hover{background:var(--color-scrollbar-hover)}body::-webkit-scrollbar-corner{background:transparent}body .td-progress-bar__outer,body .td-slider__bar{background:var(--background-progress)}body .td-input__inner,body .td-textarea__inner{background:var(--background-module);border-color:var(--color-border-form)}body .td-input__inner::-moz-placeholder,body .td-textarea__inner::-moz-placeholder{color:var(--color-secondary)}body .td-input__inner:-ms-input-placeholder,body .td-textarea__inner:-ms-input-placeholder{color:var(--color-secondary)}body .td-input__inner::-ms-input-placeholder,body .td-textarea__inner::-ms-input-placeholder{color:var(--color-secondary)}body .td-input__inner::placeholder,body .td-textarea__inner::placeholder{color:var(--color-secondary)}body .td-textarea__inner::-webkit-scrollbar-thumb{border-right:unset}body .is-disabled .td-input__inner{background:var(--color-border)}body .td-textarea.is-disabled .td-textarea__inner{background:var(--background-main)}body .td-checkbox{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}body .td-checkbox .td-checkbox__inner{width:14px;height:14px;background:var(--background-area);border-color:var(--color-border-form)}body .td-checkbox .td-checkbox__inner:hover{border-color:var(--color-primary)}body .td-checkbox .td-checkbox__inner:checked:before{left:2px;width:7px;border-width:2px;border-color:var(--color-primary)}body .td-checkbox.is-indeterminate .td-checkbox__inner{background:unset;border-color:var(--color-border-form)}body .td-checkbox.is-indeterminate .td-checkbox__inner:before{top:50%;left:50%;width:6px;height:6px;background:var(--color-primary);border:unset;transform:translate3d(-50%,-50%,0)}body .td-checkbox.is-indeterminate .td-checkbox__inner:hover{border-color:var(--color-primary)}body .td-checkbox.is-disabled{cursor:default}body .td-checkbox.is-disabled .td-checkbox__inner,body .td-checkbox.is-disabled .td-checkbox__inner:checked{background:var(--color-border);border:1px solid var(--color-border-form)}body .td-checkbox.is-disabled .td-checkbox__inner:checked:before{border-color:var(--color-border-form)}body .td-checkbox.is-disabled.is-indeterminate .td-checkbox__inner{background:var(--color-border);border:1px solid var(--color-border-form)}body .td-checkbox.is-disabled.is-indeterminate .td-checkbox__inner:before{background:var(--color-border-form)}body .td-icon-success:before{font-family:"xly-icon"!important;content:"\\e7b6"}body .td-dialog{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}body .td-dialog__close{-webkit-app-region:no-drag}body .td-select,body .td-select.is-disabled{background:transparent}body .td-select.is-disabled .td-select-group__label{color:var(--color-disabled)}body .td-select.is-disabled .td-select-group{background:var(--background-main);border-color:var(--color-border-form)}body .td-select.is-disabled .td-select__drop{opacity:.2}body .td-select.is-disabled .td-input__inner{background:transparent;color:var(--color-disabled)}body .td-select-group,body .td-select-group:hover{border-color:var(--color-border-form)}body .td-select__drop{color:var(--color-secondary)}body .td-tooltip{box-shadow:0 0 10px var(--color-shadow)}body .td-poper__arrow,body .td-tooltip{background:var(--background-module)}body .td-radio__inner{width:14px;height:14px}body .td-radio__inner,body .td-radio__inner:checked{border-color:var(--color-border-form)}body .td-radio__inner:checked:after{width:8px;height:8px}body .td-table{background:unset;border-color:var(--color-border)}body .td-table th{height:23px;border-bottom:unset}body .td-table td{height:28px;border-bottom:unset}body .td-table__panel::-webkit-scrollbar-thumb{border-right:var(--background-module)}body .td-button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}body .td-button.is-disabled{color:var(--color-disabled);background:var(--background-main);cursor:default}body .td-button.td-button--large{font-size:14px}body .td-button.td-button--secondary{color:var(--color-auxiliary);background:var(--background-main)}body .td-button.td-button--secondary:hover{color:var(--color-primary)}body .td-button.td-button--secondary.is-disabled,body .td-button.td-button--secondary.is-disabled:hover{color:var(--color-disabled)}body .td-button.td-button--other{font-size:12px;color:var(--color-default);border-color:var(--color-border-form)}body .td-button.td-button--other:hover{color:var(--color-primary)}body .td-button.td-button--other:active{background:var(--color-item-active);border-color:var(--color-primary)}body .td-button.td-button--other.is-disabled{color:var(--color-disabled);background:var(--background-main);border-color:var(--color-border)}body .td-button.td-button--text.is-disabled{color:var(--color-secondary);background:transparent}body .td-button.is-status{background:rgba(63,133,255,.5)}body .td-icon-arrow-drop:before{font-family:"xly-icon"!important;content:"\\e7b1"}body .td-dropdown-menu{background:var(--background-module);box-shadow:0 0 20px var(--color-shadow);border:unset}body .td-dropdown-menu::-webkit-scrollbar{width:8px;background:transparent}body .td-dropdown-menu::-webkit-scrollbar:horizontal{height:8px}body .td-dropdown-menu::-webkit-scrollbar-thumb{border-radius:2px;width:6px;background:var(--color-scrollbar)}body .td-dropdown-menu::-webkit-scrollbar-thumb:hover{background:var(--color-scrollbar-hover)}body .td-dropdown-menu::-webkit-scrollbar-corner{background:transparent}body .td-dropdown-menu::-webkit-scrollbar{width:10px}body .td-dropdown-menu::-webkit-scrollbar-thumb{border-left:2px solid var(--background-module)}body .td-dropdown-menu__item:hover{background:var(--color-list-hover)}body .xly-pop-loading{position:fixed;top:50%;left:50%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0;width:120px;height:120px;background:var(--background-module);box-shadow:0 0 10px var(--color-shadow);border-radius:6px;transform:translate3d(-50%,-50%,0);z-index:99;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}body .xly-pop-loading .td-dialog__header{min-height:unset}body .xly-pop-loading .td-dialog__body{display:flex;flex-direction:column;justify-content:center;align-items:center}body .xly-pop-loading .td-dialog__close:hover{background:unset}body .xly-pop-loading .td-dialog__close:hover .td-icon-close{color:var(--color-primary)}body .xly-pop-loading .td-icon-close{position:absolute;top:6px;right:6px;color:var(--color-secondary);cursor:pointer}body .xly-pop-loading p{margin-top:8px;white-space:nowrap}.xly-line{width:1px;height:10px;margin:0 4px;background:var(--color-border)}.xly-select{position:relative;-webkit-appearance:unset;padding:0 24px 0 8px;height:30px;color:var(--color-default);font-size:12px;border:1px solid var(--color-border-form);border-radius:4px;outline:none;background:url(' + h + ") 99% no-repeat;background-size:16px auto}.xly-select option{height:30px;background:var(--background-module)}.xly-img-empty-netdisk{width:160px;height:140px;background:url(" + v + ") no-repeat;background-size:100% auto}.xly-img-network{width:160px;height:140px;background:url(" + y + ") no-repeat;background-size:100% auto}.xly-img-404{width:160px;height:140px;background:url(" + m + ") no-repeat;background-size:100% auto}.xly-img-message{width:160px;height:140px;background:url(" + b + ') no-repeat;background-size:100% auto}.xly-empty{display:flex;justify-content:center;align-items:center;width:100%;height:100%;background:var(--background-main)}.xly-empty i.xly-icon-logo{font-size:120px;color:var(--color-border)}.xly-404,.xly-error{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.xly-error{flex-direction:column;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.xly-error p{margin:20px 0 22px;color:var(--color-secondary)}.xly-error .td-button{margin:0 6px;width:72px}.xly-error__button{display:flex}.xly-error__button .td-button.td-button--other{line-height:23px}body .td-cover{line-height:1.5}body .td-cover .td-icon-error,body .td-cover .td-icon-warning{font-family:"xly-icon"!important}body .td-cover .td-icon-error:before,body .td-cover .td-icon-warning:before{content:"\\e7a5"}body .td-cover.td-cover--message{justify-content:flex-end}body .td-cover .td-message{margin-bottom:66px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}body .td-cover .td-message__text{margin-left:12px}body .td-cover .td-message--error{color:#fff;background:#e66056}body .td-cover .td-message--warning{color:#fff;background:#ff9700}body .td-cover .td-message--success{color:#fff;background:#38b878}body .td-icon-close:before{font-family:"xly-icon";content:"\\e768"}.xly-tips{display:none;position:absolute;left:50%;bottom:28px;padding:0 12px;color:#fff;white-space:nowrap;text-align:center;line-height:30px;background:#46423c;box-shadow:0 0 10px 0 rgba(26,26,26,.2);border-radius:4px;transform:translateX(-50%);z-index:2}i.xly-img-icon-rocket{margin-right:5px;width:27px;height:15px;background:url(' + g + ');background-size:100% auto}.xly-more-drop{display:none;position:absolute;top:24px;left:0;min-width:100px;padding:6px 0;width:76px;background:var(--background-module);box-shadow:0 0 10px 0 var(--color-shadow);border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.xly-more-drop li{padding-left:20px;height:30px;line-height:30px;cursor:default}.xly-more-drop li:hover{background:var(--color-list-hover)}.xly-point{display:inline-block;width:12px;vertical-align:top}.xly-point:before{content:"";animation:content 1.5s infinite both}@keyframes content{0%{content:""}25%{content:"."}50%{content:".."}75%{content:"..."}}.xly-drop-file{top:0;padding:6px 0 0;background:var(--background-module)}.xly-drop-file .td-dropdown-menu__item{position:relative;padding:0 0 0 8px;line-height:30px}.xly-drop-file .td-dropdown-menu__item:hover .xly-drop-file__close{display:block}.xly-drop-file ul{max-height:unset;overflow:visible}.xly-drop-file__close{display:none;position:absolute;top:0;right:12px;color:var(--color-secondary)}.xly-drop-file__close:hover{color:var(--color-primary)}.xly-drop-file__link{margin-top:6px;display:block;line-height:30px;text-align:center;color:var(--color-default);border-top:1px solid var(--color-border)}.xly-drop-file__link:hover{color:var(--color-primary)}i.img-icon-loading{display:block;width:48px;height:48px;background:url(' + x + ") no-repeat;background-size:100%;animation:rotate 2s linear infinite both}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(1turn)}}", ""]), e.exports = t
    }, 1474: function (e, t, n) {
        "use strict";
        n(1475)("link", (function (e) {
            return function (t) {
                return e(this, "a", "href", t)
            }
        }))
    }, 1475: function (e, t, n) {
        var i = n(46), r = n(84), o = n(175), a = /"/g, s = function (e, t, n, i) {
            var r = String(o(e)), s = "<" + t;
            return "" !== n && (s += " " + n + '="' + String(i).replace(a, "&quot;") + '"'), s + ">" + r + "</" + t + ">"
        };
        e.exports = function (e, t) {
            var n = {};
            n[e] = t(s), i(i.P + i.F * r((function () {
                var t = ""[e]('"');
                return t !== t.toLowerCase() || t.split('"').length > 3
            })), "String", n)
        }
    }, 1476: function (e, t, n) {
        "use strict";
        var i = this && this.__awaiter || function (e, t, n, i) {
            return new (n || (n = Promise))((function (r, o) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    e.done ? r(e.value) : new n((function (t) {
                        t(e.value)
                    })).then(a, s)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        };
        Object.defineProperty(t, "__esModule", {value: !0});
        const r = n(96), o = n(1477), a = n(477), s = n(480);

        function c(e) {
            s.information("on object freeer"), global.__xdasIPCServerInstance.notifyFreer(e.client, e.callbackId)
        }

        class l extends r.EventEmitter {
            constructor() {
                super(), this.rid = 0, this.apis = {}, this.eventMap = {}, this.clientAliasMap = {}, this.retCallbackMap = {}, this.contextCallbackMap = {}, this.singleton = !1
            }

            registerFunctions(e) {
                do {
                    if (!e) break;
                    let t = void 0;
                    for (let n in e) if (this.apis.hasOwnProperty(n)) {
                        t = n;
                        break
                    }
                    if (t) throw new Error("try to coverd function " + t);
                    this.apis = Object.assign({}, this.apis, e)
                } while (0)
            }

            start(e, t) {
                if (this.singleton) throw new Error("try to start server duplicate");
                this.singleton = !0, this.server = new o.Server, global.__xdasIPCServer = this.server, this.server.listen(void 0, t), e && this.registerFunctions(e), this.server.on("connect", e => {
                    this.emit("connect", e)
                }), this.server.on("message", (e, t) => {
                    do {
                        if ("attach_event" === e.action) {
                            this.attachEvent(e.name, t);
                            break
                        }
                        if ("detach_event" === e.action) {
                            this.detachEvent(e.name, t);
                            break
                        }
                        if ("broadcast" === e.action) {
                            if (e.__context && e.__context.name === a.serverContextName) throw new Error("client context must difference from server");
                            this.forwardEvent(e.name, e.__context, e.timestamp, ...e.args);
                            break
                        }
                        if ("call_remote_client_api" === e.action) {
                            this.callClientFunction(e, t);
                            break
                        }
                        if ("call_remote_context_by_id" === e.action) {
                            if (e.dst && this.clientAliasMap.hasOwnProperty(e.dst)) {
                                let t = this.clientAliasMap[e.dst];
                                t && this.callClientFunctionById(t, e.rid, ...e.args)
                            }
                            break
                        }
                        if ("call_client_by_id_callback" === e.action) {
                            this.fireRetCallback(e, t);
                            break
                        }
                        if ("check_client_function_callback" === e.action) {
                            this.fireRetCallback(e, t);
                            break
                        }
                        if ("remote_client_callback" === e.action) {
                            this.reply2Client(e, t);
                            break
                        }
                        if ("check_client_function_exist" === e.action) {
                            this.internalCheckClientFunction(e.dst, e.method).then(n => {
                                let i = this.getNow();
                                this.sendAdapter(t, {
                                    success: !0,
                                    rid: e.rid,
                                    method: e.method,
                                    data: n,
                                    timestamp: e.timestamp ? e.timestamp.concat(i) : [].concat(i)
                                })
                            });
                            break
                        }
                        let n = this.getNow(), i = {
                            success: !1,
                            rid: e.rid,
                            method: e.method,
                            timestamp: e.timestamp ? e.timestamp.concat(n) : [].concat(n)
                        }, r = e.method;
                        do {
                            if ("register" === e.action) {
                                this.registerAlias(e, t, i), this.sendAdapter(t, i);
                                break
                            }
                            if ("client_context_freer" === e.action) {
                                if (e.dst && this.clientAliasMap.hasOwnProperty(e.dst)) {
                                    let t = this.clientAliasMap[e.dst];
                                    this.notifyFreer(t, e.rid)
                                }
                                break
                            }
                            if ("check_server_function_exist" === e.action) {
                                i.success = !0, i.data = !(!this.apis || !this.apis[r]), this.sendAdapter(t, i);
                                break
                            }
                            if ("check_client_exist" === e.action) {
                                i.success = !0, i.data = !1, e.dst && this.clientAliasMap.hasOwnProperty(e.dst) && (i.data = !0), this.sendAdapter(t, i);
                                break
                            }
                            if (!r) break;
                            if (!this.apis || !this.apis[r]) {
                                i.error = `${e.__context} try to call method '${r}' which is undefined`, this.sendAdapter(t, i);
                                break
                            }
                            let n = void 0, o = this.decodeParameter(e.args, t);
                            try {
                                n = this.apis[r].apply(null, [t, e.__context].concat(o))
                            } catch (e) {
                                i.error = e.message, this.sendAdapter(t, i);
                                break
                            }
                            if (n && n.then) {
                                n.then(e => {
                                    i.data = e, i.success = !0, this.sendAdapter(t, i)
                                }).catch(e => {
                                    i.error = e instanceof Error ? e.message : e, this.sendAdapter(t, i)
                                });
                                break
                            }
                            i.success = !0, i.data = n, this.sendAdapter(t, i)
                        } while (0)
                    } while (0)
                }), this.server.on("end", e => {
                    this.emit("end", e), this.clearClientInfo(e)
                }), this.server.on("error", (e, t) => {
                    s.information("server error", t, t && t.code), t && "EPIPE" === t.code && this.clearClientInfo(e)
                })
            }

            fireClientEvent(e, ...t) {
                this.forwardEvent(e, {name: a.serverContextName}, void 0, ...t)
            }

            callClientFunctionById(e, t, ...n) {
                this.sendAdapter(e, {action: "call_client_by_id", rid: t, args: n})
            }

            callClientFunctionByIdAw(e, t, ...n) {
                return new Promise((i, r) => {
                    {
                        let r = this.generateId(), o = (e, t) => {
                            i(e ? [null, e] : [t])
                        }, a = {s_rid: r, action: "call_client_by_id", rid: t, args: n};
                        this.retCallbackMap[r] = Object.assign({callback: o}, a), this.sendAdapter(e, a)
                    }
                })
            }

            checkClientFunction(e, t) {
                return "string" == typeof e && (e = this.getFullAlias(e)), this.internalCheckClientFunction(e, t)
            }

            callClientFunctionByName(e, t, ...n) {
                return new Promise((i, r) => {
                    do {
                        if (!e) {
                            i([null, null]);
                            break
                        }
                        let r = void 0;
                        if ("string" == typeof e) {
                            if (e = this.getFullAlias(e), !this.clientAliasMap.hasOwnProperty(e)) {
                                i([null, null]);
                                break
                            }
                            r = this.clientAliasMap[e]
                        } else r = e;
                        if (!r) {
                            i([null, null]);
                            break
                        }
                        let o = this.generateId(), s = (e, t, n) => {
                            i(e ? [null, n, e] : [t, n])
                        };
                        if (n) for (let e = 0; e < n.length; e++) n[e] = this.convertFunction2Id(n[e]);
                        let c = {s_rid: o, action: "call_client_api", args: n, src: a.serverContextName, method: t};
                        this.retCallbackMap[o] = Object.assign({callback: s}, c), this.sendAdapter(r, c)
                    } while (0)
                })
            }

            isRemoteClientExist(e) {
                let t = !1;
                return this.clientAliasMap.hasOwnProperty(this.getFullAlias(e)) && (t = !0), t
            }

            getRemoteClient(e, t) {
                let n = null;
                do {
                    if (!e) break;
                    t || (t = this.server.getProductId());
                    let i = `${t}-${e}`.toLowerCase();
                    n = this.clientAliasMap[i]
                } while (0);
                return n
            }

            internalCheckClientFunction(e, t) {
                return i(this, void 0, void 0, (function* () {
                    return new Promise((n, i) => {
                        do {
                            if (!e) {
                                n(!1);
                                break
                            }
                            let i = void 0;
                            if ("string" == typeof e) {
                                if (!this.clientAliasMap.hasOwnProperty(e)) {
                                    n(!1);
                                    break
                                }
                                i = this.clientAliasMap[e]
                            } else i = e;
                            if (!i) {
                                n(!1);
                                break
                            }
                            let r = this.generateId(), o = (e, t) => {
                                n(!e && t)
                            }, a = {s_rid: r, action: "check_client_function", method: t};
                            this.retCallbackMap[r] = Object.assign({callback: o}, a), this.sendAdapter(i, a)
                        } while (0)
                    })
                }))
            }

            convertFunction2Id(e) {
                let t = e;
                if ("function" == typeof e) {
                    let n = this.generateId();
                    this.contextCallbackMap[n] = e, t = n
                } else if (e && "object" == typeof e) for (let t in e) {
                    let n = e[t];
                    if ("function" == typeof n) {
                        let i = this.generateId();
                        this.contextCallbackMap[i] = n, e[t] = i
                    } else n && "object" == typeof n && (e[t] = this.convertFunction2Id(n))
                }
                return t
            }

            clearClientInfo(e) {
                for (let t in this.clientAliasMap) this.clientAliasMap[t] === e && delete this.clientAliasMap[t];
                for (let t in this.eventMap) this.detachEvent(t, e);
                for (let t in this.retCallbackMap) {
                    let n = this.retCallbackMap[t];
                    if (n.dstRemote === e) {
                        let e = {
                            rid: n.rid,
                            method: n.method,
                            error: "client has been ended by the other party",
                            action: "remote_client_callback",
                            success: !1
                        };
                        s.information("client has been ended by other party, but still has return callback", e), this.sendAdapter(n.remote, e), delete this.retCallbackMap[t]
                    }
                }
            }

            registerAlias(e, t, n) {
                do {
                    if (!e) break;
                    if (!e.alias) {
                        n.error = "register alias can not be empty";
                        break
                    }
                    if (this.clientAliasMap.hasOwnProperty(e.alias)) {
                        if (this.clientAliasMap[e.alias] === t) {
                            n.data = e.alias, n.success = !0;
                            break
                        }
                        n.error = "register failed cause alias is in use";
                        break
                    }
                    {
                        let i = void 0;
                        for (let e in this.clientAliasMap) if (this.clientAliasMap[e] === t) {
                            i = e;
                            break
                        }
                        if (i) {
                            n.data = i, n.error = "register failed cause already register by another alias " + i;
                            break
                        }
                        this.clientAliasMap[e.alias] = t, n.data = e.alias, n.success = !0;
                        break
                    }
                } while (0)
            }

            callClientFunction(e, t) {
                do {
                    if (!e) break;
                    let n = e.dst, i = {rid: e.rid, method: e.method};
                    if (!this.clientAliasMap.hasOwnProperty(n)) {
                        let r = `call remote function but dst client is not start or ended ${n}, method ${e.method}`;
                        s.error(r), i.error = r, i.action = "remote_client_callback", i.success = !1, this.sendAdapter(t, i);
                        break
                    }
                    let r = this.generateId(), o = this.clientAliasMap[n];
                    i = Object.assign({
                        s_rid: r,
                        action: "call_client_api",
                        args: e.args,
                        src: e.src
                    }, i), this.retCallbackMap[r] = Object.assign({remote: t, dstRemote: o}, i), this.sendAdapter(o, i)
                } while (0)
            }

            fireRetCallback(e, t) {
                do {
                    let n = e.s_rid;
                    if (null == n) break;
                    let i = this.retCallbackMap[n];
                    if (!i) break;
                    const r = i.callback;
                    if (!r) break;
                    e.success ? r(null, this.decodeParameter(e.data, t)) : r(e.error, e.data), delete this.retCallbackMap[n], s.information("free fireRetCallback", n)
                } while (0)
            }

            decodeParameter(e, t) {
                let n = e;
                do {
                    if (!e) break;
                    if ("object" != typeof e) break;
                    let r = e["__nodeipc_callback_id__{A9C9D760-14E8-42CB-A3CB-9C0A0DDFD732}"];
                    if (r) {
                        n = (...e) => i(this, void 0, void 0, (function* () {
                            return this.callClientFunctionByIdAw(t, r, ...e)
                        })), global.__xdasObjectLiftMonitor && global.__xdasObjectLiftMonitor.setObjectFreer(n, {
                            client: t,
                            callbackId: r
                        }, c);
                        break
                    }
                    for (let n in e) {
                        let i = e[n];
                        e[n] = this.decodeParameter(i, t)
                    }
                } while (0);
                return n
            }

            notifyFreer(e, t) {
                this.sendAdapter(e, {action: "client_context_freer", rid: t})
            }

            reply2Client(e, t) {
                do {
                    let n = e.s_rid;
                    if (null == n) break;
                    let i = this.retCallbackMap[n];
                    if (!i) break;
                    if (e.src === a.serverContextName) {
                        const n = i.callback;
                        if (!n) break;
                        e.success ? n(null, this.decodeParameter(e.data, t), t) : n(e.error, e.data, t)
                    } else {
                        let t = i.remote;
                        if (!t) break;
                        this.sendAdapter(t, e)
                    }
                    delete this.retCallbackMap[n]
                } while (0)
            }

            getNow() {
                return Date.now()
            }

            sendAdapter(e, t) {
                let n = this.getNow();
                t.timestamp = t.timestamp ? t.timestamp.concat(n) : [].concat(n), e.isInprocess() ? (s.information("send to client in process"), e.emit("message", t)) : e.send(t)
            }

            forwardEvent(e, t, n, ...i) {
                do {
                    if (!this.eventMap.hasOwnProperty(e)) break;
                    let r = this.eventMap[e];
                    for (let o of r) this.sendAdapter(o, {
                        action: "fire_event",
                        name: e,
                        args: i,
                        __context: t,
                        timestamp: n
                    })
                } while (0)
            }

            attachEvent(e, t) {
                {
                    this.eventMap[e] || (this.eventMap[e] = []);
                    let n = this.eventMap[e], i = !1;
                    for (let r of n) if (r === t) {
                        s.information("server attachEvent attached", e), i = !0;
                        break
                    }
                    i || (this.eventMap[e].push(t), s.information("server attachEvent ", e))
                }
            }

            detachEvent(e, t) {
                do {
                    if (!this.eventMap.hasOwnProperty(e)) break;
                    let n = this.eventMap[e];
                    for (let i = 0; i < n.length; i++) {
                        if (n[i] === t) {
                            this.eventMap[e].splice(i, 1), s.information("server detachEvent current eventMap", this.eventMap);
                            break
                        }
                    }
                } while (0)
            }

            generateId() {
                return this.rid++
            }

            getFullAlias(e) {
                return `${this.server.getProductId()}-${e}`.toLowerCase()
            }
        }

        let u = void 0;
        global.__xdasIPCServerInstance || (global.__xdasIPCServerInstance = new l), u = global.__xdasIPCServerInstance, t.server = u
    }, 1477: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        const i = n(67), r = n(285), o = n(96), a = n(697), s = n(477);

        class c extends o.EventEmitter {
            constructor() {
                super(), this.server = r.createServer(e => this.handleConnection(e)), this.productId = ""
            }

            getProductId() {
                return this.productId
            }

            listen(e, t) {
                let n = s.getSockPath(t);
                this.productId = t || s.getDefaultPrex(), i.existsSync(n) && i.unlinkSync(n), this.server.listen({
                    path: n,
                    readableAll: !0,
                    writableAll: !0
                }, e)
            }

            handleConnection(e) {
                const t = new a.Client({socket: e});
                t.on("message", e => {
                    this.handleRequest(e, t)
                }), t.on("end", () => {
                    this.emit("end", t)
                }), t.on("error", e => {
                    this.emit("error", t, e)
                }), this.emit("connect", t)
            }

            handleRequest(e, t) {
                this.emit("message", e, t)
            }
        }

        t.Server = c
    }, 1478: function (e, t, n) {
        "use strict";
        var i = n(1391);
        n.n(i).a
    }, 1479: function (e, t, n) {
        (t = n(89)(!1)).push([e.i, 'body,button,input,textarea{font-family:"microsoft yahei",-apple-system,"PingFang SC","simsun",Arial,sans-serif;font-size:12px;-webkit-font-smoothing:antialiased}body,dd,dl,form,h1,h2,h3,h4,h5,h6,p{margin:0}a:focus,div:focus,p:focus,span:focus{outline:none}button,input,ol,ul{margin:0;padding:0}ol,ul{list-style:none}a{text-decoration:none}', ""]), e.exports = t
    }, 1480: function (e, t, n) {
        "use strict";
        var i = n(1392);
        n.n(i).a
    }, 1481: function (e, t, n) {
        var i = n(89), r = n(126), o = n(1482);
        t = i(!1);
        var a = r(o);
        t.push([e.i, '.xmpc-loading{position:absolute;top:40px;left:0;right:0;bottom:65px;display:flex;flex-direction:column;justify-content:center;align-items:center}.xmpc-loading__back{color:#fff;text-align:center}.xmpc-loading__back .xmpc-button{margin-top:12px}.xmpc-loading__icon{position:relative;margin-bottom:12px;width:26px;height:26px;background-image:conic-gradient(transparent,transparent 25%,#68cbf8 45%,#68cbf8 50%,transparent 50%,transparent 75%,#68cbf8 95%);-webkit-mask:radial-gradient(transparent,transparent 9px,#000 10px);border-radius:50%;animation:rotate 1.5s linear infinite}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.xmpc-loading__icon:before{position:absolute;left:50%;margin-left:-2px;top:0;width:4px;height:4px;background:#68cbf8;border-radius:50%;box-shadow:0 22px 0 #68cbf8;content:""}.xmpc-loading__text{margin-bottom:3px;color:#fff;text-shadow:0 2px 4px rgba(0,0,0,.5)}.xmpc-loading__text span{display:inline-block;width:60px;white-space:nowrap}.xmpc-loading__vip{display:flex;align-items:center;margin-top:12px;padding:0 12px;height:40px;color:#6b4d2c;background:#fff8e4;border-radius:4px}.xmpc-loading__vip .td-button{margin-left:12px;width:72px;color:#462609;background-image:linear-gradient(90deg,#f1c86a,#fbd88a)}.xmpc-loading__vip .td-button:hover{background-image:linear-gradient(90deg,#f5d896 1%,#fce3ad)}.xmpc-loading__progress{position:relative;display:block;margin:12px auto 0;width:156px;height:2px;overflow:hidden;-webkit-mask:linear-gradient(90deg,#000 80%,transparent)}.xmpc-loading__progress:after{position:absolute;left:0;width:156px;height:2px;background:linear-gradient(90deg,transparent 0,#edd59f 40%,#edd59f 60%,transparent);animation:progress 1.1s linear infinite;content:""}@keyframes progress{0%{transform:scaleX(0);transform-origin:left center}50%{transform:scaleX(1)}to{transform:translateX(100%) scaleX(1)}}.xmpc-loading__fail{position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:center;top:40px;left:0;right:0;bottom:65px}.xmpc-loading__fail .td-button{margin-top:12px;width:120px;background:#727272}.xmpc-loading__fail-title{display:flex;align-items:center;margin-bottom:6px;font-size:13px;color:#fff}.xmpc-loading__fail-title i{margin-right:3px}.xmpc-loading__fail-detail{font-size:11px;color:#727272}.xmpc-loading.is-super .xmpc-loading__icon{width:48px;height:48px;margin-top:6px;background:url(' + a + ') no-repeat;background-size:1536px 48px;animation:ani 1.5s steps(31) infinite both;-webkit-mask:unset}.xmpc-loading.is-super .xmpc-loading__icon:before{display:none}@keyframes ani{0%{background-position:0 0}to{background-position:-1488px 0}}.xmpc-loading.is-super .xmpc-loading__text{color:#edd59f;text-shadow:unset}.xmpc-button{display:inline-flex;justify-content:center;align-items:center;width:122px;height:40px;font-size:13px;color:#fff;background:#3f85ff;border-radius:4px;border:0;cursor:pointer;transition:background .2s}.xmpc-button:focus{outline:none}.xmpc-button:hover{background:#2670ea}.xmpc-button--fail{margin-top:12px;width:120px;height:32px;background:#727272}.xmpc-button--fail:hover{background:#828282}.xmpc-button--small{margin-left:12px;width:72px;height:24px;color:#462609;background-image:linear-gradient(90deg,#f1c86a,#fbd88a)}.xmpc-button--small:hover{background-image:linear-gradient(90deg,#f5d896 1%,#fce3ad)}.xmpc-button--player{position:absolute;top:50%;left:50%;display:flex;justify-content:center;align-items:center;margin:-20px 0 0 -61px;width:122px;height:40px;font-size:14px;cursor:pointer;transition:background .2s;overflow:hidden}.xmpc-button--player.is-animation:before{animation:round .5s linear both}.xmpc-button--player.is-animation .xmpc-icon-play-detail{animation:iconMove .3s .4s both}.xmpc-button--player.is-animation span.text-1{animation:fadeIn .2s .7s both}.xmpc-button--player.is-animation span.text-2{animation:fadeIn .2s .75s both}.xmpc-button--player.is-animation span.text-3{animation:fadeIn .2s .8s both}.xmpc-button--player.is-animation span.text-4{animation:fadeIn .2s .85s both}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.xmpc-button--player.is-animation .line:after,.xmpc-button--player.is-animation .line:before{position:absolute;height:2px;background:#fff;content:""}.xmpc-button--player.is-animation .line:before{top:15px;left:43px;width:12px;animation:line1 .5s cubic-bezier(.23,1,.32,1) .4s both}@keyframes line1{0%{width:0;transform:translate3d(56px,0,0);opacity:1}60%{width:9px;opacity:.7}to{width:12px;opacity:0;transform:translateZ(0)}}.xmpc-button--player.is-animation .line:after{top:25px;left:72px;animation:line2 .5s cubic-bezier(.23,1,.32,1) .6s both}@keyframes line2{0%{width:0;transform:translate3d(45px,0,0);opacity:1}60%{width:7px;opacity:.3}to{width:10px;opacity:0;transform:translateZ(0)}}.xmpc-button--player:before{position:absolute;width:122px;height:122px;background:hsla(0,0%,100%,.1);content:"";border-radius:50%;transform:scale(0);pointer-events:none}@keyframes round{0%{transform:scale(0)}80%{transform:scale(1);opacity:1}to{transform:scale(2);opacity:0}}.xmpc-loading-down{display:flex;flex-direction:column;justify-content:center;align-items:center;color:#727272}.xmpc-loading-progress{display:flex;align-items:center;margin:12px 0 6px}.xmpc-loading-progress__outer{overflow:hidden;width:200px;height:5px;background:#4d4d4d}.xmpc-loading-progress__inner{position:relative;height:100%;background:#3f85ff}.xmpc-loading-progress__inner:before{position:absolute;right:0;width:28px;height:100%;background-image:linear-gradient(90deg,#3f85ff 0,#0cf);content:""}.xmpc-loading-progress__text{margin-left:3px;text-align:right;width:35px}.xmpc-icon-note-bold{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAKQ2lDQ1BJQ0MgcHJvZmlsZQAAeNqdU3dYk/cWPt/3ZQ9WQtjwsZdsgQAiI6wIyBBZohCSAGGEEBJAxYWIClYUFRGcSFXEgtUKSJ2I4qAouGdBiohai1VcOO4f3Ke1fXrv7e371/u855zn/M55zw+AERImkeaiagA5UoU8Otgfj09IxMm9gAIVSOAEIBDmy8JnBcUAAPADeXh+dLA//AGvbwACAHDVLiQSx+H/g7pQJlcAIJEA4CIS5wsBkFIAyC5UyBQAyBgAsFOzZAoAlAAAbHl8QiIAqg0A7PRJPgUA2KmT3BcA2KIcqQgAjQEAmShHJAJAuwBgVYFSLALAwgCgrEAiLgTArgGAWbYyRwKAvQUAdo5YkA9AYACAmUIszAAgOAIAQx4TzQMgTAOgMNK/4KlfcIW4SAEAwMuVzZdL0jMUuJXQGnfy8ODiIeLCbLFCYRcpEGYJ5CKcl5sjE0jnA0zODAAAGvnRwf44P5Dn5uTh5mbnbO/0xaL+a/BvIj4h8d/+vIwCBAAQTs/v2l/l5dYDcMcBsHW/a6lbANpWAGjf+V0z2wmgWgrQevmLeTj8QB6eoVDIPB0cCgsL7SViob0w44s+/zPhb+CLfvb8QB7+23rwAHGaQJmtwKOD/XFhbnauUo7nywRCMW735yP+x4V//Y4p0eI0sVwsFYrxWIm4UCJNx3m5UpFEIcmV4hLpfzLxH5b9CZN3DQCshk/ATrYHtctswH7uAQKLDljSdgBAfvMtjBoLkQAQZzQyefcAAJO/+Y9AKwEAzZek4wAAvOgYXKiUF0zGCAAARKCBKrBBBwzBFKzADpzBHbzAFwJhBkRADCTAPBBCBuSAHAqhGJZBGVTAOtgEtbADGqARmuEQtMExOA3n4BJcgetwFwZgGJ7CGLyGCQRByAgTYSE6iBFijtgizggXmY4EImFINJKApCDpiBRRIsXIcqQCqUJqkV1II/ItchQ5jVxA+pDbyCAyivyKvEcxlIGyUQPUAnVAuagfGorGoHPRdDQPXYCWomvRGrQePYC2oqfRS+h1dAB9io5jgNExDmaM2WFcjIdFYIlYGibHFmPlWDVWjzVjHVg3dhUbwJ5h7wgkAouAE+wIXoQQwmyCkJBHWExYQ6gl7CO0EroIVwmDhDHCJyKTqE+0JXoS+cR4YjqxkFhGrCbuIR4hniVeJw4TX5NIJA7JkuROCiElkDJJC0lrSNtILaRTpD7SEGmcTCbrkG3J3uQIsoCsIJeRt5APkE+S+8nD5LcUOsWI4kwJoiRSpJQSSjVlP+UEpZ8yQpmgqlHNqZ7UCKqIOp9aSW2gdlAvU4epEzR1miXNmxZDy6Qto9XQmmlnafdoL+l0ugndgx5Fl9CX0mvoB+nn6YP0dwwNhg2Dx0hiKBlrGXsZpxi3GS+ZTKYF05eZyFQw1zIbmWeYD5hvVVgq9ip8FZHKEpU6lVaVfpXnqlRVc1U/1XmqC1SrVQ+rXlZ9pkZVs1DjqQnUFqvVqR1Vu6k2rs5Sd1KPUM9RX6O+X/2C+mMNsoaFRqCGSKNUY7fGGY0hFsYyZfFYQtZyVgPrLGuYTWJbsvnsTHYF+xt2L3tMU0NzqmasZpFmneZxzQEOxrHg8DnZnErOIc4NznstAy0/LbHWaq1mrX6tN9p62r7aYu1y7Rbt69rvdXCdQJ0snfU6bTr3dQm6NrpRuoW623XP6j7TY+t56Qn1yvUO6d3RR/Vt9KP1F+rv1u/RHzcwNAg2kBlsMThj8MyQY+hrmGm40fCE4agRy2i6kcRoo9FJoye4Ju6HZ+M1eBc+ZqxvHGKsNN5l3Gs8YWJpMtukxKTF5L4pzZRrmma60bTTdMzMyCzcrNisyeyOOdWca55hvtm82/yNhaVFnMVKizaLx5balnzLBZZNlvesmFY+VnlW9VbXrEnWXOss623WV2xQG1ebDJs6m8u2qK2brcR2m23fFOIUjynSKfVTbtox7PzsCuya7AbtOfZh9iX2bfbPHcwcEh3WO3Q7fHJ0dcx2bHC866ThNMOpxKnD6VdnG2ehc53zNRemS5DLEpd2lxdTbaeKp26fesuV5RruutK10/Wjm7ub3K3ZbdTdzD3Ffav7TS6bG8ldwz3vQfTw91jicczjnaebp8LzkOcvXnZeWV77vR5Ps5wmntYwbcjbxFvgvct7YDo+PWX6zukDPsY+Ap96n4e+pr4i3z2+I37Wfpl+B/ye+zv6y/2P+L/hefIW8U4FYAHBAeUBvYEagbMDawMfBJkEpQc1BY0FuwYvDD4VQgwJDVkfcpNvwBfyG/ljM9xnLJrRFcoInRVaG/owzCZMHtYRjobPCN8Qfm+m+UzpzLYIiOBHbIi4H2kZmRf5fRQpKjKqLupRtFN0cXT3LNas5Fn7Z72O8Y+pjLk722q2cnZnrGpsUmxj7Ju4gLiquIF4h/hF8ZcSdBMkCe2J5MTYxD2J43MC52yaM5zkmlSWdGOu5dyiuRfm6c7Lnnc8WTVZkHw4hZgSl7I/5YMgQlAvGE/lp25NHRPyhJuFT0W+oo2iUbG3uEo8kuadVpX2ON07fUP6aIZPRnXGMwlPUit5kRmSuSPzTVZE1t6sz9lx2S05lJyUnKNSDWmWtCvXMLcot09mKyuTDeR55m3KG5OHyvfkI/lz89sVbIVM0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADJmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkRDMkY1OEMxMkFDMTFFQkE1QkZDMTM1MjEyM0Q1NTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkRDMkY1OEQxMkFDMTFFQkE1QkZDMTM1MjEyM0Q1NTkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2REMyRjU4QTEyQUMxMUVCQTVCRkMxMzUyMTIzRDU1OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2REMyRjU4QjEyQUMxMUVCQTVCRkMxMzUyMTIzRDU1OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pl5pPncAAAH1SURBVHja5Jc9T8JAGMfbotXBxdHogBGVycnFV5w0YExMnFxh1BU+EYtFjYl+A40kwCcA3HRyIJFFjLH+mxymefLc9a5UGXyS39Dr3XP/ttfnxfZ93xqnOdaYbcJgrg12wCHYAhkwK+71QBc8gjtwD/RebfAJInBAEXR8feuINU6U/6jNF0HDj28N4SOWgD3w6o9ugY9dUwH7YMA4C8YuwClIAxfMgKwY8xTrDnQFrII3xsk1yGicmWDOFbO+L3wrBaSYb/4JKhobUypiLT0TKZWAIqNctjk1mQhqJZkAm/nVaoon1BFgCR/0F7U5ATnm4CwkIGCeOZi54f1wKC6QGFUDzwlE2xfgkbEClws2yaSbBEM+9bXBCVgmk5oJCmiR65WfBBNKxwPghiZNizFpGmGSlcxc4usDTEWlY/ev64EeuTenkZ7DqIz66nECOmTSWoIPuk6u25yAOpl0HFVKEFRGfdW5guQ3A9G7LBBFhWIvAQEeE4odWTIqMY7LIwgomySjYTpuMun4PEY6PmPScSsqHVuiuukzyi8NCpKapCDJ6pZkeUVpVQUnoiSbFKTFWFWxLm9alOYlb8LU+rLNdcryrPhuca3FvXYTAeHGpGuwcVe3MbENmtMgam6DI1E7LJHW7Em0ZrfgAXxp9Xv/vjv+FmAArQfeIr3r2JUAAAAASUVORK5CYII=);background-size:100%}.xmpc-icon-note-bold,.xmpc-icon-play-detail{display:inline-block;margin-right:8px;width:16px;height:16px}.xmpc-icon-play-detail{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAKQ2lDQ1BJQ0MgcHJvZmlsZQAAeNqdU3dYk/cWPt/3ZQ9WQtjwsZdsgQAiI6wIyBBZohCSAGGEEBJAxYWIClYUFRGcSFXEgtUKSJ2I4qAouGdBiohai1VcOO4f3Ke1fXrv7e371/u855zn/M55zw+AERImkeaiagA5UoU8Otgfj09IxMm9gAIVSOAEIBDmy8JnBcUAAPADeXh+dLA//AGvbwACAHDVLiQSx+H/g7pQJlcAIJEA4CIS5wsBkFIAyC5UyBQAyBgAsFOzZAoAlAAAbHl8QiIAqg0A7PRJPgUA2KmT3BcA2KIcqQgAjQEAmShHJAJAuwBgVYFSLALAwgCgrEAiLgTArgGAWbYyRwKAvQUAdo5YkA9AYACAmUIszAAgOAIAQx4TzQMgTAOgMNK/4KlfcIW4SAEAwMuVzZdL0jMUuJXQGnfy8ODiIeLCbLFCYRcpEGYJ5CKcl5sjE0jnA0zODAAAGvnRwf44P5Dn5uTh5mbnbO/0xaL+a/BvIj4h8d/+vIwCBAAQTs/v2l/l5dYDcMcBsHW/a6lbANpWAGjf+V0z2wmgWgrQevmLeTj8QB6eoVDIPB0cCgsL7SViob0w44s+/zPhb+CLfvb8QB7+23rwAHGaQJmtwKOD/XFhbnauUo7nywRCMW735yP+x4V//Y4p0eI0sVwsFYrxWIm4UCJNx3m5UpFEIcmV4hLpfzLxH5b9CZN3DQCshk/ATrYHtctswH7uAQKLDljSdgBAfvMtjBoLkQAQZzQyefcAAJO/+Y9AKwEAzZek4wAAvOgYXKiUF0zGCAAARKCBKrBBBwzBFKzADpzBHbzAFwJhBkRADCTAPBBCBuSAHAqhGJZBGVTAOtgEtbADGqARmuEQtMExOA3n4BJcgetwFwZgGJ7CGLyGCQRByAgTYSE6iBFijtgizggXmY4EImFINJKApCDpiBRRIsXIcqQCqUJqkV1II/ItchQ5jVxA+pDbyCAyivyKvEcxlIGyUQPUAnVAuagfGorGoHPRdDQPXYCWomvRGrQePYC2oqfRS+h1dAB9io5jgNExDmaM2WFcjIdFYIlYGibHFmPlWDVWjzVjHVg3dhUbwJ5h7wgkAouAE+wIXoQQwmyCkJBHWExYQ6gl7CO0EroIVwmDhDHCJyKTqE+0JXoS+cR4YjqxkFhGrCbuIR4hniVeJw4TX5NIJA7JkuROCiElkDJJC0lrSNtILaRTpD7SEGmcTCbrkG3J3uQIsoCsIJeRt5APkE+S+8nD5LcUOsWI4kwJoiRSpJQSSjVlP+UEpZ8yQpmgqlHNqZ7UCKqIOp9aSW2gdlAvU4epEzR1miXNmxZDy6Qto9XQmmlnafdoL+l0ugndgx5Fl9CX0mvoB+nn6YP0dwwNhg2Dx0hiKBlrGXsZpxi3GS+ZTKYF05eZyFQw1zIbmWeYD5hvVVgq9ip8FZHKEpU6lVaVfpXnqlRVc1U/1XmqC1SrVQ+rXlZ9pkZVs1DjqQnUFqvVqR1Vu6k2rs5Sd1KPUM9RX6O+X/2C+mMNsoaFRqCGSKNUY7fGGY0hFsYyZfFYQtZyVgPrLGuYTWJbsvnsTHYF+xt2L3tMU0NzqmasZpFmneZxzQEOxrHg8DnZnErOIc4NznstAy0/LbHWaq1mrX6tN9p62r7aYu1y7Rbt69rvdXCdQJ0snfU6bTr3dQm6NrpRuoW623XP6j7TY+t56Qn1yvUO6d3RR/Vt9KP1F+rv1u/RHzcwNAg2kBlsMThj8MyQY+hrmGm40fCE4agRy2i6kcRoo9FJoye4Ju6HZ+M1eBc+ZqxvHGKsNN5l3Gs8YWJpMtukxKTF5L4pzZRrmma60bTTdMzMyCzcrNisyeyOOdWca55hvtm82/yNhaVFnMVKizaLx5balnzLBZZNlvesmFY+VnlW9VbXrEnWXOss623WV2xQG1ebDJs6m8u2qK2brcR2m23fFOIUjynSKfVTbtox7PzsCuya7AbtOfZh9iX2bfbPHcwcEh3WO3Q7fHJ0dcx2bHC866ThNMOpxKnD6VdnG2ehc53zNRemS5DLEpd2lxdTbaeKp26fesuV5RruutK10/Wjm7ub3K3ZbdTdzD3Ffav7TS6bG8ldwz3vQfTw91jicczjnaebp8LzkOcvXnZeWV77vR5Ps5wmntYwbcjbxFvgvct7YDo+PWX6zukDPsY+Ap96n4e+pr4i3z2+I37Wfpl+B/ye+zv6y/2P+L/hefIW8U4FYAHBAeUBvYEagbMDawMfBJkEpQc1BY0FuwYvDD4VQgwJDVkfcpNvwBfyG/ljM9xnLJrRFcoInRVaG/owzCZMHtYRjobPCN8Qfm+m+UzpzLYIiOBHbIi4H2kZmRf5fRQpKjKqLupRtFN0cXT3LNas5Fn7Z72O8Y+pjLk722q2cnZnrGpsUmxj7Ju4gLiquIF4h/hF8ZcSdBMkCe2J5MTYxD2J43MC52yaM5zkmlSWdGOu5dyiuRfm6c7Lnnc8WTVZkHw4hZgSl7I/5YMgQlAvGE/lp25NHRPyhJuFT0W+oo2iUbG3uEo8kuadVpX2ON07fUP6aIZPRnXGMwlPUit5kRmSuSPzTVZE1t6sz9lx2S05lJyUnKNSDWmWtCvXMLcot09mKyuTDeR55m3KG5OHyvfkI/lz89sVbIVM0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADJmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUNCNDUwOEExMkE1MTFFQkJDRkFEMzg5NkU1MjBCMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUNCNDUwOEIxMkE1MTFFQkJDRkFEMzg5NkU1MjBCMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQ0I0NTA4ODEyQTUxMUVCQkNGQUQzODk2RTUyMEIyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQ0I0NTA4OTEyQTUxMUVCQkNGQUQzODk2RTUyMEIyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpadLJcAAAGLSURBVHja5JcxKEVRGMfvfV1EEqUsUsogZXiDVUaml/EtClkYLUo2kyiL8U1KWYxMWJRNGSxPksgiKeQlecf/1HfKcM93Lr7v3cG/fm85773z797z/b/vxMaYKE8VopzFGYjBArgGNXACJsQd2FfgYcmkax8MML/7EdzinfHrHayBdk0DWXQPpkCclwGnUzCibWCONvLpE1RAj5aBYVAAM/TofXoCi6BJw4Bb6wTrdBh9ugDjWgYcQ+AgcD72uLL9qwHHJLhkTNTAalrZShmwtIJl8MIYuQXl72UracDRB3ZAnTFyCLq0DDjGwBljYlvbgCUB8+Ah5f+e7Xe023GdWXu1H4ni5qNgExQ965VQO/7tK+gNHMIPsAGapc9AS4YyPKLwEs+BUiCIbiisxJNwMBDFb2CFQko0ijsyNKNdCiXRZmQjdDrQjs8phMTngdnAQPJIoZM0eiSzZbUFuvOYCY9BUWsqvgqUVVn7XlDylJUdLNoacTGJaACtUuey7bNfamNH/O9vx18CDAC8/HauLFf5lQAAAABJRU5ErkJggg==);background-size:100%}@keyframes iconMove{0%{transform:translate3d(35px,0,0)}to{transform:translateZ(0)}}.xmpc-icon-arrow{margin-right:6px;width:16px;height:16px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAKQ2lDQ1BJQ0MgcHJvZmlsZQAAeNqdU3dYk/cWPt/3ZQ9WQtjwsZdsgQAiI6wIyBBZohCSAGGEEBJAxYWIClYUFRGcSFXEgtUKSJ2I4qAouGdBiohai1VcOO4f3Ke1fXrv7e371/u855zn/M55zw+AERImkeaiagA5UoU8Otgfj09IxMm9gAIVSOAEIBDmy8JnBcUAAPADeXh+dLA//AGvbwACAHDVLiQSx+H/g7pQJlcAIJEA4CIS5wsBkFIAyC5UyBQAyBgAsFOzZAoAlAAAbHl8QiIAqg0A7PRJPgUA2KmT3BcA2KIcqQgAjQEAmShHJAJAuwBgVYFSLALAwgCgrEAiLgTArgGAWbYyRwKAvQUAdo5YkA9AYACAmUIszAAgOAIAQx4TzQMgTAOgMNK/4KlfcIW4SAEAwMuVzZdL0jMUuJXQGnfy8ODiIeLCbLFCYRcpEGYJ5CKcl5sjE0jnA0zODAAAGvnRwf44P5Dn5uTh5mbnbO/0xaL+a/BvIj4h8d/+vIwCBAAQTs/v2l/l5dYDcMcBsHW/a6lbANpWAGjf+V0z2wmgWgrQevmLeTj8QB6eoVDIPB0cCgsL7SViob0w44s+/zPhb+CLfvb8QB7+23rwAHGaQJmtwKOD/XFhbnauUo7nywRCMW735yP+x4V//Y4p0eI0sVwsFYrxWIm4UCJNx3m5UpFEIcmV4hLpfzLxH5b9CZN3DQCshk/ATrYHtctswH7uAQKLDljSdgBAfvMtjBoLkQAQZzQyefcAAJO/+Y9AKwEAzZek4wAAvOgYXKiUF0zGCAAARKCBKrBBBwzBFKzADpzBHbzAFwJhBkRADCTAPBBCBuSAHAqhGJZBGVTAOtgEtbADGqARmuEQtMExOA3n4BJcgetwFwZgGJ7CGLyGCQRByAgTYSE6iBFijtgizggXmY4EImFINJKApCDpiBRRIsXIcqQCqUJqkV1II/ItchQ5jVxA+pDbyCAyivyKvEcxlIGyUQPUAnVAuagfGorGoHPRdDQPXYCWomvRGrQePYC2oqfRS+h1dAB9io5jgNExDmaM2WFcjIdFYIlYGibHFmPlWDVWjzVjHVg3dhUbwJ5h7wgkAouAE+wIXoQQwmyCkJBHWExYQ6gl7CO0EroIVwmDhDHCJyKTqE+0JXoS+cR4YjqxkFhGrCbuIR4hniVeJw4TX5NIJA7JkuROCiElkDJJC0lrSNtILaRTpD7SEGmcTCbrkG3J3uQIsoCsIJeRt5APkE+S+8nD5LcUOsWI4kwJoiRSpJQSSjVlP+UEpZ8yQpmgqlHNqZ7UCKqIOp9aSW2gdlAvU4epEzR1miXNmxZDy6Qto9XQmmlnafdoL+l0ugndgx5Fl9CX0mvoB+nn6YP0dwwNhg2Dx0hiKBlrGXsZpxi3GS+ZTKYF05eZyFQw1zIbmWeYD5hvVVgq9ip8FZHKEpU6lVaVfpXnqlRVc1U/1XmqC1SrVQ+rXlZ9pkZVs1DjqQnUFqvVqR1Vu6k2rs5Sd1KPUM9RX6O+X/2C+mMNsoaFRqCGSKNUY7fGGY0hFsYyZfFYQtZyVgPrLGuYTWJbsvnsTHYF+xt2L3tMU0NzqmasZpFmneZxzQEOxrHg8DnZnErOIc4NznstAy0/LbHWaq1mrX6tN9p62r7aYu1y7Rbt69rvdXCdQJ0snfU6bTr3dQm6NrpRuoW623XP6j7TY+t56Qn1yvUO6d3RR/Vt9KP1F+rv1u/RHzcwNAg2kBlsMThj8MyQY+hrmGm40fCE4agRy2i6kcRoo9FJoye4Ju6HZ+M1eBc+ZqxvHGKsNN5l3Gs8YWJpMtukxKTF5L4pzZRrmma60bTTdMzMyCzcrNisyeyOOdWca55hvtm82/yNhaVFnMVKizaLx5balnzLBZZNlvesmFY+VnlW9VbXrEnWXOss623WV2xQG1ebDJs6m8u2qK2brcR2m23fFOIUjynSKfVTbtox7PzsCuya7AbtOfZh9iX2bfbPHcwcEh3WO3Q7fHJ0dcx2bHC866ThNMOpxKnD6VdnG2ehc53zNRemS5DLEpd2lxdTbaeKp26fesuV5RruutK10/Wjm7ub3K3ZbdTdzD3Ffav7TS6bG8ldwz3vQfTw91jicczjnaebp8LzkOcvXnZeWV77vR5Ps5wmntYwbcjbxFvgvct7YDo+PWX6zukDPsY+Ap96n4e+pr4i3z2+I37Wfpl+B/ye+zv6y/2P+L/hefIW8U4FYAHBAeUBvYEagbMDawMfBJkEpQc1BY0FuwYvDD4VQgwJDVkfcpNvwBfyG/ljM9xnLJrRFcoInRVaG/owzCZMHtYRjobPCN8Qfm+m+UzpzLYIiOBHbIi4H2kZmRf5fRQpKjKqLupRtFN0cXT3LNas5Fn7Z72O8Y+pjLk722q2cnZnrGpsUmxj7Ju4gLiquIF4h/hF8ZcSdBMkCe2J5MTYxD2J43MC52yaM5zkmlSWdGOu5dyiuRfm6c7Lnnc8WTVZkHw4hZgSl7I/5YMgQlAvGE/lp25NHRPyhJuFT0W+oo2iUbG3uEo8kuadVpX2ON07fUP6aIZPRnXGMwlPUit5kRmSuSPzTVZE1t6sz9lx2S05lJyUnKNSDWmWtCvXMLcot09mKyuTDeR55m3KG5OHyvfkI/lz89sVbIVM0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADJmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDM0RTFCQ0ExMkFGMTFFQjg4NkJCMzc3MThENDM1N0EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDM0RTFCQ0IxMkFGMTFFQjg4NkJCMzc3MThENDM1N0EiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMzRFMUJDODEyQUYxMUVCODg2QkIzNzcxOEQ0MzU3QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMzRFMUJDOTEyQUYxMUVCODg2QkIzNzcxOEQ0MzU3QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph1OALsAAAHBSURBVHja7Je7S8RAEMYTUXyigq/GXoyFoKeF5yNieWARS0v/M60sVCxsffZqpdhY2XinIpyeSg7Xb3CCYU02ySa5Q3Dgx5FkH3OZb2cmphDCaKa1GE22P+NACTi5eEAaiGACuOLbZmOMT0SczSvix2qglKUDqhBY4AgM+u51gtUsI2CGHMNxcAyGpftXYB24NFdDb3VwC95VDoyBMzAUsMgz//bp/FnwCubBpXezNUDte6AtZJH+lG+8Wz55sgbaFZtnFnb/hfwGdsEUOAU9AZMfOX4DmhvXWAeRIiQnTgKcIBGugRcNEdL4T3DPIo5MRAVQFb9tq5GJaEZygpKS3UgHDE6/ZHVgxVy4CFaycsDgxYoxx1rsbKzaYWRcXGypdlQ5jFq1QMc2pNpBp+gQFOLWAkpCI5ygkvZqgjfc4ULmNzq2S+A8yoFJroBdGg54iaojJFGRE4vgQtWQTIv8zclTA1FGGfBDVQvo4V2KEDxx0zIa8KwCFsCNSgPkUG8KEdK8fTAnPSsDG1zrNKVJ2AyIeVmVQbPWwDZ4810/gGWuotpteVK82uFyV60cb+b0beiwoA90u+L/b8OG2ZcAAwCuA0mI3c019wAAAABJRU5ErkJggg==);background-size:100%}', ""]), e.exports = t
    }, 1482: function (e, t, n) {
        e.exports = n.p + "img/icon-loading-vip.6437864.png"
    }, 1483: function (e, t, n) {
        "use strict";
        var i = n(1393);
        n.n(i).a
    }, 1484: function (e, t, n) {
        (t = n(89)(!1)).push([e.i, ".drive-content{width:auto;height:100vh}.xly-down__main{height:100vh}", ""]), e.exports = t
    }, 1485: function (e, t, n) {
        "use strict";
        var i = n(1394);
        n.n(i).a
    }, 1486: function (e, t, n) {
        var i = n(89), r = n(126), o = n(1487), a = n(698), s = n(1488);
        t = i(!1);
        var c = r(o), l = r(a), u = r(s);
        t.push([e.i, ".xly-netdisk-detail{margin:12px 4px 12px 12px;padding:1px 10px 10px;height:calc(100% - 24px);background:var(--background-area);box-sizing:border-box;border-radius:4px;overflow:hidden}.xly-netdisk-detail__text{margin:48px 0 38px;font-size:13px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.xly-netdisk-detail__button{position:relative;display:flex;justify-content:center}.xly-netdisk-detail__button .td-button{display:flex;justify-content:center;align-items:center;padding:0 12px;margin:0 6px;width:auto;line-height:23px;min-width:76px}.xly-netdisk-detail__button .td-button i{margin-right:6px}.xly-netdisk-detail__button .td-button.td-button--other i{color:var(--color-icon)}.xly-netdisk-detail__button .td-button.td-button--other:hover i{color:var(--color-primary)}.xly-netdisk-detail__button .td-button:hover i{color:#fff}.xly-netdisk-detail__more{position:relative;margin:0 6px}.xly-netdisk-detail__more .td-button{margin:0}.xly-netdisk-detail__more:hover .xly-more-drop{display:block}.xly-netdisk-detail__empty{margin:64px 0 40px;display:flex;flex-direction:column;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.xly-netdisk-detail__empty p{margin-top:20px;color:var(--color-secondary)}.xly-netdisk-detail.is-safe{background-image:url(" + c + ");background-position:right -45px bottom -65px;background-size:221px auto;background-repeat:no-repeat}.xly-netdisk-preview .xly-preview{margin-bottom:24px}.xly-netdisk-preview__title{position:relative;top:-1px;line-height:42px}.xly-netdisk-preview__title p{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.xly-netdisk-preview__content{height:46.39vh;background:url(" + l + ") no-repeat;background-size:cover}.xly-netdisk-preview .xly-preview{height:46.39vh}.xly-netdisk-file{position:relative;margin:114px 38px 0;height:90px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.xly-netdisk-file .td-media{position:absolute;display:flex;align-items:center;width:100%;height:90px;padding:16px 12px;background:var(--background-module);box-shadow:0 0 10px 0 var(--color-shadow);box-sizing:border-box;transform-origin:center top;transition:.5s}.xly-netdisk-file .td-media.is-first{width:calc(100% - 20px);margin:0 10px;transform:translate3d(0,-8px,0)}.xly-netdisk-file .td-media.is-secondary{width:calc(100% - 40px);margin:0 20px;transform:translate3d(0,-16px,0)}.xly-netdisk-file .td-media.is-show{animation:ani-show-file .5s both}@keyframes ani-show-file{0%{transform:translate3d(-100px,30px,0);opacity:0}to{transform:translateZ(0);opacity:1}}.xly-file-name{line-height:18px;-webkit-line-clamp:2;display:-webkit-box;word-break:break-all;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}.xly-file-info{display:flex;margin-top:6px;color:var(--color-secondary)}.xly-file-info p{margin-right:18px}.xly-safe{padding-top:74px;text-align:center}.xly-safe__img{margin:0 auto;width:422px;height:250px;background:url(" + u + ") no-repeat;background-size:100% auto}.xly-safe h2{margin:62px 0 8px;font-size:20px;color:var(--color-title)}.xly-safe p{color:var(--color-secondary)}.xly-safe .td-button{margin:30px auto 8px;width:158px;height:40px;color:#f1c37b;background:#3d3838}", ""]), e.exports = t
    }, 1487: function (e, t, n) {
        e.exports = n.p + "img/bg-safe.9815e56.png"
    }, 1488: function (e, t, n) {
        e.exports = n.p + "img/safe.2c2e15c.png"
    }, 1489: function (e, t, n) {
        e.exports = n.p + "img/vip-500.2de5c9f.png"
    }, 1490: function (e, t, n) {
        e.exports = n.p + "img/vip-upload.0581480.png"
    }, 1491: function (e, t, n) {
        e.exports = n.p + "img/vip-120g.cd4e679.png"
    }, 1492: function (e, t, n) {
        e.exports = n.p + "img/vip-120g-super.00dce54.png"
    }, 1493: function (e, t, n) {
        var i = n(1494);
        "string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        (0, n(90).default)("3f8fad77", i, !0, {sourceMap: !1})
    }, 1494: function (e, t, n) {
        (t = n(89)(!1)).push([e.i, "body .xly-dialog-vip{width:420px}body .xly-dialog-vip .td-dialog__body{min-height:196px}.xly-dialog-vip__image{margin:18px auto 0;width:140px;height:100px}.xly-dialog-vip__image img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.xly-dialog-vip__banner{margin:18px auto 0;width:298px;height:108px}.xly-dialog-vip__banner img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.xly-dialog-vip__text{margin-top:20px;text-align:center;font-size:16px}.xly-dialog-vip__note{margin-top:8px;font-size:12px;color:var(--color-auxiliary)}.xly-dialog-vip__tips{margin:18px 0 -15px;color:#d69a57;line-height:20px;font-size:12px;text-align:center}body .xly-dialog-vip .td-button{color:#4d4d4d;font-size:14px;background-image:linear-gradient(90deg,#f5d7a2 11%,#f1c880 95%);border-radius:4px}body .xly-dialog-vip .td-button.xly-button--super{color:#ffe7a9;background-image:linear-gradient(270deg,#1c1815 2%,#2e2a27 98%)}", ""]), e.exports = t
    }, 1495: function (e, t, n) {
        var i = n(89), r = n(126), o = n(688);
        t = i(!1);
        var a = r(o);
        t.push([e.i, '.xly-netdisk-side{width:380px;position:relative;display:flex;flex-direction:column;height:100%;background:var(--background-area);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.xly-netdisk-side:hover .xly-netdisk-list__header{background:linear-gradient(270deg,#fff,var(--color-item-active) 97%)}.xly-netdisk-side:hover .is-active .xly-netdisk-list__header{background:unset}.xly-netdisk-side .td-breadcrumb{width:100%}.xly-netdisk-side .td-tooltip-wrapper{margin-left:4px}.xly-netdisk-side .td-breadcrumb .td-icon-arrow-drop:before{font-family:"thunder-icon"!important;content:"\\e75f"}.xly-netdisk-side i.xly-icon-help{color:var(--color-note);vertical-align:-1px}.xly-netdisk-side__footer{display:flex;justify-content:space-between;align-items:center;padding:0 0 0 12px;width:100%;height:40px;box-sizing:border-box}.xly-netdisk-side__footer .xly-line{margin:0 0 0 20px;height:34px}.xly-netdisk-list{flex:1;overflow:hidden}.xly-netdisk-list .td-collapse{height:100%}.xly-netdisk-list .td-collapse-item{display:flex;flex-direction:column;margin-top:0;height:35px;border:unset;transition:.3s}.xly-netdisk-list .td-collapse-item .td-collapse-item__content{position:relative}.xly-netdisk-list .td-collapse-item .td-breadcrumb__separator{line-height:16px}.xly-netdisk-list .td-collapse-item.is-active{height:100%}.xly-netdisk-list .td-collapse-item.is-active .td-collapse-item__title{color:var(--color-title)}.xly-netdisk-list .td-collapse-item.is-active .td-collapse-item__content{display:flex;flex-direction:column;padding:0;flex:1}.xly-netdisk-list .td-collapse-item.xly-netdisk-item--recycle{height:30px}.xly-netdisk-list .td-collapse-item.xly-netdisk-item--recycle .xly-netdisk-list__header{height:30px;border-bottom:0}.xly-netdisk-list .td-collapse-item.xly-netdisk-item--recycle .xly-netdisk-list__header:hover{color:var(--color-primary)}.xly-netdisk-list .td-collapse-item.xly-netdisk-item--recycle .td-collapse-item__title{color:var(--color-auxiliary)}.xly-netdisk-list .td-collapse-item.xly-netdisk-item--recycle .td-collapse-item__title:hover{color:var(--color-primary)}.xly-netdisk-list .td-collapse-item.xly-netdisk-item--recycle.is-active{height:calc(100% - 35px)}.xly-netdisk-list .td-collapse-item.xly-netdisk-item--recycle.is-active .td-collapse-item__title{color:var(--color-primary);background-image:linear-gradient(270deg,#fff,var(--color-item-active) 97%)}.xly-netdisk-list .td-collapse-item.xly-netdisk-item--recycle.is-active .td-button{display:block}.xly-netdisk-list .td-collapse-item.xly-netdisk-item--recycle .xly-netdisk-list__name a{cursor:default}.xly-netdisk-list .td-collapse-item.xly-netdisk-item--recycle .xly-netdisk-list__name a:hover{color:var(--color-default)}.xly-netdisk-list .td-collapse-item__content{transition:none}.xly-netdisk-list .td-checkbox{position:relative}.xly-netdisk-list .td-checkbox .td-checkbox__inner:after{position:absolute;left:50%;top:50%;width:42px;height:62px;transform:translate3d(-50%,-50%,0);content:""}.xly-netdisk-list .td-tooltip.is-top{bottom:calc(100% + 4px)}.xly-netdisk-list .td-tooltip.is-bottom,.xly-netdisk-list .td-tooltip.is-top{left:50%;white-space:pre-wrap;color:var(--color-default);transform:translate(-50%)}.xly-netdisk-list .td-tooltip.is-bottom{top:calc(100% + 4px)}.xly-netdisk-list .td-tooltip .td-poper__arrow{display:none}.xly-netdisk-list i.xly-icon-note{color:var(--color-danger)}.xly-netdisk-list__header{padding:0 12px;display:flex;justify-content:space-between;align-items:center;height:40px;color:var(--color-auxiliary);border-bottom:1px solid var(--color-border)}.xly-netdisk-list__header .td-button{display:none;width:76px;height:20px;line-height:20px;font-size:12px;text-align:center;color:var(--color-primary);background:var(--color-item-active);border-radius:2px}.xly-netdisk-list__header .td-button.is-disabled{color:var(--button-disable-color);background:var(--button-disable-fill)}.xly-netdisk-list__header .td-breadcrumb__item{height:35px}.xly-netdisk-list__header .td-breadcrumb__separator .td-icon-arrow-right{position:relative;vertical-align:0}.xly-netdisk-list__header .td-breadcrumb__text a{color:var(--color-title)}.xly-netdisk-list__header .td-breadcrumb__text a:hover{color:var(--color-primary)}.xly-netdisk-list__header .td-select__drop{color:var(--color-title)}.xly-netdisk-list__header .td-dropdown-menu{padding:6px 0}.xly-netdisk-list__header .td-dropdown-menu__item{padding:0 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.xly-netdisk-list__header .td-select{background:unset}.xly-netdisk-list__header:hover{background:linear-gradient(270deg,#fff,var(--color-item-active) 97%)}.xly-netdisk-list__header:hover .xly-netdisk-list__text{color:var(--color-primary)}.xly-netdisk-list__items{flex:1;overflow-y:auto;overflow-x:hidden}.xly-netdisk-list__items::-webkit-scrollbar{width:8px;background:transparent}.xly-netdisk-list__items::-webkit-scrollbar:horizontal{height:8px}.xly-netdisk-list__items::-webkit-scrollbar-thumb{border-radius:2px;width:6px;background:var(--color-scrollbar)}.xly-netdisk-list__items::-webkit-scrollbar-thumb:hover{background:var(--color-scrollbar-hover)}.xly-netdisk-list__items::-webkit-scrollbar-corner{background:transparent}.xly-netdisk-list__item{display:flex;padding:12px 17px;border:1px solid transparent;border-bottom:1px solid var(--background-area);box-sizing:border-box;cursor:default}.xly-netdisk-list__item:hover{background:var(--color-item-hover)}.xly-netdisk-list__item .td-checkbox{height:36px}.xly-netdisk-list__item .td-checkbox__label{display:none}.xly-netdisk-list__item .td-media{position:relative;margin-left:13px;width:298px}.xly-netdisk-list__item .td-progress{margin-top:3px}.xly-netdisk-list__item .td-progress-bar{height:4px}.xly-netdisk-list__item .td-progress-bar__inner{position:relative;background:var(--color-primary);overflow:hidden;transition:width .2s}.xly-netdisk-list__item .td-progress-bar__inner:before{position:absolute;right:0;width:28px;height:100%;background-image:linear-gradient(90deg,#3f85ff 0,var(--color-light));content:""}.xly-netdisk-list__item .td-media__content{width:calc(100% - 56px)}.xly-netdisk-list__item.is-chosen{background:var(--color-item-active)}.xly-netdisk-list__item.is-disabled .xly-icon-type,.xly-netdisk-list__item.is-disabled .xly-netdisk-list__name{opacity:.5}.xly-netdisk-list__item.is-disabled .xly-netdisk-list__name span:hover{color:var(--color-default)}.xly-netdisk-list__item.is-active{background:var(--color-item-active);border:1px solid var(--color-primary)}.xly-netdisk-list__item.is-super .td-progress-bar__inner{background-color:#e7bc77}.xly-netdisk-list__item.is-super .td-progress-bar__inner:before{background-image:linear-gradient(90deg,#e7bc77 1%,#ffe3a6 60%,#e7bc77)}.xly-netdisk-list__item.is-super .xly-netdisk-list__status{color:#f1c37b}.xly-netdisk-list__item.is-super .xly-netdisk-list__status i{color:#e2ad6d;vertical-align:-2px}.xly-netdisk-list__name{position:relative;max-height:36px;line-height:18px;font-size:13px;-webkit-line-clamp:2;display:-webkit-box;word-break:break-all;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}.xly-netdisk-list__name span{color:var(--color-default)}.xly-netdisk-list__info{position:relative;display:flex;align-items:center;height:15px;margin-top:4px;color:var(--color-secondary);font-size:11px}.xly-netdisk-list__count{margin-right:16px;width:60px}.xly-netdisk-list__title{display:flex;align-items:center;padding:0 18px;height:30px;color:var(--color-secondary)}.xly-netdisk-list__title .td-checkbox__label{margin-left:13px}.xly-netdisk-list__operate{position:absolute;right:16px}.xly-netdisk-list__operate a{color:var(--color-icon)}.xly-netdisk-list__operate a:hover{color:var(--color-primary)}.xly-netdisk-list__operate a.is-disabled{color:var(--color-secondary);cursor:default}.xly-netdisk-list__effective{position:absolute;right:0}.xly-netdisk-list__empty{display:flex;justify-content:center;align-items:center;flex-direction:column;flex:1;padding-bottom:50px}.xly-netdisk-list__empty p{margin-top:20px;color:var(--color-secondary)}.xly-netdisk-list__input{position:relative;top:-2px;margin:8px 0 -3px}.xly-netdisk-list__input .td-input__inner{height:26px}.xly-netdisk-list__status{position:absolute;right:0;display:flex;align-items:center}.xly-netdisk-list__status .td-tooltip.is-top{left:auto;right:0;transform:unset}.xly-netdisk-list__status.is-warn{color:var(--color-danger)}.xly-netdisk-list span.xly-netdisk-list__tag{display:inline-block;width:28px;height:12px;line-height:11px;text-align:center;color:#fff;font-size:10px;vertical-align:1px;background:var(--color-danger);border-radius:6px}.xly-safe-space{display:flex;justify-content:space-between;align-items:center;padding:0 12px;margin:0 12px;height:38px;background:rgba(220,172,124,.12);border-radius:4px;box-sizing:border-box;--progress-height:3px}.xly-safe-space .td-button{width:72px;color:#7d523a;background:#ffdc8f}.xly-safe-space .td-button:hover{color:#7d523a;background:#ffd476}.xly-safe-space__main{margin:0 10px;flex:1;font-size:11px}.xly-safe-space__text{margin-bottom:2px;opacity:.8}.xly-safe-space .td-progress-bar__outer{background:#f4e3ce}.xly-safe-space .td-progress-bar__inner{background:#e8b35e}.xly-icon-safe{width:16px;height:16px;background:url(' + a + ') no-repeat;background-size:100%}.xly-netdisk-size{width:280px;font-size:11px}.xly-netdisk-size__text{margin-bottom:1px;display:flex;justify-content:space-between;color:var(--color-secondary)}.xly-netdisk-size__link{color:var(--color-primary)}.xly-netdisk-size__link:hover{color:var(--color-hover)}.xly-netdisk-size .td-progress{height:5px}.xly-netdisk-size .td-progress .td-progress-bar{height:100%}.xly-netdisk-size .td-progress .td-progress-bar__outer{background:var(--color-border)}.xly-netdisk-size .td-progress .td-progress-bar__inner{width:0}.xly-netdisk-size.is-warn .td-progress-bar__inner{background:var(--color-danger)}.xly-netdisk-size.is-warn .xly-netdisk-size__warn{color:var(--color-danger)}.xly-netdisk-operate{display:flex;align-items:center}.xly-netdisk-operate a{position:relative;margin:0 12px 0 0;color:var(--color-icon)}.xly-netdisk-operate a:hover{color:var(--color-primary)}.xly-netdisk-operate a:hover .xly-tips{display:block}.xly-netdisk-operate .td-badge__content{top:6px;right:10px;padding:0 4px;font-size:10px;height:12px;line-height:12px;background-color:var(--color-danger)}.xly-netdisk-operate .xly-icon-transport-down,.xly-netdisk-operate .xly-icon-transport-up{position:absolute;top:0;left:7px;font-size:11px;pointer-events:none}.xly-netdisk-operate .xly-icon-transport-down{left:8px}.xly-netdisk-move{position:fixed;padding:0 12px;line-height:30px;color:var(--color-primary);background:var(--background-module);border-radius:4px;box-shadow:0 0 10px var(--color-shadow);z-index:2}.xly-netdisk-move .xly-netdisk-move__file{display:inline-block;margin-left:4px;max-width:7em;color:var(--color-default);vertical-align:top;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.xly-drop-more{position:fixed;padding:6px 0;width:100px;background:var(--background-module);border-radius:4px;box-shadow:0 0 10px 0 var(--color-shadow)}.xly-drop-more__item{position:relative;padding-left:28px;line-height:30px;cursor:default}.xly-drop-more__item:hover{background:var(--color-list-hover)}.xly-drop-more__item.is-chosen:before{position:absolute;top:50%;margin-top:-3px;left:9px;width:6px;height:3px;border-left:2px solid var(--color-primary);border-bottom:2px solid var(--color-primary);transform:rotate(-45deg) scale(1);content:""}.xly-netdisk-wrapper{display:flex;flex-direction:column;flex:1;height:100%}.xly-right-click{position:fixed;padding:6px 0;width:100px;background:var(--background-module);border-radius:4px;box-shadow:0 0 10px 0 var(--color-shadow);z-index:99;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.xly-right-click__item{position:relative;padding-left:24px;line-height:30px;cursor:default}.xly-right-click__item i.xly-icon-arrow-right{position:absolute;top:1px;right:12px;color:var(--color-secondary);font-size:12px}.xly-right-click__item:hover{background:var(--color-list-hover)}.xly-right-click__item.is-chosen:before{position:absolute;top:50%;margin-top:-3px;left:9px;width:6px;height:3px;border-left:2px solid var(--color-primary);border-bottom:2px solid var(--color-primary);transform:rotate(-45deg) scale(1);content:""}.xly-right-click__children{position:absolute;top:0;left:100%;padding:6px 0;width:100px;background:var(--background-module);border-radius:4px;box-shadow:0 0 10px 0 rgba(0,0,0,.2)}.xly-right-click__children:before{position:absolute;left:-5px;width:5px;height:100%;content:""}.xly-right-click.is-upload{width:72px}.xly-right-click.is-finish{width:120px}.xly-side-operate{position:absolute;top:-5px;right:-22px;display:flex;justify-content:center;align-items:center;width:16px;height:29px}.xly-side-operate a{color:var(--color-icon)}.xly-side-operate a:hover{color:var(--color-primary)}', ""]), e.exports = t
    }, 1496: function (e, t, n) {
        (t = n(89)(!1)).push([e.i, ".xly-netdisk-note{position:relative;display:flex;justify-content:space-between;align-items:center;width:100%;padding:5px 15px;line-height:19px;color:var(--color-icon);background-color:#eaf6ff;box-sizing:border-box}.xly-netdisk-note .xly-netdisk-note__text{flex:1}.xly-netdisk-note .xly-netdisk-note__link{color:var(--color-primary)}.xly-netdisk-note .xly-netdisk-note__link:hover{color:var(--color-hover)}.xly-netdisk-note .xly-netdisk-list__my{color:#000}.xly-netdisk-note .xly-netdisk-list__my:hover{color:var(--color-primary)}.xly-netdisk-note .xly-netdisk-note__side{position:absolute;bottom:5px;right:12px;color:var(--color-primary);cursor:pointer}.xly-netdisk-note .xly-netdisk-note__side:hover{color:var(--color-hover)}.xly-netdisk-note--vip{background:#ffe7a9}.xly-netdisk-note--vip .xly-netdisk-note__text{color:#c27a13}.xly-netdisk-note--agreement{background-color:var(--background-bar)}.xly-netdisk-note--fixed{position:absolute;bottom:0;left:0}.xly-netdisk-note__close{margin-left:12px;opacity:.6;cursor:pointer;transition:opacity .3s}.xly-netdisk-note__close:hover{opacity:1}", ""]), e.exports = t
    }, 1497: function (e, t, n) {
        "use strict";
        var i = n(1397);
        n.n(i).a
    }, 1498: function (e, t, n) {
        (t = n(89)(!1)).push([e.i, ".hint[data-v-7e884c35]{position:fixed;left:340;top:550;opacity:.5;image-rendering:smooth;will-change:auto;border:none;outline:#fff}.hint[data-v-7e884c35],.hint>img[data-v-7e884c35]{transition:transform 1s}.hint>img[data-v-7e884c35]{width:30px;height:30px}.hint.positive[data-v-7e884c35]{transition-timing-function:linear}.hint.negative[data-v-7e884c35],.hint.positive>img[data-v-7e884c35]{transition-timing-function:cubic-bezier(.17,.67,.83,.67)}.hint.negative>img[data-v-7e884c35]{transition-timing-function:linear}", ""]), e.exports = t
    }, 1499: function (e, t, n) {
        e.exports = n.p + "img/1.2e4943f.png"
    }, 1500: function (e, t, n) {
        e.exports = n.p + "img/2.5897c98.png"
    }, 1501: function (e, t, n) {
        "use strict";
        var i = n(1398);
        n.n(i).a
    }, 1502: function (e, t, n) {
        (t = n(89)(!1)).push([e.i, '.xly-netdisk-guide{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100vh;background:var(--background-area);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.xly-netdisk-guide__content{margin-top:15px;text-align:center}.xly-netdisk-guide__content h2{font-size:16px;font-weight:700}.xly-netdisk-guide__content p{margin-top:6px;white-space:nowrap;color:var(--color-secondary)}.xly-netdisk-guide__text{text-align:center;color:var(--color-secondary)}.xly-netdisk-guide__sub{position:absolute;top:-5px;right:-7px;width:30px;height:16px;line-height:16px;font-size:11px;text-align:center;background:#ff5d5d;border-radius:2px}.xly-netdisk-guide__sub:after{position:absolute;right:2px;bottom:-4px;width:6px;height:4px;background:#ff5d5d;-webkit-clip-path:polygon(100% 0,0 0,0 100%);clip-path:polygon(100% 0,0 0,0 100%);content:""}.xly-netdisk-guide .td-carousel{margin-top:-50px;width:176px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.xly-netdisk-guide .td-carousel__item{width:176px;height:156px}.xly-netdisk-guide .td-carousel__indicator{margin:0 6px;height:40px}.xly-netdisk-guide .td-carousel__indicator:after{width:6px;height:6px;background:#b9d3ff;border-radius:50%}.xly-netdisk-guide .td-carousel__indicator.is-active:after{background:var(--color-primary)}.xly-netdisk-guide .td-button{position:relative;margin:15px 0 6px;width:180px}', ""]), e.exports = t
    }, 1505: function (e, t, n) {
        "use strict";
        n.r(t);
        n(10), n(11), n(32), n(173);
        var i = n(9), r = (n(12), n(30), n(479), n(234), n(7), n(33)), o = n(40), a = n(70), s = n(71), c = n(37),
            l = (n(4), n(29)), u = n(18), d = (n(41), n(83)), p = (n(471), n(1)), f = n(139), h = n(284), v = n(13),
            y = n(58), m = n(52), b = n(2);

        function g(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var x = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, k = function (e, t, n, i) {
            return new (n || (n = Promise))((function (r, o) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        }, _ = function (e) {
            Object(a.a)(n, e);
            var t = g(n);

            function n() {
                var e, i;
                return Object(r.a)(this, n), (i = t.apply(this, arguments)).isRedpointReport = !1, i.recycleWindowLock = !1, i.warningUpperBoundMap = Object.freeze((e = {}, Object(d.a)(e, f.VipType.normal, 107374182400), Object(d.a)(e, f.VipType.normalVip, 214748364800), Object(d.a)(e, f.VipType.platinum, 214748364800), Object(d.a)(e, f.VipType.superv, 536870912e3), e)), i
            }

            return Object(o.a)(n, [{
                key: "redPointFirstShow", value: function (e) {
                    e > 0 && !this.isRedpointReport && (this.isRedpointReport = !0, this.$eventTrack("yunpan_transmission_red_num_show", {}))
                }
            }, {
                key: "uploadAndCloudAddCountWatcher", value: function (e) {
                    Object(b.callServer)("SetNavUnreadNum", "pan-plugin-view", e)
                }
            }, {
                key: "beforeDestroy", value: function () {
                    Object(b.callServer)("SetNavUnreadNum", "pan-plugin-view", 0)
                }
            }, {
                key: "showTransList", value: function () {
                    return k(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(y.openTransferWindow)();
                                case 2:
                                    this.$eventTrack("bottom_operation_click", {
                                        clickid: "transmission",
                                        vip_type: this.vipType,
                                        is_safebox: +this.inSafeSpace
                                    });
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "handleClickExpandVolume", value: function () {
                    return k(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return this.$eventTrack("bottom_operation_click", {
                                        clickid: "expansion",
                                        vip_type: this.vipType,
                                        text: this.isSuperVip ? "去扩容" : "扩容至6T",
                                        total_volume: this.totalSpace,
                                        used_volume: this.usedSpace,
                                        is_safebox: +this.inSafeSpace
                                    }), e.prev = 1, e.next = 4, v.client.callRemoteClientFunction("vip-download-webview", "OpenPayVipUrl", "https://pay.xunlei.com/pay.html?referfrom=v_pc_xlx_hytq_yp_storage&aidfrom=yp_expand_btn");
                                case 4:
                                    e.next = 9;
                                    break;
                                case 6:
                                    e.prev = 6, e.t0 = e.catch(1), console.error(e.t0);
                                case 9:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[1, 6]])
                    })))
                }
            }, {
                key: "handleClickShare", value: function () {
                    return k(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, v.client.callServerFunction("OpenNewTab", "https://pan.xunlei.com/share/manage");
                                case 3:
                                    e.next = 8;
                                    break;
                                case 5:
                                    e.prev = 5, e.t0 = e.catch(0), console.error(e.t0);
                                case 8:
                                case"end":
                                    return e.stop()
                            }
                        }), e, null, [[0, 5]])
                    })))
                }
            }, {
                key: "openRecycleWindow", value: function () {
                    return k(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.$eventTrack("recycler_btn_click"), !this.recycleWindowLock) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 5:
                                    this.recycleWindowLock = !0;
                                case 6:
                                    if (!(t = Object(y.getRecycleBinWindow)())) {
                                        e.next = 12;
                                        break
                                    }
                                    return t.show(), this.$eventTrack("recycler_page_show"), this.recycleWindowLock = !1, e.abrupt("return");
                                case 12:
                                    return e.prev = 12, e.next = 15, Object(y.openRecycleBinWindow)();
                                case 15:
                                    this.$eventTrack("recycler_page_show"), e.next = 21;
                                    break;
                                case 18:
                                    e.prev = 18, e.t0 = e.catch(12), console.log(e.t0);
                                case 21:
                                    return e.prev = 21, this.recycleWindowLock = !1, e.finish(21);
                                case 24:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[12, 18, 21, 24]])
                    })))
                }
            }, {
                key: "handleIsDriveSpaceInadequateChange", value: function (e) {
                    e && this.$eventTrack("bottom_space_not_enough_show")
                }
            }, {
                key: "showExtensionTipStat", value: function () {
                    this.$eventTrack("yunpan_expansion_volume_btn_show", {
                        vip_type: this.vipType,
                        text: this.isSuperVip ? "去扩容" : "扩容至6T",
                        is_safebox: this.inSafeSpace
                    })
                }
            }, {
                key: "totalSpace", get: function () {
                    return this.$store.state.about.limit
                }
            }, {
                key: "restSpace", get: function () {
                    return this.totalSpace - this.usedSpace
                }
            }, {
                key: "isDriveSpaceInadequate", get: function () {
                    return Boolean(this.restSpace) && this.restSpace < this.warningUpperBoundMap[this.vipType]
                }
            }, {
                key: "isSuperVip", get: function () {
                    return this.vipType === f.VipType.superv
                }
            }, {
                key: "usedSpace", get: function () {
                    return this.$store.state.about.usage
                }
            }, {
                key: "totalSpaceFormatted", get: function () {
                    return Object(p.formatSize)(this.totalSpace)
                }
            }, {
                key: "usedSpaceFormatted", get: function () {
                    return Object(m.normalizedUsedSpaceSize)(this.usedSpace)
                }
            }, {
                key: "transferringTasksCount", get: function () {
                    return this.$store.getters["local-upload/runningTaskNum"] + this.$store.getters["url-task-list/runningTaskNum"] + this.$store.getters["retrieval-list/runningTaskNum"]
                }
            }, {
                key: "uploadAndCloudAddCount", get: function () {
                    return this.$store.getters["local-upload/runningTaskNum"] + this.$store.getters["url-task-list/runningTaskNum"]
                }
            }, {
                key: "useRate", get: function () {
                    var e = this.usedSpace / this.totalSpace * 100;
                    return e < 1 && e > 0 ? 1 : e
                }
            }, {
                key: "showExtensionTip", get: function () {
                    return !this.isSuperVip || this.isDriveSpaceInadequate
                }
            }, {
                key: "vipType", get: function () {
                    return this.$store.getters["users/curVipType"]
                }
            }, {
                key: "inSafeSpace", get: function () {
                    return this.$store.getters["drive/inSafeSpace"] ? 1 : 0
                }
            }]), n
        }(u.Vue);
        x([Object(h.Throttle)(300, {
            trailing: !0,
            leading: !0
        }), Object(h.Bind)(), Object(u.Watch)("transferringTasksCount", {immediate: !0})], _.prototype, "redPointFirstShow", null), x([Object(h.Throttle)(300, {
            trailing: !0,
            leading: !0
        }), Object(h.Bind)(), Object(u.Watch)("uploadAndCloudAddCount", {immediate: !0})], _.prototype, "uploadAndCloudAddCountWatcher", null), x([Object(h.Debounce)(300, {leading: !0}), Object(h.Bind)()], _.prototype, "showTransList", null), x([Object(u.Watch)("isDriveSpaceInadequate", {immediate: !0})], _.prototype, "handleIsDriveSpaceInadequateChange", null);
        var w = _ = x([Object(u.Component)({})], _), S = n(72), C = Object(S.a)(w, (function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "xly-netdisk-side__footer"}, [n("div", {
                    staticClass: "xly-netdisk-size",
                    class: {"is-warn": e.isDriveSpaceInadequate}
                }, [n("div", {staticClass: "xly-netdisk-size__text"}, [n("p", [e._v("\n        " + e._s(e.usedSpaceFormatted) + " / " + e._s(e.totalSpaceFormatted) + "\n        "), e.isDriveSpaceInadequate ? n("span", {staticClass: "xly-netdisk-size__warn"}, [e._v("空间紧张")]) : e._e()]), e._v(" "), e.showExtensionTip ? n("a", {
                    directives: [{
                        name: "observer",
                        rawName: "v-observer.once",
                        value: e.showExtensionTipStat,
                        expression: "showExtensionTipStat",
                        modifiers: {once: !0}
                    }],
                    staticClass: "xly-netdisk-size__link",
                    attrs: {href: "javascript:;"},
                    on: {click: e.handleClickExpandVolume}
                }, [e._v(e._s(e.isSuperVip ? "" : ""))]) : e._e()]), e._v(" "), n("td-progress", {attrs: {value: e.useRate}})], 1), e._v(" "), n("div", {staticClass: "xly-netdisk-operate"}, [n("a", {
                    attrs: {href: "javascript:;"},
                    on: {click: e.openRecycleWindow}
                }, [n("i", {staticClass: "xly-icon-recycle"}), n("span", {staticClass: "xly-tips"}, [e._v("回收站")])])])])
            }), [], !1, null, null, null).exports, T = (n(105), n(20), n(44), n(475)), O = n(5), R = n(26), P = n(350),
            I = n.n(P), j = function (e, t, n, i) {
                return new (n || (n = Promise))((function (r, o) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(a, s)
                    }

                    c((i = i.apply(e, t || [])).next())
                }))
            }, D = Object.create(null);

        function A(e) {
            var t = e.path, n = e.query, i = e.options, r = e.callbacks, o = void 0 === r ? {
                existCallBack: function () {
                    return !0
                }
            } : r;
            return j(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                var r = this;
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (!D[t]) {
                                e.next = 3;
                                break
                            }
                            if (o.existCallBack(D[t])) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            return e.abrupt("return", new Promise((function (e, o) {
                                return j(r, void 0, void 0, regeneratorRuntime.mark((function r() {
                                    var a, s;
                                    return regeneratorRuntime.wrap((function (r) {
                                        for (; ;) switch (r.prev = r.next) {
                                            case 0:
                                                return a = I.a.stringify(n), r.next = 3, Object(y.createLocalBrowserWindow)("".concat(t, "?").concat(a), {
                                                    width: i.width,
                                                    height: i.height,
                                                    frame: !1,
                                                    modal: !1,
                                                    center: !0,
                                                    resizable: !1,
                                                    movable: !0,
                                                    spellcheck: !1,
                                                    parent: null,
                                                    customProperties: Object.assign({
                                                        resolve: e,
                                                        reject: o
                                                    }, i.customProperties || {})
                                                });
                                            case 3:
                                                (s = r.sent).__resolve = e, s.__reject = o, D[t] = s, Object(b.callServer)("RoundRectWindow", s.id, s.id), s.on("close", (function () {
                                                    delete D[t]
                                                })), window.onbeforeunload = function () {
                                                    s && s.close(), delete D[t]
                                                }, Object(b.callServer)("RoundRectWindow", s.id);
                                            case 11:
                                            case"end":
                                                return r.stop()
                                        }
                                    }), r)
                                })))
                            })));
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))
        }

        var E = function (e, t, n, i) {
            return new (n || (n = Promise))((function (r, o) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        }, F = O.default.extend({
            computed: {
                vipType: function () {
                    return this.$store.getters["users/curVipType"]
                }, unzipEnable: function () {
                    return this.$store.getters.vipGlobalRemoteConfig("xl11_online_uncompress", !1)
                }, driveRouteList: function () {
                    return this.$store.state.drive.driveRouteList
                }
            }, methods: {
                unzipFile: function (e) {
                    return E(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        var n;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (!((n = Number(e.size)) > T.a.maxUnzipSize)) {
                                        t.next = 5;
                                        break
                                    }
                                    return this.$message({
                                        message: "压缩包超过".concat(Object(p.formatSize2)(T.a.maxUnzipSize), "暂不支持解压，可下载后查看"),
                                        type: "error",
                                        position: "middle",
                                        duration: 3e3
                                    }), Object(R.statVipEvent)("online_decompress_toast_show", {type: "upper_8g"}), t.abrupt("return");
                                case 5:
                                    if (this.vipType !== f.VipType.normal) {
                                        t.next = 9;
                                        break
                                    }
                                    A({
                                        path: "bw/unzip/vip",
                                        query: {size: n},
                                        options: {width: 400, height: 366},
                                        callbacks: {
                                            existCallBack: function (e) {
                                                return e.close(), !0
                                            }
                                        }
                                    }), t.next = 22;
                                    break;
                                case 9:
                                    if (!([f.VipType.platinum, f.VipType.normalVip].includes(this.vipType) && n > T.a.platinumUnzipSize)) {
                                        t.next = 13;
                                        break
                                    }
                                    A({
                                        path: "bw/unzip/vip",
                                        query: {size: n},
                                        options: {width: 400, height: 366},
                                        callbacks: {
                                            existCallBack: function (e) {
                                                return e.close(), !0
                                            }
                                        }
                                    }), t.next = 22;
                                    break;
                                case 13:
                                    return t.prev = 13, t.next = 16, A({
                                        path: "bw/unzip",
                                        options: {
                                            width: 405,
                                            height: 150,
                                            customProperties: {
                                                file_id: e.id,
                                                gcid: e.hash,
                                                driveRouteList: this.driveRouteList,
                                                file_size: e.size,
                                                name: e.name
                                            }
                                        }
                                    });
                                case 16:
                                    this.$bus.$emit("syncDriveList"), t.next = 22;
                                    break;
                                case 19:
                                    t.prev = 19, t.t0 = t.catch(13), p.log.error("CollapseItemContainer", "打开解压窗口失败", t.t0);
                                case 22:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this, [[13, 19]])
                    })))
                }
            }
        }), L = n(283);

        function $(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var M = function (e, t, n, i) {
                var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
                return o > 3 && a && Object.defineProperty(t, n, a), a
            }, V = {37: 1, 38: 1, 39: 1, 40: 1}, z = {passive: !1},
            N = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

        function U(e) {
            e.preventDefault()
        }

        function B(e) {
            return !!V[e.keyCode] && (U(e), !1)
        }

        var Y = function (e) {
            Object(a.a)(n, e);
            var t = $(n);

            function n() {
                var e;
                return Object(r.a)(this, n), (e = t.apply(this, arguments)).computedPosition = {
                    x: 0,
                    y: 0
                }, e.menuItemList = [], e.curHoverItem = null, e.secondaryPositionStyle = {top: "0", left: "100%"}, e
            }

            return Object(o.a)(n, [{
                key: "handleClickContextMenuItem", value: function (e) {
                    "排序" !== e.name && (this.$emit("clickItem", e.name), this.$emit("update:visible", !1))
                }
            }, {
                key: "handleClickSecondaryContextMenu", value: function (e, t) {
                    this.$emit("clickItem", e.name, t.sortType), this.$emit("update:visible", !1)
                }
            }, {
                key: "disableListScroll", value: function () {
                    var e = this.$parent.$el;
                    e.addEventListener("DOMMouseScroll", U, !1), e.addEventListener(N, U, z), e.addEventListener("touchmove", U, z), window.addEventListener("keydown", B, !1)
                }
            }, {
                key: "enableListScroll", value: function () {
                    var e = this.$parent.$el;
                    e.removeEventListener("DOMMouseScroll", U, !1), e.removeEventListener(N, U, !1), e.removeEventListener("touchmove", U, !1), window.removeEventListener("keydown", B, !1)
                }
            }, {
                key: "normalizeDropdownPosition", value: function () {
                    var e = this;
                    this.resetSecondaryPositionStyle();
                    var t = this.$parent.$el.getBoundingClientRect(), n = this.$el.getBoundingClientRect(),
                        i = this.clickPosition.x, r = this.clickPosition.y;
                    i + n.width > t.right && (i -= n.width), r + n.height > t.bottom && (r -= r + n.height - t.bottom), this.computedPosition.x = i, this.computedPosition.y = r;
                    var o = this.$refs.context_children;
                    o && this.$nextTick((function () {
                        var n = e.$el.getBoundingClientRect();
                        o.forEach((function (i) {
                            var r = i.getBoundingClientRect(), o = r.width, a = r.right, s = r.bottom, c = r.height,
                                l = r.top;
                            a > t.right && (e.secondaryPositionStyle.left = "-".concat(o, "px"));
                            var u = n.bottom - l;
                            s > t.bottom && (e.secondaryPositionStyle.top = "-".concat(c - u, "px"))
                        }))
                    }))
                }
            }, {
                key: "resetSecondaryPositionStyle", value: function () {
                    this.secondaryPositionStyle = {top: "0", left: "100%"}
                }
            }, {
                key: "handleWindowClick", value: function (e) {
                    this.visible && (e.path.includes(this.$el) || this.$emit("update:visible", !1))
                }
            }, {
                key: "handleWindowBlur", value: function (e) {
                    this.$emit("update:visible", !1)
                }
            }, {
                key: "beforeDestroy", value: function () {
                    window.removeEventListener("blur", this.handleWindowBlur), window.removeEventListener("click", this.handleWindowClick, !0), this.enableListScroll()
                }
            }, {
                key: "handleVisibleChange", value: function (e) {
                    e ? (this.handlePickedItemListChange(), window.addEventListener("blur", this.handleWindowBlur), window.addEventListener("click", this.handleWindowClick, !0), this.disableListScroll(), this.$nextTick(this.normalizeDropdownPosition.bind(this))) : (window.removeEventListener("blur", this.handleWindowBlur), window.removeEventListener("click", this.handleWindowClick, !0), this.$emit("update:isOutOfContextMenu", !0), this.enableListScroll())
                }
            }, {
                key: "handleClickPosition", value: function (e) {
                    this.$nextTick(this.normalizeDropdownPosition.bind(this))
                }
            }, {
                key: "handlePickedItemListChange", value: function () {
                    if (this.visible) if (this.$set(this, "menuItemList", []), this.pickedItemList.length) if ("trash" === this.activeCollapseItemType) this.menuItemList.push({name: "还原"}, {name: "彻底删除"}); else {
                        var e = this.shouldShowCoffer ? {name: this.inSafeSpace ? "移出保险箱" : "移入保险箱"} : {name: ""};
                        if (this.menuItemList.push({name: "下载"}, e, {name: this.inSafeSpace ? "" : "分享"}, {name: "复制到"}, {name: "移动到"}, {name: "删除"}), 1 === this.pickedItemList.length) {
                            var t = this.pickedItemList[0];
                            if (["PHASE_TYPE_PENDING", "PHASE_TYPE_RUNNING"].includes(t.phase)) return void (this.menuItemList = [{name: "删除"}, {name: "刷新"}]);
                            if (Object(m.isSensitiveFile)(t)) return void (this.menuItemList = [{name: "删除"}]);
                            if (this.menuItemList.push({name: "重命名"}), !t || void 0 === t.file_extension || null === t.file_extension) return;
                            var n = t.file_extension, i = t.mime_type, r = Object(p.checkCanPreview)(n, i);
                            "media" === r ? this.menuItemList.unshift({name: "在线播放"}) : "picture" !== r && "drive#folder" !== t.kind || this.menuItemList.unshift({name: "打开"}), this.unzipEnable && T.a.supportUzip.includes(t.file_extension) && t.phase === L.Phase.COMPLETE && this.menuItemList.unshift({name: "在线解压"})
                        }
                        this.menuItemList.push({name: "刷新"}), this.menuItemList = this.menuItemList.filter((function (e) {
                            return e.name
                        }))
                    } else "drive" === this.activeCollapseItemType ? this.menuItemList.push({name: "新建文件夹"}, {
                        name: "排序",
                        children: [{name: "文件名", sortType: "name"}, {name: "添加日期", sortType: "created_time"}]
                    }, {name: "刷新"}) : this.menuItemList.push({name: "全部还原"}, {name: "清空回收站"})
                }
            }, {
                key: "shouldShowCoffer", get: function () {
                    var e, t;
                    return (null === (t = null === (e = this.$store.state.panGlobalRemoteConfig) || void 0 === e ? void 0 : e.strongbox) || void 0 === t ? void 0 : t.switch) && this.isSafeInDriveList
                }
            }, {
                key: "isSafeInDriveList", get: function () {
                    return this.$store.state.drive.isSafeInDriveList
                }
            }, {
                key: "driveSortInfo", get: function () {
                    return this.$store.state.drive.driveSortInfoMap.drive
                }
            }, {
                key: "activeCollapseItemType", get: function () {
                    return this.$store.state.drive.activeCollapseItemType
                }
            }, {
                key: "inSafeSpace", get: function () {
                    return this.$store.getters["drive/inSafeSpace"]
                }
            }]), n
        }(u.Vue);
        M([Object(u.Prop)({})], Y.prototype, "visible", void 0), M([Object(u.Prop)({})], Y.prototype, "clickPosition", void 0), M([Object(u.Prop)({})], Y.prototype, "isOutOfContextMenu", void 0), M([Object(u.Prop)({})], Y.prototype, "pickedItemList", void 0), M([Object(u.Watch)("visible")], Y.prototype, "handleVisibleChange", null), M([Object(u.Watch)("clickPosition", {deep: !0})], Y.prototype, "handleClickPosition", null), M([Object(u.Watch)("pickedItemList", {deep: !0})], Y.prototype, "handlePickedItemListChange", null);
        var W = Y = M([Object(u.Component)({mixins: [F]})], Y), G = Object(S.a)(W, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                directives: [{name: "show", rawName: "v-show", value: e.visible, expression: "visible"}],
                staticClass: "xly-right-click",
                style: {left: e.computedPosition.x + "px", top: e.computedPosition.y + "px"},
                on: {
                    mouseenter: function (t) {
                        return e.$emit("update:isOutOfContextMenu", !1)
                    }, mouseleave: function (t) {
                        return e.$emit("update:isOutOfContextMenu", !0)
                    }, contextmenu: function (e) {
                        e.preventDefault(), e.stopPropagation()
                    }
                }
            }, [n("ul", e._l(e.menuItemList, (function (t) {
                return n("li", {
                    key: t.name, staticClass: "xly-right-click__item", on: {
                        mouseenter: function (n) {
                            e.curHoverItem = t
                        }, mouseleave: function (t) {
                            e.curHoverItem = null
                        }, click: function (n) {
                            return e.handleClickContextMenuItem(t)
                        }
                    }
                }, [e._v("\n      " + e._s(t.name) + "\n      "), t.children ? [n("i", {staticClass: "xly-icon-arrow-right"}), e._v(" "), n("ul", {
                    ref: "context_children",
                    refInFor: !0,
                    staticClass: "xly-right-click__children",
                    style: Object.assign({}, e.secondaryPositionStyle, {visibility: t.children && e.curHoverItem === t ? "visible" : "hidden"})
                }, e._l(t.children, (function (i) {
                    return n("li", {
                        key: i.name,
                        staticClass: "xly-right-click__item",
                        class: {"is-chosen": e.driveSortInfo.type === i.sortType},
                        on: {
                            click: function (n) {
                                return n.stopPropagation(), e.handleClickSecondaryContextMenu(t, i)
                            }
                        }
                    }, [e._v("\n            " + e._s(i.name) + "\n          ")])
                })), 0)] : e._e()], 2)
            })), 0)])
        }), [], !1, null, null, null).exports;

        function Q(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var Z = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, X = function (e) {
            Object(a.a)(n, e);
            var t = Q(n);

            function n() {
                var e;
                return Object(r.a)(this, n), (e = t.apply(this, arguments)).sortTypeList = [{
                    label: "文件名",
                    type: "name",
                    category: "all"
                }, {label: "添加日期", type: "created_time", category: "drive"}, {
                    label: "删除日期",
                    type: "modified_time",
                    category: "trash"
                }], e
            }

            return Object(o.a)(n, [{
                key: "handleClickSortListItem", value: function (e) {
                    switch (this.$emit("changeSortType", e.type), e.type) {
                        case"name":
                            this.$eventTrack("drive" === this.activeCollapseItemType ? "yunpan_filelist_sort_btn_child_click" : "recycler_sort_btn_child_click", {clickid: "name"});
                            break;
                        case"created_time":
                            this.$eventTrack("yunpan_filelist_sort_btn_child_click", {clickid: "time"});
                            break;
                        case"modified_time":
                            this.$eventTrack("recycler_sort_btn_child_click", {clickid: "time"})
                    }
                }
            }, {
                key: "handleVisibleChange", value: function (e) {
                    e ? (window.addEventListener("blur", this.handleWindowBlur), window.addEventListener("click", this.handleWindowClick, !0)) : (window.removeEventListener("blur", this.handleWindowBlur), window.removeEventListener("click", this.handleWindowClick, !0))
                }
            }, {
                key: "handleWindowClick", value: function (e) {
                    this.visible && (e.path.includes(this.$el) || this.$emit("update:visible", !1))
                }
            }, {
                key: "handleWindowBlur", value: function (e) {
                    this.$emit("update:visible", !1)
                }
            }, {
                key: "computedSortTypeList", get: function () {
                    var e = this;
                    return this.sortTypeList.filter((function (t) {
                        return ["all", e.activeCollapseItemType].includes(t.category)
                    }))
                }
            }, {
                key: "sortInfo", get: function () {
                    return this.$store.state.drive.driveSortInfoMap[this.activeCollapseItemType]
                }
            }, {
                key: "activeCollapseItemType", get: function () {
                    return this.$store.state.drive.activeCollapseItemType
                }
            }]), n
        }(u.Vue);
        Z([Object(u.Prop)({})], X.prototype, "visible", void 0), Z([Object(u.Prop)({})], X.prototype, "chosenSortType", void 0), Z([Object(u.Watch)("visible")], X.prototype, "handleVisibleChange", null);
        var J = X = Z([Object(u.Component)({})], X), H = Object(S.a)(J, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                directives: [{name: "show", rawName: "v-show", value: e.visible, expression: "visible"}],
                staticClass: "xly-drop-more",
                staticStyle: {left: "280px", top: "73px", "z-index": "100"}
            }, [n("ul", e._l(e.computedSortTypeList, (function (t, i) {
                return n("li", {
                    key: i,
                    staticClass: "xly-drop-more__item",
                    class: {"is-chosen": t.type === e.sortInfo.type},
                    on: {
                        click: function (n) {
                            return e.handleClickSortListItem(t)
                        }
                    }
                }, [e._v("\n      " + e._s(t.label) + "\n    ")])
            })), 0)])
        }), [], !1, null, null, null).exports, q = n(8);

        function K(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var ee = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, te = function (e, t, n, i) {
            return new (n || (n = Promise))((function (r, o) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        }, ne = function (e) {
            Object(a.a)(n, e);
            var t = K(n);

            function n() {
                var e, i;
                return Object(r.a)(this, n), (i = t.apply(this, arguments)).visible = !1, i.eventId = 0, i.trashValidDurationMap = Object.freeze((e = {}, Object(d.a)(e, f.VipType.normal, 10), Object(d.a)(e, f.VipType.normalVip, 15), Object(d.a)(e, f.VipType.platinum, 15), Object(d.a)(e, f.VipType.superv, 30), e)), i
            }

            return Object(o.a)(n, [{
                key: "show", value: function () {
                    this.callerInstance.$eventTrack("yunpan_delete_pop_show", {
                        is_prolong_textlink: this.vipType !== f.VipType.superv ? 1 : 0,
                        vip_type: this.vipType,
                        is_safebox: 0
                    }), this.visible = !0
                }
            }, {
                key: "handleClickExtendTrashSaveTime", value: function () {
                    return te(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return this.callerInstance.$eventTrack("yunpan_delete_pop_click", {
                                        clickid: "extend_save_time",
                                        vip_type: this.vipType,
                                        is_safebox: 0
                                    }), e.prev = 1, e.next = 4, v.client.callRemoteClientFunction("vip-download-webview", "OpenPayVipUrl", "https://pay.xunlei.com/pay.html?referfrom=v_pc_xlx_hytq_yp_recycle&aidfrom=yp_del_pop");
                                case 4:
                                    e.next = 9;
                                    break;
                                case 6:
                                    e.prev = 6, e.t0 = e.catch(1), console.error(e.t0);
                                case 9:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[1, 6]])
                    })))
                }
            }, {
                key: "emit", value: function () {
                    this.callerInstance.$eventTrack("yunpan_delete_pop_click", {
                        clickid: "confim",
                        vip_type: this.vipType,
                        is_safebox: 0
                    }), this.visible = !1, this.$destroy(), this.resolve()
                }
            }, {
                key: "close", value: function () {
                    this.callerInstance.$eventTrack("yunpan_delete_pop_click", {
                        clickid: "cancel",
                        vip_type: this.vipType,
                        is_safebox: 0
                    }), this.visible = !1, this.$destroy(), this.reject()
                }
            }, {
                key: "mounted", value: function () {
                    var e = this;
                    this.eventId = v.client.attachServerEvent("OnLogout", (function () {
                        e.close()
                    }))
                }
            }, {
                key: "beforeDestroy", value: function () {
                    v.client.detachServerEvent("OnLogout", this.eventId)
                }
            }]), n
        }(u.Vue);
        ee([Object(u.Prop)({default: !1})], ne.prototype, "danger", void 0), ee([Object(u.Prop)({default: "确定"})], ne.prototype, "confirmText", void 0), ee([Object(u.Prop)({})], ne.prototype, "resolve", void 0), ee([Object(u.Prop)({})], ne.prototype, "reject", void 0), ee([Object(u.Prop)({})], ne.prototype, "vipType", void 0), ee([Object(u.Prop)({})], ne.prototype, "callerInstance", void 0);
        var ie = ne = ee([Object(u.Component)({})], ne), re = (n(280), Object(S.a)(ie, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("td-dialog", {
                attrs: {"custom-class": "xly-dialog-prompt", visible: e.visible},
                on: {
                    close: e.close, "update:visible": function (t) {
                        e.visible = t
                    }
                }
            }, [n("h2", {
                attrs: {slot: "header"},
                slot: "header"
            }, [e._v("\n    确认删除所选文件/文件夹？\n  ")]), e._v(" "), n("p", {staticClass: "xly-dialog-prompt__text"}, [e._v("\n    " + e._s(e.trashValidDurationMap[e.vipType]) + "天内可在回收站中找回已删文件\n  ")]), e._v(" "), n("div", {
                staticClass: "xly-dialog__footer",
                attrs: {slot: "footer"},
                slot: "footer"
            }, [n("div", {staticClass: "xly-dialog__footer-operate"}, ["5" !== e.vipType ? n("a", {
                staticClass: "xly-dialog__footer-link",
                attrs: {href: "#"},
                on: {click: e.handleClickExtendTrashSaveTime}
            }, [e._v("延长回收站保存时间>")]) : e._e()]), e._v(" "), n("div", {staticClass: "xly-dialog__button"}, [n("td-button", {
                attrs: {danger: e.danger},
                on: {click: e.emit}
            }, [e._v("\n        " + e._s(e.confirmText) + "\n      ")]), e._v(" "), n("td-button", {
                staticClass: "td-button--other",
                on: {click: e.close}
            }, [e._v("\n        取消\n      ")])], 1)])])
        }), [], !1, null, null, null).exports), oe = n(195), ae = n(1331), se = n(1329), ce = n(3);

        function le(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var ue = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, de = {
            open: "folder",
            download: "getback",
            "open-file": "file",
            play: "play",
            clear: "delete",
            upload: "resume_add",
            pause: "pause_add"
        }, pe = function (e) {
            Object(a.a)(n, e);
            var t = le(n);

            function n() {
                var e;
                return Object(r.a)(this, n), (e = t.apply(this, arguments)).toolTipVisible = !1, e.topTipPosition = "top", e.hasShowLimitInputLengthToast = !1, e.isReddotShow = !1, e
            }

            return Object(o.a)(n, [{
                key: "mounted", value: function () {
                    this.isSafe && this.$bus.$on("cancelReddot", this.cancelReddot)
                }
            }, {
                key: "beforeDestroy", value: function () {
                    this.isSafe && this.$bus.$off("cancelReddot", this.cancelReddot)
                }
            }, {
                key: "cancelReddot", value: function () {
                    this.isReddotShow = !1
                }
            }, {
                key: "onSafeInit", value: function (e) {
                    var t, n;
                    try {
                        if (this.isSafe) {
                            var i = Object(p.safeReadLocalStorage)("panSafeFirstReddotShow"),
                                r = this.$store.state.users.curUser.userId;
                            if (null === i || void 0 === i[r]) {
                                this.isReddotShow = !0;
                                var o = null === i ? Object(d.a)({}, r, Date.now()) : Object.assign(Object.assign({}, i), Object(d.a)({}, r, Date.now()));
                                localStorage.setItem("panSafeFirstReddotShow", JSON.stringify(o))
                            } else if (i[r]) if (e) this.isReddotShow = !1; else {
                                var a = null === (n = null === (t = this.$store.state.panGlobalRemoteConfig) || void 0 === t ? void 0 : t.strongbox) || void 0 === n ? void 0 : n.red_dot;
                                a && Date.now() - i[r] > 25 * a * 60 * 60 * 1e3 ? this.isReddotShow = !1 : this.isReddotShow = !0
                            }
                        }
                    } catch (e) {
                        console.error(e)
                    }
                }
            }, {
                key: "getClassOfFileItem", value: function (e) {
                    return this.isSafe ? "xly-netdisk-list__tag" : ""
                }
            }, {
                key: "getListItemStyle", value: function (e) {
                    var t = {};
                    return e.icon_link && (t.background = "url(".concat(e.icon_link, ") 0% 0% / cover no-repeat")), t
                }
            }, {
                key: "validTrashTime", value: function (e) {
                    var t = +new Date(e.delete_time);
                    return Math.ceil((t - Date.now()) / 1e3 / 3600 / 24)
                }
            }, {
                key: "handleInputBlur", value: function () {
                    this.$emit("inputConfirm")
                }
            }, {
                key: "handleSelectAllContent", value: function (e) {
                    e && e.target.select()
                }
            }, {
                key: "handleInputPast", value: function (e) {
                    if (e.clipboardData) e.clipboardData.getData("text"), e.target
                }
            }, {
                key: "handleMouseLeaveToolTip", value: function () {
                    this.topTipPosition = "top", this.toolTipVisible = !1
                }
            }, {
                key: "handleMouseEnterToolTip", value: function () {
                    var e = this, t = this.$parent.$refs.list.getBoundingClientRect().top;
                    this.toolTipVisible = !0, this.$nextTick((function () {
                        var n = e.$refs.tooltip;
                        n && ((n = n.$el.querySelector(".td-tooltip")).getBoundingClientRect().top < t && (e.topTipPosition = "bottom"))
                    }))
                }
            }, {
                key: "handleClickOperation", value: function (e, t) {
                    var n = this;
                    this.$eventTrack("yunpan_filelist_right_shortcut_key_click", {
                        btn_type: de[this.getInfoOfOperation(e, "icon")],
                        vip_type: this.$store.getters["users/curVipType"],
                        is_year: this.$store.getters["users/isYearRaw"]
                    }), "暂停" === this.getInfoOfOperation(e, "title") ? this.$store.dispatch("local-upload/pause", e.__taskid__) : "恢复" === this.getInfoOfOperation(e, "title") ? this.$store.dispatch("local-upload/resume", e.__taskid__) : "下载" === this.getInfoOfOperation(e, "title") ? setTimeout((function () {
                        n.$emit("fetch")
                    })) : "删除" === this.getInfoOfOperation(e, "title") ? this.$emit("cancel") : (t.stopPropagation(), this.$emit("consume"))
                }
            }, {
                key: "handleInputChange", value: function (e) {
                    e.target.value.length >= 170 && (this.hasShowLimitInputLengthToast || (this.$message.warning("名称太长了不能再输入啦"), this.hasShowLimitInputLengthToast = !0))
                }
            }, {
                key: "getInfoOfOperation", value: function (e, t) {
                    var n, i;
                    if (["PHASE_TYPE_PENDING", "PHASE_TYPE_RUNNING"].includes(null !== (n = e.phase) && void 0 !== n ? n : "")) return e.__kind__ ? "icon" === t ? "clear" : "删除" : "pause" === e.__stat__ ? "icon" === t ? "upload" : "恢复" : "icon" === t ? "pause" : "暂停";
                    if ("drive#folder" === e.kind) return "icon" === t ? "open" : "打开文件夹";
                    var r = Object(R.checkStatFileType)(null !== (i = e.file_extension) && void 0 !== i ? i : "", e.mime_type);
                    return "video" === r ? "icon" === t ? "play" : "播放" : "photo" === r || "seed" === r ? "icon" === t ? "open-file" : "打开文件" : "icon" === t ? "download" : "下载"
                }
            }, {
                key: "handleModeChange", value: function (e) {
                    e && (this.hasShowLimitInputLengthToast = !1)
                }
            }, {
                key: "active", get: function () {
                    return this.$store.state.drive.activeCollapseItemType
                }
            }, {
                key: "safeGlobalConfig", get: function () {
                    var e;
                    return null === (e = this.$store.state.panGlobalRemoteConfig) || void 0 === e ? void 0 : e.strongbox
                }
            }, {
                key: "safeSubtitle", get: function () {
                    var e;
                    return (null === (e = this.safeGlobalConfig) || void 0 === e ? void 0 : e.subtitle) || "文件随意存，保障数据安全"
                }
            }, {
                key: "isSafe", get: function () {
                    return "SAFE" === this.item.folder_type
                }
            }, {
                key: "haveInitSafe", get: function () {
                    return this.$store.state.password.haveInitSafe
                }
            }, {
                key: "vipType", get: function () {
                    return this.$store.getters["users/curVipType"]
                }
            }, {
                key: "isSuperVip", get: function () {
                    return this.vipType === f.VipType.superv
                }
            }]), n
        }(u.Vue);
        ue([Object(u.Prop)({})], pe.prototype, "item", void 0), ue([Object(u.Watch)("haveInitSafe")], pe.prototype, "onSafeInit", null), ue([Object(u.Watch)("item.__mode")], pe.prototype, "handleModeChange", null);
        var fe = pe = ue([Object(u.Component)({
            methods: {
                formatSize2: p.formatSize2,
                formatTime: p.formatTime,
                isSystemDirectory: m.isSystemDirectory
            }
        })], pe), he = Object(S.a)(fe, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("td-media", [n("i", {
                staticClass: "xly-icon-type",
                class: [{"xly-type-group": e.item.__mode && "create" === e.item.__mode}],
                style: e.getListItemStyle(e.item),
                attrs: {slot: "media"},
                slot: "media"
            }), e._v(" "), e.item.__mode ? n("td-input", {
                ref: "createInput",
                staticClass: "xly-netdisk-list__input",
                attrs: {value: e.item.name, maxlength: 170},
                on: {
                    blur: e.handleInputBlur, contextmenu: function (e) {
                        e.stopPropagation()
                    }, paste: e.handleInputPast, keypress: [function (t) {
                        return (t.type.indexOf("key") || 1 === t.keyCode) && t.ctrlKey ? e.handleSelectAllContent(t) : null
                    }, function (t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.handleInputBlur(t)
                    }]
                },
                nativeOn: {
                    dblclick: function (e) {
                        e.stopPropagation()
                    }, input: function (t) {
                        return e.handleInputChange(t)
                    }
                }
            }) : n("p", {staticClass: "xly-netdisk-list__name"}, [n("span", {attrs: {title: e.item.name}}, [e._v(" " + e._s(e.item.name))]), e._v(" "), e.isSafe && e.isReddotShow ? n("span", {staticClass: "xly-netdisk-list__tag"}, [e._v("new")]) : e._e()]), e._v(" "), n("div", {staticClass: "xly-side-operate"}, [n("a", {
                staticClass: "xly-side-operate__button",
                attrs: {href: "javascript:;", title: e.getInfoOfOperation(e.item, "title")},
                on: {
                    click: function (t) {
                        return e.handleClickOperation(e.item, t)
                    }
                }
            }, [n("i", {class: "xly-icon-" + e.getInfoOfOperation(e.item, "icon")})])]), e._v(" "), "create" !== e.item.__mode ? n("div", {staticClass: "xly-netdisk-list__info"}, ["drive#folder" !== e.item.kind ? n("p", {staticClass: "xly-netdisk-list__count"}, [e._v("\n      " + e._s(e.formatSize2(e.item.size)) + "\n    ")]) : e._e(), e._v(" "), "PHASE_TYPE_COMPLETE" === e.item.phase ? n("p", {staticClass: "xly-netdisk-list__time"}, [e.isSafe ? [e._v("\n        " + e._s(e.safeSubtitle) + "\n      ")] : [e._v("\n        " + e._s(e.formatTime(new Date(e.item.created_time), "yyyy-MM-dd hh:mm")) + "\n      ")]], 2) : ["pending" === e.item.__stat__ ? n("p", {staticClass: "xly-netdisk-list__status"}, [e._v("\n        等待添加 "), n("i", {staticClass: "xly-point"})]) : "pause" === e.item.__stat__ ? n("p", {staticClass: "xly-netdisk-list__status"}, [e._v("\n        暂停\n      ")]) : e.item.__kind__ && e.isSuperVip ? n("p", {staticClass: "xly-netdisk-list__status"}, [n("i", {staticClass: "xly-icon-speed-1"}), e._v(" 正在极速云添加 " + e._s(~~+e.item.__progress__) + "%\n      ")]) : n("p", {staticClass: "xly-netdisk-list__status"}, [e._v("\n        正在添加" + e._s(~~+e.item.__progress__) + "% "), n("i", {staticClass: "xly-point"})])], e._v(" "), "PHASE_TYPE_COMPLETE" === e.item.phase && e.item.audit && e.item.audit.status && "STATUS_OK" !== e.item.audit.status ? n("td-tooltip", {
                ref: "tooltip",
                attrs: {visible: e.toolTipVisible, placement: e.topTipPosition},
                nativeOn: {
                    mouseenter: function (t) {
                        return e.handleMouseEnterToolTip(t)
                    }, mouseleave: function (t) {
                        return e.handleMouseLeaveToolTip(t)
                    }
                }
            }, [n("span", {
                attrs: {slot: "content"},
                slot: "content"
            }, ["STATUS_UNKNOW" === e.item.audit.status ? [n("span", [e._v("疑似不良资源，正在审核中..."), n("br"), e._v("24小时内反馈审核结果")])] : [e._v("\n          " + e._s(e.item.audit.title) + "\n        ")]], 2), e._v(" "), n("i", {class: ["STATUS_SENSITIVE_RESOURCE", "STATUS_SENSITIVE_WORD"].includes(e.item.audit.status) ? "xly-icon-note" : "xly-icon-help"})]) : e._e(), e._v(" "), "trash" === e.active ? n("p", {staticClass: "xly-netdisk-list__effective"}, [e._v("\n      有效期" + e._s(e.validTrashTime(e.item)) + "天\n    ")]) : e._e()], 2) : e._e(), e._v(" "), ["PHASE_TYPE_PENDING", "PHASE_TYPE_RUNNING"].includes(e.item.phase) ? n("td-progress", {attrs: {value: +e.item.__progress__}}) : e._e()], 1)
        }), [], !1, null, null, null).exports;

        function ve(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var ye = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, me = function (e) {
            Object(a.a)(n, e);
            var t = ve(n);

            function n() {
                return Object(r.a)(this, n), t.apply(this, arguments)
            }

            return n
        }(u.Vue);
        ye([Object(u.Prop)({})], me.prototype, "isDragging", void 0), ye([Object(u.Prop)({})], me.prototype, "pickedLength", void 0), ye([Object(u.Prop)({})], me.prototype, "dropDirName", void 0), ye([Object(u.Prop)({})], me.prototype, "dragCursorPosition", void 0);
        var be = me = ye([Object(u.Component)({})], me), ge = Object(S.a)(be, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isDragging,
                    expression: "isDragging"
                }],
                staticClass: "xly-netdisk-move",
                style: {top: e.dragCursorPosition.y + 10 + "px", left: e.dragCursorPosition.x + 10 + "px"}
            }, [n("p", [n("span", [e._v("移动" + e._s(e.pickedLength) + "个文件到")]), e._v(" "), n("span", {staticClass: "xly-netdisk-move__file"}, [e._v(" " + e._s(e.dropDirName))])])])
        }), [], !1, null, null, null).exports;

        function xe(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var ke = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, _e = function (e, t, n, i) {
            return new (n || (n = Promise))((function (r, o) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        }, we = function (e) {
            Object(a.a)(n, e);
            var t = xe(n);

            function n() {
                return Object(r.a)(this, n), t.apply(this, arguments)
            }

            return Object(o.a)(n, [{
                key: "jumpToPrivacy", value: function () {
                    return _e(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, v.client.callServerFunction("OpenNewTab", "https://pan.xunlei.com/privacy");
                                case 2:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }
            }]), n
        }(u.Vue);
        ke([Object(u.Prop)({})], we.prototype, "visible", void 0);
        var Se = we = ke([Object(u.Component)({})], we), Ce = Object(S.a)(Se, (function () {
            var e = this, t = e.$emit("close"), n = e._self._c || t;
            return e.visible ? n("div", {staticClass: "xly-netdisk-note xly-netdisk-note--agreement"}, [n("p", {staticClass: "xly-netdisk-note__text"}, [e._v("\n    此云盘为您的私人云盘，请严格遵循"), n("a", {
                staticClass: "xly-netdisk-note__link",
                attrs: {href: "javascript:;"},
                on: {click: e.jumpToPrivacy}
            }, [e._v("服务协议")]), e._v("，严禁存放，传输任何涉密、色情、暴力、侵权等违法内容。\n  ")]), e._v(" "), n("span", {
                staticClass: "xly-netdisk-note__close",
                attrs: {title: "关闭"},
                on: {
                    click: function (t) {
                        return e.$emit("close")
                    }
                }
            }, [n("i", {staticClass: "xly-icon-close"})])]) : e._e()
        }), [], !1, null, null, null).exports, Te = n(174), Oe = n(1399), Re = n(194), Pe = n.n(Re);

        function Ie(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var je = function (e, t, n, i) {
                var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
                return o > 3 && a && Object.defineProperty(t, n, a), a
            }, De = function (e, t, n, i) {
                return new (n || (n = Promise))((function (r, o) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(a, s)
                    }

                    c((i = i.apply(e, t || [])).next())
                }))
            }, Ae = (Pe.a.withTag("components/aside/safeSpaceVolume.vue"), 1073741824), Ee = function (e) {
                Object(a.a)(n, e);
                var t = Ie(n);

                function n() {
                    var e;
                    return Object(r.a)(this, n), (e = t.apply(this, arguments)).privilege_window_lock = !1, e
                }

                return Object(o.a)(n, [{
                    key: "upgradeConfirmUrl", value: function (e) {
                        var t, n = +(null !== (t = this.safeSpaceQuota.usage) && void 0 !== t ? t : 0);
                        return this.vipType === f.VipType.normal && n < this.platinum_volume ? "https://pay.xunlei.com/pay.html?&referfrom=v_pc_xl11_hytq_safebox&aidfrom=".concat(e) : "https://pay.xunlei.com/pay.html?&referfrom=v_pc_xl11_hytq_safebox&aidfrom=".concat(e, "&default_tab=supervip")
                    }
                }, {
                    key: "upgradeButtonText", value: function () {
                        var e, t = +(null !== (e = this.safeSpaceQuota.usage) && void 0 !== e ? e : 0);
                        return this.vipType === f.VipType.superv ? "升级年费超会" : [f.VipType.normalVip, f.VipType.platinum].includes(this.vipType) ? t >= this.superv_volume ? "升级年费超会" : "升级超级会员" : t >= this.superv_volume ? "开通年费超会" : t >= this.platinum_volume ? "开通超级会员" : "开通白金会员"
                    }
                }, {
                    key: "mounted", value: function () {
                        return De(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, this.$store.dispatch("getCofferAbout");
                                    case 3:
                                        this.showExtensionTipStat(), e.next = 9;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(0), console.error(e.t0);
                                    case 9:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, this, [[0, 6]])
                        })))
                    }
                }, {
                    key: "getAidFrom", value: function (e) {
                        switch (e) {
                            case"升级年费超会":
                            case"开通年费超会":
                                switch (this.vipType) {
                                    case f.VipType.platinum:
                                        return "hytq_bj_ysp";
                                    case f.VipType.superv:
                                        return "hytq_sp_ysp";
                                    default:
                                        return "hytq_nv_ysp"
                                }
                            case"开通超级会员":
                            case"升级超级会员":
                                switch (this.vipType) {
                                    case f.VipType.platinum:
                                        return "hytq_bj_sp";
                                    default:
                                        return "hytq_nv_sp"
                                }
                            case"开通白金会员":
                                return "hytq_nv_bj"
                        }
                    }
                }, {
                    key: "handleClickExpand", value: function () {
                        return De(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                            var t, n, i, r;
                            return regeneratorRuntime.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.privilege_window_lock) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        this.privilege_window_lock = !0;
                                    case 5:
                                        if (this.handleClickExpandEventTrack(), !this.isYearlySuper) {
                                            e.next = 17;
                                            break
                                        }
                                        return e.prev = 7, this.privilege_window_lock = !1, e.next = 11, v.client.callRemoteClientFunction("vip-download-webview", "OpenPayVipUrl", "https://pay.xunlei.com/pay.html?&referfrom=v_pc_xl11_hytq_safebox&aidfrom=hytq_sp_ysp&default_tab=supervip");
                                    case 11:
                                        return e.abrupt("return");
                                    case 14:
                                        e.prev = 14, e.t0 = e.catch(7), console.error(e.t0);
                                    case 17:
                                        if (!(t = Object(y.getPrivilegeDialogWindow)())) {
                                            e.next = 22;
                                            break
                                        }
                                        return t.show(), this.privilege_window_lock = !1, e.abrupt("return");
                                    case 22:
                                        return e.prev = 22, n = this.upgradeButtonText(), i = this.getAidFrom(n), r = this.upgradeConfirmUrl(i), e.next = 28, Object(y.openPrivilegeDialogWindow)({
                                            title: "超级保险箱空间特权",
                                            subTitle: "已用空间 <span>".concat(this.formatUsage, "</span> ,剩余空间 <span>").concat(this.formatRemaining, "</span>"),
                                            inSufficientType: this.inSufficientType,
                                            tableType: "safe",
                                            buttonText: n,
                                            url: r,
                                            dialogType: "privilege",
                                            referfrom: "v_pc_xl11_hytq_safebox",
                                            aidfrom: i,
                                            from: ""
                                        });
                                    case 28:
                                        e.next = 33;
                                        break;
                                    case 30:
                                        e.prev = 30, e.t1 = e.catch(22), console.error(e.t1);
                                    case 33:
                                        return e.prev = 33, this.privilege_window_lock = !1, e.finish(33);
                                    case 36:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, this, [[7, 14], [22, 30, 33, 36]])
                        })))
                    }
                }, {
                    key: "showExtensionTipStat", value: function () {
                        var e, t, n, i;
                        this.$eventTrack("yunpan_expansion_volume_btn_show", {
                            vip_type: this.vipType,
                            text: this.expandButtonContent,
                            is_safebox: 1
                        });
                        var r = this.$store.state.drive.driveFileList.length;
                        Object(R.vipEventTrack)("safebox_homepage_show", {
                            file_num: r,
                            max_size: ((null !== (t = +(null === (e = this.safeSpaceQuota) || void 0 === e ? void 0 : e.limit)) && void 0 !== t ? t : 0) / Ae * 1024).toFixed(1),
                            used_size: ((null !== (i = +(null === (n = this.safeSpaceQuota) || void 0 === n ? void 0 : n.usage)) && void 0 !== i ? i : 0) / Ae * 1024).toFixed(1),
                            vip_level: this.$store.state.users.curUser.vipLevel
                        }, ["is_vip", "vip_type", "is_year"])
                    }
                }, {
                    key: "handleClickExpandEventTrack", value: function () {
                        Object(R.vipEventTrack)("safebox_capacitybar_click", {
                            referfrom: "v_pc_xl11_hytq_safebox",
                            aidfrom: this.isYearlySuper ? "capabar_xufei" : "capabar_exp"
                        }, ["is_vip", "vip_type", "is_year"])
                    }
                }, {
                    key: "safeSpaceQuota", get: function () {
                        return this.$store.state.safeSpaceAbout
                    }
                }, {
                    key: "vipType", get: function () {
                        return this.$store.getters["users/curVipType"]
                    }
                }, {
                    key: "isSuperVip", get: function () {
                        return this.vipType === f.VipType.superv
                    }
                }, {
                    key: "formatUsage", get: function () {
                        return Object(p.formatSize)(this.safeSpaceQuota.usage || "")
                    }
                }, {
                    key: "formatLimit", get: function () {
                        return Object(p.formatSize)(this.safeSpaceQuota.limit || "")
                    }
                }, {
                    key: "formatRemaining", get: function () {
                        var e, t;
                        return Object(p.formatSizeWithoutByte)(+(null !== (e = this.safeSpaceQuota.limit) && void 0 !== e ? e : 0) - +(null !== (t = this.safeSpaceQuota.usage) && void 0 !== t ? t : 0) || "")
                    }
                }, {
                    key: "isYearlySuper", get: function () {
                        var e, t, n;
                        return this.vipType === f.VipType.superv && "1" === (null === (n = null === (t = null === (e = this.$store.state) || void 0 === e ? void 0 : e.users) || void 0 === t ? void 0 : t.curUser) || void 0 === n ? void 0 : n.isYear)
                    }
                }, {
                    key: "yearly_superv_volume", get: function () {
                        var e, t, n;
                        return null !== (n = null === (t = null === (e = this.$store.state.panGlobalRemoteConfig) || void 0 === e ? void 0 : e.strongbox) || void 0 === t ? void 0 : t.yearly_superv_safe_volume) && void 0 !== n ? n : 200 * Ae
                    }
                }, {
                    key: "superv_volume", get: function () {
                        var e, t, n;
                        return null !== (n = null === (t = null === (e = this.$store.state.panGlobalRemoteConfig) || void 0 === e ? void 0 : e.strongbox) || void 0 === t ? void 0 : t.superv_safe_volume) && void 0 !== n ? n : 100 * Ae
                    }
                }, {
                    key: "platinum_volume", get: function () {
                        var e, t, n;
                        return null !== (n = null === (t = null === (e = this.$store.state.panGlobalRemoteConfig) || void 0 === e ? void 0 : e.strongbox) || void 0 === t ? void 0 : t.platinum_safe_volume) && void 0 !== n ? n : 10 * Ae
                    }
                }, {
                    key: "expandButtonContent", get: function () {
                        return this.isYearlySuper ? "续费会员" : "扩大容量"
                    }
                }, {
                    key: "inSufficientType", get: function () {
                        return +this.safeSpaceQuota.limit - +this.safeSpaceQuota.usage < 1 * Ae ? this.isYearlySuper ? "yearlySuper" : this.vipType : ""
                    }
                }, {
                    key: "usePercent", get: function () {
                        var e = +this.safeSpaceQuota.usage / +this.safeSpaceQuota.limit * 100;
                        return e < 1 && e > 0 ? 1 : e
                    }
                }]), n
            }(u.Vue), Fe = Ee = je([Object(u.Component)({components: {}, methods: {formatSize: p.formatSize}})], Ee),
            Le = Object(S.a)(Fe, (function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "xly-safe-space"}, [n("i", {staticClass: "xly-icon-safe"}), e._v(" "), n("div", {staticClass: "xly-safe-space__main"}, [n("p", {staticClass: "xly-safe-space__text"}, [e._v("\n      保险箱已用空间：" + e._s(e.formatUsage) + " / " + e._s(e.formatLimit) + "\n    ")]), e._v(" "), n("td-progress", {attrs: {value: e.usePercent}})], 1), e._v(" "), n("td-button", {
                    attrs: {size: "small"},
                    on: {click: e.handleClickExpand}
                }, [e._v("\n    " + e._s(e.expandButtonContent) + "\n  ")])], 1)
            }), [], !1, null, null, null).exports;

        function $e(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var Me = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, Ve = function (e, t, n, i) {
            return new (n || (n = Promise))((function (r, o) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        }, ze = (Pe.a.withTag("components/aside/safeSpaceVolume.vue"), function (e) {
            Object(a.a)(n, e);
            var t = $e(n);

            function n() {
                var e;
                return Object(r.a)(this, n), (e = t.apply(this, arguments)).quota = {}, e.privilege_window_lock = !1, e
            }

            return Object(o.a)(n, [{
                key: "upgradeConfirmUrl", value: function (e) {
                    return "开通白金会员" === this.upgradeButtonText() ? "https://pay.xunlei.com/pay.html?referfrom=v_pc_xl11_hytq_safebox&aidfrom=".concat(e) : "https://pay.xunlei.com/pay.html?referfrom=v_pc_xl11_hytq_safebox&aidfrom=".concat(e, "&default_tab=supervip")
                }
            }, {
                key: "upgradeButtonText", value: function () {
                    var e, t = +(null !== (e = this.safeSpaceQuota.usage) && void 0 !== e ? e : 0);
                    return this.vipType === f.VipType.superv ? "升级年费超会" : [f.VipType.normalVip, f.VipType.platinum].includes(this.vipType) ? t >= this.superv_volume ? "升级年费超会" : "升级超级会员" : t >= this.superv_volume ? "开通年费超会" : t >= this.platinum_volume ? "开通超级会员" : "开通白金会员"
                }
            }, {
                key: "mounted", value: function () {
                    return Ve(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t, n, i;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, t = this.upgradeButtonText(), n = this.getAidFrom(t), i = this.upgradeConfirmUrl(n), this.inSufficientDialogShowEventTrack(), e.next = 7, Object(y.openPrivilegeDialogWindow)({
                                        title: "超级保险箱空间不足",
                                        subTitle: "移入文件大小 <span>".concat(this.formatRequired, "</span> ,剩余空间 <span>").concat(this.formatRemain, "</span>, 您还需要空间 <span>").concat(this.formatNeed, "</span>"),
                                        inSufficientType: this.inSufficientType,
                                        tableType: "safe",
                                        buttonText: t,
                                        url: i,
                                        dialogType: "safeSpaceInSufficient",
                                        referfrom: "v_pc_xl11_hytq_safebox",
                                        aidfrom: this.getAidFrom(t),
                                        from: this.from
                                    });
                                case 7:
                                    e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(0), console.error(e.t0);
                                case 12:
                                    return e.prev = 12, this.privilege_window_lock = !1, this.$destroy(), e.finish(12);
                                case 16:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[0, 9, 12, 16]])
                    })))
                }
            }, {
                key: "getAidFrom", value: function (e) {
                    switch (e) {
                        case"升级年费超会":
                        case"开通年费超会":
                            switch (this.vipType) {
                                case f.VipType.platinum:
                                    return "hytq_bj_ysp";
                                case f.VipType.superv:
                                    return "hytq_sp_ysp";
                                default:
                                    return "hytq_nv_ysp"
                            }
                        case"开通超级会员":
                        case"升级超级会员":
                            switch (this.vipType) {
                                case f.VipType.platinum:
                                    return "hytq_bj_sp";
                                default:
                                    return "hytq_nv_sp"
                            }
                        case"开通白金会员":
                            return "hytq_nv_bj"
                    }
                }
            }, {
                key: "inSufficientDialogShowEventTrack", value: function () {
                    Object(R.vipEventTrack)("safebox_outofcapacity_popup_show", {from: this.from}, ["is_vip", "vip_type", "is_year", "is_login"])
                }
            }, {
                key: "safeSpaceQuota", get: function () {
                    return this.$store.state.safeSpaceAbout
                }
            }, {
                key: "vipType", get: function () {
                    return this.$store.getters["users/curVipType"]
                }
            }, {
                key: "isSuperVip", get: function () {
                    return this.vipType === f.VipType.superv
                }
            }, {
                key: "formatRequired", get: function () {
                    return Object(p.formatSize)(this.requiredSize || "")
                }
            }, {
                key: "safeSpaceRemain", get: function () {
                    var e, t;
                    return (null !== (e = +this.$store.state.safeSpaceAbout.limit) && void 0 !== e ? e : 0) - (null !== (t = +this.$store.state.safeSpaceAbout.usage) && void 0 !== t ? t : 0)
                }
            }, {
                key: "formatRemain", get: function () {
                    return Object(p.formatSizeWithoutByte)(this.safeSpaceRemain || "")
                }
            }, {
                key: "formatNeed", get: function () {
                    return Object(p.formatSizeWithoutByte)(+this.requiredSize - this.safeSpaceRemain || "")
                }
            }, {
                key: "isYearlySuper", get: function () {
                    var e, t, n;
                    return this.vipType === f.VipType.superv && "1" === (null === (n = null === (t = null === (e = this.$store.state) || void 0 === e ? void 0 : e.users) || void 0 === t ? void 0 : t.curUser) || void 0 === n ? void 0 : n.isYear)
                }
            }, {
                key: "yearly_superv_volume", get: function () {
                    var e, t, n;
                    return null !== (n = null === (t = null === (e = this.$store.state.panGlobalRemoteConfig) || void 0 === e ? void 0 : e.strongbox) || void 0 === t ? void 0 : t.yearly_superv_safe_volume) && void 0 !== n ? n : 214748364800
                }
            }, {
                key: "superv_volume", get: function () {
                    var e, t, n;
                    return null !== (n = null === (t = null === (e = this.$store.state.panGlobalRemoteConfig) || void 0 === e ? void 0 : e.strongbox) || void 0 === t ? void 0 : t.superv_safe_volume) && void 0 !== n ? n : 107374182400
                }
            }, {
                key: "platinum_volume", get: function () {
                    var e, t, n;
                    return null !== (n = null === (t = null === (e = this.$store.state.panGlobalRemoteConfig) || void 0 === e ? void 0 : e.strongbox) || void 0 === t ? void 0 : t.platinum_safe_volume) && void 0 !== n ? n : 10737418240
                }
            }, {
                key: "normal_volume", get: function () {
                    var e, t, n;
                    return null !== (n = null === (t = null === (e = this.$store.state.panGlobalRemoteConfig) || void 0 === e ? void 0 : e.strongbox) || void 0 === t ? void 0 : t.normal_safe_volume) && void 0 !== n ? n : 0
                }
            }, {
                key: "expandButtonContent", get: function () {
                    return this.isYearlySuper ? "续费会员" : "扩大容量"
                }
            }, {
                key: "inSufficientType", get: function () {
                    return this.isYearlySuper ? "yearlySuper" : this.vipType
                }
            }]), n
        }(u.Vue));
        Me([Object(u.Prop)({})], ze.prototype, "requiredSize", void 0), Me([Object(u.Prop)({})], ze.prototype, "from", void 0);
        var Ne = ze = Me([Object(u.Component)({components: {}})], ze), Ue = Object(S.a)(Ne, (function () {
            var e = this.$createElement;
            return (this._self._c || e)("div")
        }), [], !1, null, null, null).exports, Be = n(683);

        function Ye(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var We = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, Ge = function (e, t, n, i) {
            return new (n || (n = Promise))((function (r, o) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        }, Qe = (Pe.a.withTag("components/aside/safeSpaceVolume.vue"), function (e) {
            Object(a.a)(n, e);
            var t = Ye(n);

            function n() {
                var e;
                return Object(r.a)(this, n), (e = t.apply(this, arguments)).privilege_window_lock = !1, e
            }

            return Object(o.a)(n, [{
                key: "upgradeConfirmUrl", value: function (e) {
                    return "开通会员" === this.upgradeButtonText() ? "https://pay.xunlei.com/pay.html?referfrom=v_pc_xl11_hytq_safebox&aidfrom=".concat(e) : "https://pay.xunlei.com/pay.html?referfrom=v_pc_xl11_hytq_safebox&aidfrom=".concat(e, "&default_tab=supervip")
                }
            }, {
                key: "upgradeButtonText", value: function () {
                    return [f.VipType.normalVip, f.VipType.platinum].includes(this.vipType) ? "升级超级会员" : "开通会员"
                }
            }, {
                key: "mounted", value: function () {
                    return Ge(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t, n, i;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, t = this.upgradeButtonText(), n = this.getAidFrom(), i = this.upgradeConfirmUrl(n), e.next = 6, Object(y.openPrivilegeDialogWindow)({
                                        title: "云盘空间不足",
                                        subTitle: "移入文件大小 <span>".concat(this.formatRequired, "</span> ,剩余空间 <span>").concat(this.formatRemain, "</span>, 您还需要空间 <span>").concat(this.formatNeed, "</span>"),
                                        inSufficientType: this.inSufficientType,
                                        tableType: "drive",
                                        buttonText: t,
                                        url: i,
                                        dialogType: "driveInSufficient",
                                        referfrom: "v_pc_xlx_hytq_yp_storage",
                                        aidfrom: n,
                                        from: this.from
                                    });
                                case 6:
                                    e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(0), console.error(e.t0);
                                case 11:
                                    return e.prev = 11, this.privilege_window_lock = !1, this.$destroy(), e.finish(11);
                                case 15:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[0, 8, 11, 15]])
                    })))
                }
            }, {
                key: "getAidFrom", value: function () {
                    return this.vipType === f.VipType.normal ? "yp_capa_nv" : [f.VipType.normalVip, f.VipType.platinum].includes(this.vipType) ? "yp_capa_bj" : this.vipType === f.VipType.superv ? "yp_capa_sp" : "yp_capa_ysp"
                }
            }, {
                key: "vipType", get: function () {
                    return this.$store.getters["users/curVipType"]
                }
            }, {
                key: "isSuperVip", get: function () {
                    return this.vipType === f.VipType.superv
                }
            }, {
                key: "formatRequired", get: function () {
                    return Object(p.formatSize)(this.requiredSize || "")
                }
            }, {
                key: "driveRemain", get: function () {
                    var e, t;
                    return (null !== (e = +this.$store.state.about.limit) && void 0 !== e ? e : 0) - (null !== (t = +this.$store.state.about.usage) && void 0 !== t ? t : 0)
                }
            }, {
                key: "formatRemain", get: function () {
                    return Object(p.formatSizeWithoutByte)(this.driveRemain || "")
                }
            }, {
                key: "formatNeed", get: function () {
                    return Object(p.formatSizeWithoutByte)(+this.requiredSize - this.driveRemain || "")
                }
            }, {
                key: "isYearlySuper", get: function () {
                    var e, t, n;
                    return this.vipType === f.VipType.superv && "1" === (null === (n = null === (t = null === (e = this.$store.state) || void 0 === e ? void 0 : e.users) || void 0 === t ? void 0 : t.curUser) || void 0 === n ? void 0 : n.isYear)
                }
            }, {
                key: "yearly_superv_volume", get: function () {
                    var e, t, n;
                    return null !== (n = null === (t = null === (e = this.$store.state.panGlobalRemoteConfig) || void 0 === e ? void 0 : e.strongbox) || void 0 === t ? void 0 : t.yearly_superv_safe_volume) && void 0 !== n ? n : 214748364800
                }
            }, {
                key: "superv_volume", get: function () {
                    var e, t, n;
                    return null !== (n = null === (t = null === (e = this.$store.state.panGlobalRemoteConfig) || void 0 === e ? void 0 : e.strongbox) || void 0 === t ? void 0 : t.superv_safe_volume) && void 0 !== n ? n : 107374182400
                }
            }, {
                key: "platinum_volume", get: function () {
                    var e, t, n;
                    return null !== (n = null === (t = null === (e = this.$store.state.panGlobalRemoteConfig) || void 0 === e ? void 0 : e.strongbox) || void 0 === t ? void 0 : t.platinum_safe_volume) && void 0 !== n ? n : 10737418240
                }
            }, {
                key: "normal_volume", get: function () {
                    var e, t, n;
                    return null !== (n = null === (t = null === (e = this.$store.state.panGlobalRemoteConfig) || void 0 === e ? void 0 : e.strongbox) || void 0 === t ? void 0 : t.normal_safe_volume) && void 0 !== n ? n : 0
                }
            }, {
                key: "expandButtonContent", get: function () {
                    return this.isYearlySuper ? "续费会员" : "扩大容量"
                }
            }, {
                key: "inSufficientType", get: function () {
                    return this.vipType
                }
            }]), n
        }(u.Vue));
        We([Object(u.Prop)({})], Qe.prototype, "requiredSize", void 0), We([Object(u.Prop)({})], Qe.prototype, "from", void 0);
        var Ze = Qe = We([Object(u.Component)({components: {}})], Qe), Xe = Object(S.a)(Ze, (function () {
            var e = this.$createElement;
            return (this._self._c || e)("div")
        }), [], !1, null, null, null).exports;

        function Je(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var He = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, qe = function (e, t, n, i) {
            return new (n || (n = Promise))((function (r, o) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        }, Ke = Pe.a.withTag("CollapseItemContainer.vue"), et = function (e) {
            Object(a.a)(n, e);
            var t = Je(n);

            function n() {
                var e;
                return Object(r.a)(this, n), (e = t.apply(this, arguments)).showServeProtocol = !1, e.sortTypeListVisible = !1, e.dragCursorPosition = {
                    x: 0,
                    y: 0
                }, e.safeSpaceInsufficientProp = {
                    required: "",
                    free: "",
                    from: ""
                }, e.driveInsufficientProp = {
                    required: "",
                    free: "",
                    from: ""
                }, e.syncTaskListener = null, e._curRenameItemId = "", e.contextMenuVisible = !1, e.currentContextClickInfo = {
                    x: 0,
                    y: 0
                }, e.isOutOfContextMenu = !0, e.loadingMore = !1, e.isConsumingFile = !1, e.picked = [], e.isDragging = !1, e.allPickedInfo = {
                    indeterminate: !1,
                    checked: !1,
                    text: "全选"
                }, e.dropDirName = "", e.lastChosenIndex = 0, e.lastChosenItemId = "", e.currentDragOverItemId = "", e.lastDragClientY = -1, e.showSafeSpaceInsufficient = !1, e.showDriveInsufficient = !1, e
            }

            return Object(o.a)(n, [{
                key: "mounted", value: function () {
                    this.handleShowServeProtocol(), this.registerTaskEventMQ()
                }
            }, {
                key: "registerTaskEventMQ", value: function () {
                    var e = this;
                    Object(b.callRemote)("User", "SyncStartReceiver", "/user/me/drive/tasks").then((function (e) {
                        void 0 !== e[1] ? console.error("error = ", e[1]) : console.log("receving from topic: ", e)
                    }), console.error), this.syncTaskListener = Object(b.attachEvent)("SyncMessage-".concat("/user/me/drive/tasks"), (function (t, n) {
                        try {
                            n = JSON.parse(n)
                        } catch (e) {
                            return void console.error(e)
                        }
                        if (n.data) {
                            var i = n.data, r = i.id, o = i.phase;
                            if (e.taskCallbackMap[r]) {
                                var a = e.taskCallbackMap[r], s = a.onSuccess, c = a.onError;
                                "PHASE_TYPE_COMPLETE" === o ? s && s(n) : c && c(n), e.$store.commit("drive/setTaskCallbackMap", {
                                    id: r,
                                    callbackObj: {},
                                    operation: "delete"
                                })
                            }
                        }
                    }))
                }
            }, {
                key: "handleShowServeProtocol", value: function () {
                    var e, t = window.localStorage.getItem("serve-protocol");
                    if (t) {
                        try {
                            e = JSON.parse(t)
                        } catch (t) {
                            e = {}
                        }
                        e[this.userId] || (this.showServeProtocol = !0, e = Object.assign(Object.assign({}, e), Object(d.a)({}, this.userId, "1")))
                    } else e = Object(d.a)({}, this.userId, "1"), this.showServeProtocol = !0;
                    window.localStorage.setItem("serve-protocol", JSON.stringify(e))
                }
            }, {
                key: "handleListAllPickedClick", value: function () {
                    "drive" === this.active ? this.$eventTrack("yunpan_filelist_option_click", {clickid: "all_select"}) : this.$eventTrack("recycler_operation_click", {clickid: "all_select"});
                    var e = this.allPickedInfo, t = e.indeterminate, n = e.checked;
                    t ? (this.allPickedInfo.indeterminate = !1, this.allPickedInfo.checked = !0) : this.allPickedInfo.checked = !n, this.changeAllFileListItem(this.allPickedInfo.checked)
                }
            }, {
                key: "changeAllFileListItem", value: function (e) {
                    var t = this;
                    this.picked = e ? this.pathList.filter((function (e) {
                        return !t.systemFolderTypeList.includes(e.folder_type)
                    })).map((function (e) {
                        return e.id
                    })) : []
                }
            }, {
                key: "handleClickFileListItem", value: function (e, t, n, i) {
                    if (!e.__mode || !["create", "rename"].includes(e.__mode)) {
                        if (n.shiftKey) {
                            var r = Math.min(this.lastChosenIndex, t), o = Math.max(this.lastChosenIndex, t);
                            this.picked = this.pathList.slice(r, o + 1).filter((function (e) {
                                return !Object(m.isSystemDirectory)(e.folder_type)
                            })).map((function (e) {
                                return e.id
                            })).filter((function (t) {
                                return !i || t !== e.id
                            }))
                        } else if (n.ctrlKey) {
                            if ("NORMAL" !== e.folder_type) return;
                            if (!i) {
                                var a = this.picked.indexOf(e.id);
                                a > -1 ? this.picked.splice(a, 1) : this.picked.push(e.id)
                            }
                            this.lastChosenIndex = t, this.lastChosenItemId = e.id
                        } else i || (this.picked = [e.id]), this.lastChosenIndex = t, this.lastChosenItemId = e.id;
                        var s = Object(R.checkStatFileType)(e.file_extension);
                        this.$eventTrack("yunpan_filelist_single_click", {
                            file_type: "drive#folder" === e.kind ? "folder" : s,
                            clickid: "other_black",
                            is_safebox: +this.$store.getters["drive/inSafeSpace"],
                            vip_type: this.$store.getters["users/curVipType"],
                            is_year: this.$store.getters["users/isYearRaw"]
                        })
                    }
                }
            }, {
                key: "handleChangeSortType", value: function (e) {
                    var t = this;
                    this.sortTypeListVisible = !1;
                    var n = {type: e, order: 1};
                    this.sortInfo.type === e && (n.order = -1 * this.sortInfo.order);
                    var i = this.$refs.list.scrollTop;
                    this.$store.commit("drive/setDriveSortInfo", {
                        tabType: this.active,
                        info: n
                    }), this.$store.commit("drive/sortFileList", this.active), this.$nextTick((function () {
                        t.$refs.list.scrollTop = i
                    }))
                }
            }, {
                key: "handleDragEnd", value: function (e) {
                    this.isDragging = !1, this.dropDirName = "", this.currentDragOverItemId = "", this.lastDragClientY = -1
                }
            }, {
                key: "handleDrop", value: function (e) {
                    return qe(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        var n, i = this;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if ("drive#file" !== e.kind && !this.picked.includes(e.id)) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    if (n = this.pathList.filter((function (e) {
                                        return i.picked.includes(e.id)
                                    })), e.id !== this.safeSpaceId) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.next = 6, this.handleMoveInOutSafeSpace("in", {type: "drop"});
                                case 6:
                                    t.next = 10;
                                    break;
                                case 8:
                                    return t.next = 10, this.handleMoveConfirm(n, e, {
                                        type: "drop",
                                        to_space: this.inSafeSpace ? "SPACE_SAFE" : ""
                                    });
                                case 10:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })))
                }
            }, {
                key: "handleDragging", value: function (e) {
                    var t = e.clientX, n = e.clientY,
                        i = -1 === this.lastDragClientY || Math.abs(n - this.lastDragClientY) < 20;
                    if (this.lastDragClientY = n, i) {
                        this.dragCursorPosition = {x: t, y: n};
                        var r = this.listRefTop, o = this.listRefTop + this.listRefHeight;
                        if (n < r) {
                            var a = r - n;
                            this.$refs.list.scrollTop -= a
                        } else if (n > o) {
                            var s = n - o;
                            this.$refs.list.scrollTop += s
                        }
                    }
                }
            }, {
                key: "handleDragStart", value: function (e, t) {
                    e.__mode || "trash" === this.tabType || this.systemFolderTypeList.includes(e.folder_type) ? t.preventDefault() : (t.dataTransfer && t.dataTransfer.setDragImage(document.createElement("span"), 0, 0), this.isDragging = !0)
                }
            }, {
                key: "handleDragOver", value: function (e, t) {
                    this.currentDragOverItemId = e.id, t.dataTransfer && (t.dataTransfer.dropEffect = "move"), this.picked.includes(e.id) || "drive#folder" !== e.kind ? this.dropDirName = "" : this.dropDirName = e.name
                }
            }, {
                key: "handleClickSortTypeList", value: function () {
                    "drive" === this.active ? this.$eventTrack("yunpan_filelist_option_click", {clickid: "sort"}) : this.$eventTrack("recycler_operation_click", {clickid: "sort"}), this.sortTypeListVisible = !this.sortTypeListVisible
                }
            }, {
                key: "resetItem__Mode", value: function (e) {
                    this.$store.commit("drive/replaceFileItem", {
                        type: "drive",
                        item: Object.assign(Object.assign({}, e), {__mode: ""})
                    })
                }
            }, {
                key: "auditFilter", value: function (e) {
                    var t, n;
                    return null === e.audit || (null === (t = null == e ? void 0 : e.audit) || void 0 === t ? void 0 : t.status) === Te.AuditStatus.OK || (null === (n = null == e ? void 0 : e.audit) || void 0 === n ? void 0 : n.status) === Te.AuditStatus.UNKNOW
                }
            }, {
                key: "auditAndCompleteFilter", value: function (e) {
                    var t, n;
                    return "PHASE_TYPE_COMPLETE" === e.phase && (null === e.audit || (null === (t = null == e ? void 0 : e.audit) || void 0 === t ? void 0 : t.status) === Te.AuditStatus.OK || (null === (n = null == e ? void 0 : e.audit) || void 0 === n ? void 0 : n.status) === Te.AuditStatus.UNKNOW)
                }
            }, {
                key: "handleCreateInputConfirm", value: function () {
                    var e = this, t = this.getCreateInputElement();
                    if (t) if (this.clearPickedItems(), this._curRenameItemId) {
                        var n = this.idItemMap[this._curRenameItemId];
                        if (this._curRenameItemId = "", !n) return;
                        var i = t.value;
                        if (n.name === i) this.resetItem__Mode(n); else {
                            if (/[\\/:*?"<>|]/.test(i)) return this.$message.error('名称不能包含\\/:*?"<>|等特殊字符'), void this.resetItem__Mode(n);
                            if (this.pathList.some((function (e) {
                                return e.name === i
                            }))) return this.$message.error("已存在同类型的重名文件，请重试"), void this.resetItem__Mode(n);
                            this.$store.dispatch("drive/updateFile", {id: n.id, params: {name: i}}).then((function (t) {
                                e.$store.commit("drive/replaceFileItem", {
                                    type: "drive",
                                    item: t
                                }), e.$message.success("重命名成功")
                            })).catch((function (t) {
                                console.error(t), e.resetItem__Mode(n), e.$message.error("修改未成功，请稍后重试")
                            }))
                        }
                    } else this.$emit("confirmCreate", t.value)
                }
            }, {
                key: "handleCancelMultiUploadingTask", value: function (e) {
                    return qe(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        var n, i, r, o, a;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    for (n = [], i = [], r = [], o = 0; o < e.length; o++) e[o].__kind__ ? (i.push(e[o].__taskid__), "drive#folder" === e[o].kind && r.push(e[o].id)) : n.push(e[o].__taskid__);
                                    if (a = [], n.length && a.push(this.$store.dispatch("local-upload/cancel", n)), i.length && a.push(this.$store.dispatch("url-task-list/ipcRemoveUrlTasks", i)), !a.length) {
                                        t.next = 10;
                                        break
                                    }
                                    return t.next = 10, Promise.all(a);
                                case 10:
                                    if (!r.length) {
                                        t.next = 18;
                                        break
                                    }
                                    return t.prev = 11, t.next = 14, Object(q.b)(r);
                                case 14:
                                    t.next = 18;
                                    break;
                                case 16:
                                    t.prev = 16, t.t0 = t.catch(11);
                                case 18:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this, [[11, 16]])
                    })))
                }
            }, {
                key: "handleCancelUploading", value: function (e) {
                    return qe(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, ce.a.callServerFunction("ClosePlay"), t.next = 4, Object(oe.a)(ae.a)({
                                        title: "删除",
                                        content: "确定要删除所选任务吗？",
                                        danger: !0,
                                        confirmText: "删除"
                                    });
                                case 4:
                                    return t.next = 6, this.handleCancelMultiUploadingTask([e]);
                                case 6:
                                    this.clearPickedItems(), t.next = 11;
                                    break;
                                case 9:
                                    t.prev = 9, t.t0 = t.catch(0);
                                case 11:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this, [[0, 9]])
                    })))
                }
            }, {
                key: "getCreateInputElement", value: function () {
                    var e = this.$refs.mediaBlock, t = [];
                    return e.forEach((function (e) {
                        t.push(e.$el.querySelector("input"))
                    })), (t = t.filter(Boolean)) && t.length ? t[0] : null
                }
            }, {
                key: "handleConsumeFileOrDirectory", value: function (e, t) {
                    return qe(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                        var r, o, a, s, c;
                        return regeneratorRuntime.wrap((function (n) {
                            for (; ;) switch (n.prev = n.next) {
                                case 0:
                                    if (!["PHASE_TYPE_PENDING", "PHASE_TYPE_RUNNING"].includes(e.phase) || "media" === Object(p.checkCanPreview)(e.file_extension, e.mime_type)) {
                                        n.next = 3;
                                        break
                                    }
                                    return this.$message({
                                        id: "handleConsumeFileOrDirectory",
                                        unique: !0,
                                        position: "middle",
                                        type: "error",
                                        message: "暂不支持在线预览，请于添加完成后下载查看"
                                    }), n.abrupt("return");
                                case 3:
                                    if ("trash" !== this.active) {
                                        n.next = 6;
                                        break
                                    }
                                    return this.$message({
                                        id: "handleConsumeFileOrDirectory",
                                        unique: !0,
                                        position: "middle",
                                        type: "error",
                                        message: "回收站暂时不支持查看，请还原后再试"
                                    }), n.abrupt("return");
                                case 6:
                                    if (r = Object(R.checkStatFileType)(e.file_extension), "click" === t.trigger ? (this.$eventTrack("yunpan_filelist_single_click", {
                                        file_type: "drive#folder" === e.kind ? "folder" : r,
                                        clickid: "title",
                                        is_safebox: +this.$store.getters["drive/inSafeSpace"],
                                        vip_type: this.$store.getters["users/curVipType"],
                                        is_year: this.$store.getters["users/isYearRaw"]
                                    }), Object(R.vipEventTrack)("safebox_entry_click", {click_type: "single"}, ["is_login", "is_vip", "vip_type", "is_year", "is_new_user", "is_set_psd", "is_input_psd"]), Object(R.consumeStat)(e.file_extension, "yunpan_filelist_fastkey_click", e.mime_type)) : "contextmenu" === t.trigger ? Object(R.consumeStat)(e.file_extension, "yunpan_filelist_rightkey_click", e.mime_type) : "dblclick" === t.trigger && (this.$eventTrack("yunpan_filelist_double_click", Object.assign({file_type: "drive#folder" === e.kind ? "folder" : r}, this.commonSafeSpaceStatInfo)), Object(R.vipEventTrack)("safebox_entry_click", {click_type: "double"}, ["is_login", "is_vip", "vip_type", "is_year", "is_new_user", "is_set_psd", "is_input_psd"]), Object(R.consumeStat)(e.file_extension, "yunpan_filelist_double_click", e.mime_type)), !e || "SAFE" !== e.folder_type) {
                                        n.next = 19;
                                        break
                                    }
                                    return n.prev = 9, n.next = 12, this.$store.dispatch("password/showWelcomePop", {});
                                case 12:
                                    return n.next = 14, this.$store.dispatch("password/enterSafe", {});
                                case 14:
                                    n.next = 19;
                                    break;
                                case 16:
                                    return n.prev = 16, n.t0 = n.catch(9), n.abrupt("return");
                                case 19:
                                    if ("drive#folder" !== e.kind) {
                                        n.next = 39;
                                        break
                                    }
                                    if (this.clearPickedItems(), !this.isConsumingFile) {
                                        n.next = 23;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 23:
                                    return this.isConsumingFile = !0, n.prev = 24, this.$store.commit("drive/setParentIdMap", {drive: e.id}), n.next = 28, this.$store.dispatch("drive/getFileList", {
                                        parent_id: this.parentIdMap[this.active],
                                        __type: this.active,
                                        refresh: !0,
                                        __sync: !0
                                    });
                                case 28:
                                    this.$store.commit("drive/setDriveRouteList", [].concat(Object(i.a)(this.driveRouteList), [Object.assign(Object.assign({}, e), {title: e.name})])), n.next = 34;
                                    break;
                                case 31:
                                    n.prev = 31, n.t1 = n.catch(24), console.error(n.t1);
                                case 34:
                                    return n.prev = 34, this.isConsumingFile = !1, n.finish(34);
                                case 37:
                                    n.next = 59;
                                    break;
                                case 39:
                                    if (!e.audit || !["STATUS_SENSITIVE_RESOURCE", "STATUS_SENSITIVE_WORD"].includes(e.audit.status)) {
                                        n.next = 42;
                                        break
                                    }
                                    return this.$message({
                                        id: "handleConsumeFileOrDirectory",
                                        unique: !0,
                                        position: "middle",
                                        type: "error",
                                        message: e.audit.title
                                    }), n.abrupt("return");
                                case 42:
                                    if ("other" === Object(p.checkCanPreview)(e.file_extension, e.mime_type)) {
                                        n.next = 51;
                                        break
                                    }
                                    "click" === t.trigger && (this.picked = [e.id]), a = null == (o = {
                                        click: "yunpan_file_list_single_click",
                                        dblclick: "yunpan_file_list_double_click",
                                        contextmenu: "yunpan_file_list_rk"
                                    }) ? void 0 : o[t.trigger], "drive#task" === e.__kind__ && (a = "yunpan_file_list_adding_click"), s = {
                                        fileId: e.id,
                                        isPlayInstantly: !0,
                                        mode: t.mode,
                                        playFrom: a
                                    }, this.auditFilter(e) ? this.$store.dispatch("drive/showFileDetail", s) : this.$message.error(e.audit.message), n.next = 59;
                                    break;
                                case 51:
                                    if (".torrent" !== String(e.file_extension).toLowerCase()) {
                                        n.next = 58;
                                        break
                                    }
                                    return n.next = 54, this.$store.dispatch("drive/getFileInfo", e.id);
                                case 54:
                                    c = n.sent, Object(b.analyzeTorrent)(c.id, c.web_content_link), n.next = 59;
                                    break;
                                case 58:
                                    this.unzipEnable && T.a.supportUzip.includes(e.file_extension) ? this.handleUnzip() : this.$message({
                                        id: "handleConsumeFileOrDirectory",
                                        unique: !0,
                                        position: "middle",
                                        type: "error",
                                        message: "暂不支持在线预览，请下载后查看"
                                    });
                                case 59:
                                case"end":
                                    return n.stop()
                            }
                        }), n, this, [[9, 16], [24, 31, 34, 37]])
                    })))
                }
            }, {
                key: "handleContextMenu", value: function (e, t) {
                    if (!e) {
                        if (!this.pathList.length && "trash" === this.active) return;
                        this.clearPickedItems()
                    }
                    this.currentContextClickInfo = {
                        x: t.clientX,
                        y: t.clientY
                    }, e && e.__mode && "create" === e.__mode || (e && !this.picked.includes(e.id) && (this.picked = [e.id]), e && this.systemFolderTypeList.includes(e.folder_type) ? this.contextMenuVisible = !1 : this.contextMenuVisible = !0)
                }
            }, {
                key: "getIconType", value: function (e) {
                    return "drive#folder" === e.kind ? "group" : Object(m.fileExtToIconType)(e.mime_type)
                }
            }, {
                key: "handleClickContextMenuItem", value: function (e, t) {
                    return qe(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                        return regeneratorRuntime.wrap((function (n) {
                            for (; ;) switch (n.prev = n.next) {
                                case 0:
                                    this.clickContextMenuItemEventTracking(e), n.t0 = e, n.next = "新建文件夹" === n.t0 ? 4 : "排序" === n.t0 ? 6 : "刷新" === n.t0 ? 10 : "复制到" === n.t0 ? 12 : "移入保险箱" === n.t0 ? 18 : "移出保险箱" === n.t0 ? 20 : "移动到" === n.t0 ? 22 : "删除" === n.t0 ? 28 : "全部还原" === n.t0 ? 34 : "还原" === n.t0 ? 35 : "彻底删除" === n.t0 ? 37 : "重命名" === n.t0 ? 39 : "清空回收站" === n.t0 ? 45 : "打开" === n.t0 || "在线播放" === n.t0 ? 47 : "下载" === n.t0 ? 49 : "分享" === n.t0 ? 51 : "在线解压" === n.t0 ? 53 : 55;
                                    break;
                                case 4:
                                    return this.$emit("createNewDirectory"), n.abrupt("break", 56);
                                case 6:
                                    if (t) {
                                        n.next = 8;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 8:
                                    return this.handleChangeSortType(t), n.abrupt("break", 56);
                                case 10:
                                    return this.$emit("refresh", !0), n.abrupt("break", 56);
                                case 12:
                                    return n.next = 14, this.checkOperationListItemIsPlay();
                                case 14:
                                    if (!n.sent) {
                                        n.next = 16;
                                        break
                                    }
                                    ce.a.callServerFunction("ClosePlay");
                                case 16:
                                    return this.handleMoveOrCopy("copy"), n.abrupt("break", 56);
                                case 18:
                                    return this.handleMoveInOutSafeSpace("in"), n.abrupt("break", 56);
                                case 20:
                                    return this.handleMoveInOutSafeSpace("out"), n.abrupt("break", 56);
                                case 22:
                                    return n.next = 24, this.checkOperationListItemIsPlay();
                                case 24:
                                    if (!n.sent) {
                                        n.next = 26;
                                        break
                                    }
                                    ce.a.callServerFunction("ClosePlay");
                                case 26:
                                    return this.handleMoveOrCopy("move"), n.abrupt("break", 56);
                                case 28:
                                    return n.next = 30, this.checkOperationListItemIsPlay();
                                case 30:
                                    if (!n.sent) {
                                        n.next = 32;
                                        break
                                    }
                                    ce.a.callServerFunction("ClosePlay");
                                case 32:
                                    return this.handleTrash(), n.abrupt("break", 56);
                                case 34:
                                    this.picked = this.pathList.map((function (e) {
                                        return e.id
                                    }));
                                case 35:
                                    return this.handleUnTrash(), n.abrupt("break", 56);
                                case 37:
                                    return this.handleDeleteFileInTrash(), n.abrupt("break", 56);
                                case 39:
                                    return n.next = 41, this.checkOperationListItemIsPlay();
                                case 41:
                                    if (!n.sent) {
                                        n.next = 43;
                                        break
                                    }
                                    ce.a.callServerFunction("ClosePlay");
                                case 43:
                                    return this.handleRenameFile(), n.abrupt("break", 56);
                                case 45:
                                    return this.$emit("clearTrash"), n.abrupt("break", 56);
                                case 47:
                                    return 1 === this.pickedItemList.length && this.handleConsumeFileOrDirectory(this.pickedItemList[0], {
                                        mode: "panel",
                                        trigger: "contextmenu"
                                    }), n.abrupt("break", 56);
                                case 49:
                                    return this.handleFetchBackFile(), n.abrupt("break", 56);
                                case 51:
                                    return this.handleShareFile(), n.abrupt("break", 56);
                                case 53:
                                    return this.handleUnzip(), n.abrupt("break", 56);
                                case 55:
                                    return n.abrupt("break", 56);
                                case 56:
                                case"end":
                                    return n.stop()
                            }
                        }), n, this)
                    })))
                }
            }, {
                key: "handleUnzip", value: function () {
                    return qe(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    t = this.pickedItemList[0], this.unzipFile(t);
                                case 2:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "handleMoveInOutSafeSpace", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return qe(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                        var i, r = this;
                        return regeneratorRuntime.wrap((function (n) {
                            for (; ;) switch (n.prev = n.next) {
                                case 0:
                                    if (n.prev = 0, i = this.pathList.filter((function (e) {
                                        return r.picked.includes(e.id)
                                    })), "in" !== e || !this.safeSpaceId) {
                                        n.next = 6;
                                        break
                                    }
                                    return n.abrupt("return", this.handleMoveConfirm(i, {id: this.safeSpaceId}, Object.assign(Object.assign({to_space: "SPACE_SAFE"}, t), {dest: "coffer"})));
                                case 6:
                                    return n.abrupt("return", this.handleMoveConfirm(i, {id: ""}, Object.assign(Object.assign({}, t), {to_space: ""})));
                                case 7:
                                    n.next = 13;
                                    break;
                                case 9:
                                    return n.prev = 9, n.t0 = n.catch(0), console.error(n.t0), n.abrupt("return", !1);
                                case 13:
                                case"end":
                                    return n.stop()
                            }
                        }), n, this, [[0, 9]])
                    })))
                }
            }, {
                key: "clickContextMenuItemEventTracking", value: function (e) {
                    var t = {
                            "在线播放": "online_play",
                            "打开": "open",
                            "下载": "getback",
                            "分享": "share",
                            "复制到": "copy",
                            "移动到": "move",
                            "删除": "delete",
                            "重命名": "rename",
                            "移入保险箱": "movein_safebox",
                            "移出保险箱": "moveout_safebox",
                            "在线解压": "online_decompress"
                        }, n = {"彻底删除": "delete", "还原": "recovery"}, i = {"清空回收站": "all_delete", "全部还原": "all_recovery"},
                        r = this.getSelectedFileType();
                    t[e] ? this.$eventTrack("yunpan_filelist_rk_click", {
                        clickid: t[e],
                        file_type: r,
                        is_safebox: +this.$store.getters["drive/inSafeSpace"],
                        vip_type: this.$store.getters["users/curVipType"],
                        is_year: this.$store.getters["users/isYearRaw"]
                    }) : n[e] ? this.$eventTrack("recycler_select_rk_click", {clickid: n[e]}) : i[e] && this.$eventTrack("recycler_rk_click", {clickid: i[e]})
                }
            }, {
                key: "getSelectedFileType", value: function () {
                    if (1 === this.selectedFiles.length) {
                        var e = this.selectedFiles[0];
                        return "drive#folder" === e.kind ? "folder" : "media" === Object(p.checkCanPreview)(e.file_extension, e.mime_type) ? "video" : "not_video"
                    }
                    return "multiple_file"
                }
            }, {
                key: "checkOperationListItemIsPlay", value: function () {
                    return qe(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(m.containsCurrentPreviewFile)(this.picked);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "handleRenameFile", value: function () {
                    var e = this, t = this.pickedItemList[0];
                    t && (this.$store.commit("drive/clearFileMode", {type: "drive"}), this.$store.commit("drive/replaceFileItem", {
                        type: "drive",
                        item: Object.assign(Object.assign({}, t), {__mode: "rename"})
                    }), this._curRenameItemId = t.id, setTimeout((function () {
                        var t = e.getCreateInputElement();
                        if (t) {
                            var n = t.value.lastIndexOf(".");
                            t.focus(), n > -1 ? t.setSelectionRange(0, n, "forward") : t.select()
                        }
                    })))
                }
            }, {
                key: "handleUnTrash", value: function () {
                    return qe(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t, n;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, n = this.pickedItemList.map((function (e) {
                                        return e.id
                                    })), t = this.$message({
                                        message: "恢复中...",
                                        duration: 0,
                                        type: "warning",
                                        position: "middle"
                                    }), e.next = 5, this.$store.dispatch("drive/batchUntrashFiles", {ids: n});
                                case 5:
                                    this.$message.success("还原成功"), this.clearPickedItems(), e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(0), this.$message.error(e.t0);
                                case 12:
                                    return e.prev = 12, t && t.hide(), e.finish(12);
                                case 15:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[0, 9, 12, 15]])
                    })))
                }
            }, {
                key: "handleFetchBackFile", value: function () {
                    var e = this, t = [], n = this.selectedFiles.filter(this.auditAndCompleteFilter);
                    n.length > 0 ? (n.forEach((function (e) {
                        e.id && t.push({id: e.id, name: e.name, kind: e.kind, size: e.size, icon_link: e.icon_link})
                    })), this.$store.dispatch("drive/fetchBackFiles", t).catch((function () {
                        e.$message.error("获取文件信息失败")
                    }))) : this.$message({message: "无法下载", type: "error", position: "middle", duration: 3e3})
                }
            }, {
                key: "handleShareFile", value: function () {
                    return qe(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, this.$store.dispatch("checkRealNameAuth", "yunpan_tab");
                                case 3:
                                    this.createShareWindow(), e.next = 9;
                                    break;
                                case 6:
                                    e.prev = 6, e.t0 = e.catch(0), this.$raven.error(e.t0);
                                case 9:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[0, 6]])
                    })))
                }
            }, {
                key: "createShareWindow", value: function () {
                    var e = this.selectedFiles.filter(this.auditAndCompleteFilter);
                    e.length > 0 ? this.$store.dispatch("share/shareFiles", e) : this.$message({
                        message: "无法分享",
                        type: "error",
                        position: "middle",
                        duration: 3e3
                    })
                }
            }, {
                key: "handleDeleteFileInTrash", value: function () {
                    return qe(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t, n;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Object(oe.a)(ae.a)({
                                        title: "删除文件",
                                        content: "文件删除后将无法恢复，您确认要彻底删除所选文件?",
                                        danger: !0,
                                        confirmText: "删除"
                                    });
                                case 3:
                                    e.next = 8;
                                    break;
                                case 5:
                                    return e.prev = 5, e.t0 = e.catch(0), e.abrupt("return");
                                case 8:
                                    return e.prev = 8, n = this.pickedItemList.map((function (e) {
                                        return e.id
                                    })), t = this.$message({
                                        message: "删除中...",
                                        duration: 0,
                                        type: "warning",
                                        position: "middle"
                                    }), e.next = 13, this.$store.dispatch("drive/batchDeleteFiles", {
                                        ids: n,
                                        type: this.active
                                    });
                                case 13:
                                    this.$store.dispatch("getAbout"), this.clearPickedItems(), this.$message.success("删除成功"), e.next = 21;
                                    break;
                                case 18:
                                    e.prev = 18, e.t1 = e.catch(8), this.$message.error(Object(p.getErrorDescription)(e.t1));
                                case 21:
                                    return e.prev = 21, t && t.hide(), e.finish(21);
                                case 24:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[0, 5], [8, 18, 21, 24]])
                    })))
                }
            }, {
                key: "handleDeleteFileInSafeSpace", value: function (e) {
                    return qe(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        var n, i;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, this.$eventTrack("yunpan_delete_pop_show", {
                                        is_prolong_textlink: this.vipType !== f.VipType.superv ? 1 : 0,
                                        vip_type: this.vipType,
                                        is_safebox: this.inSafeSpace ? 1 : 0
                                    }), t.next = 4, Object(oe.a)(ae.a)({
                                        title: "确认删除所选的文件/文件夹",
                                        content: "保险箱文件将直接删除，不会存放回收站",
                                        danger: !0,
                                        confirmText: "删除"
                                    });
                                case 4:
                                    this.$eventTrack("yunpan_delete_pop_click", {
                                        clickid: "confim",
                                        vip_type: this.vipType,
                                        is_safebox: +this.inSafeSpace
                                    }), t.next = 11;
                                    break;
                                case 7:
                                    return t.prev = 7, t.t0 = t.catch(0), this.$eventTrack("yunpan_delete_pop_click", {
                                        clickid: "cancel",
                                        vip_type: this.vipType,
                                        is_safebox: +this.inSafeSpace
                                    }), t.abrupt("return");
                                case 11:
                                    return t.prev = 11, i = e.map((function (e) {
                                        return e.id
                                    })), n = this.$message({
                                        message: "删除中...",
                                        duration: 0,
                                        type: "warning",
                                        position: "middle"
                                    }), t.next = 16, this.$store.dispatch("drive/batchDeleteFiles", {
                                        ids: i,
                                        type: this.active
                                    });
                                case 16:
                                    this.$store.dispatch("getAbout"), this.clearPickedItems(), this.$message.success("删除成功"), t.next = 24;
                                    break;
                                case 21:
                                    t.prev = 21, t.t1 = t.catch(11), this.$message.error(Object(p.getErrorDescription)(t.t1));
                                case 24:
                                    return t.prev = 24, n && n.hide(), t.finish(24);
                                case 27:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this, [[0, 7], [11, 21, 24, 27]])
                    })))
                }
            }, {
                key: "handleTrash", value: function () {
                    return qe(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t, n, i, r, o, a, s = this;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = this.pathList.filter((function (e) {
                                        return s.picked.includes(e.id)
                                    })), !this.inSafeSpace) {
                                        e.next = 4;
                                        break
                                    }
                                    return this.handleDeleteFileInSafeSpace(t), e.abrupt("return");
                                case 4:
                                    for (n = [], i = [], r = 0; r < t.length; r++) ["PHASE_TYPE_PENDING", "PHASE_TYPE_RUNNING"].includes(t[r].phase) ? n.push(t[r]) : i.push(t[r].id);
                                    if (o = this.picked.length, e.prev = 8, i.length !== o) {
                                        e.next = 14;
                                        break
                                    }
                                    return e.next = 12, Object(oe.a)(re)({
                                        vipType: this.vipType,
                                        callerInstance: this,
                                        danger: !0,
                                        confirmText: "删除"
                                    });
                                case 12:
                                    e.next = 16;
                                    break;
                                case 14:
                                    return e.next = 16, Object(oe.a)(ae.a)({
                                        title: "删除",
                                        content: "确定要删除所选任务吗？",
                                        danger: !0,
                                        confirmText: "删除"
                                    });
                                case 16:
                                    e.next = 21;
                                    break;
                                case 18:
                                    return e.prev = 18, e.t0 = e.catch(8), e.abrupt("return");
                                case 21:
                                    return e.prev = 21, a = this.$message({
                                        message: "删除中...",
                                        duration: 0,
                                        type: "warning",
                                        position: "middle"
                                    }), e.next = 25, Promise.all([this.$store.dispatch("drive/batchTrashFiles", {ids: i}), this.handleCancelMultiUploadingTask(n)]);
                                case 25:
                                    return this.clearPickedItems(), e.next = 28, ce.a.callRemoteClientFunction("ThunderPanPluginRecycleBin", "onTrash", {});
                                case 28:
                                    e.next = 34;
                                    break;
                                case 30:
                                    e.prev = 30, e.t1 = e.catch(21), this.$message.error("删除失败"), console.error(e.t1);
                                case 34:
                                    return e.prev = 34, a && a.hide(), e.finish(34);
                                case 37:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[8, 18], [21, 30, 34, 37]])
                    })))
                }
            }, {
                key: "setTaskCallbackMap", value: function (e) {
                    var t = e.id, n = e.callbackObj;
                    this.$store.commit("drive/setTaskCallbackMap", {id: t, callbackObj: n, operation: "set"})
                }
            }, {
                key: "toastShowEventTrack", value: function (e, t) {
                    var n, i;
                    Object(R.vipEventTrack)("safebox_movein_toast_show", {
                        file_num: Number(null === (n = null == e ? void 0 : e.params) || void 0 === n ? void 0 : n.invalid_file_count) + Number(null === (i = null == e ? void 0 : e.params) || void 0 === i ? void 0 : i.valid_file_count),
                        success_num: Number(null == e ? void 0 : e.params.valid_file_count),
                        type: t
                    }, ["is_login", "is_vip", "vip_type", "is_year"])
                }
            }, {
                key: "handleMoveConfirm", value: function (e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {to_space: this.inSafeSpace ? "SPACE_SAFE" : ""};
                    return qe(this, void 0, void 0, regeneratorRuntime.mark((function i() {
                        var r, o, a, s, c, l = this;
                        return regeneratorRuntime.wrap((function (i) {
                            for (; ;) switch (i.prev = i.next) {
                                case 0:
                                    if (i.prev = 0, !((r = e.filter(this.auditAndCompleteFilter).map((function (e) {
                                        return e.id
                                    }))).length > 0)) {
                                        i.next = 13;
                                        break
                                    }
                                    return i.next = 5, this.$store.dispatch("drive/batchMoveFile", {
                                        fileIdList: r,
                                        parent_id: t.id,
                                        to_space: n.to_space
                                    });
                                case 5:
                                    return o = i.sent, a = this, s = "" === n.to_space ? "移出" : "移入", o.filter(Boolean).forEach((function (e) {
                                        var t = e.task_id;
                                        l.setTaskCallbackMap({
                                            id: t, callbackObj: {
                                                onSuccess: function (e) {
                                                    var t, i, r;
                                                    "drop" === (null == n ? void 0 : n.type) && a.$eventTrack("yunpan_move_success", Object.assign({result: "success"}, a.commonSafeSpaceStatInfo));
                                                    var o = e.data, c = "success";
                                                    if ((null === (t = null == o ? void 0 : o.params) || void 0 === t ? void 0 : t.invalid_file_count) && (null === (i = null == o ? void 0 : o.params) || void 0 === i ? void 0 : i.valid_file_count)) {
                                                        var l = "已成功".concat(s, "文件 ").concat(o.params.valid_file_count, "个");
                                                        "0" !== (null === (r = null == o ? void 0 : o.params) || void 0 === r ? void 0 : r.invalid_file_count) && (l += "；因失效无法".concat(s, "文件 ").concat(o.params.invalid_file_count, "个"), c = "fail_file_valid"), u.Vue.prototype.$message.success(l)
                                                    } else u.Vue.prototype.$message.success("移动成功");
                                                    a.toastShowEventTrack(o, c)
                                                }, onError: function (e) {
                                                    var t, i, r, o = e.data;
                                                    "drop" === (null == n ? void 0 : n.type) && a.$eventTrack("yunpan_move_success", Object.assign({result: "fail"}, a.commonSafeSpaceStatInfo)), "all_files_invalid" === (null === (t = null == o ? void 0 : o.params) || void 0 === t ? void 0 : t.error_detail) ? (u.Vue.prototype.$message.error("选中文件都已失效，无法".concat(s)), a.toastShowEventTrack(o, "all_files_invalid")) : "operating_file_count_exceeded" === (null === (i = o.params) || void 0 === i ? void 0 : i.error_detail) ? (u.Vue.prototype.$message.error("所选文件数过多，无法批量".concat(s)), a.toastShowEventTrack(o, "fail_file_num")) : (null === (r = o.params) || void 0 === r ? void 0 : r.required_size) ? "SPACE_SAFE" === n.to_space ? (a.toastShowEventTrack(o, "fail_file_size"), a.handleSafeSpaceInSufficient(o)) : a.handleDriveInSufficient(o) : (a.toastShowEventTrack(o, "fail"), u.Vue.prototype.$message.error("移动失败")), Ke.error(e), a && a.$emit("refresh", !1)
                                                }
                                            }
                                        })
                                    })), this.clearPickedItems(), i.abrupt("return", !0);
                                case 13:
                                    return this.$message.error("选中文件都已失效，无法移动"), i.abrupt("return", !1);
                                case 15:
                                    i.next = 22;
                                    break;
                                case 17:
                                    return i.prev = 17, i.t0 = i.catch(0), c = Object(p.safeJSONParse)(i.t0.message), this.$message.error(c.error_description || "位置错误"), i.abrupt("return", !1);
                                case 22:
                                case"end":
                                    return i.stop()
                            }
                        }), i, this, [[0, 17]])
                    })))
                }
            }, {
                key: "handleSafeSpaceInSufficient", value: function (e) {
                    var t, n, i, r, o = this;
                    if ((null === (t = null == e ? void 0 : e.params) || void 0 === t ? void 0 : t.free_size) && (null === (n = null == e ? void 0 : e.params) || void 0 === n ? void 0 : n.required_size)) {
                        var a = +(null === (i = null == e ? void 0 : e.params) || void 0 === i ? void 0 : i.free_size),
                            s = +(null === (r = null == e ? void 0 : e.params) || void 0 === r ? void 0 : r.required_size);
                        if (this.isYearlySuper) return void this.$message.error("超级保险箱空间不足，请清理后重试");
                        if (a > s) return void this.$message.error("移动失败")
                    }
                    this.showSafeSpaceInsufficient = !1, this.$nextTick((function () {
                        o.safeSpaceInsufficientProp.required = e.params.required_size, o.safeSpaceInsufficientProp.free = e.params.free_size, o.safeSpaceInsufficientProp.from = e.params.from || "yp", o.showSafeSpaceInsufficient = !0
                    }))
                }
            }, {
                key: "handleDriveInSufficient", value: function (e) {
                    var t, n, i, r, o = this;
                    if ((null === (t = null == e ? void 0 : e.params) || void 0 === t ? void 0 : t.free_size) && (null === (n = null == e ? void 0 : e.params) || void 0 === n ? void 0 : n.required_size)) {
                        var a = +(null === (i = null == e ? void 0 : e.params) || void 0 === i ? void 0 : i.free_size),
                            s = +(null === (r = null == e ? void 0 : e.params) || void 0 === r ? void 0 : r.required_size);
                        if (this.isSuperVip) return void this.$message.error("云盘空间不足，请清理后重试");
                        if (a > s) return void this.$message.error("移动失败")
                    }
                    this.showDriveInsufficient = !1, this.$nextTick((function () {
                        o.driveInsufficientProp.required = e.params.required_size, o.driveInsufficientProp.free = e.params.free_size, o.driveInsufficientProp.from = "safebox", o.showDriveInsufficient = !0
                    }))
                }
            }, {
                key: "handleCopyConfirm", value: function (e, t) {
                    return qe(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                        var i, r;
                        return regeneratorRuntime.wrap((function (n) {
                            for (; ;) switch (n.prev = n.next) {
                                case 0:
                                    if (n.prev = 0, !((i = e.filter(this.auditAndCompleteFilter).map((function (e) {
                                        return e.id
                                    }))).length > 0)) {
                                        n.next = 9;
                                        break
                                    }
                                    return n.next = 5, this.$store.dispatch("drive/batchCopyFile", {
                                        fileIdList: i,
                                        parent_id: t.id,
                                        to_space: this.inSafeSpace ? "SPACE_SAFE" : ""
                                    });
                                case 5:
                                    this.$store.dispatch("getAbout"), this.$message.success("复制成功"), n.next = 10;
                                    break;
                                case 9:
                                    this.$message.error("复制失败");
                                case 10:
                                    n.next = 16;
                                    break;
                                case 12:
                                    n.prev = 12, n.t0 = n.catch(0), r = Object(p.safeJSONParse)(n.t0.message), this.$message.error(r.error_description || "位置错误");
                                case 16:
                                case"end":
                                    return n.stop()
                            }
                        }), n, this, [[0, 12]])
                    })))
                }
            }, {
                key: "handleListLoadingMore", value: function () {
                    return qe(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, "drive/getFileList", e.next = 4, this.$store.dispatch("drive/getFileList", {
                                        parent_id: this.parentIdMap[this.active],
                                        __type: this.active,
                                        page_token: this.nextPageTokenMap[this.active]
                                    });
                                case 4:
                                    e.next = 9;
                                    break;
                                case 6:
                                    e.prev = 6, e.t0 = e.catch(0), console.error(e.t0);
                                case 9:
                                    return e.prev = 9, this.loadingMore = !1, e.finish(9);
                                case 12:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[0, 6, 9, 12]])
                    })))
                }
            }, {
                key: "handleMoveOrCopy", value: function (e) {
                    var t;
                    return qe(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                        var i, r, o, a, s, c = this;
                        return regeneratorRuntime.wrap((function (n) {
                            for (; ;) switch (n.prev = n.next) {
                                case 0:
                                    return n.prev = 0, i = this.picked.slice(), n.prev = 2, n.next = 5, ce.a.callRemoteClientFunction("ThunderPanPluginWebview", "IpcTreePath", {
                                        extra: {
                                            disableIdList: i,
                                            autoDetectPath: !0,
                                            operationType: e
                                        }
                                    });
                                case 5:
                                    if (!(null == (r = n.sent) ? void 0 : r[0].error)) {
                                        n.next = 10;
                                        break
                                    }
                                    throw new Error("error");
                                case 10:
                                    (null === (t = null == r ? void 0 : r[0]) || void 0 === t ? void 0 : t.chosenNode) && (o = null == r ? void 0 : r[0], this.$eventTrack("yunpan_move_copy_pop_click", {
                                        type: e,
                                        clickid: "confim",
                                        is_safebox: +this.inSafeSpace,
                                        vip_type: this.vipType,
                                        is_year: +this.isYearlySuper
                                    }), a = o.chosenNode, s = this.pathList.filter((function (e) {
                                        return c.picked.includes(e.id)
                                    })), "move" === e ? this.handleMoveConfirm(s, a) : this.handleCopyConfirm(s, a));
                                case 11:
                                    n.next = 16;
                                    break;
                                case 13:
                                    n.prev = 13, n.t0 = n.catch(2), "move" === e ? this.$eventTrack("yunpan_move_copy_pop_click", {
                                        type: "move",
                                        clickid: "cancel",
                                        is_safebox: +this.inSafeSpace,
                                        vip_type: this.vipType,
                                        is_year: +this.isYearlySuper
                                    }) : this.$eventTrack("yunpan_move_copy_pop_click", {
                                        type: "copy",
                                        clickid: "cancel",
                                        is_safebox: +this.inSafeSpace,
                                        vip_type: this.vipType,
                                        is_year: +this.isYearlySuper
                                    });
                                case 16:
                                    n.next = 21;
                                    break;
                                case 18:
                                    n.prev = 18, n.t1 = n.catch(0), console.error(n.t1);
                                case 21:
                                case"end":
                                    return n.stop()
                            }
                        }), n, this, [[0, 18], [2, 13]])
                    })))
                }
            }, {
                key: "filterTheSystemDirectory", value: function () {
                    1 === this.picked.length && this.systemFolderTypeList.includes(this.pickedItemList[0].folder_type) && this.clearPickedItems()
                }
            }, {
                key: "handleListScroll", value: function (e) {
                    if (this.contextMenuVisible) e.preventDefault(); else {
                        var t = this.$refs.list;
                        this.hasMore && Math.ceil(t.scrollTop + t.offsetHeight) >= t.scrollHeight && !this.loadingMore && (this.loadingMore = !0, this.handleListLoadingMore())
                    }
                }
            }, {
                key: "handleParentIdMapChange", value: function (e, t) {
                    e[this.active] !== t[this.active] && this.clearPickedItems()
                }
            }, {
                key: "handleActiveCollapseItemChange", value: function (e) {
                    e !== this.tabType && this.clearPickedItems()
                }
            }, {
                key: "handlePathListLengthChange", value: function (e, t) {
                    var n = this;
                    if (e > 0 && this.$nextTick((function () {
                        var e = n.$refs.list.getBoundingClientRect(), t = e.top, i = e.height;
                        n.listRefTop = t, n.listRefHeight = i
                    })), e > t) {
                        var i = this.pathList.findIndex((function (e) {
                            return e.__mode && "create" === e.__mode
                        }));
                        i >= 0 && (!0, this.$nextTick((function () {
                            var e = n.getCreateInputElement();
                            e && (e.focus(), e.select(), n.picked = [n.pathList[i].id])
                        })))
                    }
                }
            }, {
                key: "handlePathListChange", value: function (e, t) {
                    var n, i, r, o = this;
                    this.picked = this.picked.filter((function (e) {
                        return o.idItemMap[e]
                    })), this.lastChosenIndex = this.pathList.findIndex((function (e) {
                        return e.id === o.lastChosenItemId
                    })), this.lastChosenItemId = null !== (r = null === (i = null === (n = this.pathList) || void 0 === n ? void 0 : n[this.lastChosenIndex]) || void 0 === i ? void 0 : i.id) && void 0 !== r ? r : ""
                }
            }, {
                key: "handleDriveRouteList", value: function (e, t) {
                    this.lastChosenIndex = 0, this.clearPickedItems()
                }
            }, {
                key: "handlePickedLengthChange", value: function () {
                    var e = this, t = this.pickedItemList.filter((function (t) {
                        return !e.systemFolderTypeList.includes(t.folder_type)
                    })).length;
                    this.allPickedInfo.checked = t === this.lengthExcludeSystemDirectory && t > 0, this.allPickedInfo.indeterminate = t > 0 && !this.allPickedInfo.checked, this.allPickedInfo.text = 0 === t ? "全选" : "已选中".concat(t, "个文件/文件夹")
                }
            }, {
                key: "handlePickedShallowChange", value: function (e, t) {
                    var n;
                    if (e.length > 0) {
                        var i = e[(null == e ? void 0 : e.length) - 1].id,
                            r = null === (n = t[(null == t ? void 0 : t.length) - 1]) || void 0 === n ? void 0 : n.id;
                        i && r !== i && Be.default.markStart(i)
                    }
                }
            }, {
                key: "handlePickedChange", value: function (e) {
                    this.$store.commit("drive/setSelectedItemList", {type: this.active, list: this.pickedItemList})
                }
            }, {
                key: "clearPickedItems", value: function () {
                    this.picked = []
                }
            }, {
                key: "setPickedIdList", value: function (e) {
                    var t = this;
                    this.clearPicked = !1;
                    for (var n = e.reduce((function (e, t) {
                        return e[t] = !0, e
                    }), Object.create(null)), i = [], r = -1, o = 0; o < this.pathList.length; o++) {
                        var a = this.pathList[o];
                        n[a.id] && (-1 === r && (r = o), i.push(a.id))
                    }
                    this.$nextTick((function () {
                        t.picked = i, t.$nextTick((function () {
                            var e, n;
                            null === (n = null === (e = t.$refs.list.children) || void 0 === e ? void 0 : e[r]) || void 0 === n || n.scrollIntoView()
                        }))
                    }))
                }
            }, {
                key: "animateRetrieve", value: function (e, t) {
                    var n = this.pathList.find((function (t) {
                        return t.id === e
                    }));
                    if (void 0 !== n) {
                        var i = this.$refs[e][0].getBoundingClientRect();
                        this.$bus.$emit("animateTransfer", t || n.icon_link, {
                            x: i.left + 45,
                            y: i.top + 12
                        }, "download")
                    }
                }
            }, {
                key: "created", value: function () {
                    this.$bus.$on("renameSingleFile", this.handleRenameFile), this.$bus.$on("clearPickedItems", this.clearPickedItems), this.$bus.$on("animateRetrieve", this.animateRetrieve), this.$bus.$on("safeSpaceInSufficient", this.handleSafeSpaceInSufficient), this.$bus.$on("driveSpaceInSufficient", this.handleDriveInSufficient), "drive" === this.tabType && (this.$bus.$on("changeDirectory", this.handleConsumeFileOrDirectory), this.$bus.$on("drive/setPickedList", this.setPickedIdList))
                }
            }, {
                key: "beforeDestroy", value: function () {
                    this.$bus.$off("renameSingleFile", this.handleRenameFile), this.$bus.$off("clearPickedItems", this.clearPickedItems), this.$bus.$off("animateRetrieve", this.animateRetrieve), this.$bus.$off("safeSpaceInSufficient", this.handleSafeSpaceInSufficient), this.$bus.$off("driveSpaceInSufficient", this.handleDriveInSufficient), "drive" === this.tabType && (this.$bus.$off("changeDirectory", this.handleConsumeFileOrDirectory), this.$bus.$off("drive/setPickedList", this.setPickedIdList)), this.syncTaskListener && Object(b.detachEvent)("SyncMessage-/user/me/drive/tasks", this.syncTaskListener)
                }
            }, {
                key: "selectedFiles", get: function () {
                    return this.$store.state.drive.selectItemListMap[this.active]
                }
            }, {
                key: "parentIdMap", get: function () {
                    return this.$store.state.drive.parentIdMap
                }
            }, {
                key: "driveRouteList", get: function () {
                    return this.$store.state.drive.driveRouteList
                }
            }, {
                key: "isDOWNLOADDirectory", get: function () {
                    return this.driveRouteList.length && "DOWNLOAD" === this.driveRouteList[this.driveRouteList.length - 1].folder_type
                }
            }, {
                key: "nextPageTokenMap", get: function () {
                    return this.$store.state.drive.nextPageTokenMap
                }
            }, {
                key: "commonSafeSpaceStatInfo", get: function () {
                    return {
                        is_safebox: this.inSafeSpace ? 1 : 0,
                        vip_type: this.vipType,
                        is_year: this.isYearlySuper ? 1 : 0
                    }
                }
            }, {
                key: "isYearlySuper", get: function () {
                    var e, t, n;
                    return this.vipType === f.VipType.superv && "1" === (null === (n = null === (t = null === (e = this.$store.state) || void 0 === e ? void 0 : e.users) || void 0 === t ? void 0 : t.curUser) || void 0 === n ? void 0 : n.isYear)
                }
            }, {
                key: "hasMore", get: function () {
                    return this.nextPageTokenMap[this.active]
                }
            }, {
                key: "isOnlySystemDirectoryInPathList", get: function () {
                    var e = this;
                    return "drive" === this.active && this.pathList.every((function (t) {
                        return e.systemFolderTypeList.includes(t.folder_type)
                    }))
                }
            }, {
                key: "userId", get: function () {
                    return this.$store.state.users.curUser.userId
                }
            }, {
                key: "pickedItemList", get: function () {
                    var e = this;
                    return this.picked.map((function (t) {
                        return e.idItemMap[t]
                    }))
                }
            }, {
                key: "isSuperVip", get: function () {
                    return this.vipType === f.VipType.superv
                }
            }, {
                key: "active", get: function () {
                    return this.$store.state.drive.activeCollapseItemType
                }
            }, {
                key: "vipType", get: function () {
                    return this.$store.getters["users/curVipType"]
                }
            }, {
                key: "sortInfo", get: function () {
                    return this.$store.state.drive.driveSortInfoMap[this.active]
                }
            }, {
                key: "lengthExcludeSystemDirectory", get: function () {
                    var e = this;
                    return this.pathList.filter((function (t) {
                        return !e.systemFolderTypeList.includes(t.folder_type)
                    })).length
                }
            }, {
                key: "systemFolderTypeList", get: function () {
                    return this.$store.getters.systemFolderTypeList
                }
            }, {
                key: "taskCallbackMap", get: function () {
                    return this.$store.state.drive.taskCallbackMap
                }
            }, {
                key: "inSafeSpace", get: function () {
                    return this.$store.getters["drive/inSafeSpace"]
                }
            }, {
                key: "safeSpaceId", get: function () {
                    return this.$store.state.drive.safeSpaceId || ""
                }
            }, {
                key: "idItemMap", get: function () {
                    var e = {};
                    return this.pathList.forEach((function (t) {
                        e[t.id] = t
                    })), e
                }
            }]), n
        }(u.Vue);
        He([Object(u.Prop)({})], et.prototype, "pathList", void 0), He([Object(u.Prop)({})], et.prototype, "tabType", void 0), He([Object(se.a)({time: 100})], et.prototype, "handleCreateInputConfirm", null), He([Object(u.Watch)("parentIdMap", {deep: !0})], et.prototype, "handleParentIdMapChange", null), He([Object(u.Watch)("active")], et.prototype, "handleActiveCollapseItemChange", null), He([Object(u.Watch)("pathList.length", {immediate: !0})], et.prototype, "handlePathListLengthChange", null), He([Object(u.Watch)("pathList")], et.prototype, "handlePathListChange", null), He([Object(u.Watch)("driveRouteList")], et.prototype, "handleDriveRouteList", null), He([Object(u.Watch)("picked")], et.prototype, "handlePickedLengthChange", null), He([Object(u.Watch)("pickedItemList")], et.prototype, "handlePickedShallowChange", null), He([Object(u.Watch)("pickedItemList", {deep: !0})], et.prototype, "handlePickedChange", null);
        var tt = et = He([Object(u.Component)({
            components: {
                ContextMenu: G,
                DropMore: H,
                MediaBlock: he,
                DragMoveTip: ge,
                ServeProtocol: Ce,
                TrashConfirmDialog: ae.a,
                TrashValidTimeTip: Oe.a,
                SafeSpaceVolume: Le,
                SafeSpaceInsufficient: Ue,
                DriveInsufficient: Xe
            }, mixins: [F]
        })], et), nt = (n(1468), Object(S.a)(tt, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {staticClass: "xly-netdisk-wrapper"}, [n("ContextMenu", {
                attrs: {
                    "click-position": e.currentContextClickInfo,
                    visible: e.contextMenuVisible,
                    "is-out-of-context-menu": e.isOutOfContextMenu,
                    "picked-item-list": e.pickedItemList
                }, on: {
                    "update:visible": function (t) {
                        e.contextMenuVisible = t
                    }, "update:isOutOfContextMenu": function (t) {
                        e.isOutOfContextMenu = t
                    }, "update:is-out-of-context-menu": function (t) {
                        e.isOutOfContextMenu = t
                    }, clickItem: e.handleClickContextMenuItem
                }
            }), e._v(" "), n("div", {staticClass: "xly-netdisk-list__title"}, [n("td-checkbox", {
                attrs: {
                    disabled: !e.pathList.length || e.isOnlySystemDirectoryInPathList,
                    indeterminate: e.allPickedInfo.indeterminate,
                    value: e.allPickedInfo.checked
                }, on: {input: e.handleListAllPickedClick}
            }, [e._v("\n      " + e._s(e.allPickedInfo.text) + "\n    ")]), e._v(" "), n("div", {staticClass: "xly-netdisk-list__operate"}, [n("a", {
                class: {"is-disabled": !e.pathList.length},
                attrs: {href: "javascript:;", title: "排序"},
                on: {
                    click: function (t) {
                        e.pathList.length && e.handleClickSortTypeList()
                    }
                }
            }, [n("i", {staticClass: "xly-icon-sort"})])])], 1), e._v(" "), n("serveProtocol", {
                attrs: {visible: e.showServeProtocol && "drive" === e.active},
                on: {
                    close: function (t) {
                        e.showServeProtocol = !1
                    }
                }
            }), e._v(" "), e.pathList.length ? [n("ul", {
                ref: "list",
                staticClass: "xly-netdisk-list__items ",
                class: {"disabled-pointer-events": !e.isOutOfContextMenu},
                on: {
                    contextmenu: function (t) {
                        return t.stopPropagation(), e.handleContextMenu(null, t)
                    }
                }
            }, e._l(e.pathList, (function (t, i) {
                return n("li", {
                    key: t.id,
                    ref: t.id,
                    refInFor: !0,
                    staticClass: "xly-netdisk-list__item",
                    class: {
                        "is-chosen": e.picked.includes(t.id),
                        "is-disabled": ["STATUS_SENSITIVE_RESOURCE", "STATUS_SENSITIVE_WORD"].includes(e.$sget(t, "audit", "status")),
                        "is-active": t.id === e.currentDragOverItemId && "drive#folder" === t.kind && !e.picked.includes(t.id),
                        "is-super": t.__kind__ && e.isSuperVip
                    },
                    attrs: {draggable: e.picked.includes(t.id) || e.isDragging},
                    on: {
                        contextmenu: function (n) {
                            return n.stopPropagation(), e.handleContextMenu(t, n)
                        }, click: function (n) {
                            return e.handleClickFileListItem(t, i, n)
                        }, dblclick: function (n) {
                            return e.handleConsumeFileOrDirectory(t, {mode: "independent", trigger: "dblclick"})
                        }, dragstart: function (n) {
                            return e.handleDragStart(t, n)
                        }, drag: e.handleDragging, dragend: e.handleDragEnd, dragover: function (n) {
                            return n.preventDefault(), e.handleDragOver(t, n)
                        }, drop: function (n) {
                            return e.handleDrop(t)
                        }, dragenter: function (e) {
                            e.preventDefault()
                        }
                    }
                }, [n("td-checkbox", {
                    style: {visibility: e.systemFolderTypeList.includes(t.folder_type) ? "hidden" : "visible"},
                    attrs: {label: t.id},
                    nativeOn: {
                        click: function (n) {
                            n.stopPropagation(), e.filterTheSystemDirectory(), e.handleClickFileListItem(t, i, n, !0)
                        }, dblclick: function (e) {
                            e.stopPropagation()
                        }
                    },
                    model: {
                        value: e.picked, callback: function (t) {
                            e.picked = t
                        }, expression: "picked"
                    }
                }), e._v(" "), n("MediaBlock", {
                    ref: "mediaBlock",
                    refInFor: !0,
                    attrs: {item: t},
                    on: {
                        inputConfirm: e.handleCreateInputConfirm, fetch: e.handleFetchBackFile, cancel: function (n) {
                            return e.handleCancelUploading(t)
                        }, consume: function (n) {
                            return e.handleConsumeFileOrDirectory(t, {mode: "independent", trigger: "click"})
                        }
                    }
                })], 1)
            })), 0), e._v(" "), n("DragMoveTip", {
                attrs: {
                    "drag-cursor-position": e.dragCursorPosition,
                    "drop-dir-name": e.dropDirName,
                    "is-dragging": e.isDragging,
                    "picked-length": e.picked.length
                }
            })] : [n("div", {staticClass: "xly-netdisk-list__empty"}, [n("div", {staticClass: "xly-img-empty-netdisk"}), e._v(" "), n("p", [n("pre", [e._v(e._s(e.isDOWNLOADDirectory ? "暂无文件，一键导入的下载记录\n以及后续添加的内容会出现在这里" : "暂无文件"))])])])], e._v(" "), e.inSafeSpace ? n("SafeSpaceVolume") : e._e(), e._v(" "), n("DropMore", {
                attrs: {visible: e.sortTypeListVisible},
                on: {
                    "update:visible": function (t) {
                        e.sortTypeListVisible = t
                    }, changeSortType: e.handleChangeSortType
                }
            }), e._v(" "), "trash" === e.active ? n("TrashValidTimeTip") : e._e(), e._v(" "), e.showSafeSpaceInsufficient ? n("SafeSpaceInsufficient", {
                attrs: {
                    "required-size": e.safeSpaceInsufficientProp.required,
                    from: e.safeSpaceInsufficientProp.from
                }
            }) : e._e(), e._v(" "), e.showDriveInsufficient ? n("DriveInsufficient", {
                attrs: {
                    "required-size": e.driveInsufficientProp.required,
                    from: e.driveInsufficientProp.from
                }
            }) : e._e()], 2)
        }), [], !1, null, null, null).exports);

        function it(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var rt = function (e, t, n, i) {
                var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
                return o > 3 && a && Object.defineProperty(t, n, a), a
            }, ot = function (e) {
                Object(a.a)(n, e);
                var t = it(n);

                function n() {
                    return Object(r.a)(this, n), t.apply(this, arguments)
                }

                return Object(o.a)(n, [{
                    key: "hideHint", value: function () {
                        this.$store.commit("setImportHintShow", !1)
                    }
                }]), n
            }(u.Vue), at = ot = rt([Object(u.Component)({})], ot), st = Object(S.a)(at, (function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", {staticClass: "xly-netdisk-note xly-netdisk-note"}, [this._m(0), this._v(" "), t("span", {
                    staticClass: "xly-netdisk-note__side",
                    on: {click: this.hideHint}
                }, [this._v("知道了")])])
            }), [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("p", {staticClass: "xly-netdisk-note__text"}, [this._v("\n    最近100条迅雷文件正在导入，"), t("br"), this._v("传输完毕后可以在「我的资源」\n    文件夹中找到他们\n  ")])
            }], !1, null, null, null).exports, ct = n(687), lt = n(695), ut = n.n(lt), dt = n(482), pt = n.n(dt),
            ft = n(35);

        function ht(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var vt = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, yt = function (e, t, n, i) {
            return new (n || (n = Promise))((function (r, o) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        }, mt = function (e) {
            Object(a.a)(n, e);
            var t = ht(n);

            function n() {
                var e;
                return Object(r.a)(this, n), (e = t.apply(this, arguments)).newDirectoryList = [], e.isActive = !0, e.refreshTimer = null, e.isCreatingDirectory = !1, e.serverEventId = 0, e
            }

            return Object(o.a)(n, [{
                key: "beforeDestroy", value: function () {
                    this.$bus.$off("createNewDirectory", this.handleClickCreateDirectory), this.$bus.$off("gotAbout", this.initDriveList), this.$bus.$off("syncDriveList", this.syncDriveList), ce.a.detachServerEvent("OnCurNavChange", this.serverEventId)
                }
            }, {
                key: "mounted", value: function () {
                    return yt(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t = this;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    this.$bus.$on("createNewDirectory", this.handleClickCreateDirectory), this.$store.dispatch("registerImportHint"), this.$bus.$on("gotAbout", this.initDriveList), this.$bus.$on("syncDriveList", this.syncDriveList), this.$bus.$on("refreshDriveFileList", this.handleRefreshDriveFileList), this.serverEventId = ce.a.attachServerEvent("OnCurNavChange", (function (e, n) {
                                        n === b.NavViewID.Cloud && "drive" === t.$store.state.drive.activeCollapseItemType && (t.initDriveList(), t.$store.dispatch("getAbout", !0))
                                    }));
                                case 6:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "handleRefreshDriveFileList", value: function (e) {
                    return yt(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        var n = this;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (e && null != this.refreshTimer) {
                                        t.next = 14;
                                        break
                                    }
                                    return t.next = 3, this.initDriveList();
                                case 3:
                                    if (this.inSafeSpace) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.next = 6, this.$store.dispatch("getAbout", !0);
                                case 6:
                                    t.next = 10;
                                    break;
                                case 8:
                                    return t.next = 10, this.$store.dispatch("getCofferAbout");
                                case 10:
                                    this.$refs.driveCollapseContainer.clearPickedItems(), this.refreshTimer = setTimeout((function () {
                                        n.refreshTimer = null
                                    }), 1e4), t.next = 15;
                                    break;
                                case 14:
                                    this.$message({
                                        id: "handleRefreshDriveFileList",
                                        unique: !0,
                                        position: "middle",
                                        type: "error",
                                        message: "10秒内只能刷新1次，请稍后再试"
                                    });
                                case 15:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })))
                }
            }, {
                key: "getSafeSpaceFile", value: function () {
                    return this.driveFileList.find((function (e) {
                        return "SAFE" === e.folder_type
                    }))
                }
            }, {
                key: "initDriveList", value: function () {
                    var e, t, n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return yt(this, void 0, void 0, regeneratorRuntime.mark((function i() {
                        var r;
                        return regeneratorRuntime.wrap((function (i) {
                            for (; ;) switch (i.prev = i.next) {
                                case 0:
                                    return i.prev = 0, i.next = 3, Promise.all([this.$store.dispatch("getPanRemoteGlobalConfig", {
                                        keyName: "strongbox",
                                        defaultValueWhenFail: {switch: !1}
                                    }), this.$store.dispatch("getPanRemoteGlobalConfig", {keyName: "common"}), this.$store.dispatch("getVipRemoteGlobalConfig")]);
                                case 3:
                                    return i.next = 5, this.$store.dispatch("drive/getFileList", {
                                        parent_id: this.parentIdMap.drive,
                                        __type: "drive",
                                        refresh: !0,
                                        __sync: n
                                    });
                                case 5:
                                    if (!(null === (t = null === (e = this.$store.state.panGlobalRemoteConfig) || void 0 === e ? void 0 : e.strongbox) || void 0 === t ? void 0 : t.switch) || !this.$store.state.drive.isSafeInDriveList) {
                                        i.next = 12;
                                        break
                                    }
                                    if (void 0 !== this.$store.state.password.haveInitSafe) {
                                        i.next = 10;
                                        break
                                    }
                                    return i.next = 9, this.$store.dispatch("password/checkHaveInitSafe");
                                case 9:
                                    Object(R.vipEventTrack)("safebox_entry_show", {}, ["is_login", "is_vip", "vip_type", "is_year", "is_new_user", "is_set_psd", "is_input_psd"]);
                                case 10:
                                    (r = this.getSafeSpaceFile()) && this.$store.commit("drive/setSafeSpaceId", r.id);
                                case 12:
                                    return i.next = 14, this.$store.dispatch("getCofferAbout");
                                case 14:
                                    i.next = 19;
                                    break;
                                case 16:
                                    i.prev = 16, i.t0 = i.catch(0), console.error(i.t0);
                                case 19:
                                case"end":
                                    return i.stop()
                            }
                        }), i, this, [[0, 16]])
                    })))
                }
            }, {
                key: "syncDriveList", value: function () {
                    return yt(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, ft.a.diffSynchronize().catch((function (e) {
                                        console.error("syncDriveList diff 文件树异常", e)
                                    }));
                                case 3:
                                    return e.next = 5, this.$store.dispatch("drive/getFileList", {
                                        parent_id: this.parentIdMap.drive,
                                        __type: "drive",
                                        refresh: !0,
                                        __sync: !1
                                    });
                                case 5:
                                    e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(0), console.error(e.t0);
                                case 10:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[0, 7]])
                    })))
                }
            }, {
                key: "handleClickTdCollapseItem", value: function (e) {
                    "drive" === e && "trash" === this.activeCollapseItem ? this.$eventTrack("yunpan_tab_click") : "trash" === e && "drive" === this.activeCollapseItem && this.$eventTrack("recycler_tab_click")
                }
            }, {
                key: "handleRouteListChange", value: function (e, t) {
                    return yt(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                        var i, r;
                        return regeneratorRuntime.wrap((function (n) {
                            for (; ;) switch (n.prev = n.next) {
                                case 0:
                                    return this.newDirectoryList = [], this.$store.commit("drive/setDriveRouteList", this.driveRouteList.slice(0, e.length)), n.prev = 2, i = this.driveRouteList[this.driveRouteList.length - 1].id, n.next = 6, this.$store.dispatch("drive/getFileList", {
                                        parent_id: i,
                                        __type: this.activeCollapseItem,
                                        refresh: !0,
                                        __sync: !0
                                    });
                                case 6:
                                    this.$store.commit("drive/setParentIdMap", Object(d.a)({}, this.activeCollapseItem, i)), e.length >= 1 && (r = t.findIndex((function (e) {
                                        return e.id === i
                                    }))) > -1 && t.length > r + 1 && this.$bus.$emit("drive/setPickedList", [t[r + 1].id]), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n.catch(2), console.error(n.t0);
                                case 13:
                                case"end":
                                    return n.stop()
                            }
                        }), n, this, [[2, 10]])
                    })))
                }
            }, {
                key: "handleCreateDirectory", value: function (e) {
                    return yt(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        var n, i, r, o = this;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (!this.isCreatingDirectory) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    if (t.prev = 2, this.isCreatingDirectory = !0, !/[\\/:*?"<>|]/.test(e)) {
                                        t.next = 8;
                                        break
                                    }
                                    this.$message.error('名称不能包含\\/:*?"<>|等特殊字符'), t.next = 18;
                                    break;
                                case 8:
                                    if (e.length) {
                                        t.next = 12;
                                        break
                                    }
                                    this.$message.error("文件夹名称不能为空，请输入名称"), t.next = 18;
                                    break;
                                case 12:
                                    return t.next = 14, this.$store.dispatch("drive/addFolderWithParentId", {
                                        name: e,
                                        parentId: this.parentIdMap.drive
                                    });
                                case 14:
                                    n = t.sent, this.newDirectoryList = [n.file], i = this.driveFileList.slice(), this.$store.commit("drive/setDriveFileList", {
                                        data: i,
                                        refresh: !0,
                                        sort: !1
                                    });
                                case 18:
                                    t.next = 25;
                                    break;
                                case 20:
                                    t.prev = 20, t.t0 = t.catch(2), console.log(t.t0), r = Object(p.safeJSONParse)(t.t0.message), this.$message.error(ct.createDirectoryError[r.error] || "未知错误");
                                case 25:
                                    return t.prev = 25, this.newDirectoryList = [], this.$nextTick((function () {
                                        o.isCreatingDirectory = !1
                                    })), t.finish(25);
                                case 29:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this, [[2, 20, 25, 29]])
                    })))
                }
            }, {
                key: "handleClickContextMenuCreateDirectory", value: function () {
                    this.handleClickCreateDirectory()
                }
            }, {
                key: "handleRightClickDriveContainer", value: function (e) {
                    e.target.classList.contains("xly-icon-sort") || ("trash" !== this.activeCollapseItem ? this.$refs.driveCollapseContainer.handleContextMenu(null, e) : this.$refs.trashCollapseContainer.contextMenuVisible = !1)
                }
            }, {
                key: "handleRightClickTrashContainer", value: function (e) {
                    e.target.classList.contains("xly-icon-sort") || ("drive" !== this.activeCollapseItem ? this.$refs.trashCollapseContainer.handleContextMenu(null, e) : this.$refs.driveCollapseContainer.contextMenuVisible = !1)
                }
            }, {
                key: "handleClickCreateDirectory", value: function () {
                    return yt(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t = this;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    "trash" === this.activeCollapseItem && (this.$store.commit("drive/setActiveCollapseTabType", "drive"), setTimeout((function () {
                                        t.$refs.driveCollapseContainer.$refs.list.scrollTop = 0
                                    }), 100)), "新建文件夹", this.$store.commit("drive/clearFileMode", {type: "drive"}), this.newDirectoryList = [{
                                        __mode: "create",
                                        name: "新建文件夹",
                                        id: "新建文件夹",
                                        kind: "drive#folder"
                                    }];
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "handleClearTrash", value: function () {
                    return yt(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Object(oe.a)(ae.a)({
                                        title: "清空回收站",
                                        content: "确认清空回收站？",
                                        danger: !0,
                                        confirmText: "清空"
                                    });
                                case 3:
                                    this.$eventTrack("recycler_clear_pop_click", {clickid: "confim"}), e.next = 10;
                                    break;
                                case 6:
                                    return e.prev = 6, e.t0 = e.catch(0), this.$eventTrack("recycler_clear_pop_click", {clickid: "cancel"}), e.abrupt("return");
                                case 10:
                                    return this.$refs.trashCollapseContainer.picked = [], e.prev = 11, e.next = 14, this.$store.dispatch("drive/clearTrash");
                                case 14:
                                    e.next = 19;
                                    break;
                                case 16:
                                    e.prev = 16, e.t1 = e.catch(11), this.$message.error(e.t1);
                                case 19:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[0, 6], [11, 16]])
                    })))
                }
            }, {
                key: "handleActiveCollapseItemChange", value: function (e) {
                    return yt(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (e !== this.activeCollapseItem) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return this.$store.commit("drive/setActiveCollapseTabType", e), t.prev = 3, t.next = 6, this.$store.dispatch("drive/getFileList", {
                                        parent_id: this.parentIdMap[this.activeCollapseItem],
                                        __type: e,
                                        refresh: !0,
                                        __sync: !0
                                    });
                                case 6:
                                    t.next = 11;
                                    break;
                                case 8:
                                    t.prev = 8, t.t0 = t.catch(3), console.error(t.t0);
                                case 11:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this, [[3, 8]])
                    })))
                }
            }, {
                key: "handleRefreshProgress", value: function () {
                    this.$store.commit("drive/setDriveFileList", {
                        data: Object(m.combineData)(this.driveFileList, this.$store.state, this.$store.getters, this.parentIdMap.drive),
                        parent_id: this.parentIdMap.drive,
                        __type: "drive",
                        refresh: !0,
                        __sync: !1,
                        sort: !0
                    })
                }
            }, {
                key: "handleParentIdMapChange", value: function (e, t) {
                    e[this.activeCollapseItem] !== t[this.activeCollapseItem] && (this.newDirectoryList = [])
                }
            }, {
                key: "handleLocalUploadTaskMapChange", value: function () {
                    this.handleRefreshProgress()
                }
            }, {
                key: "handleCloudRunningTaskChange", value: function () {
                    this.handleRefreshProgress()
                }
            }, {
                key: "handleDriveRouteListChange", value: function () {
                    Object(m.checkInSafeSpaceChange)()
                }
            }, {
                key: "parentIdMap", get: function () {
                    return this.$store.state.drive.parentIdMap
                }
            }, {
                key: "nextPageTokenMap", get: function () {
                    return this.$store.state.drive.nextPageTokenMap
                }
            }, {
                key: "activeCollapseItem", get: function () {
                    return this.$store.state.drive.activeCollapseItemType
                }
            }, {
                key: "systemFolderTypeList", get: function () {
                    return this.$store.getters.systemFolderTypeList
                }
            }, {
                key: "driveFileList", get: function () {
                    if ("" === this.parentIdMap.drive) {
                        var e = this.$store.state.drive.driveFileList.filter((function (e) {
                            return "NORMAL" !== (null == e ? void 0 : e.folder_type)
                        })).length;
                        return [].concat(Object(i.a)(this.$store.state.drive.driveFileList.slice(0, e)), Object(i.a)(this.newDirectoryList), Object(i.a)(this.$store.state.drive.driveFileList.slice(e)))
                    }
                    return [].concat(Object(i.a)(this.newDirectoryList), Object(i.a)(this.$store.state.drive.driveFileList))
                }
            }, {
                key: "trashFileList", get: function () {
                    return this.$store.state.drive.trashFileList
                }
            }, {
                key: "driveRouteList", get: function () {
                    return this.$store.state.drive.driveRouteList
                }
            }, {
                key: "localUploadTaskMap", get: function () {
                    return this.$store.state["local-upload"].allTask
                }
            }, {
                key: "cloudRunningTask", get: function () {
                    return this.$store.getters["url-task-list/taskFileGroupByParentId"][this.parentIdMap.drive]
                }
            }, {
                key: "inSafeSpace", get: function () {
                    return this.$store.getters["drive/inSafeSpace"]
                }
            }]), n
        }(u.Vue);
        vt([ut()(1e3, {leading: !1}), pt()()], mt.prototype, "syncDriveList", null), vt([ut()(1e3, {leading: !0})], mt.prototype, "handleRefreshProgress", null), vt([Object(u.Watch)("parentIdMap", {deep: !0})], mt.prototype, "handleParentIdMapChange", null), vt([Object(u.Watch)("localUploadTaskMap", {deep: !0})], mt.prototype, "handleLocalUploadTaskMapChange", null), vt([Object(u.Watch)("cloudRunningTask", {deep: !0})], mt.prototype, "handleCloudRunningTaskChange", null), vt([Object(u.Watch)("driveRouteList", {immediate: !0})], mt.prototype, "handleDriveRouteListChange", null);
        var bt = mt = vt([Object(u.Component)({
            components: {
                DriveVolume: C,
                CollapseItemContainer: nt,
                ImportHint: st,
                TrashConfirmDialog: ae.a,
                SafeSpaceVolume: Le
            }
        })], mt), gt = Object(S.a)(bt, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {staticClass: "xly-client-side"}, [n("div", {staticClass: "xly-netdisk-side"}, [n("div", {staticClass: "xly-netdisk-list"}, [n("td-collapse", {
                attrs: {value: e.activeCollapseItem},
                on: {change: e.handleActiveCollapseItemChange}
            }, [n("td-collapse-item", {
                attrs: {value: "drive"}, nativeOn: {
                    "!click": function (t) {
                        return e.handleClickTdCollapseItem("drive")
                    }, contextmenu: function (t) {
                        return e.handleRightClickDriveContainer(t)
                    }
                }
            }, [n("div", {
                staticClass: "xly-netdisk-list__header",
                attrs: {slot: "title"},
                slot: "title"
            }, ["drive" === e.activeCollapseItem ? n("td-breadcrumb", {
                staticStyle: {width: "100%"},
                attrs: {"init-route-list": e.driveRouteList},
                on: {onRoutelistChange: e.handleRouteListChange}
            }) : n("span", {staticClass: "xly-netdisk-list__text"}, [e._v("我的云盘")])], 1), e._v(" "), n("CollapseItemContainer", {
                ref: "driveCollapseContainer",
                attrs: {"tab-type": "drive", "path-list": e.driveFileList},
                on: {
                    confirmCreate: e.handleCreateDirectory,
                    createNewDirectory: e.handleClickContextMenuCreateDirectory,
                    refresh: e.handleRefreshDriveFileList
                }
            }), e._v(" "), e.$store.state.isImportHintShow ? n("ImportHint") : e._e()], 1)], 1)], 1), e._v(" "), n("DriveVolume", {on: {refresh: e.initDriveList}})], 1)])
        }), [], !1, null, null, null).exports;

        function xt(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var kt = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, _t = function (e) {
            Object(a.a)(n, e);
            var t = xt(n);

            function n() {
                return Object(r.a)(this, n), t.apply(this, arguments)
            }

            return n
        }(u.Vue), wt = _t = kt([Object(u.Component)({})], _t), St = Object(S.a)(wt, (function () {
            var e = this.$createElement;
            this._self._c;
            return this._m(0)
        }), [function () {
            var e = this.$createElement, t = this._self._c || e;
            return t("div", {staticClass: "xly-empty"}, [t("i", {staticClass: "xly-icon-logo"})])
        }], !1, null, null, null).exports, Ct = (n(689), n(38));

        function Tt(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var Ot = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, Rt = function (e) {
            Object(a.a)(n, e);
            var t = Tt(n);

            function n() {
                var e;
                return Object(r.a)(this, n), (e = t.apply(this, arguments)).canPreview = !1, e
            }

            return Object(o.a)(n, [{
                key: "mounted", value: function () {
                    this.file.id && Be.default.markEnd(this.file.id)
                }
            }, {
                key: "fileSize", get: function () {
                    return this.file.size ? Object(p.formatSize2)(this.file.size) : "0B"
                }
            }, {
                key: "fileTime", get: function () {
                    return this.file.created_time ? Object(p.formatTime)(new Date(this.file.created_time), "yyyy-MM-dd hh:mm") : ""
                }
            }, {
                key: "fileIconStyle", get: function () {
                    var e = {};
                    return this.file.icon_link && (e.background = "url(".concat(this.file.icon_link, ") 0% 0% / cover no-repeat")), e
                }
            }]), n
        }(u.Vue);
        Ot([Object(u.Prop)({})], Rt.prototype, "file", void 0), Ot([Object(u.Prop)({default: -1})], Rt.prototype, "level", void 0), Ot([Object(u.Prop)({default: !1})], Rt.prototype, "noAnimation", void 0);
        var Pt = Rt = Ot([Object(u.Component)({components: {}})], Rt), It = (n(1470), Object(S.a)(Pt, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("td-media", {
                class: {
                    "is-show": 2 === e.level,
                    "is-first": 1 === e.level,
                    "is-secondary": 0 === e.level,
                    "no-animation": e.noAnimation && 2 === e.level
                }
            }, [n("i", {
                staticClass: "xly-icon-type xly-type-avi",
                style: e.fileIconStyle,
                attrs: {slot: "media"},
                slot: "media"
            }), e._v(" "), n("p", {staticClass: "xly-file-name"}, [e._v("\n    " + e._s(e.file && e.file.name) + "\n  ")]), e._v(" "), n("div", {staticClass: "xly-file-info"}, ["drive#folder" !== e.file.kind ? n("p", {staticClass: "xly-file-size"}, [e._v("\n      " + e._s(e.fileSize) + "\n    ")]) : e._e(), e._v(" "), n("p", {staticClass: "xly-file-time"}, [e._v("\n      " + e._s(e.fileTime) + "\n    ")])])])
        }), [], !1, null, null, null).exports);

        function jt(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var Dt = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, At = function (e) {
            Object(a.a)(n, e);
            var t = jt(n);

            function n() {
                var e;
                return Object(r.a)(this, n), (e = t.apply(this, arguments)).isDropdownShow = !1, e
            }

            return Object(o.a)(n, [{
                key: "buttons", get: function () {
                    return [{
                        name: "unzip",
                        condition: this.unzip,
                        class: "td-button--other",
                        text: "在线解压",
                        icon: "xly-icon-unzip"
                    }, {
                        name: "open",
                        condition: this.open,
                        class: "td-button--other",
                        text: "打开",
                        icon: "xly-icon-open"
                    }, {
                        name: "analyze",
                        condition: this.analyze,
                        class: "",
                        text: "解析",
                        icon: "xly-icon-parse"
                    }, {
                        name: "download",
                        condition: this.download,
                        class: "td-button--other",
                        text: "下载",
                        icon: "xly-icon-download"
                    }, {
                        name: "share",
                        condition: this.share,
                        class: "td-button--other",
                        text: "分享",
                        icon: "xly-icon-share"
                    }, {
                        name: "delete",
                        condition: this.delete,
                        class: "td-button--other",
                        text: "删除",
                        icon: "xly-icon-delete"
                    }, {
                        name: "project",
                        condition: this.project,
                        class: "td-button--other",
                        text: "投屏",
                        icon: "xly-icon-cast-screen"
                    }, {
                        name: "restore",
                        condition: this.restore,
                        class: "td-button--other",
                        text: "还原",
                        icon: "xly-icon-restore"
                    }, {
                        name: "trash",
                        condition: this.trash,
                        class: "td-button--other",
                        text: "删除",
                        icon: "xly-icon-delete"
                    }, {name: "appeal", condition: this.appeal, class: "td-button--other", text: "申诉", icon: ""}]
                }
            }]), n
        }(u.Vue);
        Dt([Object(u.Prop)({default: !1})], At.prototype, "analyze", void 0), Dt([Object(u.Prop)({default: !1})], At.prototype, "download", void 0), Dt([Object(u.Prop)({default: !1})], At.prototype, "share", void 0), Dt([Object(u.Prop)({default: !1})], At.prototype, "project", void 0), Dt([Object(u.Prop)({default: !1})], At.prototype, "restore", void 0), Dt([Object(u.Prop)({default: !1})], At.prototype, "delete", void 0), Dt([Object(u.Prop)({default: !1})], At.prototype, "menuTrash", void 0), Dt([Object(u.Prop)({default: !1})], At.prototype, "trash", void 0), Dt([Object(u.Prop)({default: !0})], At.prototype, "more", void 0), Dt([Object(u.Prop)({default: !1})], At.prototype, "rename", void 0), Dt([Object(u.Prop)({default: !0})], At.prototype, "move", void 0), Dt([Object(u.Prop)({default: !0})], At.prototype, "copy", void 0), Dt([Object(u.Prop)({default: !1})], At.prototype, "open", void 0), Dt([Object(u.Prop)({default: !1})], At.prototype, "unzip", void 0), Dt([Object(u.Prop)({default: !1})], At.prototype, "report", void 0), Dt([Object(u.Prop)({default: !1})], At.prototype, "appeal", void 0), Dt([Object(u.Prop)({default: !0})], At.prototype, "moveToSafe", void 0), Dt([Object(u.Prop)({default: !1})], At.prototype, "moveOutSafe", void 0);
        var Et = At = Dt([Object(u.Component)({})], At), Ft = (n(1472), Object(S.a)(Et, (function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "xly-netdisk-detail__button"}, [e._l(e.buttons, (function (t) {
                    return n("td-button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.condition,
                            expression: "button.condition"
                        }], key: t.name, class: t.class, attrs: {size: "small"}, on: {
                            click: function (n) {
                                return e.$emit(t.name)
                            }
                        }
                    }, [t.icon ? n("i", {class: t.icon}) : e._e(), e._v("\n    " + e._s(t.text) + "\n  ")])
                })), e._v(" "), e.more ? n("div", {
                    staticClass: "xly-netdisk-detail__more", on: {
                        mouseenter: function (t) {
                            e.isDropdownShow = !0
                        }
                    }
                }, [n("td-button", {
                    staticClass: "td-button--other", attrs: {size: "small"}, on: {
                        click: function (t) {
                            return e.$emit("more")
                        }
                    }
                }, [n("i", {staticClass: "xly-icon-more"}), e._v(" 更多\n    ")]), e._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isDropdownShow,
                        expression: "isDropdownShow"
                    }], staticClass: "xly-more-drop"
                }, [n("ul", [e.menuTrash ? n("li", {
                    on: {
                        click: function (t) {
                            e.$emit("trash"), e.isDropdownShow = !1
                        }
                    }
                }, [e._v("\n          删除\n        ")]) : e._e(), e._v(" "), e.rename ? n("li", {
                    on: {
                        click: function (t) {
                            e.$emit("rename"), e.isDropdownShow = !1
                        }
                    }
                }, [e._v("\n          重命名\n        ")]) : e._e(), e._v(" "), e.moveToSafe ? n("li", {
                    on: {
                        click: function (t) {
                            e.$emit("moveToSafe"), e.isDropdownShow = !1
                        }
                    }
                }, [e._v("\n          移入保险箱\n        ")]) : e._e(), e._v(" "), e.moveOutSafe ? n("li", {
                    on: {
                        click: function (t) {
                            e.$emit("moveOutSafe"), e.isDropdownShow = !1
                        }
                    }
                }, [e._v("\n          移出保险箱\n        ")]) : e._e(), e._v(" "), e.move ? n("li", {
                    on: {
                        click: function (t) {
                            e.$emit("move"), e.isDropdownShow = !1
                        }
                    }
                }, [e._v("\n          移动到\n        ")]) : e._e(), e._v(" "), e.copy ? n("li", {
                    on: {
                        click: function (t) {
                            e.$emit("copy"), e.isDropdownShow = !1
                        }
                    }
                }, [e._v("\n          复制到\n        ")]) : e._e(), e._v(" "), e.report ? n("li", {
                    on: {
                        click: function (t) {
                            e.$emit("report"), e.isDropdownShow = !1
                        }
                    }
                }, [e._v("\n          举报\n        ")]) : e._e()])])], 1) : e._e()], 2)
            }), [], !1, null, null, null).exports), Lt = (n(1474), n(282)), $t = (n(472), n(696)), Mt = n(96), Vt = n(474),
            zt = n.n(Vt);

        function Nt(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var Ut, Bt = function (e, t, n, i) {
            return new (n || (n = Promise))((function (r, o) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        }, Yt = zt.a.getLogger("UserHelper");
        !function (e) {
            e.login = "OnLogin", e.logout = "OnLogout", e.authorityChanged = "OnAuthorityChanged"
        }(Ut || (Ut = {}));
        var Wt, Gt = new (function (e) {
            Object(a.a)(n, e);
            var t = Nt(n);

            function n() {
                var e;
                return Object(r.a)(this, n), (e = t.call(this)).mPeerId = void 0, e.mUserId = "0", e.mSessionId = void 0, e.mIsLogin = !1, e.mIsVip = !1, e.mVipLevel = 0, e.mVasType = 0, e.mIsYear = !1, e.mPreUserIsVip = !1, e.init(), e
            }

            return Object(o.a)(n, [{
                key: "init", value: function () {
                    this.setMaxListeners(0), this.attachUserEvents().catch()
                }
            }, {
                key: "getPeerId", value: function () {
                    return Bt(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.mPeerId) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return", this.mPeerId);
                                case 4:
                                    return e.next = 6, v.client.callServerFunction("GetPeerID");
                                case 6:
                                    return (t = e.sent) && "" !== t && (this.mPeerId = t), e.abrupt("return", this.mPeerId || "");
                                case 9:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "getSessionId", value: function () {
                    return Bt(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.mSessionId) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return", this.mSessionId);
                                case 4:
                                    return e.next = 6, v.client.callServerFunction("GetSessionID");
                                case 6:
                                    return (t = e.sent) && "" !== t && (this.mSessionId = t), e.abrupt("return", this.mSessionId || "0");
                                case 9:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "getUserinfo", value: function () {
                    return Bt(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, v.client.callServerFunction("GetAllUserInfo");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }
            }, {
                key: "authorityChanged", value: function (e, t) {
                    this.emit(Ut.authorityChanged, e, t)
                }
            }, {
                key: "attachUserEvents", value: function () {
                    return Bt(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t, n, i = this;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, v.client.callServerFunction("IsLogined");
                                case 2:
                                    null === (t = e.sent) ? n = setInterval((function () {
                                        return Bt(i, void 0, void 0, regeneratorRuntime.mark((function e() {
                                            return regeneratorRuntime.wrap((function (e) {
                                                for (; ;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, v.client.callServerFunction("IsLogined");
                                                    case 2:
                                                        (t = e.sent) && this.onLogin().catch(), null !== t && (clearInterval(n), v.client.attachServerEvent("onUserInfoChange", this.onUserInfoChange.bind(this)), v.client.attachServerEvent("onLoginStatusChange", this.onLoginStatusChange.bind(this)));
                                                    case 5:
                                                    case"end":
                                                        return e.stop()
                                                }
                                            }), e, this)
                                        })))
                                    }), 50) : (t && this.onLogin().catch(), v.client.attachServerEvent("onUserInfoChange", this.onUserInfoChange.bind(this)), v.client.attachServerEvent("onLoginStatusChange", this.onLoginStatusChange.bind(this)));
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "onLogin", value: function () {
                    return Bt(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return Yt.information("--\x3eonLogin"), this.mPreUserIsVip = this.mIsVip, this.clear(), this.mIsLogin = !0, e.next = 6, this.parseUserInfo();
                                case 6:
                                    this.emit(Ut.login), this.authorityChanged(this.authority), Yt.information("<--onLogin");
                                case 9:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "onLogout", value: function () {
                    Yt.information("--\x3eonLogout"), this.mPreUserIsVip = this.mIsVip, this.clear(), this.emit(Ut.logout), this.authorityChanged(!1), Yt.information("<--onLogout")
                }
            }, {
                key: "onUserInfoChange", value: function (e, t, n) {
                    return Bt(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (Yt.information("--\x3eonUserInfoChange"), "vipinfo" !== t) {
                                        e.next = 6;
                                        break
                                    }
                                    return Yt.information("data", n), e.next = 5, this.parseUserInfo();
                                case 5:
                                    this.mIsVip && this.authorityChanged(this.authority, !0);
                                case 6:
                                    Yt.information("<--onUserInfoChange");
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "onLoginStatusChange", value: function (e, t, n) {
                    Yt.information("--\x3eonLoginStatusChange", "newStatus", n), "unlogin" === n || "offline" === n ? this.onLogout() : "online" === n && this.onLogin().catch(), Yt.information("<--onLoginStatusChange")
                }
            }, {
                key: "clear", value: function () {
                    this.mUserId = "0", this.mSessionId = void 0, this.mIsVip = !1, this.mIsLogin = !1, this.mVasType = 0, this.mVipLevel = 0
                }
            }, {
                key: "parseUserInfo", value: function () {
                    return Bt(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t, n, i;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.getUserinfo();
                                case 2:
                                    t = e.sent, Yt.information("userinfo", t), t && (this.mUserId = t.userID || "0", t.vipList && t.vipList[0] ? (t.vipList[0].isVip ? (n = Number(t.vipList[0].isVip).valueOf(), this.mIsVip = n > 0) : this.mIsVip = !1, t.vipList[0].vipLevel && (this.mVipLevel = Number(t.vipList[0].vipLevel).valueOf()), t.vipList[0].vasType && (this.mVasType = Number(t.vipList[0].vasType).valueOf()), t.vipList[0].isYear && (i = Number(t.vipList[0].isYear).valueOf(), this.mIsYear = 1 === i)) : this.mIsVip = !1);
                                case 5:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "jumpKey", get: function () {
                    return ""
                }
            }, {
                key: "userId", get: function () {
                    return this.mUserId
                }
            }, {
                key: "isLogin", get: function () {
                    return this.mIsLogin
                }
            }, {
                key: "isVip", get: function () {
                    return this.mIsVip
                }
            }, {
                key: "isPreUserIsVip", get: function () {
                    return this.mPreUserIsVip
                }
            }, {
                key: "isYear", get: function () {
                    return this.mIsYear
                }
            }, {
                key: "isPlatinumVip", get: function () {
                    return this.isVip && this.vasType > 2
                }
            }, {
                key: "isSuperVip", get: function () {
                    return this.isVip && 5 === this.vasType
                }
            }, {
                key: "vipLevel", get: function () {
                    return this.mVipLevel
                }
            }, {
                key: "vasType", get: function () {
                    return this.mVasType
                }
            }, {
                key: "userLevel", get: function () {
                    return 1
                }
            }, {
                key: "vipType", get: function () {
                    var e = 0;
                    return this.isSuperVip ? e = 5 : this.isPlatinumVip ? e = 3 : this.isVip && (e = 2), e
                }
            }, {
                key: "authority", get: function () {
                    return this.isVip
                }
            }, {
                key: "offlineAuthority", get: function () {
                    return this.isLogin
                }
            }]), n
        }(Mt.EventEmitter)), Qt = n(477), Zt = n(476);
        n(62), n(45), n(61);

        function Xt(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Jt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Jt(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0, r = function () {
                    };
                    return {
                        s: r, n: function () {
                            return i >= e.length ? {done: !0} : {done: !1, value: e[i++]}
                        }, e: function (e) {
                            throw e
                        }, f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, a = !0, s = !1;
            return {
                s: function () {
                    n = e[Symbol.iterator]()
                }, n: function () {
                    var e = n.next();
                    return a = e.done, e
                }, e: function (e) {
                    s = !0, o = e
                }, f: function () {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (s) throw o
                    }
                }
            }
        }

        function Jt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i
        }

        function Ht(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        !function (e) {
            !function (e) {
                e[e.Unkown = 0] = "Unkown", e[e.Create = 1] = "Create", e[e.InvaldParam = 2] = "InvaldParam", e[e.InvaldLink = 3] = "InvaldLink", e[e.InvaldConfig = 4] = "InvaldConfig", e[e.Timeout = 5] = "Timeout", e[e.VerifyData = 6] = "VerifyData", e[e.Forbidden = 7] = "Forbidden", e[e.RangeDispatch = 8] = "RangeDispatch", e[e.FilePathOverRanging = 9] = "FilePathOverRanging", e[e.FileCreate = 201] = "FileCreate", e[e.FileWrite = 202] = "FileWrite", e[e.FileRead = 203] = "FileRead", e[e.FileRename = 204] = "FileRename", e[e.FileFull = 205] = "FileFull", e[e.BtUploadExist = 601] = "BtUploadExist", e[e.ForbinddenResource = 701] = "ForbinddenResource", e[e.ForbinddenAccount = 702] = "ForbinddenAccount", e[e.ForbinddenArea = 703] = "ForbinddenArea", e[e.ForbinddenCopyright = 704] = "ForbinddenCopyright", e[e.ForbinddenReaction = 705] = "ForbinddenReaction", e[e.ForbinddenPorn = 706] = "ForbinddenPorn", e[e.DownloadSDKCrash = 10001] = "DownloadSDKCrash"
            }(e.TaskError || (e.TaskError = {})), function (e) {
                e[e.Unkown = -1] = "Unkown", e[e.Success = 0] = "Success", e[e.QueryFailed = 1] = "QueryFailed", e[e.ServerError = 2] = "ServerError", e[e.ResourceNotFound = 3] = "ResourceNotFound", e[e.AuthorizingFailed = 4] = "AuthorizingFailed", e[e.ForbidByCopyright = 5] = "ForbidByCopyright", e[e.ForbidByPorNoGraphy = 6] = "ForbidByPorNoGraphy", e[e.ForbidByReactionary = 7] = "ForbidByReactionary", e[e.ForbidByOtherFilter = 8] = "ForbidByOtherFilter"
            }(e.DcdnStatusCode || (e.DcdnStatusCode = {})), function (e) {
                e[e.Begin = -1] = "Begin", e[e.Unkown = 0] = "Unkown", e[e.StandBy = 1] = "StandBy", e[e.PreDownloading = 2] = "PreDownloading", e[e.StartWaiting = 3] = "StartWaiting", e[e.StartPending = 4] = "StartPending", e[e.Started = 5] = "Started", e[e.StopPending = 6] = "StopPending", e[e.Stopped = 7] = "Stopped", e[e.Succeeded = 8] = "Succeeded", e[e.Failed = 9] = "Failed", e[e.Seeding = 10] = "Seeding", e[e.DestroyPending = 11] = "DestroyPending", e[e.End = 12] = "End"
            }(e.TaskStatus || (e.TaskStatus = {})), function (e) {
                e[e.Begin = -1] = "Begin", e[e.StandBy = 0] = "StandBy", e[e.Stopped = 1] = "Stopped", e[e.Started = 2] = "Started", e[e.Complete = 3] = "Complete", e[e.Forbidden = 4] = "Forbidden", e[e.Error = 5] = "Error", e[e.End = 6] = "End"
            }(e.BtFileStatus || (e.BtFileStatus = {})), function (e) {
                e[e.DispatchStrategyNone = 0] = "DispatchStrategyNone", e[e.DispatchStrategyOrigin = 1] = "DispatchStrategyOrigin", e[e.DispatchStrategyP2s = 2] = "DispatchStrategyP2s", e[e.DispatchStrategyP2p = 4] = "DispatchStrategyP2p", e[e.DispatchStrategyAll = -1] = "DispatchStrategyAll"
            }(e.DispatchStrategy || (e.DispatchStrategy = {})), function (e) {
                e[e.Unkown = 0] = "Unkown", e[e.P2sp = 1] = "P2sp", e[e.Bt = 2] = "Bt", e[e.Emule = 3] = "Emule", e[e.Group = 4] = "Group", e[e.Magnet = 5] = "Magnet"
            }(e.TaskType || (e.TaskType = {})), function (e) {
                e.Unkown = "Unkown", e.Downloading = "Downloading", e.Completed = "Completed", e.Recycle = "Recycle"
            }(e.CategroyViewID || (e.CategroyViewID = {})), function (e) {
                e[e.Unknow = 0] = "Unknow", e[e.TaskCreated = 1] = "TaskCreated", e[e.InsertToCategoryView = 2] = "InsertToCategoryView", e[e.RemoveFromCategoryView = 3] = "RemoveFromCategoryView", e[e.StatusChanged = 4] = "StatusChanged", e[e.DetailChanged = 5] = "DetailChanged", e[e.ChannelInfoChanged = 6] = "ChannelInfoChanged", e[e.DcdnStatusChanged = 7] = "DcdnStatusChanged", e[e.TaskDescriptionChanged = 8] = "TaskDescriptionChanged", e[e.TaskUserRead = 9] = "TaskUserRead", e[e.TaskRenamed = 10] = "TaskRenamed", e[e.TaskMovedEnd = 11] = "TaskMovedEnd", e[e.TaskMovingStateChange = 12] = "TaskMovingStateChange", e[e.BtSubFileDetailChanged = 13] = "BtSubFileDetailChanged", e[e.BtSubFileLoaded = 14] = "BtSubFileLoaded", e[e.BtSubFileForbidden = 15] = "BtSubFileForbidden", e[e.BtSubFileDcdnStatusChanged = 16] = "BtSubFileDcdnStatusChanged", e[e.TaskCategoryMovedEnd = 17] = "TaskCategoryMovedEnd", e[e.GroupTaskSubFileDetailChanged = 18] = "GroupTaskSubFileDetailChanged", e[e.TaskDestroying = 19] = "TaskDestroying", e[e.TaskDestroyed = 20] = "TaskDestroyed"
            }(e.TaskEventType || (e.TaskEventType = {})), function (e) {
                e[e.NumberStrart = 0] = "NumberStrart", e[e.TaskId = 1] = "TaskId", e[e.VirtualId = 2] = "VirtualId", e[e.SrcTotal = 3] = "SrcTotal", e[e.SrcUsing = 4] = "SrcUsing", e[e.FileSize = 5] = "FileSize", e[e.ReceivedSize = 6] = "ReceivedSize", e[e.DownloadSize = 7] = "DownloadSize", e[e.CreateTime = 8] = "CreateTime", e[e.CompletionTime = 9] = "CompletionTime", e[e.DownloadingPeriod = 10] = "DownloadingPeriod", e[e.Progress = 11] = "Progress", e[e.RecycleTime = 12] = "RecycleTime", e[e.FileCreated = 13] = "FileCreated", e[e.Forbidden = 14] = "Forbidden", e[e.CategoryId = 15] = "CategoryId", e[e.UserRead = 16] = "UserRead", e[e.OpenOnComplete = 17] = "OpenOnComplete", e[e.GroupTaskId = 18] = "GroupTaskId", e[e.DownloadSubTask = 19] = "DownloadSubTask", e[e.NameType = 20] = "NameType", e[e.OwnerProduct = 21] = "OwnerProduct", e[e.FileIndex = 22] = "FileIndex", e[e.NumberEnd = 23] = "NumberEnd", e[e.BooleanStart = 24] = "BooleanStart", e[e.Destroyed = 25] = "Destroyed", e[e.Background = 26] = "Background", e[e.Moving = 27] = "Moving", e[e.BooleanEnd = 28] = "BooleanEnd", e[e.StringStart = 29] = "StringStart", e[e.TaskName = 30] = "TaskName", e[e.SavePath = 31] = "SavePath", e[e.RelativePath = 32] = "RelativePath", e[e.TaskUrl = 33] = "TaskUrl", e[e.RefUrl = 34] = "RefUrl", e[e.Cid = 35] = "Cid", e[e.Gcid = 36] = "Gcid", e[e.Cookie = 37] = "Cookie", e[e.ProductInfo = 38] = "ProductInfo", e[e.Origin = 39] = "Origin", e[e.Description = 40] = "Description", e[e.UserData = 41] = "UserData", e[e.StringEnd = 42] = "StringEnd", e[e.ObjectStart = 43] = "ObjectStart", e[e.ObjectEnd = 44] = "ObjectEnd", e[e.CategoryViewId = 45] = "CategoryViewId", e[e.TaskType = 46] = "TaskType", e[e.ErrorCode = 47] = "ErrorCode"
            }(e.TaskAttribute || (e.TaskAttribute = {})), function (e) {
                e[e.UnKnown = 0] = "UnKnown", e[e.SrcTotal = 1] = "SrcTotal", e[e.SrcUsing = 2] = "SrcUsing", e[e.FileSize = 4] = "FileSize", e[e.ReceivedSize = 8] = "ReceivedSize", e[e.DownloadSize = 16] = "DownloadSize", e[e.CompletionTime = 32] = "CompletionTime", e[e.DownloadingPeriod = 64] = "DownloadingPeriod", e[e.Progress = 128] = "Progress", e[e.RecycleTime = 256] = "RecycleTime", e[e.FileCreated = 512] = "FileCreated", e[e.Forbidden = 1024] = "Forbidden", e[e.UserRead = 2048] = "UserRead", e[e.OpenOnComplete = 4096] = "OpenOnComplete", e[e.DownloadSubTask = 8192] = "DownloadSubTask", e[e.TaskName = 16384] = "TaskName", e[e.SavePath = 32768] = "SavePath", e[e.Cid = 65536] = "Cid", e[e.Gcid = 131072] = "Gcid", e[e.UserData = 262144] = "UserData", e[e.CategoryViewId = 524288] = "CategoryViewId", e[e.ErrorCode = 1048576] = "ErrorCode", e[e.TaskSpeed = 2097152] = "TaskSpeed", e[e.ChannelInfo = 4194304] = "ChannelInfo"
            }(e.TaskDetailChangedFlags || (e.TaskDetailChangedFlags = {})), function (e) {
                e[e.UnKnown = 0] = "UnKnown"
            }(e.BtSubFileDetailChangedFlags || (e.BtSubFileDetailChangedFlags = {})), function (e) {
                e[e.UnKnown = 0] = "UnKnown"
            }(e.GroupTaskSubFileDetailChangedFlags || (e.GroupTaskSubFileDetailChangedFlags = {})), function (e) {
                e[e.NumberStrart = 0] = "NumberStrart", e[e.TaskId = 1] = "TaskId", e[e.FileStatus = 2] = "FileStatus", e[e.DownloadSize = 3] = "DownloadSize", e[e.FileSize = 4] = "FileSize", e[e.EnableDcdn = 5] = "EnableDcdn", e[e.ErrorCode = 6] = "ErrorCode", e[e.DcdnStatus = 7] = "DcdnStatus", e[e.RealIndex = 8] = "RealIndex", e[e.FileOffset = 9] = "FileOffset", e[e.Visible = 10] = "Visible", e[e.Download = 11] = "Download", e[e.NumberEnd = 12] = "NumberEnd", e[e.StringStart = 13] = "StringStart", e[e.FinalName = 14] = "FinalName", e[e.RelativePath = 15] = "RelativePath", e[e.FileName = 16] = "FileName", e[e.FilePath = 17] = "FilePath", e[e.Cid = 18] = "Cid", e[e.Gcid = 19] = "Gcid", e[e.StringEnd = 20] = "StringEnd"
            }(e.BtFileAttribute || (e.BtFileAttribute = {})), function (e) {
                e[e.P2spUrl = 0] = "P2spUrl", e[e.BtInfoId = 1] = "BtInfoId", e[e.EmuleFileHash = 2] = "EmuleFileHash", e[e.MagnetUrl = 3] = "MagnetUrl", e[e.GroupTaskName = 4] = "GroupTaskName"
            }(e.KeyType || (e.KeyType = {})), function (e) {
                e[e.NameInclude = 1] = "NameInclude", e[e.BtDisplayNameInclude = 2] = "BtDisplayNameInclude"
            }(e.SearchKeyType || (e.SearchKeyType = {})), function (e) {
                e[e.ExtEqual = 1] = "ExtEqual", e[e.NameLikeAndExtEqual = 2] = "NameLikeAndExtEqual", e[e.TaskTypeEqual = 4] = "TaskTypeEqual"
            }(e.FilterKeyType || (e.FilterKeyType = {})), function (e) {
                e[e.All = 0] = "All", e[e.CommonForeground = 1] = "CommonForeground", e[e.CommonBackground = 2] = "CommonBackground", e[e.Temporary = 3] = "Temporary", e[e.PreDownload = 4] = "PreDownload", e[e.PrivateForeground = 5] = "PrivateForeground"
            }(e.KeyFilter || (e.KeyFilter = {})), function (e) {
                e[e.Unknown = -1] = "Unknown", e[e.LoadTaskBasic = 0] = "LoadTaskBasic", e[e.Create = 1] = "Create", e[e.Recycle = 2] = "Recycle", e[e.Recover = 3] = "Recover", e[e.ReDownload = 4] = "ReDownload", e[e.MoveThoughCategory = 5] = "MoveThoughCategory"
            }(e.TaskInsertReason || (e.TaskInsertReason = {})), function (e) {
                e[e.Unknown = -1] = "Unknown", e[e.ContextMenu = 0] = "ContextMenu", e[e.Button = 1] = "Button", e[e.TaskDetail = 2] = "TaskDetail", e[e.DownloadMagnet = 3] = "DownloadMagnet", e[e.ToolbarButton = 4] = "ToolbarButton", e[e.SelectDownloadLists = 5] = "SelectDownloadLists", e[e.DeleteTask = 6] = "DeleteTask"
            }(e.TaskStopReason || (e.TaskStopReason = {}))
        }(Wt || (Wt = {}));
        var qt, Kt = function (e, t, n, i) {
            return new (n || (n = Promise))((function (r, o) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        }, en = zt.a.getLogger("xmp-vip-download-kernel-helper");
        !function (e) {
            e.taskInserted = "OnTaskInserted", e.taskCompleted = "OnTaskCompleted", e.taskRemoved = "OnTaskRemoved", e.taskStatusChanged = "OnTaskStatusChanged", e.taskDetailChanged = "OnTaskDetailChanged", e.taskDcdnStatusChanged = "OnTaskDcdnStatusChanged", e.btSubFileDcdnStatusChanged = "OnBtSubFileDcdnStatusChanged", e.btSubFileDetailChanged = "OnBtSubFileDetailChanged"
        }(qt || (qt = {}));
        var tn, nn = new (function (e) {
            Object(a.a)(n, e);
            var t = Ht(n);

            function n() {
                var e;
                return Object(r.a)(this, n), (e = t.call(this)).mPeerId = void 0, e.init(), e
            }

            return Object(o.a)(n, [{
                key: "init", value: function () {
                    this.setMaxListeners(0)
                }
            }, {
                key: "getTpPeerId", value: function () {
                    return Kt(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.mPeerId) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return", this.mPeerId);
                                case 4:
                                    return e.next = 6, v.client.callServerFunction("GetTpPeerId");
                                case 6:
                                    return (t = e.sent) && "" !== t && (this.mPeerId = t), e.abrupt("return", this.mPeerId || "");
                                case 9:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "getCurrentCategoryId", value: function () {
                    return Kt(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, v.client.callServerFunction("GetCurrentCategoryId");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }
            }, {
                key: "getTaskBaseInfo", value: function (e) {
                    return Kt(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        var n, i;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return n = null, t.next = 3, v.client.callServerFunction("GetTaskBaseInfo", e);
                                case 3:
                                    if (i = t.sent) try {
                                        n = JSON.parse(i)
                                    } catch (e) {
                                        en.warning(e)
                                    }
                                    return t.abrupt("return", n);
                                case 6:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }
            }, {
                key: "getTaskGcid", value: function (e) {
                    return Kt(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        var n, i;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.getTaskBaseInfo(e);
                                case 2:
                                    return n = t.sent, i = "", n && n.gcid && (i = n.gcid), t.abrupt("return", i);
                                case 6:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })))
                }
            }, {
                key: "getTaskStatus", value: function (e) {
                    return Kt(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        var n;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, v.client.callServerFunction("GetTaskStatus", e);
                                case 2:
                                    return n = t.sent, t.abrupt("return", n);
                                case 4:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }
            }, {
                key: "IsTaskExist", value: function (e) {
                    return Kt(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        var n;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, v.client.callServerFunction("IsTaskExist", e);
                                case 2:
                                    return n = t.sent, t.abrupt("return", n);
                                case 4:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }
            }, {
                key: "getTaskDetail", value: function (e) {
                    return Kt(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        var n, i, r, o, a, s, c, l, u, d, p;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return n = null, t.next = 3, v.client.callServerFunction("GetTaskInfo", e, void 0, "taskDetail");
                                case 3:
                                    i = t.sent, en.information("getTaskDetail", i);
                                case 5:
                                    if (i) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.abrupt("break", 17);
                                case 7:
                                    r = null;
                                    try {
                                        r = JSON.parse(i)
                                    } catch (e) {
                                        en.warning(e)
                                    }
                                    if (r && r.fileList) {
                                        t.next = 11;
                                        break
                                    }
                                    return t.abrupt("break", 17);
                                case 11:
                                    o = r.infoId, a = r.type, n = {infoId: o, files: new Map}, s = Xt(r.fileList);
                                    try {
                                        for (s.s(); !(c = s.n()).done;) l = c.value, u = -1, d = l.url, a === Wt.TaskType.Bt ? (u = l.index, d = this.createBtFileUrl(l.index, o)) : a === Wt.TaskType.Group && (u = l.taskId), p = {
                                            subId: u,
                                            taskStatus: l.status,
                                            filePath: l.filePath,
                                            fileName: l.fileName,
                                            gcid: l.gcid,
                                            cid: l.cid,
                                            url: d,
                                            refUrl: l.refUrl || "",
                                            fileSize: l.fileSize,
                                            downloadSize: l.downloadSize,
                                            errCode: l.errCode,
                                            isNeedDownload: l.isNeedDownload,
                                            dcdnStatus: l.dcdnStatus
                                        }, n.files.set(u, p)
                                    } catch (e) {
                                        s.e(e)
                                    } finally {
                                        s.f()
                                    }
                                case 16:
                                    0;
                                case 17:
                                    return t.abrupt("return", n);
                                case 18:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })))
                }
            }, {
                key: "createBtTaskUrl", value: function (e) {
                    return "bt://" + e
                }
            }, {
                key: "createBtFileUrl", value: function (e, t) {
                    var n = this.createBtTaskUrl(t);
                    return n = n + "/" + e
                }
            }, {
                key: "startTask", value: function (e) {
                    this.operateTask(e, "continue")
                }
            }, {
                key: "stopTask", value: function (e) {
                    this.operateTask(e, "pause")
                }
            }, {
                key: "enableDcdnWithVipCert", value: function (e, t) {
                    return Kt(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                        return regeneratorRuntime.wrap((function (n) {
                            for (; ;) switch (n.prev = n.next) {
                                case 0:
                                    return en.information("enableDcdnWithVipCert", "taskId", e, "vipCert", t), n.next = 3, v.client.callServerFunction("EnableDcdnWithVipCert", e, t);
                                case 3:
                                case"end":
                                    return n.stop()
                            }
                        }), n)
                    })))
                }
            }, {
                key: "updateDcdnWithVipCert", value: function (e, t) {
                    return Kt(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                        return regeneratorRuntime.wrap((function (n) {
                            for (; ;) switch (n.prev = n.next) {
                                case 0:
                                    return en.information("updateDcdnWithVipCert", "taskId", e, "vipCert", t), n.next = 3, v.client.callServerFunction("UpdateDcdnWithVipCert", e, t);
                                case 3:
                                case"end":
                                    return n.stop()
                            }
                        }), n)
                    })))
                }
            }, {
                key: "disableDcdnWithVipCert", value: function (e) {
                    return Kt(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return en.information("disableDcdnWithVipCert", "taskId", e), t.next = 3, v.client.callServerFunction("DisableDcdnWithVipCert", e);
                                case 3:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }
            }, {
                key: "getDownloadingActiveTaskId", value: function () {
                    return Kt(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, v.client.callServerFunction("GetDownloadingActiveTaskId");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }
            }, {
                key: "attachDkEvents", value: function () {
                    var e = this;
                    v.client.attachServerEvent("OnTaskInserted", this.onTaskInserted.bind(this)), v.client.attachServerEvent("OnTaskRemoved", this.onTaskRemoved.bind(this)), v.client.attachServerEvent("OnTaskStatusChanged", (function (t, n) {
                        var i = null;
                        try {
                            i = JSON.parse(n)
                        } catch (e) {
                            en.warning(e)
                        }
                        if (null !== i) for (var r in i) {
                            var o = i[r];
                            e.onTaskStatusChanged(Number(r), o)
                        }
                    })), v.client.attachServerEvent("OnTaskDetailChanged", (function (t, n, i) {
                        n.forEach((function (t) {
                            return Kt(e, void 0, void 0, regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.t0 = this, e.t1 = Number(t), e.next = 4, this.getTaskBaseInfo(t);
                                        case 4:
                                            e.t2 = e.sent, e.t0.onTaskDetailChanged.call(e.t0, e.t1, e.t2);
                                        case 6:
                                        case"end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })))
                        }))
                    })), v.client.attachServerEvent("OnTaskDcdnStatusChanged", (function (t, n) {
                        if (null !== n) for (var i in n) {
                            var r = n[i];
                            e.onTaskDcdnStatusChanged(Number(i), r)
                        }
                    })), v.client.attachServerEvent("OnBtSubFileDcdnStatusChanged", this.onBtSubFileDcdnStatusChanged.bind(this)), v.client.attachServerEvent("OnBtSubFileDetailChanged", (function (t, n, i) {
                        var r = null;
                        try {
                            r = JSON.parse(i)
                        } catch (e) {
                            en.warning(e)
                        }
                        null !== r && e.onBtSubFileDetailChanged(n, r)
                    }))
                }
            }, {
                key: "operateTask", value: function (e, t, n) {
                    v.client.callServerFunction("OperateTask", e, t, n).catch()
                }
            }, {
                key: "onTaskInserted", value: function (e, t, n, i) {
                    var r = this;
                    if (en.information("onTaskInserted categoryId:", t, ", categoryViewId:", n), null !== i) switch (n) {
                        case Wt.CategroyViewID.Downloading:
                            i.forEach((function (e) {
                                r.emit(qt.taskInserted, e)
                            }));
                            break;
                        case Wt.CategroyViewID.Completed:
                            i.forEach((function (e) {
                                r.emit(qt.taskCompleted, e)
                            }))
                    }
                }
            }, {
                key: "onTaskRemoved", value: function (e, t, n, i) {
                    var r = this;
                    if (en.information("onTaskRemoved categoryId:", t, ", categoryViewId:", n), i) switch (n) {
                        case Wt.CategroyViewID.Downloading:
                        case Wt.CategroyViewID.Completed:
                            i.forEach((function (e) {
                                r.emit(qt.taskRemoved, e)
                            }))
                    }
                }
            }, {
                key: "onTaskStatusChanged", value: function (e, t) {
                    this.emit(qt.taskStatusChanged, e, t)
                }
            }, {
                key: "onTaskDetailChanged", value: function (e, t) {
                    this.emit(qt.taskDetailChanged, e, t)
                }
            }, {
                key: "onTaskDcdnStatusChanged", value: function (e, t) {
                    this.emit(qt.taskDcdnStatusChanged, e, t)
                }
            }, {
                key: "onBtSubFileDcdnStatusChanged", value: function (e, t, n, i) {
                    this.emit(qt.btSubFileDcdnStatusChanged, t, n, i)
                }
            }, {
                key: "onBtSubFileDetailChanged", value: function (e, t) {
                    this.emit(qt.btSubFileDetailChanged, e, t)
                }
            }]), n
        }(Mt.EventEmitter)), rn = function (e, t, n, i) {
            return new (n || (n = Promise))((function (r, o) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        }, on = "main-renderer", an = "vip-download-webview";
        !function (e) {
            function t(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                return rn(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                    var i;
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, v.client.callRemoteClientFunction.apply(v.client, [on, e].concat(n)).catch();
                            case 2:
                                if (!((i = t.sent) && i.length > 0)) {
                                    t.next = 5;
                                    break
                                }
                                return t.abrupt("return", i[0]);
                            case 5:
                                return t.abrupt("return", {});
                            case 6:
                            case"end":
                                return t.stop()
                        }
                    }), t)
                })))
            }

            function n() {
                return rn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var n;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, t(Zt.j.getXmpPlayType);
                            case 2:
                                return n = e.sent, e.abrupt("return", n);
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))
            }

            function i() {
                return rn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, n();
                            case 2:
                                return e.t0 = e.sent, e.t1 = Zt.i.yunBo, e.abrupt("return", e.t0 === e.t1);
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))
            }

            function r() {
                return rn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.t0 = Number, e.next = 3, t(Zt.j.getPlayingTaskId);
                            case 3:
                                return e.t1 = e.sent, e.abrupt("return", (0, e.t0)(e.t1));
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))
            }

            e.callVipPlugin = function (e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                return rn(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                    var i;
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, v.client.callRemoteClientFunction.apply(v.client, [an, e].concat(n)).catch();
                            case 2:
                                if (!((i = t.sent) && i.length > 0)) {
                                    t.next = 5;
                                    break
                                }
                                return t.abrupt("return", i[0]);
                            case 5:
                                return t.abrupt("return", {});
                            case 6:
                            case"end":
                                return t.stop()
                        }
                    }), t)
                })))
            }, e.openPayVipUrl = function (e) {
                v.client.callRemoteClientFunction(an, "OpenPayVipUrl", e).catch()
            }, e.callXmp = t, e.getXmpPlayType = n, e.isYunBo = i, e.isPlayAndDownload = function () {
                return rn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, n();
                            case 2:
                                return e.t0 = e.sent, e.t1 = Zt.i.downloadAndPlay, e.abrupt("return", e.t0 === e.t1);
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))
            }, e.isLocalPlay = function () {
                return rn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, n();
                            case 2:
                                return e.t0 = e.sent, e.t1 = Zt.i.localFile, e.abrupt("return", e.t0 === e.t1);
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))
            }, e.isYunRecvTask = function () {
                return rn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", t(Zt.j.getCurrentMediaAttribute, Zt.f.IsYunRecvTask));
                            case 1:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))
            }, e.getXmpCurrentMode = function () {
                return rn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", t(Zt.j.getXmpCurrentMode));
                            case 1:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))
            }, e.getCurrentTaskGcid = function () {
                return rn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", t(Zt.j.getCurrentMediaAttribute, Zt.f.Gcid));
                            case 1:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))
            }, e.getCurrentTaskId = r, e.getCurrentTaskUrl = function () {
                return rn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", t(Zt.j.getCurrentMediaAttribute, Zt.f.Url));
                            case 1:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))
            }, e.getCurrentTaskIdOrPanId = function () {
                return rn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, i();
                            case 2:
                                if (!e.sent) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return", t(Zt.j.getCurrentMediaAttribute, Zt.f.PanFileId));
                            case 6:
                                return e.abrupt("return", t(Zt.j.getPlayingTaskId));
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))
            }, e.getCurrentTaskStatus = function () {
                return rn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var t;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, r();
                            case 2:
                                return t = e.sent, e.abrupt("return", nn.getTaskStatus(t));
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))
            }, e.isZipPlay = function () {
                return rn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", t(Zt.j.getCurrentMediaAttribute, Zt.f.IsZipPlay));
                            case 1:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))
            }, e.getStatPlayType = function () {
                return rn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", t(Zt.j.getCurrentMediaAttribute, Zt.f.PlayType));
                            case 1:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))
            }, e.getStatPlayfrom = function () {
                return rn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var n;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, t(Zt.j.getCurrentMediaAttribute, Zt.f.PlayFrom);
                            case 2:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 5;
                                    break
                                }
                                e.t0 = "";
                            case 5:
                                return n = e.t0, e.abrupt("return", n);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))
            }, e.getStatOpenFrom = function () {
                return rn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var n;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, t(Zt.j.getCurrentMediaAttribute, Zt.f.OpenFrom);
                            case 2:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 5;
                                    break
                                }
                                e.t0 = "";
                            case 5:
                                return n = e.t0, e.abrupt("return", n);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))
            }, e.trackShowEvnet = function (e, n, i) {
                t("TrackShowEvent", (new Date).getTime(), e, n, function (e) {
                    var t = "";
                    return e.forEach((function (e, n) {
                        "" !== t && (t += ","), t = t + n + "=" + e
                    })), t
                }(i)).catch()
            }
        }(tn || (tn = {}));
        var sn, cn = n(1476), ln = function (e, t, n, i) {
            return new (n || (n = Promise))((function (r, o) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        }, un = zt.a.getLogger("xmp-vip-plugin-helper"), dn = new (function () {
            function e() {
                Object(r.a)(this, e), this.mThunderVersionStr = void 0, this.mThunderVersionNumber = void 0, this.mPluginVersion = void 0
            }

            return Object(o.a)(e, [{
                key: "setPluginInfo", value: function (e, t, n) {
                    this.mThunderVersionStr = e, this.mThunderVersionNumber = t, this.mPluginVersion = n, localStorage.setItem("VipPluginHelper.ThunderVersionStr", this.mThunderVersionStr), localStorage.setItem("VipPluginHelper.ThunderVersionNumber", this.mThunderVersionNumber.toString()), localStorage.setItem("VipPluginHelper.PluginVersion", this.mPluginVersion), un.information("setPluginInfo", e, t, n)
                }
            }, {
                key: "getXmpMode", value: function () {
                    return ln(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, tn.getXmpCurrentMode();
                                case 2:
                                    t = e.sent, un.information("XMPShowMode", t), e.t0 = t, e.next = e.t0 === Zt.h.EMBED_MODE ? 7 : 8;
                                    break;
                                case 7:
                                    return e.abrupt("return", "pannel");
                                case 8:
                                    return e.abrupt("return", "xmp");
                                case 9:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }
            }, {
                key: "thunderVersionNumber", get: function () {
                    return this.mThunderVersionNumber || Number(localStorage.getItem("VipPluginHelper.ThunderVersionNumber"))
                }
            }, {
                key: "thunderVersionString", get: function () {
                    return this.mThunderVersionStr || localStorage.getItem("VipPluginHelper.ThunderVersionStr")
                }
            }, {
                key: "pluginVersion", get: function () {
                    return this.mPluginVersion || localStorage.getItem("VipPluginHelper.PluginVersion")
                }
            }, {
                key: "currentTime", get: function () {
                    return Math.floor((new Date).getTime() / 1e3)
                }
            }, {
                key: "clientName", get: function () {
                    return "xl_xmp"
                }
            }]), e
        }()), pn = zt.a.getLogger("vip-stat-utilities");
        !function (e) {
            e.trackEvent = function (e, t) {
                var n = (t = t || {}).attribute1 || "", i = t.attribute2 || "", r = t.extData || new Map;
                r.set("plugin_version", dn.pluginVersion), r.set("client_version", dn.thunderVersionString);
                var o = function (e) {
                    var t = "";
                    return e.forEach((function (e, n) {
                        "" !== t && (t += ","), t = t + n + "=" + e
                    })), t
                }(r);
                pn.information("key", e), pn.information("attribute1", n), pn.information("attribute2", i), pn.information("extData", o), v.client.callServerFunction("TrackEvent", e, n, i, 0, 0, 0, 0, o).catch()
            }, e.initUtilities = function () {
                var e = {TrackShowEvent: n};
                v.client.registerFunctions(e)
            };
            var t = new Map;

            function n(e) {
                var n = arguments.length <= 1 ? void 0 : arguments[1],
                    i = arguments.length <= 2 ? void 0 : arguments[2],
                    r = arguments.length <= 3 ? void 0 : arguments[3],
                    o = arguments.length <= 4 ? void 0 : arguments[4];
                do {
                    if (t.has(r) && n - t.get(r) < 2e3) {
                        pn.information("break trackShowEvent", n, r), t.get(r);
                        break
                    }
                    pn.information("key", i, "attribute1", r, "extData", o), v.client.callServerFunction("TrackEvent", i, r, "", 0, 0, 0, 0, o).catch()
                } while (0);
                t.set(r, n)
            }
        }(sn || (sn = {}));
        var fn, hn = function (e, t, n, i) {
            return new (n || (n = Promise))((function (r, o) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        }, vn = zt.a.getLogger("track-stat-xmp-vip");
        !function (e) {
            function t() {
                var e = 0;
                return Gt.isVip && (e = 1), e
            }

            function n() {
                var e = 0;
                return Gt.isSuperVip ? e = 5 : Gt.isPlatinumVip ? e = 3 : Gt.isVip && (e = 2), e
            }

            e.firstBufferShow = function (e, t) {
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                    var i, o, a;
                    return regeneratorRuntime.wrap((function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                return i = "xlx_vip_event", n.next = 3, r();
                            case 3:
                                (o = n.sent).set("gcid", e), o.set("is_delay", t), a = {
                                    attribute1: "bxbb_buffer_qp_show",
                                    extData: o
                                }, tn.trackShowEvnet(i, a.attribute1, a.extData);
                            case 8:
                            case"end":
                                return n.stop()
                        }
                    }), n)
                })))
            }, e.firstBufferClick = function (e, t) {
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                    var i, o, a;
                    return regeneratorRuntime.wrap((function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                return i = "xlx_vip_event", n.next = 3, r();
                            case 3:
                                (o = n.sent).set("gcid", e), o.set("is_delay", t), a = {
                                    attribute1: "bxbb_buffer_qp_click",
                                    extData: o
                                }, sn.trackEvent(i, a);
                            case 8:
                            case"end":
                                return n.stop()
                        }
                    }), n)
                })))
            }, e.bxbbStuckShow = function (e, t) {
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                    var i, o, a;
                    return regeneratorRuntime.wrap((function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                return i = "xlx_vip_event", n.next = 3, r();
                            case 3:
                                (o = n.sent).set("is_nature", e), o.set("is_delay", t), a = {
                                    attribute1: "bxbb_buffer_open_show",
                                    extData: o
                                }, tn.trackShowEvnet(i, a.attribute1, a.extData);
                            case 8:
                            case"end":
                                return n.stop()
                        }
                    }), n)
                })))
            }, e.bxbbStuckClick = function (e, t) {
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                    var i, o, a;
                    return regeneratorRuntime.wrap((function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                return i = "xlx_vip_event", n.next = 3, r();
                            case 3:
                                (o = n.sent).set("is_nature", e), o.set("is_delay", t), a = {
                                    attribute1: "bxbb_buffer_open_click",
                                    extData: o
                                }, sn.trackEvent(i, a);
                            case 8:
                            case"end":
                                return n.stop()
                        }
                    }), n)
                })))
            }, e.vipButtonShow = function (e) {
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                    var n, i, o;
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return vn.information("vipButtonShow"), n = "xlx_vip_event", t.next = 4, r();
                            case 4:
                                (i = t.sent).set("gcid", e), o = {
                                    attribute1: "bxbb_vipspeedup_btn_show",
                                    extData: i
                                }, tn.trackShowEvnet(n, o.attribute1, o.extData);
                            case 8:
                            case"end":
                                return t.stop()
                        }
                    }), t)
                })))
            }, e.vipButtonClick = function (e) {
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                    var n, i, o;
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return vn.information("vipButtonClick"), n = "xlx_vip_event", t.next = 4, r();
                            case 4:
                                (i = t.sent).set("gcid", e), o = {
                                    attribute1: "bxbb_vipspeedup_btn_click",
                                    extData: i
                                }, sn.trackEvent(n, o);
                            case 8:
                            case"end":
                                return t.stop()
                        }
                    }), t)
                })))
            }, e.playSpeedShow = function () {
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var t, n, i;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return vn.information("playSpeedShow"), t = "xlx_vip_event", e.next = 4, r();
                            case 4:
                                n = e.sent, i = {
                                    attribute1: "xmp_play_speed_option_show",
                                    extData: n
                                }, tn.trackShowEvnet(t, i.attribute1, i.extData);
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))
            }, e.playSpeedClick = function (e) {
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                    var n, i, o;
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return vn.information("playSpeedClick"), n = "xlx_vip_event", t.next = 4, r();
                            case 4:
                                (i = t.sent).set("clickid", "speed".concat(e)), o = {
                                    attribute1: "xmp_play_speed_option_click",
                                    extData: i
                                }, sn.trackEvent(n, o);
                            case 8:
                            case"end":
                                return t.stop()
                        }
                    }), t)
                })))
            }, e.xmpPlayStart = function (e, t) {
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                    var i, o, a;
                    return regeneratorRuntime.wrap((function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                if (e) {
                                    n.next = 2;
                                    break
                                }
                                return n.abrupt("return");
                            case 2:
                                return vn.information("xmpPlayStart"), i = "xlx_vip_event", n.next = 6, r();
                            case 6:
                                (o = n.sent).set("player_type", e), o.set("play_type", t), a = {
                                    attribute1: "xmp_play_start",
                                    extData: o
                                }, sn.trackEvent(i, a);
                            case 11:
                            case"end":
                                return n.stop()
                        }
                    }), n)
                })))
            }, e.xmpVideoLoadOpenYunboBtnShow = function (e, t, i) {
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function r() {
                    var o, a;
                    return regeneratorRuntime.wrap((function (r) {
                        for (; ;) switch (r.prev = r.next) {
                            case 0:
                                vn.information("xmpVideoLoadOpenYunboBtnShow"), "xlx_vip_event", (o = new Map).set("components_type", e), o.set("play_from", t), o.set("vip_type", n()), o.set("btn_position", i), a = {
                                    attribute1: "xmp_video_load_open_yunbo_btn_show",
                                    extData: o
                                }, tn.trackShowEvnet("xlx_vip_event", a.attribute1, a.extData);
                            case 9:
                            case"end":
                                return r.stop()
                        }
                    }), r)
                })))
            }, e.xmpVideoLoadOpenYunboBtnClick = function (e, t, i) {
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function r() {
                    var o, a;
                    return regeneratorRuntime.wrap((function (r) {
                        for (; ;) switch (r.prev = r.next) {
                            case 0:
                                vn.information("xmpVideoLoadOpenYunboBtnClick"), "xlx_vip_event", (o = new Map).set("components_type", e), o.set("play_from", t), o.set("vip_type", n()), o.set("btn_position", i), a = {
                                    attribute1: "xmp_video_load_open_yunbo_btn_click",
                                    extData: o
                                }, sn.trackEvent("xlx_vip_event", a);
                            case 9:
                            case"end":
                                return r.stop()
                        }
                    }), r)
                })))
            }, e.vipSpeedShow = function (e, t, n, i, o, a) {
                var s = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function c() {
                    var l, u, d;
                    return regeneratorRuntime.wrap((function (c) {
                        for (; ;) switch (c.prev = c.next) {
                            case 0:
                                return l = "xlx_vip_event", c.next = 3, r();
                            case 3:
                                (u = c.sent).set("task_type", e), u.set("gcid", t), u.set("url", n), u.set("area", i), u.set("current_speed", o), u.set("try_status", a), d = {
                                    attribute1: "play_speed_option_show",
                                    extData: u
                                }, s ? tn.trackShowEvnet(l, d.attribute1, d.extData) : sn.trackEvent(l, d);
                            case 12:
                            case"end":
                                return c.stop()
                        }
                    }), c)
                })))
            }, e.vipSpeedClick = function (e, t, n, i, o, a, s) {
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function c() {
                    var l, u, d;
                    return regeneratorRuntime.wrap((function (c) {
                        for (; ;) switch (c.prev = c.next) {
                            case 0:
                                return l = "xlx_vip_event", c.next = 3, r();
                            case 3:
                                (u = c.sent).set("task_type", e), u.set("gcid", t), u.set("url", n), u.set("area", i), u.set("current_speed", o), u.set("click_id", a), u.set("try_status", s), d = {
                                    attribute1: "play_speed_option_click",
                                    extData: u
                                }, sn.trackEvent(l, d);
                            case 13:
                            case"end":
                                return c.stop()
                        }
                    }), c)
                })))
            }, e.playTryReadyShow = function (e, t, n, i, o) {
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function i() {
                    var a, s, c;
                    return regeneratorRuntime.wrap((function (i) {
                        for (; ;) switch (i.prev = i.next) {
                            case 0:
                                return a = "xlx_vip_event", i.next = 3, r();
                            case 3:
                                (s = i.sent).set("gcid", e), s.set("try_num", t), s.set("area", n), s.set("video_duration", Math.floor(o / 60)), c = {
                                    attribute1: "bxbb_hyjs_before_try_show",
                                    extData: s
                                }, tn.trackShowEvnet(a, c.attribute1, c.extData);
                            case 10:
                            case"end":
                                return i.stop()
                        }
                    }), i)
                })))
            }, e.playTryReadyClick = function (e, t, n, i, o) {
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function i() {
                    var a, s, c;
                    return regeneratorRuntime.wrap((function (i) {
                        for (; ;) switch (i.prev = i.next) {
                            case 0:
                                return a = "xlx_vip_event", i.next = 3, r();
                            case 3:
                                (s = i.sent).set("gcid", e), s.set("try_num", t), s.set("area", n), s.set("video_duration", Math.floor(o / 60)), c = {
                                    attribute1: "bxbb_hyjs_before_try_click",
                                    extData: s
                                }, sn.trackEvent(a, c);
                            case 10:
                            case"end":
                                return i.stop()
                        }
                    }), i)
                })))
            }, e.playTryRuningShow = function (e, t, n, i, o) {
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                    var a, s, c;
                    return regeneratorRuntime.wrap((function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                return a = "xlx_vip_event", n.next = 3, r();
                            case 3:
                                (s = n.sent).set("gcid", e), s.set("area", t), s.set("video_duration", Math.floor(i / 60)), s.set("before_speed", o), c = {
                                    attribute1: "bxbb_hyjs_trying_show",
                                    extData: s
                                }, tn.trackShowEvnet(a, c.attribute1, c.extData);
                            case 10:
                            case"end":
                                return n.stop()
                        }
                    }), n)
                })))
            }, e.playTryRuningClick = function (e, t, n, i) {
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                    var o, a, s;
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return o = "xlx_vip_event", t.next = 3, r();
                            case 3:
                                (a = t.sent).set("gcid", e), a.set("area", "bottom"), a.set("video_duration", Math.floor(n / 60)), a.set("before_speed", i), a.set("referfrom", "v_pc_xl11_hytq_bxbb_hyjs_sy"), a.set("aidfrom", "bottom_trying"), s = {
                                    attribute1: "bxbb_hyjs_trying_click",
                                    extData: a
                                }, sn.trackEvent(o, s);
                            case 12:
                            case"end":
                                return t.stop()
                        }
                    }), t)
                })))
            }, e.playTryAfterShow = function (e, t, n, i, o, a) {
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                    var s, c, l;
                    return regeneratorRuntime.wrap((function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                return s = "xlx_vip_event", n.next = 3, r();
                            case 3:
                                (c = n.sent).set("gcid", e), c.set("area", t), c.set("video_duration", Math.floor(i / 60)), c.set("before_speed", o), c.set("ing_speed", a), l = {
                                    attribute1: "bxbb_hyjs_after_try_show",
                                    extData: c
                                }, tn.trackShowEvnet(s, l.attribute1, l.extData);
                            case 11:
                            case"end":
                                return n.stop()
                        }
                    }), n)
                })))
            }, e.playTryAfterClick = function (e, t, n, i, o, a) {
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                    var s, c, l;
                    return regeneratorRuntime.wrap((function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                return s = "xlx_vip_event", n.next = 3, r();
                            case 3:
                                (c = n.sent).set("gcid", e), c.set("area", t), c.set("video_duration", Math.floor(i / 60)), c.set("before_speed", o), c.set("ing_speed", a), c.set("referfrom", "v_pc_xl11_hytq_bxbb_hyjs_sy"), c.set("aidfrom", "bottom_after"), l = {
                                    attribute1: "bxbb_hyjs_after_try_click",
                                    extData: c
                                }, sn.trackEvent(s, l);
                            case 13:
                            case"end":
                                return n.stop()
                        }
                    }), n)
                })))
            }, e.playTryShowBeginTips = function (e, t, n, i) {
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                    var o, a, s;
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return o = "xlx_vip_event", t.next = 3, r();
                            case 3:
                                (a = t.sent).set("gcid", e), a.set("video_duration", Math.floor(n / 60)), a.set("before_speed", i), s = {
                                    attribute1: "bxbb_hyjs_trying_tips_show",
                                    extData: a
                                }, tn.trackShowEvnet(o, s.attribute1, s.extData);
                            case 9:
                            case"end":
                                return t.stop()
                        }
                    }), t)
                })))
            }, e.playTryShowFinishTips = function (e, t, n, i, o) {
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function a() {
                    var s, c, l;
                    return regeneratorRuntime.wrap((function (a) {
                        for (; ;) switch (a.prev = a.next) {
                            case 0:
                                return s = "xlx_vip_event", a.next = 3, r();
                            case 3:
                                (c = a.sent).set("gcid", e), c.set("is_ypdl", t ? 1 : 0), c.set("video_duration", Math.floor(n / 60)), c.set("before_speed", i), c.set("ing_speed", o), l = {
                                    attribute1: "bxbb_hyjs_after_trying_tips_show",
                                    extData: c
                                }, tn.trackShowEvnet(s, l.attribute1, l.extData);
                            case 11:
                            case"end":
                                return a.stop()
                        }
                    }), a)
                })))
            }, e.playTryFinishTipsClick = function (e, t, n, i, o, a) {
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function s() {
                    var c, l, u;
                    return regeneratorRuntime.wrap((function (s) {
                        for (; ;) switch (s.prev = s.next) {
                            case 0:
                                return c = "xlx_vip_event", s.next = 3, r();
                            case 3:
                                (l = s.sent).set("gcid", e), l.set("is_ypdl", t ? 1 : 0), l.set("click_id", n), l.set("video_duration", Math.floor(i / 60)), l.set("before_speed", o), l.set("ing_speed", a), l.set("referfrom", "v_pc_xl11_hytq_bxbb_hyjs_sy"), l.set("aidfrom", "tips_after"), u = {
                                    attribute1: "bxbb_hyjs_after_trying_tips_click",
                                    extData: l
                                }, sn.trackEvent(c, u);
                            case 14:
                            case"end":
                                return s.stop()
                        }
                    }), s)
                })))
            }, e.playTryAfterOneMin = function (e, t, n, i, o, a, s) {
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                    var c, l, u;
                    return regeneratorRuntime.wrap((function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                return c = "xlx_vip_event", n.next = 3, r();
                            case 3:
                                (l = n.sent).set("gcid", e), l.set("area", t), l.set("video_duration", Math.floor(i / 60)), l.set("before_speed", o), l.set("ing_speed", a), l.set("after_speed", s), u = {
                                    attribute1: "bxbb_hyjs_after_try_1min",
                                    extData: l
                                }, tn.trackShowEvnet(c, u.attribute1, u.extData);
                            case 12:
                            case"end":
                                return n.stop()
                        }
                    }), n)
                })))
            };
            var i = "";

            function r() {
                return hn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var r, o, a, s;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return r = new Map, c = void 0, c = 0, Gt.isLogin && (c = 1), o = c, a = t(), s = n(), r.set("is_login", o), r.set("is_vip", a), r.set("vip_type", s), r.set("plugin_version", dn.pluginVersion), r.set("client_version", dn.thunderVersionString), e.t0 = r, e.next = 12, dn.getXmpMode();
                            case 12:
                                if (e.t1 = e.sent, e.t0.set.call(e.t0, "player_type", e.t1), i) {
                                    e.next = 18;
                                    break
                                }
                                return e.next = 17, v.client.callServerFunction("GetTpPeerId");
                            case 17:
                                i = e.sent;
                            case 18:
                                return r.set("cpeerid", i), e.abrupt("return", r);
                            case 20:
                            case"end":
                                return e.stop()
                        }
                        var c
                    }), e)
                })))
            }
        }(fn || (fn = {}));
        var yn, mn = function (e, t, n, i) {
            return new (n || (n = Promise))((function (r, o) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        }, bn = zt.a.getLogger("XmpPlayTry");

        function gn(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        !function (e) {
            var t, n, i, r;
            !function (e) {
                e.none = "PlayTry.State.none", e.ready = "PlayTry.State.ready", e.commiting = "PlayTry.State.commiting", e.commifailed = "PlayTry.State.commifailed", e.runing = "PlayTry.State.runing", e.stop = "PlayTry.State.stop", e.finish = "PlayTry.State.finish", e.over = "PlayTry.State.over"
            }(t = e.State || (e.State = {})), function (e) {
                e.stateChange = "PlayTry.Event.stateChange", e.acclerateUpdate = "PlayTry.Event.acclerateUpdate", e.progessUpdate = "PlayTry.Event.progessUpdate", e.activeTaskDel = "PlayTry.Event.activeTaskDel", e.afterFinishOneMin = "PlayTry.Event.afterFinishOneMin"
            }(n = e.Event || (e.Event = {})), function (e) {
                e.getState = "GetState", e.getStateInfo = "GetStateInfo", e.gotoPlayTry = "GotoPlayTry", e.clearPlayTry = "ClearPlayTry", e.tryShowPlayTry = "TryShowPlayTry"
            }(i = e.Function || (e.Function = {})), function (e) {
                e.stateChange = "PlayTry.FireEvent.StateChange"
            }(r = e.FireEvent || (e.FireEvent = {}));
            var o = {state: t.none, useTick: 0, allTick: 60, vipspeed: 0, speed: 0, isCloudTask: !1}, a = new Map;

            function s(e, n) {
                return mn(this, void 0, void 0, regeneratorRuntime.mark((function r() {
                    var s, c;
                    return regeneratorRuntime.wrap((function (r) {
                        for (; ;) switch (r.prev = r.next) {
                            case 0:
                                if (e) {
                                    r.next = 2;
                                    break
                                }
                                return r.abrupt("return", tn.callXmp(i.getState, n));
                            case 2:
                                if (o.state !== t.ready) {
                                    r.next = 18;
                                    break
                                }
                                if (s = a.get(n), bn.information("vipTaskInfo", n, s), s && !s.isHResource && void 0 !== s.isHResource && !s.isCloudTask) {
                                    r.next = 7;
                                    break
                                }
                                return r.abrupt("return", t.none);
                            case 7:
                                return r.next = 9, tn.callXmp(Zt.j.getDuration);
                            case 9:
                                if (!((c = r.sent) < 6e5)) {
                                    r.next = 13;
                                    break
                                }
                                return bn.information("durnation < 600000, cant not try", c), r.abrupt("return", t.none);
                            case 13:
                                return r.next = 15, tn.callXmp(Zt.j.isPlayMusic);
                            case 15:
                                if (!r.sent) {
                                    r.next = 18;
                                    break
                                }
                                return bn.information("is music, cant not try"), r.abrupt("return", t.none);
                            case 18:
                                return r.abrupt("return", o.state);
                            case 19:
                            case"end":
                                return r.stop()
                        }
                    }), r)
                })))
            }

            function c(e) {
                return mn(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                if (e) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return", tn.callXmp(i.getStateInfo));
                            case 2:
                                return t.abrupt("return", o);
                            case 3:
                            case"end":
                                return t.stop()
                        }
                    }), t)
                })))
            }

            function l(e, n, i) {
                return mn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var s;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return bn.information("onStateChange", n, i), e.t0 = a, e.next = 4, tn.getCurrentTaskId();
                            case 4:
                                e.t1 = e.sent, (s = e.t0.get.call(e.t0, e.t1)) && (o.isCloudTask = s.isCloudTask), e.t2 = n, e.next = e.t2 === t.ready ? 10 : 13;
                                break;
                            case 10:
                                return o.state = n, o.tryNum = i.tryNum, e.abrupt("break", 18);
                            case 13:
                                return o.state = n, o.tryNum = i.tryNum, t.finish === n && (o.beforeSpeed = i.beforeSpeed, o.tryingSpeed = i.tryingSpeed, o.promotePercent = i.percent), void 0 !== i.beforeSpeed && (o.beforeSpeed = i.beforeSpeed), e.abrupt("break", 18);
                            case 18:
                                o.stateChangeTick = (new Date).getTime(), cn.server.fireClientEvent(r.stateChange);
                            case 20:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))
            }

            function u(e, t, n, i, a) {
                return mn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                o.useTick = t, o.allTick = n, o.speed = i, o.vipspeed = a, bn.information("onProgessUpdate", o), cn.server.fireClientEvent(r.stateChange);
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))
            }

            function p(e, t, n) {
                return mn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var i, o;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                i = a.get(t), o = {
                                    isCloudTask: n.isCloudTask,
                                    isHResource: n.isHResource,
                                    isPlayAndDownload: n.isPlayAndDownload
                                }, a.set(t, o), i && i.isHResource !== o.isHResource && cn.server.fireClientEvent(r.stateChange), bn.information("onVipTaskInfoChanged", t, o);
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))
            }

            function f(e) {
                return mn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                bn.information("onXmpStop"), o = {
                                    state: t.none,
                                    useTick: 0,
                                    allTick: 60,
                                    vipspeed: 0,
                                    speed: 0,
                                    isCloudTask: !1
                                }, tn.callVipPlugin(i.clearPlayTry).catch();
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))
            }

            function h(e) {
                return mn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (e.t1 = !Gt.isVip, !e.t1) {
                                    e.next = 5;
                                    break
                                }
                                return e.next = 4, tn.isPlayAndDownload();
                            case 4:
                                e.t1 = e.sent;
                            case 5:
                                if (e.t0 = e.t1, !e.t0) {
                                    e.next = 10;
                                    break
                                }
                                return e.next = 9, tn.isYunRecvTask();
                            case 9:
                                e.t0 = !e.sent;
                            case 10:
                                if (!e.t0) {
                                    e.next = 20;
                                    break
                                }
                                return bn.information("onXmpPlaying TryShowPlayTry"), e.t2 = tn, e.t3 = i.tryShowPlayTry, e.next = 16, tn.getCurrentTaskId();
                            case 16:
                                e.t4 = e.sent, e.t2.callVipPlugin.call(e.t2, e.t3, e.t4).catch(), e.next = 21;
                                break;
                            case 20:
                                bn.information("onXmpPlaying isPlayAndDownload");
                            case 21:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))
            }

            function y(e, t, n, i) {
                return mn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var r;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return bn.information("onAfterFinishOneMin"), e.next = 3, tn.callXmp(Zt.j.getDuration);
                            case 3:
                                return r = e.sent, e.t0 = fn, e.next = 7, tn.getCurrentTaskGcid();
                            case 7:
                                e.t1 = e.sent, e.t2 = o.isCloudTask, e.t3 = Math.floor(r / 1e3), e.t4 = Math.floor(t / 1024), e.t5 = Math.floor(n / 1024), e.t6 = Math.floor(i / 1024), e.t0.playTryAfterOneMin.call(e.t0, e.t1, "bottom", e.t2, e.t3, e.t4, e.t5, e.t6).catch();
                            case 14:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))
            }

            e.init = function () {
                return mn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    var t, r, o, a;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return v.client.attachServerEvent(n.stateChange, l), v.client.attachServerEvent(n.progessUpdate, u), v.client.attachServerEvent("OnVipTaskInfoChanged", p), v.client.attachServerEvent(Zt.e.onStop, f), v.client.attachServerEvent(Zt.e.onPlaying, h), v.client.attachServerEvent(n.afterFinishOneMin, y), t = {}, Object(d.a)(t, i.getState, s), Object(d.a)(t, i.getStateInfo, c), r = t, v.client.registerFunctions(r), e.next = 10, tn.callVipPlugin("GetPackageTryState");
                            case 10:
                                return o = e.sent, e.next = 13, tn.callVipPlugin("GetPackageTryPlayNum");
                            case 13:
                                a = e.sent, l(null, o, {tryNum: a}).catch();
                            case 15:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))
            }, e.getState = s, e.getStateInfo = c
        }(yn || (yn = {}));
        var xn = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, kn = function (e, t, n, i) {
            return new (n || (n = Promise))((function (r, o) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        }, _n = zt.a.getLogger("video-state"), wn = function (e) {
            Object(a.a)(n, e);
            var t = gn(n);

            function n() {
                var e;
                return Object(r.a)(this, n), (e = t.apply(this, arguments)).xmpMediaState = Zt.g.Invalid, e.xmpMediaStateDesc = "", e.isYunBo = !1, e.isDownloadAndPlay = !1, e.isLocalPlay = !1, e.errorText = "", e.errorCode = 0, e.speedText = "0KB", e.xmpMode = Zt.h.UNKNOWN_MODE, e.isDownloadCodecEvent = !1, e.name = "", e.progress = 0, e.progressStye = "width:0%", e.isDownloadCodec = !1, e.xmpClose = !1, e.bufferPercent = 100, e.isNewVideo = !0, e.readSpeedTimer = null, e.forceLoading = 0, e.codecTimeOut = null, e.preShowPage = "", e
            }

            return Object(o.a)(n, [{
                key: "onPanFileIdChange", value: function () {
                    this.isNewVideo = !0
                }
            }, {
                key: "onForceLoadingChange", value: function () {
                    this.emitState()
                }
            }, {
                key: "onStateDescChange", value: function () {
                    this.emitState()
                }
            }, {
                key: "onBufferPercentChange", value: function () {
                    this.emitState()
                }
            }, {
                key: "onIsDownloadCodecChange", value: function () {
                    this.emitState()
                }
            }, {
                key: "onXmpModeChange", value: function () {
                    this.information("onXmpModeChange", this.xmpMode), this.$emit("xmp-mode-change", this.xmpMode)
                }
            }, {
                key: "onBeginForceLoadingChange", value: function () {
                    this.emitState()
                }
            }, {
                key: "readSpeed", value: function () {
                    return kn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.t0 = Number, e.next = 3, tn.callXmp(Zt.j.getConfig, Zt.a.CONFIGID_READSPEED);
                                case 3:
                                    e.t1 = e.sent, t = (0, e.t0)(e.t1), this.information("readSpeed", t), t ? t > 1024 ? (t /= 1024, this.speedText = "".concat(t.toFixed(2), "MB")) : this.speedText = "".concat(t.toFixed(0), "KB") : this.speedText = "0KB";
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "updateReadSpeed", value: function () {
                    var e = this;
                    if (this.readSpeed(), this.isLoading || this.isBuffering || "" === this.xmpMediaStateDesc) {
                        if (this.readSpeedTimer) return;
                        this.readSpeedTimer = setInterval((function () {
                            e.readSpeed()
                        }), 1e3)
                    } else this.readSpeedTimer && (clearInterval(this.readSpeedTimer), this.readSpeedTimer = null)
                }
            }, {
                key: "emitState", value: function () {
                    var e = "";
                    this.isDownloadCodec ? e = "codec" : this.isLoading ? e = "loading" : this.isBuffering ? e = "buffering" : this.isError ? e = "error" : this.isPlaying ? e = "playing" : this.xmpClose && (e = "close"), this.updateReadSpeed(), this.information("video-state-change", e, "desc", this.xmpMediaStateDesc, "buffer", this.bufferPercent, "forceloading", this.forceLoading), this.$emit("video-state-change", e)
                }
            }, {
                key: "information", value: function () {
                    if (this.loggerEnable) {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        _n.information.apply(_n, [this.isEmbed ? "in preview" : "in float", this.isXmpEmbedPlay ? "embedplay" : "windowplay", "xmpState", this.xmpMediaState, "userHelper.isVip", Gt.isVip, "xmpMode", this.xmpMode, "beginForceloading", this.beginForceLoading].concat(t))
                    }
                }
            }, {
                key: "attachDownloadCodecEvent", value: function () {
                    var e = this;
                    v.client.attachServerEvent("OnDownloadCodec", (function () {
                        e.isDownloadCodecEvent = !0, e.isDownloadCodec = !0, e.checkXmpStateDesc(), e.codecTimeOut && (clearTimeout(e.codecTimeOut), e.codecTimeOut = null)
                    })), v.client.attachServerEvent("OnDownloadCodecProgress", (function (t, n, i, r) {
                        return kn(e, void 0, void 0, regeneratorRuntime.mark((function e() {
                            var t = this;
                            return regeneratorRuntime.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        this.name = n, this.progress = i, this.progressStye = "width:" + i + "%", r ? this.codecTimeOut = setTimeout((function () {
                                            t.isDownloadCodec = !1, t.checkXmpStateDesc()
                                        }), 1500) : this.codecTimeOut && (clearTimeout(this.codecTimeOut), this.codecTimeOut = null);
                                    case 4:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, this)
                        })))
                    })), v.client.callRemoteClientFunction(Qt.mainRendererContext, "OnGetCachedDownloadCodecInfo").then((function (t) {
                        !e.isDownloadCodecEvent && t[0] && t[0].downloading && (e.isDownloadCodec = !0, e.name = t[0].name, e.progress = t[0].progress, e.progressStye = "width:" + t[0].progress + "%", e.checkXmpStateDesc())
                    }))
                }
            }, {
                key: "cancelDownload", value: function () {
                    v.client.callRemoteClientFunction(Qt.mainRendererContext, "OnCancelDownloadCodecs"), v.client.callRemoteClientFunction(Qt.mainRendererContext, "XmpPlayerClose")
                }
            }, {
                key: "created", value: function () {
                    return kn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, tn.callXmp(Zt.j.getXmpCurrentMode);
                                case 2:
                                    return this.xmpMode = e.sent, this.information("this.xmpMode", this.xmpMode), e.next = 6, tn.callXmp("IsForceloading");
                                case 6:
                                    return this.forceLoading = e.sent, this.attachPlayerEvent(), this.attachDownloadCodecEvent(), e.next = 11, this.checkXmpStateDesc();
                                case 11:
                                    return e.next = 13, this.checkPlayType();
                                case 13:
                                    this.emitState();
                                case 14:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "attachPlayerEvent", value: function () {
                    return kn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t = this;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    [Zt.e.onError, Zt.e.onOpenSucceeded, Zt.e.onPlaying, Zt.e.onPreOpen, Zt.e.onPaused, Zt.e.onPlayCompleted, Zt.e.onPreStop, Zt.e.onStop, Zt.e.onForceLoadingState, Zt.e.onBuffer, Zt.e.onXmpClose, Zt.e.onAllStoped, Zt.e.onClearError].forEach((function (e) {
                                        v.client.attachServerEvent(e, (function (n) {
                                            for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) r[o - 1] = arguments[o];
                                            return kn(t, void 0, void 0, regeneratorRuntime.mark((function t() {
                                                return regeneratorRuntime.wrap((function (t) {
                                                    for (; ;) switch (t.prev = t.next) {
                                                        case 0:
                                                            e === Zt.e.onXmpClose || e === Zt.e.onStop ? this.xmpClose = !0 : this.xmpClose = !1, t.t0 = e, t.next = t.t0 === Zt.e.onPreOpen ? 4 : t.t0 === Zt.e.onError ? 10 : t.t0 === Zt.e.onForceLoadingState ? 13 : t.t0 === Zt.e.onClearError ? 15 : t.t0 === Zt.e.onBuffer ? 17 : 19;
                                                            break;
                                                        case 4:
                                                            return this.bufferPercent = 100, t.next = 7, tn.callXmp("IsForceloading");
                                                        case 7:
                                                            return this.forceLoading = t.sent, this.checkPlayType(), t.abrupt("break", 19);
                                                        case 10:
                                                            return this.errorText = Zt.d.getErrorTextByErrorCode(r[1]), this.errorCode = r[1], t.abrupt("break", 19);
                                                        case 13:
                                                            return this.forceLoading = r[0], t.abrupt("break", 19);
                                                        case 15:
                                                            return this.isError && (this.errorCode = 0, this.xmpMediaStateDesc = ""), t.abrupt("break", 19);
                                                        case 17:
                                                            return this.bufferPercent = Number(r[0]), t.abrupt("break", 19);
                                                        case 19:
                                                            this.information.apply(this, ["onXmpEvent", e, n].concat(r)), this.checkXmpStateDesc(void 0, e), this.emitState();
                                                        case 22:
                                                        case"end":
                                                            return t.stop()
                                                    }
                                                }), t, this)
                                            })))
                                        }))
                                    })), v.client.attachServerEvent(Zt.c.onXmpModeChanged, (function (e, n, i, r) {
                                        return kn(t, void 0, void 0, regeneratorRuntime.mark((function e() {
                                            return regeneratorRuntime.wrap((function (e) {
                                                for (; ;) switch (e.prev = e.next) {
                                                    case 0:
                                                        this.xmpMode = i, this.information("onXmpModeChanged", n, i);
                                                    case 2:
                                                    case"end":
                                                        return e.stop()
                                                }
                                            }), e, this)
                                        })))
                                    }));
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }
            }, {
                key: "backToEmbed", value: function () {
                    return kn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t, n;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return tn.callXmp(Zt.j.setXmpCurrentMode, Zt.h.EMBED_MODE).catch(), t = "button=embed_play,components_type=independent", e.t0 = t, e.t1 = ",gcid=", e.next = 6, tn.getCurrentTaskGcid();
                                case 6:
                                    return e.t2 = e.sent, t = e.t0 += e.t1.concat.call(e.t1, e.t2), e.t3 = t, e.t4 = ",playid=", e.next = 12, tn.callXmp(Zt.j.getPlayId);
                                case 12:
                                    return e.t5 = e.sent, t = e.t3 += e.t4.concat.call(e.t4, e.t5), e.t6 = t, e.t7 = ",pos=", e.t8 = Math, e.next = 19, tn.callXmp(Zt.j.getPosition);
                                case 19:
                                    return e.t9 = e.sent, e.t10 = e.t9 / 1e3, e.t11 = e.t8.floor.call(e.t8, e.t10), t = e.t6 += e.t7.concat.call(e.t7, e.t11), e.next = 25, tn.callXmp(Zt.j.getPlayTick, 0);
                                case 25:
                                    n = e.sent, t += ",start_tick=".concat(n[0], ",off_tick=").concat(n[1]), v.client.callServerFunction("TrackEvent", "core_event", "player_function_click", "", 0, 0, 0, 0, t).catch();
                                case 28:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }
            }, {
                key: "checkPlayType", value: function () {
                    return kn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, tn.isYunBo();
                                case 2:
                                    return this.isYunBo = e.sent, e.next = 5, tn.isPlayAndDownload();
                                case 5:
                                    return this.isDownloadAndPlay = e.sent, e.next = 8, tn.isLocalPlay();
                                case 8:
                                    this.isLocalPlay = e.sent, this.information("checkPlayType", this.isYunBo, this.isDownloadAndPlay, this.isLocalPlay);
                                case 10:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "checkXmpStateDesc", value: function (e, t) {
                    return kn(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                        var i, r;
                        return regeneratorRuntime.wrap((function (n) {
                            for (; ;) switch (n.prev = n.next) {
                                case 0:
                                    if (!e) {
                                        n.next = 4;
                                        break
                                    }
                                    n.t0 = e, n.next = 7;
                                    break;
                                case 4:
                                    return n.next = 6, tn.callXmp(Zt.j.getState);
                                case 6:
                                    n.t0 = n.sent;
                                case 7:
                                    this.xmpMediaState = n.t0, this.information("checkXmpStateDesc", this.xmpMediaState, this.bufferPercent), n.t1 = this.xmpMediaState, n.next = n.t1 === Zt.g.PreOpen || n.t1 === Zt.g.Opening ? 12 : n.t1 === Zt.g.Paused || n.t1 === Zt.g.Playing || n.t1 === Zt.g.Play || n.t1 === Zt.g.Pausing ? 14 : n.t1 === Zt.g.Completed ? 16 : n.t1 === Zt.g.Stopped ? 18 : n.t1 === Zt.g.Error ? 20 : 22;
                                    break;
                                case 12:
                                    return this.xmpMediaStateDesc = "loading", n.abrupt("break", 30);
                                case 14:
                                    return this.xmpMediaStateDesc = "playing", n.abrupt("break", 30);
                                case 16:
                                    return this.xmpMediaStateDesc = "stoped", n.abrupt("break", 30);
                                case 18:
                                    return this.isError || (this.xmpMediaStateDesc = "stoped"), n.abrupt("break", 30);
                                case 20:
                                    return this.xmpMediaStateDesc = "error", n.abrupt("break", 30);
                                case 22:
                                    return n.next = 24, tn.callXmp(Zt.j.getLastPlayError);
                                case 24:
                                    return i = n.sent, n.next = 27, tn.getCurrentTaskIdOrPanId();
                                case 27:
                                    return r = n.sent, i && i.taskId === r && (this.errorCode = i.error, this.errorText = Zt.d.getErrorTextByErrorCode(this.errorCode)), n.abrupt("break", 30);
                                case 30:
                                    t === Zt.e.onClearError && (this.xmpMediaStateDesc = "loading"), 0 !== this.errorCode && (this.xmpMediaStateDesc = "error"), this.xmpClose && !this.isError && (this.xmpMediaStateDesc = "close"), this.isBuffering && (this.xmpMediaStateDesc = "buffering"), this.isDownloadCodec && (this.xmpMediaStateDesc = "codec");
                                case 35:
                                case"end":
                                    return n.stop()
                            }
                        }), n, this)
                    })))
                }
            }, {
                key: "onHangleRetry", value: function () {
                    return kn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t, n;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return _n.warning(" onHangleRetry"), v.client.callServerFunction("TrackEvent", "core_event", "player_fail_play_click", "", 0, 0, 0, 0, "errorcode=".concat(this.errCode)).catch(), e.next = 4, tn.callXmp(Zt.b.getConfigValue, "APlayerConfig", "LastPlayMediaId", 0);
                                case 4:
                                    return t = e.sent, this.errorCode = 0, e.next = 8, tn.callXmp(Zt.j.openMedia, t);
                                case 8:
                                    n = e.sent, _n.warning(n);
                                case 10:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "openPayVip", value: function (e) {
                    return kn(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (!e) {
                                        t.next = 4;
                                        break
                                    }
                                    this.trackOpenVipBtn(!1), t.next = 15;
                                    break;
                                case 4:
                                    if (!this.isTryReady) {
                                        t.next = 15;
                                        break
                                    }
                                    return tn.callVipPlugin(yn.Function.gotoPlayTry, Number(this.curTaskId)), t.t0 = fn, t.next = 9, tn.getCurrentTaskGcid();
                                case 9:
                                    return t.t1 = t.sent, t.t2 = this.playTryStateInfo.tryNum, t.t3 = this.playTryStateInfo.isCloudTask, t.t4 = Math.floor(this.durationNum / 1e3), t.t0.playTryReadyClick.call(t.t0, t.t1, t.t2, "center", t.t3, t.t4), t.abrupt("return");
                                case 15:
                                    tn.callXmp("BufferClickVipBtn");
                                case 16:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })))
                }
            }, {
                key: "trackOpenVipBtnEx", value: function () {
                    var e = this;
                    return setTimeout((function () {
                        e.trackOpenVipBtn(!0).catch()
                    }), 0), !0
                }
            }, {
                key: "trackShowErrorPage", value: function () {
                    var e = this;
                    return setTimeout((function () {
                        v.client.callServerFunction("TrackEvent", "core_event", "player_fail_play_show", "", 0, 0, 0, 0, "errorcode=".concat(e.errCode)).catch()
                    }), 0), !0
                }
            }, {
                key: "trackPackageTryReadyEx", value: function () {
                    return kn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.t0 = fn, e.next = 3, tn.getCurrentTaskGcid();
                                case 3:
                                    e.t1 = e.sent, e.t2 = this.playTryStateInfo.tryNum, e.t3 = this.playTryStateInfo.isCloudTask, e.t4 = Math.floor(this.durationNum / 1e3), e.t0.playTryReadyShow.call(e.t0, e.t1, e.t2, "center", e.t3, e.t4);
                                case 8:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "trackPackageTryReady", value: function () {
                    var e = this;
                    setTimeout((function () {
                        e.trackPackageTryReadyEx().catch()
                    }), 0)
                }
            }, {
                key: "trackOpenVipBtn", value: function (e) {
                    return kn(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        var n, i, r, o;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return r = function (e) {
                                        var t = "";
                                        return e.forEach((function (e, n) {
                                            "" !== t && (t += ","), t = t + n + "=" + e
                                        })), t
                                    }, n = new Map, t.t0 = n, t.next = 5, tn.getStatPlayfrom();
                                case 5:
                                    if (t.t1 = t.sent, t.t0.set.call(t.t0, "play_from", t.t1), n.set("components_type", this.isXmpEmbedPlay ? "embed" : "independent"), n.set("vip_type", Gt.vipType), n.set("btn_position", "play_buffer"), i = e ? "player_video_load_open_yunbo_btn_show" : "player_video_load_open_yunbo_btn_click", !e) {
                                        t.next = 14;
                                        break
                                    }
                                    return tn.trackShowEvnet("core_event", i + "play_buffer", n), t.abrupt("return");
                                case 14:
                                    o = r(n), v.client.callServerFunction("TrackEvent", "core_event", i, "", 0, 0, 0, 0, o).catch();
                                case 16:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })))
                }
            }, {
                key: "isCanShowPage1", value: function (e) {
                    var t = !1;
                    switch (e) {
                        case"codec":
                            t = !1;
                            break;
                        case"error":
                            t = this.isError;
                            break;
                        case"yunbo_vip":
                            t = this.isLoading && this.isYunBo && Gt.isVip;
                            break;
                        case"yobon_novip":
                            t = this.isLoading && this.isYunBo && !Gt.isVip;
                            break;
                        case"play_and_download_vip":
                            t = this.isLoading && this.isDownloadAndPlay && Gt.isVip;
                            break;
                        case"play_and_download_novip":
                            t = this.isLoading && this.isDownloadAndPlay && !Gt.isVip;
                            break;
                        case"local_play":
                            t = this.isLoading && this.isLocalPlay;
                            break;
                        case"back_to_embed":
                            t = !1
                    }
                    return t
                }
            }, {
                key: "isCanShowPage2", value: function (e) {
                    var t = !1;
                    switch (e) {
                        case"codec":
                        case"error":
                        case"yunbo_vip":
                        case"yobon_novip":
                        case"play_and_download_vip":
                        case"play_and_download_novip":
                        case"local_play":
                            t = !1;
                            break;
                        case"back_to_embed":
                            t = !0
                    }
                    return t
                }
            }, {
                key: "isCanShowPage3", value: function (e) {
                    var t = !1;
                    switch (e) {
                        case"codec":
                            t = this.isDownloadCodec;
                            break;
                        case"error":
                            t = !1;
                            break;
                        case"yunbo_vip":
                            t = this.isNewVideo ? this.isBuffering && this.isYunBo && Gt.isVip : (this.isLoading || this.isBuffering) && this.isYunBo && Gt.isVip;
                            break;
                        case"yobon_novip":
                            t = this.isNewVideo ? this.isBuffering && this.isYunBo && !Gt.isVip : (this.isLoading || this.isBuffering) && this.isYunBo && !Gt.isVip;
                            break;
                        case"play_and_download_vip":
                            t = this.isBuffering && this.isDownloadAndPlay && Gt.isVip;
                            break;
                        case"play_and_download_novip":
                            t = this.isBuffering && this.isDownloadAndPlay && !Gt.isVip;
                            break;
                        case"local_play":
                        case"back_to_embed":
                            t = !1
                    }
                    return t
                }
            }, {
                key: "isCanShowPage4", value: function (e) {
                    var t = !1;
                    switch (e) {
                        case"codec":
                            t = this.isDownloadCodec;
                            break;
                        case"error":
                            t = this.isError;
                            break;
                        case"yunbo_vip":
                            t = (this.isLoading || this.isBuffering) && this.isYunBo && Gt.isVip;
                            break;
                        case"yobon_novip":
                            t = (this.isLoading || this.isBuffering) && this.isYunBo && !Gt.isVip;
                            break;
                        case"play_and_download_vip":
                            t = (this.isLoading || this.isBuffering) && this.isDownloadAndPlay && Gt.isVip;
                            break;
                        case"play_and_download_novip":
                            t = (this.isLoading || this.isBuffering) && this.isDownloadAndPlay && !Gt.isVip;
                            break;
                        case"local_play":
                            t = this.isLoading && this.isLocalPlay;
                            break;
                        case"back_to_embed":
                            t = !1
                    }
                    return t
                }
            }, {
                key: "isCanShowPage", value: function (e) {
                    var t = !1;
                    if (t = this.isEmbed ? this.isXmpEmbedPlay ? this.isCanShowPage1(e) : this.isCanShowPage2(e) : this.isXmpEmbedPlay ? this.isCanShowPage3(e) : this.isCanShowPage4(e)) {
                        if (this.information("showpage", e, this.isDownloadCodec), this.preShowPage !== e) switch (this.preShowPage = e, e) {
                            case"error":
                                this.trackShowErrorPage();
                                break;
                            case"yunbo_vip":
                                break;
                            case"yobon_novip":
                                this.trackOpenVipBtnEx();
                                break;
                            case"play_and_download_vip":
                                break;
                            case"play_and_download_novip":
                                this.isTryReady && this.trackPackageTryReady()
                        }
                    } else "nothing" === e && (this.preShowPage = "");
                    return t
                }
            }, {
                key: "isCanShowPageEx", value: function (e) {
                    return this.preShowPage === e
                }
            }, {
                key: "fileName", get: function () {
                    return this.name
                }
            }, {
                key: "downloadProgress", get: function () {
                    return this.progress + "%"
                }
            }, {
                key: "errCode", get: function () {
                    var e = "0x0";
                    return this.errorCode && (e = "0x" + this.errorCode.toString(16).toLocaleUpperCase()), e
                }
            }, {
                key: "isError", get: function () {
                    return "error" === this.xmpMediaStateDesc
                }
            }, {
                key: "isLoading", get: function () {
                    return !this.xmpClose && ("loading" === this.xmpMediaStateDesc || this.beginForceLoading)
                }
            }, {
                key: "isBuffering", get: function () {
                    return !this.xmpClose && (2 === this.forceLoading || 1 === this.forceLoading || 100 !== this.bufferPercent)
                }
            }, {
                key: "isPlaying", get: function () {
                    return "playing" === this.xmpMediaStateDesc
                }
            }, {
                key: "isXmpEmbedPlay", get: function () {
                    return !(this.xmpMode === Zt.h.INDEPENDENT_MODE)
                }
            }, {
                key: "isTryRuning", get: function () {
                    return !!this.playTryStateInfo && (this.playTryStateInfo.state === yn.State.runing || this.playTryStateInfo.state === yn.State.commiting)
                }
            }, {
                key: "isTryReady", get: function () {
                    return !!this.playTryStateInfo && this.playTryStateInfo.state === yn.State.ready
                }
            }, {
                key: "openVipText", get: function () {
                    return this.isTryReady ? "试用加速" : "立即开通"
                }
            }, {
                key: "vipTipText", get: function () {
                    return this.isTryReady ? "您有一次免费试用会员加速机会" : "会员尊享视频高速加载特权"
                }
            }]), n
        }($t.Vue);
        xn([Object($t.Prop)({default: !1})], wn.prototype, "isEmbed", void 0), xn([Object($t.Prop)({default: ""})], wn.prototype, "panFileId", void 0), xn([Object($t.Prop)({})], wn.prototype, "curTaskId", void 0), xn([Object($t.Prop)({default: !1})], wn.prototype, "beginForceLoading", void 0), xn([Object($t.Prop)({default: !0})], wn.prototype, "loggerEnable", void 0), xn([Object($t.Prop)()], wn.prototype, "durationNum", void 0), xn([Object($t.Watch)("panFileId")], wn.prototype, "onPanFileIdChange", null), xn([Object($t.Watch)("forceLoading")], wn.prototype, "onForceLoadingChange", null), xn([Object($t.Watch)("xmpMediaStateDesc")], wn.prototype, "onStateDescChange", null), xn([Object($t.Watch)("bufferPercent")], wn.prototype, "onBufferPercentChange", null), xn([Object($t.Watch)("isDownloadCodec")], wn.prototype, "onIsDownloadCodecChange", null), xn([Object($t.Watch)("xmpMode")], wn.prototype, "onXmpModeChange", null), xn([Object($t.Watch)("beginForceLoading")], wn.prototype, "onBeginForceLoadingChange", null), xn([Object($t.Prop)({})], wn.prototype, "playTryStateInfo", void 0);
        var Sn = wn = xn([$t.Component], wn), Cn = (n(1478), n(1480), Object(S.a)(Sn, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {class: {"xmpc-player": e.isEmbed}}, [e.isCanShowPage("codec") ? n("div", {staticClass: "xmpc-loading"}, [n("div", {staticClass: "xmpc-loading-down"}, [n("p", [e._v("\n        正在下载解码器\n        "), n("span", [e._v(e._s(e.fileName))])]), e._v(" "), n("div", {staticClass: "xmpc-loading-progress"}, [n("div", {staticClass: "xmpc-loading-progress__outer"}, [n("div", {
                staticClass: "xmpc-loading-progress__inner",
                style: e.progressStye
            })]), e._v(" "), n("p", {staticClass: "xmpc-loading-progress__text"}, [e._v(e._s(e.downloadProgress))])]), e._v(" "), n("button", {
                staticClass: "xmpc-button xmpc-button--fail",
                on: {click: e.cancelDownload}
            }, [e._v("取消")])])]) : e.isCanShowPage("error") ? n("div", {staticClass: "xmpc-loading__fail"}, [n("p", {staticClass: "xmpc-loading__fail-title"}, [n("i", {staticClass: "xmpc-icon-note-bold"}), e._v("\n      " + e._s(e.errorText) + "\n    ")]), e._v(" "), n("p", {staticClass: "xmpc-loading__fail-detail"}, [e._v("\n      错误码：\n      "), n("span", [e._v(e._s(e.errCode))])]), e._v(" "), n("button", {
                staticClass: "xmpc-button xmpc-button--fail",
                on: {click: e.onHangleRetry}
            }, [e._v("重试")])]) : e.isCanShowPage("yunbo_vip") ? n("div", {staticClass: "xmpc-loading is-super"}, [n("div", {staticClass: "xmpc-loading__icon"}), e._v(" "), n("p", {staticClass: "xmpc-loading__text"}, [e._v("\n      正在尊享会员视频高速加载\n      "), n("span", [e._v("（" + e._s(e.speedText) + "/s ）")])]), e._v(" "), n("div", {staticClass: "xmpc-loading__progress"})]) : e.isCanShowPage("yobon_novip") ? n("div", {staticClass: "xmpc-loading"}, [n("div", {staticClass: "xmpc-loading__icon"}), e._v(" "), n("p", {staticClass: "xmpc-loading__text"}, [e._v("\n      正在努力加载视频\n      "), n("span", [e._v("（" + e._s(e.speedText) + "/s ）")])]), e._v(" "), n("div", {staticClass: "xmpc-loading__vip"}, [e._v("\n      会员尊享视频高速加载特权\n      "), n("button", {
                staticClass: "xmpc-button xmpc-button--small",
                on: {
                    click: function (t) {
                        return e.openPayVip(!0)
                    }
                }
            }, [e._v("立即开通")])])]) : e.isCanShowPage("play_and_download_vip") || e.isCanShowPage("play_and_download_novip") ? n("div", {staticClass: "xmpc-loading"}) : e.isCanShowPage("local_play") ? n("div", {staticClass: "xmpc-loading"}, [n("div", {staticClass: "xmpc-loading__icon"}), e._v(" "), n("p", {staticClass: "xmpc-loading__text"}, [e._v("播放启动中...")])]) : e.isCanShowPage("back_to_embed") ? n("div", {staticClass: "xmpc-loading"}, [n("div", {staticClass: "xmpc-loading__back"}, [n("p", [e._v("当前视频独立窗口播放中")]), e._v(" "), n("button", {
                staticClass: "xmpc-button",
                on: {click: e.backToEmbed}
            }, [n("i", {staticClass: "xmpc-icon-arrow"}), e._v(" 切回此处播放\n      ")])])]) : e.isCanShowPage("nothing") ? n("div") : e._e(), e._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isCanShowPageEx("play_and_download_vip"),
                    expression: "isCanShowPageEx('play_and_download_vip')"
                }], staticClass: "xmpc-loading"
            }, [n("div", {staticClass: "xmpc-loading__icon"}), e._v(" "), n("p", {staticClass: "xmpc-loading__text"}, [e._v("\n      边下边播加载中\n      "), n("span", [e._v("（" + e._s(e.speedText) + "/s ）")])])]), e._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isCanShowPageEx("play_and_download_novip"),
                    expression: "isCanShowPageEx('play_and_download_novip')"
                }], staticClass: "xmpc-loading"
            }, [n("div", {staticClass: "xmpc-loading__icon"}), e._v(" "), n("p", {staticClass: "xmpc-loading__text"}, [e._v("\n      正在努力加载视频\n      "), n("span", [e._v("（" + e._s(e.speedText) + "/s ）")])]), e._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.isTryRuning,
                    expression: "!isTryRuning"
                }], staticClass: "xmpc-loading__vip"
            }, [e._v("\n      " + e._s(e.vipTipText) + "\n      "), n("button", {
                staticClass: "xmpc-button xmpc-button--small",
                on: {
                    click: function (t) {
                        return e.openPayVip(!1)
                    }
                }
            }, [e._v(e._s(e.openVipText))])])])])
        }), [], !1, null, null, null).exports);

        function Tn(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var On = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, Rn = function (e, t, n, i) {
            return new (n || (n = Promise))((function (r, o) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        }, Pn = function (e) {
            Object(a.a)(n, e);
            var t = Tn(n);

            function n() {
                var e;
                return Object(r.a)(this, n), (e = t.apply(this, arguments)).fileDetail = e.file, e.isPlayButtonHasAnimation = !0, e.cancelableRetry = null, e.unfreezingType = null, e.isInitDataDone = !1, e
            }

            return Object(o.a)(n, [{
                key: "clickPlayTrack", value: function () {
                    this.$eventTrack("file_detail_page_top_click", {
                        from: "yunpan_list",
                        filesuffix: this.file.file_extension,
                        file_name: this.file.name,
                        file_id: this.file.id,
                        vip_type: this.$store.getters["users/curVipType"],
                        is_safebox: this.inSafeSpace ? 1 : 0,
                        is_year: this.isYearlySuper ? 1 : 0
                    }), Object(R.consumeStat)(this.file.file_extension, "yunpan_right_detail_click", this.file.mime_type)
                }
            }, {
                key: "backToEmbbed", value: function () {
                    return Rn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    t = this.$refs.preview.getBoundingClientRect(), Object(Lt.setXmpPlayMode)("panel", t);
                                case 2:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "created", value: function () {
                    return Rn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    this.$store.commit("media-player/setCurrentShowingFile", this.file), this.$bus.$on("play", this.play);
                                case 2:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "mounted", value: function () {
                    this.file.id && Be.default.markEnd(this.file.id)
                }
            }, {
                key: "initData", value: function () {
                    var e, t, n, i, r, o;
                    return Rn(this, void 0, void 0, regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function (a) {
                            for (; ;) switch (a.prev = a.next) {
                                case 0:
                                    if (!this.file.trashed) {
                                        a.next = 2;
                                        break
                                    }
                                    return a.abrupt("return");
                                case 2:
                                    return a.prev = 2, a.next = 5, this.$store.dispatch("drive/getFileInfo", this.file.id);
                                case 5:
                                    this.fileDetail = a.sent, this.isInitDataDone = !0, null !== this.playerOptions && this.playerOptions.fileId === this.file.id && (this.$bus.$emit("play", this.playerOptions.mode, this.playerOptions.file ? this.playerOptions.file : this.fileDetail, this.playerOptions.playFrom), this.$store.commit("media-player/setPlayerOption", null)), (null === (t = null === (e = this.fileDetail) || void 0 === e ? void 0 : e.audit) || void 0 === t ? void 0 : t.status) !== (null === (i = null === (n = this.file) || void 0 === n ? void 0 : n.audit) || void 0 === i ? void 0 : i.status) && this.$emit("syncAudit", null === (o = null === (r = this.fileDetail) || void 0 === r ? void 0 : r.audit) || void 0 === o ? void 0 : o.status), a.next = 15;
                                    break;
                                case 11:
                                    a.prev = 11, a.t0 = a.catch(2), this.fileDetail = this.file, p.log.error(a.t0);
                                case 15:
                                case"end":
                                    return a.stop()
                            }
                        }), a, this, [[2, 11]])
                    })))
                }
            }, {
                key: "onResize", value: function () {
                    var e = this;
                    this.$nextTick((function () {
                        return Rn(e, void 0, void 0, regeneratorRuntime.mark((function e() {
                            var t, n;
                            return regeneratorRuntime.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = document.getElementById("pan-preview"), n = {
                                            left: 402,
                                            top: 49,
                                            width: 0,
                                            height: 0
                                        }, t && (n = t.getBoundingClientRect()), !(n.width > 0 && n.height > 0)) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 6, Object(Lt.updateXmpPosition)(n);
                                    case 6:
                                        ce.a.callServerFunction("ThunderResize");
                                    case 7:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    }))
                }
            }, {
                key: "dlnaPlay", value: function () {
                    this.play("panel", this.fileDetail, "yunpan_file_list_detail", !0)
                }
            }, {
                key: "play", value: function (e, t, n, i) {
                    return Rn(this, void 0, void 0, regeneratorRuntime.mark((function r() {
                        var o, a;
                        return regeneratorRuntime.wrap((function (r) {
                            for (; ;) switch (r.prev = r.next) {
                                case 0:
                                    if (!this.$store.state["media-player"].isPlayButtonDisabled) {
                                        r.next = 2;
                                        break
                                    }
                                    return r.abrupt("return");
                                case 2:
                                    if (!t.trashed) {
                                        r.next = 5;
                                        break
                                    }
                                    return this.$emit("restore", {fromPlay: !0}), r.abrupt("return");
                                case 5:
                                    if (!this.checkIsLinkExpired(t)) {
                                        r.next = 10;
                                        break
                                    }
                                    return p.log.info("REFRESH video link"), r.next = 9, this.initData();
                                case 9:
                                    t = this.fileDetail;
                                case 10:
                                    if (!this.isCloudAdding && !this.isLocalUploading || Array.isArray(t.medias) && t.medias.length > 0) {
                                        r.next = 14;
                                        break
                                    }
                                    return this.$eventTrack("yunpan_play_fail_toast", {
                                        type: "adding",
                                        is_safebox: +this.$store.getters["drive/inSafeSpace"],
                                        vip_type: this.$store.getters["users/curVipType"],
                                        is_year: this.$store.getters["users/isYearRaw"]
                                    }), this.$message({
                                        message: "云播失败，请稍后重试",
                                        id: "pending_task",
                                        unique: !0,
                                        type: "error",
                                        position: "middle",
                                        duration: 2e3
                                    }), r.abrupt("return");
                                case 14:
                                    if (!t.web_content_link) {
                                        r.next = 27;
                                        break
                                    }
                                    return r.prev = 15, null !== this.cancelableRetry && this.cancelRetry(), r.next = 19, this.checkIsFreezed(e, t.web_content_link, Number(t.size));
                                case 19:
                                    r.next = 27;
                                    break;
                                case 21:
                                    if (r.prev = 21, r.t0 = r.catch(15), "cancel" !== r.t0.message) {
                                        r.next = 26;
                                        break
                                    }
                                    return console.warn("cancel"), r.abrupt("return");
                                case 26:
                                    this.$message({
                                        message: "该视频读取时间长，请稍后再看",
                                        type: "error",
                                        position: "middle",
                                        duration: 5e3
                                    });
                                case 27:
                                    if (t.web_content_link) {
                                        r.next = 31;
                                        break
                                    }
                                    return this.isLocalUploading && this.$eventTrack("yunpan_play_fail_toast", {
                                        type: "upload",
                                        is_safebox: +this.$store.getters["drive/inSafeSpace"],
                                        vip_type: this.$store.getters["users/curVipType"],
                                        is_year: this.$store.getters["users/isYearRaw"]
                                    }), this.$message({
                                        message: "该文件暂时无法播放",
                                        id: "no link",
                                        unique: !0,
                                        type: "error",
                                        position: "middle",
                                        duration: 2e3
                                    }), r.abrupt("return");
                                case 31:
                                    if (r.prev = 31, this.$store.commit("media-player/setIsPlayButtonDisabled", !0), p.log.info("play file:", t.name, e), (o = document.getElementById("pan-preview")) && (a = o.getBoundingClientRect(), p.log.info("dlna", i), Object(Lt.updateXmpPosition)(a)), t.changeRect) {
                                        r.next = 41;
                                        break
                                    }
                                    return r.next = 39, Object(Lt.playWithXmp)({
                                        playUrl: t.web_content_link,
                                        fileName: t.name || "",
                                        isEmbed: "independent" !== e,
                                        openFrom: "ThunderPanPlugin",
                                        panFileId: t.id,
                                        gcid: t.hash,
                                        medias: t.medias,
                                        dlnaPlay: i,
                                        playType: "server_xlpan",
                                        playFrom: this.isInSafe ? "safebox_".concat(n) : n,
                                        mimeType: t.mime_type
                                    });
                                case 39:
                                    this.$store.commit("media-player/setIsPlayButtonDisabled", !1), window.addEventListener("resize", this.onResize.bind(this));
                                case 41:
                                    r.next = 48;
                                    break;
                                case 43:
                                    r.prev = 43, r.t1 = r.catch(31), this.$store.commit("media-player/setIsPlayButtonDisabled", !1), p.log.error(r.t1), this.$message({
                                        message: "播放失败",
                                        type: "error",
                                        position: "middle",
                                        duration: 3e3
                                    });
                                case 48:
                                case"end":
                                    return r.stop()
                            }
                        }), r, this, [[15, 21], [31, 43]])
                    })))
                }
            }, {
                key: "onFileIdChange", value: function (e) {
                    e && Be.default.markEnd(e)
                }
            }, {
                key: "onFileIdShallowChange", value: function (e) {
                    return Rn(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        var n = this;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, this.isInitDataDone = !1, t.next = 4, this.initData();
                                case 4:
                                    return p.log.info("SelectTaskChange:", e), t.next = 7, ce.a.callServerFunction("SetSelectPanFileId", e);
                                case 7:
                                    this.$store.commit("media-player/setCurrentShowingFile", this.file), this.onResize(), this.$store.state["media-player"].isXmpErred && this.$store.commit("media-player/setCurrentPlayingFileId", ""), this.isPlayButtonHasAnimation = !1, requestAnimationFrame((function () {
                                        n.isPlayButtonHasAnimation = !0
                                    })), t.next = 17;
                                    break;
                                case 14:
                                    t.prev = 14, t.t0 = t.catch(0), p.log.error(t.t0);
                                case 17:
                                    return t.prev = 17, null !== this.cancelableRetry && this.cancelRetry(), t.finish(17);
                                case 20:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this, [[0, 14, 17, 20]])
                    })))
                }
            }, {
                key: "onPlayerOptionsChange", value: function (e) {
                    null !== e && e.fileId === this.fileDetail.id && (this.fileDetail.web_content_link || this.isInitDataDone) && (this.$bus.$emit("play", e.mode, this.fileDetail, e.playFrom), this.$store.commit("media-player/setPlayerOption", null))
                }
            }, {
                key: "cancelRetry", value: function () {
                    this.cancelableRetry.stop(), this.cancelableRetry = null, this.unfreezingType = null
                }
            }, {
                key: "beforeDestroy", value: function () {
                    return Rn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return p.log.info("SelectTaskChange:", "NONE_SELECTED_TASK"), this.$store.state["media-player"].isXmpErred && this.$store.commit("media-player/setCurrentPlayingFileId", ""), e.next = 4, ce.a.callServerFunction("SetSelectPanFileId", "NONE_SELECTED_TASK");
                                case 4:
                                    this.$store.commit("media-player/setCurrentShowingFile", {}), window.removeEventListener("resize", this.onResize.bind(this)), this.$bus.$off("play", this.play), null !== this.cancelableRetry && this.cancelRetry();
                                case 8:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "checkIsLinkExpired", value: function (e) {
                    var t = !1;
                    return Array.isArray(e.medias) && e.medias.length > 0 && e.medias.map((function (e) {
                        var n, i = null === (n = null == e ? void 0 : e.link) || void 0 === n ? void 0 : n.expire;
                        i && (new Date(i).valueOf() <= Date.now() && (t = !0))
                    })), t
                }
            }, {
                key: "checkIsFreezed", value: function (e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return Rn(this, void 0, void 0, regeneratorRuntime.mark((function i() {
                        var r;
                        return regeneratorRuntime.wrap((function (i) {
                            for (; ;) switch (i.prev = i.next) {
                                case 0:
                                    return r = {
                                        smalllerThan1G: {times: 30, delay: 2e3},
                                        largerThan1G: {times: 12, delay: 5e3}
                                    }[n > 1073741824 ? "largerThan1G" : "smalllerThan1G"], i.prev = 2, i.next = 5, Object(m.checkIsArchive)(t);
                                case 5:
                                    return i.abrupt("return");
                                case 8:
                                    if (i.prev = 8, i.t0 = i.catch(2), "Empty response body" === i.t0.message) {
                                        i.next = 12;
                                        break
                                    }
                                    throw i.t0;
                                case 12:
                                    console.warn("进入retry流程");
                                case 13:
                                    return this.$eventTrack("reading_file_pop_show"), this.cancelableRetry = new p.CancelableRetry(m.checkIsArchive.bind(this, t), r), this.unfreezingType = e, i.next = 18, this.cancelableRetry.start();
                                case 18:
                                    this.$eventTrack("reading_file_pop_auto_close"), this.unfreezingType = null;
                                case 20:
                                case"end":
                                    return i.stop()
                            }
                        }), i, this, [[2, 8]])
                    })))
                }
            }, {
                key: "previewType", get: function () {
                    return Object(p.checkCanPreview)(this.file.file_extension, this.file.mime_type)
                }
            }, {
                key: "mediaType", get: function () {
                    return Object(p.checkMediaType)(this.file.file_extension, this.file.mime_type)
                }
            }, {
                key: "playerOptions", get: function () {
                    return this.$store.state["media-player"].playerOption
                }
            }, {
                key: "isVip", get: function () {
                    return this.$store.getters["users/isVip"]
                }
            }, {
                key: "isCloudAdding", get: function () {
                    return "drive#task" === this.file.__kind__
                }
            }, {
                key: "isLocalUploading", get: function () {
                    return "PHASE_TYPE_PENDING" === this.file.phase && !this.file.__kind__
                }
            }, {
                key: "aboutToPlayFileId", get: function () {
                    return this.$store.state["media-player"].aboutToPlayFileId
                }
            }, {
                key: "vipType", get: function () {
                    return this.$store.getters["users/curVipType"]
                }
            }, {
                key: "inSafeSpace", get: function () {
                    return this.$store.getters["drive/inSafeSpace"]
                }
            }, {
                key: "isYearlySuper", get: function () {
                    var e, t, n;
                    return this.vipType === f.VipType.superv && "1" === (null === (n = null === (t = null === (e = this.$store.state) || void 0 === e ? void 0 : e.users) || void 0 === t ? void 0 : t.curUser) || void 0 === n ? void 0 : n.isYear)
                }
            }, {
                key: "isCurrentFilePlaying", get: function () {
                    return this.$store.state["media-player"].currentPlayingFileId === this.file.id
                }
            }, {
                key: "isLoading", get: function () {
                    return this.$store.state["media-player"].xmpState === Zt.g.Opening
                }
            }, {
                key: "isInSafe", get: function () {
                    return this.$store.getters["drive/inSafeSpace"]
                }
            }]), n
        }(u.Vue);
        On([Object(u.Prop)({})], Pn.prototype, "file", void 0), On([Object(se.a)({time: 300})], Pn.prototype, "backToEmbbed", null), On([ut()(200, {trailing: !0})], Pn.prototype, "onResize", null), On([Object(u.Watch)("file.id")], Pn.prototype, "onFileIdChange", null), On([Object(u.Watch)("file.id", {immediate: !0})], Pn.prototype, "onFileIdShallowChange", null), On([Object(u.Watch)("playerOptions")], Pn.prototype, "onPlayerOptionsChange", null);
        var In, jn = Pn = On([Object(u.Component)({components: {VideoState: Cn}})], Pn);
        !function (e) {
            e.onOpenSucceeded = "OnOpenSucceeded", e.onOpenFailed = "OnOpenFailed", e.onPlayFailed = "OnPlayFailed", e.onPlaying = "OnPlaying", e.onPreOpen = "OnPreOpen", e.onPaused = "OnPaused", e.onPlayCompleted = "OnPlayCompleted", e.onPreStop = "OnPreStop", e.onStop = "OnStop", e.onXmpQuit = "OnXmpQuit", e.onXmpStartFailed = "OnXmpStartFailed"
        }(In || (In = {}));
        var Dn = jn, An = Object(S.a)(Dn, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                ref: "preview",
                staticClass: "xly-preview",
                class: {"is-vip": e.isVip, "is-music": "music" === e.mediaType},
                attrs: {id: "pan-preview"}
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.isCurrentFilePlaying && "panel" !== e.unfreezingType,
                    expression: "!isCurrentFilePlaying && unfreezingType !== 'panel'"
                }],
                staticClass: "xly-preview__play",
                class: {"is-animation": e.isPlayButtonHasAnimation},
                on: {
                    click: function (t) {
                        e.$bus.$emit("play", "panel", e.fileDetail, e.isCloudAdding ? "yunpan_file_list_adding_click" : "yunpan_file_list_detail"), e.clickPlayTrack()
                    }
                }
            }, [n("i", {staticClass: "xly-icon-play-detail"}), e._v(" "), n("span", {staticClass: "text-1"}, [e._v("立")]), e._v(" "), n("span", {staticClass: "text-2"}, [e._v("即")]), e._v(" "), n("span", {staticClass: "text-3"}, [e._v("播")]), e._v(" "), n("span", {staticClass: "text-4"}, [e._v("放")]), e._v(" "), n("i", {staticClass: "line"})]), e._v(" "), "panel" === e.unfreezingType ? n("div", {staticClass: "xly-preview__reading"}, [n("i", {staticClass: "img-icon-loading"}), e._v(" "), n("p", [e._v("正在读取文件…")])]) : e._e(), e._v(" "), n("td-dialog", {
                attrs: {
                    "custom-class": "xly-pop-loading",
                    visible: "independent" === e.unfreezingType,
                    "before-close": function () {
                        e.cancelRetry(), e.$eventTrack("reading_file_pop_click", {clickid: "close"})
                    },
                    "footer-enabled": !1
                }
            }, [n("i", {staticClass: "img-icon-loading"}), e._v(" "), n("p", [e._v("正在读取文件…")])]), e._v(" "), n("VideoState", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isCurrentFilePlaying,
                    expression: "isCurrentFilePlaying"
                }], attrs: {"is-embed": !0, "logger-enable": !1}
            })], 1)
        }), [], !1, null, null, null).exports, En = n(6);

        function Fn(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var Ln = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, $n = function (e, t, n, i) {
            return new (n || (n = Promise))((function (r, o) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        }, Mn = function (e) {
            Object(a.a)(n, e);
            var t = Fn(n);

            function n() {
                var e;
                return Object(r.a)(this, n), (e = t.apply(this, arguments)).vipTitle = "白金会员", e.vipVolume = 10737418240, e
            }

            return Object(o.a)(n, [{
                key: "created", value: function () {
                    var e = Object(En.b)(), t = e.getters["users/curVipType"],
                        n = e.state.panGlobalRemoteConfig.strongbox, i = e.getters["users/isYear"];
                    switch (t) {
                        case f.VipType.platinum:
                            this.vipTitle = "白金会员", this.vipVolume = null == n ? void 0 : n.platinum_safe_volume;
                            break;
                        case f.VipType.superv:
                            this.vipTitle = i ? "年费超级会员" : "超级会员", this.vipVolume = i ? null == n ? void 0 : n.yearly_superv_safe_volume : null == n ? void 0 : n.superv_safe_volume;
                            break;
                        default:
                            this.vipTitle = "普通用户", this.vipVolume = 0
                    }
                }
            }, {
                key: "mounted", value: function () {
                    this.file.id && Be.default.markEnd(this.file.id), Object(R.vipEventTrack)("safebox_right_page_show", {}, ["is_login", "is_vip", "vip_type", "is_year", "is_new_user", "is_set_psd", "is_input_psd"])
                }
            }, {
                key: "openSafe", value: function () {
                    return $n(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t, n;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (Object(R.vipEventTrack)("safebox_right_page_click", {}, ["is_login", "is_vip", "vip_type", "is_year", "is_new_user", "is_set_psd", "is_input_psd"]), !1, !this.isSafeInit) {
                                        t = [];
                                        try {
                                            null !== (n = localStorage.getItem("SafeWelcomeShowUids")) && (t = JSON.parse(n))
                                        } catch (e) {
                                            console.error("JSON parse error.")
                                        }
                                        t.includes(this.curUserId) || (t.push(this.curUserId), localStorage.setItem("SafeWelcomeShowUids", JSON.stringify(t)))
                                    }
                                    return e.prev = 3, e.next = 6, this.$store.dispatch("password/enterSafe");
                                case 6:
                                    this.$emit("openSafe"), e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(3), "cancel" !== (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message) && console.error(e.t0);
                                case 12:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[3, 9]])
                    })))
                }
            }, {
                key: "safeGlobalConfig", get: function () {
                    var e;
                    return null === (e = this.$store.state.panGlobalRemoteConfig) || void 0 === e ? void 0 : e.strongbox
                }
            }, {
                key: "safeSubtitle", get: function () {
                    var e;
                    return (null === (e = this.safeGlobalConfig) || void 0 === e ? void 0 : e.subtitle) || "文件随意存，保障数据安全"
                }
            }, {
                key: "curUserId", get: function () {
                    return this.$store.state.users.curUser.userId
                }
            }, {
                key: "formatVipVolume", get: function () {
                    return Object(p.formatSize2)(this.vipVolume, 0)
                }
            }, {
                key: "isVip", get: function () {
                    return Object(En.b)().getters["users/isVip"]
                }
            }]), n
        }(u.Vue);
        Ln([Object(u.Prop)({default: !1})], Mn.prototype, "isSafeInit", void 0), Ln([Object(u.Prop)({})], Mn.prototype, "file", void 0);
        var Vn = Mn = Ln([Object(u.Component)({})], Mn), zn = Object(S.a)(Vn, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {staticClass: "xly-netdisk-detail"}, [n("div", {staticClass: "xly-safe"}, [n("div", {staticClass: "xly-safe__img"}), e._v(" "), n("h2", [e._v("超级保险箱")]), e._v(" "), n("p", [e._v(e._s(e.safeSubtitle))]), e._v(" "), n("td-button", {on: {click: e.openSafe}}, [e._v("\n      " + e._s(e.isSafeInit ? "打开" : "开启") + "超级保险箱\n    ")]), e._v(" "), e.isVip && !e.isSafeInit ? n("p", [e._v("\n      您是" + e._s(e.vipTitle) + "，享受" + e._s(e.formatVipVolume) + "独立存储空间\n    ")]) : e._e()], 1)])
        }), [], !1, null, null, null).exports;

        function Nn(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var Un = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, Bn = function (e) {
            Object(a.a)(n, e);
            var t = Nn(n);

            function n() {
                return Object(r.a)(this, n), t.apply(this, arguments)
            }

            return Object(o.a)(n, [{
                key: "mounted", value: function () {
                    this.file.id && Be.default.markEnd(this.file.id)
                }
            }, {
                key: "onFileIdChange", value: function (e) {
                    e && Be.default.markEnd(e)
                }
            }]), n
        }(u.Vue);
        Un([Object(u.Prop)({default: "该资源链接可能涉及版权、色情、暴力等有害内容，无法访问！"})], Bn.prototype, "message", void 0), Un([Object(u.Prop)({})], Bn.prototype, "file", void 0), Un([Object(u.Watch)("file.id")], Bn.prototype, "onFileIdChange", null);
        var Yn = Bn = Un([Object(u.Component)({})], Bn), Wn = Object(S.a)(Yn, (function () {
            var e = this.$createElement, t = this._self._c || e;
            return t("div", {staticClass: "xly-netdisk-detail__empty"}, [t("div", {staticClass: "xly-img-empty-netdisk"}), this._v(" "), t("p", [this._v(this._s(this.message))])])
        }), [], !1, null, null, null).exports;

        function Gn(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var Qn = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, Zn = function (e, t, n, i) {
            return new (n || (n = Promise))((function (r, o) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        }, Xn = function (e) {
            Object(a.a)(n, e);
            var t = Gn(n);

            function n() {
                var e;
                return Object(r.a)(this, n), (e = t.apply(this, arguments)).isLoading = !0, e.fileDetail = e.file, e
            }

            return Object(o.a)(n, [{
                key: "mounted", value: function () {
                    this.file.id && Be.default.markEnd(this.file.id)
                }
            }, {
                key: "init", value: function () {
                    var e;
                    return Zn(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, Object(q.o)(null === (e = this.file) || void 0 === e ? void 0 : e.id);
                                case 3:
                                    this.fileDetail = t.sent, null !== this.playerOptions && this.playerOptions.fileId === this.file.id && (this.preview(), this.$store.commit("media-player/setPlayerOption", null)), t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(0), console.error(t.t0);
                                case 10:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this, [[0, 7]])
                    })))
                }
            }, {
                key: "clickPlayTrack", value: function () {
                    this.$eventTrack("file_detail_page_top_click", {
                        from: "yunpan_list",
                        filesuffix: this.file.file_extension,
                        file_name: this.file.name,
                        file_id: this.file.id,
                        vip_type: this.$store.getters["users/curVipType"],
                        is_safebox: this.inSafeSpace ? 1 : 0,
                        is_year: this.isYearlySuper ? 1 : 0
                    }), Object(R.consumeStat)(this.file.file_extension, "yunpan_right_detail_click", this.file.mime_type)
                }
            }, {
                key: "onFileChange", value: function (e) {
                    return Zn(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return e.trashed || (this.isLoading = !0), t.next = 3, this.init();
                                case 3:
                                    this.showAtFirst, this.isLoading = !1;
                                case 4:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })))
                }
            }, {
                key: "onPlayerOptionsChange", value: function (e) {
                    null !== e && e.fileId === this.fileDetail.id && this.fileDetail.web_content_link && (this.preview(), this.$store.commit("media-player/setPlayerOption", null))
                }
            }, {
                key: "onFileIdChange", value: function (e) {
                    e && Be.default.markEnd(e)
                }
            }, {
                key: "preview", value: function () {
                    return Zn(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    try {
                                        Object(b.openImgView)({src: this.fileDetail.web_content_link || ""})
                                    } catch (e) {
                                        this.$message({
                                            message: "调用图片浏览器失败",
                                            type: "error",
                                            position: "middle",
                                            duration: 3e3
                                        })
                                    }
                                case 1:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "restore", value: function () {
                    this.$emit("restore", {fromPlay: !0})
                }
            }, {
                key: "isCloudAdding", get: function () {
                    return "drive#task" === this.file.__kind__
                }
            }, {
                key: "isLocalUploading", get: function () {
                    return "PHASE_TYPE_PENDING" === this.file.phase && !this.file.__kind__
                }
            }, {
                key: "playerOptions", get: function () {
                    return this.$store.state["media-player"].playerOption
                }
            }, {
                key: "vipType", get: function () {
                    return this.$store.getters["users/curVipType"]
                }
            }, {
                key: "inSafeSpace", get: function () {
                    return this.$store.getters["drive/inSafeSpace"]
                }
            }, {
                key: "isYearlySuper", get: function () {
                    var e, t, n;
                    return this.vipType === f.VipType.superv && "1" === (null === (n = null === (t = null === (e = this.$store.state) || void 0 === e ? void 0 : e.users) || void 0 === t ? void 0 : t.curUser) || void 0 === n ? void 0 : n.isYear)
                }
            }]), n
        }(u.Vue);
        Qn([Object(u.Prop)({})], Xn.prototype, "file", void 0), Qn([Object(u.Prop)({default: !0})], Xn.prototype, "showAtFirst", void 0), Qn([Object(u.Watch)("file.id", {immediate: !0})], Xn.prototype, "onFileChange", null), Qn([Object(u.Watch)("playerOptions")], Xn.prototype, "onPlayerOptionsChange", null), Qn([Object(u.Watch)("file.id")], Xn.prototype, "onFileIdChange", null);
        var Jn = Xn = Qn([Object(u.Component)({})], Xn), Hn = Object(S.a)(Jn, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                staticClass: "xly-preview is-picture is-picture-recycle",
                class: {"is-picture-recycle": e.showAtFirst},
                style: e.isCloudAdding || e.isLocalUploading ? "cursor: unset;" : ""
            }, [e.isCloudAdding || e.isLocalUploading ? n("div", {staticClass: "xly-preview__loading"}, [n("p", [e._v("暂不支持查看添加中的图片")])]) : e.isLoading ? n("div", {staticClass: "xly-preview__loading"}, [n("i", {staticClass: "img-icon-loading"}), e._v(" "), n("p", [e._v("正在加载…")])]) : e._e(), e._v(" "), e.showAtFirst ? n("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.isLoading && !e.isCloudAdding && !e.isLocalUploading,
                    expression: "!isLoading && !isCloudAdding && !isLocalUploading"
                }],
                ref: "previewImg",
                attrs: {src: e.fileDetail.web_content_link, alt: e.fileDetail.name},
                on: {
                    load: function (t) {
                        e.isLoading = !1
                    }, click: function (t) {
                        e.preview(), e.clickPlayTrack()
                    }
                }
            }) : n("div", {staticClass: "xly-preview__button"}, [n("td-button", {on: {click: e.restore}}, [e._v("\n      查看图片\n    ")])], 1)])
        }), [], !1, null, null, null).exports, qn = n(86), Kn = n(87);

        function ei(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var ti = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, ni = function (e, t, n, i) {
            return new (n || (n = Promise))((function (r, o) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        }, ii = function (e) {
            Object(a.a)(n, e);
            var t = ei(n);

            function n() {
                var e;
                return Object(r.a)(this, n), (e = t.apply(this, arguments)).isIncreasing = !1, e.syncAuditStatus = "", e.paddedCurrentParentFile = {}, e
            }

            return Object(o.a)(n, [{
                key: "auditFilter", value: function (e) {
                    var t, n;
                    return null === e.audit || (null === (t = null == e ? void 0 : e.audit) || void 0 === t ? void 0 : t.status) === Te.AuditStatus.OK || (null === (n = null == e ? void 0 : e.audit) || void 0 === n ? void 0 : n.status) === Te.AuditStatus.UNKNOW
                }
            }, {
                key: "completeFilter", value: function (e) {
                    return !("drive#task" === e.__kind__ || "PHASE_TYPE_PENDING" === e.phase && !e.__kind__)
                }
            }, {
                key: "getCardLevel", value: function (e) {
                    var t = this.lastThreeFile.length;
                    return 1 === t || 2 === t && 1 === e || 3 === t && 2 === e ? 2 : 2 === t && 0 === e || 3 === t && 1 === e ? 1 : 0
                }
            }, {
                key: "onCurrentParentFileChange", value: function (e) {
                    return ni(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        var n, i, r;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (t.prev = 0, n = this.$store.state.drive.driveRouteList, !e.icon_link || !e.created_time) {
                                        t.next = 6;
                                        break
                                    }
                                    this.paddedCurrentParentFile = e, t.next = 11;
                                    break;
                                case 6:
                                    return t.next = 8, ft.a.search({id: n[n.length - 1].id});
                                case 8:
                                    i = t.sent, r = Object(Ct.a)(i, 1), this.paddedCurrentParentFile = r[0];
                                case 11:
                                    t.next = 16;
                                    break;
                                case 13:
                                    t.prev = 13, t.t0 = t.catch(0), console.error(t.t0);
                                case 16:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this, [[0, 13]])
                    })))
                }
            }, {
                key: "onFileCountChange", value: function (e, t) {
                    this.isIncreasing = e > t || void 0 === t
                }
            }, {
                key: "onFilesChange", value: function (e, t) {
                    if ((null == e ? void 0 : e.length) !== (null == t ? void 0 : t.length) || !Object(Kn.isEqual)(e, t)) {
                        console.log((null == e ? void 0 : e.length) !== (null == t ? void 0 : t.length), Object(Kn.isEqual)(e, t));
                        var n = [], i = [], r = [];
                        this.files.forEach((function (e) {
                            n.push(e.id || ""), i.push("drive#folder" === e.kind ? "folder" : e.file_extension || ""), r.push(encodeURIComponent(e.name || ""))
                        })), this.$eventTrack("file_detail_page_top_show", {
                            from: "yunpan_list",
                            select_state: 1 === this.fileCount ? "single_select" : "multi_select",
                            filesuffix: i,
                            file_name: r,
                            file_id: n,
                            vip_type: this.$store.getters["users/curVipType"],
                            is_safebox: this.inSafeSpace ? 1 : 0,
                            is_year: this.isYearlySuper ? 1 : 0
                        })
                    }
                }
            }, {
                key: "handleUnzip", value: function () {
                    this.buttonClickTrack("online_decompress");
                    var e = this.files[0];
                    this.unzipFile(e)
                }
            }, {
                key: "onOpen", value: function () {
                    this.$bus.$emit("changeDirectory", this.files[0], {trigger: "right"})
                }
            }, {
                key: "onReport", value: function () {
                    var e = this.files[0], t = e.hash || "", n = e.id || "", i = encodeURIComponent(e.name || "");
                    ce.a.callServerFunction("OpenNewTab", "http://sj-m-ssl.xunlei.com/h5/report?gcid=".concat(t, "&file_id=").concat(n, "&file_name=").concat(i))
                }
            }, {
                key: "onAppeal", value: function () {
                    var e = this.files[0], t = e.hash || "", n = e.id || "", i = encodeURIComponent(e.name || "");
                    ce.a.callServerFunction("OpenNewTab", "http://sj-m-ssl.xunlei.com/h5/appeal?gcid=".concat(t, "&file_id=").concat(n, "&file_name=").concat(i))
                }
            }, {
                key: "onShare", value: function () {
                    return ni(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return this.buttonClickTrack("share"), e.prev = 1, e.next = 4, this.$store.dispatch("checkRealNameAuth", "yunpan_tab");
                                case 4:
                                    this.createShareWindow(), e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(1), this.$raven.error(e.t0);
                                case 10:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[1, 7]])
                    })))
                }
            }, {
                key: "createShareWindow", value: function () {
                    var e = this, t = this.files, n = t.filter((function (t) {
                        return e.auditFilter(t)
                    })).filter((function (t) {
                        return e.completeFilter(t)
                    }));
                    t && n.length > 0 ? this.$store.dispatch("share/shareFiles", n) : this.$message({
                        message: "分享失败",
                        type: "error",
                        position: "middle",
                        duration: 3e3
                    })
                }
            }, {
                key: "onDownload", value: function () {
                    return ni(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t, n, i, r = this;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    this.buttonClickTrack("getback"), (t = this.files) && (n = [], (i = t.filter((function (e) {
                                        return r.auditFilter(e)
                                    })).filter((function (e) {
                                        return r.completeFilter(e)
                                    }))).length > 0 ? (i.forEach((function (e) {
                                        e.id && n.push({
                                            id: e.id,
                                            name: e.name,
                                            kind: e.kind,
                                            size: e.size,
                                            icon_link: e.icon_link
                                        })
                                    })), this.$store.dispatch("drive/fetchBackFiles", n).catch((function () {
                                        r.$message.error("获取文件信息失败")
                                    }))) : this.$message({
                                        message: "无法下载",
                                        type: "error",
                                        position: "middle",
                                        duration: 3e3
                                    }));
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "onMoveOrCopy", value: function (e) {
                    var t, n, i;
                    return ni(this, void 0, void 0, regeneratorRuntime.mark((function r() {
                        var o, a, s, c, l, u, d, f, h = this;
                        return regeneratorRuntime.wrap((function (r) {
                            for (; ;) switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2, this.checkIsCurrentFilePlaying();
                                case 2:
                                    if (!r.sent) {
                                        r.next = 4;
                                        break
                                    }
                                    ce.a.callServerFunction("ClosePlay");
                                case 4:
                                    return this.buttonClickTrack(e), o = this.systemFolderTypeList, a = [], r.prev = 7, r.next = 10, Object(q.n)("");
                                case 10:
                                    if (s = r.sent, null === (t = null == s ? void 0 : s.files) || void 0 === t ? void 0 : t.length) {
                                        r.next = 13;
                                        break
                                    }
                                    return r.abrupt("return");
                                case 13:
                                    a = s.files, r.next = 21;
                                    break;
                                case 16:
                                    return r.prev = 16, r.t0 = r.catch(7), console.warn(r.t0), this.$message.error(Object(p.getErrorDescription)(r.t0)), r.abrupt("return");
                                case 21:
                                    return r.prev = 21, [{
                                        id: "",
                                        children: a,
                                        title: "我的云盘",
                                        expand: !0,
                                        icon: "https://backstage-img-ssl.a.88cdn.com/019fc2a136a2881181e73fea74a4836efc02195d"
                                    }][0].children.forEach((function (e, t) {
                                        o.includes(e.folder_type) ? e.__order = Number.MIN_SAFE_INTEGER + o.indexOf(e.folder_type) : e.__order = t, e.title = e.name, e.icon = e.icon_link, e.leaf = "drive#file" === e.kind
                                    })), c = this.files.slice(), r.prev = 25, r.next = 28, ce.a.callRemoteClientFunction("ThunderPanPluginWebview", "IpcTreePath", {
                                        extra: {
                                            disableIdList: c,
                                            autoDetectPath: !0
                                        }
                                    });
                                case 28:
                                    if (!(null == (l = r.sent) ? void 0 : l[0].error)) {
                                        r.next = 33;
                                        break
                                    }
                                    throw new Error("errror");
                                case 33:
                                    (null === (n = null == l ? void 0 : l[0]) || void 0 === n ? void 0 : n.chosenNode) && (u = null === (i = null == l ? void 0 : l[0]) || void 0 === i ? void 0 : i.chosenNode, d = this.files.filter((function (e) {
                                        return h.auditFilter(e)
                                    })).filter((function (e) {
                                        return h.completeFilter(e)
                                    })).map((function (e) {
                                        return e.id || ""
                                    })), f = {
                                        move: {handler: this.batchMove, emptyErrorMessage: "移动失败"},
                                        copy: {handler: this.batchCopy, emptyErrorMessage: "复制失败"}
                                    }, d.length > 0 ? f[e].handler(d, u.id) : this.$message.error(f[e].emptyErrorMessage));
                                case 34:
                                    r.next = 39;
                                    break;
                                case 36:
                                    r.prev = 36, r.t1 = r.catch(25), "move" === e ? this.$eventTrack("yunpan_move_copy_pop_click", {
                                        type: "move",
                                        clickid: "cancel",
                                        is_safebox: +this.inSafeSpace,
                                        vip_type: this.vipType,
                                        is_year: +this.isYearlySuper
                                    }) : this.$eventTrack("yunpan_move_copy_pop_click", {
                                        type: "copy",
                                        clickid: "cancel",
                                        is_safebox: +this.inSafeSpace,
                                        vip_type: this.vipType,
                                        is_year: +this.isYearlySuper
                                    });
                                case 39:
                                    r.next = 44;
                                    break;
                                case 41:
                                    r.prev = 41, r.t2 = r.catch(21), console.error(r.t2);
                                case 44:
                                case"end":
                                    return r.stop()
                            }
                        }), r, this, [[7, 16], [21, 41], [25, 36]])
                    })))
                }
            }, {
                key: "batchCopy", value: function (e, t) {
                    return ni(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                        var i = this;
                        return regeneratorRuntime.wrap((function (n) {
                            for (; ;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", this.$store.dispatch("drive/batchCopyFile", {
                                        fileIdList: e,
                                        parent_id: t,
                                        to_space: this.inSafeSpace ? "SPACE_SAFE" : ""
                                    }).then((function (e) {
                                        e.every((function (e) {
                                            return void 0 !== e.task_id
                                        })) && i.$message({
                                            message: "复制成功",
                                            type: "success",
                                            position: "middle",
                                            duration: 3e3
                                        })
                                    })).catch((function (e) {
                                        i.$message({
                                            message: Object(p.getErrorDescription)(e),
                                            type: "error",
                                            position: "middle",
                                            duration: 3e3
                                        }), console.error(e)
                                    })));
                                case 1:
                                case"end":
                                    return n.stop()
                            }
                        }), n, this)
                    })))
                }
            }, {
                key: "setTaskCallbackMap", value: function (e) {
                    var t = e.id, n = e.callbackObj;
                    this.$store.commit("drive/setTaskCallbackMap", {id: t, callbackObj: n, operation: "set"})
                }
            }, {
                key: "toastShowEventTrack", value: function (e, t) {
                    var n, i;
                    Object(R.vipEventTrack)("safebox_movein_toast_show", {
                        file_num: (null === (n = null == e ? void 0 : e.params) || void 0 === n ? void 0 : n.invalid_file_count) + (null === (i = null == e ? void 0 : e.params) || void 0 === i ? void 0 : i.valid_file_count),
                        success_num: null == e ? void 0 : e.params.valid_file_count,
                        type: t
                    }, ["is_login", "is_vip", "vip_type", "is_year"])
                }
            }, {
                key: "batchMove", value: function (e, t, n) {
                    return ni(this, void 0, void 0, regeneratorRuntime.mark((function i() {
                        var r, o = this;
                        return regeneratorRuntime.wrap((function (i) {
                            for (; ;) switch (i.prev = i.next) {
                                case 0:
                                    return void 0 === n && (n = this.isInSafe ? "SPACE_SAFE" : ""), r = "" === n ? "移出" : "移入", i.abrupt("return", this.$store.dispatch("drive/batchMoveFile", {
                                        fileIdList: e,
                                        parent_id: t,
                                        to_space: n
                                    }).then((function (e) {
                                        var t = o;
                                        e.filter(Boolean).forEach((function (e) {
                                            var i = e.task_id;
                                            o.setTaskCallbackMap({
                                                id: i, callbackObj: {
                                                    onSuccess: function (e) {
                                                        var n, i, o, a = e.data, s = "success";
                                                        if ((null === (n = null == a ? void 0 : a.params) || void 0 === n ? void 0 : n.invalid_file_count) && (null === (i = null == a ? void 0 : a.params) || void 0 === i ? void 0 : i.valid_file_count)) {
                                                            var c = "已成功".concat(r, "文件 ").concat(a.params.valid_file_count, "个");
                                                            "0" !== (null === (o = null == a ? void 0 : a.params) || void 0 === o ? void 0 : o.invalid_file_count) && (c += "；因失效无法".concat(r, "文件 ").concat(a.params.invalid_file_count, "个"), s = "fail_file_valid"), u.Vue.prototype.$message.success(c)
                                                        } else u.Vue.prototype.$message.success("移动成功");
                                                        t.toastShowEventTrack(a, s)
                                                    }, onError: function (e) {
                                                        var i, o, a, s = e.data;
                                                        "all_files_invalid" === (null === (i = null == s ? void 0 : s.params) || void 0 === i ? void 0 : i.error_detail) ? (u.Vue.prototype.$message.error("选中文件都已失效，无法".concat(r)), t.toastShowEventTrack(s, "all_files_invalid")) : "operating_file_count_exceeded" === (null === (o = s.params) || void 0 === o ? void 0 : o.error_detail) ? (u.Vue.prototype.$message.error("所选文件数过多，无法批量".concat(r)), t.toastShowEventTrack(s, "fail_file_num")) : (null === (a = s.params) || void 0 === a ? void 0 : a.required_size) ? "SPACE_SAFE" === n ? (t.toastShowEventTrack(s, "fail_file_size"), t.$bus.$emit("safeSpaceInSufficient", s)) : t.$bus.$emit("driveSpaceInSufficient", s) : (t.toastShowEventTrack(s, "fail"), u.Vue.prototype.$message.error("移动失败")), console.error(e), t && t.$bus.$emit("refreshDriveFileList")
                                                    }
                                                }
                                            })
                                        }))
                                    })).catch((function (e) {
                                        o.$message({
                                            message: Object(p.getErrorDescription)(e),
                                            type: "error",
                                            position: "middle",
                                            duration: 3e3
                                        }), console.error(e)
                                    })));
                                case 3:
                                case"end":
                                    return i.stop()
                            }
                        }), i, this)
                    })))
                }
            }, {
                key: "onRename", value: function () {
                    return ni(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return this.buttonClickTrack("rename"), e.next = 3, this.checkIsCurrentFilePlaying();
                                case 3:
                                    if (!e.sent) {
                                        e.next = 5;
                                        break
                                    }
                                    ce.a.callServerFunction("ClosePlay");
                                case 5:
                                    this.$bus.$emit("renameSingleFile");
                                case 6:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "onTrash", value: function () {
                    return ni(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t, n, i, r = this;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.buttonClickTrack("delete"), !this.isInSafe) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", this.onDeleteFileInSafeSpace());
                                case 3:
                                    return e.next = 5, this.checkIsCurrentFilePlaying();
                                case 5:
                                    if (!e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    ce.a.callServerFunction("ClosePlay");
                                case 7:
                                    if (t = this.files.length, n = this.files.filter((function (e) {
                                        return r.completeFilter(e)
                                    })).map((function (e) {
                                        return e.id
                                    })), i = this.files.filter((function (e) {
                                        return !r.completeFilter(e)
                                    })), e.prev = 10, n.length !== t) {
                                        e.next = 16;
                                        break
                                    }
                                    return e.next = 14, Object(oe.a)(re)({
                                        callerInstance: this,
                                        vipType: this.$store.getters["users/curVipType"],
                                        danger: !0,
                                        confirmText: "删除"
                                    });
                                case 14:
                                    e.next = 18;
                                    break;
                                case 16:
                                    return e.next = 18, Object(oe.a)(ae.a)({
                                        title: "删除",
                                        content: "确定要删除所选任务吗？",
                                        danger: !0,
                                        confirmText: "删除"
                                    });
                                case 18:
                                    e.next = 23;
                                    break;
                                case 20:
                                    return e.prev = 20, e.t0 = e.catch(10), e.abrupt("return");
                                case 23:
                                    return e.prev = 23, e.next = 26, this.$store.dispatch("drive/batchTrashFiles", {ids: n});
                                case 26:
                                    return e.next = 28, this.handleCancelMultiUploadingTask(i);
                                case 28:
                                    if (this.$bus.$emit("clearPickedItems"), this.$message.success("删除成功"), !this.nextPageToken) {
                                        e.next = 33;
                                        break
                                    }
                                    return e.next = 33, this.$store.dispatch("drive/getFileList", {
                                        parent_id: this.$store.state.drive.parentIdMap[this.active],
                                        limit: t,
                                        __type: this.active,
                                        page_token: this.nextPageToken
                                    });
                                case 33:
                                    return e.next = 35, ce.a.callRemoteClientFunction("ThunderPanPluginRecycleBin", "onTrash", {});
                                case 35:
                                    e.next = 41;
                                    break;
                                case 37:
                                    e.prev = 37, e.t1 = e.catch(23), this.$message.error("删除失败"), console.error(e.t1);
                                case 41:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[10, 20], [23, 37]])
                    })))
                }
            }, {
                key: "checkIsCurrentFilePlaying", value: function () {
                    return ni(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if ("media" !== this.previewType) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 3, Object(Lt.getXmpPlayingFile)();
                                case 3:
                                    if (e.sent !== this.files[0].id) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", !0);
                                case 6:
                                    return e.abrupt("return", !1);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "onDeleteFileInSafeSpace", value: function () {
                    return ni(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t, n;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, this.$eventTrack("yunpan_delete_pop_show", {
                                        is_prolong_textlink: this.vipType !== f.VipType.superv ? 1 : 0,
                                        vip_type: this.vipType,
                                        is_safebox: this.inSafeSpace ? 1 : 0
                                    }), e.next = 4, Object(oe.a)(ae.a)({
                                        title: "确认删除所选的文件/文件夹",
                                        content: "保险箱文件将直接删除，不会存放回收站",
                                        danger: !0,
                                        confirmText: "删除"
                                    });
                                case 4:
                                    this.$eventTrack("yunpan_delete_pop_click", {
                                        clickid: "confim",
                                        vip_type: this.vipType,
                                        is_safebox: this.inSafeSpace ? 1 : 0
                                    }), e.next = 11;
                                    break;
                                case 7:
                                    return e.prev = 7, e.t0 = e.catch(0), this.$eventTrack("yunpan_delete_pop_click", {
                                        clickid: "cancel",
                                        vip_type: this.vipType,
                                        is_safebox: this.inSafeSpace ? 1 : 0
                                    }), e.abrupt("return");
                                case 11:
                                    return e.prev = 11, n = this.files.map((function (e) {
                                        return e.id
                                    })), t = this.$message({
                                        message: "删除中...",
                                        duration: 0,
                                        type: "warning",
                                        position: "middle"
                                    }), e.next = 16, this.$store.dispatch("drive/batchDeleteFiles", {
                                        ids: n,
                                        type: this.active
                                    });
                                case 16:
                                    this.$store.dispatch("getAbout"), this.$message.success("删除成功"), e.next = 23;
                                    break;
                                case 20:
                                    e.prev = 20, e.t1 = e.catch(11), this.$message.error(Object(p.getErrorDescription)(e.t1));
                                case 23:
                                    return e.prev = 23, t && t.hide(), e.finish(23);
                                case 26:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[0, 7], [11, 20, 23, 26]])
                    })))
                }
            }, {
                key: "onDelete", value: function () {
                    return ni(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, this.trashClickStat("recycler_right_btn_click", "delete"), e.next = 4, Object(oe.a)(ae.a)({
                                        callerInstance: this,
                                        title: "删除文件",
                                        content: "文件删除后将无法恢复，您确认要彻底删除所选文件?"
                                    });
                                case 4:
                                    this.trashClickStat("recycler_right_delete-btn_click", "confirm"), e.next = 11;
                                    break;
                                case 7:
                                    return e.prev = 7, e.t0 = e.catch(0), this.trashClickStat("recycler_right_delete-btn_click", "cancel"), e.abrupt("return");
                                case 11:
                                    return e.prev = 11, Object(qn.getCaptchaToken)(!0), t = this.files.map((function (e) {
                                        return e.id
                                    })), e.next = 16, this.$store.dispatch("drive/batchDeleteFiles", {
                                        ids: t,
                                        type: this.active
                                    });
                                case 16:
                                    this.$bus.$emit("clearPickedItems"), this.$message.success("删除成功"), e.next = 23;
                                    break;
                                case 20:
                                    e.prev = 20, e.t1 = e.catch(11), this.$message.error(Object(p.getErrorDescription)(e.t1));
                                case 23:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[0, 7], [11, 20]])
                    })))
                }
            }, {
                key: "onMore", value: function () {
                    this.buttonClickTrack("more")
                }
            }, {
                key: "onRestore", value: function (e) {
                    return ni(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        var n;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (t.prev = 0, !(null == e ? void 0 : e.fromPlay)) {
                                        t.next = 7;
                                        break
                                    }
                                    return this.trashClickStat("recycler_right_btn_click", "play"), this.$message({
                                        message: "回收站暂时不支持查看，请还原后再试",
                                        type: "error",
                                        position: "middle",
                                        duration: 5e3,
                                        id: "restoreFirst",
                                        unique: !0
                                    }), t.abrupt("return");
                                case 7:
                                    this.trashClickStat("recycler_right_btn_click", "recovery");
                                case 8:
                                    n = this.files.map((function (e) {
                                        return e.id
                                    })), this.$store.dispatch("drive/batchUntrashFiles", {ids: n}), this.$bus.$emit("clearPickedItems"), this.$message.success("还原成功"), t.next = 17;
                                    break;
                                case 14:
                                    t.prev = 14, t.t0 = t.catch(0), this.$message.error(t.t0);
                                case 17:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this, [[0, 14]])
                    })))
                }
            }, {
                key: "handleCancelMultiUploadingTask", value: function (e) {
                    return ni(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        var n, i, r, o, a;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    for (n = [], i = [], r = [], o = 0; o < e.length; o++) e[o].__kind__ ? (i.push(e[o].__taskid__), "drive#folder" === e[o].kind && r.push(e[o].id)) : n.push(e[o].__taskid__);
                                    if (a = [], n.length && a.push(this.$store.dispatch("local-upload/cancel", n)), i.length && a.push(this.$store.dispatch("url-task-list/ipcRemoveUrlTasks", i)), !a.length) {
                                        t.next = 10;
                                        break
                                    }
                                    return t.next = 10, Promise.all(a);
                                case 10:
                                    if (!r.length) {
                                        t.next = 18;
                                        break
                                    }
                                    return t.prev = 11, t.next = 14, Object(q.b)(r);
                                case 14:
                                    t.next = 18;
                                    break;
                                case 16:
                                    t.prev = 16, t.t0 = t.catch(11);
                                case 18:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this, [[11, 16]])
                    })))
                }
            }, {
                key: "analyzeTorrent", value: function () {
                    var e, t;
                    return ni(this, void 0, void 0, regeneratorRuntime.mark((function n() {
                        var i;
                        return regeneratorRuntime.wrap((function (n) {
                            for (; ;) switch (n.prev = n.next) {
                                case 0:
                                    return n.prev = 0, n.next = 3, this.$store.dispatch("drive/getFileInfo", null === (t = null === (e = this.files) || void 0 === e ? void 0 : e[0]) || void 0 === t ? void 0 : t.id);
                                case 3:
                                    i = n.sent, Object(b.analyzeTorrent)(i.id, i.web_content_link), n.next = 10;
                                    break;
                                case 7:
                                    n.prev = 7, n.t0 = n.catch(0), console.error(n.t0);
                                case 10:
                                case"end":
                                    return n.stop()
                            }
                        }), n, this, [[0, 7]])
                    })))
                }
            }, {
                key: "onProject", value: function () {
                    Object(R.consumeStat)(this.files[0].file_extension, "yunpan_right_detail_click", this.files[0].mime_type), this.$refs.preview_media.dlnaPlay()
                }
            }, {
                key: "syncAudit", value: function (e) {
                    this.syncAuditStatus = e
                }
            }, {
                key: "buttonClickTrack", value: function (e) {
                    var t = [], n = [], i = [], r = [];
                    this.files.forEach((function (e) {
                        t.push(e.id || ""), n.push(e.file_extension || ""), i.push(encodeURIComponent(e.name || "")), r.push(Object(p.checkCanPreview)(e.file_extension, e.mime_type))
                    })), this.$eventTrack("file_detail_page_bottom_click", {
                        from: "yunpan_list",
                        file_num: this.fileCount,
                        filesuffix: n,
                        file_type: r,
                        file_name: i,
                        file_ids: t,
                        vip_type: this.$store.getters["users/curVipType"],
                        clickid: e,
                        is_safebox: this.inSafeSpace ? 1 : 0,
                        is_year: this.isYearlySuper ? 1 : 0
                    })
                }
            }, {
                key: "handleMoveInOutSafeSpace", value: function (e) {
                    var t = this;
                    try {
                        this.$eventTrack("yunpan_move_copy_pop_click", {
                            type: "move",
                            clickid: "confim",
                            is_safebox: +this.inSafeSpace,
                            vip_type: this.vipType,
                            is_year: +this.isYearlySuper
                        });
                        var n = this.files.filter((function (e) {
                            return t.auditFilter(e)
                        })).filter((function (e) {
                            return t.completeFilter(e)
                        })).map((function (e) {
                            return e.id || ""
                        }));
                        n.length > 0 ? "in" === e && this.safeSpaceId ? this.batchMove(n, this.safeSpaceId, "SPACE_SAFE") : this.batchMove(n, "", "") : this.$message.error("选中文件都已失效，无法移入")
                    } catch (e) {
                        console.error(e)
                    }
                }
            }, {
                key: "trashClickStat", value: function (e, t) {
                    var n = {media: "video", picture: "photo", other: "other"}[this.previewType];
                    this.isTrashTab && 1 === this.fileCount && ".torrent" === this.files[0].file_extension && (n = "BT"), this.$eventTrack(e, {
                        clickid: t,
                        type: n
                    })
                }
            }, {
                key: "systemFolderTypeList", get: function () {
                    return this.$store.getters.systemFolderTypeList
                }
            }, {
                key: "lastThreeFile", get: function () {
                    return this.files.slice().reverse().slice(0, 3).reverse()
                }
            }, {
                key: "fileCount", get: function () {
                    return Array.isArray(this.files) ? this.files.length : 0
                }
            }, {
                key: "fileExtension", get: function () {
                    return 1 === this.fileCount ? Object(p.getFileExtension)(this.files[0].name) : ""
                }
            }, {
                key: "isSingleFile", get: function () {
                    return 1 === this.fileCount
                }
            }, {
                key: "isAuditPass", get: function () {
                    return !this.isSingleFile || this.isTrashTab || "drive#folder" === this.files[0].kind || this.auditFilter(this.files[0])
                }
            }, {
                key: "active", get: function () {
                    return this.$store.state.drive.activeCollapseItemType
                }
            }, {
                key: "isTrashTab", get: function () {
                    return "trash" === this.active
                }
            }, {
                key: "nextPageToken", get: function () {
                    return this.$store.state.drive.nextPageTokenMap[this.active]
                }
            }, {
                key: "previewType", get: function () {
                    var e = this.files[0];
                    return 1 === this.fileCount && void 0 !== e.file_extension && null !== e.file_extension ? Object(p.checkCanPreview)(this.files[0].file_extension, this.files[0].mime_type) : 1 === this.fileCount && (this.isCloudAdding || this.isLocalUploading) ? Object(p.checkCanPreview)(this.fileExtension, this.files[0].mime_type) : "other"
                }
            }, {
                key: "mediaType", get: function () {
                    return "media" === this.previewType ? Object(p.checkMediaType)(this.files[0].file_extension || "", this.files[0].mime_type) : "other"
                }
            }, {
                key: "supportUnzip", get: function () {
                    return this.unzipEnable && T.a.supportUzip.includes(this.fileExtension) && !this.isLocalUploading
                }
            }, {
                key: "canPreview", get: function () {
                    return "other" !== this.previewType
                }
            }, {
                key: "vipType", get: function () {
                    return this.$store.getters["users/curVipType"]
                }
            }, {
                key: "inSafeSpace", get: function () {
                    return this.$store.getters["drive/inSafeSpace"]
                }
            }, {
                key: "isYearlySuper", get: function () {
                    var e, t, n;
                    return this.vipType === f.VipType.superv && "1" === (null === (n = null === (t = null === (e = this.$store.state) || void 0 === e ? void 0 : e.users) || void 0 === t ? void 0 : t.curUser) || void 0 === n ? void 0 : n.isYear)
                }
            }, {
                key: "isCloudAdding", get: function () {
                    return "drive#task" === this.files[0].__kind__
                }
            }, {
                key: "isLocalUploading", get: function () {
                    return "PHASE_TYPE_PENDING" === this.files[0].phase && !this.files[0].__kind__
                }
            }, {
                key: "isTrashButtonShow", get: function () {
                    return 1 === this.fileCount && (this.isCloudAdding || this.isLocalUploading) && "media" !== this.previewType
                }
            }, {
                key: "isCompleteButtonsGroupShow", get: function () {
                    return this.fileCount > 1 || 1 === this.fileCount && !this.isCloudAdding && !this.isLocalUploading
                }
            }, {
                key: "isSafe", get: function () {
                    return "SAFE" === this.files[0].folder_type
                }
            }, {
                key: "isSafeInit", get: function () {
                    return this.$store.state.password.haveInitSafe
                }
            }, {
                key: "currentParentFile", get: function () {
                    var e = this.$store.state.drive.driveRouteList;
                    return e[e.length - 1]
                }
            }, {
                key: "folderFileCount", get: function () {
                    return this.$store.state.drive.driveFileList.length || 0
                }
            }, {
                key: "isInSafe", get: function () {
                    return this.$store.getters["drive/inSafeSpace"]
                }
            }, {
                key: "safeSpaceId", get: function () {
                    return this.$store.state.drive.safeSpaceId || ""
                }
            }, {
                key: "isSafeShow", get: function () {
                    var e, t;
                    return Boolean((null === (t = null === (e = this.$store.state.panGlobalRemoteConfig) || void 0 === e ? void 0 : e.strongbox) || void 0 === t ? void 0 : t.switch) && this.isSafeInDriveList)
                }
            }, {
                key: "fileIds", get: function () {
                    return this.files.map((function (e) {
                        return e.id || ""
                    }))
                }
            }, {
                key: "isSafeInDriveList", get: function () {
                    return this.$store.state.drive.isSafeInDriveList
                }
            }]), n
        }(u.Vue);
        ti([Object(u.Prop)({})], ii.prototype, "files", void 0), ti([Object(u.Watch)("currentParentFile", {
            immediate: !0,
            deep: !0
        })], ii.prototype, "onCurrentParentFileChange", null), ti([Object(u.Watch)("fileCount", {immediate: !0})], ii.prototype, "onFileCountChange", null), ti([Object(u.Watch)("fileIds", {immediate: !0})], ii.prototype, "onFilesChange", null), ti([Object(se.a)(300)], ii.prototype, "handleUnzip", null), ti([Object(se.a)({time: 300})], ii.prototype, "onShare", null), ti([Object(se.a)({time: 300})], ii.prototype, "onDownload", null);
        var ri = ii = ti([Object(u.Component)({
            components: {
                DriveFileCard: It,
                DriveDetailButtons: Ft,
                DrivePreviewMedia: An,
                DrivePreviewPicture: Hn,
                DrivePreviewAudit: Wn,
                TrashConfirmDialog: ae.a,
                DrivePreviewSafe: zn
            }, mixins: [F]
        })], ii), oi = Object(S.a)(ri, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return e.isSafe ? n("drive-preview-safe", {
                attrs: {"is-safe-init": e.isSafeInit, file: e.files[0]},
                on: {openSafe: e.onOpen}
            }) : n("div", {class: {"xly-netdisk-detail": !0}}, [e.isAuditPass ? e.canPreview && 1 === e.fileCount ? n("div", {staticClass: "xly-netdisk-preview"}, [n("div", {staticClass: "xly-netdisk-preview__title"}, [n("p", [e._v("\n        " + e._s(e.files[0].name) + "\n      ")])]), e._v(" "), e.isAuditPass ? "media" === e.previewType ? n("DrivePreviewMedia", {
                ref: "preview_media",
                attrs: {file: e.files[0]},
                on: {restore: e.onRestore, syncAudit: e.syncAudit}
            }) : e._e() : n("DrivePreviewAudit", {attrs: {file: e.files[0]}}), e._v(" "), "picture" === e.previewType ? n("DrivePreviewPicture", {
                attrs: {
                    file: e.files[0],
                    "show-at-first": !e.isTrashTab
                }, on: {restore: e.onRestore}
            }) : e._e()], 1) : [n("div", {
                staticClass: "xly-netdisk-file",
                class: {"is-more": e.fileCount > 1}
            }, e._l(e.lastThreeFile, (function (t, i) {
                return n("DriveFileCard", {
                    key: t.id,
                    attrs: {file: t, level: e.getCardLevel(i), "no-animation": !e.isIncreasing}
                })
            })), 1), e._v(" "), e.canPreview && 1 === e.fileCount ? e._e() : n("div", {staticClass: "xly-netdisk-detail__text"}, [n("p", [e._v("已选择" + e._s(e.fileCount) + "个项目")])])] : [n("div", {staticClass: "xly-netdisk-preview__title"}, [n("p", [e._v("\n        " + e._s(e.files[0].name) + "\n      ")])]), e._v(" "), e.isAuditPass ? e._e() : n("DrivePreviewAudit", {attrs: {file: e.files[0]}})], e._v(" "), n("DriveDetailButtons", {
                attrs: {
                    unzip: e.supportUnzip,
                    analyze: e.isAuditPass && e.isCompleteButtonsGroupShow && !e.isTrashTab && 1 === e.fileCount && ".torrent" === e.files[0].file_extension,
                    project: e.isAuditPass && e.isCompleteButtonsGroupShow && ("STATUS_OK" === e.$sget(e.files[0], "audit", "status") || "STATUS_OK" === e.syncAuditStatus) && !e.isTrashTab && "video" === e.mediaType,
                    download: e.isAuditPass && e.isCompleteButtonsGroupShow && !e.isTrashTab,
                    share: !e.isInSafe && e.isAuditPass && e.isCompleteButtonsGroupShow && !e.isTrashTab,
                    trash: !e.isAuditPass || e.isTrashButtonShow,
                    "menu-trash": !e.isTrashTab,
                    restore: e.isAuditPass && e.isTrashTab,
                    move: e.isAuditPass && !e.isTrashTab,
                    more: e.isAuditPass && e.isCompleteButtonsGroupShow && !e.isTrashTab && !e.systemFolderTypeList.includes(e.files[0].folder_type),
                    copy: !e.isTrashTab,
                    rename: e.isAuditPass && !e.isTrashTab && 1 === e.fileCount,
                    delete: e.isTrashTab,
                    open: !e.isTrashTab && e.isCompleteButtonsGroupShow && 1 === e.fileCount && "drive#folder" === e.files[0].kind,
                    report: !e.isTrashTab && 1 === e.fileCount && "drive#folder" !== e.files[0].kind,
                    appeal: !e.isAuditPass,
                    "move-to-safe": e.isSafeShow && e.isAuditPass && !e.isTrashTab && !e.isInSafe,
                    "move-out-safe": e.isSafeShow && !e.isTrashTab && e.isInSafe
                },
                on: {
                    unzip: e.handleUnzip,
                    analyze: e.analyzeTorrent,
                    share: e.onShare,
                    download: e.onDownload,
                    copy: function (t) {
                        return e.onMoveOrCopy("copy")
                    },
                    move: function (t) {
                        return e.onMoveOrCopy("move")
                    },
                    more: e.onMore,
                    trash: e.onTrash,
                    rename: e.onRename,
                    project: e.onProject,
                    delete: e.onDelete,
                    restore: e.onRestore,
                    open: e.onOpen,
                    report: e.onReport,
                    appeal: e.onAppeal,
                    moveToSafe: function (t) {
                        return e.handleMoveInOutSafeSpace("in")
                    },
                    moveOutSafe: function (t) {
                        return e.handleMoveInOutSafeSpace("out")
                    }
                }
            })], 2)
        }), [], !1, null, null, null).exports;

        function ai(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var si = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, ci = function (e) {
            Object(a.a)(n, e);
            var t = ai(n);

            function n() {
                return Object(r.a)(this, n), t.apply(this, arguments)
            }

            return Object(o.a)(n, [{
                key: "selectedCount", get: function () {
                    return this.selectedFiles.length
                }
            }, {
                key: "selectedFiles", get: function () {
                    return this.$store.state.drive.selectItemListMap[this.currentCollapse]
                }
            }, {
                key: "currentCollapse", get: function () {
                    return this.$store.state.drive.activeCollapseItemType
                }
            }, {
                key: "currentParentFile", get: function () {
                    var e = this.$store.state.drive.driveRouteList;
                    return e[e.length - 1]
                }
            }]), n
        }(u.Vue), li = ci = si([Object(u.Component)({
            components: {
                DriveContentSelectNone: St,
                DriveContentSelected: oi
            }
        })], ci), ui = (n(1483), n(1485), Object(S.a)(li, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                staticClass: "xly-down__main",
                staticStyle: {position: "relative"}
            }, [0 === e.selectedCount || 1 === e.selectedCount && "新建文件夹" === e.selectedFiles[0].id ? n("DriveContentSelectNone") : e._e(), e._v(" "), e.selectedCount > 0 ? n("DriveContentSelected", {attrs: {files: e.selectedFiles}}) : e._e()], 1)
        }), [], !1, null, null, null).exports);

        function di(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var pi = function (e, t, n, i) {
                var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
                return o > 3 && a && Object.defineProperty(t, n, a), a
            }, fi = function (e, t, n, i) {
                return new (n || (n = Promise))((function (r, o) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(a, s)
                    }

                    c((i = i.apply(e, t || [])).next())
                }))
            }, hi = function (e) {
                Object(a.a)(n, e);
                var t = di(n);

                function n() {
                    var e;
                    return Object(r.a)(this, n), (e = t.apply(this, arguments)).syncMessageListener = null, e.syncTaskListener = null, e.syncEventListener = null, e
                }

                return Object(o.a)(n, [{
                    key: "mounted", value: function () {
                        var e = this;
                        Object(b.callRemote)("User", "SyncStartReceiver", "/user/me/pan").then((function (e) {
                            void 0 !== e[1] ? console.error("error = ", e[1]) : console.log("receving from topic: ", e)
                        }), console.error);
                        Object(b.callRemote)("User", "SyncStartReceiver", "/user/me/drive/tasks").then((function (e) {
                            void 0 !== e[1] ? console.error("error = ", e[1]) : console.log("receving from topic: ", e)
                        }), console.error);
                        var t = Object(Kn.debounce)((function (t) {
                            var n = t.vipType, i = t.referfrom, r = void 0 === i ? "v_pc_xl11_hytq_online_decompress" : i,
                                o = t.aidfrom, a = void 0 === o ? "" : o;
                            Object(y.openPrivilegeDialogWindow)({
                                title: "因云盘空间不足, 解压失败",
                                subTitle: "",
                                inSufficientType: e.inSufficientType,
                                tableType: "drive",
                                buttonText: "platinum" === n ? "开通白金会员" : "升级超级会员",
                                url: Object(p.getPayVipUrl)({vipType: n}),
                                dialogType: "driveInSufficient",
                                referfrom: r,
                                aidfrom: a,
                                from: "decompress",
                                height: 342,
                                width: 410
                            })
                        }), 3e5, {leading: !0, trailing: !1});
                        this.syncMessageListener = Object(b.attachEvent)("SyncMessage-".concat("/user/me/pan"), (function (t, n) {
                            try {
                                n = JSON.parse(n)
                            } catch (e) {
                                return void console.error(e)
                            }
                            var i = {
                                "Xunlei.Pan.Tasks.Complete": function (t) {
                                    var n = t.data;
                                    return fi(e, void 0, void 0, regeneratorRuntime.mark((function e() {
                                        var t, i, r, o = this;
                                        return regeneratorRuntime.wrap((function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    return t = this.$store.state.users.curUser.userid, e.next = 3, Object(b.getConfig)("UserCommunitySet", "radio_addNetDiskMessage_id_".concat(t), !0);
                                                case 3:
                                                    if (i = e.sent, console.log("isAllowToNotify", i), i) {
                                                        e.next = 7;
                                                        break
                                                    }
                                                    return e.abrupt("return");
                                                case 7:
                                                    this.$eventTrack("push_yun_add_finish"), this.$store.dispatch("url-task-list/getNotCompletedTask", {expires_in: 1}), this.$bus.$emit("syncDriveList"), r = {
                                                        header: "迅雷-添加成功",
                                                        title: n.title,
                                                        text: n.desc,
                                                        icon: n.notify_icon,
                                                        okVisible: !0,
                                                        okText: "立即查看",
                                                        onClick: function () {
                                                            return fi(o, void 0, void 0, regeneratorRuntime.mark((function e() {
                                                                var t;
                                                                return regeneratorRuntime.wrap((function (e) {
                                                                    for (; ;) switch (e.prev = e.next) {
                                                                        case 0:
                                                                            if (e.prev = 0, this.$eventTrack("push_yun_add_finish_pop_click", {clickid: "content"}), 1 !== n.task_ids.length) {
                                                                                e.next = 11;
                                                                                break
                                                                            }
                                                                            return e.next = 5, Object(q.q)(n.task_ids[0]);
                                                                        case 5:
                                                                            t = e.sent, Object(b.callServer)("BringMainWndToTop"), Object(b.callServer)("SelectNav", b.NavViewID.Cloud), Object(b.callRemote)("ThunderPanPluginWebview", "IpcRedirectCurrentDirectoryById", {id: t.file_id}), e.next = 12;
                                                                            break;
                                                                        case 11:
                                                                            Object(y.openTransferWindow)("add", n.task_ids, "yun_add_push");
                                                                        case 12:
                                                                            e.next = 17;
                                                                            break;
                                                                        case 14:
                                                                            e.prev = 14, e.t0 = e.catch(0), console.error(e.t0);
                                                                        case 17:
                                                                        case"end":
                                                                            return e.stop()
                                                                    }
                                                                }), e, this, [[0, 14]])
                                                            })))
                                                        },
                                                        beforeClose: function () {
                                                            o.$eventTrack("push_yun_add_finish_pop_click", {clickid: "close"})
                                                        }
                                                    }, this.showPushNotify({
                                                        message: r,
                                                        tabId: "add",
                                                        statAtrribute: "push_yun_add_finish_pop_show"
                                                    });
                                                case 12:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }), e, this)
                                    })))
                                }
                            };
                            i[n.type] && i[n.type](n)
                        })), this.syncTaskListener = Object(b.attachEvent)("SyncMessage-".concat("/user/me/drive/tasks"), (function (n, i) {
                            try {
                                i = JSON.parse(i), p.log.info("msg-center", "收到消息", i)
                            } catch (e) {
                                console.error(e)
                            }
                            var r = {
                                offline: function (t) {
                                    var n = t.data;
                                    return fi(e, void 0, void 0, regeneratorRuntime.mark((function e() {
                                        var t, i, r = this;
                                        return regeneratorRuntime.wrap((function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    return t = this.$store.state.users.curUser.userid, e.next = 3, Object(b.getConfig)("UserCommunitySet", "radio_addNetDiskMessage_id_".concat(t), !0);
                                                case 3:
                                                    if (e.sent) {
                                                        e.next = 6;
                                                        break
                                                    }
                                                    return e.abrupt("return");
                                                case 6:
                                                    if (n.phase !== L.Phase.ERROR) {
                                                        e.next = 10;
                                                        break
                                                    }
                                                    i = {
                                                        header: "迅雷-云添加失败",
                                                        title: "一个任务云添加失败, 请稍后重新添加",
                                                        text: n.name,
                                                        icon: Object(m.getPluginPath)() + "/tip-fail.png",
                                                        okVisible: !0,
                                                        okText: "立即查看",
                                                        onClick: function () {
                                                            return fi(r, void 0, void 0, regeneratorRuntime.mark((function e() {
                                                                return regeneratorRuntime.wrap((function (e) {
                                                                    for (; ;) switch (e.prev = e.next) {
                                                                        case 0:
                                                                            try {
                                                                                this.$eventTrack("yun_add_fail_pop_click", {clickid: "view"}), Object(y.openTransferWindow)("add", [n.id], "yun_add_push")
                                                                            } catch (e) {
                                                                                console.error(e)
                                                                            }
                                                                        case 1:
                                                                        case"end":
                                                                            return e.stop()
                                                                    }
                                                                }), e, this)
                                                            })))
                                                        },
                                                        beforeClose: function () {
                                                            r.$eventTrack("yun_add_fail_pop_click", {clickid: "close"})
                                                        }
                                                    }, e.next = 11;
                                                    break;
                                                case 10:
                                                    return e.abrupt("return");
                                                case 11:
                                                    this.showPushNotify({
                                                        message: i,
                                                        tabId: "add",
                                                        statAtrribute: "yun_add_fail_pop_show"
                                                    });
                                                case 12:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }), e, this)
                                    })))
                                }, decompress: function (n) {
                                    var i = n.data;
                                    return fi(e, void 0, void 0, regeneratorRuntime.mark((function e() {
                                        var n, r, o, a, s, c, l;
                                        return regeneratorRuntime.wrap((function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    return a = function (e) {
                                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "online_decompress_popup_show";
                                                        Object(R.statVipEvent)(t, Object.assign({
                                                            zip_gcid: i.params.file_gcid,
                                                            zip_size: i.file_size
                                                        }, e))
                                                    }, e.next = 3, Object(b.getConfig)("ThunderPanPlugin", "UnzipTip", !0);
                                                case 3:
                                                    if (r = e.sent, p.log.info("msg-center", "是否允许通知", r), r) {
                                                        e.next = 7;
                                                        break
                                                    }
                                                    return e.abrupt("return");
                                                case 7:
                                                    if (i.phase !== L.Phase.COMPLETE) {
                                                        e.next = 18;
                                                        break
                                                    }
                                                    return a({type: "bottom_complete"}), e.next = 11, ft.a.diffSynchronize();
                                                case 11:
                                                    return e.next = 13, ft.a.searchFileTreePathById(i.file_id);
                                                case 13:
                                                    s = e.sent, p.log.info("msg-center", "解压完成", i.id, "解压路径", s), s.length && (o = {
                                                        header: "迅雷-解压完成",
                                                        title: i.file_name,
                                                        text: "解压到: 我的云盘\\".concat([s.slice(0, -1).map((function (e) {
                                                            return e.name
                                                        })).join("\\")]),
                                                        icon: i.icon_link,
                                                        okVisible: !0,
                                                        okText: "立即查看",
                                                        onClick: function () {
                                                            a({
                                                                type: "bottom_complete",
                                                                click_id: "view",
                                                                attr: "online_decompress_popup_click"
                                                            }), Object(b.callServer)("BringMainWndToTop"), Object(b.redirectCurrentDirectoryById)(i.file_id)
                                                        },
                                                        beforeClose: function () {
                                                            a({
                                                                type: "bottom_complete",
                                                                click_id: "close",
                                                                attr: "online_decompress_popup_click"
                                                            }), Object(R.statVipEvent)("online_decompress_file_window_click", {
                                                                zip_gcid: i.params.file_gcid,
                                                                zip_size: i.file_size,
                                                                type: "bottom_complete",
                                                                click_id: "close"
                                                            })
                                                        }
                                                    }), e.next = 19;
                                                    break;
                                                case 18:
                                                    i.phase === L.Phase.ERROR && (a({type: "fail_bottom"}), o = {
                                                        header: "迅雷-解压失败",
                                                        title: i.file_name,
                                                        text: "文件解压失败",
                                                        icon: i.icon_link,
                                                        okVisible: !0,
                                                        okText: "确定",
                                                        beforeClose: function () {
                                                            a({
                                                                type: "fail_bottom",
                                                                click_id: "close",
                                                                attr: "online_decompress_popup_click"
                                                            })
                                                        }
                                                    }, [f.VipType.platinum, f.VipType.normal, f.VipType.normalVip].includes(this.curVipType) && "file_space_not_enough" === (null === (n = i.params) || void 0 === n ? void 0 : n.error_detail) && (l = (c = {}, Object(d.a)(c, f.VipType.normal, "platinum"), Object(d.a)(c, f.VipType.normalVip, "super"), Object(d.a)(c, f.VipType.platinum, "super"), c)[this.curVipType], this.isYearlySuper ? "yp_capa_ysp" : "yp_capa_sp", t({
                                                        vipType: l,
                                                        aidfrom: "platinum" === l ? "yp_capa_nv" : "yp_capa_bj"
                                                    })));
                                                case 19:
                                                    o && Object(b.showPushNotify)(o, {duration: 5e3});
                                                case 20:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }), e, this)
                                    })))
                                }
                            };
                            r[i.type] && r[i.type](i)
                        })), this.syncEventListener = Object(b.attachEvent)("SyncEvent", (function () {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            console.log("SyncEvent", t)
                        })), this.$bus.$on("upload-complete", this.uploadSuccessNotify), this.$bus.$on("upload-fail", this.uploadFailNotify)
                    }
                }, {
                    key: "uploadFailNotify", value: function (e) {
                        return fi(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                            var n, i = this;
                            return regeneratorRuntime.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        n = {
                                            header: "迅雷-上传异常",
                                            title: "1个文件异常, 请重试",
                                            text: e.name,
                                            icon: Object(m.getPluginPath)() + "/tip-fail.png",
                                            okVisible: !0,
                                            okText: "立即查看",
                                            onClick: function () {
                                                return fi(i, void 0, void 0, regeneratorRuntime.mark((function t() {
                                                    return regeneratorRuntime.wrap((function (t) {
                                                        for (; ;) switch (t.prev = t.next) {
                                                            case 0:
                                                                try {
                                                                    this.$eventTrack("upload_fail_pop_click", {
                                                                        clickid: "view",
                                                                        is_safebox: e.isInSafe
                                                                    }), Object(y.openTransferWindow)("upload", [e.id], "yun_add_push")
                                                                } catch (e) {
                                                                    console.error(e)
                                                                }
                                                            case 1:
                                                            case"end":
                                                                return t.stop()
                                                        }
                                                    }), t, this)
                                                })))
                                            },
                                            beforeClose: function () {
                                                i.$eventTrack("upload_fail_pop_click", {
                                                    clickid: "close",
                                                    is_safebox: e.isInSafe
                                                })
                                            }
                                        }, this.showPushNotify({
                                            message: n,
                                            tabId: "upload",
                                            statAtrribute: "upload_fail_pop_show",
                                            statExt: {is_safebox: 1 === Number(e.isInSafe) ? 1 : 0}
                                        });
                                    case 2:
                                    case"end":
                                        return t.stop()
                                }
                            }), t, this)
                        })))
                    }
                }, {
                    key: "uploadSuccessNotify", value: function (e) {
                        var t = this, n = {
                            header: "迅雷-上传成功",
                            title: "1个文件已经上传到云盘",
                            text: e.name,
                            icon: e.icon,
                            okVisible: !0,
                            okText: "立即查看",
                            onClick: function () {
                                return fi(t, void 0, void 0, regeneratorRuntime.mark((function t() {
                                    return regeneratorRuntime.wrap((function (t) {
                                        for (; ;) switch (t.prev = t.next) {
                                            case 0:
                                                try {
                                                    this.$eventTrack("upload_success_pop_click", {
                                                        clickid: "view",
                                                        is_safebox: e.isInSafe
                                                    }), Object(b.callRemote)("ThunderPanPluginWebview", "IpcRedirectCurrentDirectoryById", {id: e.fileId})
                                                } catch (e) {
                                                    console.error(e)
                                                }
                                            case 1:
                                            case"end":
                                                return t.stop()
                                        }
                                    }), t, this)
                                })))
                            },
                            beforeClose: function () {
                                t.$eventTrack("upload_success_pop_click", {clickid: "close", is_safebox: e.isInSafe})
                            }
                        };
                        this.showPushNotify({
                            message: n,
                            tabId: "upload",
                            statAtrribute: "upload_success_pop_show",
                            statExt: {is_safebox: e.isInSafe}
                        })
                    }
                }, {
                    key: "showPushNotify", value: function (e) {
                        var t = e.message, n = e.options, i = void 0 === n ? {duration: 1e4} : n, r = e.tabId,
                            o = e.statAtrribute, a = e.statExt;
                        return fi(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                            var n, s, c, l, u;
                            return regeneratorRuntime.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = Object(y.getTransferWindow)(), e.t0 = !n, e.t0) {
                                            e.next = 9;
                                            break
                                        }
                                        if (e.t1 = n, !e.t1) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 7, n.isVisible();
                                    case 7:
                                        e.t1 = e.sent;
                                    case 8:
                                        e.t0 = !e.t1;
                                    case 9:
                                        if (!e.t0) {
                                            e.next = 14;
                                            break
                                        }
                                        this.$eventTrack(o, null != a ? a : {}), Object(b.showPushNotify)(t, i), e.next = 25;
                                        break;
                                    case 14:
                                        return e.next = 16, n.isVisible();
                                    case 16:
                                        return s = e.sent, n.focus(), e.next = 20, Object(b.callRemote)(ce.e, "getCurrentTab");
                                    case 20:
                                        c = e.sent, l = Object(Ct.a)(c, 2), u = l[0], l[1], u === r && s ? n.focus() : (this.$eventTrack(o), Object(b.showPushNotify)(t, i));
                                    case 25:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, this)
                        })))
                    }
                }, {
                    key: "destroyed", value: function () {
                        this.syncMessageListener && Object(b.detachEvent)("SyncMessage-/user/me/pan", this.syncMessageListener), this.syncTaskListener && Object(b.detachEvent)("SyncMessage-/user/me/drive/tasks", this.syncTaskListener), this.syncEventListener && Object(b.detachEvent)("SyncEvent", this.syncEventListener), this.$bus.$off("upload-fail", this.uploadFailNotify), this.$bus.$off("upload-complete", this.uploadSuccessNotify)
                    }
                }, {
                    key: "isVip", get: function () {
                        return this.$store.getters["users/isVip"]
                    }
                }, {
                    key: "curVipType", get: function () {
                        return this.$store.getters["users/curVipType"]
                    }
                }, {
                    key: "vipType", get: function () {
                        return this.$store.getters["users/curVipType"]
                    }
                }, {
                    key: "isYearlySuper", get: function () {
                        var e, t, n;
                        return this.vipType === f.VipType.superv && "1" === (null === (n = null === (t = null === (e = this.$store.state) || void 0 === e ? void 0 : e.users) || void 0 === t ? void 0 : t.curUser) || void 0 === n ? void 0 : n.isYear)
                    }
                }, {
                    key: "inSufficientType", get: function () {
                        return this.isYearlySuper ? "yearlySuper" : this.vipType
                    }
                }]), n
            }(u.Vue), vi = hi = pi([Object(u.Component)({name: "MsgCenter"})], hi), yi = Object(S.a)(vi, (function () {
                var e = this.$createElement;
                return (this._self._c || e)("span")
            }), [], !1, null, null, null).exports, mi = n(14), bi = n(281), gi = n(110), xi = n.n(gi), ki = n(1489),
            _i = n.n(ki), wi = n(1490), Si = n.n(wi), Ci = n(1491), Ti = n.n(Ci), Oi = n(1492), Ri = n.n(Oi),
            Pi = (n(1342), n(1344), n(1345), n(1343), n(1493), n(19)), Ii = n(169), ji = n.n(Ii);

        function Di(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var Ai = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, Ei = function (e) {
            Object(a.a)(n, e);
            var t = Di(n);

            function n() {
                var e, i;
                return Object(r.a)(this, n), (i = t.apply(this, arguments)).visible = !1, i.limit100 = Object.freeze({
                    img: _i.a,
                    alt: "开通会员单次可上传500个文件",
                    title: "开通会员单次可上传500个文件，<br>并尊享8大专属特权",
                    hint: "非会员单次只能上传100个文件",
                    button: "开通会员",
                    buttonClass: f.VipType.superv === i.vipType ? "xly-button--super" : ""
                }), i.limit500 = Object.freeze({
                    img: Si.a,
                    alt: "只能上传500个文件",
                    title: "抱歉单次最多只能上传500个文件，<br>你可以分次上传",
                    hint: "",
                    button: "知道了",
                    buttonClass: f.VipType.superv === i.vipType ? "xly-button--super" : ""
                }), i.limit5g = Object.freeze({
                    img: Ti.a,
                    alt: "开通会员可以上传最大120g",
                    title: "开通会员可上传120G大文件，<br>并尊享8大专属特权",
                    hint: "非会员单文件不能超过5G",
                    button: "开通会员",
                    buttonClass: f.VipType.superv === i.vipType ? "xly-button--super" : ""
                }), i.limit20g = Object.freeze({
                    img: Ri.a,
                    alt: "超级会员可以上传最大120g",
                    title: "开通会员可上传120G大文件，<br>并尊享8大专属特权",
                    hint: "白金会员单文件不能超过20G",
                    button: "开通超级会员",
                    buttonClass: f.VipType.superv === i.vipType ? "xly-button--super" : ""
                }), i.limit120g = Object.freeze({
                    img: Si.a,
                    alt: "不能超过120G大文件",
                    title: "抱歉单个上传文件不能超过120G<br>请检查后重新上传",
                    hint: "",
                    button: "知道了",
                    buttonClass: f.VipType.superv === i.vipType ? "xly-button--super" : ""
                }), i.uiInfo = Object.freeze((e = {}, Object(d.a)(e, f.VipType.normal, {
                    exceedNumberLimit: i.limit100,
                    exceedSizeLimit: i.limit5g
                }), Object(d.a)(e, f.VipType.normalVip, {
                    exceedNumberLimit: i.limit500,
                    exceedSizeLimit: i.limit20g
                }), Object(d.a)(e, f.VipType.platinum, {
                    exceedNumberLimit: i.limit500,
                    exceedSizeLimit: i.limit20g
                }), Object(d.a)(e, f.VipType.superv, {
                    exceedNumberLimit: i.limit500,
                    exceedSizeLimit: i.limit120g
                }), e)), i
            }

            return Object(o.a)(n, [{
                key: "getProperty", value: function (e) {
                    return ji()(this.uiInfo[this.vipType], this.type, e)
                }
            }, {
                key: "show", value: function () {
                    this.visible = !0
                }
            }, {
                key: "close", value: function () {
                    this.visible = !1, this.$destroy()
                }
            }, {
                key: "buttonClick", value: function () {
                    if ("知道了" !== this.button) {
                        Object(Pi.eventTrack)("add_yunpan_limit_pop_click", {
                            vip_type: this.vipType,
                            limit_type: "exceedSizeLimit" === this.type ? "over_size" : "over_number",
                            clickid: "开通超级会员" === this.button ? "upgrade_vip" : "open_vip"
                        });
                        var e = "exceedNumberLimit" === this.type ? "upload_nums_pop" : "upload_size_pop";
                        Object(b.callRemote)("vip-download-webview", "OpenPayVipUrl", "https://pay.xunlei.com/pay.html?referfrom=v_pc_xlx_hytq_yp_storage&aidfrom=".concat(e))
                    }
                    Object(Pi.eventTrack)("add_yunpan_limit_pop_click", {
                        vip_type: this.vipType,
                        limit_type: "exceedSizeLimit" === this.type ? "over_size" : "over_number",
                        clickid: "know"
                    }), this.close()
                }
            }, {
                key: "button", get: function () {
                    return this.getProperty("button")
                }
            }]), n
        }(u.Vue);
        Ai([Object(u.Prop)({})], Ei.prototype, "type", void 0), Ai([Object(u.Prop)({})], Ei.prototype, "vipType", void 0);
        var Fi, Li = Ei = Ai([Object(u.Component)({name: "VipGuideDialog"})], Ei), $i = Object(S.a)(Li, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("td-dialog", {
                attrs: {visible: e.visible, "custom-class": "xly-dialog-vip"},
                on: {
                    "update:visible": function (t) {
                        e.visible = t
                    }, ok: function (t) {
                        e.visible = !1
                    }, close: e.close
                }
            }, [n("div", {staticClass: "xly-dialog-vip__image"}, [n("img", {
                attrs: {
                    src: e.getProperty("img"),
                    alt: e.getProperty("hint")
                }
            })]), e._v(" "), n("div", {staticClass: "xly-dialog-vip__text"}, [n("p", {domProps: {innerHTML: e._s(e.getProperty("title"))}}), e._v(" "), e.getProperty("hint") ? n("p", {staticClass: "xly-dialog-vip__note"}, [e._v("\n      " + e._s(e.getProperty("hint")) + "\n    ")]) : e._e()]), e._v(" "), n("td-button", {
                class: e.getProperty("buttonClass"),
                attrs: {slot: "footer", size: "large"},
                on: {
                    click: function (t) {
                        return t.stopPropagation(), e.buttonClick(t)
                    }
                },
                slot: "footer"
            }, [e._v("\n    " + e._s(e.button) + "\n  ")])], 1)
        }), [], !1, null, null, null).exports, Mi = function (e) {
            !function (e) {
                Fi = new $i({el: document.createElement("div"), propsData: Object.assign({}, e)})
            }(e), document.body.appendChild(Fi.$el), O.default.nextTick((function () {
                Fi.show()
            }))
        };

        function Vi(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var zi, Ni = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, Ui = function (e, t, n, i) {
            return new (n || (n = Promise))((function (r, o) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        }, Bi = function (e) {
            Object(a.a)(n, e);
            var t = Vi(n);

            function n() {
                return Object(r.a)(this, n), t.apply(this, arguments)
            }

            return Object(o.a)(n, [{
                key: "mounted", value: function () {
                    this.$bus.$on("selectLocalFiles", this.selectLocalFiles)
                }
            }, {
                key: "destroyed", value: function () {
                    this.$store.dispatch("local-upload/finish")
                }
            }, {
                key: "beforeDestroy", value: function () {
                    this.$bus.$off("selectLocalFiles", this.selectLocalFiles)
                }
            }, {
                key: "checkFileRestriction", value: function (e, t) {
                    var n;
                    if (0 === e) return !1;
                    var i = "", r = (n = {}, Object(d.a)(n, f.VipType.normal, {
                        fileLengthLimit: 100,
                        fileSizeLimit: 5368709120
                    }), Object(d.a)(n, f.VipType.normalVip, {
                        fileLengthLimit: 500,
                        fileSizeLimit: 21474836480
                    }), Object(d.a)(n, f.VipType.platinum, {
                        fileLengthLimit: 500,
                        fileSizeLimit: 21474836480
                    }), Object(d.a)(n, f.VipType.superv, {fileLengthLimit: 500, fileSizeLimit: 128849018880}), n);
                    return e > r[this.vipType].fileLengthLimit && (i = "exceedNumberLimit"), t > r[this.vipType].fileSizeLimit && (i = "exceedSizeLimit"), !i || (this.$eventTrack("add_yunpan_limit_pop_show", {
                        limit_type: "exceedSizeLimit" === i ? "over_size" : "over_number",
                        vip_type: this.vipType
                    }), Mi({type: i, vipType: this.vipType}), !1)
                }
            }, {
                key: "selectLocalFiles", value: function (e) {
                    var t = e.baseDir, n = e.fileInfos, i = e.from, r = e.parentId;
                    return Ui(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var o, a, s, c, l, u = this;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (0 !== n.length) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (o = 0, a = 0, n.forEach((function (e) {
                                        var t = e.fileSize;
                                        o += t, t > a && (a = t)
                                    })), this.$store.getters["drive/inSafeSpace"] || !(o > this.spaceRest)) {
                                        e.next = 9;
                                        break
                                    }
                                    return this.clientToast("空间不足"), e.abrupt("return");
                                case 9:
                                    return s = n.map((function (e) {
                                        var t = e.filePath, n = e.fileSize, r = t.slice(t.lastIndexOf("\\") + 1),
                                            o = r.slice(r.lastIndexOf(".") + 1);
                                        return Object(Pi.eventTrack)("transmission_upload_yunpan_create", {
                                            from: i,
                                            file_type: Object(p.getFileExtension)(r),
                                            is_safebox: u.$store.getters["drive/inSafeSpace"] ? 1 : 0
                                        }), {
                                            path: t,
                                            name: r,
                                            size: Number(n),
                                            type: bi.default[o] || "other",
                                            isInSafe: u.$store.getters["drive/inSafeSpace"] ? 1 : 0
                                        }
                                    })), c = s.map((function (e) {
                                        return {
                                            name: e.name,
                                            baseDir: t,
                                            filePath: e.path,
                                            uploadType: "resume",
                                            type: e.type,
                                            size: Number(e.size),
                                            parentId: r || u.$store.state.drive.parentIdMap.drive,
                                            progress: 0,
                                            createTime: xi()((new Date).toISOString()).format("YYYY-MM-DD HH:mm:ss"),
                                            completeTime: "",
                                            updateTime: xi()((new Date).toISOString()).format("YYYY-MM-DD HH:mm:ss"),
                                            uploadStatus: mi.UploadEvent.add,
                                            version: "1",
                                            fileId: "",
                                            token: "",
                                            userId: u.userId,
                                            from: i,
                                            driveFileExist: mi.fileStatus.delete,
                                            isInSafe: e.isInSafe
                                        }
                                    })), e.next = 13, Object(qn.getCaptchaToken)(!0).catch((function () {
                                        throw new Error("网络失败，请稍后再试")
                                    }));
                                case 13:
                                    l = c.length - 1;
                                case 14:
                                    if (!(l > -1)) {
                                        e.next = 20;
                                        break
                                    }
                                    return e.next = 17, this.$store.dispatch("local-upload/add", c[l]);
                                case 17:
                                    l--, e.next = 14;
                                    break;
                                case 20:
                                    this.$store.dispatch("local-upload/start");
                                case 21:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "clientToast", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "操作失败",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "warning";
                    this.$message({type: t, message: e, position: "middle", duration: 5e3})
                }
            }, {
                key: "vipType", get: function () {
                    return this.$store.getters["users/curVipType"]
                }
            }, {
                key: "spaceMsg", get: function () {
                    return this.$store.state.drive.spaceMsg
                }
            }, {
                key: "userId", get: function () {
                    return this.$store.state.users.curUser.userId
                }
            }, {
                key: "totalSpace", get: function () {
                    return this.$store.state.about.limit
                }
            }, {
                key: "usedSpace", get: function () {
                    return this.$store.state.about.usage
                }
            }, {
                key: "spaceRest", get: function () {
                    return this.totalSpace - this.usedSpace
                }
            }]), n
        }(u.Vue), Yi = Bi = Ni([Object(u.Component)({})], Bi), Wi = Object(S.a)(Yi, (function () {
            var e = this.$createElement;
            return (this._self._c || e)("div")
        }), [], !1, null, null, null).exports, Gi = (n(155), n(27), n(76)), Qi = n(88), Zi = n(168);

        function Xi(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        function Ji(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        Promise.resolve().then(n.t.bind(null, 1342, 7)), Promise.resolve().then(n.t.bind(null, 1344, 7)), Promise.resolve().then(n.t.bind(null, 1343, 7)), n.e(24).then(n.t.bind(null, 1504, 7));
        var Hi = Object(u.Component)({
            name: "DragHint", computed: function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ji(Object(n), !0).forEach((function (t) {
                        Object(d.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ji(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({}, Object(Zi.e)({privilege: "privilege"}))
        })(zi = function (e) {
            Object(a.a)(i, e);
            var t, n = Xi(i);

            function i() {
                var e;
                Object(r.a)(this, i);
                for (var t = arguments.length, o = new Array(t), a = 0; a < t; a++) o[a] = arguments[a];
                return (e = n.call.apply(n, [this].concat(o))).visible = !1, e.count = 0, e
            }

            return Object(o.a)(i, [{
                key: "mounted", value: function () {
                    var e = this;
                    document.addEventListener("dragenter", (function (t) {
                        ++e.count, t.preventDefault(), "Files" === t.dataTransfer.types[0] && e.show()
                    })), document.addEventListener("dragleave", (function (t) {
                        --e.count, e.count <= 0 && e.hide()
                    })), document.addEventListener("drop", (function (t) {
                        e.count = 0
                    }))
                }
            }, {
                key: "handleDrop", value: (t = Object(Gi.a)(regeneratorRuntime.mark((function e(t) {
                    var n, i, r, o;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (t.preventDefault(), !((n = t.dataTransfer.files).length > 0)) {
                                    e.next = 15;
                                    break
                                }
                                return e.prev = 3, e.next = 6, Object(Qi.getLocalFiles)(Array.prototype.map.call(n, (function (e) {
                                    return e.path
                                })));
                            case 6:
                                i = e.sent, r = i.baseDir, o = i.fileInfos, this.$bus.$emit("selectLocalFiles", {
                                    baseDir: r,
                                    fileInfos: o,
                                    from: "local_upload_drag"
                                }), e.next = 15;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(3), console.error("==拖拽上传异常==", e.t0);
                            case 15:
                                this.hide();
                            case 16:
                            case"end":
                                return e.stop()
                        }
                    }), e, this, [[3, 12]])
                }))), function (e) {
                    return t.apply(this, arguments)
                })
            }, {
                key: "show", value: function () {
                    this.visible = !0
                }
            }, {
                key: "hide", value: function () {
                    this.visible = !1
                }
            }, {
                key: "currentPath", get: function () {
                    var e = this.$store.state.drive.driveRouteList.slice(-1)[0].title;
                    return e.length > 10 ? "".concat(e.slice(0, 10), "...") : e
                }
            }]), i
        }(u.Vue)) || zi, qi = Object(S.a)(Hi, (function () {
            var e = this.$createElement, t = this._self._c || e;
            return t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: this.visible,
                    expression: "visible"
                }], staticClass: "xly-drag", on: {
                    drop: this.handleDrop, dragenter: function (e) {
                        e.preventDefault()
                    }, dragover: function (e) {
                        e.preventDefault()
                    }
                }
            }, [t("div", {
                staticClass: "xly-drag__tips",
                staticStyle: {"pointer-events": "none", "margin-top": "25%"}
            }, [t("p", [t("i", {staticClass: "xly-icon-drag"}), this._v("拖放文件添加到 " + this._s(this.currentPath))])])])
        }), [], !1, null, null, null).exports, Ki = n(464), er = n(700);

        function tr(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var nr = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, ir = function (e, t, n, i) {
            return new (n || (n = Promise))((function (r, o) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function s(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(a, s)
                }

                c((i = i.apply(e, t || [])).next())
            }))
        }, rr = function (e) {
            Object(a.a)(n, e);
            var t = tr(n);

            function n() {
                var e;
                return Object(r.a)(this, n), (e = t.apply(this, arguments)).showHint = !1, e.xmpStateCollection = {
                    onPreStopEventId: 0,
                    onPreOpenEventId: 0,
                    onXmpCloseEventId: 0
                }, e.fileicon = "", e.curve = "positive", e.observer = null, e
            }

            return Object(o.a)(n, [{
                key: "created", value: function () {
                    return ir(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    this.isLogin && this.initData();
                                case 1:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "mounted", value: function () {
                    return ir(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t, n, i, r = this;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return ce.a.broadcastEvent("ThunderPanPluginReady"), this.$bus.$on("animateTransfer", this.animate), e.next = 4, ft.a.exist();
                                case 4:
                                    if (e.sent.length) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 8, ft.a.create();
                                case 8:
                                    return ce.a.attachServerEvent(Zt.e.onStateChanged, (function (e, t, n) {
                                        r.$store.commit("media-player/setXmpState", n)
                                    })), this.xmpStateCollection.onXmpCloseEventId = ce.a.attachServerEvent(Zt.e.onXmpClose, (function () {
                                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                        console.info("[DrivePage] onXmpClose, isXmpErred:", r.isXmpErred, t), r.isXmpErred && r.$store.commit("media-player/setCurrentPlayingFileId", "")
                                    })), this.xmpStateCollection.onPreStopEventId = ce.a.attachServerEvent(Zt.e.onPreStop, (function (e, t, n, i, o) {
                                        console.info("[DrivePage] onPreStop, errorCode:", i), void 0 !== i && 0 !== i ? r.$store.commit("media-player/setIsXmpErred", !0) : (r.$store.commit("media-player/setIsXmpErred", !1), r.$store.commit("media-player/setCurrentPlayingFileId", ""))
                                    })), this.xmpStateCollection.onPreOpenEventId = ce.a.attachServerEvent(Zt.e.onPreOpen, (function (e, t, n, i, o, a) {
                                        return ir(r, void 0, void 0, regeneratorRuntime.mark((function e() {
                                            return regeneratorRuntime.wrap((function (e) {
                                                for (; ;) switch (e.prev = e.next) {
                                                    case 0:
                                                        console.info("[DrivePage] onPreOpen, panFileId:", o, a), a && this.$store.commit("media-player/setCurrentPlayingFileId", o);
                                                    case 2:
                                                    case"end":
                                                        return e.stop()
                                                }
                                            }), e, this)
                                        })))
                                    })), t = this.$store.state.users.curUser.userId, e.next = 15, ft.a.search({user_id: t}, {limit: 1});
                                case 15:
                                    return n = e.sent, e.next = 18, Object(ft.b)();
                                case 18:
                                    return e.next = 20, ft.a.getTableColumnList();
                                case 20:
                                    if (i = e.sent, this.$store.commit("drive/setUserFileTableColumnList", i), n.length) {
                                        e.next = 27;
                                        break
                                    }
                                    return e.next = 25, ft.a.globalSynchronize();
                                case 25:
                                    e.next = 29;
                                    break;
                                case 27:
                                    return e.next = 29, ft.a.diffSynchronize();
                                case 29:
                                    this.$bus.$emit("fileTree/synchronized"), this.$store.dispatch("url-task-list/initIndex"), this.$store.dispatch("local-upload/initIndex");
                                case 32:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "beforeDestroy", value: function () {
                    this.observer && "function" == typeof this.observer.stop && this.observer.stop(), this.$bus.$off("animateTransfer", this.animate), this.$store.dispatch("retrieval-list/clearListener"), this.$store.dispatch("url-task-list/clearIndex"), ce.a.detachServerEvent("OnCurNavChange", this.serverEventId), ce.a.detachServerEvent(Zt.e.onPreStop, this.xmpStateCollection.onPreStopEventId), ce.a.detachServerEvent(Zt.e.onPreOpen, this.xmpStateCollection.onPreOpenEventId), ce.a.detachServerEvent(Zt.e.onXmpClose, this.xmpStateCollection.onXmpCloseEventId)
                }
            }, {
                key: "initData", value: function () {
                    return ir(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t = this;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    Promise.all([this.$store.dispatch("getAbout", !0).then((function () {
                                        t.$bus.$emit("gotAbout")
                                    })).catch((function (e) {
                                        t.$raven.error(e)
                                    })), this.$store.dispatch("retrieval-list/init"), this.$store.dispatch("checkPrivilege", "upload_folder"), this.$store.dispatch("url-task-list/getUrlTasks").catch((function (e) {
                                        t.$message({
                                            message: "接口出现异常",
                                            type: "error",
                                            position: "middle",
                                            duration: 2e3
                                        }), console.error(e)
                                    })), Object(b.getRemoteGlobalConfigValue)("vip", "", er.defaultVipConfig).then((function (e) {
                                        var n = (null == e ? void 0 : e.cloud_add) || er.defaultVipConfig.cloud_add,
                                            i = Object.assign({}, er.defaultVipConfig.sim_cloud_add_tasks, Object(Kn.pickBy)(null == e ? void 0 : e.sim_cloud_add_tasks));
                                        t.$store.dispatch("url-task-list/setCloudAddGlobalConfig", {
                                            topSpeedCloudConfig: n,
                                            cloudAddNumLimitConfig: i
                                        })
                                    }))]).catch((function () {
                                        window.$nuxt.error({message: "出错了", statusCode: 0})
                                    })).then((function () {
                                        t.observer = new Ki.a({
                                            target: t.$refs.main,
                                            show: t.exposureStat,
                                            threshold: .01,
                                            once: !0,
                                            root: document
                                        })
                                    }));
                                case 1:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "calculateAnimation", value: function (e) {
                    var t, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "transfer";
                    if (void 0 === (null == e ? void 0 : e.x) || void 0 === (null == e ? void 0 : e.y)) {
                        var r = this.$refs.main.getBoundingClientRect();
                        t = r.width / 2 - 8, n = r.height / 2 - 8
                    } else t = e.x, n = e.y > window.outerHeight ? window.outerHeight - 114 : e.y < 0 ? 72 : e.y;
                    var o = {download: {left: -72, top: 185}, transfer: {left: 20, top: 0}}, a = o[i], s = a.left - t,
                        c = a.top - n;
                    return {startX: t, startY: n, deltaX: s, deltaY: c}
                }
            }, {
                key: "animate", value: function (e, t) {
                    var n = this, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "transfer";
                    if (!this.showHint) {
                        var r = ["transfer"];
                        r.includes(i) ? this.curve = "negative" : this.curve = "positive";
                        var o = this.calculateAnimation({x: null == t ? void 0 : t.x, y: null == t ? void 0 : t.y}, i),
                            a = o.startX, s = o.startY, c = o.deltaX, l = o.deltaY;
                        this.fileicon = e, this.$refs.hint.style.left = String(a) + "px", this.$refs.hint.style.top = String(s) + "px", this.showHint = !0, requestAnimationFrame((function () {
                            requestAnimationFrame((function () {
                                n.$refs.hint.style.transform = "translateX(".concat(c, "px)"), n.$refs.hintImg.style.transform = "translateY(".concat(l / .7, "px) scale(").concat(.7, ")")
                            }))
                        })), setTimeout((function () {
                            n.showHint = !1, n.$refs.hint.style.transform = "", n.$refs.hintImg.style.transform = "", n.fileicon = ""
                        }), 1e3)
                    }
                }
            }, {
                key: "exposureStat", value: function () {
                    this.$eventTrack("yunpan_homepage_success_show", {
                        vipType: this.$store.getters["users/curVipType"],
                        total_volume: Math.floor(this.$store.state.about.limit / 1024 / 1024 / 1024),
                        used_volume: Math.floor(this.$store.state.about.usage / 1024 / 1024 / 1024)
                    })
                }
            }, {
                key: "isXmpErred", get: function () {
                    return this.$store.state["media-player"].isXmpErred
                }
            }, {
                key: "isLogin", get: function () {
                    return this.$store.getters["users/isLogin"]
                }
            }]), n
        }(u.Vue), or = rr = nr([Object(u.Component)({
            components: {
                DriveList: gt,
                DriveContent: ui,
                DriveBaseUpload: Wi,
                DragHint: qi,
                MsgCenter: yi
            }
        })], rr), ar = (n(1406), n(1407), n(1497), Object(S.a)(or, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                ref: "main",
                staticClass: "xly-netdisk"
            }, [n("DriveList"), e._v(" "), n("DriveContent"), e._v(" "), n("DriveBaseUpload"), e._v(" "), n("DragHint"), e._v(" "), n("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showHint,
                    expression: "showHint"
                }], ref: "hint", class: "hint " + e.curve
            }, [n("img", {ref: "hintImg", attrs: {src: e.fileicon}})]), e._v(" "), n("MsgCenter")], 1)
        }), [], !1, null, "7e884c35", null).exports), sr = n(1499), cr = n.n(sr), lr = n(1500), ur = n.n(lr);

        function dr(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var pr = function (e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a
        }, fr = function (e) {
            Object(a.a)(n, e);
            var t = dr(n);

            function n() {
                var e;
                return Object(r.a)(this, n), (e = t.apply(this, arguments)).list = Object.freeze([{
                    key: 0,
                    img: cr.a,
                    title: "大到极致",
                    text: "T级超大空间，可存上千部高清电影"
                }, {key: 1, img: ur.a, title: "快到极致", text: "极速传输和云播，速度遥遥领先业界"}]), e.today = new Date, e
            }

            return Object(o.a)(n, [{
                key: "login", value: function () {
                    this.$eventTrack("yunpan_no_login_page_click", {clickid: "login"}), v.client.callServerFunction("ShowLoginDlg", "pc_yunpan_login_btn", !0)
                }
            }, {
                key: "exposureStat", value: function () {
                    this.$eventTrack("yunpan_no_login_page_show")
                }
            }, {
                key: "lastMonday", get: function () {
                    var e = this.today.getDay(), t = new Date(this.today.valueOf() - 864e5 * (6 + e));
                    return "".concat(t.getMonth() + 1, "月").concat(t.getDate(), "日")
                }
            }, {
                key: "nextSaturday", get: function () {
                    var e = this.today.getDay(), t = new Date(this.today.valueOf() + 864e5 * (6 - e));
                    return "".concat(t.getMonth() + 1, "月").concat(t.getDate(), "日")
                }
            }]), n
        }(u.Vue), hr = fr = pr([Object(u.Component)({})], fr), vr = (n(1501), Object(S.a)(hr, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                directives: [{
                    name: "observer",
                    rawName: "v-observer.once",
                    value: e.exposureStat,
                    expression: "exposureStat",
                    modifiers: {once: !0}
                }], staticClass: "xly-netdisk-guide"
            }, [n("td-carousel", {attrs: {"auto-play": !0, timeout: 3e3}}, e._l(e.list, (function (t) {
                return n("td-carousel-item", {key: t.key}, [n("img", {attrs: {src: t.img}}), e._v(" "), n("div", {staticClass: "xly-netdisk-guide__content"}, [n("h2", [e._v(e._s(t.title))]), e._v(" "), n("p", [e._v(e._s(t.text))])])])
            })), 1), e._v(" "), n("td-button", {
                attrs: {size: "large"},
                on: {click: e.login}
            }, [e._v("\n    登录领取超大空间\n    "), n("span", {staticClass: "xly-netdisk-guide__sub"}, [e._v("限时")])]), e._v(" "), n("p", {staticClass: "xly-netdisk-guide__text"}, [e._v("\n    名额有限，先到先得\n  ")])], 1)
        }), [], !1, null, null, null).exports), yr = n(286), mr = n(115);

        function br(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(c.a)(e);
                if (t) {
                    var r = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }

        var gr = function (e, t, n, i) {
                var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(l.a)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
                return o > 3 && a && Object.defineProperty(t, n, a), a
            }, xr = function (e, t, n, i) {
                return new (n || (n = Promise))((function (r, o) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(a, s)
                    }

                    c((i = i.apply(e, t || [])).next())
                }))
            }, kr = function (e) {
                Object(a.a)(n, e);
                var t = br(n);

                function n() {
                    return Object(r.a)(this, n), t.apply(this, arguments)
                }

                return Object(o.a)(n, [{
                    key: "mounted", value: function () {
                        return xr(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                            var t = this;
                            return regeneratorRuntime.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return p.log.info("index", "当前进程的pid", process.pid), window.onNuxtReady((function (e) {
                                            var n = e.context.thunderPanPluginError;
                                            if (n) {
                                                if (console.error("插件运行出错", n), window.location.search.indexOf("reload") > -1) t.$eventTrack("yunpan_page_retry_show", {result: "fail"}); else {
                                                    var i = t.$store.state.xlUserDns;
                                                    t.$eventTrack("yunpan_page_fail_show", {
                                                        error: n.message || "出错了",
                                                        version: mr.version,
                                                        dns: i
                                                    })
                                                }
                                                e.error({message: n.message || "出错了", statusCode: n.statusCode || 0})
                                            } else window.location.search.indexOf("reload") > -1 ? t.$eventTrack("yunpan_page_retry_show", {result: "success"}) : t.$eventTrack("yunpan_page_success_show")
                                        })), e.next = 4, Object(b.getConfig)("ThunderPanPlugin", "defaultDownloadPath", null);
                                    case 4:
                                        if (null !== e.sent) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.t0 = b.setConfig, e.t1 = "", e.next = 10, this.getLargestPartition();
                                    case 10:
                                        e.t2 = e.sent, e.t3 = e.t1.concat.call(e.t1, e.t2, "迅雷云盘"), (0, e.t0)("ThunderPanPlugin", "defaultDownloadPath", e.t3);
                                    case 13:
                                        return e.next = 15, ce.a.checkRemoteFunction("ThunderPanPluginWebview", "ShowToast");
                                    case 15:
                                        e.sent || ce.a.registerFunctions({ShowToast: this.showToast.bind(this)}), "/user/me/info", ce.a.attachServerEvent("SyncMessage-/user/me/info", (function (e, n) {
                                            var i;
                                            do {
                                                if ("string" != typeof n || 0 === n.length) break;
                                                var r = Object(p.parseJson)(n);
                                                if ("object" !== Object(l.a)(r)) {
                                                    console.log("wrong message of SyncMessage");
                                                    break
                                                }
                                                switch (console.log("SyncMessage msgObj:"), console.log(r), r.type) {
                                                    case"vipinfo":
                                                        if ((null === (i = null == r ? void 0 : r.data) || void 0 === i ? void 0 : i.userID) === t.$store.state.users.curUser.userId) {
                                                            var o = r.data.vipList.find((function (e) {
                                                                return "2" === e.vasid
                                                            }));
                                                            t.$store.commit("users/updateVipInfo", o), t.$store.dispatch("getAbout")
                                                        }
                                                }
                                            } while (0)
                                        })), document.onkeydown = function (e) {
                                            try {
                                                70 === e.keyCode && e.ctrlKey && t.globalSearchShorcut()
                                            } catch (e) {
                                                t.$raven.error(e)
                                            }
                                        };
                                    case 20:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, this)
                        })))
                    }
                }, {
                    key: "showToast", value: function (e, t) {
                        this.$message(t)
                    }
                }, {
                    key: "globalSearchShorcut", value: function () {
                        ce.a.callServerFunction("HandleSearchShortcut")
                    }
                }, {
                    key: "getLargestPartition", value: function () {
                        return xr(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                            var t, n, r, o;
                            return regeneratorRuntime.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object(yr.getLogicalDriveStrings)();
                                    case 2:
                                        return t = e.sent, e.next = 5, Promise.all(t.map((function (e) {
                                            return Object(yr.getFreePartitionSpace)(e)
                                        })));
                                    case 5:
                                        return n = e.sent, r = Math.max.apply(Math, Object(i.a)(n)), o = n.findIndex((function (e) {
                                            return e === r
                                        })), e.abrupt("return", t[o]);
                                    case 9:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    }
                }, {
                    key: "isLogin", get: function () {
                        return this.$store.getters["users/isLogin"]
                    }
                }]), n
            }(u.Vue),
            _r = kr = gr([Object(u.Component)({head: {title: "迅雷云盘"}, components: {DrivePage: ar, Unlogin: vr}})], kr),
            wr = Object(S.a)(_r, (function () {
                var e = this.$createElement, t = this._self._c || e;
                return this.isLogin ? t("DrivePage") : t("Unlogin")
            }), [], !1, null, null, null);
        t.default = wr.exports
    }, 683: function (e, t, n) {
        "use strict";
        n.r(t);
        n(12), n(4), n(30), n(472);
        var i = n(33), r = n(40), o = n(3), a = function () {
            function e() {
                Object(i.a)(this, e), this.timerMap = new Map
            }

            return Object(r.a)(e, [{
                key: "markStart", value: function (e) {
                    this.timerMap.has(e) ? console.warn("Timer ".concat(e, " is existed.")) : this.timerMap.set(e, window.performance.now())
                }
            }, {
                key: "markEnd", value: function (e) {
                    if (this.timerMap.has(e)) {
                        var t = window.performance.now() - this.timerMap.get(e);
                        this.timerMap.delete(e), o.a.callServerFunction("SendPerformanceItem", "DriveSelectFile", t)
                    } else console.warn("Timer ".concat(e, " does not exists."))
                }
            }]), e
        }();
        t.default = new a
    }, 687: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "createDirectoryError", (function () {
            return i
        }));
        var i = {file_duplicated_name: "文件名重复，请重试～"}
    }
}]);
//# sourceMappingURL=index.205c532.js.map