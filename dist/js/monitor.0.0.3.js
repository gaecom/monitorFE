!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/js/",n(n.s="QfWi")}({"/tra":function(e,t,n){"use strict";function o(){return this.data=[],this.record=[],this}o.prototype={_get(){return this.data},_getRecord(){return this.record},_set(e){this.data.push(e)},_setRecord(e){this.record.push(e)},_clearRecord(){this.record.splice(0,this.record.length)}},e.exports=o},"20nU":function(e,t,n){"use strict";function o(e){this._extend(this,e)}o.prototype={https:!0,post:!0,url:"/monitor",record:!1,_extend:(e,t)=>(Object.keys(t).map(n=>{e[n]=t[n]}),e)},e.exports=o},QfWi:function(e,t,n){"use strict";var o,r=(o=n("tjUo"))&&o.__esModule?o:{default:o};!function(e){e.initMonitor||(e.initMonitor=r.default)}(window)},f6yO:function(e,t,n){"use strict";var o=n("ilLZ"),r=s(n("20nU")),i=n("xziN"),a=s(n("/tra"));function s(e){return e&&e.__esModule?e:{default:e}}function c(e){let t=this,n=new r.default(e);t._config=n,t._config.protocol=window.location.protocol+"//",n.https&&(t._config.protocol="https://");const o=new a.default;t._eventCenter=o,t._initListenJS(),t._initListenAjax(),e.record&&t._initRrweb()}c.prototype={_initListenJS(){const e=this;let t=function(t){(0,i.getJsError)(t,e)};window.addEventListener("unhandledrejection",t),e._setEvent({type:"unhandledrejection",func:t});let n=function(t){if(t.cancelable){if(t.filename.indexOf("monitor")>-1)return;(0,i.getJsError)(t,e)}else(0,i.geetResourceError)(t,e)};window.addEventListener("error",n,!0),e._setEvent({type:"error",func:n})},_initListenAjax(){function e(e){var t=new CustomEvent(e,{detail:this});window.dispatchEvent(t)}var t=window.XMLHttpRequest;window.XMLHttpRequest=function(){var n=new t;return n.addEventListener("load",function(){e.call(this,"ajaxLoad")},!1),n.addEventListener("timeout",function(){e.call(this,"ajaxTimeout")},!1),n.addEventListener("readystatechange",function(){e.call(this,"ajaxReadyStateChange")},!1),n},this._startLintenAjax()},_startLintenAjax(){const e=this;let t=function(t){!(t.detail.responseURL.indexOf(e._config.url)>-1)&&(0,i.ajaxError)(t,e)};window.addEventListener("ajaxTimeout",t),e._setEvent({type:"ajaxTimeout",func:t});let n=function(t){!(t.detail.responseURL.indexOf(e._config.url)>-1)&&(0,i.ajaxError)(t,e)};window.addEventListener("ajaxLoad",n),e._setEvent({type:"ajaxLoad",func:n})},_getEvent(){return this._eventCenter._get()},_getRrwebEvent(){return this._eventCenter._getRecord()},_setEvent:function(e){this._eventCenter._set(e)},_clearEvent(){this._eventCenter._clearRecord()},_initRrweb(){const e=this;(0,o.record)({emit(t){e._eventCenter._setRecord(t)}})}},e.exports=c},ilLZ:function(e,t,n){"use strict";n.r(t),n.d(t,"record",function(){return H}),n.d(t,"Replayer",function(){return G}),n.d(t,"mirror",function(){return S}),n.d(t,"EventType",function(){return w}),n.d(t,"IncrementalSource",function(){return E}),n.d(t,"MouseInteractions",function(){return x}),n.d(t,"ReplayerEvents",function(){return _});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var o,r=function(){return(r=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};!function(e){e[e.Document=0]="Document",e[e.DocumentType=1]="DocumentType",e[e.Element=2]="Element",e[e.Text=3]="Text",e[e.CDATA=4]="CDATA",e[e.Comment=5]="Comment"}(o||(o={}));var i=1;function a(e){try{var t=e.rules||e.cssRules;return t?Array.from(t).reduce(function(e,t){return e+(function(e){return"styleSheet"in e}(n=t)?a(n.styleSheet)||"":n.cssText);var n},""):null}catch(e){return null}}var s=/url\((?:'([^']*)'|"([^"]*)"|([^)]*))\)/gm,c=/^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/).*/,l=/^(data:)([\w\/\+]+);(charset=[\w-]+|base64).*,(.*)/gi;function u(e,t){return e.replace(s,function(e,n,o,r){var i,a=n||o||r;if(!a)return e;if(!c.test(a))return"url('"+a+"')";if(l.test(a))return"url("+a+")";if("/"===a[0])return"url('"+(((i=t).indexOf("//")>-1?i.split("/").slice(0,3).join("/"):i.split("/")[0]).split("?")[0]+a)+"')";var s=t.split("/"),u=a.split("/");s.pop();for(var d=0,f=u;d<f.length;d++){var p=f[d];"."!==p&&(".."===p?s.pop():s.push(p))}return"url('"+s.join("/")+"')"})}function d(e,t){var n=e.createElement("a");return n.href=t,n.href}function f(e,t,n,r,s,c,l){void 0===s&&(s=!1),void 0===c&&(c=!0),void 0===l&&(l=!1);var p,h=function(e,t,n,r,i){switch(e.nodeType){case e.DOCUMENT_NODE:return{type:o.Document,childNodes:[]};case e.DOCUMENT_TYPE_NODE:return{type:o.DocumentType,name:e.name,publicId:e.publicId,systemId:e.systemId};case e.ELEMENT_NODE:var s=!1;"string"==typeof n?s=e.classList.contains(n):e.classList.forEach(function(e){n.test(e)&&(s=!0)});for(var c=e.tagName.toLowerCase(),l={},f=0,p=Array.from(e.attributes);f<p.length;f++){var h=p[f],m=h.name,v=h.value;l[m]="src"===m||"href"===m?d(t,v):"style"===m?u(v,location.href):v}if("link"===c&&r){var g,y=Array.from(t.styleSheets).find(function(t){return t.href===e.href});(g=a(y))&&(delete l.rel,delete l.href,l._cssText=u(g,y.href))}if("style"===c&&e.sheet&&!e.innerText.trim().length&&(g=a(e.sheet))&&(l._cssText=u(g,location.href)),"input"!==c&&"textarea"!==c&&"select"!==c||(v=e.value,"radio"!==l.type&&"checkbox"!==l.type&&v?l.value=i?"*".repeat(v.length):v:e.checked&&(l.checked=e.checked)),"option"===c){var b=e.parentElement;l.value===b.value&&(l.selected=e.selected)}if(s){var w=e.getBoundingClientRect(),E=w.width,x=w.height;l.rr_width=E+"px",l.rr_height=x+"px"}return{type:o.Element,tagName:c,attributes:l,childNodes:[],isSVG:(T=e,"svg"===T.tagName||T instanceof SVGElement||void 0),needBlock:s};case e.TEXT_NODE:var _=e.parentNode&&e.parentNode.tagName,S=e.textContent,N="STYLE"===_||void 0;return N&&S&&(S=u(S,location.href)),"SCRIPT"===_&&(S="SCRIPT_PLACEHOLDER"),{type:o.Text,textContent:S||"",isStyle:N};case e.CDATA_SECTION_NODE:return{type:o.CDATA,textContent:""};case e.COMMENT_NODE:return{type:o.Comment,textContent:e.textContent||""};default:return!1}var T}(e,t,r,c,l);if(!h)return console.warn(e,"not serialized"),null;p="__sn"in e?e.__sn.id:i++;var m=Object.assign(h,{id:p});e.__sn=m,n[p]=e;var v=!s;if(m.type===o.Element&&(v=v&&!m.needBlock,delete m.needBlock),(m.type===o.Document||m.type===o.Element)&&v)for(var g=0,y=Array.from(e.childNodes);g<y.length;g++){var b=f(y[g],t,n,r,s,c);b&&m.childNodes.push(b)}return m}var p={script:"noscript",altglyph:"altGlyph",altglyphdef:"altGlyphDef",altglyphitem:"altGlyphItem",animatecolor:"animateColor",animatemotion:"animateMotion",animatetransform:"animateTransform",clippath:"clipPath",feblend:"feBlend",fecolormatrix:"feColorMatrix",fecomponenttransfer:"feComponentTransfer",fecomposite:"feComposite",feconvolvematrix:"feConvolveMatrix",fediffuselighting:"feDiffuseLighting",fedisplacementmap:"feDisplacementMap",fedistantlight:"feDistantLight",fedropshadow:"feDropShadow",feflood:"feFlood",fefunca:"feFuncA",fefuncb:"feFuncB",fefuncg:"feFuncG",fefuncr:"feFuncR",fegaussianblur:"feGaussianBlur",feimage:"feImage",femerge:"feMerge",femergenode:"feMergeNode",femorphology:"feMorphology",feoffset:"feOffset",fepointlight:"fePointLight",fespecularlighting:"feSpecularLighting",fespotlight:"feSpotLight",fetile:"feTile",feturbulence:"feTurbulence",foreignobject:"foreignObject",glyphref:"glyphRef",lineargradient:"linearGradient",radialgradient:"radialGradient"};var h=/([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)/g,m=/([^\\]):hover/g;function v(e){return e.replace(h,function(e,t,n){if(m.test(t)){var o=t.replace(m,"$1.\\:hover");return t.replace(/\s*$/,"")+", "+o.replace(/^\s*/,"")+n}return e})}function g(e,t){switch(e.type){case o.Document:return t.implementation.createDocument(null,"",null);case o.DocumentType:return t.implementation.createDocumentType(e.name,e.publicId,e.systemId);case o.Element:var n=function(e){var t=p[e.tagName]?p[e.tagName]:e.tagName;return"link"===t&&e.attributes._cssText&&(t="style"),t}(e),r=void 0;for(var i in r=e.isSVG?t.createElementNS("http://www.w3.org/2000/svg",n):t.createElement(n),e.attributes)if(e.attributes.hasOwnProperty(i)&&!i.startsWith("rr_")){var a=e.attributes[i];a="boolean"==typeof a?"":a;var s="textarea"===n&&"value"===i,c="style"===n&&"_cssText"===i;if(c&&(a=v(a)),s||c){var l=t.createTextNode(a);r.appendChild(l);continue}if("iframe"===n&&"src"===i)continue;try{e.isSVG&&"xlink:href"===i?r.setAttributeNS("http://www.w3.org/1999/xlink",i,a):r.setAttribute(i,a)}catch(e){}}else e.attributes.rr_width&&(r.style.width=e.attributes.rr_width),e.attributes.rr_height&&(r.style.height=e.attributes.rr_height);return r;case o.Text:return t.createTextNode(e.isStyle?v(e.textContent):e.textContent);case o.CDATA:return t.createCDATASection(e.textContent);case o.Comment:return t.createComment(e.textContent);default:return null}}function y(e,t,n,r){void 0===r&&(r=!1);var i=g(e,t);if(!i)return null;if(e.type===o.Document&&(t.close(),t.open(),i=t),i.__sn=e,n[e.id]=i,(e.type===o.Document||e.type===o.Element)&&!r)for(var a=0,s=e.childNodes;a<s.length;a++){var c=s[a],l=y(c,t,n);l?i.appendChild(l):console.warn("Failed to rebuild",c)}return i}function b(e,t,n){void 0===n&&(n=document);var o={capture:!0,passive:!0};return n.addEventListener(e,t,o),function(){return n.removeEventListener(e,t,o)}}var w,E,x,_,S={map:{},getId:function(e){return e.__sn?e.__sn.id:-1},getNode:function(e){return S.map[e]||null},removeNodeFromMap:function(e){var t=e.__sn&&e.__sn.id;delete S.map[t],e.childNodes&&e.childNodes.forEach(function(e){return S.removeNodeFromMap(e)})},has:function(e){return S.map.hasOwnProperty(e)}};function N(e,t,n){void 0===n&&(n={});var o=null,r=0;return function(){var i=Date.now();r||!1!==n.leading||(r=i);var a=t-(i-r),s=this,c=arguments;a<=0||a>t?(o&&(window.clearTimeout(o),o=null),r=i,e.apply(s,c)):o||!1===n.trailing||(o=window.setTimeout(function(){r=!1===n.leading?0:Date.now(),o=null,e.apply(s,c)},a))}}function T(){return window.innerHeight||document.documentElement&&document.documentElement.clientHeight||document.body&&document.body.clientHeight}function C(){return window.innerWidth||document.documentElement&&document.documentElement.clientWidth||document.body&&document.body.clientWidth}function I(e,t){if(!e)return!1;if(e.nodeType===e.ELEMENT_NODE){var n=!1;return"string"==typeof t?n=e.classList.contains(t):e.classList.forEach(function(e){t.test(e)&&(n=!0)}),n||I(e.parentNode,t)}return I(e.parentNode,t)}function M(e){return Boolean(e.changedTouches)}function L(e,t){e.delete(t),t.childNodes.forEach(function(t){return L(e,t)})}function O(e,t){var n=t.parentNode;return!!n&&(!!e.has(n)||O(e,n))}!function(e){e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta"}(w||(w={})),function(e){e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input"}(E||(E={})),function(e){e[e.MouseUp=0]="MouseUp",e[e.MouseDown=1]="MouseDown",e[e.Click=2]="Click",e[e.ContextMenu=3]="ContextMenu",e[e.DblClick=4]="DblClick",e[e.Focus=5]="Focus",e[e.Blur=6]="Blur",e[e.TouchStart=7]="TouchStart",e[e.TouchMove_Departed=8]="TouchMove_Departed",e[e.TouchEnd=9]="TouchEnd"}(x||(x={})),function(e){e.Start="start",e.Pause="pause",e.Resume="resume",e.Resize="resize",e.Finish="finish",e.FullsnapshotRebuilded="fullsnapshot-rebuilded",e.LoadStylesheetStart="load-stylesheet-start",e.LoadStylesheetEnd="load-stylesheet-end",e.SkipStart="skip-start",e.SkipEnd="skip-end",e.MouseInteraction="mouse-interaction"}(_||(_={}));var k=function(e,t){return e+"@"+t};function D(e){return"__sn"in e}function R(e,t,n,o){var r=new MutationObserver(function(r){var i=[],a=[],s=[],c=[],l=new Set,u=new Set,d=new Set,p={},h=function(e,n){if(!I(e,t)){if(D(e)){u.add(e);var o=null;n&&D(n)&&(o=n.__sn.id),o&&(p[k(e.__sn.id,o)]=!0)}else l.add(e),d.delete(e);e.childNodes.forEach(function(e){return h(e)})}};r.forEach(function(e){var n=e.type,o=e.target,r=e.oldValue,c=e.addedNodes,f=e.removedNodes,m=e.attributeName;switch(n){case"characterData":var v=o.textContent;I(o,t)||v===r||i.push({value:v,node:o});break;case"attributes":v=o.getAttribute(m);if(I(o,t)||v===r)return;var g=a.find(function(e){return e.node===o});g||(g={node:o,attributes:{}},a.push(g)),g.attributes[m]=v;break;case"childList":c.forEach(function(e){return h(e,o)}),f.forEach(function(e){var n=S.getId(e),r=S.getId(o);I(e,t)||(l.has(e)?(L(l,e),d.add(e)):l.has(o)&&-1===n||function e(t){var n=S.getId(t);return!S.has(n)||(!t.parentNode||t.parentNode.nodeType!==t.DOCUMENT_NODE)&&(!t.parentNode||e(t.parentNode))}(o)||(u.has(e)&&p[k(n,r)]?L(u,e):s.push({parentId:r,id:n})),S.removeNodeFromMap(e))})}});var m=[],v=function(e){var r=S.getId(e.parentNode);if(-1===r)return m.push(e);c.push({parentId:r,previousId:e.previousSibling?S.getId(e.previousSibling):e.previousSibling,nextId:e.nextSibling?S.getId(e.nextSibling):e.nextSibling,node:f(e,document,S.map,t,!0,n,o)})};for(Array.from(u).forEach(v),Array.from(l).forEach(function(e){O(d,e)||function e(t,n){var o=n.parentNode;if(!o)return!1;var r=S.getId(o);return!!t.some(function(e){return e.id===r})||e(t,o)}(s,e)?O(u,e)?v(e):d.add(e):v(e)});m.length&&!m.every(function(e){return-1===S.getId(e.parentNode)});)v(m.shift());var g={texts:i.map(function(e){return{id:S.getId(e.node),value:e.value}}).filter(function(e){return S.has(e.id)}),attributes:a.map(function(e){return{id:S.getId(e.node),attributes:e.attributes}}).filter(function(e){return S.has(e.id)}),removes:s,adds:c};(g.texts.length||g.attributes.length||g.removes.length||g.adds.length)&&e(g)});return r.observe(document,{attributes:!0,attributeOldValue:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0}),r}function A(e,t){var n=[];return Object.keys(x).filter(function(e){return Number.isNaN(Number(e))&&!e.endsWith("_Departed")}).forEach(function(o){var r=o.toLowerCase(),i=function(n){return function(o){if(!I(o.target,t)){var r=S.getId(o.target),i=M(o)?o.changedTouches[0]:o,a=i.clientX,s=i.clientY;e({type:x[n],id:r,x:a,y:s})}}}(o);n.push(b(r,i))}),function(){n.forEach(function(e){return e()})}}var j=["INPUT","TEXTAREA","SELECT"],F=["color","date","datetime-local","email","month","number","range","search","tel","text","time","url","week"],P=new WeakMap;function B(e,t,n,o){function i(e){var r=e.target;if(r&&r.tagName&&!(j.indexOf(r.tagName)<0)&&!I(r,t)){var i=r.type;if("password"!==i&&!r.classList.contains(n)){var s=r.value,c=!1,l=F.includes(i)||"TEXTAREA"===r.tagName;"radio"===i||"checkbox"===i?c=r.checked:l&&o&&(s="*".repeat(s.length)),a(r,{text:s,isChecked:c});var u=r.name;"radio"===i&&u&&c&&document.querySelectorAll('input[type="radio"][name="'+u+'"]').forEach(function(e){e!==r&&a(e,{text:e.value,isChecked:!c})})}}}function a(t,n){var o=P.get(t);if(!o||o.text!==n.text||o.isChecked!==n.isChecked){P.set(t,n);var i=S.getId(t);e(r({},n,{id:i}))}}var s=["input","change"].map(function(e){return b(e,i)}),c=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value"),l=[[HTMLInputElement.prototype,"value"],[HTMLInputElement.prototype,"checked"],[HTMLSelectElement.prototype,"value"],[HTMLTextAreaElement.prototype,"value"]];return c&&c.set&&s.push.apply(s,l.map(function(e){return function e(t,n,o){var r=Object.getOwnPropertyDescriptor(t,n);return Object.defineProperty(t,n,{set:function(e){var t=this;setTimeout(function(){o.set.call(t,e)},0),r&&r.set&&r.set.call(this,e)}}),function(){return e(t,n,r||{})}}(e[0],e[1],{set:function(){i({target:this})}})})),function(){s.forEach(function(e){return e()})}}function X(e){var t,n,o,r,i,a,s=R(e.mutationCb,e.blockClass,e.inlineStylesheet,e.maskAllInputs),c=(t=e.mousemoveCb,o=[],r=N(function(){var e=Date.now()-n;t(o.map(function(t){return t.timeOffset-=e,t})),o=[],n=null},500),i=N(function(e){var t=e.target,i=M(e)?e.changedTouches[0]:e,a=i.clientX,s=i.clientY;n||(n=Date.now()),o.push({x:a,y:s,id:S.getId(t),timeOffset:Date.now()-n}),r()},50,{trailing:!1}),a=[b("mousemove",i),b("touchmove",i)],function(){a.forEach(function(e){return e()})}),l=A(e.mouseInteractionCb,e.blockClass),u=function(e,t){return b("scroll",N(function(n){if(n.target&&!I(n.target,t)){var o=S.getId(n.target);if(n.target===document){var r=document.scrollingElement||document.documentElement;e({id:o,x:r.scrollLeft,y:r.scrollTop})}else e({id:o,x:n.target.scrollLeft,y:n.target.scrollTop})}},100))}(e.scrollCb,e.blockClass),d=function(e){return b("resize",N(function(){var t=T(),n=C();e({width:Number(n),height:Number(t)})},200),window)}(e.viewportResizeCb),f=B(e.inputCb,e.blockClass,e.ignoreClass,e.maskAllInputs);return function(){s.disconnect(),c(),l(),u(),d(),f()}}function z(e){return r({},e,{timestamp:Date.now()})}function H(e){void 0===e&&(e={});var t,n=e.emit,o=e.checkoutEveryNms,i=e.checkoutEveryNth,a=e.blockClass,s=void 0===a?"rr-block":a,c=e.ignoreClass,l=void 0===c?"rr-ignore":c,u=e.inlineStylesheet,d=void 0===u||u,p=e.maskAllInputs,h=void 0!==p&&p;if(!n)throw new Error("emit function is required");var m=0,v=function(e,r){if(n(e,r),e.type===w.FullSnapshot)t=e,m=0;else if(e.type===w.IncrementalSnapshot){m++;var a=i&&m>=i,s=o&&e.timestamp-t.timestamp>o;(a||s)&&g(!0)}};function g(e){void 0===e&&(e=!1),v(z({type:w.Meta,data:{href:window.location.href,width:C(),height:T()}}),e);var t=function(e,t,n,o){void 0===t&&(t="rr-block"),void 0===n&&(n=!0),void 0===o&&(o=!1);var r={};return[f(e,e,r,t,!1,n,o),r]}(document,s,d,h),n=t[0],o=t[1];if(!n)return console.warn("Failed to snapshot the document");S.map=o,v(z({type:w.FullSnapshot,data:{node:n,initialOffset:{left:document.documentElement.scrollLeft,top:document.documentElement.scrollTop}}}))}try{var y=[];y.push(b("DOMContentLoaded",function(){v(z({type:w.DomContentLoaded,data:{}}))}));var x=function(){g(),y.push(X({mutationCb:function(e){return v(z({type:w.IncrementalSnapshot,data:r({source:E.Mutation},e)}))},mousemoveCb:function(e){return v(z({type:w.IncrementalSnapshot,data:{source:E.MouseMove,positions:e}}))},mouseInteractionCb:function(e){return v(z({type:w.IncrementalSnapshot,data:r({source:E.MouseInteraction},e)}))},scrollCb:function(e){return v(z({type:w.IncrementalSnapshot,data:r({source:E.Scroll},e)}))},viewportResizeCb:function(e){return v(z({type:w.IncrementalSnapshot,data:r({source:E.ViewportResize},e)}))},inputCb:function(e){return v(z({type:w.IncrementalSnapshot,data:r({source:E.Input},e)}))},blockClass:s,ignoreClass:l,maskAllInputs:h,inlineStylesheet:d}))};return"interactive"===document.readyState||"complete"===document.readyState?x():y.push(b("load",function(){v(z({type:w.Load,data:{}})),x()},window)),function(){y.forEach(function(e){return e()})}}catch(e){console.warn(e)}}function U(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map(function(e){e(n)}),(e["*"]||[]).slice().map(function(e){e(t,n)})}}}var V=Object.freeze({default:U});var W=function(e,t){return e(t={exports:{}},t.exports),t.exports}(function(e,t){!function(){e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==e.__forceSmoothScrollPolyfill__)){var n,o=e.HTMLElement||e.Element,r=468,i={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:o.prototype.scroll||c,scrollIntoView:o.prototype.scrollIntoView},a=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,s=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?h.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):i.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(l(arguments[0])?i.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==l(arguments[0])){var e=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==l(arguments[0])){var n=function(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host;return e}(this),o=n.getBoundingClientRect(),r=this.getBoundingClientRect();n!==t.body?(h.call(this,n,n.scrollLeft+r.left-o.left,n.scrollTop+r.top-o.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(e,t){this.scrollLeft=e,this.scrollTop=t}function l(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function u(e,t){return"Y"===t?e.clientHeight+s<e.scrollHeight:"X"===t?e.clientWidth+s<e.scrollWidth:void 0}function d(t,n){var o=e.getComputedStyle(t,null)["overflow"+n];return"auto"===o||"scroll"===o}function f(e){var t=u(e,"Y")&&d(e,"Y"),n=u(e,"X")&&d(e,"X");return t||n}function p(t){var n,o,i,s,c=(a()-t.startTime)/r;s=c=c>1?1:c,n=.5*(1-Math.cos(Math.PI*s)),o=t.startX+(t.x-t.startX)*n,i=t.startY+(t.y-t.startY)*n,t.method.call(t.scrollable,o,i),o===t.x&&i===t.y||e.requestAnimationFrame(p.bind(e,t))}function h(n,o,r){var s,l,u,d,f=a();n===t.body?(s=e,l=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,d=i.scroll):(s=n,l=n.scrollLeft,u=n.scrollTop,d=c),p({scrollable:s,method:d,startTime:f,startX:l,startY:u,x:o,y:r})}}}}()}).polyfill,Y=function(){function e(e,t){void 0===t&&(t=[]),this.timeOffset=0,this.actions=t,this.config=e}return e.prototype.addAction=function(e){var t=this.findActionIndex(e);this.actions.splice(t,0,e)},e.prototype.addActions=function(e){var t;(t=this.actions).push.apply(t,e)},e.prototype.start=function(){this.actions.sort(function(e,t){return e.delay-t.delay}),this.timeOffset=0;var e=performance.now(),t=this.actions,n=this.config,o=this;this.raf=requestAnimationFrame(function r(i){for(o.timeOffset+=(i-e)*n.speed,e=i;t.length;){var a=t[0];if(!(o.timeOffset>=a.delay))break;t.shift(),a.doAction()}(t.length>0||o.config.liveMode)&&(o.raf=requestAnimationFrame(r))})},e.prototype.clear=function(){this.raf&&cancelAnimationFrame(this.raf),this.actions.length=0},e.prototype.findActionIndex=function(e){for(var t=0,n=this.actions.length-1;t<=n;){var o=Math.floor((t+n)/2);if(this.actions[o].delay<e.delay)t=o+1;else{if(!(this.actions[o].delay>e.delay))return o;n=o-1}}return t},e}(),q=U||V,G=function(){function e(e,t){if(this.events=[],this.emitter=q(),this.baselineTime=0,this.noramlSpeed=-1,this.missingNodeRetryMap={},e.length<2)throw new Error("Replayer need at least 2 events.");this.events=e,this.handleResize=this.handleResize.bind(this);var n={speed:1,root:document.body,loadTimeout:0,skipInactive:!1,showWarning:!0,showDebug:!1,blockClass:"rr-block",liveMode:!1,insertStyleRules:[]};this.config=Object.assign({},n,t),this.timer=new Y(this.config),W(),this.setupDom(),this.emitter.on("resize",this.handleResize)}return e.prototype.on=function(e,t){this.emitter.on(e,t)},e.prototype.setConfig=function(e){var t=this;Object.keys(e).forEach(function(n){t.config[n]=e[n]}),this.config.skipInactive||(this.noramlSpeed=-1)},e.prototype.getMetaData=function(){var e=this.events[0];return{totalTime:this.events[this.events.length-1].timestamp-e.timestamp}},e.prototype.getTimeOffset=function(){return this.baselineTime-this.events[0].timestamp},e.prototype.play=function(e){void 0===e&&(e=0),this.timer.clear(),this.baselineTime=this.events[0].timestamp+e;for(var t=new Array,n=0,o=this.events;n<o.length;n++){var r=o[n],i=r.timestamp<this.baselineTime,a=this.getCastFn(r,i);i?a():t.push({doAction:a,delay:this.getDelay(r)})}this.timer.addActions(t),this.timer.start(),this.emitter.emit(_.Start)},e.prototype.pause=function(){this.timer.clear(),this.emitter.emit(_.Pause)},e.prototype.resume=function(e){void 0===e&&(e=0),this.timer.clear(),this.baselineTime=this.events[0].timestamp+e;for(var t=new Array,n=0,o=this.events;n<o.length;n++){var r=o[n];if(!(r.timestamp<=this.lastPlayedEvent.timestamp||r===this.lastPlayedEvent)){var i=this.getCastFn(r);t.push({doAction:i,delay:this.getDelay(r)})}}this.timer.addActions(t),this.timer.start(),this.emitter.emit(_.Resume)},e.prototype.addEvent=function(e){this.getCastFn(e,!0)()},e.prototype.setupDom=function(){this.wrapper=document.createElement("div"),this.wrapper.classList.add("replayer-wrapper"),this.config.root.appendChild(this.wrapper),this.mouse=document.createElement("div"),this.mouse.classList.add("replayer-mouse"),this.wrapper.appendChild(this.mouse),this.iframe=document.createElement("iframe"),this.iframe.setAttribute("sandbox","allow-same-origin"),this.iframe.setAttribute("scrolling","no"),this.wrapper.appendChild(this.iframe)},e.prototype.handleResize=function(e){this.iframe.width=e.width+"px",this.iframe.height=e.height+"px"},e.prototype.getDelay=function(e){if(e.type===w.IncrementalSnapshot&&e.data.source===E.MouseMove){var t=e.data.positions[0].timeOffset,n=e.timestamp+t;return e.delay=n-this.baselineTime,n-this.baselineTime}return e.delay=e.timestamp-this.baselineTime,e.timestamp-this.baselineTime},e.prototype.getCastFn=function(e,t){var n,o=this;switch(void 0===t&&(t=!1),e.type){case w.DomContentLoaded:case w.Load:break;case w.Meta:n=function(){return o.emitter.emit(_.Resize,{width:e.data.width,height:e.data.height})};break;case w.FullSnapshot:n=function(){o.rebuildFullSnapshot(e),o.iframe.contentWindow.scrollTo(e.data.initialOffset)};break;case w.IncrementalSnapshot:n=function(){if(o.applyIncremental(e,t),e===o.nextUserInteractionEvent&&(o.nextUserInteractionEvent=null,o.restoreSpeed()),o.config.skipInactive&&!o.nextUserInteractionEvent){for(var n=0,r=o.events;n<r.length;n++){var i=r[n];if(!(i.timestamp<=e.timestamp)&&o.isUserInteraction(i)){i.delay-e.delay>1e4*o.config.speed&&(o.nextUserInteractionEvent=i);break}}if(o.nextUserInteractionEvent){o.noramlSpeed=o.config.speed;var a=o.nextUserInteractionEvent.delay-e.delay,s={speed:Math.min(Math.round(a/5e3),360)};o.setConfig(s),o.emitter.emit(_.SkipStart,s)}}}}return function(){n&&n(),o.lastPlayedEvent=e,e===o.events[o.events.length-1]&&(o.restoreSpeed(),o.emitter.emit(_.Finish))}},e.prototype.rebuildFullSnapshot=function(e){var t,n,o;Object.keys(this.missingNodeRetryMap).length&&console.warn("Found unresolved missing node map",this.missingNodeRetryMap),this.missingNodeRetryMap={},S.map=(t=e.data.node,n=this.iframe.contentDocument,o={},[y(t,n,o),o])[1];var r=document.createElement("style"),i=this.iframe.contentDocument,a=i.documentElement,s=i.head;a.insertBefore(r,s);for(var c,l=(c=this.config.blockClass,["iframe, ."+c+" { background: #ccc }","noscript { display: none !important; }"]).concat(this.config.insertStyleRules),u=0;u<l.length;u++)r.sheet.insertRule(l[u],u);this.emitter.emit(_.FullsnapshotRebuilded),this.waitForStylesheetLoad()},e.prototype.waitForStylesheetLoad=function(){var e=this,t=this.iframe.contentDocument.head;if(t){var n,o=new Set;t.querySelectorAll('link[rel="stylesheet"]').forEach(function(t){t.sheet||(0===o.size&&(e.pause(),e.emitter.emit(_.LoadStylesheetStart),n=window.setTimeout(function(){e.resume(e.timer.timeOffset),n=-1},e.config.loadTimeout)),o.add(t),t.addEventListener("load",function(){o.delete(t),0===o.size&&-1!==n&&(e.resume(e.timer.timeOffset),e.emitter.emit(_.LoadStylesheetEnd),n&&window.clearTimeout(n))}))})}},e.prototype.applyIncremental=function(e,t){var n=this,o=e.data;switch(o.source){case E.Mutation:o.removes.forEach(function(e){var t=S.getNode(e.id);if(!t)return n.warnNodeNotFound(o,e.id);var r=S.getNode(e.parentId);if(!r)return n.warnNodeNotFound(o,e.parentId);S.removeNodeFromMap(t),r&&r.removeChild(t)});var i=r({},this.missingNodeRetryMap),a=[],s=function(e){var t=S.getNode(e.parentId);if(!t)return a.push(e);var o=y(e.node,n.iframe.contentDocument,S.map,!0),r=null,s=null;e.previousId&&(r=S.getNode(e.previousId)),e.nextId&&(s=S.getNode(e.nextId)),-1!==e.previousId&&-1!==e.nextId?(r&&r.nextSibling&&r.nextSibling.parentNode?t.insertBefore(o,r.nextSibling):s&&s.parentNode?t.insertBefore(o,s):t.appendChild(o),(e.previousId||e.nextId)&&n.resolveMissingNode(i,t,o,e)):i[e.node.id]={node:o,mutation:e}};for(o.adds.forEach(function(e){s(e)});a.length;){if(a.every(function(e){return!Boolean(S.getNode(e.parentId))}))return a.forEach(function(e){return n.warnNodeNotFound(o,e.node.id)});var c=a.shift();s(c)}Object.keys(i).length&&Object.assign(this.missingNodeRetryMap,i),o.texts.forEach(function(e){var t=S.getNode(e.id);if(!t)return n.warnNodeNotFound(o,e.id);t.textContent=e.value}),o.attributes.forEach(function(e){var t=S.getNode(e.id);if(!t)return n.warnNodeNotFound(o,e.id);for(var r in e.attributes)if("string"==typeof r){var i=e.attributes[r];null!==i?t.setAttribute(r,i):t.removeAttribute(r)}});break;case E.MouseMove:if(t){var l=o.positions[o.positions.length-1];this.moveAndHover(o,l.x,l.y,l.id)}else o.positions.forEach(function(t){var r={doAction:function(){n.moveAndHover(o,t.x,t.y,t.id)},delay:t.timeOffset+e.timestamp-n.baselineTime};n.timer.addAction(r)});break;case E.MouseInteraction:if(-1===o.id)break;var u=new Event(x[o.type].toLowerCase());if(!(d=S.getNode(o.id)))return this.debugNodeNotFound(o,o.id);switch(this.emitter.emit(_.MouseInteraction,{type:o.type,target:d}),o.type){case x.Blur:d.blur&&d.blur();break;case x.Focus:d.focus&&d.focus({preventScroll:!0});break;case x.Click:case x.TouchStart:case x.TouchEnd:t||(this.moveAndHover(o,o.x,o.y,o.id),this.mouse.classList.remove("active"),this.mouse.offsetWidth,this.mouse.classList.add("active"));break;default:d.dispatchEvent(u)}break;case E.Scroll:if(-1===o.id)break;if(!(d=S.getNode(o.id)))return this.debugNodeNotFound(o,o.id);if(d===this.iframe.contentDocument)this.iframe.contentWindow.scrollTo({top:o.y,left:o.x,behavior:t?"auto":"smooth"});else try{d.scrollTop=o.y,d.scrollLeft=o.x}catch(e){}break;case E.ViewportResize:this.emitter.emit(_.Resize,{width:o.width,height:o.height});break;case E.Input:if(-1===o.id)break;var d;if(!(d=S.getNode(o.id)))return this.debugNodeNotFound(o,o.id);try{d.checked=o.isChecked,d.value=o.text}catch(e){}}},e.prototype.resolveMissingNode=function(e,t,n,o){var r=o.previousId,i=o.nextId,a=r&&e[r],s=i&&e[i];if(a){var c=a,l=c.node,u=c.mutation;t.insertBefore(l,n),delete e[u.node.id],delete this.missingNodeRetryMap[u.node.id],(u.previousId||u.nextId)&&this.resolveMissingNode(e,t,l,u)}if(s){var d=s;l=d.node,u=d.mutation;t.insertBefore(l,n.nextSibling),delete e[u.node.id],delete this.missingNodeRetryMap[u.node.id],(u.previousId||u.nextId)&&this.resolveMissingNode(e,t,l,u)}},e.prototype.moveAndHover=function(e,t,n,o){this.mouse.style.left=t+"px",this.mouse.style.top=n+"px";var r=S.getNode(o);if(!r)return this.debugNodeNotFound(e,o);this.hoverElements(r)},e.prototype.hoverElements=function(e){this.iframe.contentDocument.querySelectorAll(".\\:hover").forEach(function(e){e.classList.remove(":hover")});for(var t=e;t;)t.classList.add(":hover"),t=t.parentElement},e.prototype.isUserInteraction=function(e){return e.type===w.IncrementalSnapshot&&(e.data.source>E.Mutation&&e.data.source<=E.Input)},e.prototype.restoreSpeed=function(){if(-1!==this.noramlSpeed){var e={speed:this.noramlSpeed};this.setConfig(e),this.emitter.emit(_.SkipEnd,e),this.noramlSpeed=-1}},e.prototype.warnNodeNotFound=function(e,t){this.config.showWarning&&console.warn("[replayer]","Node with id '"+t+"' not found in",e)},e.prototype.debugNodeNotFound=function(e,t){this.config.showDebug&&console.log("[replayer]","Node with id '"+t+"' not found in",e)},e}()},oLOV:function(e,t,n){"use strict";const o={canAjax:function(){return window.XMLHttpRequest&&window.JSON},post:function(e,t,n){var o=new XMLHttpRequest;o.open("post",e,!0),o.setRequestHeader("content-type","application/json;charset=utf-8"),o.setRequestHeader("Accept","application/json"),o.withCredentials=!0,o.timeout=n||3e4,o.onload=function(){1===window.JSON.parse(o.responseText).status&&changeStatus()},o.onreadystatechange=function(){if(4===o.readyState){if(200!==o.status)throw new Error("网络请求错误，请稍后再试～");1===window.JSON.parse(o.responseText).status&&changeStatus()}},o.send(window.JSON.stringify(t))},getWraper:function(e,t,n){(new t)._geWrap()}};e.exports={ajax:o}},"pB/M":function(e,t,n){"use strict";function o(){this.data=this._geWrap()}o.prototype={_geWrap:function(){let e={},t=window.navigator;return e.userAgent=t.userAgent,e.appName=t.appName,e.appVersion=t.appVersion,e.cpuClass=t.cpuClass,e.platform=t.platform,e.product=t.product,e.language=t.language,e.url=window.location.href,e.time=(new Date).getTime(),e},_getIP:function(e){var t=new(window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection)({iceServers:[{urls:"stun:stun01.sipphone.com"},{urls:"stun:stun.ekiga.net"},{urls:"stun:stun.fwdnet.net"},{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.l.google.com:19302"}]}),n=function(){},o={},r=/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;function i(t){o[t]||e(t),o[t]=!0}t.createDataChannel(""),t.createOffer().then(function(e){e.sdp.split("\n").forEach(function(e){e.indexOf("candidate")<0||e.match(r).forEach(i)}),t.setLocalDescription(e,n,n)}).catch(function(e){}),t.onicecandidate=function(e){e&&e.candidate&&e.candidate.candidate&&e.candidate.candidate.match(r)&&e.candidate.candidate.match(r).forEach(i)}},_getErrorMessage:function(e,t){let n=this._geWrap();return this._getIP(function(e){n.ip=e}),n.detail={},"ajaxLoad"===e.type?(n.detail.responseURL=e.detail.responseURL,n.detail.status=e.detail.status,n.detail.statusText=e.detail.statusText,n.detail.type="ajaxLoad"):"error"===e.type?(n.detail.message=e.message,n.detail.line=e.lineno,n.detail.filename=e.filename,n.detail.type="error"):t&&(n.detail.src=e.target.src,n.detail.type="resource"),n},_getCallStack(){for(var e="#",t=arguments.callee;t=t.caller;)e=e+""+t.name,0;return e}},e.exports=o},tjUo:function(e,t,n){"use strict";var o=i(n("f6yO")),r=i(n("y11X"));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=function(e,t){const n=new o.default(e);return t(new r.default(n)),n}},xziN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.geetResourceError=t.getJsError=t.ajaxError=t.getServerError=void 0;var o,r=n("oLOV");const i=new(((o=n("pB/M"))&&o.__esModule?o:{default:o}).default),a=function(e,t){let n=i._getErrorMessage(e);return n.record=[],t._config.record&&(n.record=t._getRrwebEvent()),n};t.getServerError=function(){};t.ajaxError=function(e,t){if("ajaxLoad"===e.type&&e.detail.status>=400){let n=a(e,t),o=t._config;r.ajax.post(o.protocol+o.url,n,function(){t._clearEvent()},function(e){console.log(e)})}};t.getJsError=function(e,t){let n=a(e,t),o=t._config;r.ajax.post(o.protocol+o.url,n,function(){t._clearEvent()},function(e){console.log(e)})};t.geetResourceError=function(e,t){let n=a(e,t),o=t._config;r.ajax.post(o.protocol+o.url,n,function(){t._clearEvent()},function(e){console.log(e)})}},y11X:function(e,t,n){"use strict";function o(e){return this._InitMonitor=e,this}o.prototype={_destory(){const e=this._InitMonitor._getEvent();for(let t=0;t<e.length;t++)"error"===e[t].type?window.removeEventListener(e[t].type,e[t].func,!0):window.removeEventListener(e[t].type,e[t].func)},_getRecord(){return this._InitMonitor._getRrwebEvent()}},e.exports=o}});