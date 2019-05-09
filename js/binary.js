/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"binary": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/javascript/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/moment/locale sync recursive ja":
/*!********************************************!*\
  !*** ./node_modules/moment/locale sync ja ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ja";

/***/ }),

/***/ "./src/javascript/_common/check_new_release.js":
/*!*****************************************************!*\
  !*** ./src/javascript/_common/check_new_release.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
var urlForStatic = __webpack_require__(/*! ./url */ "./src/javascript/_common/url.js").urlForStatic;
var getStaticHash = __webpack_require__(/*! ./utility */ "./src/javascript/_common/utility.js").getStaticHash;

// only reload if it's more than 10 minutes since the last reload
var shouldForceReload = function shouldForceReload(last_reload) {
    return !last_reload || +last_reload + 10 * 60 * 1000 < moment().valueOf();
};

// calling this method is handled by GTM tags
var checkNewRelease = function checkNewRelease() {
    var last_reload = localStorage.getItem('new_release_reload_time');
    if (!shouldForceReload(last_reload)) return false;
    localStorage.setItem('new_release_reload_time', moment().valueOf());

    var current_hash = getStaticHash();
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (+xhttp.readyState === 4 && +xhttp.status === 200) {
            var latest_hash = xhttp.responseText;
            if (latest_hash && current_hash && latest_hash !== current_hash) {
                window.location.reload(true);
            }
        }
    };
    xhttp.open('GET', urlForStatic('version?' + Math.random().toString(36).slice(2)), true);
    xhttp.send();

    return true;
};

module.exports = {
    shouldForceReload: shouldForceReload,
    checkNewRelease: checkNewRelease
};

/***/ }),

/***/ "./src/javascript/_common/language.js":
/*!********************************************!*\
  !*** ./src/javascript/_common/language.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cookies = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
var CookieStorage = __webpack_require__(/*! ./storage */ "./src/javascript/_common/storage.js").CookieStorage;

var Language = function () {
    var all_languages = {
        ACH: 'Translations',
        EN: 'English',
        DE: 'Deutsch',
        ES: 'Español',
        FR: 'Français',
        ID: 'Indonesia',
        IT: 'Italiano',
        PL: 'Polish',
        PT: 'Português',
        RU: 'Русский',
        TH: 'Thai',
        VI: 'Tiếng Việt',
        ZH_CN: '简体中文',
        ZH_TW: '繁體中文'
    };
    var default_language = 'EN';

    var setCookieLanguage = function setCookieLanguage(lang) {
        if (!Cookies.get('language') || lang) {
            var cookie = new CookieStorage('language');
            cookie.write((lang || getLanguage()).toUpperCase());
        }
    };

    var url_lang = null;

    var lang_regex = new RegExp('^(' + Object.keys(all_languages).join('|') + ')$', 'i');

    var languageFromUrl = function languageFromUrl(custom_url) {
        if (url_lang && !custom_url) return url_lang;
        var url_params = (custom_url || window.location.href).split('/').slice(3);
        var language = url_params.find(function (lang) {
            return lang_regex.test(lang);
        }) || '';
        if (!custom_url) {
            url_lang = language;
        }
        return language;
    };

    var current_lang = null;

    var getLanguage = function getLanguage() {
        if (/ach/i.test(current_lang) || /ach/i.test(languageFromUrl())) {
            var crowdin_lang_key = 'jipt_language_code_binary-static';
            var crowdin_lang = localStorage.getItem(crowdin_lang_key) || Cookies.get(crowdin_lang_key); // selected language for in-context translation
            if (crowdin_lang) {
                current_lang = crowdin_lang.toUpperCase().replace('-', '_').toUpperCase();
                if (document.body) {
                    document.body.classList.add(current_lang); // set the body class removed by crowdin code
                }
            }
        }
        current_lang = current_lang || (languageFromUrl() || Cookies.get('language') || default_language).toUpperCase();
        return current_lang;
    };

    var urlForLanguage = function urlForLanguage(lang) {
        var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
        return url.replace(new RegExp('/' + getLanguage() + '/', 'i'), '/' + (lang || default_language).trim().toLowerCase() + '/');
    };

    return {
        getAll: function getAll() {
            return all_languages;
        },
        setCookie: setCookieLanguage,
        get: getLanguage,
        urlFor: urlForLanguage,
        urlLang: languageFromUrl,
        reset: function reset() {
            url_lang = null;current_lang = null;
        }
    };
}();

module.exports = Language;

