(window.webpackJsonp = window.webpackJsonp || []).push([[21], {
    1354: function (e, t, n) {
        "use strict";
        n(7), n(4);
        var i = n(5), s = n(82), o = n.n(s), r = n(203), a = function (e, t, n, i) {
            return new (n || (n = Promise))((function (s, o) {
                function r(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function l(e) {
                    var t;
                    e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(r, a)
                }

                l((i = i.apply(e, t || [])).next())
            }))
        };
        t.a = i.default.extend({
            mounted: function () {
                return a(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Object(r.isLogEnable)();
                            case 2:
                                if (!e.sent) {
                                    e.next = 4;
                                    break
                                }
                                window.addEventListener("keyup", this.openDevTools);
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })))
            }, beforeDestroy: function () {
                window.removeEventListener("keyup", this.openDevTools)
            }, methods: {
                openDevTools: function (e) {
                    return a(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if ("F12" !== e.key || !e.shiftKey) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.next = 3, o.a.getCurrentWindow().__resolve();
                                case 3:
                                    t.sent.webContents.openDevTools();
                                case 5:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }
            }
        })
    }, 1355: function (e, t, n) {
        var i = n(1418);
        "string" == typeof i && (i = [[e.i, i, ""]]), i.locals && (e.exports = i.locals);
        (0, n(90).default)("4fc194bb", i, !0, {sourceMap: !1})
    }, 1417: function (e, t, n) {
        "use strict";
        var i = n(1355);
        n.n(i).a
    }, 1418: function (e, t, n) {
        (t = n(89)(!1)).push([e.i, ".xly-transport__items:focus{outline:none}", ""]), e.exports = t
    }, 1507: function (e, t, n) {
        "use strict";
        n.r(t);
        n(62), n(45), n(61), n(10), n(11), n(32), n(173), n(63);
        var i = n(83), s = (n(30), n(38)), o = (n(12), n(27), n(7), n(105), n(20), n(111), n(41), n(44), n(33)),
            r = n(40), a = n(70), l = n(71), c = n(37), u = (n(4), n(29)),
            d = (n(1342), n(1343), n(1344), n(1345), n(1401), n(1402), n(1352)), h = n.n(d), f = n(18);

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
                var n, i = Object(c.a)(e);
                if (t) {
                    var s = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, s)
                } else n = i.apply(this, arguments);
                return Object(l.a)(this, n)
            }
        }

        var m = function (e, t, n, i) {
                var s, o = arguments.length, r = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(u.a)(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (r = (o < 3 ? s(r) : o > 3 ? s(t, n, r) : s(t, n)) || r);
                return o > 3 && r && Object.defineProperty(t, n, r), r
            }, k = {37: 1, 38: 1, 39: 1, 40: 1}, v = {passive: !1},
            y = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

        function g(e) {
            e.preventDefault()
        }

        function _(e) {
            return !!k[e.keyCode] && (g(e), !1)
        }

        var b = function (e) {
            Object(a.a)(n, e);
            var t = p(n);

            function n() {
                var e;
                return Object(o.a)(this, n), (e = t.apply(this, arguments)).computedPosition = {x: 0, y: 0}, e
            }

            return Object(r.a)(n, [{
                key: "handleClickContextMenuItem", value: function (e) {
                    this.$emit("clickItem", e), this.$emit("update:visible", !1)
                }
            }, {
                key: "disableListScroll", value: function () {
                    var e = this.$parent.$el;
                    e.addEventListener("DOMMouseScroll", g, !1), e.addEventListener(y, g, v), e.addEventListener("touchmove", g, v), window.addEventListener("keydown", _, !1)
                }
            }, {
                key: "enableListScroll", value: function () {
                    var e = this.$parent.$el;
                    e.removeEventListener("DOMMouseScroll", g, !1), e.removeEventListener(y, g, !1), e.removeEventListener("touchmove", g, !1), window.removeEventListener("keydown", _, !1)
                }
            }, {
                key: "normalizeDropdownPosition", value: function () {
                    var e = this.$parent.$el.getBoundingClientRect(), t = this.$el.getBoundingClientRect(),
                        n = this.clickPosition.x, i = this.clickPosition.y;
                    n + t.width > e.right && (n -= t.width), i + t.height > e.bottom && (i -= t.height), this.computedPosition.x = n, this.computedPosition.y = i
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
                    e ? (window.addEventListener("blur", this.handleWindowBlur), window.addEventListener("click", this.handleWindowClick, !0), this.disableListScroll()) : (window.removeEventListener("blur", this.handleWindowBlur), window.removeEventListener("click", this.handleWindowClick, !0), this.enableListScroll())
                }
            }, {
                key: "handleClickPosition", value: function (e) {
                    this.$nextTick(this.normalizeDropdownPosition.bind(this))
                }
            }]), n
        }(f.Vue);
        m([Object(f.Prop)({})], b.prototype, "visible", void 0), m([Object(f.Prop)({})], b.prototype, "clickPosition", void 0), m([Object(f.Prop)({})], b.prototype, "isOutOfContextMenu", void 0), m([Object(f.Prop)({})], b.prototype, "menuItemList", void 0), m([Object(f.Watch)("visible")], b.prototype, "handleVisibleChange", null), m([Object(f.Watch)("clickPosition", {deep: !0})], b.prototype, "handleClickPosition", null);
        var x = b = m([Object(f.Component)({})], b), C = n(72), w = Object(C.a)(x, (function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {
                    directives: [{name: "show", rawName: "v-show", value: e.visible, expression: "visible"}],
                    staticClass: "xly-right-click is-finish",
                    style: {left: e.computedPosition.x + "px", top: e.computedPosition.y + "px"},
                    on: {
                        mouseenter: function (t) {
                            return e.$emit("update:isOutOfContextMenu", !1)
                        }, mouseleave: function (t) {
                            return e.$emit("update:isOutOfContextMenu", !0)
                        }
                    }
                }, [n("ul", e._l(e.menuItemList, (function (t) {
                    return n("li", {
                        key: t, staticClass: "xly-right-click__item", on: {
                            click: function (n) {
                                return e.handleClickContextMenuItem(t)
                            }
                        }
                    }, [e._v("\n      " + e._s(t) + "\n    ")])
                })), 0)])
            }), [], !1, null, null, null).exports, I = n(82), O = n.n(I), T = n(1408), S = n(1), j = n(2), L = n(195),
            P = n(1331), M = n(1409), R = n(281), $ = n(8), E = n(35);

        function F(e) {
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
                    var s = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, s)
                } else n = i.apply(this, arguments);
                return Object(l.a)(this, n)
            }
        }

        var D = function (e, t, n, i) {
            var s, o = arguments.length, r = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(u.a)(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (r = (o < 3 ? s(r) : o > 3 ? s(t, n, r) : s(t, n)) || r);
            return o > 3 && r && Object.defineProperty(t, n, r), r
        }, U = function (e, t, n, i) {
            return new (n || (n = Promise))((function (s, o) {
                function r(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function l(e) {
                    var t;
                    e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(r, a)
                }

                l((i = i.apply(e, t || [])).next())
            }))
        }, A = function (e) {
            Object(a.a)(n, e);
            var t = F(n);

            function n() {
                return Object(o.a)(this, n), t.apply(this, arguments)
            }

            return Object(r.a)(n, [{
                key: "del", value: function () {
                    return U(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Object($.k)(this.file.id);
                                case 3:
                                    this.$store.dispatch("local-upload/TransferRemoveFileFragment", this.file.id), E.a.diffSynchronize(), this.$eventTrack("transmission_list_operation_click", {
                                        tab: "local_upload",
                                        click_id: "cancel",
                                        is_safeboxfile: this.$store.getters["drive/inSafeSpace"]
                                    }), e.next = 15;
                                    break;
                                case 8:
                                    if (e.prev = 8, e.t0 = e.catch(0), "file_not_found" === Object(S.safeJSONParse)(e.t0).error) {
                                        e.next = 14;
                                        break
                                    }
                                    return this.$store.dispatch("local-upload/TransferRemoveFileFragment", this.file.id), e.abrupt("return");
                                case 14:
                                    this.$message({
                                        id: "cancelUpload",
                                        unique: !0,
                                        position: "middle",
                                        type: "error",
                                        message: "接口异常，删除文件失败"
                                    });
                                case 15:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[0, 8]])
                    })))
                }
            }, {
                key: "icon", get: function () {
                    return this.file.icon_link
                }
            }, {
                key: "fileExtension", get: function () {
                    return Object(S.getFileExtension)(this.file.name).slice(1)
                }
            }, {
                key: "iconClass", get: function () {
                    return "xly-type-".concat(R.default[this.fileExtension])
                }
            }]), n
        }(f.Vue);
        D([Object(f.Prop)({required: !0})], A.prototype, "file", void 0);
        var K = A = D([Object(f.Component)({name: "FileFragment"})], A), N = Object(C.a)(K, (function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("td-media", [n("i", {
                    staticClass: "xly-icon-type",
                    class: !e.icon && e.iconClass,
                    style: e.icon && {background: "url(" + e.icon + ") 0% 0% / cover no-repeat"},
                    attrs: {slot: "media"},
                    slot: "media"
                }), e._v(" "), n("p", {
                    staticClass: "xly-file-name",
                    attrs: {title: e.file.name}
                }, [e._v("\n    " + e._s(e.file.name) + "\n  ")]), e._v(" "), n("div", {staticClass: "xly-transport-operate"}, [n("a", {
                    staticClass: "xly-transport-operate__button",
                    attrs: {href: "javascript:;", title: "删除上传任务"},
                    on: {click: e.del}
                }, [n("i", {staticClass: "xly-icon-clear-1"})])]), e._v(" "), n("div", {staticClass: "xly-file-info"}, [n("a", {
                    staticClass: "xly-file-error",
                    attrs: {href: "#"}
                }, [e._v("上传异常中断，请删除后重新上传")])])])
            }), [], !1, null, null, null).exports, V = (n(1403), n(67)), q = n(34), G = n.n(q), H = n(694), W = n(14),
            B = n(60), Y = n(174), J = n(686), z = n(663), X = n(3), Q = n(168), Z = n(26), ee = n(699), te = n.n(ee),
            ne = n(58), ie = n(481), se = n.n(ie), oe = n(1354);

        function re(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ae(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ae(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0, s = function () {
                    };
                    return {
                        s: s, n: function () {
                            return i >= e.length ? {done: !0} : {done: !1, value: e[i++]}
                        }, e: function (e) {
                            throw e
                        }, f: s
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, r = !0, a = !1;
            return {
                s: function () {
                    n = e[Symbol.iterator]()
                }, n: function () {
                    var e = n.next();
                    return r = e.done, e
                }, e: function (e) {
                    a = !0, o = e
                }, f: function () {
                    try {
                        r || null == n.return || n.return()
                    } finally {
                        if (a) throw o
                    }
                }
            }
        }

        function ae(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i
        }

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
                    var s = Object(c.a)(this).constructor;
                    n = Reflect.construct(i, arguments, s)
                } else n = i.apply(this, arguments);
                return Object(l.a)(this, n)
            }
        }

        var ce, ue = function (e, t, n, i) {
            var s, o = arguments.length, r = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(u.a)(Reflect)) && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, i); else for (var a = e.length - 1; a >= 0; a--) (s = e[a]) && (r = (o < 3 ? s(r) : o > 3 ? s(t, n, r) : s(t, n)) || r);
            return o > 3 && r && Object.defineProperty(t, n, r), r
        }, de = function (e, t, n, i) {
            return new (n || (n = Promise))((function (s, o) {
                function r(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function l(e) {
                    var t;
                    e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(r, a)
                }

                l((i = i.apply(e, t || [])).next())
            }))
        };
        !function (e) {
            e.add = "add", e.uploading = "uploading", e.uploaded = "uploaded", e.retrieving = "retrieving", e.retrieved = "retrieved", e.uploaded_title = "uploaded_title", e.uploading_title = "uploading_title", e.retrieving_title = "retrieving_title", e.retrieved_title = "retrieved_title"
        }(ce || (ce = {}));
        var he = function (e) {
            Object(a.a)(n, e);
            var t = le(n);

            function n() {
                var e;
                return Object(o.a)(this, n), (e = t.apply(this, arguments)).tabs = [{
                    title: "云添加",
                    key: "add"
                }, {title: "本地上传", key: "upload"}, {
                    title: "下载本地",
                    key: "download"
                }], e.isOutOfContextMenu = !1, e.isLoadMoreUrlTaskShow = !1, e.clickPosition = {
                    x: 0,
                    y: 0
                }, e.contextMenuVisible = !1, e.shiftKeyDown = !1, e.visible = !0, e.activeKey = "", e.isShowAgreement = !1, e.contextMenuClickPosition = ce.add, e.menuItemList = [], e.redPointShow = {
                    add: !1,
                    upload: !1,
                    download: !1
                }, e.dataStatus = {add: "unknow", upload: "unknow", download: "unknow"}, e.selectedInfo = {
                    map: {},
                    lastFocusIndex: 0
                }, e.promotionConfig = {}, e.urlTaskRemainPromotionCount = 0, e.downloadRemainPromotionCount = 0, e.showUrlTaskPromotion = !1, e.showDownloadPromotion = !1, e.tabShowReport = {
                    add: te()(e.tabShowReportFunc),
                    upload: te()(e.tabShowReportFunc),
                    download: te()(e.tabShowReportFunc)
                }, e
            }

            return Object(r.a)(n, [{
                key: "isDisable", value: function (e) {
                    return "PHASE_TYPE_ERROR" === e.phase || !![Y.AuditStatus.SENSITIVE_RESOURCE, Y.AuditStatus.SENSITIVE_WORD].includes(this.$sget(e, "reference_resource", "audit", "status"))
                }
            }, {
                key: "getExtensionFromFilename", value: function (e) {
                    var t = e.match(/\.\w+$/g);
                    return null !== t ? t[0] : ""
                }
            }, {
                key: "tabRunningTask", value: function (e) {
                    return {
                        add: this.runningUrlTask,
                        upload: this.$store.getters["local-upload/runningTaskNum"],
                        download: this.runningDownloadTask
                    }[e]
                }
            }, {
                key: "handleChooseAll", value: function (e, t) {
                    null == e || e.preventDefault(), "add" === this.activeKey ? this.resetSelectedIdMap(this.cloudAddList) : "upload" === this.activeKey ? "uploading" === t ? this.resetSelectedIdMap(this.uploadingTask.concat(this.filterFileFragment)) : "uploaded" === t && this.resetSelectedIdMap(this.uploadedTask) : "download" === this.activeKey && ("retrieving" === t ? this.resetSelectedIdMap(this.retrievingList, "taskId") : "retrieved" === t && this.resetSelectedIdMap(this.retrievedList, "taskId"))
                }
            }, {
                key: "handleContextMenu", value: function (e, t, n) {
                    this.clickPosition = {
                        x: t.clientX,
                        y: t.clientY
                    }, this.contextMenuVisible = !0, this.handleClickListItem(e, t, !0, n), this.changeMenuItemList(e)
                }
            }, {
                key: "dblclickUpload", value: function (e) {
                    var t = this;
                    Object(Z.consumeStat)(this.getExtensionFromFilename(e.name), "transmission_local_upload_list_double_click", e.mime_type, {is_safebox: e.isInSafe});
                    var n = 1 === Number(e.isInSafe) ? "safebox_transmission_local_upload_list_double_click" : "transmission_local_upload_list_double_click";
                    Object(J.consumeLocalFile)({
                        filePath: e.filePath,
                        name: e.name,
                        fileId: e.fileId,
                        gcid: e.hash,
                        from: n
                    }, !1).then((function (n) {
                        var i = n.local, s = n.drive, o = {id: e.id};
                        o.localFileExist = i, o.driveFileExist = s, t.$store.dispatch("local-upload/transferUpdate", o)
                    }))
                }
            }, {
                key: "needShowUrlTaskPromotion", value: function (e) {
                    return this.showUrlTaskPromotion && 0 === e && !this.isSuperV && this.runningUrlTask > 0
                }
            }, {
                key: "dblclickCloudAdd", value: function (e, t) {
                    return de(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    Object(Z.consumeStat)(this.getExtensionFromFilename(e.file_name), "yunpan_transmission_yunadd_double_click"), e.status_size > 1 ? "PHASE_TYPE_ERROR" !== e.phase ? this.$router.push("transfer/".concat(e.id)) : this.$message({
                                        id: "dblclickCloudAdd",
                                        unique: !0,
                                        position: "middle",
                                        type: "error",
                                        message: e.message
                                    }) : ["PHASE_TYPE_RUNNING", "PHASE_TYPE_PENDING"].includes(e.phase) && this.topSpeedCloudConfig ? Object(ne.createTransferVip)() : Object(J.consumeDriveTask)(e, "transmission_yun_add_list_double_click");
                                case 2:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })))
                }
            }, {
                key: "dblclickRetrieved", value: function (e) {
                    return de(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        var n, i, s = this;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    Object(Z.consumeStat)(this.getExtensionFromFilename(e.taskName || ""), "yunpan_transmission_getback_double_click", "", {is_safebox: e.isInSafe}), n = (null == e ? void 0 : e.taskType) === B.TaskType.Group ? e.savePath : G.a.join(e.savePath, e.taskName), i = 1 === Number(e.isInSafe) ? "safebox_transmission_getback_list_double_click" : "transmission_getback_list_double_click", Object(J.consumeLocalFile)({
                                        filePath: n,
                                        from: i,
                                        name: e.taskName,
                                        fileId: e.fileId,
                                        gcid: e.gcid
                                    }).then((function (t) {
                                        var n = t.local;
                                        t.drive;
                                        s.$store.dispatch("retrieval-list/setFileExtras", {
                                            taskId: e.taskId,
                                            key: "fileExist",
                                            val: n
                                        })
                                    }));
                                case 4:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    })))
                }
            }, {
                key: "changeMenuItemList", value: function (e) {
                    this.menuItemList = [], "add" === this.activeKey ? this.initCloudAddMenus() : "upload" === this.activeKey && (this.contextMenuClickPosition === ce.uploaded ? this.initUploadedMenus() : this.contextMenuClickPosition === ce.uploading ? this.initUploadingMenus() : this.contextMenuClickPosition === ce.uploaded_title ? this.initUploadedTitleMenus() : this.contextMenuClickPosition === ce.uploading_title && this.initUploadingTitleMenus()), "download" === this.activeKey && (this.contextMenuClickPosition === ce.retrieving ? this.initRetrievingMenus() : this.contextMenuClickPosition === ce.retrieved ? this.initRetrievedMenus() : this.contextMenuClickPosition === ce.retrieving_title ? this.initRetrievingTitleMenus() : this.contextMenuClickPosition === ce.retrieved_title && this.initRetrievedTitleMenus())
                }
            }, {
                key: "initUploadingMenus", value: function () {
                    var e = this.selectedInfo.map, t = Object.keys(e).length;
                    if (1 === t) {
                        var n = Object.keys(e).map((function (t) {
                            return e[t]
                        }))[0];
                        this.menuItemList = [], "pause" === n.uploadStatus ? this.menuItemList.push("上传") : ["uploading", "pending"].includes(n.uploadStatus) ? this.menuItemList.push("暂停") : "fail" === n.uploadStatus ? this.menuItemList.push("重试") : "prepare" === n.uploadStatus && this.menuItemList.push("暂停"), this.menuItemList.push("删除"), t !== this.uploadingTask.length + this.filterFileFragment.length && this.menuItemList.push("全选")
                    } else t !== this.uploadingTask.length + this.filterFileFragment.length ? this.menuItemList = ["删除", "全选"] : this.menuItemList = ["删除"]
                }
            }, {
                key: "initUploadedMenus", value: function () {
                    var e = this.selectedInfo.map, t = Object.keys(e).length;
                    if (1 === t) {
                        var n = Object.keys(e).map((function (t) {
                            return e[t]
                        }))[0];
                        "other" !== Object(S.checkCanPreview)(Object(S.getFileExtension)(n.name), null == n ? void 0 : n.mime_type) && this.menuItemList.push("打开"), this.menuItemList.push("打开文件目录", "清除记录"), t !== this.uploadedTaskLength && this.menuItemList.push("全选")
                    } else t !== this.uploadedTaskLength ? this.menuItemList.push("清除记录", "全选") : this.menuItemList.push("清除全部记录")
                }
            }, {
                key: "initUploadingTitleMenus", value: function () {
                    this.menuItemList.push("全部开始", "全部暂停", "全部删除")
                }
            }, {
                key: "initUploadedTitleMenus", value: function () {
                    this.menuItemList.push("清除全部记录")
                }
            }, {
                key: "initRetrievingTitleMenus", value: function () {
                    this.menuItemList.push("全部开始", "全部暂停", "全部删除")
                }
            }, {
                key: "initRetrievedTitleMenus", value: function () {
                    this.menuItemList.push("全部删除")
                }
            }, {
                key: "initRetrievingMenus", value: function () {
                    var e = this.selectedInfo.map, t = Object.keys(e).length;
                    if (1 === t) {
                        var n = Object.keys(e).map((function (t) {
                            return e[t]
                        }))[0];
                        [H.TaskStatus.StartPending, H.TaskStatus.Started].includes(n.taskStatus) ? this.menuItemList.push("暂停") : [H.TaskStatus.StopPending, H.TaskStatus.Stopped].includes(n.taskStatus) ? this.menuItemList.push("开始") : [H.TaskStatus.Unkown, H.TaskStatus.Failed].includes(n.taskStatus) && this.menuItemList.push("重试"), this.menuItemList.push("删除"), t !== this.retrievingList.length && this.menuItemList.push("全选")
                    } else t !== this.uploadedTaskLength ? this.menuItemList.push("删除", "全选") : this.menuItemList.push("删除")
                }
            }, {
                key: "initRetrievedMenus", value: function () {
                    var e = this.selectedInfo.map, t = Object.keys(e).length;
                    if (1 === t) {
                        var n = Object.keys(e).map((function (t) {
                            return e[t]
                        }))[0], i = Object(S.getFileExtension)(n.taskName);
                        "media" === Object(S.checkCanPreview)(i) && this.menuItemList.push("播放"), this.menuItemList.push("打开文件目录", "清除记录"), t !== this.retrievedList.length && this.menuItemList.push("全选"), this.menuItemList.push("删除")
                    } else t !== this.retrievedList.length ? this.menuItemList.push("清除记录", "删除", "全选") : this.menuItemList.push("清除记录", "删除")
                }
            }, {
                key: "initCloudAddMenus", value: function () {
                    var e, t = this.selectedInfo.map, n = Object.keys(t).length;
                    if (this.menuItemList = [], 1 === n) {
                        var i = Object.keys(t).map((function (e) {
                            return t[e]
                        }))[0];
                        "PHASE_TYPE_COMPLETE" === i.phase ? ("other" !== Object(S.checkCanPreview)(Object(S.getFileExtension)(i.name), null === (e = null == i ? void 0 : i.reference_resource) || void 0 === e ? void 0 : e.mime_type) && this.menuItemList.push("打开"), this.menuItemList.push("打开文件目录", "清除记录")) : "PHASE_TYPE_RUNNING" === i.phase ? this.menuItemList.push("删除") : "PHASE_TYPE_ERROR" === i.phase && this.menuItemList.push("清除记录"), n !== this.cloudAddListLength && this.menuItemList.push("全选")
                    } else n !== this.cloudAddListLength ? this.menuItemList = ["删除", "全选"] : this.menuItemList = ["删除"];
                    this.menuItemList.push("刷新")
                }
            }, {
                key: "handleClickContextMenuItem", value: function (e) {
                    return de(this, void 0, void 0, regeneratorRuntime.mark((function t() {
                        var n, i, o, r, a, l, c, u, d, h, f, p, m, k, v, y, g, _, b, x, C, w, I, T, S, R, E, F, D, U, A,
                            K, N, q, H, Y, z, X, Q = this;
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = this.selectedInfo.map, i = "", "add" !== this.activeKey) {
                                        t.next = 59;
                                        break
                                    }
                                    if ("刷新" !== e) {
                                        t.next = 9;
                                        break
                                    }
                                    i = "refresh", this.isLoadMoreUrlTaskShow = !1, this.$nextTick((function () {
                                        Q.refreshUrkTask().then((function () {
                                            Q.$message({
                                                message: "刷新成功",
                                                unique: !0,
                                                type: "success",
                                                position: "middle",
                                                id: "handleClickContextMenuItem"
                                            }), Q.isLoadMoreUrlTaskShow = !0
                                        })).catch((function (e) {
                                            Q.$message({
                                                message: "接口出现异常",
                                                type: "error",
                                                position: "middle",
                                                duration: 1e3
                                            }), console.error(e)
                                        }))
                                    })), t.next = 56;
                                    break;
                                case 9:
                                    if ("全选" !== e) {
                                        t.next = 14;
                                        break
                                    }
                                    i = "all_select", this.handleChooseAll(null, ce.add), t.next = 56;
                                    break;
                                case 14:
                                    if ("删除" !== e) {
                                        t.next = 23;
                                        break
                                    }
                                    if (i = "delete", 1 !== (o = Object.keys(this.selectedInfo.map)).length || "PHASE_TYPE_COMPLETE" !== this.selectedInfo.map[o[0]].phase) {
                                        t.next = 20;
                                        break
                                    }
                                    return this.$store.dispatch("url-task-list/ipcRemoveUrlTasks", o), t.abrupt("return");
                                case 20:
                                    Object(L.a)(P.a)({
                                        title: "删除",
                                        content: "确定要删除所选记录吗",
                                        danger: !0,
                                        confirmText: "删除"
                                    }).then((function () {
                                        Q.$store.dispatch("url-task-list/ipcRemoveUrlTasks", o)
                                    })).catch((function () {
                                    })), t.next = 56;
                                    break;
                                case 23:
                                    if ("打开" !== e) {
                                        t.next = 30;
                                        break
                                    }
                                    i = "open", r = Object.keys(n).map((function (e) {
                                        return n[e]
                                    }))[0], Object(Z.consumeStat)(this.getExtensionFromFilename(r.name), "yunpan_transmission_yunadd_double_click"), Object(J.consumeDriveTask)(r, "transmission_yun_add_list_double_click"), t.next = 56;
                                    break;
                                case 30:
                                    if ("打开文件目录" !== e) {
                                        t.next = 42;
                                        break
                                    }
                                    return i = "open_content", a = Object.keys(n).map((function (e) {
                                        return n[e]
                                    }))[0], t.next = 35, Object(j.redirectCurrentDirectoryById)(a.reference_resource.id);
                                case 35:
                                    l = t.sent, c = Object(s.a)(l, 2), u = c[0], d = c[1], u ? 0 === d.length && this.$message({
                                        id: "openUrlTask",
                                        unique: !0,
                                        position: "middle",
                                        type: "error",
                                        message: "云盘文件已删除"
                                    }) : this.$message({
                                        id: "handleClickContextMenuItem",
                                        unique: !0,
                                        position: "middle",
                                        type: "error",
                                        message: "打开云盘目录失败"
                                    }), t.next = 56;
                                    break;
                                case 42:
                                    if ("清除记录" !== e) {
                                        t.next = 56;
                                        break
                                    }
                                    return t.prev = 43, i = "clear", h = Object.keys(this.selectedInfo.map), t.next = 48, this.$store.dispatch("url-task-list/ipcRemoveUrlTasks", h);
                                case 48:
                                    return t.next = 50, this.loadMoreUrlTask();
                                case 50:
                                    t.next = 56;
                                    break;
                                case 52:
                                    t.prev = 52, t.t0 = t.catch(43), console.error("=== 删除所有云添加记录异常 ===", t.t0), this.$raven.error(t.t0);
                                case 56:
                                    i && this.$eventTrack("transmission_list_rk_click", {
                                        clickid: i,
                                        tab: "yun_add"
                                    }), t.next = 117;
                                    break;
                                case 59:
                                    if ("upload" !== this.activeKey) {
                                        t.next = 116;
                                        break
                                    }
                                    if ("全选" !== e) {
                                        t.next = 65;
                                        break
                                    }
                                    i = "all_select", this.contextMenuClickPosition === ce.uploaded ? this.handleChooseAll(null, ce.uploaded) : this.handleChooseAll(null, ce.uploading), t.next = 113;
                                    break;
                                case 65:
                                    if ("上传" !== e) {
                                        t.next = 71;
                                        break
                                    }
                                    i = "upload", f = Object.keys(n).map((function (e) {
                                        return n[e]
                                    }))[0], this.$store.dispatch("local-upload/transferResume", f), t.next = 113;
                                    break;
                                case 71:
                                    if ("暂停" !== e) {
                                        t.next = 77;
                                        break
                                    }
                                    i = "pause", p = Object.keys(n).map((function (e) {
                                        return n[e]
                                    }))[0], this.$store.dispatch("local-upload/transferPause", p), t.next = 113;
                                    break;
                                case 77:
                                    if ("重试" !== e) {
                                        t.next = 83;
                                        break
                                    }
                                    i = "retry", m = Object.keys(n).map((function (e) {
                                        return n[e]
                                    }))[0], this.$store.dispatch("local-upload/transferRetry", m), t.next = 113;
                                    break;
                                case 83:
                                    if (!["清除全部记录", "删除", "全部删除"].includes(e)) {
                                        t.next = 94;
                                        break
                                    }
                                    if (i = {
                                        "清除全部记录": "all_clear",
                                        "删除": "delete",
                                        "全部删除": "all_delete"
                                    }[e], k = Object.keys(n).map((function (e) {
                                        return n[e]
                                    })), "清除全部记录" !== e) {
                                        t.next = 91;
                                        break
                                    }
                                    return Object(L.a)(P.a)({
                                        title: "删除",
                                        content: "确定要清除全部记录吗",
                                        danger: !0,
                                        confirmText: "删除"
                                    }).then((function () {
                                        Q.$store.dispatch("local-upload/transferDeleteAllCompleted")
                                    })).catch((function () {
                                    })), t.abrupt("return");
                                case 91:
                                    Object(L.a)(P.a)({
                                        title: "删除",
                                        content: "确定要删除所选任务吗",
                                        danger: !0,
                                        confirmText: "删除"
                                    }).then((function () {
                                        return de(Q, void 0, void 0, regeneratorRuntime.mark((function e() {
                                            var t, n, i, s, o, r = this;
                                            return regeneratorRuntime.wrap((function (e) {
                                                for (; ;) switch (e.prev = e.next) {
                                                    case 0:
                                                        e.prev = 0, t = [], n = [], i = re(k);
                                                        try {
                                                            for (i.s(); !(s = i.n()).done;) o = s.value, se()(o.driveFileExist) ? o.id && n.push(o.id) : (o.fileId && n.push(o.fileId), t.push(o.id))
                                                        } catch (e) {
                                                            i.e(e)
                                                        } finally {
                                                            i.f()
                                                        }
                                                        if (!(n.length > 0)) {
                                                            e.next = 8;
                                                            break
                                                        }
                                                        return e.next = 8, Object($.b)(n);
                                                    case 8:
                                                        n.forEach((function (e) {
                                                            r.$store.dispatch("local-upload/TransferRemoveFileFragment", e)
                                                        })), this.$store.dispatch("local-upload/transferCancel", t), e.next = 15;
                                                        break;
                                                    case 12:
                                                        e.prev = 12, e.t0 = e.catch(0), this.$message({
                                                            id: "handleClickContextMenuItem",
                                                            unique: !0,
                                                            position: "middle",
                                                            type: "error",
                                                            message: "接口异常，删除文件失败"
                                                        });
                                                    case 15:
                                                    case"end":
                                                        return e.stop()
                                                }
                                            }), e, this, [[0, 12]])
                                        })))
                                    })).catch((function () {
                                    }));
                                case 92:
                                    t.next = 113;
                                    break;
                                case 94:
                                    if ("打开" !== e) {
                                        t.next = 100;
                                        break
                                    }
                                    i = "open", v = Object.keys(n).map((function (e) {
                                        return n[e]
                                    }))[0], this.dblclickUpload(v), t.next = 113;
                                    break;
                                case 100:
                                    if ("打开文件目录" !== e) {
                                        t.next = 112;
                                        break
                                    }
                                    return i = "open_content", y = Object.keys(n).map((function (e) {
                                        return n[e]
                                    }))[0], t.next = 105, Object(j.redirectCurrentDirectoryById)(y.fileId);
                                case 105:
                                    g = t.sent, _ = Object(s.a)(g, 2), b = _[0], x = _[1], b ? 0 === x.length && (this.$store.dispatch("local-upload/transferUpdate", {
                                        id: y.id,
                                        driveFileExist: W.fileStatus.delete
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
                                    }), t.next = 113;
                                    break;
                                case 112:
                                    ["清除记录"].includes(e) ? (i = "clear", Object.keys(n).map((function (e) {
                                        return n[e]
                                    })).forEach((function (e) {
                                        Q.$store.dispatch("local-upload/transferDelete", e)
                                    }))) : "全部开始" === e ? (i = "all_start", (C = Object.keys(n).map((function (e) {
                                        return n[e]
                                    }))).sort((function (e, t) {
                                        return t.id - e.id
                                    })), C.forEach((function (e) {
                                        Q.$store.dispatch("local-upload/transferResume", e)
                                    }))) : "全部暂停" === e && (i = "all_pause", Object.keys(n).map((function (e) {
                                        return n[e]
                                    })).forEach((function (e) {
                                        Q.$store.dispatch("local-upload/transferPause", e)
                                    })));
                                case 113:
                                    i && this.$eventTrack("transmission_list_rk_click", {
                                        click_id: i,
                                        tab: "local_upload"
                                    }), t.next = 117;
                                    break;
                                case 116:
                                    "download" === this.activeKey && (["全部暂停", "暂停"].includes(e) ? (i = {
                                        "全部暂停": "all_pause",
                                        "暂停": "pause"
                                    }[e], w = Object.keys(n).map((function (e) {
                                        return n[e]
                                    })), I = w.map((function (e) {
                                        return e.taskId
                                    })), this.$store.dispatch("retrieval-list/batchStop", {
                                        taskIds: I,
                                        stopReason: B.TaskStopReason.PauseAll
                                    })) : ["开始", "全部开始"].includes(e) ? (i = {
                                        "全部开始": "all_start",
                                        "开始": "start"
                                    }[e], T = Object.keys(n).map((function (e) {
                                        return n[e]
                                    })), S = T.sort((function (e, t) {
                                        return t.createTime - e.createTime
                                    })).map((function (e) {
                                        return e.taskId
                                    })), this.$store.dispatch("retrieval-list/resume", S)) : "重试" === e ? (i = "retry", R = Object.keys(n).map((function (e) {
                                        return n[e]
                                    }))[0], this.$store.dispatch("retrieval-list/resume", [R.taskId])) : "打开" === e ? (i = "open", E = Object.keys(n).map((function (e) {
                                        return n[e]
                                    }))[0], this.dblclickRetrieved(E)) : "播放" === e ? (i = "play", F = Object.keys(n).map((function (e) {
                                        return n[e]
                                    }))[0], this.dblclickRetrieved(F)) : "打开文件目录" === e ? (i = "open_content", D = Object.keys(n).map((function (e) {
                                        return n[e]
                                    }))[0], U = D.savePath, A = D.taskName, K = D.taskId, N = D.taskType, q = N === B.TaskType.Group ? U : G.a.join(U, A), V.stat(q, (function (e, t) {
                                        return de(Q, void 0, void 0, regeneratorRuntime.mark((function t() {
                                            return regeneratorRuntime.wrap((function (t) {
                                                for (; ;) switch (t.prev = t.next) {
                                                    case 0:
                                                        if (e) {
                                                            t.next = 7;
                                                            break
                                                        }
                                                        return t.next = 3, O.a.electron.shell.__resolve();
                                                    case 3:
                                                        t.sent.showItemInFolder(q), t.next = 9;
                                                        break;
                                                    case 7:
                                                        this.$store.dispatch("retrieval-list/setFileExtras", {
                                                            taskId: K,
                                                            key: "fileExist",
                                                            val: W.fileStatus.delete
                                                        }), this.$message({
                                                            id: "openDownload",
                                                            unique: !0,
                                                            position: "middle",
                                                            type: "error",
                                                            message: "文件不存在"
                                                        });
                                                    case 9:
                                                    case"end":
                                                        return t.stop()
                                                }
                                            }), t, this)
                                        })))
                                    }))) : "清除记录" === e ? (i = "clear", H = Object.keys(n).map((function (e) {
                                        return n[e]
                                    })), Y = H.map((function (e) {
                                        return e.taskId
                                    })), this.$store.dispatch("retrieval-list/batchDelete", {
                                        taskIds: Y,
                                        deleteFile: !1
                                    })) : ["全部删除", "删除"].includes(e) ? (z = Object.keys(n).map((function (e) {
                                        return n[e]
                                    })), i = {
                                        "全部删除": "all_delete",
                                        "删除": "delete"
                                    }[e], X = ![ce.retrieving, ce.retrieving_title].includes(this.contextMenuClickPosition), Object(L.a)(M.a)({
                                        title: "删除",
                                        isShowDeleteLocal: X,
                                        danger: !0,
                                        confirmText: "删除"
                                    }).then((function (e) {
                                        var t = e.picked, n = z.map((function (e) {
                                            return e.taskId
                                        }));
                                        Q.$store.dispatch("retrieval-list/batchDelete", {
                                            taskIds: n,
                                            deleteFile: !X || t
                                        })
                                    })).catch((function () {
                                    }))) : "全选" === e && (i = "all_select", this.handleChooseAll(null, this.contextMenuClickPosition)), i && this.$eventTrack("transmission_list_rk_click", {
                                        click_id: i,
                                        tab: "getback"
                                    }));
                                case 117:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this, [[43, 52]])
                    })))
                }
            }, {
                key: "clearSelections", value: function () {
                    this.resetSelectedIdMap([])
                }
            }, {
                key: "handleClickListItem", value: function (e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = arguments.length > 3 ? arguments[3] : void 0;
                    if (this.contextMenuClickPosition !== i && (this.clearSelections(), this.contextMenuClickPosition = i), ce.uploaded_title !== i) if (ce.uploading_title !== i) if (ce.retrieving_title !== i) if (ce.retrieved_title !== i) {
                        var s = [], o = "id", r = {map: {}, lastFocusIndex: 0};
                        if ("add" === this.activeKey ? (s = this.cloudAddList, r = this.selectedInfo) : "upload" === this.activeKey ? [ce.uploaded, ce.uploaded_title].includes(this.contextMenuClickPosition) ? (s = this.uploadedTask, r = this.selectedInfo) : (s = this.uploadingTask.concat(this.filterFileFragment), r = this.selectedInfo) : "download" === this.activeKey && (o = "taskId", this.contextMenuClickPosition === ce.retrieving ? (s = this.retrievingList, r = this.selectedInfo) : (s = this.retrievedList, r = this.selectedInfo)), !n || !r.map[e[o]]) if (t.shiftKey || (r.lastFocusIndex = s.indexOf(e)), t.ctrlKey && !n) {
                            var a = r.map[e[o]], l = e[o];
                            a ? this.$delete(r.map, l) : this.$set(r.map, l, e)
                        } else if (t.shiftKey && !n) {
                            t.stopPropagation(), t.preventDefault();
                            var c = s.indexOf(e), u = Math.min(r.lastFocusIndex, c), d = Math.max(r.lastFocusIndex, c);
                            this.resetSelectedIdMap(s.slice(u, d + 1), o)
                        } else this.resetSelectedIdMap([e], o)
                    } else this.resetSelectedIdMap(this.retrievedList, "taskId"); else this.resetSelectedIdMap(this.retrievingList, "taskId"); else this.resetSelectedIdMap(this.uploadingTask.concat(this.filterFileFragment)); else this.resetSelectedIdMap(this.uploadedTask)
                }
            }, {
                key: "resetSelectedIdMap", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "id",
                        n = e.reduce((function (e, n) {
                            return e[n[t]] = n, e
                        }), Object.create(null));
                    this.$set(this.selectedInfo, "map", n)
                }
            }, {
                key: "refreshUrkTask", value: function () {
                    return this.$store.dispatch("url-task-list/ipcGetUrlTasks", {refresh: !0})
                }
            }, {
                key: "getPromotionConfig", value: function () {
                    return de(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t = this;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", Promise.all([Object(j.callServer)("GetVipLabelConfig", "v_pc_xlx_hytq_yp_cloudadd"), Object(j.callServer)("GetVipLabelConfig", "v_pc_xlx_hytq_yp_fetchspeed")]).then((function (e) {
                                        var n = Object(s.a)(e, 2), i = n[0], o = n[1];
                                        t.$sget(i, "v_pc_xlx_hytq_yp_cloudadd") instanceof Array && t.$sget(o, "v_pc_xlx_hytq_yp_fetchspeed") instanceof Array && (t.promotionConfig = {
                                            urlTask: i.v_pc_xlx_hytq_yp_cloudadd.reduce((function (e, t) {
                                                return e[t.id] = t, e
                                            }), {}),
                                            downloadTask: o.v_pc_xlx_hytq_yp_fetchspeed.reduce((function (e, t) {
                                                return e[t.id] = t, e
                                            }), {})
                                        }), Object(j.registerFunctions)(X.e, {
                                            getPromotionConfig: function (e) {
                                                return t.promotionConfig
                                            }
                                        })
                                    })));
                                case 1:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }
            }, {
                key: "judgePromotionShow", value: function () {
                    if (!this.isSuperV) try {
                        var e = (new Intl.DateTimeFormat).format(Date.now()),
                            t = JSON.parse(window.localStorage.getItem("promotionConfig".concat(this.userId)) || "{}"),
                            n = this.$sget(t, e, "urlTask"), i = this.$sget(t, e, "downloadTask"),
                            s = this.$sget(this.promotionConfig, "urlTask", "xgt_times", "text") || 3,
                            o = this.$sget(this.promotionConfig, "downloadTask", "xgt_times", "text") || 3;
                        this.urlTaskRemainPromotionCount = "number" == typeof n ? n : Number(s), this.downloadRemainPromotionCount = "number" == typeof i ? i : Number(o), this.showUrlTaskPromotion = this.urlTaskRemainPromotionCount > 0 && this.topSpeedCloudConfig, this.showDownloadPromotion = this.downloadRemainPromotionCount > 0
                    } catch (e) {
                        console.error(e, "judgePromotionShow 出错")
                    }
                }
            }, {
                key: "handlePromotionClose", value: function (e) {
                    if ("urlTask" === e) {
                        this.showUrlTaskPromotion = !1;
                        var t = (new Intl.DateTimeFormat).format(Date.now());
                        window.localStorage.setItem("promotionConfig".concat(this.userId), JSON.stringify(Object(i.a)({}, t, {
                            urlTask: this.urlTaskRemainPromotionCount - 1,
                            downloadTask: this.downloadRemainPromotionCount
                        })))
                    } else {
                        this.showDownloadPromotion = !1;
                        var n = (new Intl.DateTimeFormat).format(Date.now());
                        window.localStorage.setItem("promotionConfig".concat(this.userId), JSON.stringify(Object(i.a)({}, n, {
                            urlTask: this.urlTaskRemainPromotionCount,
                            downloadTask: this.downloadRemainPromotionCount - 1
                        })))
                    }
                }
            }, {
                key: "mounted", value: function () {
                    return de(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        var t, n = this;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return S.log.info("transfer", "当前进程的pid", process.pid), Object(j.registerFunctions)(X.e, {
                                        switchTab: function (e, t, i, s) {
                                            n.activeKey = t, i && n.highlightTasks(t, i), n.tabShowReportFunc(t, s)
                                        }, getCurrentTab: function (e) {
                                            return n.activeKey
                                        }
                                    }), this.$store.dispatch("local-upload/initTransfer"), this.$store.dispatch("url-task-list/initTransfer"), e.next = 7, Promise.all([this.$store.dispatch("local-upload/transferSyncLocalUploadStore"), this.$store.dispatch("url-task-list/syncUrlTaskStore"), this.$store.dispatch("retrieval-list/init", "transfer").catch((function (e) {
                                        console.error("retrieval-list/init", e)
                                    }))]).catch((function () {
                                        window.$nuxt.error({message: "出错了", statusCode: 0})
                                    }));
                                case 7:
                                    if ((t = this.$route.query.tab) ? (this.activeKey = t, this.$route.query.id && this.highlightTasks(t, this.$route.query.id.split(","))) : 0 == (this.numberOfCloudAddNotFinish | this.numberOfUploading | this.numberOfRetriving) || this.numberOfCloudAddNotFinish > 0 ? this.activeKey = "add" : this.numberOfUploading > 0 ? this.activeKey = "upload" : this.activeKey = "download", !this.cloudEmpty) {
                                        e.next = 14;
                                        break
                                    }
                                    return e.next = 12, this.$store.dispatch("url-task-list/ipcGetUrlTasks", {refresh: !0}).then((function () {
                                        n.dataStatus.add = "ok"
                                    })).catch((function () {
                                        n.dataStatus.add = "error", n.$refs.urlTaskContent && Object(z.a)({
                                            props: {
                                                closeButton: !1,
                                                message: "内容加载失败，请重试"
                                            }, ref: n.$refs.urlTaskContent
                                        })
                                    }));
                                case 12:
                                    e.next = 15;
                                    break;
                                case 14:
                                    this.dataStatus.add = "ok";
                                case 15:
                                    this.$nextTick((function () {
                                        n.isLoadMoreUrlTaskShow = !0
                                    })), this.redPointShowFunc(), document.addEventListener("visibilitychange", this.redPointShowFunc, !1), this.getPromotionConfig().then((function () {
                                        n.judgePromotionShow()
                                    }));
                                case 19:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })))
                }
            }, {
                key: "redPointShowFunc", value: function () {
                    var e = this;
                    document.hidden || this.tabs.forEach((function (t) {
                        t.key !== e.activeKey && e.tabRunningTask(t.key) > 0 && (e.redPointShow[t.key] = !0)
                    }))
                }
            }, {
                key: "highlightTasks", value: function (e, t) {
                    var n = this, i = [],
                        s = {add: this.cloudAddList, upload: this.uploadingTask, download: this.retrievingList},
                        o = "id";
                    t.forEach((function (t) {
                        var r;
                        "download" === e ? (o = "taskId", r = s[n.activeKey].findIndex((function (e) {
                            return e.taskId === Number(t)
                        }))) : r = s[n.activeKey].findIndex((function (e) {
                            return e.id === t
                        })), r > -1 && i.push(r)
                    })), i.length > 0 && this.resetSelectedIdMap(i.map((function (e) {
                        return s[n.activeKey][e]
                    })), o)
                }
            }, {
                key: "beforeDestroy", value: function () {
                    this.$store.dispatch("retrieval-list/clearListener"), this.$store.dispatch("url-task-list/clearTransfer"), document.removeEventListener("visibilitychange", this.redPointShowFunc)
                }
            }, {
                key: "onActiveKeyChange", value: function (e) {
                    this.tabShowReport[e](e)
                }
            }, {
                key: "tabShowReportFunc", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = {
                        add: {tab: "yun_add", is_blank: this.cloudEmpty ? 1 : 0},
                        upload: {tab: "local_upload", is_blank: this.uploadEmpty ? 1 : 0},
                        download: {tab: "getback", is_blank: this.retrievalEmpty ? 1 : 0}
                    }[e];
                    n.from = t || this.$route.query.from || "", this.$eventTrack("transmission_tab_show", n)
                }
            }, {
                key: "loadMoreUrlTask", value: function () {
                    return this.$store.dispatch("url-task-list/ipcGetUrlTasks")
                }
            }, {
                key: "close", value: function () {
                    return de(this, void 0, void 0, regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, O.a.getCurrentWindow().__resolve();
                                case 2:
                                    e.sent.hide();
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }
            }, {
                key: "openServiceAgreement", value: function () {
                    Object(j.callServer)("OpenNewTab", "https://pan.xunlei.com/privacy")
                }
            }, {
                key: "closeAgreement", value: function () {
                    window.localStorage.setItem("isShowUrlAddAgreement", "1"), this.isShowAgreement = !1
                }
            }, {
                key: "topSpeedCloudConfig", get: function () {
                    return this.$store.state["url-task-list"].cloudAddGlobalConfig.cloudAddGlobalConfig
                }
            }, {
                key: "userId", get: function () {
                    return this.$store.state.users.curUser.userId
                }
            }, {
                key: "showVipClass", get: function () {
                    return this.isVip && "download" === this.activeKey
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
                key: "filterFileFragment", get: function () {
                    var e = this;
                    return this.fileFragment.filter((function (t) {
                        return !e.localUploadFileIds.includes(t.id)
                    }))
                }
            }, {
                key: "localUploadFileIds", get: function () {
                    return this.uploadingTask.reduce((function (e, t) {
                        return t.fileId && e.push(t.fileId), e
                    }), [])
                }
            }, {
                key: "cloudEmpty", get: function () {
                    return 0 === this.cloudAddListLength && !this.cloudIsHasMore
                }
            }, {
                key: "uploadEmpty", get: function () {
                    return 0 === this.uploadingTask.length && 0 === this.uploadedTaskLength && 0 === this.filterFileFragment.length
                }
            }, {
                key: "retrievalEmpty", get: function () {
                    return 0 === this.retrievingList.length && 0 === this.retrievedList.length
                }
            }, {
                key: "cloudAddListLength", get: function () {
                    return this.cloudAddList.length
                }
            }, {
                key: "uploadedTaskLength", get: function () {
                    return this.uploadedTask.length
                }
            }, {
                key: "runningUrlTask", get: function () {
                    return this.$store.getters["url-task-list/runningTaskNum"]
                }
            }, {
                key: "runningDownloadTask", get: function () {
                    return this.$store.getters["retrieval-list/runningTaskNum"]
                }
            }]), n
        }(f.Vue);
        ue([Object(f.Watch)("activeKey")], he.prototype, "onActiveKeyChange", null);
        var fe = he = ue([Object(f.Component)({
            name: "Transfer",
            head: {title: "传输列表"},
            mixins: [oe.a],
            components: {TransferItem: T.a, TransferContextMenu: w, FileFragment: N, TrashConfirmDialog: P.a},
            data: function () {
                return {fileStatus: W.fileStatus, thunderPng: h.a}
            },
            computed: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Object(Q.c)("url-task-list", {
                cloudAddList: "urlTasks",
                numberOfCloudAddNotFinish: "runningTaskNum"
            })), Object(Q.c)("local-upload", {
                uploadingTask: "uploadingTask",
                uploadedTask: "uploadedTask",
                numberOfUploading: "runningTaskNum"
            })), Object(Q.c)("retrieval-list", {
                retrievedList: "retrievedList",
                numberOfRetriving: "runningTaskNum",
                retrievingList: "retrievingList"
            })), Object(Q.e)("local-upload", {
                fileFragment: "fileFragment",
                totalUploadedCount: "totalUploadedCount",
                isHasMoreUploaded: "isHasMoreUploaded"
            })), Object(Q.e)("url-task-list", {cloudIsHasMore: "isHasMore"})),
            methods: Object.assign({}, Object(Q.b)("local-upload", {transferGetMoreUploaded: "transferGetMoreUploaded"}))
        })], he), pe = (n(1417), Object(C.a)(fe, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", [n("td-dialog", {
                attrs: {
                    "custom-class": [e.showVipClass ? "is-vip" : "", "xly-transport"],
                    visible: !0,
                    "footer-enabled": !1
                }, on: {close: e.close}
            }, [n("TransferContextMenu", {
                attrs: {
                    "is-out-of-context-menu": e.isOutOfContextMenu,
                    "click-position": e.clickPosition,
                    visible: e.contextMenuVisible,
                    "menu-item-list": e.menuItemList
                }, on: {
                    "update:isOutOfContextMenu": function (t) {
                        e.isOutOfContextMenu = t
                    }, "update:is-out-of-context-menu": function (t) {
                        e.isOutOfContextMenu = t
                    }, "update:visible": function (t) {
                        e.contextMenuVisible = t
                    }, clickItem: e.handleClickContextMenuItem
                }
            }), e._v(" "), n("td-tabs", {
                attrs: {tabs: e.tabs, "active-key": e.activeKey, id: "tab_title"},
                on: {
                    "update:activeKey": function (t) {
                        e.activeKey = t
                    }, "update:active-key": function (t) {
                        e.activeKey = t
                    }
                },
                scopedSlots: e._u([{
                    key: "title", fn: function (t) {
                        var i = t.tab;
                        return n("div", {
                            on: {
                                click: function (t) {
                                    e.redPointShow[i.key] = !1
                                }
                            }
                        }, [e.tabRunningTask(i.key) > 0 && e.redPointShow[i.key] ? n("i", {staticClass: "xly-tab-point"}) : e._e(), e._v("\n        " + e._s(i.title) + "\n      ")])
                    }
                }, {
                    key: "default", fn: function (t) {
                        var i = t.tab;
                        return ["add" === i.key ? n("div", {
                            ref: "urlTaskContent",
                            staticClass: "xly-transport__content xly-transport__content--add"
                        }, [e.isShowAgreement ? n("div", {staticClass: "xly-netdisk-note xly-netdisk-note--agreement"}, [n("p", {staticClass: "xly-netdisk-note__text"}, [e._v("\n              此云盘为您的私人云盘，请严格遵循"), n("a", {
                            staticClass: "xly-netdisk-note__link",
                            attrs: {href: "javascript:;"},
                            on: {
                                click: function (t) {
                                    return t.stopPropagation(), e.openServiceAgreement(t)
                                }
                            }
                        }, [e._v("服务协议")]), e._v("，严禁存放，传输任何涉密、色情、暴力、侵权等违法内容。\n            ")]), e._v(" "), n("span", {
                            staticClass: "xly-netdisk-note__close",
                            attrs: {title: "关闭"},
                            on: {
                                click: function (t) {
                                    return t.stopPropagation(), e.closeAgreement(t)
                                }
                            }
                        }, [n("i", {staticClass: "xly-icon-close"})])]) : e._e(), e._v(" "), e.cloudEmpty ? e._e() : n("ul", {
                            staticClass: "xly-transport__items",
                            style: {"user-select": e.shiftKeyDown ? "none" : "initial"},
                            attrs: {tabindex: "0"},
                            on: {
                                keydown: [function (t) {
                                    return (t.type.indexOf("key") || 65 === t.keyCode) && t.ctrlKey ? e.handleChooseAll(t, "add") : null
                                }, function (t) {
                                    if (!t.shiftKey) return null;
                                    e.shiftKeyDown = !0
                                }], keyup: function (t) {
                                    if (!t.type.indexOf("key") && 16 !== t.keyCode) return null;
                                    e.shiftKeyDown = !1
                                }
                            }
                        }, [e._l(e.cloudAddList, (function (t, i) {
                            return n("TransferItem", {
                                key: t.id,
                                staticClass: "xly-transport__item",
                                class: {"is-chosen": e.selectedInfo.map[t.id], "is-disabled": e.isDisable(t)},
                                attrs: {
                                    "promotion-config": e.promotionConfig,
                                    "show-promotion": e.needShowUrlTaskPromotion(i),
                                    task: t,
                                    type: "urlTask",
                                    idx: i
                                },
                                on: {
                                    "promotion-close": function (t) {
                                        return e.handlePromotionClose("urlTask")
                                    }
                                },
                                nativeOn: {
                                    click: function (n) {
                                        return e.handleClickListItem(t, n, !1, "add")
                                    }, contextmenu: function (n) {
                                        return e.handleContextMenu(t, n, "add")
                                    }, dblclick: function (n) {
                                        e.dblclickCloudAdd(t, i), e.$eventTrack("transmission_list_file_click", {
                                            file_type: t.status_size > 0 ? "bt_floder" : "single_file",
                                            tab: "yun_add"
                                        })
                                    }
                                }
                            })
                        })), e._v(" "), e.isLoadMoreUrlTaskShow ? n("div", {
                            directives: [{
                                name: "load",
                                rawName: "v-load",
                                value: {func: e.loadMoreUrlTask, root: e.$refs.urlTaskContent, distance: "20px"},
                                expression: "{ func: loadMoreUrlTask, root: $refs['urlTaskContent'], distance: '20px' }"
                            }]
                        }) : e._e()], 2), e._v(" "), e.cloudEmpty && "ok" === e.dataStatus.add ? n("div", {
                            staticClass: "xly-transport__empty",
                            staticStyle: {height: "100%"}
                        }, [n("div", {staticClass: "xly-img-empty-netdisk"}), e._v(" "), n("p", [e._v("暂无添加记录")])]) : e._e()]) : e._e(), e._v(" "), "upload" === i.key ? n("div", {
                            ref: "localContent",
                            staticClass: "xly-transport__content xly-transport__content--upload"
                        }, [e.uploadEmpty ? e._e() : n("div", [e.uploadingTask.length + e.filterFileFragment.length > 0 ? n("div", {
                            staticClass: "xly-transport__title",
                            on: {
                                contextmenu: function (t) {
                                    return e.handleContextMenu(null, t, "uploading_title")
                                }
                            }
                        }, [n("h3", [e._v("正在上传(" + e._s(e.uploadingTask.length + e.filterFileFragment.length) + ")")]), e._v(" "), n("div", {staticClass: "xly-transport__operate"}, [n("a", {
                            attrs: {
                                href: "javascript:;",
                                title: "更多操作"
                            }
                        }, [n("i", {
                            staticClass: "xly-icon-more", on: {
                                click: function (t) {
                                    return e.handleContextMenu(null, t, "uploading_title")
                                }
                            }
                        })])])]) : e._e(), e._v(" "), n("ul", {
                            staticClass: "xly-transport__items",
                            style: {"user-select": e.shiftKeyDown ? "none" : "initial"},
                            attrs: {tabindex: "0"},
                            on: {
                                keydown: [function (t) {
                                    if (!t.shiftKey) return null;
                                    e.shiftKeyDown = !0
                                }, function (t) {
                                    return (t.type.indexOf("key") || 65 === t.keyCode) && t.ctrlKey ? e.handleChooseAll(t, "uploading") : null
                                }], keyup: function (t) {
                                    if (!t.type.indexOf("key") && 16 !== t.keyCode) return null;
                                    e.shiftKeyDown = !1
                                }
                            }
                        }, [e._l(e.uploadingTask, (function (t) {
                            return n("TransferItem", {
                                key: t.id,
                                staticClass: "xly-transport__item",
                                class: {"is-chosen": e.selectedInfo.map[t.id] && "uploading_title" !== e.contextMenuClickPosition},
                                attrs: {task: t, type: "localTask"},
                                nativeOn: {
                                    click: function (n) {
                                        return e.handleClickListItem(t, n, !1, "uploading")
                                    }, contextmenu: function (n) {
                                        return e.handleContextMenu(t, n, "uploading")
                                    }
                                }
                            })
                        })), e._v(" "), e._l(e.filterFileFragment, (function (t) {
                            return n("li", {
                                key: t.id,
                                staticClass: "xly-transport__item",
                                class: {"is-chosen": e.selectedInfo.map[t.id] && "uploading_title" !== e.contextMenuClickPosition},
                                on: {
                                    click: function (n) {
                                        return e.handleClickListItem(t, n, !1, "uploading")
                                    }, contextmenu: function (n) {
                                        return e.handleContextMenu(t, n, "uploading")
                                    }
                                }
                            }, [n("FileFragment", {attrs: {file: t}})], 1)
                        }))], 2), e._v(" "), e.uploadedTask.length > 0 ? n("div", {
                            staticClass: "xly-transport__title",
                            on: {
                                contextmenu: function (t) {
                                    return e.handleContextMenu(null, t, "uploaded_title")
                                }
                            }
                        }, [n("h3", [e._v("上传完成(" + e._s(e.totalUploadedCount) + ")")]), e._v(" "), n("div", {staticClass: "xly-transport__operate"}, [n("a", {
                            attrs: {
                                href: "javascript:;",
                                title: "更多操作"
                            }
                        }, [n("i", {
                            staticClass: "xly-icon-more", on: {
                                click: function (t) {
                                    return e.handleContextMenu(null, t, "uploaded_title")
                                }
                            }
                        })])])]) : e._e(), e._v(" "), n("ul", {
                            staticClass: "xly-transport__items",
                            style: {"user-select": e.shiftKeyDown ? "none" : "initial"},
                            attrs: {tabindex: "0"},
                            on: {
                                keydown: [function (t) {
                                    if (!t.shiftKey) return null;
                                    e.shiftKeyDown = !0
                                }, function (t) {
                                    return (t.type.indexOf("key") || 65 === t.keyCode) && t.ctrlKey ? e.handleChooseAll(t, "uploaded") : null
                                }], keyup: function (t) {
                                    if (!t.type.indexOf("key") && 16 !== t.keyCode) return null;
                                    e.shiftKeyDown = !1
                                }
                            }
                        }, e._l(e.uploadedTask, (function (t) {
                            return n("TransferItem", {
                                key: t.id,
                                staticClass: "xly-transport__item",
                                class: {
                                    "is-chosen": e.selectedInfo.map[t.id] && "uploaded_title" !== e.contextMenuClickPosition,
                                    "is-disabled": "0" === t.localFileExist && t.driveFileExist === e.fileStatus.delete
                                },
                                attrs: {task: t, type: "localTask"},
                                nativeOn: {
                                    click: function (n) {
                                        return e.handleClickListItem(t, n, !1, "uploaded")
                                    }, contextmenu: function (n) {
                                        return e.handleContextMenu(t, n, "uploaded")
                                    }, dblclick: function (n) {
                                        e.dblclickUpload(t), e.$eventTrack("transmission_list_file_click", {
                                            file_type: "single_file",
                                            tab: "local_upload",
                                            is_safeboxfile: t.isInSafe
                                        })
                                    }
                                }
                            })
                        })), 1), e._v(" "), e.isHasMoreUploaded ? n("div", {
                            directives: [{
                                name: "load",
                                rawName: "v-load",
                                value: {func: e.transferGetMoreUploaded, root: e.$refs.localContent, distance: "20px"},
                                expression: "{func: transferGetMoreUploaded, root: $refs['localContent'], distance: '20px' }"
                            }]
                        }) : e._e()]), e._v(" "), e.uploadEmpty ? n("div", {
                            staticClass: "xly-transport__empty",
                            staticStyle: {height: "100%"}
                        }, [n("div", {staticClass: "xly-img-empty-netdisk"}), e._v(" "), n("p", [e._v("暂无上传记录")])]) : e._e()]) : "download" === i.key ? n("div", {staticClass: "xly-transport__content xly-transport__content--upload"}, [e.retrievalEmpty ? e._e() : n("div", [e.retrievingList.length > 0 ? n("div", {
                            staticClass: "xly-transport__title",
                            on: {
                                contextmenu: function (t) {
                                    return e.handleContextMenu(null, t, "retrieving_title")
                                }
                            }
                        }, [n("h3", [e._v("正在下载(" + e._s(e.retrievingList.length) + ")")]), e._v(" "), e.isVip = 1 ? n("div", {staticClass: "xly-transport__title-tips"}, [n("img", {attrs: {src: e.thunderPng}}), e._v(" 极速下载特权已开启\n              ")]) : e._e(), e._v(" "), n("div", {staticClass: "xly-transport__operate"}, [n("a", {
                            attrs: {
                                href: "javascript:;",
                                title: "更多操作"
                            }
                        }, [n("i", {
                            staticClass: "xly-icon-more", on: {
                                click: function (t) {
                                    return e.handleContextMenu(null, t, "retrieving_title")
                                }
                            }
                        })])])]) : e._e(), e._v(" "), n("ul", {
                            staticClass: "xly-transport__items",
                            style: {"user-select": e.shiftKeyDown ? "none" : "initial"},
                            attrs: {tabindex: "0"},
                            on: {
                                keydown: [function (t) {
                                    return (t.type.indexOf("key") || 65 === t.keyCode) && t.ctrlKey ? e.handleChooseAll(t, "retrieving") : null
                                }, function (t) {
                                    if (!t.shiftKey) return null;
                                    e.shiftKeyDown = !0
                                }], keyup: function (t) {
                                    if (!t.type.indexOf("key") && 16 !== t.keyCode) return null;
                                    e.shiftKeyDown = !1
                                }
                            }
                        }, e._l(e.retrievingList, (function (t, i) {
                            return n("TransferItem", {
                                key: t.taskId,
                                staticClass: "xly-transport__item",
                                class: {"is-chosen": e.selectedInfo.map[t.taskId] && "retrieving_title" !== e.contextMenuClickPosition},
                                attrs: {
                                    "promotion-config": e.promotionConfig,
                                    "show-promotion": e.showDownloadPromotion && 0 === i && !e.isVip && e.runningDownloadTask > 0,
                                    task: t,
                                    type: "downloadTask",
                                    idx: i
                                },
                                on: {
                                    "promotion-close": function (t) {
                                        return e.handlePromotionClose("downloadTask")
                                    }
                                },
                                nativeOn: {
                                    click: function (n) {
                                        return e.handleClickListItem(t, n, !1, "retrieving")
                                    }, contextmenu: function (n) {
                                        return e.handleContextMenu(t, n, "retrieving")
                                    }
                                }
                            })
                        })), 1), e._v(" "), e.retrievedList.length > 0 ? n("div", {
                            staticClass: "xly-transport__title",
                            on: {
                                contextmenu: function (t) {
                                    return e.handleContextMenu(null, t, "retrieved_title")
                                }
                            }
                        }, [n("h3", [e._v("下载完成(" + e._s(e.retrievedList.length) + ")")]), e._v(" "), n("div", {staticClass: "xly-transport__operate"}, [n("a", {
                            attrs: {
                                href: "javascript:;",
                                title: "更多操作"
                            }
                        }, [n("i", {
                            staticClass: "xly-icon-more", on: {
                                click: function (t) {
                                    return e.handleContextMenu(null, t, "retrieved_title")
                                }
                            }
                        })])])]) : e._e(), e._v(" "), n("ul", {
                            staticClass: "xly-transport__items",
                            style: {"user-select": e.shiftKeyDown ? "none" : "initial"},
                            attrs: {tabindex: "0"},
                            on: {
                                keydown: [function (t) {
                                    return (t.type.indexOf("key") || 65 === t.keyCode) && t.ctrlKey ? e.handleChooseAll(t, "retrieved") : null
                                }, function (t) {
                                    if (!t.shiftKey) return null;
                                    e.shiftKeyDown = !0
                                }], keyup: function (t) {
                                    if (!t.type.indexOf("key") && 16 !== t.keyCode) return null;
                                    e.shiftKeyDown = !1
                                }
                            }
                        }, e._l(e.retrievedList, (function (t) {
                            return n("TransferItem", {
                                key: t.taskId,
                                staticClass: "xly-transport__item",
                                class: {
                                    "is-chosen": e.selectedInfo.map[t.taskId] && "retrieved_title" !== e.contextMenuClickPosition,
                                    "is-disabled": t.fileExist === e.fileStatus.delete
                                },
                                attrs: {task: t, type: "downloadTask"},
                                nativeOn: {
                                    click: function (n) {
                                        return e.handleClickListItem(t, n, !1, "retrieved")
                                    }, contextmenu: function (n) {
                                        return e.handleContextMenu(t, n, "retrieved")
                                    }, dblclick: function (n) {
                                        e.dblclickRetrieved(t), e.$eventTrack("transmission_list_file_click", {
                                            file_type: "single_file",
                                            tab: "getback",
                                            is_safeboxfile: t.isInSafe
                                        })
                                    }
                                }
                            })
                        })), 1)]), e._v(" "), e.retrievalEmpty ? n("div", {
                            staticClass: "xly-transport__empty",
                            staticStyle: {height: "100%"}
                        }, [n("div", {staticClass: "xly-img-empty-netdisk"}), e._v(" "), n("p", [e._v("暂无下载记录")])]) : e._e()]) : e._e()]
                    }
                }])
            })], 1), e._v(" "), n("nuxt-child")], 1)
        }), [], !1, null, null, null));
        t.default = pe.exports
    }
}]);