// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterTanh=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,c=e.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var f,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(t,r)||c.call(t,r)?(f=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=f):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,n.get),p&&i&&i.call(t,r,n.set),t};var f=r;function l(t,r,n){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var r,n,e;if(null==t)return s.call(t);n=t[w],r=m(t,w);try{t[w]=void 0}catch(r){return s.call(t)}return e=s.call(t),r?t[w]=n:delete t[w],e}:function(t){return s.call(t)},g=Boolean.prototype.toString;var A=b();function h(t){return"object"==typeof t&&(t instanceof Boolean||(A?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function _(t){return p(t)||h(t)}function O(){return new Function("return this;")()}l(_,"isPrimitive",p),l(_,"isObject",h);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="object"==typeof global?global:null;var T=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(U)return U;if(S)return S;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),F=T.document&&T.document.childNodes,I=Int8Array;function N(){return/^\s*function\s*([^(]*)/i}var P=/^\s*function\s*([^(]*)/i;l(N,"REGEXP",P);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function x(t){return null!==t&&"object"==typeof t}function G(t){var r,n,e,o;if(("Object"===(n=j(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=P.exec(e.toString()))return r[1]}return x(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(x,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!V(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(x));var H="function"==typeof y||"object"==typeof I||"function"==typeof F?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function B(t){return"function"===H(t)}function L(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&B(t.next)}function M(t){return"number"==typeof t}var W=Number,k=W.prototype.toString;var C=b();function Y(t){return"object"==typeof t&&(t instanceof W||(C?function(t){try{return k.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function R(t){return M(t)||Y(t)}l(R,"isPrimitive",M),l(R,"isObject",Y);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var q,z=Object.getPrototypeOf;q=B(Object.getPrototypeOf)?z:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var D=q;var J=Object.prototype;function K(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),D(t))}(t),!r||!m(t,"constructor")&&m(r,"constructor")&&B(r.constructor)&&"[object Function]"===j(r.constructor)&&m(r,"isPrototypeOf")&&B(r.isPrototypeOf)&&(r===J||function(t){var r;for(r in t)if(!m(t,r))return!1;return!0}(t)))}function Q(t,r){return K(r)?(m(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function Z(t,r,n){var e,o,u,i;if(!L(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!B(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Q(e,n)))throw u;return l(o={},"next",a),l(o,"return",c),X&&B(t[X])&&l(o,X,f),o;function a(){var n;return i?{done:!0}:(n=t.next()).done?(i=!0,n):{value:M(n.value)?r(n.value):e.invalid,done:!1}}function c(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function f(){return Z(t[X](),r,e)}}function $(t){return Math.abs(t)}function tt(t){return t!=t}var rt=Math.floor,nt=Math.ceil;function et(t){return t<0?nt(t):rt(t)}var ot=W.NEGATIVE_INFINITY,ut=Number.POSITIVE_INFINITY;function it(t){return t===ut||t===ot}var at="function"==typeof Uint32Array;var ct="function"==typeof Uint32Array?Uint32Array:null;var ft,lt="function"==typeof Uint32Array?Uint32Array:void 0;ft=function(){var t,r,n;if("function"!=typeof ct)return!1;try{r=new ct(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(at&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?lt:function(){throw new Error("not implemented")};var yt=ft,pt="function"==typeof Float64Array;var vt="function"==typeof Float64Array?Float64Array:null;var bt,st="function"==typeof Float64Array?Float64Array:void 0;bt=function(){var t,r,n;if("function"!=typeof vt)return!1;try{r=new vt([1,3.14,-3.14,NaN]),n=r,t=(pt&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?st:function(){throw new Error("not implemented")};var dt=bt,mt="function"==typeof Uint8Array;var wt="function"==typeof Uint8Array?Uint8Array:null;var jt,gt="function"==typeof Uint8Array?Uint8Array:void 0;jt=function(){var t,r,n;if("function"!=typeof wt)return!1;try{r=new wt(r=[1,3.14,-3.14,256,257]),n=r,t=(mt&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?gt:function(){throw new Error("not implemented")};var At=jt,ht="function"==typeof Uint16Array;var _t="function"==typeof Uint16Array?Uint16Array:null;var Ot,Ut="function"==typeof Uint16Array?Uint16Array:void 0;Ot=function(){var t,r,n;if("function"!=typeof _t)return!1;try{r=new _t(r=[1,3.14,-3.14,65536,65537]),n=r,t=(ht&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Ut:function(){throw new Error("not implemented")};var St,Et={uint16:Ot,uint8:At};(St=new Et.uint16(1))[0]=4660;var Tt,Ft,It=52===new Et.uint8(St.buffer)[0];!0===It?(Tt=1,Ft=0):(Tt=0,Ft=1);var Nt={HIGH:Tt,LOW:Ft},Pt=new dt(1),Vt=new yt(Pt.buffer),xt=Nt.HIGH,Gt=Nt.LOW;function Ht(t,r,n,e){return Pt[0]=t,r[e]=Vt[xt],r[e+n]=Vt[Gt],r}function Bt(t){return Ht(t,[0,0],1,0)}l(Bt,"assign",Ht);var Lt,Mt,Wt=!0===It?1:0,kt=new dt(1),Ct=new yt(kt.buffer);function Yt(t){return kt[0]=t,Ct[Wt]}!0===It?(Lt=1,Mt=0):(Lt=0,Mt=1);var Rt={HIGH:Lt,LOW:Mt},Xt=new dt(1),qt=new yt(Xt.buffer),zt=Rt.HIGH,Dt=Rt.LOW;function Jt(t,r){return qt[zt]=t,qt[Dt]=r,Xt[0]}var Kt=[0,0];function Qt(t,r,n,e){return tt(t)||it(t)?(r[e]=t,r[e+n]=0,r):0!==t&&$(t)<22250738585072014e-324?(r[e]=4503599627370496*t,r[e+n]=-52,r):(r[e]=t,r[e+n]=0,r)}l((function(t){return Qt(t,[0,0],1,0)}),"assign",Qt);var Zt=[0,0],$t=[0,0];function tr(t,r){var n,e,o,u,i,a;return 0===r||0===t||tt(t)||it(t)?t:(Qt(t,Zt,1,0),r+=Zt[1],r+=function(t){var r=Yt(t);return(r=(2146435072&r)>>>20)-1023|0}(t=Zt[0]),r<-1074?(o=0,u=t,Bt.assign(o,Kt,1,0),i=Kt[0],i&=2147483647,a=Yt(u),Jt(i|=a&=2147483648,Kt[1])):r>1023?t<0?ot:ut:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,Bt.assign(t,$t,1,0),n=$t[0],n&=2148532223,e*Jt(n|=r+1023<<20,$t[1])))}var rr=1.4426950408889634,nr=1/(1<<28);function er(t){var r;return tt(t)||t===ut?t:t===ot?0:t>709.782712893384?ut:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<nr?1+t:function(t,r,n){var e,o,u,i;return tr(1-(r-(e=t-r)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-t),n)}(t-.6931471803691238*(r=et(t<0?rr*t-.5:rr*t+.5)),1.9082149292705877e-10*r,r)}function or(t){var r,n;if((n=$(t))>44.014845965556525)return t<0?-1:1;if(n>=.625)n=1-2/((r=er(2*n))+1),t<0&&(n=-n);else{if(0===t)return t;n=t+t*(r=t*t)*function(t){var r,n;return 0===t?-.3333333333333332:((t<0?-t:t)<=1?(r=t*(t*(0*t-.9643991794250523)-99.28772310019185)-1614.6876844170845,n=4844.063053251255+t*(2235.4883906010045+t*(112.81167849163293+1*t))):(r=0+(t=1/t)*(t*(-1614.6876844170845*t-99.28772310019185)-.9643991794250523),n=1+t*(112.81167849163293+t*(2235.4883906010045+4844.063053251255*t))),r/n)}(r)}return n}return function(t){return Z(t,or)}}));
//# sourceMappingURL=index.js.map
