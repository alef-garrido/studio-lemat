(()=>{"use strict";const e=document.getElementById("navContainer"),t=document.getElementsByClassName("menuIcon");let n=[];Array.from(t,(e=>n.push(e))),e.addEventListener("click",(e=>{e.target.classList.contains("menuIcon")&&document.getElementById("menuContainer").classList.toggle("hide")}))})();