/***/ }),

/***/ "./src/javascript/_common/lib/plugins.js":
/*!***********************************************!*\
  !*** ./src/javascript/_common/lib/plugins.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Element.prototype.hide = function () {
    this.style.display = 'none';
    return this;
};

Element.prototype.show = function () {
    this.style.display = '';
    return this;
};

if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
        return this;
    };
}

Element.prototype.toggleClass = function (class_name, should_add) {
    if (typeof should_add === 'undefined') {
        // toggle
        should_add = !this.classList.contains(class_name);
    }
    this.classList[should_add ? 'add' : 'remove'](class_name);
    return this;
};

Element.prototype.setVisibility = function (make_visible) {
    this.toggleClass('invisible', !make_visible);
    return this;
};

Element.prototype.html = function (content) {
    if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object') {
        this.innerHTML = '';
        this.appendChild(content);
    } else {
        this.innerHTML = content;
    }
    return this;
};

/***/ }),

/***/ "./src/javascript/_common/lib/polyfills/element.closest.js":
/*!*****************************************************************!*\
  !*** ./src/javascript/_common/lib/polyfills/element.closest.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
        var el = this;
        if (!document.documentElement.contains(el)) return null;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}

/***/ }),

/***/ "./src/javascript/_common/lib/polyfills/element.matches.js":
/*!*****************************************************************!*\
  !*** ./src/javascript/_common/lib/polyfills/element.matches.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
    };
}

/***/ }),

/***/ "./src/javascript/_common/lib/polyfills/nodelist.foreach.js":
/*!******************************************************************!*\
  !*** ./src/javascript/_common/lib/polyfills/nodelist.foreach.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

/***/ }),

/***/ "./src/javascript/_common/storage.js":
/*!*******************************************!*\
  !*** ./src/javascript/_common/storage.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cookies = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
var getPropertyValue = __webpack_require__(/*! ./utility */ "./src/javascript/_common/utility.js").getPropertyValue;
var isEmptyObject = __webpack_require__(/*! ./utility */ "./src/javascript/_common/utility.js").isEmptyObject;
var isProduction = __webpack_require__(/*! ../config */ "./src/javascript/config.js").isProduction;

var getObject = function getObject(key) {
    return JSON.parse(this.getItem(key) || '{}');
};

var setObject = function setObject(key, value) {
    if (value && value instanceof Object) {
        this.setItem(key, JSON.stringify(value));
    }
};

if (typeof Storage !== 'undefined') {
    Storage.prototype.getObject = getObject;
    Storage.prototype.setObject = setObject;
}

var isStorageSupported = function isStorageSupported(storage) {
    if (typeof storage === 'undefined') {
        return false;
    }

    var test_key = 'test';
    try {
        storage.setItem(test_key, '1');
        storage.removeItem(test_key);
        return true;
    } catch (e) {
        return false;
    }
};

var Store = function Store(storage) {
    this.storage = storage;
    this.storage.getObject = getObject;
    this.storage.setObject = setObject;
};

Store.prototype = {
    get: function get(key) {
        return this.storage.getItem(key) || undefined;
    },
    set: function set(key, value) {
        if (typeof value !== 'undefined') {
            this.storage.setItem(key, value);
        }
    },
    getObject: function getObject(key) {
        return typeof this.storage.getObject === 'function' // Prevent runtime error in IE
        ? this.storage.getObject(key) : JSON.parse(this.storage.getItem(key) || '{}');
    },
    setObject: function setObject(key, value) {
        if (typeof this.storage.setObject === 'function') {
            // Prevent runtime error in IE
            this.storage.setObject(key, value);
        } else {
            this.storage.setItem(key, JSON.stringify(value));
        }
    },
    remove: function remove(key) {
        this.storage.removeItem(key);
    },
    clear: function clear() {
        this.storage.clear();
    }
};

var InScriptStore = function InScriptStore(object) {
    this.store = typeof object !== 'undefined' ? object : {};
};

