parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
var e=7,t=(1/(e+1)).toFixed(2),n=null,o=window.innerWidth<768,r=navigator.userAgent.toLowerCase();window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),Element.prototype.append||(Element.prototype.append=Element.prototype.appendChild);var a=function(){o?c():i()},i=function(){var a=16e3+window.innerHeight,i=(window.pageYOffset/a).toFixed(2),c=parseInt(i/t);n!==c&&(n=c);var l=window.pageYOffset,d=a/e;document.querySelector(".background").style.top="-".concat(l/415,"%");var u=document.querySelector(".fadeContainer"),s=document.querySelector(".layer0"),y=document.querySelector(".layer1"),m=document.querySelector(".layer2"),w=document.querySelector(".layer3"),p=document.querySelector(".layer4"),h=document.querySelector(".layer5");("Netscape"==navigator.appName&&-1!=r.indexOf("trident")||-1!=r.indexOf("msie"))&&(u.style.top=l>1440?"27%":"42%",l<15e3&&(u.style.transform="translateY(0)"));s.style.opacity=2.7-Math.abs(l-300)/300,y.style.opacity=2.7-Math.abs(l-d)/400,m.style.opacity=2.7-Math.abs(l-2*d)/400,w.style.opacity=2.7-Math.abs(l-3*d)/400,p.style.opacity=2.7-Math.abs(l-4*d)/400,h.style.opacity=-(2.7-(l-4.5*d)/400);var f=document.querySelector(".building1Layer"),g=document.querySelector(".building2Layer"),v=document.querySelector(".building3Layer"),q=document.querySelector(".building4Layer"),S=document.querySelector(".layerBuildingContainer"),b=function(e,t){var n=t-window.innerHeight*(t/100)*l/(60*window.innerWidth);e.style.transform=n>=0?"translateY(".concat(n,"px)"):"translateY(0)"};b(f,700),b(g,1e3),b(v,1300),b(q,1600);var L=100-l/40;S.style.top="".concat(L>=0?L:0,"vh"),console.log("positionY",l);var H=o?2:1,M=o?2.6:1.3,x=H+(l-8e3)/3e3,E=document.querySelector(".header_menu_wrap")?document.querySelector(".header_menu_wrap").offsetHeight+10:0,Y=l-(16e3-window.innerHeight)-E;if(8e3<=l){var C=x<H?H:x>M?M:x;16e3-window.innerHeight<=l?(S.style.transform="translateY(-".concat(Y,"px) scale(").concat(C,")"),u.style.transform="translateY(-".concat(Y,"px)")):S.style.transform="scale(".concat(C,")")}else S.style.transform=null,u.style.transform=null},c=function(){var t=20*window.innerHeight,n=t+window.innerHeight,o=window.innerWidth/window.innerHeight,r=window.innerHeight/window.innerWidth,a=window.pageYOffset,i=n/e;document.querySelector(".background").style.top="-".concat(a/415,"%");var c=document.querySelector(".fadeContainer"),l=document.querySelector(".layer0"),d=document.querySelector(".layer1"),u=document.querySelector(".layer2"),s=document.querySelector(".layer3"),y=document.querySelector(".layer4"),m=document.querySelector(".layer5"),w=400*o,p=2.7*o;l.style.opacity=p-Math.abs(a-(w-100))/(w-100)*o,d.style.opacity=p-Math.abs(a-i)/w*o,u.style.opacity=p-Math.abs(a-2*i)/w*o,s.style.opacity=p-Math.abs(a-3*i)/w*o,y.style.opacity=p-Math.abs(a-4*i)/w*o,m.style.opacity=-(p-(a-4.5*i)/w*o);var h=document.querySelector(".building1Layer"),f=document.querySelector(".building2Layer"),g=document.querySelector(".building3Layer"),v=document.querySelector(".building4Layer"),q=document.querySelector(".layerBuildingContainer"),S=function(e,t){var n=t-t/1e3*o*a/3*o;e.style.transform=n>=0?"translateY(".concat(n,"px)"):"translateY(0)"};S(h,.2*window.innerHeight),S(f,.4*window.innerHeight),S(g,.6*window.innerHeight),S(v,.8*window.innerHeight);q.style.top="".concat(0,"vh");var b=document.querySelector(".header_menu_wrap")?document.querySelector(".header_menu_wrap").offsetHeight+10:0,L=t/3*r,H=2+(a-L)/3e3,M=a-(t-window.innerHeight)-b;if(console.log("position",a,L,M),L&&L<=a){var x=H<2?2:H>2.6?2.6:H;t-window.innerHeight<=a?(q.style.transform="translateY(-".concat(M,"px) scale(").concat(x,")"),c.style.transform="translateY(-".concat(M,"px)")):q.style.transform="scale(".concat(x,")")}else q.style.transform=null,c.style.transform=null},l=function(){o=window.innerWidth<768;var e=document.querySelector(".youtubeContainer > img.youtubeFrame"),t=document.querySelector(".youtubeContainer > iframe"),n=o?window.visualViewport.width-20:.36*window.innerWidth,r=o?window.visualViewport.width-70:.31*window.innerWidth,i=o?(window.visualViewport.width-70)*(41/73):.31*window.innerWidth*(41/73);e.style.width="".concat(n,"px"),t.width="".concat(r,"px"),t.height="".concat(i,"px"),a()};l(),window.addEventListener("scroll",a),window.addEventListener("resize",l),function(){document.querySelector(".fingerToggle").addEventListener("click",function(e){document.querySelector(".fingerFrame").classList.toggle("open")});var e=document.querySelector(".peopleContainer").querySelectorAll(".humanContainer");e.forEach(function(t,n){return t.addEventListener("click",function(t){e.forEach(function(e){e.classList.remove("active")}),t.target.parentElement.classList.add("active"),document.querySelectorAll(".cardContainer > img").forEach(function(e,t){n===t?e.classList.add("active"):e.classList.remove("active")})})})}();var d=function(e){var t=document.createElement("div");t.classList.add("star"),t.classList.add("star".concat(e%10)),t.classList.add("starRandom".concat(e)),document.querySelector(".background").append(t);var n=100*Math.random(),o=100*Math.random(),r=20*Math.random()+5;t.style.top="".concat(n,"vh"),t.style.left="".concat(o,"vw"),t.style.width="".concat(r,"px"),t.style.height="".concat(r,"px"),setTimeout(function(){return t.remove()},e%10*200+2e3)},u=function(e){var t=2e3*Math.random();setTimeout(function(){d(e)},t)};setInterval(function(){Math.floor(100*Math.random())},50);
},{}]},{},["H99C"], null)
//# sourceMappingURL=/src.09f2c13c.js.map