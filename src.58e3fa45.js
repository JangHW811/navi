parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
var e=6,t=(1/(e+1)).toFixed(2),n=!1,o=0,r=0,a=null;document.body.style.overflowY="hidden",document.onreadystatechange=function(e){"complete"===document.readyState&&(document.querySelector(".progress").style.display="none",document.body.style.overflowY="auto"),null!=document.querySelector(".top_wrap h1")&&(document.querySelector(".top_wrap h1").innerHTML='<img style="width: 72px; height: 22px; vertical-align: text-top;" src="/content/images/sweetdreamstore_new.png">')};var c=navigator.userAgent.toLowerCase();window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),Element.prototype.append||(Element.prototype.append=Element.prototype.appendChild),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var l=function(e){e.preventDefault(),o=window.innerHeight,r=window.innerWidth,(n=r<768)?u():i()},i=function(){var n=r/o,l=o/r,i=16e3+o,s=(window.pageYOffset/i).toFixed(2),u=parseInt(s/t);a!==u&&(a=u);var d=window.pageYOffset,m=i/e;document.querySelector(".background").style.top="-".concat(d/415,"%");var y=document.querySelector(".scrollDown");d>0?y.classList.add("hide"):y.classList.remove("hide");var v=document.querySelector(".fadeContainer"),p=document.querySelector(".layer0"),f=document.querySelector(".layer1"),h=document.querySelector(".layer2"),g=document.querySelector(".layer3"),w=document.querySelector(".layer4"),S=document.querySelector(".layer5");("Netscape"==navigator.appName&&-1!=c.indexOf("trident")||-1!=c.indexOf("msie"))&&(v.style.top=d>1440?"27%":"42%",d<15e3&&(v.style.transform="translateY(0)"));var q=180*n,b=7.6*l;p.style.opacity=b-Math.abs(d-(q-100))/(q-100),f.style.opacity=b-Math.abs(d-m)/q,h.style.opacity=b-Math.abs(d-2*m)/q,g.style.opacity=b-Math.abs(d-3*m)/q,w.style.opacity=b-Math.abs(d-4*m)/q,S.style.opacity=-(b-(d-4*m)/q);var L=document.querySelector(".building1Layer"),E=document.querySelector(".building2Layer"),x=document.querySelector(".building3Layer"),C=document.querySelector(".building4Layer"),M=document.querySelector(".layerBuildingContainer"),Y=function(e,t){var n=t-o*(t/100)*d/(60*r);e.style.transform=n>=0?"translateY(".concat(n,"px)"):"translateY(0)"};Y(L,700),Y(E,1e3),Y(x,1300),Y(C,1600);var k=100-d/40;M.style.top="".concat(k>=0?k:0,"vh");var _=1+(d-8e3)/3e3,A=document.querySelector(".header_menu_wrap")?document.querySelector(".header_menu_wrap").offsetHeight+10:0,I=d-(16e3-o)-A;if(8e3<=d){var N=_<1?1:_>1.3?1.3:_;16e3-o<=d?(M.style.transform="translateY(-".concat(I,"px) scale(").concat(N,")"),v.style.transform="translateY(-".concat(I,"px)")):M.style.transform="scale(".concat(N,")")}else M.style.transform=null,v.style.transform=null},s=!0,u=function(t){var n=document.querySelector(".parallaxScroll").offsetHeight,a=n+o,c=r/o,l=o/r,i=window.pageYOffset,u=a/e;document.querySelector(".background").style.top="-".concat(i/415,"%");var d=document.querySelector(".scrollDown");i>0?d.classList.add("hide"):d.classList.remove("hide");var m=document.querySelector(".fadeContainer"),y=document.querySelector(".layer0"),v=document.querySelector(".layer1"),p=document.querySelector(".layer2"),f=document.querySelector(".layer3"),h=document.querySelector(".layer4"),g=document.querySelector(".layer5"),w=300*c,S=1*l;y.style.opacity=S-Math.abs(i-(w-100))/(w-100)*c,v.style.opacity=S-Math.abs(i-u)/w*c,p.style.opacity=S-Math.abs(i-2*u)/w*c,f.style.opacity=S-Math.abs(i-3*u)/w*c,h.style.opacity=S-Math.abs(i-4*u)/w*c,g.style.opacity=-(S-(i-4*u)/w*c);var q=document.querySelector(".building1Layer"),b=document.querySelector(".building2Layer"),L=document.querySelector(".building3Layer"),E=document.querySelector(".building4Layer"),x=document.querySelector(".layerBuildingContainer"),C=function(e,t){var n=t-1.2*(t/1e3*c)*i*c;e.style.transform=n>=0?"translateY(".concat(n,"px)"):"translateY(0)"};C(q,.2*o),C(b,.4*o),C(L,.6*o),C(E,.8*o);x.style.top="".concat(0,"vh");var M=document.querySelector(".header_menu_wrap")?document.querySelector(".header_menu_wrap").offsetHeight+10:0,Y=l>2?n/3.2*l:n/2.7*l,k=2+(i-Y)/1e3,_=i-(n-o)-M;if(Y&&Y<=i){var A=k<2?2:k>2.6?2.6:k;n-o<=i?(x.style.transform="translateY(-".concat(_,"px) scale(").concat(A,")"),m.style.transform="translateY(-".concat(_,"px)")):x.style.transform="scale(".concat(A,")")}else x.style.transform=null,m.style.transform=null;n<=i?(console.log(n,i,document.body.style.overflowY),s&&(document.body.style.overflowY="hidden",setTimeout(function(){document.body.style.overflowY="auto"},800)),s=!1):s=!0},d=function(){o=window.innerHeight,r=window.innerWidth,n=r<768;document.querySelector(".parallaxScroll").offsetHeight;var e=document.querySelector(".youtubeContainer > img.youtubeFrame"),t=document.querySelector(".youtubeContainer > iframe"),a=n?window.visualViewport.width-20:.36*r,c=n?window.visualViewport.width-70:.31*r,i=n?(window.visualViewport.width-70)*(41/73):.31*r*(41/73);e.style.width="".concat(a,"px"),t.width="".concat(c,"px"),t.height="".concat(i,"px"),l()};window.addEventListener("scroll",l),window.addEventListener("resize",d),window.onload=function(){d()};var m=function(e){var t=e.humanItem,n=e.humans,o=e.index;n.forEach(function(e){e.classList.remove("active")}),"Netscape"==navigator.appName&&-1!=c.indexOf("trident")||-1!=c.indexOf("msie")?t.classList.add("active"):t.parentElement.classList.add("active"),document.querySelectorAll(".cardContainer > img").forEach(function(e,t){o===t?e.classList.add("active"):e.classList.remove("active")})};!function(){document.querySelector(".fingerToggle").addEventListener("click",function(e){document.querySelector(".fingerFrame").classList.toggle("open")});var e=document.querySelector(".peopleContainer").querySelectorAll(".humanContainer");e.forEach(function(t,n){return t.addEventListener("click",function(t){"Netscape"==navigator.appName&&-1!=c.indexOf("trident")||-1!=c.indexOf("msie")?m({humanItem:t.target.parentElement,humans:e,index:n}):m({humanItem:t.target,humans:e,index:n}),p=function(){}})});var t=document.querySelector(".alertMask");document.querySelectorAll(".alertMask .alert .closeEvent").forEach(function(e){e.addEventListener("click",function(e){t.style.display="none",document.body.style.overflowY="auto"})});var n=document.querySelector(".alertMask2");document.querySelectorAll(".alertMask2 .alert .closeEvent").forEach(function(e){e.addEventListener("click",function(e){n.style.display="none",document.body.style.overflowY="auto"})});var o=document.querySelector(".eventMask");document.querySelectorAll(".eventPopup .closeEvent").forEach(function(e){e.addEventListener("click",function(e){o.style.display="none",document.body.style.overflowY="auto"})}),document.querySelectorAll(".comingsoon").forEach(function(e){e.addEventListener("click",function(){t.style.display="flex",document.body.style.overflowY="hidden"})})}();var y=function(e){var t=document.createElement("div");t.classList.add("star"),t.classList.add("star".concat(e%10)),t.classList.add("starRandom".concat(e)),document.querySelector(".background").append(t);var n=100*Math.random(),o=100*Math.random(),r=20*Math.random()+5;t.style.top="".concat(n,"vh"),t.style.left="".concat(o,"vw"),t.style.width="".concat(r,"px"),t.style.height="".concat(r,"px"),setTimeout(function(){return t.remove()},e%10*200+2e3)},v=function(e){var t=2e3*Math.random();setTimeout(function(){y(e)},t)};setInterval(function(){var e=Math.floor(100*Math.random());v(e)},50);var p=function(e){var t=document.querySelectorAll(".humanContainer");if("Netscape"==navigator.appName&&-1!=c.indexOf("trident")||-1!=c.indexOf("msie")){var n=t[e];m({humanItem:n,humans:t,index:e})}else{var o=t[e].firstChild;m({humanItem:o,humans:t,index:e})}var r=(e+1)%4;setTimeout(function(){return p(r)},3e3)};p(0);var f=function(e){return fetch(e).then(function(e){return e.json()})},h="https://event.navienhouse.com/assets/sweetdreamstore/211123/images/arrowRight.png",g="https://event.navienhouse.com/assets/sweetdreamstore/211123/images/frame.png",w=function(){f("https://event.navienhouse.com/sweetdreamstore/index.php/API/getVideo").then(function(e){var t=null==e?void 0:e.data,n=null==t?void 0:t.map(function(e,t){var n='\n                <a class="storyItemContainer">\n                    <div class="alignCenter">\n                        <img src="'.concat(null==e?void 0:e.thumbnail,'" />\n                        <div class="fontContainer">\n                        <p class="storyTitleFont">').concat(null==e?void 0:e.title,'</p>\n                        <p class="storyContentFont">').concat(null==e?void 0:e.description,'</p>\n                        </div>\n                    </div>\n                    <div class="alignCenter">\n                        <div class="arrowRight">\n                        <img src="').concat(h,'" />\n                        </div>\n                    </div>\n                </a>\n            ');return 0===t&&S(e),n}),o=document.querySelector(".storyListContainer");o.innerHTML=n.join(""),o.querySelectorAll(".storyItemContainer").forEach(function(e,n){return e.addEventListener("click",function(){var e=t[n];S(e)})})})},S=function(e){var t=document.querySelector(".youtubeContainer"),n='\n    <img src="'.concat(g,'" class="imgObjectFitContain youtubeFrame" />\n    <iframe\n      frameborder="0"\n      src="').concat(null==e?void 0:e.video_url,'"\n      class="positionAbsolute storyYoutube"\n    ></iframe>\n    <img src="').concat(null==e?void 0:e.episode_img,'" class="imgObjectFitContain flag youtubeBottomImage" />\n    ');t.innerHTML=n,d()};w();var q="https://event.navienhouse.com/assets/sweetdreamstore/211123/images/goodsFrame.png",b="https://event.navienhouse.com/assets/sweetdreamstore/211123/images/btn_arrow.png",L="https://event.navienhouse.com/assets/sweetdreamstore/211123/images/btn_arrow_gray.png",E=function(){f("https://event.navienhouse.com/sweetdreamstore/index.php/API/getProduct").then(function(e){var t=null==e?void 0:e.data,n=null==t?void 0:t.map(function(e,t){return'\n                    <a class="goodsItem '.concat("Y"!==(null==e?void 0:e.use_yn)?"comingsoon":"",'" ').concat("Y"===(null==e?void 0:e.use_yn)?'href="'.concat(e.link,'"'):"",' >\n                        <div class="goodsFrame">\n                          <img src="').concat(null==e?void 0:e.thumbnail,'" class="goods" alt="" />\n                          <img src="').concat(q,'" alt="" />\n                        </div>\n                        <p class="goodsDescription">').concat(null==e?void 0:e.description,'</p>\n                        <div class="center glowingContainer">\n                          ').concat("Y"===(null==e?void 0:e.effect)?'<div class="glowingDummy"></div>':"",'\n                          <div class="flag2 center">\n                            <span class="flagFont">').concat(null==e?void 0:e.button,' <img src="').concat("Y"===(null==e?void 0:e.use_yn)?b:L,'"/>\n                            </span>\n                          </div>\n                        </div>\n                    </a>\n              ')}),o=document.querySelector(".goodsContainer");o.innerHTML=n.join(""),o.querySelectorAll(".goodsItem").forEach(function(e,t){return e.addEventListener("click",function(){goodsItemClick(t)})}),document.querySelectorAll(".comingsoon").forEach(function(e){e.addEventListener("click",function(){document.querySelector(".alertMask").style.display="flex",document.body.style.overflowY="hidden"})})})};E(),window.console.log=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];document.getElementById("log").innerHTML=t};
},{}]},{},["H99C"], null)
//# sourceMappingURL=/src.58e3fa45.js.map