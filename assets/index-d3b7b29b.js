import{Z as w,X as C,bo as T,_ as c,W as z,b1 as P,d as _,v as W,r as I,aN as A,a0 as B,e as m,g as D,b as $,f as b,a3 as E,J as H,bq as S,aY as y,F as k,A as N}from"./index-d5885ca1.js";import{b as G,P as R,t as L,_ as V,a as j}from"./AntdIcon-94f3e6cb.js";const O=t=>{const{componentCls:e,popoverBg:i,popoverColor:o,width:n,fontWeightStrong:g,popoverPadding:d,boxShadowSecondary:p,colorTextHeading:u,borderRadiusLG:h,zIndexPopup:v,marginXS:f,colorBgElevated:a}=t;return[{[e]:c(c({},z(t)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:v,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--antd-arrow-background-color":a,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${e}-content`]:{position:"relative"},[`${e}-inner`]:{backgroundColor:i,backgroundClip:"padding-box",borderRadius:h,boxShadow:p,padding:d},[`${e}-title`]:{minWidth:n,marginBottom:f,color:u,fontWeight:g},[`${e}-inner-content`]:{color:o}})},G(t,{colorBg:"var(--antd-arrow-background-color)"}),{[`${e}-pure`]:{position:"relative",maxWidth:"none",[`${e}-content`]:{display:"inline-block"}}}]},X=t=>{const{componentCls:e}=t;return{[e]:R.map(i=>{const o=t[`${i}-6`];return{[`&${e}-${i}`]:{"--antd-arrow-background-color":o,[`${e}-inner`]:{backgroundColor:o},[`${e}-arrow`]:{background:"transparent"}}}})}},F=t=>{const{componentCls:e,lineWidth:i,lineType:o,colorSplit:n,paddingSM:g,controlHeight:d,fontSize:p,lineHeight:u,padding:h}=t,v=d-Math.round(p*u),f=v/2,a=v/2-i,r=h;return{[e]:{[`${e}-inner`]:{padding:0},[`${e}-title`]:{margin:0,padding:`${f}px ${r}px ${a}px`,borderBottom:`${i}px ${o} ${n}`},[`${e}-inner-content`]:{padding:`${g}px ${r}px`}}}},Y=w("Popover",t=>{const{colorBgElevated:e,colorText:i,wireframe:o}=t,n=C(t,{popoverBg:e,popoverColor:i,popoverPadding:12});return[O(n),X(n),o&&F(n),T(n,"zoom-big")]},t=>{let{zIndexPopupBase:e}=t;return{zIndexPopup:e+30,width:177}}),Z=()=>c(c({},j()),{content:S(),title:S()}),q=_({compatConfig:{MODE:3},name:"APopover",inheritAttrs:!1,props:W(Z(),c(c({},L()),{trigger:"hover",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1})),setup(t,e){let{expose:i,slots:o,attrs:n}=e;const g=I();A(t.visible===void 0),i({getPopupDomNode:()=>{var a,r;return(r=(a=g.value)===null||a===void 0?void 0:a.getPopupDomNode)===null||r===void 0?void 0:r.call(a)}});const{prefixCls:d,configProvider:p}=B("popover",t),[u,h]=Y(d),v=m(()=>p.getPrefixCls()),f=()=>{var a,r;const{title:l=y((a=o.title)===null||a===void 0?void 0:a.call(o)),content:x=y((r=o.content)===null||r===void 0?void 0:r.call(o))}=t,s=!!(Array.isArray(l)?l.length:l),M=!!(Array.isArray(x)?x.length:l);return!s&&!M?null:$(k,null,[s&&$("div",{class:`${d.value}-title`},[l]),$("div",{class:`${d.value}-inner-content`},[x])])};return()=>{const a=D(t.overlayClassName,h.value);return u($(V,b(b(b({},H(t,["title","content"])),n),{},{prefixCls:d.value,ref:g,overlayClassName:a,transitionName:E(v.value,"zoom-big",t.transitionName),"data-popover-inject":!0}),{title:f,default:o.default}))}}}),ot=P(q),J=t=>{const{componentCls:e,sizePaddingEdgeHorizontal:i,colorSplit:o,lineWidth:n}=t;return{[e]:c(c({},z(t)),{borderBlockStart:`${n}px solid ${o}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${t.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${n}px solid ${o}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${t.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${e}-with-text`]:{display:"flex",alignItems:"center",margin:`${t.dividerHorizontalWithTextGutterMargin}px 0`,color:t.colorTextHeading,fontWeight:500,fontSize:t.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${o}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${n}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${e}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${e}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${e}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:o,borderStyle:"dashed",borderWidth:`${n}px 0 0`},[`&-horizontal${e}-with-text${e}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${e}-dashed`]:{borderInlineStartWidth:n,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${e}-with-text`]:{color:t.colorText,fontWeight:"normal",fontSize:t.fontSize},[`&-horizontal${e}-with-text-left${e}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${e}-inner-text`]:{paddingInlineStart:i}},[`&-horizontal${e}-with-text-right${e}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${e}-inner-text`]:{paddingInlineEnd:i}}})}},Q=w("Divider",t=>{const e=C(t,{dividerVerticalGutterMargin:t.marginXS,dividerHorizontalWithTextGutterMargin:t.margin,dividerHorizontalGutterMargin:t.marginLG});return[J(e)]},{sizePaddingEdgeHorizontal:0}),U=()=>({prefixCls:String,type:{type:String,default:"horizontal"},dashed:{type:Boolean,default:!1},orientation:{type:String,default:"center"},plain:{type:Boolean,default:!1},orientationMargin:[String,Number]}),K=_({name:"ADivider",inheritAttrs:!1,compatConfig:{MODE:3},props:U(),setup(t,e){let{slots:i,attrs:o}=e;const{prefixCls:n,direction:g}=B("divider",t),[d,p]=Q(n),u=m(()=>t.orientation==="left"&&t.orientationMargin!=null),h=m(()=>t.orientation==="right"&&t.orientationMargin!=null),v=m(()=>{const{type:r,dashed:l,plain:x}=t,s=n.value;return{[s]:!0,[p.value]:!!p.value,[`${s}-${r}`]:!0,[`${s}-dashed`]:!!l,[`${s}-plain`]:!!x,[`${s}-rtl`]:g.value==="rtl",[`${s}-no-default-orientation-margin-left`]:u.value,[`${s}-no-default-orientation-margin-right`]:h.value}}),f=m(()=>{const r=typeof t.orientationMargin=="number"?`${t.orientationMargin}px`:t.orientationMargin;return c(c({},u.value&&{marginLeft:r}),h.value&&{marginRight:r})}),a=m(()=>t.orientation.length>0?"-"+t.orientation:t.orientation);return()=>{var r;const l=N((r=i.default)===null||r===void 0?void 0:r.call(i));return d($("div",b(b({},o),{},{class:[v.value,l.length?`${n.value}-with-text ${n.value}-with-text${a.value}`:"",o.class],role:"separator"}),[l.length?$("span",{class:`${n.value}-inner-text`,style:f.value},[l]):null]))}}}),nt=P(K);export{nt as _,ot as a};