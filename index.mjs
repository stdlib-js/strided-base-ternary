// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function n(r,n,e,a){var t,i,o,d,f,s,l,m,p,u,y,c,j,v;if(!((j=n[0])<=0))for(f=(t=e[0])<0?(1-j)*t:0,s=(i=e[1])<0?(1-j)*i:0,l=(o=e[2])<0?(1-j)*o:0,m=(d=e[3])<0?(1-j)*d:0,p=r[0],u=r[1],y=r[2],c=r[3],v=0;v<j;v++)c[m]=a(p[f],u[s],y[l]),f+=t,s+=i,l+=o,m+=d}function e(r,n,e,a,t){var i,o,d,f,s,l,m,p,u,y,c,j,v,b;if(!((v=n[0])<=0))for(s=a[0],l=a[1],m=a[2],p=a[3],i=e[0],o=e[1],d=e[2],f=e[3],u=r[0],y=r[1],c=r[2],j=r[3],b=0;b<v;b++)j[p]=t(u[s],y[l],c[m]),s+=i,l+=o,m+=d,p+=f}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map