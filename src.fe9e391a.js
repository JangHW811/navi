parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
var e=4e4,t=e+window.innerHeight,o=7,n=(1/(o+1)).toFixed(2),r=null,a=function(){var a=(window.pageYOffset/t).toFixed(2),c=parseInt(a/n);r!==c&&(r=c),console.log("index",r,t/o,a);var l=window.pageYOffset,i=t/o;document.querySelector(".background").style.backgroundPositionY="".concat(.8*l,"px");var u=document.querySelector(".layer0"),s=document.querySelector(".layer1"),y=document.querySelector(".layer2"),d=document.querySelector(".layer3"),g=document.querySelector(".layer4"),m=document.querySelector(".layer5");u.style.opacity=2-Math.abs(l-900)/900,s.style.opacity=2-Math.abs(l-2*i)/900,y.style.opacity=2-Math.abs(l-3*i)/900,d.style.opacity=2-Math.abs(l-4*i)/900,g.style.opacity=2-Math.abs(l-5*i)/900,m.style.opacity=2-Math.abs(l-6*i)/900;var f=document.querySelector(".building1Layer"),p=document.querySelector(".building2Layer"),q=document.querySelector(".building3Layer"),S=document.querySelector(".building4Layer"),v=document.querySelector(".layerBuildingContainer"),b=document.querySelector(".moonBackground"),w=function(e,o){var n=l/(1.4*e);console.log("positionY < unitNumber * bIndex",t,n,l,i,e),o.style.transform="translateY(-".concat(n<i?n:i,"px)")};if(w(1,f),w(2,p),w(3,q),w(4,S),e-window.innerHeight<=l){var h=l-(e-window.innerHeight);console.log("bottomPosition::",h),v.style.transform="translateY(-".concat(h,"px)"),b.style.transform="translateY(-".concat(h,"px)")}else v.style.transform=null,b.style.transform=null};window.addEventListener("scroll",a),window.addEventListener("resize",a),function(){document.querySelector(".fingerToggle").addEventListener("click",function(e){var t=document.querySelector(".fingerFrame");console.log(e.target),t.classList.toggle("open")});var e=document.querySelector(".peopleContainer").querySelectorAll("a");e.forEach(function(t,o){return t.addEventListener("click",function(t){e.forEach(function(e){e.classList.remove("active")}),t.target.parentElement.classList.add("active"),console.log(t.target,o)})})}();
},{}]},{},["H99C"], null)
//# sourceMappingURL=/src.fe9e391a.js.map