module.exports = function (t) {
    var e = {};

    function i(n) {
        if (e[n]) return e[n].exports;
        var r = e[n] = {i: n, l: !1, exports: {}};
        return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }

    return i.m = t, i.c = e, i.d = function (t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
    }, i.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, i.t = function (t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var r in t) i.d(n, r, function (e) {
            return t[e]
        }.bind(null, r));
        return n
    }, i.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 22)
}([function (t, e, i) {
    "use strict";
    var n = this && this.__awaiter || function (t, e, i, n) {
        return new (i || (i = Promise))(function (r, s) {
            function o(t) {
                try {
                    l(n.next(t))
                } catch (t) {
                    s(t)
                }
            }

            function a(t) {
                try {
                    l(n.throw(t))
                } catch (t) {
                    s(t)
                }
            }

            function l(t) {
                t.done ? r(t.value) : new i(function (e) {
                    e(t.value)
                }).then(o, a)
            }

            l((n = n.apply(t, e || [])).next())
        })
    };
    Object.defineProperty(e, "__esModule", {value: !0});
    const r = i(3), s = i(27), o = i(18), a = i(17);

    function l(t) {
        a.information("on object freeer"), global.__xdasIPCClienInstance.notifyFreer(t.remoteId, t.callbackId)
    }

    let c = void 0;
    global.__xdasIPCClienInstance || (global.__xdasIPCClienInstance = new class extends r.EventEmitter {
        constructor() {
            super(), this.rid = 0, this.apis = {}, this.singletonMap = {}, this.connectedMap = {}, this.retCallbackMap = {}, this.eventCallbackMaps = {}, this.contextCallbackMap = {}
        }

        start(t, e, i, n) {
            do {
                if (e || (e = o.getDefaultPrex()), this.singletonMap.hasOwnProperty(e.toLowerCase())) {
                    if (n) if (this.connectedMap.hasOwnProperty(e.toLowerCase())) n("connect"); else {
                        let t = this.singletonMap[e.toLowerCase()];
                        t.on("error", t => {
                            n("error", t)
                        }), t.on("connect", () => {
                            n("connect")
                        }), t.on("end", () => {
                            let e = t.isInprocess();
                            n("end", t.getContext(), i, e)
                        })
                    }
                    break
                }
                if (global.__xdasPluginConfig && global.__xdasPluginConfig.name ? t = {
                    name: global.__xdasPluginConfig.name,
                    version: global.__xdasPluginConfig.version
                } : void 0 !== t && null !== t || (t = this.parseContext()), !t) {
                    if (!this.client || !this.client.getContext()) throw new Error("no suitable context for client, please specify context with start function");
                    t = {name: this.client.getContext().name, version: this.client.getContext().version}
                }
                if (t.name === o.serverContextName) throw new Error("client context must difference from server");
                if (i && !this.client) throw new Error("connect to other product must start self firstly");
                global.__xdasPluginConfig || (global.__xdasPluginConfig = t);
                let r = new s.Client({context: t, socketPrex: e});
                this.singletonMap[e.toLowerCase()] = r, i || (this.client = r), r.on("message", t => {
                    if ("fire_event" === t.action) this.fireServerEvent(r, t.name, [t.__context].concat(t.args)); else if ("client_context_freer" === t.action) do {
                        let e = t.rid;
                        if (e) {
                            if (!this.contextCallbackMap[e]) break;
                            delete this.contextCallbackMap[e]
                        }
                    } while (0); else if ("call_client_by_id" === t.action) this.callFunctionById(r, t.rid, t.s_rid, t.args); else if ("call_client_api" === t.action) this.callRegisterFunction(r, t); else if ("check_client_function" === t.action) {
                        let e = t.method, i = !0;
                        e && this.apis && this.apis[e] || (i = !1), this.sendAdapter(r, {
                            s_rid: t.s_rid,
                            action: "check_client_function_callback",
                            success: !0,
                            data: i
                        })
                    } else if (void 0 !== t.success && null !== t.success) {
                        let e = t;
                        this.client === r && this.emit("stat_call_function_back", r.getContext(), t);
                        const i = this.retCallbackMap[e.rid].callback;
                        if (i) if (e.success) do {
                            if ("remote_client_callback" === t.action && t.__context && t.__context.name && t.__context.productId) {
                                let n = `${t.__context.productId}-${t.__context.name}`.toLowerCase();
                                i(null, this.decodeParameter(e.data, n));
                                break
                            }
                            i(null, e.data)
                        } while (0); else i(e.error, e.data);
                        delete this.retCallbackMap[e.rid]
                    }
                }), r.on("error", t => {
                    n && n("error", t), this.emit("socket-error", t, r.getContext(), i, r.isInprocess()), delete this.singletonMap[e.toLowerCase()], delete this.connectedMap[e.toLowerCase()], i || (this.client = null)
                }), r.isInprocess() ? (this.connectedMap[e.toLowerCase()] = r, n && n("connect"), this.emit("connect", r.getContext(), i, !0)) : r.on("connect", () => {
                    this.connectedMap[e.toLowerCase()] = r, n && n("connect"), this.emit("connect", r.getContext(), i, !1)
                }), r.on("end", () => {
                    let t = r.isInprocess();
                    a.information("server is ended, and this client emit end", e, i, t), n && n("end", r.getContext(), i, t), this.emit("end", r.getContext(), i, t), delete this.singletonMap[e.toLowerCase()], delete this.connectedMap[e.toLowerCase()], i || (this.client = null)
                }), this.registry(r)
            } while (0)
        }

        registerFunctions(t) {
            do {
                if (!t) break;
                let e = void 0;
                for (let i in t) if (this.apis.hasOwnProperty(i)) {
                    e = i;
                    break
                }
                if (e) throw new Error(`try to coverd function ${e}`);
                this.apis = Object.assign({}, this.apis, t)
            } while (0)
        }

        checkServerFunction(t) {
            return n(this, void 0, void 0, function* () {
                return this.internalCheckServerFunction(this.client, t)
            })
        }

        callServerFunction(t, ...e) {
            return n(this, void 0, void 0, function* () {
                let i = null, n = yield this.callServerFunctionEx(t, ...e);
                return n && (i = n[0]), i
            })
        }

        callServerFunctionEx(t, ...e) {
            return this.internalCallServerFunctionEx(this.client, t, ...e)
        }

        isRemoteClientExist(t) {
            return this.internalIsRemoteClientExist(this.client, t)
        }

        checkRemoteFunction(t, e) {
            return this.internalCheckRemoteFunction(this.client, t, e)
        }

        callRemoteClientFunction(t, e, ...i) {
            return this.internalCallRemoteClientFunction(this.client, t, e, ...i)
        }

        notifyFreer(t, e) {
            this.sendAdapter(this.client, {action: "client_context_freer", dst: t, rid: e})
        }

        callRemoteContextById(t, e, ...i) {
            this.sendAdapter(this.client, {dst: t, action: "call_remote_context_by_id", rid: e, args: i})
        }

        attachServerEvent(t, e) {
            return this.internalAttachServerEvent(this.client, t, e)
        }

        detachServerEvent(t, e) {
            this.internalDetachServerEvent(this.client, t, e)
        }

        broadcastEvent(t, ...e) {
            this.sendAdapter(this.client, {action: "broadcast", name: t, args: e})
        }

        crossCheckServerFunction(t, e) {
            return n(this, void 0, void 0, function* () {
                {
                    if (!t) throw new Error("An argument for 'productId' was not provided");
                    let i = this.singletonMap[t.toLowerCase()];
                    if (!i) throw new Error("Please call the 'start' interface first");
                    return this.internalCheckServerFunction(i, e)
                }
            })
        }

        crossCallServerFunction(t, e, ...i) {
            return n(this, void 0, void 0, function* () {
                let n = null, r = yield this.crossCallServerFunctionEx(t, e, ...i);
                return r && (n = r[0]), n
            })
        }

        crossCallServerFunctionEx(t, e, ...i) {
            {
                if (!t) throw new Error("An argument for 'productId' was not provided");
                let n = this.singletonMap[t.toLowerCase()];
                if (!n) throw new Error("Please call the 'start' interface first");
                if (!e) throw new Error("An argument for 'funcName' was not provided");
                return this.internalCallServerFunctionEx(n, e, ...i)
            }
        }

        crossIsRemoteClientExist(t, e) {
            return n(this, void 0, void 0, function* () {
                {
                    if (!t) throw new Error("An argument for 'productId' was not provided");
                    let i = this.singletonMap[t.toLowerCase()];
                    if (!i) throw new Error("Please call the 'start' interface first");
                    return this.internalIsRemoteClientExist(i, e)
                }
            })
        }

        crossCheckRemoteFunction(t, e, i) {
            return n(this, void 0, void 0, function* () {
                {
                    if (!t) throw new Error("An argument for 'productId' was not provided");
                    let n = this.singletonMap[t.toLowerCase()];
                    if (!n) throw new Error("Please call the 'start' interface first");
                    if (!e) throw new Error("An argument for 'remoteId' was not provided");
                    if (!i) throw new Error("An argument for 'funcName' was not provided");
                    return this.internalCheckRemoteFunction(n, e, i)
                }
            })
        }

        crossCallRemoteClientFunction(t, e, i, ...n) {
            {
                if (!t) throw new Error("An argument for 'productId' was not provided");
                let r = this.singletonMap[t.toLowerCase()];
                if (!r) throw new Error("Please call the 'start' interface first");
                if (!e) throw new Error("An argument for 'remoteId' was not provided");
                if (!i) throw new Error("An argument for 'funcName' was not provided");
                return this.internalCallRemoteClientFunction(r, e, i, ...n)
            }
        }

        crossAttachServerEvent(t, e, i) {
            let n = void 0;
            {
                if (!t) throw new Error("An argument for 'productId' was not provided");
                let r = this.singletonMap[t.toLowerCase()];
                if (!r) throw new Error("Please call the 'start' interface first");
                if (!e) throw new Error("An argument for 'eventName' was not provided");
                n = this.internalAttachServerEvent(r, e, i)
            }
            return n
        }

        crossDetachServerEvent(t, e, i) {
            {
                if (!t) throw new Error("An argument for 'productId' was not provided");
                let n = this.singletonMap[t.toLowerCase()];
                if (!n) throw new Error("Please call the 'start' interface first");
                if (!e) throw new Error("An argument for 'eventName' was not provided");
                this.internalDetachServerEvent(n, e, i)
            }
        }

        crossBroadcastEvent(t, e, ...i) {
            {
                if (!t) throw new Error("An argument for 'productId' was not provided");
                let n = this.singletonMap[t.toLowerCase()];
                if (!n) throw new Error("Please call the 'start' interface first");
                if (!e) throw new Error("An argument for 'eventName' was not provided");
                this.sendAdapter(n, {
                    action: "broadcast",
                    name: e,
                    args: i,
                    __context: Object.assign({}, this.client.getContext())
                })
            }
        }

        registry(t) {
            let e = this.getFullContextName(this.client);
            return new Promise((i, n) => {
                do {
                    if (!e) {
                        i(!1);
                        break
                    }
                    let n = this.generateId();
                    const r = {alias: e, action: "register", rid: n};
                    let s = (t, n) => {
                        t ? (a.error("register error", t.message), i(n)) : i(e)
                    };
                    this.retCallbackMap[n] = Object.assign({callback: s}, r), this.sendAdapter(t, r)
                } while (0)
            })
        }

        getNow() {
            return Date.now()
        }

        sendAdapter(t, e) {
            do {
                if (!e) break;
                let i = this.getNow();
                if (e.timestamp ? e.timestamp = [...e.timestamp].concat(i) : e.timestamp = [].concat(i), !e.__context) {
                    let i = t.getContext();
                    i && (e = Object.assign({__context: i}, e))
                }
                t.isInprocess() ? (a.information("send to server in process"), global.__xdasIPCServer.emit("message", e, t)) : t.send(e)
            } while (0)
        }

        parseContext() {
            let t = void 0;
            do {
                let e = "";
                for (let t = 0; t < process.argv.length; t++) {
                    let i = process.argv[t];
                    if (0 === i.indexOf("--xdas-plugin-name=", 0)) {
                        e = i.substr("--xdas-plugin-name=".length);
                        break
                    }
                }
                if (!e) break;
                t = {name: e}
            } while (0);
            return t
        }

        generateId() {
            return this.rid++
        }

        getFullContextName(t, e) {
            let i = "";
            do {
                if (e === o.serverContextName) {
                    i = e;
                    break
                }
                if (void 0 === e) {
                    i = `${t.getContext().productId}-${t.getContext().name}`.toLowerCase();
                    break
                }
                i = `${t.getContext().productId}-${e}`.toLowerCase()
            } while (0);
            return i
        }

        internalCheckServerFunction(t, e) {
            return new Promise((i, n) => {
                do {
                    if (!t) {
                        i(!1);
                        break
                    }
                    if (!e) {
                        i(!1);
                        break
                    }
                    let n = this.generateId();
                    const r = {action: "check_server_function_exist", method: e, rid: n};
                    let s = (t, e) => {
                        i(!t && e)
                    };
                    this.retCallbackMap[n] = Object.assign({callback: s}, r), this.sendAdapter(t, r)
                } while (0)
            })
        }

        internalCallServerFunctionEx(t, e, ...i) {
            return new Promise((n, r) => {
                do {
                    if (!t) {
                        n([null, "client doesn't ready"]);
                        break
                    }
                    if (!e) {
                        n([null, "funcName is not specifed"]);
                        break
                    }
                    t === this.client && this.emit("stat_call_function", this.client.getContext(), e);
                    let r = this.generateId();
                    if (i) for (let t = 0; t < i.length; t++) i[t] = this.convertFunction2IdEx(i[t]);
                    const s = {rid: r, method: e, args: i};
                    let o = (e, i) => {
                        e ? (a.error("callServerFunction error", e, t.getContext()), n([null, e])) : n([i, void 0])
                    };
                    this.retCallbackMap[r] = Object.assign({callback: o}, s), this.sendAdapter(t, s)
                } while (0)
            })
        }

        internalIsRemoteClientExist(t, e) {
            return new Promise((i, n) => {
                do {
                    if (!e) {
                        i([!1, "remote client alias is not specifed"]);
                        break
                    }
                    if (t === this.client && e.toLowerCase() === t.getContext().name.toLowerCase()) {
                        i([!0, "self is exist"]);
                        break
                    }
                    let n = this.generateId();
                    const r = {dst: this.getFullContextName(t, e), action: "check_client_exist", rid: n};
                    let s = (t, e) => {
                        i(t ? [!1, t] : [e, "success"])
                    };
                    this.retCallbackMap[n] = Object.assign({callback: s}, r), this.sendAdapter(t, r)
                } while (0)
            })
        }

        internalCheckRemoteFunction(t, e, i) {
            return new Promise((n, r) => {
                do {
                    if (!t) {
                        n(!1);
                        break
                    }
                    if (!e) {
                        n(!1);
                        break
                    }
                    if (!i) {
                        n(!1);
                        break
                    }
                    if (t === this.client && e.toLowerCase() === t.getContext().name.toLowerCase()) {
                        n(!(!this.apis || !this.apis[i]));
                        break
                    }
                    let r = this.generateId();
                    const s = {
                        action: "check_client_function_exist",
                        method: i,
                        rid: r,
                        src: this.getFullContextName(this.client),
                        dst: this.getFullContextName(t, e)
                    };
                    let o = (t, e) => {
                        n(!t && e)
                    };
                    this.retCallbackMap[r] = Object.assign({callback: o}, s), this.sendAdapter(t, s)
                } while (0)
            })
        }

        internalCallRemoteClientFunction(t, e, i, ...n) {
            return new Promise((r, s) => {
                do {
                    if (!t) {
                        r([null, "client doesn't ready"]);
                        break
                    }
                    if (!e) {
                        r([null, "remote client alias is not specifed"]);
                        break
                    }
                    if (!i) {
                        r([null, "funcName is not specifed"]);
                        break
                    }
                    let s = (t, e) => {
                        t ? (a.information("callRemoteClientFunction", t.message), r([null, t])) : r([e, void 0])
                    };
                    if (n) for (let t = 0; t < n.length; t++) n[t] = this.convertFunction2IdEx(n[t]);
                    let o = this.generateId();
                    const l = {
                        src: this.getFullContextName(this.client),
                        dst: this.getFullContextName(t, e),
                        action: "call_remote_client_api",
                        method: i,
                        args: n,
                        rid: o
                    };
                    this.retCallbackMap[o] = Object.assign({callback: s}, l), this.sendAdapter(t, l)
                } while (0)
            })
        }

        internalAttachServerEvent(t, e, i) {
            let n = t.getContext().productId.toLowerCase();
            this.eventCallbackMaps.hasOwnProperty(n) || (this.eventCallbackMaps[n] = {}), this.eventCallbackMaps[n].hasOwnProperty(e) || (this.eventCallbackMaps[n][e] = {}), o.isObjectEmpty(this.eventCallbackMaps[n][e]) && this.sendAdapter(t, {
                action: "attach_event",
                name: e
            });
            let r = this.generateId();
            return this.eventCallbackMaps[n][e][r] = i, r
        }

        internalDetachServerEvent(t, e, i) {
            let n = t.getContext().productId.toLowerCase();
            do {
                if (!this.eventCallbackMaps.hasOwnProperty(n)) break;
                if (!this.eventCallbackMaps[n].hasOwnProperty(e)) break;
                delete this.eventCallbackMaps[n][e][i], o.isObjectEmpty(this.eventCallbackMaps[n][e]) && this.sendAdapter(t, {
                    action: "detach_event",
                    name: e
                })
            } while (0)
        }

        fireServerEvent(t, e, ...i) {
            let n = t.getContext().productId.toLowerCase();
            do {
                if (!this.eventCallbackMaps.hasOwnProperty(n)) break;
                if (!this.eventCallbackMaps[n].hasOwnProperty(e)) break;
                let t = this.eventCallbackMaps[n][e];
                for (let e in t) {
                    let n = t[e];
                    n && n.apply(null, ...i)
                }
            } while (0)
        }

        callFunctionById(t, e, i, ...n) {
            let r = void 0, s = !1;
            do {
                const o = this.contextCallbackMap[e];
                if (!o) {
                    a.error("the context function has been freeer", e), r = {
                        s_rid: i,
                        action: "call_client_by_id_callback",
                        success: !1,
                        error: "the context function has been freeer"
                    };
                    break
                }
                let l = void 0, c = void 0;
                try {
                    l = o.apply(null, ...n)
                } catch (t) {
                    c = t.message;
                    break
                }
                if (void 0 === i || null === i) break;
                if (r = {s_rid: i, action: "call_client_by_id_callback", success: !1}, void 0 !== c) {
                    r.error = c;
                    break
                }
                if (l && l.then) {
                    l.then(e => {
                        r.data = this.convertFunction2IdEx(e), r.success = !0, this.sendAdapter(t, r)
                    }).catch(e => {
                        r.error = e instanceof Error ? e.message : e, this.sendAdapter(t, r)
                    }), s = !0;
                    break
                }
                r.success = !0, r.data = this.convertFunction2IdEx(l)
            } while (0);
            !s && r && this.sendAdapter(t, r)
        }

        convertFunction2IdEx(t) {
            let e = t;
            if ("function" == typeof t) {
                let i = this.generateId();
                this.contextCallbackMap[i] = t, e = {"__nodeipc_callback_id__{A9C9D760-14E8-42CB-A3CB-9C0A0DDFD732}": i}
            } else if (t && "object" == typeof t) {
                e = Array.isArray(t) ? [...t] : Object.assign({}, t);
                for (let t in e) {
                    let i = e[t];
                    if ("function" == typeof i) {
                        let n = this.generateId();
                        this.contextCallbackMap[n] = i, e[t] = {"__nodeipc_callback_id__{A9C9D760-14E8-42CB-A3CB-9C0A0DDFD732}": n}
                    } else i && "object" == typeof i && (e[t] = this.convertFunction2IdEx(i))
                }
            }
            return e
        }

        decodeParameter(t, e) {
            let i = t;
            do {
                if (!t) break;
                if (!e) break;
                if ("object" != typeof t) break;
                let n = t["__nodeipc_callback_id__{A9C9D760-14E8-42CB-A3CB-9C0A0DDFD732}"];
                if (n) {
                    i = ((...t) => {
                        this.callRemoteContextById(e, n, ...t)
                    }), global.__xdasObjectLiftMonitor && global.__xdasObjectLiftMonitor.setObjectFreer(i, {
                        remoteId: e,
                        callbackId: n
                    }, l);
                    break
                }
                for (let i in t) {
                    let n = t[i];
                    t[i] = this.decodeParameter(n, e)
                }
            } while (0);
            return i
        }

        callRegisterFunction(t, e) {
            let i = void 0, n = !1;
            do {
                if (!e) break;
                let r = e.method;
                if (!r) break;
                let s = this.getNow();
                if (i = {
                    s_rid: e.s_rid,
                    action: "remote_client_callback",
                    success: !1,
                    rid: e.rid,
                    method: e.method,
                    src: e.src,
                    timestamp: e.timestamp ? e.timestamp.concat(s) : [].concat(s)
                }, !this.apis || !this.apis[r]) {
                    i.error = `callRegisterFunction ${r} is undefined`;
                    break
                }
                let o = void 0, a = this.decodeParameter(e.args, e.src);
                try {
                    o = this.apis[r].apply(null, [e.src].concat(a))
                } catch (t) {
                    i.error = t.message;
                    break
                }
                if (o && o.then) {
                    o.then(e => {
                        i.data = this.convertFunction2IdEx(e), i.success = !0, this.sendAdapter(t, i)
                    }).catch(e => {
                        i.error = e instanceof Error ? e.message : e, this.sendAdapter(t, i)
                    }), n = !0;
                    break
                }
                i.success = !0, i.data = this.convertFunction2IdEx(o)
            } while (0);
            a.information("callRegisterFunction", i), !n && i && this.sendAdapter(t, i)
        }
    }), c = global.__xdasIPCClienInstance, e.client = c
}, function (t, e, i) {
    t.exports = i(10)(56)
}, function (t, e, i) {
    "use strict";

    function n(t, e, i, n, r, s, o, a) {
        var l, c = "function" == typeof t ? t.options : t;
        if (e && (c.render = e, c.staticRenderFns = i, c._compiled = !0), n && (c.functional = !0), s && (c._scopeId = "data-v-" + s), o ? (l = function (t) {
            (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), r && r.call(this, t), t && t._registeredComponents && t._registeredComponents.add(o)
        }, c._ssrRegister = l) : r && (l = a ? function () {
            r.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot)
        } : r), l) if (c.functional) {
            c._injectStyles = l;
            var u = c.render;
            c.render = function (t, e) {
                return l.call(e), u(t, e)
            }
        } else {
            var d = c.beforeCreate;
            c.beforeCreate = d ? [].concat(d, l) : [l]
        }
        return {exports: t, options: c}
    }

    i.d(e, "a", function () {
        return n
    })
}, function (t, e) {
    t.exports = require("events")
}, function (t, e, i) {
    "use strict";
    i.r(e);
    var n = i(5), r = i.n(n);
    for (var s in n) "default" !== s && function (t) {
        i.d(e, t, function () {
            return n[t]
        })
    }(s);
    e.default = r.a
}, function (t, e, i) {
    "use strict";
    var n = this && this.__decorate || function (t, e, i, n) {
        var r, s = arguments.length, o = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (o = (s < 3 ? r(o) : s > 3 ? r(e, i, o) : r(e, i)) || o);
        return s > 3 && o && Object.defineProperty(e, i, o), o
    };
    Object.defineProperty(e, "__esModule", {value: !0});
    const r = i(11), s = i(26), o = i(35), a = i(13), l = i(36);
    let c = class extends r.Vue {
        constructor() {
            super(...arguments), this.show = "", this.argsObj = null
        }

        get isXuFei() {
            return "xufei" === this.show
        }

        created() {
            let t = window.location.href;
            this.argsObj = a.ThunderUtil.getUrlArgs(t), this.show = this.argsObj.show, document.addEventListener("mouseenter", this.handleMouseEnter), document.addEventListener("mouseleave", this.handleMouseLeave)
        }

        handleMouseEnter() {
            l.ipcRenderer.send("MR_NOTIFICATION_MSG", "hover", !0)
        }

        handleMouseLeave() {
            l.ipcRenderer.send("MR_NOTIFICATION_MSG", "hover", !1)
        }
    };
    c = n([r.Component({components: {XueFei: s.default, JingZhun: o.default}})], c), e.default = c
}, function (t, e, i) {
    "use strict";
    i.r(e);
    var n = i(7), r = i.n(n);
    for (var s in n) "default" !== s && function (t) {
        i.d(e, t, function () {
            return n[t]
        })
    }(s);
    e.default = r.a
}, function (t, e, i) {
    "use strict";
    var n = this && this.__decorate || function (t, e, i, n) {
        var r, s = arguments.length, o = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (o = (s < 3 ? r(o) : s > 3 ? r(e, i, o) : r(e, i)) || o);
        return s > 3 && o && Object.defineProperty(e, i, o), o
    }, r = this && this.__awaiter || function (t, e, i, n) {
        return new (i || (i = Promise))(function (r, s) {
            function o(t) {
                try {
                    l(n.next(t))
                } catch (t) {
                    s(t)
                }
            }

            function a(t) {
                try {
                    l(n.throw(t))
                } catch (t) {
                    s(t)
                }
            }

            function l(t) {
                t.done ? r(t.value) : new i(function (e) {
                    e(t.value)
                }).then(o, a)
            }

            l((n = n.apply(t, e || [])).next())
        })
    };
    Object.defineProperty(e, "__esModule", {value: !0});
    const s = i(11), o = i(0), a = i(1).default.getLogger("XuFei");
    a.info("start");
    const l = i(13), c = i(19);
    let u = class extends s.Vue {
        constructor() {
            super(...arguments), this.rightTipsContent = null
        }

        isType(t) {
            return this.argsObj.type === t
        }

        get expireDay() {
            return this.argsObj.expireDay
        }

        created() {
            return r(this, void 0, void 0, function* () {
                this.rightTipsContent = yield this.callRemote("GetCenterRightTipsContent");
                let t = !1, e = "";
                do {
                    if (!this.rightTipsContent) {
                        e = "!rightTipsContent";
                        break
                    }
                    if (!this.image) {
                        e = "!this.image";
                        break
                    }
                    if (!this.maintitle) {
                        e = "!this.maintitle";
                        break
                    }
                    if (!this.btnText) {
                        e = "!this.btnText";
                        break
                    }
                    t = !0
                } while (0);
                if (!t) return a.error("showDialogFailed", e), void window.close();
                yield this.callRemote("ReportCenterRightTips"), setTimeout(() => {
                    c.CneterTipStatNS.xlxBottomRightPushTipsShow(this.argsObj.message_id, this.aid, this.url)
                }, 1500)
            })
        }

        get image() {
            return this.rightTipsContent ? this.rightTipsContent.image : ""
        }

        get showExpireDay() {
            return !!this.maintitle && this.maintitle.indexOf("{days}") > -1
        }

        get maintitlePart1() {
            let t = this.maintitle.indexOf("{days}");
            return this.maintitle.substr(0, t)
        }

        get maintitlePart2() {
            let t = this.maintitle.indexOf("{days}"), e = "{days}".length;
            return this.maintitle.substr(t + e)
        }

        get maintitle() {
            return this.rightTipsContent ? this.rightTipsContent.maintitle : ""
        }

        get btnText() {
            return this.rightTipsContent ? this.rightTipsContent.button : ""
        }

        get subscript() {
            return this.rightTipsContent ? this.rightTipsContent.subscript : ""
        }

        get url() {
            return this.rightTipsContent.url
        }

        get aid() {
            return this.rightTipsContent.aid || ""
        }

        get refer() {
            return this.rightTipsContent.refer || ""
        }

        onClose() {
            return r(this, void 0, void 0, function* () {
                yield c.CneterTipStatNS.xlxBottomRightPushTipsClick(this.argsObj.message_id, this.aid, this.url, "close"), window.close()
            })
        }

        onClick(t) {
            return r(this, void 0, void 0, function* () {
                if (yield o.client.callServerFunction("IsMainWndShow")) {
                    let e = {referfrom: this.refer, aidfrom: this.aid}, i = l.ThunderUtil.RepleaseUrlArgs(e, this.url);
                    a.info("click", t, i), o.client.callServerFunction("OpenNewTab", i).catch()
                }
                o.client.callServerFunction("BringMainWndToTop").catch(), yield c.CneterTipStatNS.xlxBottomRightPushTipsClick(this.argsObj.message_id, this.aid, this.url, t), window.close()
            })
        }

        callRemote(t, ...e) {
            return r(this, void 0, void 0, function* () {
                let i = yield o.client.callServerFunction(t, ...e);
                return a.info("ret", i), i
            })
        }
    };
    n([s.Prop({})], u.prototype, "argsObj", void 0), u = n([s.Component({})], u), e.default = u
}, function (t, e, i) {
    "use strict";
    i.r(e);
    var n = i(9), r = i.n(n);
    for (var s in n) "default" !== s && function (t) {
        i.d(e, t, function () {
            return n[t]
        })
    }(s);
    e.default = r.a
}, function (t, e, i) {
    "use strict";
    var n = this && this.__decorate || function (t, e, i, n) {
        var r, s = arguments.length, o = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (o = (s < 3 ? r(o) : s > 3 ? r(e, i, o) : r(e, i)) || o);
        return s > 3 && o && Object.defineProperty(e, i, o), o
    }, r = this && this.__awaiter || function (t, e, i, n) {
        return new (i || (i = Promise))(function (r, s) {
            function o(t) {
                try {
                    l(n.next(t))
                } catch (t) {
                    s(t)
                }
            }

            function a(t) {
                try {
                    l(n.throw(t))
                } catch (t) {
                    s(t)
                }
            }

            function l(t) {
                t.done ? r(t.value) : new i(function (e) {
                    e(t.value)
                }).then(o, a)
            }

            l((n = n.apply(t, e || [])).next())
        })
    };
    Object.defineProperty(e, "__esModule", {value: !0});
    const s = i(11), o = i(1).default.getLogger("JingZhun");
    o.info("start");
    const a = i(0), l = i(13), c = i(19);
    let u = class extends s.Vue {
        constructor() {
            super(...arguments), this.image = "", this.configData = null, this.butText = "", this.butUrl = "", this.aidfrom = "", this.referfrom = "", this.maintitle = "", this.subtitile = ""
        }

        created() {
            return r(this, void 0, void 0, function* () {
                this.configData = yield this.callRemote("GetAdvertRightTipsData");
                let t = !1, e = "";
                do {
                    if (!this.configData) {
                        e = "!configData";
                        break
                    }
                    if (!this.isType("d")) {
                        if (!this.configData.image) {
                            e = "!configData.image";
                            break
                        }
                        if (!this.configData.image.img) {
                            e = "!configData.image.img";
                            break
                        }
                        if (this.image = yield this.callRemote("GetAdvertRightTipsImage", this.configData.image.img), !this.image) {
                            e = "!this.image";
                            break
                        }
                    }
                    if (!this.configData.button) {
                        e = "!configData.button";
                        break
                    }
                    if (this.butText = this.configData.button.text, this.butUrl = this.configData.button.url, this.aidfrom = this.configData.button.aidfrom, this.referfrom = this.configData.button.referfrom, !this.configData.maintitle) {
                        e = "!configData.maintitle";
                        break
                    }
                    if (this.maintitle = this.configData.maintitle.text, !this.configData.subtitile) {
                        e = "!configData.subtitile";
                        break
                    }
                    this.subtitile = this.configData.subtitile.text, t = !0
                } while (0);
                if (!t) return o.error("showDialogFailed", e), void window.close();
                yield this.callRemote("ReportAdvert", this.aidfrom), setTimeout(() => {
                    c.CneterTipStatNS.xlxBottomRightActNotiShow(this.aidfrom, this.butUrl)
                }, 1500)
            })
        }

        isType(t) {
            return this.argsObj.type === t
        }

        callRemote(t, ...e) {
            return r(this, void 0, void 0, function* () {
                let i = yield a.client.callServerFunction(t, ...e);
                return o.info("ret", i), i
            })
        }

        onClose() {
            return r(this, void 0, void 0, function* () {
                c.CneterTipStatNS.xlxBottomRightActNotiClick(this.aidfrom, this.butUrl, "close"), window.close()
            })
        }

        onClick(t) {
            return r(this, void 0, void 0, function* () {
                let e = {referfrom: this.referfrom, aidfrom: this.aidfrom},
                    i = l.ThunderUtil.RepleaseUrlArgs(e, this.butUrl);
                o.info("click", t, i), a.client.callServerFunction("OpenNewTab", i).catch(), a.client.callServerFunction("BringMainWndToTop").catch(), c.CneterTipStatNS.xlxBottomRightActNotiClick(this.aidfrom, this.butUrl, t), window.close()
            })
        }
    };
    n([s.Prop({})], u.prototype, "argsObj", void 0), u = n([s.Component({})], u), e.default = u
}, function (t, e) {
    t.exports = require("../vendor.js")
}, function (t, e, i) {
    t.exports = i(10)(130)
}, function (t, e) {
    t.exports = require("path")
}, function (t, e, i) {
    "use strict";
    var n = this && this.__awaiter || function (t, e, i, n) {
        return new (i || (i = Promise))(function (r, s) {
            function o(t) {
                try {
                    l(n.next(t))
                } catch (t) {
                    s(t)
                }
            }

            function a(t) {
                try {
                    l(n.throw(t))
                } catch (t) {
                    s(t)
                }
            }

            function l(t) {
                t.done ? r(t.value) : new i(function (e) {
                    e(t.value)
                }).then(o, a)
            }

            l((n = n.apply(t, e || [])).next())
        })
    };
    Object.defineProperty(e, "__esModule", {value: !0});
    const r = i(32), s = i(1).default.getLogger("Thunder.Util");

    function o(t) {
        let e = t;
        return 0 === t.indexOf('"') && t.lastIndexOf('"') === t.length - 1 ? e = t.substring(1, t.length - 1) : 0 === t.indexOf("'") && t.lastIndexOf("'") === t.length - 1 && (e = t.substring(1, t.length - 1)), e
    }

    !function (t) {
        function e(t) {
            let e = null;
            do {
                if (void 0 === t || null === t) break;
                e = t.match(/[\/]?([^?]*)\?([^\s]*)/) ? RegExp.$2 : ""
            } while (0);
            return e
        }

        function i(t) {
            let e = {};
            do {
                if (void 0 === t || null === t) break;
                let i = /([^&=?]+)=([^&]*)/g;
                for (; i.exec(t);) e[RegExp.$1] = RegExp.$2
            } while (0);
            return e
        }

        function a(t) {
            return i(e(t))
        }

        function l(t) {
            let e = null;
            do {
                if (void 0 === t || null === t) break;
                e = t.match(/[\/]?([^?]*)\?([^\s]*)/) ? RegExp.$1 : t
            } while (0);
            return e
        }

        t.formatSize = function (t, e) {
            e = e || 2;
            let i = "0B";
            if ("number" == typeof t && t > 0) {
                let n = ["B", "KB", "MB", "GB", "TB"], r = 0, s = t;
                for (; s >= 1e3 && !(r >= 4);) s /= 1024, r += 1;
                i = -1 === String(s).indexOf(".") ? s + n[r] : s.toFixed(e) + n[r]
            }
            return i
        }, t.isDigital = function (t) {
            let e = !1;
            return /^\d+$/.test(t) && (e = !0), e
        }, t.isAlpha = function (t) {
            let e = !1;
            return /[A-Za-z]/.test(t) && (e = !0), e
        }, t.isUpperCase = function (t) {
            let e = !1;
            return /[A-Z]/.test(t) && (e = !0), e
        }, t.isLowerCase = function (t) {
            let e = !1;
            return /[a-z]/.test(t) && (e = !0), e
        }, t.isChinese = function (t) {
            let e = !1;
            return /[\u4E00-\u9FA5]/.test(t) && (e = !0), e
        }, t.replaceNonDigital = function (t) {
            return t.replace(/[^\d]/g, "")
        }, t.replaceNonAlpha = function (t) {
            return t.replace(/[^A-Za-z]/g, "")
        }, t.replaceNonWord = function (t) {
            return t.replace(/[^\W]/g, "")
        }, t.deepCopy = function (t) {
            let e = JSON.stringify(t), i = null;
            try {
                i = JSON.parse(e)
            } catch (t) {
                s.warn(t)
            }
            return i
        }, t.swap = function (t, e, i) {
            do {
                if (e < 0 || e >= t.length) break;
                if (i < 0 || i >= t.length) break;
                if (e === i) break;
                t[e] = t.splice(i, 1, t[e])[0]
            } while (0);
            return t
        }, t.compareNocase = function (t, e) {
            let i = !1;
            do {
                if (void 0 === t && void 0 === e) {
                    i = !0;
                    break
                }
                if (void 0 === t || void 0 === e) break;
                if ("string" != typeof t || "string" != typeof e) break;
                i = t.toLowerCase() === e.toLowerCase()
            } while (0);
            return i
        }, t.parseCommandLine = function (t) {
            let e = 0, i = "", n = !1, r = [], s = t.length;
            for (let a = 0; a < s; a++) {
                let l = t[a];
                if ('"' !== l && "'" !== l || ("" === i ? (n = !0, i = l) : i === l && (n = !1, i = "")), " " !== l || n || a === s - 1) {
                    if (a === s - 1) {
                        let i = t.substring(e);
                        "" !== i.trim() && r.push(o(i))
                    }
                } else {
                    let i = t.substring(e, a);
                    "" !== i.trim() && r.push(o(i)), e = a + 1
                }
            }
            return r
        }, t.setQueryString = function (t, e) {
            return Object.keys(e).forEach((i, n) => {
                t += 0 === n ? "?" : "&", t += `${i}=${e[i]}`
            }), t
        }, t.getQueryString = function (t, e) {
            return t && e && t.match(new RegExp(`(^${e}|[?|&]${e})=([^&#]+)`)) ? RegExp.$2 : ""
        }, t.isDef = function (t) {
            return void 0 !== t && null !== t
        }, t.isUndef = function (t) {
            return void 0 === t || null === t
        }, t.setCSSProperties = function (t, e) {
            Object.entries(e).forEach(([e, i]) => {
                t.style.setProperty(e, i)
            })
        }, t.versionCompare = function (t, e) {
            let i = t.split("."), n = e.split("."), r = 0;
            for (let t = 0; t < i.length; t++) {
                if (Number(i[t]) - Number(n[t]) > 0) {
                    r = 1;
                    break
                }
                if (Number(i[t]) - Number(n[t]) < 0) {
                    r = -1;
                    break
                }
            }
            return r
        }, t.parseDynamicUrlPath = e, t.parseDynamicUrlArgs = i, t.getUrlArgs = a, t.sleep = function (t) {
            return n(this, void 0, void 0, function* () {
                return new Promise(e => {
                    setTimeout(() => {
                        e()
                    }, t)
                })
            })
        }, t.genarateMd5 = function (t) {
            let e = void 0, i = r.createHash("md5");
            return null !== i && (e = i.update(t).digest("hex")), e
        }, t.GetUrlHost = l, t.RepleaseUrlArgs = function (t, e) {
            let i = Object.getOwnPropertyNames(t), n = a(e);
            i.forEach(e => {
                t[e] && (n[e] = t[e])
            }), i = Object.getOwnPropertyNames(n);
            let r = l(e);
            return i.forEach(t => {
                r.indexOf("?") > 0 ? r += `&${t}=${n[t]}` : r += `?${t}=${n[t]}`
            }), r
        }
    }(e.ThunderUtil || (e.ThunderUtil = {}))
}, function (t, e, i) {
    "use strict";
    var n = function () {
        var t = this.$createElement, e = this._self._c || t;
        return this.isXuFei ? e("XueFei", {attrs: {argsObj: this.argsObj}}) : e("JingZhun", {attrs: {argsObj: this.argsObj}})
    }, r = [];
    n._withStripped = !0, i.d(e, "a", function () {
        return n
    }), i.d(e, "b", function () {
        return r
    })
}, function (t, e, i) {
    "use strict";
    var n = function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", [t.isType("a") ? i("div", {staticClass: "xly-dialog-popup xly-dialog-popup--vip"}, [i("div", {staticClass: "xly-dialog-popup__header"}, [i("h2", [t._v("迅雷")]), t._v(" "), i("a", {
            staticClass: "xly-dialog-popup__close",
            attrs: {href: "javascript:;", title: "关闭"}
        }, [i("i", {
            staticClass: "td-icon-close",
            on: {click: t.onClose}
        })])]), t._v(" "), i("div", {staticClass: "xly-dialog-popup__body"}, [i("div", {staticClass: "xly-dialog-popup__user"}, [t.showExpireDay ? i("p", [t._v("\n          " + t._s(t.maintitlePart1) + "\n          "), i("span", {staticClass: "is-warn"}, [t._v(t._s(t.expireDay))]), t._v("\n          " + t._s(t.maintitlePart2) + "\n        ")]) : i("p", [t._v(t._s(t.maintitle))])]), t._v(" "), i("div", {staticClass: "xly-dialog-popup__banner"}, [i("img", {
            attrs: {
                src: t.image,
                alt: ""
            }
        })])]), t._v(" "), i("div", {staticClass: "xly-dialog-popup__footer"}, [i("button", {
            staticClass: "td-button td-button--vip",
            on: {
                click: function (e) {
                    return t.onClick("btn_go")
                }
            }
        }, [t._v("\n        " + t._s(t.btnText) + "\n        "), i("span", {staticClass: "xly-dialog-popup__tag"}, [t._v(t._s(t.subscript))])])])]) : t.isType("b") ? i("div", {staticClass: "xly-dialog-popup xly-dialog-popup--message"}, [i("div", {staticClass: "xly-dialog-popup__header"}, [i("h2", [t._v("迅雷")]), t._v(" "), i("a", {
            staticClass: "xly-dialog-popup__close",
            attrs: {href: "javascript:;", title: "关闭"}
        }, [i("i", {
            staticClass: "td-icon-close",
            on: {click: t.onClose}
        })])]), t._v(" "), i("div", {staticClass: "td-media is-middle"}, [i("div", {staticClass: "td-media__object"}, [i("div", {staticClass: "xly-dialog-popup__image"}, [i("img", {
            attrs: {
                src: t.image,
                alt: ""
            }
        })])]), t._v(" "), i("div", {staticClass: "td-media__content"}, [t.showExpireDay ? i("p", {staticClass: "xly-dialog-popup__title"}, [t._v("\n          " + t._s(t.maintitlePart1) + "\n          "), i("span", {staticClass: "is-warn"}, [t._v(t._s(t.expireDay))]), t._v("\n          " + t._s(t.maintitlePart2) + "\n        ")]) : i("p", {staticClass: "xly-dialog-popup__title"}, [t._v(t._s(t.maintitle))]), t._v(" "), i("a", {
            staticClass: "xly-dialog-popup__text",
            attrs: {href: "#"},
            on: {
                click: function (e) {
                    return t.onClick("btn_go")
                }
            }
        }, [t._v(t._s(t.btnText) + ">")])])])]) : t._e()])
    }, r = [];
    n._withStripped = !0, i.d(e, "a", function () {
        return n
    }), i.d(e, "b", function () {
        return r
    })
}, function (t, e, i) {
    "use strict";
    var n = function () {
        var t = this, e = t.$createElement, i = t._self._c || e;
        return i("div", [t.isType("a") ? i("div", {staticClass: "xly-dialog-popup"}, [i("div", {staticClass: "xly-dialog-popup__header"}, [i("h2", [t._v("迅雷")]), t._v(" "), i("a", {
            staticClass: "xly-dialog-popup__close",
            attrs: {href: "javascript:;", title: "关闭"}
        }, [i("i", {staticClass: "td-icon-close", on: {click: t.onClose}})]), t._v(" "), i("img", {
            attrs: {
                src: t.image,
                alt: ""
            }
        })]), t._v(" "), i("div", {staticClass: "xly-dialog-popup__body"}, [i("h3", {staticClass: "xly-dialog-popup__text"}, [t._v(t._s(t.maintitle))])]), t._v(" "), i("div", {staticClass: "xly-dialog-popup__footer"}, [i("button", {
            staticClass: "td-button",
            on: {
                click: function (e) {
                    return t.onClick("btn_go")
                }
            }
        }, [t._v("\n        " + t._s(t.butText) + "\n      ")])])]) : t.isType("b") ? i("div", {staticClass: "xly-dialog-popup"}, [i("div", {staticClass: "xly-dialog-popup__header"}, [i("h2", [t._v("迅雷")]), t._v(" "), i("a", {
            staticClass: "xly-dialog-popup__close",
            attrs: {href: "javascript:;", title: "关闭"}
        }, [i("i", {staticClass: "td-icon-close", on: {click: t.onClose}})]), t._v(" "), i("img", {
            attrs: {
                src: t.image,
                alt: ""
            }
        })]), t._v(" "), i("div", {staticClass: "xly-dialog-popup__body"}, [i("p", {staticClass: "xly-dialog-popup__text"}, [t._v("\n        " + t._s(t.maintitle) + "\n        "), i("br"), t._v("\n        " + t._s(t.subtitile) + "\n      ")])]), t._v(" "), i("div", {staticClass: "xly-dialog-popup__footer"}, [i("button", {
            staticClass: "td-button",
            on: {
                click: function (e) {
                    return t.onClick("btn_go")
                }
            }
        }, [t._v("\n        " + t._s(t.butText) + "\n      ")])])]) : t.isType("c") ? i("div", {staticClass: "xly-dialog-popup xly-dialog-popup--picture"}, [i("div", {staticClass: "xly-dialog-popup__header"}, [i("h2", [t._v("迅雷")]), t._v(" "), i("a", {
            staticClass: "xly-dialog-popup__close",
            attrs: {href: "javascript:;", title: "关闭"}
        }, [i("i", {staticClass: "td-icon-close", on: {click: t.onClose}})]), t._v(" "), i("img", {
            attrs: {
                src: t.image,
                alt: "活动图片"
            }, on: {
                click: function (e) {
                    return t.onClick("pic")
                }
            }
        })])]) : t.isType("d") ? i("div", {staticClass: "xly-dialog-popup xly-dialog-popup--text"}, [i("div", {staticClass: "xly-dialog-popup__header"}, [i("h2", [t._v("迅雷")]), t._v(" "), i("a", {
            staticClass: "xly-dialog-popup__close",
            attrs: {href: "javascript:;", title: "关闭"}
        }, [i("i", {
            staticClass: "td-icon-close",
            on: {click: t.onClose}
        })])]), t._v(" "), i("div", {staticClass: "xly-dialog-popup__body"}, [i("h3", [i("a", {attrs: {href: "javascript:;"}}, [t._v(t._s(t.maintitle))])]), t._v(" "), i("p", {staticClass: "xly-dialog-popup__text"}, [t._v(t._s(t.subtitile))])]), t._v(" "), i("div", {staticClass: "xly-dialog-popup__footer"}, [i("button", {
            staticClass: "td-button",
            on: {
                click: function (e) {
                    return t.onClick("btn_go")
                }
            }
        }, [t._v("\n        " + t._s(t.butText) + "\n      ")])])]) : t._e()])
    }, r = [];
    n._withStripped = !0, i.d(e, "a", function () {
        return n
    }), i.d(e, "b", function () {
        return r
    })
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.information = ((...t) => {
    }), e.error = ((...t) => {
    }), e.warning = ((...t) => {
    }), e.critical = ((...t) => {
    }), e.verbose = ((...t) => {
    })
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    const n = i(31), r = i(12);
    e.getDefaultPrex = function () {
        return r.basename(process.execPath, ".exe")
    }, e.getSockPath = function (t) {
        const e = n.tmpdir();
        let i = t;
        t || (i = r.basename(process.execPath, ".exe"));
        let s = r.join(e, `${i}-xunlei-node-net-ipc-{FD196984-2591-4588-AA6F-5C8AC1266290}.sock`);
        return "win32" === process.platform && (s = "\\\\.\\pipe\\" + (s = (s = s.replace(/^\//, "")).replace(/\//g, "-"))), s
    }, e.serverContextName = "xunlei-node-net-ipc-server-{46105371-DE78-4442-B59F-FDA1D6D7D430}", e.mainProcessContext = "main-process", e.mainRendererContext = "main-renderer", e.isObjectEmpty = function (t) {
        let e = !0;
        do {
            if (!t) break;
            if (0 === Object.keys(t).length) break;
            e = !1
        } while (0);
        return e
    }
}, function (t, e, i) {
    "use strict";
    var n = this && this.__awaiter || function (t, e, i, n) {
        return new (i || (i = Promise))(function (r, s) {
            function o(t) {
                try {
                    l(n.next(t))
                } catch (t) {
                    s(t)
                }
            }

            function a(t) {
                try {
                    l(n.throw(t))
                } catch (t) {
                    s(t)
                }
            }

            function l(t) {
                t.done ? r(t.value) : new i(function (e) {
                    e(t.value)
                }).then(o, a)
            }

            l((n = n.apply(t, e || [])).next())
        })
    };
    Object.defineProperty(e, "__esModule", {value: !0});
    const r = i(33), s = i(20), o = i(21).PluginHelperNS.getHelper();
    !function (t) {
        let e = o.pluginVersion, i = 0, a = 0;

        function l() {
            let t = new Map, e = c();
            return t.set("userid", s.default.userId), t.set("usertype", e), t.set("plugin_version", o.pluginVersion), t.set("client_version", o.thunderVersionString), t
        }

        function c() {
            let t = 0;
            return s.default.isSuperVip ? t = 5 : s.default.isPlatinumVip ? t = 3 : s.default.isVip && (t = 2), t
        }

        function u() {
            return s.default.vipLevel
        }

        t.startExcPlugin = function () {
            let t = new Map, e = function () {
                let t = 0;
                return s.default.isLogin && (t = 1), t
            }(), i = function () {
                let t = 0;
                return s.default.isVip && (t = 1), t
            }();
            t.set("is_login", e), t.set("is_vip", i), t.set("message_id", "");
            let n = {attribute1: "plug_startup_succ", extData: t};
            r.StatUtilitiesNS.trackEvent("xlx_vip_event", n)
        }, t.loadTip = function (t) {
            let n = new Map, s = c(), o = u();
            n.set("vip_type", s), n.set("message_id", t), n.set("viplevel", o), n.set("plugin_name", "CenterTip"), n.set("plugin_version", e), i = (new Date).getTime();
            let a = {attribute1: "center_tips_pop_load_try", extData: n};
            r.StatUtilitiesNS.trackEvent("xlx_vip_event", a)
        }, t.showTip = function (t) {
            let n = new Map, s = c(), o = u();
            n.set("vip_type", s), n.set("message_id", t), n.set("viplevel", o), n.set("plugin_name", "CenterTip"), n.set("plugin_version", e), a = (new Date).getTime(), n.set("page_load_time", (a - i) / 1e3);
            let l = {attribute1: "center_tips_pop_load_succ", extData: n};
            r.StatUtilitiesNS.trackEvent("xlx_vip_event", l)
        }, t.closeTip = function (t) {
            let i = new Map, n = c(), s = u();
            i.set("vip_type", n), i.set("message_id", t), i.set("viplevel", s), i.set("plugin_name", "CenterTip"), i.set("plugin_version", e), i.set("button", "x"), i.set("time", ((new Date).getTime() - a) / 1e3);
            let o = {attribute1: "center_tips_pop_click", extData: i};
            r.StatUtilitiesNS.trackEvent("xlx_vip_event", o)
        }, t.receiveTip = function (t) {
            let i = new Map, n = c(), s = u();
            i.set("vip_type", n), i.set("message_id", t), i.set("viplevel", s), i.set("plugin_name", "CenterTip"), i.set("plugin_version", e);
            let o = {attribute1: "center_tips_receive_notice", extData: i};
            r.StatUtilitiesNS.trackEvent("xlx_vip_event", o)
        }, t.popNoTip = function (t) {
            let i = new Map, n = c(), s = u();
            i.set("vip_type", n), i.set("message_id", t), i.set("viplevel", s), i.set("plugin_name", "CenterTip"), i.set("plugin_version", e), i.set("reason", "minimize");
            let o = {attribute1: "center_tips_pop_noshow", extData: i};
            r.StatUtilitiesNS.trackEvent("xlx_vip_event", o)
        }, t.xlxBottomRightPushTipsShow = function (t, e, i) {
            return n(this, void 0, void 0, function* () {
                let n = l();
                n.set("pageid", "vip_xlx_tips_btm_right"), n.set("referfrom", "v_pc_xlx_push_tips_btm_right"), n.set("message_id", t), n.set("aidfrom", e), n.set("url", i);
                let s = {attribute1: "xlx_bottom_right_push_tips_show", extData: n};
                yield r.StatUtilitiesNS.trackEvent("xlx_vip_event", s)
            })
        }, t.xlxBottomRightPushTipsClick = function (t, e, i, s) {
            return n(this, void 0, void 0, function* () {
                let n = l();
                n.set("pageid", "vip_xlx_tips_btm_right"), n.set("referfrom", "v_pc_xlx_push_tips_btm_right"), n.set("message_id", t), n.set("aidfrom", e), n.set("url", i), n.set("clickid", s);
                let o = {attribute1: "xlx_bottom_right_push_tips_click", extData: n};
                yield r.StatUtilitiesNS.trackEvent("xlx_vip_event", o)
            })
        }, t.xlxBottomRightActNotiShow = function (t, e) {
            return n(this, void 0, void 0, function* () {
                let i = l();
                i.set("pageid", "vip_xlx_noti_btm_right"), i.set("referfrom", "v_pc_xlx_act_noti_btm_right"), i.set("aidfrom", t), i.set("url", e);
                let n = {attribute1: "xlx_bottom_right_act_noti_show", extData: i};
                yield r.StatUtilitiesNS.trackEvent("xlx_vip_event", n)
            })
        }, t.xlxBottomRightActNotiClick = function (t, e, i) {
            return n(this, void 0, void 0, function* () {
                let n = l();
                n.set("pageid", "vip_xlx_noti_btm_right"), n.set("referfrom", "v_pc_xlx_act_noti_btm_right"), n.set("aidfrom", t), n.set("url", e), n.set("clickid", i);
                let s = {attribute1: "xlx_bottom_right_act_noti_click", extData: n};
                yield r.StatUtilitiesNS.trackEvent("xlx_vip_event", s)
            })
        }
    }(e.CneterTipStatNS || (e.CneterTipStatNS = {}))
}, function (t, e, i) {
    "use strict";
    var n = this && this.__awaiter || function (t, e, i, n) {
        return new (i || (i = Promise))(function (r, s) {
            function o(t) {
                try {
                    l(n.next(t))
                } catch (t) {
                    s(t)
                }
            }

            function a(t) {
                try {
                    l(n.throw(t))
                } catch (t) {
                    s(t)
                }
            }

            function l(t) {
                t.done ? r(t.value) : new i(function (e) {
                    e(t.value)
                }).then(o, a)
            }

            l((n = n.apply(t, e || [])).next())
        })
    };
    Object.defineProperty(e, "__esModule", {value: !0});
    const r = i(3), s = i(0), o = i(1).default.getLogger("user-info");
    var a;
    !function (t) {
        t.login = "OnLogin", t.logout = "OnLogout", t.authorityChanged = "OnAuthorityChanged"
    }(a = e.UserEventNS || (e.UserEventNS = {}));

    class l extends r.EventEmitter {
        constructor() {
            super(), this.mPeerId = void 0, this.mUserId = "0", this.mSessionId = void 0, this.mIsLogin = !1, this.mIsVip = !1, this.mVipLevel = 0, this.mVasType = 0, this.mIsYear = !1, this.mPreUserIsVip = !1, this.mExpireDate = ""
        }

        init() {
            return n(this, void 0, void 0, function* () {
                yield this.attachUserEvents().catch()
            })
        }

        getPeerId() {
            return n(this, void 0, void 0, function* () {
                if (this.mPeerId) return this.mPeerId;
                {
                    let t = yield s.client.callServerFunction("GetPeerID");
                    return t && "" !== t && (this.mPeerId = t), this.mPeerId || ""
                }
            })
        }

        getSessionId() {
            return n(this, void 0, void 0, function* () {
                if (this.mSessionId) return this.mSessionId;
                {
                    let t = yield s.client.callServerFunction("GetSessionID");
                    return t && "" !== t && (this.mSessionId = t), this.mSessionId || "0"
                }
            })
        }

        getUserinfo() {
            return n(this, void 0, void 0, function* () {
                return yield s.client.callServerFunction("GetAllUserInfo")
            })
        }

        get jumpKey() {
            return ""
        }

        get userId() {
            return this.mUserId
        }

        get isLogin() {
            return this.mIsLogin
        }

        get isVip() {
            return this.mIsVip
        }

        get isPreUserIsVip() {
            return this.mPreUserIsVip
        }

        get isYear() {
            return this.mIsYear
        }

        get isPlatinumVip() {
            return this.isVip && this.vasType > 2
        }

        get isSuperVip() {
            return this.isVip && 5 === this.vasType
        }

        get vipLevel() {
            return this.mVipLevel
        }

        get vasType() {
            return this.mVasType
        }

        get userLevel() {
            return 1
        }

        get expireDay() {
            let t = -1;
            if (this.mExpireDate && 8 === this.mExpireDate.length) {
                let e = Number(this.mExpireDate.substr(0, 4)), i = Number(this.mExpireDate.substr(4, 2)) - 1,
                    n = Number(this.mExpireDate.substr(6, 2)), r = new Date(e, i, n), s = new Date;
                s = new Date(s.getFullYear(), s.getMonth(), s.getDate()), o.info("exDate", r.toLocaleDateString(), s.toLocaleDateString()), t = Math.abs((r.getTime() - s.getTime()) / 864e5)
            }
            return t
        }

        get offlineAuthority() {
            return this.isLogin
        }

        authorityChanged(t, e) {
            this.emit(a.authorityChanged, t, e)
        }

        attachUserEvents() {
            return n(this, void 0, void 0, function* () {
                let t = yield s.client.callServerFunction("IsLogined");
                o.info("isLogined", t), t && this.onLogin().catch(), s.client.attachServerEvent("onUserInfoChange", this.onUserInfoChange.bind(this)), s.client.attachServerEvent("onLoginStatusChange", this.onLoginStatusChange.bind(this))
            })
        }

        onLogin() {
            return n(this, void 0, void 0, function* () {
                o.info("--\x3eonLogin"), this.mPreUserIsVip = this.mIsVip, this.clear(), this.mIsLogin = !0, yield this.parseUserInfo(), this.emit(a.login), this.authorityChanged(this.isVip), o.info("<--onLogin")
            })
        }

        onLogout() {
            o.info("--\x3eonLogout"), this.mPreUserIsVip = this.mIsVip, this.clear(), this.emit(a.logout), this.authorityChanged(!1), o.info("<--onLogout")
        }

        onUserInfoChange(t, e, i) {
            return n(this, void 0, void 0, function* () {
                o.info("--\x3eonUserInfoChange"), "vipinfo" === e && (o.info("data", i), yield this.parseUserInfo(), this.mIsVip && this.authorityChanged(this.isVip, !0)), o.info("<--onUserInfoChange")
            })
        }

        onLoginStatusChange(t, e, i) {
            o.info("--\x3eonLoginStatusChange", "newStatus", i), "unlogin" === i || "offline" === i ? this.onLogout() : "online" === i && this.onLogin().catch(), o.info("<--onLoginStatusChange")
        }

        clear() {
            this.mUserId = "0", this.mSessionId = void 0, this.mIsVip = !1, this.mIsLogin = !1, this.mVasType = 0, this.mVipLevel = 0, this.mExpireDate = ""
        }

        parseUserInfo() {
            return n(this, void 0, void 0, function* () {
                let t = yield this.getUserinfo();
                if (o.info("userinfo", t), t) if (this.mUserId = t.userID || "0", t.vipList && t.vipList[0]) {
                    if (t.vipList[0].isVip) {
                        let e = Number(t.vipList[0].isVip).valueOf();
                        this.mIsVip = e > 0
                    } else this.mIsVip = !1;
                    if (t.vipList[0].vipLevel && (this.mVipLevel = Number(t.vipList[0].vipLevel).valueOf()), t.vipList[0].vasType && (this.mVasType = Number(t.vipList[0].vasType).valueOf()), t.vipList[0].isYear) {
                        let e = Number(t.vipList[0].isYear).valueOf();
                        this.mIsYear = 1 === e
                    }
                    t.vipList[0].expireDate && (this.mExpireDate = t.vipList[0].expireDate)
                } else this.mIsVip = !1
            })
        }
    }

    e.UserHelper = l, e.default = new l
}, function (t, e, i) {
    "use strict";
    var n = this && this.__awaiter || function (t, e, i, n) {
        return new (i || (i = Promise))(function (r, s) {
            function o(t) {
                try {
                    l(n.next(t))
                } catch (t) {
                    s(t)
                }
            }

            function a(t) {
                try {
                    l(n.throw(t))
                } catch (t) {
                    s(t)
                }
            }

            function l(t) {
                t.done ? r(t.value) : new i(function (e) {
                    e(t.value)
                }).then(o, a)
            }

            l((n = n.apply(t, e || [])).next())
        })
    };
    Object.defineProperty(e, "__esModule", {value: !0});
    const r = i(34);

    class s {
        constructor() {
            this.mThunderVersionStr = void 0, this.mThunderVersionNumber = void 0, this.mNativeCall = null, global.AsyncGetNativeCallModuleObj && global.AsyncGetNativeCallModuleObj(t => {
                this.mNativeCall = t.nativeCall
            })
        }

        get pluginName() {
            return r.name
        }

        get pluginWebviewName() {
            return `${r.name}-webview`
        }

        get pluginDialogRendererName() {
            return `${r.name}-dialog-renderer`
        }

        get thunderVersionNumber() {
            return this.mThunderVersionNumber
        }

        get thunderVersionString() {
            return this.mThunderVersionStr
        }

        get clientName() {
            return "xl_pc"
        }

        get pluginVersion() {
            return r.version
        }

        get currentTime() {
            return Math.floor((new Date).getTime() / 1e3)
        }

        get nativeCall() {
            return this.mNativeCall
        }

        loadThunderVersion() {
            return n(this, void 0, void 0, function* () {
                const {client: t} = yield Promise.resolve().then(() => i(0)),
                    e = yield t.callServerFunction("GetThunderVersion");
                console.info("GetThunderVersion", e), this.mThunderVersionStr = e, this.mThunderVersionNumber = 0;
                let n = this.mThunderVersionStr.split(".");
                if (n && 4 === n.length) {
                    let t = Number(n[0]).valueOf(), e = Number(n[1]).valueOf(), i = Number(n[2]).valueOf(), r = 128;
                    this.mThunderVersionNumber = r * Math.pow(2, 24) + t * Math.pow(2, 16) + e * Math.pow(2, 8) + i
                }
            })
        }
    }

    e.PluginHelper = s, function (t) {
        const e = new s;
        t.getHelper = function () {
            return e
        }
    }(e.PluginHelperNS || (e.PluginHelperNS = {}))
}, function (t, e, i) {
    t.exports = i(23)
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    const n = i(24);
    i(44);
    const r = i(25), s = i(42), o = i(12);
    s.LoggerInitNS.initlog(o.join(__dirname, "../"), "dialog-renderer");
    const a = i(21).PluginHelperNS.getHelper();
    i(0).client.start({
        name: a.pluginDialogRendererName,
        version: a.pluginVersion
    }, "thunder"), console.info("__dirname", __dirname);
    const l = i(20);
    a.loadThunderVersion(), l.default.init(), new n.default({
        components: {App: r.default},
        render: t => t("app")
    }).$mount("#app")
}, function (t, e, i) {
    t.exports = i(10)(19)
}, function (t, e, i) {
    "use strict";
    i.r(e);
    var n = i(14), r = i(4);
    for (var s in r) "default" !== s && function (t) {
        i.d(e, t, function () {
            return r[t]
        })
    }(s);
    i(37), i(38), i(39), i(40), i(41);
    var o = i(2), a = Object(o.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src/dialog-renderer/app.vue", e.default = a.exports
}, function (t, e, i) {
    "use strict";
    i.r(e);
    var n = i(15), r = i(6);
    for (var s in r) "default" !== s && function (t) {
        i.d(e, t, function () {
            return r[t]
        })
    }(s);
    var o = i(2), a = Object(o.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src/dialog-renderer/view/xufei.vue", e.default = a.exports
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    const n = i(28), r = i(3), s = i(17), o = i(29), a = i(18);
    e.Client = class extends r.EventEmitter {
        constructor(t) {
            if (t = t || {}, super(), this.inprocess = !1, this.context = void 0, t.context && (this.context = Object.assign({}, t.context), this.context.productId = t.socketPrex), t.socket) this.socket = t.socket, this.bind(); else if (global.__xdasIPCServer && global.__xdasIPCServer.getProductId().toLowerCase() === t.socketPrex.toLowerCase()) this.inprocess = !0; else {
                let e = a.getSockPath(t.socketPrex);
                this.socket = n.connect(e), this.bind()
            }
        }

        isInprocess() {
            return this.inprocess
        }

        getContext() {
            return this.context
        }

        bind() {
            const t = new o.Parser, e = this.socket;
            e.on("data", e => {
                t.feed(e)
            }), e.on("connect", () => {
                this.emit("connect")
            }), e.on("end", () => {
                s.information("socket is ended"), this.socket = null, this.emit("end")
            }), e.on("error", t => {
                this.socket = null, this.emit("error", t)
            }), t.on("message", t => {
                this.emit("message", t)
            }), this.parser = t
        }

        send(t) {
            if (this.socket) try {
                this.socket.write(this.parser.encode(t))
            } catch (t) {
                s.error(t.message)
            } else s.information("This socket has been ended by the other party", this.context && this.context.name)
        }
    }
}, function (t, e) {
    t.exports = require("net")
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    const n = i(30), r = i(3);
    e.Parser = class extends r.EventEmitter {
        constructor() {
            super(), this.decoder = new n.StringDecoder("utf8"), this.jsonBuffer = ""
        }

        encode(t) {
            return JSON.stringify(t) + "\n"
        }

        feed(t) {
            let e = this.jsonBuffer, i = 0, n = (e += this.decoder.write(t)).indexOf("\n", i);
            for (; n >= 0;) {
                const t = e.slice(i, n), r = JSON.parse(t);
                this.emit("message", r), i = n + 1, n = e.indexOf("\n", i)
            }
            this.jsonBuffer = e.slice(i)
        }
    }
}, function (t, e) {
    t.exports = require("string_decoder")
}, function (t, e) {
    t.exports = require("os")
}, function (t, e) {
    t.exports = require("crypto")
}, function (t, e, i) {
    "use strict";
    var n = this && this.__awaiter || function (t, e, i, n) {
        return new (i || (i = Promise))(function (r, s) {
            function o(t) {
                try {
                    l(n.next(t))
                } catch (t) {
                    s(t)
                }
            }

            function a(t) {
                try {
                    l(n.throw(t))
                } catch (t) {
                    s(t)
                }
            }

            function l(t) {
                t.done ? r(t.value) : new i(function (e) {
                    e(t.value)
                }).then(o, a)
            }

            l((n = n.apply(t, e || [])).next())
        })
    };
    Object.defineProperty(e, "__esModule", {value: !0});
    const r = i(0), s = i(1).default.getLogger("stat-utilities");
    !function (t) {
        t.trackEvent = function (t, e) {
            return n(this, void 0, void 0, function* () {
                let i = (e = e || {}).attribute1 || "", n = e.attribute2 || "", o = function (t) {
                    let e = "";
                    return t.forEach((t, i) => {
                        "" !== e && (e += ","), e = e + i + "=" + t
                    }), e
                }(e.extData || new Map);
                s.info("key", t), s.info("attribute1", i), s.info("attribute2", n), s.info("extData", o), o = encodeURIComponent(o), s.info("encode extData", o), yield r.client.callServerFunction("TrackEvent", t, i, n, 0, 0, 0, 0, o)
            })
        }
    }(e.StatUtilitiesNS || (e.StatUtilitiesNS = {}))
}, function (t) {
    t.exports = {
        name: "centertip",
        version: "3.0.3",
        author: "Xunlei",
        license: "",
        description: "",
        main: "3.0.3/index.js",
        clear: !0
    }
}, function (t, e, i) {
    "use strict";
    i.r(e);
    var n = i(16), r = i(8);
    for (var s in r) "default" !== s && function (t) {
        i.d(e, t, function () {
            return r[t]
        })
    }(s);
    var o = i(2), a = Object(o.a)(r.default, n.a, n.b, !1, null, null, null);
    a.options.__file = "src/dialog-renderer/view/jingzhun.vue", e.default = a.exports
}, function (t, e) {
    t.exports = require("electron")
}, function (t, e, i) {
    "use strict";
    i(52)
}, function (t, e, i) {
    "use strict";
    i(54)
}, function (t, e, i) {
    "use strict";
    i(57)
}, function (t, e, i) {
    "use strict";
    i(60)
}, function (t, e, i) {
    "use strict";
    i(62)
}, function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    const n = i(43), r = i(12), s = i(1);
    !function (t) {
        t.initlog = function (t, e) {
            let i = r.join(t, "log-options.json");
            if (n.existsSync(i)) {
                const t = {label: e, options: i};
                s.default.start(t)
            }
        }
    }(e.LoggerInitNS || (e.LoggerInitNS = {}))
}, function (t, e) {
    t.exports = require("fs")
}, function (t, e) {
}, , , , , , , , function (t, e) {
}, , function (t, e) {
}, , , function (t, e) {
}, , , function (t, e) {
}, , function (t, e) {
}]);
//# sourceMappingURL=renderer.js.map