webpackJsonp([68],{546:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(78);t.default={op:function(e,t){var n=e;return n=a.t(n),n=a.q(n,t.UPSAMPLE.coeficient,"max"),a.I(n,t.UPSAMPLE.coeficient,t.UPSAMPLE.type||"nearest")},tick:function(e,t){var n=t.canvas,i=t.operation,o=t.output,c=t.session;a.m(n),c.runOp(i,e,o),a.k(n,o)},params:{UPSAMPLE:{coeficient:{name:"Coeficient",type:"constant",min:1,max:5,step:.25,default:1.75},type:{name:"Interpolation",type:"constant",values:[{name:"Nearest",value:"nearest"},{name:"Linear",value:"linear"}]}}}}}});