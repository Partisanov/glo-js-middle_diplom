(()=>{"use strict";(()=>{const e=document.getElementsByTagName("body")[0],t=document.getElementById("btn-callback"),l=document.querySelector(".overlay"),s=document.querySelector(".header-modal");t.addEventListener("click",(()=>{l.style.display="block",s.style.display="block"})),e.addEventListener("click",(e=>{"block"===s.style.display&&(e.target.classList.contains("overlay")||e.target.classList.contains("header-modal__close"))&&(l.style.display="none",s.style.display="none")}))})()})();