parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
var e=7,t=16e3,n=t+window.innerHeight,o=(1/(e+1)).toFixed(2),r=null,a=0;window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),Element.prototype.append||(Element.prototype.append=Element.prototype.appendChild),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var c=function(){var c=(window.pageYOffset/n).toFixed(2),i=parseInt(c/o);r!==i&&(r=i);var d=window.pageYOffset,l=n/e;document.querySelector(".background").style.top="-".concat(d/415,"%");var u=document.querySelector(".fadeContainer"),s=document.querySelector(".layer0"),y=document.querySelector(".layer1"),m=document.querySelector(".layer2"),p=document.querySelector(".layer3"),h=document.querySelector(".layer4"),f=document.querySelector(".layer5");s.style.opacity=2.7-Math.abs(d-300)/300,y.style.opacity=2.7-Math.abs(d-l)/400,m.style.opacity=2.7-Math.abs(d-2*l)/400,p.style.opacity=2.7-Math.abs(d-3*l)/400,h.style.opacity=2.7-Math.abs(d-4*l)/400,f.style.opacity=-(2.7-(d-4.5*l)/400);var w=document.querySelector(".building1Layer"),v=document.querySelector(".building2Layer"),g=document.querySelector(".building3Layer"),q=document.querySelector(".building4Layer"),S=document.querySelector(".layerBuildingContainer"),L=function(e,t){var n=t-window.innerHeight*(t/100)*d/(60*window.innerWidth);e.style.transform=n>=0?"translateY(".concat(n,"px)"):"translateY(0)",a=0===a&&1600===t&&n*(window.innerWidth/window.innerHeight)<=500?d:0};L(w,700),L(v,1e3),L(g,1300),L(q,1600);var E=100-d/40;S.style.top="".concat(E>=0?E:0,"vh");var b=1+(d-a)/3e3,M=document.querySelector(".header_menu_wrap")?document.querySelector(".header_menu_wrap").offsetHeight+10:0,x=d-(t-window.innerHeight)-M;if(a&&a<=d){var C=b<1?1:b>1.3?1.3:b;t-window.innerHeight<=d?(S.style.transform="translateY(-".concat(x,"px) scale(").concat(C,")"),u.style.transform="translateY(-".concat(x,"px)")):S.style.transform="scale(".concat(C,")")}else S.style.transform=null,u.style.transform=null},i=function(){var e=document.querySelector(".youtubeContainer > img.youtubeFrame"),t=document.querySelector(".youtubeContainer > iframe");console.log("window.innerWidth",window.innerWidth),e.style.width="".concat(.36*window.innerWidth,"px"),t.width="".concat(.31*window.innerWidth,"px"),t.height="".concat(.31*window.innerWidth*(41/73),"px"),c()};i(),window.addEventListener("scroll",c),window.addEventListener("resize",i),function(){document.querySelector(".fingerToggle").addEventListener("click",function(e){document.querySelector(".fingerFrame").classList.toggle("open")});var e=document.querySelector(".peopleContainer").querySelectorAll(".humanContainer");e.forEach(function(t,n){return t.addEventListener("click",function(t){e.forEach(function(e){e.classList.remove("active")}),t.target.parentElement.classList.add("active"),document.querySelectorAll(".cardContainer > img").forEach(function(e,t){n===t?e.classList.add("active"):e.classList.remove("active")})})})}();var d=function(e){var t=document.createElement("div");t.classList.add("star"),t.classList.add("star".concat(e%10)),t.classList.add("starRandom".concat(e)),document.querySelector(".background").append(t);var n=100*Math.random(),o=100*Math.random(),r=7.5*Math.random()+5,a=document.querySelector(".starRandom".concat(e));a.style.top="".concat(n,"vh"),a.style.left="".concat(o,"vw"),a.style.width="".concat(r,"px"),a.style.height="".concat(r,"px"),setTimeout(function(){return a.remove()},e%10*100*2)},l=function(e){var t=2e3*Math.random();setTimeout(function(){d(e)},t)};setInterval(function(){var e=Math.floor(100*Math.random());l(e)},50);
},{}]},{},["H99C"], null)
//# sourceMappingURL=/src.03804dc9.js.map