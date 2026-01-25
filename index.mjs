// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";function t(e,r,t,s,n){var d,i,a,o,f,m,l,p,j,u,v,b,c,h;if(!((c=r[0])<=0))for(f=s[0],m=s[1],l=s[2],p=s[3],d=t[0],i=t[1],a=t[2],o=t[3],j=e[0],u=e[1],v=e[2],b=e[3],h=0;h<c;h++)b[p]=n(j[f],u[m],v[l]),f+=d,m+=i,l+=a,p+=o}function s(e,s,n,d){var i;return i=s[0],t(e,s,n,[r(i,n[0]),r(i,n[1]),r(i,n[2]),r(i,n[3])],d)}e(s,"ndarray",t);export{s as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