InScriptStore.prototype = {
    get: function get(key) {
        return getPropertyValue(this.store, key);
    },
    set: function set(k, value) {
        var obj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.store;

        var key = k;
        if (!Array.isArray(key)) key = [key];
        if (key.length > 1) {
            if (!(key[0] in obj) || isEmptyObject(obj[key[0]])) obj[key[0]] = {};
            this.set(key.slice(1), value, obj[key[0]]);
        } else {
            obj[key[0]] = value;
        }
    },
    getObject: function getObject(key) {
        return JSON.parse(this.get(key) || '{}');
    },
    setObject: function setObject(key, value) {
        this.set(key, JSON.stringify(value));
    },
    remove: function remove() {
        var _this = this;

        for (var _len = arguments.length, keys = Array(_len), _key = 0; _key < _len; _key++) {
            keys[_key] = arguments[_key];
        }

        keys.forEach(function (key) {
            delete _this.store[key];
        });
    },
    clear: function clear() {
        this.store = {};
    },
    has: function has(key) {
        return this.get(key) !== undefined;
    },
    keys: function keys() {
        return Object.keys(this.store);
    },
    call: function call(key) {
        if (typeof this.get(key) === 'function') this.get(key)();
    }
};

var State = new InScriptStore();
State.prototype = InScriptStore.prototype;
/**
 * Shorthand function to get values from response object of State
 *
 * @param {String} pathname
 *     e.g. getResponse('authorize.currency') == get(['response', 'authorize', 'authorize', 'currency'])
 */
State.prototype.getResponse = function (pathname) {
    var path = pathname;
    if (typeof path === 'string') {
        var _keys = path.split('.');
        path = ['response', _keys[0]].concat(_keys);
    }
    return this.get(path);
};
State.set('response', {});

var CookieStorage = function CookieStorage(cookie_name, cookie_domain) {
    var hostname = window.location.hostname;

    this.initialized = false;
    this.cookie_name = cookie_name;
    this.domain = cookie_domain || (isProduction() ? '.' + hostname.split('.').slice(-2).join('.') : hostname);
    this.path = '/';
    this.expires = new Date('Thu, 1 Jan 2037 12:00:00 GMT');
    this.value = {};
};

CookieStorage.prototype = {
    read: function read() {
        var cookie_value = Cookies.get(this.cookie_name);
        try {
            this.value = cookie_value ? JSON.parse(cookie_value) : {};
        } catch (e) {
            this.value = {};
        }
        this.initialized = true;
    },
    write: function write(val, expireDate, isSecure) {
        if (!this.initialized) this.read();
        this.value = val;
        if (expireDate) this.expires = expireDate;
        Cookies.set(this.cookie_name, this.value, {
            expires: this.expires,
            path: this.path,
            domain: this.domain,
            secure: !!isSecure
        });
    },
    get: function get(key) {
        if (!this.initialized) this.read();
        return this.value[key];
    },
    set: function set(key, val) {
        if (!this.initialized) this.read();
        this.value[key] = val;
        Cookies.set(this.cookie_name, this.value, {
            expires: new Date(this.expires),
            path: this.path,
            domain: this.domain
        });
    },
    remove: function remove() {
        Cookies.remove(this.cookie_name, {
            path: this.path,
            domain: this.domain
        });
    }
};

var removeCookies = function removeCookies() {
    for (var _len2 = arguments.length, cookie_names = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        cookie_names[_key2] = arguments[_key2];
    }

    var domains = ['.' + document.domain.split('.').slice(-2).join('.'), '.' + document.domain];

    var parent_path = window.location.pathname.split('/', 2)[1];
    if (parent_path !== '') {
        parent_path = '/' + parent_path;
    }

    cookie_names.forEach(function (c) {
        Cookies.remove(c, { path: '/', domain: domains[0] });
        Cookies.remove(c, { path: '/', domain: domains[1] });
        Cookies.remove(c);
        if (new RegExp(c).test(document.cookie) && parent_path) {
            Cookies.remove(c, { path: parent_path, domain: domains[0] });
            Cookies.remove(c, { path: parent_path, domain: domains[1] });
            Cookies.remove(c, { path: parent_path });
        }
    });
};

var SessionStore = void 0,
    LocalStore = void 0;

if (isStorageSupported(window.localStorage)) {
    LocalStore = new Store(window.localStorage);
}
if (isStorageSupported(window.sessionStorage)) {
    SessionStore = new Store(window.sessionStorage);
}

if (!LocalStore) {
    LocalStore = new InScriptStore();
}
if (!SessionStore) {
    SessionStore = new InScriptStore();
}

module.exports = {
    isStorageSupported: isStorageSupported,
    CookieStorage: CookieStorage,
    removeCookies: removeCookies,
    State: State,
    SessionStore: SessionStore,
    LocalStore: LocalStore
};

/***/ }),

/***/ "./src/javascript/_common/url.js":
/*!***************************************!*\
  !*** ./src/javascript/_common/url.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var urlForLanguage = __webpack_require__(/*! ./language */ "./src/javascript/_common/language.js").urlFor;
