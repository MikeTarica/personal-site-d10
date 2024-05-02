!function(){"use strict";var e,t={883:function(e,t,n){n.d(t,{w:function(){return i}});class i{constructor(e){this.id=e,this.navParent=document.getElementById(this.id),this.isTouch=window.matchMedia("(pointer: coarse)").matches;const t=drupalSettings.TBMegaMenu[this.id];this.hasArrows="1"===t.arrows;const n=this.navParent.getAttribute("data-duration")?parseInt(this.navParent.getAttribute("data-duration")):0;this.mm_timeout=n?100+n:500}get isMobile(){return this.navParent.classList.contains("tbm--mobile")}keyDownHandler(e){const t=this,n=this.id;switch(e.keyCode){case 9:t.isMobile||i(e);break;case 13:document.activeElement.classList.contains("no-link")&&document.activeElement.click();break;case 27:t.closeMenu();break;case 37:e.preventDefault(),function(e){a()?l():o(e)}(e);break;case 38:e.preventDefault(),o(e);break;case 39:e.preventDefault(),function(e){a()?r():s(e)}(e);break;case 40:e.preventDefault(),s(e)}function i(e){e.preventDefault(),a()?e.shiftKey||38===e.keyCode||37===e.keyCode?l():r():e.shiftKey||38===e.keyCode||37===e.keyCode?Drupal.TBMegaMenu.getNextPrevElement("prev").focus():Drupal.TBMegaMenu.getNextPrevElement("next").focus()}function o(e){a()||i(e)}function s(e){a()?Drupal.TBMegaMenu.getNextPrevElement("next").focus():Drupal.TBMegaMenu.getNextPrevElement("next").closest(".tbm-item.level-1")!==document.activeElement.closest(".tbm-item.level-1")||i(e)}function a(){return Drupal.TBMegaMenu[n].topLevel.indexOf(document.activeElement)>-1}function r(){if(function(){const e=Drupal.TBMegaMenu[n].topLevel;return e.indexOf(document.activeElement)===e.length-1}())Drupal.TBMegaMenu.getNextPrevElement("next",!0).focus();else{const e=Drupal.TBMegaMenu[n].topLevel,t=e.indexOf(document.activeElement);t>-1&&e[t+1].focus()}}function l(){if(0!==Drupal.TBMegaMenu[n].topLevel.indexOf(document.activeElement)){const e=Drupal.TBMegaMenu[n].topLevel,t=e.indexOf(document.activeElement);t>-1&&e[t-1].focus()}else Drupal.TBMegaMenu.getNextPrevElement("prev",!0).focus()}}handleTouch(e){const t=this,n=e.querySelector(":scope > .tbm-link-container").querySelector(":scope > .tbm-link"),i=n.closest(".tbm-item");n.addEventListener("click",(e=>{if(!t.isMobile&&t.isTouch&&!t.hasArrows)if(n.classList.contains("tbm-clicked")){const e=n.getAttribute("href");e?window.location.href=e:(n.classList.remove("tbm-clicked"),t.hideMenu(i,t.mm_timeout))}else e.preventDefault(),t.navParent.querySelectorAll(".open").forEach((e=>{e.contains(n)||e.classList.remove("open")})),t.ariaCheck(),t.navParent.querySelectorAll(".tbm-clicked").forEach((e=>{e.classList.remove("tbm-clicked")})),n.classList.add("tbm-clicked"),t.showMenu(i,t.mm_timeout)})),document.addEventListener("click",(e=>{!e.target.closest(".tbm")&&t.navParent.classList.contains("tbm--mobile-show")&&t.closeMenu()})),document.addEventListener("focusin",(e=>{e.target.closest(".tbm")||t.closeMenu()}))}closeMenu(){this.navParent.classList.remove("tbm--mobile-show"),this.navParent.querySelector(".tbm-button").setAttribute("aria-expanded","false"),this.navParent.querySelectorAll(".open").forEach((e=>{e.classList.remove("open")})),this.navParent.querySelectorAll(".tbm-clicked").forEach((e=>{e.classList.remove("tbm-clicked")})),this.ariaCheck()}ariaCheck(){const e=(e,t)=>{e.querySelectorAll(".tbm-toggle, .tbm-submenu-toggle").forEach((e=>{e.setAttribute("aria-expanded",t)}))};document.addEventListener("click",(e=>{e.target.closest(".tbm")||this.isMobile||!this.hasArrows||this.closeMenu()})),this.navParent.querySelectorAll(".tbm-item").forEach((t=>{t.classList.contains("tbm-group")?t.closest(".open")?t.closest(".open")&&e(t,"true"):e(t,"false"):t.classList.contains("tbm-item--has-dropdown")||t.classList.contains("tbm-item--has-flyout")?t.classList.contains("open")?t.classList.contains("open")&&e(t,"true"):e(t,"false"):t.querySelectorAll(".tbm-toggle, .tbm-submenu-toggle").forEach((e=>{e.removeAttribute("aria-expanded")}))}))}showMenu(e,t){const n=this;e.classList.contains("level-1")?(e.classList.add("animating"),clearTimeout(e.animatingTimeout),e.animatingTimeout=setTimeout((function(){e.classList.remove("animating")}),t),clearTimeout(e.hoverTimeout),e.hoverTimeout=setTimeout((function(){e.classList.add("open"),n.ariaCheck()}),100)):(clearTimeout(e.hoverTimeout),e.hoverTimeout=setTimeout((function(){e.classList.add("open"),n.ariaCheck()}),100))}hideMenu(e,t){const n=this;e.querySelectorAll(".tbm-toggle, .tbm-submenu-toggle").forEach((e=>{e.setAttribute("aria-expanded",!1)})),e.classList.contains("level-1")?(e.classList.add("animating"),clearTimeout(e.animatingTimeout),e.animatingTimeout=setTimeout((function(){e.classList.remove("animating")}),t),clearTimeout(e.hoverTimeout),e.hoverTimeout=setTimeout((function(){e.classList.remove("open"),n.ariaCheck()}),100)):(clearTimeout(e.hoverTimeout),e.hoverTimeout=setTimeout((function(){e.classList.remove("open"),n.ariaCheck()}),100))}init(){const e=this;document.querySelectorAll(".tbm-button").forEach((t=>{t.addEventListener("click",(t=>{e.navParent.classList.contains("tbm--mobile-show")?e.closeMenu():(e.navParent.classList.add("tbm--mobile-show"),t.currentTarget.setAttribute("aria-expanded","true"))}))})),this.isTouch||(this.navParent.querySelectorAll(".tbm-item").forEach((t=>{t.addEventListener("mouseenter",(n=>{e.isMobile||e.hasArrows||e.showMenu(t,e.mm_timeout)})),t.addEventListener("mouseleave",(n=>{e.isMobile||e.hasArrows||e.hideMenu(t,e.mm_timeout)}))})),this.navParent.querySelectorAll(".tbm-toggle").forEach((t=>{t.addEventListener("focus",(t=>{if(!e.isMobile&&!e.hasArrows){const n=t.currentTarget.closest("li");e.showMenu(n,e.mm_timeout),document.addEventListener("focusin",(t=>{e.isMobile||e.hasArrows||t.target===n||n.contains(t.target)||(document.removeEventListener("focusin",t),e.hideMenu(n,e.mm_timeout))}))}}))}))),this.navParent.querySelectorAll(".tbm-item").forEach((t=>{t.querySelector(":scope > .tbm-submenu")&&e.handleTouch(t)})),this.navParent.querySelectorAll(".tbm-submenu-toggle, .tbm-link.no-link").forEach((t=>{t.addEventListener("click",(t=>{if(e.isMobile){const n=t.currentTarget.closest(".tbm-item");n.classList.contains("open")?e.hideMenu(n,e.mm_timeout):e.showMenu(n,e.mm_timeout)}if(!e.isMobile&&(!e.isTouch||e.hasArrows||!t.currentTarget.classList.contains("no-link"))){const n=t.currentTarget.closest(".tbm-item");if(n.classList.contains("open"))e.hideMenu(n,e.mm_timeout),n.querySelectorAll(".open").forEach((t=>{e.hideMenu(t,e.mm_timeout)}));else{e.showMenu(n,e.mm_timeout);let t=n.previousElementSibling;for(;t;)e.hideMenu(t,e.mm_timeout),t.querySelectorAll(".open").forEach((t=>{e.hideMenu(t,e.mm_timeout)})),t=t.previousElementSibling;let i=n.nextElementSibling;for(;i;)e.hideMenu(i,e.mm_timeout),i.querySelectorAll(".open").forEach((t=>{e.hideMenu(t,e.mm_timeout)})),i=i.nextElementSibling}}}))})),this.navParent.addEventListener("keydown",this.keyDownHandler.bind(this))}}}},n={};function i(e){var o=n[e];if(void 0!==o)return o.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,i),s.exports}i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e=i(883),function(t){t.TBMegaMenu=t.TBMegaMenu||{};const n='a:not([disabled]):not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), details:not([disabled]):not([tabindex="-1"]), [tabindex]:not([disabled]):not([tabindex="-1"])',i=()=>{document.querySelectorAll(".tbm").forEach((e=>{const i=e.getAttribute("id");t.TBMegaMenu[i]={};const o=parseInt(e.getAttribute("data-breakpoint"));window.matchMedia(`(max-width: ${o}px)`).matches?e.classList.add("tbm--mobile"):e.classList.remove("tbm--mobile");let s=document.querySelectorAll(n);s=[...s];let a=e.querySelectorAll(".tbm-link.level-1, .tbm-link.level-1 + .tbm-submenu-toggle");a=[...a],a=a.filter((e=>e.offsetWidth>0&&e.offsetHeight>0)),t.TBMegaMenu.focusable=s,t.TBMegaMenu[i].topLevel=a}))},o=(s=i,100,a=0,function(...e){var t=new Date;t-a>=100&&(s(...e),a=t)});var s,a;["load","resize"].forEach((e=>{window.addEventListener(e,o)})),t.TBMegaMenu.getNextPrevElement=(e,i=!1)=>{const o=document.activeElement;let s=null;if(o){let a=document.querySelectorAll(n);a=[...a],a=t.TBMegaMenu.focusable.filter((e=>i?!e.closest(".tbm-subnav")&&e.offsetWidth>0&&e.offsetHeight>0:e.offsetWidth>0&&e.offsetHeight>0));const r=a.indexOf(o);r>-1&&(s="next"===e?a[r+1]||a[0]:a[r-1]||a[0])}return s},t.behaviors.tbMegaMenuInit={attach:t=>{t.querySelectorAll(".tbm").forEach((t=>{t.getAttribute("data-initialized")||(t.setAttribute("data-initialized","true"),new e.w(t.getAttribute("id")).init())}))}},t.behaviors.tbMegaMenuRespond={attach:e=>{i()}}}(Drupal)}();