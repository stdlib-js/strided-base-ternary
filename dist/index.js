"use strict";var R=function(v,a){return function(){return a||v((a={exports:{}}).exports,a),a.exports}};var w=R(function(G,b){
function A(v,a,r,n,u){var e,z,f,p,t,x,y,c,N,l,m,O,o,q;if(o=a[0],!(o<=0))for(t=n[0],x=n[1],y=n[2],c=n[3],e=r[0],z=r[1],f=r[2],p=r[3],N=v[0],l=v[1],m=v[2],O=v[3],q=0;q<o;q++)O[c]=u(N[t],l[x],m[y]),t+=e,x+=z,y+=f,c+=p}b.exports=A
});var j=R(function(H,g){
var i=require('@stdlib/strided-base-stride2offset/dist'),B=w();function C(v,a,r,n){var u,e;return e=a[0],u=[i(e,r[0]),i(e,r[1]),i(e,r[2]),i(e,r[3])],B(v,a,r,u,n)}g.exports=C
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=j(),E=w();D(k,"ndarray",E);module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