var urlLang = __webpack_require__(/*! ./language */ "./src/javascript/_common/language.js").urlLang;
var getCurrentProductionDomain = __webpack_require__(/*! ../config */ "./src/javascript/config.js").getCurrentProductionDomain;
__webpack_require__(/*! url-polyfill */ "./node_modules/url-polyfill/url-polyfill.js");

var Url = function () {
    var location_url = void 0,
        static_host = void 0;

    var reset = function reset() {
        location_url = window ? window.location : location_url;
    };

    var params = function params(href) {
        var arr_params = [];
        var parsed = ((href ? new URL(href) : location_url).search || '').substr(1).split('&');
        var p_l = parsed.length;
        while (p_l--) {
            var param = parsed[p_l].split('=');
            arr_params.push(param);
        }
        return arr_params;
    };

    var paramsHash = function paramsHash(href) {
        var param_hash = {};
        var arr_params = params(href);
        var param = arr_params.length;
        while (param--) {
            if (arr_params[param][0]) {
                param_hash[arr_params[param][0]] = arr_params[param][1] || '';
            }
        }
        return param_hash;
    };

    var normalizePath = function normalizePath(path) {
        return path ? path.replace(/(^\/|\/$|[^a-zA-Z0-9-_/])/g, '') : '';
    };

    var urlFor = function urlFor(path, pars, language) {
        var should_change_to_legacy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        var lang = (language || urlLang()).toLowerCase();
        // url language might differ from passed language, so we will always replace using the url language
        var url_lang = language ? urlLang().toLowerCase() : lang;
        var url = window.location.href;
        var domain = url.substring(0, url.indexOf('/' + url_lang + '/') + url_lang.length + 2);
        if (should_change_to_legacy) {
            domain = domain.replace(/\/app/, '');
        }
        var new_url = '' + domain + (normalizePath(path) || 'home') + '.html' + (pars ? '?' + pars : '');
        // replace old lang with new lang
        return urlForLanguage(lang, new_url);
    };

    var default_domain = 'binary.com';
    var host_map = { // the exceptions regarding updating the URLs
        'bot.binary.com': 'www.binary.bot',
        'developers.binary.com': 'developers.binary.com', // same, shouldn't change
        'academy.binary.com': 'academy.binary.com',
        'tech.binary.com': 'tech.binary.com',
        'blog.binary.com': 'blog.binary.com'
    };

    var urlForCurrentDomain = function urlForCurrentDomain(href) {
        var current_domain = getCurrentProductionDomain();

        if (!current_domain) {
            return href; // don't change when domain is not supported
        }

        var url_object = new URL(href);
        if (Object.keys(host_map).includes(url_object.hostname)) {
            url_object.hostname = host_map[url_object.hostname];
        } else if (url_object.hostname.indexOf(default_domain) !== -1) {
            // to keep all non-Binary links unchanged, we use default domain for all Binary links in the codebase (javascript and templates)
            url_object.hostname = url_object.hostname.replace(new RegExp('\\.' + default_domain, 'i'), '.' + current_domain);
        } else {
            return href;
        }

        return url_object.href;
    };

    var urlForStatic = function urlForStatic() {
        var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        if (!static_host || static_host.length === 0) {
            static_host = document.querySelector('script[src*="vendor.min.js"]');
            if (static_host) {
                static_host = static_host.getAttribute('src');
            }

            if (static_host && static_host.length > 0) {
                static_host = static_host.substr(0, static_host.indexOf('/js/') + 1);
            } else {
                static_host = Url.websiteUrl();
            }
        }

        return static_host + path.replace(/(^\/)/g, '');
    };

    return {
        reset: reset,
        paramsHash: paramsHash,
        urlFor: urlFor,
        urlForCurrentDomain: urlForCurrentDomain,
        urlForStatic: urlForStatic,

        param: function param(name) {
            return paramsHash()[name];
        },
        websiteUrl: function websiteUrl() {
            return location.protocol + '//' + location.hostname + '/';
        },
        getHostMap: function getHostMap() {
            return host_map;
        },
        resetStaticHost: function resetStaticHost() {
            static_host = undefined;
        }
    };
}();

module.exports = Url;

/***/ }),

/***/ "./src/javascript/_common/utility.js":
/*!*******************************************!*\
  !*** ./src/javascript/_common/utility.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var extend = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");
__webpack_require__(/*! ./lib/polyfills/element.matches */ "./src/javascript/_common/lib/polyfills/element.matches.js");

