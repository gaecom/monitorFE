!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/js/",n(n.s="QfWi")}({"/tra":function(t,e,n){"use strict";function o(){return this.data=[],this}o.prototype={_get(){return this.data},_set(t){this.data.push(t)}},t.exports=o},"20nU":function(t,e,n){"use strict";function o(t){this._extend(this,t)}o.prototype={https:!0,post:!0,url:"/monitor",_extend:(t,e)=>(Object.keys(e).map(n=>{t[n]=e[n]}),t)},t.exports=o},QfWi:function(t,e,n){"use strict";var o,r=(o=n("tjUo"))&&o.__esModule?o:{default:o};!function(t){t.initMonitor||(t.initMonitor=r.default)}(window)},f6yO:function(t,e,n){"use strict";var o=a(n("20nU")),r=n("xziN"),i=a(n("/tra"));function a(t){return t&&t.__esModule?t:{default:t}}function s(t){let e=this,n=new o.default(t);e._config=n,e._config.protocol=window.location.protocol+"//",n.https&&(e._config.protocol="https://");const r=new i.default;e._eventCenter=r,e._initListenJS(),e._initListenAjax()}s.prototype={_initListenJS:function(){const t=this;let e=function(e){(0,r.getJsError)(e,t._config)};window.addEventListener("unhandledrejection",e),t._setEvent({type:"unhandledrejection",func:e});let n=function(e){if(e.cancelable){if(e.filename.indexOf("monitor")>-1)return;(0,r.getJsError)(e,t._config)}else(0,r.geetResourceError)(e,t._config)};window.addEventListener("error",n,!0),t._setEvent({type:"error",func:n})},_initListenAjax:function(){function t(t){var e=new CustomEvent(t,{detail:this});window.dispatchEvent(e)}var e=window.XMLHttpRequest;window.XMLHttpRequest=function(){var n=new e;return n.addEventListener("load",function(){t.call(this,"ajaxLoad")},!1),n.addEventListener("timeout",function(){t.call(this,"ajaxTimeout")},!1),n.addEventListener("readystatechange",function(){t.call(this,"ajaxReadyStateChange")},!1),n},this._startLintenAjax()},_startLintenAjax:function(){const t=this;let e=function(e){!(e.detail.responseURL.indexOf(t._config.url)>-1)&&(0,r.ajaxError)(e,t._config)};window.addEventListener("ajaxTimeout",e),t._setEvent({type:"ajaxTimeout",func:e});let n=function(e){!(e.detail.responseURL.indexOf(t._config.url)>-1)&&(0,r.ajaxError)(e,t._config)};window.addEventListener("ajaxLoad",n),t._setEvent({type:"ajaxLoad",func:n})},_getEvent:function(){return this._eventCenter._get()},_setEvent:function(t){this._eventCenter._set(t)}},t.exports=s},oLOV:function(t,e,n){"use strict";const o={canAjax:function(){return window.XMLHttpRequest&&window.JSON},post:function(t,e,n){var o=new XMLHttpRequest;o.open("post",t,!0),o.setRequestHeader("content-type","application/json;charset=utf-8"),o.setRequestHeader("Accept","application/json"),o.withCredentials=!0,o.timeout=n||3e4,o.onload=function(){1===window.JSON.parse(o.responseText).status&&changeStatus()},o.onreadystatechange=function(){if(4===o.readyState){if(200!==o.status)throw new Error("网络请求错误，请稍后再试～");1===window.JSON.parse(o.responseText).status&&changeStatus()}},o.send(window.JSON.stringify(e))},getWraper:function(t,e,n){(new e)._geWrap()}};t.exports={ajax:o}},"pB/M":function(t,e,n){"use strict";function o(){this.data=this._geWrap()}o.prototype={_geWrap:function(){let t={},e=window.navigator;return t.userAgent=e.userAgent,t.appName=e.appName,t.appVersion=e.appVersion,t.cpuClass=e.cpuClass,t.platform=e.platform,t.product=e.product,t.language=e.language,t.url=window.location.href,t.time=(new Date).getTime(),t},_getIP:function(t){var e=new(window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection)({iceServers:[{urls:"stun:stun01.sipphone.com"},{urls:"stun:stun.ekiga.net"},{urls:"stun:stun.fwdnet.net"},{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.l.google.com:19302"}]}),n=function(){},o={},r=/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;function i(e){o[e]||t(e),o[e]=!0}e.createDataChannel(""),e.createOffer().then(function(t){t.sdp.split("\n").forEach(function(t){t.indexOf("candidate")<0||t.match(r).forEach(i)}),e.setLocalDescription(t,n,n)}).catch(function(t){}),e.onicecandidate=function(t){t&&t.candidate&&t.candidate.candidate&&t.candidate.candidate.match(r)&&t.candidate.candidate.match(r).forEach(i)}},_getErrorMessage:function(t,e){let n=this._geWrap();return this._getIP(function(t){n.ip=t}),n.detail={},"ajaxLoad"===t.type?(n.detail.responseURL=t.detail.responseURL,n.detail.status=t.detail.status,n.detail.statusText=t.detail.statusText,n.detail.type="ajaxLoad"):"error"===t.type?(n.detail.message=t.message,n.detail.line=t.lineno,n.detail.filename=t.filename,n.detail.type="error"):e&&(n.detail.src=t.target.src,n.detail.type="resource"),n},_getCallStack(){for(var t="#",e=arguments.callee;e=e.caller;)t=t+""+e.name,0;return t}},t.exports=o},tjUo:function(t,e,n){"use strict";var o=i(n("f6yO")),r=i(n("y11X"));function i(t){return t&&t.__esModule?t:{default:t}}t.exports=function(t,e){const n=new o.default(t);return e(new r.default(n)),n}},xziN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.geetResourceError=e.getJsError=e.ajaxError=e.getServerError=void 0;var o,r=n("oLOV"),i=(o=n("pB/M"))&&o.__esModule?o:{default:o};e.getServerError=function(){};e.ajaxError=function(t,e){if("ajaxLoad"===t.type&&t.detail.status>=400){let n=(new i.default)._getErrorMessage(t);r.ajax.post(e.protocol+e.url,n,function(){},function(t){console.log(t)})}};e.getJsError=function(t,e){let n=(new i.default)._getErrorMessage(t);r.ajax.post(e.protocol+e.url,n,function(){},function(t){console.log(t)})};e.geetResourceError=function(t,e){let n=(new i.default)._getErrorMessage(t);r.ajax.post(e.protocol+e.url,n,function(){},function(t){console.log(t)})}},y11X:function(t,e,n){"use strict";function o(t){return this._InitMonitor=t,this}o.prototype={_destory:function(){const t=this._InitMonitor._getEvent();for(let e=0;e<t.length;e++)"error"===t[e].type?window.removeEventListener(t[e].type,t[e].func,!0):window.removeEventListener(t[e].type,t[e].func)}},t.exports=o}});