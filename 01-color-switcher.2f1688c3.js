const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");let r=null;function l(){let t=`#${Math.floor(16777215*Math.random()).toString(16)}`;d.style.backgroundColor=t}t.addEventListener("click",(function(){t.setAttribute("disabled","disabled"),e.removeAttribute("disabled"),r=setInterval(l,1e3)})),e.addEventListener("click",(function(){e.setAttribute("disabled","disabled"),t.removeAttribute("disabled"),clearInterval(r)})),e.setAttribute("disabled","disabled");
//# sourceMappingURL=01-color-switcher.2f1688c3.js.map
