!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n,o){if(t){const r=a(t,e,n,o);return t[0](r)}}function a(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function l(t,e,n,o,r,i,c){const l=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,i);if(l){const r=a(e,n,o,c);t.p(r,l)}}function u(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function h(){return m(" ")}function $(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e){t.value=null==e?"":e}function y(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function b(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}}function v(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let j;function C(t){j=t}function k(){if(!j)throw new Error("Function called outside component initialization");return j}function T(){const t=k();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach(e=>{e.call(t,r)})}}}const _=[],N=[],E=[],S=[],F=Promise.resolve();let P=!1;function M(t){E.push(t)}let G=!1;const D=new Set;function H(){if(!G){G=!0;do{for(let t=0;t<_.length;t+=1){const e=_[t];C(e),L(e.$$)}for(_.length=0;N.length;)N.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];D.has(e)||(D.add(e),e())}E.length=0}while(_.length);for(;S.length;)S.pop()();P=!1,G=!1,D.clear()}}function L(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const I=new Set;let O;function B(){O={r:0,c:[],p:O}}function R(){O.r||o(O.c),O=O.p}function A(t,e){t&&t.i&&(I.delete(t),t.i(e))}function U(t,e,n,o){if(t&&t.o){if(I.has(t))return;I.add(t),O.c.push(()=>{I.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function J(t){t&&t.c()}function Y(t,n,i){const{fragment:c,on_mount:a,on_destroy:l,after_update:u}=t.$$;c&&c.m(n,i),M(()=>{const n=a.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(M)}function W(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function q(t,e){-1===t.$$.dirty[0]&&(_.push(t),P||(P=!0,F.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function z(e,r,i,c,a,l,u=[-1]){const s=j;C(e);const d=r.props||{},f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let m=!1;if(f.ctx=i?i(e,d,(t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),m&&q(e,t)),n}):[],f.update(),m=!0,o(f.before_update),f.fragment=!!c&&c(f.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);f.fragment&&f.fragment.l(t),t.forEach(p)}else f.fragment&&f.fragment.c();r.intro&&A(e.$$.fragment),Y(e,r.target,r.anchor),H()}C(s)}class K{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Q(t,e,n){const o=t.slice();return o[5]=e[n],o}function V(t){let e,n,o,r=t[5][0]+"";return{c(){e=f("option"),n=m(r),e.__value=o=t[5][0],e.value=e.__value},m(t,o){s(t,e,o),u(e,n)},p(t,i){2&i&&r!==(r=t[5][0]+"")&&x(n,r),2&i&&o!==(o=t[5][0])&&(e.__value=o,e.value=e.__value)},d(t){t&&p(e)}}}function X(e){let n,r,i,c,a=e[1],l=[];for(let t=0;t<a.length;t+=1)l[t]=V(Q(e,a,t));return{c(){n=f("div"),r=f("select");for(let t=0;t<l.length;t+=1)l[t].c();void 0===e[0]&&M(()=>e[3].call(r)),g(n,"id","projectSelect")},m(t,o){s(t,n,o),u(n,r);for(let t=0;t<l.length;t+=1)l[t].m(r,null);b(r,e[0]),i||(c=[$(r,"change",e[3]),$(r,"change",e[2])],i=!0)},p(t,[e]){if(2&e){let n;for(a=t[1],n=0;n<a.length;n+=1){const o=Q(t,a,n);l[n]?l[n].p(o,e):(l[n]=V(o),l[n].c(),l[n].m(r,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=a.length}3&e&&b(r,t[0])},i:t,o:t,d(t){t&&p(n),d(l,t),i=!1,o(c)}}}function Z(t,e,n){let{project:o=""}=e,{projects:r=[]}=e;const i=T();return t.$$set=t=>{"project"in t&&n(0,o=t.project),"projects"in t&&n(1,r=t.projects)},[o,r,function(){i("projectChange",o)},function(){o=v(this),n(0,o),n(1,r)}]}class tt extends K{constructor(t){super(),z(this,t,Z,X,i,{project:0,projects:1})}}const et=t=>({}),nt=t=>({});function ot(t){let e;const n=t[4].default,o=c(n,t,t[3],null),r=o||function(t){let e;return{c(){e=f("p"),e.textContent="No information for this button"},m(t,n){s(t,e,n)},d(t){t&&p(e)}}}();return{c(){r&&r.c()},m(t,n){r&&r.m(t,n),e=!0},p(t,e){o&&o.p&&8&e&&l(o,n,t,t[3],e,null,null)},i(t){e||(A(r,t),e=!0)},o(t){U(r,t),e=!1},d(t){r&&r.d(t)}}}function rt(t){let e,n,o,i,a,d,g,w=t[0]&&ot(t);const y=t[4].extra,b=c(y,t,t[3],nt);return{c(){w&&w.c(),e=h(),b&&b.c(),n=h(),o=f("button"),i=m(t[2])},m(c,l){w&&w.m(c,l),s(c,e,l),b&&b.m(c,l),s(c,n,l),s(c,o,l),u(o,i),a=!0,d||(g=$(o,"click",(function(){r(t[1])&&t[1].apply(this,arguments)})),d=!0)},p(n,[o]){(t=n)[0]?w?(w.p(t,o),1&o&&A(w,1)):(w=ot(t),w.c(),A(w,1),w.m(e.parentNode,e)):w&&(B(),U(w,1,1,()=>{w=null}),R()),b&&b.p&&8&o&&l(b,y,t,t[3],o,et,nt),(!a||4&o)&&x(i,t[2])},i(t){a||(A(w),A(b,t),a=!0)},o(t){U(w),U(b,t),a=!1},d(t){w&&w.d(t),t&&p(e),b&&b.d(t),t&&p(n),t&&p(o),d=!1,g()}}}function it(t,e,n){let{show:o}=e,{buttonFunction:r}=e,{buttonName:i}=e,{$$slots:c={},$$scope:a}=e;return t.$$set=t=>{"show"in t&&n(0,o=t.show),"buttonFunction"in t&&n(1,r=t.buttonFunction),"buttonName"in t&&n(2,i=t.buttonName),"$$scope"in t&&n(3,a=t.$$scope)},[o,r,i,a,c]}class ct extends K{constructor(t){super(),z(this,t,it,rt,i,{show:0,buttonFunction:1,buttonName:2})}}function at(t,e,n){const o=t.slice();return o[74]=e[n],o}function lt(t,e,n){const o=t.slice();return o[74]=e[n],o}function ut(t,e,n){const o=t.slice();return o[71]=e[n],o}function st(e){let n,r,i,c,a,l,m,x,y,v,j,C,k,T,_=e[13],N=[];for(let t=0;t<_.length;t+=1)N[t]=mt(at(e,_,t));return{c(){n=f("h3"),n.textContent="Give a name for the Project:",r=h(),i=f("input"),c=h(),a=f("h3"),a.textContent="Use Template",l=h(),m=f("p"),m.textContent="If you want to install a template, change from ‘none’ to the template you want to use.",x=h(),y=f("select"),v=f("option"),v.textContent="None";for(let t=0;t<N.length;t+=1)N[t].c();j=h(),C=f("button"),C.textContent="Return",g(i,"type","text"),v.__value="none",v.value=v.__value,void 0===e[19]&&M(()=>e[59].call(y))},m(t,o){s(t,n,o),s(t,r,o),s(t,i,o),w(i,e[0]),s(t,c,o),s(t,a,o),s(t,l,o),s(t,m,o),s(t,x,o),s(t,y,o),u(y,v);for(let t=0;t<N.length;t+=1)N[t].m(y,null);b(y,e[19]),s(t,j,o),s(t,C,o),k||(T=[$(i,"input",e[58]),$(y,"change",e[59]),$(C,"click",e[60])],k=!0)},p(t,e){if(1&e[0]&&i.value!==t[0]&&w(i,t[0]),8192&e[0]){let n;for(_=t[13],n=0;n<_.length;n+=1){const o=at(t,_,n);N[n]?N[n].p(o,e):(N[n]=mt(o),N[n].c(),N[n].m(y,null))}for(;n<N.length;n+=1)N[n].d(1);N.length=_.length}532480&e[0]&&b(y,t[19])},i:t,o:t,d(t){t&&p(n),t&&p(r),t&&p(i),t&&p(c),t&&p(a),t&&p(l),t&&p(m),t&&p(x),t&&p(y),d(N,t),t&&p(j),t&&p(C),k=!1,o(T)}}}function pt(e){let n,r,i,c,a,l,d,m,x,b,v,j,C,k,T,_,N,E,S,F,P,M,G,D,H,L,I,O,B,R=!e[4]&&ht();return{c(){n=f("h3"),n.textContent="Setup Current Directory as a Template",r=h(),R&&R.c(),i=h(),c=f("div"),a=f("label"),a.textContent="Name:",l=h(),d=f("input"),m=h(),x=f("div"),b=f("label"),b.textContent="Path:",v=h(),j=f("input"),C=h(),k=f("div"),T=f("label"),T.textContent="Local:",_=h(),N=f("input"),E=h(),S=f("div"),F=f("label"),F.textContent="Script:",P=h(),M=f("input"),G=h(),D=f("div"),H=f("button"),H.textContent="Cancel",L=h(),I=f("button"),I.textContent="Set Directory",y(a,"margin","7px 10px 0px 0px"),g(d,"type","text"),y(c,"display","flex"),y(c,"flex-direction","row"),y(b,"margin","7px 10px 0px 0px"),g(j,"type","text"),y(x,"display","flex"),y(x,"flex-direction","row"),y(T,"margin","0px 10px 0px 0px"),y(N,"margin","2px 0px 0px 0px"),g(N,"type","checkbox"),y(k,"display","flex"),y(k,"flex-direction","row"),y(F,"margin","8px 10px 0px 0px"),g(M,"type","text"),y(S,"display","flex"),y(S,"flex-direction","row"),y(H,"margin","5px"),y(H,"padding","3px"),y(I,"margin","5px"),y(I,"padding","3px"),y(D,"display","flex"),y(D,"flex-direction","row")},m(t,o){s(t,n,o),s(t,r,o),R&&R.m(t,o),s(t,i,o),s(t,c,o),u(c,a),u(c,l),u(c,d),w(d,e[17]),s(t,m,o),s(t,x,o),u(x,b),u(x,v),u(x,j),w(j,e[14]),s(t,C,o),s(t,k,o),u(k,T),u(k,_),u(k,N),N.checked=e[15],s(t,E,o),s(t,S,o),u(S,F),u(S,P),u(S,M),w(M,e[16]),s(t,G,o),s(t,D,o),u(D,H),u(D,L),u(D,I),O||(B=[$(d,"input",e[53]),$(j,"input",e[54]),$(N,"change",e[55]),$(M,"input",e[56]),$(H,"click",e[57]),$(I,"click",e[39])],O=!0)},p(t,e){t[4]?R&&(R.d(1),R=null):R||(R=ht(),R.c(),R.m(i.parentNode,i)),131072&e[0]&&d.value!==t[17]&&w(d,t[17]),16384&e[0]&&j.value!==t[14]&&w(j,t[14]),32768&e[0]&&(N.checked=t[15]),65536&e[0]&&M.value!==t[16]&&w(M,t[16])},i:t,o:t,d(t){t&&p(n),t&&p(r),R&&R.d(t),t&&p(i),t&&p(c),t&&p(m),t&&p(x),t&&p(C),t&&p(k),t&&p(E),t&&p(S),t&&p(G),t&&p(D),O=!1,o(B)}}}function dt(e){let n,r,i,c,a,l,m,x,v,j,C,k,T,_,N,E,S,F,P,G,D,H,L,I,O,B,R,A,U,J,Y,W,q,z,K,Q,V,X,Z,tt,et=!e[4]&&$t(),nt=e[13],ot=[];for(let t=0;t<nt.length;t+=1)ot[t]=gt(lt(e,nt,t));return{c(){n=f("h3"),n.textContent="Edit Template",r=h(),et&&et.c(),i=h(),c=f("h4"),c.textContent="Select Template:",a=h(),l=f("select"),m=f("option"),m.textContent="None";for(let t=0;t<ot.length;t+=1)ot[t].c();x=h(),v=f("h4"),v.textContent="Template Items:",j=h(),C=f("div"),k=f("label"),k.textContent="Name:",T=h(),_=f("input"),N=h(),E=f("div"),S=f("label"),S.textContent="Path:",F=h(),P=f("input"),G=h(),D=f("div"),H=f("label"),H.textContent="Local:",L=h(),I=f("input"),O=h(),B=f("div"),R=f("label"),R.textContent="Script:",A=h(),U=f("input"),J=h(),Y=f("div"),W=f("button"),W.textContent="Return",q=h(),z=f("button"),z.textContent="Delete",K=h(),Q=f("button"),Q.textContent="New",V=h(),X=f("button"),X.textContent="Save Edit",m.__value="none",m.value=m.__value,void 0===e[19]&&M(()=>e[47].call(l)),y(k,"margin","7px 10px 0px 0px"),g(_,"type","text"),y(C,"display","flex"),y(C,"flex-direction","row"),y(S,"margin","7px 10px 0px 0px"),g(P,"type","text"),y(E,"display","flex"),y(E,"flex-direction","row"),y(H,"margin","0px 10px 0px 0px"),y(I,"margin","2px 0px 0px 0px"),g(I,"type","checkbox"),y(D,"display","flex"),y(D,"flex-direction","row"),y(R,"margin","8px 10px 0px 0px"),g(U,"type","text"),y(B,"display","flex"),y(B,"flex-direction","row"),y(W,"margin","5px"),y(W,"padding","3px"),y(z,"margin","5px"),y(z,"padding","3px"),y(Q,"margin","5px"),y(Q,"padding","3px"),y(X,"margin","5px"),y(X,"padding","3px"),y(Y,"display","flex"),y(Y,"flex-direction","row")},m(t,o){s(t,n,o),s(t,r,o),et&&et.m(t,o),s(t,i,o),s(t,c,o),s(t,a,o),s(t,l,o),u(l,m);for(let t=0;t<ot.length;t+=1)ot[t].m(l,null);b(l,e[19]),s(t,x,o),s(t,v,o),s(t,j,o),s(t,C,o),u(C,k),u(C,T),u(C,_),w(_,e[17]),s(t,N,o),s(t,E,o),u(E,S),u(E,F),u(E,P),w(P,e[14]),s(t,G,o),s(t,D,o),u(D,H),u(D,L),u(D,I),I.checked=e[15],s(t,O,o),s(t,B,o),u(B,R),u(B,A),u(B,U),w(U,e[16]),s(t,J,o),s(t,Y,o),u(Y,W),u(Y,q),u(Y,z),u(Y,K),u(Y,Q),u(Y,V),u(Y,X),Z||(tt=[$(l,"change",e[47]),$(l,"change",e[41]),$(_,"input",e[48]),$(P,"input",e[49]),$(I,"change",e[50]),$(U,"input",e[51]),$(W,"click",e[52]),$(z,"click",e[25]),$(Q,"click",e[26]),$(X,"click",e[42])],Z=!0)},p(t,e){if(t[4]?et&&(et.d(1),et=null):et||(et=$t(),et.c(),et.m(i.parentNode,i)),8192&e[0]){let n;for(nt=t[13],n=0;n<nt.length;n+=1){const o=lt(t,nt,n);ot[n]?ot[n].p(o,e):(ot[n]=gt(o),ot[n].c(),ot[n].m(l,null))}for(;n<ot.length;n+=1)ot[n].d(1);ot.length=nt.length}532480&e[0]&&b(l,t[19]),131072&e[0]&&_.value!==t[17]&&w(_,t[17]),16384&e[0]&&P.value!==t[14]&&w(P,t[14]),32768&e[0]&&(I.checked=t[15]),65536&e[0]&&U.value!==t[16]&&w(U,t[16])},i:t,o:t,d(t){t&&p(n),t&&p(r),et&&et.d(t),t&&p(i),t&&p(c),t&&p(a),t&&p(l),d(ot,t),t&&p(x),t&&p(v),t&&p(j),t&&p(C),t&&p(N),t&&p(E),t&&p(G),t&&p(D),t&&p(O),t&&p(B),t&&p(J),t&&p(Y),Z=!1,o(tt)}}}function ft(t){let e,n,o,r,i,c,a,l,d,$,g,x,w,y,b,v,j,C,k,T,_,N,E,S,F,P,M,G,D,H=!t[4]&&xt();r=new tt({props:{project:t[0],projects:t[1]}}),r.$on("projectChange",t[44]),c=new ct({props:{show:!t[4],buttonFunction:t[23],buttonName:"Go to Project",$$slots:{default:[wt]},$$scope:{ctx:t}}});let L=!t[4]&&yt(),I=null!==t[11]&&bt(t);$=new ct({props:{show:!t[4],buttonFunction:t[29],buttonName:"Edit Project",$$slots:{default:[jt]},$$scope:{ctx:t}}});let O=t[5]&&Ct(t),q=t[9]&&Tt(t),z=t[8]&&Nt(t),K=t[7]&&St(t),Q=t[6]&&Pt(t);j=new ct({props:{show:!t[4],buttonFunction:t[24],buttonName:"Set Current Directory as Project",$$slots:{default:[Gt]},$$scope:{ctx:t}}}),k=new ct({props:{show:!t[4],buttonFunction:t[39],buttonName:"Set Current Directory as Templage",$$slots:{default:[Dt]},$$scope:{ctx:t}}}),_=new ct({props:{show:!t[4],buttonFunction:t[27],buttonName:"Run Project Script",$$slots:{default:[Ht]},$$scope:{ctx:t}}}),E=new ct({props:{show:!t[4],buttonFunction:t[28],buttonName:"Edit Project Script",$$slots:{default:[Lt]},$$scope:{ctx:t}}});let V=t[10]&&It(t);return P=new ct({props:{show:!t[4],buttonFunction:t[40],buttonName:"Edit Templates",$$slots:{default:[At]},$$scope:{ctx:t}}}),G=new ct({props:{show:!t[4],buttonFunction:t[21],buttonName:"Close",$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){H&&H.c(),e=h(),n=f("h3"),o=m("Current Project: "),J(r.$$.fragment),i=h(),J(c.$$.fragment),a=h(),L&&L.c(),l=h(),I&&I.c(),d=h(),J($.$$.fragment),g=h(),O&&O.c(),x=h(),q&&q.c(),w=h(),z&&z.c(),y=h(),K&&K.c(),b=h(),Q&&Q.c(),v=h(),J(j.$$.fragment),C=h(),J(k.$$.fragment),T=h(),J(_.$$.fragment),N=h(),J(E.$$.fragment),S=h(),V&&V.c(),F=h(),J(P.$$.fragment),M=h(),J(G.$$.fragment)},m(t,p){H&&H.m(t,p),s(t,e,p),s(t,n,p),u(n,o),Y(r,n,null),s(t,i,p),Y(c,t,p),s(t,a,p),L&&L.m(t,p),s(t,l,p),I&&I.m(t,p),s(t,d,p),Y($,t,p),s(t,g,p),O&&O.m(t,p),s(t,x,p),q&&q.m(t,p),s(t,w,p),z&&z.m(t,p),s(t,y,p),K&&K.m(t,p),s(t,b,p),Q&&Q.m(t,p),s(t,v,p),Y(j,t,p),s(t,C,p),Y(k,t,p),s(t,T,p),Y(_,t,p),s(t,N,p),Y(E,t,p),s(t,S,p),V&&V.m(t,p),s(t,F,p),Y(P,t,p),s(t,M,p),Y(G,t,p),D=!0},p(t,n){t[4]?H&&(H.d(1),H=null):H||(H=xt(),H.c(),H.m(e.parentNode,e));const o={};1&n[0]&&(o.project=t[0]),2&n[0]&&(o.projects=t[1]),r.$set(o);const i={};16&n[0]&&(i.show=!t[4]),131072&n[2]&&(i.$$scope={dirty:n,ctx:t}),c.$set(i),t[4]?L&&(L.d(1),L=null):L||(L=yt(),L.c(),L.m(l.parentNode,l)),null!==t[11]?I?I.p(t,n):(I=bt(t),I.c(),I.m(d.parentNode,d)):I&&(I.d(1),I=null);const a={};16&n[0]&&(a.show=!t[4]),131072&n[2]&&(a.$$scope={dirty:n,ctx:t}),$.$set(a),t[5]?O?(O.p(t,n),32&n[0]&&A(O,1)):(O=Ct(t),O.c(),A(O,1),O.m(x.parentNode,x)):O&&(B(),U(O,1,1,()=>{O=null}),R()),t[9]?q?(q.p(t,n),512&n[0]&&A(q,1)):(q=Tt(t),q.c(),A(q,1),q.m(w.parentNode,w)):q&&(B(),U(q,1,1,()=>{q=null}),R()),t[8]?z?(z.p(t,n),256&n[0]&&A(z,1)):(z=Nt(t),z.c(),A(z,1),z.m(y.parentNode,y)):z&&(B(),U(z,1,1,()=>{z=null}),R()),t[7]?K?(K.p(t,n),128&n[0]&&A(K,1)):(K=St(t),K.c(),A(K,1),K.m(b.parentNode,b)):K&&(B(),U(K,1,1,()=>{K=null}),R()),t[6]?Q?(Q.p(t,n),64&n[0]&&A(Q,1)):(Q=Pt(t),Q.c(),A(Q,1),Q.m(v.parentNode,v)):Q&&(B(),U(Q,1,1,()=>{Q=null}),R());const u={};16&n[0]&&(u.show=!t[4]),131072&n[2]&&(u.$$scope={dirty:n,ctx:t}),j.$set(u);const s={};16&n[0]&&(s.show=!t[4]),131072&n[2]&&(s.$$scope={dirty:n,ctx:t}),k.$set(s);const p={};16&n[0]&&(p.show=!t[4]),131072&n[2]&&(p.$$scope={dirty:n,ctx:t}),_.$set(p);const f={};16&n[0]&&(f.show=!t[4]),131072&n[2]&&(f.$$scope={dirty:n,ctx:t}),E.$set(f),t[10]?V?(V.p(t,n),1024&n[0]&&A(V,1)):(V=It(t),V.c(),A(V,1),V.m(F.parentNode,F)):V&&(B(),U(V,1,1,()=>{V=null}),R());const m={};16&n[0]&&(m.show=!t[4]),131072&n[2]&&(m.$$scope={dirty:n,ctx:t}),P.$set(m);const h={};16&n[0]&&(h.show=!t[4]),131072&n[2]&&(h.$$scope={dirty:n,ctx:t}),G.$set(h)},i(t){D||(A(r.$$.fragment,t),A(c.$$.fragment,t),A($.$$.fragment,t),A(O),A(q),A(z),A(K),A(Q),A(j.$$.fragment,t),A(k.$$.fragment,t),A(_.$$.fragment,t),A(E.$$.fragment,t),A(V),A(P.$$.fragment,t),A(G.$$.fragment,t),D=!0)},o(t){U(r.$$.fragment,t),U(c.$$.fragment,t),U($.$$.fragment,t),U(O),U(q),U(z),U(K),U(Q),U(j.$$.fragment,t),U(k.$$.fragment,t),U(_.$$.fragment,t),U(E.$$.fragment,t),U(V),U(P.$$.fragment,t),U(G.$$.fragment,t),D=!1},d(t){H&&H.d(t),t&&p(e),t&&p(n),W(r),t&&p(i),W(c,t),t&&p(a),L&&L.d(t),t&&p(l),I&&I.d(t),t&&p(d),W($,t),t&&p(g),O&&O.d(t),t&&p(x),q&&q.d(t),t&&p(w),z&&z.d(t),t&&p(y),K&&K.d(t),t&&p(b),Q&&Q.d(t),t&&p(v),W(j,t),t&&p(C),W(k,t),t&&p(T),W(_,t),t&&p(N),W(E,t),t&&p(S),V&&V.d(t),t&&p(F),W(P,t),t&&p(M),W(G,t)}}}function mt(t){let e,n,o,r=t[74].name+"";return{c(){e=f("option"),n=m(r),e.__value=o=t[74].name,e.value=e.__value},m(t,o){s(t,e,o),u(e,n)},p(t,i){8192&i[0]&&r!==(r=t[74].name+"")&&x(n,r),8192&i[0]&&o!==(o=t[74].name)&&(e.__value=o,e.value=e.__value)},d(t){t&&p(e)}}}function ht(t){let e,n,o;return{c(){e=f("p"),e.textContent="This will create a new template item in the structure for templates. The user\ncan then use the information to create a new project from the template. It is a\nfairly flexable system in which you can designate a script or command line to\nexecute after the template is copied.",n=h(),o=f("table"),o.innerHTML="<thead><tr><th>Field</th> \n<th>Description</th></tr></thead> \n<tbody><tr><td>Name</td> \n<td>Your name for the template. It will use the templates directory name for starters.</td></tr> \n<tr><td>Path</td> \n<td>The path, whether a local directory or a GitHub url, to use as a template.</td></tr> \n<tr><td>Local</td> \n<td>If checked, is a local directory. Otherwise, it is a GitHub url.</td></tr> \n<tr><td>Script</td> \n<td>The script to run in the new directory after the template is copied.</td></tr></tbody>"},m(t,r){s(t,e,r),s(t,n,r),s(t,o,r)},d(t){t&&p(e),t&&p(n),t&&p(o)}}}function $t(t){let e,n,o;return{c(){e=f("p"),e.textContent="Here you can edit the different templates, remove a template, or create a new blank template.\nEach template has the following data structure:",n=h(),o=f("table"),o.innerHTML="<thead><tr><th>Field</th> \n<th>Description</th></tr></thead> \n<tbody><tr><td>Name</td> \n<td>Your name for the template. It will use the templates directory name for starters.</td></tr> \n<tr><td>Path</td> \n<td>The path, whether a local directory or a GitHub url, to use as a template.</td></tr> \n<tr><td>Local</td> \n<td>If checked, is a local directory. Otherwise, it is a GitHub url.</td></tr> \n<tr><td>Script</td> \n<td>The script to run in the new directory after the template is copied.</td></tr></tbody>"},m(t,r){s(t,e,r),s(t,n,r),s(t,o,r)},d(t){t&&p(e),t&&p(n),t&&p(o)}}}function gt(t){let e,n,o,r=t[74].name+"";return{c(){e=f("option"),n=m(r),e.__value=o=t[74].name,e.value=e.__value},m(t,o){s(t,e,o),u(e,n)},p(t,i){8192&i[0]&&r!==(r=t[74].name+"")&&x(n,r),8192&i[0]&&o!==(o=t[74].name)&&(e.__value=o,e.value=e.__value)},d(t){t&&p(e)}}}function xt(t){let e,n,o;return{c(){e=f("p"),e.textContent="Welcome to the Project Manager for Fig. Here, you can go to your projects, run scripts, and much more.",n=h(),o=f("p"),o.innerHTML="The <code>Expert</code> checkbox above will hide these information areas and just show the actions you can perform."},m(t,r){s(t,e,r),s(t,n,r),s(t,o,r)},d(t){t&&p(e),t&&p(n),t&&p(o)}}}function wt(t){let e,n,o;return{c(){e=f("h4"),e.textContent="Goto Project Directory",n=h(),o=f("p"),o.textContent="This will take the current terminal session to the project directory in the dropdown."},m(t,r){s(t,e,r),s(t,n,r),s(t,o,r)},d(t){t&&p(e),t&&p(n),t&&p(o)}}}function yt(t){let e,n,o;return{c(){e=f("h4"),e.textContent="Scripts",n=h(),o=f("p"),o.innerHTML="The following buttons will launch scripts that are in <code>npm</code>, <code>gulp</code>, <code>grunt</code>, <code>maid</code>, or <code>mask</code> files. You don’t have to be in the\nroot directory of the project to run them. Project Manager will save your current directory, run the\nscript in the root directory of the project, and return to your directory."},m(t,r){s(t,e,r),s(t,n,r),s(t,o,r)},d(t){t&&p(e),t&&p(n),t&&p(o)}}}function bt(t){let e,n=t[11],o=[];for(let e=0;e<n.length;e+=1)o[e]=vt(ut(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=m("")},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);s(t,e,n)},p(t,r){if(2048&r[0]|16&r[1]){let i;for(n=t[11],i=0;i<n.length;i+=1){const c=ut(t,n,i);o[i]?o[i].p(c,r):(o[i]=vt(c),o[i].c(),o[i].m(e.parentNode,e))}for(;i<o.length;i+=1)o[i].d(1);o.length=n.length}},d(t){d(o,t),t&&p(e)}}}function vt(t){let e,n,o,r,i=t[71].name+"";function c(...e){return t[45](t[71],...e)}return{c(){e=f("button"),n=m(i)},m(t,i){s(t,e,i),u(e,n),o||(r=$(e,"click",c),o=!0)},p(e,o){t=e,2048&o[0]&&i!==(i=t[71].name+"")&&x(n,i)},d(t){t&&p(e),o=!1,r()}}}function jt(t){let e,n,o;return{c(){e=f("h4"),e.textContent="Edit the Project",n=h(),o=f("p"),o.innerHTML='This will open the project in the editor defined in the <code>$EDITOR</code> environment variable or the\neditor listed in the <code>~/.myeditorchoice</code> file, which is used by the My Editor workflow for Alfred or the CurrentFiles script used with <a href="http://getbitbar.org" rel="nofollow">BitBar</a>,\n<a href="http://richsomerfield.com/apps/textbar/" rel="nofollow">TextBar</a>, and ScriptBar (my own version that isn’t available yet).'},m(t,r){s(t,e,r),s(t,n,r),s(t,o,r)},d(t){t&&p(e),t&&p(n),t&&p(o)}}}function Ct(t){let e,n;return e=new ct({props:{show:!t[4],buttonFunction:t[31],buttonName:"Edit Maid File",$$slots:{default:[kt]},$$scope:{ctx:t}}}),{c(){J(e.$$.fragment)},m(t,o){Y(e,t,o),n=!0},p(t,n){const o={};16&n[0]&&(o.show=!t[4]),131072&n[2]&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function kt(t){let e,n,o;return{c(){e=f("h4"),e.textContent="Edit the Maid File",n=h(),o=f("p"),o.textContent="Maid is a task runner written in JavaScript for defining actions using a markdown file."},m(t,r){s(t,e,r),s(t,n,r),s(t,o,r)},d(t){t&&p(e),t&&p(n),t&&p(o)}}}function Tt(t){let e,n;return e=new ct({props:{show:!t[4],buttonFunction:t[34],buttonName:"Edit Gulp File",$$slots:{default:[_t]},$$scope:{ctx:t}}}),{c(){J(e.$$.fragment)},m(t,o){Y(e,t,o),n=!0},p(t,n){const o={};16&n[0]&&(o.show=!t[4]),131072&n[2]&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function _t(t){let e,n,o;return{c(){e=f("h4"),e.textContent="Edit the Gulp File",n=h(),o=f("p"),o.textContent="Gulp is a task runner written in JavaScript for defining actions using a javascript file."},m(t,r){s(t,e,r),s(t,n,r),s(t,o,r)},d(t){t&&p(e),t&&p(n),t&&p(o)}}}function Nt(t){let e,n;return e=new ct({props:{show:!t[4],buttonFunction:t[33],buttonName:"Edit Grunt File",$$slots:{default:[Et]},$$scope:{ctx:t}}}),{c(){J(e.$$.fragment)},m(t,o){Y(e,t,o),n=!0},p(t,n){const o={};16&n[0]&&(o.show=!t[4]),131072&n[2]&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function Et(t){let e,n,o;return{c(){e=f("h4"),e.textContent="Edit the Grunt File",n=h(),o=f("p"),o.textContent="Grunt is a task runner written in JavaScript for defining actions using a javascript file."},m(t,r){s(t,e,r),s(t,n,r),s(t,o,r)},d(t){t&&p(e),t&&p(n),t&&p(o)}}}function St(t){let e,n;return e=new ct({props:{show:!t[4],buttonFunction:t[30],buttonName:"Edit Mask File",$$slots:{default:[Ft]},$$scope:{ctx:t}}}),{c(){J(e.$$.fragment)},m(t,o){Y(e,t,o),n=!0},p(t,n){const o={};16&n[0]&&(o.show=!t[4]),131072&n[2]&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function Ft(t){let e,n,o;return{c(){e=f("h4"),e.textContent="Edit the Mask File",n=h(),o=f("p"),o.textContent="Mask is a task runner written in Rust for defining actions using a markdown file."},m(t,r){s(t,e,r),s(t,n,r),s(t,o,r)},d(t){t&&p(e),t&&p(n),t&&p(o)}}}function Pt(t){let e,n;return e=new ct({props:{show:!t[4],buttonFunction:t[32],buttonName:"Edit Npm File",$$slots:{default:[Mt]},$$scope:{ctx:t}}}),{c(){J(e.$$.fragment)},m(t,o){Y(e,t,o),n=!0},p(t,n){const o={};16&n[0]&&(o.show=!t[4]),131072&n[2]&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function Mt(t){let e,n,o;return{c(){e=f("h4"),e.textContent="Edit the npm File",n=h(),o=f("p"),o.innerHTML="This will edit the <code>package.json</code> file for the npm project."},m(t,r){s(t,e,r),s(t,n,r),s(t,o,r)},d(t){t&&p(e),t&&p(n),t&&p(o)}}}function Gt(t){let e,n,o,r,i,c,a;return{c(){e=f("h4"),e.textContent="Set as Current Project or Create New Project Directory",n=h(),o=f("p"),o.textContent="This will get the current directory and set it as the current project. If the current directory\nis a subdirectory in a currently defined project, it will set that project as the active project.",r=h(),i=f("p"),i.textContent="Otherwise, it will ask for a new project name, create a blank project start script, and save the current directory with that project name.",c=h(),a=f("p"),a.innerHTML="You can also set a template to be used to create this project. If a local template have the script <code>setupTemplate</code> in the template directory, it will be removed\nafter the script in the variable <code>Script</code> is ran. The script variable is automatically set to\n<code>setupTemplate</code> for convience when creating templates."},m(t,l){s(t,e,l),s(t,n,l),s(t,o,l),s(t,r,l),s(t,i,l),s(t,c,l),s(t,a,l)},d(t){t&&p(e),t&&p(n),t&&p(o),t&&p(r),t&&p(i),t&&p(c),t&&p(a)}}}function Dt(t){let e,n,o;return{c(){e=f("h4"),e.textContent="Set the Current Directory as a Template",n=h(),o=f("p"),o.textContent="This will set the current directory as a template. It will show the template maker dialog\nfor adding the different fields that make up a template specification."},m(t,r){s(t,e,r),s(t,n,r),s(t,o,r)},d(t){t&&p(e),t&&p(n),t&&p(o)}}}function Ht(t){let e,n,o;return{c(){e=f("h4"),e.textContent="Run the Project Script",n=h(),o=f("p"),o.innerHTML="This will run the current project’s start script. This script is in the top of the project directory and is named <code>.startproject</code>."},m(t,r){s(t,e,r),s(t,n,r),s(t,o,r)},d(t){t&&p(e),t&&p(n),t&&p(o)}}}function Lt(t){let e,n,o;return{c(){e=f("h4"),e.textContent="Edit the Project Script",n=h(),o=f("p"),o.innerHTML='This will open the project start script in the editor defined in the <code>$EDITOR</code> environment variable or the\neditor listed in the <code>~/.myeditorchoice</code> file, which is used by the My Editor workflow for Alfred or the CurrentFiles script used with <a href="http://getbitbar.org" rel="nofollow">BitBar</a>,\n<a href="http://richsomerfield.com/apps/textbar/" rel="nofollow">TextBar</a>, and ScriptBar (my own version that isn’t available yet).'},m(t,r){s(t,e,r),s(t,n,r),s(t,o,r)},d(t){t&&p(e),t&&p(n),t&&p(o)}}}function It(t){let e,n,o,r;return e=new ct({props:{show:!t[4],buttonFunction:t[37],buttonName:"Git Status",$$slots:{default:[Ot]},$$scope:{ctx:t}}}),o=new ct({props:{show:!t[4],buttonFunction:t[38],buttonName:"Git Commit and Push",$$slots:{default:[Rt],extra:[Bt]},$$scope:{ctx:t}}}),{c(){J(e.$$.fragment),n=h(),J(o.$$.fragment)},m(t,i){Y(e,t,i),s(t,n,i),Y(o,t,i),r=!0},p(t,n){const r={};16&n[0]&&(r.show=!t[4]),131072&n[2]&&(r.$$scope={dirty:n,ctx:t}),e.$set(r);const i={};16&n[0]&&(i.show=!t[4]),4096&n[0]|131072&n[2]&&(i.$$scope={dirty:n,ctx:t}),o.$set(i)},i(t){r||(A(e.$$.fragment,t),A(o.$$.fragment,t),r=!0)},o(t){U(e.$$.fragment,t),U(o.$$.fragment,t),r=!1},d(t){W(e,t),t&&p(n),W(o,t)}}}function Ot(t){let e,n,o;return{c(){e=f("h4"),e.textContent="Git Status",n=h(),o=f("p"),o.textContent="Get the git status of the current project. You don’t have to be in the root directory of the\nproject to run this command."},m(t,r){s(t,e,r),s(t,n,r),s(t,o,r)},d(t){t&&p(e),t&&p(n),t&&p(o)}}}function Bt(t){let e,n,o,r,i,c;return{c(){e=f("div"),n=f("h4"),n.textContent="Git Commit Message:",o=h(),r=f("input"),g(r,"type","text"),g(e,"slot","extra"),y(e,"width","100%"),y(e,"display","flex"),y(e,"flex-direction","column")},m(a,l){s(a,e,l),u(e,n),u(e,o),u(e,r),w(r,t[12]),i||(c=$(r,"input",t[46]),i=!0)},p(t,e){4096&e[0]&&r.value!==t[12]&&w(r,t[12])},d(t){t&&p(e),i=!1,c()}}}function Rt(e){let n,o,r,i;return{c(){n=f("h4"),n.textContent="Git Commit and Push",o=h(),r=f("p"),r.textContent="This will take the message below and commit the changes to the git repository. Once committed,\nit will push to GitHub. You don’t have to be in the root directory of the project to run this command.",i=h()},m(t,e){s(t,n,e),s(t,o,e),s(t,r,e),s(t,i,e)},p:t,d(t){t&&p(n),t&&p(o),t&&p(r),t&&p(i)}}}function At(t){let e,n,o;return{c(){e=f("h4"),e.textContent="Edit Template",n=h(),o=f("p"),o.textContent="This button will show the edit template dialog for edit the different templates, remove a\ntemplate, or create a new blank template."},m(t,r){s(t,e,r),s(t,n,r),s(t,o,r)},d(t){t&&p(e),t&&p(n),t&&p(o)}}}function Ut(t){let e,n,o;return{c(){e=f("h4"),e.textContent="Leave the Project Manager",n=h(),o=f("p"),o.textContent="Leave the Project Manager application for Fig."},m(t,r){s(t,e,r),s(t,n,r),s(t,o,r)},d(t){t&&p(e),t&&p(n),t&&p(o)}}}function Jt(t){let e,n,o,r,i,c,a,l,d,m,x;const w=[ft,dt,pt,st],b=[];function v(t,e){return t[2]||t[18]||t[20]?t[20]?1:t[18]?2:3:0}return a=v(t),l=b[a]=w[a](t),{c(){e=f("div"),n=f("div"),o=f("label"),o.textContent="Expert",r=h(),i=f("input"),c=h(),l.c(),g(o,"for","expert"),g(i,"id","expert"),g(i,"name","expert"),g(i,"type","checkbox"),i.checked=t[4],y(i,"margin","3px 0px 0px 10px"),y(n,"display","flex"),y(n,"flex-direction","row"),y(e,"display","flex"),y(e,"flex-direction","column")},m(l,p){s(l,e,p),u(e,n),u(n,o),u(n,r),u(n,i),u(e,c),b[a].m(e,null),d=!0,m||(x=$(i,"change",t[36]),m=!0)},p(t,n){(!d||16&n[0])&&(i.checked=t[4]);let o=a;a=v(t),a===o?b[a].p(t,n):(B(),U(b[o],1,1,()=>{b[o]=null}),R(),l=b[a],l||(l=b[a]=w[a](t),l.c()),A(l,1),l.m(e,null))},i(t){d||(A(l),d=!0)},o(t){U(l),d=!1},d(t){t&&p(e),b[a].d(),m=!1,x()}}}function Yt(t,e,n){let{fig:o}=e,r="Not Set",i="Not Set",c=[],a=!1,l=null,u=!1,s=!1,p=!1,d=!1,f=!1,m=!1,h=!1,$=null,g="",x=[],w="",y=!0,b="setupTemplate",j="",C=!1,T="none",_=!1;var N;function E(t){n(0,r=null),i=null,c.forEach(e=>{""!==e&&t.includes(e[0])&&(i=e[1],n(0,r=e[0]))}),P()}function S(t){i=null,n(0,r=null),c.forEach(e=>{""!==e&&function(t,e){if((t=new String(t))===(e=new String(e)))return!0;const n=e.split("/").filter(t=>t.length),o=t.split("/").filter(t=>t.length);return n.every((t,e)=>o[e]===t)}(t,e[1])&&(n(0,r=e[0]),i=e[1])}),P()}function F(t){o.fread("~/.myeditorchoice",(e,n)=>{n?o.execute(o.env.EDITOR+" "+t,(t,e)=>{}):"/"===(e=e.trim())[0]?o.execute("open -a '"+e.trim()+"' "+t,(t,e)=>{}):o.execute(e+" "+t,(t,e)=>{})})}function P(){null===i&&""===i||(n(11,$=new Array),o.fread(i+"/maidfile.md",(t,e)=>{e?n(5,s=!1):(n(5,s=!0),t.split("\n").filter(t=>null!==t.match(/^##\s*\w*/)).forEach(t=>{const e=t.match(/^##\s*(\w*)/);$.push({name:"Maid "+e[1]+" script",command:"maid "+e[1]}),n(11,$)}));o.fread(i+"/maskfile.md",(t,e)=>{e?n(7,d=!1):(n(7,d=!0),t.split("\n").filter(t=>null!==t.match(/^##\s*\w*/)).forEach(t=>{const e=t.match(/^##\s*(\w*)/);$.push({name:"Mask "+e[1]+" script",command:"mask "+e[1]}),n(11,$)}));o.fread(i+"/package.json",(t,e)=>{if(e)n(6,p=!1);else{n(6,p=!0);var r=JSON.parse(t);for(const t in r.scripts)$.push({name:"NPM "+t+" script",command:"npm run "+t}),n(11,$)}o.fread(i+"/Gruntfile.js",(t,e)=>{e?n(8,f=!1):(n(8,f=!0),t.split("\n").filter(t=>null!==t.match(/grunt\.registerTask\(/)).forEach(t=>{const e=t.match(/grunt\.registerTask\(\'([^\']*)\'/);null===e&&(e=t.match(/grunt\.registerTask\(\"([^\']*)\"/)),$.push({name:"Grunt "+e[1]+" script",command:"grunt "+e[1]}),n(11,$)}));o.fread(i+"/gulpfile.js",(t,e)=>{e?n(9,m=!1):(n(9,m=!0),t.split("\n").filter(t=>null!==t.match(/^exports\.[^\=]+\=/)).forEach(t=>{const e=t.match(/^exports\.([^(\ |\=)]*)/);$.push({name:"Gulp "+e[1]+" script",command:"gulp "+e[1]}),n(11,$)}))})})})})}),o.fread(i+"/.git/HEAD",(t,e)=>{e||(n(10,h=!0),n(12,g=""))}))}function M(){o.fwrite("~/.currentprojectdir",i,t=>{t&&console.log(t)})}function G(){var t,e=[];if(e[0]=r,e[1]=i,c.push(e),t=c.map(t=>t[0]+"|"+t[1]).join("\n"),o.fwrite("~/.projects",t,t=>{t&&console.log(t)}),o.execute('touch "'+i+'/.startproject"; chmod a+x "'+i+'/.startproject";',(t,e)=>{}),!T.includes("none")){var n=x.find(t=>t.name.includes(T));n.local?(o.run('echo "Copy template'+T+'..."; cp -R "'+n.templateDirUrl+'/." .; '+n.runScript+";"),o.fread(n.templateDirUrl+"/setupTemplate",(t,e)=>{e||o.run("rm setupTemplate;")})):o.run('echo "Copy GitHub template '+T+'..."; npx degit --force '+n.templateDirUrl+' "'+i+'"; '+n.runScript+";")}}function D(t){var e=o.env.PWD;o.fread("~/.path",(n,r)=>{e=r?o.env.PWD:n.trim(),t(e)})}function H(t){o.run("pushd .; cd '"+i+"'; "+t.command+"; popd;")}function L(){o.fwrite("~/.fig/apps/projectmanager/projectmanager.json",JSON.stringify({expert:u,templates:x}),t=>{})}N=()=>{o.fread("~/.fig/apps/projectmanager/projectmanager.json",(t,e)=>{if(e)n(4,u=!1),n(13,x=[]),L();else{var o=JSON.parse(t);void 0!==o.expert&&n(4,u=o.expert),void 0!==o.templates&&n(13,x=o.templates)}}),o.fread("~/.projects",(t,e)=>{if(e)console.log("Error:  "+e),n(1,c=""),n(0,r="");else{n(1,c=t.split("\n"));var i=!1;c.forEach((t,e,n)=>{""!==t?n[e]=t.split("|"):i=!0}),i&&c.pop()}o.fread("~/.currentprojectdir",(t,e)=>{e?console.log("Error:  "+e):S(t)})})},k().$$.on_mount.push(N);return t.$$set=t=>{"fig"in t&&n(43,o=t.fig)},[r,c,a,l,u,s,p,d,f,m,h,$,g,x,w,y,b,j,C,T,_,function(){o.reposition("7")},E,function(){o.run("cd '"+i+"'"),M()},function(){D(t=>{S(t),null===r&&(n(0,r="New"),i=t,n(2,a=!0),n(3,l=G)),M()})},function(){n(13,x=x.filter(t=>!t.name.includes(T))),n(19,T="none"),n(17,j=""),n(14,w=""),n(16,b="setupTemplate"),n(15,y=!0),L()},function(){n(19,T="none"),n(17,j="New Template"),n(14,w=""),n(16,b="setupTemplate"),n(15,y=!0)},function(){o.run('pushd .; cd "'+i+'"; ./.startproject "'+i+'"; popd;')},function(){F("'"+i+"/.startproject'")},function(){F('"'+i+'"')},function(){F('"'+i+'/maskfile.md"')},function(){F('"'+i+'/maidfile.md"')},function(){F('"'+i+'/package.json"')},function(){F('"'+i+'/Gruntfile.js"')},function(){F('"'+i+'/gulpfile.js"')},H,function(){n(4,u=!u),L()},function(){o.run("pushd .; cd '"+i+"'; git status; popd;")},function(){o.run("pushd .; cd '"+i+"'; git commit -am '"+g+"'; git push; popd;"),n(12,g="")},function(){C?void 0!==w&&"string"==typeof w&&""!==w&&"boolean"==typeof y&&"string"==typeof b&&(x.push({name:j,templateDirUrl:w,local:y,runScript:b}),L()):D(t=>{var e=t.split("/");n(17,j=e[e.length-1]),n(14,w=t),n(15,y=!0),n(18,C=!0)})},function(){n(20,_=!0),n(19,T="none"),n(17,j=""),n(14,w=""),n(16,b="setupTemplate"),n(15,y=!0)},function(){var t=x.find(t=>t.name.includes(T));n(17,j=t.name),n(14,w=t.templateDirUrl),n(15,y=t.local),n(16,b=t.runScript)},function(){n(13,x=x.map(t=>(t.name.includes(T)&&(t.name=j,t.templateDirUrl=w,t.local=y,t.runScript=b),t))),L()},o,t=>{E(t.detail)},t=>{H(t)},function(){g=this.value,n(12,g)},function(){T=v(this),n(19,T),n(13,x)},function(){j=this.value,n(17,j)},function(){w=this.value,n(14,w)},function(){y=this.checked,n(15,y)},function(){b=this.value,n(16,b)},()=>{n(20,_=!1)},function(){j=this.value,n(17,j)},function(){w=this.value,n(14,w)},function(){y=this.checked,n(15,y)},function(){b=this.value,n(16,b)},()=>{n(18,C=!1)},function(){r=this.value,n(0,r)},function(){T=v(this),n(19,T),n(13,x)},()=>{n(2,a=!1),l()}]}class Wt extends K{constructor(t){super(),z(this,t,Yt,Jt,i,{fig:43},[-1,-1,-1])}}fig.init=(t,e)=>{fig.title="Project Manager",fig.icon="fig://"+fig.env.PWD;new Wt({target:document.body,props:{fig:fig}})}}();
//# sourceMappingURL=bundle.js.map
