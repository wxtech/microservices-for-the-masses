!function e(t,n,r){function o(s,c){if(!n[s]){if(!t[s]){var a="function"==typeof require&&require;if(!c&&a)return a(s,!0);if(i)return i(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[s]={exports:{}};t[s][0].call(u.exports,function(e){var n=t[s][1][e];return o(n?n:e)},u,u.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){t.exports=function(e){return function(t){var n,r,o=t.slides.map(function(t){return[].slice.call(t.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0)}),i=function(){var e=n+1;return a(1)?(c(n,r+1),!1):void(o[e]&&c(e,0))},s=function(){var e=n-1;return a(-1)?(c(n,r-1),!1):void(o[e]&&c(e,o[e].length-1))},c=function(e,t){n=e,r=t,o.forEach(function(n,r){n.forEach(function(n,o){n.classList.add("bespoke-bullet"),r<e||r===e&&o<=t?(n.classList.add("bespoke-bullet-active"),n.classList.remove("bespoke-bullet-inactive")):(n.classList.add("bespoke-bullet-inactive"),n.classList.remove("bespoke-bullet-active")),r===e&&o===t?n.classList.add("bespoke-bullet-current"):n.classList.remove("bespoke-bullet-current")})})},a=function(e){return void 0!==o[n][r+e]};t.on("next",i),t.on("prev",s),t.on("slide",function(e){c(e.index,0)}),c(0,0)}}},{}],2:[function(e,t,n){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},r=function(r,o){var i=e.slides[e.slide()],s=o-e.slide(),c=s>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,r)),r!==i&&["inactive",c,c+"-"+Math.abs(s)].map(t.bind(null,r))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(o){e.slides.map(r),t(o.slide,"active"),n(o.slide,"inactive")})}}},{}],3:[function(e,t,n){t.exports=function(e){return function(t){e=e&&(e.object||e.name||e.scope)?e:{object:e};var n=e.object,r=e.name||"bespoke",o=e.scope||window;n?o[r]=n:n=o[r]?o[r]:o[r]={},(Array.isArray(n.decks)?n.decks:n.decks=[]).push(n.deck=t),t.on("destroy",function(){var e=n.decks.indexOf(t);e>=0&&n.decks.splice(e,1),delete n.deck})}}},{}],4:[function(e,t,n){t.exports=function(){return function(e){var t=function(){var t=window.location.hash.slice(1),r=parseInt(t,10);t&&(r?n(r-1):e.slides.forEach(function(e,r){e.getAttribute("data-bespoke-hash")===t&&n(r)}))},n=function(t){var n=-1<t&&t<e.slides.length?t:0;n!==e.slide()&&e.slide(n)};setTimeout(function(){t(),e.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash");window.location.hash=t||e.index+1}),window.addEventListener("hashchange",t)},0)}}},{}],5:[function(e,t,n){t.exports=function(){return function(e){var t=32,n=33,r=34,o=35,i=36,s=37,c=39,a=72,l=76,u="keydown",f=function(e,t){return e.ctrlKey||e.shiftKey&&(t===i||t===o)||e.altKey||e.metaKey},p=function(u){if(!f(u,u.which))switch(u.which){case t:return(u.shiftKey?e.prev:e.next)();case c:case r:case l:return e.next();case s:case n:case a:return e.prev();case i:return e.slide(0);case o:return e.slide(e.slides.length-1)}};e.on("destroy",function(){document.removeEventListener(u,p)}),document.addEventListener(u,p)}}},{}],6:[function(e,t,n){t.exports=function(e){return function(t){var n=e||{},r="touchstart",o="touchmove",i="addEventListener",s="removeEventListener",c=t.parent,a=null,l=null,u="page"+("y"===n.axis?"Y":"X"),f="number"==typeof n.threshold?n.threshold:50/window.devicePixelRatio,p=function(e){a=1===e.touches.length?e.touches[0][u]:null},d=function(e){if(null!==a)return void 0===a?e.preventDefault():void(Math.abs(l=e.touches[0][u]-a)>f&&((l>0?t.prev:t.next)(),a=e.preventDefault()))};t.on("destroy",function(){c[s](r,p),c[s](o,d)}),c[i](r,p),c[i](o,d)}}},{}],7:[function(e,t,n){t.exports=function(t){t=t||{};var n=e("bespoke-nav-kbd")(t.kbd),r=e("bespoke-nav-touch")(t.touch);return function(e){n(e),r(e)}}},{"bespoke-nav-kbd":5,"bespoke-nav-touch":6}],8:[function(e,t,n){"use strict";var r,o=e("es5-ext/object/primitive-set"),i=e("querystring2/parse"),s=e("querystring2/stringify"),c=e("dom-ext/html-document/#/add-style"),a=e("bespoke-classes"),l=o("input","select","textarea"),u=/^matrix\(([\d\.]+),/,f=function(e){var t;return location.search?(t=i(location.search.slice(1))[e],null==t?null:!t||Boolean(Number(t))):null},p=function(){var e=document.createEvent("HTMLEvents");e.initEvent("resize",!0,!0),window.dispatchEvent(e)},d=function(e){var t,n=Number(window.getComputedStyle(e).zoom)||1;return 1!==n?n:(t=window.getComputedStyle(e.parentNode).transform.match(u),t?Number(t[1])||1:1)},v=function(){var e,t,n,o,i=window.innerWidth,s=document.querySelector(".bespoke-active");if(s){if(e=d(s),e===r)return;r=e,t=s.offsetWidth*e,i&&t&&(n=(i/2/t).toFixed(3),o="scale("+n+") translateX(-50%)",c.call(document,{"body.notes .bespoke-slide":{"-webkit-transform":o,transform:o}}))}};t.exports=function(){var e=Object(arguments[1]),t=Boolean(e.visible),n=e.key||78,r="notes";return e.queryToken===!1?r=null:e.queryToken&&e.queryToken!==!0&&(r=e.queryToken),function(e){var o,c,u;e.parent.classList.contains("bespoke-parent")||a()(e),r&&(u=f(r),null!=u&&(t=u),window.addEventListener("popstate",function(){o(Boolean(f(r)))})),o=function(e){var t,n,o;c!==e&&(c=e,e?document.body.classList.add("notes"):document.body.classList.remove("notes"),r&&(o=location.pathname,t=location.search?i(location.search.slice(1)):{},e?t[r]=null:delete t[r],n=s(t),n&&(o+="?"+n.replace(/(?:=&)/g,"&").replace(/\=$/,"")),location.hash&&(o+=location.hash),history.pushState({},"",o),p()))},document.addEventListener("keydown",function(e){e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.which===n&&(l[e.target.nodeName.toLowerCase()]||(e.preventDefault(),o(!c)))},!1),o(t),setInterval(v,200)}}},{"bespoke-classes":2,"dom-ext/html-document/#/add-style":17,"es5-ext/object/primitive-set":47,"querystring2/parse":70,"querystring2/stringify":71}],9:[function(e,t,n){t.exports=function(){return function(e){var t=[],n=0,r=function(){t.forEach(function(t){t.postMessage(["CURSOR",e.slide()+1+"."+n].join(" "),"*")})},o=function(t){return e.slides[t].querySelectorAll(".bespoke-bullet").length},i=function(e,t){return o(e)>t},s=function(){for(var t=e.slides[e.slide()].querySelectorAll(".bespoke-bullet"),n=0,r=t.length;n<r;n++)if(t[n].classList.contains("bespoke-bullet-current"))return n;return 0},c=function(o){var c=o.data.split(" "),a=o.source;switch(c[0]){case"REGISTER":t.push(a),a.postMessage(["REGISTERED",encodeURIComponent(document.title||"Untitled"),e.slides.length].join(" "),"*"),r();break;case"FORWARD":e.next(),n=s(),r();break;case"BACK":e.prev(),n=s(),r();break;case"START":e.slide(0,{preview:!0}),n=0,r();break;case"END":e.slide(e.slides.length-1,{preview:!0}),n=0,r();break;case"SET_CURSOR":var l,u,f=c[1]||"1";if(f.indexOf(".")!==-1){var p=f.split(".",2).map(function(e){return~~e});l=p[0],u=p[1]}else l=~~f,u=0;u>0&&!i(l-1,u)&&(l+=1,u=0),l<1?l=1:l>e.slides.length&&(l=e.slides.length),e.slide(l-1,{preview:!0});for(var d=0;d<u;d++)e.next();n=u,r();break;case"GET_NOTES":var v=e.slides[e.slide()].querySelector("[role=note]"),h=v?encodeURIComponent(v.innerHTML):"";a.postMessage(["NOTES",h].join(" "),"*")}};e.on("destroy",function(){removeEventListener("message",c,!1)}),addEventListener("message",c,!1)}}},{}],10:[function(e,t,n){t.exports=function(t){return e("insert-css")(".bespoke-parent.bespoke-overview{pointer-events:auto}.bespoke-overview :not(img){pointer-events:none}.bespoke-overview .bespoke-slide{opacity:1;visibility:visible;cursor:pointer;pointer-events:auto}.bespoke-overview .bespoke-active{outline:6px solid #cfd8dc;outline-offset:-3px;-moz-outline-radius:3px}.bespoke-overview .bespoke-bullet{opacity:1;visibility:visible}.bespoke-overview-counter{counter-reset:overview}.bespoke-overview-counter .bespoke-slide::after{counter-increment:overview;content:counter(overview);position:absolute;right:.75em;bottom:.5em;font-size:1.25rem;line-height:1.25}.bespoke-title{visibility:hidden;position:absolute;top:0;left:0;width:100%;pointer-events:auto}.bespoke-title h1{margin:0;font-size:1.6em;line-height:1.2;text-align:center}.bespoke-overview:not(.bespoke-overview-to) .bespoke-title{visibility:visible}.bespoke-overview-to .bespoke-active,.bespoke-overview-from .bespoke-active{z-index:1}",{prepend:!0}),function(e){t="object"==typeof t?t:{};var n,r=79,o=13,i=38,s=40,c=/, */,a=/^none(?:, ?none)*$/,l=/^translate\((.+?)px, ?(.+?)px\) scale\((.+?)\)$/,u=/(^\?|&)overview(?=$|&)/,f=!("transition"in document.body.style)&&"webkitTransition"in document.body.style?"webkitTransitionEnd":"transitionend",p=["webkit","Moz"],d="number"==typeof t.columns?parseInt(t.columns):3,v="number"==typeof t.margin?parseFloat(t.margin):15,h=null,b=function(e,t){if(!(t in e.style))for(var n=t.charAt(0).toUpperCase()+t.substr(1),r=0,o=p.length;r<o;r++)if(p[r]+n in e.style)return p[r]+n;return t},m=function(e,t){return parseFloat(e.style[t].slice(6,-1))},y=function(e){if("zoom"in e.style)return parseFloat(e.style.zoom)||void 0},g=function(e){var t=[],n=getComputedStyle(e),r=n[b(e,"transitionProperty")];if(!r||a.test(r))return t;r=r.split(c);var o=n[b(e,"transitionDuration")].split(c),i=n[b(e,"transitionDelay")].split(c);return r.forEach(function(e,n){"0s"===o[n]&&"0s"===i[n]||t.push(e)}),t},x=function(e,t,n,r){t&&(e.style[t]=n),e.offsetHeight,t&&(e.style[t]=r)},w=function(){e.on("activate",w)(),e.parent.scrollLeft=e.parent.scrollTop=0,(t.autostart||u.test(location.search))&&setTimeout(A,100)},k=function(){T(e.slides.indexOf(this))},j=function(t,n){var r=n.index+t;return r>=0&&r<e.slides.length&&e.slide(r,{preview:!0}),!1},O=function(e){e.scrollIntoView!==!1&&_(e.slide,e.index,y(e.slide))},E=function(e){var t=location.search.replace(u,"").replace(/^[^?]/,"?$&");e?history.replaceState(null,null,location.pathname+(t.length>0?t+"&":"?")+"overview"+location.hash):history.replaceState(null,null,location.pathname+t+location.hash)},_=function(t,n,r){e.parent.scrollTop=n<d?0:e.parent.scrollTop+t.getBoundingClientRect().top*(r||1)},S=function(e,t,r,o){r.removeEventListener(f,n,!1),o&&o!==r&&o.removeEventListener(f,n,!1),n=void 0,t.remove("bespoke-overview-"+e)},C=function(e){var t=e.firstElementChild;if(t.classList.contains("bespoke-title"))return t.style.width="",t;var n=document.createElement("header");n.className="bespoke-title",n.style[b(n,"transformOrigin")]="0 0";var r=document.createElement("h1");return r.appendChild(document.createTextNode(e.getAttribute("data-title")||document.title)),n.appendChild(r),x(e.insertBefore(n,t)),n},A=function(){var r,o,i=e.slides,s=e.parent,c=s.classList,a=i.length-1,l=e.slide(),u=l>0?i[0]:i[a],p=b(u,"transform"),w=s.querySelector(".bespoke-scale-parent"),T=1,L=0,N=h,z="webkitAppearance"in s.style;w?T=m(w,p):(r=y(u))&&(T=r),n&&S("from",c,i[0],i[a]),t.title&&(o=C(s)),N||(e.slide(l,{preview:!0}),c.add("bespoke-overview"),addEventListener("resize",A,!1),h=[e.on("activate",O),e.on("prev",j.bind(null,-1)),e.on("next",j.bind(null,1))],t.counter&&c.add("bespoke-overview-counter"),t.location&&E(!0),c.add("bespoke-overview-to"),L=a>0?g(u).length:g(u).join(" ").indexOf("transform")<0?0:1,s.style.overflowY="scroll",s.style.scrollBehavior="smooth",z&&i.forEach(function(e){x(e,"marginBottom","0%","")}));var R=s.clientWidth/T,I=s.clientHeight/T,P=(w||s).offsetWidth-s.clientWidth,q=w?P/2/T:0,F=u.offsetWidth,H=u.offsetHeight,K=R/(d*F+(d+1)*v),M=T*K,U=F*K,B=H*K,W=(R-U)/2,D=(I-B)/2,$=v*K,V=0,X=0,Y=0;o&&(t.scaleTitle!==!1?(o.style[r?"zoom":p]=r?M:"scale("+M+")",o.style.width=s.clientWidth/M+"px",V=o.offsetHeight*K):(P>0&&(o.style.width=s.clientWidth+"px"),V=o.offsetHeight/T)),i.forEach(function(e){var t=Y*U+(Y+1)*$-q-W,n=X*B+(X+1)*$+V-D;e.style[p]="translate("+(t.toString().indexOf("e-")<0?t:0)+"px, "+(n.toString().indexOf("e-")<0?n:0)+"px) scale("+K+")",X*d+Y===a&&(e.style.marginBottom=v+"px"),e.addEventListener("click",k,!1),Y===d-1?(X+=1,Y=0):Y+=1}),N?_(i[l],l,r):L>0?u.addEventListener(f,n=function(e){e.target===this&&0===(L-=1)&&(S("to",c,this),z&&s.scrollHeight>s.clientHeight&&x(s,"overflowY","auto","scroll"),_(i[l],l,r))},!1):(i.forEach(function(e){x(e)}),c.remove("bespoke-overview-to"),_(i[l],l,r))},T=function(r){e.slide("number"==typeof r?r:e.slide(),{scrollIntoView:!1});var o,i=e.slides,s=e.parent,c=s.classList,a=i.length-1,u=e.slide()>0?i[0]:i[a],p=b(u,"transform"),d=b(u,"transition"),v=s.querySelector(".bespoke-scale-parent"),w="webkitAppearance"in s.style;v?o=m(v,p):(o=y(u))||(o=1),n&&S("to",c,i[0],i[a]);var j=s.scrollTop/o,O=(s.offsetWidth-(v||s).clientWidth)/2/o;s.style.scrollBehavior=s.style.overflowY="",i.forEach(function(e){w&&x(e,"marginBottom","0%",""),e.removeEventListener("click",k,!1)}),(j||O)&&i.forEach(function(e){var t=e.style[p].match(l);e.style[p]="translate("+(parseFloat(t[1])-O)+"px, "+(parseFloat(t[2])-j)+"px) scale("+t[3]+")",x(e,d,"none","")}),s.scrollTop=0,c.remove("bespoke-overview"),removeEventListener("resize",A,!1),(h||[]).forEach(function(e){e()}),h=null,t.counter&&c.remove("bespoke-overview-counter"),t.location&&E(!1),c.add("bespoke-overview-from");var _=a>0?g(u).length:g(u).join(" ").indexOf("transform")<0?0:1;i.forEach(function(e){e.style[p]=""}),_>0?u.addEventListener(f,n=function(e){e.target===this&&0===(_-=1)&&S("from",c,this)},!1):(i.forEach(function(e){x(e)}),c.remove("bespoke-overview-from"))},L=function(){h?T():A()},N=function(t){if(t.which===r)t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||L();else if(h)switch(t.which){case o:t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||T();break;case i:return j(-d,{index:e.slide()});case s:return j(d,{index:e.slide()})}};e.on("activate",w),e.on("destroy",function(){removeEventListener("resize",A,!1),document.removeEventListener("keydown",N,!1)}),e.on("overview",L),document.addEventListener("keydown",N,!1)}}},{"insert-css":61}],11:[function(e,t,n){t.exports=function(e){return function(t){var n=document.createElement("div"),r=document.createElement("div"),o="vertical"===e?"height":"width";n.className="bespoke-progress-parent",r.className="bespoke-progress-bar",n.appendChild(r),t.parent.appendChild(n),t.on("activate",function(e){r.style[o]=100*e.index/(t.slides.length-1)+"%"})}}},{}],12:[function(e,t,n){t.exports=function(e){return function(t){var n=t.parent,r=t.slides[0],o=r.offsetHeight,i=r.offsetWidth,s="zoom"===e||"zoom"in n.style&&"transform"!==e,c=function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",e.parentNode.insertBefore(t,e),t.appendChild(e),t},a=s?t.slides:t.slides.map(c),l=function(e){var t="Moz Webkit O ms".split(" ");return t.reduce(function(t,r){return r+e in n.style?r+e:t},e.toLowerCase())}("Transform"),u=s?function(e,t){t.style.zoom=e}:function(e,t){t.style[l]="scale("+e+")"},f=function(){var e=n.offsetWidth/i,t=n.offsetHeight/o;a.forEach(u.bind(null,Math.min(e,t)))};window.addEventListener("resize",f),f()}}},{}],13:[function(e,t,n){var r=function(e,t){var n=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),r=[].filter.call("string"==typeof e.slides?n.querySelectorAll(e.slides):e.slides||n.children,function(e){return"SCRIPT"!==e.nodeName}),o=r[0],i={},s=function(e,t){r[e]&&(f("deactivate",p(o,t)),o=r[e],f("activate",p(o,t)))},c=function(e,t){return arguments.length?void(f("slide",p(r[e],t))&&s(e,t)):r.indexOf(o)},a=function(e,t){var n=r.indexOf(o)+e;f(e>0?"next":"prev",p(o,t))&&s(n,t)},l=function(e,t){return(i[e]||(i[e]=[])).push(t),u.bind(null,e,t)},u=function(e,t){i[e]=(i[e]||[]).filter(function(e){return e!==t})},f=function(e,t){return(i[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},p=function(e,t){return t=t||{},t.index=r.indexOf(e),t.slide=e,t},d={on:l,off:u,fire:f,slide:c,next:a.bind(null,1),prev:a.bind(null,-1),parent:n,slides:r};return(t||[]).forEach(function(e){e(d)}),s(0),d};t.exports={from:r}},{}],14:[function(e,t,n){"use strict";var r,o=e("es5-ext/object/assign"),i=e("es5-ext/object/normalize-options"),s=e("es5-ext/object/is-callable"),c=e("es5-ext/string/#/contains");r=t.exports=function(e,t){var n,r,s,a,l;return arguments.length<2||"string"!=typeof e?(a=t,t=e,e=null):a=arguments[2],null==e?(n=s=!0,r=!1):(n=c.call(e,"c"),r=c.call(e,"e"),s=c.call(e,"w")),l={value:t,configurable:n,enumerable:r,writable:s},a?o(i(a),l):l},r.gs=function(e,t,n){var r,a,l,u;return"string"!=typeof e?(l=n,n=t,t=e,e=null):l=arguments[3],null==t?t=void 0:s(t)?null==n?n=void 0:s(n)||(l=n,n=void 0):(l=t,t=n=void 0),null==e?(r=!0,a=!1):(r=c.call(e,"c"),a=c.call(e,"e")),u={get:t,set:n,configurable:r,enumerable:a},l?o(i(l),u):u}},{"es5-ext/object/assign":36,"es5-ext/object/is-callable":40,"es5-ext/object/normalize-options":46,"es5-ext/string/#/contains":51}],15:[function(e,t,n){"use strict";t.exports=function(e){return e&&9===e.nodeType&&"#document"===e.nodeName||!1}},{}],16:[function(e,t,n){"use strict";t.exports=function(e){return e&&1===e.nodeType&&"string"==typeof e.nodeName||!1}},{}],17:[function(e,t,n){"use strict";var r,o,i=e("es5-ext/object/for-each"),s=e("es5-ext/object/is-plain-object"),c=e("es5-ext/string/#/camel-to-hyphen"),a=e("memoizee/plain"),l=e("../valid-html-document");r=a(function(e){var t=e.head.appendChild(e.createElement("style"));return t.setAttribute("type","text/css"),t},{normalizer:e("memoizee/normalizers/get-1")()}),o=function(e){var t=[];return i(e,function(e,n){t.push(n+" {"),i(e,function(e,n){t.push("\t"+c.call(n)+": "+e+";")}),t.push("}")}),t.join("\n")},t.exports=function(e){l(this),s(e)&&(e=o(e)),r(this).appendChild(this.createTextNode(e+"\n"))}},{"../valid-html-document":19,"es5-ext/object/for-each":39,"es5-ext/object/is-plain-object":41,"es5-ext/string/#/camel-to-hyphen":50,"memoizee/normalizers/get-1":67,"memoizee/plain":68}],18:[function(e,t,n){"use strict";var r=e("../document/is-document"),o=e("../element/is-element");t.exports=function(e){return r(e)&&o(e.head)}},{"../document/is-document":15,"../element/is-element":16}],19:[function(e,t,n){"use strict";var r=e("./is-html-document");t.exports=function(e){if(!r(e))throw new TypeError(e+" is not a HTMLDocument");return e}},{"./is-html-document":18}],20:[function(e,t,n){"use strict";var r=e("../../number/to-pos-integer"),o=e("../../object/valid-value"),i=Array.prototype.indexOf,s=Object.prototype.hasOwnProperty,c=Math.abs,a=Math.floor;t.exports=function(e){var t,n,l,u;if(e===e)return i.apply(this,arguments);for(n=r(o(this).length),l=arguments[1],l=isNaN(l)?0:l>=0?a(l):r(this.length)-a(c(l)),t=l;t<n;++t)if(s.call(this,t)&&(u=this[t],u!==u))return t;return-1}},{"../../number/to-pos-integer":34,"../../object/valid-value":49}],21:[function(e,t,n){"use strict";t.exports=e("./is-implemented")()?Array.from:e("./shim")},{"./is-implemented":22,"./shim":23}],22:[function(e,t,n){"use strict";t.exports=function(){var e,t,n=Array.from;return"function"==typeof n&&(e=["raz","dwa"],t=n(e),Boolean(t&&t!==e&&"dwa"===t[1]))}},{}],23:[function(e,t,n){"use strict";var r=e("es6-symbol").iterator,o=e("../../function/is-arguments"),i=e("../../function/is-function"),s=e("../../number/to-pos-integer"),c=e("../../object/valid-callable"),a=e("../../object/valid-value"),l=e("../../string/is-string"),u=Array.isArray,f=Function.prototype.call,p={configurable:!0,enumerable:!0,writable:!0,value:null},d=Object.defineProperty;t.exports=function(e){var t,n,v,h,b,m,y,g,x,w,k=arguments[1],j=arguments[2];if(e=Object(a(e)),null!=k&&c(k),this&&this!==Array&&i(this))t=this;else{if(!k){if(o(e))return b=e.length,1!==b?Array.apply(null,e):(h=new Array(1),h[0]=e[0],h);if(u(e)){for(h=new Array(b=e.length),n=0;n<b;++n)h[n]=e[n];return h}}h=[]}if(!u(e))if(void 0!==(x=e[r])){for(y=c(x).call(e),t&&(h=new t),g=y.next(),n=0;!g.done;)w=k?f.call(k,j,g.value,n):g.value,t?(p.value=w,d(h,n,p)):h[n]=w,g=y.next(),++n;b=n}else if(l(e)){for(b=e.length,t&&(h=new t),n=0,v=0;n<b;++n)w=e[n],n+1<b&&(m=w.charCodeAt(0),m>=55296&&m<=56319&&(w+=e[++n])),w=k?f.call(k,j,w,v):w,t?(p.value=w,d(h,v,p)):h[v]=w,++v;b=v}if(void 0===b)for(b=s(e.length),t&&(h=new t(b)),n=0;n<b;++n)w=k?f.call(k,j,e[n],n):e[n],t?(p.value=w,d(h,n,p)):h[n]=w;return t&&(p.value=null,h.length=b),h}},{"../../function/is-arguments":27,"../../function/is-function":28,"../../number/to-pos-integer":34,"../../object/valid-callable":48,"../../object/valid-value":49,"../../string/is-string":54,"es6-symbol":55}],24:[function(e,t,n){"use strict";var r=e("./from"),o=Array.isArray;t.exports=function(e){return o(e)?e:r(e)}},{"./from":21}],25:[function(e,t,n){"use strict";var r=e("../object/assign"),o=Error.captureStackTrace;n=t.exports=function(e){var t=new Error,i=arguments[1],s=arguments[2];return null==s&&i&&"object"==typeof i&&(s=i,i=null),null!=s&&r(t,s),t.message=String(e),null!=i&&(t.code=String(i)),o&&o(t,n),t}},{"../object/assign":36}],26:[function(e,t,n){"use strict";var r,o,i,s,c=e("../number/to-pos-integer"),a=function(e,t){};try{Object.defineProperty(a,"length",{configurable:!0,writable:!1,enumerable:!1,value:1})}catch(e){}1===a.length?(r={configurable:!0,writable:!1,enumerable:!1},o=Object.defineProperty,t.exports=function(e,t){return t=c(t),e.length===t?e:(r.value=t,o(e,"length",r))}):(s=e("../object/mixin"),i=function(){var e=[];return function(t){var n,r=0;if(e[t])return e[t];for(n=[];t--;)n.push("a"+(++r).toString(36));return new Function("fn","return function ("+n.join(", ")+") { return fn.apply(this, arguments); };")}}(),t.exports=function(e,t){var n;if(t=c(t),e.length===t)return e;n=i(t)(e);try{s(n,e)}catch(e){}return n})},{"../number/to-pos-integer":34,"../object/mixin":45}],27:[function(e,t,n){"use strict";var r=Object.prototype.toString,o=r.call(function(){return arguments}());t.exports=function(e){return r.call(e)===o}},{}],28:[function(e,t,n){"use strict";var r=Object.prototype.toString,o=r.call(e("./noop"));t.exports=function(e){return"function"==typeof e&&r.call(e)===o}},{"./noop":29}],29:[function(e,t,n){"use strict";t.exports=function(){}},{}],30:[function(e,t,n){"use strict";t.exports=e("./is-implemented")()?Math.sign:e("./shim")},{"./is-implemented":31,"./shim":32}],31:[function(e,t,n){"use strict";t.exports=function(){var e=Math.sign;return"function"==typeof e&&(1===e(10)&&e(-20)===-1)}},{}],32:[function(e,t,n){"use strict";t.exports=function(e){return e=Number(e),isNaN(e)||0===e?e:e>0?1:-1}},{}],33:[function(e,t,n){"use strict";var r=e("../math/sign"),o=Math.abs,i=Math.floor;t.exports=function(e){return isNaN(e)?0:(e=Number(e),0!==e&&isFinite(e)?r(e)*i(o(e)):e)}},{"../math/sign":30}],34:[function(e,t,n){"use strict";var r=e("./to-integer"),o=Math.max;t.exports=function(e){return o(0,r(e))}},{"./to-integer":33}],35:[function(e,t,n){"use strict";var r=e("./valid-callable"),o=e("./valid-value"),i=Function.prototype.bind,s=Function.prototype.call,c=Object.keys,a=Object.prototype.propertyIsEnumerable;t.exports=function(e,t){return function(n,l){var u,f=arguments[2],p=arguments[3];return n=Object(o(n)),r(l),u=c(n),p&&u.sort("function"==typeof p?i.call(p,n):void 0),"function"!=typeof e&&(e=u[e]),s.call(e,u,function(e,r){return a.call(n,e)?s.call(l,f,n[e],e,n,r):t})}}},{"./valid-callable":48,"./valid-value":49}],36:[function(e,t,n){"use strict";t.exports=e("./is-implemented")()?Object.assign:e("./shim")},{"./is-implemented":37,"./shim":38}],37:[function(e,t,n){"use strict";t.exports=function(){var e,t=Object.assign;return"function"==typeof t&&(e={foo:"raz"},t(e,{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")}},{}],38:[function(e,t,n){"use strict";var r=e("../keys"),o=e("../valid-value"),i=Math.max;t.exports=function(e,t){var n,s,c,a=i(arguments.length,2);for(e=Object(o(e)),c=function(r){try{e[r]=t[r]}catch(e){n||(n=e)}},s=1;s<a;++s)t=arguments[s],r(t).forEach(c);if(void 0!==n)throw n;return e}},{"../keys":42,"../valid-value":49}],39:[function(e,t,n){"use strict";t.exports=e("./_iterate")("forEach")},{"./_iterate":35}],40:[function(e,t,n){"use strict";t.exports=function(e){return"function"==typeof e}},{}],41:[function(e,t,n){"use strict";var r=Object.getPrototypeOf,o=Object.prototype,i=o.toString,s=Object().toString();t.exports=function(e){var t,n;return!(!e||"object"!=typeof e||i.call(e)!==s)&&(t=r(e),null===t?(n=e.constructor,"function"!=typeof n||n.prototype!==e):t===o||null===r(t))}},{}],42:[function(e,t,n){"use strict";t.exports=e("./is-implemented")()?Object.keys:e("./shim")},{"./is-implemented":43,"./shim":44}],43:[function(e,t,n){"use strict";t.exports=function(){try{return Object.keys("primitive"),!0}catch(e){return!1}}},{}],44:[function(e,t,n){"use strict";var r=Object.keys;t.exports=function(e){return r(null==e?e:Object(e))}},{}],45:[function(e,t,n){"use strict";var r=e("./valid-value"),o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols;t.exports=function(e,t){var n,a=Object(r(t));if(e=Object(r(e)),s(a).forEach(function(r){try{o(e,r,i(t,r))}catch(e){n=e}}),"function"==typeof c&&c(a).forEach(function(r){try{o(e,r,i(t,r))}catch(e){n=e}}),void 0!==n)throw n;return e}},{"./valid-value":49}],46:[function(e,t,n){"use strict";var r=Array.prototype.forEach,o=Object.create,i=function(e,t){var n;for(n in e)t[n]=e[n]};t.exports=function(e){var t=o(null);return r.call(arguments,function(e){null!=e&&i(Object(e),t)}),t}},{}],47:[function(e,t,n){"use strict";var r=Array.prototype.forEach,o=Object.create;t.exports=function(e){var t=o(null);return r.call(arguments,function(e){t[e]=!0}),t}},{}],48:[function(e,t,n){"use strict";t.exports=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function");return e}},{}],49:[function(e,t,n){"use strict";t.exports=function(e){if(null==e)throw new TypeError("Cannot use null or undefined");return e}},{}],50:[function(e,t,n){"use strict";var r=String.prototype.replace,o=/([A-Z])/g;t.exports=function(){var e=r.call(this,o,"-$1").toLowerCase();return"-"===e[0]&&(e=e.slice(1)),e}},{}],51:[function(e,t,n){"use strict";t.exports=e("./is-implemented")()?String.prototype.contains:e("./shim")},{"./is-implemented":52,"./shim":53}],52:[function(e,t,n){"use strict";var r="razdwatrzy";t.exports=function(){return"function"==typeof r.contains&&(r.contains("dwa")===!0&&r.contains("foo")===!1)}},{}],53:[function(e,t,n){"use strict";var r=String.prototype.indexOf;t.exports=function(e){return r.call(this,e,arguments[1])>-1}},{}],54:[function(e,t,n){"use strict";var r=Object.prototype.toString,o=r.call("");t.exports=function(e){return"string"==typeof e||e&&"object"==typeof e&&(e instanceof String||r.call(e)===o)||!1}},{}],55:[function(e,t,n){"use strict";t.exports=e("./is-implemented")()?Symbol:e("./polyfill")},{"./is-implemented":56,"./polyfill":58}],56:[function(e,t,n){"use strict";var r={object:!0,symbol:!0};t.exports=function(){var e;if("function"!=typeof Symbol)return!1;e=Symbol("test symbol");try{String(e)}catch(e){return!1}return!!r[typeof Symbol.iterator]&&(!!r[typeof Symbol.toPrimitive]&&!!r[typeof Symbol.toStringTag])}},{}],57:[function(e,t,n){"use strict";t.exports=function(e){return!!e&&("symbol"==typeof e||!!e.constructor&&("Symbol"===e.constructor.name&&"Symbol"===e[e.constructor.toStringTag]))}},{}],58:[function(e,t,n){"use strict";var r,o,i,s,c=e("d"),a=e("./validate-symbol"),l=Object.create,u=Object.defineProperties,f=Object.defineProperty,p=Object.prototype,d=l(null);if("function"==typeof Symbol){r=Symbol;try{String(r()),s=!0}catch(e){}}var v=function(){var e=l(null);return function(t){for(var n,r,o=0;e[t+(o||"")];)++o;return t+=o||"",e[t]=!0,n="@@"+t,f(p,n,c.gs(null,function(e){r||(r=!0,f(this,n,c(e)),r=!1)})),n}}();i=function(e){if(this instanceof i)throw new TypeError("TypeError: Symbol is not a constructor");return o(e)},t.exports=o=function e(t){var n;if(this instanceof e)throw new TypeError("TypeError: Symbol is not a constructor");return s?r(t):(n=l(i.prototype),t=void 0===t?"":String(t),u(n,{__description__:c("",t),__name__:c("",v(t))}))},u(o,{for:c(function(e){return d[e]?d[e]:d[e]=o(String(e))}),keyFor:c(function(e){var t;a(e);for(t in d)if(d[t]===e)return t}),hasInstance:c("",r&&r.hasInstance||o("hasInstance")),isConcatSpreadable:c("",r&&r.isConcatSpreadable||o("isConcatSpreadable")),iterator:c("",r&&r.iterator||o("iterator")),match:c("",r&&r.match||o("match")),replace:c("",r&&r.replace||o("replace")),search:c("",r&&r.search||o("search")),species:c("",r&&r.species||o("species")),split:c("",r&&r.split||o("split")),toPrimitive:c("",r&&r.toPrimitive||o("toPrimitive")),toStringTag:c("",r&&r.toStringTag||o("toStringTag")),unscopables:c("",r&&r.unscopables||o("unscopables"))}),u(i.prototype,{constructor:c(o),toString:c("",function(){return this.__name__})}),u(o.prototype,{toString:c(function(){return"Symbol ("+a(this).__description__+")"}),valueOf:c(function(){return a(this)})}),f(o.prototype,o.toPrimitive,c("",function(){var e=a(this);return"symbol"==typeof e?e:e.toString()})),f(o.prototype,o.toStringTag,c("c","Symbol")),f(i.prototype,o.toStringTag,c("c",o.prototype[o.toStringTag])),f(i.prototype,o.toPrimitive,c("c",o.prototype[o.toPrimitive]))},{"./validate-symbol":59,d:14}],59:[function(e,t,n){"use strict";var r=e("./is-symbol");t.exports=function(e){if(!r(e))throw new TypeError(e+" is not a symbol");return e}},{"./is-symbol":57}],60:[function(e,t,n){"use strict";var r,o,i,s,c,a,l,u=e("d"),f=e("es5-ext/object/valid-callable"),p=Function.prototype.apply,d=Function.prototype.call,v=Object.create,h=Object.defineProperty,b=Object.defineProperties,m=Object.prototype.hasOwnProperty,y={configurable:!0,enumerable:!1,writable:!0};r=function(e,t){var n;return f(t),m.call(this,"__ee__")?n=this.__ee__:(n=y.value=v(null),h(this,"__ee__",y),y.value=null),n[e]?"object"==typeof n[e]?n[e].push(t):n[e]=[n[e],t]:n[e]=t,this},o=function(e,t){var n,o;return f(t),o=this,r.call(this,e,n=function(){i.call(o,e,n),p.call(t,this,arguments)}),n.__eeOnceListener__=t,this},i=function(e,t){var n,r,o,i;if(f(t),!m.call(this,"__ee__"))return this;if(n=this.__ee__,!n[e])return this;if(r=n[e],"object"==typeof r)for(i=0;o=r[i];++i)o!==t&&o.__eeOnceListener__!==t||(2===r.length?n[e]=r[i?0:1]:r.splice(i,1));else r!==t&&r.__eeOnceListener__!==t||delete n[e];return this},s=function(e){var t,n,r,o,i;if(m.call(this,"__ee__")&&(o=this.__ee__[e]))if("object"==typeof o){for(n=arguments.length,i=new Array(n-1),t=1;t<n;++t)i[t-1]=arguments[t];for(o=o.slice(),t=0;r=o[t];++t)p.call(r,this,i)}else switch(arguments.length){case 1:d.call(o,this);break;case 2:d.call(o,this,arguments[1]);break;case 3:d.call(o,this,arguments[1],arguments[2]);break;default:for(n=arguments.length,i=new Array(n-1),t=1;t<n;++t)i[t-1]=arguments[t];p.call(o,this,i)}},c={on:r,once:o,off:i,emit:s},a={on:u(r),once:u(o),off:u(i),emit:u(s)},l=b({},a),t.exports=n=function(e){return null==e?v(l):b(Object(e),a)},n.methods=c},{d:14,"es5-ext/object/valid-callable":48}],61:[function(e,t,n){var r={};t.exports=function(e,t){if(!r[e]){r[e]=!0;var n=document.createElement("style");n.setAttribute("type","text/css"),"textContent"in n?n.textContent=e:n.styleSheet.cssText=e;var o=document.getElementsByTagName("head")[0];t&&t.prepend?o.insertBefore(n,o.childNodes[0]):o.appendChild(n)}}},{}],62:[function(e,t,n){"use strict";var r=e("es5-ext/error/custom"),o=e("es5-ext/function/_define-length"),i=e("d"),s=e("event-emitter").methods,c=e("./resolve-resolve"),a=e("./resolve-normalize"),l=Function.prototype.apply,u=Function.prototype.call,f=Object.create,p=Object.prototype.hasOwnProperty,d=Object.defineProperties,v=s.on,h=s.emit;t.exports=function(e,t,n){var s,b,m,y,g,x,w,k,j,O,E,_,S,C=f(null);return b=t!==!1?t:isNaN(e.length)?1:e.length,n.normalizer&&(k=a(n.normalizer),m=k.get,y=k.set,g=k.delete,x=k.clear),null!=n.resolvers&&(S=c(n.resolvers)),_=m?o(function(t){var n,o,i=arguments;if(S&&(i=S(i)),n=m(i),null!==n&&p.call(C,n))return j&&s.emit("get",n,i,this),C[n];if(o=1===i.length?u.call(e,this,i[0]):l.call(e,this,i),null===n){if(n=m(i),null!==n)throw r("Circular invocation","CIRCULAR_INVOCATION");n=y(i)}else if(p.call(C,n))throw r("Circular invocation","CIRCULAR_INVOCATION");return C[n]=o,O&&s.emit("set",n),o},b):0===t?function(){var t;
if(p.call(C,"data"))return j&&s.emit("get","data",arguments,this),C.data;if(t=arguments.length?l.call(e,this,arguments):u.call(e,this),p.call(C,"data"))throw r("Circular invocation","CIRCULAR_INVOCATION");return C.data=t,O&&s.emit("set","data"),t}:function(t){var n,o,i=arguments;if(S&&(i=S(arguments)),o=String(i[0]),p.call(C,o))return j&&s.emit("get",o,i,this),C[o];if(n=1===i.length?u.call(e,this,i[0]):l.call(e,this,i),p.call(C,o))throw r("Circular invocation","CIRCULAR_INVOCATION");return C[o]=n,O&&s.emit("set",o),n},s={original:e,memoized:_,get:function(e){return S&&(e=S(e)),m?m(e):String(e[0])},has:function(e){return p.call(C,e)},delete:function(e){var t;p.call(C,e)&&(g&&g(e),t=C[e],delete C[e],E&&s.emit("delete",e,t))},clear:function(){var e=C;x&&x(),C=f(null),s.emit("clear",e)},on:function(e,t){return"get"===e?j=!0:"set"===e?O=!0:"delete"===e&&(E=!0),v.call(this,e,t)},emit:h,updateEnv:function(){e=s.original}},w=m?o(function(e){var t,n=arguments;S&&(n=S(n)),t=m(n),null!==t&&s.delete(t)},b):0===t?function(){return s.delete("data")}:function(e){return S&&(e=S(arguments)[0]),s.delete(e)},d(_,{__memoized__:i(!0),delete:i(w),clear:i(s.clear)}),s}},{"./resolve-normalize":65,"./resolve-resolve":66,d:14,"es5-ext/error/custom":25,"es5-ext/function/_define-length":26,"event-emitter":60}],63:[function(e,t,n){"use strict"},{}],64:[function(e,t,n){"use strict";var r=e("es5-ext/number/to-pos-integer");t.exports=function(e,t,n){var o;return isNaN(e)?(o=t,o>=0?n&&o?o-1:o:1):e!==!1&&r(e)}},{"es5-ext/number/to-pos-integer":34}],65:[function(e,t,n){"use strict";var r=e("es5-ext/object/valid-callable");t.exports=function(e){var t;return"function"==typeof e?{set:e,get:e}:(t={get:r(e.get)},void 0!==e.set?(t.set=r(e.set),t.delete=r(e.delete),t.clear=r(e.clear),t):(t.set=t.get,t))}},{"es5-ext/object/valid-callable":48}],66:[function(e,t,n){"use strict";var r,o=e("es5-ext/array/to-array"),i=e("es5-ext/object/valid-callable"),s=Array.prototype.slice;r=function(e){return this.map(function(t,n){return t?t(e[n]):e[n]}).concat(s.call(e,this.length))},t.exports=function(e){return e=o(e),e.forEach(function(e){null!=e&&i(e)}),r.bind(e)}},{"es5-ext/array/to-array":24,"es5-ext/object/valid-callable":48}],67:[function(e,t,n){"use strict";var r=e("es5-ext/array/#/e-index-of");t.exports=function(){var e=0,t=[],n=[];return{get:function(e){var o=r.call(t,e[0]);return o===-1?null:n[o]},set:function(r){return t.push(r[0]),n.push(++e),e},delete:function(e){var o=r.call(n,e);o!==-1&&(t.splice(o,1),n.splice(o,1))},clear:function(){t=[],n=[]}}}},{"es5-ext/array/#/e-index-of":20}],68:[function(e,t,n){"use strict";var r=e("es5-ext/object/valid-callable"),o=e("es5-ext/object/for-each"),i=e("./lib/registered-extensions"),s=e("./lib/configure-map"),c=e("./lib/resolve-length"),a=Object.prototype.hasOwnProperty;t.exports=function e(t){var n,l,u;return r(t),n=Object(arguments[1]),a.call(t,"__memoized__")&&!n.force?t:(l=c(n.length,t.length,n.async&&i.async),u=s(t,l,n),o(i,function(e,t){n[t]&&e(n[t],u,n)}),e.__profiler__&&e.__profiler__(u),u.updateEnv(),u.memoized)}},{"./lib/configure-map":62,"./lib/registered-extensions":63,"./lib/resolve-length":64,"es5-ext/object/for-each":39,"es5-ext/object/valid-callable":48}],69:[function(e,t,n){"use strict";var r=function(e){return e.charCodeAt(0)};t.exports=function(e){var t,n,o,i,s,c,a=new Array(e.length),l="CHAR";for(i=0,s=0;i<=e.length;i++)switch(c=e.charCodeAt(i),l){case"CHAR":switch(c){case r("%"):t=0,n=0,l="HEX0";break;default:a[s++]=c}break;case"HEX0":if(l="HEX1",o=c,r("0")<=c&&c<=r("9"))t=c-r("0");else if(r("a")<=c&&c<=r("f"))t=c-r("a")+10;else{if(!(r("A")<=c&&c<=r("F"))){a[s++]=r("%"),a[s++]=c,l="CHAR";break}t=c-r("A")+10}break;case"HEX1":if(l="CHAR",r("0")<=c&&c<=r("9"))n=c-r("0");else if(r("a")<=c&&c<=r("f"))n=c-r("a")+10;else{if(!(r("A")<=c&&c<=r("F"))){a[s++]=r("%"),a[s++]=o,a[s++]=c;break}n=c-r("A")+10}a[s++]=16*t+n}return a.slice(0,s-1)}},{}],70:[function(e,t,n){"use strict";var r=e("./lib/unescape-buffer"),o=Array.isArray,i=Object.prototype.hasOwnProperty,s=Object.create,c=String.fromCharCode,a=/\+/g,l=function(e){try{return decodeURIComponent(e)}catch(t){return c.apply(null,r(e))}};t.exports=function(e){var t,n,r,c,u,f,p,d=arguments[1]||"&",v=arguments[2]||"=",h=arguments[3],b=s(null);if(null==e)return b;if(e=String(e),0===e.length)return b;e=e.split(d);var m=1e3;h&&!isNaN(h.maxKeys)&&(m=Number(h.maxKeys));var y=e.length;for(m>0&&y>m&&(y=m),t=0;t<y;++t)n=e[t].replace(a,"%20"),r=n.indexOf(v),r>=0?(c=n.substr(0,r),u=n.substr(r+1)):(c=n,u=""),f=l(c),p=l(u),i.call(b,f)?o(b[f])?b[f].push(p):b[f]=[b[f],p]:b[f]=p;return b}},{"./lib/unescape-buffer":69}],71:[function(e,t,n){"use strict";var r=Array.isArray,o=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};t.exports=function(e){var t=arguments[1]||"&",n=arguments[2]||"=";if(!e||"function"!=typeof e&&"object"!=typeof e)throw new TypeError(e+" is not an object");var i,s,c,a,l,u=Object.keys(e),f=[];for(i=0;i<u.length;i++)if(s=u[i],c=e[s],a=encodeURIComponent(s)+n,r(c))for(l=0;l<c.length;l++)f.push(a+encodeURIComponent(o(c[l])));else f.push(a+encodeURIComponent(o(c)));return f.join(t)}},{}],72:[function(e,t,n){"use strict";var r=e("bespoke"),o=e("bespoke-bullets"),i=e("bespoke-classes"),s=e("bespoke-extern"),c=e("bespoke-hash"),a=e("bespoke-nav"),l=e("bespoke-notes/dom"),u=e("bespoke-onstage"),f=e("bespoke-overview"),p=e("bespoke-progress"),d=e("bespoke-scale");r.from({parent:"article.deck",slides:"section"},[i(),d(),a(),f(),o(".build, .build-items > *:not(.build-items)"),l(),u(),p(),c(),s(r)])},{bespoke:13,"bespoke-bullets":1,"bespoke-classes":2,"bespoke-extern":3,"bespoke-hash":4,"bespoke-nav":7,"bespoke-notes/dom":8,"bespoke-onstage":9,"bespoke-overview":10,"bespoke-progress":11,"bespoke-scale":12}]},{},[72]);