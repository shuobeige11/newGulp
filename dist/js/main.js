!function t(e,n,i){function r(s,a){if(!n[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=n[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return r(n?n:t)},c,c.exports,t,e,n,i)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(t,e,n){var i=t("./validate.js"),r=t("./zepto.js");r(".lm_btn").click(function(){var t=i.userName({ele:"name1",message:"投保人信息"}),e=i.cardId({ele:"IDcard",message:"身份证号码"}),n=i.mobile({ele:"phone",message:"手机号码"}),r=i.userName({ele:"name2",message:"被保人信息"}),o=i.birthday({ele:"birthday",message:"被保人"})})},{"./validate.js":2,"./zepto.js":3}],2:[function(t,e,n){e.exports={errClass:"error",selectDom:function(t){var e=document.getElementsByTagName("input"),n="";e=[].slice.apply(e);for(var i=0;i<e.length;i++){var r=e[i].getAttribute("name");if(r==t){n=e[i];break}}return n},events:function(t){this.errClass;t.addEventListener("focus",this.removeClass,!1)},removeClass:function(){var t=this.getAttribute("class"),e=validate.errClass;if(this.value="",t.match(e)){var n=this.getAttribute("class").split(e);this.setAttribute("class",n[0])}},errClassFun:function(t){var e=t.getAttribute("class").match(this.errClass);if(!e){var n=t.getAttribute("class")+" "+this.errClass;t.setAttribute("class",n)}},errMes:function(t,e){return this.errClassFun(t),t.value="请输入正确的"+e.message,!1},userName:function(t){var e=this.selectDom(t.ele);return this.events(e),this.empty(t,e)?/\.|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\-|\+\{|\}|\<|\>|\?|\/|\\/g.test(e.value)?this.errMes(e,t):!0:!1},cardId:function(t){var e=this.selectDom(t.ele),n=e.value;if(this.events(e),!this.empty(t,e))return!1;if(!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(n))return this.errMes(e,t);if(18==n.length){n=n.split("");for(var i=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],r=[1,0,"X",9,8,7,6,5,4,3,2],o=0,s=0,a=0,u=0;17>u;u++)s=n[u],a=i[u],o+=s*a;r[o%11];if(r[o%11]!=n[17])return this.errMes(e,t)}return!0},mobile:function(t){var e=this.selectDom(t.ele);return this.events(e),this.empty(t,e)?/^1(3|5|7|8)\d{9}/g.test(e.value)?!0:this.errMes(e,t):!1},email:function(t){var e=this.selectDom(t.ele);return this.events(e),this.empty(t,e)?/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e.value)?!0:this.errMes(e,t):!1},birthday:function(t){var e=this.selectDom(t.ele);return this.events(e),this.empty(t,e)?void 0:!1},empty:function(t,e){var n=e.value;return n?!0:(this.errClassFun(e),e.value=t.message+"不能为空",t.required=!1,!1)}}},{}],3:[function(t,e,n){var i=function(){function t(t){return null==t?String(t):V[Y.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function s(t){return"number"==typeof t.length}function a(t){return S.call(t,function(t){return null!=t})}function u(t){return t.length>0?C.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in z?z[t]:z[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||k[c(t)]?e:e+"px"}function h(t){var e,n;return M[t]||(e=O.createElement(t),O.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),M[t]=n),M[t]}function p(t){return"children"in t?P.call(t.children):C.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e){var n,i=t?t.length:0;for(n=0;i>n;n++)this[n]=t[n];this.length=i,this.selector=e||""}function m(t,e,n){for(E in e)n&&(o(e[E])||K(e[E]))?(o(e[E])&&!o(t[E])&&(t[E]={}),K(e[E])&&!K(t[E])&&(t[E]=[]),m(t[E],e[E],n)):e[E]!==w&&(t[E]=e[E])}function v(t,e){return null==e?C(t):C(t).filter(e)}function g(t,n,i,r){return e(n)?n.call(t,i,r):n}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function x(t,e){var n=t.className||"",i=n&&n.baseVal!==w;return e===w?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function F(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?C.parseJSON(t):t):t}catch(e){return t}}function b(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)b(t.childNodes[n],e)}var w,E,C,T,D,A,j=[],N=j.concat,S=j.filter,P=j.slice,O=window.document,M={},z={},k={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},L=/^\s*<(\w+|!)[^>]*>/,$=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,q=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,R=/^(?:body|html)$/i,_=/([A-Z])/g,I=["val","css","html","text","data","width","height","offset"],Z=["after","prepend","before","append"],W=O.createElement("table"),X=O.createElement("tr"),B={tr:O.createElement("tbody"),tbody:W,thead:W,tfoot:W,td:X,th:X,"*":O.createElement("div")},H=/complete|loaded|interactive/,U=/^[\w-]*$/,V={},Y=V.toString,G={},J=O.createElement("div"),Q={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},K=Array.isArray||function(t){return t instanceof Array};return G.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=J).appendChild(t),i=~G.qsa(r,e).indexOf(t),o&&J.removeChild(t),i},D=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},A=function(t){return S.call(t,function(e,n){return t.indexOf(e)==n})},G.fragment=function(t,e,n){var i,r,s;return $.test(t)&&(i=C(O.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(q,"<$1></$2>")),e===w&&(e=L.test(t)&&RegExp.$1),e in B||(e="*"),s=B[e],s.innerHTML=""+t,i=C.each(P.call(s.childNodes),function(){s.removeChild(this)})),o(n)&&(r=C(i),C.each(n,function(t,e){I.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},G.Z=function(t,e){return new d(t,e)},G.isZ=function(t){return t instanceof G.Z},G.init=function(t,n){var i;if(!t)return G.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&L.test(t))i=G.fragment(t,RegExp.$1,n),t=null;else{if(n!==w)return C(n).find(t);i=G.qsa(O,t)}else{if(e(t))return C(O).ready(t);if(G.isZ(t))return t;if(K(t))i=a(t);else if(r(t))i=[t],t=null;else if(L.test(t))i=G.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==w)return C(n).find(t);i=G.qsa(O,t)}}return G.Z(i,t)},C=function(t,e){return G.init(t,e)},C.extend=function(t){var e,n=P.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){m(t,n,e)}),t},G.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],o=i||r?e.slice(1):e,s=U.test(o);return t.getElementById&&s&&i?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:P.call(s&&!i&&t.getElementsByClassName?r?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},C.contains=O.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},C.type=t,C.isFunction=e,C.isWindow=n,C.isArray=K,C.isPlainObject=o,C.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},C.inArray=function(t,e,n){return j.indexOf.call(e,t,n)},C.camelCase=D,C.trim=function(t){return null==t?"":String.prototype.trim.call(t)},C.uuid=0,C.support={},C.expr={},C.noop=function(){},C.map=function(t,e){var n,i,r,o=[];if(s(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&o.push(n);else for(r in t)n=e(t[r],r),null!=n&&o.push(n);return u(o)},C.each=function(t,e){var n,i;if(s(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},C.grep=function(t,e){return S.call(t,e)},window.JSON&&(C.parseJSON=JSON.parse),C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){V["[object "+e+"]"]=e.toLowerCase()}),C.fn={constructor:G.Z,length:0,forEach:j.forEach,reduce:j.reduce,push:j.push,sort:j.sort,splice:j.splice,indexOf:j.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=G.isZ(e)?e.toArray():e;return N.apply(G.isZ(this)?this.toArray():this,n)},map:function(t){return C(C.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return C(P.apply(this,arguments))},ready:function(t){return H.test(O.readyState)&&O.body?t(C):O.addEventListener("DOMContentLoaded",function(){t(C)},!1),this},get:function(t){return t===w?P.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return j.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):C(S.call(this,function(e){return G.matches(e,t)}))},add:function(t,e){return C(A(this.concat(C(t,e))))},is:function(t){return this.length>0&&G.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==w)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):s(t)&&e(t.item)?P.call(t):C(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return C(n)},has:function(t){return this.filter(function(){return r(t)?C.contains(this,t):C(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:C(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:C(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?C(t).filter(function(){var t=this;return j.some.call(n,function(e){return C.contains(e,t)})}):1==this.length?C(G.qsa(this[0],t)):this.map(function(){return G.qsa(this,t)}):C()},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=C(t));n&&!(r?r.indexOf(n)>=0:G.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return C(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=C.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return v(e,t)},parent:function(t){return v(A(this.pluck("parentNode")),t)},children:function(t){return v(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||P.call(this.childNodes)})},siblings:function(t){return v(this.map(function(t,e){return S.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return C.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=C(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){C(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){C(this[0]).before(t=C(t));for(var e;(e=t.children()).length;)t=e.first();C(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=C(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){C(this).replaceWith(C(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=C(this);(t===w?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return C(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return C(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;C(this).empty().append(g(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=g(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(r(t))for(E in t)y(this,E,t[E]);else y(this,t,g(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:w},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){y(this,t)},this)})},prop:function(t,e){return t=Q[t]||t,1 in arguments?this.each(function(n){this[t]=g(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(_,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?F(i):w},val:function(t){return 0 in arguments?this.each(function(e){this.value=g(this,t,e,this.value)}):this[0]&&(this[0].multiple?C(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=C(this),i=g(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;if(!C.contains(O.documentElement,this[0]))return{top:0,left:0};var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i,r=this[0];if(!r)return;if(i=getComputedStyle(r,""),"string"==typeof e)return r.style[D(e)]||i.getPropertyValue(e);if(K(e)){var o={};return C.each(e,function(t,e){o[e]=r.style[D(e)]||i.getPropertyValue(e)}),o}}var s="";if("string"==t(e))n||0===n?s=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(E in e)e[E]||0===e[E]?s+=c(E)+":"+f(E,e[E])+";":this.each(function(){this.style.removeProperty(c(E))});return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(C(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?j.some.call(this,function(t){return this.test(x(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){T=[];var n=x(this),i=g(this,t,e,n);i.split(/\s+/g).forEach(function(t){C(this).hasClass(t)||T.push(t)},this),T.length&&x(this,n+(n?" ":"")+T.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===w)return x(this,"");T=x(this),g(this,t,e,T).split(/\s+/g).forEach(function(t){T=T.replace(l(t)," ")}),x(this,T.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var i=C(this),r=g(this,t,n,x(this));r.split(/\s+/g).forEach(function(t){(e===w?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===w?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===w?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=R.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(C(t).css("margin-top"))||0,n.left-=parseFloat(C(t).css("margin-left"))||0,i.top+=parseFloat(C(e[0]).css("border-top-width"))||0,i.left+=parseFloat(C(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||O.body;t&&!R.test(t.nodeName)&&"static"==C(t).css("position");)t=t.offsetParent;return t})}},C.fn.detach=C.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});C.fn[t]=function(r){var o,s=this[0];return r===w?n(s)?s["inner"+e]:i(s)?s.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){s=C(this),s.css(t,g(this,r,e,s[t]()))})}}),Z.forEach(function(e,n){var i=n%2;C.fn[e]=function(){var e,r,o=C.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:G.fragment(n)}),s=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var a=C.contains(O.documentElement,r);o.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!r)return C(t).remove();r.insertBefore(t,e),a&&b(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},C.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return C(t)[e](this),this}}),G.Z.prototype=d.prototype=C.fn,G.uniq=A,G.deserializeValue=F,C.zepto=G,C}();!function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function n(t,n,i,r){return t.global?e(n||y,i,r):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,i,"ajaxSend",[t,e])}function s(t,e,i,r){var o=i.context,s="success";i.success.call(o,t,s,e),r&&r.resolveWith(o,[t,s,e]),n(i,o,"ajaxSuccess",[e,i,t]),u(s,e,i)}function a(t,e,i,r,o){var s=r.context;r.error.call(s,i,e,t),o&&o.rejectWith(s,[i,e,t]),n(r,s,"ajaxError",[i,r,t||e]),u(e,i,r)}function u(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function c(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==E?"html":t==w?"json":F.test(t)?"script":b.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function p(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function d(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?d(e,u,i,n):e.add(n,u)})}var m,v,g=0,y=window.document,x=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,F=/^(?:text|application)\/javascript/i,b=/^(?:text|application)\/xml/i,w="application/json",E="text/html",C=/^\s*$/,T=y.createElement("a");T.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,r,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"jsonp"+ ++g,l=y.createElement("script"),f=window[c],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,u){clearTimeout(r),t(l).off().remove(),"error"!=o.type&&i?s(i[0],p,e,n):a(null,u||"error",p,e,n),window[c]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),o(p,e)===!1?(h("abort"),p):(window[c]=function(){i=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),y.head.appendChild(l),e.timeout>0&&(r=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:w,xml:"application/xml, text/xml",html:E,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,r,u=t.extend({},e||{}),p=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===u[m]&&(u[m]=t.ajaxSettings[m]);i(u),u.crossDomain||(n=y.createElement("a"),n.href=u.url,n.href=n.href,u.crossDomain=T.protocol+"//"+T.host!=n.protocol+"//"+n.host),u.url||(u.url=window.location.toString()),(r=u.url.indexOf("#"))>-1&&(u.url=u.url.slice(0,r)),h(u);var d=u.dataType,g=/\?.+=\?/.test(u.url);if(g&&(d="jsonp"),u.cache!==!1&&(e&&e.cache===!0||"script"!=d&&"jsonp"!=d)||(u.url=f(u.url,"_="+Date.now())),"jsonp"==d)return g||(u.url=f(u.url,u.jsonp?u.jsonp+"=?":u.jsonp===!1?"":"callback=?")),t.ajaxJSONP(u,p);var x,F=u.accepts[d],b={},w=function(t,e){b[t.toLowerCase()]=[t,e]},E=/^([\w-]+:)\/\//.test(u.url)?RegExp.$1:window.location.protocol,D=u.xhr(),A=D.setRequestHeader;if(p&&p.promise(D),u.crossDomain||w("X-Requested-With","XMLHttpRequest"),w("Accept",F||"*/*"),(F=u.mimeType||F)&&(F.indexOf(",")>-1&&(F=F.split(",",2)[0]),D.overrideMimeType&&D.overrideMimeType(F)),(u.contentType||u.contentType!==!1&&u.data&&"GET"!=u.type.toUpperCase())&&w("Content-Type",u.contentType||"application/x-www-form-urlencoded"),u.headers)for(v in u.headers)w(v,u.headers[v]);if(D.setRequestHeader=w,D.onreadystatechange=function(){if(4==D.readyState){D.onreadystatechange=c,clearTimeout(x);var e,n=!1;if(D.status>=200&&D.status<300||304==D.status||0==D.status&&"file:"==E){d=d||l(u.mimeType||D.getResponseHeader("content-type")),e=D.responseText;try{"script"==d?(0,eval)(e):"xml"==d?e=D.responseXML:"json"==d&&(e=C.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?a(n,"parsererror",D,u,p):s(e,D,u,p)}else a(D.statusText||null,D.status?"error":"abort",D,u,p)}},o(D,u)===!1)return D.abort(),a(null,"abort",D,u,p),D;if(u.xhrFields)for(v in u.xhrFields)try{D[v]=u.xhrFields[v]}catch(j){}var N="async"in u?u.async:!0;D.open(u.type,u.url,N,u.username,u.password);for(v in b)A.apply(D,b[v]);return u.timeout>0&&(x=setTimeout(function(){D.onreadystatechange=c,D.abort(),a(null,"timeout",D,u,p)},u.timeout)),D.send(u.data?u.data:null),D},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,s=e.split(/\s/),a=p(e,n,i),u=a.success;return s.length>1&&(a.url=s[0],r=s[1]),a.success=function(e){o.html(r?t("<div>").html(e.replace(x,"")).find(r):e),u&&u.apply(o,arguments)},t.ajax(a),this};var D=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(D(e)+"="+D(n))},d(i,e,n),i.join("&").replace(/%20/g,"+")}}(i),function(t){var e,n=[];t.fn.remove=function(){return this.each(function(){this.parentNode&&("IMG"===this.tagName&&(n.push(this),this.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",e&&clearTimeout(e),e=setTimeout(function(){n=[]},6e4)),this.parentNode.removeChild(this))})}}(i),function(t){t.Callbacks=function(e){e=t.extend({},e);var n,i,r,o,s,a,u=[],c=!e.once&&[],l=function(t){for(n=e.memory&&t,i=!0,a=o||0,o=0,s=u.length,r=!0;u&&s>a;++a)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}r=!1,u&&(c?c.length&&l(c.shift()):n?u.length=0:f.disable())},f={add:function(){if(u){var i=u.length,a=function(n){t.each(n,function(t,n){"function"==typeof n?e.unique&&f.has(n)||u.push(n):n&&n.length&&"string"!=typeof n&&a(n)})};a(arguments),r?s=u.length:n&&(o=i,l(n))}return this},remove:function(){return u&&t.each(arguments,function(e,n){for(var i;(i=t.inArray(n,u,i))>-1;)u.splice(i,1),r&&(s>=i&&--s,a>=i&&--a)}),this},has:function(e){return!(!u||!(e?t.inArray(e,u)>-1:u.length))},empty:function(){return s=u.length=0,this},disable:function(){return u=c=n=void 0,this},disabled:function(){return!u},lock:function(){return c=void 0,n||f.disable(),this},locked:function(){return!c},fireWith:function(t,e){return!u||i&&!c||(e=e||[],e=[t,e.slice?e.slice():e],r?c.push(e):l(e)),this},fire:function(){return f.fireWith(this,arguments)},fired:function(){return!!i}};return f}}(i),function(t){function e(e,i){var u=e[a],c=u&&r[u];if(void 0===i)return c||n(e);if(c){if(i in c)return c[i];var l=s(i);if(l in c)return c[l]}return o.call(t(e),i)}function n(e,n,o){var u=e[a]||(e[a]=++t.uuid),c=r[u]||(r[u]=i(e));return void 0!==n&&(c[s(n)]=o),c}function i(e){var n={};return t.each(e.attributes||u,function(e,i){0==i.name.indexOf("data-")&&(n[s(i.name.replace("data-",""))]=t.zepto.deserializeValue(i.value))}),n}var r={},o=t.fn.data,s=t.camelCase,a=t.expando="Zepto"+ +new Date,u=[];t.fn.data=function(i,r){return void 0===r?t.isPlainObject(i)?this.each(function(e,r){t.each(i,function(t,e){n(r,t,e)})}):0 in this?e(this[0],i):void 0:this.each(function(){n(this,i,r)})},t.fn.removeData=function(e){return"string"==typeof e&&(e=e.split(/\s+/)),this.each(function(){var n=this[a],i=n&&r[n];i&&t.each(e||i,function(t){delete i[e?s(this):t]})})},["remove","empty"].forEach(function(e){var n=t.fn[e];t.fn[e]=function(){var t=this.find("*");return"remove"===e&&(t=t.add(this)),t.removeData(),n.call(this)}})}(i),function(t){function e(n){var i=[["resolve","done",t.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",t.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",t.Callbacks({memory:1})]],r="pending",o={state:function(){return r},always:function(){return s.done(arguments).fail(arguments),this},then:function(){var n=arguments;return e(function(e){t.each(i,function(i,r){var a=t.isFunction(n[i])&&n[i];s[r[1]](function(){var n=a&&a.apply(this,arguments);if(n&&t.isFunction(n.promise))n.promise().done(e.resolve).fail(e.reject).progress(e.notify);else{var i=this===o?e.promise():this,s=a?[n]:arguments;e[r[0]+"With"](i,s)}})}),n=null}).promise()},promise:function(e){return null!=e?t.extend(e,o):o}},s={};return t.each(i,function(t,e){var n=e[2],a=e[3];o[e[1]]=n.add,a&&n.add(function(){r=a},i[1^t][2].disable,i[2][2].lock),s[e[0]]=function(){return s[e[0]+"With"](this===s?o:this,arguments),this},s[e[0]+"With"]=n.fireWith}),o.promise(s),n&&n.call(s,s),s}var n=Array.prototype.slice;t.when=function(i){var r,o,s,a=n.call(arguments),u=a.length,c=0,l=1!==u||i&&t.isFunction(i.promise)?u:0,f=1===l?i:e(),h=function(t,e,i){return function(o){e[t]=this,i[t]=arguments.length>1?n.call(arguments):o,i===r?f.notifyWith(e,i):--l||f.resolveWith(e,i)}};if(u>1)for(r=new Array(u),o=new Array(u),s=new Array(u);u>c;++c)a[c]&&t.isFunction(a[c].promise)?a[c].promise().done(h(c,s,a)).fail(f.reject).progress(h(c,o,r)):--l;return l||f.resolveWith(s,a),f.promise()},t.Deferred=e}(i),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,s){if(n=i(n),n.ns)var a=r(n.ns);return(v[e(t)]||[]).filter(function(t){return t&&(!n.e||t.e==n.e)&&(!n.ns||a.test(t.ns))&&(!o||e(t.fn)===e(o))&&(!s||t.sel==s)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in x||!!e}function s(t){return F[t]||y&&x[t]||t}function a(n,r,a,u,l,h,p){var d=e(n),m=v[d]||(v[d]=[]);r.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(a);var r=i(e);r.fn=a,r.sel=l,r.e in F&&(a=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?r.fn.apply(this,arguments):void 0}),r.del=h;var d=h||a;r.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},r.i=m.length,m.push(r),"addEventListener"in n&&n.addEventListener(s(r.e),r.proxy,o(r,p))})}function u(t,i,r,a,u){var c=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,r,a).forEach(function(e){delete v[c][e.i],"removeEventListener"in t&&t.removeEventListener(s(e.e),e.proxy,o(e,u))})})}function c(e,n){return!n&&e.isDefaultPrevented||(n||(n=e),t.each(C,function(t,i){var r=n[t];e[t]=function(){return this[i]=b,r&&r.apply(n,arguments)},e[i]=w}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=b)),e}function l(t){var e,n={originalEvent:t};for(e in t)E.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},v={},g={},y="onfocusin"in window,x={focus:"focusin",blur:"focusout"},F={mouseenter:"mouseover",mouseleave:"mouseout"};g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",t.event={add:a,remove:u},t.proxy=function(n,i){var r=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(i,r?r.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(m(i))return r?(r.unshift(n[i],n),t.proxy.apply(null,r)):t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var b=function(){return!0},w=function(){return!1},E=/^([A-Z]|returnValue$|layer[XY]$)/,C={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,r,o){var s,c,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,i,e,o)}),h):(m(n)||d(r)||r===!1||(r=i,i=n,n=f),r!==f&&i!==!1||(r=i,i=f),r===!1&&(r=w),h.each(function(f,h){o&&(s=function(t){return u(h,t.type,r),r.apply(this,arguments)}),n&&(c=function(e){var i,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(i=t.extend(l(e),{currentTarget:o,liveFired:h}),(s||r).apply(o,[i].concat(p.call(arguments,1)))):void 0}),a(h,e,r,i,n,c||s)}))},t.fn.off=function(e,n,i){var r=this;return e&&!m(e)?(t.each(e,function(t,e){r.off(t,n,e)}),r):(m(n)||d(i)||i===!1||(i=n,n=f),i===!1&&(i=w),r.each(function(){u(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){e.type in x&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(s,a){r=l(m(e)?t.Event(e):e),r._args=i,r.target=a,t.each(n(a,e.type||e),function(t,e){return o=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(g[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),c(n)}}(i),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){
n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(i),function(t,e){function n(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function i(t){return r?r+t:t.toLowerCase()}var r,o,s,a,u,c,l,f,h,p,d="",m={Webkit:"webkit",Moz:"",O:"o"},v=document.createElement("div"),g=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,y={};t.each(m,function(t,n){return v.style[t+"TransitionProperty"]!==e?(d="-"+t.toLowerCase()+"-",r=n,!1):void 0}),o=d+"transform",y[s=d+"transition-property"]=y[a=d+"transition-duration"]=y[c=d+"transition-delay"]=y[u=d+"transition-timing-function"]=y[l=d+"animation-name"]=y[f=d+"animation-duration"]=y[p=d+"animation-delay"]=y[h=d+"animation-timing-function"]="",t.fx={off:r===e&&v.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:d,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},t.fn.animate=function(n,i,r,o,s){return t.isFunction(i)&&(o=i,r=e,i=e),t.isFunction(r)&&(o=r,r=e),t.isPlainObject(i)&&(r=i.easing,o=i.complete,s=i.delay,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._default)/1e3),s&&(s=parseFloat(s)/1e3),this.anim(n,i,r,o,s)},t.fn.anim=function(i,r,d,m,v){var x,F,b,w={},E="",C=this,T=t.fx.transitionEnd,D=!1;if(r===e&&(r=t.fx.speeds._default/1e3),v===e&&(v=0),t.fx.off&&(r=0),"string"==typeof i)w[l]=i,w[f]=r+"s",w[p]=v+"s",w[h]=d||"linear",T=t.fx.animationEnd;else{F=[];for(x in i)g.test(x)?E+=x+"("+i[x]+") ":(w[x]=i[x],F.push(n(x)));E&&(w[o]=E,F.push(o)),r>0&&"object"==typeof i&&(w[s]=F.join(", "),w[a]=r+"s",w[c]=v+"s",w[u]=d||"linear")}return b=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(T,b)}else t(this).unbind(T,b);D=!0,t(this).css(y),m&&m.call(this)},r>0&&(this.bind(T,b),setTimeout(function(){D||b.call(C)},1e3*(r+v)+25)),this.size()&&this.get(0).clientLeft,this.css(w),0>=r&&setTimeout(function(){C.each(function(){b.call(this)})},0),this},v=null}(i),function(t,e){function n(n,i,r,o,s){"function"!=typeof i||s||(s=i,i=e);var a={opacity:r};return o&&(a.scale=o,n.css(t.fx.cssPrefix+"transform-origin","0 0")),n.animate(a,i,null,s)}function i(e,i,r,o){return n(e,i,0,r,function(){s.call(t(this)),o&&o.call(this)})}var r=window.document,o=(r.documentElement,t.fn.show),s=t.fn.hide,a=t.fn.toggle;t.fn.show=function(t,i){return o.call(this),t===e?t=0:this.css("opacity",0),n(this,t,1,"1,1",i)},t.fn.hide=function(t,n){return t===e?s.call(this):i(this,t,"0,0",n)},t.fn.toggle=function(n,i){return n===e||"boolean"==typeof n?a.call(this,n):this.each(function(){var e=t(this);e["none"==e.css("display")?"show":"hide"](n,i)})},t.fn.fadeTo=function(t,e,i){return n(this,t,e,null,i)},t.fn.fadeIn=function(t,e){var n=this.css("opacity");return n>0?this.css("opacity",0):n=1,o.call(this).fadeTo(t,n,e)},t.fn.fadeOut=function(t,e){return i(this,t,null,e)},t.fn.fadeToggle=function(e,n){return this.each(function(){var i=t(this);i[0==i.css("opacity")||"none"==i.css("display")?"fadeIn":"fadeOut"](e,n)})}}(i),function(){try{getComputedStyle(void 0)}catch(t){var e=getComputedStyle;window.getComputedStyle=function(t){try{return e(t)}catch(n){return null}}}}(),function(t){function e(e){return e=t(e),!(!e.width()&&!e.height())&&"none"!==e.css("display")}function n(t,e){t=t.replace(/=#\]/g,'="#"]');var n,i,r=a.exec(t);if(r&&r[2]in s&&(n=s[r[2]],i=r[3],t=r[1],i)){var o=Number(i);i=isNaN(o)?i.replace(/^["']|["']$/g,""):o}return e(t,n,i)}var i=t.zepto,r=i.qsa,o=i.matches,s=t.expr[":"]={visible:function(){return e(this)?this:void 0},hidden:function(){return e(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,e){return t===e.length-1?this:void 0},eq:function(t,e,n){return t===n?this:void 0},contains:function(e,n,i){return t(this).text().indexOf(i)>-1?this:void 0},has:function(t,e,n){return i.qsa(this,n).length?this:void 0}},a=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),u=/^\s*>/,c="Zepto"+ +new Date;i.qsa=function(e,o){return n(o,function(n,s,a){try{var l;!n&&s?n="*":u.test(n)&&(l=t(e).addClass(c),n="."+c+" "+n);var f=r(e,n)}catch(h){throw console.error("error performing selector: %o",o),h}finally{l&&l.removeClass(c)}return s?i.uniq(t.map(f,function(t,e){return s.call(t,e,f,a)})):f})},i.matches=function(t,e){return n(e,function(e,n,i){return(!e||o(t,e))&&(!n||n.call(t,null,i)===t)})}}(i),function(t){function e(t,e,n,i){return Math.abs(t-e)>=Math.abs(n-i)?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function n(){l=null,h.last&&(h.el.trigger("longTap"),h={})}function i(){l&&clearTimeout(l),l=null}function r(){a&&clearTimeout(a),u&&clearTimeout(u),c&&clearTimeout(c),l&&clearTimeout(l),a=u=c=l=null,h={}}function o(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function s(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var a,u,c,l,f,h={},p=750;t(document).ready(function(){var d,m,v,g,y=0,x=0;"MSGesture"in window&&(f=new MSGesture,f.target=document.body),t(document).bind("MSGestureEnd",function(t){var e=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;e&&(h.el.trigger("swipe"),h.el.trigger("swipe"+e))}).on("touchstart MSPointerDown pointerdown",function(e){(g=s(e,"down"))&&!o(e)||(v=g?e:e.touches[0],e.touches&&1===e.touches.length&&h.x2&&(h.x2=void 0,h.y2=void 0),d=Date.now(),m=d-(h.last||d),h.el=t("tagName"in v.target?v.target:v.target.parentNode),a&&clearTimeout(a),h.x1=v.pageX,h.y1=v.pageY,m>0&&250>=m&&(h.isDoubleTap=!0),h.last=d,l=setTimeout(n,p),f&&g&&f.addPointer(e.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){(g=s(t,"move"))&&!o(t)||(v=g?t:t.touches[0],i(),h.x2=v.pageX,h.y2=v.pageY,y+=Math.abs(h.x1-h.x2),x+=Math.abs(h.y1-h.y2))}).on("touchend MSPointerUp pointerup",function(n){(g=s(n,"up"))&&!o(n)||(i(),h.x2&&Math.abs(h.x1-h.x2)>30||h.y2&&Math.abs(h.y1-h.y2)>30?c=setTimeout(function(){h.el.trigger("swipe"),h.el.trigger("swipe"+e(h.x1,h.x2,h.y1,h.y2)),h={}},0):"last"in h&&(30>y&&30>x?u=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=r,h.el.trigger(e),h.isDoubleTap?(h.el&&h.el.trigger("doubleTap"),h={}):a=setTimeout(function(){a=null,h.el&&h.el.trigger("singleTap"),h={}},250)},0):h={}),y=x=0)}).on("touchcancel MSPointerCancel pointercancel",r),t(window).on("scroll",r)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.on(e,t)}})}(i),e.exports=i},{}]},{},[1]);