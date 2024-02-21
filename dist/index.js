"use strict";var m=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var R=m(function(D,O){
function j(r,i,a,l){var y,x,t,w,z,e,n,u,f,o,p,q,v,c;if(v=i[0],!(v<=0))for(y=a[0],x=a[1],t=a[2],w=a[3],y<0?z=(1-v)*y:z=0,x<0?e=(1-v)*x:e=0,t<0?n=(1-v)*t:n=0,w<0?u=(1-v)*w:u=0,f=r[0],o=r[1],p=r[2],q=r[3],c=0;c<v;c++)q[u]=l(f[z],o[e],p[n]),z+=y,e+=x,n+=t,u+=w}O.exports=j
});var g=m(function(E,b){
function k(r,i,a,l,y){var x,t,w,z,e,n,u,f,o,p,q,v,c,N;if(c=i[0],!(c<=0))for(e=l[0],n=l[1],u=l[2],f=l[3],x=a[0],t=a[1],w=a[2],z=a[3],o=r[0],p=r[1],q=r[2],v=r[3],N=0;N<c;N++)v[f]=y(o[e],p[n],q[u]),e+=x,n+=t,u+=w,f+=z}b.exports=k
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=R(),B=g();A(h,"ndarray",B);module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
