import{aR as u,b8 as a}from"./index-9c296427.js";async function c(t,e,s){var r;const l=new Uint8Array(await e.arrayBuffer()),i=((r=new u().appendByteArray(l).end())==null?void 0:r.toString())??"",n=new FormData;n.append(t,e);const o=await a.post("/File/Upload",n,{headers:{"Custom-Filename":t.replace(/[^\x00-\x7F]/g,""),"Custom-Fileuid":i},onUploadProgress:s});return o.data.code==0?o.data.body:null}async function p(t){return await a.get("/File/GetInfo/"+t)??null}async function f(t){return await a.post("/File/Delete",{fid:t})}export{f as D,p as G,c as U};