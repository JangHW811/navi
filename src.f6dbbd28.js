parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
var e=7,t=16e3,n=t+window.innerHeight,r=(1/(e+1)).toFixed(2),o=null,a=0,c=function(){var c=(window.pageYOffset/n).toFixed(2),i=parseInt(c/r);o!==i&&(o=i);var l=window.pageYOffset,u=n/e;document.querySelector(".background").style.top="-".concat(l/415,"%");var d=document.querySelector(".layer0"),s=document.querySelector(".layer1"),y=document.querySelector(".layer2"),m=document.querySelector(".layer3"),w=document.querySelector(".layer4"),f=document.querySelector(".layer5");d.style.opacity=2.7-Math.abs(l-300)/300,s.style.opacity=2.7-Math.abs(l-u)/400,y.style.opacity=2.7-Math.abs(l-2*u)/400,m.style.opacity=2.7-Math.abs(l-3*u)/400,w.style.opacity=2.7-Math.abs(l-4*u)/400,f.style.opacity=-(2.7-(l-4.5*u)/400);var g=document.querySelector(".building1Layer"),h=document.querySelector(".building2Layer"),v=document.querySelector(".building3Layer"),p=document.querySelector(".building4Layer"),q=document.querySelector(".layerBuildingContainer"),S=function(e,t){var n=t-window.innerHeight*(t/100)*l/(60*window.innerWidth);e.style.transform=n>=0?"translateY(".concat(n,"px)"):"translateY(0)",console.log("translatNumber",n,t,a),0===a&&1600===t&&n<=500&&(a=l)};S(g,700),S(h,1e3),S(v,1300),S(p,1600);var b=100-l/40;q.style.top="".concat(b>=0?b:0,"vh");var L=1+(l-a)/3e3,x=l-(t-window.innerHeight);if(a&&a<=l){var E=L<1?1:L>1.3?1.3:L;t-window.innerHeight<=l?(q.style.transform="translateY(-".concat(x,"px) scale(").concat(E,")"),f.style.transform="translateY(-".concat(x,"px)")):q.style.transform="scale(".concat(E,")")}else q.style.transform=null,f.style.transform=null},i=function(){var e=document.querySelector(".youtubeContainer > img.youtubeFrame"),t=document.querySelector(".youtubeContainer > iframe");console.log("window.innerWidth",window.innerWidth),e.style.width="".concat(.56*window.innerWidth,"px"),t.width="".concat(.49*window.innerWidth,"px"),t.height="".concat(.49*window.innerWidth*(42/73),"px"),c()};i(),window.addEventListener("scroll",c),window.addEventListener("resize",i),function(){document.querySelector(".fingerToggle").addEventListener("click",function(e){document.querySelector(".fingerFrame").classList.toggle("open")});var e=document.querySelector(".peopleContainer").querySelectorAll(".humanContainer");e.forEach(function(t,n){return t.addEventListener("click",function(t){e.forEach(function(e){e.classList.remove("active")}),t.target.parentElement.classList.add("active"),document.querySelectorAll(".cardContainer > img").forEach(function(e,t){n===t?e.classList.add("active"):e.classList.remove("active")})})})}();
},{}]},{},["H99C"], null)
//# sourceMappingURL=/src.f6dbbd28.js.map