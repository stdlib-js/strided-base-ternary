// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";function n(r,n,e,a){var t,i,o,d,f,s,l,m,p,u,v,y,c,j;if(!((c=n[0])<=0))for(f=(t=e[0])<0?(1-c)*t:0,s=(i=e[1])<0?(1-c)*i:0,l=(o=e[2])<0?(1-c)*o:0,m=(d=e[3])<0?(1-c)*d:0,p=r[0],u=r[1],v=r[2],y=r[3],j=0;j<c;j++)y[m]=a(p[f],u[s],v[l]),f+=t,s+=i,l+=o,m+=d}function e(r,n,e,a,t){var i,o,d,f,s,l,m,p,u,v,y,c,j,b;if(!((j=n[0])<=0))for(s=a[0],l=a[1],m=a[2],p=a[3],i=e[0],o=e[1],d=e[2],f=e[3],u=r[0],v=r[1],y=r[2],c=r[3],b=0;b<j;b++)c[p]=t(u[s],v[l],y[m]),s+=i,l+=o,m+=d,p+=f}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
