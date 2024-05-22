import{D as E,bl as J,C as W,Z as X,X as Z,b1 as K,d as Q,s as L,t as Y,e as F,k as H,j as k,I as ee,E as te,a0 as ne,g as oe,J as se,b as y,f as b,_ as U,ai as ie}from"./index-9c296427.js";import{R as ae}from"./index-ca221d13.js";function _(e){let n;const t=r=>()=>{n=null,e(...r)},o=function(){if(n==null){for(var r=arguments.length,p=new Array(r),l=0;l<r;l++)p[l]=arguments[l];n=E(t(p))}};return o.cancel=()=>{E.cancel(n),n=null},o}function S(e){return e!==window?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function $(e,n,t){if(t!==void 0&&n.top>e.top-t)return`${t+n.top}px`}function j(e,n,t){if(t!==void 0&&n.bottom<e.bottom+t){const o=window.innerHeight-n.bottom;return`${t+o}px`}}const O=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"];let w=[];function D(e,n){if(!e)return;let t=w.find(o=>o.target===e);t?t.affixList.push(n):(t={target:e,affixList:[n],eventHandlers:{}},w.push(t),O.forEach(o=>{t.eventHandlers[o]=J(e,o,()=>{t.affixList.forEach(r=>{const{lazyUpdatePosition:p}=r.exposed;p()},(o==="touchstart"||o==="touchmove")&&W?{passive:!0}:!1)})}))}function M(e){const n=w.find(t=>{const o=t.affixList.some(r=>r===e);return o&&(t.affixList=t.affixList.filter(r=>r!==e)),o});n&&n.affixList.length===0&&(w=w.filter(t=>t!==n),O.forEach(t=>{const o=n.eventHandlers[t];o&&o.remove&&o.remove()}))}const fe=e=>{const{componentCls:n}=e;return{[n]:{position:"fixed",zIndex:e.zIndexPopup}}},re=X("Affix",e=>{const n=Z(e,{zIndexPopup:e.zIndexBase+10});return[fe(n)]});function le(){return typeof window<"u"?window:null}var x;(function(e){e[e.None=0]="None",e[e.Prepare=1]="Prepare"})(x||(x={}));const de=()=>({offsetTop:Number,offsetBottom:Number,target:{type:Function,default:le},prefixCls:String,onChange:Function,onTestUpdatePosition:Function}),ue=Q({compatConfig:{MODE:3},name:"AAffix",inheritAttrs:!1,props:de(),setup(e,n){let{slots:t,emit:o,expose:r,attrs:p}=n;const l=L(),P=L(),d=Y({affixStyle:void 0,placeholderStyle:void 0,status:x.None,lastAffix:!1,prevTarget:null,timeout:null}),T=ie(),C=F(()=>e.offsetBottom===void 0&&e.offsetTop===void 0?0:e.offsetTop),A=F(()=>e.offsetBottom),G=()=>{const{status:i,lastAffix:a}=d,{target:u}=e;if(i!==x.Prepare||!P.value||!l.value||!u)return;const c=u();if(!c)return;const f={status:x.None},s=S(l.value);if(s.top===0&&s.left===0&&s.width===0&&s.height===0)return;const m=S(c),N=$(s,m,C.value),z=j(s,m,A.value);if(!(s.top===0&&s.left===0&&s.width===0&&s.height===0)){if(N!==void 0){const g=`${s.width}px`,v=`${s.height}px`;f.affixStyle={position:"fixed",top:N,width:g,height:v},f.placeholderStyle={width:g,height:v}}else if(z!==void 0){const g=`${s.width}px`,v=`${s.height}px`;f.affixStyle={position:"fixed",bottom:z,width:g,height:v},f.placeholderStyle={width:g,height:v}}f.lastAffix=!!f.affixStyle,a!==f.lastAffix&&o("change",f.lastAffix),U(d,f)}},I=()=>{U(d,{status:x.Prepare,affixStyle:void 0,placeholderStyle:void 0})},h=_(()=>{I()}),R=_(()=>{const{target:i}=e,{affixStyle:a}=d;if(i&&a){const u=i();if(u&&l.value){const c=S(u),f=S(l.value),s=$(f,c,C.value),m=j(f,c,A.value);if(s!==void 0&&a.top===s||m!==void 0&&a.bottom===m)return}}I()});r({updatePosition:h,lazyUpdatePosition:R}),H(()=>e.target,i=>{const a=(i==null?void 0:i())||null;d.prevTarget!==a&&(M(T),a&&(D(a,T),h()),d.prevTarget=a)}),H(()=>[e.offsetTop,e.offsetBottom],h),k(()=>{const{target:i}=e;i&&(d.timeout=setTimeout(()=>{D(i(),T),h()}))}),ee(()=>{G()}),te(()=>{clearTimeout(d.timeout),M(T),h.cancel(),R.cancel()});const{prefixCls:B}=ne("affix",e),[V,q]=re(B);return()=>{var i;const{affixStyle:a,placeholderStyle:u,status:c}=d,f=oe({[B.value]:a,[q.value]:!0}),s=se(e,["prefixCls","offsetTop","offsetBottom","target","onChange","onTestUpdatePosition"]);return V(y(ae,{onResize:h},{default:()=>[y("div",b(b(b({},s),p),{},{ref:l,"data-measure-status":c}),[a&&y("div",{style:u,"aria-hidden":"true"},null),y("div",{class:f,ref:P,style:a},[(i=t.default)===null||i===void 0?void 0:i.call(t)])])]}))}}}),he=K(ue);export{he as _};
