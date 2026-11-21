"use strict";var P=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(a){throw r=0,a}}};var h=P(function(M,b){"use strict";var y=require("@stdlib/utils-define-nonenumerable-read-only-property"),S=require("@stdlib/assert-is-plain-object"),T=require("@stdlib/assert-is-boolean").isPrimitive,j=require("@stdlib/assert-is-positive-integer").isPrimitive,F=require("@stdlib/assert-is-ndarray-like"),V=require("@stdlib/ndarray-base-assert-is-read-only"),x=require("@stdlib/assert-has-own-property"),p=require("@stdlib/symbol-iterator"),C=require("@stdlib/array-base-zeros"),I=require("@stdlib/ndarray-shape"),L=require("@stdlib/ndarray-base-numel"),R=require("@stdlib/ndarray-base-slice"),k=require("@stdlib/ndarray-base-next-cartesian-index").assign,z=require("@stdlib/slice-base-args2multislice"),l=require("@stdlib/string-format");function q(i,r){var a,o,s,v,m,t,n,w,u,d,e;if(!F(i))throw new TypeError(l("invalid argument. First argument must be an ndarray. Value: `%s`.",i));if(!j(r))throw new TypeError(l("invalid argument. Second argument must be a positive integer. Value: `%s`.",r));if(s={writable:!1},arguments.length>2){if(a=arguments[2],!S(a))throw new TypeError(l("invalid argument. Options argument must be an object. Value: `%s`.",a));if(x(a,"readonly")){if(!T(a.readonly))throw new TypeError(l("invalid option. `%s` option must be a boolean. Option: `%s`.","readonly",a.readonly));if(s.writable=!a.readonly,s.writable&&V(i))throw new Error("invalid option. Cannot write to read-only array.")}}if(o=I(i),u=o.length,u<=r)throw new TypeError(l("invalid argument. First argument must be an ndarray having at least %d dimensions.",r+1));for(d=L(o),d===0&&(m=!0),n=u-r-1,e=n+1;e<u;e++)d/=o[e];for(w=o[n],t=C(u),e=n+1;e<u;e++)t[e]=null;return e=-1,v={},y(v,"next",c),y(v,"return",E),p&&y(v,p,O),v;function c(){var f,g;return e+=1,m||e>=d?{done:!0}:(f=z(t),g=(t[n]+1)%w,t[n]=g,g===0&&(t=k(o,"row-major",t,n-1,t)),{value:R(i,f,!0,s.writable),done:!1})}function E(f){return m=!0,arguments.length?{value:f,done:!0}:{done:!0}}function O(){return q(i,r,s)}}b.exports=q});var B=h();module.exports=B;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
