import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";function r(e,o){return new Promise((i,t)=>{o==="fulfilled"?setTimeout(()=>{i(e)},e):o==="rejected"&&setTimeout(()=>{t(e)},e)})}const n=document.querySelector(".form"),c=document.querySelector('[name="delay"]');n.addEventListener("submit",function(e){e.preventDefault();const o=parseInt(c.value),i=document.querySelector('input[name="state"]:checked').value;r(o,i).then(t=>{s.success({title:"Success",message:`✅ Fulfilled promise in ${t}ms`,position:"topRight"})}).catch(t=>{s.error({title:"Error",message:`❌ Rejected promise in ${t}ms`,position:"topRight"})})});
//# sourceMappingURL=commonHelpers2.js.map
