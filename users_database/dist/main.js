(()=>{"use strict";function e(e){const a=document.createElement("div");a.classList.add("modal-wrapper");const d=document.createElement("div");d.classList.add("modal");const l=document.createElement("div");l.innerHTML=`Delet user with id: ${e}?`,l.classList.add("modal-text");const n=document.createElement("div");n.classList.add("modal-btns");const c=document.createElement("button");c.innerHTML="Yes",c.classList.add("modal-ok-btn"),c.onclick=()=>{!function(e){let a=JSON.parse(localStorage.getItem("tempdata"));a=a.filter((t=>t.id!==e)),localStorage.setItem("tempdata",JSON.stringify(a)),t(a)}(e),a.remove()};const s=document.createElement("button");s.onclick=()=>{a.remove()},s.innerHTML="No",s.classList.add("modal-close-btn"),n.appendChild(c),n.appendChild(s),d.appendChild(l),d.appendChild(n),a.appendChild(d),document.querySelector('div[class="container"]').appendChild(a)}function t(t){const a=document.querySelector('div[class="employees-data"]');a.innerHTML="",t||(t=JSON.parse(localStorage.getItem("tempdata"))),t.map(((t,d)=>{a.appendChild(function(t,a,d,l,n,c,s,o,i){let p=a,m=!1;const r=document.createElement("div");r.classList.add("employee-line");const u=document.createElement("div");u.classList.add("employee-number","employee-cell"),u.innerHTML=t;const y=document.createElement("div");y.classList.add("employee-id","employee-cell");const L=document.createElement("input");L.type="text",L.classList.add("data-input"),L.value=a,L.disabled=!0,y.appendChild(L);const v=document.createElement("div");v.classList.add("employee-age","employee-cell");const g=document.createElement("input");g.type="text",g.classList.add("data-input"),g.value=d,g.disabled=!0,v.appendChild(g);const h=document.createElement("div");h.classList.add("employee-fullname","employee-cell");const E=document.createElement("input");E.type="text",E.classList.add("data-input"),E.value=l,E.disabled=!0,h.appendChild(E);const C=document.createElement("div");C.classList.add("employee-gender","employee-cell");const S=document.createElement("input");S.type="text",S.classList.add("data-input"),S.value=n,S.disabled=!0,C.appendChild(S);const b=document.createElement("div");b.classList.add("employee-company","employee-cell");const f=document.createElement("input");f.type="text",f.classList.add("data-input"),f.value=c,f.disabled=!0,b.appendChild(f);const I=document.createElement("div");I.classList.add("employee-email","employee-cell");const x=document.createElement("input");x.type="text",x.classList.add("data-input"),x.value=s,x.disabled=!0,I.appendChild(x);const O=document.createElement("div");O.classList.add("employee-phone","employee-cell");const N=document.createElement("input");N.type="text",N.classList.add("data-input"),N.value=o,N.disabled=!0,O.appendChild(N);const J=document.createElement("div");J.classList.add("employee-address","employee-cell");const H=document.createElement("input");H.type="text",H.classList.add("data-input"),H.value=i,H.disabled=!0,J.appendChild(H);const M=document.createElement("div");M.classList.add("employee-actions","employee-cell");const T=document.createElement("button");T.classList.add("edit-btn"),T.innerHTML="Edit";const k=document.createElement("button");return k.classList.add("delete-btn"),k.innerHTML="X",M.appendChild(T),M.appendChild(k),T.onclick=()=>{m=!m,Array.from(r.querySelectorAll("input")).map((e=>{if(m?(e.disabled=!1,T.innerHTML="OK"):(e.disabled=!0,T.innerHTML="Edit"),!m){const e=JSON.parse(localStorage.getItem("tempdata")).filter((e=>e.id!==p));p=L.value,e.unshift({id:L.value,age:g.value,name:E.value,gender:S.value,company:f.value,email:x.value,phone:N.value,address:H.value}),localStorage.setItem("tempdata",JSON.stringify(e))}}))},k.onclick=()=>{e(L.value)},r.appendChild(u),r.appendChild(y),r.appendChild(v),r.appendChild(h),r.appendChild(C),r.appendChild(b),r.appendChild(I),r.appendChild(O),r.appendChild(J),r.appendChild(M),r}(d+1,t.id,t.age,t.name,t.gender,t.company,t.email,t.phone,t.address))}))}JSON.parse(localStorage.getItem("data"))||localStorage.setItem("data",JSON.stringify([])),localStorage.setItem("tempdata",localStorage.getItem("data")),document.querySelector('input[class="search-input"]').oninput=e=>{const a=new RegExp(`${e.target.value}`,"ig"),d=JSON.parse(localStorage.getItem("data")).filter((e=>{for(let t in e)if(a.test(e[t]))return!0}));e.target.value&&t(d)},document.querySelector('button[class="add-btn"]').onclick=()=>{document.querySelector('div[class="employees-data"]').appendChild(function(t){let a=!0;const d=document.createElement("div");d.classList.add("employee-line");const l=document.createElement("div");l.classList.add("employee-number","employee-cell"),l.innerHTML=t;const n=document.createElement("div");n.classList.add("employee-id","employee-cell");const c=document.createElement("input");c.type="text",c.classList.add("data-input"),n.appendChild(c);const s=document.createElement("div");s.classList.add("employee-age","employee-cell");const o=document.createElement("input");o.type="text",o.classList.add("data-input"),s.appendChild(o);const i=document.createElement("div");i.classList.add("employee-fullname","employee-cell");const p=document.createElement("input");p.type="text",p.classList.add("data-input"),i.appendChild(p);const m=document.createElement("div");m.classList.add("employee-gender","employee-cell");const r=document.createElement("input");r.type="text",r.classList.add("data-input"),m.appendChild(r);const u=document.createElement("div");u.classList.add("employee-company","employee-cell");const y=document.createElement("input");y.type="text",y.classList.add("data-input"),u.appendChild(y);const L=document.createElement("div");L.classList.add("employee-email","employee-cell");const v=document.createElement("input");v.type="text",v.classList.add("data-input"),L.appendChild(v);const g=document.createElement("div");g.classList.add("employee-phone","employee-cell");const h=document.createElement("input");h.type="text",h.classList.add("data-input"),g.appendChild(h);const E=document.createElement("div");E.classList.add("employee-address","employee-cell");const C=document.createElement("input");C.type="text",C.classList.add("data-input"),E.appendChild(C);const S=document.createElement("div");S.classList.add("employee-actions","employee-cell");const b=document.createElement("button");b.classList.add("edit-btn"),b.innerHTML="OK";const f=document.createElement("button");return f.classList.add("delete-btn"),f.innerHTML="X",S.appendChild(b),S.appendChild(f),b.onclick=()=>{a=!a,Array.from(d.querySelectorAll("input")).map((e=>{if(a?(e.disabled=!1,b.innerHTML="OK"):(e.disabled=!0,b.innerHTML="Edit"),!a){const e=JSON.parse(localStorage.getItem("tempdata")).filter((e=>e.id!==c.value));e.push({id:c.value,age:o.value,name:p.value,gender:r.value,company:y.value,email:v.value,phone:h.value,address:C.value}),localStorage.setItem("tempdata",JSON.stringify(e))}}))},f.onclick=()=>{e(c.value)},d.appendChild(l),d.appendChild(n),d.appendChild(s),d.appendChild(i),d.appendChild(m),d.appendChild(u),d.appendChild(L),d.appendChild(g),d.appendChild(E),d.appendChild(S),d}(JSON.parse(localStorage.getItem("data")).length+1))};const a=document.querySelector('button[class="upload-btn"]'),d=document.getElementById("upload-input");a.onclick=()=>{d.click()},d.onchange=e=>{let a=JSON.parse(localStorage.getItem("data"));const d=new FileReader;d.readAsBinaryString(e.target.files[0]),d.onload=()=>{const e=JSON.parse(d.result);a=a.concat(e),localStorage.setItem("tempdata",JSON.stringify(a)),t(a)}},document.querySelector('button[class="export-btn"]').onclick=()=>{const e=localStorage.getItem("data"),t=document.createElement("a");t.download="export.json",t.href=`data:application/json;;charset=utf-8,${encodeURIComponent(e)}`,document.querySelector("body").appendChild(t),t.click(),t.remove()},Array.from(document.querySelector('div[class="table-header"]').querySelectorAll("div")).map((e=>{e.onclick=()=>{!function(e){let a=JSON.parse(localStorage.getItem("tempdata"));const d=e.replace(/\s/g,"").toLowerCase();let l=document.getElementById(d).classList[1];a=a.sort((function(e,t){return e[d]>t[d]?"asc"===document.getElementById(d).classList[1]?-1:1:"asc"===document.getElementById(d).classList[1]?1:-1})),"asc"===l?(document.getElementById(d).classList.remove("asc"),document.getElementById(d).classList.add("desc")):(document.getElementById(d).classList.remove("desc"),document.getElementById(d).classList.add("asc")),localStorage.setItem("tempdata",JSON.stringify(a)),t(a)}(e.innerHTML)}})),document.querySelector('button[class="submit-btn"]').onclick=()=>{localStorage.setItem("data",localStorage.getItem("tempdata")),t()},t()})();