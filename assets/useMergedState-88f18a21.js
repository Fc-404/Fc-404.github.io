import{r as s,ah as c,x as o,k as d,G as g}from"./index-d5885ca1.js";function m(l,n){const{defaultValue:u,value:a=s()}=n||{};let t=typeof l=="function"?l():l;a.value!==void 0&&(t=c(a)),u!==void 0&&(t=typeof u=="function"?u():u);const r=s(t),f=s(t);o(()=>{let e=a.value!==void 0?a.value:r.value;n.postState&&(e=n.postState(e)),f.value=e});function i(e){const v=f.value;r.value=e,g(f.value)!==e&&n.onChange&&n.onChange(e,v)}return d(a,()=>{r.value=a.value}),[f,i]}export{m as u};
