parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
var e=7,t=(1/(e+1)).toFixed(2),o=0,r=0,n=0,a=null,c=navigator.userAgent.toLowerCase();window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),Element.prototype.append||(Element.prototype.append=Element.prototype.appendChild);var l=function(){o?u():i()},i=function(){var l=16e3+r,i=(window.pageYOffset/l).toFixed(2),u=parseInt(i/t);a!==u&&(a=u);var s=window.pageYOffset,d=l/e;document.querySelector(".background").style.top="-".concat(s/415,"%");var y=document.querySelector(".fadeContainer"),m=document.querySelector(".layer0"),p=document.querySelector(".layer1"),f=document.querySelector(".layer2"),w=document.querySelector(".layer3"),h=document.querySelector(".layer4"),v=document.querySelector(".layer5");("Netscape"==navigator.appName&&-1!=c.indexOf("trident")||-1!=c.indexOf("msie"))&&(y.style.top=s>1440?"27%":"42%",s<15e3&&(y.style.transform="translateY(0)"));m.style.opacity=2.7-Math.abs(s-300)/300,p.style.opacity=2.7-Math.abs(s-d)/400,f.style.opacity=2.7-Math.abs(s-2*d)/400,w.style.opacity=2.7-Math.abs(s-3*d)/400,h.style.opacity=2.7-Math.abs(s-4*d)/400,v.style.opacity=-(2.7-(s-4.5*d)/400);var g=document.querySelector(".building1Layer"),q=document.querySelector(".building2Layer"),S=document.querySelector(".building3Layer"),L=document.querySelector(".building4Layer"),b=document.querySelector(".layerBuildingContainer"),M=function(e,t){var o=t-r*(t/100)*s/(60*n);e.style.transform=o>=0?"translateY(".concat(o,"px)"):"translateY(0)"};M(g,700),M(q,1e3),M(S,1300),M(L,1600);var E=100-s/40;b.style.top="".concat(E>=0?E:0,"vh");var x=o?2:1,Y=o?2.6:1.3,C=x+(s-8e3)/3e3,_=document.querySelector(".header_menu_wrap")?document.querySelector(".header_menu_wrap").offsetHeight+10:0,H=s-(16e3-r)-_;if(8e3<=s){var k=C<x?x:C>Y?Y:C;16e3-r<=s?(b.style.transform="translateY(-".concat(H,"px) scale(").concat(k,")"),y.style.transform="translateY(-".concat(H,"px)")):b.style.transform="scale(".concat(k,")")}else b.style.transform=null,y.style.transform=null},u=function(){var t=20*r,o=t+r,a=n/r,c=r/n,l=window.pageYOffset,i=o/e;document.querySelector(".background").style.top="-".concat(l/415,"%");var u=document.querySelector(".fadeContainer"),s=document.querySelector(".layer0"),d=document.querySelector(".layer1"),y=document.querySelector(".layer2"),m=document.querySelector(".layer3"),p=document.querySelector(".layer4"),f=document.querySelector(".layer5"),w=400*a,h=2.7*a;s.style.opacity=h-Math.abs(l-(w-100))/(w-100)*a,d.style.opacity=h-Math.abs(l-i)/w*a,y.style.opacity=h-Math.abs(l-2*i)/w*a,m.style.opacity=h-Math.abs(l-3*i)/w*a,p.style.opacity=h-Math.abs(l-4*i)/w*a,f.style.opacity=-(h-(l-4.5*i)/w*a);var v=document.querySelector(".building1Layer"),g=document.querySelector(".building2Layer"),q=document.querySelector(".building3Layer"),S=document.querySelector(".building4Layer"),L=document.querySelector(".layerBuildingContainer"),b=function(e,t){var o=t-t/1e3*a*l/3*a;e.style.transform=o>=0?"translateY(".concat(o,"px)"):"translateY(0)"};b(v,.2*r),b(g,.4*r),b(q,.6*r),b(S,.8*r);L.style.top="".concat(0,"vh");var M=document.querySelector(".header_menu_wrap")?document.querySelector(".header_menu_wrap").offsetHeight+10:0,E=t/3*c,x=2+(l-E)/3e3,Y=l-(t-r)-M;if(console.log("position",l,r,n),E&&E<=l){var C=x<2?2:x>2.6?2.6:x;t-r<=l?(L.style.transform="translateY(-".concat(Y,"px) scale(").concat(C,")"),u.style.transform="translateY(-".concat(Y,"px)")):L.style.transform="scale(".concat(C,")")}else L.style.transform=null,u.style.transform=null},s=function(){(o=n<768)||(r=window.innerHeight,n=window.innerWidth),o&&r<window.innerHeight&&(r=window.innerHeight,n=window.innerWidth);var e=document.querySelector(".youtubeContainer > img.youtubeFrame"),t=document.querySelector(".youtubeContainer > iframe"),a=o?window.visualViewport.width-20:.36*n,c=o?window.visualViewport.width-70:.31*n,i=o?(window.visualViewport.width-70)*(41/73):.31*n*(41/73);e.style.width="".concat(a,"px"),t.width="".concat(c,"px"),t.height="".concat(i,"px"),l()};s(),window.addEventListener("scroll",l),window.addEventListener("resize",s),window.onload=function(){r=window.visualViewport.height,n=window.visualViewport.width,o=n<768},function(){document.querySelector(".fingerToggle").addEventListener("click",function(e){document.querySelector(".fingerFrame").classList.toggle("open")});var e=document.querySelector(".peopleContainer").querySelectorAll(".humanContainer");e.forEach(function(t,o){return t.addEventListener("click",function(t){e.forEach(function(e){e.classList.remove("active")}),t.target.parentElement.classList.add("active"),document.querySelectorAll(".cardContainer > img").forEach(function(e,t){o===t?e.classList.add("active"):e.classList.remove("active")})})})}();var d=function(e){var t=document.createElement("div");t.classList.add("star"),t.classList.add("star".concat(e%10)),t.classList.add("starRandom".concat(e)),document.querySelector(".background").append(t);var o=100*Math.random(),r=100*Math.random(),n=20*Math.random()+5;t.style.top="".concat(o,"vh"),t.style.left="".concat(r,"vw"),t.style.width="".concat(n,"px"),t.style.height="".concat(n,"px"),setTimeout(function(){return t.remove()},e%10*200+2e3)},y=function(e){var t=2e3*Math.random();setTimeout(function(){d(e)},t)};setInterval(function(){Math.floor(100*Math.random())},50),window.console.log=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];document.getElementById("log").innerHTML=t};
},{}]},{},["H99C"], null)
//# sourceMappingURL=/src.82f59187.js.map