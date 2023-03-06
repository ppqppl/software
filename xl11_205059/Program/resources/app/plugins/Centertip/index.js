module.exports = function (e) {
    var t = {};

    function i(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {i: n, l: !1, exports: {}};
        return e[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }

    return i.m = e, i.c = t, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, i.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) i.d(n, r, function (t) {
            return e[t]
        }.bind(null, r));
        return n
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 33)
}([function (e, t, i) {
    "use strict";
    var n = i(21), r = i(47), o = Object.prototype.toString;

    function s(e) {
        return "[object Array]" === o.call(e)
    }

    function a(e) {
        return null !== e && "object" == typeof e
    }

    function c(e) {
        return "[object Function]" === o.call(e)
    }

    function l(e, t) {
        if (null !== e && void 0 !== e) if ("object" != typeof e && (e = [e]), s(e)) for (var i = 0, n = e.length; i < n; i++) t.call(null, e[i], i, e); else for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e)
    }

    e.exports = {
        isArray: s, isArrayBuffer: function (e) {
            return "[object ArrayBuffer]" === o.call(e)
        }, isBuffer: r, isFormData: function (e) {
            return "undefined" != typeof FormData && e instanceof FormData
        }, isArrayBufferView: function (e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        }, isString: function (e) {
            return "string" == typeof e
        }, isNumber: function (e) {
            return "number" == typeof e
        }, isObject: a, isUndefined: function (e) {
            return void 0 === e
        }, isDate: function (e) {
            return "[object Date]" === o.call(e)
        }, isFile: function (e) {
            return "[object File]" === o.call(e)
        }, isBlob: function (e) {
            return "[object Blob]" === o.call(e)
        }, isFunction: c, isStream: function (e) {
            return a(e) && c(e.pipe)
        }, isURLSearchParams: function (e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        }, isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
        }, forEach: l, merge: function e() {
            var t = {};

            function i(i, n) {
                "object" == typeof t[n] && "object" == typeof i ? t[n] = e(t[n], i) : t[n] = i
            }

            for (var n = 0, r = arguments.length; n < r; n++) l(arguments[n], i);
            return t
        }, extend: function (e, t, i) {
            return l(t, function (t, r) {
                e[r] = i && "function" == typeof t ? n(t, i) : t
            }), e
        }, trim: function (e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function (e, t, i) {
    e.exports = i(40)(56)
}, function (e, t) {
    e.exports = require("events")
}, function (e, t) {
    e.exports = require("path")
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            c((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(2), o = i(36), s = i(6), a = i(8);

    function c(e) {
        a.information("on object freeer"), global.__xdasIPCClienInstance.notifyFreer(e.remoteId, e.callbackId)
    }

    let l = void 0;
    global.__xdasIPCClienInstance || (global.__xdasIPCClienInstance = new class extends r.EventEmitter {
        constructor() {
            super(), this.rid = 0, this.apis = {}, this.singletonMap = {}, this.connectedMap = {}, this.retCallbackMap = {}, this.eventCallbackMaps = {}, this.contextCallbackMap = {}
        }

        start(e, t, i, n) {
            do {
                if (t || (t = s.getDefaultPrex()), this.singletonMap.hasOwnProperty(t.toLowerCase())) {
                    if (n) if (this.connectedMap.hasOwnProperty(t.toLowerCase())) n("connect"); else {
                        let e = this.singletonMap[t.toLowerCase()];
                        e.on("error", e => {
                            n("error", e)
                        }), e.on("connect", () => {
                            n("connect")
                        }), e.on("end", () => {
                            let t = e.isInprocess();
                            n("end", e.getContext(), i, t)
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
                if (e.name === s.serverContextName) throw new Error("client context must difference from server");
                if (i && !this.client) throw new Error("connect to other product must start self firstly");
                global.__xdasPluginConfig || (global.__xdasPluginConfig = e);
                let r = new o.Client({context: e, socketPrex: t});
                this.singletonMap[t.toLowerCase()] = r, i || (this.client = r), r.on("message", e => {
                    if ("fire_event" === e.action) this.fireServerEvent(r, e.name, [e.__context].concat(e.args)); else if ("client_context_freer" === e.action) do {
                        let t = e.rid;
                        if (t) {
                            if (!this.contextCallbackMap[t]) break;
                            delete this.contextCallbackMap[t]
                        }
                    } while (0); else if ("call_client_by_id" === e.action) this.callFunctionById(r, e.rid, e.s_rid, e.args); else if ("call_client_api" === e.action) this.callRegisterFunction(r, e); else if ("check_client_function" === e.action) {
                        let t = e.method, i = !0;
                        t && this.apis && this.apis[t] || (i = !1), this.sendAdapter(r, {
                            s_rid: e.s_rid,
                            action: "check_client_function_callback",
                            success: !0,
                            data: i
                        })
                    } else if (void 0 !== e.success && null !== e.success) {
                        let t = e;
                        this.client === r && this.emit("stat_call_function_back", r.getContext(), e);
                        const i = this.retCallbackMap[t.rid].callback;
                        if (i) if (t.success) do {
                            if ("remote_client_callback" === e.action && e.__context && e.__context.name && e.__context.productId) {
                                let n = `${e.__context.productId}-${e.__context.name}`.toLowerCase();
                                i(null, this.decodeParameter(t.data, n));
                                break
                            }
                            i(null, t.data)
                        } while (0); else i(t.error, t.data);
                        delete this.retCallbackMap[t.rid]
                    }
                }), r.on("error", e => {
                    n && n("error", e), this.emit("socket-error", e, r.getContext(), i, r.isInprocess()), delete this.singletonMap[t.toLowerCase()], delete this.connectedMap[t.toLowerCase()], i || (this.client = null)
                }), r.isInprocess() ? (this.connectedMap[t.toLowerCase()] = r, n && n("connect"), this.emit("connect", r.getContext(), i, !0)) : r.on("connect", () => {
                    this.connectedMap[t.toLowerCase()] = r, n && n("connect"), this.emit("connect", r.getContext(), i, !1)
                }), r.on("end", () => {
                    let e = r.isInprocess();
                    a.information("server is ended, and this client emit end", t, i, e), n && n("end", r.getContext(), i, e), this.emit("end", r.getContext(), i, e), delete this.singletonMap[t.toLowerCase()], delete this.connectedMap[t.toLowerCase()], i || (this.client = null)
                }), this.registry(r)
            } while (0)
        }

        registerFunctions(e) {
            do {
                if (!e) break;
                let t = void 0;
                for (let i in e) if (this.apis.hasOwnProperty(i)) {
                    t = i;
                    break
                }
                if (t) throw new Error(`try to coverd function ${t}`);
                this.apis = Object.assign({}, this.apis, e)
            } while (0)
        }

        checkServerFunction(e) {
            return n(this, void 0, void 0, function* () {
                return this.internalCheckServerFunction(this.client, e)
            })
        }

        callServerFunction(e, ...t) {
            return n(this, void 0, void 0, function* () {
                let i = null, n = yield this.callServerFunctionEx(e, ...t);
                return n && (i = n[0]), i
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

        callRemoteClientFunction(e, t, ...i) {
            return this.internalCallRemoteClientFunction(this.client, e, t, ...i)
        }

        notifyFreer(e, t) {
            this.sendAdapter(this.client, {action: "client_context_freer", dst: e, rid: t})
        }

        callRemoteContextById(e, t, ...i) {
            this.sendAdapter(this.client, {dst: e, action: "call_remote_context_by_id", rid: t, args: i})
        }

        attachServerEvent(e, t) {
            return this.internalAttachServerEvent(this.client, e, t)
        }

        detachServerEvent(e, t) {
            this.internalDetachServerEvent(this.client, e, t)
        }

        broadcastEvent(e, ...t) {
            this.sendAdapter(this.client, {action: "broadcast", name: e, args: t})
        }

        crossCheckServerFunction(e, t) {
            return n(this, void 0, void 0, function* () {
                {
                    if (!e) throw new Error("An argument for 'productId' was not provided");
                    let i = this.singletonMap[e.toLowerCase()];
                    if (!i) throw new Error("Please call the 'start' interface first");
                    return this.internalCheckServerFunction(i, t)
                }
            })
        }

        crossCallServerFunction(e, t, ...i) {
            return n(this, void 0, void 0, function* () {
                let n = null, r = yield this.crossCallServerFunctionEx(e, t, ...i);
                return r && (n = r[0]), n
            })
        }

        crossCallServerFunctionEx(e, t, ...i) {
            {
                if (!e) throw new Error("An argument for 'productId' was not provided");
                let n = this.singletonMap[e.toLowerCase()];
                if (!n) throw new Error("Please call the 'start' interface first");
                if (!t) throw new Error("An argument for 'funcName' was not provided");
                return this.internalCallServerFunctionEx(n, t, ...i)
            }
        }

        crossIsRemoteClientExist(e, t) {
            return n(this, void 0, void 0, function* () {
                {
                    if (!e) throw new Error("An argument for 'productId' was not provided");
                    let i = this.singletonMap[e.toLowerCase()];
                    if (!i) throw new Error("Please call the 'start' interface first");
                    return this.internalIsRemoteClientExist(i, t)
                }
            })
        }

        crossCheckRemoteFunction(e, t, i) {
            return n(this, void 0, void 0, function* () {
                {
                    if (!e) throw new Error("An argument for 'productId' was not provided");
                    let n = this.singletonMap[e.toLowerCase()];
                    if (!n) throw new Error("Please call the 'start' interface first");
                    if (!t) throw new Error("An argument for 'remoteId' was not provided");
                    if (!i) throw new Error("An argument for 'funcName' was not provided");
                    return this.internalCheckRemoteFunction(n, t, i)
                }
            })
        }

        crossCallRemoteClientFunction(e, t, i, ...n) {
            {
                if (!e) throw new Error("An argument for 'productId' was not provided");
                let r = this.singletonMap[e.toLowerCase()];
                if (!r) throw new Error("Please call the 'start' interface first");
                if (!t) throw new Error("An argument for 'remoteId' was not provided");
                if (!i) throw new Error("An argument for 'funcName' was not provided");
                return this.internalCallRemoteClientFunction(r, t, i, ...n)
            }
        }

        crossAttachServerEvent(e, t, i) {
            let n = void 0;
            {
                if (!e) throw new Error("An argument for 'productId' was not provided");
                let r = this.singletonMap[e.toLowerCase()];
                if (!r) throw new Error("Please call the 'start' interface first");
                if (!t) throw new Error("An argument for 'eventName' was not provided");
                n = this.internalAttachServerEvent(r, t, i)
            }
            return n
        }

        crossDetachServerEvent(e, t, i) {
            {
                if (!e) throw new Error("An argument for 'productId' was not provided");
                let n = this.singletonMap[e.toLowerCase()];
                if (!n) throw new Error("Please call the 'start' interface first");
                if (!t) throw new Error("An argument for 'eventName' was not provided");
                this.internalDetachServerEvent(n, t, i)
            }
        }

        crossBroadcastEvent(e, t, ...i) {
            {
                if (!e) throw new Error("An argument for 'productId' was not provided");
                let n = this.singletonMap[e.toLowerCase()];
                if (!n) throw new Error("Please call the 'start' interface first");
                if (!t) throw new Error("An argument for 'eventName' was not provided");
                this.sendAdapter(n, {
                    action: "broadcast",
                    name: t,
                    args: i,
                    __context: Object.assign({}, this.client.getContext())
                })
            }
        }

        registry(e) {
            let t = this.getFullContextName(this.client);
            return new Promise((i, n) => {
                do {
                    if (!t) {
                        i(!1);
                        break
                    }
                    let n = this.generateId();
                    const r = {alias: t, action: "register", rid: n};
                    let o = (e, n) => {
                        e ? (a.error("register error", e.message), i(n)) : i(t)
                    };
                    this.retCallbackMap[n] = Object.assign({callback: o}, r), this.sendAdapter(e, r)
                } while (0)
            })
        }

        getNow() {
            return Date.now()
        }

        sendAdapter(e, t) {
            do {
                if (!t) break;
                let i = this.getNow();
                if (t.timestamp ? t.timestamp = [...t.timestamp].concat(i) : t.timestamp = [].concat(i), !t.__context) {
                    let i = e.getContext();
                    i && (t = Object.assign({__context: i}, t))
                }
                e.isInprocess() ? (a.information("send to server in process"), global.__xdasIPCServer.emit("message", t, e)) : e.send(t)
            } while (0)
        }

        parseContext() {
            let e = void 0;
            do {
                let t = "";
                for (let e = 0; e < process.argv.length; e++) {
                    let i = process.argv[e];
                    if (0 === i.indexOf("--xdas-plugin-name=", 0)) {
                        t = i.substr("--xdas-plugin-name=".length);
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
            let i = "";
            do {
                if (t === s.serverContextName) {
                    i = t;
                    break
                }
                if (void 0 === t) {
                    i = `${e.getContext().productId}-${e.getContext().name}`.toLowerCase();
                    break
                }
                i = `${e.getContext().productId}-${t}`.toLowerCase()
            } while (0);
            return i
        }

        internalCheckServerFunction(e, t) {
            return new Promise((i, n) => {
                do {
                    if (!e) {
                        i(!1);
                        break
                    }
                    if (!t) {
                        i(!1);
                        break
                    }
                    let n = this.generateId();
                    const r = {action: "check_server_function_exist", method: t, rid: n};
                    let o = (e, t) => {
                        i(!e && t)
                    };
                    this.retCallbackMap[n] = Object.assign({callback: o}, r), this.sendAdapter(e, r)
                } while (0)
            })
        }

        internalCallServerFunctionEx(e, t, ...i) {
            return new Promise((n, r) => {
                do {
                    if (!e) {
                        n([null, "client doesn't ready"]);
                        break
                    }
                    if (!t) {
                        n([null, "funcName is not specifed"]);
                        break
                    }
                    e === this.client && this.emit("stat_call_function", this.client.getContext(), t);
                    let r = this.generateId();
                    if (i) for (let e = 0; e < i.length; e++) i[e] = this.convertFunction2IdEx(i[e]);
                    const o = {rid: r, method: t, args: i};
                    let s = (t, i) => {
                        t ? (a.error("callServerFunction error", t, e.getContext()), n([null, t])) : n([i, void 0])
                    };
                    this.retCallbackMap[r] = Object.assign({callback: s}, o), this.sendAdapter(e, o)
                } while (0)
            })
        }

        internalIsRemoteClientExist(e, t) {
            return new Promise((i, n) => {
                do {
                    if (!t) {
                        i([!1, "remote client alias is not specifed"]);
                        break
                    }
                    if (e === this.client && t.toLowerCase() === e.getContext().name.toLowerCase()) {
                        i([!0, "self is exist"]);
                        break
                    }
                    let n = this.generateId();
                    const r = {dst: this.getFullContextName(e, t), action: "check_client_exist", rid: n};
                    let o = (e, t) => {
                        i(e ? [!1, e] : [t, "success"])
                    };
                    this.retCallbackMap[n] = Object.assign({callback: o}, r), this.sendAdapter(e, r)
                } while (0)
            })
        }

        internalCheckRemoteFunction(e, t, i) {
            return new Promise((n, r) => {
                do {
                    if (!e) {
                        n(!1);
                        break
                    }
                    if (!t) {
                        n(!1);
                        break
                    }
                    if (!i) {
                        n(!1);
                        break
                    }
                    if (e === this.client && t.toLowerCase() === e.getContext().name.toLowerCase()) {
                        n(!(!this.apis || !this.apis[i]));
                        break
                    }
                    let r = this.generateId();
                    const o = {
                        action: "check_client_function_exist",
                        method: i,
                        rid: r,
                        src: this.getFullContextName(this.client),
                        dst: this.getFullContextName(e, t)
                    };
                    let s = (e, t) => {
                        n(!e && t)
                    };
                    this.retCallbackMap[r] = Object.assign({callback: s}, o), this.sendAdapter(e, o)
                } while (0)
            })
        }

        internalCallRemoteClientFunction(e, t, i, ...n) {
            return new Promise((r, o) => {
                do {
                    if (!e) {
                        r([null, "client doesn't ready"]);
                        break
                    }
                    if (!t) {
                        r([null, "remote client alias is not specifed"]);
                        break
                    }
                    if (!i) {
                        r([null, "funcName is not specifed"]);
                        break
                    }
                    let o = (e, t) => {
                        e ? (a.information("callRemoteClientFunction", e.message), r([null, e])) : r([t, void 0])
                    };
                    if (n) for (let e = 0; e < n.length; e++) n[e] = this.convertFunction2IdEx(n[e]);
                    let s = this.generateId();
                    const c = {
                        src: this.getFullContextName(this.client),
                        dst: this.getFullContextName(e, t),
                        action: "call_remote_client_api",
                        method: i,
                        args: n,
                        rid: s
                    };
                    this.retCallbackMap[s] = Object.assign({callback: o}, c), this.sendAdapter(e, c)
                } while (0)
            })
        }

        internalAttachServerEvent(e, t, i) {
            let n = e.getContext().productId.toLowerCase();
            this.eventCallbackMaps.hasOwnProperty(n) || (this.eventCallbackMaps[n] = {}), this.eventCallbackMaps[n].hasOwnProperty(t) || (this.eventCallbackMaps[n][t] = {}), s.isObjectEmpty(this.eventCallbackMaps[n][t]) && this.sendAdapter(e, {
                action: "attach_event",
                name: t
            });
            let r = this.generateId();
            return this.eventCallbackMaps[n][t][r] = i, r
        }

        internalDetachServerEvent(e, t, i) {
            let n = e.getContext().productId.toLowerCase();
            do {
                if (!this.eventCallbackMaps.hasOwnProperty(n)) break;
                if (!this.eventCallbackMaps[n].hasOwnProperty(t)) break;
                delete this.eventCallbackMaps[n][t][i], s.isObjectEmpty(this.eventCallbackMaps[n][t]) && this.sendAdapter(e, {
                    action: "detach_event",
                    name: t
                })
            } while (0)
        }

        fireServerEvent(e, t, ...i) {
            let n = e.getContext().productId.toLowerCase();
            do {
                if (!this.eventCallbackMaps.hasOwnProperty(n)) break;
                if (!this.eventCallbackMaps[n].hasOwnProperty(t)) break;
                let e = this.eventCallbackMaps[n][t];
                for (let t in e) {
                    let n = e[t];
                    n && n.apply(null, ...i)
                }
            } while (0)
        }

        callFunctionById(e, t, i, ...n) {
            let r = void 0, o = !1;
            do {
                const s = this.contextCallbackMap[t];
                if (!s) {
                    a.error("the context function has been freeer", t), r = {
                        s_rid: i,
                        action: "call_client_by_id_callback",
                        success: !1,
                        error: "the context function has been freeer"
                    };
                    break
                }
                let c = void 0, l = void 0;
                try {
                    c = s.apply(null, ...n)
                } catch (e) {
                    l = e.message;
                    break
                }
                if (void 0 === i || null === i) break;
                if (r = {s_rid: i, action: "call_client_by_id_callback", success: !1}, void 0 !== l) {
                    r.error = l;
                    break
                }
                if (c && c.then) {
                    c.then(t => {
                        r.data = this.convertFunction2IdEx(t), r.success = !0, this.sendAdapter(e, r)
                    }).catch(t => {
                        r.error = t instanceof Error ? t.message : t, this.sendAdapter(e, r)
                    }), o = !0;
                    break
                }
                r.success = !0, r.data = this.convertFunction2IdEx(c)
            } while (0);
            !o && r && this.sendAdapter(e, r)
        }

        convertFunction2IdEx(e) {
            let t = e;
            if ("function" == typeof e) {
                let i = this.generateId();
                this.contextCallbackMap[i] = e, t = {"__nodeipc_callback_id__{A9C9D760-14E8-42CB-A3CB-9C0A0DDFD732}": i}
            } else if (e && "object" == typeof e) {
                t = Array.isArray(e) ? [...e] : Object.assign({}, e);
                for (let e in t) {
                    let i = t[e];
                    if ("function" == typeof i) {
                        let n = this.generateId();
                        this.contextCallbackMap[n] = i, t[e] = {"__nodeipc_callback_id__{A9C9D760-14E8-42CB-A3CB-9C0A0DDFD732}": n}
                    } else i && "object" == typeof i && (t[e] = this.convertFunction2IdEx(i))
                }
            }
            return t
        }

        decodeParameter(e, t) {
            let i = e;
            do {
                if (!e) break;
                if (!t) break;
                if ("object" != typeof e) break;
                let n = e["__nodeipc_callback_id__{A9C9D760-14E8-42CB-A3CB-9C0A0DDFD732}"];
                if (n) {
                    i = ((...e) => {
                        this.callRemoteContextById(t, n, ...e)
                    }), global.__xdasObjectLiftMonitor && global.__xdasObjectLiftMonitor.setObjectFreer(i, {
                        remoteId: t,
                        callbackId: n
                    }, c);
                    break
                }
                for (let i in e) {
                    let n = e[i];
                    e[i] = this.decodeParameter(n, t)
                }
            } while (0);
            return i
        }

        callRegisterFunction(e, t) {
            let i = void 0, n = !1;
            do {
                if (!t) break;
                let r = t.method;
                if (!r) break;
                let o = this.getNow();
                if (i = {
                    s_rid: t.s_rid,
                    action: "remote_client_callback",
                    success: !1,
                    rid: t.rid,
                    method: t.method,
                    src: t.src,
                    timestamp: t.timestamp ? t.timestamp.concat(o) : [].concat(o)
                }, !this.apis || !this.apis[r]) {
                    i.error = `callRegisterFunction ${r} is undefined`;
                    break
                }
                let s = void 0, a = this.decodeParameter(t.args, t.src);
                try {
                    s = this.apis[r].apply(null, [t.src].concat(a))
                } catch (e) {
                    i.error = e.message;
                    break
                }
                if (s && s.then) {
                    s.then(t => {
                        i.data = this.convertFunction2IdEx(t), i.success = !0, this.sendAdapter(e, i)
                    }).catch(t => {
                        i.error = t instanceof Error ? t.message : t, this.sendAdapter(e, i)
                    }), n = !0;
                    break
                }
                i.success = !0, i.data = this.convertFunction2IdEx(s)
            } while (0);
            a.information("callRegisterFunction", i), !n && i && this.sendAdapter(e, i)
        }
    }), l = global.__xdasIPCClienInstance, t.client = l
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            c((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(38);

    class o {
        constructor() {
            this.mThunderVersionStr = void 0, this.mThunderVersionNumber = void 0, this.mNativeCall = null, global.AsyncGetNativeCallModuleObj && global.AsyncGetNativeCallModuleObj(e => {
                this.mNativeCall = e.nativeCall
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
                const {client: e} = yield Promise.resolve().then(() => i(4)),
                    t = yield e.callServerFunction("GetThunderVersion");
                console.info("GetThunderVersion", t), this.mThunderVersionStr = t, this.mThunderVersionNumber = 0;
                let n = this.mThunderVersionStr.split(".");
                if (n && 4 === n.length) {
                    let e = Number(n[0]).valueOf(), t = Number(n[1]).valueOf(), i = Number(n[2]).valueOf(), r = 128;
                    this.mThunderVersionNumber = r * Math.pow(2, 24) + e * Math.pow(2, 16) + t * Math.pow(2, 8) + i
                }
            })
        }
    }

    t.PluginHelper = o, function (e) {
        const t = new o;
        e.getHelper = function () {
            return t
        }
    }(t.PluginHelperNS || (t.PluginHelperNS = {}))
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(9), r = i(3);
    t.getDefaultPrex = function () {
        return r.basename(process.execPath, ".exe")
    }, t.getSockPath = function (e) {
        const t = n.tmpdir();
        let i = e;
        e || (i = r.basename(process.execPath, ".exe"));
        let o = r.join(t, `${i}-xunlei-node-net-ipc-{FD196984-2591-4588-AA6F-5C8AC1266290}.sock`);
        return "win32" === process.platform && (o = "\\\\.\\pipe\\" + (o = (o = o.replace(/^\//, "")).replace(/\//g, "-"))), o
    }, t.serverContextName = "xunlei-node-net-ipc-server-{46105371-DE78-4442-B59F-FDA1D6D7D430}", t.mainProcessContext = "main-process", t.mainRendererContext = "main-renderer", t.isObjectEmpty = function (e) {
        let t = !0;
        do {
            if (!e) break;
            if (0 === Object.keys(e).length) break;
            t = !1
        } while (0);
        return t
    }
}, function (e, t) {
    e.exports = require("fs")
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.information = ((...e) => {
    }), t.error = ((...e) => {
    }), t.warning = ((...e) => {
    }), t.critical = ((...e) => {
    }), t.verbose = ((...e) => {
    })
}, function (e, t) {
    e.exports = require("os")
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            c((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(2), o = i(4), s = i(1).default.getLogger("user-info");
    var a;
    !function (e) {
        e.login = "OnLogin", e.logout = "OnLogout", e.authorityChanged = "OnAuthorityChanged"
    }(a = t.UserEventNS || (t.UserEventNS = {}));

    class c extends r.EventEmitter {
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
                    let e = yield o.client.callServerFunction("GetPeerID");
                    return e && "" !== e && (this.mPeerId = e), this.mPeerId || ""
                }
            })
        }

        getSessionId() {
            return n(this, void 0, void 0, function* () {
                if (this.mSessionId) return this.mSessionId;
                {
                    let e = yield o.client.callServerFunction("GetSessionID");
                    return e && "" !== e && (this.mSessionId = e), this.mSessionId || "0"
                }
            })
        }

        getUserinfo() {
            return n(this, void 0, void 0, function* () {
                return yield o.client.callServerFunction("GetAllUserInfo")
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
            let e = -1;
            if (this.mExpireDate && 8 === this.mExpireDate.length) {
                let t = Number(this.mExpireDate.substr(0, 4)), i = Number(this.mExpireDate.substr(4, 2)) - 1,
                    n = Number(this.mExpireDate.substr(6, 2)), r = new Date(t, i, n), o = new Date;
                o = new Date(o.getFullYear(), o.getMonth(), o.getDate()), s.info("exDate", r.toLocaleDateString(), o.toLocaleDateString()), e = Math.abs((r.getTime() - o.getTime()) / 864e5)
            }
            return e
        }

        get offlineAuthority() {
            return this.isLogin
        }

        authorityChanged(e, t) {
            this.emit(a.authorityChanged, e, t)
        }

        attachUserEvents() {
            return n(this, void 0, void 0, function* () {
                let e = yield o.client.callServerFunction("IsLogined");
                s.info("isLogined", e), e && this.onLogin().catch(), o.client.attachServerEvent("onUserInfoChange", this.onUserInfoChange.bind(this)), o.client.attachServerEvent("onLoginStatusChange", this.onLoginStatusChange.bind(this))
            })
        }

        onLogin() {
            return n(this, void 0, void 0, function* () {
                s.info("--\x3eonLogin"), this.mPreUserIsVip = this.mIsVip, this.clear(), this.mIsLogin = !0, yield this.parseUserInfo(), this.emit(a.login), this.authorityChanged(this.isVip), s.info("<--onLogin")
            })
        }

        onLogout() {
            s.info("--\x3eonLogout"), this.mPreUserIsVip = this.mIsVip, this.clear(), this.emit(a.logout), this.authorityChanged(!1), s.info("<--onLogout")
        }

        onUserInfoChange(e, t, i) {
            return n(this, void 0, void 0, function* () {
                s.info("--\x3eonUserInfoChange"), "vipinfo" === t && (s.info("data", i), yield this.parseUserInfo(), this.mIsVip && this.authorityChanged(this.isVip, !0)), s.info("<--onUserInfoChange")
            })
        }

        onLoginStatusChange(e, t, i) {
            s.info("--\x3eonLoginStatusChange", "newStatus", i), "unlogin" === i || "offline" === i ? this.onLogout() : "online" === i && this.onLogin().catch(), s.info("<--onLoginStatusChange")
        }

        clear() {
            this.mUserId = "0", this.mSessionId = void 0, this.mIsVip = !1, this.mIsLogin = !1, this.mVasType = 0, this.mVipLevel = 0, this.mExpireDate = ""
        }

        parseUserInfo() {
            return n(this, void 0, void 0, function* () {
                let e = yield this.getUserinfo();
                if (s.info("userinfo", e), e) if (this.mUserId = e.userID || "0", e.vipList && e.vipList[0]) {
                    if (e.vipList[0].isVip) {
                        let t = Number(e.vipList[0].isVip).valueOf();
                        this.mIsVip = t > 0
                    } else this.mIsVip = !1;
                    if (e.vipList[0].vipLevel && (this.mVipLevel = Number(e.vipList[0].vipLevel).valueOf()), e.vipList[0].vasType && (this.mVasType = Number(e.vipList[0].vasType).valueOf()), e.vipList[0].isYear) {
                        let t = Number(e.vipList[0].isYear).valueOf();
                        this.mIsYear = 1 === t
                    }
                    e.vipList[0].expireDate && (this.mExpireDate = e.vipList[0].expireDate)
                } else this.mIsVip = !1
            })
        }
    }

    t.UserHelper = c, t.default = new c
}, function (e, t) {
    e.exports = require("http")
}, function (e, t) {
    e.exports = require("net")
}, function (e, t, i) {
    "use strict";
    var n = i(0), r = i(49), o = {"Content-Type": "application/x-www-form-urlencoded"};

    function s(e, t) {
        !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
    }

    var a, c = {
        adapter: ("undefined" != typeof XMLHttpRequest ? a = i(50) : "undefined" != typeof process && (a = i(25)), a),
        transformRequest: [function (e, t) {
            return r(t, "Content-Type"), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : n.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
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
    c.headers = {common: {Accept: "application/json, text/plain, */*"}}, n.forEach(["delete", "get", "head"], function (e) {
        c.headers[e] = {}
    }), n.forEach(["post", "put", "patch"], function (e) {
        c.headers[e] = n.merge(o)
    }), e.exports = c
}, function (e, t, i) {
    "use strict";
    var n = i(23);
    e.exports = function (e, t, i, r, o) {
        var s = new Error(e);
        return n(s, t, i, r, o)
    }
}, function (e, t) {
    e.exports = require("https")
}, function (e, t) {
    e.exports = require("url")
}, function (e, t) {
    e.exports = require("util")
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            c((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(7), o = i(3), s = i(17).promisify, a = i(1).default.getLogger("fs-utilities");
    !function (e) {
        function t(e) {
            return n(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e) {
                    const i = s(r.access);
                    try {
                        yield i(e), t = !0
                    } catch (e) {
                        a.info(e)
                    }
                }
                return t
            })
        }

        function c(e) {
            return n(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e) {
                    const i = s(r.mkdir);
                    try {
                        yield i(e), t = !0
                    } catch (e) {
                        a.warn(e)
                    }
                }
                return t
            })
        }

        function l(e) {
            return n(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e) {
                    const i = s(r.rmdir);
                    try {
                        yield i(e), t = !0
                    } catch (e) {
                        a.warn(e)
                    }
                }
                return t
            })
        }

        function u(e) {
            return n(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e) {
                    const i = s(r.unlink);
                    try {
                        yield i(e), t = !0
                    } catch (e) {
                        a.warn(e)
                    }
                }
                return t
            })
        }

        function d(e) {
            return n(this, void 0, void 0, function* () {
                let t = null;
                if (void 0 !== e) {
                    const i = s(r.readdir);
                    try {
                        t = yield i(e)
                    } catch (e) {
                        a.warn(e)
                    }
                }
                return t
            })
        }

        function h(e) {
            return n(this, void 0, void 0, function* () {
                let t = null;
                if (void 0 !== e) {
                    const i = s(r.lstat);
                    try {
                        t = yield i(e)
                    } catch (e) {
                        a.warn(e)
                    }
                }
                return t
            })
        }

        function f(e, t) {
            return n(this, void 0, void 0, function* () {
                let i = !1;
                if (void 0 !== e && void 0 !== t) {
                    let n = o.join(e, t), r = yield h(n);
                    i = null !== r && r.isDirectory() ? yield p(n) : yield u(n)
                }
                return i
            })
        }

        function p(e) {
            return n(this, void 0, void 0, function* () {
                let i = !1;
                if (void 0 !== e) {
                    if (yield t(e)) {
                        i = !0;
                        let t = yield d(e);
                        for (let n = 0; n < t.length; n++) i = (yield f(e, t[n])) && i;
                        (i || 0 === t.length) && (i = (yield l(e)) && i)
                    }
                }
                return i
            })
        }

        function m(e) {
            return n(this, void 0, void 0, function* () {
                let i = !1;
                return a.info("mkdirsAW", e), void 0 !== e && ((yield t(e)) ? i = !0 : o.dirname(e) === e ? i = !1 : (yield m(o.dirname(e))) && (i = yield c(e))), i
            })
        }

        function g(e, i) {
            return n(this, void 0, void 0, function* () {
                let n;
                if (e.toLowerCase() !== i.toLowerCase() && (yield t(e))) {
                    let t = r.createReadStream(e), o = r.createWriteStream(i);
                    n = new Promise(e => {
                        t.pipe(o).on("finish", () => {
                            e(!0)
                        })
                    })
                } else n = new Promise(e => {
                    e(!1)
                });
                return n
            })
        }

        e.readFileAW = function (e) {
            return n(this, void 0, void 0, function* () {
                let t = null;
                if (void 0 !== e) {
                    const i = s(r.readFile);
                    try {
                        t = yield i(e)
                    } catch (e) {
                        a.warn(e)
                    }
                }
                return t
            })
        }, e.writeFileAW = function (e, t) {
            return n(this, void 0, void 0, function* () {
                let i = !1;
                if (void 0 !== e && null !== t) {
                    const n = s(r.writeFile);
                    try {
                        yield n(e, t), i = !0
                    } catch (e) {
                        a.warn(e)
                    }
                }
                return i
            })
        }, e.existsAW = t, e.mkdirAW = c, e.rmdirAW = l, e.unlinkAW = u, e.readdirAW = d, e.lstatAW = h, e.rmdirsAW = p, e.mkdirsAW = m, e.renameAW = function (e, t) {
            return n(this, void 0, void 0, function* () {
                if (void 0 !== e && void 0 !== t) {
                    const i = s(r.rename);
                    try {
                        yield i(e, t)
                    } catch (e) {
                        a.warn(e)
                    }
                }
            })
        }, e.copyFileAW = g, e.copyDirsAW = function e(i, r) {
            return n(this, void 0, void 0, function* () {
                let n = !1, s = yield h(i);
                if (s.isDirectory()) {
                    n = yield m(r);
                    let a = yield d(i);
                    for (let c = 0; c < a.length; c++) {
                        let l = o.join(i, a[c]), u = o.join(r, a[c]);
                        (n = yield t(l)) && (n = (s = yield h(l)).isDirectory() ? yield e(l, u) : yield g(l, u))
                    }
                }
                return n
            })
        }, e.mkdtempAW = function () {
            return n(this, void 0, void 0, function* () {
                let e = !1;
                const t = s(r.mkdtemp), n = (yield Promise.resolve().then(() => i(9))).tmpdir();
                try {
                    e = yield t(`${n}${o.sep}`)
                } catch (e) {
                    a.warn(e)
                }
                return e
            })
        }
    }(t.FileSystemAWNS || (t.FileSystemAWNS = {}))
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(37), r = i(2);
    t.Parser = class extends r.EventEmitter {
        constructor() {
            super(), this.decoder = new n.StringDecoder("utf8"), this.jsonBuffer = ""
        }

        encode(e) {
            return JSON.stringify(e) + "\n"
        }

        feed(e) {
            let t = this.jsonBuffer, i = 0, n = (t += this.decoder.write(e)).indexOf("\n", i);
            for (; n >= 0;) {
                const e = t.slice(i, n), r = JSON.parse(e);
                this.emit("message", r), i = n + 1, n = t.indexOf("\n", i)
            }
            this.jsonBuffer = t.slice(i)
        }
    }
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            c((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(10), o = i(1).default.getLogger("abtest-helper"), s = i(2), a = i(4),
        c = i(5).PluginHelperNS.getHelper(), l = i(45);
    l.default.defaults.adapter = i(25);
    const u = i(3), d = i(30), h = i(31), f = i(75);
    var p;
    !function (e) {
        e.configureReady = "OnConfigureReady"
    }(p = t.AbtestEventNS || (t.AbtestEventNS = {}));

    class m extends s.EventEmitter {
        constructor() {
            super(...arguments), this.mAppVersion = void 0, this.configdata = null, this.resourceFiles = new Map
        }

        getConfig() {
            return n(this, void 0, void 0, function* () {
                let e = yield this.getThunderVersion(), t = c.thunderVersionNumber, i = "xl11_tips_btm_right",
                    n = yield r.default.getPeerId(), s = "", l = r.default.userId,
                    u = yield a.client.callServerFunction("GetTpPeerId");
                if ("0" !== l) {
                    s = `http://advertpay.vip.xunlei.com/xl11/advertisement?obj=1&iver=${t}&over=${e}&userid=${l}&cpeerid=${u}&sessionid=${yield r.default.getSessionId()}&scene=${i}&deviceid=${n}&timestamp=${Date.now()}`
                } else s = `http://advertpay.vip.xunlei.com/xl11/advertisement?obj=1&iver=${t}&over=${e}&cpeerid=${u}&scene=${i}&deviceid=${n}&timestamp=${Date.now()}`;
                if (o.info(`请求B接口 geturl=${s}`), this.configdata = yield this.query(s), this.configdata) {
                    (yield this.downloadResource()) && this.checkConfigOk() && this.emit(p.configureReady, this.getConfigType())
                }
            })
        }

        query(e) {
            return n(this, void 0, void 0, function* () {
                return new Promise(t => {
                    l.default.get(e, {timeout: 1e4}).then(e => n(this, void 0, void 0, function* () {
                        let i = null;
                        if (o.info("response abtest:", e), null !== e && 200 === e.status && null !== e.data && 0 === e.data.result && e.data.data) {
                            let t = e.data.data;
                            i = t.xl11_tips_btm_right, o.info("xl11_tips_btm_right", t.xl11_tips_btm_right)
                        }
                        t(i)
                    })).catch(e => {
                        o.error("err:", e), t(null)
                    })
                })
            })
        }

        reportRead(e) {
            return n(this, void 0, void 0, function* () {
                let t = yield r.default.getPeerId(), i = "", s = r.default.userId,
                    c = yield a.client.callServerFunction("GetTpPeerId");
                if ("0" !== s) {
                    let n = yield r.default.getSessionId();
                    i = `http://advertpay.vip.xunlei.com/xl11/report?obj=1&userid=${s}&cpeerid=${c}&sessionid=${n}&advertisingid=${e}&deviceid=${t}&timestamp=${Date.now()}`
                } else i = `http://advertpay.vip.xunlei.com/xl11/report?obj=1&cpeerid=${c}&advertisingid=${e}&deviceid=${t}&timestamp=${Date.now()}`;
                l.default.get(i, {timeout: 1e4}).then(e => n(this, void 0, void 0, function* () {
                    o.info("reportRead", i, e)
                })).catch(e => {
                    o.error("err:", e)
                })
            })
        }

        getThunderVersion() {
            return n(this, void 0, void 0, function* () {
                if (!this.mAppVersion) {
                    let e = yield a.client.callServerFunction("GetThunderVersion"), t = e.lastIndexOf(".");
                    this.mAppVersion = e.slice(0, t)
                }
                return this.mAppVersion
            })
        }

        downloadResource() {
        }

        getConfigType() {
            if (this.configdata && this.configdata.type && this.configdata.type.text) {
                return this.configdata.type.text.toLocaleLowerCase()
            }
            return "a"
        }

        getConfigData() {
            return this.configdata
        }

        getResourceFile(e) {
            return this.resourceFiles.has(e) ? (o.info("getResourceFile", e, this.resourceFiles.get(e)), this.resourceFiles.get(e)) : (o.info("getResourceFile", e, ""), "")
        }

        checkConfigOk() {
            let e = !1, t = "";
            do {
                if (!this.configdata) {
                    t = "!configData";
                    break
                }
                if ("d" !== this.getConfigType()) {
                    if (!this.configdata.image) {
                        t = "!configData.image";
                        break
                    }
                    if (!this.configdata.image.img) {
                        t = "!configData.image.img";
                        break
                    }
                }
                if (!this.configdata.button) {
                    t = "!configData.button";
                    break
                }
                if (!this.configdata.maintitle) {
                    t = "!configData.maintitle";
                    break
                }
                if (!this.configdata.subtitile) {
                    t = "!configData.subtitile";
                    break
                }
                e = !0
            } while (0);
            return e || o.error("checkConfigOk", t), e
        }
    }

    t.AbtestHelper = m, t.default = new m
}, function (e, t, i) {
    "use strict";
    e.exports = function (e, t) {
        return function () {
            for (var i = new Array(arguments.length), n = 0; n < i.length; n++) i[n] = arguments[n];
            return e.apply(t, i)
        }
    }
}, function (e, t, i) {
    "use strict";
    var n = i(14);
    e.exports = function (e, t, i) {
        var r = i.config.validateStatus;
        i.status && r && !r(i.status) ? t(n("Request failed with status code " + i.status, i.config, null, i.request, i)) : e(i)
    }
}, function (e, t, i) {
    "use strict";
    e.exports = function (e, t, i, n, r) {
        return e.config = t, i && (e.code = i), e.request = n, e.response = r, e
    }
}, function (e, t, i) {
    "use strict";
    var n = i(0);

    function r(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    e.exports = function (e, t, i) {
        if (!t) return e;
        var o;
        if (i) o = i(t); else if (n.isURLSearchParams(t)) o = t.toString(); else {
            var s = [];
            n.forEach(t, function (e, t) {
                null !== e && void 0 !== e && (n.isArray(e) ? t += "[]" : e = [e], n.forEach(e, function (e) {
                    n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)), s.push(r(t) + "=" + r(e))
                }))
            }), o = s.join("&")
        }
        return o && (e += (-1 === e.indexOf("?") ? "?" : "&") + o), e
    }
}, function (e, t, i) {
    "use strict";
    var n = i(0), r = i(22), o = i(24), s = i(11), a = i(15), c = i(26).http, l = i(26).https, u = i(16), d = i(64),
        h = i(65), f = i(14), p = i(23);
    e.exports = function (e) {
        return new Promise(function (t, i) {
            var m, g = e.data, v = e.headers;
            if (v["User-Agent"] || v["user-agent"] || (v["User-Agent"] = "axios/" + h.version), g && !n.isStream(g)) {
                if (Buffer.isBuffer(g)) ; else if (n.isArrayBuffer(g)) g = new Buffer(new Uint8Array(g)); else {
                    if (!n.isString(g)) return i(f("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", e));
                    g = new Buffer(g, "utf-8")
                }
                v["Content-Length"] = g.length
            }
            var y = void 0;
            e.auth && (y = (e.auth.username || "") + ":" + (e.auth.password || ""));
            var C = u.parse(e.url), b = C.protocol || "http:";
            if (!y && C.auth) {
                var _ = C.auth.split(":");
                y = (_[0] || "") + ":" + (_[1] || "")
            }
            y && delete v.Authorization;
            var w = "https:" === b, x = w ? e.httpsAgent : e.httpAgent, k = {
                path: o(C.path, e.params, e.paramsSerializer).replace(/^\?/, ""),
                method: e.method,
                headers: v,
                agent: x,
                auth: y
            };
            e.socketPath ? k.socketPath = e.socketPath : (k.hostname = C.hostname, k.port = C.port);
            var S, P = e.proxy;
            if (!P && !1 !== P) {
                var A = b.slice(0, -1) + "_proxy", E = process.env[A] || process.env[A.toUpperCase()];
                if (E) {
                    var T = u.parse(E);
                    if (P = {host: T.hostname, port: T.port}, T.auth) {
                        var R = T.auth.split(":");
                        P.auth = {username: R[0], password: R[1]}
                    }
                }
            }
            if (P && (k.hostname = P.host, k.host = P.host, k.headers.host = C.hostname + (C.port ? ":" + C.port : ""), k.port = P.port, k.path = b + "//" + C.hostname + (C.port ? ":" + C.port : "") + k.path, P.auth)) {
                var F = new Buffer(P.auth.username + ":" + P.auth.password, "utf8").toString("base64");
                k.headers["Proxy-Authorization"] = "Basic " + F
            }
            e.transport ? S = e.transport : 0 === e.maxRedirects ? S = w ? a : s : (e.maxRedirects && (k.maxRedirects = e.maxRedirects), S = w ? l : c), e.maxContentLength && e.maxContentLength > -1 && (k.maxBodyLength = e.maxContentLength);
            var I = S.request(k, function (n) {
                if (!I.aborted) {
                    clearTimeout(m), m = null;
                    var o = n;
                    switch (n.headers["content-encoding"]) {
                        case"gzip":
                        case"compress":
                        case"deflate":
                            o = o.pipe(d.createUnzip()), delete n.headers["content-encoding"]
                    }
                    var s = n.req || I, a = {
                        status: n.statusCode,
                        statusText: n.statusMessage,
                        headers: n.headers,
                        config: e,
                        request: s
                    };
                    if ("stream" === e.responseType) a.data = o, r(t, i, a); else {
                        var c = [];
                        o.on("data", function (t) {
                            c.push(t), e.maxContentLength > -1 && Buffer.concat(c).length > e.maxContentLength && i(f("maxContentLength size of " + e.maxContentLength + " exceeded", e, null, s))
                        }), o.on("error", function (t) {
                            I.aborted || i(p(t, e, null, s))
                        }), o.on("end", function () {
                            var n = Buffer.concat(c);
                            "arraybuffer" !== e.responseType && (n = n.toString("utf8")), a.data = n, r(t, i, a)
                        })
                    }
                }
            });
            I.on("error", function (t) {
                I.aborted || i(p(t, e, null, I))
            }), e.timeout && !m && (m = setTimeout(function () {
                I.abort(), i(f("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", I))
            }, e.timeout)), e.cancelToken && e.cancelToken.promise.then(function (e) {
                I.aborted || (I.abort(), i(e))
            }), n.isStream(g) ? g.pipe(I) : I.end(g)
        })
    }
}, function (e, t, i) {
    var n = i(16), r = i(11), o = i(15), s = i(55), a = i(56).Writable, c = i(57)("follow-redirects"),
        l = {GET: !0, HEAD: !0, OPTIONS: !0, TRACE: !0}, u = Object.create(null);

    function d(e, t) {
        a.call(this), e.headers = e.headers || {}, this._options = e, this._redirectCount = 0, this._redirects = [], this._requestBodyLength = 0, this._requestBodyBuffers = [], t && this.on("response", t);
        var i = this;
        if (this._onNativeResponse = function (e) {
            i._processResponse(e)
        }, !e.pathname && e.path) {
            var n = e.path.indexOf("?");
            n < 0 ? e.pathname = e.path : (e.pathname = e.path.substring(0, n), e.search = e.path.substring(n))
        }
        this._performRequest()
    }

    function h(e) {
        var t = {maxRedirects: 21, maxBodyLength: 10485760}, i = {};
        return Object.keys(e).forEach(function (r) {
            var o = r + ":", a = i[o] = e[r], l = t[r] = Object.create(a);
            l.request = function (e, r) {
                return "string" == typeof e ? (e = n.parse(e)).maxRedirects = t.maxRedirects : e = Object.assign({
                    protocol: o,
                    maxRedirects: t.maxRedirects,
                    maxBodyLength: t.maxBodyLength
                }, e), e.nativeProtocols = i, s.equal(e.protocol, o, "protocol mismatch"), c("options", e), new d(e, r)
            }, l.get = function (e, t) {
                var i = l.request(e, t);
                return i.end(), i
            }
        }), t
    }

    ["abort", "aborted", "error", "socket", "timeout"].forEach(function (e) {
        u[e] = function (t) {
            this._redirectable.emit(e, t)
        }
    }), d.prototype = Object.create(a.prototype), d.prototype.write = function (e, t, i) {
        if (!("string" == typeof e || "object" == typeof e && "length" in e)) throw new Error("data should be a string, Buffer or Uint8Array");
        "function" == typeof t && (i = t, t = null), 0 !== e.length ? this._requestBodyLength + e.length <= this._options.maxBodyLength ? (this._requestBodyLength += e.length, this._requestBodyBuffers.push({
            data: e,
            encoding: t
        }), this._currentRequest.write(e, t, i)) : (this.emit("error", new Error("Request body larger than maxBodyLength limit")), this.abort()) : i && i()
    }, d.prototype.end = function (e, t, i) {
        "function" == typeof e ? (i = e, e = t = null) : "function" == typeof t && (i = t, t = null);
        var n = this._currentRequest;
        this.write(e || "", t, function () {
            n.end(null, null, i)
        })
    }, d.prototype.setHeader = function (e, t) {
        this._options.headers[e] = t, this._currentRequest.setHeader(e, t)
    }, d.prototype.removeHeader = function (e) {
        delete this._options.headers[e], this._currentRequest.removeHeader(e)
    }, ["abort", "flushHeaders", "getHeader", "setNoDelay", "setSocketKeepAlive", "setTimeout"].forEach(function (e) {
        d.prototype[e] = function (t, i) {
            return this._currentRequest[e](t, i)
        }
    }), ["aborted", "connection", "socket"].forEach(function (e) {
        Object.defineProperty(d.prototype, e, {
            get: function () {
                return this._currentRequest[e]
            }
        })
    }), d.prototype._performRequest = function () {
        var e = this._options.protocol, t = this._options.nativeProtocols[e];
        if (t) {
            if (this._options.agents) {
                var i = e.substr(0, e.length - 1);
                this._options.agent = this._options.agents[i]
            }
            var r = this._currentRequest = t.request(this._options, this._onNativeResponse);
            for (var o in this._currentUrl = n.format(this._options), r._redirectable = this, u) o && r.on(o, u[o]);
            if (this._isRedirect) {
                var s = 0, a = this._requestBodyBuffers;
                !function e() {
                    if (s < a.length) {
                        var t = a[s++];
                        r.write(t.data, t.encoding, e)
                    } else r.end()
                }()
            }
        } else this.emit("error", new Error("Unsupported protocol " + e))
    }, d.prototype._processResponse = function (e) {
        this._options.trackRedirects && this._redirects.push({
            url: this._currentUrl,
            headers: e.headers,
            statusCode: e.statusCode
        });
        var t = e.headers.location;
        if (t && !1 !== this._options.followRedirects && e.statusCode >= 300 && e.statusCode < 400) {
            if (++this._redirectCount > this._options.maxRedirects) return void this.emit("error", new Error("Max redirects exceeded."));
            var i, r = this._options.headers;
            if (307 !== e.statusCode && !(this._options.method in l)) for (i in this._options.method = "GET", this._requestBodyBuffers = [], r) /^content-/i.test(i) && delete r[i];
            if (!this._isRedirect) for (i in r) /^host$/i.test(i) && delete r[i];
            var o = n.resolve(this._currentUrl, t);
            c("redirecting to", o), Object.assign(this._options, n.parse(o)), this._isRedirect = !0, this._performRequest(), e.destroy()
        } else e.responseUrl = this._currentUrl, e.redirects = this._redirects, this.emit("response", e), this._requestBodyBuffers = []
    }, e.exports = h({http: r, https: o}), e.exports.wrap = h
}, function (e, t, i) {
    function n(e) {
        var i;

        function n() {
            if (n.enabled) {
                var e = n, r = +new Date, o = r - (i || r);
                e.diff = o, e.prev = i, e.curr = r, i = r;
                for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                var c = 0;
                s[0] = s[0].replace(/%([a-zA-Z%])/g, function (i, n) {
                    if ("%%" === i) return i;
                    c++;
                    var r = t.formatters[n];
                    if ("function" == typeof r) {
                        var o = s[c];
                        i = r.call(e, o), s.splice(c, 1), c--
                    }
                    return i
                }), t.formatArgs.call(e, s), (n.log || t.log || console.log.bind(console)).apply(e, s)
            }
        }

        return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = function (e) {
            var i, n = 0;
            for (i in e) n = (n << 5) - n + e.charCodeAt(i), n |= 0;
            return t.colors[Math.abs(n) % t.colors.length]
        }(e), n.destroy = r, "function" == typeof t.init && t.init(n), t.instances.push(n), n
    }

    function r() {
        var e = t.instances.indexOf(this);
        return -1 !== e && (t.instances.splice(e, 1), !0)
    }

    (t = e.exports = n.debug = n.default = n).coerce = function (e) {
        return e instanceof Error ? e.stack || e.message : e
    }, t.disable = function () {
        t.enable("")
    }, t.enable = function (e) {
        var i;
        t.save(e), t.names = [], t.skips = [];
        var n = ("string" == typeof e ? e : "").split(/[\s,]+/), r = n.length;
        for (i = 0; i < r; i++) n[i] && ("-" === (e = n[i].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
        for (i = 0; i < t.instances.length; i++) {
            var o = t.instances[i];
            o.enabled = t.enabled(o.namespace)
        }
    }, t.enabled = function (e) {
        if ("*" === e[e.length - 1]) return !0;
        var i, n;
        for (i = 0, n = t.skips.length; i < n; i++) if (t.skips[i].test(e)) return !1;
        for (i = 0, n = t.names.length; i < n; i++) if (t.names[i].test(e)) return !0;
        return !1
    }, t.humanize = i(59), t.instances = [], t.names = [], t.skips = [], t.formatters = {}
}, function (e, t, i) {
    "use strict";
    e.exports = function (e) {
        return !(!e || !e.__CANCEL__)
    }
}, function (e, t, i) {
    "use strict";

    function n(e) {
        this.message = e
    }

    n.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, n.prototype.__CANCEL__ = !0, e.exports = n
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            c((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(73), o = i(7), s = i(18), a = i(1).default.getLogger("tools-utilities");
    !function (e) {
        e.genarateMd5 = function (e) {
            let t = void 0, i = r.createHash("md5");
            return null !== i && (t = i.update(e).digest("hex")), t
        }, e.calculateFileMd5Ex = function (e) {
            return n(this, void 0, void 0, function* () {
                let t;
                if (e && (yield s.FileSystemAWNS.existsAW(e))) {
                    let i = o.createReadStream(e), n = r.createHash("md5");
                    i.on("data", e => {
                        n.update(e)
                    }), t = new Promise(e => {
                        i.on("end", () => {
                            let t = n.digest("hex");
                            t = t.toUpperCase(), e(t)
                        })
                    })
                } else t = new Promise(e => {
                    e(void 0)
                });
                return t
            })
        }, e.encryptBuffer = function (e, t) {
            let i = null;
            try {
                let n = r.createCipheriv("aes-128-ecb", t, ""), o = n.update(e), s = n.final();
                i = Buffer.concat([o, s])
            } catch (e) {
                a.error("encryptBuffer", e)
            }
            return i
        }, e.decryptBuffer = function (e, t) {
            let i = null;
            try {
                let n = r.createDecipheriv("aes-128-ecb", t, ""), o = n.update(e), s = n.final();
                i = Buffer.concat([o, s])
            } catch (e) {
                a.error("decryptBuffer", e)
            }
            return i
        }, e.encryptSha1Buffer = function (e) {
            let t = null;
            try {
                t = r.createHash("sha1").update(e).digest("hex")
            } catch (e) {
                a.error("encryptSha1Buffer", e)
            }
            return t
        }
    }(t.ToolsUtilitiesAWNS || (t.ToolsUtilitiesAWNS = {}))
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            c((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(74), o = i(18), s = i(3), a = i(1).default.getLogger("file-download");
    !function (e) {
        e.downloadFile = function (e, t) {
            return n(this, void 0, void 0, function* () {
                let i = !1;
                a.info("downloadFile", "downloadUrl", e, "savePath", t);
                let c = yield function (e) {
                    return n(this, void 0, void 0, function* () {
                        let t = new Promise(t => {
                            let i = new r.HttpSession;
                            i.url = e, i.get(e => {
                                let i = null;
                                200 === e.statusCode && e.body && (i = e.body), t(i)
                            }, e => {
                                a.info("error", e), t(null)
                            })
                        });
                        return t
                    })
                }(e);
                if (c) {
                    let e = s.dirname(t);
                    (i = yield o.FileSystemAWNS.mkdirsAW(e)) && (i = yield o.FileSystemAWNS.writeFileAW(t, c))
                }
                return i
            })
        }
    }(t.FileDownloadNS || (t.FileDownloadNS = {}))
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            c((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(76), o = i(78), s = i(5).PluginHelperNS.getHelper(), a = i(81), c = i(10), l = i(1), u = i(20),
        d = i(4), h = i(30), f = i(31), p = i(18), m = i(3), g = l.default.getLogger("center-tips");
    var v;
    !function (e) {
        e.PRE_NEW_TASK = "pre-newtask-dlg", e.BT_NEW_TASK = "bt-newtask-dlg", e.NEW_TASK = "newtask-dlg", e.LOGIN = "login-dlg", e.BROWSER_GUIDE = "browser-guide-dlg", e.SIGN = "sign-dlg", e.THUNDER_PAN_IMPORT = "thunder-pan-import", e.VIP_RENEW = "vip-renew", e.LOGIN_NONE_VIP_ACTIVITY = "login-none-vip-activity", e.VIP_PACK_TRY_GUIDE = "vip-pack-try-guide", e.VIP_TRY_GUIDE = "vip-try-guide", e.VIP_HUDDLE_NOVICE_GUIDE = "vip-huddle-novice-guide", e.KUAINIAO_AUTO = "kuainiao-auto"
    }(v || (v = {}));

    class y {
        constructor() {
            this.isWebReady = !1, this.isReported = !1, this.aidfrom = "", this.timeOutHandleRightTips = null, this.rightTips = null, this.rightTipsContent = null
        }

        init() {
            return n(this, void 0, void 0, function* () {
                yield s.loadThunderVersion(), this.attachUserEvents(), c.default.init(), s.nativeCall && (r.CneterTipStatNS.startExcPlugin(), this.attachCallBackEvent()), u.default.addListener(u.AbtestEventNS.configureReady, this.onConfigureReady.bind(this)), setTimeout(() => n(this, void 0, void 0, function* () {
                    u.default.getConfig()
                }), 1e4)
            })
        }

        attachUserEvents() {
            c.default.addListener(c.UserEventNS.login, () => n(this, void 0, void 0, function* () {
                yield this.queryTip()
            })), c.default.addListener(c.UserEventNS.logout, () => n(this, void 0, void 0, function* () {
                this.clearTimeOut(this.timeOutHandleRightTips), this.mResponse = null, this.isWebReady = !1, this.isReported = !1, this.rightTips = null, this.rightTipsContent = null
            }))
        }

        attachCallBackEvent() {
            s.nativeCall.CallNativeFunction("AttachCallbackEvent", "CloseMiniWeb", "OnCloseMiniWeb"), s.nativeCall.CallNativeFunction("AttachCallbackEvent", "OpenWeb", "OnOpenWeb"), s.nativeCall.CallNativeFunction("AttachCallbackEvent", "ShowDlg", "OnShowDlg"), s.nativeCall.AttachNativeEvent("OnCloseMiniWeb", (...e) => n(this, void 0, void 0, function* () {
                g.info("OnCloseMiniWeb args---\x3e", e), e && e.length > 0 && "x_close" === e[0] && r.CneterTipStatNS.closeTip(this.aidfrom), s.nativeCall.CallNativeFunction("CloseTipsWnd"), (yield d.client.checkServerFunction("ClosePopMutual")) && (g.info("ClosePopMutual", v.VIP_RENEW), d.client.callServerFunction("ClosePopMutual", v.VIP_RENEW))
            })), s.nativeCall.AttachNativeEvent("OnOpenWeb", (...e) => {
                g.info("OnOpenWeb args---\x3e", e), e && e.length > 0 && (s.nativeCall.CallNativeFunction("CloseTipsWnd"), s.nativeCall.CallNativeFunction("openNewTab", e[0]))
            }), s.nativeCall.AttachNativeEvent("OnShowDlg", () => {
                g.info("OnShowDlg ---\x3e"), r.CneterTipStatNS.receiveTip(this.aidfrom), this.isWebReady = !0, s.nativeCall.CallNativeFunction("IsMainWndShow", e => {
                    g.info("IsMainWndShow returnValue", e), this.showTip(e).then().catch(), e || this.tryPopRightTip()
                })
            }), s.nativeCall.AttachNativeEvent("OnMainWindowVisibleChange", e => {
                g.info("OnMainWindowVisibleChange returnValue", e), this.showTip(e).then().catch(), this.clearTimeOut(this.timeOutHandleRightTips)
            })
        }

        clearTimeOut(e) {
            e && (clearTimeout(e), e = null)
        }

        queryTip() {
            return n(this, void 0, void 0, function* () {
                let e = new o.UserHttpSession;
                this.mResponse = yield e.queryTip(), g.info("this.mResponse :" + this.mResponse), this.mResponse && 0 === this.mResponse.result && this.createTip()
            })
        }

        reportTip() {
            return n(this, void 0, void 0, function* () {
                yield(new o.UserHttpSession).reportTip(this.mResponse.data.msgid, this.mResponse.data.reach_type)
            })
        }

        getCurrentDateStr() {
            let e = new Date, t = e.getFullYear(), i = e.getMonth(), n = e.getDate();
            return t.toString() + (i < 10 ? "0" + (i + 1) : i + 1) + (n < 10 ? "0" + n : n)
        }

        showTip(e) {
            return n(this, void 0, void 0, function* () {
                g.info("showTip isvisible", e);
                let t = yield a.ConfigHelperNS.getValue("SuspensionBubble", c.default.userId + "_ShowDate", "0"),
                    i = this.getCurrentDateStr();
                if (g.info("bubbleShowDate", t), t !== i && this.isWebReady) {
                    if (!e) return s.nativeCall.CallNativeFunction("ShowOrHideTipsWnd", e, e => {
                        g.info("ShowOrHideTipsWnd ret", e)
                    }), this.isReported || r.CneterTipStatNS.popNoTip(this.aidfrom), void ((yield d.client.checkServerFunction("ClosePopMutual")) && (g.info("ClosePopMutual", v.VIP_RENEW), d.client.callServerFunction("ClosePopMutual", v.VIP_RENEW)));
                    (yield d.client.checkServerFunction("EnqueuePopMutual")) ? (g.info("EnqueuePopMutual", v.VIP_RENEW), d.client.callServerFunction("EnqueuePopMutual", v.VIP_RENEW, () => n(this, void 0, void 0, function* () {
                        g.info("EnqueuePopMutual", "allowShowCallback", v.VIP_RENEW);
                        let e = yield d.client.callServerFunction("IsMainWndShow");
                        if (!this.isWebReady || !e) return g.info("EnqueuePopMutual", "allowShowCallback", "isWebReady", this.isWebReady, "IsMainWndShow", e, v.VIP_RENEW), void d.client.callServerFunction("ClosePopMutual", v.VIP_RENEW);
                        g.info("PopMutualCreated", v.VIP_RENEW), d.client.callServerFunction("PopMutualCreated", v.VIP_RENEW, "auto"), this.popVipWnd(i)
                    }))) : (g.info("SetPopMutualReady Not Exits"), this.popVipWnd(i))
                }
            })
        }

        popVipWnd(e) {
            return n(this, void 0, void 0, function* () {
                this.isWebReady = !1, s.nativeCall.CallNativeFunction("ShowOrHideTipsWnd", !0, e => {
                    g.info("ShowOrHideTipsWnd ret", e)
                }), this.isReported || (this.isReported = !0, this.reportTip().then().catch(), r.CneterTipStatNS.showTip(this.aidfrom), "xufei" === this.mResponse.data.reach_type && (yield a.ConfigHelperNS.setValue("CenterTip", c.default.userId + "_ShowDate", e), g.info("set centertip config", e)))
            })
        }

        parseUrl(e) {
            let t = e.split("?")[1].split("&");
            for (let e = 0; e < t.length; e++) {
                const i = t[e], n = i.split("=")[0], r = i.split("=")[1];
                if (g.info("element", i), "aidfrom" === n) {
                    this.aidfrom = r;
                    break
                }
            }
        }

        createTip() {
            this.isReported = !1, this.isWebReady = !1, g.info("createTip----\x3e");
            let e = this.mResponse.data.tips_content;
            e = (e = e + "&u_t=" + c.default.vasType + "&c_v=" + s.thunderVersionString) + "&p_v=" + s.pluginVersion, this.parseUrl(e), g.info("url", e), r.CneterTipStatNS.loadTip(this.aidfrom), s.nativeCall.CallNativeFunction("CreateTipsWnd", e, !1, 460, 360, null)
        }

        onConfigureReady(e) {
            return n(this, void 0, void 0, function* () {
                g.info("onConfigureReady", e);
                let t = {show: "jingzhun", type: e}, i = {width: 300, height: "d" === e ? 180 : 300};
                this.callNotification("MsgType.PreciseDelivery", t, i, c.default.isLogin)
            })
        }

        callNotification(e, t, i, r) {
            return n(this, void 0, void 0, function* () {
                let n = (yield d.client.checkServerFunction("QueryNotificationPriority")) ? yield d.client.callServerFunction("QueryNotificationPriority", e, 1) : 1,
                    o = `file:///${__dirname}/dialog-renderer/index.html?`;
                if (t) {
                    let e = "";
                    Object.getOwnPropertyNames(t).forEach(i => {
                        e += e ? `&${i}=${t[i]}` : `${i}=${t[i]}`
                    }), o += e
                }
                let s = {
                    width: i.width,
                    height: i.height,
                    priority: n,
                    closeWhenLogout: r,
                    type: "CommonPushTip",
                    url: o
                };
                g.info("callNotification", s), yield d.client.callServerFunction("ShowNotification", JSON.stringify(s))
            })
        }

        tryPopRightTip() {
            return n(this, void 0, void 0, function* () {
                do {
                    let e = new o.UserHttpSession;
                    this.rightTips = yield e.queryRightTips(), g.info("rightTips :", this.rightTips), g.info("getExpireDay", c.default.expireDay);
                    let t = this.getRightTipsContent();
                    if (this.clearTimeOut(this.timeOutHandleRightTips), !t || !this.checkRightTipsOk()) break;
                    t.image = yield this.downloadResource(t.image), this.timeOutHandleRightTips = setTimeout(() => {
                        this.clearTimeOut(this.timeOutHandleRightTips);
                        let e = {
                            show: "xufei",
                            type: t.type,
                            expireDay: c.default.expireDay,
                            message_id: this.rightTips.data.msgid
                        }, i = {width: 300, height: "a" === t.type ? 300 : 100};
                        this.callNotification("MsgType.CenterVip", e, i, !0)
                    }, 6e4 * Number(t.time))
                } while (0)
            })
        }

        getRightTipsContent() {
            if (!this.rightTipsContent && this.rightTips && this.rightTips.data && this.rightTips.data.content) try {
                this.rightTipsContent = JSON.parse(this.rightTips.data.content)
            } catch (e) {
                g.error(e)
            }
            return this.rightTipsContent
        }

        reportCenterRightTips() {
            return n(this, void 0, void 0, function* () {
                g.info("reportCenterRightTips", this.rightTips.data.msgid, this.rightTips.data.reach_type), yield(new o.UserHttpSession).reportTip(this.rightTips.data.msgid, this.rightTips.data.reach_type)
            })
        }

        downloadResource(e) {
        }

        checkRightTipsOk() {
            let e = !1, t = "";
            do {
                if (!this.rightTipsContent) {
                    t = "!rightTipsContent";
                    break
                }
                if (!this.rightTipsContent.image) {
                    t = "!this.rightTipsContent.image";
                    break
                }
                if (!this.rightTipsContent.maintitle) {
                    t = "!this.maintitle";
                    break
                }
                if (!this.rightTipsContent.button) {
                    t = "!this.rightTipsContent.button";
                    break
                }
                e = !0
            } while (0);
            return e || g.error("checkRightTipsOk", t), e
        }

        testPopupXufeiPopup() {
    }

    t.CenterTipManager = y, t.default = new y
}, function (e, t, i) {
    i(34), e.exports = i(35)
}, function (e, t, i) {
    "use strict"
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(4), r = i(5).PluginHelperNS.getHelper();
    n.client.start({
        name: r.pluginName,
        version: r.pluginVersion
    }, "thunder"), i(39).LoggerInitNS.initlog(__dirname, "main");
    const o = i(41), s = i(32);
    o.PluginFunctionNS.registerPluginFunction(), s.default.init().then().catch()
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(12), r = i(2), o = i(8), s = i(19), a = i(6);
    t.Client = class extends r.EventEmitter {
        constructor(e) {
            if (e = e || {}, super(), this.inprocess = !1, this.context = void 0, e.context && (this.context = Object.assign({}, e.context), this.context.productId = e.socketPrex), e.socket) this.socket = e.socket, this.bind(); else if (global.__xdasIPCServer && global.__xdasIPCServer.getProductId().toLowerCase() === e.socketPrex.toLowerCase()) this.inprocess = !0; else {
                let t = a.getSockPath(e.socketPrex);
                this.socket = n.connect(t), this.bind()
            }
        }

        isInprocess() {
            return this.inprocess
        }

        getContext() {
            return this.context
        }

        bind() {
            const e = new s.Parser, t = this.socket;
            t.on("data", t => {
                e.feed(t)
            }), t.on("connect", () => {
                this.emit("connect")
            }), t.on("end", () => {
                o.information("socket is ended"), this.socket = null, this.emit("end")
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
                o.error(e.message)
            } else o.information("This socket has been ended by the other party", this.context && this.context.name)
        }
    }
}, function (e, t) {
    e.exports = require("string_decoder")
}, function (e) {
    e.exports = {
        name: "centertip",
        version: "3.0.3",
        author: "Xunlei",
        license: "",
        description: "",
        main: "3.0.3/index.js",
        clear: !0
    }
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(7), r = i(3), o = i(1);
    !function (e) {
        e.initlog = function (e, t) {
            let i = r.join(e, "log-options.json");
            if (n.existsSync(i)) {
                const e = {label: t, options: i};
                o.default.start(e)
            }
        }
    }(t.LoggerInitNS || (t.LoggerInitNS = {}))
}, function (e, t) {
    e.exports = require("./vendor.js")
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(42), r = i(20), o = i(32);
    !function (e) {
        const t = new class {
            constructor() {
                this.isRegister = !1
            }

            registerPluginFunction() {
                if (!this.isRegister) {
                    this.isRegister = !0;
                    let e = {
                        GetAdvertRightTipsData: this.getAdvertRightTipsData.bind(this),
                        GetAdvertRightTipsType: this.getAdvertRightTipsType.bind(this),
                        GetAdvertRightTipsImage: this.getAdvertRightTipsImage.bind(this),
                        ReportAdvert: this.reportAdvert.bind(this),
                        GetCenterRightTipsContent: this.getCenterRightTipsContent.bind(this),
                        ReportCenterRightTips: this.reportCenterRightTips.bind(this)
                    };
                    n.server.registerFunctions(e)
                }
            }

            getAdvertRightTipsData(e, t, ...i) {
                return r.default.getConfigData()
            }

            getAdvertRightTipsType(e, t, ...i) {
                return r.default.getConfigType()
            }

            getAdvertRightTipsImage(e, t, ...i) {
                return r.default.getResourceFile(i[0])
            }

            reportAdvert(e, t, ...i) {
                return r.default.reportRead(i[0])
            }

            getCenterRightTipsContent(e, t, ...i) {
                return o.default.getRightTipsContent()
            }

            reportCenterRightTips(e, t, ...i) {
                return o.default.reportCenterRightTips()
            }
        };
        e.registerPluginFunction = function () {
            t.registerPluginFunction()
        }
    }(t.PluginFunctionNS || (t.PluginFunctionNS = {}))
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            c((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(2), o = i(43), s = i(6), a = i(8);

    function c(e) {
        a.information("on object freeer"), global.__xdasIPCServerInstance.notifyFreer(e.client, e.callbackId)
    }

    let l = void 0;
    global.__xdasIPCServerInstance || (global.__xdasIPCServerInstance = new class extends r.EventEmitter {
        constructor() {
            super(), this.rid = 0, this.apis = {}, this.eventMap = {}, this.clientAliasMap = {}, this.retCallbackMap = {}, this.contextCallbackMap = {}, this.singleton = !1
        }

        registerFunctions(e) {
            do {
                if (!e) break;
                let t = void 0;
                for (let i in e) if (this.apis.hasOwnProperty(i)) {
                    t = i;
                    break
                }
                if (t) throw new Error(`try to coverd function ${t}`);
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
                        if (e.__context && e.__context.name === s.serverContextName) throw new Error("client context must difference from server");
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
                        this.internalCheckClientFunction(e.dst, e.method).then(i => {
                            let n = this.getNow();
                            this.sendAdapter(t, {
                                success: !0,
                                rid: e.rid,
                                method: e.method,
                                data: i,
                                timestamp: e.timestamp ? e.timestamp.concat(n) : [].concat(n)
                            })
                        });
                        break
                    }
                    let i = this.getNow(), n = {
                        success: !1,
                        rid: e.rid,
                        method: e.method,
                        timestamp: e.timestamp ? e.timestamp.concat(i) : [].concat(i)
                    }, r = e.method;
                    do {
                        if ("register" === e.action) {
                            this.registerAlias(e, t, n), this.sendAdapter(t, n);
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
                            n.success = !0, n.data = !(!this.apis || !this.apis[r]), this.sendAdapter(t, n);
                            break
                        }
                        if ("check_client_exist" === e.action) {
                            n.success = !0, n.data = !1, e.dst && this.clientAliasMap.hasOwnProperty(e.dst) && (n.data = !0), this.sendAdapter(t, n);
                            break
                        }
                        if (!r) break;
                        if (!this.apis || !this.apis[r]) {
                            n.error = `${e.__context} try to call method '${r}' which is undefined`, this.sendAdapter(t, n);
                            break
                        }
                        let i = void 0, o = this.decodeParameter(e.args, t);
                        try {
                            i = this.apis[r].apply(null, [t, e.__context].concat(o))
                        } catch (e) {
                            n.error = e.message, this.sendAdapter(t, n);
                            break
                        }
                        if (i && i.then) {
                            i.then(e => {
                                n.data = e, n.success = !0, this.sendAdapter(t, n)
                            }).catch(e => {
                                n.error = e instanceof Error ? e.message : e, this.sendAdapter(t, n)
                            });
                            break
                        }
                        n.success = !0, n.data = i, this.sendAdapter(t, n)
                    } while (0)
                } while (0)
            }), this.server.on("end", e => {
                this.emit("end", e), this.clearClientInfo(e)
            }), this.server.on("error", (e, t) => {
                a.information("server error", t, t && t.code), t && "EPIPE" === t.code && this.clearClientInfo(e)
            })
        }

        fireClientEvent(e, ...t) {
            this.forwardEvent(e, {name: s.serverContextName}, void 0, ...t)
        }

        callClientFunctionById(e, t, ...i) {
            this.sendAdapter(e, {action: "call_client_by_id", rid: t, args: i})
        }

        callClientFunctionByIdAw(e, t, ...i) {
            return new Promise((n, r) => {
                {
                    let r = this.generateId(), o = (e, t) => {
                        n(e ? [null, e] : [t])
                    }, s = {s_rid: r, action: "call_client_by_id", rid: t, args: i};
                    this.retCallbackMap[r] = Object.assign({callback: o}, s), this.sendAdapter(e, s)
                }
            })
        }

        checkClientFunction(e, t) {
            return "string" == typeof e && (e = this.getFullAlias(e)), this.internalCheckClientFunction(e, t)
        }

        callClientFunctionByName(e, t, ...i) {
            return new Promise((n, r) => {
                do {
                    if (!e) {
                        n([null, null]);
                        break
                    }
                    let r = void 0;
                    if ("string" == typeof e) {
                        if (e = this.getFullAlias(e), !this.clientAliasMap.hasOwnProperty(e)) {
                            n([null, null]);
                            break
                        }
                        r = this.clientAliasMap[e]
                    } else r = e;
                    if (!r) {
                        n([null, null]);
                        break
                    }
                    let o = this.generateId(), a = (e, t, i) => {
                        n(e ? [null, i, e] : [t, i])
                    };
                    if (i) for (let e = 0; e < i.length; e++) i[e] = this.convertFunction2Id(i[e]);
                    let c = {s_rid: o, action: "call_client_api", args: i, src: s.serverContextName, method: t};
                    this.retCallbackMap[o] = Object.assign({callback: a}, c), this.sendAdapter(r, c)
                } while (0)
            })
        }

        isRemoteClientExist(e) {
            let t = !1;
            return this.clientAliasMap.hasOwnProperty(this.getFullAlias(e)) && (t = !0), t
        }

        getRemoteClient(e, t) {
            let i = null;
            do {
                if (!e) break;
                t || (t = this.server.getProductId());
                let n = `${t}-${e}`.toLowerCase();
                i = this.clientAliasMap[n]
            } while (0);
            return i
        }

        internalCheckClientFunction(e, t) {
            return n(this, void 0, void 0, function* () {
                return new Promise((i, n) => {
                    do {
                        if (!e) {
                            i(!1);
                            break
                        }
                        let n = void 0;
                        if ("string" == typeof e) {
                            if (!this.clientAliasMap.hasOwnProperty(e)) {
                                i(!1);
                                break
                            }
                            n = this.clientAliasMap[e]
                        } else n = e;
                        if (!n) {
                            i(!1);
                            break
                        }
                        let r = this.generateId(), o = (e, t) => {
                            i(!e && t)
                        }, s = {s_rid: r, action: "check_client_function", method: t};
                        this.retCallbackMap[r] = Object.assign({callback: o}, s), this.sendAdapter(n, s)
                    } while (0)
                })
            })
        }

        convertFunction2Id(e) {
            let t = e;
            if ("function" == typeof e) {
                let i = this.generateId();
                this.contextCallbackMap[i] = e, t = i
            } else if (e && "object" == typeof e) for (let t in e) {
                let i = e[t];
                if ("function" == typeof i) {
                    let n = this.generateId();
                    this.contextCallbackMap[n] = i, e[t] = n
                } else i && "object" == typeof i && (e[t] = this.convertFunction2Id(i))
            }
            return t
        }

        clearClientInfo(e) {
            for (let t in this.clientAliasMap) this.clientAliasMap[t] === e && delete this.clientAliasMap[t];
            for (let t in this.eventMap) this.detachEvent(t, e);
            for (let t in this.retCallbackMap) {
                let i = this.retCallbackMap[t];
                if (i.dstRemote === e) {
                    let e = {
                        rid: i.rid,
                        method: i.method,
                        error: "client has been ended by the other party",
                        action: "remote_client_callback",
                        success: !1
                    };
                    a.information("client has been ended by other party, but still has return callback", e), this.sendAdapter(i.remote, e), delete this.retCallbackMap[t]
                }
            }
        }

        registerAlias(e, t, i) {
            do {
                if (!e) break;
                if (!e.alias) {
                    i.error = "register alias can not be empty";
                    break
                }
                if (this.clientAliasMap.hasOwnProperty(e.alias)) {
                    if (this.clientAliasMap[e.alias] === t) {
                        i.data = e.alias, i.success = !0;
                        break
                    }
                    i.error = "register failed cause alias is in use";
                    break
                }
                {
                    let n = void 0;
                    for (let e in this.clientAliasMap) if (this.clientAliasMap[e] === t) {
                        n = e;
                        break
                    }
                    if (n) {
                        i.data = n, i.error = `register failed cause already register by another alias ${n}`;
                        break
                    }
                    this.clientAliasMap[e.alias] = t, i.data = e.alias, i.success = !0;
                    break
                }
            } while (0)
        }

        callClientFunction(e, t) {
            do {
                if (!e) break;
                let i = e.dst, n = {rid: e.rid, method: e.method};
                if (!this.clientAliasMap.hasOwnProperty(i)) {
                    let r = `call remote function but dst client is not start or ended ${i}, method ${e.method}`;
                    a.error(r), n.error = r, n.action = "remote_client_callback", n.success = !1, this.sendAdapter(t, n);
                    break
                }
                let r = this.generateId(), o = this.clientAliasMap[i];
                n = Object.assign({
                    s_rid: r,
                    action: "call_client_api",
                    args: e.args,
                    src: e.src
                }, n), this.retCallbackMap[r] = Object.assign({remote: t, dstRemote: o}, n), this.sendAdapter(o, n)
            } while (0)
        }

        fireRetCallback(e, t) {
            do {
                let i = e.s_rid;
                if (void 0 === i || null === i) break;
                let n = this.retCallbackMap[i];
                if (!n) break;
                const r = n.callback;
                if (!r) break;
                e.success ? r(null, this.decodeParameter(e.data, t)) : r(e.error, e.data), delete this.retCallbackMap[i], a.information("free fireRetCallback", i)
            } while (0)
        }

        decodeParameter(e, t) {
            let i = e;
            do {
                if (!e) break;
                if ("object" != typeof e) break;
                let r = e["__nodeipc_callback_id__{A9C9D760-14E8-42CB-A3CB-9C0A0DDFD732}"];
                if (r) {
                    i = ((...e) => n(this, void 0, void 0, function* () {
                        return this.callClientFunctionByIdAw(t, r, ...e)
                    })), global.__xdasObjectLiftMonitor && global.__xdasObjectLiftMonitor.setObjectFreer(i, {
                        client: t,
                        callbackId: r
                    }, c);
                    break
                }
                for (let i in e) {
                    let n = e[i];
                    e[i] = this.decodeParameter(n, t)
                }
            } while (0);
            return i
        }

        notifyFreer(e, t) {
            this.sendAdapter(e, {action: "client_context_freer", rid: t})
        }

        reply2Client(e, t) {
            do {
                let i = e.s_rid;
                if (void 0 === i || null === i) break;
                let n = this.retCallbackMap[i];
                if (!n) break;
                if (e.src === s.serverContextName) {
                    const i = n.callback;
                    if (!i) break;
                    e.success ? i(null, this.decodeParameter(e.data, t), t) : i(e.error, e.data, t)
                } else {
                    let t = n.remote;
                    if (!t) break;
                    this.sendAdapter(t, e)
                }
                delete this.retCallbackMap[i]
            } while (0)
        }

        getNow() {
            return Date.now()
        }

        sendAdapter(e, t) {
            let i = this.getNow();
            t.timestamp = t.timestamp ? t.timestamp.concat(i) : [].concat(i), e.isInprocess() ? (a.information("send to client in process"), e.emit("message", t)) : e.send(t)
        }

        forwardEvent(e, t, i, ...n) {
            do {
                if (!this.eventMap.hasOwnProperty(e)) break;
                let r = this.eventMap[e];
                for (let o of r) this.sendAdapter(o, {
                    action: "fire_event",
                    name: e,
                    args: n,
                    __context: t,
                    timestamp: i
                })
            } while (0)
        }

        attachEvent(e, t) {
            {
                this.eventMap[e] || (this.eventMap[e] = []);
                let i = this.eventMap[e], n = !1;
                for (let r of i) if (r === t) {
                    a.information("server attachEvent attached", e), n = !0;
                    break
                }
                n || (this.eventMap[e].push(t), a.information("server attachEvent ", e))
            }
        }

        detachEvent(e, t) {
            do {
                if (!this.eventMap.hasOwnProperty(e)) break;
                let i = this.eventMap[e];
                for (let n = 0; n < i.length; n++) if (i[n] === t) {
                    this.eventMap[e].splice(n, 1), a.information("server detachEvent current eventMap", this.eventMap);
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
    }), l = global.__xdasIPCServerInstance, t.server = l
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(7), r = i(12), o = i(2), s = i(44), a = i(6);
    t.Server = class extends o.EventEmitter {
        constructor() {
            super(), this.server = r.createServer(e => this.handleConnection(e)), this.productId = ""
        }

        getProductId() {
            return this.productId
        }

        listen(e, t) {
            let i = a.getSockPath(t);
            this.productId = t || a.getDefaultPrex(), n.existsSync(i) && n.unlinkSync(i), this.server.listen({
                path: i,
                readableAll: !0,
                writableAll: !0
            }, e)
        }

        handleConnection(e) {
            const t = new s.Client({socket: e});
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
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(12), r = i(2), o = i(8), s = i(19), a = i(6);
    t.Client = class extends r.EventEmitter {
        constructor(e) {
            if (e = e || {}, super(), this.inprocess = !1, this.context = void 0, e.context && (this.context = Object.assign({}, e.context), this.context.productId = e.socketPrex), e.socket) this.socket = e.socket, this.bind(); else if (global.__xdasIPCServer && global.__xdasIPCServer.getProductId().toLowerCase() === e.socketPrex.toLowerCase()) this.inprocess = !0; else {
                let t = a.getSockPath(e.socketPrex);
                this.socket = n.connect(t), this.bind()
            }
        }

        isInprocess() {
            return this.inprocess
        }

        getContext() {
            return this.context
        }

        bind() {
            const e = new s.Parser, t = this.socket;
            t.on("data", t => {
                e.feed(t)
            }), t.on("connect", () => {
                this.emit("connect")
            }), t.on("end", () => {
                o.information("socket is ended"), this.socket = null, this.emit("end")
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
                o.error(e.message)
            } else o.information("This socket has been ended by the other party", this.context && this.context.name)
        }
    }
}, function (e, t, i) {
    e.exports = i(46)
}, function (e, t, i) {
    "use strict";
    var n = i(0), r = i(21), o = i(48), s = i(13);

    function a(e) {
        var t = new o(e), i = r(o.prototype.request, t);
        return n.extend(i, o.prototype, t), n.extend(i, t), i
    }

    var c = a(s);
    c.Axios = o, c.create = function (e) {
        return a(n.merge(s, e))
    }, c.Cancel = i(29), c.CancelToken = i(71), c.isCancel = i(28), c.all = function (e) {
        return Promise.all(e)
    }, c.spread = i(72), e.exports = c, e.exports.default = c
}, function (e, t) {
    function i(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }

    /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
    e.exports = function (e) {
        return null != e && (i(e) || function (e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && i(e.slice(0, 0))
        }(e) || !!e._isBuffer)
    }
}, function (e, t, i) {
    "use strict";
    var n = i(13), r = i(0), o = i(66), s = i(67);

    function a(e) {
        this.defaults = e, this.interceptors = {request: new o, response: new o}
    }

    a.prototype.request = function (e) {
        "string" == typeof e && (e = r.merge({url: arguments[0]}, arguments[1])), (e = r.merge(n, {method: "get"}, this.defaults, e)).method = e.method.toLowerCase();
        var t = [s, void 0], i = Promise.resolve(e);
        for (this.interceptors.request.forEach(function (e) {
            t.unshift(e.fulfilled, e.rejected)
        }), this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected)
        }); t.length;) i = i.then(t.shift(), t.shift());
        return i
    }, r.forEach(["delete", "get", "head", "options"], function (e) {
        a.prototype[e] = function (t, i) {
            return this.request(r.merge(i || {}, {method: e, url: t}))
        }
    }), r.forEach(["post", "put", "patch"], function (e) {
        a.prototype[e] = function (t, i, n) {
            return this.request(r.merge(n || {}, {method: e, url: t, data: i}))
        }
    }), e.exports = a
}, function (e, t, i) {
    "use strict";
    var n = i(0);
    e.exports = function (e, t) {
        n.forEach(e, function (i, n) {
            n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = i, delete e[n])
        })
    }
}, function (e, t, i) {
    "use strict";
    var n = i(0), r = i(22), o = i(24), s = i(51), a = i(52), c = i(14),
        l = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || i(53);
    e.exports = function (e) {
        return new Promise(function (t, u) {
            var d = e.data, h = e.headers;
            n.isFormData(d) && delete h["Content-Type"];
            var f = new XMLHttpRequest, p = "onreadystatechange", m = !1;
            if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in f || a(e.url) || (f = new window.XDomainRequest, p = "onload", m = !0, f.onprogress = function () {
            }, f.ontimeout = function () {
            }), e.auth) {
                var g = e.auth.username || "", v = e.auth.password || "";
                h.Authorization = "Basic " + l(g + ":" + v)
            }
            if (f.open(e.method.toUpperCase(), o(e.url, e.params, e.paramsSerializer), !0), f.timeout = e.timeout, f[p] = function () {
                if (f && (4 === f.readyState || m) && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:"))) {
                    var i = "getAllResponseHeaders" in f ? s(f.getAllResponseHeaders()) : null, n = {
                        data: e.responseType && "text" !== e.responseType ? f.response : f.responseText,
                        status: 1223 === f.status ? 204 : f.status,
                        statusText: 1223 === f.status ? "No Content" : f.statusText,
                        headers: i,
                        config: e,
                        request: f
                    };
                    r(t, u, n), f = null
                }
            }, f.onerror = function () {
                u(c("Network Error", e, null, f)), f = null
            }, f.ontimeout = function () {
                u(c("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", f)), f = null
            }, n.isStandardBrowserEnv()) {
                var y = i(54),
                    C = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? y.read(e.xsrfCookieName) : void 0;
                C && (h[e.xsrfHeaderName] = C)
            }
            if ("setRequestHeader" in f && n.forEach(h, function (e, t) {
                void 0 === d && "content-type" === t.toLowerCase() ? delete h[t] : f.setRequestHeader(t, e)
            }), e.withCredentials && (f.withCredentials = !0), e.responseType) try {
                f.responseType = e.responseType
            } catch (t) {
                if ("json" !== e.responseType) throw t
            }
            "function" == typeof e.onDownloadProgress && f.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && f.upload && f.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
                f && (f.abort(), u(e), f = null)
            }), void 0 === d && (d = null), f.send(d)
        })
    }
}, function (e, t, i) {
    "use strict";
    var n = i(0),
        r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function (e) {
        var t, i, o, s = {};
        return e ? (n.forEach(e.split("\n"), function (e) {
            if (o = e.indexOf(":"), t = n.trim(e.substr(0, o)).toLowerCase(), i = n.trim(e.substr(o + 1)), t) {
                if (s[t] && r.indexOf(t) >= 0) return;
                s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([i]) : s[t] ? s[t] + ", " + i : i
            }
        }), s) : s
    }
}, function (e, t, i) {
    "use strict";
    var n = i(0);
    e.exports = n.isStandardBrowserEnv() ? function () {
        var e, t = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a");

        function r(e) {
            var n = e;
            return t && (i.setAttribute("href", n), n = i.href), i.setAttribute("href", n), {
                href: i.href,
                protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                host: i.host,
                search: i.search ? i.search.replace(/^\?/, "") : "",
                hash: i.hash ? i.hash.replace(/^#/, "") : "",
                hostname: i.hostname,
                port: i.port,
                pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname
            }
        }

        return e = r(window.location.href), function (t) {
            var i = n.isString(t) ? r(t) : t;
            return i.protocol === e.protocol && i.host === e.host
        }
    }() : function () {
        return !0
    }
}, function (e, t, i) {
    "use strict";
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function r() {
        this.message = "String contains an invalid character"
    }

    r.prototype = new Error, r.prototype.code = 5, r.prototype.name = "InvalidCharacterError", e.exports = function (e) {
        for (var t, i, o = String(e), s = "", a = 0, c = n; o.charAt(0 | a) || (c = "=", a % 1); s += c.charAt(63 & t >> 8 - a % 1 * 8)) {
            if ((i = o.charCodeAt(a += .75)) > 255) throw new r;
            t = t << 8 | i
        }
        return s
    }
}, function (e, t, i) {
    "use strict";
    var n = i(0);
    e.exports = n.isStandardBrowserEnv() ? {
        write: function (e, t, i, r, o, s) {
            var a = [];
            a.push(e + "=" + encodeURIComponent(t)), n.isNumber(i) && a.push("expires=" + new Date(i).toGMTString()), n.isString(r) && a.push("path=" + r), n.isString(o) && a.push("domain=" + o), !0 === s && a.push("secure"), document.cookie = a.join("; ")
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
}, function (e, t) {
    e.exports = require("assert")
}, function (e, t) {
    e.exports = require("stream")
}, function (e, t, i) {
    "undefined" == typeof process || "renderer" === process.type ? e.exports = i(58) : e.exports = i(60)
}, function (e, t, i) {
    function n() {
        var e;
        try {
            e = t.storage.debug
        } catch (e) {
        }
        return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
    }

    (t = e.exports = i(27)).log = function () {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
    }, t.formatArgs = function (e) {
        var i = this.useColors;
        if (e[0] = (i ? "%c" : "") + this.namespace + (i ? " %c" : " ") + e[0] + (i ? "%c " : " ") + "+" + t.humanize(this.diff), !i) return;
        var n = "color: " + this.color;
        e.splice(1, 0, n, "color: inherit");
        var r = 0, o = 0;
        e[0].replace(/%[a-zA-Z%]/g, function (e) {
            "%%" !== e && "%c" === e && (o = ++r)
        }), e.splice(o, 0, n)
    }, t.save = function (e) {
        try {
            null == e ? t.storage.removeItem("debug") : t.storage.debug = e
        } catch (e) {
        }
    }, t.load = n, t.useColors = function () {
        if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
        if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
        try {
            return window.localStorage
        } catch (e) {
        }
    }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function (e) {
        try {
            return JSON.stringify(e)
        } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message
        }
    }, t.enable(n())
}, function (e, t) {
    var i = 1e3, n = 60 * i, r = 60 * n, o = 24 * r, s = 365.25 * o;

    function a(e, t, i) {
        if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + i : Math.ceil(e / t) + " " + i + "s"
    }

    e.exports = function (e, t) {
        t = t || {};
        var c, l = typeof e;
        if ("string" === l && e.length > 0) return function (e) {
            if ((e = String(e)).length > 100) return;
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (!t) return;
            var a = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
                case"years":
                case"year":
                case"yrs":
                case"yr":
                case"y":
                    return a * s;
                case"days":
                case"day":
                case"d":
                    return a * o;
                case"hours":
                case"hour":
                case"hrs":
                case"hr":
                case"h":
                    return a * r;
                case"minutes":
                case"minute":
                case"mins":
                case"min":
                case"m":
                    return a * n;
                case"seconds":
                case"second":
                case"secs":
                case"sec":
                case"s":
                    return a * i;
                case"milliseconds":
                case"millisecond":
                case"msecs":
                case"msec":
                case"ms":
                    return a;
                default:
                    return
            }
        }(e);
        if ("number" === l && !1 === isNaN(e)) return t.long ? a(c = e, o, "day") || a(c, r, "hour") || a(c, n, "minute") || a(c, i, "second") || c + " ms" : function (e) {
            if (e >= o) return Math.round(e / o) + "d";
            if (e >= r) return Math.round(e / r) + "h";
            if (e >= n) return Math.round(e / n) + "m";
            if (e >= i) return Math.round(e / i) + "s";
            return e + "ms"
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
}, function (e, t, i) {
    var n = i(61), r = i(17);
    (t = e.exports = i(27)).init = function (e) {
        e.inspectOpts = {};
        for (var i = Object.keys(t.inspectOpts), n = 0; n < i.length; n++) e.inspectOpts[i[n]] = t.inspectOpts[i[n]]
    }, t.log = function () {
        return process.stderr.write(r.format.apply(r, arguments) + "\n")
    }, t.formatArgs = function (e) {
        var i = this.namespace;
        if (this.useColors) {
            var n = this.color, r = "[3" + (n < 8 ? n : "8;5;" + n), o = "  " + r + ";1m" + i + " [0m";
            e[0] = o + e[0].split("\n").join("\n" + o), e.push(r + "m+" + t.humanize(this.diff) + "[0m")
        } else e[0] = (t.inspectOpts.hideDate ? "" : (new Date).toISOString() + " ") + i + " " + e[0]
    }, t.save = function (e) {
        null == e ? delete process.env.DEBUG : process.env.DEBUG = e
    }, t.load = s, t.useColors = function () {
        return "colors" in t.inspectOpts ? Boolean(t.inspectOpts.colors) : n.isatty(process.stderr.fd)
    }, t.colors = [6, 2, 3, 4, 5, 1];
    try {
        var o = i(62);
        o && o.level >= 2 && (t.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221])
    } catch (e) {
    }

    function s() {
        return process.env.DEBUG
    }

    t.inspectOpts = Object.keys(process.env).filter(function (e) {
        return /^debug_/i.test(e)
    }).reduce(function (e, t) {
        var i = t.substring(6).toLowerCase().replace(/_([a-z])/g, function (e, t) {
            return t.toUpperCase()
        }), n = process.env[t];
        return n = !!/^(yes|on|true|enabled)$/i.test(n) || !/^(no|off|false|disabled)$/i.test(n) && ("null" === n ? null : Number(n)), e[i] = n, e
    }, {}), t.formatters.o = function (e) {
        return this.inspectOpts.colors = this.useColors, r.inspect(e, this.inspectOpts).split("\n").map(function (e) {
            return e.trim()
        }).join(" ")
    }, t.formatters.O = function (e) {
        return this.inspectOpts.colors = this.useColors, r.inspect(e, this.inspectOpts)
    }, t.enable(s())
}, function (e, t) {
    e.exports = require("tty")
}, function (e, t, i) {
    "use strict";
    const n = i(9), r = i(63), o = process.env;
    let s;

    function a(e) {
        return function (e) {
            return 0 !== e && {level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3}
        }(function (e) {
            if (!1 === s) return 0;
            if (r("color=16m") || r("color=full") || r("color=truecolor")) return 3;
            if (r("color=256")) return 2;
            if (e && !e.isTTY && !0 !== s) return 0;
            const t = s ? 1 : 0;
            if ("win32" === process.platform) {
                const e = n.release().split(".");
                return Number(process.versions.node.split(".")[0]) >= 8 && Number(e[0]) >= 10 && Number(e[2]) >= 10586 ? Number(e[2]) >= 14931 ? 3 : 2 : 1
            }
            if ("CI" in o) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(e => e in o) || "codeship" === o.CI_NAME ? 1 : t;
            if ("TEAMCITY_VERSION" in o) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(o.TEAMCITY_VERSION) ? 1 : 0;
            if ("truecolor" === o.COLORTERM) return 3;
            if ("TERM_PROGRAM" in o) {
                const e = parseInt((o.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
                switch (o.TERM_PROGRAM) {
                    case"iTerm.app":
                        return e >= 3 ? 3 : 2;
                    case"Apple_Terminal":
                        return 2
                }
            }
            return /-256(color)?$/i.test(o.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(o.TERM) ? 1 : "COLORTERM" in o ? 1 : (o.TERM, t)
        }(e))
    }

    r("no-color") || r("no-colors") || r("color=false") ? s = !1 : (r("color") || r("colors") || r("color=true") || r("color=always")) && (s = !0), "FORCE_COLOR" in o && (s = 0 === o.FORCE_COLOR.length || 0 !== parseInt(o.FORCE_COLOR, 10)), e.exports = {
        supportsColor: a,
        stdout: a(process.stdout),
        stderr: a(process.stderr)
    }
}, function (e, t, i) {
    "use strict";
    e.exports = ((e, t) => {
        t = t || process.argv;
        const i = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--", n = t.indexOf(i + e), r = t.indexOf("--");
        return -1 !== n && (-1 === r || n < r)
    })
}, function (e, t) {
    e.exports = require("zlib")
}, function (e) {
    e.exports = {
        _args: [["axios@0.18.0", "D:\\code\\plugin\\xl_vip_client_develop\\thunder11_plugin_vip_center"]],
        _development: !0,
        _from: "axios@0.18.0",
        _id: "axios@0.18.0",
        _inBundle: !1,
        _integrity: "sha1-MtU+SFHv3AoRmTts0AB4nXDAUQI=",
        _location: "/axios",
        _phantomChildren: {},
        _requested: {
            type: "version",
            registry: !0,
            raw: "axios@0.18.0",
            name: "axios",
            escapedName: "axios",
            rawSpec: "0.18.0",
            saveSpec: null,
            fetchSpec: "0.18.0"
        },
        _requiredBy: ["/"],
        _resolved: "http://xnpm.repo.xunlei.cn/axios/-/axios-0.18.0.tgz",
        _spec: "0.18.0",
        _where: "D:\\code\\plugin\\xl_vip_client_develop\\thunder11_plugin_vip_center",
        author: {name: "Matt Zabriskie"},
        browser: {"./lib/adapters/http.js": "./lib/adapters/xhr.js"},
        bugs: {url: "https://github.com/axios/axios/issues"},
        bundlesize: [{path: "./dist/axios.min.js", threshold: "5kB"}],
        dependencies: {"follow-redirects": "^1.3.0", "is-buffer": "^1.1.5"},
        description: "Promise based HTTP client for the browser and node.js",
        devDependencies: {
            bundlesize: "^0.5.7",
            coveralls: "^2.11.9",
            "es6-promise": "^4.0.5",
            grunt: "^1.0.1",
            "grunt-banner": "^0.6.0",
            "grunt-cli": "^1.2.0",
            "grunt-contrib-clean": "^1.0.0",
            "grunt-contrib-nodeunit": "^1.0.0",
            "grunt-contrib-watch": "^1.0.0",
            "grunt-eslint": "^19.0.0",
            "grunt-karma": "^2.0.0",
            "grunt-ts": "^6.0.0-beta.3",
            "grunt-webpack": "^1.0.18",
            "istanbul-instrumenter-loader": "^1.0.0",
            "jasmine-core": "^2.4.1",
            karma: "^1.3.0",
            "karma-chrome-launcher": "^2.0.0",
            "karma-coverage": "^1.0.0",
            "karma-firefox-launcher": "^1.0.0",
            "karma-jasmine": "^1.0.2",
            "karma-jasmine-ajax": "^0.1.13",
            "karma-opera-launcher": "^1.0.0",
            "karma-safari-launcher": "^1.0.0",
            "karma-sauce-launcher": "^1.1.0",
            "karma-sinon": "^1.0.5",
            "karma-sourcemap-loader": "^0.3.7",
            "karma-webpack": "^1.7.0",
            "load-grunt-tasks": "^3.5.2",
            minimist: "^1.2.0",
            sinon: "^1.17.4",
            typescript: "^2.0.3",
            "url-search-params": "^0.6.1",
            webpack: "^1.13.1",
            "webpack-dev-server": "^1.14.1"
        },
        homepage: "https://github.com/axios/axios",
        keywords: ["xhr", "http", "ajax", "promise", "node"],
        license: "MIT",
        main: "index.js",
        name: "axios",
        repository: {type: "git", url: "git+https://github.com/axios/axios.git"},
        scripts: {
            build: "NODE_ENV=production grunt build",
            coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
            examples: "node ./examples/server.js",
            postversion: "git push && git push --tags",
            preversion: "npm test",
            start: "node ./sandbox/server.js",
            test: "grunt test && bundlesize",
            version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"
        },
        typings: "./index.d.ts",
        version: "0.18.0"
    }
}, function (e, t, i) {
    "use strict";
    var n = i(0);

    function r() {
        this.handlers = []
    }

    r.prototype.use = function (e, t) {
        return this.handlers.push({fulfilled: e, rejected: t}), this.handlers.length - 1
    }, r.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, r.prototype.forEach = function (e) {
        n.forEach(this.handlers, function (t) {
            null !== t && e(t)
        })
    }, e.exports = r
}, function (e, t, i) {
    "use strict";
    var n = i(0), r = i(68), o = i(28), s = i(13), a = i(69), c = i(70);

    function l(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }

    e.exports = function (e) {
        return l(e), e.baseURL && !a(e.url) && (e.url = c(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = r(e.data, e.headers, e.transformRequest), e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
            delete e.headers[t]
        }), (e.adapter || s.adapter)(e).then(function (t) {
            return l(e), t.data = r(t.data, t.headers, e.transformResponse), t
        }, function (t) {
            return o(t) || (l(e), t && t.response && (t.response.data = r(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        })
    }
}, function (e, t, i) {
    "use strict";
    var n = i(0);
    e.exports = function (e, t, i) {
        return n.forEach(i, function (i) {
            e = i(e, t)
        }), e
    }
}, function (e, t, i) {
    "use strict";
    e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function (e, t, i) {
    "use strict";
    e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function (e, t, i) {
    "use strict";
    var n = i(29);

    function r(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (e) {
            t = e
        });
        var i = this;
        e(function (e) {
            i.reason || (i.reason = new n(e), t(i.reason))
        })
    }

    r.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason
    }, r.source = function () {
        var e;
        return {
            token: new r(function (t) {
                e = t
            }), cancel: e
        }
    }, e.exports = r
}, function (e, t, i) {
    "use strict";
    e.exports = function (e) {
        return function (t) {
            return e.apply(null, t)
        }
    }
}, function (e, t) {
    e.exports = require("crypto")
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(16), r = i(11), o = i(15), s = i(1).default.getLogger("http-session");
    var a;
    !function (e) {
        e.HTTP = "HTTP", e.HTTPS = "HTTPS"
    }(a = t.Protocol || (t.Protocol = {}));
    t.HttpSession = class {
        constructor() {
            this.mRetries = 0, this.mHost = void 0, this.mPort = void 0, this.mPath = void 0, this.mAuth = void 0, this.mAccept = void 0, this.mBody = null, this.mUrl = void 0, this.mProtocol = a.HTTP, this.mTimeout = void 0, this.mCurRetries = 0
        }

        set host(e) {
            this.mHost = e
        }

        get host() {
            return this.mHost
        }

        set port(e) {
            this.mPort = e
        }

        get port() {
            let e = void 0;
            return e = this.mPort ? this.mPort : this.protocol === a.HTTPS ? 443 : 80
        }

        set path(e) {
            this.mPath = e
        }

        get path() {
            return this.mPath
        }

        set url(e) {
            this.mUrl = e
        }

        get protocol() {
            return this.mProtocol
        }

        set protocol(e) {
            this.mProtocol = e
        }

        get url() {
            return this.mUrl
        }

        set auth(e) {
            this.mAuth = e
        }

        get auth() {
            return this.mAuth
        }

        set accept(e) {
            this.mAccept = e
        }

        get accept() {
            return this.mAccept
        }

        set body(e) {
            this.mBody = e
        }

        get body() {
            return this.mBody
        }

        set retries(e) {
            this.mRetries = e
        }

        get retries() {
            return this.mRetries
        }

        set timeout(e) {
            this.mTimeout = e
        }

        get timeout() {
            return this.mTimeout
        }

        post(e, t) {
            do {
                let i = this.body;
                if (!i) {
                    s.info("body is empty"), t(null);
                    break
                }
                let n = this.auth, r = this.accept, o = {
                    hostname: this.host,
                    port: this.port,
                    path: this.path || "/",
                    method: "POST",
                    auth: n || void 0,
                    headers: {"Content-Length": i ? i.length : 0, Accept: r || "*/*"}
                };
                s.verbose("option", o);
                try {
                    this.postImpl(i, o, e, i => {
                        this.mCurRetries < this.retries ? (this.mCurRetries++, s.info("mCurRetries", this.mCurRetries), this.post(e, t)) : t(i)
                    })
                } catch (e) {
                    s.warn("error ", e), t(null)
                }
            } while (0)
        }

        get(e, t) {
            let i = null;
            if (this.url) {
                let e = n.parse(this.url, !0);
                e && "https:" === e.protocol ? this.protocol = a.HTTPS : this.protocol = a.HTTP, i = this.url
            } else {
                let e = this.auth, t = this.accept;
                i = {
                    hostname: this.host,
                    port: this.port,
                    path: this.path || "/",
                    method: "GET",
                    auth: e || void 0,
                    headers: {Accept: t || "*/*"}
                }
            }
            s.verbose("option", i);
            try {
                this.getImpl(i, e, i => {
                    this.mCurRetries < this.retries ? (this.mCurRetries++, s.info("mCurRetries", this.mCurRetries), this.get(e, t)) : t(i)
                })
            } catch (e) {
                s.warn("error ", e), t(null)
            }
        }

        postImpl(e, t, i, n) {
            let c = (this.protocol === a.HTTPS ? o : r).request(t, e => {
                let t = null;
                e.on("data", e => {
                    t = t ? Buffer.concat([t, e]) : e
                }), e.on("end", () => {
                    s.info("statusCode", e.statusCode), s.info("headers", e.headers), i({
                        statusCode: e.statusCode,
                        headers: e.headers,
                        body: t
                    })
                })
            });
            c.on("error", e => {
                n(e)
            }), c.on("timeout", () => {
                c.abort()
            }), this.timeout && c.setTimeout(this.timeout), c.write(e), c.end()
        }

        getImpl(e, t, i) {
            (this.protocol === a.HTTPS ? o : r).get(e, e => {
                let i = null;
                e.on("data", e => {
                    i = i ? Buffer.concat([i, e]) : e
                }), e.on("end", () => {
                    s.info("statusCode", e.statusCode), s.info("headers", e.headers), t({
                        statusCode: e.statusCode,
                        headers: e.headers,
                        body: i
                    })
                })
            }).on("error", e => {
                i(e)
            })
        }
    }
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            c((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(7), o = i(3), s = i(17).promisify;
    !function (e) {
        function t(e) {
            return n(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e) {
                    const i = s(r.access);
                    try {
                        yield i(e), t = !0
                    } catch (e) {
                    }
                }
                return t
            })
        }

        function a(e) {
            return n(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e) {
                    const i = s(r.mkdir);
                    try {
                        yield i(e), t = !0
                    } catch (e) {
                    }
                }
                return t
            })
        }

        function c(e) {
            return n(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e) {
                    const i = s(r.rmdir);
                    try {
                        yield i(e), t = !0
                    } catch (e) {
                    }
                }
                return t
            })
        }

        function l(e) {
            return n(this, void 0, void 0, function* () {
                let t = !1;
                if (void 0 !== e) {
                    const i = s(r.unlink);
                    try {
                        yield i(e), t = !0
                    } catch (e) {
                    }
                }
                return t
            })
        }

        function u(e) {
            return n(this, void 0, void 0, function* () {
                let t = null;
                if (void 0 !== e) {
                    const i = s(r.readdir);
                    try {
                        t = yield i(e)
                    } catch (e) {
                    }
                }
                return t
            })
        }

        function d(e) {
            return n(this, void 0, void 0, function* () {
                let t = null;
                if (void 0 !== e) {
                    const i = s(r.lstat);
                    try {
                        t = yield i(e)
                    } catch (e) {
                    }
                }
                return t
            })
        }

        function h(e, t) {
            return n(this, void 0, void 0, function* () {
                let i = !1;
                if (void 0 !== e && void 0 !== t) {
                    let n = o.join(e, t), r = yield d(n);
                    i = null !== r && r.isDirectory() ? yield f(n) : yield l(n)
                }
                return i
            })
        }

        function f(e) {
            return n(this, void 0, void 0, function* () {
                let i = !1;
                if (void 0 !== e) {
                    if (yield t(e)) {
                        i = !0;
                        let t = yield u(e);
                        for (let n = 0; n < t.length; n++) i = (yield h(e, t[n])) && i;
                        (i || 0 === t.length) && (i = (yield c(e)) && i)
                    }
                }
                return i
            })
        }

        function p(e) {
            return n(this, void 0, void 0, function* () {
                let i = !1;
                return void 0 !== e && ((yield t(e)) ? i = !0 : o.dirname(e) === e ? i = !1 : (yield p(o.dirname(e))) && (i = yield a(e))), i
            })
        }

        function m(e, i) {
            return n(this, void 0, void 0, function* () {
                let n;
                if (e.toLowerCase() !== i.toLowerCase() && (yield t(e))) {
                    let t = r.createReadStream(e), o = r.createWriteStream(i);
                    n = new Promise(e => {
                        t.pipe(o).on("finish", () => {
                            e(!0)
                        })
                    })
                } else n = new Promise(e => {
                    e(!1)
                });
                return n
            })
        }

        e.readFileAW = function (e) {
            return n(this, void 0, void 0, function* () {
                let t = null;
                if (void 0 !== e) {
                    const i = s(r.readFile);
                    try {
                        t = yield i(e)
                    } catch (e) {
                    }
                }
                return t
            })
        }, e.writeFileAW = function (e, t) {
            return n(this, void 0, void 0, function* () {
                let i = !1;
                if (void 0 !== e && null !== t) {
                    const n = s(r.writeFile);
                    try {
                        yield n(e, t), i = !0
                    } catch (e) {
                    }
                }
                return i
            })
        }, e.existsAW = t, e.mkdirAW = a, e.rmdirAW = c, e.unlinkAW = l, e.readdirAW = u, e.lstatAW = d, e.rmdirsAW = f, e.mkdirsAW = p, e.renameAW = function (e, t) {
            return n(this, void 0, void 0, function* () {
                if (void 0 !== e && void 0 !== t) {
                    const i = s(r.rename);
                    try {
                        yield i(e, t)
                    } catch (e) {
                    }
                }
            })
        }, e.copyFileAW = m, e.copyDirsAW = function e(i, r) {
            return n(this, void 0, void 0, function* () {
                let n = !1, s = yield d(i);
                if (s.isDirectory()) {
                    n = yield p(r);
                    let a = yield u(i);
                    for (let c = 0; c < a.length; c++) {
                        let l = o.join(i, a[c]), u = o.join(r, a[c]);
                        (n = yield t(l)) && (n = (s = yield d(l)).isDirectory() ? yield e(l, u) : yield m(l, u))
                    }
                }
                return n
            })
        }, e.mkdtempAW = function () {
            return n(this, void 0, void 0, function* () {
                let e = !1;
                const t = s(r.mkdtemp), n = (yield Promise.resolve().then(() => i(9))).tmpdir();
                try {
                    e = yield t(`${n}${o.sep}`)
                } catch (e) {
                }
                return e
            })
        }
    }(t.FileSystemAWNS || (t.FileSystemAWNS = {}))
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            c((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(77), o = i(10), s = i(5).PluginHelperNS.getHelper();
    !function (e) {
        let t = s.pluginVersion, i = 0, a = 0;

        function c() {
            let e = new Map, t = l();
            return e.set("userid", o.default.userId), e.set("usertype", t), e.set("plugin_version", s.pluginVersion), e.set("client_version", s.thunderVersionString), e
        }

        function l() {
            let e = 0;
            return o.default.isSuperVip ? e = 5 : o.default.isPlatinumVip ? e = 3 : o.default.isVip && (e = 2), e
        }

        function u() {
            return o.default.vipLevel
        }

        e.startExcPlugin = function () {
            let e = new Map, t = function () {
                let e = 0;
                return o.default.isLogin && (e = 1), e
            }(), i = function () {
                let e = 0;
                return o.default.isVip && (e = 1), e
            }();
            e.set("is_login", t), e.set("is_vip", i), e.set("message_id", "");
            let n = {attribute1: "plug_startup_succ", extData: e};
            r.StatUtilitiesNS.trackEvent("xlx_vip_event", n)
        }, e.loadTip = function (e) {
            let n = new Map, o = l(), s = u();
            n.set("vip_type", o), n.set("message_id", e), n.set("viplevel", s), n.set("plugin_name", "CenterTip"), n.set("plugin_version", t), i = (new Date).getTime();
            let a = {attribute1: "center_tips_pop_load_try", extData: n};
            r.StatUtilitiesNS.trackEvent("xlx_vip_event", a)
        }, e.showTip = function (e) {
            let n = new Map, o = l(), s = u();
            n.set("vip_type", o), n.set("message_id", e), n.set("viplevel", s), n.set("plugin_name", "CenterTip"), n.set("plugin_version", t), a = (new Date).getTime(), n.set("page_load_time", (a - i) / 1e3);
            let c = {attribute1: "center_tips_pop_load_succ", extData: n};
            r.StatUtilitiesNS.trackEvent("xlx_vip_event", c)
        }, e.closeTip = function (e) {
            let i = new Map, n = l(), o = u();
            i.set("vip_type", n), i.set("message_id", e), i.set("viplevel", o), i.set("plugin_name", "CenterTip"), i.set("plugin_version", t), i.set("button", "x"), i.set("time", ((new Date).getTime() - a) / 1e3);
            let s = {attribute1: "center_tips_pop_click", extData: i};
            r.StatUtilitiesNS.trackEvent("xlx_vip_event", s)
        }, e.receiveTip = function (e) {
            let i = new Map, n = l(), o = u();
            i.set("vip_type", n), i.set("message_id", e), i.set("viplevel", o), i.set("plugin_name", "CenterTip"), i.set("plugin_version", t);
            let s = {attribute1: "center_tips_receive_notice", extData: i};
            r.StatUtilitiesNS.trackEvent("xlx_vip_event", s)
        }, e.popNoTip = function (e) {
            let i = new Map, n = l(), o = u();
            i.set("vip_type", n), i.set("message_id", e), i.set("viplevel", o), i.set("plugin_name", "CenterTip"), i.set("plugin_version", t), i.set("reason", "minimize");
            let s = {attribute1: "center_tips_pop_noshow", extData: i};
            r.StatUtilitiesNS.trackEvent("xlx_vip_event", s)
        }, e.xlxBottomRightPushTipsShow = function (e, t, i) {
            return n(this, void 0, void 0, function* () {
                let n = c();
                n.set("pageid", "vip_xlx_tips_btm_right"), n.set("referfrom", "v_pc_xlx_push_tips_btm_right"), n.set("message_id", e), n.set("aidfrom", t), n.set("url", i);
                let o = {attribute1: "xlx_bottom_right_push_tips_show", extData: n};
                yield r.StatUtilitiesNS.trackEvent("xlx_vip_event", o)
            })
        }, e.xlxBottomRightPushTipsClick = function (e, t, i, o) {
            return n(this, void 0, void 0, function* () {
                let n = c();
                n.set("pageid", "vip_xlx_tips_btm_right"), n.set("referfrom", "v_pc_xlx_push_tips_btm_right"), n.set("message_id", e), n.set("aidfrom", t), n.set("url", i), n.set("clickid", o);
                let s = {attribute1: "xlx_bottom_right_push_tips_click", extData: n};
                yield r.StatUtilitiesNS.trackEvent("xlx_vip_event", s)
            })
        }, e.xlxBottomRightActNotiShow = function (e, t) {
            return n(this, void 0, void 0, function* () {
                let i = c();
                i.set("pageid", "vip_xlx_noti_btm_right"), i.set("referfrom", "v_pc_xlx_act_noti_btm_right"), i.set("aidfrom", e), i.set("url", t);
                let n = {attribute1: "xlx_bottom_right_act_noti_show", extData: i};
                yield r.StatUtilitiesNS.trackEvent("xlx_vip_event", n)
            })
        }, e.xlxBottomRightActNotiClick = function (e, t, i) {
            return n(this, void 0, void 0, function* () {
                let n = c();
                n.set("pageid", "vip_xlx_noti_btm_right"), n.set("referfrom", "v_pc_xlx_act_noti_btm_right"), n.set("aidfrom", e), n.set("url", t), n.set("clickid", i);
                let o = {attribute1: "xlx_bottom_right_act_noti_click", extData: n};
                yield r.StatUtilitiesNS.trackEvent("xlx_vip_event", o)
            })
        }
    }(t.CneterTipStatNS || (t.CneterTipStatNS = {}))
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            c((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(4), o = i(1).default.getLogger("stat-utilities");
    !function (e) {
        e.trackEvent = function (e, t) {
            return n(this, void 0, void 0, function* () {
                let i = (t = t || {}).attribute1 || "", n = t.attribute2 || "", s = function (e) {
                    let t = "";
                    return e.forEach((e, i) => {
                        "" !== t && (t += ","), t = t + i + "=" + e
                    }), t
                }(t.extData || new Map);
                o.info("key", e), o.info("attribute1", i), o.info("attribute2", n), o.info("extData", s), s = encodeURIComponent(s), o.info("encode extData", s), yield r.client.callServerFunction("TrackEvent", e, i, n, 0, 0, 0, 0, s)
            })
        }
    }(t.StatUtilitiesNS || (t.StatUtilitiesNS = {}))
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            c((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(79), o = i(80), s = i(5).PluginHelperNS.getHelper(), a = i(10);
    t.UserHttpSession = class extends r.HttpSession {
        queryTip(e) {
            return n(this, void 0, void 0, function* () {
                let t = a.default.userId, i = yield a.default.getSessionId();
                this.host = "touch.vip.xunlei.com", this.retries = 2, this.timeout = 2e4;
                let n = s.thunderVersionString, r = s.thunderVersionNumber, c = yield a.default.getPeerId();
                return this.path = "/xl11/touch?iver=" + r + "&vfilter=" + n + "&deviceid=" + c, e && (this.path += "&scene=" + e), this.cookie = "userid=" + t + ";sessionid=" + i + ";", new Promise(e => {
                    this.get(i => {
                        let n = null;
                        200 === i.statusCode && i.body && (n = o.UserHttpPackageNS.praseQueryBuffer(t, i.body)), e(n)
                    }, t => {
                        t.message = "", e(null)
                    })
                })
            })
        }

        reportTip(e, t) {
            return n(this, void 0, void 0, function* () {
                let i = a.default.userId, n = yield a.default.getSessionId();
                return this.host = "touch.vip.xunlei.com", this.retries = 2, this.timeout = 2e4, this.path = "/xl11/setreaded?msgid=" + e + "&reachtype=" + t, this.cookie = "userid=" + i + ";sessionid=" + n + ";", new Promise(e => {
                    this.get(t => {
                        let n = null;
                        200 === t.statusCode && t.body && (n = o.UserHttpPackageNS.praseReportBuffer(i, t.body)), e(n)
                    }, t => {
                        t.message = "", e(null)
                    })
                })
            })
        }

        queryRightTips() {
            return n(this, void 0, void 0, function* () {
                return this.queryTip("xl11_xf_righttips")
            })
        }
    }
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    const n = i(11);
    t.HttpSession = class {
        constructor() {
            this.mRetries = 0, this.mHost = void 0, this.mPort = 80, this.mPath = void 0, this.mAuth = void 0, this.mAccept = void 0, this.mBody = null, this.mUrl = void 0, this.mTimeout = void 0, this.mCurRetries = 0, this.mCookie = void 0
        }

        get cookie() {
            return this.mCookie
        }

        set cookie(e) {
            this.mCookie = e
        }

        set host(e) {
            this.mHost = e
        }

        get host() {
            return this.mHost
        }

        set port(e) {
            this.mPort = e
        }

        get port() {
            return this.mPort
        }

        set path(e) {
            this.mPath = e
        }

        get path() {
            return this.mPath
        }

        set url(e) {
            this.mUrl = e
        }

        get url() {
            return this.mUrl
        }

        set auth(e) {
            this.mAuth = e
        }

        get auth() {
            return this.mAuth
        }

        set accept(e) {
            this.mAccept = e
        }

        get accept() {
            return this.mAccept
        }

        set body(e) {
            this.mBody = e
        }

        get body() {
            return this.mBody
        }

        set retries(e) {
            this.mRetries = e
        }

        get retries() {
            return this.mRetries
        }

        set timeout(e) {
            this.mTimeout = e
        }

        get timeout() {
            return this.mTimeout
        }

        post(e, t) {
            let i = this.body;
            if (!i) return void t(null);
            let n = this.auth, r = this.accept, o = {
                hostname: this.host,
                port: this.port,
                path: this.path || "/",
                method: "POST",
                auth: n || void 0,
                headers: {"Content-Length": i ? i.length : 0, Accept: r || "*/*"}
            };
            this.postImpl(i, o, e, i => {
                this.mCurRetries < this.retries ? (this.mCurRetries++, this.post(e, t)) : t(i)
            })
        }

        get(e, t) {
            let i = {
                hostname: this.host,
                port: this.port,
                path: this.path || "/",
                method: "GET",
                headers: {Cookie: this.cookie}
            };
            this.getImpl(i, e, i => {
                this.mCurRetries < this.retries ? (this.mCurRetries++, this.get(e, t)) : t(i)
            })
        }

        postImpl(e, t, i, r) {
            let o = n.request(t, e => {
                let t = null;
                e.on("data", e => {
                    t = t ? Buffer.concat([t, e]) : e
                }), e.on("end", () => {
                    i({statusCode: e.statusCode, headers: e.headers, body: t})
                })
            });
            o.on("error", e => {
                r(e)
            }), o.on("timeout", () => {
                o.abort()
            }), this.timeout && o.setTimeout(this.timeout), o.write(e), o.end()
        }

        getImpl(e, t, i) {
            n.get(e, e => {
                let i = null;
                e.on("data", e => {
                    i = i ? Buffer.concat([i, e]) : e
                }), e.on("end", () => {
                    t({statusCode: e.statusCode, headers: e.headers, body: i})
                })
            }).on("error", e => {
                i(e)
            })
        }
    }
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        e.praseQueryBuffer = function (e, t) {
            if (!t) return null;
            let i = t.toString(), n = JSON.parse(i);
            if (!n) return null;
            let r = n.data ? n.data.touches : null, o = null;
            if (r && r.length > 0) {
                let e = r[0];
                o = {result: n.result, msg: n.msg, data: e}
            }
            return o
        }, e.praseReportBuffer = function (e, t) {
            if (!t) return null;
            let i = t.toString(), n = JSON.parse(i);
            return {result: n.result, msg: n.msg}
        }
    }(t.UserHttpPackageNS || (t.UserHttpPackageNS = {}))
}, function (e, t, i) {
    "use strict";
    var n = this && this.__awaiter || function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, o) {
            function s(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                e.done ? r(e.value) : new i(function (t) {
                    t(e.value)
                }).then(s, a)
            }

            c((n = n.apply(e, t || [])).next())
        })
    };
    Object.defineProperty(t, "__esModule", {value: !0});
    const r = i(5).PluginHelperNS.getHelper();
    !function (e) {
        e.getValue = function (e, t, i) {
            return n(this, void 0, void 0, function* () {
                return new Promise(n => {
                    r.nativeCall.CallNativeFunction("GetConfigValue", e, t, i, (e, t) => {
                        n(0 === e ? t : i)
                    })
                })
            })
        }, e.setValue = function (e, t, i) {
            return n(this, void 0, void 0, function* () {
                return new Promise((n, o) => {
                    r.nativeCall.CallNativeFunction("SetConfigValue", e, t, i, e => {
                        0 === e ? n() : o(new Error("SetConfigValue error"))
                    })
                })
            })
        }
    }(t.ConfigHelperNS || (t.ConfigHelperNS = {}))
}]);
//# sourceMappingURL=index.js.map