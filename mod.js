// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var l=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,b=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,w=/\.0*e/,_=/(\..*[^0])0*e/;function h(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":l(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,_,"$1e"),n=s.call(n,w,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,v,"e-0$1"),r.alternate&&(n=s.call(n,b,"$1."),n=s.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):f.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function j(r,t,e){var n=t-r.length;return n<0?r:r=e?r+m(n):m(n)+r}var S=String.fromCharCode,A=isNaN,E=Array.isArray;function O(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function T(r){var t,e,n,i,a,l,f,p,s;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",f=1,p=0;p<r.length;p++)if(c(n=r[p]))l+=n;else{if(t=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,A(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=h(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function V(r){var t,e,n,o;for(e=[],o=0,n=F.exec(r);n;)(t=r.slice(o,F.lastIndex-n[0].length)).length&&e.push(t),e.push(P(n)),o=F.lastIndex,n=F.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function I(r){return"string"==typeof r}function x(r){var t,e,n;if(!I(r))throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=V(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return T.apply(null,e)}var k,N=Object.prototype,U=N.toString,B=N.__defineGetter__,G=N.__defineSetter__,C=N.__lookupGetter__,L=N.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===U.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===U.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(C.call(r,t)||L.call(r,t)?(n=r.__proto__,r.__proto__=N,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&B&&B.call(r,t,e.get),a&&G&&G.call(r,t,e.set),r};var M=k;function R(r,t,e){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var $=/./;function H(r){return"boolean"==typeof r}function W(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var X=W();function Z(){return X&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function q(r,t){return null!=r&&z.call(r,t)}var D="function"==typeof Symbol?Symbol:void 0,J="function"==typeof D?D.toStringTag:"";var K=Z()?function(r){var t,e,n;if(null==r)return Y.call(r);e=r[J],t=q(r,J);try{r[J]=void 0}catch(t){return Y.call(r)}return n=Y.call(r),t?r[J]=e:delete r[J],n}:function(r){return Y.call(r)},Q=Boolean,rr=Boolean.prototype.toString;var tr=Z();function er(r){return"object"==typeof r&&(r instanceof Q||(tr?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===K(r)))}function nr(r){return H(r)||er(r)}function or(){return new Function("return this;")()}R(nr,"isPrimitive",H),R(nr,"isObject",er);var ir="object"==typeof self?self:null,ar="object"==typeof window?window:null,ur="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},cr="object"==typeof ur?ur:null,lr="object"==typeof globalThis?globalThis:null;var fr=function(r){if(arguments.length){if(!H(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return or()}if(lr)return lr;if(ir)return ir;if(ar)return ar;if(cr)return cr;throw new Error("unexpected error. Unable to resolve global object.")}(),pr=fr.document&&fr.document.childNodes,sr=Int8Array;function yr(){return/^\s*function\s*([^(]*)/i}var vr=/^\s*function\s*([^(]*)/i;R(yr,"REGEXP",vr);var br=W();var gr=Object.prototype.toString;var dr="function"==typeof D?D.toStringTag:"";var wr,_r=br&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return gr.call(r);e=r[dr],t=q(r,dr);try{r[dr]=void 0}catch(t){return gr.call(r)}return n=gr.call(r),t?r[dr]=e:delete r[dr],n}:function(r){return gr.call(r)};wr=Array.isArray?Array.isArray:function(r){return"[object Array]"===_r(r)};var hr=wr;function mr(r){return null!==r&&"object"==typeof r}var jr=function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!hr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(mr);function Sr(r){var t,e,n,o;if(("Object"===(e=K(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=vr.exec(n.toString()))return t[1]}return mr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}R(mr,"isObjectLikeArray",jr);var Ar="function"==typeof $||"object"==typeof sr||"function"==typeof pr?function(r){return Sr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Sr(r).toLowerCase():t};function Er(r){return"function"===Ar(r)}var Or=/./,Tr="function"==typeof Object.defineProperty?Object.defineProperty:null;var Fr,Pr=Object.defineProperty,Vr=Object.prototype,Ir=Vr.toString,xr=Vr.__defineGetter__,kr=Vr.__defineSetter__,Nr=Vr.__lookupGetter__,Ur=Vr.__lookupSetter__;Fr=function(){try{return Tr({},"x",{}),!0}catch(r){return!1}}()?Pr:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Ir.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Ir.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Nr.call(r,t)||Ur.call(r,t)?(n=r.__proto__,r.__proto__=Vr,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&xr&&xr.call(r,t,e.get),a&&kr&&kr.call(r,t,e.set),r};var Br=Fr;function Gr(r,t,e){Br(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Cr(r){return"boolean"==typeof r}var Lr=W();function Mr(){return Lr&&"symbol"==typeof Symbol.toStringTag}var Rr=Object.prototype.toString;var $r="function"==typeof D?D.toStringTag:"";var Hr=Mr()?function(r){var t,e,n;if(null==r)return Rr.call(r);e=r[$r],t=q(r,$r);try{r[$r]=void 0}catch(t){return Rr.call(r)}return n=Rr.call(r),t?r[$r]=e:delete r[$r],n}:function(r){return Rr.call(r)},Wr=Boolean.prototype.toString;var Xr=Mr();function Zr(r){return"object"==typeof r&&(r instanceof Q||(Xr?function(r){try{return Wr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Hr(r)))}function Yr(r){return Cr(r)||Zr(r)}function zr(){return new Function("return this;")()}Gr(Yr,"isPrimitive",Cr),Gr(Yr,"isObject",Zr);var qr="object"==typeof self?self:null,Dr="object"==typeof window?window:null,Jr="object"==typeof ur?ur:null,Kr="object"==typeof globalThis?globalThis:null;var Qr=function(r){if(arguments.length){if(!Cr(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return zr()}if(Kr)return Kr;if(qr)return qr;if(Dr)return Dr;if(Jr)return Jr;throw new Error("unexpected error. Unable to resolve global object.")}(),rt=Qr.document&&Qr.document.childNodes,tt=Int8Array;function et(){return/^\s*function\s*([^(]*)/i}var nt=/^\s*function\s*([^(]*)/i;function ot(r){return null!==r&&"object"==typeof r}Gr(et,"REGEXP",nt);var it=function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!hr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(ot);function at(r){var t,e,n,o;if(("Object"===(e=Hr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=nt.exec(n.toString()))return t[1]}return ot(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Gr(ot,"isObjectLikeArray",it);var ut="function"==typeof Or||"object"==typeof tt||"function"==typeof rt?function(r){return at(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?at(r).toLowerCase():t};function ct(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===ut(r)}(r.next)}function lt(r){return"number"==typeof r}var ft=Number,pt=ft.prototype.toString;var st=Z();function yt(r){return"object"==typeof r&&(r instanceof ft||(st?function(r){try{return pt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===K(r)))}function vt(r){return lt(r)||yt(r)}R(vt,"isPrimitive",lt),R(vt,"isObject",yt);var bt="function"==typeof D&&"symbol"==typeof D("foo")&&q(D,"iterator")&&"symbol"==typeof D.iterator?Symbol.iterator:null;var gt=/./,dt="function"==typeof Object.defineProperty?Object.defineProperty:null;var wt,_t=Object.defineProperty,ht=Object.prototype,mt=ht.toString,jt=ht.__defineGetter__,St=ht.__defineSetter__,At=ht.__lookupGetter__,Et=ht.__lookupSetter__;wt=function(){try{return dt({},"x",{}),!0}catch(r){return!1}}()?_t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===mt.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===mt.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(At.call(r,t)||Et.call(r,t)?(n=r.__proto__,r.__proto__=ht,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&jt&&jt.call(r,t,e.get),a&&St&&St.call(r,t,e.set),r};var Ot=wt;function Tt(r,t,e){Ot(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Ft(r){return"boolean"==typeof r}var Pt=W();function Vt(){return Pt&&"symbol"==typeof Symbol.toStringTag}var It=Object.prototype.toString;var xt="function"==typeof D?D.toStringTag:"";var kt=Vt()?function(r){var t,e,n;if(null==r)return It.call(r);e=r[xt],t=q(r,xt);try{r[xt]=void 0}catch(t){return It.call(r)}return n=It.call(r),t?r[xt]=e:delete r[xt],n}:function(r){return It.call(r)},Nt=Boolean.prototype.toString;var Ut=Vt();function Bt(r){return"object"==typeof r&&(r instanceof Q||(Ut?function(r){try{return Nt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===kt(r)))}function Gt(r){return Ft(r)||Bt(r)}function Ct(){return new Function("return this;")()}Tt(Gt,"isPrimitive",Ft),Tt(Gt,"isObject",Bt);var Lt="object"==typeof self?self:null,Mt="object"==typeof window?window:null,Rt="object"==typeof ur?ur:null,$t="object"==typeof globalThis?globalThis:null;var Ht=function(r){if(arguments.length){if(!Ft(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Ct()}if($t)return $t;if(Lt)return Lt;if(Mt)return Mt;if(Rt)return Rt;throw new Error("unexpected error. Unable to resolve global object.")}(),Wt=Ht.document&&Ht.document.childNodes,Xt=Int8Array;function Zt(){return/^\s*function\s*([^(]*)/i}var Yt=/^\s*function\s*([^(]*)/i;function zt(r){return null!==r&&"object"==typeof r}Tt(Zt,"REGEXP",Yt);var qt=function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!hr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(zt);function Dt(r){var t,e,n,o;if(("Object"===(e=kt(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Yt.exec(n.toString()))return t[1]}return zt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Tt(zt,"isObjectLikeArray",qt);var Jt="function"==typeof gt||"object"==typeof Xt||"function"==typeof Wt?function(r){return Dt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Dt(r).toLowerCase():t};function Kt(r){return"function"===Jt(r)}var Qt=Object,re=/./,te="function"==typeof Object.defineProperty?Object.defineProperty:null;var ee,ne=Object.defineProperty,oe=Object.prototype,ie=oe.toString,ae=oe.__defineGetter__,ue=oe.__defineSetter__,ce=oe.__lookupGetter__,le=oe.__lookupSetter__;ee=function(){try{return te({},"x",{}),!0}catch(r){return!1}}()?ne:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===ie.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===ie.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(ce.call(r,t)||le.call(r,t)?(n=r.__proto__,r.__proto__=oe,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ae&&ae.call(r,t,e.get),a&&ue&&ue.call(r,t,e.set),r};var fe=ee;function pe(r,t,e){fe(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function se(r){return"boolean"==typeof r}var ye=W();function ve(){return ye&&"symbol"==typeof Symbol.toStringTag}var be=Object.prototype.toString;var ge="function"==typeof D?D.toStringTag:"";var de=ve()?function(r){var t,e,n;if(null==r)return be.call(r);e=r[ge],t=q(r,ge);try{r[ge]=void 0}catch(t){return be.call(r)}return n=be.call(r),t?r[ge]=e:delete r[ge],n}:function(r){return be.call(r)},we=Boolean.prototype.toString;var _e=ve();function he(r){return"object"==typeof r&&(r instanceof Q||(_e?function(r){try{return we.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===de(r)))}function me(r){return se(r)||he(r)}function je(){return new Function("return this;")()}pe(me,"isPrimitive",se),pe(me,"isObject",he);var Se="object"==typeof self?self:null,Ae="object"==typeof window?window:null,Ee="object"==typeof ur?ur:null,Oe="object"==typeof globalThis?globalThis:null;var Te=function(r){if(arguments.length){if(!se(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return je()}if(Oe)return Oe;if(Se)return Se;if(Ae)return Ae;if(Ee)return Ee;throw new Error("unexpected error. Unable to resolve global object.")}(),Fe=Te.document&&Te.document.childNodes,Pe=Int8Array;function Ve(){return/^\s*function\s*([^(]*)/i}var Ie=/^\s*function\s*([^(]*)/i;function xe(r){return null!==r&&"object"==typeof r}pe(Ve,"REGEXP",Ie);var ke=function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!hr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(xe);function Ne(r){var t,e,n,o;if(("Object"===(e=de(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Ie.exec(n.toString()))return t[1]}return xe(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}pe(xe,"isObjectLikeArray",ke);var Ue="function"==typeof re||"object"==typeof Pe||"function"==typeof Fe?function(r){return Ne(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Ne(r).toLowerCase():t};var Be,Ge,Ce=Object.getPrototypeOf;Ge=Object.getPrototypeOf,Be="function"===Ue(Ge)?Ce:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===de(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Le=Be;var Me=Object.prototype;function Re(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!hr(r)}(r)&&(t=function(r){return null==r?null:(r=Qt(r),Le(r))}(r),!t||!q(r,"constructor")&&q(t,"constructor")&&Kt(t.constructor)&&"[object Function]"===kt(t.constructor)&&q(t,"isPrototypeOf")&&Kt(t.isPrototypeOf)&&(t===Me||function(r){var t;for(t in r)if(!q(r,t))return!1;return!0}(r)))}function $e(r,t){return Re(t)?(q(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(x("invalid argument. Options argument must be an object. Value: `%s`.",t))}function He(r,t,e){var n,o,i,a;if(!ct(r))throw new TypeError(x("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!Er(t))throw new TypeError(x("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=$e(n,e)))throw i;return R(o={},"next",u),R(o,"return",c),bt&&Er(r[bt])&&R(o,bt,l),o;function u(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:lt(e.value)?t(e.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return He(r[bt](),t,n)}}function We(r){return Math.abs(r)}function Xe(r){return r!=r}var Ze=Math.floor,Ye=Math.ceil;function ze(r){return r<0?Ye(r):Ze(r)}var qe=Number.NEGATIVE_INFINITY,De=Number.POSITIVE_INFINITY,Je=Number.POSITIVE_INFINITY,Ke=Number.POSITIVE_INFINITY;function Qe(r){return r===Ke||r===qe}var rn="function"==typeof Object.defineProperty?Object.defineProperty:null;var tn,en=Object.defineProperty,nn=Object.prototype,on=nn.toString,an=nn.__defineGetter__,un=nn.__defineSetter__,cn=nn.__lookupGetter__,ln=nn.__lookupSetter__;tn=function(){try{return rn({},"x",{}),!0}catch(r){return!1}}()?en:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===on.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===on.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(cn.call(r,t)||ln.call(r,t)?(n=r.__proto__,r.__proto__=nn,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&an&&an.call(r,t,e.get),a&&un&&un.call(r,t,e.set),r};var fn=tn;var pn=W();var sn=Object.prototype.toString;var yn="function"==typeof D?D.toStringTag:"";var vn=pn&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return sn.call(r);e=r[yn],t=q(r,yn);try{r[yn]=void 0}catch(t){return sn.call(r)}return n=sn.call(r),t?r[yn]=e:delete r[yn],n}:function(r){return sn.call(r)},bn="function"==typeof Uint32Array;var gn="function"==typeof Uint32Array?Uint32Array:null;var dn,wn="function"==typeof Uint32Array?Uint32Array:void 0;dn=function(){var r,t;if("function"!=typeof gn)return!1;try{r=function(r){return bn&&r instanceof Uint32Array||"[object Uint32Array]"===vn(r)}(t=new gn(t=[1,3.14,-3.14,4294967296,4294967297]))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?wn:function(){throw new Error("not implemented")};var _n=dn,hn=W();var mn=Object.prototype.toString;var jn="function"==typeof D?D.toStringTag:"";var Sn=hn&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return mn.call(r);e=r[jn],t=q(r,jn);try{r[jn]=void 0}catch(t){return mn.call(r)}return n=mn.call(r),t?r[jn]=e:delete r[jn],n}:function(r){return mn.call(r)},An="function"==typeof Float64Array;var En="function"==typeof Float64Array?Float64Array:null;var On,Tn="function"==typeof Float64Array?Float64Array:void 0;On=function(){var r,t;if("function"!=typeof En)return!1;try{r=function(r){return An&&r instanceof Float64Array||"[object Float64Array]"===Sn(r)}(t=new En([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Tn:function(){throw new Error("not implemented")};var Fn=On,Pn=W();var Vn=Object.prototype.toString;var In="function"==typeof D?D.toStringTag:"";var xn=Pn&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Vn.call(r);e=r[In],t=q(r,In);try{r[In]=void 0}catch(t){return Vn.call(r)}return n=Vn.call(r),t?r[In]=e:delete r[In],n}:function(r){return Vn.call(r)},kn="function"==typeof Uint8Array;var Nn="function"==typeof Uint8Array?Uint8Array:null;var Un,Bn="function"==typeof Uint8Array?Uint8Array:void 0;Un=function(){var r,t;if("function"!=typeof Nn)return!1;try{r=function(r){return kn&&r instanceof Uint8Array||"[object Uint8Array]"===xn(r)}(t=new Nn(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Bn:function(){throw new Error("not implemented")};var Gn=Un,Cn=W();var Ln=Object.prototype.toString;var Mn="function"==typeof D?D.toStringTag:"";var Rn=Cn&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Ln.call(r);e=r[Mn],t=q(r,Mn);try{r[Mn]=void 0}catch(t){return Ln.call(r)}return n=Ln.call(r),t?r[Mn]=e:delete r[Mn],n}:function(r){return Ln.call(r)},$n="function"==typeof Uint16Array;var Hn="function"==typeof Uint16Array?Uint16Array:null;var Wn,Xn="function"==typeof Uint16Array?Uint16Array:void 0;Wn=function(){var r,t;if("function"!=typeof Hn)return!1;try{r=function(r){return $n&&r instanceof Uint16Array||"[object Uint16Array]"===Rn(r)}(t=new Hn(t=[1,3.14,-3.14,65536,65537]))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Xn:function(){throw new Error("not implemented")};var Zn,Yn={uint16:Wn,uint8:Gn};(Zn=new Yn.uint16(1))[0]=4660;var zn,qn,Dn=52===new Yn.uint8(Zn.buffer)[0];!0===Dn?(zn=1,qn=0):(zn=0,qn=1);var Jn={HIGH:zn,LOW:qn},Kn=new Fn(1),Qn=new _n(Kn.buffer),ro=Jn.HIGH,to=Jn.LOW;function eo(r,t,e,n){return Kn[0]=r,t[n]=Qn[ro],t[n+e]=Qn[to],t}function no(r){return eo(r,[0,0],1,0)}!function(r,t,e){fn(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}(no,"assign",eo);var oo=W();var io=Object.prototype.toString;var ao="function"==typeof D?D.toStringTag:"";var uo=oo&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return io.call(r);e=r[ao],t=q(r,ao);try{r[ao]=void 0}catch(t){return io.call(r)}return n=io.call(r),t?r[ao]=e:delete r[ao],n}:function(r){return io.call(r)},co="function"==typeof Float64Array;var lo="function"==typeof Float64Array?Float64Array:null;var fo,po="function"==typeof Float64Array?Float64Array:void 0;fo=function(){var r,t;if("function"!=typeof lo)return!1;try{r=function(r){return co&&r instanceof Float64Array||"[object Float64Array]"===uo(r)}(t=new lo([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?po:function(){throw new Error("not implemented")};var so=!0===Dn?1:0,yo=new fo(1),vo=new _n(yo.buffer);function bo(r){return yo[0]=r,vo[so]}var go=W();var wo=Object.prototype.toString;var _o="function"==typeof D?D.toStringTag:"";var ho=go&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return wo.call(r);e=r[_o],t=q(r,_o);try{r[_o]=void 0}catch(t){return wo.call(r)}return n=wo.call(r),t?r[_o]=e:delete r[_o],n}:function(r){return wo.call(r)},mo="function"==typeof Float64Array;var jo="function"==typeof Float64Array?Float64Array:null;var So,Ao,Eo,Oo="function"==typeof Float64Array?Float64Array:void 0;So=function(){var r,t;if("function"!=typeof jo)return!1;try{r=function(r){return mo&&r instanceof Float64Array||"[object Float64Array]"===ho(r)}(t=new jo([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Oo:function(){throw new Error("not implemented")},!0===Dn?(Ao=1,Eo=0):(Ao=0,Eo=1);var To={HIGH:Ao,LOW:Eo},Fo=new So(1),Po=new _n(Fo.buffer),Vo=To.HIGH,Io=To.LOW;function xo(r,t){return Po[Vo]=r,Po[Io]=t,Fo[0]}var ko=[0,0];var No="function"==typeof Object.defineProperty?Object.defineProperty:null;var Uo,Bo=Object.defineProperty,Go=Object.prototype,Co=Go.toString,Lo=Go.__defineGetter__,Mo=Go.__defineSetter__,Ro=Go.__lookupGetter__,$o=Go.__lookupSetter__;Uo=function(){try{return No({},"x",{}),!0}catch(r){return!1}}()?Bo:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Co.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Co.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Ro.call(r,t)||$o.call(r,t)?(n=r.__proto__,r.__proto__=Go,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Lo&&Lo.call(r,t,e.get),a&&Mo&&Mo.call(r,t,e.set),r};var Ho=Uo;function Wo(r,t,e,n){return Xe(r)||Qe(r)?(t[n]=r,t[n+e]=0,t):0!==r&&We(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}!function(r,t,e){Ho(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}((function(r){return Wo(r,[0,0],1,0)}),"assign",Wo);var Xo=[0,0],Zo=[0,0];function Yo(r,t){var e,n,o,i,a,u;return 0===t||0===r||Xe(r)||Qe(r)?r:(Wo(r,Xo,1,0),t+=Xo[1],t+=function(r){var t=bo(r);return(t=(2146435072&t)>>>20)-1023|0}(r=Xo[0]),t<-1074?(o=0,i=r,no.assign(o,ko,1,0),a=ko[0],a&=2147483647,u=bo(i),xo(a|=u&=2147483648,ko[1])):t>1023?r<0?qe:Je:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,no.assign(r,Zo,1,0),e=Zo[0],e&=2148532223,n*xo(e|=t+1023<<20,Zo[1])))}function zo(r){var t;return Xe(r)||r===De?r:r===qe?0:r>709.782712893384?De:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,e){var n,o,i,a;return Yo(1-(t-(n=r-t)*(i=n-(o=n*n)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),e)}(r-.6931471803691238*(t=ze(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function qo(r){var t,e;if((e=We(r))>44.014845965556525)return r<0?-1:1;if(e>=.625)e=1-2/((t=zo(2*e))+1),r<0&&(e=-e);else{if(0===r)return r;e=r+r*(t=r*r)*function(r){var t,e;return 0===r?-.3333333333333332:((r<0?-r:r)<=1?(t=r*(r*(0*r-.9643991794250523)-99.28772310019185)-1614.6876844170845,e=4844.063053251255+r*(2235.4883906010045+r*(112.81167849163293+1*r))):(t=0+(r=1/r)*(r*(-1614.6876844170845*r-99.28772310019185)-.9643991794250523),e=1+r*(112.81167849163293+r*(2235.4883906010045+4844.063053251255*r))),t/e)}(t)}return e}function Do(r){return He(r,qo)}export{Do as default};
//# sourceMappingURL=mod.js.map
