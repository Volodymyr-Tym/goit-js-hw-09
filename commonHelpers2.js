import"./assets/modulepreload-polyfill-3cfb730f.js";const a={email:"",message:""},e=document.querySelector(".feedback-form"),r=t=>{const l=t.target.name;let o=t.target.value;l==="email"?a.email=o.trim():a.message=o.trim();const m=JSON.stringify(a);localStorage.setItem("feedback-form-state",m)},s=t=>{t.preventDefault(),e.email.value.trim()===""||e.message.value.trim()===""?alert("Fill please all fields"):(console.log(a),localStorage.removeItem("feedback-form-state"),e.reset())};e.addEventListener("input",r);e.addEventListener("submit",s);
//# sourceMappingURL=commonHelpers2.js.map