var template = function template(string, content) {
    var to_replace = content;
    if (content && !Array.isArray(content)) {
        to_replace = [content];
    }
    return string.replace(/\[_(\d+)]/g, function (s, index) {
        return to_replace[+index - 1];
    });
};

var isEmptyObject = function isEmptyObject(obj) {
    var is_empty = true;
    if (obj && obj instanceof Object) {
        Object.keys(obj).forEach(function (key) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) is_empty = false;
        });
    }
    return is_empty;
};

var cloneObject = function cloneObject(obj) {
    return !isEmptyObject(obj) ? extend(true, Array.isArray(obj) ? [] : {}, obj) : obj;
};

var isDeepEqual = function isDeepEqual(a, b) {
    if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== (typeof b === 'undefined' ? 'undefined' : _typeof(b))) {
        return false;
    } else if (Array.isArray(a)) {
        return isEqualArray(a, b);
    } else if (a && b && (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
        return isEqualObject(a, b);
    }
    // else
    return a === b;
};

var isEqualArray = function isEqualArray(arr1, arr2) {
    return arr1 === arr2 || arr1.length === arr2.length && arr1.every(function (value, idx) {
        return isDeepEqual(value, arr2[idx]);
    });
};

var isEqualObject = function isEqualObject(obj1, obj2) {
    return obj1 === obj2 || Object.keys(obj1).length === Object.keys(obj2).length && Object.keys(obj1).every(function (key) {
        return isDeepEqual(obj1[key], obj2[key]);
    });
};

// Filters out duplicates in an array of objects by key
var unique = function unique(array, key) {
    return array.filter(function (e, idx) {
        return array.findIndex(function (a, i) {
            return a[key] ? a[key] === e[key] : i === idx;
        }) === idx;
    });
};

var getPropertyValue = function getPropertyValue(obj, k) {
    var keys = k;
    if (!Array.isArray(keys)) keys = [keys];
    if (!isEmptyObject(obj) && keys[0] in obj && keys && keys.length > 1) {
        return getPropertyValue(obj[keys[0]], keys.slice(1));
    }
    // else return clone of object to avoid overwriting data
    return obj ? cloneObject(obj[keys[0]]) : undefined;
};

/**
 * Creates a DOM element and adds any attributes to it.
 *
 * @param {String} tag_name: the tag to create, e.g. 'div', 'a', etc
 * @param {Object} attributes: all the attributes to assign, e.g. { id: '...', class: '...', html: '...', ... }
 * @return the created DOM element
 */
var createElement = function createElement(tag_name) {
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var el = document.createElement(tag_name);
    Object.keys(attributes).forEach(function (attr) {
        var value = attributes[attr];
        if (attr === 'text') {
            el.textContent = value;
        } else if (attr === 'html') {
            el.html(value);
        } else {
            el.setAttribute(attr, value);
        }
    });
    return el;
};

var static_hash = void 0;
var getStaticHash = function getStaticHash() {
    static_hash = static_hash || (document.querySelector('script[src*="binary"]').getAttribute('src') || '').split('?')[1];
    return static_hash;
};

var PromiseClass = function PromiseClass() {
    var _this = this;

    _classCallCheck(this, PromiseClass);

    this.promise = new Promise(function (resolve, reject) {
        _this.reject = reject;
        _this.resolve = resolve;
    });
};

module.exports = {
    template: template,
    isEmptyObject: isEmptyObject,
    cloneObject: cloneObject,
    isDeepEqual: isDeepEqual,
    unique: unique,
    getPropertyValue: getPropertyValue,
    createElement: createElement,
    getStaticHash: getStaticHash,
    PromiseClass: PromiseClass
};

/***/ }),

/***/ "./src/javascript/config.js":
/*!**********************************!*\
  !*** ./src/javascript/config.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// const Cookies = require('js-cookie');

/*
 * Configuration values needed in js codes
 *
 * NOTE:
 * Please use the following command to avoid accidentally committing personal changes
 * git update-index --assume-unchanged src/javascript/config.js
 *
 */
var domain_app_ids = { // these domains as supported "production domains"
    'deriv.com': 16929
};

var getCurrentProductionDomain = function getCurrentProductionDomain() {
    return Object.keys(domain_app_ids).find(function (domain) {
        return new RegExp('.' + domain + '$', 'i').test(window.location.hostname);
    });
};

