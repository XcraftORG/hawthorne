var e=e||{};e.scope={};e.ASSUME_ES5=!1;e.ASSUME_NO_NATIVE_MAP=!1;e.ASSUME_NO_NATIVE_SET=!1;e.defineProperty=e.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,a,d){b!=Array.prototype&&b!=Object.prototype&&(b[a]=d.value)};e.getGlobal=function(b){return"undefined"!=typeof window&&window===b?b:"undefined"!=typeof global&&null!=global?global:b};e.global=e.getGlobal(this);
e.polyfill=function(b,a){if(a){var d=e.global;b=b.split(".");for(var c=0;c<b.length-1;c++){var f=b[c];f in d||(d[f]={});d=d[f]}b=b[b.length-1];c=d[b];a=a(c);a!=c&&null!=a&&e.defineProperty(d,b,{configurable:!0,writable:!0,value:a})}};e.polyfill("Object.is",function(b){return b?b:function(a,b){return a===b?0!==a||1/a===1/b:a!==a&&b!==b}},"es6","es3");
e.polyfill("Array.prototype.includes",function(b){return b?b:function(a,b){var c=this;c instanceof String&&(c=String(c));var f=c.length;b=b||0;for(0>b&&(b=Math.max(b+f,0));b<f;b++){var d=c[b];if(d===a||Object.is(d,a))return!0}return!1}},"es7","es3");
e.checkStringArgs=function(b,a,d){if(null==b)throw new TypeError("The 'this' value for String.prototype."+d+" must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype."+d+" must not be a regular expression");return b+""};e.polyfill("String.prototype.includes",function(b){return b?b:function(a,b){return-1!==e.checkStringArgs(this,a,"includes").indexOf(a,b||0)}},"es6","es3");e.owns=function(b,a){return Object.prototype.hasOwnProperty.call(b,a)};
e.polyfill("Object.entries",function(b){return b?b:function(a){var b=[],c;for(c in a)e.owns(a,c)&&b.push([c,a[c]]);return b}},"es8","es3");e.arrayIteratorImpl=function(b){var a=0;return function(){return a<b.length?{done:!1,value:b[a++]}:{done:!0}}};e.arrayIterator=function(b){return{next:e.arrayIteratorImpl(b)}};e.SYMBOL_PREFIX="jscomp_symbol_";e.initSymbol=function(){e.initSymbol=function(){};e.global.Symbol||(e.global.Symbol=e.Symbol)};
e.Symbol=function(){var b=0;return function(a){return e.SYMBOL_PREFIX+(a||"")+b++}}();e.initSymbolIterator=function(){e.initSymbol();var b=e.global.Symbol.iterator;b||(b=e.global.Symbol.iterator=e.global.Symbol("iterator"));"function"!=typeof Array.prototype[b]&&e.defineProperty(Array.prototype,b,{configurable:!0,writable:!0,value:function(){return e.iteratorPrototype(e.arrayIteratorImpl(this))}});e.initSymbolIterator=function(){}};
e.initSymbolAsyncIterator=function(){e.initSymbol();var b=e.global.Symbol.asyncIterator;b||(b=e.global.Symbol.asyncIterator=e.global.Symbol("asyncIterator"));e.initSymbolAsyncIterator=function(){}};e.iteratorPrototype=function(b){e.initSymbolIterator();b={next:b};b[e.global.Symbol.iterator]=function(){return this};return b};
e.iteratorFromArray=function(b,a){e.initSymbolIterator();b instanceof String&&(b+="");var d=0,c={next:function(){if(d<b.length){var f=d++;return{value:a(f,b[f]),done:!1}}c.next=function(){return{done:!0,value:void 0}};return c.next()}};c[Symbol.iterator]=function(){return c};return c};e.polyfill("Array.prototype.keys",function(b){return b?b:function(){return e.iteratorFromArray(this,function(a){return a})}},"es6","es3");
fermata.registerPlugin("hawpi",function(b,a){this.base=a;return function(a,c){a.headers.Accept="application/json";a.headers["Content-Type"]="application/json";a.data=JSON.stringify(a.data);return b(a,function(b,d){if(!b){!1===d.status.toFixed()[0]&&(b=Error("Bad status code from server: "+d.status));try{d=JSON.parse(d.data)}catch(k){b=k}}a.options.toast&&(b?window.style.toast("error",b):d.success?window.style.toast("success","Successfully applied changes!"):window.style.toast("error",d.reason));c(b,
d)})}});
(function(){var b=[].indexOf;var a=function(c,a,b){return b.forEach(function(b){var f,d;var h=c.includes("<td")?document.createElement("tbody"):document.createElement("div");h.innerHTML=c;for(f=[];null!==(d=h.lastChild);)try{"before"===a?f.push(b.parentNode.insertBefore(d,b)):"after"===a?f.push(b.parentNode.insertBefore(d,b.nextSibling)):"append"===a?f.push(b.appendChild(d)):"prepend"===a?f.push(b.insertBefore(d,b.firstChild)):f.push(void 0)}catch(m){break}return f})};$.fn.hasClass=function(c){return!!this[0]&&this[0].classList.contains(c)};
$.fn.addClass=function(c){this.forEach(function(a){a=a.classList;return a.add.apply(a,c.split(/\s/))});return this};$.fn.removeClass=function(c){this.forEach(function(a){a=a.classList;return a.remove.apply(a,c.split(/\s/))});return this};$.fn.toggleClass=function(c,a){this.forEach(function(b){b=b.classList;"boolean"!==typeof a&&(a=!b.contains(c));b[a?"add":"remove"].apply(b,c.split(/\s/))});return this};$.fn.css=function(a,b){b=void 0===b?null:b;null===b?console.log("this is not yet implemented"):
this.forEach(function(c){try{return c.style[a]=b}catch(k){return console.error('Could not set css style property "'+a+'".')}});return this};$.fn.remove=function(){this.forEach(function(a){return a.parentNode.removeChild(a)});return this};$.fn.val=function(a){a=void 0===a?"":a;if(""!==a)this.forEach(function(b){return b.value=a});else if(this[0])return this[0].value;return this};$.fn.html=function(a){a=void 0===a?null:a;null!==a&&this.forEach(function(b){return b.innerHTML=a});return this[0]?this[0].innerHTML:
this};$.fn.htmlBefore=function(b){a(b,"before",this);return this};$.fn.htmlAfter=function(b){a(b,"after",this);return this};$.fn.htmlAppend=function(b){a(b,"append",this);return this};$.fn.htmlPrepend=function(b){a(b,"prepend",this);return this};$.fn.fadeIn=function(){this.forEach(function(a){a.style.display="block";a.style.opacity="0";a.style.transition="0.2s opacity ease";return setTimeout(function(){return a.style.opacity=null},10)});return this};$.fn.fadeOut=function(){this.forEach(function(a){a.style.transition=
"0.2s opacity ease";a.style.opacity="0";return setTimeout(function(){return a.style.display="none"},200)});return this};$.fn.fadeToggle=function(){this.forEach(function(a){a.style.transition="0.2s opacity ease";if("none"===window.getComputedStyle(a).display)return a.style.display="block",setTimeout(function(){return a.style.opacity=null},10);a.style.opacity="0";return setTimeout(function(){return a.style.display="none"},200)});return this};$.fn.not=function(a){return $(this.filter(function(c){return 0>
b.call(a,c)}))};$.fn.parent=function(a){var b;if(void 0===a)return $(this[0].parentElement);for(b=this[0].parentElement;!b.matches(a);)b=b.parentElement;return $(b)};var d=function(a){var b=window.getComputedStyle(a);var c=b.display;var d=b.position;var n=b.visibility;b=b.maxHeight.replace("px","").replace("%","");if("none"!==c&&"0"!==b)return a.offsetHeight;a.style.position="absolute";a.style.visibility="hidden";a.style.display="block";b=a.offsetHeight;a.style.display=c;a.style.position=d;a.style.visibility=
n;return b};$.fn.slideToggle=function(){this.forEach(function(a){var b=0;if(a.getAttribute("data-max-height"))return setTimeout(function(){"0"===a.style.maxHeight.replace("px","").replace("%","")?(a.style.display="block",setTimeout(function(){return a.style.maxHeight=a.getAttribute("data-max-height")},10)):(a.style.maxHeight="0",setTimeout(function(){return a.style.display="none"},500))},10);b=d(a)+"px";a.style.transition="max-height 0.5s ease-in-out";a.style.overflowY="hidden";a.setAttribute("data-max-height",
b);a.style.display="block";a.style.maxHeight="0";return setTimeout(function(){a.style.maxHeight=b},10)});return this};$.fn.slideUp=function(){if(0!==this.length){var a=window.getComputedStyle(this[0]);if("none"!==a.display)return this[0].getAttribute("data-max-height")||(this[0].style.overflowY="hidden",this[0].style.maxHeight=a.height,this[0].style.transition="max-height 0.5s ease-in-out",this[0].setAttribute("data-max-height",a.height)),this.slideToggle()}};$.fn.slideDown=function(){if(0!==this.length&&
"none"===window.getComputedStyle(this[0]).display)return this.slideToggle()};$.fn.animate=function(a,b){var d;var c="";var f=Object.entries(a);var l=0;for(d=f.length;l<d;l++){var g=f[l];g[0]="width"===g[0]?"max-width":g[0];c+=g[0]+" "}c+=b/1E3+"s ease";var m=0;this.forEach(function(b){b.style.transition=c;if(Object.keys(a).includes("width"))return m=parseInt(b.style["max-width"]),b.style["max-width"]=window.getComputedStyle(b).width});var p=this;setTimeout(function(){return p.forEach(function(c){var d;
var f=Object.entries(a);var h=[];var k=0;for(d=f.length;k<d;k++)g=f[k],"width"===g[0]?(c.style["max-width"]=g[1],parseInt(g[1])<m?h.push(setTimeout(function(){return c.style[g[0]]=g[1]},b)):h.push(c.style[g[0]]=g[1])):h.push(c.style[g[0]]=g[1]);return h})},10);return this}}).call(this);
(function(){var b=function(a,b,c){a=parseInt(a);b=parseInt(b);c=parseInt(c);null==a&&(a=0);null==b&&(b=0);null==c&&(c=0);return 86400*a+3600*b+60*c};window.style.duration={parse:function(a){var d,c;if(null===a||""===a)return 0;var f=new RegExp(/([0-9][0-9]?)[ ]?m(?:[^o]|$)/);var h=new RegExp(/([0-9][0-9]?)[ ]?h/);var k=new RegExp(/([0-9]{1,2})[ ]?d/);var n=new RegExp(/([0-9][0-9]?)[ ]?w/);var l=new RegExp(/([0-9][0-9]?)[ ]?mo/);var g=new RegExp(/([0-9][0-9]?)[ ]?y/);var m=c=d=0;l.test(a)&&(d+=31*
l.exec(a)[1]);f.test(a)&&(m=f.exec(a)[1]);h.test(a)&&(c=h.exec(a)[1]);k.test(a)&&(d+=k.exec(a)[1]);n.test(a)&&(d+=7*n.exec(a)[1]);g.test(a)&&(d+=365*g.exec(a)[1]);return b(d,c,m)},string:function(a){if(0>=a)return"";var b=Math.floor(a/60%60);var c=Math.floor(a/3600%24);a=Math.floor(a/86400);var f="";0<a&&(f=f+a+"d ");0<c&&(f=f+c+"h ");0<b&&(f=f+b+"m ");return f.substring(0,f.length-1)}};window.style.getOrCreate("utils").date={convert:{to:{iso:function(a){var b=a.getFullYear();var c=1===a.getMonth().toString().length?
"0"+(a.getMonth()+1).toString():a.getMonth()+1;var f=1===a.getDate().toString().length?"0"+a.getDate().toString():a.getDate();var h=1===a.getHours().toString().length?"0"+a.getHours().toString():a.getHours();a=1===a.getMinutes().toString().length?"0"+a.getMinutes().toString():a.getMinutes();return b+"-"+c+"-"+f+"T"+h+":"+a}}}}}).call(this);
window.style.getOrCreate("utils").getOrCreate("verify").input=function(b,a){var d=void 0;window.event?d=window.event.keyCode:a&&(d=a.which);String.fromCharCode(a.keyCode);switch(b){case "single":if(13===d)return!1}return!0};
window.style.card=function(b,a){if(void 0===b||b){var d="";a.forEach(function(a){if("string"===typeof a)return d+="<div class='content'>"+a+"</div>";if("object"===typeof a)return Object.keys(a).forEach(function(b){return a[b].forEach(function(c){c=c.replace(/of uuid type/g,"present");c=c.replace(/value/g,a[b]);c.search(-1===b)&&(c=b+" "+c);return d+="<div class='content'>"+c+"</div>"})})});$(".status-card .info").html(d);return $(".status-card").addClass("active")}return $(".status-card").removeClass("active")};
window.style.copy=function(b){var a=document.createElement("textarea");a.style.position="fixed";a.style.top=0;a.style.left=0;a.style.width="2em";a.style.height="2em";a.style.padding=0;a.style.border="none";a.style.outline="none";a.style.boxShadow="none";a.style.background="transparent";a.value=b;document.body.appendChild(a);a.focus();a.select();try{document.execCommand("copy")}catch(d){console.log("Oops, unable to copy")}document.body.removeChild(a)};
window.style.rcon=function(b){var a=$(b.parentElement);var d=$(".hidden",a)[0].value;var c=[];a[0].childNodes.forEach(function(a){if("#text"===a.nodeName||"BR"===a.nodeName)return c.push(a)});c.forEach(function(b){return a[0].removeChild(b)});b={command:$(".command",a)[0].value};window.endpoint.api.servers[d].execute.put({},{},b,function(b,c){var d=c.result.response.split("\n");d.forEach(function(a,b){return d[b]="> "+a});d=d.join("<br />");return a.htmlPrepend(d)})};
window.style.login=function(b){return 0!==b.target.value.length?$(".transition").slideDown():$(".transition").slideUp()};window.style.toast=function(b,a){var d=$(".toast");d.addClass(b);$(".desc",".toast")[0].innerHTML=a;d.addClass("show");setTimeout(function(){d.removeClass(b);return d.removeClass("show")},5E3)};window.endpoint={api:fermata.hawpi("/api/v1"),ajax:fermata.raw({base:window.location.origin+"/ajax/v1"}),bare:fermata.raw({base:window.location.origin})};
