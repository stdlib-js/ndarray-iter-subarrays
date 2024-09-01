// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.2-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-read-only@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-shape@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.2.2-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-slice@v0.2.2-esm/index.mjs";import{assign as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-next-cartesian-index@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-args2multislice@v0.2.2-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function f(b,u){var c,g,y,x,w,E,T,F,k,z,P;if(!n(b))throw new TypeError(v("null4f",b));if(!t(u))throw new TypeError(v("null45",u));if(y={writable:!1},arguments.length>2){if(!r(c=arguments[2]))throw new TypeError(v("null2V",c));if(d(c,"readonly")){if(!s(c.readonly))throw new TypeError(v("null2o","readonly",c.readonly));if(y.writable=!c.readonly,y.writable&&i(b))throw new Error(v("nullF4"))}}if((k=(g=m(b)).length)<=u)throw new TypeError(v("invalid argument. First argument must be an ndarray having at least %d dimensions.",u+1));for(0===(z=a(g))&&(w=!0),P=(T=k-u-1)+1;P<k;P++)z/=g[P];for(F=g[T],E=l(k),P=T+1;P<k;P++)E[P]=null;return P=-1,e(x={},"next",(function(){var e,r;if(P+=1,w||P>=z)return{done:!0};e=h(E),r=(E[T]+1)%F,E[T]=r,0===r&&(E=p(g,"row-major",E,T-1,E));return{value:j(b,e,!0,y.writable),done:!1}})),e(x,"return",(function(e){if(w=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),o&&e(x,o,(function(){return f(b,u,y)})),x}export{f as default};
//# sourceMappingURL=index.mjs.map