var isProduction = function isProduction() {
    var all_domains = Object.keys(domain_app_ids).map(function (domain) {
        return 'www\\.' + domain.replace('.', '\\.');
    });
    return new RegExp('^(' + all_domains.join('|') + ')$', 'i').test(window.location.hostname);
};

var binary_desktop_app_id = 14473;

var getAppId = function getAppId() {
    var app_id = null;
    var user_app_id = ''; // you can insert Application ID of your registered application here
    var config_app_id = window.localStorage.getItem('config.app_id');
    var is_new_app = /\/app\//.test(window.location.pathname);
    if (config_app_id) {
        app_id = config_app_id;
    } else if (/desktop-app/i.test(window.location.href) || window.localStorage.getItem('config.is_desktop_app')) {
        window.localStorage.removeItem('config.default_app_id');
        window.localStorage.setItem('config.is_desktop_app', 1);
        app_id = binary_desktop_app_id;
    } else if (/staging\.binary\.com/i.test(window.location.hostname)) {
        window.localStorage.removeItem('config.default_app_id');
        app_id = is_new_app ? 16303 : 1098;
    } else if (user_app_id.length) {
        window.localStorage.setItem('config.default_app_id', user_app_id); // it's being used in endpoint chrome extension - please do not remove
        app_id = user_app_id;
    } else if (/localhost/i.test(window.location.hostname)) {
        app_id = 1159;
    } else {
        window.localStorage.removeItem('config.default_app_id');
        var current_domain = getCurrentProductionDomain();
        // TODO: remove is_new_app && deriv.com check when repos are split
        app_id = is_new_app && current_domain !== 'deriv.com' ? 15265 : domain_app_ids[current_domain] || 1;
    }
    return app_id;
};

var getSocketURL = function getSocketURL() {
    var server_url = window.localStorage.getItem('config.server_url');
    if (!server_url) {
        // const to_green_percent = { real: 100, virtual: 0, logged_out: 0 }; // default percentage
        // const category_map     = ['real', 'virtual', 'logged_out'];
        // const percent_values   = Cookies.get('connection_setup'); // set by GTM
        //
        // // override defaults by cookie values
        // if (percent_values && percent_values.indexOf(',') > 0) {
        //     const cookie_percents = percent_values.split(',');
        //     category_map.map((cat, idx) => {
        //         if (cookie_percents[idx] && !isNaN(cookie_percents[idx])) {
        //             to_green_percent[cat] = +cookie_percents[idx].trim();
        //         }
        //     });
        // }

        // let server = 'blue';
        // if (/www\.binary\.com/i.test(window.location.hostname)) {
        //     const loginid = window.localStorage.getItem('active_loginid');
        //     let client_type = category_map[2];
        //     if (loginid) {
        //         client_type = /^VRT/.test(loginid) ? category_map[1] : category_map[0];
        //     }
        //
        //     const random_percent = Math.random() * 100;
        //     if (random_percent < to_green_percent[client_type]) {
        //         server = 'green';
        //     }
        // }

        // TODO: in order to use connection_setup config, uncomment the above section and remove next lines

        var loginid = window.localStorage.getItem('active_loginid');
        var is_real = loginid && !/^VRT/.test(loginid);
        var server = isProduction() && is_real ? 'green' : 'blue';

        server_url = server + '.binaryws.com';
    }
    return 'wss://' + server_url + '/websockets/v3';
};

module.exports = {
    getCurrentProductionDomain: getCurrentProductionDomain,
    isProduction: isProduction,
    getAppId: getAppId,
    getSocketURL: getSocketURL
};

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
__webpack_require__(/*! promise-polyfill */ "./node_modules/promise-polyfill/promise.js");
__webpack_require__(/*! ./_common/lib/polyfills/nodelist.foreach */ "./src/javascript/_common/lib/polyfills/nodelist.foreach.js");
__webpack_require__(/*! ./_common/lib/polyfills/element.closest */ "./src/javascript/_common/lib/polyfills/element.closest.js");

// used by gtm to update page after a new release
window.check_new_release = __webpack_require__(/*! ./_common/check_new_release */ "./src/javascript/_common/check_new_release.js").checkNewRelease;

__webpack_require__(/*! event-source-polyfill */ "./node_modules/event-source-polyfill/eventsource.js");
__webpack_require__(/*! ./_common/lib/plugins */ "./src/javascript/_common/lib/plugins.js");

/***/ })

/******/ });
//# sourceMappingURL=binary.js.map