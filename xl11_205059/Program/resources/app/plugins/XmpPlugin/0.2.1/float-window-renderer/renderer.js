module.exports = function (e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {i, l: !1, exports: {}};
        return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    return n.m = e, n.c = t, n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) n.d(i, o, function (t) {
            return e[t]
        }.bind(null, o));
        return i
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 288)
}([function (e, t, n) {
    e.exports = n(29)(21)
}, function (e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                e.done ? o(e.value) : new n(function (t) {
                    t(e.value)
                }).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(11), r = n(96), a = n(20), s = n(39);

    function l(e) {
        s.information("on object freeer"), global.__xdasIPCClienInstance.notifyFreer(e.remoteId, e.callbackId)
    }

    let c = void 0;
    global.__xdasIPCClienInstance || (global.__xdasIPCClienInstance = new class extends o.EventEmitter {
        constructor() {
            super(), this.rid = 0, this.apis = {}, this.singletonMap = {}, this.connectedMap = {}, this.retCallbackMap = {}, this.eventCallbackMaps = {}, this.contextCallbackMap = {}
        }

        start(e, t, n, i) {
            do {
                if (t || (t = a.getDefaultPrex()), this.singletonMap.hasOwnProperty(t.toLowerCase())) {
                    if (i) if (this.connectedMap.hasOwnProperty(t.toLowerCase())) i("connect"); else {
                        let e = this.singletonMap[t.toLowerCase()];
                        e.on("error", e => {
                            i("error", e)
                        }), e.on("connect", () => {
                            i("connect")
                        }), e.on("end", () => {
                            let t = e.isInprocess();
                            i("end", e.getContext(), n, t)
                        })
                    }
                    break
                }
                if (global.__xdasPluginConfig && global.__xdasPluginConfig.name ? e = {
                    name: global.__xdasPluginConfig.name,
                    version: global.__xdasPluginConfig.version
                } : void 0 !== e && null !== e || (e = this.parseContext()), !e) {
                    if (!this.client || !this.client.getContext()) throw new Error("no suitable context for client, please specify context with start function");
                    e = {name: this.client.getContext().name, version: this.client.getContext().version}
                }
                if (e.name === a.serverContextName) throw new Error("client context must difference from server");
                if (n && !this.client) throw new Error("connect to other product must start self firstly");
                global.__xdasPluginConfig || (global.__xdasPluginConfig = e);
                let o = new r.Client({context: e, socketPrex: t});
                this.singletonMap[t.toLowerCase()] = o, n || (this.client = o), o.on("message", e => {
                    if ("fire_event" === e.action) this.fireServerEvent(o, e.name, [e.__context].concat(e.args)); else if ("client_context_freer" === e.action) do {
                        let t = e.rid;
                        if (t) {
                            if (!this.contextCallbackMap[t]) break;
                            delete this.contextCallbackMap[t]
                        }
                    } while (0); else if ("call_client_by_id" === e.action) this.callFunctionById(o, e.rid, e.s_rid, e.args); else if ("call_client_api" === e.action) this.callRegisterFunction(o, e); else if ("check_client_function" === e.action) {
                        let t = e.method, n = !0;
                        t && this.apis && this.apis[t] || (n = !1), this.sendAdapter(o, {
                            s_rid: e.s_rid,
                            action: "check_client_function_callback",
                            success: !0,
                            data: n
                        })
                    } else if (void 0 !== e.success && null !== e.success) {
                        let t = e;
                        this.client === o && this.emit("stat_call_function_back", o.getContext(), e);
                        const n = this.retCallbackMap[t.rid].callback;
                        if (n) if (t.success) do {
                            if ("remote_client_callback" === e.action && e.__context && e.__context.name && e.__context.productId) {
                                let i = `${e.__context.productId}-${e.__context.name}`.toLowerCase();
                                n(null, this.decodeParameter(t.data, i));
                                break
                            }
                            n(null, t.data)
                        } while (0); else n(t.error, t.data);
                        delete this.retCallbackMap[t.rid]
                    }
                }), o.on("error", e => {
                    i && i("error", e), this.emit("socket-error", e, o.getContext(), n, o.isInprocess()), delete this.singletonMap[t.toLowerCase()], delete this.connectedMap[t.toLowerCase()], n || (this.client = null)
                }), o.isInprocess() ? (this.connectedMap[t.toLowerCase()] = o, i && i("connect"), this.emit("connect", o.getContext(), n, !0)) : o.on("connect", () => {
                    this.connectedMap[t.toLowerCase()] = o, i && i("connect"), this.emit("connect", o.getContext(), n, !1)
                }), o.on("end", () => {
                    let e = o.isInprocess();
                    s.information("server is ended, and this client emit end", t, n, e), i && i("end", o.getContext(), n, e), this.emit("end", o.getContext(), n, e), delete this.singletonMap[t.toLowerCase()], delete this.connectedMap[t.toLowerCase()], n || (this.client = null)
                }), this.registry(o)
            } while (0)
        }

        registerFunctions(e) {
            do {
                if (!e) break;
                let t = void 0;
                for (let n in e) if (this.apis.hasOwnProperty(n)) {
                    t = n;
                    break
                }
                if (t) throw new Error(`try to coverd function ${t}`);
                this.apis = Object.assign({}, this.apis, e)
            } while (0)
        }

        checkServerFunction(e) {
            return i(this, void 0, void 0, function* () {
                return this.internalCheckServerFunction(this.client, e)
            })
        }

        callServerFunction(e, ...t) {
            return i(this, void 0, void 0, function* () {
                let n = null, i = yield this.callServerFunctionEx(e, ...t);
                return i && (n = i[0]), n
            })
        }

        callServerFunctionEx(e, ...t) {
            return this.internalCallServerFunctionEx(this.client, e, ...t)
        }

        isRemoteClientExist(e) {
            return this.internalIsRemoteClientExist(this.client, e)
        }

        checkRemoteFunction(e, t) {
            return this.internalCheckRemoteFunction(this.client, e, t)
        }

        callRemoteClientFunction(e, t, ...n) {
            return this.internalCallRemoteClientFunction(this.client, e, t, ...n)
        }

        notifyFreer(e, t) {
            this.sendAdapter(this.client, {action: "client_context_freer", dst: e, rid: t})
        }

        callRemoteContextById(e, t, ...n) {
            this.sendAdapter(this.client, {dst: e, action: "call_remote_context_by_id", rid: t, args: n})
        }

        attachServerEvent(e, t) {
            return console.info(this.client.getContext().name, "attachServerEvent", e), this.internalAttachServerEvent(this.client, e, t)
        }

        detachServerEvent(e, t) {
            this.internalDetachServerEvent(this.client, e, t)
        }

        broadcastEvent(e, ...t) {
            this.sendAdapter(this.client, {action: "broadcast", name: e, args: t})
        }

        crossCheckServerFunction(e, t) {
            return i(this, void 0, void 0, function* () {
                {
                    if (!e) throw new Error("An argument for 'productId' was not provided");
                    let n = this.singletonMap[e.toLowerCase()];
                    if (!n) throw new Error("Please call the 'start' interface first");
                    return this.internalCheckServerFunction(n, t)
                }
            })
        }

        crossCallServerFunction(e, t, ...n) {
            return i(this, void 0, void 0, function* () {
                let i = null, o = yield this.crossCallServerFunctionEx(e, t, ...n);
                return o && (i = o[0]), i
            })
        }

        crossCallServerFunctionEx(e, t, ...n) {
            {
                if (!e) throw new Error("An argument for 'productId' was not provided");
                let i = this.singletonMap[e.toLowerCase()];
                if (!i) throw new Error("Please call the 'start' interface first");
                if (!t) throw new Error("An argument for 'funcName' was not provided");
                return this.internalCallServerFunctionEx(i, t, ...n)
            }
        }

        crossIsRemoteClientExist(e, t) {
            return i(this, void 0, void 0, function* () {
                {
                    if (!e) throw new Error("An argument for 'productId' was not provided");
                    let n = this.singletonMap[e.toLowerCase()];
                    if (!n) throw new Error("Please call the 'start' interface first");
                    return this.internalIsRemoteClientExist(n, t)
                }
            })
        }

        crossCheckRemoteFunction(e, t, n) {
            return i(this, void 0, void 0, function* () {
                {
                    if (!e) throw new Error("An argument for 'productId' was not provided");
                    let i = this.singletonMap[e.toLowerCase()];
                    if (!i) throw new Error("Please call the 'start' interface first");
                    if (!t) throw new Error("An argument for 'remoteId' was not provided");
                    if (!n) throw new Error("An argument for 'funcName' was not provided");
                    return this.internalCheckRemoteFunction(i, t, n)
                }
            })
        }

        crossCallRemoteClientFunction(e, t, n, ...i) {
            {
                if (!e) throw new Error("An argument for 'productId' was not provided");
                let o = this.singletonMap[e.toLowerCase()];
                if (!o) throw new Error("Please call the 'start' interface first");
                if (!t) throw new Error("An argument for 'remoteId' was not provided");
                if (!n) throw new Error("An argument for 'funcName' was not provided");
                return this.internalCallRemoteClientFunction(o, t, n, ...i)
            }
        }

        crossAttachServerEvent(e, t, n) {
            let i = void 0;
            {
                if (!e) throw new Error("An argument for 'productId' was not provided");
                let o = this.singletonMap[e.toLowerCase()];
                if (!o) throw new Error("Please call the 'start' interface first");
                if (!t) throw new Error("An argument for 'eventName' was not provided");
                i = this.internalAttachServerEvent(o, t, n)
            }
            return i
        }

        crossDetachServerEvent(e, t, n) {
            {
                if (!e) throw new Error("An argument for 'productId' was not provided");
                let i = this.singletonMap[e.toLowerCase()];
                if (!i) throw new Error("Please call the 'start' interface first");
                if (!t) throw new Error("An argument for 'eventName' was not provided");
                this.internalDetachServerEvent(i, t, n)
            }
        }

        crossBroadcastEvent(e, t, ...n) {
            {
                if (!e) throw new Error("An argument for 'productId' was not provided");
                let i = this.singletonMap[e.toLowerCase()];
                if (!i) throw new Error("Please call the 'start' interface first");
                if (!t) throw new Error("An argument for 'eventName' was not provided");
                this.sendAdapter(i, {
                    action: "broadcast",
                    name: t,
                    args: n,
                    __context: Object.assign({}, this.client.getContext())
                })
            }
        }

        registry(e) {
            let t = this.getFullContextName(this.client);
            return new Promise((n, i) => {
                do {
                    if (!t) {
                        n(!1);
                        break
                    }
                    let i = this.generateId();
                    const o = {alias: t, action: "register", rid: i};
                    let r = (e, i) => {
                        e ? (s.error("register error", e.message), n(i)) : n(t)
                    };
                    this.retCallbackMap[i] = Object.assign({callback: r}, o), this.sendAdapter(e, o)
                } while (0)
            })
        }

        getNow() {
            return Date.now()
        }

        sendAdapter(e, t) {
            do {
                if (!t) break;
                let n = this.getNow();
                if (t.timestamp ? t.timestamp = [...t.timestamp].concat(n) : t.timestamp = [].concat(n), !t.__context) {
                    let n = e.getContext();
                    n && (t = Object.assign({__context: n}, t))
                }
                e.isInprocess() ? (s.information("send to server in process"), global.__xdasIPCServer.emit("message", t, e)) : e.send(t)
            } while (0)
        }

        parseContext() {
            let e = void 0;
            do {
                let t = "";
                for (let e = 0; e < process.argv.length; e++) {
                    let n = process.argv[e];
                    if (0 === n.indexOf("--xdas-plugin-name=", 0)) {
                        t = n.substr("--xdas-plugin-name=".length);
                        break
                    }
                }
                if (!t) break;
                e = {name: t}
            } while (0);
            return e
        }

        generateId() {
            return this.rid++
        }

        getFullContextName(e, t) {
            let n = "";
            do {
                if (t === a.serverContextName) {
                    n = t;
                    break
                }
                if (void 0 === t) {
                    n = `${e.getContext().productId}-${e.getContext().name}`.toLowerCase();
                    break
                }
                n = `${e.getContext().productId}-${t}`.toLowerCase()
            } while (0);
            return n
        }

        internalCheckServerFunction(e, t) {
            return new Promise((n, i) => {
                do {
                    if (!e) {
                        n(!1);
                        break
                    }
                    if (!t) {
                        n(!1);
                        break
                    }
                    let i = this.generateId();
                    const o = {action: "check_server_function_exist", method: t, rid: i};
                    let r = (e, t) => {
                        n(!e && t)
                    };
                    this.retCallbackMap[i] = Object.assign({callback: r}, o), this.sendAdapter(e, o)
                } while (0)
            })
        }

        internalCallServerFunctionEx(e, t, ...n) {
            return new Promise((i, o) => {
                do {
                    if (!e) {
                        i([null, "client doesn't ready"]);
                        break
                    }
                    if (!t) {
                        i([null, "funcName is not specifed"]);
                        break
                    }
                    e === this.client && this.emit("stat_call_function", this.client.getContext(), t);
                    let o = this.generateId();
                    if (n) for (let e = 0; e < n.length; e++) n[e] = this.convertFunction2IdEx(n[e]);
                    const r = {rid: o, method: t, args: n};
                    let a = (t, n) => {
                        t ? (s.error("callServerFunction error", t, e.getContext()), i([null, t])) : i([n, void 0])
                    };
                    this.retCallbackMap[o] = Object.assign({callback: a}, r), this.sendAdapter(e, r)
                } while (0)
            })
        }

        internalIsRemoteClientExist(e, t) {
            return new Promise((n, i) => {
                do {
                    if (!t) {
                        n([!1, "remote client alias is not specifed"]);
                        break
                    }
                    if (e === this.client && t.toLowerCase() === e.getContext().name.toLowerCase()) {
                        n([!0, "self is exist"]);
                        break
                    }
                    let i = this.generateId();
                    const o = {dst: this.getFullContextName(e, t), action: "check_client_exist", rid: i};
                    let r = (e, t) => {
                        n(e ? [!1, e] : [t, "success"])
                    };
                    this.retCallbackMap[i] = Object.assign({callback: r}, o), this.sendAdapter(e, o)
                } while (0)
            })
        }

        internalCheckRemoteFunction(e, t, n) {
            return new Promise((i, o) => {
                do {
                    if (!e) {
                        i(!1);
                        break
                    }
                    if (!t) {
                        i(!1);
                        break
                    }
                    if (!n) {
                        i(!1);
                        break
                    }
                    if (e === this.client && t.toLowerCase() === e.getContext().name.toLowerCase()) {
                        i(!(!this.apis || !this.apis[n]));
                        break
                    }
                    let o = this.generateId();
                    const r = {
                        action: "check_client_function_exist",
                        method: n,
                        rid: o,
                        src: this.getFullContextName(this.client),
                        dst: this.getFullContextName(e, t)
                    };
                    let a = (e, t) => {
                        i(!e && t)
                    };
                    this.retCallbackMap[o] = Object.assign({callback: a}, r), this.sendAdapter(e, r)
                } while (0)
            })
        }

        internalCallRemoteClientFunction(e, t, n, ...i) {
            return new Promise((o, r) => {
                do {
                    if (!e) {
                        o([null, "client doesn't ready"]);
                        break
                    }
                    if (!t) {
                        o([null, "remote client alias is not specifed"]);
                        break
                    }
                    if (!n) {
                        o([null, "funcName is not specifed"]);
                        break
                    }
                    let r = (e, t) => {
                        e ? (s.information("callRemoteClientFunction", e.message), o([null, e])) : o([t, void 0])
                    };
                    if (i) for (let e = 0; e < i.length; e++) i[e] = this.convertFunction2IdEx(i[e]);
                    let a = this.generateId();
                    const l = {
                        src: this.getFullContextName(this.client),
                        dst: this.getFullContextName(e, t),
                        action: "call_remote_client_api",
                        method: n,
                        args: i,
                        rid: a
                    };
                    this.retCallbackMap[a] = Object.assign({callback: r}, l), this.sendAdapter(e, l)
                } while (0)
            })
        }

        internalAttachServerEvent(e, t, n) {
            let i = e.getContext().productId.toLowerCase();
            this.eventCallbackMaps.hasOwnProperty(i) || (this.eventCallbackMaps[i] = {}), this.eventCallbackMaps[i].hasOwnProperty(t) || (this.eventCallbackMaps[i][t] = {}), a.isObjectEmpty(this.eventCallbackMaps[i][t]) && this.sendAdapter(e, {
                action: "attach_event",
                name: t
            });
            let o = this.generateId();
            return this.eventCallbackMaps[i][t][o] = n, o
        }

        internalDetachServerEvent(e, t, n) {
            let i = e.getContext().productId.toLowerCase();
            do {
                if (!this.eventCallbackMaps.hasOwnProperty(i)) break;
                if (!this.eventCallbackMaps[i].hasOwnProperty(t)) break;
                delete this.eventCallbackMaps[i][t][n], a.isObjectEmpty(this.eventCallbackMaps[i][t]) && this.sendAdapter(e, {
                    action: "detach_event",
                    name: t
                })
            } while (0)
        }

        fireServerEvent(e, t, ...n) {
            let i = e.getContext().productId.toLowerCase();
            do {
                if (!this.eventCallbackMaps.hasOwnProperty(i)) break;
                if (!this.eventCallbackMaps[i].hasOwnProperty(t)) break;
                let e = this.eventCallbackMaps[i][t];
                for (let t in e) {
                    let i = e[t];
                    i && i.apply(null, ...n)
                }
            } while (0)
        }

        callFunctionById(e, t, n, ...i) {
            let o = void 0, r = !1;
            do {
                const a = this.contextCallbackMap[t];
                if (!a) {
                    s.error("the context function has been freeer", t), o = {
                        s_rid: n,
                        action: "call_client_by_id_callback",
                        success: !1,
                        error: "the context function has been freeer"
                    };
                    break
                }
                let l = void 0, c = void 0;
                try {
                    l = a.apply(null, ...i)
                } catch (e) {
                    c = e.message;
                    break
                }
                if (void 0 === n || null === n) break;
                if (o = {s_rid: n, action: "call_client_by_id_callback", success: !1}, void 0 !== c) {
                    o.error = c;
                    break
                }
                if (l && l.then) {
                    l.then(t => {
                        o.data = this.convertFunction2IdEx(t), o.success = !0, this.sendAdapter(e, o)
                    }).catch(t => {
                        o.error = t instanceof Error ? t.message : t, this.sendAdapter(e, o)
                    }), r = !0;
                    break
                }
                o.success = !0, o.data = this.convertFunction2IdEx(l)
            } while (0);
            !r && o && this.sendAdapter(e, o)
        }

        convertFunction2IdEx(e) {
            let t = e;
            if ("function" == typeof e) {
                let n = this.generateId();
                this.contextCallbackMap[n] = e, t = {"__nodeipc_callback_id__{A9C9D760-14E8-42CB-A3CB-9C0A0DDFD732}": n}
            } else if (e && "object" == typeof e) {
                t = Array.isArray(e) ? [...e] : Object.assign({}, e);
                for (let e in t) {
                    let n = t[e];
                    if ("function" == typeof n) {
                        let i = this.generateId();
                        this.contextCallbackMap[i] = n, t[e] = {"__nodeipc_callback_id__{A9C9D760-14E8-42CB-A3CB-9C0A0DDFD732}": i}
                    } else n && "object" == typeof n && (t[e] = this.convertFunction2IdEx(n))
                }
            }
            return t
        }

        decodeParameter(e, t) {
            let n = e;
            do {
                if (!e) break;
                if (!t) break;
                if ("object" != typeof e) break;
                let i = e["__nodeipc_callback_id__{A9C9D760-14E8-42CB-A3CB-9C0A0DDFD732}"];
                if (i) {
                    n = ((...e) => {
                        this.callRemoteContextById(t, i, ...e)
                    }), global.__xdasObjectLiftMonitor && global.__xdasObjectLiftMonitor.setObjectFreer(n, {
                        remoteId: t,
                        callbackId: i
                    }, l);
                    break
                }
                for (let n in e) {
                    let i = e[n];
                    e[n] = this.decodeParameter(i, t)
                }
            } while (0);
            return n
        }

        callRegisterFunction(e, t) {
            let n = void 0, i = !1;
            do {
                if (!t) break;
                let o = t.method;
                if (!o) break;
                let r = this.getNow();
                if (n = {
                    s_rid: t.s_rid,
                    action: "remote_client_callback",
                    success: !1,
                    rid: t.rid,
                    method: t.method,
                    src: t.src,
                    timestamp: t.timestamp ? t.timestamp.concat(r) : [].concat(r)
                }, !this.apis || !this.apis[o]) {
                    n.error = `callRegisterFunction ${o} is undefined`;
                    break
                }
                let a = void 0, s = this.decodeParameter(t.args, t.src);
                try {
                    a = this.apis[o].apply(null, [t.src].concat(s))
                } catch (e) {
                    n.error = e.message;
                    break
                }
                if (a && a.then) {
                    a.then(t => {
                        n.data = this.convertFunction2IdEx(t), n.success = !0, this.sendAdapter(e, n)
                    }).catch(t => {
                        n.error = t instanceof Error ? t.message : t, this.sendAdapter(e, n)
                    }), i = !0;
                    break
                }
                n.success = !0, n.data = this.convertFunction2IdEx(a)
            } while (0);
            s.information("callRegisterFunction", n), !i && n && this.sendAdapter(e, n)
        }
    }), c = global.__xdasIPCClienInstance, t.client = c
}, function (e, t, n) {
    "use strict";

    function i(e, t, n, i, o, r, a, s) {
        var l, c = "function" == typeof e ? e.options : e;
        if (t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), i && (c.functional = !0), r && (c._scopeId = "data-v-" + r), a ? (l = function (e) {
            (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), o && o.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a)
        }, c._ssrRegister = l) : o && (l = s ? function () {
            o.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot)
        } : o), l) if (c.functional) {
            c._injectStyles = l;
            var u = c.render;
            c.render = function (e, t) {
                return l.call(t), u(e, t)
            }
        } else {
            var d = c.beforeCreate;
            c.beforeCreate = d ? [].concat(d, l) : [l]
        }
        return {exports: e, options: c}
    }

    n.d(t, "a", function () {
        return i
    })
}, function (e, t) {
    var n = e.exports = {version: "2.6.11"};
    "number" == typeof __e && (__e = n)
}, function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
        return d
    }), n.d(t, "c", function () {
        return p
    }), n.d(t, "e", function () {
        return h
    }), n.d(t, "f", function () {
        return I
    }), n.d(t, "h", function () {
        return f
    }), n.d(t, "g", function () {
        return C
    }), n.d(t, "b", function () {
        return m
    }), n.d(t, "a", function () {
        return S
    });
    var i = n(79), o = n.n(i), r = n(80), a = n.n(r), s = n(27), l = n.n(s), c = n(52), u = n.n(c);

    function d() {
        return "undefined" != typeof process && u()(process, "versions", "electron")
    }

    function p(e) {
        return void 0 !== e && null !== e
    }

    function h(e) {
        return void 0 === e || null === e
    }

    function I(e) {
        return new l.a(function (t, n) {
            e ? t() : n()
        })
    }

    function f(e, t) {
        console.warn("[Warn][" + e + "], " + t)
    }

    function C(e, t, n) {
        var i = 0;
        return function () {
            var o = +new Date;
            if (o - i > t) {
                for (var r = arguments.length, a = Array(r), s = 0; s < r; s++) a[s] = arguments[s];
                e.apply(n || this, a), i = o
            }
        }
    }

    function m(e, t, n) {
        var i = null;
        return function () {
            clearTimeout(i);
            for (var o = arguments.length, r = Array(o), a = 0; a < o; a++) r[a] = arguments[a];
            i = setTimeout(e.bind.apply(e, [n || this].concat(r)), t)
        }
    }

    var S = function () {
        function e(t) {
            o()(this, e), this.unique = t.unique || !1, this.maxLength = t.maxLength || -1, this.queue = []
        }

        return a()(e, [{
            key: "push", value: function (e) {
                try {
                    if (this.queue = this.queue.filter(function (e) {
                        return void 0 !== e.timer && null !== e.timer
                    }), this.unique) {
                        var t = this.queue.filter(function (t) {
                            return e.type === t.type && e.message === t.message
                        });
                        this.queue = this.queue.filter(function (t) {
                            return !(e.type === t.type && e.message === t.message)
                        }), t.forEach(function (e) {
                            e.$destroy()
                        })
                    }
                    if (this.maxLength <= -1 || this.queue.length < this.maxLength) return this.queue.push(e), !0;
                    for (; this.queue.length >= this.maxLength;) {
                        this.queue.shift().$destroy()
                    }
                    return this.queue.push(e), !0
                } catch (e) {
                    return console.error(e), !1
                }
            }
        }, {
            key: "clear", value: function () {
                return this.queue = this.queue.filter(function (e) {
                    return void 0 !== e.timer && null !== e.timer
                }), this.queue.length
            }
        }]), e
    }()
}, function (e, t) {
    e.exports = require("path")
}, function (e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (e, t, n) {
    var i = n(70)("wks"), o = n(48), r = n(6).Symbol, a = "function" == typeof r;
    (e.exports = function (e) {
        return i[e] || (i[e] = a && r[e] || (a ? r : o)("Symbol." + e))
    }).store = i
}, function (e, t) {
    e.exports = require("electron")
}, , function (e, t, n) {
    "use strict";
    n.r(t);
    var i = {
        render: function () {
            var e = this.$createElement, t = this._self._c || e;
            return this.svg ? t("svg", {
                staticClass: "td-icon-svg",
                class: "td-icon-svg-" + this.type,
                attrs: {"aria-hidden": "true"}
            }, [t("use", {
                attrs: {
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    "xlink:href": "#td-icon-svg-" + this.type
                }
            })]) : t("i", {class: "td-icon-" + this.type})
        },
        staticRenderFns: [],
        name: "td-icon",
        props: {type: {type: String, require: !0}, svg: {type: Boolean, default: !1}},
        install: function (e) {
            e.component(i.name, i)
        }
    };
    t.default = i
}, function (e, t) {
    e.exports = require("events")
}, function (e, t, n) {
    e.exports = n(29)(50)
}, function (e, t, n) {
    var i = n(6), o = n(3), r = n(43), a = n(21), s = n(22), l = function (e, t, n) {
        var c, u, d, p = e & l.F, h = e & l.G, I = e & l.S, f = e & l.P, C = e & l.B, m = e & l.W,
            S = h ? o : o[t] || (o[t] = {}), E = S.prototype, O = h ? i : I ? i[t] : (i[t] || {}).prototype;
        for (c in h && (n = t), n) (u = !p && O && void 0 !== O[c]) && s(S, c) || (d = u ? O[c] : n[c], S[c] = h && "function" != typeof O[c] ? n[c] : C && u ? r(d, i) : m && O[c] == d ? function (e) {
            var t = function (t, n, i) {
                if (this instanceof e) {
                    switch (arguments.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t);
                        case 2:
                            return new e(t, n)
                    }
                    return new e(t, n, i)
                }
                return e.apply(this, arguments)
            };
            return t.prototype = e.prototype, t
        }(d) : f && "function" == typeof d ? r(Function.call, d) : d, f && ((S.virtual || (S.virtual = {}))[c] = d, e & l.R && E && !E[c] && a(E, c, d)))
    };
    l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
}, function (e, t, n) {
    var i = n(15), o = n(107), r = n(65), a = Object.defineProperty;
    t.f = n(16) ? Object.defineProperty : function (e, t, n) {
        if (i(e), t = r(t, !0), i(n), o) try {
            return a(e, t, n)
        } catch (e) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function (e, t, n) {
    var i = n(19);
    e.exports = function (e) {
        if (!i(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function (e, t, n) {
    e.exports = !n(35)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.assert = t.log = t.error = t.warn = t.info = t.trace = t.timeEnd = t.time = t.traceback = void 0;
    const i = n(5);
    let o, r = console;

    function a(e = 5) {
        let t = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/i, n = /at\s+()(.*):(\d*):(\d*)/i,
            o = (new Error).stack.split("\n").slice(e + 1);
        o.shift();
        let r = [];
        return o.forEach((e, o) => {
            let a = t.exec(e) || n.exec(e), s = {};
            a && 5 === a.length && (s.method = a[1], s.path = a[2], s.line = a[3], s.pos = a[4], s.file = i.basename(s.path), r.push(s))
        }), r
    }

    if (o = "renderer" === process.type ? "[Renderer] [async-remote]:" : "browser" === process.type ? "[Browser] [async-remote]:" : `[${process.type}] [async-remote]`, t.traceback = function (e = 5) {
        return a(e).map(e => e.method + "@(" + e.file + ")").join(" <= ")
    }, t.time = function (...e) {
        r.time(...e)
    }, t.timeEnd = function (...e) {
        r.timeEnd(...e)
    }, t.trace = function (...e) {
        let t = a(), n = "";
        t[0] && t[0].method && (n = n), r.trace(o, ...e)
    }, t.info = function (...e) {
        let t = a(), n = "anonymous";
        t[0] && t[0].method && (n = n), r.info(o, "[" + n + "]", e.join(","))
    }, t.warn = function (...e) {
        let t = a(), n = "";
        t[0] && t[0].method && (n = n), r.warn("<WARN>" + o, "[" + n + "]", e.join(","))
    }, t.error = function (...e) {
        let t = a(), n = "";
        t[0] && t[0].method && (n = n), r.error("<ERROR>" + o, "[" + n + "]", e.join(","))
    }, t.log = function (...e) {
        r.log(o, ...e)
    }, t.assert = function (e, t) {
        if (!e) throw new Error(t)
    }, !process.env.DEBUG_ASYNC_REMOTE) {
        let e = function () {
        };
        t.traceback = e, t.time = e, t.timeEnd = e, t.trace = e, t.info = e, t.warn = e, t.error = e, t.log = e, t.assert = e
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.SubtitleFunction = t.TimeTipFunction = t.VipBufferTipFunction = t.XmpPluginFunction = t.XmpSubtitleFunction = t.PlayListFunction = t.ZipFunction = t.XmpPlayerFunction = t.XmpPlayType = t.VideoTipFunction = t.UIFunction = t.MainMenuFunction = t.SnapshotFunction = t.LoginSDKFunction = t.LoginFunction = t.DKFunction = t.ConfigFunction = void 0, function (e) {
        e.saveConfig = "SaveConfig", e.getConfigValue = "GetConfigValue", e.setConfigValue = "SetConfigValue", e.isConfigInitFinish = "IsConfigInitFinish", e.getConfigModules = "GetConfigModules", e.setXmpAndThunderConfigValue = "SetXmpAndThunderConfigValue"
    }(t.ConfigFunction || (t.ConfigFunction = {})), function (e) {
        e.getTaskChannelInfo = "GetTaskChannelInfo", e.getTaskBaseInfo = "GetTaskBaseInfo", e.getTaskBaseInfos = "GetTaskBaseInfos", e.getTaskAttribute = "GetTaskAttribute", e.getTaskStatus = "GetTaskStatus", e.findTask = "FindTask", e.isTaskExist = "IsTaskExist", e.isSupportPlay = "IsSupportPlay", e.getTaskDownloadSpeed = "GetTaskDownloadSpeed", e.enableDcdnWithVipCert = "EnableDcdnWithVipCert", e.updateDcdnWithVipCert = "UpdateDcdnWithVipCert", e.disableDcdnWithVipCert = "DisableDcdnWithVipCert", e.getTpPeerId = "GetTpPeerId", e.execSqlite = "ExecSqlite", e.querySqlite = "QuerySqlite", e.getCategoryViewTaskList = "GetCategoryViewTaskList", e.getCategoryViewTaskListForSuspensionWnd = "GetCategoryViewTaskListForSuspensionWnd", e.isLoadStorageTaskFinish = "IsLoadStorageTaskFinish", e.isSingleBtTask = "IsSingleBtTask", e.setTaskExtStat = "SetTaskExtStat"
    }(t.DKFunction || (t.DKFunction = {})), function (e) {
        e.login = "Login", e.logout = "Logout", e.getUserID = "GetUserID", e.getSessionID = "GetSessionID", e.getSessionIDAw = "GetSessionIDAw", e.getLoginOption = "GetLoginOption", e.isLogined = "IsLogined", e.getAllUserInfo = "GetAllUserInfo", e.getAllUserInfoAw = "GetAllUserInfoAw", e.getUserInfoEx = "GetUserInfoEx", e.getUserInfo = "GetUserInfo", e.getUserInfoAw = "GetUserInfoAw", e.getUserHeader = "GetUserHeader", e.showLoginDlg = "ShowLoginDlg", e.createPersonalInfoWnd = "CreatePersonalInfoWnd", e.createRetryLoginWnd = "CreateRetryLoginWnd", e.switchAccount = "SwitchAccount", e.updateHeader = "UpdateHeader", e.pingThroughXLUserServer = "PingThroughXLUserServer", e.retryLogIn = "RetryLogIn", e.createWebWnd = "CreateWebWnd", e.isAutoLoginAw = "IsAutoLoginAw", e.channel = "Channel", e.getVipInfo = "GetVipInfo", e.getUserInfoByKeyAw = "GetUserInfoByKeyAw"
    }(t.LoginFunction || (t.LoginFunction = {})), function (e) {
        e.getDeviceID = "GetDeviceID", e.getInitData = "GetInitData", e.saveData = "SaveData"
    }(t.LoginSDKFunction || (t.LoginSDKFunction = {})), function (e) {
        e.subtitleIsSupportJpeg = "XmpSubtitleIsSupportJpeg", e.queryMediaInfo = "QueryMediaInfo", e.openVideoEdit = "OpenVideoEdit", e.openGifEdit = "OpenGifEdit", e.createSnapShotEx = "CreateSnapShotEx", e.createSnapShot = "CreateSnapShot", e.createHDPicture = "CreateHDPicture", e.isHDPicCreating = "IsHDPicCreating", e.openClearBlack = "OpenClearBlack", e.closeClearBlack = "CloseClearBlack", e.clearBlackWindow = "ClearBlackWindow", e.getBlackCollectCount = "GetBlackCollectCount", e.getCollectData = "GetCollectData", e.getClearBlackRect = "GetClearBlackRect", e.createPreViewSnapshot = "CreatePreViewSnapshot", e.getPreViewSnapshot = "GetPreViewSnapshot"
    }(t.SnapshotFunction || (t.SnapshotFunction = {})), function (e) {
        e.showSystemMenu = "ShowSystemMenu"
    }(t.MainMenuFunction || (t.MainMenuFunction = {})), function (e) {
        e.createButton = "CreateButton", e.updateButton = "UpdateButton", e.createWebview = "CreateWebview", e.setDefaultVipSpeedStatus = "SetDefaultVipSpeedStatus", e.updateVipSpeedStatus = "UpdateVipSpeedStatus", e.getWebviewInfo = "GetWebviewInfo", e.createVipView = "CreateVipview", e.showCurveChart = "showCurveChart", e.applyBrowserView = "ApplyBrowserView", e.getBrowserViewId = "GetBrowserViewId", e.initBrowserViewConfig = "initBrowserViewConfig", e.createVipMenu = "CreateVipMenu", e.getMenuSlot = "GetMenuSlot", e.openNewTab = "OpenNewTab", e.videoPause = "DoVideoPause", e.videoPlay = "DoVideoPlay", e.videoPauseEx = "DoVideoPauseEx", e.videoPlayEx = "DoVideoPlayEx", e.setPlaySpeed = "SetPlaySpeed", e.setProgressColor = "SetProgressColor", e.getProgressColor = "GetProgressColor", e.showBufferingEntry = "ShowBufferingEntry", e.isBufferingEntryShow = "IsBufferingEntryShow", e.showOpenVipEntry = "ShowOpenVipEntry", e.registerFunctionCall = "RegisterFunctionCall", e.executeFunctionCall = "ExecuteFunctionCall", e.videoGetPlayState = "VideoGetPlayState", e.setXmpFocus = "SetXmpFocus", e.leaveFullScreen = "LeaveFullScreen"
    }(t.UIFunction || (t.UIFunction = {})), function (e) {
        e.addItem = "VideoTipLeftTopAddItem", e.addLinkItem = "VideoTipLeftTopAddLinkItem", e.updateItemText = "VideoTipLeftTopUpdateItemText", e.removeItem = "VideoTipLeftTopRemoveItem", e.showTip = "VideoTipLeftTopShowTip", e.closeTip = "VideoTipLeftTopCloseTip", e.hideTip = "HideTip"
    }(t.VideoTipFunction || (t.VideoTipFunction = {})), function (e) {
        e.unKnow = "UnKnow", e.localFile = "LocalFile", e.downloadAndPlay = "DownloadAndPlay", e.yunBo = "YunBo"
    }(t.XmpPlayType || (t.XmpPlayType = {})), function (e) {
        e.init = "XmpPlayerInit", e.showAPlayerWindow = "XmpShowAPlayerWindow", e.createXmpMedia = "XmpPlayerCreateXmpMedia", e.open = "XmpPlayerOpen", e.openFile = "XmpPlayerOpenFile", e.addFile = "XmpPlayerAddFile", e.openFolder = "XmpPlayerOpenFolder", e.openBt = "XmpPlayerOpenBt", e.openUrl = "XmpPlayerOpenUrl", e.openMedia = "XmpPlayerOpenMedia", e.close = "XmpPlayerClose", e.stop = "XmpPlayerStop", e.play = "XmpPlayerPlay", e.pause = "XmpPlayerPause", e.getVersion = "XmpPlayerGetVersion", e.getState = "XmpPlayerGetState", e.isPlaying = "XmpPlayerIsPlaying", e.getDuration = "XmpPlayerGetDuration", e.getPosition = "XmpPlayerGetPosition", e.setPosition = "XmpPlayerSetPosition", e.getVideoWidth = "XmpPlayerGetVideoWidth", e.getVideoHeight = "XmpPlayerGetVideoHeight", e.getVolume = "XmpPlayerGetVolume", e.setVolume = "XmpPlayerSetVolume", e.isSeeking = "XmpPlayerIsSeeking", e.getBufferProgress = "XmpPlayerGetBufferProgress", e.getConfig = "XmpPlayerGetConfig", e.setConfig = "XmpPlayerSetConfig", e.setCurrentMedia = "XmpPlayerSetCurrentMedia", e.getCurrentMedia = "XmpPlayerGetCurrentMedia", e.getLastMediaId = "XmpPlayerGetLastMediaId", e.getMediaAttribute = "XmpPlayerMediaAttribute", e.getCurrentMediaAttribute = "XmpPlayerGetCurrentMediaAttribute", e.clearCurrentMedia = "XmpPlayerClearCurrentMedia", e.openPreMedia = "XmpPlayerOpenPreMedia", e.openNextMedia = "XmpPlayerOpenNextMedia", e.isPlayOrderFirstMedia = "XmpPlayerIsPlayOrderFirstMedia", e.isPlayOrderLastMedia = "XmpPlayerIsPlayOrderLastMedia", e.isFirstMedia = "XmpPlayerIsFirstMedia", e.isLastMedia = "XmpPlayerIsLastMedia", e.isMediasLoadFinished = "XmpPlayerIsMediasLoadFinished", e.getMediasInfo = "XmpPlayerGetMediasInfo", e.removeMedia = "XmpPlayerRemoveMedia", e.removeAllMedia = "XmpPlayerRemoveAllMedia", e.setASpectRatioAtive = "XmpPlayerSetASpectRatioAtive", e.setPlayForward = "XmpPlayerSetPlayForward", e.postionChange = "XmpPlayerPostionChange", e.getBufferRange = "XmpPlayerGetBufferRange", e.fireKeyDown = "XmpPlayerFireKeyDown", e.fireKeyUp = "XmpPlayerFireKeyUp", e.setAudioTime = "XmpPlayerSetAudioTime", e.setProportion = "XmpPlayerSetProportion", e.setVlomue = "XmpPlayerSetVlomue", e.getCurView = "XmpPlayerGetCurView", e.recordStat = "XmpPlayerRecordStat", e.getHostWnd = "XmpPlayerGetHostWnd", e.startWindowZorderChecker = "StartWindowZorderChecker", e.stopWindowZorderChecker = "StopWindowZorderChecker", e.setZOrderCheckerWindowHandle = "SetZOrderCheckerWindowHandle", e.removeZOrderCheckerWindowHandle = "RemoveZOrderCheckerWindowHandle", e.getVideoDuration = "GetVideoDuration", e.getDownloadState = "GetDownloadState", e.getResConfig = "GetResConfig", e.queryTaskState = "QueryTaskState", e.shareMediaInfo = "ShareMediaInfo", e.getThunderDirState = "GetThunderDirState", e.setThunderDirState = "SetThunderDirState", e.showSyncDig = "ShowSyncDig", e.isXmpLite = "IsXmpLite", e.handleVipPlaySpeed = "handleVipPlaySpeed", e.getMediaInfo = "GetMediaInfo", e.getCurrentMediaInfo = "GetCurrentMediaInfo", e.setMediaAttribute = "XmpPlayerSetMediaAttribute", e.updateDownloadEmbedRect = "UpdateDownloadEmbedRect", e.updatePanEmbedRect = "UpdatePanEmbedRect", e.createIndependentWindow = "CreateIndependentWindow", e.thunderResize = "ThunderResize", e.updateScrollShowOrHide = "UpdateScrollShowOrHide", e.updateFloatWindow = "IpdateFloatWindow", e.updateAplayerHwnd = "UpdateAplayerHwnd", e.updatePlaySource = "UpdatePlaySource", e.setXmpCurrentMode = "SetXmpCurrentMode", e.getXmpCurrentMode = "GetXmpCurrentMode", e.isSwitchXmpMode = "IsSwitchXmpMode", e.destroy = "XmpDestroy", e.maximize = "XmpMaximize", e.unmaximize = "XmpUnmaximize", e.minmized = "XmpMinmized", e.setPlaySpeed = "SetPlaySpeed", e.getPlaySpeed = "GetPlaySpeed", e.setWindowTopMode = "SetWindowTopMode", e.calcelWindowTopMode = "CalcelWindowTopMode", e.enterFullScreen = "EnterFullScreen", e.leaveFullScreen = "LeaveFullScreen", e.setFullcScreen = "SetFullcScreen", e.getIsFullScreen = "GetIsFullScreen", e.getIsFullScreenEx = "GetIsFullScreenEx", e.setPlayingTaskId = "SetPlayingTaskId", e.setlayPingPanFileId = "SetPlayingPanFileId", e.setSelectTaskId = "SetSelectTaskId", e.setSelectPanel = "SetSelectPanel",e.setSelectTab = "SetSelectTab",e.setSelectPanFileId = "SetSelectPanFileId",e.getPlayingTaskId = "GetPlayingTaskId",e.getPlayingPanFileId = "GetPlayingPanFileId",e.getSelectTaskId = "GetSelectTaskId",e.getSelectPanel = "GetSelectPanel",e.getSelectTab = "GetSelectTab",e.getSelectPanFileId = "GetSelectPanFileId",e.getXmpPlayType = "GetXmpPlayType",e.getDownloadAndPlayTaskData = "GetDownloadAndPlayTaskData",e.openDLNA = "OpenDLNA",e.disConnectDLNA = "DisConnectDLNA",e.getCurrentDLNADeviceName = "GetCurrentDLNADeviceName",e.addXmpVideoTipPos = "AddXmpVideoTipPos",e.removeXmpVideoTipPos = "RemoveXmpVideoTipPos",e.addXmpVideoTipPosMainRenderer = "AddXmpVideoTipPosRenderer",e.removeXmpVideoTipPosMainRenderer = "RemoveXmpVideoTipPosRenderer",e.switchSilent = "XmpSwitchSilent",e.isSilent = "XmpIsSilent",e.cancelDownloadCodecs = "OnCancelDownloadCodecs",e.getCachedDownloadCodecInfo = "OnGetCachedDownloadCodecInfo",e.onTaskStopped = "OnTaskStopped",e.showOrHideXmpWindow = "OnShowOrHideXmpWindow",e.getPlayingSoure = "OnGetPlayingSoure",e.userLogout = "OnUserLogout",e.isCurrentBuffingIsByDrag = "IsCurrentBuffingIsByDrag",e.thunderQuit = "ThunderQuit",e.getLastPlayError = "GetLastPlayError",e.showAplayerAndFloatWindow = "ShowAplayerAndFloatWindow",e.hideAplayerAndFloatWindow = "HideAplayerAndFloatWindow",e.hideEmbedAplayerAndFloatWindow = "HideEmbedAplayerAndFloatWindow",e.isPlayMusic = "IsPlayMusic",e.getMediaById = "GetMediaById",e.setPlayEndInfo = "SetPlayEndInfo",e.getPlayId = "GetPlayId",e.getPlayTick = "GetPlayTick",e.setAudioTrack = "SetAudioTrack",e.vipTellPopupWindowShow = "VipTellPopupWindowShow",e.vipTellPopupWindowClose = "VipTellPopupWindowClose"
    }(t.XmpPlayerFunction || (t.XmpPlayerFunction = {})), function (e) {
        e.doGetFileList = "ZipDoGetFileList", e.doDelFileList = "ZipDoDelFileList", e.abortGetFileList = "ZipAbortGetFileList", e.openFile = "ZipOpenFile", e.openPassWord = "ZipOpenPassWord", e.openIndex = "ZipOpenIndex", e.makeIndexFile = "ZipMakeIndexFile", e.abortMakeIndexFile = "ZipAbortMakeIndexFile", e.needWaitIndexFile = "ZipNeedWaitIndexFile", e.isIndexError = "ZipIsIndexError", e.isPasswordError = "ZipIsPasswordError", e.isFilePlaying = "ZipIsFilePlaying"
    }(t.ZipFunction || (t.ZipFunction = {})), function (e) {
        e.getMediaPlayed = "PlayList.GetMediaPlayed", e.setMediaPlayed = "PlayList.SetMediaPlayed"
    }(t.PlayListFunction || (t.PlayListFunction = {})), function (e) {
        e.isSubtitleShow = "XmpSubtitleIsSubtitleShow", e.isSubtitle2Show = "XmpSubtitleIsSubtitle2Show", e.showSubtitle = "XmpSubtitleShowSubtitle", e.showSubtitle2 = "XmpSubtitleShowSubtitle2", e.getCurrentSubtitle = "XmpSubtitleGetCurrentSubtitle", e.getCurrentSubtitle2 = "XmpSubtitleGetCurrentSubtitle2", e.getSubtitleList = "XmpSubtitleGetSubtitleList", e.loadSubtitleFile = "XmpSubtitleLoadSubtitleFile", e.setCurrentSubtitle = "XmpSubtitleSetCurrentSubtitle", e.setSubtitleLanguageIndex = "XmpSubtitleSetSubtitleLanguageIndex", e.setSubtitlePosition = "XmpSubtitleSetSubtitlePosition", e.getSubtitlePosition = "XmpSubtitleGetSubtitlePosition", e.setSubtitleFontStyle = "XmpSubtitleSetSubtitleFontStyle", e.getSubtitleSize = "XmpSubtitleGetSubtitleSize", e.getSubtitleColor = "XmpSubtitleGetSubtitleColor", e.getSubtitleFont = "XmpSubtitleGetSubtitleFont", e.setSubtitleTimming = "XmpSubtitleSetSubtitleTimming", e.getSubtitleTimming = "XmpSubtitleGetSubtitleTimming", e.setSubtitle3DMode = "XmpSubtitleSetSubtitle3DMode", e.setUseHardware = "XmpSubtitleSetUseHardware", e.reportSubTitle = "ReportSubTitle", e.uploadSubTitle = "UploadubTitle", e.onSubtitleInit = "XmpSubtitleInit", e.onSubtitleLoadSuc = "XmpSubtitleLoadSuc", e.createSuppress = "CreateSuppress", e.getSuppressState = "GetSuppressState", e.getSuppressPlayUrl = "GetSuppressPlayUrl", e.getSuppressProgress = "GetSuppressProgress", e.getSuppressNeedTime = "GetSuppressNeedTime", e.showSubtitleSuppressDialog = "ShowSubtitleSuppressDialog", e.continueSuppress = "ContinueSuppress", e.getFullState = "GetFullState", e.isSettingDefaultSecondSubtitle = "IsSettingDefaultSecondSubtitle", e.isSecondSubtitle = "IsSecondSubtitle"
    }(t.XmpSubtitleFunction || (t.XmpSubtitleFunction = {})), function (e) {
        e.getTaskInfo = "GetTaskInfo", e.shellOpen = "ShellOpen", e.openFolderWithSelectFile = "OpenFolderWithSelectFile", e.getFileMd5 = "GetFileMd5", e.getPeerID = "GetPeerID", e.getDeviceID = "GetDeviceID", e.getThunderVersion = "GetThunderVersion", e.getXmpVersion = "GetXmpVersion", e.trackEvent = "TrackEvent", e.getCurInternetState = "GetCurInternetState", e.getCurPlatform = "GetCurPlatform", e.getXmpShowMode = "GetXmpShowMode", e.isModuleEnable = "IsModuleEnable", e.updateTabSelectState = "UpdateTabSelectState", e.getMouseShow = "getMouseShow", e.updateFullFill = "UpdateFullFill", e.getWindowTopMode = "GetWindowTopMode", e.isVideoEditMode = "IsVideoEditMode", e.showCtrlView = "ShowCtrlView", e.showTopView = "ShowTopView", e.showMoreAbout = "ShowMoreAbout", e.setMenuPopUp = "SetMenuPopUp", e.setWindowPopUp = "SetWindowPopUp", e.isListExpand = "IsListExpand", e.isMenuPopUp = "IsMenuPopUp", e.isWindowPopUp = "IsWindowPopUp", e.isMouseInFloat = "IsMouseInFloat", e.switchtoNormalMode = "SwitchtoNormalMode", e.switchToTransparentMode = "SwitchToTransparentMode", e.dropOpenFiles = "DropOpenFiles", e.dropOpenUrl = "DropOpenUrl", e.getShowCondition = "GetShowCondition", e.utf8StringEncodeToBinary = "Utf8StringEncodeToBinary", e.utf8StringDecodeFromBinary = "Utf8StringDecodeFromBinary", e.getErrorCodeConfigMessage = "GetErrorCodeConfigMessage", e.quitProcess = "QuitProcess", e.associate = "Associate", e.checkXmpUpdate = "CheckXmpUpdate", e.changeVideoRatio = "ChangeVideoRatio", e.getVideoScaleRate = "GetVideoScaleRate", e.getHoverPos = "GetHoverPos", e.setHoverPos = "SetHoverPos", e.getCurrentDevice = "GetCurrentDevice", e.activeDevice = "ActiveDevice", e.setCurrentDevice = "SetCurrentDevice", e.getDeviceList = "GetDeviceList", e.searchDevice = "SearchDevice", e.isDeviceSupport = "IsDeviceSupport", e.getInitUserLoginParam = "GetInitUserLoginParam", e.handleMouseTimeOut = "HandleMouseTimeOut", e.getOpenFrom = "GetOpenFrom", e.setHideAndPauseWindow = "SetHideAndPauseWindow", e.setHideWindowNotPause = "SetHideWindowNotPause", e.setFullWindowMouseEnter = "SetFullWindowMouseHover", e.setDragMove = "SetDragMove", e.isEmbedMode = "IsEmbedMode", e.getBackUpValue = "getBackUpValue"
    }(t.XmpPluginFunction || (t.XmpPluginFunction = {})), function (e) {
        e.getVideoStuckVipData = "GetVideoStuckVipData", e.openPayVipUrl = "OpenPayVipUrl", e.actionPreOpen = "ActionPreOpen"
    }(t.VipBufferTipFunction || (t.VipBufferTipFunction = {})), function (e) {
        e.showTimeTips = "ShowTimeTips", e.destroyTimeTips = "DestroyTimeTips"
    }(t.TimeTipFunction || (t.TimeTipFunction = {})), function (e) {
        e.loadSubtitle = "LoadSubtitle", e.onlineSubtitleMatch = "OnlineSubtitleMatch", e.showOrHideSubtitle = "ShowOrHideSubtitle", e.isEnableHideSubtitle = "IsEnableHideSubtitle", e.isSubtitleHided = "IsSubtitleHided", e.loadEmbedSubtitle = "LoadEmbedSubtitle", e.loadOnlineSubtitle = "LoadOnlineSubtitle", e.loadLocalSubtitle = "LoadLocalSubtitle", e.getOnlineSubtitleList = "GetOnlineSubtitleList", e.getEmbedSubtitleList = "GetEmbedSubtitleList", e.getLocalSubtitleList = "GetLocalSubtitleList", e.getManualSubtitleList = "GetManualSubtitleList", e.getCurrentTitle = "GetCurrentTitle", e.getCurrentTitle2 = "GetCurrentTitle2", e.manualLoadSubtitle = "ManualLoadSubtitle", e.setSubtitleFontStyle = "SetSubtitleFontStyle", e.getSubtitleFontStyle = "GetSubtitleFontStyle", e.setSubtitlePosition = "SetSubtitlePosition", e.getSubtitlePosition = "GetSubtitlePosition", e.setUseHardware = "SetUseHardware", e.getSubtitleTimming = "GetSubtitleTimming", e.setSubtitleTimming = "SetSubtitleTimming"
    }(t.SubtitleFunction || (t.SubtitleFunction = {}))
}, function (e, t) {
    e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(34), o = n(5);
    t.getDefaultPrex = function () {
        return o.basename(process.execPath, ".exe")
    }, t.getSockPath = function (e) {
        const t = i.tmpdir();
        let n = e;
        e || (n = o.basename(process.execPath, ".exe"));
        let r = o.join(t, `${n}-xunlei-node-net-ipc-{FD196984-2591-4588-AA6F-5C8AC1266290}.sock`);
        return "win32" === process.platform && (r = "\\\\.\\pipe\\" + (r = (r = r.replace(/^\//, "")).replace(/\//g, "-"))), r
    }, t.serverContextName = "xunlei-node-net-ipc-server-{46105371-DE78-4442-B59F-FDA1D6D7D430}", t.mainProcessContext = "main-process", t.mainRendererContext = "main-renderer", t.isObjectEmpty = function (e) {
        let t = !0;
        do {
            if (!e) break;
            if (0 === Object.keys(e).length) break;
            t = !1
        } while (0);
        return t
    }
}, function (e, t, n) {
    var i = n(14), o = n(44);
    e.exports = n(16) ? function (e, t, n) {
        return i.f(e, t, o(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}, function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
        return n.call(e, t)
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = {
        render: function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("button", e._g({
                staticClass: "td-button",
                class: {
                    "td-button--secondary": e.secondary,
                    "td-button--other": e.other,
                    "is-disabled": e.disabled,
                    "is-status": e.status,
                    "td-button--small": "small" === e.size,
                    "td-button--large": "large" === e.size
                },
                attrs: {disabled: e.disabled}
            }, e.$listeners), [e.status && e.statusIcon ? n("td-icon", {attrs: {type: e.statusIcon}}) : e._e(), e._v(" "), e._t("default")], 2)
        },
        staticRenderFns: [],
        name: "td-button",
        props: {
            secondary: Boolean,
            other: Boolean,
            disabled: Boolean,
            size: String,
            status: Boolean,
            statusIcon: String
        },
        install: function (e) {
            e.component(i.name, i)
        }
    };
    t.default = i
}, function (e, t) {
    e.exports = require("util")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
        return require(e)
    }
}, function (e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0}), t.ThunderHelper = void 0;
    const o = n(5), r = n(25), a = n(63), s = n(0).default.getLogger("XMP.ThunderHelper"),
        l = r.default(o.join(__rootDir, "../bin/ThunderHelper.node"));
    !function (e) {
        function t(e) {
            return i(this, void 0, void 0, function* () {
                if (!e || (yield e.isDestroyed())) return 0;
                let t = 0, n = yield e.getNativeWindowHandle();
                return n && (t = n.readUIntLE(0, 4)), t
            })
        }

        function o(e, t, n, i, o, r, s, c) {
            if (!l || !e) return;
            let u = "";
            c && c.length > 3 && (u = c.substring(0, c.length - 3)), s |= a.Uflag.SWP_ASYNCWINDOWPOS, l.setWindowPos(e, t, n, i, o, r, s)
        }

        function r() {
            return l.getDPIAwareSupport()
        }

        function c(e) {
            return l.getMonitorDPIFactor(e)
        }

        function u() {
            return l.getSysDPIFactor()
        }

        e.getDriveInfo = function (e) {
            return l.getDriveInfo(e)
        }, e.getFreePartitionSpace = function (e) {
            return l.getFreePartitionSpace(e)
        }, e.getLogicalDriveStrings = function () {
            return l.getLogicalDriveStrings()
        }, e.getPartitionSpace = function (e) {
            return l.getPartitionSpace(e)
        }, e.getSystemTempPath = function () {
            return l.getSystemTempPath()
        }, e.getTaskTypeFromUrl = function (e) {
            return l.getTaskTypeFromUrl(e)
        }, e.dwmIsCompositionEnabled = function () {
            return l.dwmIsCompositionEnabled()
        }, e.setWindowLong = function (e, t, n) {
            return l.setWindowLong(e, t, n)
        }, e.showCursor = function (e) {
            l && l.showCursor(e)
        }, e.isWindowVisible = function (e) {
            return !!l && l.isWindowVisible(e)
        }, e.isWindowEnable = function (e) {
            return !!l && l.isWindowEnable(e)
        }, e.enableWindow = function (e, t) {
            return !!l && l.enableWindow(e, t)
        }, e.shChangeNotify = function () {
            if (l) return l.refreshIcon()
        }, e.getBrowserWindowHandle = t, e.setTopMostWindow = function (e) {
            return i(this, void 0, void 0, function* () {
                l && e && o(yield t(e), a.OptionOfHWNDInAfter.HWND_TOPMOST, 0, 0, 0, 0, a.Uflag.SWP_NOSIZE | a.Uflag.SWP_NOMOVE)
            })
        }, e.getGraphicsAdapterList = function () {
            return l ? l.getGraphicsAdapterList() : null
        }, e.getFileVersion = function (e) {
            return l && e ? l.getFileVersion(e) : ""
        }, e.getCursorPos = function () {
            return l ? l.getCursorPos() : {x: 0, y: 0}
        }, e.getPowerInfo = function () {
            return l ? l.getPowerInfo() : null
        }, e.setWindowRectRgn = function (e, t, n, i, o) {
            l && l.setWindowRectRgn(e, t, n, i, o)
        }, e.createRectRgn = function (e, t, n, i) {
            return l ? l.createRectRgn(e, t, n, i) : 0
        }, e.combineRgn = function (e, t, n = a.CombineRgnType.RGN_OR) {
            return l ? l.combineRgn(e, t, n) : -1
        }, e.deleteObject = function (e) {
            return !!l && l.deleteObject(e)
        }, e.setWindowRgn = function (e, t, n = !0) {
            return l ? l.setWindowRgn(e, t, n) : -1
        }, e.hitCaption = function (e) {
            return !!l && l.hitCaption(e)
        }, e.isWindowForeGround = function (e) {
            return i(this, void 0, void 0, function* () {
                if (!l) return !1;
                let t = l.getForegroundWindow();
                return e === t
            })
        }, e.getForegroundWindow = function () {
            return l ? l.getForegroundWindow() : 0
        }, e.isWindowForceGroundEx = function (e) {
            return !!l && e === l.getForegroundWindow()
        }, e.setListExpandMode = function (e) {
            return l ? l.setListExpandMode(e) : 0
        }, e.setTopMostWindowEx = function (e) {
            l && e && o(e, a.OptionOfHWNDInAfter.HWND_TOPMOST, 0, 0, 0, 0, a.Uflag.SWP_NOSIZE | a.Uflag.SWP_NOMOVE)
        }, e.cancelTopMostWindow = function (e, n) {
            return i(this, void 0, void 0, function* () {
                if (!l || !e) return;
                let i = yield t(e), r = a.Uflag.SWP_NOSIZE | a.Uflag.SWP_NOMOVE | a.Uflag.SWP_NOACTIVATE;
                n && (r |= n), o(i, a.OptionOfHWNDInAfter.HWND_NOTOPMOST, 0, 0, 0, 0, r)
            })
        }, e.cancelTopMostWindowEx = function (e, t) {
            if (!l || !e) return;
            let n = a.Uflag.SWP_NOSIZE | a.Uflag.SWP_NOMOVE | a.Uflag.SWP_NOACTIVATE;
            t && (n |= t), o(e, a.OptionOfHWNDInAfter.HWND_NOTOPMOST, 0, 0, 0, 0, n)
        }, e.getTempPath = function () {
            return l ? l.getSystemTempPath() : ""
        }, e.switchToThisWindow = function (e, t = !1) {
            l && l.switchToThisWindow(e, t)
        }, e.setScreenSaveActive = function (e) {
            if (l) return l.setScreenSaveActive(e)
        }, e.getDiskFreeSpace = function (e) {
            return l ? l.getFreePartitionSpace(e) : 0
        }, e.getMemInfoByPointer = function (e, t) {
            return l ? l.getMemInfoByPointer(e, t) : null
        }, e.setMinTrackSize = function (e, t, n) {
            return l ? l.setMinTrackSize(e, t, n) : null
        }, e.setWindowPos = function (e, t, n, i, r, a, s, c) {
            if (!l || !e || e.isDestroyed()) return;
            o(e.getNativeWindowHandle().readUIntLE(0, 4), t, n, i, r, a, s, c)
        }, e.moveWindowGently = function (e, t, n, i, o, r, a) {
            l && t && l.moveWindowGently(e, t, n, i, o, r, a)
        }, e.moveWindow = function (e, t) {
            l && e && l.moveWindow(e, t.x, t.y, t.width, t.height, !0)
        }, e.setWindowFocus = function (e, t = !0) {
            l && e && l.setWindowFocus(e, t)
        }, e.getWindowRect = function (e) {
            return l && e ? l.getWindowRect(e) : {x: 0, y: 0, width: 0, height: 0}
        }, e.getClientRect = function (e) {
            return l && e ? l.getClientRect(e) : {x: 0, y: 0, width: 0, height: 0}
        }, e.getCurrentScreenRect = function (e) {
            return l && e ? l.getCurrentScreenRect(e) : {x: 0, y: 0, width: 0, height: 0}
        }, e.getCurrentWorkRect = function (e) {
            return l && e ? l.getCurrentScreenRect(e, !0) : {x: 0, y: 0, width: 0, height: 0}
        }, e.getChildWindow = function (e) {
            return l && e ? l.getChildWindow(e) : 0
        }, e.getParentWindow = function (e) {
            return l && e ? l.getParentWindow(e) : 0
        }, e.getKeyState = function (e) {
            return l ? l.getKeyState(e) : 0
        }, e.setWindowPosEx = o, e.beginDeferWindowPos = function (e) {
            return l && e ? l.beginDeferWindowPos(e) : 0
        }, e.endDeferWindowPos = function (e) {
            return l && e ? l.endDeferWindowPos(e) : 0
        }, e.deferWindowPos = function (e, t, n, i, o, r, a, s) {
            return l && e ? l.deferWindowPos(e, t, n, i, o, r, a, s) : 0
        }, e.bindChildWindow = function (e, t, n) {
            if (!l || !t || !e || t.isDestroyed() || e.isDestroyed()) return;
            let i = t.getNativeWindowHandle().readUIntLE(0, 4), o = e.getNativeWindowHandle().readUIntLE(0, 4);
            n ? l.bindChildWindow(o, i, n.x, n.y, n.width, n.height) : l.bindChildWindow(o, i)
        }, e.bindChildWindowEx = function (e, t, n) {
            l && t && e && (n ? l.bindChildWindow(e, t, n.x, n.y, n.width, n.height) : l.bindChildWindow(e, t))
        }, e.setDllDirectory = function (e) {
            l && e && l.setDllDirectory(e)
        }, e.bringWindowToTop = function (e) {
            if (!e || e.isDestroyed()) return;
            let t = e.getNativeWindowHandle().readUIntLE(0, 4);
            l.bringWindowToTop(t)
        }, e.bringWindowToTopEx = function (e) {
            e && l.bringWindowToTop(e)
        }, e.modifyStyleEx = function (e, t, n) {
            e && l.modifyStyle(e, t, n)
        }, e.modifyStyle = function (e, t, n) {
            if (!e || e.isDestroyed()) return;
            let i = e.getNativeWindowHandle().readUIntLE(0, 4);
            l.modifyStyle(i, t, n)
        }, e.registerSliderCreate = function (e) {
            l.registerSliderCreate(e)
        }, e.showSlider = function (e) {
            l.showSlider(e)
        }, e.initSideBar = function (e, t, n, i) {
            l.initSideBar(e, t, n, i)
        }, e.uninitSideBar = function () {
            return i(this, void 0, void 0, function* () {
                return new Promise(e => {
                    l.uninitSideBar(() => {
                        e()
                    })
                })
            })
        }, e.createSideBar = function () {
            l.createSideBar()
        }, e.destroySideBar = function () {
            l.destroySideBar()
        }, e.readRegValue = function (e, t, n) {
            return l ? l.readRegString(e, t, n) : ""
        }, e.setForcegroundWindow = function (e) {
            if (!e || e.isDestroyed()) return;
            let t = e.getNativeWindowHandle().readUIntLE(0, 4);
            l.setForegroundWindow(t)
        }, e.setActiveWindowEx = function (e) {
            l && e && l.setActiveWindow(e)
        }, e.setForcegroundWindowEx = function (e) {
            e && l.setForegroundWindow(e)
        }, e.is64BitWindows = function () {
            return !!l && l.is64bitSystem()
        }, e.setSideBarExpandState = function (e) {
            l.setExpandState(e)
        }, e.unBindChildWindow = function (e, t) {
            if (!l || !t || !e || t.isDestroyed() || e.isDestroyed()) return;
            s.information("unBindChildWindow");
            let n = t.getNativeWindowHandle().readUIntLE(0, 4), i = e.getNativeWindowHandle().readUIntLE(0, 4);
            l.unBindChildWindow(i, n)
        }, e.unBindChildWindowEx = function (e, t) {
            l && t && e && (s.information("unBindChildWindowEx"), l.unBindChildWindow(e, t))
        }, e.addBrowserWindowClipStyle = function (e) {
            if (!l || !e || e.isDestroyed()) return !1;
            let t = e.getNativeWindowHandle().readUIntLE(0, 4), n = l.findChildWindow(t, "Intermediate D3D Window");
            return n && l.setWindowLong(n, a.SetWindowType.GWL_STYLE, a.WindowStyle.WS_CLIPSIBLINGS), l.setWindowLong(t, a.SetWindowType.GWL_STYLE, a.WindowStyle.WS_CLIPCHILDREN), !!n
        }, e.addBrowserWindowClipStyleEx = function (e) {
            if (!l) return !1;
            let t = l.findChildWindow(e, "Intermediate D3D Window");
            return t && l.setWindowLong(t, a.SetWindowType.GWL_STYLE, a.WindowStyle.WS_CLIPSIBLINGS), l.setWindowLong(e, a.SetWindowType.GWL_STYLE, a.WindowStyle.WS_CLIPCHILDREN), !!t
        }, e.getDoubleClickTime = function () {
            return l ? l.getDoubleClickTime() : 50
        }, e.invalidateRect = function (e, t, n) {
            l && l.invalidateRect(e, t, n)
        }, e.isIconic = function (e) {
            return !!l && l.isIconic(e)
        }, e.isZoomed = function (e) {
            return !!l && l.isZoomed(e)
        }, e.showWindow = function (e) {
            return !!l && l.showWindow(e, a.ShowWindowCmd.SW_SHOW)
        }, e.hideWindow = function (e) {
            return !!l && l.showWindow(e, a.ShowWindowCmd.SW_HIDE)
        }, e.setZorderWindow = function (e, t, n) {
            if (l) return l.setZorderWindow(e, t, n)
        }, e.getWindowLong = function (e, t) {
            return l ? l.getWindowLong(e, t) : 0
        }, e.getHelperObject = function () {
            return l
        }, e.getPeerID = function () {
            return l.getPeerID()
        }, e.getDPIAwareSupport = r, e.getMonitorDPIFactor = c, e.getSysDPIFactor = u, e.getDpi = function (e) {
            let t = 1;
            return t = r() ? c(e) : u()
        }, e.killProcess = function (e) {
            return i(this, void 0, void 0, function* () {
                let t = null;
                {
                    let i = "tasklist", o = n(106).exec;
                    t = new Promise(t => {
                        o(i, function (n, i, o) {
                            let r = !1;
                            do {
                                if (n) {
                                    s.warning(n), r = !1;
                                    break
                                }
                                i.split("\n").filter(function (t) {
                                    let n = t.trim().split(/\s+/);
                                    if (n.length < 2) return;
                                    let i = n[0], o = Number(n[1]);
                                    i.toLowerCase().indexOf(e.toLowerCase()) >= 0 && o && (process.kill(o, "SIGTERM"), r = !0)
                                })
                            } while (0);
                            t(r)
                        })
                    })
                }
                return t
            })
        }, e.sleep = function (e) {
            return i(this, void 0, void 0, function* () {
                yield new Promise((t, n) => {
                    setTimeout(t, e)
                })
            })
        }, e.calculateFileGCID = function (e) {
            return i(this, void 0, void 0, function* () {
                return new Promise(t => {
                    l.calculateFileGCID(e, e => {
                        s.warning("getVideoMediaInfo calculateFileGCID result", e), t(e)
                    })
                })
            })
        }, e.getTickCount = function () {
            return l.getTickCount()
        }, e.getTextScale = function () {
            return Number(l.readRegString("HKEY_CURRENT_USER", "SOFTWARE\\Microsoft\\Accessibility", "TextScaleFactor")) || 100
        }
    }(t.ThunderHelper || (t.ThunderHelper = {}))
}, function (e, t, n) {
    e.exports = {default: n(172), __esModule: !0}
}, function (e, t, n) {
    var i = n(129), o = n(67);
    e.exports = function (e) {
        return i(o(e))
    }
}, function (e, t) {
    e.exports = vendor_67f12d0c83789636af43
}, function (e, t) {
    e.exports = {}
}, function (e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0}), t.CommonNS = void 0;
    const o = n(1), r = n(50), a = n(238), s = "main-renderer", l = "vip-download-webview";
    !function (e) {
        function t(e, ...t) {
            return i(this, void 0, void 0, function* () {
                let n = yield o.client.callRemoteClientFunction(s, e, ...t).catch();
                return n && n.length > 0 ? n[0] : {}
            })
        }

        function n() {
            return i(this, void 0, void 0, function* () {
                return yield t(r.XmpPlayerFunction.getXmpPlayType)
            })
        }

        function c() {
            return i(this, void 0, void 0, function* () {
                return (yield n()) === r.XmpPlayType.yunBo
            })
        }

        function u() {
            return i(this, void 0, void 0, function* () {
                return Number(yield t(r.XmpPlayerFunction.getPlayingTaskId))
            })
        }

        e.callVipPlugin = function (e, ...t) {
            return i(this, void 0, void 0, function* () {
                let n = yield o.client.callRemoteClientFunction(l, e, ...t).catch();
                return n && n.length > 0 ? n[0] : {}
            })
        }, e.openPayVipUrl = function (e) {
            o.client.callRemoteClientFunction(l, "OpenPayVipUrl", e).catch()
        }, e.callXmp = t, e.getXmpPlayType = n, e.isYunBo = c, e.isPlayAndDownload = function () {
            return i(this, void 0, void 0, function* () {
                return (yield n()) === r.XmpPlayType.downloadAndPlay
            })
        }, e.isLocalPlay = function () {
            return i(this, void 0, void 0, function* () {
                return (yield n()) === r.XmpPlayType.localFile
            })
        }, e.isYunRecvTask = function () {
            return i(this, void 0, void 0, function* () {
                return t(r.XmpPlayerFunction.getCurrentMediaAttribute, r.XmpMediaAttr.IsYunRecvTask)
            })
        }, e.getXmpCurrentMode = function () {
            return i(this, void 0, void 0, function* () {
                return t(r.XmpPlayerFunction.getXmpCurrentMode)
            })
        }, e.getCurrentTaskGcid = function () {
            return i(this, void 0, void 0, function* () {
                return t(r.XmpPlayerFunction.getCurrentMediaAttribute, r.XmpMediaAttr.Gcid)
            })
        }, e.getCurrentTaskId = u, e.getCurrentTaskUrl = function () {
            return i(this, void 0, void 0, function* () {
                return t(r.XmpPlayerFunction.getCurrentMediaAttribute, r.XmpMediaAttr.Url)
            })
        }, e.getCurrentTaskIdOrPanId = function () {
            return i(this, void 0, void 0, function* () {
                return (yield c()) ? t(r.XmpPlayerFunction.getCurrentMediaAttribute, r.XmpMediaAttr.PanFileId) : t(r.XmpPlayerFunction.getPlayingTaskId)
            })
        }, e.getCurrentTaskStatus = function () {
            return i(this, void 0, void 0, function* () {
                let e = yield u();
                return a.default.getTaskStatus(e)
            })
        }, e.isZipPlay = function () {
            return i(this, void 0, void 0, function* () {
                return t(r.XmpPlayerFunction.getCurrentMediaAttribute, r.XmpMediaAttr.IsZipPlay)
            })
        }, e.getStatPlayType = function () {
            return i(this, void 0, void 0, function* () {
                return t(r.XmpPlayerFunction.getCurrentMediaAttribute, r.XmpMediaAttr.PlayType)
            })
        }, e.getStatPlayfrom = function () {
            return i(this, void 0, void 0, function* () {
                return (yield t(r.XmpPlayerFunction.getCurrentMediaAttribute, r.XmpMediaAttr.PlayFrom)) || ""
            })
        }, e.getStatOpenFrom = function () {
            return i(this, void 0, void 0, function* () {
                return (yield t(r.XmpPlayerFunction.getCurrentMediaAttribute, r.XmpMediaAttr.OpenFrom)) || ""
            })
        }, e.trackShowEvnet = function (e, n, i) {
            t("TrackShowEvent", (new Date).getTime(), e, n, function (e) {
                let t = "";
                return e.forEach((e, n) => {
                    "" !== t && (t += ","), t = t + n + "=" + e
                }), t
            }(i)).catch()
        }
    }(t.CommonNS || (t.CommonNS = {}))
}, function (e, t, n) {
    "use strict";
    var i = n(241), o = n(305), r = Object.prototype.toString;

    function a(e) {
        return "[object Array]" === r.call(e)
    }

    function s(e) {
        return null !== e && "object" == typeof e
    }

    function l(e) {
        return "[object Function]" === r.call(e)
    }

    function c(e, t) {
        if (null !== e && void 0 !== e) if ("object" != typeof e && (e = [e]), a(e)) for (var n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e); else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
    }

    e.exports = {
        isArray: a, isArrayBuffer: function (e) {
            return "[object ArrayBuffer]" === r.call(e)
        }, isBuffer: o, isFormData: function (e) {
            return "undefined" != typeof FormData && e instanceof FormData
        }, isArrayBufferView: function (e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        }, isString: function (e) {
            return "string" == typeof e
        }, isNumber: function (e) {
            return "number" == typeof e
        }, isObject: s, isUndefined: function (e) {
            return void 0 === e
        }, isDate: function (e) {
            return "[object Date]" === r.call(e)
        }, isFile: function (e) {
            return "[object File]" === r.call(e)
        }, isBlob: function (e) {
            return "[object Blob]" === r.call(e)
        }, isFunction: l, isStream: function (e) {
            return s(e) && l(e.pipe)
        }, isURLSearchParams: function (e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        }, isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
        }, forEach: c, merge: function e() {
            var t = {};

            function n(n, i) {
                "object" == typeof t[i] && "object" == typeof n ? t[i] = e(t[i], n) : t[i] = n
            }

            for (var i = 0, o = arguments.length; i < o; i++) c(arguments[i], n);
            return t
        }, extend: function (e, t, n) {
            return c(t, function (t, o) {
                e[o] = n && "function" == typeof t ? i(t, n) : t
            }), e
        }, trim: function (e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, , function (e, t) {
    e.exports = require("os")
}, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function (e, t) {
    e.exports = !0
}, function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
        return n.call(e).slice(8, -1)
    }
}, function (e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0}), t.UserHelper = t.UserEventNS = void 0;
    const o = n(11), r = n(1), a = n(0), s = n(119), l = a.default.getLogger("UserHelper");
    var c;
    !function (e) {
        e.login = "OnLogin", e.logout = "OnLogout", e.authorityChanged = "OnAuthorityChanged"
    }(c = t.UserEventNS || (t.UserEventNS = {}));

    class u extends o.EventEmitter {
        constructor() {
            super(), this.mPeerId = void 0, this.mUserId = "0", this.mSessionId = void 0, this.mIsLogin = !1, this.mIsVip = !1, this.mVipLevel = 0, this.mVasType = 0, this.mIsYear = !1, this.mPreUserIsVip = !1, this.init()
        }

        init() {
            this.setMaxListeners(0), this.attachUserEvents().catch()
        }

        getPeerId() {
            return i(this, void 0, void 0, function* () {
                if (this.mPeerId) return this.mPeerId;
                {
                    let e = yield r.client.callServerFunction("GetPeerID");
                    return e && "" !== e && (this.mPeerId = e), this.mPeerId || ""
                }
            })
        }

        getSessionId() {
            return i(this, void 0, void 0, function* () {
                if (this.mSessionId) return this.mSessionId;
                {
                    let e = yield r.client.callServerFunction("GetSessionID");
                    return e && "" !== e && (this.mSessionId = e), this.mSessionId || "0"
                }
            })
        }

        getUserinfo() {
            return i(this, void 0, void 0, function* () {
                return yield r.client.callServerFunction("GetAllUserInfo")
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

        get vipType() {
            let e = 0;
            return this.isSuperVip ? e = 5 : this.isPlatinumVip ? e = 3 : this.isVip && (e = 2), e
        }

        get authority() {
            return this.isVip
        }

        get offlineAuthority() {
            return this.isLogin
        }

        authorityChanged(e, t) {
            this.emit(c.authorityChanged, e, t)
        }

        attachUserEvents() {
            return i(this, void 0, void 0, function* () {
                let e = yield r.client.callServerFunction("IsLogined");
                if (null === e) {
                    let t = setInterval(() => i(this, void 0, void 0, function* () {
                        (e = yield r.client.callServerFunction("IsLogined")) && this.onLogin().catch(), null !== e && (clearInterval(t), s.default.attachEvent("onUserInfoChange", this.onUserInfoChange.bind(this)), s.default.attachEvent("onLoginStatusChange", this.onLoginStatusChange.bind(this)))
                    }), 50)
                } else e && this.onLogin().catch(), s.default.attachEvent("onUserInfoChange", this.onUserInfoChange.bind(this)), s.default.attachEvent("onLoginStatusChange", this.onLoginStatusChange.bind(this))
            })
        }

        onLogin() {
            return i(this, void 0, void 0, function* () {
                l.information("--\x3eonLogin"), this.mPreUserIsVip = this.mIsVip, this.clear(), this.mIsLogin = !0, yield this.parseUserInfo(), this.emit(c.login), this.authorityChanged(this.authority), l.information("<--onLogin")
            })
        }

        onLogout() {
            l.information("--\x3eonLogout"), this.mPreUserIsVip = this.mIsVip, this.clear(), this.emit(c.logout), this.authorityChanged(!1), l.information("<--onLogout")
        }

        onUserInfoChange(e, t, n) {
            return i(this, void 0, void 0, function* () {
                l.information("--\x3eonUserInfoChange"), "vipinfo" === t && (l.information("data", n), yield this.parseUserInfo(), this.mIsVip && this.authorityChanged(this.authority, !0)), l.information("<--onUserInfoChange")
            })
        }

        onLoginStatusChange(e, t, n) {
            l.information("--\x3eonLoginStatusChange", "newStatus", n), "unlogin" === n || "offline" === n ? this.onLogout() : "online" === n && this.onLogin().catch(), l.information("<--onLoginStatusChange")
        }

        clear() {
            this.mUserId = "0", this.mSessionId = void 0, this.mIsVip = !1, this.mIsLogin = !1, this.mVasType = 0, this.mVipLevel = 0
        }

        parseUserInfo() {
            return i(this, void 0, void 0, function* () {
                let e = yield this.getUserinfo();
                if (l.information("userinfo", e), e) if (this.mUserId = e.userID || "0", e.vipList && e.vipList[0]) {
                    if (e.vipList[0].isVip) {
                        let t = Number(e.vipList[0].isVip).valueOf();
                        this.mIsVip = t > 0
                    } else this.mIsVip = !1;
                    if (e.vipList[0].vipLevel && (this.mVipLevel = Number(e.vipList[0].vipLevel).valueOf()), e.vipList[0].vasType && (this.mVasType = Number(e.vipList[0].vasType).valueOf()), e.vipList[0].isYear) {
                        let t = Number(e.vipList[0].isYear).valueOf();
                        this.mIsYear = 1 === t
                    }
                } else this.mIsVip = !1
            })
        }
    }

    t.UserHelper = u, t.default = new u
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.information = ((...e) => {
    }), t.error = ((...e) => {
    }), t.warning = ((...e) => {
    }), t.critical = ((...e) => {
    }), t.verbose = ((...e) => {
    })
}, function (e, t, n) {
    "use strict";
    const i = n(17);
    if ("renderer" === process.type) {
        if (i.info("client running"), !global.__xdasAsyncRemoteExports) {
            let e = {};
            global.__xdasAsyncRemoteExports = e;
            let t = n(98);
            e.require = t.remoteRequire, e.getCurrentWebContents = t.getCurrentWebContents, e.getCurrentWindow = t.getCurrentWindow, e.Interest = t.Interest, e.global = new Proxy({}, {get: (e, n, i) => t.getGlobal(n)}), e.electron = new Proxy({}, {get: (e, n, i) => t.getBuiltin(n)}), Object.defineProperty(e, "currentWindow", {get: () => t.getCurrentWindow()}), Object.defineProperty(e, "currentWebContents", {get: () => t.getCurrentWebContents()}), Object.defineProperty(e, "process", {get: () => t.getGlobal("process")}), Object.defineProperty(e, "webContents", {get: () => t.getWebContents()})
        }
    } else if ("browser" === process.type && (i.info("server running"), !global.__xdasAsyncRemoteExports)) {
        let e = {};
        global.__xdasAsyncRemoteExports = e;
        const t = n(102);
        t.startServer(), e.getObjectRegistry = t.getObjectRegistry
    }
    e.exports = global.__xdasAsyncRemoteExports
}, function (e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0}), t.FileSystemAWNS = void 0;
    const o = n(45), r = n(5), a = n(24), s = n(34), l = a.promisify,
        c = n(0).default.getLogger("Thunder.base.fs-utilities");
    !function (e) {
        function t(e) {
            return i(this, void 0, void 0, function* () {
                let t = null;
                if (void 0 !== e) {
                    const n = l(o.open);
                    try {
                        t = yield n(e, "r")
                    } catch (e) {
                        c.warning(e)
                    }
                }
                return t
            })
        }

        function n(e) {
            return i(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e) {
                    const n = l(o.access);
                    try {
                        yield n(e), t = !0
                    } catch (e) {
                        c.information(e)
                    }
                }
                return t
            })
        }

        function a(e) {
            return i(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e) {
                    const n = l(o.mkdir);
                    try {
                        yield n(e), t = !0
                    } catch (e) {
                        c.warning(e)
                    }
                }
                return t
            })
        }

        function u(e) {
            return i(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e) {
                    const n = l(o.rmdir);
                    try {
                        yield n(e), t = !0
                    } catch (e) {
                        c.warning(e)
                    }
                }
                return t
            })
        }

        function d(e) {
            return i(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e) {
                    const n = l(o.unlink);
                    try {
                        yield n(e), t = !0
                    } catch (e) {
                        c.warning(e)
                    }
                }
                return t
            })
        }

        function p(e) {
            return i(this, void 0, void 0, function* () {
                let t = null;
                if (void 0 !== e) {
                    const n = l(o.readdir);
                    try {
                        t = yield n(e)
                    } catch (e) {
                        c.warning(e)
                    }
                }
                return t
            })
        }

        function h(e) {
            return i(this, void 0, void 0, function* () {
                let t = null;
                if (void 0 !== e) {
                    const n = l(o.lstat);
                    try {
                        t = yield n(e)
                    } catch (e) {
                        c.warning(e)
                    }
                }
                return t
            })
        }

        function I(e, t) {
            return i(this, void 0, void 0, function* () {
                let n = !1;
                if (void 0 !== e && void 0 !== t) {
                    let i = r.join(e, t), o = yield h(i);
                    n = null !== o && o.isDirectory() ? yield f(i) : yield d(i)
                }
                return n
            })
        }

        function f(e) {
            return i(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e) {
                    if (yield n(e)) {
                        t = !0;
                        let n = yield p(e);
                        for (let i = 0; i < n.length; i++) t = (yield I(e, n[i])) && t;
                        (t || 0 === n.length) && (t = (yield u(e)) && t)
                    }
                }
                return t
            })
        }

        function C(e) {
            return i(this, void 0, void 0, function* () {
                let t = !1;
                return c.information("mkdirsAW", e), void 0 !== e && ((yield n(e)) ? t = !0 : r.dirname(e) === e ? t = !1 : (yield C(r.dirname(e))) && (t = yield a(e))), t
            })
        }

        function m(e, t) {
            return i(this, void 0, void 0, function* () {
                let i;
                if (e.toLowerCase() !== t.toLowerCase() && (yield n(e))) {
                    let n = o.createReadStream(e), r = o.createWriteStream(t);
                    i = new Promise(e => {
                        n.pipe(r).on("finish", () => {
                            e(!0)
                        })
                    })
                } else i = new Promise(e => {
                    e(!1)
                });
                return i
            })
        }

        e.readFileAW = function (e) {
            return i(this, void 0, void 0, function* () {
                let t = null;
                if (void 0 !== e) {
                    const n = l(o.readFile);
                    try {
                        t = yield n(e)
                    } catch (e) {
                        c.warning(e)
                    }
                }
                return t
            })
        }, e.openFile = t, e.readFilePartAw = function (e, n, r, a = 0) {
            return i(this, void 0, void 0, function* () {
                let i = {bytesRead: 0, buffer: new Buffer(0)}, s = yield t(e);
                if (!s) return i;
                const u = l(o.read);
                try {
                    let e = new Buffer(r);
                    i = yield u(s, e, n, r, a), e = void 0
                } catch (e) {
                    c.warning(e)
                }
                return yield l(o.close)(s), i
            })
        }, e.writeFileAW = function (e, t) {
            return i(this, void 0, void 0, function* () {
                let n = !1;
                if (void 0 !== e && null !== t) {
                    const i = l(o.writeFile);
                    try {
                        yield i(e, t), n = !0
                    } catch (e) {
                        c.warning(e)
                    }
                }
                return n
            })
        }, e.existsAW = n, e.mkdirAW = a, e.rmdirAW = u, e.unlinkAW = d, e.readdirAW = p, e.readdirAllFiles = function e(t) {
            return i(this, void 0, void 0, function* () {
                let i = !1, o = [], a = yield h(t), s = yield p(t);
                if (!s) return o;
                for (let l = 0; l < s.length; l++) {
                    let c = r.join(t, s[l]);
                    (i = yield n(c)) && ((a = yield h(c)).isDirectory() ? o.push(...yield e(c)) : o.push(c))
                }
                return o
            })
        }, e.lstatAW = h, e.rmdirsAW = f, e.mkdirsAW = C, e.renameAW = function (e, t) {
            return i(this, void 0, void 0, function* () {
                if (void 0 !== e && void 0 !== t) {
                    const n = l(o.rename);
                    try {
                        yield n(e, t)
                    } catch (e) {
                        c.warning(e)
                    }
                }
            })
        }, e.copyFileAW = m, e.copyDirsAW = function e(t, o) {
            return i(this, void 0, void 0, function* () {
                let i = !1, a = yield h(t);
                if (a.isDirectory()) {
                    i = yield C(o);
                    let s = yield p(t);
                    for (let l = 0; l < s.length; l++) {
                        let c = r.join(t, s[l]), u = r.join(o, s[l]);
                        (i = yield n(c)) && (i = (a = yield h(c)).isDirectory() ? yield e(c, u) : yield m(c, u))
                    }
                }
                return i
            })
        }, e.mkdtempAW = function () {
            return i(this, void 0, void 0, function* () {
                let e = !1;
                const t = l(o.mkdtemp), n = s.tmpdir();
                try {
                    e = yield t(`${n}${r.sep}`)
                } catch (e) {
                    c.warning(e)
                }
                return e
            })
        }, e.getFileSize = function e(t) {
            return i(this, void 0, void 0, function* () {
                let i = 0;
                do {
                    if (!t) break;
                    if (!(yield n(t))) break;
                    let o = yield h(t);
                    if (o) if (o.isDirectory()) {
                        let n = yield p(t);
                        for (let o = 0; o < n.length; o++) i += (yield e(r.join(t, n[o])))
                    } else i = o.size
                } while (0);
                return i
            })
        }
    }(t.FileSystemAWNS || (t.FileSystemAWNS = {}))
}, function (e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0}), t.rpc = void 0;
    const o = n(40), r = n(8), a = n(11), s = n(24);
    t.rpc = new class {
        constructor() {
            this.mapObj = new Map, this.mapObjIniting = new Map, this.emitter = new a.EventEmitter
        }

        isXmpLiteEx() {
            return "renderer" !== process.type && "xmplite" === r.app.getName()
        }

        getAppName() {
            return i(this, void 0, void 0, function* () {
                if (void 0 === this.appName) {
                    let e = yield this.getApp();
                    this.appName = yield e.getName()
                }
                return this.appName
            })
        }

        isXmpLite() {
            return i(this, void 0, void 0, function* () {
                return "xmplite" === (yield this.getAppName())
            })
        }

        getAppVersion() {
            return i(this, void 0, void 0, function* () {
                if (void 0 === this.appVersion) {
                    let e = yield this.getApp();
                    this.appVersion = yield e.getVersion()
                }
                return this.appVersion
            })
        }

        getProcess() {
            return i(this, void 0, void 0, function* () {
                return o.global.process.__resolve()
            })
        }

        getIpcMain() {
            return i(this, void 0, void 0, function* () {
                return this.getCurrentObject("ipcMain")
            })
        }

        getDialog() {
            return i(this, void 0, void 0, function* () {
                return this.getCurrentObject("dialog")
            })
        }

        getApp() {
            return i(this, void 0, void 0, function* () {
                return this.getCurrentObject("app")
            })
        }

        getShell() {
            return i(this, void 0, void 0, function* () {
                return this.getCurrentObject("shell")
            })
        }

        getMenu() {
            return i(this, void 0, void 0, function* () {
                return this.getCurrentObject("Menu")
            })
        }

        getScreen() {
            return i(this, void 0, void 0, function* () {
                return this.getCurrentObject("screen")
            })
        }

        getWebContents() {
            return i(this, void 0, void 0, function* () {
                return this.getCurrentObject("webContents")
            })
        }

        getBrowserWindow() {
            return i(this, void 0, void 0, function* () {
                return this.getCurrentObject("BrowserWindow")
            })
        }

        getGlobalShortcut() {
            return i(this, void 0, void 0, function* () {
                return this.getCurrentObject("globalShortcut")
            })
        }

        getCurrentWebContents() {
            return i(this, void 0, void 0, function* () {
                let e = this.mapObj.get("currentWebContents");
                return void 0 === e && (this.mapObjIniting.get("currentWebContents") ? e = yield new Promise(e => i(this, void 0, void 0, function* () {
                    this.emitter.on("OnInitCurrentWebContents", t => {
                        e(t)
                    })
                })) : (this.mapObjIniting.set("currentWebContents", !0), e = yield o.getCurrentWebContents().__resolve(), this.mapObjIniting.set("currentWebContents", !1), this.emitter.emit("OnInitCurrentWebContents", e), this.emitter.listeners("OnInitCurrentWebContents").forEach(e => {
                    this.emitter.removeListener("OnInitCurrentWebContents", e)
                })), this.mapObj.set("currentWebContents", e)), e
            })
        }

        getCurrentWindow() {
            return i(this, void 0, void 0, function* () {
                let e = this.mapObj.get("currentWindow");
                return void 0 === e && (this.mapObjIniting.get("currentWindow") ? e = yield new Promise(e => i(this, void 0, void 0, function* () {
                    this.emitter.on("OnInitCurrentWindow", t => {
                        e(t)
                    })
                })) : (this.mapObjIniting.set("currentWindow", !0), e = yield o.getCurrentWindow().__resolve(), this.mapObjIniting.set("currentWindow", !1), this.emitter.emit("OnInitCurrentWindow", e), this.emitter.listeners("OnInitCurrentWindow").forEach(e => {
                    this.emitter.removeListener("OnInitCurrentWindow", e)
                })), this.mapObj.set("currentWindow", e)), e
            })
        }

        getCurrentObject(e) {
            return i(this, void 0, void 0, function* () {
                let t = this.mapObj.get(e);
                return s.isNullOrUndefined(t) && (this.mapObjIniting.get(e) ? t = yield new Promise(t => i(this, void 0, void 0, function* () {
                    this.emitter.on(e, e => {
                        t(e)
                    })
                })) : (this.mapObjIniting.set(e, !0), t = yield o.electron[e].__resolve(), this.mapObjIniting.set(e, !1), this.emitter.emit(e, t), this.emitter.listeners(e).forEach(t => {
                    this.emitter.removeListener(e, t)
                })), this.mapObj.set(e, t)), t
            })
        }
    }
}, function (e, t, n) {
    var i = n(46);
    e.exports = function (e, t, n) {
        if (i(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, i) {
                    return e.call(t, n, i)
                };
            case 3:
                return function (n, i, o) {
                    return e.call(t, n, i, o)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
    }
}, function (e, t) {
    e.exports = require("fs")
}, function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function (e, t, n) {
    var i = n(111), o = n(71);
    e.exports = Object.keys || function (e) {
        return i(e, o)
    }
}, function (e, t) {
    var n = 0, i = Math.random();
    e.exports = function (e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
    }
}, function (e, t, n) {
    var i = n(14).f, o = n(22), r = n(7)("toStringTag");
    e.exports = function (e, t, n) {
        e && !o(e = n ? e : e.prototype, r) && i(e, r, {configurable: !0, value: t})
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.APlayerConfigId = t.ConfigFunction = t.ModeChangeEvent = t.UIFunction = t.XmpMediaType = t.OpenMode = t.XmpMediaCategory = t.XmpErrorCodeNS = t.XmpMode = t.ErrorFrom = t.XmpEvent = t.ZipEvent = t.ZipFunction = t.XmpPlayerFunction = t.XmpPlayType = t.XmpMediaAttr = t.XmpMediaState = void 0, function (e) {
        e[e.Invalid = -100] = "Invalid", e[e.PreOpen = -10] = "PreOpen", e[e.QueryExt = -9] = "QueryExt", e[e.DownloadTorrent = -3] = "DownloadTorrent", e[e.ParserTorrent = -2] = "ParserTorrent", e[e.GetPlayUrl = -1] = "GetPlayUrl", e[e.Ready = 0] = "Ready", e[e.Opening = 1] = "Opening", e[e.Pausing = 2] = "Pausing", e[e.Paused = 3] = "Paused", e[e.Playing = 4] = "Playing", e[e.Play = 5] = "Play", e[e.Closeing = 6] = "Closeing", e[e.Completed = 7] = "Completed", e[e.Stopped = 8] = "Stopped", e[e.Error = 9] = "Error"
    }(t.XmpMediaState || (t.XmpMediaState = {})), function (e) {
        e[e.NumberStart = 0] = "NumberStart", e[e.MediaId = 1] = "MediaId", e[e.OwnerMediaId = 2] = "OwnerMediaId", e[e.CreateTime = 3] = "CreateTime", e[e.PlayTime = 4] = "PlayTime", e[e.LastPlayTime = 5] = "LastPlayTime", e[e.Duration = 6] = "Duration", e[e.Height = 7] = "Height", e[e.Width = 8] = "Width", e[e.PreState = 9] = "PreState", e[e.State = 10] = "State", e[e.Position = 11] = "Position", e[e.LastStartPos = 12] = "LastStartPos", e[e.PlaySpeed = 13] = "PlaySpeed", e[e.SubtitleShow = 14] = "SubtitleShow", e[e.SubtitleLanguage = 15] = "SubtitleLanguage", e[e.SubtitleType = 16] = "SubtitleType", e[e.SubtitlePosition = 17] = "SubtitlePosition", e[e.SubtitleTimming = 18] = "SubtitleTimming", e[e.Subtitle3D = 19] = "Subtitle3D", e[e.Subtitle2Show = 20] = "Subtitle2Show", e[e.Subtitle2Language = 21] = "Subtitle2Language", e[e.Subtitle2Type = 22] = "Subtitle2Type", e[e.Subtitle2Position = 23] = "Subtitle2Position", e[e.Subtitle2Timming = 24] = "Subtitle2Timming", e[e.Subtitle23D = 25] = "Subtitle23D", e[e.FileSize = 26] = "FileSize", e[e.Category = 27] = "Category", e[e.Type = 28] = "Type", e[e.MediaIndex = 29] = "MediaIndex", e[e.TaskId = 30] = "TaskId", e[e.TaskStop = 31] = "TaskStop", e[e.AudioTrack = 32] = "AudioTrack", e[e.ThunderTaskId = 33] = "ThunderTaskId", e[e.ThunderTaskSubId = 34] = "ThunderTaskSubId", e[e.PlayPercent = 35] = "PlayPercent", e[e.OpenFrom = 36] = "OpenFrom", e[e.DLNA = 37] = "DLNA", e[e.transcode = 38] = "transcode", e[e.NumberEnd = 39] = "NumberEnd", e[e.StringStart = 4096] = "StringStart", e[e.Name = 4097] = "Name", e[e.Url = 4098] = "Url", e[e.PlayUrl = 4099] = "PlayUrl", e[e.Cid = 4100] = "Cid", e[e.Gcid = 4101] = "Gcid", e[e.Subtitle = 4102] = "Subtitle", e[e.Subtitle2 = 4103] = "Subtitle2", e[e.Ext = 4104] = "Ext", e[e.Played = 4105] = "Played", e[e.AudioChannel = 4106] = "AudioChannel", e[e.OutputMode = 4107] = "OutputMode", e[e.Brightness = 4108] = "Brightness", e[e.ContrastRatio = 4109] = "ContrastRatio", e[e.Saturation = 4110] = "Saturation", e[e.SubtitleSize = 4111] = "SubtitleSize", e[e.SubtitleColor = 4112] = "SubtitleColor", e[e.SubtitleFont = 4113] = "SubtitleFont", e[e.Subtitle2Size = 4114] = "Subtitle2Size", e[e.Subtitle2Color = 4115] = "Subtitle2Color", e[e.Subtitle2Font = 4116] = "Subtitle2Font", e[e.Proportion = 4117] = "Proportion", e[e.AudioTime = 4118] = "AudioTime", e[e.Rorate = 4119] = "Rorate", e[e.FlipH = 4120] = "FlipH", e[e.FlipV = 4121] = "FlipV", e[e.LocalAudioTrack = 4122] = "LocalAudioTrack", e[e.ImgSrc = 4123] = "ImgSrc", e[e.PanFileId = 4124] = "PanFileId", e[e.RationText = 4125] = "RationText", e[e.RationTextEx = 4126] = "RationTextEx", e[e.vipLevel = 4127] = "vipLevel", e[e.PlayFrom = 4128] = "PlayFrom", e[e.Resolution = 4129] = "Resolution", e[e.TransGcid = 4130] = "TransGcid", e[e.PlayType = 4131] = "PlayType", e[e.ShowBackIcon = 4132] = "ShowBackIcon", e[e.ResolutionMedias = 4133] = "ResolutionMedias", e[e.TaskUrl = 4134] = "TaskUrl", e[e.IsYunRecvTask = 4135] = "IsYunRecvTask", e[e.MimeType = 4136] = "MimeType", e[e.StringEnd = 4137] = "StringEnd", e[e.IsZipPlay = 8192] = "IsZipPlay"
    }(t.XmpMediaAttr || (t.XmpMediaAttr = {})), function (e) {
        e.unKnow = "UnKnow", e.localFile = "LocalFile", e.downloadAndPlay = "DownloadAndPlay", e.yunBo = "YunBo"
    }(t.XmpPlayType || (t.XmpPlayType = {})), function (e) {
        e.init = "XmpPlayerInit", e.showAPlayerWindow = "XmpShowAPlayerWindow", e.createXmpMedia = "XmpPlayerCreateXmpMedia", e.open = "XmpPlayerOpen", e.openFile = "XmpPlayerOpenFile", e.addFile = "XmpPlayerAddFile", e.openFolder = "XmpPlayerOpenFolder", e.openBt = "XmpPlayerOpenBt", e.openUrl = "XmpPlayerOpenUrl", e.openMedia = "XmpPlayerOpenMedia", e.close = "XmpPlayerClose", e.stop = "XmpPlayerStop", e.play = "XmpPlayerPlay", e.pause = "XmpPlayerPause", e.getVersion = "XmpPlayerGetVersion", e.getState = "XmpPlayerGetState", e.isPlaying = "XmpPlayerIsPlaying", e.getDuration = "XmpPlayerGetDuration", e.getPosition = "XmpPlayerGetPosition", e.setPosition = "XmpPlayerSetPosition", e.getVideoWidth = "XmpPlayerGetVideoWidth", e.getVideoHeight = "XmpPlayerGetVideoHeight", e.getVolume = "XmpPlayerGetVolume", e.setVolume = "XmpPlayerSetVolume", e.isSeeking = "XmpPlayerIsSeeking", e.getBufferProgress = "XmpPlayerGetBufferProgress", e.getConfig = "XmpPlayerGetConfig", e.setConfig = "XmpPlayerSetConfig", e.setCurrentMedia = "XmpPlayerSetCurrentMedia", e.getCurrentMedia = "XmpPlayerGetCurrentMedia", e.getLastMediaId = "XmpPlayerGetLastMediaId", e.getMediaAttribute = "XmpPlayerMediaAttribute", e.getCurrentMediaAttribute = "XmpPlayerGetCurrentMediaAttribute", e.clearCurrentMedia = "XmpPlayerClearCurrentMedia", e.openPreMedia = "XmpPlayerOpenPreMedia", e.openNextMedia = "XmpPlayerOpenNextMedia", e.isPlayOrderFirstMedia = "XmpPlayerIsPlayOrderFirstMedia", e.isPlayOrderLastMedia = "XmpPlayerIsPlayOrderLastMedia", e.isFirstMedia = "XmpPlayerIsFirstMedia", e.isLastMedia = "XmpPlayerIsLastMedia", e.isMediasLoadFinished = "XmpPlayerIsMediasLoadFinished", e.getMediasInfo = "XmpPlayerGetMediasInfo", e.removeMedia = "XmpPlayerRemoveMedia", e.removeAllMedia = "XmpPlayerRemoveAllMedia", e.setASpectRatioAtive = "XmpPlayerSetASpectRatioAtive", e.setPlayForward = "XmpPlayerSetPlayForward", e.postionChange = "XmpPlayerPostionChange", e.getBufferRange = "XmpPlayerGetBufferRange", e.fireKeyDown = "XmpPlayerFireKeyDown", e.fireKeyUp = "XmpPlayerFireKeyUp", e.setAudioTime = "XmpPlayerSetAudioTime", e.setProportion = "XmpPlayerSetProportion", e.setVlomue = "XmpPlayerSetVlomue", e.getCurView = "XmpPlayerGetCurView", e.recordStat = "XmpPlayerRecordStat", e.getHostWnd = "XmpPlayerGetHostWnd", e.startWindowZorderChecker = "StartWindowZorderChecker", e.stopWindowZorderChecker = "StopWindowZorderChecker", e.setZOrderCheckerWindowHandle = "SetZOrderCheckerWindowHandle", e.removeZOrderCheckerWindowHandle = "RemoveZOrderCheckerWindowHandle", e.getVideoDuration = "GetVideoDuration", e.getDownloadState = "GetDownloadState", e.getResConfig = "GetResConfig", e.queryTaskState = "QueryTaskState", e.shareMediaInfo = "ShareMediaInfo", e.getThunderDirState = "GetThunderDirState", e.setThunderDirState = "SetThunderDirState", e.showSyncDig = "ShowSyncDig", e.isXmpLite = "IsXmpLite", e.handleVipPlaySpeed = "handleVipPlaySpeed", e.getMediaInfo = "GetMediaInfo", e.getCurrentMediaInfo = "GetCurrentMediaInfo", e.setMediaAttribute = "XmpPlayerSetMediaAttribute", e.updateDownloadEmbedRect = "UpdateDownloadEmbedRect", e.updatePanEmbedRect = "UpdatePanEmbedRect", e.createIndependentWindow = "CreateIndependentWindow", e.thunderResize = "ThunderResize", e.updateScrollShowOrHide = "UpdateScrollShowOrHide", e.updateFloatWindow = "IpdateFloatWindow", e.updateAplayerHwnd = "UpdateAplayerHwnd", e.updatePlaySource = "UpdatePlaySource", e.setXmpCurrentMode = "SetXmpCurrentMode", e.getXmpCurrentMode = "GetXmpCurrentMode", e.isSwitchXmpMode = "IsSwitchXmpMode", e.destroy = "XmpDestroy", e.maximize = "XmpMaximize", e.unmaximize = "XmpUnmaximize", e.minmized = "XmpMinmized", e.setPlaySpeed = "SetPlaySpeed", e.getPlaySpeed = "GetPlaySpeed", e.setWindowTopMode = "SetWindowTopMode", e.calcelWindowTopMode = "CalcelWindowTopMode", e.enterFullScreen = "EnterFullScreen", e.leaveFullScreen = "LeaveFullScreen", e.setFullcScreen = "SetFullcScreen", e.getIsFullScreen = "GetIsFullScreen", e.getIsFullScreenEx = "GetIsFullScreenEx", e.setPlayingTaskId = "SetPlayingTaskId", e.setlayPingPanFileId = "SetPlayingPanFileId", e.setSelectTaskId = "SetSelectTaskId", e.setSelectPanel = "SetSelectPanel",e.setSelectTab = "SetSelectTab",e.setSelectPanFileId = "SetSelectPanFileId",e.getPlayingTaskId = "GetPlayingTaskId",e.getPlayingPanFileId = "GetPlayingPanFileId",e.getSelectTaskId = "GetSelectTaskId",e.getSelectPanel = "GetSelectPanel",e.getSelectTab = "GetSelectTab",e.getSelectPanFileId = "GetSelectPanFileId",e.getXmpPlayType = "GetXmpPlayType",e.getDownloadAndPlayTaskData = "GetDownloadAndPlayTaskData",e.openDLNA = "OpenDLNA",e.disConnectDLNA = "DisConnectDLNA",e.getCurrentDLNADeviceName = "GetCurrentDLNADeviceName",e.addXmpVideoTipPos = "AddXmpVideoTipPos",e.removeXmpVideoTipPos = "RemoveXmpVideoTipPos",e.addXmpVideoTipPosMainRenderer = "AddXmpVideoTipPosRenderer",e.removeXmpVideoTipPosMainRenderer = "RemoveXmpVideoTipPosRenderer",e.switchSilent = "XmpSwitchSilent",e.isSilent = "XmpIsSilent",e.cancelDownloadCodecs = "OnCancelDownloadCodecs",e.getCachedDownloadCodecInfo = "OnGetCachedDownloadCodecInfo",e.onTaskStopped = "OnTaskStopped",e.showOrHideXmpWindow = "OnShowOrHideXmpWindow",e.getPlayingSoure = "OnGetPlayingSoure",e.userLogout = "OnUserLogout",e.isCurrentBuffingIsByDrag = "IsCurrentBuffingIsByDrag",e.thunderQuit = "ThunderQuit",e.getLastPlayError = "GetLastPlayError",e.showAplayerAndFloatWindow = "ShowAplayerAndFloatWindow",e.hideAplayerAndFloatWindow = "HideAplayerAndFloatWindow",e.hideEmbedAplayerAndFloatWindow = "HideEmbedAplayerAndFloatWindow",e.isPlayMusic = "IsPlayMusic",e.getMediaById = "GetMediaById",e.setPlayEndInfo = "SetPlayEndInfo",e.getPlayId = "GetPlayId",e.getPlayTick = "GetPlayTick",e.setAudioTrack = "SetAudioTrack"
    }(t.XmpPlayerFunction || (t.XmpPlayerFunction = {})), function (e) {
        e.doGetFileList = "ZipDoGetFileList", e.doDelFileList = "ZipDoDelFileList", e.abortGetFileList = "ZipAbortGetFileList", e.openFile = "ZipOpenFile", e.openPassWord = "ZipOpenPassWord", e.openIndex = "ZipOpenIndex", e.makeIndexFile = "ZipMakeIndexFile", e.abortMakeIndexFile = "ZipAbortMakeIndexFile", e.needWaitIndexFile = "ZipNeedWaitIndexFile", e.isIndexError = "ZipIsIndexError", e.isPasswordError = "ZipIsPasswordError", e.isFilePlaying = "ZipIsFilePlaying"
    }(t.ZipFunction || (t.ZipFunction = {})), function (e) {
        e.listCompleted = "OnZipListCompleted", e.listCompletedError = "OnZipListCompletedError", e.indexCompleted = "OnZipIndexCompleted", e.passWordError = "OnZipPassWordError", e.indexProgress = "OnZipIndexProgress", e.indexError = "OnZipIndexError", e.indexProgressBegin = "OnZipIndexProgressBegin"
    }(t.ZipEvent || (t.ZipEvent = {})), function (e) {
        e.onWindowMessage = "OnWindowMessage", e.onStateChanged = "OnStateChanged", e.onCreateMediaError = "OnCreateMediaError", e.onOpenSucceeded = "OnOpenSucceeded", e.onVideoSizeChanged = "OnVideoSizeChanged", e.onAPlayerCreated = "OnAPlayerCreated", e.onAllStoped = "OnAllStoped", e.onSeekCompleted = "OnSeekCompleted", e.onBuffer = "OnBuffer", e.onDownloadCodec = "OnDownloadCodec", e.onDownloadCodecProgress = "OnDownloadCodecProgress", e.onDropFiles = "OnDropFiles", e.onEvent = "OnEvent", e.onGetPlayUrl = "OnGetPlayUrl", e.onOpenFailed = "OnOpenFailed", e.onPlayFailed = "OnPlayFailed", e.onClearError = "OnClearError", e.onError = "OnError", e.onPlaying = "OnPlaying", e.onPreOpen = "OnPreOpen", e.onPaused = "OnPaused", e.onPlayCompleted = "OnPlayCompleted", e.onPreStop = "OnPreStop", e.onStop = "OnStop", e.onForceLoadingState = "OnForceLoadingState", e.onVipStruckPlayState = "OnVipStruckPlayState", e.onTimeDesChange = "OnTimeDesChange", e.onPositionChanged = "OnPositionChanged", e.onSnapShotCreated = "OnSnapShotCreated", e.onXmpPlayerEvent = "OnXmpPlayerEvent", e.onXmpAplayerCrash = "OnXmpAplayerCrash", e.onUpdateMediaCid = "OnUpdateMediaCid", e.onUpdateMediaGcid = "OnUpdateMediaGcid", e.onSpeedChange = "OnSpeedChange", e.onFullScreenStateChange = "OnFullScreenStateChange", e.onSetConfig = "OnSetConfig", e.onVolumeChange = "OnVolumeChange", e.onPlayStateChange = "OnPlayStateChange", e.onCurViewChanged = "OnCurViewChanged", e.onUserLogin = "OnUserLogin", e.onDwmCompositionChanged = "OnDwmCompositionChanged", e.onDpiChanged = "OnDpiChanged", e.onGPUProcessCrashed = "OnGPUProcessCrashed", e.onSetCurrentDevice = "OnSetCurrentDevice", e.onXmpPlayerRemoveMedias = "OnXmpPlayerRemoveMedias", e.onOpenMediaNotExist = "OnOpenMediaNotExist", e.onSwitchModeError = "OnSwitchModeError", e.onDlnaEvent = "OnDlnaEvent", e.onSubtitleInit = "OnSubtitleInit", e.onSubtitleUnInit = "onSubtitleUnInit", e.onEmbedSubInitFinish = "OnEmbedSubInitFinish", e.onEntertCurrentDevice = "OnEntertCurrentDevice", e.onWindowZOrderChanged = "OnWindowZOrderChanged", e.onAplayerSeekFrameChanged = "OnAplayerSeekFrameChanged", e.onModeBarChange = "OnModeBarChange", e.onThunderTaskRemove = "OnThunderTaskRemove", e.onXmpClose = "OnXmpClose", e.onXmpStartFailed = "OnXmpStartFailed", e.onVipViewInitFinish = "OnVipViewInitFinish", e.onModeEvent = "OnModeEvent", e.onMaxmized = "OnMaxmized", e.onUnMaxmized = "OnUnMaxmized", e.onSetWindowTopMost = "OnWindowTopMost", e.onCancelWindowTopMost = "OnCancelWindowTopMost", e.onOpenOrCloseSettingCenter = "OnOpenOrCloseSettingCenter", e.onUpdateBufferingUI = "OnUpdateBufferingUI"
    }(t.XmpEvent || (t.XmpEvent = {})), function (e) {
        e.XMP = "xmp", e.APlayer = "aplayer", e.DownloadKernel = "download_kernel", e.Thunder = "thunder", e.Other = "other", e.Exit = "exit", e.Crash = "crash", e.Restart = "restart", e.CancelDownloadCodecs = "cancel_download_codecs"
    }(t.ErrorFrom || (t.ErrorFrom = {})), function (e) {
        e[e.UNKNOWN_MODE = -1] = "UNKNOWN_MODE", e[e.INDEPENDENT_MODE = 0] = "INDEPENDENT_MODE", e[e.MAGNETIC_MODE = 1] = "MAGNETIC_MODE", e[e.EMBED_MODE = 2] = "EMBED_MODE"
    }(t.XmpMode || (t.XmpMode = {})), function (e) {
        let t = new Map([[2147746328, "无法解码该文件, 找不到所需的解码器或格式不支持，请尝试重新安装"], [2147680258, "找不到指定的资源"], [2147533648, "找不到指定的模块，请尝试重新安装"], [3222077446, "无法连接指定的服务器"], [3222080445, "无法播放受到版权保护的媒体文件"], [2147746351, "文件为空或无法访问"], [2147943792, "无效的播放参数，请确认输入了有效的播放文件地址"], [4294967263, "全网点播服务在维护中"], [1, "任务创建失败，无法继续下载"], [2, "任务参数错误，无法继续下载"], [3, "链接失效，无法继续下载"], [4, "任务配置文件错误，无法继续下载"], [5, "任务连接超时，无法继续下载"], [6, "文件校验失败，无法继续下载"], [7, "任务包含违规内容，无法继续下载"], [8, "下载引擎加速出错，无法继续下载"], [9, "文件路径超出系统限制，无法继续下载"], [201, "缓存文件创建失败，无法继续下载"], [202, "缓存文件写入失败，无法继续下载"], [203, "缓存文件读取失败，无法继续下载"], [204, "缓存文件文件重命名失败，无法继续下载"], [205, "缓存磁盘空间不足，无法继续下载，请清理再试"], [601, "BT任务已存在，无法继续下载"], [701, "任务包含违规内容，无法继续下载"], [702, "帐号存在异常，无法继续下载"], [703, "根据当地法律法规，文件无法下载"], [704, "应版权方要求，该文件无法下载"], [10001, "下载引擎未启动，无法继续下载"], [10002, "种子文件不存在，无法继续下载"], [44093, "播放进程崩溃了"], [44172, "边下边播任务异常,请尝试重启迅雷"], [44041, "本地BT媒体文件找不到,请稍后再试"], [44042, "种子内无有效的视频文件"], [44013, "媒体链接为网页地址,无法播放"], [44014, "媒体链接无法连接成功"], [44018, "不支持此媒体播放"], [44019, "媒体解码失败,无法播放"], [44091, "下载库崩溃,请重启迅雷播放组件再试"], [44111, "获取媒体格式失败"], [44112, "媒体文件下载失败"], [71200, "切换校验模式后，仍无法打开媒体文件"], [168965206, "播放失败，缺少必要的解码器"], [305419896, "播放出错, 可能暂不支持该格式解码, 建议尝试播放其他音视频文件"], [2326396930, "失效文件，可能已经被删除"], [2326396936, "密码错误，请重新输入"], [2147746369, "未能识别的文件"], [2147500037, "参数错误或内部错误"]]);
        e.getErrorTextByErrorCode = function (e) {
            let n = t.get(e);
            return n || (n = "未知错误"), n
        }
    }(t.XmpErrorCodeNS || (t.XmpErrorCodeNS = {})), function (e) {
        e[e.Unkown = 0] = "Unkown", e[e.Download = 1] = "Download", e[e.Play = 2] = "Play", e[e.Collect = 3] = "Collect"
    }(t.XmpMediaCategory || (t.XmpMediaCategory = {})), function (e) {
        e[e.XMPDrag = 0] = "XMPDrag"
    }(t.OpenMode || (t.OpenMode = {})), function (e) {
        e[e.Unkown = 0] = "Unkown", e[e.Dc = 1] = "Dc", e[e.Vod = 2] = "Vod", e[e.P2s = 3] = "P2s", e[e.Gvod = 4] = "Gvod", e[e.ServerXlpan = 5] = "ServerXlpan", e[e.LocalXlpan = 6] = "LocalXlpan"
    }(t.XmpMediaType || (t.XmpMediaType = {})), function (e) {
        e.createButton = "CreateButton", e.updateButton = "UpdateButton", e.createWebview = "CreateWebview", e.setDefaultVipSpeedStatus = "SetDefaultVipSpeedStatus", e.updateVipSpeedStatus = "UpdateVipSpeedStatus", e.getWebviewInfo = "GetWebviewInfo", e.createVipView = "CreateVipview", e.showCurveChart = "showCurveChart", e.applyBrowserView = "ApplyBrowserView", e.getBrowserViewId = "GetBrowserViewId", e.initBrowserViewConfig = "initBrowserViewConfig", e.createVipMenu = "CreateVipMenu", e.getMenuSlot = "GetMenuSlot", e.openNewTab = "OpenNewTab", e.videoPause = "DoVideoPause", e.videoPlay = "DoVideoPlay", e.videoPauseEx = "DoVideoPauseEx", e.videoPlayEx = "DoVideoPlayEx", e.setPlaySpeed = "SetPlaySpeed", e.setProgressColor = "SetProgressColor", e.getProgressColor = "GetProgressColor", e.showBufferingEntry = "ShowBufferingEntry", e.isBufferingEntryShow = "IsBufferingEntryShow", e.showOpenVipEntry = "ShowOpenVipEntry", e.registerFunctionCall = "RegisterFunctionCall", e.executeFunctionCall = "ExecuteFunctionCall", e.videoGetPlayState = "VideoGetPlayState", e.setXmpFocus = "SetXmpFocus", e.leaveFullScreen = "LeaveFullScreen"
    }(t.UIFunction || (t.UIFunction = {})), function (e) {
        e.onXmpModeChanging = "OnXmpModeChanging", e.onXmpModeChanged = "OnXmpModeChanged", e.onXmpEnterFullScreen = "OnXmpEnterFullScreen", e.onXmpLeaveFullScreen = "OnXmpLeaveFullScreen"
    }(t.ModeChangeEvent || (t.ModeChangeEvent = {})), function (e) {
        e.saveConfig = "SaveConfig", e.getConfigValue = "GetConfigValue", e.setConfigValue = "SetConfigValue", e.isConfigInitFinish = "IsConfigInitFinish", e.getConfigModules = "GetConfigModules", e.setXmpAndThunderConfigValue = "SetXmpAndThunderConfigValue"
    }(t.ConfigFunction || (t.ConfigFunction = {})), function (e) {
        e[e.CONFIGID_CHANGE_URL = -4] = "CONFIGID_CHANGE_URL", e[e.CONFIGID_SET_TOKEN = -3] = "CONFIGID_SET_TOKEN", e[e.CONFIGID_DOWNLOAD_PATH = -2] = "CONFIGID_DOWNLOAD_PATH", e[e.CONFIGID_GETVERSION = -1] = "CONFIGID_GETVERSION", e[e.CONFIGID_APLAYERINFO = 1] = "CONFIGID_APLAYERINFO", e[e.CONFIGID_CODECSPATH = 2] = "CONFIGID_CODECSPATH", e[e.CONFIGID_CODECSDISABLELIST = 3] = "CONFIGID_CODECSDISABLELIST", e[e.CONFIGID_CURRENTURL = 4] = "CONFIGID_CURRENTURL", e[e.CONFIGID_FILESIZE = 5] = "CONFIGID_FILESIZE", e[e.CONFIGID_PLAYMODE = 6] = "CONFIGID_PLAYMODE", e[e.CONFIGID_PLAYRESULT = 7] = "CONFIGID_PLAYRESULT", e[e.CONFIGID_AUTOPLAY = 8] = "CONFIGID_AUTOPLAY", e[e.CONFIGID_USEOPENCHAIN = 9] = "CONFIGID_USEOPENCHAIN", e[e.CONFIGID_SOUNDDEVICELIST = 10] = "CONFIGID_SOUNDDEVICELIST", e[e.CONFIGID_SOUNDDEVICECURRENT = 11] = "CONFIGID_SOUNDDEVICECURRENT", e[e.CONFIGID_SOUNDSILENT = 12] = "CONFIGID_SOUNDSILENT", e[e.CONFIGID_SOUNDBALANCE = 13] = "CONFIGID_SOUNDBALANCE", e[e.CONFIGID_DISABLEVIDEO = 14] = "CONFIGID_DISABLEVIDEO", e[e.CONFIGID_DISABLEAUDIO = 15] = "CONFIGID_DISABLEAUDIO", e[e.CONFIGID_ENABLEVSFILTER = 16] = "CONFIGID_ENABLEVSFILTER", e[e.CONFIGID_ENABLEAUDIOSWITCHER = 17] = "CONFIGID_ENABLEAUDIOSWITCHER", e[e.CONFIGID_DOWNLOADCODECSYNC = 18] = "CONFIGID_DOWNLOADCODECSYNC", e[e.CONFIGID_DOWNLOADCODECCOMPLETED = 19] = "CONFIGID_DOWNLOADCODECCOMPLETED", e[e.CONFIGID_WINDOWHANDLE = 20] = "CONFIGID_WINDOWHANDLE", e[e.CONFIGID_WINDOWMOVED = 21] = "CONFIGID_WINDOWMOVED", e[e.CONFIGID_SETTINGEXPLAIN = 22] = "CONFIGID_SETTINGEXPLAIN", e[e.CONFIGID_SETTINGVALUES = 23] = "CONFIGID_SETTINGVALUES", e[e.CONFIGID_LOADPLUGIN = 24] = "CONFIGID_LOADPLUGIN", e[e.CONFIGID_FREEPLUGIN = 25] = "CONFIGID_FREEPLUGIN", e[e.CONFIGID_FLASHINTERACTION = 26] = "CONFIGID_FLASHINTERACTION", e[e.CONFIGID_INTELMEDIASDKDECODER = 27] = "CONFIGID_INTELMEDIASDKDECODER", e[e.CONFIGID_INTELMEDIASDKENCODER = 28] = "CONFIGID_INTELMEDIASDKENCODER", e[e.CONFIGID_READSIZE = 29] = "CONFIGID_READSIZE", e[e.CONFIGID_READOFFSET = 30] = "CONFIGID_READOFFSET", e[e.CONFIGID_READPOSITION = 31] = "CONFIGID_READPOSITION", e[e.CONFIGID_WRITEOFFSET = 32] = "CONFIGID_WRITEOFFSET", e[e.CONFIGID_ALLOWLOG = 33] = "CONFIGID_ALLOWLOG", e[e.CONFIGID_MEDIAINFO = 34] = "CONFIGID_MEDIAINFO", e[e.CONFIGID_PLUGINSTDCALL = 35] = "CONFIGID_PLUGINSTDCALL", e[e.CONFIGID_LOGOSETTINGS = 36] = "CONFIGID_LOGOSETTINGS", e[e.CONFIGID_LOGOFILE = 37] = "CONFIGID_LOGOFILE", e[e.CONFIGID_CUSTOMCURSOR = 38] = "CONFIGID_CUSTOMCURSOR", e[e.CONFIGID_READSPEED = 41] = "CONFIGID_READSPEED", e[e.CONFIGID_APLAYERDNN = 43] = "CONFIGID_APLAYERDNN", e[e.CONFIGID_ENABLELOG = 44] = "CONFIGID_ENABLELOG", e[e.CONFIGID_FISRTFRAMETIME = 45] = "CONFIGID_FISRTFRAMETIME", e[e.CONFIGID_SEEK_FRAME_TIME = 46] = "CONFIGID_SEEK_FRAME_TIME", e[e.CONFIGID_SEEK_FRAME_TIME_AVERAGE = 47] = "CONFIGID_SEEK_FRAME_TIME_AVERAGE", e[e.CONFIGID_AUTOPLAY_AFTERBUFFER = 48] = "CONFIGID_AUTOPLAY_AFTERBUFFER", e[e.CONFIGID_STAT = 50] = "CONFIGID_STAT", e[e.CONFIGID_TIMEISFRAME = 101] = "CONFIGID_TIMEISFRAME", e[e.CONFIGID_STARTPOSITION = 102] = "CONFIGID_STARTPOSITION", e[e.CONFIGID_STOPPOSITION = 103] = "CONFIGID_STOPPOSITION", e[e.CONFIGID_PLAYSPEED = 104] = "CONFIGID_PLAYSPEED", e[e.CONFIGID_KEYFRAMESEEK = 105] = "CONFIGID_KEYFRAMESEEK", e[e.CONFIGID_KEYFRAMECOUNT = 106] = "CONFIGID_KEYFRAMECOUNT", e[e.CONFIGID_KEYFRAMELIST = 107] = "CONFIGID_KEYFRAMELIST", e[e.CONFIGID_KEYFRAMECURRENT = 108] = "CONFIGID_KEYFRAMECURRENT", e[e.CONFIGID_CANFRAMESTEPFORWARDONE = 109] = "CONFIGID_CANFRAMESTEPFORWARDONE", e[e.CONFIGID_CANFRAMESTEPFORWARDMULTI = 110] = "CONFIGID_CANFRAMESTEPFORWARDMULTI", e[e.CONFIGID_CANFRAMESTEPBACKWORDKONE = 111] = "CONFIGID_CANFRAMESTEPBACKWORDKONE", e[e.CONFIGID_CANFRAMESTEPBACKWORDMULTI = 112] = "CONFIGID_CANFRAMESTEPBACKWORDMULTI", e[e.CONFIGID_FRAMESTEP = 113] = "CONFIGID_FRAMESTEP", e[e.CONFIGID_ISFRAMESTEPPING = 114] = "CONFIGID_ISFRAMESTEPPING", e[e.CONFIGID_READINDEXWHENOPEN = 115] = "CONFIGID_READINDEXWHENOPEN", e[e.CONFIGID_TIMEPOSITIONLIST = 116] = "CONFIGID_TIMEPOSITIONLIST", e[e.CONFIGID_FRAMEINTERVAL = 117] = "CONFIGID_FRAMEINTERVAL", e[e.CONFIGID_FRAMESDRAWN = 118] = "CONFIGID_FRAMESDRAWN", e[e.CONFIGID_LOOPPLAY = 119] = "CONFIGID_LOOPPLAY", e[e.CONFIGID_NOCLOSEWHENCOMPLETE = 120] = "CONFIGID_NOCLOSEWHENCOMPLETE", e[e.CONFIGID_MOUSEFRAMESEEK = 122] = "CONFIGID_MOUSEFRAMESEEK", e[e.CONFIGID_RENDERMODECONFIG = 201] = "CONFIGID_RENDERMODECONFIG", e[e.CONFIGID_RENDERMODECURRENT = 202] = "CONFIGID_RENDERMODECURRENT", e[e.CONFIGID_ASPECTRATIONATIVE = 203] = "CONFIGID_ASPECTRATIONATIVE", e[e.CONFIGID_ASPECTRATIOCUSTOM = 204] = "CONFIGID_ASPECTRATIOCUSTOM", e[e.CONFIGID_VIDEOSOURCEPOSITION = 205] = "CONFIGID_VIDEOSOURCEPOSITION", e[e.CONFIGID_VIDEOTARGETPOSITION = 206] = "CONFIGID_VIDEOTARGETPOSITION", e[e.CONFIGID_CLIPBLACKBANDENABLE = 207] = "CONFIGID_CLIPBLACKBANDENABLE", e[e.CONFIGID_CLIPBLACKBANDSTILL = 208] = "CONFIGID_CLIPBLACKBANDSTILL", e[e.CONFIGID_SPEEDUPENABLE = 209] = "CONFIGID_SPEEDUPENABLE", e[e.CONFIGID_SPEEDUPCUDAFIRST = 210] = "CONFIGID_SPEEDUPCUDAFIRST", e[e.CONFIGID_SPEEDUPSTATUS = 211] = "CONFIGID_SPEEDUPSTATUS", e[e.CONFIGID_SPEEDUPQUERY = 212] = "CONFIGID_SPEEDUPQUERY", e[e.CONFIGID_VIDEOADJUSTUSABLE = 213] = "CONFIGID_VIDEOADJUSTUSABLE", e[e.CONFIGID_BRIGHTNESS = 214] = "CONFIGID_BRIGHTNESS", e[e.CONFIGID_CONTRAST = 215] = "CONFIGID_CONTRAST", e[e.CONFIGID_SATURATION = 216] = "CONFIGID_SATURATION", e[e.CONFIGID_HUE = 217] = "CONFIGID_HUE", e[e.CONFIGID_COREAVCOUTPUTLEVEL = 218] = "CONFIGID_COREAVCOUTPUTLEVEL", e[e.CONFIGID_UNUSED = 219] = "CONFIGID_UNUSED", e[e.CONFIGID_VIDEOCODEC = 220] = "CONFIGID_VIDEOCODEC", e[e.CONFIGID_VIDEOOUTPUTFORMAT = 221] = "CONFIGID_VIDEOOUTPUTFORMAT", e[e.CONFIGID_CURRENTBLACKBANDINFO = 222] = "CONFIGID_CURRENTBLACKBANDINFO", e[e.CONFIGID_IMAGEPROCESSUSABLE = 301] = "CONFIGID_IMAGEPROCESSUSABLE", e[e.CONFIGID_IMAGEFLIPH = 302] = "CONFIGID_IMAGEFLIPH", e[e.CONFIGID_IMAGEFLIPV = 303] = "CONFIGID_IMAGEFLIPV", e[e.CONFIGID_IMAGEROTATE = 304] = "CONFIGID_IMAGEROTATE", e[e.CONFIGID_IMAGENORMALIZEENABLE = 305] = "CONFIGID_IMAGENORMALIZEENABLE", e[e.CONFIGID_IMAGENORMALIZECOMPARE = 306] = "CONFIGID_IMAGENORMALIZECOMPARE", e[e.CONFIGID_IMAGESHARPEN = 307] = "CONFIGID_IMAGESHARPEN", e[e.CONFIGID_IMAGECOLOR3DENABLE = 308] = "CONFIGID_IMAGECOLOR3DENABLE",e[e.CONFIGID_IMAGECOLOR3DOKAY = 309] = "CONFIGID_IMAGECOLOR3DOKAY",e[e.CONFIGID_IMAGECOLOR3DSHOW = 310] = "CONFIGID_IMAGECOLOR3DSHOW",e[e.CONFIGID_IMAGECOLOR3DMODE = 311] = "CONFIGID_IMAGECOLOR3DMODE",e[e.CONFIGID_IMAGECOLOR3DCOLOR = 312] = "CONFIGID_IMAGECOLOR3DCOLOR",e[e.CONFIGID_IMAGEUSEOPENCL = 313] = "CONFIGID_IMAGEUSEOPENCL",e[e.CONFIGID_IMAGEUSEAVX2 = 314] = "CONFIGID_IMAGEUSEAVX2",e[e.CONFIGID_IMAGEUSESSE2 = 315] = "CONFIGID_IMAGEUSESSE2",e[e.CONFIGID_AUIDOPROCESSUSABLE = 401] = "CONFIGID_AUIDOPROCESSUSABLE",e[e.CONFIGID_AUDIOTRACKLIST = 402] = "CONFIGID_AUDIOTRACKLIST",e[e.CONFIGID_AUDIOTRACKCURRENT = 403] = "CONFIGID_AUDIOTRACKCURRENT",e[e.CONFIGID_AUDIOCHANNEL = 404] = "CONFIGID_AUDIOCHANNEL",e[e.CONFIGID_AUDIOTIMESHIFT = 405] = "CONFIGID_AUDIOTIMESHIFT",e[e.CONFIGID_AUDIONORMALIZE = 406] = "CONFIGID_AUDIONORMALIZE",e[e.CONFIGID_AUDIOVSSENABLE = 407] = "CONFIGID_AUDIOVSSENABLE",e[e.CONFIGID_AUDIOVSSDEEP = 408] = "CONFIGID_AUDIOVSSDEEP",e[e.CONFIGID_AUDIOLOADTRACK = 409] = "CONFIGID_AUDIOLOADTRACK",e[e.CONFIGID_AUDIOCODEC = 410] = "CONFIGID_AUDIOCODEC",e[e.CONFIGID_AUDIOINPUTCHANNELS = 411] = "CONFIGID_AUDIOINPUTCHANNELS",e[e.CONFIGID_AUDIOINPUTSAMPLERATE = 412] = "CONFIGID_AUDIOINPUTSAMPLERATE",e[e.CONFIGID_AUDIOINPUTSAMPLEBIT = 413] = "CONFIGID_AUDIOINPUTSAMPLEBIT",e[e.CONFIGID_AUDIOOUTPUTFORMAT = 414] = "CONFIGID_AUDIOOUTPUTFORMAT",e[e.CONFIGID_AUDIOOUTPUTCHANNELS = 415] = "CONFIGID_AUDIOOUTPUTCHANNELS",e[e.CONFIGID_AUDIOOUTPUTSAMPLERATE = 416] = "CONFIGID_AUDIOOUTPUTSAMPLERATE",e[e.CONFIGID_AUDIOOUTPUTSAMPLEBIT = 417] = "CONFIGID_AUDIOOUTPUTSAMPLEBIT",e[e.CONFIGID_SUBTITLEUSABLE = 501] = "CONFIGID_SUBTITLEUSABLE",e[e.CONFIGID_SUBTITLEEXTNAMELIST = 502] = "CONFIGID_SUBTITLEEXTNAMELIST",e[e.CONFIGID_SUBTITLEFILENAME = 503] = "CONFIGID_SUBTITLEFILENAME",e[e.CONFIGID_SUBTITLESHOW = 504] = "CONFIGID_SUBTITLESHOW",e[e.CONFIGID_SUBTITLELANGUAGELIST = 505] = "CONFIGID_SUBTITLELANGUAGELIST",e[e.CONFIGID_SUBTITLELANGUAGECURRENT = 506] = "CONFIGID_SUBTITLELANGUAGECURRENT",e[e.CONFIGID_SUBTITLEPLACEMENT = 507] = "CONFIGID_SUBTITLEPLACEMENT",e[e.CONFIGID_SUBTITLEFONT = 508] = "CONFIGID_SUBTITLEFONT",e[e.CONFIGID_SUBTITLETIMING = 509] = "CONFIGID_SUBTITLETIMING",e[e.CONFIGID_SUBTITLE3D = 510] = "CONFIGID_SUBTITLE3D",e[e.CONFIGID_SUBTITLECONTENT = 511] = "CONFIGID_SUBTITLECONTENT",e[e.CONFIGID_PICTUREUSABLE = 601] = "CONFIGID_PICTUREUSABLE",e[e.CONFIGID_PICTUREENABLE = 602] = "CONFIGID_PICTUREENABLE",e[e.CONFIGID_PICTUREBOUND = 603] = "CONFIGID_PICTUREBOUND",e[e.CONFIGID_PICTUREWIDTH = 604] = "CONFIGID_PICTUREWIDTH",e[e.CONFIGID_PICTUREHEIGHT = 605] = "CONFIGID_PICTUREHEIGHT",e[e.CONFIGID_PICTURELEFT = 606] = "CONFIGID_PICTURELEFT",e[e.CONFIGID_PICTURETOP = 607] = "CONFIGID_PICTURETOP",e[e.CONFIGID_PICTUREALPHA = 608] = "CONFIGID_PICTUREALPHA",e[e.CONFIGID_PICTURECOLORKEY = 609] = "CONFIGID_PICTURECOLORKEY",e[e.CONFIGID_PICTUREHITTEST = 610] = "CONFIGID_PICTUREHITTEST",e[e.CONFIGID_PICTUREHITALPHA = 611] = "CONFIGID_PICTUREHITALPHA",e[e.CONFIGID_PICTURETEXT = 612] = "CONFIGID_PICTURETEXT",e[e.CONFIGID_PICTUREFONT = 613] = "CONFIGID_PICTUREFONT",e[e.CONFIGID_PICTURERGBABUFFER = 614] = "CONFIGID_PICTURERGBABUFFER",e[e.CONFIGID_PICTUREBMPHANDLE = 615] = "CONFIGID_PICTUREBMPHANDLE",e[e.CONFIGID_PICTUREBMPFILENAME = 616] = "CONFIGID_PICTUREBMPFILENAME",e[e.CONFIGID_PICTUREPNGFILENAME = 617] = "CONFIGID_PICTUREPNGFILENAME",e[e.CONFIGID_PICTURESWFFILENAME = 618] = "CONFIGID_PICTURESWFFILENAME",e[e.CONFIGID_PICTURESWFSIZE = 619] = "CONFIGID_PICTURESWFSIZE",e[e.CONFIGID_PICTURESWFCONTROL = 620] = "CONFIGID_PICTURESWFCONTROL",e[e.CONFIGID_PICTUREEVRCPLINEAR = 621] = "CONFIGID_PICTUREEVRCPLINEAR",e[e.CONFIGID_PICTUREATTACHTOVR = 622] = "CONFIGID_PICTUREATTACHTOVR",e[e.CONFIGID_SNAPSHOTUSABLE = 701] = "CONFIGID_SNAPSHOTUSABLE",e[e.CONFIGID_SNAPSHOTIMAGE = 702] = "CONFIGID_SNAPSHOTIMAGE",e[e.CONFIGID_SNAPSHOTWIDTH = 703] = "CONFIGID_SNAPSHOTWIDTH",e[e.CONFIGID_SNAPSHOTHEIGHT = 704] = "CONFIGID_SNAPSHOTHEIGHT",e[e.CONFIGID_SNAPSHOTSOURCEPOSITION = 705] = "CONFIGID_SNAPSHOTSOURCEPOSITION",e[e.CONFIGID_SNAPSHOTKEEPASPECTRATIO = 706] = "CONFIGID_SNAPSHOTKEEPASPECTRATIO",e[e.CONFIGID_SNAPSHOTFORMAT = 707] = "CONFIGID_SNAPSHOTFORMAT",e[e.CONFIGID_SNAPSHOTJPEGQUALITY = 708] = "CONFIGID_SNAPSHOTJPEGQUALITY",e[e.CONFIGID_SNAPSHOTGIFPARAM = 709] = "CONFIGID_SNAPSHOTGIFPARAM",e[e.CONFIGID_SNAPSHOTABORT = 710] = "CONFIGID_SNAPSHOTABORT",e[e.CONFIGID_SNAPSHOTGIFWORKING = 711] = "CONFIGID_SNAPSHOTGIFWORKING",e[e.CONFIGID_SNAPSHOTGIFPROGRESS = 712] = "CONFIGID_SNAPSHOTGIFPROGRESS",e[e.CONFIGID_SNAPSHOTSUBTITLE = 713] = "CONFIGID_SNAPSHOTSUBTITLE",e[e.CONFIGID_CUTUSABLE = 801] = "CONFIGID_CUTUSABLE",e[e.CONFIGID_CUTFORMATLIST = 802] = "CONFIGID_CUTFORMATLIST",e[e.CONFIGID_CUTFORMATCURRENT = 803] = "CONFIGID_CUTFORMATCURRENT",e[e.CONFIGID_CUTFILENAME = 804] = "CONFIGID_CUTFILENAME",e[e.CONFIGID_TRANSCODEVIDEOWIDTH = 901] = "CONFIGID_TRANSCODEVIDEOWIDTH",e[e.CONFIGID_TRANSCODEVIDEOHEIGHT = 902] = "CONFIGID_TRANSCODEVIDEOHEIGHT",e[e.CONFIGID_TRANSCODEKEEPASPECTRATIO = 903] = "CONFIGID_TRANSCODEKEEPASPECTRATIO",e[e.CONFIGID_TRANSCODEROUNDSIZE = 904] = "CONFIGID_TRANSCODEROUNDSIZE",e[e.CONFIGID_TRANSCODEAUDIOTRACK = 905] = "CONFIGID_TRANSCODEAUDIOTRACK",e[e.CONFIGID_TRANSCODESUBTLTELANGUAGE = 906] = "CONFIGID_TRANSCODESUBTLTELANGUAGE",e[e.CONFIGID_TRANSCODECROPBORDER = 907] = "CONFIGID_TRANSCODECROPBORDER",e[e.CONFIGID_TRANSCODEVSFILTER = 908] = "CONFIGID_TRANSCODEVSFILTER",e[e.CONFIGID_NETWORK_BUFFERENTER = 1001] = "CONFIGID_NETWORK_BUFFERENTER",e[e.CONFIGID_NETWORK_BUFFERLEAVE = 1002] = "CONFIGID_NETWORK_BUFFERLEAVE",e[e.CONFIGID_NETWORK_NOBUFFERDRY = 1003] = "CONFIGID_NETWORK_NOBUFFERDRY",e[e.CONFIGID_NETWORK_SEEKBUFFERTIMEOUT = 1004] = "CONFIGID_NETWORK_SEEKBUFFERTIMEOUT",e[e.CONFIGID_NETWORK__ISSEEKBUFFER = 1012] = "CONFIGID_NETWORK__ISSEEKBUFFER",e[e.CONFIGID_NETWORK__FASTSEEK = 1013] = "CONFIGID_NETWORK__FASTSEEK",e[e.CONFIGID_NETWORK__STUFFURL = 1014] = "CONFIGID_NETWORK__STUFFURL",e[e.CONFIGID_NETWORK__TS_INDEX_STATUS = 1018] = "CONFIGID_NETWORK__TS_INDEX_STATUS",e[e.CONFIGID_NETWORK__STUFF_READ_SIZE = 1019] = "CONFIGID_NETWORK__STUFF_READ_SIZE",e[e.CONFIGID_HTTPENABLEVOD = 1101] = "CONFIGID_HTTPENABLEVOD",e[e.CONFIGID_HTTPFAILEDRECONNECTCOUNT = 1102] = "CONFIGID_HTTPFAILEDRECONNECTCOUNT",e[e.CONFIGID_HTTPFAILEDRECONNECTINTERVAL = 1103] = "CONFIGID_HTTPFAILEDRECONNECTINTERVAL",e[e.CONFIGID_HTTPLIVE = 1104] = "CONFIGID_HTTPLIVE",e[e.CONFIGID_HTTPCOOKIE = 1105] = "CONFIGID_HTTPCOOKIE",e[e.CONFIGID_HTTPREFERER = 1106] = "CONFIGID_HTTPREFERER",e[e.CONFIGID_HTTPCUSTOMHEADERS = 1107] = "CONFIGID_HTTPCUSTOMHEADERS",e[e.CONFIGID_HTTPUSERAGENT = 1108] = "CONFIGID_HTTPUSERAGENT",e[e.CONFIGID_MULTISOURCEUSABLE = 1201] = "CONFIGID_MULTISOURCEUSABLE",e[e.CONFIGID_MULTISOURCECHANGE = 1202] = "CONFIGID_MULTISOURCECHANGE",e[e.CONFIGID_MULTISOURCESEEK = 1203] = "CONFIGID_MULTISOURCESEEK",e[e.CONFIGID_MULTISOURCECURRENT = 1204] = "CONFIGID_MULTISOURCECURRENT",e[e.CONFIGID_LYRICUSABLE = 1301] = "CONFIGID_LYRICUSABLE",e[e.CONFIGID_LYRICSHOW = 1302] = "CONFIGID_LYRICSHOW",e[e.CONFIGID_LYRICUPDATETIME = 1303] = "CONFIGID_LYRICUPDATETIME",e[e.CONFIGID_LYRICFORMAT = 1304] = "CONFIGID_LYRICFORMAT",e[e.CONFIGID_LYRICFILE = 1305] = "CONFIGID_LYRICFILE",e[e.CONFIGID_LYRICCONTENT = 1306] = "CONFIGID_LYRICCONTENT",e[e.CONFIGID_LYRICBACKCOLOR = 1307] = "CONFIGID_LYRICBACKCOLOR",e[e.CONFIGID_LYRICPICTUREFILENAME = 1308] = "CONFIGID_LYRICPICTUREFILENAME",e[e.CONFIGID_LYRICPICTUREHANDLE = 1309] = "CONFIGID_LYRICPICTUREHANDLE",e[e.CONFIGID_LYRICPICTUREMODE = 1310] = "CONFIGID_LYRICPICTUREMODE",e[e.CONFIGID_LYRICFONT = 1311] = "CONFIGID_LYRICFONT",e[e.CONFIGID_LYRICFONTNORMALCOLOR = 1312] = "CONFIGID_LYRICFONTNORMALCOLOR",e[e.CONFIGID_LYRICFONTHIGHLIGHTCOLOR = 1313] = "CONFIGID_LYRICFONTHIGHLIGHTCOLOR",e[e.CONFIGID_LYRICFRAMEENABLE = 1314] = "CONFIGID_LYRICFRAMEENABLE",e[e.CONFIGID_LYRICFRAMECOLOR = 1315] = "CONFIGID_LYRICFRAMECOLOR",e[e.CONFIGID_LYRICSMOOTHMULITPLE = 1316] = "CONFIGID_LYRICSMOOTHMULITPLE",e[e.CONFIGID_LYRICSMOOTHONLYLYRIC = 1317] = "CONFIGID_LYRICSMOOTHONLYLYRIC",e[e.CONFIGID_LYRICALPHA = 1318] = "CONFIGID_LYRICALPHA",e[e.CONFIGID_LYRICANIMATION = 1319] = "CONFIGID_LYRICANIMATION",e[e.CONFIGID_LYRICTIMEOFFSET = 1320] = "CONFIGID_LYRICTIMEOFFSET",e[e.CONFIGID_LYRICDRAGENABLE = 1321] = "CONFIGID_LYRICDRAGENABLE",e[e.CONFIGID_LYRICDRAGLINECOLOR = 1322] = "CONFIGID_LYRICDRAGLINECOLOR",e[e.CONFIGID_LYRICDRAGTEXTCOLOR = 1323] = "CONFIGID_LYRICDRAGTEXTCOLOR",e[e.CONFIGID_LYRICDRAGTEXTLEFT = 1324] = "CONFIGID_LYRICDRAGTEXTLEFT",e[e.CONFIGID_LYRICDRAGTEXTRIGHTFRONT = 1325] = "CONFIGID_LYRICDRAGTEXTRIGHTFRONT",e[e.CONFIGID_LYRICDRAGTEXTRIGHTBACK = 1326] = "CONFIGID_LYRICDRAGTEXTRIGHTBACK",e[e.CONFIGID_LYRICDRAGTEXTRIGHTDIV = 1327] = "CONFIGID_LYRICDRAGTEXTRIGHTDIV",e[e.CONFIGID_LYRICALIGN = 1328] = "CONFIGID_LYRICALIGN",e[e.CONFIGID_DVDCHAPTERS = 1401] = "CONFIGID_DVDCHAPTERS",e[e.CONFIGID_DVDANGLECOUNT = 1402] = "CONFIGID_DVDANGLECOUNT",e[e.CONFIGID_DVDAUDIOS = 1403] = "CONFIGID_DVDAUDIOS",e[e.CONFIGID_DVDSUBPICTURES = 1404] = "CONFIGID_DVDSUBPICTURES",e[e.CONFIGID_DVDCURRENTCHAPTER = 1405] = "CONFIGID_DVDCURRENTCHAPTER",e[e.CONFIGID_DVDCURRENTANGLE = 1406] = "CONFIGID_DVDCURRENTANGLE",e[e.CONFIGID_DVDCURRENTAUDIO = 1407] = "CONFIGID_DVDCURRENTAUDIO",e[e.CONFIGID_DVDCURRENTSUBPICTURE = 1408] = "CONFIGID_DVDCURRENTSUBPICTURE",e[e.CONFIGID_DVDPARENTALLEVEL = 1409] = "CONFIGID_DVDPARENTALLEVEL",e[e.CONFIGID_DVDSHOWMENU = 1410] = "CONFIGID_DVDSHOWMENU",e[e.CONFIGID_DVDPRESSBUTTON = 1411] = "CONFIGID_DVDPRESSBUTTON",e[e.CONFIGID_DVDSKIPCHAPTER = 1412] = "CONFIGID_DVDSKIPCHAPTER",e[e.CONFIGID_DVDPLAYFORWARD = 1413] = "CONFIGID_DVDPLAYFORWARD",e[e.CONFIGID_DVDPLAYBACKWARD = 1414] = "CONFIGID_DVDPLAYBACKWARD",e[e.CONFIGID_DVDNEEDINTERACTION = 1415] = "CONFIGID_DVDNEEDINTERACTION",e[e.CONFIGID_AC3DTSUSABLE = 1501] = "CONFIGID_AC3DTSUSABLE",e[e.CONFIGID_AC3DTSOUTPUTMODE = 1502] = "CONFIGID_AC3DTSOUTPUTMODE",e[e.CONFIGID_AC3DTSVOICEVOLUME = 1503] = "CONFIGID_AC3DTSVOICEVOLUME",e[e.CONFIGID_SVCCURRENTLEVEL = 1601] = "CONFIGID_SVCCURRENTLEVEL",e[e.CONFIGID_SVCSTATISTICINTERVAL = 1602] = "CONFIGID_SVCSTATISTICINTERVAL",e[e.CONFIGID_SVCLEVELMIN = 1603] = "CONFIGID_SVCLEVELMIN",e[e.CONFIGID_SVCLEVELMAX = 1604] = "CONFIGID_SVCLEVELMAX",e[e.CONFIGID_SVCDOWNLOADSPEED = 1605] = "CONFIGID_SVCDOWNLOADSPEED",e[e.CONFIGID_SVCCONNECTTIMEOUT = 1606] = "CONFIGID_SVCCONNECTTIMEOUT",e[e.CONFIGID_DETECTSUBTITLEUSABLE = 1701] = "CONFIGID_DETECTSUBTITLEUSABLE",e[e.CONFIGID_DETECTSUBTITLEENABLE = 1702] = "CONFIGID_DETECTSUBTITLEENABLE",e[e.CONFIGID_DETECTSUBTITLEAREA = 1703] = "CONFIGID_DETECTSUBTITLEAREA",e[e.CONFIGID_DETECTSUBTITLESHOW = 1704] = "CONFIGID_DETECTSUBTITLESHOW",e[e.CONFIGID_DLNAENABLE = 1801] = "CONFIGID_DLNAENABLE",e[e.CONFIGID_DLNADEVICELIST = 1802] = "CONFIGID_DLNADEVICELIST",e[e.CONFIGID_DLNACURRENTDEVICE = 1803] = "CONFIGID_DLNACURRENTDEVICE",e[e.CONFIGID_DLNASEARCHDEVICE = 1804] = "CONFIGID_DLNASEARCHDEVICE",e[e.CONFIGID_VIDEO3DUSABLE = 1901] = "CONFIGID_VIDEO3DUSABLE",e[e.CONFIGID_VIDEO3DSHOW = 1902] = "CONFIGID_VIDEO3DSHOW",e[e.CONFIGID_VIDEO3DOBJECTLIST = 1903] = "CONFIGID_VIDEO3DOBJECTLIST",e[e.CONFIGID_VIDEO3DCURRENTOBJECT = 1904] = "CONFIGID_VIDEO3DCURRENTOBJECT",e[e.CONFIGID_VIDEO3DOBJECTINFO = 1905] = "CONFIGID_VIDEO3DOBJECTINFO",e[e.CONFIGID_VIDEO3DADDOBJECT = 1906] = "CONFIGID_VIDEO3DADDOBJECT",e[e.CONFIGID_VIDEO3DDELETEOBJECT = 1907] = "CONFIGID_VIDEO3DDELETEOBJECT",e[e.CONFIGID_VIDEO3DPOINTCOUNT = 1908] = "CONFIGID_VIDEO3DPOINTCOUNT",e[e.CONFIGID_VIDEO3DCURRENTPOINT = 1909] = "CONFIGID_VIDEO3DCURRENTPOINT",e[e.CONFIGID_VIDEO3DPOINTINFO = 1910] = "CONFIGID_VIDEO3DPOINTINFO",e[e.CONFIGID_VIDEO3DADDPOINT = 1911] = "CONFIGID_VIDEO3DADDPOINT",e[e.CONFIGID_VIDEO3DDELETEPOINT = 1912] = "CONFIGID_VIDEO3DDELETEPOINT",e[e.CONFIGID_VIDEO3DFRAMECOUNT = 1913] = "CONFIGID_VIDEO3DFRAMECOUNT",e[e.CONFIGID_VIDEO3DFRAMEINFO = 1914] = "CONFIGID_VIDEO3DFRAMEINFO",e[e.CONFIGID_VIDEO3DADDFRAME = 1915] = "CONFIGID_VIDEO3DADDFRAME",e[e.CONFIGID_VIDEO3DDELETEFRAME = 1916] = "CONFIGID_VIDEO3DDELETEFRAME",e[e.CONFIGID_VIDEO3DCLEARFRAMES = 1917] = "CONFIGID_VIDEO3DCLEARFRAMES",e[e.CONFIGID_VIDEO3DCOPYFRAME = 1918] = "CONFIGID_VIDEO3DCOPYFRAME",e[e.CONFIGID_VIDEO3DSAMEFRAMES = 1919] = "CONFIGID_VIDEO3DSAMEFRAMES",e[e.CONFIGID_VIDEO3DLINEARFRAMES = 1920] = "CONFIGID_VIDEO3DLINEARFRAMES",e[e.CONFIGID_VIDEO3DEDITMODE = 1921] = "CONFIGID_VIDEO3DEDITMODE",e[e.CONFIGID_VIDEO3DSELECTTOOL = 1922] = "CONFIGID_VIDEO3DSELECTTOOL",e[e.CONFIGID_VIDEO3DMAGICADMIT = 1923] = "CONFIGID_VIDEO3DMAGICADMIT",e[e.CONFIGID_VIDEO3DLOADFROMFILE = 1924] = "CONFIGID_VIDEO3DLOADFROMFILE",e[e.CONFIGID_VIDEO3DSAVETOFILE = 1925] = "CONFIGID_VIDEO3DSAVETOFILE",e[e.CONFIGID_WIDIENABLE = 2001] = "CONFIGID_WIDIENABLE",e[e.CONFIGID_WIDIADAPTERLIST = 2002] = "CONFIGID_WIDIADAPTERLIST",e[e.CONFIGID_WIDICONNECT = 2003] = "CONFIGID_WIDICONNECT",e[e.CONFIGID_WIDIDISCONNECT = 2004] = "CONFIGID_WIDIDISCONNECT",e[e.CONFIGID_WIDISETMODE = 2005] = "CONFIGID_WIDISETMODE",e[e.CONFIGID_WIDISEARCHDEVICE = 2006] = "CONFIGID_WIDISEARCHDEVICE",e[e.CONFIGID_SUBTITLE2USABLE = 2101] = "CONFIGID_SUBTITLE2USABLE",e[e.CONFIGID_SUBTITLE2EXTNAMELIST = 2102] = "CONFIGID_SUBTITLE2EXTNAMELIST",e[e.CONFIGID_SUBTITLE2FILENAME = 2103] = "CONFIGID_SUBTITLE2FILENAME",e[e.CONFIGID_SUBTITLE2SHOW = 2104] = "CONFIGID_SUBTITLE2SHOW",e[e.CONFIGID_SUBTITLE2LANGUAGELIST = 2105] = "CONFIGID_SUBTITLE2LANGUAGELIST",e[e.CONFIGID_SUBTITLE2LANGUAGECURRENT = 2106] = "CONFIGID_SUBTITLE2LANGUAGECURRENT",e[e.CONFIGID_SUBTITLE2PLACEMENT = 2107] = "CONFIGID_SUBTITLE2PLACEMENT",e[e.CONFIGID_SUBTITLE2FONT = 2108] = "CONFIGID_SUBTITLE2FONT",e[e.CONFIGID_SUBTITLE2TIMING = 2109] = "CONFIGID_SUBTITLE2TIMING",e[e.CONFIGID_SUBTITLE23D = 2110] = "CONFIGID_SUBTITLE23D",e[e.CONFIGID_SUBTITLE2CONTENT = 2111] = "CONFIGID_SUBTITLE2CONTENT",e[e.CONFIGID_CACHEFILENAME = 2201] = "CONFIGID_CACHEFILENAME",e[e.CONFIGID_CACHECLEAR = 2202] = "CONFIGID_CACHECLEAR",e[e.CONFIGID_CACHEDOWNLOADLIST = 2203] = "CONFIGID_CACHEDOWNLOADLIST",e[e.CONFIGID_CACHECOMPLETED = 2204] = "CONFIGID_CACHECOMPLETED",e[e.CONFIGID_CACHECONVERT = 2205] = "CONFIGID_CACHECONVERT",e[e.CONFIGID_CACHEIGNORECOMPAREURL = 2206] = "CONFIGID_CACHEIGNORECOMPAREURL",e[e.CONFIGID_CACHEGREED = 2207] = "CONFIGID_CACHEGREED",e[e.CONFIGID_SPRITEUSABLE = 2301] = "CONFIGID_SPRITEUSABLE",e[e.CONFIGID_SPRITELIST = 2302] = "CONFIGID_SPRITELIST",e[e.CONFIGID_SPRITEADD = 2303] = "CONFIGID_SPRITEADD",e[e.CONFIGID_SPRITEDELETE = 2304] = "CONFIGID_SPRITEDELETE",e[e.CONFIGID_SPRITECURRENT = 2305] = "CONFIGID_SPRITECURRENT",e[e.CONFIGID_SPRITEBOUND = 2306] = "CONFIGID_SPRITEBOUND",e[e.CONFIGID_SPRITEPOSITION = 2307] = "CONFIGID_SPRITEPOSITION",e[e.CONFIGID_SPRITEMOVETO = 2308] = "CONFIGID_SPRITEMOVETO",e[e.CONFIGID_SPRITESELECTVIDEO = 2309] = "CONFIGID_SPRITESELECTVIDEO",e[e.CONFIGID_SPRITESELECTRECT = 2310] = "CONFIGID_SPRITESELECTRECT",e[e.CONFIGID_SPRITESHOWSELECT = 2311] = "CONFIGID_SPRITESHOWSELECT",e[e.CONFIGID_SPRITEATTACHVIDEO = 2312] = "CONFIGID_SPRITEATTACHVIDEO",e[e.CONFIGID_SPRITEATTACHTOVR = 2313] = "CONFIGID_SPRITEATTACHTOVR",e[e.CONFIGID_VRENABLE = 2401] = "CONFIGID_VRENABLE",e[e.CONFIGID_VRMODE = 2402] = "CONFIGID_VRMODE",e[e.CONFIGID_VRPOSITION = 2403] = "CONFIGID_VRPOSITION",e[e.CONFIGID_VRDEVICE = 2404] = "CONFIGID_VRDEVICE",e[e.CONFIGID_VRDELAY = 2405] = "CONFIGID_VRDELAY",e[e.CONFIGID_VRCIRCULARPARAMETER = 2406] = "CONFIGID_VRCIRCULARPARAMETER",e[e.CONFIGID_VRMONITORPARAMETER = 2407] = "CONFIGID_VRMONITORPARAMETER",e[e.CONFIGID_VRFILLBAND = 2408] = "CONFIGID_VRFILLBAND",e[e.CONFIGID_VRFOCUSPOSITION = 2409] = "CONFIGID_VRFOCUSPOSITION",e[e.CONFIGID_VRQUALITY = 2410] = "CONFIGID_VRQUALITY",e[e.CONFIGID_DNNVSRMODEL = 2802] = "CONFIGID_DNNVSRMODEL",e[e.CONFIGID_DNNENABLEVSR = 2803] = "CONFIGID_DNNENABLEVSR",e[e.CONFIGID_DNNIMAGESR = 2804] = "CONFIGID_DNNIMAGESR",e[e.CONFIGID_ZIP_FILELISTDO = 3001] = "CONFIGID_ZIP_FILELISTDO",e[e.CONFIGID_ZIP_FILELISTABORT = 3002] = "CONFIGID_ZIP_FILELISTABORT",e[e.CONFIGID_ZIP_FILELISTGET = 3003] = "CONFIGID_ZIP_FILELISTGET",e[e.CONFIGID_ZIP_OPENFILE = 3004] = "CONFIGID_ZIP_OPENFILE",e[e.CONFIGID_ZIP_OPENPASSWORD = 3005] = "CONFIGID_ZIP_OPENPASSWORD",e[e.CONFIGID_ZIP_OPENINDEX = 3006] = "CONFIGID_ZIP_OPENINDEX",e[e.CONFIGID_ZIP_MAKEINDEXFILE = 3007] = "CONFIGID_ZIP_MAKEINDEXFILE",e[e.CONFIGID_ZIP_MAKEINDEXPASSWORD = 3008] = "CONFIGID_ZIP_MAKEINDEXPASSWORD",e[e.CONFIGID_ZIP_MAKEINDEXOUTPUT = 3009] = "CONFIGID_ZIP_MAKEINDEXOUTPUT",e[e.CONFIGID_ZIP_MAKEINDEXDO = 3010] = "CONFIGID_ZIP_MAKEINDEXDO",e[e.CONFIGID_ZIP_MAKEINDEXABORT = 3011] = "CONFIGID_ZIP_MAKEINDEXABORT",e[e.CONFIGID_ZIP_MAKEINDEXPROGRESS = 3012] = "CONFIGID_ZIP_MAKEINDEXPROGRESS"
    }(t.APlayerConfigId || (t.APlayerConfigId = {}))
}, , function (e, t) {
    e.exports = function () {
        for (var e = [].slice.call(arguments), t = e[0], n = 1; n < e.length; n++) try {
            t = t[e[n]]
        } catch (e) {
            return
        }
        return t
    }
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var i = a(n(192)), o = a(n(194)),
        r = "function" == typeof o.default && "symbol" == typeof i.default ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : typeof e
        };

    function a(e) {
        return e && e.__esModule ? e : {default: e}
    }

    t.default = "function" == typeof o.default && "symbol" === r(i.default) ? function (e) {
        return void 0 === e ? "undefined" : r(e)
    } : function (e) {
        return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : void 0 === e ? "undefined" : r(e)
    }
}, function (e, t, n) {
    "use strict";
    var i;
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        let t, n;
        !function (e) {
            e.require = "AR_BROWSER_REQUIRE", e.builtIn = "AR_BROWSER_GET_BUILTIN", e.global = "AR_BROWSER_GET_GLOBAL", e.functionCall = "AR_BROWSER_FUNCTION_CALL", e.construct = "AR_BROWSER_CONSTRUCTOR", e.memberConstruct = "AR_BROWSER_MEMBER_CONSTRUCTOR", e.memberCall = "AR_BROWSER_MEMBER_CALL", e.memberSet = "AR_BROWSER_MEMBER_SET", e.memberGet = "AR_BROWSER_MEMBER_GET", e.currentWindow = "AR_BROWSER_CURRENT_WINDOW", e.currentWebContents = "AR_BROWSER_CURRENT_WEB_CONTENTS", e.clientWebContents = "AR_BROWSER_CLIENT_WEB_CONTENTS", e.webContents = "AR_BROWSER_WEB_CONTENTS", e.sync = "AR_BROWSER_SYNC", e.contextRelease = "AR_BROWSER_CONTEXT_RELEASE"
        }(t = e.browser || (e.browser = {})), function (e) {
            e.requireReturn = "AR_RENDERER_REQUIRE_RETURN", e.getBuiltInReturn = "AR_RENDERER_BUILTIN_RETURN", e.getGlobalReturn = "AR_RENDERER_GLOBAL_RETURN", e.functionCallReturn = "AR_RENDERER_FUNCTION_CALL_RETURN", e.memberConstructReturn = "AR_RENDERER_MEMBER_CONSTRUCTOR_RETURN", e.constructReturn = "AR_RENDERER_CONSTRUCTOR_RETURN", e.memberCallReturn = "AR_RENDERER_MEMBER_CALL_RETURN", e.memberSetReturn = "AR_RENDERER_MEMBER_SET_RETURN", e.memberGetReturn = "AR_RENDERER_MEMBER_GET_RETURN", e.currentWindowReturn = "AR_BROWSER_CURRENT_WINDOW_RETURN", e.currentWebContentsReturn = "AR_RENDERER_CURRENT_WEB_CONTENTS_RETURN", e.clientWebContentsReturn = "AR_RENDERER_CLIENT_WEB_CONTENTS_RETURN", e.webContentsReturn = "AR_RENDERER_WEB_CONTENTS_RETURN", e.syncReturn = "AR_RENDERER_SYNC_RETURN", e.callback = "AR_RENDERER_CALLBACK"
        }(n = e.renderer || (e.renderer = {}))
    }(i || (i = {})), t.default = i
}, function (e, t, n) {
    "use strict";
    var i;
    !function (e) {
        e.getRemoteObjectName = function (e) {
            let t = typeof e;
            if ("function" === t) t = e.name; else if ("object" === t) {
                let t = e.name;
                if ("string" != typeof t) {
                    let n = e.constructor;
                    t = n ? n.name : Object.toString.call(e)
                }
            }
            return t
        }, e.isPromise = function (e) {
            return e && e.then && e.then instanceof Function && e.constructor && e.constructor.reject && e.constructor.reject instanceof Function && e.constructor.resolve && e.constructor.resolve instanceof Function
        }
    }(i || (i = {})), e.exports = i
}, function (e, t, n) {
    "use strict";
    var i = n(173)(!0);
    n(109)(String, "String", function (e) {
        this._t = String(e), this._i = 0
    }, function () {
        var e, t = this._t, n = this._i;
        return n >= t.length ? {value: void 0, done: !0} : (e = i(t, n), this._i += e.length, {value: e, done: !1})
    })
}, function (e, t, n) {
    var i = n(67);
    e.exports = function (e) {
        return Object(i(e))
    }
}, function (e, t) {
    t.f = {}.propertyIsEnumerable
}, , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.ThunderChannelList = void 0, function (e) {
        e.channelBase = "ChannelBase", e.channelRMNewTaskSetTaskData = e.channelBase + "1", e.channelRMPreNewTaskSetTaskData = e.channelBase + "2", e.channelRMNewTaskCreateNewTask = e.channelBase + "3", e.channelRMNewTaskSetBTInfo = e.channelBase + "4", e.channelRMNewTaskDownloadTorrent = e.channelBase + "5", e.channelRMNewTaskCreateBtTask = e.channelBase + "6", e.channelRMNewTaskCancleMagnet = e.channelBase + "7", e.channelRMImportTorrent = e.channelBase + "8", e.channelRMGetConfigValueResolve = e.channelBase + "9", e.channelRMGetConfigValueReject = e.channelBase + "10", e.channelMRTrayMenuClick = e.channelBase + "11", e.channelMRNewTaskMagnetTaskCreated = e.channelBase + "12", e.channelMRNewTaskDownloadTorrentResult = e.channelBase + "13", e.channelMRNewTaskCreateNewTaskResult = e.channelBase + "14", e.channelMRNewTaskCreateBtTaskResult = e.channelBase + "15", e.channelMRGetConfigValue = e.channelBase + "16", e.channelMRSetConfigValue = e.channelBase + "17", e.channelRMCommitPlanTask = e.channelBase + "18", e.channelRMPerformePlanTask = e.channelBase + "19", e.channelRMProcessSend = e.channelBase + "20", e.channelRMGetPrivateSpaceInfo = e.channelBase + "21", e.channelMRGetPrivateSpaceInfoResult = e.channelBase + "22", e.channelRMFileCopy = e.channelBase + "23", e.channelRMFileMove = e.channelBase + "24", e.channelMRFileCopyResult = e.channelBase + "25", e.channelMRFileMoveResult = e.channelBase + "26", e.channelRMGetSutitleByCid = e.channelBase + "27", e.channelMRGetSutitleByCidResult = e.channelBase + "28", e.channelRMGetSutitleByName = e.channelBase + "29", e.channelMRGetSutitleByNameResult = e.channelBase + "30", e.channelRMDownloadSutitle = e.channelBase + "31", e.channelMRDownloadSutitleSuc = e.channelBase + "32", e.channelMRDownloadSutitleFail = e.channelBase + "33", e.channelRMGetDisplayName = e.channelBase + "34", e.channelMRGetDisplayNameResult = e.channelBase + "35", e.channelMRBringWindowToTop = e.channelBase + "36", e.channelRMDownloadXmp = e.channelBase + "37", e.channelMRFixXmpSuc = e.channelBase + "38", e.channelMRFixXMPFail = e.channelBase + "39", e.channelMRAPlayerCreated = e.channelBase + "41", e.channelMRMainRendererNativeCallInited = e.channelBase + "42", e.channelMRShowWindow = e.channelBase + "43", e.channelMRCreateTopView = e.channelBase + "44", e.channelMRSendTopView = e.channelBase + "44.1", e.channelMRDestroyTopView = e.channelBase + "44.5", e.channelMRCreateTopViewReadyFinish = e.channelBase + "45", e.channelMRCreateTopViewFinish = e.channelBase + "45.5", e.channelMRCreateCtrlView = e.channelBase + "46", e.channelMRSendCtrlView = e.channelBase + "46.1", e.channelMRDestroyCtrlView = e.channelBase + "46.5", e.channelMRCreateCtrlViewReadyFinish = e.channelBase + "47", e.channelMRCreateCtrlViewFinish = e.channelBase + "47.5", e.channelMRCreateSideBar = e.channelBase + "48", e.channelMRCreateSideBarFinish = e.channelBase + "49", e.channelMRExpandListWindow = e.channelBase + "52", e.channelMRExpandListVue = e.channelBase + "53", e.channelMRSetChangeViewSize = e.channelBase + "54", e.channelMRSyncShowMode = e.channelBase + "55", e.channelMRAPWindowUpdate = e.channelBase + "56", e.channelMRUpdateAPlayerPos = e.channelBase + "57", e.channelMRXmpVideoTipCreated = e.channelBase + "58", e.channelMRXmpVideoTipDestroy = e.channelBase + "59", e.channelMRShowSettingCenterWindow = e.channelBase + "60", e.channelRMSetPosition = e.channelBase + "61", e.channelRMShowPlaySettingWindow = e.channelBase + "62", e.channelRMShowCursor = e.channelBase + "63", e.channelRMAPlayerState = e.channelBase + "64", e.channelRMAPlayerProgress = e.channelBase + "65", e.channelRMPlayAction = e.channelBase + "66", e.channelRMSetFoucs = e.channelBase + "67", e.channelMRSetZorder = e.channelBase + "68", e.channelRMGetBrowserStartType = e.channelBase + "69", e.channelMRGetBrowserStartTypeResult = e.channelBase + "70", e.channelMRWindowPopUp = e.channelBase + "71", e.channelMRUpdateTipWindowZorder = e.channelBase + "72", e.channelMRSetShadowWindowResize = e.channelBase + "73", e.channelMRBrowserWindowChange = e.channelBase + "74", e.channelMRChangeFullScreen = e.channelBase + "75", e.channelMRTabNumberChange = e.channelBase + "76", e.channelMRThumbTaskBarAction = e.channelBase + "77", e.channelMRThumbTaskBarButtonStatus = e.channelBase + "78", e.channelRMOpenFolder = e.channelBase + "79", e.channelRReCreateCtrlWindow = e.channelBase + "80", e.channelRReCreateTopWindow = e.channelBase + "81", e.channelRMSetEnvironmentVariable = e.channelBase + "82", e.channelRMServerStarted = e.channelBase + "83", e.channelRMOpenDevTools = e.channelBase + "84", e.channelEnterEditMode = e.channelBase + "85", e.channelUpdateEditRect = e.channelBase + "86", e.channelMessageBoxClose = e.channelBase + "87", e.channelPreventSleep = e.channelBase + "88", e.channelCancelPreventSleep = e.channelBase + "89", e.channelCloseEffectWindow = e.channelBase + "90", e.channelPopUpMenu = e.channelBase + "91", e.channelHideTray = e.channelBase + "92", e.channelEmbedMoveResize = e.channelBase + "94", e.channelTimeTipPos = e.channelBase + "95", e.channelUpdateVideoTip = e.channelBase + "96", e.channelGetBrowserView = e.channelBase + "97", e.channelGetBrowserViewResult = e.channelBase + "98",e.channelBrowserViewLoad = e.channelBase + "99",e.channelBrowserViewOpenDev = e.channelBase + "100",e.channelApplyBrowserView = e.channelBase + "101",e.channelCreateBrowserView = e.channelBase + "102",e.channelCreateBrowserViewResult = e.channelBase + "103",e.channelBrowserViewCall = e.channelBase + "104",e.channelBrowserViewCallRet = e.channelBase + "105",e.channelEmbedWindowRgn = e.channelBase + "106",e.channelRMUpdateLogEnviroment = "RM_UPDATE_LOG_ENVIRONMENT",e.channelMRUpdateLogEnviroment = "MR_UPDATE_LOG_ENVIRONMENT"
    }(t.ThunderChannelList || (t.ThunderChannelList = {}))
}, function (e, t) {
    e.exports = require("net")
}, function (e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0}), t.ThunderUtil = void 0;
    const o = n(8), r = n(5), a = n(0), s = n(41), l = n(26), c = n(1), u = n(18),
        d = a.default.getLogger("Thunder.Util"), p = "Thunder Network\\Xmp6\\";

    function h(e) {
        let t = e;
        return 0 === e.indexOf('"') && e.lastIndexOf('"') === e.length - 1 ? t = e.substring(1, e.length - 1) : 0 === e.indexOf("'") && e.lastIndexOf("'") === e.length - 1 && (t = e.substring(1, e.length - 1)), t
    }

    !function (e) {
        function t() {
            let e = l.ThunderHelper.getSystemTempPath(), t = l.ThunderHelper.getLogicalDriveStrings(), n = 0;
            for (let i = 0; i < t.length; i++) {
                let o = l.ThunderHelper.getDriveInfo(t[i]);
                3 === o.type && n < o.freeBytes && t[i] !== e && (n = o.freeBytes, e = t[i])
            }
            return e.substring(0, 1) + ":\\迅雷下载"
        }

        function a(e) {
            let t = "00";
            return t = e >= 10 ? e.toString() : "0" + e.toString()
        }

        function I(e) {
            let t = (e.style.webkitTransform || getComputedStyle(e, "").getPropertyValue("-webkit-transform") || e.style.transform || getComputedStyle(e, "").getPropertyValue("transform")).match(/\-?[0-9]+\.?[0-9]*/g);
            return {x: parseInt(t && (t[12] || t[4]) || "0", 10), y: parseInt(t && (t[13] || t[5]) || "0", 10)}
        }

        function f(e) {
            let t = null;
            do {
                if (void 0 === e || null === e) break;
                t = e.match(/[\/]?([^?]*)\?([^\s]*)/) ? RegExp.$2 : ""
            } while (0);
            return t
        }

        function C(e) {
            let t = {};
            do {
                if (void 0 === e || null === e) break;
                let n = /([^&=?]+)=([^&]*)/g;
                for (; n.exec(e);) t[RegExp.$1] = RegExp.$2
            } while (0);
            return t
        }

        e.formatSize = function (e, t) {
            t = t || 2;
            let n = "0B";
            if ("number" == typeof e && e > 0) {
                let i = ["B", "KB", "MB", "GB", "TB"], o = 0, r = e;
                for (; r >= 1e3 && !(o >= 4);) r /= 1024, o += 1;
                n = -1 === String(r).indexOf(".") ? r + i[o] : r.toFixed(t) + i[o]
            }
            return n
        }, e.isDigital = function (e) {
            let t = !1;
            return /^\d+$/.test(e) && (t = !0), t
        }, e.isAlpha = function (e) {
            let t = !1;
            return /[A-Za-z]/.test(e) && (t = !0), t
        }, e.isUpperCase = function (e) {
            let t = !1;
            return /[A-Z]/.test(e) && (t = !0), t
        }, e.isLowerCase = function (e) {
            let t = !1;
            return /[a-z]/.test(e) && (t = !0), t
        }, e.isChinese = function (e) {
            let t = !1;
            return /[\u4E00-\u9FA5]/.test(e) && (t = !0), t
        }, e.replaceNonDigital = function (e) {
            return e.replace(/[^\d]/g, "")
        }, e.replaceNonAlpha = function (e) {
            return e.replace(/[^A-Za-z]/g, "")
        }, e.replaceNonWord = function (e) {
            return e.replace(/[^\W]/g, "")
        }, e.getConfigValueAW = function (e, t, n) {
            return i(this, void 0, void 0, function* () {
                return c.client.callServerFunction(u.ConfigFunction.getConfigValue, e, t, n)
            })
        }, e.getDefaultDownloadDir = t, e.getMaxFreeDriver = function () {
            return t().substring(0, 1)
        }, e.deepCopy = function (e) {
            let t = JSON.stringify(e), n = null;
            try {
                n = JSON.parse(t)
            } catch (e) {
                d.warning(e)
            }
            return n
        }, e.swap = function (e, t, n) {
            do {
                if (t < 0 || t >= e.length) break;
                if (n < 0 || n >= e.length) break;
                if (t === n) break;
                e[t] = e.splice(n, 1, e[t])[0]
            } while (0);
            return e
        }, e.compareNocase = function (e, t) {
            let n = !1;
            do {
                if (void 0 === e && void 0 === t) {
                    n = !0;
                    break
                }
                if (void 0 === e || void 0 === t) break;
                if ("string" != typeof e || "string" != typeof t) break;
                n = e.toLowerCase() === t.toLowerCase()
            } while (0);
            return n
        }, e.parseCommandLine = function (e) {
            let t = 0, n = "", i = !1, o = [], r = e.length;
            for (let a = 0; a < r; a++) {
                let s = e[a];
                if ('"' !== s && "'" !== s || ("" === n ? (i = !0, n = s) : n === s && (i = !1, n = "")), " " !== s || i || a === r - 1) {
                    if (a === r - 1) {
                        let n = e.substring(t);
                        "" !== n.trim() && o.push(h(n))
                    }
                } else {
                    let n = e.substring(t, a);
                    "" !== n.trim() && o.push(h(n)), t = a + 1
                }
            }
            return o
        }, e.getXmpTempPath = function (e, t) {
            return i(this, void 0, void 0, function* () {
                const i = yield Promise.resolve().then(() => n(34));
                let o = r.join(i.tmpdir(), p);
                return t && (o = r.join(o, t)), void 0 !== e && e && (yield s.FileSystemAWNS.mkdirsAW(o)), o
            })
        }, e.setQueryString = function (e, t) {
            return Object.keys(t).forEach((n, i) => {
                e += 0 === i ? "?" : "&", e += `${n}=${encodeURIComponent(t[n])}`
            }), e
        }, e.getQueryString = function (e, t) {
            let n = "";
            if (e && t) {
                n = e.match(new RegExp(`(^${t}|[?|&]${t})=([^&#]+)`)) ? RegExp.$2 : "";
                try {
                    n = decodeURIComponent(n)
                } catch (e) {
                }
            }
            return n
        }, e.isClipboardTextFormatAvailable = function () {
            let e = !1, t = o.clipboard.availableFormats();
            for (let n of t) if ("text/plain" === n) {
                e = !0;
                break
            }
            return e
        }, e.resizeToFitContent = function () {
            let e = document.querySelector(".td-dialog");
            window.resizeTo(e.offsetWidth, e.offsetHeight)
        }, e.keywordsHighLight = function (e, t, n) {
            if (!e) return "";
            if (!t) return e;
            if (0 === e.length) return e;
            if (0 === t.length) return e;
            let i = /\\/, o = t.split(" ");
            if (0 === (o = o.filter(e => e.trim().length > 0)).length) return e;
            for (let t = 0; t < o.length; t++) if (o[t].search(i) > 0) return e;
            n = void 0 === n || null === n ? "#FF0000" : n;
            let r = "", a = ["\\[", "\\^", "\\*", "\\(", "\\)", "\\|", "\\?", "\\$", "\\.", "\\+"], s = "", l = "|";
            for (let e = 0; e < o.length; e++) {
                for (let t = 0; t < a.length; t++) {
                    let n = new RegExp(a[t], "g");
                    o[e] = o[e].replace(n, a[t])
                }
                e === o.length - 1 && (l = ""), s = s.concat(o[e], l)
            }
            let c = new RegExp(s, "gi");
            return r = e.replace(c, e => '<span style= "color:' + n + '">' + e + "</span>")
        }, e.convertTimeToMinutes = function (e, t, n) {
            return 3600 * e + 60 * t + n
        }, e.convertMinuteToTime = function (e) {
            return [Math.floor(e / 3600), Math.floor(e / 60 % 60), Math.floor(e % 60)]
        }, e.formatTimeNumber = a, e.createGUID = function () {
            let e;
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t, n) => (e = 16 * Math.random() | 0, ("x" === t ? e : 3 & e | 8).toString(16)))
        }, e.formatDate = function (e, t) {
            let n = {
                "M+": t.getMonth() + 1,
                "d+": t.getDate(),
                "h+": t.getHours(),
                "m+": t.getMinutes(),
                "s+": t.getSeconds()
            };
            /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let t in n) new RegExp("(" + t + ")").test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? n[t] : ("00" + n[t]).substr(("" + n[t]).length)));
            return e
        }, e.formatMilliSecondTime2 = function (e) {
            let t = ((e = Math.floor(e)) % 1e3).toString();
            1 === t.length ? t = "00" + t : 2 === t.length && (t = "0" + t), e = Math.floor(e / 1e3);
            let n = [];
            for (; e > 0;) {
                let t = Math.floor(e / 60);
                if (n.push(e - 60 * t), e = t, n.length >= 3) break
            }
            let i = "";
            return i = 1 === n.length ? a(n[0]) + "秒" : 2 === n.length ? a(n[1]) + "分" + a(n[0]) + "秒" : 3 === n.length ? a(n[2]) + "时" + a(n[1]) + "分" + a(n[0]) + "秒" : "0秒"
        }, e.formatMilliSecondTime = function (e, t, n = ":") {
            let i = ((e = Math.floor(e)) % 1e3).toString();
            1 === i.length ? i = "00" + i : 2 === i.length && (i = "0" + i), e = Math.floor(e / 1e3);
            let o = [];
            for (; e > 0;) {
                let t = Math.floor(e / 60);
                if (o.push(e - 60 * t), e = t, o.length >= 3) break
            }
            let r = "";
            return r = 1 === o.length ? `00${n}00${n}` + a(o[0]) : 2 === o.length ? `00${n}` + a(o[1]) + `${n}` + a(o[0]) : 3 === o.length ? a(o[2]) + n + a(o[1]) + n + a(o[0]) : `00${n}00${n}00`, t && (r += n + i), r
        }, e.formatSeconds = function (e) {
            let t = "";
            do {
                if (e <= 0) {
                    t = "00分00秒";
                    break
                }
                let n = Math.floor(e / 3600), i = Math.floor(e / 60) % 60, o = Math.floor(e % 60);
                n > 0 && (t = n < 10 ? "0" + n + "时" : n + "时"), t = (t += i < 10 ? "0" + i + "分" : i + "分") + (o < 10 ? "0" + o : "" + o) + "秒"
            } while (0);
            return t
        }, e.isDef = function (e) {
            return void 0 !== e && null !== e
        }, e.isUndef = function (e) {
            return void 0 === e || null === e
        }, e.setStyle = function (e, t) {
            Object.entries(t).forEach(([t, n]) => {
                e.style[t] = n
            })
        }, e.setCSSProperties = function (e, t) {
            Object.entries(t).forEach(([t, n]) => {
                e.style.setProperty(t, n)
            })
        }, e.versionCompare = function (e, t) {
            let n = e.split("."), i = t.split("."), o = 0;
            for (let e = 0; e < n.length; e++) {
                if (Number(n[e]) - Number(i[e]) > 0) {
                    o = 1;
                    break
                }
                if (Number(n[e]) - Number(i[e]) < 0) {
                    o = -1;
                    break
                }
            }
            return o
        }, e.throttle = function (e, t) {
            let n, i = 0;
            return (...o) => {
                const r = Date.now();
                clearTimeout(n), r - i > t ? (e(...o), i = r) : n = setTimeout(() => {
                    e(...o), i = r
                }, t)
            }
        }, e.getElementFixed = function (e) {
            let t = e.offsetLeft, n = e.offsetTop, i = e.offsetParent;
            for (; null !== i;) {
                let e = I(i);
                t += i.offsetLeft + e.x, n += i.offsetTop + e.y, i = i.offsetParent
            }
            return {x: t, y: n}
        }, e.getElementRelative = function (e) {
            let t = e.offsetLeft, n = e.offsetTop, i = e.offsetParent;
            for (; null !== i;) t += i.offsetLeft, n += i.offsetTop, i = i.offsetParent;
            return {x: t, y: n}
        }, e.getCmdParam = function (e, t, n) {
            if (!e) return {};
            let i, o = {};
            for (let r = 0; r < e.length; r++) if (e[r].includes(t)) {
                o.key = t, o.index = r, n && (i = e[r].split(n)) && (o.val = i[1]);
                break
            }
            return o
        }, e.parseDynamicUrlPath = f, e.parseDynamicUrlArgs = C, e.getUrlArgs = function (e) {
            return C(f(e))
        }, e.debounce = function (e, t) {
            let n = null;
            return (...i) => {
                n && clearTimeout(n), n = setTimeout(() => {
                    e(...i)
                }, t)
            }
        }, e.implode = function (e, t) {
            let n = "";
            return e.forEach(e => {
                "" === n ? n = e : n += t + e
            }), n
        }
    }(t.ThunderUtil || (t.ThunderUtil = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.DisplayCardInfo = t.DetailIndex = t.PanelID = t.XmpPlaySoure = t.WindowParams = t.CombineRgnType = t.ZOrderChangedType = t.WindowTopMode = t.XmpMode = t.ShowWindowCmd = t.VirtualKeyCode = t.HitTestPositionCode = t.GWCmd = t.WindowMessage = t.SetWindowType = t.WindowStyleEx = t.WindowStyle = t.CmdShow = t.Uflag = t.OptionOfHWNDInAfter = void 0, function (e) {
        e[e.HWND_NOTOPMOST = -2] = "HWND_NOTOPMOST", e[e.HWND_TOPMOST = -1] = "HWND_TOPMOST", e[e.HWND_TOP = 0] = "HWND_TOP", e[e.HWND_BOTTOM = 1] = "HWND_BOTTOM"
    }(t.OptionOfHWNDInAfter || (t.OptionOfHWNDInAfter = {})), function (e) {
        e[e.SWP_ASYNCWINDOWPOS = 16384] = "SWP_ASYNCWINDOWPOS", e[e.SWP_DEFERERASE = 8192] = "SWP_DEFERERASE", e[e.SWP_DRAWFRAME = 32] = "SWP_DRAWFRAME", e[e.SWP_FRAMECHANGED = 32] = "SWP_FRAMECHANGED", e[e.SWP_HIDEWINDOW = 128] = "SWP_HIDEWINDOW", e[e.SWP_NOACTIVATE = 16] = "SWP_NOACTIVATE", e[e.SWP_NOCOPYBITS = 256] = "SWP_NOCOPYBITS", e[e.SWP_NOMOVE = 2] = "SWP_NOMOVE", e[e.SWP_NOOWNERZORDER = 512] = "SWP_NOOWNERZORDER", e[e.SWP_NOREDRAW = 8] = "SWP_NOREDRAW", e[e.SWP_NOREPOSITION = 512] = "SWP_NOREPOSITION", e[e.SWP_NOSENDCHANGING = 1024] = "SWP_NOSENDCHANGING", e[e.SWP_NOSIZE = 1] = "SWP_NOSIZE", e[e.SWP_NOZORDER = 4] = "SWP_NOZORDER", e[e.SWP_SHOWWINDOW = 64] = "SWP_SHOWWINDOW"
    }(t.Uflag || (t.Uflag = {})), function (e) {
        e[e.SW_FORCEMINIMIZE = 11] = "SW_FORCEMINIMIZE", e[e.SW_HIDE = 0] = "SW_HIDE", e[e.SW_MAXIMIZE = 3] = "SW_MAXIMIZE", e[e.SW_MINIMIZE = 6] = "SW_MINIMIZE", e[e.SW_RESTORE = 9] = "SW_RESTORE", e[e.SW_SHOW = 5] = "SW_SHOW", e[e.SW_SHOWDEFAULT = 10] = "SW_SHOWDEFAULT", e[e.SW_SHOWMAXIMIZED = 3] = "SW_SHOWMAXIMIZED", e[e.SW_SHOWMINIMIZED = 2] = "SW_SHOWMINIMIZED", e[e.SW_SHOWMINNOACTIVE = 7] = "SW_SHOWMINNOACTIVE", e[e.SW_SHOWNA = 8] = "SW_SHOWNA", e[e.SW_SHOWNOACTIVATE = 4] = "SW_SHOWNOACTIVATE", e[e.SW_SHOWNORMAL = 1] = "SW_SHOWNORMAL"
    }(t.CmdShow || (t.CmdShow = {})), function (e) {
        e[e.WS_BORDER = 8388608] = "WS_BORDER", e[e.WS_CAPTION = 12582912] = "WS_CAPTION", e[e.WS_CHILD = 1073741824] = "WS_CHILD", e[e.WS_CHILDWINDOW = 1073741824] = "WS_CHILDWINDOW", e[e.WS_CLIPCHILDREN = 33554432] = "WS_CLIPCHILDREN", e[e.WS_CLIPSIBLINGS = 67108864] = "WS_CLIPSIBLINGS", e[e.WS_POPUP = 2147483648] = "WS_POPUP", e[e.WS_THICKFRAME = 262144] = "WS_THICKFRAME"
    }(t.WindowStyle || (t.WindowStyle = {})), function (e) {
        e[e.WS_EX_TOOLWINDOW = 128] = "WS_EX_TOOLWINDOW", e[e.WS_EX_APPWINDOW = 262144] = "WS_EX_APPWINDOW", e[e.WS_EX_TOPMOST = 8] = "WS_EX_TOPMOST", e[e.WS_EX_WINDOWEDGE = 256] = "WS_EX_WINDOWEDGE", e[e.WS_EX_NOACTIVATE = 134217728] = "WS_EX_NOACTIVATE"
    }(t.WindowStyleEx || (t.WindowStyleEx = {})), function (e) {
        e[e.GWL_EXSTYLE = -20] = "GWL_EXSTYLE", e[e.GWL_HINSTANCE = -6] = "GWL_HINSTANCE", e[e.GWL_ID = -12] = "GWL_ID", e[e.GWL_STYLE = -16] = "GWL_STYLE", e[e.GWL_USERDATA = -21] = "GWL_USERDATA", e[e.GWL_WNDPROC = -4] = "GWL_WNDPROC"
    }(t.SetWindowType || (t.SetWindowType = {})), function (e) {
        e[e.WM_CREATE = 1] = "WM_CREATE", e[e.WM_DESTROY = 2] = "WM_DESTROY", e[e.WM_MOVE = 3] = "WM_MOVE", e[e.WM_SIZE = 5] = "WM_SIZE", e[e.WM_ACTIVATE = 6] = "WM_ACTIVATE", e[e.WM_SETFOCUS = 7] = "WM_SETFOCUS", e[e.WM_KILLFOCUS = 8] = "WM_KILLFOCUS", e[e.WM_ENABLE = 10] = "WM_ENABLE", e[e.WM_KEYDOWN = 256] = "WM_KEYDOWN", e[e.WM_KEYUP = 257] = "WM_KEYUP", e[e.WM_SYSKEYDOWN = 260] = "WM_SYSKEYDOWN", e[e.WM_MOUSEMOVE = 512] = "WM_MOUSEMOVE", e[e.WM_SETCURSOR = 32] = "WM_SETCURSOR", e[e.WM_LBUTTONDOWN = 513] = "WM_LBUTTONDOWN", e[e.WM_LBUTTONUP = 514] = "WM_LBUTTONUP", e[e.WM_LBUTTONDBLCLK = 515] = "WM_LBUTTONDBLCLK", e[e.WM_RBUTTONUP = 517] = "WM_RBUTTONUP", e[e.WM_MOUSEWHEEL = 522] = "WM_MOUSEWHEEL", e[e.WM_MOUSELEAVE = 675] = "WM_MOUSELEAVE", e[e.WM_DPICHANGED = 736] = "WM_DPICHANGED", e[e.WM_GETMINMAXINFO = 36] = "WM_GETMINMAXINFO", e[e.WM_NCHITTEST = 132] = "WM_NCHITTEST", e[e.WM_NCMOUSEMOVE = 160] = "WM_NCMOUSEMOVE", e[e.WM_NCLBUTTONDOWN = 161] = "WM_NCLBUTTONDOWN", e[e.WM_NCLBUTTONUP = 162] = "WM_NCLBUTTONUP", e[e.WM_NCLBUTTONDBLCLK = 163] = "WM_NCLBUTTONDBLCLK", e[e.WM_NCRBUTTONDOWN = 164] = "WM_NCRBUTTONDOWN", e[e.WM_NCRBUTTONUP = 165] = "WM_NCRBUTTONUP", e[e.WM_NCRBUTTONDBLCLK = 166] = "WM_NCRBUTTONDBLCLK", e[e.WM_NCMBUTTONDOWN = 167] = "WM_NCMBUTTONDOWN", e[e.WM_NCMBUTTONUP = 168] = "WM_NCMBUTTONUP", e[e.WM_NCMBUTTONDBLCLK = 169] = "WM_NCMBUTTONDBLCLK", e[e.WM_WINDOWPOSCHANGED = 71] = "WM_WINDOWPOSCHANGED", e[e.WM_WINDOWPOSCHANGING = 70] = "WM_WINDOWPOSCHANGING", e[e.WM_ACTIVATEAPP = 28] = "WM_ACTIVATEAPP", e[e.WM_DWMCOMPOSITIONCHANGED = 798] = "WM_DWMCOMPOSITIONCHANGED"
    }(t.WindowMessage || (t.WindowMessage = {})), function (e) {
        e[e.GW_HWNDFIRST = 0] = "GW_HWNDFIRST", e[e.GW_HWNDLAST = 1] = "GW_HWNDLAST", e[e.GW_HWNDNEXT = 2] = "GW_HWNDNEXT", e[e.GW_HWNDPREV = 3] = "GW_HWNDPREV", e[e.GW_OWNER = 4] = "GW_OWNER", e[e.GW_CHILD = 5] = "GW_CHILD", e[e.GW_ENABLEDPOPUP = 6] = "GW_ENABLEDPOPUP"
    }(t.GWCmd || (t.GWCmd = {})), function (e) {
        e[e.HTERROR = -2] = "HTERROR", e[e.HTTRANSPARENT = -1] = "HTTRANSPARENT", e[e.HTNOWHERE = 0] = "HTNOWHERE", e[e.HTCLIENT = 1] = "HTCLIENT", e[e.HTCAPTION = 2] = "HTCAPTION", e[e.HTSYSMENU = 3] = "HTSYSMENU", e[e.HTGROWBOX = 4] = "HTGROWBOX", e[e.HTSIZE = 4] = "HTSIZE", e[e.HTMENU = 5] = "HTMENU", e[e.HTHSCROLL = 6] = "HTHSCROLL", e[e.HTVSCROLL = 7] = "HTVSCROLL", e[e.HTMINBUTTON = 8] = "HTMINBUTTON", e[e.HTMAXBUTTON = 9] = "HTMAXBUTTON", e[e.HTLEFT = 10] = "HTLEFT", e[e.HTRIGHT = 11] = "HTRIGHT", e[e.HTTOP = 12] = "HTTOP", e[e.HTTOPLEFT = 13] = "HTTOPLEFT", e[e.HTTOPRIGHT = 14] = "HTTOPRIGHT", e[e.HTBOTTOM = 15] = "HTBOTTOM", e[e.HTBOTTOMLEFT = 16] = "HTBOTTOMLEFT", e[e.HTBOTTOMRIGHT = 17] = "HTBOTTOMRIGHT", e[e.HTBORDER = 18] = "HTBORDER", e[e.HTREDUCE = 8] = "HTREDUCE", e[e.HTZOOM = 9] = "HTZOOM", e[e.HTSIZEFIRST = 10] = "HTSIZEFIRST", e[e.HTSIZELAST = 17] = "HTSIZELAST", e[e.HTOBJECT = 19] = "HTOBJECT", e[e.HTCLOSE = 20] = "HTCLOSE", e[e.HTHELP = 21] = "HTHELP"
    }(t.HitTestPositionCode || (t.HitTestPositionCode = {})), function (e) {
        e[e.VK_LBUTTON = 1] = "VK_LBUTTON", e[e.VK_RBUTTON = 2] = "VK_RBUTTON", e[e.VK_MBUTTON = 4] = "VK_MBUTTON", e[e.VK_BACK = 8] = "VK_BACK", e[e.VK_TAB = 9] = "VK_TAB", e[e.VK_RETURN = 13] = "VK_RETURN", e[e.VK_SHIFT = 16] = "VK_SHIFT", e[e.VK_CONTROL = 17] = "VK_CONTROL", e[e.VK_MENU = 18] = "VK_MENU", e[e.VK_ESCAPE = 27] = "VK_ESCAPE", e[e.VK_SPACE = 32] = "VK_SPACE", e[e.VK_PRIOR = 33] = "VK_PRIOR", e[e.VK_NEXT = 34] = "VK_NEXT", e[e.VK_END = 35] = "VK_END", e[e.VK_LEFT = 37] = "VK_LEFT", e[e.VK_UP = 38] = "VK_UP", e[e.VK_RIGHT = 39] = "VK_RIGHT", e[e.VK_DOWN = 40] = "VK_DOWN", e[e.VK_DELETE = 46] = "VK_DELETE", e[e.VK_F1 = 112] = "VK_F1", e[e.VK_F2 = 113] = "VK_F2", e[e.VK_F3 = 114] = "VK_F3", e[e.VK_F4 = 115] = "VK_F4", e[e.VK_F5 = 116] = "VK_F5", e[e.VK_F6 = 117] = "VK_F6", e[e.VK_F7 = 118] = "VK_F7", e[e.VK_F8 = 119] = "VK_F8", e[e.VK_F9 = 120] = "VK_F9", e[e.VK_F10 = 121] = "VK_F10", e[e.VK_F11 = 122] = "VK_F11", e[e.VK_F12 = 123] = "VK_F12", e[e.VK_OEM_1 = 186] = "VK_OEM_1", e[e.VK_OEM_PLUS = 187] = "VK_OEM_PLUS", e[e.VK_OEM_COMMA = 188] = "VK_OEM_COMMA", e[e.VK_OEM_MINUS = 189] = "VK_OEM_MINUS", e[e.VK_OEM_PERIOD = 190] = "VK_OEM_PERIOD", e[e.VK_OEM_2 = 191] = "VK_OEM_2", e[e.VK_OEM_3 = 192] = "VK_OEM_3", e[e.VK_OEM_4 = 219] = "VK_OEM_4", e[e.VK_OEM_5 = 220] = "VK_OEM_5", e[e.VK_OEM_6 = 221] = "VK_OEM_6", e[e.VK_OEM_7 = 222] = "VK_OEM_7", e[e.VK_PROCESSKEY = 229] = "VK_PROCESSKEY"
    }(t.VirtualKeyCode || (t.VirtualKeyCode = {})), function (e) {
        e[e.SW_HIDE = 0] = "SW_HIDE", e[e.SW_SHOWMAXIMIZED = 3] = "SW_SHOWMAXIMIZED", e[e.SW_SHOW = 5] = "SW_SHOW"
    }(t.ShowWindowCmd || (t.ShowWindowCmd = {})), function (e) {
        e[e.UNKNOWN_MODE = -1] = "UNKNOWN_MODE", e[e.INDEPENDENT_MODE = 0] = "INDEPENDENT_MODE", e[e.MAGNETIC_MODE = 1] = "MAGNETIC_MODE", e[e.EMBED_MODE = 2] = "EMBED_MODE"
    }(t.XmpMode || (t.XmpMode = {})), function (e) {
        e[e.NO_TOPMOST_MODE = 0] = "NO_TOPMOST_MODE", e[e.PLAYING_TOPMOST_MODE = 1] = "PLAYING_TOPMOST_MODE", e[e.ALWAYLS_TOPMOST_MODE = 2] = "ALWAYLS_TOPMOST_MODE"
    }(t.WindowTopMode || (t.WindowTopMode = {})), function (e) {
        e[e.ZORDER_CHANGED_TYPE_UNKNOW = -1] = "ZORDER_CHANGED_TYPE_UNKNOW", e[e.ZORDER_CHANGED_TYPE_BEFORE = 0] = "ZORDER_CHANGED_TYPE_BEFORE", e[e.ZORDER_CHANGED_TYPE_AFTER = 1] = "ZORDER_CHANGED_TYPE_AFTER"
    }(t.ZOrderChangedType || (t.ZOrderChangedType = {})), function (e) {
        e[e.RGN_AND = 1] = "RGN_AND", e[e.RGN_OR = 2] = "RGN_OR", e[e.RGN_XOR = 3] = "RGN_XOR", e[e.RGN_DIFF = 4] = "RGN_DIFF", e[e.RGN_COPY = 5] = "RGN_COPY"
    }(t.CombineRgnType || (t.CombineRgnType = {})), function (e) {
        e[e.DEFAULT_WIDTH = 850] = "DEFAULT_WIDTH", e[e.DEFAULT_HEIGHT = 550] = "DEFAULT_HEIGHT", e[e.MIN_WINDOW_WIDTH = 350] = "MIN_WINDOW_WIDTH", e[e.MIN_WINDOW_HEIGHT = 200] = "MIN_WINDOW_HEIGHT", e[e.TOPCTRL_HEIGHT = 42] = "TOPCTRL_HEIGHT", e[e.PLAYCTRL_HEIGHT = 62] = "PLAYCTRL_HEIGHT"
    }(t.WindowParams || (t.WindowParams = {})), function (e) {
        e[e.PLAY_UNKNOWN = 0] = "PLAY_UNKNOWN", e[e.PLAY_BY_DOWNLOAD = 1] = "PLAY_BY_DOWNLOAD", e[e.PLAY_BY_PAN = 2] = "PLAY_BY_PAN"
    }(t.XmpPlaySoure || (t.XmpPlaySoure = {})), function (e) {
        e.Download = "download-panel", e.Cloud = "pan-plugin-view", e.Browser = "find-page", e.Message = "message-page"
    }(t.PanelID || (t.PanelID = {})), function (e) {
        e.Preview = "Preview", e.Speed = "TaskChart", e.Attribute = "Attribute"
    }(t.DetailIndex || (t.DetailIndex = {}));
    t.DisplayCardInfo = class {
    }
}, function (e, t, n) {
    var i = n(19), o = n(6).document, r = i(o) && i(o.createElement);
    e.exports = function (e) {
        return r ? o.createElement(e) : {}
    }
}, function (e, t, n) {
    var i = n(19);
    e.exports = function (e, t) {
        if (!i(e)) return e;
        var n, o;
        if (t && "function" == typeof (n = e.toString) && !i(o = n.call(e))) return o;
        if ("function" == typeof (n = e.valueOf) && !i(o = n.call(e))) return o;
        if (!t && "function" == typeof (n = e.toString) && !i(o = n.call(e))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (e, t) {
    var n = Math.ceil, i = Math.floor;
    e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
    }
}, function (e, t) {
    e.exports = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function (e, t, n) {
    var i = n(15), o = n(175), r = n(71), a = n(69)("IE_PROTO"), s = function () {
    }, l = function () {
        var e, t = n(64)("iframe"), i = r.length;
        for (t.style.display = "none", n(112).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; i--;) delete l.prototype[r[i]];
        return l()
    };
    e.exports = Object.create || function (e, t) {
        var n;
        return null !== e ? (s.prototype = i(e), n = new s, s.prototype = null, n[a] = e) : n = l(), void 0 === t ? n : o(n, t)
    }
}, function (e, t, n) {
    var i = n(70)("keys"), o = n(48);
    e.exports = function (e) {
        return i[e] || (i[e] = o(e))
    }
}, function (e, t, n) {
    var i = n(3), o = n(6), r = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (e.exports = function (e, t) {
        return r[e] || (r[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: i.version,
        mode: n(36) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (e, t, n) {
    n(179);
    for (var i = n(6), o = n(21), r = n(30), a = n(7)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < s.length; l++) {
        var c = s[l], u = i[c], d = u && u.prototype;
        d && !d[a] && o(d, a, c), r[c] = r.Array
    }
}, function (e, t, n) {
    "use strict";
    var i = n(46);
    e.exports.f = function (e) {
        return new function (e) {
            var t, n;
            this.promise = new e(function (e, i) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = i
            }), this.resolve = i(t), this.reject = i(n)
        }(e)
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.ModeChangeEvent = t.ClientProcessEvent = t.ZipEvent = t.XmpEvent = void 0, function (e) {
        e.onWindowMessage = "OnWindowMessage", e.onStateChanged = "OnStateChanged", e.onCreateMediaError = "OnCreateMediaError", e.onOpenSucceeded = "OnOpenSucceeded", e.onVideoSizeChanged = "OnVideoSizeChanged", e.onAPlayerCreated = "OnAPlayerCreated", e.onAllStoped = "OnAllStoped", e.onSeekCompleted = "OnSeekCompleted", e.onBuffer = "OnBuffer", e.onDownloadCodec = "OnDownloadCodec", e.onDownloadCodecProgress = "OnDownloadCodecProgress", e.onDropFiles = "OnDropFiles", e.onEvent = "OnEvent", e.onGetPlayUrl = "OnGetPlayUrl", e.onOpenFailed = "OnOpenFailed", e.onPlayFailed = "OnPlayFailed", e.onClearError = "OnClearError", e.onError = "OnError", e.onPlaying = "OnPlaying", e.onPreOpen = "OnPreOpen", e.onPaused = "OnPaused", e.onPlayCompleted = "OnPlayCompleted", e.onPreStop = "OnPreStop", e.onStop = "OnStop", e.onForceLoadingState = "OnForceLoadingState", e.onVipStruckPlayState = "OnVipStruckPlayState", e.onShowFloatWindow = "OnShowFloatWindow", e.onTimeDesChange = "OnTimeDesChange", e.onPositionChanged = "OnPositionChanged", e.onSnapShotCreated = "OnSnapShotCreated", e.onXmpPlayerEvent = "OnXmpPlayerEvent", e.onXmpAplayerCrash = "OnXmpAplayerCrash", e.onUpdateMediaCid = "OnUpdateMediaCid", e.onUpdateMediaGcid = "OnUpdateMediaGcid", e.onSpeedChange = "OnSpeedChange", e.onFullScreenStateChange = "OnFullScreenStateChange", e.onSetConfig = "OnSetConfig", e.onVolumeChange = "OnVolumeChange", e.onPlayStateChange = "OnPlayStateChange", e.onCurViewChanged = "OnCurViewChanged", e.onUserLogin = "OnUserLogin", e.onDwmCompositionChanged = "OnDwmCompositionChanged", e.onDpiChanged = "OnDpiChanged", e.onGPUProcessCrashed = "OnGPUProcessCrashed", e.onSetCurrentDevice = "OnSetCurrentDevice", e.onXmpPlayerRemoveMedias = "OnXmpPlayerRemoveMedias", e.onOpenMediaNotExist = "OnOpenMediaNotExist", e.onSwitchModeError = "OnSwitchModeError", e.onDlnaEvent = "OnDlnaEvent", e.onSubtitleInit = "OnSubtitleInit", e.onSubtitleUnInit = "onSubtitleUnInit", e.onEmbedSubInitFinish = "OnEmbedSubInitFinish", e.onEntertCurrentDevice = "OnEntertCurrentDevice", e.onWindowZOrderChanged = "OnWindowZOrderChanged", e.onAplayerSeekFrameChanged = "OnAplayerSeekFrameChanged", e.onModeBarChange = "OnModeBarChange", e.onThunderTaskRemove = "OnThunderTaskRemove", e.onXmpClose = "OnXmpClose", e.onXmpStartFailed = "OnXmpStartFailed", e.onVipViewInitFinish = "OnVipViewInitFinish", e.onModeEvent = "OnModeEvent", e.onMaxmized = "OnMaxmized", e.onUnMaxmized = "OnUnMaxmized", e.onSetWindowTopMost = "OnWindowTopMost", e.onCancelWindowTopMost = "OnCancelWindowTopMost", e.onOpenOrCloseSettingCenter = "OnOpenOrCloseSettingCenter", e.onUpdateBufferingUI = "OnUpdateBufferingUI", e.onOpenSucceededCreateTask = "OnOpenSucceededCreateTask"
    }(t.XmpEvent || (t.XmpEvent = {})), function (e) {
        e.listCompleted = "OnZipListCompleted", e.listCompletedError = "OnZipListCompletedError", e.indexCompleted = "OnZipIndexCompleted", e.passWordError = "OnZipPassWordError", e.indexProgress = "OnZipIndexProgress", e.indexError = "OnZipIndexError", e.indexProgressBegin = "OnZipIndexProgressBegin"
    }(t.ZipEvent || (t.ZipEvent = {})), function (e) {
        e.onMainWindowSize = "OnMainWindowSize", e.onTabSelectChange = "OnTabSelectChange", e.onThunderQuit = "OnThunderQuit"
    }(t.ClientProcessEvent || (t.ClientProcessEvent = {})), function (e) {
        e.onXmpModeChanging = "OnXmpModeChanging", e.onXmpModeChanged = "OnXmpModeChanged", e.onXmpEnterFullScreen = "OnXmpEnterFullScreen", e.onXmpLeaveFullScreen = "OnXmpLeaveFullScreen"
    }(t.ModeChangeEvent || (t.ModeChangeEvent = {}))
}, function (e, t, n) {
    t.f = n(7)
}, function (e, t, n) {
    var i = n(6), o = n(3), r = n(36), a = n(75), s = n(14).f;
    e.exports = function (e) {
        var t = o.Symbol || (o.Symbol = r ? {} : i.Symbol || {});
        "_" == e.charAt(0) || e in t || s(t, e, {value: a.f(e)})
    }
}, function (e, t) {
    var n,
        i = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
    t.getSymbolSize = function (e) {
        if (!e) throw new Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
        return 4 * e + 17
    }, t.getSymbolTotalCodewords = function (e) {
        return i[e]
    }, t.getBCHDigit = function (e) {
        for (var t = 0; 0 !== e;) t++, e >>>= 1;
        return t
    }, t.setToSJISFunction = function (e) {
        if ("function" != typeof e) throw new Error('"toSJISFunc" is not a valid function.');
        n = e
    }, t.isKanjiModeEnabled = function () {
        return void 0 !== n
    }, t.toSJIS = function (e) {
        return n(e)
    }
}, function (e, t, n) {
    var i = n(246), o = n(247);
    t.NUMERIC = {id: "Numeric", bit: 1, ccBits: [10, 12, 14]}, t.ALPHANUMERIC = {
        id: "Alphanumeric",
        bit: 2,
        ccBits: [9, 11, 13]
    }, t.BYTE = {id: "Byte", bit: 4, ccBits: [8, 16, 16]}, t.KANJI = {
        id: "Kanji",
        bit: 8,
        ccBits: [8, 10, 12]
    }, t.MIXED = {bit: -1}, t.getCharCountIndicator = function (e, t) {
        if (!e.ccBits) throw new Error("Invalid mode: " + e);
        if (!i.isValid(t)) throw new Error("Invalid version: " + t);
        return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
    }, t.getBestModeForData = function (e) {
        return o.testNumeric(e) ? t.NUMERIC : o.testAlphanumeric(e) ? t.ALPHANUMERIC : o.testKanji(e) ? t.KANJI : t.BYTE
    }, t.toString = function (e) {
        if (e && e.id) return e.id;
        throw new Error("Invalid mode")
    }, t.isValid = function (e) {
        return e && e.bit && e.ccBits
    }, t.from = function (e, n) {
        if (t.isValid(e)) return e;
        try {
            return function (e) {
                if ("string" != typeof e) throw new Error("Param is not a string");
                switch (e.toLowerCase()) {
                    case"numeric":
                        return t.NUMERIC;
                    case"alphanumeric":
                        return t.ALPHANUMERIC;
                    case"kanji":
                        return t.KANJI;
                    case"byte":
                        return t.BYTE;
                    default:
                        throw new Error("Unknown mode: " + e)
                }
            }(e)
        } catch (e) {
            return n
        }
    }
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var i, o = n(128), r = (i = o) && i.__esModule ? i : {default: i};
    t.default = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, r.default)(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }()
}, function (e, t, n) {
    e.exports = {default: n(203), __esModule: !0}
}, , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(97), o = n(11);
    t.Parser = class extends o.EventEmitter {
        constructor() {
            super(), this.decoder = new i.StringDecoder("utf8"), this.jsonBuffer = ""
        }

        encode(e) {
            return JSON.stringify(e) + "\n"
        }

        feed(e) {
            let t = this.jsonBuffer, n = 0, i = (t += this.decoder.write(e)).indexOf("\n", n);
            for (; i >= 0;) {
                const e = t.slice(n, i), o = JSON.parse(e);
                this.emit("message", o), n = i + 1, i = t.indexOf("\n", n)
            }
            this.jsonBuffer = t.slice(n)
        }
    }
}, function (e, t) {
    e.exports = require("buffer")
}, function (e, t, n) {
    var i = n(66), o = Math.min;
    e.exports = function (e) {
        return e > 0 ? o(i(e), 9007199254740991) : 0
    }
}, function (e, t, n) {
    var i = n(37), o = n(7)("toStringTag"), r = "Arguments" == i(function () {
        return arguments
    }());
    e.exports = function (e) {
        var t, n, a;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
            try {
                return e[t]
            } catch (e) {
            }
        }(t = Object(e), o)) ? n : r ? i(t) : "Object" == (a = i(t)) && "function" == typeof t.callee ? "Arguments" : a
    }
}, function (e, t) {
    t.f = Object.getOwnPropertySymbols
}, function (e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0}), t.VipStatNS = void 0;
    const o = n(294), r = n(38), a = n(134), s = n(0), l = n(31), c = n(1),
        u = s.default.getLogger("track-stat-xmp-vip");
    !function (e) {
        function t() {
            let e = 0;
            return r.default.isSuperVip ? e = 5 : r.default.isPlatinumVip ? e = 3 : r.default.isVip && (e = 2), e
        }

        e.firstBufferShow = function (e, t) {
            return i(this, void 0, void 0, function* () {
                let n = yield s();
                n.set("gcid", e), n.set("is_delay", t);
                let i = {attribute1: "bxbb_buffer_qp_show", extData: n};
                l.CommonNS.trackShowEvnet("xlx_vip_event", i.attribute1, i.extData)
            })
        }, e.firstBufferClick = function (e, t) {
            return i(this, void 0, void 0, function* () {
                let n = yield s();
                n.set("gcid", e), n.set("is_delay", t);
                let i = {attribute1: "bxbb_buffer_qp_click", extData: n};
                o.StatUtilitiesNS.trackEvent("xlx_vip_event", i)
            })
        }, e.bxbbStuckShow = function (e, t) {
            return i(this, void 0, void 0, function* () {
                let n = yield s();
                n.set("is_nature", e), n.set("is_delay", t);
                let i = {attribute1: "bxbb_buffer_open_show", extData: n};
                l.CommonNS.trackShowEvnet("xlx_vip_event", i.attribute1, i.extData)
            })
        }, e.bxbbStuckClick = function (e, t) {
            return i(this, void 0, void 0, function* () {
                let n = yield s();
                n.set("is_nature", e), n.set("is_delay", t);
                let i = {attribute1: "bxbb_buffer_open_click", extData: n};
                o.StatUtilitiesNS.trackEvent("xlx_vip_event", i)
            })
        }, e.vipButtonShow = function (e) {
            return i(this, void 0, void 0, function* () {
                u.information("vipButtonShow");
                let t = yield s();
                t.set("gcid", e);
                let n = {attribute1: "bxbb_vipspeedup_btn_show", extData: t};
                l.CommonNS.trackShowEvnet("xlx_vip_event", n.attribute1, n.extData)
            })
        }, e.vipButtonClick = function (e) {
            return i(this, void 0, void 0, function* () {
                u.information("vipButtonClick");
                let t = yield s();
                t.set("gcid", e);
                let n = {attribute1: "bxbb_vipspeedup_btn_click", extData: t};
                o.StatUtilitiesNS.trackEvent("xlx_vip_event", n)
            })
        }, e.playSpeedShow = function () {
            return i(this, void 0, void 0, function* () {
                u.information("playSpeedShow");
                let e = {attribute1: "xmp_play_speed_option_show", extData: yield s()};
                l.CommonNS.trackShowEvnet("xlx_vip_event", e.attribute1, e.extData)
            })
        }, e.playSpeedClick = function (e) {
            return i(this, void 0, void 0, function* () {
                u.information("playSpeedClick");
                let t = yield s();
                t.set("clickid", `speed${e}`);
                let n = {attribute1: "xmp_play_speed_option_click", extData: t};
                o.StatUtilitiesNS.trackEvent("xlx_vip_event", n)
            })
        }, e.xmpPlayStart = function (e, t) {
            return i(this, void 0, void 0, function* () {
                if (!e) return;
                u.information("xmpPlayStart");
                let n = yield s();
                n.set("player_type", e), n.set("play_type", t);
                let i = {attribute1: "xmp_play_start", extData: n};
                o.StatUtilitiesNS.trackEvent("xlx_vip_event", i)
            })
        }, e.xmpVideoLoadOpenYunboBtnShow = function (e, n, o) {
            return i(this, void 0, void 0, function* () {
                u.information("xmpVideoLoadOpenYunboBtnShow");
                let i = new Map;
                i.set("components_type", e), i.set("play_from", n), i.set("vip_type", t()), i.set("btn_position", o);
                let r = {attribute1: "xmp_video_load_open_yunbo_btn_show", extData: i};
                l.CommonNS.trackShowEvnet("xlx_vip_event", r.attribute1, r.extData)
            })
        }, e.xmpVideoLoadOpenYunboBtnClick = function (e, n, r) {
            return i(this, void 0, void 0, function* () {
                u.information("xmpVideoLoadOpenYunboBtnClick");
                let i = new Map;
                i.set("components_type", e), i.set("play_from", n), i.set("vip_type", t()), i.set("btn_position", r);
                let a = {attribute1: "xmp_video_load_open_yunbo_btn_click", extData: i};
                o.StatUtilitiesNS.trackEvent("xlx_vip_event", a)
            })
        }, e.vipSpeedShow = function (e, t, n, r, a, c, u = !0) {
            return i(this, void 0, void 0, function* () {
                let i = "xlx_vip_event", d = yield s();
                d.set("task_type", e), d.set("gcid", t), d.set("url", n), d.set("area", r), d.set("current_speed", a), d.set("try_status", c);
                let p = {attribute1: "play_speed_option_show", extData: d};
                u ? l.CommonNS.trackShowEvnet(i, p.attribute1, p.extData) : o.StatUtilitiesNS.trackEvent(i, p)
            })
        }, e.vipSpeedClick = function (e, t, n, r, a, l, c) {
            return i(this, void 0, void 0, function* () {
                let i = yield s();
                i.set("task_type", e), i.set("gcid", t), i.set("url", n), i.set("area", r), i.set("current_speed", a), i.set("click_id", l), i.set("try_status", c);
                let u = {attribute1: "play_speed_option_click", extData: i};
                o.StatUtilitiesNS.trackEvent("xlx_vip_event", u)
            })
        }, e.playTryReadyShow = function (e, t, n, o, r) {
            return i(this, void 0, void 0, function* () {
                let i = yield s();
                i.set("gcid", e), i.set("try_num", t), i.set("area", n), i.set("video_duration", Math.floor(r / 60));
                let o = {attribute1: "bxbb_hyjs_before_try_show", extData: i};
                l.CommonNS.trackShowEvnet("xlx_vip_event", o.attribute1, o.extData)
            })
        }, e.playTryReadyClick = function (e, t, n, r, a) {
            return i(this, void 0, void 0, function* () {
                let i = yield s();
                i.set("gcid", e), i.set("try_num", t), i.set("area", n), i.set("video_duration", Math.floor(a / 60));
                let r = {attribute1: "bxbb_hyjs_before_try_click", extData: i};
                o.StatUtilitiesNS.trackEvent("xlx_vip_event", r)
            })
        }, e.playTryRuningShow = function (e, t, n, o, r) {
            return i(this, void 0, void 0, function* () {
                let n = yield s();
                n.set("gcid", e), n.set("area", t), n.set("video_duration", Math.floor(o / 60)), n.set("before_speed", r);
                let i = {attribute1: "bxbb_hyjs_trying_show", extData: n};
                l.CommonNS.trackShowEvnet("xlx_vip_event", i.attribute1, i.extData)
            })
        }, e.playTryRuningClick = function (e, t, n, r) {
            return i(this, void 0, void 0, function* () {
                let t = yield s();
                t.set("gcid", e), t.set("area", "bottom"), t.set("video_duration", Math.floor(n / 60)), t.set("before_speed", r), t.set("referfrom", "v_pc_xl11_hytq_bxbb_hyjs_sy"), t.set("aidfrom", "bottom_trying");
                let i = {attribute1: "bxbb_hyjs_trying_click", extData: t};
                o.StatUtilitiesNS.trackEvent("xlx_vip_event", i)
            })
        }, e.playTryAfterShow = function (e, t, n, o, r, a) {
            return i(this, void 0, void 0, function* () {
                let n = yield s();
                n.set("gcid", e), n.set("area", t), n.set("video_duration", Math.floor(o / 60)), n.set("before_speed", r), n.set("ing_speed", a);
                let i = {attribute1: "bxbb_hyjs_after_try_show", extData: n};
                l.CommonNS.trackShowEvnet("xlx_vip_event", i.attribute1, i.extData)
            })
        }, e.playTryAfterClick = function (e, t, n, r, a, l) {
            return i(this, void 0, void 0, function* () {
                let n = yield s();
                n.set("gcid", e), n.set("area", t), n.set("video_duration", Math.floor(r / 60)), n.set("before_speed", a), n.set("ing_speed", l), n.set("referfrom", "v_pc_xl11_hytq_bxbb_hyjs_sy"), n.set("aidfrom", "bottom_after");
                let i = {attribute1: "bxbb_hyjs_after_try_click", extData: n};
                o.StatUtilitiesNS.trackEvent("xlx_vip_event", i)
            })
        }, e.playTryShowBeginTips = function (e, t, n, o) {
            return i(this, void 0, void 0, function* () {
                let t = yield s();
                t.set("gcid", e), t.set("video_duration", Math.floor(n / 60)), t.set("before_speed", o);
                let i = {attribute1: "bxbb_hyjs_trying_tips_show", extData: t};
                l.CommonNS.trackShowEvnet("xlx_vip_event", i.attribute1, i.extData)
            })
        }, e.playTryShowFinishTips = function (e, t, n, o, r) {
            return i(this, void 0, void 0, function* () {
                let i = yield s();
                i.set("gcid", e), i.set("is_ypdl", t ? 1 : 0), i.set("video_duration", Math.floor(n / 60)), i.set("before_speed", o), i.set("ing_speed", r);
                let a = {attribute1: "bxbb_hyjs_after_trying_tips_show", extData: i};
                l.CommonNS.trackShowEvnet("xlx_vip_event", a.attribute1, a.extData)
            })
        }, e.playTryFinishTipsClick = function (e, t, n, r, a, l) {
            return i(this, void 0, void 0, function* () {
                let i = yield s();
                i.set("gcid", e), i.set("is_ypdl", t ? 1 : 0), i.set("click_id", n), i.set("video_duration", Math.floor(r / 60)), i.set("before_speed", a), i.set("ing_speed", l), i.set("referfrom", "v_pc_xl11_hytq_bxbb_hyjs_sy"), i.set("aidfrom", "tips_after");
                let c = {attribute1: "bxbb_hyjs_after_trying_tips_click", extData: i};
                o.StatUtilitiesNS.trackEvent("xlx_vip_event", c)
            })
        }, e.playTryAfterOneMin = function (e, t, n, o, r, a, c) {
            return i(this, void 0, void 0, function* () {
                let n = yield s();
                n.set("gcid", e), n.set("area", t), n.set("video_duration", Math.floor(o / 60)), n.set("before_speed", r), n.set("ing_speed", a), n.set("after_speed", c);
                let i = {attribute1: "bxbb_hyjs_after_try_1min", extData: n};
                l.CommonNS.trackShowEvnet("xlx_vip_event", i.attribute1, i.extData)
            })
        };
        let n = "";

        function s() {
            return i(this, void 0, void 0, function* () {
                let e = new Map, i = function () {
                    let e = 0;
                    return r.default.isLogin && (e = 1), e
                }(), o = function () {
                    let e = 0;
                    return r.default.isVip && (e = 1), e
                }(), s = t();
                return e.set("is_login", i), e.set("is_vip", o), e.set("vip_type", s), e.set("plugin_version", a.default.pluginVersion), e.set("client_version", a.default.thunderVersionString), e.set("player_type", yield a.default.getXmpMode()), n || (n = yield c.client.callServerFunction("GetTpPeerId")), e.set("cpeerid", n), e
            })
        }
    }(t.VipStatNS || (t.VipStatNS = {}))
}, function (e, t, n) {
    "use strict";
    var i = n(211);
    r.TYPED_ARRAY_SUPPORT = function () {
        try {
            var e = new Uint8Array(1);
            return e.__proto__ = {
                __proto__: Uint8Array.prototype, foo: function () {
                    return 42
                }
            }, 42 === e.foo()
        } catch (e) {
            return !1
        }
    }();
    var o = r.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

    function r(e, t, n) {
        return r.TYPED_ARRAY_SUPPORT || this instanceof r ? "number" == typeof e ? l(this, e) : function (e, t, n, i) {
            if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
            if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) return function (e, t, n, i) {
                if (n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (i || 0)) throw new RangeError("'length' is out of bounds");
                var o;
                o = void 0 === n && void 0 === i ? new Uint8Array(t) : void 0 === i ? new Uint8Array(t, n) : new Uint8Array(t, n, i);
                r.TYPED_ARRAY_SUPPORT ? o.__proto__ = r.prototype : o = c(e, o);
                return o
            }(e, t, n, i);
            if ("string" == typeof t) return function (e, t) {
                var n = 0 | d(t), i = s(e, n), o = i.write(t);
                o !== n && (i = i.slice(0, o));
                return i
            }(e, t);
            return function (e, t) {
                if (r.isBuffer(t)) {
                    var n = 0 | a(t.length), i = s(e, n);
                    return 0 === i.length ? i : (t.copy(i, 0, 0, n), i)
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (o = t.length) != o ? s(e, 0) : c(e, t);
                    if ("Buffer" === t.type && Array.isArray(t.data)) return c(e, t.data)
                }
                var o;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(e, t)
        }(this, e, t, n) : new r(e, t, n)
    }

    function a(e) {
        if (e >= o) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
        return 0 | e
    }

    function s(e, t) {
        var n;
        return r.TYPED_ARRAY_SUPPORT ? (n = new Uint8Array(t)).__proto__ = r.prototype : (null === (n = e) && (n = new r(t)), n.length = t), n
    }

    function l(e, t) {
        var n = s(e, t < 0 ? 0 : 0 | a(t));
        if (!r.TYPED_ARRAY_SUPPORT) for (var i = 0; i < t; ++i) n[i] = 0;
        return n
    }

    function c(e, t) {
        for (var n = t.length < 0 ? 0 : 0 | a(t.length), i = s(e, n), o = 0; o < n; o += 1) i[o] = 255 & t[o];
        return i
    }

    function u(e, t) {
        var n;
        t = t || 1 / 0;
        for (var i = e.length, o = null, r = [], a = 0; a < i; ++a) {
            if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                if (!o) {
                    if (n > 56319) {
                        (t -= 3) > -1 && r.push(239, 191, 189);
                        continue
                    }
                    if (a + 1 === i) {
                        (t -= 3) > -1 && r.push(239, 191, 189);
                        continue
                    }
                    o = n;
                    continue
                }
                if (n < 56320) {
                    (t -= 3) > -1 && r.push(239, 191, 189), o = n;
                    continue
                }
                n = 65536 + (o - 55296 << 10 | n - 56320)
            } else o && (t -= 3) > -1 && r.push(239, 191, 189);
            if (o = null, n < 128) {
                if ((t -= 1) < 0) break;
                r.push(n)
            } else if (n < 2048) {
                if ((t -= 2) < 0) break;
                r.push(n >> 6 | 192, 63 & n | 128)
            } else if (n < 65536) {
                if ((t -= 3) < 0) break;
                r.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
            } else {
                if (!(n < 1114112)) throw new Error("Invalid code point");
                if ((t -= 4) < 0) break;
                r.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
            }
        }
        return r
    }

    function d(e) {
        return r.isBuffer(e) ? e.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer) ? e.byteLength : ("string" != typeof e && (e = "" + e), 0 === e.length ? 0 : u(e).length)
    }

    r.TYPED_ARRAY_SUPPORT && (r.prototype.__proto__ = Uint8Array.prototype, r.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && r[Symbol.species] === r && Object.defineProperty(r, Symbol.species, {
        value: null,
        configurable: !0,
        enumerable: !1,
        writable: !1
    })), r.prototype.write = function (e, t, n) {
        void 0 === t ? (n = this.length, t = 0) : void 0 === n && "string" == typeof t ? (n = this.length, t = 0) : isFinite(t) && (t |= 0, isFinite(n) ? n |= 0 : n = void 0);
        var i = this.length - t;
        if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        return function (e, t, n, i) {
            return function (e, t, n, i) {
                for (var o = 0; o < i && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
                return o
            }(u(t, e.length - n), e, n, i)
        }(this, e, t, n)
    }, r.prototype.slice = function (e, t) {
        var n, i = this.length;
        if (e = ~~e, t = void 0 === t ? i : ~~t, e < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i), t < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i), t < e && (t = e), r.TYPED_ARRAY_SUPPORT) (n = this.subarray(e, t)).__proto__ = r.prototype; else {
            var o = t - e;
            n = new r(o, void 0);
            for (var a = 0; a < o; ++a) n[a] = this[a + e]
        }
        return n
    }, r.prototype.copy = function (e, t, n, i) {
        if (n || (n = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n) return 0;
        if (0 === e.length || 0 === this.length) return 0;
        if (t < 0) throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
        if (i < 0) throw new RangeError("sourceEnd out of bounds");
        i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
        var o, a = i - n;
        if (this === e && n < t && t < i) for (o = a - 1; o >= 0; --o) e[o + t] = this[o + n]; else if (a < 1e3 || !r.TYPED_ARRAY_SUPPORT) for (o = 0; o < a; ++o) e[o + t] = this[o + n]; else Uint8Array.prototype.set.call(e, this.subarray(n, n + a), t);
        return a
    }, r.prototype.fill = function (e, t, n) {
        if ("string" == typeof e) {
            if ("string" == typeof t ? (t = 0, n = this.length) : "string" == typeof n && (n = this.length), 1 === e.length) {
                var i = e.charCodeAt(0);
                i < 256 && (e = i)
            }
        } else "number" == typeof e && (e &= 255);
        if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
        if (n <= t) return this;
        var o;
        if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e) for (o = t; o < n; ++o) this[o] = e; else {
            var a = r.isBuffer(e) ? e : new r(e), s = a.length;
            for (o = 0; o < n - t; ++o) this[o + t] = a[o % s]
        }
        return this
    }, r.concat = function (e, t) {
        if (!i(e)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === e.length) return s(null, 0);
        var n;
        if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
        var o = l(null, t), a = 0;
        for (n = 0; n < e.length; ++n) {
            var c = e[n];
            if (!r.isBuffer(c)) throw new TypeError('"list" argument must be an Array of Buffers');
            c.copy(o, a), a += c.length
        }
        return o
    }, r.byteLength = d, r.prototype._isBuffer = !0, r.isBuffer = function (e) {
        return !(null == e || !e._isBuffer)
    }, e.exports.alloc = function (e) {
        var t = new r(e);
        return t.fill(0), t
    }, e.exports.from = function (e) {
        return new r(e)
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(53), o = n.n(i), r = n(10), a = n(4), s = {
        render: function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                directives: [{name: "show", rawName: "v-show", value: e.visible, expression: "visible"}],
                staticClass: "td-message",
                class: "td-message--" + e.type
            }, [e._t("icon", [n("td-icon", {attrs: {type: e.type}})]), e._v(" "), n("span", {staticClass: "td-message__text"}, [e._t("default", [e._v(e._s(e.message))])], 2)], 2)
        },
        staticRenderFns: [],
        name: "td-message",
        components: {TdIcon: r.default},
        props: {
            message: String, type: String, duration: {
                type: Number, default: 3e3, validator: function (e) {
                    return e >= 0
                }
            }, position: {type: String, default: "top"}
        },
        data: function () {
            return {visible: !1}
        },
        mounted: function () {
            var e = document.querySelector(".td-cover.td-cover--message.is-" + this.position);
            Object(a.e)(e) && ((e = document.createElement("div")).className = "td-cover td-cover--message is-" + this.position, document.body.appendChild(e)), e.appendChild(this.$el)
        },
        destroyed: function () {
            Object(a.c)(this.$el.parentNode) && (window.clearTimeout(this.timer), this.timer = null, this.$el.parentNode.removeChild(this.$el))
        },
        methods: {
            show: function () {
                this.visible || (this.visible = !0, this.$emit("show")), this.timer && clearTimeout(this.timer), this.duration && (this.timer = setTimeout(this.hide, this.duration))
            }, hide: function () {
                this.visible && (this.visible = !1, this.timer && (clearTimeout(this.timer), this.timer = null), this.$emit("hide"))
            }
        },
        beforeDestroy: function () {
            this.timer && (clearTimeout(this.timer), this.timer = null)
        }
    }, l = {};
    s.install = function (e) {
        e.prototype.$message = function (t) {
            var n = e.extend(s), i = {}, r = t.slots;
            if (t && "object" === (void 0 === t ? "undefined" : o()(t))) for (var c in t) c in s.props && (i[c] = t[c]);
            var u = new n({el: document.body.appendChild(document.createElement("div")), propsData: i});
            if (t.id) {
                var d = t.id;
                l[d] || (l[d] = new a.a(t)), l[d].push(u) || u.$destroy()
            }
            if (r) for (var p in r) u.$slots[p] = r[p];
            return u.show(), u.$on("hide", function () {
                if (t.id) {
                    var e = t.id;
                    if (l[e]) l[e].clear() || delete l[e]
                }
                u.$destroy()
            }), u
        }, ["success", "warning", "error"].forEach(function (t) {
            e.prototype.$message[t] = function (n) {
                e.prototype.$message({type: t, position: "middle", message: n})
            }
        }), e.component(s.name, s)
    }, t.default = s
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = {
        render: function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                staticClass: "td-carousel", on: {
                    mouseenter: function (t) {
                        e.autoPlay && e.clearAutoPlayListener()
                    }, mouseleave: function (t) {
                        e.autoPlay && e.addAutoPlayListener()
                    }
                }
            }, [n("div", {staticClass: "td-carousel__container"}, [n("ul", [e._t("default")], 2)]), e._v(" "), e.showArrowButton ? [n("span", {
                staticClass: "td-carousel__button td-carousel__button--left",
                on: {click: e.decreaseActiveIndex}
            }, [n("i", {staticClass: "td-icon-arrow-left"})]), e._v(" "), n("span", {
                staticClass: "td-carousel__button td-carousel__button--right",
                on: {click: e.increaseActiveIndex}
            }, [n("i", {staticClass: "td-icon-arrow-right"})])] : e._e(), e._v(" "), "preview" === e.indicatorType ? n("div", {staticClass: "td-carousel__indicators td-carousel__indicators--image"}, [n("ul", e._l(e.previewImageUrlList, function (t, i) {
                return n("li", {
                    key: t + i,
                    staticClass: "td-carousel__indicator",
                    class: {"is-active": i === e.activeIndex},
                    on: {
                        click: function (t) {
                            "click" === e.trigger && (e.activeIndex = i)
                        }, mouseenter: function (t) {
                            "hover" === e.trigger && (e.activeIndex = i)
                        }
                    }
                }, [n("a", {attrs: {href: "javascript:;"}}, [n("img", {attrs: {src: t}})])])
            }), 0)]) : "line" === e.indicatorType ? n("div", {staticClass: "td-carousel__indicators"}, [n("ul", e._l(e.carouselItemList, function (t, i) {
                return n("li", {
                    key: i,
                    staticClass: "td-carousel__indicator",
                    class: {"is-active": i === e.activeIndex},
                    on: {
                        click: function (t) {
                            "click" === e.trigger && (e.activeIndex = i)
                        }, mouseenter: function (t) {
                            "hover" === e.trigger && (e.activeIndex = i)
                        }
                    }
                })
            }), 0)]) : e._e()], 2)
        },
        staticRenderFns: [],
        name: "td-carousel",
        props: {
            initIndex: {type: Number, default: 0},
            trigger: {
                type: String, default: "hover", validator: function (e) {
                    return ["click", "hover"].includes(e)
                }
            },
            showArrowButton: {type: Boolean, default: !1},
            indicatorType: {
                type: String, default: "line", validator: function (e) {
                    return ["none", "preview", "line"].includes(e)
                }
            },
            previewImageUrlList: {type: Array},
            autoPlay: {type: Boolean, default: !1},
            timeout: {type: Number, default: 1e3}
        },
        data: function () {
            return {activeIndex: 0, carouselItemList: [], autoPlayTimer: null}
        },
        mounted: function () {
            this.getCarouselItemList(), this.activeIndex = this.initIndex, this.setCarouselActiveByIndex(this.activeIndex), this.autoPlay && this.addAutoPlayListener()
        },
        beforeDestroy: function () {
            this.clearAutoPlayListener()
        },
        watch: {
            $children: {
                immediate: !0, handler: function () {
                    this.getCarouselItemList()
                }
            }, activeIndex: {
                immediate: !0, handler: function (e) {
                    this.setCarouselActiveByIndex(e)
                }
            }
        },
        methods: {
            autoPlayCallback: function () {
                this.increaseActiveIndex()
            }, addAutoPlayListener: function () {
                this.autoPlayTimer = window.setInterval(this.autoPlayCallback, this.timeout)
            }, clearAutoPlayListener: function () {
                window.clearInterval(this.autoPlayTimer)
            }, getCarouselItemList: function () {
                this.carouselItemList = this.$children.filter(function (e) {
                    return "td-carousel-item" === e.$options._componentTag
                })
            }, setCarouselActiveByIndex: function (e) {
                var t = this;
                e < 0 || e >= this.carouselItemList.length || this.carouselItemList.forEach(function (n, i) {
                    t.carouselItemList[i].active = !1, i === e && (t.carouselItemList[i].active = !0)
                })
            }, setCarouselItemActive: function (e) {
                var t = this.carouselItemList.findIndex(function (t) {
                    return t === e
                });
                this.setCarouselActiveByIndex(t)
            }, decreaseActiveIndex: function () {
                var e = this.carouselItemList.length;
                this.activeIndex = (this.activeIndex - 1 + e) % e
            }, increaseActiveIndex: function () {
                var e = this.carouselItemList.length;
                this.activeIndex = (this.activeIndex + 1) % e
            }
        },
        install: function (e) {
            e.component(i.name, i)
        }
    };
    t.default = i
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(81), o = n.n(i), r = {
        render: function () {
            var e = this.$createElement, t = this._self._c || e;
            return t("transition", {attrs: {name: "fade"}}, [t("li", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: this.active,
                    expression: "active"
                }], staticClass: "td-carousel__item", class: this.computeClass
            }, [this._t("default")], 2)])
        },
        staticRenderFns: [],
        name: "td-carousel-item",
        props: {customClass: {type: String, default: ""}},
        data: function () {
            return {active: !1}
        },
        mounted: function () {
            this.$parent
        },
        computed: {
            computeClass: function () {
                return this.customClass.split(/\s+/).reduce(function (e, t) {
                    return "is-active" !== t && (e[t] = !0), e
                }, o()(null))
            }
        },
        install: function (e) {
            e.component(r.name, r)
        }
    };
    t.default = r
}, , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(0), o = n(24), r = n(5), a = n(25).default(r.join(__rootDir, "../bin/ThunderHelper.node")), s = n(60),
        l = n(8);

    function c() {
        "console" === process.env.TL_OUTPUT ? i.default.outputLogger = i.outputLoggerConsole : i.default.outputLogger = function () {
            function e(e) {
                return function (...t) {
                    a.printEtwLog(e, function (...e) {
                        return e.map(e => o.inspect(e)).join(" ").replace(/%/g, "%%")
                    }(...t))
                }
            }

            return {
                [i.LogLevel.Critical]: e(i.LogLevel.Critical),
                [i.LogLevel.Error]: e(i.LogLevel.Error),
                [i.LogLevel.Warning]: e(i.LogLevel.Warning),
                [i.LogLevel.Information]: e(i.LogLevel.Information),
                [i.LogLevel.Verbose]: e(i.LogLevel.Verbose)
            }
        }()
    }

    function u() {
        i.default.enableLogger = "1" === process.env.TL_ENABLE, c()
    }

    c(), "browser" === process.type ? l.ipcMain.on(s.ThunderChannelList.channelRMUpdateLogEnviroment, () => {
        u()
    }) : "renderer" === process.type && l.ipcRenderer.on(s.ThunderChannelList.channelMRUpdateLogEnviroment, () => {
        u()
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(61), o = n(11), r = n(39), a = n(83), s = n(20);
    t.Client = class extends o.EventEmitter {
        constructor(e) {
            if (e = e || {}, super(), this.inprocess = !1, this.context = void 0, e.context && (this.context = Object.assign({}, e.context), this.context.productId = e.socketPrex), e.socket) this.socket = e.socket, this.bind(); else if (global.__xdasIPCServer && global.__xdasIPCServer.getProductId().toLowerCase() === e.socketPrex.toLowerCase()) this.inprocess = !0; else {
                let t = s.getSockPath(e.socketPrex);
                this.socket = i.connect(t), this.bind()
            }
        }

        isInprocess() {
            return this.inprocess
        }

        getContext() {
            return this.context
        }

        bind() {
            const e = new a.Parser, t = this.socket;
            t.on("data", t => {
                e.feed(t)
            }), t.on("connect", () => {
                this.emit("connect")
            }), t.on("end", () => {
                r.information("socket is ended"), this.socket = null, this.emit("end")
            }), t.on("error", e => {
                this.socket = null, this.emit("error", e)
            }), e.on("message", e => {
                this.emit("message", e)
            }), this.parser = e
        }

        send(e) {
            if (this.socket) try {
                this.socket.write(this.parser.encode(e))
            } catch (e) {
                r.error(e.message)
            } else r.information("This socket has been ended by the other party", this.context && this.context.name)
        }
    }
}, function (e, t) {
    e.exports = require("string_decoder")
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.getWebContents = t.getCurrentWebContents = t.getCurrentWindow = t.getGlobal = t.getBuiltin = t.remoteRequire = t.Interest = void 0;
    const i = n(8), o = n(84), r = n(99), a = n(100), s = n(54), l = n(101), c = n(17), u = n(55), d = i.ipcRenderer,
        p = process.electronBinding("v8_util"), h = new r.default, I = p.createIDWeakMap(),
        f = p.getHiddenValue(global, "contextId");

    class C {
        constructor(e) {
            if ("object" == typeof e ? (this.on = "object" == typeof e.on ? e.on : {}, this.once = "object" == typeof e.once ? e.once : {}) : (this.on = {}, this.once = {}), !this.check()) throw new Error("unexpected param")
        }

        check() {
            let e = !0;
            do {
                let t = Object.getOwnPropertyNames(this.on);
                if (t.forEach(t => {
                    "function" != typeof this.on[t] && (e = !1)
                }), !e) break;
                (t = Object.getOwnPropertyNames(this.once)).forEach(t => {
                    "function" != typeof this.once[t] && (e = !1)
                })
            } while (0);
            return e
        }
    }

    function m(e, t = new Set) {
        const n = e => {
            if (t.has(e)) return {type: "value", value: null};
            let i = e;
            if (Array.isArray(e)) {
                t.add(e);
                let n = {type: "array", value: m(e, t)};
                return t.delete(e), n
            }
            if (ArrayBuffer.isView(i)) return {type: "buffer", value: o.Buffer.from(e)};
            if (e instanceof Date) return {type: "date", value: e.getTime()};
            if (null != e && "object" == typeof e) {
                if (u.isPromise(e)) return {
                    type: "promise", then: n(function (t, n) {
                        e.then(t, n)
                    })
                };
                if (p.getHiddenValue(e, "__remote_id__")) return {
                    type: "remote-object",
                    id: p.getHiddenValue(e, "__remote_id__")
                };
                let i = {
                    type: e instanceof C ? "interest" : "object",
                    name: e.constructor ? e.constructor.name : "",
                    members: []
                };
                t.add(e);
                for (let t in e) i.members.push({name: t, value: n(e[t])});
                return t.delete(e), i
            }
            if ("function" == typeof e) {
                return {
                    type: "function",
                    id: h.add(e),
                    location: p.getHiddenValue(e, "__remote_call_location__"),
                    length: e.length
                }
            }
            return {type: "value", value: e}
        };
        return e.map(n)
    }

    function S(e, t, n) {
        u.isPromise(e) ? e.then(e => {
            t(e)
        }, e => {
            n(e)
        }) : t(e)
    }

    function E(e, t, n, i = !1) {
        const o = t => {
            if (e.hasOwnProperty(t.name) && !i) return;
            let n, o = {enumerable: t.enumerable, configurable: !0};
            if ("method" === t.type) {
                if (t.value.refId) {
                    if (I.has(t.value.refId) && (n = I.get(t.value.refId)), null == n) throw new Error("member refId pointer to null" + t.value.refId + "name: " + t.name)
                } else n = T(t.value, e, t.name);
                o.get = (() => n), o.set = (e => n = e)
            } else "get" === t.type && (o.get = (() => n), t.writable && (o.set = (e => {
                n = e
            })), n = T(t.value));
            Object.defineProperty(e, t.name, o)
        };
        if (Array.isArray(n)) {
            let e = n.length;
            for (let t = 0; t < e; t++) o(n[t])
        }
    }

    function O(e, t, n) {
        if (n) {
            let t = T(n);
            Object.setPrototypeOf(e, t)
        }
    }

    function _(e, t) {
        p.setHiddenValue(e, "__remote_id__", t)
    }

    function g(e) {
        return p.getHiddenValue(e, "__remote_id__")
    }

    function T(e, t, n) {
        const i = {
            value: () => e.value,
            array: () => e.members.map(e => T(e)),
            buffer: () => o.Buffer.from(e.value),
            promise: () => Promise.resolve({then: T(e.then)}),
            error: () => (function (e) {
                const t = (() => "error" === e.type ? new Error : {})();
                for (let n = 0; n < e.members.length; n++) {
                    let {name: i, value: o} = e.members[n];
                    t[i] = o
                }
                return t
            })(e),
            date: () => new Date(e.value),
            exception: () => {
                throw new Error(`${e.message}\n${e.stack}`)
            }
        };
        let r;
        return e.type in i ? r = i[e.type]() : e.refId ? I.has(e.refId) ? (p.addRemoteObjectRef(f, e.refId), r = I.get(e.refId)) : (c.warn("[metaToValue] refId point to null" + e.refId), r = "function" === e.type ? () => {
        } : {}) : e.id ? I.has(e.id) ? (p.addRemoteObjectRef(f, e.id), E(r = I.get(e.id), e.id, e.members, !0), O(r, e.id, e.proto)) : (r = "function" === e.type ? t ? function (e, t, n) {
            if (I.has(n.id)) return I.get(n.id);
            let i = g(e), o = function (...e) {
                throw Error("never should come to a proxied function")
            };
            Object.defineProperty(o, "name", {value: t, writable: !1, enumerable: !0});
            let r = new Proxy(o, {
                apply: (e, n, o) => new Promise((e, r) => {
                    let c = g(n);
                    if (c || (c = g(n.__remoteObj_)), !c) throw Error("is this function was a bound function?");
                    let u = s.default.browser.memberCall, p = l.default(u), h = m(o);
                    d.send(u, f, p, c, i, t, h), a.default.add(p, t => {
                        try {
                            S(T(t), e, r)
                        } catch (e) {
                            r(e)
                        }
                    })
                }), construct: (e, n, o) => new Promise((e, o) => {
                    let r = s.default.browser.memberConstruct, c = l.default(r);
                    d.send(r, f, c, i, t, m(n)), a.default.add(c, t => {
                        try {
                            let n = T(t);
                            e(n)
                        } catch (e) {
                            o(e)
                        }
                    })
                })
            });
            return p.setHiddenValue(o, "__remote_id__", n.id), r
        }(t, n, e) : function (e) {
            let t = e.id;
            const n = function (...e) {
                throw new Error("Should Never com to a remoteFunction PlaceHolder")
            };
            return _(n, t), new Proxy(n, {
                apply: (e, n, i) => new Promise((e, o) => {
                    let r = s.default.browser.functionCall, c = l.default(r), u = g(n);
                    d.send(r, f, c, u, t, m(i)), a.default.add(c, t => {
                        try {
                            S(T(t), e, o)
                        } catch (e) {
                            o(e)
                        }
                    })
                }), construct: (e, n, i) => new Promise((e, i) => {
                    let o = s.default.browser.construct, r = l.default(o);
                    d.send(o, f, r, t, m(n)), a.default.add(r, t => {
                        try {
                            let n = T(t);
                            e(n)
                        } catch (e) {
                            i(e)
                        }
                    })
                })
            })
        }(e) : {}, p.setRemoteObjectFreer(r, f, e.id), I.set(e.id, r), p.setHiddenValue(r, "__remote_id__", e.id), p.addRemoteObjectRef(f, e.id), function (e) {
            let t = g(e);
            Object.defineProperties(e, {
                __set: {
                    enumerable: !1, writable: !1, value: function (n, i) {
                        if ("function" == typeof i) throw new Error("set a function to a remote member is dangerous");
                        return new Promise((o, r) => {
                            let c = s.default.browser.memberSet, u = l.default(c), p = m([i]);
                            d.send(c, f, u, t, n, p), a.default.add(u, t => {
                                try {
                                    let a = T(t);
                                    e[n] = i, o(a)
                                } catch (e) {
                                    r(e)
                                }
                            })
                        })
                    }
                }, __get: {
                    enumerable: !1, writable: !1, value: function (n) {
                        return new Promise((i, o) => {
                            let r = s.default.browser.memberGet, c = l.default(r);
                            d.send(r, f, c, t, n), a.default.add(c, t => {
                                try {
                                    const r = T(t);
                                    e[n] = r, i(r)
                                } catch (e) {
                                    o(e)
                                }
                            })
                        })
                    }
                }, __sync: {
                    enumerable: !1, writable: !1, value: function () {
                        return new Promise((e, n) => {
                            let i = s.default.browser.sync, o = l.default(i);
                            d.send(i, f, o, t), a.default.add(o, i => {
                                try {
                                    if (i.id !== t) throw Error("SYNC_RETURN: remote id not match");
                                    let o = T(i);
                                    e(o)
                                } catch (e) {
                                    n(e)
                                }
                            })
                        })
                    }
                }
            })
        }(r), E(r, e.id, e.members), O(r, e.id, e.proto), Object.defineProperty(r.constructor, "name", {value: e.name}), e.extendedMemberNames && e.extendedMemberNames.forEach((e, t) => {
            let n = r[e], i = r.__proto__;
            for (; i;) {
                if (Object.prototype.hasOwnProperty.call(i, e)) {
                    delete i[e];
                    break
                }
                i = i.__proto__
            }
            Object.defineProperty(r, e, {value: n, enumerable: !1, writable: !1, configurable: !0})
        })) : c.error("no id of meta:", e), r
    }

    t.Interest = C;

    class D {
        constructor(...e) {
            if (this.__resolved_ = !1, this.__promise_ = null, this.__remoteObj_ = null, this.__what_ = "", this.__name_ = "", "string" === typeof arguments[0]) {
                let e = arguments[0], t = arguments[1];
                this.__what_ = e, this.__name_ = t || e, this.__resolved_ = !1, this.__remoteObj_ = null, this.__promise_ = new Promise((n, i) => {
                    let o = this.getChannel(e), r = l.default(o);
                    d.send(o, f, r, t), a.default.add(r, e => {
                        try {
                            let t = T(e);
                            this.__remoteObj_ = t, this.__resolved_ = !0, n(t)
                        } catch (e) {
                            i(e)
                        }
                    })
                })
            } else this.__remoteObj_ = arguments[0], this.__resolved_ = !0, this.__promise_ = null
        }

        getChannel(e) {
            let t = "";
            switch (e) {
                case"module":
                    t = s.default.browser.require;
                    break;
                case"builtin":
                    t = s.default.browser.builtIn;
                    break;
                case"global":
                    t = s.default.browser.global;
                    break;
                case"current_window":
                    t = s.default.browser.currentWindow;
                    break;
                case"current_web_contents":
                    t = s.default.browser.currentWebContents;
                    break;
                case"client_web_contents":
                    t = s.default.browser.clientWebContents;
                    break;
                case"web_contents":
                    t = s.default.browser.webContents
            }
            return t
        }

        __resolve() {
            let e = this.__promise_;
            if (null !== e) ; else {
                if (!this.__resolved_) throw Error("missing the promise for ayncnomously get remote object");
                e = new Promise((e, t) => {
                    e(this.__remoteObj_)
                }), this.__promise_ = e
            }
            return e
        }

        __isResolved() {
            return this.__resolved_
        }
    }

    function y(e, t, n) {
        try {
            a.default.invoke(t, n).remove(t)
        } finally {
            a.default.remove(t)
        }
    }

    d.on(s.default.renderer.requireReturn, y), d.on(s.default.renderer.getBuiltInReturn, y), d.on(s.default.renderer.getGlobalReturn, y), d.on(s.default.renderer.currentWindowReturn, y), d.on(s.default.renderer.currentWebContentsReturn, y), d.on(s.default.renderer.functionCallReturn, y), d.on(s.default.renderer.constructReturn, y), d.on(s.default.renderer.memberCallReturn, y), d.on(s.default.renderer.memberSetReturn, y), d.on(s.default.renderer.memberGetReturn, y), d.on(s.default.renderer.memberConstructReturn, y), d.on(s.default.renderer.callback, (e, t, n) => {
        h.apply(t, T(n))
    }), d.on(s.default.renderer.syncReturn, y), d.on("ELECTRON_RENDERER_RELEASE_CALLBACK", (e, t) => {
        c.info("[RELEASE_CALLBACK]: callbackId:", t), h.remove(t)
    }), process.on("exit", () => {
        d.send(s.default.browser.contextRelease)
    });
    const N = ["__resolve", "__isResolved"], v = ["__promise_", "__resolved_", "__remoteObj_", "__name_", "__what_"],
        P = e => {
            if (!e.__isResolved()) throw Error("Can not access the property of a remote module which has not Resolved yet.")
        };

    function F(e) {
        const t = function () {
        };
        Object.defineProperty(t, "name", {value: e.__name_}), Object.defineProperty(t, "what", {
            enumerable: !1,
            value: e.__what_
        });
        let n = new Proxy(t, {
            getPrototypeOf: t => (P(e), Reflect.getPrototypeOf(e.__remoteObj_)),
            setPrototypeOf: (e, t) => {
                throw new Error("changing prototype of remote object is forbidden")
            },
            isExtensible: t => (P(e), Reflect.isExtensible(e.__remoteObj_)),
            preventExtensions: t => (P(e), Reflect.preventExtensions(e)),
            getOwnPropertyDescriptor: (t, n) => (P(e), Reflect.getOwnPropertyDescriptor(e.__remoteObj_, n)),
            has: (t, n) => (P(e), Reflect.has(e.__remoteObj_, n)),
            deleteProperty: (t, n) => (P(t), Reflect.deleteProperty(e.__remoteObj_, n)),
            defineProperty: (t, n, i) => (P(e), Reflect.defineProperty(e.__remoteObj_, n, i)),
            get: (t, n, i) => {
                if ("string" == typeof n) {
                    if (String.prototype.includes.call(v, n)) {
                        return e[n]
                    }
                    if (String.prototype.includes.call(N, n)) {
                        return e[n]
                    }
                }
                return P(e), Reflect.get(e.__remoteObj_, n)
            },
            set: (t, n, i, o) => (P(e), Reflect.set(e.__remoteObj_, n, i, o)),
            ownKeys: t => (P(e), Reflect.ownKeys(e.__remoteObj_)),
            apply: (t, n, i) => {
                P(e), Reflect.apply(e.__remoteObj_, n, i)
            },
            construct: (t, n, i) => {
                if (P(e), "function" != typeof e.__remoteObj_) throw Error("operator new ONLY used for function");
                return new Promise((t, i) => {
                    let o = s.default.browser.construct, r = l.default(o),
                        c = p.getHiddenValue(e.__remoteObj_, "__remote_id__");
                    d.send(o, f, r, c, m(n)), a.default.add(r, e => {
                        try {
                            t(T(e))
                        } catch (e) {
                            i(e)
                        }
                    })
                })
            }
        });
        return e.__promise_.then(e => {
            let t = typeof e;
            if ("function" === t || "object" === t) {
                let t = g(e);
                t && _(n, t)
            }
        }), n
    }

    t.remoteRequire = function (e) {
        return F(new D("module", e))
    }, t.getBuiltin = function (e) {
        return F(new D("builtin", e))
    }, t.getGlobal = function (e) {
        return F(new D("global", e))
    }, t.getCurrentWindow = function () {
        return F(new D("current_window"))
    }, t.getCurrentWebContents = function () {
        return F(new D("current_web_contents"))
    }, t.getWebContents = function () {
        return F(new D("web_contents"))
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = process.electronBinding("v8_util");
    t.default = class {
        constructor() {
            this.nextId = 0, this.callbacks = {}
        }

        add(e) {
            let t = i.getHiddenValue(e, "__remote_callback_id__");
            if (null != t) return t;
            t = this.nextId -= 1;
            const n = /at (.*)/gi, o = (new Error).stack;
            let r, a = n.exec(o);
            for (; null !== a;) {
                const e = a[1];
                if (!e.includes("native") && !e.includes("electron.asar")) {
                    r = /([^/^)]*)\)?$/gi.exec(e)[1];
                    break
                }
                a = n.exec(o)
            }
            return this.callbacks[t] = e, i.setHiddenValue(e, "__remote_callback_id__", t), i.setHiddenValue(e, "__remote_call_location__", r), t
        }

        get(e) {
            return this.callbacks[e] || function () {
            }
        }

        apply(e, ...t) {
            return this.get(e).apply(global, ...t)
        }

        remove(e) {
            const t = this.callbacks[e];
            t && (i.deleteHiddenValue(t, "__remote_callback_id__"), delete this.callbacks[e])
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(17);
    var o;
    !function (e) {
        let t = {};
        e.add = function (e, n, i) {
            t[e] = {func: n, thisArg: i}
        }, e.invoke = function (n, ...o) {
            let r = t[n];
            return r ? r.thisArg ? r.func.apply(r.thisArg, ...o) : r.func(...o) : i.error(`Cannot invoke function by unrecognize id. ${n}`), e
        }, e.remove = function (e) {
            delete t[e]
        }
    }(o || (o = {})), t.default = o
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    let i = 0;
    t.default = function (e) {
        return e ? e.concat(".").concat(String(++i)) : String(++i)
    }
}, function (e, t, n) {
    "use strict";
    const i = n(8), o = n(103), r = n(54), a = n(104), s = n(17), l = n(55), c = i.ipcMain,
        u = process.electronBinding("v8_util");
    let d = u.createDoubleIDWeakMap();
    const p = new o.default;

    function h(e, t, n, i, o, r) {
        let a, l = !1, c = null, u = !1;
        do {
            try {
                a = t[i]
            } catch (e) {
                l = !0
            }
            if (l) try {
                a = n.value[i], l = !1, n.meta.extendedMemberNames.push(i), u = !0
            } catch (e) {
                s.error(`property ${i} untouchable, even try root[name]`)
            }
            if (l) break;
            let o = Object.getOwnPropertyDescriptor(t, i);
            if (void 0 === o) {
                s.warn(`descriptor of property ${i} is undefined`);
                break
            }
            c = {
                name: i,
                enumerable: o.enumerable,
                writable: !1,
                type: "get"
            }, void 0 === o.get && "function" == typeof a ? c.type = "method" : ((o.set || o.writable) && (c.writable = !0), c.type = "get"), u ? (c.configurable = !0, c.value = C(e, a, r, !1, null)) : c.value = C(e, a, r, !1, n)
        } while (0);
        return c
    }

    function I(e, t, n, i = null) {
        let o = Object.getOwnPropertyNames(t);
        "function" == typeof t && (o = o.filter(function (e) {
            return !String.prototype.includes.call(a.propertiesOfFunction, e)
        }));
        let r = [];
        do {
            if (0 === o.length) break;
            let a = o.length;
            for (let s = 0; s < a; s++) {
                let a = h(e, t, n, o[s], 0, i);
                a && r.push(a)
            }
        } while (0);
        return r
    }

    function f(e, t, n, i = null) {
        let o = null, r = Object.getPrototypeOf(t);
        return o = null === r || r === Object.prototype || r === Function.prototype ? null : C(e, r, i, !1, n)
    }

    function C(e, t, n = null, i = !1, o = null) {
        n = null === n ? {} : n;
        const r = {type: typeof t};
        "object" === r.type && (r.type = function (e, t) {
            let n = typeof e;
            if ("object" !== n) throw new Error("incorrect arg at index 0. non-object");
            return null === e ? n = "value" : ArrayBuffer.isView(e) ? n = "buffer" : Array.isArray(e) ? n = "array" : e instanceof Error ? n = "error" : e instanceof Date ? n = "date" : l.isPromise(e) ? n = "promise" : Object.prototype.hasOwnProperty.call(e, "callee") && null != e.length ? n = "array" : t && u.getHiddenValue(e, "simple") && (n = "value"), n
        }(t, i));
        do {
            if ("object" === r.type || "function" === r.type) {
                let i = p.getIdOfObject(t);
                if (i && n[i]) {
                    r.refId = i, p.add(e, t);
                    break
                }
            }
            "array" === r.type ? r.members = t.map(t => C(e, t, n)) : "object" === r.type || "function" === r.type ? (null == o && (r.extendedMemberNames = [], o = {
                value: t,
                meta: r
            }), r.name = t.constructor ? t.constructor.name : "", r.id = p.add(e, t), n[r.id] = !0, r.members = I(e, t, o, n), r.proto = f(e, t, o, n)) : "buffer" === r.type ? r.value = Buffer.from(t) : "promise" === r.type ? (t.then(function () {
            }, function () {
            }), r.then = C(e, function (e, n) {
                t.then(e, n)
            })) : "error" === r.type ? (r.members = m(t), r.members.push({
                name: "name",
                value: t.name
            })) : "date" === r.type ? r.value = t.getTime() : (r.type = "value", r.value = t)
        } while (0);
        return r
    }

    function m(e) {
        return Object.getOwnPropertyNames(e).map(t => ({name: t, value: e[t]}))
    }

    function S(e, t, n, o) {
        const a = function (o) {
            let l, c, h = 0, I = 0;
            switch (o.type) {
                case"value":
                    return o.value;
                case"remote-object":
                    return p.get(o.id);
                case"array":
                    return S(e, t, n, o.value);
                case"buffer":
                    return Buffer.from(o.value);
                case"date":
                    return new Date(o.value);
                case"promise":
                    return Promise.resolve({then: a(o.then)});
                case"object":
                case"interest": {
                    let e = {};
                    for (Object.defineProperty(e.constructor, "name", {value: o.name}), h = 0, I = (c = o.members).length; h < I; h++) e[(l = c[h]).name] = a(l.value);
                    return e
                }
                case"function": {
                    const a = e.id, l = [n, o.id];
                    if (s.info("renderer function id:" + l), d.has(l)) return d.get(l);
                    let c = function (...t) {
                        s.info("[CALLBACK] args", t);
                        let n = [...t];
                        e.isDestroyed() || a !== e.id ? function (e, t, n) {
                            let o = "Attempting to call a function in a renderer window that has been closed or released." + `\nFunction provided here: ${e.location}`;
                            if (t.length > 0 && t[0].sender && t[0].sender instanceof i.webContents.constructor) {
                                const {sender: e} = t[0], i = e.eventNames().filter(t => {
                                    let i = e.listeners(t), o = !1;
                                    return i.forEach(e => {
                                        e === n && (o = !0)
                                    }), o
                                });
                                i.length > 0 && (o += `\nRemote event names: ${i.join(", ")}`, i.forEach(t => {
                                    Object.getPrototypeOf(e).removeListener.call(e, t, n)
                                }))
                            }
                            s.warn(o)
                        }(o, n, c) : e.send(r.default.renderer.callback, o.id, C(e, n))
                    };
                    return Object.defineProperty(c, "length", {value: o.length}), u.setRemoteCallbackFreer(c, t, n, o.id, e), d.set(l, c), c
                }
                default:
                    throw new TypeError(`Unknown type: ${o.type}`)
            }
        };
        return o.map(a)
    }

    function E(e, t, n, i) {
        let o, r;
        try {
            return t.apply(n, i)
        } catch (e) {
            return r = t.name, new Error(`Could not call remote function '${o = null != r ? r : "anonymous"}'. Check that the function signature is correct. Underlying error: ${e.message}`)
        }
    }

    function O(e) {
        return {type: "exception", message: e.message, stack: e.stack || e}
    }

    function _(e) {
        const t = new Error(e);
        throw Object.defineProperty(t, "code", {value: "EBADRPC"}), Object.defineProperty(t, "errno", {value: -72}), t
    }

    var g;
    !function (e) {
        const t = (e, t, ...n) => {
            const i = e.sender;
            i.isDestroyed() ? s.warn("webcontext is destroyed.") : i.send(t, ...n)
        };
        e.startServer = function () {
            c.on(r.default.browser.require, (e, n, i, o) => {
                s.info(`[REQUIRE] module=${o} `);
                let a = process.mainModule.require(o), l = C(e.sender, a);
                t(e, r.default.renderer.requireReturn, i, l)
            }), c.on(r.default.browser.builtIn, (e, n, o, a) => {
                s.info(`[BUILTIN]: property=${a} contextId=${n}`);
                let l = i[a], c = C(e.sender, l);
                s.info(`[BUILTIN]: returns remoteId:${c.id}, type: ${typeof l}`), t(e, r.default.renderer.getBuiltInReturn, o, c)
            }), c.on(r.default.browser.global, (e, n, i, o) => {
                s.info(`[GLOBAL]: proerty:${o} contextId=${n}`);
                let a, l = global[o];
                a = C(e.sender, l), s.info(`[GLOBAL]: returns remoteid=${a.id}, obj=` + typeof l), t(e, r.default.renderer.getGlobalReturn, i, a)
            }), c.on(r.default.browser.currentWindow, (e, n, i, o) => {
                s.info(`[CURRENT_WINDOW]: property=${o} contextId=${n}`);
                let a = e.sender.getOwnerBrowserWindow.call(e.sender), l = C(e.sender, a);
                s.info(`[CURRENT_WINDOW]: returns remoteid=${l.id}, obj=` + a), t(e, r.default.renderer.currentWindowReturn, i, l)
            }), c.on(r.default.browser.currentWebContents, (e, n, i, o) => {
                t(e, r.default.renderer.currentWebContentsReturn, i, C(e.sender, e.sender))
            }), c.on(r.default.browser.webContents, (e, n, o, a) => {
                s.info(`[WebContents]: proerty:${a} contextId=${n}`);
                let l, c = i.webContents;
                l = C(e.sender, c), s.info(`[WebContents]: returns remoteid=${l.id}, obj=` + typeof c), t(e, r.default.renderer.webContentsReturn, o, l)
            });
            const e = (e, t) => {
                const n = (t, n) => {
                    t && Object.getOwnPropertyNames(t).forEach(i => {
                        n ? e.once(i, t[i]) : e.on(i, t[i])
                    })
                };
                t.on && n(t.on, !1), t.once && n(t.once, !0)
            };
            c.on(r.default.browser.construct, (n, i, o, a, l) => {
                let c, u = null;
                try {
                    s.info(`[CONSTRUCTOR]: remoteId=${a} `);
                    let d = l.length > 0 ? l[l.length - 1] : null;
                    l = S(n.sender, n.frameId, i, l);
                    let h = p.get(a);
                    null == h && _(`Cannot call constructor on missing remote object ${a}`), d && "interest" === d.type && (u = l.pop());
                    let I = new (Function.prototype.bind.apply(h, [null, ...l]));
                    I && u && e(I, u), c = C(n.sender, I, null, !1), s.info(`[CONSTRUCTOR]: returns remoteId =${c.id} name=${h.name} `)
                } catch (e) {
                    c = O(e)
                } finally {
                    t(n, r.default.renderer.constructReturn, o, c)
                }
            }), c.on(r.default.browser.functionCall, function (e, n, i, o, a, l) {
                let c;
                try {
                    s.info(`[FUNCTION_CALL]: remoteId=${a}`), l = S(e.sender, e.frameId, n, l);
                    let u = p.get(a);
                    if (null == u) s.error(`Cannot call function on missing remote object ${a}`), c = C(e.sender, void 0); else {
                        let t = o ? p.get(o) : global;
                        if (t) {
                            let n = E(0, u, t, l);
                            c = C(e.sender, n)
                        } else s.error(`Cannot call function(${a}) on missing context(${o})`), c = C(e.sender, void 0)
                    }
                    s.info(`[FUNCTION_CALL]: name=${u.name}`)
                } catch (e) {
                    c = O(e)
                } finally {
                    t(e, r.default.renderer.functionCallReturn, i, c)
                }
            }), c.on(r.default.browser.memberCall, function (e, n, i, o, a, l, c) {
                let u;
                s.info(`[MEMBER_CALL]: thisArg=${o}, remoteId=${a}, method=${l}, args count=${c.length}`);
                try {
                    c = S(e.sender, e.frameId, n, c);
                    let d = p.get(a);
                    null == d && _(`Cannot call function '${l}' on missing remote object ${a}`);
                    let h = o ? p.get(o) : d;
                    if (h) {
                        let t = E(0, d[l], h, c);
                        u = C(e.sender, t), s.info("[MEMBER_CALL]: return=" + t)
                    } else u = C(e.sender, void 0)
                } catch (e) {
                    u = O(e)
                } finally {
                    t(e, r.default.renderer.memberCallReturn, i, u)
                }
            }), c.on(r.default.browser.memberGet, function (e, n, i, o, a) {
                let l;
                try {
                    s.info(`[MEMBER_GET]: remoteId=${o}, property=`, a);
                    let n = p.get(o);
                    null == n && _(`Cannot get property '${Object.toString.call(a)}' on missing remote object ${o}`);
                    let c = n[a];
                    l = C(e.sender, c)
                } catch (e) {
                    l = O(e)
                } finally {
                    t(e, r.default.renderer.memberGetReturn, i, l)
                }
            }), c.on(r.default.browser.memberSet, function (e, n, i, o, a, l) {
                try {
                    s.info(`[MEMBER_SET]: remoteId=${o}, property=` + a), l = S(e.sender, e.frameId, n, l);
                    let c = p.get(o);
                    null == c && _(`Cannot set property '${Object.toString.call(a)}' on missing remote object ${o}`), c[a] = l[0], t(e, r.default.renderer.memberSetReturn, i, {
                        type: "value",
                        value: !0
                    })
                } catch (n) {
                    t(e, r.default.renderer.memberSetReturn, i, O(n))
                }
            }), c.on(r.default.browser.memberConstruct, function (n, i, o, a, l, c) {
                let u, d = null;
                try {
                    s.info(`[MEMBER_CONSTRUCTOR]: regId=${a}, method=${l}`);
                    let h = c.length > 0 ? c[c.length - 1] : null;
                    c = S(n.sender, n.frameId, i, c);
                    let I = p.get(a);
                    null == I && _(`Cannot call constructor '${l}' on missing remote object ${a}`), h && "interest" === h.type && (d = c.pop());
                    let f = I[l], m = new (Function.prototype.bind.apply(f, [null, ...c]));
                    m && d && e(m, d), u = C(n.sender, m)
                } catch (e) {
                    u = O(e)
                } finally {
                    t(n, r.default.renderer.memberConstructReturn, o, u)
                }
            }), c.on(r.default.browser.sync, function (e, n, i, o) {
                let a = p.get(o);
                t(e, r.default.renderer.syncReturn, i, C(e.sender, a))
            }), c.on("ELECTRON_BROWSER_DEREFERENCE", function (e, t) {
                let n = p.get(t);
                if (i.ipcMain.emit("log_to_renderer", "ELECTRON_BROWSER_DEREFERENCE", t, typeof n), n) {
                    let i = n.name;
                    i || (i = n.constructor ? n.constructor.name : ""), p.remove(e.sender.id, t)
                } else t < 0 && s.warn("remote id reference to nothing:", t)
            }), c.on(r.default.browser.contextRelease, e => {
                p.clear(e.sender.id)
            })
        }, e.getObjectRegistry = function () {
            return p
        }
    }(g || (g = {})), e.exports = g
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(17), o = -1 * Math.pow(2, 31), r = process.electronBinding("v8_util");
    t.default = class {
        constructor() {
            this.nextId = 0, this.storage = new Map, this.owners = new Map
        }

        add(e, t) {
            const n = this.saveToStorage(t), i = e.id;
            let o = this.owners.get(i);
            return o || (o = new Set, this.owners.set(i, o), this.registerDeleteListener(e, i)), o.has(n) || (o.add(n), this.storage.get(n).count++), n
        }

        getIdOfObject(e) {
            return r.getHiddenValue(e, "__remote_id__")
        }

        get(e) {
            const t = this.storage.get(e);
            if (void 0 !== t) return t.object
        }

        remove(e, t) {
            this.dereference(t);
            let n = this.owners.get(e);
            n && n.delete(t)
        }

        clear(e) {
            let t = this.owners.get(e);
            if (t) {
                for (let e of t) this.dereference(e);
                this.owners.delete(e)
            }
        }

        getStorageSize() {
            return this.storage.size
        }

        saveToStorage(e) {
            let t = r.getHiddenValue(e, "__remote_id__");
            if (!t) {
                if ((t = --this.nextId) <= o) throw new Error("object registry id overflow");
                this.storage.set(t, {object: e, count: 0}), r.setHiddenValue(e, "__remote_id__", t)
            }
            return t
        }

        dereference(e) {
            let t = this.storage.get(e);
            null != t && (t.count -= 1, 0 === t.count && (r.deleteHiddenValue(t.object, "__remote_id__"), this.storage.delete(e)))
        }

        registerDeleteListener(e, t) {
            const n = e.getProcessId(), o = (r, a) => {
                a === n && (i.info("render-view-deleted: processid=" + n), (() => {
                    i.info("before clear. objectsRegistry capacity=" + this.storage.size, "owners size:" + this.owners.size)
                })(), e.removeListener("render-view-deleted", o), this.clear(t))
            };
            e.on("render-view-deleted", o)
        }
    }
}, function (e, t, n) {
    "use strict";
    var i;
    !function (e) {
        e.propertiesOfFunction = ["length", "name", "arguments", "caller", "prototype", "apply", "bind", "call", "toString"]
    }(i || (i = {})), e.exports = i
}, function (e, t, n) {
    e.exports = n(29)(5)
}, function (e, t) {
    e.exports = require("child_process")
}, function (e, t, n) {
    e.exports = !n(16) && !n(35)(function () {
        return 7 != Object.defineProperty(n(64)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t) {
}, function (e, t, n) {
    "use strict";
    var i = n(36), o = n(13), r = n(110), a = n(21), s = n(30), l = n(174), c = n(49), u = n(178), d = n(7)("iterator"),
        p = !([].keys && "next" in [].keys()), h = function () {
            return this
        };
    e.exports = function (e, t, n, I, f, C, m) {
        l(n, t, I);
        var S, E, O, _ = function (e) {
                if (!p && e in y) return y[e];
                switch (e) {
                    case"keys":
                    case"values":
                        return function () {
                            return new n(this, e)
                        }
                }
                return function () {
                    return new n(this, e)
                }
            }, g = t + " Iterator", T = "values" == f, D = !1, y = e.prototype, N = y[d] || y["@@iterator"] || f && y[f],
            v = N || _(f), P = f ? T ? _("entries") : v : void 0, F = "Array" == t && y.entries || N;
        if (F && (O = u(F.call(new e))) !== Object.prototype && O.next && (c(O, g, !0), i || "function" == typeof O[d] || a(O, d, h)), T && N && "values" !== N.name && (D = !0, v = function () {
            return N.call(this)
        }), i && !m || !p && !D && y[d] || a(y, d, v), s[t] = v, s[g] = h, f) if (S = {
            values: T ? v : _("values"),
            keys: C ? v : _("keys"),
            entries: P
        }, m) for (E in S) E in y || r(y, E, S[E]); else o(o.P + o.F * (p || D), t, S);
        return S
    }
}, function (e, t, n) {
    e.exports = n(21)
}, function (e, t, n) {
    var i = n(22), o = n(28), r = n(176)(!1), a = n(69)("IE_PROTO");
    e.exports = function (e, t) {
        var n, s = o(e), l = 0, c = [];
        for (n in s) n != a && i(s, n) && c.push(n);
        for (; t.length > l;) i(s, n = t[l++]) && (~r(c, n) || c.push(n));
        return c
    }
}, function (e, t, n) {
    var i = n(6).document;
    e.exports = i && i.documentElement
}, function (e, t, n) {
    var i = n(86), o = n(7)("iterator"), r = n(30);
    e.exports = n(3).getIteratorMethod = function (e) {
        if (void 0 != e) return e[o] || e["@@iterator"] || r[i(e)]
    }
}, function (e, t, n) {
    var i = n(15), o = n(46), r = n(7)("species");
    e.exports = function (e, t) {
        var n, a = i(e).constructor;
        return void 0 === a || void 0 == (n = i(a)[r]) ? t : o(n)
    }
}, function (e, t, n) {
    var i, o, r, a = n(43), s = n(185), l = n(112), c = n(64), u = n(6), d = u.process, p = u.setImmediate,
        h = u.clearImmediate, I = u.MessageChannel, f = u.Dispatch, C = 0, m = {}, S = function () {
            var e = +this;
            if (m.hasOwnProperty(e)) {
                var t = m[e];
                delete m[e], t()
            }
        }, E = function (e) {
            S.call(e.data)
        };
    p && h || (p = function (e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return m[++C] = function () {
            s("function" == typeof e ? e : Function(e), t)
        }, i(C), C
    }, h = function (e) {
        delete m[e]
    }, "process" == n(37)(d) ? i = function (e) {
        d.nextTick(a(S, e, 1))
    } : f && f.now ? i = function (e) {
        f.now(a(S, e, 1))
    } : I ? (r = (o = new I).port2, o.port1.onmessage = E, i = a(r.postMessage, r, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (i = function (e) {
        u.postMessage(e + "", "*")
    }, u.addEventListener("message", E, !1)) : i = "onreadystatechange" in c("script") ? function (e) {
        l.appendChild(c("script")).onreadystatechange = function () {
            l.removeChild(this), S.call(e)
        }
    } : function (e) {
        setTimeout(a(S, e, 1), 0)
    }), e.exports = {set: p, clear: h}
}, function (e, t) {
    e.exports = function (e) {
        try {
            return {e: !1, v: e()}
        } catch (e) {
            return {e: !0, v: e}
        }
    }
}, function (e, t, n) {
    var i = n(15), o = n(19), r = n(73);
    e.exports = function (e, t) {
        if (i(e), o(t) && t.constructor === e) return t;
        var n = r.f(e);
        return (0, n.resolve)(t), n.promise
    }
}, function (e, t, n) {
    var i = n(111), o = n(71).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function (e) {
        return i(e, o)
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.ServerEventRef = void 0;
    const i = n(1), o = n(0).default.getLogger("server-event-ref");

    class r {
        constructor() {
            this.eventCookies = [], this.group = "Global", this.groupRefs = []
        }

        attachEvent(e, t) {
            let n = i.client.attachServerEvent(e, t);
            return this.eventCookies.push({
                eventName: e,
                cookie: n
            }), o.information("attachEvent", e, n, "attach count", this.eventCookies.length, "group", this.group), n
        }

        attachGroupEvent(e, t, n) {
            return this.getGroupRef(e).attachEvent(t, n)
        }

        detchEvent(e) {
            let t = [];
            this.eventCookies.forEach(n => {
                n.cookie === e ? (i.client.detachServerEvent(n.eventName, n.cookie), o.information("detchEvent", n.eventName, n.cookie, "group", this.group)) : t.push(n)
            }), this.eventCookies = t
        }

        detchGroupEvent(e, t) {
            return this.getGroupRef(e).detchEvent(t)
        }

        detchGroupAllEvent(e) {
            return this.getGroupRef(e).detchAllEvent()
        }

        detchAllEvent() {
            o.information("detchAllEvent begin", "attach count", this.eventCookies.length, "group", this.group), this.eventCookies.forEach(e => {
                i.client.detachServerEvent(e.eventName, e.cookie), o.information("detchEvent", e.eventName, e.cookie)
            }), o.information("detchAllEvent end"), this.eventCookies = [], this.groupRefs.forEach(e => {
                e.seRef.detchAllEvent()
            })
        }

        getGroupRef(e) {
            let t = null;
            if (this.groupRefs.forEach(n => {
                n.group === e && (t = n.seRef)
            }), null === t) {
                let n = {group: e, seRef: new r};
                n.seRef.group = e, this.groupRefs.push(n), t = n.seRef
            }
            return t
        }
    }

    t.ServerEventRef = r, t.default = new r
}, function (e, t, n) {
    "use strict";
    var i = n(32), o = n(308), r = n(310), a = n(311), s = n(312), l = n(242);
    e.exports = function (e) {
        return new Promise(function (t, c) {
            var u = e.data, d = e.headers;
            i.isFormData(u) && delete d["Content-Type"];
            var p = new XMLHttpRequest;
            if (e.auth) {
                var h = e.auth.username || "", I = e.auth.password || "";
                d.Authorization = "Basic " + btoa(h + ":" + I)
            }
            if (p.open(e.method.toUpperCase(), r(e.url, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p.onreadystatechange = function () {
                if (p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                    var n = "getAllResponseHeaders" in p ? a(p.getAllResponseHeaders()) : null, i = {
                        data: e.responseType && "text" !== e.responseType ? p.response : p.responseText,
                        status: p.status,
                        statusText: p.statusText,
                        headers: n,
                        config: e,
                        request: p
                    };
                    o(t, c, i), p = null
                }
            }, p.onerror = function () {
                c(l("Network Error", e, null, p)), p = null
            }, p.ontimeout = function () {
                c(l("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", p)), p = null
            }, i.isStandardBrowserEnv()) {
                var f = n(313),
                    C = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? f.read(e.xsrfCookieName) : void 0;
                C && (d[e.xsrfHeaderName] = C)
            }
            if ("setRequestHeader" in p && i.forEach(d, function (e, t) {
                void 0 === u && "content-type" === t.toLowerCase() ? delete d[t] : p.setRequestHeader(t, e)
            }), e.withCredentials && (p.withCredentials = !0), e.responseType) try {
                p.responseType = e.responseType
            } catch (t) {
                if ("json" !== e.responseType) throw t
            }
            "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
                p && (p.abort(), c(e), p = null)
            }), void 0 === u && (u = null), p.send(u)
        })
    }
}, function (e, t, n) {
    "use strict";
    var i, o = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, n, a) : o(t, n)) || a);
        return r > 3 && a && Object.defineProperty(t, n, a), a
    };
    Object.defineProperty(t, "__esModule", {value: !0}), t.MenuHandleVue = void 0;
    const r = n(12), a = n(0).default.getLogger("MenuHandle");
    let s = i = class extends r.Vue {
        created() {
            i.menuHandle.handleVues.push(this)
        }

        setEventEmiter(e) {
            i.menuHandle.setEventEmiter(e)
        }

        reset() {
            i.menuHandle.reset()
        }

        addPopupMenu(e, t, n) {
            i.menuHandle.addPopupMenu(e, t, n)
        }

        getLeft(e) {
            return i.menuHandle.getLeft(e)
        }

        getTop(e) {
            return i.menuHandle.getTop(e)
        }

        showPopupMenu(e) {
            return i.menuHandle.showPopupMenu(e)
        }

        clearPopupMenu() {
            i.menuHandle.clearPopupMenu()
        }

        addDelaydelPopupMenu(e, t, n) {
            i.menuHandle.addDelaydelPopupMenu(e, t, n)
        }

        handleDelayDelpopMenus() {
            i.menuHandle.handleDelayDelpopMenus()
        }
    };
    s.menuHandle = new class {
        constructor() {
            this.popupMenus = new Map, this.delayDelpopMenus = new Map, this.eventEmiter = null, this.handleVues = []
        }

        setEventEmiter(e) {
            this.eventEmiter = e
        }

        reset() {
            this.popupMenus = new Map, this.changeMenu("reset")
        }

        addPopupMenu(e, t, n) {
            if (a.information("addPopupMenu", e, t, n), this.popupMenus.size > 1 && void 0 === t && this.popupMenus.get(e)) return void a.information("filter addPopupMenu", e, t, n);
            let i = document.getElementById(e);
            if (i) {
                let n = {
                    x: this.getLeft(i),
                    y: this.getTop(i),
                    width: i.offsetWidth,
                    height: i.clientHeight,
                    leveal: t || 1
                };
                !this.popupMenus.get(e) && this.eventEmiter && this.eventEmiter.$emit("show-popup-menu", e);
                let o = new Map;
                this.popupMenus.forEach((e, t) => {
                    e.leveal < n.leveal && o.set(t, e)
                }), o.set(e, n), this.delayDelpopMenus.delete(e), this.popupMenus = o, this.changeMenu("addPopupMenu")
            }
        }

        getLeft(e) {
            let t = e.offsetLeft;
            return null !== e.offsetParent && (t += this.getLeft(e.offsetParent)), t
        }

        getTop(e) {
            let t = e.offsetTop;
            return null !== e.offsetParent && (t += this.getTop(e.offsetParent)), t
        }

        showPopupMenu(e) {
            return this.popupMenus.has(e)
        }

        clearPopupMenu() {
            this.delayDelpopMenus.clear(), this.popupMenus = new Map, this.changeMenu("clearPopupMenu")
        }

        addDelaydelPopupMenu(e, t, n) {
            a.information("addDelaydelPopupMenu", e, t, n), this.delayDelpopMenus.set(e, (new Date).getTime() + (void 0 !== t ? t : 1e3)), 0 === t && this.handleDelayDelpopMenus()
        }

        handleDelayDelpopMenus() {
            let e = !1, t = new Map;
            this.popupMenus.forEach((n, i) => {
                if (this.delayDelpopMenus.has(i)) {
                    let o = this.delayDelpopMenus.get(i);
                    (new Date).getTime() < o ? t.set(i, n) : (this.delayDelpopMenus.delete(i), e = !0)
                } else t.set(i, n)
            }), e && (this.popupMenus = t, this.changeMenu("handleDelayDelpopMenus"))
        }

        changeMenu(e) {
            a.information("changeMenu", this.popupMenus.size, this.popupMenus, e), this.eventEmiter.$emit("on-set-menu-rect", this.popupMenus);
            for (let e = 0; e < this.handleVues.length; e++) this.handleVues[e].$forceUpdate()
        }
    }, s = i = o([r.Component({})], s), t.MenuHandleVue = s
}, , , , function (e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0}), t.MessageBox = void 0;
    const o = n(8), r = n(40);
    !function (e) {
        let t;
        !function (e) {
            e.Info = "info", e.Warning = "warning", e.Error = "error", e.Success = "success"
        }(t = e.ConfirmType || (e.ConfirmType = {})), e.confirm = function (e, t = {}) {
            return i(this, void 0, void 0, function* () {
                return e.boxId = String(Math.random()).replace(/\D/, ""), o.ipcRenderer.send("xmp-message-box-confirm-create", {
                    dialogConf: t,
                    options: e
                }), (yield r.electron.ipcMain.__resolve()).once(`xmp-message-box-init-${e.boxId}`, t => {
                    t.sender.send("xmp-message-box-init-reply", {popType: "confirm", options: e})
                }), new Promise(t => i(this, void 0, void 0, function* () {
                    (yield r.electron.ipcMain.__resolve()).once(`xmp-message-box-resolve-${e.boxId}`, (e, n, i) => {
                        t({action: n, checkboxChecked: i})
                    })
                }))
            })
        }, e.pop = function (e, t = {}) {
            return i(this, void 0, void 0, function* () {
                let n = String(Math.random()).replace(/\D/, "");
                return o.ipcRenderer.send("xmp-message-box-pop-create", {
                    dialogConf: t,
                    boxId: n
                }), (yield r.electron.ipcMain.__resolve()).once(`xmp-message-box-init-${n}`, t => {
                    t.sender.send("xmp-message-box-init-reply", {popType: "message-box", options: e})
                }), new Promise(e => i(this, void 0, void 0, function* () {
                    (yield r.electron.ipcMain.__resolve()).once(`xmp-message-box-resolve-${n}`, (t, n, i) => {
                        e({action: n, formData: i})
                    })
                }))
            })
        }, e.custom = function (e, t = {}, n = {}) {
            return i(this, void 0, void 0, function* () {
                let a = String(Math.random()).replace(/\D/, "");
                return t.boxId = a, o.ipcRenderer.send("xmp-message-box-custom-create", {
                    popType: e,
                    dialogConf: n,
                    boxId: a,
                    options: t
                }), (yield r.electron.ipcMain.__resolve()).once(`xmp-message-box-init-${a}`, i => {
                    i.sender.send("xmp-message-box-init-reply", {popType: e, options: t, dialogConf: n})
                }), new Promise(e => i(this, void 0, void 0, function* () {
                    (yield r.electron.ipcMain.__resolve()).once(`xmp-message-box-resolve-${a}`, (t, n, i) => {
                        e({action: n, args: i})
                    })
                }))
            })
        }
    }(t.MessageBox || (t.MessageBox = {}))
}, , , function (e, t, n) {
    e.exports = {default: n(170), __esModule: !0}
}, function (e, t, n) {
    var i = n(37);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == i(e) ? e.split("") : Object(e)
    }
}, function (e, t, n) {
    var i = n(15);
    e.exports = function (e, t, n, o) {
        try {
            return o ? t(i(n)[0], n[1]) : t(n)
        } catch (t) {
            var r = e.return;
            throw void 0 !== r && i(r.call(e)), t
        }
    }
}, function (e, t, n) {
    var i = n(30), o = n(7)("iterator"), r = Array.prototype;
    e.exports = function (e) {
        return void 0 !== e && (i.Array === e || r[o] === e)
    }
}, function (e, t, n) {
    var i = n(7)("iterator"), o = !1;
    try {
        var r = [7][i]();
        r.return = function () {
            o = !0
        }, Array.from(r, function () {
            throw 2
        })
    } catch (e) {
    }
    e.exports = function (e, t) {
        if (!t && !o) return !1;
        var n = !1;
        try {
            var r = [7], a = r[i]();
            a.next = function () {
                return {done: n = !0}
            }, r[i] = function () {
                return a
            }, e(r)
        } catch (e) {
        }
        return n
    }
}, function (e, t, n) {
    var i = n(48)("meta"), o = n(19), r = n(22), a = n(14).f, s = 0, l = Object.isExtensible || function () {
        return !0
    }, c = !n(35)(function () {
        return l(Object.preventExtensions({}))
    }), u = function (e) {
        a(e, i, {value: {i: "O" + ++s, w: {}}})
    }, d = e.exports = {
        KEY: i, NEED: !1, fastKey: function (e, t) {
            if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!r(e, i)) {
                if (!l(e)) return "F";
                if (!t) return "E";
                u(e)
            }
            return e[i].i
        }, getWeak: function (e, t) {
            if (!r(e, i)) {
                if (!l(e)) return !0;
                if (!t) return !1;
                u(e)
            }
            return e[i].w
        }, onFreeze: function (e) {
            return c && d.NEED && l(e) && !r(e, i) && u(e), e
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0}), t.VipPluginHelper = void 0;
    const o = n(50), r = n(0), a = n(31), s = r.default.getLogger("xmp-vip-plugin-helper");

    class l {
        constructor() {
            this.mThunderVersionStr = void 0, this.mThunderVersionNumber = void 0, this.mPluginVersion = void 0
        }

        setPluginInfo(e, t, n) {
            this.mThunderVersionStr = e, this.mThunderVersionNumber = t, this.mPluginVersion = n, localStorage.setItem("VipPluginHelper.ThunderVersionStr", this.mThunderVersionStr), localStorage.setItem("VipPluginHelper.ThunderVersionNumber", this.mThunderVersionNumber.toString()), localStorage.setItem("VipPluginHelper.PluginVersion", this.mPluginVersion), s.information("setPluginInfo", e, t, n)
        }

        get thunderVersionNumber() {
            return this.mThunderVersionNumber || Number(localStorage.getItem("VipPluginHelper.ThunderVersionNumber"))
        }

        get thunderVersionString() {
            return this.mThunderVersionStr || localStorage.getItem("VipPluginHelper.ThunderVersionStr")
        }

        get pluginVersion() {
            return this.mPluginVersion || localStorage.getItem("VipPluginHelper.PluginVersion")
        }

        get currentTime() {
            return Math.floor((new Date).getTime() / 1e3)
        }

        getXmpMode() {
            return i(this, void 0, void 0, function* () {
                let e = yield a.CommonNS.getXmpCurrentMode();
                switch (s.information("XMPShowMode", e), e) {
                    case o.XmpMode.EMBED_MODE:
                        return "pannel"
                }
                return "xmp"
            })
        }

        get clientName() {
            return "xl_xmp"
        }
    }

    t.VipPluginHelper = l, t.default = new l
}, function (e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0}), t.PlayTryNS = void 0;
    const o = n(1), r = n(31), a = n(0), s = n(240), l = n(50), c = n(88), u = n(38), d = n(119),
        p = a.default.getLogger("XmpPlayTry");
    !function (e) {
        let t, n, a, h;
        !function (e) {
            e.none = "PlayTry.State.none", e.ready = "PlayTry.State.ready", e.commiting = "PlayTry.State.commiting", e.commifailed = "PlayTry.State.commifailed", e.runing = "PlayTry.State.runing", e.stop = "PlayTry.State.stop", e.finish = "PlayTry.State.finish", e.over = "PlayTry.State.over"
        }(t = e.State || (e.State = {})), function (e) {
            e.stateChange = "PlayTry.Event.stateChange", e.acclerateUpdate = "PlayTry.Event.acclerateUpdate", e.progessUpdate = "PlayTry.Event.progessUpdate", e.activeTaskDel = "PlayTry.Event.activeTaskDel", e.afterFinishOneMin = "PlayTry.Event.afterFinishOneMin"
        }(n = e.Event || (e.Event = {})), function (e) {
            e.getState = "GetState", e.getStateInfo = "GetStateInfo", e.gotoPlayTry = "GotoPlayTry", e.clearPlayTry = "ClearPlayTry", e.tryShowPlayTry = "TryShowPlayTry"
        }(a = e.Function || (e.Function = {})), function (e) {
            e.stateChange = "PlayTry.FireEvent.StateChange"
        }(h = e.FireEvent || (e.FireEvent = {}));
        const I = "OnVipTaskInfoChanged";
        let f = {state: t.none, useTick: 0, allTick: 60, vipspeed: 0, speed: 0, isCloudTask: !1}, C = new Map;

        function m(e, n) {
            return i(this, void 0, void 0, function* () {
                if (!e) return r.CommonNS.callXmp(a.getState, n);
                if (f.state === t.ready) {
                    let e = C.get(n);
                    if (p.information("vipTaskInfo", n, e), !e || e.isHResource || void 0 === e.isHResource || e.isCloudTask) return t.none;
                    let i = yield r.CommonNS.callXmp(l.XmpPlayerFunction.getDuration);
                    if (i < 6e5) return p.information("durnation < 600000, cant not try", i), t.none;
                    if (yield r.CommonNS.callXmp(l.XmpPlayerFunction.isPlayMusic)) return p.information("is music, cant not try"), t.none
                }
                return f.state
            })
        }

        function S(e) {
            return i(this, void 0, void 0, function* () {
                return e ? f : r.CommonNS.callXmp(a.getStateInfo)
            })
        }

        function E(e, n, o) {
            return i(this, void 0, void 0, function* () {
                p.information("onStateChange", n, o);
                let e = C.get(yield r.CommonNS.getCurrentTaskId());
                switch (e && (f.isCloudTask = e.isCloudTask), n) {
                    case t.ready:
                        f.state = n, f.tryNum = o.tryNum;
                        break;
                    default:
                        f.state = n, f.tryNum = o.tryNum, t.finish === n && (f.beforeSpeed = o.beforeSpeed, f.tryingSpeed = o.tryingSpeed, f.promotePercent = o.percent), void 0 !== o.beforeSpeed && (f.beforeSpeed = o.beforeSpeed)
                }
                f.stateChangeTick = (new Date).getTime(), s.server.fireClientEvent(h.stateChange)
            })
        }

        function O(e, t, n, o, r) {
            return i(this, void 0, void 0, function* () {
                f.useTick = t, f.allTick = n, f.speed = o, f.vipspeed = r, p.information("onProgessUpdate", f), s.server.fireClientEvent(h.stateChange)
            })
        }

        function _(e, t, n) {
            return i(this, void 0, void 0, function* () {
                let e = C.get(t), i = {
                    isCloudTask: n.isCloudTask,
                    isHResource: n.isHResource,
                    isPlayAndDownload: n.isPlayAndDownload
                };
                C.set(t, i), e && e.isHResource !== i.isHResource && s.server.fireClientEvent(h.stateChange), p.information("onVipTaskInfoChanged", t, i)
            })
        }

        function g(e) {
            return i(this, void 0, void 0, function* () {
                p.information("onXmpStop"), f = {
                    state: t.none,
                    useTick: 0,
                    allTick: 60,
                    vipspeed: 0,
                    speed: 0,
                    isCloudTask: !1
                }, r.CommonNS.callVipPlugin(a.clearPlayTry).catch()
            })
        }

        function T(e) {
            return i(this, void 0, void 0, function* () {
                u.default.isVip || !(yield r.CommonNS.isPlayAndDownload()) || (yield r.CommonNS.isYunRecvTask()) ? p.information("onXmpPlaying isPlayAndDownload") : (p.information("onXmpPlaying TryShowPlayTry"), r.CommonNS.callVipPlugin(a.tryShowPlayTry, yield r.CommonNS.getCurrentTaskId()).catch())
            })
        }

        function D(e, t, n, o) {
            return i(this, void 0, void 0, function* () {
                p.information("onAfterFinishOneMin");
                let e = yield r.CommonNS.callXmp(l.XmpPlayerFunction.getDuration);
                c.VipStatNS.playTryAfterOneMin(yield r.CommonNS.getCurrentTaskGcid(), "bottom", f.isCloudTask, Math.floor(e / 1e3), Math.floor(t / 1024), Math.floor(n / 1024), Math.floor(o / 1024)).catch()
            })
        }

        e.init = function () {
            return i(this, void 0, void 0, function* () {
                d.default.attachEvent(n.stateChange, E), d.default.attachEvent(n.progessUpdate, O), d.default.attachEvent(I, _), d.default.attachEvent(l.XmpEvent.onStop, g), d.default.attachEvent(l.XmpEvent.onPlaying, T), d.default.attachEvent(n.afterFinishOneMin, D);
                let e = {[a.getState]: m, [a.getStateInfo]: S};
                o.client.registerFunctions(e), E(null, yield r.CommonNS.callVipPlugin("GetPackageTryState"), {tryNum: yield r.CommonNS.callVipPlugin("GetPackageTryPlayNum")}).catch()
            })
        }, e.getState = m, e.getStateInfo = S
    }(t.PlayTryNS || (t.PlayTryNS = {}))
}, , , , , , , , , , , function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(147), o = n.n(i);
    for (var r in i) ["default"].indexOf(r) < 0 && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, n, a) : o(t, n)) || a);
        return r > 3 && a && Object.defineProperty(t, n, a), a
    }, o = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(12), a = n(62), s = n(291), l = n(18), c = n(1), u = n(237), d = n(63), p = n(74), h = n(26),
        I = n(249), f = n(349), C = n(350), m = n(0), S = n(38), E = n(208), O = n(88), _ = n(23), g = n(91), T = n(92),
        D = n(90), y = n(31), N = n(213), v = (n(8), n(20)), P = n(42), F = n(352), A = n(135), b = n(50);
    r.Vue.use(_.default), r.Vue.use(D.default), r.Vue.use(g.default), r.Vue.use(T.default);
    const R = m.default.getLogger("float-window");
    var w;
    !function (e) {
        e[e.None = 0] = "None", e[e.Play = 1] = "Play", e[e.Pause = 2] = "Pause"
    }(w || (w = {}));
    let M = class extends r.Vue {
        constructor() {
            super(...arguments), this.argsObj = null, this.title = "", this.isPlayed = !0, this.isPaused = !1, this.canPause = !0, this.canPlay = !1, this.isFailed = !1, this.position = 0, this.durnation = 0, this.positionFormat = "", this.durnationFormat = "", this.progress = "", this.progressBtnPos = "", this.progressNum = 0, this.progressBtnDown = !1, this.fullscreen = !1, this.isMaximized = !1, this.inNail = !1, this.inNailPaused = !1, this.isYunBo = !1, this.isDownloadAndPlay = !1, this.isLocalPlay = !1, this.playSpeed = "1.0", this.showFloat = !0, this.volume = 0, this.canShowVipBtn = !1, this.vipBtnText = "", this.vipBtnIconClass = "", this.packageSpeed = "", this.packageVipSpeed = "", this.playTryStateInfo = null, this.restarting = !1, this.havePopupMenu = !1, this.lostCursorCount = 0, this.lastPoint = {}, this.mouseHover = !1, this.mouseHoverFloat = !1, this.forceLoading = !1, this.vipStruckState = w.None, this.currentDeviceName = "", this.isPlayLoad = !0, this.panFileId = "", this.curMediaId = -1, this.preOpenTimer = null, this.isSwitchClarity = !1, this.curTaskId = "", this.isDraging = !1, this.isSilent = !1, this.width = 1, this.height = 1, this.showBackIcon = !0, this.showPhoneTip = !1, this.hoverPhoneIcon = !1, this.hoveringItem = !1, this.dragProcessBeginPos = null, this.tryMenuState = null, this.lastTryVipSpeed = "", this.videoState = "", this.isZipPlay = !1, this.tryFinishClick = !1
        }

        getHotkeyStr(e) {
            let t = "";
            return e.ctrlKey && (t += "ctrl+"), e.shiftKey && (t += "shift+"), e.altKey && (t += "alt+"), 27 === e.keyCode ? t = "esc" : t += e.key.toLocaleLowerCase(), t
        }

        attachKeyDown() {
            window.addEventListener("keydown", e => {
                let t = this.getHotkeyStr(e);
                e.preventDefault(), c.client.callRemoteClientFunction(v.mainRendererContext, l.XmpPlayerFunction.fireKeyDown, t).catch()
            }), window.addEventListener("keyup", e => {
                e.preventDefault()
            }), window.addEventListener("mousewheel", e => {
                this.havePopupMenu && !this.$refs.floatPanel.showPopupMenu("volume") || this.volumeDelta(e.deltaY > 0 ? -5 : 5)
            })
        }

        created() {
            return o(this, void 0, void 0, function* () {
                let e = window.location.href;
                this.argsObj = a.ThunderUtil.getUrlArgs(e), c.client.attachServerEvent(I.VipMenuNS.SpeedMenuEvent.stateChange, this.speedMenuStateChange.bind(this)), y.CommonNS.callXmp("FireTryState"), this.currentDeviceName = yield y.CommonNS.callXmp(l.XmpPlayerFunction.getCurrentDLNADeviceName), yield this.updateAllUI(), this.initVipBtn().catch(), "1.0" !== this.playSpeed && y.CommonNS.callXmp("CheckVipMenu"), this.curMediaId = yield y.CommonNS.callXmp(l.XmpPlayerFunction.getCurrentMediaAttribute, u.XmpMediaAttr.MediaId), setInterval(() => {
                    this.updateBufferRange(), this.checkPlayType()
                }, 2e3), this.attachPlayerEvent(), this.checkCursorPos(), window.onkeydown = (e => {
                    this.onKeyDown(e.keyCode, e.ctrlKey)
                }), this.clientModule = c.client, this.attachKeyDown(), document.addEventListener("dragstart", e => {
                    e.preventDefault(), e.stopPropagation()
                }), this.curTaskId = yield y.CommonNS.callXmp(l.XmpPlayerFunction.getPlayingTaskId), this.width = yield y.CommonNS.callXmp(l.XmpPlayerFunction.getVideoWidth), this.height = yield y.CommonNS.callXmp(l.XmpPlayerFunction.getVideoHeight), this.showBackIcon = yield y.CommonNS.callXmp(l.XmpPlayerFunction.getCurrentMediaAttribute, u.XmpMediaAttr.ShowBackIcon), this.vipStruckState = yield y.CommonNS.callXmp("getVipStruckState"), this.attachZipEvent()
            })
        }

        onShowFloatChange() {
            this.isdwmEnabled || this.isCodec || this.isBuffering || y.CommonNS.callXmp(this.showFloat ? "showFloatWindow" : "hideFloatWindow")
        }

        onVolumeChange() {
            this.volume > 0 && this.isSilent ? y.CommonNS.callXmp(l.XmpPlayerFunction.switchSilent) : 0 !== this.volume || this.isSilent || y.CommonNS.callXmp(l.XmpPlayerFunction.switchSilent)
        }

        onPlaySpeedChange() {
            this.isError || I.VipMenuNS.isTrySpeedItem(this.playSpeed) && this.tryMenuState === I.VipMenuNS.SpeedMenuTryState.running || ("1.0" === this.playSpeed ? this.$refs.floatPanel.addMessageList("speed", "已切换到正常速度播放") : this.$refs.floatPanel.addMessageList("speed", "已切换到<span>" + this.playSpeed + "</span>倍速播放", "已切换到" + this.playSpeed + "倍速播放"))
        }

        speedMenuStateChange(e, t, n, i, r, a) {
            return o(this, void 0, void 0, function* () {
                this.tryMenuState = t;
                let e = "";
                switch (t) {
                    case I.VipMenuNS.SpeedMenuTryState.running:
                        if (I.VipMenuNS.isTrySpeedItem(this.playSpeed)) ; else if (i !== n) break;
                        if (i - n > 5) break;
                        i === n && O.VipStatNS.vipSpeedShow((yield y.CommonNS.isYunRecvTask()) ? "yp" : "dl", yield y.CommonNS.getCurrentTaskGcid(), yield y.CommonNS.getCurrentTaskUrl(), "text", r, yield I.VipMenuNS.getTrySpeedStatus(), !1), e = 60 === i ? 60 === n ? "开始试用<span>" + r + "</span>倍速播放，剩余试用时长<span>1分钟</span>" : "开始试用<span>" + r + "</span>倍速播放，剩余试用时长<span>" + n + "秒钟</span>" : "正在试用<span>" + r + "</span>倍速播放，剩余试用时长<span>" + n + "秒钟</span>", this.$refs.floatPanel.addMessageList("play_speed", e, e, 1e3, () => {
                        }, !0);
                        break;
                    case I.VipMenuNS.SpeedMenuTryState.finish:
                        O.VipStatNS.vipSpeedShow((yield y.CommonNS.isYunRecvTask()) ? "yp" : "dl", yield y.CommonNS.getCurrentTaskGcid(), yield y.CommonNS.getCurrentTaskUrl(), "text", r, yield I.VipMenuNS.getTrySpeedStatus(), !1), this.lastTryVipSpeed = r, e = "3.0" === r ? "<span>" + r + '</span>倍速播放试用结束，继续倍速播放请<a href="javascript:;" id="speedOpenVip">开通超会</a>' : "<span>" + r + '</span>倍速播放试用结束，继续倍速播放请<a href="javascript:;" id="speedOpenVip">开通会员</a>', this.$refs.floatPanel.addMessageList("play_speed", e, e, 1e3 * n, () => {
                            let e = document.getElementById("speedOpenVip");
                            e && e.removeEventListener("click", this.speedOpenVip)
                        }, !0), this.$once("hook:updated", () => {
                            this.$nextTick(() => {
                                this.checkPlaySpeed().catch();
                                let e = document.getElementById("speedOpenVip");
                                e && e.addEventListener("click", this.speedOpenVip)
                            })
                        })
                }
            })
        }

        speedOpenVip() {
            return o(this, void 0, void 0, function* () {
                O.VipStatNS.vipSpeedClick((yield y.CommonNS.isYunRecvTask()) ? "yp" : "dl", yield y.CommonNS.getCurrentTaskGcid(), yield y.CommonNS.getCurrentTaskUrl(), "text", this.playSpeed, "3.0" === this.lastTryVipSpeed ? "open_super" : "open_vip", yield I.VipMenuNS.getTrySpeedStatus());
                let e = "https://pay.xunlei.com/pay.html?referfrom=v_pc_xl11_hytq_play_speed_option";
                "3.0" === this.lastTryVipSpeed ? e += "&aidfrom=try_text_super&default_tab=supervip" : e += "&aidfrom=try_text_vip", y.CommonNS.openPayVipUrl(e)
            })
        }

        onVideoStateChange(e) {
            this.videoState = e, this.isClose && y.CommonNS.callXmp("hideFloatWindow")
        }

        get isLoading() {
            return "loading" === this.videoState
        }

        get isError() {
            return "error" === this.videoState
        }

        get isPlaying() {
            return "playing" === this.videoState
        }

        get isCodec() {
            return "codec" === this.videoState
        }

        get isClose() {
            return "close" === this.videoState
        }

        get isBuffering() {
            return "buffering" === this.videoState
        }

        isPointInElement(e, t, n) {
            let i = !1, o = e.x / n - screenX, r = e.y / n - screenY;
            {
                let e = document.getElementById(t),
                    n = {x: 0, y: e ? e.offsetTop : 0, width: innerWidth, height: e ? e.clientHeight : innerHeight};
                "player_footer" === t && (n.y -= 6, n.height += 6), o >= n.x && o <= n.width && r >= n.y && r <= n.y + n.height && (i = !0)
            }
            return i
        }

        checkCursorPos() {
            return o(this, void 0, void 0, function* () {
                let e = yield P.rpc.getCurrentWindow(),
                    t = yield h.ThunderHelper.getBrowserWindowHandle(yield e.getParentWindow());
                setInterval(() => {
                    let e = h.ThunderHelper.getCursorPos();
                    do {
                        if (this.isCodec) {
                            this.showFloat = !1, this.lostCursorCount = 0;
                            break
                        }
                        if (this.showPhoneTip || this.hoverPhoneIcon || this.hoveringItem) {
                            this.showFloat = !0, this.lostCursorCount = 0;
                            break
                        }
                        if (this.playTryStateInfo && this.playTryStateInfo.state === A.PlayTryNS.State.finish) {
                            this.showFloat = !0, this.lostCursorCount = 0;
                            break
                        }
                        if (this.isDraging) {
                            this.showFloat = !0, this.lostCursorCount = 0;
                            break
                        }
                        if (this.havePopupMenu && this.mouseHoverFloat) {
                            this.showFloat = !0, this.lostCursorCount = 0;
                            break
                        }
                        if (this.lostCursorCount >= 29) {
                            let n = 1;
                            if (n = h.ThunderHelper.getDPIAwareSupport() ? h.ThunderHelper.getMonitorDPIFactor(t) : h.ThunderHelper.getSysDPIFactor(), this.isPointInElement(e, "player_header", n) || !this.isError && this.isPointInElement(e, "player_footer", n)) {
                                this.showFloat = !0, this.lostCursorCount = 0;
                                break
                            }
                        }
                        if (0 === this.width && this.isPlaying || this.isError) {
                            let n = 1;
                            if (n = h.ThunderHelper.getDPIAwareSupport() ? h.ThunderHelper.getMonitorDPIFactor(t) : h.ThunderHelper.getSysDPIFactor(), this.isPointInElement(e, "", n)) {
                                if (this.lastPoint.x === e.x && this.lastPoint.y === e.y) {
                                    this.lostCursorCount++, this.lostCursorCount >= 30 && this.showFloat && (this.showFloat = !1);
                                    break
                                }
                                this.showFloat = !0, this.lostCursorCount = 0;
                                break
                            }
                        }
                        if (this.mouseHover) {
                            if (this.lastPoint.x === e.x && this.lastPoint.y === e.y) {
                                this.lostCursorCount++, this.lostCursorCount >= 30 && this.showFloat && (this.showFloat = !1);
                                break
                            }
                            this.showFloat = !0, this.lostCursorCount = 0;
                            break
                        }
                        this.lostCursorCount++, this.lostCursorCount >= 30 && this.showFloat && (this.showFloat = !1)
                    } while (0);
                    this.lastPoint = e
                }, 100)
            })
        }

        mouseEnterFloat() {
            this.mouseHoverFloat = !0
        }

        mouseLeaveFloat() {
            this.mouseHoverFloat = !1
        }

        get isEmbed() {
            return "embed" === this.argsObj.show
        }

        get isAlone() {
            return "alone" === this.argsObj.show
        }

        get isRestart() {
            return "1" === this.argsObj.restart
        }

        get isdwmEnabled() {
            return "true" === this.argsObj.dwmEnabled
        }

        attachPlayerEvent() {
            return o(this, void 0, void 0, function* () {
                c.client.attachServerEvent(p.XmpEvent.onForceLoadingState, (e, ...t) => {
                    this.forceLoading = t[0]
                }), c.client.attachServerEvent(p.XmpEvent.onVipStruckPlayState, (e, ...t) => {
                    this.vipStruckState = t[0], this.updatePlayState()
                }), c.client.attachServerEvent(p.XmpEvent.onShowFloatWindow, (e, ...t) => {
                    this.showFloat = !0, this.lostCursorCount = 0
                }), c.client.attachServerEvent(p.XmpEvent.onOpenSucceeded, () => o(this, void 0, void 0, function* () {
                    I.VipMenuNS.checkVipMenu(), this.updateAllUI(), this.isSwitchClarity && this.$refs.floatPanel.addMessageList("clarity", "切换成功!"), this.curTaskId = yield y.CommonNS.callXmp(l.XmpPlayerFunction.getPlayingTaskId), this.width = yield y.CommonNS.callXmp(l.XmpPlayerFunction.getVideoWidth), this.height = yield y.CommonNS.callXmp(l.XmpPlayerFunction.getVideoHeight), this.showBackIcon = yield y.CommonNS.callXmp(l.XmpPlayerFunction.getCurrentMediaAttribute, u.XmpMediaAttr.ShowBackIcon)
                })), c.client.attachServerEvent(p.XmpEvent.onPreOpen, (e, ...t) => {
                    t && t.length > 2 && (this.isSwitchClarity = t[1])
                }), c.client.attachServerEvent(p.XmpEvent.onStateChanged, (e, t, n) => o(this, void 0, void 0, function* () {
                    this.updatePlayState(n), this.updateVipBtn().catch()
                })), c.client.attachServerEvent(p.XmpEvent.onTimeDesChange, (e, t, n, i) => {
                    this.curMediaId = t, this.updatePosition(n)
                }), c.client.attachServerEvent(p.XmpEvent.onPositionChanged, (e, t, n, i, o, r) => {
                    this.curMediaId = t, this.isFailed = !1, this.updatePosition(n)
                }), c.client.attachServerEvent(p.XmpEvent.onError, (e, t, n) => o(this, void 0, void 0, function* () {
                    this.isFailed = !0, this.updateAllUI()
                })), c.client.attachServerEvent(p.XmpEvent.onPlayCompleted, (...e) => {
                    this.isFailed = !1, this.updateAllUI()
                }), c.client.attachServerEvent(p.XmpEvent.onStop, (...e) => {
                    this.isFailed = !1, this.updateAllUI()
                }), c.client.attachServerEvent(p.XmpEvent.onMaxmized, () => {
                    this.isMaximized = !0
                }), c.client.attachServerEvent(p.XmpEvent.onUnMaxmized, () => {
                    this.isMaximized = !1
                }), c.client.attachServerEvent(p.XmpEvent.onSetWindowTopMost, () => {
                    this.inNail = !0
                }), c.client.attachServerEvent(p.XmpEvent.onCancelWindowTopMost, () => {
                    this.inNail = !1
                }), c.client.attachServerEvent(p.ModeChangeEvent.onXmpEnterFullScreen, () => {
                    this.fullscreen = !0
                }), c.client.attachServerEvent(p.ModeChangeEvent.onXmpLeaveFullScreen, () => {
                    this.fullscreen = !1
                }), c.client.attachServerEvent(p.XmpEvent.onVolumeChange, (e, t) => {
                    this.volume = t
                }), c.client.attachServerEvent(p.XmpEvent.onSetConfig, (e, t, n) => {
                    t === N.APlayerConfigId.CONFIGID_SOUNDSILENT && (this.isSilent = "1" === n)
                }), c.client.attachServerEvent(p.XmpEvent.onWindowMessage, (e, t, n, i) => {
                    switch (t) {
                        case 512:
                            this.mouseHover = !0;
                            break;
                        case 675:
                            this.mouseHover = !1;
                            break;
                        case 513:
                        case 514:
                        case 515:
                        case 256:
                            break;
                        case 123:
                            0
                    }
                }), c.client.attachServerEvent(p.XmpEvent.onSetCurrentDevice, (e, t, n, i) => o(this, void 0, void 0, function* () {
                    this.curMediaId = i, "" === n ? setTimeout(() => {
                        this.currentDeviceName = n
                    }, 500) : this.currentDeviceName = n
                }))
            })
        }

        onKeyDown(e, t) {
        }

        clickPlay() {
            this.forceLoading ? y.CommonNS.callXmp("VipStruckPlay") : y.CommonNS.callXmp(l.XmpPlayerFunction.play), this.trackPlayerClick("play")
        }

        clickPause() {
            return o(this, void 0, void 0, function* () {
                this.forceLoading ? y.CommonNS.callXmp("VipStruckPause") : y.CommonNS.callXmp(l.XmpPlayerFunction.pause), this.trackPlayerClick("pause")
            })
        }

        trackPlayerClick(e) {
            E.StatUtilitiesNS.trackPlayerClick(e, this.isEmbed)
        }

        changeView(e) {
            switch (e) {
                case"alone":
                    y.CommonNS.callXmp(l.XmpPlayerFunction.setXmpCurrentMode, d.XmpMode.INDEPENDENT_MODE), this.trackPlayerClick("change_to_independent");
                    break;
                case"embed":
                    if (!this.showBackIcon) break;
                    y.CommonNS.callXmp(l.XmpPlayerFunction.setXmpCurrentMode, d.XmpMode.EMBED_MODE, "Float"), this.trackPlayerClick("change_to_embed");
                    break;
                case"fullscreen":
                    y.CommonNS.callXmp(l.XmpPlayerFunction.enterFullScreen), this.trackPlayerClick("full_screen");
                    break;
                case"exit-fullscreen":
                    y.CommonNS.callXmp(l.XmpPlayerFunction.leaveFullScreen), this.trackPlayerClick("exit_full_screen")
            }
        }

        onDoubleClickHead() {
            this.fullscreen ? y.CommonNS.callXmp(l.XmpPlayerFunction.leaveFullScreen) : this.isMaximized ? y.CommonNS.callXmp(l.XmpPlayerFunction.unmaximize) : y.CommonNS.callXmp(l.XmpPlayerFunction.maximize)
        }

        exit() {
            c.client.callRemoteClientFunction(v.mainRendererContext, l.XmpPlayerFunction.recordStat, "recEndType", "close_client").catch(), y.CommonNS.callXmp("hideFloatWindow"), y.CommonNS.callXmp(l.XmpPlayerFunction.close), this.trackPlayerClick("close")
        }

        maximize() {
            y.CommonNS.callXmp(l.XmpPlayerFunction.maximize), this.trackPlayerClick("maximize")
        }

        unmaximize() {
            y.CommonNS.callXmp(l.XmpPlayerFunction.unmaximize), this.trackPlayerClick("recovery_size")
        }

        minimize() {
            y.CommonNS.callXmp(l.XmpPlayerFunction.minmized), this.trackPlayerClick("minimize")
        }

        nail() {
            y.CommonNS.callXmp(l.XmpPlayerFunction.setWindowTopMode), this.trackPlayerClick("set_top")
        }

        nonail() {
            y.CommonNS.callXmp(l.XmpPlayerFunction.calcelWindowTopMode), this.trackPlayerClick("cancel_top"), this.inNailPaused = !1
        }

        clickProgress(e) {
            let t = this.position;
            this.updatePosByMouse(e), E.StatUtilitiesNS.trackDragSeekBar("drag_seek_bar", Math.floor(t / 1e3), Math.floor(this.position / 1e3), this.isEmbed).catch()
        }

        onDragProgress(e) {
            this.updatePosByMouse(e)
        }

        onDragBegin(e) {
            return o(this, void 0, void 0, function* () {
                "progress" === e && (E.StatUtilitiesNS.trackDragSeekBar("drag_seek_bar", Math.floor(this.position / 1e3), Math.floor(this.position / 1e3), this.isEmbed).catch(), this.dragProcessBeginPos = this.position)
            })
        }

        onDragEnd(e) {
            return o(this, void 0, void 0, function* () {
                "progress" === e && this.dragProcessBeginPos && (E.StatUtilitiesNS.trackDragSeekBar("drag_seek_bar_end", Math.floor(this.dragProcessBeginPos / 1e3), Math.floor(this.position / 1e3), this.isEmbed).catch(), this.dragProcessBeginPos = null)
            })
        }

        updatePosByMouse(e) {
            if (!e) return;
            let t = e.view.innerWidth, n = e.clientX / t * this.durnation;
            n = Math.min(n, this.durnation), n = Math.max(0, n), this.updatePosition(n), R.information("updatePosition", n, this.durnation, t, e.clientX, this.progress, this.progressBtnPos), y.CommonNS.callXmp(l.XmpPlayerFunction.setPosition, Math.floor(n))
        }

        positionDelta(e) {
            let t = this.position + e;
            t = Math.min(t, this.durnation), t = Math.max(0, t), this.updatePosition(t), y.CommonNS.callXmp(l.XmpPlayerFunction.setPosition, Math.floor(t))
        }

        onDragVolume(e, t) {
            this.updateVolumeByMouse(e, t)
        }

        clickVolume(e, t) {
            this.updateVolumeByMouse(e, t), this.trackPlayerClick("adjustvoice")
        }

        volumeDelta(e) {
            return o(this, void 0, void 0, function* () {
                yield this.checkVolume();
                let t = this.volume + e;
                t = Math.max(0, t), t = Math.min(1e3, t), this.volume = t, y.CommonNS.callXmp(l.XmpPlayerFunction.setVolume, Math.floor(t))
            })
        }

        updateVolumeByMouse(e, t) {
            if (!e) return;
            let n = t.height, i = 100 - 100 * (e.clientY - t.y) / n;
            i = Math.min(i, 100), i = Math.max(0, i), R.information("updateVolumeByMouse", i), this.volume = i, y.CommonNS.callXmp(l.XmpPlayerFunction.setVolume, Math.floor(i))
        }

        onSwitchSilent() {
            this.isSilent ? this.trackPlayerClick("openvoice") : this.trackPlayerClick("closevoice"), y.CommonNS.callXmp(l.XmpPlayerFunction.switchSilent)
        }

        updatePlayState(e) {
            return o(this, void 0, void 0, function* () {
                switch (e || (yield y.CommonNS.callXmp(l.XmpPlayerFunction.getState))) {
                    case u.XmpMediaState.Pausing:
                        this.isPlayed = !0, this.isPaused = !1, this.canPause = !1, this.canPlay = !1;
                        break;
                    case u.XmpMediaState.Paused:
                        this.isPlayed = !1, this.isPaused = !0, this.canPause = !1, this.canPlay = !0, (yield y.CommonNS.callXmp(l.XmpPlayerFunction.getXmpCurrentMode)) === d.XmpMode.INDEPENDENT_MODE && this.inNail && (this.inNailPaused = !0, y.CommonNS.callXmp(l.XmpPlayerFunction.calcelWindowTopMode));
                        break;
                    case u.XmpMediaState.Playing:
                        this.isPlayed = !1, this.isPaused = !0, this.canPause = !1, this.canPlay = !1;
                        break;
                    case u.XmpMediaState.Play:
                        this.isPlayed = !0, this.isPaused = !1, this.canPause = !0, this.canPlay = !1, (yield y.CommonNS.callXmp(l.XmpPlayerFunction.getXmpCurrentMode)) === d.XmpMode.INDEPENDENT_MODE && this.inNailPaused && (this.inNailPaused = !1, y.CommonNS.callXmp(l.XmpPlayerFunction.setWindowTopMode));
                        break;
                    default:
                        this.isPlayed = !0, this.isPaused = !1, this.canPause = !1, this.canPlay = !1
                }
                switch (this.vipStruckState) {
                    case w.None:
                        break;
                    case w.Pause:
                        this.isPlayed = !1, this.isPaused = !0, this.canPause = !1, this.canPlay = !0;
                        break;
                    case w.Play:
                        this.isPlayed = !0, this.isPaused = !1, this.canPause = !0, this.canPlay = !1
                }
            })
        }

        updatePosition(e) {
            return o(this, void 0, void 0, function* () {
                this.position = e || (yield y.CommonNS.callXmp(l.XmpPlayerFunction.getPosition)), this.positionFormat = this.translateNumberFormat(this.position), this.progress = `width: ${(100 * this.position / Math.max(1, this.durnation)).toFixed(2)}%;`, this.progressBtnPos = `left: ${(100 * this.position / Math.max(this.durnation)).toFixed(2)}%;`, this.progressNum = parseFloat((100 * this.position / Math.max(this.durnation)).toFixed(2))
            })
        }

        updateDurnation() {
            return o(this, void 0, void 0, function* () {
                this.durnation = yield y.CommonNS.callXmp(l.XmpPlayerFunction.getDuration), this.durnationFormat = this.translateNumberFormat(this.durnation)
            })
        }

        translateNumberFormat(e) {
            e = Math.floor(e / 1e3);
            let t = Math.floor(e / 3600), n = Math.floor(e / 60) % 60, i = Math.floor(e % 60), o = "";
            return o = t < 10 ? "0" + t + ":" : t + ":", n < 10 && (o += "0"), o += n + ":", i < 10 && (o += "0"), o += i
        }

        updateBufferRange() {
            return o(this, void 0, void 0, function* () {
                this.vipStruckState = yield y.CommonNS.callXmp("getVipStruckState"), this.updateDurnation(), this.updatePlayState();
                let e = yield y.CommonNS.callXmp(l.XmpPlayerFunction.getBufferRange),
                    t = document.getElementById("bufferRangleList"),
                    n = document.getElementById("bufferRangleListContiner");
                if (t && n.removeChild(t), e) try {
                    let i = JSON.parse(e);
                    if (i.rangelist && i.rangelist.length > 0) {
                        (t = document.createElement("div")).setAttribute("id", "bufferRangleList");
                        let e = document.getElementById("progress");
                        if (!e) return;
                        let o = parseInt(i.filesize, 10);
                        i.rangelist.forEach(n => {
                            let i = parseInt(n.spos, 10), r = parseInt(n.slen, 10), a = Math.floor(100 * i / o),
                                s = Math.floor(e.clientWidth * r / o), l = document.createElement("div");
                            l.className = "xmpc-progress__buffer", l.setAttribute("style", `left: ${a}%; width: ${s}px; `), t.appendChild(l)
                        }), n.appendChild(t)
                    }
                } catch (e) {
                }
            })
        }

        checkPlayType() {
            return o(this, void 0, void 0, function* () {
                if (this.isYunBo = yield y.CommonNS.isYunBo(), this.isDownloadAndPlay = yield y.CommonNS.isPlayAndDownload(), this.isLocalPlay = yield y.CommonNS.isLocalPlay(), this.isYunBo) {
                    let e = yield y.CommonNS.callXmp(l.XmpPlayerFunction.getCurrentMediaAttribute, u.XmpMediaAttr.PanFileId);
                    this.panFileId = e
                } else this.panFileId = ""
            })
        }

        checkPlaySpeed() {
            return o(this, void 0, void 0, function* () {
                let e = yield y.CommonNS.callXmp(l.XmpPlayerFunction.getPlaySpeed), t = parseInt(e, 10);
                this.playSpeed = t % 10 == 0 ? `${(t / 100).toFixed(1)}` : `${(t / 100).toFixed(2)}`
            })
        }

        changeSpeed(e) {
            return o(this, void 0, void 0, function* () {
                this.checkPlaySpeed()
            })
        }

        checkTitle() {
            return o(this, void 0, void 0, function* () {
                this.isZipPlay = yield y.CommonNS.isZipPlay(), R.information("isZipPlay", this.isZipPlay), this.title = yield y.CommonNS.callXmp(l.XmpPlayerFunction.getCurrentMediaAttribute, u.XmpMediaAttr.Name)
            })
        }

        attachZipEvent() {
            return o(this, void 0, void 0, function* () {
                this.isZipPlay = yield y.CommonNS.isZipPlay(), R.information("isZipPlay", this.isZipPlay), c.client.attachServerEvent(b.ZipEvent.indexProgress, (e, ...t) => o(this, void 0, void 0, function* () {
                    this.title = t[2]
                }))
            })
        }

        checkVolume() {
            return o(this, void 0, void 0, function* () {
                this.volume = yield y.CommonNS.callXmp(l.XmpPlayerFunction.getVolume), this.isSilent = yield y.CommonNS.callXmp(l.XmpPlayerFunction.isSilent)
            })
        }

        updateAllUI() {
            return o(this, void 0, void 0, function* () {
                yield this.checkPlayType(), yield this.checkPlaySpeed(), yield this.checkTitle(), yield this.checkVolume(), yield this.updatePlayState(), yield this.updateDurnation(), yield this.updatePosition()
            })
        }

        setPopupMenuRect(e) {
            return o(this, void 0, void 0, function* () {
                let t = [];
                e.forEach((e, n) => {
                    t.push(e)
                }), this.havePopupMenu = t.length > 0, yield y.CommonNS.callXmp("setCombineFloatWindowRgn", t)
            })
        }

        updateVipBtn() {
            return o(this, void 0, void 0, function* () {
                switch (this.canShowVipBtn = yield f.VipBtnNS.canShowBtn(), this.vipBtnText = yield f.VipBtnNS.getBtnText(Number(this.curTaskId)), this.playTryStateInfo = yield A.PlayTryNS.getStateInfo(), this.playTryStateInfo.state) {
                    case A.PlayTryNS.State.commiting:
                    case A.PlayTryNS.State.runing:
                    case A.PlayTryNS.State.finish:
                    case A.PlayTryNS.State.over:
                        this.vipBtnIconClass = "xmpc-icon-vip";
                        break;
                    default:
                        this.vipBtnIconClass = "xmpc-icon-speed"
                }
                if (this.playTryStateInfo.state === A.PlayTryNS.State.runing ? (this.packageSpeed = (this.playTryStateInfo.speed / 1024).toFixed(1) + "MB/s ", this.packageVipSpeed = "+" + (this.playTryStateInfo.vipspeed / 1024).toFixed(1) + "MB/s ") : (this.packageSpeed = "", this.packageVipSpeed = ""), this.playTryStateInfo.state === A.PlayTryNS.State.commiting || this.playTryStateInfo.state === A.PlayTryNS.State.runing) {
                    let e = "", t = "";
                    t = this.playTryStateInfo.allTick - this.playTryStateInfo.useTick == 60 ? "1分钟" : Math.floor(this.playTryStateInfo.allTick - this.playTryStateInfo.useTick) + "秒钟", e = this.isdwmEnabled ? "开始加速试用，剩余试用时长<span>" + t + "</span>" : "开始加速试用，剩余试用时长" + t, this.playTryStateInfo.useTick < 5 && this.$refs.floatPanel.addMessageList("package_try", e, e, 500, () => {
                    }, !0), this.tryFinishClick = !1
                } else if (this.playTryStateInfo.state === A.PlayTryNS.State.finish) do {
                    if (this.tryFinishClick) break;
                    let e = (new Date).getTime();
                    if (e - this.playTryStateInfo.stateChangeTick > 1e4) {
                        R.information("tick over", e, this.playTryStateInfo.stateChangeTick);
                        break
                    }
                    let t = e - this.playTryStateInfo.stateChangeTick;
                    this.lostCursorCount = 0, this.showFloat = !0;
                    let n = this.playTryStateInfo.beforeSpeed, i = this.playTryStateInfo.tryingSpeed, o = i - n;
                    if (i <= 0) {
                        R.information("vipSpeed is less than 0");
                        break
                    }
                    let r = this.playTryStateInfo.promotePercent;
                    if (n > 0 && 100 * o / n < r) {
                        R.information("platinumPromote or vipPromote is less than", r);
                        break
                    }
                    let a = "100%";
                    n && i && (a = Math.min(100 * (i / n - 1), 2e3).toFixed(0) + "%");
                    let s = "";
                    s = this.isdwmEnabled ? "加速试用结束，速度提升<span>" + a + '</span>，继续加速请<a href="javascript:;" id="packageTryOpenVip">开通会员</a><i class="td-icon-close" id="closePackTry"/>' : "加速试用结束，速度提升" + a + "，继续加速请开通会员", this.$refs.floatPanel.addMessageList("package_try", s, s, 1e4 - t, () => {
                        let e = document.getElementById("packageTryOpenVip");
                        e && e.removeEventListener("click", this.packageTryOpenVip), (e = document.getElementById("closePackTry")) && e.removeEventListener("click", this.closePackTry)
                    }, !0), this.$once("hook:updated", () => {
                        this.$nextTick(() => {
                            let e = document.getElementById("packageTryOpenVip");
                            e && e.addEventListener("click", this.packageTryOpenVip), (e = document.getElementById("closePackTry")) && e.addEventListener("click", this.closePackTry)
                        })
                    })
                } while (0)
            })
        }

        packageTryOpenVip() {
            return o(this, void 0, void 0, function* () {
                this.tryFinishClick = !0;
                y.CommonNS.openPayVipUrl("https://pay.xunlei.com/pay.html?referfrom=v_pc_xl11_hytq_bxbb_hyjs_sy&aidfrom=tips_after"), O.VipStatNS.playTryFinishTipsClick(yield y.CommonNS.getCurrentTaskGcid(), this.playTryStateInfo.isCloudTask, "open", Math.floor(this.durnation / 1e3), Math.floor(this.playTryStateInfo.beforeSpeed / 1024), Math.floor(this.playTryStateInfo.tryingSpeed / 1024)), this.$refs.floatPanel.deleteMessageListItem("package_try", !0)
            })
        }

        closePackTry() {
            return o(this, void 0, void 0, function* () {
                this.tryFinishClick = !0, this.$refs.floatPanel.deleteMessageListItem("package_try", !0), O.VipStatNS.playTryFinishTipsClick(yield y.CommonNS.getCurrentTaskGcid(), this.playTryStateInfo.isCloudTask, "close", Math.floor(this.durnation / 1e3), Math.floor(this.playTryStateInfo.beforeSpeed / 1024), Math.floor(this.playTryStateInfo.tryingSpeed / 1024))
            })
        }

        initVipBtn() {
            return o(this, void 0, void 0, function* () {
                this.restarting = this.isRestart, this.updateVipBtn().catch(), this.canShowVipBtn || (this.restarting = !1), S.default.addListener(S.UserEventNS.authorityChanged, () => o(this, void 0, void 0, function* () {
                    this.updateVipBtn(), setTimeout(() => {
                        this.updateAllUI()
                    }, 500)
                })), c.client.attachServerEvent(A.PlayTryNS.FireEvent.stateChange, () => o(this, void 0, void 0, function* () {
                    yield this.updateVipBtn(), this.playTryStateInfo.state === A.PlayTryNS.State.commiting ? O.VipStatNS.playTryShowBeginTips(yield y.CommonNS.getCurrentTaskGcid(), this.playTryStateInfo.isCloudTask, Math.floor(this.durnation / 1e3), Math.floor(this.playTryStateInfo.beforeSpeed / 1024)) : this.playTryStateInfo.state === A.PlayTryNS.State.finish && O.VipStatNS.playTryShowFinishTips(yield y.CommonNS.getCurrentTaskGcid(), this.playTryStateInfo.isCloudTask, Math.floor(this.durnation / 1e3), Math.floor(this.playTryStateInfo.beforeSpeed / 1024), Math.floor(this.playTryStateInfo.tryingSpeed / 1024))
                })), c.client.attachServerEvent("OnTaskStatusChanged", (e, t) => o(this, void 0, void 0, function* () {
                    (yield y.CommonNS.getCurrentTaskStatus()) === F.DownloadKernel.TaskStatus.Succeeded && this.updateVipBtn().catch()
                }))
            })
        }

        clickVipBtn() {
            return o(this, void 0, void 0, function* () {
                this.isYunBo && E.StatUtilitiesNS.trackOpenVipBtn(yield y.CommonNS.getStatPlayfrom(), this.isEmbed, S.default.vipType, "fixed_btn", !1), f.VipBtnNS.clickBtn(this.isYunBo, Number(this.curTaskId))
            })
        }

        trackOpenVipBtnEx(e) {
            return setTimeout(() => o(this, void 0, void 0, function* () {
                E.StatUtilitiesNS.trackOpenVipBtn(yield y.CommonNS.getStatPlayfrom(), this.isEmbed, S.default.vipType, "fixed_btn", !1)
            }), 0), !0
        }

        onDragStateChanged(e) {
            this.isDraging = e
        }

        onShowPopupMenu(e) {
            return o(this, void 0, void 0, function* () {
                "speed" === e && (O.VipStatNS.playSpeedShow(), this.isYunBo || O.VipStatNS.vipSpeedShow((yield y.CommonNS.isYunRecvTask()) ? "yp" : "dl", yield y.CommonNS.getCurrentTaskGcid(), yield y.CommonNS.getCurrentTaskUrl(), "options", this.playSpeed, yield I.VipMenuNS.getTrySpeedStatus()))
            })
        }

        onShowPhoneTip(e) {
            this.showPhoneTip = e
        }

        onHoverPhoneIcon(e) {
            this.hoverPhoneIcon = e
        }

        onHoverItem(e) {
            this.hoveringItem = !0, R.information("onHoverItem", e)
        }

        onLeaveItem(e) {
            this.hoveringItem = !1, R.information("onLeaveItem", e)
        }
    };
    i([r.Watch("showFloat")], M.prototype, "onShowFloatChange", null), i([r.Watch("volume")], M.prototype, "onVolumeChange", null), i([r.Watch("playSpeed")], M.prototype, "onPlaySpeedChange", null), M = i([r.Component({
        components: {
            Float: s.default,
            DLNAView: C.default
        }
    })], M), t.default = M
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(149), o = n.n(i);
    for (var r in i) ["default"].indexOf(r) < 0 && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, n, a) : o(t, n)) || a);
        return r > 3 && a && Object.defineProperty(t, n, a), a
    }, o = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(5), a = n(12), s = n(1), l = n(18), c = n(74), u = n(292),
        d = n(0).default.getLogger("float-window-float"), p = n(237), h = n(31), I = n(208), f = n(42), C = n(26),
        m = n(38), S = n(88), E = n(20), O = n(295), _ = n(63), g = n(300), T = n(41), D = n(342), y = n(346),
        N = n(121), v = n(135), P = n(347), F = n(348);
    let A = class extends N.MenuHandleVue {
        constructor() {
            super(...arguments), this.isSwitchXmpMode = !1, this.clarityList = [], this.originClarity = "", this.currentClarity = "流畅", this.currentClarityIndex = -1, this.isMusic = !1, this.hoverProgressNum = 0, this.hoverPositionFormat = "", this.isAvailThrottle = !0, this.showTipTimer = null, this.pollShowTipTimer = null, this.imgList = [P, F], this.switchCookie = -1, this.messageList = new Map, this.vipMessageList = new Map, this.drag = !1, this.dragEmitTimer = null, this.pointerEvent = null, this.lastEvent = null, this.leaveBtnTimer = null, this.thisWindow = null, this.hwndMain = 0, this.hwndThis = 0, this.pointerHead = null, this.rectWnd = null, this.videoState = "", this.xmpMode = null
        }

        onCanshowVipBtnChanged() {
            this.canShowVipBtn
        }

        onCurTaskIdChanged() {
            this.canShowVipBtn
        }

        onVipBtnTextChanged() {
            this.canShowVipBtn && this.trackShowVipBtn().catch()
        }

        onShowPhoneTipChange() {
            this.$emit("show-phone-tip", this.showPhoneTip)
        }

        initClarity() {
            return o(this, void 0, void 0, function* () {
                if (this.panFileId) {
                    if (this.clarityList = yield s.client.callServerFunction("GetRationInfos", this.panFileId), !this.clarityList) return;
                    this.filterclarityList.length > 0 && (this.originClarity = this.filterclarityList[0].rationName.slice(0, 2) || this.filterclarityList[0].name || "原画");
                    let e = yield h.CommonNS.callXmp(l.XmpPlayerFunction.getCurrentMediaAttribute, p.XmpMediaAttr.PlayUrl);
                    for (let t = 0; t < this.filterclarityList.length; t++) {
                        let n = this.filterclarityList[t];
                        n.isOrigin && (this.originClarity = n.rationName.slice(0, 2) || n.name || ""), e === n.url && (this.currentClarity = n.rationName.slice(0, 2) || n.name || "原画", this.currentClarityIndex = t, h.CommonNS.callXmp(l.XmpPlayerFunction.setMediaAttribute, this.curMediaId, p.XmpMediaAttr.Resolution, n.isOrigin ? "" : n.name), h.CommonNS.callXmp(l.XmpPlayerFunction.setMediaAttribute, this.curMediaId, p.XmpMediaAttr.TransGcid, n.ratioId || ""))
                    }
                    1 === this.clarityList.length && !0 === this.clarityList[0].isOrigin || 0 === this.clarityList.length ? h.CommonNS.callXmp(l.XmpPlayerFunction.setMediaAttribute, this.curMediaId, p.XmpMediaAttr.transcode, 0) : h.CommonNS.callXmp(l.XmpPlayerFunction.setMediaAttribute, this.curMediaId, p.XmpMediaAttr.transcode, 1)
                } else this.clarityList = [], this.originClarity = "", this.currentClarity = "流畅"
            })
        }

        onPausedChange(e) {
            return o(this, void 0, void 0, function* () {
                if (e) {
                    if (yield this.createQCode(p.CodeSoure.Pause), this.codeImgPath && "" !== this.codeImgPath) if (this.isPaused) {
                        this.showCodeDialog = !0;
                        let e = "gcid=" + (yield h.CommonNS.callXmp(l.XmpPlayerFunction.getCurrentMediaAttribute, p.XmpMediaAttr.Gcid));
                        yield s.client.callServerFunction("TrackEvent", "core_event", "player_guid_yun_add_sticker_show", "", 0, 0, 0, 0, e), d.information("player_guid_yun_add_sticker_show extData", e)
                    } else this.showCodeDialog = !1
                } else this.showCodeDialog = !1
            })
        }

        onOpenSuccessd() {
            return o(this, void 0, void 0, function* () {
                0 === (yield h.CommonNS.callXmp(l.XmpPlayerFunction.getVideoWidth)) || 0 === (yield h.CommonNS.callXmp(l.XmpPlayerFunction.getVideoHeight)) ? this.isMusic = !0 : this.isMusic = !1, this.initClarity();
                let e = yield h.CommonNS.callXmp(l.XmpPlayerFunction.getPosition),
                    t = yield h.CommonNS.callXmp(l.XmpPlayerFunction.getLastMediaId);
                if (e >= 2e3 && !this.isSwitchClarity && t !== Number.MIN_SAFE_INTEGER) {
                    let t = this.translateNumberFormat(e);
                    this.addMessageList("position", `上次播放至${t}，点击<a id="resetPosition" href="javascript:;">从头播放</a><i class="td-icon-close" id="closePosition"></i>`, `上次播放至${t}`, 3e3, () => {
                        let e = document.getElementById("resetPosition");
                        e && e.removeEventListener("click", this.resetPosition);
                        let t = document.getElementById("closePosition");
                        t && t.removeEventListener("click", this.closePositionItem)
                    }), this.$once("hook:updated", () => {
                        this.$nextTick(() => {
                            let e = document.getElementById("resetPosition");
                            e && e.addEventListener("click", this.resetPosition);
                            let t = document.getElementById("closePosition");
                            t && t.addEventListener("click", this.closePositionItem)
                        })
                    }), s.client.callServerFunction("TrackEvent", "core_event", "player_last_play_position_bubble_show", "", 0, 0, 0, 0).catch()
                }
            })
        }

        resetPosition() {
            d.information("reset position"), h.CommonNS.callXmp(l.XmpPlayerFunction.setPosition, 0), this.deleteMessageListItem("position"), s.client.callServerFunction("TrackEvent", "core_event", "player_last_play_position_bubble_click", "", 0, 0, 0, 0, "clickid=start_over_again").catch()
        }

        closePositionItem() {
            d.information("delete position item"), this.deleteMessageListItem("position"), s.client.callServerFunction("TrackEvent", "core_event", "player_last_play_position_bubble_click", "", 0, 0, 0, 0, "clickid=close").catch()
        }

        getCurMediaAttribute(e) {
            return o(this, void 0, void 0, function* () {
                return h.CommonNS.callXmp(l.XmpPlayerFunction.getCurrentMediaAttribute, e)
            })
        }

        switchClarity(e, t) {
            return o(this, void 0, void 0, function* () {
                do {
                    let n = e.name.slice(0, e.name.length);
                    if ("2k" === n && (n = "4k"), n = "sharpness" + n, this.trackEventPlayerFunctionClick(`button=${n}`), e.redirect_link) {
                        let t = yield h.CommonNS.getStatPlayfrom(), n = yield h.CommonNS.getCurrentTaskGcid(),
                            i = "clarity_" + e.name.slice(0, e.name.length - 1);
                        i = `clickid=${i},components_type=${this.isEmbed ? "embed" : "independent"},play_from=${t},vip_type=${m.default.vipType},gcid=${n},type=5`, s.client.callServerFunction("TrackEvent", "core_event", "player_clarity_option_click", "", 0, 0, 0, 0, i).catch()
                    }
                    if (!e.isVisible) break;
                    let i = yield h.CommonNS.callXmp(l.XmpPlayerFunction.getCurrentMediaAttribute, p.XmpMediaAttr.PlayUrl);
                    if (i === e.url) break;
                    if (e.need_more_quota && e.redirect_link) return void (yield s.client.callServerFunction("OpenNewTab", "https://pay.xunlei.com/pay.html?referfrom=v_pc_xlx_hytq_yp_play_clarity&aidfrom=operation_bar"));
                    this.addMessageList("clarity", "正在切换到<span>" + e.name + "</span>清晰度，请稍候", "正在切换到" + e.name + "清晰度，请稍候"), s.client.callRemoteClientFunction(E.mainRendererContext, l.XmpPlayerFunction.recordStat, "recEndType", "change_resolution").catch(), h.CommonNS.callXmp(l.XmpPlayerFunction.setMediaAttribute, this.curMediaId, p.XmpMediaAttr.PlayUrl, e.url).catch(), yield h.CommonNS.callXmp(l.XmpPlayerFunction.openMedia, this.curMediaId, !0, !0), this.currentClarity = e.rationName.slice(0, 2) || e.name || "原始画质", this.currentClarityIndex = t, this.switchCookie = s.client.attachServerEvent(c.XmpEvent.onOpenSucceeded, () => o(this, void 0, void 0, function* () {
                        yield s.client.callServerFunction("CreateYunPlayTask", e.url, this.title, this.panFileId, e.token, i), s.client.detachServerEvent(c.XmpEvent.onOpenSucceeded, this.switchCookie)
                    }))
                } while (0);
                this.addDelaydelPopupMenu("clarity", 0)
            })
        }

        get filterclarityList() {
            return null === this.clarityList || void 0 === this.clarityList ? [] : this.clarityList.filter(e => e.isVisible)
        }

        onShowFloatChange() {
            this.showFloat ? this.canShowVipBtn && this.trackShowVipBtn().catch() : this.reset()
        }

        onDragChanged() {
            this.$emit("on-drag-state-changed", this.drag)
        }

        clickProgress(e) {
            this.$emit("click-progress", e)
        }

        onpointerdown(e, t) {
            e.currentTarget.setPointerCapture(e.pointerId), this.drag = !0, this.dragBtnName = t, this.createDragTimer(), this.$emit("on-drag-begin", t)
        }

        onpointerup(e) {
            e.currentTarget.releasePointerCapture(e.pointerId), this.drag = !1, this.pointerEvent = null, this.lastEvent = null, this.$emit("on-drag-end", this.dragBtnName), this.dragBtnName = "", this.clearDragTimer()
        }

        onpointermove(e) {
            this.drag && (this.pointerEvent = e)
        }

        isDragingVolume() {
            return "volume" === this.dragBtnName
        }

        created() {
            return o(this, void 0, void 0, function* () {
                this.setEventEmiter(this);
                let e = yield s.client.callServerFunction("GetConfigModules", "xmpTip"), t = [];
                try {
                    if (d.warning("data", e), this.phoneTip = e.TipText ? e.TipText : this.phoneTip, this.codeTip = e.CodeText ? e.CodeText : this.codeTip, this.phoneDialogTitle = e.DialogTitle && "" !== e.DialogTitle ? e.DialogTitle : this.phoneDialogTitle, this.tipBeginTime = e.TipBeginTime && "" !== e.TipBeginTime ? e.TipBeginTime : this.tipBeginTime, this.tipEndTime = e.TipEndTime && "" !== e.TipEndTime ? e.TipEndTime : this.tipEndTime, this.canShowTip = void 0 !== e.ShowTip ? e.ShowTip : this.canShowTip, this.canShowIcon = void 0 !== e.ShowIcon ? e.ShowIcon : this.canShowIcon, this.canShowDialog = void 0 !== e.ShowDialog ? e.ShowDialog : this.canShowDialog, (t = e.ImgList) && t.length > 0) for (let e in t) "" !== t[e] && (this.imgList[e] = t[e])
                } catch (e) {
                }
                d.warning("canShowTip", this.canShowTip, "phoneTip", this.phoneTip, "codeTip", this.codeTip, "phoneDialogTitle", this.phoneDialogTitle, "tipBeginTime", this.tipBeginTime, "tipEndTime", this.tipEndTime, "canShowIcon", this.canShowIcon, this.imgList, this.canShowDialog), this.thisWindow = yield f.rpc.getCurrentWindow(), this.hwndMain = yield C.ThunderHelper.getBrowserWindowHandle(yield this.thisWindow.getParentWindow()), this.hwndThis = yield C.ThunderHelper.getBrowserWindowHandle(this.thisWindow), s.client.attachServerEvent(c.XmpEvent.onOpenSucceeded, this.onOpenSuccessd), s.client.attachServerEvent(c.XmpEvent.onStop, () => {
                    this.videoState = "loading", this.isMusic = !1, this.deleteMessageListItem("position")
                }), s.client.attachServerEvent(c.XmpEvent.onPreStop, this.onPlayStop), setInterval(() => {
                    this.handleDelayDelpopMenus()
                }, 100), 0 === (yield h.CommonNS.callXmp(l.XmpPlayerFunction.getVideoWidth)) || 0 === (yield h.CommonNS.callXmp(l.XmpPlayerFunction.getVideoHeight)) ? this.isMusic = !0 : this.isMusic = !1;
                let n = yield h.CommonNS.callXmp(l.XmpPlayerFunction.getState);
                n < p.XmpMediaState.Pausing || n > p.XmpMediaState.Play || this.onOpenSuccessd()
            })
        }

        createDragTimer() {
            this.clearDragTimer(), this.dragEmitTimer = setInterval(() => {
                if (this.drag && this.pointerEvent) if ("progress" === this.dragBtnName) this.lastEvent && this.lastEvent.clientX === this.pointerEvent.clientX || (this.lastEvent = this.pointerEvent, this.$emit("on-drag-progress", this.pointerEvent)); else if ("volume" === this.dragBtnName && (!this.lastEvent || this.lastEvent.clientY !== this.pointerEvent.clientY)) {
                    this.lastEvent = this.pointerEvent;
                    let e = this.$refs.volumeSlider, t = {y: this.getTop(e), height: e.clientHeight};
                    this.$emit("on-drag-volume", this.pointerEvent, t)
                }
            }, 75)
        }

        clearDragTimer() {
            this.dragEmitTimer && (clearInterval(this.dragEmitTimer), this.dragEmitTimer = null)
        }

        get isEmbed() {
            return "embed" === this.argsObj.show
        }

        get isAlone() {
            return "alone" === this.argsObj.show
        }

        get isdwmEnabled() {
            return "true" === this.argsObj.dwmEnabled
        }

        get isHover() {
            return !this.showFloat
        }

        betweenValue(e, t, n) {
            return Math.max(Math.min(e, n), t)
        }

        get volumeBtnPos() {
            return `top: ${100 - this.betweenValue(Math.floor(this.volume), 0, 100)}%;`
        }

        get volumeSliderProgress() {
            return `height: ${this.betweenValue(Math.floor(this.volume), 0, 100)}%;`
        }

        clickVolumeProgress(e) {
            let t = this.$refs.volumeSlider, n = {y: this.getTop(t), height: t.clientHeight};
            this.$emit("on-click-volume", e, n)
        }

        throttle(e, t, n) {
            this.isAvailThrottle = !0, this.isAvailThrottle && (e(n), this.isAvailThrottle = !1, setTimeout(() => {
                this.isAvailThrottle = !0
            }, t))
        }

        onProgressMouseMove(e) {
            this.throttle(this.updateTimetip, 200, e)
        }

        updateTimetip(e) {
            let t = e.view.innerWidth;
            this.hoverProgressNum = 100 * e.clientX / t;
            let n = this.hoverProgressNum * this.durationNum / 100;
            n = Math.min(n, this.durationNum), n = Math.max(0, n), this.hoverPositionFormat = this.translateNumberFormat(n)
        }

        translateNumberFormat(e) {
            e = Math.floor(e / 1e3);
            let t = Math.floor(e / 3600), n = Math.floor(e / 60) % 60, i = Math.floor(e % 60), o = "";
            return o = t < 10 ? "0" + t + ":" : t + ":", n < 10 && (o += "0"), o += n + ":", i < 10 && (o += "0"), o += i
        }

        isVipSpeed(e) {
            return this.isYunBo ? e > 1 : 2 === e
        }

        onHeadDown(e) {
            if (this.isEmbed || this.fullscreen || this.isMaximized) return;
            let t = e.srcElement.className;
            -1 === t.indexOf("xmpc-player-operate") && -1 === t.indexOf("td-button") && -1 === t.indexOf("xmpc-icon") && (this.pointerHead = e, e.currentTarget.setPointerCapture(e.pointerId), this.rectWnd = C.ThunderHelper.getWindowRect(this.hwndMain), this.drag = !0)
        }

        onHeadUp(e) {
            if (this.pointerHead) {
                this.pointerHead = null, e.currentTarget.releasePointerCapture(e.pointerId), this.drag = !1
            }
        }

        onHeadMove(e) {
            if (this.isEmbed || this.fullscreen || this.isMaximized) return;
            if (!this.pointerHead) return;
            let t = 1;
            t = C.ThunderHelper.getDPIAwareSupport() ? C.ThunderHelper.getMonitorDPIFactor(this.hwndMain) : C.ThunderHelper.getSysDPIFactor();
            let n = {x: 0, y: 0};
            n.x = e.screenX - this.pointerHead.screenX, n.y = e.screenY - this.pointerHead.screenY;
            let i = {
                x: Math.floor(this.rectWnd.x + n.x * t),
                y: Math.floor(this.rectWnd.y + n.y * t),
                width: Math.floor(this.rectWnd.width),
                height: Math.floor(this.rectWnd.height)
            };
            C.ThunderHelper.moveWindow(this.hwndMain, i)
        }

        trackShowVipBtn() {
            return o(this, void 0, void 0, function* () {
                if (this.isYunBo) I.StatUtilitiesNS.trackOpenVipBtn(yield h.CommonNS.getStatPlayfrom(), this.isEmbed, m.default.vipType, "fixed_btn", !0); else switch (yield v.PlayTryNS.getState(null, Number(this.curTaskId))) {
                    case v.PlayTryNS.State.ready:
                        S.VipStatNS.playTryReadyShow(yield h.CommonNS.getCurrentTaskGcid(), this.playTryStateInfo.tryNum, "bottom", this.playTryStateInfo.isCloudTask, Math.floor(this.durationNum / 1e3));
                        break;
                    case v.PlayTryNS.State.commiting:
                    case v.PlayTryNS.State.runing:
                        S.VipStatNS.playTryRuningShow(yield h.CommonNS.getCurrentTaskGcid(), "bottom", this.playTryStateInfo.isCloudTask, Math.floor(this.durationNum / 1e3), Math.floor(this.playTryStateInfo.beforeSpeed / 1024));
                        break;
                    case v.PlayTryNS.State.finish:
                    case v.PlayTryNS.State.over:
                        S.VipStatNS.playTryAfterShow(yield h.CommonNS.getCurrentTaskGcid(), "bottom", this.playTryStateInfo.isCloudTask, Math.floor(this.durationNum / 1e3), Math.floor(this.playTryStateInfo.beforeSpeed / 1024), Math.floor(this.playTryStateInfo.tryingSpeed / 1024));
                        break;
                    default:
                        S.VipStatNS.vipButtonShow(yield h.CommonNS.getCurrentTaskGcid())
                }
            })
        }

        addMessageList(e, t, n, i = 3e3, o, r) {
            let a = r ? this.vipMessageList : this.messageList, c = `${e}_${(new Date).getTime()}`;
            if (!this.isdwmEnabled) return t = n || t, void s.client.callServerFunction(l.VideoTipFunction.showTip, e, t, 3e3);
            this.deleteMessageListItem(e, r), a.set(c, [t, o]), setTimeout(() => {
                this.deleteMessageListItem(c, r)
            }, i);
            for (let e of a.keys()) {
                if (!(a.size > 3)) break;
                a.get(e)[1] && a.get(e)[1](), a.delete(e)
            }
            this.$forceUpdate()
        }

        deleteMessageListItem(e, t) {
            let n = t ? this.vipMessageList : this.messageList;
            for (let t of n.keys()) if (t.startsWith(e)) {
                n.get(t)[1] && n.get(t)[1](), n.delete(t);
                break
            }
            this.$forceUpdate()
        }

        onVideoStateChange(e) {
            this.videoState = e, d.information("float", "video-state-change", e), this.$emit("video-state-change", e)
        }

        get isLoading() {
            return "loading" === this.videoState
        }

        get isError() {
            return "error" === this.videoState
        }

        get isPlaying() {
            return "playing" === this.videoState
        }

        get isCodec() {
            return "codec" === this.videoState
        }

        get isUnknow() {
            return "" === this.videoState
        }

        get isXmpEmbedPlay() {
            return this.xmpMode === _.XmpMode.EMBED_MODE || this.xmpMode === _.XmpMode.UNKNOWN_MODE
        }

        onXmpModeChange(e) {
            this.xmpMode = e
        }

        get divStyle() {
            return this.isCodec ? "background: #000" : "background: #0000"
        }

        calPhoneIconState() {
            return o(this, void 0, void 0, function* () {
                do {
                    if (this.panFileId && "" !== this.panFileId) {
                        this.showPhoneIcon = null, this.showPhoneTip = null;
                        break
                    }
                    let e = yield h.CommonNS.callXmp(l.XmpPlayerFunction.getCurrentMediaAttribute, p.XmpMediaAttr.TaskUrl),
                        t = yield h.CommonNS.callXmp(l.XmpPlayerFunction.getCurrentMediaAttribute, p.XmpMediaAttr.IsYunRecvTask);
                    if (!e || "" === e || t) {
                        this.showPhoneIcon = null, this.canShowCodeDialog = null;
                        break
                    }
                    this.canShowCodeDialog = !0;
                    let n = (new Date).getHours(), i = !1;
                    if (this.tipBeginTime > this.tipEndTime ? (n >= this.tipBeginTime || n <= this.tipEndTime) && (i = !0) : n >= this.tipBeginTime && n <= this.tipEndTime && (i = !0), this.isNight = i, this.showPhoneIcon = !0, this.showPhoneIcon && this.isdwmEnabled && this.canShowIcon && this.showFloat) {
                        let e = "gcid=" + (yield h.CommonNS.callXmp(l.XmpPlayerFunction.getCurrentMediaAttribute, p.XmpMediaAttr.Gcid)) + ",is_moon=" + (this.isNight ? "1" : "0");
                        s.client.callServerFunction("TrackEvent", "core_event", "player_guid_yun_add_icon_show", "", 0, 0, 0, 0, e).catch(), d.information("player_guid_yun_add_icon_show extData", e)
                    }
                } while (0)
            })
        }

        hoverPhoneIcon() {
            return o(this, void 0, void 0, function* () {
                if (this.$emit("hover-phone-icon", !0), yield this.createQCode(p.CodeSoure.Icon), this.codeImgPath && "" !== this.codeImgPath) {
                    this.showShareCode = !0;
                    let e = "gcid=" + (yield h.CommonNS.callXmp(l.XmpPlayerFunction.getCurrentMediaAttribute, p.XmpMediaAttr.Gcid)) + ",is_moon=" + (this.isNight ? "1" : "0");
                    this.showPhoneTip && this.canShowTip ? (s.client.callServerFunction("TrackEvent", "core_event", "player_guid_bubble_2dcode_show", "", 0, 0, 0, 0, e).catch(), d.information("player_guid_bubble_2dcode_show extData", e)) : (s.client.callServerFunction("TrackEvent", "core_event", "player_guid_icon_2dcode_show", "", 0, 0, 0, 0, e).catch(), d.information("player_guid_icon_2dcode_show extData", e))
                }
                this.showPhoneTip && clearTimeout(this.showTipTimer)
            })
        }

        createQCode(e) {
            return o(this, void 0, void 0, function* () {
                do {
                    let t = yield h.CommonNS.callXmp(l.XmpPlayerFunction.getCurrentMediaAttribute, p.XmpMediaAttr.TaskUrl);
                    if (!t || "" === t) break;
                    let n = yield h.CommonNS.callXmp(l.XmpPlayerFunction.getCurrentMediaAttribute, p.XmpMediaAttr.Name);
                    this.codeImgPath = yield g.ThunderDljHelperNs.createQCode(t, this.curMediaId, n, e)
                } while (0)
            })
        }

        leavePhoneIcon() {
            return o(this, void 0, void 0, function* () {
                this.showShareCode = !1, this.showPhoneTip ? this.showTipTimer = setTimeout(() => o(this, void 0, void 0, function* () {
                    this.showPhoneTip = !1, this.$emit("hover-phone-icon", !1)
                }), 5e3) : this.$emit("hover-phone-icon", !1)
            })
        }

        closePhoneTip() {
            return o(this, void 0, void 0, function* () {
                let e = "gcid=" + (yield h.CommonNS.callXmp(l.XmpPlayerFunction.getCurrentMediaAttribute, p.XmpMediaAttr.Gcid)) + ",clickid=close";
                s.client.callServerFunction("TrackEvent", "core_event", "player_guid_yun_add_bubble_click", "", 0, 0, 0, 0, e).catch(), d.information("player_guid_yun_add_bubble_click extData", e), this.showPhoneTip = !1
            })
        }

        onPlayStop() {
            return o(this, void 0, void 0, function* () {
                this.showPhoneIcon = !1, this.showPhoneTip && (this.showPhoneTip = !1);
                let e = r.join(__profilesDir, "SharePic");
                yield T.FileSystemAWNS.rmdirsAW(e)
            })
        }

        toShowTip(e) {
            return o(this, void 0, void 0, function* () {
                this.showPhoneTip = !0, e++;
                let t = (new Date).getTime();
                yield h.CommonNS.callXmp(l.ConfigFunction.saveConfig, "PhoneCode", "ShowTipCount", e), yield h.CommonNS.callXmp(l.ConfigFunction.saveConfig, "PhoneCode", "ShowTipTime", t);
                let n = "gcid=" + (yield h.CommonNS.callXmp(l.XmpPlayerFunction.getCurrentMediaAttribute, p.XmpMediaAttr.Gcid));
                s.client.callServerFunction("TrackEvent", "core_event", "player_guid_yun_add_bubble_show", "", 0, 0, 0, 0, n).catch(), d.information("player_guid_yun_add_bubble_show extData", n), this.showTipTimer = setTimeout(() => o(this, void 0, void 0, function* () {
                    this.showPhoneTip = !1
                }), 5e3)
            })
        }

        pollCanShowTip() {
            return o(this, void 0, void 0, function* () {
                clearTimeout(this.pollShowTipTimer);
                do {
                    if (!this.showPhoneIcon) {
                        this.showPhoneTip = !1;
                        break
                    }
                    let e = yield h.CommonNS.callXmp(l.ConfigFunction.getConfigValue, "PhoneCode", "ShowTipCount", 0);
                    if (e >= 2) break;
                    if (yield this.calPhoneTip(e)) break;
                    this.pollShowTipTimer = setInterval(() => o(this, void 0, void 0, function* () {
                        yield this.calPhoneTip(e)
                    }), 6e4)
                } while (0)
            })
        }

        calPhoneTip(e) {
            return o(this, void 0, void 0, function* () {
                let t = !1;
                do {
                    if (!this.showPhoneIcon) {
                        this.showPhoneTip = !1;
                        break
                    }
                    let n = new Date, i = n.getHours(), o = n.getTime(), r = this.tipBeginTime, a = this.tipEndTime,
                        s = yield h.CommonNS.callXmp(l.ConfigFunction.getConfigValue, "PhoneCode", "ShowTipTime", 0),
                        c = 1728e5;
                    if (!this.canShowTip) {
                        this.showPhoneTip = !1;
                        break
                    }
                    if (0 === e || o - s >= c) {
                        let n = !1;
                        r > a ? (i >= r || i <= a) && (n = !0, yield this.toShowTip(e), clearTimeout(this.pollShowTipTimer), t = !0) : i >= r && i <= a && (n = !0, yield this.toShowTip(e), clearTimeout(this.pollShowTipTimer), t = !0), this.isNight = n
                    }
                } while (0);
                return t
            })
        }

        closeDialog() {
            return o(this, void 0, void 0, function* () {
                this.showCodeDialog = !1;
                let e = "gcid=" + (yield h.CommonNS.callXmp(l.XmpPlayerFunction.getCurrentMediaAttribute, p.XmpMediaAttr.Gcid)) + ",clickid=close";
                yield s.client.callServerFunction("TrackEvent", "core_event", "player_guid_yun_add_sticker_click", "", 0, 0, 0, 0, e), d.information("player_guid_yun_add_sticker_click extData", e)
            })
        }

        clickCloseFloat() {
            this.showCodeDialog = !1, this.$emit("click-exit")
        }

        clickOpenDlna() {
            h.CommonNS.callXmp(l.XmpPlayerFunction.openDLNA).catch(), this.isEmbed, this.trackEventPlayerFunctionClick("button=projection")
        }

        trackEventPlayerFunctionClick(e) {
            return o(this, void 0, void 0, function* () {
                let t = C.ThunderHelper.getTickCount();
                e = `${e},components_type=${this.isEmbed ? "embed" : "independent"}`, e += `,gcid=${yield h.CommonNS.getCurrentTaskGcid()}`, e += `,playid=${yield h.CommonNS.callXmp(l.XmpPlayerFunction.getPlayId)}`, e += `,pos=${Math.floor((yield h.CommonNS.callXmp(l.XmpPlayerFunction.getPosition)) / 1e3)}`;
                let n = yield h.CommonNS.callXmp(l.XmpPlayerFunction.getPlayTick, t);
                e += `,start_tick=${n[0]},currnet_tick=${n[1]}`, e += `,vip_type=${m.default.vipType}`, s.client.callServerFunction("TrackEvent", "core_event", "player_function_click", "", 0, 0, 0, 0, e).catch()
            })
        }

        get isTryRuning() {
            return this.playTryStateInfo.state === v.PlayTryNS.State.runing
        }

        get packageTryPerscentStyle() {
            return this.isTryRuning && this.playTryStateInfo.allTick ? "width:" + Math.floor(100 * (this.playTryStateInfo.allTick - this.playTryStateInfo.useTick) / this.playTryStateInfo.allTick) + "%;" : "width:0%;"
        }
    };
    i([a.Prop()], A.prototype, "curMediaId", void 0), i([a.Prop({})], A.prototype, "title", void 0), i([a.Prop({})], A.prototype, "isPlayed", void 0), i([a.Prop({})], A.prototype, "isPaused", void 0), i([a.Prop({})], A.prototype, "canPause", void 0), i([a.Prop({})], A.prototype, "canPlay", void 0), i([a.Prop({})], A.prototype, "positionFormat", void 0), i([a.Prop({})], A.prototype, "durnationFormat", void 0), i([a.Prop({})], A.prototype, "progress", void 0), i([a.Prop({})], A.prototype, "progressBtnPos", void 0), i([a.Prop({})], A.prototype, "progressNum", void 0), i([a.Prop({})], A.prototype, "fullscreen", void 0), i([a.Prop({})], A.prototype, "inNail", void 0), i([a.Prop({})], A.prototype, "argsObj", void 0), i([a.Prop({})], A.prototype, "isYunBo", void 0), i([a.Prop({})], A.prototype, "playSpeed", void 0), i([a.Prop({})], A.prototype, "showFloat", void 0), i([a.Prop({})], A.prototype, "isMaximized", void 0), i([a.Prop({})], A.prototype, "volume", void 0), i([a.Prop({})], A.prototype, "isSilent", void 0), i([a.Prop({})], A.prototype, "canShowVipBtn", void 0), i([a.Prop({})], A.prototype, "vipBtnText", void 0), i([a.Prop({})], A.prototype, "vipBtnIconClass", void 0), i([a.Prop({})], A.prototype, "packageSpeed", void 0), i([a.Prop({})], A.prototype, "packageVipSpeed", void 0), i([a.Prop({})], A.prototype, "playTryStateInfo", void 0), i([a.Prop()], A.prototype, "durationNum", void 0), i([a.Prop({default: ""})], A.prototype, "panFileId", void 0), i([a.Prop({})], A.prototype, "curTaskId", void 0), i([a.Prop()], A.prototype, "showBackIcon", void 0), i([a.Prop()], A.prototype, "isSwitchClarity", void 0), i([a.Prop()], A.prototype, "isZipPlay", void 0), i([a.Watch("canShowVipBtn")], A.prototype, "onCanshowVipBtnChanged", null), i([a.Watch("curTaskId")], A.prototype, "onCurTaskIdChanged", null), i([a.Watch("vipBtnText")], A.prototype, "onVipBtnTextChanged", null), i([a.Watch("showPhoneTip", {immediate: !0})], A.prototype, "onShowPhoneTipChange", null), i([a.Watch("isPaused", {immediate: !0})], A.prototype, "onPausedChange", null), i([a.Watch("showFloat")], A.prototype, "onShowFloatChange", null), i([a.Watch("drag")], A.prototype, "onDragChanged", null), A = i([a.Component({
        components: {
            TimeTip: u.default,
            VideoState: O.default,
            MenuSetting: D.default,
            MenuSpeed: y.default
        }
    })], A), t.default = A
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(151), o = n.n(i);
    for (var r in i) ["default"].indexOf(r) < 0 && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, n, a) : o(t, n)) || a);
        return r > 3 && a && Object.defineProperty(t, n, a), a
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(12);
    let r = class extends o.Vue {
        get progressStyle() {
            let e = this.progress * innerWidth / 100;
            return e < 32 ? e = 32 : e > innerWidth + 32 - 72 && (e = innerWidth + 32 - 72), `left: ${e}px`
        }
    };
    i([o.Prop({required: !0})], r.prototype, "progress", void 0), i([o.Prop({required: !0})], r.prototype, "positionFormat", void 0), r = i([o.Component({})], r), t.default = r
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(153), o = n.n(i);
    for (var r in i) ["default"].indexOf(r) < 0 && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, n, a) : o(t, n)) || a);
        return r > 3 && a && Object.defineProperty(t, n, a), a
    }, o = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(1), a = n(12), s = n(38), l = n(20), c = n(31), u = n(50), d = n(135), p = n(0), h = n(119), I = n(88),
        f = p.default.getLogger("video-state");
    let C = class extends a.Vue {
        constructor() {
            super(...arguments), this.xmpMediaState = u.XmpMediaState.Invalid, this.xmpMediaStateDesc = "", this.isYunBo = !1, this.isDownloadAndPlay = !1, this.isLocalPlay = !1, this.errorText = "", this.errorCode = 0, this.speedText = "0KB", this.xmpMode = u.XmpMode.UNKNOWN_MODE, this.isDownloadCodecEvent = !1, this.name = "", this.progress = 0, this.progressStye = "width:0%", this.isDownloadCodec = !1, this.xmpClose = !1, this.bufferPercent = 100, this.isNewVideo = !0, this.readSpeedTimer = null, this.forceLoading = 0, this.codecTimeOut = null, this.preShowPage = ""
        }

        onPanFileIdChange() {
            this.isNewVideo = !0
        }

        onForceLoadingChange() {
            this.emitState()
        }

        onStateDescChange() {
            this.emitState()
        }

        onBufferPercentChange() {
            this.emitState()
        }

        onIsDownloadCodecChange() {
            this.emitState()
        }

        onXmpModeChange() {
            this.information("onXmpModeChange", this.xmpMode), this.$emit("xmp-mode-change", this.xmpMode)
        }

        onBeginForceLoadingChange() {
            this.emitState()
        }

        destroyed() {
            h.default.detchGroupAllEvent("video-state")
        }

        readSpeed() {
            return o(this, void 0, void 0, function* () {
                let e = Number(yield c.CommonNS.callXmp(u.XmpPlayerFunction.getConfig, u.APlayerConfigId.CONFIGID_READSPEED));
                this.information("readSpeed", e), e ? e > 1024 ? (e /= 1024, this.speedText = `${e.toFixed(2)}MB`) : this.speedText = `${e.toFixed(0)}KB` : this.speedText = "0KB"
            })
        }

        updateReadSpeed() {
            if (this.readSpeed(), this.isLoading || this.isBuffering || "" === this.xmpMediaStateDesc) {
                if (this.readSpeedTimer) return;
                this.readSpeedTimer = setInterval(() => {
                    this.readSpeed()
                }, 1e3)
            } else this.readSpeedTimer && (clearInterval(this.readSpeedTimer), this.readSpeedTimer = null)
        }

        emitState() {
            let e = "";
            this.isDownloadCodec ? e = "codec" : this.isLoading ? e = "loading" : this.isBuffering ? e = "buffering" : this.isError ? e = "error" : this.isPlaying ? e = "playing" : this.xmpClose && (e = "close"), this.updateReadSpeed(), this.information("video-state-change", e, "desc", this.xmpMediaStateDesc, "buffer", this.bufferPercent, "forceloading", this.forceLoading), this.$emit("video-state-change", e)
        }

        information(...e) {
            this.loggerEnable && f.information(this.isEmbed ? "in preview" : "in float", this.isXmpEmbedPlay ? "embedplay" : "windowplay", "xmpState", this.xmpMediaState, "userHelper.isVip", s.default.isVip, "xmpMode", this.xmpMode, "beginForceloading", this.beginForceLoading, ...e)
        }

        get fileName() {
            return this.name
        }

        get downloadProgress() {
            return this.progress + "%"
        }

        attachDownloadCodecEvent() {
            h.default.attachGroupEvent("video-state", "OnDownloadCodec", () => {
                this.isDownloadCodecEvent = !0, this.isDownloadCodec = !0, this.checkXmpStateDesc(), this.codecTimeOut && (clearTimeout(this.codecTimeOut), this.codecTimeOut = null)
            }), h.default.attachGroupEvent("video-state", "OnDownloadCodecProgress", (e, t, n, i) => o(this, void 0, void 0, function* () {
                this.name = t, this.progress = n, this.progressStye = "width:" + n + "%", i ? this.codecTimeOut = setTimeout(() => {
                    this.isDownloadCodec = !1, this.checkXmpStateDesc()
                }, 1500) : this.codecTimeOut && (clearTimeout(this.codecTimeOut), this.codecTimeOut = null)
            })), r.client.callRemoteClientFunction(l.mainRendererContext, "OnGetCachedDownloadCodecInfo").then(e => {
                !this.isDownloadCodecEvent && e[0] && e[0].downloading && (this.isDownloadCodec = !0, this.name = e[0].name, this.progress = e[0].progress, this.progressStye = "width:" + e[0].progress + "%", this.checkXmpStateDesc())
            })
        }

        cancelDownload() {
            r.client.callRemoteClientFunction(l.mainRendererContext, "OnCancelDownloadCodecs"), r.client.callRemoteClientFunction(l.mainRendererContext, "XmpPlayerClose")
        }

        created() {
            return o(this, void 0, void 0, function* () {
                this.xmpMode = yield c.CommonNS.callXmp(u.XmpPlayerFunction.getXmpCurrentMode), this.information("this.xmpMode", this.xmpMode), this.forceLoading = yield c.CommonNS.callXmp("IsForceloading"), this.attachPlayerEvent(), this.attachDownloadCodecEvent(), yield this.checkXmpStateDesc(), yield this.checkPlayType(), this.emitState()
            })
        }

        attachPlayerEvent() {
            return o(this, void 0, void 0, function* () {
                [u.XmpEvent.onError, u.XmpEvent.onOpenSucceeded, u.XmpEvent.onPlaying, u.XmpEvent.onPreOpen, u.XmpEvent.onPaused, u.XmpEvent.onPlayCompleted, u.XmpEvent.onPreStop, u.XmpEvent.onStop, u.XmpEvent.onForceLoadingState, u.XmpEvent.onBuffer, u.XmpEvent.onXmpClose, u.XmpEvent.onAllStoped, u.XmpEvent.onClearError].forEach(e => {
                    h.default.attachGroupEvent("video-state", e, (t, ...n) => o(this, void 0, void 0, function* () {
                        switch (e === u.XmpEvent.onXmpClose || e === u.XmpEvent.onStop ? this.xmpClose = !0 : this.xmpClose = !1, e) {
                            case u.XmpEvent.onPreOpen:
                                this.bufferPercent = 100, this.forceLoading = yield c.CommonNS.callXmp("IsForceloading"), this.checkPlayType();
                                break;
                            case u.XmpEvent.onError:
                                this.errorText = u.XmpErrorCodeNS.getErrorTextByErrorCode(n[1]), this.errorCode = n[1];
                                break;
                            case u.XmpEvent.onForceLoadingState:
                                this.forceLoading = n[0];
                                break;
                            case u.XmpEvent.onClearError:
                                this.isError && (this.errorCode = 0, this.xmpMediaStateDesc = "");
                                break;
                            case u.XmpEvent.onBuffer:
                                this.bufferPercent = Number(n[0])
                        }
                        this.information("onXmpEvent", e, t, ...n), this.checkXmpStateDesc(void 0, e), this.emitState()
                    }))
                }), h.default.attachGroupEvent("video-state", u.ModeChangeEvent.onXmpModeChanged, (e, t, n, i) => o(this, void 0, void 0, function* () {
                    this.xmpMode = n, this.information("onXmpModeChanged", t, n)
                }))
            })
        }

        backToEmbed() {
            return o(this, void 0, void 0, function* () {
                c.CommonNS.callXmp(u.XmpPlayerFunction.setXmpCurrentMode, u.XmpMode.EMBED_MODE).catch();
                let e = "button=embed_play,components_type=independent";
                e += `,gcid=${yield c.CommonNS.getCurrentTaskGcid()}`, e += `,playid=${yield c.CommonNS.callXmp(u.XmpPlayerFunction.getPlayId)}`, e += `,pos=${Math.floor((yield c.CommonNS.callXmp(u.XmpPlayerFunction.getPosition)) / 1e3)}`;
                let t = yield c.CommonNS.callXmp(u.XmpPlayerFunction.getPlayTick, 0);
                e += `,start_tick=${t[0]},off_tick=${t[1]}`, r.client.callServerFunction("TrackEvent", "core_event", "player_function_click", "", 0, 0, 0, 0, e).catch()
            })
        }

        get errCode() {
            let e = "0x0";
            return this.errorCode && (e = "0x" + this.errorCode.toString(16).toLocaleUpperCase()), e
        }

        get isError() {
            return "error" === this.xmpMediaStateDesc
        }

        get isLoading() {
            return !this.xmpClose && ("loading" === this.xmpMediaStateDesc || this.beginForceLoading)
        }

        get isBuffering() {
            return !this.xmpClose && (2 === this.forceLoading || 1 === this.forceLoading || 100 !== this.bufferPercent)
        }

        get isPlaying() {
            return "playing" === this.xmpMediaStateDesc
        }

        checkPlayType() {
            return o(this, void 0, void 0, function* () {
                this.isYunBo = yield c.CommonNS.isYunBo(), this.isDownloadAndPlay = yield c.CommonNS.isPlayAndDownload(), this.isLocalPlay = yield c.CommonNS.isLocalPlay(), this.information("checkPlayType", this.isYunBo, this.isDownloadAndPlay, this.isLocalPlay)
            })
        }

        checkXmpStateDesc(e, t) {
            return o(this, void 0, void 0, function* () {
                switch (this.xmpMediaState = e || (yield c.CommonNS.callXmp(u.XmpPlayerFunction.getState)), this.information("checkXmpStateDesc", this.xmpMediaState, this.bufferPercent), this.xmpMediaState) {
                    case u.XmpMediaState.PreOpen:
                    case u.XmpMediaState.Opening:
                        this.xmpMediaStateDesc = "loading";
                        break;
                    case u.XmpMediaState.Paused:
                    case u.XmpMediaState.Playing:
                    case u.XmpMediaState.Play:
                    case u.XmpMediaState.Pausing:
                        this.xmpMediaStateDesc = "playing";
                        break;
                    case u.XmpMediaState.Completed:
                        this.xmpMediaStateDesc = "stoped";
                        break;
                    case u.XmpMediaState.Stopped:
                        this.isError || (this.xmpMediaStateDesc = "stoped");
                        break;
                    case u.XmpMediaState.Error:
                        this.xmpMediaStateDesc = "error";
                        break;
                    default:
                        let t = yield c.CommonNS.callXmp(u.XmpPlayerFunction.getLastPlayError),
                            n = yield c.CommonNS.getCurrentTaskIdOrPanId();
                        t && t.taskId === n && (this.errorCode = t.error, this.errorText = u.XmpErrorCodeNS.getErrorTextByErrorCode(this.errorCode))
                }
                t === u.XmpEvent.onClearError && (this.xmpMediaStateDesc = "loading"), 0 !== this.errorCode && (this.xmpMediaStateDesc = "error"), this.xmpClose && !this.isError && (this.xmpMediaStateDesc = "close"), this.isBuffering && (this.xmpMediaStateDesc = "buffering"), this.isDownloadCodec && (this.xmpMediaStateDesc = "codec")
            })
        }

        onHangleRetry() {
            return o(this, void 0, void 0, function* () {
                f.warning(" onHangleRetry"), r.client.callServerFunction("TrackEvent", "core_event", "player_fail_play_click", "", 0, 0, 0, 0, `errorcode=${this.errCode}`).catch();
                let e = yield c.CommonNS.callXmp(u.ConfigFunction.getConfigValue, "APlayerConfig", "LastPlayMediaId", 0);
                this.errorCode = 0;
                let t = yield c.CommonNS.callXmp(u.XmpPlayerFunction.openMedia, e);
                f.warning(t)
            })
        }

        get isXmpEmbedPlay() {
            return !(this.xmpMode === u.XmpMode.INDEPENDENT_MODE)
        }

        openPayVip(e) {
            return o(this, void 0, void 0, function* () {
                if (e) this.trackOpenVipBtn(!1); else if (this.isTryReady) return c.CommonNS.callVipPlugin(d.PlayTryNS.Function.gotoPlayTry, Number(this.curTaskId)), void I.VipStatNS.playTryReadyClick(yield c.CommonNS.getCurrentTaskGcid(), this.playTryStateInfo.tryNum, "center", this.playTryStateInfo.isCloudTask, Math.floor(this.durationNum / 1e3));
                c.CommonNS.callXmp("BufferClickVipBtn")
            })
        }

        trackOpenVipBtnEx() {
            return setTimeout(() => {
                this.trackOpenVipBtn(!0).catch()
            }, 0), !0
        }

        trackShowErrorPage() {
            return setTimeout(() => {
                r.client.callServerFunction("TrackEvent", "core_event", "player_fail_play_show", "", 0, 0, 0, 0, `errorcode=${this.errCode}`).catch()
            }, 0), !0
        }

        trackPackageTryReadyEx() {
            return o(this, void 0, void 0, function* () {
                I.VipStatNS.playTryReadyShow(yield c.CommonNS.getCurrentTaskGcid(), this.playTryStateInfo.tryNum, "center", this.playTryStateInfo.isCloudTask, Math.floor(this.durationNum / 1e3))
            })
        }

        trackPackageTryReady() {
            setTimeout(() => {
                this.trackPackageTryReadyEx().catch()
            }, 0)
        }

        trackOpenVipBtn(e) {
            return o(this, void 0, void 0, function* () {
                let t = new Map;
                t.set("play_from", yield c.CommonNS.getStatPlayfrom()), t.set("components_type", this.isXmpEmbedPlay ? "embed" : "independent"), t.set("vip_type", s.default.vipType), t.set("btn_position", "play_buffer");
                let n = e ? "player_video_load_open_yunbo_btn_show" : "player_video_load_open_yunbo_btn_click";
                if (e) return void c.CommonNS.trackShowEvnet("core_event", n + "play_buffer", t);
                let i = function (e) {
                    let t = "";
                    return e.forEach((e, n) => {
                        "" !== t && (t += ","), t = t + n + "=" + e
                    }), t
                }(t);
                r.client.callServerFunction("TrackEvent", "core_event", n, "", 0, 0, 0, 0, i).catch()
            })
        }

        isCanShowPage1(e) {
            let t = !1;
            switch (e) {
                case"codec":
                    t = !1;
                    break;
                case"error":
                    t = this.isError;
                    break;
                case"yunbo_vip":
                    t = this.isLoading && this.isYunBo && s.default.isVip;
                    break;
                case"yobon_novip":
                    t = this.isLoading && this.isYunBo && !s.default.isVip;
                    break;
                case"play_and_download_vip":
                    t = this.isLoading && this.isDownloadAndPlay && s.default.isVip;
                    break;
                case"play_and_download_novip":
                    t = this.isLoading && this.isDownloadAndPlay && !s.default.isVip;
                    break;
                case"local_play":
                    t = this.isLoading && this.isLocalPlay;
                    break;
                case"back_to_embed":
                    t = !1
            }
            return t
        }

        isCanShowPage2(e) {
            let t = !1;
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

        isCanShowPage3(e) {
            let t = !1;
            switch (e) {
                case"codec":
                    t = this.isDownloadCodec;
                    break;
                case"error":
                    t = !1;
                    break;
                case"yunbo_vip":
                    t = this.isNewVideo ? this.isBuffering && this.isYunBo && s.default.isVip : (this.isLoading || this.isBuffering) && this.isYunBo && s.default.isVip;
                    break;
                case"yobon_novip":
                    t = this.isNewVideo ? this.isBuffering && this.isYunBo && !s.default.isVip : (this.isLoading || this.isBuffering) && this.isYunBo && !s.default.isVip;
                    break;
                case"play_and_download_vip":
                    t = this.isBuffering && this.isDownloadAndPlay && s.default.isVip;
                    break;
                case"play_and_download_novip":
                    t = this.isBuffering && this.isDownloadAndPlay && !s.default.isVip;
                    break;
                case"local_play":
                case"back_to_embed":
                    t = !1
            }
            return t
        }

        isCanShowPage4(e) {
            let t = !1;
            switch (e) {
                case"codec":
                    t = this.isDownloadCodec;
                    break;
                case"error":
                    t = this.isError;
                    break;
                case"yunbo_vip":
                    t = (this.isLoading || this.isBuffering) && this.isYunBo && s.default.isVip;
                    break;
                case"yobon_novip":
                    t = (this.isLoading || this.isBuffering) && this.isYunBo && !s.default.isVip;
                    break;
                case"play_and_download_vip":
                    t = (this.isLoading || this.isBuffering) && this.isDownloadAndPlay && s.default.isVip;
                    break;
                case"play_and_download_novip":
                    t = (this.isLoading || this.isBuffering) && this.isDownloadAndPlay && !s.default.isVip;
                    break;
                case"local_play":
                    t = this.isLoading && this.isLocalPlay;
                    break;
                case"back_to_embed":
                    t = !1
            }
            return t
        }

        isCanShowPage(e) {
            let t = !1;
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

        isCanShowPageEx(e) {
            return this.preShowPage === e
        }

        get isTryRuning() {
            return !!this.playTryStateInfo && (this.playTryStateInfo.state === d.PlayTryNS.State.runing || this.playTryStateInfo.state === d.PlayTryNS.State.commiting)
        }

        get isTryReady() {
            return !!this.playTryStateInfo && this.playTryStateInfo.state === d.PlayTryNS.State.ready
        }

        get openVipText() {
            return this.isTryReady ? "试用加速" : "立即开通"
        }

        get vipTipText() {
            return this.isTryReady ? "您有一次免费试用会员加速机会" : "会员尊享视频高速加载特权"
        }
    };
    i([a.Prop({default: !1})], C.prototype, "isEmbed", void 0), i([a.Prop({default: ""})], C.prototype, "panFileId", void 0), i([a.Prop({})], C.prototype, "curTaskId", void 0), i([a.Prop({default: !1})], C.prototype, "beginForceLoading", void 0), i([a.Prop({default: !0})], C.prototype, "loggerEnable", void 0), i([a.Prop()], C.prototype, "durationNum", void 0), i([a.Watch("panFileId")], C.prototype, "onPanFileIdChange", null), i([a.Watch("forceLoading")], C.prototype, "onForceLoadingChange", null), i([a.Watch("xmpMediaStateDesc")], C.prototype, "onStateDescChange", null), i([a.Watch("bufferPercent")], C.prototype, "onBufferPercentChange", null), i([a.Watch("isDownloadCodec")], C.prototype, "onIsDownloadCodecChange", null), i([a.Watch("xmpMode")], C.prototype, "onXmpModeChange", null), i([a.Watch("beginForceLoading")], C.prototype, "onBeginForceLoadingChange", null), i([a.Prop({})], C.prototype, "playTryStateInfo", void 0), C = i([a.Component], C), t.default = C
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(155), o = n.n(i);
    for (var r in i) ["default"].indexOf(r) < 0 && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, n, a) : o(t, n)) || a);
        return r > 3 && a && Object.defineProperty(t, n, a), a
    }, o = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(12), a = n(121), s = n(343), l = n(344), c = n(1), u = n(31), d = n(18), p = n(38), h = n(26);
    let I = class extends a.MenuHandleVue {
        get isEmbed() {
            return "embed" === this.argsObj.show
        }

        trackEventPlayerFunctionClick(e) {
            return o(this, void 0, void 0, function* () {
                let t = h.ThunderHelper.getTickCount();
                e = `${e},components_type=${this.isEmbed ? "embed" : "independent"}`, e += `,gcid=${yield u.CommonNS.getCurrentTaskGcid()}`, e += `,playid=${yield u.CommonNS.callXmp(d.XmpPlayerFunction.getPlayId)}`, e += `,pos=${Math.floor((yield u.CommonNS.callXmp(d.XmpPlayerFunction.getPosition)) / 1e3)}`;
                let n = yield u.CommonNS.callXmp(d.XmpPlayerFunction.getPlayTick, t);
                e += `,start_tick=${n[0]},currnet_tick=${n[1]}`, e += `,vip_type=${p.default.vipType}`, c.client.callServerFunction("TrackEvent", "core_event", "player_function_click", "", 0, 0, 0, 0, e).catch()
            })
        }
    };
    i([r.Prop({})], I.prototype, "argsObj", void 0), I = i([r.Component({
        components: {
            AudioTrack: s.default,
            Subtitle: l.default
        }
    })], I), t.default = I
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(157), o = n.n(i);
    for (var r in i) ["default"].indexOf(r) < 0 && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, n, a) : o(t, n)) || a);
        return r > 3 && a && Object.defineProperty(t, n, a), a
    }, o = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(12), a = n(1), s = n(18), l = n(74), c = n(213), u = n(0), d = n(31), p = n(121), h = n(38), I = n(26),
        f = u.default.getLogger("audiotrack");
    let C = class extends p.MenuHandleVue {
        constructor() {
            super(...arguments), this.trackList = [], this.currentTrackIndex = -1
        }

        created() {
            this.updateTrackList(), a.client.attachServerEvent(l.XmpEvent.onOpenSucceeded, (...e) => o(this, void 0, void 0, function* () {
                this.updateTrackList()
            }))
        }

        updateTrackList() {
            return o(this, void 0, void 0, function* () {
                let e = yield d.CommonNS.callXmp(s.XmpPlayerFunction.getConfig, c.APlayerConfigId.CONFIGID_AUDIOTRACKLIST);
                if (f.information("trackList", e), "" !== e) {
                    this.trackList = e.split(";");
                    let t = yield d.CommonNS.callXmp(s.XmpPlayerFunction.getConfig, c.APlayerConfigId.CONFIGID_AUDIOTRACKCURRENT);
                    f.information("trackList", this.trackList, "currentTrack:", t), this.currentTrackIndex = Number(t)
                } else this.trackList = [], this.currentTrackIndex = -1
            })
        }

        selectTrack(e) {
            this.currentTrackIndex = e, d.CommonNS.callXmp(s.XmpPlayerFunction.setAudioTrack, e).catch(), this.clearPopupMenu(), this.trackEventPlayerFunctionClick("button=track").catch()
        }

        get isEmbed() {
            return "embed" === this.argsObj.show
        }

        trackEventPlayerFunctionClick(e) {
            return o(this, void 0, void 0, function* () {
                let t = I.ThunderHelper.getTickCount();
                e = `${e},components_type=${this.isEmbed ? "embed" : "independent"}`, e += `,gcid=${yield d.CommonNS.getCurrentTaskGcid()}`, e += `,playid=${yield d.CommonNS.callXmp(s.XmpPlayerFunction.getPlayId)}`, e += `,pos=${Math.floor((yield d.CommonNS.callXmp(s.XmpPlayerFunction.getPosition)) / 1e3)}`;
                let n = yield d.CommonNS.callXmp(s.XmpPlayerFunction.getPlayTick, t);
                e += `,start_tick=${n[0]},currnet_tick=${n[1]}`, e += `,vip_type=${h.default.vipType}`, a.client.callServerFunction("TrackEvent", "core_event", "player_function_click", "", 0, 0, 0, 0, e).catch()
            })
        }
    };
    i([r.Prop({})], C.prototype, "argsObj", void 0), C = i([r.Component], C), t.default = C
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(159), o = n.n(i);
    for (var r in i) ["default"].indexOf(r) < 0 && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, n, a) : o(t, n)) || a);
        return r > 3 && a && Object.defineProperty(t, n, a), a
    }, o = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(12), a = n(121), s = n(1), l = n(31), c = n(74), u = n(345), d = n(18),
        p = n(0).default.getLogger("subtitle"), h = n(125), I = n(5), f = n(134), C = n(42), m = n(26), S = n(38);
    let E = class extends a.MenuHandleVue {
        constructor() {
            super(...arguments), this.localSubtitleList = [], this.embedSubtitleList = [], this.onlineSubtitleList = [], this.currentSubtitle = null, this.isSubtitleHided = !1, this.isSubtitleLoading = !1
        }

        created() {
            return o(this, void 0, void 0, function* () {
                this.onSubtitleInit().catch(), s.client.attachServerEvent(c.XmpEvent.onSubtitleInit, (...e) => o(this, void 0, void 0, function* () {
                    p.information("onSubtitleInit"), this.onSubtitleInit().catch()
                })), s.client.attachServerEvent(c.XmpEvent.onSubtitleUnInit, () => {
                    p.information("onSubtitleUnInit"), this.embedSubtitleList = [], this.onlineSubtitleList = [], this.localSubtitleList = [], this.currentSubtitle = null, this.isSubtitleLoading = !1, this.isSubtitleHided = !1
                }), s.client.attachServerEvent(u.SubtitleEvent.LoadSucceed, () => o(this, void 0, void 0, function* () {
                    this.currentSubtitle = yield s.client.callServerFunction(d.SubtitleFunction.getCurrentTitle)
                }))
            })
        }

        get currentSubtitleType() {
            return this.currentSubtitle ? this.currentSubtitle.type : u.SubtitleType.None
        }

        get currentSubtitleIndex() {
            return this.currentSubtitle ? this.currentSubtitle.type === u.SubtitleType.Embed ? this.currentSubtitle.languageIndex : this.currentSubtitle.index : 0
        }

        get isEnableHideSubtitle() {
            return !!this.currentSubtitle
        }

        get filterEmbedSubtitleList() {
            let e = [], t = this.embedSubtitleList[0];
            if (void 0 !== t && null !== t) for (let n of t.languageList) {
                let i = Object.assign({}, t);
                i.name = n, e.push(i)
            }
            return e
        }

        loadSubtitle(e, t = -1) {
            p.information("### loadSubtitle", JSON.stringify(e), t), -1 !== t && (e.type === u.SubtitleType.Embed ? s.client.callServerFunction(d.SubtitleFunction.loadEmbedSubtitle, t) : e.type === u.SubtitleType.Online ? s.client.callServerFunction(d.SubtitleFunction.loadOnlineSubtitle, t) : s.client.callServerFunction(d.SubtitleFunction.loadLocalSubtitle, t), this.isSubtitleHided && this.showOrHideSubtitle(), this.clearPopupMenu())
        }

        showOrHideSubtitle() {
            this.isEnableHideSubtitle && (s.client.callServerFunction(d.SubtitleFunction.showOrHideSubtitle, this.isSubtitleHided), this.isSubtitleHided = !this.isSubtitleHided, this.clearPopupMenu())
        }

        loadEmbedSubtitle(e) {
            s.client.callServerFunction(d.SubtitleFunction.loadEmbedSubtitle, e), this.clearPopupMenu()
        }

        manualLoadSubtitle(e = !0) {
            return o(this, void 0, void 0, function* () {
                if (p.information("### manualLoadSubtitle", e), !e && this.localSubtitleList.length > 0) return;
                yield s.client.callServerFunction(d.SubtitleFunction.loadSubtitle);
                let t = yield s.client.callServerFunction(d.SubtitleFunction.getLocalSubtitleList);
                this.localSubtitleList = t.concat(yield s.client.callServerFunction(d.SubtitleFunction.getManualSubtitleList)), this.isSubtitleHided && this.showOrHideSubtitle(), this.clearPopupMenu()
            })
        }

        getPathText(e) {
            let t = e.split("/"), n = t[t.length - 1];
            return n.length > 20 ? "..." + n.slice(n.length - 20) : n
        }

        rematchSubtitle() {
            return o(this, void 0, void 0, function* () {
                this.isSubtitleLoading = !0, this.onlineSubtitleList = [], yield s.client.callServerFunction(d.SubtitleFunction.onlineSubtitleMatch), this.onlineSubtitleList = (yield s.client.callServerFunction(d.SubtitleFunction.getOnlineSubtitleList)) || [], this.isSubtitleLoading = !1, this.clearPopupMenu()
            })
        }

        onSubtitleInit() {
            return o(this, void 0, void 0, function* () {
                this.isSubtitleLoading = !0, this.embedSubtitleList = yield s.client.callServerFunction(d.SubtitleFunction.getEmbedSubtitleList), this.onlineSubtitleList = (yield s.client.callServerFunction(d.SubtitleFunction.getOnlineSubtitleList)) || [], this.localSubtitleList = yield s.client.callServerFunction(d.SubtitleFunction.getLocalSubtitleList), this.localSubtitleList = this.localSubtitleList.concat(yield s.client.callServerFunction(d.SubtitleFunction.getManualSubtitleList)), this.currentSubtitle = yield s.client.callServerFunction(d.SubtitleFunction.getCurrentTitle), this.isSubtitleHided = yield s.client.callServerFunction(d.SubtitleFunction.isSubtitleHided), this.isSubtitleLoading = !1
            })
        }

        get isEmbed() {
            return "embed" === this.argsObj.show
        }

        onClickSbutitleSetting() {
            return o(this, void 0, void 0, function* () {
                if (!this.isEnableHideSubtitle || this.isSubtitleHided) return;
                this.trackEventPlayerFunctionClick("button=subtitle_adjust").catch();
                let e = yield C.rpc.getCurrentWindow(), t = yield m.ThunderHelper.getBrowserWindowHandle(e),
                    n = m.ThunderHelper.getWindowRect(t), i = n.x + (n.width - 326) / 2, o = n.y + (n.height - 180) / 2;
                i + 326 > screen.availWidth && (i = screen.availWidth - 326), i < 0 && (i = 0), o + 180 > screen.height && (o = screen.availHeight - 180), o < 0 && (o = 0);
                let r = I.join(__rootDir, "plugins\\XmpPlugin", f.default.pluginVersion);
                h.MessageBox.custom("SubtitleSetting", {singleton: !0, size: "large"}, {
                    x: Math.floor(i),
                    y: Math.floor(o),
                    width: 326,
                    height: 180,
                    title: "字幕设置",
                    icon: `${r}/static/xmp.ico`
                }).catch(), this.clearPopupMenu()
            })
        }

        trackEventPlayerFunctionClick(e) {
            return o(this, void 0, void 0, function* () {
                let t = m.ThunderHelper.getTickCount();
                e = `${e},components_type=${this.isEmbed ? "embed" : "independent"}`, e += `,gcid=${yield l.CommonNS.getCurrentTaskGcid()}`, e += `,playid=${yield l.CommonNS.callXmp(d.XmpPlayerFunction.getPlayId)}`, e += `,pos=${Math.floor((yield l.CommonNS.callXmp(d.XmpPlayerFunction.getPosition)) / 1e3)}`;
                let n = yield l.CommonNS.callXmp(d.XmpPlayerFunction.getPlayTick, t);
                e += `,start_tick=${n[0]},currnet_tick=${n[1]}`, e += `,vip_type=${S.default.vipType}`, s.client.callServerFunction("TrackEvent", "core_event", "player_function_click", "", 0, 0, 0, 0, e).catch()
            })
        }
    };
    i([r.Prop({})], E.prototype, "argsObj", void 0), E = i([r.Component], E), t.default = E
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(161), o = n.n(i);
    for (var r in i) ["default"].indexOf(r) < 0 && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, n, a) : o(t, n)) || a);
        return r > 3 && a && Object.defineProperty(t, n, a), a
    }, o = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(12), a = n(121), s = n(208), l = n(31), c = n(38), u = n(249), d = n(50), p = n(1), h = n(213),
        I = n(134);
    let f = class extends a.MenuHandleVue {
        constructor() {
            super(...arguments), this.setTaskVideoByteRatioTimer = null, this.speedMenuSatte = u.VipMenuNS.SpeedMenuTryState.refuse
        }

        get isEmbed() {
            return "embed" === this.argsObj.show
        }

        trackSpeed() {
            s.StatUtilitiesNS.trackPlayerClick("play_speed", this.isEmbed)
        }

        created() {
            return o(this, void 0, void 0, function* () {
                p.client.attachServerEvent(u.VipMenuNS.SpeedMenuEvent.stateChange, this.speedMenuStateChange.bind(this)), this.speedMenuSatte = yield l.CommonNS.callXmp("GetTrySpeedState")
            })
        }

        clickSpeed(e) {
            return o(this, void 0, void 0, function* () {
                this.addDelaydelPopupMenu("speed", 0), yield this.changeSpeed(e), this.$emit("change-speed", e)
            })
        }

        isVipSpeed(e) {
            return this.isYunBo ? e > 1 : e >= 2
        }

        changeSpeed(e) {
            return o(this, void 0, void 0, function* () {
                (Number(e) > 100 && this.isYunBo || Number(e) >= 200 && !this.isYunBo) && s.StatUtilitiesNS.trackSpeedClick(e, this.isEmbed, c.default.vipType, yield l.CommonNS.getStatPlayfrom(), yield l.CommonNS.getStatPlayType(), yield l.CommonNS.getCurrentTaskGcid());
                let t = "";
                switch (e) {
                    case"300":
                        t = "play_speed_3";
                        break;
                    case"200":
                        t = "play_speed_2";
                        break;
                    case"175":
                        t = "play_speed_1.75";
                        break;
                    case"150":
                        t = "play_speed_1.5";
                        break;
                    case"125":
                        t = "play_speed_1.25";
                        break;
                    case"100":
                        t = "play_speed_1";
                        break;
                    case"75":
                        t = "play_speed_0.75";
                        break;
                    case"50":
                        t = "play_speed_0.5"
                }
                s.StatUtilitiesNS.trackPlayerClick(t, this.isEmbed), (yield u.VipMenuNS.clickSpeedMenu(e, this.isYunBo, this.playSpeed)) && (yield l.CommonNS.callXmp(d.XmpPlayerFunction.setPlaySpeed, e), this.setTaskVideoByteRatio(Number(e), this.panFileId))
            })
        }

        setTaskVideoByteRatio(e, t) {
            this.clearTimer(this.setTaskVideoByteRatioTimer), this.setTaskVideoByteRatioTimer = setInterval(() => o(this, void 0, void 0, function* () {
                do {
                    if (!t || "" === t) {
                        this.clearTimer(this.setTaskVideoByteRatioTimer);
                        break
                    }
                    let n = Number(yield l.CommonNS.callXmp(d.XmpPlayerFunction.getConfig, h.APlayerConfigId.CONFIGID_FILESIZE)),
                        i = Number(yield l.CommonNS.callXmp(d.XmpPlayerFunction.getDuration));
                    if (0 === n || 0 === i || 0 === e) break;
                    let o = n / (i / 1e3) * e / 100;
                    yield p.client.callServerFunction("SetTaskVideoByteRatio", void 0, -1, o, t), this.clearTimer(this.setTaskVideoByteRatioTimer)
                } while (0)
            }), 5e3)
        }

        clearTimer(e) {
            e && (clearInterval(e), e = null)
        }

        speedMenuStateChange(e, t) {
            this.speedMenuSatte = t
        }

        menuItemImage(e) {
            let t = window.__rootDir + "/plugins/XmpPlugin/" + I.default.pluginVersion + "/static/menu/", n = "";
            switch (n = "3.0" === e ? "icon-svip.png" : "icon-vip.png", this.speedMenuSatte) {
                case u.VipMenuNS.SpeedMenuTryState.ready:
                    "3.0" === e ? c.default.isSuperVip || (n = "icon-try.png") : c.default.isVip || (n = "icon-try.png");
                    break;
                case u.VipMenuNS.SpeedMenuTryState.running:
                    "3.0" === e ? c.default.isSuperVip || (n = "icon-trying.png") : c.default.isVip || (n = "icon-trying.png")
            }
            return t + n
        }
    };
    i([r.Prop({})], f.prototype, "argsObj", void 0), i([r.Prop({})], f.prototype, "isYunBo", void 0), i([r.Prop({})], f.prototype, "playSpeed", void 0), i([r.Prop({default: ""})], f.prototype, "panFileId", void 0), f = i([r.Component({})], f), t.default = f
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(163), o = n.n(i);
    for (var r in i) ["default"].indexOf(r) < 0 && function (e) {
        n.d(t, e, function () {
            return i[e]
        })
    }(r);
    t.default = o.a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__decorate || function (e, t, n, i) {
        var o, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(t, n, a) : o(t, n)) || a);
        return r > 3 && a && Object.defineProperty(t, n, a), a
    }, o = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = n(12), a = n(1), s = n(20), l = n(18), c = n(26), u = n(42);
    let d = class extends r.Vue {
        constructor() {
            super(...arguments), this.pointerHead = null, this.rectWnd = null, this.thisWindow = null, this.hwndMain = 0, this.hwndThis = 0, this.drag = !1
        }

        onSwitchToLocal() {
            return o(this, void 0, void 0, function* () {
                a.client.callRemoteClientFunction(s.mainRendererContext, l.XmpPlayerFunction.disConnectDLNA).catch()
            })
        }

        created() {
            return o(this, void 0, void 0, function* () {
                this.thisWindow = yield u.rpc.getCurrentWindow(), this.hwndMain = yield c.ThunderHelper.getBrowserWindowHandle(yield this.thisWindow.getParentWindow()), this.hwndThis = yield c.ThunderHelper.getBrowserWindowHandle(this.thisWindow)
            })
        }

        onHeadDown(e) {
            let t = e.srcElement.className;
            -1 === t.indexOf("xmpc-player-operate") && -1 === t.indexOf("td-button") && -1 === t.indexOf("xmpc-icon") && (this.pointerHead = e, e.currentTarget.setPointerCapture(e.pointerId), this.rectWnd = c.ThunderHelper.getWindowRect(this.hwndMain), this.drag = !0)
        }

        onHeadUp(e) {
            if (this.pointerHead) {
                this.pointerHead = null, e.currentTarget.releasePointerCapture(e.pointerId), this.drag = !1
            }
        }

        onHeadMove(e) {
            if (!this.pointerHead) return;
            let t = 1;
            t = c.ThunderHelper.getDPIAwareSupport() ? c.ThunderHelper.getMonitorDPIFactor(this.hwndMain) : c.ThunderHelper.getSysDPIFactor();
            let n = {x: 0, y: 0};
            n.x = e.screenX - this.pointerHead.screenX, n.y = e.screenY - this.pointerHead.screenY;
            let i = {
                x: Math.floor(this.rectWnd.x + n.x * t),
                y: Math.floor(this.rectWnd.y + n.y * t),
                width: Math.floor(this.rectWnd.width),
                height: Math.floor(this.rectWnd.height)
            };
            c.ThunderHelper.moveWindow(this.hwndMain, i), c.ThunderHelper.moveWindow(this.hwndThis, i)
        }
    };
    i([r.Prop()], d.prototype, "deviceName", void 0), d = i([r.Component], d), t.default = d
}, , , , , , function (e, t) {
    e.exports = require("crypto")
}, function (e, t, n) {
    n(171);
    var i = n(3).Object;
    e.exports = function (e, t, n) {
        return i.defineProperty(e, t, n)
    }
}, function (e, t, n) {
    var i = n(13);
    i(i.S + i.F * !n(16), "Object", {defineProperty: n(14).f})
}, function (e, t, n) {
    n(108), n(56), n(72), n(182), n(190), n(191), e.exports = n(3).Promise
}, function (e, t, n) {
    var i = n(66), o = n(67);
    e.exports = function (e) {
        return function (t, n) {
            var r, a, s = String(o(t)), l = i(n), c = s.length;
            return l < 0 || l >= c ? e ? "" : void 0 : (r = s.charCodeAt(l)) < 55296 || r > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : r : e ? s.slice(l, l + 2) : a - 56320 + (r - 55296 << 10) + 65536
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = n(68), o = n(44), r = n(49), a = {};
    n(21)(a, n(7)("iterator"), function () {
        return this
    }), e.exports = function (e, t, n) {
        e.prototype = i(a, {next: o(1, n)}), r(e, t + " Iterator")
    }
}, function (e, t, n) {
    var i = n(14), o = n(15), r = n(47);
    e.exports = n(16) ? Object.defineProperties : function (e, t) {
        o(e);
        for (var n, a = r(t), s = a.length, l = 0; s > l;) i.f(e, n = a[l++], t[n]);
        return e
    }
}, function (e, t, n) {
    var i = n(28), o = n(85), r = n(177);
    e.exports = function (e) {
        return function (t, n, a) {
            var s, l = i(t), c = o(l.length), u = r(a, c);
            if (e && n != n) {
                for (; c > u;) if ((s = l[u++]) != s) return !0
            } else for (; c > u; u++) if ((e || u in l) && l[u] === n) return e || u || 0;
            return !e && -1
        }
    }
}, function (e, t, n) {
    var i = n(66), o = Math.max, r = Math.min;
    e.exports = function (e, t) {
        return (e = i(e)) < 0 ? o(e + t, 0) : r(e, t)
    }
}, function (e, t, n) {
    var i = n(22), o = n(57), r = n(69)("IE_PROTO"), a = Object.prototype;
    e.exports = Object.getPrototypeOf || function (e) {
        return e = o(e), i(e, r) ? e[r] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
    }
}, function (e, t, n) {
    "use strict";
    var i = n(180), o = n(181), r = n(30), a = n(28);
    e.exports = n(109)(Array, "Array", function (e, t) {
        this._t = a(e), this._i = 0, this._k = t
    }, function () {
        var e = this._t, t = this._k, n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
    }, "values"), r.Arguments = r.Array, i("keys"), i("values"), i("entries")
}, function (e, t) {
    e.exports = function () {
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {value: t, done: !!e}
    }
}, function (e, t, n) {
    "use strict";
    var i, o, r, a, s = n(36), l = n(6), c = n(43), u = n(86), d = n(13), p = n(19), h = n(46), I = n(183), f = n(184),
        C = n(114), m = n(115).set, S = n(186)(), E = n(73), O = n(116), _ = n(187), g = n(117), T = l.TypeError,
        D = l.process, y = D && D.versions, N = y && y.v8 || "", v = l.Promise, P = "process" == u(D), F = function () {
        }, A = o = E.f, b = !!function () {
            try {
                var e = v.resolve(1), t = (e.constructor = {})[n(7)("species")] = function (e) {
                    e(F, F)
                };
                return (P || "function" == typeof PromiseRejectionEvent) && e.then(F) instanceof t && 0 !== N.indexOf("6.6") && -1 === _.indexOf("Chrome/66")
            } catch (e) {
            }
        }(), R = function (e) {
            var t;
            return !(!p(e) || "function" != typeof (t = e.then)) && t
        }, w = function (e, t) {
            if (!e._n) {
                e._n = !0;
                var n = e._c;
                S(function () {
                    for (var i = e._v, o = 1 == e._s, r = 0, a = function (t) {
                        var n, r, a, s = o ? t.ok : t.fail, l = t.resolve, c = t.reject, u = t.domain;
                        try {
                            s ? (o || (2 == e._h && L(e), e._h = 1), !0 === s ? n = i : (u && u.enter(), n = s(i), u && (u.exit(), a = !0)), n === t.promise ? c(T("Promise-chain cycle")) : (r = R(n)) ? r.call(n, l, c) : l(n)) : c(i)
                        } catch (e) {
                            u && !a && u.exit(), c(e)
                        }
                    }; n.length > r;) a(n[r++]);
                    e._c = [], e._n = !1, t && !e._h && M(e)
                })
            }
        }, M = function (e) {
            m.call(l, function () {
                var t, n, i, o = e._v, r = G(e);
                if (r && (t = O(function () {
                    P ? D.emit("unhandledRejection", o, e) : (n = l.onunhandledrejection) ? n({
                        promise: e,
                        reason: o
                    }) : (i = l.console) && i.error && i.error("Unhandled promise rejection", o)
                }), e._h = P || G(e) ? 2 : 1), e._a = void 0, r && t.e) throw t.v
            })
        }, G = function (e) {
            return 1 !== e._h && 0 === (e._a || e._c).length
        }, L = function (e) {
            m.call(l, function () {
                var t;
                P ? D.emit("rejectionHandled", e) : (t = l.onrejectionhandled) && t({promise: e, reason: e._v})
            })
        }, k = function (e) {
            var t = this;
            t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), w(t, !0))
        }, x = function (e) {
            var t, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === e) throw T("Promise can't be resolved itself");
                    (t = R(e)) ? S(function () {
                        var i = {_w: n, _d: !1};
                        try {
                            t.call(e, c(x, i, 1), c(k, i, 1))
                        } catch (e) {
                            k.call(i, e)
                        }
                    }) : (n._v = e, n._s = 1, w(n, !1))
                } catch (e) {
                    k.call({_w: n, _d: !1}, e)
                }
            }
        };
    b || (v = function (e) {
        I(this, v, "Promise", "_h"), h(e), i.call(this);
        try {
            e(c(x, this, 1), c(k, this, 1))
        } catch (e) {
            k.call(this, e)
        }
    }, (i = function (e) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = n(188)(v.prototype, {
        then: function (e, t) {
            var n = A(C(this, v));
            return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = P ? D.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && w(this, !1), n.promise
        }, catch: function (e) {
            return this.then(void 0, e)
        }
    }), r = function () {
        var e = new i;
        this.promise = e, this.resolve = c(x, e, 1), this.reject = c(k, e, 1)
    }, E.f = A = function (e) {
        return e === v || e === a ? new r(e) : o(e)
    }), d(d.G + d.W + d.F * !b, {Promise: v}), n(49)(v, "Promise"), n(189)("Promise"), a = n(3).Promise, d(d.S + d.F * !b, "Promise", {
        reject: function (e) {
            var t = A(this);
            return (0, t.reject)(e), t.promise
        }
    }), d(d.S + d.F * (s || !b), "Promise", {
        resolve: function (e) {
            return g(s && this === a ? v : this, e)
        }
    }), d(d.S + d.F * !(b && n(132)(function (e) {
        v.all(e).catch(F)
    })), "Promise", {
        all: function (e) {
            var t = this, n = A(t), i = n.resolve, o = n.reject, r = O(function () {
                var n = [], r = 0, a = 1;
                f(e, !1, function (e) {
                    var s = r++, l = !1;
                    n.push(void 0), a++, t.resolve(e).then(function (e) {
                        l || (l = !0, n[s] = e, --a || i(n))
                    }, o)
                }), --a || i(n)
            });
            return r.e && o(r.v), n.promise
        }, race: function (e) {
            var t = this, n = A(t), i = n.reject, o = O(function () {
                f(e, !1, function (e) {
                    t.resolve(e).then(n.resolve, i)
                })
            });
            return o.e && i(o.v), n.promise
        }
    })
}, function (e, t) {
    e.exports = function (e, t, n, i) {
        if (!(e instanceof t) || void 0 !== i && i in e) throw TypeError(n + ": incorrect invocation!");
        return e
    }
}, function (e, t, n) {
    var i = n(43), o = n(130), r = n(131), a = n(15), s = n(85), l = n(113), c = {}, u = {};
    (t = e.exports = function (e, t, n, d, p) {
        var h, I, f, C, m = p ? function () {
            return e
        } : l(e), S = i(n, d, t ? 2 : 1), E = 0;
        if ("function" != typeof m) throw TypeError(e + " is not iterable!");
        if (r(m)) {
            for (h = s(e.length); h > E; E++) if ((C = t ? S(a(I = e[E])[0], I[1]) : S(e[E])) === c || C === u) return C
        } else for (f = m.call(e); !(I = f.next()).done;) if ((C = o(f, S, I.value, t)) === c || C === u) return C
    }).BREAK = c, t.RETURN = u
}, function (e, t) {
    e.exports = function (e, t, n) {
        var i = void 0 === n;
        switch (t.length) {
            case 0:
                return i ? e() : e.call(n);
            case 1:
                return i ? e(t[0]) : e.call(n, t[0]);
            case 2:
                return i ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
                return i ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
                return i ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    }
}, function (e, t, n) {
    var i = n(6), o = n(115).set, r = i.MutationObserver || i.WebKitMutationObserver, a = i.process, s = i.Promise,
        l = "process" == n(37)(a);
    e.exports = function () {
        var e, t, n, c = function () {
            var i, o;
            for (l && (i = a.domain) && i.exit(); e;) {
                o = e.fn, e = e.next;
                try {
                    o()
                } catch (i) {
                    throw e ? n() : t = void 0, i
                }
            }
            t = void 0, i && i.enter()
        };
        if (l) n = function () {
            a.nextTick(c)
        }; else if (!r || i.navigator && i.navigator.standalone) if (s && s.resolve) {
            var u = s.resolve(void 0);
            n = function () {
                u.then(c)
            }
        } else n = function () {
            o.call(i, c)
        }; else {
            var d = !0, p = document.createTextNode("");
            new r(c).observe(p, {characterData: !0}), n = function () {
                p.data = d = !d
            }
        }
        return function (i) {
            var o = {fn: i, next: void 0};
            t && (t.next = o), e || (e = o, n()), t = o
        }
    }
}, function (e, t, n) {
    var i = n(6).navigator;
    e.exports = i && i.userAgent || ""
}, function (e, t, n) {
    var i = n(21);
    e.exports = function (e, t, n) {
        for (var o in t) n && e[o] ? e[o] = t[o] : i(e, o, t[o]);
        return e
    }
}, function (e, t, n) {
    "use strict";
    var i = n(6), o = n(3), r = n(14), a = n(16), s = n(7)("species");
    e.exports = function (e) {
        var t = "function" == typeof o[e] ? o[e] : i[e];
        a && t && !t[s] && r.f(t, s, {
            configurable: !0, get: function () {
                return this
            }
        })
    }
}, function (e, t, n) {
    "use strict";
    var i = n(13), o = n(3), r = n(6), a = n(114), s = n(117);
    i(i.P + i.R, "Promise", {
        finally: function (e) {
            var t = a(this, o.Promise || r.Promise), n = "function" == typeof e;
            return this.then(n ? function (n) {
                return s(t, e()).then(function () {
                    return n
                })
            } : e, n ? function (n) {
                return s(t, e()).then(function () {
                    throw n
                })
            } : e)
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(13), o = n(73), r = n(116);
    i(i.S, "Promise", {
        try: function (e) {
            var t = o.f(this), n = r(e);
            return (n.e ? t.reject : t.resolve)(n.v), t.promise
        }
    })
}, function (e, t, n) {
    e.exports = {default: n(193), __esModule: !0}
}, function (e, t, n) {
    n(56), n(72), e.exports = n(75).f("iterator")
}, function (e, t, n) {
    e.exports = {default: n(195), __esModule: !0}
}, function (e, t, n) {
    n(196), n(108), n(201), n(202), e.exports = n(3).Symbol
}, function (e, t, n) {
    "use strict";
    var i = n(6), o = n(22), r = n(16), a = n(13), s = n(110), l = n(133).KEY, c = n(35), u = n(70), d = n(49),
        p = n(48), h = n(7), I = n(75), f = n(76), C = n(197), m = n(198), S = n(15), E = n(19), O = n(57), _ = n(28),
        g = n(65), T = n(44), D = n(68), y = n(199), N = n(200), v = n(87), P = n(14), F = n(47), A = N.f, b = P.f,
        R = y.f, w = i.Symbol, M = i.JSON, G = M && M.stringify, L = h("_hidden"), k = h("toPrimitive"),
        x = {}.propertyIsEnumerable, U = u("symbol-registry"), B = u("symbols"), V = u("op-symbols"),
        W = Object.prototype, X = "function" == typeof w && !!v.f, H = i.QObject,
        j = !H || !H.prototype || !H.prototype.findChild, K = r && c(function () {
            return 7 != D(b({}, "a", {
                get: function () {
                    return b(this, "a", {value: 7}).a
                }
            })).a
        }) ? function (e, t, n) {
            var i = A(W, t);
            i && delete W[t], b(e, t, n), i && e !== W && b(W, t, i)
        } : b, Y = function (e) {
            var t = B[e] = D(w.prototype);
            return t._k = e, t
        }, Z = X && "symbol" == typeof w.iterator ? function (e) {
            return "symbol" == typeof e
        } : function (e) {
            return e instanceof w
        }, z = function (e, t, n) {
            return e === W && z(V, t, n), S(e), t = g(t, !0), S(n), o(B, t) ? (n.enumerable ? (o(e, L) && e[L][t] && (e[L][t] = !1), n = D(n, {enumerable: T(0, !1)})) : (o(e, L) || b(e, L, T(1, {})), e[L][t] = !0), K(e, t, n)) : b(e, t, n)
        }, J = function (e, t) {
            S(e);
            for (var n, i = C(t = _(t)), o = 0, r = i.length; r > o;) z(e, n = i[o++], t[n]);
            return e
        }, q = function (e) {
            var t = x.call(this, e = g(e, !0));
            return !(this === W && o(B, e) && !o(V, e)) && (!(t || !o(this, e) || !o(B, e) || o(this, L) && this[L][e]) || t)
        }, Q = function (e, t) {
            if (e = _(e), t = g(t, !0), e !== W || !o(B, t) || o(V, t)) {
                var n = A(e, t);
                return !n || !o(B, t) || o(e, L) && e[L][t] || (n.enumerable = !0), n
            }
        }, $ = function (e) {
            for (var t, n = R(_(e)), i = [], r = 0; n.length > r;) o(B, t = n[r++]) || t == L || t == l || i.push(t);
            return i
        }, ee = function (e) {
            for (var t, n = e === W, i = R(n ? V : _(e)), r = [], a = 0; i.length > a;) !o(B, t = i[a++]) || n && !o(W, t) || r.push(B[t]);
            return r
        };
    X || (s((w = function () {
        if (this instanceof w) throw TypeError("Symbol is not a constructor!");
        var e = p(arguments.length > 0 ? arguments[0] : void 0), t = function (n) {
            this === W && t.call(V, n), o(this, L) && o(this[L], e) && (this[L][e] = !1), K(this, e, T(1, n))
        };
        return r && j && K(W, e, {configurable: !0, set: t}), Y(e)
    }).prototype, "toString", function () {
        return this._k
    }), N.f = Q, P.f = z, n(118).f = y.f = $, n(58).f = q, v.f = ee, r && !n(36) && s(W, "propertyIsEnumerable", q, !0), I.f = function (e) {
        return Y(h(e))
    }), a(a.G + a.W + a.F * !X, {Symbol: w});
    for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) h(te[ne++]);
    for (var ie = F(h.store), oe = 0; ie.length > oe;) f(ie[oe++]);
    a(a.S + a.F * !X, "Symbol", {
        for: function (e) {
            return o(U, e += "") ? U[e] : U[e] = w(e)
        }, keyFor: function (e) {
            if (!Z(e)) throw TypeError(e + " is not a symbol!");
            for (var t in U) if (U[t] === e) return t
        }, useSetter: function () {
            j = !0
        }, useSimple: function () {
            j = !1
        }
    }), a(a.S + a.F * !X, "Object", {
        create: function (e, t) {
            return void 0 === t ? D(e) : J(D(e), t)
        },
        defineProperty: z,
        defineProperties: J,
        getOwnPropertyDescriptor: Q,
        getOwnPropertyNames: $,
        getOwnPropertySymbols: ee
    });
    var re = c(function () {
        v.f(1)
    });
    a(a.S + a.F * re, "Object", {
        getOwnPropertySymbols: function (e) {
            return v.f(O(e))
        }
    }), M && a(a.S + a.F * (!X || c(function () {
        var e = w();
        return "[null]" != G([e]) || "{}" != G({a: e}) || "{}" != G(Object(e))
    })), "JSON", {
        stringify: function (e) {
            for (var t, n, i = [e], o = 1; arguments.length > o;) i.push(arguments[o++]);
            if (n = t = i[1], (E(t) || void 0 !== e) && !Z(e)) return m(t) || (t = function (e, t) {
                if ("function" == typeof n && (t = n.call(this, e, t)), !Z(t)) return t
            }), i[1] = t, G.apply(M, i)
        }
    }), w.prototype[k] || n(21)(w.prototype, k, w.prototype.valueOf), d(w, "Symbol"), d(Math, "Math", !0), d(i.JSON, "JSON", !0)
}, function (e, t, n) {
    var i = n(47), o = n(87), r = n(58);
    e.exports = function (e) {
        var t = i(e), n = o.f;
        if (n) for (var a, s = n(e), l = r.f, c = 0; s.length > c;) l.call(e, a = s[c++]) && t.push(a);
        return t
    }
}, function (e, t, n) {
    var i = n(37);
    e.exports = Array.isArray || function (e) {
        return "Array" == i(e)
    }
}, function (e, t, n) {
    var i = n(28), o = n(118).f, r = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    e.exports.f = function (e) {
        return a && "[object Window]" == r.call(e) ? function (e) {
            try {
                return o(e)
            } catch (e) {
                return a.slice()
            }
        }(e) : o(i(e))
    }
}, function (e, t, n) {
    var i = n(58), o = n(44), r = n(28), a = n(65), s = n(22), l = n(107), c = Object.getOwnPropertyDescriptor;
    t.f = n(16) ? c : function (e, t) {
        if (e = r(e), t = a(t, !0), l) try {
            return c(e, t)
        } catch (e) {
        }
        if (s(e, t)) return o(!i.f.call(e, t), e[t])
    }
}, function (e, t, n) {
    n(76)("asyncIterator")
}, function (e, t, n) {
    n(76)("observable")
}, function (e, t, n) {
    n(204);
    var i = n(3).Object;
    e.exports = function (e, t) {
        return i.create(e, t)
    }
}, function (e, t, n) {
    var i = n(13);
    i(i.S, "Object", {create: n(68)})
}, function (e, t, n) {
    "use strict";
    var i = n(367);
    n.n(i).a
}, function (e, t, n) {
    "use strict";
    var i = n(371);
    n.n(i).a
}, , function (e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0}), t.StatUtilitiesNS = void 0;
    const o = n(18), r = n(26), a = n(293), s = n(1), l = n(0).default.getLogger("track-stat");
    !function (e) {
        function t(e, t) {
            let n = (t = t || {}).attribute1 || "", i = t.attribute2 || "", o = function (e) {
                let t = "";
                return e.forEach((e, n) => {
                    "" !== t && (t += ","), t = t + n + "=" + e
                }), t
            }(t.extData || new Map);
            l.information("key", e), l.information("attribute1", n), l.information("attribute2", i), l.information("extData", o), o = encodeURIComponent(o), l.information("encode extData", o), s.client.callServerFunction("TrackEvent", e, n, i, 0, 0, 0, 0, o).catch()
        }

        e.trackPlayerClick = function (e, n) {
            return i(this, void 0, void 0, function* () {
                let i = r.ThunderHelper.getTickCount(), s = new Map;
                s.set("button", e), s.set("components_type", n ? "embed" : "independent"), s.set("gcid", yield a.CommonNS.getCurrentTaskGcid()), s.set("playid", yield a.CommonNS.callXmp(o.XmpPlayerFunction.getPlayId)), s.set("pos", Math.floor((yield a.CommonNS.callXmp(o.XmpPlayerFunction.getPosition)) / 1e3));
                let l = yield a.CommonNS.callXmp(o.XmpPlayerFunction.getPlayTick, i);
                s.set("start_tick", l[0]), s.set("off_tick", l[1]), t("core_event", {
                    attribute1: "player_function_click",
                    extData: s
                })
            })
        }, e.trackDragSeekBar = function (e, n, s, l) {
            return i(this, void 0, void 0, function* () {
                let i = r.ThunderHelper.getTickCount(), c = new Map;
                c.set("button", e), c.set("components_type", l ? "embed" : "independent"), c.set("gcid", yield a.CommonNS.getCurrentTaskGcid()), c.set("playid", yield a.CommonNS.callXmp(o.XmpPlayerFunction.getPlayId)), c.set("pos_begin", n), c.set("pos_end", s);
                let u = yield a.CommonNS.callXmp(o.XmpPlayerFunction.getPlayTick, i);
                c.set("start_tick", u[0]), c.set("off_tick", u[1]), t("core_event", {
                    attribute1: "player_function_click",
                    extData: c
                })
            })
        }, e.trackOpenVipBtn = function (e, n, i, o, r) {
            let s = "core_event", l = new Map;
            l.set("play_from", e), l.set("components_type", n ? "embed" : "independent"), l.set("vip_type", i), l.set("btn_position", o);
            let c = {
                attribute1: r ? "player_video_load_open_yunbo_btn_show" : "player_video_load_open_yunbo_btn_click",
                extData: l
            };
            r ? a.CommonNS.trackShowEvnet(s, c.attribute1 + o, c.extData) : t(s, c)
        }, e.trackSpeedClick = function (e, n, i, o, r, a) {
            let s = new Map;
            Number(e) % 10 == 0 ? s.set("clickid", `speed_${(Number(e) / 100).toFixed(1)}`) : s.set("clickid", `speed_${(Number(e) / 100).toFixed(2)}`), s.set("play_from", o), s.set("vip_type", i), s.set("type", r), s.set("gcid", a), s.set("components_type", n ? "embed" : "independent"), t("core_event", {
                attribute1: "player_speed_option_click",
                extData: s
            })
        }, e.trackEvent = t
    }(t.StatUtilitiesNS || (t.StatUtilitiesNS = {}))
}, function (e, t, n) {
    e.exports = n(304)
}, function (e, t, n) {
    "use strict";
    var i = n(32), o = n(307), r = {"Content-Type": "application/x-www-form-urlencoded"};

    function a(e, t) {
        !i.isUndefined(e) && i.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
    }

    var s, l = {
        adapter: ("undefined" != typeof XMLHttpRequest ? s = n(120) : "undefined" != typeof process && (s = n(120)), s),
        transformRequest: [function (e, t) {
            return o(t, "Content-Type"), i.isFormData(e) || i.isArrayBuffer(e) || i.isBuffer(e) || i.isStream(e) || i.isFile(e) || i.isBlob(e) ? e : i.isArrayBufferView(e) ? e.buffer : i.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : i.isObject(e) ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
        }],
        transformResponse: [function (e) {
            if ("string" == typeof e) try {
                e = JSON.parse(e)
            } catch (e) {
            }
            return e
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        validateStatus: function (e) {
            return e >= 200 && e < 300
        }
    };
    l.headers = {common: {Accept: "application/json, text/plain, */*"}}, i.forEach(["delete", "get", "head"], function (e) {
        l.headers[e] = {}
    }), i.forEach(["post", "put", "patch"], function (e) {
        l.headers[e] = i.merge(r)
    }), e.exports = l
}, function (e, t) {
    var n = {}.toString;
    e.exports = Array.isArray || function (e) {
        return "[object Array]" == n.call(e)
    }
}, function (e, t) {
    t.L = {bit: 1}, t.M = {bit: 0}, t.Q = {bit: 3}, t.H = {bit: 2}, t.isValid = function (e) {
        return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4
    }, t.from = function (e, n) {
        if (t.isValid(e)) return e;
        try {
            return function (e) {
                if ("string" != typeof e) throw new Error("Param is not a string");
                switch (e.toLowerCase()) {
                    case"l":
                    case"low":
                        return t.L;
                    case"m":
                    case"medium":
                        return t.M;
                    case"q":
                    case"quartile":
                        return t.Q;
                    case"h":
                    case"high":
                        return t.H;
                    default:
                        throw new Error("Unknown EC Level: " + e)
                }
            }(e)
        } catch (e) {
            return n
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.APlayerEventCode = t.APlayerConfigId = void 0, function (e) {
        e[e.CONFIGID_APLAYERINFO = 1] = "CONFIGID_APLAYERINFO", e[e.CONFIGID_CODECSPATH = 2] = "CONFIGID_CODECSPATH", e[e.CONFIGID_CODECSDISABLELIST = 3] = "CONFIGID_CODECSDISABLELIST", e[e.CONFIGID_CURRENTURL = 4] = "CONFIGID_CURRENTURL", e[e.CONFIGID_FILESIZE = 5] = "CONFIGID_FILESIZE", e[e.CONFIGID_PLAYMODE = 6] = "CONFIGID_PLAYMODE", e[e.CONFIGID_PLAYRESULT = 7] = "CONFIGID_PLAYRESULT", e[e.CONFIGID_AUTOPLAY = 8] = "CONFIGID_AUTOPLAY", e[e.CONFIGID_USEOPENCHAIN = 9] = "CONFIGID_USEOPENCHAIN", e[e.CONFIGID_SOUNDDEVICELIST = 10] = "CONFIGID_SOUNDDEVICELIST", e[e.CONFIGID_SOUNDDEVICECURRENT = 11] = "CONFIGID_SOUNDDEVICECURRENT", e[e.CONFIGID_SOUNDSILENT = 12] = "CONFIGID_SOUNDSILENT", e[e.CONFIGID_SOUNDBALANCE = 13] = "CONFIGID_SOUNDBALANCE", e[e.CONFIGID_DISABLEVIDEO = 14] = "CONFIGID_DISABLEVIDEO", e[e.CONFIGID_DISABLEAUDIO = 15] = "CONFIGID_DISABLEAUDIO", e[e.CONFIGID_ENABLEVSFILTER = 16] = "CONFIGID_ENABLEVSFILTER", e[e.CONFIGID_ENABLEAUDIOSWITCHER = 17] = "CONFIGID_ENABLEAUDIOSWITCHER", e[e.CONFIGID_DOWNLOADCODECSYNC = 18] = "CONFIGID_DOWNLOADCODECSYNC", e[e.CONFIGID_DOWNLOADCODECCOMPLETED = 19] = "CONFIGID_DOWNLOADCODECCOMPLETED", e[e.CONFIGID_WINDOWHANDLE = 20] = "CONFIGID_WINDOWHANDLE", e[e.CONFIGID_WINDOWMOVED = 21] = "CONFIGID_WINDOWMOVED", e[e.CONFIGID_SETTINGEXPLAIN = 22] = "CONFIGID_SETTINGEXPLAIN", e[e.CONFIGID_SETTINGVALUES = 23] = "CONFIGID_SETTINGVALUES", e[e.CONFIGID_LOADPLUGIN = 24] = "CONFIGID_LOADPLUGIN", e[e.CONFIGID_FREEPLUGIN = 25] = "CONFIGID_FREEPLUGIN", e[e.CONFIGID_FLASHINTERACTION = 26] = "CONFIGID_FLASHINTERACTION", e[e.CONFIGID_INTELMEDIASDKDECODER = 27] = "CONFIGID_INTELMEDIASDKDECODER", e[e.CONFIGID_INTELMEDIASDKENCODER = 28] = "CONFIGID_INTELMEDIASDKENCODER", e[e.CONFIGID_READSIZE = 29] = "CONFIGID_READSIZE", e[e.CONFIGID_READOFFSET = 30] = "CONFIGID_READOFFSET", e[e.CONFIGID_READPOSITION = 31] = "CONFIGID_READPOSITION", e[e.CONFIGID_WRITEOFFSET = 32] = "CONFIGID_WRITEOFFSET", e[e.CONFIGID_ALLOWLOG = 33] = "CONFIGID_ALLOWLOG", e[e.CONFIGID_MEDIAINFO = 34] = "CONFIGID_MEDIAINFO", e[e.CONFIGID_PLUGINSTDCALL = 35] = "CONFIGID_PLUGINSTDCALL", e[e.CONFIGID_LOGOSETTINGS = 36] = "CONFIGID_LOGOSETTINGS", e[e.CONFIGID_LOGOFILE = 37] = "CONFIGID_LOGOFILE", e[e.CONFIGID_CUSTOMCURSOR = 38] = "CONFIGID_CUSTOMCURSOR", e[e.CONFIGID_READSPEED = 41] = "CONFIGID_READSPEED", e[e.CONFIGID_APLAYERDNN = 43] = "CONFIGID_APLAYERDNN", e[e.CONFIGID_ENABLELOG = 44] = "CONFIGID_ENABLELOG", e[e.CONFIGID_FISRTFRAMETIME = 45] = "CONFIGID_FISRTFRAMETIME", e[e.CONFIGID_SEEK_FRAME_TIME = 46] = "CONFIGID_SEEK_FRAME_TIME", e[e.CONFIGID_SEEK_FRAME_TIME_AVERAGE = 47] = "CONFIGID_SEEK_FRAME_TIME_AVERAGE", e[e.CONFIGID_AUTOPLAY_AFTERBUFFER = 48] = "CONFIGID_AUTOPLAY_AFTERBUFFER", e[e.CONFIGID_STAT = 50] = "CONFIGID_STAT", e[e.CONFIGID_TIMEISFRAME = 101] = "CONFIGID_TIMEISFRAME", e[e.CONFIGID_STARTPOSITION = 102] = "CONFIGID_STARTPOSITION", e[e.CONFIGID_STOPPOSITION = 103] = "CONFIGID_STOPPOSITION", e[e.CONFIGID_PLAYSPEED = 104] = "CONFIGID_PLAYSPEED", e[e.CONFIGID_KEYFRAMESEEK = 105] = "CONFIGID_KEYFRAMESEEK", e[e.CONFIGID_KEYFRAMECOUNT = 106] = "CONFIGID_KEYFRAMECOUNT", e[e.CONFIGID_KEYFRAMELIST = 107] = "CONFIGID_KEYFRAMELIST", e[e.CONFIGID_KEYFRAMECURRENT = 108] = "CONFIGID_KEYFRAMECURRENT", e[e.CONFIGID_CANFRAMESTEPFORWARDONE = 109] = "CONFIGID_CANFRAMESTEPFORWARDONE", e[e.CONFIGID_CANFRAMESTEPFORWARDMULTI = 110] = "CONFIGID_CANFRAMESTEPFORWARDMULTI", e[e.CONFIGID_CANFRAMESTEPBACKWORDKONE = 111] = "CONFIGID_CANFRAMESTEPBACKWORDKONE", e[e.CONFIGID_CANFRAMESTEPBACKWORDMULTI = 112] = "CONFIGID_CANFRAMESTEPBACKWORDMULTI", e[e.CONFIGID_FRAMESTEP = 113] = "CONFIGID_FRAMESTEP", e[e.CONFIGID_ISFRAMESTEPPING = 114] = "CONFIGID_ISFRAMESTEPPING", e[e.CONFIGID_READINDEXWHENOPEN = 115] = "CONFIGID_READINDEXWHENOPEN", e[e.CONFIGID_TIMEPOSITIONLIST = 116] = "CONFIGID_TIMEPOSITIONLIST", e[e.CONFIGID_FRAMEINTERVAL = 117] = "CONFIGID_FRAMEINTERVAL", e[e.CONFIGID_FRAMESDRAWN = 118] = "CONFIGID_FRAMESDRAWN", e[e.CONFIGID_LOOPPLAY = 119] = "CONFIGID_LOOPPLAY", e[e.CONFIGID_NOCLOSEWHENCOMPLETE = 120] = "CONFIGID_NOCLOSEWHENCOMPLETE", e[e.CONFIGID_MOUSEFRAMESEEK = 122] = "CONFIGID_MOUSEFRAMESEEK", e[e.CONFIGID_RENDERMODECONFIG = 201] = "CONFIGID_RENDERMODECONFIG", e[e.CONFIGID_RENDERMODECURRENT = 202] = "CONFIGID_RENDERMODECURRENT", e[e.CONFIGID_ASPECTRATIONATIVE = 203] = "CONFIGID_ASPECTRATIONATIVE", e[e.CONFIGID_ASPECTRATIOCUSTOM = 204] = "CONFIGID_ASPECTRATIOCUSTOM", e[e.CONFIGID_VIDEOSOURCEPOSITION = 205] = "CONFIGID_VIDEOSOURCEPOSITION", e[e.CONFIGID_VIDEOTARGETPOSITION = 206] = "CONFIGID_VIDEOTARGETPOSITION", e[e.CONFIGID_CLIPBLACKBANDENABLE = 207] = "CONFIGID_CLIPBLACKBANDENABLE", e[e.CONFIGID_CLIPBLACKBANDSTILL = 208] = "CONFIGID_CLIPBLACKBANDSTILL", e[e.CONFIGID_SPEEDUPENABLE = 209] = "CONFIGID_SPEEDUPENABLE", e[e.CONFIGID_SPEEDUPCUDAFIRST = 210] = "CONFIGID_SPEEDUPCUDAFIRST", e[e.CONFIGID_SPEEDUPSTATUS = 211] = "CONFIGID_SPEEDUPSTATUS", e[e.CONFIGID_SPEEDUPQUERY = 212] = "CONFIGID_SPEEDUPQUERY", e[e.CONFIGID_VIDEOADJUSTUSABLE = 213] = "CONFIGID_VIDEOADJUSTUSABLE", e[e.CONFIGID_BRIGHTNESS = 214] = "CONFIGID_BRIGHTNESS", e[e.CONFIGID_CONTRAST = 215] = "CONFIGID_CONTRAST", e[e.CONFIGID_SATURATION = 216] = "CONFIGID_SATURATION", e[e.CONFIGID_HUE = 217] = "CONFIGID_HUE", e[e.CONFIGID_COREAVCOUTPUTLEVEL = 218] = "CONFIGID_COREAVCOUTPUTLEVEL", e[e.CONFIGID_UNUSED = 219] = "CONFIGID_UNUSED", e[e.CONFIGID_VIDEOCODEC = 220] = "CONFIGID_VIDEOCODEC", e[e.CONFIGID_VIDEOOUTPUTFORMAT = 221] = "CONFIGID_VIDEOOUTPUTFORMAT", e[e.CONFIGID_CURRENTBLACKBANDINFO = 222] = "CONFIGID_CURRENTBLACKBANDINFO", e[e.CONFIGID_IMAGEPROCESSUSABLE = 301] = "CONFIGID_IMAGEPROCESSUSABLE", e[e.CONFIGID_IMAGEFLIPH = 302] = "CONFIGID_IMAGEFLIPH", e[e.CONFIGID_IMAGEFLIPV = 303] = "CONFIGID_IMAGEFLIPV", e[e.CONFIGID_IMAGEROTATE = 304] = "CONFIGID_IMAGEROTATE", e[e.CONFIGID_IMAGENORMALIZEENABLE = 305] = "CONFIGID_IMAGENORMALIZEENABLE", e[e.CONFIGID_IMAGENORMALIZECOMPARE = 306] = "CONFIGID_IMAGENORMALIZECOMPARE", e[e.CONFIGID_IMAGESHARPEN = 307] = "CONFIGID_IMAGESHARPEN", e[e.CONFIGID_IMAGECOLOR3DENABLE = 308] = "CONFIGID_IMAGECOLOR3DENABLE", e[e.CONFIGID_IMAGECOLOR3DOKAY = 309] = "CONFIGID_IMAGECOLOR3DOKAY", e[e.CONFIGID_IMAGECOLOR3DSHOW = 310] = "CONFIGID_IMAGECOLOR3DSHOW", e[e.CONFIGID_IMAGECOLOR3DMODE = 311] = "CONFIGID_IMAGECOLOR3DMODE", e[e.CONFIGID_IMAGECOLOR3DCOLOR = 312] = "CONFIGID_IMAGECOLOR3DCOLOR",e[e.CONFIGID_IMAGEUSEOPENCL = 313] = "CONFIGID_IMAGEUSEOPENCL",e[e.CONFIGID_IMAGEUSEAVX2 = 314] = "CONFIGID_IMAGEUSEAVX2",e[e.CONFIGID_IMAGEUSESSE2 = 315] = "CONFIGID_IMAGEUSESSE2",e[e.CONFIGID_AUIDOPROCESSUSABLE = 401] = "CONFIGID_AUIDOPROCESSUSABLE",e[e.CONFIGID_AUDIOTRACKLIST = 402] = "CONFIGID_AUDIOTRACKLIST",e[e.CONFIGID_AUDIOTRACKCURRENT = 403] = "CONFIGID_AUDIOTRACKCURRENT",e[e.CONFIGID_AUDIOCHANNEL = 404] = "CONFIGID_AUDIOCHANNEL",e[e.CONFIGID_AUDIOTIMESHIFT = 405] = "CONFIGID_AUDIOTIMESHIFT",e[e.CONFIGID_AUDIONORMALIZE = 406] = "CONFIGID_AUDIONORMALIZE",e[e.CONFIGID_AUDIOVSSENABLE = 407] = "CONFIGID_AUDIOVSSENABLE",e[e.CONFIGID_AUDIOVSSDEEP = 408] = "CONFIGID_AUDIOVSSDEEP",e[e.CONFIGID_AUDIOLOADTRACK = 409] = "CONFIGID_AUDIOLOADTRACK",e[e.CONFIGID_AUDIOCODEC = 410] = "CONFIGID_AUDIOCODEC",e[e.CONFIGID_AUDIOINPUTCHANNELS = 411] = "CONFIGID_AUDIOINPUTCHANNELS",e[e.CONFIGID_AUDIOINPUTSAMPLERATE = 412] = "CONFIGID_AUDIOINPUTSAMPLERATE",e[e.CONFIGID_AUDIOINPUTSAMPLEBIT = 413] = "CONFIGID_AUDIOINPUTSAMPLEBIT",e[e.CONFIGID_AUDIOOUTPUTFORMAT = 414] = "CONFIGID_AUDIOOUTPUTFORMAT",e[e.CONFIGID_AUDIOOUTPUTCHANNELS = 415] = "CONFIGID_AUDIOOUTPUTCHANNELS",e[e.CONFIGID_AUDIOOUTPUTSAMPLERATE = 416] = "CONFIGID_AUDIOOUTPUTSAMPLERATE",e[e.CONFIGID_AUDIOOUTPUTSAMPLEBIT = 417] = "CONFIGID_AUDIOOUTPUTSAMPLEBIT",e[e.CONFIGID_SUBTITLEUSABLE = 501] = "CONFIGID_SUBTITLEUSABLE",e[e.CONFIGID_SUBTITLEEXTNAMELIST = 502] = "CONFIGID_SUBTITLEEXTNAMELIST",e[e.CONFIGID_SUBTITLEFILENAME = 503] = "CONFIGID_SUBTITLEFILENAME",e[e.CONFIGID_SUBTITLESHOW = 504] = "CONFIGID_SUBTITLESHOW",e[e.CONFIGID_SUBTITLELANGUAGELIST = 505] = "CONFIGID_SUBTITLELANGUAGELIST",e[e.CONFIGID_SUBTITLELANGUAGECURRENT = 506] = "CONFIGID_SUBTITLELANGUAGECURRENT",e[e.CONFIGID_SUBTITLEPLACEMENT = 507] = "CONFIGID_SUBTITLEPLACEMENT",e[e.CONFIGID_SUBTITLEFONT = 508] = "CONFIGID_SUBTITLEFONT",e[e.CONFIGID_SUBTITLETIMING = 509] = "CONFIGID_SUBTITLETIMING",e[e.CONFIGID_SUBTITLE3D = 510] = "CONFIGID_SUBTITLE3D",e[e.CONFIGID_SUBTITLECONTENT = 511] = "CONFIGID_SUBTITLECONTENT",e[e.CONFIGID_PICTUREUSABLE = 601] = "CONFIGID_PICTUREUSABLE",e[e.CONFIGID_PICTUREENABLE = 602] = "CONFIGID_PICTUREENABLE",e[e.CONFIGID_PICTUREBOUND = 603] = "CONFIGID_PICTUREBOUND",e[e.CONFIGID_PICTUREWIDTH = 604] = "CONFIGID_PICTUREWIDTH",e[e.CONFIGID_PICTUREHEIGHT = 605] = "CONFIGID_PICTUREHEIGHT",e[e.CONFIGID_PICTURELEFT = 606] = "CONFIGID_PICTURELEFT",e[e.CONFIGID_PICTURETOP = 607] = "CONFIGID_PICTURETOP",e[e.CONFIGID_PICTUREALPHA = 608] = "CONFIGID_PICTUREALPHA",e[e.CONFIGID_PICTURECOLORKEY = 609] = "CONFIGID_PICTURECOLORKEY",e[e.CONFIGID_PICTUREHITTEST = 610] = "CONFIGID_PICTUREHITTEST",e[e.CONFIGID_PICTUREHITALPHA = 611] = "CONFIGID_PICTUREHITALPHA",e[e.CONFIGID_PICTURETEXT = 612] = "CONFIGID_PICTURETEXT",e[e.CONFIGID_PICTUREFONT = 613] = "CONFIGID_PICTUREFONT",e[e.CONFIGID_PICTURERGBABUFFER = 614] = "CONFIGID_PICTURERGBABUFFER",e[e.CONFIGID_PICTUREBMPHANDLE = 615] = "CONFIGID_PICTUREBMPHANDLE",e[e.CONFIGID_PICTUREBMPFILENAME = 616] = "CONFIGID_PICTUREBMPFILENAME",e[e.CONFIGID_PICTUREPNGFILENAME = 617] = "CONFIGID_PICTUREPNGFILENAME",e[e.CONFIGID_PICTURESWFFILENAME = 618] = "CONFIGID_PICTURESWFFILENAME",e[e.CONFIGID_PICTURESWFSIZE = 619] = "CONFIGID_PICTURESWFSIZE",e[e.CONFIGID_PICTURESWFCONTROL = 620] = "CONFIGID_PICTURESWFCONTROL",e[e.CONFIGID_PICTUREEVRCPLINEAR = 621] = "CONFIGID_PICTUREEVRCPLINEAR",e[e.CONFIGID_PICTUREATTACHTOVR = 622] = "CONFIGID_PICTUREATTACHTOVR",e[e.CONFIGID_SNAPSHOTUSABLE = 701] = "CONFIGID_SNAPSHOTUSABLE",e[e.CONFIGID_SNAPSHOTIMAGE = 702] = "CONFIGID_SNAPSHOTIMAGE",e[e.CONFIGID_SNAPSHOTWIDTH = 703] = "CONFIGID_SNAPSHOTWIDTH",e[e.CONFIGID_SNAPSHOTHEIGHT = 704] = "CONFIGID_SNAPSHOTHEIGHT",e[e.CONFIGID_SNAPSHOTSOURCEPOSITION = 705] = "CONFIGID_SNAPSHOTSOURCEPOSITION",e[e.CONFIGID_SNAPSHOTKEEPASPECTRATIO = 706] = "CONFIGID_SNAPSHOTKEEPASPECTRATIO",e[e.CONFIGID_SNAPSHOTFORMAT = 707] = "CONFIGID_SNAPSHOTFORMAT",e[e.CONFIGID_SNAPSHOTJPEGQUALITY = 708] = "CONFIGID_SNAPSHOTJPEGQUALITY",e[e.CONFIGID_SNAPSHOTGIFPARAM = 709] = "CONFIGID_SNAPSHOTGIFPARAM",e[e.CONFIGID_SNAPSHOTABORT = 710] = "CONFIGID_SNAPSHOTABORT",e[e.CONFIGID_SNAPSHOTGIFWORKING = 711] = "CONFIGID_SNAPSHOTGIFWORKING",e[e.CONFIGID_SNAPSHOTGIFPROGRESS = 712] = "CONFIGID_SNAPSHOTGIFPROGRESS",e[e.CONFIGID_SNAPSHOTSUBTITLE = 713] = "CONFIGID_SNAPSHOTSUBTITLE",e[e.CONFIGID_CUTUSABLE = 801] = "CONFIGID_CUTUSABLE",e[e.CONFIGID_CUTFORMATLIST = 802] = "CONFIGID_CUTFORMATLIST",e[e.CONFIGID_CUTFORMATCURRENT = 803] = "CONFIGID_CUTFORMATCURRENT",e[e.CONFIGID_CUTFILENAME = 804] = "CONFIGID_CUTFILENAME",e[e.CONFIGID_TRANSCODEVIDEOWIDTH = 901] = "CONFIGID_TRANSCODEVIDEOWIDTH",e[e.CONFIGID_TRANSCODEVIDEOHEIGHT = 902] = "CONFIGID_TRANSCODEVIDEOHEIGHT",e[e.CONFIGID_TRANSCODEKEEPASPECTRATIO = 903] = "CONFIGID_TRANSCODEKEEPASPECTRATIO",e[e.CONFIGID_TRANSCODEROUNDSIZE = 904] = "CONFIGID_TRANSCODEROUNDSIZE",e[e.CONFIGID_TRANSCODEAUDIOTRACK = 905] = "CONFIGID_TRANSCODEAUDIOTRACK",e[e.CONFIGID_TRANSCODESUBTLTELANGUAGE = 906] = "CONFIGID_TRANSCODESUBTLTELANGUAGE",e[e.CONFIGID_TRANSCODECROPBORDER = 907] = "CONFIGID_TRANSCODECROPBORDER",e[e.CONFIGID_TRANSCODEVSFILTER = 908] = "CONFIGID_TRANSCODEVSFILTER",e[e.CONFIGID_NETWORK_BUFFERENTER = 1001] = "CONFIGID_NETWORK_BUFFERENTER",e[e.CONFIGID_NETWORK_BUFFERLEAVE = 1002] = "CONFIGID_NETWORK_BUFFERLEAVE",e[e.CONFIGID_NETWORK_NOBUFFERDRY = 1003] = "CONFIGID_NETWORK_NOBUFFERDRY",e[e.CONFIGID_NETWORK_SEEKBUFFERTIMEOUT = 1004] = "CONFIGID_NETWORK_SEEKBUFFERTIMEOUT",e[e.CONFIGID_NETWORK__ISSEEKBUFFER = 1012] = "CONFIGID_NETWORK__ISSEEKBUFFER",e[e.CONFIGID_NETWORK__FASTSEEK = 1013] = "CONFIGID_NETWORK__FASTSEEK",e[e.CONFIGID_NETWORK__STUFFURL = 1014] = "CONFIGID_NETWORK__STUFFURL",e[e.CONFIGID_NETWORK__TS_INDEX_STATUS = 1018] = "CONFIGID_NETWORK__TS_INDEX_STATUS",e[e.CONFIGID_NETWORK__STUFF_READ_SIZE = 1019] = "CONFIGID_NETWORK__STUFF_READ_SIZE",e[e.CONFIGID_NETWORK_QUICK_OPEN = 1020] = "CONFIGID_NETWORK_QUICK_OPEN",e[e.CONFIGID_HTTPENABLEVOD = 1101] = "CONFIGID_HTTPENABLEVOD",e[e.CONFIGID_HTTPFAILEDRECONNECTCOUNT = 1102] = "CONFIGID_HTTPFAILEDRECONNECTCOUNT",e[e.CONFIGID_HTTPFAILEDRECONNECTINTERVAL = 1103] = "CONFIGID_HTTPFAILEDRECONNECTINTERVAL",e[e.CONFIGID_HTTPLIVE = 1104] = "CONFIGID_HTTPLIVE",e[e.CONFIGID_HTTPCOOKIE = 1105] = "CONFIGID_HTTPCOOKIE",e[e.CONFIGID_HTTPREFERER = 1106] = "CONFIGID_HTTPREFERER",e[e.CONFIGID_HTTPCUSTOMHEADERS = 1107] = "CONFIGID_HTTPCUSTOMHEADERS",e[e.CONFIGID_HTTPUSERAGENT = 1108] = "CONFIGID_HTTPUSERAGENT",e[e.CONFIGID_MULTISOURCEUSABLE = 1201] = "CONFIGID_MULTISOURCEUSABLE",e[e.CONFIGID_MULTISOURCECHANGE = 1202] = "CONFIGID_MULTISOURCECHANGE",e[e.CONFIGID_MULTISOURCESEEK = 1203] = "CONFIGID_MULTISOURCESEEK",e[e.CONFIGID_MULTISOURCECURRENT = 1204] = "CONFIGID_MULTISOURCECURRENT",e[e.CONFIGID_LYRICUSABLE = 1301] = "CONFIGID_LYRICUSABLE",e[e.CONFIGID_LYRICSHOW = 1302] = "CONFIGID_LYRICSHOW",e[e.CONFIGID_LYRICUPDATETIME = 1303] = "CONFIGID_LYRICUPDATETIME",e[e.CONFIGID_LYRICFORMAT = 1304] = "CONFIGID_LYRICFORMAT",e[e.CONFIGID_LYRICFILE = 1305] = "CONFIGID_LYRICFILE",e[e.CONFIGID_LYRICCONTENT = 1306] = "CONFIGID_LYRICCONTENT",e[e.CONFIGID_LYRICBACKCOLOR = 1307] = "CONFIGID_LYRICBACKCOLOR",e[e.CONFIGID_LYRICPICTUREFILENAME = 1308] = "CONFIGID_LYRICPICTUREFILENAME",e[e.CONFIGID_LYRICPICTUREHANDLE = 1309] = "CONFIGID_LYRICPICTUREHANDLE",e[e.CONFIGID_LYRICPICTUREMODE = 1310] = "CONFIGID_LYRICPICTUREMODE",e[e.CONFIGID_LYRICFONT = 1311] = "CONFIGID_LYRICFONT",e[e.CONFIGID_LYRICFONTNORMALCOLOR = 1312] = "CONFIGID_LYRICFONTNORMALCOLOR",e[e.CONFIGID_LYRICFONTHIGHLIGHTCOLOR = 1313] = "CONFIGID_LYRICFONTHIGHLIGHTCOLOR",e[e.CONFIGID_LYRICFRAMEENABLE = 1314] = "CONFIGID_LYRICFRAMEENABLE",e[e.CONFIGID_LYRICFRAMECOLOR = 1315] = "CONFIGID_LYRICFRAMECOLOR",e[e.CONFIGID_LYRICSMOOTHMULITPLE = 1316] = "CONFIGID_LYRICSMOOTHMULITPLE",e[e.CONFIGID_LYRICSMOOTHONLYLYRIC = 1317] = "CONFIGID_LYRICSMOOTHONLYLYRIC",e[e.CONFIGID_LYRICALPHA = 1318] = "CONFIGID_LYRICALPHA",e[e.CONFIGID_LYRICANIMATION = 1319] = "CONFIGID_LYRICANIMATION",e[e.CONFIGID_LYRICTIMEOFFSET = 1320] = "CONFIGID_LYRICTIMEOFFSET",e[e.CONFIGID_LYRICDRAGENABLE = 1321] = "CONFIGID_LYRICDRAGENABLE",e[e.CONFIGID_LYRICDRAGLINECOLOR = 1322] = "CONFIGID_LYRICDRAGLINECOLOR",e[e.CONFIGID_LYRICDRAGTEXTCOLOR = 1323] = "CONFIGID_LYRICDRAGTEXTCOLOR",e[e.CONFIGID_LYRICDRAGTEXTLEFT = 1324] = "CONFIGID_LYRICDRAGTEXTLEFT",e[e.CONFIGID_LYRICDRAGTEXTRIGHTFRONT = 1325] = "CONFIGID_LYRICDRAGTEXTRIGHTFRONT",e[e.CONFIGID_LYRICDRAGTEXTRIGHTBACK = 1326] = "CONFIGID_LYRICDRAGTEXTRIGHTBACK",e[e.CONFIGID_LYRICDRAGTEXTRIGHTDIV = 1327] = "CONFIGID_LYRICDRAGTEXTRIGHTDIV",e[e.CONFIGID_LYRICALIGN = 1328] = "CONFIGID_LYRICALIGN",e[e.CONFIGID_DVDCHAPTERS = 1401] = "CONFIGID_DVDCHAPTERS",e[e.CONFIGID_DVDANGLECOUNT = 1402] = "CONFIGID_DVDANGLECOUNT",e[e.CONFIGID_DVDAUDIOS = 1403] = "CONFIGID_DVDAUDIOS",e[e.CONFIGID_DVDSUBPICTURES = 1404] = "CONFIGID_DVDSUBPICTURES",e[e.CONFIGID_DVDCURRENTCHAPTER = 1405] = "CONFIGID_DVDCURRENTCHAPTER",e[e.CONFIGID_DVDCURRENTANGLE = 1406] = "CONFIGID_DVDCURRENTANGLE",e[e.CONFIGID_DVDCURRENTAUDIO = 1407] = "CONFIGID_DVDCURRENTAUDIO",e[e.CONFIGID_DVDCURRENTSUBPICTURE = 1408] = "CONFIGID_DVDCURRENTSUBPICTURE",e[e.CONFIGID_DVDPARENTALLEVEL = 1409] = "CONFIGID_DVDPARENTALLEVEL",e[e.CONFIGID_DVDSHOWMENU = 1410] = "CONFIGID_DVDSHOWMENU",e[e.CONFIGID_DVDPRESSBUTTON = 1411] = "CONFIGID_DVDPRESSBUTTON",e[e.CONFIGID_DVDSKIPCHAPTER = 1412] = "CONFIGID_DVDSKIPCHAPTER",e[e.CONFIGID_DVDPLAYFORWARD = 1413] = "CONFIGID_DVDPLAYFORWARD",e[e.CONFIGID_DVDPLAYBACKWARD = 1414] = "CONFIGID_DVDPLAYBACKWARD",e[e.CONFIGID_DVDNEEDINTERACTION = 1415] = "CONFIGID_DVDNEEDINTERACTION",e[e.CONFIGID_AC3DTSUSABLE = 1501] = "CONFIGID_AC3DTSUSABLE",e[e.CONFIGID_AC3DTSOUTPUTMODE = 1502] = "CONFIGID_AC3DTSOUTPUTMODE",e[e.CONFIGID_AC3DTSVOICEVOLUME = 1503] = "CONFIGID_AC3DTSVOICEVOLUME",e[e.CONFIGID_SVCCURRENTLEVEL = 1601] = "CONFIGID_SVCCURRENTLEVEL",e[e.CONFIGID_SVCSTATISTICINTERVAL = 1602] = "CONFIGID_SVCSTATISTICINTERVAL",e[e.CONFIGID_SVCLEVELMIN = 1603] = "CONFIGID_SVCLEVELMIN",e[e.CONFIGID_SVCLEVELMAX = 1604] = "CONFIGID_SVCLEVELMAX",e[e.CONFIGID_SVCDOWNLOADSPEED = 1605] = "CONFIGID_SVCDOWNLOADSPEED",e[e.CONFIGID_SVCCONNECTTIMEOUT = 1606] = "CONFIGID_SVCCONNECTTIMEOUT",e[e.CONFIGID_DETECTSUBTITLEUSABLE = 1701] = "CONFIGID_DETECTSUBTITLEUSABLE",e[e.CONFIGID_DETECTSUBTITLEENABLE = 1702] = "CONFIGID_DETECTSUBTITLEENABLE",e[e.CONFIGID_DETECTSUBTITLEAREA = 1703] = "CONFIGID_DETECTSUBTITLEAREA",e[e.CONFIGID_DETECTSUBTITLESHOW = 1704] = "CONFIGID_DETECTSUBTITLESHOW",e[e.CONFIGID_DLNAENABLE = 1801] = "CONFIGID_DLNAENABLE",e[e.CONFIGID_DLNADEVICELIST = 1802] = "CONFIGID_DLNADEVICELIST",e[e.CONFIGID_DLNACURRENTDEVICE = 1803] = "CONFIGID_DLNACURRENTDEVICE",e[e.CONFIGID_DLNASEARCHDEVICE = 1804] = "CONFIGID_DLNASEARCHDEVICE",e[e.CONFIGID_VIDEO3DUSABLE = 1901] = "CONFIGID_VIDEO3DUSABLE",e[e.CONFIGID_VIDEO3DSHOW = 1902] = "CONFIGID_VIDEO3DSHOW",e[e.CONFIGID_VIDEO3DOBJECTLIST = 1903] = "CONFIGID_VIDEO3DOBJECTLIST",e[e.CONFIGID_VIDEO3DCURRENTOBJECT = 1904] = "CONFIGID_VIDEO3DCURRENTOBJECT",e[e.CONFIGID_VIDEO3DOBJECTINFO = 1905] = "CONFIGID_VIDEO3DOBJECTINFO",e[e.CONFIGID_VIDEO3DADDOBJECT = 1906] = "CONFIGID_VIDEO3DADDOBJECT",e[e.CONFIGID_VIDEO3DDELETEOBJECT = 1907] = "CONFIGID_VIDEO3DDELETEOBJECT",e[e.CONFIGID_VIDEO3DPOINTCOUNT = 1908] = "CONFIGID_VIDEO3DPOINTCOUNT",e[e.CONFIGID_VIDEO3DCURRENTPOINT = 1909] = "CONFIGID_VIDEO3DCURRENTPOINT",e[e.CONFIGID_VIDEO3DPOINTINFO = 1910] = "CONFIGID_VIDEO3DPOINTINFO",e[e.CONFIGID_VIDEO3DADDPOINT = 1911] = "CONFIGID_VIDEO3DADDPOINT",e[e.CONFIGID_VIDEO3DDELETEPOINT = 1912] = "CONFIGID_VIDEO3DDELETEPOINT",e[e.CONFIGID_VIDEO3DFRAMECOUNT = 1913] = "CONFIGID_VIDEO3DFRAMECOUNT",e[e.CONFIGID_VIDEO3DFRAMEINFO = 1914] = "CONFIGID_VIDEO3DFRAMEINFO",e[e.CONFIGID_VIDEO3DADDFRAME = 1915] = "CONFIGID_VIDEO3DADDFRAME",e[e.CONFIGID_VIDEO3DDELETEFRAME = 1916] = "CONFIGID_VIDEO3DDELETEFRAME",e[e.CONFIGID_VIDEO3DCLEARFRAMES = 1917] = "CONFIGID_VIDEO3DCLEARFRAMES",e[e.CONFIGID_VIDEO3DCOPYFRAME = 1918] = "CONFIGID_VIDEO3DCOPYFRAME",e[e.CONFIGID_VIDEO3DSAMEFRAMES = 1919] = "CONFIGID_VIDEO3DSAMEFRAMES",e[e.CONFIGID_VIDEO3DLINEARFRAMES = 1920] = "CONFIGID_VIDEO3DLINEARFRAMES",e[e.CONFIGID_VIDEO3DEDITMODE = 1921] = "CONFIGID_VIDEO3DEDITMODE",e[e.CONFIGID_VIDEO3DSELECTTOOL = 1922] = "CONFIGID_VIDEO3DSELECTTOOL",e[e.CONFIGID_VIDEO3DMAGICADMIT = 1923] = "CONFIGID_VIDEO3DMAGICADMIT",e[e.CONFIGID_VIDEO3DLOADFROMFILE = 1924] = "CONFIGID_VIDEO3DLOADFROMFILE",e[e.CONFIGID_VIDEO3DSAVETOFILE = 1925] = "CONFIGID_VIDEO3DSAVETOFILE",e[e.CONFIGID_WIDIENABLE = 2001] = "CONFIGID_WIDIENABLE",e[e.CONFIGID_WIDIADAPTERLIST = 2002] = "CONFIGID_WIDIADAPTERLIST",e[e.CONFIGID_WIDICONNECT = 2003] = "CONFIGID_WIDICONNECT",e[e.CONFIGID_WIDIDISCONNECT = 2004] = "CONFIGID_WIDIDISCONNECT",e[e.CONFIGID_WIDISETMODE = 2005] = "CONFIGID_WIDISETMODE",e[e.CONFIGID_WIDISEARCHDEVICE = 2006] = "CONFIGID_WIDISEARCHDEVICE",e[e.CONFIGID_SUBTITLE2USABLE = 2101] = "CONFIGID_SUBTITLE2USABLE",e[e.CONFIGID_SUBTITLE2EXTNAMELIST = 2102] = "CONFIGID_SUBTITLE2EXTNAMELIST",e[e.CONFIGID_SUBTITLE2FILENAME = 2103] = "CONFIGID_SUBTITLE2FILENAME",e[e.CONFIGID_SUBTITLE2SHOW = 2104] = "CONFIGID_SUBTITLE2SHOW",e[e.CONFIGID_SUBTITLE2LANGUAGELIST = 2105] = "CONFIGID_SUBTITLE2LANGUAGELIST",e[e.CONFIGID_SUBTITLE2LANGUAGECURRENT = 2106] = "CONFIGID_SUBTITLE2LANGUAGECURRENT",e[e.CONFIGID_SUBTITLE2PLACEMENT = 2107] = "CONFIGID_SUBTITLE2PLACEMENT",e[e.CONFIGID_SUBTITLE2FONT = 2108] = "CONFIGID_SUBTITLE2FONT",e[e.CONFIGID_SUBTITLE2TIMING = 2109] = "CONFIGID_SUBTITLE2TIMING",e[e.CONFIGID_SUBTITLE23D = 2110] = "CONFIGID_SUBTITLE23D",e[e.CONFIGID_SUBTITLE2CONTENT = 2111] = "CONFIGID_SUBTITLE2CONTENT",e[e.CONFIGID_CACHEFILENAME = 2201] = "CONFIGID_CACHEFILENAME",e[e.CONFIGID_CACHECLEAR = 2202] = "CONFIGID_CACHECLEAR",e[e.CONFIGID_CACHEDOWNLOADLIST = 2203] = "CONFIGID_CACHEDOWNLOADLIST",e[e.CONFIGID_CACHECOMPLETED = 2204] = "CONFIGID_CACHECOMPLETED",e[e.CONFIGID_CACHECONVERT = 2205] = "CONFIGID_CACHECONVERT",e[e.CONFIGID_CACHEIGNORECOMPAREURL = 2206] = "CONFIGID_CACHEIGNORECOMPAREURL",e[e.CONFIGID_CACHEGREED = 2207] = "CONFIGID_CACHEGREED",e[e.CONFIGID_SPRITEUSABLE = 2301] = "CONFIGID_SPRITEUSABLE",e[e.CONFIGID_SPRITELIST = 2302] = "CONFIGID_SPRITELIST",e[e.CONFIGID_SPRITEADD = 2303] = "CONFIGID_SPRITEADD",e[e.CONFIGID_SPRITEDELETE = 2304] = "CONFIGID_SPRITEDELETE",e[e.CONFIGID_SPRITECURRENT = 2305] = "CONFIGID_SPRITECURRENT",e[e.CONFIGID_SPRITEBOUND = 2306] = "CONFIGID_SPRITEBOUND",e[e.CONFIGID_SPRITEPOSITION = 2307] = "CONFIGID_SPRITEPOSITION",e[e.CONFIGID_SPRITEMOVETO = 2308] = "CONFIGID_SPRITEMOVETO",e[e.CONFIGID_SPRITESELECTVIDEO = 2309] = "CONFIGID_SPRITESELECTVIDEO",e[e.CONFIGID_SPRITESELECTRECT = 2310] = "CONFIGID_SPRITESELECTRECT",e[e.CONFIGID_SPRITESHOWSELECT = 2311] = "CONFIGID_SPRITESHOWSELECT",e[e.CONFIGID_SPRITEATTACHVIDEO = 2312] = "CONFIGID_SPRITEATTACHVIDEO",e[e.CONFIGID_SPRITEATTACHTOVR = 2313] = "CONFIGID_SPRITEATTACHTOVR",e[e.CONFIGID_VRENABLE = 2401] = "CONFIGID_VRENABLE",e[e.CONFIGID_VRMODE = 2402] = "CONFIGID_VRMODE",e[e.CONFIGID_VRPOSITION = 2403] = "CONFIGID_VRPOSITION",e[e.CONFIGID_VRDEVICE = 2404] = "CONFIGID_VRDEVICE",e[e.CONFIGID_VRDELAY = 2405] = "CONFIGID_VRDELAY",e[e.CONFIGID_VRCIRCULARPARAMETER = 2406] = "CONFIGID_VRCIRCULARPARAMETER",e[e.CONFIGID_VRMONITORPARAMETER = 2407] = "CONFIGID_VRMONITORPARAMETER",e[e.CONFIGID_VRFILLBAND = 2408] = "CONFIGID_VRFILLBAND",e[e.CONFIGID_VRFOCUSPOSITION = 2409] = "CONFIGID_VRFOCUSPOSITION",e[e.CONFIGID_VRQUALITY = 2410] = "CONFIGID_VRQUALITY",e[e.CONFIGID_DNNVSRMODEL = 2802] = "CONFIGID_DNNVSRMODEL",e[e.CONFIGID_DNNENABLEVSR = 2803] = "CONFIGID_DNNENABLEVSR",e[e.CONFIGID_DNNIMAGESR = 2804] = "CONFIGID_DNNIMAGESR",e[e.CONFIGID_ZIP_FILELISTDO = 3001] = "CONFIGID_ZIP_FILELISTDO",e[e.CONFIGID_ZIP_FILELISTABORT = 3002] = "CONFIGID_ZIP_FILELISTABORT",e[e.CONFIGID_ZIP_FILELISTGET = 3003] = "CONFIGID_ZIP_FILELISTGET",e[e.CONFIGID_ZIP_OPENFILE = 3004] = "CONFIGID_ZIP_OPENFILE",e[e.CONFIGID_ZIP_OPENPASSWORD = 3005] = "CONFIGID_ZIP_OPENPASSWORD",e[e.CONFIGID_ZIP_OPENINDEX = 3006] = "CONFIGID_ZIP_OPENINDEX",e[e.CONFIGID_ZIP_MAKEINDEXFILE = 3007] = "CONFIGID_ZIP_MAKEINDEXFILE",e[e.CONFIGID_ZIP_MAKEINDEXPASSWORD = 3008] = "CONFIGID_ZIP_MAKEINDEXPASSWORD",e[e.CONFIGID_ZIP_MAKEINDEXOUTPUT = 3009] = "CONFIGID_ZIP_MAKEINDEXOUTPUT",e[e.CONFIGID_ZIP_MAKEINDEXDO = 3010] = "CONFIGID_ZIP_MAKEINDEXDO",e[e.CONFIGID_ZIP_MAKEINDEXABORT = 3011] = "CONFIGID_ZIP_MAKEINDEXABORT",e[e.CONFIGID_ZIP_MAKEINDEXPROGRESS = 3012] = "CONFIGID_ZIP_MAKEINDEXPROGRESS"
    }(t.APlayerConfigId || (t.APlayerConfigId = {})), function (e) {
        e[e.EVENTCODE_BASE = 1e4] = "EVENTCODE_BASE", e[e.EVENTCODE_MULTISOURCE = 10001] = "EVENTCODE_MULTISOURCE", e[e.EVENTCODE_DVD = 10002] = "EVENTCODE_DVD", e[e.EVENTCODE_STEPCOMPLETED = 10003] = "EVENTCODE_STEPCOMPLETED", e[e.EVENTCODE_DLNA = 10004] = "EVENTCODE_DLNA", e[e.EVENTCODE_GIFCOMPLETED = 10005] = "EVENTCODE_GIFCOMPLETED", e[e.EVENTCODE_WIDI = 10006] = "EVENTCODE_WIDI", e[e.EVENTCODE_VIDEO3D = 10007] = "EVENTCODE_VIDEO3D", e[e.EVENTCODE_SPRITE = 10008] = "EVENTCODE_SPRITE", e[e.EVENTCODE_PLAYLIST = 10009] = "EVENTCODE_PLAYLIST", e[e.EVENTCODE_PLAYCOMPLETE = 10010] = "EVENTCODE_PLAYCOMPLETE", e[e.EVENTCODE_AILOADCOMPLETED = 10011] = "EVENTCODE_AILOADCOMPLETED", e[e.EVENTCODE_AIFACESCHANGED = 10012] = "EVENTCODE_AIFACESCHANGED", e[e.EVENTCODE_DNNIMAGESR = 10013] = "EVENTCODE_DNNIMAGESR", e[e.EVENTCODE_ZIPLISTCOMPLETED = 10014] = "EVENTCODE_ZIPLISTCOMPLETED", e[e.EVENTCODE_ZIPINDEXCOMPLETED = 10015] = "EVENTCODE_ZIPINDEXCOMPLETED"
    }(t.APlayerEventCode || (t.APlayerEventCode = {}))
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAcCAYAAAA0u3w+AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAOKADAAQAAAABAAAAHAAAAAA5FuGXAAAJMElEQVRYCZVYbYxVVxXd572ZgSHloxAozKCVEBylWsWIHacZaxFCbG2LdvrDGn9YalITY6pGTRtiIuJX/GXiP00aJNZG2nRaExPbKG2HtGMHJdpowDGi1gFjSwqEMszXva619j733gfFj/Peu/ecvdda++Pce+fNS/Y/jHJy75Zidm5XsmLYUtlfltZXlsVVZiXe+OCMtSXOcNaIs6+JC3tgyXE8+QXcWCfquF7WrXhlcR6xT4I3VRbFWLu7Pdqz9ZGjHuzKR8a44iiPfX2kLOf2IehATp4JJCaJ12VJhI1F0S9cJJznVSNQVM2Poiq+F83EcoMui6887HjLbM+iGw8+eqUi3rBAFLYBnXsYSQ4iRBVEInknWITmTCYSyd2XgTvmiXfsCjmerfPJwc5hgTfPtV982bMWJfM88iLHbDx1t+/uveHgCS6aAw3oHOXkN2+CZQJ0FMe43AlkxNgupjNlU2Km3iNhNOWBXh+kyCwTF9hLGPkSvxMuv9Ndo8JRLsTcQ12QlYMNlvPzE9PPf/SmCFudOgpUcQvF0xBdFUQBKchklGimwhj11gkLEeE9cIPPqSvoKL5jgxEhsSKgg99oRqh4k6jJdkpsFU5PTz/XWWRVYPnX726wonwMl0u305zouwSJXE04FT8qdow7NI+M1fDAON8dPDrHnZwHBbXBRiLfOGftZvyaD6HAiFIU3WWrfGz617dtiDStK09sbpb3HLvgA2cG8/ss2W23fht2d7K4++7bbh++5V0V/cnRo/aj/WPCMClifnrwM8r1V7/8o/3wB4c7+AcOfAoY13vooRfsmUOT4jCG+FKOObTa7ZatWrnErr12uX3k1gFbt26p6zFQVST0ymKVzaWH4Xw/JbSD5eR3RvBQG6yKo6cxIAENkrORFn44aKfDnXXH5dRBXmAEk0X75ICgUp9+eXB2rO8s5wsLhf3rlfN25MiU7d33jL0w/jL4XpzHplCM0gYvPHfHCFd+iZbFPraPzdDwSLEgnRGzj8G5YHdpw0GTeHhknOAhGPSsT36Bj5pBiCQ4USQx2+2EXfNPq0VtmXUoUOxPHvm9vX5+FusQwDm3Tfkl1ITRVU5+awvYAzJShHge9DjmnMM7qZmy9GidRz7eiYMVb99JR7gmzE07Q9AdH8Ynh+c3vflq2/u1nQyHtX+BePX0edu//zd2/NgrIs3OzNvvXvqnDQ2uD5wLqUhpFwOzz9++BTuYdrGAXJcCkhLtbibKhNQIheCBomK6Apau5DY4XYYwDJ4y33EiVCGJqXZVuigaLzaN99+9u9+nOXEM/Y+Xz5Lhb50cm2PMzS/sYoHDMrAgZqDcMOH8kqHgtOPTLMQFa3Em1EHHggk5x0VrBOMS7btX4CubllmB+YTYsmU9tmJFry+R74XpOc838+FpxsAzbBgFFv2qzTMAgANHnyBYqDNOYGjhPDZZogW/eolHYpCFAzbkclGShEh9dXhx5LkNRGlkO5fJZmYW7Oy5iyqY8Rctqv8INPMkW6Nl/V0ouo+LnJIH96KUEISzjzj685rzXGhG+RqJxU40seRnMgtRUtTwPZG7mai0SMB7dmbODhz4rRULnht116zBnwolzMaIjiUbHfMi9UULEKwRxNHYIbaeHok4KQuFRiXslxZ3FRzmgLOwmEfsy85Zgw9zT9v5J0+eswce/HloUyDZmdcuYAfnpUFdfq5/55pICiHRUA9cqybIdoFxEhW8lUlodzBRPcCraCy4Oz09XTY7O+8+YM+cvRCCTmACKgV49qWnGxeHZ63kvYHEAoah3cFSGevyptV3dX5uwU6dOkcUCqmuDc2Dbts/tNFWr15CEmB40gKXd9xj4eYry1MtS60pYXjwXDnTXNIkYvnxu2+UOR9GHz9ir51hUYbz6/aLp17CLJeR7I7b362gAigrVhMjCtNue4VwNIJzexqjUoV53dql9ul732t33fUOMHLxubjIIOj48znFNo+h0ze7DUf90wmgdg5RtA2ljYwM2qFDf7C//+1VhZ6enrXvf+8pu3nbZjt8+JhdvDhPdRXFJ92uj72HZE8zAlKKuUtS0vQHRmvnr0URX7h/2LkildZGtitWLLYWn/tsJOwNpnTp8f+83APIGO7BchSd/CoJuRgqe2/8EqGv1ZXss5/baV/+4o89MI4vTvzFJiZOAOyCUYd94pND1ruY39nJr+A+IRS2rJ+zVEOJhb+7u23XXLPMFyxEDw6Pkb+AeKNgY94UBLGqIet0tUdbadMD/Lf/uC4XOgTm2QUVmDYsN29ebzt3Xk+ndNUTCcsEarKNG1fbtm1vC4PjyFVw8sLD/ueYylF27U2AIn7G0U+gpxJoLKoOKnlPn7CUjvcMPXkUG46RWnu8EK38UBE9HpOhxD27P2jLl/c2gK5JAzXu2f0B9zX4HWBVS7Dj6VOhNKlSv+frxAmtmyF8YL0F7udROpWxtYdY/ZlIm77yaPmnb4xDf5B5KQ5FgsRLJO/AVUsX2/2fv8VeHP+z/BQhktWvW7vcrruuD1cRv5e6DvX6119tO7a/3aG049XizUQePgMDa6SvniD4ypVoIFxqOow85/gUIYvFyAaf5vzRCp5o1viS4Sf0Ow3C+dA/vDOzEyhmVajDQeH8h5MRfV7dE+qEJwlgYOu182PtGXdq5nsrdLyIS/mMSRtPkUvwqtwqPvzJTre6i629N/zsBCl+iWKS3vKlE9ZKd+JCxBe8zqEuSAQx4lx1pkq8yam9tP5HfuTu7OainuvmaMRvethYb4B2bw5Xxp25OGpWBXKRNj34LJ7HO/BQPO1Z0Uo6RHT9+IlTyroJi8oXhUUycASfEJ/zzBcbJVtQCMwYT7p2MH720coPQzgiLCmdTq20o3fo8WeplUdHgTSqyJS2prIczyBJQZFFceT8fZ2PvESRCF9RjLehTiivvWGhE6I85aSdHw7Yc0O8q1kln4UbT11dWy8tjrl6Ezh7g8EffvFjwb6iWBioouP690JYUNwTjKyqsy2Sq+6V2s+0yGPg6l5m7Ca20oM+qdWPxATW8SGAH37T///DL2WaQz/dz+On+6IYRnr9SK6v4E/3jaLqhMGMZJUdC4qnKvFVcc2kq+IuLdwbRT4uav10j+ZOYTHWLtJoz9B//+n+33//fsXXUiFjAAAAAElFTkSuQmCC"
}, , , , , function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    });
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", [e.currentDeviceName ? n("DLNAView", {attrs: {deviceName: e.currentDeviceName}}) : e._e(), e._v(" "), n("Float", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: !e.currentDeviceName,
                expression: "!currentDeviceName"
            }],
            ref: "floatPanel",
            attrs: {
                title: e.title,
                isPlayed: e.isPlayed,
                isPaused: e.isPaused,
                canPause: e.canPause,
                canPlay: e.canPlay,
                isFailed: e.isFailed,
                curTaskId: e.curTaskId,
                panFileId: e.panFileId,
                curMediaId: e.curMediaId,
                positionFormat: e.positionFormat,
                durnationFormat: e.durnationFormat,
                durationNum: e.durnation,
                progress: e.progress,
                progressNum: e.progressNum,
                progressBtnPos: e.progressBtnPos,
                argsObj: e.argsObj,
                inNail: e.inNail,
                fullscreen: e.fullscreen,
                isMaximized: e.isMaximized,
                isYunBo: e.isYunBo,
                playSpeed: e.playSpeed,
                showFloat: e.showFloat,
                volume: e.volume,
                canShowVipBtn: e.canShowVipBtn,
                vipBtnText: e.vipBtnText,
                vipBtnIconClass: e.vipBtnIconClass,
                packageSpeed: e.packageSpeed,
                packageVipSpeed: e.packageVipSpeed,
                playTryStateInfo: e.playTryStateInfo,
                isSilent: e.isSilent,
                width: e.width,
                height: e.height,
                showBackIcon: e.showBackIcon,
                isSwitchClarity: e.isSwitchClarity,
                isZipPlay: e.isZipPlay
            },
            on: {
                play: e.clickPlay,
                pause: e.clickPause,
                "change-to-embed": function (t) {
                    return e.changeView("embed")
                },
                "change-to-alone": function (t) {
                    return e.changeView("alone")
                },
                "change-to-fullscreen": function (t) {
                    return e.changeView("fullscreen")
                },
                "exit-fullscreen": function (t) {
                    return e.changeView("exit-fullscreen")
                },
                "click-exit": e.exit,
                "click-progress": e.clickProgress,
                "click-maximize": e.maximize,
                "click-unmaximize": e.unmaximize,
                "click-minimize": e.minimize,
                "click-nail": e.nail,
                "click-no-nail": e.nonail,
                "on-drag-progress": e.onDragProgress,
                "on-drag-volume": e.onDragVolume,
                "on-drag-begin": e.onDragBegin,
                "on-drag-end": e.onDragEnd,
                "on-click-volume": e.clickVolume,
                "on-volume-delta": e.volumeDelta,
                "on-drag-state-changed": e.onDragStateChanged,
                "change-speed": e.changeSpeed,
                "on-set-menu-rect": e.setPopupMenuRect,
                "on-click-vip-btn": e.clickVipBtn,
                "mouse-enter-float": e.mouseEnterFloat,
                "mouse-leave-float": e.mouseLeaveFloat,
                "on-key-down": e.onKeyDown,
                "switch-silent": e.onSwitchSilent,
                "show-popup-menu": e.onShowPopupMenu,
                "double-click-head": e.onDoubleClickHead,
                "video-state-change": e.onVideoStateChange,
                "show-phone-tip": e.onShowPhoneTip,
                "hover-phone-icon": e.onHoverPhoneIcon,
                "hover-item": e.onHoverItem,
                "leave-item": e.onLeaveItem
            }
        })], 1)
    }, o = [];
    i._withStripped = !0
}, , , , , , function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    });
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {
            staticClass: "xmpc-player",
            class: {"is-popup": e.isAlone, "is-hover": e.isHover, "is-low": !e.isdwmEnabled},
            style: e.divStyle,
            on: {
                mouseenter: function (t) {
                    return e.$emit("mouse-enter-float")
                }, mouseleave: function (t) {
                    return e.$emit("mouse-leave-float")
                }
            }
        }, [n("div", {
            staticClass: "xmpc-player__header",
            attrs: {id: "player_header"},
            on: {
                pointerdown: e.onHeadDown, pointerup: e.onHeadUp, pointermove: e.onHeadMove, dblclick: function (t) {
                    return e.$emit("double-click-head")
                }
            }
        }, [n("h1", [e._v(e._s(e.title))]), e._v(" "), n("div", {staticClass: "xmpc-player-operate"}, [e.isAlone ? e._e() : n("button", {
            staticClass: "td-button td-button--small",
            on: {
                mousemove: function (t) {
                    return t.stopPropagation(), e.clearPopupMenu()
                }, click: e.clickCloseFloat
            }
        }, [e._v("\n        关闭\n      ")]), e._v(" "), !e.isAlone || e.inNail || e.fullscreen ? e._e() : n("a", {
            staticClass: "xmpc-player-operate__button",
            attrs: {href: "javascript:;", title: "播放时最前"}
        }, [n("i", {
            staticClass: "xmpc-icon-nail", on: {
                mousemove: function (t) {
                    return t.stopPropagation(), e.clearPopupMenu()
                }, click: function (t) {
                    return e.$emit("click-nail")
                }
            }
        })]), e._v(" "), e.isAlone && e.inNail && !e.fullscreen ? n("a", {
            staticClass: "xmpc-player-operate__button is-active",
            attrs: {href: "javascript:;", title: "取消在最前"}
        }, [n("i", {
            staticClass: "xmpc-icon-nail", on: {
                mousemove: function (t) {
                    return t.stopPropagation(), e.clearPopupMenu()
                }, click: function (t) {
                    return e.$emit("click-no-nail")
                }
            }
        })]) : e._e(), e._v(" "), e.isAlone && !e.fullscreen ? n("a", {
            staticClass: "xmpc-player-operate__button",
            attrs: {href: "javascript:;", title: "最小化"}
        }, [n("i", {
            staticClass: "xmpc-icon-minimize", on: {
                mousemove: function (t) {
                    return t.stopPropagation(), e.clearPopupMenu()
                }, click: function (t) {
                    return e.$emit("click-minimize")
                }
            }
        })]) : e._e(), e._v(" "), !e.isAlone || e.isMaximized || e.fullscreen ? e._e() : n("a", {
            staticClass: "xmpc-player-operate__button",
            attrs: {href: "javascript:;", title: "最大化"}
        }, [n("i", {
            staticClass: "xmpc-icon-maximize", on: {
                mousemove: function (t) {
                    return t.stopPropagation(), e.clearPopupMenu()
                }, click: function (t) {
                    return e.$emit("click-maximize")
                }
            }
        })]), e._v(" "), e.isAlone && e.isMaximized && !e.fullscreen ? n("a", {
            staticClass: "xmpc-player-operate__button",
            attrs: {href: "javascript:;", title: "还原"}
        }, [n("i", {
            staticClass: "xmpc-icon-restore", on: {
                mousemove: function (t) {
                    return t.stopPropagation(), e.clearPopupMenu()
                }, click: function (t) {
                    return e.$emit("click-unmaximize")
                }
            }
        })]) : e._e(), e._v(" "), e.isAlone ? n("a", {
            staticClass: "xmpc-player-operate__button",
            attrs: {href: "javascript:;", title: "关闭"}
        }, [n("i", {
            staticClass: "xmpc-icon-close", on: {
                mousemove: function (t) {
                    return t.stopPropagation(), e.clearPopupMenu()
                }, click: e.clickCloseFloat
            }
        })]) : e._e()])]), e._v(" "), n("div", {staticClass: "xmpc-player__body"}, [e.isAlone && e.isMusic && e.isPlaying ? n("div", {staticClass: "xmpc-player__music"}) : e._e(), e._v(" "), n("div", {staticClass: "xmpc-player__message"}, [e._l(e.messageList.keys(), function (t) {
            return n("div", {
                key: t,
                staticClass: "xmpc-player__tips"
            }, [n("p", {domProps: {innerHTML: e._s(e.messageList.get(t)[0])}})])
        }), e._v(" "), e._l(e.vipMessageList.keys(), function (t) {
            return n("div", {
                key: t,
                staticClass: "xmpc-player__tips is-vip"
            }, [n("p", {domProps: {innerHTML: e._s(e.vipMessageList.get(t)[0])}})])
        })], 2), e._v(" "), n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showFloat && !e.isMusic && !e.isError,
                expression: "showFloat && !isMusic && !isError"
            }], staticClass: "xmpc-cast-screen", attrs: {title: "投屏"}, on: {
                mouseenter: function (t) {
                    return e.$emit("hover-item", "投屏")
                }, mouseleave: function (t) {
                    return e.$emit("leave-item", "投屏")
                }, click: e.clickOpenDlna
            }
        }, [n("i", {staticClass: "xmpc-icon-cast-screen"})]), e._v(" "), n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showFloat && e.showPhoneIcon && e.isdwmEnabled && e.canShowIcon,
                expression: "showFloat && showPhoneIcon && isdwmEnabled && canShowIcon"
            }],
            staticClass: "xmpc-mobile-tips ",
            class: {"is-extend": e.showPhoneTip && e.canShowTip, "is-night": e.isNight},
            on: {mouseenter: e.hoverPhoneIcon, mouseleave: e.leavePhoneIcon}
        }, [n("div", {staticClass: "xmpc-mobile-tips__wrap"}, [n("i", {staticClass: "xmpc-icon-mobile"}), e._v(" "), n("p", {staticClass: "xmpc-mobile-tips__text"}, [e._v("\n          " + e._s(e.phoneTip) + "\n        ")]), e._v(" "), n("i", {
            staticClass: "td-icon-close",
            on: {
                click: function (t) {
                    return e.closePhoneTip()
                }
            }
        })]), e._v(" "), n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showShareCode,
                expression: "showShareCode"
            }], staticClass: "xmpc-mobile-tips__code"
        }, [n("img", {
            attrs: {
                src: e.codeImgPath,
                alt: ""
            }
        }), e._v(" "), n("p", [e._v(e._s(e.codeTip))])])]), e._v(" "), n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showCodeDialog && e.canShowCodeDialog && e.canShowDialog,
                expression: "showCodeDialog && canShowCodeDialog && canShowDialog"
            }], staticClass: "xmpc-dialog-code"
        }, [n("h2", [e._v(e._s(e.phoneDialogTitle))]), e._v(" "), n("a", {
            staticClass: "td-icon-close",
            attrs: {href: "javascript:;"},
            on: {
                click: function (t) {
                    return e.closeDialog()
                }
            }
        }), e._v(" "), n("div", {staticClass: "xmpc-dialog-code__body"}, [n("div", {staticClass: "xmpc-dialog-code__qr"}, [n("img", {
            attrs: {
                src: e.codeImgPath,
                alt: ""
            }
        }), e._v(" "), n("p", [n("span", {staticClass: "is-light"}, [e._v(e._s(e.codeTip))])])]), e._v(" "), n("div", {staticClass: "xmpc-dialog-code__carousel"}, [n("td-carousel", {
            attrs: {
                "auto-play": !0,
                timeout: 2e3
            }
        }, e._l(2, function (t, i) {
            return n("td-carousel-item", {key: t}, [n("img", {
                staticStyle: {height: "100%", width: "100%"},
                attrs: {src: e.imgList[i], alt: ""}
            })])
        }), 1), e._v(" "), n("p", [e._v("极速云播大片")])], 1)])])]), e._v(" "), e.isError ? e._e() : n("div", {
            staticClass: "xmpc-player__footer",
            attrs: {id: "player_footer"}
        }, [n("div", {
            staticClass: "xmpc-progress",
            attrs: {id: "progress"},
            on: {
                click: e.clickProgress, mouseenter: function (t) {
                    return e.clearPopupMenu()
                }, mousemove: function (t) {
                    return t.stopPropagation(), e.onProgressMouseMove(t)
                }
            }
        }, [n("div", {attrs: {id: "bufferRangleListContiner"}}), e._v(" "), n("div", {
            staticClass: "xmpc-progress__inner",
            style: e.progress
        }), e._v(" "), n("div", {
            staticClass: "xmpc-progress__button",
            style: e.progressBtnPos,
            on: {
                pointerdown: function (t) {
                    return e.onpointerdown(t, "progress")
                }, pointerup: e.onpointerup, pointermove: e.onpointermove, click: function (e) {
                    e.stopPropagation()
                }
            }
        }), e._v(" "), n("time-tip", {
            attrs: {
                progress: e.hoverProgressNum,
                positionFormat: e.hoverPositionFormat
            }
        })], 1), e._v(" "), n("div", {staticClass: "xmpc-info"}, [n("a", {
            staticClass: "xmpc-info__play",
            attrs: {href: "javascript:;", title: "暂停"},
            on: {
                mousemove: function (t) {
                    return t.stopPropagation(), e.clearPopupMenu()
                }
            }
        }, [n("i", {
            directives: [{name: "show", rawName: "v-show", value: e.isPlayed, expression: "isPlayed"}],
            staticClass: "xmpc-icon-pause",
            attrs: {disabled: e.canPause},
            on: {
                click: function (t) {
                    return e.$emit("pause")
                }
            }
        })]), e._v(" "), n("a", {
            staticClass: "xmpc-info__play",
            attrs: {href: "javascript:;", title: "播放"},
            on: {
                mousemove: function (t) {
                    return t.stopPropagation(), e.clearPopupMenu()
                }
            }
        }, [n("i", {
            directives: [{name: "show", rawName: "v-show", value: e.isPaused, expression: "isPaused"}],
            staticClass: "xmpc-icon-play",
            attrs: {disabled: e.canPlay},
            on: {
                click: function (t) {
                    return e.$emit("play")
                }
            }
        })]), e._v(" "), n("div", {staticClass: "xmpc-info__time"}, [n("span", [e._v(e._s(e.positionFormat))]), e._v(" "), n("span", {staticClass: "xmpc-info__line"}, [e._v("/")]), e._v(" "), n("span", [e._v(e._s(e.durnationFormat))])]), e._v(" "), e.canShowVipBtn ? n("div", {staticClass: "xmpc-info__vip"}, [n("button", {
            staticClass: "td-button td-button--other td-button--small",
            on: {
                mousemove: function (t) {
                    return t.stopPropagation(), e.clearPopupMenu()
                }, click: function (t) {
                    return e.$emit("on-click-vip-btn")
                }
            }
        }, [n("div", {
            staticClass: "xmpc-info__animation",
            style: e.packageTryPerscentStyle
        }), e._v(" "), n("span", [n("i", {class: e.vipBtnIconClass}), e._v(" " + e._s(e.vipBtnText) + " ")])]), e._v(" "), n("p", {staticClass: "xmpc-info__vip-text"}, [e._v(e._s(e.packageSpeed)), n("span", [e._v(e._s(e.packageVipSpeed))])])]) : e._e()]), e._v(" "), n("div", {staticClass: "xmpc-setting"}, [e.isYunBo && e.clarityList.length > 0 ? n("div", {staticClass: "xmpc-setting__option xmpc-setting__clarity"}, [n("a", {
            staticClass: "xmpc-setting__link",
            attrs: {href: "javascript:;"},
            on: {
                mousemove: function (t) {
                    return e.addPopupMenu("clarity")
                }, mouseenter: function (t) {
                    return t.stopPropagation(), e.trackEventPlayerFunctionClick("button=sharpness")
                }, mouseleave: function (t) {
                    return e.addDelaydelPopupMenu("clarity")
                }
            }
        }, [e._v(e._s(e.currentClarity))]), e._v(" "), n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showPopupMenu("clarity"),
                expression: "showPopupMenu('clarity')"
            }],
            staticClass: "td-context-menu xmpc-menu xmpc-menu--clarity",
            attrs: {id: "clarity"},
            on: {
                mouseenter: function (t) {
                    return t.stopPropagation(), e.addPopupMenu("clarity")
                }, mouseleave: function (t) {
                    return e.addDelaydelPopupMenu("clarity")
                }
            }
        }, [n("p", {staticClass: "xmpc-menu__title"}, [e._v("当前视频原画质：" + e._s(e.originClarity))]), e._v(" "), n("ul", {staticClass: "td-context-menu__main"}, e._l(e.filterclarityList, function (t, i) {
            return n("li", {
                key: t.ratioId, staticClass: "td-context-menu__item", on: {
                    click: function (n) {
                        return e.switchClarity(t, i)
                    }
                }
            }, [n("div", {
                staticClass: "td-context-menu__content",
                class: {"is-disabled": !t.isVisible}
            }, [n("span", {
                staticClass: "td-icon",
                class: {"td-icon-choose": i === e.currentClarityIndex}
            }), e._v(" "), n("span", {staticClass: "td-context-menu__text"}, [e._v(e._s(t.rationName || t.ration || ""))]), e._v(" "), n("span", {staticClass: "td-context-menu__tips"}, [n("img", {
                attrs: {
                    src: t.iconLink || "",
                    alt: ""
                }
            })])])])
        }), 0)])]) : e._e(), e._v(" "), n("MenuSpeed", {
            attrs: {
                argsObj: e.argsObj,
                isYunBo: e.isYunBo,
                playSpeed: e.playSpeed,
                panFileId: e.panFileId
            }, on: {
                "add-popup-menu": function (t) {
                    return e.addPopupMenu(t)
                }, "add-delay-del-popup-menu": function (t) {
                    return e.addDelaydelPopupMenu(t)
                }, "change-speed": function (t) {
                    return e.$emit("change-speed")
                }
            }
        }), e._v(" "), n("MenuSetting", {
            attrs: {argsObj: e.argsObj}, on: {
                "add-popup-menu": function (t) {
                    return e.addPopupMenu(t)
                }, "add-delay-del-popup-menu": function (t) {
                    return e.addDelaydelPopupMenu(t)
                }
            }
        }), e._v(" "), n("div", {staticClass: "xmpc-setting__option xmpc-setting__volume"}, [n("a", {
            staticClass: "xmpc-setting__link",
            attrs: {href: "javascript:;", title: e.isSilent ? "取消静音" : "音量"},
            on: {
                mousemove: function (t) {
                    return t.stopPropagation(), e.addPopupMenu("volume")
                }, mouseleave: function (t) {
                    return e.addDelaydelPopupMenu("volume")
                }
            }
        }, [n("i", {
            class: {"xmpc-icon-volume": !e.isSilent, "xmpc-icon-mute": e.isSilent}, on: {
                click: function (t) {
                    return e.$emit("switch-silent")
                }
            }
        })]), e._v(" "), n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showPopupMenu("volume") && !e.isSilent || e.showPopupMenu("volume") && e.isDragingVolume,
                expression: "(showPopupMenu('volume') && !isSilent) || (showPopupMenu('volume') && isDragingVolume)"
            }], staticClass: "xmpc-setting__volume-panel", attrs: {id: "volume"}, on: {
                mousemove: function (t) {
                    return t.stopPropagation(), e.addPopupMenu("volume")
                }, mouseleave: function (t) {
                    return e.addDelaydelPopupMenu("volume")
                }
            }
        }, [n("p", [e._v(e._s(Math.floor(e.volume)) + "%")]), e._v(" "), n("div", {staticClass: "td-slider is-vertical"}, [n("div", {
            ref: "volumeSlider",
            staticClass: "td-slider__bar",
            on: {click: e.clickVolumeProgress}
        }, [n("div", {
            staticClass: "td-slider__bar-inner",
            style: e.volumeSliderProgress
        }), e._v(" "), n("button", {
            staticClass: "td-slider__button",
            style: e.volumeBtnPos,
            on: {
                pointerdown: function (t) {
                    return e.onpointerdown(t, "volume")
                }, pointerup: e.onpointerup, pointermove: e.onpointermove
            }
        })])])])]), e._v(" "), e.isEmbed ? n("a", {
            staticClass: "xmpc-setting__option xmpc-setting__link",
            attrs: {href: "javascript:;", title: "独立窗口"}
        }, [n("i", {
            staticClass: "xmpc-icon-zoom", on: {
                mousemove: function (t) {
                    return t.stopPropagation(), e.clearPopupMenu()
                }, click: function (t) {
                    return e.$emit("change-to-alone")
                }
            }
        })]) : e._e(), e._v(" "), e.isAlone && e.showBackIcon && !e.isZipPlay ? n("a", {
            staticClass: "xmpc-setting__option xmpc-setting__link",
            attrs: {href: "javascript:;", title: "内嵌播放"}
        }, [n("i", {
            staticClass: "xmpc-icon-zoom-in", on: {
                mousemove: function (t) {
                    return t.stopPropagation(), e.clearPopupMenu()
                }, click: function (t) {
                    return e.$emit("change-to-embed")
                }
            }
        })]) : e._e(), e._v(" "), e.fullscreen || e.isMusic ? e._e() : n("a", {
            staticClass: "xmpc-setting__option xmpc-setting__link",
            attrs: {href: "javascript:;", title: "全屏"}
        }, [n("i", {
            staticClass: "xmpc-icon-full", on: {
                mousemove: function (t) {
                    return t.stopPropagation(), e.clearPopupMenu()
                }, click: function (t) {
                    return e.$emit("change-to-fullscreen")
                }
            }
        })]), e._v(" "), e.fullscreen ? n("a", {
            staticClass: "xmpc-setting__option xmpc-setting__link",
            attrs: {href: "javascript:;", title: "退出全屏"}
        }, [n("i", {
            staticClass: "xmpc-icon-full-cancel", on: {
                mousemove: function (t) {
                    return t.stopPropagation(), e.clearPopupMenu()
                }, click: function (t) {
                    return e.$emit("exit-fullscreen")
                }
            }
        })]) : e._e()], 1)]), e._v(" "), n("video-state", {
            attrs: {
                isEmbed: !1,
                playTryStateInfo: e.playTryStateInfo,
                curTaskId: e.curTaskId,
                durationNum: e.durationNum
            }, on: {"video-state-change": e.onVideoStateChange, "xmp-mode-change": e.onXmpModeChange}
        })], 1)
    }, o = [];
    i._withStripped = !0
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    });
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {
            staticClass: "xmpc-player is-popup",
            staticStyle: {"background-color": "#000"}
        }, [n("div", {
            staticClass: "xmpc-player__header",
            on: {pointerdown: e.onHeadDown, pointerup: e.onHeadUp, pointermove: e.onHeadMove}
        }), e._v(" "), n("div", {staticClass: "xmpc-screen-cast"}, [n("div", {staticClass: "xmpc-screen-cast__title"}, [n("h3", [n("span", {staticClass: "point"}), e._v("正在“" + e._s(e.deviceName) + "”上播放")]), e._v(" "), n("p", [e._v("如果出现投屏失败，可能是设备不支持该格式文件播放")])]), e._v(" "), n("div", {staticClass: "xmpc-screen-cast__img"}), e._v(" "), n("td-button", {on: {click: e.onSwitchToLocal}}, [e._v("退出投屏")])], 1)])
    }, o = [];
    i._withStripped = !0
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    });
    var i = function () {
        var e = this.$createElement;
        return (this._self._c || e)("div", {
            staticClass: "xmpc-progress__time",
            style: this.progressStyle
        }, [this._v("\n  " + this._s(this.positionFormat) + "\n")])
    }, o = [];
    i._withStripped = !0
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    });
    var i = function () {
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
        }, [e._v("立即开通")])])]) : e.isCanShowPage("play_and_download_vip") ? n("div", {staticClass: "xmpc-loading"}) : e.isCanShowPage("play_and_download_novip") ? n("div", {staticClass: "xmpc-loading"}) : e.isCanShowPage("local_play") ? n("div", {staticClass: "xmpc-loading"}, [n("div", {staticClass: "xmpc-loading__icon"}), e._v(" "), n("p", {staticClass: "xmpc-loading__text"}, [e._v("播放启动中...")])]) : e.isCanShowPage("back_to_embed") ? n("div", {staticClass: "xmpc-loading"}, [n("div", {staticClass: "xmpc-loading__back"}, [n("p", [e._v("当前视频独立窗口播放中")]), e._v(" "), n("button", {
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
    }, o = [];
    i._withStripped = !0
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    });
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {staticClass: "xmpc-setting__option xmpc-setting__setting"}, [n("a", {
            staticClass: "xmpc-setting__link",
            attrs: {href: "javascript:;"},
            on: {
                mousemove: function (t) {
                    return t.stopPropagation(), e.addPopupMenu("setting")
                }, mouseenter: function (t) {
                    return t.stopPropagation(), e.trackEventPlayerFunctionClick("button=more")
                }, mouseleave: function (t) {
                    return e.addDelaydelPopupMenu("setting")
                }
            }
        }, [n("i", {staticClass: "xmpc-icon-setting-bold"})]), e._v(" "), n("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showPopupMenu("setting"),
                expression: "showPopupMenu('setting')"
            }], staticClass: "td-context-menu xmpc-menu xmpc-menu--setting is-left", attrs: {id: "setting"}
        }, [n("ul", {staticClass: "td-context-menu__main"}, [n("AudioTrack", {
            attrs: {
                id: "audiotrack",
                argsObj: e.argsObj
            }
        }), e._v(" "), n("Subtitle", {attrs: {id: "subtitle", argsObj: e.argsObj}})], 1)])])
    }, o = [];
    i._withStripped = !0
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    });
    var i = function () {
        var e = this, t = e.$createElement, i = e._self._c || t;
        return i("div", {staticClass: "xmpc-setting__option xmpc-setting__speed"}, [i("a", {
            staticClass: "xmpc-setting__link",
            attrs: {href: "javascript:;"},
            on: {
                mouseenter: function (t) {
                    return t.stopPropagation(), e.trackSpeed()
                }, mousemove: function (t) {
                    return t.stopPropagation(), e.addPopupMenu("speed")
                }, mouseleave: function (t) {
                    return e.addDelaydelPopupMenu("speed")
                }
            }
        }, [e._v(e._s("1.0" == e.playSpeed ? "倍速" : e.playSpeed + "x"))]), e._v(" "), i("div", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.showPopupMenu("speed"),
                expression: "showPopupMenu('speed')"
            }],
            staticClass: "td-context-menu xmpc-menu xmpc-menu--speed",
            attrs: {id: "speed"},
            on: {
                mousemove: function (t) {
                    return t.stopPropagation(), e.addPopupMenu("speed")
                }, mouseleave: function (t) {
                    return e.addDelaydelPopupMenu("speed")
                }
            }
        }, [i("ul", {staticClass: "td-context-menu__main"}, [i("li", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: !e.isYunBo,
                expression: "!isYunBo"
            }], staticClass: "td-context-menu__item"
        }, [i("div", {
            staticClass: "td-context-menu__content", on: {
                click: function (t) {
                    return e.clickSpeed("300")
                }
            }
        }, [i("span", {
            staticClass: "td-icon",
            class: {"td-icon-choose": "3.0" == e.playSpeed}
        }), e._v(" "), i("span", {staticClass: "td-context-menu__text"}, [e._v("3.0x")]), e._v(" "), i("span", {staticClass: "td-context-menu__tips"}, [i("img", {
            attrs: {
                src: e.menuItemImage("3.0"),
                alt: ""
            }
        })])])]), e._v(" "), i("li", {staticClass: "td-context-menu__item"}, [i("div", {
            staticClass: "td-context-menu__content",
            on: {
                click: function (t) {
                    return e.clickSpeed("200")
                }
            }
        }, [i("span", {
            staticClass: "td-icon",
            class: {"td-icon-choose": "2.0" == e.playSpeed}
        }), e._v(" "), i("span", {staticClass: "td-context-menu__text"}, [e._v("2.0x")]), e._v(" "), i("span", {staticClass: "td-context-menu__tips"}, [i("img", {
            attrs: {
                src: e.menuItemImage("2.0"),
                alt: ""
            }
        })])])]), e._v(" "), i("li", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.isYunBo,
                expression: "isYunBo"
            }], staticClass: "td-context-menu__item"
        }, [i("div", {
            staticClass: "td-context-menu__content", on: {
                click: function (t) {
                    return e.clickSpeed("175")
                }
            }
        }, [i("span", {
            staticClass: "td-icon",
            class: {"td-icon-choose": "1.75" == e.playSpeed}
        }), e._v(" "), i("span", {staticClass: "td-context-menu__text"}, [e._v("1.75x")]), e._v(" "), i("span", {staticClass: "td-context-menu__tips"}, [i("img", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.isVipSpeed(1.75),
                expression: "isVipSpeed(1.75)"
            }], attrs: {src: n(214), alt: ""}
        })])])]), e._v(" "), i("li", {staticClass: "td-context-menu__item"}, [i("div", {
            staticClass: "td-context-menu__content",
            on: {
                click: function (t) {
                    return e.clickSpeed("150")
                }
            }
        }, [i("span", {
            staticClass: "td-icon",
            class: {"td-icon-choose": "1.5" == e.playSpeed}
        }), e._v(" "), i("span", {staticClass: "td-context-menu__text"}, [e._v("1.5x")]), e._v(" "), i("span", {staticClass: "td-context-menu__tips"}, [i("img", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.isVipSpeed(1.75),
                expression: "isVipSpeed(1.75)"
            }], attrs: {src: n(214), alt: ""}
        })])])]), e._v(" "), i("li", {staticClass: "td-context-menu__item"}, [i("div", {
            staticClass: "td-context-menu__content",
            on: {
                click: function (t) {
                    return e.clickSpeed("125")
                }
            }
        }, [i("span", {
            staticClass: "td-icon",
            class: {"td-icon-choose": "1.25" == e.playSpeed}
        }), e._v(" "), i("span", {staticClass: "td-context-menu__text"}, [e._v("1.25x")]), e._v(" "), i("span", {staticClass: "td-context-menu__tips"}, [i("img", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.isVipSpeed(1.25),
                expression: "isVipSpeed(1.25)"
            }], attrs: {src: n(214), alt: ""}
        })])])]), e._v(" "), i("li", {staticClass: "td-context-menu__item"}, [i("div", {
            staticClass: "td-context-menu__content",
            on: {
                click: function (t) {
                    return e.clickSpeed("100")
                }
            }
        }, [i("span", {
            staticClass: "td-icon",
            class: {"td-icon-choose": "1.0" == e.playSpeed}
        }), e._v(" "), i("span", {staticClass: "td-context-menu__text"}, [e._v("正常")]), e._v(" "), e._m(0)])]), e._v(" "), i("li", {staticClass: "td-context-menu__item"}, [i("div", {
            staticClass: "td-context-menu__content",
            on: {
                click: function (t) {
                    return e.clickSpeed("75")
                }
            }
        }, [i("span", {
            staticClass: "td-icon",
            class: {"td-icon-choose": "0.75" == e.playSpeed}
        }), e._v(" "), i("span", {staticClass: "td-context-menu__text"}, [e._v("0.75x")]), e._v(" "), e._m(1)])]), e._v(" "), i("li", {staticClass: "td-context-menu__item"}, [i("div", {
            staticClass: "td-context-menu__content",
            on: {
                click: function (t) {
                    return e.clickSpeed("50")
                }
            }
        }, [i("span", {
            staticClass: "td-icon",
            class: {"td-icon-choose": "0.5" == e.playSpeed}
        }), e._v(" "), i("span", {staticClass: "td-context-menu__text"}, [e._v("0.5x")]), e._v(" "), e._m(2)])])])])])
    }, o = [function () {
        var e = this.$createElement, t = this._self._c || e;
        return t("span", {staticClass: "td-context-menu__tips"}, [t("img", {attrs: {alt: ""}})])
    }, function () {
        var e = this.$createElement, t = this._self._c || e;
        return t("span", {staticClass: "td-context-menu__tips"}, [t("img", {attrs: {alt: ""}})])
    }, function () {
        var e = this.$createElement, t = this._self._c || e;
        return t("span", {staticClass: "td-context-menu__tips"}, [t("img", {attrs: {alt: ""}})])
    }];
    i._withStripped = !0
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    });
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("li", {
            staticClass: "td-context-menu__item is-separate", on: {
                mousemove: function (t) {
                    t.stopPropagation(), e.addPopupMenu("setting"), e.addPopupMenu("audiotrack_list", 2)
                }, mouseleave: function (t) {
                    e.addDelaydelPopupMenu("audiotrack_list", 0), e.addDelaydelPopupMenu("setting")
                }
            }
        }, [n("div", {
            staticClass: "td-context-menu__content",
            class: {"is-disabled": 0 === e.trackList.length}
        }, [n("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.trackList.length > 0,
                expression: "trackList.length > 0"
            }], staticClass: "td-context-menu__tips"
        }, [e._v(e._s(e.trackList.length))]), e._v(" "), n("span", {staticClass: "td-context-menu__text"}, [e._v("音轨选择")]), e._v(" "), n("i", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.trackList.length > 0,
                expression: "trackList.length > 0"
            }], staticClass: "td-icon-more-right"
        })]), e._v(" "), n("ul", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.trackList.length > 0,
                expression: "trackList.length > 0"
            }], staticClass: "td-context-menu__children", attrs: {id: "audiotrack_list"}
        }, e._l(e.trackList, function (t, i) {
            return n("li", {
                key: i, staticClass: "td-context-menu__item", on: {
                    click: function (t) {
                        return e.selectTrack(i)
                    }
                }
            }, [n("div", {staticClass: "td-context-menu__content"}, [n("span", {staticClass: "td-icon"}), e._v(" "), n("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: i === e.currentTrackIndex,
                    expression: "index === currentTrackIndex"
                }], staticClass: "td-icon td-icon-choose"
            }), e._v(" "), n("span", {staticClass: "td-context-menu__text"}, [e._v(e._s(t))])])])
        }), 0)])
    }, o = [];
    i._withStripped = !0
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return i
    }), n.d(t, "b", function () {
        return o
    });
    var i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", [n("li", {
            staticClass: "td-context-menu__item", on: {
                mousemove: function (t) {
                    t.stopPropagation(), e.addPopupMenu("setting"), e.addPopupMenu("subtitle_local", 2)
                }, mouseleave: function (t) {
                    e.addDelaydelPopupMenu("subtitle_local", 0), e.addDelaydelPopupMenu("setting")
                }
            }
        }, [n("div", {
            staticClass: "td-context-menu__content", on: {
                click: function (t) {
                    e.manualLoadSubtitle(!1), e.trackEventPlayerFunctionClick("button=local_subtitle")
                }
            }
        }, [n("i", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: !e.isSubtitleHided && (2 === e.currentSubtitleType || 4 === e.currentSubtitleType),
                expression: "!isSubtitleHided && (currentSubtitleType === 2 || currentSubtitleType === 4)"
            }], staticClass: "td-icon td-icon-choose"
        }), e._v(" "), n("span", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.localSubtitleList.length > 0,
                expression: "localSubtitleList.length > 0"
            }], staticClass: "td-context-menu__tips"
        }, [e._v(e._s(e.localSubtitleList.length))]), e._v(" "), n("span", {staticClass: "td-context-menu__text"}, [e._v("本地字幕")]), e._v(" "), n("i", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.localSubtitleList.length > 0,
                expression: "localSubtitleList.length > 0"
            }], staticClass: "td-icon-more-right"
        })]), e._v(" "), n("ul", {
            directives: [{
                name: "show",
                rawName: "v-show",
                value: e.localSubtitleList.length > 0,
                expression: "localSubtitleList.length > 0"
            }], staticClass: "td-context-menu__children", attrs: {id: "subtitle_local"}
        }, [e._l(e.localSubtitleList, function (t, i) {
            return n("li", {
                key: "localSubtitle" + i, staticClass: "td-context-menu__item", on: {
                    click: function (n) {
                        e.loadSubtitle(t, i), e.trackEventPlayerFunctionClick("button=local_subtitle")
                    }
                }
            }, [n("div", {staticClass: "td-context-menu__content"}, [n("span", {
                staticClass: "td-icon",
                class: {"td-icon-choose": !e.isSubtitleHided && i === e.currentSubtitleIndex && [2, 4].includes(e.currentSubtitleType)}
            }), e._v(" "), n("span", {staticClass: "td-context-menu__text"}, [e._v(e._s(e.getPathText(t.path)))])])])
        }), e._v(" "), n("li", {
            staticClass: "td-context-menu__item", on: {
                click: function (t) {
                    e.manualLoadSubtitle(), e.trackEventPlayerFunctionClick("button=local_subtitle")
                }
            }
        }, [e._m(0)])], 2)]), e._v(" "), n("li", {
            staticClass: "td-context-menu__item", on: {
                mousemove: function (t) {
                    t.stopPropagation(), e.addPopupMenu("setting"), e.addPopupMenu("subtitle_online", 2)
                }, mouseleave: function (t) {
                    e.addDelaydelPopupMenu("subtitle_online", 0), e.addDelaydelPopupMenu("setting")
                }
            }
        }, [n("div", {staticClass: "td-context-menu__content"}, [e.isSubtitleHided || 3 !== e.currentSubtitleType ? e._e() : n("i", {staticClass: "td-icon td-icon-choose"}), e._v(" "), n("span", {staticClass: "td-context-menu__text"}, [e._v("在线字幕")]), e._v(" "), e.onlineSubtitleList.length > 0 ? n("span", {staticClass: "td-context-menu__tips"}, [e._v(e._s(e.onlineSubtitleList.length))]) : e._e(), e._v(" "), n("i", {staticClass: "td-icon-more-right"})]), e._v(" "), n("ul", {
            staticClass: "td-context-menu__children",
            attrs: {id: "subtitle_online"}
        }, [e.isSubtitleLoading || 0 !== e.onlineSubtitleList.length ? e._e() : n("li", {staticClass: "td-context-menu__item"}, [e._m(1)]), e._v(" "), e._l(e.onlineSubtitleList, function (t, i) {
            return n("li", {
                key: "onlineSubtitle" + i, staticClass: "td-context-menu__item", on: {
                    click: function (n) {
                        e.loadSubtitle(t, i), e.trackEventPlayerFunctionClick("button=online_subtitle")
                    }
                }
            }, [n("div", {staticClass: "td-context-menu__content"}, [n("span", {
                staticClass: "td-icon",
                class: {"td-icon-choose": !e.isSubtitleHided && i === e.currentSubtitleIndex && 3 === e.currentSubtitleType}
            }), e._v(" "), n("span", {staticClass: "td-context-menu__text"}, [e._v(e._s(t.displayname || t.name || t.path))])])])
        }), e._v(" "), e.isSubtitleLoading ? n("li", {staticClass: "td-context-menu__item"}, [e._m(2)]) : n("li", {
            staticClass: "td-context-menu__item",
            on: {
                click: function (t) {
                    e.rematchSubtitle(), e.trackEventPlayerFunctionClick("button=online_subtitle_search")
                }
            }
        }, [e._m(3)])], 2)]), e._v(" "), n("li", {
            staticClass: "td-context-menu__item", on: {
                mousemove: function (t) {
                    t.stopPropagation(), e.addPopupMenu("setting"), e.addPopupMenu("subtitle_embed", 2)
                }, mouseleave: function (t) {
                    e.addDelaydelPopupMenu("subtitle_embed", 0), e.addDelaydelPopupMenu("setting")
                }
            }
        }, [n("div", {
            staticClass: "td-context-menu__content",
            class: {"is-disabled": 0 === e.filterEmbedSubtitleList.length}
        }, [e.isSubtitleHided || 1 !== e.currentSubtitleType ? e._e() : n("i", {staticClass: "td-icon td-icon-choose"}), e._v(" "), n("span", {staticClass: "td-context-menu__text"}, [e._v("内嵌字幕")]), e._v(" "), e.filterEmbedSubtitleList.length > 0 ? n("span", {staticClass: "td-context-menu__tips"}, [e._v(e._s(e.filterEmbedSubtitleList.length))]) : e._e(), e._v(" "), e.filterEmbedSubtitleList.length > 0 ? n("i", {staticClass: "td-icon-more-right"}) : e._e()]), e._v(" "), e.filterEmbedSubtitleList.length > 0 ? n("ul", {
            staticClass: "td-context-menu__children",
            staticStyle: {"max-height": "120px"},
            attrs: {id: "subtitle_embed"}
        }, e._l(e.filterEmbedSubtitleList, function (t, i) {
            return n("li", {
                key: "embedSubtitle" + i, staticClass: "td-context-menu__item", on: {
                    click: function (n) {
                        e.loadSubtitle(t, i), e.trackEventPlayerFunctionClick("button=inline_subtitle")
                    }
                }
            }, [n("div", {staticClass: "td-context-menu__content"}, [n("span", {
                staticClass: "td-icon",
                class: {"td-icon-choose": !e.isSubtitleHided && i === e.currentSubtitleIndex && 1 === e.currentSubtitleType}
            }), e._v(" "), n("span", {staticClass: "td-context-menu__text"}, [e._v(e._s(t.name || t.languageList[i]))])])])
        }), 0) : e._e()]), e._v(" "), n("li", {
            staticClass: "td-context-menu__item", on: {
                click: function (t) {
                    e.showOrHideSubtitle(), e.trackEventPlayerFunctionClick("button=hide_subtitle")
                }, mousemove: function (t) {
                    t.stopPropagation(), e.addPopupMenu("setting"), e.addPopupMenu("subtitle_embed", 2)
                }, mouseleave: function (t) {
                    e.addDelaydelPopupMenu("subtitle_embed", 0), e.addDelaydelPopupMenu("setting")
                }
            }
        }, [n("div", {
            staticClass: "td-context-menu__content",
            class: {"is-disabled": !e.isEnableHideSubtitle}
        }, [e.isEnableHideSubtitle && e.isSubtitleHided ? n("i", {staticClass: "td-icon td-icon-choose"}) : e._e(), e._v(" "), n("span", {staticClass: "td-context-menu__text"}, [e._v("隐藏字幕")])])]), e._v(" "), n("li", {
            staticClass: "td-context-menu__item",
            on: {
                click: e.onClickSbutitleSetting, mousemove: function (t) {
                    t.stopPropagation(), e.addPopupMenu("setting"), e.addPopupMenu("subtitle_embed", 2)
                }, mouseleave: function (t) {
                    e.addDelaydelPopupMenu("subtitle_embed", 0), e.addDelaydelPopupMenu("setting")
                }
            }
        }, [n("div", {
            staticClass: "td-context-menu__content",
            class: {"is-disabled": !e.isEnableHideSubtitle || e.isSubtitleHided}
        }, [n("span", {staticClass: "td-context-menu__text"}, [e._v("字幕设置")])])])])
    }, o = [function () {
        var e = this.$createElement, t = this._self._c || e;
        return t("div", {staticClass: "td-context-menu__content"}, [t("span", {staticClass: "td-icon"}), this._v(" "), t("span", {staticClass: "td-context-menu__text"}, [this._v("载入字幕")])])
    }, function () {
        var e = this.$createElement, t = this._self._c || e;
        return t("div", {staticClass: "td-context-menu__content is-disabled"}, [t("span", {staticClass: "td-icon"}), this._v(" "), t("span", {staticClass: "td-context-menu__text"}, [this._v("暂未找到匹配的在线字幕")])])
    }, function () {
        var e = this.$createElement, t = this._self._c || e;
        return t("div", {staticClass: "td-context-menu__content"}, [t("i", {staticClass: "td-icon td-icon-loading"}), this._v(" "), t("span", {staticClass: "td-icon"}), this._v(" "), t("span", {staticClass: "td-context-menu__text"}, [this._v("正在匹配")])])
    }, function () {
        var e = this.$createElement, t = this._self._c || e;
        return t("div", {staticClass: "td-context-menu__content"}, [t("span", {staticClass: "td-icon"}), this._v(" "), t("span", {staticClass: "td-context-menu__text"}, [this._v("再次匹配")])])
    }];
    i._withStripped = !0
}, , , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.CodeSoure = t.ThunderDir = t.IVsrState = t.Subtitle3DMode = t.SubtitleSuppressType = t.TaskType = t.DcdnStatusCode = t.CreateError = t.ErrorFrom = t.XmpMediaType = t.OpenMode = t.XmpMediaState = t.XmpMediaAttr = t.XmpMediaCategory = t.XmpMediaDatabaseTable = void 0, function (e) {
        e[e.UnkownList = 0] = "UnkownList", e[e.Playlist = 1] = "Playlist", e[e.BtFile = 2] = "BtFile", e[e.ThPlaylist = 3] = "ThPlaylist", e[e.ThBtFile = 4] = "ThBtFile", e[e.LoadPlaylist = 5] = "LoadPlaylist", e[e.LoadThPlaylist = 6] = "LoadThPlaylist"
    }(t.XmpMediaDatabaseTable || (t.XmpMediaDatabaseTable = {})), function (e) {
        e[e.Unkown = 0] = "Unkown", e[e.Download = 1] = "Download", e[e.Play = 2] = "Play", e[e.Collect = 3] = "Collect"
    }(t.XmpMediaCategory || (t.XmpMediaCategory = {})), function (e) {
        e[e.NumberStart = 0] = "NumberStart", e[e.MediaId = 1] = "MediaId", e[e.OwnerMediaId = 2] = "OwnerMediaId", e[e.CreateTime = 3] = "CreateTime", e[e.PlayTime = 4] = "PlayTime", e[e.LastPlayTime = 5] = "LastPlayTime", e[e.Duration = 6] = "Duration", e[e.Height = 7] = "Height", e[e.Width = 8] = "Width", e[e.PreState = 9] = "PreState", e[e.State = 10] = "State", e[e.Position = 11] = "Position", e[e.LastStartPos = 12] = "LastStartPos", e[e.PlaySpeed = 13] = "PlaySpeed", e[e.SubtitleShow = 14] = "SubtitleShow", e[e.SubtitleLanguage = 15] = "SubtitleLanguage", e[e.SubtitleType = 16] = "SubtitleType", e[e.SubtitlePosition = 17] = "SubtitlePosition", e[e.SubtitleTimming = 18] = "SubtitleTimming", e[e.Subtitle3D = 19] = "Subtitle3D", e[e.Subtitle2Show = 20] = "Subtitle2Show", e[e.Subtitle2Language = 21] = "Subtitle2Language", e[e.Subtitle2Type = 22] = "Subtitle2Type", e[e.Subtitle2Position = 23] = "Subtitle2Position", e[e.Subtitle2Timming = 24] = "Subtitle2Timming", e[e.Subtitle23D = 25] = "Subtitle23D", e[e.FileSize = 26] = "FileSize", e[e.Category = 27] = "Category", e[e.Type = 28] = "Type", e[e.MediaIndex = 29] = "MediaIndex", e[e.TaskId = 30] = "TaskId", e[e.TaskStop = 31] = "TaskStop", e[e.AudioTrack = 32] = "AudioTrack", e[e.ThunderTaskId = 33] = "ThunderTaskId", e[e.ThunderTaskSubId = 34] = "ThunderTaskSubId", e[e.PlayPercent = 35] = "PlayPercent", e[e.OpenFrom = 36] = "OpenFrom", e[e.DLNA = 37] = "DLNA", e[e.transcode = 38] = "transcode", e[e.NumberEnd = 39] = "NumberEnd", e[e.StringStart = 4096] = "StringStart", e[e.Name = 4097] = "Name", e[e.Url = 4098] = "Url", e[e.PlayUrl = 4099] = "PlayUrl", e[e.Cid = 4100] = "Cid", e[e.Gcid = 4101] = "Gcid", e[e.Subtitle = 4102] = "Subtitle", e[e.Subtitle2 = 4103] = "Subtitle2", e[e.Ext = 4104] = "Ext", e[e.Played = 4105] = "Played", e[e.AudioChannel = 4106] = "AudioChannel", e[e.OutputMode = 4107] = "OutputMode", e[e.Brightness = 4108] = "Brightness", e[e.ContrastRatio = 4109] = "ContrastRatio", e[e.Saturation = 4110] = "Saturation", e[e.SubtitleSize = 4111] = "SubtitleSize", e[e.SubtitleColor = 4112] = "SubtitleColor", e[e.SubtitleFont = 4113] = "SubtitleFont", e[e.Subtitle2Size = 4114] = "Subtitle2Size", e[e.Subtitle2Color = 4115] = "Subtitle2Color", e[e.Subtitle2Font = 4116] = "Subtitle2Font", e[e.Proportion = 4117] = "Proportion", e[e.AudioTime = 4118] = "AudioTime", e[e.Rorate = 4119] = "Rorate", e[e.FlipH = 4120] = "FlipH", e[e.FlipV = 4121] = "FlipV", e[e.LocalAudioTrack = 4122] = "LocalAudioTrack", e[e.ImgSrc = 4123] = "ImgSrc", e[e.PanFileId = 4124] = "PanFileId", e[e.RationText = 4125] = "RationText", e[e.RationTextEx = 4126] = "RationTextEx", e[e.vipLevel = 4127] = "vipLevel", e[e.PlayFrom = 4128] = "PlayFrom", e[e.Resolution = 4129] = "Resolution", e[e.TransGcid = 4130] = "TransGcid", e[e.PlayType = 4131] = "PlayType", e[e.ShowBackIcon = 4132] = "ShowBackIcon", e[e.ResolutionMedias = 4133] = "ResolutionMedias", e[e.TaskUrl = 4134] = "TaskUrl", e[e.IsYunRecvTask = 4135] = "IsYunRecvTask", e[e.MimeType = 4136] = "MimeType", e[e.StringEnd = 4137] = "StringEnd", e[e.IsZipPlay = 8192] = "IsZipPlay"
    }(t.XmpMediaAttr || (t.XmpMediaAttr = {})), function (e) {
        e[e.Invalid = -100] = "Invalid", e[e.PreOpen = -10] = "PreOpen", e[e.QueryExt = -9] = "QueryExt", e[e.DownloadTorrent = -3] = "DownloadTorrent", e[e.ParserTorrent = -2] = "ParserTorrent", e[e.GetPlayUrl = -1] = "GetPlayUrl", e[e.Ready = 0] = "Ready", e[e.Opening = 1] = "Opening", e[e.Pausing = 2] = "Pausing", e[e.Paused = 3] = "Paused", e[e.Playing = 4] = "Playing", e[e.Play = 5] = "Play", e[e.Closeing = 6] = "Closeing", e[e.Completed = 7] = "Completed", e[e.Stopped = 8] = "Stopped", e[e.Error = 9] = "Error"
    }(t.XmpMediaState || (t.XmpMediaState = {})), function (e) {
        e[e.XMPDrag = 0] = "XMPDrag"
    }(t.OpenMode || (t.OpenMode = {})), function (e) {
        e[e.Unkown = 0] = "Unkown", e[e.Dc = 1] = "Dc", e[e.Bt = 2] = "Bt", e[e.BtFile = 3] = "BtFile", e[e.Gvod = 4] = "Gvod", e[e.Dir = 5] = "Dir", e[e.LocalUrl = 6] = "LocalUrl"
    }(t.XmpMediaType || (t.XmpMediaType = {})), function (e) {
        e.XMP = "xmp", e.APlayer = "aplayer", e.DownloadKernel = "download_kernel", e.Thunder = "thunder", e.Other = "other", e.Exit = "exit", e.Crash = "crash", e.Restart = "restart", e.CancelDownloadCodecs = "cancel_download_codecs"
    }(t.ErrorFrom || (t.ErrorFrom = {})), function (e) {
        e[e.Unkown = 0] = "Unkown", e[e.MediaFileNotFound = 1] = "MediaFileNotFound", e[e.FilePathNotExist = 2] = "FilePathNotExist"
    }(t.CreateError || (t.CreateError = {})), function (e) {
        e[e.Unkown = -1] = "Unkown", e[e.Success = 0] = "Success", e[e.QueryFailed = 1] = "QueryFailed", e[e.ServerError = 2] = "ServerError", e[e.ResourceNotFound = 3] = "ResourceNotFound", e[e.AuthorizingFailed = 4] = "AuthorizingFailed", e[e.ForbidByCopyright = 5] = "ForbidByCopyright", e[e.ForbidByPorNoGraphy = 6] = "ForbidByPorNoGraphy", e[e.ForbidByReactionary = 7] = "ForbidByReactionary", e[e.ForbidByOtherFilter = 8] = "ForbidByOtherFilter"
    }(t.DcdnStatusCode || (t.DcdnStatusCode = {})), function (e) {
        e[e.Unkown = 0] = "Unkown", e[e.P2sp = 1] = "P2sp", e[e.Bt = 2] = "Bt", e[e.Emule = 3] = "Emule", e[e.Group = 4] = "Group", e[e.Magnet = 5] = "Magnet"
    }(t.TaskType || (t.TaskType = {})), function (e) {
        e[e.Unkown = 1] = "Unkown", e[e.QuickSuppress = 2] = "QuickSuppress", e[e.FineSuppress = 3] = "FineSuppress"
    }(t.SubtitleSuppressType || (t.SubtitleSuppressType = {})), function (e) {
        e[e.normal = 0] = "normal", e[e.LR3D = 1] = "LR3D", e[e.UD3D = 2] = "UD3D"
    }(t.Subtitle3DMode || (t.Subtitle3DMode = {})), function (e) {
        e[e.Unkown = 0] = "Unkown", e[e.Vsring = 1] = "Vsring", e[e.VsrReady = 2] = "VsrReady", e[e.VsrSucc = 3] = "VsrSucc", e[e.VsrFailed = 4] = "VsrFailed", e[e.VsrNotExist = 5] = "VsrNotExist", e[e.VsrFullSize = 6] = "VsrFullSize"
    }(t.IVsrState || (t.IVsrState = {})), function (e) {
        e[e.MediaId = 9999999999] = "MediaId"
    }(t.ThunderDir || (t.ThunderDir = {})), function (e) {
        e[e.Icon = 1] = "Icon", e[e.Pause = 2] = "Pause"
    }(t.CodeSoure || (t.CodeSoure = {}))
}, function (e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0}), t.DkHelper = t.DkEventNS = void 0;
    const o = n(239), r = n(11), a = n(1), s = n(0), l = n(119),
        c = s.default.getLogger("xmp-vip-download-kernel-helper");
    var u;
    !function (e) {
        e.taskInserted = "OnTaskInserted", e.taskCompleted = "OnTaskCompleted", e.taskRemoved = "OnTaskRemoved", e.taskStatusChanged = "OnTaskStatusChanged", e.taskDetailChanged = "OnTaskDetailChanged", e.taskDcdnStatusChanged = "OnTaskDcdnStatusChanged", e.btSubFileDcdnStatusChanged = "OnBtSubFileDcdnStatusChanged", e.btSubFileDetailChanged = "OnBtSubFileDetailChanged"
    }(u = t.DkEventNS || (t.DkEventNS = {}));

    class d extends r.EventEmitter {
        constructor() {
            super(), this.mPeerId = void 0, this.init()
        }

        init() {
            this.setMaxListeners(0)
        }

        getTpPeerId() {
            return i(this, void 0, void 0, function* () {
                if (this.mPeerId) return this.mPeerId;
                {
                    let e = yield a.client.callServerFunction("GetTpPeerId");
                    return e && "" !== e && (this.mPeerId = e), this.mPeerId || ""
                }
            })
        }

        getCurrentCategoryId() {
            return i(this, void 0, void 0, function* () {
                return yield a.client.callServerFunction("GetCurrentCategoryId")
            })
        }

        getTaskBaseInfo(e) {
            return i(this, void 0, void 0, function* () {
                let t = null, n = yield a.client.callServerFunction("GetTaskBaseInfo", e);
                if (n) try {
                    t = JSON.parse(n)
                } catch (e) {
                    c.warning(e)
                }
                return t
            })
        }

        getTaskGcid(e) {
            return i(this, void 0, void 0, function* () {
                let t = yield this.getTaskBaseInfo(e), n = "";
                return t && t.gcid && (n = t.gcid), n
            })
        }

        getTaskStatus(e) {
            return i(this, void 0, void 0, function* () {
                return yield a.client.callServerFunction("GetTaskStatus", e)
            })
        }

        IsTaskExist(e) {
            return i(this, void 0, void 0, function* () {
                return yield a.client.callServerFunction("IsTaskExist", e)
            })
        }

        getTaskDetail(e) {
            return i(this, void 0, void 0, function* () {
                let t = null, n = yield a.client.callServerFunction("GetTaskInfo", e, void 0, "taskDetail");
                c.information("getTaskDetail", n);
                do {
                    if (!n) break;
                    let e = null;
                    try {
                        e = JSON.parse(n)
                    } catch (e) {
                        c.warning(e)
                    }
                    if (!e || !e.fileList) break;
                    let i = e.infoId, r = e.type;
                    t = {infoId: i, files: new Map};
                    for (let n of e.fileList) {
                        let e = -1, a = n.url;
                        r === o.DownloadKernel.TaskType.Bt ? (e = n.index, a = this.createBtFileUrl(n.index, i)) : r === o.DownloadKernel.TaskType.Group && (e = n.taskId);
                        let s = {
                            subId: e,
                            taskStatus: n.status,
                            filePath: n.filePath,
                            fileName: n.fileName,
                            gcid: n.gcid,
                            cid: n.cid,
                            url: a,
                            refUrl: n.refUrl || "",
                            fileSize: n.fileSize,
                            downloadSize: n.downloadSize,
                            errCode: n.errCode,
                            isNeedDownload: n.isNeedDownload,
                            dcdnStatus: n.dcdnStatus
                        };
                        t.files.set(e, s)
                    }
                } while (0);
                return t
            })
        }

        createBtTaskUrl(e) {
            return "bt://" + e
        }

        createBtFileUrl(e, t) {
            let n = this.createBtTaskUrl(t);
            return n = n + "/" + e
        }

        startTask(e) {
            this.operateTask(e, "continue")
        }

        stopTask(e) {
            this.operateTask(e, "pause")
        }

        enableDcdnWithVipCert(e, t) {
            return i(this, void 0, void 0, function* () {
                c.information("enableDcdnWithVipCert", "taskId", e, "vipCert", t), yield a.client.callServerFunction("EnableDcdnWithVipCert", e, t)
            })
        }

        updateDcdnWithVipCert(e, t) {
            return i(this, void 0, void 0, function* () {
                c.information("updateDcdnWithVipCert", "taskId", e, "vipCert", t), yield a.client.callServerFunction("UpdateDcdnWithVipCert", e, t)
            })
        }

        disableDcdnWithVipCert(e) {
            return i(this, void 0, void 0, function* () {
                c.information("disableDcdnWithVipCert", "taskId", e), yield a.client.callServerFunction("DisableDcdnWithVipCert", e)
            })
        }

        getDownloadingActiveTaskId() {
            return i(this, void 0, void 0, function* () {
                return yield a.client.callServerFunction("GetDownloadingActiveTaskId")
            })
        }

        attachDkEvents() {
            l.default.attachEvent("OnTaskInserted", this.onTaskInserted.bind(this)), l.default.attachEvent("OnTaskRemoved", this.onTaskRemoved.bind(this)), l.default.attachEvent("OnTaskStatusChanged", (e, t) => {
                {
                    let e = null;
                    try {
                        e = JSON.parse(t)
                    } catch (e) {
                        c.warning(e)
                    }
                    if (null !== e) for (let t in e) {
                        let n = e[t];
                        this.onTaskStatusChanged(Number(t), n)
                    }
                }
            }), l.default.attachEvent("OnTaskDetailChanged", (e, t, n) => {
                t.forEach(e => i(this, void 0, void 0, function* () {
                    this.onTaskDetailChanged(Number(e), yield this.getTaskBaseInfo(e))
                }))
            }), l.default.attachEvent("OnTaskDcdnStatusChanged", (e, t) => {
                if (null !== t) for (let e in t) {
                    let n = t[e];
                    this.onTaskDcdnStatusChanged(Number(e), n)
                }
            }), l.default.attachEvent("OnBtSubFileDcdnStatusChanged", this.onBtSubFileDcdnStatusChanged.bind(this)), l.default.attachEvent("OnBtSubFileDetailChanged", (e, t, n) => {
                {
                    let e = null;
                    try {
                        e = JSON.parse(n)
                    } catch (e) {
                        c.warning(e)
                    }
                    null !== e && this.onBtSubFileDetailChanged(t, e)
                }
            })
        }

        operateTask(e, t, n) {
            a.client.callServerFunction("OperateTask", e, t, n).catch()
        }

        onTaskInserted(e, t, n, i) {
            if (c.information("onTaskInserted categoryId:", t, ", categoryViewId:", n), null !== i) switch (n) {
                case o.DownloadKernel.CategroyViewID.Downloading:
                    i.forEach(e => {
                        this.emit(u.taskInserted, e)
                    });
                    break;
                case o.DownloadKernel.CategroyViewID.Completed:
                    i.forEach(e => {
                        this.emit(u.taskCompleted, e)
                    })
            }
        }

        onTaskRemoved(e, t, n, i) {
            if (c.information("onTaskRemoved categoryId:", t, ", categoryViewId:", n), i) switch (n) {
                case o.DownloadKernel.CategroyViewID.Downloading:
                case o.DownloadKernel.CategroyViewID.Completed:
                    i.forEach(e => {
                        this.emit(u.taskRemoved, e)
                    })
            }
        }

        onTaskStatusChanged(e, t) {
            this.emit(u.taskStatusChanged, e, t)
        }

        onTaskDetailChanged(e, t) {
            this.emit(u.taskDetailChanged, e, t)
        }

        onTaskDcdnStatusChanged(e, t) {
            this.emit(u.taskDcdnStatusChanged, e, t)
        }

        onBtSubFileDcdnStatusChanged(e, t, n, i) {
            this.emit(u.btSubFileDcdnStatusChanged, t, n, i)
        }

        onBtSubFileDetailChanged(e, t) {
            this.emit(u.btSubFileDetailChanged, e, t)
        }
    }

    t.DkHelper = d, t.default = new d
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.DownloadKernel = void 0, function (e) {
        let t, n, i, o, r, a, s, l, c, u, d, p, h, I, f, C, m, S, E;
        !function (e) {
            e[e.Unkown = 0] = "Unkown", e[e.Create = 1] = "Create", e[e.InvaldParam = 2] = "InvaldParam", e[e.InvaldLink = 3] = "InvaldLink", e[e.InvaldConfig = 4] = "InvaldConfig", e[e.Timeout = 5] = "Timeout", e[e.VerifyData = 6] = "VerifyData", e[e.Forbidden = 7] = "Forbidden", e[e.RangeDispatch = 8] = "RangeDispatch", e[e.FilePathOverRanging = 9] = "FilePathOverRanging", e[e.FileCreate = 201] = "FileCreate", e[e.FileWrite = 202] = "FileWrite", e[e.FileRead = 203] = "FileRead", e[e.FileRename = 204] = "FileRename", e[e.FileFull = 205] = "FileFull", e[e.BtUploadExist = 601] = "BtUploadExist", e[e.ForbinddenResource = 701] = "ForbinddenResource", e[e.ForbinddenAccount = 702] = "ForbinddenAccount", e[e.ForbinddenArea = 703] = "ForbinddenArea", e[e.ForbinddenCopyright = 704] = "ForbinddenCopyright", e[e.ForbinddenReaction = 705] = "ForbinddenReaction", e[e.ForbinddenPorn = 706] = "ForbinddenPorn", e[e.DownloadSDKCrash = 10001] = "DownloadSDKCrash"
        }(t = e.TaskError || (e.TaskError = {})), function (e) {
            e[e.Unkown = -1] = "Unkown", e[e.Success = 0] = "Success", e[e.QueryFailed = 1] = "QueryFailed", e[e.ServerError = 2] = "ServerError", e[e.ResourceNotFound = 3] = "ResourceNotFound", e[e.AuthorizingFailed = 4] = "AuthorizingFailed", e[e.ForbidByCopyright = 5] = "ForbidByCopyright", e[e.ForbidByPorNoGraphy = 6] = "ForbidByPorNoGraphy", e[e.ForbidByReactionary = 7] = "ForbidByReactionary", e[e.ForbidByOtherFilter = 8] = "ForbidByOtherFilter"
        }(n = e.DcdnStatusCode || (e.DcdnStatusCode = {})), function (e) {
            e[e.Begin = -1] = "Begin", e[e.Unkown = 0] = "Unkown", e[e.StandBy = 1] = "StandBy", e[e.PreDownloading = 2] = "PreDownloading", e[e.StartWaiting = 3] = "StartWaiting", e[e.StartPending = 4] = "StartPending", e[e.Started = 5] = "Started", e[e.StopPending = 6] = "StopPending", e[e.Stopped = 7] = "Stopped", e[e.Succeeded = 8] = "Succeeded", e[e.Failed = 9] = "Failed", e[e.Seeding = 10] = "Seeding", e[e.DestroyPending = 11] = "DestroyPending", e[e.End = 12] = "End"
        }(i = e.TaskStatus || (e.TaskStatus = {})), function (e) {
            e[e.Begin = -1] = "Begin", e[e.StandBy = 0] = "StandBy", e[e.Stopped = 1] = "Stopped", e[e.Started = 2] = "Started", e[e.Complete = 3] = "Complete", e[e.Forbidden = 4] = "Forbidden", e[e.Error = 5] = "Error", e[e.End = 6] = "End"
        }(o = e.BtFileStatus || (e.BtFileStatus = {})), function (e) {
            e[e.DispatchStrategyNone = 0] = "DispatchStrategyNone", e[e.DispatchStrategyOrigin = 1] = "DispatchStrategyOrigin", e[e.DispatchStrategyP2s = 2] = "DispatchStrategyP2s", e[e.DispatchStrategyP2p = 4] = "DispatchStrategyP2p", e[e.DispatchStrategyAll = -1] = "DispatchStrategyAll"
        }(r = e.DispatchStrategy || (e.DispatchStrategy = {})), function (e) {
            e[e.Unkown = 0] = "Unkown", e[e.P2sp = 1] = "P2sp", e[e.Bt = 2] = "Bt", e[e.Emule = 3] = "Emule", e[e.Group = 4] = "Group", e[e.Magnet = 5] = "Magnet"
        }(a = e.TaskType || (e.TaskType = {})), function (e) {
            e.Unkown = "Unkown", e.Downloading = "Downloading", e.Completed = "Completed", e.Recycle = "Recycle"
        }(s = e.CategroyViewID || (e.CategroyViewID = {})), function (e) {
            e[e.Unknow = 0] = "Unknow", e[e.TaskCreated = 1] = "TaskCreated", e[e.InsertToCategoryView = 2] = "InsertToCategoryView", e[e.RemoveFromCategoryView = 3] = "RemoveFromCategoryView", e[e.StatusChanged = 4] = "StatusChanged", e[e.DetailChanged = 5] = "DetailChanged", e[e.ChannelInfoChanged = 6] = "ChannelInfoChanged", e[e.DcdnStatusChanged = 7] = "DcdnStatusChanged", e[e.TaskDescriptionChanged = 8] = "TaskDescriptionChanged", e[e.TaskUserRead = 9] = "TaskUserRead", e[e.TaskRenamed = 10] = "TaskRenamed", e[e.TaskMovedEnd = 11] = "TaskMovedEnd", e[e.TaskMovingStateChange = 12] = "TaskMovingStateChange", e[e.BtSubFileDetailChanged = 13] = "BtSubFileDetailChanged", e[e.BtSubFileLoaded = 14] = "BtSubFileLoaded", e[e.BtSubFileForbidden = 15] = "BtSubFileForbidden", e[e.BtSubFileDcdnStatusChanged = 16] = "BtSubFileDcdnStatusChanged", e[e.TaskCategoryMovedEnd = 17] = "TaskCategoryMovedEnd", e[e.GroupTaskSubFileDetailChanged = 18] = "GroupTaskSubFileDetailChanged", e[e.TaskDestroying = 19] = "TaskDestroying", e[e.TaskDestroyed = 20] = "TaskDestroyed"
        }(l = e.TaskEventType || (e.TaskEventType = {})), function (e) {
            e[e.NumberStrart = 0] = "NumberStrart", e[e.TaskId = 1] = "TaskId", e[e.VirtualId = 2] = "VirtualId", e[e.SrcTotal = 3] = "SrcTotal", e[e.SrcUsing = 4] = "SrcUsing", e[e.FileSize = 5] = "FileSize", e[e.ReceivedSize = 6] = "ReceivedSize", e[e.DownloadSize = 7] = "DownloadSize", e[e.CreateTime = 8] = "CreateTime", e[e.CompletionTime = 9] = "CompletionTime", e[e.DownloadingPeriod = 10] = "DownloadingPeriod", e[e.Progress = 11] = "Progress", e[e.RecycleTime = 12] = "RecycleTime", e[e.FileCreated = 13] = "FileCreated", e[e.Forbidden = 14] = "Forbidden", e[e.CategoryId = 15] = "CategoryId", e[e.UserRead = 16] = "UserRead", e[e.OpenOnComplete = 17] = "OpenOnComplete", e[e.GroupTaskId = 18] = "GroupTaskId", e[e.DownloadSubTask = 19] = "DownloadSubTask", e[e.NameType = 20] = "NameType", e[e.OwnerProduct = 21] = "OwnerProduct", e[e.FileIndex = 22] = "FileIndex", e[e.NumberEnd = 23] = "NumberEnd", e[e.BooleanStart = 24] = "BooleanStart", e[e.Destroyed = 25] = "Destroyed", e[e.Background = 26] = "Background", e[e.Moving = 27] = "Moving", e[e.BooleanEnd = 28] = "BooleanEnd", e[e.StringStart = 29] = "StringStart", e[e.TaskName = 30] = "TaskName", e[e.SavePath = 31] = "SavePath", e[e.RelativePath = 32] = "RelativePath", e[e.TaskUrl = 33] = "TaskUrl", e[e.RefUrl = 34] = "RefUrl", e[e.Cid = 35] = "Cid", e[e.Gcid = 36] = "Gcid", e[e.Cookie = 37] = "Cookie", e[e.ProductInfo = 38] = "ProductInfo", e[e.Origin = 39] = "Origin", e[e.Description = 40] = "Description", e[e.UserData = 41] = "UserData", e[e.StringEnd = 42] = "StringEnd", e[e.ObjectStart = 43] = "ObjectStart", e[e.ObjectEnd = 44] = "ObjectEnd", e[e.CategoryViewId = 45] = "CategoryViewId", e[e.TaskType = 46] = "TaskType", e[e.ErrorCode = 47] = "ErrorCode"
        }(c = e.TaskAttribute || (e.TaskAttribute = {})), function (e) {
            e[e.UnKnown = 0] = "UnKnown", e[e.SrcTotal = 1] = "SrcTotal", e[e.SrcUsing = 2] = "SrcUsing", e[e.FileSize = 4] = "FileSize", e[e.ReceivedSize = 8] = "ReceivedSize", e[e.DownloadSize = 16] = "DownloadSize", e[e.CompletionTime = 32] = "CompletionTime", e[e.DownloadingPeriod = 64] = "DownloadingPeriod", e[e.Progress = 128] = "Progress", e[e.RecycleTime = 256] = "RecycleTime", e[e.FileCreated = 512] = "FileCreated", e[e.Forbidden = 1024] = "Forbidden", e[e.UserRead = 2048] = "UserRead", e[e.OpenOnComplete = 4096] = "OpenOnComplete", e[e.DownloadSubTask = 8192] = "DownloadSubTask", e[e.TaskName = 16384] = "TaskName", e[e.SavePath = 32768] = "SavePath", e[e.Cid = 65536] = "Cid", e[e.Gcid = 131072] = "Gcid", e[e.UserData = 262144] = "UserData", e[e.CategoryViewId = 524288] = "CategoryViewId", e[e.ErrorCode = 1048576] = "ErrorCode", e[e.TaskSpeed = 2097152] = "TaskSpeed", e[e.ChannelInfo = 4194304] = "ChannelInfo"
        }(u = e.TaskDetailChangedFlags || (e.TaskDetailChangedFlags = {})), function (e) {
            e[e.UnKnown = 0] = "UnKnown"
        }(d = e.BtSubFileDetailChangedFlags || (e.BtSubFileDetailChangedFlags = {})), function (e) {
            e[e.UnKnown = 0] = "UnKnown"
        }(p = e.GroupTaskSubFileDetailChangedFlags || (e.GroupTaskSubFileDetailChangedFlags = {})), function (e) {
            e[e.NumberStrart = 0] = "NumberStrart", e[e.TaskId = 1] = "TaskId", e[e.FileStatus = 2] = "FileStatus", e[e.DownloadSize = 3] = "DownloadSize", e[e.FileSize = 4] = "FileSize", e[e.EnableDcdn = 5] = "EnableDcdn", e[e.ErrorCode = 6] = "ErrorCode", e[e.DcdnStatus = 7] = "DcdnStatus", e[e.RealIndex = 8] = "RealIndex", e[e.FileOffset = 9] = "FileOffset", e[e.Visible = 10] = "Visible", e[e.Download = 11] = "Download", e[e.NumberEnd = 12] = "NumberEnd", e[e.StringStart = 13] = "StringStart", e[e.FinalName = 14] = "FinalName", e[e.RelativePath = 15] = "RelativePath", e[e.FileName = 16] = "FileName", e[e.FilePath = 17] = "FilePath", e[e.Cid = 18] = "Cid", e[e.Gcid = 19] = "Gcid", e[e.StringEnd = 20] = "StringEnd"
        }(h = e.BtFileAttribute || (e.BtFileAttribute = {})), function (e) {
            e[e.P2spUrl = 0] = "P2spUrl", e[e.BtInfoId = 1] = "BtInfoId", e[e.EmuleFileHash = 2] = "EmuleFileHash", e[e.MagnetUrl = 3] = "MagnetUrl", e[e.GroupTaskName = 4] = "GroupTaskName"
        }(I = e.KeyType || (e.KeyType = {})), function (e) {
            e[e.NameInclude = 1] = "NameInclude", e[e.BtDisplayNameInclude = 2] = "BtDisplayNameInclude"
        }(f = e.SearchKeyType || (e.SearchKeyType = {})), function (e) {
            e[e.ExtEqual = 1] = "ExtEqual", e[e.NameLikeAndExtEqual = 2] = "NameLikeAndExtEqual", e[e.TaskTypeEqual = 4] = "TaskTypeEqual"
        }(C = e.FilterKeyType || (e.FilterKeyType = {})), function (e) {
            e[e.All = 0] = "All", e[e.CommonForeground = 1] = "CommonForeground", e[e.CommonBackground = 2] = "CommonBackground", e[e.Temporary = 3] = "Temporary", e[e.PreDownload = 4] = "PreDownload", e[e.PrivateForeground = 5] = "PrivateForeground"
        }(m = e.KeyFilter || (e.KeyFilter = {})), function (e) {
            e[e.Unknown = -1] = "Unknown", e[e.LoadTaskBasic = 0] = "LoadTaskBasic", e[e.Create = 1] = "Create", e[e.Recycle = 2] = "Recycle", e[e.Recover = 3] = "Recover", e[e.ReDownload = 4] = "ReDownload", e[e.MoveThoughCategory = 5] = "MoveThoughCategory"
        }(S = e.TaskInsertReason || (e.TaskInsertReason = {})), function (e) {
            e[e.Unknown = -1] = "Unknown", e[e.ContextMenu = 0] = "ContextMenu", e[e.Button = 1] = "Button", e[e.TaskDetail = 2] = "TaskDetail", e[e.DownloadMagnet = 3] = "DownloadMagnet", e[e.ToolbarButton = 4] = "ToolbarButton", e[e.SelectDownloadLists = 5] = "SelectDownloadLists", e[e.DeleteTask = 6] = "DeleteTask"
        }(E = e.TaskStopReason || (e.TaskStopReason = {}))
    }(t.DownloadKernel || (t.DownloadKernel = {}))
}, function (e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                e.done ? o(e.value) : new n(function (t) {
                    t(e.value)
                }).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const o = n(11), r = n(296), a = n(20), s = n(39);

    function l(e) {
        s.information("on object freeer"), global.__xdasIPCServerInstance.notifyFreer(e.client, e.callbackId)
    }

    let c = void 0;
    global.__xdasIPCServerInstance || (global.__xdasIPCServerInstance = new class extends o.EventEmitter {
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
                if (t) throw new Error(`try to coverd function ${t}`);
                this.apis = Object.assign({}, this.apis, e)
            } while (0)
        }

        start(e, t) {
            if (this.singleton) throw new Error("try to start server duplicate");
            this.singleton = !0, this.server = new r.Server, global.__xdasIPCServer = this.server, this.server.listen(void 0, t), e && this.registerFunctions(e), this.server.on("connect", e => {
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
                    }, o = e.method;
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
                            i.success = !0, i.data = !(!this.apis || !this.apis[o]), this.sendAdapter(t, i);
                            break
                        }
                        if ("check_client_exist" === e.action) {
                            i.success = !0, i.data = !1, e.dst && this.clientAliasMap.hasOwnProperty(e.dst) && (i.data = !0), this.sendAdapter(t, i);
                            break
                        }
                        if (!o) break;
                        if (!this.apis || !this.apis[o]) {
                            i.error = `${e.__context} try to call method '${o}' which is undefined`, this.sendAdapter(t, i);
                            break
                        }
                        let n = void 0, r = this.decodeParameter(e.args, t);
                        try {
                            n = this.apis[o].apply(null, [t, e.__context].concat(r))
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
                this.emit("end", e);
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
            })
        }

        fireClientEvent(e, ...t) {
            this.forwardEvent(e, {name: a.serverContextName}, void 0, ...t)
        }

        callClientFunctionById(e, t, ...n) {
            this.sendAdapter(e, {action: "call_client_by_id", rid: t, args: n})
        }

        callClientFunctionByIdAw(e, t, ...n) {
            return new Promise((i, o) => {
                {
                    let o = this.generateId(), r = (e, t) => {
                        i(e ? [null, e] : [t])
                    }, a = {s_rid: o, action: "call_client_by_id", rid: t, args: n};
                    this.retCallbackMap[o] = Object.assign({callback: r}, a), this.sendAdapter(e, a)
                }
            })
        }

        checkClientFunction(e, t) {
            return "string" == typeof e && (e = this.getFullAlias(e)), this.internalCheckClientFunction(e, t)
        }

        callClientFunctionByName(e, t, ...n) {
            return new Promise((i, o) => {
                do {
                    if (!e) {
                        i([null, null]);
                        break
                    }
                    let o = void 0;
                    if ("string" == typeof e) {
                        if (e = this.getFullAlias(e), !this.clientAliasMap.hasOwnProperty(e)) {
                            i([null, null]);
                            break
                        }
                        o = this.clientAliasMap[e]
                    } else o = e;
                    if (!o) {
                        i([null, null]);
                        break
                    }
                    let r = this.generateId(), s = (e, t, n) => {
                        i(e ? [null, n, e] : [t, n])
                    };
                    if (n) for (let e = 0; e < n.length; e++) n[e] = this.convertFunction2Id(n[e]);
                    let l = {s_rid: r, action: "call_client_api", args: n, src: a.serverContextName, method: t};
                    this.retCallbackMap[r] = Object.assign({callback: s}, l), this.sendAdapter(o, l)
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
            return i(this, void 0, void 0, function* () {
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
                        let o = this.generateId(), r = (e, t) => {
                            n(!e && t)
                        }, a = {s_rid: o, action: "check_client_function", method: t};
                        this.retCallbackMap[o] = Object.assign({callback: r}, a), this.sendAdapter(i, a)
                    } while (0)
                })
            })
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
                        n.data = i, n.error = `register failed cause already register by another alias ${i}`;
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
                    let o = `call remote function but dst client is not start or ended ${n}, method ${e.method}`;
                    s.error(o), i.error = o, i.action = "remote_client_callback", i.success = !1, this.sendAdapter(t, i);
                    break
                }
                let o = this.generateId(), r = this.clientAliasMap[n];
                i = Object.assign({
                    s_rid: o,
                    action: "call_client_api",
                    args: e.args,
                    src: e.src
                }, i), this.retCallbackMap[o] = Object.assign({remote: t, dstRemote: r}, i), this.sendAdapter(r, i)
            } while (0)
        }

        fireRetCallback(e, t) {
            do {
                let n = e.s_rid;
                if (void 0 === n || null === n) break;
                let i = this.retCallbackMap[n];
                if (!i) break;
                const o = i.callback;
                if (!o) break;
                e.success ? o(null, this.decodeParameter(e.data, t)) : o(e.error, e.data), delete this.retCallbackMap[n], s.information("free fireRetCallback", n)
            } while (0)
        }

        decodeParameter(e, t) {
            let n = e;
            do {
                if (!e) break;
                if ("object" != typeof e) break;
                let o = e["__nodeipc_callback_id__{A9C9D760-14E8-42CB-A3CB-9C0A0DDFD732}"];
                if (o) {
                    n = ((...e) => i(this, void 0, void 0, function* () {
                        return this.callClientFunctionByIdAw(t, o, ...e)
                    })), global.__xdasObjectLiftMonitor && global.__xdasObjectLiftMonitor.setObjectFreer(n, {
                        client: t,
                        callbackId: o
                    }, l);
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
                if (void 0 === n || null === n) break;
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
                let o = this.eventMap[e];
                for (let r of o) this.sendAdapter(r, {
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
                for (let o of n) if (o === t) {
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
                for (let i = 0; i < n.length; i++) if (n[i] === t) {
                    this.eventMap[e].splice(i, 1), s.information("server detachEvent current eventMap", this.eventMap);
                    break
                }
            } while (0)
        }

        generateId() {
            return this.rid++
        }

        getFullAlias(e) {
            return `${this.server.getProductId()}-${e}`.toLowerCase()
        }
    }), c = global.__xdasIPCServerInstance, t.server = c
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        return function () {
            for (var n = new Array(arguments.length), i = 0; i < n.length; i++) n[i] = arguments[i];
            return e.apply(t, n)
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = n(309);
    e.exports = function (e, t, n, o, r) {
        var a = new Error(e);
        return i(a, t, n, o, r)
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return !(!e || !e.__CANCEL__)
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        this.message = e
    }

    i.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, i.prototype.__CANCEL__ = !0, e.exports = i
}, function (e, t, n) {
    var i = n(212),
        o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
        r = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
    t.getBlocksCount = function (e, t) {
        switch (t) {
            case i.L:
                return o[4 * (e - 1) + 0];
            case i.M:
                return o[4 * (e - 1) + 1];
            case i.Q:
                return o[4 * (e - 1) + 2];
            case i.H:
                return o[4 * (e - 1) + 3];
            default:
                return
        }
    }, t.getTotalCodewordsCount = function (e, t) {
        switch (t) {
            case i.L:
                return r[4 * (e - 1) + 0];
            case i.M:
                return r[4 * (e - 1) + 1];
            case i.Q:
                return r[4 * (e - 1) + 2];
            case i.H:
                return r[4 * (e - 1) + 3];
            default:
                return
        }
    }
}, function (e, t) {
    t.isValid = function (e) {
        return !isNaN(e) && e >= 1 && e <= 40
    }
}, function (e, t) {
    var n = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
        i = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (n = n.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
    t.KANJI = new RegExp(n, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(i, "g"), t.NUMERIC = new RegExp("[0-9]+", "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
    var o = new RegExp("^" + n + "$"), r = new RegExp("^[0-9]+$"), a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    t.testKanji = function (e) {
        return o.test(e)
    }, t.testNumeric = function (e) {
        return r.test(e)
    }, t.testAlphanumeric = function (e) {
        return a.test(e)
    }
}, function (e, t) {
    function n(e) {
        if ("number" == typeof e && (e = e.toString()), "string" != typeof e) throw new Error("Color should be defined as hex string");
        var t = e.slice().replace("#", "").split("");
        if (t.length < 3 || 5 === t.length || t.length > 8) throw new Error("Invalid hex color: " + e);
        3 !== t.length && 4 !== t.length || (t = Array.prototype.concat.apply([], t.map(function (e) {
            return [e, e]
        }))), 6 === t.length && t.push("F", "F");
        var n = parseInt(t.join(""), 16);
        return {r: n >> 24 & 255, g: n >> 16 & 255, b: n >> 8 & 255, a: 255 & n, hex: "#" + t.slice(0, 6).join("")}
    }

    t.getOptions = function (e) {
        e || (e = {}), e.color || (e.color = {});
        var t = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
            i = e.width && e.width >= 21 ? e.width : void 0, o = e.scale || 4;
        return {
            width: i,
            scale: i ? 4 : o,
            margin: t,
            color: {dark: n(e.color.dark || "#000000ff"), light: n(e.color.light || "#ffffffff")},
            type: e.type,
            rendererOpts: e.rendererOpts || {}
        }
    }, t.getScale = function (e, t) {
        return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale
    }, t.getImageWidth = function (e, n) {
        var i = t.getScale(e, n);
        return Math.floor((e + 2 * n.margin) * i)
    }, t.qrToImageData = function (e, n, i) {
        for (var o = n.modules.size, r = n.modules.data, a = t.getScale(o, i), s = Math.floor((o + 2 * i.margin) * a), l = i.margin * a, c = [i.color.light, i.color.dark], u = 0; u < s; u++) for (var d = 0; d < s; d++) {
            var p = 4 * (u * s + d), h = i.color.light;
            if (u >= l && d >= l && u < s - l && d < s - l) h = c[r[Math.floor((u - l) / a) * o + Math.floor((d - l) / a)] ? 1 : 0];
            e[p++] = h.r, e[p++] = h.g, e[p++] = h.b, e[p] = h.a
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0}), t.VipMenuNS = void 0;
    const o = n(38), r = n(0), a = n(31), s = n(88), l = n(50), c = n(1), u = n(240), d = n(119),
        p = r.default.getLogger("vip-menu");
    !function (e) {
        let t;
        !function (e) {
            e.refuse = "SpeedMenuTryState.Refuse", e.ready = "SpeedMenuTryState.Ready", e.running = "SpeedMenuTryState.Running", e.finish = "SpeedMenuTryState.Finish"
        }(t = e.SpeedMenuTryState || (e.SpeedMenuTryState = {}));
        let n, r = 0, h = 0, I = "", f = !1, C = t.refuse;

        function m(e, n, r, l, c) {
            return i(this, void 0, void 0, function* () {
                p.information("TryVipSpeedClick", o.default.isVip, o.default.isSuperVip, r, n, c, C);
                let e = !1;
                if (r) o.default.isVip ? e = !0 : a.CommonNS.openPayVipUrl(l); else {
                    switch ("300" === n ? I = "3.0" : "200" !== n || o.default.isVip || (I = "2.0"), C) {
                        case t.ready:
                            let i = !1;
                            o.default.isVip ? "300" === n && (i = !0) : "300" !== n && "200" !== n || (i = !0), e = !0, i && a.CommonNS.callXmp("BeginTrySpeed", I).catch();
                            break;
                        case t.running:
                            let r = !1;
                            o.default.isVip ? "300" === n && (r = !0) : "300" !== n && "200" !== n || (r = !0), r && a.CommonNS.callXmp("UpdateWhenChangeRemainTick").catch(), e = !0;
                            break;
                        case t.refuse:
                            "200" === n ? (l += "&aidfrom=normal_option_vip", o.default.isVip && (e = !0)) : (l += "&aidfrom=normal_option_super&default_tab=supervip", o.default.isSuperVip && (e = !0));
                            break;
                        case t.finish:
                            "200" === n ? (l += "&aidfrom=try_option_vip", o.default.isVip && (e = !0)) : (l += "&aidfrom=try_option_super&default_tab=supervip", o.default.isSuperVip && (e = !0))
                    }
                    s.VipStatNS.vipSpeedClick((yield a.CommonNS.isYunRecvTask()) ? "yp" : "dl", yield a.CommonNS.getCurrentTaskGcid(), yield a.CommonNS.getCurrentTaskUrl(), "options", c, I, yield _()).catch(), e || a.CommonNS.openPayVipUrl(l)
                }
                return e
            })
        }

        function S(e, s) {
            C = t.running, h = r = 60, I = s, u.server.fireClientEvent(n.stateChange, C, r, h, I), function () {
                let e = (new Date).toDateString();
                c.client.callServerFunction("SetValue", "XmpPlugin", "SpeedMenuLastTryDate", e).catch()
            }();
            let d = setInterval(() => {
                C === t.running ? (r--, u.server.fireClientEvent(n.stateChange, C, r, h, I), 0 === r && (clearInterval(d), function () {
                    return i(this, void 0, void 0, function* () {
                        r = 8, C = t.finish;
                        let e = yield a.CommonNS.callXmp(l.XmpPlayerFunction.getPlaySpeed);
                        switch (e) {
                            case 200:
                                e = o.default.isVip ? 0 : 1;
                                break;
                            case 300:
                                e = 1;
                                break;
                            default:
                                e = 0
                        }
                        e && (yield a.CommonNS.callXmp(l.XmpPlayerFunction.setPlaySpeed, "100")), u.server.fireClientEvent(n.stateChange, C, r, h, I);
                        let i = setInterval(() => {
                            C === t.finish ? 0 === --r && clearInterval(i) : clearInterval(i)
                        }, 1e3)
                    })
                }().catch())) : clearInterval(d)
            }, 1e3)
        }

        function E() {
            h = r, u.server.fireClientEvent(n.stateChange, C, r, h, I)
        }

        function O() {
            u.server.fireClientEvent(n.stateChange, C, r, h, I)
        }

        function _(e) {
            return i(this, void 0, void 0, function* () {
                if (!e) return a.CommonNS.callXmp("GetTrySpeedStatus");
                let n = 0;
                switch (C) {
                    case t.refuse:
                        n = 0;
                        break;
                    case t.ready:
                        n = 1;
                        break;
                    case t.running:
                        n = 2;
                        break;
                    case t.finish:
                        n = 3
                }
                return n
            })
        }

        function g() {
            return C
        }

        function T() {
            return i(this, void 0, void 0, function* () {
                f = yield c.client.callServerFunction("GetRemoteGlobalConfigValue", "vip", "playspeed_try_switch", f), p.information("loadGlobalConfig", f)
            })
        }

        function D() {
            return i(this, void 0, void 0, function* () {
                if ((yield a.CommonNS.getXmpPlayType()) === l.XmpPlayType.yunBo) return !1;
                if (o.default.isSuperVip) return !1;
                return (new Date).toDateString() !== (yield function () {
                    return i(this, void 0, void 0, function* () {
                        return c.client.callServerFunction("GetValue", "XmpPlugin", "SpeedMenuLastTryDate", "").catch()
                    })
                }())
            })
        }

        function y() {
            return i(this, void 0, void 0, function* () {
                do {
                    if (C === t.running) {
                        o.default.isSuperVip && (C = t.refuse, r = 0, h = 0, O());
                        break
                    }
                    let e = yield a.CommonNS.callXmp(l.XmpPlayerFunction.getPlaySpeed), i = Number(e);
                    if (yield a.CommonNS.isYunBo()) {
                        if (o.default.isVip) {
                            a.CommonNS.callXmp(l.XmpPlayerFunction.setPlaySpeed, `${e}`).catch(), p.information(`vip checkVipMenu, set speed ${e}`);
                            break
                        }
                        if (i > 100) {
                            p.information(`checkVipMenu in yunbo, change speed from ${e} to 100`), a.CommonNS.callXmp(l.XmpPlayerFunction.setPlaySpeed, "100").catch();
                            break
                        }
                    } else if ((yield a.CommonNS.isLocalPlay()) || (yield a.CommonNS.isPlayAndDownload())) {
                        if (f && C === t.refuse) {
                            let e = yield D();
                            C = e ? t.ready : t.refuse, u.server.fireClientEvent(n.stateChange, C)
                        }
                        if (200 === i) {
                            if (o.default.isVip) {
                                a.CommonNS.callXmp(l.XmpPlayerFunction.setPlaySpeed, `${e}`).catch(), p.information(`vip checkVipMenu, set speed ${e}`);
                                break
                            }
                            p.information(`checkVipMenu, change speed from ${e} to 100`), a.CommonNS.callXmp(l.XmpPlayerFunction.setPlaySpeed, "100").catch();
                            break
                        }
                        if (300 === i) {
                            if (o.default.isSuperVip) {
                                a.CommonNS.callXmp(l.XmpPlayerFunction.setPlaySpeed, `${e}`).catch(), p.information(`vip checkVipMenu, set speed ${e}`);
                                break
                            }
                            p.information(`checkVipMenu, change speed from ${e} to 100`), a.CommonNS.callXmp(l.XmpPlayerFunction.setPlaySpeed, "100").catch();
                            break
                        }
                    }
                    a.CommonNS.callXmp(l.XmpPlayerFunction.setPlaySpeed, `${e}`).catch(), p.information(`novip checkVipMenu, set speed ${e}`)
                } while (0)
            })
        }

        e.clickSpeedMenu = function (e, t, n) {
            return i(this, void 0, void 0, function* () {
                let i = "";
                i = t ? "https://pay.xunlei.com/pay.html?referfrom=v_pc_xlx_hytq_yp_play_speed&aidfrom=operation_bar" : "https://pay.xunlei.com/pay.html?referfrom=v_pc_xl11_hytq_play_speed_option";
                let o = !0, l = function (e, t) {
                    let n = "";
                    switch (e) {
                        case"125":
                            t && (n = "1.25");
                            break;
                        case"150":
                            t && (n = "1.5");
                            break;
                        case"175":
                            t && (n = "1.75");
                            break;
                        case"200":
                            n = "2.0";
                            break;
                        case"300":
                            n = "3.0"
                    }
                    return n
                }(e, t);
                return l && (s.VipStatNS.playSpeedClick(l).catch(), o = yield a.CommonNS.callXmp("TryVipSpeedClick", e, t, i, n)), p.information("clickSpeedMenu", e, t, o, h, r), o
            })
        }, function (e) {
            e.stateChange = "SpeedMenuEvent.StateChange"
        }(n = e.SpeedMenuEvent || (e.SpeedMenuEvent = {})), e.getTrySpeedStatus = _, e.isTrySpeedItem = function (e) {
            switch (e) {
                case"2.0":
                    return !o.default.isVip;
                case"3.0":
                    return !0
            }
            return !1
        }, e.monitorVipMenu = function () {
            o.default.addListener(o.UserEventNS.authorityChanged, () => {
                y().catch()
            }), function () {
                return i(this, void 0, void 0, function* () {
                    let e = yield c.client.callServerFunction("IsRemoteGlobalConfigInitFinish");
                    e ? T().catch() : d.default.attachEvent("OnRemoteGlobalConfigLoaded", () => i(this, void 0, void 0, function* () {
                        T().catch()
                    }))
                })
            }().catch();
            let e = {
                TryVipSpeedClick: m,
                BeginTrySpeed: S,
                GetTrySpeedStatus: _,
                GetTrySpeedState: g,
                UpdateWhenChangeRemainTick: E,
                FireTryState: O,
                CheckVipMenu: y
            };
            c.client.registerFunctions(e), d.default.attachEvent(l.XmpEvent.onOpenSucceeded, () => i(this, void 0, void 0, function* () {
                if (f) {
                    let e = yield D();
                    C = e ? t.ready : t.refuse, y().catch(), u.server.fireClientEvent(n.stateChange, C)
                }
            })), d.default.attachEvent(l.XmpEvent.onPreStop, () => i(this, void 0, void 0, function* () {
                C = t.refuse, u.server.fireClientEvent(n.stateChange, C)
            }))
        }, e.checkVipMenu = y
    }(t.VipMenuNS || (t.VipMenuNS = {}))
}, function (e, t, n) {
    "use strict";
    var i = n(382);
    n.n(i).a
}, function (e, t, n) {
    "use strict";
    var i = n(384);
    n.n(i).a
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    n(95), e.exports = n(289)
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(105);
    n(373);
    const o = n(290);
    n(1).client.start({name: "float-window", version: ""}, "thunder", !1, (e, ...t) => {
    }), new i.default({components: {FloatWindow: o.default}, render: e => e("float-window")}).$mount("#app")
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(219), o = n(146);
    for (var r in o) ["default"].indexOf(r) < 0 && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    n(250), n(251), n(205), n(206);
    var a = n(2), s = Object(a.a)(o.default, i.a, i.b, !1, null, null, null);
    s.options.__file = "src/float-window-renderer/app.vue", t.default = s.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(225), o = n(148);
    for (var r in o) ["default"].indexOf(r) < 0 && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var a = n(2), s = Object(a.a)(o.default, i.a, i.b, !1, null, null, null);
    s.options.__file = "src/float-window-renderer/ctrl/float.vue", t.default = s.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(227), o = n(150);
    for (var r in o) ["default"].indexOf(r) < 0 && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var a = n(2), s = Object(a.a)(o.default, i.a, i.b, !1, null, null, null);
    s.options.__file = "src/float-window-renderer/ctrl/timetip.vue", t.default = s.exports
}, function (e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0}), t.CommonNS = void 0;
    const o = n(1), r = n(50), a = n(238), s = "main-renderer", l = "vip-download-webview";
    !function (e) {
        function t(e, ...t) {
            return i(this, void 0, void 0, function* () {
                let n = yield o.client.callRemoteClientFunction(s, e, ...t).catch();
                return n && n.length > 0 ? n[0] : {}
            })
        }

        function n() {
            return i(this, void 0, void 0, function* () {
                return yield t(r.XmpPlayerFunction.getXmpPlayType)
            })
        }

        function c() {
            return i(this, void 0, void 0, function* () {
                return (yield n()) === r.XmpPlayType.yunBo
            })
        }

        function u() {
            return i(this, void 0, void 0, function* () {
                return Number(yield t(r.XmpPlayerFunction.getPlayingTaskId))
            })
        }

        e.callVipPlugin = function (e, ...t) {
            return i(this, void 0, void 0, function* () {
                let n = yield o.client.callRemoteClientFunction(l, e, ...t).catch();
                return n && n.length > 0 ? n[0] : {}
            })
        }, e.openPayVipUrl = function (e) {
            o.client.callRemoteClientFunction(l, "OpenPayVipUrl", e).catch()
        }, e.callXmp = t, e.getXmpPlayType = n, e.isYunBo = c, e.isPlayAndDownload = function () {
            return i(this, void 0, void 0, function* () {
                return (yield n()) === r.XmpPlayType.downloadAndPlay
            })
        }, e.isLocalPlay = function () {
            return i(this, void 0, void 0, function* () {
                return (yield n()) === r.XmpPlayType.localFile
            })
        }, e.isYunRecvTask = function () {
            return i(this, void 0, void 0, function* () {
                return t(r.XmpPlayerFunction.getCurrentMediaAttribute, r.XmpMediaAttr.IsYunRecvTask)
            })
        }, e.getXmpCurrentMode = function () {
            return i(this, void 0, void 0, function* () {
                return t(r.XmpPlayerFunction.getXmpCurrentMode)
            })
        }, e.getCurrentTaskGcid = function () {
            return i(this, void 0, void 0, function* () {
                return t(r.XmpPlayerFunction.getCurrentMediaAttribute, r.XmpMediaAttr.Gcid)
            })
        }, e.getCurrentTaskId = u, e.getCurrentTaskUrl = function () {
            return i(this, void 0, void 0, function* () {
                return t(r.XmpPlayerFunction.getCurrentMediaAttribute, r.XmpMediaAttr.Url)
            })
        }, e.getCurrentTaskIdOrPanId = function () {
            return i(this, void 0, void 0, function* () {
                return (yield c()) ? t(r.XmpPlayerFunction.getCurrentMediaAttribute, r.XmpMediaAttr.PanFileId) : t(r.XmpPlayerFunction.getPlayingTaskId)
            })
        }, e.getCurrentTaskStatus = function () {
            return i(this, void 0, void 0, function* () {
                let e = yield u();
                return a.default.getTaskStatus(e)
            })
        }, e.isZipPlay = function () {
            return i(this, void 0, void 0, function* () {
                return t(r.XmpPlayerFunction.getCurrentMediaAttribute, r.XmpMediaAttr.IsZipPlay)
            })
        }, e.getStatPlayType = function () {
            return i(this, void 0, void 0, function* () {
                return t(r.XmpPlayerFunction.getCurrentMediaAttribute, r.XmpMediaAttr.PlayType)
            })
        }, e.getStatPlayfrom = function () {
            return i(this, void 0, void 0, function* () {
                return (yield t(r.XmpPlayerFunction.getCurrentMediaAttribute, r.XmpMediaAttr.PlayFrom)) || ""
            })
        }, e.getStatOpenFrom = function () {
            return i(this, void 0, void 0, function* () {
                return (yield t(r.XmpPlayerFunction.getCurrentMediaAttribute, r.XmpMediaAttr.OpenFrom)) || ""
            })
        }, e.trackShowEvnet = function (e, n, i) {
            t("TrackShowEvent", (new Date).getTime(), e, n, function (e) {
                let t = "";
                return e.forEach((e, n) => {
                    "" !== t && (t += ","), t = t + n + "=" + e
                }), t
            }(i)).catch()
        }
    }(t.CommonNS || (t.CommonNS = {}))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.StatUtilitiesNS = void 0;
    const i = n(134), o = n(1), r = n(0).default.getLogger("vip-stat-utilities");
    !function (e) {
        e.trackEvent = function (e, t) {
            let n = (t = t || {}).attribute1 || "", a = t.attribute2 || "", s = t.extData || new Map;
            s.set("plugin_version", i.default.pluginVersion), s.set("client_version", i.default.thunderVersionString);
            let l = function (e) {
                let t = "";
                return e.forEach((e, n) => {
                    "" !== t && (t += ","), t = t + n + "=" + e
                }), t
            }(s);
            r.information("key", e), r.information("attribute1", n), r.information("attribute2", a), r.information("extData", l), o.client.callServerFunction("TrackEvent", e, n, a, 0, 0, 0, 0, l).catch()
        }, e.initUtilities = function () {
            let e = {TrackShowEvent: n};
            o.client.registerFunctions(e)
        };
        let t = new Map;

        function n(e, ...n) {
            let i = n[0], a = n[1], s = n[2], l = n[3];
            do {
                if (t.has(s) && i - t.get(s) < 2e3) {
                    r.information("break trackShowEvent", i, s), t.get(s);
                    break
                }
                r.information("key", a, "attribute1", s, "extData", l), o.client.callServerFunction("TrackEvent", a, s, "", 0, 0, 0, 0, l).catch()
            } while (0);
            t.set(s, i)
        }
    }(t.StatUtilitiesNS || (t.StatUtilitiesNS = {}))
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(228), o = n(152);
    for (var r in o) ["default"].indexOf(r) < 0 && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    n(298), n(299);
    var a = n(2), s = Object(a.a)(o.default, i.a, i.b, !1, null, null, null);
    s.options.__file = "src/vip/view/video-state.vue", t.default = s.exports
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(45), o = n(61), r = n(11), a = n(297), s = n(20);
    t.Server = class extends r.EventEmitter {
        constructor() {
            super(), this.server = o.createServer(e => this.handleConnection(e)), this.productId = ""
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
            }), t.on("error", () => {
            }), this.emit("connect", t)
        }

        handleRequest(e, t) {
            this.emit("message", e, t)
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const i = n(61), o = n(11), r = n(39), a = n(83), s = n(20);
    t.Client = class extends o.EventEmitter {
        constructor(e) {
            if (e = e || {}, super(), this.inprocess = !1, this.context = void 0, e.context && (this.context = Object.assign({}, e.context), this.context.productId = e.socketPrex), e.socket) this.socket = e.socket, this.bind(); else if (global.__xdasIPCServer && global.__xdasIPCServer.getProductId().toLowerCase() === e.socketPrex.toLowerCase()) this.inprocess = !0; else {
                let t = s.getSockPath(e.socketPrex);
                this.socket = i.connect(t), this.bind()
            }
        }

        isInprocess() {
            return this.inprocess
        }

        getContext() {
            return this.context
        }

        bind() {
            const e = new a.Parser, t = this.socket;
            t.on("data", t => {
                e.feed(t)
            }), t.on("connect", () => {
                this.emit("connect")
            }), t.on("end", () => {
                r.information("socket is ended"), this.socket = null, this.emit("end")
            }), t.on("error", e => {
                this.socket = null, this.emit("error", e)
            }), e.on("message", e => {
                this.emit("message", e)
            }), this.parser = e
        }

        send(e) {
            if (this.socket) try {
                this.socket.write(this.parser.encode(e))
            } catch (e) {
                r.error(e.message)
            } else r.information("This socket has been ended by the other party", this.context && this.context.name)
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = n(377);
    n.n(i).a
}, function (e, t, n) {
    "use strict";
    var i = n(379);
    n.n(i).a
}, function (e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0}), t.ThunderDljHelperNs = void 0;
    const o = n(5), r = n(45), a = n(0), s = n(41), l = n(301), c = a.default.getLogger("thunder.dlj.helper"),
        u = n(321), d = "https://sl-m-ssl.xunlei.com/h5/page/airplay/";
    !function (e) {
        const t = new class {
            drawQRCode(e) {
                let t = document.createElement("canvas"), n = e;
                return u.toCanvas(t, n, {margin: 0, width: 260}, e => {
                    c.warning("QRCode.toCanvas error = ", e)
                }), t
            }

            getDirPath(e) {
                return i(this, void 0, void 0, function* () {
                    let t = o.join(__profilesDir, "SharePic");
                    do {
                        let n = (new Date).getTime();
                        if (e = e || n, t = o.join(t, e.toString()), !(yield s.FileSystemAWNS.existsAW(t)) && !(yield s.FileSystemAWNS.mkdirsAW(t))) {
                            c.error("创建文件夹失败 path:", t);
                            break
                        }
                    } while (0);
                    return t
                })
            }

            createShareRes(e, t, n, a, s) {
                return i(this, void 0, void 0, function* () {
                    let i = "", u = "";
                    {
                        let p = yield l.getThunderBirdKey(e, a, s);
                        c.information("createShareRes", p), p = p ? d + "?bird_key=" + p + "&qrcode_from=" + n : d + "?qrcode_from=" + n, c.information("url", e, "shareLink", p);
                        let h = this.drawQRCode(p), I = document.createElement("canvas");
                        I.width = 72, I.height = 72, I.getContext("2d").drawImage(h, 0, 0, 72, 72);
                        let f = I.toDataURL("image/png").replace(/^data:image\/\w+;base64,/, ""),
                            C = new Buffer(f, "base64");
                        u = yield this.getDirPath(t);
                        let m = "share_res" + n + ".jpg";
                        i = o.join(u, m), c.information("codePath", i, "soure", n), r.writeFileSync(i, C)
                    }
                    return i
                })
            }
        };
        e.createQCode = function (e, n, o, r, a = 18e3) {
            return i(this, void 0, void 0, function* () {
                return t.createShareRes(e, n, r, a, o)
            })
        }
    }(t.ThunderDljHelperNs || (t.ThunderDljHelperNs = {}))
}, function (e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0}), t.getThunderBirdKey = void 0;
    const o = n(0), r = n(5), a = n(25), s = n(24), l = n(302),
        c = a.default(r.join(__rootDir, "../bin/ThunderHelper.node")), u = o.default.getLogger("BaiduDWZ");
    let d = {};

    function p(e, t, n, o) {
        return i(this, void 0, void 0, function* () {
            return s.isNullOrUndefined(t) && (t = 120), s.isNullOrUndefined(o) && (o = "xdas_send2phone_qr"), l.fetchSlRes({
                url: "/dlj_create",
                data: {url: e, timeout: t, source: o, fileName: n},
                method: "post"
            })
        })
    }

    t.getThunderBirdKey = function (e, t, n) {
        return i(this, void 0, void 0, function* () {
            let i = "";
            u.information("getThunderDlj enter cacheDWZs = ", d);
            do {
                if (null === e || "" === e) break;
                if (-1 !== e.indexOf("&taskDownload=")) {
                    let t = e.match(/.*&taskDownload=(.*)&scheme=xunleiapp:.?/);
                    if (t && t.length > 0) {
                        let n = t[1];
                        c.isThunderPrivateUrl(n) || (n = c.makeThunderPrivateUrl(n), e = e.replace(t[1], n))
                    }
                }
                u.information("getThunderDlj url = ", e);
                let o = e;
                if (null !== d[o] && void 0 !== d[o]) {
                    i = d[o];
                    break
                }
                let r = "";
                try {
                    let i = yield p(e, t, n);
                    u.information("getThunderDlj res = ", i), 200 === i.status && i.data && "ok" === i.data.result && (r = i.data.bird_key)
                } catch (e) {
                    r = ""
                }
                "" !== r && (d[o] = r), i = r
            } while (0);
            return u.information("getThunderDlj leave ret = ", i), i
        })
    }
}, function (e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0}), t.fetchRequest = t.fetchPCRequest = t.fetchPCRes = t.fetchSlRes = t.fetchFromApiProxy = void 0;
    const o = n(1), r = n(0), a = n(303), s = n(24), l = r.default.getLogger("FetchRes"), c = {
        mock: "http://easy-mock.com/mock/59f0652c1bd72e7a888988ab/sl",
        test: "http://test.api-shoulei-ssl.xunlei.com",
        prod: "http://api-shoulei-ssl.xunlei.com"
    };

    function u(e) {
        return (e = (e = encodeURIComponent(e)).replace(/\(/g, "%29")).replace(/\)/g, "%28")
    }

    function d({url: e, data: t, method: r = "get"}, c = "prod") {
        return i(this, arguments, void 0, function* () {
            l.information("fetchFromApiProxy", arguments);
            try {
                const i = yield Promise.all([o.client.callServerFunction("GetUserID"), o.client.callServerFunction("GetSessionID"), o.client.callServerFunction("GetPeerID")]), [d, p, h] = i;
                l.information(i);
                let I = {
                    _h: Object.assign({
                        "Account-Id": d,
                        "Peer-Id": h,
                        "User-Id": d,
                        "Session-Id": p,
                        "App-Type": "pc_xunlei"
                    }, t && t._h || {})
                };
                t && t._h && delete t._h, t && (t.peer_id = h);
                let f = {
                    accesskey: "pc.xunlei",
                    nonce: Math.floor(99999999 * Math.random()).toString(),
                    timestamp: Math.floor((new Date).getTime() / 1e3).toString()
                }, C = {};
                "get" === r && t && (C = t, t = null);
                for (let e in C) s.isObject(C[e]) || (f[e] = C[e]);
                let m = [];
                for (let e in f) m.push(u(e) + "%3D" + u(f[e]));
                m.sort();
                let S = u(e), E = r.toUpperCase() + "&" + S + "&", O = "";
                for (let e = 0; e < m.length - 1; ++e) O += m[e] + "%26";
                let _, g = E + (O += m[m.length - 1]);
                !t || "post" !== r && "put" !== r || (g += "%26" + JSON.stringify(t)), l.information("message: ", g), _ = "test" === c ? "c9879c94a55474304cca0abafb867653" : "89917368930f3fea5bafebe704d6b623";
                let T = a.ToolsUtilitiesAWNS.encryptHmacBuffer("sha1", _, g, "base64");
                T = (T = T.replace(/\+/g, "-")).replace(/\//g, "_");
                let D = e + "?";
                for (let e in f) D += u(e) + "=" + u(f[e]) + "&";
                D += "sig=" + T, l.information("fetchFromApiProxy method", r, ", uri", D, ", data", t, ", headers", I._h);
                const y = yield n(209);
                return y.defaults.adapter = n(120), y.defaults.headers["Content-Type"] = "post" === r ? "application/json" : "application/x-www-form-urlencoded", y.request({
                    method: r,
                    url: D,
                    data: t,
                    headers: I._h
                }).then(e => (l.information("fetchFromApiProxy success", e), e)).catch(e => (l.information("fetchFromApiProxy failed", e), {error: e}))
            } catch (e) {
                return {error: e}
            }
        })
    }

    function p({url: e, data: t, method: n = "get"}, r = "prod") {
        return i(this, void 0, void 0, function* () {
            let i = c[r], a = yield o.client.callServerFunction("GetValue", "ConfigFetchInterface", "TestServer", 0);
            return 1 === a && (i = c[r = "test"]), l.information("当前fetchSlRes 是否测试服:", a, " 远程地址:", i), d({
                url: `${i}${e}`,
                data: t,
                method: n
            }, r)
        })
    }

    t.fetchFromApiProxy = d, t.fetchSlRes = p, t.fetchPCRes = function ({url: e, data: t, method: n = "get"}, o = "prod") {
        return i(this, void 0, void 0, function* () {
            return p({url: e, data: t, method: n}, o)
        })
    }, t.fetchPCRequest = function ({url: e, data: t, method: r = "get"}, a = "prod") {
        return i(this, void 0, void 0, function* () {
            let i = c[a], s = yield o.client.callServerFunction("GetValue", "ConfigFetchInterface", "TestServer", 0);
            1 === s && (i = c[a = "test"]), l.information("当前fetchPCRequest 是否测试服:", s, " 远程地址:", i);
            let u = {_h: Object.assign({}, t && t._h || {})};
            t && t._h && delete t._h;
            const d = yield n(209);
            d.defaults.adapter = n(120), d.defaults.headers["Content-Type"] = "post" === r ? "application/json" : "application/x-www-form-urlencoded";
            try {
                return d.request({
                    method: r,
                    url: `${i}${e}`,
                    params: "get" === r && t ? t : {},
                    data: "post" === r && t ? t : {},
                    headers: u._h
                }).then(e => (l.information("fetchRequest success", e), e)).catch(e => (l.information("fetchRequest fail", e), {error: e}))
            } catch (e) {
                return {error: e}
            }
        })
    }, t.fetchRequest = function ({url: e, data: t, method: o = "get"}) {
        return i(this, arguments, void 0, function* () {
            l.information("fetchRequest", arguments);
            try {
                const i = yield n(209);
                return i.defaults.adapter = n(120), i.defaults.headers["Content-Type"] = "post" === o ? "application/json" : "application/x-www-form-urlencoded", i.request({
                    method: o,
                    url: e,
                    params: "get" === o && t ? t : {},
                    data: "post" === o && t ? t : {}
                }).then(e => (l.information("fetchRequest success", e), e)).catch(e => (l.information("fetchRequest fail", e), {error: e}))
            } catch (e) {
                return {error: e}
            }
        })
    }
}, function (e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0}), t.ToolsUtilitiesAWNS = void 0;
    const o = n(169), r = n(45), a = n(41), s = n(0).default.getLogger("Thunder.base.tools-utilities");
    !function (e) {
        function t(e) {
            return i(this, void 0, void 0, function* () {
                let t;
                if (e && (yield a.FileSystemAWNS.existsAW(e))) {
                    let n = r.createReadStream(e), i = o.createHash("md5");
                    n.on("data", e => {
                        i.update(e)
                    }), t = new Promise(e => {
                        n.on("end", () => {
                            let t = i.digest("hex");
                            t = t.toUpperCase(), e(t)
                        })
                    })
                } else t = new Promise(e => {
                    e(void 0)
                });
                return t
            })
        }

        e.genarateMd5 = function (e) {
            let t = void 0, n = o.createHash("md5");
            return null !== n && (t = n.update(e).digest("hex")), t
        }, e.matchFileMd5 = function (e, n) {
            return i(this, void 0, void 0, function* () {
                let i = !1, o = yield t(e);
                return void 0 !== o && o === n.toUpperCase() && (s.information("check full md5 sucessful"), i = !0), i
            })
        }, e.calculateFileMd5 = t, e.encryptBuffer = function (e, t) {
            let n = null;
            try {
                let i = o.createCipheriv("aes-128-ecb", t, ""), r = i.update(e), a = i.final();
                n = Buffer.concat([r, a])
            } catch (e) {
                s.error("encryptBuffer", e)
            }
            return n
        }, e.encryptSha1Buffer = function (e) {
            let t = null;
            try {
                t = o.createHash("sha1").update(e).digest("hex")
            } catch (e) {
                s.error("encryptSha1Buffer", e)
            }
            return t
        }, e.decryptBuffer = function (e, t) {
            let n = null;
            try {
                let i = o.createDecipheriv("aes-128-ecb", t, ""), r = i.update(e), a = i.final();
                n = Buffer.concat([r, a])
            } catch (e) {
                s.error("decryptBuffer", e)
            }
            return n
        }, e.encryptHmacBuffer = function (e, t, n, i = "hex") {
            let r = null;
            try {
                r = o.createHmac(e, t).update(n).digest(i)
            } catch (e) {
                s.error("encryptSha1Buffer", e)
            }
            return r
        }, e.setForegroundWindow = function (e, t) {
            return i(this, void 0, void 0, function* () {
                if (null !== e && null !== t) {
                    let n = (yield t.getNativeWindowHandle()).readUIntLE(0, 4);
                    e.setForegroundWindow(n) ? s.information("sucessful") : s.information("failed")
                }
            })
        }, e.setForegroundWindowMain = function (e, t) {
            if (null !== e && null !== t) {
                let n = t.getNativeWindowHandle().readUIntLE(0, 4);
                e.setForegroundWindow(n) ? s.information("sucessful") : s.information("failed")
            }
        }, e.getOSVersion = function (e) {
            let t = "other";
            if (null === e || void 0 === e) return t;
            let n = e.getOSVersion().split(".");
            return n && n.length > 0 && (t = "5" === n[0] ? "xp" : "6" === n[0] && "0" === n[1] ? "vista" : "6" === n[0] && "1" === n[1] ? "win7" : "6" === n[0] && "2" === n[1] ? "win8" : "6" === n[0] && "3" === n[1] ? "win8.1" : "10" === n[0] && "0" === n[1] ? "win10" : "other"), t
        }, e.isWin10OrGreater = function (e) {
            let t = !1;
            if (null === e || void 0 === e) return t;
            let n = e.getOSVersion().split(".");
            return n && n.length > 0 && parseInt(n[0], 10) >= 10 && (t = !0), t
        }
    }(t.ToolsUtilitiesAWNS || (t.ToolsUtilitiesAWNS = {}))
}, function (e, t, n) {
    "use strict";
    var i = n(32), o = n(241), r = n(306), a = n(210);

    function s(e) {
        var t = new r(e), n = o(r.prototype.request, t);
        return i.extend(n, r.prototype, t), i.extend(n, t), n
    }

    var l = s(a);
    l.Axios = r, l.create = function (e) {
        return s(i.merge(a, e))
    }, l.Cancel = n(244), l.CancelToken = n(319), l.isCancel = n(243), l.all = function (e) {
        return Promise.all(e)
    }, l.spread = n(320), e.exports = l, e.exports.default = l
}, function (e, t) {
    /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
    e.exports = function (e) {
        return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }
}, function (e, t, n) {
    "use strict";
    var i = n(210), o = n(32), r = n(314), a = n(315);

    function s(e) {
        this.defaults = e, this.interceptors = {request: new r, response: new r}
    }

    s.prototype.request = function (e) {
        "string" == typeof e && (e = o.merge({url: arguments[0]}, arguments[1])), (e = o.merge(i, {method: "get"}, this.defaults, e)).method = e.method.toLowerCase();
        var t = [a, void 0], n = Promise.resolve(e);
        for (this.interceptors.request.forEach(function (e) {
            t.unshift(e.fulfilled, e.rejected)
        }), this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected)
        }); t.length;) n = n.then(t.shift(), t.shift());
        return n
    }, o.forEach(["delete", "get", "head", "options"], function (e) {
        s.prototype[e] = function (t, n) {
            return this.request(o.merge(n || {}, {method: e, url: t}))
        }
    }), o.forEach(["post", "put", "patch"], function (e) {
        s.prototype[e] = function (t, n, i) {
            return this.request(o.merge(i || {}, {method: e, url: t, data: n}))
        }
    }), e.exports = s
}, function (e, t, n) {
    "use strict";
    var i = n(32);
    e.exports = function (e, t) {
        i.forEach(e, function (n, i) {
            i !== t && i.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[i])
        })
    }
}, function (e, t, n) {
    "use strict";
    var i = n(242);
    e.exports = function (e, t, n) {
        var o = n.config.validateStatus;
        n.status && o && !o(n.status) ? t(i("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, i, o) {
        return e.config = t, n && (e.code = n), e.request = i, e.response = o, e
    }
}, function (e, t, n) {
    "use strict";
    var i = n(32);

    function o(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    e.exports = function (e, t, n) {
        if (!t) return e;
        var r;
        if (n) r = n(t); else if (i.isURLSearchParams(t)) r = t.toString(); else {
            var a = [];
            i.forEach(t, function (e, t) {
                null !== e && void 0 !== e && (i.isArray(e) ? t += "[]" : e = [e], i.forEach(e, function (e) {
                    i.isDate(e) ? e = e.toISOString() : i.isObject(e) && (e = JSON.stringify(e)), a.push(o(t) + "=" + o(e))
                }))
            }), r = a.join("&")
        }
        return r && (e += (-1 === e.indexOf("?") ? "?" : "&") + r), e
    }
}, function (e, t, n) {
    "use strict";
    var i = n(32),
        o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function (e) {
        var t, n, r, a = {};
        return e ? (i.forEach(e.split("\n"), function (e) {
            if (r = e.indexOf(":"), t = i.trim(e.substr(0, r)).toLowerCase(), n = i.trim(e.substr(r + 1)), t) {
                if (a[t] && o.indexOf(t) >= 0) return;
                a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n
            }
        }), a) : a
    }
}, function (e, t, n) {
    "use strict";
    var i = n(32);
    e.exports = i.isStandardBrowserEnv() ? function () {
        var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");

        function o(e) {
            var i = e;
            return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
            }
        }

        return e = o(window.location.href), function (t) {
            var n = i.isString(t) ? o(t) : t;
            return n.protocol === e.protocol && n.host === e.host
        }
    }() : function () {
        return !0
    }
}, function (e, t, n) {
    "use strict";
    var i = n(32);
    e.exports = i.isStandardBrowserEnv() ? {
        write: function (e, t, n, o, r, a) {
            var s = [];
            s.push(e + "=" + encodeURIComponent(t)), i.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), i.isString(o) && s.push("path=" + o), i.isString(r) && s.push("domain=" + r), !0 === a && s.push("secure"), document.cookie = s.join("; ")
        }, read: function (e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        }, remove: function (e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write: function () {
        }, read: function () {
            return null
        }, remove: function () {
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = n(32);

    function o() {
        this.handlers = []
    }

    o.prototype.use = function (e, t) {
        return this.handlers.push({fulfilled: e, rejected: t}), this.handlers.length - 1
    }, o.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, o.prototype.forEach = function (e) {
        i.forEach(this.handlers, function (t) {
            null !== t && e(t)
        })
    }, e.exports = o
}, function (e, t, n) {
    "use strict";
    var i = n(32), o = n(316), r = n(243), a = n(210), s = n(317), l = n(318);

    function c(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }

    e.exports = function (e) {
        return c(e), e.baseURL && !s(e.url) && (e.url = l(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = i.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
            delete e.headers[t]
        }), (e.adapter || a.adapter)(e).then(function (t) {
            return c(e), t.data = o(t.data, t.headers, e.transformResponse), t
        }, function (t) {
            return r(t) || (c(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        })
    }
}, function (e, t, n) {
    "use strict";
    var i = n(32);
    e.exports = function (e, t, n) {
        return i.forEach(n, function (n) {
            e = n(e, t)
        }), e
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function (e, t, n) {
    "use strict";
    var i = n(244);

    function o(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (e) {
            t = e
        });
        var n = this;
        e(function (e) {
            n.reason || (n.reason = new i(e), t(n.reason))
        })
    }

    o.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason
    }, o.source = function () {
        var e;
        return {
            token: new o(function (t) {
                e = t
            }), cancel: e
        }
    }, e.exports = o
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return function (t) {
            return e.apply(null, t)
        }
    }
}, function (e, t, n) {
    var i = n(322), o = n(323), r = n(340), a = n(341);

    function s(e, t, n, r, a) {
        var s = [].slice.call(arguments, 1), l = s.length, c = "function" == typeof s[l - 1];
        if (!c && !i()) throw new Error("Callback required as last argument");
        if (!c) {
            if (l < 1) throw new Error("Too few arguments provided");
            return 1 === l ? (n = t, t = r = void 0) : 2 !== l || t.getContext || (r = n, n = t, t = void 0), new Promise(function (i, a) {
                try {
                    var s = o.create(n, r);
                    i(e(s, t, r))
                } catch (e) {
                    a(e)
                }
            })
        }
        if (l < 2) throw new Error("Too few arguments provided");
        2 === l ? (a = n, n = t, t = r = void 0) : 3 === l && (t.getContext && void 0 === a ? (a = r, r = void 0) : (a = r, r = n, n = t, t = void 0));
        try {
            var u = o.create(n, r);
            a(null, e(u, t, r))
        } catch (e) {
            a(e)
        }
    }

    t.create = o.create, t.toCanvas = s.bind(null, r.render), t.toDataURL = s.bind(null, r.renderToDataURL), t.toString = s.bind(null, function (e, t, n) {
        return a.render(e, n)
    })
}, function (e, t) {
    e.exports = function () {
        return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
    }
}, function (e, t, n) {
    var i = n(89), o = n(77), r = n(212), a = n(324), s = n(325), l = n(326), c = n(327), u = n(328), d = n(245),
        p = n(329), h = n(332), I = n(333), f = n(78), C = n(334), m = n(211);

    function S(e, t, n) {
        var i, o, r = e.size, a = I.getEncodedBits(t, n);
        for (i = 0; i < 15; i++) o = 1 == (a >> i & 1), i < 6 ? e.set(i, 8, o, !0) : i < 8 ? e.set(i + 1, 8, o, !0) : e.set(r - 15 + i, 8, o, !0), i < 8 ? e.set(8, r - i - 1, o, !0) : i < 9 ? e.set(8, 15 - i - 1 + 1, o, !0) : e.set(8, 15 - i - 1, o, !0);
        e.set(r - 8, 8, 1, !0)
    }

    function E(e, t, n) {
        var r = new a;
        n.forEach(function (t) {
            r.put(t.mode.bit, 4), r.put(t.getLength(), f.getCharCountIndicator(t.mode, e)), t.write(r)
        });
        var s = 8 * (o.getSymbolTotalCodewords(e) - d.getTotalCodewordsCount(e, t));
        for (r.getLengthInBits() + 4 <= s && r.put(0, 4); r.getLengthInBits() % 8 != 0;) r.putBit(0);
        for (var l = (s - r.getLengthInBits()) / 8, c = 0; c < l; c++) r.put(c % 2 ? 17 : 236, 8);
        return function (e, t, n) {
            for (var r = o.getSymbolTotalCodewords(t), a = d.getTotalCodewordsCount(t, n), s = r - a, l = d.getBlocksCount(t, n), c = l - r % l, u = Math.floor(r / l), h = Math.floor(s / l), I = h + 1, f = u - h, C = new p(f), m = 0, S = new Array(l), E = new Array(l), O = 0, _ = i.from(e.buffer), g = 0; g < l; g++) {
                var T = g < c ? h : I;
                S[g] = _.slice(m, m + T), E[g] = C.encode(S[g]), m += T, O = Math.max(O, T)
            }
            var D, y, N = i.alloc(r), v = 0;
            for (D = 0; D < O; D++) for (y = 0; y < l; y++) D < S[y].length && (N[v++] = S[y][D]);
            for (D = 0; D < f; D++) for (y = 0; y < l; y++) N[v++] = E[y][D];
            return N
        }(r, e, t)
    }

    function O(e, t, n, i) {
        var r;
        if (m(e)) r = C.fromArray(e); else {
            if ("string" != typeof e) throw new Error("Invalid data");
            var a = t;
            if (!a) {
                var d = C.rawSplit(e);
                a = h.getBestVersionForData(d, n)
            }
            r = C.fromString(e, a || 40)
        }
        var p = h.getBestVersionForData(r, n);
        if (!p) throw new Error("The amount of data is too big to be stored in a QR Code");
        if (t) {
            if (t < p) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + p + ".\n")
        } else t = p;
        var I = E(t, n, r), f = o.getSymbolSize(t), O = new s(f);
        return function (e, t) {
            for (var n = e.size, i = c.getPositions(t), o = 0; o < i.length; o++) for (var r = i[o][0], a = i[o][1], s = -1; s <= 7; s++) if (!(r + s <= -1 || n <= r + s)) for (var l = -1; l <= 7; l++) a + l <= -1 || n <= a + l || (s >= 0 && s <= 6 && (0 === l || 6 === l) || l >= 0 && l <= 6 && (0 === s || 6 === s) || s >= 2 && s <= 4 && l >= 2 && l <= 4 ? e.set(r + s, a + l, !0, !0) : e.set(r + s, a + l, !1, !0))
        }(O, t), function (e) {
            for (var t = e.size, n = 8; n < t - 8; n++) {
                var i = n % 2 == 0;
                e.set(n, 6, i, !0), e.set(6, n, i, !0)
            }
        }(O), function (e, t) {
            for (var n = l.getPositions(t), i = 0; i < n.length; i++) for (var o = n[i][0], r = n[i][1], a = -2; a <= 2; a++) for (var s = -2; s <= 2; s++) -2 === a || 2 === a || -2 === s || 2 === s || 0 === a && 0 === s ? e.set(o + a, r + s, !0, !0) : e.set(o + a, r + s, !1, !0)
        }(O, t), S(O, n, 0), t >= 7 && function (e, t) {
            for (var n, i, o, r = e.size, a = h.getEncodedBits(t), s = 0; s < 18; s++) n = Math.floor(s / 3), i = s % 3 + r - 8 - 3, o = 1 == (a >> s & 1), e.set(n, i, o, !0), e.set(i, n, o, !0)
        }(O, t), function (e, t) {
            for (var n = e.size, i = -1, o = n - 1, r = 7, a = 0, s = n - 1; s > 0; s -= 2) for (6 === s && s--; ;) {
                for (var l = 0; l < 2; l++) if (!e.isReserved(o, s - l)) {
                    var c = !1;
                    a < t.length && (c = 1 == (t[a] >>> r & 1)), e.set(o, s - l, c), -1 == --r && (a++, r = 7)
                }
                if ((o += i) < 0 || n <= o) {
                    o -= i, i = -i;
                    break
                }
            }
        }(O, I), isNaN(i) && (i = u.getBestMask(O, S.bind(null, O, n))), u.applyMask(i, O), S(O, n, i), {
            modules: O,
            version: t,
            errorCorrectionLevel: n,
            maskPattern: i,
            segments: r
        }
    }

    t.create = function (e, t) {
        if (void 0 === e || "" === e) throw new Error("No input text");
        var n, i, a = r.M;
        return void 0 !== t && (a = r.from(t.errorCorrectionLevel, r.M), n = h.from(t.version), i = u.from(t.maskPattern), t.toSJISFunc && o.setToSJISFunction(t.toSJISFunc)), O(e, n, a, i)
    }
}, function (e, t) {
    function n() {
        this.buffer = [], this.length = 0
    }

    n.prototype = {
        get: function (e) {
            var t = Math.floor(e / 8);
            return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
        }, put: function (e, t) {
            for (var n = 0; n < t; n++) this.putBit(1 == (e >>> t - n - 1 & 1))
        }, getLengthInBits: function () {
            return this.length
        }, putBit: function (e) {
            var t = Math.floor(this.length / 8);
            this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
        }
    }, e.exports = n
}, function (e, t, n) {
    var i = n(89);

    function o(e) {
        if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
        this.size = e, this.data = i.alloc(e * e), this.reservedBit = i.alloc(e * e)
    }

    o.prototype.set = function (e, t, n, i) {
        var o = e * this.size + t;
        this.data[o] = n, i && (this.reservedBit[o] = !0)
    }, o.prototype.get = function (e, t) {
        return this.data[e * this.size + t]
    }, o.prototype.xor = function (e, t, n) {
        this.data[e * this.size + t] ^= n
    }, o.prototype.isReserved = function (e, t) {
        return this.reservedBit[e * this.size + t]
    }, e.exports = o
}, function (e, t, n) {
    var i = n(77).getSymbolSize;
    t.getRowColCoords = function (e) {
        if (1 === e) return [];
        for (var t = Math.floor(e / 7) + 2, n = i(e), o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)), r = [n - 7], a = 1; a < t - 1; a++) r[a] = r[a - 1] - o;
        return r.push(6), r.reverse()
    }, t.getPositions = function (e) {
        for (var n = [], i = t.getRowColCoords(e), o = i.length, r = 0; r < o; r++) for (var a = 0; a < o; a++) 0 === r && 0 === a || 0 === r && a === o - 1 || r === o - 1 && 0 === a || n.push([i[r], i[a]]);
        return n
    }
}, function (e, t, n) {
    var i = n(77).getSymbolSize;
    t.getPositions = function (e) {
        var t = i(e);
        return [[0, 0], [t - 7, 0], [0, t - 7]]
    }
}, function (e, t) {
    t.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    };
    var n = 3, i = 3, o = 40, r = 10;

    function a(e, n, i) {
        switch (e) {
            case t.Patterns.PATTERN000:
                return (n + i) % 2 == 0;
            case t.Patterns.PATTERN001:
                return n % 2 == 0;
            case t.Patterns.PATTERN010:
                return i % 3 == 0;
            case t.Patterns.PATTERN011:
                return (n + i) % 3 == 0;
            case t.Patterns.PATTERN100:
                return (Math.floor(n / 2) + Math.floor(i / 3)) % 2 == 0;
            case t.Patterns.PATTERN101:
                return n * i % 2 + n * i % 3 == 0;
            case t.Patterns.PATTERN110:
                return (n * i % 2 + n * i % 3) % 2 == 0;
            case t.Patterns.PATTERN111:
                return (n * i % 3 + (n + i) % 2) % 2 == 0;
            default:
                throw new Error("bad maskPattern:" + e)
        }
    }

    t.isValid = function (e) {
        return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
    }, t.from = function (e) {
        return t.isValid(e) ? parseInt(e, 10) : void 0
    }, t.getPenaltyN1 = function (e) {
        for (var t = e.size, i = 0, o = 0, r = 0, a = null, s = null, l = 0; l < t; l++) {
            o = r = 0, a = s = null;
            for (var c = 0; c < t; c++) {
                var u = e.get(l, c);
                u === a ? o++ : (o >= 5 && (i += n + (o - 5)), a = u, o = 1), (u = e.get(c, l)) === s ? r++ : (r >= 5 && (i += n + (r - 5)), s = u, r = 1)
            }
            o >= 5 && (i += n + (o - 5)), r >= 5 && (i += n + (r - 5))
        }
        return i
    }, t.getPenaltyN2 = function (e) {
        for (var t = e.size, n = 0, o = 0; o < t - 1; o++) for (var r = 0; r < t - 1; r++) {
            var a = e.get(o, r) + e.get(o, r + 1) + e.get(o + 1, r) + e.get(o + 1, r + 1);
            4 !== a && 0 !== a || n++
        }
        return n * i
    }, t.getPenaltyN3 = function (e) {
        for (var t = e.size, n = 0, i = 0, r = 0, a = 0; a < t; a++) {
            i = r = 0;
            for (var s = 0; s < t; s++) i = i << 1 & 2047 | e.get(a, s), s >= 10 && (1488 === i || 93 === i) && n++, r = r << 1 & 2047 | e.get(s, a), s >= 10 && (1488 === r || 93 === r) && n++
        }
        return n * o
    }, t.getPenaltyN4 = function (e) {
        for (var t = 0, n = e.data.length, i = 0; i < n; i++) t += e.data[i];
        return Math.abs(Math.ceil(100 * t / n / 5) - 10) * r
    }, t.applyMask = function (e, t) {
        for (var n = t.size, i = 0; i < n; i++) for (var o = 0; o < n; o++) t.isReserved(o, i) || t.xor(o, i, a(e, o, i))
    }, t.getBestMask = function (e, n) {
        for (var i = Object.keys(t.Patterns).length, o = 0, r = 1 / 0, a = 0; a < i; a++) {
            n(a), t.applyMask(a, e);
            var s = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
            t.applyMask(a, e), s < r && (r = s, o = a)
        }
        return o
    }
}, function (e, t, n) {
    var i = n(89), o = n(330), r = n(84).Buffer;

    function a(e) {
        this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
    }

    a.prototype.initialize = function (e) {
        this.degree = e, this.genPoly = o.generateECPolynomial(this.degree)
    }, a.prototype.encode = function (e) {
        if (!this.genPoly) throw new Error("Encoder not initialized");
        var t = i.alloc(this.degree), n = r.concat([e, t], e.length + this.degree), a = o.mod(n, this.genPoly),
            s = this.degree - a.length;
        if (s > 0) {
            var l = i.alloc(this.degree);
            return a.copy(l, s), l
        }
        return a
    }, e.exports = a
}, function (e, t, n) {
    var i = n(89), o = n(331);
    t.mul = function (e, t) {
        for (var n = i.alloc(e.length + t.length - 1), r = 0; r < e.length; r++) for (var a = 0; a < t.length; a++) n[r + a] ^= o.mul(e[r], t[a]);
        return n
    }, t.mod = function (e, t) {
        for (var n = i.from(e); n.length - t.length >= 0;) {
            for (var r = n[0], a = 0; a < t.length; a++) n[a] ^= o.mul(t[a], r);
            for (var s = 0; s < n.length && 0 === n[s];) s++;
            n = n.slice(s)
        }
        return n
    }, t.generateECPolynomial = function (e) {
        for (var n = i.from([1]), r = 0; r < e; r++) n = t.mul(n, [1, o.exp(r)]);
        return n
    }
}, function (e, t, n) {
    var i = n(89), o = i.alloc(512), r = i.alloc(256);
    !function () {
        for (var e = 1, t = 0; t < 255; t++) o[t] = e, r[e] = t, 256 & (e <<= 1) && (e ^= 285);
        for (t = 255; t < 512; t++) o[t] = o[t - 255]
    }(), t.log = function (e) {
        if (e < 1) throw new Error("log(" + e + ")");
        return r[e]
    }, t.exp = function (e) {
        return o[e]
    }, t.mul = function (e, t) {
        return 0 === e || 0 === t ? 0 : o[r[e] + r[t]]
    }
}, function (e, t, n) {
    var i = n(77), o = n(245), r = n(212), a = n(78), s = n(246), l = n(211), c = i.getBCHDigit(7973);

    function u(e, t) {
        return a.getCharCountIndicator(e, t) + 4
    }

    function d(e, t) {
        var n = 0;
        return e.forEach(function (e) {
            var i = u(e.mode, t);
            n += i + e.getBitsLength()
        }), n
    }

    t.from = function (e, t) {
        return s.isValid(e) ? parseInt(e, 10) : t
    }, t.getCapacity = function (e, t, n) {
        if (!s.isValid(e)) throw new Error("Invalid QR Code version");
        void 0 === n && (n = a.BYTE);
        var r = 8 * (i.getSymbolTotalCodewords(e) - o.getTotalCodewordsCount(e, t));
        if (n === a.MIXED) return r;
        var l = r - u(n, e);
        switch (n) {
            case a.NUMERIC:
                return Math.floor(l / 10 * 3);
            case a.ALPHANUMERIC:
                return Math.floor(l / 11 * 2);
            case a.KANJI:
                return Math.floor(l / 13);
            case a.BYTE:
            default:
                return Math.floor(l / 8)
        }
    }, t.getBestVersionForData = function (e, n) {
        var i, o = r.from(n, r.M);
        if (l(e)) {
            if (e.length > 1) return function (e, n) {
                for (var i = 1; i <= 40; i++) if (d(e, i) <= t.getCapacity(i, n, a.MIXED)) return i
            }(e, o);
            if (0 === e.length) return 1;
            i = e[0]
        } else i = e;
        return function (e, n, i) {
            for (var o = 1; o <= 40; o++) if (n <= t.getCapacity(o, i, e)) return o
        }(i.mode, i.getLength(), o)
    }, t.getEncodedBits = function (e) {
        if (!s.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
        for (var t = e << 12; i.getBCHDigit(t) - c >= 0;) t ^= 7973 << i.getBCHDigit(t) - c;
        return e << 12 | t
    }
}, function (e, t, n) {
    var i = n(77), o = i.getBCHDigit(1335);
    t.getEncodedBits = function (e, t) {
        for (var n = e.bit << 3 | t, r = n << 10; i.getBCHDigit(r) - o >= 0;) r ^= 1335 << i.getBCHDigit(r) - o;
        return 21522 ^ (n << 10 | r)
    }
}, function (e, t, n) {
    var i = n(78), o = n(335), r = n(336), a = n(337), s = n(338), l = n(247), c = n(77), u = n(339);

    function d(e) {
        return unescape(encodeURIComponent(e)).length
    }

    function p(e, t, n) {
        for (var i, o = []; null !== (i = e.exec(n));) o.push({
            data: i[0],
            index: i.index,
            mode: t,
            length: i[0].length
        });
        return o
    }

    function h(e) {
        var t, n, o = p(l.NUMERIC, i.NUMERIC, e), r = p(l.ALPHANUMERIC, i.ALPHANUMERIC, e);
        return c.isKanjiModeEnabled() ? (t = p(l.BYTE, i.BYTE, e), n = p(l.KANJI, i.KANJI, e)) : (t = p(l.BYTE_KANJI, i.BYTE, e), n = []), o.concat(r, t, n).sort(function (e, t) {
            return e.index - t.index
        }).map(function (e) {
            return {data: e.data, mode: e.mode, length: e.length}
        })
    }

    function I(e, t) {
        switch (t) {
            case i.NUMERIC:
                return o.getBitsLength(e);
            case i.ALPHANUMERIC:
                return r.getBitsLength(e);
            case i.KANJI:
                return s.getBitsLength(e);
            case i.BYTE:
                return a.getBitsLength(e)
        }
    }

    function f(e, t) {
        var n, l = i.getBestModeForData(e);
        if ((n = i.from(t, l)) !== i.BYTE && n.bit < l.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + i.toString(n) + ".\n Suggested mode is: " + i.toString(l));
        switch (n !== i.KANJI || c.isKanjiModeEnabled() || (n = i.BYTE), n) {
            case i.NUMERIC:
                return new o(e);
            case i.ALPHANUMERIC:
                return new r(e);
            case i.KANJI:
                return new s(e);
            case i.BYTE:
                return new a(e)
        }
    }

    t.fromArray = function (e) {
        return e.reduce(function (e, t) {
            return "string" == typeof t ? e.push(f(t, null)) : t.data && e.push(f(t.data, t.mode)), e
        }, [])
    }, t.fromString = function (e, n) {
        for (var o = function (e, t) {
            for (var n = {}, o = {start: {}}, r = ["start"], a = 0; a < e.length; a++) {
                for (var s = e[a], l = [], c = 0; c < s.length; c++) {
                    var u = s[c], d = "" + a + c;
                    l.push(d), n[d] = {node: u, lastCount: 0}, o[d] = {};
                    for (var p = 0; p < r.length; p++) {
                        var h = r[p];
                        n[h] && n[h].node.mode === u.mode ? (o[h][d] = I(n[h].lastCount + u.length, u.mode) - I(n[h].lastCount, u.mode), n[h].lastCount += u.length) : (n[h] && (n[h].lastCount = u.length), o[h][d] = I(u.length, u.mode) + 4 + i.getCharCountIndicator(u.mode, t))
                    }
                }
                r = l
            }
            for (p = 0; p < r.length; p++) o[r[p]].end = 0;
            return {map: o, table: n}
        }(function (e) {
            for (var t = [], n = 0; n < e.length; n++) {
                var o = e[n];
                switch (o.mode) {
                    case i.NUMERIC:
                        t.push([o, {data: o.data, mode: i.ALPHANUMERIC, length: o.length}, {
                            data: o.data,
                            mode: i.BYTE,
                            length: o.length
                        }]);
                        break;
                    case i.ALPHANUMERIC:
                        t.push([o, {data: o.data, mode: i.BYTE, length: o.length}]);
                        break;
                    case i.KANJI:
                        t.push([o, {data: o.data, mode: i.BYTE, length: d(o.data)}]);
                        break;
                    case i.BYTE:
                        t.push([{data: o.data, mode: i.BYTE, length: d(o.data)}])
                }
            }
            return t
        }(h(e, c.isKanjiModeEnabled())), n), r = u.find_path(o.map, "start", "end"), a = [], s = 1; s < r.length - 1; s++) a.push(o.table[r[s]].node);
        return t.fromArray(function (e) {
            return e.reduce(function (e, t) {
                var n = e.length - 1 >= 0 ? e[e.length - 1] : null;
                return n && n.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e)
            }, [])
        }(a))
    }, t.rawSplit = function (e) {
        return t.fromArray(h(e, c.isKanjiModeEnabled()))
    }
}, function (e, t, n) {
    var i = n(78);

    function o(e) {
        this.mode = i.NUMERIC, this.data = e.toString()
    }

    o.getBitsLength = function (e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
    }, o.prototype.getLength = function () {
        return this.data.length
    }, o.prototype.getBitsLength = function () {
        return o.getBitsLength(this.data.length)
    }, o.prototype.write = function (e) {
        var t, n, i;
        for (t = 0; t + 3 <= this.data.length; t += 3) n = this.data.substr(t, 3), i = parseInt(n, 10), e.put(i, 10);
        var o = this.data.length - t;
        o > 0 && (n = this.data.substr(t), i = parseInt(n, 10), e.put(i, 3 * o + 1))
    }, e.exports = o
}, function (e, t, n) {
    var i = n(78),
        o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

    function r(e) {
        this.mode = i.ALPHANUMERIC, this.data = e
    }

    r.getBitsLength = function (e) {
        return 11 * Math.floor(e / 2) + e % 2 * 6
    }, r.prototype.getLength = function () {
        return this.data.length
    }, r.prototype.getBitsLength = function () {
        return r.getBitsLength(this.data.length)
    }, r.prototype.write = function (e) {
        var t;
        for (t = 0; t + 2 <= this.data.length; t += 2) {
            var n = 45 * o.indexOf(this.data[t]);
            n += o.indexOf(this.data[t + 1]), e.put(n, 11)
        }
        this.data.length % 2 && e.put(o.indexOf(this.data[t]), 6)
    }, e.exports = r
}, function (e, t, n) {
    var i = n(89), o = n(78);

    function r(e) {
        this.mode = o.BYTE, this.data = i.from(e)
    }

    r.getBitsLength = function (e) {
        return 8 * e
    }, r.prototype.getLength = function () {
        return this.data.length
    }, r.prototype.getBitsLength = function () {
        return r.getBitsLength(this.data.length)
    }, r.prototype.write = function (e) {
        for (var t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
    }, e.exports = r
}, function (e, t, n) {
    var i = n(78), o = n(77);

    function r(e) {
        this.mode = i.KANJI, this.data = e
    }

    r.getBitsLength = function (e) {
        return 13 * e
    }, r.prototype.getLength = function () {
        return this.data.length
    }, r.prototype.getBitsLength = function () {
        return r.getBitsLength(this.data.length)
    }, r.prototype.write = function (e) {
        var t;
        for (t = 0; t < this.data.length; t++) {
            var n = o.toSJIS(this.data[t]);
            if (n >= 33088 && n <= 40956) n -= 33088; else {
                if (!(n >= 57408 && n <= 60351)) throw new Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
                n -= 49472
            }
            n = 192 * (n >>> 8 & 255) + (255 & n), e.put(n, 13)
        }
    }, e.exports = r
}, function (e, t, n) {
    "use strict";
    var i = {
        single_source_shortest_paths: function (e, t, n) {
            var o = {}, r = {};
            r[t] = 0;
            var a, s, l, c, u, d, p, h = i.PriorityQueue.make();
            for (h.push(t, 0); !h.empty();) for (l in s = (a = h.pop()).value, c = a.cost, u = e[s] || {}) u.hasOwnProperty(l) && (d = c + u[l], p = r[l], (void 0 === r[l] || p > d) && (r[l] = d, h.push(l, d), o[l] = s));
            if (void 0 !== n && void 0 === r[n]) {
                var I = ["Could not find a path from ", t, " to ", n, "."].join("");
                throw new Error(I)
            }
            return o
        }, extract_shortest_path_from_predecessor_list: function (e, t) {
            for (var n = [], i = t; i;) n.push(i), e[i], i = e[i];
            return n.reverse(), n
        }, find_path: function (e, t, n) {
            var o = i.single_source_shortest_paths(e, t, n);
            return i.extract_shortest_path_from_predecessor_list(o, n)
        }, PriorityQueue: {
            make: function (e) {
                var t, n = i.PriorityQueue, o = {};
                for (t in e = e || {}, n) n.hasOwnProperty(t) && (o[t] = n[t]);
                return o.queue = [], o.sorter = e.sorter || n.default_sorter, o
            }, default_sorter: function (e, t) {
                return e.cost - t.cost
            }, push: function (e, t) {
                var n = {value: e, cost: t};
                this.queue.push(n), this.queue.sort(this.sorter)
            }, pop: function () {
                return this.queue.shift()
            }, empty: function () {
                return 0 === this.queue.length
            }
        }
    };
    e.exports = i
}, function (e, t, n) {
    var i = n(248);
    t.render = function (e, t, n) {
        var o = n, r = t;
        void 0 !== o || t && t.getContext || (o = t, t = void 0), t || (r = function () {
            try {
                return document.createElement("canvas")
            } catch (e) {
                throw new Error("You need to specify a canvas element")
            }
        }()), o = i.getOptions(o);
        var a = i.getImageWidth(e.modules.size, o), s = r.getContext("2d"), l = s.createImageData(a, a);
        return i.qrToImageData(l.data, e, o), function (e, t, n) {
            e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = n, t.width = n, t.style.height = n + "px", t.style.width = n + "px"
        }(s, r, a), s.putImageData(l, 0, 0), r
    }, t.renderToDataURL = function (e, n, i) {
        var o = i;
        void 0 !== o || n && n.getContext || (o = n, n = void 0), o || (o = {});
        var r = t.render(e, n, o), a = o.type || "image/png", s = o.rendererOpts || {};
        return r.toDataURL(a, s.quality)
    }
}, function (e, t, n) {
    var i = n(248);

    function o(e, t) {
        var n = e.a / 255, i = t + '="' + e.hex + '"';
        return n < 1 ? i + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : i
    }

    function r(e, t, n) {
        var i = e + t;
        return void 0 !== n && (i += " " + n), i
    }

    t.render = function (e, t, n) {
        var a = i.getOptions(t), s = e.modules.size, l = e.modules.data, c = s + 2 * a.margin,
            u = a.color.light.a ? "<path " + o(a.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "",
            d = "<path " + o(a.color.dark, "stroke") + ' d="' + function (e, t, n) {
                for (var i = "", o = 0, a = !1, s = 0, l = 0; l < e.length; l++) {
                    var c = Math.floor(l % t), u = Math.floor(l / t);
                    c || a || (a = !0), e[l] ? (s++, l > 0 && c > 0 && e[l - 1] || (i += a ? r("M", c + n, .5 + u + n) : r("m", o, 0), o = 0, a = !1), c + 1 < t && e[l + 1] || (i += r("h", s), s = 0)) : o++
                }
                return i
            }(l, s, a.margin) + '"/>', p = 'viewBox="0 0 ' + c + " " + c + '"',
            h = '<svg xmlns="http://www.w3.org/2000/svg" ' + (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "") + p + ' shape-rendering="crispEdges">' + u + d + "</svg>\n";
        return "function" == typeof n && n(null, h), h
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(229), o = n(154);
    for (var r in o) ["default"].indexOf(r) < 0 && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var a = n(2), s = Object(a.a)(o.default, i.a, i.b, !1, null, null, null);
    s.options.__file = "src/float-window-renderer/ctrl/menu/setting.vue", t.default = s.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(231), o = n(156);
    for (var r in o) ["default"].indexOf(r) < 0 && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var a = n(2), s = Object(a.a)(o.default, i.a, i.b, !1, null, null, null);
    s.options.__file = "src/float-window-renderer/ctrl/menu/setting/audiotrack.vue", t.default = s.exports
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(232), o = n(158);
    for (var r in o) ["default"].indexOf(r) < 0 && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var a = n(2), s = Object(a.a)(o.default, i.a, i.b, !1, null, null, null);
    s.options.__file = "src/float-window-renderer/ctrl/menu/setting/subtitle.vue", t.default = s.exports
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.SubInitStatus = t.SubtitleEvent = t.SubtitleType = void 0, function (e) {
        e[e.None = 0] = "None", e[e.Embed = 1] = "Embed", e[e.Local = 2] = "Local", e[e.Online = 3] = "Online", e[e.Manual = 4] = "Manual"
    }(t.SubtitleType || (t.SubtitleType = {})), function (e) {
        e.Unknown = "Unknown", e.InitSubtitle = "OnInitSubtitle", e.LoadSucceed = "OnLoadSucceed", e.QuerySucceed = "OnQuerySucceed", e.QueryFailed = "OnQueryFailed", e.SearchSucceed = "OnSearchSucceed", e.SearchFailed = "OnSearchFailed"
    }(t.SubtitleEvent || (t.SubtitleEvent = {})), function (e) {
        e[e.READY = 0] = "READY", e[e.INITING = 1] = "INITING", e[e.FINISH = 2] = "FINISH"
    }(t.SubInitStatus || (t.SubInitStatus = {}))
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(230), o = n(160);
    for (var r in o) ["default"].indexOf(r) < 0 && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    var a = n(2), s = Object(a.a)(o.default, i.a, i.b, !1, null, null, null);
    s.options.__file = "src/float-window-renderer/ctrl/menu/speed.vue", t.default = s.exports
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACcCAYAAADf2SETAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAsKADAAQAAAABAAAAnAAAAADUbNVzAAAPDklEQVR4Ae2de3BcVR3Hf2fz3E3SkKbvJH1BG2ihEh4tyEMRsYUWaVXKOOoMU4ZxZEYH1FFGWwdHnNF/kIE//IMZnIytYhUrtCpDnQGFFqUI2oI0CbTNqwRK0kKyu8m+jr9f0p1st7vZu3fPuffcu78zs5Pdu+f5Od+c/d1zfudcAA5MgAkwASbABJgAE2ACTIAJMAEmwASYABNgAkyACTABJsAEmAATYAJMgAkwASbABJgAE2ACTIAJMAEmwASYABNgAkyACTABJsAEmAATYAJMgAkwASbABJgAE2ACTIAJMAEmwASYABNgAkyACTABJsAEmMA0ATH91h/vHtwlm8JReAQb9nkp5Wx/tMqbrRBCHAMBjz52j3hcVwsCujJ2K99IFDpByrtZvG71wHS52AfLZUo+9q0n5B3TV9W+85WAd++WFQjtdrWIODcFBFjAViC+VA+VVuJxHGcJiADM1VWir0ZgXZA4X3MJlMWIVV0B0BBKQWCGW9aUBBiNBCCWNLez3KyZqQzLYgQuJF4SBomb4nHITcBUhmUh4JlG3szushovM025vLfKxmo8VdzKQsCqYHE+5hFgAZvXJ1yjIgiwgIuAxVHNI8ACNq9PuEZFEGABFwGLo5pHwJV54J/+OX5LKgVXIY6aIpFMBALw2g83Vu0vMh1H9ykBxwX8k72xncmk/IpdnklcaMA8du24vfqrVvOgRQor0zsUj0NuAqYydNSEoJFXSrAt3jRayoPySn8u9JdW2AqJk76neBxyEzCVoaMjMIpkTW48xV89m5clU4KWh4dHWZzFU55OYSpDR3sVf8YPTyMp7Z3KvEqrCad2k4CjAqabLyFgV6kNpjz4Rq5Uiv5I76gJQcjo5gvt106ehfCHgNxuheMCpgafHT0t2a9uA+LyzSbgqAlhNgqunRcJuDICOw0qWC0hhC9cBMkbEjhT8XFUQDI1g9d73tT+/8JUhjN0qT86heRYXzuzeKmllbRro9YfbVbdCpMZ+l7AgYD15TUrq3WqxeGF/ExmqNyEYD8HL0jSP3VUKmA3/Bz80xXcEjsElJkQbvk52Gk0p/EPAWUC1uDn4B/K3BJtBJQJWKVvgsq8tJHjjI0goEzA7OdgRH+WXSWU3sSZ6OeQmlyYsDaVRj7BToVvbABobgB45lWAI71OlWqvHFMZUmuUCpgyNM3PgTQ5Ni4srcSNjlML9Ie5swAuaZ1a8bsX3fL/e1zC71/BlcCI/rLtlGAiw3Q7lAs4nbFJf6MxAfQyJaA76DnhE8sErGyRsPcQwMtvn/OVMR9MY5gGo8wGTmfIf+0RCFYL2HqdgPvxdOMFF9jLoxxTsYAN6/Xl8wV8/wsAG69E+457p2DvMKKCiJyPUIHziOs7BDz4RYCLFjpfvpdKZAEb3FvzGgV88zaAL98AEKw2uKIuVo0F7CJ8K0Xjk37g2nYB2+8EuGK5lRTlFacsZiFMdcYuRmoNQQF3fwZg7QoJvzsAcHqsmNSlxzWVoe9HYJqx8pND+6o2AT9A2/imSwGyp+NKl2nuHExm6HsBm+yMnVsuha/WVAnYco2A7+DDq1qbC8cvNYbJDH0v4FI7z+T0i+cI+C6K+I61AFW4JaocAwvY470ewCm3m9egWfElgItbPN4YG9VnAduAZmKS5gYB991KYjaxdvrqxALWx9aVnNsXuVKsa4WygF1Dr77ggWEJf0CvtnIKZTEP7PcOTeGByS8cAdj3GuDBLH5v7bnt872ATXbGPrcr7H0aGZWw8+8A7wzZS28llckMfS9gk52xrYhnpjiHetAR/iDAeHymWKV/ZzJD3wuYui/bGbu2CqCWzkrD7+L4kxtLCJjQLILSZTSdQ2QCl5NfBnjj+PQ13e+yGeouz2r+vhZwDQq1pSkJbc1JmN+YglCNRK8uFG7WjgiCRQL+CJ+RMXQmAL0fVsDg6Qoj7cmuwSmT4SNDtx9ZFZ6qeL4TMK1IrWpJwMqFCZg7K2XZX4DEPg9FTq81SxIQx9MqB0Yq4MSpCug+WQkJl2+O4ompLUcvvqWq6/2Rj28EfPyDsQXRaPSB+MoUkBhLDfSPsGxucvK17sIYvH68Gt4crAR6zJfTYRCnxzpfAPx1cLpk88vzvICllNXd/ZGHYlH4Nj5Mq0aFeLO7LYSPY7z+4hh0LIvD6yeq4K1+FLIDI3I5T49l90G+z54WcM9guKOrP9wJEi7L10CV1+vQhr6hPQbtCxLw3OEaGMUDsXWFkTG0dV/UOz1WTN2r6fzkUCrn/UM6HzpXg54nR4/kcip4ciUOR13R3RfenkzAv5wSb2aHkJ181zVRWIomho5w6B0JP3vaHPFSGwuJl+LQzTHFczJ4bgRG8Qa6+iNPgJTbnASVXRaZKhs7JtA2roJXehQY3VjA5PTYAZweO5Zdmvufc83c5KqV1Xi50tq55ikBo3iruvvDv8ZR9y47jdWR5gq0iyvxFPiXukrbdUnTY7twRe0MT48V1U2eEfCkePsif0Qza1NRLXQgMk27RXEx5LV3rY3EmTeA8eTZ6bE3HaioD4vwjIBx5P25ieJNa2LdhXEYnxDw5kBhpMOjAAePSmgITjngvHc6nQv/LZZAYdrF5qghfldfeDOOwA9oyFppljeuiqEJEMAFkML3xk+9rLToss2sMGmX0Rwdii7DG7ZfuVwNS8XTpNpNqyb4SChLtNREMl7AIpbsRNPBM8fdzQpJuBrNCQ7OEDBawN0D4Y3oq32DMyjUlXL50jgeXu3sfKi62ufOyerh31bj5S6l+KvGChhtXiGT8HDxTXI/Bc2FfuqSmPsVUVgDWmErJM70SpzCYgtmZexNXHd/dKsEeXnBFhgaYeEFKWiulzA8Rpax9wMtDw+PmjfemVejs32NI/D3vN7tq9vYFtbdh0YKuLt3fDmAvEJX48fx1/0vuAFyzz/1bsdpR59kPqRaVy9O5WukgCGQwOPr9IQxfJDLPnwWBS0ejOCCgs4Hq1SjgUaO9Rz0ETBSwHj/hgclqQ9nwlPiTW/HqcDWN9erLyczxyVz9HisZZZRzu+NuYk7dUo2nI6Od4BIrkulJB5XpzYMfwzw3BtoMmRMDiyaDVCh+VA82tbEQR8BVwXc3y+DkVT4Tgni6yPRyLU0dYaeZsoDbcXZj+KNZf2at85RXtR5GTYEJdAuaN1b388rWPEFdmjPAIpCrTjaG7k/nAqjEyF04g3bJyfFmxFH1dv+D3Hk/ff54qX82xwQMJUzb5b3zQhTHdodt4GP9k+sQYd0vP9P/QL7tok6WFc4hqfV/O0/uY9bagzh7gH0BnMi0A4OrwerjupW46ni4aiAe/rGPgcycRCdc65S1YB8+bw9APAinheWb/XIqdGX6kdO7y1N3hdxPtZuXndMwGgy3JmUYi+Kt053gw+fQH9bfGTrTOY0TXE5FWiL/qYrx6F1NotYNXNHuhH9ea9GG3cnSqq0fTcWWn+oB4AEXCgc6cMbK7ypq81BIFg79YBBlYsQlNemjnH40+u1MHTasXGjEAbPf5+j+9S2qbdXNkVlZLdu8dJoewBH3a4Ba/WPo3j/hyLOFxJ433Xp4nzf2rtOU3afXT0BTx0Mun7Sj70WmJdK+1AwLiKPoHiX6mw62bkvHLYu3kJ1oQWO+Zo8kBvRX3jtRewjUagPrH6vVcDv9o+vwIp8zWpl7MSjM8uexzne4+/bSX1+Gholb0EfuLmzzv9O1ZXLl5C/8EwWuqqS/J+PVgEnUqkdNOerCyP9zP8V53gHh9WUUIk1XY/ibWlWk1++XOgBhatbvTUK55vNyW6j1XjZ6ex+1ibgoSGabZBb7VbMSroTHwB8cMZKzMJxaFZiA/q/LcTlZSfCCjyeyuk501LaVXYO7aOxyM3okI7H4ukLC3EZpAUFF57IXQZ5mlkZEapxqXdDB5oNjbnz0XGVlpfJ0ec4Ht/qhWCqQ7u2WQj8db9Nd8fU4XTXhivzl0JeZ0/jEfy4ry5vICGtx5F3jkabN1/hbR4ScL42uH1dmwlBZp7bjaOlYrJr84VanJW+FdcE3RAv1amhdob/rHyV9uB1mYJTuqqtbQTGCi/QVWmr+ZLTOs335gp1aNzciqN3o/Z1wVylT11rqC2blbln8lMo7RttAsaxxXUBn8gztVaPpgeNvLMccubJ10X1Ph+BhRDHQMCjj90jvCfgfJ3m1HWye2mWIjs0hNA4R5u33mXxUr3wiNbRx+8NuGB9Z1Px7mdtNjDeOp10EwuZD5m7L6gu5EK5EUdeE8R7lo2rjNzsH1VlaxQwuNo52aNvE9q6JF6yfQ0KrjIyiIPtqmgTsJDiHdu1KjEh3dv3ZpgPsxtQvFcDBM0SL5qH7jEqEbExybUJGHe37XOrlWHcOh85u7hBPg234cir4+lFpbYPV+JcY1Rq3U1Jr20Wok6Eno9AJIq+EI7fLtFjsdpbARI4hXbdJQBV2lpZQjcKEakVof0l5MBJkYC2EbitTUTxRu5ZNyiTj8H1KNxPX2aoeBEKbr9+doqRG4T8U6Y2AU8iqqx6COcCcVWZwzkEhMAzp6p+fM41/mCLgFYBty+qOYob0560VTMfJxLIZJKNj9voVNO0CpgaUVUb2oE/mO851SDjyxHiJDL5kfH19EgFtQt4+XzxvgiIzThlhHMD5R2IAZpUW4hJeZNQ13rtAqaqtreFXhWBwD3YeWXjvZLdRdR2fG0jFtnf8Wf7BBwRMFVvZVvwN/hAy834dtR+dT2bclQE4I6Vi0O/9WwLDK04Tjg5G3p6J1YnRXwP3tzRhk//BwE9FbJqy4olNW/5v7HOt9BxAVMTcXGjuqsveh+I1HYUsuYtlM5DpRJx4+aHQgYeXrE4+Es0HTIOdXWnPn4t1RUBp2G+OyIbE2PRbbhzDU0LcZ3OHczpMnX+RaHinLc8IGVgT0V98MkVzeJjneVx3rQgZEjoOinniGT0RqxOCzrjLMJhegEKGnesmRtQsHEcaocQ4kms80CdCP6jtVUo2uRvbru5ZkyACTABJsAEmAATYAJMgAkwASbABJgAE2ACTIAJMAEmwASYABNgAkyACTABJsAEmAATYAJMgAkwASbABJgAE2ACTIAJMAEmwASYABNgAkyACTABJsAEmAATYAJMgAkwASbABJgAE2ACTIAJMAFfE/g/myZH2O4lFtUAAAAASUVORK5CYII="
}, function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACcCAYAAADf2SETAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAsKADAAQAAAABAAAAnAAAAADUbNVzAAAdm0lEQVR4Ae1dC5gU1ZU+t7p73sPwcJDHAGpGBPkMxgD5NmsWEl1cFtHsshiVmMBqMMZEVsUYAR1H8JHEkEUT2RAUdxOTKCZGwBdKgiarKOrGIPgADIM8lNeA857urrv/qe7qru7pR1U/q5q60FNV955777nn/nXq1LmPInKDKwFXAq4EXAm4EnAl4ErAlYArAVcCrgRcCbgScCXgSsCVgCsBVwKuBFwJuBJwJeBKwJWAKwFXArmXgMh9kfkt8a51coxKwfGq4tl+23SxNb+1uaXbXQKOAvAda/13EsmFulCFoEdranzfvP6L4pgeZ+UopSxI+4UQMhVfheKDeUjHSyo+7ZhWkA7MRcPvWN/7WVLp9fiyAOIWD4nLFs7wvRKfFn9dSKDE123Xa6cDWrGrYOP5UlT6XHwcX0tJowJELy1d718IgCZsDwPXBW8i6bH8nC0bx2jgO9f7Lwiq8tnE3RCOFWKjx+e9YtE/iQM6nVng3vwQ1fSoNA9GxZdJ0hgcB6F3HSMfvb2ho+jEk+lDnG+E7bLqvivpL7Hpia+cqI0d00GPSel5d33gSYBqemLxh2LRCYdg6c25dYb3abPgnb+aLoJ58nPQ10fKhmq3FICYvASrfDATRl5gf4OzB+Uw+vZ906g3HY9OA3HCR266RhYj/RIhgv093pnonPtS1R8CoVy/ZJ3/B6no9LTrHqS5UqUnpKrWsz0S+ekEkSMD1PiLJIROjHkzAZ1eXNpyjDzo53rm8NFYhqqy+XSV2EfPNa8hXxxln0uzN32fjEWKYAk4LixdF5gBQa+WJAelYl4R4pZFF3q/n4xm/ir/OVJ68fInwx0bFQfKTpatT7zQgK1HJ8hn1Ig6mfGYEPCZ8cLFJuMHbNy//CplvrHqZOdO0cSO0cBGQS+e4V0nhHc8tPGLxvj4c4Dwqvg4/bq5uRn9zOBm8AoNrgxa/Z9OZ+ao5wkdUaKWKQrAiFY3akbjeaQSzpMdL1xUPD+hJwfHi2/9x0M9oyPVlcCJQcrOaw20sHLnusBiAOY2dJonvgXQOC2LL/SdaozXgIuIQw03j1DU8t3c2cYw8iSiM0cIqiy3JpoDrZI2v6sCK7H5otowtp5onSH6eD4Y9J9tFDSinkuILTOaN/FZV4+k7R9K2nM4Nl0rR5FLB+1d0sQpTU1NyZjSMjpBCztSA+vdAgGriy/y3QHMTEEX81t3TIDG+YUxQgcvxymyYnIMaACY/tWkgcYqeLm8oQME1VaGgYayNK2LeK4j9I/POTCNrmWj6VqSIV95maCR9QoorYGXy2H+GfzcHp0Pjmc+BClTcKoFozz0OKcdHQ1gXdiLZ/j+7FV843G9EuBoB7CPkyLuHXOh93adJvbYhK5Uh2lxDBoOuAvq67QT7TKTP4oCiKA8rURdE+vlhwvk1DBFtAqdhvPgx2UoqQfvonmTnoXbE8eHqsrh0L1JcxkTwIf1u8dYQAHObc+gFRmkEnhU2zTRtm1rxJB/nAmzg27j8hkwHMbCdBjbkPk9vXW3SjsOhMrSCsQf3Ez6aYw21CINaToPOjGbDhMbM+eFy3lnr0rvwJTgoPMBjX7go+cfHzFu3CwkNGtpqUwJ5IttkJbDPn+yk5B92pGSk3jwGonjgWNMs3rON8CIkwR5DNY4lx/5cYEMWvwYFZF4XQMjzoPkoQOJxo8yAJ/zZRni28k3sa6Jo/LJspIiZPcWoc4iVRnSvFz5oUPbxRCaGdG8EYay1DVeoG/i6SHg9TETIpXoJ4kBGopNnKbnNH2Maw+DmDUxt7++/kzJIB43rglUzaaLtBthyWvgeO3CnUdTJlNQqlGUsAbEL5cWH798ZfIP6jlnGNHaE25btFC0Fe3X5BCNpHg5GZJsfVryAA5JP6p9ufPa9r8fRQl3MEIuwRuq0x5/I+0Kt5O50toPOXAwmhJahMP+nCAADvVKvNbR+ypRJ+tpjj4muDkNOO6jhZ3Y1pIGsP5YDGmZUPf00b4GT0AuH9/2AEP0QaO9PBrQa5SDLh9dXvbg3RwXJQ3gPiIIPza7WzHqEA6Rly1D5+ppJXHUtXDIO601KdL+sDyc3E5beyHueV7W+XuC5wkZHnRIIWkplP3ff4E23nw+fRJL1oTLNbFRuJJBVQjN3wUbWOvkCKb70Do7Au3i9oXdd7hI0hyWU3OSNPtG2xbAdzwrx/V2BTZA4MOSiTxGrJgT2dsl9y95zjv11gtoe0waLkL27+T46LhrUzXF5bHzZfr2sFzYpWbnVqTizb4mhD9wP4M3FfN900Cv5eubkigmYj7k0HWVqJ7ix4WeLtH2Fp+jXHFgWwBjAHNCJo1Mlc/44pJJ2aWWpxTkYVsAY6nh+5kAJtN8mdTl5im+BGwLYIxiLcCvy4qImJ7zWclzwtM63BNh25e4W2f4Ni1ZJ8cLCvwbRvDT2sKYHrOfyPv44gtpJ4PSiT5NO9xMLLdUs9PswKORB9sCmJm8dYbYgcPdRoZTnWOySnJfGGua/RlZJamqLJm00MSepD4227bTtiaEbSXmMmYrCbgAtlV3uMxYlYALYKsSc+ltJQEXwLbqDpcZqxJwAWxVYi69rSTgAthW3eEyY1UCLoCtSsylt5UEbO0HtpWkTjBmdu3vaggE5YXv7unAnBRZgflObymCNoxuqDG1VWuhxOUCuFCSdlA9O/Z0fgNLXn+EecQ1EbYlXS6FuPu9Pe3La73Vi4cNE52RtCKeuCZEEYVvx6q/MnfBgyrJn8WAN8woRjoVzI2/vs3fsdYuvLsAtktP2ICPS+fcyMCdk44VzH4/772W9q+loytEumtCWJDyFszM2HfUHosXsPcxnXUK0amDLTQgBentP5j2U7TsqhQkMUmYYMX7Lv9PTGQRLlwNbEHoOnh5eZkXG/nxz1MgCeIFKlInn6t4ln/UaoH5FKTN35+2HEVenYIkQZIcsmNvZ0OChIJGuRo4A3HXVkgq9+maWNLRdkFYI5pBSeazDKhWSQnfLNhhko60K9paTfMlJKZ8YO6Ee/F9kGsTp6aJVdVxoNibhiqvyQXSH3ltQ8ELZw1oDPw4z3fQwcv1KPEMZFj5Q9+97G6shTX1yYGEVXj5gzrFDa4GLq78i1b76psvW4L74MbMGRC9jUOr3s48f25yugDOQI49fmQKa13e8TGILwvkO3T1CvKGt20NBLOr7Td3T7sN2/7enE0pyP877HTZm00ZucjrAjgDKXb5BXUxiLWQf/OBq2nvzk09PgWDE0IuCvGe2V/cu4c9ZdWZmx6ZVZswlwvghGJJH6mboXifKkhg+OqmNm+0k2m1Xq+szYphIQJCobmNQ8TBrMrJUWYXwBkIsq5SUlnYC8FgYi+EmmI5XgZV9MkysCbqhQgGBR3tyI1G7lNRigiYDEEsO7x8dEPV+hRkBU1yvRAZiBsaKBJYK+bbC8FQNXohjPVHGMnzCYMXWxZcMWZUVd+N5vJcd6riDV2RisxNy0YCdVVEU88mGhCdGpNNcQXPC/DiAaPMGT2y6tcFrzxNhS6A0wgoUXIgQNrABQ9e8OM8nRfiC2cSXThB0C3/SvT5MYlKTB3H9q5fqyc0YOJH/YUKAC+MI3nlmBGVvyxUnVbqcW1gK9IK07b34KHeYz6jL+z+qsDHCy89l+gzp0r61Z+IWtvNl3GsODYvfxlx3ugRNQ+b57SwlK4GLqy8tdrOGC5o4Uyiv89AGxeSXdym3zpjRPWqQtZpta4TRgM3XXx2Q03F+KmKh+oxEPDB83+VA/cfsyquEH0N5kJUloXO2Y3WqnkhrJVV7hP0FdbGp0Ebv8SejNT5eS4Ef8aLQ69f0vGu/OoeoSjfOb2h8mepuSp+askDeNYs8l58+flLhVAW6FtPleGRPv0z3bTzoJde3VFGnWwSWAihEbGQJ5b9weyFyNQfPHoYbOOZkh58gejdfYmZYO6MdXq91vhNXGqqWOX60Q2VP01FYZe0/N7GRW7lpNmzfb1ln2wCxG7SwWtkqXFwgP5lQhdVlIXAaEwr5Dlr43EjC1lj8rp4iPmMkZXLk1PYK6WkATxUDlqAOYd/l0rkVeWSJo+18EaGwoLBKOB5P8F0XohU9XPaazskrduSnIprM07XNNafPFcmKXLRb1YvuzeTnMXKU7ImxPmXXltNQllkZsx15KAgDenPM2TMiaOtW6G27uy7rAe27JqXGcDpy+LRvnx+Bgw3SdNjDy+7Jz0n9qIoWQ1cI8RYgLfSrLgbTzY/xYtH37JdkbHviKQf/t4ceLkNbGvrderzMMy2LS2dpKW3f/eZO9PS2ZDAnMqxIePpWMIC2tOtfLvlNNjDR1vK0xWrpWe7IuOl7ZJ+v5koYGEaZqIVGaaYTUekiHuaFjx9ezoyu6aXLIABXksrxniJ0MCqAPopPOqQosfiNSB7IVLpb33+bmePpEdeItrakqLwJEnGuRC5WpEBz8my61ZvubU+SZ1OiC5ZAPco8s/YTqYb3ocKsx1R348BbE4Lmy2T6V7CV+t6ApJ4VXNrh5WcuaUdOUjSxEY/+bwhyxHDxJesmDNRtLX1/PiHd2zEJxqcF0rWBn72kfvbMdXxCStdEtLA6XPwigyem8C/XmA+nRfiOPaw2YANmbIBL6/I0OvssrgOotKHuRjn+OnLE3tp+ACjB0U24OFxfb+6is2L75o6Pn3L7UdRsgBmUatqAK9J5gM/pj0ivWHKKzJ4bgL/jncqGQ9imOcstCJDr9PK6owGaN3LvtBLpw1O0S4ph5WXezfMnv0dx82XK2kA+z30LOawWtJXZgDMwAuNwEVXSVgBYya07ESL1GmiAKZvPBkDNZN6qQa+7rRB0qCgr+w7aelsRlDSAGYzAi9zf7Aic0VJ9ToWKom9EINqVe13Eo6F2NxkQE20Tj5PFTzYcKW+pptOrQ9YccTAbS4uSFWuHdNKGsAscBmk56wI3mvChIgHbLxXwkp9ZmkZlHqIr1+P52NVWZAG13SRz5P+RjTmC58PTBBn66iS9ULoUlcVZY+S0smlU4aOHpFRx8cWUoQrvon6V/Rglhx7UjIMUuzOMGfRspU8gOFGO2jlOYrJLGk7gz0Pui8W5cMLwXnY6sxf4Do9YVUfmgsRrc/nUeHD7sFIXYoXNROsSTX4WxNktiIpeQB7gvJjk1Mc0nYMg5b3JeuES6sz8moYBVLaArIgYG9HNITqZFOiwhukgdU9uH3S33jR/H3PUOLGQOeHj/RNsXdMyQM42NnvoKff8Zz0wtmnEB04Br9GdljJCS/s8jtjGI8e5gC8Qrx6pC1wyYY1a7KwP3LSLMuFlDyAIREMO1gIKRTqSIy58s8uoa7Sj81OMr+beMEm2iLxb/DAas/3Zn19wbI1/32vLTYsMStj43PJbB5n0dUdH2qJ4czxYKmaXBBXwnzIJvAkf/zg35Cnwga5CTb25ku+eiPWUDsnlD6AVcUagJ3Td3ngVI5SfMqGvXvJ9PyRPDBhqciSB7BHCksAVqVzRBLMy3ZWcmin7PqmJRQVkdg5vZWhkKSiWgJw0EEA7uzN1yuMOi1DcRc8W8kDGA1stCJVJ2lgBrA/mH7+spX2My1MY8eMyJU8gPGCMtlKBzoJwPy+eaijAnONcwtiTLHca0VmxaTN1zOomG2K1H3R7KsHwWt7Fo+WmQ0BB5kQ3CZu2mGAuNyrUqUvQOWYA+HFyFxWQZGOGZEraQ0sgpVT2FVkqTMtklsqO4/EPQGFuqGJswavoBdHD69+NI+s5rTokgYwZqdPsSqtfmUd5DMxpdJquYWgr85mIg8YxMDGW7JDxa5tFgd/CtG4JHWUNIAxzvSlJO1OGo2tcKkGIC5TnDWqykv9y7MZ2JByVdvB459/9NFllhbDJhVkgRJKFsDTLv2PUXiBG5OJHHliTE1Zp6M0MdvC1mwlg2QkHSIpjvr61zpuSVHGbTY03zanRnv3LzuOfR1dujob5nhz3GM9texWyqaYguUdUtuFKZeZv8DhhfcDUoPTR59S+57OdHi+hH5pu2PJamCgbli20tY0sa8r22IKlr8jy4ENPLFOk4rnWTCMdczOCKULYMUT3sE3u47wKX7H2MPtPT7yq9l2qRy1Y0/n3OykVrjc2ba2cJwWsaZKbw528isA/zCD6VB7Jdxp2bn3YTFNLQC7Oakiu5bmhAX7F+KBW63ME6DeoP3FxS9zRzrKsajTh02yemlQjfUplzAl3KFk+8PSGoflnh5rGYpM7Q8qVOHL7IUOL3MtRWbfdPWuCWFSVD74hbN5wzdZTc7IFDjBq81saJKgRnxI8fEE0baMcgFsoVvKPZGVnBZyFYs0M9cf3Ga/O3141VPF4tpqvS6ALUisDB4JpwRe6R+0aP4C8n/AaNwVTmkj8+kC2EJvKRhm9jponkTLUXMvndC6+OqHuP2tV5+eun79Sme4XML95gLYAoCZ1EkA3nPIS0e0b2skbyTA+2FPj3rebQueWrp9O7aOd1hwAWyxw5y09ZQfTog1m8uo5VCibsaunVI8uP9g8JwlC5/5s0Ux2Ibc3DPGNuwWnxEnaWCWVi/M9idf91H/akmfwodsyryi7exTA7ceP3L8ifkr1x2oHTZa2mirC8sd7ALYosiy2UjEYlU5JT/WKeiNv3nx0iPa71mxdkXFgFbHmQuJBJLo2ZKIznlxMpgXl0G2e5AVUpCJPn0A1GY2ulFIxi3UVbIAVkk5ZEEOpkmdA2BJB48lULJSHjbdWAcQlqwJgS9X7DtRvYT8Oa/te4LU2g7nGC/ViAny7ZhLh1+ULIDbu5WXayqxW7WUuV1zjg7/3St+bLPqzJ6XwcQfvhk3bhbUdbPjGlWyJsS5Z9UdQ2+8lo8eyWJDyHywY7pM6OK3NqxftS5VhqampgR2R6ocxU0rWQCzWKWq/lc+xOuoHo4IQLR3+jv+PXKpn2x6UT9z5LGkAay27fo1tM7uXPYMf99Y+6JALgvNe1niYKC766I/vv4EvhlaWqGkAbx+/XqM8dM8vMjkTGn2BnBLOCTgs1kdmJy+8qPDBydt+L/HX4lnmwcx4uOcdl2yL3F6Rzz5q7qNF1/eei88Ejfpcdkc+TPD/zDWvtMqD36i/HZri/qUXwb27Xpn65bdhw9gcs5e8lYPIG/tyZI+bsum+bbLW/IAZonfteiFWxYunVqHVfLzsu2BMnzVfuxwe256guVEW/64ecuVT//vB9ogjlJh+DBykobX15/paC1c0iZEqM+atcNdizd8S5XqIuwVkZcRuiT4KFg0lgEd3rX7yOz1YfBGK9a0bwikO3dSec2QJIANySmazxlnJwCAox1x49X3/aDb7/8C/BOborHWzuxoAQO8ra3HOy+57v4XMHgTCrr2hemgAVYzH8JpkXkQDvdAcHNKGsC6TzPkpA/13i1rtr5x1b2PTe3slpMxGPEAhqp2hvs17aHPoFbaHIUgEL2H23pmX9689lWujYGrg5dt30iI077GFzhdPrq8InkccHJC2MB6P7C9hwkSmhK97iePvdLdOmBzT/tH4q4bpp98+qhB18Jb8V1oZwze6TlwBDU0HHBuiLPLqaDdf9sXmP7t+zf9DaA1cKWbDaE478dtkRZFtC+onW7/coNLWgNHe7SZdC1DeGzq2oc7k23Chcue+tgjxCn8JVcFSOVPuvKPPybIcfrn1Bjcxf6BPRkIyo6te5Rf/+hJccPjb3Zj5Rtr2tDPW90hdbOB26+Dl9upg1drf9h8cOoQMreNgx31SoizDP4aN/czZm9ubkY7m2jbtjVaew8d2i5oymRq2/++gBYW4z8/teGm6cpmr4K53YyQGBVsLKk45wHcNx3dArPLPPTy+z76+JNYvcMsgzM/brZ29OhRfPytBXsjvyuC/je6Orv/uPXN5/cz5wxgHby69tUBnMx8yKUPPR/SO4FMCNbCTXJPfeD8/urMi4NCTJKDJo/Ct48HYGTNC58/q1ooWN6TMhz4usiBwfrwi5WxXMSxBfRyTBlGbQZimBC76ohGzPo9D1HkrSijCefODOBp0gowtniEfC0469wn2zY9sVEHb2zhzrqKE4WzmI/nNl4D37CGKjoP0xXw2s6UqjxHxXexVSn4y5QxWQf3U2nulM5Y21enKLI2fv2DMtq4zexmkX27M3oPxqbBZFIVjzyKTUze9JL4bdVJ9Itls6jPimS7a+DYVumd5tAjA/j6h2lUexfdIlX6Z8xbGG5UqFGE8jM3DGIQfOksP036lL+P6VBk7Gq98Is/VdL+1liTIVX3RAGrU4W7mBsTTuSX0pAtj4MeB5FglHEfAP10TSXd/eM51MIluABmKeQ5MHDnraBb4Rb7BlbiDgc2E9+YMYiMgnjO5G4aUgc9beh9O9jBKprxw7VVGUjP0HwDcLmgGPBqEQZavSaIxgcww+z4+cpraImdQZyAe70V9j9qwH2AVkDTzsH6r3JTHCcA8Y3TO7FaN6SRI8A1gNlUuXkgausStBr2L7OszYALHzVODed9dpDX2xjXBlPgjWuHR6Eej4ce+vk1xG5Greo4kqJeOhbA1zwgp3er9Ctsn9QvIwmGO7kc5uUNAHAEuCYKs0JrorikJB8c9NJzbyXZp9sATm6KDnJeKMKrRbQf4nk6ntC+fWfAniFv0srjEgDiT/A+eOmKeeKZuKSiXjoSwPNWyG/3+Ok+dJpF/qXm14VWIXQI9s+VdNaoAH3xTH12WbS4QoE0Ve9vfLuM3jtg3VEU0rR6yVLT3gxoXqXMHwjnY2hOc7S9OnWqI3AvccNft/Ia8ZNUdIVMs9aCQnKWpK5rV8rRHd30Djog7ZsNP/F4MAL2HAYmQqCNb/D0z/TQKfW8dM6goRLWHZ8zIVHuIsHOyj9UUcDUBn1peE+gcTkHb/7HYOYdfBjgfUyRBK2Br1mtrqCxP50n3k+QXPAo67d3wVmMrbA3SLekAi+D1gftyvN2vWhdOtjVw4XGAfZdTEV9AZ0GJDG5s7/oxTslRtwyKyiuLYkK4dZ6WU748csD1xTAiAmvOPED2MnAzLLnPgD5XPyKHhwH4MQS45EIuO3RGp/FFlWVJQZJPKAT15u/2NZOIMsEEHPFAQOaZcceZx428QPM2k2k3d+xN3eu6sxFOeh2Z4UyD93Nj7EQ1xLfrpBUW0GEx5pl8DYMhKPKpn3z4dHidg2DmWXKsvVpHprQjc6y5z6wC2qKK6UMpMC2V5mP5kPjBmrw7KvEj+3cTELjEDynbRreO2B29C2/DWDZVsERwrJmmbPs7WL/cssz7Pr8Ci1d6fwW3K+OPu31iJfT0aZKH9Y/rMhTERUhjT0ExzE1w06BZc0yt5MHguVj0WK0j0j/82viHbxonTv/QfFVcPU9nJ9plTu7mg97j8D+tUnAuwAvxb9n+ZX0S3cgI0+dAvCK+atoGoqfC7fDRbhO4v2PMsCeim98qdOWNvCL28vo7b3F0y0AKja/prWQ1urlV9EzdgSu3pM2fYXR2bN+/N4jckBXN83AZJ4ZAPMFAHNtolL4Be7iCX0mXyUiLXjcb16ppCNthe0agLQNoH0Ok3nWVVbQuntmi9aCNzyDCgsrpQwYzCbLz16Xvm1/pYlwDU/BOMVklDUJgO7PZU44zU+fa7TfAmV2Xa3CAEZi51420ojNC8Bqe8fBjHoRg3Obxn2atlw9wXkrtksawLFdxs55mBoPUyP2rJw4dKB63tD+wUm15XJUv6pg7Um1Kr5sGZ+j8NcfHlFo7RvwXeUwYGh5L55GbwOo2zAZ+k3s17ll+RzaaWfTwGzzTygAJxPKzY/Jut42On3IAHXCSTXBz1VX0phyrxxa6ZMDq8plVU256sExWfacxm/Z5aPX8LMWRCfo9/IPJkALvOS7ANhdHkE7A+X0/v1fFZ9YK8851C6ATfQV29UV5TSioV/wjKoK2Yi1c8PwG4zPuQ6Ce2kAzuvg7K/GnItKvBz6sNJBgcMf/+GixkcpPAqWgUANAlCkhB0M+uQa2Aow10kGVaxkw/mm7eV7Ww4r/HjnGUbH8TvKP9w+PLShHfkcxRxF3qMVVfSRU+xVtMMNrgRcCbgScCXgSsCVgCsBVwKuBFwJuBJwJeBKwJWAKwFXAq4EXAm4EnAl4ErAlYArAVcCrgRcCbgScCXgSsCVgCsBVwKuBFwJlKoE/h/ghJZDspUv5AAAAABJRU5ErkJggg=="
}, function (e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function (e, t, n, i) {
        return new (n || (n = Promise))(function (o, r) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
                    e(t)
                })).then(a, s)
            }

            l((i = i.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0}), t.VipBtnNS = void 0;
    const o = n(38), r = n(31), a = n(50), s = n(88), l = n(0), c = n(239), u = n(135),
        d = l.default.getLogger("vip-btn");
    !function (e) {
        e.getBtnText = function (e) {
            return i(this, void 0, void 0, function* () {
                let t = yield r.CommonNS.getXmpPlayType();
                if (d.information("getBtnText", t), t === a.XmpPlayType.yunBo) return "云播加速";
                {
                    let t = "会员加速";
                    switch (yield u.PlayTryNS.getState(null, e)) {
                        case u.PlayTryNS.State.ready:
                            t = "试用加速";
                            break;
                        case u.PlayTryNS.State.commiting:
                        case u.PlayTryNS.State.runing:
                            t = "开通会员";
                            break;
                        case u.PlayTryNS.State.finish:
                        case u.PlayTryNS.State.over:
                            t = "继续加速"
                    }
                    return t
                }
            })
        }, e.clickBtn = function (e, t) {
            return i(this, void 0, void 0, function* () {
                r.CommonNS.callXmp(a.XmpPlayerFunction.leaveFullScreen).catch();
                let n = "";
                if (e) n = "https://pay.xunlei.com/pay.html?referfrom=v_pc_xl11_hytq_yp_yunbo&aidfrom=open_ybbtn"; else {
                    let e = yield u.PlayTryNS.getStateInfo(),
                        i = yield r.CommonNS.callXmp(a.XmpPlayerFunction.getDuration);
                    switch (yield u.PlayTryNS.getState(null, t)) {
                        case u.PlayTryNS.State.ready:
                            return void r.CommonNS.callVipPlugin(u.PlayTryNS.Function.gotoPlayTry, t).catch();
                        case u.PlayTryNS.State.runing:
                        case u.PlayTryNS.State.commiting:
                            return s.VipStatNS.playTryRuningClick(yield r.CommonNS.getCurrentTaskGcid(), e.isCloudTask, Math.floor(i / 1e3), Math.floor(e.beforeSpeed / 1024)).catch(), n = "https://pay.xunlei.com/pay.html?referfrom=v_pc_xl11_hytq_bxbb_hyjs_sy&aidfrom=bottom_trying", void r.CommonNS.openPayVipUrl(n);
                        case u.PlayTryNS.State.finish:
                        case u.PlayTryNS.State.over:
                            return s.VipStatNS.playTryAfterClick(yield r.CommonNS.getCurrentTaskGcid(), "bottom", e.isCloudTask, Math.floor(i / 1e3), Math.floor(e.beforeSpeed / 1024), Math.floor(e.tryingSpeed / 1024)).catch(), n = "https://pay.xunlei.com/pay.html?referfrom=v_pc_xl11_hytq_bxbb_hyjs_sy&aidfrom=bottom_after", void r.CommonNS.openPayVipUrl(n)
                    }
                    n = "https://pay.xunlei.com/pay.html?referfrom=v_pc_xl11_hytq_bxbb&aidfrom=vipspeedup_btn", s.VipStatNS.vipButtonClick(yield r.CommonNS.getCurrentTaskGcid()).catch()
                }
                r.CommonNS.openPayVipUrl(n)
            })
        }, e.canShowBtn = function () {
            return i(this, void 0, void 0, function* () {
                let e = yield r.CommonNS.getXmpPlayType();
                return !(e === a.XmpPlayType.downloadAndPlay && (yield r.CommonNS.getCurrentTaskStatus()) === c.DownloadKernel.TaskStatus.Succeeded || !1 !== o.default.isVip || e !== a.XmpPlayType.downloadAndPlay && e !== a.XmpPlayType.yunBo)
            })
        }
    }(t.VipBtnNS || (t.VipBtnNS = {}))
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(226), o = n(162);
    for (var r in o) ["default"].indexOf(r) < 0 && function (e) {
        n.d(t, e, function () {
            return o[e]
        })
    }(r);
    n(250), n(251), n(351);
    var a = n(2), s = Object(a.a)(o.default, i.a, i.b, !1, null, null, null);
    s.options.__file = "src/float-window-renderer/play-area/DLNA-view.vue", t.default = s.exports
}, function (e, t, n) {
    "use strict";
    var i = n(390);
    n.n(i).a
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.DownloadKernel = void 0, function (e) {
        let t, n, i, o, r, a, s, l, c, u, d, p, h, I, f, C, m, S, E;
        !function (e) {
            e[e.Unkown = 0] = "Unkown", e[e.Create = 1] = "Create", e[e.InvaldParam = 2] = "InvaldParam", e[e.InvaldLink = 3] = "InvaldLink", e[e.InvaldConfig = 4] = "InvaldConfig", e[e.Timeout = 5] = "Timeout", e[e.VerifyData = 6] = "VerifyData", e[e.Forbidden = 7] = "Forbidden", e[e.RangeDispatch = 8] = "RangeDispatch", e[e.FilePathOverRanging = 9] = "FilePathOverRanging", e[e.FileCreate = 201] = "FileCreate", e[e.FileWrite = 202] = "FileWrite", e[e.FileRead = 203] = "FileRead", e[e.FileRename = 204] = "FileRename", e[e.FileFull = 205] = "FileFull", e[e.BtUploadExist = 601] = "BtUploadExist", e[e.ForbinddenResource = 701] = "ForbinddenResource", e[e.ForbinddenAccount = 702] = "ForbinddenAccount", e[e.ForbinddenArea = 703] = "ForbinddenArea", e[e.ForbinddenCopyright = 704] = "ForbinddenCopyright", e[e.ForbinddenReaction = 705] = "ForbinddenReaction", e[e.ForbinddenPorn = 706] = "ForbinddenPorn", e[e.DownloadSDKCrash = 10001] = "DownloadSDKCrash", e[e.torrentFileNotExist = 10002] = "torrentFileNotExist"
        }(t = e.TaskError || (e.TaskError = {})), function (e) {
            e[e.Unkown = -1] = "Unkown", e[e.Success = 0] = "Success", e[e.QueryFailed = 1] = "QueryFailed", e[e.ServerError = 2] = "ServerError", e[e.ResourceNotFound = 3] = "ResourceNotFound", e[e.AuthorizingFailed = 4] = "AuthorizingFailed", e[e.ForbidByCopyright = 5] = "ForbidByCopyright", e[e.ForbidByPorNoGraphy = 6] = "ForbidByPorNoGraphy", e[e.ForbidByReactionary = 7] = "ForbidByReactionary", e[e.ForbidByOtherFilter = 8] = "ForbidByOtherFilter"
        }(n = e.DcdnStatusCode || (e.DcdnStatusCode = {})), function (e) {
            e[e.Begin = -1] = "Begin", e[e.Unkown = 0] = "Unkown", e[e.StandBy = 1] = "StandBy", e[e.PreDownloading = 2] = "PreDownloading", e[e.StartWaiting = 3] = "StartWaiting", e[e.StartPending = 4] = "StartPending", e[e.Started = 5] = "Started", e[e.StopPending = 6] = "StopPending", e[e.Stopped = 7] = "Stopped", e[e.Succeeded = 8] = "Succeeded", e[e.Failed = 9] = "Failed", e[e.Seeding = 10] = "Seeding", e[e.DestroyPending = 11] = "DestroyPending", e[e.End = 12] = "End"
        }(i = e.TaskStatus || (e.TaskStatus = {})), function (e) {
            e[e.Begin = -1] = "Begin", e[e.StandBy = 0] = "StandBy", e[e.Stopped = 1] = "Stopped", e[e.Started = 2] = "Started", e[e.Complete = 3] = "Complete", e[e.Forbidden = 4] = "Forbidden", e[e.Error = 5] = "Error", e[e.End = 6] = "End"
        }(o = e.BtFileStatus || (e.BtFileStatus = {})), function (e) {
            e[e.DispatchStrategyNone = 0] = "DispatchStrategyNone", e[e.DispatchStrategyOrigin = 1] = "DispatchStrategyOrigin", e[e.DispatchStrategyP2s = 2] = "DispatchStrategyP2s", e[e.DispatchStrategyP2p = 4] = "DispatchStrategyP2p", e[e.DispatchStrategyAll = -1] = "DispatchStrategyAll"
        }(r = e.DispatchStrategy || (e.DispatchStrategy = {})), function (e) {
            e[e.Unkown = 0] = "Unkown", e[e.P2sp = 1] = "P2sp", e[e.Bt = 2] = "Bt", e[e.Emule = 3] = "Emule", e[e.Group = 4] = "Group", e[e.Magnet = 5] = "Magnet"
        }(a = e.TaskType || (e.TaskType = {})), function (e) {
            e.Unkown = "Unkown", e.Downloading = "Downloading", e.Completed = "Completed", e.Recycle = "Recycle"
        }(s = e.CategroyViewID || (e.CategroyViewID = {})), function (e) {
            e[e.Unknow = 0] = "Unknow", e[e.TaskCreated = 1] = "TaskCreated", e[e.InsertToCategoryView = 2] = "InsertToCategoryView", e[e.RemoveFromCategoryView = 3] = "RemoveFromCategoryView", e[e.StatusChanged = 4] = "StatusChanged", e[e.DetailChanged = 5] = "DetailChanged", e[e.ChannelInfoChanged = 6] = "ChannelInfoChanged", e[e.DcdnStatusChanged = 7] = "DcdnStatusChanged", e[e.TaskDescriptionChanged = 8] = "TaskDescriptionChanged", e[e.TaskUserRead = 9] = "TaskUserRead", e[e.TaskRenamed = 10] = "TaskRenamed", e[e.TaskMovedEnd = 11] = "TaskMovedEnd", e[e.TaskMovingStateChange = 12] = "TaskMovingStateChange", e[e.BtSubFileDetailChanged = 13] = "BtSubFileDetailChanged", e[e.BtSubFileLoaded = 14] = "BtSubFileLoaded", e[e.BtSubFileForbidden = 15] = "BtSubFileForbidden", e[e.BtSubFileDcdnStatusChanged = 16] = "BtSubFileDcdnStatusChanged", e[e.TaskCategoryMovedEnd = 17] = "TaskCategoryMovedEnd", e[e.GroupTaskSubFileDetailChanged = 18] = "GroupTaskSubFileDetailChanged", e[e.TaskDestroying = 19] = "TaskDestroying", e[e.TaskDestroyed = 20] = "TaskDestroyed", e[e.UpdateTaskCid = 21] = "UpdateTaskCid", e[e.UpdateTaskGcid = 22] = "UpdateTaskGcid"
        }(l = e.TaskEventType || (e.TaskEventType = {})), function (e) {
            e[e.NumberStrart = 0] = "NumberStrart", e[e.TaskId = 1] = "TaskId", e[e.VirtualId = 2] = "VirtualId", e[e.SrcTotal = 3] = "SrcTotal", e[e.SrcUsing = 4] = "SrcUsing", e[e.FileSize = 5] = "FileSize", e[e.ReceivedSize = 6] = "ReceivedSize", e[e.DownloadSize = 7] = "DownloadSize", e[e.TotalDownloadSize = 8] = "TotalDownloadSize", e[e.CreateTime = 9] = "CreateTime", e[e.CompletionTime = 10] = "CompletionTime", e[e.DownloadingPeriod = 11] = "DownloadingPeriod", e[e.Progress = 12] = "Progress", e[e.RecycleTime = 13] = "RecycleTime", e[e.FileCreated = 14] = "FileCreated", e[e.Forbidden = 15] = "Forbidden", e[e.CategoryId = 16] = "CategoryId", e[e.UserRead = 17] = "UserRead", e[e.OpenOnComplete = 18] = "OpenOnComplete", e[e.GroupTaskId = 19] = "GroupTaskId", e[e.DownloadSubTask = 20] = "DownloadSubTask", e[e.NameType = 21] = "NameType", e[e.OwnerProduct = 22] = "OwnerProduct", e[e.FileIndex = 23] = "FileIndex", e[e.NameFixed = 24] = "NameFixed", e[e.ValidDownloadSize = 25] = "ValidDownloadSize", e[e.RealDownloadSize = 26] = "RealDownloadSize", e[e.ResourceLegal = 27] = "ResourceLegal", e[e.TaskType = 28] = "TaskType", e[e.ErrorCode = 29] = "ErrorCode", e[e.NumberEnd = 30] = "NumberEnd", e[e.BooleanStart = 4096] = "BooleanStart", e[e.Destroyed = 4097] = "Destroyed", e[e.Background = 4098] = "Background", e[e.Moving = 4099] = "Moving", e[e.BooleanEnd = 4100] = "BooleanEnd", e[e.StringStart = 8192] = "StringStart", e[e.TaskName = 8193] = "TaskName", e[e.SavePath = 8194] = "SavePath", e[e.RelativePath = 8195] = "RelativePath", e[e.TaskUrl = 8196] = "TaskUrl", e[e.RefUrl = 8197] = "RefUrl", e[e.Cid = 8198] = "Cid", e[e.Gcid = 8199] = "Gcid", e[e.Cookie = 8200] = "Cookie", e[e.ProductInfo = 8201] = "ProductInfo", e[e.Origin = 8202] = "Origin", e[e.Description = 8203] = "Description", e[e.UserData = 8204] = "UserData", e[e.OriginName = 8205] = "OriginName", e[e.HTTPContentType = 8206] = "HTTPContentType", e[e.CategoryViewId = 8207] = "CategoryViewId", e[e.StringEnd = 8208] = "StringEnd", e[e.ObjectStart = 12288] = "ObjectStart", e[e.ObjectEnd = 12289] = "ObjectEnd"
        }(c = e.TaskAttribute || (e.TaskAttribute = {})), function (e) {
            e[e.UnKnown = 0] = "UnKnown", e[e.SrcTotal = 1] = "SrcTotal", e[e.SrcUsing = 2] = "SrcUsing", e[e.FileSize = 4] = "FileSize", e[e.ReceivedSize = 8] = "ReceivedSize", e[e.DownloadSize = 16] = "DownloadSize", e[e.CompletionTime = 32] = "CompletionTime", e[e.DownloadingPeriod = 64] = "DownloadingPeriod", e[e.Progress = 128] = "Progress", e[e.RecycleTime = 256] = "RecycleTime", e[e.FileCreated = 512] = "FileCreated", e[e.Forbidden = 1024] = "Forbidden", e[e.UserRead = 2048] = "UserRead", e[e.OpenOnComplete = 4096] = "OpenOnComplete", e[e.DownloadSubTask = 8192] = "DownloadSubTask", e[e.TaskName = 16384] = "TaskName", e[e.SavePath = 32768] = "SavePath", e[e.Cid = 65536] = "Cid", e[e.Gcid = 131072] = "Gcid", e[e.UserData = 262144] = "UserData", e[e.CategoryViewId = 524288] = "CategoryViewId", e[e.ErrorCode = 1048576] = "ErrorCode", e[e.TaskSpeed = 2097152] = "TaskSpeed", e[e.ChannelInfo = 4194304] = "ChannelInfo", e[e.ValidDownloadSize = 8388608] = "ValidDownloadSize"
        }(u = e.TaskDetailChangedFlags || (e.TaskDetailChangedFlags = {})), function (e) {
            e[e.UnKnown = 0] = "UnKnown"
        }(d = e.BtSubFileDetailChangedFlags || (e.BtSubFileDetailChangedFlags = {})), function (e) {
            e[e.UnKnown = 0] = "UnKnown"
        }(p = e.GroupTaskSubFileDetailChangedFlags || (e.GroupTaskSubFileDetailChangedFlags = {})), function (e) {
            e[e.NumberStrart = 0] = "NumberStrart", e[e.TaskId = 1] = "TaskId", e[e.FileStatus = 2] = "FileStatus", e[e.DownloadSize = 3] = "DownloadSize", e[e.FileSize = 4] = "FileSize", e[e.EnableDcdn = 5] = "EnableDcdn", e[e.ErrorCode = 6] = "ErrorCode", e[e.DcdnStatus = 7] = "DcdnStatus", e[e.RealIndex = 8] = "RealIndex", e[e.FileOffset = 9] = "FileOffset", e[e.Visible = 10] = "Visible", e[e.Download = 11] = "Download", e[e.NumberEnd = 12] = "NumberEnd", e[e.StringStart = 13] = "StringStart", e[e.FinalName = 14] = "FinalName", e[e.RelativePath = 15] = "RelativePath", e[e.FileName = 16] = "FileName", e[e.FilePath = 17] = "FilePath", e[e.Cid = 18] = "Cid", e[e.Gcid = 19] = "Gcid", e[e.StringEnd = 20] = "StringEnd"
        }(h = e.BtFileAttribute || (e.BtFileAttribute = {})), function (e) {
            e[e.P2spUrl = 0] = "P2spUrl", e[e.BtInfoId = 1] = "BtInfoId", e[e.EmuleFileHash = 2] = "EmuleFileHash", e[e.MagnetUrl = 3] = "MagnetUrl", e[e.GroupTaskName = 4] = "GroupTaskName"
        }(I = e.KeyType || (e.KeyType = {})), function (e) {
            e[e.NameInclude = 1] = "NameInclude", e[e.BtDisplayNameInclude = 2] = "BtDisplayNameInclude"
        }(f = e.SearchKeyType || (e.SearchKeyType = {})), function (e) {
            e[e.ExtEqual = 1] = "ExtEqual", e[e.NameLikeAndExtEqual = 2] = "NameLikeAndExtEqual", e[e.TaskTypeEqual = 4] = "TaskTypeEqual"
        }(C = e.FilterKeyType || (e.FilterKeyType = {})), function (e) {
            e[e.All = 0] = "All", e[e.CommonForeground = 1] = "CommonForeground", e[e.CommonBackground = 2] = "CommonBackground", e[e.Temporary = 3] = "Temporary", e[e.PreDownload = 4] = "PreDownload", e[e.PrivateForeground = 5] = "PrivateForeground"
        }(m = e.KeyFilter || (e.KeyFilter = {})), function (e) {
            e[e.Unknown = -1] = "Unknown", e[e.LoadTaskBasic = 0] = "LoadTaskBasic", e[e.Create = 1] = "Create", e[e.Recycle = 2] = "Recycle", e[e.Recover = 3] = "Recover", e[e.ReDownload = 4] = "ReDownload", e[e.MoveThoughCategory = 5] = "MoveThoughCategory"
        }(S = e.TaskInsertReason || (e.TaskInsertReason = {})), function (e) {
            e[e.Unknown = -1] = "Unknown", e[e.ContextMenu = 0] = "ContextMenu", e[e.Button = 1] = "Button", e[e.TaskDetail = 2] = "TaskDetail", e[e.DownloadMagnet = 3] = "DownloadMagnet", e[e.ToolbarButton = 4] = "ToolbarButton", e[e.SelectDownloadLists = 5] = "SelectDownloadLists", e[e.DeleteTask = 6] = "DeleteTask"
        }(E = e.TaskStopReason || (e.TaskStopReason = {}))
    }(t.DownloadKernel || (t.DownloadKernel = {}))
}, , , , , , , , , , , , , , , function (e, t) {
}, , , , function (e, t) {
}, , function (e, t) {
}, , , , function (e, t) {
}, , function (e, t) {
}, , , function (e, t) {
}, , function (e, t) {
}, , , , , , function (e, t) {
}]);