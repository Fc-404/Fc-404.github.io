import{d as p,t as w,j as C,I as x,E as M,k as H,dB as W,_ as l,ai as B}from"./index-9c296427.js";import{m as E}from"./AntdIcon-79358965.js";const I=p({compatConfig:{MODE:3},name:"ResizeObserver",props:{disabled:Boolean,onResize:Function},emits:["resize"],setup(i,v){let{slots:c}=v;const n=w({width:0,height:0,offsetHeight:0,offsetWidth:0});let h=null,s=null;const r=()=>{s&&(s.disconnect(),s=null)},b=e=>{const{onResize:t}=i,o=e[0].target,{width:O,height:R}=o.getBoundingClientRect(),{offsetWidth:a,offsetHeight:f}=o,g=Math.floor(O),u=Math.floor(R);if(n.width!==g||n.height!==u||n.offsetWidth!==a||n.offsetHeight!==f){const m={width:g,height:u,offsetWidth:a,offsetHeight:f};l(n,m),t&&Promise.resolve().then(()=>{t(l(l({},m),{offsetWidth:a,offsetHeight:f}),o)})}},z=B(),d=()=>{const{disabled:e}=i;if(e){r();return}const t=W(z);t!==h&&(r(),h=t),!s&&t&&(s=new E(b),s.observe(t))};return C(()=>{d()}),x(()=>{d()}),M(()=>{r()}),H(()=>i.disabled,()=>{d()},{flush:"post"}),()=>{var e;return(e=c.default)===null||e===void 0?void 0:e.call(c)[0]}}});export{I as R};