// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,c=e.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var f,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(t,r)||c.call(t,r)?(f=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=f):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,n.get),p&&i&&i.call(t,r,n.set),t};var f=r;function l(t,r,n){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var r,n,e;if(null==t)return s.call(t);n=t[w],r=m(t,w);try{t[w]=void 0}catch(r){return s.call(t)}return e=s.call(t),r?t[w]=n:delete t[w],e}:function(t){return s.call(t)},g=Boolean.prototype.toString;var A=b();function _(t){return"object"==typeof t&&(t instanceof Boolean||(A?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function h(t){return p(t)||_(t)}function O(){return new Function("return this;")()}l(h,"isPrimitive",p),l(h,"isObject",_);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},F="object"==typeof E?E:null;var I=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(U)return U;if(S)return S;if(F)return F;throw new Error("unexpected error. Unable to resolve global object.")}(),N=I.document&&I.document.childNodes,P=Int8Array;function T(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;l(T,"REGEXP",V);var G=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function H(t){return null!==t&&"object"==typeof t}function x(t){var r,n,e,o;if(("Object"===(n=j(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=V.exec(e.toString()))return r[1]}return H(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(H,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!G(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(H));var B="function"==typeof y||"object"==typeof P||"function"==typeof N?function(t){return x(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?x(t).toLowerCase():r};function L(t){return"function"===B(t)}function M(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&L(t.next)}function W(t){return"number"==typeof t}var k=Number,C=k.prototype.toString;var Y=b();function R(t){return"object"==typeof t&&(t instanceof k||(Y?function(t){try{return C.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function X(t){return W(t)||R(t)}l(X,"isPrimitive",W),l(X,"isObject",R);var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!G(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),J(t))}(t),!r||!m(t,"constructor")&&m(r,"constructor")&&L(r.constructor)&&"[object Function]"===j(r.constructor)&&m(r,"isPrototypeOf")&&L(r.isPrototypeOf)&&(r===K||function(t){var r;for(r in t)if(!m(t,r))return!1;return!0}(t)))}function Z(t,r){return Q(r)?(m(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function $(t,r,n){var e,o,u,i;if(!M(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!L(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,n)))throw u;return l(o={},"next",a),l(o,"return",c),q&&L(t[q])&&l(o,q,f),o;function a(){var n;return i?{done:!0}:(n=t.next()).done?(i=!0,n):{value:W(n.value)?r(n.value):e.invalid,done:!1}}function c(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function f(){return $(t[q](),r,e)}}function tt(t){return Math.abs(t)}function rt(t){return t!=t}var nt=Math.floor,et=Math.ceil;function ot(t){return t<0?et(t):nt(t)}var ut=k.NEGATIVE_INFINITY,it=Number.POSITIVE_INFINITY;function at(t){return t===it||t===ut}var ct="function"==typeof Uint32Array;var ft="function"==typeof Uint32Array?Uint32Array:null;var lt,yt="function"==typeof Uint32Array?Uint32Array:void 0;lt=function(){var t,r,n;if("function"!=typeof ft)return!1;try{r=new ft(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(ct&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?yt:function(){throw new Error("not implemented")};var pt=lt,vt="function"==typeof Float64Array;var bt="function"==typeof Float64Array?Float64Array:null;var st,dt="function"==typeof Float64Array?Float64Array:void 0;st=function(){var t,r,n;if("function"!=typeof bt)return!1;try{r=new bt([1,3.14,-3.14,NaN]),n=r,t=(vt&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?dt:function(){throw new Error("not implemented")};var mt=st,wt="function"==typeof Uint8Array;var jt="function"==typeof Uint8Array?Uint8Array:null;var gt,At="function"==typeof Uint8Array?Uint8Array:void 0;gt=function(){var t,r,n;if("function"!=typeof jt)return!1;try{r=new jt(r=[1,3.14,-3.14,256,257]),n=r,t=(wt&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?At:function(){throw new Error("not implemented")};var _t=gt,ht="function"==typeof Uint16Array;var Ot="function"==typeof Uint16Array?Uint16Array:null;var Ut,St="function"==typeof Uint16Array?Uint16Array:void 0;Ut=function(){var t,r,n;if("function"!=typeof Ot)return!1;try{r=new Ot(r=[1,3.14,-3.14,65536,65537]),n=r,t=(ht&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?St:function(){throw new Error("not implemented")};var Et,Ft={uint16:Ut,uint8:_t};(Et=new Ft.uint16(1))[0]=4660;var It,Nt,Pt=52===new Ft.uint8(Et.buffer)[0];!0===Pt?(It=1,Nt=0):(It=0,Nt=1);var Tt={HIGH:It,LOW:Nt},Vt=new mt(1),Gt=new pt(Vt.buffer),Ht=Tt.HIGH,xt=Tt.LOW;function Bt(t,r,n,e){return Vt[0]=t,r[e]=Gt[Ht],r[e+n]=Gt[xt],r}function Lt(t){return Bt(t,[0,0],1,0)}l(Lt,"assign",Bt);var Mt,Wt,kt=!0===Pt?1:0,Ct=new mt(1),Yt=new pt(Ct.buffer);function Rt(t){return Ct[0]=t,Yt[kt]}!0===Pt?(Mt=1,Wt=0):(Mt=0,Wt=1);var Xt={HIGH:Mt,LOW:Wt},qt=new mt(1),zt=new pt(qt.buffer),Dt=Xt.HIGH,Jt=Xt.LOW;function Kt(t,r){return zt[Dt]=t,zt[Jt]=r,qt[0]}var Qt=[0,0];function Zt(t,r,n,e){return rt(t)||at(t)?(r[e]=t,r[e+n]=0,r):0!==t&&tt(t)<22250738585072014e-324?(r[e]=4503599627370496*t,r[e+n]=-52,r):(r[e]=t,r[e+n]=0,r)}l((function(t){return Zt(t,[0,0],1,0)}),"assign",Zt);var $t=[0,0],tr=[0,0];function rr(t,r){var n,e,o,u,i,a;return 0===r||0===t||rt(t)||at(t)?t:(Zt(t,$t,1,0),r+=$t[1],r+=function(t){var r=Rt(t);return(r=(2146435072&r)>>>20)-1023|0}(t=$t[0]),r<-1074?(o=0,u=t,Lt.assign(o,Qt,1,0),i=Qt[0],i&=2147483647,a=Rt(u),Kt(i|=a&=2147483648,Qt[1])):r>1023?t<0?ut:it:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,Lt.assign(t,tr,1,0),n=tr[0],n&=2148532223,e*Kt(n|=r+1023<<20,tr[1])))}function nr(t){var r;return rt(t)||t===it?t:t===ut?0:t>709.782712893384?it:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<3.725290298461914e-9?1+t:function(t,r,n){var e,o,u,i;return rr(1-(r-(e=t-r)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-t),n)}(t-.6931471803691238*(r=ot(t<0?1.4426950408889634*t-.5:1.4426950408889634*t+.5)),1.9082149292705877e-10*r,r)}function er(t){var r,n;if((n=tt(t))>44.014845965556525)return t<0?-1:1;if(n>=.625)n=1-2/((r=nr(2*n))+1),t<0&&(n=-n);else{if(0===t)return t;n=t+t*(r=t*t)*function(t){var r,n;return 0===t?-.3333333333333332:((t<0?-t:t)<=1?(r=t*(t*(0*t-.9643991794250523)-99.28772310019185)-1614.6876844170845,n=4844.063053251255+t*(2235.4883906010045+t*(112.81167849163293+1*t))):(r=0+(t=1/t)*(t*(-1614.6876844170845*t-99.28772310019185)-.9643991794250523),n=1+t*(112.81167849163293+t*(2235.4883906010045+4844.063053251255*t))),r/n)}(r)}return n}function or(t){return $(t,er)}export{or as default};
//# sourceMappingURL=mod.js.map
