/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			var _m = moreModules[moduleId];
/******/
/******/ 			// Check if module is deduplicated
/******/ 			switch(typeof _m) {
/******/ 			case "object":
/******/ 				// Module can be created from a template
/******/ 				modules[moduleId] = (function(_m) {
/******/ 					var args = _m.slice(1), templateId = _m[0];
/******/ 					return function (a,b,c) {
/******/ 						modules[templateId].apply(this, [a,b,c].concat(args));
/******/ 					};
/******/ 				}(_m));
/******/ 				break;
/******/ 			case "function":
/******/ 				// Normal module
/******/ 				modules[moduleId] = _m;
/******/ 				break;
/******/ 			default:
/******/ 				// Module is a copy of another module
/******/ 				modules[moduleId] = modules[_m];
/******/ 				break;
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + ({"1":"index"}[chunkId]||chunkId) + ".min.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(16);
	__webpack_require__(17);
	module.exports = __webpack_require__(25);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
	*/
	(function (e, undefined) {
	  var t,
	      n,
	      r = typeof undefined === "undefined" ? "undefined" : _typeof(undefined),
	      i = e.location,
	      o = e.document,
	      s = o.documentElement,
	      a = e.jQuery,
	      u = e.$,
	      l = {},
	      c = [],
	      p = "2.0.3",
	      f = c.concat,
	      h = c.push,
	      d = c.slice,
	      g = c.indexOf,
	      m = l.toString,
	      y = l.hasOwnProperty,
	      v = p.trim,
	      x = function x(e, n) {
	    return new x.fn.init(e, n, t);
	  },
	      b = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	      w = /\S+/g,
	      T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	      C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	      k = /^-ms-/,
	      N = /-([\da-z])/gi,
	      E = function E(e, t) {
	    return t.toUpperCase();
	  },
	      S = function S() {
	    o.removeEventListener("DOMContentLoaded", S, !1), e.removeEventListener("load", S, !1), x.ready();
	  };x.fn = x.prototype = { jquery: p, constructor: x, init: function init(e, t, n) {
	      var r, i;if (!e) return this;if ("string" == typeof e) {
	        if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : T.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (r[1]) {
	          if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : o, !0)), C.test(r[1]) && x.isPlainObject(t)) for (r in t) {
	            x.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
	          }return this;
	        }return i = o.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = o, this.selector = e, this;
	      }return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? n.ready(e) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this));
	    }, selector: "", length: 0, toArray: function toArray() {
	      return d.call(this);
	    }, get: function get(e) {
	      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
	    }, pushStack: function pushStack(e) {
	      var t = x.merge(this.constructor(), e);return t.prevObject = this, t.context = this.context, t;
	    }, each: function each(e, t) {
	      return x.each(this, e, t);
	    }, ready: function ready(e) {
	      return x.ready.promise().done(e), this;
	    }, slice: function slice() {
	      return this.pushStack(d.apply(this, arguments));
	    }, first: function first() {
	      return this.eq(0);
	    }, last: function last() {
	      return this.eq(-1);
	    }, eq: function eq(e) {
	      var t = this.length,
	          n = +e + (0 > e ? t : 0);return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
	    }, map: function map(e) {
	      return this.pushStack(x.map(this, function (t, n) {
	        return e.call(t, n, t);
	      }));
	    }, end: function end() {
	      return this.prevObject || this.constructor(null);
	    }, push: h, sort: [].sort, splice: [].splice }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
	    var e,
	        t,
	        n,
	        r,
	        i,
	        o,
	        s = arguments[0] || {},
	        a = 1,
	        u = arguments.length,
	        l = !1;for ("boolean" == typeof s && (l = s, s = arguments[1] || {}, a = 2), "object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) || x.isFunction(s) || (s = {}), u === a && (s = this, --a); u > a; a++) {
	      if (null != (e = arguments[a])) for (t in e) {
	        n = s[t], r = e[t], s !== r && (l && r && (x.isPlainObject(r) || (i = x.isArray(r))) ? (i ? (i = !1, o = n && x.isArray(n) ? n : []) : o = n && x.isPlainObject(n) ? n : {}, s[t] = x.extend(l, o, r)) : r !== undefined && (s[t] = r));
	      }
	    }return s;
	  }, x.extend({ expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""), noConflict: function noConflict(t) {
	      return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = a), x;
	    }, isReady: !1, readyWait: 1, holdReady: function holdReady(e) {
	      e ? x.readyWait++ : x.ready(!0);
	    }, ready: function ready(e) {
	      (e === !0 ? --x.readyWait : x.isReady) || (x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(o, [x]), x.fn.trigger && x(o).trigger("ready").off("ready")));
	    }, isFunction: function isFunction(e) {
	      return "function" === x.type(e);
	    }, isArray: Array.isArray, isWindow: function isWindow(e) {
	      return null != e && e === e.window;
	    }, isNumeric: function isNumeric(e) {
	      return !isNaN(parseFloat(e)) && isFinite(e);
	    }, type: function type(e) {
	      return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? l[m.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
	    }, isPlainObject: function isPlainObject(e) {
	      if ("object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;try {
	        if (e.constructor && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1;
	      } catch (t) {
	        return !1;
	      }return !0;
	    }, isEmptyObject: function isEmptyObject(e) {
	      var t;for (t in e) {
	        return !1;
	      }return !0;
	    }, error: function error(e) {
	      throw Error(e);
	    }, parseHTML: function parseHTML(e, t, n) {
	      if (!e || "string" != typeof e) return null;"boolean" == typeof t && (n = t, t = !1), t = t || o;var r = C.exec(e),
	          i = !n && [];return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes));
	    }, parseJSON: JSON.parse, parseXML: function parseXML(e) {
	      var t, n;if (!e || "string" != typeof e) return null;try {
	        n = new DOMParser(), t = n.parseFromString(e, "text/xml");
	      } catch (r) {
	        t = undefined;
	      }return (!t || t.getElementsByTagName("parsererror").length) && x.error("Invalid XML: " + e), t;
	    }, noop: function noop() {}, globalEval: function globalEval(e) {
	      var t,
	          n = eval;e = x.trim(e), e && (1 === e.indexOf("use strict") ? (t = o.createElement("script"), t.text = e, o.head.appendChild(t).parentNode.removeChild(t)) : n(e));
	    }, camelCase: function camelCase(e) {
	      return e.replace(k, "ms-").replace(N, E);
	    }, nodeName: function nodeName(e, t) {
	      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
	    }, each: function each(e, t, n) {
	      var r,
	          i = 0,
	          o = e.length,
	          s = j(e);if (n) {
	        if (s) {
	          for (; o > i; i++) {
	            if (r = t.apply(e[i], n), r === !1) break;
	          }
	        } else for (i in e) {
	          if (r = t.apply(e[i], n), r === !1) break;
	        }
	      } else if (s) {
	        for (; o > i; i++) {
	          if (r = t.call(e[i], i, e[i]), r === !1) break;
	        }
	      } else for (i in e) {
	        if (r = t.call(e[i], i, e[i]), r === !1) break;
	      }return e;
	    }, trim: function trim(e) {
	      return null == e ? "" : v.call(e);
	    }, makeArray: function makeArray(e, t) {
	      var n = t || [];return null != e && (j(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n;
	    }, inArray: function inArray(e, t, n) {
	      return null == t ? -1 : g.call(t, e, n);
	    }, merge: function merge(e, t) {
	      var n = t.length,
	          r = e.length,
	          i = 0;if ("number" == typeof n) for (; n > i; i++) {
	        e[r++] = t[i];
	      } else while (t[i] !== undefined) {
	        e[r++] = t[i++];
	      }return e.length = r, e;
	    }, grep: function grep(e, t, n) {
	      var r,
	          i = [],
	          o = 0,
	          s = e.length;for (n = !!n; s > o; o++) {
	        r = !!t(e[o], o), n !== r && i.push(e[o]);
	      }return i;
	    }, map: function map(e, t, n) {
	      var r,
	          i = 0,
	          o = e.length,
	          s = j(e),
	          a = [];if (s) for (; o > i; i++) {
	        r = t(e[i], i, n), null != r && (a[a.length] = r);
	      } else for (i in e) {
	        r = t(e[i], i, n), null != r && (a[a.length] = r);
	      }return f.apply([], a);
	    }, guid: 1, proxy: function proxy(e, t) {
	      var n, r, i;return "string" == typeof t && (n = e[t], t = e, e = n), x.isFunction(e) ? (r = d.call(arguments, 2), i = function i() {
	        return e.apply(t || this, r.concat(d.call(arguments)));
	      }, i.guid = e.guid = e.guid || x.guid++, i) : undefined;
	    }, access: function access(e, t, n, r, i, o, s) {
	      var a = 0,
	          u = e.length,
	          l = null == n;if ("object" === x.type(n)) {
	        i = !0;for (a in n) {
	          x.access(e, t, a, n[a], !0, o, s);
	        }
	      } else if (r !== undefined && (i = !0, x.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
	        return l.call(x(e), n);
	      })), t)) for (; u > a; a++) {
	        t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
	      }return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
	    }, now: Date.now, swap: function swap(e, t, n, r) {
	      var i,
	          o,
	          s = {};for (o in t) {
	        s[o] = e.style[o], e.style[o] = t[o];
	      }i = n.apply(e, r || []);for (o in t) {
	        e.style[o] = s[o];
	      }return i;
	    } }), x.ready.promise = function (t) {
	    return n || (n = x.Deferred(), "complete" === o.readyState ? setTimeout(x.ready) : (o.addEventListener("DOMContentLoaded", S, !1), e.addEventListener("load", S, !1))), n.promise(t);
	  }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
	    l["[object " + t + "]"] = t.toLowerCase();
	  });function j(e) {
	    var t = e.length,
	        n = x.type(e);return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
	  }t = x(o), function (e, undefined) {
	    var t,
	        n,
	        r,
	        i,
	        o,
	        s,
	        a,
	        u,
	        l,
	        c,
	        p,
	        f,
	        h,
	        d,
	        g,
	        m,
	        y,
	        v = "sizzle" + -new Date(),
	        b = e.document,
	        w = 0,
	        T = 0,
	        C = st(),
	        k = st(),
	        N = st(),
	        E = !1,
	        S = function S(e, t) {
	      return e === t ? (E = !0, 0) : 0;
	    },
	        j = typeof undefined === "undefined" ? "undefined" : _typeof(undefined),
	        D = 1 << 31,
	        A = {}.hasOwnProperty,
	        L = [],
	        q = L.pop,
	        H = L.push,
	        O = L.push,
	        F = L.slice,
	        P = L.indexOf || function (e) {
	      var t = 0,
	          n = this.length;for (; n > t; t++) {
	        if (this[t] === e) return t;
	      }return -1;
	    },
	        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	        M = "[\\x20\\t\\r\\n\\f]",
	        W = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	        $ = W.replace("w", "w#"),
	        B = "\\[" + M + "*(" + W + ")" + M + "*(?:([*^$|!~]?=)" + M + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + $ + ")|)|)" + M + "*\\]",
	        I = ":(" + W + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + B.replace(3, 8) + ")*)|.*)\\)|)",
	        z = RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
	        _ = RegExp("^" + M + "*," + M + "*"),
	        X = RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
	        U = RegExp(M + "*[+~]"),
	        Y = RegExp("=" + M + "*([^\\]'\"]*)" + M + "*\\]", "g"),
	        V = RegExp(I),
	        G = RegExp("^" + $ + "$"),
	        J = { ID: RegExp("^#(" + W + ")"), CLASS: RegExp("^\\.(" + W + ")"), TAG: RegExp("^(" + W.replace("w", "w*") + ")"), ATTR: RegExp("^" + B), PSEUDO: RegExp("^" + I), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: RegExp("^(?:" + R + ")$", "i"), needsContext: RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
	        Q = /^[^{]+\{\s*\[native \w/,
	        K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	        Z = /^(?:input|select|textarea|button)$/i,
	        et = /^h\d$/i,
	        tt = /'|\\/g,
	        nt = RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
	        rt = function rt(e, t, n) {
	      var r = "0x" + t - 65536;return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r);
	    };try {
	      O.apply(L = F.call(b.childNodes), b.childNodes), L[b.childNodes.length].nodeType;
	    } catch (it) {
	      O = { apply: L.length ? function (e, t) {
	          H.apply(e, F.call(t));
	        } : function (e, t) {
	          var n = e.length,
	              r = 0;while (e[n++] = t[r++]) {}e.length = n - 1;
	        } };
	    }function ot(e, t, r, i) {
	      var o, s, a, u, l, f, g, m, x, w;if ((t ? t.ownerDocument || t : b) !== p && c(t), t = t || p, r = r || [], !e || "string" != typeof e) return r;if (1 !== (u = t.nodeType) && 9 !== u) return [];if (h && !i) {
	        if (o = K.exec(e)) if (a = o[1]) {
	          if (9 === u) {
	            if (s = t.getElementById(a), !s || !s.parentNode) return r;if (s.id === a) return r.push(s), r;
	          } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && y(t, s) && s.id === a) return r.push(s), r;
	        } else {
	          if (o[2]) return O.apply(r, t.getElementsByTagName(e)), r;if ((a = o[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(a)), r;
	        }if (n.qsa && (!d || !d.test(e))) {
	          if (m = g = v, x = t, w = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
	            f = gt(e), (g = t.getAttribute("id")) ? m = g.replace(tt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", l = f.length;while (l--) {
	              f[l] = m + mt(f[l]);
	            }x = U.test(e) && t.parentNode || t, w = f.join(",");
	          }if (w) try {
	            return O.apply(r, x.querySelectorAll(w)), r;
	          } catch (T) {} finally {
	            g || t.removeAttribute("id");
	          }
	        }
	      }return kt(e.replace(z, "$1"), t, r, i);
	    }function st() {
	      var e = [];function t(n, r) {
	        return e.push(n += " ") > i.cacheLength && delete t[e.shift()], t[n] = r;
	      }return t;
	    }function at(e) {
	      return e[v] = !0, e;
	    }function ut(e) {
	      var t = p.createElement("div");try {
	        return !!e(t);
	      } catch (n) {
	        return !1;
	      } finally {
	        t.parentNode && t.parentNode.removeChild(t), t = null;
	      }
	    }function lt(e, t) {
	      var n = e.split("|"),
	          r = e.length;while (r--) {
	        i.attrHandle[n[r]] = t;
	      }
	    }function ct(e, t) {
	      var n = t && e,
	          r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);if (r) return r;if (n) while (n = n.nextSibling) {
	        if (n === t) return -1;
	      }return e ? 1 : -1;
	    }function pt(e) {
	      return function (t) {
	        var n = t.nodeName.toLowerCase();return "input" === n && t.type === e;
	      };
	    }function ft(e) {
	      return function (t) {
	        var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
	      };
	    }function ht(e) {
	      return at(function (t) {
	        return t = +t, at(function (n, r) {
	          var i,
	              o = e([], n.length, t),
	              s = o.length;while (s--) {
	            n[i = o[s]] && (n[i] = !(r[i] = n[i]));
	          }
	        });
	      });
	    }s = ot.isXML = function (e) {
	      var t = e && (e.ownerDocument || e).documentElement;return t ? "HTML" !== t.nodeName : !1;
	    }, n = ot.support = {}, c = ot.setDocument = function (e) {
	      var t = e ? e.ownerDocument || e : b,
	          r = t.defaultView;return t !== p && 9 === t.nodeType && t.documentElement ? (p = t, f = t.documentElement, h = !s(t), r && r.attachEvent && r !== r.top && r.attachEvent("onbeforeunload", function () {
	        c();
	      }), n.attributes = ut(function (e) {
	        return e.className = "i", !e.getAttribute("className");
	      }), n.getElementsByTagName = ut(function (e) {
	        return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length;
	      }), n.getElementsByClassName = ut(function (e) {
	        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length;
	      }), n.getById = ut(function (e) {
	        return f.appendChild(e).id = v, !t.getElementsByName || !t.getElementsByName(v).length;
	      }), n.getById ? (i.find.ID = function (e, t) {
	        if (_typeof(t.getElementById) !== j && h) {
	          var n = t.getElementById(e);return n && n.parentNode ? [n] : [];
	        }
	      }, i.filter.ID = function (e) {
	        var t = e.replace(nt, rt);return function (e) {
	          return e.getAttribute("id") === t;
	        };
	      }) : (delete i.find.ID, i.filter.ID = function (e) {
	        var t = e.replace(nt, rt);return function (e) {
	          var n = _typeof(e.getAttributeNode) !== j && e.getAttributeNode("id");return n && n.value === t;
	        };
	      }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
	        return _typeof(t.getElementsByTagName) !== j ? t.getElementsByTagName(e) : undefined;
	      } : function (e, t) {
	        var n,
	            r = [],
	            i = 0,
	            o = t.getElementsByTagName(e);if ("*" === e) {
	          while (n = o[i++]) {
	            1 === n.nodeType && r.push(n);
	          }return r;
	        }return o;
	      }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
	        return _typeof(t.getElementsByClassName) !== j && h ? t.getElementsByClassName(e) : undefined;
	      }, g = [], d = [], (n.qsa = Q.test(t.querySelectorAll)) && (ut(function (e) {
	        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll(":checked").length || d.push(":checked");
	      }), ut(function (e) {
	        var n = t.createElement("input");n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && d.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:");
	      })), (n.matchesSelector = Q.test(m = f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ut(function (e) {
	        n.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", I);
	      }), d = d.length && RegExp(d.join("|")), g = g.length && RegExp(g.join("|")), y = Q.test(f.contains) || f.compareDocumentPosition ? function (e, t) {
	        var n = 9 === e.nodeType ? e.documentElement : e,
	            r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
	      } : function (e, t) {
	        if (t) while (t = t.parentNode) {
	          if (t === e) return !0;
	        }return !1;
	      }, S = f.compareDocumentPosition ? function (e, r) {
	        if (e === r) return E = !0, 0;var i = r.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(r);return i ? 1 & i || !n.sortDetached && r.compareDocumentPosition(e) === i ? e === t || y(b, e) ? -1 : r === t || y(b, r) ? 1 : l ? P.call(l, e) - P.call(l, r) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
	      } : function (e, n) {
	        var r,
	            i = 0,
	            o = e.parentNode,
	            s = n.parentNode,
	            a = [e],
	            u = [n];if (e === n) return E = !0, 0;if (!o || !s) return e === t ? -1 : n === t ? 1 : o ? -1 : s ? 1 : l ? P.call(l, e) - P.call(l, n) : 0;if (o === s) return ct(e, n);r = e;while (r = r.parentNode) {
	          a.unshift(r);
	        }r = n;while (r = r.parentNode) {
	          u.unshift(r);
	        }while (a[i] === u[i]) {
	          i++;
	        }return i ? ct(a[i], u[i]) : a[i] === b ? -1 : u[i] === b ? 1 : 0;
	      }, t) : p;
	    }, ot.matches = function (e, t) {
	      return ot(e, null, null, t);
	    }, ot.matchesSelector = function (e, t) {
	      if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Y, "='$1']"), !(!n.matchesSelector || !h || g && g.test(t) || d && d.test(t))) try {
	        var r = m.call(e, t);if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
	      } catch (i) {}return ot(t, p, null, [e]).length > 0;
	    }, ot.contains = function (e, t) {
	      return (e.ownerDocument || e) !== p && c(e), y(e, t);
	    }, ot.attr = function (e, t) {
	      (e.ownerDocument || e) !== p && c(e);var r = i.attrHandle[t.toLowerCase()],
	          o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !h) : undefined;return o === undefined ? n.attributes || !h ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null : o;
	    }, ot.error = function (e) {
	      throw Error("Syntax error, unrecognized expression: " + e);
	    }, ot.uniqueSort = function (e) {
	      var t,
	          r = [],
	          i = 0,
	          o = 0;if (E = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(S), E) {
	        while (t = e[o++]) {
	          t === e[o] && (i = r.push(o));
	        }while (i--) {
	          e.splice(r[i], 1);
	        }
	      }return e;
	    }, o = ot.getText = function (e) {
	      var t,
	          n = "",
	          r = 0,
	          i = e.nodeType;if (i) {
	        if (1 === i || 9 === i || 11 === i) {
	          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
	            n += o(e);
	          }
	        } else if (3 === i || 4 === i) return e.nodeValue;
	      } else for (; t = e[r]; r++) {
	        n += o(t);
	      }return n;
	    }, i = ot.selectors = { cacheLength: 50, createPseudo: at, match: J, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
	          return e[1] = e[1].replace(nt, rt), e[3] = (e[4] || e[5] || "").replace(nt, rt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
	        }, CHILD: function CHILD(e) {
	          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ot.error(e[0]), e;
	        }, PSEUDO: function PSEUDO(e) {
	          var t,
	              n = !e[5] && e[2];return J.CHILD.test(e[0]) ? null : (e[3] && e[4] !== undefined ? e[2] = e[4] : n && V.test(n) && (t = gt(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
	        } }, filter: { TAG: function TAG(e) {
	          var t = e.replace(nt, rt).toLowerCase();return "*" === e ? function () {
	            return !0;
	          } : function (e) {
	            return e.nodeName && e.nodeName.toLowerCase() === t;
	          };
	        }, CLASS: function CLASS(e) {
	          var t = C[e + " "];return t || (t = RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && C(e, function (e) {
	            return t.test("string" == typeof e.className && e.className || _typeof(e.getAttribute) !== j && e.getAttribute("class") || "");
	          });
	        }, ATTR: function ATTR(e, t, n) {
	          return function (r) {
	            var i = ot.attr(r, e);return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0;
	          };
	        }, CHILD: function CHILD(e, t, n, r, i) {
	          var o = "nth" !== e.slice(0, 3),
	              s = "last" !== e.slice(-4),
	              a = "of-type" === t;return 1 === r && 0 === i ? function (e) {
	            return !!e.parentNode;
	          } : function (t, n, u) {
	            var l,
	                c,
	                p,
	                f,
	                h,
	                d,
	                g = o !== s ? "nextSibling" : "previousSibling",
	                m = t.parentNode,
	                y = a && t.nodeName.toLowerCase(),
	                x = !u && !a;if (m) {
	              if (o) {
	                while (g) {
	                  p = t;while (p = p[g]) {
	                    if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
	                  }d = g = "only" === e && !d && "nextSibling";
	                }return !0;
	              }if (d = [s ? m.firstChild : m.lastChild], s && x) {
	                c = m[v] || (m[v] = {}), l = c[e] || [], h = l[0] === w && l[1], f = l[0] === w && l[2], p = h && m.childNodes[h];while (p = ++h && p && p[g] || (f = h = 0) || d.pop()) {
	                  if (1 === p.nodeType && ++f && p === t) {
	                    c[e] = [w, h, f];break;
	                  }
	                }
	              } else if (x && (l = (t[v] || (t[v] = {}))[e]) && l[0] === w) f = l[1];else while (p = ++h && p && p[g] || (f = h = 0) || d.pop()) {
	                if ((a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (x && ((p[v] || (p[v] = {}))[e] = [w, f]), p === t)) break;
	              }return f -= i, f === r || 0 === f % r && f / r >= 0;
	            }
	          };
	        }, PSEUDO: function PSEUDO(e, t) {
	          var n,
	              r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);return r[v] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function (e, n) {
	            var i,
	                o = r(e, t),
	                s = o.length;while (s--) {
	              i = P.call(e, o[s]), e[i] = !(n[i] = o[s]);
	            }
	          }) : function (e) {
	            return r(e, 0, n);
	          }) : r;
	        } }, pseudos: { not: at(function (e) {
	          var t = [],
	              n = [],
	              r = a(e.replace(z, "$1"));return r[v] ? at(function (e, t, n, i) {
	            var o,
	                s = r(e, null, i, []),
	                a = e.length;while (a--) {
	              (o = s[a]) && (e[a] = !(t[a] = o));
	            }
	          }) : function (e, i, o) {
	            return t[0] = e, r(t, null, o, n), !n.pop();
	          };
	        }), has: at(function (e) {
	          return function (t) {
	            return ot(e, t).length > 0;
	          };
	        }), contains: at(function (e) {
	          return function (t) {
	            return (t.textContent || t.innerText || o(t)).indexOf(e) > -1;
	          };
	        }), lang: at(function (e) {
	          return G.test(e || "") || ot.error("unsupported lang: " + e), e = e.replace(nt, rt).toLowerCase(), function (t) {
	            var n;do {
	              if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
	            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
	          };
	        }), target: function target(t) {
	          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
	        }, root: function root(e) {
	          return e === f;
	        }, focus: function focus(e) {
	          return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
	        }, enabled: function enabled(e) {
	          return e.disabled === !1;
	        }, disabled: function disabled(e) {
	          return e.disabled === !0;
	        }, checked: function checked(e) {
	          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
	        }, selected: function selected(e) {
	          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
	        }, empty: function empty(e) {
	          for (e = e.firstChild; e; e = e.nextSibling) {
	            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
	          }return !0;
	        }, parent: function parent(e) {
	          return !i.pseudos.empty(e);
	        }, header: function header(e) {
	          return et.test(e.nodeName);
	        }, input: function input(e) {
	          return Z.test(e.nodeName);
	        }, button: function button(e) {
	          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
	        }, text: function text(e) {
	          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
	        }, first: ht(function () {
	          return [0];
	        }), last: ht(function (e, t) {
	          return [t - 1];
	        }), eq: ht(function (e, t, n) {
	          return [0 > n ? n + t : n];
	        }), even: ht(function (e, t) {
	          var n = 0;for (; t > n; n += 2) {
	            e.push(n);
	          }return e;
	        }), odd: ht(function (e, t) {
	          var n = 1;for (; t > n; n += 2) {
	            e.push(n);
	          }return e;
	        }), lt: ht(function (e, t, n) {
	          var r = 0 > n ? n + t : n;for (; --r >= 0;) {
	            e.push(r);
	          }return e;
	        }), gt: ht(function (e, t, n) {
	          var r = 0 > n ? n + t : n;for (; t > ++r;) {
	            e.push(r);
	          }return e;
	        }) } }, i.pseudos.nth = i.pseudos.eq;for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
	      i.pseudos[t] = pt(t);
	    }for (t in { submit: !0, reset: !0 }) {
	      i.pseudos[t] = ft(t);
	    }function dt() {}dt.prototype = i.filters = i.pseudos, i.setFilters = new dt();function gt(e, t) {
	      var n,
	          r,
	          o,
	          s,
	          a,
	          u,
	          l,
	          c = k[e + " "];if (c) return t ? 0 : c.slice(0);a = e, u = [], l = i.preFilter;while (a) {
	        (!n || (r = _.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(o = [])), n = !1, (r = X.exec(a)) && (n = r.shift(), o.push({ value: n, type: r[0].replace(z, " ") }), a = a.slice(n.length));for (s in i.filter) {
	          !(r = J[s].exec(a)) || l[s] && !(r = l[s](r)) || (n = r.shift(), o.push({ value: n, type: s, matches: r }), a = a.slice(n.length));
	        }if (!n) break;
	      }return t ? a.length : a ? ot.error(e) : k(e, u).slice(0);
	    }function mt(e) {
	      var t = 0,
	          n = e.length,
	          r = "";for (; n > t; t++) {
	        r += e[t].value;
	      }return r;
	    }function yt(e, t, n) {
	      var i = t.dir,
	          o = n && "parentNode" === i,
	          s = T++;return t.first ? function (t, n, r) {
	        while (t = t[i]) {
	          if (1 === t.nodeType || o) return e(t, n, r);
	        }
	      } : function (t, n, a) {
	        var u,
	            l,
	            c,
	            p = w + " " + s;if (a) {
	          while (t = t[i]) {
	            if ((1 === t.nodeType || o) && e(t, n, a)) return !0;
	          }
	        } else while (t = t[i]) {
	          if (1 === t.nodeType || o) if (c = t[v] || (t[v] = {}), (l = c[i]) && l[0] === p) {
	            if ((u = l[1]) === !0 || u === r) return u === !0;
	          } else if (l = c[i] = [p], l[1] = e(t, n, a) || r, l[1] === !0) return !0;
	        }
	      };
	    }function vt(e) {
	      return e.length > 1 ? function (t, n, r) {
	        var i = e.length;while (i--) {
	          if (!e[i](t, n, r)) return !1;
	        }return !0;
	      } : e[0];
	    }function xt(e, t, n, r, i) {
	      var o,
	          s = [],
	          a = 0,
	          u = e.length,
	          l = null != t;for (; u > a; a++) {
	        (o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
	      }return s;
	    }function bt(e, t, n, r, i, o) {
	      return r && !r[v] && (r = bt(r)), i && !i[v] && (i = bt(i, o)), at(function (o, s, a, u) {
	        var l,
	            c,
	            p,
	            f = [],
	            h = [],
	            d = s.length,
	            g = o || Ct(t || "*", a.nodeType ? [a] : a, []),
	            m = !e || !o && t ? g : xt(g, f, e, a, u),
	            y = n ? i || (o ? e : d || r) ? [] : s : m;if (n && n(m, y, a, u), r) {
	          l = xt(y, h), r(l, [], a, u), c = l.length;while (c--) {
	            (p = l[c]) && (y[h[c]] = !(m[h[c]] = p));
	          }
	        }if (o) {
	          if (i || e) {
	            if (i) {
	              l = [], c = y.length;while (c--) {
	                (p = y[c]) && l.push(m[c] = p);
	              }i(null, y = [], l, u);
	            }c = y.length;while (c--) {
	              (p = y[c]) && (l = i ? P.call(o, p) : f[c]) > -1 && (o[l] = !(s[l] = p));
	            }
	          }
	        } else y = xt(y === s ? y.splice(d, y.length) : y), i ? i(null, s, y, u) : O.apply(s, y);
	      });
	    }function wt(e) {
	      var t,
	          n,
	          r,
	          o = e.length,
	          s = i.relative[e[0].type],
	          a = s || i.relative[" "],
	          l = s ? 1 : 0,
	          c = yt(function (e) {
	        return e === t;
	      }, a, !0),
	          p = yt(function (e) {
	        return P.call(t, e) > -1;
	      }, a, !0),
	          f = [function (e, n, r) {
	        return !s && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
	      }];for (; o > l; l++) {
	        if (n = i.relative[e[l].type]) f = [yt(vt(f), n)];else {
	          if (n = i.filter[e[l].type].apply(null, e[l].matches), n[v]) {
	            for (r = ++l; o > r; r++) {
	              if (i.relative[e[r].type]) break;
	            }return bt(l > 1 && vt(f), l > 1 && mt(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(z, "$1"), n, r > l && wt(e.slice(l, r)), o > r && wt(e = e.slice(r)), o > r && mt(e));
	          }f.push(n);
	        }
	      }return vt(f);
	    }function Tt(e, t) {
	      var n = 0,
	          o = t.length > 0,
	          s = e.length > 0,
	          a = function a(_a, l, c, f, h) {
	        var d,
	            g,
	            m,
	            y = [],
	            v = 0,
	            x = "0",
	            b = _a && [],
	            T = null != h,
	            C = u,
	            k = _a || s && i.find.TAG("*", h && l.parentNode || l),
	            N = w += null == C ? 1 : Math.random() || .1;for (T && (u = l !== p && l, r = n); null != (d = k[x]); x++) {
	          if (s && d) {
	            g = 0;while (m = e[g++]) {
	              if (m(d, l, c)) {
	                f.push(d);break;
	              }
	            }T && (w = N, r = ++n);
	          }o && ((d = !m && d) && v--, _a && b.push(d));
	        }if (v += x, o && x !== v) {
	          g = 0;while (m = t[g++]) {
	            m(b, y, l, c);
	          }if (_a) {
	            if (v > 0) while (x--) {
	              b[x] || y[x] || (y[x] = q.call(f));
	            }y = xt(y);
	          }O.apply(f, y), T && !_a && y.length > 0 && v + t.length > 1 && ot.uniqueSort(f);
	        }return T && (w = N, u = C), b;
	      };return o ? at(a) : a;
	    }a = ot.compile = function (e, t) {
	      var n,
	          r = [],
	          i = [],
	          o = N[e + " "];if (!o) {
	        t || (t = gt(e)), n = t.length;while (n--) {
	          o = wt(t[n]), o[v] ? r.push(o) : i.push(o);
	        }o = N(e, Tt(i, r));
	      }return o;
	    };function Ct(e, t, n) {
	      var r = 0,
	          i = t.length;for (; i > r; r++) {
	        ot(e, t[r], n);
	      }return n;
	    }function kt(e, t, r, o) {
	      var s,
	          u,
	          l,
	          c,
	          p,
	          f = gt(e);if (!o && 1 === f.length) {
	        if (u = f[0] = f[0].slice(0), u.length > 2 && "ID" === (l = u[0]).type && n.getById && 9 === t.nodeType && h && i.relative[u[1].type]) {
	          if (t = (i.find.ID(l.matches[0].replace(nt, rt), t) || [])[0], !t) return r;e = e.slice(u.shift().value.length);
	        }s = J.needsContext.test(e) ? 0 : u.length;while (s--) {
	          if (l = u[s], i.relative[c = l.type]) break;if ((p = i.find[c]) && (o = p(l.matches[0].replace(nt, rt), U.test(u[0].type) && t.parentNode || t))) {
	            if (u.splice(s, 1), e = o.length && mt(u), !e) return O.apply(r, o), r;break;
	          }
	        }
	      }return a(e, f)(o, t, !h, r, U.test(e)), r;
	    }n.sortStable = v.split("").sort(S).join("") === v, n.detectDuplicates = E, c(), n.sortDetached = ut(function (e) {
	      return 1 & e.compareDocumentPosition(p.createElement("div"));
	    }), ut(function (e) {
	      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
	    }) || lt("type|href|height|width", function (e, t, n) {
	      return n ? undefined : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
	    }), n.attributes && ut(function (e) {
	      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
	    }) || lt("value", function (e, t, n) {
	      return n || "input" !== e.nodeName.toLowerCase() ? undefined : e.defaultValue;
	    }), ut(function (e) {
	      return null == e.getAttribute("disabled");
	    }) || lt(R, function (e, t, n) {
	      var r;return n ? undefined : (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null;
	    }), x.find = ot, x.expr = ot.selectors, x.expr[":"] = x.expr.pseudos, x.unique = ot.uniqueSort, x.text = ot.getText, x.isXMLDoc = ot.isXML, x.contains = ot.contains;
	  }(e);var D = {};function A(e) {
	    var t = D[e] = {};return x.each(e.match(w) || [], function (e, n) {
	      t[n] = !0;
	    }), t;
	  }x.Callbacks = function (e) {
	    e = "string" == typeof e ? D[e] || A(e) : x.extend({}, e);var t,
	        n,
	        r,
	        i,
	        o,
	        s,
	        a = [],
	        u = !e.once && [],
	        l = function l(p) {
	      for (t = e.memory && p, n = !0, s = i || 0, i = 0, o = a.length, r = !0; a && o > s; s++) {
	        if (a[s].apply(p[0], p[1]) === !1 && e.stopOnFalse) {
	          t = !1;break;
	        }
	      }r = !1, a && (u ? u.length && l(u.shift()) : t ? a = [] : c.disable());
	    },
	        c = { add: function add() {
	        if (a) {
	          var n = a.length;(function s(t) {
	            x.each(t, function (t, n) {
	              var r = x.type(n);"function" === r ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== r && s(n);
	            });
	          })(arguments), r ? o = a.length : t && (i = n, l(t));
	        }return this;
	      }, remove: function remove() {
	        return a && x.each(arguments, function (e, t) {
	          var n;while ((n = x.inArray(t, a, n)) > -1) {
	            a.splice(n, 1), r && (o >= n && o--, s >= n && s--);
	          }
	        }), this;
	      }, has: function has(e) {
	        return e ? x.inArray(e, a) > -1 : !(!a || !a.length);
	      }, empty: function empty() {
	        return a = [], o = 0, this;
	      }, disable: function disable() {
	        return a = u = t = undefined, this;
	      }, disabled: function disabled() {
	        return !a;
	      }, lock: function lock() {
	        return u = undefined, t || c.disable(), this;
	      }, locked: function locked() {
	        return !u;
	      }, fireWith: function fireWith(e, t) {
	        return !a || n && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? u.push(t) : l(t)), this;
	      }, fire: function fire() {
	        return c.fireWith(this, arguments), this;
	      }, fired: function fired() {
	        return !!n;
	      } };return c;
	  }, x.extend({ Deferred: function Deferred(e) {
	      var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]],
	          n = "pending",
	          r = { state: function state() {
	          return n;
	        }, always: function always() {
	          return i.done(arguments).fail(arguments), this;
	        }, then: function then() {
	          var e = arguments;return x.Deferred(function (n) {
	            x.each(t, function (t, o) {
	              var s = o[0],
	                  a = x.isFunction(e[t]) && e[t];i[o[1]](function () {
	                var e = a && a.apply(this, arguments);e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n.promise() : this, a ? [e] : arguments);
	              });
	            }), e = null;
	          }).promise();
	        }, promise: function promise(e) {
	          return null != e ? x.extend(e, r) : r;
	        } },
	          i = {};return r.pipe = r.then, x.each(t, function (e, o) {
	        var s = o[2],
	            a = o[3];r[o[1]] = s.add, a && s.add(function () {
	          n = a;
	        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
	          return i[o[0] + "With"](this === i ? r : this, arguments), this;
	        }, i[o[0] + "With"] = s.fireWith;
	      }), r.promise(i), e && e.call(i, i), i;
	    }, when: function when(e) {
	      var t = 0,
	          n = d.call(arguments),
	          r = n.length,
	          i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
	          o = 1 === i ? e : x.Deferred(),
	          s = function s(e, t, n) {
	        return function (r) {
	          t[e] = this, n[e] = arguments.length > 1 ? d.call(arguments) : r, n === a ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
	        };
	      },
	          a,
	          u,
	          l;if (r > 1) for (a = Array(r), u = Array(r), l = Array(r); r > t; t++) {
	        n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(s(t, l, n)).fail(o.reject).progress(s(t, u, a)) : --i;
	      }return i || o.resolveWith(l, n), o.promise();
	    } }), x.support = function (t) {
	    var n = o.createElement("input"),
	        r = o.createDocumentFragment(),
	        i = o.createElement("div"),
	        s = o.createElement("select"),
	        a = s.appendChild(o.createElement("option"));return n.type ? (n.type = "checkbox", t.checkOn = "" !== n.value, t.optSelected = a.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !0, t.noCloneChecked = n.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !a.disabled, n = o.createElement("input"), n.value = "t", n.type = "radio", t.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), r.appendChild(n), t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = "onfocusin" in e, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === i.style.backgroundClip, x(function () {
	      var n,
	          r,
	          s = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
	          a = o.getElementsByTagName("body")[0];a && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(i), i.innerHTML = "", i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", x.swap(a, null != a.style.zoom ? { zoom: 1 } : {}, function () {
	        t.boxSizing = 4 === i.offsetWidth;
	      }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || { width: "4px" }).width, r = i.appendChild(o.createElement("div")), r.style.cssText = i.style.cssText = s, r.style.marginRight = r.style.width = "0", i.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), a.removeChild(n));
	    }), t) : t;
	  }({});var L,
	      q,
	      H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	      O = /([A-Z])/g;function F() {
	    Object.defineProperty(this.cache = {}, 0, { get: function get() {
	        return {};
	      } }), this.expando = x.expando + Math.random();
	  }F.uid = 1, F.accepts = function (e) {
	    return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0;
	  }, F.prototype = { key: function key(e) {
	      if (!F.accepts(e)) return 0;var t = {},
	          n = e[this.expando];if (!n) {
	        n = F.uid++;try {
	          t[this.expando] = { value: n }, Object.defineProperties(e, t);
	        } catch (r) {
	          t[this.expando] = n, x.extend(e, t);
	        }
	      }return this.cache[n] || (this.cache[n] = {}), n;
	    }, set: function set(e, t, n) {
	      var r,
	          i = this.key(e),
	          o = this.cache[i];if ("string" == typeof t) o[t] = n;else if (x.isEmptyObject(o)) x.extend(this.cache[i], t);else for (r in t) {
	        o[r] = t[r];
	      }return o;
	    }, get: function get(e, t) {
	      var n = this.cache[this.key(e)];return t === undefined ? n : n[t];
	    }, access: function access(e, t, n) {
	      var r;return t === undefined || t && "string" == typeof t && n === undefined ? (r = this.get(e, t), r !== undefined ? r : this.get(e, x.camelCase(t))) : (this.set(e, t, n), n !== undefined ? n : t);
	    }, remove: function remove(e, t) {
	      var n,
	          r,
	          i,
	          o = this.key(e),
	          s = this.cache[o];if (t === undefined) this.cache[o] = {};else {
	        x.isArray(t) ? r = t.concat(t.map(x.camelCase)) : (i = x.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(w) || [])), n = r.length;while (n--) {
	          delete s[r[n]];
	        }
	      }
	    }, hasData: function hasData(e) {
	      return !x.isEmptyObject(this.cache[e[this.expando]] || {});
	    }, discard: function discard(e) {
	      e[this.expando] && delete this.cache[e[this.expando]];
	    } }, L = new F(), q = new F(), x.extend({ acceptData: F.accepts, hasData: function hasData(e) {
	      return L.hasData(e) || q.hasData(e);
	    }, data: function data(e, t, n) {
	      return L.access(e, t, n);
	    }, removeData: function removeData(e, t) {
	      L.remove(e, t);
	    }, _data: function _data(e, t, n) {
	      return q.access(e, t, n);
	    }, _removeData: function _removeData(e, t) {
	      q.remove(e, t);
	    } }), x.fn.extend({ data: function data(e, t) {
	      var n,
	          r,
	          i = this[0],
	          o = 0,
	          s = null;if (e === undefined) {
	        if (this.length && (s = L.get(i), 1 === i.nodeType && !q.get(i, "hasDataAttrs"))) {
	          for (n = i.attributes; n.length > o; o++) {
	            r = n[o].name, 0 === r.indexOf("data-") && (r = x.camelCase(r.slice(5)), P(i, r, s[r]));
	          }q.set(i, "hasDataAttrs", !0);
	        }return s;
	      }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
	        L.set(this, e);
	      }) : x.access(this, function (t) {
	        var n,
	            r = x.camelCase(e);if (i && t === undefined) {
	          if (n = L.get(i, e), n !== undefined) return n;if (n = L.get(i, r), n !== undefined) return n;if (n = P(i, r, undefined), n !== undefined) return n;
	        } else this.each(function () {
	          var n = L.get(this, r);L.set(this, r, t), -1 !== e.indexOf("-") && n !== undefined && L.set(this, e, t);
	        });
	      }, null, t, arguments.length > 1, null, !0);
	    }, removeData: function removeData(e) {
	      return this.each(function () {
	        L.remove(this, e);
	      });
	    } });function P(e, t, n) {
	    var r;if (n === undefined && 1 === e.nodeType) if (r = "data-" + t.replace(O, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
	      try {
	        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : H.test(n) ? JSON.parse(n) : n;
	      } catch (i) {}L.set(e, t, n);
	    } else n = undefined;return n;
	  }x.extend({ queue: function queue(e, t, n) {
	      var r;return e ? (t = (t || "fx") + "queue", r = q.get(e, t), n && (!r || x.isArray(n) ? r = q.access(e, t, x.makeArray(n)) : r.push(n)), r || []) : undefined;
	    }, dequeue: function dequeue(e, t) {
	      t = t || "fx";var n = x.queue(e, t),
	          r = n.length,
	          i = n.shift(),
	          o = x._queueHooks(e, t),
	          s = function s() {
	        x.dequeue(e, t);
	      };"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire();
	    }, _queueHooks: function _queueHooks(e, t) {
	      var n = t + "queueHooks";return q.get(e, n) || q.access(e, n, { empty: x.Callbacks("once memory").add(function () {
	          q.remove(e, [t + "queue", n]);
	        }) });
	    } }), x.fn.extend({ queue: function queue(e, t) {
	      var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), n > arguments.length ? x.queue(this[0], e) : t === undefined ? this : this.each(function () {
	        var n = x.queue(this, e, t);x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e);
	      });
	    }, dequeue: function dequeue(e) {
	      return this.each(function () {
	        x.dequeue(this, e);
	      });
	    }, delay: function delay(e, t) {
	      return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
	        var r = setTimeout(t, e);n.stop = function () {
	          clearTimeout(r);
	        };
	      });
	    }, clearQueue: function clearQueue(e) {
	      return this.queue(e || "fx", []);
	    }, promise: function promise(e, t) {
	      var n,
	          r = 1,
	          i = x.Deferred(),
	          o = this,
	          s = this.length,
	          a = function a() {
	        --r || i.resolveWith(o, [o]);
	      };"string" != typeof e && (t = e, e = undefined), e = e || "fx";while (s--) {
	        n = q.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
	      }return a(), i.promise(t);
	    } });var R,
	      M,
	      W = /[\t\r\n\f]/g,
	      $ = /\r/g,
	      B = /^(?:input|select|textarea|button)$/i;x.fn.extend({ attr: function attr(e, t) {
	      return x.access(this, x.attr, e, t, arguments.length > 1);
	    }, removeAttr: function removeAttr(e) {
	      return this.each(function () {
	        x.removeAttr(this, e);
	      });
	    }, prop: function prop(e, t) {
	      return x.access(this, x.prop, e, t, arguments.length > 1);
	    }, removeProp: function removeProp(e) {
	      return this.each(function () {
	        delete this[x.propFix[e] || e];
	      });
	    }, addClass: function addClass(e) {
	      var t,
	          n,
	          r,
	          i,
	          o,
	          s = 0,
	          a = this.length,
	          u = "string" == typeof e && e;if (x.isFunction(e)) return this.each(function (t) {
	        x(this).addClass(e.call(this, t, this.className));
	      });if (u) for (t = (e || "").match(w) || []; a > s; s++) {
	        if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : " ")) {
	          o = 0;while (i = t[o++]) {
	            0 > r.indexOf(" " + i + " ") && (r += i + " ");
	          }n.className = x.trim(r);
	        }
	      }return this;
	    }, removeClass: function removeClass(e) {
	      var t,
	          n,
	          r,
	          i,
	          o,
	          s = 0,
	          a = this.length,
	          u = 0 === arguments.length || "string" == typeof e && e;if (x.isFunction(e)) return this.each(function (t) {
	        x(this).removeClass(e.call(this, t, this.className));
	      });if (u) for (t = (e || "").match(w) || []; a > s; s++) {
	        if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : "")) {
	          o = 0;while (i = t[o++]) {
	            while (r.indexOf(" " + i + " ") >= 0) {
	              r = r.replace(" " + i + " ", " ");
	            }
	          }n.className = e ? x.trim(r) : "";
	        }
	      }return this;
	    }, toggleClass: function toggleClass(e, t) {
	      var n = typeof e === "undefined" ? "undefined" : _typeof(e);return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
	        x(this).toggleClass(e.call(this, n, this.className, t), t);
	      }) : this.each(function () {
	        if ("string" === n) {
	          var t,
	              i = 0,
	              o = x(this),
	              s = e.match(w) || [];while (t = s[i++]) {
	            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
	          }
	        } else (n === r || "boolean" === n) && (this.className && q.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : q.get(this, "__className__") || "");
	      });
	    }, hasClass: function hasClass(e) {
	      var t = " " + e + " ",
	          n = 0,
	          r = this.length;for (; r > n; n++) {
	        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(W, " ").indexOf(t) >= 0) return !0;
	      }return !1;
	    }, val: function val(e) {
	      var t,
	          n,
	          r,
	          i = this[0];{
	        if (arguments.length) return r = x.isFunction(e), this.each(function (n) {
	          var i;1 === this.nodeType && (i = r ? e.call(this, n, x(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : x.isArray(i) && (i = x.map(i, function (e) {
	            return null == e ? "" : e + "";
	          })), t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, i, "value") !== undefined || (this.value = i));
	        });if (i) return t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()], t && "get" in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value, "string" == typeof n ? n.replace($, "") : null == n ? "" : n);
	      }
	    } }), x.extend({ valHooks: { option: { get: function get(e) {
	          var t = e.attributes.value;return !t || t.specified ? e.value : e.text;
	        } }, select: { get: function get(e) {
	          var t,
	              n,
	              r = e.options,
	              i = e.selectedIndex,
	              o = "select-one" === e.type || 0 > i,
	              s = o ? null : [],
	              a = o ? i + 1 : r.length,
	              u = 0 > i ? a : o ? i : 0;for (; a > u; u++) {
	            if (n = r[u], !(!n.selected && u !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
	              if (t = x(n).val(), o) return t;s.push(t);
	            }
	          }return s;
	        }, set: function set(e, t) {
	          var n,
	              r,
	              i = e.options,
	              o = x.makeArray(t),
	              s = i.length;while (s--) {
	            r = i[s], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
	          }return n || (e.selectedIndex = -1), o;
	        } } }, attr: function attr(e, t, n) {
	      var i,
	          o,
	          s = e.nodeType;if (e && 3 !== s && 8 !== s && 2 !== s) return _typeof(e.getAttribute) === r ? x.prop(e, t, n) : (1 === s && x.isXMLDoc(e) || (t = t.toLowerCase(), i = x.attrHooks[t] || (x.expr.match.bool.test(t) ? M : R)), n === undefined ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = x.find.attr(e, t), null == o ? undefined : o) : null !== n ? i && "set" in i && (o = i.set(e, n, t)) !== undefined ? o : (e.setAttribute(t, n + ""), n) : (x.removeAttr(e, t), undefined));
	    }, removeAttr: function removeAttr(e, t) {
	      var n,
	          r,
	          i = 0,
	          o = t && t.match(w);if (o && 1 === e.nodeType) while (n = o[i++]) {
	        r = x.propFix[n] || n, x.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n);
	      }
	    }, attrHooks: { type: { set: function set(e, t) {
	          if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
	            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
	          }
	        } } }, propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(e, t, n) {
	      var r,
	          i,
	          o,
	          s = e.nodeType;if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !x.isXMLDoc(e), o && (t = x.propFix[t] || t, i = x.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
	    }, propHooks: { tabIndex: { get: function get(e) {
	          return e.hasAttribute("tabindex") || B.test(e.nodeName) || e.href ? e.tabIndex : -1;
	        } } } }), M = { set: function set(e, t, n) {
	      return t === !1 ? x.removeAttr(e, n) : e.setAttribute(n, n), n;
	    } }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, t) {
	    var n = x.expr.attrHandle[t] || x.find.attr;x.expr.attrHandle[t] = function (e, t, r) {
	      var i = x.expr.attrHandle[t],
	          o = r ? undefined : (x.expr.attrHandle[t] = undefined) != n(e, t, r) ? t.toLowerCase() : null;return x.expr.attrHandle[t] = i, o;
	    };
	  }), x.support.optSelected || (x.propHooks.selected = { get: function get(e) {
	      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
	    } }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
	    x.propFix[this.toLowerCase()] = this;
	  }), x.each(["radio", "checkbox"], function () {
	    x.valHooks[this] = { set: function set(e, t) {
	        return x.isArray(t) ? e.checked = x.inArray(x(e).val(), t) >= 0 : undefined;
	      } }, x.support.checkOn || (x.valHooks[this].get = function (e) {
	      return null === e.getAttribute("value") ? "on" : e.value;
	    });
	  });var I = /^key/,
	      z = /^(?:mouse|contextmenu)|click/,
	      _ = /^(?:focusinfocus|focusoutblur)$/,
	      X = /^([^.]*)(?:\.(.+)|)$/;function U() {
	    return !0;
	  }function Y() {
	    return !1;
	  }function V() {
	    try {
	      return o.activeElement;
	    } catch (e) {}
	  }x.event = { global: {}, add: function add(e, t, n, i, o) {
	      var s,
	          a,
	          u,
	          l,
	          c,
	          p,
	          f,
	          h,
	          d,
	          g,
	          m,
	          y = q.get(e);if (y) {
	        n.handler && (s = n, n = s.handler, o = s.selector), n.guid || (n.guid = x.guid++), (l = y.events) || (l = y.events = {}), (a = y.handle) || (a = y.handle = function (e) {
	          return (typeof x === "undefined" ? "undefined" : _typeof(x)) === r || e && x.event.triggered === e.type ? undefined : x.event.dispatch.apply(a.elem, arguments);
	        }, a.elem = e), t = (t || "").match(w) || [""], c = t.length;while (c--) {
	          u = X.exec(t[c]) || [], d = m = u[1], g = (u[2] || "").split(".").sort(), d && (f = x.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = x.event.special[d] || {}, p = x.extend({ type: d, origType: m, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && x.expr.match.needsContext.test(o), namespace: g.join(".") }, s), (h = l[d]) || (h = l[d] = [], h.delegateCount = 0, f.setup && f.setup.call(e, i, g, a) !== !1 || e.addEventListener && e.addEventListener(d, a, !1)), f.add && (f.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, p) : h.push(p), x.event.global[d] = !0);
	        }e = null;
	      }
	    }, remove: function remove(e, t, n, r, i) {
	      var o,
	          s,
	          a,
	          u,
	          l,
	          c,
	          p,
	          f,
	          h,
	          d,
	          g,
	          m = q.hasData(e) && q.get(e);if (m && (u = m.events)) {
	        t = (t || "").match(w) || [""], l = t.length;while (l--) {
	          if (a = X.exec(t[l]) || [], h = g = a[1], d = (a[2] || "").split(".").sort(), h) {
	            p = x.event.special[h] || {}, h = (r ? p.delegateType : p.bindType) || h, f = u[h] || [], a = a[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length;while (o--) {
	              c = f[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, p.remove && p.remove.call(e, c));
	            }s && !f.length && (p.teardown && p.teardown.call(e, d, m.handle) !== !1 || x.removeEvent(e, h, m.handle), delete u[h]);
	          } else for (h in u) {
	            x.event.remove(e, h + t[l], n, r, !0);
	          }
	        }x.isEmptyObject(u) && (delete m.handle, q.remove(e, "events"));
	      }
	    }, trigger: function trigger(t, n, r, i) {
	      var s,
	          a,
	          u,
	          l,
	          c,
	          p,
	          f,
	          h = [r || o],
	          d = y.call(t, "type") ? t.type : t,
	          g = y.call(t, "namespace") ? t.namespace.split(".") : [];if (a = u = r = r || o, 3 !== r.nodeType && 8 !== r.nodeType && !_.test(d + x.event.triggered) && (d.indexOf(".") >= 0 && (g = d.split("."), d = g.shift(), g.sort()), c = 0 > d.indexOf(":") && "on" + d, t = t[x.expando] ? t : new x.Event(d, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t), t.isTrigger = i ? 2 : 3, t.namespace = g.join("."), t.namespace_re = t.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = r), n = null == n ? [t] : x.makeArray(n, [t]), f = x.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
	        if (!i && !f.noBubble && !x.isWindow(r)) {
	          for (l = f.delegateType || d, _.test(l + d) || (a = a.parentNode); a; a = a.parentNode) {
	            h.push(a), u = a;
	          }u === (r.ownerDocument || o) && h.push(u.defaultView || u.parentWindow || e);
	        }s = 0;while ((a = h[s++]) && !t.isPropagationStopped()) {
	          t.type = s > 1 ? l : f.bindType || d, p = (q.get(a, "events") || {})[t.type] && q.get(a, "handle"), p && p.apply(a, n), p = c && a[c], p && x.acceptData(a) && p.apply && p.apply(a, n) === !1 && t.preventDefault();
	        }return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !x.acceptData(r) || c && x.isFunction(r[d]) && !x.isWindow(r) && (u = r[c], u && (r[c] = null), x.event.triggered = d, r[d](), x.event.triggered = undefined, u && (r[c] = u)), t.result;
	      }
	    }, dispatch: function dispatch(e) {
	      e = x.event.fix(e);var t,
	          n,
	          r,
	          i,
	          o,
	          s = [],
	          a = d.call(arguments),
	          u = (q.get(this, "events") || {})[e.type] || [],
	          l = x.event.special[e.type] || {};if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
	        s = x.event.handlers.call(this, e, u), t = 0;while ((i = s[t++]) && !e.isPropagationStopped()) {
	          e.currentTarget = i.elem, n = 0;while ((o = i.handlers[n++]) && !e.isImmediatePropagationStopped()) {
	            (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((x.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), r !== undefined && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
	          }
	        }return l.postDispatch && l.postDispatch.call(this, e), e.result;
	      }
	    }, handlers: function handlers(e, t) {
	      var n,
	          r,
	          i,
	          o,
	          s = [],
	          a = t.delegateCount,
	          u = e.target;if (a && u.nodeType && (!e.button || "click" !== e.type)) for (; u !== this; u = u.parentNode || this) {
	        if (u.disabled !== !0 || "click" !== e.type) {
	          for (r = [], n = 0; a > n; n++) {
	            o = t[n], i = o.selector + " ", r[i] === undefined && (r[i] = o.needsContext ? x(i, this).index(u) >= 0 : x.find(i, this, null, [u]).length), r[i] && r.push(o);
	          }r.length && s.push({ elem: u, handlers: r });
	        }
	      }return t.length > a && s.push({ elem: this, handlers: t.slice(a) }), s;
	    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(e, t) {
	        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
	      } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(e, t) {
	        var n,
	            r,
	            i,
	            s = t.button;return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || o, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || s === undefined || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e;
	      } }, fix: function fix(e) {
	      if (e[x.expando]) return e;var t,
	          n,
	          r,
	          i = e.type,
	          s = e,
	          a = this.fixHooks[i];a || (this.fixHooks[i] = a = z.test(i) ? this.mouseHooks : I.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new x.Event(s), t = r.length;while (t--) {
	        n = r[t], e[n] = s[n];
	      }return e.target || (e.target = o), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, s) : e;
	    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
	          return this !== V() && this.focus ? (this.focus(), !1) : undefined;
	        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
	          return this === V() && this.blur ? (this.blur(), !1) : undefined;
	        }, delegateType: "focusout" }, click: { trigger: function trigger() {
	          return "checkbox" === this.type && this.click && x.nodeName(this, "input") ? (this.click(), !1) : undefined;
	        }, _default: function _default(e) {
	          return x.nodeName(e.target, "a");
	        } }, beforeunload: { postDispatch: function postDispatch(e) {
	          e.result !== undefined && (e.originalEvent.returnValue = e.result);
	        } } }, simulate: function simulate(e, t, n, r) {
	      var i = x.extend(new x.Event(), n, { type: e, isSimulated: !0, originalEvent: {} });r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
	    } }, x.removeEvent = function (e, t, n) {
	    e.removeEventListener && e.removeEventListener(t, n, !1);
	  }, x.Event = function (e, t) {
	    return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? U : Y) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, undefined) : new x.Event(e, t);
	  }, x.Event.prototype = { isDefaultPrevented: Y, isPropagationStopped: Y, isImmediatePropagationStopped: Y, preventDefault: function preventDefault() {
	      var e = this.originalEvent;this.isDefaultPrevented = U, e && e.preventDefault && e.preventDefault();
	    }, stopPropagation: function stopPropagation() {
	      var e = this.originalEvent;this.isPropagationStopped = U, e && e.stopPropagation && e.stopPropagation();
	    }, stopImmediatePropagation: function stopImmediatePropagation() {
	      this.isImmediatePropagationStopped = U, this.stopPropagation();
	    } }, x.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (e, t) {
	    x.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
	        var n,
	            r = this,
	            i = e.relatedTarget,
	            o = e.handleObj;return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
	      } };
	  }), x.support.focusinBubbles || x.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
	    var n = 0,
	        r = function r(e) {
	      x.event.simulate(t, e.target, x.event.fix(e), !0);
	    };x.event.special[t] = { setup: function setup() {
	        0 === n++ && o.addEventListener(e, r, !0);
	      }, teardown: function teardown() {
	        0 === --n && o.removeEventListener(e, r, !0);
	      } };
	  }), x.fn.extend({ on: function on(e, t, n, r, i) {
	      var o, s;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
	        "string" != typeof t && (n = n || t, t = undefined);for (s in e) {
	          this.on(s, t, n, e[s], i);
	        }return this;
	      }if (null == n && null == r ? (r = t, n = t = undefined) : null == r && ("string" == typeof t ? (r = n, n = undefined) : (r = n, n = t, t = undefined)), r === !1) r = Y;else if (!r) return this;return 1 === i && (o = r, r = function r(e) {
	        return x().off(e), o.apply(this, arguments);
	      }, r.guid = o.guid || (o.guid = x.guid++)), this.each(function () {
	        x.event.add(this, e, r, n, t);
	      });
	    }, one: function one(e, t, n, r) {
	      return this.on(e, t, n, r, 1);
	    }, off: function off(e, t, n) {
	      var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, x(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
	        for (i in e) {
	          this.off(i, t, e[i]);
	        }return this;
	      }return (t === !1 || "function" == typeof t) && (n = t, t = undefined), n === !1 && (n = Y), this.each(function () {
	        x.event.remove(this, e, n, t);
	      });
	    }, trigger: function trigger(e, t) {
	      return this.each(function () {
	        x.event.trigger(e, t, this);
	      });
	    }, triggerHandler: function triggerHandler(e, t) {
	      var n = this[0];return n ? x.event.trigger(e, t, n, !0) : undefined;
	    } });var G = /^.[^:#\[\.,]*$/,
	      J = /^(?:parents|prev(?:Until|All))/,
	      Q = x.expr.match.needsContext,
	      K = { children: !0, contents: !0, next: !0, prev: !0 };x.fn.extend({ find: function find(e) {
	      var t,
	          n = [],
	          r = this,
	          i = r.length;if ("string" != typeof e) return this.pushStack(x(e).filter(function () {
	        for (t = 0; i > t; t++) {
	          if (x.contains(r[t], this)) return !0;
	        }
	      }));for (t = 0; i > t; t++) {
	        x.find(e, r[t], n);
	      }return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n;
	    }, has: function has(e) {
	      var t = x(e, this),
	          n = t.length;return this.filter(function () {
	        var e = 0;for (; n > e; e++) {
	          if (x.contains(this, t[e])) return !0;
	        }
	      });
	    }, not: function not(e) {
	      return this.pushStack(et(this, e || [], !0));
	    }, filter: function filter(e) {
	      return this.pushStack(et(this, e || [], !1));
	    }, is: function is(e) {
	      return !!et(this, "string" == typeof e && Q.test(e) ? x(e) : e || [], !1).length;
	    }, closest: function closest(e, t) {
	      var n,
	          r = 0,
	          i = this.length,
	          o = [],
	          s = Q.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;for (; i > r; r++) {
	        for (n = this[r]; n && n !== t; n = n.parentNode) {
	          if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
	            n = o.push(n);break;
	          }
	        }
	      }return this.pushStack(o.length > 1 ? x.unique(o) : o);
	    }, index: function index(e) {
	      return e ? "string" == typeof e ? g.call(x(e), this[0]) : g.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
	    }, add: function add(e, t) {
	      var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
	          r = x.merge(this.get(), n);return this.pushStack(x.unique(r));
	    }, addBack: function addBack(e) {
	      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
	    } });function Z(e, t) {
	    while ((e = e[t]) && 1 !== e.nodeType) {}return e;
	  }x.each({ parent: function parent(e) {
	      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
	    }, parents: function parents(e) {
	      return x.dir(e, "parentNode");
	    }, parentsUntil: function parentsUntil(e, t, n) {
	      return x.dir(e, "parentNode", n);
	    }, next: function next(e) {
	      return Z(e, "nextSibling");
	    }, prev: function prev(e) {
	      return Z(e, "previousSibling");
	    }, nextAll: function nextAll(e) {
	      return x.dir(e, "nextSibling");
	    }, prevAll: function prevAll(e) {
	      return x.dir(e, "previousSibling");
	    }, nextUntil: function nextUntil(e, t, n) {
	      return x.dir(e, "nextSibling", n);
	    }, prevUntil: function prevUntil(e, t, n) {
	      return x.dir(e, "previousSibling", n);
	    }, siblings: function siblings(e) {
	      return x.sibling((e.parentNode || {}).firstChild, e);
	    }, children: function children(e) {
	      return x.sibling(e.firstChild);
	    }, contents: function contents(e) {
	      return e.contentDocument || x.merge([], e.childNodes);
	    } }, function (e, t) {
	    x.fn[e] = function (n, r) {
	      var i = x.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (K[e] || x.unique(i), J.test(e) && i.reverse()), this.pushStack(i);
	    };
	  }), x.extend({ filter: function filter(e, t, n) {
	      var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
	        return 1 === e.nodeType;
	      }));
	    }, dir: function dir(e, t, n) {
	      var r = [],
	          i = n !== undefined;while ((e = e[t]) && 9 !== e.nodeType) {
	        if (1 === e.nodeType) {
	          if (i && x(e).is(n)) break;r.push(e);
	        }
	      }return r;
	    }, sibling: function sibling(e, t) {
	      var n = [];for (; e; e = e.nextSibling) {
	        1 === e.nodeType && e !== t && n.push(e);
	      }return n;
	    } });function et(e, t, n) {
	    if (x.isFunction(t)) return x.grep(e, function (e, r) {
	      return !!t.call(e, r, e) !== n;
	    });if (t.nodeType) return x.grep(e, function (e) {
	      return e === t !== n;
	    });if ("string" == typeof t) {
	      if (G.test(t)) return x.filter(t, e, n);t = x.filter(t, e);
	    }return x.grep(e, function (e) {
	      return g.call(t, e) >= 0 !== n;
	    });
	  }var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	      nt = /<([\w:]+)/,
	      rt = /<|&#?\w+;/,
	      it = /<(?:script|style|link)/i,
	      ot = /^(?:checkbox|radio)$/i,
	      st = /checked\s*(?:[^=]|=\s*.checked.)/i,
	      at = /^$|\/(?:java|ecma)script/i,
	      ut = /^true\/(.*)/,
	      lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	      ct = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ct.optgroup = ct.option, ct.tbody = ct.tfoot = ct.colgroup = ct.caption = ct.thead, ct.th = ct.td, x.fn.extend({ text: function text(e) {
	      return x.access(this, function (e) {
	        return e === undefined ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e));
	      }, null, e, arguments.length);
	    }, append: function append() {
	      return this.domManip(arguments, function (e) {
	        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
	          var t = pt(this, e);t.appendChild(e);
	        }
	      });
	    }, prepend: function prepend() {
	      return this.domManip(arguments, function (e) {
	        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
	          var t = pt(this, e);t.insertBefore(e, t.firstChild);
	        }
	      });
	    }, before: function before() {
	      return this.domManip(arguments, function (e) {
	        this.parentNode && this.parentNode.insertBefore(e, this);
	      });
	    }, after: function after() {
	      return this.domManip(arguments, function (e) {
	        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
	      });
	    }, remove: function remove(e, t) {
	      var n,
	          r = e ? x.filter(e, this) : this,
	          i = 0;for (; null != (n = r[i]); i++) {
	        t || 1 !== n.nodeType || x.cleanData(mt(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && dt(mt(n, "script")), n.parentNode.removeChild(n));
	      }return this;
	    }, empty: function empty() {
	      var e,
	          t = 0;for (; null != (e = this[t]); t++) {
	        1 === e.nodeType && (x.cleanData(mt(e, !1)), e.textContent = "");
	      }return this;
	    }, clone: function clone(e, t) {
	      return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
	        return x.clone(this, e, t);
	      });
	    }, html: function html(e) {
	      return x.access(this, function (e) {
	        var t = this[0] || {},
	            n = 0,
	            r = this.length;if (e === undefined && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !it.test(e) && !ct[(nt.exec(e) || ["", ""])[1].toLowerCase()]) {
	          e = e.replace(tt, "<$1></$2>");try {
	            for (; r > n; n++) {
	              t = this[n] || {}, 1 === t.nodeType && (x.cleanData(mt(t, !1)), t.innerHTML = e);
	            }t = 0;
	          } catch (i) {}
	        }t && this.empty().append(e);
	      }, null, e, arguments.length);
	    }, replaceWith: function replaceWith() {
	      var e = x.map(this, function (e) {
	        return [e.nextSibling, e.parentNode];
	      }),
	          t = 0;return this.domManip(arguments, function (n) {
	        var r = e[t++],
	            i = e[t++];i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r));
	      }, !0), t ? this : this.remove();
	    }, detach: function detach(e) {
	      return this.remove(e, !0);
	    }, domManip: function domManip(e, t, n) {
	      e = f.apply([], e);var r,
	          i,
	          o,
	          s,
	          a,
	          u,
	          l = 0,
	          c = this.length,
	          p = this,
	          h = c - 1,
	          d = e[0],
	          g = x.isFunction(d);if (g || !(1 >= c || "string" != typeof d || x.support.checkClone) && st.test(d)) return this.each(function (r) {
	        var i = p.eq(r);g && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n);
	      });if (c && (r = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
	        for (o = x.map(mt(r, "script"), ft), s = o.length; c > l; l++) {
	          a = r, l !== h && (a = x.clone(a, !0, !0), s && x.merge(o, mt(a, "script"))), t.call(this[l], a, l);
	        }if (s) for (u = o[o.length - 1].ownerDocument, x.map(o, ht), l = 0; s > l; l++) {
	          a = o[l], at.test(a.type || "") && !q.access(a, "globalEval") && x.contains(u, a) && (a.src ? x._evalUrl(a.src) : x.globalEval(a.textContent.replace(lt, "")));
	        }
	      }return this;
	    } }), x.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
	    x.fn[e] = function (e) {
	      var n,
	          r = [],
	          i = x(e),
	          o = i.length - 1,
	          s = 0;for (; o >= s; s++) {
	        n = s === o ? this : this.clone(!0), x(i[s])[t](n), h.apply(r, n.get());
	      }return this.pushStack(r);
	    };
	  }), x.extend({ clone: function clone(e, t, n) {
	      var r,
	          i,
	          o,
	          s,
	          a = e.cloneNode(!0),
	          u = x.contains(e.ownerDocument, e);if (!(x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (s = mt(a), o = mt(e), r = 0, i = o.length; i > r; r++) {
	        yt(o[r], s[r]);
	      }if (t) if (n) for (o = o || mt(e), s = s || mt(a), r = 0, i = o.length; i > r; r++) {
	        gt(o[r], s[r]);
	      } else gt(e, a);return s = mt(a, "script"), s.length > 0 && dt(s, !u && mt(e, "script")), a;
	    }, buildFragment: function buildFragment(e, t, n, r) {
	      var i,
	          o,
	          s,
	          a,
	          u,
	          l,
	          c = 0,
	          p = e.length,
	          f = t.createDocumentFragment(),
	          h = [];for (; p > c; c++) {
	        if (i = e[c], i || 0 === i) if ("object" === x.type(i)) x.merge(h, i.nodeType ? [i] : i);else if (rt.test(i)) {
	          o = o || f.appendChild(t.createElement("div")), s = (nt.exec(i) || ["", ""])[1].toLowerCase(), a = ct[s] || ct._default, o.innerHTML = a[1] + i.replace(tt, "<$1></$2>") + a[2], l = a[0];while (l--) {
	            o = o.lastChild;
	          }x.merge(h, o.childNodes), o = f.firstChild, o.textContent = "";
	        } else h.push(t.createTextNode(i));
	      }f.textContent = "", c = 0;while (i = h[c++]) {
	        if ((!r || -1 === x.inArray(i, r)) && (u = x.contains(i.ownerDocument, i), o = mt(f.appendChild(i), "script"), u && dt(o), n)) {
	          l = 0;while (i = o[l++]) {
	            at.test(i.type || "") && n.push(i);
	          }
	        }
	      }return f;
	    }, cleanData: function cleanData(e) {
	      var t,
	          n,
	          r,
	          i,
	          o,
	          s,
	          a = x.event.special,
	          u = 0;for (; (n = e[u]) !== undefined; u++) {
	        if (F.accepts(n) && (o = n[q.expando], o && (t = q.cache[o]))) {
	          if (r = Object.keys(t.events || {}), r.length) for (s = 0; (i = r[s]) !== undefined; s++) {
	            a[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
	          }q.cache[o] && delete q.cache[o];
	        }delete L.cache[n[L.expando]];
	      }
	    }, _evalUrl: function _evalUrl(e) {
	      return x.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
	    } });function pt(e, t) {
	    return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
	  }function ft(e) {
	    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
	  }function ht(e) {
	    var t = ut.exec(e.type);return t ? e.type = t[1] : e.removeAttribute("type"), e;
	  }function dt(e, t) {
	    var n = e.length,
	        r = 0;for (; n > r; r++) {
	      q.set(e[r], "globalEval", !t || q.get(t[r], "globalEval"));
	    }
	  }function gt(e, t) {
	    var n, r, i, o, s, a, u, l;if (1 === t.nodeType) {
	      if (q.hasData(e) && (o = q.access(e), s = q.set(t, o), l = o.events)) {
	        delete s.handle, s.events = {};for (i in l) {
	          for (n = 0, r = l[i].length; r > n; n++) {
	            x.event.add(t, i, l[i][n]);
	          }
	        }
	      }L.hasData(e) && (a = L.access(e), u = x.extend({}, a), L.set(t, u));
	    }
	  }function mt(e, t) {
	    var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];return t === undefined || t && x.nodeName(e, t) ? x.merge([e], n) : n;
	  }function yt(e, t) {
	    var n = t.nodeName.toLowerCase();"input" === n && ot.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
	  }x.fn.extend({ wrapAll: function wrapAll(e) {
	      var t;return x.isFunction(e) ? this.each(function (t) {
	        x(this).wrapAll(e.call(this, t));
	      }) : (this[0] && (t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
	        var e = this;while (e.firstElementChild) {
	          e = e.firstElementChild;
	        }return e;
	      }).append(this)), this);
	    }, wrapInner: function wrapInner(e) {
	      return x.isFunction(e) ? this.each(function (t) {
	        x(this).wrapInner(e.call(this, t));
	      }) : this.each(function () {
	        var t = x(this),
	            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
	      });
	    }, wrap: function wrap(e) {
	      var t = x.isFunction(e);return this.each(function (n) {
	        x(this).wrapAll(t ? e.call(this, n) : e);
	      });
	    }, unwrap: function unwrap() {
	      return this.parent().each(function () {
	        x.nodeName(this, "body") || x(this).replaceWith(this.childNodes);
	      }).end();
	    } });var vt,
	      xt,
	      bt = /^(none|table(?!-c[ea]).+)/,
	      wt = /^margin/,
	      Tt = RegExp("^(" + b + ")(.*)$", "i"),
	      Ct = RegExp("^(" + b + ")(?!px)[a-z%]+$", "i"),
	      kt = RegExp("^([+-])=(" + b + ")", "i"),
	      Nt = { BODY: "block" },
	      Et = { position: "absolute", visibility: "hidden", display: "block" },
	      St = { letterSpacing: 0, fontWeight: 400 },
	      jt = ["Top", "Right", "Bottom", "Left"],
	      Dt = ["Webkit", "O", "Moz", "ms"];function At(e, t) {
	    if (t in e) return t;var n = t.charAt(0).toUpperCase() + t.slice(1),
	        r = t,
	        i = Dt.length;while (i--) {
	      if (t = Dt[i] + n, t in e) return t;
	    }return r;
	  }function Lt(e, t) {
	    return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e);
	  }function qt(t) {
	    return e.getComputedStyle(t, null);
	  }function Ht(e, t) {
	    var n,
	        r,
	        i,
	        o = [],
	        s = 0,
	        a = e.length;for (; a > s; s++) {
	      r = e[s], r.style && (o[s] = q.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Lt(r) && (o[s] = q.access(r, "olddisplay", Rt(r.nodeName)))) : o[s] || (i = Lt(r), (n && "none" !== n || !i) && q.set(r, "olddisplay", i ? n : x.css(r, "display"))));
	    }for (s = 0; a > s; s++) {
	      r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
	    }return e;
	  }x.fn.extend({ css: function css(e, t) {
	      return x.access(this, function (e, t, n) {
	        var r,
	            i,
	            o = {},
	            s = 0;if (x.isArray(t)) {
	          for (r = qt(e), i = t.length; i > s; s++) {
	            o[t[s]] = x.css(e, t[s], !1, r);
	          }return o;
	        }return n !== undefined ? x.style(e, t, n) : x.css(e, t);
	      }, e, t, arguments.length > 1);
	    }, show: function show() {
	      return Ht(this, !0);
	    }, hide: function hide() {
	      return Ht(this);
	    }, toggle: function toggle(e) {
	      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
	        Lt(this) ? x(this).show() : x(this).hide();
	      });
	    } }), x.extend({ cssHooks: { opacity: { get: function get(e, t) {
	          if (t) {
	            var n = vt(e, "opacity");return "" === n ? "1" : n;
	          }
	        } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(e, t, n, r) {
	      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
	        var i,
	            o,
	            s,
	            a = x.camelCase(t),
	            u = e.style;return t = x.cssProps[a] || (x.cssProps[a] = At(u, a)), s = x.cssHooks[t] || x.cssHooks[a], n === undefined ? s && "get" in s && (i = s.get(e, !1, r)) !== undefined ? i : u[t] : (o = typeof n === "undefined" ? "undefined" : _typeof(n), "string" === o && (i = kt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(x.css(e, t)), o = "number"), null == n || "number" === o && isNaN(n) || ("number" !== o || x.cssNumber[a] || (n += "px"), x.support.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && (n = s.set(e, n, r)) === undefined || (u[t] = n)), undefined);
	      }
	    }, css: function css(e, t, n, r) {
	      var i,
	          o,
	          s,
	          a = x.camelCase(t);return t = x.cssProps[a] || (x.cssProps[a] = At(e.style, a)), s = x.cssHooks[t] || x.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), i === undefined && (i = vt(e, t, r)), "normal" === i && t in St && (i = St[t]), "" === n || n ? (o = parseFloat(i), n === !0 || x.isNumeric(o) ? o || 0 : i) : i;
	    } }), vt = function vt(e, t, n) {
	    var r,
	        i,
	        o,
	        s = n || qt(e),
	        a = s ? s.getPropertyValue(t) || s[t] : undefined,
	        u = e.style;return s && ("" !== a || x.contains(e.ownerDocument, e) || (a = x.style(e, t)), Ct.test(a) && wt.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = s.width, u.width = r, u.minWidth = i, u.maxWidth = o)), a;
	  };function Ot(e, t, n) {
	    var r = Tt.exec(t);return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
	  }function Ft(e, t, n, r, i) {
	    var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
	        s = 0;for (; 4 > o; o += 2) {
	      "margin" === n && (s += x.css(e, n + jt[o], !0, i)), r ? ("content" === n && (s -= x.css(e, "padding" + jt[o], !0, i)), "margin" !== n && (s -= x.css(e, "border" + jt[o] + "Width", !0, i))) : (s += x.css(e, "padding" + jt[o], !0, i), "padding" !== n && (s += x.css(e, "border" + jt[o] + "Width", !0, i)));
	    }return s;
	  }function Pt(e, t, n) {
	    var r = !0,
	        i = "width" === t ? e.offsetWidth : e.offsetHeight,
	        o = qt(e),
	        s = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);if (0 >= i || null == i) {
	      if (i = vt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ct.test(i)) return i;r = s && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
	    }return i + Ft(e, t, n || (s ? "border" : "content"), r, o) + "px";
	  }function Rt(e) {
	    var t = o,
	        n = Nt[e];return n || (n = Mt(e, t), "none" !== n && n || (xt = (xt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (xt[0].contentWindow || xt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = Mt(e, t), xt.detach()), Nt[e] = n), n;
	  }function Mt(e, t) {
	    var n = x(t.createElement(e)).appendTo(t.body),
	        r = x.css(n[0], "display");return n.remove(), r;
	  }x.each(["height", "width"], function (e, t) {
	    x.cssHooks[t] = { get: function get(e, n, r) {
	        return n ? 0 === e.offsetWidth && bt.test(x.css(e, "display")) ? x.swap(e, Et, function () {
	          return Pt(e, t, r);
	        }) : Pt(e, t, r) : undefined;
	      }, set: function set(e, n, r) {
	        var i = r && qt(e);return Ot(e, n, r ? Ft(e, t, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0);
	      } };
	  }), x(function () {
	    x.support.reliableMarginRight || (x.cssHooks.marginRight = { get: function get(e, t) {
	        return t ? x.swap(e, { display: "inline-block" }, vt, [e, "marginRight"]) : undefined;
	      } }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, t) {
	      x.cssHooks[t] = { get: function get(e, n) {
	          return n ? (n = vt(e, t), Ct.test(n) ? x(e).position()[t] + "px" : n) : undefined;
	        } };
	    });
	  }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
	    return 0 >= e.offsetWidth && 0 >= e.offsetHeight;
	  }, x.expr.filters.visible = function (e) {
	    return !x.expr.filters.hidden(e);
	  }), x.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
	    x.cssHooks[e + t] = { expand: function expand(n) {
	        var r = 0,
	            i = {},
	            o = "string" == typeof n ? n.split(" ") : [n];for (; 4 > r; r++) {
	          i[e + jt[r] + t] = o[r] || o[r - 2] || o[0];
	        }return i;
	      } }, wt.test(e) || (x.cssHooks[e + t].set = Ot);
	  });var Wt = /%20/g,
	      $t = /\[\]$/,
	      Bt = /\r?\n/g,
	      It = /^(?:submit|button|image|reset|file)$/i,
	      zt = /^(?:input|select|textarea|keygen)/i;x.fn.extend({ serialize: function serialize() {
	      return x.param(this.serializeArray());
	    }, serializeArray: function serializeArray() {
	      return this.map(function () {
	        var e = x.prop(this, "elements");return e ? x.makeArray(e) : this;
	      }).filter(function () {
	        var e = this.type;return this.name && !x(this).is(":disabled") && zt.test(this.nodeName) && !It.test(e) && (this.checked || !ot.test(e));
	      }).map(function (e, t) {
	        var n = x(this).val();return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
	          return { name: t.name, value: e.replace(Bt, "\r\n") };
	        }) : { name: t.name, value: n.replace(Bt, "\r\n") };
	      }).get();
	    } }), x.param = function (e, t) {
	    var n,
	        r = [],
	        i = function i(e, t) {
	      t = x.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
	    };if (t === undefined && (t = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function () {
	      i(this.name, this.value);
	    });else for (n in e) {
	      _t(n, e[n], t, i);
	    }return r.join("&").replace(Wt, "+");
	  };function _t(e, t, n, r) {
	    var i;if (x.isArray(t)) x.each(t, function (t, i) {
	      n || $t.test(e) ? r(e, i) : _t(e + "[" + ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) ? t : "") + "]", i, n, r);
	    });else if (n || "object" !== x.type(t)) r(e, t);else for (i in t) {
	      _t(e + "[" + i + "]", t[i], n, r);
	    }
	  }x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
	    x.fn[t] = function (e, n) {
	      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
	    };
	  }), x.fn.extend({ hover: function hover(e, t) {
	      return this.mouseenter(e).mouseleave(t || e);
	    }, bind: function bind(e, t, n) {
	      return this.on(e, null, t, n);
	    }, unbind: function unbind(e, t) {
	      return this.off(e, null, t);
	    }, delegate: function delegate(e, t, n, r) {
	      return this.on(t, e, n, r);
	    }, undelegate: function undelegate(e, t, n) {
	      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
	    } });var Xt,
	      Ut,
	      Yt = x.now(),
	      Vt = /\?/,
	      Gt = /#.*$/,
	      Jt = /([?&])_=[^&]*/,
	      Qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
	      Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	      Zt = /^(?:GET|HEAD)$/,
	      en = /^\/\//,
	      tn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
	      nn = x.fn.load,
	      rn = {},
	      on = {},
	      sn = "*/".concat("*");try {
	    Ut = i.href;
	  } catch (an) {
	    Ut = o.createElement("a"), Ut.href = "", Ut = Ut.href;
	  }Xt = tn.exec(Ut.toLowerCase()) || [];function un(e) {
	    return function (t, n) {
	      "string" != typeof t && (n = t, t = "*");var r,
	          i = 0,
	          o = t.toLowerCase().match(w) || [];if (x.isFunction(n)) while (r = o[i++]) {
	        "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
	      }
	    };
	  }function ln(e, t, n, r) {
	    var i = {},
	        o = e === on;function s(a) {
	      var u;return i[a] = !0, x.each(e[a] || [], function (e, a) {
	        var l = a(t, n, r);return "string" != typeof l || o || i[l] ? o ? !(u = l) : undefined : (t.dataTypes.unshift(l), s(l), !1);
	      }), u;
	    }return s(t.dataTypes[0]) || !i["*"] && s("*");
	  }function cn(e, t) {
	    var n,
	        r,
	        i = x.ajaxSettings.flatOptions || {};for (n in t) {
	      t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
	    }return r && x.extend(!0, e, r), e;
	  }x.fn.load = function (e, t, n) {
	    if ("string" != typeof e && nn) return nn.apply(this, arguments);var r,
	        i,
	        o,
	        s = this,
	        a = e.indexOf(" ");return a >= 0 && (r = e.slice(a), e = e.slice(0, a)), x.isFunction(t) ? (n = t, t = undefined) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (i = "POST"), s.length > 0 && x.ajax({ url: e, type: i, dataType: "html", data: t }).done(function (e) {
	      o = arguments, s.html(r ? x("<div>").append(x.parseHTML(e)).find(r) : e);
	    }).complete(n && function (e, t) {
	      s.each(n, o || [e.responseText, t, e]);
	    }), this;
	  }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
	    x.fn[t] = function (e) {
	      return this.on(t, e);
	    };
	  }), x.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ut, type: "GET", isLocal: Kt.test(Xt[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": sn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
	      return t ? cn(cn(e, x.ajaxSettings), t) : cn(x.ajaxSettings, e);
	    }, ajaxPrefilter: un(rn), ajaxTransport: un(on), ajax: function ajax(e, t) {
	      "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (t = e, e = undefined), t = t || {};var n,
	          r,
	          i,
	          o,
	          s,
	          a,
	          u,
	          l,
	          c = x.ajaxSetup({}, t),
	          p = c.context || c,
	          f = c.context && (p.nodeType || p.jquery) ? x(p) : x.event,
	          h = x.Deferred(),
	          d = x.Callbacks("once memory"),
	          g = c.statusCode || {},
	          m = {},
	          y = {},
	          v = 0,
	          b = "canceled",
	          T = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
	          var t;if (2 === v) {
	            if (!o) {
	              o = {};while (t = Qt.exec(i)) {
	                o[t[1].toLowerCase()] = t[2];
	              }
	            }t = o[e.toLowerCase()];
	          }return null == t ? null : t;
	        }, getAllResponseHeaders: function getAllResponseHeaders() {
	          return 2 === v ? i : null;
	        }, setRequestHeader: function setRequestHeader(e, t) {
	          var n = e.toLowerCase();return v || (e = y[n] = y[n] || e, m[e] = t), this;
	        }, overrideMimeType: function overrideMimeType(e) {
	          return v || (c.mimeType = e), this;
	        }, statusCode: function statusCode(e) {
	          var t;if (e) if (2 > v) for (t in e) {
	            g[t] = [g[t], e[t]];
	          } else T.always(e[T.status]);return this;
	        }, abort: function abort(e) {
	          var t = e || b;return n && n.abort(t), k(0, t), this;
	        } };if (h.promise(T).complete = d.add, T.success = T.done, T.error = T.fail, c.url = ((e || c.url || Ut) + "").replace(Gt, "").replace(en, Xt[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = x.trim(c.dataType || "*").toLowerCase().match(w) || [""], null == c.crossDomain && (a = tn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === Xt[1] && a[2] === Xt[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (Xt[3] || ("http:" === Xt[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = x.param(c.data, c.traditional)), ln(rn, c, t, T), 2 === v) return T;u = c.global, u && 0 === x.active++ && x.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Zt.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (Vt.test(r) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = Jt.test(r) ? r.replace(Jt, "$1_=" + Yt++) : r + (Vt.test(r) ? "&" : "?") + "_=" + Yt++)), c.ifModified && (x.lastModified[r] && T.setRequestHeader("If-Modified-Since", x.lastModified[r]), x.etag[r] && T.setRequestHeader("If-None-Match", x.etag[r])), (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", c.contentType), T.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + sn + "; q=0.01" : "") : c.accepts["*"]);for (l in c.headers) {
	        T.setRequestHeader(l, c.headers[l]);
	      }if (c.beforeSend && (c.beforeSend.call(p, T, c) === !1 || 2 === v)) return T.abort();b = "abort";for (l in { success: 1, error: 1, complete: 1 }) {
	        T[l](c[l]);
	      }if (n = ln(on, c, t, T)) {
	        T.readyState = 1, u && f.trigger("ajaxSend", [T, c]), c.async && c.timeout > 0 && (s = setTimeout(function () {
	          T.abort("timeout");
	        }, c.timeout));try {
	          v = 1, n.send(m, k);
	        } catch (C) {
	          if (!(2 > v)) throw C;k(-1, C);
	        }
	      } else k(-1, "No Transport");function k(e, t, o, a) {
	        var l,
	            m,
	            y,
	            b,
	            w,
	            C = t;2 !== v && (v = 2, s && clearTimeout(s), n = undefined, i = a || "", T.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, o && (b = pn(c, T, o)), b = fn(c, b, T, l), l ? (c.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (x.lastModified[r] = w), w = T.getResponseHeader("etag"), w && (x.etag[r] = w)), 204 === e || "HEAD" === c.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, m = b.data, y = b.error, l = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (t || C) + "", l ? h.resolveWith(p, [m, C, T]) : h.rejectWith(p, [T, C, y]), T.statusCode(g), g = undefined, u && f.trigger(l ? "ajaxSuccess" : "ajaxError", [T, c, l ? m : y]), d.fireWith(p, [T, C]), u && (f.trigger("ajaxComplete", [T, c]), --x.active || x.event.trigger("ajaxStop")));
	      }return T;
	    }, getJSON: function getJSON(e, t, n) {
	      return x.get(e, t, n, "json");
	    }, getScript: function getScript(e, t) {
	      return x.get(e, undefined, t, "script");
	    } }), x.each(["get", "post"], function (e, t) {
	    x[t] = function (e, n, r, i) {
	      return x.isFunction(n) && (i = i || r, r = n, n = undefined), x.ajax({ url: e, type: t, dataType: i, data: n, success: r });
	    };
	  });function pn(e, t, n) {
	    var r,
	        i,
	        o,
	        s,
	        a = e.contents,
	        u = e.dataTypes;while ("*" === u[0]) {
	      u.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
	    }if (r) for (i in a) {
	      if (a[i] && a[i].test(r)) {
	        u.unshift(i);break;
	      }
	    }if (u[0] in n) o = u[0];else {
	      for (i in n) {
	        if (!u[0] || e.converters[i + " " + u[0]]) {
	          o = i;break;
	        }s || (s = i);
	      }o = o || s;
	    }return o ? (o !== u[0] && u.unshift(o), n[o]) : undefined;
	  }function fn(e, t, n, r) {
	    var i,
	        o,
	        s,
	        a,
	        u,
	        l = {},
	        c = e.dataTypes.slice();if (c[1]) for (s in e.converters) {
	      l[s.toLowerCase()] = e.converters[s];
	    }o = c.shift();while (o) {
	      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
	        if (s = l[u + " " + o] || l["* " + o], !s) for (i in l) {
	          if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
	            s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));break;
	          }
	        }if (s !== !0) if (s && e["throws"]) t = s(t);else try {
	          t = s(t);
	        } catch (p) {
	          return { state: "parsererror", error: s ? p : "No conversion from " + u + " to " + o };
	        }
	      }
	    }return { state: "success", data: t };
	  }x.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(e) {
	        return x.globalEval(e), e;
	      } } }), x.ajaxPrefilter("script", function (e) {
	    e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET");
	  }), x.ajaxTransport("script", function (e) {
	    if (e.crossDomain) {
	      var t, _n;return { send: function send(r, i) {
	          t = x("<script>").prop({ async: !0, charset: e.scriptCharset, src: e.url }).on("load error", _n = function n(e) {
	            t.remove(), _n = null, e && i("error" === e.type ? 404 : 200, e.type);
	          }), o.head.appendChild(t[0]);
	        }, abort: function abort() {
	          _n && _n();
	        } };
	    }
	  });var hn = [],
	      dn = /(=)\?(?=&|$)|\?\?/;x.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
	      var e = hn.pop() || x.expando + "_" + Yt++;return this[e] = !0, e;
	    } }), x.ajaxPrefilter("json jsonp", function (t, n, r) {
	    var i,
	        o,
	        s,
	        a = t.jsonp !== !1 && (dn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = x.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(dn, "$1" + i) : t.jsonp !== !1 && (t.url += (Vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
	      return s || x.error(i + " was not called"), s[0];
	    }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
	      s = arguments;
	    }, r.always(function () {
	      e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, hn.push(i)), s && x.isFunction(o) && o(s[0]), s = o = undefined;
	    }), "script") : undefined;
	  }), x.ajaxSettings.xhr = function () {
	    try {
	      return new XMLHttpRequest();
	    } catch (e) {}
	  };var gn = x.ajaxSettings.xhr(),
	      mn = { 0: 200, 1223: 204 },
	      yn = 0,
	      vn = {};e.ActiveXObject && x(e).on("unload", function () {
	    for (var e in vn) {
	      vn[e]();
	    }vn = undefined;
	  }), x.support.cors = !!gn && "withCredentials" in gn, x.support.ajax = gn = !!gn, x.ajaxTransport(function (e) {
	    var _t3;return x.support.cors || gn && !e.crossDomain ? { send: function send(n, r) {
	        var i,
	            o,
	            s = e.xhr();if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) {
	          s[i] = e.xhrFields[i];
	        }e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");for (i in n) {
	          s.setRequestHeader(i, n[i]);
	        }_t3 = function t(e) {
	          return function () {
	            _t3 && (delete vn[o], _t3 = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? r(s.status || 404, s.statusText) : r(mn[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? { text: s.responseText } : undefined, s.getAllResponseHeaders()));
	          };
	        }, s.onload = _t3(), s.onerror = _t3("error"), _t3 = vn[o = yn++] = _t3("abort"), s.send(e.hasContent && e.data || null);
	      }, abort: function abort() {
	        _t3 && _t3();
	      } } : undefined;
	  });var xn,
	      bn,
	      wn = /^(?:toggle|show|hide)$/,
	      Tn = RegExp("^(?:([+-])=|)(" + b + ")([a-z%]*)$", "i"),
	      Cn = /queueHooks$/,
	      kn = [An],
	      Nn = { "*": [function (e, t) {
	      var n = this.createTween(e, t),
	          r = n.cur(),
	          i = Tn.exec(t),
	          o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
	          s = (x.cssNumber[e] || "px" !== o && +r) && Tn.exec(x.css(n.elem, e)),
	          a = 1,
	          u = 20;if (s && s[3] !== o) {
	        o = o || s[3], i = i || [], s = +r || 1;do {
	          a = a || ".5", s /= a, x.style(n.elem, e, s + o);
	        } while (a !== (a = n.cur() / r) && 1 !== a && --u);
	      }return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n;
	    }] };function En() {
	    return setTimeout(function () {
	      xn = undefined;
	    }), xn = x.now();
	  }function Sn(e, t, n) {
	    var r,
	        i = (Nn[t] || []).concat(Nn["*"]),
	        o = 0,
	        s = i.length;for (; s > o; o++) {
	      if (r = i[o].call(n, t, e)) return r;
	    }
	  }function jn(e, t, n) {
	    var r,
	        i,
	        o = 0,
	        s = kn.length,
	        a = x.Deferred().always(function () {
	      delete u.elem;
	    }),
	        u = function u() {
	      if (i) return !1;var t = xn || En(),
	          n = Math.max(0, l.startTime + l.duration - t),
	          r = n / l.duration || 0,
	          o = 1 - r,
	          s = 0,
	          u = l.tweens.length;for (; u > s; s++) {
	        l.tweens[s].run(o);
	      }return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1);
	    },
	        l = a.promise({ elem: e, props: x.extend({}, t), opts: x.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: xn || En(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
	        var r = x.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);return l.tweens.push(r), r;
	      }, stop: function stop(t) {
	        var n = 0,
	            r = t ? l.tweens.length : 0;if (i) return this;for (i = !0; r > n; n++) {
	          l.tweens[n].run(1);
	        }return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this;
	      } }),
	        c = l.props;for (Dn(c, l.opts.specialEasing); s > o; o++) {
	      if (r = kn[o].call(l, e, c, l.opts)) return r;
	    }return x.map(c, Sn, l), x.isFunction(l.opts.start) && l.opts.start.call(e, l), x.fx.timer(x.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
	  }function Dn(e, t) {
	    var n, r, i, o, s;for (n in e) {
	      if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = x.cssHooks[r], s && "expand" in s) {
	        o = s.expand(o), delete e[r];for (n in o) {
	          n in e || (e[n] = o[n], t[n] = i);
	        }
	      } else t[r] = i;
	    }
	  }x.Animation = x.extend(jn, { tweener: function tweener(e, t) {
	      x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");var n,
	          r = 0,
	          i = e.length;for (; i > r; r++) {
	        n = e[r], Nn[n] = Nn[n] || [], Nn[n].unshift(t);
	      }
	    }, prefilter: function prefilter(e, t) {
	      t ? kn.unshift(e) : kn.push(e);
	    } });function An(e, t, n) {
	    var r,
	        i,
	        o,
	        s,
	        a,
	        u,
	        l = this,
	        c = {},
	        p = e.style,
	        f = e.nodeType && Lt(e),
	        h = q.get(e, "fxshow");n.queue || (a = x._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
	      a.unqueued || u();
	    }), a.unqueued++, l.always(function () {
	      l.always(function () {
	        a.unqueued--, x.queue(e, "fx").length || a.empty.fire();
	      });
	    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", l.always(function () {
	      p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
	    }));for (r in t) {
	      if (i = t[r], wn.exec(i)) {
	        if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) {
	          if ("show" !== i || !h || h[r] === undefined) continue;f = !0;
	        }c[r] = h && h[r] || x.style(e, r);
	      }
	    }if (!x.isEmptyObject(c)) {
	      h ? "hidden" in h && (f = h.hidden) : h = q.access(e, "fxshow", {}), o && (h.hidden = !f), f ? x(e).show() : l.done(function () {
	        x(e).hide();
	      }), l.done(function () {
	        var t;q.remove(e, "fxshow");for (t in c) {
	          x.style(e, t, c[t]);
	        }
	      });for (r in c) {
	        s = Sn(f ? h[r] : 0, r, l), r in h || (h[r] = s.start, f && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0));
	      }
	    }
	  }function Ln(e, t, n, r, i) {
	    return new Ln.prototype.init(e, t, n, r, i);
	  }x.Tween = Ln, Ln.prototype = { constructor: Ln, init: function init(e, t, n, r, i, o) {
	      this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px");
	    }, cur: function cur() {
	      var e = Ln.propHooks[this.prop];return e && e.get ? e.get(this) : Ln.propHooks._default.get(this);
	    }, run: function run(e) {
	      var t,
	          n = Ln.propHooks[this.prop];return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ln.propHooks._default.set(this), this;
	    } }, Ln.prototype.init.prototype = Ln.prototype, Ln.propHooks = { _default: { get: function get(e) {
	        var t;return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop];
	      }, set: function set(e) {
	        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
	      } } }, Ln.propHooks.scrollTop = Ln.propHooks.scrollLeft = { set: function set(e) {
	      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
	    } }, x.each(["toggle", "show", "hide"], function (e, t) {
	    var n = x.fn[t];x.fn[t] = function (e, r, i) {
	      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(qn(t, !0), e, r, i);
	    };
	  }), x.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
	      return this.filter(Lt).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
	    }, animate: function animate(e, t, n, r) {
	      var i = x.isEmptyObject(e),
	          o = x.speed(t, n, r),
	          s = function s() {
	        var t = jn(this, x.extend({}, e), o);(i || q.get(this, "finish")) && t.stop(!0);
	      };return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s);
	    }, stop: function stop(e, t, n) {
	      var r = function r(e) {
	        var t = e.stop;delete e.stop, t(n);
	      };return "string" != typeof e && (n = t, t = e, e = undefined), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
	        var t = !0,
	            i = null != e && e + "queueHooks",
	            o = x.timers,
	            s = q.get(this);if (i) s[i] && s[i].stop && r(s[i]);else for (i in s) {
	          s[i] && s[i].stop && Cn.test(i) && r(s[i]);
	        }for (i = o.length; i--;) {
	          o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
	        }(t || !n) && x.dequeue(this, e);
	      });
	    }, finish: function finish(e) {
	      return e !== !1 && (e = e || "fx"), this.each(function () {
	        var t,
	            n = q.get(this),
	            r = n[e + "queue"],
	            i = n[e + "queueHooks"],
	            o = x.timers,
	            s = r ? r.length : 0;for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
	          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
	        }for (t = 0; s > t; t++) {
	          r[t] && r[t].finish && r[t].finish.call(this);
	        }delete n.finish;
	      });
	    } });function qn(e, t) {
	    var n,
	        r = { height: e },
	        i = 0;for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
	      n = jt[i], r["margin" + n] = r["padding" + n] = e;
	    }return t && (r.opacity = r.width = e), r;
	  }x.each({ slideDown: qn("show"), slideUp: qn("hide"), slideToggle: qn("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
	    x.fn[e] = function (e, n, r) {
	      return this.animate(t, e, n, r);
	    };
	  }), x.speed = function (e, t, n) {
	    var r = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? x.extend({}, e) : { complete: n || !n && t || x.isFunction(e) && e, duration: e, easing: n && t || t && !x.isFunction(t) && t };return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
	      x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue);
	    }, r;
	  }, x.easing = { linear: function linear(e) {
	      return e;
	    }, swing: function swing(e) {
	      return .5 - Math.cos(e * Math.PI) / 2;
	    } }, x.timers = [], x.fx = Ln.prototype.init, x.fx.tick = function () {
	    var e,
	        t = x.timers,
	        n = 0;for (xn = x.now(); t.length > n; n++) {
	      e = t[n], e() || t[n] !== e || t.splice(n--, 1);
	    }t.length || x.fx.stop(), xn = undefined;
	  }, x.fx.timer = function (e) {
	    e() && x.timers.push(e) && x.fx.start();
	  }, x.fx.interval = 13, x.fx.start = function () {
	    bn || (bn = setInterval(x.fx.tick, x.fx.interval));
	  }, x.fx.stop = function () {
	    clearInterval(bn), bn = null;
	  }, x.fx.speeds = { slow: 600, fast: 200, _default: 400 }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
	    return x.grep(x.timers, function (t) {
	      return e === t.elem;
	    }).length;
	  }), x.fn.offset = function (e) {
	    if (arguments.length) return e === undefined ? this : this.each(function (t) {
	      x.offset.setOffset(this, e, t);
	    });var t,
	        n,
	        i = this[0],
	        o = { top: 0, left: 0 },
	        s = i && i.ownerDocument;if (s) return t = s.documentElement, x.contains(t, i) ? (_typeof(i.getBoundingClientRect) !== r && (o = i.getBoundingClientRect()), n = Hn(s), { top: o.top + n.pageYOffset - t.clientTop, left: o.left + n.pageXOffset - t.clientLeft }) : o;
	  }, x.offset = { setOffset: function setOffset(e, t, n) {
	      var r,
	          i,
	          o,
	          s,
	          a,
	          u,
	          l,
	          c = x.css(e, "position"),
	          p = x(e),
	          f = {};"static" === c && (e.style.position = "relative"), a = p.offset(), o = x.css(e, "top"), u = x.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = p.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), x.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : p.css(f);
	    } }, x.fn.extend({ position: function position() {
	      if (this[0]) {
	        var e,
	            t,
	            n = this[0],
	            r = { top: 0, left: 0 };return "fixed" === x.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (r = e.offset()), r.top += x.css(e[0], "borderTopWidth", !0), r.left += x.css(e[0], "borderLeftWidth", !0)), { top: t.top - r.top - x.css(n, "marginTop", !0), left: t.left - r.left - x.css(n, "marginLeft", !0) };
	      }
	    }, offsetParent: function offsetParent() {
	      return this.map(function () {
	        var e = this.offsetParent || s;while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) {
	          e = e.offsetParent;
	        }return e || s;
	      });
	    } }), x.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, n) {
	    var r = "pageYOffset" === n;x.fn[t] = function (i) {
	      return x.access(this, function (t, i, o) {
	        var s = Hn(t);return o === undefined ? s ? s[n] : t[i] : (s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o, undefined);
	      }, t, i, arguments.length, null);
	    };
	  });function Hn(e) {
	    return x.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
	  }x.each({ Height: "height", Width: "width" }, function (e, t) {
	    x.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
	      x.fn[r] = function (r, i) {
	        var o = arguments.length && (n || "boolean" != typeof r),
	            s = n || (r === !0 || i === !0 ? "margin" : "border");return x.access(this, function (t, n, r) {
	          var i;return x.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? x.css(t, n, s) : x.style(t, n, r, s);
	        }, t, o ? r : undefined, o, null);
	      };
	    });
	  }), x.fn.size = function () {
	    return this.length;
	  }, x.fn.andSelf = x.fn.addBack, "object" == ( false ? "undefined" : _typeof(module)) && module && "object" == _typeof(module.exports) ? module.exports = x : "function" == "function" && __webpack_require__(3) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return x;
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "object" == _typeof(e.document) && (e.jQuery = e.$ = x);
	})(window);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	(function (c, n) {
	  var l = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded = function (f) {
	    function m() {
	      var b = c(i),
	          a = c(h);d && (h.length ? d.reject(e, b, a) : d.resolve(e));c.isFunction(f) && f.call(g, e, b, a);
	    }function j(b, a) {
	      b.src === l || -1 !== c.inArray(b, k) || (k.push(b), a ? h.push(b) : i.push(b), c.data(b, "imagesLoaded", { isBroken: a, src: b.src }), o && d.notifyWith(c(b), [a, e, c(i), c(h)]), e.length === k.length && (setTimeout(m), e.unbind(".imagesLoaded")));
	    }var g = this,
	        d = c.isFunction(c.Deferred) ? c.Deferred() : 0,
	        o = c.isFunction(d.notify),
	        e = g.find("img").add(g.filter("img")),
	        k = [],
	        i = [],
	        h = [];c.isPlainObject(f) && c.each(f, function (b, a) {
	      if ("callback" === b) f = a;else if (d) d[b](a);
	    });e.length ? e.bind("load.imagesLoaded error.imagesLoaded", function (b) {
	      j(b.target, "error" === b.type);
	    }).each(function (b, a) {
	      var d = a.src,
	          e = c.data(a, "imagesLoaded");if (e && e.src === d) j(a, e.isBroken);else if (a.complete && a.naturalWidth !== n) j(a, 0 === a.naturalWidth || 0 === a.naturalHeight);else if (a.readyState || a.complete) a.src = l, a.src = d;
	    }) : m();return d ? d.promise(g) : g;
	  };
	})(jQuery);

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	(function ($) {
	  // Caption
	  $('.entry').each(function (i) {
	    $(this).find('img').each(function () {
	      if (!$(this).hasClass('nofancybox')) {
	        var alt = this.alt;
	
	        if (alt) {
	          $(this).after('<span class="caption">' + alt + '</span>');
	        }
	
	        $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox" rel="gallery' + i + '" />');
	      }
	    });
	  });
	
	  // Gallery
	  var play = function play(parent, item, callback) {
	    var width = parent.width();
	
	    item.imagesLoaded(function () {
	      var _this = this[0],
	          nWidth = _this.naturalWidth,
	          nHeight = _this.naturalHeight;
	
	      callback();
	      this.animate({ opacity: 1 }, 500);
	      parent.animate({ height: width * nHeight / nWidth }, 500);
	    });
	  };
	
	  $('.gallery').each(function () {
	    var $this = $(this),
	        current = 0,
	        photoset = $this.children('.photoset').children(),
	        all = photoset.length,
	        loading = true;
	
	    play($this, photoset.eq(0), function () {
	      loading = false;
	    });
	
	    $this.on('click', '.prev', function () {
	      if (!loading) {
	        var next = (current - 1) % all;
	        loading = true;
	
	        play($this, photoset.eq(next), function () {
	          photoset.eq(current).animate({ opacity: 0 }, 500);
	          loading = false;
	          current = next;
	        });
	      }
	    }).on('click', '.next', function () {
	      if (!loading) {
	        var next = (current + 1) % all;
	        loading = true;
	
	        play($this, photoset.eq(next), function () {
	          photoset.eq(current).animate({ opacity: 0 }, 500);
	          loading = false;
	          current = next;
	        });
	      }
	    });
	  });
	})(jQuery);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/* jQuery.qrcode 0.12.0 - http://larsjung.de/jquery-qrcode/ - uses //github.com/kazuhikoarase/qrcode-generator (MIT) */
	!function (r) {
	  "use strict";
	  function t(t, e, n, o) {
	    function i(r, t) {
	      return r -= o, t -= o, 0 > r || r >= u || 0 > t || t >= u ? !1 : a.isDark(r, t);
	    }var a = r(n, e);a.addData(t), a.make(), o = o || 0;var u = a.getModuleCount(),
	        f = a.getModuleCount() + 2 * o,
	        c = function c(r, t, e, n) {
	      var o = this.isDark,
	          i = 1 / f;this.isDark = function (a, u) {
	        var f = u * i,
	            c = a * i,
	            l = f + i,
	            g = c + i;return o(a, u) && (r > l || f > e || t > g || c > n);
	      };
	    };this.text = t, this.level = e, this.version = n, this.moduleCount = f, this.isDark = i, this.addBlank = c;
	  }function e(r, e, n, o, i) {
	    n = Math.max(1, n || 1), o = Math.min(40, o || 40);for (var a = n; o >= a; a += 1) {
	      try {
	        return new t(r, e, a, i);
	      } catch (u) {}
	    }
	  }function n(r, t, e) {
	    var n = e.size,
	        o = "bold " + e.mSize * n + "px " + e.fontname,
	        i = w("<canvas/>")[0].getContext("2d");i.font = o;var a = i.measureText(e.label).width,
	        u = e.mSize,
	        f = a / n,
	        c = (1 - f) * e.mPosX,
	        l = (1 - u) * e.mPosY,
	        g = c + f,
	        s = l + u,
	        h = .01;1 === e.mode ? r.addBlank(0, l - h, n, s + h) : r.addBlank(c - h, l - h, g + h, s + h), t.fillStyle = e.fontcolor, t.font = o, t.fillText(e.label, c * n, l * n + .75 * e.mSize * n);
	  }function o(r, t, e) {
	    var n = e.size,
	        o = e.image.naturalWidth || 1,
	        i = e.image.naturalHeight || 1,
	        a = e.mSize,
	        u = a * o / i,
	        f = (1 - u) * e.mPosX,
	        c = (1 - a) * e.mPosY,
	        l = f + u,
	        g = c + a,
	        s = .01;3 === e.mode ? r.addBlank(0, c - s, n, g + s) : r.addBlank(f - s, c - s, l + s, g + s), t.drawImage(e.image, f * n, c * n, u * n, a * n);
	  }function i(r, t, e) {
	    w(e.background).is("img") ? t.drawImage(e.background, 0, 0, e.size, e.size) : e.background && (t.fillStyle = e.background, t.fillRect(e.left, e.top, e.size, e.size));var i = e.mode;1 === i || 2 === i ? n(r, t, e) : (3 === i || 4 === i) && o(r, t, e);
	  }function a(r, t, e, n, o, i, a, u) {
	    r.isDark(a, u) && t.rect(n, o, i, i);
	  }function u(r, t, e, n, o, i, a, u, f, c) {
	    a ? r.moveTo(t + i, e) : r.moveTo(t, e), u ? (r.lineTo(n - i, e), r.arcTo(n, e, n, o, i)) : r.lineTo(n, e), f ? (r.lineTo(n, o - i), r.arcTo(n, o, t, o, i)) : r.lineTo(n, o), c ? (r.lineTo(t + i, o), r.arcTo(t, o, t, e, i)) : r.lineTo(t, o), a ? (r.lineTo(t, e + i), r.arcTo(t, e, n, e, i)) : r.lineTo(t, e);
	  }function f(r, t, e, n, o, i, a, u, f, c) {
	    a && (r.moveTo(t + i, e), r.lineTo(t, e), r.lineTo(t, e + i), r.arcTo(t, e, t + i, e, i)), u && (r.moveTo(n - i, e), r.lineTo(n, e), r.lineTo(n, e + i), r.arcTo(n, e, n - i, e, i)), f && (r.moveTo(n - i, o), r.lineTo(n, o), r.lineTo(n, o - i), r.arcTo(n, o, n - i, o, i)), c && (r.moveTo(t + i, o), r.lineTo(t, o), r.lineTo(t, o - i), r.arcTo(t, o, t + i, o, i));
	  }function c(r, t, e, n, o, i, a, c) {
	    var l = r.isDark,
	        g = n + i,
	        s = o + i,
	        h = e.radius * i,
	        v = a - 1,
	        d = a + 1,
	        w = c - 1,
	        m = c + 1,
	        p = l(a, c),
	        y = l(v, w),
	        T = l(v, c),
	        B = l(v, m),
	        A = l(a, m),
	        E = l(d, m),
	        k = l(d, c),
	        M = l(d, w),
	        C = l(a, w);p ? u(t, n, o, g, s, h, !T && !C, !T && !A, !k && !A, !k && !C) : f(t, n, o, g, s, h, T && C && y, T && A && B, k && A && E, k && C && M);
	  }function l(r, t, e) {
	    var n,
	        o,
	        i = r.moduleCount,
	        u = e.size / i,
	        f = a;for (p && e.radius > 0 && e.radius <= .5 && (f = c), t.beginPath(), n = 0; i > n; n += 1) {
	      for (o = 0; i > o; o += 1) {
	        var l = e.left + o * u,
	            g = e.top + n * u,
	            s = u;f(r, t, e, l, g, s, n, o);
	      }
	    }if (w(e.fill).is("img")) {
	      t.strokeStyle = "rgba(0,0,0,0.5)", t.lineWidth = 2, t.stroke();var h = t.globalCompositeOperation;t.globalCompositeOperation = "destination-out", t.fill(), t.globalCompositeOperation = h, t.clip(), t.drawImage(e.fill, 0, 0, e.size, e.size), t.restore();
	    } else t.fillStyle = e.fill, t.fill();
	  }function g(r, t) {
	    var n = e(t.text, t.ecLevel, t.minVersion, t.maxVersion, t.quiet);if (!n) return null;var o = w(r).data("qrcode", n),
	        a = o[0].getContext("2d");return i(n, a, t), l(n, a, t), o;
	  }function s(r) {
	    var t = w("<canvas/>").attr("width", r.size).attr("height", r.size);return g(t, r);
	  }function h(r) {
	    return w("<img/>").attr("src", s(r)[0].toDataURL("image/png"));
	  }function v(r) {
	    var t = e(r.text, r.ecLevel, r.minVersion, r.maxVersion, r.quiet);if (!t) return null;var n,
	        o,
	        i = r.size,
	        a = r.background,
	        u = Math.floor,
	        f = t.moduleCount,
	        c = u(i / f),
	        l = u(.5 * (i - c * f)),
	        g = { position: "relative", left: 0, top: 0, padding: 0, margin: 0, width: i, height: i },
	        s = { position: "absolute", padding: 0, margin: 0, width: c, height: c, "background-color": r.fill },
	        h = w("<div/>").data("qrcode", t).css(g);for (a && h.css("background-color", a), n = 0; f > n; n += 1) {
	      for (o = 0; f > o; o += 1) {
	        t.isDark(n, o) && w("<div/>").css(s).css({ left: l + o * c, top: l + n * c }).appendTo(h);
	      }
	    }return h;
	  }function d(r) {
	    return m && "canvas" === r.render ? s(r) : m && "image" === r.render ? h(r) : v(r);
	  }var w = jQuery,
	      m = function () {
	    var r = document.createElement("canvas");return Boolean(r.getContext && r.getContext("2d"));
	  }(),
	      p = "[object Opera]" !== Object.prototype.toString.call(window.opera),
	      y = { render: "canvas", minVersion: 1, maxVersion: 40, ecLevel: "L", left: 0, top: 0, size: 200, fill: "#000", background: null, text: "no text", radius: 0, quiet: 0, mode: 0, mSize: .1, mPosX: .5, mPosY: .5, label: "no label", fontname: "sans", fontcolor: "#000", image: null };w.fn.qrcode = function (r) {
	    var t = w.extend({}, y, r);return this.each(function () {
	      "canvas" === this.nodeName.toLowerCase() ? g(this, t) : w(this).append(d(t));
	    });
	  };
	}(function () {
	  var r = function () {
	    function r(t, e) {
	      if ("undefined" == typeof t.length) throw new Error(t.length + "/" + e);var n = function () {
	        for (var r = 0; r < t.length && 0 == t[r];) {
	          r += 1;
	        }for (var n = new Array(t.length - r + e), o = 0; o < t.length - r; o += 1) {
	          n[o] = t[o + r];
	        }return n;
	      }(),
	          o = {};return o.getAt = function (r) {
	        return n[r];
	      }, o.getLength = function () {
	        return n.length;
	      }, o.multiply = function (t) {
	        for (var e = new Array(o.getLength() + t.getLength() - 1), n = 0; n < o.getLength(); n += 1) {
	          for (var i = 0; i < t.getLength(); i += 1) {
	            e[n + i] ^= a.gexp(a.glog(o.getAt(n)) + a.glog(t.getAt(i)));
	          }
	        }return r(e, 0);
	      }, o.mod = function (t) {
	        if (o.getLength() - t.getLength() < 0) return o;for (var e = a.glog(o.getAt(0)) - a.glog(t.getAt(0)), n = new Array(o.getLength()), i = 0; i < o.getLength(); i += 1) {
	          n[i] = o.getAt(i);
	        }for (var i = 0; i < t.getLength(); i += 1) {
	          n[i] ^= a.gexp(a.glog(t.getAt(i)) + e);
	        }return r(n, 0).mod(t);
	      }, o;
	    }var t = function t(_t, e) {
	      var o = 236,
	          a = 17,
	          l = _t,
	          g = n[e],
	          s = null,
	          h = 0,
	          d = null,
	          w = new Array(),
	          m = {},
	          p = function p(r, t) {
	        h = 4 * l + 17, s = function (r) {
	          for (var t = new Array(r), e = 0; r > e; e += 1) {
	            t[e] = new Array(r);for (var n = 0; r > n; n += 1) {
	              t[e][n] = null;
	            }
	          }return t;
	        }(h), y(0, 0), y(h - 7, 0), y(0, h - 7), A(), B(), k(r, t), l >= 7 && E(r), null == d && (d = D(l, g, w)), M(d, t);
	      },
	          y = function y(r, t) {
	        for (var e = -1; 7 >= e; e += 1) {
	          if (!(-1 >= r + e || r + e >= h)) for (var n = -1; 7 >= n; n += 1) {
	            -1 >= t + n || t + n >= h || (e >= 0 && 6 >= e && (0 == n || 6 == n) || n >= 0 && 6 >= n && (0 == e || 6 == e) || e >= 2 && 4 >= e && n >= 2 && 4 >= n ? s[r + e][t + n] = !0 : s[r + e][t + n] = !1);
	          }
	        }
	      },
	          T = function T() {
	        for (var r = 0, t = 0, e = 0; 8 > e; e += 1) {
	          p(!0, e);var n = i.getLostPoint(m);(0 == e || r > n) && (r = n, t = e);
	        }return t;
	      },
	          B = function B() {
	        for (var r = 8; h - 8 > r; r += 1) {
	          null == s[r][6] && (s[r][6] = r % 2 == 0);
	        }for (var t = 8; h - 8 > t; t += 1) {
	          null == s[6][t] && (s[6][t] = t % 2 == 0);
	        }
	      },
	          A = function A() {
	        for (var r = i.getPatternPosition(l), t = 0; t < r.length; t += 1) {
	          for (var e = 0; e < r.length; e += 1) {
	            var n = r[t],
	                o = r[e];if (null == s[n][o]) for (var a = -2; 2 >= a; a += 1) {
	              for (var u = -2; 2 >= u; u += 1) {
	                -2 == a || 2 == a || -2 == u || 2 == u || 0 == a && 0 == u ? s[n + a][o + u] = !0 : s[n + a][o + u] = !1;
	              }
	            }
	          }
	        }
	      },
	          E = function E(r) {
	        for (var t = i.getBCHTypeNumber(l), e = 0; 18 > e; e += 1) {
	          var n = !r && 1 == (t >> e & 1);s[Math.floor(e / 3)][e % 3 + h - 8 - 3] = n;
	        }for (var e = 0; 18 > e; e += 1) {
	          var n = !r && 1 == (t >> e & 1);s[e % 3 + h - 8 - 3][Math.floor(e / 3)] = n;
	        }
	      },
	          k = function k(r, t) {
	        for (var e = g << 3 | t, n = i.getBCHTypeInfo(e), o = 0; 15 > o; o += 1) {
	          var a = !r && 1 == (n >> o & 1);6 > o ? s[o][8] = a : 8 > o ? s[o + 1][8] = a : s[h - 15 + o][8] = a;
	        }for (var o = 0; 15 > o; o += 1) {
	          var a = !r && 1 == (n >> o & 1);8 > o ? s[8][h - o - 1] = a : 9 > o ? s[8][15 - o - 1 + 1] = a : s[8][15 - o - 1] = a;
	        }s[h - 8][8] = !r;
	      },
	          M = function M(r, t) {
	        for (var e = -1, n = h - 1, o = 7, a = 0, u = i.getMaskFunction(t), f = h - 1; f > 0; f -= 2) {
	          for (6 == f && (f -= 1);;) {
	            for (var c = 0; 2 > c; c += 1) {
	              if (null == s[n][f - c]) {
	                var l = !1;a < r.length && (l = 1 == (r[a] >>> o & 1));var g = u(n, f - c);g && (l = !l), s[n][f - c] = l, o -= 1, -1 == o && (a += 1, o = 7);
	              }
	            }if (n += e, 0 > n || n >= h) {
	              n -= e, e = -e;break;
	            }
	          }
	        }
	      },
	          C = function C(t, e) {
	        for (var n = 0, o = 0, a = 0, u = new Array(e.length), f = new Array(e.length), c = 0; c < e.length; c += 1) {
	          var l = e[c].dataCount,
	              g = e[c].totalCount - l;o = Math.max(o, l), a = Math.max(a, g), u[c] = new Array(l);for (var s = 0; s < u[c].length; s += 1) {
	            u[c][s] = 255 & t.getBuffer()[s + n];
	          }n += l;var h = i.getErrorCorrectPolynomial(g),
	              v = r(u[c], h.getLength() - 1),
	              d = v.mod(h);f[c] = new Array(h.getLength() - 1);for (var s = 0; s < f[c].length; s += 1) {
	            var w = s + d.getLength() - f[c].length;f[c][s] = w >= 0 ? d.getAt(w) : 0;
	          }
	        }for (var m = 0, s = 0; s < e.length; s += 1) {
	          m += e[s].totalCount;
	        }for (var p = new Array(m), y = 0, s = 0; o > s; s += 1) {
	          for (var c = 0; c < e.length; c += 1) {
	            s < u[c].length && (p[y] = u[c][s], y += 1);
	          }
	        }for (var s = 0; a > s; s += 1) {
	          for (var c = 0; c < e.length; c += 1) {
	            s < f[c].length && (p[y] = f[c][s], y += 1);
	          }
	        }return p;
	      },
	          D = function D(r, t, e) {
	        for (var n = u.getRSBlocks(r, t), c = f(), l = 0; l < e.length; l += 1) {
	          var g = e[l];c.put(g.getMode(), 4), c.put(g.getLength(), i.getLengthInBits(g.getMode(), r)), g.write(c);
	        }for (var s = 0, l = 0; l < n.length; l += 1) {
	          s += n[l].dataCount;
	        }if (c.getLengthInBits() > 8 * s) throw new Error("code length overflow. (" + c.getLengthInBits() + ">" + 8 * s + ")");for (c.getLengthInBits() + 4 <= 8 * s && c.put(0, 4); c.getLengthInBits() % 8 != 0;) {
	          c.putBit(!1);
	        }for (;;) {
	          if (c.getLengthInBits() >= 8 * s) break;if (c.put(o, 8), c.getLengthInBits() >= 8 * s) break;c.put(a, 8);
	        }return C(c, n);
	      };return m.addData = function (r) {
	        var t = c(r);w.push(t), d = null;
	      }, m.isDark = function (r, t) {
	        if (0 > r || r >= h || 0 > t || t >= h) throw new Error(r + "," + t);return s[r][t];
	      }, m.getModuleCount = function () {
	        return h;
	      }, m.make = function () {
	        p(!1, T());
	      }, m.createTableTag = function (r, t) {
	        r = r || 2, t = "undefined" == typeof t ? 4 * r : t;var e = "";e += '<table style="', e += " border-width: 0px; border-style: none;", e += " border-collapse: collapse;", e += " padding: 0px; margin: " + t + "px;", e += '">', e += "<tbody>";for (var n = 0; n < m.getModuleCount(); n += 1) {
	          e += "<tr>";for (var o = 0; o < m.getModuleCount(); o += 1) {
	            e += '<td style="', e += " border-width: 0px; border-style: none;", e += " border-collapse: collapse;", e += " padding: 0px; margin: 0px;", e += " width: " + r + "px;", e += " height: " + r + "px;", e += " background-color: ", e += m.isDark(n, o) ? "#000000" : "#ffffff", e += ";", e += '"/>';
	          }e += "</tr>";
	        }return e += "</tbody>", e += "</table>";
	      }, m.createImgTag = function (r, t) {
	        r = r || 2, t = "undefined" == typeof t ? 4 * r : t;var e = m.getModuleCount() * r + 2 * t,
	            n = t,
	            o = e - t;return v(e, e, function (t, e) {
	          if (t >= n && o > t && e >= n && o > e) {
	            var i = Math.floor((t - n) / r),
	                a = Math.floor((e - n) / r);return m.isDark(a, i) ? 0 : 1;
	          }return 1;
	        });
	      }, m;
	    };t.stringToBytes = function (r) {
	      for (var t = new Array(), e = 0; e < r.length; e += 1) {
	        var n = r.charCodeAt(e);t.push(255 & n);
	      }return t;
	    }, t.createStringToBytes = function (r, t) {
	      var e = function () {
	        for (var e = s(r), n = function n() {
	          var r = e.read();if (-1 == r) throw new Error();return r;
	        }, o = 0, i = {};;) {
	          var a = e.read();if (-1 == a) break;var u = n(),
	              f = n(),
	              c = n(),
	              l = String.fromCharCode(a << 8 | u),
	              g = f << 8 | c;i[l] = g, o += 1;
	        }if (o != t) throw new Error(o + " != " + t);return i;
	      }(),
	          n = "?".charCodeAt(0);return function (r) {
	        for (var t = new Array(), o = 0; o < r.length; o += 1) {
	          var i = r.charCodeAt(o);if (128 > i) t.push(i);else {
	            var a = e[r.charAt(o)];"number" == typeof a ? (255 & a) == a ? t.push(a) : (t.push(a >>> 8), t.push(255 & a)) : t.push(n);
	          }
	        }return t;
	      };
	    };var e = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 },
	        n = { L: 1, M: 0, Q: 3, H: 2 },
	        o = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 },
	        i = function () {
	      var t = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
	          n = 1335,
	          i = 7973,
	          u = 21522,
	          f = {},
	          c = function c(r) {
	        for (var t = 0; 0 != r;) {
	          t += 1, r >>>= 1;
	        }return t;
	      };return f.getBCHTypeInfo = function (r) {
	        for (var t = r << 10; c(t) - c(n) >= 0;) {
	          t ^= n << c(t) - c(n);
	        }return (r << 10 | t) ^ u;
	      }, f.getBCHTypeNumber = function (r) {
	        for (var t = r << 12; c(t) - c(i) >= 0;) {
	          t ^= i << c(t) - c(i);
	        }return r << 12 | t;
	      }, f.getPatternPosition = function (r) {
	        return t[r - 1];
	      }, f.getMaskFunction = function (r) {
	        switch (r) {case o.PATTERN000:
	            return function (r, t) {
	              return (r + t) % 2 == 0;
	            };case o.PATTERN001:
	            return function (r, t) {
	              return r % 2 == 0;
	            };case o.PATTERN010:
	            return function (r, t) {
	              return t % 3 == 0;
	            };case o.PATTERN011:
	            return function (r, t) {
	              return (r + t) % 3 == 0;
	            };case o.PATTERN100:
	            return function (r, t) {
	              return (Math.floor(r / 2) + Math.floor(t / 3)) % 2 == 0;
	            };case o.PATTERN101:
	            return function (r, t) {
	              return r * t % 2 + r * t % 3 == 0;
	            };case o.PATTERN110:
	            return function (r, t) {
	              return (r * t % 2 + r * t % 3) % 2 == 0;
	            };case o.PATTERN111:
	            return function (r, t) {
	              return (r * t % 3 + (r + t) % 2) % 2 == 0;
	            };default:
	            throw new Error("bad maskPattern:" + r);}
	      }, f.getErrorCorrectPolynomial = function (t) {
	        for (var e = r([1], 0), n = 0; t > n; n += 1) {
	          e = e.multiply(r([1, a.gexp(n)], 0));
	        }return e;
	      }, f.getLengthInBits = function (r, t) {
	        if (t >= 1 && 10 > t) switch (r) {case e.MODE_NUMBER:
	            return 10;case e.MODE_ALPHA_NUM:
	            return 9;case e.MODE_8BIT_BYTE:
	            return 8;case e.MODE_KANJI:
	            return 8;default:
	            throw new Error("mode:" + r);} else if (27 > t) switch (r) {case e.MODE_NUMBER:
	            return 12;case e.MODE_ALPHA_NUM:
	            return 11;case e.MODE_8BIT_BYTE:
	            return 16;case e.MODE_KANJI:
	            return 10;default:
	            throw new Error("mode:" + r);} else {
	          if (!(41 > t)) throw new Error("type:" + t);switch (r) {case e.MODE_NUMBER:
	              return 14;case e.MODE_ALPHA_NUM:
	              return 13;case e.MODE_8BIT_BYTE:
	              return 16;case e.MODE_KANJI:
	              return 12;default:
	              throw new Error("mode:" + r);}
	        }
	      }, f.getLostPoint = function (r) {
	        for (var t = r.getModuleCount(), e = 0, n = 0; t > n; n += 1) {
	          for (var o = 0; t > o; o += 1) {
	            for (var i = 0, a = r.isDark(n, o), u = -1; 1 >= u; u += 1) {
	              if (!(0 > n + u || n + u >= t)) for (var f = -1; 1 >= f; f += 1) {
	                0 > o + f || o + f >= t || (0 != u || 0 != f) && a == r.isDark(n + u, o + f) && (i += 1);
	              }
	            }i > 5 && (e += 3 + i - 5);
	          }
	        }for (var n = 0; t - 1 > n; n += 1) {
	          for (var o = 0; t - 1 > o; o += 1) {
	            var c = 0;r.isDark(n, o) && (c += 1), r.isDark(n + 1, o) && (c += 1), r.isDark(n, o + 1) && (c += 1), r.isDark(n + 1, o + 1) && (c += 1), (0 == c || 4 == c) && (e += 3);
	          }
	        }for (var n = 0; t > n; n += 1) {
	          for (var o = 0; t - 6 > o; o += 1) {
	            r.isDark(n, o) && !r.isDark(n, o + 1) && r.isDark(n, o + 2) && r.isDark(n, o + 3) && r.isDark(n, o + 4) && !r.isDark(n, o + 5) && r.isDark(n, o + 6) && (e += 40);
	          }
	        }for (var o = 0; t > o; o += 1) {
	          for (var n = 0; t - 6 > n; n += 1) {
	            r.isDark(n, o) && !r.isDark(n + 1, o) && r.isDark(n + 2, o) && r.isDark(n + 3, o) && r.isDark(n + 4, o) && !r.isDark(n + 5, o) && r.isDark(n + 6, o) && (e += 40);
	          }
	        }for (var l = 0, o = 0; t > o; o += 1) {
	          for (var n = 0; t > n; n += 1) {
	            r.isDark(n, o) && (l += 1);
	          }
	        }var g = Math.abs(100 * l / t / t - 50) / 5;return e += 10 * g;
	      }, f;
	    }(),
	        a = function () {
	      for (var r = new Array(256), t = new Array(256), e = 0; 8 > e; e += 1) {
	        r[e] = 1 << e;
	      }for (var e = 8; 256 > e; e += 1) {
	        r[e] = r[e - 4] ^ r[e - 5] ^ r[e - 6] ^ r[e - 8];
	      }for (var e = 0; 255 > e; e += 1) {
	        t[r[e]] = e;
	      }var n = {};return n.glog = function (r) {
	        if (1 > r) throw new Error("glog(" + r + ")");return t[r];
	      }, n.gexp = function (t) {
	        for (; 0 > t;) {
	          t += 255;
	        }for (; t >= 256;) {
	          t -= 255;
	        }return r[t];
	      }, n;
	    }(),
	        u = function () {
	      var r = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
	          t = function t(r, _t2) {
	        var e = {};return e.totalCount = r, e.dataCount = _t2, e;
	      },
	          e = {},
	          o = function o(t, e) {
	        switch (e) {case n.L:
	            return r[4 * (t - 1) + 0];case n.M:
	            return r[4 * (t - 1) + 1];case n.Q:
	            return r[4 * (t - 1) + 2];case n.H:
	            return r[4 * (t - 1) + 3];default:
	            return void 0;}
	      };return e.getRSBlocks = function (r, e) {
	        var n = o(r, e);if ("undefined" == typeof n) throw new Error("bad rs block @ typeNumber:" + r + "/errorCorrectLevel:" + e);for (var i = n.length / 3, a = new Array(), u = 0; i > u; u += 1) {
	          for (var f = n[3 * u + 0], c = n[3 * u + 1], l = n[3 * u + 2], g = 0; f > g; g += 1) {
	            a.push(t(c, l));
	          }
	        }return a;
	      }, e;
	    }(),
	        f = function f() {
	      var r = new Array(),
	          t = 0,
	          e = {};return e.getBuffer = function () {
	        return r;
	      }, e.getAt = function (t) {
	        var e = Math.floor(t / 8);return 1 == (r[e] >>> 7 - t % 8 & 1);
	      }, e.put = function (r, t) {
	        for (var n = 0; t > n; n += 1) {
	          e.putBit(1 == (r >>> t - n - 1 & 1));
	        }
	      }, e.getLengthInBits = function () {
	        return t;
	      }, e.putBit = function (e) {
	        var n = Math.floor(t / 8);r.length <= n && r.push(0), e && (r[n] |= 128 >>> t % 8), t += 1;
	      }, e;
	    },
	        c = function c(r) {
	      var n = e.MODE_8BIT_BYTE,
	          o = t.stringToBytes(r),
	          i = {};return i.getMode = function () {
	        return n;
	      }, i.getLength = function (r) {
	        return o.length;
	      }, i.write = function (r) {
	        for (var t = 0; t < o.length; t += 1) {
	          r.put(o[t], 8);
	        }
	      }, i;
	    },
	        l = function l() {
	      var r = new Array(),
	          t = {};return t.writeByte = function (t) {
	        r.push(255 & t);
	      }, t.writeShort = function (r) {
	        t.writeByte(r), t.writeByte(r >>> 8);
	      }, t.writeBytes = function (r, e, n) {
	        e = e || 0, n = n || r.length;for (var o = 0; n > o; o += 1) {
	          t.writeByte(r[o + e]);
	        }
	      }, t.writeString = function (r) {
	        for (var e = 0; e < r.length; e += 1) {
	          t.writeByte(r.charCodeAt(e));
	        }
	      }, t.toByteArray = function () {
	        return r;
	      }, t.toString = function () {
	        var t = "";t += "[";for (var e = 0; e < r.length; e += 1) {
	          e > 0 && (t += ","), t += r[e];
	        }return t += "]";
	      }, t;
	    },
	        g = function g() {
	      var r = 0,
	          t = 0,
	          e = 0,
	          n = "",
	          o = {},
	          i = function i(r) {
	        n += String.fromCharCode(a(63 & r));
	      },
	          a = function a(r) {
	        if (0 > r) ;else {
	          if (26 > r) return 65 + r;if (52 > r) return 97 + (r - 26);if (62 > r) return 48 + (r - 52);if (62 == r) return 43;if (63 == r) return 47;
	        }throw new Error("n:" + r);
	      };return o.writeByte = function (n) {
	        for (r = r << 8 | 255 & n, t += 8, e += 1; t >= 6;) {
	          i(r >>> t - 6), t -= 6;
	        }
	      }, o.flush = function () {
	        if (t > 0 && (i(r << 6 - t), r = 0, t = 0), e % 3 != 0) for (var o = 3 - e % 3, a = 0; o > a; a += 1) {
	          n += "=";
	        }
	      }, o.toString = function () {
	        return n;
	      }, o;
	    },
	        s = function s(r) {
	      var t = r,
	          e = 0,
	          n = 0,
	          o = 0,
	          i = {};i.read = function () {
	        for (; 8 > o;) {
	          if (e >= t.length) {
	            if (0 == o) return -1;throw new Error("unexpected end of file./" + o);
	          }var r = t.charAt(e);if (e += 1, "=" == r) return o = 0, -1;r.match(/^\s$/) || (n = n << 6 | a(r.charCodeAt(0)), o += 6);
	        }var i = n >>> o - 8 & 255;return o -= 8, i;
	      };var a = function a(r) {
	        if (r >= 65 && 90 >= r) return r - 65;if (r >= 97 && 122 >= r) return r - 97 + 26;if (r >= 48 && 57 >= r) return r - 48 + 52;if (43 == r) return 62;if (47 == r) return 63;throw new Error("c:" + r);
	      };return i;
	    },
	        h = function h(r, t) {
	      var e = r,
	          n = t,
	          o = new Array(r * t),
	          i = {};i.setPixel = function (r, t, n) {
	        o[t * e + r] = n;
	      }, i.write = function (r) {
	        r.writeString("GIF87a"), r.writeShort(e), r.writeShort(n), r.writeByte(128), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(255), r.writeByte(255), r.writeByte(255), r.writeString(","), r.writeShort(0), r.writeShort(0), r.writeShort(e), r.writeShort(n), r.writeByte(0);var t = 2,
	            o = u(t);r.writeByte(t);for (var i = 0; o.length - i > 255;) {
	          r.writeByte(255), r.writeBytes(o, i, 255), i += 255;
	        }r.writeByte(o.length - i), r.writeBytes(o, i, o.length - i), r.writeByte(0), r.writeString(";");
	      };var a = function a(r) {
	        var t = r,
	            e = 0,
	            n = 0,
	            o = {};return o.write = function (r, o) {
	          if (r >>> o != 0) throw new Error("length over");for (; e + o >= 8;) {
	            t.writeByte(255 & (r << e | n)), o -= 8 - e, r >>>= 8 - e, n = 0, e = 0;
	          }n = r << e | n, e += o;
	        }, o.flush = function () {
	          e > 0 && t.writeByte(n);
	        }, o;
	      },
	          u = function u(r) {
	        for (var t = 1 << r, e = (1 << r) + 1, n = r + 1, i = f(), u = 0; t > u; u += 1) {
	          i.add(String.fromCharCode(u));
	        }i.add(String.fromCharCode(t)), i.add(String.fromCharCode(e));var c = l(),
	            g = a(c);g.write(t, n);var s = 0,
	            h = String.fromCharCode(o[s]);for (s += 1; s < o.length;) {
	          var v = String.fromCharCode(o[s]);s += 1, i.contains(h + v) ? h += v : (g.write(i.indexOf(h), n), i.size() < 4095 && (i.size() == 1 << n && (n += 1), i.add(h + v)), h = v);
	        }return g.write(i.indexOf(h), n), g.write(e, n), g.flush(), c.toByteArray();
	      },
	          f = function f() {
	        var r = {},
	            t = 0,
	            e = {};return e.add = function (n) {
	          if (e.contains(n)) throw new Error("dup key:" + n);r[n] = t, t += 1;
	        }, e.size = function () {
	          return t;
	        }, e.indexOf = function (t) {
	          return r[t];
	        }, e.contains = function (t) {
	          return "undefined" != typeof r[t];
	        }, e;
	      };return i;
	    },
	        v = function v(r, t, e, n) {
	      for (var o = h(r, t), i = 0; t > i; i += 1) {
	        for (var a = 0; r > a; a += 1) {
	          o.setPixel(a, i, e(a, i));
	        }
	      }var u = l();o.write(u);for (var f = g(), c = u.toByteArray(), s = 0; s < c.length; s += 1) {
	        f.writeByte(c[s]);
	      }f.flush();var v = "";return v += "<img", v += ' src="', v += "data:image/gif;base64,", v += f, v += '"', v += ' width="', v += r, v += '"', v += ' height="', v += t, v += '"', n && (v += ' alt="', v += n, v += '"'), v += "/>";
	    };return t;
	  }();return function (r) {
	     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (r), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && (module.exports = r());
	  }(function () {
	    return r;
	  }), !function (r) {
	    r.stringToBytes = function (r) {
	      function t(r) {
	        for (var t = [], e = 0; e < r.length; e++) {
	          var n = r.charCodeAt(e);128 > n ? t.push(n) : 2048 > n ? t.push(192 | n >> 6, 128 | 63 & n) : 55296 > n || n >= 57344 ? t.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (e++, n = 65536 + ((1023 & n) << 10 | 1023 & r.charCodeAt(e)), t.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n));
	        }return t;
	      }return t(r);
	    };
	  }(r), r;
	}());

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;/* WEBPACK VAR INJECTION */(function(global, $) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * simplemde v1.11.2
	 * Copyright Next Step Webs, Inc.
	 * @link https://github.com/NextStepWebs/simplemde-markdown-editor
	 * @license MIT
	 */
	!function (e) {
	  if ("object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
	    var t;t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.SimpleMDE = e();
	  }
	}(function () {
	  var e;return function t(e, n, r) {
	    function i(a, l) {
	      if (!n[a]) {
	        if (!e[a]) {
	          var s = "function" == typeof require && require;if (!l && s) return require(a, !0);if (o) return o(a, !0);var c = new Error("Cannot find module '" + a + "'");throw c.code = "MODULE_NOT_FOUND", c;
	        }var u = n[a] = { exports: {} };e[a][0].call(u.exports, function (t) {
	          var n = e[a][1][t];return i(n ? n : t);
	        }, u, u.exports, t, e, n, r);
	      }return n[a].exports;
	    }for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) {
	      i(r[a]);
	    }return i;
	  }({ 1: [function (e, t, n) {
	      "use strict";
	      function r() {
	        for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = 0, n = e.length; n > t; ++t) {
	          s[t] = e[t], c[e.charCodeAt(t)] = t;
	        }c["-".charCodeAt(0)] = 62, c["_".charCodeAt(0)] = 63;
	      }function i(e) {
	        var t,
	            n,
	            r,
	            i,
	            o,
	            a,
	            l = e.length;if (l % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");o = "=" === e[l - 2] ? 2 : "=" === e[l - 1] ? 1 : 0, a = new u(3 * l / 4 - o), r = o > 0 ? l - 4 : l;var s = 0;for (t = 0, n = 0; r > t; t += 4, n += 3) {
	          i = c[e.charCodeAt(t)] << 18 | c[e.charCodeAt(t + 1)] << 12 | c[e.charCodeAt(t + 2)] << 6 | c[e.charCodeAt(t + 3)], a[s++] = i >> 16 & 255, a[s++] = i >> 8 & 255, a[s++] = 255 & i;
	        }return 2 === o ? (i = c[e.charCodeAt(t)] << 2 | c[e.charCodeAt(t + 1)] >> 4, a[s++] = 255 & i) : 1 === o && (i = c[e.charCodeAt(t)] << 10 | c[e.charCodeAt(t + 1)] << 4 | c[e.charCodeAt(t + 2)] >> 2, a[s++] = i >> 8 & 255, a[s++] = 255 & i), a;
	      }function o(e) {
	        return s[e >> 18 & 63] + s[e >> 12 & 63] + s[e >> 6 & 63] + s[63 & e];
	      }function a(e, t, n) {
	        for (var r, i = [], a = t; n > a; a += 3) {
	          r = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2], i.push(o(r));
	        }return i.join("");
	      }function l(e) {
	        for (var t, n = e.length, r = n % 3, i = "", o = [], l = 16383, c = 0, u = n - r; u > c; c += l) {
	          o.push(a(e, c, c + l > u ? u : c + l));
	        }return 1 === r ? (t = e[n - 1], i += s[t >> 2], i += s[t << 4 & 63], i += "==") : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], i += s[t >> 10], i += s[t >> 4 & 63], i += s[t << 2 & 63], i += "="), o.push(i), o.join("");
	      }n.toByteArray = i, n.fromByteArray = l;var s = [],
	          c = [],
	          u = "undefined" != typeof Uint8Array ? Uint8Array : Array;r();
	    }, {}], 2: [function (e, t, n) {}, {}], 3: [function (e, t, n) {
	      (function (t) {
	        "use strict";
	        function r() {
	          try {
	            var e = new Uint8Array(1);return e.foo = function () {
	              return 42;
	            }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength;
	          } catch (t) {
	            return !1;
	          }
	        }function i() {
	          return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
	        }function o(e, t) {
	          if (i() < t) throw new RangeError("Invalid typed array length");return a.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t), e.__proto__ = a.prototype) : (null === e && (e = new a(t)), e.length = t), e;
	        }function a(e, t, n) {
	          if (!(a.TYPED_ARRAY_SUPPORT || this instanceof a)) return new a(e, t, n);if ("number" == typeof e) {
	            if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");return u(this, e);
	          }return l(this, e, t, n);
	        }function l(e, t, n, r) {
	          if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? d(e, t, n, r) : "string" == typeof t ? f(e, t, n) : p(e, t);
	        }function s(e) {
	          if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
	        }function c(e, t, n, r) {
	          return s(t), 0 >= t ? o(e, t) : void 0 !== n ? "string" == typeof r ? o(e, t).fill(n, r) : o(e, t).fill(n) : o(e, t);
	        }function u(e, t) {
	          if (s(t), e = o(e, 0 > t ? 0 : 0 | m(t)), !a.TYPED_ARRAY_SUPPORT) for (var n = 0; t > n; n++) {
	            e[n] = 0;
	          }return e;
	        }function f(e, t, n) {
	          if ("string" == typeof n && "" !== n || (n = "utf8"), !a.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');var r = 0 | v(t, n);return e = o(e, r), e.write(t, n), e;
	        }function h(e, t) {
	          var n = 0 | m(t.length);e = o(e, n);for (var r = 0; n > r; r += 1) {
	            e[r] = 255 & t[r];
	          }return e;
	        }function d(e, t, n, r) {
	          if (t.byteLength, 0 > n || t.byteLength < n) throw new RangeError("'offset' is out of bounds");if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");return t = void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r), a.TYPED_ARRAY_SUPPORT ? (e = t, e.__proto__ = a.prototype) : e = h(e, t), e;
	        }function p(e, t) {
	          if (a.isBuffer(t)) {
	            var n = 0 | m(t.length);return e = o(e, n), 0 === e.length ? e : (t.copy(e, 0, 0, n), e);
	          }if (t) {
	            if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || K(t.length) ? o(e, 0) : h(e, t);if ("Buffer" === t.type && J(t.data)) return h(e, t.data);
	          }throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
	        }function m(e) {
	          if (e >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");return 0 | e;
	        }function g(e) {
	          return +e != e && (e = 0), a.alloc(+e);
	        }function v(e, t) {
	          if (a.isBuffer(e)) return e.length;if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;"string" != typeof e && (e = "" + e);var n = e.length;if (0 === n) return 0;for (var r = !1;;) {
	            switch (t) {case "ascii":case "binary":case "raw":case "raws":
	                return n;case "utf8":case "utf-8":case void 0:
	                return q(e).length;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
	                return 2 * n;case "hex":
	                return n >>> 1;case "base64":
	                return $(e).length;default:
	                if (r) return q(e).length;t = ("" + t).toLowerCase(), r = !0;}
	          }
	        }function y(e, t, n) {
	          var r = !1;if ((void 0 === t || 0 > t) && (t = 0), t > this.length) return "";if ((void 0 === n || n > this.length) && (n = this.length), 0 >= n) return "";if (n >>>= 0, t >>>= 0, t >= n) return "";for (e || (e = "utf8");;) {
	            switch (e) {case "hex":
	                return I(this, t, n);case "utf8":case "utf-8":
	                return N(this, t, n);case "ascii":
	                return E(this, t, n);case "binary":
	                return O(this, t, n);case "base64":
	                return M(this, t, n);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
	                return P(this, t, n);default:
	                if (r) throw new TypeError("Unknown encoding: " + e);e = (e + "").toLowerCase(), r = !0;}
	          }
	        }function x(e, t, n) {
	          var r = e[t];e[t] = e[n], e[n] = r;
	        }function b(e, t, n, r) {
	          function i(e, t) {
	            return 1 === o ? e[t] : e.readUInt16BE(t * o);
	          }var o = 1,
	              a = e.length,
	              l = t.length;if (void 0 !== r && (r = String(r).toLowerCase(), "ucs2" === r || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
	            if (e.length < 2 || t.length < 2) return -1;o = 2, a /= 2, l /= 2, n /= 2;
	          }for (var s = -1, c = 0; a > n + c; c++) {
	            if (i(e, n + c) === i(t, -1 === s ? 0 : c - s)) {
	              if (-1 === s && (s = c), c - s + 1 === l) return (n + s) * o;
	            } else -1 !== s && (c -= c - s), s = -1;
	          }return -1;
	        }function w(e, t, n, r) {
	          n = Number(n) || 0;var i = e.length - n;r ? (r = Number(r), r > i && (r = i)) : r = i;var o = t.length;if (o % 2 !== 0) throw new Error("Invalid hex string");r > o / 2 && (r = o / 2);for (var a = 0; r > a; a++) {
	            var l = parseInt(t.substr(2 * a, 2), 16);if (isNaN(l)) return a;e[n + a] = l;
	          }return a;
	        }function k(e, t, n, r) {
	          return V(q(t, e.length - n), e, n, r);
	        }function S(e, t, n, r) {
	          return V(G(t), e, n, r);
	        }function C(e, t, n, r) {
	          return S(e, t, n, r);
	        }function L(e, t, n, r) {
	          return V($(t), e, n, r);
	        }function T(e, t, n, r) {
	          return V(Y(t, e.length - n), e, n, r);
	        }function M(e, t, n) {
	          return 0 === t && n === e.length ? X.fromByteArray(e) : X.fromByteArray(e.slice(t, n));
	        }function N(e, t, n) {
	          n = Math.min(e.length, n);for (var r = [], i = t; n > i;) {
	            var o = e[i],
	                a = null,
	                l = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;if (n >= i + l) {
	              var s, c, u, f;switch (l) {case 1:
	                  128 > o && (a = o);break;case 2:
	                  s = e[i + 1], 128 === (192 & s) && (f = (31 & o) << 6 | 63 & s, f > 127 && (a = f));break;case 3:
	                  s = e[i + 1], c = e[i + 2], 128 === (192 & s) && 128 === (192 & c) && (f = (15 & o) << 12 | (63 & s) << 6 | 63 & c, f > 2047 && (55296 > f || f > 57343) && (a = f));break;case 4:
	                  s = e[i + 1], c = e[i + 2], u = e[i + 3], 128 === (192 & s) && 128 === (192 & c) && 128 === (192 & u) && (f = (15 & o) << 18 | (63 & s) << 12 | (63 & c) << 6 | 63 & u, f > 65535 && 1114112 > f && (a = f));}
	            }null === a ? (a = 65533, l = 1) : a > 65535 && (a -= 65536, r.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), r.push(a), i += l;
	          }return A(r);
	        }function A(e) {
	          var t = e.length;if (Q >= t) return String.fromCharCode.apply(String, e);for (var n = "", r = 0; t > r;) {
	            n += String.fromCharCode.apply(String, e.slice(r, r += Q));
	          }return n;
	        }function E(e, t, n) {
	          var r = "";n = Math.min(e.length, n);for (var i = t; n > i; i++) {
	            r += String.fromCharCode(127 & e[i]);
	          }return r;
	        }function O(e, t, n) {
	          var r = "";n = Math.min(e.length, n);for (var i = t; n > i; i++) {
	            r += String.fromCharCode(e[i]);
	          }return r;
	        }function I(e, t, n) {
	          var r = e.length;(!t || 0 > t) && (t = 0), (!n || 0 > n || n > r) && (n = r);for (var i = "", o = t; n > o; o++) {
	            i += U(e[o]);
	          }return i;
	        }function P(e, t, n) {
	          for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) {
	            i += String.fromCharCode(r[o] + 256 * r[o + 1]);
	          }return i;
	        }function R(e, t, n) {
	          if (e % 1 !== 0 || 0 > e) throw new RangeError("offset is not uint");if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
	        }function D(e, t, n, r, i, o) {
	          if (!a.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');if (t > i || o > t) throw new RangeError('"value" argument is out of bounds');if (n + r > e.length) throw new RangeError("Index out of range");
	        }function H(e, t, n, r) {
	          0 > t && (t = 65535 + t + 1);for (var i = 0, o = Math.min(e.length - n, 2); o > i; i++) {
	            e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i);
	          }
	        }function W(e, t, n, r) {
	          0 > t && (t = 4294967295 + t + 1);for (var i = 0, o = Math.min(e.length - n, 4); o > i; i++) {
	            e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255;
	          }
	        }function B(e, t, n, r, i, o) {
	          if (n + r > e.length) throw new RangeError("Index out of range");if (0 > n) throw new RangeError("Index out of range");
	        }function _(e, t, n, r, i) {
	          return i || B(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), Z.write(e, t, n, r, 23, 4), n + 4;
	        }function F(e, t, n, r, i) {
	          return i || B(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), Z.write(e, t, n, r, 52, 8), n + 8;
	        }function z(e) {
	          if (e = j(e).replace(ee, ""), e.length < 2) return "";for (; e.length % 4 !== 0;) {
	            e += "=";
	          }return e;
	        }function j(e) {
	          return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
	        }function U(e) {
	          return 16 > e ? "0" + e.toString(16) : e.toString(16);
	        }function q(e, t) {
	          t = t || 1 / 0;for (var n, r = e.length, i = null, o = [], a = 0; r > a; a++) {
	            if (n = e.charCodeAt(a), n > 55295 && 57344 > n) {
	              if (!i) {
	                if (n > 56319) {
	                  (t -= 3) > -1 && o.push(239, 191, 189);continue;
	                }if (a + 1 === r) {
	                  (t -= 3) > -1 && o.push(239, 191, 189);continue;
	                }i = n;continue;
	              }if (56320 > n) {
	                (t -= 3) > -1 && o.push(239, 191, 189), i = n;continue;
	              }n = (i - 55296 << 10 | n - 56320) + 65536;
	            } else i && (t -= 3) > -1 && o.push(239, 191, 189);if (i = null, 128 > n) {
	              if ((t -= 1) < 0) break;o.push(n);
	            } else if (2048 > n) {
	              if ((t -= 2) < 0) break;o.push(n >> 6 | 192, 63 & n | 128);
	            } else if (65536 > n) {
	              if ((t -= 3) < 0) break;o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
	            } else {
	              if (!(1114112 > n)) throw new Error("Invalid code point");if ((t -= 4) < 0) break;o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
	            }
	          }return o;
	        }function G(e) {
	          for (var t = [], n = 0; n < e.length; n++) {
	            t.push(255 & e.charCodeAt(n));
	          }return t;
	        }function Y(e, t) {
	          for (var n, r, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); a++) {
	            n = e.charCodeAt(a), r = n >> 8, i = n % 256, o.push(i), o.push(r);
	          }return o;
	        }function $(e) {
	          return X.toByteArray(z(e));
	        }function V(e, t, n, r) {
	          for (var i = 0; r > i && !(i + n >= t.length || i >= e.length); i++) {
	            t[i + n] = e[i];
	          }return i;
	        }function K(e) {
	          return e !== e;
	        }var X = e("base64-js"),
	            Z = e("ieee754"),
	            J = e("isarray");n.Buffer = a, n.SlowBuffer = g, n.INSPECT_MAX_BYTES = 50, a.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : r(), n.kMaxLength = i(), a.poolSize = 8192, a._augment = function (e) {
	          return e.__proto__ = a.prototype, e;
	        }, a.from = function (e, t, n) {
	          return l(null, e, t, n);
	        }, a.TYPED_ARRAY_SUPPORT && (a.prototype.__proto__ = Uint8Array.prototype, a.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, { value: null, configurable: !0 })), a.alloc = function (e, t, n) {
	          return c(null, e, t, n);
	        }, a.allocUnsafe = function (e) {
	          return u(null, e);
	        }, a.allocUnsafeSlow = function (e) {
	          return u(null, e);
	        }, a.isBuffer = function (e) {
	          return !(null == e || !e._isBuffer);
	        }, a.compare = function (e, t) {
	          if (!a.isBuffer(e) || !a.isBuffer(t)) throw new TypeError("Arguments must be Buffers");if (e === t) return 0;for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); o > i; ++i) {
	            if (e[i] !== t[i]) {
	              n = e[i], r = t[i];break;
	            }
	          }return r > n ? -1 : n > r ? 1 : 0;
	        }, a.isEncoding = function (e) {
	          switch (String(e).toLowerCase()) {case "hex":case "utf8":case "utf-8":case "ascii":case "binary":case "base64":case "raw":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
	              return !0;default:
	              return !1;}
	        }, a.concat = function (e, t) {
	          if (!J(e)) throw new TypeError('"list" argument must be an Array of Buffers');if (0 === e.length) return a.alloc(0);var n;if (void 0 === t) for (t = 0, n = 0; n < e.length; n++) {
	            t += e[n].length;
	          }var r = a.allocUnsafe(t),
	              i = 0;for (n = 0; n < e.length; n++) {
	            var o = e[n];if (!a.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');o.copy(r, i), i += o.length;
	          }return r;
	        }, a.byteLength = v, a.prototype._isBuffer = !0, a.prototype.swap16 = function () {
	          var e = this.length;if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");for (var t = 0; e > t; t += 2) {
	            x(this, t, t + 1);
	          }return this;
	        }, a.prototype.swap32 = function () {
	          var e = this.length;if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");for (var t = 0; e > t; t += 4) {
	            x(this, t, t + 3), x(this, t + 1, t + 2);
	          }return this;
	        }, a.prototype.toString = function () {
	          var e = 0 | this.length;return 0 === e ? "" : 0 === arguments.length ? N(this, 0, e) : y.apply(this, arguments);
	        }, a.prototype.equals = function (e) {
	          if (!a.isBuffer(e)) throw new TypeError("Argument must be a Buffer");return this === e ? !0 : 0 === a.compare(this, e);
	        }, a.prototype.inspect = function () {
	          var e = "",
	              t = n.INSPECT_MAX_BYTES;return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">";
	        }, a.prototype.compare = function (e, t, n, r, i) {
	          if (!a.isBuffer(e)) throw new TypeError("Argument must be a Buffer");if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), 0 > t || n > e.length || 0 > r || i > this.length) throw new RangeError("out of range index");if (r >= i && t >= n) return 0;if (r >= i) return -1;if (t >= n) return 1;if (t >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === e) return 0;for (var o = i - r, l = n - t, s = Math.min(o, l), c = this.slice(r, i), u = e.slice(t, n), f = 0; s > f; ++f) {
	            if (c[f] !== u[f]) {
	              o = c[f], l = u[f];break;
	            }
	          }return l > o ? -1 : o > l ? 1 : 0;
	        }, a.prototype.indexOf = function (e, t, n) {
	          if ("string" == typeof t ? (n = t, t = 0) : t > 2147483647 ? t = 2147483647 : -2147483648 > t && (t = -2147483648), t >>= 0, 0 === this.length) return -1;if (t >= this.length) return -1;if (0 > t && (t = Math.max(this.length + t, 0)), "string" == typeof e && (e = a.from(e, n)), a.isBuffer(e)) return 0 === e.length ? -1 : b(this, e, t, n);if ("number" == typeof e) return a.TYPED_ARRAY_SUPPORT && "function" === Uint8Array.prototype.indexOf ? Uint8Array.prototype.indexOf.call(this, e, t) : b(this, [e], t, n);throw new TypeError("val must be string, number or Buffer");
	        }, a.prototype.includes = function (e, t, n) {
	          return -1 !== this.indexOf(e, t, n);
	        }, a.prototype.write = function (e, t, n, r) {
	          if (void 0 === t) r = "utf8", n = this.length, t = 0;else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;else {
	            if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t = 0 | t, isFinite(n) ? (n = 0 | n, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
	          }var i = this.length - t;if ((void 0 === n || n > i) && (n = i), e.length > 0 && (0 > n || 0 > t) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");r || (r = "utf8");for (var o = !1;;) {
	            switch (r) {case "hex":
	                return w(this, e, t, n);case "utf8":case "utf-8":
	                return k(this, e, t, n);case "ascii":
	                return S(this, e, t, n);case "binary":
	                return C(this, e, t, n);case "base64":
	                return L(this, e, t, n);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
	                return T(this, e, t, n);default:
	                if (o) throw new TypeError("Unknown encoding: " + r);r = ("" + r).toLowerCase(), o = !0;}
	          }
	        }, a.prototype.toJSON = function () {
	          return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
	        };var Q = 4096;a.prototype.slice = function (e, t) {
	          var n = this.length;e = ~~e, t = void 0 === t ? n : ~~t, 0 > e ? (e += n, 0 > e && (e = 0)) : e > n && (e = n), 0 > t ? (t += n, 0 > t && (t = 0)) : t > n && (t = n), e > t && (t = e);var r;if (a.TYPED_ARRAY_SUPPORT) r = this.subarray(e, t), r.__proto__ = a.prototype;else {
	            var i = t - e;r = new a(i, void 0);for (var o = 0; i > o; o++) {
	              r[o] = this[o + e];
	            }
	          }return r;
	        }, a.prototype.readUIntLE = function (e, t, n) {
	          e = 0 | e, t = 0 | t, n || R(e, t, this.length);for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) {
	            r += this[e + o] * i;
	          }return r;
	        }, a.prototype.readUIntBE = function (e, t, n) {
	          e = 0 | e, t = 0 | t, n || R(e, t, this.length);for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) {
	            r += this[e + --t] * i;
	          }return r;
	        }, a.prototype.readUInt8 = function (e, t) {
	          return t || R(e, 1, this.length), this[e];
	        }, a.prototype.readUInt16LE = function (e, t) {
	          return t || R(e, 2, this.length), this[e] | this[e + 1] << 8;
	        }, a.prototype.readUInt16BE = function (e, t) {
	          return t || R(e, 2, this.length), this[e] << 8 | this[e + 1];
	        }, a.prototype.readUInt32LE = function (e, t) {
	          return t || R(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
	        }, a.prototype.readUInt32BE = function (e, t) {
	          return t || R(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	        }, a.prototype.readIntLE = function (e, t, n) {
	          e = 0 | e, t = 0 | t, n || R(e, t, this.length);for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) {
	            r += this[e + o] * i;
	          }return i *= 128, r >= i && (r -= Math.pow(2, 8 * t)), r;
	        }, a.prototype.readIntBE = function (e, t, n) {
	          e = 0 | e, t = 0 | t, n || R(e, t, this.length);for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);) {
	            o += this[e + --r] * i;
	          }return i *= 128, o >= i && (o -= Math.pow(2, 8 * t)), o;
	        }, a.prototype.readInt8 = function (e, t) {
	          return t || R(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
	        }, a.prototype.readInt16LE = function (e, t) {
	          t || R(e, 2, this.length);var n = this[e] | this[e + 1] << 8;return 32768 & n ? 4294901760 | n : n;
	        }, a.prototype.readInt16BE = function (e, t) {
	          t || R(e, 2, this.length);var n = this[e + 1] | this[e] << 8;return 32768 & n ? 4294901760 | n : n;
	        }, a.prototype.readInt32LE = function (e, t) {
	          return t || R(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	        }, a.prototype.readInt32BE = function (e, t) {
	          return t || R(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	        }, a.prototype.readFloatLE = function (e, t) {
	          return t || R(e, 4, this.length), Z.read(this, e, !0, 23, 4);
	        }, a.prototype.readFloatBE = function (e, t) {
	          return t || R(e, 4, this.length), Z.read(this, e, !1, 23, 4);
	        }, a.prototype.readDoubleLE = function (e, t) {
	          return t || R(e, 8, this.length), Z.read(this, e, !0, 52, 8);
	        }, a.prototype.readDoubleBE = function (e, t) {
	          return t || R(e, 8, this.length), Z.read(this, e, !1, 52, 8);
	        }, a.prototype.writeUIntLE = function (e, t, n, r) {
	          if (e = +e, t = 0 | t, n = 0 | n, !r) {
	            var i = Math.pow(2, 8 * n) - 1;D(this, e, t, n, i, 0);
	          }var o = 1,
	              a = 0;for (this[t] = 255 & e; ++a < n && (o *= 256);) {
	            this[t + a] = e / o & 255;
	          }return t + n;
	        }, a.prototype.writeUIntBE = function (e, t, n, r) {
	          if (e = +e, t = 0 | t, n = 0 | n, !r) {
	            var i = Math.pow(2, 8 * n) - 1;D(this, e, t, n, i, 0);
	          }var o = n - 1,
	              a = 1;for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) {
	            this[t + o] = e / a & 255;
	          }return t + n;
	        }, a.prototype.writeUInt8 = function (e, t, n) {
	          return e = +e, t = 0 | t, n || D(this, e, t, 1, 255, 0), a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1;
	        }, a.prototype.writeUInt16LE = function (e, t, n) {
	          return e = +e, t = 0 | t, n || D(this, e, t, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : H(this, e, t, !0), t + 2;
	        }, a.prototype.writeUInt16BE = function (e, t, n) {
	          return e = +e, t = 0 | t, n || D(this, e, t, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : H(this, e, t, !1), t + 2;
	        }, a.prototype.writeUInt32LE = function (e, t, n) {
	          return e = +e, t = 0 | t, n || D(this, e, t, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : W(this, e, t, !0), t + 4;
	        }, a.prototype.writeUInt32BE = function (e, t, n) {
	          return e = +e, t = 0 | t, n || D(this, e, t, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : W(this, e, t, !1), t + 4;
	        }, a.prototype.writeIntLE = function (e, t, n, r) {
	          if (e = +e, t = 0 | t, !r) {
	            var i = Math.pow(2, 8 * n - 1);D(this, e, t, n, i - 1, -i);
	          }var o = 0,
	              a = 1,
	              l = 0;for (this[t] = 255 & e; ++o < n && (a *= 256);) {
	            0 > e && 0 === l && 0 !== this[t + o - 1] && (l = 1), this[t + o] = (e / a >> 0) - l & 255;
	          }return t + n;
	        }, a.prototype.writeIntBE = function (e, t, n, r) {
	          if (e = +e, t = 0 | t, !r) {
	            var i = Math.pow(2, 8 * n - 1);D(this, e, t, n, i - 1, -i);
	          }var o = n - 1,
	              a = 1,
	              l = 0;for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) {
	            0 > e && 0 === l && 0 !== this[t + o + 1] && (l = 1), this[t + o] = (e / a >> 0) - l & 255;
	          }return t + n;
	        }, a.prototype.writeInt8 = function (e, t, n) {
	          return e = +e, t = 0 | t, n || D(this, e, t, 1, 127, -128), a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), 0 > e && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
	        }, a.prototype.writeInt16LE = function (e, t, n) {
	          return e = +e, t = 0 | t, n || D(this, e, t, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : H(this, e, t, !0), t + 2;
	        }, a.prototype.writeInt16BE = function (e, t, n) {
	          return e = +e, t = 0 | t, n || D(this, e, t, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : H(this, e, t, !1), t + 2;
	        }, a.prototype.writeInt32LE = function (e, t, n) {
	          return e = +e, t = 0 | t, n || D(this, e, t, 4, 2147483647, -2147483648), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : W(this, e, t, !0), t + 4;
	        }, a.prototype.writeInt32BE = function (e, t, n) {
	          return e = +e, t = 0 | t, n || D(this, e, t, 4, 2147483647, -2147483648), 0 > e && (e = 4294967295 + e + 1), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : W(this, e, t, !1), t + 4;
	        }, a.prototype.writeFloatLE = function (e, t, n) {
	          return _(this, e, t, !0, n);
	        }, a.prototype.writeFloatBE = function (e, t, n) {
	          return _(this, e, t, !1, n);
	        }, a.prototype.writeDoubleLE = function (e, t, n) {
	          return F(this, e, t, !0, n);
	        }, a.prototype.writeDoubleBE = function (e, t, n) {
	          return F(this, e, t, !1, n);
	        }, a.prototype.copy = function (e, t, n, r) {
	          if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && n > r && (r = n), r === n) return 0;if (0 === e.length || 0 === this.length) return 0;if (0 > t) throw new RangeError("targetStart out of bounds");if (0 > n || n >= this.length) throw new RangeError("sourceStart out of bounds");if (0 > r) throw new RangeError("sourceEnd out of bounds");r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);var i,
	              o = r - n;if (this === e && t > n && r > t) for (i = o - 1; i >= 0; i--) {
	            e[i + t] = this[i + n];
	          } else if (1e3 > o || !a.TYPED_ARRAY_SUPPORT) for (i = 0; o > i; i++) {
	            e[i + t] = this[i + n];
	          } else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);return o;
	        }, a.prototype.fill = function (e, t, n, r) {
	          if ("string" == typeof e) {
	            if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
	              var i = e.charCodeAt(0);256 > i && (e = i);
	            }if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");if ("string" == typeof r && !a.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
	          } else "number" == typeof e && (e = 255 & e);if (0 > t || this.length < t || this.length < n) throw new RangeError("Out of range index");if (t >= n) return this;t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0);var o;if ("number" == typeof e) for (o = t; n > o; o++) {
	            this[o] = e;
	          } else {
	            var l = a.isBuffer(e) ? e : q(new a(e, r).toString()),
	                s = l.length;for (o = 0; n - t > o; o++) {
	              this[o + t] = l[o % s];
	            }
	          }return this;
	        };var ee = /[^+\/0-9A-Za-z-_]/g;
	      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
	    }, { "base64-js": 1, ieee754: 15, isarray: 16 }], 4: [function (e, t, n) {
	      "use strict";
	      function r(e) {
	        return e = e || {}, "function" != typeof e.codeMirrorInstance || "function" != typeof e.codeMirrorInstance.defineMode ? void console.log("CodeMirror Spell Checker: You must provide an instance of CodeMirror via the option `codeMirrorInstance`") : (String.prototype.includes || (String.prototype.includes = function () {
	          return -1 !== String.prototype.indexOf.apply(this, arguments);
	        }), void e.codeMirrorInstance.defineMode("spell-checker", function (t) {
	          if (!r.aff_loading) {
	            r.aff_loading = !0;var n = new XMLHttpRequest();n.open("GET", "https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.aff", !0), n.onload = function () {
	              4 === n.readyState && 200 === n.status && (r.aff_data = n.responseText, r.num_loaded++, 2 == r.num_loaded && (r.typo = new i("en_US", r.aff_data, r.dic_data, { platform: "any" })));
	            }, n.send(null);
	          }if (!r.dic_loading) {
	            r.dic_loading = !0;var o = new XMLHttpRequest();o.open("GET", "https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.dic", !0), o.onload = function () {
	              4 === o.readyState && 200 === o.status && (r.dic_data = o.responseText, r.num_loaded++, 2 == r.num_loaded && (r.typo = new i("en_US", r.aff_data, r.dic_data, { platform: "any" })));
	            }, o.send(null);
	          }var a = '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~ ',
	              l = { token: function token(e) {
	              var t = e.peek(),
	                  n = "";if (a.includes(t)) return e.next(), null;for (; null != (t = e.peek()) && !a.includes(t);) {
	                n += t, e.next();
	              }return r.typo && !r.typo.check(n) ? "spell-error" : null;
	            } },
	              s = e.codeMirrorInstance.getMode(t, t.backdrop || "text/plain");return e.codeMirrorInstance.overlayMode(s, l, !0);
	        }));
	      }var i = e("typo-js");r.num_loaded = 0, r.aff_loading = !1, r.dic_loading = !1, r.aff_data = "", r.dic_data = "", r.typo, t.exports = r;
	    }, { "typo-js": 18 }], 5: [function (t, n, r) {
	      !function (i) {
	        "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? i(t("../../lib/codemirror")) : "function" == typeof e && e.amd ? e(["../../lib/codemirror"], i) : i(CodeMirror);
	      }(function (e) {
	        "use strict";
	        function t(e) {
	          var t = e.getWrapperElement();e.state.fullScreenRestore = { scrollTop: window.pageYOffset, scrollLeft: window.pageXOffset, width: t.style.width, height: t.style.height }, t.style.width = "", t.style.height = "auto", t.className += " CodeMirror-fullscreen", document.documentElement.style.overflow = "hidden", e.refresh();
	        }function n(e) {
	          var t = e.getWrapperElement();t.className = t.className.replace(/\s*CodeMirror-fullscreen\b/, ""), document.documentElement.style.overflow = "";var n = e.state.fullScreenRestore;t.style.width = n.width, t.style.height = n.height, window.scrollTo(n.scrollLeft, n.scrollTop), e.refresh();
	        }e.defineOption("fullScreen", !1, function (r, i, o) {
	          o == e.Init && (o = !1), !o != !i && (i ? t(r) : n(r));
	        });
	      });
	    }, { "../../lib/codemirror": 10 }], 6: [function (t, n, r) {
	      !function (i) {
	        "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? i(t("../../lib/codemirror")) : "function" == typeof e && e.amd ? e(["../../lib/codemirror"], i) : i(CodeMirror);
	      }(function (e) {
	        function t(e) {
	          e.state.placeholder && (e.state.placeholder.parentNode.removeChild(e.state.placeholder), e.state.placeholder = null);
	        }function n(e) {
	          t(e);var n = e.state.placeholder = document.createElement("pre");n.style.cssText = "height: 0; overflow: visible", n.className = "CodeMirror-placeholder";var r = e.getOption("placeholder");"string" == typeof r && (r = document.createTextNode(r)), n.appendChild(r), e.display.lineSpace.insertBefore(n, e.display.lineSpace.firstChild);
	        }function r(e) {
	          o(e) && n(e);
	        }function i(e) {
	          var r = e.getWrapperElement(),
	              i = o(e);r.className = r.className.replace(" CodeMirror-empty", "") + (i ? " CodeMirror-empty" : ""), i ? n(e) : t(e);
	        }function o(e) {
	          return 1 === e.lineCount() && "" === e.getLine(0);
	        }e.defineOption("placeholder", "", function (n, o, a) {
	          var l = a && a != e.Init;if (o && !l) n.on("blur", r), n.on("change", i), n.on("swapDoc", i), i(n);else if (!o && l) {
	            n.off("blur", r), n.off("change", i), n.off("swapDoc", i), t(n);var s = n.getWrapperElement();s.className = s.className.replace(" CodeMirror-empty", "");
	          }o && !n.hasFocus() && r(n);
	        });
	      });
	    }, { "../../lib/codemirror": 10 }], 7: [function (t, n, r) {
	      !function (i) {
	        "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? i(t("../../lib/codemirror")) : "function" == typeof e && e.amd ? e(["../../lib/codemirror"], i) : i(CodeMirror);
	      }(function (e) {
	        "use strict";
	        var t = /^(\s*)(>[> ]*|[*+-]\s|(\d+)([.)]))(\s*)/,
	            n = /^(\s*)(>[> ]*|[*+-]|(\d+)[.)])(\s*)$/,
	            r = /[*+-]\s/;e.commands.newlineAndIndentContinueMarkdownList = function (i) {
	          if (i.getOption("disableInput")) return e.Pass;for (var o = i.listSelections(), a = [], l = 0; l < o.length; l++) {
	            var s = o[l].head,
	                c = i.getStateAfter(s.line),
	                u = c.list !== !1,
	                f = 0 !== c.quote,
	                h = i.getLine(s.line),
	                d = t.exec(h);if (!o[l].empty() || !u && !f || !d) return void i.execCommand("newlineAndIndent");if (n.test(h)) i.replaceRange("", { line: s.line, ch: 0 }, { line: s.line, ch: s.ch + 1 }), a[l] = "\n";else {
	              var p = d[1],
	                  m = d[5],
	                  g = r.test(d[2]) || d[2].indexOf(">") >= 0 ? d[2] : parseInt(d[3], 10) + 1 + d[4];a[l] = "\n" + p + g + m;
	            }
	          }i.replaceSelections(a);
	        };
	      });
	    }, { "../../lib/codemirror": 10 }], 8: [function (t, n, r) {
	      !function (i) {
	        "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? i(t("../../lib/codemirror")) : "function" == typeof e && e.amd ? e(["../../lib/codemirror"], i) : i(CodeMirror);
	      }(function (e) {
	        "use strict";
	        e.overlayMode = function (t, n, r) {
	          return { startState: function startState() {
	              return { base: e.startState(t), overlay: e.startState(n), basePos: 0, baseCur: null, overlayPos: 0, overlayCur: null, streamSeen: null };
	            }, copyState: function copyState(r) {
	              return { base: e.copyState(t, r.base), overlay: e.copyState(n, r.overlay), basePos: r.basePos, baseCur: null, overlayPos: r.overlayPos, overlayCur: null };
	            }, token: function token(e, i) {
	              return (e != i.streamSeen || Math.min(i.basePos, i.overlayPos) < e.start) && (i.streamSeen = e, i.basePos = i.overlayPos = e.start), e.start == i.basePos && (i.baseCur = t.token(e, i.base), i.basePos = e.pos), e.start == i.overlayPos && (e.pos = e.start, i.overlayCur = n.token(e, i.overlay), i.overlayPos = e.pos), e.pos = Math.min(i.basePos, i.overlayPos), null == i.overlayCur ? i.baseCur : null != i.baseCur && i.overlay.combineTokens || r && null == i.overlay.combineTokens ? i.baseCur + " " + i.overlayCur : i.overlayCur;
	            }, indent: t.indent && function (e, n) {
	              return t.indent(e.base, n);
	            }, electricChars: t.electricChars, innerMode: function innerMode(e) {
	              return { state: e.base, mode: t };
	            }, blankLine: function blankLine(e) {
	              t.blankLine && t.blankLine(e.base), n.blankLine && n.blankLine(e.overlay);
	            } };
	        };
	      });
	    }, { "../../lib/codemirror": 10 }], 9: [function (t, n, r) {
	      !function (i) {
	        "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? i(t("../../lib/codemirror")) : "function" == typeof e && e.amd ? e(["../../lib/codemirror"], i) : i(CodeMirror);
	      }(function (e) {
	        "use strict";
	        function t(e) {
	          e.operation(function () {
	            a(e);
	          });
	        }function n(e) {
	          e.state.markedSelection.length && e.operation(function () {
	            i(e);
	          });
	        }function r(e, t, n, r) {
	          if (0 != c(t, n)) for (var i = e.state.markedSelection, o = e.state.markedSelectionStyle, a = t.line;;) {
	            var u = a == t.line ? t : s(a, 0),
	                f = a + l,
	                h = f >= n.line,
	                d = h ? n : s(f, 0),
	                p = e.markText(u, d, { className: o });if (null == r ? i.push(p) : i.splice(r++, 0, p), h) break;a = f;
	          }
	        }function i(e) {
	          for (var t = e.state.markedSelection, n = 0; n < t.length; ++n) {
	            t[n].clear();
	          }t.length = 0;
	        }function o(e) {
	          i(e);for (var t = e.listSelections(), n = 0; n < t.length; n++) {
	            r(e, t[n].from(), t[n].to());
	          }
	        }function a(e) {
	          if (!e.somethingSelected()) return i(e);if (e.listSelections().length > 1) return o(e);var t = e.getCursor("start"),
	              n = e.getCursor("end"),
	              a = e.state.markedSelection;if (!a.length) return r(e, t, n);var s = a[0].find(),
	              u = a[a.length - 1].find();if (!s || !u || n.line - t.line < l || c(t, u.to) >= 0 || c(n, s.from) <= 0) return o(e);for (; c(t, s.from) > 0;) {
	            a.shift().clear(), s = a[0].find();
	          }for (c(t, s.from) < 0 && (s.to.line - t.line < l ? (a.shift().clear(), r(e, t, s.to, 0)) : r(e, t, s.from, 0)); c(n, u.to) < 0;) {
	            a.pop().clear(), u = a[a.length - 1].find();
	          }c(n, u.to) > 0 && (n.line - u.from.line < l ? (a.pop().clear(), r(e, u.from, n)) : r(e, u.to, n));
	        }e.defineOption("styleSelectedText", !1, function (r, a, l) {
	          var s = l && l != e.Init;a && !s ? (r.state.markedSelection = [], r.state.markedSelectionStyle = "string" == typeof a ? a : "CodeMirror-selectedtext", o(r), r.on("cursorActivity", t), r.on("change", n)) : !a && s && (r.off("cursorActivity", t), r.off("change", n), i(r), r.state.markedSelection = r.state.markedSelectionStyle = null);
	        });var l = 8,
	            s = e.Pos,
	            c = e.cmpPos;
	      });
	    }, { "../../lib/codemirror": 10 }], 10: [function (t, n, r) {
	      !function (t) {
	        if ("object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n))) n.exports = t();else {
	          if ("function" == typeof e && e.amd) return e([], t);(this || window).CodeMirror = t();
	        }
	      }(function () {
	        "use strict";
	        function e(n, r) {
	          if (!(this instanceof e)) return new e(n, r);this.options = r = r ? Wi(r) : {}, Wi(ea, r, !1), d(r);var i = r.value;"string" == typeof i && (i = new Ca(i, r.mode, null, r.lineSeparator)), this.doc = i;var o = new e.inputStyles[r.inputStyle](this),
	              a = this.display = new t(n, i, o);a.wrapper.CodeMirror = this, c(this), l(this), r.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), r.autofocus && !Ao && a.input.focus(), v(this), this.state = { keyMaps: [], overlays: [], modeGen: 0, overwrite: !1, delayingBlurEvent: !1, focused: !1, suppressEdits: !1, pasteIncoming: !1, cutIncoming: !1, selectingText: !1, draggingText: !1, highlight: new Ei(), keySeq: null, specialChars: null };var s = this;xo && 11 > bo && setTimeout(function () {
	            s.display.input.reset(!0);
	          }, 20), jt(this), Ki(), bt(this), this.curOp.forceUpdate = !0, Xr(this, i), r.autofocus && !Ao || s.hasFocus() ? setTimeout(Bi(vn, this), 20) : yn(this);for (var u in ta) {
	            ta.hasOwnProperty(u) && ta[u](this, r[u], na);
	          }k(this), r.finishInit && r.finishInit(this);for (var f = 0; f < aa.length; ++f) {
	            aa[f](this);
	          }kt(this), wo && r.lineWrapping && "optimizelegibility" == getComputedStyle(a.lineDiv).textRendering && (a.lineDiv.style.textRendering = "auto");
	        }function t(e, t, n) {
	          var r = this;this.input = n, r.scrollbarFiller = ji("div", null, "CodeMirror-scrollbar-filler"), r.scrollbarFiller.setAttribute("cm-not-content", "true"), r.gutterFiller = ji("div", null, "CodeMirror-gutter-filler"), r.gutterFiller.setAttribute("cm-not-content", "true"), r.lineDiv = ji("div", null, "CodeMirror-code"), r.selectionDiv = ji("div", null, null, "position: relative; z-index: 1"), r.cursorDiv = ji("div", null, "CodeMirror-cursors"), r.measure = ji("div", null, "CodeMirror-measure"), r.lineMeasure = ji("div", null, "CodeMirror-measure"), r.lineSpace = ji("div", [r.measure, r.lineMeasure, r.selectionDiv, r.cursorDiv, r.lineDiv], null, "position: relative; outline: none"), r.mover = ji("div", [ji("div", [r.lineSpace], "CodeMirror-lines")], null, "position: relative"), r.sizer = ji("div", [r.mover], "CodeMirror-sizer"), r.sizerWidth = null, r.heightForcer = ji("div", null, null, "position: absolute; height: " + Da + "px; width: 1px;"), r.gutters = ji("div", null, "CodeMirror-gutters"), r.lineGutter = null, r.scroller = ji("div", [r.sizer, r.heightForcer, r.gutters], "CodeMirror-scroll"), r.scroller.setAttribute("tabIndex", "-1"), r.wrapper = ji("div", [r.scrollbarFiller, r.gutterFiller, r.scroller], "CodeMirror"), xo && 8 > bo && (r.gutters.style.zIndex = -1, r.scroller.style.paddingRight = 0), wo || go && Ao || (r.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(r.wrapper) : e(r.wrapper)), r.viewFrom = r.viewTo = t.first, r.reportedViewFrom = r.reportedViewTo = t.first, r.view = [], r.renderedView = null, r.externalMeasured = null, r.viewOffset = 0, r.lastWrapHeight = r.lastWrapWidth = 0, r.updateLineNumbers = null, r.nativeBarWidth = r.barHeight = r.barWidth = 0, r.scrollbarsClipped = !1, r.lineNumWidth = r.lineNumInnerWidth = r.lineNumChars = null, r.alignWidgets = !1, r.cachedCharWidth = r.cachedTextHeight = r.cachedPaddingH = null, r.maxLine = null, r.maxLineLength = 0, r.maxLineChanged = !1, r.wheelDX = r.wheelDY = r.wheelStartX = r.wheelStartY = null, r.shift = !1, r.selForContextMenu = null, r.activeTouch = null, n.init(r);
	        }function n(t) {
	          t.doc.mode = e.getMode(t.options, t.doc.modeOption), r(t);
	        }function r(e) {
	          e.doc.iter(function (e) {
	            e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
	          }), e.doc.frontier = e.doc.first, _e(e, 100), e.state.modeGen++, e.curOp && Dt(e);
	        }function i(e) {
	          e.options.lineWrapping ? (Ja(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (Za(e.display.wrapper, "CodeMirror-wrap"), h(e)), a(e), Dt(e), lt(e), setTimeout(function () {
	            y(e);
	          }, 100);
	        }function o(e) {
	          var t = yt(e.display),
	              n = e.options.lineWrapping,
	              r = n && Math.max(5, e.display.scroller.clientWidth / xt(e.display) - 3);return function (i) {
	            if (kr(e.doc, i)) return 0;var o = 0;if (i.widgets) for (var a = 0; a < i.widgets.length; a++) {
	              i.widgets[a].height && (o += i.widgets[a].height);
	            }return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t;
	          };
	        }function a(e) {
	          var t = e.doc,
	              n = o(e);t.iter(function (e) {
	            var t = n(e);t != e.height && ei(e, t);
	          });
	        }function l(e) {
	          e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), lt(e);
	        }function s(e) {
	          c(e), Dt(e), setTimeout(function () {
	            w(e);
	          }, 20);
	        }function c(e) {
	          var t = e.display.gutters,
	              n = e.options.gutters;Ui(t);for (var r = 0; r < n.length; ++r) {
	            var i = n[r],
	                o = t.appendChild(ji("div", null, "CodeMirror-gutter " + i));"CodeMirror-linenumbers" == i && (e.display.lineGutter = o, o.style.width = (e.display.lineNumWidth || 1) + "px");
	          }t.style.display = r ? "" : "none", u(e);
	        }function u(e) {
	          var t = e.display.gutters.offsetWidth;e.display.sizer.style.marginLeft = t + "px";
	        }function f(e) {
	          if (0 == e.height) return 0;for (var t, n = e.text.length, r = e; t = mr(r);) {
	            var i = t.find(0, !0);r = i.from.line, n += i.from.ch - i.to.ch;
	          }for (r = e; t = gr(r);) {
	            var i = t.find(0, !0);n -= r.text.length - i.from.ch, r = i.to.line, n += r.text.length - i.to.ch;
	          }return n;
	        }function h(e) {
	          var t = e.display,
	              n = e.doc;t.maxLine = Zr(n, n.first), t.maxLineLength = f(t.maxLine), t.maxLineChanged = !0, n.iter(function (e) {
	            var n = f(e);n > t.maxLineLength && (t.maxLineLength = n, t.maxLine = e);
	          });
	        }function d(e) {
	          var t = Pi(e.gutters, "CodeMirror-linenumbers");-1 == t && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : t > -1 && !e.lineNumbers && (e.gutters = e.gutters.slice(0), e.gutters.splice(t, 1));
	        }function p(e) {
	          var t = e.display,
	              n = t.gutters.offsetWidth,
	              r = Math.round(e.doc.height + qe(e.display));return { clientHeight: t.scroller.clientHeight, viewHeight: t.wrapper.clientHeight, scrollWidth: t.scroller.scrollWidth, clientWidth: t.scroller.clientWidth, viewWidth: t.wrapper.clientWidth, barLeft: e.options.fixedGutter ? n : 0, docHeight: r, scrollHeight: r + Ye(e) + t.barHeight, nativeBarWidth: t.nativeBarWidth, gutterWidth: n };
	        }function m(e, t, n) {
	          this.cm = n;var r = this.vert = ji("div", [ji("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
	              i = this.horiz = ji("div", [ji("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");e(r), e(i), Ea(r, "scroll", function () {
	            r.clientHeight && t(r.scrollTop, "vertical");
	          }), Ea(i, "scroll", function () {
	            i.clientWidth && t(i.scrollLeft, "horizontal");
	          }), this.checkedZeroWidth = !1, xo && 8 > bo && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
	        }function g() {}function v(t) {
	          t.display.scrollbars && (t.display.scrollbars.clear(), t.display.scrollbars.addClass && Za(t.display.wrapper, t.display.scrollbars.addClass)), t.display.scrollbars = new e.scrollbarModel[t.options.scrollbarStyle](function (e) {
	            t.display.wrapper.insertBefore(e, t.display.scrollbarFiller), Ea(e, "mousedown", function () {
	              t.state.focused && setTimeout(function () {
	                t.display.input.focus();
	              }, 0);
	            }), e.setAttribute("cm-not-content", "true");
	          }, function (e, n) {
	            "horizontal" == n ? on(t, e) : rn(t, e);
	          }, t), t.display.scrollbars.addClass && Ja(t.display.wrapper, t.display.scrollbars.addClass);
	        }function y(e, t) {
	          t || (t = p(e));var n = e.display.barWidth,
	              r = e.display.barHeight;x(e, t);for (var i = 0; 4 > i && n != e.display.barWidth || r != e.display.barHeight; i++) {
	            n != e.display.barWidth && e.options.lineWrapping && O(e), x(e, p(e)), n = e.display.barWidth, r = e.display.barHeight;
	          }
	        }function x(e, t) {
	          var n = e.display,
	              r = n.scrollbars.update(t);n.sizer.style.paddingRight = (n.barWidth = r.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px", n.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = r.bottom + "px", n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = "";
	        }function b(e, t, n) {
	          var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;r = Math.floor(r - Ue(e));var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
	              o = ni(t, r),
	              a = ni(t, i);if (n && n.ensure) {
	            var l = n.ensure.from.line,
	                s = n.ensure.to.line;o > l ? (o = l, a = ni(t, ri(Zr(t, l)) + e.wrapper.clientHeight)) : Math.min(s, t.lastLine()) >= a && (o = ni(t, ri(Zr(t, s)) - e.wrapper.clientHeight), a = s);
	          }return { from: o, to: Math.max(a, o + 1) };
	        }function w(e) {
	          var t = e.display,
	              n = t.view;if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
	            for (var r = C(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + "px", a = 0; a < n.length; a++) {
	              if (!n[a].hidden) {
	                e.options.fixedGutter && n[a].gutter && (n[a].gutter.style.left = o);var l = n[a].alignable;if (l) for (var s = 0; s < l.length; s++) {
	                  l[s].style.left = o;
	                }
	              }
	            }e.options.fixedGutter && (t.gutters.style.left = r + i + "px");
	          }
	        }function k(e) {
	          if (!e.options.lineNumbers) return !1;var t = e.doc,
	              n = S(e.options, t.first + t.size - 1),
	              r = e.display;if (n.length != r.lineNumChars) {
	            var i = r.measure.appendChild(ji("div", [ji("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
	                o = i.firstChild.offsetWidth,
	                a = i.offsetWidth - o;return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(o, r.lineGutter.offsetWidth - a) + 1, r.lineNumWidth = r.lineNumInnerWidth + a, r.lineNumChars = r.lineNumInnerWidth ? n.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", u(e), !0;
	          }return !1;
	        }function S(e, t) {
	          return String(e.lineNumberFormatter(t + e.firstLineNumber));
	        }function C(e) {
	          return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
	        }function L(e, t, n) {
	          var r = e.display;this.viewport = t, this.visible = b(r, e.doc, t), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = $e(e), this.force = n, this.dims = P(e), this.events = [];
	        }function T(e) {
	          var t = e.display;!t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = Ye(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = Ye(e) + "px", t.scrollbarsClipped = !0);
	        }function M(e, t) {
	          var n = e.display,
	              r = e.doc;if (t.editorIsHidden) return Wt(e), !1;if (!t.force && t.visible.from >= n.viewFrom && t.visible.to <= n.viewTo && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) && n.renderedView == n.view && 0 == zt(e)) return !1;k(e) && (Wt(e), t.dims = P(e));var i = r.first + r.size,
	              o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
	              a = Math.min(i, t.visible.to + e.options.viewportMargin);n.viewFrom < o && o - n.viewFrom < 20 && (o = Math.max(r.first, n.viewFrom)), n.viewTo > a && n.viewTo - a < 20 && (a = Math.min(i, n.viewTo)), Wo && (o = br(e.doc, o), a = wr(e.doc, a));var l = o != n.viewFrom || a != n.viewTo || n.lastWrapHeight != t.wrapperHeight || n.lastWrapWidth != t.wrapperWidth;Ft(e, o, a), n.viewOffset = ri(Zr(e.doc, n.viewFrom)), e.display.mover.style.top = n.viewOffset + "px";var s = zt(e);if (!l && 0 == s && !t.force && n.renderedView == n.view && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)) return !1;var c = Gi();return s > 4 && (n.lineDiv.style.display = "none"), R(e, n.updateLineNumbers, t.dims), s > 4 && (n.lineDiv.style.display = ""), n.renderedView = n.view, c && Gi() != c && c.offsetHeight && c.focus(), Ui(n.cursorDiv), Ui(n.selectionDiv), n.gutters.style.height = n.sizer.style.minHeight = 0, l && (n.lastWrapHeight = t.wrapperHeight, n.lastWrapWidth = t.wrapperWidth, _e(e, 400)), n.updateLineNumbers = null, !0;
	        }function N(e, t) {
	          for (var n = t.viewport, r = !0; (r && e.options.lineWrapping && t.oldDisplayWidth != $e(e) || (n && null != n.top && (n = { top: Math.min(e.doc.height + qe(e.display) - Ve(e), n.top) }), t.visible = b(e.display, e.doc, n), !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && M(e, t); r = !1) {
	            O(e);var i = p(e);Re(e), y(e, i), E(e, i);
	          }t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo);
	        }function A(e, t) {
	          var n = new L(e, t);if (M(e, n)) {
	            O(e), N(e, n);var r = p(e);Re(e), y(e, r), E(e, r), n.finish();
	          }
	        }function E(e, t) {
	          e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + Ye(e) + "px";
	        }function O(e) {
	          for (var t = e.display, n = t.lineDiv.offsetTop, r = 0; r < t.view.length; r++) {
	            var i,
	                o = t.view[r];if (!o.hidden) {
	              if (xo && 8 > bo) {
	                var a = o.node.offsetTop + o.node.offsetHeight;i = a - n, n = a;
	              } else {
	                var l = o.node.getBoundingClientRect();i = l.bottom - l.top;
	              }var s = o.line.height - i;if (2 > i && (i = yt(t)), (s > .001 || -.001 > s) && (ei(o.line, i), I(o.line), o.rest)) for (var c = 0; c < o.rest.length; c++) {
	                I(o.rest[c]);
	              }
	            }
	          }
	        }function I(e) {
	          if (e.widgets) for (var t = 0; t < e.widgets.length; ++t) {
	            e.widgets[t].height = e.widgets[t].node.parentNode.offsetHeight;
	          }
	        }function P(e) {
	          for (var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, a = 0; o; o = o.nextSibling, ++a) {
	            n[e.options.gutters[a]] = o.offsetLeft + o.clientLeft + i, r[e.options.gutters[a]] = o.clientWidth;
	          }return { fixedPos: C(t), gutterTotalWidth: t.gutters.offsetWidth, gutterLeft: n, gutterWidth: r, wrapperWidth: t.wrapper.clientWidth };
	        }function R(e, t, n) {
	          function r(t) {
	            var n = t.nextSibling;return wo && Eo && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), n;
	          }for (var i = e.display, o = e.options.lineNumbers, a = i.lineDiv, l = a.firstChild, s = i.view, c = i.viewFrom, u = 0; u < s.length; u++) {
	            var f = s[u];if (f.hidden) ;else if (f.node && f.node.parentNode == a) {
	              for (; l != f.node;) {
	                l = r(l);
	              }var h = o && null != t && c >= t && f.lineNumber;f.changes && (Pi(f.changes, "gutter") > -1 && (h = !1), D(e, f, c, n)), h && (Ui(f.lineNumber), f.lineNumber.appendChild(document.createTextNode(S(e.options, c)))), l = f.node.nextSibling;
	            } else {
	              var d = U(e, f, c, n);a.insertBefore(d, l);
	            }c += f.size;
	          }for (; l;) {
	            l = r(l);
	          }
	        }function D(e, t, n, r) {
	          for (var i = 0; i < t.changes.length; i++) {
	            var o = t.changes[i];"text" == o ? _(e, t) : "gutter" == o ? z(e, t, n, r) : "class" == o ? F(t) : "widget" == o && j(e, t, r);
	          }t.changes = null;
	        }function H(e) {
	          return e.node == e.text && (e.node = ji("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), xo && 8 > bo && (e.node.style.zIndex = 2)), e.node;
	        }function W(e) {
	          var t = e.bgClass ? e.bgClass + " " + (e.line.bgClass || "") : e.line.bgClass;if (t && (t += " CodeMirror-linebackground"), e.background) t ? e.background.className = t : (e.background.parentNode.removeChild(e.background), e.background = null);else if (t) {
	            var n = H(e);e.background = n.insertBefore(ji("div", null, t), n.firstChild);
	          }
	        }function B(e, t) {
	          var n = e.display.externalMeasured;return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : Br(e, t);
	        }function _(e, t) {
	          var n = t.text.className,
	              r = B(e, t);t.text == t.node && (t.node = r.pre), t.text.parentNode.replaceChild(r.pre, t.text), t.text = r.pre, r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass, t.textClass = r.textClass, F(t)) : n && (t.text.className = n);
	        }function F(e) {
	          W(e), e.line.wrapClass ? H(e).className = e.line.wrapClass : e.node != e.text && (e.node.className = "");var t = e.textClass ? e.textClass + " " + (e.line.textClass || "") : e.line.textClass;e.text.className = t || "";
	        }function z(e, t, n, r) {
	          if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
	            var i = H(t);t.gutterBackground = ji("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"), i.insertBefore(t.gutterBackground, t.text);
	          }var o = t.line.gutterMarkers;if (e.options.lineNumbers || o) {
	            var i = H(t),
	                a = t.gutter = ji("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");if (e.display.input.setUneditable(a), i.insertBefore(a, t.text), t.line.gutterClass && (a.className += " " + t.line.gutterClass), !e.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (t.lineNumber = a.appendChild(ji("div", S(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), o) for (var l = 0; l < e.options.gutters.length; ++l) {
	              var s = e.options.gutters[l],
	                  c = o.hasOwnProperty(s) && o[s];c && a.appendChild(ji("div", [c], "CodeMirror-gutter-elt", "left: " + r.gutterLeft[s] + "px; width: " + r.gutterWidth[s] + "px"));
	            }
	          }
	        }function j(e, t, n) {
	          t.alignable && (t.alignable = null);for (var r, i = t.node.firstChild; i; i = r) {
	            var r = i.nextSibling;"CodeMirror-linewidget" == i.className && t.node.removeChild(i);
	          }q(e, t, n);
	        }function U(e, t, n, r) {
	          var i = B(e, t);return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), F(t), z(e, t, n, r), q(e, t, r), t.node;
	        }function q(e, t, n) {
	          if (G(e, t.line, t, n, !0), t.rest) for (var r = 0; r < t.rest.length; r++) {
	            G(e, t.rest[r], t, n, !1);
	          }
	        }function G(e, t, n, r, i) {
	          if (t.widgets) for (var o = H(n), a = 0, l = t.widgets; a < l.length; ++a) {
	            var s = l[a],
	                c = ji("div", [s.node], "CodeMirror-linewidget");s.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"), Y(s, c, n, r), e.display.input.setUneditable(c), i && s.above ? o.insertBefore(c, n.gutter || n.text) : o.appendChild(c), Ci(s, "redraw");
	          }
	        }function Y(e, t, n, r) {
	          if (e.noHScroll) {
	            (n.alignable || (n.alignable = [])).push(t);var i = r.wrapperWidth;t.style.left = r.fixedPos + "px", e.coverGutter || (i -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"), t.style.width = i + "px";
	          }e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"));
	        }function $(e) {
	          return Bo(e.line, e.ch);
	        }function V(e, t) {
	          return _o(e, t) < 0 ? t : e;
	        }function K(e, t) {
	          return _o(e, t) < 0 ? e : t;
	        }function X(e) {
	          e.state.focused || (e.display.input.focus(), vn(e));
	        }function Z(e, t, n, r, i) {
	          var o = e.doc;e.display.shift = !1, r || (r = o.sel);var a = e.state.pasteIncoming || "paste" == i,
	              l = o.splitLines(t),
	              s = null;if (a && r.ranges.length > 1) if (Fo && Fo.text.join("\n") == t) {
	            if (r.ranges.length % Fo.text.length == 0) {
	              s = [];for (var c = 0; c < Fo.text.length; c++) {
	                s.push(o.splitLines(Fo.text[c]));
	              }
	            }
	          } else l.length == r.ranges.length && (s = Ri(l, function (e) {
	            return [e];
	          }));for (var c = r.ranges.length - 1; c >= 0; c--) {
	            var u = r.ranges[c],
	                f = u.from(),
	                h = u.to();u.empty() && (n && n > 0 ? f = Bo(f.line, f.ch - n) : e.state.overwrite && !a ? h = Bo(h.line, Math.min(Zr(o, h.line).text.length, h.ch + Ii(l).length)) : Fo && Fo.lineWise && Fo.text.join("\n") == t && (f = h = Bo(f.line, 0)));var d = e.curOp.updateInput,
	                p = { from: f, to: h, text: s ? s[c % s.length] : l, origin: i || (a ? "paste" : e.state.cutIncoming ? "cut" : "+input") };Tn(e.doc, p), Ci(e, "inputRead", e, p);
	          }t && !a && Q(e, t), Bn(e), e.curOp.updateInput = d, e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = !1;
	        }function J(e, t) {
	          var n = e.clipboardData && e.clipboardData.getData("text/plain");return n ? (e.preventDefault(), t.isReadOnly() || t.options.disableInput || At(t, function () {
	            Z(t, n, 0, null, "paste");
	          }), !0) : void 0;
	        }function Q(e, t) {
	          if (e.options.electricChars && e.options.smartIndent) for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
	            var i = n.ranges[r];if (!(i.head.ch > 100 || r && n.ranges[r - 1].head.line == i.head.line)) {
	              var o = e.getModeAt(i.head),
	                  a = !1;if (o.electricChars) {
	                for (var l = 0; l < o.electricChars.length; l++) {
	                  if (t.indexOf(o.electricChars.charAt(l)) > -1) {
	                    a = Fn(e, i.head.line, "smart");break;
	                  }
	                }
	              } else o.electricInput && o.electricInput.test(Zr(e.doc, i.head.line).text.slice(0, i.head.ch)) && (a = Fn(e, i.head.line, "smart"));a && Ci(e, "electricInput", e, i.head.line);
	            }
	          }
	        }function ee(e) {
	          for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
	            var i = e.doc.sel.ranges[r].head.line,
	                o = { anchor: Bo(i, 0), head: Bo(i + 1, 0) };n.push(o), t.push(e.getRange(o.anchor, o.head));
	          }return { text: t, ranges: n };
	        }function te(e) {
	          e.setAttribute("autocorrect", "off"), e.setAttribute("autocapitalize", "off"), e.setAttribute("spellcheck", "false");
	        }function ne(e) {
	          this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new Ei(), this.inaccurateSelection = !1, this.hasSelection = !1, this.composing = null;
	        }function re() {
	          var e = ji("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none"),
	              t = ji("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");return wo ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), No && (e.style.border = "1px solid black"), te(e), t;
	        }function ie(e) {
	          this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new Ei(), this.gracePeriod = !1;
	        }function oe(e, t) {
	          var n = Qe(e, t.line);if (!n || n.hidden) return null;var r = Zr(e.doc, t.line),
	              i = Xe(n, r, t.line),
	              o = ii(r),
	              a = "left";if (o) {
	            var l = co(o, t.ch);a = l % 2 ? "right" : "left";
	          }var s = nt(i.map, t.ch, a);return s.offset = "right" == s.collapse ? s.end : s.start, s;
	        }function ae(e, t) {
	          return t && (e.bad = !0), e;
	        }function le(e, t, n) {
	          var r;if (t == e.display.lineDiv) {
	            if (r = e.display.lineDiv.childNodes[n], !r) return ae(e.clipPos(Bo(e.display.viewTo - 1)), !0);t = null, n = 0;
	          } else for (r = t;; r = r.parentNode) {
	            if (!r || r == e.display.lineDiv) return null;if (r.parentNode && r.parentNode == e.display.lineDiv) break;
	          }for (var i = 0; i < e.display.view.length; i++) {
	            var o = e.display.view[i];if (o.node == r) return se(o, t, n);
	          }
	        }function se(e, t, n) {
	          function r(t, n, r) {
	            for (var i = -1; i < (u ? u.length : 0); i++) {
	              for (var o = 0 > i ? c.map : u[i], a = 0; a < o.length; a += 3) {
	                var l = o[a + 2];if (l == t || l == n) {
	                  var s = ti(0 > i ? e.line : e.rest[i]),
	                      f = o[a] + r;return (0 > r || l != t) && (f = o[a + (r ? 1 : 0)]), Bo(s, f);
	                }
	              }
	            }
	          }var i = e.text.firstChild,
	              o = !1;if (!t || !Va(i, t)) return ae(Bo(ti(e.line), 0), !0);if (t == i && (o = !0, t = i.childNodes[n], n = 0, !t)) {
	            var a = e.rest ? Ii(e.rest) : e.line;return ae(Bo(ti(a), a.text.length), o);
	          }var l = 3 == t.nodeType ? t : null,
	              s = t;for (l || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (l = t.firstChild, n && (n = l.nodeValue.length)); s.parentNode != i;) {
	            s = s.parentNode;
	          }var c = e.measure,
	              u = c.maps,
	              f = r(l, s, n);if (f) return ae(f, o);for (var h = s.nextSibling, d = l ? l.nodeValue.length - n : 0; h; h = h.nextSibling) {
	            if (f = r(h, h.firstChild, 0)) return ae(Bo(f.line, f.ch - d), o);d += h.textContent.length;
	          }for (var p = s.previousSibling, d = n; p; p = p.previousSibling) {
	            if (f = r(p, p.firstChild, -1)) return ae(Bo(f.line, f.ch + d), o);d += h.textContent.length;
	          }
	        }function ce(e, t, n, r, i) {
	          function o(e) {
	            return function (t) {
	              return t.id == e;
	            };
	          }function a(t) {
	            if (1 == t.nodeType) {
	              var n = t.getAttribute("cm-text");if (null != n) return "" == n && (n = t.textContent.replace(/\u200b/g, "")), void (l += n);var u,
	                  f = t.getAttribute("cm-marker");if (f) {
	                var h = e.findMarks(Bo(r, 0), Bo(i + 1, 0), o(+f));return void (h.length && (u = h[0].find()) && (l += Jr(e.doc, u.from, u.to).join(c)));
	              }if ("false" == t.getAttribute("contenteditable")) return;for (var d = 0; d < t.childNodes.length; d++) {
	                a(t.childNodes[d]);
	              }/^(pre|div|p)$/i.test(t.nodeName) && (s = !0);
	            } else if (3 == t.nodeType) {
	              var p = t.nodeValue;if (!p) return;s && (l += c, s = !1), l += p;
	            }
	          }for (var l = "", s = !1, c = e.doc.lineSeparator(); a(t), t != n;) {
	            t = t.nextSibling;
	          }return l;
	        }function ue(e, t) {
	          this.ranges = e, this.primIndex = t;
	        }function fe(e, t) {
	          this.anchor = e, this.head = t;
	        }function he(e, t) {
	          var n = e[t];e.sort(function (e, t) {
	            return _o(e.from(), t.from());
	          }), t = Pi(e, n);for (var r = 1; r < e.length; r++) {
	            var i = e[r],
	                o = e[r - 1];if (_o(o.to(), i.from()) >= 0) {
	              var a = K(o.from(), i.from()),
	                  l = V(o.to(), i.to()),
	                  s = o.empty() ? i.from() == i.head : o.from() == o.head;t >= r && --t, e.splice(--r, 2, new fe(s ? l : a, s ? a : l));
	            }
	          }return new ue(e, t);
	        }function de(e, t) {
	          return new ue([new fe(e, t || e)], 0);
	        }function pe(e, t) {
	          return Math.max(e.first, Math.min(t, e.first + e.size - 1));
	        }function me(e, t) {
	          if (t.line < e.first) return Bo(e.first, 0);var n = e.first + e.size - 1;return t.line > n ? Bo(n, Zr(e, n).text.length) : ge(t, Zr(e, t.line).text.length);
	        }function ge(e, t) {
	          var n = e.ch;return null == n || n > t ? Bo(e.line, t) : 0 > n ? Bo(e.line, 0) : e;
	        }function ve(e, t) {
	          return t >= e.first && t < e.first + e.size;
	        }function ye(e, t) {
	          for (var n = [], r = 0; r < t.length; r++) {
	            n[r] = me(e, t[r]);
	          }return n;
	        }function xe(e, t, n, r) {
	          if (e.cm && e.cm.display.shift || e.extend) {
	            var i = t.anchor;if (r) {
	              var o = _o(n, i) < 0;o != _o(r, i) < 0 ? (i = n, n = r) : o != _o(n, r) < 0 && (n = r);
	            }return new fe(i, n);
	          }return new fe(r || n, n);
	        }function be(e, t, n, r) {
	          Te(e, new ue([xe(e, e.sel.primary(), t, n)], 0), r);
	        }function we(e, t, n) {
	          for (var r = [], i = 0; i < e.sel.ranges.length; i++) {
	            r[i] = xe(e, e.sel.ranges[i], t[i], null);
	          }var o = he(r, e.sel.primIndex);Te(e, o, n);
	        }function ke(e, t, n, r) {
	          var i = e.sel.ranges.slice(0);i[t] = n, Te(e, he(i, e.sel.primIndex), r);
	        }function Se(e, t, n, r) {
	          Te(e, de(t, n), r);
	        }function Ce(e, t, n) {
	          var r = { ranges: t.ranges, update: function update(t) {
	              this.ranges = [];for (var n = 0; n < t.length; n++) {
	                this.ranges[n] = new fe(me(e, t[n].anchor), me(e, t[n].head));
	              }
	            }, origin: n && n.origin };return Pa(e, "beforeSelectionChange", e, r), e.cm && Pa(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != t.ranges ? he(r.ranges, r.ranges.length - 1) : t;
	        }function Le(e, t, n) {
	          var r = e.history.done,
	              i = Ii(r);i && i.ranges ? (r[r.length - 1] = t, Me(e, t, n)) : Te(e, t, n);
	        }function Te(e, t, n) {
	          Me(e, t, n), fi(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
	        }function Me(e, t, n) {
	          (Ni(e, "beforeSelectionChange") || e.cm && Ni(e.cm, "beforeSelectionChange")) && (t = Ce(e, t, n));var r = n && n.bias || (_o(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);Ne(e, Ee(e, t, r, !0)), n && n.scroll === !1 || !e.cm || Bn(e.cm);
	        }function Ne(e, t) {
	          t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0, Mi(e.cm)), Ci(e, "cursorActivity", e));
	        }function Ae(e) {
	          Ne(e, Ee(e, e.sel, null, !1), Wa);
	        }function Ee(e, t, n, r) {
	          for (var i, o = 0; o < t.ranges.length; o++) {
	            var a = t.ranges[o],
	                l = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
	                s = Ie(e, a.anchor, l && l.anchor, n, r),
	                c = Ie(e, a.head, l && l.head, n, r);(i || s != a.anchor || c != a.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new fe(s, c));
	          }return i ? he(i, t.primIndex) : t;
	        }function Oe(e, t, n, r, i) {
	          var o = Zr(e, t.line);if (o.markedSpans) for (var a = 0; a < o.markedSpans.length; ++a) {
	            var l = o.markedSpans[a],
	                s = l.marker;if ((null == l.from || (s.inclusiveLeft ? l.from <= t.ch : l.from < t.ch)) && (null == l.to || (s.inclusiveRight ? l.to >= t.ch : l.to > t.ch))) {
	              if (i && (Pa(s, "beforeCursorEnter"), s.explicitlyCleared)) {
	                if (o.markedSpans) {
	                  --a;continue;
	                }break;
	              }if (!s.atomic) continue;if (n) {
	                var c,
	                    u = s.find(0 > r ? 1 : -1);if ((0 > r ? s.inclusiveRight : s.inclusiveLeft) && (u = Pe(e, u, -r, u && u.line == t.line ? o : null)), u && u.line == t.line && (c = _o(u, n)) && (0 > r ? 0 > c : c > 0)) return Oe(e, u, t, r, i);
	              }var f = s.find(0 > r ? -1 : 1);return (0 > r ? s.inclusiveLeft : s.inclusiveRight) && (f = Pe(e, f, r, f.line == t.line ? o : null)), f ? Oe(e, f, t, r, i) : null;
	            }
	          }return t;
	        }function Ie(e, t, n, r, i) {
	          var o = r || 1,
	              a = Oe(e, t, n, o, i) || !i && Oe(e, t, n, o, !0) || Oe(e, t, n, -o, i) || !i && Oe(e, t, n, -o, !0);return a ? a : (e.cantEdit = !0, Bo(e.first, 0));
	        }function Pe(e, t, n, r) {
	          return 0 > n && 0 == t.ch ? t.line > e.first ? me(e, Bo(t.line - 1)) : null : n > 0 && t.ch == (r || Zr(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? Bo(t.line + 1, 0) : null : new Bo(t.line, t.ch + n);
	        }function Re(e) {
	          e.display.input.showSelection(e.display.input.prepareSelection());
	        }function De(e, t) {
	          for (var n = e.doc, r = {}, i = r.cursors = document.createDocumentFragment(), o = r.selection = document.createDocumentFragment(), a = 0; a < n.sel.ranges.length; a++) {
	            if (t !== !1 || a != n.sel.primIndex) {
	              var l = n.sel.ranges[a];if (!(l.from().line >= e.display.viewTo || l.to().line < e.display.viewFrom)) {
	                var s = l.empty();(s || e.options.showCursorWhenSelecting) && He(e, l.head, i), s || We(e, l, o);
	              }
	            }
	          }return r;
	        }function He(e, t, n) {
	          var r = dt(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
	              i = n.appendChild(ji("div", " ", "CodeMirror-cursor"));if (i.style.left = r.left + "px", i.style.top = r.top + "px", i.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px", r.other) {
	            var o = n.appendChild(ji("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));o.style.display = "", o.style.left = r.other.left + "px", o.style.top = r.other.top + "px", o.style.height = .85 * (r.other.bottom - r.other.top) + "px";
	          }
	        }function We(e, t, n) {
	          function r(e, t, n, r) {
	            0 > t && (t = 0), t = Math.round(t), r = Math.round(r), l.appendChild(ji("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px; top: " + t + "px; width: " + (null == n ? u - e : n) + "px; height: " + (r - t) + "px"));
	          }function i(t, n, i) {
	            function o(n, r) {
	              return ht(e, Bo(t, n), "div", f, r);
	            }var l,
	                s,
	                f = Zr(a, t),
	                h = f.text.length;return eo(ii(f), n || 0, null == i ? h : i, function (e, t, a) {
	              var f,
	                  d,
	                  p,
	                  m = o(e, "left");if (e == t) f = m, d = p = m.left;else {
	                if (f = o(t - 1, "right"), "rtl" == a) {
	                  var g = m;m = f, f = g;
	                }d = m.left, p = f.right;
	              }null == n && 0 == e && (d = c), f.top - m.top > 3 && (r(d, m.top, null, m.bottom), d = c, m.bottom < f.top && r(d, m.bottom, null, f.top)), null == i && t == h && (p = u), (!l || m.top < l.top || m.top == l.top && m.left < l.left) && (l = m), (!s || f.bottom > s.bottom || f.bottom == s.bottom && f.right > s.right) && (s = f), c + 1 > d && (d = c), r(d, f.top, p - d, f.bottom);
	            }), { start: l, end: s };
	          }var o = e.display,
	              a = e.doc,
	              l = document.createDocumentFragment(),
	              s = Ge(e.display),
	              c = s.left,
	              u = Math.max(o.sizerWidth, $e(e) - o.sizer.offsetLeft) - s.right,
	              f = t.from(),
	              h = t.to();if (f.line == h.line) i(f.line, f.ch, h.ch);else {
	            var d = Zr(a, f.line),
	                p = Zr(a, h.line),
	                m = yr(d) == yr(p),
	                g = i(f.line, f.ch, m ? d.text.length + 1 : null).end,
	                v = i(h.line, m ? 0 : null, h.ch).start;m && (g.top < v.top - 2 ? (r(g.right, g.top, null, g.bottom), r(c, v.top, v.left, v.bottom)) : r(g.right, g.top, v.left - g.right, g.bottom)), g.bottom < v.top && r(c, g.bottom, null, v.top);
	          }n.appendChild(l);
	        }function Be(e) {
	          if (e.state.focused) {
	            var t = e.display;clearInterval(t.blinker);var n = !0;t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function () {
	              t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden";
	            }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden");
	          }
	        }function _e(e, t) {
	          e.doc.mode.startState && e.doc.frontier < e.display.viewTo && e.state.highlight.set(t, Bi(Fe, e));
	        }function Fe(e) {
	          var t = e.doc;if (t.frontier < t.first && (t.frontier = t.first), !(t.frontier >= e.display.viewTo)) {
	            var n = +new Date() + e.options.workTime,
	                r = sa(t.mode, je(e, t.frontier)),
	                i = [];t.iter(t.frontier, Math.min(t.first + t.size, e.display.viewTo + 500), function (o) {
	              if (t.frontier >= e.display.viewFrom) {
	                var a = o.styles,
	                    l = o.text.length > e.options.maxHighlightLength,
	                    s = Rr(e, o, l ? sa(t.mode, r) : r, !0);o.styles = s.styles;var c = o.styleClasses,
	                    u = s.classes;u ? o.styleClasses = u : c && (o.styleClasses = null);for (var f = !a || a.length != o.styles.length || c != u && (!c || !u || c.bgClass != u.bgClass || c.textClass != u.textClass), h = 0; !f && h < a.length; ++h) {
	                  f = a[h] != o.styles[h];
	                }f && i.push(t.frontier), o.stateAfter = l ? r : sa(t.mode, r);
	              } else o.text.length <= e.options.maxHighlightLength && Hr(e, o.text, r), o.stateAfter = t.frontier % 5 == 0 ? sa(t.mode, r) : null;return ++t.frontier, +new Date() > n ? (_e(e, e.options.workDelay), !0) : void 0;
	            }), i.length && At(e, function () {
	              for (var t = 0; t < i.length; t++) {
	                Ht(e, i[t], "text");
	              }
	            });
	          }
	        }function ze(e, t, n) {
	          for (var r, i, o = e.doc, a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), l = t; l > a; --l) {
	            if (l <= o.first) return o.first;var s = Zr(o, l - 1);if (s.stateAfter && (!n || l <= o.frontier)) return l;var c = Fa(s.text, null, e.options.tabSize);(null == i || r > c) && (i = l - 1, r = c);
	          }return i;
	        }function je(e, t, n) {
	          var r = e.doc,
	              i = e.display;if (!r.mode.startState) return !0;var o = ze(e, t, n),
	              a = o > r.first && Zr(r, o - 1).stateAfter;return a = a ? sa(r.mode, a) : ca(r.mode), r.iter(o, t, function (n) {
	            Hr(e, n.text, a);var l = o == t - 1 || o % 5 == 0 || o >= i.viewFrom && o < i.viewTo;n.stateAfter = l ? sa(r.mode, a) : null, ++o;
	          }), n && (r.frontier = o), a;
	        }function Ue(e) {
	          return e.lineSpace.offsetTop;
	        }function qe(e) {
	          return e.mover.offsetHeight - e.lineSpace.offsetHeight;
	        }function Ge(e) {
	          if (e.cachedPaddingH) return e.cachedPaddingH;var t = qi(e.measure, ji("pre", "x")),
	              n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
	              r = { left: parseInt(n.paddingLeft), right: parseInt(n.paddingRight) };return isNaN(r.left) || isNaN(r.right) || (e.cachedPaddingH = r), r;
	        }function Ye(e) {
	          return Da - e.display.nativeBarWidth;
	        }function $e(e) {
	          return e.display.scroller.clientWidth - Ye(e) - e.display.barWidth;
	        }function Ve(e) {
	          return e.display.scroller.clientHeight - Ye(e) - e.display.barHeight;
	        }function Ke(e, t, n) {
	          var r = e.options.lineWrapping,
	              i = r && $e(e);if (!t.measure.heights || r && t.measure.width != i) {
	            var o = t.measure.heights = [];if (r) {
	              t.measure.width = i;for (var a = t.text.firstChild.getClientRects(), l = 0; l < a.length - 1; l++) {
	                var s = a[l],
	                    c = a[l + 1];Math.abs(s.bottom - c.bottom) > 2 && o.push((s.bottom + c.top) / 2 - n.top);
	              }
	            }o.push(n.bottom - n.top);
	          }
	        }function Xe(e, t, n) {
	          if (e.line == t) return { map: e.measure.map, cache: e.measure.cache };for (var r = 0; r < e.rest.length; r++) {
	            if (e.rest[r] == t) return { map: e.measure.maps[r], cache: e.measure.caches[r] };
	          }for (var r = 0; r < e.rest.length; r++) {
	            if (ti(e.rest[r]) > n) return { map: e.measure.maps[r], cache: e.measure.caches[r], before: !0 };
	          }
	        }function Ze(e, t) {
	          t = yr(t);var n = ti(t),
	              r = e.display.externalMeasured = new Pt(e.doc, t, n);r.lineN = n;var i = r.built = Br(e, r);return r.text = i.pre, qi(e.display.lineMeasure, i.pre), r;
	        }function Je(e, t, n, r) {
	          return tt(e, et(e, t), n, r);
	        }function Qe(e, t) {
	          if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[Bt(e, t)];var n = e.display.externalMeasured;return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0;
	        }function et(e, t) {
	          var n = ti(t),
	              r = Qe(e, n);r && !r.text ? r = null : r && r.changes && (D(e, r, n, P(e)), e.curOp.forceUpdate = !0), r || (r = Ze(e, t));var i = Xe(r, t, n);return { line: t, view: r, rect: null, map: i.map, cache: i.cache, before: i.before, hasHeights: !1 };
	        }function tt(e, t, n, r, i) {
	          t.before && (n = -1);var o,
	              a = n + (r || "");return t.cache.hasOwnProperty(a) ? o = t.cache[a] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (Ke(e, t.view, t.rect), t.hasHeights = !0), o = rt(e, t, n, r), o.bogus || (t.cache[a] = o)), { left: o.left, right: o.right, top: i ? o.rtop : o.top, bottom: i ? o.rbottom : o.bottom };
	        }function nt(e, t, n) {
	          for (var r, i, o, a, l = 0; l < e.length; l += 3) {
	            var s = e[l],
	                c = e[l + 1];if (s > t ? (i = 0, o = 1, a = "left") : c > t ? (i = t - s, o = i + 1) : (l == e.length - 3 || t == c && e[l + 3] > t) && (o = c - s, i = o - 1, t >= c && (a = "right")), null != i) {
	              if (r = e[l + 2], s == c && n == (r.insertLeft ? "left" : "right") && (a = n), "left" == n && 0 == i) for (; l && e[l - 2] == e[l - 3] && e[l - 1].insertLeft;) {
	                r = e[(l -= 3) + 2], a = "left";
	              }if ("right" == n && i == c - s) for (; l < e.length - 3 && e[l + 3] == e[l + 4] && !e[l + 5].insertLeft;) {
	                r = e[(l += 3) + 2], a = "right";
	              }break;
	            }
	          }return { node: r, start: i, end: o, collapse: a, coverStart: s, coverEnd: c };
	        }function rt(e, t, n, r) {
	          var i,
	              o = nt(t.map, n, r),
	              a = o.node,
	              l = o.start,
	              s = o.end,
	              c = o.collapse;if (3 == a.nodeType) {
	            for (var u = 0; 4 > u; u++) {
	              for (; l && zi(t.line.text.charAt(o.coverStart + l));) {
	                --l;
	              }for (; o.coverStart + s < o.coverEnd && zi(t.line.text.charAt(o.coverStart + s));) {
	                ++s;
	              }if (xo && 9 > bo && 0 == l && s == o.coverEnd - o.coverStart) i = a.parentNode.getBoundingClientRect();else if (xo && e.options.lineWrapping) {
	                var f = qa(a, l, s).getClientRects();i = f.length ? f["right" == r ? f.length - 1 : 0] : qo;
	              } else i = qa(a, l, s).getBoundingClientRect() || qo;if (i.left || i.right || 0 == l) break;s = l, l -= 1, c = "right";
	            }xo && 11 > bo && (i = it(e.display.measure, i));
	          } else {
	            l > 0 && (c = r = "right");var f;i = e.options.lineWrapping && (f = a.getClientRects()).length > 1 ? f["right" == r ? f.length - 1 : 0] : a.getBoundingClientRect();
	          }if (xo && 9 > bo && !l && (!i || !i.left && !i.right)) {
	            var h = a.parentNode.getClientRects()[0];i = h ? { left: h.left, right: h.left + xt(e.display), top: h.top, bottom: h.bottom } : qo;
	          }for (var d = i.top - t.rect.top, p = i.bottom - t.rect.top, m = (d + p) / 2, g = t.view.measure.heights, u = 0; u < g.length - 1 && !(m < g[u]); u++) {}var v = u ? g[u - 1] : 0,
	              y = g[u],
	              x = { left: ("right" == c ? i.right : i.left) - t.rect.left, right: ("left" == c ? i.left : i.right) - t.rect.left, top: v, bottom: y };return i.left || i.right || (x.bogus = !0), e.options.singleCursorHeightPerLine || (x.rtop = d, x.rbottom = p), x;
	        }function it(e, t) {
	          if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !Qi(e)) return t;var n = screen.logicalXDPI / screen.deviceXDPI,
	              r = screen.logicalYDPI / screen.deviceYDPI;return { left: t.left * n, right: t.right * n, top: t.top * r, bottom: t.bottom * r };
	        }function ot(e) {
	          if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest)) for (var t = 0; t < e.rest.length; t++) {
	            e.measure.caches[t] = {};
	          }
	        }function at(e) {
	          e.display.externalMeasure = null, Ui(e.display.lineMeasure);for (var t = 0; t < e.display.view.length; t++) {
	            ot(e.display.view[t]);
	          }
	        }function lt(e) {
	          at(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null;
	        }function st() {
	          return window.pageXOffset || (document.documentElement || document.body).scrollLeft;
	        }function ct() {
	          return window.pageYOffset || (document.documentElement || document.body).scrollTop;
	        }function ut(e, t, n, r) {
	          if (t.widgets) for (var i = 0; i < t.widgets.length; ++i) {
	            if (t.widgets[i].above) {
	              var o = Lr(t.widgets[i]);n.top += o, n.bottom += o;
	            }
	          }if ("line" == r) return n;r || (r = "local");var a = ri(t);if ("local" == r ? a += Ue(e.display) : a -= e.display.viewOffset, "page" == r || "window" == r) {
	            var l = e.display.lineSpace.getBoundingClientRect();a += l.top + ("window" == r ? 0 : ct());var s = l.left + ("window" == r ? 0 : st());n.left += s, n.right += s;
	          }return n.top += a, n.bottom += a, n;
	        }function ft(e, t, n) {
	          if ("div" == n) return t;var r = t.left,
	              i = t.top;if ("page" == n) r -= st(), i -= ct();else if ("local" == n || !n) {
	            var o = e.display.sizer.getBoundingClientRect();r += o.left, i += o.top;
	          }var a = e.display.lineSpace.getBoundingClientRect();return { left: r - a.left, top: i - a.top };
	        }function ht(e, t, n, r, i) {
	          return r || (r = Zr(e.doc, t.line)), ut(e, r, Je(e, r, t.ch, i), n);
	        }function dt(e, t, n, r, i, o) {
	          function a(t, a) {
	            var l = tt(e, i, t, a ? "right" : "left", o);return a ? l.left = l.right : l.right = l.left, ut(e, r, l, n);
	          }function l(e, t) {
	            var n = s[t],
	                r = n.level % 2;return e == to(n) && t && n.level < s[t - 1].level ? (n = s[--t], e = no(n) - (n.level % 2 ? 0 : 1), r = !0) : e == no(n) && t < s.length - 1 && n.level < s[t + 1].level && (n = s[++t], e = to(n) - n.level % 2, r = !1), r && e == n.to && e > n.from ? a(e - 1) : a(e, r);
	          }r = r || Zr(e.doc, t.line), i || (i = et(e, r));var s = ii(r),
	              c = t.ch;if (!s) return a(c);var u = co(s, c),
	              f = l(c, u);return null != al && (f.other = l(c, al)), f;
	        }function pt(e, t) {
	          var n = 0,
	              t = me(e.doc, t);e.options.lineWrapping || (n = xt(e.display) * t.ch);var r = Zr(e.doc, t.line),
	              i = ri(r) + Ue(e.display);return { left: n, right: n, top: i, bottom: i + r.height };
	        }function mt(e, t, n, r) {
	          var i = Bo(e, t);return i.xRel = r, n && (i.outside = !0), i;
	        }function gt(e, t, n) {
	          var r = e.doc;if (n += e.display.viewOffset, 0 > n) return mt(r.first, 0, !0, -1);var i = ni(r, n),
	              o = r.first + r.size - 1;if (i > o) return mt(r.first + r.size - 1, Zr(r, o).text.length, !0, 1);0 > t && (t = 0);for (var a = Zr(r, i);;) {
	            var l = vt(e, a, i, t, n),
	                s = gr(a),
	                c = s && s.find(0, !0);if (!s || !(l.ch > c.from.ch || l.ch == c.from.ch && l.xRel > 0)) return l;i = ti(a = c.to.line);
	          }
	        }function vt(e, t, n, r, i) {
	          function o(r) {
	            var i = dt(e, Bo(n, r), "line", t, c);return l = !0, a > i.bottom ? i.left - s : a < i.top ? i.left + s : (l = !1, i.left);
	          }var a = i - ri(t),
	              l = !1,
	              s = 2 * e.display.wrapper.clientWidth,
	              c = et(e, t),
	              u = ii(t),
	              f = t.text.length,
	              h = ro(t),
	              d = io(t),
	              p = o(h),
	              m = l,
	              g = o(d),
	              v = l;if (r > g) return mt(n, d, v, 1);for (;;) {
	            if (u ? d == h || d == fo(t, h, 1) : 1 >= d - h) {
	              for (var y = p > r || g - r >= r - p ? h : d, x = r - (y == h ? p : g); zi(t.text.charAt(y));) {
	                ++y;
	              }var b = mt(n, y, y == h ? m : v, -1 > x ? -1 : x > 1 ? 1 : 0);return b;
	            }var w = Math.ceil(f / 2),
	                k = h + w;if (u) {
	              k = h;for (var S = 0; w > S; ++S) {
	                k = fo(t, k, 1);
	              }
	            }var C = o(k);C > r ? (d = k, g = C, (v = l) && (g += 1e3), f = w) : (h = k, p = C, m = l, f -= w);
	          }
	        }function yt(e) {
	          if (null != e.cachedTextHeight) return e.cachedTextHeight;if (null == zo) {
	            zo = ji("pre");for (var t = 0; 49 > t; ++t) {
	              zo.appendChild(document.createTextNode("x")), zo.appendChild(ji("br"));
	            }zo.appendChild(document.createTextNode("x"));
	          }qi(e.measure, zo);var n = zo.offsetHeight / 50;return n > 3 && (e.cachedTextHeight = n), Ui(e.measure), n || 1;
	        }function xt(e) {
	          if (null != e.cachedCharWidth) return e.cachedCharWidth;var t = ji("span", "xxxxxxxxxx"),
	              n = ji("pre", [t]);qi(e.measure, n);var r = t.getBoundingClientRect(),
	              i = (r.right - r.left) / 10;return i > 2 && (e.cachedCharWidth = i), i || 10;
	        }function bt(e) {
	          e.curOp = { cm: e, viewChanged: !1, startHeight: e.doc.height, forceUpdate: !1, updateInput: null, typing: !1, changeObjs: null, cursorActivityHandlers: null, cursorActivityCalled: 0, selectionChanged: !1, updateMaxLine: !1, scrollLeft: null, scrollTop: null, scrollToPos: null, focus: !1, id: ++Yo }, Go ? Go.ops.push(e.curOp) : e.curOp.ownsGroup = Go = { ops: [e.curOp], delayedCallbacks: [] };
	        }function wt(e) {
	          var t = e.delayedCallbacks,
	              n = 0;do {
	            for (; n < t.length; n++) {
	              t[n].call(null);
	            }for (var r = 0; r < e.ops.length; r++) {
	              var i = e.ops[r];if (i.cursorActivityHandlers) for (; i.cursorActivityCalled < i.cursorActivityHandlers.length;) {
	                i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm);
	              }
	            }
	          } while (n < t.length);
	        }function kt(e) {
	          var t = e.curOp,
	              n = t.ownsGroup;if (n) try {
	            wt(n);
	          } finally {
	            Go = null;for (var r = 0; r < n.ops.length; r++) {
	              n.ops[r].cm.curOp = null;
	            }St(n);
	          }
	        }function St(e) {
	          for (var t = e.ops, n = 0; n < t.length; n++) {
	            Ct(t[n]);
	          }for (var n = 0; n < t.length; n++) {
	            Lt(t[n]);
	          }for (var n = 0; n < t.length; n++) {
	            Tt(t[n]);
	          }for (var n = 0; n < t.length; n++) {
	            Mt(t[n]);
	          }for (var n = 0; n < t.length; n++) {
	            Nt(t[n]);
	          }
	        }function Ct(e) {
	          var t = e.cm,
	              n = t.display;T(t), e.updateMaxLine && h(t), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new L(t, e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos }, e.forceUpdate);
	        }function Lt(e) {
	          e.updatedDisplay = e.mustUpdate && M(e.cm, e.update);
	        }function Tt(e) {
	          var t = e.cm,
	              n = t.display;e.updatedDisplay && O(t), e.barMeasure = p(t), n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Je(t, n.maxLine, n.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + Ye(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - $e(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection(e.focus));
	        }function Mt(e) {
	          var t = e.cm;null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && on(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);var n = e.focus && e.focus == Gi() && (!document.hasFocus || document.hasFocus());e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n), (e.updatedDisplay || e.startHeight != t.doc.height) && y(t, e.barMeasure), e.updatedDisplay && E(t, e.barMeasure), e.selectionChanged && Be(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), n && X(e.cm);
	        }function Nt(e) {
	          var t = e.cm,
	              n = t.display,
	              r = t.doc;if (e.updatedDisplay && N(t, e.update), null == n.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (n.wheelStartX = n.wheelStartY = null), null == e.scrollTop || n.scroller.scrollTop == e.scrollTop && !e.forceScroll || (r.scrollTop = Math.max(0, Math.min(n.scroller.scrollHeight - n.scroller.clientHeight, e.scrollTop)), n.scrollbars.setScrollTop(r.scrollTop), n.scroller.scrollTop = r.scrollTop), null == e.scrollLeft || n.scroller.scrollLeft == e.scrollLeft && !e.forceScroll || (r.scrollLeft = Math.max(0, Math.min(n.scroller.scrollWidth - n.scroller.clientWidth, e.scrollLeft)), n.scrollbars.setScrollLeft(r.scrollLeft), n.scroller.scrollLeft = r.scrollLeft, w(t)), e.scrollToPos) {
	            var i = Rn(t, me(r, e.scrollToPos.from), me(r, e.scrollToPos.to), e.scrollToPos.margin);e.scrollToPos.isCursor && t.state.focused && Pn(t, i);
	          }var o = e.maybeHiddenMarkers,
	              a = e.maybeUnhiddenMarkers;if (o) for (var l = 0; l < o.length; ++l) {
	            o[l].lines.length || Pa(o[l], "hide");
	          }if (a) for (var l = 0; l < a.length; ++l) {
	            a[l].lines.length && Pa(a[l], "unhide");
	          }n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop), e.changeObjs && Pa(t, "changes", t, e.changeObjs), e.update && e.update.finish();
	        }function At(e, t) {
	          if (e.curOp) return t();bt(e);try {
	            return t();
	          } finally {
	            kt(e);
	          }
	        }function Et(e, t) {
	          return function () {
	            if (e.curOp) return t.apply(e, arguments);bt(e);try {
	              return t.apply(e, arguments);
	            } finally {
	              kt(e);
	            }
	          };
	        }function Ot(e) {
	          return function () {
	            if (this.curOp) return e.apply(this, arguments);bt(this);try {
	              return e.apply(this, arguments);
	            } finally {
	              kt(this);
	            }
	          };
	        }function It(e) {
	          return function () {
	            var t = this.cm;if (!t || t.curOp) return e.apply(this, arguments);bt(t);try {
	              return e.apply(this, arguments);
	            } finally {
	              kt(t);
	            }
	          };
	        }function Pt(e, t, n) {
	          this.line = t, this.rest = xr(t), this.size = this.rest ? ti(Ii(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = kr(e, t);
	        }function Rt(e, t, n) {
	          for (var r, i = [], o = t; n > o; o = r) {
	            var a = new Pt(e.doc, Zr(e.doc, o), o);r = o + a.size, i.push(a);
	          }return i;
	        }function Dt(e, t, n, r) {
	          null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), r || (r = 0);var i = e.display;if (r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) Wo && br(e.doc, t) < i.viewTo && Wt(e);else if (n <= i.viewFrom) Wo && wr(e.doc, n + r) > i.viewFrom ? Wt(e) : (i.viewFrom += r, i.viewTo += r);else if (t <= i.viewFrom && n >= i.viewTo) Wt(e);else if (t <= i.viewFrom) {
	            var o = _t(e, n, n + r, 1);o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += r) : Wt(e);
	          } else if (n >= i.viewTo) {
	            var o = _t(e, t, t, -1);o ? (i.view = i.view.slice(0, o.index), i.viewTo = o.lineN) : Wt(e);
	          } else {
	            var a = _t(e, t, t, -1),
	                l = _t(e, n, n + r, 1);a && l ? (i.view = i.view.slice(0, a.index).concat(Rt(e, a.lineN, l.lineN)).concat(i.view.slice(l.index)), i.viewTo += r) : Wt(e);
	          }var s = i.externalMeasured;s && (n < s.lineN ? s.lineN += r : t < s.lineN + s.size && (i.externalMeasured = null));
	        }function Ht(e, t, n) {
	          e.curOp.viewChanged = !0;var r = e.display,
	              i = e.display.externalMeasured;if (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo)) {
	            var o = r.view[Bt(e, t)];if (null != o.node) {
	              var a = o.changes || (o.changes = []);-1 == Pi(a, n) && a.push(n);
	            }
	          }
	        }function Wt(e) {
	          e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0;
	        }function Bt(e, t) {
	          if (t >= e.display.viewTo) return null;if (t -= e.display.viewFrom, 0 > t) return null;for (var n = e.display.view, r = 0; r < n.length; r++) {
	            if (t -= n[r].size, 0 > t) return r;
	          }
	        }function _t(e, t, n, r) {
	          var i,
	              o = Bt(e, t),
	              a = e.display.view;if (!Wo || n == e.doc.first + e.doc.size) return { index: o, lineN: n };for (var l = 0, s = e.display.viewFrom; o > l; l++) {
	            s += a[l].size;
	          }if (s != t) {
	            if (r > 0) {
	              if (o == a.length - 1) return null;i = s + a[o].size - t, o++;
	            } else i = s - t;t += i, n += i;
	          }for (; br(e.doc, n) != n;) {
	            if (o == (0 > r ? 0 : a.length - 1)) return null;n += r * a[o - (0 > r ? 1 : 0)].size, o += r;
	          }return { index: o, lineN: n };
	        }function Ft(e, t, n) {
	          var r = e.display,
	              i = r.view;0 == i.length || t >= r.viewTo || n <= r.viewFrom ? (r.view = Rt(e, t, n), r.viewFrom = t) : (r.viewFrom > t ? r.view = Rt(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(Bt(e, t))), r.viewFrom = t, r.viewTo < n ? r.view = r.view.concat(Rt(e, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, Bt(e, n)))), r.viewTo = n;
	        }function zt(e) {
	          for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
	            var i = t[r];i.hidden || i.node && !i.changes || ++n;
	          }return n;
	        }function jt(e) {
	          function t() {
	            i.activeTouch && (o = setTimeout(function () {
	              i.activeTouch = null;
	            }, 1e3), a = i.activeTouch, a.end = +new Date());
	          }function n(e) {
	            if (1 != e.touches.length) return !1;var t = e.touches[0];return t.radiusX <= 1 && t.radiusY <= 1;
	          }function r(e, t) {
	            if (null == t.left) return !0;var n = t.left - e.left,
	                r = t.top - e.top;return n * n + r * r > 400;
	          }var i = e.display;Ea(i.scroller, "mousedown", Et(e, $t)), xo && 11 > bo ? Ea(i.scroller, "dblclick", Et(e, function (t) {
	            if (!Ti(e, t)) {
	              var n = Yt(e, t);if (n && !Jt(e, t) && !Gt(e.display, t)) {
	                Ma(t);var r = e.findWordAt(n);be(e.doc, r.anchor, r.head);
	              }
	            }
	          })) : Ea(i.scroller, "dblclick", function (t) {
	            Ti(e, t) || Ma(t);
	          }), Do || Ea(i.scroller, "contextmenu", function (t) {
	            xn(e, t);
	          });var o,
	              a = { end: 0 };Ea(i.scroller, "touchstart", function (t) {
	            if (!Ti(e, t) && !n(t)) {
	              clearTimeout(o);var r = +new Date();i.activeTouch = { start: r, moved: !1, prev: r - a.end <= 300 ? a : null }, 1 == t.touches.length && (i.activeTouch.left = t.touches[0].pageX, i.activeTouch.top = t.touches[0].pageY);
	            }
	          }), Ea(i.scroller, "touchmove", function () {
	            i.activeTouch && (i.activeTouch.moved = !0);
	          }), Ea(i.scroller, "touchend", function (n) {
	            var o = i.activeTouch;if (o && !Gt(i, n) && null != o.left && !o.moved && new Date() - o.start < 300) {
	              var a,
	                  l = e.coordsChar(i.activeTouch, "page");a = !o.prev || r(o, o.prev) ? new fe(l, l) : !o.prev.prev || r(o, o.prev.prev) ? e.findWordAt(l) : new fe(Bo(l.line, 0), me(e.doc, Bo(l.line + 1, 0))), e.setSelection(a.anchor, a.head), e.focus(), Ma(n);
	            }t();
	          }), Ea(i.scroller, "touchcancel", t), Ea(i.scroller, "scroll", function () {
	            i.scroller.clientHeight && (rn(e, i.scroller.scrollTop), on(e, i.scroller.scrollLeft, !0), Pa(e, "scroll", e));
	          }), Ea(i.scroller, "mousewheel", function (t) {
	            an(e, t);
	          }), Ea(i.scroller, "DOMMouseScroll", function (t) {
	            an(e, t);
	          }), Ea(i.wrapper, "scroll", function () {
	            i.wrapper.scrollTop = i.wrapper.scrollLeft = 0;
	          }), i.dragFunctions = { enter: function enter(t) {
	              Ti(e, t) || Aa(t);
	            }, over: function over(t) {
	              Ti(e, t) || (tn(e, t), Aa(t));
	            }, start: function start(t) {
	              en(e, t);
	            }, drop: Et(e, Qt), leave: function leave(t) {
	              Ti(e, t) || nn(e);
	            } };var l = i.input.getField();Ea(l, "keyup", function (t) {
	            pn.call(e, t);
	          }), Ea(l, "keydown", Et(e, hn)), Ea(l, "keypress", Et(e, mn)), Ea(l, "focus", Bi(vn, e)), Ea(l, "blur", Bi(yn, e));
	        }function Ut(t, n, r) {
	          var i = r && r != e.Init;if (!n != !i) {
	            var o = t.display.dragFunctions,
	                a = n ? Ea : Ia;a(t.display.scroller, "dragstart", o.start), a(t.display.scroller, "dragenter", o.enter), a(t.display.scroller, "dragover", o.over), a(t.display.scroller, "dragleave", o.leave), a(t.display.scroller, "drop", o.drop);
	          }
	        }function qt(e) {
	          var t = e.display;t.lastWrapHeight == t.wrapper.clientHeight && t.lastWrapWidth == t.wrapper.clientWidth || (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize());
	        }function Gt(e, t) {
	          for (var n = wi(t); n != e.wrapper; n = n.parentNode) {
	            if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == e.sizer && n != e.mover) return !0;
	          }
	        }function Yt(e, t, n, r) {
	          var i = e.display;if (!n && "true" == wi(t).getAttribute("cm-not-content")) return null;var o,
	              a,
	              l = i.lineSpace.getBoundingClientRect();try {
	            o = t.clientX - l.left, a = t.clientY - l.top;
	          } catch (t) {
	            return null;
	          }var s,
	              c = gt(e, o, a);if (r && 1 == c.xRel && (s = Zr(e.doc, c.line).text).length == c.ch) {
	            var u = Fa(s, s.length, e.options.tabSize) - s.length;c = Bo(c.line, Math.max(0, Math.round((o - Ge(e.display).left) / xt(e.display)) - u));
	          }return c;
	        }function $t(e) {
	          var t = this,
	              n = t.display;if (!(Ti(t, e) || n.activeTouch && n.input.supportsTouch())) {
	            if (n.shift = e.shiftKey, Gt(n, e)) return void (wo || (n.scroller.draggable = !1, setTimeout(function () {
	              n.scroller.draggable = !0;
	            }, 100)));if (!Jt(t, e)) {
	              var r = Yt(t, e);switch (window.focus(), ki(e)) {case 1:
	                  t.state.selectingText ? t.state.selectingText(e) : r ? Vt(t, e, r) : wi(e) == n.scroller && Ma(e);break;case 2:
	                  wo && (t.state.lastMiddleDown = +new Date()), r && be(t.doc, r), setTimeout(function () {
	                    n.input.focus();
	                  }, 20), Ma(e);break;case 3:
	                  Do ? xn(t, e) : gn(t);}
	            }
	          }
	        }function Vt(e, t, n) {
	          xo ? setTimeout(Bi(X, e), 0) : e.curOp.focus = Gi();var r,
	              i = +new Date();Uo && Uo.time > i - 400 && 0 == _o(Uo.pos, n) ? r = "triple" : jo && jo.time > i - 400 && 0 == _o(jo.pos, n) ? (r = "double", Uo = { time: i, pos: n }) : (r = "single", jo = { time: i, pos: n });var o,
	              a = e.doc.sel,
	              l = Eo ? t.metaKey : t.ctrlKey;e.options.dragDrop && el && !e.isReadOnly() && "single" == r && (o = a.contains(n)) > -1 && (_o((o = a.ranges[o]).from(), n) < 0 || n.xRel > 0) && (_o(o.to(), n) > 0 || n.xRel < 0) ? Kt(e, t, n, l) : Xt(e, t, n, r, l);
	        }function Kt(e, t, n, r) {
	          var i = e.display,
	              o = +new Date(),
	              a = Et(e, function (l) {
	            wo && (i.scroller.draggable = !1), e.state.draggingText = !1, Ia(document, "mouseup", a), Ia(i.scroller, "drop", a), Math.abs(t.clientX - l.clientX) + Math.abs(t.clientY - l.clientY) < 10 && (Ma(l), !r && +new Date() - 200 < o && be(e.doc, n), wo || xo && 9 == bo ? setTimeout(function () {
	              document.body.focus(), i.input.focus();
	            }, 20) : i.input.focus());
	          });wo && (i.scroller.draggable = !0), e.state.draggingText = a, i.scroller.dragDrop && i.scroller.dragDrop(), Ea(document, "mouseup", a), Ea(i.scroller, "drop", a);
	        }function Xt(e, t, n, r, i) {
	          function o(t) {
	            if (0 != _o(g, t)) if (g = t, "rect" == r) {
	              for (var i = [], o = e.options.tabSize, a = Fa(Zr(c, n.line).text, n.ch, o), l = Fa(Zr(c, t.line).text, t.ch, o), s = Math.min(a, l), d = Math.max(a, l), p = Math.min(n.line, t.line), m = Math.min(e.lastLine(), Math.max(n.line, t.line)); m >= p; p++) {
	                var v = Zr(c, p).text,
	                    y = za(v, s, o);s == d ? i.push(new fe(Bo(p, y), Bo(p, y))) : v.length > y && i.push(new fe(Bo(p, y), Bo(p, za(v, d, o))));
	              }i.length || i.push(new fe(n, n)), Te(c, he(h.ranges.slice(0, f).concat(i), f), { origin: "*mouse", scroll: !1 }), e.scrollIntoView(t);
	            } else {
	              var x = u,
	                  b = x.anchor,
	                  w = t;if ("single" != r) {
	                if ("double" == r) var k = e.findWordAt(t);else var k = new fe(Bo(t.line, 0), me(c, Bo(t.line + 1, 0)));_o(k.anchor, b) > 0 ? (w = k.head, b = K(x.from(), k.anchor)) : (w = k.anchor, b = V(x.to(), k.head));
	              }var i = h.ranges.slice(0);i[f] = new fe(me(c, b), w), Te(c, he(i, f), Ba);
	            }
	          }function a(t) {
	            var n = ++y,
	                i = Yt(e, t, !0, "rect" == r);if (i) if (0 != _o(i, g)) {
	              e.curOp.focus = Gi(), o(i);var l = b(s, c);(i.line >= l.to || i.line < l.from) && setTimeout(Et(e, function () {
	                y == n && a(t);
	              }), 150);
	            } else {
	              var u = t.clientY < v.top ? -20 : t.clientY > v.bottom ? 20 : 0;u && setTimeout(Et(e, function () {
	                y == n && (s.scroller.scrollTop += u, a(t));
	              }), 50);
	            }
	          }function l(t) {
	            e.state.selectingText = !1, y = 1 / 0, Ma(t), s.input.focus(), Ia(document, "mousemove", x), Ia(document, "mouseup", w), c.history.lastSelOrigin = null;
	          }var s = e.display,
	              c = e.doc;Ma(t);var u,
	              f,
	              h = c.sel,
	              d = h.ranges;if (i && !t.shiftKey ? (f = c.sel.contains(n), u = f > -1 ? d[f] : new fe(n, n)) : (u = c.sel.primary(), f = c.sel.primIndex), Oo ? t.shiftKey && t.metaKey : t.altKey) r = "rect", i || (u = new fe(n, n)), n = Yt(e, t, !0, !0), f = -1;else if ("double" == r) {
	            var p = e.findWordAt(n);u = e.display.shift || c.extend ? xe(c, u, p.anchor, p.head) : p;
	          } else if ("triple" == r) {
	            var m = new fe(Bo(n.line, 0), me(c, Bo(n.line + 1, 0)));u = e.display.shift || c.extend ? xe(c, u, m.anchor, m.head) : m;
	          } else u = xe(c, u, n);i ? -1 == f ? (f = d.length, Te(c, he(d.concat([u]), f), { scroll: !1, origin: "*mouse" })) : d.length > 1 && d[f].empty() && "single" == r && !t.shiftKey ? (Te(c, he(d.slice(0, f).concat(d.slice(f + 1)), 0), { scroll: !1, origin: "*mouse" }), h = c.sel) : ke(c, f, u, Ba) : (f = 0, Te(c, new ue([u], 0), Ba), h = c.sel);var g = n,
	              v = s.wrapper.getBoundingClientRect(),
	              y = 0,
	              x = Et(e, function (e) {
	            ki(e) ? a(e) : l(e);
	          }),
	              w = Et(e, l);e.state.selectingText = w, Ea(document, "mousemove", x), Ea(document, "mouseup", w);
	        }function Zt(e, t, n, r) {
	          try {
	            var i = t.clientX,
	                o = t.clientY;
	          } catch (t) {
	            return !1;
	          }if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;r && Ma(t);var a = e.display,
	              l = a.lineDiv.getBoundingClientRect();if (o > l.bottom || !Ni(e, n)) return bi(t);o -= l.top - a.viewOffset;for (var s = 0; s < e.options.gutters.length; ++s) {
	            var c = a.gutters.childNodes[s];if (c && c.getBoundingClientRect().right >= i) {
	              var u = ni(e.doc, o),
	                  f = e.options.gutters[s];return Pa(e, n, e, u, f, t), bi(t);
	            }
	          }
	        }function Jt(e, t) {
	          return Zt(e, t, "gutterClick", !0);
	        }function Qt(e) {
	          var t = this;if (nn(t), !Ti(t, e) && !Gt(t.display, e)) {
	            Ma(e), xo && ($o = +new Date());var n = Yt(t, e, !0),
	                r = e.dataTransfer.files;if (n && !t.isReadOnly()) if (r && r.length && window.FileReader && window.File) for (var i = r.length, o = Array(i), a = 0, l = function l(e, r) {
	              if (!t.options.allowDropFileTypes || -1 != Pi(t.options.allowDropFileTypes, e.type)) {
	                var l = new FileReader();l.onload = Et(t, function () {
	                  var e = l.result;if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""), o[r] = e, ++a == i) {
	                    n = me(t.doc, n);var s = { from: n, to: n, text: t.doc.splitLines(o.join(t.doc.lineSeparator())), origin: "paste" };Tn(t.doc, s), Le(t.doc, de(n, Qo(s)));
	                  }
	                }), l.readAsText(e);
	              }
	            }, s = 0; i > s; ++s) {
	              l(r[s], s);
	            } else {
	              if (t.state.draggingText && t.doc.sel.contains(n) > -1) return t.state.draggingText(e), void setTimeout(function () {
	                t.display.input.focus();
	              }, 20);try {
	                var o = e.dataTransfer.getData("Text");if (o) {
	                  if (t.state.draggingText && !(Eo ? e.altKey : e.ctrlKey)) var c = t.listSelections();if (Me(t.doc, de(n, n)), c) for (var s = 0; s < c.length; ++s) {
	                    In(t.doc, "", c[s].anchor, c[s].head, "drag");
	                  }t.replaceSelection(o, "around", "paste"), t.display.input.focus();
	                }
	              } catch (e) {}
	            }
	          }
	        }function en(e, t) {
	          if (xo && (!e.state.draggingText || +new Date() - $o < 100)) return void Aa(t);if (!Ti(e, t) && !Gt(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !Lo)) {
	            var n = ji("img", null, null, "position: fixed; left: 0; top: 0;");n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", Co && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop), t.dataTransfer.setDragImage(n, 0, 0), Co && n.parentNode.removeChild(n);
	          }
	        }function tn(e, t) {
	          var n = Yt(e, t);if (n) {
	            var r = document.createDocumentFragment();He(e, n, r), e.display.dragCursor || (e.display.dragCursor = ji("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), qi(e.display.dragCursor, r);
	          }
	        }function nn(e) {
	          e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null);
	        }function rn(e, t) {
	          Math.abs(e.doc.scrollTop - t) < 2 || (e.doc.scrollTop = t, go || A(e, { top: t }), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t), e.display.scrollbars.setScrollTop(t), go && A(e), _e(e, 100));
	        }function on(e, t, n) {
	          (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) || (t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), e.doc.scrollLeft = t, w(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t));
	        }function an(e, t) {
	          var n = Xo(t),
	              r = n.x,
	              i = n.y,
	              o = e.display,
	              a = o.scroller,
	              l = a.scrollWidth > a.clientWidth,
	              s = a.scrollHeight > a.clientHeight;if (r && l || i && s) {
	            if (i && Eo && wo) e: for (var c = t.target, u = o.view; c != a; c = c.parentNode) {
	              for (var f = 0; f < u.length; f++) {
	                if (u[f].node == c) {
	                  e.display.currentWheelTarget = c;break e;
	                }
	              }
	            }if (r && !go && !Co && null != Ko) return i && s && rn(e, Math.max(0, Math.min(a.scrollTop + i * Ko, a.scrollHeight - a.clientHeight))), on(e, Math.max(0, Math.min(a.scrollLeft + r * Ko, a.scrollWidth - a.clientWidth))), (!i || i && s) && Ma(t), void (o.wheelStartX = null);if (i && null != Ko) {
	              var h = i * Ko,
	                  d = e.doc.scrollTop,
	                  p = d + o.wrapper.clientHeight;0 > h ? d = Math.max(0, d + h - 50) : p = Math.min(e.doc.height, p + h + 50), A(e, { top: d, bottom: p });
	            }20 > Vo && (null == o.wheelStartX ? (o.wheelStartX = a.scrollLeft, o.wheelStartY = a.scrollTop, o.wheelDX = r, o.wheelDY = i, setTimeout(function () {
	              if (null != o.wheelStartX) {
	                var e = a.scrollLeft - o.wheelStartX,
	                    t = a.scrollTop - o.wheelStartY,
	                    n = t && o.wheelDY && t / o.wheelDY || e && o.wheelDX && e / o.wheelDX;o.wheelStartX = o.wheelStartY = null, n && (Ko = (Ko * Vo + n) / (Vo + 1), ++Vo);
	              }
	            }, 200)) : (o.wheelDX += r, o.wheelDY += i));
	          }
	        }function ln(e, t, n) {
	          if ("string" == typeof t && (t = ua[t], !t)) return !1;e.display.input.ensurePolled();var r = e.display.shift,
	              i = !1;try {
	            e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), i = t(e) != Ha;
	          } finally {
	            e.display.shift = r, e.state.suppressEdits = !1;
	          }return i;
	        }function sn(e, t, n) {
	          for (var r = 0; r < e.state.keyMaps.length; r++) {
	            var i = ha(t, e.state.keyMaps[r], n, e);if (i) return i;
	          }return e.options.extraKeys && ha(t, e.options.extraKeys, n, e) || ha(t, e.options.keyMap, n, e);
	        }function cn(e, t, n, r) {
	          var i = e.state.keySeq;if (i) {
	            if (da(t)) return "handled";Zo.set(50, function () {
	              e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset());
	            }), t = i + " " + t;
	          }var o = sn(e, t, r);return "multi" == o && (e.state.keySeq = t), "handled" == o && Ci(e, "keyHandled", e, t, n), "handled" != o && "multi" != o || (Ma(n), Be(e)), i && !o && /\'$/.test(t) ? (Ma(n), !0) : !!o;
	        }function un(e, t) {
	          var n = pa(t, !0);return n ? t.shiftKey && !e.state.keySeq ? cn(e, "Shift-" + n, t, function (t) {
	            return ln(e, t, !0);
	          }) || cn(e, n, t, function (t) {
	            return ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) ? ln(e, t) : void 0;
	          }) : cn(e, n, t, function (t) {
	            return ln(e, t);
	          }) : !1;
	        }function fn(e, t, n) {
	          return cn(e, "'" + n + "'", t, function (t) {
	            return ln(e, t, !0);
	          });
	        }function hn(e) {
	          var t = this;if (t.curOp.focus = Gi(), !Ti(t, e)) {
	            xo && 11 > bo && 27 == e.keyCode && (e.returnValue = !1);var n = e.keyCode;t.display.shift = 16 == n || e.shiftKey;var r = un(t, e);Co && (Jo = r ? n : null, !r && 88 == n && !rl && (Eo ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), 18 != n || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || dn(t);
	          }
	        }function dn(e) {
	          function t(e) {
	            18 != e.keyCode && e.altKey || (Za(n, "CodeMirror-crosshair"), Ia(document, "keyup", t), Ia(document, "mouseover", t));
	          }var n = e.display.lineDiv;Ja(n, "CodeMirror-crosshair"), Ea(document, "keyup", t), Ea(document, "mouseover", t);
	        }function pn(e) {
	          16 == e.keyCode && (this.doc.sel.shift = !1), Ti(this, e);
	        }function mn(e) {
	          var t = this;if (!(Gt(t.display, e) || Ti(t, e) || e.ctrlKey && !e.altKey || Eo && e.metaKey)) {
	            var n = e.keyCode,
	                r = e.charCode;if (Co && n == Jo) return Jo = null, void Ma(e);if (!Co || e.which && !(e.which < 10) || !un(t, e)) {
	              var i = String.fromCharCode(null == r ? n : r);fn(t, e, i) || t.display.input.onKeyPress(e);
	            }
	          }
	        }function gn(e) {
	          e.state.delayingBlurEvent = !0, setTimeout(function () {
	            e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, yn(e));
	          }, 100);
	        }function vn(e) {
	          e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (Pa(e, "focus", e), e.state.focused = !0, Ja(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), wo && setTimeout(function () {
	            e.display.input.reset(!0);
	          }, 20)), e.display.input.receivedFocus()), Be(e));
	        }function yn(e) {
	          e.state.delayingBlurEvent || (e.state.focused && (Pa(e, "blur", e), e.state.focused = !1, Za(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function () {
	            e.state.focused || (e.display.shift = !1);
	          }, 150));
	        }function xn(e, t) {
	          Gt(e.display, t) || bn(e, t) || Ti(e, t, "contextmenu") || e.display.input.onContextMenu(t);
	        }function bn(e, t) {
	          return Ni(e, "gutterContextMenu") ? Zt(e, t, "gutterContextMenu", !1) : !1;
	        }function wn(e, t) {
	          if (_o(e, t.from) < 0) return e;if (_o(e, t.to) <= 0) return Qo(t);var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
	              r = e.ch;return e.line == t.to.line && (r += Qo(t).ch - t.to.ch), Bo(n, r);
	        }function kn(e, t) {
	          for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
	            var i = e.sel.ranges[r];n.push(new fe(wn(i.anchor, t), wn(i.head, t)));
	          }return he(n, e.sel.primIndex);
	        }function Sn(e, t, n) {
	          return e.line == t.line ? Bo(n.line, e.ch - t.ch + n.ch) : Bo(n.line + (e.line - t.line), e.ch);
	        }function Cn(e, t, n) {
	          for (var r = [], i = Bo(e.first, 0), o = i, a = 0; a < t.length; a++) {
	            var l = t[a],
	                s = Sn(l.from, i, o),
	                c = Sn(Qo(l), i, o);if (i = l.to, o = c, "around" == n) {
	              var u = e.sel.ranges[a],
	                  f = _o(u.head, u.anchor) < 0;r[a] = new fe(f ? c : s, f ? s : c);
	            } else r[a] = new fe(s, s);
	          }return new ue(r, e.sel.primIndex);
	        }function Ln(e, t, n) {
	          var r = { canceled: !1, from: t.from, to: t.to, text: t.text, origin: t.origin, cancel: function cancel() {
	              this.canceled = !0;
	            } };return n && (r.update = function (t, n, r, i) {
	            t && (this.from = me(e, t)), n && (this.to = me(e, n)), r && (this.text = r), void 0 !== i && (this.origin = i);
	          }), Pa(e, "beforeChange", e, r), e.cm && Pa(e.cm, "beforeChange", e.cm, r), r.canceled ? null : { from: r.from, to: r.to, text: r.text, origin: r.origin };
	        }function Tn(e, t, n) {
	          if (e.cm) {
	            if (!e.cm.curOp) return Et(e.cm, Tn)(e, t, n);if (e.cm.state.suppressEdits) return;
	          }if (!(Ni(e, "beforeChange") || e.cm && Ni(e.cm, "beforeChange")) || (t = Ln(e, t, !0))) {
	            var r = Ho && !n && sr(e, t.from, t.to);if (r) for (var i = r.length - 1; i >= 0; --i) {
	              Mn(e, { from: r[i].from, to: r[i].to, text: i ? [""] : t.text });
	            } else Mn(e, t);
	          }
	        }function Mn(e, t) {
	          if (1 != t.text.length || "" != t.text[0] || 0 != _o(t.from, t.to)) {
	            var n = kn(e, t);ci(e, t, n, e.cm ? e.cm.curOp.id : NaN), En(e, t, n, or(e, t));var r = [];Kr(e, function (e, n) {
	              n || -1 != Pi(r, e.history) || (xi(e.history, t), r.push(e.history)), En(e, t, null, or(e, t));
	            });
	          }
	        }function Nn(e, t, n) {
	          if (!e.cm || !e.cm.state.suppressEdits) {
	            for (var r, i = e.history, o = e.sel, a = "undo" == t ? i.done : i.undone, l = "undo" == t ? i.undone : i.done, s = 0; s < a.length && (r = a[s], n ? !r.ranges || r.equals(e.sel) : r.ranges); s++) {}if (s != a.length) {
	              for (i.lastOrigin = i.lastSelOrigin = null; r = a.pop(), r.ranges;) {
	                if (hi(r, l), n && !r.equals(e.sel)) return void Te(e, r, { clearRedo: !1 });o = r;
	              }var c = [];hi(o, l), l.push({ changes: c, generation: i.generation }), i.generation = r.generation || ++i.maxGeneration;for (var u = Ni(e, "beforeChange") || e.cm && Ni(e.cm, "beforeChange"), s = r.changes.length - 1; s >= 0; --s) {
	                var f = r.changes[s];if (f.origin = t, u && !Ln(e, f, !1)) return void (a.length = 0);c.push(ai(e, f));var h = s ? kn(e, f) : Ii(a);En(e, f, h, lr(e, f)), !s && e.cm && e.cm.scrollIntoView({ from: f.from, to: Qo(f) });var d = [];Kr(e, function (e, t) {
	                  t || -1 != Pi(d, e.history) || (xi(e.history, f), d.push(e.history)), En(e, f, null, lr(e, f));
	                });
	              }
	            }
	          }
	        }function An(e, t) {
	          if (0 != t && (e.first += t, e.sel = new ue(Ri(e.sel.ranges, function (e) {
	            return new fe(Bo(e.anchor.line + t, e.anchor.ch), Bo(e.head.line + t, e.head.ch));
	          }), e.sel.primIndex), e.cm)) {
	            Dt(e.cm, e.first, e.first - t, t);for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++) {
	              Ht(e.cm, r, "gutter");
	            }
	          }
	        }function En(e, t, n, r) {
	          if (e.cm && !e.cm.curOp) return Et(e.cm, En)(e, t, n, r);if (t.to.line < e.first) return void An(e, t.text.length - 1 - (t.to.line - t.from.line));if (!(t.from.line > e.lastLine())) {
	            if (t.from.line < e.first) {
	              var i = t.text.length - 1 - (e.first - t.from.line);An(e, i), t = { from: Bo(e.first, 0), to: Bo(t.to.line + i, t.to.ch), text: [Ii(t.text)], origin: t.origin };
	            }var o = e.lastLine();t.to.line > o && (t = { from: t.from, to: Bo(o, Zr(e, o).text.length), text: [t.text[0]], origin: t.origin }), t.removed = Jr(e, t.from, t.to), n || (n = kn(e, t)), e.cm ? On(e.cm, t, r) : Yr(e, t, r), Me(e, n, Wa);
	          }
	        }function On(e, t, n) {
	          var r = e.doc,
	              i = e.display,
	              a = t.from,
	              l = t.to,
	              s = !1,
	              c = a.line;e.options.lineWrapping || (c = ti(yr(Zr(r, a.line))), r.iter(c, l.line + 1, function (e) {
	            return e == i.maxLine ? (s = !0, !0) : void 0;
	          })), r.sel.contains(t.from, t.to) > -1 && Mi(e), Yr(r, t, n, o(e)), e.options.lineWrapping || (r.iter(c, a.line + t.text.length, function (e) {
	            var t = f(e);t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, s = !1);
	          }), s && (e.curOp.updateMaxLine = !0)), r.frontier = Math.min(r.frontier, a.line), _e(e, 400);var u = t.text.length - (l.line - a.line) - 1;t.full ? Dt(e) : a.line != l.line || 1 != t.text.length || Gr(e.doc, t) ? Dt(e, a.line, l.line + 1, u) : Ht(e, a.line, "text");var h = Ni(e, "changes"),
	              d = Ni(e, "change");if (d || h) {
	            var p = { from: a, to: l, text: t.text, removed: t.removed, origin: t.origin };d && Ci(e, "change", e, p), h && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(p);
	          }e.display.selForContextMenu = null;
	        }function In(e, t, n, r, i) {
	          if (r || (r = n), _o(r, n) < 0) {
	            var o = r;r = n, n = o;
	          }"string" == typeof t && (t = e.splitLines(t)), Tn(e, { from: n, to: r, text: t, origin: i });
	        }function Pn(e, t) {
	          if (!Ti(e, "scrollCursorIntoView")) {
	            var n = e.display,
	                r = n.sizer.getBoundingClientRect(),
	                i = null;if (t.top + r.top < 0 ? i = !0 : t.bottom + r.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !Mo) {
	              var o = ji("div", "​", null, "position: absolute; top: " + (t.top - n.viewOffset - Ue(e.display)) + "px; height: " + (t.bottom - t.top + Ye(e) + n.barHeight) + "px; left: " + t.left + "px; width: 2px;");e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o);
	            }
	          }
	        }function Rn(e, t, n, r) {
	          null == r && (r = 0);for (var i = 0; 5 > i; i++) {
	            var o = !1,
	                a = dt(e, t),
	                l = n && n != t ? dt(e, n) : a,
	                s = Hn(e, Math.min(a.left, l.left), Math.min(a.top, l.top) - r, Math.max(a.left, l.left), Math.max(a.bottom, l.bottom) + r),
	                c = e.doc.scrollTop,
	                u = e.doc.scrollLeft;if (null != s.scrollTop && (rn(e, s.scrollTop), Math.abs(e.doc.scrollTop - c) > 1 && (o = !0)), null != s.scrollLeft && (on(e, s.scrollLeft), Math.abs(e.doc.scrollLeft - u) > 1 && (o = !0)), !o) break;
	          }return a;
	        }function Dn(e, t, n, r, i) {
	          var o = Hn(e, t, n, r, i);null != o.scrollTop && rn(e, o.scrollTop), null != o.scrollLeft && on(e, o.scrollLeft);
	        }function Hn(e, t, n, r, i) {
	          var o = e.display,
	              a = yt(e.display);0 > n && (n = 0);var l = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : o.scroller.scrollTop,
	              s = Ve(e),
	              c = {};i - n > s && (i = n + s);var u = e.doc.height + qe(o),
	              f = a > n,
	              h = i > u - a;if (l > n) c.scrollTop = f ? 0 : n;else if (i > l + s) {
	            var d = Math.min(n, (h ? u : i) - s);d != l && (c.scrollTop = d);
	          }var p = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : o.scroller.scrollLeft,
	              m = $e(e) - (e.options.fixedGutter ? o.gutters.offsetWidth : 0),
	              g = r - t > m;return g && (r = t + m), 10 > t ? c.scrollLeft = 0 : p > t ? c.scrollLeft = Math.max(0, t - (g ? 0 : 10)) : r > m + p - 3 && (c.scrollLeft = r + (g ? 0 : 10) - m), c;
	        }function Wn(e, t, n) {
	          null == t && null == n || _n(e), null != t && (e.curOp.scrollLeft = (null == e.curOp.scrollLeft ? e.doc.scrollLeft : e.curOp.scrollLeft) + t), null != n && (e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + n);
	        }function Bn(e) {
	          _n(e);var t = e.getCursor(),
	              n = t,
	              r = t;e.options.lineWrapping || (n = t.ch ? Bo(t.line, t.ch - 1) : t, r = Bo(t.line, t.ch + 1)), e.curOp.scrollToPos = { from: n, to: r, margin: e.options.cursorScrollMargin, isCursor: !0 };
	        }function _n(e) {
	          var t = e.curOp.scrollToPos;if (t) {
	            e.curOp.scrollToPos = null;var n = pt(e, t.from),
	                r = pt(e, t.to),
	                i = Hn(e, Math.min(n.left, r.left), Math.min(n.top, r.top) - t.margin, Math.max(n.right, r.right), Math.max(n.bottom, r.bottom) + t.margin);e.scrollTo(i.scrollLeft, i.scrollTop);
	          }
	        }function Fn(e, t, n, r) {
	          var i,
	              o = e.doc;null == n && (n = "add"), "smart" == n && (o.mode.indent ? i = je(e, t) : n = "prev");var a = e.options.tabSize,
	              l = Zr(o, t),
	              s = Fa(l.text, null, a);l.stateAfter && (l.stateAfter = null);var c,
	              u = l.text.match(/^\s*/)[0];if (r || /\S/.test(l.text)) {
	            if ("smart" == n && (c = o.mode.indent(i, l.text.slice(u.length), l.text), c == Ha || c > 150)) {
	              if (!r) return;n = "prev";
	            }
	          } else c = 0, n = "not";"prev" == n ? c = t > o.first ? Fa(Zr(o, t - 1).text, null, a) : 0 : "add" == n ? c = s + e.options.indentUnit : "subtract" == n ? c = s - e.options.indentUnit : "number" == typeof n && (c = s + n), c = Math.max(0, c);var f = "",
	              h = 0;if (e.options.indentWithTabs) for (var d = Math.floor(c / a); d; --d) {
	            h += a, f += "	";
	          }if (c > h && (f += Oi(c - h)), f != u) return In(o, f, Bo(t, 0), Bo(t, u.length), "+input"), l.stateAfter = null, !0;for (var d = 0; d < o.sel.ranges.length; d++) {
	            var p = o.sel.ranges[d];if (p.head.line == t && p.head.ch < u.length) {
	              var h = Bo(t, u.length);ke(o, d, new fe(h, h));break;
	            }
	          }
	        }function zn(e, t, n, r) {
	          var i = t,
	              o = t;return "number" == typeof t ? o = Zr(e, pe(e, t)) : i = ti(t), null == i ? null : (r(o, i) && e.cm && Ht(e.cm, i, n), o);
	        }function jn(e, t) {
	          for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
	            for (var o = t(n[i]); r.length && _o(o.from, Ii(r).to) <= 0;) {
	              var a = r.pop();if (_o(a.from, o.from) < 0) {
	                o.from = a.from;break;
	              }
	            }r.push(o);
	          }At(e, function () {
	            for (var t = r.length - 1; t >= 0; t--) {
	              In(e.doc, "", r[t].from, r[t].to, "+delete");
	            }Bn(e);
	          });
	        }function Un(e, t, n, r, i) {
	          function o() {
	            var t = l + n;return t < e.first || t >= e.first + e.size ? !1 : (l = t, u = Zr(e, t));
	          }function a(e) {
	            var t = (i ? fo : ho)(u, s, n, !0);if (null == t) {
	              if (e || !o()) return !1;s = i ? (0 > n ? io : ro)(u) : 0 > n ? u.text.length : 0;
	            } else s = t;return !0;
	          }var l = t.line,
	              s = t.ch,
	              c = n,
	              u = Zr(e, l);if ("char" == r) a();else if ("column" == r) a(!0);else if ("word" == r || "group" == r) for (var f = null, h = "group" == r, d = e.cm && e.cm.getHelper(t, "wordChars"), p = !0; !(0 > n) || a(!p); p = !1) {
	            var m = u.text.charAt(s) || "\n",
	                g = _i(m, d) ? "w" : h && "\n" == m ? "n" : !h || /\s/.test(m) ? null : "p";if (!h || p || g || (g = "s"), f && f != g) {
	              0 > n && (n = 1, a());break;
	            }if (g && (f = g), n > 0 && !a(!p)) break;
	          }var v = Ie(e, Bo(l, s), t, c, !0);return _o(t, v) || (v.hitSide = !0), v;
	        }function qn(e, t, n, r) {
	          var i,
	              o = e.doc,
	              a = t.left;if ("page" == r) {
	            var l = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);i = t.top + n * (l - (0 > n ? 1.5 : .5) * yt(e.display));
	          } else "line" == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);for (;;) {
	            var s = gt(e, a, i);if (!s.outside) break;if (0 > n ? 0 >= i : i >= o.height) {
	              s.hitSide = !0;break;
	            }i += 5 * n;
	          }return s;
	        }function Gn(t, n, r, i) {
	          e.defaults[t] = n, r && (ta[t] = i ? function (e, t, n) {
	            n != na && r(e, t, n);
	          } : r);
	        }function Yn(e) {
	          for (var t, n, r, i, o = e.split(/-(?!$)/), e = o[o.length - 1], a = 0; a < o.length - 1; a++) {
	            var l = o[a];if (/^(cmd|meta|m)$/i.test(l)) i = !0;else if (/^a(lt)?$/i.test(l)) t = !0;else if (/^(c|ctrl|control)$/i.test(l)) n = !0;else {
	              if (!/^s(hift)$/i.test(l)) throw new Error("Unrecognized modifier name: " + l);r = !0;
	            }
	          }return t && (e = "Alt-" + e), n && (e = "Ctrl-" + e), i && (e = "Cmd-" + e), r && (e = "Shift-" + e), e;
	        }function $n(e) {
	          return "string" == typeof e ? fa[e] : e;
	        }function Vn(e, t, n, r, i) {
	          if (r && r.shared) return Kn(e, t, n, r, i);if (e.cm && !e.cm.curOp) return Et(e.cm, Vn)(e, t, n, r, i);var o = new va(e, i),
	              a = _o(t, n);if (r && Wi(r, o, !1), a > 0 || 0 == a && o.clearWhenEmpty !== !1) return o;if (o.replacedWith && (o.collapsed = !0, o.widgetNode = ji("span", [o.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) {
	            if (vr(e, t.line, t, n, o) || t.line != n.line && vr(e, n.line, t, n, o)) throw new Error("Inserting collapsed marker partially overlapping an existing one");Wo = !0;
	          }o.addToHistory && ci(e, { from: t, to: n, origin: "markText" }, e.sel, NaN);var l,
	              s = t.line,
	              c = e.cm;if (e.iter(s, n.line + 1, function (e) {
	            c && o.collapsed && !c.options.lineWrapping && yr(e) == c.display.maxLine && (l = !0), o.collapsed && s != t.line && ei(e, 0), nr(e, new Qn(o, s == t.line ? t.ch : null, s == n.line ? n.ch : null)), ++s;
	          }), o.collapsed && e.iter(t.line, n.line + 1, function (t) {
	            kr(e, t) && ei(t, 0);
	          }), o.clearOnEnter && Ea(o, "beforeCursorEnter", function () {
	            o.clear();
	          }), o.readOnly && (Ho = !0, (e.history.done.length || e.history.undone.length) && e.clearHistory()), o.collapsed && (o.id = ++ga, o.atomic = !0), c) {
	            if (l && (c.curOp.updateMaxLine = !0), o.collapsed) Dt(c, t.line, n.line + 1);else if (o.className || o.title || o.startStyle || o.endStyle || o.css) for (var u = t.line; u <= n.line; u++) {
	              Ht(c, u, "text");
	            }o.atomic && Ae(c.doc), Ci(c, "markerAdded", c, o);
	          }return o;
	        }function Kn(e, t, n, r, i) {
	          r = Wi(r), r.shared = !1;var o = [Vn(e, t, n, r, i)],
	              a = o[0],
	              l = r.widgetNode;return Kr(e, function (e) {
	            l && (r.widgetNode = l.cloneNode(!0)), o.push(Vn(e, me(e, t), me(e, n), r, i));for (var s = 0; s < e.linked.length; ++s) {
	              if (e.linked[s].isParent) return;
	            }a = Ii(o);
	          }), new ya(o, a);
	        }function Xn(e) {
	          return e.findMarks(Bo(e.first, 0), e.clipPos(Bo(e.lastLine())), function (e) {
	            return e.parent;
	          });
	        }function Zn(e, t) {
	          for (var n = 0; n < t.length; n++) {
	            var r = t[n],
	                i = r.find(),
	                o = e.clipPos(i.from),
	                a = e.clipPos(i.to);if (_o(o, a)) {
	              var l = Vn(e, o, a, r.primary, r.primary.type);r.markers.push(l), l.parent = r;
	            }
	          }
	        }function Jn(e) {
	          for (var t = 0; t < e.length; t++) {
	            var n = e[t],
	                r = [n.primary.doc];Kr(n.primary.doc, function (e) {
	              r.push(e);
	            });for (var i = 0; i < n.markers.length; i++) {
	              var o = n.markers[i];-1 == Pi(r, o.doc) && (o.parent = null, n.markers.splice(i--, 1));
	            }
	          }
	        }function Qn(e, t, n) {
	          this.marker = e, this.from = t, this.to = n;
	        }function er(e, t) {
	          if (e) for (var n = 0; n < e.length; ++n) {
	            var r = e[n];if (r.marker == t) return r;
	          }
	        }function tr(e, t) {
	          for (var n, r = 0; r < e.length; ++r) {
	            e[r] != t && (n || (n = [])).push(e[r]);
	          }return n;
	        }function nr(e, t) {
	          e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], t.marker.attachLine(e);
	        }function rr(e, t, n) {
	          if (e) for (var r, i = 0; i < e.length; ++i) {
	            var o = e[i],
	                a = o.marker,
	                l = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);if (l || o.from == t && "bookmark" == a.type && (!n || !o.marker.insertLeft)) {
	              var s = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);(r || (r = [])).push(new Qn(a, o.from, s ? null : o.to));
	            }
	          }return r;
	        }function ir(e, t, n) {
	          if (e) for (var r, i = 0; i < e.length; ++i) {
	            var o = e[i],
	                a = o.marker,
	                l = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);if (l || o.from == t && "bookmark" == a.type && (!n || o.marker.insertLeft)) {
	              var s = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);(r || (r = [])).push(new Qn(a, s ? null : o.from - t, null == o.to ? null : o.to - t));
	            }
	          }return r;
	        }function or(e, t) {
	          if (t.full) return null;var n = ve(e, t.from.line) && Zr(e, t.from.line).markedSpans,
	              r = ve(e, t.to.line) && Zr(e, t.to.line).markedSpans;if (!n && !r) return null;var i = t.from.ch,
	              o = t.to.ch,
	              a = 0 == _o(t.from, t.to),
	              l = rr(n, i, a),
	              s = ir(r, o, a),
	              c = 1 == t.text.length,
	              u = Ii(t.text).length + (c ? i : 0);if (l) for (var f = 0; f < l.length; ++f) {
	            var h = l[f];if (null == h.to) {
	              var d = er(s, h.marker);d ? c && (h.to = null == d.to ? null : d.to + u) : h.to = i;
	            }
	          }if (s) for (var f = 0; f < s.length; ++f) {
	            var h = s[f];if (null != h.to && (h.to += u), null == h.from) {
	              var d = er(l, h.marker);d || (h.from = u, c && (l || (l = [])).push(h));
	            } else h.from += u, c && (l || (l = [])).push(h);
	          }l && (l = ar(l)), s && s != l && (s = ar(s));var p = [l];if (!c) {
	            var m,
	                g = t.text.length - 2;if (g > 0 && l) for (var f = 0; f < l.length; ++f) {
	              null == l[f].to && (m || (m = [])).push(new Qn(l[f].marker, null, null));
	            }for (var f = 0; g > f; ++f) {
	              p.push(m);
	            }p.push(s);
	          }return p;
	        }function ar(e) {
	          for (var t = 0; t < e.length; ++t) {
	            var n = e[t];null != n.from && n.from == n.to && n.marker.clearWhenEmpty !== !1 && e.splice(t--, 1);
	          }return e.length ? e : null;
	        }function lr(e, t) {
	          var n = mi(e, t),
	              r = or(e, t);if (!n) return r;if (!r) return n;for (var i = 0; i < n.length; ++i) {
	            var o = n[i],
	                a = r[i];if (o && a) e: for (var l = 0; l < a.length; ++l) {
	              for (var s = a[l], c = 0; c < o.length; ++c) {
	                if (o[c].marker == s.marker) continue e;
	              }o.push(s);
	            } else a && (n[i] = a);
	          }return n;
	        }function sr(e, t, n) {
	          var r = null;if (e.iter(t.line, n.line + 1, function (e) {
	            if (e.markedSpans) for (var t = 0; t < e.markedSpans.length; ++t) {
	              var n = e.markedSpans[t].marker;!n.readOnly || r && -1 != Pi(r, n) || (r || (r = [])).push(n);
	            }
	          }), !r) return null;for (var i = [{ from: t, to: n }], o = 0; o < r.length; ++o) {
	            for (var a = r[o], l = a.find(0), s = 0; s < i.length; ++s) {
	              var c = i[s];if (!(_o(c.to, l.from) < 0 || _o(c.from, l.to) > 0)) {
	                var u = [s, 1],
	                    f = _o(c.from, l.from),
	                    h = _o(c.to, l.to);(0 > f || !a.inclusiveLeft && !f) && u.push({ from: c.from, to: l.from }), (h > 0 || !a.inclusiveRight && !h) && u.push({ from: l.to, to: c.to }), i.splice.apply(i, u), s += u.length - 1;
	              }
	            }
	          }return i;
	        }function cr(e) {
	          var t = e.markedSpans;if (t) {
	            for (var n = 0; n < t.length; ++n) {
	              t[n].marker.detachLine(e);
	            }e.markedSpans = null;
	          }
	        }function ur(e, t) {
	          if (t) {
	            for (var n = 0; n < t.length; ++n) {
	              t[n].marker.attachLine(e);
	            }e.markedSpans = t;
	          }
	        }function fr(e) {
	          return e.inclusiveLeft ? -1 : 0;
	        }function hr(e) {
	          return e.inclusiveRight ? 1 : 0;
	        }function dr(e, t) {
	          var n = e.lines.length - t.lines.length;if (0 != n) return n;var r = e.find(),
	              i = t.find(),
	              o = _o(r.from, i.from) || fr(e) - fr(t);if (o) return -o;var a = _o(r.to, i.to) || hr(e) - hr(t);return a ? a : t.id - e.id;
	        }function pr(e, t) {
	          var n,
	              r = Wo && e.markedSpans;if (r) for (var i, o = 0; o < r.length; ++o) {
	            i = r[o], i.marker.collapsed && null == (t ? i.from : i.to) && (!n || dr(n, i.marker) < 0) && (n = i.marker);
	          }return n;
	        }function mr(e) {
	          return pr(e, !0);
	        }function gr(e) {
	          return pr(e, !1);
	        }function vr(e, t, n, r, i) {
	          var o = Zr(e, t),
	              a = Wo && o.markedSpans;if (a) for (var l = 0; l < a.length; ++l) {
	            var s = a[l];if (s.marker.collapsed) {
	              var c = s.marker.find(0),
	                  u = _o(c.from, n) || fr(s.marker) - fr(i),
	                  f = _o(c.to, r) || hr(s.marker) - hr(i);if (!(u >= 0 && 0 >= f || 0 >= u && f >= 0) && (0 >= u && (s.marker.inclusiveRight && i.inclusiveLeft ? _o(c.to, n) >= 0 : _o(c.to, n) > 0) || u >= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? _o(c.from, r) <= 0 : _o(c.from, r) < 0))) return !0;
	            }
	          }
	        }function yr(e) {
	          for (var t; t = mr(e);) {
	            e = t.find(-1, !0).line;
	          }return e;
	        }function xr(e) {
	          for (var t, n; t = gr(e);) {
	            e = t.find(1, !0).line, (n || (n = [])).push(e);
	          }return n;
	        }function br(e, t) {
	          var n = Zr(e, t),
	              r = yr(n);return n == r ? t : ti(r);
	        }function wr(e, t) {
	          if (t > e.lastLine()) return t;var n,
	              r = Zr(e, t);if (!kr(e, r)) return t;for (; n = gr(r);) {
	            r = n.find(1, !0).line;
	          }return ti(r) + 1;
	        }function kr(e, t) {
	          var n = Wo && t.markedSpans;if (n) for (var r, i = 0; i < n.length; ++i) {
	            if (r = n[i], r.marker.collapsed) {
	              if (null == r.from) return !0;if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && Sr(e, t, r)) return !0;
	            }
	          }
	        }function Sr(e, t, n) {
	          if (null == n.to) {
	            var r = n.marker.find(1, !0);return Sr(e, r.line, er(r.line.markedSpans, n.marker));
	          }if (n.marker.inclusiveRight && n.to == t.text.length) return !0;for (var i, o = 0; o < t.markedSpans.length; ++o) {
	            if (i = t.markedSpans[o], i.marker.collapsed && !i.marker.widgetNode && i.from == n.to && (null == i.to || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && Sr(e, t, i)) return !0;
	          }
	        }function Cr(e, t, n) {
	          ri(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && Wn(e, null, n);
	        }function Lr(e) {
	          if (null != e.height) return e.height;var t = e.doc.cm;if (!t) return 0;if (!Va(document.body, e.node)) {
	            var n = "position: relative;";e.coverGutter && (n += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (n += "width: " + t.display.wrapper.clientWidth + "px;"), qi(t.display.measure, ji("div", [e.node], null, n));
	          }return e.height = e.node.parentNode.offsetHeight;
	        }function Tr(e, t, n, r) {
	          var i = new xa(e, n, r),
	              o = e.cm;return o && i.noHScroll && (o.display.alignWidgets = !0), zn(e, t, "widget", function (t) {
	            var n = t.widgets || (t.widgets = []);if (null == i.insertAt ? n.push(i) : n.splice(Math.min(n.length - 1, Math.max(0, i.insertAt)), 0, i), i.line = t, o && !kr(e, t)) {
	              var r = ri(t) < e.scrollTop;ei(t, t.height + Lr(i)), r && Wn(o, null, i.height), o.curOp.forceUpdate = !0;
	            }return !0;
	          }), i;
	        }function Mr(e, t, n, r) {
	          e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), cr(e), ur(e, n);var i = r ? r(e) : 1;i != e.height && ei(e, i);
	        }function Nr(e) {
	          e.parent = null, cr(e);
	        }function Ar(e, t) {
	          if (e) for (;;) {
	            var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);if (!n) break;e = e.slice(0, n.index) + e.slice(n.index + n[0].length);var r = n[1] ? "bgClass" : "textClass";null == t[r] ? t[r] = n[2] : new RegExp("(?:^|s)" + n[2] + "(?:$|s)").test(t[r]) || (t[r] += " " + n[2]);
	          }return e;
	        }function Er(t, n) {
	          if (t.blankLine) return t.blankLine(n);if (t.innerMode) {
	            var r = e.innerMode(t, n);return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0;
	          }
	        }function Or(t, n, r, i) {
	          for (var o = 0; 10 > o; o++) {
	            i && (i[0] = e.innerMode(t, r).mode);var a = t.token(n, r);if (n.pos > n.start) return a;
	          }throw new Error("Mode " + t.name + " failed to advance stream.");
	        }function Ir(e, t, n, r) {
	          function i(e) {
	            return { start: f.start, end: f.pos, string: f.current(), type: o || null, state: e ? sa(a.mode, u) : u };
	          }var o,
	              a = e.doc,
	              l = a.mode;t = me(a, t);var s,
	              c = Zr(a, t.line),
	              u = je(e, t.line, n),
	              f = new ma(c.text, e.options.tabSize);for (r && (s = []); (r || f.pos < t.ch) && !f.eol();) {
	            f.start = f.pos, o = Or(l, f, u), r && s.push(i(!0));
	          }return r ? s : i();
	        }function Pr(e, t, n, r, i, o, a) {
	          var l = n.flattenSpans;null == l && (l = e.options.flattenSpans);var s,
	              c = 0,
	              u = null,
	              f = new ma(t, e.options.tabSize),
	              h = e.options.addModeClass && [null];for ("" == t && Ar(Er(n, r), o); !f.eol();) {
	            if (f.pos > e.options.maxHighlightLength ? (l = !1, a && Hr(e, t, r, f.pos), f.pos = t.length, s = null) : s = Ar(Or(n, f, r, h), o), h) {
	              var d = h[0].name;d && (s = "m-" + (s ? d + " " + s : d));
	            }if (!l || u != s) {
	              for (; c < f.start;) {
	                c = Math.min(f.start, c + 5e4), i(c, u);
	              }u = s;
	            }f.start = f.pos;
	          }for (; c < f.pos;) {
	            var p = Math.min(f.pos, c + 5e4);i(p, u), c = p;
	          }
	        }function Rr(e, t, n, r) {
	          var i = [e.state.modeGen],
	              o = {};Pr(e, t.text, e.doc.mode, n, function (e, t) {
	            i.push(e, t);
	          }, o, r);for (var a = 0; a < e.state.overlays.length; ++a) {
	            var l = e.state.overlays[a],
	                s = 1,
	                c = 0;Pr(e, t.text, l.mode, !0, function (e, t) {
	              for (var n = s; e > c;) {
	                var r = i[s];r > e && i.splice(s, 1, e, i[s + 1], r), s += 2, c = Math.min(e, r);
	              }if (t) if (l.opaque) i.splice(n, s - n, e, "cm-overlay " + t), s = n + 2;else for (; s > n; n += 2) {
	                var o = i[n + 1];i[n + 1] = (o ? o + " " : "") + "cm-overlay " + t;
	              }
	            }, o);
	          }return { styles: i, classes: o.bgClass || o.textClass ? o : null };
	        }function Dr(e, t, n) {
	          if (!t.styles || t.styles[0] != e.state.modeGen) {
	            var r = je(e, ti(t)),
	                i = Rr(e, t, t.text.length > e.options.maxHighlightLength ? sa(e.doc.mode, r) : r);t.stateAfter = r, t.styles = i.styles, i.classes ? t.styleClasses = i.classes : t.styleClasses && (t.styleClasses = null), n === e.doc.frontier && e.doc.frontier++;
	          }return t.styles;
	        }function Hr(e, t, n, r) {
	          var i = e.doc.mode,
	              o = new ma(t, e.options.tabSize);for (o.start = o.pos = r || 0, "" == t && Er(i, n); !o.eol();) {
	            Or(i, o, n), o.start = o.pos;
	          }
	        }function Wr(e, t) {
	          if (!e || /^\s*$/.test(e)) return null;var n = t.addModeClass ? ka : wa;return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"));
	        }function Br(e, t) {
	          var n = ji("span", null, null, wo ? "padding-right: .1px" : null),
	              r = { pre: ji("pre", [n], "CodeMirror-line"), content: n, col: 0, pos: 0, cm: e, splitSpaces: (xo || wo) && e.getOption("lineWrapping") };t.measure = {};for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
	            var o,
	                a = i ? t.rest[i - 1] : t.line;r.pos = 0, r.addToken = Fr, Ji(e.display.measure) && (o = ii(a)) && (r.addToken = jr(r.addToken, o)), r.map = [];var l = t != e.display.externalMeasured && ti(a);qr(a, r, Dr(e, a, l)), a.styleClasses && (a.styleClasses.bgClass && (r.bgClass = $i(a.styleClasses.bgClass, r.bgClass || "")), a.styleClasses.textClass && (r.textClass = $i(a.styleClasses.textClass, r.textClass || ""))), 0 == r.map.length && r.map.push(0, 0, r.content.appendChild(Zi(e.display.measure))), 0 == i ? (t.measure.map = r.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({}));
	          }if (wo) {
	            var s = r.content.lastChild;(/\bcm-tab\b/.test(s.className) || s.querySelector && s.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack");
	          }return Pa(e, "renderLine", e, t.line, r.pre), r.pre.className && (r.textClass = $i(r.pre.className, r.textClass || "")), r;
	        }function _r(e) {
	          var t = ji("span", "•", "cm-invalidchar");return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t;
	        }function Fr(e, t, n, r, i, o, a) {
	          if (t) {
	            var l = e.splitSpaces ? t.replace(/ {3,}/g, zr) : t,
	                s = e.cm.state.specialChars,
	                c = !1;if (s.test(t)) for (var u = document.createDocumentFragment(), f = 0;;) {
	              s.lastIndex = f;var h = s.exec(t),
	                  d = h ? h.index - f : t.length - f;if (d) {
	                var p = document.createTextNode(l.slice(f, f + d));xo && 9 > bo ? u.appendChild(ji("span", [p])) : u.appendChild(p), e.map.push(e.pos, e.pos + d, p), e.col += d, e.pos += d;
	              }if (!h) break;if (f += d + 1, "	" == h[0]) {
	                var m = e.cm.options.tabSize,
	                    g = m - e.col % m,
	                    p = u.appendChild(ji("span", Oi(g), "cm-tab"));p.setAttribute("role", "presentation"), p.setAttribute("cm-text", "	"), e.col += g;
	              } else if ("\r" == h[0] || "\n" == h[0]) {
	                var p = u.appendChild(ji("span", "\r" == h[0] ? "␍" : "␤", "cm-invalidchar"));p.setAttribute("cm-text", h[0]), e.col += 1;
	              } else {
	                var p = e.cm.options.specialCharPlaceholder(h[0]);p.setAttribute("cm-text", h[0]), xo && 9 > bo ? u.appendChild(ji("span", [p])) : u.appendChild(p), e.col += 1;
	              }e.map.push(e.pos, e.pos + 1, p), e.pos++;
	            } else {
	              e.col += t.length;var u = document.createTextNode(l);e.map.push(e.pos, e.pos + t.length, u), xo && 9 > bo && (c = !0), e.pos += t.length;
	            }if (n || r || i || c || a) {
	              var v = n || "";r && (v += r), i && (v += i);var y = ji("span", [u], v, a);return o && (y.title = o), e.content.appendChild(y);
	            }e.content.appendChild(u);
	          }
	        }function zr(e) {
	          for (var t = " ", n = 0; n < e.length - 2; ++n) {
	            t += n % 2 ? " " : " ";
	          }return t += " ";
	        }function jr(e, t) {
	          return function (n, r, i, o, a, l, s) {
	            i = i ? i + " cm-force-border" : "cm-force-border";for (var c = n.pos, u = c + r.length;;) {
	              for (var f = 0; f < t.length; f++) {
	                var h = t[f];if (h.to > c && h.from <= c) break;
	              }if (h.to >= u) return e(n, r, i, o, a, l, s);e(n, r.slice(0, h.to - c), i, o, null, l, s), o = null, r = r.slice(h.to - c), c = h.to;
	            }
	          };
	        }function Ur(e, t, n, r) {
	          var i = !r && n.widgetNode;i && e.map.push(e.pos, e.pos + t, i), !r && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", n.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t;
	        }function qr(e, t, n) {
	          var r = e.markedSpans,
	              i = e.text,
	              o = 0;if (r) for (var a, l, s, c, u, f, h, d = i.length, p = 0, m = 1, g = "", v = 0;;) {
	            if (v == p) {
	              s = c = u = f = l = "", h = null, v = 1 / 0;for (var y, x = [], b = 0; b < r.length; ++b) {
	                var w = r[b],
	                    k = w.marker;"bookmark" == k.type && w.from == p && k.widgetNode ? x.push(k) : w.from <= p && (null == w.to || w.to > p || k.collapsed && w.to == p && w.from == p) ? (null != w.to && w.to != p && v > w.to && (v = w.to, c = ""), k.className && (s += " " + k.className), k.css && (l = (l ? l + ";" : "") + k.css), k.startStyle && w.from == p && (u += " " + k.startStyle), k.endStyle && w.to == v && (y || (y = [])).push(k.endStyle, w.to), k.title && !f && (f = k.title), k.collapsed && (!h || dr(h.marker, k) < 0) && (h = w)) : w.from > p && v > w.from && (v = w.from);
	              }if (y) for (var b = 0; b < y.length; b += 2) {
	                y[b + 1] == v && (c += " " + y[b]);
	              }if (!h || h.from == p) for (var b = 0; b < x.length; ++b) {
	                Ur(t, 0, x[b]);
	              }if (h && (h.from || 0) == p) {
	                if (Ur(t, (null == h.to ? d + 1 : h.to) - p, h.marker, null == h.from), null == h.to) return;h.to == p && (h = !1);
	              }
	            }if (p >= d) break;for (var S = Math.min(d, v);;) {
	              if (g) {
	                var C = p + g.length;if (!h) {
	                  var L = C > S ? g.slice(0, S - p) : g;t.addToken(t, L, a ? a + s : s, u, p + L.length == v ? c : "", f, l);
	                }if (C >= S) {
	                  g = g.slice(S - p), p = S;break;
	                }p = C, u = "";
	              }g = i.slice(o, o = n[m++]), a = Wr(n[m++], t.cm.options);
	            }
	          } else for (var m = 1; m < n.length; m += 2) {
	            t.addToken(t, i.slice(o, o = n[m]), Wr(n[m + 1], t.cm.options));
	          }
	        }function Gr(e, t) {
	          return 0 == t.from.ch && 0 == t.to.ch && "" == Ii(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore);
	        }function Yr(e, t, n, r) {
	          function i(e) {
	            return n ? n[e] : null;
	          }function o(e, n, i) {
	            Mr(e, n, i, r), Ci(e, "change", e, t);
	          }function a(e, t) {
	            for (var n = e, o = []; t > n; ++n) {
	              o.push(new ba(c[n], i(n), r));
	            }return o;
	          }var l = t.from,
	              s = t.to,
	              c = t.text,
	              u = Zr(e, l.line),
	              f = Zr(e, s.line),
	              h = Ii(c),
	              d = i(c.length - 1),
	              p = s.line - l.line;if (t.full) e.insert(0, a(0, c.length)), e.remove(c.length, e.size - c.length);else if (Gr(e, t)) {
	            var m = a(0, c.length - 1);o(f, f.text, d), p && e.remove(l.line, p), m.length && e.insert(l.line, m);
	          } else if (u == f) {
	            if (1 == c.length) o(u, u.text.slice(0, l.ch) + h + u.text.slice(s.ch), d);else {
	              var m = a(1, c.length - 1);m.push(new ba(h + u.text.slice(s.ch), d, r)), o(u, u.text.slice(0, l.ch) + c[0], i(0)), e.insert(l.line + 1, m);
	            }
	          } else if (1 == c.length) o(u, u.text.slice(0, l.ch) + c[0] + f.text.slice(s.ch), i(0)), e.remove(l.line + 1, p);else {
	            o(u, u.text.slice(0, l.ch) + c[0], i(0)), o(f, h + f.text.slice(s.ch), d);var m = a(1, c.length - 1);p > 1 && e.remove(l.line + 1, p - 1), e.insert(l.line + 1, m);
	          }Ci(e, "change", e, t);
	        }function $r(e) {
	          this.lines = e, this.parent = null;for (var t = 0, n = 0; t < e.length; ++t) {
	            e[t].parent = this, n += e[t].height;
	          }this.height = n;
	        }function Vr(e) {
	          this.children = e;for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
	            var i = e[r];t += i.chunkSize(), n += i.height, i.parent = this;
	          }this.size = t, this.height = n, this.parent = null;
	        }function Kr(e, t, n) {
	          function r(e, i, o) {
	            if (e.linked) for (var a = 0; a < e.linked.length; ++a) {
	              var l = e.linked[a];if (l.doc != i) {
	                var s = o && l.sharedHist;n && !s || (t(l.doc, s), r(l.doc, e, s));
	              }
	            }
	          }r(e, null, !0);
	        }function Xr(e, t) {
	          if (t.cm) throw new Error("This document is already in use.");e.doc = t, t.cm = e, a(e), n(e), e.options.lineWrapping || h(e), e.options.mode = t.modeOption, Dt(e);
	        }function Zr(e, t) {
	          if (t -= e.first, 0 > t || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");for (var n = e; !n.lines;) {
	            for (var r = 0;; ++r) {
	              var i = n.children[r],
	                  o = i.chunkSize();if (o > t) {
	                n = i;break;
	              }t -= o;
	            }
	          }return n.lines[t];
	        }function Jr(e, t, n) {
	          var r = [],
	              i = t.line;return e.iter(t.line, n.line + 1, function (e) {
	            var o = e.text;i == n.line && (o = o.slice(0, n.ch)), i == t.line && (o = o.slice(t.ch)), r.push(o), ++i;
	          }), r;
	        }function Qr(e, t, n) {
	          var r = [];return e.iter(t, n, function (e) {
	            r.push(e.text);
	          }), r;
	        }function ei(e, t) {
	          var n = t - e.height;if (n) for (var r = e; r; r = r.parent) {
	            r.height += n;
	          }
	        }function ti(e) {
	          if (null == e.parent) return null;for (var t = e.parent, n = Pi(t.lines, e), r = t.parent; r; t = r, r = r.parent) {
	            for (var i = 0; r.children[i] != t; ++i) {
	              n += r.children[i].chunkSize();
	            }
	          }return n + t.first;
	        }function ni(e, t) {
	          var n = e.first;e: do {
	            for (var r = 0; r < e.children.length; ++r) {
	              var i = e.children[r],
	                  o = i.height;if (o > t) {
	                e = i;continue e;
	              }t -= o, n += i.chunkSize();
	            }return n;
	          } while (!e.lines);for (var r = 0; r < e.lines.length; ++r) {
	            var a = e.lines[r],
	                l = a.height;if (l > t) break;t -= l;
	          }return n + r;
	        }function ri(e) {
	          e = yr(e);for (var t = 0, n = e.parent, r = 0; r < n.lines.length; ++r) {
	            var i = n.lines[r];if (i == e) break;t += i.height;
	          }for (var o = n.parent; o; n = o, o = n.parent) {
	            for (var r = 0; r < o.children.length; ++r) {
	              var a = o.children[r];if (a == n) break;t += a.height;
	            }
	          }return t;
	        }function ii(e) {
	          var t = e.order;return null == t && (t = e.order = ll(e.text)), t;
	        }function oi(e) {
	          this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1;
	        }function ai(e, t) {
	          var n = { from: $(t.from), to: Qo(t), text: Jr(e, t.from, t.to) };return di(e, n, t.from.line, t.to.line + 1), Kr(e, function (e) {
	            di(e, n, t.from.line, t.to.line + 1);
	          }, !0), n;
	        }function li(e) {
	          for (; e.length;) {
	            var t = Ii(e);if (!t.ranges) break;e.pop();
	          }
	        }function si(e, t) {
	          return t ? (li(e.done), Ii(e.done)) : e.done.length && !Ii(e.done).ranges ? Ii(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), Ii(e.done)) : void 0;
	        }function ci(e, t, n, r) {
	          var i = e.history;i.undone.length = 0;var o,
	              a = +new Date();if ((i.lastOp == r || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && e.cm && i.lastModTime > a - e.cm.options.historyEventDelay || "*" == t.origin.charAt(0))) && (o = si(i, i.lastOp == r))) {
	            var l = Ii(o.changes);0 == _o(t.from, t.to) && 0 == _o(t.from, l.to) ? l.to = Qo(t) : o.changes.push(ai(e, t));
	          } else {
	            var s = Ii(i.done);for (s && s.ranges || hi(e.sel, i.done), o = { changes: [ai(e, t)], generation: i.generation }, i.done.push(o); i.done.length > i.undoDepth;) {
	              i.done.shift(), i.done[0].ranges || i.done.shift();
	            }
	          }i.done.push(n), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = a, i.lastOp = i.lastSelOp = r, i.lastOrigin = i.lastSelOrigin = t.origin, l || Pa(e, "historyAdded");
	        }function ui(e, t, n, r) {
	          var i = t.charAt(0);return "*" == i || "+" == i && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500);
	        }function fi(e, t, n, r) {
	          var i = e.history,
	              o = r && r.origin;n == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || ui(e, o, Ii(i.done), t)) ? i.done[i.done.length - 1] = t : hi(t, i.done), i.lastSelTime = +new Date(), i.lastSelOrigin = o, i.lastSelOp = n, r && r.clearRedo !== !1 && li(i.undone);
	        }function hi(e, t) {
	          var n = Ii(t);n && n.ranges && n.equals(e) || t.push(e);
	        }function di(e, t, n, r) {
	          var i = t["spans_" + e.id],
	              o = 0;e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function (n) {
	            n.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = n.markedSpans), ++o;
	          });
	        }function pi(e) {
	          if (!e) return null;for (var t, n = 0; n < e.length; ++n) {
	            e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
	          }return t ? t.length ? t : null : e;
	        }function mi(e, t) {
	          var n = t["spans_" + e.id];if (!n) return null;for (var r = 0, i = []; r < t.text.length; ++r) {
	            i.push(pi(n[r]));
	          }return i;
	        }function gi(e, t, n) {
	          for (var r = 0, i = []; r < e.length; ++r) {
	            var o = e[r];if (o.ranges) i.push(n ? ue.prototype.deepCopy.call(o) : o);else {
	              var a = o.changes,
	                  l = [];i.push({ changes: l });for (var s = 0; s < a.length; ++s) {
	                var c,
	                    u = a[s];if (l.push({ from: u.from, to: u.to, text: u.text }), t) for (var f in u) {
	                  (c = f.match(/^spans_(\d+)$/)) && Pi(t, Number(c[1])) > -1 && (Ii(l)[f] = u[f], delete u[f]);
	                }
	              }
	            }
	          }return i;
	        }function vi(e, t, n, r) {
	          n < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0);
	        }function yi(e, t, n, r) {
	          for (var i = 0; i < e.length; ++i) {
	            var o = e[i],
	                a = !0;if (o.ranges) {
	              o.copied || (o = e[i] = o.deepCopy(), o.copied = !0);for (var l = 0; l < o.ranges.length; l++) {
	                vi(o.ranges[l].anchor, t, n, r), vi(o.ranges[l].head, t, n, r);
	              }
	            } else {
	              for (var l = 0; l < o.changes.length; ++l) {
	                var s = o.changes[l];if (n < s.from.line) s.from = Bo(s.from.line + r, s.from.ch), s.to = Bo(s.to.line + r, s.to.ch);else if (t <= s.to.line) {
	                  a = !1;break;
	                }
	              }a || (e.splice(0, i + 1), i = 0);
	            }
	          }
	        }function xi(e, t) {
	          var n = t.from.line,
	              r = t.to.line,
	              i = t.text.length - (r - n) - 1;yi(e.done, n, r, i), yi(e.undone, n, r, i);
	        }function bi(e) {
	          return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue;
	        }function wi(e) {
	          return e.target || e.srcElement;
	        }function ki(e) {
	          var t = e.which;return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), Eo && e.ctrlKey && 1 == t && (t = 3), t;
	        }function Si(e, t, n) {
	          var r = e._handlers && e._handlers[t];return n ? r && r.length > 0 ? r.slice() : Oa : r || Oa;
	        }function Ci(e, t) {
	          function n(e) {
	            return function () {
	              e.apply(null, o);
	            };
	          }var r = Si(e, t, !1);if (r.length) {
	            var i,
	                o = Array.prototype.slice.call(arguments, 2);Go ? i = Go.delayedCallbacks : Ra ? i = Ra : (i = Ra = [], setTimeout(Li, 0));for (var a = 0; a < r.length; ++a) {
	              i.push(n(r[a]));
	            }
	          }
	        }function Li() {
	          var e = Ra;Ra = null;for (var t = 0; t < e.length; ++t) {
	            e[t]();
	          }
	        }function Ti(e, t, n) {
	          return "string" == typeof t && (t = { type: t, preventDefault: function preventDefault() {
	              this.defaultPrevented = !0;
	            } }), Pa(e, n || t.type, e, t), bi(t) || t.codemirrorIgnore;
	        }function Mi(e) {
	          var t = e._handlers && e._handlers.cursorActivity;if (t) for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r) {
	            -1 == Pi(n, t[r]) && n.push(t[r]);
	          }
	        }function Ni(e, t) {
	          return Si(e, t).length > 0;
	        }function Ai(e) {
	          e.prototype.on = function (e, t) {
	            Ea(this, e, t);
	          }, e.prototype.off = function (e, t) {
	            Ia(this, e, t);
	          };
	        }function Ei() {
	          this.id = null;
	        }function Oi(e) {
	          for (; ja.length <= e;) {
	            ja.push(Ii(ja) + " ");
	          }return ja[e];
	        }function Ii(e) {
	          return e[e.length - 1];
	        }function Pi(e, t) {
	          for (var n = 0; n < e.length; ++n) {
	            if (e[n] == t) return n;
	          }return -1;
	        }function Ri(e, t) {
	          for (var n = [], r = 0; r < e.length; r++) {
	            n[r] = t(e[r], r);
	          }return n;
	        }function Di() {}function Hi(e, t) {
	          var n;return Object.create ? n = Object.create(e) : (Di.prototype = e, n = new Di()), t && Wi(t, n), n;
	        }function Wi(e, t, n) {
	          t || (t = {});for (var r in e) {
	            !e.hasOwnProperty(r) || n === !1 && t.hasOwnProperty(r) || (t[r] = e[r]);
	          }return t;
	        }function Bi(e) {
	          var t = Array.prototype.slice.call(arguments, 1);return function () {
	            return e.apply(null, t);
	          };
	        }function _i(e, t) {
	          return t ? t.source.indexOf("\\w") > -1 && Ya(e) ? !0 : t.test(e) : Ya(e);
	        }function Fi(e) {
	          for (var t in e) {
	            if (e.hasOwnProperty(t) && e[t]) return !1;
	          }return !0;
	        }function zi(e) {
	          return e.charCodeAt(0) >= 768 && $a.test(e);
	        }function ji(e, t, n, r) {
	          var i = document.createElement(e);if (n && (i.className = n), r && (i.style.cssText = r), "string" == typeof t) i.appendChild(document.createTextNode(t));else if (t) for (var o = 0; o < t.length; ++o) {
	            i.appendChild(t[o]);
	          }return i;
	        }function Ui(e) {
	          for (var t = e.childNodes.length; t > 0; --t) {
	            e.removeChild(e.firstChild);
	          }return e;
	        }function qi(e, t) {
	          return Ui(e).appendChild(t);
	        }function Gi() {
	          for (var e = document.activeElement; e && e.root && e.root.activeElement;) {
	            e = e.root.activeElement;
	          }return e;
	        }function Yi(e) {
	          return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
	        }function $i(e, t) {
	          for (var n = e.split(" "), r = 0; r < n.length; r++) {
	            n[r] && !Yi(n[r]).test(t) && (t += " " + n[r]);
	          }return t;
	        }function Vi(e) {
	          if (document.body.getElementsByClassName) for (var t = document.body.getElementsByClassName("CodeMirror"), n = 0; n < t.length; n++) {
	            var r = t[n].CodeMirror;r && e(r);
	          }
	        }function Ki() {
	          Qa || (Xi(), Qa = !0);
	        }function Xi() {
	          var e;Ea(window, "resize", function () {
	            null == e && (e = setTimeout(function () {
	              e = null, Vi(qt);
	            }, 100));
	          }), Ea(window, "blur", function () {
	            Vi(yn);
	          });
	        }function Zi(e) {
	          if (null == Ka) {
	            var t = ji("span", "​");qi(e, ji("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (Ka = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(xo && 8 > bo));
	          }var n = Ka ? ji("span", "​") : ji("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");return n.setAttribute("cm-text", ""), n;
	        }function Ji(e) {
	          if (null != Xa) return Xa;var t = qi(e, document.createTextNode("AخA")),
	              n = qa(t, 0, 1).getBoundingClientRect();if (!n || n.left == n.right) return !1;var r = qa(t, 1, 2).getBoundingClientRect();return Xa = r.right - n.right < 3;
	        }function Qi(e) {
	          if (null != il) return il;var t = qi(e, ji("span", "x")),
	              n = t.getBoundingClientRect(),
	              r = qa(t, 0, 1).getBoundingClientRect();return il = Math.abs(n.left - r.left) > 1;
	        }function eo(e, t, n, r) {
	          if (!e) return r(t, n, "ltr");for (var i = !1, o = 0; o < e.length; ++o) {
	            var a = e[o];(a.from < n && a.to > t || t == n && a.to == t) && (r(Math.max(a.from, t), Math.min(a.to, n), 1 == a.level ? "rtl" : "ltr"), i = !0);
	          }i || r(t, n, "ltr");
	        }function to(e) {
	          return e.level % 2 ? e.to : e.from;
	        }function no(e) {
	          return e.level % 2 ? e.from : e.to;
	        }function ro(e) {
	          var t = ii(e);return t ? to(t[0]) : 0;
	        }function io(e) {
	          var t = ii(e);return t ? no(Ii(t)) : e.text.length;
	        }function oo(e, t) {
	          var n = Zr(e.doc, t),
	              r = yr(n);r != n && (t = ti(r));var i = ii(r),
	              o = i ? i[0].level % 2 ? io(r) : ro(r) : 0;return Bo(t, o);
	        }function ao(e, t) {
	          for (var n, r = Zr(e.doc, t); n = gr(r);) {
	            r = n.find(1, !0).line, t = null;
	          }var i = ii(r),
	              o = i ? i[0].level % 2 ? ro(r) : io(r) : r.text.length;return Bo(null == t ? ti(r) : t, o);
	        }function lo(e, t) {
	          var n = oo(e, t.line),
	              r = Zr(e.doc, n.line),
	              i = ii(r);if (!i || 0 == i[0].level) {
	            var o = Math.max(0, r.text.search(/\S/)),
	                a = t.line == n.line && t.ch <= o && t.ch;return Bo(n.line, a ? 0 : o);
	          }return n;
	        }function so(e, t, n) {
	          var r = e[0].level;return t == r ? !0 : n == r ? !1 : n > t;
	        }function co(e, t) {
	          al = null;for (var n, r = 0; r < e.length; ++r) {
	            var i = e[r];if (i.from < t && i.to > t) return r;if (i.from == t || i.to == t) {
	              if (null != n) return so(e, i.level, e[n].level) ? (i.from != i.to && (al = n), r) : (i.from != i.to && (al = r), n);n = r;
	            }
	          }return n;
	        }function uo(e, t, n, r) {
	          if (!r) return t + n;do {
	            t += n;
	          } while (t > 0 && zi(e.text.charAt(t)));return t;
	        }function fo(e, t, n, r) {
	          var i = ii(e);if (!i) return ho(e, t, n, r);for (var o = co(i, t), a = i[o], l = uo(e, t, a.level % 2 ? -n : n, r);;) {
	            if (l > a.from && l < a.to) return l;if (l == a.from || l == a.to) return co(i, l) == o ? l : (a = i[o += n], n > 0 == a.level % 2 ? a.to : a.from);if (a = i[o += n], !a) return null;l = n > 0 == a.level % 2 ? uo(e, a.to, -1, r) : uo(e, a.from, 1, r);
	          }
	        }function ho(e, t, n, r) {
	          var i = t + n;if (r) for (; i > 0 && zi(e.text.charAt(i));) {
	            i += n;
	          }return 0 > i || i > e.text.length ? null : i;
	        }var po = navigator.userAgent,
	            mo = navigator.platform,
	            go = /gecko\/\d/i.test(po),
	            vo = /MSIE \d/.test(po),
	            yo = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(po),
	            xo = vo || yo,
	            bo = xo && (vo ? document.documentMode || 6 : yo[1]),
	            wo = /WebKit\//.test(po),
	            ko = wo && /Qt\/\d+\.\d+/.test(po),
	            So = /Chrome\//.test(po),
	            Co = /Opera\//.test(po),
	            Lo = /Apple Computer/.test(navigator.vendor),
	            To = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(po),
	            Mo = /PhantomJS/.test(po),
	            No = /AppleWebKit/.test(po) && /Mobile\/\w+/.test(po),
	            Ao = No || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(po),
	            Eo = No || /Mac/.test(mo),
	            Oo = /\bCrOS\b/.test(po),
	            Io = /win/i.test(mo),
	            Po = Co && po.match(/Version\/(\d*\.\d*)/);Po && (Po = Number(Po[1])), Po && Po >= 15 && (Co = !1, wo = !0);var Ro = Eo && (ko || Co && (null == Po || 12.11 > Po)),
	            Do = go || xo && bo >= 9,
	            Ho = !1,
	            Wo = !1;m.prototype = Wi({ update: function update(e) {
	            var t = e.scrollWidth > e.clientWidth + 1,
	                n = e.scrollHeight > e.clientHeight + 1,
	                r = e.nativeBarWidth;if (n) {
	              this.vert.style.display = "block", this.vert.style.bottom = t ? r + "px" : "0";var i = e.viewHeight - (t ? r : 0);this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px";
	            } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";if (t) {
	              this.horiz.style.display = "block", this.horiz.style.right = n ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";var o = e.viewWidth - e.barLeft - (n ? r : 0);this.horiz.firstChild.style.width = e.scrollWidth - e.clientWidth + o + "px";
	            } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == r && this.zeroWidthHack(), this.checkedZeroWidth = !0), { right: n ? r : 0, bottom: t ? r : 0 };
	          }, setScrollLeft: function setScrollLeft(e) {
	            this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz);
	          }, setScrollTop: function setScrollTop(e) {
	            this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert);
	          }, zeroWidthHack: function zeroWidthHack() {
	            var e = Eo && !To ? "12px" : "18px";this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new Ei(), this.disableVert = new Ei();
	          }, enableZeroWidthBar: function enableZeroWidthBar(e, t) {
	            function n() {
	              var r = e.getBoundingClientRect(),
	                  i = document.elementFromPoint(r.left + 1, r.bottom - 1);i != e ? e.style.pointerEvents = "none" : t.set(1e3, n);
	            }e.style.pointerEvents = "auto", t.set(1e3, n);
	          }, clear: function clear() {
	            var e = this.horiz.parentNode;e.removeChild(this.horiz), e.removeChild(this.vert);
	          } }, m.prototype), g.prototype = Wi({ update: function update() {
	            return { bottom: 0, right: 0 };
	          }, setScrollLeft: function setScrollLeft() {}, setScrollTop: function setScrollTop() {}, clear: function clear() {} }, g.prototype), e.scrollbarModel = { "native": m, "null": g }, L.prototype.signal = function (e, t) {
	          Ni(e, t) && this.events.push(arguments);
	        }, L.prototype.finish = function () {
	          for (var e = 0; e < this.events.length; e++) {
	            Pa.apply(null, this.events[e]);
	          }
	        };var Bo = e.Pos = function (e, t) {
	          return this instanceof Bo ? (this.line = e, void (this.ch = t)) : new Bo(e, t);
	        },
	            _o = e.cmpPos = function (e, t) {
	          return e.line - t.line || e.ch - t.ch;
	        },
	            Fo = null;ne.prototype = Wi({ init: function init(e) {
	            function t(e) {
	              if (!Ti(r, e)) {
	                if (r.somethingSelected()) Fo = { lineWise: !1, text: r.getSelections() }, n.inaccurateSelection && (n.prevInput = "", n.inaccurateSelection = !1, o.value = Fo.text.join("\n"), Ua(o));else {
	                  if (!r.options.lineWiseCopyCut) return;var t = ee(r);Fo = { lineWise: !0, text: t.text }, "cut" == e.type ? r.setSelections(t.ranges, null, Wa) : (n.prevInput = "", o.value = t.text.join("\n"), Ua(o));
	                }"cut" == e.type && (r.state.cutIncoming = !0);
	              }
	            }var n = this,
	                r = this.cm,
	                i = this.wrapper = re(),
	                o = this.textarea = i.firstChild;e.wrapper.insertBefore(i, e.wrapper.firstChild), No && (o.style.width = "0px"), Ea(o, "input", function () {
	              xo && bo >= 9 && n.hasSelection && (n.hasSelection = null), n.poll();
	            }), Ea(o, "paste", function (e) {
	              Ti(r, e) || J(e, r) || (r.state.pasteIncoming = !0, n.fastPoll());
	            }), Ea(o, "cut", t), Ea(o, "copy", t), Ea(e.scroller, "paste", function (t) {
	              Gt(e, t) || Ti(r, t) || (r.state.pasteIncoming = !0, n.focus());
	            }), Ea(e.lineSpace, "selectstart", function (t) {
	              Gt(e, t) || Ma(t);
	            }), Ea(o, "compositionstart", function () {
	              var e = r.getCursor("from");n.composing && n.composing.range.clear(), n.composing = { start: e, range: r.markText(e, r.getCursor("to"), { className: "CodeMirror-composing" }) };
	            }), Ea(o, "compositionend", function () {
	              n.composing && (n.poll(), n.composing.range.clear(), n.composing = null);
	            });
	          }, prepareSelection: function prepareSelection() {
	            var e = this.cm,
	                t = e.display,
	                n = e.doc,
	                r = De(e);if (e.options.moveInputWithCursor) {
	              var i = dt(e, n.sel.primary().head, "div"),
	                  o = t.wrapper.getBoundingClientRect(),
	                  a = t.lineDiv.getBoundingClientRect();r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top)), r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left));
	            }return r;
	          }, showSelection: function showSelection(e) {
	            var t = this.cm,
	                n = t.display;qi(n.cursorDiv, e.cursors), qi(n.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px");
	          }, reset: function reset(e) {
	            if (!this.contextMenuPending) {
	              var t,
	                  n,
	                  r = this.cm,
	                  i = r.doc;if (r.somethingSelected()) {
	                this.prevInput = "";var o = i.sel.primary();t = rl && (o.to().line - o.from().line > 100 || (n = r.getSelection()).length > 1e3);var a = t ? "-" : n || r.getSelection();this.textarea.value = a, r.state.focused && Ua(this.textarea), xo && bo >= 9 && (this.hasSelection = a);
	              } else e || (this.prevInput = this.textarea.value = "", xo && bo >= 9 && (this.hasSelection = null));this.inaccurateSelection = t;
	            }
	          }, getField: function getField() {
	            return this.textarea;
	          }, supportsTouch: function supportsTouch() {
	            return !1;
	          }, focus: function focus() {
	            if ("nocursor" != this.cm.options.readOnly && (!Ao || Gi() != this.textarea)) try {
	              this.textarea.focus();
	            } catch (e) {}
	          }, blur: function blur() {
	            this.textarea.blur();
	          }, resetPosition: function resetPosition() {
	            this.wrapper.style.top = this.wrapper.style.left = 0;
	          }, receivedFocus: function receivedFocus() {
	            this.slowPoll();
	          }, slowPoll: function slowPoll() {
	            var e = this;e.pollingFast || e.polling.set(this.cm.options.pollInterval, function () {
	              e.poll(), e.cm.state.focused && e.slowPoll();
	            });
	          }, fastPoll: function fastPoll() {
	            function e() {
	              var r = n.poll();r || t ? (n.pollingFast = !1, n.slowPoll()) : (t = !0, n.polling.set(60, e));
	            }var t = !1,
	                n = this;n.pollingFast = !0, n.polling.set(20, e);
	          }, poll: function poll() {
	            var e = this.cm,
	                t = this.textarea,
	                n = this.prevInput;if (this.contextMenuPending || !e.state.focused || nl(t) && !n && !this.composing || e.isReadOnly() || e.options.disableInput || e.state.keySeq) return !1;var r = t.value;if (r == n && !e.somethingSelected()) return !1;if (xo && bo >= 9 && this.hasSelection === r || Eo && /[\uf700-\uf7ff]/.test(r)) return e.display.input.reset(), !1;if (e.doc.sel == e.display.selForContextMenu) {
	              var i = r.charCodeAt(0);if (8203 != i || n || (n = "​"), 8666 == i) return this.reset(), this.cm.execCommand("undo");
	            }for (var o = 0, a = Math.min(n.length, r.length); a > o && n.charCodeAt(o) == r.charCodeAt(o);) {
	              ++o;
	            }var l = this;return At(e, function () {
	              Z(e, r.slice(o), n.length - o, null, l.composing ? "*compose" : null), r.length > 1e3 || r.indexOf("\n") > -1 ? t.value = l.prevInput = "" : l.prevInput = r, l.composing && (l.composing.range.clear(), l.composing.range = e.markText(l.composing.start, e.getCursor("to"), { className: "CodeMirror-composing" }));
	            }), !0;
	          }, ensurePolled: function ensurePolled() {
	            this.pollingFast && this.poll() && (this.pollingFast = !1);
	          }, onKeyPress: function onKeyPress() {
	            xo && bo >= 9 && (this.hasSelection = null), this.fastPoll();
	          }, onContextMenu: function onContextMenu(e) {
	            function t() {
	              if (null != a.selectionStart) {
	                var e = i.somethingSelected(),
	                    t = "​" + (e ? a.value : "");a.value = "⇚", a.value = t, r.prevInput = e ? "" : "​", a.selectionStart = 1, a.selectionEnd = t.length, o.selForContextMenu = i.doc.sel;
	              }
	            }function n() {
	              if (r.contextMenuPending = !1, r.wrapper.style.cssText = f, a.style.cssText = u, xo && 9 > bo && o.scrollbars.setScrollTop(o.scroller.scrollTop = s), null != a.selectionStart) {
	                (!xo || xo && 9 > bo) && t();var e = 0,
	                    n = function n() {
	                  o.selForContextMenu == i.doc.sel && 0 == a.selectionStart && a.selectionEnd > 0 && "​" == r.prevInput ? Et(i, ua.selectAll)(i) : e++ < 10 ? o.detectingSelectAll = setTimeout(n, 500) : o.input.reset();
	                };o.detectingSelectAll = setTimeout(n, 200);
	              }
	            }var r = this,
	                i = r.cm,
	                o = i.display,
	                a = r.textarea,
	                l = Yt(i, e),
	                s = o.scroller.scrollTop;if (l && !Co) {
	              var c = i.options.resetSelectionOnContextMenu;c && -1 == i.doc.sel.contains(l) && Et(i, Te)(i.doc, de(l), Wa);var u = a.style.cssText,
	                  f = r.wrapper.style.cssText;r.wrapper.style.cssText = "position: absolute";var h = r.wrapper.getBoundingClientRect();if (a.style.cssText = "position: absolute; width: 30px; height: 30px; top: " + (e.clientY - h.top - 5) + "px; left: " + (e.clientX - h.left - 5) + "px; z-index: 1000; background: " + (xo ? "rgba(255, 255, 255, .05)" : "transparent") + "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", wo) var d = window.scrollY;if (o.input.focus(), wo && window.scrollTo(null, d), o.input.reset(), i.somethingSelected() || (a.value = r.prevInput = " "), r.contextMenuPending = !0, o.selForContextMenu = i.doc.sel, clearTimeout(o.detectingSelectAll), xo && bo >= 9 && t(), Do) {
	                Aa(e);var p = function p() {
	                  Ia(window, "mouseup", p), setTimeout(n, 20);
	                };Ea(window, "mouseup", p);
	              } else setTimeout(n, 50);
	            }
	          }, readOnlyChanged: function readOnlyChanged(e) {
	            e || this.reset();
	          }, setUneditable: Di, needsContentAttribute: !1 }, ne.prototype), ie.prototype = Wi({ init: function init(e) {
	            function t(e) {
	              if (!Ti(r, e)) {
	                if (r.somethingSelected()) Fo = { lineWise: !1, text: r.getSelections() }, "cut" == e.type && r.replaceSelection("", null, "cut");else {
	                  if (!r.options.lineWiseCopyCut) return;var t = ee(r);Fo = { lineWise: !0, text: t.text }, "cut" == e.type && r.operation(function () {
	                    r.setSelections(t.ranges, 0, Wa), r.replaceSelection("", null, "cut");
	                  });
	                }if (e.clipboardData && !No) e.preventDefault(), e.clipboardData.clearData(), e.clipboardData.setData("text/plain", Fo.text.join("\n"));else {
	                  var n = re(),
	                      i = n.firstChild;r.display.lineSpace.insertBefore(n, r.display.lineSpace.firstChild), i.value = Fo.text.join("\n");var o = document.activeElement;Ua(i), setTimeout(function () {
	                    r.display.lineSpace.removeChild(n), o.focus();
	                  }, 50);
	                }
	              }
	            }var n = this,
	                r = n.cm,
	                i = n.div = e.lineDiv;te(i), Ea(i, "paste", function (e) {
	              Ti(r, e) || J(e, r);
	            }), Ea(i, "compositionstart", function (e) {
	              var t = e.data;if (n.composing = { sel: r.doc.sel, data: t, startData: t }, t) {
	                var i = r.doc.sel.primary(),
	                    o = r.getLine(i.head.line),
	                    a = o.indexOf(t, Math.max(0, i.head.ch - t.length));a > -1 && a <= i.head.ch && (n.composing.sel = de(Bo(i.head.line, a), Bo(i.head.line, a + t.length)));
	              }
	            }), Ea(i, "compositionupdate", function (e) {
	              n.composing.data = e.data;
	            }), Ea(i, "compositionend", function (e) {
	              var t = n.composing;t && (e.data == t.startData || /\u200b/.test(e.data) || (t.data = e.data), setTimeout(function () {
	                t.handled || n.applyComposition(t), n.composing == t && (n.composing = null);
	              }, 50));
	            }), Ea(i, "touchstart", function () {
	              n.forceCompositionEnd();
	            }), Ea(i, "input", function () {
	              n.composing || !r.isReadOnly() && n.pollContent() || At(n.cm, function () {
	                Dt(r);
	              });
	            }), Ea(i, "copy", t), Ea(i, "cut", t);
	          }, prepareSelection: function prepareSelection() {
	            var e = De(this.cm, !1);return e.focus = this.cm.state.focused, e;
	          }, showSelection: function showSelection(e, t) {
	            e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e));
	          }, showPrimarySelection: function showPrimarySelection() {
	            var e = window.getSelection(),
	                t = this.cm.doc.sel.primary(),
	                n = le(this.cm, e.anchorNode, e.anchorOffset),
	                r = le(this.cm, e.focusNode, e.focusOffset);if (!n || n.bad || !r || r.bad || 0 != _o(K(n, r), t.from()) || 0 != _o(V(n, r), t.to())) {
	              var i = oe(this.cm, t.from()),
	                  o = oe(this.cm, t.to());if (i || o) {
	                var a = this.cm.display.view,
	                    l = e.rangeCount && e.getRangeAt(0);if (i) {
	                  if (!o) {
	                    var s = a[a.length - 1].measure,
	                        c = s.maps ? s.maps[s.maps.length - 1] : s.map;o = { node: c[c.length - 1], offset: c[c.length - 2] - c[c.length - 3] };
	                  }
	                } else i = { node: a[0].measure.map[2], offset: 0 };try {
	                  var u = qa(i.node, i.offset, o.offset, o.node);
	                } catch (f) {}u && (!go && this.cm.state.focused ? (e.collapse(i.node, i.offset), u.collapsed || e.addRange(u)) : (e.removeAllRanges(), e.addRange(u)), l && null == e.anchorNode ? e.addRange(l) : go && this.startGracePeriod()), this.rememberSelection();
	              }
	            }
	          }, startGracePeriod: function startGracePeriod() {
	            var e = this;clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function () {
	              e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function () {
	                e.cm.curOp.selectionChanged = !0;
	              });
	            }, 20);
	          }, showMultipleSelections: function showMultipleSelections(e) {
	            qi(this.cm.display.cursorDiv, e.cursors), qi(this.cm.display.selectionDiv, e.selection);
	          }, rememberSelection: function rememberSelection() {
	            var e = window.getSelection();this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset;
	          }, selectionInEditor: function selectionInEditor() {
	            var e = window.getSelection();if (!e.rangeCount) return !1;var t = e.getRangeAt(0).commonAncestorContainer;return Va(this.div, t);
	          }, focus: function focus() {
	            "nocursor" != this.cm.options.readOnly && this.div.focus();
	          }, blur: function blur() {
	            this.div.blur();
	          }, getField: function getField() {
	            return this.div;
	          }, supportsTouch: function supportsTouch() {
	            return !0;
	          }, receivedFocus: function receivedFocus() {
	            function e() {
	              t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, e));
	            }var t = this;this.selectionInEditor() ? this.pollSelection() : At(this.cm, function () {
	              t.cm.curOp.selectionChanged = !0;
	            }), this.polling.set(this.cm.options.pollInterval, e);
	          }, selectionChanged: function selectionChanged() {
	            var e = window.getSelection();return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset;
	          }, pollSelection: function pollSelection() {
	            if (!this.composing && !this.gracePeriod && this.selectionChanged()) {
	              var e = window.getSelection(),
	                  t = this.cm;this.rememberSelection();var n = le(t, e.anchorNode, e.anchorOffset),
	                  r = le(t, e.focusNode, e.focusOffset);n && r && At(t, function () {
	                Te(t.doc, de(n, r), Wa), (n.bad || r.bad) && (t.curOp.selectionChanged = !0);
	              });
	            }
	          }, pollContent: function pollContent() {
	            var e = this.cm,
	                t = e.display,
	                n = e.doc.sel.primary(),
	                r = n.from(),
	                i = n.to();if (r.line < t.viewFrom || i.line > t.viewTo - 1) return !1;var o;if (r.line == t.viewFrom || 0 == (o = Bt(e, r.line))) var a = ti(t.view[0].line),
	                l = t.view[0].node;else var a = ti(t.view[o].line),
	                l = t.view[o - 1].node.nextSibling;var s = Bt(e, i.line);if (s == t.view.length - 1) var c = t.viewTo - 1,
	                u = t.lineDiv.lastChild;else var c = ti(t.view[s + 1].line) - 1,
	                u = t.view[s + 1].node.previousSibling;for (var f = e.doc.splitLines(ce(e, l, u, a, c)), h = Jr(e.doc, Bo(a, 0), Bo(c, Zr(e.doc, c).text.length)); f.length > 1 && h.length > 1;) {
	              if (Ii(f) == Ii(h)) f.pop(), h.pop(), c--;else {
	                if (f[0] != h[0]) break;f.shift(), h.shift(), a++;
	              }
	            }for (var d = 0, p = 0, m = f[0], g = h[0], v = Math.min(m.length, g.length); v > d && m.charCodeAt(d) == g.charCodeAt(d);) {
	              ++d;
	            }for (var y = Ii(f), x = Ii(h), b = Math.min(y.length - (1 == f.length ? d : 0), x.length - (1 == h.length ? d : 0)); b > p && y.charCodeAt(y.length - p - 1) == x.charCodeAt(x.length - p - 1);) {
	              ++p;
	            }f[f.length - 1] = y.slice(0, y.length - p), f[0] = f[0].slice(d);var w = Bo(a, d),
	                k = Bo(c, h.length ? Ii(h).length - p : 0);return f.length > 1 || f[0] || _o(w, k) ? (In(e.doc, f, w, k, "+input"), !0) : void 0;
	          }, ensurePolled: function ensurePolled() {
	            this.forceCompositionEnd();
	          }, reset: function reset() {
	            this.forceCompositionEnd();
	          }, forceCompositionEnd: function forceCompositionEnd() {
	            this.composing && !this.composing.handled && (this.applyComposition(this.composing), this.composing.handled = !0, this.div.blur(), this.div.focus());
	          }, applyComposition: function applyComposition(e) {
	            this.cm.isReadOnly() ? Et(this.cm, Dt)(this.cm) : e.data && e.data != e.startData && Et(this.cm, Z)(this.cm, e.data, 0, e.sel);
	          }, setUneditable: function setUneditable(e) {
	            e.contentEditable = "false";
	          }, onKeyPress: function onKeyPress(e) {
	            e.preventDefault(), this.cm.isReadOnly() || Et(this.cm, Z)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0);
	          }, readOnlyChanged: function readOnlyChanged(e) {
	            this.div.contentEditable = String("nocursor" != e);
	          }, onContextMenu: Di, resetPosition: Di, needsContentAttribute: !0 }, ie.prototype), e.inputStyles = { textarea: ne, contenteditable: ie }, ue.prototype = { primary: function primary() {
	            return this.ranges[this.primIndex];
	          }, equals: function equals(e) {
	            if (e == this) return !0;if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;for (var t = 0; t < this.ranges.length; t++) {
	              var n = this.ranges[t],
	                  r = e.ranges[t];if (0 != _o(n.anchor, r.anchor) || 0 != _o(n.head, r.head)) return !1;
	            }return !0;
	          }, deepCopy: function deepCopy() {
	            for (var e = [], t = 0; t < this.ranges.length; t++) {
	              e[t] = new fe($(this.ranges[t].anchor), $(this.ranges[t].head));
	            }return new ue(e, this.primIndex);
	          }, somethingSelected: function somethingSelected() {
	            for (var e = 0; e < this.ranges.length; e++) {
	              if (!this.ranges[e].empty()) return !0;
	            }return !1;
	          }, contains: function contains(e, t) {
	            t || (t = e);for (var n = 0; n < this.ranges.length; n++) {
	              var r = this.ranges[n];if (_o(t, r.from()) >= 0 && _o(e, r.to()) <= 0) return n;
	            }return -1;
	          } }, fe.prototype = { from: function from() {
	            return K(this.anchor, this.head);
	          }, to: function to() {
	            return V(this.anchor, this.head);
	          }, empty: function empty() {
	            return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
	          } };var zo,
	            jo,
	            Uo,
	            qo = { left: 0, right: 0, top: 0, bottom: 0 },
	            Go = null,
	            Yo = 0,
	            $o = 0,
	            Vo = 0,
	            Ko = null;xo ? Ko = -.53 : go ? Ko = 15 : So ? Ko = -.7 : Lo && (Ko = -1 / 3);var Xo = function Xo(e) {
	          var t = e.wheelDeltaX,
	              n = e.wheelDeltaY;return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == n && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : null == n && (n = e.wheelDelta), { x: t, y: n };
	        };e.wheelEventPixels = function (e) {
	          var t = Xo(e);return t.x *= Ko, t.y *= Ko, t;
	        };var Zo = new Ei(),
	            Jo = null,
	            Qo = e.changeEnd = function (e) {
	          return e.text ? Bo(e.from.line + e.text.length - 1, Ii(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to;
	        };e.prototype = { constructor: e, focus: function focus() {
	            window.focus(), this.display.input.focus();
	          }, setOption: function setOption(e, t) {
	            var n = this.options,
	                r = n[e];n[e] == t && "mode" != e || (n[e] = t, ta.hasOwnProperty(e) && Et(this, ta[e])(this, t, r));
	          }, getOption: function getOption(e) {
	            return this.options[e];
	          }, getDoc: function getDoc() {
	            return this.doc;
	          }, addKeyMap: function addKeyMap(e, t) {
	            this.state.keyMaps[t ? "push" : "unshift"]($n(e));
	          }, removeKeyMap: function removeKeyMap(e) {
	            for (var t = this.state.keyMaps, n = 0; n < t.length; ++n) {
	              if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0;
	            }
	          }, addOverlay: Ot(function (t, n) {
	            var r = t.token ? t : e.getMode(this.options, t);if (r.startState) throw new Error("Overlays may not be stateful.");this.state.overlays.push({ mode: r, modeSpec: t, opaque: n && n.opaque }), this.state.modeGen++, Dt(this);
	          }), removeOverlay: Ot(function (e) {
	            for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
	              var r = t[n].modeSpec;if (r == e || "string" == typeof e && r.name == e) return t.splice(n, 1), this.state.modeGen++, void Dt(this);
	            }
	          }), indentLine: Ot(function (e, t, n) {
	            "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), ve(this.doc, e) && Fn(this, e, t, n);
	          }), indentSelection: Ot(function (e) {
	            for (var t = this.doc.sel.ranges, n = -1, r = 0; r < t.length; r++) {
	              var i = t[r];if (i.empty()) i.head.line > n && (Fn(this, i.head.line, e, !0), n = i.head.line, r == this.doc.sel.primIndex && Bn(this));else {
	                var o = i.from(),
	                    a = i.to(),
	                    l = Math.max(n, o.line);n = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;for (var s = l; n > s; ++s) {
	                  Fn(this, s, e);
	                }var c = this.doc.sel.ranges;0 == o.ch && t.length == c.length && c[r].from().ch > 0 && ke(this.doc, r, new fe(o, c[r].to()), Wa);
	              }
	            }
	          }), getTokenAt: function getTokenAt(e, t) {
	            return Ir(this, e, t);
	          }, getLineTokens: function getLineTokens(e, t) {
	            return Ir(this, Bo(e), t, !0);
	          }, getTokenTypeAt: function getTokenTypeAt(e) {
	            e = me(this.doc, e);var t,
	                n = Dr(this, Zr(this.doc, e.line)),
	                r = 0,
	                i = (n.length - 1) / 2,
	                o = e.ch;if (0 == o) t = n[2];else for (;;) {
	              var a = r + i >> 1;if ((a ? n[2 * a - 1] : 0) >= o) i = a;else {
	                if (!(n[2 * a + 1] < o)) {
	                  t = n[2 * a + 2];break;
	                }r = a + 1;
	              }
	            }var l = t ? t.indexOf("cm-overlay ") : -1;return 0 > l ? t : 0 == l ? null : t.slice(0, l - 1);
	          }, getModeAt: function getModeAt(t) {
	            var n = this.doc.mode;return n.innerMode ? e.innerMode(n, this.getTokenAt(t).state).mode : n;
	          }, getHelper: function getHelper(e, t) {
	            return this.getHelpers(e, t)[0];
	          }, getHelpers: function getHelpers(e, t) {
	            var n = [];if (!la.hasOwnProperty(t)) return n;var r = la[t],
	                i = this.getModeAt(e);if ("string" == typeof i[t]) r[i[t]] && n.push(r[i[t]]);else if (i[t]) for (var o = 0; o < i[t].length; o++) {
	              var a = r[i[t][o]];a && n.push(a);
	            } else i.helperType && r[i.helperType] ? n.push(r[i.helperType]) : r[i.name] && n.push(r[i.name]);for (var o = 0; o < r._global.length; o++) {
	              var l = r._global[o];l.pred(i, this) && -1 == Pi(n, l.val) && n.push(l.val);
	            }return n;
	          }, getStateAfter: function getStateAfter(e, t) {
	            var n = this.doc;return e = pe(n, null == e ? n.first + n.size - 1 : e), je(this, e + 1, t);
	          }, cursorCoords: function cursorCoords(e, t) {
	            var n,
	                r = this.doc.sel.primary();return n = null == e ? r.head : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? me(this.doc, e) : e ? r.from() : r.to(), dt(this, n, t || "page");
	          }, charCoords: function charCoords(e, t) {
	            return ht(this, me(this.doc, e), t || "page");
	          }, coordsChar: function coordsChar(e, t) {
	            return e = ft(this, e, t || "page"), gt(this, e.left, e.top);
	          }, lineAtHeight: function lineAtHeight(e, t) {
	            return e = ft(this, { top: e, left: 0 }, t || "page").top, ni(this.doc, e + this.display.viewOffset);
	          }, heightAtLine: function heightAtLine(e, t) {
	            var n,
	                r = !1;if ("number" == typeof e) {
	              var i = this.doc.first + this.doc.size - 1;e < this.doc.first ? e = this.doc.first : e > i && (e = i, r = !0), n = Zr(this.doc, e);
	            } else n = e;return ut(this, n, { top: 0, left: 0 }, t || "page").top + (r ? this.doc.height - ri(n) : 0);
	          }, defaultTextHeight: function defaultTextHeight() {
	            return yt(this.display);
	          }, defaultCharWidth: function defaultCharWidth() {
	            return xt(this.display);
	          }, setGutterMarker: Ot(function (e, t, n) {
	            return zn(this.doc, e, "gutter", function (e) {
	              var r = e.gutterMarkers || (e.gutterMarkers = {});return r[t] = n, !n && Fi(r) && (e.gutterMarkers = null), !0;
	            });
	          }), clearGutter: Ot(function (e) {
	            var t = this,
	                n = t.doc,
	                r = n.first;n.iter(function (n) {
	              n.gutterMarkers && n.gutterMarkers[e] && (n.gutterMarkers[e] = null, Ht(t, r, "gutter"), Fi(n.gutterMarkers) && (n.gutterMarkers = null)), ++r;
	            });
	          }), lineInfo: function lineInfo(e) {
	            if ("number" == typeof e) {
	              if (!ve(this.doc, e)) return null;var t = e;if (e = Zr(this.doc, e), !e) return null;
	            } else {
	              var t = ti(e);if (null == t) return null;
	            }return { line: t, handle: e, text: e.text, gutterMarkers: e.gutterMarkers, textClass: e.textClass, bgClass: e.bgClass, wrapClass: e.wrapClass, widgets: e.widgets };
	          }, getViewport: function getViewport() {
	            return { from: this.display.viewFrom, to: this.display.viewTo };
	          }, addWidget: function addWidget(e, t, n, r, i) {
	            var o = this.display;e = dt(this, me(this.doc, e));var a = e.bottom,
	                l = e.left;if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), o.sizer.appendChild(t), "over" == r) a = e.top;else if ("above" == r || "near" == r) {
	              var s = Math.max(o.wrapper.clientHeight, this.doc.height),
	                  c = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);("above" == r || e.bottom + t.offsetHeight > s) && e.top > t.offsetHeight ? a = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= s && (a = e.bottom), l + t.offsetWidth > c && (l = c - t.offsetWidth);
	            }t.style.top = a + "px", t.style.left = t.style.right = "", "right" == i ? (l = o.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? l = 0 : "middle" == i && (l = (o.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = l + "px"), n && Dn(this, l, a, l + t.offsetWidth, a + t.offsetHeight);
	          }, triggerOnKeyDown: Ot(hn), triggerOnKeyPress: Ot(mn), triggerOnKeyUp: pn, execCommand: function execCommand(e) {
	            return ua.hasOwnProperty(e) ? ua[e].call(null, this) : void 0;
	          }, triggerElectric: Ot(function (e) {
	            Q(this, e);
	          }), findPosH: function findPosH(e, t, n, r) {
	            var i = 1;0 > t && (i = -1, t = -t);for (var o = 0, a = me(this.doc, e); t > o && (a = Un(this.doc, a, i, n, r), !a.hitSide); ++o) {}return a;
	          }, moveH: Ot(function (e, t) {
	            var n = this;n.extendSelectionsBy(function (r) {
	              return n.display.shift || n.doc.extend || r.empty() ? Un(n.doc, r.head, e, t, n.options.rtlMoveVisually) : 0 > e ? r.from() : r.to();
	            }, _a);
	          }), deleteH: Ot(function (e, t) {
	            var n = this.doc.sel,
	                r = this.doc;n.somethingSelected() ? r.replaceSelection("", null, "+delete") : jn(this, function (n) {
	              var i = Un(r, n.head, e, t, !1);return 0 > e ? { from: i, to: n.head } : { from: n.head, to: i };
	            });
	          }), findPosV: function findPosV(e, t, n, r) {
	            var i = 1,
	                o = r;0 > t && (i = -1, t = -t);for (var a = 0, l = me(this.doc, e); t > a; ++a) {
	              var s = dt(this, l, "div");if (null == o ? o = s.left : s.left = o, l = qn(this, s, i, n), l.hitSide) break;
	            }return l;
	          }, moveV: Ot(function (e, t) {
	            var n = this,
	                r = this.doc,
	                i = [],
	                o = !n.display.shift && !r.extend && r.sel.somethingSelected();if (r.extendSelectionsBy(function (a) {
	              if (o) return 0 > e ? a.from() : a.to();var l = dt(n, a.head, "div");null != a.goalColumn && (l.left = a.goalColumn), i.push(l.left);var s = qn(n, l, e, t);return "page" == t && a == r.sel.primary() && Wn(n, null, ht(n, s, "div").top - l.top), s;
	            }, _a), i.length) for (var a = 0; a < r.sel.ranges.length; a++) {
	              r.sel.ranges[a].goalColumn = i[a];
	            }
	          }), findWordAt: function findWordAt(e) {
	            var t = this.doc,
	                n = Zr(t, e.line).text,
	                r = e.ch,
	                i = e.ch;if (n) {
	              var o = this.getHelper(e, "wordChars");(e.xRel < 0 || i == n.length) && r ? --r : ++i;for (var a = n.charAt(r), l = _i(a, o) ? function (e) {
	                return _i(e, o);
	              } : /\s/.test(a) ? function (e) {
	                return (/\s/.test(e)
	                );
	              } : function (e) {
	                return !/\s/.test(e) && !_i(e);
	              }; r > 0 && l(n.charAt(r - 1));) {
	                --r;
	              }for (; i < n.length && l(n.charAt(i));) {
	                ++i;
	              }
	            }return new fe(Bo(e.line, r), Bo(e.line, i));
	          }, toggleOverwrite: function toggleOverwrite(e) {
	            null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? Ja(this.display.cursorDiv, "CodeMirror-overwrite") : Za(this.display.cursorDiv, "CodeMirror-overwrite"), Pa(this, "overwriteToggle", this, this.state.overwrite));
	          }, hasFocus: function hasFocus() {
	            return this.display.input.getField() == Gi();
	          }, isReadOnly: function isReadOnly() {
	            return !(!this.options.readOnly && !this.doc.cantEdit);
	          }, scrollTo: Ot(function (e, t) {
	            null == e && null == t || _n(this), null != e && (this.curOp.scrollLeft = e), null != t && (this.curOp.scrollTop = t);
	          }), getScrollInfo: function getScrollInfo() {
	            var e = this.display.scroller;return { left: e.scrollLeft, top: e.scrollTop, height: e.scrollHeight - Ye(this) - this.display.barHeight, width: e.scrollWidth - Ye(this) - this.display.barWidth, clientHeight: Ve(this), clientWidth: $e(this) };
	          }, scrollIntoView: Ot(function (e, t) {
	            if (null == e ? (e = { from: this.doc.sel.primary().head, to: null }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = { from: Bo(e, 0), to: null } : null == e.from && (e = { from: e, to: null }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line) _n(this), this.curOp.scrollToPos = e;else {
	              var n = Hn(this, Math.min(e.from.left, e.to.left), Math.min(e.from.top, e.to.top) - e.margin, Math.max(e.from.right, e.to.right), Math.max(e.from.bottom, e.to.bottom) + e.margin);this.scrollTo(n.scrollLeft, n.scrollTop);
	            }
	          }), setSize: Ot(function (e, t) {
	            function n(e) {
	              return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e;
	            }var r = this;null != e && (r.display.wrapper.style.width = n(e)), null != t && (r.display.wrapper.style.height = n(t)), r.options.lineWrapping && at(this);var i = r.display.viewFrom;r.doc.iter(i, r.display.viewTo, function (e) {
	              if (e.widgets) for (var t = 0; t < e.widgets.length; t++) {
	                if (e.widgets[t].noHScroll) {
	                  Ht(r, i, "widget");break;
	                }
	              }++i;
	            }), r.curOp.forceUpdate = !0, Pa(r, "refresh", this);
	          }), operation: function operation(e) {
	            return At(this, e);
	          }, refresh: Ot(function () {
	            var e = this.display.cachedTextHeight;Dt(this), this.curOp.forceUpdate = !0, lt(this), this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop), u(this), (null == e || Math.abs(e - yt(this.display)) > .5) && a(this), Pa(this, "refresh", this);
	          }), swapDoc: Ot(function (e) {
	            var t = this.doc;return t.cm = null, Xr(this, e), lt(this), this.display.input.reset(), this.scrollTo(e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, Ci(this, "swapDoc", this, t), t;
	          }), getInputField: function getInputField() {
	            return this.display.input.getField();
	          }, getWrapperElement: function getWrapperElement() {
	            return this.display.wrapper;
	          }, getScrollerElement: function getScrollerElement() {
	            return this.display.scroller;
	          }, getGutterElement: function getGutterElement() {
	            return this.display.gutters;
	          } }, Ai(e);var ea = e.defaults = {},
	            ta = e.optionHandlers = {},
	            na = e.Init = { toString: function toString() {
	            return "CodeMirror.Init";
	          } };Gn("value", "", function (e, t) {
	          e.setValue(t);
	        }, !0), Gn("mode", null, function (e, t) {
	          e.doc.modeOption = t, n(e);
	        }, !0), Gn("indentUnit", 2, n, !0), Gn("indentWithTabs", !1), Gn("smartIndent", !0), Gn("tabSize", 4, function (e) {
	          r(e), lt(e), Dt(e);
	        }, !0), Gn("lineSeparator", null, function (e, t) {
	          if (e.doc.lineSep = t, t) {
	            var n = [],
	                r = e.doc.first;e.doc.iter(function (e) {
	              for (var i = 0;;) {
	                var o = e.text.indexOf(t, i);if (-1 == o) break;i = o + t.length, n.push(Bo(r, o));
	              }r++;
	            });for (var i = n.length - 1; i >= 0; i--) {
	              In(e.doc, t, n[i], Bo(n[i].line, n[i].ch + t.length));
	            }
	          }
	        }), Gn("specialChars", /[\u0000-\u001f\u007f\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function (t, n, r) {
	          t.state.specialChars = new RegExp(n.source + (n.test("	") ? "" : "|	"), "g"), r != e.Init && t.refresh();
	        }), Gn("specialCharPlaceholder", _r, function (e) {
	          e.refresh();
	        }, !0), Gn("electricChars", !0), Gn("inputStyle", Ao ? "contenteditable" : "textarea", function () {
	          throw new Error("inputStyle can not (yet) be changed in a running editor");
	        }, !0), Gn("rtlMoveVisually", !Io), Gn("wholeLineUpdateBefore", !0), Gn("theme", "default", function (e) {
	          l(e), s(e);
	        }, !0), Gn("keyMap", "default", function (t, n, r) {
	          var i = $n(n),
	              o = r != e.Init && $n(r);o && o.detach && o.detach(t, i), i.attach && i.attach(t, o || null);
	        }), Gn("extraKeys", null), Gn("lineWrapping", !1, i, !0), Gn("gutters", [], function (e) {
	          d(e.options), s(e);
	        }, !0), Gn("fixedGutter", !0, function (e, t) {
	          e.display.gutters.style.left = t ? C(e.display) + "px" : "0", e.refresh();
	        }, !0), Gn("coverGutterNextToScrollbar", !1, function (e) {
	          y(e);
	        }, !0), Gn("scrollbarStyle", "native", function (e) {
	          v(e), y(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
	        }, !0), Gn("lineNumbers", !1, function (e) {
	          d(e.options), s(e);
	        }, !0), Gn("firstLineNumber", 1, s, !0), Gn("lineNumberFormatter", function (e) {
	          return e;
	        }, s, !0), Gn("showCursorWhenSelecting", !1, Re, !0), Gn("resetSelectionOnContextMenu", !0), Gn("lineWiseCopyCut", !0), Gn("readOnly", !1, function (e, t) {
	          "nocursor" == t ? (yn(e), e.display.input.blur(), e.display.disabled = !0) : e.display.disabled = !1, e.display.input.readOnlyChanged(t);
	        }), Gn("disableInput", !1, function (e, t) {
	          t || e.display.input.reset();
	        }, !0), Gn("dragDrop", !0, Ut), Gn("allowDropFileTypes", null), Gn("cursorBlinkRate", 530), Gn("cursorScrollMargin", 0), Gn("cursorHeight", 1, Re, !0), Gn("singleCursorHeightPerLine", !0, Re, !0), Gn("workTime", 100), Gn("workDelay", 100), Gn("flattenSpans", !0, r, !0), Gn("addModeClass", !1, r, !0), Gn("pollInterval", 100), Gn("undoDepth", 200, function (e, t) {
	          e.doc.history.undoDepth = t;
	        }), Gn("historyEventDelay", 1250), Gn("viewportMargin", 10, function (e) {
	          e.refresh();
	        }, !0), Gn("maxHighlightLength", 1e4, r, !0), Gn("moveInputWithCursor", !0, function (e, t) {
	          t || e.display.input.resetPosition();
	        }), Gn("tabindex", null, function (e, t) {
	          e.display.input.getField().tabIndex = t || "";
	        }), Gn("autofocus", null);var ra = e.modes = {},
	            ia = e.mimeModes = {};e.defineMode = function (t, n) {
	          e.defaults.mode || "null" == t || (e.defaults.mode = t), arguments.length > 2 && (n.dependencies = Array.prototype.slice.call(arguments, 2)), ra[t] = n;
	        }, e.defineMIME = function (e, t) {
	          ia[e] = t;
	        }, e.resolveMode = function (t) {
	          if ("string" == typeof t && ia.hasOwnProperty(t)) t = ia[t];else if (t && "string" == typeof t.name && ia.hasOwnProperty(t.name)) {
	            var n = ia[t.name];"string" == typeof n && (n = { name: n }), t = Hi(n, t), t.name = n.name;
	          } else if ("string" == typeof t && /^[\w\-]+\/[\w\-]+\+xml$/.test(t)) return e.resolveMode("application/xml");return "string" == typeof t ? { name: t } : t || { name: "null" };
	        }, e.getMode = function (t, n) {
	          var n = e.resolveMode(n),
	              r = ra[n.name];if (!r) return e.getMode(t, "text/plain");var i = r(t, n);if (oa.hasOwnProperty(n.name)) {
	            var o = oa[n.name];for (var a in o) {
	              o.hasOwnProperty(a) && (i.hasOwnProperty(a) && (i["_" + a] = i[a]), i[a] = o[a]);
	            }
	          }if (i.name = n.name, n.helperType && (i.helperType = n.helperType), n.modeProps) for (var a in n.modeProps) {
	            i[a] = n.modeProps[a];
	          }return i;
	        }, e.defineMode("null", function () {
	          return { token: function token(e) {
	              e.skipToEnd();
	            } };
	        }), e.defineMIME("text/plain", "null");var oa = e.modeExtensions = {};e.extendMode = function (e, t) {
	          var n = oa.hasOwnProperty(e) ? oa[e] : oa[e] = {};Wi(t, n);
	        }, e.defineExtension = function (t, n) {
	          e.prototype[t] = n;
	        }, e.defineDocExtension = function (e, t) {
	          Ca.prototype[e] = t;
	        }, e.defineOption = Gn;var aa = [];e.defineInitHook = function (e) {
	          aa.push(e);
	        };var la = e.helpers = {};e.registerHelper = function (t, n, r) {
	          la.hasOwnProperty(t) || (la[t] = e[t] = { _global: [] }), la[t][n] = r;
	        }, e.registerGlobalHelper = function (t, n, r, i) {
	          e.registerHelper(t, n, i), la[t]._global.push({ pred: r, val: i });
	        };var sa = e.copyState = function (e, t) {
	          if (t === !0) return t;if (e.copyState) return e.copyState(t);var n = {};for (var r in t) {
	            var i = t[r];i instanceof Array && (i = i.concat([])), n[r] = i;
	          }return n;
	        },
	            ca = e.startState = function (e, t, n) {
	          return e.startState ? e.startState(t, n) : !0;
	        };e.innerMode = function (e, t) {
	          for (; e.innerMode;) {
	            var n = e.innerMode(t);if (!n || n.mode == e) break;t = n.state, e = n.mode;
	          }return n || { mode: e, state: t };
	        };var ua = e.commands = { selectAll: function selectAll(e) {
	            e.setSelection(Bo(e.firstLine(), 0), Bo(e.lastLine()), Wa);
	          }, singleSelection: function singleSelection(e) {
	            e.setSelection(e.getCursor("anchor"), e.getCursor("head"), Wa);
	          }, killLine: function killLine(e) {
	            jn(e, function (t) {
	              if (t.empty()) {
	                var n = Zr(e.doc, t.head.line).text.length;return t.head.ch == n && t.head.line < e.lastLine() ? { from: t.head, to: Bo(t.head.line + 1, 0) } : { from: t.head, to: Bo(t.head.line, n) };
	              }return { from: t.from(), to: t.to() };
	            });
	          }, deleteLine: function deleteLine(e) {
	            jn(e, function (t) {
	              return { from: Bo(t.from().line, 0), to: me(e.doc, Bo(t.to().line + 1, 0)) };
	            });
	          }, delLineLeft: function delLineLeft(e) {
	            jn(e, function (e) {
	              return { from: Bo(e.from().line, 0), to: e.from() };
	            });
	          }, delWrappedLineLeft: function delWrappedLineLeft(e) {
	            jn(e, function (t) {
	              var n = e.charCoords(t.head, "div").top + 5,
	                  r = e.coordsChar({ left: 0, top: n }, "div");return { from: r, to: t.from() };
	            });
	          }, delWrappedLineRight: function delWrappedLineRight(e) {
	            jn(e, function (t) {
	              var n = e.charCoords(t.head, "div").top + 5,
	                  r = e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, "div");return { from: t.from(), to: r };
	            });
	          }, undo: function undo(e) {
	            e.undo();
	          }, redo: function redo(e) {
	            e.redo();
	          }, undoSelection: function undoSelection(e) {
	            e.undoSelection();
	          }, redoSelection: function redoSelection(e) {
	            e.redoSelection();
	          }, goDocStart: function goDocStart(e) {
	            e.extendSelection(Bo(e.firstLine(), 0));
	          }, goDocEnd: function goDocEnd(e) {
	            e.extendSelection(Bo(e.lastLine()));
	          }, goLineStart: function goLineStart(e) {
	            e.extendSelectionsBy(function (t) {
	              return oo(e, t.head.line);
	            }, { origin: "+move", bias: 1 });
	          }, goLineStartSmart: function goLineStartSmart(e) {
	            e.extendSelectionsBy(function (t) {
	              return lo(e, t.head);
	            }, { origin: "+move", bias: 1 });
	          }, goLineEnd: function goLineEnd(e) {
	            e.extendSelectionsBy(function (t) {
	              return ao(e, t.head.line);
	            }, { origin: "+move", bias: -1 });
	          }, goLineRight: function goLineRight(e) {
	            e.extendSelectionsBy(function (t) {
	              var n = e.charCoords(t.head, "div").top + 5;return e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, "div");
	            }, _a);
	          }, goLineLeft: function goLineLeft(e) {
	            e.extendSelectionsBy(function (t) {
	              var n = e.charCoords(t.head, "div").top + 5;return e.coordsChar({ left: 0, top: n }, "div");
	            }, _a);
	          }, goLineLeftSmart: function goLineLeftSmart(e) {
	            e.extendSelectionsBy(function (t) {
	              var n = e.charCoords(t.head, "div").top + 5,
	                  r = e.coordsChar({ left: 0, top: n }, "div");return r.ch < e.getLine(r.line).search(/\S/) ? lo(e, t.head) : r;
	            }, _a);
	          }, goLineUp: function goLineUp(e) {
	            e.moveV(-1, "line");
	          }, goLineDown: function goLineDown(e) {
	            e.moveV(1, "line");
	          }, goPageUp: function goPageUp(e) {
	            e.moveV(-1, "page");
	          }, goPageDown: function goPageDown(e) {
	            e.moveV(1, "page");
	          }, goCharLeft: function goCharLeft(e) {
	            e.moveH(-1, "char");
	          }, goCharRight: function goCharRight(e) {
	            e.moveH(1, "char");
	          }, goColumnLeft: function goColumnLeft(e) {
	            e.moveH(-1, "column");
	          }, goColumnRight: function goColumnRight(e) {
	            e.moveH(1, "column");
	          }, goWordLeft: function goWordLeft(e) {
	            e.moveH(-1, "word");
	          }, goGroupRight: function goGroupRight(e) {
	            e.moveH(1, "group");
	          }, goGroupLeft: function goGroupLeft(e) {
	            e.moveH(-1, "group");
	          }, goWordRight: function goWordRight(e) {
	            e.moveH(1, "word");
	          }, delCharBefore: function delCharBefore(e) {
	            e.deleteH(-1, "char");
	          }, delCharAfter: function delCharAfter(e) {
	            e.deleteH(1, "char");
	          }, delWordBefore: function delWordBefore(e) {
	            e.deleteH(-1, "word");
	          }, delWordAfter: function delWordAfter(e) {
	            e.deleteH(1, "word");
	          }, delGroupBefore: function delGroupBefore(e) {
	            e.deleteH(-1, "group");
	          }, delGroupAfter: function delGroupAfter(e) {
	            e.deleteH(1, "group");
	          }, indentAuto: function indentAuto(e) {
	            e.indentSelection("smart");
	          }, indentMore: function indentMore(e) {
	            e.indentSelection("add");
	          }, indentLess: function indentLess(e) {
	            e.indentSelection("subtract");
	          }, insertTab: function insertTab(e) {
	            e.replaceSelection("	");
	          }, insertSoftTab: function insertSoftTab(e) {
	            for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
	              var o = n[i].from(),
	                  a = Fa(e.getLine(o.line), o.ch, r);t.push(Oi(r - a % r));
	            }e.replaceSelections(t);
	          }, defaultTab: function defaultTab(e) {
	            e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab");
	          }, transposeChars: function transposeChars(e) {
	            At(e, function () {
	              for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++) {
	                var i = t[r].head,
	                    o = Zr(e.doc, i.line).text;if (o) if (i.ch == o.length && (i = new Bo(i.line, i.ch - 1)), i.ch > 0) i = new Bo(i.line, i.ch + 1), e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), Bo(i.line, i.ch - 2), i, "+transpose");else if (i.line > e.doc.first) {
	                  var a = Zr(e.doc, i.line - 1).text;a && e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + a.charAt(a.length - 1), Bo(i.line - 1, a.length - 1), Bo(i.line, 1), "+transpose");
	                }n.push(new fe(i, i));
	              }e.setSelections(n);
	            });
	          }, newlineAndIndent: function newlineAndIndent(e) {
	            At(e, function () {
	              for (var t = e.listSelections().length, n = 0; t > n; n++) {
	                var r = e.listSelections()[n];e.replaceRange(e.doc.lineSeparator(), r.anchor, r.head, "+input"), e.indentLine(r.from().line + 1, null, !0);
	              }Bn(e);
	            });
	          }, openLine: function openLine(e) {
	            e.replaceSelection("\n", "start");
	          }, toggleOverwrite: function toggleOverwrite(e) {
	            e.toggleOverwrite();
	          } },
	            fa = e.keyMap = {};fa.basic = { Left: "goCharLeft", Right: "goCharRight", Up: "goLineUp", Down: "goLineDown", End: "goLineEnd", Home: "goLineStartSmart", PageUp: "goPageUp", PageDown: "goPageDown", Delete: "delCharAfter", Backspace: "delCharBefore", "Shift-Backspace": "delCharBefore", Tab: "defaultTab", "Shift-Tab": "indentAuto", Enter: "newlineAndIndent", Insert: "toggleOverwrite", Esc: "singleSelection" }, fa.pcDefault = { "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo", "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown", "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd", "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find", "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll", "Ctrl-[": "indentLess", "Ctrl-]": "indentMore", "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection", fallthrough: "basic" }, fa.emacsy = { "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown", "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd", "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore", "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars", "Ctrl-O": "openLine" }, fa.macDefault = { "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo", "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft", "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore", "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find", "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll", "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight", "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd", fallthrough: ["basic", "emacsy"] }, fa["default"] = Eo ? fa.macDefault : fa.pcDefault, e.normalizeKeyMap = function (e) {
	          var t = {};for (var n in e) {
	            if (e.hasOwnProperty(n)) {
	              var r = e[n];if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;if ("..." == r) {
	                delete e[n];continue;
	              }for (var i = Ri(n.split(" "), Yn), o = 0; o < i.length; o++) {
	                var a, l;o == i.length - 1 ? (l = i.join(" "), a = r) : (l = i.slice(0, o + 1).join(" "), a = "...");var s = t[l];if (s) {
	                  if (s != a) throw new Error("Inconsistent bindings for " + l);
	                } else t[l] = a;
	              }delete e[n];
	            }
	          }for (var c in t) {
	            e[c] = t[c];
	          }return e;
	        };var ha = e.lookupKey = function (e, t, n, r) {
	          t = $n(t);var i = t.call ? t.call(e, r) : t[e];if (i === !1) return "nothing";if ("..." === i) return "multi";if (null != i && n(i)) return "handled";if (t.fallthrough) {
	            if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return ha(e, t.fallthrough, n, r);for (var o = 0; o < t.fallthrough.length; o++) {
	              var a = ha(e, t.fallthrough[o], n, r);
	              if (a) return a;
	            }
	          }
	        },
	            da = e.isModifierKey = function (e) {
	          var t = "string" == typeof e ? e : ol[e.keyCode];return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t;
	        },
	            pa = e.keyName = function (e, t) {
	          if (Co && 34 == e.keyCode && e["char"]) return !1;var n = ol[e.keyCode],
	              r = n;return null == r || e.altGraphKey ? !1 : (e.altKey && "Alt" != n && (r = "Alt-" + r), (Ro ? e.metaKey : e.ctrlKey) && "Ctrl" != n && (r = "Ctrl-" + r), (Ro ? e.ctrlKey : e.metaKey) && "Cmd" != n && (r = "Cmd-" + r), !t && e.shiftKey && "Shift" != n && (r = "Shift-" + r), r);
	        };e.fromTextArea = function (t, n) {
	          function r() {
	            t.value = c.getValue();
	          }if (n = n ? Wi(n) : {}, n.value = t.value, !n.tabindex && t.tabIndex && (n.tabindex = t.tabIndex), !n.placeholder && t.placeholder && (n.placeholder = t.placeholder), null == n.autofocus) {
	            var i = Gi();n.autofocus = i == t || null != t.getAttribute("autofocus") && i == document.body;
	          }if (t.form && (Ea(t.form, "submit", r), !n.leaveSubmitMethodAlone)) {
	            var o = t.form,
	                a = o.submit;try {
	              var l = o.submit = function () {
	                r(), o.submit = a, o.submit(), o.submit = l;
	              };
	            } catch (s) {}
	          }n.finishInit = function (e) {
	            e.save = r, e.getTextArea = function () {
	              return t;
	            }, e.toTextArea = function () {
	              e.toTextArea = isNaN, r(), t.parentNode.removeChild(e.getWrapperElement()), t.style.display = "", t.form && (Ia(t.form, "submit", r), "function" == typeof t.form.submit && (t.form.submit = a));
	            };
	          }, t.style.display = "none";var c = e(function (e) {
	            t.parentNode.insertBefore(e, t.nextSibling);
	          }, n);return c;
	        };var ma = e.StringStream = function (e, t) {
	          this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0;
	        };ma.prototype = { eol: function eol() {
	            return this.pos >= this.string.length;
	          }, sol: function sol() {
	            return this.pos == this.lineStart;
	          }, peek: function peek() {
	            return this.string.charAt(this.pos) || void 0;
	          }, next: function next() {
	            return this.pos < this.string.length ? this.string.charAt(this.pos++) : void 0;
	          }, eat: function eat(e) {
	            var t = this.string.charAt(this.pos);if ("string" == typeof e) var n = t == e;else var n = t && (e.test ? e.test(t) : e(t));return n ? (++this.pos, t) : void 0;
	          }, eatWhile: function eatWhile(e) {
	            for (var t = this.pos; this.eat(e);) {}return this.pos > t;
	          }, eatSpace: function eatSpace() {
	            for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos));) {
	              ++this.pos;
	            }return this.pos > e;
	          }, skipToEnd: function skipToEnd() {
	            this.pos = this.string.length;
	          }, skipTo: function skipTo(e) {
	            var t = this.string.indexOf(e, this.pos);return t > -1 ? (this.pos = t, !0) : void 0;
	          }, backUp: function backUp(e) {
	            this.pos -= e;
	          }, column: function column() {
	            return this.lastColumnPos < this.start && (this.lastColumnValue = Fa(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? Fa(this.string, this.lineStart, this.tabSize) : 0);
	          }, indentation: function indentation() {
	            return Fa(this.string, null, this.tabSize) - (this.lineStart ? Fa(this.string, this.lineStart, this.tabSize) : 0);
	          }, match: function match(e, t, n) {
	            if ("string" != typeof e) {
	              var r = this.string.slice(this.pos).match(e);return r && r.index > 0 ? null : (r && t !== !1 && (this.pos += r[0].length), r);
	            }var i = function i(e) {
	              return n ? e.toLowerCase() : e;
	            },
	                o = this.string.substr(this.pos, e.length);return i(o) == i(e) ? (t !== !1 && (this.pos += e.length), !0) : void 0;
	          }, current: function current() {
	            return this.string.slice(this.start, this.pos);
	          }, hideFirstChars: function hideFirstChars(e, t) {
	            this.lineStart += e;try {
	              return t();
	            } finally {
	              this.lineStart -= e;
	            }
	          } };var ga = 0,
	            va = e.TextMarker = function (e, t) {
	          this.lines = [], this.type = t, this.doc = e, this.id = ++ga;
	        };Ai(va), va.prototype.clear = function () {
	          if (!this.explicitlyCleared) {
	            var e = this.doc.cm,
	                t = e && !e.curOp;if (t && bt(e), Ni(this, "clear")) {
	              var n = this.find();n && Ci(this, "clear", n.from, n.to);
	            }for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
	              var a = this.lines[o],
	                  l = er(a.markedSpans, this);e && !this.collapsed ? Ht(e, ti(a), "text") : e && (null != l.to && (i = ti(a)), null != l.from && (r = ti(a))), a.markedSpans = tr(a.markedSpans, l), null == l.from && this.collapsed && !kr(this.doc, a) && e && ei(a, yt(e.display));
	            }if (e && this.collapsed && !e.options.lineWrapping) for (var o = 0; o < this.lines.length; ++o) {
	              var s = yr(this.lines[o]),
	                  c = f(s);c > e.display.maxLineLength && (e.display.maxLine = s, e.display.maxLineLength = c, e.display.maxLineChanged = !0);
	            }null != r && e && this.collapsed && Dt(e, r, i + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && Ae(e.doc)), e && Ci(e, "markerCleared", e, this), t && kt(e), this.parent && this.parent.clear();
	          }
	        }, va.prototype.find = function (e, t) {
	          null == e && "bookmark" == this.type && (e = 1);for (var n, r, i = 0; i < this.lines.length; ++i) {
	            var o = this.lines[i],
	                a = er(o.markedSpans, this);if (null != a.from && (n = Bo(t ? o : ti(o), a.from), -1 == e)) return n;if (null != a.to && (r = Bo(t ? o : ti(o), a.to), 1 == e)) return r;
	          }return n && { from: n, to: r };
	        }, va.prototype.changed = function () {
	          var e = this.find(-1, !0),
	              t = this,
	              n = this.doc.cm;e && n && At(n, function () {
	            var r = e.line,
	                i = ti(e.line),
	                o = Qe(n, i);if (o && (ot(o), n.curOp.selectionChanged = n.curOp.forceUpdate = !0), n.curOp.updateMaxLine = !0, !kr(t.doc, r) && null != t.height) {
	              var a = t.height;t.height = null;var l = Lr(t) - a;l && ei(r, r.height + l);
	            }
	          });
	        }, va.prototype.attachLine = function (e) {
	          if (!this.lines.length && this.doc.cm) {
	            var t = this.doc.cm.curOp;t.maybeHiddenMarkers && -1 != Pi(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
	          }this.lines.push(e);
	        }, va.prototype.detachLine = function (e) {
	          if (this.lines.splice(Pi(this.lines, e), 1), !this.lines.length && this.doc.cm) {
	            var t = this.doc.cm.curOp;(t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
	          }
	        };var ga = 0,
	            ya = e.SharedTextMarker = function (e, t) {
	          this.markers = e, this.primary = t;for (var n = 0; n < e.length; ++n) {
	            e[n].parent = this;
	          }
	        };Ai(ya), ya.prototype.clear = function () {
	          if (!this.explicitlyCleared) {
	            this.explicitlyCleared = !0;for (var e = 0; e < this.markers.length; ++e) {
	              this.markers[e].clear();
	            }Ci(this, "clear");
	          }
	        }, ya.prototype.find = function (e, t) {
	          return this.primary.find(e, t);
	        };var xa = e.LineWidget = function (e, t, n) {
	          if (n) for (var r in n) {
	            n.hasOwnProperty(r) && (this[r] = n[r]);
	          }this.doc = e, this.node = t;
	        };Ai(xa), xa.prototype.clear = function () {
	          var e = this.doc.cm,
	              t = this.line.widgets,
	              n = this.line,
	              r = ti(n);if (null != r && t) {
	            for (var i = 0; i < t.length; ++i) {
	              t[i] == this && t.splice(i--, 1);
	            }t.length || (n.widgets = null);var o = Lr(this);ei(n, Math.max(0, n.height - o)), e && At(e, function () {
	              Cr(e, n, -o), Ht(e, r, "widget");
	            });
	          }
	        }, xa.prototype.changed = function () {
	          var e = this.height,
	              t = this.doc.cm,
	              n = this.line;this.height = null;var r = Lr(this) - e;r && (ei(n, n.height + r), t && At(t, function () {
	            t.curOp.forceUpdate = !0, Cr(t, n, r);
	          }));
	        };var ba = e.Line = function (e, t, n) {
	          this.text = e, ur(this, t), this.height = n ? n(this) : 1;
	        };Ai(ba), ba.prototype.lineNo = function () {
	          return ti(this);
	        };var wa = {},
	            ka = {};$r.prototype = { chunkSize: function chunkSize() {
	            return this.lines.length;
	          }, removeInner: function removeInner(e, t) {
	            for (var n = e, r = e + t; r > n; ++n) {
	              var i = this.lines[n];this.height -= i.height, Nr(i), Ci(i, "delete");
	            }this.lines.splice(e, t);
	          }, collapse: function collapse(e) {
	            e.push.apply(e, this.lines);
	          }, insertInner: function insertInner(e, t, n) {
	            this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));for (var r = 0; r < t.length; ++r) {
	              t[r].parent = this;
	            }
	          }, iterN: function iterN(e, t, n) {
	            for (var r = e + t; r > e; ++e) {
	              if (n(this.lines[e])) return !0;
	            }
	          } }, Vr.prototype = { chunkSize: function chunkSize() {
	            return this.size;
	          }, removeInner: function removeInner(e, t) {
	            this.size -= t;for (var n = 0; n < this.children.length; ++n) {
	              var r = this.children[n],
	                  i = r.chunkSize();if (i > e) {
	                var o = Math.min(t, i - e),
	                    a = r.height;if (r.removeInner(e, o), this.height -= a - r.height, i == o && (this.children.splice(n--, 1), r.parent = null), 0 == (t -= o)) break;e = 0;
	              } else e -= i;
	            }if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof $r))) {
	              var l = [];this.collapse(l), this.children = [new $r(l)], this.children[0].parent = this;
	            }
	          }, collapse: function collapse(e) {
	            for (var t = 0; t < this.children.length; ++t) {
	              this.children[t].collapse(e);
	            }
	          }, insertInner: function insertInner(e, t, n) {
	            this.size += t.length, this.height += n;for (var r = 0; r < this.children.length; ++r) {
	              var i = this.children[r],
	                  o = i.chunkSize();if (o >= e) {
	                if (i.insertInner(e, t, n), i.lines && i.lines.length > 50) {
	                  for (var a = i.lines.length % 25 + 25, l = a; l < i.lines.length;) {
	                    var s = new $r(i.lines.slice(l, l += 25));i.height -= s.height, this.children.splice(++r, 0, s), s.parent = this;
	                  }i.lines = i.lines.slice(0, a), this.maybeSpill();
	                }break;
	              }e -= o;
	            }
	          }, maybeSpill: function maybeSpill() {
	            if (!(this.children.length <= 10)) {
	              var e = this;do {
	                var t = e.children.splice(e.children.length - 5, 5),
	                    n = new Vr(t);if (e.parent) {
	                  e.size -= n.size, e.height -= n.height;var r = Pi(e.parent.children, e);e.parent.children.splice(r + 1, 0, n);
	                } else {
	                  var i = new Vr(e.children);i.parent = e, e.children = [i, n], e = i;
	                }n.parent = e.parent;
	              } while (e.children.length > 10);e.parent.maybeSpill();
	            }
	          }, iterN: function iterN(e, t, n) {
	            for (var r = 0; r < this.children.length; ++r) {
	              var i = this.children[r],
	                  o = i.chunkSize();if (o > e) {
	                var a = Math.min(t, o - e);if (i.iterN(e, a, n)) return !0;if (0 == (t -= a)) break;e = 0;
	              } else e -= o;
	            }
	          } };var Sa = 0,
	            Ca = e.Doc = function (e, t, n, r) {
	          if (!(this instanceof Ca)) return new Ca(e, t, n, r);null == n && (n = 0), Vr.call(this, [new $r([new ba("", null)])]), this.first = n, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.frontier = n;var i = Bo(n, 0);this.sel = de(i), this.history = new oi(null), this.id = ++Sa, this.modeOption = t, this.lineSep = r, this.extend = !1, "string" == typeof e && (e = this.splitLines(e)), Yr(this, { from: i, to: i, text: e }), Te(this, de(i), Wa);
	        };Ca.prototype = Hi(Vr.prototype, { constructor: Ca, iter: function iter(e, t, n) {
	            n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e);
	          }, insert: function insert(e, t) {
	            for (var n = 0, r = 0; r < t.length; ++r) {
	              n += t[r].height;
	            }this.insertInner(e - this.first, t, n);
	          }, remove: function remove(e, t) {
	            this.removeInner(e - this.first, t);
	          }, getValue: function getValue(e) {
	            var t = Qr(this, this.first, this.first + this.size);return e === !1 ? t : t.join(e || this.lineSeparator());
	          }, setValue: It(function (e) {
	            var t = Bo(this.first, 0),
	                n = this.first + this.size - 1;Tn(this, { from: t, to: Bo(n, Zr(this, n).text.length), text: this.splitLines(e), origin: "setValue", full: !0 }, !0), Te(this, de(t));
	          }), replaceRange: function replaceRange(e, t, n, r) {
	            t = me(this, t), n = n ? me(this, n) : t, In(this, e, t, n, r);
	          }, getRange: function getRange(e, t, n) {
	            var r = Jr(this, me(this, e), me(this, t));return n === !1 ? r : r.join(n || this.lineSeparator());
	          }, getLine: function getLine(e) {
	            var t = this.getLineHandle(e);return t && t.text;
	          }, getLineHandle: function getLineHandle(e) {
	            return ve(this, e) ? Zr(this, e) : void 0;
	          }, getLineNumber: function getLineNumber(e) {
	            return ti(e);
	          }, getLineHandleVisualStart: function getLineHandleVisualStart(e) {
	            return "number" == typeof e && (e = Zr(this, e)), yr(e);
	          }, lineCount: function lineCount() {
	            return this.size;
	          }, firstLine: function firstLine() {
	            return this.first;
	          }, lastLine: function lastLine() {
	            return this.first + this.size - 1;
	          }, clipPos: function clipPos(e) {
	            return me(this, e);
	          }, getCursor: function getCursor(e) {
	            var t,
	                n = this.sel.primary();return t = null == e || "head" == e ? n.head : "anchor" == e ? n.anchor : "end" == e || "to" == e || e === !1 ? n.to() : n.from();
	          }, listSelections: function listSelections() {
	            return this.sel.ranges;
	          }, somethingSelected: function somethingSelected() {
	            return this.sel.somethingSelected();
	          }, setCursor: It(function (e, t, n) {
	            Se(this, me(this, "number" == typeof e ? Bo(e, t || 0) : e), null, n);
	          }), setSelection: It(function (e, t, n) {
	            Se(this, me(this, e), me(this, t || e), n);
	          }), extendSelection: It(function (e, t, n) {
	            be(this, me(this, e), t && me(this, t), n);
	          }), extendSelections: It(function (e, t) {
	            we(this, ye(this, e), t);
	          }), extendSelectionsBy: It(function (e, t) {
	            var n = Ri(this.sel.ranges, e);we(this, ye(this, n), t);
	          }), setSelections: It(function (e, t, n) {
	            if (e.length) {
	              for (var r = 0, i = []; r < e.length; r++) {
	                i[r] = new fe(me(this, e[r].anchor), me(this, e[r].head));
	              }null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Te(this, he(i, t), n);
	            }
	          }), addSelection: It(function (e, t, n) {
	            var r = this.sel.ranges.slice(0);r.push(new fe(me(this, e), me(this, t || e))), Te(this, he(r, r.length - 1), n);
	          }), getSelection: function getSelection(e) {
	            for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
	              var i = Jr(this, n[r].from(), n[r].to());t = t ? t.concat(i) : i;
	            }return e === !1 ? t : t.join(e || this.lineSeparator());
	          }, getSelections: function getSelections(e) {
	            for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
	              var i = Jr(this, n[r].from(), n[r].to());e !== !1 && (i = i.join(e || this.lineSeparator())), t[r] = i;
	            }return t;
	          }, replaceSelection: function replaceSelection(e, t, n) {
	            for (var r = [], i = 0; i < this.sel.ranges.length; i++) {
	              r[i] = e;
	            }this.replaceSelections(r, t, n || "+input");
	          }, replaceSelections: It(function (e, t, n) {
	            for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
	              var a = i.ranges[o];r[o] = { from: a.from(), to: a.to(), text: this.splitLines(e[o]), origin: n };
	            }for (var l = t && "end" != t && Cn(this, r, t), o = r.length - 1; o >= 0; o--) {
	              Tn(this, r[o]);
	            }l ? Le(this, l) : this.cm && Bn(this.cm);
	          }), undo: It(function () {
	            Nn(this, "undo");
	          }), redo: It(function () {
	            Nn(this, "redo");
	          }), undoSelection: It(function () {
	            Nn(this, "undo", !0);
	          }), redoSelection: It(function () {
	            Nn(this, "redo", !0);
	          }), setExtending: function setExtending(e) {
	            this.extend = e;
	          }, getExtending: function getExtending() {
	            return this.extend;
	          }, historySize: function historySize() {
	            for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++) {
	              e.done[r].ranges || ++t;
	            }for (var r = 0; r < e.undone.length; r++) {
	              e.undone[r].ranges || ++n;
	            }return { undo: t, redo: n };
	          }, clearHistory: function clearHistory() {
	            this.history = new oi(this.history.maxGeneration);
	          }, markClean: function markClean() {
	            this.cleanGeneration = this.changeGeneration(!0);
	          }, changeGeneration: function changeGeneration(e) {
	            return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation;
	          }, isClean: function isClean(e) {
	            return this.history.generation == (e || this.cleanGeneration);
	          }, getHistory: function getHistory() {
	            return { done: gi(this.history.done), undone: gi(this.history.undone) };
	          }, setHistory: function setHistory(e) {
	            var t = this.history = new oi(this.history.maxGeneration);t.done = gi(e.done.slice(0), null, !0), t.undone = gi(e.undone.slice(0), null, !0);
	          }, addLineClass: It(function (e, t, n) {
	            return zn(this, e, "gutter" == t ? "gutter" : "class", function (e) {
	              var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass";if (e[r]) {
	                if (Yi(n).test(e[r])) return !1;e[r] += " " + n;
	              } else e[r] = n;return !0;
	            });
	          }), removeLineClass: It(function (e, t, n) {
	            return zn(this, e, "gutter" == t ? "gutter" : "class", function (e) {
	              var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass",
	                  i = e[r];if (!i) return !1;if (null == n) e[r] = null;else {
	                var o = i.match(Yi(n));if (!o) return !1;var a = o.index + o[0].length;e[r] = i.slice(0, o.index) + (o.index && a != i.length ? " " : "") + i.slice(a) || null;
	              }return !0;
	            });
	          }), addLineWidget: It(function (e, t, n) {
	            return Tr(this, e, t, n);
	          }), removeLineWidget: function removeLineWidget(e) {
	            e.clear();
	          }, markText: function markText(e, t, n) {
	            return Vn(this, me(this, e), me(this, t), n, n && n.type || "range");
	          }, setBookmark: function setBookmark(e, t) {
	            var n = { replacedWith: t && (null == t.nodeType ? t.widget : t), insertLeft: t && t.insertLeft, clearWhenEmpty: !1, shared: t && t.shared, handleMouseEvents: t && t.handleMouseEvents };return e = me(this, e), Vn(this, e, e, n, "bookmark");
	          }, findMarksAt: function findMarksAt(e) {
	            e = me(this, e);var t = [],
	                n = Zr(this, e.line).markedSpans;if (n) for (var r = 0; r < n.length; ++r) {
	              var i = n[r];(null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker);
	            }return t;
	          }, findMarks: function findMarks(e, t, n) {
	            e = me(this, e), t = me(this, t);var r = [],
	                i = e.line;return this.iter(e.line, t.line + 1, function (o) {
	              var a = o.markedSpans;if (a) for (var l = 0; l < a.length; l++) {
	                var s = a[l];null != s.to && i == e.line && e.ch >= s.to || null == s.from && i != e.line || null != s.from && i == t.line && s.from >= t.ch || n && !n(s.marker) || r.push(s.marker.parent || s.marker);
	              }++i;
	            }), r;
	          }, getAllMarks: function getAllMarks() {
	            var e = [];return this.iter(function (t) {
	              var n = t.markedSpans;if (n) for (var r = 0; r < n.length; ++r) {
	                null != n[r].from && e.push(n[r].marker);
	              }
	            }), e;
	          }, posFromIndex: function posFromIndex(e) {
	            var t,
	                n = this.first,
	                r = this.lineSeparator().length;return this.iter(function (i) {
	              var o = i.text.length + r;return o > e ? (t = e, !0) : (e -= o, void ++n);
	            }), me(this, Bo(n, t));
	          }, indexFromPos: function indexFromPos(e) {
	            e = me(this, e);var t = e.ch;if (e.line < this.first || e.ch < 0) return 0;var n = this.lineSeparator().length;return this.iter(this.first, e.line, function (e) {
	              t += e.text.length + n;
	            }), t;
	          }, copy: function copy(e) {
	            var t = new Ca(Qr(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep);return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t;
	          }, linkedDoc: function linkedDoc(e) {
	            e || (e = {});var t = this.first,
	                n = this.first + this.size;null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to);var r = new Ca(Qr(this, t, n), e.mode || this.modeOption, t, this.lineSep);return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({ doc: r, sharedHist: e.sharedHist }), r.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }], Zn(r, Xn(this)), r;
	          }, unlinkDoc: function unlinkDoc(t) {
	            if (t instanceof e && (t = t.doc), this.linked) for (var n = 0; n < this.linked.length; ++n) {
	              var r = this.linked[n];if (r.doc == t) {
	                this.linked.splice(n, 1), t.unlinkDoc(this), Jn(Xn(this));break;
	              }
	            }if (t.history == this.history) {
	              var i = [t.id];Kr(t, function (e) {
	                i.push(e.id);
	              }, !0), t.history = new oi(null), t.history.done = gi(this.history.done, i), t.history.undone = gi(this.history.undone, i);
	            }
	          }, iterLinkedDocs: function iterLinkedDocs(e) {
	            Kr(this, e);
	          }, getMode: function getMode() {
	            return this.mode;
	          }, getEditor: function getEditor() {
	            return this.cm;
	          }, splitLines: function splitLines(e) {
	            return this.lineSep ? e.split(this.lineSep) : tl(e);
	          }, lineSeparator: function lineSeparator() {
	            return this.lineSep || "\n";
	          } }), Ca.prototype.eachLine = Ca.prototype.iter;var La = "iter insert remove copy getEditor constructor".split(" ");for (var Ta in Ca.prototype) {
	          Ca.prototype.hasOwnProperty(Ta) && Pi(La, Ta) < 0 && (e.prototype[Ta] = function (e) {
	            return function () {
	              return e.apply(this.doc, arguments);
	            };
	          }(Ca.prototype[Ta]));
	        }Ai(Ca);var Ma = e.e_preventDefault = function (e) {
	          e.preventDefault ? e.preventDefault() : e.returnValue = !1;
	        },
	            Na = e.e_stopPropagation = function (e) {
	          e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
	        },
	            Aa = e.e_stop = function (e) {
	          Ma(e), Na(e);
	        },
	            Ea = e.on = function (e, t, n) {
	          if (e.addEventListener) e.addEventListener(t, n, !1);else if (e.attachEvent) e.attachEvent("on" + t, n);else {
	            var r = e._handlers || (e._handlers = {}),
	                i = r[t] || (r[t] = []);i.push(n);
	          }
	        },
	            Oa = [],
	            Ia = e.off = function (e, t, n) {
	          if (e.removeEventListener) e.removeEventListener(t, n, !1);else if (e.detachEvent) e.detachEvent("on" + t, n);else for (var r = Si(e, t, !1), i = 0; i < r.length; ++i) {
	            if (r[i] == n) {
	              r.splice(i, 1);break;
	            }
	          }
	        },
	            Pa = e.signal = function (e, t) {
	          var n = Si(e, t, !0);if (n.length) for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i) {
	            n[i].apply(null, r);
	          }
	        },
	            Ra = null,
	            Da = 30,
	            Ha = e.Pass = { toString: function toString() {
	            return "CodeMirror.Pass";
	          } },
	            Wa = { scroll: !1 },
	            Ba = { origin: "*mouse" },
	            _a = { origin: "+move" };Ei.prototype.set = function (e, t) {
	          clearTimeout(this.id), this.id = setTimeout(t, e);
	        };var Fa = e.countColumn = function (e, t, n, r, i) {
	          null == t && (t = e.search(/[^\s\u00a0]/), -1 == t && (t = e.length));for (var o = r || 0, a = i || 0;;) {
	            var l = e.indexOf("	", o);if (0 > l || l >= t) return a + (t - o);a += l - o, a += n - a % n, o = l + 1;
	          }
	        },
	            za = e.findColumn = function (e, t, n) {
	          for (var r = 0, i = 0;;) {
	            var o = e.indexOf("	", r);-1 == o && (o = e.length);var a = o - r;if (o == e.length || i + a >= t) return r + Math.min(a, t - i);if (i += o - r, i += n - i % n, r = o + 1, i >= t) return r;
	          }
	        },
	            ja = [""],
	            Ua = function Ua(e) {
	          e.select();
	        };No ? Ua = function Ua(e) {
	          e.selectionStart = 0, e.selectionEnd = e.value.length;
	        } : xo && (Ua = function Ua(e) {
	          try {
	            e.select();
	          } catch (t) {}
	        });var qa,
	            Ga = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
	            Ya = e.isWordChar = function (e) {
	          return (/\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || Ga.test(e))
	          );
	        },
	            $a = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;qa = document.createRange ? function (e, t, n, r) {
	          var i = document.createRange();return i.setEnd(r || e, n), i.setStart(e, t), i;
	        } : function (e, t, n) {
	          var r = document.body.createTextRange();try {
	            r.moveToElementText(e.parentNode);
	          } catch (i) {
	            return r;
	          }return r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r;
	        };var Va = e.contains = function (e, t) {
	          if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);do {
	            if (11 == t.nodeType && (t = t.host), t == e) return !0;
	          } while (t = t.parentNode);
	        };xo && 11 > bo && (Gi = function Gi() {
	          try {
	            return document.activeElement;
	          } catch (e) {
	            return document.body;
	          }
	        });var Ka,
	            Xa,
	            Za = e.rmClass = function (e, t) {
	          var n = e.className,
	              r = Yi(t).exec(n);if (r) {
	            var i = n.slice(r.index + r[0].length);e.className = n.slice(0, r.index) + (i ? r[1] + i : "");
	          }
	        },
	            Ja = e.addClass = function (e, t) {
	          var n = e.className;Yi(t).test(n) || (e.className += (n ? " " : "") + t);
	        },
	            Qa = !1,
	            el = function () {
	          if (xo && 9 > bo) return !1;var e = ji("div");return "draggable" in e || "dragDrop" in e;
	        }(),
	            tl = e.splitLines = 3 != "\n\nb".split(/\n/).length ? function (e) {
	          for (var t = 0, n = [], r = e.length; r >= t;) {
	            var i = e.indexOf("\n", t);-1 == i && (i = e.length);var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
	                a = o.indexOf("\r");-1 != a ? (n.push(o.slice(0, a)), t += a + 1) : (n.push(o), t = i + 1);
	          }return n;
	        } : function (e) {
	          return e.split(/\r\n?|\n/);
	        },
	            nl = window.getSelection ? function (e) {
	          try {
	            return e.selectionStart != e.selectionEnd;
	          } catch (t) {
	            return !1;
	          }
	        } : function (e) {
	          try {
	            var t = e.ownerDocument.selection.createRange();
	          } catch (n) {}return t && t.parentElement() == e ? 0 != t.compareEndPoints("StartToEnd", t) : !1;
	        },
	            rl = function () {
	          var e = ji("div");return "oncopy" in e ? !0 : (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy);
	        }(),
	            il = null,
	            ol = e.keyNames = { 3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert", 46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod", 106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 127: "Delete", 173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete", 63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert" };!function () {
	          for (var e = 0; 10 > e; e++) {
	            ol[e + 48] = ol[e + 96] = String(e);
	          }for (var e = 65; 90 >= e; e++) {
	            ol[e] = String.fromCharCode(e);
	          }for (var e = 1; 12 >= e; e++) {
	            ol[e + 111] = ol[e + 63235] = "F" + e;
	          }
	        }();var al,
	            ll = function () {
	          function e(e) {
	            return 247 >= e ? n.charAt(e) : e >= 1424 && 1524 >= e ? "R" : e >= 1536 && 1773 >= e ? r.charAt(e - 1536) : e >= 1774 && 2220 >= e ? "r" : e >= 8192 && 8203 >= e ? "w" : 8204 == e ? "b" : "L";
	          }function t(e, t, n) {
	            this.level = e, this.from = t, this.to = n;
	          }var n = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
	              r = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm",
	              i = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
	              o = /[stwN]/,
	              a = /[LRr]/,
	              l = /[Lb1n]/,
	              s = /[1n]/,
	              c = "L";return function (n) {
	            if (!i.test(n)) return !1;for (var r, u = n.length, f = [], h = 0; u > h; ++h) {
	              f.push(r = e(n.charCodeAt(h)));
	            }for (var h = 0, d = c; u > h; ++h) {
	              var r = f[h];"m" == r ? f[h] = d : d = r;
	            }for (var h = 0, p = c; u > h; ++h) {
	              var r = f[h];"1" == r && "r" == p ? f[h] = "n" : a.test(r) && (p = r, "r" == r && (f[h] = "R"));
	            }for (var h = 1, d = f[0]; u - 1 > h; ++h) {
	              var r = f[h];"+" == r && "1" == d && "1" == f[h + 1] ? f[h] = "1" : "," != r || d != f[h + 1] || "1" != d && "n" != d || (f[h] = d), d = r;
	            }for (var h = 0; u > h; ++h) {
	              var r = f[h];if ("," == r) f[h] = "N";else if ("%" == r) {
	                for (var m = h + 1; u > m && "%" == f[m]; ++m) {}for (var g = h && "!" == f[h - 1] || u > m && "1" == f[m] ? "1" : "N", v = h; m > v; ++v) {
	                  f[v] = g;
	                }h = m - 1;
	              }
	            }for (var h = 0, p = c; u > h; ++h) {
	              var r = f[h];"L" == p && "1" == r ? f[h] = "L" : a.test(r) && (p = r);
	            }for (var h = 0; u > h; ++h) {
	              if (o.test(f[h])) {
	                for (var m = h + 1; u > m && o.test(f[m]); ++m) {}for (var y = "L" == (h ? f[h - 1] : c), x = "L" == (u > m ? f[m] : c), g = y || x ? "L" : "R", v = h; m > v; ++v) {
	                  f[v] = g;
	                }h = m - 1;
	              }
	            }for (var b, w = [], h = 0; u > h;) {
	              if (l.test(f[h])) {
	                var k = h;for (++h; u > h && l.test(f[h]); ++h) {}w.push(new t(0, k, h));
	              } else {
	                var S = h,
	                    C = w.length;for (++h; u > h && "L" != f[h]; ++h) {}for (var v = S; h > v;) {
	                  if (s.test(f[v])) {
	                    v > S && w.splice(C, 0, new t(1, S, v));var L = v;for (++v; h > v && s.test(f[v]); ++v) {}w.splice(C, 0, new t(2, L, v)), S = v;
	                  } else ++v;
	                }h > S && w.splice(C, 0, new t(1, S, h));
	              }
	            }return 1 == w[0].level && (b = n.match(/^\s+/)) && (w[0].from = b[0].length, w.unshift(new t(0, 0, b[0].length))), 1 == Ii(w).level && (b = n.match(/\s+$/)) && (Ii(w).to -= b[0].length, w.push(new t(0, u - b[0].length, u))), 2 == w[0].level && w.unshift(new t(1, w[0].to, w[0].to)), w[0].level != Ii(w).level && w.push(new t(w[0].level, u, u)), w;
	          };
	        }();return e.version = "5.15.2", e;
	      });
	    }, {}], 11: [function (t, n, r) {
	      !function (i) {
	        "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? i(t("../../lib/codemirror"), t("../markdown/markdown"), t("../../addon/mode/overlay")) : "function" == typeof e && e.amd ? e(["../../lib/codemirror", "../markdown/markdown", "../../addon/mode/overlay"], i) : i(CodeMirror);
	      }(function (e) {
	        "use strict";
	        var t = /^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i;e.defineMode("gfm", function (n, r) {
	          function i(e) {
	            return e.code = !1, null;
	          }var o = 0,
	              a = { startState: function startState() {
	              return { code: !1, codeBlock: !1, ateSpace: !1 };
	            }, copyState: function copyState(e) {
	              return { code: e.code, codeBlock: e.codeBlock, ateSpace: e.ateSpace };
	            }, token: function token(e, n) {
	              if (n.combineTokens = null, n.codeBlock) return e.match(/^```+/) ? (n.codeBlock = !1, null) : (e.skipToEnd(), null);if (e.sol() && (n.code = !1), e.sol() && e.match(/^```+/)) return e.skipToEnd(), n.codeBlock = !0, null;if ("`" === e.peek()) {
	                e.next();var i = e.pos;e.eatWhile("`");var a = 1 + e.pos - i;return n.code ? a === o && (n.code = !1) : (o = a, n.code = !0), null;
	              }if (n.code) return e.next(), null;if (e.eatSpace()) return n.ateSpace = !0, null;if ((e.sol() || n.ateSpace) && (n.ateSpace = !1, r.gitHubSpice !== !1)) {
	                if (e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?:[a-f0-9]{7,40}\b)/)) return n.combineTokens = !0, "link";if (e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/)) return n.combineTokens = !0, "link";
	              }return e.match(t) && "](" != e.string.slice(e.start - 2, e.start) && (0 == e.start || /\W/.test(e.string.charAt(e.start - 1))) ? (n.combineTokens = !0, "link") : (e.next(), null);
	            }, blankLine: i },
	              l = { underscoresBreakWords: !1, taskLists: !0, fencedCodeBlocks: "```", strikethrough: !0 };for (var s in r) {
	            l[s] = r[s];
	          }return l.name = "markdown", e.overlayMode(e.getMode(n, l), a);
	        }, "markdown"), e.defineMIME("text/x-gfm", "gfm");
	      });
	    }, { "../../addon/mode/overlay": 8, "../../lib/codemirror": 10, "../markdown/markdown": 12 }], 12: [function (t, n, r) {
	      !function (i) {
	        "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? i(t("../../lib/codemirror"), t("../xml/xml"), t("../meta")) : "function" == typeof e && e.amd ? e(["../../lib/codemirror", "../xml/xml", "../meta"], i) : i(CodeMirror);
	      }(function (e) {
	        "use strict";
	        e.defineMode("markdown", function (t, n) {
	          function r(n) {
	            if (e.findModeByName) {
	              var r = e.findModeByName(n);r && (n = r.mime || r.mimes[0]);
	            }var i = e.getMode(t, n);return "null" == i.name ? null : i;
	          }function i(e, t, n) {
	            return t.f = t.inline = n, n(e, t);
	          }function o(e, t, n) {
	            return t.f = t.block = n, n(e, t);
	          }function a(e) {
	            return !e || !/\S/.test(e.string);
	          }function l(e) {
	            return e.linkTitle = !1, e.em = !1, e.strong = !1, e.strikethrough = !1, e.quote = 0, e.indentedCode = !1, k && e.f == c && (e.f = p, e.block = s), e.trailingSpace = 0, e.trailingSpaceNewLine = !1, e.prevLine = e.thisLine, e.thisLine = null, null;
	          }function s(t, o) {
	            var l = t.sol(),
	                s = o.list !== !1,
	                c = o.indentedCode;o.indentedCode = !1, s && (o.indentationDiff >= 0 ? (o.indentationDiff < 4 && (o.indentation -= o.indentationDiff), o.list = null) : o.indentation > 0 ? o.list = null : o.list = !1);var f = null;if (o.indentationDiff >= 4) return t.skipToEnd(), c || a(o.prevLine) ? (o.indentation -= 4, o.indentedCode = !0, S.code) : null;if (t.eatSpace()) return null;if ((f = t.match(A)) && f[1].length <= 6) return o.header = f[1].length, n.highlightFormatting && (o.formatting = "header"), o.f = o.inline, h(o);if (!(a(o.prevLine) || o.quote || s || c) && (f = t.match(E))) return o.header = "=" == f[0].charAt(0) ? 1 : 2, n.highlightFormatting && (o.formatting = "header"), o.f = o.inline, h(o);if (t.eat(">")) return o.quote = l ? 1 : o.quote + 1, n.highlightFormatting && (o.formatting = "quote"), t.eatSpace(), h(o);if ("[" === t.peek()) return i(t, o, y);if (t.match(L, !0)) return o.hr = !0, S.hr;if ((a(o.prevLine) || s) && (t.match(T, !1) || t.match(M, !1))) {
	              var d = null;for (t.match(T, !0) ? d = "ul" : (t.match(M, !0), d = "ol"), o.indentation = t.column() + t.current().length, o.list = !0; o.listStack && t.column() < o.listStack[o.listStack.length - 1];) {
	                o.listStack.pop();
	              }return o.listStack.push(o.indentation), n.taskLists && t.match(N, !1) && (o.taskList = !0), o.f = o.inline, n.highlightFormatting && (o.formatting = ["list", "list-" + d]), h(o);
	            }return n.fencedCodeBlocks && (f = t.match(I, !0)) ? (o.fencedChars = f[1], o.localMode = r(f[2]), o.localMode && (o.localState = e.startState(o.localMode)), o.f = o.block = u, n.highlightFormatting && (o.formatting = "code-block"), o.code = -1, h(o)) : i(t, o, o.inline);
	          }function c(t, n) {
	            var r = w.token(t, n.htmlState);if (!k) {
	              var i = e.innerMode(w, n.htmlState);("xml" == i.mode.name && null === i.state.tagStart && !i.state.context && i.state.tokenize.isInText || n.md_inside && t.current().indexOf(">") > -1) && (n.f = p, n.block = s, n.htmlState = null);
	            }return r;
	          }function u(e, t) {
	            return t.fencedChars && e.match(t.fencedChars, !1) ? (t.localMode = t.localState = null, t.f = t.block = f, null) : t.localMode ? t.localMode.token(e, t.localState) : (e.skipToEnd(), S.code);
	          }function f(e, t) {
	            e.match(t.fencedChars), t.block = s, t.f = p, t.fencedChars = null, n.highlightFormatting && (t.formatting = "code-block"), t.code = 1;var r = h(t);return t.code = 0, r;
	          }function h(e) {
	            var t = [];if (e.formatting) {
	              t.push(S.formatting), "string" == typeof e.formatting && (e.formatting = [e.formatting]);for (var r = 0; r < e.formatting.length; r++) {
	                t.push(S.formatting + "-" + e.formatting[r]), "header" === e.formatting[r] && t.push(S.formatting + "-" + e.formatting[r] + "-" + e.header), "quote" === e.formatting[r] && (!n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote ? t.push(S.formatting + "-" + e.formatting[r] + "-" + e.quote) : t.push("error"));
	              }
	            }if (e.taskOpen) return t.push("meta"), t.length ? t.join(" ") : null;if (e.taskClosed) return t.push("property"), t.length ? t.join(" ") : null;if (e.linkHref ? t.push(S.linkHref, "url") : (e.strong && t.push(S.strong), e.em && t.push(S.em), e.strikethrough && t.push(S.strikethrough), e.linkText && t.push(S.linkText), e.code && t.push(S.code)), e.header && t.push(S.header, S.header + "-" + e.header), e.quote && (t.push(S.quote), !n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote ? t.push(S.quote + "-" + e.quote) : t.push(S.quote + "-" + n.maxBlockquoteDepth)), e.list !== !1) {
	              var i = (e.listStack.length - 1) % 3;i ? 1 === i ? t.push(S.list2) : t.push(S.list3) : t.push(S.list1);
	            }return e.trailingSpaceNewLine ? t.push("trailing-space-new-line") : e.trailingSpace && t.push("trailing-space-" + (e.trailingSpace % 2 ? "a" : "b")), t.length ? t.join(" ") : null;
	          }function d(e, t) {
	            return e.match(O, !0) ? h(t) : void 0;
	          }function p(t, r) {
	            var i = r.text(t, r);if ("undefined" != typeof i) return i;if (r.list) return r.list = null, h(r);if (r.taskList) {
	              var a = "x" !== t.match(N, !0)[1];return a ? r.taskOpen = !0 : r.taskClosed = !0, n.highlightFormatting && (r.formatting = "task"), r.taskList = !1, h(r);
	            }if (r.taskOpen = !1, r.taskClosed = !1, r.header && t.match(/^#+$/, !0)) return n.highlightFormatting && (r.formatting = "header"), h(r);var l = t.sol(),
	                s = t.next();if (r.linkTitle) {
	              r.linkTitle = !1;var u = s;"(" === s && (u = ")"), u = (u + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");var f = "^\\s*(?:[^" + u + "\\\\]+|\\\\\\\\|\\\\.)" + u;if (t.match(new RegExp(f), !0)) return S.linkHref;
	            }if ("`" === s) {
	              var d = r.formatting;n.highlightFormatting && (r.formatting = "code"), t.eatWhile("`");var p = t.current().length;if (0 == r.code) return r.code = p, h(r);if (p == r.code) {
	                var v = h(r);return r.code = 0, v;
	              }return r.formatting = d, h(r);
	            }if (r.code) return h(r);if ("\\" === s && (t.next(), n.highlightFormatting)) {
	              var y = h(r),
	                  x = S.formatting + "-escape";return y ? y + " " + x : x;
	            }if ("!" === s && t.match(/\[[^\]]*\] ?(?:\(|\[)/, !1)) return t.match(/\[[^\]]*\]/), r.inline = r.f = g, S.image;if ("[" === s && t.match(/[^\]]*\](\(.*\)| ?\[.*?\])/, !1)) return r.linkText = !0, n.highlightFormatting && (r.formatting = "link"), h(r);if ("]" === s && r.linkText && t.match(/\(.*?\)| ?\[.*?\]/, !1)) {
	              n.highlightFormatting && (r.formatting = "link");var y = h(r);return r.linkText = !1, r.inline = r.f = g, y;
	            }if ("<" === s && t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1)) {
	              r.f = r.inline = m, n.highlightFormatting && (r.formatting = "link");var y = h(r);return y ? y += " " : y = "", y + S.linkInline;
	            }if ("<" === s && t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1)) {
	              r.f = r.inline = m, n.highlightFormatting && (r.formatting = "link");var y = h(r);return y ? y += " " : y = "", y + S.linkEmail;
	            }if ("<" === s && t.match(/^(!--|\w)/, !1)) {
	              var b = t.string.indexOf(">", t.pos);if (-1 != b) {
	                var k = t.string.substring(t.start, b);/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(k) && (r.md_inside = !0);
	              }return t.backUp(1), r.htmlState = e.startState(w), o(t, r, c);
	            }if ("<" === s && t.match(/^\/\w*?>/)) return r.md_inside = !1, "tag";var C = !1;if (!n.underscoresBreakWords && "_" === s && "_" !== t.peek() && t.match(/(\w)/, !1)) {
	              var L = t.pos - 2;if (L >= 0) {
	                var T = t.string.charAt(L);"_" !== T && T.match(/(\w)/, !1) && (C = !0);
	              }
	            }if ("*" === s || "_" === s && !C) {
	              if (l && " " === t.peek()) ;else {
	                if (r.strong === s && t.eat(s)) {
	                  n.highlightFormatting && (r.formatting = "strong");var v = h(r);return r.strong = !1, v;
	                }if (!r.strong && t.eat(s)) return r.strong = s, n.highlightFormatting && (r.formatting = "strong"), h(r);if (r.em === s) {
	                  n.highlightFormatting && (r.formatting = "em");var v = h(r);return r.em = !1, v;
	                }if (!r.em) return r.em = s, n.highlightFormatting && (r.formatting = "em"), h(r);
	              }
	            } else if (" " === s && (t.eat("*") || t.eat("_"))) {
	              if (" " === t.peek()) return h(r);t.backUp(1);
	            }if (n.strikethrough) if ("~" === s && t.eatWhile(s)) {
	              if (r.strikethrough) {
	                n.highlightFormatting && (r.formatting = "strikethrough");var v = h(r);return r.strikethrough = !1, v;
	              }if (t.match(/^[^\s]/, !1)) return r.strikethrough = !0, n.highlightFormatting && (r.formatting = "strikethrough"), h(r);
	            } else if (" " === s && t.match(/^~~/, !0)) {
	              if (" " === t.peek()) return h(r);t.backUp(2);
	            }return " " === s && (t.match(/ +$/, !1) ? r.trailingSpace++ : r.trailingSpace && (r.trailingSpaceNewLine = !0)), h(r);
	          }function m(e, t) {
	            var r = e.next();if (">" === r) {
	              t.f = t.inline = p, n.highlightFormatting && (t.formatting = "link");var i = h(t);return i ? i += " " : i = "", i + S.linkInline;
	            }return e.match(/^[^>]+/, !0), S.linkInline;
	          }function g(e, t) {
	            if (e.eatSpace()) return null;var r = e.next();return "(" === r || "[" === r ? (t.f = t.inline = v("(" === r ? ")" : "]", 0), n.highlightFormatting && (t.formatting = "link-string"), t.linkHref = !0, h(t)) : "error";
	          }function v(e) {
	            return function (t, r) {
	              var i = t.next();if (i === e) {
	                r.f = r.inline = p, n.highlightFormatting && (r.formatting = "link-string");var o = h(r);return r.linkHref = !1, o;
	              }return t.match(P[e]), r.linkHref = !0, h(r);
	            };
	          }function y(e, t) {
	            return e.match(/^([^\]\\]|\\.)*\]:/, !1) ? (t.f = x, e.next(), n.highlightFormatting && (t.formatting = "link"), t.linkText = !0, h(t)) : i(e, t, p);
	          }function x(e, t) {
	            if (e.match(/^\]:/, !0)) {
	              t.f = t.inline = b, n.highlightFormatting && (t.formatting = "link");var r = h(t);return t.linkText = !1, r;
	            }return e.match(/^([^\]\\]|\\.)+/, !0), S.linkText;
	          }function b(e, t) {
	            return e.eatSpace() ? null : (e.match(/^[^\s]+/, !0), void 0 === e.peek() ? t.linkTitle = !0 : e.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, !0), t.f = t.inline = p, S.linkHref + " url");
	          }var w = e.getMode(t, "text/html"),
	              k = "null" == w.name;void 0 === n.highlightFormatting && (n.highlightFormatting = !1), void 0 === n.maxBlockquoteDepth && (n.maxBlockquoteDepth = 0), void 0 === n.underscoresBreakWords && (n.underscoresBreakWords = !0), void 0 === n.taskLists && (n.taskLists = !1), void 0 === n.strikethrough && (n.strikethrough = !1), void 0 === n.tokenTypeOverrides && (n.tokenTypeOverrides = {});var S = { header: "header", code: "comment", quote: "quote", list1: "variable-2", list2: "variable-3", list3: "keyword", hr: "hr", image: "tag", formatting: "formatting", linkInline: "link", linkEmail: "link", linkText: "link", linkHref: "string", em: "em", strong: "strong", strikethrough: "strikethrough" };for (var C in S) {
	            S.hasOwnProperty(C) && n.tokenTypeOverrides[C] && (S[C] = n.tokenTypeOverrides[C]);
	          }var L = /^([*\-_])(?:\s*\1){2,}\s*$/,
	              T = /^[*\-+]\s+/,
	              M = /^[0-9]+([.)])\s+/,
	              N = /^\[(x| )\](?=\s)/,
	              A = n.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/,
	              E = /^ *(?:\={1,}|-{1,})\s*$/,
	              O = /^[^#!\[\]*_\\<>` "'(~]+/,
	              I = new RegExp("^(" + (n.fencedCodeBlocks === !0 ? "~~~+|```+" : n.fencedCodeBlocks) + ")[ \\t]*([\\w+#-]*)"),
	              P = { ")": /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/, "]": /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\\]]|\\.)*\])*?(?=\])/ },
	              R = { startState: function startState() {
	              return { f: s, prevLine: null, thisLine: null, block: s, htmlState: null, indentation: 0, inline: p, text: d, formatting: !1, linkText: !1, linkHref: !1, linkTitle: !1, code: 0, em: !1, strong: !1, header: 0, hr: !1, taskList: !1, list: !1, listStack: [], quote: 0, trailingSpace: 0, trailingSpaceNewLine: !1, strikethrough: !1, fencedChars: null };
	            }, copyState: function copyState(t) {
	              return { f: t.f, prevLine: t.prevLine, thisLine: t.thisLine, block: t.block, htmlState: t.htmlState && e.copyState(w, t.htmlState), indentation: t.indentation, localMode: t.localMode, localState: t.localMode ? e.copyState(t.localMode, t.localState) : null, inline: t.inline, text: t.text, formatting: !1, linkTitle: t.linkTitle, code: t.code, em: t.em, strong: t.strong, strikethrough: t.strikethrough, header: t.header, hr: t.hr, taskList: t.taskList, list: t.list, listStack: t.listStack.slice(0), quote: t.quote, indentedCode: t.indentedCode, trailingSpace: t.trailingSpace, trailingSpaceNewLine: t.trailingSpaceNewLine, md_inside: t.md_inside, fencedChars: t.fencedChars };
	            }, token: function token(e, t) {
	              if (t.formatting = !1, e != t.thisLine) {
	                var n = t.header || t.hr;if (t.header = 0, t.hr = !1, e.match(/^\s*$/, !0) || n) {
	                  if (l(t), !n) return null;t.prevLine = null;
	                }t.prevLine = t.thisLine, t.thisLine = e, t.taskList = !1, t.trailingSpace = 0, t.trailingSpaceNewLine = !1, t.f = t.block;var r = e.match(/^\s*/, !0)[0].replace(/\t/g, "    ").length;if (t.indentationDiff = Math.min(r - t.indentation, 4), t.indentation = t.indentation + t.indentationDiff, r > 0) return null;
	              }return t.f(e, t);
	            }, innerMode: function innerMode(e) {
	              return e.block == c ? { state: e.htmlState, mode: w } : e.localState ? { state: e.localState, mode: e.localMode } : { state: e, mode: R };
	            }, blankLine: l, getType: h, fold: "markdown" };return R;
	        }, "xml"), e.defineMIME("text/x-markdown", "markdown");
	      });
	    }, { "../../lib/codemirror": 10, "../meta": 13, "../xml/xml": 14 }], 13: [function (t, n, r) {
	      !function (i) {
	        "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? i(t("../lib/codemirror")) : "function" == typeof e && e.amd ? e(["../lib/codemirror"], i) : i(CodeMirror);
	      }(function (e) {
	        "use strict";
	        e.modeInfo = [{ name: "APL", mime: "text/apl", mode: "apl", ext: ["dyalog", "apl"] }, { name: "PGP", mimes: ["application/pgp", "application/pgp-keys", "application/pgp-signature"], mode: "asciiarmor", ext: ["pgp"] }, { name: "ASN.1", mime: "text/x-ttcn-asn", mode: "asn.1", ext: ["asn", "asn1"] }, { name: "Asterisk", mime: "text/x-asterisk", mode: "asterisk", file: /^extensions\.conf$/i }, { name: "Brainfuck", mime: "text/x-brainfuck", mode: "brainfuck", ext: ["b", "bf"] }, { name: "C", mime: "text/x-csrc", mode: "clike", ext: ["c", "h"] }, { name: "C++", mime: "text/x-c++src", mode: "clike", ext: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"], alias: ["cpp"] }, { name: "Cobol", mime: "text/x-cobol", mode: "cobol", ext: ["cob", "cpy"] }, { name: "C#", mime: "text/x-csharp", mode: "clike", ext: ["cs"], alias: ["csharp"] }, { name: "Clojure", mime: "text/x-clojure", mode: "clojure", ext: ["clj", "cljc", "cljx"] }, { name: "ClojureScript", mime: "text/x-clojurescript", mode: "clojure", ext: ["cljs"] }, { name: "Closure Stylesheets (GSS)", mime: "text/x-gss", mode: "css", ext: ["gss"] }, { name: "CMake", mime: "text/x-cmake", mode: "cmake", ext: ["cmake", "cmake.in"], file: /^CMakeLists.txt$/ }, { name: "CoffeeScript", mime: "text/x-coffeescript", mode: "coffeescript", ext: ["coffee"], alias: ["coffee", "coffee-script"] }, { name: "Common Lisp", mime: "text/x-common-lisp", mode: "commonlisp", ext: ["cl", "lisp", "el"], alias: ["lisp"] }, { name: "Cypher", mime: "application/x-cypher-query", mode: "cypher", ext: ["cyp", "cypher"] }, { name: "Cython", mime: "text/x-cython", mode: "python", ext: ["pyx", "pxd", "pxi"] }, { name: "Crystal", mime: "text/x-crystal", mode: "crystal", ext: ["cr"] }, { name: "CSS", mime: "text/css", mode: "css", ext: ["css"] }, { name: "CQL", mime: "text/x-cassandra", mode: "sql", ext: ["cql"] }, { name: "D", mime: "text/x-d", mode: "d", ext: ["d"] }, { name: "Dart", mimes: ["application/dart", "text/x-dart"], mode: "dart", ext: ["dart"] }, { name: "diff", mime: "text/x-diff", mode: "diff", ext: ["diff", "patch"] }, { name: "Django", mime: "text/x-django", mode: "django" }, { name: "Dockerfile", mime: "text/x-dockerfile", mode: "dockerfile", file: /^Dockerfile$/ }, { name: "DTD", mime: "application/xml-dtd", mode: "dtd", ext: ["dtd"] }, { name: "Dylan", mime: "text/x-dylan", mode: "dylan", ext: ["dylan", "dyl", "intr"] }, { name: "EBNF", mime: "text/x-ebnf", mode: "ebnf" }, { name: "ECL", mime: "text/x-ecl", mode: "ecl", ext: ["ecl"] }, { name: "edn", mime: "application/edn", mode: "clojure", ext: ["edn"] }, { name: "Eiffel", mime: "text/x-eiffel", mode: "eiffel", ext: ["e"] }, { name: "Elm", mime: "text/x-elm", mode: "elm", ext: ["elm"] }, { name: "Embedded Javascript", mime: "application/x-ejs", mode: "htmlembedded", ext: ["ejs"] }, { name: "Embedded Ruby", mime: "application/x-erb", mode: "htmlembedded", ext: ["erb"] }, { name: "Erlang", mime: "text/x-erlang", mode: "erlang", ext: ["erl"] }, { name: "Factor", mime: "text/x-factor", mode: "factor", ext: ["factor"] }, { name: "FCL", mime: "text/x-fcl", mode: "fcl" }, { name: "Forth", mime: "text/x-forth", mode: "forth", ext: ["forth", "fth", "4th"] }, { name: "Fortran", mime: "text/x-fortran", mode: "fortran", ext: ["f", "for", "f77", "f90"] }, { name: "F#", mime: "text/x-fsharp", mode: "mllike", ext: ["fs"], alias: ["fsharp"] }, { name: "Gas", mime: "text/x-gas", mode: "gas", ext: ["s"] }, { name: "Gherkin", mime: "text/x-feature", mode: "gherkin", ext: ["feature"] }, { name: "GitHub Flavored Markdown", mime: "text/x-gfm", mode: "gfm", file: /^(readme|contributing|history).md$/i }, { name: "Go", mime: "text/x-go", mode: "go", ext: ["go"] }, { name: "Groovy", mime: "text/x-groovy", mode: "groovy", ext: ["groovy", "gradle"] }, { name: "HAML", mime: "text/x-haml", mode: "haml", ext: ["haml"] }, { name: "Haskell", mime: "text/x-haskell", mode: "haskell", ext: ["hs"] }, { name: "Haskell (Literate)", mime: "text/x-literate-haskell", mode: "haskell-literate", ext: ["lhs"] }, { name: "Haxe", mime: "text/x-haxe", mode: "haxe", ext: ["hx"] }, { name: "HXML", mime: "text/x-hxml", mode: "haxe", ext: ["hxml"] }, { name: "ASP.NET", mime: "application/x-aspx", mode: "htmlembedded", ext: ["aspx"], alias: ["asp", "aspx"] }, { name: "HTML", mime: "text/html", mode: "htmlmixed", ext: ["html", "htm"], alias: ["xhtml"] }, { name: "HTTP", mime: "message/http", mode: "http" }, { name: "IDL", mime: "text/x-idl", mode: "idl", ext: ["pro"] }, { name: "Jade", mime: "text/x-jade", mode: "jade", ext: ["jade"] }, { name: "Java", mime: "text/x-java", mode: "clike", ext: ["java"] }, { name: "Java Server Pages", mime: "application/x-jsp", mode: "htmlembedded", ext: ["jsp"], alias: ["jsp"] }, { name: "JavaScript", mimes: ["text/javascript", "text/ecmascript", "application/javascript", "application/x-javascript", "application/ecmascript"], mode: "javascript", ext: ["js"], alias: ["ecmascript", "js", "node"] }, { name: "JSON", mimes: ["application/json", "application/x-json"], mode: "javascript", ext: ["json", "map"], alias: ["json5"] }, { name: "JSON-LD", mime: "application/ld+json", mode: "javascript", ext: ["jsonld"], alias: ["jsonld"] }, { name: "JSX", mime: "text/jsx", mode: "jsx", ext: ["jsx"] }, { name: "Jinja2", mime: "null", mode: "jinja2" }, { name: "Julia", mime: "text/x-julia", mode: "julia", ext: ["jl"] }, { name: "Kotlin", mime: "text/x-kotlin", mode: "clike", ext: ["kt"] }, { name: "LESS", mime: "text/x-less", mode: "css", ext: ["less"] }, { name: "LiveScript", mime: "text/x-livescript", mode: "livescript", ext: ["ls"], alias: ["ls"] }, { name: "Lua", mime: "text/x-lua", mode: "lua", ext: ["lua"] }, { name: "Markdown", mime: "text/x-markdown", mode: "markdown", ext: ["markdown", "md", "mkd"] }, { name: "mIRC", mime: "text/mirc", mode: "mirc" }, { name: "MariaDB SQL", mime: "text/x-mariadb", mode: "sql" }, { name: "Mathematica", mime: "text/x-mathematica", mode: "mathematica", ext: ["m", "nb"] }, { name: "Modelica", mime: "text/x-modelica", mode: "modelica", ext: ["mo"] }, { name: "MUMPS", mime: "text/x-mumps", mode: "mumps", ext: ["mps"] }, { name: "MS SQL", mime: "text/x-mssql", mode: "sql" }, { name: "mbox", mime: "application/mbox", mode: "mbox", ext: ["mbox"] }, { name: "MySQL", mime: "text/x-mysql", mode: "sql" }, { name: "Nginx", mime: "text/x-nginx-conf", mode: "nginx", file: /nginx.*\.conf$/i }, { name: "NSIS", mime: "text/x-nsis", mode: "nsis", ext: ["nsh", "nsi"] }, { name: "NTriples", mime: "text/n-triples", mode: "ntriples", ext: ["nt"] }, { name: "Objective C", mime: "text/x-objectivec", mode: "clike", ext: ["m", "mm"], alias: ["objective-c", "objc"] }, { name: "OCaml", mime: "text/x-ocaml", mode: "mllike", ext: ["ml", "mli", "mll", "mly"] }, { name: "Octave", mime: "text/x-octave", mode: "octave", ext: ["m"] }, { name: "Oz", mime: "text/x-oz", mode: "oz", ext: ["oz"] }, { name: "Pascal", mime: "text/x-pascal", mode: "pascal", ext: ["p", "pas"] }, { name: "PEG.js", mime: "null", mode: "pegjs", ext: ["jsonld"] }, { name: "Perl", mime: "text/x-perl", mode: "perl", ext: ["pl", "pm"] }, { name: "PHP", mime: "application/x-httpd-php", mode: "php", ext: ["php", "php3", "php4", "php5", "phtml"] }, { name: "Pig", mime: "text/x-pig", mode: "pig", ext: ["pig"] }, { name: "Plain Text", mime: "text/plain", mode: "null", ext: ["txt", "text", "conf", "def", "list", "log"] }, { name: "PLSQL", mime: "text/x-plsql", mode: "sql", ext: ["pls"] }, { name: "PowerShell", mime: "application/x-powershell", mode: "powershell", ext: ["ps1", "psd1", "psm1"] }, { name: "Properties files", mime: "text/x-properties", mode: "properties", ext: ["properties", "ini", "in"], alias: ["ini", "properties"] }, { name: "ProtoBuf", mime: "text/x-protobuf", mode: "protobuf", ext: ["proto"] }, { name: "Python", mime: "text/x-python", mode: "python", ext: ["BUILD", "bzl", "py", "pyw"], file: /^(BUCK|BUILD)$/ }, { name: "Puppet", mime: "text/x-puppet", mode: "puppet", ext: ["pp"] }, { name: "Q", mime: "text/x-q", mode: "q", ext: ["q"] }, { name: "R", mime: "text/x-rsrc", mode: "r", ext: ["r"], alias: ["rscript"] }, { name: "reStructuredText", mime: "text/x-rst", mode: "rst", ext: ["rst"], alias: ["rst"] }, { name: "RPM Changes", mime: "text/x-rpm-changes", mode: "rpm" }, { name: "RPM Spec", mime: "text/x-rpm-spec", mode: "rpm", ext: ["spec"] }, { name: "Ruby", mime: "text/x-ruby", mode: "ruby", ext: ["rb"], alias: ["jruby", "macruby", "rake", "rb", "rbx"] }, { name: "Rust", mime: "text/x-rustsrc", mode: "rust", ext: ["rs"] }, { name: "SAS", mime: "text/x-sas", mode: "sas", ext: ["sas"] }, { name: "Sass", mime: "text/x-sass", mode: "sass", ext: ["sass"] }, { name: "Scala", mime: "text/x-scala", mode: "clike", ext: ["scala"] }, { name: "Scheme", mime: "text/x-scheme", mode: "scheme", ext: ["scm", "ss"] }, { name: "SCSS", mime: "text/x-scss", mode: "css", ext: ["scss"] }, { name: "Shell", mime: "text/x-sh", mode: "shell", ext: ["sh", "ksh", "bash"], alias: ["bash", "sh", "zsh"], file: /^PKGBUILD$/ }, { name: "Sieve", mime: "application/sieve", mode: "sieve", ext: ["siv", "sieve"] }, { name: "Slim", mimes: ["text/x-slim", "application/x-slim"], mode: "slim", ext: ["slim"] }, { name: "Smalltalk", mime: "text/x-stsrc", mode: "smalltalk", ext: ["st"] }, { name: "Smarty", mime: "text/x-smarty", mode: "smarty", ext: ["tpl"] }, { name: "Solr", mime: "text/x-solr", mode: "solr" }, { name: "Soy", mime: "text/x-soy", mode: "soy", ext: ["soy"], alias: ["closure template"] }, { name: "SPARQL", mime: "application/sparql-query", mode: "sparql", ext: ["rq", "sparql"], alias: ["sparul"] }, { name: "Spreadsheet", mime: "text/x-spreadsheet", mode: "spreadsheet", alias: ["excel", "formula"] }, { name: "SQL", mime: "text/x-sql", mode: "sql", ext: ["sql"] }, { name: "Squirrel", mime: "text/x-squirrel", mode: "clike", ext: ["nut"] }, { name: "Swift", mime: "text/x-swift", mode: "swift", ext: ["swift"] }, { name: "sTeX", mime: "text/x-stex", mode: "stex" }, { name: "LaTeX", mime: "text/x-latex", mode: "stex", ext: ["text", "ltx"], alias: ["tex"] }, { name: "SystemVerilog", mime: "text/x-systemverilog", mode: "verilog", ext: ["v"] }, { name: "Tcl", mime: "text/x-tcl", mode: "tcl", ext: ["tcl"] }, { name: "Textile", mime: "text/x-textile", mode: "textile", ext: ["textile"] }, { name: "TiddlyWiki ", mime: "text/x-tiddlywiki", mode: "tiddlywiki" }, { name: "Tiki wiki", mime: "text/tiki", mode: "tiki" }, { name: "TOML", mime: "text/x-toml", mode: "toml", ext: ["toml"] }, { name: "Tornado", mime: "text/x-tornado", mode: "tornado" }, { name: "troff", mime: "text/troff", mode: "troff", ext: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] }, { name: "TTCN", mime: "text/x-ttcn", mode: "ttcn", ext: ["ttcn", "ttcn3", "ttcnpp"] }, { name: "TTCN_CFG", mime: "text/x-ttcn-cfg", mode: "ttcn-cfg", ext: ["cfg"] }, { name: "Turtle", mime: "text/turtle", mode: "turtle", ext: ["ttl"] }, { name: "TypeScript", mime: "application/typescript", mode: "javascript", ext: ["ts"], alias: ["ts"] }, { name: "Twig", mime: "text/x-twig", mode: "twig" }, { name: "Web IDL", mime: "text/x-webidl", mode: "webidl", ext: ["webidl"] }, { name: "VB.NET", mime: "text/x-vb", mode: "vb", ext: ["vb"] }, { name: "VBScript", mime: "text/vbscript", mode: "vbscript", ext: ["vbs"] }, { name: "Velocity", mime: "text/velocity", mode: "velocity", ext: ["vtl"] }, { name: "Verilog", mime: "text/x-verilog", mode: "verilog", ext: ["v"] }, { name: "VHDL", mime: "text/x-vhdl", mode: "vhdl", ext: ["vhd", "vhdl"] }, { name: "XML", mimes: ["application/xml", "text/xml"], mode: "xml", ext: ["xml", "xsl", "xsd"], alias: ["rss", "wsdl", "xsd"] }, { name: "XQuery", mime: "application/xquery", mode: "xquery", ext: ["xy", "xquery"] }, { name: "Yacas", mime: "text/x-yacas", mode: "yacas", ext: ["ys"] }, { name: "YAML", mime: "text/x-yaml", mode: "yaml", ext: ["yaml", "yml"], alias: ["yml"] }, { name: "Z80", mime: "text/x-z80", mode: "z80", ext: ["z80"] }, { name: "mscgen", mime: "text/x-mscgen", mode: "mscgen", ext: ["mscgen", "mscin", "msc"] }, { name: "xu", mime: "text/x-xu", mode: "mscgen", ext: ["xu"] }, { name: "msgenny", mime: "text/x-msgenny", mode: "mscgen", ext: ["msgenny"] }];for (var t = 0; t < e.modeInfo.length; t++) {
	          var n = e.modeInfo[t];n.mimes && (n.mime = n.mimes[0]);
	        }e.findModeByMIME = function (t) {
	          t = t.toLowerCase();for (var n = 0; n < e.modeInfo.length; n++) {
	            var r = e.modeInfo[n];if (r.mime == t) return r;if (r.mimes) for (var i = 0; i < r.mimes.length; i++) {
	              if (r.mimes[i] == t) return r;
	            }
	          }
	        }, e.findModeByExtension = function (t) {
	          for (var n = 0; n < e.modeInfo.length; n++) {
	            var r = e.modeInfo[n];if (r.ext) for (var i = 0; i < r.ext.length; i++) {
	              if (r.ext[i] == t) return r;
	            }
	          }
	        }, e.findModeByFileName = function (t) {
	          for (var n = 0; n < e.modeInfo.length; n++) {
	            var r = e.modeInfo[n];if (r.file && r.file.test(t)) return r;
	          }var i = t.lastIndexOf("."),
	              o = i > -1 && t.substring(i + 1, t.length);return o ? e.findModeByExtension(o) : void 0;
	        }, e.findModeByName = function (t) {
	          t = t.toLowerCase();for (var n = 0; n < e.modeInfo.length; n++) {
	            var r = e.modeInfo[n];if (r.name.toLowerCase() == t) return r;if (r.alias) for (var i = 0; i < r.alias.length; i++) {
	              if (r.alias[i].toLowerCase() == t) return r;
	            }
	          }
	        };
	      });
	    }, { "../lib/codemirror": 10 }], 14: [function (t, n, r) {
	      !function (i) {
	        "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? i(t("../../lib/codemirror")) : "function" == typeof e && e.amd ? e(["../../lib/codemirror"], i) : i(CodeMirror);
	      }(function (e) {
	        "use strict";
	        var t = { autoSelfClosers: { area: !0, base: !0, br: !0, col: !0, command: !0, embed: !0, frame: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0, menuitem: !0 }, implicitlyClosed: { dd: !0, li: !0, optgroup: !0, option: !0, p: !0, rp: !0, rt: !0, tbody: !0, td: !0, tfoot: !0, th: !0, tr: !0 }, contextGrabbers: { dd: { dd: !0, dt: !0 }, dt: { dd: !0, dt: !0 }, li: { li: !0 }, option: { option: !0, optgroup: !0 }, optgroup: { optgroup: !0 }, p: { address: !0, article: !0, aside: !0, blockquote: !0, dir: !0, div: !0, dl: !0, fieldset: !0, footer: !0, form: !0, h1: !0, h2: !0, h3: !0, h4: !0, h5: !0, h6: !0, header: !0, hgroup: !0, hr: !0, menu: !0, nav: !0, ol: !0, p: !0, pre: !0, section: !0, table: !0, ul: !0 }, rp: { rp: !0, rt: !0 }, rt: { rp: !0, rt: !0 }, tbody: { tbody: !0, tfoot: !0 }, td: { td: !0, th: !0 }, tfoot: { tbody: !0 }, th: { td: !0, th: !0 }, thead: { tbody: !0, tfoot: !0 }, tr: { tr: !0 } }, doNotIndent: { pre: !0 }, allowUnquoted: !0, allowMissing: !0, caseFold: !0 },
	            n = { autoSelfClosers: {}, implicitlyClosed: {}, contextGrabbers: {}, doNotIndent: {}, allowUnquoted: !1, allowMissing: !1, caseFold: !1 };e.defineMode("xml", function (r, i) {
	          function o(e, t) {
	            function n(n) {
	              return t.tokenize = n, n(e, t);
	            }var r = e.next();if ("<" == r) return e.eat("!") ? e.eat("[") ? e.match("CDATA[") ? n(s("atom", "]]>")) : null : e.match("--") ? n(s("comment", "-->")) : e.match("DOCTYPE", !0, !0) ? (e.eatWhile(/[\w\._\-]/), n(c(1))) : null : e.eat("?") ? (e.eatWhile(/[\w\._\-]/), t.tokenize = s("meta", "?>"), "meta") : (T = e.eat("/") ? "closeTag" : "openTag", t.tokenize = a, "tag bracket");if ("&" == r) {
	              var i;return i = e.eat("#") ? e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") : e.eatWhile(/[\d]/) && e.eat(";") : e.eatWhile(/[\w\.\-:]/) && e.eat(";"), i ? "atom" : "error";
	            }return e.eatWhile(/[^&<]/), null;
	          }function a(e, t) {
	            var n = e.next();if (">" == n || "/" == n && e.eat(">")) return t.tokenize = o, T = ">" == n ? "endTag" : "selfcloseTag", "tag bracket";if ("=" == n) return T = "equals", null;if ("<" == n) {
	              t.tokenize = o, t.state = d, t.tagName = t.tagStart = null;var r = t.tokenize(e, t);return r ? r + " tag error" : "tag error";
	            }return (/[\'\"]/.test(n) ? (t.tokenize = l(n), t.stringStartCol = e.column(), t.tokenize(e, t)) : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word")
	            );
	          }function l(e) {
	            var t = function t(_t2, n) {
	              for (; !_t2.eol();) {
	                if (_t2.next() == e) {
	                  n.tokenize = a;break;
	                }
	              }return "string";
	            };return t.isInAttribute = !0, t;
	          }function s(e, t) {
	            return function (n, r) {
	              for (; !n.eol();) {
	                if (n.match(t)) {
	                  r.tokenize = o;break;
	                }n.next();
	              }return e;
	            };
	          }function c(e) {
	            return function (t, n) {
	              for (var r; null != (r = t.next());) {
	                if ("<" == r) return n.tokenize = c(e + 1), n.tokenize(t, n);if (">" == r) {
	                  if (1 == e) {
	                    n.tokenize = o;break;
	                  }return n.tokenize = c(e - 1), n.tokenize(t, n);
	                }
	              }return "meta";
	            };
	          }function u(e, t, n) {
	            this.prev = e.context, this.tagName = t, this.indent = e.indented, this.startOfLine = n, (S.doNotIndent.hasOwnProperty(t) || e.context && e.context.noIndent) && (this.noIndent = !0);
	          }function f(e) {
	            e.context && (e.context = e.context.prev);
	          }function h(e, t) {
	            for (var n;;) {
	              if (!e.context) return;if (n = e.context.tagName, !S.contextGrabbers.hasOwnProperty(n) || !S.contextGrabbers[n].hasOwnProperty(t)) return;f(e);
	            }
	          }function d(e, t, n) {
	            return "openTag" == e ? (n.tagStart = t.column(), p) : "closeTag" == e ? m : d;
	          }function p(e, t, n) {
	            return "word" == e ? (n.tagName = t.current(), M = "tag", y) : (M = "error", p);
	          }function m(e, t, n) {
	            if ("word" == e) {
	              var r = t.current();return n.context && n.context.tagName != r && S.implicitlyClosed.hasOwnProperty(n.context.tagName) && f(n), n.context && n.context.tagName == r || S.matchClosing === !1 ? (M = "tag", g) : (M = "tag error", v);
	            }return M = "error", v;
	          }function g(e, t, n) {
	            return "endTag" != e ? (M = "error", g) : (f(n), d);
	          }function v(e, t, n) {
	            return M = "error", g(e, t, n);
	          }function y(e, t, n) {
	            if ("word" == e) return M = "attribute", x;if ("endTag" == e || "selfcloseTag" == e) {
	              var r = n.tagName,
	                  i = n.tagStart;return n.tagName = n.tagStart = null, "selfcloseTag" == e || S.autoSelfClosers.hasOwnProperty(r) ? h(n, r) : (h(n, r), n.context = new u(n, r, i == n.indented)), d;
	            }return M = "error", y;
	          }function x(e, t, n) {
	            return "equals" == e ? b : (S.allowMissing || (M = "error"), y(e, t, n));
	          }function b(e, t, n) {
	            return "string" == e ? w : "word" == e && S.allowUnquoted ? (M = "string", y) : (M = "error", y(e, t, n));
	          }function w(e, t, n) {
	            return "string" == e ? w : y(e, t, n);
	          }var k = r.indentUnit,
	              S = {},
	              C = i.htmlMode ? t : n;for (var L in C) {
	            S[L] = C[L];
	          }for (var L in i) {
	            S[L] = i[L];
	          }var T, M;return o.isInText = !0, { startState: function startState(e) {
	              var t = { tokenize: o, state: d, indented: e || 0, tagName: null, tagStart: null, context: null };return null != e && (t.baseIndent = e), t;
	            }, token: function token(e, t) {
	              if (!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace()) return null;T = null;var n = t.tokenize(e, t);return (n || T) && "comment" != n && (M = null, t.state = t.state(T || n, e, t), M && (n = "error" == M ? n + " error" : M)), n;
	            }, indent: function indent(t, n, r) {
	              var i = t.context;if (t.tokenize.isInAttribute) return t.tagStart == t.indented ? t.stringStartCol + 1 : t.indented + k;if (i && i.noIndent) return e.Pass;if (t.tokenize != a && t.tokenize != o) return r ? r.match(/^(\s*)/)[0].length : 0;if (t.tagName) return S.multilineTagIndentPastTag !== !1 ? t.tagStart + t.tagName.length + 2 : t.tagStart + k * (S.multilineTagIndentFactor || 1);if (S.alignCDATA && /<!\[CDATA\[/.test(n)) return 0;var l = n && /^<(\/)?([\w_:\.-]*)/.exec(n);if (l && l[1]) for (; i;) {
	                if (i.tagName == l[2]) {
	                  i = i.prev;break;
	                }if (!S.implicitlyClosed.hasOwnProperty(i.tagName)) break;i = i.prev;
	              } else if (l) for (; i;) {
	                var s = S.contextGrabbers[i.tagName];if (!s || !s.hasOwnProperty(l[2])) break;i = i.prev;
	              }for (; i && i.prev && !i.startOfLine;) {
	                i = i.prev;
	              }return i ? i.indent + k : t.baseIndent || 0;
	            }, electricInput: /<\/[\s\w:]+>$/, blockCommentStart: "<!--", blockCommentEnd: "-->", configuration: S.htmlMode ? "html" : "xml", helperType: S.htmlMode ? "html" : "xml", skipAttribute: function skipAttribute(e) {
	              e.state == b && (e.state = y);
	            } };
	        }), e.defineMIME("text/xml", "xml"), e.defineMIME("application/xml", "xml"), e.mimeModes.hasOwnProperty("text/html") || e.defineMIME("text/html", { name: "xml", htmlMode: !0 });
	      });
	    }, { "../../lib/codemirror": 10 }], 15: [function (e, t, n) {
	      n.read = function (e, t, n, r, i) {
	        var o,
	            a,
	            l = 8 * i - r - 1,
	            s = (1 << l) - 1,
	            c = s >> 1,
	            u = -7,
	            f = n ? i - 1 : 0,
	            h = n ? -1 : 1,
	            d = e[t + f];for (f += h, o = d & (1 << -u) - 1, d >>= -u, u += l; u > 0; o = 256 * o + e[t + f], f += h, u -= 8) {}for (a = o & (1 << -u) - 1, o >>= -u, u += r; u > 0; a = 256 * a + e[t + f], f += h, u -= 8) {}if (0 === o) o = 1 - c;else {
	          if (o === s) return a ? NaN : (d ? -1 : 1) * (1 / 0);a += Math.pow(2, r), o -= c;
	        }return (d ? -1 : 1) * a * Math.pow(2, o - r);
	      }, n.write = function (e, t, n, r, i, o) {
	        var a,
	            l,
	            s,
	            c = 8 * o - i - 1,
	            u = (1 << c) - 1,
	            f = u >> 1,
	            h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
	            d = r ? 0 : o - 1,
	            p = r ? 1 : -1,
	            m = 0 > t || 0 === t && 0 > 1 / t ? 1 : 0;for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (l = isNaN(t) ? 1 : 0, a = u) : (a = Math.floor(Math.log(t) / Math.LN2), t * (s = Math.pow(2, -a)) < 1 && (a--, s *= 2), t += a + f >= 1 ? h / s : h * Math.pow(2, 1 - f), t * s >= 2 && (a++, s /= 2), a + f >= u ? (l = 0, a = u) : a + f >= 1 ? (l = (t * s - 1) * Math.pow(2, i), a += f) : (l = t * Math.pow(2, f - 1) * Math.pow(2, i), a = 0)); i >= 8; e[n + d] = 255 & l, d += p, l /= 256, i -= 8) {}for (a = a << i | l, c += i; c > 0; e[n + d] = 255 & a, d += p, a /= 256, c -= 8) {}e[n + d - p] |= 128 * m;
	      };
	    }, {}], 16: [function (e, t, n) {
	      var r = {}.toString;t.exports = Array.isArray || function (e) {
	        return "[object Array]" == r.call(e);
	      };
	    }, {}], 17: [function (t, n, r) {
	      (function (t) {
	        (function () {
	          function t(e) {
	            this.tokens = [], this.tokens.links = {}, this.options = e || h.defaults, this.rules = d.normal, this.options.gfm && (this.options.tables ? this.rules = d.tables : this.rules = d.gfm);
	          }function i(e, t) {
	            if (this.options = t || h.defaults, this.links = e, this.rules = p.normal, this.renderer = this.options.renderer || new o(), this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");this.options.gfm ? this.options.breaks ? this.rules = p.breaks : this.rules = p.gfm : this.options.pedantic && (this.rules = p.pedantic);
	          }function o(e) {
	            this.options = e || {};
	          }function a(e) {
	            this.tokens = [], this.token = null, this.options = e || h.defaults, this.options.renderer = this.options.renderer || new o(), this.renderer = this.options.renderer, this.renderer.options = this.options;
	          }function l(e, t) {
	            return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
	          }function s(e) {
	            return e.replace(/&([#\w]+);/g, function (e, t) {
	              return t = t.toLowerCase(), "colon" === t ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "";
	            });
	          }function c(e, t) {
	            return e = e.source, t = t || "", function n(r, i) {
	              return r ? (i = i.source || i, i = i.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(r, i), n) : new RegExp(e, t);
	            };
	          }function u() {}function f(e) {
	            for (var t, n, r = 1; r < arguments.length; r++) {
	              t = arguments[r];for (n in t) {
	                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	              }
	            }return e;
	          }function h(e, n, r) {
	            if (r || "function" == typeof n) {
	              r || (r = n, n = null), n = f({}, h.defaults, n || {});var i,
	                  o,
	                  s = n.highlight,
	                  c = 0;try {
	                i = t.lex(e, n);
	              } catch (u) {
	                return r(u);
	              }o = i.length;var d = function d(e) {
	                if (e) return n.highlight = s, r(e);var t;try {
	                  t = a.parse(i, n);
	                } catch (o) {
	                  e = o;
	                }return n.highlight = s, e ? r(e) : r(null, t);
	              };if (!s || s.length < 3) return d();if (delete n.highlight, !o) return d();for (; c < i.length; c++) {
	                !function (e) {
	                  return "code" !== e.type ? --o || d() : s(e.text, e.lang, function (t, n) {
	                    return t ? d(t) : null == n || n === e.text ? --o || d() : (e.text = n, e.escaped = !0, void (--o || d()));
	                  });
	                }(i[c]);
	              }
	            } else try {
	              return n && (n = f({}, h.defaults, n)), a.parse(t.lex(e, n), n);
	            } catch (u) {
	              if (u.message += "\nPlease report this to https://github.com/chjj/marked.", (n || h.defaults).silent) return "<p>An error occured:</p><pre>" + l(u.message + "", !0) + "</pre>";throw u;
	            }
	          }var d = { newline: /^\n+/, code: /^( {4}[^\n]+\n*)+/, fences: u, hr: /^( *[-*_]){3,} *(?:\n+|$)/, heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/, nptable: u, lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/, blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/, list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/, html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/, def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/, table: u, paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/, text: /^[^\n]+/ };d.bullet = /(?:[*+-]|\d+\.)/, d.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, d.item = c(d.item, "gm")(/bull/g, d.bullet)(), d.list = c(d.list)(/bull/g, d.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + d.def.source + ")")(), d.blockquote = c(d.blockquote)("def", d.def)(), d._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b", d.html = c(d.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, d._tag)(), d.paragraph = c(d.paragraph)("hr", d.hr)("heading", d.heading)("lheading", d.lheading)("blockquote", d.blockquote)("tag", "<" + d._tag)("def", d.def)(), d.normal = f({}, d), d.gfm = f({}, d.normal, { fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/, paragraph: /^/, heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/ }), d.gfm.paragraph = c(d.paragraph)("(?!", "(?!" + d.gfm.fences.source.replace("\\1", "\\2") + "|" + d.list.source.replace("\\1", "\\3") + "|")(), d.tables = f({}, d.gfm, { nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/, table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/ }), t.rules = d, t.lex = function (e, n) {
	            var r = new t(n);return r.lex(e);
	          }, t.prototype.lex = function (e) {
	            return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(e, !0);
	          }, t.prototype.token = function (e, t, n) {
	            for (var r, i, o, a, l, s, c, u, f, e = e.replace(/^ +$/gm, ""); e;) {
	              if ((o = this.rules.newline.exec(e)) && (e = e.substring(o[0].length), o[0].length > 1 && this.tokens.push({ type: "space" })), o = this.rules.code.exec(e)) e = e.substring(o[0].length), o = o[0].replace(/^ {4}/gm, ""), this.tokens.push({ type: "code", text: this.options.pedantic ? o : o.replace(/\n+$/, "") });else if (o = this.rules.fences.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "code", lang: o[2], text: o[3] || "" });else if (o = this.rules.heading.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "heading", depth: o[1].length, text: o[2] });else if (t && (o = this.rules.nptable.exec(e))) {
	                for (e = e.substring(o[0].length), s = { type: "table", header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */), align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */), cells: o[3].replace(/\n$/, "").split("\n") }, u = 0; u < s.align.length; u++) {
	                  /^ *-+: *$/.test(s.align[u]) ? s.align[u] = "right" : /^ *:-+: *$/.test(s.align[u]) ? s.align[u] = "center" : /^ *:-+ *$/.test(s.align[u]) ? s.align[u] = "left" : s.align[u] = null;
	                }for (u = 0; u < s.cells.length; u++) {
	                  s.cells[u] = s.cells[u].split(/ *\| */);
	                }this.tokens.push(s);
	              } else if (o = this.rules.lheading.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "heading", depth: "=" === o[2] ? 1 : 2, text: o[1] });else if (o = this.rules.hr.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "hr" });else if (o = this.rules.blockquote.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "blockquote_start" }), o = o[0].replace(/^ *> ?/gm, ""), this.token(o, t, !0), this.tokens.push({ type: "blockquote_end" });else if (o = this.rules.list.exec(e)) {
	                for (e = e.substring(o[0].length), a = o[2], this.tokens.push({ type: "list_start", ordered: a.length > 1 }), o = o[0].match(this.rules.item), r = !1, f = o.length, u = 0; f > u; u++) {
	                  s = o[u], c = s.length, s = s.replace(/^ *([*+-]|\d+\.) +/, ""), ~s.indexOf("\n ") && (c -= s.length, s = this.options.pedantic ? s.replace(/^ {1,4}/gm, "") : s.replace(new RegExp("^ {1," + c + "}", "gm"), "")), this.options.smartLists && u !== f - 1 && (l = d.bullet.exec(o[u + 1])[0], a === l || a.length > 1 && l.length > 1 || (e = o.slice(u + 1).join("\n") + e, u = f - 1)), i = r || /\n\n(?!\s*$)/.test(s), u !== f - 1 && (r = "\n" === s.charAt(s.length - 1), i || (i = r)), this.tokens.push({ type: i ? "loose_item_start" : "list_item_start" }), this.token(s, !1, n), this.tokens.push({ type: "list_item_end" });
	                }this.tokens.push({ type: "list_end" });
	              } else if (o = this.rules.html.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: this.options.sanitize ? "paragraph" : "html", pre: !this.options.sanitizer && ("pre" === o[1] || "script" === o[1] || "style" === o[1]), text: o[0] });else if (!n && t && (o = this.rules.def.exec(e))) e = e.substring(o[0].length), this.tokens.links[o[1].toLowerCase()] = { href: o[2], title: o[3] };else if (t && (o = this.rules.table.exec(e))) {
	                for (e = e.substring(o[0].length), s = { type: "table",
	                  header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */), align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */), cells: o[3].replace(/(?: *\| *)?\n$/, "").split("\n") }, u = 0; u < s.align.length; u++) {
	                  /^ *-+: *$/.test(s.align[u]) ? s.align[u] = "right" : /^ *:-+: *$/.test(s.align[u]) ? s.align[u] = "center" : /^ *:-+ *$/.test(s.align[u]) ? s.align[u] = "left" : s.align[u] = null;
	                }for (u = 0; u < s.cells.length; u++) {
	                  s.cells[u] = s.cells[u].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
	                }this.tokens.push(s);
	              } else if (t && (o = this.rules.paragraph.exec(e))) e = e.substring(o[0].length), this.tokens.push({ type: "paragraph", text: "\n" === o[1].charAt(o[1].length - 1) ? o[1].slice(0, -1) : o[1] });else if (o = this.rules.text.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "text", text: o[0] });else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
	            }return this.tokens;
	          };var p = { escape: /^\\([\\`*{}\[\]()#+\-.!_>])/, autolink: /^<([^ >]+(@|:\/)[^ >]+)>/, url: u, tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/, link: /^!?\[(inside)\]\(href\)/, reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/, nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/, strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/, em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/, code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, br: /^ {2,}\n(?!\s*$)/, del: u, text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/ };p._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/, p._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, p.link = c(p.link)("inside", p._inside)("href", p._href)(), p.reflink = c(p.reflink)("inside", p._inside)(), p.normal = f({}, p), p.pedantic = f({}, p.normal, { strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/ }), p.gfm = f({}, p.normal, { escape: c(p.escape)("])", "~|])")(), url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, del: /^~~(?=\S)([\s\S]*?\S)~~/, text: c(p.text)("]|", "~]|")("|", "|https?://|")() }), p.breaks = f({}, p.gfm, { br: c(p.br)("{2,}", "*")(), text: c(p.gfm.text)("{2,}", "*")() }), i.rules = p, i.output = function (e, t, n) {
	            var r = new i(t, n);return r.output(e);
	          }, i.prototype.output = function (e) {
	            for (var t, n, r, i, o = ""; e;) {
	              if (i = this.rules.escape.exec(e)) e = e.substring(i[0].length), o += i[1];else if (i = this.rules.autolink.exec(e)) e = e.substring(i[0].length), "@" === i[2] ? (n = ":" === i[1].charAt(6) ? this.mangle(i[1].substring(7)) : this.mangle(i[1]), r = this.mangle("mailto:") + n) : (n = l(i[1]), r = n), o += this.renderer.link(r, null, n);else if (this.inLink || !(i = this.rules.url.exec(e))) {
	                if (i = this.rules.tag.exec(e)) !this.inLink && /^<a /i.test(i[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(i[0]) && (this.inLink = !1), e = e.substring(i[0].length), o += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : l(i[0]) : i[0];else if (i = this.rules.link.exec(e)) e = e.substring(i[0].length), this.inLink = !0, o += this.outputLink(i, { href: i[2], title: i[3] }), this.inLink = !1;else if ((i = this.rules.reflink.exec(e)) || (i = this.rules.nolink.exec(e))) {
	                  if (e = e.substring(i[0].length), t = (i[2] || i[1]).replace(/\s+/g, " "), t = this.links[t.toLowerCase()], !t || !t.href) {
	                    o += i[0].charAt(0), e = i[0].substring(1) + e;continue;
	                  }this.inLink = !0, o += this.outputLink(i, t), this.inLink = !1;
	                } else if (i = this.rules.strong.exec(e)) e = e.substring(i[0].length), o += this.renderer.strong(this.output(i[2] || i[1]));else if (i = this.rules.em.exec(e)) e = e.substring(i[0].length), o += this.renderer.em(this.output(i[2] || i[1]));else if (i = this.rules.code.exec(e)) e = e.substring(i[0].length), o += this.renderer.codespan(l(i[2], !0));else if (i = this.rules.br.exec(e)) e = e.substring(i[0].length), o += this.renderer.br();else if (i = this.rules.del.exec(e)) e = e.substring(i[0].length), o += this.renderer.del(this.output(i[1]));else if (i = this.rules.text.exec(e)) e = e.substring(i[0].length), o += this.renderer.text(l(this.smartypants(i[0])));else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
	              } else e = e.substring(i[0].length), n = l(i[1]), r = n, o += this.renderer.link(r, null, n);
	            }return o;
	          }, i.prototype.outputLink = function (e, t) {
	            var n = l(t.href),
	                r = t.title ? l(t.title) : null;return "!" !== e[0].charAt(0) ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, l(e[1]));
	          }, i.prototype.smartypants = function (e) {
	            return this.options.smartypants ? e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : e;
	          }, i.prototype.mangle = function (e) {
	            if (!this.options.mangle) return e;for (var t, n = "", r = e.length, i = 0; r > i; i++) {
	              t = e.charCodeAt(i), Math.random() > .5 && (t = "x" + t.toString(16)), n += "&#" + t + ";";
	            }return n;
	          }, o.prototype.code = function (e, t, n) {
	            if (this.options.highlight) {
	              var r = this.options.highlight(e, t);null != r && r !== e && (n = !0, e = r);
	            }return t ? '<pre><code class="' + this.options.langPrefix + l(t, !0) + '">' + (n ? e : l(e, !0)) + "\n</code></pre>\n" : "<pre><code>" + (n ? e : l(e, !0)) + "\n</code></pre>";
	          }, o.prototype.blockquote = function (e) {
	            return "<blockquote>\n" + e + "</blockquote>\n";
	          }, o.prototype.html = function (e) {
	            return e;
	          }, o.prototype.heading = function (e, t, n) {
	            return "<h" + t + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n";
	          }, o.prototype.hr = function () {
	            return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
	          }, o.prototype.list = function (e, t) {
	            var n = t ? "ol" : "ul";return "<" + n + ">\n" + e + "</" + n + ">\n";
	          }, o.prototype.listitem = function (e) {
	            return "<li>" + e + "</li>\n";
	          }, o.prototype.paragraph = function (e) {
	            return "<p>" + e + "</p>\n";
	          }, o.prototype.table = function (e, t) {
	            return "<table>\n<thead>\n" + e + "</thead>\n<tbody>\n" + t + "</tbody>\n</table>\n";
	          }, o.prototype.tablerow = function (e) {
	            return "<tr>\n" + e + "</tr>\n";
	          }, o.prototype.tablecell = function (e, t) {
	            var n = t.header ? "th" : "td",
	                r = t.align ? "<" + n + ' style="text-align:' + t.align + '">' : "<" + n + ">";return r + e + "</" + n + ">\n";
	          }, o.prototype.strong = function (e) {
	            return "<strong>" + e + "</strong>";
	          }, o.prototype.em = function (e) {
	            return "<em>" + e + "</em>";
	          }, o.prototype.codespan = function (e) {
	            return "<code>" + e + "</code>";
	          }, o.prototype.br = function () {
	            return this.options.xhtml ? "<br/>" : "<br>";
	          }, o.prototype.del = function (e) {
	            return "<del>" + e + "</del>";
	          }, o.prototype.link = function (e, t, n) {
	            if (this.options.sanitize) {
	              try {
	                var r = decodeURIComponent(s(e)).replace(/[^\w:]/g, "").toLowerCase();
	              } catch (i) {
	                return "";
	              }if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:")) return "";
	            }var o = '<a href="' + e + '"';return t && (o += ' title="' + t + '"'), o += ">" + n + "</a>";
	          }, o.prototype.image = function (e, t, n) {
	            var r = '<img src="' + e + '" alt="' + n + '"';return t && (r += ' title="' + t + '"'), r += this.options.xhtml ? "/>" : ">";
	          }, o.prototype.text = function (e) {
	            return e;
	          }, a.parse = function (e, t, n) {
	            var r = new a(t, n);return r.parse(e);
	          }, a.prototype.parse = function (e) {
	            this.inline = new i(e.links, this.options, this.renderer), this.tokens = e.reverse();for (var t = ""; this.next();) {
	              t += this.tok();
	            }return t;
	          }, a.prototype.next = function () {
	            return this.token = this.tokens.pop();
	          }, a.prototype.peek = function () {
	            return this.tokens[this.tokens.length - 1] || 0;
	          }, a.prototype.parseText = function () {
	            for (var e = this.token.text; "text" === this.peek().type;) {
	              e += "\n" + this.next().text;
	            }return this.inline.output(e);
	          }, a.prototype.tok = function () {
	            switch (this.token.type) {case "space":
	                return "";case "hr":
	                return this.renderer.hr();case "heading":
	                return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);case "code":
	                return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);case "table":
	                var e,
	                    t,
	                    n,
	                    r,
	                    i,
	                    o = "",
	                    a = "";for (n = "", e = 0; e < this.token.header.length; e++) {
	                  r = { header: !0, align: this.token.align[e] }, n += this.renderer.tablecell(this.inline.output(this.token.header[e]), { header: !0, align: this.token.align[e] });
	                }for (o += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
	                  for (t = this.token.cells[e], n = "", i = 0; i < t.length; i++) {
	                    n += this.renderer.tablecell(this.inline.output(t[i]), { header: !1, align: this.token.align[i] });
	                  }a += this.renderer.tablerow(n);
	                }return this.renderer.table(o, a);case "blockquote_start":
	                for (var a = ""; "blockquote_end" !== this.next().type;) {
	                  a += this.tok();
	                }return this.renderer.blockquote(a);case "list_start":
	                for (var a = "", l = this.token.ordered; "list_end" !== this.next().type;) {
	                  a += this.tok();
	                }return this.renderer.list(a, l);case "list_item_start":
	                for (var a = ""; "list_item_end" !== this.next().type;) {
	                  a += "text" === this.token.type ? this.parseText() : this.tok();
	                }return this.renderer.listitem(a);case "loose_item_start":
	                for (var a = ""; "list_item_end" !== this.next().type;) {
	                  a += this.tok();
	                }return this.renderer.listitem(a);case "html":
	                var s = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);return this.renderer.html(s);case "paragraph":
	                return this.renderer.paragraph(this.inline.output(this.token.text));case "text":
	                return this.renderer.paragraph(this.parseText());}
	          }, u.exec = u, h.options = h.setOptions = function (e) {
	            return f(h.defaults, e), h;
	          }, h.defaults = { gfm: !0, tables: !0, breaks: !1, pedantic: !1, sanitize: !1, sanitizer: null, mangle: !0, smartLists: !1, silent: !1, highlight: null, langPrefix: "lang-", smartypants: !1, headerPrefix: "", renderer: new o(), xhtml: !1 }, h.Parser = a, h.parser = a.parse, h.Renderer = o, h.Lexer = t, h.lexer = t.lex, h.InlineLexer = i, h.inlineLexer = i.output, h.parse = h, "undefined" != typeof n && "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) ? n.exports = h : "function" == typeof e && e.amd ? e(function () {
	            return h;
	          }) : this.marked = h;
	        }).call(function () {
	          return this || ("undefined" != typeof window ? window : t);
	        }());
	      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
	    }, {}], 18: [function (e, t, n) {
	      (function (n, r) {
	        "use strict";
	        var i = function i(e, t, n, _i2) {
	          if (_i2 = _i2 || {}, this.dictionary = null, this.rules = {}, this.dictionaryTable = {}, this.compoundRules = [], this.compoundRuleCodes = {}, this.replacementTable = [], this.flags = _i2.flags || {}, e) {
	            if (this.dictionary = e, "undefined" != typeof window && "chrome" in window && "extension" in window.chrome && "getURL" in window.chrome.extension) t || (t = this._readFile(chrome.extension.getURL("lib/typo/dictionaries/" + e + "/" + e + ".aff"))), n || (n = this._readFile(chrome.extension.getURL("lib/typo/dictionaries/" + e + "/" + e + ".dic")));else {
	              if (_i2.dictionaryPath) var o = _i2.dictionaryPath;else if ("undefined" != typeof r) var o = r + "/dictionaries";else var o = "./dictionaries";t || (t = this._readFile(o + "/" + e + "/" + e + ".aff")), n || (n = this._readFile(o + "/" + e + "/" + e + ".dic"));
	            }this.rules = this._parseAFF(t), this.compoundRuleCodes = {};for (var a = 0, l = this.compoundRules.length; l > a; a++) {
	              for (var s = this.compoundRules[a], c = 0, u = s.length; u > c; c++) {
	                this.compoundRuleCodes[s[c]] = [];
	              }
	            }"ONLYINCOMPOUND" in this.flags && (this.compoundRuleCodes[this.flags.ONLYINCOMPOUND] = []), this.dictionaryTable = this._parseDIC(n);for (var a in this.compoundRuleCodes) {
	              0 == this.compoundRuleCodes[a].length && delete this.compoundRuleCodes[a];
	            }for (var a = 0, l = this.compoundRules.length; l > a; a++) {
	              for (var f = this.compoundRules[a], h = "", c = 0, u = f.length; u > c; c++) {
	                var d = f[c];h += d in this.compoundRuleCodes ? "(" + this.compoundRuleCodes[d].join("|") + ")" : d;
	              }this.compoundRules[a] = new RegExp(h, "i");
	            }
	          }return this;
	        };i.prototype = { load: function load(e) {
	            for (var t in e) {
	              this[t] = e[t];
	            }return this;
	          }, _readFile: function _readFile(t, r) {
	            if (r || (r = "utf8"), "undefined" != typeof XMLHttpRequest) {
	              var i = new XMLHttpRequest();return i.open("GET", t, !1), i.overrideMimeType && i.overrideMimeType("text/plain; charset=" + r), i.send(null), i.responseText;
	            }if ("undefined" != typeof e) {
	              var o = e("fs");try {
	                if (o.existsSync(t)) {
	                  var a = o.statSync(t),
	                      l = o.openSync(t, "r"),
	                      s = new n(a.size);return o.readSync(l, s, 0, s.length, null), s.toString(r, 0, s.length);
	                }console.log("Path " + t + " does not exist.");
	              } catch (c) {
	                return console.log(c), "";
	              }
	            }
	          }, _parseAFF: function _parseAFF(e) {
	            var t = {};e = this._removeAffixComments(e);for (var n = e.split("\n"), r = 0, i = n.length; i > r; r++) {
	              var o = n[r],
	                  a = o.split(/\s+/),
	                  l = a[0];if ("PFX" == l || "SFX" == l) {
	                for (var s = a[1], c = a[2], u = parseInt(a[3], 10), f = [], h = r + 1, d = r + 1 + u; d > h; h++) {
	                  var o = n[h],
	                      p = o.split(/\s+/),
	                      m = p[2],
	                      g = p[3].split("/"),
	                      v = g[0];"0" === v && (v = "");var y = this.parseRuleCodes(g[1]),
	                      x = p[4],
	                      b = {};b.add = v, y.length > 0 && (b.continuationClasses = y), "." !== x && ("SFX" === l ? b.match = new RegExp(x + "$") : b.match = new RegExp("^" + x)), "0" != m && ("SFX" === l ? b.remove = new RegExp(m + "$") : b.remove = m), f.push(b);
	                }t[s] = { type: l, combineable: "Y" == c, entries: f }, r += u;
	              } else if ("COMPOUNDRULE" === l) {
	                for (var u = parseInt(a[1], 10), h = r + 1, d = r + 1 + u; d > h; h++) {
	                  var o = n[h],
	                      p = o.split(/\s+/);this.compoundRules.push(p[1]);
	                }r += u;
	              } else if ("REP" === l) {
	                var p = o.split(/\s+/);3 === p.length && this.replacementTable.push([p[1], p[2]]);
	              } else this.flags[l] = a[1];
	            }return t;
	          }, _removeAffixComments: function _removeAffixComments(e) {
	            return e = e.replace(/#.*$/gm, ""), e = e.replace(/^\s\s*/m, "").replace(/\s\s*$/m, ""), e = e.replace(/\n{2,}/g, "\n"), e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
	          }, _parseDIC: function _parseDIC(e) {
	            function t(e, t) {
	              e in r && "object" == _typeof(r[e]) || (r[e] = []), r[e].push(t);
	            }e = this._removeDicComments(e);for (var n = e.split("\n"), r = {}, i = 1, o = n.length; o > i; i++) {
	              var a = n[i],
	                  l = a.split("/", 2),
	                  s = l[0];if (l.length > 1) {
	                var c = this.parseRuleCodes(l[1]);"NEEDAFFIX" in this.flags && -1 != c.indexOf(this.flags.NEEDAFFIX) || t(s, c);for (var u = 0, f = c.length; f > u; u++) {
	                  var h = c[u],
	                      d = this.rules[h];if (d) for (var p = this._applyRule(s, d), m = 0, g = p.length; g > m; m++) {
	                    var v = p[m];if (t(v, []), d.combineable) for (var y = u + 1; f > y; y++) {
	                      var x = c[y],
	                          b = this.rules[x];if (b && b.combineable && d.type != b.type) for (var w = this._applyRule(v, b), k = 0, S = w.length; S > k; k++) {
	                        var C = w[k];t(C, []);
	                      }
	                    }
	                  }h in this.compoundRuleCodes && this.compoundRuleCodes[h].push(s);
	                }
	              } else t(s.trim(), []);
	            }return r;
	          }, _removeDicComments: function _removeDicComments(e) {
	            return e = e.replace(/^\t.*$/gm, "");
	          }, parseRuleCodes: function parseRuleCodes(e) {
	            if (!e) return [];if (!("FLAG" in this.flags)) return e.split("");if ("long" === this.flags.FLAG) {
	              for (var t = [], n = 0, r = e.length; r > n; n += 2) {
	                t.push(e.substr(n, 2));
	              }return t;
	            }return "num" === this.flags.FLAG ? textCode.split(",") : void 0;
	          }, _applyRule: function _applyRule(e, t) {
	            for (var n = t.entries, r = [], i = 0, o = n.length; o > i; i++) {
	              var a = n[i];if (!a.match || e.match(a.match)) {
	                var l = e;if (a.remove && (l = l.replace(a.remove, "")), "SFX" === t.type ? l += a.add : l = a.add + l, r.push(l), "continuationClasses" in a) for (var s = 0, c = a.continuationClasses.length; c > s; s++) {
	                  var u = this.rules[a.continuationClasses[s]];u && (r = r.concat(this._applyRule(l, u)));
	                }
	              }
	            }return r;
	          }, check: function check(e) {
	            var t = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "");if (this.checkExact(t)) return !0;if (t.toUpperCase() === t) {
	              var n = t[0] + t.substring(1).toLowerCase();if (this.hasFlag(n, "KEEPCASE")) return !1;if (this.checkExact(n)) return !0;
	            }var r = t.toLowerCase();if (r !== t) {
	              if (this.hasFlag(r, "KEEPCASE")) return !1;if (this.checkExact(r)) return !0;
	            }return !1;
	          }, checkExact: function checkExact(e) {
	            var t = this.dictionaryTable[e];if ("undefined" == typeof t) {
	              if ("COMPOUNDMIN" in this.flags && e.length >= this.flags.COMPOUNDMIN) for (var n = 0, r = this.compoundRules.length; r > n; n++) {
	                if (e.match(this.compoundRules[n])) return !0;
	              }return !1;
	            }if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
	              for (var n = 0, r = t.length; r > n; n++) {
	                if (!this.hasFlag(e, "ONLYINCOMPOUND", t[n])) return !0;
	              }return !1;
	            }
	          }, hasFlag: function hasFlag(e, t, n) {
	            if (t in this.flags) {
	              if ("undefined" == typeof n) var n = Array.prototype.concat.apply([], this.dictionaryTable[e]);if (n && -1 !== n.indexOf(this.flags[t])) return !0;
	            }return !1;
	          }, alphabet: "", suggest: function suggest(e, t) {
	            function n(e) {
	              for (var t = [], n = 0, r = e.length; r > n; n++) {
	                for (var i = e[n], o = [], a = 0, l = i.length + 1; l > a; a++) {
	                  o.push([i.substring(0, a), i.substring(a, i.length)]);
	                }for (var s = [], a = 0, l = o.length; l > a; a++) {
	                  var u = o[a];u[1] && s.push(u[0] + u[1].substring(1));
	                }for (var f = [], a = 0, l = o.length; l > a; a++) {
	                  var u = o[a];u[1].length > 1 && f.push(u[0] + u[1][1] + u[1][0] + u[1].substring(2));
	                }for (var h = [], a = 0, l = o.length; l > a; a++) {
	                  var u = o[a];if (u[1]) for (var d = 0, p = c.alphabet.length; p > d; d++) {
	                    h.push(u[0] + c.alphabet[d] + u[1].substring(1));
	                  }
	                }for (var m = [], a = 0, l = o.length; l > a; a++) {
	                  var u = o[a];if (u[1]) for (var d = 0, p = c.alphabet.length; p > d; d++) {
	                    h.push(u[0] + c.alphabet[d] + u[1]);
	                  }
	                }t = t.concat(s), t = t.concat(f), t = t.concat(h), t = t.concat(m);
	              }return t;
	            }function r(e) {
	              for (var t = [], n = 0; n < e.length; n++) {
	                c.check(e[n]) && t.push(e[n]);
	              }return t;
	            }function i(e) {
	              function i(e, t) {
	                return e[1] < t[1] ? -1 : 1;
	              }for (var o = n([e]), a = n(o), l = r(o).concat(r(a)), s = {}, u = 0, f = l.length; f > u; u++) {
	                l[u] in s ? s[l[u]] += 1 : s[l[u]] = 1;
	              }var h = [];for (var u in s) {
	                h.push([u, s[u]]);
	              }h.sort(i).reverse();for (var d = [], u = 0, f = Math.min(t, h.length); f > u; u++) {
	                c.hasFlag(h[u][0], "NOSUGGEST") || d.push(h[u][0]);
	              }return d;
	            }if (t || (t = 5), this.check(e)) return [];for (var o = 0, a = this.replacementTable.length; a > o; o++) {
	              var l = this.replacementTable[o];if (-1 !== e.indexOf(l[0])) {
	                var s = e.replace(l[0], l[1]);if (this.check(s)) return [s];
	              }
	            }var c = this;return c.alphabet = "abcdefghijklmnopqrstuvwxyz", i(e);
	          } }, "undefined" != typeof t && (t.exports = i);
	      }).call(this, e("buffer").Buffer, "/node_modules/typo-js");
	    }, { buffer: 3, fs: 2 }], 19: [function (e, t, n) {
	      var r = e("codemirror");r.commands.tabAndIndentMarkdownList = function (e) {
	        var t = e.listSelections(),
	            n = t[0].head,
	            r = e.getStateAfter(n.line),
	            i = r.list !== !1;if (i) return void e.execCommand("indentMore");if (e.options.indentWithTabs) e.execCommand("insertTab");else {
	          var o = Array(e.options.tabSize + 1).join(" ");e.replaceSelection(o);
	        }
	      }, r.commands.shiftTabAndUnindentMarkdownList = function (e) {
	        var t = e.listSelections(),
	            n = t[0].head,
	            r = e.getStateAfter(n.line),
	            i = r.list !== !1;if (i) return void e.execCommand("indentLess");if (e.options.indentWithTabs) e.execCommand("insertTab");else {
	          var o = Array(e.options.tabSize + 1).join(" ");e.replaceSelection(o);
	        }
	      };
	    }, { codemirror: 10 }], 20: [function (e, t, n) {
	      "use strict";
	      function r(e) {
	        return e = U ? e.replace("Ctrl", "Cmd") : e.replace("Cmd", "Ctrl");
	      }function i(e, t, n) {
	        e = e || {};var r = document.createElement("a");return t = void 0 == t ? !0 : t, e.title && t && (r.title = a(e.title, e.action, n), U && (r.title = r.title.replace("Ctrl", "⌘"), r.title = r.title.replace("Alt", "⌥"))), r.tabIndex = -1, r.className = e.className, r;
	      }function o() {
	        var e = document.createElement("i");return e.className = "separator", e.innerHTML = "|", e;
	      }function a(e, t, n) {
	        var i,
	            o = e;return t && (i = Y(t), n[i] && (o += " (" + r(n[i]) + ")")), o;
	      }function l(e, t) {
	        t = t || e.getCursor("start");var n = e.getTokenAt(t);if (!n.type) return {};for (var r, i, o = n.type.split(" "), a = {}, l = 0; l < o.length; l++) {
	          r = o[l], "strong" === r ? a.bold = !0 : "variable-2" === r ? (i = e.getLine(t.line), /^\s*\d+\.\s/.test(i) ? a["ordered-list"] = !0 : a["unordered-list"] = !0) : "atom" === r ? a.quote = !0 : "em" === r ? a.italic = !0 : "quote" === r ? a.quote = !0 : "strikethrough" === r ? a.strikethrough = !0 : "comment" === r ? a.code = !0 : "link" === r ? a.link = !0 : "tag" === r ? a.image = !0 : r.match(/^header(\-[1-6])?$/) && (a[r.replace("header", "heading")] = !0);
	        }return a;
	      }function s(e) {
	        var t = e.codemirror;t.setOption("fullScreen", !t.getOption("fullScreen")), t.getOption("fullScreen") ? (V = document.body.style.overflow, document.body.style.overflow = "hidden") : document.body.style.overflow = V;var n = t.getWrapperElement();/fullscreen/.test(n.previousSibling.className) ? n.previousSibling.className = n.previousSibling.className.replace(/\s*fullscreen\b/, "") : n.previousSibling.className += " fullscreen";var r = e.toolbarElements.fullscreen;/active/.test(r.className) ? r.className = r.className.replace(/\s*active\s*/g, "") : r.className += " active";var i = t.getWrapperElement().nextSibling;/editor-preview-active-side/.test(i.className) && N(e);
	      }function c(e) {
	        P(e, "bold", e.options.blockStyles.bold);
	      }function u(e) {
	        P(e, "italic", e.options.blockStyles.italic);
	      }function f(e) {
	        P(e, "strikethrough", "~~");
	      }function h(e) {
	        function t(e) {
	          if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e))) throw "fencing_line() takes a 'line' object (not a line number, or line text).  Got: " + (typeof e === "undefined" ? "undefined" : _typeof(e)) + ": " + e;return e.styles && e.styles[2] && -1 !== e.styles[2].indexOf("formatting-code-block");
	        }function n(e) {
	          return e.state.base.base || e.state.base;
	        }function r(e, r, i, o, a) {
	          i = i || e.getLineHandle(r), o = o || e.getTokenAt({ line: r, ch: 1 }), a = a || !!i.text && e.getTokenAt({ line: r, ch: i.text.length - 1 });var l = o.type ? o.type.split(" ") : [];return a && n(a).indentedCode ? "indented" : -1 === l.indexOf("comment") ? !1 : n(o).fencedChars || n(a).fencedChars || t(i) ? "fenced" : "single";
	        }function i(e, t, n, r) {
	          var i = t.line + 1,
	              o = n.line + 1,
	              a = t.line !== n.line,
	              l = r + "\n",
	              s = "\n" + r;a && o++, a && 0 === n.ch && (s = r + "\n", o--), E(e, !1, [l, s]), e.setSelection({ line: i, ch: 0 }, { line: o, ch: 0 });
	        }var o,
	            a,
	            l,
	            s = e.options.blockStyles.code,
	            c = e.codemirror,
	            u = c.getCursor("start"),
	            f = c.getCursor("end"),
	            h = c.getTokenAt({ line: u.line, ch: u.ch || 1 }),
	            d = c.getLineHandle(u.line),
	            p = r(c, u.line, d, h);if ("single" === p) {
	          var m = d.text.slice(0, u.ch).replace("`", ""),
	              g = d.text.slice(u.ch).replace("`", "");c.replaceRange(m + g, { line: u.line, ch: 0 }, { line: u.line, ch: 99999999999999 }), u.ch--, u !== f && f.ch--, c.setSelection(u, f), c.focus();
	        } else if ("fenced" === p) {
	          if (u.line !== f.line || u.ch !== f.ch) {
	            for (o = u.line; o >= 0 && (d = c.getLineHandle(o), !t(d)); o--) {}var v,
	                y,
	                x,
	                b,
	                w = c.getTokenAt({ line: o, ch: 1 }),
	                k = n(w).fencedChars;t(c.getLineHandle(u.line)) ? (v = "", y = u.line) : t(c.getLineHandle(u.line - 1)) ? (v = "", y = u.line - 1) : (v = k + "\n", y = u.line), t(c.getLineHandle(f.line)) ? (x = "", b = f.line, 0 === f.ch && (b += 1)) : 0 !== f.ch && t(c.getLineHandle(f.line + 1)) ? (x = "", b = f.line + 1) : (x = k + "\n", b = f.line + 1), 0 === f.ch && (b -= 1), c.operation(function () {
	              c.replaceRange(x, { line: b, ch: 0 }, { line: b + (x ? 0 : 1), ch: 0 }), c.replaceRange(v, { line: y, ch: 0 }, { line: y + (v ? 0 : 1), ch: 0 });
	            }), c.setSelection({ line: y + (v ? 1 : 0), ch: 0 }, { line: b + (v ? 1 : -1), ch: 0 }), c.focus();
	          } else {
	            var S = u.line;if (t(c.getLineHandle(u.line)) && ("fenced" === r(c, u.line + 1) ? (o = u.line, S = u.line + 1) : (a = u.line, S = u.line - 1)), void 0 === o) for (o = S; o >= 0 && (d = c.getLineHandle(o), !t(d)); o--) {}if (void 0 === a) for (l = c.lineCount(), a = S; l > a && (d = c.getLineHandle(a), !t(d)); a++) {}c.operation(function () {
	              c.replaceRange("", { line: o, ch: 0 }, { line: o + 1, ch: 0 }), c.replaceRange("", { line: a - 1, ch: 0 }, { line: a, ch: 0 });
	            }), c.focus();
	          }
	        } else if ("indented" === p) {
	          if (u.line !== f.line || u.ch !== f.ch) o = u.line, a = f.line, 0 === f.ch && a--;else {
	            for (o = u.line; o >= 0; o--) {
	              if (d = c.getLineHandle(o), !d.text.match(/^\s*$/) && "indented" !== r(c, o, d)) {
	                o += 1;break;
	              }
	            }for (l = c.lineCount(), a = u.line; l > a; a++) {
	              if (d = c.getLineHandle(a), !d.text.match(/^\s*$/) && "indented" !== r(c, a, d)) {
	                a -= 1;break;
	              }
	            }
	          }var C = c.getLineHandle(a + 1),
	              L = C && c.getTokenAt({ line: a + 1, ch: C.text.length - 1 }),
	              T = L && n(L).indentedCode;T && c.replaceRange("\n", { line: a + 1, ch: 0 });for (var M = o; a >= M; M++) {
	            c.indentLine(M, "subtract");
	          }c.focus();
	        } else {
	          var N = u.line === f.line && u.ch === f.ch && 0 === u.ch,
	              A = u.line !== f.line;N || A ? i(c, u, f, s) : E(c, !1, ["`", "`"]);
	        }
	      }function d(e) {
	        var t = e.codemirror;I(t, "quote");
	      }function p(e) {
	        var t = e.codemirror;O(t, "smaller");
	      }function m(e) {
	        var t = e.codemirror;O(t, "bigger");
	      }function g(e) {
	        var t = e.codemirror;O(t, void 0, 1);
	      }function v(e) {
	        var t = e.codemirror;O(t, void 0, 2);
	      }function y(e) {
	        var t = e.codemirror;O(t, void 0, 3);
	      }function x(e) {
	        var t = e.codemirror;I(t, "unordered-list");
	      }function b(e) {
	        var t = e.codemirror;I(t, "ordered-list");
	      }function w(e) {
	        var t = e.codemirror;R(t);
	      }function k(e) {
	        var t = e.codemirror,
	            n = l(t),
	            r = e.options,
	            i = "http://";return r.promptURLs && (i = prompt(r.promptTexts.link), !i) ? !1 : void E(t, n.link, r.insertTexts.link, i);
	      }function S(e) {
	        var t = e.codemirror,
	            n = l(t),
	            r = e.options,
	            i = "http://";return r.promptURLs && (i = prompt(r.promptTexts.image), !i) ? !1 : void E(t, n.image, r.insertTexts.image, i);
	      }function C(e) {
	        var t = e.codemirror,
	            n = l(t),
	            r = e.options;E(t, n.table, r.insertTexts.table);
	      }function L(e) {
	        var t = e.codemirror,
	            n = l(t),
	            r = e.options;E(t, n.image, r.insertTexts.horizontalRule);
	      }function T(e) {
	        var t = e.codemirror;t.undo(), t.focus();
	      }function M(e) {
	        var t = e.codemirror;t.redo(), t.focus();
	      }function N(e) {
	        var t = e.codemirror,
	            n = t.getWrapperElement(),
	            r = n.nextSibling,
	            i = e.toolbarElements["side-by-side"],
	            o = !1;/editor-preview-active-side/.test(r.className) ? (r.className = r.className.replace(/\s*editor-preview-active-side\s*/g, ""), i.className = i.className.replace(/\s*active\s*/g, ""), n.className = n.className.replace(/\s*CodeMirror-sided\s*/g, " ")) : (setTimeout(function () {
	          t.getOption("fullScreen") || s(e), r.className += " editor-preview-active-side";
	        }, 1), i.className += " active", n.className += " CodeMirror-sided", o = !0);var a = n.lastChild;if (/editor-preview-active/.test(a.className)) {
	          a.className = a.className.replace(/\s*editor-preview-active\s*/g, "");var l = e.toolbarElements.preview,
	              c = n.previousSibling;l.className = l.className.replace(/\s*active\s*/g, ""), c.className = c.className.replace(/\s*disabled-for-preview*/g, "");
	        }var u = function u() {
	          r.innerHTML = e.options.previewRender(e.value(), r);
	        };t.sideBySideRenderingFunction || (t.sideBySideRenderingFunction = u), o ? (r.innerHTML = e.options.previewRender(e.value(), r), t.on("update", t.sideBySideRenderingFunction)) : t.off("update", t.sideBySideRenderingFunction), t.refresh();
	      }function A(e) {
	        var t = e.codemirror,
	            n = t.getWrapperElement(),
	            r = n.previousSibling,
	            i = e.options.toolbar ? e.toolbarElements.preview : !1,
	            o = n.lastChild;o && /editor-preview/.test(o.className) || (o = document.createElement("div"), o.className = "editor-preview", n.appendChild(o)), /editor-preview-active/.test(o.className) ? (o.className = o.className.replace(/\s*editor-preview-active\s*/g, ""), i && (i.className = i.className.replace(/\s*active\s*/g, ""), r.className = r.className.replace(/\s*disabled-for-preview*/g, ""))) : (setTimeout(function () {
	          o.className += " editor-preview-active";
	        }, 1), i && (i.className += " active", r.className += " disabled-for-preview")), o.innerHTML = e.options.previewRender(e.value(), o);var a = t.getWrapperElement().nextSibling;/editor-preview-active-side/.test(a.className) && N(e);
	      }function E(e, t, n, r) {
	        if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) {
	          var i,
	              o = n[0],
	              a = n[1],
	              l = e.getCursor("start"),
	              s = e.getCursor("end");r && (a = a.replace("#url#", r)), t ? (i = e.getLine(l.line), o = i.slice(0, l.ch), a = i.slice(l.ch), e.replaceRange(o + a, { line: l.line, ch: 0 })) : (i = e.getSelection(), e.replaceSelection(o + i + a), l.ch += o.length, l !== s && (s.ch += o.length)), e.setSelection(l, s), e.focus();
	        }
	      }function O(e, t, n) {
	        if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) {
	          for (var r = e.getCursor("start"), i = e.getCursor("end"), o = r.line; o <= i.line; o++) {
	            !function (r) {
	              var i = e.getLine(r),
	                  o = i.search(/[^#]/);i = void 0 !== t ? 0 >= o ? "bigger" == t ? "###### " + i : "# " + i : 6 == o && "smaller" == t ? i.substr(7) : 1 == o && "bigger" == t ? i.substr(2) : "bigger" == t ? i.substr(1) : "#" + i : 1 == n ? 0 >= o ? "# " + i : o == n ? i.substr(o + 1) : "# " + i.substr(o + 1) : 2 == n ? 0 >= o ? "## " + i : o == n ? i.substr(o + 1) : "## " + i.substr(o + 1) : 0 >= o ? "### " + i : o == n ? i.substr(o + 1) : "### " + i.substr(o + 1), e.replaceRange(i, { line: r, ch: 0 }, { line: r, ch: 99999999999999 });
	            }(o);
	          }e.focus();
	        }
	      }function I(e, t) {
	        if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) {
	          for (var n = l(e), r = e.getCursor("start"), i = e.getCursor("end"), o = { quote: /^(\s*)\>\s+/, "unordered-list": /^(\s*)(\*|\-|\+)\s+/, "ordered-list": /^(\s*)\d+\.\s+/ }, a = { quote: "> ", "unordered-list": "* ", "ordered-list": "1. " }, s = r.line; s <= i.line; s++) {
	            !function (r) {
	              var i = e.getLine(r);i = n[t] ? i.replace(o[t], "$1") : a[t] + i, e.replaceRange(i, { line: r, ch: 0 }, { line: r, ch: 99999999999999 });
	            }(s);
	          }e.focus();
	        }
	      }function P(e, t, n, r) {
	        if (!/editor-preview-active/.test(e.codemirror.getWrapperElement().lastChild.className)) {
	          r = "undefined" == typeof r ? n : r;var i,
	              o = e.codemirror,
	              a = l(o),
	              s = n,
	              c = r,
	              u = o.getCursor("start"),
	              f = o.getCursor("end");a[t] ? (i = o.getLine(u.line), s = i.slice(0, u.ch), c = i.slice(u.ch), "bold" == t ? (s = s.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/, ""), c = c.replace(/(\*\*|__)/, "")) : "italic" == t ? (s = s.replace(/(\*|_)(?![\s\S]*(\*|_))/, ""), c = c.replace(/(\*|_)/, "")) : "strikethrough" == t && (s = s.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/, ""), c = c.replace(/(\*\*|~~)/, "")), o.replaceRange(s + c, { line: u.line, ch: 0 }, { line: u.line, ch: 99999999999999 }), "bold" == t || "strikethrough" == t ? (u.ch -= 2, u !== f && (f.ch -= 2)) : "italic" == t && (u.ch -= 1, u !== f && (f.ch -= 1))) : (i = o.getSelection(), "bold" == t ? (i = i.split("**").join(""), i = i.split("__").join("")) : "italic" == t ? (i = i.split("*").join(""), i = i.split("_").join("")) : "strikethrough" == t && (i = i.split("~~").join("")), o.replaceSelection(s + i + c), u.ch += n.length, f.ch = u.ch + i.length), o.setSelection(u, f), o.focus();
	        }
	      }function R(e) {
	        if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) for (var t, n = e.getCursor("start"), r = e.getCursor("end"), i = n.line; i <= r.line; i++) {
	          t = e.getLine(i), t = t.replace(/^[ ]*([# ]+|\*|\-|[> ]+|[0-9]+(.|\)))[ ]*/, ""), e.replaceRange(t, { line: i, ch: 0 }, { line: i, ch: 99999999999999 });
	        }
	      }function D(e, t) {
	        for (var n in t) {
	          t.hasOwnProperty(n) && (t[n] instanceof Array ? e[n] = t[n].concat(e[n] instanceof Array ? e[n] : []) : null !== t[n] && "object" == _typeof(t[n]) && t[n].constructor === Object ? e[n] = D(e[n] || {}, t[n]) : e[n] = t[n]);
	        }return e;
	      }function H(e) {
	        for (var t = 1; t < arguments.length; t++) {
	          e = D(e, arguments[t]);
	        }return e;
	      }function W(e) {
	        var t = /[a-zA-Z0-9_\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g,
	            n = e.match(t),
	            r = 0;if (null === n) return r;for (var i = 0; i < n.length; i++) {
	          r += n[i].charCodeAt(0) >= 19968 ? n[i].length : 1;
	        }return r;
	      }function B(e) {
	        e = e || {}, e.parent = this;var t = !0;if (e.autoDownloadFontAwesome === !1 && (t = !1), e.autoDownloadFontAwesome !== !0) for (var n = document.styleSheets, r = 0; r < n.length; r++) {
	          n[r].href && n[r].href.indexOf("//maxcdn.bootstrapcdn.com/font-awesome/") > -1 && (t = !1);
	        }if (t) {
	          var i = document.createElement("link");i.rel = "stylesheet", i.href = "https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css", document.getElementsByTagName("head")[0].appendChild(i);
	        }if (e.element) this.element = e.element;else if (null === e.element) return void console.log("SimpleMDE: Error. No element was found.");if (void 0 === e.toolbar) {
	          e.toolbar = [];for (var o in K) {
	            K.hasOwnProperty(o) && (-1 != o.indexOf("separator-") && e.toolbar.push("|"), (K[o]["default"] === !0 || e.showIcons && e.showIcons.constructor === Array && -1 != e.showIcons.indexOf(o)) && e.toolbar.push(o));
	          }
	        }e.hasOwnProperty("status") || (e.status = ["autosave", "lines", "words", "cursor"]), e.previewRender || (e.previewRender = function (e) {
	          return this.parent.markdown(e);
	        }), e.parsingConfig = H({ highlightFormatting: !0 }, e.parsingConfig || {}), e.insertTexts = H({}, X, e.insertTexts || {}), e.promptTexts = Z, e.blockStyles = H({}, J, e.blockStyles || {}), e.shortcuts = H({}, G, e.shortcuts || {}), void 0 != e.autosave && void 0 != e.autosave.unique_id && "" != e.autosave.unique_id && (e.autosave.uniqueId = e.autosave.unique_id), this.options = e, this.render(), !e.initialValue || this.options.autosave && this.options.autosave.foundSavedValue === !0 || this.value(e.initialValue);
	      }function _() {
	        if ("object" != (typeof localStorage === "undefined" ? "undefined" : _typeof(localStorage))) return !1;try {
	          localStorage.setItem("smde_localStorage", 1), localStorage.removeItem("smde_localStorage");
	        } catch (e) {
	          return !1;
	        }return !0;
	      }var F = e("codemirror");e("codemirror/addon/edit/continuelist.js"), e("./codemirror/tablist"), e("codemirror/addon/display/fullscreen.js"), e("codemirror/mode/markdown/markdown.js"), e("codemirror/addon/mode/overlay.js"), e("codemirror/addon/display/placeholder.js"), e("codemirror/addon/selection/mark-selection.js"), e("codemirror/mode/gfm/gfm.js"), e("codemirror/mode/xml/xml.js");var z = e("codemirror-spell-checker"),
	          j = e("marked"),
	          U = /Mac/.test(navigator.platform),
	          q = { toggleBold: c, toggleItalic: u, drawLink: k, toggleHeadingSmaller: p, toggleHeadingBigger: m, drawImage: S, toggleBlockquote: d, toggleOrderedList: b, toggleUnorderedList: x, toggleCodeBlock: h, togglePreview: A, toggleStrikethrough: f, toggleHeading1: g, toggleHeading2: v, toggleHeading3: y, cleanBlock: w, drawTable: C, drawHorizontalRule: L, undo: T, redo: M, toggleSideBySide: N, toggleFullScreen: s },
	          G = { toggleBold: "Cmd-B", toggleItalic: "Cmd-I", drawLink: "Cmd-K", toggleHeadingSmaller: "Cmd-H", toggleHeadingBigger: "Shift-Cmd-H", cleanBlock: "Cmd-E", drawImage: "Cmd-Alt-I", toggleBlockquote: "Cmd-'", toggleOrderedList: "Cmd-Alt-L", toggleUnorderedList: "Cmd-L", toggleCodeBlock: "Cmd-Alt-C", togglePreview: "Cmd-P", toggleSideBySide: "F9", toggleFullScreen: "F11" },
	          Y = function Y(e) {
	        for (var t in q) {
	          if (q[t] === e) return t;
	        }return null;
	      },
	          $ = function $() {
	        var e = !1;return function (t) {
	          (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0);
	        }(navigator.userAgent || navigator.vendor || window.opera), e;
	      },
	          V = "",
	          K = { bold: { name: "bold", action: c, className: "fa fa-bold", title: "Bold", "default": !0 }, italic: { name: "italic", action: u, className: "fa fa-italic", title: "Italic", "default": !0 }, strikethrough: { name: "strikethrough", action: f, className: "fa fa-strikethrough", title: "Strikethrough" }, heading: { name: "heading", action: p, className: "fa fa-header", title: "Heading", "default": !0 }, "heading-smaller": { name: "heading-smaller", action: p, className: "fa fa-header fa-header-x fa-header-smaller", title: "Smaller Heading" }, "heading-bigger": { name: "heading-bigger", action: m, className: "fa fa-header fa-header-x fa-header-bigger", title: "Bigger Heading" }, "heading-1": { name: "heading-1", action: g, className: "fa fa-header fa-header-x fa-header-1", title: "Big Heading" }, "heading-2": { name: "heading-2", action: v, className: "fa fa-header fa-header-x fa-header-2", title: "Medium Heading" }, "heading-3": { name: "heading-3", action: y, className: "fa fa-header fa-header-x fa-header-3", title: "Small Heading" }, "separator-1": { name: "separator-1" }, code: { name: "code", action: h, className: "fa fa-code", title: "Code" }, quote: { name: "quote", action: d, className: "fa fa-quote-left", title: "Quote", "default": !0 }, "unordered-list": { name: "unordered-list", action: x, className: "fa fa-list-ul", title: "Generic List", "default": !0 }, "ordered-list": { name: "ordered-list", action: b, className: "fa fa-list-ol", title: "Numbered List", "default": !0 }, "clean-block": { name: "clean-block", action: w, className: "fa fa-eraser fa-clean-block", title: "Clean block" }, "separator-2": { name: "separator-2" }, link: { name: "link", action: k, className: "fa fa-link", title: "Create Link", "default": !0 }, image: { name: "image", action: S, className: "fa fa-picture-o", title: "Insert Image", "default": !0 }, table: { name: "table", action: C, className: "fa fa-table", title: "Insert Table" }, "horizontal-rule": { name: "horizontal-rule", action: L, className: "fa fa-minus", title: "Insert Horizontal Line" }, "separator-3": { name: "separator-3" }, preview: { name: "preview", action: A, className: "fa fa-eye no-disable", title: "Toggle Preview", "default": !0 }, "side-by-side": { name: "side-by-side", action: N, className: "fa fa-columns no-disable no-mobile", title: "Toggle Side by Side", "default": !0 }, fullscreen: { name: "fullscreen", action: s, className: "fa fa-arrows-alt no-disable no-mobile", title: "Toggle Fullscreen", "default": !0 }, "separator-4": { name: "separator-4" }, guide: { name: "guide", action: "https://simplemde.com/markdown-guide", className: "fa fa-question-circle", title: "Markdown Guide", "default": !0 }, "separator-5": { name: "separator-5" }, undo: { name: "undo", action: T, className: "fa fa-undo no-disable", title: "Undo" }, redo: { name: "redo", action: M, className: "fa fa-repeat no-disable", title: "Redo" } },
	          X = { link: ["[", "](#url#)"], image: ["![](", "#url#)"], table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text     | Text     |\n\n"], horizontalRule: ["", "\n\n-----\n\n"] },
	          Z = { link: "URL for the link:", image: "URL of the image:" },
	          J = { bold: "**", code: "```", italic: "*" };B.prototype.markdown = function (e) {
	        if (j) {
	          var t = {};return this.options && this.options.renderingConfig && this.options.renderingConfig.singleLineBreaks === !1 ? t.breaks = !1 : t.breaks = !0, this.options && this.options.renderingConfig && this.options.renderingConfig.codeSyntaxHighlighting === !0 && window.hljs && (t.highlight = function (e) {
	            return window.hljs.highlightAuto(e).value;
	          }), j.setOptions(t), j(e);
	        }
	      }, B.prototype.render = function (e) {
	        if (e || (e = this.element || document.getElementsByTagName("textarea")[0]), !this._rendered || this._rendered !== e) {
	          this.element = e;var t = this.options,
	              n = this,
	              i = {};for (var o in t.shortcuts) {
	            null !== t.shortcuts[o] && null !== q[o] && !function (e) {
	              i[r(t.shortcuts[e])] = function () {
	                q[e](n);
	              };
	            }(o);
	          }i.Enter = "newlineAndIndentContinueMarkdownList", i.Tab = "tabAndIndentMarkdownList", i["Shift-Tab"] = "shiftTabAndUnindentMarkdownList", i.Esc = function (e) {
	            e.getOption("fullScreen") && s(n);
	          }, document.addEventListener("keydown", function (e) {
	            e = e || window.event, 27 == e.keyCode && n.codemirror.getOption("fullScreen") && s(n);
	          }, !1);var a, l;if (t.spellChecker !== !1 ? (a = "spell-checker", l = t.parsingConfig, l.name = "gfm", l.gitHubSpice = !1, z({ codeMirrorInstance: F })) : (a = t.parsingConfig, a.name = "gfm", a.gitHubSpice = !1), this.codemirror = F.fromTextArea(e, { mode: a, backdrop: l, theme: "paper", tabSize: void 0 != t.tabSize ? t.tabSize : 2, indentUnit: void 0 != t.tabSize ? t.tabSize : 2, indentWithTabs: t.indentWithTabs !== !1, lineNumbers: !1, autofocus: t.autofocus === !0, extraKeys: i, lineWrapping: t.lineWrapping !== !1, allowDropFileTypes: ["text/plain"], placeholder: t.placeholder || e.getAttribute("placeholder") || "", styleSelectedText: void 0 != t.styleSelectedText ? t.styleSelectedText : !0 }), t.forceSync === !0) {
	            var c = this.codemirror;c.on("change", function () {
	              c.save();
	            });
	          }this.gui = {}, t.toolbar !== !1 && (this.gui.toolbar = this.createToolbar()), t.status !== !1 && (this.gui.statusbar = this.createStatusbar()), void 0 != t.autosave && t.autosave.enabled === !0 && this.autosave(), this.gui.sideBySide = this.createSideBySide(), this._rendered = this.element;var u = this.codemirror;setTimeout(function () {
	            u.refresh();
	          }.bind(u), 0);
	        }
	      }, B.prototype.autosave = function () {
	        if (_()) {
	          var e = this;if (void 0 == this.options.autosave.uniqueId || "" == this.options.autosave.uniqueId) return void console.log("SimpleMDE: You must set a uniqueId to use the autosave feature");null != e.element.form && void 0 != e.element.form && e.element.form.addEventListener("submit", function () {
	            localStorage.removeItem("smde_" + e.options.autosave.uniqueId);
	          }), this.options.autosave.loaded !== !0 && ("string" == typeof localStorage.getItem("smde_" + this.options.autosave.uniqueId) && "" != localStorage.getItem("smde_" + this.options.autosave.uniqueId) && (this.codemirror.setValue(localStorage.getItem("smde_" + this.options.autosave.uniqueId)), this.options.autosave.foundSavedValue = !0), this.options.autosave.loaded = !0), localStorage.setItem("smde_" + this.options.autosave.uniqueId, e.value());var t = document.getElementById("autosaved");if (null != t && void 0 != t && "" != t) {
	            var n = new Date(),
	                r = n.getHours(),
	                i = n.getMinutes(),
	                o = "am",
	                a = r;a >= 12 && (a = r - 12, o = "pm"), 0 == a && (a = 12), i = 10 > i ? "0" + i : i, t.innerHTML = "Autosaved: " + a + ":" + i + " " + o;
	          }this.autosaveTimeoutId = setTimeout(function () {
	            e.autosave();
	          }, this.options.autosave.delay || 1e4);
	        } else console.log("SimpleMDE: localStorage not available, cannot autosave");
	      }, B.prototype.clearAutosavedValue = function () {
	        if (_()) {
	          if (void 0 == this.options.autosave || void 0 == this.options.autosave.uniqueId || "" == this.options.autosave.uniqueId) return void console.log("SimpleMDE: You must set a uniqueId to clear the autosave value");localStorage.removeItem("smde_" + this.options.autosave.uniqueId);
	        } else console.log("SimpleMDE: localStorage not available, cannot autosave");
	      }, B.prototype.createSideBySide = function () {
	        var e = this.codemirror,
	            t = e.getWrapperElement(),
	            n = t.nextSibling;n && /editor-preview-side/.test(n.className) || (n = document.createElement("div"), n.className = "editor-preview-side", t.parentNode.insertBefore(n, t.nextSibling));var r = !1,
	            i = !1;return e.on("scroll", function (e) {
	          if (r) return void (r = !1);i = !0;var t = e.getScrollInfo().height - e.getScrollInfo().clientHeight,
	              o = parseFloat(e.getScrollInfo().top) / t,
	              a = (n.scrollHeight - n.clientHeight) * o;n.scrollTop = a;
	        }), n.onscroll = function () {
	          if (i) return void (i = !1);r = !0;var t = n.scrollHeight - n.clientHeight,
	              o = parseFloat(n.scrollTop) / t,
	              a = (e.getScrollInfo().height - e.getScrollInfo().clientHeight) * o;e.scrollTo(0, a);
	        }, n;
	      }, B.prototype.createToolbar = function (e) {
	        if (e = e || this.options.toolbar, e && 0 !== e.length) {
	          var t;for (t = 0; t < e.length; t++) {
	            void 0 != K[e[t]] && (e[t] = K[e[t]]);
	          }var n = document.createElement("div");n.className = "editor-toolbar";var r = this,
	              a = {};for (r.toolbar = e, t = 0; t < e.length; t++) {
	            if (("guide" != e[t].name || r.options.toolbarGuideIcon !== !1) && !(r.options.hideIcons && -1 != r.options.hideIcons.indexOf(e[t].name) || ("fullscreen" == e[t].name || "side-by-side" == e[t].name) && $())) {
	              if ("|" === e[t]) {
	                for (var s = !1, c = t + 1; c < e.length; c++) {
	                  "|" === e[c] || r.options.hideIcons && -1 != r.options.hideIcons.indexOf(e[c].name) || (s = !0);
	                }if (!s) continue;
	              }!function (e) {
	                var t;t = "|" === e ? o() : i(e, r.options.toolbarTips, r.options.shortcuts), e.action && ("function" == typeof e.action ? t.onclick = function (t) {
	                  t.preventDefault(), e.action(r);
	                } : "string" == typeof e.action && (t.href = e.action, t.target = "_blank")), a[e.name || e] = t, n.appendChild(t);
	              }(e[t]);
	            }
	          }r.toolbarElements = a;var u = this.codemirror;u.on("cursorActivity", function () {
	            var e = l(u);for (var t in a) {
	              !function (t) {
	                var n = a[t];e[t] ? n.className += " active" : "fullscreen" != t && "side-by-side" != t && (n.className = n.className.replace(/\s*active\s*/g, ""));
	              }(t);
	            }
	          });var f = u.getWrapperElement();return f.parentNode.insertBefore(n, f), n;
	        }
	      }, B.prototype.createStatusbar = function (e) {
	        e = e || this.options.status;var t = this.options,
	            n = this.codemirror;if (e && 0 !== e.length) {
	          var r,
	              i,
	              o,
	              a = [];for (r = 0; r < e.length; r++) {
	            if (i = void 0, o = void 0, "object" == _typeof(e[r])) a.push({ className: e[r].className, defaultValue: e[r].defaultValue, onUpdate: e[r].onUpdate });else {
	              var l = e[r];"words" === l ? (o = function o(e) {
	                e.innerHTML = W(n.getValue());
	              }, i = function i(e) {
	                e.innerHTML = W(n.getValue());
	              }) : "lines" === l ? (o = function o(e) {
	                e.innerHTML = n.lineCount();
	              }, i = function i(e) {
	                e.innerHTML = n.lineCount();
	              }) : "cursor" === l ? (o = function o(e) {
	                e.innerHTML = "0:0";
	              }, i = function i(e) {
	                var t = n.getCursor();e.innerHTML = t.line + ":" + t.ch;
	              }) : "autosave" === l && (o = function o(e) {
	                void 0 != t.autosave && t.autosave.enabled === !0 && e.setAttribute("id", "autosaved");
	              }), a.push({ className: l, defaultValue: o, onUpdate: i });
	            }
	          }var s = document.createElement("div");for (s.className = "editor-statusbar", r = 0; r < a.length; r++) {
	            var c = a[r],
	                u = document.createElement("span");u.className = c.className, "function" == typeof c.defaultValue && c.defaultValue(u), "function" == typeof c.onUpdate && this.codemirror.on("update", function (e, t) {
	              return function () {
	                t.onUpdate(e);
	              };
	            }(u, c)), s.appendChild(u);
	          }var f = this.codemirror.getWrapperElement();return f.parentNode.insertBefore(s, f.nextSibling), s;
	        }
	      }, B.prototype.value = function (e) {
	        return void 0 === e ? this.codemirror.getValue() : (this.codemirror.getDoc().setValue(e), this);
	      }, B.toggleBold = c, B.toggleItalic = u, B.toggleStrikethrough = f, B.toggleBlockquote = d, B.toggleHeadingSmaller = p, B.toggleHeadingBigger = m, B.toggleHeading1 = g, B.toggleHeading2 = v, B.toggleHeading3 = y, B.toggleCodeBlock = h, B.toggleUnorderedList = x, B.toggleOrderedList = b, B.cleanBlock = w, B.drawLink = k, B.drawImage = S, B.drawTable = C, B.drawHorizontalRule = L, B.undo = T, B.redo = M, B.togglePreview = A, B.toggleSideBySide = N, B.toggleFullScreen = s, B.prototype.toggleBold = function () {
	        c(this);
	      }, B.prototype.toggleItalic = function () {
	        u(this);
	      }, B.prototype.toggleStrikethrough = function () {
	        f(this);
	      }, B.prototype.toggleBlockquote = function () {
	        d(this);
	      }, B.prototype.toggleHeadingSmaller = function () {
	        p(this);
	      }, B.prototype.toggleHeadingBigger = function () {
	        m(this);
	      }, B.prototype.toggleHeading1 = function () {
	        g(this);
	      }, B.prototype.toggleHeading2 = function () {
	        v(this);
	      }, B.prototype.toggleHeading3 = function () {
	        y(this);
	      }, B.prototype.toggleCodeBlock = function () {
	        h(this);
	      }, B.prototype.toggleUnorderedList = function () {
	        x(this);
	      }, B.prototype.toggleOrderedList = function () {
	        b(this);
	      }, B.prototype.cleanBlock = function () {
	        w(this);
	      }, B.prototype.drawLink = function () {
	        k(this);
	      }, B.prototype.drawImage = function () {
	        S(this);
	      }, B.prototype.drawTable = function () {
	        C(this);
	      }, B.prototype.drawHorizontalRule = function () {
	        L(this);
	      }, B.prototype.undo = function () {
	        T(this);
	      }, B.prototype.redo = function () {
	        M(this);
	      }, B.prototype.togglePreview = function () {
	        A(this);
	      }, B.prototype.toggleSideBySide = function () {
	        N(this);
	      }, B.prototype.toggleFullScreen = function () {
	        s(this);
	      }, B.prototype.isPreviewActive = function () {
	        var e = this.codemirror,
	            t = e.getWrapperElement(),
	            n = t.lastChild;return (/editor-preview-active/.test(n.className)
	        );
	      }, B.prototype.isSideBySideActive = function () {
	        var e = this.codemirror,
	            t = e.getWrapperElement(),
	            n = t.nextSibling;return (/editor-preview-active-side/.test(n.className)
	        );
	      }, B.prototype.isFullscreenActive = function () {
	        var e = this.codemirror;return e.getOption("fullScreen");
	      }, B.prototype.getState = function () {
	        var e = this.codemirror;return l(e);
	      }, B.prototype.toTextArea = function () {
	        var e = this.codemirror,
	            t = e.getWrapperElement();t.parentNode && (this.gui.toolbar && t.parentNode.removeChild(this.gui.toolbar), this.gui.statusbar && t.parentNode.removeChild(this.gui.statusbar), this.gui.sideBySide && t.parentNode.removeChild(this.gui.sideBySide)), e.toTextArea(), this.autosaveTimeoutId && (clearTimeout(this.autosaveTimeoutId), this.autosaveTimeoutId = void 0, this.clearAutosavedValue());
	      }, t.exports = B;
	    }, { "./codemirror/tablist": 19, codemirror: 10, "codemirror-spell-checker": 4, "codemirror/addon/display/fullscreen.js": 5, "codemirror/addon/display/placeholder.js": 6, "codemirror/addon/edit/continuelist.js": 7, "codemirror/addon/mode/overlay.js": 8, "codemirror/addon/selection/mark-selection.js": 9, "codemirror/mode/gfm/gfm.js": 11, "codemirror/mode/markdown/markdown.js": 12, "codemirror/mode/xml/xml.js": 14, marked: 17 }] }, {}, [20])(20);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(1)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	/* 
	 * @Author slashhuang
	 * 17/3/17
	 * 所有页面都有的toggle
	 */
	
	//头部的toggle
	$(document).ready(function () {
	    $('.navbar').click(function () {
	        $('header nav').toggleClass('shownav');
	    });
	    var myWidth = 0;
	    function getSize() {
	        if (typeof window.innerWidth == 'number') {
	            myWidth = window.innerWidth;
	        } else if (document.documentElement && document.documentElement.clientWidth) {
	            myWidth = document.documentElement.clientWidth;
	        };
	    };
	    var m = $('#main'),
	        a = $('#asidepart'),
	        c = $('.closeaside'),
	        o = $('.openaside');
	    c.click(function () {
	        a.addClass('fadeOut').css('display', 'none');
	        o.css('display', 'block').addClass('fadeIn');
	        m.addClass('moveMain');
	    });
	    o.click(function () {
	        o.css('display', 'none').removeClass('beforeFadeIn');
	        a.css('display', 'block').removeClass('fadeOut').addClass('fadeIn');
	        m.removeClass('moveMain');
	    });
	    $(window).scroll(function () {
	        o.css("top", Math.max(80, 260 - $(this).scrollTop()));
	    });
	
	    $(window).resize(function () {
	        getSize();
	        if (myWidth >= 1024) {
	            $('header nav').removeClass('shownav');
	        } else {
	            m.removeClass('moveMain');
	            a.css('display', 'block').removeClass('fadeOut');
	            o.css('display', 'none');
	        }
	    });
	});
	// fancy box
	
	$(document).ready(function () {
	    $('.article-content').each(function (i) {
	        $(this).find('img').each(function () {
	            if ($(this).parent().hasClass('fancybox')) return;
	            var alt = this.alt;
	            if (alt) $(this).after('<span class="caption">' + alt + '</span>');
	            $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
	        });
	        $(this).find('.fancybox').each(function () {
	            $(this).attr('rel', 'article' + i);
	        });
	    });
	    if ($.fancybox) {
	        $('.fancybox').fancybox();
	    }
	});
	/*scroll top*/
	(function ($) {
	
	    // When to show the scroll link
	    // higher number = scroll link appears further down the page    
	    var upperLimit = 1000;
	    // Our scroll link element
	    var scrollElem = $('#totop');
	
	    // Scroll to top speed
	    var scrollSpeed = 500;
	
	    // Show and hide the scroll to top link based on scroll position    
	    scrollElem.hide();
	    $(window).scroll(function () {
	        var scrollTop = $(document).scrollTop();
	        if (scrollTop > upperLimit) {
	            $(scrollElem).stop().fadeTo(300, 1); // fade back in            
	        } else {
	            $(scrollElem).stop().fadeTo(300, 0); // fade out
	        }
	    });
	
	    // Scroll to top animation on click
	    $(scrollElem).click(function () {
	        $('html, body').animate({ scrollTop: 0 }, scrollSpeed);return false;
	    });
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 17 */
8,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ function(module, exports) {

	"use strict";
	
	/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
	(function (s, H, f, w) {
	  var K = f("html"),
	      q = f(s),
	      p = f(H),
	      b = f.fancybox = function () {
	    b.open.apply(this, arguments);
	  },
	      J = navigator.userAgent.match(/msie/i),
	      C = null,
	      t = H.createTouch !== w,
	      u = function u(a) {
	    return a && a.hasOwnProperty && a instanceof f;
	  },
	      r = function r(a) {
	    return a && "string" === f.type(a);
	  },
	      F = function F(a) {
	    return r(a) && 0 < a.indexOf("%");
	  },
	      m = function m(a, d) {
	    var e = parseInt(a, 10) || 0;d && F(a) && (e *= b.getViewport()[d] / 100);return Math.ceil(e);
	  },
	      x = function x(a, b) {
	    return m(a, b) + "px";
	  };f.extend(b, { version: "2.1.5", defaults: { padding: 15, margin: 20,
	      width: 800, height: 600, minWidth: 100, minHeight: 100, maxWidth: 9999, maxHeight: 9999, pixelRatio: 1, autoSize: !0, autoHeight: !1, autoWidth: !1, autoResize: !0, autoCenter: !t, fitToView: !0, aspectRatio: !1, topRatio: 0.5, leftRatio: 0.5, scrolling: "auto", wrapCSS: "", arrows: !0, closeBtn: !0, closeClick: !1, nextClick: !1, mouseWheel: !0, autoPlay: !1, playSpeed: 3E3, preload: 3, modal: !1, loop: !0, ajax: { dataType: "html", headers: { "X-fancyBox": !0 } }, iframe: { scrolling: "auto", preload: !0 }, swf: { wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always" },
	      keys: { next: { 13: "left", 34: "up", 39: "left", 40: "up" }, prev: { 8: "right", 33: "down", 37: "right", 38: "down" }, close: [27], play: [32], toggle: [70] }, direction: { next: "left", prev: "right" }, scrollOutside: !0, index: 0, type: null, href: null, content: null, title: null, tpl: { wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', image: '<img class="fancybox-image" src="{href}" alt="" />', iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (J ? ' allowtransparency="true"' : "") + "></iframe>", error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>', next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>', prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>' }, openEffect: "fade", openSpeed: 250, openEasing: "swing", openOpacity: !0,
	      openMethod: "zoomIn", closeEffect: "fade", closeSpeed: 250, closeEasing: "swing", closeOpacity: !0, closeMethod: "zoomOut", nextEffect: "elastic", nextSpeed: 250, nextEasing: "swing", nextMethod: "changeIn", prevEffect: "elastic", prevSpeed: 250, prevEasing: "swing", prevMethod: "changeOut", helpers: { overlay: !0, title: !0 }, onCancel: f.noop, beforeLoad: f.noop, afterLoad: f.noop, beforeShow: f.noop, afterShow: f.noop, beforeChange: f.noop, beforeClose: f.noop, afterClose: f.noop }, group: {}, opts: {}, previous: null, coming: null, current: null, isActive: !1,
	    isOpen: !1, isOpened: !1, wrap: null, skin: null, outer: null, inner: null, player: { timer: null, isActive: !1 }, ajaxLoad: null, imgPreload: null, transitions: {}, helpers: {}, open: function open(a, d) {
	      if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = u(a) ? f(a).get() : [a]), f.each(a, function (e, c) {
	        var l = {},
	            g,
	            h,
	            k,
	            n,
	            m;"object" === f.type(c) && (c.nodeType && (c = f(c)), u(c) ? (l = { href: c.data("fancybox-href") || c.attr("href"), title: f("<div/>").text(c.data("fancybox-title") || c.attr("title")).html(), isDom: !0, element: c }, f.metadata && f.extend(!0, l, c.metadata())) : l = c);g = d.href || l.href || (r(c) ? c : null);h = d.title !== w ? d.title : l.title || "";n = (k = d.content || l.content) ? "html" : d.type || l.type;!n && l.isDom && (n = c.data("fancybox-type"), n || (n = (n = c.prop("class").match(/fancybox\.(\w+)/)) ? n[1] : null));r(g) && (n || (b.isImage(g) ? n = "image" : b.isSWF(g) ? n = "swf" : "#" === g.charAt(0) ? n = "inline" : r(c) && (n = "html", k = c)), "ajax" === n && (m = g.split(/\s+/, 2), g = m.shift(), m = m.shift()));k || ("inline" === n ? g ? k = f(r(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : l.isDom && (k = c) : "html" === n ? k = g : n || g || !l.isDom || (n = "inline", k = c));f.extend(l, { href: g, type: n, content: k, title: h, selector: m });a[e] = l;
	      }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== w && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index);
	    }, cancel: function cancel() {
	      var a = b.coming;a && !1 === b.trigger("onCancel") || (b.hideLoading(), a && (b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a)));
	    }, close: function close(a) {
	      b.cancel();!1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (b.isOpen && !0 !== a ? (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]()) : (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut())));
	    }, play: function play(a) {
	      var d = function d() {
	        clearTimeout(b.player.timer);
	      },
	          e = function e() {
	        d();b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed));
	      },
	          c = function c() {
	        d();p.unbind(".player");b.player.isActive = !1;b.trigger("onPlayEnd");
	      };!0 === a || !b.player.isActive && !1 !== a ? b.current && (b.current.loop || b.current.index < b.group.length - 1) && (b.player.isActive = !0, p.bind({ "onCancel.player beforeClose.player": c, "onUpdate.player": e, "beforeLoad.player": d }), e(), b.trigger("onPlayStart")) : c();
	    }, next: function next(a) {
	      var d = b.current;d && (r(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"));
	    }, prev: function prev(a) {
	      var d = b.current;d && (r(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"));
	    }, jumpto: function jumpto(a, d, e) {
	      var c = b.current;c && (a = m(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== w && (b.cancel(), b._start(a)));
	    }, reposition: function reposition(a, d) {
	      var e = b.current,
	          c = e ? e.wrap : null,
	          l;c && (l = b._getPosition(d), a && "scroll" === a.type ? (delete l.position, c.stop(!0, !0).animate(l, 200)) : (c.css(l), e.pos = f.extend({}, e.dim, l)));
	    },
	    update: function update(a) {
	      var d = a && a.originalEvent && a.originalEvent.type,
	          e = !d || "orientationchange" === d;e && (clearTimeout(C), C = null);b.isOpen && !C && (C = setTimeout(function () {
	        var c = b.current;c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), C = null);
	      }, e && !t ? 0 : 300));
	    }, toggle: function toggle(a) {
	      b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, t && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update());
	    }, hideLoading: function hideLoading() {
	      p.unbind(".loading");f("#fancybox-loading").remove();
	    }, showLoading: function showLoading() {
	      var a, d;b.hideLoading();a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading", function (a) {
	        27 === (a.which || a.keyCode) && (a.preventDefault(), b.cancel());
	      });b.defaults.fixed || (d = b.getViewport(), a.css({ position: "absolute", top: 0.5 * d.h + d.y, left: 0.5 * d.w + d.x }));b.trigger("onLoading");
	    }, getViewport: function getViewport() {
	      var a = b.current && b.current.locked || !1,
	          d = { x: q.scrollLeft(), y: q.scrollTop() };a && a.length ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = t && s.innerWidth ? s.innerWidth : q.width(), d.h = t && s.innerHeight ? s.innerHeight : q.height());return d;
	    }, unbindEvents: function unbindEvents() {
	      b.wrap && u(b.wrap) && b.wrap.unbind(".fb");p.unbind(".fb");q.unbind(".fb");
	    }, bindEvents: function bindEvents() {
	      var a = b.current,
	          d;a && (q.bind("orientationchange.fb" + (t ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function (e) {
	        var c = e.which || e.keyCode,
	            l = e.target || e.srcElement;if (27 === c && b.coming) return !1;e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || l && (l.type || f(l).is("[contenteditable]")) || f.each(d, function (d, l) {
	          if (1 < a.group.length && l[c] !== w) return b[d](l[c]), e.preventDefault(), !1;if (-1 < f.inArray(c, l)) return b[d](), e.preventDefault(), !1;
	        });
	      }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function (d, c, l, g) {
	        for (var h = f(d.target || null), k = !1; h.length && !(k || h.is(".fancybox-skin") || h.is(".fancybox-wrap"));) {
	          k = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
	        }0 !== c && !k && 1 < b.group.length && !a.canShrink && (0 < g || 0 < l ? b.prev(0 < g ? "down" : "left") : (0 > g || 0 > l) && b.next(0 > g ? "up" : "right"), d.preventDefault());
	      }));
	    }, trigger: function trigger(a, d) {
	      var e,
	          c = d || b.coming || b.current;if (c) {
	        f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));if (!1 === e) return !1;c.helpers && f.each(c.helpers, function (d, e) {
	          if (e && b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c);
	        });
	      }p.trigger(a);
	    }, isImage: function isImage(a) {
	      return r(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
	    }, isSWF: function isSWF(a) {
	      return r(a) && a.match(/\.(swf)((\?|#).*)?$/i);
	    }, _start: function _start(a) {
	      var d = {},
	          e,
	          c;a = m(a);e = b.group[a] || null;if (!e) return !1;d = f.extend(!0, {}, b.opts, e);e = d.margin;c = d.padding;"number" === f.type(e) && (d.margin = [e, e, e, e]);"number" === f.type(c) && (d.padding = [c, c, c, c]);d.modal && f.extend(!0, d, { closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1, mouseWheel: !1, keys: null, helpers: { overlay: { closeClick: !1 } } });d.autoSize && (d.autoWidth = d.autoHeight = !0);"auto" === d.width && (d.autoWidth = !0);"auto" === d.height && (d.autoHeight = !0);d.group = b.group;d.index = a;b.coming = d;if (!1 === b.trigger("beforeLoad")) b.coming = null;else {
	        c = d.type;e = d.href;if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;b.isActive = !0;if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";"image" === c && (d.aspectRatio = !0);"iframe" === c && t && (d.scrolling = "scroll");d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (t ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");f.extend(d, { skin: f(".fancybox-skin", d.wrap), outer: f(".fancybox-outer", d.wrap), inner: f(".fancybox-inner", d.wrap) });f.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
	          d.skin.css("padding" + b, x(d.padding[a]));
	        });b.trigger("onReady");
	        if ("inline" === c || "html" === c) {
	          if (!d.content || !d.content.length) return b._error("content");
	        } else if (!e) return b._error("href");"image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad();
	      }
	    }, _error: function _error(a) {
	      f.extend(b.coming, { type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: a, content: b.coming.tpl.error });b._afterLoad();
	    }, _loadImage: function _loadImage() {
	      var a = b.imgPreload = new Image();a.onload = function () {
	        this.onload = this.onerror = null;b.coming.width = this.width / b.opts.pixelRatio;b.coming.height = this.height / b.opts.pixelRatio;b._afterLoad();
	      };a.onerror = function () {
	        this.onload = this.onerror = null;b._error("image");
	      };a.src = b.coming.href;!0 !== a.complete && b.showLoading();
	    }, _loadAjax: function _loadAjax() {
	      var a = b.coming;b.showLoading();b.ajaxLoad = f.ajax(f.extend({}, a.ajax, { url: a.href, error: function error(a, e) {
	          b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading();
	        }, success: function success(d, e) {
	          "success" === e && (a.content = d, b._afterLoad());
	        } }));
	    }, _loadIframe: function _loadIframe() {
	      var a = b.coming,
	          d = f(a.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime())).attr("scrolling", t ? "auto" : a.iframe.scrolling).attr("src", a.href);f(a.wrap).bind("onReset", function () {
	        try {
	          f(this).find("iframe").hide().attr("src", "//about:blank").end().empty();
	        } catch (a) {}
	      });a.iframe.preload && (b.showLoading(), d.one("load", function () {
	        f(this).data("ready", 1);t || f(this).bind("load.fb", b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad();
	      }));a.content = d.appendTo(a.inner);a.iframe.preload || b._afterLoad();
	    }, _preloadImages: function _preloadImages() {
	      var a = b.group,
	          d = b.current,
	          e = a.length,
	          c = d.preload ? Math.min(d.preload, e - 1) : 0,
	          f,
	          g;for (g = 1; g <= c; g += 1) {
	        f = a[(d.index + g) % e], "image" === f.type && f.href && (new Image().src = f.href);
	      }
	    }, _afterLoad: function _afterLoad() {
	      var a = b.coming,
	          d = b.current,
	          e,
	          c,
	          l,
	          g,
	          h;b.hideLoading();if (a && !1 !== b.isActive) if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;else {
	        d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
	        b.unbindEvents();e = a.content;c = a.type;l = a.scrolling;f.extend(b, { wrap: a.wrap, skin: a.skin, outer: a.outer, inner: a.inner, current: a, previous: d });g = a.href;switch (c) {case "inline":case "ajax":case "html":
	            a.selector ? e = f("<div>").html(e).find(a.selector) : u(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function () {
	              f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1);
	            }));break;case "image":
	            e = a.tpl.image.replace(/\{href\}/g, g);break;case "swf":
	            e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function (a, b) {
	              e += '<param name="' + a + '" value="' + b + '"></param>';h += " " + a + '="' + b + '"';
	            }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>";}u(e) && e.parent().is(a.inner) || a.inner.append(e);b.trigger("beforeShow");
	        a.inner.css("overflow", "yes" === l ? "scroll" : "no" === l ? "hidden" : l);b._setDimension();b.reposition();b.isOpen = !1;b.coming = null;b.bindEvents();if (!b.isOpened) f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();else if (d.prevMethod) b.transitions[d.prevMethod]();b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();b._preloadImages();
	      }
	    }, _setDimension: function _setDimension() {
	      var a = b.getViewport(),
	          d = 0,
	          e = !1,
	          c = !1,
	          e = b.wrap,
	          l = b.skin,
	          g = b.inner,
	          h = b.current,
	          c = h.width,
	          k = h.height,
	          n = h.minWidth,
	          v = h.minHeight,
	          p = h.maxWidth,
	          q = h.maxHeight,
	          t = h.scrolling,
	          r = h.scrollOutside ? h.scrollbarWidth : 0,
	          y = h.margin,
	          z = m(y[1] + y[3]),
	          s = m(y[0] + y[2]),
	          w,
	          A,
	          u,
	          D,
	          B,
	          G,
	          C,
	          E,
	          I;e.add(l).add(g).width("auto").height("auto").removeClass("fancybox-tmp");y = m(l.outerWidth(!0) - l.width());w = m(l.outerHeight(!0) - l.height());A = z + y;u = s + w;D = F(c) ? (a.w - A) * m(c) / 100 : c;B = F(k) ? (a.h - u) * m(k) / 100 : k;if ("iframe" === h.type) {
	        if (I = h.content, h.autoHeight && 1 === I.data("ready")) try {
	          I[0].contentWindow.document.location && (g.width(D).height(9999), G = I.contents().find("body"), r && G.css("overflow-x", "hidden"), B = G.outerHeight(!0));
	        } catch (H) {}
	      } else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(D), h.autoHeight || g.height(B), h.autoWidth && (D = g.width()), h.autoHeight && (B = g.height()), g.removeClass("fancybox-tmp");c = m(D);k = m(B);E = D / B;n = m(F(n) ? m(n, "w") - A : n);p = m(F(p) ? m(p, "w") - A : p);v = m(F(v) ? m(v, "h") - u : v);q = m(F(q) ? m(q, "h") - u : q);G = p;C = q;h.fitToView && (p = Math.min(a.w - A, p), q = Math.min(a.h - u, q));A = a.w - z;s = a.h - s;h.aspectRatio ? (c > p && (c = p, k = m(c / E)), k > q && (k = q, c = m(k * E)), c < n && (c = n, k = m(c / E)), k < v && (k = v, c = m(k * E))) : (c = Math.max(n, Math.min(c, p)), h.autoHeight && "iframe" !== h.type && (g.width(c), k = g.height()), k = Math.max(v, Math.min(k, q)));if (h.fitToView) if (g.width(c).height(k), e.width(c + y), a = e.width(), z = e.height(), h.aspectRatio) for (; (a > A || z > s) && c > n && k > v && !(19 < d++);) {
	        k = Math.max(v, Math.min(q, k - 10)), c = m(k * E), c < n && (c = n, k = m(c / E)), c > p && (c = p, k = m(c / E)), g.width(c).height(k), e.width(c + y), a = e.width(), z = e.height();
	      } else c = Math.max(n, Math.min(c, c - (a - A))), k = Math.max(v, Math.min(k, k - (z - s)));r && "auto" === t && k < B && c + y + r < A && (c += r);g.width(c).height(k);e.width(c + y);a = e.width();z = e.height();e = (a > A || z > s) && c > n && k > v;c = h.aspectRatio ? c < G && k < C && c < D && k < B : (c < G || k < C) && (c < D || k < B);f.extend(h, { dim: { width: x(a), height: x(z) }, origWidth: D, origHeight: B, canShrink: e, canExpand: c, wPadding: y, hPadding: w, wrapSpace: z - l.outerHeight(!0), skinSpace: l.height() - k });!I && h.autoHeight && k > v && k < q && !c && g.height("auto");
	    }, _getPosition: function _getPosition(a) {
	      var d = b.current,
	          e = b.getViewport(),
	          c = d.margin,
	          f = b.wrap.width() + c[1] + c[3],
	          g = b.wrap.height() + c[0] + c[2],
	          c = { position: "absolute",
	        top: c[0], left: c[3] };d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);c.top = x(Math.max(c.top, c.top + (e.h - g) * d.topRatio));c.left = x(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));return c;
	    }, _afterZoomIn: function _afterZoomIn() {
	      var a = b.current;a && ((b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
	        f(d.target).is("a") || f(d.target).parent().is("a") || (d.preventDefault(), b[a.closeClick ? "close" : "next"]());
	      }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function (a) {
	        a.preventDefault();b.close();
	      }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), a.loop || a.index !== a.group.length - 1) ? b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play(!0)) : b.play(!1));
	    },
	    _afterZoomOut: function _afterZoomOut(a) {
	      a = a || b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b, { group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null });b.trigger("afterClose", a);
	    } });b.transitions = { getOrigPosition: function getOrigPosition() {
	      var a = b.current,
	          d = a.element,
	          e = a.orig,
	          c = {},
	          f = 50,
	          g = 50,
	          h = a.hPadding,
	          k = a.wPadding,
	          n = b.getViewport();!e && a.isDom && d.is(":visible") && (e = d.find("img:first"), e.length || (e = d));u(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) : (c.top = n.y + (n.h - g) * a.topRatio, c.left = n.x + (n.w - f) * a.leftRatio);if ("fixed" === b.wrap.css("position") || a.locked) c.top -= n.y, c.left -= n.x;return c = { top: x(c.top - h * a.topRatio), left: x(c.left - k * a.leftRatio), width: x(f + k), height: x(g + h) };
	    }, step: function step(a, d) {
	      var e,
	          c,
	          f = d.prop;c = b.current;var g = c.wrapSpace,
	          h = c.skinSpace;if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](m("width" === f ? c : c - g * e)), b.inner[f](m("width" === f ? c : c - g * e - h * e));
	    }, zoomIn: function zoomIn() {
	      var a = b.current,
	          d = a.pos,
	          e = a.openEffect,
	          c = "elastic" === e,
	          l = f.extend({ opacity: 1 }, d);delete l.position;c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);b.wrap.css(d).animate(l, { duration: "none" === e ? 0 : a.openSpeed, easing: a.openEasing, step: c ? this.step : null, complete: b._afterZoomIn });
	    }, zoomOut: function zoomOut() {
	      var a = b.current,
	          d = a.closeEffect,
	          e = "elastic" === d,
	          c = { opacity: 0.1 };e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));b.wrap.animate(c, { duration: "none" === d ? 0 : a.closeSpeed, easing: a.closeEasing, step: e ? this.step : null, complete: b._afterZoomOut });
	    }, changeIn: function changeIn() {
	      var a = b.current,
	          d = a.nextEffect,
	          e = a.pos,
	          c = { opacity: 1 },
	          f = b.direction,
	          g;e.opacity = 0.1;"elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = x(m(e[g]) - 200), c[g] = "+=200px") : (e[g] = x(m(e[g]) + 200), c[g] = "-=200px"));"none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, { duration: a.nextSpeed, easing: a.nextEasing, complete: b._afterZoomIn });
	    },
	    changeOut: function changeOut() {
	      var a = b.previous,
	          d = a.prevEffect,
	          e = { opacity: 0.1 },
	          c = b.direction;"elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");a.wrap.animate(e, { duration: "none" === d ? 0 : a.prevSpeed, easing: a.prevEasing, complete: function complete() {
	          f(this).trigger("onReset").remove();
	        } });
	    } };b.helpers.overlay = { defaults: { closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !t, fixed: !0 }, overlay: null, fixed: !1, el: f("html"), create: function create(a) {
	      var d;a = f.extend({}, this.defaults, a);this.overlay && this.close();d = b.coming ? b.coming.parent : a.parent;this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(d && d.lenth ? d : "body");this.fixed = !1;a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0);
	    }, open: function open(a) {
	      var d = this;a = f.extend({}, this.defaults, a);this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);this.fixed || (q.bind("resize.overlay", f.proxy(this.update, this)), this.update());a.closeClick && this.overlay.bind("click.overlay", function (a) {
	        if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ? b.close() : d.close(), !1;
	      });this.overlay.css(a.css).show();
	    }, close: function close() {
	      q.unbind("resize.overlay");this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), this.el.removeClass("fancybox-lock"), q.scrollTop(this.scrollV).scrollLeft(this.scrollH));f(".fancybox-overlay").remove().hide();f.extend(this, { overlay: null, fixed: !1 });
	    }, update: function update() {
	      var a = "100%",
	          b;this.overlay.width(a).height("100%");
	      J ? (b = Math.max(H.documentElement.offsetWidth, H.body.offsetWidth), p.width() > b && (a = p.width())) : p.width() > q.width() && (a = p.width());this.overlay.width(a).height(p.height());
	    }, onReady: function onReady(a, b) {
	      var e = this.overlay;f(".fancybox-overlay").stop(!0, !0);e || this.create(a);a.locked && this.fixed && b.fixed && (b.locked = this.overlay.append(b.wrap), b.fixed = !1);!0 === a.showEarly && this.beforeShow.apply(this, arguments);
	    }, beforeShow: function beforeShow(a, b) {
	      b.locked && !this.el.hasClass("fancybox-lock") && (!1 !== this.fixPosition && f("*").filter(function () {
	        return "fixed" === f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap");
	      }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin"), this.scrollV = q.scrollTop(), this.scrollH = q.scrollLeft(), this.el.addClass("fancybox-lock"), q.scrollTop(this.scrollV).scrollLeft(this.scrollH));this.open(a);
	    }, onUpdate: function onUpdate() {
	      this.fixed || this.update();
	    }, afterClose: function afterClose(a) {
	      this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this));
	    } };b.helpers.title = { defaults: { type: "float",
	      position: "bottom" }, beforeShow: function beforeShow(a) {
	      var d = b.current,
	          e = d.title,
	          c = a.type;f.isFunction(e) && (e = e.call(d.element, d));if (r(e) && "" !== f.trim(e)) {
	        d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");switch (c) {case "inside":
	            c = b.skin;break;case "outside":
	            c = b.wrap;break;case "over":
	            c = b.inner;break;default:
	            c = b.skin, d.appendTo("body"), J && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(m(d.css("margin-bottom")));}d["top" === a.position ? "prependTo" : "appendTo"](c);
	      }
	    } };f.fn.fancybox = function (a) {
	    var d,
	        e = f(this),
	        c = this.selector || "",
	        l = function l(g) {
	      var h = f(this).blur(),
	          k = d,
	          l,
	          m;g.ctrlKey || g.altKey || g.shiftKey || g.metaKey || h.is(".fancybox-wrap") || (l = a.groupAttr || "data-fancybox-group", m = h.attr(l), m || (l = "rel", m = h.get(0)[l]), m && "" !== m && "nofollow" !== m && (h = c.length ? f(c) : e, h = h.filter("[" + l + '="' + m + '"]'), k = h.index(this)), a.index = k, !1 !== b.open(h, a) && g.preventDefault());
	    };a = a || {};d = a.index || 0;c && !1 !== a.live ? p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", l) : e.unbind("click.fb-start").bind("click.fb-start", l);this.filter("[data-fancybox-start=1]").trigger("click");return this;
	  };p.ready(function () {
	    var a, d;f.scrollbarWidth === w && (f.scrollbarWidth = function () {
	      var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
	          b = a.children(),
	          b = b.innerWidth() - b.height(99).innerWidth();a.remove();return b;
	    });f.support.fixedPosition === w && (f.support.fixedPosition = function () {
	      var a = f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
	          b = 20 === a[0].offsetTop || 15 === a[0].offsetTop;a.remove();return b;
	    }());f.extend(b.defaults, { scrollbarWidth: f.scrollbarWidth(), fixed: f.support.fixedPosition, parent: f("body") });a = f(s).width();K.addClass("fancybox-lock-test");d = f(s).width();K.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head");
	  });
	})(window, document, jQuery);

/***/ }
/******/ ])));
//# sourceMappingURL=common.js.map