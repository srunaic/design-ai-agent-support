(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,16015,(t,e,i)=>{},98547,(t,e,i)=>{var a=t.i(47167);t.r(16015);var r=t.r(71645),n=r&&"object"==typeof r&&"default"in r?r:{default:r},s=void 0!==a.default&&a.default.env&&!0,o=function(t){return"[object String]"===Object.prototype.toString.call(t)},l=function(){function t(t){var e=void 0===t?{}:t,i=e.name,a=void 0===i?"stylesheet":i,r=e.optimizeForSpeed,n=void 0===r?s:r;d(o(a),"`name` must be a string"),this._name=a,this._deletedRulePlaceholder="#"+a+"-deleted-rule____{}",d("boolean"==typeof n,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=n,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var l="u">typeof window&&document.querySelector('meta[property="csp-nonce"]');this._nonce=l?l.getAttribute("content"):null}var e,i=t.prototype;return i.setOptimizeForSpeed=function(t){d("boolean"==typeof t,"`setOptimizeForSpeed` accepts a boolean"),d(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=t,this.inject()},i.isOptimizeForSpeed=function(){return this._optimizeForSpeed},i.inject=function(){var t=this;if(d(!this._injected,"sheet already injected"),this._injected=!0,"u">typeof window&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(s||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(e,i){return"number"==typeof i?t._serverSheet.cssRules[i]={cssText:e}:t._serverSheet.cssRules.push({cssText:e}),i},deleteRule:function(e){t._serverSheet.cssRules[e]=null}}},i.getSheetForTag=function(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]},i.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},i.insertRule=function(t,e){if(d(o(t),"`insertRule` accepts only strings"),"u"<typeof window)return"number"!=typeof e&&(e=this._serverSheet.cssRules.length),this._serverSheet.insertRule(t,e),this._rulesCount++;if(this._optimizeForSpeed){var i=this.getSheet();"number"!=typeof e&&(e=i.cssRules.length);try{i.insertRule(t,e)}catch(e){return s||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var a=this._tags[e];this._tags.push(this.makeStyleTag(this._name,t,a))}return this._rulesCount++},i.replaceRule=function(t,e){if(this._optimizeForSpeed||"u"<typeof window){var i="u">typeof window?this.getSheet():this._serverSheet;if(e.trim()||(e=this._deletedRulePlaceholder),!i.cssRules[t])return t;i.deleteRule(t);try{i.insertRule(e,t)}catch(a){s||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),i.insertRule(this._deletedRulePlaceholder,t)}}else{var a=this._tags[t];d(a,"old rule at index `"+t+"` not found"),a.textContent=e}return t},i.deleteRule=function(t){if("u"<typeof window)return void this._serverSheet.deleteRule(t);if(this._optimizeForSpeed)this.replaceRule(t,"");else{var e=this._tags[t];d(e,"rule at index `"+t+"` not found"),e.parentNode.removeChild(e),this._tags[t]=null}},i.flush=function(){this._injected=!1,this._rulesCount=0,"u">typeof window?(this._tags.forEach(function(t){return t&&t.parentNode.removeChild(t)}),this._tags=[]):this._serverSheet.cssRules=[]},i.cssRules=function(){var t=this;return"u"<typeof window?this._serverSheet.cssRules:this._tags.reduce(function(e,i){return i?e=e.concat(Array.prototype.map.call(t.getSheetForTag(i).cssRules,function(e){return e.cssText===t._deletedRulePlaceholder?null:e})):e.push(null),e},[])},i.makeStyleTag=function(t,e,i){e&&d(o(e),"makeStyleTag accepts only strings as second parameter");var a=document.createElement("style");this._nonce&&a.setAttribute("nonce",this._nonce),a.type="text/css",a.setAttribute("data-"+t,""),e&&a.appendChild(document.createTextNode(e));var r=document.head||document.getElementsByTagName("head")[0];return i?r.insertBefore(a,i):r.appendChild(a),a},e=[{key:"length",get:function(){return this._rulesCount}}],function(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}(t.prototype,e),t}();function d(t,e){if(!t)throw Error("StyleSheet: "+e+".")}var c=function(t){for(var e=5381,i=t.length;i;)e=33*e^t.charCodeAt(--i);return e>>>0},u={};function f(t,e){if(!e)return"jsx-"+t;var i=String(e),a=t+i;return u[a]||(u[a]="jsx-"+c(t+"-"+i)),u[a]}function h(t,e){"u"<typeof window&&(e=e.replace(/\/style/gi,"\\/style"));var i=t+e;return u[i]||(u[i]=e.replace(/__jsx-style-dynamic-selector/g,t)),u[i]}var p=function(){function t(t){var e=void 0===t?{}:t,i=e.styleSheet,a=void 0===i?null:i,r=e.optimizeForSpeed,n=void 0!==r&&r;this._sheet=a||new l({name:"styled-jsx",optimizeForSpeed:n}),this._sheet.inject(),a&&"boolean"==typeof n&&(this._sheet.setOptimizeForSpeed(n),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var e=t.prototype;return e.add=function(t){var e=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(t.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"u">typeof window&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(t,e){return t[e]=0,t},{}));var i=this.getIdAndRules(t),a=i.styleId,r=i.rules;if(a in this._instancesCounts){this._instancesCounts[a]+=1;return}var n=r.map(function(t){return e._sheet.insertRule(t)}).filter(function(t){return -1!==t});this._indices[a]=n,this._instancesCounts[a]=1},e.remove=function(t){var e=this,i=this.getIdAndRules(t).styleId;if(function(t,e){if(!t)throw Error("StyleSheetRegistry: "+e+".")}(i in this._instancesCounts,"styleId: `"+i+"` not found"),this._instancesCounts[i]-=1,this._instancesCounts[i]<1){var a=this._fromServer&&this._fromServer[i];a?(a.parentNode.removeChild(a),delete this._fromServer[i]):(this._indices[i].forEach(function(t){return e._sheet.deleteRule(t)}),delete this._indices[i]),delete this._instancesCounts[i]}},e.update=function(t,e){this.add(e),this.remove(t)},e.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},e.cssRules=function(){var t=this,e=this._fromServer?Object.keys(this._fromServer).map(function(e){return[e,t._fromServer[e]]}):[],i=this._sheet.cssRules();return e.concat(Object.keys(this._indices).map(function(e){return[e,t._indices[e].map(function(t){return i[t].cssText}).join(t._optimizeForSpeed?"":"\n")]}).filter(function(t){return!!t[1]}))},e.styles=function(t){var e,i;return e=this.cssRules(),void 0===(i=t)&&(i={}),e.map(function(t){var e=t[0],a=t[1];return n.default.createElement("style",{id:"__"+e,key:"__"+e,nonce:i.nonce?i.nonce:void 0,dangerouslySetInnerHTML:{__html:a}})})},e.getIdAndRules=function(t){var e=t.children,i=t.dynamic,a=t.id;if(i){var r=f(a,i);return{styleId:r,rules:Array.isArray(e)?e.map(function(t){return h(r,t)}):[h(r,e)]}}return{styleId:f(a),rules:Array.isArray(e)?e:[e]}},e.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(t,e){return t[e.id.slice(2)]=e,t},{})},t}(),m=r.createContext(null);function b(){return new p}function g(){return r.useContext(m)}m.displayName="StyleSheetContext";var x=n.default.useInsertionEffect||n.default.useLayoutEffect,v="u">typeof window?b():void 0;function y(t){var e=v||g();return e&&("u"<typeof window?e.add(t):x(function(){return e.add(t),function(){e.remove(t)}},[t.id,String(t.dynamic)])),null}y.dynamic=function(t){return t.map(function(t){return f(t[0],t[1])}).join(" ")},i.StyleRegistry=function(t){var e=t.registry,i=t.children,a=r.useContext(m),s=r.useState(function(){return a||e||b()})[0];return n.default.createElement(m.Provider,{value:s},i)},i.createStyleRegistry=b,i.style=y,i.useStyleRegistry=g},37902,(t,e,i)=>{e.exports=t.r(98547).style},67034,(t,e,i)=>{var a={675:function(t,e){"use strict";e.byteLength=function(t){var e=l(t),i=e[0],a=e[1];return(i+a)*3/4-a},e.toByteArray=function(t){var e,i,n=l(t),s=n[0],o=n[1],d=new r((s+o)*3/4-o),c=0,u=o>0?s-4:s;for(i=0;i<u;i+=4)e=a[t.charCodeAt(i)]<<18|a[t.charCodeAt(i+1)]<<12|a[t.charCodeAt(i+2)]<<6|a[t.charCodeAt(i+3)],d[c++]=e>>16&255,d[c++]=e>>8&255,d[c++]=255&e;return 2===o&&(e=a[t.charCodeAt(i)]<<2|a[t.charCodeAt(i+1)]>>4,d[c++]=255&e),1===o&&(e=a[t.charCodeAt(i)]<<10|a[t.charCodeAt(i+1)]<<4|a[t.charCodeAt(i+2)]>>2,d[c++]=e>>8&255,d[c++]=255&e),d},e.fromByteArray=function(t){for(var e,a=t.length,r=a%3,n=[],s=0,o=a-r;s<o;s+=16383)n.push(function(t,e,a){for(var r,n=[],s=e;s<a;s+=3)r=(t[s]<<16&0xff0000)+(t[s+1]<<8&65280)+(255&t[s+2]),n.push(i[r>>18&63]+i[r>>12&63]+i[r>>6&63]+i[63&r]);return n.join("")}(t,s,s+16383>o?o:s+16383));return 1===r?n.push(i[(e=t[a-1])>>2]+i[e<<4&63]+"=="):2===r&&n.push(i[(e=(t[a-2]<<8)+t[a-1])>>10]+i[e>>4&63]+i[e<<2&63]+"="),n.join("")};for(var i=[],a=[],r="u">typeof Uint8Array?Uint8Array:Array,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,o=n.length;s<o;++s)i[s]=n[s],a[n.charCodeAt(s)]=s;function l(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");var i=t.indexOf("=");-1===i&&(i=e);var a=i===e?0:4-i%4;return[i,a]}a[45]=62,a[95]=63},72:function(t,e,i){"use strict";var a=i(675),r=i(783),n="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function s(t){if(t>0x7fffffff)throw RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,o.prototype),e}function o(t,e,i){if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return c(t)}return l(t,e,i)}function l(t,e,i){if("string"==typeof t){var a=t,r=e;if(("string"!=typeof r||""===r)&&(r="utf8"),!o.isEncoding(r))throw TypeError("Unknown encoding: "+r);var n=0|h(a,r),l=s(n),d=l.write(a,r);return d!==n&&(l=l.slice(0,d)),l}if(ArrayBuffer.isView(t))return u(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(E(t,ArrayBuffer)||t&&E(t.buffer,ArrayBuffer)||"u">typeof SharedArrayBuffer&&(E(t,SharedArrayBuffer)||t&&E(t.buffer,SharedArrayBuffer)))return function(t,e,i){var a;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(i||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(a=void 0===e&&void 0===i?new Uint8Array(t):void 0===i?new Uint8Array(t,e):new Uint8Array(t,e,i),o.prototype),a}(t,e,i);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');var c=t.valueOf&&t.valueOf();if(null!=c&&c!==t)return o.from(c,e,i);var p=function(t){if(o.isBuffer(t)){var e=0|f(t.length),i=s(e);return 0===i.length||t.copy(i,0,0,e),i}return void 0!==t.length?"number"!=typeof t.length||function(t){return t!=t}(t.length)?s(0):u(t):"Buffer"===t.type&&Array.isArray(t.data)?u(t.data):void 0}(t);if(p)return p;if("u">typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return o.from(t[Symbol.toPrimitive]("string"),e,i);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function d(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function c(t){return d(t),s(t<0?0:0|f(t))}function u(t){for(var e=t.length<0?0:0|f(t.length),i=s(e),a=0;a<e;a+=1)i[a]=255&t[a];return i}e.Buffer=o,e.SlowBuffer=function(t){return+t!=t&&(t=0),o.alloc(+t)},e.INSPECT_MAX_BYTES=50,e.kMaxLength=0x7fffffff,o.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),!o.TYPED_ARRAY_SUPPORT&&"u">typeof console&&"function"==typeof console.error&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(o.prototype,"parent",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.buffer}}),Object.defineProperty(o.prototype,"offset",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.byteOffset}}),o.poolSize=8192,o.from=function(t,e,i){return l(t,e,i)},Object.setPrototypeOf(o.prototype,Uint8Array.prototype),Object.setPrototypeOf(o,Uint8Array),o.alloc=function(t,e,i){return(d(t),t<=0)?s(t):void 0!==e?"string"==typeof i?s(t).fill(e,i):s(t).fill(e):s(t)},o.allocUnsafe=function(t){return c(t)},o.allocUnsafeSlow=function(t){return c(t)};function f(t){if(t>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function h(t,e){if(o.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||E(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var i=t.length,a=arguments.length>2&&!0===arguments[2];if(!a&&0===i)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":return S(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*i;case"hex":return i>>>1;case"base64":return N(t).length;default:if(r)return a?-1:S(t).length;e=(""+e).toLowerCase(),r=!0}}function p(t,e,i){var r,n,s,o=!1;if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===i||i>this.length)&&(i=this.length),i<=0||(i>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,i){var a=t.length;(!e||e<0)&&(e=0),(!i||i<0||i>a)&&(i=a);for(var r="",n=e;n<i;++n)r+=C[t[n]];return r}(this,e,i);case"utf8":case"utf-8":return x(this,e,i);case"ascii":return function(t,e,i){var a="";i=Math.min(t.length,i);for(var r=e;r<i;++r)a+=String.fromCharCode(127&t[r]);return a}(this,e,i);case"latin1":case"binary":return function(t,e,i){var a="";i=Math.min(t.length,i);for(var r=e;r<i;++r)a+=String.fromCharCode(t[r]);return a}(this,e,i);case"base64":return r=this,n=e,s=i,0===n&&s===r.length?a.fromByteArray(r):a.fromByteArray(r.slice(n,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,i){for(var a=t.slice(e,i),r="",n=0;n<a.length;n+=2)r+=String.fromCharCode(a[n]+256*a[n+1]);return r}(this,e,i);default:if(o)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),o=!0}}function m(t,e,i){var a=t[e];t[e]=t[i],t[i]=a}function b(t,e,i,a,r){var n;if(0===t.length)return -1;if("string"==typeof i?(a=i,i=0):i>0x7fffffff?i=0x7fffffff:i<-0x80000000&&(i=-0x80000000),(n=i*=1)!=n&&(i=r?0:t.length-1),i<0&&(i=t.length+i),i>=t.length)if(r)return -1;else i=t.length-1;else if(i<0)if(!r)return -1;else i=0;if("string"==typeof e&&(e=o.from(e,a)),o.isBuffer(e))return 0===e.length?-1:g(t,e,i,a,r);if("number"==typeof e){if(e&=255,"function"==typeof Uint8Array.prototype.indexOf)if(r)return Uint8Array.prototype.indexOf.call(t,e,i);else return Uint8Array.prototype.lastIndexOf.call(t,e,i);return g(t,[e],i,a,r)}throw TypeError("val must be string, number or Buffer")}function g(t,e,i,a,r){var n,s=1,o=t.length,l=e.length;if(void 0!==a&&("ucs2"===(a=String(a).toLowerCase())||"ucs-2"===a||"utf16le"===a||"utf-16le"===a)){if(t.length<2||e.length<2)return -1;s=2,o/=2,l/=2,i/=2}function d(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(r){var c=-1;for(n=i;n<o;n++)if(d(t,n)===d(e,-1===c?0:n-c)){if(-1===c&&(c=n),n-c+1===l)return c*s}else -1!==c&&(n-=n-c),c=-1}else for(i+l>o&&(i=o-l),n=i;n>=0;n--){for(var u=!0,f=0;f<l;f++)if(d(t,n+f)!==d(e,f)){u=!1;break}if(u)return n}return -1}o.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==o.prototype},o.compare=function(t,e){if(E(t,Uint8Array)&&(t=o.from(t,t.offset,t.byteLength)),E(e,Uint8Array)&&(e=o.from(e,e.offset,e.byteLength)),!o.isBuffer(t)||!o.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var i=t.length,a=e.length,r=0,n=Math.min(i,a);r<n;++r)if(t[r]!==e[r]){i=t[r],a=e[r];break}return i<a?-1:+(a<i)},o.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.concat=function(t,e){if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return o.alloc(0);if(void 0===e)for(i=0,e=0;i<t.length;++i)e+=t[i].length;var i,a=o.allocUnsafe(e),r=0;for(i=0;i<t.length;++i){var n=t[i];if(E(n,Uint8Array)&&(n=o.from(n)),!o.isBuffer(n))throw TypeError('"list" argument must be an Array of Buffers');n.copy(a,r),r+=n.length}return a},o.byteLength=h,o.prototype._isBuffer=!0,o.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)m(this,e,e+1);return this},o.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)m(this,e,e+3),m(this,e+1,e+2);return this},o.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)m(this,e,e+7),m(this,e+1,e+6),m(this,e+2,e+5),m(this,e+3,e+4);return this},o.prototype.toString=function(){var t=this.length;return 0===t?"":0==arguments.length?x(this,0,t):p.apply(this,arguments)},o.prototype.toLocaleString=o.prototype.toString,o.prototype.equals=function(t){if(!o.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===o.compare(this,t)},o.prototype.inspect=function(){var t="",i=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,i).replace(/(.{2})/g,"$1 ").trim(),this.length>i&&(t+=" ... "),"<Buffer "+t+">"},n&&(o.prototype[n]=o.prototype.inspect),o.prototype.compare=function(t,e,i,a,r){if(E(t,Uint8Array)&&(t=o.from(t,t.offset,t.byteLength)),!o.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===i&&(i=t?t.length:0),void 0===a&&(a=0),void 0===r&&(r=this.length),e<0||i>t.length||a<0||r>this.length)throw RangeError("out of range index");if(a>=r&&e>=i)return 0;if(a>=r)return -1;if(e>=i)return 1;if(e>>>=0,i>>>=0,a>>>=0,r>>>=0,this===t)return 0;for(var n=r-a,s=i-e,l=Math.min(n,s),d=this.slice(a,r),c=t.slice(e,i),u=0;u<l;++u)if(d[u]!==c[u]){n=d[u],s=c[u];break}return n<s?-1:+(s<n)},o.prototype.includes=function(t,e,i){return -1!==this.indexOf(t,e,i)},o.prototype.indexOf=function(t,e,i){return b(this,t,e,i,!0)},o.prototype.lastIndexOf=function(t,e,i){return b(this,t,e,i,!1)};function x(t,e,i){i=Math.min(t.length,i);for(var a=[],r=e;r<i;){var n,s,o,l,d=t[r],c=null,u=d>239?4:d>223?3:d>191?2:1;if(r+u<=i)switch(u){case 1:d<128&&(c=d);break;case 2:(192&(n=t[r+1]))==128&&(l=(31&d)<<6|63&n)>127&&(c=l);break;case 3:n=t[r+1],s=t[r+2],(192&n)==128&&(192&s)==128&&(l=(15&d)<<12|(63&n)<<6|63&s)>2047&&(l<55296||l>57343)&&(c=l);break;case 4:n=t[r+1],s=t[r+2],o=t[r+3],(192&n)==128&&(192&s)==128&&(192&o)==128&&(l=(15&d)<<18|(63&n)<<12|(63&s)<<6|63&o)>65535&&l<1114112&&(c=l)}null===c?(c=65533,u=1):c>65535&&(c-=65536,a.push(c>>>10&1023|55296),c=56320|1023&c),a.push(c),r+=u}var f=a,h=f.length;if(h<=4096)return String.fromCharCode.apply(String,f);for(var p="",m=0;m<h;)p+=String.fromCharCode.apply(String,f.slice(m,m+=4096));return p}function v(t,e,i){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>i)throw RangeError("Trying to access beyond buffer length")}function y(t,e,i,a,r,n){if(!o.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<n)throw RangeError('"value" argument is out of bounds');if(i+a>t.length)throw RangeError("Index out of range")}function w(t,e,i,a,r,n){if(i+a>t.length||i<0)throw RangeError("Index out of range")}function k(t,e,i,a,n){return e*=1,i>>>=0,n||w(t,e,i,4,34028234663852886e22,-34028234663852886e22),r.write(t,e,i,a,23,4),i+4}function _(t,e,i,a,n){return e*=1,i>>>=0,n||w(t,e,i,8,17976931348623157e292,-17976931348623157e292),r.write(t,e,i,a,52,8),i+8}o.prototype.write=function(t,e,i,a){if(void 0===e)a="utf8",i=this.length,e=0;else if(void 0===i&&"string"==typeof e)a=e,i=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(i)?(i>>>=0,void 0===a&&(a="utf8")):(a=i,i=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var r,n,s,o,l,d,c,u,f=this.length-e;if((void 0===i||i>f)&&(i=f),t.length>0&&(i<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");a||(a="utf8");for(var h=!1;;)switch(a){case"hex":return function(t,e,i,a){i=Number(i)||0;var r=t.length-i;a?(a=Number(a))>r&&(a=r):a=r;var n=e.length;a>n/2&&(a=n/2);for(var s=0;s<a;++s){var o,l=parseInt(e.substr(2*s,2),16);if((o=l)!=o)break;t[i+s]=l}return s}(this,t,e,i);case"utf8":case"utf-8":return r=e,n=i,A(S(t,this.length-r),this,r,n);case"ascii":return s=e,o=i,A(z(t),this,s,o);case"latin1":case"binary":return function(t,e,i,a){return A(z(e),t,i,a)}(this,t,e,i);case"base64":return l=e,d=i,A(N(t),this,l,d);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=e,u=i,A(function(t,e){for(var i,a,r=[],n=0;n<t.length&&!((e-=2)<0);++n)a=(i=t.charCodeAt(n))>>8,r.push(i%256),r.push(a);return r}(t,this.length-c),this,c,u);default:if(h)throw TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),h=!0}},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},o.prototype.slice=function(t,e){var i=this.length;t=~~t,e=void 0===e?i:~~e,t<0?(t+=i)<0&&(t=0):t>i&&(t=i),e<0?(e+=i)<0&&(e=0):e>i&&(e=i),e<t&&(e=t);var a=this.subarray(t,e);return Object.setPrototypeOf(a,o.prototype),a},o.prototype.readUIntLE=function(t,e,i){t>>>=0,e>>>=0,i||v(t,e,this.length);for(var a=this[t],r=1,n=0;++n<e&&(r*=256);)a+=this[t+n]*r;return a},o.prototype.readUIntBE=function(t,e,i){t>>>=0,e>>>=0,i||v(t,e,this.length);for(var a=this[t+--e],r=1;e>0&&(r*=256);)a+=this[t+--e]*r;return a},o.prototype.readUInt8=function(t,e){return t>>>=0,e||v(t,1,this.length),this[t]},o.prototype.readUInt16LE=function(t,e){return t>>>=0,e||v(t,2,this.length),this[t]|this[t+1]<<8},o.prototype.readUInt16BE=function(t,e){return t>>>=0,e||v(t,2,this.length),this[t]<<8|this[t+1]},o.prototype.readUInt32LE=function(t,e){return t>>>=0,e||v(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+0x1000000*this[t+3]},o.prototype.readUInt32BE=function(t,e){return t>>>=0,e||v(t,4,this.length),0x1000000*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},o.prototype.readIntLE=function(t,e,i){t>>>=0,e>>>=0,i||v(t,e,this.length);for(var a=this[t],r=1,n=0;++n<e&&(r*=256);)a+=this[t+n]*r;return a>=(r*=128)&&(a-=Math.pow(2,8*e)),a},o.prototype.readIntBE=function(t,e,i){t>>>=0,e>>>=0,i||v(t,e,this.length);for(var a=e,r=1,n=this[t+--a];a>0&&(r*=256);)n+=this[t+--a]*r;return n>=(r*=128)&&(n-=Math.pow(2,8*e)),n},o.prototype.readInt8=function(t,e){return(t>>>=0,e||v(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},o.prototype.readInt16LE=function(t,e){t>>>=0,e||v(t,2,this.length);var i=this[t]|this[t+1]<<8;return 32768&i?0xffff0000|i:i},o.prototype.readInt16BE=function(t,e){t>>>=0,e||v(t,2,this.length);var i=this[t+1]|this[t]<<8;return 32768&i?0xffff0000|i:i},o.prototype.readInt32LE=function(t,e){return t>>>=0,e||v(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},o.prototype.readInt32BE=function(t,e){return t>>>=0,e||v(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},o.prototype.readFloatLE=function(t,e){return t>>>=0,e||v(t,4,this.length),r.read(this,t,!0,23,4)},o.prototype.readFloatBE=function(t,e){return t>>>=0,e||v(t,4,this.length),r.read(this,t,!1,23,4)},o.prototype.readDoubleLE=function(t,e){return t>>>=0,e||v(t,8,this.length),r.read(this,t,!0,52,8)},o.prototype.readDoubleBE=function(t,e){return t>>>=0,e||v(t,8,this.length),r.read(this,t,!1,52,8)},o.prototype.writeUIntLE=function(t,e,i,a){if(t*=1,e>>>=0,i>>>=0,!a){var r=Math.pow(2,8*i)-1;y(this,t,e,i,r,0)}var n=1,s=0;for(this[e]=255&t;++s<i&&(n*=256);)this[e+s]=t/n&255;return e+i},o.prototype.writeUIntBE=function(t,e,i,a){if(t*=1,e>>>=0,i>>>=0,!a){var r=Math.pow(2,8*i)-1;y(this,t,e,i,r,0)}var n=i-1,s=1;for(this[e+n]=255&t;--n>=0&&(s*=256);)this[e+n]=t/s&255;return e+i},o.prototype.writeUInt8=function(t,e,i){return t*=1,e>>>=0,i||y(this,t,e,1,255,0),this[e]=255&t,e+1},o.prototype.writeUInt16LE=function(t,e,i){return t*=1,e>>>=0,i||y(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},o.prototype.writeUInt16BE=function(t,e,i){return t*=1,e>>>=0,i||y(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},o.prototype.writeUInt32LE=function(t,e,i){return t*=1,e>>>=0,i||y(this,t,e,4,0xffffffff,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},o.prototype.writeUInt32BE=function(t,e,i){return t*=1,e>>>=0,i||y(this,t,e,4,0xffffffff,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},o.prototype.writeIntLE=function(t,e,i,a){if(t*=1,e>>>=0,!a){var r=Math.pow(2,8*i-1);y(this,t,e,i,r-1,-r)}var n=0,s=1,o=0;for(this[e]=255&t;++n<i&&(s*=256);)t<0&&0===o&&0!==this[e+n-1]&&(o=1),this[e+n]=(t/s|0)-o&255;return e+i},o.prototype.writeIntBE=function(t,e,i,a){if(t*=1,e>>>=0,!a){var r=Math.pow(2,8*i-1);y(this,t,e,i,r-1,-r)}var n=i-1,s=1,o=0;for(this[e+n]=255&t;--n>=0&&(s*=256);)t<0&&0===o&&0!==this[e+n+1]&&(o=1),this[e+n]=(t/s|0)-o&255;return e+i},o.prototype.writeInt8=function(t,e,i){return t*=1,e>>>=0,i||y(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},o.prototype.writeInt16LE=function(t,e,i){return t*=1,e>>>=0,i||y(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},o.prototype.writeInt16BE=function(t,e,i){return t*=1,e>>>=0,i||y(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},o.prototype.writeInt32LE=function(t,e,i){return t*=1,e>>>=0,i||y(this,t,e,4,0x7fffffff,-0x80000000),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},o.prototype.writeInt32BE=function(t,e,i){return t*=1,e>>>=0,i||y(this,t,e,4,0x7fffffff,-0x80000000),t<0&&(t=0xffffffff+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},o.prototype.writeFloatLE=function(t,e,i){return k(this,t,e,!0,i)},o.prototype.writeFloatBE=function(t,e,i){return k(this,t,e,!1,i)},o.prototype.writeDoubleLE=function(t,e,i){return _(this,t,e,!0,i)},o.prototype.writeDoubleBE=function(t,e,i){return _(this,t,e,!1,i)},o.prototype.copy=function(t,e,i,a){if(!o.isBuffer(t))throw TypeError("argument should be a Buffer");if(i||(i=0),a||0===a||(a=this.length),e>=t.length&&(e=t.length),e||(e=0),a>0&&a<i&&(a=i),a===i||0===t.length||0===this.length)return 0;if(e<0)throw RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw RangeError("Index out of range");if(a<0)throw RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),t.length-e<a-i&&(a=t.length-e+i);var r=a-i;if(this===t&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(e,i,a);else if(this===t&&i<e&&e<a)for(var n=r-1;n>=0;--n)t[n+e]=this[n+i];else Uint8Array.prototype.set.call(t,this.subarray(i,a),e);return r},o.prototype.fill=function(t,e,i,a){if("string"==typeof t){if("string"==typeof e?(a=e,e=0,i=this.length):"string"==typeof i&&(a=i,i=this.length),void 0!==a&&"string"!=typeof a)throw TypeError("encoding must be a string");if("string"==typeof a&&!o.isEncoding(a))throw TypeError("Unknown encoding: "+a);if(1===t.length){var r,n=t.charCodeAt(0);("utf8"===a&&n<128||"latin1"===a)&&(t=n)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<i)throw RangeError("Out of range index");if(i<=e)return this;if(e>>>=0,i=void 0===i?this.length:i>>>0,t||(t=0),"number"==typeof t)for(r=e;r<i;++r)this[r]=t;else{var s=o.isBuffer(t)?t:o.from(t,a),l=s.length;if(0===l)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(r=0;r<i-e;++r)this[r+e]=s[r%l]}return this};var j=/[^+/0-9A-Za-z-_]/g;function S(t,e){e=e||1/0;for(var i,a=t.length,r=null,n=[],s=0;s<a;++s){if((i=t.charCodeAt(s))>55295&&i<57344){if(!r){if(i>56319||s+1===a){(e-=3)>-1&&n.push(239,191,189);continue}r=i;continue}if(i<56320){(e-=3)>-1&&n.push(239,191,189),r=i;continue}i=(r-55296<<10|i-56320)+65536}else r&&(e-=3)>-1&&n.push(239,191,189);if(r=null,i<128){if((e-=1)<0)break;n.push(i)}else if(i<2048){if((e-=2)<0)break;n.push(i>>6|192,63&i|128)}else if(i<65536){if((e-=3)<0)break;n.push(i>>12|224,i>>6&63|128,63&i|128)}else if(i<1114112){if((e-=4)<0)break;n.push(i>>18|240,i>>12&63|128,i>>6&63|128,63&i|128)}else throw Error("Invalid code point")}return n}function z(t){for(var e=[],i=0;i<t.length;++i)e.push(255&t.charCodeAt(i));return e}function N(t){return a.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(j,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function A(t,e,i,a){for(var r=0;r<a&&!(r+i>=e.length)&&!(r>=t.length);++r)e[r+i]=t[r];return r}function E(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}var C=function(){for(var t="0123456789abcdef",e=Array(256),i=0;i<16;++i)for(var a=16*i,r=0;r<16;++r)e[a+r]=t[i]+t[r];return e}()},783:function(t,e){e.read=function(t,e,i,a,r){var n,s,o=8*r-a-1,l=(1<<o)-1,d=l>>1,c=-7,u=i?r-1:0,f=i?-1:1,h=t[e+u];for(u+=f,n=h&(1<<-c)-1,h>>=-c,c+=o;c>0;n=256*n+t[e+u],u+=f,c-=8);for(s=n&(1<<-c)-1,n>>=-c,c+=a;c>0;s=256*s+t[e+u],u+=f,c-=8);if(0===n)n=1-d;else{if(n===l)return s?NaN:1/0*(h?-1:1);s+=Math.pow(2,a),n-=d}return(h?-1:1)*s*Math.pow(2,n-a)},e.write=function(t,e,i,a,r,n){var s,o,l,d=8*n-r-1,c=(1<<d)-1,u=c>>1,f=5960464477539062e-23*(23===r),h=a?0:n-1,p=a?1:-1,m=+(e<0||0===e&&1/e<0);for(isNaN(e=Math.abs(e))||e===1/0?(o=+!!isNaN(e),s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+u>=1?e+=f/l:e+=f*Math.pow(2,1-u),e*l>=2&&(s++,l/=2),s+u>=c?(o=0,s=c):s+u>=1?(o=(e*l-1)*Math.pow(2,r),s+=u):(o=e*Math.pow(2,u-1)*Math.pow(2,r),s=0));r>=8;t[i+h]=255&o,h+=p,o/=256,r-=8);for(s=s<<r|o,d+=r;d>0;t[i+h]=255&s,h+=p,s/=256,d-=8);t[i+h-p]|=128*m}}},r={};function n(t){var e=r[t];if(void 0!==e)return e.exports;var i=r[t]={exports:{}},s=!0;try{a[t](i,i.exports,n),s=!1}finally{s&&delete r[t]}return i.exports}n.ab="/ROOT/node_modules/next/dist/compiled/buffer/",e.exports=n(72)},30662,(t,e,i)=>{!function(){"use strict";var t={864:function(t){var e,i="object"==typeof Reflect?Reflect:null,a=i&&"function"==typeof i.apply?i.apply:function(t,e,i){return Function.prototype.apply.call(t,e,i)};e=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var r=Number.isNaN||function(t){return t!=t};function n(){n.init.call(this)}t.exports=n,t.exports.once=function(t,e){return new Promise(function(i,a){var r,n,s;function o(i){t.removeListener(e,l),a(i)}function l(){"function"==typeof t.removeListener&&t.removeListener("error",o),i([].slice.call(arguments))}m(t,e,l,{once:!0}),"error"!==e&&(r=t,n=o,s={once:!0},"function"==typeof r.on&&m(r,"error",n,s))})},n.EventEmitter=n,n.prototype._events=void 0,n.prototype._eventsCount=0,n.prototype._maxListeners=void 0;var s=10;function o(t){if("function"!=typeof t)throw TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function l(t){return void 0===t._maxListeners?n.defaultMaxListeners:t._maxListeners}function d(t,e,i,a){if(o(i),void 0===(n=t._events)?(n=t._events=Object.create(null),t._eventsCount=0):(void 0!==n.newListener&&(t.emit("newListener",e,i.listener?i.listener:i),n=t._events),s=n[e]),void 0===s)s=n[e]=i,++t._eventsCount;else if("function"==typeof s?s=n[e]=a?[i,s]:[s,i]:a?s.unshift(i):s.push(i),(r=l(t))>0&&s.length>r&&!s.warned){s.warned=!0;var r,n,s,d=Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");d.name="MaxListenersExceededWarning",d.emitter=t,d.type=e,d.count=s.length,console&&console.warn&&console.warn(d)}return t}function c(){if(!this.fired)return(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0==arguments.length)?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function u(t,e,i){var a={fired:!1,wrapFn:void 0,target:t,type:e,listener:i},r=c.bind(a);return r.listener=i,a.wrapFn=r,r}function f(t,e,i){var a=t._events;if(void 0===a)return[];var r=a[e];return void 0===r?[]:"function"==typeof r?i?[r.listener||r]:[r]:i?function(t){for(var e=Array(t.length),i=0;i<e.length;++i)e[i]=t[i].listener||t[i];return e}(r):p(r,r.length)}function h(t){var e=this._events;if(void 0!==e){var i=e[t];if("function"==typeof i)return 1;if(void 0!==i)return i.length}return 0}function p(t,e){for(var i=Array(e),a=0;a<e;++a)i[a]=t[a];return i}function m(t,e,i,a){if("function"==typeof t.on)a.once?t.once(e,i):t.on(e,i);else if("function"==typeof t.addEventListener)t.addEventListener(e,function r(n){a.once&&t.removeEventListener(e,r),i(n)});else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}Object.defineProperty(n,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(t){if("number"!=typeof t||t<0||r(t))throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");s=t}}),n.init=function(){(void 0===this._events||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},n.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||r(t))throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},n.prototype.getMaxListeners=function(){return l(this)},n.prototype.emit=function(t){for(var e=[],i=1;i<arguments.length;i++)e.push(arguments[i]);var r="error"===t,n=this._events;if(void 0!==n)r=r&&void 0===n.error;else if(!r)return!1;if(r){if(e.length>0&&(s=e[0]),s instanceof Error)throw s;var s,o=Error("Unhandled error."+(s?" ("+s.message+")":""));throw o.context=s,o}var l=n[t];if(void 0===l)return!1;if("function"==typeof l)a(l,this,e);else for(var d=l.length,c=p(l,d),i=0;i<d;++i)a(c[i],this,e);return!0},n.prototype.addListener=function(t,e){return d(this,t,e,!1)},n.prototype.on=n.prototype.addListener,n.prototype.prependListener=function(t,e){return d(this,t,e,!0)},n.prototype.once=function(t,e){return o(e),this.on(t,u(this,t,e)),this},n.prototype.prependOnceListener=function(t,e){return o(e),this.prependListener(t,u(this,t,e)),this},n.prototype.removeListener=function(t,e){var i,a,r,n,s;if(o(e),void 0===(a=this._events)||void 0===(i=a[t]))return this;if(i===e||i.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete a[t],a.removeListener&&this.emit("removeListener",t,i.listener||e));else if("function"!=typeof i){for(r=-1,n=i.length-1;n>=0;n--)if(i[n]===e||i[n].listener===e){s=i[n].listener,r=n;break}if(r<0)return this;0===r?i.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(i,r),1===i.length&&(a[t]=i[0]),void 0!==a.removeListener&&this.emit("removeListener",t,s||e)}return this},n.prototype.off=n.prototype.removeListener,n.prototype.removeAllListeners=function(t){var e,i,a;if(void 0===(i=this._events))return this;if(void 0===i.removeListener)return 0==arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==i[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete i[t]),this;if(0==arguments.length){var r,n=Object.keys(i);for(a=0;a<n.length;++a)"removeListener"!==(r=n[a])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=i[t]))this.removeListener(t,e);else if(void 0!==e)for(a=e.length-1;a>=0;a--)this.removeListener(t,e[a]);return this},n.prototype.listeners=function(t){return f(this,t,!0)},n.prototype.rawListeners=function(t){return f(this,t,!1)},n.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):h.call(t,e)},n.prototype.listenerCount=h,n.prototype.eventNames=function(){return this._eventsCount>0?e(this._events):[]}}},i={};function a(e){var r=i[e];if(void 0!==r)return r.exports;var n=i[e]={exports:{}},s=!0;try{t[e](n,n.exports,a),s=!1}finally{s&&delete i[e]}return n.exports}a.ab="/ROOT/node_modules/next/dist/compiled/events/",e.exports=a(864)}()},77398,(t,e,i)=>{var a=t.i(67034),r=t.i(47167),n={8992:function(t){t.exports=function(t,i,a){if(t.filter)return t.filter(i,a);if(null==t||"function"!=typeof i)throw TypeError();for(var r=[],n=0;n<t.length;n++)if(e.call(t,n)){var s=t[n];i.call(a,s,n,t)&&r.push(s)}return r};var e=Object.prototype.hasOwnProperty},5555:function(t,e,i){"use strict";var a=i(1212),r=i(1909),n=i(8737);t.exports=i(8772)||a.call(n,r)},9905:function(t,e,i){"use strict";var a=i(1212),r=i(1909),n=i(5555);t.exports=function(){return n(a,r,arguments)}},1909:function(t){"use strict";t.exports=Function.prototype.apply},8737:function(t){"use strict";t.exports=Function.prototype.call},7152:function(t,e,i){"use strict";var a=i(1212),r=i(8202),n=i(8737),s=i(5555);t.exports=function(t){if(t.length<1||"function"!=typeof t[0])throw new r("a function is required");return s(a,n,t)}},8772:function(t){"use strict";t.exports="u">typeof Reflect&&Reflect&&Reflect.apply},516:function(t,e,i){"use strict";var a=i(3197),r=i(9042),n=r(a("String.prototype.indexOf"));t.exports=function(t,e){var i=a(t,!!e);return"function"==typeof i&&n(t,".prototype.")>-1?r(i):i}},9042:function(t,e,i){"use strict";var a=i(3143),r=i(446),n=i(7152),s=i(9905);t.exports=function(t){var e=n(arguments),i=t.length-(arguments.length-1);return a(e,1+(i>0?i:0),!0)},r?r(t.exports,"apply",{value:s}):t.exports.apply=s},819:function(t,e,i){"use strict";var a=i(446),r=i(5182),n=i(8202),s=i(3990);t.exports=function(t,e,i){if(!t||"object"!=typeof t&&"function"!=typeof t)throw new n("`obj` must be an object or a function`");if("string"!=typeof e&&"symbol"!=typeof e)throw new n("`property` must be a string or a symbol`");if(arguments.length>3&&"boolean"!=typeof arguments[3]&&null!==arguments[3])throw new n("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&"boolean"!=typeof arguments[4]&&null!==arguments[4])throw new n("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&"boolean"!=typeof arguments[5]&&null!==arguments[5])throw new n("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&"boolean"!=typeof arguments[6])throw new n("`loose`, if provided, must be a boolean");var o=arguments.length>3?arguments[3]:null,l=arguments.length>4?arguments[4]:null,d=arguments.length>5?arguments[5]:null,c=arguments.length>6&&arguments[6],u=!!s&&s(t,e);if(a)a(t,e,{configurable:null===d&&u?u.configurable:!d,enumerable:null===o&&u?u.enumerable:!o,value:i,writable:null===l&&u?u.writable:!l});else if(!c&&(o||l||d))throw new r("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");else t[e]=i}},6211:function(t,e,i){"use strict";var a,r=i(7152),n=i(3990);try{a=[].__proto__===Array.prototype}catch(t){if(!t||"object"!=typeof t||!("code"in t)||"ERR_PROTO_ACCESS"!==t.code)throw t}var s=!!a&&n&&n(Object.prototype,"__proto__"),o=Object,l=o.getPrototypeOf;t.exports=s&&"function"==typeof s.get?r([s.get]):"function"==typeof l&&function(t){return l(null==t?t:o(t))}},446:function(t){"use strict";var e=Object.defineProperty||!1;if(e)try{e({},"a",{value:1})}catch(t){e=!1}t.exports=e},7181:function(t){"use strict";t.exports=EvalError},1545:function(t){"use strict";t.exports=Error},22:function(t){"use strict";t.exports=RangeError},2803:function(t){"use strict";t.exports=ReferenceError},5182:function(t){"use strict";t.exports=SyntaxError},8202:function(t){"use strict";t.exports=TypeError},3284:function(t){"use strict";t.exports=URIError},2811:function(t){"use strict";t.exports=Object},6144:function(t){var e=Object.prototype.hasOwnProperty,i=Object.prototype.toString;t.exports=function(t,a,r){if("[object Function]"!==i.call(a))throw TypeError("iterator must be a function");var n=t.length;if(n===+n)for(var s=0;s<n;s++)a.call(r,t[s],s,t);else for(var o in t)e.call(t,o)&&a.call(r,t[o],o,t)}},3136:function(t){"use strict";var e=Object.prototype.toString,i=Math.max,a=function(t,e){for(var i=[],a=0;a<t.length;a+=1)i[a]=t[a];for(var r=0;r<e.length;r+=1)i[r+t.length]=e[r];return i},r=function(t,e){for(var i=[],a=e||0,r=0;a<t.length;a+=1,r+=1)i[r]=t[a];return i},n=function(t,e){for(var i="",a=0;a<t.length;a+=1)i+=t[a],a+1<t.length&&(i+=e);return i};t.exports=function(t){var s,o=this;if("function"!=typeof o||"[object Function]"!==e.apply(o))throw TypeError("Function.prototype.bind called on incompatible "+o);for(var l=r(arguments,1),d=i(0,o.length-l.length),c=[],u=0;u<d;u++)c[u]="$"+u;if(s=Function("binder","return function ("+n(c,",")+"){ return binder.apply(this,arguments); }")(function(){if(this instanceof s){var e=o.apply(this,a(l,arguments));return Object(e)===e?e:this}return o.apply(t,a(l,arguments))}),o.prototype){var f=function(){};f.prototype=o.prototype,s.prototype=new f,f.prototype=null}return s}},1212:function(t,e,i){"use strict";var a=i(3136);t.exports=Function.prototype.bind||a},3197:function(t,e,i){"use strict";var a,r=i(2811),n=i(1545),s=i(7181),o=i(22),l=i(2803),d=i(5182),c=i(8202),u=i(3284),f=i(7173),h=i(847),p=i(2916),m=i(9882),b=i(3291),g=i(553),x=i(8629),v=Function,y=function(t){try{return v('"use strict"; return ('+t+").constructor;")()}catch(t){}},w=i(3990),k=i(446),_=function(){throw new c},j=w?function(){try{return arguments.callee,_}catch(t){try{return w(arguments,"callee").get}catch(t){return _}}}():_,S=i(4871)(),z=i(699),N=i(7823),A=i(7904),E=i(1909),C=i(8737),T={},P="u">typeof Uint8Array&&z?z(Uint8Array):a,R={__proto__:null,"%AggregateError%":"u"<typeof AggregateError?a:AggregateError,"%Array%":Array,"%ArrayBuffer%":"u"<typeof ArrayBuffer?a:ArrayBuffer,"%ArrayIteratorPrototype%":S&&z?z([][Symbol.iterator]()):a,"%AsyncFromSyncIteratorPrototype%":a,"%AsyncFunction%":T,"%AsyncGenerator%":T,"%AsyncGeneratorFunction%":T,"%AsyncIteratorPrototype%":T,"%Atomics%":"u"<typeof Atomics?a:Atomics,"%BigInt%":"u"<typeof BigInt?a:BigInt,"%BigInt64Array%":"u"<typeof BigInt64Array?a:BigInt64Array,"%BigUint64Array%":"u"<typeof BigUint64Array?a:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"u"<typeof DataView?a:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":n,"%eval%":eval,"%EvalError%":s,"%Float16Array%":"u"<typeof Float16Array?a:Float16Array,"%Float32Array%":"u"<typeof Float32Array?a:Float32Array,"%Float64Array%":"u"<typeof Float64Array?a:Float64Array,"%FinalizationRegistry%":"u"<typeof FinalizationRegistry?a:FinalizationRegistry,"%Function%":v,"%GeneratorFunction%":T,"%Int8Array%":"u"<typeof Int8Array?a:Int8Array,"%Int16Array%":"u"<typeof Int16Array?a:Int16Array,"%Int32Array%":"u"<typeof Int32Array?a:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":S&&z?z(z([][Symbol.iterator]())):a,"%JSON%":"object"==typeof JSON?JSON:a,"%Map%":"u"<typeof Map?a:Map,"%MapIteratorPrototype%":"u">typeof Map&&S&&z?z((new Map)[Symbol.iterator]()):a,"%Math%":Math,"%Number%":Number,"%Object%":r,"%Object.getOwnPropertyDescriptor%":w,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"u"<typeof Promise?a:Promise,"%Proxy%":"u"<typeof Proxy?a:Proxy,"%RangeError%":o,"%ReferenceError%":l,"%Reflect%":"u"<typeof Reflect?a:Reflect,"%RegExp%":RegExp,"%Set%":"u"<typeof Set?a:Set,"%SetIteratorPrototype%":"u">typeof Set&&S&&z?z((new Set)[Symbol.iterator]()):a,"%SharedArrayBuffer%":"u"<typeof SharedArrayBuffer?a:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":S&&z?z(""[Symbol.iterator]()):a,"%Symbol%":S?Symbol:a,"%SyntaxError%":d,"%ThrowTypeError%":j,"%TypedArray%":P,"%TypeError%":c,"%Uint8Array%":"u"<typeof Uint8Array?a:Uint8Array,"%Uint8ClampedArray%":"u"<typeof Uint8ClampedArray?a:Uint8ClampedArray,"%Uint16Array%":"u"<typeof Uint16Array?a:Uint16Array,"%Uint32Array%":"u"<typeof Uint32Array?a:Uint32Array,"%URIError%":u,"%WeakMap%":"u"<typeof WeakMap?a:WeakMap,"%WeakRef%":"u"<typeof WeakRef?a:WeakRef,"%WeakSet%":"u"<typeof WeakSet?a:WeakSet,"%Function.prototype.call%":C,"%Function.prototype.apply%":E,"%Object.defineProperty%":k,"%Object.getPrototypeOf%":N,"%Math.abs%":f,"%Math.floor%":h,"%Math.max%":p,"%Math.min%":m,"%Math.pow%":b,"%Math.round%":g,"%Math.sign%":x,"%Reflect.getPrototypeOf%":A};if(z)try{null.error}catch(t){var O=z(z(t));R["%Error.prototype%"]=O}var M=function t(e){var i;if("%AsyncFunction%"===e)i=y("async function () {}");else if("%GeneratorFunction%"===e)i=y("function* () {}");else if("%AsyncGeneratorFunction%"===e)i=y("async function* () {}");else if("%AsyncGenerator%"===e){var a=t("%AsyncGeneratorFunction%");a&&(i=a.prototype)}else if("%AsyncIteratorPrototype%"===e){var r=t("%AsyncGenerator%");r&&z&&(i=z(r.prototype))}return R[e]=i,i},I={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},D=i(1212),L=i(3270),B=D.call(C,Array.prototype.concat),F=D.call(E,Array.prototype.splice),U=D.call(C,String.prototype.replace),V=D.call(C,String.prototype.slice),$=D.call(C,RegExp.prototype.exec),W=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,H=/\\(\\)?/g,q=function(t){var e=V(t,0,1),i=V(t,-1);if("%"===e&&"%"!==i)throw new d("invalid intrinsic syntax, expected closing `%`");if("%"===i&&"%"!==e)throw new d("invalid intrinsic syntax, expected opening `%`");var a=[];return U(t,W,function(t,e,i,r){a[a.length]=i?U(r,H,"$1"):e||t}),a},G=function(t,e){var i,a=t;if(L(I,a)&&(a="%"+(i=I[a])[0]+"%"),L(R,a)){var r=R[a];if(r===T&&(r=M(a)),void 0===r&&!e)throw new c("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:i,name:a,value:r}}throw new d("intrinsic "+t+" does not exist!")};t.exports=function(t,e){if("string"!=typeof t||0===t.length)throw new c("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof e)throw new c('"allowMissing" argument must be a boolean');if(null===$(/^%?[^%]*%?$/,t))throw new d("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var i=q(t),a=i.length>0?i[0]:"",r=G("%"+a+"%",e),n=r.name,s=r.value,o=!1,l=r.alias;l&&(a=l[0],F(i,B([0,1],l)));for(var u=1,f=!0;u<i.length;u+=1){var h=i[u],p=V(h,0,1),m=V(h,-1);if(('"'===p||"'"===p||"`"===p||'"'===m||"'"===m||"`"===m)&&p!==m)throw new d("property names with quotes must have matching quotes");if("constructor"!==h&&f||(o=!0),a+="."+h,L(R,n="%"+a+"%"))s=R[n];else if(null!=s){if(!(h in s)){if(!e)throw new c("base intrinsic for "+t+" exists, but the property is not available.");return}if(w&&u+1>=i.length){var b=w(s,h);s=(f=!!b)&&"get"in b&&!("originalValue"in b.get)?b.get:s[h]}else f=L(s,h),s=s[h];f&&!o&&(R[n]=s)}}return s}},7823:function(t,e,i){"use strict";t.exports=i(2811).getPrototypeOf||null},7904:function(t){"use strict";t.exports="u">typeof Reflect&&Reflect.getPrototypeOf||null},699:function(t,e,i){"use strict";var a=i(7904),r=i(7823),n=i(6211);t.exports=a?function(t){return a(t)}:r?function(t){if(!t||"object"!=typeof t&&"function"!=typeof t)throw TypeError("getProto: not an object");return r(t)}:n?function(t){return n(t)}:null},4596:function(t){"use strict";t.exports=Object.getOwnPropertyDescriptor},3990:function(t,e,i){"use strict";var a=i(4596);if(a)try{a([],"length")}catch(t){a=null}t.exports=a},7122:function(t,e,i){"use strict";var a=i(446),r=function(){return!!a};r.hasArrayLengthDefineBug=function(){if(!a)return null;try{return 1!==a([],"length",{value:1}).length}catch(t){return!0}},t.exports=r},9942:function(t,e,i){"use strict";var a="u">typeof Symbol&&Symbol,r=i(3773);t.exports=function(){return"function"==typeof a&&"function"==typeof Symbol&&"symbol"==typeof a("foo")&&"symbol"==typeof Symbol("bar")&&r()}},3773:function(t){"use strict";t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),i=Object(e);if("string"==typeof e||"[object Symbol]"!==Object.prototype.toString.call(e)||"[object Symbol]"!==Object.prototype.toString.call(i))return!1;for(e in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length||"function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var a=Object.getOwnPropertySymbols(t);if(1!==a.length||a[0]!==e||!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var r=Object.getOwnPropertyDescriptor(t,e);if(42!==r.value||!0!==r.enumerable)return!1}return!0}},4871:function(t,e,i){"use strict";var a="u">typeof Symbol&&Symbol,r=i(5960);t.exports=function(){return"function"==typeof a&&"function"==typeof Symbol&&"symbol"==typeof a("foo")&&"symbol"==typeof Symbol("bar")&&r()}},5960:function(t){"use strict";t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),i=Object(e);if("string"==typeof e||"[object Symbol]"!==Object.prototype.toString.call(e)||"[object Symbol]"!==Object.prototype.toString.call(i))return!1;for(var a in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length||"function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var r=Object.getOwnPropertySymbols(t);if(1!==r.length||r[0]!==e||!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var n=Object.getOwnPropertyDescriptor(t,e);if(42!==n.value||!0!==n.enumerable)return!1}return!0}},3270:function(t,e,i){"use strict";var a=Function.prototype.call,r=Object.prototype.hasOwnProperty;t.exports=i(1212).call(a,r)},3782:function(t){"function"==typeof Object.create?t.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(t,e){if(e){t.super_=e;var i=function(){};i.prototype=e.prototype,t.prototype=new i,t.prototype.constructor=t}}},5157:function(t){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,i=Object.prototype.toString,a=function(t){return(!e||!t||"object"!=typeof t||!(Symbol.toStringTag in t))&&"[object Arguments]"===i.call(t)},r=function(t){return!!a(t)||null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Array]"!==i.call(t)&&"[object Function]"===i.call(t.callee)},n=function(){return a(arguments)}();a.isLegacyArguments=r,t.exports=n?a:r},3391:function(t){"use strict";var e=Object.prototype.toString,i=Function.prototype.toString,a=/^\s*(?:function)?\*/,r="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,n=Object.getPrototypeOf,s=function(){if(!r)return!1;try{return Function("return function*() {}")()}catch(t){}}(),o=s?n(s):{};t.exports=function(t){return"function"==typeof t&&(!!a.test(i.call(t))||(r?n(t)===o:"[object GeneratorFunction]"===e.call(t)))}},994:function(e,i,a){"use strict";var r=a(6144),n=a(1349),s=a(516),o=s("Object.prototype.toString"),l=a(9942)()&&"symbol"==typeof Symbol.toStringTag,d=n(),c=s("Array.prototype.indexOf",!0)||function(t,e){for(var i=0;i<t.length;i+=1)if(t[i]===e)return i;return -1},u=s("String.prototype.slice"),f={},h=a(2154),p=Object.getPrototypeOf;l&&h&&p&&r(d,function(e){var i=new t.g[e];if(!(Symbol.toStringTag in i))throw EvalError("this engine has support for Symbol.toStringTag, but "+e+" does not have the property! Please report this.");var a=p(i),r=h(a,Symbol.toStringTag);r||(r=h(p(a),Symbol.toStringTag)),f[e]=r.get});var m=function(t){var e=!1;return r(f,function(i,a){if(!e)try{e=i.call(t)===a}catch(t){}}),e};e.exports=function(t){return!!t&&"object"==typeof t&&(l?!!h&&m(t):c(d,u(o(t),8,-1))>-1)}},7173:function(t){"use strict";t.exports=Math.abs},847:function(t){"use strict";t.exports=Math.floor},219:function(t){"use strict";t.exports=Number.isNaN||function(t){return t!=t}},2916:function(t){"use strict";t.exports=Math.max},9882:function(t){"use strict";t.exports=Math.min},3291:function(t){"use strict";t.exports=Math.pow},553:function(t){"use strict";t.exports=Math.round},8629:function(t,e,i){"use strict";var a=i(219);t.exports=function(t){return a(t)||0===t?t:t<0?-1:1}},3143:function(t,e,i){"use strict";var a=i(3197),r=i(819),n=i(7122)(),s=i(3990),o=i(8202),l=a("%Math.floor%");t.exports=function(t,e){if("function"!=typeof t)throw new o("`fn` is not a function");if("number"!=typeof e||e<0||e>0xffffffff||l(e)!==e)throw new o("`length` must be a positive 32-bit integer");var i=arguments.length>2&&!!arguments[2],a=!0,d=!0;if("length"in t&&s){var c=s(t,"length");c&&!c.configurable&&(a=!1),c&&!c.writable&&(d=!1)}return(a||d||!i)&&(n?r(t,"length",e,!0,!0):r(t,"length",e)),t}},2369:function(t){t.exports=function(t){return t instanceof a.Buffer}},5584:function(t,e,i){"use strict";var a=i(5157),r=i(3391),n=i(1490),s=i(994);function o(t){return t.call.bind(t)}var l="u">typeof BigInt,d="u">typeof Symbol,c=o(Object.prototype.toString),u=o(Number.prototype.valueOf),f=o(String.prototype.valueOf),h=o(Boolean.prototype.valueOf);if(l)var p=o(BigInt.prototype.valueOf);if(d)var m=o(Symbol.prototype.valueOf);function b(t,e){if("object"!=typeof t)return!1;try{return e(t),!0}catch(t){return!1}}function g(t){return"[object Map]"===c(t)}function x(t){return"[object Set]"===c(t)}function v(t){return"[object WeakMap]"===c(t)}function y(t){return"[object WeakSet]"===c(t)}function w(t){return"[object ArrayBuffer]"===c(t)}function k(t){return!("u"<typeof ArrayBuffer)&&(w.working?w(t):t instanceof ArrayBuffer)}function _(t){return"[object DataView]"===c(t)}function j(t){return!("u"<typeof DataView)&&(_.working?_(t):t instanceof DataView)}e.isArgumentsObject=a,e.isGeneratorFunction=r,e.isTypedArray=s,e.isPromise=function(t){return"u">typeof Promise&&t instanceof Promise||null!==t&&"object"==typeof t&&"function"==typeof t.then&&"function"==typeof t.catch},e.isArrayBufferView=function(t){return"u">typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):s(t)||j(t)},e.isUint8Array=function(t){return"Uint8Array"===n(t)},e.isUint8ClampedArray=function(t){return"Uint8ClampedArray"===n(t)},e.isUint16Array=function(t){return"Uint16Array"===n(t)},e.isUint32Array=function(t){return"Uint32Array"===n(t)},e.isInt8Array=function(t){return"Int8Array"===n(t)},e.isInt16Array=function(t){return"Int16Array"===n(t)},e.isInt32Array=function(t){return"Int32Array"===n(t)},e.isFloat32Array=function(t){return"Float32Array"===n(t)},e.isFloat64Array=function(t){return"Float64Array"===n(t)},e.isBigInt64Array=function(t){return"BigInt64Array"===n(t)},e.isBigUint64Array=function(t){return"BigUint64Array"===n(t)},g.working="u">typeof Map&&g(new Map),e.isMap=function(t){return!("u"<typeof Map)&&(g.working?g(t):t instanceof Map)},x.working="u">typeof Set&&x(new Set),e.isSet=function(t){return!("u"<typeof Set)&&(x.working?x(t):t instanceof Set)},v.working="u">typeof WeakMap&&v(new WeakMap),e.isWeakMap=function(t){return!("u"<typeof WeakMap)&&(v.working?v(t):t instanceof WeakMap)},y.working="u">typeof WeakSet&&y(new WeakSet),e.isWeakSet=function(t){return y(t)},w.working="u">typeof ArrayBuffer&&w(new ArrayBuffer),e.isArrayBuffer=k,_.working="u">typeof ArrayBuffer&&"u">typeof DataView&&_(new DataView(new ArrayBuffer(1),0,1)),e.isDataView=j;var S="u">typeof SharedArrayBuffer?SharedArrayBuffer:void 0;function z(t){return"[object SharedArrayBuffer]"===c(t)}function N(t){return void 0!==S&&(void 0===z.working&&(z.working=z(new S)),z.working?z(t):t instanceof S)}function A(t){return b(t,u)}function E(t){return b(t,f)}function C(t){return b(t,h)}function T(t){return l&&b(t,p)}function P(t){return d&&b(t,m)}e.isSharedArrayBuffer=N,e.isAsyncFunction=function(t){return"[object AsyncFunction]"===c(t)},e.isMapIterator=function(t){return"[object Map Iterator]"===c(t)},e.isSetIterator=function(t){return"[object Set Iterator]"===c(t)},e.isGeneratorObject=function(t){return"[object Generator]"===c(t)},e.isWebAssemblyCompiledModule=function(t){return"[object WebAssembly.Module]"===c(t)},e.isNumberObject=A,e.isStringObject=E,e.isBooleanObject=C,e.isBigIntObject=T,e.isSymbolObject=P,e.isBoxedPrimitive=function(t){return A(t)||E(t)||C(t)||T(t)||P(t)},e.isAnyArrayBuffer=function(t){return"u">typeof Uint8Array&&(k(t)||N(t))},["isProxy","isExternal","isModuleNamespaceObject"].forEach(function(t){Object.defineProperty(e,t,{enumerable:!1,value:function(){throw Error(t+" is not supported in userland")}})})},8177:function(t,e,i){var a=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),i={},a=0;a<e.length;a++)i[e[a]]=Object.getOwnPropertyDescriptor(t,e[a]);return i},n=/%[sdj%]/g;e.format=function(t){if(!v(t)){for(var e=[],i=0;i<arguments.length;i++)e.push(d(arguments[i]));return e.join(" ")}for(var i=1,a=arguments,r=a.length,s=String(t).replace(n,function(t){if("%%"===t)return"%";if(i>=r)return t;switch(t){case"%s":return String(a[i++]);case"%d":return Number(a[i++]);case"%j":try{return JSON.stringify(a[i++])}catch(t){return"[Circular]"}default:return t}}),o=a[i];i<r;o=a[++i])g(o)||!k(o)?s+=" "+o:s+=" "+d(o);return s},e.deprecate=function(t,i){if(void 0!==r.default&&!0===r.default.noDeprecation)return t;if(void 0===r.default)return function(){return e.deprecate(t,i).apply(this,arguments)};var a=!1;return function(){if(!a){if(r.default.throwDeprecation)throw Error(i);r.default.traceDeprecation?console.trace(i):console.error(i),a=!0}return t.apply(this,arguments)}};var s={},o=/^$/;if(r.default.env.NODE_DEBUG){var l=r.default.env.NODE_DEBUG;o=RegExp("^"+(l=l.replace(/[|\\{}()[\]^$+?.]/g,"\\$&").replace(/\*/g,".*").replace(/,/g,"$|^").toUpperCase())+"$","i")}function d(t,i){var a={seen:[],stylize:u};return arguments.length>=3&&(a.depth=arguments[2]),arguments.length>=4&&(a.colors=arguments[3]),b(i)?a.showHidden=i:i&&e._extend(a,i),y(a.showHidden)&&(a.showHidden=!1),y(a.depth)&&(a.depth=2),y(a.colors)&&(a.colors=!1),y(a.customInspect)&&(a.customInspect=!0),a.colors&&(a.stylize=c),f(a,t,a.depth)}function c(t,e){var i=d.styles[e];return i?"\x1b["+d.colors[i][0]+"m"+t+"\x1b["+d.colors[i][1]+"m":t}function u(t,e){return t}function f(t,i,a){if(t.customInspect&&i&&S(i.inspect)&&i.inspect!==e.inspect&&!(i.constructor&&i.constructor.prototype===i)){var r,n,s,o,l,d,c=i.inspect(a,t);return v(c)||(c=f(t,c,a)),c}var u=function(t,e){if(y(e))return t.stylize("undefined","undefined");if(v(e)){var i="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(i,"string")}return x(e)?t.stylize(""+e,"number"):b(e)?t.stylize(""+e,"boolean"):g(e)?t.stylize("null","null"):void 0}(t,i);if(u)return u;var k=Object.keys(i),z=(l={},k.forEach(function(t,e){l[t]=!0}),l);if(t.showHidden&&(k=Object.getOwnPropertyNames(i)),j(i)&&(k.indexOf("message")>=0||k.indexOf("description")>=0))return h(i);if(0===k.length){if(S(i)){var N=i.name?": "+i.name:"";return t.stylize("[Function"+N+"]","special")}if(w(i))return t.stylize(RegExp.prototype.toString.call(i),"regexp");if(_(i))return t.stylize(Date.prototype.toString.call(i),"date");if(j(i))return h(i)}var A="",C=!1,T=["{","}"];if(m(i)&&(C=!0,T=["[","]"]),S(i)&&(A=" [Function"+(i.name?": "+i.name:"")+"]"),w(i)&&(A=" "+RegExp.prototype.toString.call(i)),_(i)&&(A=" "+Date.prototype.toUTCString.call(i)),j(i)&&(A=" "+h(i)),0===k.length&&(!C||0==i.length))return T[0]+A+T[1];if(a<0)if(w(i))return t.stylize(RegExp.prototype.toString.call(i),"regexp");else return t.stylize("[Object]","special");return t.seen.push(i),d=C?function(t,e,i,a,r){for(var n=[],s=0,o=e.length;s<o;++s)E(e,String(s))?n.push(p(t,e,i,a,String(s),!0)):n.push("");return r.forEach(function(r){r.match(/^\d+$/)||n.push(p(t,e,i,a,r,!0))}),n}(t,i,a,z,k):k.map(function(e){return p(t,i,a,z,e,C)}),t.seen.pop(),r=d,n=A,s=T,o=0,r.reduce(function(t,e){return o++,e.indexOf("\n")>=0&&o++,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?s[0]+(""===n?"":n+"\n ")+" "+r.join(",\n  ")+" "+s[1]:s[0]+n+" "+r.join(", ")+" "+s[1]}function h(t){return"["+Error.prototype.toString.call(t)+"]"}function p(t,e,i,a,r,n){var s,o,l;if((l=Object.getOwnPropertyDescriptor(e,r)||{value:e[r]}).get?o=l.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):l.set&&(o=t.stylize("[Setter]","special")),E(a,r)||(s="["+r+"]"),!o&&(0>t.seen.indexOf(l.value)?(o=g(i)?f(t,l.value,null):f(t,l.value,i-1)).indexOf("\n")>-1&&(o=n?o.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+o.split("\n").map(function(t){return"   "+t}).join("\n")):o=t.stylize("[Circular]","special")),y(s)){if(n&&r.match(/^\d+$/))return o;(s=JSON.stringify(""+r)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"))}return s+": "+o}function m(t){return Array.isArray(t)}function b(t){return"boolean"==typeof t}function g(t){return null===t}function x(t){return"number"==typeof t}function v(t){return"string"==typeof t}function y(t){return void 0===t}function w(t){return k(t)&&"[object RegExp]"===z(t)}function k(t){return"object"==typeof t&&null!==t}function _(t){return k(t)&&"[object Date]"===z(t)}function j(t){return k(t)&&("[object Error]"===z(t)||t instanceof Error)}function S(t){return"function"==typeof t}function z(t){return Object.prototype.toString.call(t)}function N(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(t){if(!s[t=t.toUpperCase()])if(o.test(t)){var i=r.default.pid;s[t]=function(){var a=e.format.apply(e,arguments);console.error("%s %d: %s",t,i,a)}}else s[t]=function(){};return s[t]},e.inspect=d,d.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},d.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.types=i(5584),e.isArray=m,e.isBoolean=b,e.isNull=g,e.isNullOrUndefined=function(t){return null==t},e.isNumber=x,e.isString=v,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=y,e.isRegExp=w,e.types.isRegExp=w,e.isObject=k,e.isDate=_,e.types.isDate=_,e.isError=j,e.types.isNativeError=j,e.isFunction=S,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=i(2369);var A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function E(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){var t,i;console.log("%s - %s",(i=[N((t=new Date).getHours()),N(t.getMinutes()),N(t.getSeconds())].join(":"),[t.getDate(),A[t.getMonth()],i].join(" ")),e.format.apply(e,arguments))},e.inherits=i(3782),e._extend=function(t,e){if(!e||!k(e))return t;for(var i=Object.keys(e),a=i.length;a--;)t[i[a]]=e[i[a]];return t};var C="u">typeof Symbol?Symbol("util.promisify.custom"):void 0;function T(t,e){if(!t){var i=Error("Promise was rejected with a falsy value");i.reason=t,t=i}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw TypeError('The "original" argument must be of type Function');if(C&&t[C]){var e=t[C];if("function"!=typeof e)throw TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,C,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,i,a=new Promise(function(t,a){e=t,i=a}),r=[],n=0;n<arguments.length;n++)r.push(arguments[n]);r.push(function(t,a){t?i(t):e(a)});try{t.apply(this,r)}catch(t){i(t)}return a}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),C&&Object.defineProperty(e,C,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,a(t))},e.promisify.custom=C,e.callbackify=function(t){if("function"!=typeof t)throw TypeError('The "original" argument must be of type Function');function e(){for(var e=[],i=0;i<arguments.length;i++)e.push(arguments[i]);var a=e.pop();if("function"!=typeof a)throw TypeError("The last argument must be of type Function");var n=this,s=function(){return a.apply(n,arguments)};t.apply(this,e).then(function(t){r.default.nextTick(s.bind(null,null,t))},function(t){r.default.nextTick(T.bind(null,t,s))})}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),Object.defineProperties(e,a(t)),e}},1490:function(e,i,a){"use strict";var r=a(6144),n=a(1349),s=a(516),o=s("Object.prototype.toString"),l=a(9942)()&&"symbol"==typeof Symbol.toStringTag,d=n(),c=s("String.prototype.slice"),u={},f=a(2154),h=Object.getPrototypeOf;l&&f&&h&&r(d,function(e){if("function"==typeof t.g[e]){var i=new t.g[e];if(!(Symbol.toStringTag in i))throw EvalError("this engine has support for Symbol.toStringTag, but "+e+" does not have the property! Please report this.");var a=h(i),r=f(a,Symbol.toStringTag);r||(r=f(h(a),Symbol.toStringTag)),u[e]=r.get}});var p=function(t){var e=!1;return r(u,function(i,a){if(!e)try{var r=i.call(t);r===a&&(e=r)}catch(t){}}),e},m=a(994);e.exports=function(t){return!!m(t)&&(l?p(t):c(o(t),8,-1))}},1349:function(e,i,a){"use strict";var r=a(8992);e.exports=function(){return r(["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],function(e){return"function"==typeof t.g[e]})}},2154:function(t,e,i){"use strict";t.exports=i(3990)}},s={};function o(t){var e=s[t];if(void 0!==e)return e.exports;var i=s[t]={exports:{}},a=!0;try{n[t](i,i.exports,o),a=!1}finally{a&&delete s[t]}return i.exports}o.ab="/ROOT/node_modules/next/dist/compiled/util/",e.exports=o(8177)},12569,(t,e,i)=>{var a=t.i(47167),r={782:function(t){"function"==typeof Object.create?t.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(t,e){if(e){t.super_=e;var i=function(){};i.prototype=e.prototype,t.prototype=new i,t.prototype.constructor=t}}},646:function(t){"use strict";let e={};function i(t,i,a){a||(a=Error);class r extends a{constructor(t,e,a){super(function(t,e,a){return"string"==typeof i?i:i(t,e,a)}(t,e,a))}}r.prototype.name=a.name,r.prototype.code=t,e[t]=r}function a(t,e){if(!Array.isArray(t))return`of ${e} ${String(t)}`;{let i=t.length;return(t=t.map(t=>String(t)),i>2)?`one of ${e} ${t.slice(0,i-1).join(", ")}, or `+t[i-1]:2===i?`one of ${e} ${t[0]} or ${t[1]}`:`of ${e} ${t[0]}`}}i("ERR_INVALID_OPT_VALUE",function(t,e){return'The value "'+e+'" is invalid for option "'+t+'"'},TypeError),i("ERR_INVALID_ARG_TYPE",function(t,e,i){var r,n,s,o;let l,d;if("string"==typeof e&&(r="not ",e.substr(0,r.length)===r)?(l="must not be",e=e.replace(/^not /,"")):l="must be",n=" argument",(void 0===s||s>t.length)&&(s=t.length),t.substring(s-n.length,s)===n)d=`The ${t} ${l} ${a(e,"type")}`;else{let i=("number"!=typeof o&&(o=0),o+1>t.length||-1===t.indexOf(".",o))?"argument":"property";d=`The "${t}" ${i} ${l} ${a(e,"type")}`}return d+`. Received type ${typeof i}`},TypeError),i("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),i("ERR_METHOD_NOT_IMPLEMENTED",function(t){return"The "+t+" method is not implemented"}),i("ERR_STREAM_PREMATURE_CLOSE","Premature close"),i("ERR_STREAM_DESTROYED",function(t){return"Cannot call "+t+" after a stream was destroyed"}),i("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),i("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),i("ERR_STREAM_WRITE_AFTER_END","write after end"),i("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),i("ERR_UNKNOWN_ENCODING",function(t){return"Unknown encoding: "+t},TypeError),i("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),t.exports.q=e},403:function(t,e,i){"use strict";var r=Object.keys||function(t){var e=[];for(var i in t)e.push(i);return e};t.exports=c;var n=i(709),s=i(337);i(782)(c,n);for(var o=r(s.prototype),l=0;l<o.length;l++){var d=o[l];c.prototype[d]||(c.prototype[d]=s.prototype[d])}function c(t){if(!(this instanceof c))return new c(t);n.call(this,t),s.call(this,t),this.allowHalfOpen=!0,t&&(!1===t.readable&&(this.readable=!1),!1===t.writable&&(this.writable=!1),!1===t.allowHalfOpen&&(this.allowHalfOpen=!1,this.once("end",u)))}function u(){this._writableState.ended||a.default.nextTick(f,this)}function f(t){t.end()}Object.defineProperty(c.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(c.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(c.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(c.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&this._readableState.destroyed&&this._writableState.destroyed},set:function(t){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=t,this._writableState.destroyed=t)}})},889:function(t,e,i){"use strict";t.exports=r;var a=i(170);function r(t){if(!(this instanceof r))return new r(t);a.call(this,t)}i(782)(r,a),r.prototype._transform=function(t,e,i){i(null,t)}},709:function(e,i,r){"use strict";e.exports=z,z.ReadableState=S,r(361).EventEmitter;var n,s,o,l,d,c=function(t,e){return t.listeners(e).length},u=r(678),f=r(300).Buffer,h=t.g.Uint8Array||function(){},p=r(837);s=p&&p.debuglog?p.debuglog("stream"):function(){};var m=r(379),b=r(25),g=r(776).getHighWaterMark,x=r(646).q,v=x.ERR_INVALID_ARG_TYPE,y=x.ERR_STREAM_PUSH_AFTER_EOF,w=x.ERR_METHOD_NOT_IMPLEMENTED,k=x.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;r(782)(z,u);var _=b.errorOrDestroy,j=["error","close","destroy","pause","resume"];function S(t,e,i){n=n||r(403),t=t||{},"boolean"!=typeof i&&(i=e instanceof n),this.objectMode=!!t.objectMode,i&&(this.objectMode=this.objectMode||!!t.readableObjectMode),this.highWaterMark=g(this,t,"readableHighWaterMark",i),this.buffer=new m,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,this.emitClose=!1!==t.emitClose,this.autoDestroy=!!t.autoDestroy,this.destroyed=!1,this.defaultEncoding=t.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(o||(o=r(704).s),this.decoder=new o(t.encoding),this.encoding=t.encoding)}function z(t){if(n=n||r(403),!(this instanceof z))return new z(t);var e=this instanceof n;this._readableState=new S(t,this,e),this.readable=!0,t&&("function"==typeof t.read&&(this._read=t.read),"function"==typeof t.destroy&&(this._destroy=t.destroy)),u.call(this)}function N(t,e,i,a,r){s("readableAddChunk",e);var n,o,l=t._readableState;if(null===e)l.reading=!1,function(t,e){if(s("onEofChunk"),!e.ended){if(e.decoder){var i=e.decoder.end();i&&i.length&&(e.buffer.push(i),e.length+=e.objectMode?1:i.length)}e.ended=!0,e.sync?C(t):(e.needReadable=!1,e.emittedReadable||(e.emittedReadable=!0,T(t)))}}(t,l);else if(r||(o=function(t,e){var i;return f.isBuffer(e)||e instanceof h||"string"==typeof e||void 0===e||t.objectMode||(i=new v("chunk",["string","Buffer","Uint8Array"],e)),i}(l,e)),o)_(t,o);else if(l.objectMode||e&&e.length>0)if("string"==typeof e||l.objectMode||Object.getPrototypeOf(e)===f.prototype||(n=e,e=f.from(n)),a)l.endEmitted?_(t,new k):A(t,l,e,!0);else if(l.ended)_(t,new y);else{if(l.destroyed)return!1;l.reading=!1,l.decoder&&!i?(e=l.decoder.write(e),l.objectMode||0!==e.length?A(t,l,e,!1):P(t,l)):A(t,l,e,!1)}else a||(l.reading=!1,P(t,l));return!l.ended&&(l.length<l.highWaterMark||0===l.length)}function A(t,e,i,a){e.flowing&&0===e.length&&!e.sync?(e.awaitDrain=0,t.emit("data",i)):(e.length+=e.objectMode?1:i.length,a?e.buffer.unshift(i):e.buffer.push(i),e.needReadable&&C(t)),P(t,e)}function E(t,e){var i;if(t<=0||0===e.length&&e.ended)return 0;if(e.objectMode)return 1;if(t!=t)if(e.flowing&&e.length)return e.buffer.head.data.length;else return e.length;return(t>e.highWaterMark&&((i=t)>=0x40000000?i=0x40000000:(i--,i|=i>>>1,i|=i>>>2,i|=i>>>4,i|=i>>>8,i|=i>>>16,i++),e.highWaterMark=i),t<=e.length)?t:e.ended?e.length:(e.needReadable=!0,0)}function C(t){var e=t._readableState;s("emitReadable",e.needReadable,e.emittedReadable),e.needReadable=!1,e.emittedReadable||(s("emitReadable",e.flowing),e.emittedReadable=!0,a.default.nextTick(T,t))}function T(t){var e=t._readableState;s("emitReadable_",e.destroyed,e.length,e.ended),!e.destroyed&&(e.length||e.ended)&&(t.emit("readable"),e.emittedReadable=!1),e.needReadable=!e.flowing&&!e.ended&&e.length<=e.highWaterMark,D(t)}function P(t,e){e.readingMore||(e.readingMore=!0,a.default.nextTick(R,t,e))}function R(t,e){for(;!e.reading&&!e.ended&&(e.length<e.highWaterMark||e.flowing&&0===e.length);){var i=e.length;if(s("maybeReadMore read 0"),t.read(0),i===e.length)break}e.readingMore=!1}function O(t){var e=t._readableState;e.readableListening=t.listenerCount("readable")>0,e.resumeScheduled&&!e.paused?e.flowing=!0:t.listenerCount("data")>0&&t.resume()}function M(t){s("readable nexttick read 0"),t.read(0)}function I(t,e){s("resume",e.reading),e.reading||t.read(0),e.resumeScheduled=!1,t.emit("resume"),D(t),e.flowing&&!e.reading&&t.read(0)}function D(t){var e=t._readableState;for(s("flow",e.flowing);e.flowing&&null!==t.read(););}function L(t,e){var i;return 0===e.length?null:(e.objectMode?i=e.buffer.shift():!t||t>=e.length?(i=e.decoder?e.buffer.join(""):1===e.buffer.length?e.buffer.first():e.buffer.concat(e.length),e.buffer.clear()):i=e.buffer.consume(t,e.decoder),i)}function B(t){var e=t._readableState;s("endReadable",e.endEmitted),e.endEmitted||(e.ended=!0,a.default.nextTick(F,e,t))}function F(t,e){if(s("endReadableNT",t.endEmitted,t.length),!t.endEmitted&&0===t.length&&(t.endEmitted=!0,e.readable=!1,e.emit("end"),t.autoDestroy)){var i=e._writableState;(!i||i.autoDestroy&&i.finished)&&e.destroy()}}function U(t,e){for(var i=0,a=t.length;i<a;i++)if(t[i]===e)return i;return -1}Object.defineProperty(z.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(t){this._readableState&&(this._readableState.destroyed=t)}}),z.prototype.destroy=b.destroy,z.prototype._undestroy=b.undestroy,z.prototype._destroy=function(t,e){e(t)},z.prototype.push=function(t,e){var i,a=this._readableState;return a.objectMode?i=!0:"string"==typeof t&&((e=e||a.defaultEncoding)!==a.encoding&&(t=f.from(t,e),e=""),i=!0),N(this,t,e,!1,i)},z.prototype.unshift=function(t){return N(this,t,null,!0,!1)},z.prototype.isPaused=function(){return!1===this._readableState.flowing},z.prototype.setEncoding=function(t){o||(o=r(704).s);var e=new o(t);this._readableState.decoder=e,this._readableState.encoding=this._readableState.decoder.encoding;for(var i=this._readableState.buffer.head,a="";null!==i;)a+=e.write(i.data),i=i.next;return this._readableState.buffer.clear(),""!==a&&this._readableState.buffer.push(a),this._readableState.length=a.length,this},z.prototype.read=function(t){s("read",t),t=parseInt(t,10);var e,i=this._readableState,a=t;if(0!==t&&(i.emittedReadable=!1),0===t&&i.needReadable&&((0!==i.highWaterMark?i.length>=i.highWaterMark:i.length>0)||i.ended))return s("read: emitReadable",i.length,i.ended),0===i.length&&i.ended?B(this):C(this),null;if(0===(t=E(t,i))&&i.ended)return 0===i.length&&B(this),null;var r=i.needReadable;return s("need readable",r),(0===i.length||i.length-t<i.highWaterMark)&&s("length less than watermark",r=!0),i.ended||i.reading?s("reading or ended",r=!1):r&&(s("do read"),i.reading=!0,i.sync=!0,0===i.length&&(i.needReadable=!0),this._read(i.highWaterMark),i.sync=!1,i.reading||(t=E(a,i))),null===(e=t>0?L(t,i):null)?(i.needReadable=i.length<=i.highWaterMark,t=0):(i.length-=t,i.awaitDrain=0),0===i.length&&(i.ended||(i.needReadable=!0),a!==t&&i.ended&&B(this)),null!==e&&this.emit("data",e),e},z.prototype._read=function(t){_(this,new w("_read()"))},z.prototype.pipe=function(t,e){var i,r=this,n=this._readableState;switch(n.pipesCount){case 0:n.pipes=t;break;case 1:n.pipes=[n.pipes,t];break;default:n.pipes.push(t)}n.pipesCount+=1,s("pipe count=%d opts=%j",n.pipesCount,e);var o=e&&!1===e.end||t===a.default.stdout||t===a.default.stderr?b:l;function l(){s("onend"),t.end()}n.endEmitted?a.default.nextTick(o):r.once("end",o),t.on("unpipe",function e(i,a){s("onunpipe"),i===r&&a&&!1===a.hasUnpiped&&(a.hasUnpiped=!0,s("cleanup"),t.removeListener("close",p),t.removeListener("finish",m),t.removeListener("drain",d),t.removeListener("error",h),t.removeListener("unpipe",e),r.removeListener("end",l),r.removeListener("end",b),r.removeListener("data",f),u=!0,n.awaitDrain&&(!t._writableState||t._writableState.needDrain)&&d())});var d=(i=r,function(){var t=i._readableState;s("pipeOnDrain",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,0===t.awaitDrain&&c(i,"data")&&(t.flowing=!0,D(i))});t.on("drain",d);var u=!1;function f(e){s("ondata");var i=t.write(e);s("dest.write",i),!1===i&&((1===n.pipesCount&&n.pipes===t||n.pipesCount>1&&-1!==U(n.pipes,t))&&!u&&(s("false write response, pause",n.awaitDrain),n.awaitDrain++),r.pause())}function h(e){s("onerror",e),b(),t.removeListener("error",h),0===c(t,"error")&&_(t,e)}function p(){t.removeListener("finish",m),b()}function m(){s("onfinish"),t.removeListener("close",p),b()}function b(){s("unpipe"),r.unpipe(t)}return r.on("data",f),!function(t,e,i){if("function"==typeof t.prependListener)return t.prependListener(e,i);t._events&&t._events[e]?Array.isArray(t._events[e])?t._events[e].unshift(i):t._events[e]=[i,t._events[e]]:t.on(e,i)}(t,"error",h),t.once("close",p),t.once("finish",m),t.emit("pipe",r),n.flowing||(s("pipe resume"),r.resume()),t},z.prototype.unpipe=function(t){var e=this._readableState,i={hasUnpiped:!1};if(0===e.pipesCount)return this;if(1===e.pipesCount)return t&&t!==e.pipes||(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,e.flowing=!1,t&&t.emit("unpipe",this,i)),this;if(!t){var a=e.pipes,r=e.pipesCount;e.pipes=null,e.pipesCount=0,e.flowing=!1;for(var n=0;n<r;n++)a[n].emit("unpipe",this,{hasUnpiped:!1});return this}var s=U(e.pipes,t);return -1===s||(e.pipes.splice(s,1),e.pipesCount-=1,1===e.pipesCount&&(e.pipes=e.pipes[0]),t.emit("unpipe",this,i)),this},z.prototype.on=function(t,e){var i=u.prototype.on.call(this,t,e),r=this._readableState;return"data"===t?(r.readableListening=this.listenerCount("readable")>0,!1!==r.flowing&&this.resume()):"readable"!==t||r.endEmitted||r.readableListening||(r.readableListening=r.needReadable=!0,r.flowing=!1,r.emittedReadable=!1,s("on readable",r.length,r.reading),r.length?C(this):r.reading||a.default.nextTick(M,this)),i},z.prototype.addListener=z.prototype.on,z.prototype.removeListener=function(t,e){var i=u.prototype.removeListener.call(this,t,e);return"readable"===t&&a.default.nextTick(O,this),i},z.prototype.removeAllListeners=function(t){var e=u.prototype.removeAllListeners.apply(this,arguments);return("readable"===t||void 0===t)&&a.default.nextTick(O,this),e},z.prototype.resume=function(){var t,e,i=this._readableState;return i.flowing||(s("resume"),i.flowing=!i.readableListening,t=this,(e=i).resumeScheduled||(e.resumeScheduled=!0,a.default.nextTick(I,t,e))),i.paused=!1,this},z.prototype.pause=function(){return s("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(s("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState.paused=!0,this},z.prototype.wrap=function(t){var e=this,i=this._readableState,a=!1;for(var r in t.on("end",function(){if(s("wrapped end"),i.decoder&&!i.ended){var t=i.decoder.end();t&&t.length&&e.push(t)}e.push(null)}),t.on("data",function(r){s("wrapped data"),i.decoder&&(r=i.decoder.write(r)),i.objectMode&&null==r||(i.objectMode||r&&r.length)&&(e.push(r)||(a=!0,t.pause()))}),t)void 0===this[r]&&"function"==typeof t[r]&&(this[r]=function(e){return function(){return t[e].apply(t,arguments)}}(r));for(var n=0;n<j.length;n++)t.on(j[n],this.emit.bind(this,j[n]));return this._read=function(e){s("wrapped _read",e),a&&(a=!1,t.resume())},this},"function"==typeof Symbol&&(z.prototype[Symbol.asyncIterator]=function(){return void 0===l&&(l=r(871)),l(this)}),Object.defineProperty(z.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(z.prototype,"readableBuffer",{enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(z.prototype,"readableFlowing",{enumerable:!1,get:function(){return this._readableState.flowing},set:function(t){this._readableState&&(this._readableState.flowing=t)}}),z._fromList=L,Object.defineProperty(z.prototype,"readableLength",{enumerable:!1,get:function(){return this._readableState.length}}),"function"==typeof Symbol&&(z.from=function(t,e){return void 0===d&&(d=r(727)),d(z,t,e)})},170:function(t,e,i){"use strict";t.exports=c;var a=i(646).q,r=a.ERR_METHOD_NOT_IMPLEMENTED,n=a.ERR_MULTIPLE_CALLBACK,s=a.ERR_TRANSFORM_ALREADY_TRANSFORMING,o=a.ERR_TRANSFORM_WITH_LENGTH_0,l=i(403);function d(t,e){var i=this._transformState;i.transforming=!1;var a=i.writecb;if(null===a)return this.emit("error",new n);i.writechunk=null,i.writecb=null,null!=e&&this.push(e),a(t);var r=this._readableState;r.reading=!1,(r.needReadable||r.length<r.highWaterMark)&&this._read(r.highWaterMark)}function c(t){if(!(this instanceof c))return new c(t);l.call(this,t),this._transformState={afterTransform:d.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,t&&("function"==typeof t.transform&&(this._transform=t.transform),"function"==typeof t.flush&&(this._flush=t.flush)),this.on("prefinish",u)}function u(){var t=this;"function"!=typeof this._flush||this._readableState.destroyed?f(this,null,null):this._flush(function(e,i){f(t,e,i)})}function f(t,e,i){if(e)return t.emit("error",e);if(null!=i&&t.push(i),t._writableState.length)throw new o;if(t._transformState.transforming)throw new s;return t.push(null)}i(782)(c,l),c.prototype.push=function(t,e){return this._transformState.needTransform=!1,l.prototype.push.call(this,t,e)},c.prototype._transform=function(t,e,i){i(new r("_transform()"))},c.prototype._write=function(t,e,i){var a=this._transformState;if(a.writecb=i,a.writechunk=t,a.writeencoding=e,!a.transforming){var r=this._readableState;(a.needTransform||r.needReadable||r.length<r.highWaterMark)&&this._read(r.highWaterMark)}},c.prototype._read=function(t){var e=this._transformState;null===e.writechunk||e.transforming?e.needTransform=!0:(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform))},c.prototype._destroy=function(t,e){l.prototype._destroy.call(this,t,function(t){e(t)})}},337:function(e,i,r){"use strict";function n(t){var e=this;this.next=null,this.entry=null,this.finish=function(){var i=e,a=t,r=i.entry;for(i.entry=null;r;){var n=r.callback;a.pendingcb--,n(void 0),r=r.next}a.corkedRequestsFree.next=i}}e.exports=z,z.WritableState=S;var s,o,l={deprecate:r(769)},d=r(678),c=r(300).Buffer,u=t.g.Uint8Array||function(){},f=r(25),h=r(776).getHighWaterMark,p=r(646).q,m=p.ERR_INVALID_ARG_TYPE,b=p.ERR_METHOD_NOT_IMPLEMENTED,g=p.ERR_MULTIPLE_CALLBACK,x=p.ERR_STREAM_CANNOT_PIPE,v=p.ERR_STREAM_DESTROYED,y=p.ERR_STREAM_NULL_VALUES,w=p.ERR_STREAM_WRITE_AFTER_END,k=p.ERR_UNKNOWN_ENCODING,_=f.errorOrDestroy;function j(){}function S(t,e,i){s=s||r(403),t=t||{},"boolean"!=typeof i&&(i=e instanceof s),this.objectMode=!!t.objectMode,i&&(this.objectMode=this.objectMode||!!t.writableObjectMode),this.highWaterMark=h(this,t,"writableHighWaterMark",i),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var o=!1===t.decodeStrings;this.decodeStrings=!o,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){!function(t,e){var i=t._writableState,r=i.sync,n=i.writecb;if("function"!=typeof n)throw new g;if(i.writing=!1,i.writecb=null,i.length-=i.writelen,i.writelen=0,e)--i.pendingcb,r?(a.default.nextTick(n,e),a.default.nextTick(P,t,i),t._writableState.errorEmitted=!0,_(t,e)):(n(e),t._writableState.errorEmitted=!0,_(t,e),P(t,i));else{var s=C(i)||t.destroyed;s||i.corked||i.bufferProcessing||!i.bufferedRequest||E(t,i),r?a.default.nextTick(A,t,i,s,n):A(t,i,s,n)}}(e,t)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=!1!==t.emitClose,this.autoDestroy=!!t.autoDestroy,this.bufferedRequestCount=0,this.corkedRequestsFree=new n(this)}r(782)(z,d),S.prototype.getBuffer=function(){for(var t=this.bufferedRequest,e=[];t;)e.push(t),t=t.next;return e};try{Object.defineProperty(S.prototype,"buffer",{get:l.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(t){}function z(t){var e=this instanceof(s=s||r(403));if(!e&&!o.call(z,this))return new z(t);this._writableState=new S(t,this,e),this.writable=!0,t&&("function"==typeof t.write&&(this._write=t.write),"function"==typeof t.writev&&(this._writev=t.writev),"function"==typeof t.destroy&&(this._destroy=t.destroy),"function"==typeof t.final&&(this._final=t.final)),d.call(this)}function N(t,e,i,a,r,n,s){e.writelen=a,e.writecb=s,e.writing=!0,e.sync=!0,e.destroyed?e.onwrite(new v("write")):i?t._writev(r,e.onwrite):t._write(r,n,e.onwrite),e.sync=!1}function A(t,e,i,a){var r,n;i||(r=t,0===(n=e).length&&n.needDrain&&(n.needDrain=!1,r.emit("drain"))),e.pendingcb--,a(),P(t,e)}function E(t,e){e.bufferProcessing=!0;var i=e.bufferedRequest;if(t._writev&&i&&i.next){var a=Array(e.bufferedRequestCount),r=e.corkedRequestsFree;r.entry=i;for(var s=0,o=!0;i;)a[s]=i,i.isBuf||(o=!1),i=i.next,s+=1;a.allBuffers=o,N(t,e,!0,e.length,a,"",r.finish),e.pendingcb++,e.lastBufferedRequest=null,r.next?(e.corkedRequestsFree=r.next,r.next=null):e.corkedRequestsFree=new n(e),e.bufferedRequestCount=0}else{for(;i;){var l=i.chunk,d=i.encoding,c=i.callback,u=e.objectMode?1:l.length;if(N(t,e,!1,u,l,d,c),i=i.next,e.bufferedRequestCount--,e.writing)break}null===i&&(e.lastBufferedRequest=null)}e.bufferedRequest=i,e.bufferProcessing=!1}function C(t){return t.ending&&0===t.length&&null===t.bufferedRequest&&!t.finished&&!t.writing}function T(t,e){t._final(function(i){e.pendingcb--,i&&_(t,i),e.prefinished=!0,t.emit("prefinish"),P(t,e)})}function P(t,e){var i=C(e);if(i&&(e.prefinished||e.finalCalled||("function"!=typeof t._final||e.destroyed?(e.prefinished=!0,t.emit("prefinish")):(e.pendingcb++,e.finalCalled=!0,a.default.nextTick(T,t,e))),0===e.pendingcb&&(e.finished=!0,t.emit("finish"),e.autoDestroy))){var r=t._readableState;(!r||r.autoDestroy&&r.endEmitted)&&t.destroy()}return i}"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(o=Function.prototype[Symbol.hasInstance],Object.defineProperty(z,Symbol.hasInstance,{value:function(t){return!!o.call(this,t)||this===z&&t&&t._writableState instanceof S}})):o=function(t){return t instanceof this},z.prototype.pipe=function(){_(this,new x)},z.prototype.write=function(t,e,i){var r,n,s,o,l,d,f,h=this._writableState,p=!1,b=!h.objectMode&&(r=t,c.isBuffer(r)||r instanceof u);return(b&&!c.isBuffer(t)&&(n=t,t=c.from(n)),"function"==typeof e&&(i=e,e=null),b?e="buffer":e||(e=h.defaultEncoding),"function"!=typeof i&&(i=j),h.ending)?(s=i,_(this,o=new w),a.default.nextTick(s,o)):(b||(l=t,d=i,null===l?f=new y:"string"==typeof l||h.objectMode||(f=new m("chunk",["string","Buffer"],l)),!f||(_(this,f),a.default.nextTick(d,f),0)))&&(h.pendingcb++,p=function(t,e,i,a,r,n){if(!i){var s,o,l=(s=a,o=r,e.objectMode||!1===e.decodeStrings||"string"!=typeof s||(s=c.from(s,o)),s);a!==l&&(i=!0,r="buffer",a=l)}var d=e.objectMode?1:a.length;e.length+=d;var u=e.length<e.highWaterMark;if(u||(e.needDrain=!0),e.writing||e.corked){var f=e.lastBufferedRequest;e.lastBufferedRequest={chunk:a,encoding:r,isBuf:i,callback:n,next:null},f?f.next=e.lastBufferedRequest:e.bufferedRequest=e.lastBufferedRequest,e.bufferedRequestCount+=1}else N(t,e,!1,d,a,r,n);return u}(this,h,b,t,e,i)),p},z.prototype.cork=function(){this._writableState.corked++},z.prototype.uncork=function(){var t=this._writableState;t.corked&&(t.corked--,t.writing||t.corked||t.bufferProcessing||!t.bufferedRequest||E(this,t))},z.prototype.setDefaultEncoding=function(t){if("string"==typeof t&&(t=t.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((t+"").toLowerCase())>-1))throw new k(t);return this._writableState.defaultEncoding=t,this},Object.defineProperty(z.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(z.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),z.prototype._write=function(t,e,i){i(new b("_write()"))},z.prototype._writev=null,z.prototype.end=function(t,e,i){var r,n,s,o=this._writableState;return"function"==typeof t?(i=t,t=null,e=null):"function"==typeof e&&(i=e,e=null),null!=t&&this.write(t,e),o.corked&&(o.corked=1,this.uncork()),o.ending||(r=this,n=o,s=i,n.ending=!0,P(r,n),s&&(n.finished?a.default.nextTick(s):r.once("finish",s)),n.ended=!0,r.writable=!1),this},Object.defineProperty(z.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(z.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(t){this._writableState&&(this._writableState.destroyed=t)}}),z.prototype.destroy=f.destroy,z.prototype._undestroy=f.undestroy,z.prototype._destroy=function(t,e){e(t)}},871:function(t,e,i){"use strict";function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var n,s=i(698),o=Symbol("lastResolve"),l=Symbol("lastReject"),d=Symbol("error"),c=Symbol("ended"),u=Symbol("lastPromise"),f=Symbol("handlePromise"),h=Symbol("stream");function p(t,e){return{value:t,done:e}}function m(t){var e=t[o];if(null!==e){var i=t[h].read();null!==i&&(t[u]=null,t[o]=null,t[l]=null,e(p(i,!1)))}}function b(t){a.default.nextTick(m,t)}var g=Object.getPrototypeOf(function(){}),x=Object.setPrototypeOf((r(n={get stream(){return this[h]},next:function(){var t,e,i=this,r=this[d];if(null!==r)return Promise.reject(r);if(this[c])return Promise.resolve(p(void 0,!0));if(this[h].destroyed)return new Promise(function(t,e){a.default.nextTick(function(){i[d]?e(i[d]):t(p(void 0,!0))})});var n=this[u];if(n)e=new Promise((t=this,function(e,i){n.then(function(){t[c]?e(p(void 0,!0)):t[f](e,i)},i)}));else{var s=this[h].read();if(null!==s)return Promise.resolve(p(s,!1));e=new Promise(this[f])}return this[u]=e,e}},Symbol.asyncIterator,function(){return this}),r(n,"return",function(){var t=this;return new Promise(function(e,i){t[h].destroy(null,function(t){t?i(t):e(p(void 0,!0))})})}),n),g);t.exports=function(t){var e,i=Object.create(x,(r(e={},h,{value:t,writable:!0}),r(e,o,{value:null,writable:!0}),r(e,l,{value:null,writable:!0}),r(e,d,{value:null,writable:!0}),r(e,c,{value:t._readableState.endEmitted,writable:!0}),r(e,f,{value:function(t,e){var a=i[h].read();a?(i[u]=null,i[o]=null,i[l]=null,t(p(a,!1))):(i[o]=t,i[l]=e)},writable:!0}),e));return i[u]=null,s(t,function(t){if(t&&"ERR_STREAM_PREMATURE_CLOSE"!==t.code){var e=i[l];null!==e&&(i[u]=null,i[o]=null,i[l]=null,e(t)),i[d]=t;return}var a=i[o];null!==a&&(i[u]=null,i[o]=null,i[l]=null,a(p(void 0,!0))),i[c]=!0}),t.on("readable",b.bind(null,i)),i}},379:function(t,e,i){"use strict";function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,a)}return i}var r=i(300).Buffer,n=i(837).inspect,s=n&&n.custom||"inspect";t.exports=function(){var t;function e(){if(!(this instanceof e))throw TypeError("Cannot call a class as a function");this.head=null,this.tail=null,this.length=0}return t=[{key:"push",value:function(t){var e={data:t,next:null};this.length>0?this.tail.next=e:this.head=e,this.tail=e,++this.length}},{key:"unshift",value:function(t){var e={data:t,next:this.head};0===this.length&&(this.tail=e),this.head=e,++this.length}},{key:"shift",value:function(){if(0!==this.length){var t=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,t}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(t){if(0===this.length)return"";for(var e=this.head,i=""+e.data;e=e.next;)i+=t+e.data;return i}},{key:"concat",value:function(t){if(0===this.length)return r.alloc(0);for(var e,i,a=r.allocUnsafe(t>>>0),n=this.head,s=0;n;)e=n.data,i=s,r.prototype.copy.call(e,a,i),s+=n.data.length,n=n.next;return a}},{key:"consume",value:function(t,e){var i;return t<this.head.data.length?(i=this.head.data.slice(0,t),this.head.data=this.head.data.slice(t)):i=t===this.head.data.length?this.shift():e?this._getString(t):this._getBuffer(t),i}},{key:"first",value:function(){return this.head.data}},{key:"_getString",value:function(t){var e=this.head,i=1,a=e.data;for(t-=a.length;e=e.next;){var r=e.data,n=t>r.length?r.length:t;if(n===r.length?a+=r:a+=r.slice(0,t),0==(t-=n)){n===r.length?(++i,e.next?this.head=e.next:this.head=this.tail=null):(this.head=e,e.data=r.slice(n));break}++i}return this.length-=i,a}},{key:"_getBuffer",value:function(t){var e=r.allocUnsafe(t),i=this.head,a=1;for(i.data.copy(e),t-=i.data.length;i=i.next;){var n=i.data,s=t>n.length?n.length:t;if(n.copy(e,e.length-t,0,s),0==(t-=s)){s===n.length?(++a,i.next?this.head=i.next:this.head=this.tail=null):(this.head=i,i.data=n.slice(s));break}++a}return this.length-=a,e}},{key:s,value:function(t,e){return n(this,function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach(function(e){var a,r,n;a=t,r=e,n=i[e],r in a?Object.defineProperty(a,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[r]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}({},e,{depth:0,customInspect:!1}))}}],function(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}(e.prototype,t),e}()},25:function(t){"use strict";function e(t,e){r(t,e),i(t)}function i(t){t._writableState&&!t._writableState.emitClose||(!t._readableState||t._readableState.emitClose)&&t.emit("close")}function r(t,e){t.emit("error",e)}t.exports={destroy:function(t,n){var s=this,o=this._readableState&&this._readableState.destroyed,l=this._writableState&&this._writableState.destroyed;return o||l?n?n(t):t&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,a.default.nextTick(r,this,t)):a.default.nextTick(r,this,t)):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(t||null,function(t){!n&&t?s._writableState?s._writableState.errorEmitted?a.default.nextTick(i,s):(s._writableState.errorEmitted=!0,a.default.nextTick(e,s,t)):a.default.nextTick(e,s,t):n?(a.default.nextTick(i,s),n(t)):a.default.nextTick(i,s)})),this},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)},errorOrDestroy:function(t,e){var i=t._readableState,a=t._writableState;i&&i.autoDestroy||a&&a.autoDestroy?t.destroy(e):t.emit("error",e)}}},698:function(t,e,i){"use strict";var a=i(646).q.ERR_STREAM_PREMATURE_CLOSE;function r(){}t.exports=function t(e,i,n){if("function"==typeof i)return t(e,null,i);i||(i={}),s=n||r,o=!1,n=function(){if(!o){o=!0;for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];s.apply(this,e)}};var s,o,l=i.readable||!1!==i.readable&&e.readable,d=i.writable||!1!==i.writable&&e.writable,c=function(){e.writable||f()},u=e._writableState&&e._writableState.finished,f=function(){d=!1,u=!0,l||n.call(e)},h=e._readableState&&e._readableState.endEmitted,p=function(){l=!1,h=!0,d||n.call(e)},m=function(t){n.call(e,t)},b=function(){var t;return l&&!h?(e._readableState&&e._readableState.ended||(t=new a),n.call(e,t)):d&&!u?(e._writableState&&e._writableState.ended||(t=new a),n.call(e,t)):void 0},g=function(){e.req.on("finish",f)};return e.setHeader&&"function"==typeof e.abort?(e.on("complete",f),e.on("abort",b),e.req?g():e.on("request",g)):d&&!e._writableState&&(e.on("end",c),e.on("close",c)),e.on("end",p),e.on("finish",f),!1!==i.error&&e.on("error",m),e.on("close",b),function(){e.removeListener("complete",f),e.removeListener("abort",b),e.removeListener("request",g),e.req&&e.req.removeListener("finish",f),e.removeListener("end",c),e.removeListener("close",c),e.removeListener("finish",f),e.removeListener("end",p),e.removeListener("error",m),e.removeListener("close",b)}}},727:function(t,e,i){"use strict";function a(t,e,i,a,r,n,s){try{var o=t[n](s),l=o.value}catch(t){i(t);return}o.done?e(l):Promise.resolve(l).then(a,r)}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,a)}return i}var n=i(646).q.ERR_INVALID_ARG_TYPE;t.exports=function(t,e,i){if(e&&"function"==typeof e.next)s=e;else if(e&&e[Symbol.asyncIterator])s=e[Symbol.asyncIterator]();else if(e&&e[Symbol.iterator])s=e[Symbol.iterator]();else throw new n("iterable",["Iterable"],e);var s,o=new t(function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach(function(e){var a,r,n;a=t,r=e,n=i[e],r in a?Object.defineProperty(a,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[r]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}({objectMode:!0},i)),l=!1;function d(){return c.apply(this,arguments)}function c(){var t;return t=function*(){try{var t=yield s.next(),e=t.value;t.done?o.push(null):o.push((yield e))?d():l=!1}catch(t){o.destroy(t)}},(c=function(){var e=this,i=arguments;return new Promise(function(r,n){var s=t.apply(e,i);function o(t){a(s,r,n,o,l,"next",t)}function l(t){a(s,r,n,o,l,"throw",t)}o(void 0)})}).apply(this,arguments)}return o._read=function(){l||(l=!0,d())},o}},442:function(t,e,i){"use strict";var a,r=i(646).q,n=r.ERR_MISSING_ARGS,s=r.ERR_STREAM_DESTROYED;function o(t){if(t)throw t}function l(t){t()}function d(t,e){return t.pipe(e)}t.exports=function(){for(var t,e,r=arguments.length,c=Array(r),u=0;u<r;u++)c[u]=arguments[u];var f=(t=c).length&&"function"==typeof t[t.length-1]?t.pop():o;if(Array.isArray(c[0])&&(c=c[0]),c.length<2)throw new n("streams");var h=c.map(function(t,r){var n,o,d,u,p,m,b=r<c.length-1;return n=r>0,d=o=function(t){e||(e=t),t&&h.forEach(l),b||(h.forEach(l),f(e))},u=!1,o=function(){u||(u=!0,d.apply(void 0,arguments))},p=!1,t.on("close",function(){p=!0}),void 0===a&&(a=i(698)),a(t,{readable:b,writable:n},function(t){if(t)return o(t);p=!0,o()}),m=!1,function(e){if(!p&&!m){if(m=!0,t.setHeader&&"function"==typeof t.abort)return t.abort();if("function"==typeof t.destroy)return t.destroy();o(e||new s("pipe"))}}});return c.reduce(d)}},776:function(t,e,i){"use strict";var a=i(646).q.ERR_INVALID_OPT_VALUE;t.exports={getHighWaterMark:function(t,e,i,r){var n=null!=e.highWaterMark?e.highWaterMark:r?e[i]:null;if(null!=n){if(!(isFinite(n)&&Math.floor(n)===n)||n<0)throw new a(r?i:"highWaterMark",n);return Math.floor(n)}return t.objectMode?16:16384}}},678:function(t,e,i){t.exports=i(781)},55:function(t,e,i){var a=i(300),r=a.Buffer;function n(t,e){for(var i in t)e[i]=t[i]}function s(t,e,i){return r(t,e,i)}r.from&&r.alloc&&r.allocUnsafe&&r.allocUnsafeSlow?t.exports=a:(n(a,e),e.Buffer=s),s.prototype=Object.create(r.prototype),n(r,s),s.from=function(t,e,i){if("number"==typeof t)throw TypeError("Argument must not be a number");return r(t,e,i)},s.alloc=function(t,e,i){if("number"!=typeof t)throw TypeError("Argument must be a number");var a=r(t);return void 0!==e?"string"==typeof i?a.fill(e,i):a.fill(e):a.fill(0),a},s.allocUnsafe=function(t){if("number"!=typeof t)throw TypeError("Argument must be a number");return r(t)},s.allocUnsafeSlow=function(t){if("number"!=typeof t)throw TypeError("Argument must be a number");return a.SlowBuffer(t)}},173:function(t,e,i){t.exports=r;var a=i(361).EventEmitter;function r(){a.call(this)}i(782)(r,a),r.Readable=i(709),r.Writable=i(337),r.Duplex=i(403),r.Transform=i(170),r.PassThrough=i(889),r.finished=i(698),r.pipeline=i(442),r.Stream=r,r.prototype.pipe=function(t,e){var i=this;function r(e){t.writable&&!1===t.write(e)&&i.pause&&i.pause()}function n(){i.readable&&i.resume&&i.resume()}i.on("data",r),t.on("drain",n),t._isStdio||e&&!1===e.end||(i.on("end",o),i.on("close",l));var s=!1;function o(){s||(s=!0,t.end())}function l(){s||(s=!0,"function"==typeof t.destroy&&t.destroy())}function d(t){if(c(),0===a.listenerCount(this,"error"))throw t}function c(){i.removeListener("data",r),t.removeListener("drain",n),i.removeListener("end",o),i.removeListener("close",l),i.removeListener("error",d),t.removeListener("error",d),i.removeListener("end",c),i.removeListener("close",c),t.removeListener("close",c)}return i.on("error",d),t.on("error",d),i.on("end",c),i.on("close",c),t.on("close",c),t.emit("pipe",i),t}},704:function(t,e,i){"use strict";var a=i(55).Buffer,r=a.isEncoding||function(t){switch((t=""+t)&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function n(t){var e;switch(this.encoding=function(t){var e=function(t){var e;if(!t)return"utf8";for(;;)switch(t){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return t;default:if(e)return;t=(""+t).toLowerCase(),e=!0}}(t);if("string"!=typeof e&&(a.isEncoding===r||!r(t)))throw Error("Unknown encoding: "+t);return e||t}(t),this.encoding){case"utf16le":this.text=l,this.end=d,e=4;break;case"utf8":this.fillLast=o,e=4;break;case"base64":this.text=c,this.end=u,e=3;break;default:this.write=f,this.end=h;return}this.lastNeed=0,this.lastTotal=0,this.lastChar=a.allocUnsafe(e)}function s(t){return t<=127?0:t>>5==6?2:t>>4==14?3:t>>3==30?4:t>>6==2?-1:-2}function o(t){var e=this.lastTotal-this.lastNeed,i=function(t,e,i){if((192&e[0])!=128)return t.lastNeed=0,"�";if(t.lastNeed>1&&e.length>1){if((192&e[1])!=128)return t.lastNeed=1,"�";if(t.lastNeed>2&&e.length>2&&(192&e[2])!=128)return t.lastNeed=2,"�"}}(this,t,0);return void 0!==i?i:this.lastNeed<=t.length?(t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):void(t.copy(this.lastChar,e,0,t.length),this.lastNeed-=t.length)}function l(t,e){if((t.length-e)%2==0){var i=t.toString("utf16le",e);if(i){var a=i.charCodeAt(i.length-1);if(a>=55296&&a<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],i.slice(0,-1)}return i}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}function d(t){var e=t&&t.length?this.write(t):"";if(this.lastNeed){var i=this.lastTotal-this.lastNeed;return e+this.lastChar.toString("utf16le",0,i)}return e}function c(t,e){var i=(t.length-e)%3;return 0===i?t.toString("base64",e):(this.lastNeed=3-i,this.lastTotal=3,1===i?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-i))}function u(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):e}function f(t){return t.toString(this.encoding)}function h(t){return t&&t.length?this.write(t):""}e.s=n,n.prototype.write=function(t){var e,i;if(0===t.length)return"";if(this.lastNeed){if(void 0===(e=this.fillLast(t)))return"";i=this.lastNeed,this.lastNeed=0}else i=0;return i<t.length?e?e+this.text(t,i):this.text(t,i):e||""},n.prototype.end=function(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+"�":e},n.prototype.text=function(t,e){var i=function(t,e,i){var a=e.length-1;if(a<i)return 0;var r=s(e[a]);return r>=0?(r>0&&(t.lastNeed=r-1),r):--a<i||-2===r?0:(r=s(e[a]))>=0?(r>0&&(t.lastNeed=r-2),r):--a<i||-2===r?0:(r=s(e[a]))>=0?(r>0&&(2===r?r=0:t.lastNeed=r-3),r):0}(this,t,e);if(!this.lastNeed)return t.toString("utf8",e);this.lastTotal=i;var a=t.length-(i-this.lastNeed);return t.copy(this.lastChar,0,a),t.toString("utf8",e,a)},n.prototype.fillLast=function(t){if(this.lastNeed<=t.length)return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=t.length}},769:function(e){e.exports=function(t,e){if(i("noDeprecation"))return t;var a=!1;return function(){if(!a){if(i("throwDeprecation"))throw Error(e);i("traceDeprecation")?console.trace(e):console.warn(e),a=!0}return t.apply(this,arguments)}};function i(e){try{if(!t.g.localStorage)return!1}catch(t){return!1}var i=t.g.localStorage[e];return null!=i&&"true"===String(i).toLowerCase()}},300:function(e){"use strict";e.exports=t.r(67034)},361:function(e){"use strict";e.exports=t.r(30662)},781:function(e){"use strict";e.exports=t.r(30662).EventEmitter},837:function(e){"use strict";e.exports=t.r(77398)}},n={};function s(t){var e=n[t];if(void 0!==e)return e.exports;var i=n[t]={exports:{}},a=!0;try{r[t](i,i.exports,s),a=!1}finally{a&&delete n[t]}return i.exports}s.ab="/ROOT/node_modules/next/dist/compiled/stream-browserify/",e.exports=s(173)},31032,(t,e,i)=>{"use strict";e.exports=t.r(12569)},87780,(t,e,i)=>{"use strict";var a=t.i(67034);if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer="u">typeof ArrayBuffer&&"u">typeof Uint8Array,i.nodebuffer=void 0!==a.Buffer,i.uint8array="u">typeof Uint8Array,"u"<typeof ArrayBuffer)i.blob=!1;else{var r=new ArrayBuffer(0);try{i.blob=0===new Blob([r],{type:"application/zip"}).size}catch(t){try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);n.append(r),i.blob=0===n.getBlob("application/zip").size}catch(t){i.blob=!1}}}try{i.nodestream=!!t.r(31032).Readable}catch(t){i.nodestream=!1}},55951,(t,e,i)=>{"use strict";var a=t.r(65464),r=t.r(87780),n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(t){for(var e,i,r,s,o,l,d,c=[],u=0,f=t.length,h=f,p="string"!==a.getTypeOf(t);u<t.length;)h=f-u,p?(e=t[u++],i=u<f?t[u++]:0,r=u<f?t[u++]:0):(e=t.charCodeAt(u++),i=u<f?t.charCodeAt(u++):0,r=u<f?t.charCodeAt(u++):0),s=e>>2,o=(3&e)<<4|i>>4,l=h>1?(15&i)<<2|r>>6:64,d=h>2?63&r:64,c.push(n.charAt(s)+n.charAt(o)+n.charAt(l)+n.charAt(d));return c.join("")},i.decode=function(t){var e,i,a,s,o,l,d,c,u=0,f=0,h="data:";if(t.substr(0,h.length)===h)throw Error("Invalid base64 input, it looks like a data url.");var p=3*(t=t.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(t.charAt(t.length-1)===n.charAt(64)&&p--,t.charAt(t.length-2)===n.charAt(64)&&p--,p%1!=0)throw Error("Invalid base64 input, bad content length.");for(c=r.uint8array?new Uint8Array(0|p):Array(0|p);u<t.length;)s=n.indexOf(t.charAt(u++)),o=n.indexOf(t.charAt(u++)),l=n.indexOf(t.charAt(u++)),d=n.indexOf(t.charAt(u++)),e=s<<2|o>>4,i=(15&o)<<4|l>>2,a=(3&l)<<6|d,c[f++]=e,64!==l&&(c[f++]=i),64!==d&&(c[f++]=a);return c}},42527,(t,e,i)=>{"use strict";var a=t.i(67034);e.exports={isNode:void 0!==a.Buffer,newBufferFrom:function(t,e){if(a.Buffer.from&&a.Buffer.from!==Uint8Array.from)return a.Buffer.from(t,e);if("number"==typeof t)throw Error('The "data" argument must not be a number');return new a.Buffer(t,e)},allocBuffer:function(t){if(a.Buffer.alloc)return a.Buffer.alloc(t);var e=new a.Buffer(t);return e.fill(0),e},isBuffer:function(t){return a.Buffer.isBuffer(t)},isStream:function(t){return t&&"function"==typeof t.on&&"function"==typeof t.pause&&"function"==typeof t.resume}}},27024,(t,e,i)=>{"use strict";var a,r,n=t.g.MutationObserver||t.g.WebKitMutationObserver;if(n){var s=0,o=new n(u),l=t.g.document.createTextNode("");o.observe(l,{characterData:!0}),a=function(){l.data=s=++s%2}}else if(t.g.setImmediate||void 0===t.g.MessageChannel)a="document"in t.g&&"onreadystatechange"in t.g.document.createElement("script")?function(){var e=t.g.document.createElement("script");e.onreadystatechange=function(){u(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},t.g.document.documentElement.appendChild(e)}:function(){setTimeout(u,0)};else{var d=new t.g.MessageChannel;d.port1.onmessage=u,a=function(){d.port2.postMessage(0)}}var c=[];function u(){r=!0;for(var t,e,i=c.length;i;){for(e=c,c=[],t=-1;++t<i;)e[t]();i=c.length}r=!1}e.exports=function(t){1!==c.push(t)||r||a()}},22998,(t,e,i)=>{"use strict";var a=t.r(27024);function r(){}var n={},s=["REJECTED"],o=["FULFILLED"],l=["PENDING"];function d(t){if("function"!=typeof t)throw TypeError("resolver must be a function");this.state=l,this.queue=[],this.outcome=void 0,t!==r&&h(this,t)}function c(t,e,i){this.promise=t,"function"==typeof e&&(this.onFulfilled=e,this.callFulfilled=this.otherCallFulfilled),"function"==typeof i&&(this.onRejected=i,this.callRejected=this.otherCallRejected)}function u(t,e,i){a(function(){var a;try{a=e(i)}catch(e){return n.reject(t,e)}a===t?n.reject(t,TypeError("Cannot resolve promise with itself")):n.resolve(t,a)})}function f(t){var e=t&&t.then;if(t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof e)return function(){e.apply(t,arguments)}}function h(t,e){var i=!1;function a(e){i||(i=!0,n.reject(t,e))}function r(e){i||(i=!0,n.resolve(t,e))}var s=p(function(){e(r,a)});"error"===s.status&&a(s.value)}function p(t,e){var i={};try{i.value=t(e),i.status="success"}catch(t){i.status="error",i.value=t}return i}e.exports=d,d.prototype.finally=function(t){if("function"!=typeof t)return this;var e=this.constructor;return this.then(function(i){return e.resolve(t()).then(function(){return i})},function(i){return e.resolve(t()).then(function(){throw i})})},d.prototype.catch=function(t){return this.then(null,t)},d.prototype.then=function(t,e){if("function"!=typeof t&&this.state===o||"function"!=typeof e&&this.state===s)return this;var i=new this.constructor(r);return this.state!==l?u(i,this.state===o?t:e,this.outcome):this.queue.push(new c(i,t,e)),i},c.prototype.callFulfilled=function(t){n.resolve(this.promise,t)},c.prototype.otherCallFulfilled=function(t){u(this.promise,this.onFulfilled,t)},c.prototype.callRejected=function(t){n.reject(this.promise,t)},c.prototype.otherCallRejected=function(t){u(this.promise,this.onRejected,t)},n.resolve=function(t,e){var i=p(f,e);if("error"===i.status)return n.reject(t,i.value);var a=i.value;if(a)h(t,a);else{t.state=o,t.outcome=e;for(var r=-1,s=t.queue.length;++r<s;)t.queue[r].callFulfilled(e)}return t},n.reject=function(t,e){t.state=s,t.outcome=e;for(var i=-1,a=t.queue.length;++i<a;)t.queue[i].callRejected(e);return t},d.resolve=function(t){return t instanceof this?t:n.resolve(new this(r),t)},d.reject=function(t){var e=new this(r);return n.reject(e,t)},d.all=function(t){var e=this;if("[object Array]"!==Object.prototype.toString.call(t))return this.reject(TypeError("must be an array"));var i=t.length,a=!1;if(!i)return this.resolve([]);for(var s=Array(i),o=0,l=-1,d=new this(r);++l<i;)!function(t,r){e.resolve(t).then(function(t){s[r]=t,++o!==i||a||(a=!0,n.resolve(d,s))},function(t){a||(a=!0,n.reject(d,t))})}(t[l],l);return d},d.race=function(t){var e,i=this;if("[object Array]"!==Object.prototype.toString.call(t))return this.reject(TypeError("must be an array"));var a=t.length,s=!1;if(!a)return this.resolve([]);for(var o=-1,l=new this(r);++o<a;){e=t[o],i.resolve(e).then(function(t){s||(s=!0,n.resolve(l,t))},function(t){s||(s=!0,n.reject(l,t))})}return l}},24375,(t,e,i)=>{"use strict";e.exports={Promise:"u">typeof Promise?Promise:t.r(22998)}},83986,(t,e,i)=>{var a=t.i(47167);"u">typeof __nccwpck_require__&&(__nccwpck_require__.ab="/ROOT/node_modules/next/dist/compiled/setimmediate/"),({189:function(){!function(t,e){"use strict";if(!t.setImmediate){var i,r,n,s,o,l=1,d={},c=!1,u=t.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(t);f=f&&f.setTimeout?f:t,"[object process]"===({}).toString.call(t.process)?o=function(t){a.default.nextTick(function(){p(t)})}:function(){if(t.postMessage&&!t.importScripts){var e=!0,i=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=i,e}}()?(i="setImmediate$"+Math.random()+"$",r=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(i)&&p(+e.data.slice(i.length))},t.addEventListener?t.addEventListener("message",r,!1):t.attachEvent("onmessage",r),o=function(e){t.postMessage(i+e,"*")}):t.MessageChannel?((n=new MessageChannel).port1.onmessage=function(t){p(t.data)},o=function(t){n.port2.postMessage(t)}):u&&"onreadystatechange"in u.createElement("script")?(s=u.documentElement,o=function(t){var e=u.createElement("script");e.onreadystatechange=function(){p(t),e.onreadystatechange=null,s.removeChild(e),e=null},s.appendChild(e)}):o=function(t){setTimeout(p,0,t)},f.setImmediate=function(t){"function"!=typeof t&&(t=Function(""+t));for(var e=Array(arguments.length-1),i=0;i<e.length;i++)e[i]=arguments[i+1];var a={callback:t,args:e};return d[l]=a,o(l),l++},f.clearImmediate=h}function h(t){delete d[t]}function p(t){if(c)setTimeout(p,0,t);else{var i=d[t];if(i){c=!0;try{var a=i.callback,r=i.args;switch(r.length){case 0:a();break;case 1:a(r[0]);break;case 2:a(r[0],r[1]);break;case 3:a(r[0],r[1],r[2]);break;default:a.apply(e,r)}}finally{h(t),c=!1}}}}}("u"<typeof self?t.g:self)}})[189](),e.exports={}},65464,(t,e,i)=>{"use strict";var a=t.r(87780),r=t.r(55951),n=t.r(42527),s=t.r(24375);function o(t){return t}function l(t,e){for(var i=0;i<t.length;++i)e[i]=255&t.charCodeAt(i);return e}t.r(83986),i.newBlob=function(t,e){i.checkSupport("blob");try{return new Blob([t],{type:e})}catch(i){try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return a.append(t),a.getBlob(e)}catch(t){throw Error("Bug : can't construct the Blob.")}}};var d={stringifyByChunk:function(t,e,i){var a=[],r=0,n=t.length;if(n<=i)return String.fromCharCode.apply(null,t);for(;r<n;)"array"===e||"nodebuffer"===e?a.push(String.fromCharCode.apply(null,t.slice(r,Math.min(r+i,n)))):a.push(String.fromCharCode.apply(null,t.subarray(r,Math.min(r+i,n)))),r+=i;return a.join("")},stringifyByChar:function(t){for(var e="",i=0;i<t.length;i++)e+=String.fromCharCode(t[i]);return e},applyCanBeUsed:{uint8array:function(){try{return a.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(t){return!1}}(),nodebuffer:function(){try{return a.nodebuffer&&1===String.fromCharCode.apply(null,n.allocBuffer(1)).length}catch(t){return!1}}()}};function c(t){var e=65536,a=i.getTypeOf(t),r=!0;if("uint8array"===a?r=d.applyCanBeUsed.uint8array:"nodebuffer"===a&&(r=d.applyCanBeUsed.nodebuffer),r)for(;e>1;)try{return d.stringifyByChunk(t,a,e)}catch(t){e=Math.floor(e/2)}return d.stringifyByChar(t)}function u(t,e){for(var i=0;i<t.length;i++)e[i]=t[i];return e}i.applyFromCharCode=c;var f={};f.string={string:o,array:function(t){return l(t,Array(t.length))},arraybuffer:function(t){return f.string.uint8array(t).buffer},uint8array:function(t){return l(t,new Uint8Array(t.length))},nodebuffer:function(t){return l(t,n.allocBuffer(t.length))}},f.array={string:c,array:o,arraybuffer:function(t){return new Uint8Array(t).buffer},uint8array:function(t){return new Uint8Array(t)},nodebuffer:function(t){return n.newBufferFrom(t)}},f.arraybuffer={string:function(t){return c(new Uint8Array(t))},array:function(t){return u(new Uint8Array(t),Array(t.byteLength))},arraybuffer:o,uint8array:function(t){return new Uint8Array(t)},nodebuffer:function(t){return n.newBufferFrom(new Uint8Array(t))}},f.uint8array={string:c,array:function(t){return u(t,Array(t.length))},arraybuffer:function(t){return t.buffer},uint8array:o,nodebuffer:function(t){return n.newBufferFrom(t)}},f.nodebuffer={string:c,array:function(t){return u(t,Array(t.length))},arraybuffer:function(t){return f.nodebuffer.uint8array(t).buffer},uint8array:function(t){return u(t,new Uint8Array(t.length))},nodebuffer:o},i.transformTo=function(t,e){return(e||(e=""),t)?(i.checkSupport(t),f[i.getTypeOf(e)][t](e)):e},i.resolve=function(t){for(var e=t.split("/"),i=[],a=0;a<e.length;a++){var r=e[a];"."!==r&&(""!==r||0===a||a===e.length-1)&&(".."===r?i.pop():i.push(r))}return i.join("/")},i.getTypeOf=function(t){return"string"==typeof t?"string":"[object Array]"===Object.prototype.toString.call(t)?"array":a.nodebuffer&&n.isBuffer(t)?"nodebuffer":a.uint8array&&t instanceof Uint8Array?"uint8array":a.arraybuffer&&t instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(t){if(!a[t.toLowerCase()])throw Error(t+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(t){var e,i,a="";for(i=0;i<(t||"").length;i++)a+="\\x"+((e=t.charCodeAt(i))<16?"0":"")+e.toString(16).toUpperCase();return a},i.delay=function(t,e,i){setImmediate(function(){t.apply(i||null,e||[])})},i.inherits=function(t,e){var i=function(){};i.prototype=e.prototype,t.prototype=new i},i.extend=function(){var t,e,i={};for(t=0;t<arguments.length;t++)for(e in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],e)&&void 0===i[e]&&(i[e]=arguments[t][e]);return i},i.prepareContent=function(t,e,n,o,d){return s.Promise.resolve(e).then(function(t){return a.blob&&(t instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(t)))&&"u">typeof FileReader?new s.Promise(function(e,i){var a=new FileReader;a.onload=function(t){e(t.target.result)},a.onerror=function(t){i(t.target.error)},a.readAsArrayBuffer(t)}):t}).then(function(e){var c,u,f=i.getTypeOf(e);return f?("arraybuffer"===f?e=i.transformTo("uint8array",e):"string"===f&&(d?e=r.decode(e):n&&!0!==o&&(c=e,u=null,u=a.uint8array?new Uint8Array(c.length):Array(c.length),e=l(c,u))),e):s.Promise.reject(Error("Can't read the data of '"+t+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},48913,(t,e,i)=>{"use strict";function a(t){this.name=t||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}a.prototype={push:function(t){this.emit("data",t)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(t){this.emit("error",t)}return!0},error:function(t){return!this.isFinished&&(this.isPaused?this.generatedError=t:(this.isFinished=!0,this.emit("error",t),this.previous&&this.previous.error(t),this.cleanUp()),!0)},on:function(t,e){return this._listeners[t].push(e),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(t,e){if(this._listeners[t])for(var i=0;i<this._listeners[t].length;i++)this._listeners[t][i].call(this,e)},pipe:function(t){return t.registerPrevious(this)},registerPrevious:function(t){if(this.isLocked)throw Error("The stream '"+this+"' has already been used.");this.streamInfo=t.streamInfo,this.mergeStreamInfo(),this.previous=t;var e=this;return t.on("data",function(t){e.processChunk(t)}),t.on("end",function(){e.end()}),t.on("error",function(t){e.error(t)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;this.isPaused=!1;var t=!1;return this.generatedError&&(this.error(this.generatedError),t=!0),this.previous&&this.previous.resume(),!t},flush:function(){},processChunk:function(t){this.push(t)},withStreamInfo:function(t,e){return this.extraStreamInfo[t]=e,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var t in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,t)&&(this.streamInfo[t]=this.extraStreamInfo[t])},lock:function(){if(this.isLocked)throw Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var t="Worker "+this.name;return this.previous?this.previous+" -> "+t:t}},e.exports=a},46253,(t,e,i)=>{"use strict";for(var a=t.r(65464),r=t.r(87780),n=t.r(42527),s=t.r(48913),o=Array(256),l=0;l<256;l++)o[l]=l>=252?6:l>=248?5:l>=240?4:l>=224?3:l>=192?2:1;o[254]=o[254]=1;var d=function(t){var e,i,a,n,s,o=t.length,l=0;for(n=0;n<o;n++)(64512&(i=t.charCodeAt(n)))==55296&&n+1<o&&(64512&(a=t.charCodeAt(n+1)))==56320&&(i=65536+(i-55296<<10)+(a-56320),n++),l+=i<128?1:i<2048?2:i<65536?3:4;for(s=0,e=r.uint8array?new Uint8Array(l):Array(l),n=0;s<l;n++)(64512&(i=t.charCodeAt(n)))==55296&&n+1<o&&(64512&(a=t.charCodeAt(n+1)))==56320&&(i=65536+(i-55296<<10)+(a-56320),n++),i<128?e[s++]=i:(i<2048?e[s++]=192|i>>>6:(i<65536?e[s++]=224|i>>>12:(e[s++]=240|i>>>18,e[s++]=128|i>>>12&63),e[s++]=128|i>>>6&63),e[s++]=128|63&i);return e},c=function(t,e){var i;for((e=e||t.length)>t.length&&(e=t.length),i=e-1;i>=0&&(192&t[i])==128;)i--;return i<0||0===i?e:i+o[t[i]]>e?i:e},u=function(t){var e,i,r,n,s=t.length,l=Array(2*s);for(i=0,e=0;e<s;){if((r=t[e++])<128){l[i++]=r;continue}if((n=o[r])>4){l[i++]=65533,e+=n-1;continue}for(r&=2===n?31:3===n?15:7;n>1&&e<s;)r=r<<6|63&t[e++],n--;if(n>1){l[i++]=65533;continue}r<65536?l[i++]=r:(r-=65536,l[i++]=55296|r>>10&1023,l[i++]=56320|1023&r)}return l.length!==i&&(l.subarray?l=l.subarray(0,i):l.length=i),a.applyFromCharCode(l)};function f(){s.call(this,"utf-8 decode"),this.leftOver=null}function h(){s.call(this,"utf-8 encode")}i.utf8encode=function(t){return r.nodebuffer?n.newBufferFrom(t,"utf-8"):d(t)},i.utf8decode=function(t){return r.nodebuffer?a.transformTo("nodebuffer",t).toString("utf-8"):u(t=a.transformTo(r.uint8array?"uint8array":"array",t))},a.inherits(f,s),f.prototype.processChunk=function(t){var e=a.transformTo(r.uint8array?"uint8array":"array",t.data);if(this.leftOver&&this.leftOver.length){if(r.uint8array){var n=e;(e=new Uint8Array(n.length+this.leftOver.length)).set(this.leftOver,0),e.set(n,this.leftOver.length)}else e=this.leftOver.concat(e);this.leftOver=null}var s=c(e),o=e;s!==e.length&&(r.uint8array?(o=e.subarray(0,s),this.leftOver=e.subarray(s,e.length)):(o=e.slice(0,s),this.leftOver=e.slice(s,e.length))),this.push({data:i.utf8decode(o),meta:t.meta})},f.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=f,a.inherits(h,s),h.prototype.processChunk=function(t){this.push({data:i.utf8encode(t.data),meta:t.meta})},i.Utf8EncodeWorker=h},60550,(t,e,i)=>{"use strict";var a=t.r(48913),r=t.r(65464);function n(t){a.call(this,"ConvertWorker to "+t),this.destType=t}r.inherits(n,a),n.prototype.processChunk=function(t){this.push({data:r.transformTo(this.destType,t.data),meta:t.meta})},e.exports=n},61714,(t,e,i)=>{"use strict";var a=t.r(31032).Readable;function r(t,e,i){a.call(this,e),this._helper=t;var r=this;t.on("data",function(t,e){r.push(t)||r._helper.pause(),i&&i(e)}).on("error",function(t){r.emit("error",t)}).on("end",function(){r.push(null)})}t.r(65464).inherits(r,a),r.prototype._read=function(){this._helper.resume()},e.exports=r},846,(t,e,i)=>{"use strict";var a=t.i(67034),r=t.r(65464),n=t.r(60550),s=t.r(48913),o=t.r(55951),l=t.r(87780),d=t.r(24375),c=null;if(l.nodestream)try{c=t.r(61714)}catch(t){}function u(t,e,i){var a=e;switch(e){case"blob":case"arraybuffer":a="uint8array";break;case"base64":a="string"}try{this._internalType=a,this._outputType=e,this._mimeType=i,r.checkSupport(a),this._worker=t.pipe(new n(a)),t.lock()}catch(t){this._worker=new s("error"),this._worker.error(t)}}u.prototype={accumulate:function(t){var e;return e=this,new d.Promise(function(i,n){var s=[],l=e._internalType,d=e._outputType,c=e._mimeType;e.on("data",function(e,i){s.push(e),t&&t(i)}).on("error",function(t){s=[],n(t)}).on("end",function(){try{var t=function(t,e,i){switch(t){case"blob":return r.newBlob(r.transformTo("arraybuffer",e),i);case"base64":return o.encode(e);default:return r.transformTo(t,e)}}(d,function(t,e){var i,r=0,n=null,s=0;for(i=0;i<e.length;i++)s+=e[i].length;switch(t){case"string":return e.join("");case"array":return Array.prototype.concat.apply([],e);case"uint8array":for(i=0,n=new Uint8Array(s);i<e.length;i++)n.set(e[i],r),r+=e[i].length;return n;case"nodebuffer":return a.Buffer.concat(e);default:throw Error("concat : unsupported type '"+t+"'")}}(l,s),c);i(t)}catch(t){n(t)}s=[]}).resume()})},on:function(t,e){var i=this;return"data"===t?this._worker.on(t,function(t){e.call(i,t.data,t.meta)}):this._worker.on(t,function(){r.delay(e,arguments,i)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(t){if(r.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw Error(this._outputType+" is not supported by this method");return new c(this,{objectMode:"nodebuffer"!==this._outputType},t)}},e.exports=u},13133,(t,e,i)=>{"use strict";i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},25625,(t,e,i)=>{"use strict";var a=t.r(65464),r=t.r(48913);function n(t){r.call(this,"DataWorker");var e=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,t.then(function(t){e.dataIsReady=!0,e.data=t,e.max=t&&t.length||0,e.type=a.getTypeOf(t),e.isPaused||e._tickAndRepeat()},function(t){e.error(t)})}a.inherits(n,r),n.prototype.cleanUp=function(){r.prototype.cleanUp.call(this),this.data=null},n.prototype.resume=function(){return!!r.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,a.delay(this._tickAndRepeat,[],this)),!0)},n.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(a.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},n.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var t=null,e=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":t=this.data.substring(this.index,e);break;case"uint8array":t=this.data.subarray(this.index,e);break;case"array":case"nodebuffer":t=this.data.slice(this.index,e)}return this.index=e,this.push({data:t,meta:{percent:this.max?this.index/this.max*100:0}})},e.exports=n},63494,(t,e,i)=>{"use strict";var a=t.r(65464),r=function(){for(var t,e=[],i=0;i<256;i++){t=i;for(var a=0;a<8;a++)t=1&t?0xedb88320^t>>>1:t>>>1;e[i]=t}return e}();e.exports=function(t,e){return void 0!==t&&t.length?"string"!==a.getTypeOf(t)?function(t,e,i,a){var n=0+i;t^=-1;for(var s=0;s<n;s++)t=t>>>8^r[(t^e[s])&255];return -1^t}(0|e,t,t.length,0):function(t,e,i,a){var n=0+i;t^=-1;for(var s=0;s<n;s++)t=t>>>8^r[(t^e.charCodeAt(s))&255];return -1^t}(0|e,t,t.length,0):0}},1648,(t,e,i)=>{"use strict";var a=t.r(48913),r=t.r(63494);function n(){a.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t.r(65464).inherits(n,a),n.prototype.processChunk=function(t){this.streamInfo.crc32=r(t.data,this.streamInfo.crc32||0),this.push(t)},e.exports=n},41087,(t,e,i)=>{"use strict";var a=t.r(65464),r=t.r(48913);function n(t){r.call(this,"DataLengthProbe for "+t),this.propName=t,this.withStreamInfo(t,0)}a.inherits(n,r),n.prototype.processChunk=function(t){if(t){var e=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=e+t.data.length}r.prototype.processChunk.call(this,t)},e.exports=n},43220,(t,e,i)=>{"use strict";var a=t.r(24375),r=t.r(25625),n=t.r(1648),s=t.r(41087);function o(t,e,i,a,r){this.compressedSize=t,this.uncompressedSize=e,this.crc32=i,this.compression=a,this.compressedContent=r}o.prototype={getContentWorker:function(){var t=new r(a.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new s("data_length")),e=this;return t.on("end",function(){if(this.streamInfo.data_length!==e.uncompressedSize)throw Error("Bug : uncompressed data size mismatch")}),t},getCompressedWorker:function(){return new r(a.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},o.createWorkerFrom=function(t,e,i){return t.pipe(new n).pipe(new s("uncompressedSize")).pipe(e.compressWorker(i)).pipe(new s("compressedSize")).withStreamInfo("compression",e)},e.exports=o},52929,(t,e,i)=>{"use strict";var a=t.r(846),r=t.r(25625),n=t.r(46253),s=t.r(43220),o=t.r(48913),l=function(t,e,i){this.name=t,this.dir=i.dir,this.date=i.date,this.comment=i.comment,this.unixPermissions=i.unixPermissions,this.dosPermissions=i.dosPermissions,this._data=e,this._dataBinary=i.binary,this.options={compression:i.compression,compressionOptions:i.compressionOptions}};l.prototype={internalStream:function(t){var e=null,i="string";try{if(!t)throw Error("No output type specified.");i=t.toLowerCase();var r="string"===i||"text"===i;("binarystring"===i||"text"===i)&&(i="string"),e=this._decompressWorker();var s=!this._dataBinary;s&&!r&&(e=e.pipe(new n.Utf8EncodeWorker)),!s&&r&&(e=e.pipe(new n.Utf8DecodeWorker))}catch(t){(e=new o("error")).error(t)}return new a(e,i,"")},async:function(t,e){return this.internalStream(t).accumulate(e)},nodeStream:function(t,e){return this.internalStream(t||"nodebuffer").toNodejsStream(e)},_compressWorker:function(t,e){if(this._data instanceof s&&this._data.compression.magic===t.magic)return this._data.getCompressedWorker();var i=this._decompressWorker();return this._dataBinary||(i=i.pipe(new n.Utf8EncodeWorker)),s.createWorkerFrom(i,t,e)},_decompressWorker:function(){return this._data instanceof s?this._data.getContentWorker():this._data instanceof o?this._data:new r(this._data)}};for(var d=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],c=function(){throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},u=0;u<d.length;u++)l.prototype[d[u]]=c;e.exports=l},79148,(t,e,i)=>{"use strict";var a="u">typeof Uint8Array&&"u">typeof Uint16Array&&"u">typeof Int32Array;i.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var i=e.shift();if(i){if("object"!=typeof i)throw TypeError(i+"must be non-object");for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}}return t},i.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var r={arraySet:function(t,e,i,a,r){if(e.subarray&&t.subarray)return void t.set(e.subarray(i,i+a),r);for(var n=0;n<a;n++)t[r+n]=e[i+n]},flattenChunks:function(t){var e,i,a,r,n,s;for(e=0,a=0,i=t.length;e<i;e++)a+=t[e].length;for(e=0,s=new Uint8Array(a),r=0,i=t.length;e<i;e++)n=t[e],s.set(n,r),r+=n.length;return s}},n={arraySet:function(t,e,i,a,r){for(var n=0;n<a;n++)t[r+n]=e[i+n]},flattenChunks:function(t){return[].concat.apply([],t)}};i.setTyped=function(t){t?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,r)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,n))},i.setTyped(a)},94333,(t,e,i)=>{"use strict";var a,r,n,s=t.r(79148);function o(t){for(var e=t.length;--e>=0;)t[e]=0}var l=573,d=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],c=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],u=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],f=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],h=Array(576);o(h);var p=Array(60);o(p);var m=Array(512);o(m);var b=Array(256);o(b);var g=Array(29);o(g);var x=Array(30);function v(t,e,i,a,r){this.static_tree=t,this.extra_bits=e,this.extra_base=i,this.elems=a,this.max_length=r,this.has_stree=t&&t.length}function y(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function w(t){return t<256?m[t]:m[256+(t>>>7)]}function k(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function _(t,e,i){t.bi_valid>16-i?(t.bi_buf|=e<<t.bi_valid&65535,k(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=i-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=i)}function j(t,e,i){_(t,i[2*e],i[2*e+1])}function S(t,e){var i=0;do i|=1&t,t>>>=1,i<<=1;while(--e>0)return i>>>1}function z(t,e,i){var a,r,n=Array(16),s=0;for(a=1;a<=15;a++)n[a]=s=s+i[a-1]<<1;for(r=0;r<=e;r++){var o=t[2*r+1];0!==o&&(t[2*r]=S(n[o]++,o))}}function N(t){var e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function A(t){t.bi_valid>8?k(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function E(t,e,i,a){var r=2*e,n=2*i;return t[r]<t[n]||t[r]===t[n]&&a[e]<=a[i]}function C(t,e,i){for(var a=t.heap[i],r=i<<1;r<=t.heap_len&&(r<t.heap_len&&E(e,t.heap[r+1],t.heap[r],t.depth)&&r++,!E(e,a,t.heap[r],t.depth));)t.heap[i]=t.heap[r],i=r,r<<=1;t.heap[i]=a}function T(t,e,i){var a,r,n,s,o=0;if(0!==t.last_lit)do a=t.pending_buf[t.d_buf+2*o]<<8|t.pending_buf[t.d_buf+2*o+1],r=t.pending_buf[t.l_buf+o],o++,0===a?j(t,r,e):(j(t,(n=b[r])+256+1,e),0!==(s=d[n])&&_(t,r-=g[n],s),j(t,n=w(--a),i),0!==(s=c[n])&&_(t,a-=x[n],s));while(o<t.last_lit)j(t,256,e)}function P(t,e){var i,a,r,n=e.dyn_tree,s=e.stat_desc.static_tree,o=e.stat_desc.has_stree,d=e.stat_desc.elems,c=-1;for(i=0,t.heap_len=0,t.heap_max=l;i<d;i++)0!==n[2*i]?(t.heap[++t.heap_len]=c=i,t.depth[i]=0):n[2*i+1]=0;for(;t.heap_len<2;)n[2*(r=t.heap[++t.heap_len]=c<2?++c:0)]=1,t.depth[r]=0,t.opt_len--,o&&(t.static_len-=s[2*r+1]);for(e.max_code=c,i=t.heap_len>>1;i>=1;i--)C(t,n,i);r=d;do i=t.heap[1],t.heap[1]=t.heap[t.heap_len--],C(t,n,1),a=t.heap[1],t.heap[--t.heap_max]=i,t.heap[--t.heap_max]=a,n[2*r]=n[2*i]+n[2*a],t.depth[r]=(t.depth[i]>=t.depth[a]?t.depth[i]:t.depth[a])+1,n[2*i+1]=n[2*a+1]=r,t.heap[1]=r++,C(t,n,1);while(t.heap_len>=2)t.heap[--t.heap_max]=t.heap[1],function(t,e){var i,a,r,n,s,o,d=e.dyn_tree,c=e.max_code,u=e.stat_desc.static_tree,f=e.stat_desc.has_stree,h=e.stat_desc.extra_bits,p=e.stat_desc.extra_base,m=e.stat_desc.max_length,b=0;for(n=0;n<=15;n++)t.bl_count[n]=0;for(d[2*t.heap[t.heap_max]+1]=0,i=t.heap_max+1;i<l;i++)(n=d[2*d[2*(a=t.heap[i])+1]+1]+1)>m&&(n=m,b++),d[2*a+1]=n,!(a>c)&&(t.bl_count[n]++,s=0,a>=p&&(s=h[a-p]),o=d[2*a],t.opt_len+=o*(n+s),f&&(t.static_len+=o*(u[2*a+1]+s)));if(0!==b){do{for(n=m-1;0===t.bl_count[n];)n--;t.bl_count[n]--,t.bl_count[n+1]+=2,t.bl_count[m]--,b-=2}while(b>0)for(n=m;0!==n;n--)for(a=t.bl_count[n];0!==a;)!((r=t.heap[--i])>c)&&(d[2*r+1]!==n&&(t.opt_len+=(n-d[2*r+1])*d[2*r],d[2*r+1]=n),a--)}}(t,e),z(n,c,t.bl_count)}function R(t,e,i){var a,r,n=-1,s=e[1],o=0,l=7,d=4;for(0===s&&(l=138,d=3),e[(i+1)*2+1]=65535,a=0;a<=i;a++)r=s,s=e[(a+1)*2+1],++o<l&&r===s||(o<d?t.bl_tree[2*r]+=o:0!==r?(r!==n&&t.bl_tree[2*r]++,t.bl_tree[32]++):o<=10?t.bl_tree[34]++:t.bl_tree[36]++,o=0,n=r,0===s?(l=138,d=3):r===s?(l=6,d=3):(l=7,d=4))}function O(t,e,i){var a,r,n=-1,s=e[1],o=0,l=7,d=4;for(0===s&&(l=138,d=3),a=0;a<=i;a++)if(r=s,s=e[(a+1)*2+1],!(++o<l)||r!==s){if(o<d)do j(t,r,t.bl_tree);while(0!=--o)else 0!==r?(r!==n&&(j(t,r,t.bl_tree),o--),j(t,16,t.bl_tree),_(t,o-3,2)):o<=10?(j(t,17,t.bl_tree),_(t,o-3,3)):(j(t,18,t.bl_tree),_(t,o-11,7));o=0,n=r,0===s?(l=138,d=3):r===s?(l=6,d=3):(l=7,d=4)}}o(x);var M=!1;function I(t,e,i,a){_(t,0+ +!!a,3),A(t),k(t,i),k(t,~i),s.arraySet(t.pending_buf,t.window,e,i,t.pending),t.pending+=i}i._tr_init=function(t){M||(!function(){var t,e,i,s,o,l=Array(16);for(s=0,i=0;s<28;s++)for(t=0,g[s]=i;t<1<<d[s];t++)b[i++]=s;for(b[i-1]=s,o=0,s=0;s<16;s++)for(t=0,x[s]=o;t<1<<c[s];t++)m[o++]=s;for(o>>=7;s<30;s++)for(t=0,x[s]=o<<7;t<1<<c[s]-7;t++)m[256+o++]=s;for(e=0;e<=15;e++)l[e]=0;for(t=0;t<=143;)h[2*t+1]=8,t++,l[8]++;for(;t<=255;)h[2*t+1]=9,t++,l[9]++;for(;t<=279;)h[2*t+1]=7,t++,l[7]++;for(;t<=287;)h[2*t+1]=8,t++,l[8]++;for(z(h,287,l),t=0;t<30;t++)p[2*t+1]=5,p[2*t]=S(t,5);a=new v(h,d,257,286,15),r=new v(p,c,0,30,15),n=new v([],u,0,19,7)}(),M=!0),t.l_desc=new y(t.dyn_ltree,a),t.d_desc=new y(t.dyn_dtree,r),t.bl_desc=new y(t.bl_tree,n),t.bi_buf=0,t.bi_valid=0,N(t)},i._tr_stored_block=I,i._tr_flush_block=function(t,e,i,a){var r,n,s=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,i=0xf3ffc07f;for(e=0;e<=31;e++,i>>>=1)if(1&i&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0}(t)),P(t,t.l_desc),P(t,t.d_desc),s=function(t){var e;for(R(t,t.dyn_ltree,t.l_desc.max_code),R(t,t.dyn_dtree,t.d_desc.max_code),P(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*f[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),r=t.opt_len+3+7>>>3,(n=t.static_len+3+7>>>3)<=r&&(r=n)):r=n=i+5,i+4<=r&&-1!==e?I(t,e,i,a):4===t.strategy||n===r?(_(t,2+ +!!a,3),T(t,h,p)):(_(t,4+ +!!a,3),function(t,e,i,a){var r;for(_(t,e-257,5),_(t,i-1,5),_(t,a-4,4),r=0;r<a;r++)_(t,t.bl_tree[2*f[r]+1],3);O(t,t.dyn_ltree,e-1),O(t,t.dyn_dtree,i-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,s+1),T(t,t.dyn_ltree,t.dyn_dtree)),N(t),a&&A(t)},i._tr_tally=function(t,e,i){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&i,t.last_lit++,0===e?t.dyn_ltree[2*i]++:(t.matches++,e--,t.dyn_ltree[(b[i]+256+1)*2]++,t.dyn_dtree[2*w(e)]++),t.last_lit===t.lit_bufsize-1},i._tr_align=function(t){_(t,2,3),j(t,256,h),16===t.bi_valid?(k(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}},43486,(t,e,i)=>{"use strict";e.exports=function(t,e,i,a){for(var r=65535&t,n=t>>>16&65535,s=0;0!==i;){s=i>2e3?2e3:i,i-=s;do n=n+(r=r+e[a++]|0)|0;while(--s)r%=65521,n%=65521}return r|n<<16}},63327,(t,e,i)=>{"use strict";var a=function(){for(var t,e=[],i=0;i<256;i++){t=i;for(var a=0;a<8;a++)t=1&t?0xedb88320^t>>>1:t>>>1;e[i]=t}return e}();e.exports=function(t,e,i,r){var n=r+i;t^=-1;for(var s=r;s<n;s++)t=t>>>8^a[(t^e[s])&255];return -1^t}},19558,(t,e,i)=>{"use strict";e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},79674,(t,e,i)=>{"use strict";var a,r=t.r(79148),n=t.r(94333),s=t.r(43486),o=t.r(63327),l=t.r(19558),d=573;function c(t,e){return t.msg=l[e],e}function u(t){return(t<<1)-9*(t>4)}function f(t){for(var e=t.length;--e>=0;)t[e]=0}function h(t){var e=t.state,i=e.pending;i>t.avail_out&&(i=t.avail_out),0!==i&&(r.arraySet(t.output,e.pending_buf,e.pending_out,i,t.next_out),t.next_out+=i,e.pending_out+=i,t.total_out+=i,t.avail_out-=i,e.pending-=i,0===e.pending&&(e.pending_out=0))}function p(t,e){n._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,h(t.strm)}function m(t,e){t.pending_buf[t.pending++]=e}function b(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function g(t,e){var i,a,r=t.max_chain_length,n=t.strstart,s=t.prev_length,o=t.nice_match,l=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,d=t.window,c=t.w_mask,u=t.prev,f=t.strstart+258,h=d[n+s-1],p=d[n+s];t.prev_length>=t.good_match&&(r>>=2),o>t.lookahead&&(o=t.lookahead);do{if(d[(i=e)+s]!==p||d[i+s-1]!==h||d[i]!==d[n]||d[++i]!==d[n+1])continue;n+=2,i++;do;while(d[++n]===d[++i]&&d[++n]===d[++i]&&d[++n]===d[++i]&&d[++n]===d[++i]&&d[++n]===d[++i]&&d[++n]===d[++i]&&d[++n]===d[++i]&&d[++n]===d[++i]&&n<f)if(a=258-(f-n),n=f-258,a>s){if(t.match_start=e,s=a,a>=o)break;h=d[n+s-1],p=d[n+s]}}while((e=u[e&c])>l&&0!=--r)return s<=t.lookahead?s:t.lookahead}function x(t){var e,i,a,n,l,d=t.w_size;do{if(n=t.window_size-t.lookahead-t.strstart,t.strstart>=d+(d-262)){r.arraySet(t.window,t.window,d,d,0),t.match_start-=d,t.strstart-=d,t.block_start-=d,e=i=t.hash_size;do a=t.head[--e],t.head[e]=a>=d?a-d:0;while(--i)e=i=d;do a=t.prev[--e],t.prev[e]=a>=d?a-d:0;while(--i)n+=d}if(0===t.strm.avail_in)break;if(i=function(t,e,i,a){var n=t.avail_in;return(n>a&&(n=a),0===n)?0:(t.avail_in-=n,r.arraySet(e,t.input,t.next_in,n,i),1===t.state.wrap?t.adler=s(t.adler,e,n,i):2===t.state.wrap&&(t.adler=o(t.adler,e,n,i)),t.next_in+=n,t.total_in+=n,n)}(t.strm,t.window,t.strstart+t.lookahead,n),t.lookahead+=i,t.lookahead+t.insert>=3)for(l=t.strstart-t.insert,t.ins_h=t.window[l],t.ins_h=(t.ins_h<<t.hash_shift^t.window[l+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[l+3-1])&t.hash_mask,t.prev[l&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=l,l++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)}function v(t,e){for(var i,a;;){if(t.lookahead<262){if(x(t),t.lookahead<262&&0===e)return 1;if(0===t.lookahead)break}if(i=0,t.lookahead>=3&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,i=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==i&&t.strstart-i<=t.w_size-262&&(t.match_length=g(t,i)),t.match_length>=3)if(a=n._tr_tally(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,i=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart;while(0!=--t.match_length)t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else a=n._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(a&&(p(t,!1),0===t.strm.avail_out))return 1}return(t.insert=t.strstart<2?t.strstart:2,4===e)?(p(t,!0),0===t.strm.avail_out)?3:4:t.last_lit&&(p(t,!1),0===t.strm.avail_out)?1:2}function y(t,e){for(var i,a,r;;){if(t.lookahead<262){if(x(t),t.lookahead<262&&0===e)return 1;if(0===t.lookahead)break}if(i=0,t.lookahead>=3&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,i=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==i&&t.prev_length<t.max_lazy_match&&t.strstart-i<=t.w_size-262&&(t.match_length=g(t,i),t.match_length<=5&&(1===t.strategy||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){r=t.strstart+t.lookahead-3,a=n._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do++t.strstart<=r&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,i=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart);while(0!=--t.prev_length)if(t.match_available=0,t.match_length=2,t.strstart++,a&&(p(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if((a=n._tr_tally(t,0,t.window[t.strstart-1]))&&p(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return(t.match_available&&(a=n._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,4===e)?(p(t,!0),0===t.strm.avail_out)?3:4:t.last_lit&&(p(t,!1),0===t.strm.avail_out)?1:2}function w(t,e,i,a,r){this.good_length=t,this.max_lazy=e,this.nice_length=i,this.max_chain=a,this.func=r}function k(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=8,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new r.Buf16(2*d),this.dyn_dtree=new r.Buf16(122),this.bl_tree=new r.Buf16(78),f(this.dyn_ltree),f(this.dyn_dtree),f(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new r.Buf16(16),this.heap=new r.Buf16(573),f(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new r.Buf16(573),f(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function _(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=2,(e=t.state).pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?42:113,t.adler=+(2!==e.wrap),e.last_flush=0,n._tr_init(e),0):c(t,-2)}function j(t){var e,i=_(t);return 0===i&&((e=t.state).window_size=2*e.w_size,f(e.head),e.max_lazy_match=a[e.level].max_lazy,e.good_match=a[e.level].good_length,e.nice_match=a[e.level].nice_length,e.max_chain_length=a[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=2,e.match_available=0,e.ins_h=0),i}function S(t,e,i,a,n,s){if(!t)return -2;var o=1;if(-1===e&&(e=6),a<0?(o=0,a=-a):a>15&&(o=2,a-=16),n<1||n>9||8!==i||a<8||a>15||e<0||e>9||s<0||s>4)return c(t,-2);8===a&&(a=9);var l=new k;return t.state=l,l.strm=t,l.wrap=o,l.gzhead=null,l.w_bits=a,l.w_size=1<<l.w_bits,l.w_mask=l.w_size-1,l.hash_bits=n+7,l.hash_size=1<<l.hash_bits,l.hash_mask=l.hash_size-1,l.hash_shift=~~((l.hash_bits+3-1)/3),l.window=new r.Buf8(2*l.w_size),l.head=new r.Buf16(l.hash_size),l.prev=new r.Buf16(l.w_size),l.lit_bufsize=1<<n+6,l.pending_buf_size=4*l.lit_bufsize,l.pending_buf=new r.Buf8(l.pending_buf_size),l.d_buf=+l.lit_bufsize,l.l_buf=3*l.lit_bufsize,l.level=e,l.strategy=s,l.method=i,j(t)}a=[new w(0,0,0,0,function(t,e){var i=65535;for(65535>t.pending_buf_size-5&&(i=t.pending_buf_size-5);;){if(t.lookahead<=1){if(x(t),0===t.lookahead&&0===e)return 1;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var a=t.block_start+i;if((0===t.strstart||t.strstart>=a)&&(t.lookahead=t.strstart-a,t.strstart=a,p(t,!1),0===t.strm.avail_out)||t.strstart-t.block_start>=t.w_size-262&&(p(t,!1),0===t.strm.avail_out))return 1}return(t.insert=0,4===e)?(p(t,!0),0===t.strm.avail_out)?3:4:(t.strstart>t.block_start&&(p(t,!1),t.strm.avail_out),1)}),new w(4,4,8,4,v),new w(4,5,16,8,v),new w(4,6,32,32,v),new w(4,4,16,16,y),new w(8,16,32,32,y),new w(8,16,128,128,y),new w(8,32,128,256,y),new w(32,128,258,1024,y),new w(32,258,258,4096,y)],i.deflateInit=function(t,e){return S(t,e,8,15,8,0)},i.deflateInit2=S,i.deflateReset=j,i.deflateResetKeep=_,i.deflateSetHeader=function(t,e){return t&&t.state&&2===t.state.wrap?(t.state.gzhead=e,0):-2},i.deflate=function(t,e){if(!t||!t.state||e>5||e<0)return t?c(t,-2):-2;if(r=t.state,!t.output||!t.input&&0!==t.avail_in||666===r.status&&4!==e)return c(t,0===t.avail_out?-5:-2);if(r.strm=t,i=r.last_flush,r.last_flush=e,42===r.status)if(2===r.wrap)t.adler=0,m(r,31),m(r,139),m(r,8),r.gzhead?(m(r,+!!r.gzhead.text+2*!!r.gzhead.hcrc+4*!!r.gzhead.extra+8*!!r.gzhead.name+16*!!r.gzhead.comment),m(r,255&r.gzhead.time),m(r,r.gzhead.time>>8&255),m(r,r.gzhead.time>>16&255),m(r,r.gzhead.time>>24&255),m(r,9===r.level?2:4*(r.strategy>=2||r.level<2)),m(r,255&r.gzhead.os),r.gzhead.extra&&r.gzhead.extra.length&&(m(r,255&r.gzhead.extra.length),m(r,r.gzhead.extra.length>>8&255)),r.gzhead.hcrc&&(t.adler=o(t.adler,r.pending_buf,r.pending,0)),r.gzindex=0,r.status=69):(m(r,0),m(r,0),m(r,0),m(r,0),m(r,0),m(r,9===r.level?2:4*(r.strategy>=2||r.level<2)),m(r,3),r.status=113);else{var i,r,s,l,d=8+(r.w_bits-8<<4)<<8;d|=(r.strategy>=2||r.level<2?0:r.level<6?1:6===r.level?2:3)<<6,0!==r.strstart&&(d|=32),d+=31-d%31,r.status=113,b(r,d),0!==r.strstart&&(b(r,t.adler>>>16),b(r,65535&t.adler)),t.adler=1}if(69===r.status)if(r.gzhead.extra){for(s=r.pending;r.gzindex<(65535&r.gzhead.extra.length)&&(r.pending!==r.pending_buf_size||(r.gzhead.hcrc&&r.pending>s&&(t.adler=o(t.adler,r.pending_buf,r.pending-s,s)),h(t),s=r.pending,r.pending!==r.pending_buf_size));)m(r,255&r.gzhead.extra[r.gzindex]),r.gzindex++;r.gzhead.hcrc&&r.pending>s&&(t.adler=o(t.adler,r.pending_buf,r.pending-s,s)),r.gzindex===r.gzhead.extra.length&&(r.gzindex=0,r.status=73)}else r.status=73;if(73===r.status)if(r.gzhead.name){s=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>s&&(t.adler=o(t.adler,r.pending_buf,r.pending-s,s)),h(t),s=r.pending,r.pending===r.pending_buf_size)){l=1;break}l=r.gzindex<r.gzhead.name.length?255&r.gzhead.name.charCodeAt(r.gzindex++):0,m(r,l)}while(0!==l)r.gzhead.hcrc&&r.pending>s&&(t.adler=o(t.adler,r.pending_buf,r.pending-s,s)),0===l&&(r.gzindex=0,r.status=91)}else r.status=91;if(91===r.status)if(r.gzhead.comment){s=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>s&&(t.adler=o(t.adler,r.pending_buf,r.pending-s,s)),h(t),s=r.pending,r.pending===r.pending_buf_size)){l=1;break}l=r.gzindex<r.gzhead.comment.length?255&r.gzhead.comment.charCodeAt(r.gzindex++):0,m(r,l)}while(0!==l)r.gzhead.hcrc&&r.pending>s&&(t.adler=o(t.adler,r.pending_buf,r.pending-s,s)),0===l&&(r.status=103)}else r.status=103;if(103===r.status&&(r.gzhead.hcrc?(r.pending+2>r.pending_buf_size&&h(t),r.pending+2<=r.pending_buf_size&&(m(r,255&t.adler),m(r,t.adler>>8&255),t.adler=0,r.status=113)):r.status=113),0!==r.pending){if(h(t),0===t.avail_out)return r.last_flush=-1,0}else if(0===t.avail_in&&u(e)<=u(i)&&4!==e)return c(t,-5);if(666===r.status&&0!==t.avail_in)return c(t,-5);if(0!==t.avail_in||0!==r.lookahead||0!==e&&666!==r.status){var g=2===r.strategy?function(t,e){for(var i;;){if(0===t.lookahead&&(x(t),0===t.lookahead)){if(0===e)return 1;break}if(t.match_length=0,i=n._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,i&&(p(t,!1),0===t.strm.avail_out))return 1}return(t.insert=0,4===e)?(p(t,!0),0===t.strm.avail_out)?3:4:t.last_lit&&(p(t,!1),0===t.strm.avail_out)?1:2}(r,e):3===r.strategy?function(t,e){for(var i,a,r,s,o=t.window;;){if(t.lookahead<=258){if(x(t),t.lookahead<=258&&0===e)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(a=o[r=t.strstart-1])===o[++r]&&a===o[++r]&&a===o[++r]){s=t.strstart+258;do;while(a===o[++r]&&a===o[++r]&&a===o[++r]&&a===o[++r]&&a===o[++r]&&a===o[++r]&&a===o[++r]&&a===o[++r]&&r<s)t.match_length=258-(s-r),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(i=n._tr_tally(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(i=n._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),i&&(p(t,!1),0===t.strm.avail_out))return 1}return(t.insert=0,4===e)?(p(t,!0),0===t.strm.avail_out)?3:4:t.last_lit&&(p(t,!1),0===t.strm.avail_out)?1:2}(r,e):a[r.level].func(r,e);if((3===g||4===g)&&(r.status=666),1===g||3===g)return 0===t.avail_out&&(r.last_flush=-1),0;if(2===g&&(1===e?n._tr_align(r):5!==e&&(n._tr_stored_block(r,0,0,!1),3===e&&(f(r.head),0===r.lookahead&&(r.strstart=0,r.block_start=0,r.insert=0))),h(t),0===t.avail_out))return r.last_flush=-1,0}return 4!==e?0:r.wrap<=0?1:(2===r.wrap?(m(r,255&t.adler),m(r,t.adler>>8&255),m(r,t.adler>>16&255),m(r,t.adler>>24&255),m(r,255&t.total_in),m(r,t.total_in>>8&255),m(r,t.total_in>>16&255),m(r,t.total_in>>24&255)):(b(r,t.adler>>>16),b(r,65535&t.adler)),h(t),r.wrap>0&&(r.wrap=-r.wrap),+(0===r.pending))},i.deflateEnd=function(t){var e;return t&&t.state?42!==(e=t.state.status)&&69!==e&&73!==e&&91!==e&&103!==e&&113!==e&&666!==e?c(t,-2):(t.state=null,113===e?c(t,-3):0):-2},i.deflateSetDictionary=function(t,e){var i,a,n,o,l,d,c,u,h=e.length;if(!t||!t.state||2===(o=(i=t.state).wrap)||1===o&&42!==i.status||i.lookahead)return -2;for(1===o&&(t.adler=s(t.adler,e,h,0)),i.wrap=0,h>=i.w_size&&(0===o&&(f(i.head),i.strstart=0,i.block_start=0,i.insert=0),u=new r.Buf8(i.w_size),r.arraySet(u,e,h-i.w_size,i.w_size,0),e=u,h=i.w_size),l=t.avail_in,d=t.next_in,c=t.input,t.avail_in=h,t.next_in=0,t.input=e,x(i);i.lookahead>=3;){a=i.strstart,n=i.lookahead-2;do i.ins_h=(i.ins_h<<i.hash_shift^i.window[a+3-1])&i.hash_mask,i.prev[a&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=a,a++;while(--n)i.strstart=a,i.lookahead=2,x(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=d,t.input=c,t.avail_in=l,i.wrap=o,0},i.deflateInfo="pako deflate (from Nodeca project)"},63202,(t,e,i)=>{"use strict";var a=t.r(79148),r=!0,n=!0;try{String.fromCharCode.apply(null,[0])}catch(t){r=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){n=!1}for(var s=new a.Buf8(256),o=0;o<256;o++)s[o]=o>=252?6:o>=248?5:o>=240?4:o>=224?3:o>=192?2:1;function l(t,e){if(e<65534&&(t.subarray&&n||!t.subarray&&r))return String.fromCharCode.apply(null,a.shrinkBuf(t,e));for(var i="",s=0;s<e;s++)i+=String.fromCharCode(t[s]);return i}s[254]=s[254]=1,i.string2buf=function(t){var e,i,r,n,s,o=t.length,l=0;for(n=0;n<o;n++)(64512&(i=t.charCodeAt(n)))==55296&&n+1<o&&(64512&(r=t.charCodeAt(n+1)))==56320&&(i=65536+(i-55296<<10)+(r-56320),n++),l+=i<128?1:i<2048?2:i<65536?3:4;for(s=0,e=new a.Buf8(l),n=0;s<l;n++)(64512&(i=t.charCodeAt(n)))==55296&&n+1<o&&(64512&(r=t.charCodeAt(n+1)))==56320&&(i=65536+(i-55296<<10)+(r-56320),n++),i<128?e[s++]=i:(i<2048?e[s++]=192|i>>>6:(i<65536?e[s++]=224|i>>>12:(e[s++]=240|i>>>18,e[s++]=128|i>>>12&63),e[s++]=128|i>>>6&63),e[s++]=128|63&i);return e},i.buf2binstring=function(t){return l(t,t.length)},i.binstring2buf=function(t){for(var e=new a.Buf8(t.length),i=0,r=e.length;i<r;i++)e[i]=t.charCodeAt(i);return e},i.buf2string=function(t,e){var i,a,r,n,o=e||t.length,d=Array(2*o);for(a=0,i=0;i<o;){if((r=t[i++])<128){d[a++]=r;continue}if((n=s[r])>4){d[a++]=65533,i+=n-1;continue}for(r&=2===n?31:3===n?15:7;n>1&&i<o;)r=r<<6|63&t[i++],n--;if(n>1){d[a++]=65533;continue}r<65536?d[a++]=r:(r-=65536,d[a++]=55296|r>>10&1023,d[a++]=56320|1023&r)}return l(d,a)},i.utf8border=function(t,e){var i;for((e=e||t.length)>t.length&&(e=t.length),i=e-1;i>=0&&(192&t[i])==128;)i--;return i<0||0===i?e:i+s[t[i]]>e?i:e}},98899,(t,e,i)=>{"use strict";e.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},48901,(t,e,i)=>{"use strict";var a=t.r(79674),r=t.r(79148),n=t.r(63202),s=t.r(19558),o=t.r(98899),l=Object.prototype.toString;function d(t){if(!(this instanceof d))return new d(t);this.options=r.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},t||{});var e,i=this.options;i.raw&&i.windowBits>0?i.windowBits=-i.windowBits:i.gzip&&i.windowBits>0&&i.windowBits<16&&(i.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new o,this.strm.avail_out=0;var c=a.deflateInit2(this.strm,i.level,i.method,i.windowBits,i.memLevel,i.strategy);if(0!==c)throw Error(s[c]);if(i.header&&a.deflateSetHeader(this.strm,i.header),i.dictionary){if(e="string"==typeof i.dictionary?n.string2buf(i.dictionary):"[object ArrayBuffer]"===l.call(i.dictionary)?new Uint8Array(i.dictionary):i.dictionary,0!==(c=a.deflateSetDictionary(this.strm,e)))throw Error(s[c]);this._dict_set=!0}}function c(t,e){var i=new d(e);if(i.push(t,!0),i.err)throw i.msg||s[i.err];return i.result}d.prototype.push=function(t,e){var i,s,o=this.strm,d=this.options.chunkSize;if(this.ended)return!1;s=e===~~e?e:4*(!0===e),"string"==typeof t?o.input=n.string2buf(t):"[object ArrayBuffer]"===l.call(t)?o.input=new Uint8Array(t):o.input=t,o.next_in=0,o.avail_in=o.input.length;do{if(0===o.avail_out&&(o.output=new r.Buf8(d),o.next_out=0,o.avail_out=d),1!==(i=a.deflate(o,s))&&0!==i)return this.onEnd(i),this.ended=!0,!1;(0===o.avail_out||0===o.avail_in&&(4===s||2===s))&&("string"===this.options.to?this.onData(n.buf2binstring(r.shrinkBuf(o.output,o.next_out))):this.onData(r.shrinkBuf(o.output,o.next_out)))}while((o.avail_in>0||0===o.avail_out)&&1!==i)return 4===s?(i=a.deflateEnd(this.strm),this.onEnd(i),this.ended=!0,0===i):(2===s&&(this.onEnd(0),o.avail_out=0),!0)},d.prototype.onData=function(t){this.chunks.push(t)},d.prototype.onEnd=function(t){0===t&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=r.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},i.Deflate=d,i.deflate=c,i.deflateRaw=function(t,e){return(e=e||{}).raw=!0,c(t,e)},i.gzip=function(t,e){return(e=e||{}).gzip=!0,c(t,e)}},75531,(t,e,i)=>{"use strict";e.exports=function(t,e){var i,a,r,n,s,o,l,d,c,u,f,h,p,m,b,g,x,v,y,w,k,_,j,S,z;i=t.state,a=t.next_in,S=t.input,r=a+(t.avail_in-5),n=t.next_out,z=t.output,s=n-(e-t.avail_out),o=n+(t.avail_out-257),l=i.dmax,d=i.wsize,c=i.whave,u=i.wnext,f=i.window,h=i.hold,p=i.bits,m=i.lencode,b=i.distcode,g=(1<<i.lenbits)-1,x=(1<<i.distbits)-1;t:do for(p<15&&(h+=S[a++]<<p,p+=8,h+=S[a++]<<p,p+=8),v=m[h&g];;){if(h>>>=y=v>>>24,p-=y,0==(y=v>>>16&255))z[n++]=65535&v;else if(16&y)for(w=65535&v,(y&=15)&&(p<y&&(h+=S[a++]<<p,p+=8),w+=h&(1<<y)-1,h>>>=y,p-=y),p<15&&(h+=S[a++]<<p,p+=8,h+=S[a++]<<p,p+=8),v=b[h&x];;){if(h>>>=y=v>>>24,p-=y,16&(y=v>>>16&255)){if(k=65535&v,p<(y&=15)&&(h+=S[a++]<<p,(p+=8)<y&&(h+=S[a++]<<p,p+=8)),(k+=h&(1<<y)-1)>l){t.msg="invalid distance too far back",i.mode=30;break t}if(h>>>=y,p-=y,k>(y=n-s)){if((y=k-y)>c&&i.sane){t.msg="invalid distance too far back",i.mode=30;break t}if(_=0,j=f,0===u){if(_+=d-y,y<w){w-=y;do z[n++]=f[_++];while(--y)_=n-k,j=z}}else if(u<y){if(_+=d+u-y,(y-=u)<w){w-=y;do z[n++]=f[_++];while(--y)if(_=0,u<w){w-=y=u;do z[n++]=f[_++];while(--y)_=n-k,j=z}}}else if(_+=u-y,y<w){w-=y;do z[n++]=f[_++];while(--y)_=n-k,j=z}for(;w>2;)z[n++]=j[_++],z[n++]=j[_++],z[n++]=j[_++],w-=3;w&&(z[n++]=j[_++],w>1&&(z[n++]=j[_++]))}else{_=n-k;do z[n++]=z[_++],z[n++]=z[_++],z[n++]=z[_++],w-=3;while(w>2)w&&(z[n++]=z[_++],w>1&&(z[n++]=z[_++]))}}else if((64&y)==0){v=b[(65535&v)+(h&(1<<y)-1)];continue}else{t.msg="invalid distance code",i.mode=30;break t}break}else if((64&y)==0){v=m[(65535&v)+(h&(1<<y)-1)];continue}else if(32&y){i.mode=12;break t}else{t.msg="invalid literal/length code",i.mode=30;break t}break}while(a<r&&n<o)a-=w=p>>3,p-=w<<3,h&=(1<<p)-1,t.next_in=a,t.next_out=n,t.avail_in=a<r?5+(r-a):5-(a-r),t.avail_out=n<o?257+(o-n):257-(n-o),i.hold=h,i.bits=p}},73012,(t,e,i)=>{"use strict";var a=t.r(79148),r=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],n=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],s=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],o=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];e.exports=function(t,e,i,l,d,c,u,f){var h,p,m,b,g,x,v,y,w,k=f.bits,_=0,j=0,S=0,z=0,N=0,A=0,E=0,C=0,T=0,P=0,R=null,O=0,M=new a.Buf16(16),I=new a.Buf16(16),D=null,L=0;for(_=0;_<=15;_++)M[_]=0;for(j=0;j<l;j++)M[e[i+j]]++;for(z=15,N=k;z>=1&&0===M[z];z--);if(N>z&&(N=z),0===z)return d[c++]=0x1400000,d[c++]=0x1400000,f.bits=1,0;for(S=1;S<z&&0===M[S];S++);for(N<S&&(N=S),C=1,_=1;_<=15;_++)if(C<<=1,(C-=M[_])<0)return -1;if(C>0&&(0===t||1!==z))return -1;for(_=1,I[1]=0;_<15;_++)I[_+1]=I[_]+M[_];for(j=0;j<l;j++)0!==e[i+j]&&(u[I[e[i+j]]++]=j);if(0===t?(R=D=u,x=19):1===t?(R=r,O-=257,D=n,L-=257,x=256):(R=s,D=o,x=-1),P=0,j=0,_=S,g=c,A=N,E=0,m=-1,b=(T=1<<N)-1,1===t&&T>852||2===t&&T>592)return 1;for(;;){v=_-E,u[j]<x?(y=0,w=u[j]):u[j]>x?(y=D[L+u[j]],w=R[O+u[j]]):(y=96,w=0),h=1<<_-E,S=p=1<<A;do d[g+(P>>E)+(p-=h)]=v<<24|y<<16|w;while(0!==p)for(h=1<<_-1;P&h;)h>>=1;if(0!==h?(P&=h-1,P+=h):P=0,j++,0==--M[_]){if(_===z)break;_=e[i+u[j]]}if(_>N&&(P&b)!==m){for(0===E&&(E=N),g+=S,C=1<<(A=_-E);A+E<z&&!((C-=M[A+E])<=0);)A++,C<<=1;if(T+=1<<A,1===t&&T>852||2===t&&T>592)return 1;d[m=P&b]=N<<24|A<<16|g-c}}return 0!==P&&(d[g+P]=_-E<<24|4194304),f.bits=N,0}},57235,(t,e,i)=>{"use strict";var a,r,n=t.r(79148),s=t.r(43486),o=t.r(63327),l=t.r(75531),d=t.r(73012);function c(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function u(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function f(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=1,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new n.Buf32(852),e.distcode=e.distdyn=new n.Buf32(592),e.sane=1,e.back=-1,0):-2}function h(t){var e;return t&&t.state?((e=t.state).wsize=0,e.whave=0,e.wnext=0,f(t)):-2}function p(t,e){var i,a;return t&&t.state?(a=t.state,e<0?(i=0,e=-e):(i=(e>>4)+1,e<48&&(e&=15)),e&&(e<8||e>15))?-2:(null!==a.window&&a.wbits!==e&&(a.window=null),a.wrap=i,a.wbits=e,h(t)):-2}function m(t,e){var i,a;return t?(t.state=a=new u,a.window=null,0!==(i=p(t,e))&&(t.state=null),i):-2}var b=!0;function g(t,e,i,a){var r,s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new n.Buf8(s.wsize)),a>=s.wsize?(n.arraySet(s.window,e,i-s.wsize,s.wsize,0),s.wnext=0,s.whave=s.wsize):((r=s.wsize-s.wnext)>a&&(r=a),n.arraySet(s.window,e,i-a,r,s.wnext),(a-=r)?(n.arraySet(s.window,e,i-a,a,0),s.wnext=a,s.whave=s.wsize):(s.wnext+=r,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=r))),0}i.inflateReset=h,i.inflateReset2=p,i.inflateResetKeep=f,i.inflateInit=function(t){return m(t,15)},i.inflateInit2=m,i.inflate=function(t,e){var i,u,f,h,p,m,x,v,y,w,k,_,j,S,z,N,A,E,C,T,P,R,O,M,I=0,D=new n.Buf8(4),L=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return -2;12===(i=t.state).mode&&(i.mode=13),p=t.next_out,f=t.output,x=t.avail_out,h=t.next_in,u=t.input,m=t.avail_in,v=i.hold,y=i.bits,w=m,k=x,R=0;e:for(;;)switch(i.mode){case 1:if(0===i.wrap){i.mode=13;break}for(;y<16;){if(0===m)break e;m--,v+=u[h++]<<y,y+=8}if(2&i.wrap&&35615===v){i.check=0,D[0]=255&v,D[1]=v>>>8&255,i.check=o(i.check,D,2,0),v=0,y=0,i.mode=2;break}if(i.flags=0,i.head&&(i.head.done=!1),!(1&i.wrap)||(((255&v)<<8)+(v>>8))%31){t.msg="incorrect header check",i.mode=30;break}if((15&v)!=8){t.msg="unknown compression method",i.mode=30;break}if(v>>>=4,y-=4,P=(15&v)+8,0===i.wbits)i.wbits=P;else if(P>i.wbits){t.msg="invalid window size",i.mode=30;break}i.dmax=1<<P,t.adler=i.check=1,i.mode=512&v?10:12,v=0,y=0;break;case 2:for(;y<16;){if(0===m)break e;m--,v+=u[h++]<<y,y+=8}if(i.flags=v,(255&i.flags)!=8){t.msg="unknown compression method",i.mode=30;break}if(57344&i.flags){t.msg="unknown header flags set",i.mode=30;break}i.head&&(i.head.text=v>>8&1),512&i.flags&&(D[0]=255&v,D[1]=v>>>8&255,i.check=o(i.check,D,2,0)),v=0,y=0,i.mode=3;case 3:for(;y<32;){if(0===m)break e;m--,v+=u[h++]<<y,y+=8}i.head&&(i.head.time=v),512&i.flags&&(D[0]=255&v,D[1]=v>>>8&255,D[2]=v>>>16&255,D[3]=v>>>24&255,i.check=o(i.check,D,4,0)),v=0,y=0,i.mode=4;case 4:for(;y<16;){if(0===m)break e;m--,v+=u[h++]<<y,y+=8}i.head&&(i.head.xflags=255&v,i.head.os=v>>8),512&i.flags&&(D[0]=255&v,D[1]=v>>>8&255,i.check=o(i.check,D,2,0)),v=0,y=0,i.mode=5;case 5:if(1024&i.flags){for(;y<16;){if(0===m)break e;m--,v+=u[h++]<<y,y+=8}i.length=v,i.head&&(i.head.extra_len=v),512&i.flags&&(D[0]=255&v,D[1]=v>>>8&255,i.check=o(i.check,D,2,0)),v=0,y=0}else i.head&&(i.head.extra=null);i.mode=6;case 6:if(1024&i.flags&&((_=i.length)>m&&(_=m),_&&(i.head&&(P=i.head.extra_len-i.length,i.head.extra||(i.head.extra=Array(i.head.extra_len)),n.arraySet(i.head.extra,u,h,_,P)),512&i.flags&&(i.check=o(i.check,u,_,h)),m-=_,h+=_,i.length-=_),i.length))break e;i.length=0,i.mode=7;case 7:if(2048&i.flags){if(0===m)break e;_=0;do P=u[h+_++],i.head&&P&&i.length<65536&&(i.head.name+=String.fromCharCode(P));while(P&&_<m)if(512&i.flags&&(i.check=o(i.check,u,_,h)),m-=_,h+=_,P)break e}else i.head&&(i.head.name=null);i.length=0,i.mode=8;case 8:if(4096&i.flags){if(0===m)break e;_=0;do P=u[h+_++],i.head&&P&&i.length<65536&&(i.head.comment+=String.fromCharCode(P));while(P&&_<m)if(512&i.flags&&(i.check=o(i.check,u,_,h)),m-=_,h+=_,P)break e}else i.head&&(i.head.comment=null);i.mode=9;case 9:if(512&i.flags){for(;y<16;){if(0===m)break e;m--,v+=u[h++]<<y,y+=8}if(v!==(65535&i.check)){t.msg="header crc mismatch",i.mode=30;break}v=0,y=0}i.head&&(i.head.hcrc=i.flags>>9&1,i.head.done=!0),t.adler=i.check=0,i.mode=12;break;case 10:for(;y<32;){if(0===m)break e;m--,v+=u[h++]<<y,y+=8}t.adler=i.check=c(v),v=0,y=0,i.mode=11;case 11:if(0===i.havedict)return t.next_out=p,t.avail_out=x,t.next_in=h,t.avail_in=m,i.hold=v,i.bits=y,2;t.adler=i.check=1,i.mode=12;case 12:if(5===e||6===e)break e;case 13:if(i.last){v>>>=7&y,y-=7&y,i.mode=27;break}for(;y<3;){if(0===m)break e;m--,v+=u[h++]<<y,y+=8}switch(i.last=1&v,y-=1,3&(v>>>=1)){case 0:i.mode=14;break;case 1:if(!function(t){if(b){var e;for(a=new n.Buf32(512),r=new n.Buf32(32),e=0;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(d(1,t.lens,0,288,a,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;d(2,t.lens,0,32,r,0,t.work,{bits:5}),b=!1}t.lencode=a,t.lenbits=9,t.distcode=r,t.distbits=5}(i),i.mode=20,6===e){v>>>=2,y-=2;break e}break;case 2:i.mode=17;break;case 3:t.msg="invalid block type",i.mode=30}v>>>=2,y-=2;break;case 14:for(v>>>=7&y,y-=7&y;y<32;){if(0===m)break e;m--,v+=u[h++]<<y,y+=8}if((65535&v)!=(v>>>16^65535)){t.msg="invalid stored block lengths",i.mode=30;break}if(i.length=65535&v,v=0,y=0,i.mode=15,6===e)break e;case 15:i.mode=16;case 16:if(_=i.length){if(_>m&&(_=m),_>x&&(_=x),0===_)break e;n.arraySet(f,u,h,_,p),m-=_,h+=_,x-=_,p+=_,i.length-=_;break}i.mode=12;break;case 17:for(;y<14;){if(0===m)break e;m--,v+=u[h++]<<y,y+=8}if(i.nlen=(31&v)+257,y-=5,i.ndist=(31&(v>>>=5))+1,y-=5,i.ncode=(15&(v>>>=5))+4,v>>>=4,y-=4,i.nlen>286||i.ndist>30){t.msg="too many length or distance symbols",i.mode=30;break}i.have=0,i.mode=18;case 18:for(;i.have<i.ncode;){for(;y<3;){if(0===m)break e;m--,v+=u[h++]<<y,y+=8}i.lens[L[i.have++]]=7&v,v>>>=3,y-=3}for(;i.have<19;)i.lens[L[i.have++]]=0;if(i.lencode=i.lendyn,i.lenbits=7,O={bits:i.lenbits},R=d(0,i.lens,0,19,i.lencode,0,i.work,O),i.lenbits=O.bits,R){t.msg="invalid code lengths set",i.mode=30;break}i.have=0,i.mode=19;case 19:for(;i.have<i.nlen+i.ndist;){for(;z=(I=i.lencode[v&(1<<i.lenbits)-1])>>>24,N=I>>>16&255,A=65535&I,!(z<=y);){if(0===m)break e;m--,v+=u[h++]<<y,y+=8}if(A<16)v>>>=z,y-=z,i.lens[i.have++]=A;else{if(16===A){for(M=z+2;y<M;){if(0===m)break e;m--,v+=u[h++]<<y,y+=8}if(v>>>=z,y-=z,0===i.have){t.msg="invalid bit length repeat",i.mode=30;break}P=i.lens[i.have-1],_=3+(3&v),v>>>=2,y-=2}else if(17===A){for(M=z+3;y<M;){if(0===m)break e;m--,v+=u[h++]<<y,y+=8}v>>>=z,y-=z,P=0,_=3+(7&v),v>>>=3,y-=3}else{for(M=z+7;y<M;){if(0===m)break e;m--,v+=u[h++]<<y,y+=8}v>>>=z,y-=z,P=0,_=11+(127&v),v>>>=7,y-=7}if(i.have+_>i.nlen+i.ndist){t.msg="invalid bit length repeat",i.mode=30;break}for(;_--;)i.lens[i.have++]=P}}if(30===i.mode)break;if(0===i.lens[256]){t.msg="invalid code -- missing end-of-block",i.mode=30;break}if(i.lenbits=9,O={bits:i.lenbits},R=d(1,i.lens,0,i.nlen,i.lencode,0,i.work,O),i.lenbits=O.bits,R){t.msg="invalid literal/lengths set",i.mode=30;break}if(i.distbits=6,i.distcode=i.distdyn,O={bits:i.distbits},R=d(2,i.lens,i.nlen,i.ndist,i.distcode,0,i.work,O),i.distbits=O.bits,R){t.msg="invalid distances set",i.mode=30;break}if(i.mode=20,6===e)break e;case 20:i.mode=21;case 21:if(m>=6&&x>=258){t.next_out=p,t.avail_out=x,t.next_in=h,t.avail_in=m,i.hold=v,i.bits=y,l(t,k),p=t.next_out,f=t.output,x=t.avail_out,h=t.next_in,u=t.input,m=t.avail_in,v=i.hold,y=i.bits,12===i.mode&&(i.back=-1);break}for(i.back=0;z=(I=i.lencode[v&(1<<i.lenbits)-1])>>>24,N=I>>>16&255,A=65535&I,!(z<=y);){if(0===m)break e;m--,v+=u[h++]<<y,y+=8}if(N&&(240&N)==0){for(E=z,C=N,T=A;z=(I=i.lencode[T+((v&(1<<E+C)-1)>>E)])>>>24,N=I>>>16&255,A=65535&I,!(E+z<=y);){if(0===m)break e;m--,v+=u[h++]<<y,y+=8}v>>>=E,y-=E,i.back+=E}if(v>>>=z,y-=z,i.back+=z,i.length=A,0===N){i.mode=26;break}if(32&N){i.back=-1,i.mode=12;break}if(64&N){t.msg="invalid literal/length code",i.mode=30;break}i.extra=15&N,i.mode=22;case 22:if(i.extra){for(M=i.extra;y<M;){if(0===m)break e;m--,v+=u[h++]<<y,y+=8}i.length+=v&(1<<i.extra)-1,v>>>=i.extra,y-=i.extra,i.back+=i.extra}i.was=i.length,i.mode=23;case 23:for(;z=(I=i.distcode[v&(1<<i.distbits)-1])>>>24,N=I>>>16&255,A=65535&I,!(z<=y);){if(0===m)break e;m--,v+=u[h++]<<y,y+=8}if((240&N)==0){for(E=z,C=N,T=A;z=(I=i.distcode[T+((v&(1<<E+C)-1)>>E)])>>>24,N=I>>>16&255,A=65535&I,!(E+z<=y);){if(0===m)break e;m--,v+=u[h++]<<y,y+=8}v>>>=E,y-=E,i.back+=E}if(v>>>=z,y-=z,i.back+=z,64&N){t.msg="invalid distance code",i.mode=30;break}i.offset=A,i.extra=15&N,i.mode=24;case 24:if(i.extra){for(M=i.extra;y<M;){if(0===m)break e;m--,v+=u[h++]<<y,y+=8}i.offset+=v&(1<<i.extra)-1,v>>>=i.extra,y-=i.extra,i.back+=i.extra}if(i.offset>i.dmax){t.msg="invalid distance too far back",i.mode=30;break}i.mode=25;case 25:if(0===x)break e;if(_=k-x,i.offset>_){if((_=i.offset-_)>i.whave&&i.sane){t.msg="invalid distance too far back",i.mode=30;break}_>i.wnext?(_-=i.wnext,j=i.wsize-_):j=i.wnext-_,_>i.length&&(_=i.length),S=i.window}else S=f,j=p-i.offset,_=i.length;_>x&&(_=x),x-=_,i.length-=_;do f[p++]=S[j++];while(--_)0===i.length&&(i.mode=21);break;case 26:if(0===x)break e;f[p++]=i.length,x--,i.mode=21;break;case 27:if(i.wrap){for(;y<32;){if(0===m)break e;m--,v|=u[h++]<<y,y+=8}if(k-=x,t.total_out+=k,i.total+=k,k&&(t.adler=i.check=i.flags?o(i.check,f,k,p-k):s(i.check,f,k,p-k)),k=x,(i.flags?v:c(v))!==i.check){t.msg="incorrect data check",i.mode=30;break}v=0,y=0}i.mode=28;case 28:if(i.wrap&&i.flags){for(;y<32;){if(0===m)break e;m--,v+=u[h++]<<y,y+=8}if(v!==(0|i.total)){t.msg="incorrect length check",i.mode=30;break}v=0,y=0}i.mode=29;case 29:R=1;break e;case 30:R=-3;break e;case 31:return -4;default:return -2}return t.next_out=p,t.avail_out=x,t.next_in=h,t.avail_in=m,i.hold=v,i.bits=y,(i.wsize||k!==t.avail_out&&i.mode<30&&(i.mode<27||4!==e))&&g(t,t.output,t.next_out,k-t.avail_out),w-=t.avail_in,k-=t.avail_out,t.total_in+=w,t.total_out+=k,i.total+=k,i.wrap&&k&&(t.adler=i.check=i.flags?o(i.check,f,k,t.next_out-k):s(i.check,f,k,t.next_out-k)),t.data_type=i.bits+64*!!i.last+128*(12===i.mode)+256*(20===i.mode||15===i.mode),(0===w&&0===k||4===e)&&0===R&&(R=-5),R},i.inflateEnd=function(t){if(!t||!t.state)return -2;var e=t.state;return e.window&&(e.window=null),t.state=null,0},i.inflateGetHeader=function(t,e){var i;return t&&t.state&&(2&(i=t.state).wrap)!=0?(i.head=e,e.done=!1,0):-2},i.inflateSetDictionary=function(t,e){var i,a=e.length;return t&&t.state&&(0===(i=t.state).wrap||11===i.mode)?11===i.mode&&s(1,e,a,0)!==i.check?-3:g(t,e,a,a)?(i.mode=31,-4):(i.havedict=1,0):-2},i.inflateInfo="pako inflate (from Nodeca project)"},34131,(t,e,i)=>{"use strict";e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},24448,(t,e,i)=>{"use strict";e.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},82473,(t,e,i)=>{"use strict";var a=t.r(57235),r=t.r(79148),n=t.r(63202),s=t.r(34131),o=t.r(19558),l=t.r(98899),d=t.r(24448),c=Object.prototype.toString;function u(t){if(!(this instanceof u))return new u(t);this.options=r.assign({chunkSize:16384,windowBits:0,to:""},t||{});var e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(t&&t.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(15&e.windowBits)==0&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var i=a.inflateInit2(this.strm,e.windowBits);if(i!==s.Z_OK||(this.header=new d,a.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=n.string2buf(e.dictionary):"[object ArrayBuffer]"===c.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw)&&(i=a.inflateSetDictionary(this.strm,e.dictionary))!==s.Z_OK))throw Error(o[i])}function f(t,e){var i=new u(e);if(i.push(t,!0),i.err)throw i.msg||o[i.err];return i.result}u.prototype.push=function(t,e){var i,o,l,d,u,f=this.strm,h=this.options.chunkSize,p=this.options.dictionary,m=!1;if(this.ended)return!1;o=e===~~e?e:!0===e?s.Z_FINISH:s.Z_NO_FLUSH,"string"==typeof t?f.input=n.binstring2buf(t):"[object ArrayBuffer]"===c.call(t)?f.input=new Uint8Array(t):f.input=t,f.next_in=0,f.avail_in=f.input.length;do{if(0===f.avail_out&&(f.output=new r.Buf8(h),f.next_out=0,f.avail_out=h),(i=a.inflate(f,s.Z_NO_FLUSH))===s.Z_NEED_DICT&&p&&(i=a.inflateSetDictionary(this.strm,p)),i===s.Z_BUF_ERROR&&!0===m&&(i=s.Z_OK,m=!1),i!==s.Z_STREAM_END&&i!==s.Z_OK)return this.onEnd(i),this.ended=!0,!1;f.next_out&&(0===f.avail_out||i===s.Z_STREAM_END||0===f.avail_in&&(o===s.Z_FINISH||o===s.Z_SYNC_FLUSH))&&("string"===this.options.to?(l=n.utf8border(f.output,f.next_out),d=f.next_out-l,u=n.buf2string(f.output,l),f.next_out=d,f.avail_out=h-d,d&&r.arraySet(f.output,f.output,l,d,0),this.onData(u)):this.onData(r.shrinkBuf(f.output,f.next_out))),0===f.avail_in&&0===f.avail_out&&(m=!0)}while((f.avail_in>0||0===f.avail_out)&&i!==s.Z_STREAM_END)return(i===s.Z_STREAM_END&&(o=s.Z_FINISH),o===s.Z_FINISH)?(i=a.inflateEnd(this.strm),this.onEnd(i),this.ended=!0,i===s.Z_OK):(o===s.Z_SYNC_FLUSH&&(this.onEnd(s.Z_OK),f.avail_out=0),!0)},u.prototype.onData=function(t){this.chunks.push(t)},u.prototype.onEnd=function(t){t===s.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=r.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},i.Inflate=u,i.inflate=f,i.inflateRaw=function(t,e){return(e=e||{}).raw=!0,f(t,e)},i.ungzip=f},9643,(t,e,i)=>{"use strict";var a=t.r(79148).assign,r=t.r(48901),n=t.r(82473),s=t.r(34131),o={};a(o,r,n,s),e.exports=o},72488,(t,e,i)=>{"use strict";var a="u">typeof Uint8Array&&"u">typeof Uint16Array&&"u">typeof Uint32Array,r=t.r(9643),n=t.r(65464),s=t.r(48913),o=a?"uint8array":"array";function l(t,e){s.call(this,"FlateWorker/"+t),this._pako=null,this._pakoAction=t,this._pakoOptions=e,this.meta={}}i.magic="\b\0",n.inherits(l,s),l.prototype.processChunk=function(t){this.meta=t.meta,null===this._pako&&this._createPako(),this._pako.push(n.transformTo(o,t.data),!1)},l.prototype.flush=function(){s.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},l.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this._pako=null},l.prototype._createPako=function(){this._pako=new r[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var t=this;this._pako.onData=function(e){t.push({data:e,meta:t.meta})}},i.compressWorker=function(t){return new l("Deflate",t)},i.uncompressWorker=function(){return new l("Inflate",{})}},36462,(t,e,i)=>{"use strict";var a=t.r(48913);i.STORE={magic:"\0\0",compressWorker:function(){return new a("STORE compression")},uncompressWorker:function(){return new a("STORE decompression")}},i.DEFLATE=t.r(72488)},71471,(t,e,i)=>{"use strict";i.LOCAL_FILE_HEADER="PK\x03\x04",i.CENTRAL_FILE_HEADER="PK\x01\x02",i.CENTRAL_DIRECTORY_END="PK\x05\x06",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x06\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK\x06\x06",i.DATA_DESCRIPTOR="PK\x07\b"},21908,(t,e,i)=>{"use strict";var a=t.r(65464),r=t.r(48913),n=t.r(46253),s=t.r(63494),o=t.r(71471),l=function(t,e){var i,a="";for(i=0;i<e;i++)a+=String.fromCharCode(255&t),t>>>=8;return a},d=function(t,e){var i=t;return t||(i=e?16893:33204),(65535&i)<<16},c=function(t,e,i,r,c,u){var f,h,p=t.file,m=t.compression,b=u!==n.utf8encode,g=a.transformTo("string",u(p.name)),x=a.transformTo("string",n.utf8encode(p.name)),v=p.comment,y=a.transformTo("string",u(v)),w=a.transformTo("string",n.utf8encode(v)),k=x.length!==p.name.length,_=w.length!==v.length,j="",S="",z="",N=p.dir,A=p.date,E={crc32:0,compressedSize:0,uncompressedSize:0};(!e||i)&&(E.crc32=t.crc32,E.compressedSize=t.compressedSize,E.uncompressedSize=t.uncompressedSize);var C=0;e&&(C|=8),!b&&(k||_)&&(C|=2048);var T=0,P=0;(N&&(T|=16),"UNIX"===c)?(P=798,T|=d(p.unixPermissions,N)):(P=20,T|=63&(p.dosPermissions||0)),f=(A.getUTCHours()<<6|A.getUTCMinutes())<<5|A.getUTCSeconds()/2,h=(A.getUTCFullYear()-1980<<4|A.getUTCMonth()+1)<<5|A.getUTCDate(),k&&(S=l(1,1)+l(s(g),4)+x,j+="up"+l(S.length,2)+S),_&&(z=l(1,1)+l(s(y),4)+w,j+="uc"+l(z.length,2)+z);var R="";return R+="\n\0",R+=l(C,2),R+=m.magic,R+=l(f,2),R+=l(h,2),R+=l(E.crc32,4),R+=l(E.compressedSize,4),R+=l(E.uncompressedSize,4),R+=l(g.length,2),R+=l(j.length,2),{fileRecord:o.LOCAL_FILE_HEADER+R+g+j,dirRecord:o.CENTRAL_FILE_HEADER+l(P,2)+R+l(y.length,2)+"\0\0\0\0"+l(T,4)+l(r,4)+g+j+y}},u=function(t,e,i,r,n){var s=a.transformTo("string",n(r));return o.CENTRAL_DIRECTORY_END+"\0\0\0\0"+l(t,2)+l(t,2)+l(e,4)+l(i,4)+l(s.length,2)+s},f=function(t){return o.DATA_DESCRIPTOR+l(t.crc32,4)+l(t.compressedSize,4)+l(t.uncompressedSize,4)};function h(t,e,i,a){r.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=e,this.zipPlatform=i,this.encodeFileName=a,this.streamFiles=t,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(h,r),h.prototype.push=function(t){var e=t.meta.percent||0,i=this.entriesCount,a=this._sources.length;this.accumulate?this.contentBuffer.push(t):(this.bytesWritten+=t.data.length,r.prototype.push.call(this,{data:t.data,meta:{currentFile:this.currentFile,percent:i?(e+100*(i-a-1))/i:100}}))},h.prototype.openedSource=function(t){this.currentSourceOffset=this.bytesWritten,this.currentFile=t.file.name;var e=this.streamFiles&&!t.file.dir;if(e){var i=c(t,e,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:i.fileRecord,meta:{percent:0}})}else this.accumulate=!0},h.prototype.closedSource=function(t){this.accumulate=!1;var e=this.streamFiles&&!t.file.dir,i=c(t,e,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(i.dirRecord),e)this.push({data:f(t),meta:{percent:100}});else for(this.push({data:i.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},h.prototype.flush=function(){for(var t=this.bytesWritten,e=0;e<this.dirRecords.length;e++)this.push({data:this.dirRecords[e],meta:{percent:100}});var i=this.bytesWritten-t,a=u(this.dirRecords.length,i,t,this.zipComment,this.encodeFileName);this.push({data:a,meta:{percent:100}})},h.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},h.prototype.registerPrevious=function(t){this._sources.push(t);var e=this;return t.on("data",function(t){e.processChunk(t)}),t.on("end",function(){e.closedSource(e.previous.streamInfo),e._sources.length?e.prepareNextSource():e.end()}),t.on("error",function(t){e.error(t)}),this},h.prototype.resume=function(){return!!r.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},h.prototype.error=function(t){var e=this._sources;if(!r.prototype.error.call(this,t))return!1;for(var i=0;i<e.length;i++)try{e[i].error(t)}catch(t){}return!0},h.prototype.lock=function(){r.prototype.lock.call(this);for(var t=this._sources,e=0;e<t.length;e++)t[e].lock()},e.exports=h},6664,(t,e,i)=>{"use strict";var a=t.r(36462),r=t.r(21908),n=function(t,e){var i=t||e,r=a[i];if(!r)throw Error(i+" is not a valid compression method !");return r};i.generateWorker=function(t,e,i){var a=new r(e.streamFiles,i,e.platform,e.encodeFileName),s=0;try{t.forEach(function(t,i){s++;var r=n(i.options.compression,e.compression),o=i.options.compressionOptions||e.compressionOptions||{},l=i.dir,d=i.date;i._compressWorker(r,o).withStreamInfo("file",{name:t,dir:l,date:d,comment:i.comment||"",unixPermissions:i.unixPermissions,dosPermissions:i.dosPermissions}).pipe(a)}),a.entriesCount=s}catch(t){a.error(t)}return a}},13303,(t,e,i)=>{"use strict";var a=t.r(65464),r=t.r(48913);function n(t,e){r.call(this,"Nodejs stream input adapter for "+t),this._upstreamEnded=!1,this._bindStream(e)}a.inherits(n,r),n.prototype._bindStream=function(t){var e=this;this._stream=t,t.pause(),t.on("data",function(t){e.push({data:t,meta:{percent:0}})}).on("error",function(t){e.isPaused?this.generatedError=t:e.error(t)}).on("end",function(){e.isPaused?e._upstreamEnded=!0:e.end()})},n.prototype.pause=function(){return!!r.prototype.pause.call(this)&&(this._stream.pause(),!0)},n.prototype.resume=function(){return!!r.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},e.exports=n},1223,(t,e,i)=>{"use strict";var a=t.r(46253),r=t.r(65464),n=t.r(48913),s=t.r(846),o=t.r(13133),l=t.r(43220),d=t.r(52929),c=t.r(6664),u=t.r(42527),f=t.r(13303),h=function(t,e,i){var a,s=r.getTypeOf(e),c=r.extend(i||{},o);c.date=c.date||new Date,null!==c.compression&&(c.compression=c.compression.toUpperCase()),"string"==typeof c.unixPermissions&&(c.unixPermissions=parseInt(c.unixPermissions,8)),c.unixPermissions&&16384&c.unixPermissions&&(c.dir=!0),c.dosPermissions&&16&c.dosPermissions&&(c.dir=!0),c.dir&&(t=m(t)),c.createFolders&&(a=p(t))&&b.call(this,a,!0);var h="string"===s&&!1===c.binary&&!1===c.base64;i&&void 0!==i.binary||(c.binary=!h),(e instanceof l&&0===e.uncompressedSize||c.dir||!e||0===e.length)&&(c.base64=!1,c.binary=!0,e="",c.compression="STORE",s="string");var g=null;g=e instanceof l||e instanceof n?e:u.isNode&&u.isStream(e)?new f(t,e):r.prepareContent(t,e,c.binary,c.optimizedBinaryString,c.base64);var x=new d(t,g,c);this.files[t]=x},p=function(t){"/"===t.slice(-1)&&(t=t.substring(0,t.length-1));var e=t.lastIndexOf("/");return e>0?t.substring(0,e):""},m=function(t){return"/"!==t.slice(-1)&&(t+="/"),t},b=function(t,e){return e=void 0!==e?e:o.createFolders,t=m(t),this.files[t]||h.call(this,t,null,{dir:!0,createFolders:e}),this.files[t]};function g(t){return"[object RegExp]"===Object.prototype.toString.call(t)}e.exports={load:function(){throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(t){var e,i,a;for(e in this.files)a=this.files[e],(i=e.slice(this.root.length,e.length))&&e.slice(0,this.root.length)===this.root&&t(i,a)},filter:function(t){var e=[];return this.forEach(function(i,a){t(i,a)&&e.push(a)}),e},file:function(t,e,i){if(1==arguments.length)if(g(t)){var a=t;return this.filter(function(t,e){return!e.dir&&a.test(t)})}else{var r=this.files[this.root+t];return r&&!r.dir?r:null}return t=this.root+t,h.call(this,t,e,i),this},folder:function(t){if(!t)return this;if(g(t))return this.filter(function(e,i){return i.dir&&t.test(e)});var e=this.root+t,i=b.call(this,e),a=this.clone();return a.root=i.name,a},remove:function(t){t=this.root+t;var e=this.files[t];if(e||("/"!==t.slice(-1)&&(t+="/"),e=this.files[t]),e&&!e.dir)delete this.files[t];else for(var i=this.filter(function(e,i){return i.name.slice(0,t.length)===t}),a=0;a<i.length;a++)delete this.files[i[a].name];return this},generate:function(){throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(t){var e,i={};try{if((i=r.extend(t||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=i.type.toLowerCase(),i.compression=i.compression.toUpperCase(),"binarystring"===i.type&&(i.type="string"),!i.type)throw Error("No output type specified.");r.checkSupport(i.type),("darwin"===i.platform||"freebsd"===i.platform||"linux"===i.platform||"sunos"===i.platform)&&(i.platform="UNIX"),"win32"===i.platform&&(i.platform="DOS");var o=i.comment||this.comment||"";e=c.generateWorker(this,i,o)}catch(t){(e=new n("error")).error(t)}return new s(e,i.type||"string",i.mimeType)},generateAsync:function(t,e){return this.generateInternalStream(t).accumulate(e)},generateNodeStream:function(t,e){return(t=t||{}).type||(t.type="nodebuffer"),this.generateInternalStream(t).toNodejsStream(e)}}},37384,(t,e,i)=>{"use strict";var a=t.r(65464);function r(t){this.data=t,this.length=t.length,this.index=0,this.zero=0}r.prototype={checkOffset:function(t){this.checkIndex(this.index+t)},checkIndex:function(t){if(this.length<this.zero+t||t<0)throw Error("End of data reached (data length = "+this.length+", asked index = "+t+"). Corrupted zip ?")},setIndex:function(t){this.checkIndex(t),this.index=t},skip:function(t){this.setIndex(this.index+t)},byteAt:function(){},readInt:function(t){var e,i=0;for(this.checkOffset(t),e=this.index+t-1;e>=this.index;e--)i=(i<<8)+this.byteAt(e);return this.index+=t,i},readString:function(t){return a.transformTo("string",this.readData(t))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var t=this.readInt(4);return new Date(Date.UTC((t>>25&127)+1980,(t>>21&15)-1,t>>16&31,t>>11&31,t>>5&63,(31&t)<<1))}},e.exports=r},12189,(t,e,i)=>{"use strict";var a=t.r(37384);function r(t){a.call(this,t);for(var e=0;e<this.data.length;e++)t[e]=255&t[e]}t.r(65464).inherits(r,a),r.prototype.byteAt=function(t){return this.data[this.zero+t]},r.prototype.lastIndexOfSignature=function(t){for(var e=t.charCodeAt(0),i=t.charCodeAt(1),a=t.charCodeAt(2),r=t.charCodeAt(3),n=this.length-4;n>=0;--n)if(this.data[n]===e&&this.data[n+1]===i&&this.data[n+2]===a&&this.data[n+3]===r)return n-this.zero;return -1},r.prototype.readAndCheckSignature=function(t){var e=t.charCodeAt(0),i=t.charCodeAt(1),a=t.charCodeAt(2),r=t.charCodeAt(3),n=this.readData(4);return e===n[0]&&i===n[1]&&a===n[2]&&r===n[3]},r.prototype.readData=function(t){if(this.checkOffset(t),0===t)return[];var e=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=r},41370,(t,e,i)=>{"use strict";var a=t.r(37384);function r(t){a.call(this,t)}t.r(65464).inherits(r,a),r.prototype.byteAt=function(t){return this.data.charCodeAt(this.zero+t)},r.prototype.lastIndexOfSignature=function(t){return this.data.lastIndexOf(t)-this.zero},r.prototype.readAndCheckSignature=function(t){return t===this.readData(4)},r.prototype.readData=function(t){this.checkOffset(t);var e=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=r},15841,(t,e,i)=>{"use strict";var a=t.r(12189);function r(t){a.call(this,t)}t.r(65464).inherits(r,a),r.prototype.readData=function(t){if(this.checkOffset(t),0===t)return new Uint8Array(0);var e=this.data.subarray(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=r},44429,(t,e,i)=>{"use strict";var a=t.r(15841);function r(t){a.call(this,t)}t.r(65464).inherits(r,a),r.prototype.readData=function(t){this.checkOffset(t);var e=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,e},e.exports=r},71770,(t,e,i)=>{"use strict";var a=t.r(65464),r=t.r(87780),n=t.r(12189),s=t.r(41370),o=t.r(44429),l=t.r(15841);e.exports=function(t){var e=a.getTypeOf(t);return(a.checkSupport(e),"string"!==e||r.uint8array)?"nodebuffer"===e?new o(t):r.uint8array?new l(a.transformTo("uint8array",t)):new n(a.transformTo("array",t)):new s(t)}},92861,(t,e,i)=>{"use strict";var a=t.r(71770),r=t.r(65464),n=t.r(43220),s=t.r(63494),o=t.r(46253),l=t.r(36462),d=t.r(87780),c=function(t){for(var e in l)if(Object.prototype.hasOwnProperty.call(l,e)&&l[e].magic===t)return l[e];return null};function u(t,e){this.options=t,this.loadOptions=e}u.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(t){var e,i;if(t.skip(22),this.fileNameLength=t.readInt(2),i=t.readInt(2),this.fileName=t.readData(this.fileNameLength),t.skip(i),-1===this.compressedSize||-1===this.uncompressedSize)throw Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(e=c(this.compressionMethod)))throw Error("Corrupted zip : compression "+r.pretty(this.compressionMethod)+" unknown (inner file : "+r.transformTo("string",this.fileName)+")");this.decompressed=new n(this.compressedSize,this.uncompressedSize,this.crc32,e,t.readData(this.compressedSize))},readCentralPart:function(t){this.versionMadeBy=t.readInt(2),t.skip(2),this.bitFlag=t.readInt(2),this.compressionMethod=t.readString(2),this.date=t.readDate(),this.crc32=t.readInt(4),this.compressedSize=t.readInt(4),this.uncompressedSize=t.readInt(4);var e=t.readInt(2);if(this.extraFieldsLength=t.readInt(2),this.fileCommentLength=t.readInt(2),this.diskNumberStart=t.readInt(2),this.internalFileAttributes=t.readInt(2),this.externalFileAttributes=t.readInt(4),this.localHeaderOffset=t.readInt(4),this.isEncrypted())throw Error("Encrypted zip are not supported");t.skip(e),this.readExtraFields(t),this.parseZIP64ExtraField(t),this.fileComment=t.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var t=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0===t&&(this.dosPermissions=63&this.externalFileAttributes),3===t&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var t=a(this.extraFields[1].value);this.uncompressedSize===r.MAX_VALUE_32BITS&&(this.uncompressedSize=t.readInt(8)),this.compressedSize===r.MAX_VALUE_32BITS&&(this.compressedSize=t.readInt(8)),this.localHeaderOffset===r.MAX_VALUE_32BITS&&(this.localHeaderOffset=t.readInt(8)),this.diskNumberStart===r.MAX_VALUE_32BITS&&(this.diskNumberStart=t.readInt(4))}},readExtraFields:function(t){var e,i,a,r=t.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});t.index+4<r;)e=t.readInt(2),i=t.readInt(2),a=t.readData(i),this.extraFields[e]={id:e,length:i,value:a};t.setIndex(r)},handleUTF8:function(){var t=d.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=o.utf8decode(this.fileName),this.fileCommentStr=o.utf8decode(this.fileComment);else{var e=this.findExtraFieldUnicodePath();if(null!==e)this.fileNameStr=e;else{var i=r.transformTo(t,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(i)}var a=this.findExtraFieldUnicodeComment();if(null!==a)this.fileCommentStr=a;else{var n=r.transformTo(t,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(n)}}},findExtraFieldUnicodePath:function(){var t=this.extraFields[28789];if(t){var e=a(t.value);return 1!==e.readInt(1)||s(this.fileName)!==e.readInt(4)?null:o.utf8decode(e.readData(t.length-5))}return null},findExtraFieldUnicodeComment:function(){var t=this.extraFields[25461];if(t){var e=a(t.value);return 1!==e.readInt(1)||s(this.fileComment)!==e.readInt(4)?null:o.utf8decode(e.readData(t.length-5))}return null}},e.exports=u},12938,(t,e,i)=>{"use strict";var a=t.r(71770),r=t.r(65464),n=t.r(71471),s=t.r(92861),o=t.r(87780);function l(t){this.files=[],this.loadOptions=t}l.prototype={checkSignature:function(t){if(!this.reader.readAndCheckSignature(t)){this.reader.index-=4;var e=this.reader.readString(4);throw Error("Corrupted zip or bug: unexpected signature ("+r.pretty(e)+", expected "+r.pretty(t)+")")}},isSignature:function(t,e){var i=this.reader.index;this.reader.setIndex(t);var a=this.reader.readString(4);return this.reader.setIndex(i),a===e},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var t=this.reader.readData(this.zipCommentLength),e=o.uint8array?"uint8array":"array",i=r.transformTo(e,t);this.zipComment=this.loadOptions.decodeFileName(i)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var t,e,i,a=this.zip64EndOfCentralSize-44;0<a;)t=this.reader.readInt(2),e=this.reader.readInt(4),i=this.reader.readData(e),this.zip64ExtensibleData[t]={id:t,length:e,value:i}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount>1)throw Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var t,e;for(t=0;t<this.files.length;t++)e=this.files[t],this.reader.setIndex(e.localHeaderOffset),this.checkSignature(n.LOCAL_FILE_HEADER),e.readLocalPart(this.reader),e.handleUTF8(),e.processAttributes()},readCentralDir:function(){var t;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(n.CENTRAL_FILE_HEADER);)(t=new s({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(t);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var t=this.reader.lastIndexOfSignature(n.CENTRAL_DIRECTORY_END);if(t<0){if(!this.isSignature(0,n.LOCAL_FILE_HEADER))throw Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");throw Error("Corrupted zip: can't find end of central directory")}this.reader.setIndex(t);var e=t;if(this.checkSignature(n.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===r.MAX_VALUE_16BITS||this.diskWithCentralDirStart===r.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===r.MAX_VALUE_16BITS||this.centralDirRecords===r.MAX_VALUE_16BITS||this.centralDirSize===r.MAX_VALUE_32BITS||this.centralDirOffset===r.MAX_VALUE_32BITS){if(this.zip64=!0,(t=this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(t),this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,n.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var i=this.centralDirOffset+this.centralDirSize;this.zip64&&(i+=20,i+=12+this.zip64EndOfCentralSize);var a=e-i;if(a>0)this.isSignature(e,n.CENTRAL_FILE_HEADER)||(this.reader.zero=a);else if(a<0)throw Error("Corrupted zip: missing "+Math.abs(a)+" bytes.")},prepareReader:function(t){this.reader=a(t)},load:function(t){this.prepareReader(t),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},e.exports=l},37153,(t,e,i)=>{"use strict";var a=t.r(65464),r=t.r(24375),n=t.r(46253),s=t.r(12938),o=t.r(1648),l=t.r(42527);e.exports=function(t,e){var i=this;return(e=a.extend(e||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:n.utf8decode}),l.isNode&&l.isStream(t))?r.Promise.reject(Error("JSZip can't accept a stream when loading a zip file.")):a.prepareContent("the loaded zip file",t,!0,e.optimizedBinaryString,e.base64).then(function(t){var i=new s(e);return i.load(t),i}).then(function(t){var i=[r.Promise.resolve(t)],a=t.files;if(e.checkCRC32)for(var n=0;n<a.length;n++)i.push(function(t){return new r.Promise(function(e,i){var a=t.decompressed.getContentWorker().pipe(new o);a.on("error",function(t){i(t)}).on("end",function(){a.streamInfo.crc32!==t.decompressed.crc32?i(Error("Corrupted zip : CRC32 mismatch")):e()}).resume()})}(a[n]));return r.Promise.all(i)}).then(function(t){for(var r=t.shift(),n=r.files,s=0;s<n.length;s++){var o=n[s],l=o.fileNameStr,d=a.resolve(o.fileNameStr);i.file(d,o.decompressed,{binary:!0,optimizedBinaryString:!0,date:o.date,dir:o.dir,comment:o.fileCommentStr.length?o.fileCommentStr:null,unixPermissions:o.unixPermissions,dosPermissions:o.dosPermissions,createFolders:e.createFolders}),o.dir||(i.file(d).unsafeOriginalName=l)}return r.zipComment.length&&(i.comment=r.zipComment),i})}},71315,(t,e,i)=>{"use strict";function a(){if(!(this instanceof a))return new a;if(arguments.length)throw Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var t=new a;for(var e in this)"function"!=typeof this[e]&&(t[e]=this[e]);return t}}a.prototype=t.r(1223),a.prototype.loadAsync=t.r(37153),a.support=t.r(87780),a.defaults=t.r(13133),a.version="3.10.1",a.loadAsync=function(t,e){return new a().loadAsync(t,e)},a.external=t.r(24375),e.exports=a},52683,t=>{"use strict";let e,i,a,r;var n,s=t.i(43476),o=t.i(37902),l=t.i(71645);let d=(...t)=>t.filter((t,e,i)=>!!t&&""!==t.trim()&&i.indexOf(t)===e).join(" ").trim(),c=t=>{let e=t.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,e,i)=>i?i.toUpperCase():e.toLowerCase());return e.charAt(0).toUpperCase()+e.slice(1)};var u={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let f=(0,l.forwardRef)(({color:t="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:r="",children:n,iconNode:s,...o},c)=>(0,l.createElement)("svg",{ref:c,...u,width:e,height:e,stroke:t,strokeWidth:a?24*Number(i)/Number(e):i,className:d("lucide",r),...!n&&!(t=>{for(let e in t)if(e.startsWith("aria-")||"role"===e||"title"===e)return!0;return!1})(o)&&{"aria-hidden":"true"},...o},[...s.map(([t,e])=>(0,l.createElement)(t,e)),...Array.isArray(n)?n:[n]])),h=(t,e)=>{let i=(0,l.forwardRef)(({className:i,...a},r)=>(0,l.createElement)(f,{ref:r,iconNode:e,className:d(`lucide-${c(t).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${t}`,i),...a}));return i.displayName=c(t),i},p=h("panels-top-left",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]),m=h("video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]),b=h("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]),g=h("image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]),x=h("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]),v=h("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),y=h("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),w=h("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),k=h("film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]),_=h("settings",[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),j=h("ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]),S=h("save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]),z=h("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]),N=h("pause",[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]),A=h("fast-forward",[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z",key:"b19h5q"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z",key:"h7h5ge"}]]),E=h("rewind",[["path",{d:"M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z",key:"2a1g8i"}],["path",{d:"M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z",key:"rg3s36"}]]),C=h("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),T=h("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),P=h("history",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]),R=h("grid-3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]),O=h("maximize-2",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]),M=h("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]),I=h("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]),D=h("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),L=h("heart",[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]),B=h("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),F=h("message-square",[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]),U=h("info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),V=h("pen-line",[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]),$=h("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]),W=h("upload",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]),H=h("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),q=h("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),G=h("folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]),Z=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Y=new Set(Z),X=(t,e,i)=>i>e?e:i<t?t:i,K={test:t=>"number"==typeof t,parse:parseFloat,transform:t=>t},J={...K,transform:t=>X(0,1,t)},Q={...K,default:1},tt=t=>Math.round(1e5*t)/1e5,te=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,ti=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ta=(t,e)=>i=>!!("string"==typeof i&&ti.test(i)&&i.startsWith(t)||e&&null!=i&&Object.prototype.hasOwnProperty.call(i,e)),tr=(t,e,i)=>a=>{if("string"!=typeof a)return a;let[r,n,s,o]=a.match(te);return{[t]:parseFloat(r),[e]:parseFloat(n),[i]:parseFloat(s),alpha:void 0!==o?parseFloat(o):1}},tn={...K,transform:t=>Math.round(X(0,255,t))},ts={test:ta("rgb","red"),parse:tr("red","green","blue"),transform:({red:t,green:e,blue:i,alpha:a=1})=>"rgba("+tn.transform(t)+", "+tn.transform(e)+", "+tn.transform(i)+", "+tt(J.transform(a))+")"},to={test:ta("#"),parse:function(t){let e="",i="",a="",r="";return t.length>5?(e=t.substring(1,3),i=t.substring(3,5),a=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),i=t.substring(2,3),a=t.substring(3,4),r=t.substring(4,5),e+=e,i+=i,a+=a,r+=r),{red:parseInt(e,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:r?parseInt(r,16)/255:1}},transform:ts.transform},tl=t=>({test:e=>"string"==typeof e&&e.endsWith(t)&&1===e.split(" ").length,parse:parseFloat,transform:e=>`${e}${t}`}),td=tl("deg"),tc=tl("%"),tu=tl("px"),tf=tl("vh"),th=tl("vw"),tp={...tc,parse:t=>tc.parse(t)/100,transform:t=>tc.transform(100*t)},tm={test:ta("hsl","hue"),parse:tr("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:i,alpha:a=1})=>"hsla("+Math.round(t)+", "+tc.transform(tt(e))+", "+tc.transform(tt(i))+", "+tt(J.transform(a))+")"},tb={test:t=>ts.test(t)||to.test(t)||tm.test(t),parse:t=>ts.test(t)?ts.parse(t):tm.test(t)?tm.parse(t):to.parse(t),transform:t=>"string"==typeof t?t:t.hasOwnProperty("red")?ts.transform(t):tm.transform(t),getAnimatableNone:t=>{let e=tb.parse(t);return e.alpha=0,tb.transform(e)}},tg=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,tx="number",tv="color",ty=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function tw(t){let e=t.toString(),i=[],a={color:[],number:[],var:[]},r=[],n=0,s=e.replace(ty,t=>(tb.test(t)?(a.color.push(n),r.push(tv),i.push(tb.parse(t))):t.startsWith("var(")?(a.var.push(n),r.push("var"),i.push(t)):(a.number.push(n),r.push(tx),i.push(parseFloat(t))),++n,"${}")).split("${}");return{values:i,split:s,indexes:a,types:r}}function tk(t){return tw(t).values}function t_(t){let{split:e,types:i}=tw(t),a=e.length;return t=>{let r="";for(let n=0;n<a;n++)if(r+=e[n],void 0!==t[n]){let e=i[n];e===tx?r+=tt(t[n]):e===tv?r+=tb.transform(t[n]):r+=t[n]}return r}}let tj=t=>"number"==typeof t?0:tb.test(t)?tb.getAnimatableNone(t):t,tS={test:function(t){return isNaN(t)&&"string"==typeof t&&(t.match(te)?.length||0)+(t.match(tg)?.length||0)>0},parse:tk,createTransformer:t_,getAnimatableNone:function(t){let e=tk(t);return t_(t)(e.map(tj))}},tz=new Set(["brightness","contrast","saturate","opacity"]);function tN(t){let[e,i]=t.slice(0,-1).split("(");if("drop-shadow"===e)return t;let[a]=i.match(te)||[];if(!a)return t;let r=i.replace(a,""),n=+!!tz.has(e);return a!==i&&(n*=100),e+"("+n+r+")"}let tA=/\b([a-z-]*)\(.*?\)/gu,tE={...tS,getAnimatableNone:t=>{let e=t.match(tA);return e?e.map(tN).join(" "):t}},tC={...K,transform:Math.round},tT={borderWidth:tu,borderTopWidth:tu,borderRightWidth:tu,borderBottomWidth:tu,borderLeftWidth:tu,borderRadius:tu,borderTopLeftRadius:tu,borderTopRightRadius:tu,borderBottomRightRadius:tu,borderBottomLeftRadius:tu,width:tu,maxWidth:tu,height:tu,maxHeight:tu,top:tu,right:tu,bottom:tu,left:tu,inset:tu,insetBlock:tu,insetBlockStart:tu,insetBlockEnd:tu,insetInline:tu,insetInlineStart:tu,insetInlineEnd:tu,padding:tu,paddingTop:tu,paddingRight:tu,paddingBottom:tu,paddingLeft:tu,paddingBlock:tu,paddingBlockStart:tu,paddingBlockEnd:tu,paddingInline:tu,paddingInlineStart:tu,paddingInlineEnd:tu,margin:tu,marginTop:tu,marginRight:tu,marginBottom:tu,marginLeft:tu,marginBlock:tu,marginBlockStart:tu,marginBlockEnd:tu,marginInline:tu,marginInlineStart:tu,marginInlineEnd:tu,fontSize:tu,backgroundPositionX:tu,backgroundPositionY:tu,rotate:td,rotateX:td,rotateY:td,rotateZ:td,scale:Q,scaleX:Q,scaleY:Q,scaleZ:Q,skew:td,skewX:td,skewY:td,distance:tu,translateX:tu,translateY:tu,translateZ:tu,x:tu,y:tu,z:tu,perspective:tu,transformPerspective:tu,opacity:J,originX:tp,originY:tp,originZ:tu,zIndex:tC,fillOpacity:J,strokeOpacity:J,numOctaves:tC},tP={...tT,color:tb,backgroundColor:tb,outlineColor:tb,fill:tb,stroke:tb,borderColor:tb,borderTopColor:tb,borderRightColor:tb,borderBottomColor:tb,borderLeftColor:tb,filter:tE,WebkitFilter:tE},tR=t=>tP[t],tO=()=>({translate:0,scale:1,origin:0,originPoint:0}),tM=()=>({x:tO(),y:tO()}),tI=()=>({min:0,max:0}),tD=()=>({x:tI(),y:tI()}),tL=t=>!!(t&&t.getVelocity),tB=new Set(["width","height","top","left","right","bottom",...Z]),tF=t=>e=>e.test(t),tU=[K,tu,tc,td,th,tf,{test:t=>"auto"===t,parse:t=>t}],tV=t=>tU.find(tF(t));var t$=t.i(47167);let tW=()=>{},tH=()=>{};t$.default;let tq=t=>e=>"string"==typeof e&&e.startsWith(t),tG=tq("--"),tZ=tq("var(--"),tY=t=>!!tZ(t)&&tX.test(t.split("/*")[0].trim()),tX=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function tK(t){return"string"==typeof t&&t.split("/*")[0].includes("var(--")}let tJ=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,tQ=t=>180*t/Math.PI,t0=t=>t2(tQ(Math.atan2(t[1],t[0]))),t1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:t0,rotateZ:t0,skewX:t=>tQ(Math.atan(t[1])),skewY:t=>tQ(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},t2=t=>((t%=360)<0&&(t+=360),t),t4=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),t3=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),t5={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:t4,scaleY:t3,scale:t=>(t4(t)+t3(t))/2,rotateX:t=>t2(tQ(Math.atan2(t[6],t[5]))),rotateY:t=>t2(tQ(Math.atan2(-t[2],t[0]))),rotateZ:t0,rotate:t0,skewX:t=>tQ(Math.atan(t[4])),skewY:t=>tQ(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function t8(t){return+!!t.includes("scale")}function t6(t,e){let i,a;if(!t||"none"===t)return t8(e);let r=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);if(r)i=t5,a=r;else{let e=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=t1,a=e}if(!a)return t8(e);let n=i[e],s=a[1].split(",").map(t9);return"function"==typeof n?n(s):s[n]}function t9(t){return parseFloat(t.trim())}let t7=t=>t===K||t===tu,et=new Set(["x","y","z"]),ee=Z.filter(t=>!et.has(t)),ei={width:({x:t},{paddingLeft:e="0",paddingRight:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),height:({y:t},{paddingTop:e="0",paddingBottom:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>t6(e,"x"),y:(t,{transform:e})=>t6(e,"y")};ei.translateX=ei.x,ei.translateY=ei.y;let ea=t=>t,er={},en=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function es(t,e){let i=!1,a=!0,r={delta:0,timestamp:0,isProcessing:!1},n=()=>i=!0,s=en.reduce((t,i)=>(t[i]=function(t,e){let i=new Set,a=new Set,r=!1,n=!1,s=new WeakSet,o={delta:0,timestamp:0,isProcessing:!1},l=0;function d(e){s.has(e)&&(c.schedule(e),t()),l++,e(o)}let c={schedule:(t,e=!1,n=!1)=>{let o=n&&r?i:a;return e&&s.add(t),o.has(t)||o.add(t),t},cancel:t=>{a.delete(t),s.delete(t)},process:t=>{if(o=t,r){n=!0;return}r=!0,[i,a]=[a,i],i.forEach(d),e,l=0,i.clear(),r=!1,n&&(n=!1,c.process(t))}};return c}(n,e?i:void 0),t),{}),{setup:o,read:l,resolveKeyframes:d,preUpdate:c,update:u,preRender:f,render:h,postRender:p}=s,m=()=>{let n=er.useManualTiming?r.timestamp:performance.now();i=!1,er.useManualTiming||(r.delta=a?1e3/60:Math.max(Math.min(n-r.timestamp,40),1)),r.timestamp=n,r.isProcessing=!0,o.process(r),l.process(r),d.process(r),c.process(r),u.process(r),f.process(r),h.process(r),p.process(r),r.isProcessing=!1,i&&e&&(a=!1,t(m))};return{schedule:en.reduce((e,n)=>{let o=s[n];return e[n]=(e,n=!1,s=!1)=>(!i&&(i=!0,a=!0,r.isProcessing||t(m)),o.schedule(e,n,s)),e},{}),cancel:t=>{for(let e=0;e<en.length;e++)s[en[e]].cancel(t)},state:r,steps:s}}let{schedule:eo,cancel:el,state:ed,steps:ec}=es("u">typeof requestAnimationFrame?requestAnimationFrame:ea,!0),eu=new Set,ef=!1,eh=!1,ep=!1;function em(){if(eh){let t=Array.from(eu).filter(t=>t.needsMeasurement),e=new Set(t.map(t=>t.element)),i=new Map;e.forEach(t=>{let e,a=(e=[],ee.forEach(i=>{let a=t.getValue(i);void 0!==a&&(e.push([i,a.get()]),a.set(+!!i.startsWith("scale")))}),e);a.length&&(i.set(t,a),t.render())}),t.forEach(t=>t.measureInitialState()),e.forEach(t=>{t.render();let e=i.get(t);e&&e.forEach(([e,i])=>{t.getValue(e)?.set(i)})}),t.forEach(t=>t.measureEndState()),t.forEach(t=>{void 0!==t.suspendedScrollY&&window.scrollTo(0,t.suspendedScrollY)})}eh=!1,ef=!1,eu.forEach(t=>t.complete(ep)),eu.clear()}function eb(){eu.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(eh=!0)})}class eg{constructor(t,e,i,a,r,n=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=e,this.name=i,this.motionValue=a,this.element=r,this.isAsync=n}scheduleResolve(){this.state="scheduled",this.isAsync?(eu.add(this),ef||(ef=!0,eo.read(eb),eo.resolveKeyframes(em))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:t,name:e,element:i,motionValue:a}=this;if(null===t[0]){let r=a?.get(),n=t[t.length-1];if(void 0!==r)t[0]=r;else if(i&&e){let a=i.readValue(e,n);null!=a&&(t[0]=a)}void 0===t[0]&&(t[0]=n),a&&void 0===r&&a.set(t[0])}for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),eu.delete(this)}cancel(){"scheduled"===this.state&&(eu.delete(this),this.state="pending")}resume(){"pending"===this.state&&this.scheduleResolve()}}function ex(t,e){let i=tR(t);return i!==tE&&(i=tS),i.getAnimatableNone?i.getAnimatableNone(e):void 0}let ev=new Set(["auto","none","0"]);class ey extends eg{constructor(t,e,i,a,r){super(t,e,i,a,r,!0)}readKeyframes(){let{unresolvedKeyframes:t,element:e,name:i}=this;if(!e||!e.current)return;super.readKeyframes();for(let i=0;i<t.length;i++){let a=t[i];if("string"==typeof a&&tY(a=a.trim())){let r=function t(e,i,a=1){tH(a<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,"max-css-var-depth");let[r,n]=function(t){let e=tJ.exec(t);if(!e)return[,];let[,i,a,r]=e;return[`--${i??a}`,r]}(e);if(!r)return;let s=window.getComputedStyle(i).getPropertyValue(r);if(s){let t=s.trim();return/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)?parseFloat(t):t}return tY(n)?t(n,i,a+1):n}(a,e.current);void 0!==r&&(t[i]=r),i===t.length-1&&(this.finalKeyframe=a)}}if(this.resolveNoneKeyframes(),!tB.has(i)||2!==t.length)return;let[a,r]=t,n=tV(a),s=tV(r);if(tK(a)!==tK(r)&&ei[i]){this.needsMeasurement=!0;return}if(n!==s)if(t7(n)&&t7(s))for(let e=0;e<t.length;e++){let i=t[e];"string"==typeof i&&(t[e]=parseFloat(i))}else ei[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:t,name:e}=this,i=[];for(let e=0;e<t.length;e++)(null===t[e]||function(t){if("number"==typeof t)return 0===t;if(null===t)return!0;return"none"===t||"0"===t||/^0[^.\s]+$/u.test(t)}(t[e]))&&i.push(e);i.length&&function(t,e,i){let a,r=0;for(;r<t.length&&!a;){let e=t[r];"string"==typeof e&&!ev.has(e)&&tw(e).values.length&&(a=t[r]),r++}if(a&&i)for(let r of e)t[r]=ex(i,a)}(t,i,e)}measureInitialState(){let{element:t,unresolvedKeyframes:e,name:i}=this;if(!t||!t.current)return;"height"===i&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ei[i](t.measureViewportBox(),window.getComputedStyle(t.current)),e[0]=this.measuredOrigin;let a=e[e.length-1];void 0!==a&&t.getValue(i,a).jump(a,!1)}measureEndState(){let{element:t,name:e,unresolvedKeyframes:i}=this;if(!t||!t.current)return;let a=t.getValue(e);a&&a.jump(this.measuredOrigin,!1);let r=i.length-1,n=i[r];i[r]=ei[e](t.measureViewportBox(),window.getComputedStyle(t.current)),null!==n&&void 0===this.finalKeyframe&&(this.finalKeyframe=n),this.removedTransforms?.length&&this.removedTransforms.forEach(([e,i])=>{t.getValue(e).set(i)}),this.resolveNoneKeyframes()}}function ew(t,e){-1===t.indexOf(e)&&t.push(e)}function ek(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}class e_{constructor(){this.subscriptions=[]}add(t){return ew(this.subscriptions,t),()=>ek(this.subscriptions,t)}notify(t,e,i){let a=this.subscriptions.length;if(a)if(1===a)this.subscriptions[0](t,e,i);else for(let r=0;r<a;r++){let a=this.subscriptions[r];a&&a(t,e,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}let{schedule:ej}=es(queueMicrotask,!1);function eS(){e=void 0}let ez={now:()=>(void 0===e&&ez.set(ed.isProcessing||er.useManualTiming?ed.timestamp:performance.now()),e),set:t=>{e=t,queueMicrotask(eS)}};class eN{constructor(t,e={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=t=>{let e=ez.now();if(this.updatedAt!==e&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(t),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let t of this.dependents)t.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=e.owner}setCurrent(t){this.current=t,this.updatedAt=ez.now(),null===this.canTrackVelocity&&void 0!==t&&(this.canTrackVelocity=!isNaN(parseFloat(this.current)))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,e){this.events[t]||(this.events[t]=new e_);let i=this.events[t].add(e);return"change"===t?()=>{i(),eo.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(let t in this.events)this.events[t].clear()}attach(t,e){this.passiveEffect=t,this.stopPassiveEffect=e}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,e,i){this.set(e),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-i}jump(t,e=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,e&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return r&&r.push(this),this.current}getPrevious(){return this.prev}getVelocity(){var t;let e=ez.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;let i=Math.min(this.updatedAt-this.prevUpdatedAt,30);return t=parseFloat(this.current)-parseFloat(this.prevFrameValue),i?1e3/i*t:0}start(t){return this.stop(),new Promise(e=>{this.hasAnimated=!0,this.animation=t(e),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function eA(t,e){return new eN(t,e)}let eE=[...tU,tb,tS],eC={current:null},eT={current:!1},eP="u">typeof window,eR=new WeakMap;function eO(t){return null!==t&&"object"==typeof t&&"function"==typeof t.start}function eM(t){return"string"==typeof t||Array.isArray(t)}let eI=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],eD=["initial",...eI];function eL(t){return eO(t.animate)||eD.some(e=>eM(t[e]))}function eB(t){return!!(eL(t)||t.variants)}function eF(t){let e=[{},{}];return t?.values.forEach((t,i)=>{e[0][i]=t.get(),e[1][i]=t.getVelocity()}),e}function eU(t,e,i,a){if("function"==typeof e){let[r,n]=eF(a);e=e(void 0!==i?i:t.custom,r,n)}if("string"==typeof e&&(e=t.variants&&t.variants[e]),"function"==typeof e){let[r,n]=eF(a);e=e(void 0!==i?i:t.custom,r,n)}return e}let eV=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],e$={};class eW{scrapeMotionValuesFromProps(t,e,i){return{}}constructor({parent:t,props:e,presenceContext:i,reducedMotionConfig:a,skipAnimations:r,blockInitialAnimation:n,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=eg,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let t=ez.now();this.renderScheduledAt<t&&(this.renderScheduledAt=t,eo.render(this.render,!1,!0))};const{latestValues:l,renderState:d}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=e.initial?{...l}:{},this.renderState=d,this.parent=t,this.props=e,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=a,this.skipAnimationsConfig=r,this.options=o,this.blockInitialAnimation=!!n,this.isControllingVariants=eL(e),this.isVariantNode=eB(e),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(e,{},this);for(const t in u){const e=u[t];void 0!==l[t]&&tL(e)&&e.set(l[t])}}mount(t){this.current=t,eR.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,e)=>this.bindToMotionValue(e,t)),"never"===this.reducedMotionConfig?this.shouldReduceMotion=!1:"always"===this.reducedMotionConfig?this.shouldReduceMotion=!0:(eT.current||function(){if(eT.current=!0,eP)if(window.matchMedia){let t=window.matchMedia("(prefers-reduced-motion)"),e=()=>eC.current=t.matches;t.addEventListener("change",e),e()}else eC.current=!1}(),this.shouldReduceMotion=eC.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){for(let t in this.projection&&this.projection.unmount(),el(this.notifyUpdate),el(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this),this.events)this.events[t].clear();for(let t in this.features){let e=this.features[t];e&&(e.unmount(),e.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,e){let i;this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();let a=Y.has(t);a&&this.onBindTransform&&this.onBindTransform();let r=e.on("change",e=>{this.latestValues[t]=e,this.props.onUpdate&&eo.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});"u">typeof window&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,t,e)),this.valueSubscriptions.set(t,()=>{r(),i&&i(),e.owner&&e.stop()})}sortNodePosition(t){return this.current&&this.sortInstanceNodePosition&&this.type===t.type?this.sortInstanceNodePosition(this.current,t.current):0}updateFeatures(){let t="animation";for(t in e$){let e=e$[t];if(!e)continue;let{isEnabled:i,Feature:a}=e;if(!this.features[t]&&a&&i(this.props)&&(this.features[t]=new a(this)),this.features[t]){let e=this.features[t];e.isMounted?e.update():(e.mount(),e.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):tD()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,e){this.latestValues[t]=e}update(t,e){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=e;for(let e=0;e<eV.length;e++){let i=eV[e];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);let a=t["on"+i];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=function(t,e,i){for(let a in e){let r=e[a],n=i[a];if(tL(r))t.addValue(a,r);else if(tL(n))t.addValue(a,eA(r,{owner:t}));else if(n!==r)if(t.hasValue(a)){let e=t.getValue(a);!0===e.liveStyle?e.jump(r):e.hasAnimated||e.set(r)}else{let e=t.getStaticValue(a);t.addValue(a,eA(void 0!==e?e:r,{owner:t}))}}for(let a in i)void 0===e[a]&&t.removeValue(a);return e}(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){let e=this.getClosestVariantNode();if(e)return e.variantChildren&&e.variantChildren.add(t),()=>e.variantChildren.delete(t)}addValue(t,e){let i=this.values.get(t);e!==i&&(i&&this.removeValue(t),this.bindToMotionValue(t,e),this.values.set(t,e),this.latestValues[t]=e.get())}removeValue(t){this.values.delete(t);let e=this.valueSubscriptions.get(t);e&&(e(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,e){if(this.props.values&&this.props.values[t])return this.props.values[t];let i=this.values.get(t);return void 0===i&&void 0!==e&&(i=eA(null===e?void 0:e,{owner:this}),this.addValue(t,i)),i}readValue(t,e){let i=void 0===this.latestValues[t]&&this.current?this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options):this.latestValues[t];if(null!=i){let a,r;if("string"==typeof i&&(a=i,/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a)||(r=i,/^0[^.\s]+$/u.test(r))))i=parseFloat(i);else{let a;a=i,!eE.find(tF(a))&&tS.test(e)&&(i=ex(t,e))}this.setBaseTarget(t,tL(i)?i.get():i)}return tL(i)?i.get():i}setBaseTarget(t,e){this.baseTarget[t]=e}getBaseTarget(t){let e,{initial:i}=this.props;if("string"==typeof i||"object"==typeof i){let a=eU(this.props,i,this.presenceContext?.custom);a&&(e=a[t])}if(i&&void 0!==e)return e;let a=this.getBaseTargetFromProps(this.props,t);return void 0===a||tL(a)?void 0!==this.initialValues[t]&&void 0===e?void 0:this.baseTarget[t]:a}on(t,e){return this.events[t]||(this.events[t]=new e_),this.events[t].add(e)}notify(t,...e){this.events[t]&&this.events[t].notify(...e)}scheduleRenderMicrotask(){ej.render(this.render)}}class eH extends eW{constructor(){super(...arguments),this.KeyframeResolver=ey}sortInstanceNodePosition(t,e){return 2&t.compareDocumentPosition(e)?1:-1}getBaseTargetFromProps(t,e){let i=t.style;return i?i[e]:void 0}removeValueFromRenderState(t,{vars:e,style:i}){delete e[t],delete i[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:t}=this.props;tL(t)&&(this.childSubscription=t.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function eq(t){return t.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}let eG=(t,e)=>e&&"number"==typeof t?e.transform(t):t,eZ={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},eY=Z.length;function eX(t,e,i){let{style:a,vars:r,transformOrigin:n}=t,s=!1,o=!1;for(let t in e){let i=e[t];if(Y.has(t)){s=!0;continue}if(tG(t)){r[t]=i;continue}{let e=eG(i,tT[t]);t.startsWith("origin")?(o=!0,n[t]=e):a[t]=e}}if(!e.transform&&(s||i?a.transform=function(t,e,i){let a="",r=!0;for(let n=0;n<eY;n++){let s=Z[n],o=t[s];if(void 0===o)continue;let l=!0;if("number"==typeof o)l=o===+!!s.startsWith("scale");else{let t=parseFloat(o);l=s.startsWith("scale")?1===t:0===t}if(!l||i){let t=eG(o,tT[s]);if(!l){r=!1;let e=eZ[s]||s;a+=`${e}(${t}) `}i&&(e[s]=t)}}return a=a.trim(),i?a=i(e,r?"":a):r&&(a="none"),a}(e,t.transform,i):a.transform&&(a.transform="none")),o){let{originX:t="50%",originY:e="50%",originZ:i=0}=n;a.transformOrigin=`${t} ${e} ${i}`}}let eK={offset:"stroke-dashoffset",array:"stroke-dasharray"},eJ={offset:"strokeDashoffset",array:"strokeDasharray"},eQ=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function e0(t,{attrX:e,attrY:i,attrScale:a,pathLength:r,pathSpacing:n=1,pathOffset:s=0,...o},l,d,c){if(eX(t,o,d),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};let{attrs:u,style:f}=t;for(let t of(u.transform&&(f.transform=u.transform,delete u.transform),(f.transform||u.transformOrigin)&&(f.transformOrigin=u.transformOrigin??"50% 50%",delete u.transformOrigin),f.transform&&(f.transformBox=c?.transformBox??"fill-box",delete u.transformBox),eQ))void 0!==u[t]&&(f[t]=u[t],delete u[t]);void 0!==e&&(u.x=e),void 0!==i&&(u.y=i),void 0!==a&&(u.scale=a),void 0!==r&&function(t,e,i=1,a=0,r=!0){t.pathLength=1;let n=r?eK:eJ;t[n.offset]=`${-a}`,t[n.array]=`${e} ${i}`}(u,r,n,s,!1)}let e1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),e2=t=>"string"==typeof t&&"svg"===t.toLowerCase();function e4(t,{style:e,vars:i},a,r){let n,s=t.style;for(n in e)s[n]=e[n];for(n in r?.applyProjectionStyles(s,a),i)s.setProperty(n,i[n])}function e3(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}let e5={correct:(t,e)=>{if(!e.target)return t;if("string"==typeof t)if(!tu.test(t))return t;else t=parseFloat(t);let i=e3(t,e.target.x),a=e3(t,e.target.y);return`${i}% ${a}%`}},e8=(t,e,i)=>t+(e-t)*i,e6={borderRadius:{...e5,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:e5,borderTopRightRadius:e5,borderBottomLeftRadius:e5,borderBottomRightRadius:e5,boxShadow:{correct:(t,{treeScale:e,projectionDelta:i})=>{let a=tS.parse(t);if(a.length>5)return t;let r=tS.createTransformer(t),n=+("number"!=typeof a[0]),s=i.x.scale*e.x,o=i.y.scale*e.y;a[0+n]/=s,a[1+n]/=o;let l=e8(s,o,.5);return"number"==typeof a[2+n]&&(a[2+n]/=l),"number"==typeof a[3+n]&&(a[3+n]/=l),r(a)}}};function e9(t,{layout:e,layoutId:i}){return Y.has(t)||t.startsWith("origin")||(e||void 0!==i)&&(!!e6[t]||"opacity"===t)}function e7(t,e,i){let a=t.style,r=e?.style,n={};if(!a)return n;for(let e in a)(tL(a[e])||r&&tL(r[e])||e9(e,t)||i?.getValue(e)?.liveStyle!==void 0)&&(n[e]=a[e]);return n}function it(t,e,i){let a=e7(t,e,i);for(let i in t)(tL(t[i])||tL(e[i]))&&(a[-1!==Z.indexOf(i)?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i]=t[i]);return a}class ie extends eH{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=tD}getBaseTargetFromProps(t,e){return t[e]}readValueFromInstance(t,e){if(Y.has(e)){let t=tR(e);return t&&t.default||0}return e=e1.has(e)?e:eq(e),t.getAttribute(e)}scrapeMotionValuesFromProps(t,e,i){return it(t,e,i)}build(t,e,i){e0(t,e,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(t,e,i,a){for(let i in e4(t,e,void 0,a),e.attrs)t.setAttribute(e1.has(i)?i:eq(i),e.attrs[i])}mount(t){this.isSVGTag=e2(t.tagName),super.mount(t)}}function ii({top:t,left:e,right:i,bottom:a}){return{x:{min:e,max:i},y:{min:t,max:a}}}function ia(t){return void 0===t||1===t}function ir({scale:t,scaleX:e,scaleY:i}){return!ia(t)||!ia(e)||!ia(i)}function is(t){return ir(t)||io(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function io(t){var e,i;return(e=t.x)&&"0%"!==e||(i=t.y)&&"0%"!==i}function il(t,e,i,a,r){return void 0!==r&&(t=a+r*(t-a)),a+i*(t-a)+e}function id(t,e=0,i=1,a,r){t.min=il(t.min,e,i,a,r),t.max=il(t.max,e,i,a,r)}function ic(t,{x:e,y:i}){id(t.x,e.translate,e.scale,e.originPoint),id(t.y,i.translate,i.scale,i.originPoint)}function iu(t,e){t.min=t.min+e,t.max=t.max+e}function ih(t,e,i,a,r=.5){let n=e8(t.min,t.max,r);id(t,e,i,n,a)}function ip(t,e){ih(t.x,e.x,e.scaleX,e.scale,e.originX),ih(t.y,e.y,e.scaleY,e.scale,e.originY)}function im(t,e){return ii(function(t,e){if(!e)return t;let i=e({x:t.left,y:t.top}),a=e({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}(t.getBoundingClientRect(),e))}class ib extends eH{constructor(){super(...arguments),this.type="html",this.renderInstance=e4}readValueFromInstance(t,e){if(Y.has(e))return this.projection?.isProjecting?t8(e):((t,e)=>{let{transform:i="none"}=getComputedStyle(t);return t6(i,e)})(t,e);{let i=window.getComputedStyle(t),a=(tG(e)?i.getPropertyValue(e):i[e])||0;return"string"==typeof a?a.trim():a}}measureInstanceViewportBox(t,{transformPagePoint:e}){return im(t,e)}build(t,e,i){eX(t,e,i.transformTemplate)}scrapeMotionValuesFromProps(t,e,i){return e7(t,e,i)}}let ig=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ix(t){if("string"!=typeof t||t.includes("-"));else if(ig.indexOf(t)>-1||/[A-Z]/u.test(t))return!0;return!1}let iv=(0,l.createContext)({}),iy=(0,l.createContext)({strict:!1}),iw=(0,l.createContext)({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),ik=(0,l.createContext)({});function i_(t){return Array.isArray(t)?t.join(" "):t}let ij=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function iS(t,e,i){for(let a in e)tL(e[a])||e9(a,i)||(t[a]=e[a])}let iz=()=>({...ij(),attrs:{}}),iN=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function iA(t){return t.startsWith("while")||t.startsWith("drag")&&"draggable"!==t||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||iN.has(t)}let iE=t=>!iA(t);try{n=(()=>{let t=Error("Cannot find module '@emotion/is-prop-valid'");throw t.code="MODULE_NOT_FOUND",t})().default,"function"==typeof n&&(iE=t=>t.startsWith("on")?!iA(t):n(t))}catch{}function iC(t){return tL(t)?t.get():t}let iT=(0,l.createContext)(null);function iP(t){let e=(0,l.useRef)(null);return null===e.current&&(e.current=t()),e.current}let iR=t=>(e,i)=>{let a=(0,l.useContext)(ik),r=(0,l.useContext)(iT),n=()=>(function({scrapeMotionValuesFromProps:t,createRenderState:e},i,a,r){return{latestValues:function(t,e,i,a){let r={},n=a(t,{});for(let t in n)r[t]=iC(n[t]);let{initial:s,animate:o}=t,l=eL(t),d=eB(t);e&&d&&!l&&!1!==t.inherit&&(void 0===s&&(s=e.initial),void 0===o&&(o=e.animate));let c=!!i&&!1===i.initial,u=(c=c||!1===s)?o:s;if(u&&"boolean"!=typeof u&&!eO(u)){let e=Array.isArray(u)?u:[u];for(let i=0;i<e.length;i++){let a=eU(t,e[i]);if(a){let{transitionEnd:t,transition:e,...i}=a;for(let t in i){let e=i[t];if(Array.isArray(e)){let t=c?e.length-1:0;e=e[t]}null!==e&&(r[t]=e)}for(let e in t)r[e]=t[e]}}}return r}(i,a,r,t),renderState:e()}})(t,e,a,r);return i?n():iP(n)},iO=iR({scrapeMotionValuesFromProps:e7,createRenderState:ij}),iM=iR({scrapeMotionValuesFromProps:it,createRenderState:iz}),iI="u">typeof window,iD={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},iL=!1;function iB(){return!function(){if(iL)return;let t={};for(let e in iD)t[e]={isEnabled:t=>iD[e].some(e=>!!t[e])};e$=t,iL=!0}(),e$}let iF=Symbol.for("motionComponentSymbol"),iU="data-"+eq("framerAppearId"),iV=(0,l.createContext)({});function i$(t){return t&&"object"==typeof t&&Object.prototype.hasOwnProperty.call(t,"current")}let iW=iI?l.useLayoutEffect:l.useEffect;function iH(t,{forwardMotionProps:e=!1,type:i}={},a,r){a&&function(t){let e=iB();for(let i in t)e[i]={...e[i],...t[i]};e$=e}(a);let n=i?"svg"===i:ix(t),o=n?iM:iO;function d(i,a){var d;let c,u,f,h={...(0,l.useContext)(iw),...i,layoutId:function({layoutId:t}){let e=(0,l.useContext)(iv).id;return e&&void 0!==t?e+"-"+t:t}(i)},{isStatic:p}=h,m=function(t){let{initial:e,animate:i}=function(t,e){if(eL(t)){let{initial:e,animate:i}=t;return{initial:!1===e||eM(e)?e:void 0,animate:eM(i)?i:void 0}}return!1!==t.inherit?e:{}}(t,(0,l.useContext)(ik));return(0,l.useMemo)(()=>({initial:e,animate:i}),[i_(e),i_(i)])}(i),b=o(i,p);if(!p&&iI){(0,l.useContext)(iy).strict;let e=function(t){let{drag:e,layout:i}=iB();if(!e&&!i)return{};let a={...e,...i};return{MeasureLayout:e?.isEnabled(t)||i?.isEnabled(t)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}(h);c=e.MeasureLayout,m.visualElement=function(t,e,i,a,r,n){let{visualElement:s}=(0,l.useContext)(ik),o=(0,l.useContext)(iy),d=(0,l.useContext)(iT),c=(0,l.useContext)(iw),u=c.reducedMotion,f=c.skipAnimations,h=(0,l.useRef)(null),p=(0,l.useRef)(!1);a=a||o.renderer,!h.current&&a&&(h.current=a(t,{visualState:e,parent:s,props:i,presenceContext:d,blockInitialAnimation:!!d&&!1===d.initial,reducedMotionConfig:u,skipAnimations:f,isSVG:n}),p.current&&h.current&&(h.current.manuallyAnimateOnMount=!0));let m=h.current,b=(0,l.useContext)(iV);m&&!m.projection&&r&&("html"===m.type||"svg"===m.type)&&function(t,e,i,a){let{layoutId:r,layout:n,drag:s,dragConstraints:o,layoutScroll:l,layoutRoot:d,layoutCrossfade:c}=e;t.projection=new i(t.latestValues,e["data-framer-portal-id"]?void 0:function t(e){if(e)return!1!==e.options.allowProjection?e.projection:t(e.parent)}(t.parent)),t.projection.setOptions({layoutId:r,layout:n,alwaysMeasureLayout:!!s||o&&i$(o),visualElement:t,animationType:"string"==typeof n?n:"both",initialPromotionConfig:a,crossfade:c,layoutScroll:l,layoutRoot:d})}(h.current,i,r,b);let g=(0,l.useRef)(!1);(0,l.useInsertionEffect)(()=>{m&&g.current&&m.update(i,d)});let x=i[iU],v=(0,l.useRef)(!!x&&!window.MotionHandoffIsComplete?.(x)&&window.MotionHasOptimisedAnimation?.(x));return iW(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,l.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(x)}),v.current=!1),m.enteringChildren=void 0)}),m}(t,b,h,r,e.ProjectionNode,n)}return(0,s.jsxs)(ik.Provider,{value:m,children:[c&&m.visualElement?(0,s.jsx)(c,{visualElement:m.visualElement,...h}):null,function(t,e,i,{latestValues:a},r,n=!1,s){let o=(s??ix(t)?function(t,e,i,a){let r=(0,l.useMemo)(()=>{let i=iz();return e0(i,e,e2(a),t.transformTemplate,t.style),{...i.attrs,style:{...i.style}}},[e]);if(t.style){let e={};iS(e,t.style,t),r.style={...e,...r.style}}return r}:function(t,e){let i,a,r={},n=(i=t.style||{},iS(a={},i,t),Object.assign(a,function({transformTemplate:t},e){return(0,l.useMemo)(()=>{let i=ij();return eX(i,e,t),Object.assign({},i.vars,i.style)},[e])}(t,e)),a);return t.drag&&!1!==t.dragListener&&(r.draggable=!1,n.userSelect=n.WebkitUserSelect=n.WebkitTouchCallout="none",n.touchAction=!0===t.drag?"none":`pan-${"x"===t.drag?"y":"x"}`),void 0===t.tabIndex&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=n,r})(e,a,r,t),d=function(t,e,i){let a={};for(let r in t)("values"!==r||"object"!=typeof t.values)&&(iE(r)||!0===i&&iA(r)||!e&&!iA(r)||t.draggable&&r.startsWith("onDrag"))&&(a[r]=t[r]);return a}(e,"string"==typeof t,n),c=t!==l.Fragment?{...d,...o,ref:i}:{},{children:u}=e,f=(0,l.useMemo)(()=>tL(u)?u.get():u,[u]);return(0,l.createElement)(t,{...c,children:f})}(t,i,(d=m.visualElement,u=(0,l.useRef)(a),(0,l.useInsertionEffect)(()=>{u.current=a}),f=(0,l.useRef)(null),(0,l.useCallback)(t=>{t&&b.onMount?.(t),d&&(t?d.mount(t):d.unmount());let e=u.current;if("function"==typeof e)if(t){let i=e(t);"function"==typeof i&&(f.current=i)}else f.current?(f.current(),f.current=null):e(t);else e&&(e.current=t)},[d])),b,p,e,n)]})}d.displayName=`motion.${"string"==typeof t?t:`create(${t.displayName??t.name??""})`}`;let c=(0,l.forwardRef)(d);return c[iF]=t,c}class iq{constructor(t){this.isMounted=!1,this.node=t}update(){}}function iG(t,e,i){let a=t.getProps();return eU(a,e,void 0!==i?i:a.custom,t)}function iZ(t,e){return t?.[e]??t?.default??t}let iY=t=>Array.isArray(t);function iX(t,e){let i=t.getValue("willChange");if(tL(i)&&i.add)return i.add(e);if(!i&&er.WillChange){let i=new er.WillChange("auto");t.addValue("willChange",i),i.add(e)}}let iK=t=>1e3*t,iJ=(t,e)=>i=>e(t(i)),iQ=(...t)=>t.reduce(iJ),i0={layout:0,mainThread:0,waapi:0};function i1(t,e,i){return(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?t+(e-t)*6*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function i2(t,e){return i=>i>0?e:t}let i4=(t,e,i)=>{let a=t*t,r=i*(e*e-a)+a;return r<0?0:Math.sqrt(r)},i3=[to,ts,tm];function i5(t){let e=i3.find(e=>e.test(t));if(tW(!!e,`'${t}' is not an animatable color. Use the equivalent color code instead.`,"color-not-animatable"),!e)return!1;let i=e.parse(t);return e===tm&&(i=function({hue:t,saturation:e,lightness:i,alpha:a}){t/=360,i/=100;let r=0,n=0,s=0;if(e/=100){let a=i<.5?i*(1+e):i+e-i*e,o=2*i-a;r=i1(o,a,t+1/3),n=i1(o,a,t),s=i1(o,a,t-1/3)}else r=n=s=i;return{red:Math.round(255*r),green:Math.round(255*n),blue:Math.round(255*s),alpha:a}}(i)),i}let i8=(t,e)=>{let i=i5(t),a=i5(e);if(!i||!a)return i2(t,e);let r={...i};return t=>(r.red=i4(i.red,a.red,t),r.green=i4(i.green,a.green,t),r.blue=i4(i.blue,a.blue,t),r.alpha=e8(i.alpha,a.alpha,t),ts.transform(r))},i6=new Set(["none","hidden"]);function i9(t,e){return i=>e8(t,e,i)}function i7(t){return"number"==typeof t?i9:"string"==typeof t?tY(t)?i2:tb.test(t)?i8:ai:Array.isArray(t)?at:"object"==typeof t?tb.test(t)?i8:ae:i2}function at(t,e){let i=[...t],a=i.length,r=t.map((t,i)=>i7(t)(t,e[i]));return t=>{for(let e=0;e<a;e++)i[e]=r[e](t);return i}}function ae(t,e){let i={...t,...e},a={};for(let r in i)void 0!==t[r]&&void 0!==e[r]&&(a[r]=i7(t[r])(t[r],e[r]));return t=>{for(let e in a)i[e]=a[e](t);return i}}let ai=(t,e)=>{let i=tS.createTransformer(e),a=tw(t),r=tw(e);if(!(a.indexes.var.length===r.indexes.var.length&&a.indexes.color.length===r.indexes.color.length&&a.indexes.number.length>=r.indexes.number.length))return tW(!0,`Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,"complex-values-different"),i2(t,e);if(i6.has(t)&&!r.values.length||i6.has(e)&&!a.values.length)return i6.has(t)?i=>i<=0?t:e:i=>i>=1?e:t;return iQ(at(function(t,e){let i=[],a={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){let n=e.types[r],s=t.indexes[n][a[n]],o=t.values[s]??0;i[r]=o,a[n]++}return i}(a,r),r.values),i)};function aa(t,e,i){return"number"==typeof t&&"number"==typeof e&&"number"==typeof i?e8(t,e,i):i7(t)(t,e)}let ar=t=>{let e=({timestamp:e})=>t(e);return{start:(t=!0)=>eo.update(e,t),stop:()=>el(e),now:()=>ed.isProcessing?ed.timestamp:ez.now()}},an=(t,e,i=10)=>{let a="",r=Math.max(Math.round(e/i),2);for(let e=0;e<r;e++)a+=Math.round(1e4*t(e/(r-1)))/1e4+", ";return`linear(${a.substring(0,a.length-2)})`};function as(t){let e=0,i=t.next(e);for(;!i.done&&e<2e4;)e+=50,i=t.next(e);return e>=2e4?1/0:e}function ao(t,e,i){var a,r;let n=Math.max(e-5,0);return a=i-t(n),(r=e-n)?1e3/r*a:0}let al=.01,ad=2,ac=.005,au=.5;function af(t,e){return t*Math.sqrt(1-e*e)}let ah=["duration","bounce"],ap=["stiffness","damping","mass"];function am(t,e){return e.some(e=>void 0!==t[e])}function ab(t=.3,e=.3){let i,a="object"!=typeof t?{visualDuration:t,keyframes:[0,1],bounce:e}:t,{restSpeed:r,restDelta:n}=a,s=a.keyframes[0],o=a.keyframes[a.keyframes.length-1],l={done:!1,value:s},{stiffness:d,damping:c,mass:u,duration:f,velocity:h,isResolvedFromDuration:p}=function(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!am(t,ap)&&am(t,ah))if(t.visualDuration){let i=2*Math.PI/(1.2*t.visualDuration),a=i*i,r=2*X(.05,1,1-(t.bounce||0))*Math.sqrt(a);e={...e,mass:1,stiffness:a,damping:r}}else{let i=function({duration:t=800,bounce:e=.3,velocity:i=0,mass:a=1}){let r,n;tW(t<=iK(10),"Spring duration must be 10 seconds or less","spring-duration-limit");let s=1-e;s=X(.05,1,s),t=X(.01,10,t/1e3),s<1?(r=e=>{let a=e*s,r=a*t;return .001-(a-i)/af(e,s)*Math.exp(-r)},n=e=>{let a=e*s*t,n=Math.pow(s,2)*Math.pow(e,2)*t,o=Math.exp(-a),l=af(Math.pow(e,2),s);return(a*i+i-n)*o*(-r(e)+.001>0?-1:1)/l}):(r=e=>-.001+Math.exp(-e*t)*((e-i)*t+1),n=e=>t*t*(i-e)*Math.exp(-e*t));let o=function(t,e,i){let a=i;for(let i=1;i<12;i++)a-=t(a)/e(a);return a}(r,n,5/t);if(t=iK(t),isNaN(o))return{stiffness:100,damping:10,duration:t};{let e=Math.pow(o,2)*a;return{stiffness:e,damping:2*s*Math.sqrt(a*e),duration:t}}}(t);(e={...e,...i,mass:1}).isResolvedFromDuration=!0}return e}({...a,velocity:-((a.velocity||0)/1e3)}),m=h||0,b=c/(2*Math.sqrt(d*u)),g=o-s,x=Math.sqrt(d/u)/1e3,v=5>Math.abs(g);if(r||(r=v?al:ad),n||(n=v?ac:au),b<1){let t=af(x,b);i=e=>o-Math.exp(-b*x*e)*((m+b*x*g)/t*Math.sin(t*e)+g*Math.cos(t*e))}else if(1===b)i=t=>o-Math.exp(-x*t)*(g+(m+x*g)*t);else{let t=x*Math.sqrt(b*b-1);i=e=>{let i=Math.exp(-b*x*e),a=Math.min(t*e,300);return o-i*((m+b*x*g)*Math.sinh(a)+t*g*Math.cosh(a))/t}}let y={calculatedDuration:p&&f||null,next:t=>{let e=i(t);if(p)l.done=t>=f;else{let a=0===t?m:0;b<1&&(a=0===t?iK(m):ao(i,t,e));let s=Math.abs(o-e)<=n;l.done=Math.abs(a)<=r&&s}return l.value=l.done?o:e,l},toString:()=>{let t=Math.min(as(y),2e4),e=an(e=>y.next(t*e).value,t,30);return t+"ms "+e},toTransition:()=>{}};return y}function ag({keyframes:t,velocity:e=0,power:i=.8,timeConstant:a=325,bounceDamping:r=10,bounceStiffness:n=500,modifyTarget:s,min:o,max:l,restDelta:d=.5,restSpeed:c}){let u,f,h=t[0],p={done:!1,value:h},m=i*e,b=h+m,g=void 0===s?b:s(b);g!==b&&(m=g-h);let x=t=>-m*Math.exp(-t/a),v=t=>g+x(t),y=t=>{let e=x(t),i=v(t);p.done=Math.abs(e)<=d,p.value=p.done?g:i},w=t=>{let e;if(e=p.value,void 0!==o&&e<o||void 0!==l&&e>l){var i;u=t,f=ab({keyframes:[p.value,(i=p.value,void 0===o?l:void 0===l||Math.abs(o-i)<Math.abs(l-i)?o:l)],velocity:ao(v,t,p.value),damping:r,stiffness:n,restDelta:d,restSpeed:c})}};return w(0),{calculatedDuration:null,next:t=>{let e=!1;return(f||void 0!==u||(e=!0,y(t),w(t)),void 0!==u&&t>=u)?f.next(t-u):(e||y(t),p)}}}ab.applyToOptions=t=>{let e=function(t,e=100,i){let a=i({...t,keyframes:[0,e]}),r=Math.min(as(a),2e4);return{type:"keyframes",ease:t=>a.next(r*t).value/e,duration:r/1e3}}(t,100,ab);return t.ease=e.ease,t.duration=iK(e.duration),t.type="keyframes",t};let ax=(t,e,i)=>(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t;function av(t,e,i,a){return t===e&&i===a?ea:r=>0===r||1===r?r:ax(function(t,e,i,a,r){let n,s,o=0;do(n=ax(s=e+(i-e)/2,a,r)-t)>0?i=s:e=s;while(Math.abs(n)>1e-7&&++o<12)return s}(r,0,1,t,i),e,a)}let ay=av(.42,0,1,1),aw=av(0,0,.58,1),ak=av(.42,0,.58,1),a_=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,aj=t=>e=>1-t(1-e),aS=av(.33,1.53,.69,.99),az=aj(aS),aN=a_(az),aA=t=>(t*=2)<1?.5*az(t):.5*(2-Math.pow(2,-10*(t-1))),aE=t=>1-Math.sin(Math.acos(t)),aC=aj(aE),aT=a_(aE),aP=t=>Array.isArray(t)&&"number"==typeof t[0],aR={linear:ea,easeIn:ay,easeInOut:ak,easeOut:aw,circIn:aE,circInOut:aT,circOut:aC,backIn:az,backInOut:aN,backOut:aS,anticipate:aA},aO=t=>{if(aP(t)){tH(4===t.length,"Cubic bezier arrays must contain four numerical values.","cubic-bezier-length");let[e,i,a,r]=t;return av(e,i,a,r)}return"string"==typeof t?(tH(void 0!==aR[t],`Invalid easing type '${t}'`,"invalid-easing-type"),aR[t]):t},aM=(t,e,i)=>{let a=e-t;return 0===a?1:(i-t)/a};function aI({duration:t=300,keyframes:e,times:i,ease:a="easeInOut"}){var r;let n,s=Array.isArray(a)&&"number"!=typeof a[0]?a.map(aO):aO(a),o={done:!1,value:e[0]},l=function(t,e,{clamp:i=!0,ease:a,mixer:r}={}){let n=t.length;if(tH(n===e.length,"Both input and output ranges must be the same length","range-length"),1===n)return()=>e[0];if(2===n&&e[0]===e[1])return()=>e[1];let s=t[0]===t[1];t[0]>t[n-1]&&(t=[...t].reverse(),e=[...e].reverse());let o=function(t,e,i){let a=[],r=i||er.mix||aa,n=t.length-1;for(let i=0;i<n;i++){let n=r(t[i],t[i+1]);e&&(n=iQ(Array.isArray(e)?e[i]||ea:e,n)),a.push(n)}return a}(e,a,r),l=o.length,d=i=>{if(s&&i<t[0])return e[0];let a=0;if(l>1)for(;a<t.length-2&&!(i<t[a+1]);a++);let r=aM(t[a],t[a+1],i);return o[a](r)};return i?e=>d(X(t[0],t[n-1],e)):d}((r=i&&i.length===e.length?i:(!function(t,e){let i=t[t.length-1];for(let a=1;a<=e;a++){let r=aM(0,e,a);t.push(e8(i,1,r))}}(n=[0],e.length-1),n),r.map(e=>e*t)),e,{ease:Array.isArray(s)?s:e.map(()=>s||ak).splice(0,e.length-1)});return{calculatedDuration:t,next:e=>(o.value=l(e),o.done=e>=t,o)}}let aD=t=>null!==t;function aL(t,{repeat:e,repeatType:i="loop"},a,r=1){let n=t.filter(aD),s=r<0||e&&"loop"!==i&&e%2==1?0:n.length-1;return s&&void 0!==a?a:n[s]}let aB={decay:ag,inertia:ag,tween:aI,keyframes:aI,spring:ab};function aF(t){"string"==typeof t.type&&(t.type=aB[t.type])}class aU{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,e){return this.finished.then(t,e)}}let aV=t=>t/100;class a$ extends aU{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{let{motionValue:t}=this.options;t&&t.updatedAt!==ez.now()&&this.tick(ez.now()),this.isStopped=!0,"idle"!==this.state&&(this.teardown(),this.options.onStop?.())},i0.mainThread++,this.options=t,this.initAnimation(),this.play(),!1===t.autoplay&&this.pause()}initAnimation(){let{options:t}=this;aF(t);let{type:e=aI,repeat:i=0,repeatDelay:a=0,repeatType:r,velocity:n=0}=t,{keyframes:s}=t,o=e||aI;o!==aI&&"number"!=typeof s[0]&&(this.mixKeyframes=iQ(aV,aa(s[0],s[1])),s=[0,100]);let l=o({...t,keyframes:s});"mirror"===r&&(this.mirroredGenerator=o({...t,keyframes:[...s].reverse(),velocity:-n})),null===l.calculatedDuration&&(l.calculatedDuration=as(l));let{calculatedDuration:d}=l;this.calculatedDuration=d,this.resolvedDuration=d+a,this.totalDuration=this.resolvedDuration*(i+1)-a,this.generator=l}updateTime(t){let e=Math.round(t-this.startTime)*this.playbackSpeed;null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=e}tick(t,e=!1){let{generator:i,totalDuration:a,mixKeyframes:r,mirroredGenerator:n,resolvedDuration:s,calculatedDuration:o}=this;if(null===this.startTime)return i.next(0);let{delay:l=0,keyframes:d,repeat:c,repeatType:u,repeatDelay:f,type:h,onUpdate:p,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-a/this.speed,this.startTime)),e?this.currentTime=t:this.updateTime(t);let b=this.currentTime-l*(this.playbackSpeed>=0?1:-1),g=this.playbackSpeed>=0?b<0:b>a;this.currentTime=Math.max(b,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=a);let x=this.currentTime,v=i;if(c){let t=Math.min(this.currentTime,a)/s,e=Math.floor(t),i=t%1;!i&&t>=1&&(i=1),1===i&&e--,(e=Math.min(e,c+1))%2&&("reverse"===u?(i=1-i,f&&(i-=f/s)):"mirror"===u&&(v=n)),x=X(0,1,i)*s}let y=g?{done:!1,value:d[0]}:v.next(x);r&&(y.value=r(y.value));let{done:w}=y;g||null===o||(w=this.playbackSpeed>=0?this.currentTime>=a:this.currentTime<=0);let k=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return k&&h!==ag&&(y.value=aL(d,this.options,m,this.speed)),p&&p(y.value),k&&this.finish(),y}then(t,e){return this.finished.then(t,e)}get duration(){return this.calculatedDuration/1e3}get iterationDuration(){let{delay:t=0}=this.options||{};return this.duration+t/1e3}get time(){return this.currentTime/1e3}set time(t){t=iK(t),this.currentTime=t,null===this.startTime||null!==this.holdTime||0===this.playbackSpeed?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(ez.now());let e=this.playbackSpeed!==t;this.playbackSpeed=t,e&&(this.time=this.currentTime/1e3)}play(){if(this.isStopped)return;let{driver:t=ar,startTime:e}=this.options;this.driver||(this.driver=t(t=>this.tick(t))),this.options.onPlay?.();let i=this.driver.now();"finished"===this.state?(this.updateFinished(),this.startTime=i):null!==this.holdTime?this.startTime=i-this.holdTime:this.startTime||(this.startTime=e??i),"finished"===this.state&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ez.now()),this.holdTime=this.currentTime}complete(){"running"!==this.state&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null,i0.mainThread--}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}}function aW(t){let e;return()=>(void 0===e&&(e=t()),e)}let aH=aW(()=>void 0!==window.ScrollTimeline),aq={},aG=(i=aW(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(t){return!1}return!0}),()=>aq.linearEasing??i()),aZ=([t,e,i,a])=>`cubic-bezier(${t}, ${e}, ${i}, ${a})`,aY={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:aZ([0,.65,.55,1]),circOut:aZ([.55,0,1,.45]),backIn:aZ([.31,.01,.66,-.59]),backOut:aZ([.33,1.53,.69,.99])};function aX(t){return"function"==typeof t&&"applyToOptions"in t}class aK extends aU{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:e,name:i,keyframes:a,pseudoElement:r,allowFlatten:n=!1,finalKeyframe:s,onComplete:o}=t;this.isPseudoElement=!!r,this.allowFlatten=n,this.options=t,tH("string"!=typeof t.type,'Mini animate() doesn\'t support "type" as a string.',"mini-spring");const l=function({type:t,...e}){return aX(t)&&aG()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}(t);this.animation=function(t,e,i,{delay:a=0,duration:r=300,repeat:n=0,repeatType:s="loop",ease:o="easeOut",times:l}={},d){let c={[e]:i};l&&(c.offset=l);let u=function t(e,i){if(e)return"function"==typeof e?aG()?an(e,i):"ease-out":aP(e)?aZ(e):Array.isArray(e)?e.map(e=>t(e,i)||aY.easeOut):aY[e]}(o,r);Array.isArray(u)&&(c.easing=u);let f={delay:a,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:n+1,direction:"reverse"===s?"alternate":"normal"};d&&(f.pseudoElement=d);let h=t.animate(c,f);return h}(e,i,a,l,r),!1===l.autoplay&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!r){let t=aL(a,this.options,s,this.speed);this.updateMotionValue?this.updateMotionValue(t):i.startsWith("--")?e.style.setProperty(i,t):e.style[i]=t,this.animation.cancel()}o?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),"finished"===this.state&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch(t){}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:t}=this;"idle"!==t&&"finished"!==t&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let t=this.options?.element;!this.isPseudoElement&&t?.isConnected&&this.animation.commitStyles?.()}get duration(){return Number(this.animation.effect?.getComputedTiming?.().duration||0)/1e3}get iterationDuration(){let{delay:t=0}=this.options||{};return this.duration+t/1e3}get time(){return(Number(this.animation.currentTime)||0)/1e3}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=iK(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return null!==this.finishedTime?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,observe:e}){return(this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&aH())?(this.animation.timeline=t,ea):e(this)}}let aJ={anticipate:aA,backInOut:aN,circInOut:aT};class aQ extends aK{constructor(t){!function(t){"string"==typeof t.ease&&t.ease in aJ&&(t.ease=aJ[t.ease])}(t),aF(t),super(t),void 0!==t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){let{motionValue:e,onUpdate:i,onComplete:a,element:r,...n}=this.options;if(!e)return;if(void 0!==t)return void e.set(t);let s=new a$({...n,autoplay:!1}),o=Math.max(10,ez.now()-this.startTime),l=X(0,10,o-10);e.setWithVelocity(s.sample(Math.max(0,o-l)).value,s.sample(o).value,l),s.stop()}}let a0=(t,e)=>"zIndex"!==e&&!!("number"==typeof t||Array.isArray(t)||"string"==typeof t&&(tS.test(t)||"0"===t)&&!t.startsWith("url("));function a1(t){t.duration=0,t.type="keyframes"}let a2=new Set(["opacity","clipPath","filter","transform"]),a4=aW(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));class a3 extends aU{constructor({autoplay:t=!0,delay:e=0,type:i="keyframes",repeat:a=0,repeatDelay:r=0,repeatType:n="loop",keyframes:s,name:o,motionValue:l,element:d,...c}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=ez.now();const u={autoplay:t,delay:e,type:i,repeat:a,repeatDelay:r,repeatType:n,name:o,motionValue:l,element:d,...c},f=d?.KeyframeResolver||eg;this.keyframeResolver=new f(s,(t,e,i)=>this.onKeyframesResolved(t,e,u,!i),o,l,d),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(t,e,i,a){this.keyframeResolver=void 0;let{name:r,type:n,velocity:s,delay:o,isHandoff:l,onUpdate:d}=i;this.resolvedAt=ez.now(),!function(t,e,i,a){let r=t[0];if(null===r)return!1;if("display"===e||"visibility"===e)return!0;let n=t[t.length-1],s=a0(r,e),o=a0(n,e);return tW(s===o,`You are trying to animate ${e} from "${r}" to "${n}". "${s?n:r}" is not an animatable value.`,"value-not-animatable"),!!s&&!!o&&(function(t){let e=t[0];if(1===t.length)return!0;for(let i=0;i<t.length;i++)if(t[i]!==e)return!0}(t)||("spring"===i||aX(i))&&a)}(t,r,n,s)&&((er.instantAnimations||!o)&&d?.(aL(t,i,e)),t[0]=t[t.length-1],a1(i),i.repeat=0);let c={startTime:a?this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt:void 0,finalKeyframe:e,...i,keyframes:t},u=!l&&function(t){let{motionValue:e,name:i,repeatDelay:a,repeatType:r,damping:n,type:s}=t;if(!(e?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:o,transformTemplate:l}=e.owner.getProps();return a4()&&i&&a2.has(i)&&("transform"!==i||!l)&&!o&&!a&&"mirror"!==r&&0!==n&&"inertia"!==s}(c),f=c.motionValue?.owner?.current,h=u?new aQ({...c,element:f}):new a$(c);h.finished.then(()=>{this.notifyFinished()}).catch(ea),this.pendingTimeline&&(this.stopTimeline=h.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=h}get finished(){return this._animation?this.animation.finished:this._finished}then(t,e){return this.finished.finally(t).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),ep=!0,eb(),em(),ep=!1),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}let a5={type:"spring",stiffness:500,damping:25,restSpeed:10},a8={type:"keyframes",duration:.8},a6={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},a9=t=>null!==t,a7=(t,e,i,a={},r,n)=>s=>{let o=iZ(a,t)||{},l=o.delay||a.delay||0,{elapsed:d=0}=a;d-=iK(l);let c={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:e.getVelocity(),...o,delay:-d,onUpdate:t=>{e.set(t),o.onUpdate&&o.onUpdate(t)},onComplete:()=>{s(),o.onComplete&&o.onComplete()},name:t,motionValue:e,element:n?void 0:r};!function({when:t,delay:e,delayChildren:i,staggerChildren:a,staggerDirection:r,repeat:n,repeatType:s,repeatDelay:o,from:l,elapsed:d,...c}){return!!Object.keys(c).length}(o)&&Object.assign(c,((t,{keyframes:e})=>e.length>2?a8:Y.has(t)?t.startsWith("scale")?{type:"spring",stiffness:550,damping:0===e[1]?2*Math.sqrt(550):30,restSpeed:10}:a5:a6)(t,c)),c.duration&&(c.duration=iK(c.duration)),c.repeatDelay&&(c.repeatDelay=iK(c.repeatDelay)),void 0!==c.from&&(c.keyframes[0]=c.from);let u=!1;if(!1!==c.type&&(0!==c.duration||c.repeatDelay)||(a1(c),0===c.delay&&(u=!0)),(er.instantAnimations||er.skipAnimations||r?.shouldSkipAnimations)&&(u=!0,a1(c),c.delay=0),c.allowFlatten=!o.type&&!o.ease,u&&!n&&void 0!==e.get()){let t=function(t,{repeat:e,repeatType:i="loop"},a){let r=t.filter(a9),n=e&&"loop"!==i&&e%2==1?0:r.length-1;return r[n]}(c.keyframes,o);if(void 0!==t)return void eo.update(()=>{c.onUpdate(t),c.onComplete()})}return o.isSync?new a$(c):new a3(c)};function rt(t,e,{delay:i=0,transitionOverride:a,type:r}={}){let{transition:n=t.getDefaultTransition(),transitionEnd:s,...o}=e,l=n?.reduceMotion;a&&(n=a);let d=[],c=r&&t.animationState&&t.animationState.getState()[r];for(let e in o){let a=t.getValue(e,t.latestValues[e]??null),r=o[e];if(void 0===r||c&&function({protectedKeys:t,needsAnimating:e},i){let a=t.hasOwnProperty(i)&&!0!==e[i];return e[i]=!1,a}(c,e))continue;let s={delay:i,...iZ(n||{},e)},u=a.get();if(void 0!==u&&!a.isAnimating&&!Array.isArray(r)&&r===u&&!s.velocity)continue;let f=!1;if(window.MotionHandoffAnimation){let i=t.props[iU];if(i){let t=window.MotionHandoffAnimation(i,e,eo);null!==t&&(s.startTime=t,f=!0)}}iX(t,e);let h=l??t.shouldReduceMotion;a.start(a7(e,a,r,h&&tB.has(e)?{type:!1}:s,t,f));let p=a.animation;p&&d.push(p)}return s&&Promise.all(d).then(()=>{eo.update(()=>{s&&function(t,e){let{transitionEnd:i={},transition:a={},...r}=iG(t,e)||{};for(let e in r={...r,...i}){var n;let i=iY(n=r[e])?n[n.length-1]||0:n;t.hasValue(e)?t.getValue(e).set(i):t.addValue(e,eA(i))}}(t,s)})}),d}function re(t,e,i,a=0,r=1){let n=Array.from(t).sort((t,e)=>t.sortNodePosition(e)).indexOf(e),s=t.size,o=(s-1)*a;return"function"==typeof i?i(n,s):1===r?n*a:o-n*a}function ri(t,e,i={}){let a=iG(t,e,"exit"===i.type?t.presenceContext?.custom:void 0),{transition:r=t.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(r=i.transitionOverride);let n=a?()=>Promise.all(rt(t,a,i)):()=>Promise.resolve(),s=t.variantChildren&&t.variantChildren.size?(a=0)=>{let{delayChildren:n=0,staggerChildren:s,staggerDirection:o}=r;return function(t,e,i=0,a=0,r=0,n=1,s){let o=[];for(let l of t.variantChildren)l.notify("AnimationStart",e),o.push(ri(l,e,{...s,delay:i+("function"==typeof a?0:a)+re(t.variantChildren,l,a,r,n)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(o)}(t,e,a,n,s,o,i)}:()=>Promise.resolve(),{when:o}=r;if(!o)return Promise.all([n(),s(i.delay)]);{let[t,e]="beforeChildren"===o?[n,s]:[s,n];return t().then(()=>e())}}let ra=eD.length;function rr(t,e){if(!Array.isArray(e))return!1;let i=e.length;if(i!==t.length)return!1;for(let a=0;a<i;a++)if(e[a]!==t[a])return!1;return!0}let rn=[...eI].reverse(),rs=eI.length;function ro(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function rl(){return{animate:ro(!0),whileInView:ro(),whileHover:ro(),whileTap:ro(),whileDrag:ro(),whileFocus:ro(),exit:ro()}}let rd=0;function rc(t){return[t("x"),t("y")]}let ru=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function rf(t){return ru.has(t.tagName)||!0===t.isContentEditable}function rh(t,e,i,a={passive:!0}){return t.addEventListener(e,i,a),()=>t.removeEventListener(e,i)}let rp={x:!1,y:!1};function rm(t){return t.max-t.min}function rb(t,e,i,a=.5){t.origin=a,t.originPoint=e8(e.min,e.max,t.origin),t.scale=rm(i)/rm(e),t.translate=e8(i.min,i.max,t.origin)-t.originPoint,(t.scale>=.9999&&t.scale<=1.0001||isNaN(t.scale))&&(t.scale=1),(t.translate>=-.01&&t.translate<=.01||isNaN(t.translate))&&(t.translate=0)}function rg(t,e,i,a){rb(t.x,e.x,i.x,a?a.originX:void 0),rb(t.y,e.y,i.y,a?a.originY:void 0)}function rx(t,e,i){t.min=i.min+e.min,t.max=t.min+rm(e)}function rv(t,e,i){t.min=e.min-i.min,t.max=t.min+rm(e)}function ry(t,e,i){rv(t.x,e.x,i.x),rv(t.y,e.y,i.y)}let rw=t=>"mouse"===t.pointerType?"number"!=typeof t.button||t.button<=0:!1!==t.isPrimary;function rk(t){return{point:{x:t.pageX,y:t.pageY}}}function r_(t,e,i,a){return rh(t,e,t=>rw(t)&&i(t,rk(t)),a)}let rj=({current:t})=>t?t.ownerDocument.defaultView:null,rS=(t,e)=>Math.abs(t-e),rz=new Set(["auto","scroll"]);class rN{constructor(t,e,{transformPagePoint:i,contextWindow:a=window,dragSnapToOrigin:r=!1,distanceThreshold:n=3,element:s}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=t=>{this.handleScroll(t.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{var t,e;if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let i=rC(this.lastMoveEventInfo,this.history),a=null!==this.startEvent,r=(t=i.offset,e={x:0,y:0},Math.sqrt(rS(t.x,e.x)**2+rS(t.y,e.y)**2)>=this.distanceThreshold);if(!a&&!r)return;let{point:n}=i,{timestamp:s}=ed;this.history.push({...n,timestamp:s});let{onStart:o,onMove:l}=this.handlers;a||(o&&o(this.lastMoveEvent,i),this.startEvent=this.lastMoveEvent),l&&l(this.lastMoveEvent,i)},this.handlePointerMove=(t,e)=>{this.lastMoveEvent=t,this.lastMoveEventInfo=rA(e,this.transformPagePoint),eo.update(this.updatePoint,!0)},this.handlePointerUp=(t,e)=>{this.end();let{onEnd:i,onSessionEnd:a,resumeAnimation:r}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&r&&r(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let n=rC("pointercancel"===t.type?this.lastMoveEventInfo:rA(e,this.transformPagePoint),this.history);this.startEvent&&i&&i(t,n),a&&a(t,n)},!rw(t))return;this.dragSnapToOrigin=r,this.handlers=e,this.transformPagePoint=i,this.distanceThreshold=n,this.contextWindow=a||window;const o=rA(rk(t),this.transformPagePoint),{point:l}=o,{timestamp:d}=ed;this.history=[{...l,timestamp:d}];const{onSessionStart:c}=e;c&&c(t,rC(o,this.history)),this.removeListeners=iQ(r_(this.contextWindow,"pointermove",this.handlePointerMove),r_(this.contextWindow,"pointerup",this.handlePointerUp),r_(this.contextWindow,"pointercancel",this.handlePointerUp)),s&&this.startScrollTracking(s)}startScrollTracking(t){let e=t.parentElement;for(;e;){let t=getComputedStyle(e);(rz.has(t.overflowX)||rz.has(t.overflowY))&&this.scrollPositions.set(e,{x:e.scrollLeft,y:e.scrollTop}),e=e.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){let e=this.scrollPositions.get(t);if(!e)return;let i=t===window,a=i?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},r={x:a.x-e.x,y:a.y-e.y};(0!==r.x||0!==r.y)&&(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=r.x,this.lastMoveEventInfo.point.y+=r.y):this.history.length>0&&(this.history[0].x-=r.x,this.history[0].y-=r.y),this.scrollPositions.set(t,a),eo.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),el(this.updatePoint)}}function rA(t,e){return e?{point:e(t.point)}:t}function rE(t,e){return{x:t.x-e.x,y:t.y-e.y}}function rC({point:t},e){return{point:t,delta:rE(t,rT(e)),offset:rE(t,e[0]),velocity:function(t,e){if(t.length<2)return{x:0,y:0};let i=t.length-1,a=null,r=rT(t);for(;i>=0&&(a=t[i],!(r.timestamp-a.timestamp>iK(.1)));)i--;if(!a)return{x:0,y:0};let n=(r.timestamp-a.timestamp)/1e3;if(0===n)return{x:0,y:0};let s={x:(r.x-a.x)/n,y:(r.y-a.y)/n};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}(e,.1)}}function rT(t){return t[t.length-1]}function rP(t,e,i){return{min:void 0!==e?t.min+e:void 0,max:void 0!==i?t.max+i-(t.max-t.min):void 0}}function rR(t,e){let i=e.min-t.min,a=e.max-t.max;return e.max-e.min<t.max-t.min&&([i,a]=[a,i]),{min:i,max:a}}function rO(t,e,i){return{min:rM(t,e),max:rM(t,i)}}function rM(t,e){return"number"==typeof t?t:t[e]||0}let rI=new WeakMap;class rD{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=tD(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:e=!1,distanceThreshold:i}={}){let{presenceContext:a}=this.visualElement;if(a&&!1===a.isPresent)return;let r=t=>{e?(this.stopAnimation(),this.snapToCursor(rk(t).point)):this.pauseAnimation()},n=(t,e)=>{this.stopAnimation();let{drag:i,dragPropagation:a,onDragStart:r}=this.getProps();if(i&&!a&&(this.openDragLock&&this.openDragLock(),this.openDragLock=function(t){if("x"===t||"y"===t)if(rp[t])return null;else return rp[t]=!0,()=>{rp[t]=!1};return rp.x||rp.y?null:(rp.x=rp.y=!0,()=>{rp.x=rp.y=!1})}(i),!this.openDragLock))return;this.latestPointerEvent=t,this.latestPanInfo=e,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),rc(t=>{let e=this.getAxisMotionValue(t).get()||0;if(tc.test(e)){let{projection:i}=this.visualElement;if(i&&i.layout){let a=i.layout.layoutBox[t];a&&(e=rm(a)*(parseFloat(e)/100))}}this.originPoint[t]=e}),r&&eo.postRender(()=>r(t,e)),iX(this.visualElement,"transform");let{animationState:n}=this.visualElement;n&&n.setActive("whileDrag",!0)},s=(t,e)=>{this.latestPointerEvent=t,this.latestPanInfo=e;let{dragPropagation:i,dragDirectionLock:a,onDirectionLock:r,onDrag:n}=this.getProps();if(!i&&!this.openDragLock)return;let{offset:s}=e;if(a&&null===this.currentDirection){this.currentDirection=function(t,e=10){let i=null;return Math.abs(t.y)>e?i="y":Math.abs(t.x)>e&&(i="x"),i}(s),null!==this.currentDirection&&r&&r(this.currentDirection);return}this.updateAxis("x",e.point,s),this.updateAxis("y",e.point,s),this.visualElement.render(),n&&n(t,e)},o=(t,e)=>{this.latestPointerEvent=t,this.latestPanInfo=e,this.stop(t,e),this.latestPointerEvent=null,this.latestPanInfo=null},l=()=>rc(t=>"paused"===this.getAnimationState(t)&&this.getAxisMotionValue(t).animation?.play()),{dragSnapToOrigin:d}=this.getProps();this.panSession=new rN(t,{onSessionStart:r,onStart:n,onMove:s,onSessionEnd:o,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:i,contextWindow:rj(this.visualElement),element:this.visualElement.current})}stop(t,e){let i=t||this.latestPointerEvent,a=e||this.latestPanInfo,r=this.isDragging;if(this.cancel(),!r||!a||!i)return;let{velocity:n}=a;this.startAnimation(n);let{onDragEnd:s}=this.getProps();s&&eo.postRender(()=>s(i,a))}cancel(){this.isDragging=!1;let{projection:t,animationState:e}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),e&&e.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,e,i){let{drag:a}=this.getProps();if(!i||!rL(t,a,this.currentDirection))return;let r=this.getAxisMotionValue(t),n=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(n=function(t,{min:e,max:i},a){return void 0!==e&&t<e?t=a?e8(e,t,a.min):Math.max(t,e):void 0!==i&&t>i&&(t=a?e8(i,t,a.max):Math.min(t,i)),t}(n,this.constraints[t],this.elastic[t])),r.set(n)}resolveConstraints(){let{dragConstraints:t,dragElastic:e}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,a=this.constraints;t&&i$(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&i?this.constraints=function(t,{top:e,left:i,bottom:a,right:r}){return{x:rP(t.x,i,r),y:rP(t.y,e,a)}}(i.layoutBox,t):this.constraints=!1,this.elastic=function(t=.35){return!1===t?t=0:!0===t&&(t=.35),{x:rO(t,"left","right"),y:rO(t,"top","bottom")}}(e),a!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&rc(t=>{var e,a;let r;!1!==this.constraints&&this.getAxisMotionValue(t)&&(this.constraints[t]=(e=i.layoutBox[t],a=this.constraints[t],r={},void 0!==a.min&&(r.min=a.min-e.min),void 0!==a.max&&(r.max=a.max-e.min),r))})}resolveRefConstraints(){var t;let{dragConstraints:e,onMeasureDragConstraints:i}=this.getProps();if(!e||!i$(e))return!1;let a=e.current;tH(null!==a,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.","drag-constraints-ref");let{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let n=function(t,e,i){let a=im(t,i),{scroll:r}=e;return r&&(iu(a.x,r.offset.x),iu(a.y,r.offset.y)),a}(a,r.root,this.visualElement.getTransformPagePoint()),s=(t=r.layout.layoutBox,{x:rR(t.x,n.x),y:rR(t.y,n.y)});if(i){let t=i(function({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}(s));this.hasMutatedConstraints=!!t,t&&(s=ii(t))}return s}startAnimation(t){let{drag:e,dragMomentum:i,dragElastic:a,dragTransition:r,dragSnapToOrigin:n,onDragTransitionEnd:s}=this.getProps(),o=this.constraints||{};return Promise.all(rc(s=>{if(!rL(s,e,this.currentDirection))return;let l=o&&o[s]||{};n&&(l={min:0,max:0});let d={type:"inertia",velocity:i?t[s]:0,bounceStiffness:a?200:1e6,bounceDamping:a?40:1e7,timeConstant:750,restDelta:1,restSpeed:10,...r,...l};return this.startAxisValueAnimation(s,d)})).then(s)}startAxisValueAnimation(t,e){let i=this.getAxisMotionValue(t);return iX(this.visualElement,t),i.start(a7(t,i,0,e,this.visualElement,!1))}stopAnimation(){rc(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){rc(t=>this.getAxisMotionValue(t).animation?.pause())}getAnimationState(t){return this.getAxisMotionValue(t).animation?.state}getAxisMotionValue(t){let e=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps();return i[e]||this.visualElement.getValue(t,(i.initial?i.initial[t]:void 0)||0)}snapToCursor(t){rc(e=>{let{drag:i}=this.getProps();if(!rL(e,i,this.currentDirection))return;let{projection:a}=this.visualElement,r=this.getAxisMotionValue(e);if(a&&a.layout){let{min:i,max:n}=a.layout.layoutBox[e],s=r.get()||0;r.set(t[e]-e8(i,n,.5)+s)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:t,dragConstraints:e}=this.getProps(),{projection:i}=this.visualElement;if(!i$(e)||!i||!this.constraints)return;this.stopAnimation();let a={x:0,y:0};rc(t=>{let e=this.getAxisMotionValue(t);if(e&&!1!==this.constraints){var i,r;let n,s,o,l=e.get();a[t]=(i={min:l,max:l},r=this.constraints[t],n=.5,s=rm(i),(o=rm(r))>s?n=aM(r.min,r.max-s,i.min):s>o&&(n=aM(i.min,i.max-o,r.min)),X(0,1,n))}});let{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),rc(e=>{if(!rL(e,t,null))return;let i=this.getAxisMotionValue(e),{min:r,max:n}=this.constraints[e];i.set(e8(r,n,a[e]))})}addListeners(){if(!this.visualElement.current)return;rI.set(this.visualElement,this);let t=this.visualElement.current,e=r_(t,"pointerdown",e=>{let{drag:i,dragListener:a=!0}=this.getProps(),r=e.target,n=r!==t&&rf(r);i&&a&&!n&&this.start(e)}),i=()=>{let{dragConstraints:t}=this.getProps();i$(t)&&t.current&&(this.constraints=this.resolveRefConstraints())},{projection:a}=this.visualElement,r=a.addEventListener("measure",i);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),eo.read(i);let n=rh(window,"resize",()=>this.scalePositionWithinConstraints()),s=a.addEventListener("didUpdate",({delta:t,hasLayoutChanged:e})=>{this.isDragging&&e&&(rc(e=>{let i=this.getAxisMotionValue(e);i&&(this.originPoint[e]+=t[e].translate,i.set(i.get()+t[e].translate))}),this.visualElement.render())});return()=>{n(),e(),r(),s&&s()}}getProps(){let t=this.visualElement.getProps(),{drag:e=!1,dragDirectionLock:i=!1,dragPropagation:a=!1,dragConstraints:r=!1,dragElastic:n=.35,dragMomentum:s=!0}=t;return{...t,drag:e,dragDirectionLock:i,dragPropagation:a,dragConstraints:r,dragElastic:n,dragMomentum:s}}}function rL(t,e,i){return(!0===e||e===t)&&(null===i||i===t)}let rB=t=>(e,i)=>{t&&eo.postRender(()=>t(e,i))},rF={hasAnimatedSinceResize:!0,hasEverUpdated:!1};var rU=l;function rV(t=!0){let e=(0,l.useContext)(iT);if(null===e)return[!0,null];let{isPresent:i,onExitComplete:a,register:r}=e,n=(0,l.useId)();(0,l.useEffect)(()=>{if(t)return r(n)},[t]);let s=(0,l.useCallback)(()=>t&&a&&a(n),[n,a,t]);return!i&&a?[!1,s]:[!0]}let r$=!1;class rW extends rU.Component{componentDidMount(){let{visualElement:t,layoutGroup:e,switchLayoutGroup:i,layoutId:a}=this.props,{projection:r}=t;r&&(e.group&&e.group.add(r),i&&i.register&&a&&i.register(r),r$&&r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),rF.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){let{layoutDependency:e,visualElement:i,drag:a,isPresent:r}=this.props,{projection:n}=i;return n&&(n.isPresent=r,t.layoutDependency!==e&&n.setOptions({...n.options,layoutDependency:e}),r$=!0,a||t.layoutDependency!==e||void 0===e||t.isPresent!==r?n.willUpdate():this.safeToRemove(),t.isPresent!==r&&(r?n.promote():n.relegate()||eo.postRender(()=>{let t=n.getStack();t&&t.members.length||this.safeToRemove()}))),null}componentDidUpdate(){let{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),ej.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:t,layoutGroup:e,switchLayoutGroup:i}=this.props,{projection:a}=t;r$=!0,a&&(a.scheduleCheckAfterUnmount(),e&&e.group&&e.group.remove(a),i&&i.deregister&&i.deregister(a))}safeToRemove(){let{safeToRemove:t}=this.props;t&&t()}render(){return null}}function rH(t){let[e,i]=rV(),a=(0,rU.useContext)(iv);return(0,s.jsx)(rW,{...t,layoutGroup:a,switchLayoutGroup:(0,rU.useContext)(iV),isPresent:e,safeToRemove:i})}function rq(t){return"object"==typeof t&&null!==t}function rG(t){return rq(t)&&"ownerSVGElement"in t}let rZ=["TopLeft","TopRight","BottomLeft","BottomRight"],rY=rZ.length,rX=t=>"string"==typeof t?parseFloat(t):t,rK=t=>"number"==typeof t||tu.test(t);function rJ(t,e){return void 0!==t[e]?t[e]:t.borderRadius}let rQ=r1(0,.5,aC),r0=r1(.5,.95,ea);function r1(t,e,i){return a=>a<t?0:a>e?1:i(aM(t,e,a))}function r2(t,e){t.min=e.min,t.max=e.max}function r4(t,e){r2(t.x,e.x),r2(t.y,e.y)}function r3(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function r5(t,e,i,a,r){return t-=e,t=a+1/i*(t-a),void 0!==r&&(t=a+1/r*(t-a)),t}function r8(t,e,[i,a,r],n,s){!function(t,e=0,i=1,a=.5,r,n=t,s=t){if(tc.test(e)&&(e=parseFloat(e),e=e8(s.min,s.max,e/100)-s.min),"number"!=typeof e)return;let o=e8(n.min,n.max,a);t===n&&(o-=e),t.min=r5(t.min,e,i,o,r),t.max=r5(t.max,e,i,o,r)}(t,e[i],e[a],e[r],e.scale,n,s)}let r6=["x","scaleX","originX"],r9=["y","scaleY","originY"];function r7(t,e,i,a){r8(t.x,e,r6,i?i.x:void 0,a?a.x:void 0),r8(t.y,e,r9,i?i.y:void 0,a?a.y:void 0)}function nt(t){return 0===t.translate&&1===t.scale}function ne(t){return nt(t.x)&&nt(t.y)}function ni(t,e){return t.min===e.min&&t.max===e.max}function na(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function nr(t,e){return na(t.x,e.x)&&na(t.y,e.y)}function nn(t){return rm(t.x)/rm(t.y)}function ns(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class no{constructor(){this.members=[]}add(t){ew(this.members,t),t.scheduleRender()}remove(t){if(ek(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){let t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(t){let e,i=this.members.findIndex(e=>t===e);if(0===i)return!1;for(let t=i;t>=0;t--){let i=this.members[t];if(!1!==i.isPresent){e=i;break}}return!!e&&(this.promote(e),!0)}promote(t,e){let i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender();let a=i.options.layoutDependency,r=t.options.layoutDependency;(void 0===a||void 0===r||a!==r)&&(t.resumeFrom=i,e&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0));let{crossfade:n}=t.options;!1===n&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{let{options:e,resumingFrom:i}=t;e.onExitComplete&&e.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}let nl=(t,e)=>t.depth-e.depth;class nd{constructor(){this.children=[],this.isDirty=!1}add(t){ew(this.children,t),this.isDirty=!0}remove(t){ek(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(nl),this.isDirty=!1,this.children.forEach(t)}}let nc=["","X","Y","Z"],nu=0;function nf(t,e,i,a){let{latestValues:r}=e;r[t]&&(i[t]=r[t],e.setStaticValue(t,0),a&&(a[t]=0))}function nh({attachResizeListener:t,defaultParent:e,measureScroll:i,checkIsScrollRoot:a,resetTransform:r}){return class{constructor(t={},i=e?.()){this.id=nu++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(nb),this.nodes.forEach(n_),this.nodes.forEach(nj),this.nodes.forEach(ng)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=t,this.root=i?i.root||i:this,this.path=i?[...i.path,i]:[],this.parent=i,this.depth=i?i.depth+1:0;for(let t=0;t<this.path.length;t++)this.path[t].shouldResetTransform=!0;this.root===this&&(this.nodes=new nd)}addEventListener(t,e){return this.eventHandlers.has(t)||this.eventHandlers.set(t,new e_),this.eventHandlers.get(t).add(e)}notifyListeners(t,...e){let i=this.eventHandlers.get(t);i&&i.notify(...e)}hasListeners(t){return this.eventHandlers.has(t)}mount(e){if(this.instance)return;this.isSVG=rG(e)&&!(rG(e)&&"svg"===e.tagName),this.instance=e;let{layoutId:i,layout:a,visualElement:r}=this.options;if(r&&!r.current&&r.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(a||i)&&(this.isLayoutDirty=!0),t){let i,a=0,r=()=>this.root.updateBlockedByResize=!1;eo.read(()=>{a=window.innerWidth}),t(e,()=>{let t=window.innerWidth;if(t!==a){let e,n;a=t,this.root.updateBlockedByResize=!0,i&&i(),e=ez.now(),n=({timestamp:t})=>{let i=t-e;i>=250&&(el(n),r(i-250))},eo.setup(n,!0),i=()=>el(n),rF.hasAnimatedSinceResize&&(rF.hasAnimatedSinceResize=!1,this.nodes.forEach(nk))}})}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&r&&(i||a)&&this.addEventListener("didUpdate",({delta:t,hasLayoutChanged:e,hasRelativeLayoutChanged:i,layout:a})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let n=this.options.transition||r.getDefaultTransition()||nC,{onLayoutAnimationStart:s,onLayoutAnimationComplete:o}=r.getProps(),l=!this.targetLayout||!nr(this.targetLayout,a),d=!e&&i;if(this.options.layoutRoot||this.resumeFrom||d||e&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let e={...iZ(n,"layout"),onPlay:s,onComplete:o};(r.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e),this.setAnimationOrigin(t,d)}else e||nk(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=a})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let t=this.getStack();t&&t.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),el(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){!this.isUpdateBlocked()&&(this.isUpdating=!0,this.nodes&&this.nodes.forEach(nS),this.animationId++)}getTransformTemplate(){let{visualElement:t}=this.options;return t&&t.getProps().transformTemplate}willUpdate(t=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&function t(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:i}=e.options;if(!i)return;let a=i.props[iU];if(window.MotionHasOptimisedAnimation(a,"transform")){let{layout:t,layoutId:i}=e.options;window.MotionCancelOptimisedAnimation(a,"transform",eo,!(t||i))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&t(r)}(this),this.root.isUpdating||this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let t=0;t<this.path.length;t++){let e=this.path[t];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}let{layoutId:e,layout:i}=this.options;if(void 0===e&&!i)return;let a=this.getTransformTemplate();this.prevTransformTemplateValue=a?a(this.latestValues,""):void 0,this.updateSnapshot(),t&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(nv);return}if(this.animationId<=this.animationCommitId)return void this.nodes.forEach(ny);this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(nw),this.nodes.forEach(np),this.nodes.forEach(nm)):this.nodes.forEach(ny),this.clearAllSnapshots();let t=ez.now();ed.delta=X(0,1e3/60,t-ed.timestamp),ed.timestamp=t,ed.isProcessing=!0,ec.update.process(ed),ec.preRender.process(ed),ec.render.process(ed),ed.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ej.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(nx),this.sharedNodes.forEach(nz)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,eo.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){eo.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||rm(this.snapshot.measuredBox.x)||rm(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let t=0;t<this.path.length;t++)this.path[t].updateScroll();let t=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=tD(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);let{visualElement:e}=this.options;e&&e.notify("LayoutMeasure",this.layout.layoutBox,t?t.layoutBox:void 0)}updateScroll(t="measure"){let e=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===t&&(e=!1),e&&this.instance){let e=a(this.instance);this.scroll={animationId:this.root.animationId,phase:t,isRoot:e,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:e}}}resetTransform(){if(!r)return;let t=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,e=this.projectionDelta&&!ne(this.projectionDelta),i=this.getTransformTemplate(),a=i?i(this.latestValues,""):void 0,n=a!==this.prevTransformTemplateValue;t&&this.instance&&(e||is(this.latestValues)||n)&&(r(this.instance,a),this.shouldResetTransform=!1,this.scheduleRender())}measure(t=!0){var e;let i=this.measurePageBox(),a=this.removeElementScroll(i);return t&&(a=this.removeTransform(a)),nR((e=a).x),nR(e.y),{animationId:this.root.animationId,measuredBox:i,layoutBox:a,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:t}=this.options;if(!t)return tD();let e=t.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(nM))){let{scroll:t}=this.root;t&&(iu(e.x,t.offset.x),iu(e.y,t.offset.y))}return e}removeElementScroll(t){let e=tD();if(r4(e,t),this.scroll?.wasRoot)return e;for(let i=0;i<this.path.length;i++){let a=this.path[i],{scroll:r,options:n}=a;a!==this.root&&r&&n.layoutScroll&&(r.wasRoot&&r4(e,t),iu(e.x,r.offset.x),iu(e.y,r.offset.y))}return e}applyTransform(t,e=!1){let i=tD();r4(i,t);for(let t=0;t<this.path.length;t++){let a=this.path[t];!e&&a.options.layoutScroll&&a.scroll&&a!==a.root&&ip(i,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),is(a.latestValues)&&ip(i,a.latestValues)}return is(this.latestValues)&&ip(i,this.latestValues),i}removeTransform(t){let e=tD();r4(e,t);for(let t=0;t<this.path.length;t++){let i=this.path[t];if(!i.instance||!is(i.latestValues))continue;ir(i.latestValues)&&i.updateSnapshot();let a=tD();r4(a,i.measurePageBox()),r7(e,i.latestValues,i.snapshot?i.snapshot.layoutBox:void 0,a)}return is(this.latestValues)&&r7(e,this.latestValues),e}setTargetDelta(t){this.targetDelta=t,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(t){this.options={...this.options,...t,crossfade:void 0===t.crossfade||t.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ed.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(t=!1){let e=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=e.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=e.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=e.isSharedProjectionDirty);let i=!!this.resumingFrom||this!==e;if(!(t||i&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:a,layoutId:r}=this.options;if(!this.layout||!(a||r))return;this.resolvedRelativeTargetAt=ed.timestamp;let n=this.getClosestProjectingParent();if(n&&this.linkedParentVersion!==n.layoutVersion&&!n.options.layoutRoot&&this.removeRelativeTarget(),this.targetDelta||this.relativeTarget||(n&&n.layout?this.createRelativeTarget(n,this.layout.layoutBox,n.layout.layoutBox):this.removeRelativeTarget()),this.relativeTarget||this.targetDelta){if(this.target||(this.target=tD(),this.targetWithTransforms=tD()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target){var s,o,l;this.forceRelativeParentToResolveTarget(),s=this.target,o=this.relativeTarget,l=this.relativeParent.target,rx(s.x,o.x,l.x),rx(s.y,o.y,l.y)}else this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):r4(this.target,this.layout.layoutBox),ic(this.target,this.targetDelta)):r4(this.target,this.layout.layoutBox);this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,n&&!!n.resumingFrom==!!this.resumingFrom&&!n.options.layoutScroll&&n.target&&1!==this.animationProgress?this.createRelativeTarget(n,this.target,n.target):this.relativeParent=this.relativeTarget=void 0)}}getClosestProjectingParent(){if(!(!this.parent||ir(this.parent.latestValues)||io(this.parent.latestValues)))if(this.parent.isProjecting())return this.parent;else return this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(t,e,i){this.relativeParent=t,this.linkedParentVersion=t.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=tD(),this.relativeTargetOrigin=tD(),ry(this.relativeTargetOrigin,e,i),r4(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let t=this.getLead(),e=!!this.resumingFrom||this!==t,i=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(i=!1),e&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(i=!1),this.resolvedRelativeTargetAt===ed.timestamp&&(i=!1),i)return;let{layout:a,layoutId:r}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(a||r))return;r4(this.layoutCorrected,this.layout.layoutBox);let n=this.treeScale.x,s=this.treeScale.y;!function(t,e,i,a=!1){let r,n,s=i.length;if(s){e.x=e.y=1;for(let o=0;o<s;o++){n=(r=i[o]).projectionDelta;let{visualElement:s}=r.options;(!s||!s.props.style||"contents"!==s.props.style.display)&&(a&&r.options.layoutScroll&&r.scroll&&r!==r.root&&ip(t,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),n&&(e.x*=n.x.scale,e.y*=n.y.scale,ic(t,n)),a&&is(r.latestValues)&&ip(t,r.latestValues))}e.x<1.0000000000001&&e.x>.999999999999&&(e.x=1),e.y<1.0000000000001&&e.y>.999999999999&&(e.y=1)}}(this.layoutCorrected,this.treeScale,this.path,e),t.layout&&!t.target&&(1!==this.treeScale.x||1!==this.treeScale.y)&&(t.target=t.layout.layoutBox,t.targetWithTransforms=tD());let{target:o}=t;if(!o){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}this.projectionDelta&&this.prevProjectionDelta?(r3(this.prevProjectionDelta.x,this.projectionDelta.x),r3(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),rg(this.projectionDelta,this.layoutCorrected,o,this.latestValues),this.treeScale.x===n&&this.treeScale.y===s&&ns(this.projectionDelta.x,this.prevProjectionDelta.x)&&ns(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",o))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(t=!0){if(this.options.visualElement?.scheduleRender(),t){let t=this.getStack();t&&t.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=tM(),this.projectionDelta=tM(),this.projectionDeltaWithTransform=tM()}setAnimationOrigin(t,e=!1){let i,a=this.snapshot,r=a?a.latestValues:{},n={...this.latestValues},s=tM();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!e;let o=tD(),l=(a?a.source:void 0)!==(this.layout?this.layout.source:void 0),d=this.getStack(),c=!d||d.members.length<=1,u=!!(l&&!c&&!0===this.options.crossfade&&!this.path.some(nE));this.animationProgress=0,this.mixTargetDelta=e=>{let a=e/1e3;if(nN(s.x,t.x,a),nN(s.y,t.y,a),this.setTargetDelta(s),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout){var d,f,h,p,m,b;ry(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),h=this.relativeTarget,p=this.relativeTargetOrigin,m=o,b=a,nA(h.x,p.x,m.x,b),nA(h.y,p.y,m.y,b),i&&(d=this.relativeTarget,f=i,ni(d.x,f.x)&&ni(d.y,f.y))&&(this.isProjectionDirty=!1),i||(i=tD()),r4(i,this.relativeTarget)}l&&(this.animationValues=n,function(t,e,i,a,r,n){r?(t.opacity=e8(0,i.opacity??1,rQ(a)),t.opacityExit=e8(e.opacity??1,0,r0(a))):n&&(t.opacity=e8(e.opacity??1,i.opacity??1,a));for(let r=0;r<rY;r++){let n=`border${rZ[r]}Radius`,s=rJ(e,n),o=rJ(i,n);(void 0!==s||void 0!==o)&&(s||(s=0),o||(o=0),0===s||0===o||rK(s)===rK(o)?(t[n]=Math.max(e8(rX(s),rX(o),a),0),(tc.test(o)||tc.test(s))&&(t[n]+="%")):t[n]=o)}(e.rotate||i.rotate)&&(t.rotate=e8(e.rotate||0,i.rotate||0,a))}(n,r,this.latestValues,a,u,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=a},this.mixTargetDelta(1e3*!!this.options.layoutRoot)}startAnimation(t){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(el(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=eo.update(()=>{var e,i,a;let r;rF.hasAnimatedSinceResize=!0,i0.layout++,this.motionValue||(this.motionValue=eA(0)),this.currentAnimation=(e=this.motionValue,i=[0,1e3],a={...t,velocity:0,isSync:!0,onUpdate:e=>{this.mixTargetDelta(e),t.onUpdate&&t.onUpdate(e)},onStop:()=>{i0.layout--},onComplete:()=>{i0.layout--,t.onComplete&&t.onComplete(),this.completeAnimation()}},(r=tL(e)?e:eA(e)).start(a7("",r,i,a)),r.animation),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let t=this.getStack();t&&t.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let t=this.getLead(),{targetWithTransforms:e,target:i,layout:a,latestValues:r}=t;if(e&&i&&a){if(this!==t&&this.layout&&a&&nO(this.options.animationType,this.layout.layoutBox,a.layoutBox)){i=this.target||tD();let e=rm(this.layout.layoutBox.x);i.x.min=t.target.x.min,i.x.max=i.x.min+e;let a=rm(this.layout.layoutBox.y);i.y.min=t.target.y.min,i.y.max=i.y.min+a}r4(e,i),ip(e,r),rg(this.projectionDeltaWithTransform,this.layoutCorrected,e,r)}}registerSharedNode(t,e){this.sharedNodes.has(t)||this.sharedNodes.set(t,new no),this.sharedNodes.get(t).add(e);let i=e.options.initialPromotionConfig;e.promote({transition:i?i.transition:void 0,preserveFollowOpacity:i&&i.shouldPreserveFollowOpacity?i.shouldPreserveFollowOpacity(e):void 0})}isLead(){let t=this.getStack();return!t||t.lead===this}getLead(){let{layoutId:t}=this.options;return t&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:t}=this.options;return t?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:t}=this.options;if(t)return this.root.sharedNodes.get(t)}promote({needsReset:t,transition:e,preserveFollowOpacity:i}={}){let a=this.getStack();a&&a.promote(this,i),t&&(this.projectionDelta=void 0,this.needsReset=!0),e&&this.setOptions({transition:e})}relegate(){let t=this.getStack();return!!t&&t.relegate(this)}resetSkewAndRotation(){let{visualElement:t}=this.options;if(!t)return;let e=!1,{latestValues:i}=t;if((i.z||i.rotate||i.rotateX||i.rotateY||i.rotateZ||i.skewX||i.skewY)&&(e=!0),!e)return;let a={};i.z&&nf("z",t,a,this.animationValues);for(let e=0;e<nc.length;e++)nf(`rotate${nc[e]}`,t,a,this.animationValues),nf(`skew${nc[e]}`,t,a,this.animationValues);for(let e in t.render(),a)t.setStaticValue(e,a[e]),this.animationValues&&(this.animationValues[e]=a[e]);t.scheduleRender()}applyProjectionStyles(t,e){if(!this.instance||this.isSVG)return;if(!this.isVisible){t.visibility="hidden";return}let i=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,t.visibility="",t.opacity="",t.pointerEvents=iC(e?.pointerEvents)||"",t.transform=i?i(this.latestValues,""):"none";return}let a=this.getLead();if(!this.projectionDelta||!this.layout||!a.target){this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=iC(e?.pointerEvents)||""),this.hasProjected&&!is(this.latestValues)&&(t.transform=i?i({},""):"none",this.hasProjected=!1);return}t.visibility="";let r=a.animationValues||a.latestValues;this.applyTransformsToTarget();let n=function(t,e,i){let a="",r=t.x.translate/e.x,n=t.y.translate/e.y,s=i?.z||0;if((r||n||s)&&(a=`translate3d(${r}px, ${n}px, ${s}px) `),(1!==e.x||1!==e.y)&&(a+=`scale(${1/e.x}, ${1/e.y}) `),i){let{transformPerspective:t,rotate:e,rotateX:r,rotateY:n,skewX:s,skewY:o}=i;t&&(a=`perspective(${t}px) ${a}`),e&&(a+=`rotate(${e}deg) `),r&&(a+=`rotateX(${r}deg) `),n&&(a+=`rotateY(${n}deg) `),s&&(a+=`skewX(${s}deg) `),o&&(a+=`skewY(${o}deg) `)}let o=t.x.scale*e.x,l=t.y.scale*e.y;return(1!==o||1!==l)&&(a+=`scale(${o}, ${l})`),a||"none"}(this.projectionDeltaWithTransform,this.treeScale,r);i&&(n=i(r,n)),t.transform=n;let{x:s,y:o}=this.projectionDelta;for(let e in t.transformOrigin=`${100*s.origin}% ${100*o.origin}% 0`,a.animationValues?t.opacity=a===this?r.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:r.opacityExit:t.opacity=a===this?void 0!==r.opacity?r.opacity:"":void 0!==r.opacityExit?r.opacityExit:0,e6){if(void 0===r[e])continue;let{correct:i,applyTo:s,isCSSVariable:o}=e6[e],l="none"===n?r[e]:i(r[e],a);if(s){let e=s.length;for(let i=0;i<e;i++)t[s[i]]=l}else o?this.options.visualElement.renderState.vars[e]=l:t[e]=l}this.options.layoutId&&(t.pointerEvents=a===this?iC(e?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(t=>t.currentAnimation?.stop()),this.root.nodes.forEach(nv),this.root.sharedNodes.clear()}}}function np(t){t.updateLayout()}function nm(t){let e=t.resumeFrom?.snapshot||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){let{layoutBox:i,measuredBox:a}=t.layout,{animationType:r}=t.options,n=e.source!==t.layout.source;"size"===r?rc(t=>{let a=n?e.measuredBox[t]:e.layoutBox[t],r=rm(a);a.min=i[t].min,a.max=a.min+r}):nO(r,e.layoutBox,i)&&rc(a=>{let r=n?e.measuredBox[a]:e.layoutBox[a],s=rm(i[a]);r.max=r.min+s,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[a].max=t.relativeTarget[a].min+s)});let s=tM();rg(s,i,e.layoutBox);let o=tM();n?rg(o,t.applyTransform(a,!0),e.measuredBox):rg(o,i,e.layoutBox);let l=!ne(s),d=!1;if(!t.resumeFrom){let a=t.getClosestProjectingParent();if(a&&!a.resumeFrom){let{snapshot:r,layout:n}=a;if(r&&n){let s=tD();ry(s,e.layoutBox,r.layoutBox);let o=tD();ry(o,i,n.layoutBox),nr(s,o)||(d=!0),a.options.layoutRoot&&(t.relativeTarget=o,t.relativeTargetOrigin=s,t.relativeParent=a)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:o,layoutDelta:s,hasLayoutChanged:l,hasRelativeLayoutChanged:d})}else if(t.isLead()){let{onExitComplete:e}=t.options;e&&e()}t.options.transition=void 0}function nb(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function ng(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function nx(t){t.clearSnapshot()}function nv(t){t.clearMeasurements()}function ny(t){t.isLayoutDirty=!1}function nw(t){let{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function nk(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function n_(t){t.resolveTargetDelta()}function nj(t){t.calcProjection()}function nS(t){t.resetSkewAndRotation()}function nz(t){t.removeLeadSnapshot()}function nN(t,e,i){t.translate=e8(e.translate,0,i),t.scale=e8(e.scale,1,i),t.origin=e.origin,t.originPoint=e.originPoint}function nA(t,e,i,a){t.min=e8(e.min,i.min,a),t.max=e8(e.max,i.max,a)}function nE(t){return t.animationValues&&void 0!==t.animationValues.opacityExit}let nC={duration:.45,ease:[.4,0,.1,1]},nT=t=>"u">typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),nP=nT("applewebkit/")&&!nT("chrome/")?Math.round:ea;function nR(t){t.min=nP(t.min),t.max=nP(t.max)}function nO(t,e,i){return"position"===t||"preserve-aspect"===t&&!(.2>=Math.abs(nn(e)-nn(i)))}function nM(t){return t!==t.root&&t.scroll?.wasRoot}let nI=nh({attachResizeListener:(t,e)=>rh(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),nD={current:void 0},nL=nh({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!nD.current){let t=new nI({});t.mount(window),t.setOptions({layoutScroll:!0}),nD.current=t}return nD.current},resetTransform:(t,e)=>{t.style.transform=void 0!==e?e:"none"},checkIsScrollRoot:t=>"fixed"===window.getComputedStyle(t).position});function nB(t,e){let i=function(t,e,i){if(null==t)return[];if(t instanceof EventTarget)return[t];if("string"==typeof t){let e=document,i=(void 0)??e.querySelectorAll(t);return i?Array.from(i):[]}return Array.from(t).filter(t=>null!=t)}(t),a=new AbortController;return[i,{passive:!0,...e,signal:a.signal},()=>a.abort()]}function nF(t){return!("touch"===t.pointerType||rp.x||rp.y)}function nU(t,e,i){let{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover","Start"===i);let r=a["onHover"+i];r&&eo.postRender(()=>r(e,rk(e)))}function nV(t){return rq(t)&&"offsetHeight"in t}let n$=(t,e)=>!!e&&(t===e||n$(t,e.parentElement)),nW=new WeakSet;function nH(t){return e=>{"Enter"===e.key&&t(e)}}function nq(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}function nG(t){return rw(t)&&!(rp.x||rp.y)}function nZ(t,e,i){let{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap","Start"===i);let r=a["onTap"+("End"===i?"":i)];r&&eo.postRender(()=>r(e,rk(e)))}let nY=new WeakMap,nX=new WeakMap,nK=t=>{let e=nY.get(t.target);e&&e(t)},nJ=t=>{t.forEach(nK)},nQ={some:0,all:1},n0=function(t,e){if("u"<typeof Proxy)return iH;let i=new Map,a=(i,a)=>iH(i,a,t,e);return new Proxy((t,e)=>a(t,e),{get:(r,n)=>"create"===n?a:(i.has(n)||i.set(n,iH(n,void 0,t,e)),i.get(n))})}({animation:{Feature:class extends iq{constructor(t){super(t),t.animationState||(t.animationState=function(t){let e=e=>Promise.all(e.map(({animation:e,options:i})=>(function(t,e,i={}){let a;if(t.notify("AnimationStart",e),Array.isArray(e))a=Promise.all(e.map(e=>ri(t,e,i)));else if("string"==typeof e)a=ri(t,e,i);else{let r="function"==typeof e?iG(t,e,i.custom):e;a=Promise.all(rt(t,r,i))}return a.then(()=>{t.notify("AnimationComplete",e)})})(t,e,i))),i=rl(),a=!0,r=e=>(i,a)=>{let r=iG(t,a,"exit"===e?t.presenceContext?.custom:void 0);if(r){let{transition:t,transitionEnd:e,...a}=r;i={...i,...a,...e}}return i};function n(n){let{props:s}=t,o=function t(e){if(!e)return;if(!e.isControllingVariants){let i=e.parent&&t(e.parent)||{};return void 0!==e.props.initial&&(i.initial=e.props.initial),i}let i={};for(let t=0;t<ra;t++){let a=eD[t],r=e.props[a];(eM(r)||!1===r)&&(i[a]=r)}return i}(t.parent)||{},l=[],d=new Set,c={},u=1/0;for(let e=0;e<rs;e++){var f,h;let p=rn[e],m=i[p],b=void 0!==s[p]?s[p]:o[p],g=eM(b),x=p===n?m.isActive:null;!1===x&&(u=e);let v=b===o[p]&&b!==s[p]&&g;if(v&&a&&t.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...c},!m.isActive&&null===x||!b&&!m.prevProp||eO(b)||"boolean"==typeof b)continue;let y=(f=m.prevProp,"string"==typeof(h=b)?h!==f:!!Array.isArray(h)&&!rr(h,f)),w=y||p===n&&m.isActive&&!v&&g||e>u&&g,k=!1,_=Array.isArray(b)?b:[b],j=_.reduce(r(p),{});!1===x&&(j={});let{prevResolvedValues:S={}}=m,z={...S,...j},N=e=>{w=!0,d.has(e)&&(k=!0,d.delete(e)),m.needsAnimating[e]=!0;let i=t.getValue(e);i&&(i.liveStyle=!1)};for(let t in z){let e=j[t],i=S[t];if(!c.hasOwnProperty(t))(iY(e)&&iY(i)?rr(e,i):e===i)?void 0!==e&&d.has(t)?N(t):m.protectedKeys[t]=!0:null!=e?N(t):d.add(t)}m.prevProp=b,m.prevResolvedValues=j,m.isActive&&(c={...c,...j}),a&&t.blockInitialAnimation&&(w=!1);let A=v&&y,E=!A||k;w&&E&&l.push(..._.map(e=>{let i={type:p};if("string"==typeof e&&a&&!A&&t.manuallyAnimateOnMount&&t.parent){let{parent:a}=t,r=iG(a,e);if(a.enteringChildren&&r){let{delayChildren:e}=r.transition||{};i.delay=re(a.enteringChildren,t,e)}}return{animation:e,options:i}}))}if(d.size){let e={};if("boolean"!=typeof s.initial){let i=iG(t,Array.isArray(s.initial)?s.initial[0]:s.initial);i&&i.transition&&(e.transition=i.transition)}d.forEach(i=>{let a=t.getBaseTarget(i),r=t.getValue(i);r&&(r.liveStyle=!0),e[i]=a??null}),l.push({animation:e})}let p=!!l.length;return a&&(!1===s.initial||s.initial===s.animate)&&!t.manuallyAnimateOnMount&&(p=!1),a=!1,p?e(l):Promise.resolve()}return{animateChanges:n,setActive:function(e,a){if(i[e].isActive===a)return Promise.resolve();t.variantChildren?.forEach(t=>t.animationState?.setActive(e,a)),i[e].isActive=a;let r=n(e);for(let t in i)i[t].protectedKeys={};return r},setAnimateFunction:function(i){e=i(t)},getState:()=>i,reset:()=>{i=rl()}}}(t))}updateAnimationControlsSubscription(){let{animate:t}=this.node.getProps();eO(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:t}=this.node.getProps(),{animate:e}=this.node.prevProps||{};t!==e&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}},exit:{Feature:class extends iq{constructor(){super(...arguments),this.id=rd++}update(){if(!this.node.presenceContext)return;let{isPresent:t,onExitComplete:e}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;let a=this.node.animationState.setActive("exit",!t);e&&!t&&a.then(()=>{e(this.id)})}mount(){let{register:t,onExitComplete:e}=this.node.presenceContext||{};e&&e(this.id),t&&(this.unmount=t(this.id))}unmount(){}}},inView:{Feature:class extends iq{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var t;let e;this.unmount();let{viewport:i={}}=this.node.getProps(),{root:a,margin:r,amount:n="some",once:s}=i,o={root:a?a.current:void 0,rootMargin:r,threshold:"number"==typeof n?n:nQ[n]},l=t=>{let{isIntersecting:e}=t;if(this.isInView===e||(this.isInView=e,s&&!e&&this.hasEnteredView))return;e&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",e);let{onViewportEnter:i,onViewportLeave:a}=this.node.getProps(),r=e?i:a;r&&r(t)};return t=this.node.current,e=function({root:t,...e}){let i=t||document;nX.has(i)||nX.set(i,{});let a=nX.get(i),r=JSON.stringify(e);return a[r]||(a[r]=new IntersectionObserver(nJ,{root:t,...e})),a[r]}(o),nY.set(t,l),e.observe(t),()=>{nY.delete(t),e.unobserve(t)}}mount(){this.startObserver()}update(){if("u"<typeof IntersectionObserver)return;let{props:t,prevProps:e}=this.node;["amount","margin","root"].some(function({viewport:t={}},{viewport:e={}}={}){return i=>t[i]!==e[i]}(t,e))&&this.startObserver()}unmount(){}}},tap:{Feature:class extends iq{mount(){let{current:t}=this.node;t&&(this.unmount=function(t,e,i={}){let[a,r,n]=nB(t,i),s=t=>{let a=t.currentTarget;if(!nG(t))return;nW.add(a);let n=e(a,t),s=(t,e)=>{window.removeEventListener("pointerup",o),window.removeEventListener("pointercancel",l),nW.has(a)&&nW.delete(a),nG(t)&&"function"==typeof n&&n(t,{success:e})},o=t=>{s(t,a===window||a===document||i.useGlobalTarget||n$(a,t.target))},l=t=>{s(t,!1)};window.addEventListener("pointerup",o,r),window.addEventListener("pointercancel",l,r)};return a.forEach(t=>{(i.useGlobalTarget?window:t).addEventListener("pointerdown",s,r),nV(t)&&(t.addEventListener("focus",t=>((t,e)=>{let i=t.currentTarget;if(!i)return;let a=nH(()=>{if(nW.has(i))return;nq(i,"down");let t=nH(()=>{nq(i,"up")});i.addEventListener("keyup",t,e),i.addEventListener("blur",()=>nq(i,"cancel"),e)});i.addEventListener("keydown",a,e),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),e)})(t,r)),rf(t)||t.hasAttribute("tabindex")||(t.tabIndex=0))}),n}(t,(t,e)=>(nZ(this.node,e,"Start"),(t,{success:e})=>nZ(this.node,t,e?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}},focus:{Feature:class extends iq{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch(e){t=!0}t&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=iQ(rh(this.node.current,"focus",()=>this.onFocus()),rh(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends iq{mount(){let{current:t}=this.node;t&&(this.unmount=function(t,e,i={}){let[a,r,n]=nB(t,i),s=t=>{if(!nF(t))return;let{target:i}=t,a=e(i,t);if("function"!=typeof a||!i)return;let n=t=>{nF(t)&&(a(t),i.removeEventListener("pointerleave",n))};i.addEventListener("pointerleave",n,r)};return a.forEach(t=>{t.addEventListener("pointerenter",s,r)}),n}(t,(t,e)=>(nU(this.node,e,"Start"),t=>nU(this.node,t,"End"))))}unmount(){}}},pan:{Feature:class extends iq{constructor(){super(...arguments),this.removePointerDownListener=ea}onPointerDown(t){this.session=new rN(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:rj(this.node)})}createPanHandlers(){let{onPanSessionStart:t,onPanStart:e,onPan:i,onPanEnd:a}=this.node.getProps();return{onSessionStart:rB(t),onStart:rB(e),onMove:i,onEnd:(t,e)=>{delete this.session,a&&eo.postRender(()=>a(t,e))}}}mount(){this.removePointerDownListener=r_(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends iq{constructor(t){super(t),this.removeGroupControls=ea,this.removeListeners=ea,this.controls=new rD(t)}mount(){let{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ea}update(){let{dragControls:t}=this.node.getProps(),{dragControls:e}=this.node.prevProps||{};t!==e&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},ProjectionNode:nL,MeasureLayout:rH},layout:{ProjectionNode:nL,MeasureLayout:rH}},(t,e)=>e.isSVG??ix(t)?new ie(e):new ib(e,{allowProjection:t!==l.Fragment}));var n1=l;function n2(t,e){if("function"==typeof t)return t(e);null!=t&&(t.current=e)}class n4 extends n1.Component{getSnapshotBeforeUpdate(t){let e=this.props.childRef.current;if(e&&t.isPresent&&!this.props.isPresent){let t=e.offsetParent,i=nV(t)&&t.offsetWidth||0,a=nV(t)&&t.offsetHeight||0,r=this.props.sizeRef.current;r.height=e.offsetHeight||0,r.width=e.offsetWidth||0,r.top=e.offsetTop,r.left=e.offsetLeft,r.right=i-r.width-r.left,r.bottom=a-r.height-r.top}return null}componentDidUpdate(){}render(){return this.props.children}}function n3({children:t,isPresent:e,anchorX:i,anchorY:a,root:r}){let n=(0,n1.useId)(),o=(0,n1.useRef)(null),d=(0,n1.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=(0,n1.useContext)(iw),u=function(...t){return l.useCallback(function(...t){return e=>{let i=!1,a=t.map(t=>{let a=n2(t,e);return i||"function"!=typeof a||(i=!0),a});if(i)return()=>{for(let e=0;e<a.length;e++){let i=a[e];"function"==typeof i?i():n2(t[e],null)}}}}(...t),t)}(o,t.props?.ref??t?.ref);return(0,n1.useInsertionEffect)(()=>{let{width:t,height:s,top:l,left:u,right:f,bottom:h}=d.current;if(e||!o.current||!t||!s)return;let p="left"===i?`left: ${u}`:`right: ${f}`,m="bottom"===a?`bottom: ${h}`:`top: ${l}`;o.current.dataset.motionPopId=n;let b=document.createElement("style");c&&(b.nonce=c);let g=r??document.head;return g.appendChild(b),b.sheet&&b.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${s}px !important;
            ${p}px !important;
            ${m}px !important;
          }
        `),()=>{g.contains(b)&&g.removeChild(b)}},[e]),(0,s.jsx)(n4,{isPresent:e,childRef:o,sizeRef:d,children:n1.cloneElement(t,{ref:u})})}let n5=({children:t,initial:e,isPresent:i,onExitComplete:a,custom:r,presenceAffectsLayout:n,mode:o,anchorX:d,anchorY:c,root:u})=>{let f=iP(n8),h=(0,l.useId)(),p=!0,m=(0,l.useMemo)(()=>(p=!1,{id:h,initial:e,isPresent:i,custom:r,onExitComplete:t=>{for(let e of(f.set(t,!0),f.values()))if(!e)return;a&&a()},register:t=>(f.set(t,!1),()=>f.delete(t))}),[i,f,a]);return n&&p&&(m={...m}),(0,l.useMemo)(()=>{f.forEach((t,e)=>f.set(e,!1))},[i]),l.useEffect(()=>{i||f.size||!a||a()},[i]),"popLayout"===o&&(t=(0,s.jsx)(n3,{isPresent:i,anchorX:d,anchorY:c,root:u,children:t})),(0,s.jsx)(iT.Provider,{value:m,children:t})};function n8(){return new Map}let n6=t=>t.key||"";function n9(t){let e=[];return l.Children.forEach(t,t=>{(0,l.isValidElement)(t)&&e.push(t)}),e}let n7=({children:t,custom:e,initial:i=!0,onExitComplete:a,presenceAffectsLayout:r=!0,mode:n="sync",propagate:o=!1,anchorX:d="left",anchorY:c="top",root:u})=>{let[f,h]=rV(o),p=(0,l.useMemo)(()=>n9(t),[t]),m=o&&!f?[]:p.map(n6),b=(0,l.useRef)(!0),g=(0,l.useRef)(p),x=iP(()=>new Map),v=(0,l.useRef)(new Set),[y,w]=(0,l.useState)(p),[k,_]=(0,l.useState)(p);iW(()=>{b.current=!1,g.current=p;for(let t=0;t<k.length;t++){let e=n6(k[t]);m.includes(e)?(x.delete(e),v.current.delete(e)):!0!==x.get(e)&&x.set(e,!1)}},[k,m.length,m.join("-")]);let j=[];if(p!==y){let t=[...p];for(let e=0;e<k.length;e++){let i=k[e],a=n6(i);m.includes(a)||(t.splice(e,0,i),j.push(i))}return"wait"===n&&j.length&&(t=j),_(n9(t)),w(p),null}let{forceRender:S}=(0,l.useContext)(iv);return(0,s.jsx)(s.Fragment,{children:k.map(t=>{let l=n6(t),y=(!o||!!f)&&(p===k||m.includes(l));return(0,s.jsx)(n5,{isPresent:y,initial:(!b.current||!!i)&&void 0,custom:e,presenceAffectsLayout:r,mode:n,root:u,onExitComplete:y?void 0:()=>{if(v.current.has(l)||(v.current.add(l),!x.has(l)))return;x.set(l,!0);let t=!0;x.forEach(e=>{e||(t=!1)}),t&&(S?.(),_(g.current),o&&h?.(),a&&a())},anchorX:d,anchorY:c,children:t},l)})})},st=new class{ws=null;listeners=[];messageQueue=[];constructor(){this.connect()}connect(){console.log("Attempting to connect to Bridge..."),this.ws=new WebSocket("ws://127.0.0.1:8080"),this.ws.onopen=()=>{console.log("Connected to Desktop Agent"),window.__bridgeStatus="CONNECTED",this.flushQueue()},this.ws.onmessage=t=>{try{let e=JSON.parse(t.data);this.listeners.forEach(t=>t(e))}catch(t){console.error("Failed to parse bridge message",t)}},this.ws.onclose=()=>{console.log("Disconnected from Desktop Agent, retrying in 2s..."),window.__bridgeStatus="DISCONNECTED",setTimeout(()=>this.connect(),2e3)},this.ws.onerror=t=>{console.error("Bridge Connection Error",t),window.__bridgeStatus="ERROR"}}flushQueue(){if(this.ws&&this.ws.readyState===WebSocket.OPEN)for(;this.messageQueue.length>0;){let t=this.messageQueue.shift();t&&this.ws.send(t)}}send(t,e){let i=JSON.stringify({type:t,payload:e});if(this.ws?.readyState===WebSocket.OPEN)this.ws.send(i);else if(this.ws?.readyState===WebSocket.CONNECTING)console.warn("Bridge connecting, buffering message..."),this.messageQueue.push(i);else{let t=this.ws?this.ws.readyState:"CLOSED";console.warn(`Bridge not connected. Status: ${t}`)}}onMessage(t){this.listeners.push(t)}executeTool(t,e,i){this.send("EXECUTE_TOOL",{tool:t,action:e,data:i})}};var se=t.i(71315);let si=(a=0,()=>(a+=1,`u${`0000${(1679616*Math.random()|0).toString(36)}`.slice(-4)}${a}`));function sa(t){let e=[];for(let i=0,a=t.length;i<a;i++)e.push(t[i]);return e}let sr=null;function sn(t={}){return sr||(sr=t.includeStyleProperties?t.includeStyleProperties:sa(window.getComputedStyle(document.documentElement)))}function ss(t,e){let i=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return i?parseFloat(i.replace("px","")):0}function so(t,e={}){let i,a,r,n;return{width:e.width||(i=ss(t,"border-left-width"),a=ss(t,"border-right-width"),t.clientWidth+i+a),height:e.height||(r=ss(t,"border-top-width"),n=ss(t,"border-bottom-width"),t.clientHeight+r+n)}}function sl(t){return new Promise((e,i)=>{let a=new Image;a.onload=()=>{a.decode().then(()=>{requestAnimationFrame(()=>e(a))})},a.onerror=i,a.crossOrigin="anonymous",a.decoding="async",a.src=t})}async function sd(t){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)}async function sc(t,e,i){let a="http://www.w3.org/2000/svg",r=document.createElementNS(a,"svg"),n=document.createElementNS(a,"foreignObject");return r.setAttribute("width",`${e}`),r.setAttribute("height",`${i}`),r.setAttribute("viewBox",`0 0 ${e} ${i}`),n.setAttribute("width","100%"),n.setAttribute("height","100%"),n.setAttribute("x","0"),n.setAttribute("y","0"),n.setAttribute("externalResourcesRequired","true"),r.appendChild(n),n.appendChild(t),sd(r)}let su=(t,e)=>{if(t instanceof e)return!0;let i=Object.getPrototypeOf(t);return null!==i&&(i.constructor.name===e.name||su(i,e))};function sf(t,e,i,a){let r,n,s,o=window.getComputedStyle(t,i),l=o.getPropertyValue("content");if(""===l||"none"===l)return;let d=si();try{e.className=`${e.className} ${d}`}catch(t){return}let c=document.createElement("style");c.appendChild((r=`.${d}:${i}`,s=o.cssText?(n=o.getPropertyValue("content"),`${o.cssText} content: '${n.replace(/'|"/g,"")}';`):sn(a).map(t=>{let e=o.getPropertyValue(t),i=o.getPropertyPriority(t);return`${t}: ${e}${i?" !important":""};`}).join(" "),document.createTextNode(`${r}{${s}}`))),e.appendChild(c)}let sh="application/font-woff",sp="image/jpeg",sm={woff:sh,woff2:sh,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:sp,jpeg:sp,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function sb(t){let e;return sm[((e=/\.([^./]*?)$/g.exec(t))?e[1]:"").toLowerCase()]||""}function sg(t){return -1!==t.search(/^(data:)/)}function sx(t,e){return`data:${e};base64,${t}`}async function sv(t,e,i){let a=await fetch(t,e);if(404===a.status)throw Error(`Resource "${a.url}" not found`);let r=await a.blob();return new Promise((t,e)=>{let n=new FileReader;n.onerror=e,n.onloadend=()=>{try{t(i({res:a,result:n.result}))}catch(t){e(t)}},n.readAsDataURL(r)})}let sy={};async function sw(t,e,i){var a,r,n;let s,o,l=(a=t,r=e,n=i.includeQueryParams,o=a.replace(/\?.*/,""),n&&(o=a),/ttf|otf|eot|woff2?/i.test(o)&&(o=o.replace(/.*\//,"")),r?`[${r}]${o}`:o);if(null!=sy[l])return sy[l];i.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+new Date().getTime());try{let a=await sv(t,i.fetchRequestInit,({res:t,result:i})=>(e||(e=t.headers.get("Content-Type")||""),i.split(/,/)[1]));s=sx(a,e)}catch(a){s=i.imagePlaceholder||"";let e=`Failed to fetch resource: ${t}`;a&&(e="string"==typeof a?a:a.message),e&&console.warn(e)}return sy[l]=s,s}async function sk(t){let e=t.toDataURL();return"data:,"===e?t.cloneNode(!1):sl(e)}async function s_(t,e){if(t.currentSrc){let e=document.createElement("canvas"),i=e.getContext("2d");return e.width=t.clientWidth,e.height=t.clientHeight,null==i||i.drawImage(t,0,0,e.width,e.height),sl(e.toDataURL())}let i=t.poster,a=sb(i);return sl(await sw(i,a,e))}async function sj(t,e){var i;try{if(null==(i=null==t?void 0:t.contentDocument)?void 0:i.body)return await sE(t.contentDocument.body,e,!0)}catch(t){}return t.cloneNode(!1)}async function sS(t,e){return su(t,HTMLCanvasElement)?sk(t):su(t,HTMLVideoElement)?s_(t,e):su(t,HTMLIFrameElement)?sj(t,e):t.cloneNode(sz(t))}let sz=t=>null!=t.tagName&&"SVG"===t.tagName.toUpperCase();async function sN(t,e,i){var a,r;if(sz(e))return e;let n=[];return 0===(n=null!=t.tagName&&"SLOT"===t.tagName.toUpperCase()&&t.assignedNodes?sa(t.assignedNodes()):su(t,HTMLIFrameElement)&&(null==(a=t.contentDocument)?void 0:a.body)?sa(t.contentDocument.body.childNodes):sa((null!=(r=t.shadowRoot)?r:t).childNodes)).length||su(t,HTMLVideoElement)||await n.reduce((t,a)=>t.then(()=>sE(a,i)).then(t=>{t&&e.appendChild(t)}),Promise.resolve()),e}async function sA(t,e){let i=t.querySelectorAll?t.querySelectorAll("use"):[];if(0===i.length)return t;let a={};for(let r=0;r<i.length;r++){let n=i[r].getAttribute("xlink:href");if(n){let i=t.querySelector(n),r=document.querySelector(n);i||!r||a[n]||(a[n]=await sE(r,e,!0))}}let r=Object.values(a);if(r.length){let e="http://www.w3.org/1999/xhtml",i=document.createElementNS(e,"svg");i.setAttribute("xmlns",e),i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.overflow="hidden",i.style.display="none";let a=document.createElementNS(e,"defs");i.appendChild(a);for(let t=0;t<r.length;t++)a.appendChild(r[t]);t.appendChild(i)}return t}async function sE(t,e,i){return i||!e.filter||e.filter(t)?Promise.resolve(t).then(t=>sS(t,e)).then(i=>sN(t,i,e)).then(i=>(function(t,e,i){if(su(e,Element)&&(!function(t,e,i){let a=e.style;if(!a)return;let r=window.getComputedStyle(t);r.cssText?(a.cssText=r.cssText,a.transformOrigin=r.transformOrigin):sn(i).forEach(i=>{let n=r.getPropertyValue(i);if("font-size"===i&&n.endsWith("px")){let t=Math.floor(parseFloat(n.substring(0,n.length-2)))-.1;n=`${t}px`}su(t,HTMLIFrameElement)&&"display"===i&&"inline"===n&&(n="block"),"d"===i&&e.getAttribute("d")&&(n=`path(${e.getAttribute("d")})`),a.setProperty(i,n,r.getPropertyPriority(i))})}(t,e,i),sf(t,e,":before",i),sf(t,e,":after",i),su(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),su(t,HTMLInputElement)&&e.setAttribute("value",t.value),su(t,HTMLSelectElement))){let i=Array.from(e.children).find(e=>t.value===e.getAttribute("value"));i&&i.setAttribute("selected","")}return e})(t,i,e)).then(t=>sA(t,e)):null}let sC=/url\((['"]?)([^'"]+?)\1\)/g,sT=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,sP=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;async function sR(t,e,i,a,r){try{let n,s,o=i?function(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;let i=document.implementation.createHTMLDocument(),a=i.createElement("base"),r=i.createElement("a");return i.head.appendChild(a),i.body.appendChild(r),e&&(a.href=e),r.href=t,r.href}(e,i):e,l=sb(e);if(r){let t=await r(o);n=sx(t,l)}else n=await sw(o,l,a);return t.replace((s=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1"),RegExp(`(url\\(['"]?)(${s})(['"]?\\))`,"g")),`$1${n}$3`)}catch(t){}return t}function sO(t){return -1!==t.search(sC)}async function sM(t,e,i){let a;if(!sO(t))return t;let r=function(t,{preferredFontFormat:e}){return e?t.replace(sP,t=>{for(;;){let[i,,a]=sT.exec(t)||[];if(!a)return"";if(a===e)return`src: ${i};`}}):t}(t,i);return(a=[],r.replace(sC,(t,e,i)=>(a.push(i),t)),a.filter(t=>!sg(t))).reduce((t,a)=>t.then(t=>sR(t,a,e,i)),Promise.resolve(r))}async function sI(t,e,i){var a;let r=null==(a=e.style)?void 0:a.getPropertyValue(t);if(r){let a=await sM(r,null,i);return e.style.setProperty(t,a,e.style.getPropertyPriority(t)),!0}return!1}async function sD(t,e){await sI("background",t,e)||await sI("background-image",t,e),await sI("mask",t,e)||await sI("-webkit-mask",t,e)||await sI("mask-image",t,e)||await sI("-webkit-mask-image",t,e)}async function sL(t,e){let i=su(t,HTMLImageElement);if(!(i&&!sg(t.src))&&!(su(t,SVGImageElement)&&!sg(t.href.baseVal)))return;let a=i?t.src:t.href.baseVal,r=await sw(a,sb(a),e);await new Promise((a,n)=>{t.onload=a,t.onerror=e.onImageErrorHandler?(...t)=>{try{a(e.onImageErrorHandler(...t))}catch(t){n(t)}}:n,t.decode&&(t.decode=a),"lazy"===t.loading&&(t.loading="eager"),i?(t.srcset="",t.src=r):t.href.baseVal=r})}async function sB(t,e){let i=sa(t.childNodes).map(t=>sF(t,e));await Promise.all(i).then(()=>t)}async function sF(t,e){su(t,Element)&&(await sD(t,e),await sL(t,e),await sB(t,e))}let sU={};async function sV(t){let e=sU[t];if(null!=e)return e;let i=await fetch(t);return e={url:t,cssText:await i.text()},sU[t]=e,e}async function s$(t,e){let i=t.cssText,a=/url\(["']?([^"')]+)["']?\)/g;return Promise.all((i.match(/url\([^)]+\)/g)||[]).map(async r=>{let n=r.replace(a,"$1");return n.startsWith("https://")||(n=new URL(n,t.url).href),sv(n,e.fetchRequestInit,({result:t})=>(i=i.replace(r,`url(${t})`),[r,t]))})).then(()=>i)}function sW(t){if(null==t)return[];let e=[],i=t.replace(/(\/\*[\s\S]*?\*\/)/gi,""),a=RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){let t=a.exec(i);if(null===t)break;e.push(t[0])}i=i.replace(a,"");let r=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,n=RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){let t=r.exec(i);if(null===t){if(null===(t=n.exec(i)))break;r.lastIndex=n.lastIndex}else n.lastIndex=r.lastIndex;e.push(t[0])}return e}async function sH(t,e){let i=[],a=[];return t.forEach(i=>{if("cssRules"in i)try{sa(i.cssRules||[]).forEach((t,r)=>{if(t.type===CSSRule.IMPORT_RULE){let n=r+1,s=t.href,o=sV(s).then(t=>s$(t,e)).then(t=>sW(t).forEach(t=>{try{i.insertRule(t,t.startsWith("@import")?n+=1:i.cssRules.length)}catch(e){console.error("Error inserting rule from remote css",{rule:t,error:e})}})).catch(t=>{console.error("Error loading remote css",t.toString())});a.push(o)}})}catch(n){let r=t.find(t=>null==t.href)||document.styleSheets[0];null!=i.href&&a.push(sV(i.href).then(t=>s$(t,e)).then(t=>sW(t).forEach(t=>{r.insertRule(t,r.cssRules.length)})).catch(t=>{console.error("Error loading remote stylesheet",t)})),console.error("Error inlining remote css file",n)}}),Promise.all(a).then(()=>(t.forEach(t=>{if("cssRules"in t)try{sa(t.cssRules||[]).forEach(t=>{i.push(t)})}catch(e){console.error(`Error while reading CSS rules from ${t.href}`,e)}}),i))}async function sq(t,e){if(null==t.ownerDocument)throw Error("Provided element is not within a Document");let i=sa(t.ownerDocument.styleSheets);return(await sH(i,e)).filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>sO(t.style.getPropertyValue("src")))}function sG(t){return t.trim().replace(/["']/g,"")}async function sZ(t,e){let i,a=await sq(t,e),r=(i=new Set,!function t(e){(e.style.fontFamily||getComputedStyle(e).fontFamily).split(",").forEach(t=>{i.add(sG(t))}),Array.from(e.children).forEach(e=>{e instanceof HTMLElement&&t(e)})}(t),i);return(await Promise.all(a.filter(t=>r.has(sG(t.style.fontFamily))).map(t=>{let i=t.parentStyleSheet?t.parentStyleSheet.href:null;return sM(t.cssText,i,e)}))).join("\n")}async function sY(t,e){let i=null!=e.fontEmbedCSS?e.fontEmbedCSS:e.skipFonts?null:await sZ(t,e);if(i){let e=document.createElement("style"),a=document.createTextNode(i);e.appendChild(a),t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e)}}async function sX(t,e={}){let{width:i,height:a}=so(t,e),r=await sE(t,e,!0);return await sY(r,e),await sF(r,e),!function(t,e){let{style:i}=t;e.backgroundColor&&(i.backgroundColor=e.backgroundColor),e.width&&(i.width=`${e.width}px`),e.height&&(i.height=`${e.height}px`);let a=e.style;null!=a&&Object.keys(a).forEach(t=>{i[t]=a[t]})}(r,e),await sc(r,i,a)}async function sK(t,e={}){let{width:i,height:a}=so(t,e),r=await sX(t,e),n=await sl(r),s=document.createElement("canvas"),o=s.getContext("2d"),l=e.pixelRatio||function(){let t,e;try{e=t$.default}catch(t){}let i=e&&e.env?e.env.devicePixelRatio:null;return i&&Number.isNaN(t=parseInt(i,10))&&(t=1),t||window.devicePixelRatio||1}(),d=e.canvasWidth||i,c=e.canvasHeight||a;return s.width=d*l,s.height=c*l,!e.skipAutoScale&&(s.width>16384||s.height>16384)&&(s.width>16384&&s.height>16384?s.width>s.height?(s.height*=16384/s.width,s.width=16384):(s.width*=16384/s.height,s.height=16384):s.width>16384?(s.height*=16384/s.width,s.width=16384):(s.width*=16384/s.height,s.height=16384)),s.style.width=`${d}`,s.style.height=`${c}`,e.backgroundColor&&(o.fillStyle=e.backgroundColor,o.fillRect(0,0,s.width,s.height)),o.drawImage(n,0,0,s.width,s.height),s}async function sJ(t,e={}){return(await sK(t,e)).toDataURL()}let sQ=[{id:1,title:"UI/UX 디자인",icon:p,desc:"Figma로 화면 구조를 만듭니다.",tool:"figma"},{id:2,title:"영상 편집",icon:m,desc:"홍보 영상 구성 및 설계를 진행합니다.",tool:"premiere"},{id:5,title:"애니메이션 생성",icon:k,desc:"AI로 영상 에셋을 제작합니다.",tool:"animation_gen"},{id:6,title:"AI 드로잉 이미지 생성",icon:x,desc:"실시간 AI 드로잉 및 포토샵과 연동합니다.",tool:"adobe_connect"}],s0=[],s1=()=>{let[t,e]=(0,l.useState)(!1);return(0,s.jsxs)("div",{"data-asset-id":"toggle_menu","data-asset-name":"toggle_menu_bg",className:"bg-white/95 backdrop-blur-xl p-8 rounded-[3rem] shadow-[0_20px_50px_rgba(255,105,180,0.2)] border border-[#d4cfc0]/20 flex flex-col items-center gap-6 relative group/toggle",children:[(0,s.jsx)("div",{"data-asset-id":"user_profile_icon","data-asset-name":"user_profile_icon",className:"w-24 h-24 rounded-full bg-gradient-to-br from-[#546147] to-[#546147] flex items-center justify-center shadow-lg shadow-[#d4cfc0]/30",children:(0,s.jsx)(v,{size:40,className:"text-[#4a463d]"})}),(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("h3",{"data-asset-id":"session_title","data-asset-name":"session_title_text",className:"text-xl font-black text-[#8c8270] tracking-tight",children:"Game Session"}),(0,s.jsx)("p",{"data-asset-id":"experimental_tag","data-asset-name":"experimental_tag_text",className:"text-[#56604e] text-xs font-bold uppercase tracking-widest mt-1",children:"Experimental UI"})]}),(0,s.jsx)("button",{"data-asset-id":"more_button","data-asset-name":"more_button_icon",onClick:()=>e(!t),className:`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${t?"bg-[#d4cfc0] text-[#4a463d] rotate-90":"bg-[#d4cfc0]/10 text-[#4a463d]/30 hover:bg-[#d4cfc0]/10 hover:text-[#56604e]"}`,children:(0,s.jsx)(j,{size:24})}),t&&(0,s.jsxs)("div",{"data-asset-id":"menu_dropdown","data-asset-name":"menu_dropdown_bg",className:"flex flex-col gap-2 w-48 p-2 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-[#d4cfc0]/10 absolute top-full mt-4 z-50",children:[(0,s.jsxs)("button",{"data-asset-id":"option_item","data-asset-name":"option_item",className:"flex items-center gap-3 w-full p-4 hover:bg-[#d4cfc0]/10 rounded-2xl transition-colors text-[#4a463d]/60 hover:text-[#546147] group",children:[(0,s.jsx)("div",{className:"p-2 bg-[#fdead3]/20 rounded-xl group-hover:bg-white group-hover:shadow-sm",children:(0,s.jsx)(_,{size:16})}),(0,s.jsx)("span",{className:"text-base font-black uppercase tracking-wider",children:"Option"})]}),(0,s.jsxs)("button",{"data-asset-id":"save_item","data-asset-name":"save_item",className:"flex items-center gap-3 w-full p-4 hover:bg-[#d4cfc0]/10 rounded-2xl transition-colors text-[#4a463d]/60 hover:text-[#546147] group",children:[(0,s.jsx)("div",{className:"p-2 bg-[#fdead3]/20 rounded-xl group-hover:bg-white group-hover:shadow-sm",children:(0,s.jsx)(S,{size:16})}),(0,s.jsx)("span",{className:"text-base font-black uppercase tracking-wider",children:"Save"})]})]})]})},s2=()=>(0,s.jsxs)("div",{"data-asset-id":"vn_controls","data-asset-name":"vn_controls_bg",className:"bg-white/80 backdrop-blur-2xl p-10 rounded-[4rem] shadow-[0_32px_64px_rgba(0,0,0,0.1)] border border-white flex flex-col items-center gap-10 w-full max-w-lg",children:[(0,s.jsxs)("div",{"data-asset-id":"dialog_box","data-asset-name":"dialog_box_bg",className:"w-full bg-[#fdead3]/20/50 rounded-[2.5rem] p-8 border border-[#d4cfc0]/10/50 relative overflow-hidden",children:[(0,s.jsx)("div",{className:"absolute top-0 left-0 w-1 h-full bg-[#d4cfc0]"}),(0,s.jsxs)("div",{className:"flex items-center gap-3 mb-4",children:[(0,s.jsx)("div",{className:"w-2 h-2 rounded-full bg-[#d4cfc0] animate-pulse"}),(0,s.jsx)("span",{"data-asset-id":"char_name","data-asset-name":"char_name_text",className:"text-xs font-black text-[#56604e] uppercase tracking-[0.2em]",children:"Miyu"})]}),(0,s.jsx)("p",{"data-asset-id":"dialog_text","data-asset-name":"dialog_text_content",className:"text-[#4a463d]/60 font-medium leading-relaxed italic text-lg",children:'"이 아름다운 세상에서, 우리의 이야기가 시작됩니다..."'})]}),(0,s.jsxs)("div",{className:"flex items-center gap-6",children:[(0,s.jsx)("button",{"data-asset-id":"rewind_btn","data-asset-name":"rewind_icon",className:"w-14 h-14 rounded-2xl bg-[#fdead3]/20 text-[#4a463d]/30 hover:text-[#56604e] hover:bg-[#d4cfc0]/10 transition-all flex items-center justify-center",children:(0,s.jsx)(E,{size:24})}),(0,s.jsx)("button",{"data-asset-id":"play_btn","data-asset-name":"play_icon_large",className:"w-20 h-20 rounded-[2rem] bg-gradient-to-br from-[#546147] to-[#546147] text-[#4a463d] shadow-xl shadow-[#d4cfc0]/40 hover:scale-110 transition-all flex items-center justify-center",children:(0,s.jsx)(z,{size:32,className:"ml-1"})}),(0,s.jsx)("button",{"data-asset-id":"forward_btn","data-asset-name":"forward_icon",className:"w-14 h-14 rounded-2xl bg-[#fdead3]/20 text-[#4a463d]/30 hover:text-[#56604e] hover:bg-[#d4cfc0]/10 transition-all flex items-center justify-center",children:(0,s.jsx)(A,{size:24})})]})]}),s4=()=>(0,s.jsxs)("div",{"data-asset-id":"save_slots",className:"w-full max-w-4xl p-12 relative flex gap-12 overflow-hidden group/save min-h-[600px]",children:[(0,s.jsx)("div",{"data-asset-name":"save_menu_bg","data-asset-padding":"40",className:"absolute inset-0 bg-[#fdead3]/10 rounded-[4rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.4)] transition-all z-0"}),(0,s.jsxs)("div",{className:"flex-1 flex flex-col gap-6 relative z-10",children:[[1,2,3].map(t=>(0,s.jsxs)("div",{"data-asset-id":`save_slot_${t}`,className:`group/slot relative rounded-[2.5rem] transition-all duration-500 ${1===t?"scale-[1.02]":""}`,children:[(0,s.jsx)("div",{"data-asset-name":`save_slot_${t}_frame_bg`,"data-asset-padding":"20",className:`absolute inset-0 rounded-[2.5rem] border border-white/10 transition-all ${1===t?"bg-[#9ea897] shadow-md shadow-xl shadow-slate-200/50":"bg-[#fdead3]/10"}`,children:(0,s.jsx)("div",{className:"absolute inset-[1px] bg-[#0c0c0e]/90 rounded-[2.45rem]"})}),(0,s.jsxs)("div",{className:"relative z-10 p-6 flex items-center gap-8",children:[(0,s.jsxs)("div",{"data-asset-id":`slot_thumb_${t}`,"data-asset-name":`slot_${t}_thumbnail`,"data-asset-padding":"10",className:"w-40 h-24 rounded-3xl bg-[#8c8270] flex-shrink-0 relative overflow-hidden border border-transparent shadow-inner",children:[t<3?(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-[#d4cfc0]/10 to-[#546147]/10"}):(0,s.jsx)("div",{className:"absolute inset-0 flex items-center justify-center text-[#4a463d]/60 font-black text-[10px] uppercase tracking-widest bg-[#fdead3]/20 italic",children:"Empty Slot"}),(0,s.jsx)("div",{"data-asset-name":`slot_${t}_tag`,className:"absolute bottom-2 left-2 px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[8px] font-black text-[#4a463d]/50 border border-white/10 uppercase tracking-widest",children:t<3?"Prolog":"No Data"})]}),(0,s.jsxs)("div",{className:"flex-1",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3 mb-3",children:[(0,s.jsxs)("span",{"data-asset-id":`slot_label_${t}`,"data-asset-name":`slot_${t}_badge`,className:"px-4 py-1.5 bg-[#d4cfc0] rounded-full text-[9px] font-black text-[#4a463d] uppercase tracking-wider shadow-lg shadow-[#d4cfc0]/20",children:["Slot 0",t]}),t<3&&(0,s.jsx)("span",{"data-asset-name":`slot_${t}_chapter`,className:"text-xs font-black text-[#4a463d] tracking-widest uppercase",children:"Chapter 1"})]}),(0,s.jsx)("h4",{"data-asset-id":`slot_title_${t}`,"data-asset-name":`slot_${t}_title`,className:`text-xl font-black tracking-tight italic uppercase ${t<3?"text-[#4a463d]":"text-[#4a463d]/20"}`,children:1===t?"첫 번째 만남":2===t?"꿈의 시작":"비어 있음"}),(0,s.jsxs)("div",{className:"flex items-center gap-4 mt-3",children:[(0,s.jsxs)("div",{"data-asset-name":`slot_${t}_time_info`,className:"flex items-center gap-2 text-[#4a463d]/30",children:[(0,s.jsx)(T,{size:10}),(0,s.jsx)("span",{className:"text-[9px] font-bold tracking-widest",children:"2026.03.09 12:49"})]}),(0,s.jsxs)("div",{"data-asset-name":`slot_${t}_playtime_info`,className:"flex items-center gap-2 text-[#4a463d]/30",children:[(0,s.jsx)(P,{size:10}),(0,s.jsx)("span",{className:"text-[9px] font-bold tracking-widest",children:"01:24:55"})]})]})]}),(0,s.jsx)("button",{"data-asset-id":`slot_delete_${t}`,"data-asset-name":"delete_button",className:`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${t<3?"bg-red-500/10 text-red-500/40 hover:bg-red-500 hover:text-[#4a463d] hover:rotate-90":"hidden"}`,children:(0,s.jsx)(C,{size:18})})]})]},t)),(0,s.jsx)("div",{className:"flex items-center gap-2 mt-4 px-2",children:[1,2,3,4,5].map(t=>(0,s.jsx)("button",{className:`w-10 h-10 rounded-2xl text-sm font-black transition-all border ${1===t?"bg-[#546147] border-indigo-400 text-[#4a463d] shadow-lg shadow-[#546147]/20":"bg-[#fdead3]/10 border-transparent text-[#4a463d]/20 hover:text-[#4a463d]/60 hover:bg-white/10"}`,children:t},t))})]}),(0,s.jsxs)("div",{className:"w-80 flex flex-col justify-between border-l border-transparent pl-12 relative z-10",children:[(0,s.jsxs)("div",{className:"space-y-8",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("h2",{"data-asset-id":"game_title","data-asset-name":"game_main_title",className:"text-3xl font-black text-[#4a463d] italic tracking-tighter uppercase leading-tight mb-2",children:["우리 집",(0,s.jsx)("br",{}),"천사냥이"]}),(0,s.jsx)("div",{className:"w-12 h-1 bg-[#d4cfc0] rounded-full"})]}),(0,s.jsx)("nav",{className:"flex flex-col gap-4",children:["게임 시작","불러오기","앨범","설정","종료"].map((t,e)=>(0,s.jsxs)("button",{className:`group/nav text-left flex items-center gap-4 transition-all ${1===e?"text-[#56604e]":"text-[#4a463d]/30 hover:text-[#4a463d]"}`,children:[(0,s.jsxs)("span",{className:"text-xs font-black tracking-widest opacity-20",children:["0",e+1]}),(0,s.jsx)("span",{className:"text-lg font-black uppercase tracking-tight italic group-hover/nav:translate-x-2 transition-transform",children:t})]},t))})]}),(0,s.jsxs)("div",{className:"bg-[#fdead3]/10 rounded-[2.5rem] p-8 border border-transparent backdrop-blur-xl",children:[(0,s.jsx)("p",{"data-asset-id":"confirmation_msg","data-asset-name":"confirmation_text",className:"text-sm font-black text-[#4a463d]/60 uppercase tracking-widest mb-6 leading-relaxed",children:"슬롯을 선택하시겠습니까?"}),(0,s.jsxs)("div",{className:"flex gap-4",children:[(0,s.jsx)("button",{className:"flex-1 py-4 bg-[#546147] hover:bg-[#546147] text-[#4a463d] rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-[#546147]/20 transition-all active:scale-95",children:"Yes"}),(0,s.jsx)("button",{className:"flex-1 py-4 bg-[#fdead3]/10 hover:bg-white/10 text-[#4a463d]/50 rounded-2xl text-xs font-black uppercase tracking-widest border border-transparent transition-all",children:"No"})]})]})]}),(0,s.jsx)("div",{className:"absolute top-0 right-0 w-[400px] h-[400px] bg-[#d4cfc0]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"}),(0,s.jsx)("div",{className:"absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#546147]/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"})]}),s3=()=>(0,s.jsxs)("div",{"data-asset-id":"character_stats","data-asset-name":"char_selection_bg",className:"w-full flex gap-8 p-12 bg-[#fdead3]/20 rounded-[4rem] border border-transparent shadow-3xl overflow-hidden relative",children:[(0,s.jsx)("div",{className:"absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4cfc0]/20 blur-[150px] rounded-full animate-pulse"}),(0,s.jsxs)("div",{className:"w-80 flex flex-col gap-6 z-10",children:[(0,s.jsxs)("div",{className:"flex items-center gap-4 mb-4",children:[(0,s.jsx)("div",{"data-asset-id":"profile_icon_container","data-asset-name":"profile_icon",className:"p-3 bg-[#d4cfc0] rounded-2xl text-[#4a463d] shadow-lg shadow-[#d4cfc0]/30",children:(0,s.jsx)(v,{size:28})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{"data-asset-id":"profile_title","data-asset-name":"profile_title_text",className:"text-2xl font-black text-[#4a463d] italic tracking-tighter uppercase leading-none",children:"Profile"}),(0,s.jsx)("p",{className:"text-[10px] text-[#56604e] font-black tracking-[.3em] uppercase mt-1",children:"Status: Active"})]})]}),(0,s.jsxs)("div",{"data-asset-id":"stats_card","data-asset-name":"stats_card_bg",className:"flex-1 bg-white/60 border border-[#d4cfc0]/30 backdrop-blur-md shadow-sm shadow-[#d4cfc0]/10/5 bg-[#fdead3]/10 border border-white/10 rounded-[2.5rem] p-8 flex flex-col gap-8 backdrop-blur-3xl",children:[(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center px-1",children:[(0,s.jsx)("span",{"data-asset-id":"affinity_label","data-asset-name":"affinity_label_text",className:"text-xs font-black text-[#4a463d]/40 uppercase tracking-widest",children:"Affinity"}),(0,s.jsx)("span",{"data-asset-id":"affinity_rank","data-asset-name":"affinity_rank_text",className:"text-xs font-black text-[#546147] uppercase",children:"Rank S"})]}),(0,s.jsx)("div",{"data-asset-id":"affinity_bar_bg","data-asset-name":"affinity_bar_bg",className:"w-full h-3 bg-[#fdead3]/10 rounded-full overflow-hidden border border-transparent",children:(0,s.jsx)("div",{"data-asset-id":"affinity_bar_fill","data-asset-name":"affinity_bar_fill",className:"w-[85%] h-full bg-gradient-to-r from-[#d4cfc0] to-[#546147] shadow-[0_0_15px_rgba(236,72,153,0.5)]"})})]}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,s.jsxs)("div",{"data-asset-id":"defense_stat","data-asset-name":"defense_stat_box",className:"p-4 bg-white/[0.03] rounded-2xl border border-transparent",children:[(0,s.jsx)(I,{size:16,className:"text-[#4a463d] mb-2"}),(0,s.jsx)("p",{className:"text-[9px] text-[#4a463d]/30 font-black uppercase tracking-tighter",children:"Defense"}),(0,s.jsxs)("p",{className:"text-lg font-black text-[#4a463d] tracking-tighter",children:["89",(0,s.jsx)("span",{className:"text-[10px] text-[#4a463d]/50",children:"%"})]})]}),(0,s.jsxs)("div",{"data-asset-id":"power_stat","data-asset-name":"power_stat_box",className:"p-4 bg-white/[0.03] rounded-2xl border border-transparent",children:[(0,s.jsx)(w,{size:16,className:"text-[#546147] mb-2"}),(0,s.jsx)("p",{className:"text-[9px] text-[#4a463d]/30 font-black uppercase tracking-tighter",children:"Power"}),(0,s.jsx)("p",{className:"text-lg font-black text-[#4a463d] tracking-tighter",children:"MAX"})]})]})]})]}),(0,s.jsx)("div",{className:"flex-1 relative z-10 flex flex-col items-center justify-center",children:(0,s.jsxs)("div",{className:"relative w-full h-[300px] flex items-center justify-center group/stage",children:[(0,s.jsx)("div",{className:"absolute w-[250px] h-[250px] border-2 border-transparent rounded-full animate-[spin_20s_linear_infinite]"}),(0,s.jsx)("div",{className:"relative z-20 h-full flex items-center justify-center drop-shadow-[0_0_50px_rgba(236,72,153,0.3)]",children:(0,s.jsxs)("div",{"data-asset-id":"hero_text_overlay","data-asset-name":"hero_name_badge",className:"text-center",children:[(0,s.jsx)("h4",{"data-asset-id":"hero_name","data-asset-name":"hero_name_text",className:"text-6xl font-black text-[#4a463d] italic tracking-tighter mb-1",children:"MIYU"}),(0,s.jsx)("p",{"data-asset-id":"hero_role","data-asset-name":"hero_role_text",className:"text-[#546147] text-base font-black uppercase tracking-[0.4em]",children:"Celestial Guardian"})]})})]})})]}),s5=()=>(0,s.jsxs)("div",{"data-asset-id":"affinity_system","data-asset-name":"affinity_system_full_layout",className:"w-full h-full flex gap-10 p-12 bg-[#fdead3]/20 rounded-[4rem] border border-transparent shadow-3xl overflow-hidden relative",children:[(0,s.jsx)("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#546147]/10 blur-[180px] rounded-full"}),(0,s.jsxs)("div",{className:"flex-1 flex flex-col gap-8 z-10",children:[(0,s.jsxs)("div",{"data-asset-id":"affinity_header","data-asset-name":"affinity_header_area",className:"flex items-center gap-6",children:[(0,s.jsx)("div",{"data-asset-id":"heart_icon_box","data-asset-name":"heart_icon_active",className:"p-5 bg-gradient-to-br from-[#d4cfc0] to-[#546147] rounded-[2rem] text-[#4a463d] shadow-xl shadow-slate-200/50 shadow-[#d4cfc0]/40",children:(0,s.jsx)(L,{size:36})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{"data-asset-id":"resonance_title","data-asset-name":"resonance_title_text",className:"text-6xl font-black text-[#4a463d] italic tracking-tighter uppercase leading-none",children:"Affinity Resonance"}),(0,s.jsx)("p",{"data-asset-id":"connection_stats","data-asset-name":"connection_stats_text",className:"text-[11px] text-[#56604e] font-black tracking-[0.4em] uppercase mt-2",children:"Core Connection: 88.4%"})]})]}),(0,s.jsx)("div",{"data-asset-id":"resonance_visualizer","data-asset-name":"resonance_visualizer_box",className:"flex-1 bg-white/60 border border-[#d4cfc0]/30 backdrop-blur-md shadow-sm shadow-[#d4cfc0]/10/5 bg-white/[0.03] border border-white/10 rounded-[3.5rem] p-12 flex flex-col items-center justify-center gap-12 relative overflow-hidden backdrop-blur-3xl",children:(0,s.jsxs)("div",{className:"relative w-64 h-64 flex items-center justify-center",children:[(0,s.jsx)("div",{className:"absolute inset-0 border-[6px] border-transparent rounded-full"}),(0,s.jsx)("div",{"data-asset-id":"visualizer_ring","data-asset-name":"visualizer_ring",className:"absolute inset-0 border-[6px] border-[#d4cfc0] rounded-full border-t-transparent border-l-transparent rotate-[45deg] shadow-[0_0_30px_rgba(236,72,153,0.3)]"}),(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsx)("h4",{"data-asset-id":"bonded_status","data-asset-name":"bonded_status_text",className:"text-6xl font-black text-[#4a463d] italic tracking-tighter leading-none mb-2",children:"Deep"}),(0,s.jsx)("div",{"data-asset-id":"bonded_badge","data-asset-name":"bonded_badge",className:"px-6 py-2 bg-[#d4cfc0] text-[#4a463d] rounded-full text-sm font-black uppercase tracking-[0.5em] shadow-xl shadow-[#d4cfc0]/40",children:"Bonded"})]})]})})]})]});function s8(){let[t,e]=(0,l.useState)(1),i=(0,l.useRef)(t),[a,r]=(0,l.useState)(null),[n,d]=(0,l.useState)(null),[c,u]=(0,l.useState)(null),[f,h]=(0,l.useState)(!1),[p,j]=(0,l.useState)(""),[A,E]=(0,l.useState)(""),[P,I]=(0,l.useState)(""),[L,Z]=(0,l.useState)(!1),[Y,X]=(0,l.useState)("무엇을 도와드릴까요? 디자인 가이드나 애니메이션 생성 명령을 해보세요."),[K,J]=(0,l.useState)(!1),[Q,tt]=(0,l.useState)(!1),[te,ti]=(0,l.useState)(1),[ta,tr]=(0,l.useState)(!0),[tn,ts]=(0,l.useState)(0),[to,tl]=(0,l.useState)(!1),[td,tc]=(0,l.useState)([]),[tu,tf]=(0,l.useState)(""),[th,tp]=(0,l.useState)([]),[tm,tb]=(0,l.useState)(!1),[tg,tx]=(0,l.useState)(!1),[tv,ty]=(0,l.useState)(3),[tw,tk]=(0,l.useState)(!1),[t_,tj]=(0,l.useState)(8),[tS,tz]=(0,l.useState)(.35),[tN,tA]=(0,l.useState)([]),[tE,tC]=(0,l.useState)(""),[tT,tP]=(0,l.useState)(!1),[tR,tO]=(0,l.useState)(!0),[tM,tI]=(0,l.useState)([]),[tD,tL]=(0,l.useState)("default"),tB=(0,l.useRef)(tD);(0,l.useEffect)(()=>{i.current=t},[t]),(0,l.useEffect)(()=>{tB.current=tD},[tD]);let[tF,tU]=(0,l.useState)(null),[tV,t$]=(0,l.useState)(""),[tW,tH]=(0,l.useState)(!1),tq=tM.find(t=>t.id===tD)||{id:"default",name:"Main Project",slideIds:s0},tG=tq.slideIds,[tZ,tY]=(0,l.useState)(null),[tX,tK]=(0,l.useState)(!1),[tJ,tQ]=(0,l.useState)(null),[t0,t1]=(0,l.useState)(null),[t2,t4]=(0,l.useState)([]),[t3,t5]=(0,l.useState)(!1),[t8,t6]=(0,l.useState)(!0),[t9,t7]=(0,l.useState)(!1),[et,ee]=(0,l.useState)(!1),[ei,ea]=(0,l.useState)("cinematic"),[er,en]=(0,l.useState)("고품질, 화려한 일러스트, 귀여운 고양이 캐릭터, 게임 아트 스타일"),[es,eo]=(0,l.useState)("낮은 품질, 흐릿함, 워터마크, 텍스트, 뭉개진 손가락"),[el,ed]=(0,l.useState)(.5),[ec,eu]=(0,l.useState)(4e3),[ef,eh]=(0,l.useState)(null),[ep,em]=(0,l.useState)(!1),[eb,eg]=(0,l.useState)(!1),[ex,ev]=(0,l.useState)(!1),[ey,ew]=(0,l.useState)("AI 드로잉 준비됨"),[ek,e_]=(0,l.useState)("animagineXLV31_v31.safetensors"),[ej,eS]=(0,l.useState)("4x-UltraSharp.pth"),[ez,eN]=(0,l.useState)(!1),[eA,eE]=(0,l.useState)("ps_sync"),[eC,eT]=(0,l.useState)("(2d animation:1.3), (flat coloring:1.2), (simple style:1.2), (flat shadows:1.2), clean lineart, vibrant colors, cinematic lighting, highly detailed"),[eP,eR]=(0,l.useState)("lowres, bad anatomy, worst quality, distorted face, blurry, 3d, realistic, photorealistic, rough sketch, blurry lines, text, watermark"),[eO,eM]=(0,l.useState)("Laftel Anime"),[eI,eD]=(0,l.useState)(!1),[eL,eB]=(0,l.useState)("mm_sdxl_v10_119.ckpt"),[eF,eU]=(0,l.useState)(null),[eV,e$]=(0,l.useState)(!1),[eW,eH]=(0,l.useState)(""),[eq,eG]=(0,l.useState)(!1),[eZ,eY]=(0,l.useState)(""),[eX,eK]=(0,l.useState)([]),[eJ,eQ]=(0,l.useState)(null),[e0,e1]=(0,l.useState)(!1),[e2,e4]=(0,l.useState)([]),[e3,e5]=(0,l.useState)("512x512"),[e8,e6]=(0,l.useState)("1:1"),[e9,e7]=(0,l.useState)("fintech bento grid analytics dashboard, revenue metrics, crypto card, transaction table, sleek dark mode"),[it,ie]=(0,l.useState)("character, anime, illustration, portrait, photo of person, 3d human, face, messy text, blurry, distorted icons"),[ii,ia]=(0,l.useState)(!1),[ir,is]=(0,l.useState)("UiUX-SDXL.safetensors"),[io,il]=(0,l.useState)("bento"),[id,ic]=(0,l.useState)("web"),[iu,ih]=(0,l.useState)(0),[ip,im]=(0,l.useState)([{time:"00:00",text:""}]),[ib,ig]=(0,l.useState)(!1),[ix,iv]=(0,l.useState)(null),[iy,iw]=(0,l.useState)(null),[ik,i_]=(0,l.useState)(!1),[ij,iS]=(0,l.useState)(!1),[iz,iN]=(0,l.useState)(null),[iA,iE]=(0,l.useState)(!1),iC=["nsfw","nude","naked","erotic","sexy","sex","porn","bikini","lingerie","undressing","nipples","pussy","penis","cum","adult","18+","19금","19","r18","r-18","r19","r-19","성인","노출","알몸","가슴","엉덩이","젖가슴","성기","보지","자지","포르노","hentai","ecchi","lewd","topless","bottomless","bra ","panties"],iT=(t,e)=>{let i;return i=(e||"").toLowerCase(),!!iC.some(t=>i.includes(t.toLowerCase()))&&!ik&&(iN(()=>t),iS(!0),!0)};(0,l.useEffect)(()=>{r(null),d(null),u(null),t4([])},[t,eA]);let iP=async e=>{e.preventDefault(),t5(!1);let i=Array.from(e.dataTransfer.files).filter(t=>t.type.startsWith("image/")||t.type.startsWith("video/")||t.type.startsWith("audio/"));if(5===t){if(t2.length+i.length>6)return void eH("⚠️ Animation Forge supports up to 6 keyframes.")}else if(t2.length+i.length>1)return void eH("⚠️ This mode supports only 1 source image.");let a=await Promise.all(i.map(async t=>new Promise(e=>{let i=new FileReader;i.onload=i=>{let a=(i.target?.result).split(",")[1],r="image/png";t.type.startsWith("video/")&&(r="video/mp4"),t.type.startsWith("audio/")&&(r="audio/mpeg"),e({name:t.name,data:a,type:t.type||r,previewUrl:URL.createObjectURL(t)})},i.readAsDataURL(t)})));t4(t=>[...t,...a])};(0,l.useEffect)(()=>()=>{t2.forEach(t=>URL.revokeObjectURL(t.previewUrl))},[t2]),(0,l.useEffect)(()=>{st&&st.onMessage(t=>{if("TOOL_STATUS"===t.type){let{tool:i,action:a,status:n,message:s,verified:o}=t.payload;if(r(t.payload),"RUNNING"===n){Z(!0),X(`${s}`);let t=sQ.find(t=>t.tool===i);t&&e(t.id),"photoshop"===i&&"ai_animate"===a&&e$(!0),"photoshop"===i&&("ai_draw_once"===a||"ai_draw_start"===a)&&em(!0)}else"COMPLETED"===n?(Z(!1),X(`작업이 완료되었습니다. ${s.split("\n")[0]}`),"photoshop"===i&&(e$(!1),em(!1),"ai_cancel"===a&&eH("🚫 작업이 취소되었습니다.")),"auth"===i&&o&&(i_(!0),localStorage.setItem("isAdultVerified","true"),iS(!1),iE(!1),iz&&(iz(),iN(null)))):"ERROR"===n&&(Z(!1),e$(!1),em(!1),eH(`❌ ${s}`),"auth"===i&&(iE(!1),alert(s)))}else if("FOLDER_SELECTED"===t.type)tQ(t.payload),eY(t.payload.path),st?.executeTool("photoshop","scan_assets",{folderPath:t.payload.path});else if("PREVIEW_UPDATE"===t.type)d(t.payload.url);else if("VIDEO_UPDATE"===t.type)u(t.payload.url),eU(t.payload.url),e$(!1),eH("✨ 애니메이션 생성 완료!");else if("AI_DRAW_RESULT"===t.type){let e=t.payload.imageBase64||t.payload.image;e?(e.startsWith("data:")||(e=`data:image/png;base64,${e}`),"ui_design"==("ui_design"!==t.payload.target&&(1024!==t.payload.width||768!==t.payload.height)&&(1!==i.current||t.payload.target)?"ai_drawing":"ui_design")?(tI(t=>t.map(t=>{if(t.id===tB.current){let i=[...t.slideIds,e];return ts(i.length-1),{...t,slideIds:i}}return t})),ew("✨ UI 디자인 시안이 워크스페이스에 추가되었습니다!")):(eh(e),ew("✨ AI 이미지 생성 완료!")),ev(!1)):console.error("AI_DRAW_RESULT received but no image data found",t.payload)}else if("AI_DRAW_STATUS"===t.type)em(t.payload.active),t.payload.active||(ev(!1),ew("AI 드로잉 중지됨"));else if("AI_DRAW_PROGRESS"===t.type)ew(t.payload.message),"generating"===t.payload.stage&&ev(!0),"error"===t.payload.stage&&ev(!1),"analysis_done"===t.payload.stage&&(eT(t.payload.message),ew("✨ Magic Tags Applied!"));else if("COMFYUI_STATUS"===t.type){if(e1(t.payload.connected),t.payload.models){let e=t.payload.models;e4(e),!(e.length>0)||ek&&e.includes(ek)||(e_(e[0]),console.log("Model missing or invalid, auto-switched to:",e[0]))}t.payload.motionModules&&(tc(t.payload.motionModules),!tu&&t.payload.motionModules.length>0&&tf(t.payload.motionModules[0])),t.payload.upscaleModels&&(tp(t.payload.upscaleModels),!ej&&t.payload.upscaleModels.length>0&&eS(t.payload.upscaleModels[0])),t.payload.llmModels&&(tA(t.payload.llmModels),!tE&&t.payload.llmModels.length>0&&tC(t.payload.llmModels[0]))}else if("ASSET_LIST"===t.type)eK(t.payload.images);else if("MAGIC_PROMPT_RESULT"===t.type)"animation"===t.payload.targetType?(t.payload.prompt&&eT(t.payload.prompt),t.payload.negativePrompt&&eR(t.payload.negativePrompt),eH("✨ AI 마법 번역 및 프롬프트 적용 완료!")):"ai_draw"===t.payload.targetType?(t.payload.prompt&&en(t.payload.prompt),t.payload.negativePrompt&&eo(t.payload.negativePrompt)):"ui_design"===t.payload.targetType&&(t.payload.prompt&&e7(t.payload.prompt),t.payload.negativePrompt&&ie(t.payload.negativePrompt),ew("✨ UI 디자인 번역 및 매직 프롬프트 적용 완료!")),tP(!1);else if("SET_CONFIG"===t.type){let{photoshopPath:e,illustratorPath:i}=t.payload;e&&j(e),i&&E(i)}})},[]),(0,l.useEffect)(()=>{let t=localStorage.getItem("workspaces"),e=localStorage.getItem("activeWorkspaceId");if(t)try{tI(JSON.parse(t))}catch(t){console.error("Failed to parse workspaces",t)}else tI([{id:"default",name:"Main Project",slideIds:s0}]);e&&tL(e),"true"===localStorage.getItem("isAdultVerified")&&i_(!0)},[]),(0,l.useEffect)(()=>{tM.length>0&&localStorage.setItem("workspaces",JSON.stringify(tM))},[tM]),(0,l.useEffect)(()=>{localStorage.setItem("activeWorkspaceId",tD)},[tD]),(0,l.useEffect)(()=>{st&&st.executeTool("config","get_config")},[st]),(0,l.useEffect)(()=>{if(!st)return;st?.executeTool("photoshop","check_comfyui");let t=setInterval(()=>{st?.executeTool("photoshop","check_comfyui")},3e3);return()=>clearInterval(t)},[t,st]);let iR=()=>{let[t,e]=e3.split("x").map(Number);if(iT(()=>iR(),er))return;let i="i2i"===eA&&t2.length>0?t2[0].data:void 0;"i2i"!==eA||i?(ew("t2i"===eA?"🧠 AI 자율 상상 생성 중...":"i2i"===eA?"🖼️ 참조 이미지 기반 생성 중...":"📸 포토샵 화면 동기화 생성 중..."),st?.executeTool("photoshop",eb&&"ps_sync"===eA?"ai_draw_start":"ai_draw_once",{target:"ai_drawing",mode:eA,imageBase64:i,prompt:er,negativePrompt:es,denoisingStrength:"t2i"===eA?1:el,interval:ec,modelName:ek,width:t,height:e,upscale:ez,upscaleModel:ej})):ew("⚠️ 생성할 이미지를 먼저 업로드해주세요!")},iO=()=>{st?.executeTool("photoshop","ai_draw_stop")},iM=t=>{st?.executeTool("photoshop","ai_draw_settings",t)},iI=()=>{st&&eC&&(iT(()=>iI(),eC)||(tP(!0),eH("🪄 AI 마법 텍스트 번역 시전 중... (한국어 상황 분석)"),st.executeTool("photoshop","ai_magic_prompt",{text:eC,negativeText:eP,targetType:"animation",llmModel:tE,images:t2.map(t=>({name:t.name,data:t.data}))})))},iD=()=>{st&&er&&(iT(()=>iD(),er)||(tP(!0),ew("🪄 LibreTranslate 한국어-영문 번역 중..."),st.executeTool("photoshop","ai_magic_prompt",{text:er,negativeText:es,targetType:"ai_draw"})))},iL=()=>{st&&e9&&(iT(()=>iL(),e9)||(tP(!0),ew("🪄 UI 디자인 한국어-영문 번역 중..."),st.executeTool("photoshop","ai_magic_prompt",{text:e9,negativeText:it,targetType:"ui_design"})))},iB=()=>{if(!st||iT(()=>iB(),eC))return;e$(!0);let t=tR?"🧩 Motion-Guided ":"🎬 Standard ";eH(`${t} 애니메이션 생성 중... (약 2~5분 소요)`),eU(null);let e="";"cinematic"===ei&&(e=", cinematic camera, high dynamic range, masterpiece, best quality"),"slowmo"===ei&&(e=", slow motion, graceful movement, ethereal, high quality"),"handdrawn"===ei&&(e=", hand-drawn style, sketch-like animation, artistic, masterpiece"),st.executeTool("photoshop","ai_animate",{prompt:eC+e,negativePrompt:eP,modelName:ek,motionModule:tu,upscale:tm,upscaleModel:ej,smooth:tg,fps:t_,frameCount:Math.floor((tw?tv:3)*t_),width:512,height:512,useGGUF:eI,denoisingStrength:tS,images:t2.map(t=>({name:t.name,data:t.data})),useMotionGuide:tR,totalDuration:tw?tv:3})},iF=()=>{if(!tV.trim())return void tH(!1);let t={id:Date.now().toString(),name:tV,slideIds:[]};tI([...tM,t]),tL(t.id),ts(0),t$(""),tH(!1)},iU=(t,e)=>{e.trim()&&(tI(tM.map(i=>i.id===t?{...i,name:e}:i)),tU(null))},iV=async t=>{try{tK(!0);let e=document.querySelector(`[data-asset-id="${t}"]`);if(!e)throw Error("Container not found");let i=Array.from(e.querySelectorAll("[data-asset-name]"));if(e.hasAttribute("data-asset-name")&&i.unshift(e),0===i.length)throw Error("No assets found");let a=new se.default,r=a.folder("assets");for(let t of i){let e=t,i=e.getAttribute("data-asset-name")||"unnamed_asset",a=parseInt(e.getAttribute("data-asset-padding")||"0",10),n=await sJ(e,{pixelRatio:4,skipFonts:!1,cacheBust:!0,filter:t=>!(t!==e&&t.hasAttribute&&t.hasAttribute("data-asset-name")),style:a?{padding:`${a}px`}:{}});if(!n||"data:,"===n)continue;let s=n.split(",")[1];r?.file(`${i}.png`,s,{base64:!0})}let n=await a.generateAsync({type:"blob"}),s=document.createElement("a");s.href=URL.createObjectURL(n),s.download=`assets_${t}_HQ.zip`,s.click()}catch(t){console.error("Asset extraction failed:",t),alert("에셋 추출에 실패했습니다.")}finally{tK(!1)}},i$=async(t,e)=>{try{tK(!0);let i=parseInt(t.getAttribute("data-asset-padding")||"0",10),a=await sJ(t,{pixelRatio:4,skipFonts:!1,cacheBust:!0,backgroundColor:"transparent",filter:e=>!(e!==t&&e.hasAttribute&&e.hasAttribute("data-asset-name")),style:i?{padding:`${i}px`}:{}}),r=document.createElement("a");r.download=`${e}.png`,r.href=a,r.click()}catch(t){console.error("Single asset extraction failed:",t),alert("에셋 추출에 실패했습니다.")}finally{tK(!1)}};return(0,s.jsxs)("main",{className:"flex h-screen bg-[#fdead3] text-[#4a463d] overflow-hidden relative font-sans",children:[(0,s.jsx)(n7,{children:!to&&(0,s.jsxs)(n0.aside,{initial:{opacity:0,x:-100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},className:"w-80 bg-white/80 border border-[#d4cfc0]/50 backdrop-blur-xl m-2 md:m-4 rounded-[2rem] flex flex-col p-4 md:p-6 shadow-xl shadow-slate-200/50 border border-transparent relative z-50 overflow-hidden",children:[(0,s.jsxs)("div",{className:"flex items-center gap-4 mb-6 md:mb-12 px-2 relative z-10",children:[(0,s.jsx)("div",{className:"w-12 h-12 bg-[#546147] rounded-2xl flex items-center justify-center shadow-xl shadow-[#546147]/20 border border-[#6b7a5a]/30",children:(0,s.jsx)("span",{className:"text-2xl font-black text-[#e8e4d9] italic",children:"H"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"font-black text-xl tracking-tighter leading-none text-[#4a463d]",children:"THE HANDS"}),(0,s.jsx)("p",{className:"text-[9px] text-[#546147] font-black tracking-[0.3em] uppercase mt-1",children:"Design Supporter"})]})]}),(0,s.jsxs)("div",{className:"flex-1 min-h-0 flex flex-col gap-4 md:gap-6 px-1 relative z-10",children:[(0,s.jsxs)("nav",{className:"flex-none md:flex-shrink-0 space-y-1 md:space-y-1.5 overflow-y-auto scrollbar-hide min-h-[150px] md:min-h-[250px]",children:[(0,s.jsx)("div",{className:"px-3 mb-1 md:mb-2 flex items-center justify-between",children:(0,s.jsx)("p",{className:"text-[10px] md:text-xs font-black text-[#4a463d]/40 tracking-[0.2em] uppercase",children:"Navigation"})}),sQ.map(i=>(0,s.jsxs)("button",{onClick:()=>e(i.id),className:`w-full flex items-center gap-3 md:gap-4 p-2 md:p-4 rounded-[1.2rem] md:rounded-[1.5rem] transition-all duration-500 group relative border ${t===i.id?"bg-[#e8e4d9] text-[#4a463d] border-[#d4cfc0] shadow-xl":"text-[#8c8270] hover:text-[#4a463d] hover:bg-[#e8e4d9]/50 border-transparent hover:border-[#d4cfc0]/30"}`,children:[(0,s.jsx)("div",{className:`p-2 md:p-2.5 rounded-xl transition-all duration-500 ${t===i.id?"bg-[#546147] text-[#e8e4d9] shadow-lg shadow-[#546147]/30 scale-110":"bg-[#4a463d]/5 text-[#4a463d]/40 group-hover:bg-[#4a463d]/10"}`,children:(0,s.jsx)(i.icon,{size:16})}),(0,s.jsxs)("div",{className:"text-left",children:[(0,s.jsx)("p",{className:"text-sm md:text-base font-black tracking-tight",children:i.title}),(0,s.jsxs)("p",{className:"text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] opacity-40 mt-0.5",children:["Level 0",i.id]})]}),t===i.id&&(0,s.jsx)(n0.div,{layoutId:"activeStep",className:"absolute left-0 w-1 h-6 bg-[#546147] rounded-r-full"})]},i.id))]}),(0,s.jsxs)("div",{className:"flex-1 flex flex-col min-h-0",children:[(0,s.jsxs)("div",{className:"px-3 mb-4 flex items-center justify-between",children:[(0,s.jsx)("p",{className:"text-xs font-black text-[#4a463d]/30 tracking-[0.2em] uppercase",children:"Workspaces"}),(0,s.jsx)("button",{onClick:()=>tH(!0),className:"p-1 hover:text-[#4a463d] text-[#8c8270] transition-colors",children:(0,s.jsx)(x,{size:14})})]}),(0,s.jsxs)("div",{className:"flex-1 overflow-y-auto space-y-1 scrollbar-hide px-1",children:[tW&&(0,s.jsx)("div",{className:"p-2 bg-[#546147]/10 border border-[#546147]/30 rounded-xl mb-2",children:(0,s.jsx)("input",{autoFocus:!0,value:tV,onChange:t=>t$(t.target.value),onKeyDown:t=>"Enter"===t.key&&iF(),onBlur:()=>iF(),placeholder:"New Project...",className:"w-full bg-transparent border-none text-sm font-black text-[#4a463d] outline-none placeholder:text-[#4a463d]/30"})}),tM.map(t=>(0,s.jsx)("div",{className:"group relative",children:tF===t.id?(0,s.jsx)("div",{className:"p-3 bg-[#fdead3]/10 rounded-xl border border-white/10",children:(0,s.jsx)("input",{autoFocus:!0,defaultValue:t.name,onKeyDown:e=>{"Enter"===e.key&&iU(t.id,e.target.value),"Escape"===e.key&&tU(null)},onBlur:e=>iU(t.id,e.target.value),className:"w-full bg-transparent border-none text-sm font-black text-[#4a463d] outline-none"})}):(0,s.jsxs)("div",{onClick:()=>{tL(t.id),ts(0)},className:`w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left cursor-pointer group/item ${tD===t.id?"bg-[#546147]/10 text-[#4a463d] border border-[#546147]/20 shadow-lg shadow-[#546147]/5":"text-[#8c8270] hover:bg-[#fdead3]/10 border border-transparent"}`,children:[(0,s.jsx)(g,{size:14,className:tD===t.id?"text-[#4a463d]":"text-[#4a463d]/60"}),(0,s.jsx)("span",{className:"text-sm font-black tracking-tight truncate flex-1",children:t.name}),(0,s.jsxs)("div",{className:"flex items-center gap-1 opacity-0 group-hover/item:opacity-100 transition-opacity",children:[(0,s.jsx)("button",{onClick:e=>{e.stopPropagation(),tU(t.id)},className:"p-1 hover:text-[#4a463d] transition-colors",children:(0,s.jsx)(V,{size:12})}),"default"!==t.id&&(0,s.jsx)("button",{onClick:e=>{e.stopPropagation(),confirm("Delete this workspace?")&&(tI(tM.filter(e=>e.id!==t.id)),tD===t.id&&tL("default"))},className:"p-1 hover:text-red-400 transition-colors",children:(0,s.jsx)($,{size:12})})]})]})},t.id))]})]}),1===t&&(0,s.jsxs)("div",{className:"mt-2 md:mt-4 p-4 md:p-5 bg-[#fdead3]/20 border border-[#d4cfc0]/30 backdrop-blur-md rounded-[2.5rem] space-y-4 md:space-y-6 relative z-10 transition-all duration-500 animate-in fade-in slide-in-from-left-4",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3 mb-1 md:mb-2 px-1",children:[(0,s.jsx)(x,{size:16,className:"text-[#546147]"}),(0,s.jsx)("h3",{className:"text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#4a463d]",children:"AI UI Design Forge"})]}),(0,s.jsxs)("div",{className:"space-y-3 md:space-y-4",children:[(0,s.jsxs)("div",{className:"space-y-1.5",children:[(0,s.jsxs)("div",{className:"flex justify-between px-1",children:[(0,s.jsx)("label",{className:"text-[9px] font-black uppercase tracking-widest text-[#8c8270]",children:"Design Concept"}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)("button",{onClick:iL,disabled:!e9||tT,className:`p-1.5 rounded-lg transition-all ${tT?"bg-[#d4cfc0] animate-pulse":"bg-[#d4cfc0]/20 hover:bg-[#d4cfc0]/40 text-[#546147] border border-[#d4cfc0]/30"}`,title:"한국어 프롬프트 영문 번역 (LibreTranslate)",children:tT?(0,s.jsx)(y,{size:12,className:"animate-spin"}):(0,s.jsx)(x,{size:12})}),(0,s.jsx)("span",{className:"text-[8px] text-[#546147] font-black uppercase tracking-widest",children:"AI Ready"})]})]}),(0,s.jsx)("textarea",{value:e9,onChange:t=>e7(t.target.value),className:"w-full bg-white/40 border border-[#d4cfc0]/30 rounded-2xl px-4 py-4 text-xs font-black text-[#4a463d]/80 focus:border-[#546147]/50 outline-none transition-all resize-none min-h-[100px]",placeholder:"Describe your UI/UX layout..."})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("label",{className:"text-[9px] font-black uppercase tracking-widest text-[#8c8270] px-1",children:"Professional Style Presets"}),(0,s.jsx)("div",{className:"grid grid-cols-3 gap-1.5 p-1 bg-[#8c8270]/10 rounded-2xl",children:[{id:"bento",label:"📊 Bento Grid",prompt:"bento grid layout, modern fintech analytics dashboard, revenue cards, interactive charts, clean typography, dark theme"},{id:"saas",label:"🚀 SaaS Web",prompt:"modern SaaS landing page, hero section, clean navbar, high converting CTA, glassmorphism cards, light aesthetic"},{id:"mobile",label:"📱 Mobile App",prompt:"mobile app iOS UI design, modern ecommerce store, bottom navigation bar, product feed cards, Apple HIG aesthetics"},{id:"admin",label:"📋 Admin ERP",prompt:"enterprise management admin portal, data tables, filter bars, sidebar navigation, clean minimal UI kit"},{id:"ecommerce",label:"🛍️ Storefront",prompt:"luxury fashion brand web design, product showcase grid, high-end editorial UI, minimal layout"}].map(t=>(0,s.jsx)("button",{onClick:()=>{il(t.id),e7(t.prompt),"mobile"===t.id?ic("mobile"):ic("web")},className:`py-2 px-1 text-[8px] font-black uppercase rounded-xl transition-all ${io===t.id?"bg-[#546147] text-white shadow-md":"text-[#4a463d]/60 hover:bg-white/20"}`,children:t.label},t.id))})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between px-1 pt-1",children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("span",{className:"text-[9px] font-black uppercase tracking-widest text-[#8c8270]",children:"Canvas Ratio"}),(0,s.jsx)("span",{className:"text-[7px] text-[#8c8270] uppercase",children:"Target Platform"})]}),(0,s.jsxs)("div",{className:"flex gap-1.5 p-1 bg-[#8c8270]/10 rounded-xl",children:[(0,s.jsx)("button",{onClick:()=>ic("web"),className:`px-3 py-1 text-[8px] font-black uppercase rounded-lg transition-all ${"web"===id?"bg-[#546147] text-white":"text-[#4a463d]/40"}`,children:"Web (1024x768)"}),(0,s.jsx)("button",{onClick:()=>ic("mobile"),className:`px-3 py-1 text-[8px] font-black uppercase rounded-lg transition-all ${"mobile"===id?"bg-[#546147] text-white":"text-[#4a463d]/40"}`,children:"Mobile (576x1024)"})]})]}),(0,s.jsxs)("div",{className:"space-y-1.5",children:[(0,s.jsx)("label",{className:"text-[9px] font-black uppercase tracking-widest text-[#8c8270] px-1",children:"Exclusions (Negative)"}),(0,s.jsx)("input",{type:"text",value:it,onChange:t=>ie(t.target.value),className:"w-full bg-white/40 border border-[#d4cfc0]/30 rounded-xl px-4 py-3 text-[10px] font-black text-[#4a463d]/50 focus:border-[#546147]/50 outline-none transition-all",placeholder:"Low quality, messy..."})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between px-1 pt-2",children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("span",{className:"text-[9px] font-black uppercase tracking-widest text-[#8c8270]",children:"Select UI Model"}),(0,s.jsx)("span",{className:"text-[7px] text-[#8c8270] uppercase",children:"Choose specialized design LoRA"})]}),(0,s.jsxs)("div",{className:"flex gap-1.5 p-1 bg-[#8c8270]/10 rounded-xl",children:[(0,s.jsx)("button",{onClick:()=>is("UiUX-SDXL.safetensors"),className:`px-3 py-1 text-[8px] font-black uppercase rounded-lg transition-all ${"UiUX-SDXL.safetensors"===ir?"bg-[#546147] text-[#4a463d] shadow-sm":"text-[#4a463d]/40"}`,children:"SDXL"}),(0,s.jsx)("button",{onClick:()=>is("UI-UX-05.safetensors"),className:`px-3 py-1 text-[8px] font-black uppercase rounded-lg transition-all ${"UI-UX-05.safetensors"===ir?"bg-[#546147] text-[#4a463d] shadow-sm":"text-[#4a463d]/40"}`,children:"V05"})]})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between px-1 pt-2",children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("span",{className:"text-[9px] font-black uppercase tracking-widest text-rose-400",children:"HQ Ultrasharp Upscale"}),(0,s.jsx)("span",{className:"text-[7px] text-[#8c8270] uppercase",children:"Boost definition & clarity"})]}),(0,s.jsx)("button",{onClick:()=>ia(!ii),className:`w-10 h-5 rounded-full transition-all relative ${ii?"bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.3)]":"bg-[#8c8270]/30"}`,children:(0,s.jsx)("div",{className:`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${ii?"left-5.5":"left-0.5"}`})})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between px-1 pt-1",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("div",{className:`w-2 h-2 rounded-full ${e0?"bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]":"bg-amber-500 animate-pulse"}`}),(0,s.jsxs)("span",{className:"text-[9px] font-black uppercase tracking-widest text-[#4a463d]/60",children:["ComfyUI: ",e0?"ONLINE":"CONNECTING..."]})]}),(0,s.jsx)("button",{onClick:()=>st?.executeTool("photoshop","check_comfyui"),className:"text-[8px] font-black uppercase text-[#546147] hover:underline",children:"새로고침"})]}),(0,s.jsxs)("button",{disabled:0===t2.length&&!e9,onClick:()=>{if(!e0){ew("⚠️ ComfyUI 엔진에 연결 중입니다. 잠시 후 다시 시도해주세요."),st?.executeTool("photoshop","check_comfyui");return}ew(`🎨 전문 UI/UX 시안 생성 중 (${"mobile"===id?"Mobile":"Web"})...`);let t=`professional modern digital UI design, high fidelity Figma UI kit, clean web app interface, ${e9}, crisp vector typography, pristine components, elegant color palette, high resolution, 8k`,e=`${it}, character, human portrait, anime girl, 3d person, realistic face, sketch, drawing, watermark, messy low quality, distorted text, blurred icons`;st?.executeTool("photoshop","ai_draw_once",{target:"ui_design",mode:"t2i",prompt:t,negativePrompt:e,denoisingStrength:1,width:"mobile"===id?576:1024,height:"mobile"===id?1024:768,upscale:ii,model:ir,modelName:ir,upscaleModel:"4x-UltraSharp.pth"})},className:`w-full py-4 md:py-6 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all shadow-xl shadow-[#d4cfc0]/40 active:scale-95 ${0===t2.length&&!e9?"bg-[#fdead3]/10 text-[#4a463d]/20 cursor-not-allowed":e0?"bg-gradient-to-r from-[#d4cfc0] to-[#546147] text-[#4a463d] hover:scale-[1.02]":"bg-[#546147]/80 text-white hover:scale-[1.02]"}`,children:[(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)(w,{size:16,className:"fill-current"}),(0,s.jsx)("span",{className:"text-[11px] font-black uppercase tracking-[0.2em] italic",children:"Forge AI Design"})]}),(0,s.jsx)("p",{className:"text-[7px] text-[#4a463d]/40 font-black uppercase tracking-[0.3em]",children:"AI Conceptualization"})]}),a?.status==="RUNNING"&&a?.target==="ui_design"&&(0,s.jsxs)("div",{className:"w-full p-4 bg-[#8c8270]/5 border border-[#8c8270]/20 rounded-2xl space-y-3",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(y,{size:12,className:"text-[#8c8270] animate-spin"}),(0,s.jsx)("span",{className:"text-[10px] font-black text-[#8c8270] uppercase tracking-widest",children:"Designing..."})]}),(0,s.jsx)("button",{onClick:()=>st?.executeTool("photoshop","ai_cancel"),className:"px-2 py-1 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-rose-400 rounded-lg text-[8px] font-black uppercase tracking-widest transition-all",children:"Cancel"})]}),(0,s.jsx)("div",{className:"w-full h-1 bg-[#fdead3]/10 rounded-full overflow-hidden",children:(0,s.jsx)(n0.div,{initial:{width:0},animate:{width:void 0!==a.progress?`${a.progress}%`:"100%"},className:"h-full bg-[#8c8270] rounded-full",style:{transition:"width 0.4s ease-out"}})})]})]})]})]}),(0,s.jsx)("div",{className:"mt-4 p-5 bg-white/60 border border-[#d4cfc0]/30 backdrop-blur-md shadow-sm shadow-[#d4cfc0]/10/5 rounded-2xl border border-transparent relative z-10",children:(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("div",{className:"w-10 h-10 rounded-full bg-[#546147]/20 flex items-center justify-center border border-[#546147]/30",children:(0,s.jsx)(v,{size:20,className:"text-[#4a463d]"})}),(0,s.jsx)("div",{className:"absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#050505] rounded-full"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-sm font-black tracking-tight text-[#4a463d]/90",children:"ADMIN SESSION"}),(0,s.jsx)("p",{className:"text-xs font-bold uppercase tracking-widest",children:"Connected"})]})]})})]})}),(0,s.jsxs)("section",{className:`flex-1 flex flex-col min-w-0 transition-all duration-700 ease-in-out relative ${to?"p-0 bg-black":"p-2 md:p-4 gap-2 md:gap-4"}`,children:[(0,s.jsx)("button",{onClick:()=>tl(!to),className:`absolute bottom-10 right-10 z-[100] w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-xl shadow-slate-200/50 active:scale-90 border group ${to?"bg-white/10 text-[#4a463d]/50 border-white/10 hover:bg-white/20 hover:text-[#4a463d]":"bg-[#546147] text-[#4a463d] border-indigo-400/50 hover:bg-[#546147] hover:shadow-[#546147]/30"}`,children:to?(0,s.jsx)(C,{size:24}):(0,s.jsx)(O,{size:24})}),(0,s.jsx)("div",{className:"flex-1 flex gap-4 overflow-hidden relative",children:(0,s.jsxs)("div",{className:`flex-1 bg-white/80 border border-[#d4cfc0]/50 backdrop-blur-xl shadow-xl shadow-[#d4cfc0]/10/10 rounded-[3rem] border border-transparent flex flex-col overflow-hidden relative shadow-xl shadow-slate-200/50 transition-all duration-700 ease-in-out ${to?"m-0 rounded-none border-none scale-100 bg-white":"scale-100"}`,children:[!to&&(0,s.jsxs)("div",{className:"px-6 py-4 md:px-10 md:py-8 border-b border-white/5 flex items-center justify-between bg-gradient-to-b from-white/5 to-transparent relative z-20",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,s.jsx)("div",{className:"w-2 h-2 rounded-full bg-[#546147] animate-pulse"}),(0,s.jsxs)("h2",{className:"text-xs font-black text-[#4a463d] tracking-[0.3em] uppercase",children:["Processing Step ",t]})]}),(0,s.jsx)("h3",{className:"text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter uppercase italic text-[#4a463d] flex items-center gap-4",children:sQ.find(e=>e.id===t)?.title||"PROCEEDING..."})]}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsxs)("button",{onClick:()=>{ig(!ib),iw(null),iv(null)},className:`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-3 border transition-all ${ib?"bg-[#546147] border-[#546147] text-[#4a463d] shadow-[0_0_20px_rgba(236,72,153,0.3)]":"bg-[#fdead3]/10 border-white/10 text-[#4a463d]/30 hover:text-[#4a463d]"}`,children:[(0,s.jsx)(B,{size:14}),ib?"Inspector ON":"Inspector Mode"]}),a&&(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsxs)("button",{onClick:()=>st?.executeTool("photoshop","open_assets_folder"),className:"px-4 py-2.5 bg-[#546147]/10 hover:bg-[#546147]/20 border border-[#546147]/30 text-[#4a463d] rounded-xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2",title:"생성물 저장 폴더 열기 (Open Assets Folder)",children:[(0,s.jsx)(G,{size:12})," Assets"]}),(0,s.jsxs)("div",{className:`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-3 border transition-all ${"RUNNING"===a.status?"bg-[#546147]/10 border-[#546147]/30 text-[#4a463d]":"bg-[#546147]/10 border-[#546147]/30 text-[#546147]"}`,children:["RUNNING"===a.status?(0,s.jsx)(y,{size:12,className:"animate-spin"}):(0,s.jsx)(x,{size:12}),a.status,"RUNNING"===a.status&&void 0!==a.progress&&(0,s.jsxs)("span",{className:"ml-2 text-[10px] bg-[#546147] text-white px-1.5 py-0.5 rounded-md font-bold",children:[a.progress,"%"]})]}),"RUNNING"===a.status&&(0,s.jsxs)("button",{onClick:()=>st?.executeTool("photoshop","ai_cancel"),className:"px-4 py-2.5 bg-red-500/20 hover:bg-red-500/40 border border-red-500/30 text-rose-400 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2",title:"작업 취소 (Cancel Execution)",children:[(0,s.jsx)(C,{size:12})," Cancel"]})]}),(0,s.jsx)("button",{onClick:()=>h(!0),className:"w-12 h-12 rounded-2xl bg-[#fdead3]/10 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all group",children:(0,s.jsx)(_,{size:20,className:"text-[#4a463d]/40 group-hover:text-[#4a463d] transition-colors"})})]})]}),(0,s.jsxs)("div",{className:"flex-1 relative overflow-hidden flex items-center justify-center",children:[!to&&(0,s.jsx)("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#546147]/10 blur-[150px] rounded-full opacity-20 pointer-events-none"}),(0,s.jsxs)("div",{id:"inspector-canvas",onMouseMove:t=>{if(!ib)return;let e=t.target.closest("[data-asset-id]");if(e){let t=e.getAttribute("data-asset-id")||"",i=e.getAttribute("data-asset-name")||"unnamed_asset",a=e.getBoundingClientRect(),r=document.getElementById("inspector-canvas"),n=r?.getBoundingClientRect();n&&iv({id:t,name:i,rect:{left:a.left-n.left,top:a.top-n.top,width:a.width,height:a.height}})}else iv(null)},onClick:t=>{if(!ib)return;let e=t.target.closest("[data-asset-id]");e?(t.preventDefault(),t.stopPropagation(),iw({id:e.getAttribute("data-asset-id")||"",name:e.getAttribute("data-asset-name")||"unnamed_asset",element:e})):iw(null)},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`w-full max-w-7xl transition-all duration-700 h-full flex items-center justify-center p-12 relative z-10 ${ib?"cursor-crosshair":""}`,children:[(0,s.jsx)(o.default,{id:"1f37cf710a4b869b",dynamic:[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""],children:""}),ib&&ix&&(0,s.jsx)("div",{style:{left:ix.rect.left,top:ix.rect.top,width:ix.rect.width,height:ix.rect.height},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" absolute border-2 border-[#d4cfc0] pointer-events-none z-[60] transition-all duration-75 shadow-[0_0_15px_rgba(236,72,153,0.5)]",children:(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" absolute -top-7 left-0 bg-[#d4cfc0] text-[#4a463d] text-xs font-black px-2 py-1 rounded-md shadow-lg uppercase whitespace-nowrap flex items-center gap-2",children:[(0,s.jsx)(B,{size:10}),ix.name,(0,s.jsxs)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xs opacity-60",children:[ix.rect.width,"x",ix.rect.height]})]})}),ib&&iy&&(0,s.jsx)("div",{style:{left:iy.element.getBoundingClientRect().left-(document.getElementById("inspector-canvas")?.getBoundingClientRect().left||0),top:iy.element.getBoundingClientRect().top-(document.getElementById("inspector-canvas")?.getBoundingClientRect().top||0),width:iy.element.getBoundingClientRect().width,height:iy.element.getBoundingClientRect().height},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" absolute border-2 border-[#546147] pointer-events-none z-[70] shadow-[0_0_30px_rgba(99,102,241,0.6)]",children:(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-auto bg-[#546147] rounded-xl p-1.5 shadow-xl shadow-slate-200/50 border border-indigo-400/30",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex flex-col px-2",children:[(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xs font-black text-[#4a463d] leading-none mb-0.5",children:iy.name}),(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xs text-[#4a463d]/50 font-bold uppercase tracking-widest",children:"Selected Asset"})]}),(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" h-6 w-px bg-white/10 mx-1"}),(0,s.jsxs)("button",{onClick:t=>{t.stopPropagation(),i$(iy.element,iy.name)},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" p-2 px-4 bg-white text-[#546147] rounded-lg text-xs font-black hover:bg-[#fdead3]/20 transition-all flex items-center gap-2 shadow-inner active:scale-95",children:[(0,s.jsx)(M,{size:12})," Extract"]}),(0,s.jsx)("button",{onClick:t=>{t.stopPropagation(),iw(null)},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" p-2 text-[#4a463d]/50 hover:text-[#4a463d] transition-colors bg-[#fdead3]/10 rounded-lg",children:(0,s.jsx)(C,{size:14})})]})}),n?(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full h-full relative group",children:(0,s.jsx)("img",{src:n,alt:"Preview",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full h-full object-contain"})}):1===t?(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full h-full flex flex-col gap-4 md:gap-8 lg:gap-12",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center justify-between gap-4 overflow-x-auto pt-4 pb-2 md:pt-8 md:pb-4 scrollbar-hide px-4",children:[tG.map((t,e)=>(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" relative group/card shrink-0",children:[(0,s.jsxs)("button",{onClick:()=>ts(e),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`w-64 p-6 rounded-[2.5rem] border transition-all duration-500 group/nav ${tn===e?"bg-white/10 border-white/20 shadow-xl":"bg-transparent border-transparent opacity-40 hover:opacity-100 hover:bg-[#d5ccb6]"}`,children:[(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" h-36 rounded-3xl bg-slate-900 mb-4 overflow-hidden border border-transparent group-hover/nav:border-white/20 transition-all flex items-center justify-center",children:t.startsWith("data:image")?(0,s.jsx)("img",{src:t,alt:"AI Design",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full h-full object-cover"}):(0,s.jsx)(R,{size:32,className:"text-[#4a463d]/10 group-hover/nav:scale-110 transition-transform"})}),(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`text-sm font-black uppercase tracking-[0.2em] ${tn===e?"text-[#4a463d]":"text-[#8c8270]"}`,children:t.startsWith("data:image")?`AI Design ${e}`:t.replace("_"," ")})]}),(0,s.jsx)("button",{onClick:e=>{e.stopPropagation(),!confirm("Are you sure you want to remove this design from this workspace?")||(tI(tM.map(e=>e.id===tD?{...e,slideIds:e.slideIds.filter(e=>e!==t)}:e)),tn>=tq.slideIds.length-1&&ts(0))},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" absolute -top-2 -right-2 w-8 h-8 rounded-full bg-red-500/80 hover:bg-red-500 text-[#4a463d] flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all shadow-lg backdrop-blur-md z-30 active:scale-90",children:(0,s.jsx)(C,{size:16})})]},t)),0===tG.length&&(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full h-40 flex items-center justify-center border-2 border-dashed border-transparent rounded-[3rem]",children:(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[#8c8270] text-xs font-black uppercase tracking-widest",children:"No designs in this workspace"})})]}),(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex-1 relative bg-transparent rounded-[4rem] border border-transparent p-6 md:p-12 flex flex-col items-center justify-center overflow-hidden shadow-inner min-h-[300px] md:min-h-[400px] lg:min-h-[500px]",children:(0,s.jsx)(n7,{mode:"wait",children:tG.length>0?(0,s.jsxs)(n0.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},className:"w-full h-full flex flex-col items-center justify-center gap-12",children:[(0,s.jsx)("div",{id:"preview-container","data-asset-id":tG[tn],className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full flex items-center justify-center p-8 aspect-video rounded-[3rem] overflow-hidden flex items-center justify-center bg-[#fdead3]/10",children:(()=>{let t=tq.slideIds[tn];if(!t)return null;if(t.startsWith("data:image"))return(0,s.jsxs)("div",{"data-asset-id":"generated_ui","data-asset-name":"ai_design_mockup",className:"w-full h-full rounded-[2.5rem] overflow-hidden border border-[#d4cfc0]/20 bg-black/5 animate-in fade-in zoom-in-95 duration-700 relative",children:[(0,s.jsx)("img",{src:t,alt:"AI UI Preview",className:"w-full h-full object-contain"}),(0,s.jsx)("div",{className:"absolute top-6 left-6 px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-[9px] font-black text-[#fdead3]/60 border border-white/10 uppercase tracking-[0.2em]",children:"AI Generated Mockup"})]});switch(t){case"toggle_menu":return(0,s.jsx)(s1,{});case"vn_controls":return(0,s.jsx)(s2,{});case"inventory_modal":return(0,s.jsxs)("div",{className:"p-20 bg-[#fdead3]/10 rounded-[3rem] border border-white/10 text-[#4a463d]/20 font-black uppercase tracking-[0.3em] italic text-sm",children:["Inventory System UI",(0,s.jsx)("br",{}),(0,s.jsx)("span",{className:"text-[10px] opacity-50 mt-2 block",children:"Coming Soon in Next Update"})]});case"save_slots":return(0,s.jsx)(s4,{});case"character_stats":return(0,s.jsx)(s3,{});case"affinity_system":return(0,s.jsx)(s5,{});default:return(0,s.jsx)("div",{className:"text-[#4a463d]",children:"Preview Coming Soon"})}})()}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex gap-4",children:[(0,s.jsxs)("button",{onClick:()=>{ew("📫 포토샵으로 시안 동기화 중..."),st?.executeTool("photoshop","sync_image",{image:tG[tn],name:`AI_Design_${tn}`})},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" px-10 py-6 bg-gradient-to-br from-[#d4cfc0] to-[#546147] hover:scale-105 text-[#4a463d] rounded-3xl text-sm tracking-[0.2em] font-black uppercase flex items-center gap-4 shadow-2xl shadow-[#546147]/40 transition-all active:scale-95",children:[(0,s.jsx)(w,{size:20,className:"fill-current"})," Sync to Photoshop"]}),(0,s.jsxs)("button",{onClick:()=>iV(tG[tn]),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" px-10 py-6 bg-[#fdead3]/10 hover:bg-[#d4cfc0]/20 border border-[#d4cfc0]/30 text-[#4a463d]/60 hover:text-[#4a463d] rounded-3xl text-sm tracking-[0.2em] font-black uppercase flex items-center gap-4 transition-all active:scale-95",children:[(0,s.jsx)(M,{size:20})," Bulk PNG"]})]})]},tG[tn]):(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-center",children:[(0,s.jsx)(x,{size:48,className:"mx-auto text-[#546147]/20 mb-6"}),(0,s.jsx)("h3",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xl font-black uppercase italic mb-2 tracking-tighter text-[#4a463d]/50",children:"Workspace Empty"}),(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[#4a463d]/60 text-xs uppercase tracking-widest mb-8",children:"Select another workspace or load design templates"}),(0,s.jsx)("button",{onClick:()=>{tI(tM.map(t=>t.id===tD?{...t,slideIds:[...s0]}:t)),ts(0)},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" px-8 py-3 bg-[#fdead3]/10 hover:bg-white/10 border border-white/10 text-[#4a463d] rounded-2xl text-xs font-black uppercase tracking-widest transition-all active:scale-95",children:"Load Default Templates"})]})})})]}):2===t?(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full h-full p-4 md:p-6 lg:p-8 flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 relative z-10 text-[#4a463d]",children:[(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" absolute top-0 right-1/4 w-96 h-96 bg-[#546147]/10 blur-[100px] rounded-full pointer-events-none"}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex-[2] bg-white/[0.03] border border-transparent rounded-[3rem] p-4 md:p-6 lg:p-8 flex flex-col relative overflow-hidden backdrop-blur-3xl shadow-3xl",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center gap-4 mb-6",children:[(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-12 h-12 bg-gradient-to-br from-[#546147] to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-[#546147]/20",children:(0,s.jsx)(m,{size:24,className:"text-[#4a463d]"})}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:[(0,s.jsx)("h3",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xl font-black uppercase italic tracking-tighter text-[#4a463d]",children:"AI Video Editor"}),(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[#8c8270] text-xs uppercase tracking-widest font-black",children:"Source Media Analysis"})]})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex-1 relative aspect-video bg-[#fdead3]/40 rounded-[2rem] border border-[#d4cfc0] overflow-hidden flex flex-col items-center justify-center group shadow-inner",children:[t2.length>0&&(t2[0].type.startsWith("video/")||t2[0].type.startsWith("audio/"))?t2[0].type.startsWith("video/")?(0,s.jsx)("video",{src:t2[0].previewUrl,controls:!0,autoPlay:!0,loop:!0,className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full h-full object-cover"}):(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full h-full flex flex-col items-center justify-center p-8 bg-[#fdead3]/40",children:[(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-24 h-24 mb-6 rounded-full bg-gradient-to-tr from-[#d4cfc0] to-[#546147] flex items-center justify-center shadow-xl shadow-slate-200/50 animate-[spin_4s_linear_infinite]",children:(0,s.jsx)(b,{size:40,className:"text-[#4a463d]"})}),(0,s.jsx)("audio",{src:t2[0].previewUrl,controls:!0,autoPlay:!0,loop:!0,className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full max-w-sm"}),(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" mt-4 text-[12px] font-black uppercase tracking-widest text-[#4a463d]/70 truncate max-w-xs",children:t2[0].name})]}):null,(0,s.jsx)("div",{onDragOver:t=>{t.preventDefault(),t5(!0)},onDragLeave:()=>t5(!1),onDrop:iP,className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`absolute inset-0 flex flex-col items-center justify-center gap-4 transition-all z-20 ${t3?"bg-[#546147]/20 border-2 border-dashed border-[#546147] m-4 rounded-3xl backdrop-blur-sm":t2.length>0?"pointer-events-none":"hover:bg-transparent"}`,children:(!t2.length||t3)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(W,{size:t3?48:32,className:t3?"text-[#546147]":"text-[#546147]/50"}),(0,s.jsxs)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`font-black uppercase tracking-widest text-center ${t3?"text-[#4a463d] text-sm drop-shadow-md":"text-[#4a463d]/30 text-[11px]"}`,children:[t3?"Drop to Add Clip":"Drag & Drop Media File",!t3&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("br",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])}),(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[9px] opacity-70",children:"MP4, MOV, MP3 Supported"})]})]})]})}),t2.length>0&&(0,s.jsx)("button",{onClick:()=>{let t=[...t2];t.splice(iu,1),t4(t),ih(Math.max(0,iu-1))},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" absolute top-4 right-4 w-10 h-10 bg-red-500/80 rounded-xl text-[#4a463d] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 backdrop-blur-md border border-white/20 z-30",children:(0,s.jsx)($,{size:16})})]}),t2.length>0&&(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" mt-4 flex gap-3 overflow-x-auto pb-2 scrollbar-hide shrink-0",children:[t2.map((t,e)=>(0,s.jsxs)("button",{onClick:()=>ih(e),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`h-24 min-w-[120px] rounded-2xl border-2 relative overflow-hidden transition-all group shrink-0 ${iu===e?"border-[#546147] shadow-[0_0_15px_rgba(59,130,246,0.3)] ring-2 ring-[#546147]/20":"border-white/10 opacity-60 hover:opacity-100"}`,children:[t.type.startsWith("video/")?(0,s.jsx)("video",{src:t.previewUrl,muted:!0,className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full h-full object-cover"}):(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full h-full bg-black/60 flex items-center justify-center",children:(0,s.jsx)(b,{size:24,className:"text-[#56604e]"})}),(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-2 text-left",children:(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xs font-black text-[#4a463d]/90 truncate block",children:t.name})}),iu===e&&(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" absolute top-2 right-2 w-2 h-2 rounded-full bg-[#546147] animate-pulse"})]},e)),(0,s.jsxs)("button",{onClick:()=>{alert("드래그 앤 드롭으로 추가 클립을 업로드할 수 있습니다.")},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" h-24 min-w-[80px] rounded-2xl border-2 border-dashed border-white/10 bg-[#fdead3]/10 hover:bg-white/10 flex flex-col items-center justify-center gap-2 transition-all opacity-60 hover:opacity-100 shrink-0",children:[(0,s.jsx)(W,{size:16,className:"text-[#4a463d]/50"}),(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[8px] font-black uppercase text-[#4a463d]/50",children:"Add Clip"})]})]})]}),(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex-[1.5] flex flex-col gap-4 md:gap-6",children:(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" bg-white/[0.03] border border-transparent rounded-[3rem] p-4 md:p-6 lg:p-8 flex flex-col gap-4 md:gap-6 lg:gap-8 backdrop-blur-3xl shadow-3xl h-full overflow-y-auto",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:[(0,s.jsxs)("h4",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xs font-black text-[#4a463d]/40 uppercase tracking-[0.2em] mb-4 flex items-center gap-2",children:[(0,s.jsx)(_,{size:12})," Editing Blueprint"]}),(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" grid grid-cols-2 gap-3",children:[{id:"smart_cut",label:"Smart Cut",icon:k,color:"text-[#4a463d]",bg:"bg-[#546147]/10 border-[#546147]/20"},{id:"color_grade",label:"Color Grade",icon:x,color:"text-[#546147]",bg:"bg-[#d4cfc0]/10 border-[#8e9887]"},{id:"motion_track",label:"Motion Track",icon:b,color:"text-[#546147]",bg:"bg-[#546147]/10 border-emerald-500/20"},{id:"auto_caption",label:"Captions",icon:F,color:"text-orange-400",bg:"bg-orange-500/10 border-orange-500/20"}].map(t=>(0,s.jsxs)("div",{onClick:()=>ea(t.id),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col items-center gap-4 ${ei===t.id?t.bg:"bg-[#fdead3]/20 border-transparent opacity-60 hover:opacity-100"}`,children:[(0,s.jsx)(t.icon,{size:24,className:ei===t.id?t.color:"text-[#4a463d]/40"}),(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`text-[11px] font-black uppercase tracking-[0.2em] ${ei===t.id?"text-[#4a463d]":"text-[#4a463d]/30"}`,children:t.label})]},t.id))})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex-1 min-h-[200px] border-t border-transparent pt-6 flex flex-col gap-4",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex justify-between items-center",children:[(0,s.jsxs)("h4",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xs font-black text-[#4a463d]/40 uppercase tracking-[0.2em] flex items-center gap-2",children:[(0,s.jsx)(F,{size:12})," Subtitles & Sync"]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex gap-2",children:[(0,s.jsxs)("button",{disabled:0===t2.filter(t=>t.type.startsWith("audio/")).length,onClick:t=>{t.stopPropagation(),console.log("Triggering Magic Auto-Fill..."),st?.executeTool("premiere","magic_auto_edit",{audioFiles:t2.filter(t=>t.type.startsWith("audio/")),prompt:t2[0]?.name||"Music Video"})},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`px-3 py-1 border rounded-full text-[9px] font-black uppercase transition-all flex items-center gap-2 ${t2.filter(t=>t.type.startsWith("audio/")).length>0?"bg-[#546147]/20 hover:bg-[#546147]/40 border-indigo-400/30 text-indigo-300":"bg-[#fdead3]/10 border-transparent text-[#4a463d]/20 cursor-not-allowed"}`,children:[(0,s.jsx)(x,{size:10})," Magic Auto-Fill"]}),(0,s.jsx)("button",{onClick:t=>{t.stopPropagation(),im([...ip,{time:"00:00",text:""}])},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" px-3 py-1 bg-[#fdead3]/10 hover:bg-white/10 border border-transparent rounded-full text-[9px] font-black uppercase transition-colors",children:"Add Line"})]})]}),(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" space-y-2 flex-1 overflow-y-auto pr-2",children:ip.map((t,e)=>(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex gap-2",children:[(0,s.jsx)("input",{type:"text",value:t.time,onChange:t=>{let i=[...ip];i[e].time=t.target.value,im(i)},placeholder:"MM:SS",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-20 bg-[#fdead3]/40 border border-white/10 rounded-xl px-3 py-2 text-center text-xs font-black font-mono text-[#546147] focus:outline-none focus:border-[#546147]/50"}),(0,s.jsx)("input",{type:"text",value:t.text,onChange:t=>{let i=[...ip];i[e].text=t.target.value,im(i)},placeholder:"자막 내용을 입력하세요...",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex-1 bg-[#fdead3]/10 border border-white/10 hover:border-white/20 rounded-xl px-5 py-2 text-sm font-black text-[#4a463d] focus:outline-none focus:bg-white/10 transition-colors"}),ip.length>1&&(0,s.jsx)("button",{onClick:()=>{im(ip.filter((t,i)=>i!==e))},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" p-2 text-[#4a463d]/20 hover:text-red-400",children:(0,s.jsx)(C,{size:12})})]},e))})]}),(0,s.jsxs)("button",{disabled:0===t2.length,onClick:()=>{st?.executeTool("premiere","real_video_edit",{files:t2,preset:ei||"smart_cut",subtitles:ip.filter(t=>""!==t.text.trim())})},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`w-full py-7 rounded-3xl flex flex-col items-center justify-center gap-2 transition-all shadow-2xl border ${t2.length>0?"bg-gradient-to-r from-[#546147] to-[#546147] border-blue-400/30 text-[#4a463d] hover:scale-[1.02] active:scale-95 shadow-[#546147]/40":"bg-[#fdead3]/10 border-transparent text-[#4a463d]/20 cursor-not-allowed"}`,children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center gap-3",children:[(0,s.jsx)(w,{size:20,className:"fill-current"}),(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-base font-black uppercase tracking-[0.3em]",children:"Generate Final Asset"})]}),(0,s.jsxs)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[10px] text-[#4a463d]/50 font-bold uppercase tracking-[0.1em]",children:[t2.length," clip(s) selected"]})]}),a?.status==="RUNNING"&&a?.tool==="premiere"&&a?.progress!==void 0&&(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" space-y-3 pt-4 border-t border-transparent",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex justify-between items-end px-1",children:[(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[8px] font-black text-[#546147] uppercase tracking-widest animate-pulse max-w-[200px] truncate",children:a.message}),(0,s.jsxs)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-sm font-black text-[#4a463d] italic",children:[a.progress,(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[8px] ml-0.5 opacity-30",children:"%"})]})]}),(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full h-1.5 bg-[#fdead3]/40 rounded-full overflow-hidden border border-transparent",children:(0,s.jsx)(n0.div,{initial:{width:0},animate:{width:`${a.progress}%`},className:"h-full bg-gradient-to-r from-[#546147] to-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.4)]"})})]})]})})]}):5===t?(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full max-w-2xl max-h-[92vh] overflow-y-auto pr-2 custom-scrollbar bg-white/[0.03] border border-transparent rounded-[3rem] p-4 md:p-8 flex flex-col items-center gap-4 md:gap-6 text-center relative backdrop-blur-3xl shadow-3xl",children:[(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#8c8270]/10 blur-[80px] rounded-full -translate-y-1/2"}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" space-y-4 relative z-10",children:[(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-20 h-20 bg-gradient-to-br from-[#8c8270] to-[#546147] rounded-[2.5rem] flex items-center justify-center mx-auto shadow-xl shadow-slate-200/50 shadow-[#8c8270]/20 mb-6 transform group-hover:scale-110 transition-transform",children:(0,s.jsx)(k,{size:32,className:"text-[#4a463d]"})}),(0,s.jsx)("h3",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-2xl font-black uppercase italic tracking-tighter text-[#4a463d]",children:"AI Animation Forge"}),(0,s.jsxs)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[#8c8270] text-xs max-w-md mx-auto leading-relaxed",children:["이미지를 분석하여 영화 같은 1분 이상의 영상을 생성합니다.",(0,s.jsx)("br",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])}),"정교한 흐름과 공간감을 더해 생동감 있는 에셋을 제작하세요."]})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full space-y-8 relative z-10",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full text-left space-y-2",children:[(0,s.jsxs)("label",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xs font-black text-[#8c8270]/60 uppercase tracking-widest px-2 flex items-center gap-2",children:[(0,s.jsx)(_,{size:12})," Style Preset"]}),(0,s.jsxs)("select",{value:eO,onChange:t=>{let e=t.target.value;eM(e),"Laftel Anime"===e?(eT("(2d animation:1.3), (flat coloring:1.2), (simple style:1.2), (flat shadows:1.2), clean lineart, vibrant colors, cinematic lighting, highly detailed"),eR("lowres, bad anatomy, worst quality, distorted face, blurry, 3d, realistic, photorealistic, rough sketch, blurry lines, text, watermark")):"Premium Cinematic"===e?(eT("masterpiece, best quality, realistic anime, high resolution, hyper detailed anime style, incredible lighting, ray tracing, bloom effect, depth of field, 4k"),eR("lowres, bad anatomy, worst quality, deformed, cell shaded, flat color, cartoonish, 2d, watermark, text")):"Webtoon Flat"===e&&(eT("webtoon style, flat color, minimal shading, clean vector lines, manhwa style, bright colors, clear lineart"),eR("lowres, bad anatomy, worst quality, messy lines, realistic, 3d, photorealistic, blurry, heavy shading, heavy contrast"))},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full bg-[#fdead3]/40 border border-[#8c8270]/20 rounded-2xl px-6 py-4 text-xs font-black text-[#546147] outline-none focus:border-[#546147]/50 transition-colors shadow-inner",children:[(0,s.jsx)("option",{value:"Custom",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:"- Custom Manual Prompting -"}),(0,s.jsx)("option",{value:"Laftel Anime",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:"Laftel Anime (Professional Cell-Shaded)"}),(0,s.jsx)("option",{value:"Premium Cinematic",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:"Premium Cinematic (High Detail, Realistic Lighting)"}),(0,s.jsx)("option",{value:"Webtoon Flat",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:"Webtoon Flat (Clean Lines, Minimal Shading)"})]}),(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[9px] text-[#4a463d]/40 px-2 uppercase tracking-widest italic font-bold",children:"Select a preset to auto-configure prompts for professional output"})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full space-y-4 text-left",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" space-y-2",children:[(0,s.jsx)("label",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xs font-black text-[#8c8270]/60 uppercase tracking-widest px-2",children:"Cinematic Prompt"}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" relative group",children:[(0,s.jsx)("textarea",{placeholder:"그록 AI처럼 자연스럽게 상황을 설명해보세요 (예: 벚꽃이 흩날리고 그녀가 웃으며 돌아본다)",value:eC,onChange:t=>eT(t.target.value),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full bg-[#fdead3]/40 border border-white/10 rounded-3xl px-6 py-4 md:py-5 text-sm font-black text-[#4a463d] placeholder:text-[#4a463d]/20 focus:border-[#8c8270]/50 min-h-[80px] md:min-h-[120px] transition-all outline-none resize-none"}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" absolute bottom-3 right-3 flex gap-2",children:[(0,s.jsx)("button",{onClick:()=>{st&&0!==t2.length&&(ew("🔍 Analyzing image features..."),st.executeTool("photoshop","ai_analyze_image",{imagePath:t2[0].data}))},disabled:0===t2.length,title:"Magic Analyze Image",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" p-2 bg-[#fdead3]/10 hover:bg-white/10 border border-white/10 rounded-xl text-[#4a463d]/40 hover:text-[#4a463d] transition-all disabled:opacity-30",children:(0,s.jsx)(R,{size:14})}),(0,s.jsx)("button",{onClick:iI,disabled:!eC||tT,title:"AI 마법 프롬프트 자동 완성 (Korean Natural Language to AI Prompt)",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`p-2 rounded-xl transition-all ${tT?"bg-[#8c8270] animate-pulse":"bg-[#8c8270]/20 hover:bg-[#8c8270]/40 text-[#8c8270] border border-[#8c8270]/30"}`,children:tT?(0,s.jsx)(y,{size:14,className:"animate-spin"}):(0,s.jsx)(x,{size:14})})]})]})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" space-y-2",children:[(0,s.jsx)("label",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xs font-black text-[#4a463d]/20 uppercase tracking-widest px-2",children:"Negative Elements"}),(0,s.jsx)("input",{type:"text",value:eP,onChange:t=>eR(t.target.value),placeholder:"Avoid these styles...",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full bg-[#fdead3]/20 border border-transparent rounded-xl px-4 py-2 text-[10px] text-[#4a463d]/40 focus:outline-none focus:border-white/20 transition-all"})]})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full space-y-6 text-left p-6 bg-transparent border border-transparent rounded-3xl",children:[(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center justify-between mb-2",children:(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center gap-2",children:[(0,s.jsx)(_,{size:14,className:"text-[#8c8270]"}),(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xs font-black uppercase tracking-widest text-[#4a463d]/30 italic",children:"Advanced Model Settings"})]})}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" grid grid-cols-2 gap-4",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" space-y-1.5",children:[(0,s.jsx)("label",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[9px] font-black uppercase tracking-[0.2em] text-[#8c8270] ml-1",children:"Base Model (SD/Pony)"}),(0,s.jsx)("select",{value:ek,onChange:t=>e_(t.target.value),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full bg-[#fdead3]/40 border border-white/10 rounded-2xl px-6 py-4 text-xs font-black text-[#4a463d] outline-none focus:border-[#8c8270]/50 transition-colors",children:e2.length>0?e2.map(t=>(0,s.jsx)("option",{value:t,className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:t},t)):(0,s.jsx)("option",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:"No models found"})})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" space-y-1.5",children:[(0,s.jsx)("label",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[9px] font-black uppercase tracking-[0.2em] text-[#8c8270] ml-1",children:"Motion Module"}),(0,s.jsx)("select",{value:tu,onChange:t=>tf(t.target.value),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full bg-[#fdead3]/40 border border-white/10 rounded-2xl px-6 py-4 text-xs font-black text-[#4a463d] outline-none focus:border-[#8c8270]/50 transition-colors",children:td.length>0?td.map(t=>(0,s.jsx)("option",{value:t,className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:t},t)):(0,s.jsx)("option",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:"No motion modules found"})})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" space-y-1.5 col-span-2",children:[(0,s.jsxs)("label",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[9px] font-black uppercase tracking-[0.2em] text-[#8c8270] ml-1 flex items-center gap-2",children:[(0,s.jsx)(x,{size:10,className:"text-indigo-400"})," Animation LLM (Prompt Refiner)"]}),(0,s.jsx)("select",{value:tE,onChange:t=>tC(t.target.value),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full bg-[#fdead3]/40 border border-[#8c8270]/20 rounded-2xl px-6 py-4 text-xs font-black text-indigo-700 outline-none focus:border-indigo-500 transition-colors shadow-inner",children:tN.length>0?tN.map(t=>(0,s.jsx)("option",{value:t,className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:t},t)):(0,s.jsx)("option",{disabled:!0,value:"",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:tT?"Loading models...":"No LLMs found (Mistral NeMo downloading...)"})}),(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[7px] text-indigo-400/50 px-2 italic uppercase font-black",children:"Local LLM based prompt engineering & translation"})]})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" pt-4 border-t border-transparent space-y-4",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center justify-between mb-2",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center gap-2",children:[(0,s.jsx)(w,{size:14,className:"text-yellow-400"}),(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xs font-black uppercase tracking-widest text-[#4a463d]/30 italic",children:"Quality & Motion"})]}),(0,s.jsx)("button",{onClick:()=>{ty(2),tj(8),tb(!1),tz(.5),eH("🛡️ Safe Mode 적용: 2초/8fps (8GB VRAM 최적화)")},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" px-3 py-1 bg-[#fdead3]/10 hover:bg-emerald-500/20 border border-white/10 rounded-lg text-[8px] font-black text-[#546147] hover:text-emerald-300 transition-all uppercase tracking-widest",children:"VRAM Safe Mode"})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" grid grid-cols-2 gap-4",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" space-y-1.5 bg-[#8c8270]/5 p-3 rounded-xl border border-[#8c8270]/10",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center justify-between px-1",children:[(0,s.jsx)("label",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[9px] font-black uppercase tracking-[0.2em] text-[#8c8270]",children:"AI Motion Logic"}),(0,s.jsx)("div",{onClick:()=>tO(!tR),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`w-6 h-3 rounded-full relative cursor-pointer transition-colors ${tR?"bg-[#8c8270]":"bg-white/10"}`,children:(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`absolute top-0.5 w-2 h-2 bg-white rounded-full transition-transform ${tR?"left-3.5":"left-0.5"}`})})]}),(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[7px] text-[#4a463d]/30 px-1",children:"프레임 순간이동/노이즈 방지"})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" space-y-1.5",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center justify-between px-1",children:[(0,s.jsx)("label",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[9px] font-black uppercase tracking-[0.2em] text-[#8c8270]",children:"HI-RES Upscale"}),(0,s.jsx)("div",{onClick:()=>tb(!tm),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`w-6 h-3 rounded-full relative cursor-pointer transition-colors ${tm?"bg-[#546147]":"bg-[#8c8270]/20"}`,children:(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`absolute top-0.5 w-2 h-2 bg-white rounded-full transition-transform ${tm?"left-3.5":"left-0.5"}`})})]}),(0,s.jsx)("select",{disabled:!tm,value:ej,onChange:t=>eS(t.target.value),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`w-full bg-[#fdead3]/40 border border-white/10 rounded-xl px-4 py-2.5 text-[10px] font-bold text-[#4a463d] outline-none focus:border-[#546147]/50 transition-colors ${!tm?"opacity-30":""}`,children:th.length>0?th.map(t=>(0,s.jsx)("option",{value:t,className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:t},t)):(0,s.jsx)("option",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:"No upscalers found"})})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" space-y-1.5",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center justify-between px-1",children:[(0,s.jsx)("label",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[9px] font-black uppercase tracking-[0.2em] text-[#8c8270]",children:"Motion Smooth (RIFE)"}),(0,s.jsx)("div",{onClick:()=>tx(!tg),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`w-6 h-3 rounded-full relative cursor-pointer transition-colors ${tg?"bg-[#546147]":"bg-[#8c8270]/20"}`,children:(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`absolute top-0.5 w-2 h-2 bg-white rounded-full transition-transform ${tg?"left-3.5":"left-0.5"}`})})]}),(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`w-full bg-[#fdead3]/40 border border-white/10 rounded-xl px-4 py-2.5 text-[10px] font-bold ${tg?"text-[#546147]":"text-[#4a463d]/20 italic"}`,children:tg?"2x Smooth Interpolation":"Standard Playback"})]})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" space-y-4 pt-2",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" space-y-2",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center justify-between px-1",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center gap-2",children:[(0,s.jsx)("label",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[9px] font-black uppercase tracking-[0.2em] text-[#8c8270]",children:"Video Duration (Seconds)"}),(0,s.jsx)("div",{onClick:()=>tk(!tw),title:"Iterative Synthesis for 8GB VRAM",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`px-1.5 py-0.5 rounded-md text-[7px] font-black uppercase cursor-pointer transition-all ${tw?"bg-[#546147] text-white":"bg-[#8c8270]/20 text-[#8c8270]/40"}`,children:tw?"Long Loop ON":"Long Loop OFF"})]}),(0,s.jsxs)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[10px] font-bold text-[#8c8270]",children:[tw?tv:3,"s ",(0,s.jsxs)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[#4a463d]/20 ml-1",children:["(",Math.floor((tw?tv:3)*t_)," frames)"]})]})]}),tw&&(0,s.jsx)("input",{type:"range",min:"6",max:"60",step:"3",value:tv,onChange:t=>ty(Number(t.target.value)),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full accent-[#546147] h-4 bg-[#4a463d]/20 rounded-full cursor-pointer transition-all"}),!tw&&(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[8px] text-[#4a463d]/30 italic px-1 uppercase tracking-widest",children:"Standard 3s Segment (Maximum VRAM Stability)"})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" space-y-2 pt-2",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center justify-between px-1",children:[(0,s.jsx)("label",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[9px] font-black uppercase tracking-[0.2em] text-[#8c8270]",children:"Image Compliance (Denoise)"}),(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xs font-black text-[#546147] italic",children:tS.toFixed(2)})]}),(0,s.jsx)("input",{type:"range",min:"0.1",max:"1.0",step:"0.05",value:tS,onChange:t=>tz(Number(t.target.value)),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full accent-[#546147] h-4 bg-[#4a463d]/20 rounded-full cursor-pointer transition-all"}),(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[7px] text-[#4a463d]/20 uppercase text-right tracking-widest italic",children:tS<.5?"Strong Source Integrity":tS>.8?"Max AI Creativity":"Balanced Style"})]}),tv>3&&(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-center gap-3",children:[(0,s.jsx)(H,{size:14,className:"text-rose-400 flex-shrink-0"}),(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[8px] text-rose-300 font-bold leading-tight flex-1",children:"WARNING: 4초 이상의 긴 영상은 고사양 그래픽카드(12GB+)가 필요합니다. 8GB 환경에서는 생성 시간이 매우 길어지거나 오류가 날 수 있습니다."})]})]})]})]}),(0,s.jsx)("div",{onDragOver:t=>{t.preventDefault(),t5(!0)},onDragLeave:()=>t5(!1),onDrop:iP,className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`w-full min-h-[120px] p-4 border-2 border-dashed rounded-[2.5rem] overflow-hidden flex items-center justify-center transition-all ${t3?"bg-[#8c8270]/10 border-[#8c8270]/40":"bg-[#fdead3]/20 border-transparent"}`,children:t2.length>0?(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" grid grid-cols-3 gap-3 w-full h-full",children:[t2.map((t,e)=>(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" relative aspect-video rounded-xl overflow-hidden border border-white/10 group",children:[(0,s.jsx)("img",{src:t.previewUrl,className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full h-full object-cover group-hover:scale-110 transition-transform"}),(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" absolute inset-0 bg-[#fdead3]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",children:(0,s.jsx)("button",{onClick:()=>t4(t=>t.filter((t,i)=>i!==e)),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:(0,s.jsx)(C,{size:12,className:"text-[#4a463d] bg-red-500 rounded-full p-0.5"})})}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" absolute bottom-1 left-1 px-1.5 py-0.5 bg-black/60 rounded text-[6px] font-black text-[#4a463d] uppercase italic",children:["Frame ",e+1]})]},e)),t2.length<6&&(0,s.jsx)("div",{onClick:()=>document.getElementById("fileInput")?.click(),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" aspect-video rounded-xl border border-transparent bg-[#fdead3]/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors",children:(0,s.jsx)(W,{size:14,className:"text-[#4a463d]/20"})})]}):(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-center space-y-2 pointer-events-none",children:[(0,s.jsx)(W,{size:20,className:"mx-auto text-[#8c8270]/50"}),(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xs font-black uppercase tracking-widest text-[#4a463d]/30 italic",children:"Drop 1 Image (Imagination) or up to 6 (Interpolation)"}),(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[7px] text-[#4a463d]/20 uppercase tracking-tighter",children:"AI Motion Synthesis & Style Preservation Pipeline"})]})}),(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" grid grid-cols-3 gap-3",children:[{id:"cinematic",label:"Dynamic",icon:w,color:"text-yellow-400",bg:"bg-yellow-500/10 border-yellow-500/20"},{id:"slowmo",label:"Slow-Mo",icon:T,color:"text-[#4a463d]",bg:"bg-[#546147]/10 border-[#546147]/20"},{id:"handdrawn",label:"Handy",icon:V,color:"text-orange-400",bg:"bg-orange-500/10 border-orange-500/20"}].map(t=>(0,s.jsxs)("div",{onClick:()=>ea(t.id),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col items-center gap-2 ${ei===t.id?t.bg:"bg-[#fdead3]/10 border-transparent opacity-40 hover:opacity-100"}`,children:[(0,s.jsx)(t.icon,{size:14,className:ei===t.id?t.color:"text-[#4a463d]/40"}),(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`text-[8px] font-black uppercase tracking-widest ${ei===t.id?"text-[#4a463d]":"text-[#4a463d]/20"}`,children:t.label})]},t.id))}),(0,s.jsxs)("button",{disabled:0===t2.length&&!eC,onClick:iB,className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`w-full py-4 md:py-6 lg:py-8 rounded-[3rem] flex flex-col items-center justify-center gap-2 transition-all shadow-2xl ${t2.length>0||eC?"bg-gradient-to-r from-[#8c8270] to-[#546147] shadow-[#8c8270]/40 hover:scale-[1.02] active:scale-95":"bg-[#fdead3]/10 text-[#4a463d]/20 cursor-not-allowed"}`,children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center gap-4",children:[(0,s.jsx)(z,{size:24,className:"fill-current text-[#4a463d]"}),(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[#4a463d] text-xl font-black uppercase tracking-[0.2em] italic",children:"Create Cinematic Animation"})]}),(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[10px] text-[#4a463d]/50 font-black uppercase tracking-[0.3em]",children:"AI Motion Synthesis Process"})]}),eV&&(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full p-6 bg-[#8c8270]/5 border border-[#8c8270]/20 rounded-3xl space-y-4",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center justify-between",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center gap-3",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" relative",children:[(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-8 h-8 rounded-xl bg-[#8c8270]/20 flex items-center justify-center",children:(0,s.jsx)(y,{size:16,className:"text-[#8c8270] animate-spin"})}),(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" absolute -top-1 -right-1 w-3 h-3 bg-[#8c8270] rounded-full animate-pulse"})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:[(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xs font-black text-[#8c8270] uppercase tracking-widest",children:eW}),(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[8px] text-[#4a463d]/20 font-bold uppercase tracking-widest mt-0.5",children:"ComfyUI AnimateDiff Pipeline Active"})]})]}),(0,s.jsx)("button",{onClick:()=>st?.executeTool("photoshop","ai_cancel"),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-rose-400 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all active:scale-95",children:"Cancel"})]}),(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full h-1.5 bg-[#fdead3]/10 rounded-full overflow-hidden relative",children:(0,s.jsx)(n0.div,{initial:{width:0},animate:{width:a?.progress!==void 0?`${a.progress}%`:"100%"},className:`h-full bg-gradient-to-r from-[#8c8270] to-[#d4cfc0] rounded-full ${a?.progress===void 0?"animate-pulse":""}`,style:{transition:"width 0.4s cubic-bezier(0.4, 0, 0.2, 1)"}})}),a?.progress!==void 0&&(0,s.jsxs)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-right text-[10px] font-black text-[#8c8270]",children:[a.progress,"%"]})]}),!eV&&eW&&(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`w-full px-4 py-3 rounded-2xl text-xs font-black uppercase tracking-widest text-center ${eW.includes("❌")?"bg-red-500/10 border border-red-500/20 text-red-400":"bg-[#546147]/10 border border-emerald-500/20 text-[#546147]"}`,children:eW}),eF&&(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full space-y-3",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center justify-between",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center gap-3",children:[(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[9px] font-black text-[#8c8270]/60 uppercase tracking-widest",children:"Generated Animation"}),eF&&(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center gap-2",children:[(0,s.jsxs)("a",{href:eF,download:"animation_result.webp",title:"애니메이션 다운로드",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" px-3 py-1.5 bg-[#fdead3]/10 hover:bg-[#8c8270]/20 border border-white/10 hover:border-[#8c8270]/30 rounded-xl transition-all flex items-center gap-2",children:[(0,s.jsx)(M,{size:10,className:"text-[#8c8270]"}),(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[8px] font-black uppercase tracking-widest text-[#8c8270]",children:"Download"})]}),(0,s.jsxs)("button",{onClick:()=>st?.executeTool("photoshop","open_assets_folder"),title:"에셋 폴더 열기",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" px-3 py-1.5 bg-[#fdead3]/10 hover:bg-[#8c8270]/20 border border-white/10 hover:border-[#8c8270]/30 rounded-xl transition-all flex items-center gap-2",children:[(0,s.jsx)(G,{size:10,className:"text-[#8c8270]"}),(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[8px] font-black uppercase tracking-widest text-[#8c8270]",children:"Folder"})]})]})]}),(0,s.jsxs)("button",{onClick:()=>eG(!0),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center gap-1.5 px-3 py-1.5 bg-[#fdead3]/10 hover:bg-[#8c8270]/20 border border-white/10 hover:border-[#8c8270]/30 rounded-xl transition-all group",children:[(0,s.jsx)(O,{size:10,className:"text-[#4a463d]/40 group-hover:text-[#8c8270]"}),(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[8px] font-black uppercase tracking-widest text-[#4a463d]/40 group-hover:text-[#8c8270]",children:"Fullscreen"})]})]}),(0,s.jsxs)("div",{onClick:()=>eG(!0),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`relative rounded-2xl overflow-hidden border border-[#d4cfc0] bg-[#fdead3]/40 group cursor-pointer aspect-[${e8.replace(":","/")}] shadow-lg`,children:[(0,s.jsx)("img",{src:eF,alt:"Generated Animation",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full h-full object-cover"}),(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" absolute inset-0 bg-[#fdead3]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all",children:(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center",children:(0,s.jsx)(O,{size:20,className:"text-[#4a463d]"})})})]})]})]})]}):6===t?(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full h-full p-2 md:p-4 lg:p-6 flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6 relative z-10 text-[#4a463d]",children:[(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" absolute top-0 right-1/4 w-96 h-96 bg-[#d4cfc0]/10 blur-[100px] rounded-full pointer-events-none"}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex-[1.2] bg-white/[0.03] border border-transparent rounded-[2.5rem] p-3 md:p-5 lg:p-6 flex flex-col gap-3 md:gap-4 backdrop-blur-3xl shadow-3xl overflow-y-auto",children:[(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex bg-[#fdead3]/40 p-1 rounded-3xl border border-white/10 mb-2 shadow-inner",children:[{id:"t2i",name:"텍스트 명령",desc:"자체 상상"},{id:"i2i",name:"이미지 기반",desc:"뼈대 활용"},{id:"ps_sync",name:"포토샵 연동",desc:"그림 실시간 반영"}].map(t=>(0,s.jsxs)("button",{onClick:()=>eE(t.id),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`flex-1 py-3 px-2 rounded-2xl flex flex-col items-center justify-center transition-all ${eA===t.id?"bg-gradient-to-br from-[#d4cfc0] to-[#546147] shadow-[0_0_20px_rgba(244,63,94,0.3)] text-[#4a463d]":"text-[#4a463d]/40 hover:bg-[#fdead3]/10 hover:text-[#4a463d]/80"}`,children:[(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-sm font-black uppercase tracking-[0.2em]",children:t.name}),eA===t.id&&(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[9px] opacity-80 mt-1 uppercase tracking-widest hidden xl:block",children:t.desc})]},t.id))}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center gap-4 mb-2",children:[(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-12 h-12 bg-[#fdead3]/10 rounded-2xl flex items-center justify-center shadow-lg shadow-black/20 border border-white/10",children:(0,s.jsx)(x,{size:24,className:"t2i"===eA?"text-[#546147]":"i2i"===eA?"text-[#4a463d]":"text-rose-400"})}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:[(0,s.jsx)("h3",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xl font-black uppercase italic tracking-tighter text-[#4a463d]",children:"ps_sync"===eA?"포토샵 실시간 동기화":"i2i"===eA?"커스텀 이미지 기반 생성":"텍스트 자율 상상 생성"}),(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[#8c8270] text-xs uppercase tracking-widest font-black",children:"ps_sync"===eA?"Photoshop Realtime Sync":"i2i"===eA?"Image-to-Image Generation":"Text-to-Image Generation"})]})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" space-y-4",children:["i2i"===eA&&(0,s.jsxs)("div",{onDragOver:t=>{t.preventDefault(),t5(!0)},onDragLeave:()=>t5(!1),onDrop:iP,onClick:()=>{document.getElementById("aiDrawUploadField")?.click()},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`w-full p-6 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all ${t3?"border-[#d4cfc0] bg-[#d4cfc0]/10":"border-white/10 hover:border-[#d4cfc0]/30 hover:bg-[#fdead3]/10 bg-[#fdead3]/20"}`,children:[(0,s.jsx)("input",{id:"aiDrawUploadField",type:"file",accept:"image/*",onChange:t=>{t.target.files&&t.target.files.length>0&&iP({preventDefault:()=>{},dataTransfer:{files:t.target.files}})},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" hidden"}),t2.length>0&&6===t?(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center gap-4 w-full",children:[(0,s.jsx)("img",{src:t2[0].previewUrl,alt:"preview",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" h-16 w-16 object-cover rounded-xl border border-white/20 shadow-md"}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-left flex-1",children:[(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[11px] font-bold text-[#546147] mb-1",children:"✓ 이미지 로드 완료"}),(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[10px] text-[#4a463d]/50",children:t2[0].name})]}),(0,s.jsx)("button",{onClick:t=>{t.stopPropagation(),t4([])},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" px-3 py-1.5 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-lg text-[10px] font-bold uppercase transition-colors",children:"초기화"})]}):(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-center py-2 relative pointer-events-none",children:[(0,s.jsx)(x,{className:"w-8 h-8 text-[#4a463d]/20 mx-auto mb-3"}),(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[12px] font-bold text-[#4a463d]/80",children:"클릭하거나 이미지를 끌어다 놓으세요"}),(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[10px] text-[#4a463d]/40 mt-1 uppercase tracking-widest",children:"Image Upload (JPG, PNG)"})]})]}),(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex gap-2 pb-2 overflow-x-auto no-scrollbar",children:[{id:"anime",name:"일본 애니메이션",icon:"🎨",prompt:"anime style, masterpiece, best quality, cel shaded, vibrant colors, 2D"},{id:"cinematic",name:"시네마틱 실사",icon:"🎬",prompt:"photorealistic, cinematic lighting, hyper-detailed, 8k"},{id:"vector",name:"벡터 일러스트",icon:"📐",prompt:"vector art, clean lines, flat colors, minimalist illustration, high contrast, svg style, no gradients, sharp edges"},{id:"art",name:"디지털 아트",icon:"✨",prompt:"digital painting, concept art, artistic, trending on artstation"},{id:"sketch",name:"라인 아트",icon:"✏️",prompt:"clean lineart, sketch style, monochrome, traditional media"}].map(t=>(0,s.jsxs)("button",{onClick:()=>en(e=>{let i=e.replace(/anime style|masterpiece|photorealistic|vector art|digital painting|clean lineart/g,"").trim();return`${t.prompt}, ${i}`.replace(/, ,/g,",").replace(/^, /,"")}),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex-shrink-0 px-3 py-1.5 bg-[#fdead3]/10 border border-white/10 rounded-full flex items-center gap-2 hover:bg-[#d4cfc0]/20 hover:border-[#d4cfc0]/30 transition-all group",children:[(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xs",children:t.icon}),(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[10px] font-bold text-[#4a463d]/60 group-hover:text-[#4a463d] transition-colors whitespace-nowrap",children:t.name})]},t.id))}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" space-y-2",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex justify-between px-1",children:[(0,s.jsx)("label",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xs font-black text-[#4a463d]/40 uppercase tracking-widest",children:"긍정 프롬프트"}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex gap-2",children:[(0,s.jsx)("button",{onClick:iD,disabled:!er||tT,title:"한국어 프롬프트 영문 번역 (LibreTranslate)",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`p-1.5 rounded-lg transition-all ${tT?"bg-[#d4cfc0] animate-pulse":"bg-[#d4cfc0]/20 hover:bg-[#d4cfc0]/40 text-[#546147] border border-[#d4cfc0]/30"}`,children:tT?(0,s.jsx)(y,{size:12,className:"animate-spin"}):(0,s.jsx)(x,{size:12})}),(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[9px] text-[#56604e] font-bold uppercase transition-all mt-1",children:er.includes("anime")?"✨ 애니메이션 최적화됨":"AI 가이드"})]})]}),(0,s.jsx)("textarea",{value:er,onChange:t=>en(t.target.value),placeholder:"그림에 포함하고 싶은 내용을 영어로 적어주세요...",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full h-24 bg-[#fdead3]/40 border border-white/10 rounded-[1.5rem] p-4 text-xs font-black text-[#4a463d]/90 placeholder:text-[#4a463d]/10 focus:outline-none focus:border-[#d4cfc0]/50 transition-all resize-none"})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" space-y-2",children:[(0,s.jsx)("label",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xs font-black text-[#4a463d]/40 uppercase tracking-widest px-1",children:"부정 프롬프트"}),(0,s.jsx)("input",{type:"text",value:es,onChange:t=>eo(t.target.value),placeholder:"제외하고 싶은 요소...",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full bg-[#fdead3]/40 border border-white/10 rounded-2xl px-6 py-4 text-xs font-black text-[#4a463d]/50 focus:outline-none focus:border-white/20 transition-all"})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" grid grid-cols-2 gap-4",children:["t2i"!==eA&&(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" space-y-3",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex justify-between px-1",children:[(0,s.jsx)("label",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xs font-black text-[#4a463d]/40 uppercase tracking-widest",children:"스케치 일치율 (Denoise)"}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex flex-col items-end",children:[(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xs font-black text-[#56604e] italic",children:el.toFixed(2)}),(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[10px] font-black text-[#4a463d]/30 uppercase tracking-tighter",children:el<.35?"원본 보존":el<.65?"밸런스 형":"AI 창의형"})]})]}),(0,s.jsx)("input",{type:"range",min:"0.1",max:"0.9",step:"0.05",value:el,onChange:t=>{let e=parseFloat(t.target.value);ed(e),ep&&iM({denoisingStrength:e})},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full accent-[#546147] h-4 bg-[#4a463d]/20 rounded-full cursor-pointer transition-all appearance-none"})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`space-y-3 ${"t2i"===eA?"col-span-2":""}`,children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex justify-between px-1",children:[(0,s.jsx)("label",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[9px] font-black text-[#4a463d]/40 uppercase tracking-widest",children:"해상도 / 비율"}),(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[9px] font-black text-[#4a463d] italic",children:e8})]}),(0,s.jsxs)("select",{value:e3,onChange:t=>{let e=t.target.value;((t,e)=>{e5(t),e6(e);let[i,a]=t.split("x").map(Number);ep&&iM({width:i,height:a})})(e,{"512x512":"1:1","640x480":"4:3","896x504":"16:9","832x1216":"9:16"}[e]||"Custom")},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full bg-[#fdead3]/40 border border-white/10 rounded-2xl px-6 py-4 text-xs font-black text-[#4a463d]/80 focus:outline-none appearance-none cursor-pointer hover:bg-[#d4cfc0]/20 transition-colors",children:[(0,s.jsx)("option",{value:"512x512",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:"1:1 (Square - 512x512)"}),(0,s.jsx)("option",{value:"640x480",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:"4:3 (Standard - 640x480)"}),(0,s.jsx)("option",{value:"896x504",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:"16:9 (Widescreen - 896x504)"}),(0,s.jsx)("option",{value:"832x1216",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:"9:16 (Vertical Portrait - 832x1216)"})]})]})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" space-y-2",children:[(0,s.jsx)("label",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xs font-black text-[#4a463d]/40 uppercase tracking-widest px-1",children:"ComfyUI 모델 선택"}),(0,s.jsx)("select",{value:ek,onChange:t=>{e_(t.target.value),ep&&iM({modelName:t.target.value})},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full bg-[#fdead3]/40 border border-white/10 rounded-2xl px-6 py-4 text-xs font-black text-[#4a463d]/80 focus:outline-none appearance-none cursor-pointer hover:bg-[#d4cfc0]/20 transition-colors",children:e2.length>0?e2.map(t=>{let e=t;return e="Custom Anime v4 sharp.safetensors"===t?"Custom Anime v4 sharp":"ponyDiffusionV6XL_v6StartWithThisOne.safetensors"===t?"포니 디퓨전 (Pony V6)":t.replace(".safetensors","").replace(".ckpt",""),(0,s.jsx)("option",{value:t,className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" bg-slate-900",children:e},t)}):(0,s.jsx)("option",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:"모델을 찾을 수 없습니다"})})]}),ez&&(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" space-y-2 animate-in fade-in slide-in-from-top-2 duration-300",children:[(0,s.jsx)("label",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xs font-black text-[#4a463d]/40 uppercase tracking-widest px-1",children:"업스케일 모델 선택"}),(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" grid grid-cols-2 gap-2",children:[{id:"4x-UltraSharp.pth",name:"UltraSharp"},{id:"RealESRGAN_x4plus_anime_6B.pth",name:"ANIME"},{id:"ESRGAN_4x.pth",name:"ESRGAN"},{id:"SwinIR_4x.pth",name:"SwinIR"}].map(t=>(0,s.jsx)("button",{onClick:()=>eS(t.id),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`py-2 rounded-xl border text-[9px] font-black uppercase transition-all ${ej===t.id?"bg-rose-500/20 border-rose-500/40 text-rose-400":"bg-[#fdead3]/20 border-transparent text-[#4a463d]/30 hover:border-white/20"}`,children:t.name},t.id))})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center justify-between p-4 bg-[#fdead3]/10 rounded-2xl border border-transparent",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex flex-col gap-1",children:[(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[9px] font-black text-rose-400 uppercase tracking-widest",children:"HQ 업스케일 모드"}),(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[8px] text-[#4a463d]/30 uppercase",children:"화질 깨짐 방지 및 디테일 강화"})]}),(0,s.jsx)("button",{onClick:()=>eN(!ez),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`w-12 h-6 rounded-full transition-all relative ${ez?"bg-[#546147] shadow-[0_0_10px_rgba(84,97,71,0.4)]":"bg-[#8c8270]/20"}`,children:(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${ez?"left-7":"left-1"}`})})]}),"ps_sync"===eA&&(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center justify-between p-4 bg-[#fdead3]/10 rounded-2xl border border-transparent",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex flex-col gap-1",children:[(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[9px] font-black text-[#4a463d]/80 uppercase tracking-widest",children:"실시간 자동 모드"}),(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[8px] text-[#4a463d]/30 uppercase",children:"그릴 때마다 자동 생성"})]}),(0,s.jsx)("button",{onClick:()=>eg(!eb),className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`w-12 h-6 rounded-full transition-all relative ${eb?"bg-[#546147]":"bg-[#8c8270]/20"}`,children:(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${eb?"left-7":"left-1"}`})})]})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" mt-auto space-y-3",children:[(ep||a?.status==="RUNNING")&&a?.target==="ai_drawing"&&(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full p-4 bg-[#8c8270]/5 border border-[#8c8270]/20 rounded-2xl space-y-3 mb-2 animate-in fade-in slide-in-from-bottom-2",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center justify-between",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center gap-2",children:[(0,s.jsx)(y,{size:12,className:"text-[#8c8270] animate-spin"}),(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[10px] font-black text-[#8c8270] uppercase tracking-widest",children:ep?"Canvas Monitoring...":"Generating Drawing..."})]}),(0,s.jsx)("button",{onClick:()=>{iO(),st?.executeTool("photoshop","ai_cancel")},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" px-2 py-1 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-rose-400 rounded-lg text-[8px] font-black uppercase tracking-widest transition-all",children:"Cancel"})]}),(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full h-1 bg-[#fdead3]/10 rounded-full overflow-hidden",children:(0,s.jsx)(n0.div,{initial:{width:0},animate:{width:a?.progress!==void 0?`${a.progress}%`:ep?"0%":"100%"},className:"h-full bg-[#8c8270] rounded-full",style:{transition:"width 0.4s ease-out"}})})]}),(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex gap-3",children:(0,s.jsxs)("button",{onClick:ep?iO:iR,disabled:!e0||"i2i"===eA&&0===t2.length,className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`flex-1 py-6 rounded-3xl flex items-center justify-center gap-3 text-sm font-black uppercase tracking-[0.2em] transition-all shadow-2xl active:scale-95 ${ep?"bg-red-500 hover:bg-red-600 text-[#4a463d] shadow-red-500/20":"bg-gradient-to-r from-[#d4cfc0] to-[#546147] hover:scale-[1.02] text-[#4a463d] shadow-[#d4cfc0]/40"} ${!e0||"i2i"===eA&&0===t2.length?"opacity-50 grayscale cursor-not-allowed":""}`,children:[ep?(0,s.jsx)(N,{size:18,className:"fill-current"}):eb&&"ps_sync"===eA?(0,s.jsx)(z,{size:18,className:"fill-current"}):(0,s.jsx)(x,{size:18}),ep?"동작 중지":"ps_sync"===eA?eb?"실시간 시작":ez?"HQ 연동 생성":"포토샵 단일 1장 생성":"i2i"===eA?"참조 이미지 기반 생성":"텍스트 프롬프트 기반 생성"]})}),!e0&&(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" p-4 bg-orange-500/10 border border-orange-500/30 rounded-2xl flex items-center gap-3",children:[(0,s.jsx)(U,{size:14,className:"text-orange-400 shrink-0"}),(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[9px] text-orange-200 leading-tight",children:"ComfyUI 연결 필요 (run_nvidia_gpu.bat 실행 확인)"})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex items-center gap-2 px-1",children:[(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`w-1.5 h-1.5 rounded-full ${e0?"bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]":"bg-red-500"}`}),(0,s.jsxs)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[9px] font-black uppercase tracking-widest text-[#4a463d]/20",children:["시스템 상태: ",e0?"ONLINE":"OFFLINE"]})]})]})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex-[2] flex flex-col gap-6",children:[(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" flex-1 bg-[#8c8270]/10 border border-[#4a463d]/10 rounded-[3.5rem] relative overflow-hidden group shadow-xl shadow-[#4a463d]/5 flex items-center justify-center backdrop-blur-md",children:[(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full h-full flex items-center justify-center p-8",children:(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`relative bg-[#d4cfc0]/20 shadow-2xl overflow-hidden transition-all duration-500 ${"16:9"===e8?"aspect-video w-full":"4:3"===e8?"aspect-[4/3] h-full":"aspect-square h-full"}`,children:ef?(0,s.jsx)("img",{src:ef,alt:"AI 결과",onError:t=>{console.error("Image Load Error",ef.substring(0,50)),ew("❌ 이미지 로드 실패 (데이터 누락)"),eh(null)},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full h-full object-cover"}):(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-full h-full flex flex-col items-center justify-center gap-6",children:[(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-24 h-24 bg-[#fdead3]/20 rounded-[2rem] border border-[#4a463d]/5 flex items-center justify-center text-[#4a463d]/10",children:(0,s.jsx)(g,{size:40})}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-center space-y-1",children:[(0,s.jsx)("h4",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-lg font-black uppercase italic tracking-tighter text-[#4a463d]/40",children:"AI 결과 대기 중"}),(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[10px] text-[#4a463d]/30 font-black uppercase tracking-[0.3em]",children:"포토샵 캔버스를 확인해주세요"})]})]})})}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" absolute top-8 left-8 flex items-center gap-3 bg-[#fdead3]/80 backdrop-blur-xl border border-[#4a463d]/10 rounded-full px-5 py-2.5 z-20 shadow-lg shadow-[#4a463d]/5",children:[(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" "+`w-2 h-2 rounded-full ${ep||ex?"bg-[#546147] animate-pulse":"bg-[#4a463d]/20"}`}),(0,s.jsx)("span",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xs font-black uppercase tracking-widest text-[#4a463d]",children:ey||(ep?"현황: 캔버스 실시간 감시 중":"현황: 시스템 대기 중")}),ex&&(0,s.jsx)(y,{size:12,className:"text-[#546147] animate-spin ml-1"})]}),ef&&!ex&&(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" absolute bottom-10 right-10 flex gap-4 opacity-100 transition-all duration-300 transform translate-y-0 group-hover:scale-105",children:[(0,s.jsxs)("button",{onClick:()=>{st?.executeTool("photoshop","ai_draw_apply")},className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" px-8 py-4 bg-white text-[#546147] rounded-2xl text-sm font-black uppercase tracking-widest flex items-center gap-3 shadow-2xl shadow-slate-400/50 hover:bg-rose-50 transition-all active:scale-95 border-2 border-[#546147]/10",children:[(0,s.jsx)(x,{size:16})," 포토샵으로 가져오기"]}),(0,s.jsx)("a",{href:ef,download:"ai_result.png",title:"이미지 다운로드",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-14 h-14 bg-white text-[#546147] border-2 border-[#546147]/10 rounded-2xl flex items-center justify-center hover:bg-rose-50 transition-all shadow-2xl shadow-slate-400/50",children:(0,s.jsx)(M,{size:20})}),(0,s.jsx)("button",{onClick:()=>st?.executeTool("photoshop","open_assets_folder"),title:"폴더 열기",className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-14 h-14 bg-white text-[#546147] border-2 border-[#546147]/10 rounded-2xl flex items-center justify-center hover:bg-rose-50 transition-all shadow-2xl shadow-slate-400/50",children:(0,s.jsx)(G,{size:20})})]})]}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" bg-transparent border border-transparent rounded-[2.5rem] p-8 flex items-center gap-6",children:[(0,s.jsx)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" w-12 h-12 rounded-2xl bg-[#546147]/10 flex items-center justify-center text-[#4a463d] shrink-0",children:(0,s.jsx)(U,{size:24})}),(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:[(0,s.jsx)("h5",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-sm font-black text-[#4a463d]/80 uppercase tracking-widest mb-1",children:"사용 가이드"}),(0,s.jsxs)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[10px] text-[#4a463d]/40 leading-relaxed",children:["포토샵에서 그림을 그리면 설정한 간격에 맞춰 실시간으로 AI가 보정해줍니다. ",(0,s.jsx)("b",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:"Denoising"})," 수치가 낮을수록 내 스케치를 더 많이 유지하고, 높을수록 AI가 더 창의적으로 그립니다. 마음에 드는 결과가 나오면 ",(0,s.jsx)("b",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]]),children:"'Import to Photoshop'"})," 버튼을 눌러 레이어로 즉시 추가하세요."]})]})]})]})]}):(0,s.jsxs)("div",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-center",children:[(0,s.jsx)(x,{size:48,className:"mx-auto text-[#546147]/20 mb-6"}),(0,s.jsx)("h3",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-xl font-black uppercase italic mb-2 tracking-tighter text-[#4a463d]/50",children:"Asset Generator Ready"}),(0,s.jsx)("p",{className:o.default.dynamic([["1f37cf710a4b869b",[ib?`
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        `:""]]])+" text-[#8c8270] text-sm uppercase tracking-widest",children:"Select workspace or launch generator"})]})]})]})]})})]}),(0,s.jsx)(n7,{children:!to&&(0,s.jsxs)("div",{className:"absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 text-[10px] text-[#4a463d]/60 font-black tracking-widest uppercase py-4",children:[(0,s.jsx)(w,{size:10,className:"text-[#546147] text-shadow-sm"}),"Real-time Sync Active"]})}),(0,s.jsx)(n7,{children:eq&&eF&&(0,s.jsx)(n0.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-[9999] bg-black/90 backdrop-blur-2xl flex items-center justify-center",onClick:()=>eG(!1),children:(0,s.jsxs)(n0.div,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",damping:20},className:"relative max-w-[90vw] max-h-[90vh]",onClick:t=>t.stopPropagation(),children:[(0,s.jsx)("img",{src:eF,alt:"Generated Animation Fullscreen",className:"max-w-full max-h-[85vh] rounded-3xl shadow-xl shadow-slate-200/50 shadow-[#8c8270]/20 border border-white/10"}),(0,s.jsx)("button",{onClick:()=>eG(!1),className:"absolute -top-4 -right-4 w-10 h-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center hover:bg-red-500/50 transition-all",children:(0,s.jsx)(C,{size:18,className:"text-[#4a463d]"})}),(0,s.jsx)("div",{className:"absolute -bottom-10 left-1/2 -translate-x-1/2 text-[9px] font-black text-[#4a463d]/30 uppercase tracking-widest",children:"Click outside or press X to close"})]})})}),(0,s.jsx)(n7,{children:f&&(0,s.jsx)(n0.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-black/80 backdrop-blur-3xl",onClick:()=>h(!1),children:(0,s.jsxs)(n0.div,{initial:{scale:.9,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},exit:{scale:.9,opacity:0,y:20},className:"w-full max-w-lg bg-white/90 border border-[#d4cfc0]/50 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 shadow-3xl relative overflow-hidden",onClick:t=>t.stopPropagation(),children:[(0,s.jsx)("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#546147] via-[#8c8270] to-[#d4cfc0]"}),(0,s.jsxs)("div",{className:"flex items-center justify-between mb-10",children:[(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsx)("div",{className:"w-12 h-12 bg-[#546147]/20 rounded-2xl flex items-center justify-center border border-[#546147]/30",children:(0,s.jsx)(_,{size:24,className:"text-[#4a463d]"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"text-2xl font-black text-[#4a463d] italic uppercase tracking-tighter",children:"Configuration"}),(0,s.jsx)("p",{className:"text-[10px] text-[#8c8270] font-bold uppercase tracking-widest leading-none mt-1",children:"Global System Settings"})]})]}),(0,s.jsx)("button",{onClick:()=>h(!1),className:"p-3 hover:bg-[#fdead3]/10 rounded-2xl transition-colors",children:(0,s.jsx)(C,{size:20,className:"text-[#8c8270]"})})]}),(0,s.jsxs)("div",{className:"space-y-8 max-h-[60vh] overflow-y-auto pr-2 scrollbar-hide",children:[(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsx)("h3",{className:"text-xs font-black text-[#4a463d] uppercase tracking-[0.2em] px-1",children:"Adobe Creative Cloud"}),(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)("div",{className:"space-y-1.5",children:[(0,s.jsxs)("div",{className:"flex justify-between px-1",children:[(0,s.jsx)("label",{className:"text-[9px] font-bold text-[#4a463d]/30 uppercase",children:"Photoshop .exe Path"}),(0,s.jsx)("span",{className:"text-[8px] text-emerald-500 font-black tracking-widest uppercase italic",children:"Connected"})]}),(0,s.jsx)("input",{type:"text",value:p,onChange:t=>j(t.target.value),placeholder:"C:\\Program Files\\Adobe\\Adobe Photoshop 2024\\Photoshop.exe",className:"w-full bg-[#fdead3]/40 border border-white/10 rounded-xl px-4 py-3 text-[10px] font-mono text-[#4a463d]/70 focus:border-[#546147]/50 outline-none transition-all"})]}),(0,s.jsxs)("div",{className:"space-y-1.5",children:[(0,s.jsx)("label",{className:"text-[9px] font-bold text-[#4a463d]/30 uppercase px-1",children:"Illustrator .exe Path"}),(0,s.jsx)("input",{type:"text",value:A,onChange:t=>E(t.target.value),placeholder:"C:\\Program Files\\Adobe\\Adobe Illustrator 2024\\Support Files\\Contents\\Windows\\Illustrator.exe",className:"w-full bg-[#fdead3]/40 border border-white/10 rounded-xl px-4 py-3 text-[10px] font-mono text-[#4a463d]/70 focus:border-[#546147]/50 outline-none transition-all"})]})]})]}),(0,s.jsx)("div",{className:"pt-4",children:(0,s.jsxs)("button",{onClick:()=>{st?.executeTool("config","save_adobe_paths",{photoshopPath:p,illustratorPath:A}),h(!1)},className:"w-full py-4 bg-[#546147]/10 hover:bg-[#546147]/20 border border-[#546147]/30 rounded-2xl text-xs font-black uppercase tracking-widest text-[#4a463d] transition-all flex items-center justify-center gap-2",children:[(0,s.jsx)(S,{size:14})," Save Configuration"]})}),(0,s.jsxs)("div",{className:"pt-8 border-t border-transparent space-y-4",children:[(0,s.jsx)("h3",{className:"text-xs font-black text-rose-400 uppercase tracking-[0.2em] px-1",children:"Security & Privacy"}),(0,s.jsxs)("div",{className:"p-5 bg-rose-500/5 border border-rose-500/10 rounded-[2rem] flex items-center justify-between group hover:border-rose-500/30 transition-all",children:[(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsx)("p",{className:"text-sm font-black text-[#4a463d] italic",children:"Adult Verification"}),(0,s.jsx)("p",{className:"text-xs text-[#8c8270] font-bold leading-tight",children:"Reset NSFW verification status for testing."})]}),(0,s.jsx)("button",{onClick:()=>{confirm("성인 인증 상태를 초기화하시겠습니까?\n이후 NSFW 콘텐츠 생성 시 다시 인증이 필요합니다.")&&(localStorage.removeItem("isAdultVerified"),i_(!1),alert("인증 상태가 초기화되었습니다."))},className:"px-4 py-2 bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-[#4a463d] rounded-xl text-xs font-black uppercase tracking-widest border border-rose-500/20 transition-all active:scale-95",children:"Reset Status"})]})]}),(0,s.jsx)("div",{className:"pt-8 border-t border-transparent space-y-5 pb-4",children:(0,s.jsxs)("div",{className:"flex items-center justify-between px-1",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)("div",{className:"w-8 h-8 bg-[#546147]/10 rounded-xl flex items-center justify-center",children:(0,s.jsx)(w,{size:14,className:"text-[#546147]"})}),(0,s.jsxs)("p",{className:"text-base font-black text-[#4a463d] italic uppercase",children:["Version 4.6.6 ",(0,s.jsx)("span",{className:"ml-2 text-[8px] bg-emerald-500/20 text-[#546147] px-2 py-0.5 rounded-full not-italic tracking-widest",children:"Stable"})]})]}),(0,s.jsxs)("button",{onClick:()=>{tP(!0),setTimeout(()=>{tP(!1),alert("현재 최신 버전(v4.6.5)을 사용 중입니다.\n새로운 기능이 추가되면 자동으로 업데이트 알림을 드립니다.")},1500)},className:"flex items-center gap-2 text-[#4a463d] hover:text-indigo-300 transition-colors",children:[(0,s.jsx)(q,{size:12,className:a?.status==="RUNNING"?"animate-spin":""}),(0,s.jsx)("span",{className:"text-[9px] font-black uppercase tracking-widest",children:"Check Update"})]})]})})]})]})})}),(0,s.jsx)(n7,{children:ij&&(0,s.jsx)(n0.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl",children:(0,s.jsxs)(n0.div,{initial:{scale:.9,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},exit:{scale:.9,opacity:0,y:20},className:"w-full max-w-md bg-gradient-to-br from-slate-900 via-black to-slate-900 p-8 rounded-[3.5rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative overflow-hidden",onClick:t=>t.stopPropagation(),children:[(0,s.jsx)("div",{className:"absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-600 via-white to-[#546147]"}),(0,s.jsx)("div",{className:"absolute -top-24 -right-24 w-64 h-64 bg-[#546147]/10 blur-[80px] rounded-full"}),(0,s.jsxs)("div",{className:"text-center space-y-8 relative z-10",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,s.jsx)("div",{className:"w-20 h-20 bg-[#fdead3]/10 rounded-[2rem] flex items-center justify-center border border-white/10 shadow-xl shadow-slate-200/50",children:(0,s.jsx)(D,{size:32,className:"text-[#4a463d]"})}),(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsx)("h2",{className:"text-2xl font-black text-[#4a463d] tracking-tight italic uppercase",children:"연령 확인 (19+)"}),(0,s.jsx)("p",{className:"text-[10px] text-[#8c8270] font-bold uppercase tracking-widest",children:"Adult Verification Required"})]})]}),(0,s.jsxs)("div",{className:"min-h-[140px] flex flex-col justify-center gap-5",children:[(0,s.jsx)("div",{className:"p-6 bg-[#fdead3]/10 rounded-3xl border border-transparent text-left",children:(0,s.jsxs)("p",{className:"text-xs text-[#4a463d]/70 leading-relaxed font-semibold",children:["입력하신 프롬프트에 ",(0,s.jsx)("span",{className:"text-red-400 font-black underline decoration-red-500/50",children:"NSFW 키워드"}),"가 포함되어 있습니다. 본 서비스는 만 19세 미만의 이용을 엄격히 금지합니다.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"구글 로그인을 통해 연령을 확인해 주세요."]})}),iA&&(0,s.jsxs)("div",{className:"p-3 bg-[#546147]/10 border border-[#546147]/20 rounded-2xl flex items-center justify-center gap-3",children:[(0,s.jsx)(y,{size:14,className:"text-[#4a463d] animate-spin"}),(0,s.jsx)("p",{className:"text-[10px] text-[#4a463d] font-bold animate-pulse",children:"브라우저에서 로그인을 진행하고 있습니다..."})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,s.jsxs)("button",{onClick:()=>{iE(!0),st?.executeTool("auth","google_login"),setTimeout(()=>iE(!1),3e4)},disabled:iA,className:"w-full py-5 bg-white text-slate-900 rounded-[2rem] text-sm font-black uppercase tracking-[0.2em] shadow-xl shadow-slate-200/50 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50",children:[(0,s.jsx)("img",{src:"https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",className:"w-5 h-5",alt:"Google"}),"Login with Google"]}),(0,s.jsx)("button",{onClick:()=>{iS(!1),iN(null),iE(!1)},className:"w-full py-4 text-[#4a463d]/30 hover:text-[#4a463d] rounded-2xl text-xs font-black uppercase tracking-widest transition-all",children:"취소"})]}),(0,s.jsx)("p",{className:"text-[8px] text-[#4a463d]/[0.05] uppercase tracking-[0.3em] font-black pointer-events-none",children:"Google People API Secure Age Verification"})]})]})})})]})}t.s(["default",()=>s8],52683)}]);