import{S as c,N as l,P as a,K as u,M as d}from"./vendor-0dfba279.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();(()=>{const s=document.querySelector("[data-menu-button]"),r=document.querySelector("[data-menu]");s&&r&&s.addEventListener("click",()=>{const o=s.getAttribute("aria-expanded")==="true"||!1;s.classList.toggle("is-open"),r.classList.toggle("is-open"),s.setAttribute("aria-expanded",!o)})})();document.querySelectorAll(".faq-btn").forEach(r=>{r.addEventListener("click",o=>{const n=r.nextElementSibling,e=r.querySelector(".icon-arrow");n.classList.toggle("visually-hidden"),e.classList.toggle("arrow-reverse")})});new c(".swiper",{centeredSlides:!0,spaceBetween:100,breakpoints:{320:{slidesPerView:1,centeredSlides:!0},1440:{slidesPerView:3}},modules:[l,a,u,d],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},loop:!0});
//# sourceMappingURL=main-ff1ec040.js.map
