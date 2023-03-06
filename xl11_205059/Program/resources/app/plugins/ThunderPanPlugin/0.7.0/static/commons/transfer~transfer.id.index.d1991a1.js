(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
    1331: function (e, t, o) {
        "use strict";
        o(10), o(11), o(4), o(32);
        var n = o(33), r = o(40), i = o(70), l = o(71), a = o(37), c = o(29), s = o(18), d = o(3);

        function p(e) {
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
                var o, n = Object(a.a)(e);
                if (t) {
                    var r = Object(a.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(l.a)(this, o)
            }
        }

        var u = function (e, t, o, n) {
            var r, i = arguments.length, l = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(c.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (l = (i < 3 ? r(l) : i > 3 ? r(t, o, l) : r(t, o)) || l);
            return i > 3 && l && Object.defineProperty(t, o, l), l
        }, y = function (e) {
            Object(i.a)(o, e);
            var t = p(o);

            function o() {
                var e;
                return Object(n.a)(this, o), (e = t.apply(this, arguments)).visible = !1, e.eventId = 0, e
            }

            return Object(r.a)(o, [{
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
                    this.eventId = d.a.attachServerEvent("OnLogout", (function () {
                        e.close()
                    }))
                }
            }, {
                key: "beforeDestroy", value: function () {
                    d.a.detachServerEvent("OnLogout", this.eventId)
                }
            }]), o
        }(s.Vue);
        u([Object(s.Prop)({})], y.prototype, "resolve", void 0), u([Object(s.Prop)({})], y.prototype, "reject", void 0), u([Object(s.Prop)({})], y.prototype, "content", void 0), u([Object(s.Prop)({})], y.prototype, "title", void 0), u([Object(s.Prop)({default: "确定"})], y.prototype, "confirmText", void 0), u([Object(s.Prop)({default: !1})], y.prototype, "danger", void 0);
        var b = y = u([Object(s.Component)({})], y), f = (o(280), o(72)), x = Object(f.a)(b, (function () {
            var e = this, t = e.$createElement, o = e._self._c || t;
            return o("td-dialog", {
                attrs: {"custom-class": "xly-dialog-prompt", visible: e.visible},
                on: {
                    "update:visible": function (t) {
                        e.visible = t
                    }, close: e.close
                }
            }, [o("h2", {
                attrs: {slot: "header"},
                slot: "header"
            }, [e._v("\n    " + e._s(e.title) + "\n  ")]), e._v(" "), o("p", {staticClass: "xly-dialog-prompt__text"}, [e._v("\n    " + e._s(e.content) + "\n  ")]), e._v(" "), o("div", {
                staticClass: "xly-dialog__footer",
                attrs: {slot: "footer"},
                slot: "footer"
            }, [o("div", {staticClass: "xly-dialog__button"}, [o("td-button", {
                attrs: {danger: e.danger},
                on: {click: e.emit}
            }, [e._v("\n        " + e._s(e.confirmText) + "\n      ")]), e._v(" "), o("td-button", {
                staticClass: "td-button--other",
                on: {click: e.close}
            }, [e._v("\n        取消\n      ")])], 1)])])
        }), [], !1, null, null, null);
        t.a = x.exports
    }, 1342: function (e, t, o) {
        var n = o(1348);
        "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        (0, o(90).default)("014d4508", n, !0, {sourceMap: !1})
    }, 1343: function (e, t, o) {
        var n = o(1349);
        "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        (0, o(90).default)("59a38204", n, !0, {sourceMap: !1})
    }, 1344: function (e, t, o) {
        var n = o(1350);
        "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        (0, o(90).default)("19d22f20", n, !0, {sourceMap: !1})
    }, 1345: function (e, t, o) {
        var n = o(1351);
        "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        (0, o(90).default)("4c53d628", n, !0, {sourceMap: !1})
    }, 1348: function (e, t, o) {
        var n = o(89), r = o(126), i = o(473);
        t = n(!1);
        var l = r(i);
        t.push([e.i, "body{--color-primary:#3f85ff;--color-hover:#2670ea;--color-start:#2670ea;--color-end:#3f85ff;--color-light:#0cf;--color-title:#1a1a1a;--color-default:#4d4d4d;--color-auxiliary:#727272;--color-secondary:#b3b3b3;--color-disabled:#ccc;--color-icon:#6a707c;--color-border:#e6e6e6;--color-border-form:#ccc;--color-border-2:#e2e2e2;--color-item-hover:#eff6fe;--color-item-active:#e5f0fe;--color-list-hover:#e6e6e6;--color-shadow:rgba(26,26,26,0.2);--color-link:var(--color-default);--background-main:#f5f5f5;--background-area:#fff;--background-module:#fff;--background-progress:#e6e6e6;--background-bar:#fff8e4;--background-icon-hover:rgba(106,112,124,0.4);--background-aside:linear-gradient(180deg,var(--color-start),var(--color-end));--color-scrollbar:rgba(0,0,0,0.2);--color-scrollbar-hover:rgba(0,0,0,0.3);--icon-opacity:0.4;--table-color-line:var(--color-border-form);--input-border-color:var(--color-border);--button-default-fill:var(--color-primary);--button-default-fill-hover:var(--color-hover);--button-secondary-fill:var(--background-main);--button-secondary-color:var(--color-auxiliary);--input-border-color-hover:var(--color-border-form);--dropdown-border-color:var(--color-border);--badge-background:var(--color-danger);--color-danger:#ff7b5f;--color-note:#ff9701;--color-success:#00b36a;--color-danger-1:#ff7b5f;--color-danger-2:#ff7b5f;--color-danger-3:#ff927b}body,body.is-dark{--dialog-background:var(--background-module)}body.is-dark{--color-start:#121212;--color-end:#121212;--color-title:#e6e6e6;--color-default:#c8c8c8;--color-auxiliary:#aaa;--color-secondary:#858585;--color-disabled:#4b4b4b;--color-icon:#6a707c;--color-border:#3d3d3d;--color-border-form:#4d4d4d;--color-border-2:#464646;--color-item-hover:#2e2e2e;--color-item-active:#1c1d1d;--color-list-hover:#414141;--color-shadow:rgba(0,0,0,0.5);--color-scrollbar:hsla(0,0%,100%,0.18);--color-scrollbar-hover:hsla(0,0%,100%,0.3);--background-main:#121212;--background-area:#232526;--background-module:#333;--background-progress:#414141;--background-bar:rgba(255,248,228,0.8);--background-icon-hover:rgba(106,112,124,0.4);--icon-opacity:0.8}body.is-dark .xly-browser-search .td-input-group{background:#000}body.is-dark .xly-browser-tab .td-browser-tab .td-browser-tab__item:hover .td-browser-tab__text{background:hsla(0,0%,100%,.18)}body.is-dark .xly-drag{background:rgba(0,0,0,.6)}body.is-theme{--color-start:#f60045;--background-aside:url(" + l + "),linear-gradient(#f60045,#e32131)}body.is-theme .xly-aside{background-size:100% auto,100% 100%;background-position:bottom,50%;background-repeat:no-repeat}", ""]), e.exports = t
    }, 1349: function (e, t, o) {
        var n = o(89), r = o(126), i = o(675), l = o(676), a = o(677), c = o(678), s = o(679), d = o(680), p = o(681),
            u = o(682);
        t = n(!1);
        var y = r(i), b = r(l), f = r(a), x = r(c), g = r(s), h = r(d), m = r(p), v = r(u);
        t.push([e.i, 'pre{font-family:"microsoft yahei",-apple-system,"PingFang SC","simsun",Arial,sans-serif}@font-face{font-family:"dincond";src:url(' + y + ') format("woff")}body::-webkit-scrollbar{width:8px;background:transparent}body::-webkit-scrollbar:horizontal{height:8px}body::-webkit-scrollbar-thumb{border-radius:2px;width:6px;background:var(--color-scrollbar)}body::-webkit-scrollbar-thumb:hover{background:var(--color-scrollbar-hover)}body::-webkit-scrollbar-corner{background:transparent}body .td-progress-bar__outer,body .td-slider__bar{background:var(--background-progress)}body .td-input__inner,body .td-textarea__inner{background:var(--background-module);border-color:var(--color-border-form)}body .td-input__inner::-moz-placeholder,body .td-textarea__inner::-moz-placeholder{color:var(--color-secondary)}body .td-input__inner:-ms-input-placeholder,body .td-textarea__inner:-ms-input-placeholder{color:var(--color-secondary)}body .td-input__inner::-ms-input-placeholder,body .td-textarea__inner::-ms-input-placeholder{color:var(--color-secondary)}body .td-input__inner::placeholder,body .td-textarea__inner::placeholder{color:var(--color-secondary)}body .td-textarea__inner::-webkit-scrollbar-thumb{border-right:unset}body .is-disabled .td-input__inner{background:var(--color-border)}body .td-textarea.is-disabled .td-textarea__inner{background:var(--background-main)}body .td-checkbox{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}body .td-checkbox .td-checkbox__inner{width:14px;height:14px;background:var(--background-area);border-color:var(--color-border-form)}body .td-checkbox .td-checkbox__inner:hover{border-color:var(--color-primary)}body .td-checkbox .td-checkbox__inner:checked:before{left:2px;width:7px;border-width:2px;border-color:var(--color-primary)}body .td-checkbox.is-indeterminate .td-checkbox__inner{background:unset;border-color:var(--color-border-form)}body .td-checkbox.is-indeterminate .td-checkbox__inner:before{top:50%;left:50%;width:6px;height:6px;background:var(--color-primary);border:unset;transform:translate3d(-50%,-50%,0)}body .td-checkbox.is-indeterminate .td-checkbox__inner:hover{border-color:var(--color-primary)}body .td-checkbox.is-disabled{cursor:default}body .td-checkbox.is-disabled .td-checkbox__inner,body .td-checkbox.is-disabled .td-checkbox__inner:checked{background:var(--color-border);border:1px solid var(--color-border-form)}body .td-checkbox.is-disabled .td-checkbox__inner:checked:before{border-color:var(--color-border-form)}body .td-checkbox.is-disabled.is-indeterminate .td-checkbox__inner{background:var(--color-border);border:1px solid var(--color-border-form)}body .td-checkbox.is-disabled.is-indeterminate .td-checkbox__inner:before{background:var(--color-border-form)}body .td-icon-success:before{font-family:"xly-icon"!important;content:"\\e7b6"}body .td-dialog{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}body .td-dialog__close{-webkit-app-region:no-drag}body .td-select,body .td-select.is-disabled{background:transparent}body .td-select.is-disabled .td-select-group__label{color:var(--color-disabled)}body .td-select.is-disabled .td-select-group{background:var(--background-main);border-color:var(--color-border-form)}body .td-select.is-disabled .td-select__drop{opacity:.2}body .td-select.is-disabled .td-input__inner{background:transparent;color:var(--color-disabled)}body .td-select-group,body .td-select-group:hover{border-color:var(--color-border-form)}body .td-select__drop{color:var(--color-secondary)}body .td-tooltip{box-shadow:0 0 10px var(--color-shadow)}body .td-poper__arrow,body .td-tooltip{background:var(--background-module)}body .td-radio__inner{width:14px;height:14px}body .td-radio__inner,body .td-radio__inner:checked{border-color:var(--color-border-form)}body .td-radio__inner:checked:after{width:8px;height:8px}body .td-table{background:unset;border-color:var(--color-border)}body .td-table th{height:23px;border-bottom:unset}body .td-table td{height:28px;border-bottom:unset}body .td-table__panel::-webkit-scrollbar-thumb{border-right:var(--background-module)}body .td-button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}body .td-button.is-disabled{color:var(--color-disabled);background:var(--background-main);cursor:default}body .td-button.td-button--large{font-size:14px}body .td-button.td-button--secondary{color:var(--color-auxiliary);background:var(--background-main)}body .td-button.td-button--secondary:hover{color:var(--color-primary)}body .td-button.td-button--secondary.is-disabled,body .td-button.td-button--secondary.is-disabled:hover{color:var(--color-disabled)}body .td-button.td-button--other{font-size:12px;color:var(--color-default);border-color:var(--color-border-form)}body .td-button.td-button--other:hover{color:var(--color-primary)}body .td-button.td-button--other:active{background:var(--color-item-active);border-color:var(--color-primary)}body .td-button.td-button--other.is-disabled{color:var(--color-disabled);background:var(--background-main);border-color:var(--color-border)}body .td-button.td-button--text.is-disabled{color:var(--color-secondary);background:transparent}body .td-button.is-status{background:rgba(63,133,255,.5)}body .td-icon-arrow-drop:before{font-family:"xly-icon"!important;content:"\\e7b1"}body .td-dropdown-menu{background:var(--background-module);box-shadow:0 0 20px var(--color-shadow);border:unset}body .td-dropdown-menu::-webkit-scrollbar{width:8px;background:transparent}body .td-dropdown-menu::-webkit-scrollbar:horizontal{height:8px}body .td-dropdown-menu::-webkit-scrollbar-thumb{border-radius:2px;width:6px;background:var(--color-scrollbar)}body .td-dropdown-menu::-webkit-scrollbar-thumb:hover{background:var(--color-scrollbar-hover)}body .td-dropdown-menu::-webkit-scrollbar-corner{background:transparent}body .td-dropdown-menu::-webkit-scrollbar{width:10px}body .td-dropdown-menu::-webkit-scrollbar-thumb{border-left:2px solid var(--background-module)}body .td-dropdown-menu__item:hover{background:var(--color-list-hover)}body .xly-pop-loading{position:fixed;top:50%;left:50%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0;width:120px;height:120px;background:var(--background-module);box-shadow:0 0 10px var(--color-shadow);border-radius:6px;transform:translate3d(-50%,-50%,0);z-index:99;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}body .xly-pop-loading .td-dialog__header{min-height:unset}body .xly-pop-loading .td-dialog__body{display:flex;flex-direction:column;justify-content:center;align-items:center}body .xly-pop-loading .td-dialog__close:hover{background:unset}body .xly-pop-loading .td-dialog__close:hover .td-icon-close{color:var(--color-primary)}body .xly-pop-loading .td-icon-close{position:absolute;top:6px;right:6px;color:var(--color-secondary);cursor:pointer}body .xly-pop-loading p{margin-top:8px;white-space:nowrap}.xly-line{width:1px;height:10px;margin:0 4px;background:var(--color-border)}.xly-select{position:relative;-webkit-appearance:unset;padding:0 24px 0 8px;height:30px;color:var(--color-default);font-size:12px;border:1px solid var(--color-border-form);border-radius:4px;outline:none;background:url(' + b + ") 99% no-repeat;background-size:16px auto}.xly-select option{height:30px;background:var(--background-module)}.xly-img-empty-netdisk{width:160px;height:140px;background:url(" + f + ") no-repeat;background-size:100% auto}.xly-img-network{width:160px;height:140px;background:url(" + x + ") no-repeat;background-size:100% auto}.xly-img-404{width:160px;height:140px;background:url(" + g + ") no-repeat;background-size:100% auto}.xly-img-message{width:160px;height:140px;background:url(" + h + ') no-repeat;background-size:100% auto}.xly-empty{display:flex;justify-content:center;align-items:center;width:100%;height:100%;background:var(--background-main)}.xly-empty i.xly-icon-logo{font-size:120px;color:var(--color-border)}.xly-404,.xly-error{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.xly-error{flex-direction:column;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.xly-error p{margin:20px 0 22px;color:var(--color-secondary)}.xly-error .td-button{margin:0 6px;width:72px}.xly-error__button{display:flex}.xly-error__button .td-button.td-button--other{line-height:23px}body .td-cover{line-height:1.5}body .td-cover .td-icon-error,body .td-cover .td-icon-warning{font-family:"xly-icon"!important}body .td-cover .td-icon-error:before,body .td-cover .td-icon-warning:before{content:"\\e7a5"}body .td-cover.td-cover--message{justify-content:flex-end}body .td-cover .td-message{margin-bottom:66px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}body .td-cover .td-message__text{margin-left:12px}body .td-cover .td-message--error{color:#fff;background:#e66056}body .td-cover .td-message--warning{color:#fff;background:#ff9700}body .td-cover .td-message--success{color:#fff;background:#38b878}body .td-icon-close:before{font-family:"xly-icon";content:"\\e768"}.xly-tips{display:none;position:absolute;left:50%;bottom:28px;padding:0 12px;color:#fff;white-space:nowrap;text-align:center;line-height:30px;background:#46423c;box-shadow:0 0 10px 0 rgba(26,26,26,.2);border-radius:4px;transform:translateX(-50%);z-index:2}i.xly-img-icon-rocket{margin-right:5px;width:27px;height:15px;background:url(' + m + ');background-size:100% auto}.xly-more-drop{display:none;position:absolute;top:24px;left:0;min-width:100px;padding:6px 0;width:76px;background:var(--background-module);box-shadow:0 0 10px 0 var(--color-shadow);border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.xly-more-drop li{padding-left:20px;height:30px;line-height:30px;cursor:default}.xly-more-drop li:hover{background:var(--color-list-hover)}.xly-point{display:inline-block;width:12px;vertical-align:top}.xly-point:before{content:"";animation:content 1.5s infinite both}@keyframes content{0%{content:""}25%{content:"."}50%{content:".."}75%{content:"..."}}.xly-drop-file{top:0;padding:6px 0 0;background:var(--background-module)}.xly-drop-file .td-dropdown-menu__item{position:relative;padding:0 0 0 8px;line-height:30px}.xly-drop-file .td-dropdown-menu__item:hover .xly-drop-file__close{display:block}.xly-drop-file ul{max-height:unset;overflow:visible}.xly-drop-file__close{display:none;position:absolute;top:0;right:12px;color:var(--color-secondary)}.xly-drop-file__close:hover{color:var(--color-primary)}.xly-drop-file__link{margin-top:6px;display:block;line-height:30px;text-align:center;color:var(--color-default);border-top:1px solid var(--color-border)}.xly-drop-file__link:hover{color:var(--color-primary)}i.img-icon-loading{display:block;width:48px;height:48px;background:url(' + v + ") no-repeat;background-size:100%;animation:rotate 2s linear infinite both}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(1turn)}}", ""]), e.exports = t
    }, 1350: function (e, t, o) {
        var n = o(89), r = o(126), i = o(478);
        t = n(!1);
        var l = r(i);
        t.push([e.i, '@font-face{font-family:"xly-icon";src:url(' + l + ') format("woff")}[class*=" xly-icon-"],[class^=xly-icon]{font-family:"xly-icon"!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.xly-icon-unzip:before{content:"\\e7ea"}.xly-icon-mobile-bold:before{content:"\\e7e8"}.xly-icon-connect:before{content:"\\e7e6"}.xly-icon-accelerate:before{content:"\\e7e5"}.xly-icon-menu-chosen:before{content:"\\e7e4"}.xly-icon-add:before{content:"\\e74a"}.xly-icon-menu:before{content:"\\e74b"}.xly-icon-search:before{content:"\\e74c"}.xly-icon-nav-find:before{content:"\\e74d"}.xly-icon-nav-message:before{content:"\\e74e"}.xly-icon-nav-down:before{content:"\\e74f"}.xly-icon-nav-game:before{content:"\\e7e9"}.xly-icon-share:before{content:"\\e750"}.xly-icon-theme:before{content:"\\e751"}.xly-icon-nav-cloud:before{content:"\\e752"}.xly-icon-link:before{content:"\\e661"}.xly-icon-send:before{content:"\\e63e"}.xly-icon-face:before{content:"\\e642"}.xly-icon-img:before{content:"\\e68f"}.xly-icon-maximize:before{content:"\\e753"}.xly-icon-minimize:before{content:"\\e754"}.xly-icon-close:before{content:"\\e755"}.xly-icon-message:before{content:"\\e7b4"}.xly-icon-download:before{content:"\\e75a"}.xly-icon-pause:before{content:"\\e759"}.xly-icon-praise:before{content:"\\e758"}.xly-icon-note:before{content:"\\e757"}.xly-icon-more:before{content:"\\e756"}.xly-icon-add-tab:before{content:"\\e75c"}.xly-icon-fav:before{content:"\\e75d"}.xly-icon-delete-comment:before{content:"\\e75e"}.xly-icon-comment:before{content:"\\e75f"}.xly-icon-resize:before{content:"\\e761"}.xly-icon-arrow-right:before{content:"\\e762"}.xly-icon-rename:before{content:"\\e763"}.xly-icon-file:before{content:"\\e760"}.xly-icon-open:before{content:"\\e764"}.xly-icon-restore:before{content:"\\e765"}.xly-icon-clear:before{content:"\\e766"}.xly-icon-play:before{content:"\\e767"}.xly-icon-close-small:before{content:"\\e768"}.xly-icon-help:before{content:"\\e769"}.xly-icon-clear-1:before{content:"\\e76a"}.xly-icon-upload:before{content:"\\e76b"}.xly-icon-retry:before{content:"\\e76c"}.xly-icon-logo:before{content:"\\e76f"}.xly-icon-drag:before{content:"\\e76d"}.xly-icon-transport:before{content:"\\e76e"}.xly-icon-sequence:before{content:"\\e770"}.xly-icon-success:before{content:"\\e771"}.xly-icon-refresh:before{content:"\\e772"}.xly-icon-copy:before{content:"\\e773"}.xly-icon-arrow-down:before{content:"\\e774"}.xly-icon-play-detail:before{content:"\\e775"}.xly-icon-magnifier:before{content:"\\e77c"}.xly-icon-collapse:before{content:"\\e778"}.xly-icon-report-fill:before{content:"\\e779"}.xly-icon-comment-fill:before{content:"\\e77a"}.xly-icon-quote:before{content:"\\e77b"}.xly-icon-hot:before{content:"\\e777"}.xly-icon-delete:before{content:"\\e776"}.xly-icon-sort:before{content:"\\e77d"}.xly-icon-upload-total:before{content:"\\e77e"}.xly-icon-time:before{content:"\\e77f"}.xly-icon-user:before{content:"\\e780"}.xly-icon-peak-upload:before{content:"\\e781"}.xly-icon-speed:before{content:"\\e782"}.xly-icon-peak-download:before{content:"\\e783"}.xly-icon-file-1:before{content:"\\e784"}.xly-icon-download-total:before{content:"\\e785"}.xly-icon-luky:before{content:"\\e786"}.xly-icon-qzone:before{content:"\\e787"}.xly-icon-qq:before{content:"\\e788"}.xly-icon-net:before{content:"\\e696"}.xly-icon-disk:before{content:"\\e78a"}.xly-icon-refresh-1:before{content:"\\e789"}.xly-icon-arrow-right-1:before{content:"\\e78c"}.xly-icon-arrow-left:before{content:"\\e78b"}.xly-icon-history:before{content:"\\e78e"}.xly-icon-search-1:before{content:"\\e78f"}.xly-icon-close-search:before{content:"\\e790"}.xly-icon-success-fill:before{content:"\\e78d"}.xly-icon-success-bold:before{content:"\\e7b6"}.xly-icon-minimize-small:before{content:"\\e791"}.xly-icon-maximize-small:before{content:"\\e793"}.xly-icon-magnify:before{content:"\\e794"}.xly-icon-ratio:before{content:"\\e795"}.xly-icon-minify:before{content:"\\e796"}.xly-icon-reduce-small:before{content:"\\e792"}.xly-icon-reduce:before{content:"\\e797"}.xly-icon-eye:before{content:"\\e79c"}.xly-icon-eye-open:before{content:"\\e79d"}.xly-icon-arrow-down-1:before{content:"\\e798"}.xly-icon-alipay:before{content:"\\e79b"}.xly-icon-wechat:before{content:"\\e799"}.xly-icon-weibo:before{content:"\\e79a"}.xly-icon-parse:before{content:"\\e79e"}.xly-icon-loading{color:var(--color-secondary);animation:loading 2s linear infinite both}.xly-icon-loading:before{content:"\\e79f"}@keyframes loading{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.xly-icon-vip:before{content:"\\e7a0"}.xly-icon-super:before{content:"\\e7a1"}.xly-icon-time-1:before{content:"\\e7a2"}.xly-icon-speed-1:before{content:"\\e7a3"}.xly-icon-together:before{content:"\\e7a4"}.xly-icon-note-bold:before{content:"\\e7a5"}.xly-icon-skip:before{content:"\\e7a6"}.xly-icon-replace:before{content:"\\e7a7"}.xly-icon-cast-screen:before,.xly-icon-screen:before{content:"\\e7a9"}.xly-icon-back:before{content:"\\e7ab"}.xly-icon-ratio-optimal:before{content:"\\e7aa"}.xly-icon-open-file:before{content:"\\e7ad"}.xly-icon-fav-fill:before{content:"\\e7ac"}.xly-icon-play-small:before{content:"\\e7ae"}.xly-icon-file-small:before{content:"\\e7af"}.xly-icon-open-small:before{content:"\\e7b0"}.xly-icon-personal:before{content:"\\e7b2"}.xly-icon-fav-file:before{content:"\\e7b3"}.xly-icon-vip-1:before{content:"\\e7b7"}.xly-icon-mobile:before{content:"\\e7b8"}.xly-icon-thunder:before{content:"\\e7b9"}.xly-icon-bird:before{content:"\\e7ba"}.xly-icon-transport-up:before{content:"\\e7bc"}.xly-icon-transport-down:before{content:"\\e7bd"}.xly-icon-link-bold:before{content:"\\e7bb"}.xly-icon-refresh-message:before{content:"\\e7c1"}.xly-icon-face-message:before{content:"\\e7c0"}.xly-icon-note-message:before{content:"\\e7bf"}.xly-icon-shield:before{content:"\\e7be"}.xly-icon-user-message:before{content:"\\e7c2"}.xly-icon-vip-message:before{content:"\\e7c3"}.xly-icon-gift:before{content:"\\e7c4"}.xly-icon-official:before{content:"\\e7c5"}.xly-icon-clear-input:before{content:"\\e7c6"}.xly-icon-wait:before{content:"\\e7c7"}.xly-icon-create:before{content:"\\e7cb"}.xly-icon-setting-bold:before{content:"\\e7cd"}.xly-icon-arrow-both:before{content:"\\e7c8"}.xly-icon-attention:before{content:"\\e7ce"}.xly-icon-default:before{content:"\\e7cf"}.xly-icon-secret:before{content:"\\e7d0"}.xly-icon-browser:before{content:"\\e7d1"}.xly-icon-recycle:before{content:"\\e7d2"}.xly-icon-player-small:before{content:"\\e7d3"}.xly-icon-arrow-file:before{content:"\\e7b1"}.xly-icon-code:before{content:"\\e7cc"}.xly-icon-code-both:before{content:"\\e7c9"}.xly-icon-invite:before{content:"\\e7ca"}.xly-icon-share-1:before{content:"\\e7d4"}.xly-icon-netdisk:before{content:"\\e7d5"}.xly-icon-device:before{content:"\\e7d6"}.xly-icon-cloudcast:before{content:"\\e7d7"}.xly-icon-add-netdisk:before{content:"\\e7d8"}.xly-icon-gift-1:before{content:"\\e7d9"}.xly-icon-game:before{content:"\\e7da"}.xly-icon-picture-bold:before{content:"\\e7db"}.xly-icon-music-bold:before{content:"\\e7dc"}.xly-icon-file-bold:before{content:"\\e7dd"}.xly-icon-android-bold:before{content:"\\e7de"}.xly-icon-menu-more:before{content:"\\e7e3"}.xly-icon-menu-setting:before{content:"\\e7df"}.xly-icon-menu-xmp:before{content:"\\e7e0"}.xly-icon-menu-explore:before{content:"\\e7e1"}.xly-icon-menu-support:before{content:"\\e7e2"}', ""]), e.exports = t
    }, 1351: function (e, t, o) {
        var n = o(89), r = o(126), i = o(684);
        t = n(!1);
        var l = r(i);
        t.push([e.i, ".xly-icon-type{display:inline-block;width:30px;height:30px;background:url(" + l + ") -125px -125px no-repeat;background-size:210px auto;vertical-align:top}.xly-icon-type.is-middle{zoom:.8}.xly-icon-type.is-small{zoom:.5333}.xly-icon-type.xly-type-apk{background-position:-5px -5px}.xly-icon-type.xly-type-bt-file{background-position:-45px -5px}.xly-icon-type.xly-type-bt-link{background-position:-5px -45px}.xly-icon-type.xly-type-doc{background-position:-45px -45px}.xly-icon-type.xly-type-group{background-position:-85px -5px}.xly-icon-type.xly-type-link{background-position:-85px -45px}.xly-icon-type.xly-type-magnetic{background-position:-5px -85px}.xly-icon-type.xly-type-music{background-position:-45px -85px}.xly-icon-type.xly-type-pdf{background-position:-85px -85px}.xly-icon-type.xly-type-pic{background-position:-125px -5px}.xly-icon-type.xly-type-ppt{background-position:-125px -45px}.xly-icon-type.xly-type-rar{background-position:-125px -85px}.xly-icon-type.xly-type-save{background-position:-45px -125px}.xly-icon-type.xly-type-txt{background-position:-85px -125px}.xly-icon-type.xly-type-unknow{background-position:-125px -125px}.xly-icon-type.xly-type-avi,.xly-icon-type.xly-type-flv,.xly-icon-type.xly-type-mkv,.xly-icon-type.xly-type-mov,.xly-icon-type.xly-type-mp4,.xly-icon-type.xly-type-mpg,.xly-icon-type.xly-type-rm,.xly-icon-type.xly-type-rmvb,.xly-icon-type.xly-type-video,.xly-icon-type.xly-type-wmv{background-position:-165px -5px}.xly-icon-type.xly-type-word{background-position:-165px -45px}.xly-icon-type.xly-type-xls{background-position:-165px -85px}.xly-icon-type.xly-type-saveto{background-position:-45px -125px}.xly-icon-type.xly-type-resource{background-position:-5px -125px}.xly-icon-type.xly-type-gif{background-position:-165px -125px}.xly-icon-type.xly-type-ipa{background-position:-5px -165px}.xly-icon-type.xly-type-ipsw{background-position:-45px -165px}.xly-icon-type.xly-type-dll{background-position:-85px -165px}.xly-icon-type.xly-type-chm{background-position:-125px -165px}.xly-icon-type.xly-type-text{background-position:-165px -165px}.xly-icon-type.xly-type-exe,.xly-icon-type.xly-type-install{background-position:-5px -205px}.xly-icon-type.xly-type-iso{background-position:-45px -205px}.xly-icon-type.xly-type-safe{background-position:-85px -205px}", ""]), e.exports = t
    }, 1352: function (e, t, o) {
        e.exports = o.p + "img/icon-thunder.415180e.png"
    }, 1353: function (e, t, o) {
        e.exports = o.p + "img/icon-super.efa93b6.png"
    }, 1401: function (e, t, o) {
        var n = o(1411);
        "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        (0, o(90).default)("4b399352", n, !0, {sourceMap: !1})
    }, 1402: function (e, t, o) {
        var n = o(1412);
        "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        (0, o(90).default)("af68ea5e", n, !0, {sourceMap: !1})
    }, 1403: function (e, t, o) {
        var n = o(1413);
        "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        (0, o(90).default)("3fb08a68", n, !0, {sourceMap: !1})
    }, 1404: function (e, t, o) {
        e.exports = o.p + "img/icon-speed.6346d92.png"
    }, 1408: function (e, t, o) {
        "use strict";
        o(10), o(11), o(32), o(41), o(44), o(105);
        var n = o(38), r = (o(7), o(83)), i = (o(471), o(33)), l = o(40), a = o(70), c = o(71), s = o(37),
            d = (o(4), o(29)), p = o(18), u = o(14), y = o(1), b = o(110), f = o.n(b), x = o(694), g = o(195),
            h = o(1331), m = o(1409), v = o(281), _ = o(2), k = o(60), w = o(67), T = o(34), S = o.n(T), O = o(82),
            j = o.n(O), P = o(1404), C = o.n(P), R = o(1352), E = o.n(R), D = o(1353), z = o.n(D);
        o(234);

        function U(e) {
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
                var o, n = Object(s.a)(e);
                if (t) {
                    var r = Object(s.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(c.a)(this, o)
            }
        }

        var $ = function (e, t, o, n) {
            var r, i = arguments.length, l = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(d.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (l = (i < 3 ? r(l) : i > 3 ? r(t, o, l) : r(t, o)) || l);
            return i > 3 && l && Object.defineProperty(t, o, l), l
        }, I = function (e) {
            Object(a.a)(o, e);
            var t = U(o);

            function o() {
                return Object(i.a)(this, o), t.apply(this, arguments)
            }

            return Object(l.a)(o, [{
                key: "statShowPromotion", value: function () {
                    var e = this;
                    ({
                        urlTask: function () {
                            e.$eventTrack("cslist_tab_xht_show", {
                                vip_type: e.$store.getters["users/curVipType"],
                                tab: "cloud_add",
                                xht_type: "fast_add"
                            }, "xlx_vip_event")
                        }, downloadTask: function () {
                            e.$eventTrack("cslist_tab_xht_show", {
                                vip_type: e.$store.getters["users/curVipType"],
                                tab: "fetch_local",
                                xht_type: "fast_fetch"
                            }, "xlx_vip_event")
                        }, localTask: function () {
                        }
                    })[this.type]()
                }
            }, {
                key: "openVip", value: function () {
                    var e = this;
                    ({
                        urlTask: function () {
                            var t = e.$sget(e.promotionConfig, "urlTask", "button", "url") || "https://pay.xunlei.com/pay.html",
                                o = e.$sget(e.promotionConfig, "urlTask", "button", "referfrom") || "v_pc_xlx_hytq_yp_cloudadd",
                                n = e.$sget(e.promotionConfig, "urlTask", "xgt_aid", "text") || "fast_add_xht",
                                r = "referfrom=".concat(o, "&aidfrom=").concat(n),
                                i = "" === new URL(t).search ? "".concat(t, "?").concat(r) : "".concat(t, "&").concat(r);
                            Object(_.callRemote)("vip-download-webview", "OpenPayVipUrl", i), e.$eventTrack("cslist_tab_xht_click", {
                                vip_type: e.$store.getters["users/curVipType"],
                                tab: "cloud_add",
                                xht_type: "fast_add",
                                clickid: "开通超会" === e.promotionButton ? "open_super" : "upgrade_super"
                            }, "xlx_vip_event")
                        }, downloadTask: function () {
                            var t = e.$sget(e.promotionConfig, "downloadTask", "button", "url") || "https://pay.xunlei.com/pay.html",
                                o = e.$sget(e.promotionConfig, "downloadTask", "button", "referfrom") || "v_pc_xlx_hytq_yp_fetchspeed",
                                n = e.$sget(e.promotionConfig, "downloadTask", "button", "aidfrom") || "fast_fetch_xht",
                                r = "referfrom=".concat(o, "&aidfrom=").concat(n),
                                i = "" === new URL(t).search ? "".concat(t, "?").concat(r) : "".concat(t, "&").concat(r);
                            Object(_.callRemote)("vip-download-webview", "OpenPayVipUrl", i), e.$eventTrack("cslist_tab_xht_click", {
                                vip_type: e.$store.getters["users/curVipType"],
                                tab: "fetch_local",
                                xht_type: "fast_fetch",
                                clickid: "open_vip"
                            }, "xlx_vip_event")
                        }, localTask: function () {
                        }
                    })[this.type]()
                }
            }, {
                key: "clickPromotionClose", value: function () {
                    var e = this;
                    this.$emit("promotion-close"), {
                        urlTask: function () {
                            e.$eventTrack("cslist_tab_xht_click", {
                                vip_type: e.$store.getters["users/curVipType"],
                                tab: "cloud_add",
                                xht_type: "fast_add",
                                clickid: "close"
                            }, "xlx_vip_event")
                        }, downloadTask: function () {
                            e.$eventTrack("cslist_tab_xht_click", {
                                vip_type: e.$store.getters["users/curVipType"],
                                tab: "fetch_local",
                                xht_type: "fast_fetch",
                                clickid: "close"
                            }, "xlx_vip_event")
                        }, localTask: function () {
                        }
                    }[this.type]()
                }
            }, {
                key: "promotionButton", get: function () {
                    return this.$sget(this.promotionConfig, this.type, "button", "text") || "".concat("downloadTask" === this.type ? "开通会员" : "开通超会")
                }
            }]), o
        }(p.Vue);
        $([Object(p.Prop)({
            type: Boolean,
            default: !1
        })], I.prototype, "showPromotion", void 0), $([Object(p.Prop)()], I.prototype, "type", void 0), $([Object(p.Prop)()], I.prototype, "promotionConfig", void 0);
        var N = I = $([Object(p.Component)({
            data: function () {
                return {speedPng: C.a, thunderPng: E.a, superPng: z.a}
            }
        })], I), A = o(72), V = Object(A.a)(N, (function () {
            var e = this, t = e.$createElement, o = e._self._c || t;
            return e.showPromotion ? o("div", {
                directives: [{
                    name: "observer",
                    rawName: "v-observer.once",
                    value: e.statShowPromotion,
                    expression: "statShowPromotion",
                    modifiers: {once: !0}
                }], staticClass: "xly-transport-plugin"
            }, [o("div", {staticClass: "xly-transport-plugin__image"}, [o("img", {
                attrs: {
                    src: "downloadTask" === e.type ? e.speedPng : e.superPng,
                    alt: "会员加速"
                }
            })]), e._v(" "), o("div", {staticClass: "xly-transport-plugin__bar"}, [o("p", [e._v(e._s(e.$sget(e.promotionConfig, e.type, "xgt_words", "text") || ("downloadTask" === e.type ? "会员享极速下载，" : "超会享极速云添加, ") + "预计速度提升10倍"))]), e._v(" "), o("td-button", {
                attrs: {size: "small"},
                on: {click: e.openVip}
            }, [e._v("\n      " + e._s(e.promotionButton) + "\n    ")])], 1), e._v(" "), o("i", {
                staticClass: "td-icon-close",
                attrs: {title: "关闭"},
                on: {
                    click: function (t) {
                        return t.stopPropagation(), e.clickPromotionClose(t)
                    }, dblclick: function (e) {
                        e.stopPropagation()
                    }
                }
            })]) : e._e()
        }), [], !1, null, null, null).exports, B = o(1416), L = o.n(B), M = o(168), F = o(115), q = o(3);

        function G(e) {
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
                var o, n = Object(s.a)(e);
                if (t) {
                    var r = Object(s.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(c.a)(this, o)
            }
        }

        var Y = function (e, t, o, n) {
            var r, i = arguments.length, l = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(d.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (l = (i < 3 ? r(l) : i > 3 ? r(t, o, l) : r(t, o)) || l);
            return i > 3 && l && Object.defineProperty(t, o, l), l
        }, H = function (e, t, o, n) {
            return new (o || (o = Promise))((function (r, i) {
                function l(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof o ? t : new o((function (e) {
                        e(t)
                    }))).then(l, a)
                }

                c((n = n.apply(e, t || [])).next())
            }))
        }, W = function (e) {
            Object(a.a)(o, e);
            var t = G(o);

            function o() {
                var e;
                return Object(i.a)(this, o), (e = t.apply(this, arguments)).text = "", e.buttonTextList = ["开通会员", "开通超会"], e.buttonText = "", e.remainTimes = 0, e
            }

            return Object(l.a)(o, [{
                key: "mounted", value: function () {
                    try {
                        this.judgeIsShow()
                    } catch (e) {
                        console.error("读取 cloudAddNumLimit 配置失败", e)
                    }
                }
            }, {
                key: "judgeIsShow", value: function () {
                    if (this.isShowCloudAddNumLimitBanner) {
                        var e = (new Intl.DateTimeFormat).format(Date.now()),
                            t = window.localStorage.getItem("cloudAddNumLimit".concat(this.userId)),
                            o = JSON.parse(t || "{}")[e];
                        this.remainTimes = void 0 === o ? this.cloudAddGlobalConfig.cloudAddNumLimitConfig.xgt_times : o, Object(_.callRemote)(q.d, "IpcUrlTaskAssign", {isShowCloudAddNumLimitBanner: this.remainTimes > 0})
                    }
                }
            }, {
                key: "statShowBanner", value: function () {
                    this.stat("transport_sim_cloud_tasks_show")
                }
            }, {
                key: "openVip", value: function () {
                    var e, t = "v_pc_xl11_hytq_ts_sim_cloud_taks", o = "";
                    this.buttonText === this.buttonTextList[0] ? e = "open_vip" : (e = "open_super", o = "&default_tab=supervip"), this.stat("transport_sim_cloud_tasks_click", {
                        aidfrom: e,
                        click_id: e,
                        referfrom: t
                    });
                    var n = "referfrom=".concat(t, "&aidfrom=").concat(e).concat(o),
                        r = "".concat("https://pay.xunlei.com/pay.html", "?").concat(n);
                    Object(_.callRemote)("vip-download-webview", "OpenPayVipUrl", r), this.close()
                }
            }, {
                key: "close", value: function () {
                    Object(_.callRemote)(q.d, "IpcUrlTaskAssign", {isShowCloudAddNumLimitBanner: !1});
                    var e = (new Intl.DateTimeFormat).format(Date.now());
                    window.localStorage.setItem("cloudAddNumLimit".concat(this.userId), JSON.stringify(Object(r.a)({}, e, this.remainTimes - 1))), this.$eventTrack("cslist_tab_xht_click", {
                        vip_type: this.$store.getters["users/curVipType"],
                        tab: "cloud_add",
                        xht_type: "fast_add",
                        clickid: "close"
                    }, "xlx_vip_event")
                }
            }, {
                key: "stat", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return H(this, void 0, void 0, regeneratorRuntime.mark((function o() {
                        var n, r, i;
                        return regeneratorRuntime.wrap((function (o) {
                            for (; ;) switch (o.prev = o.next) {
                                case 0:
                                    return n = this.urlTasks[0], o.next = 3, Object(y.readCacheClientInfo)("tpPeerId", "GetTpPeerId");
                                case 3:
                                    r = o.sent, i = Object.assign({
                                        is_login: this.isLogin ? 1 : 0,
                                        is_vip: this.isVip ? 1 : 0,
                                        vip_type: this.curVipType,
                                        taskid: n.id,
                                        wait_nums: this.runningTaskNum,
                                        plugin_version: F.version,
                                        area: "xgt",
                                        cpeerid: r
                                    }, t), this.$eventTrack(e, i, "xlx_vip_event");
                                case 6:
                                case"end":
                                    return o.stop()
                            }
                        }), o, this)
                    })))
                }
            }, {
                key: "showBanner", get: function () {
                    return this.isShowCloudAddNumLimitBanner && this.isRunningGreatThan
                }
            }, {
                key: "userId", get: function () {
                    return this.$store.state.users.curUser.userId
                }
            }, {
                key: "isRunningGreatThan", get: function () {
                    return this.isVip ? !this.isSuperV && this.runningTaskNum > this.cloudAddGlobalConfig.cloudAddNumLimitConfig.vip_tasks : this.runningTaskNum > this.cloudAddGlobalConfig.cloudAddNumLimitConfig.normal_tasks
                }
            }, {
                key: "img", get: function () {
                    return this.isVip ? this.isSuperV ? "" : (this.text = this.cloudAddGlobalConfig.cloudAddNumLimitConfig.svip_words, this.buttonText = this.buttonTextList[1], this.superPng) : (this.text = this.cloudAddGlobalConfig.cloudAddNumLimitConfig.vip_words, this.buttonText = this.buttonTextList[0], this.vipPng)
                }
            }]), o
        }(p.Vue), J = W = Y([Object(p.Component)({
            data: function () {
                return {vipPng: L.a, superPng: z.a}
            },
            computed: Object.assign(Object.assign(Object.assign({}, Object(M.e)("url-task-list", {
                cloudAddGlobalConfig: "cloudAddGlobalConfig",
                isShowCloudAddNumLimitBanner: "isShowCloudAddNumLimitBanner"
            })), Object(M.c)("url-task-list", {
                urlTasks: "urlTasks",
                runningTaskNum: "runningTaskNum"
            })), Object(M.c)("users", {
                isVip: "isVip",
                isSuperV: "isSuperV",
                isLogin: "isLogin",
                curVipType: "curVipType"
            }))
        })], W), X = Object(A.a)(J, (function () {
            var e = this, t = e.$createElement, o = e._self._c || t;
            return o("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showBanner && e.img && e.text,
                    expression: "showBanner && img && text"
                }, {name: "observer", rawName: "v-observer", value: e.statShowBanner, expression: "statShowBanner"}],
                staticClass: "xly-transport-plugin"
            }, [o("div", {staticClass: "xly-transport-plugin__image"}, [o("img", {
                attrs: {
                    src: e.img,
                    alt: "会员加速"
                }
            })]), e._v(" "), o("div", {staticClass: "xly-transport-plugin__bar"}, [o("p", [e._v(e._s(e.text))]), e._v(" "), o("td-button", {
                class: {"is-super": e.buttonText === e.buttonTextList[1]},
                attrs: {size: "small"},
                on: {click: e.openVip}
            }, [e._v("\n      " + e._s(e.buttonText) + "\n    ")])], 1), e._v(" "), o("i", {
                staticClass: "td-icon-close",
                attrs: {title: "关闭"},
                on: {
                    click: function (t) {
                        return t.stopPropagation(), e.close(t)
                    }, dblclick: function (e) {
                        e.stopPropagation()
                    }
                }
            })])
        }), [], !1, null, null, null).exports, K = o(284);

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
                var o, n = Object(s.a)(e);
                if (t) {
                    var r = Object(s.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(c.a)(this, o)
            }
        }

        var Z = function (e, t, o, n) {
            var r, i = arguments.length, l = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(d.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (l = (i < 3 ? r(l) : i > 3 ? r(t, o, l) : r(t, o)) || l);
            return i > 3 && l && Object.defineProperty(t, o, l), l
        }, ee = function (e, t, o, n) {
            return new (o || (o = Promise))((function (r, i) {
                function l(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value, t instanceof o ? t : new o((function (e) {
                        e(t)
                    }))).then(l, a)
                }

                c((n = n.apply(e, t || [])).next())
            }))
        }, te = function (e) {
            Object(a.a)(o, e);
            var t = Q(o);

            function o() {
                var e, n;
                return Object(i.a)(this, o), (n = t.apply(this, arguments)).allSurportTaskType = Object.freeze({
                    urlTask: {
                        icon: "icon_link",
                        name: "file_name",
                        size: "file_size",
                        status: "phase",
                        message: "message",
                        progress: "progress",
                        completeTime: "updated_time"
                    },
                    localTask: {
                        icon: "icon",
                        name: "name",
                        size: "size",
                        progress: "progress",
                        speed: "uploadNetSpeed",
                        status: "uploadStatus",
                        completeTime: "completeTime",
                        errMsg: "errMsg"
                    },
                    downloadTask: {
                        icon: "icon",
                        name: "taskName",
                        size: "fileSize",
                        speed: "downloadSpeed",
                        status: "taskStatus",
                        completeTime: "completionTime",
                        progress: "progress"
                    }
                }), n.isShowTooltip = !1, n.showTooltipPosition = "top", n.taskStatus = Object.freeze(x.TaskStatus), n.buttonMap = Object.freeze({
                    urlTask: {
                        PHASE_TYPE_PENDING: [{
                            icon: "xly-icon-refresh-1",
                            click: n.refreshUrlTask,
                            title: "刷新"
                        }, {icon: "xly-icon-clear", click: n.deleteUrlTask, title: "取消任务"}],
                        PHASE_TYPE_RUNNING: [{
                            icon: "xly-icon-refresh-1",
                            click: n.refreshUrlTask,
                            title: "刷新"
                        }, {icon: "xly-icon-clear", click: n.deleteUrlTask, title: "取消任务"}],
                        PHASE_TYPE_ERROR: [{icon: "", click: n.retryUrlTask, title: "重试"}, {
                            icon: "xly-icon-clear",
                            click: n.deleteUrlTask,
                            title: "删除记录"
                        }],
                        PHASE_TYPE_COMPLETE: [{
                            icon: "xly-icon-open",
                            click: n.openUrlTask,
                            title: "打开云盘目录"
                        }, {icon: "xly-icon-clear-1", click: n.deleteUrlTask, title: "删除记录"}],
                        status: [{icon: "xly-icon-open", click: n.openUrlTask, title: "打开云盘目录"}],
                        status_fail: []
                    },
                    localTask: {
                        pending: [{
                            icon: "xly-icon-pause",
                            click: n.pauseUpload,
                            title: "暂停"
                        }, {icon: "xly-icon-clear", click: n.cancelUpload, title: "删除上传任务"}],
                        prepare: [{icon: "xly-icon-pause", click: n.pauseUpload, title: "暂停"}, {
                            icon: "xly-icon-clear",
                            click: n.cancelUpload,
                            title: "删除上传任务"
                        }],
                        uploading: [{
                            icon: "xly-icon-pause",
                            click: n.pauseUpload,
                            title: "暂停"
                        }, {icon: "xly-icon-clear", click: n.cancelUpload, title: "删除上传任务"}],
                        pause: [{
                            icon: "xly-icon-upload",
                            click: n.resumeUpload,
                            title: "开始上传"
                        }, {icon: "xly-icon-clear", click: n.cancelUpload, title: "删除上传任务"}],
                        fail: [{icon: "xly-icon-retry", click: n.retryUpload, title: "重试"}, {
                            icon: "xly-icon-clear",
                            click: n.cancelUpload,
                            title: "删除记录"
                        }],
                        complete: [{
                            icon: "xly-icon-open",
                            click: n.openDirectory,
                            title: "打开云盘目录"
                        }, {icon: "xly-icon-clear-1", click: n.deleteUpload, title: "删除记录"}],
                        file_not_exist: [{icon: "xly-icon-clear", click: n.deleteUpload, title: "删除记录"}]
                    },
                    downloadTask: (e = {}, Object(r.a)(e, x.TaskStatus.Unkown, [{
                        icon: "xly-icon-retry",
                        click: n.resumeDownload,
                        title: "重试"
                    }, {
                        icon: "xly-icon-clear",
                        click: n.cancelDownload,
                        title: ""
                    }]), Object(r.a)(e, x.TaskStatus.StartWaiting, [{
                        icon: "xly-icon-pause",
                        click: n.pauseDownload,
                        title: "暂停"
                    }, {
                        icon: "xly-icon-clear",
                        click: n.cancelDownload,
                        title: "取消下载"
                    }]), Object(r.a)(e, x.TaskStatus.StartPending, [{
                        icon: "xly-icon-pause",
                        click: n.pauseDownload,
                        title: "暂停"
                    }, {
                        icon: "xly-icon-clear",
                        click: n.cancelDownload,
                        title: "取消下载"
                    }]), Object(r.a)(e, x.TaskStatus.Started, [{
                        icon: "xly-icon-pause",
                        click: n.pauseDownload,
                        title: "暂停"
                    }, {
                        icon: "xly-icon-clear",
                        click: n.cancelDownload,
                        title: "取消下载"
                    }]), Object(r.a)(e, x.TaskStatus.StopPending, [{
                        icon: "xly-icon-download",
                        click: n.startDownload,
                        title: "开始下载"
                    }, {
                        icon: "xly-icon-clear",
                        click: n.cancelDownload,
                        title: "取消下载"
                    }]), Object(r.a)(e, x.TaskStatus.Stopped, [{
                        icon: "xly-icon-download",
                        click: n.startDownload,
                        title: "开始下载"
                    }, {
                        icon: "xly-icon-clear",
                        click: n.cancelDownload,
                        title: "取消下载"
                    }]), Object(r.a)(e, x.TaskStatus.Succeeded, [{
                        icon: "xly-icon-open",
                        click: n.openDownload,
                        title: "打开文件夹"
                    }, {
                        icon: "xly-icon-clear-1",
                        click: n.deleteDownload,
                        title: "删除下载记录"
                    }]), Object(r.a)(e, x.TaskStatus.Failed, [{
                        icon: "xly-icon-retry",
                        click: n.resumeDownload,
                        title: "重试"
                    }, {
                        icon: "xly-icon-clear",
                        click: n.cancelDownload,
                        title: "删除下载记录"
                    }]), Object(r.a)(e, x.TaskStatus.Seeding, [{
                        icon: "xly-icon-open",
                        click: n.openDownload,
                        title: "打开文件夹"
                    }, {
                        icon: "xly-icon-clear-1",
                        click: n.deleteDownload,
                        title: "删除下载记录"
                    }]), Object(r.a)(e, "file_not_exist", [{
                        icon: "xly-icon-clear",
                        click: n.deleteDownload,
                        title: "删除下载记录"
                    }]), e)
                }), n.isChosen = !1, n
            }

            return Object(l.a)(o, [{
                key: "getProperty", value: function (e, t) {
                    return this.$sget(this.normalizedTask, this.$sget(this.allSurportTaskType, this.type, e)) || t
                }
            }, {
                key: "openDirectory", value: function () {
                    return ee(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t, o, r, i;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return this.uploadStat("open_content"), e.next = 3, Object(_.redirectCurrentDirectoryById)(this.task.fileId, !0);
                                case 3:
                                    t = e.sent, o = Object(n.a)(t, 2), r = o[0], i = o[1], r ? 0 === i.length && (this.$store.dispatch("local-upload/transferUpdate", {
                                        id: this.task.id,
                                        driveFileExist: u.fileStatus.delete
                                    }), this.$message({
                                        id: "handleClickContextMenuItem",
                                        unique: !0,
                                        position: "middle",
                                        type: "error",
                                        message: "云盘文件已删除"
                                    })) : this.$message({
                                        id: "handleClickContextMenuItem",
                                        unique: !0,
                                        position: "middle",
                                        type: "error",
                                        message: "打开云盘目录失败"
                                    });
                                case 8:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "pauseUpload", value: function () {
                    this.uploadStat("pause"), this.$store.dispatch("local-upload/transferPause", this.task)
                }
            }, {
                key: "resumeUpload", value: function () {
                    this.uploadStat("retry"), this.$store.dispatch("local-upload/transferResume", this.task)
                }
            }, {
                key: "deleteUpload", value: function () {
                    this.uploadStat("delete"), this.$store.dispatch("local-upload/transferDelete", this.task)
                }
            }, {
                key: "cancelUpload", value: function () {
                    return ee(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t = this;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    this.uploadStat("cancel"), Object(g.a)(h.a)({
                                        title: "删除",
                                        content: "确定要删除所选任务吗",
                                        danger: !0,
                                        confirmText: "删除"
                                    }).then((function () {
                                        return ee(t, void 0, void 0, regeneratorRuntime.mark((function e() {
                                            return regeneratorRuntime.wrap((function (e) {
                                                for (; ;) switch (e.prev = e.next) {
                                                    case 0:
                                                        this.$store.dispatch("local-upload/transferCancel", [this.task.id]);
                                                    case 1:
                                                    case"end":
                                                        return e.stop()
                                                }
                                            }), e, this)
                                        })))
                                    })).catch((function () {
                                    }));
                                case 2:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "retryUpload", value: function (e) {
                    this.uploadStat("retry"), e.target.classList.add("is-rotate"), this.$store.dispatch("local-upload/transferRetry", this.task).finally((function () {
                        setTimeout((function () {
                            e.target.classList.remove("is-rotate")
                        }), 300)
                    }))
                }
            }, {
                key: "refreshUrlTask", value: function (e) {
                    var t = this;
                    this.cloudAddStat("refresh"), e.target.classList.add("is-rotate"), this.$store.dispatch("url-task-list/ipcGetUrlTasks", {refresh: !0}).then((function () {
                        t.$message({
                            id: "refreshUrlTask",
                            unique: !0,
                            position: "middle",
                            type: "success",
                            message: "刷新成功"
                        })
                    })).catch((function () {
                        t.$message.error("接口异常")
                    })).finally((function () {
                        e.target.classList.remove("is-rotate")
                    }))
                }
            }, {
                key: "openUrlTask", value: function () {
                    return ee(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t, o, r, i;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return this.cloudAddStat("open_content"), e.next = 3, Object(_.callServer)("SelectNav", _.NavViewID.Cloud);
                                case 3:
                                    return e.next = 5, Object(_.redirectCurrentDirectoryById)(this.task.reference_resource.id, !0);
                                case 5:
                                    t = e.sent, o = Object(n.a)(t, 2), r = o[0], i = o[1], r ? 0 === i.length && this.$message({
                                        id: "openUrlTask",
                                        unique: !0,
                                        position: "middle",
                                        type: "error",
                                        message: "云盘文件已删除"
                                    }) : this.$message({
                                        id: "openUrlTask",
                                        unique: !0,
                                        position: "middle",
                                        type: "error",
                                        message: "打开云盘目录失败"
                                    });
                                case 10:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "retryUrlTask", value: function () {
                }
            }, {
                key: "deleteUrlTask", value: function () {
                    var e = this;
                    this.cloudAddStat("delete"), "PHASE_TYPE_COMPLETE" !== this.task.phase ? Object(g.a)(h.a)({
                        title: "删除",
                        content: "确定要删除所选任务吗",
                        danger: !0,
                        confirmText: "删除"
                    }).then((function () {
                        e.$store.dispatch("url-task-list/ipcRemoveUrlTasks", [e.task.id])
                    })).catch((function () {
                    })) : this.$store.dispatch("url-task-list/ipcRemoveUrlTasks", [this.task.id]).catch((function () {
                        e.$message.success("接口异常")
                    }))
                }
            }, {
                key: "pauseDownload", value: function () {
                    this.retrievalStat("pause"), this.$store.dispatch("retrieval-list/batchStop", {
                        taskIds: [this.task.taskId],
                        stopReason: k.TaskStopReason.Button
                    })
                }
            }, {
                key: "cancelDownload", value: function () {
                    var e = this;
                    this.retrievalStat("cancel"), Object(g.a)(m.a)({
                        title: "删除",
                        isShowDeleteLocal: !1,
                        danger: !0,
                        confirmText: "删除"
                    }).then((function (t) {
                        t.picked;
                        e.$store.dispatch("retrieval-list/batchDelete", {taskIds: [e.task.taskId], deleteFile: !0})
                    })).catch((function () {
                    }))
                }
            }, {
                key: "deleteDownload", value: function () {
                    this.retrievalStat("delete"), this.$store.dispatch("retrieval-list/batchDelete", {
                        taskIds: [this.task.taskId],
                        deleteFile: !1
                    })
                }
            }, {
                key: "resumeDownload", value: function (e) {
                    this.retrievalStat("retry"), e.target.classList.add("is-rotate"), this.$store.dispatch("retrieval-list/resume", [this.task.taskId]).finally((function () {
                        setTimeout((function () {
                            e.target.classList.remove("is-rotate")
                        }), 300)
                    }))
                }
            }, {
                key: "startDownload", value: function () {
                    this.retrievalStat("start"), this.$store.dispatch("retrieval-list/resume", [this.task.taskId])
                }
            }, {
                key: "openDownload", value: function () {
                    var e = this;
                    this.retrievalStat("open_content");
                    var t, o = this.task, n = o.savePath, r = o.taskName, i = o.taskId, l = o.taskType;
                    t = l === k.TaskType.Group ? n : S.a.join(n, r), w.stat(t, (function (o, n) {
                        return ee(e, void 0, void 0, regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (o) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 3, j.a.electron.shell.__resolve();
                                    case 3:
                                        e.sent.showItemInFolder(t), e.next = 9;
                                        break;
                                    case 7:
                                        this.$store.dispatch("retrieval-list/setFileExtras", {
                                            taskId: i,
                                            key: "fileExist",
                                            val: u.fileStatus.delete
                                        }), this.$message({
                                            id: "openDownload",
                                            unique: !0,
                                            position: "middle",
                                            type: "error",
                                            message: "文件不存在"
                                        });
                                    case 9:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, this)
                        })))
                    }))
                }
            }, {
                key: "uploadStat", value: function (e) {
                    this.$eventTrack("transmission_list_operation_click", {tab: "local_upload", click_id: e})
                }
            }, {
                key: "cloudAddStat", value: function (e) {
                    this.$eventTrack("transmission_list_operation_click", {tab: "yun_add", click_id: e})
                }
            }, {
                key: "retrievalStat", value: function (e) {
                    this.$eventTrack("transmission_list_operation_click", {tab: "getback", click_id: e})
                }
            }, {
                key: "showTooltip", value: function (e) {
                    var t = this;
                    this.isShowTooltip = !0, this.$nextTick((function () {
                        var e = t.$refs.audit.getBoundingClientRect().top,
                            o = document.getElementById("tab_title").firstElementChild.getBoundingClientRect().bottom;
                        t.showTooltipPosition = e < o ? "bottom" : "top"
                    }))
                }
            }, {
                key: "hideTooltip", value: function () {
                    this.isShowTooltip = !1, this.showTooltipPosition = "top"
                }
            }, {
                key: "close", value: function () {
                    return ee(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, j.a.getCurrentWindow().__resolve();
                                case 2:
                                    e.sent.close();
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }
            }, {
                key: "icon", get: function () {
                    return this.getProperty("icon")
                }
            }, {
                key: "isSuperV", get: function () {
                    return this.$store.getters["users/isSuperV"]
                }
            }, {
                key: "isVip", get: function () {
                    return this.$store.getters["users/isVip"]
                }
            }, {
                key: "topSpeedCloudConfig", get: function () {
                    return this.cloudAddGlobalConfig.topSpeedCloudConfig
                }
            }, {
                key: "normalizedTask", get: function () {
                    var e, t;
                    "downloadTask" === this.type && (t = this.task.fileSize ? (100 * this.task.receiveSize / this.task.fileSize).toFixed(0) : 0, e = Object.assign({}, this.task, {progress: t}));
                    return e || this.task
                }
            }, {
                key: "status", get: function () {
                    return this.getProperty("status")
                }
            }, {
                key: "fileExtension", get: function () {
                    return Object(y.getFileExtension)(this.getProperty("name")).slice(1)
                }
            }, {
                key: "iconClass", get: function () {
                    var e;
                    return (null === (e = this.task) || void 0 === e ? void 0 : e.taskType) === k.TaskType.Group ? "xly-type-group" : "xly-type-".concat(v.default[this.fileExtension])
                }
            }, {
                key: "completeTime", get: function () {
                    return f()(this.getProperty("completeTime")).format("YYYY-MM-DD HH:mm")
                }
            }, {
                key: "size", get: function () {
                    return Object(y.formatSize2)(this.getProperty("size") || 0)
                }
            }, {
                key: "progress", get: function () {
                    return this.getProperty("progress")
                }
            }, {
                key: "unfinishSize", get: function () {
                    return (this.getProperty("size") || 0) * (100 - this.progress) / 100
                }
            }, {
                key: "durationTime", get: function () {
                    return this.speedNum > 0 ? Object(y.getDurationTime)(~~(Number(this.getProperty("size")) * (100 - Number(this.progress)) / 100 / this.speedNum)) : ""
                }
            }, {
                key: "finishSize", get: function () {
                    return Object(y.formatSize2)((this.getProperty("size") || 0) * this.progress / 100)
                }
            }, {
                key: "speedNum", get: function () {
                    return this.getProperty("speed")
                }
            }, {
                key: "speed", get: function () {
                    return "".concat(Object(y.formatSize2)(this.speedNum || 0), "/s")
                }
            }, {
                key: "isShowProgress", get: function () {
                    return !("localTask" !== this.type || !["pause", "uploading", "prepare", "pending"].includes(this.status)) || (!("downloadTask" !== this.type || ![x.TaskStatus.Started, x.TaskStatus.Stopped, x.TaskStatus.StopPending, x.TaskStatus.StartWaiting, x.TaskStatus.StartPending].includes(this.status)) || !("urlTask" !== this.type || !["PHASE_TYPE_PENDING", "PHASE_TYPE_RUNNING"].includes(this.status) || !this.topSpeedCloudConfig))
                }
            }, {
                key: "runningUrlTask", get: function () {
                    return this.$store.getters["url-task-list/runningTaskNum"]
                }
            }, {
                key: "runningDownloadTask", get: function () {
                    return this.$store.getters["retrieval-list/runningTaskNum"]
                }
            }, {
                key: "button", get: function () {
                    return "downloadTask" === this.type && this.task.fileExist === u.fileStatus.delete || "localTask" === this.type && this.task.localFileExist === u.fileStatus.delete && this.task.driveFileExist === u.fileStatus.delete ? this.$sget(this.buttonMap, this.type, "file_not_exist") : "urlTask" === this.type && "drive#status" === this.task.kind ? "PHASE_TYPE_COMPLETE" !== this.task.phase ? this.$sget(this.buttonMap, this.type, "status_fail") : this.$sget(this.buttonMap, this.type, "status") : this.$sget(this.buttonMap, this.type, this.getProperty("status"))
                }
            }]), o
        }(p.Vue);
        Z([Object(p.Prop)()], te.prototype, "task", void 0), Z([Object(p.Prop)()], te.prototype, "idx", void 0), Z([Object(p.Prop)()], te.prototype, "type", void 0), Z([Object(p.Prop)()], te.prototype, "promotionConfig", void 0), Z([Object(p.Prop)({
            type: Boolean,
            default: !1
        })], te.prototype, "showPromotion", void 0), Z([Object(K.Debounce)(300, {
            leading: !0,
            trailing: !1
        }), K.Bind], te.prototype, "openDirectory", null), Z([Object(K.Debounce)(300, {
            leading: !0,
            trailing: !1
        }), K.Bind], te.prototype, "pauseUpload", null), Z([Object(K.Debounce)(300, {
            leading: !0,
            trailing: !1
        }), K.Bind], te.prototype, "resumeUpload", null), Z([Object(K.Debounce)(300, {
            leading: !0,
            trailing: !1
        }), K.Bind], te.prototype, "deleteUpload", null), Z([Object(K.Debounce)(300, {
            leading: !0,
            trailing: !1
        }), K.Bind], te.prototype, "cancelUpload", null), Z([Object(K.Debounce)(300, {
            leading: !0,
            trailing: !1
        }), K.Bind], te.prototype, "retryUpload", null), Z([Object(K.Debounce)(300, {
            leading: !0,
            trailing: !1
        }), K.Bind], te.prototype, "refreshUrlTask", null), Z([Object(K.Debounce)(300, {
            leading: !0,
            trailing: !1
        }), K.Bind], te.prototype, "openUrlTask", null), Z([Object(K.Debounce)(300, {
            leading: !0,
            trailing: !1
        }), K.Bind], te.prototype, "deleteUrlTask", null), Z([Object(K.Debounce)(300, {
            leading: !0,
            trailing: !1
        }), K.Bind], te.prototype, "pauseDownload", null), Z([Object(K.Debounce)(300, {
            leading: !0,
            trailing: !1
        }), K.Bind], te.prototype, "cancelDownload", null), Z([Object(K.Debounce)(300, {
            leading: !0,
            trailing: !1
        }), K.Bind], te.prototype, "deleteDownload", null), Z([Object(K.Debounce)(300, {
            leading: !0,
            trailing: !1
        }), K.Bind], te.prototype, "resumeDownload", null), Z([Object(K.Debounce)(300, {
            leading: !0,
            trailing: !1
        }), K.Bind], te.prototype, "startDownload", null), Z([Object(K.Debounce)(300, {
            leading: !0,
            trailing: !1
        }), K.Bind], te.prototype, "openDownload", null);
        var oe = te = Z([Object(p.Component)({
            name: "TaskItem",
            components: {TrashConfirmDialog: h.a, TopSpeedCloudAddBanner: V, CloudAddNumLimitBanner: X},
            data: function () {
                return {fileStatus: u.fileStatus, speedPng: C.a, thunderPng: E.a, superPng: z.a}
            },
            computed: Object.assign({}, Object(M.e)("url-task-list", {cloudAddGlobalConfig: "cloudAddGlobalConfig"}))
        })], te), ne = Object(A.a)(oe, (function () {
            var e = this, t = e.$createElement, o = e._self._c || t;
            return o("li", [o("td-media", [o("i", {
                staticClass: "xly-icon-type",
                class: !e.icon && e.iconClass,
                style: e.icon && {background: "url(" + e.icon + ") 0% 0% / cover no-repeat"},
                attrs: {slot: "media"},
                slot: "media"
            }), e._v(" "), o("p", {
                staticClass: "xly-file-name",
                attrs: {title: e.getProperty("name")}
            }, [e._v("\n      " + e._s(e.getProperty("name")) + "\n    ")]), e._v(" "), "urlTask" === e.type ? o("div", {staticClass: "xly-file-info"}, ["PHASE_TYPE_ERROR" === e.getProperty("status") ? o("span", {
                staticClass: "xly-file-error ",
                attrs: {href: "#"}
            }, [e._v("\n        " + e._s("云盘文件已删除" === e.getProperty("message") ? "云盘文件已删除" : "添加失败") + "\n        "), "云盘文件已删除" !== e.getProperty("message") ? o("td-tooltip", {
                attrs: {
                    trigger: "hover",
                    placement: e.showTooltipPosition,
                    visible: e.isShowTooltip
                }
            }, [o("span", {
                ref: "audit",
                attrs: {slot: "content"},
                slot: "content"
            }, [e._v(e._s(e.getProperty("message")))]), e._v(" "), o("i", {
                staticClass: "xly-icon-note",
                on: {mouseenter: e.showTooltip, mouseleave: e.hideTooltip}
            })]) : e._e()], 1) : e._e(), e._v(" "), "PHASE_TYPE_ERROR" !== e.getProperty("status") ? o("p", {staticClass: "xly-file-size"}, [o("span", {staticClass: "xly-file-size__total"}, [e._v(e._s(e.size))])]) : e._e(), e._v(" "), "PHASE_TYPE_COMPLETE" === e.getProperty("status") ? o("p", {staticClass: "xly-file-text"}, [e._v("\n        " + e._s(e.completeTime) + "\n      ")]) : e._e(), e._v(" "), "PHASE_TYPE_PENDING" === e.getProperty("status") ? o("p", {staticClass: "xly-file-text xly-file-text--right"}, [e._v("\n        等待添加 0%"), o("i", {staticClass: "xly-point"})]) : e._e(), e._v(" "), "PHASE_TYPE_RUNNING" === e.getProperty("status") ? o("p", {
                staticClass: "xly-file-text",
                class: {"xly-file-text--vip": e.isSuperV, "xly-file-text--right": e.topSpeedCloudConfig}
            }, [e.isSuperV ? [o("img", {attrs: {src: e.thunderPng}}), e._v(" 正在极速云添加 " + e._s(e.getProperty("progress") || 0) + "%\n        ")] : [e._v("\n          正在云添加  " + e._s(e.getProperty("progress") || 0) + "%"), o("i", {staticClass: "xly-point"})]], 2) : e._e(), e._v(" "), "PHASE_TYPE_COMPLETE" === e.getProperty("status") ? o("p", {staticClass: "xly-file-text xly-file-text--right"}, [e._v("\n        " + e._s(e.getProperty("message")) + "\n        "), ["STATUS_SENSITIVE_RESOURCE", "STATUS_SENSITIVE_WORD", "STATUS_UNKNOW"].includes(e.$sget(e.task, "reference_resource", "audit", "status")) ? o("td-tooltip", {
                attrs: {
                    placement: e.showTooltipPosition,
                    visible: e.isShowTooltip
                }
            }, ["STATUS_UNKNOW" === e.$sget(e.task, "reference_resource", "audit", "status") ? o("span", {
                ref: "audit",
                attrs: {slot: "content"},
                slot: "content"
            }, [e._v("疑似不良资源，正在审核中..."), o("br"), e._v("24小时内反馈审核结果")]) : o("span", {
                ref: "audit",
                attrs: {slot: "content"},
                slot: "content"
            }, [e._v(e._s(e.$sget(e.task, "reference_resource", "audit", "title")))]), e._v(" "), o("i", {
                class: {
                    "xly-icon-help": "STATUS_UNKNOW" === e.$sget(e.task, "reference_resource", "audit", "status"),
                    "xly-icon-note": ["STATUS_SENSITIVE_RESOURCE", "STATUS_SENSITIVE_WORD"].includes(e.$sget(e.task, "reference_resource", "audit", "status"))
                }, on: {mouseenter: e.showTooltip, mouseleave: e.hideTooltip}
            })]) : e._e()], 1) : e._e()]) : e._e(), e._v(" "), "localTask" === e.type ? o("div", {staticClass: "xly-file-info"}, [["fail"].includes(e.status) ? e._e() : o("p", {staticClass: "xly-file-size"}, [o("span", {staticClass: "xly-file-size__finish"}, [e._v(e._s(e.finishSize))]), e._v(" "), ["uploading", "complete"].includes(e.status) ? e._e() : o("span", {staticClass: "xly-file-size__separator"}, [e._v("/")]), e._v(" "), ["uploading", "complete"].includes(e.status) ? e._e() : o("span", {staticClass: "xly-file-size__total"}, [e._v(e._s(e.size))])]), e._v(" "), ["pending"].includes(e.status) ? o("p", {staticClass: "xly-file-normal"}, [e._v("\n        排队中\n      ")]) : e._e(), e._v(" "), ["prepare"].includes(e.status) ? o("p", {staticClass: "xly-file-normal"}, [e._v("\n        获取文件信息\n      ")]) : e._e(), e._v(" "), ["uploading"].includes(e.status) ? o("p", {staticClass: "xly-file-time"}, [e._v("\n        " + e._s(e.durationTime) + "\n      ")]) : e._e(), e._v(" "), ["complete"].includes(e.status) ? o("p", {staticClass: "xly-file-time"}, [e._v("\n        " + e._s(e.completeTime) + "\n      ")]) : e._e(), e._v(" "), ["uploading"].includes(e.status) ? o("div", {staticClass: "xly-file-speed"}, [o("span", {staticClass: "xly-file-speed__total"}, [e._v(e._s(e.speed))])]) : e._e(), e._v(" "), ["complete"].includes(e.status) ? o("p", {staticClass: "xly-file-normal"}, [e._v("\n        " + e._s(e.task.driveFileExist === e.fileStatus.delete && e.task.localFileExist === e.fileStatus.delete ? "文件已删除" : "已存到云盘") + "\n      ")]) : e._e(), e._v(" "), ["fail"].includes(e.status) ? o("span", {staticClass: "xly-file-error"}, [e._v(e._s(e.getProperty("errMsg") || "上传失败"))]) : e._e(), e._v(" "), ["pause"].includes(e.status) ? o("p", {staticClass: "xly-file-normal"}, [e._v("\n        已暂停\n      ")]) : e._e()]) : e._e(), e._v(" "), "downloadTask" === e.type ? o("div", {staticClass: "xly-file-info"}, [o("p", {staticClass: "xly-file-size"}, [o("span", {staticClass: "xly-file-size__finish"}, [e._v(e._s(e.finishSize))]), e._v(" "), [e.taskStatus.StartPending, e.taskStatus.Started, e.taskStatus.Succeeded].includes(e.status) ? e._e() : o("span", {staticClass: "xly-file-size__separator"}, [e._v("/")]), e._v(" "), [e.taskStatus.StartPending, e.taskStatus.Started, e.taskStatus.Succeeded].includes(e.status) ? e._e() : o("span", {staticClass: "xly-file-size__total"}, [e._v(e._s(e.size))])]), e._v(" "), [e.taskStatus.StartPending, e.taskStatus.Started].includes(e.status) ? o("p", {staticClass: "xly-file-time"}, [e._v("\n        " + e._s(e.durationTime) + "\n      ")]) : e._e(), e._v(" "), [e.taskStatus.Succeeded, e.taskStatus.Seeding].includes(e.status) ? o("p", {staticClass: "xly-file-time"}, [e._v("\n        " + e._s(e.completeTime) + "\n      ")]) : e._e(), e._v(" "), [e.taskStatus.StartPending, e.taskStatus.Started].includes(e.status) ? o("div", {staticClass: "xly-file-speed"}, [o("span", {staticClass: "xly-file-speed__total"}, [e._v(e._s(e.speed))])]) : e._e(), e._v(" "), [e.taskStatus.Succeeded, e.taskStatus.Seeding].includes(e.status) ? o("p", {staticClass: "xly-file-normal"}, [e._v("\n        " + e._s(e.task.fileExist === e.fileStatus.delete ? "文件已移除" : "下载完成") + "\n      ")]) : e._e(), e._v(" "), [e.taskStatus.StartWaiting].includes(e.status) ? o("p", {staticClass: "xly-file-normal"}, [e._v("\n        排队中\n      ")]) : e._e(), e._v(" "), [e.taskStatus.Stopped].includes() ? o("p", {staticClass: "xly-file-normal"}, [e._v("\n        已暂停\n      ")]) : e._e(), e._v(" "), [e.taskStatus.Failed, e.taskStatus.Unkown].includes(e.status) ? o("span", {
                staticClass: "xly-file-error xly-file-text--right ",
                attrs: {href: "#"}
            }, [e._v("下载失败")]) : e._e()]) : e._e(), e._v(" "), e.isShowProgress ? o("td-progress", {attrs: {value: e.getProperty("progress")}}) : e._e(), e._v(" "), o("div", {staticClass: "xly-transport-operate"}, [e._l(e.button, (function (t, n) {
                return [o("a", {
                    key: n,
                    staticClass: "xly-transport-operate__button",
                    attrs: {href: "javascript:;", title: e.$sget(t, "title")},
                    on: {
                        click: function (o) {
                            return o.stopPropagation(), (n = o).currentTarget.blur(), void e.$sget(t, "click")(n);
                            var n
                        }, dblclick: function (e) {
                            e.stopPropagation()
                        }
                    }
                }, [o("i", {class: e.$sget(t, "icon")})])]
            }))], 2)], 1), e._v(" "), o("TopSpeedCloudAddBanner", {
                attrs: {
                    type: e.type,
                    "promotion-config": e.promotionConfig
                }
            }), e._v(" "), 0 === e.idx && e.cloudAddGlobalConfig.cloudAddNumLimitConfig.sim_cloud_add_tasks_switch ? o("CloudAddNumLimitBanner") : e._e()], 1)
        }), [], !1, null, null, null);
        t.a = ne.exports
    }, 1409: function (e, t, o) {
        "use strict";
        o(10), o(11), o(4), o(32);
        var n = o(33), r = o(40), i = o(70), l = o(71), a = o(37), c = o(29), s = o(18);
        o(1403), o(1414);

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
                var o, n = Object(a.a)(e);
                if (t) {
                    var r = Object(a.a)(this).constructor;
                    o = Reflect.construct(n, arguments, r)
                } else o = n.apply(this, arguments);
                return Object(l.a)(this, o)
            }
        }

        var p = function (e, t, o, n) {
            var r, i = arguments.length, l = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(c.a)(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (l = (i < 3 ? r(l) : i > 3 ? r(t, o, l) : r(t, o)) || l);
            return i > 3 && l && Object.defineProperty(t, o, l), l
        }, u = function (e) {
            Object(i.a)(o, e);
            var t = d(o);

            function o() {
                var e;
                return Object(n.a)(this, o), (e = t.apply(this, arguments)).visible = !1, e.picked = !1, e
            }

            return Object(r.a)(o, [{
                key: "show", value: function () {
                    this.visible = !0
                }
            }, {
                key: "emit", value: function () {
                    this.visible = !1, this.$destroy(), this.resolve({picked: this.picked})
                }
            }, {
                key: "close", value: function () {
                    this.visible = !1, this.$destroy(), this.reject()
                }
            }]), o
        }(s.Vue);
        p([Object(s.Prop)({})], u.prototype, "resolve", void 0), p([Object(s.Prop)({})], u.prototype, "reject", void 0), p([Object(s.Prop)({default: "确定"})], u.prototype, "confirmText", void 0), p([Object(s.Prop)({})], u.prototype, "title", void 0), p([Object(s.Prop)({default: !0})], u.prototype, "isShowDeleteLocal", void 0), p([Object(s.Prop)({default: !1})], u.prototype, "danger", void 0);
        var y = u = p([Object(s.Component)({})], u), b = o(72), f = Object(b.a)(y, (function () {
            var e = this, t = e.$createElement, o = e._self._c || t;
            return o("td-dialog", {
                attrs: {"custom-class": "xly-dialog-prompt", visible: e.visible},
                on: {
                    "update:visible": function (t) {
                        e.visible = t
                    }, ok: function (t) {
                        e.visible = !1
                    }
                }
            }, [o("h2", {
                attrs: {slot: "header"},
                slot: "header"
            }, [e._v("\n    " + e._s(e.title) + "\n  ")]), e._v(" "), o("p", {staticClass: "xly-dialog-prompt__text"}, [e._v("\n    确定要删除么?\n  ")]), e._v(" "), e.isShowDeleteLocal ? o("td-checkbox", {
                attrs: {label: "pineaple"},
                model: {
                    value: e.picked, callback: function (t) {
                        e.picked = t
                    }, expression: "picked"
                }
            }, [e._v("\n    同时删除本地文件\n  ")]) : e._e(), e._v(" "), o("div", {
                staticClass: "xly-dialog__footer",
                attrs: {slot: "footer"},
                slot: "footer"
            }, [o("div", {staticClass: "xly-dialog__button"}, [o("td-button", {
                attrs: {danger: e.danger},
                on: {click: e.emit}
            }, [e._v("\n        " + e._s(e.confirmText) + "\n      ")]), e._v(" "), o("td-button", {
                staticClass: "td-button--other",
                on: {click: e.close}
            }, [e._v("\n        取消\n      ")])], 1)])], 1)
        }), [], !1, null, null, null);
        t.a = f.exports
    }, 1411: function (e, t, o) {
        (t = o(89)(!1)).push([e.i, '.xly-transport{padding:0;width:434px;height:604px}.xly-transport,.xly-transport .td-dialog__header{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.xly-transport .td-dialog__header{min-height:20px;margin:0 30px;-webkit-app-region:drag}.xly-transport .td-dialog__close{z-index:1}.xly-transport .td-tabs__title{justify-content:center;margin:0 30px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-bottom:0;-webkit-app-region:drag}.xly-transport .td-media{position:relative;padding-right:66px}.xly-transport .td-media__content{margin-left:12px}.xly-transport .td-tabs__item{position:relative;padding-bottom:12px;width:72px;height:30px;margin:0 5px;font-size:14px;-webkit-app-region:no-drag}.xly-transport .td-tabs__item>div{position:relative;display:inline-block}.xly-transport .td-tabs__item.is-active{position:relative;border-bottom:unset}.xly-transport .td-tabs__item.is-active:after{position:absolute;left:50%;bottom:10px;margin-left:-9px;width:18px;height:2px;background:var(--color-primary);content:""}.xly-transport .td-tabs__content{padding-top:0;border-top:1px solid var(--color-border)}.xly-transport .td-tooltip.is-top{bottom:calc(100% + 4px)}.xly-transport .td-tooltip.is-bottom,.xly-transport .td-tooltip.is-top{left:50%;white-space:pre-wrap;color:var(--color-default);transform:translate(-50%)}.xly-transport .td-tooltip.is-bottom{top:calc(100% + 4px)}.xly-transport .td-tooltip .td-poper__arrow{display:none}.xly-transport .xly-file-name{position:relative;max-height:36px;line-height:18px;font-size:13px;-webkit-line-clamp:2;display:-webkit-box;word-break:break-all;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}.xly-transport .td-progress{margin-top:3px;overflow:hidden}.xly-transport .td-progress-bar{height:4px}.xly-transport .td-progress-bar__inner{position:relative;background:var(--color-primary)}.xly-transport .td-progress-bar__inner:before{position:absolute;right:0;width:28px;height:100%;background-image:linear-gradient(90deg,#3f85ff 0,var(--color-light));content:""}.xly-transport i.xly-icon-note{color:var(--color-danger);vertical-align:-1px}.xly-transport i.xly-icon-help{color:var(--color-note);vertical-align:-1px}.xly-transport .td-tooltip{padding:5px 12px}.xly-transport__item{padding:14px 20px 10px 12px;cursor:default;margin-bottom:1px}.xly-transport__item:hover{background:var(--color-item-hover)}.xly-transport__item.is-chosen{background:var(--color-item-active)}.xly-transport__item.is-disabled .xly-icon-type{opacity:.5}.xly-transport__item.is-disabled .xly-file-name{color:var(--color-secondary)}.xly-transport__content{position:relative;margin:0 1px;height:540px;overflow-y:auto}.xly-transport__content::-webkit-scrollbar{width:8px;background:transparent}.xly-transport__content::-webkit-scrollbar:horizontal{height:8px}.xly-transport__content::-webkit-scrollbar-thumb{border-radius:2px;width:6px;background:var(--color-scrollbar)}.xly-transport__content::-webkit-scrollbar-thumb:hover{background:var(--color-scrollbar-hover)}.xly-transport__content::-webkit-scrollbar-corner{background:transparent}.xly-transport__content .xly-netdisk-note{z-index:2}.xly-transport__title{position:relative;display:flex;align-items:center;padding-left:12px;line-height:30px;color:var(--color-auxiliary);background:var(--background-main)}.xly-transport__title-tips{display:flex;align-items:center;margin-left:16px;color:#e8bb71}.xly-transport__title-tips img{margin-right:3px;width:16px}.xly-transport__operate{position:absolute;top:0;right:21px}.xly-transport__empty{position:absolute;top:0;left:0;width:100%;height:calc(100% - 50px);display:flex;justify-content:center;align-items:center;flex-direction:column}.xly-transport__empty p{margin-top:20px;color:var(--color-secondary)}.xly-transport__back{display:flex;align-items:center;padding:0 12px 12px;height:30px;font-size:14px;border-bottom:1px solid var(--color-border);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-app-region:drag;cursor:pointer}.xly-transport__back i{position:relative;top:1px;margin-right:14px;color:var(--color-secondary);-webkit-app-region:no-drag}.xly-transport__back .title{max-width:320px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-app-region:no-drag}.xly-transport__back:hover .title,.xly-transport__back:hover i{color:var(--color-primary)}.xly-transport .xly-file-info{position:relative;display:flex;margin:5px 0 0;font-size:11px;line-height:15px;color:var(--color-secondary);z-index:2}.xly-transport .xly-file-info .xly-file-status{position:absolute;top:0;right:0}.xly-transport .xly-file-info .xly-file-percent{position:absolute;left:128px}.xly-transport .xly-file-info .xly-file-time{position:absolute;left:85px;width:102px;text-align:center}.xly-transport .xly-file-info .xly-file-speed{position:absolute;right:0;display:flex;align-items:center}.xly-transport .xly-file-info .xly-file-speed .xly-file-speed__vip{color:#e9b23e;margin-left:2px}.xly-transport .xly-file-info .xly-file-speed .xly-file-speed__vip.is-super{padding:0 2px;color:#b77020;background:#f3d283;border-radius:2px}.xly-transport .xly-file-info .xly-file-speed .xly-file-speed__note{position:relative;margin-left:3px}.xly-transport .xly-file-info .xly-file-speed .xly-file-speed__note:hover .xly-file-speed__tips{display:block}.xly-transport .xly-file-info .xly-file-speed .xly-file-speed__tips{display:none;position:absolute;top:16px;right:0;padding:0 10px;line-height:30px;color:var(--color-default);background-color:#fff;box-shadow:0 0 10px 0 rgba(26,26,26,.2);border-radius:4px;white-space:nowrap}.xly-transport .xly-file-info .xly-file-speed .xly-file-speed__tips a{margin-left:10px;color:var(--color-primary)}.xly-transport .xly-file-info .xly-file-error{color:var(--color-danger)}.xly-transport .xly-file-info .xly-file-text{margin-left:18px;white-space:nowrap}.xly-transport .xly-file-info .xly-file-text.is-error{color:var(--color-danger)}.xly-transport .xly-file-info .xly-file-text--right{position:absolute;right:0}.xly-transport .xly-file-info .xly-file-text--vip{position:absolute;right:0;display:flex;align-items:center;color:#f1c37b}.xly-transport .xly-file-info .xly-file-text--vip img{margin-right:3px;width:16px}.xly-transport .xly-file-info .xly-file-normal{position:absolute;right:0}.xly-transport.is-vip .td-progress-bar__inner{background-color:#e7bc77}.xly-transport.is-vip .td-progress-bar__inner:before{background-image:linear-gradient(90deg,#e7bc77 1%,#ffe3a6 60%,#e7bc77)}.xly-transport-operate{position:absolute;right:0;top:0;display:flex;align-items:center}.xly-transport-operate__button{display:block;margin-left:20px;color:var(--color-icon)}.xly-transport-operate__button:hover{color:var(--color-primary)}.xly-transport-operate i{display:block;line-height:1;transform-origin:center 8px}.xly-transport-operate .xly-icon-retry{transform-origin:7px 8px}.xly-tab-point{position:absolute;top:4px;right:-8px;width:7px;height:7px;background:var(--color-danger);border-radius:50%}.is-rotate{animation:ani-rotate .7s both}@keyframes ani-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.xly-transport-plugin{position:relative;margin:12px 0;height:24px;display:flex}.xly-transport-plugin__image{width:25px;margin:0 15px 0 4px}.xly-transport-plugin__image img{width:100%}.xly-transport-plugin__bar{height:100%;justify-content:space-between;align-items:center;padding:0 0 0 6px;width:280px;display:flex;color:#1a1a1a;background:#fff8e4;border-radius:4px;box-sizing:border-box}.xly-transport-plugin__bar .td-button{width:64px;color:#916146;background:#fcd68f;border-radius:3px}.xly-transport-plugin__bar .td-button.is-super{color:#fcd68f;background-color:#3d3838}.xly-transport-plugin .td-icon-close{position:absolute;right:0;top:50%;margin-top:-8px;color:var(--color-secondary);cursor:pointer}.xly-transport-plugin .td-icon-close:hover{color:var(--color-primary)}', ""]), e.exports = t
    }, 1412: function (e, t, o) {
        (t = o(89)(!1)).push([e.i, ".xly-netdisk-note{position:relative;display:flex;justify-content:space-between;align-items:center;width:100%;padding:5px 15px;line-height:19px;color:var(--color-icon);background-color:#eaf6ff;box-sizing:border-box}.xly-netdisk-note .xly-netdisk-note__text{flex:1}.xly-netdisk-note .xly-netdisk-note__link{color:var(--color-primary)}.xly-netdisk-note .xly-netdisk-note__link:hover{color:var(--color-hover)}.xly-netdisk-note .xly-netdisk-list__my{color:#000}.xly-netdisk-note .xly-netdisk-list__my:hover{color:var(--color-primary)}.xly-netdisk-note .xly-netdisk-note__side{position:absolute;bottom:5px;right:12px;color:var(--color-primary);cursor:pointer}.xly-netdisk-note .xly-netdisk-note__side:hover{color:var(--color-hover)}.xly-netdisk-note--vip{background:#ffe7a9}.xly-netdisk-note--vip .xly-netdisk-note__text{color:#c27a13}.xly-netdisk-note--agreement{background-color:var(--background-bar)}.xly-netdisk-note--fixed{position:absolute;bottom:0;left:0}.xly-netdisk-note__close{margin-left:12px;opacity:.6;cursor:pointer;transition:opacity .3s}.xly-netdisk-note__close:hover{opacity:1}", ""]), e.exports = t
    }, 1413: function (e, t, o) {
        (t = o(89)(!1)).push([e.i, "body .td-dialog .td-dialog__close:hover{background-color:#ff7b5f}body .td-dialog h2{color:var(--color-title)}body .td-dialog .xly-dialog__footer{position:relative;display:flex;justify-content:flex-end;width:100%}body .td-dialog .xly-dialog__footer .xly-dialog-path__new{width:90px}body .td-dialog .xly-dialog__footer-operate{position:absolute;left:0;display:flex;align-items:center;height:30px}body .td-dialog .xly-dialog__footer-link{color:var(--color-primary)}body .td-dialog .xly-dialog__button{display:flex}body .td-dialog .xly-dialog__button .td-button{width:80px;font-size:12px}body .xly-dialog-site{position:relative;margin-top:15px}body .xly-dialog-site .td-select{margin-top:12px}body .xly-dialog-site .td-select .td-checkbox{margin-left:13px}body .xly-dialog-site .td-select .td-checkbox__label{margin:0 12px}body .xly-dialog-site .td-select .td-select__drop{margin-right:34px}body .xly-dialog-site .xly-select__file{position:absolute;right:8px;color:var(--color-defalut)}body .xly-dialog-site .xly-select__file:hover{color:var(--color-hover)}body .xly-dialog-site .xly-select__size{margin-right:10px;color:var(--color-secondary)}body .xly-dialog-site .xly-select__size.is-warn{color:#ff9700}body .xly-dialog-site .xly-select__size.is-danger{color:var(--color-danger)}body .xly-dialog-site .xly-select__link{position:absolute;top:2px;left:80px;width:calc(100% - 88px);line-height:26px;text-indent:5px;color:var(--color-primary);background:var(--background-module)}body .xly-dialog-site .td-input__inner{padding:6px 10px}.xly-dialog-site__checkbox{margin:12px 0 0}", ""]), e.exports = t
    }, 1414: function (e, t, o) {
        var n = o(1415);
        "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        (0, o(90).default)("16fed770", n, !0, {sourceMap: !1})
    }, 1415: function (e, t, o) {
        (t = o(89)(!1)).push([e.i, "body .xly-dialog-prompt{padding:0 18px 18px}body .xly-dialog-prompt .td-dialog__header h2{padding:18px 0 24px;text-align:left}body .xly-dialog-prompt .td-dialog__footer{margin-top:24px}body .xly-dialog-prompt .td-checkbox{margin-top:6px;color:var(--color-secondary)}.xly-dialog-prompt__text{font-size:13px;line-height:20px}.xly-dialog-prompt__tips{margin-top:6px;color:var(--color-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.xly-dialog-prompt__footer{display:flex;justify-content:flex-end;width:100%}body .xly-dialog-prompt .xly-dialog__button .td-button{padding:0 23px;width:auto!important}body .xly-dialog-prompt .xly-dialog__footer-link--underline{color:var(--color-auxiliary);text-decoration:underline}body .xly-dialog-prompt .td-button.is-danger{background:var(--color-danger)}", ""]), e.exports = t
    }, 1416: function (e, t, o) {
        e.exports = o.p + "img/icon-vip.3ab39f7.png"
    }, 686: function (e, t, o) {
        "use strict";
        o.r(t), o.d(t, "checkFileAudit", (function () {
            return b
        })), o.d(t, "playDriveMedia", (function () {
            return f
        })), o.d(t, "openDriveImg", (function () {
            return x
        })), o.d(t, "runPreviewAction", (function () {
            return g
        })), o.d(t, "consumeLocalFile", (function () {
            return m
        })), o.d(t, "consumeDriveTask", (function () {
            return v
        }));
        o(20), o(7), o(41), o(44), o(4);
        var n = o(6), r = o(2), i = o(1), l = o(67), a = o(93), c = o(82), s = o.n(c), d = o(14), p = o(174),
            u = o(282), y = function (e, t, o, n) {
                return new (o || (o = Promise))((function (r, i) {
                    function l(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof o ? t : new o((function (e) {
                            e(t)
                        }))).then(l, a)
                    }

                    c((n = n.apply(e, t || [])).next())
                }))
            }, b = function (e) {
                var t, o;
                return ![p.AuditStatus.SENSITIVE_RESOURCE, p.AuditStatus.SENSITIVE_WORD].includes(null === (t = null == e ? void 0 : e.audit) || void 0 === t ? void 0 : t.status) || (Object(a.showMessage)({
                    id: "checkFileAudit",
                    unique: !0,
                    position: "middle",
                    type: "error",
                    message: (null === (o = e.audit) || void 0 === o ? void 0 : o.title) || "文件异常，暂不支持查看",
                    duration: 1e3
                }), !1)
            };

        function f(e, t) {
            return y(this, void 0, void 0, regeneratorRuntime.mark((function o() {
                return regeneratorRuntime.wrap((function (o) {
                    for (; ;) switch (o.prev = o.next) {
                        case 0:
                            return o.abrupt("return", Object(r.callRemote)("ThunderPanPluginWebview", "IpcDispatch", "drive/getFileInfoFromSafe", e).then((function (e) {
                                if (e[1]) {
                                    if ("cancel" === e[1]) return;
                                    throw new Error(JSON.stringify(e[1]))
                                }
                                var o = e[0];
                                b(o) && (o.web_content_link || Object(a.showMessage)({
                                    id: "playDriveMedia",
                                    unique: !0,
                                    position: "middle",
                                    type: "error",
                                    message: "该文件暂时无法播放"
                                }), Object(u.playWithXmp)({
                                    playUrl: o.web_content_link || "",
                                    fileName: o.name || "",
                                    gcid: o.hash,
                                    isEmbed: !1,
                                    openFrom: "ThunderPanPlugin",
                                    panFileId: o.id,
                                    medias: o.medias,
                                    playType: "server_xlpan",
                                    playFrom: t,
                                    showBackIcon: !1,
                                    mimeType: o.mime_type
                                }))
                            })));
                        case 1:
                        case"end":
                            return o.stop()
                    }
                }), o)
            })))
        }

        function x(e) {
            return y(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                var o;
                return regeneratorRuntime.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return o = Object(n.b)(), t.abrupt("return", o.dispatch("drive/getFileInfo", e).then((function (e) {
                                b(e) && Object(r.openImgView)({src: e.web_content_link})
                            })));
                        case 2:
                        case"end":
                            return t.stop()
                    }
                }), t)
            })))
        }

        var g = function (e, t) {
            var o = Object(i.checkCanPreview)(e);
            t[o]()
        };

        function h(e) {
            return new Promise((function (t, o) {
                l.stat(e, (function (e) {
                    e ? o(e) : t()
                }))
            }))
        }

        function m(e) {
            var t = this, o = e.filePath, l = e.name, c = void 0 === l ? "" : l, p = e.fileId, b = e.gcid, m = e.from,
                v = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], _ = Object(n.b)(),
                k = Object(i.getFileExtension)(c);
            return new Promise((function (e) {
                h(o).then((function () {
                    g(k, {
                        media: function () {
                            Object(u.playWithXmp)({
                                playUrl: o,
                                fileName: c,
                                gcid: b,
                                panFileId: p,
                                isEmbed: !1,
                                openFrom: "ThunderPanPlugin",
                                playType: "local_xlpan",
                                playFrom: m,
                                showBackIcon: !1
                            })
                        }, picture: function () {
                            Object(r.openImgView)({src: o})
                        }, other: function () {
                            return y(t, void 0, void 0, regeneratorRuntime.mark((function e() {
                                var t;
                                return regeneratorRuntime.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, s.a.electron.shell.__resolve();
                                        case 2:
                                            return t = e.sent, e.next = 5, t.openPath(o).catch((function () {
                                                Object(a.showMessage)({
                                                    id: "dblclickUpload",
                                                    unique: !0,
                                                    position: "middle",
                                                    type: "error",
                                                    message: "无法打开该文件"
                                                })
                                            }));
                                        case 5:
                                        case"end":
                                            return e.stop()
                                    }
                                }), e)
                            })))
                        }
                    }), e({local: d.fileStatus.exist, drive: d.fileStatus.unknown})
                })).catch((function () {
                    var t;
                    !v && p ? t = {
                        media: function () {
                            f(p, m).then((function () {
                                e({local: d.fileStatus.delete, drive: d.fileStatus.exist})
                            })).catch((function () {
                                e({
                                    local: d.fileStatus.delete,
                                    drive: d.fileStatus.delete
                                }), Object(a.showMessage)({
                                    id: "dblclickUpload",
                                    unique: !0,
                                    position: "middle",
                                    type: "error",
                                    message: "文件已删除，无法播放"
                                })
                            }))
                        }, picture: function () {
                            x(p).then((function () {
                                e({local: d.fileStatus.delete, drive: d.fileStatus.exist})
                            })).catch((function () {
                                e({
                                    local: d.fileStatus.delete,
                                    drive: d.fileStatus.delete
                                }), Object(a.showMessage)({
                                    id: "dblclickUpload",
                                    unique: !0,
                                    position: "middle",
                                    type: "error",
                                    message: "文件已删除，无法查看"
                                })
                            }))
                        }, other: function () {
                            _.dispatch("drive/getFileInfo", p).then((function () {
                                e({
                                    local: d.fileStatus.delete,
                                    drive: d.fileStatus.exist
                                }), Object(a.showMessage)({
                                    id: "dblclickUpload",
                                    unique: !0,
                                    position: "middle",
                                    type: "error",
                                    message: "文件类型不支持在线查看"
                                })
                            })).catch((function () {
                                e({
                                    local: d.fileStatus.delete,
                                    drive: d.fileStatus.delete
                                }), Object(a.showMessage)({
                                    id: "dblclickUpload",
                                    unique: !0,
                                    position: "middle",
                                    type: "error",
                                    message: "文件已删除，无法查看"
                                })
                            }))
                        }
                    } : (t = {
                        media: function () {
                            Object(a.showMessage)({
                                id: "dblclickUpload",
                                unique: !0,
                                position: "middle",
                                type: "error",
                                message: "文件已删除，无法播放"
                            })
                        }, picture: function () {
                            Object(a.showMessage)({
                                id: "dblclickUpload",
                                unique: !0,
                                position: "middle",
                                type: "error",
                                message: "文件已删除，无法查看"
                            })
                        }, other: function () {
                            Object(a.showMessage)({
                                id: "dblclickUpload",
                                unique: !0,
                                position: "middle",
                                type: "error",
                                message: "文件已删除，无法查看"
                            })
                        }
                    }, e({local: d.fileStatus.delete, drive: d.fileStatus.unknown})), g(k, t)
                }))
            }))
        }

        function v(e, t) {
            return y(this, void 0, void 0, regeneratorRuntime.mark((function o() {
                return regeneratorRuntime.wrap((function (o) {
                    for (; ;) switch (o.prev = o.next) {
                        case 0:
                            "PHASE_TYPE_COMPLETE" === e.phase ? Object(r.callRemote)("ThunderPanPluginWebview", "IpcDispatch", "drive/getFileInfoFromSafe", e.file_id).then((function (o) {
                                if (o[1]) {
                                    if ("cancel" === o[1]) return;
                                    throw new Error(o[1])
                                }
                                var n = o[0];
                                if (b(n)) {
                                    var l = {
                                        media: function () {
                                            n.web_content_link || Object(a.showMessage)({
                                                id: "playDriveMedia",
                                                unique: !0,
                                                position: "middle",
                                                type: "error",
                                                message: "该文件暂时无法播放"
                                            });
                                            var e = "SPACE_SAFE" === n.space ? "safebox_".concat(t) : t;
                                            Object(u.playWithXmp)({
                                                playUrl: n.web_content_link || "",
                                                fileName: n.name || "",
                                                gcid: n.hash,
                                                isEmbed: !1,
                                                openFrom: "ThunderPanPlugin",
                                                panFileId: n.id,
                                                medias: n.medias,
                                                playType: "server_xlpan",
                                                playFrom: e,
                                                showBackIcon: !1,
                                                mimeType: n.mime_type
                                            })
                                        }, picture: function () {
                                            Object(r.openImgView)({src: n.web_content_link})
                                        }, other: function () {
                                            Object(a.showMessage)({
                                                id: "dblclickCloudAdd",
                                                unique: !0,
                                                position: "middle",
                                                type: "error",
                                                message: "暂不支持在线查看",
                                                duration: 1e3
                                            })
                                        }
                                    };
                                    g(Object(i.getFileExtension)(e.file_name), l, n.mime_type)
                                }
                            })).catch((function (e) {
                                console.error(e), Object(a.showMessage)({
                                    id: "dblclickCloudAdd",
                                    unique: !0,
                                    position: "middle",
                                    type: "error",
                                    message: Object(i.getErrorDescription)(e),
                                    duration: 1e3
                                })
                            })) : "PHASE_TYPE_ERROR" === e.phase && Object(a.showMessage)({
                                id: "dblclickCloudAdd",
                                unique: !0,
                                position: "middle",
                                type: "error",
                                message: e.message,
                                duration: 1e3
                            });
                        case 1:
                        case"end":
                            return o.stop()
                    }
                }), o)
            })))
        }
    }
}]);