!function(){var e=document.querySelector("body"),t=document.querySelector("#theme-switch-selector"),s=document.querySelector(".page-footer");t.addEventListener("change",(function(){e.classList.contains("dark-theme")?(e.classList.remove("dark-theme"),e.classList.add("light-theme"),s.classList.remove("dark-theme")):(e.classList.remove("light-theme"),e.classList.add("dark-theme"),s.classList.add("dark-theme"))}));var a=localStorage.getItem("theme");t.addEventListener("change",(function(t){localStorage.setItem("theme",e.classList)})),a&&(e.classList=a),"dark-theme"===a&&t.setAttribute("checked",!0),"dark-theme"===a&&s.classList.add("dark-theme")}();
//# sourceMappingURL=library.174d14f0.js.map
