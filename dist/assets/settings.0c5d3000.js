var b=Object.defineProperty,h=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var m=(t,e,a)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))x.call(e,a)&&m(t,a,e[a]);if(g)for(var a of g(e))C.call(e,a)&&m(t,a,e[a]);return t},i=(t,e)=>h(t,k(e));import{g as S,h as j,r as y,u as E,R as l,l as F,at as B,F as G,G as I}from"./vendor.24a792c2.js";import{b as p}from"./index.esm.284dc1ce.js";import{F as R}from"./form-item.41e8745b.js";import"./index.8daf12b9.js";import"./index.026d1863.js";const W=()=>{const t=S(),{t:e}=j(),[a,c]=y.exports.useState([]),{pathname:v}=E(),d=()=>{p.get("settings",{params:{group:parseInt(v.split("/").pop()||"0")}}).then(s=>{const r=s.data;r.code!==200?t({title:e(r.message),status:"error",duration:3e3,isClosable:!0}):c(r.data)})};return y.exports.useEffect(()=>{d()},[]),l.createElement(F,{w:"full"},l.createElement(B,{minChildWidth:"400px",spacing:"2"},a.map(s=>{var r,f;return l.createElement(R,{key:s.key,type:s.type,label:s.key,value:s.type==="bool"?s.value==="true":s.value,readOnly:s.group===2,values:(r=s.values)==null?void 0:r.split(","),description:`${e(s.description)}(${e(s.group===0?"public":s.group===1?"private":"readonly")})`,onChange:n=>{c(a.map(o=>o.key===s.key?s.type==="number"?i(u({},o),{value:n.toString()}):s.type!=="bool"?i(u({},o),{value:n}):i(u({},o),{value:s.value==="true"?"false":"true"}):o))},onDelete:s.version===((f=a.find(n=>n.key==="version"))==null?void 0:f.value)?void 0:()=>{p.delete("setting",{params:{key:s.key}}).then(n=>{const o=n.data;o.code!==200?t({title:e(o.message),status:"error",duration:3e3,isClosable:!0}):(t({title:e(o.message),status:"success",duration:3e3,isClosable:!0}),d())})}})})),l.createElement(G,{mt:"2",justify:"end"},l.createElement(I,{onClick:()=>{p.post("settings",a).then(s=>{const r=s.data;r.code!==200?t({title:e(r.message),status:"error",duration:3e3,isClosable:!0}):t({title:e(r.message),status:"success",duration:3e3,isClosable:!0})})}},e("Save"))))};export{W as default};
