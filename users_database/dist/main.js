(()=>{"use strict";function e(e){const a=document.createElement("div");a.classList.add("modal-wrapper");const l=document.createElement("div");l.classList.add("modal");const d=document.createElement("div");d.innerHTML=`Delet user with id: ${e}?`,d.classList.add("modal-text");const n=document.createElement("div");n.classList.add("modal-btns");const c=document.createElement("button");c.innerHTML="Yes",c.classList.add("modal-ok-btn"),c.onclick=()=>{!function(e){let a=JSON.parse(localStorage.getItem("tempdata"));a=a.filter((t=>t.id!==e)),localStorage.setItem("tempdata",JSON.stringify(a)),t(a)}(e),a.remove()};const s=document.createElement("button");s.onclick=()=>{a.remove()},s.innerHTML="No",s.classList.add("modal-close-btn"),n.appendChild(c),n.appendChild(s),l.appendChild(d),l.appendChild(n),a.appendChild(l),document.querySelector('div[class="container"]').appendChild(a)}function t(t){const a=document.querySelector('div[class="employees-data"]');a.innerHTML="",t||(t=JSON.parse(localStorage.getItem("tempdata"))),t.map(((t,l)=>{a.appendChild(function(t,a,l,d,n,c,s,o,i){let p=a,m=!1;const r=document.createElement("div");r.classList.add("employee-line");const u=document.createElement("div");u.classList.add("employee-number","employee-cell"),u.innerHTML=t;const y=document.createElement("div");y.classList.add("employee-id","employee-cell");const h=document.createElement("input");h.type="text",h.classList.add("data-input"),h.value=a,h.disabled=!0,y.appendChild(h);const L=document.createElement("div");L.classList.add("employee-age","employee-cell");const g=document.createElement("input");g.type="text",g.classList.add("data-input"),g.value=l,g.disabled=!0,L.appendChild(g);const v=document.createElement("div");v.classList.add("employee-fullname","employee-cell");const E=document.createElement("input");E.type="text",E.classList.add("data-input"),E.value=d,E.disabled=!0,v.appendChild(E);const S=document.createElement("div");S.classList.add("employee-gender","employee-cell");const C=document.createElement("input");C.type="text",C.classList.add("data-input"),C.value=n,C.disabled=!0,S.appendChild(C);const b=document.createElement("div");b.classList.add("employee-company","employee-cell");const f=document.createElement("input");f.type="text",f.classList.add("data-input"),f.value=c,f.disabled=!0,b.appendChild(f);const I=document.createElement("div");I.classList.add("employee-email","employee-cell");const x=document.createElement("input");x.type="text",x.classList.add("data-input"),x.value=s,x.disabled=!0,I.appendChild(x);const O=document.createElement("div");O.classList.add("employee-phone","employee-cell");const N=document.createElement("input");N.type="text",N.classList.add("data-input"),N.value=o,N.disabled=!0,O.appendChild(N);const J=document.createElement("div");J.classList.add("employee-address","employee-cell");const T=document.createElement("input");T.type="text",T.classList.add("data-input"),T.value=i,T.disabled=!0,J.appendChild(T);const q=document.createElement("div");q.classList.add("employee-actions","employee-cell");const H=document.createElement("button");H.classList.add("edit-btn"),H.innerHTML="Edit";const M=document.createElement("button");return M.classList.add("delete-btn"),M.innerHTML="X",q.appendChild(H),q.appendChild(M),H.onclick=()=>{m=!m,Array.from(r.querySelectorAll("input")).map((e=>{if(m?(e.disabled=!1,H.innerHTML="OK"):(e.disabled=!0,H.innerHTML="Edit"),!m){const e=JSON.parse(localStorage.getItem("tempdata")).filter((e=>e.id!==p));p=h.value,e.unshift({id:h.value,age:g.value,name:E.value,gender:C.value,company:f.value,email:x.value,phone:N.value,address:T.value}),localStorage.setItem("tempdata",JSON.stringify(e))}}))},M.onclick=()=>{e(h.value)},r.appendChild(u),r.appendChild(y),r.appendChild(L),r.appendChild(v),r.appendChild(S),r.appendChild(b),r.appendChild(I),r.appendChild(O),r.appendChild(J),r.appendChild(q),r}(l+1,t.id,t.age,t.name,t.gender,t.company,t.email,t.phone,t.address))}))}JSON.parse(localStorage.getItem("data"))||localStorage.setItem("data",JSON.stringify([])),localStorage.setItem("tempdata",localStorage.getItem("data")),document.querySelector('input[class="search-input"]').oninput=e=>{const a=new RegExp(`${e.target.value}`,"ig"),l=JSON.parse(localStorage.getItem("tempdata")).filter((e=>{for(let t in e)if(a.test(e[t]))return!0}));e.target.value&&t(l)},document.querySelector('button[class="add-btn"]').onclick=()=>{document.querySelector('div[class="employees-data"]').appendChild(function(t){let a=!0;const l=document.createElement("div");l.classList.add("employee-line");const d=document.createElement("div");d.classList.add("employee-number","employee-cell"),d.innerHTML=t;const n=document.createElement("div");n.classList.add("employee-id","employee-cell");const c=document.createElement("input");c.type="text",c.classList.add("data-input"),n.appendChild(c);const s=document.createElement("div");s.classList.add("employee-age","employee-cell");const o=document.createElement("input");o.type="text",o.classList.add("data-input"),s.appendChild(o);const i=document.createElement("div");i.classList.add("employee-fullname","employee-cell");const p=document.createElement("input");p.type="text",p.classList.add("data-input"),i.appendChild(p);const m=document.createElement("div");m.classList.add("employee-gender","employee-cell");const r=document.createElement("input");r.type="text",r.classList.add("data-input"),m.appendChild(r);const u=document.createElement("div");u.classList.add("employee-company","employee-cell");const y=document.createElement("input");y.type="text",y.classList.add("data-input"),u.appendChild(y);const h=document.createElement("div");h.classList.add("employee-email","employee-cell");const L=document.createElement("input");L.type="text",L.classList.add("data-input"),h.appendChild(L);const g=document.createElement("div");g.classList.add("employee-phone","employee-cell");const v=document.createElement("input");v.type="text",v.classList.add("data-input"),g.appendChild(v);const E=document.createElement("div");E.classList.add("employee-address","employee-cell");const S=document.createElement("input");S.type="text",S.classList.add("data-input"),E.appendChild(S);const C=document.createElement("div");C.classList.add("employee-actions","employee-cell");const b=document.createElement("button");b.classList.add("edit-btn"),b.innerHTML="OK";const f=document.createElement("button");return f.classList.add("delete-btn"),f.innerHTML="X",C.appendChild(b),C.appendChild(f),b.onclick=()=>{a=!a,Array.from(l.querySelectorAll("input")).map((e=>{if(a?(e.disabled=!1,b.innerHTML="OK"):(e.disabled=!0,b.innerHTML="Edit"),!a){const e=JSON.parse(localStorage.getItem("tempdata")).filter((e=>e.id!==c.value));e.push({id:c.value,age:o.value,name:p.value,gender:r.value,company:y.value,email:L.value,phone:v.value,address:S.value}),localStorage.setItem("tempdata",JSON.stringify(e))}}))},f.onclick=()=>{e(c.value)},l.appendChild(d),l.appendChild(n),l.appendChild(s),l.appendChild(i),l.appendChild(m),l.appendChild(u),l.appendChild(h),l.appendChild(g),l.appendChild(E),l.appendChild(C),l}(JSON.parse(localStorage.getItem("tempdata")).length+1))};const a=document.querySelector('button[class="upload-btn"]'),l=document.getElementById("upload-input");a.onclick=()=>{l.click()},l.onchange=e=>{let a=JSON.parse(localStorage.getItem("tempdata"));const l=new FileReader;l.readAsBinaryString(e.target.files[0]),l.onload=()=>{const e=JSON.parse(l.result);a=a.concat(e),localStorage.setItem("tempdata",JSON.stringify(a)),t(a)}},document.querySelector('button[class="export-btn"]').onclick=()=>{const e=localStorage.getItem("tempdata"),t=document.createElement("a");t.download="export.json",t.href=`data:application/json;;charset=utf-8,${encodeURIComponent(e)}`,document.querySelector("body").appendChild(t),t.click(),t.remove()},Array.from(document.querySelector('div[class="table-header"]').querySelectorAll("div")).map((e=>{e.onclick=()=>{!function(e){let a=JSON.parse(localStorage.getItem("tempdata"));const l=e.replace(/\s/g,"").toLowerCase();let d=document.getElementById(l).classList[1];a=a.sort((function(e,t){return e[l]>t[l]?"asc"===document.getElementById(l).classList[1]?-1:1:"asc"===document.getElementById(l).classList[1]?1:-1})),"asc"===d?(document.getElementById(l).classList.remove("asc"),document.getElementById(l).classList.add("desc")):(document.getElementById(l).classList.remove("desc"),document.getElementById(l).classList.add("asc")),localStorage.setItem("tempdata",JSON.stringify(a)),t(a)}(e.innerHTML)}})),document.querySelector('button[class="submit-btn"]').onclick=()=>{!function(){const e=document.querySelector('div[class="submit-alert"]');e.style.height="3rem",e.style.color="#000",e.style.border="2px solid rgb(90, 145, 64)";const a=document.querySelector('div[class="submit-alert-text"]');a.style.height="1.1rem",setTimeout((()=>{e.style.height="0",e.style.color="#fff",e.style.border="0",a.style.height="0"}),3e3),localStorage.setItem("data",localStorage.getItem("tempdata")),t()}()},t()})();