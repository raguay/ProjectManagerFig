!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,o){if(t){const r=u(t,e,n,o);return t[0](r)}}function u(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function s(t,e,n,o,r,c,i){const s=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,c);if(s){const r=u(e,n,o,i);t.p(r,s)}}function a(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function $(){return m(" ")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e){t.value=null==e?"":e}function j(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function b(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}}let y;function v(t){y=t}function E(){if(!y)throw new Error("Function called outside component initialization");return y}function C(){const t=E();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach(e=>{e.call(t,r)})}}}const k=[],N=[],_=[],F=[],T=Promise.resolve();let P=!1;function M(t){_.push(t)}let S=!1;const G=new Set;function O(){if(!S){S=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];v(e),D(e.$$)}for(k.length=0;N.length;)N.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];G.has(e)||(G.add(e),e())}_.length=0}while(k.length);for(;F.length;)F.pop()();P=!1,S=!1,G.clear()}}function D(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const R=new Set;let I;function L(){I={r:0,c:[],p:I}}function H(){I.r||o(I.c),I=I.p}function A(t,e){t&&t.i&&(R.delete(t),t.i(e))}function J(t,e,n,o){if(t&&t.o){if(R.has(t))return;R.add(t),I.c.push(()=>{R.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function W(t){t&&t.c()}function Y(t,n,c){const{fragment:i,on_mount:u,on_destroy:s,after_update:a}=t.$$;i&&i.m(n,c),M(()=>{const n=u.map(e).filter(r);s?s.push(...n):o(n),t.$$.on_mount=[]}),a.forEach(M)}function q(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function z(t,e){-1===t.$$.dirty[0]&&(k.push(t),P||(P=!0,T.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(e,r,c,i,u,s,a=[-1]){const l=y;v(e);const p=r.props||{},d=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:n(),dirty:a,skip_bound:!1};let m=!1;if(d.ctx=c?c(e,p,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&u(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),m&&z(e,t)),n}):[],d.update(),m=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();r.intro&&A(e.$$.fragment),Y(e,r.target,r.anchor),O()}v(l)}class K{$destroy(){q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Q(t,e,n){const o=t.slice();return o[5]=e[n],o}function U(t){let e,n,o,r=t[5][0]+"";return{c(){e=d("option"),n=m(r),e.__value=o=t[5][0],e.value=e.__value},m(t,o){l(t,e,o),a(e,n)},p(t,c){2&c&&r!==(r=t[5][0]+"")&&x(n,r),2&c&&o!==(o=t[5][0])&&(e.__value=o,e.value=e.__value)},d(t){t&&f(e)}}}function V(e){let n,r,c,i,u=e[1],s=[];for(let t=0;t<u.length;t+=1)s[t]=U(Q(e,u,t));return{c(){n=d("div"),r=d("select");for(let t=0;t<s.length;t+=1)s[t].c();void 0===e[0]&&M(()=>e[3].call(r)),g(n,"id","projectSelect")},m(t,o){l(t,n,o),a(n,r);for(let t=0;t<s.length;t+=1)s[t].m(r,null);b(r,e[0]),c||(i=[h(r,"change",e[3]),h(r,"change",e[2])],c=!0)},p(t,[e]){if(2&e){let n;for(u=t[1],n=0;n<u.length;n+=1){const o=Q(t,u,n);s[n]?s[n].p(o,e):(s[n]=U(o),s[n].c(),s[n].m(r,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=u.length}3&e&&b(r,t[0])},i:t,o:t,d(t){t&&f(n),p(s,t),c=!1,o(i)}}}function X(t,e,n){let{project:o=""}=e,{projects:r=[]}=e;const c=C();return t.$$set=t=>{"project"in t&&n(0,o=t.project),"projects"in t&&n(1,r=t.projects)},[o,r,function(){c("projectChange",o)},function(){o=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(0,o),n(1,r)}]}class Z extends K{constructor(t){super(),B(this,t,X,V,c,{project:0,projects:1})}}const tt=t=>({}),et=t=>({});function nt(t){let e;const n=t[4].default,o=i(n,t,t[3],null),r=o||function(t){let e;return{c(){e=d("p"),e.textContent="No information for this button"},m(t,n){l(t,e,n)},d(t){t&&f(e)}}}();return{c(){r&&r.c()},m(t,n){r&&r.m(t,n),e=!0},p(t,e){o&&o.p&&8&e&&s(o,n,t,t[3],e,null,null)},i(t){e||(A(r,t),e=!0)},o(t){J(r,t),e=!1},d(t){r&&r.d(t)}}}function ot(t){let e,n,o,c,u,p,g,w=t[0]&&nt(t);const j=t[4].extra,b=i(j,t,t[3],et);return{c(){w&&w.c(),e=$(),b&&b.c(),n=$(),o=d("button"),c=m(t[2])},m(i,s){w&&w.m(i,s),l(i,e,s),b&&b.m(i,s),l(i,n,s),l(i,o,s),a(o,c),u=!0,p||(g=h(o,"click",(function(){r(t[1])&&t[1].apply(this,arguments)})),p=!0)},p(n,[o]){(t=n)[0]?w?(w.p(t,o),1&o&&A(w,1)):(w=nt(t),w.c(),A(w,1),w.m(e.parentNode,e)):w&&(L(),J(w,1,1,()=>{w=null}),H()),b&&b.p&&8&o&&s(b,j,t,t[3],o,tt,et),(!u||4&o)&&x(c,t[2])},i(t){u||(A(w),A(b,t),u=!0)},o(t){J(w),J(b,t),u=!1},d(t){w&&w.d(t),t&&f(e),b&&b.d(t),t&&f(n),t&&f(o),p=!1,g()}}}function rt(t,e,n){let{show:o}=e,{buttonFunction:r}=e,{buttonName:c}=e,{$$slots:i={},$$scope:u}=e;return t.$$set=t=>{"show"in t&&n(0,o=t.show),"buttonFunction"in t&&n(1,r=t.buttonFunction),"buttonName"in t&&n(2,c=t.buttonName),"$$scope"in t&&n(3,u=t.$$scope)},[o,r,c,u,i]}class ct extends K{constructor(t){super(),B(this,t,rt,ot,c,{show:0,buttonFunction:1,buttonName:2})}}function it(t,e,n){const o=t.slice();return o[43]=e[n],o}function ut(e){let n,r,c,i,u,s,a;return{c(){n=d("h3"),n.textContent="Give a name for the Project:",r=$(),c=d("input"),i=$(),u=d("button"),u.textContent="Return",g(c,"type","text")},m(t,o){l(t,n,o),l(t,r,o),l(t,c,o),w(c,e[0]),l(t,i,o),l(t,u,o),s||(a=[h(c,"input",e[33]),h(u,"click",e[34])],s=!0)},p(t,e){1&e[0]&&c.value!==t[0]&&w(c,t[0])},i:t,o:t,d(t){t&&f(n),t&&f(r),t&&f(c),t&&f(i),t&&f(u),s=!1,o(a)}}}function st(t){let e,n,o,r,c,i,u,s,p,h,g,x,w,j,b,y,v,E,C,k,N,_,F,T,P,M=!t[4]&&at();r=new Z({props:{project:t[0],projects:t[1]}}),r.$on("projectChange",t[30]),i=new ct({props:{show:!t[4],buttonFunction:t[15],buttonName:"Go to Project",$$slots:{default:[lt]},$$scope:{ctx:t}}});let S=!t[4]&&ft(),G=null!==t[11]&&pt(t);h=new ct({props:{show:!t[4],buttonFunction:t[19],buttonName:"Edit Project",$$slots:{default:[mt]},$$scope:{ctx:t}}});let O=t[5]&&$t(t),D=t[9]&&gt(t),R=t[8]&&wt(t),I=t[7]&&bt(t),z=t[6]&&vt(t);v=new ct({props:{show:!t[4],buttonFunction:t[16],buttonName:"Set Current Directory as Project",$$slots:{default:[Ct]},$$scope:{ctx:t}}}),C=new ct({props:{show:!t[4],buttonFunction:t[17],buttonName:"Run Project Script",$$slots:{default:[kt]},$$scope:{ctx:t}}}),N=new ct({props:{show:!t[4],buttonFunction:t[18],buttonName:"Edit Project Script",$$slots:{default:[Nt]},$$scope:{ctx:t}}});let B=t[10]&&_t(t);return T=new ct({props:{show:!t[4],buttonFunction:t[13],buttonName:"Close",$$slots:{default:[Mt]},$$scope:{ctx:t}}}),{c(){M&&M.c(),e=$(),n=d("h3"),o=m("Current Project: "),W(r.$$.fragment),c=$(),W(i.$$.fragment),u=$(),S&&S.c(),s=$(),G&&G.c(),p=$(),W(h.$$.fragment),g=$(),O&&O.c(),x=$(),D&&D.c(),w=$(),R&&R.c(),j=$(),I&&I.c(),b=$(),z&&z.c(),y=$(),W(v.$$.fragment),E=$(),W(C.$$.fragment),k=$(),W(N.$$.fragment),_=$(),B&&B.c(),F=$(),W(T.$$.fragment)},m(t,f){M&&M.m(t,f),l(t,e,f),l(t,n,f),a(n,o),Y(r,n,null),l(t,c,f),Y(i,t,f),l(t,u,f),S&&S.m(t,f),l(t,s,f),G&&G.m(t,f),l(t,p,f),Y(h,t,f),l(t,g,f),O&&O.m(t,f),l(t,x,f),D&&D.m(t,f),l(t,w,f),R&&R.m(t,f),l(t,j,f),I&&I.m(t,f),l(t,b,f),z&&z.m(t,f),l(t,y,f),Y(v,t,f),l(t,E,f),Y(C,t,f),l(t,k,f),Y(N,t,f),l(t,_,f),B&&B.m(t,f),l(t,F,f),Y(T,t,f),P=!0},p(t,n){t[4]?M&&(M.d(1),M=null):M||(M=at(),M.c(),M.m(e.parentNode,e));const o={};1&n[0]&&(o.project=t[0]),2&n[0]&&(o.projects=t[1]),r.$set(o);const c={};16&n[0]&&(c.show=!t[4]),32768&n[1]&&(c.$$scope={dirty:n,ctx:t}),i.$set(c),t[4]?S&&(S.d(1),S=null):S||(S=ft(),S.c(),S.m(s.parentNode,s)),null!==t[11]?G?G.p(t,n):(G=pt(t),G.c(),G.m(p.parentNode,p)):G&&(G.d(1),G=null);const u={};16&n[0]&&(u.show=!t[4]),32768&n[1]&&(u.$$scope={dirty:n,ctx:t}),h.$set(u),t[5]?O?(O.p(t,n),32&n[0]&&A(O,1)):(O=$t(t),O.c(),A(O,1),O.m(x.parentNode,x)):O&&(L(),J(O,1,1,()=>{O=null}),H()),t[9]?D?(D.p(t,n),512&n[0]&&A(D,1)):(D=gt(t),D.c(),A(D,1),D.m(w.parentNode,w)):D&&(L(),J(D,1,1,()=>{D=null}),H()),t[8]?R?(R.p(t,n),256&n[0]&&A(R,1)):(R=wt(t),R.c(),A(R,1),R.m(j.parentNode,j)):R&&(L(),J(R,1,1,()=>{R=null}),H()),t[7]?I?(I.p(t,n),128&n[0]&&A(I,1)):(I=bt(t),I.c(),A(I,1),I.m(b.parentNode,b)):I&&(L(),J(I,1,1,()=>{I=null}),H()),t[6]?z?(z.p(t,n),64&n[0]&&A(z,1)):(z=vt(t),z.c(),A(z,1),z.m(y.parentNode,y)):z&&(L(),J(z,1,1,()=>{z=null}),H());const a={};16&n[0]&&(a.show=!t[4]),32768&n[1]&&(a.$$scope={dirty:n,ctx:t}),v.$set(a);const l={};16&n[0]&&(l.show=!t[4]),32768&n[1]&&(l.$$scope={dirty:n,ctx:t}),C.$set(l);const f={};16&n[0]&&(f.show=!t[4]),32768&n[1]&&(f.$$scope={dirty:n,ctx:t}),N.$set(f),t[10]?B?(B.p(t,n),1024&n[0]&&A(B,1)):(B=_t(t),B.c(),A(B,1),B.m(F.parentNode,F)):B&&(L(),J(B,1,1,()=>{B=null}),H());const d={};16&n[0]&&(d.show=!t[4]),32768&n[1]&&(d.$$scope={dirty:n,ctx:t}),T.$set(d)},i(t){P||(A(r.$$.fragment,t),A(i.$$.fragment,t),A(h.$$.fragment,t),A(O),A(D),A(R),A(I),A(z),A(v.$$.fragment,t),A(C.$$.fragment,t),A(N.$$.fragment,t),A(B),A(T.$$.fragment,t),P=!0)},o(t){J(r.$$.fragment,t),J(i.$$.fragment,t),J(h.$$.fragment,t),J(O),J(D),J(R),J(I),J(z),J(v.$$.fragment,t),J(C.$$.fragment,t),J(N.$$.fragment,t),J(B),J(T.$$.fragment,t),P=!1},d(t){M&&M.d(t),t&&f(e),t&&f(n),q(r),t&&f(c),q(i,t),t&&f(u),S&&S.d(t),t&&f(s),G&&G.d(t),t&&f(p),q(h,t),t&&f(g),O&&O.d(t),t&&f(x),D&&D.d(t),t&&f(w),R&&R.d(t),t&&f(j),I&&I.d(t),t&&f(b),z&&z.d(t),t&&f(y),q(v,t),t&&f(E),q(C,t),t&&f(k),q(N,t),t&&f(_),B&&B.d(t),t&&f(F),q(T,t)}}}function at(t){let e,n,o;return{c(){e=d("p"),e.textContent="Welcome to the Project Manager for Fig. Here, you can go to your projects, run scripts, and much more.",n=$(),o=d("p"),o.innerHTML="The <code>Expert</code> checkbox above will hide these information areas and just show the actions you can perform."},m(t,r){l(t,e,r),l(t,n,r),l(t,o,r)},d(t){t&&f(e),t&&f(n),t&&f(o)}}}function lt(t){let e,n,o;return{c(){e=d("h4"),e.textContent="Goto Project Directory",n=$(),o=d("p"),o.textContent="This will take the current terminal session to the project directory in the dropdown."},m(t,r){l(t,e,r),l(t,n,r),l(t,o,r)},d(t){t&&f(e),t&&f(n),t&&f(o)}}}function ft(t){let e,n,o;return{c(){e=d("h4"),e.textContent="Scripts",n=$(),o=d("p"),o.innerHTML="The following buttons will launch scripts that are in <code>npm</code>, <code>maid</code>, or <code>mask</code>. You don’t have to be in the\nroot directory of the project to run them. Project Manager will save your current directory, run the\nscript, and return to your directory."},m(t,r){l(t,e,r),l(t,n,r),l(t,o,r)},d(t){t&&f(e),t&&f(n),t&&f(o)}}}function pt(t){let e,n=t[11],o=[];for(let e=0;e<n.length;e+=1)o[e]=dt(it(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=m("")},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);l(t,e,n)},p(t,r){if(33556480&r[0]){let c;for(n=t[11],c=0;c<n.length;c+=1){const i=it(t,n,c);o[c]?o[c].p(i,r):(o[c]=dt(i),o[c].c(),o[c].m(e.parentNode,e))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(t){p(o,t),t&&f(e)}}}function dt(t){let e,n,o,r,c=t[43].name+"";function i(...e){return t[31](t[43],...e)}return{c(){e=d("button"),n=m(c)},m(t,c){l(t,e,c),a(e,n),o||(r=h(e,"click",i),o=!0)},p(e,o){t=e,2048&o[0]&&c!==(c=t[43].name+"")&&x(n,c)},d(t){t&&f(e),o=!1,r()}}}function mt(t){let e,n,o;return{c(){e=d("h4"),e.textContent="Edit the Project",n=$(),o=d("p"),o.innerHTML="This will open the project in the editor defined in the <code>$EDITOR</code> environment variable."},m(t,r){l(t,e,r),l(t,n,r),l(t,o,r)},d(t){t&&f(e),t&&f(n),t&&f(o)}}}function $t(t){let e,n;return e=new ct({props:{show:!t[4],buttonFunction:t[21],buttonName:"Edit Maid File",$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){W(e.$$.fragment)},m(t,o){Y(e,t,o),n=!0},p(t,n){const o={};16&n[0]&&(o.show=!t[4]),32768&n[1]&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function ht(t){let e,n,o;return{c(){e=d("h4"),e.textContent="Edit the Maid File",n=$(),o=d("p"),o.textContent="Maid is a task runner written in JavaScript for defining actions using a markdown file."},m(t,r){l(t,e,r),l(t,n,r),l(t,o,r)},d(t){t&&f(e),t&&f(n),t&&f(o)}}}function gt(t){let e,n;return e=new ct({props:{show:!t[4],buttonFunction:t[24],buttonName:"Edit Gulp File",$$slots:{default:[xt]},$$scope:{ctx:t}}}),{c(){W(e.$$.fragment)},m(t,o){Y(e,t,o),n=!0},p(t,n){const o={};16&n[0]&&(o.show=!t[4]),32768&n[1]&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function xt(t){let e,n,o;return{c(){e=d("h4"),e.textContent="Edit the Gulp File",n=$(),o=d("p"),o.textContent="Gulp is a task runner written in JavaScript for defining actions using a javascript file."},m(t,r){l(t,e,r),l(t,n,r),l(t,o,r)},d(t){t&&f(e),t&&f(n),t&&f(o)}}}function wt(t){let e,n;return e=new ct({props:{show:!t[4],buttonFunction:t[23],buttonName:"Edit Grunt File",$$slots:{default:[jt]},$$scope:{ctx:t}}}),{c(){W(e.$$.fragment)},m(t,o){Y(e,t,o),n=!0},p(t,n){const o={};16&n[0]&&(o.show=!t[4]),32768&n[1]&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function jt(t){let e,n,o;return{c(){e=d("h4"),e.textContent="Edit the Grunt File",n=$(),o=d("p"),o.textContent="Grunt is a task runner written in JavaScript for defining actions using a javascript file."},m(t,r){l(t,e,r),l(t,n,r),l(t,o,r)},d(t){t&&f(e),t&&f(n),t&&f(o)}}}function bt(t){let e,n;return e=new ct({props:{show:!t[4],buttonFunction:t[20],buttonName:"Edit Mask File",$$slots:{default:[yt]},$$scope:{ctx:t}}}),{c(){W(e.$$.fragment)},m(t,o){Y(e,t,o),n=!0},p(t,n){const o={};16&n[0]&&(o.show=!t[4]),32768&n[1]&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function yt(t){let e,n,o;return{c(){e=d("h4"),e.textContent="Edit the Mask File",n=$(),o=d("p"),o.textContent="Mask is a task runner written in Rust for defining actions using a markdown file."},m(t,r){l(t,e,r),l(t,n,r),l(t,o,r)},d(t){t&&f(e),t&&f(n),t&&f(o)}}}function vt(t){let e,n;return e=new ct({props:{show:!t[4],buttonFunction:t[22],buttonName:"Edit Npm File",$$slots:{default:[Et]},$$scope:{ctx:t}}}),{c(){W(e.$$.fragment)},m(t,o){Y(e,t,o),n=!0},p(t,n){const o={};16&n[0]&&(o.show=!t[4]),32768&n[1]&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function Et(t){let e,n,o;return{c(){e=d("h4"),e.textContent="Edit the npm File",n=$(),o=d("p"),o.innerHTML="This will edit the <code>package.json</code> file for the npm project."},m(t,r){l(t,e,r),l(t,n,r),l(t,o,r)},d(t){t&&f(e),t&&f(n),t&&f(o)}}}function Ct(t){let e,n,o,r,c;return{c(){e=d("h4"),e.textContent="Set as Current Project or Create New Project Directory",n=$(),o=d("p"),o.textContent="This will get the current directory and set it as the current project. If the current directory\nis a subdirectory in a currently defined project, it will set that project as the active project.",r=$(),c=d("p"),c.textContent="Otherwise, it will ask for a new project name, create a blank project start script, and save the current directory with that project name."},m(t,i){l(t,e,i),l(t,n,i),l(t,o,i),l(t,r,i),l(t,c,i)},d(t){t&&f(e),t&&f(n),t&&f(o),t&&f(r),t&&f(c)}}}function kt(t){let e,n,o;return{c(){e=d("h4"),e.textContent="Run the Project Script",n=$(),o=d("p"),o.innerHTML="This will run the current project’s start script. This script is in the top of the project directory and is named <code>.startproject</code>."},m(t,r){l(t,e,r),l(t,n,r),l(t,o,r)},d(t){t&&f(e),t&&f(n),t&&f(o)}}}function Nt(t){let e,n,o;return{c(){e=d("h4"),e.textContent="Edit the Project Script",n=$(),o=d("p"),o.innerHTML="This will open the project start script in the editor defined in the <code>$EDITOR</code> environment variable."},m(t,r){l(t,e,r),l(t,n,r),l(t,o,r)},d(t){t&&f(e),t&&f(n),t&&f(o)}}}function _t(t){let e,n,o,r;return e=new ct({props:{show:!t[4],buttonFunction:t[27],buttonName:"Git Status",$$slots:{default:[Ft]},$$scope:{ctx:t}}}),o=new ct({props:{show:!t[4],buttonFunction:t[28],buttonName:"Git Commit and Push",$$slots:{default:[Pt],extra:[Tt]},$$scope:{ctx:t}}}),{c(){W(e.$$.fragment),n=$(),W(o.$$.fragment)},m(t,c){Y(e,t,c),l(t,n,c),Y(o,t,c),r=!0},p(t,n){const r={};16&n[0]&&(r.show=!t[4]),32768&n[1]&&(r.$$scope={dirty:n,ctx:t}),e.$set(r);const c={};16&n[0]&&(c.show=!t[4]),4096&n[0]|32768&n[1]&&(c.$$scope={dirty:n,ctx:t}),o.$set(c)},i(t){r||(A(e.$$.fragment,t),A(o.$$.fragment,t),r=!0)},o(t){J(e.$$.fragment,t),J(o.$$.fragment,t),r=!1},d(t){q(e,t),t&&f(n),q(o,t)}}}function Ft(t){let e,n,o;return{c(){e=d("h4"),e.textContent="Git Status",n=$(),o=d("p"),o.textContent="Get the git status of the current project. You don’t have to be in the root directory of the\nproject to run this command."},m(t,r){l(t,e,r),l(t,n,r),l(t,o,r)},d(t){t&&f(e),t&&f(n),t&&f(o)}}}function Tt(t){let e,n,o,r,c,i;return{c(){e=d("div"),n=d("h4"),n.textContent="Git Commit Message:",o=$(),r=d("input"),g(r,"type","text"),g(e,"slot","extra"),j(e,"width","100%"),j(e,"display","flex"),j(e,"flex-direction","column")},m(u,s){l(u,e,s),a(e,n),a(e,o),a(e,r),w(r,t[12]),c||(i=h(r,"input",t[32]),c=!0)},p(t,e){4096&e[0]&&r.value!==t[12]&&w(r,t[12])},d(t){t&&f(e),c=!1,i()}}}function Pt(e){let n,o,r,c;return{c(){n=d("h4"),n.textContent="Git Commit and Push",o=$(),r=d("p"),r.textContent="This will take the message below and commit the changes to the git repository. Once committed,\nit will push to GitHub. You don’t have to be in the root directory of the project to run this command.",c=$()},m(t,e){l(t,n,e),l(t,o,e),l(t,r,e),l(t,c,e)},p:t,d(t){t&&f(n),t&&f(o),t&&f(r),t&&f(c)}}}function Mt(t){let e,n,o;return{c(){e=d("h4"),e.textContent="Leave the Project Manager",n=$(),o=d("p"),o.textContent="Leave the Project Manager application for Fig."},m(t,r){l(t,e,r),l(t,n,r),l(t,o,r)},d(t){t&&f(e),t&&f(n),t&&f(o)}}}function St(t){let e,n,o,r,c,i,u,s,p,m,x;const w=[st,ut],b=[];function y(t,e){return t[2]?1:0}return u=y(t),s=b[u]=w[u](t),{c(){e=d("div"),n=d("div"),o=d("label"),o.textContent="Expert",r=$(),c=d("input"),i=$(),s.c(),g(o,"for","expert"),g(c,"id","expert"),g(c,"name","expert"),g(c,"type","checkbox"),c.checked=t[4],j(c,"margin","3px 0px 0px 10px"),j(n,"display","flex"),j(n,"flex-direction","row"),j(e,"display","flex"),j(e,"flex-direction","column")},m(s,f){l(s,e,f),a(e,n),a(n,o),a(n,r),a(n,c),a(e,i),b[u].m(e,null),p=!0,m||(x=h(c,"change",t[26]),m=!0)},p(t,n){(!p||16&n[0])&&(c.checked=t[4]);let o=u;u=y(t),u===o?b[u].p(t,n):(L(),J(b[o],1,1,()=>{b[o]=null}),H(),s=b[u],s||(s=b[u]=w[u](t),s.c()),A(s,1),s.m(e,null))},i(t){p||(A(s),p=!0)},o(t){J(s),p=!1},d(t){t&&f(e),b[u].d(),m=!1,x()}}}function Gt(t,e,n){let{fig:o}=e,r="Not Set",c="Not Set",i=[],u=!1,s=null,a=!1,l=!1,f=!1,p=!1,d=!1,m=!1,$=!1,h=null,g={},x="";var w;function j(t){n(0,r=null),c=null,i.forEach(e=>{""!==e&&t.includes(e[0])&&(c=e[1],n(0,r=e[0]))}),y()}function b(t){c=null,n(0,r=null),i.forEach(e=>{""!==e&&function(t,e){if((t=new String(t))===(e=new String(e)))return!0;const n=e.split("/").filter(t=>t.length),o=t.split("/").filter(t=>t.length);return n.every((t,e)=>o[e]===t)}(t,e[1])&&(n(0,r=e[0]),c=e[1])}),y()}function y(){null===c&&""===c||(n(11,h=new Array),o.fread(c+"/maidfile.md",(t,e)=>{e?n(5,l=!1):(n(5,l=!0),t.split("\n").filter(t=>null!==t.match(/^##\s*\w*/)).forEach(t=>{const e=t.match(/^##\s*(\w*)/);h.push({name:"Maid "+e[1]+" script",command:"maid "+e[1]}),n(11,h)}));o.fread(c+"/maskfile.md",(t,e)=>{e?n(7,p=!1):(n(7,p=!0),t.split("\n").filter(t=>null!==t.match(/^##\s*\w*/)).forEach(t=>{const e=t.match(/^##\s*(\w*)/);h.push({name:"Mask "+e[1]+" script",command:"mask "+e[1]}),n(11,h)}));o.fread(c+"/package.json",(t,e)=>{if(e)n(6,f=!1);else{n(6,f=!0);var r=JSON.parse(t);for(const t in r.scripts)h.push({name:"NPM "+t+" script",command:"npm run "+t}),n(11,h)}o.fread(c+"/Gruntfile.js",(t,e)=>{e?n(8,d=!1):(n(8,d=!0),t.split("\n").filter(t=>null!==t.match(/grunt\.registerTask\(/)).forEach(t=>{const e=t.match(/grunt\.registerTask\(\'([^\']*)\'/);null===e&&(e=t.match(/grunt\.registerTask\(\"([^\']*)\"/)),h.push({name:"Grunt "+e[1]+" script",command:"grunt "+e[1]}),n(11,h)}));o.fread(c+"/gulpfile.js",(t,e)=>{e?n(9,m=!1):(n(9,m=!0),t.split("\n").filter(t=>null!==t.match(/^exports\.[^\=]+\=/)).forEach(t=>{const e=t.match(/^exports\.([^(\ |\=)]*)/);h.push({name:"Gulp "+e[1]+" script",command:"gulp "+e[1]}),n(11,h)}))})})})})}),o.fread(c+"/.git/HEAD",(t,e)=>{e||(n(10,$=!0),n(12,x=""))}))}function v(){o.fwrite("~/.currentprojectdir",c,t=>{t&&console.log(t)})}function C(){var t,e=[];e[0]=r,e[1]=c,i.push(e),t=i.map(t=>t[0]+"|"+t[1]).join("\n"),o.fwrite("~/.projects",t,t=>{t&&console.log(t)}),o.execute('touch "'+c+'/.startproject"; chmod a+x "'+c+'/.startproject";',(t,e)=>{})}function k(t){o.run("pushd .; cd '"+c+"'; "+t.command+"; popd;")}w=()=>{o.fread("~/.fig/apps/projectmanager/projectmanager.json",(t,e)=>{console.log(e),console.log(t),e||(g=JSON.parse(t),n(4,a=g.expert))}),o.fread("~/.projects",(t,e)=>{if(e)console.log("Error:  "+e),n(1,i=""),n(0,r="");else{n(1,i=t.split("\n"));var c=!1;i.forEach((t,e,n)=>{""!==t?n[e]=t.split("|"):c=!0}),c&&i.pop()}o.fread("~/.currentprojectdir",(t,e)=>{e?console.log("Error:  "+e):b(t)})})},E().$$.on_mount.push(w);return t.$$set=t=>{"fig"in t&&n(29,o=t.fig)},[r,i,u,s,a,l,f,p,d,m,$,h,x,function(){o.reposition("7")},j,function(){o.run("cd '"+c+"'"),v()},function(){var t,e;t=t=>{b(t),null===r&&(n(0,r="New"),c=t,n(2,u=!0),n(3,s=C)),v()},e=o.env.PWD,o.fread("~/.path",(n,r)=>{e=r?o.env.PWD:n.trim(),t(e)})},function(){o.run('pushd .; cd "'+c+'"; ./.startproject "'+c+'"; popd;')},function(){o.execute('$EDITOR "'+c+'/.startproject"',(t,e)=>{})},function(){o.execute('$EDITOR "'+c+'"',(t,e)=>{})},function(){o.execute('$EDITOR "'+c+'/maskfile.md"',(t,e)=>{})},function(){o.execute('$EDITOR "'+c+'/maidfile.md"',(t,e)=>{})},function(){o.execute('$EDITOR "'+c+'/package.json"',(t,e)=>{})},function(){o.execute('$EDITOR "'+c+'/Gruntfile.js"',(t,e)=>{})},function(){o.execute('$EDITOR "'+c+'/gulpfile.js"',(t,e)=>{})},k,function(){o.fwrite("~/.fig/apps/projectmanager/projectmanager.json",JSON.stringify({expert:!a}),t=>{}),n(4,a=!a)},function(){o.run("pushd .; cd '"+c+"'; git status; popd;")},function(){o.run("pushd .; cd '"+c+"'; git commit -am '"+x+"'; popd;")},o,t=>{j(t.detail)},t=>{k(t)},function(){x=this.value,n(12,x)},function(){r=this.value,n(0,r)},()=>{n(2,u=!1),s()}]}class Ot extends K{constructor(t){super(),B(this,t,Gt,St,c,{fig:29},[-1,-1])}}fig.init=(t,e)=>{fig.title="Project Manager",fig.icon="fig://${fig.env.PWD}";new Ot({target:document.body,props:{fig:fig}})}}();
//# sourceMappingURL=bundle.js.map
