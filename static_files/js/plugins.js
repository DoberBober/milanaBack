/*!
 * Flickity PACKAGED v2.3.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2021 Metafizzy
 */
(function(e,i){if(typeof define=="function"&&define.amd){define("jquery-bridget/jquery-bridget",["jquery"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("jquery"))}else{e.jQueryBridget=i(e,e.jQuery)}})(window,function t(e,r){"use strict";var o=Array.prototype.slice;var i=e.console;var u=typeof i=="undefined"?function(){}:function(t){i.error(t)};function n(h,s,c){c=c||r||e.jQuery;if(!c){return}if(!s.prototype.option){s.prototype.option=function(t){if(!c.isPlainObject(t)){return}this.options=c.extend(true,this.options,t)}}c.fn[h]=function(t){if(typeof t=="string"){var e=o.call(arguments,1);return i(this,t,e)}n(this,t);return this};function i(t,r,o){var a;var l="$()."+h+'("'+r+'")';t.each(function(t,e){var i=c.data(e,h);if(!i){u(h+" not initialized. Cannot call methods, i.e. "+l);return}var n=i[r];if(!n||r.charAt(0)=="_"){u(l+" is not a valid method");return}var s=n.apply(i,o);a=a===undefined?s:a});return a!==undefined?a:t}function n(t,n){t.each(function(t,e){var i=c.data(e,h);if(i){i.option(n);i._init()}else{i=new s(e,n);c.data(e,h,i)}})}a(c)}function a(t){if(!t||t&&t.bridget){return}t.bridget=n}a(r||e.jQuery);return n});(function(t,e){if(typeof define=="function"&&define.amd){define("ev-emitter/ev-emitter",e)}else if(typeof module=="object"&&module.exports){module.exports=e()}else{t.EvEmitter=e()}})(typeof window!="undefined"?window:this,function(){function t(){}var e=t.prototype;e.on=function(t,e){if(!t||!e){return}var i=this._events=this._events||{};var n=i[t]=i[t]||[];if(n.indexOf(e)==-1){n.push(e)}return this};e.once=function(t,e){if(!t||!e){return}this.on(t,e);var i=this._onceEvents=this._onceEvents||{};var n=i[t]=i[t]||{};n[e]=true;return this};e.off=function(t,e){var i=this._events&&this._events[t];if(!i||!i.length){return}var n=i.indexOf(e);if(n!=-1){i.splice(n,1)}return this};e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(!i||!i.length){return}i=i.slice(0);e=e||[];var n=this._onceEvents&&this._onceEvents[t];for(var s=0;s<i.length;s++){var r=i[s];var o=n&&n[r];if(o){this.off(t,r);delete n[r]}r.apply(this,e)}return this};e.allOff=function(){delete this._events;delete this._onceEvents};return t});
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
(function(t,e){if(typeof define=="function"&&define.amd){define("get-size/get-size",e)}else if(typeof module=="object"&&module.exports){module.exports=e()}else{t.getSize=e()}})(window,function t(){"use strict";function m(t){var e=parseFloat(t);var i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}var i=typeof console=="undefined"?e:function(t){console.error(t)};var y=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];var b=y.length;function E(){var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0};for(var e=0;e<b;e++){var i=y[e];t[i]=0}return t}function S(t){var e=getComputedStyle(t);if(!e){i("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? "+"See https://bit.ly/getsizebug1")}return e}var n=false;var C;function x(){if(n){return}n=true;var t=document.createElement("div");t.style.width="200px";t.style.padding="1px 2px 3px 4px";t.style.borderStyle="solid";t.style.borderWidth="1px 2px 3px 4px";t.style.boxSizing="border-box";var e=document.body||document.documentElement;e.appendChild(t);var i=S(t);C=Math.round(m(i.width))==200;s.isBoxSizeOuter=C;e.removeChild(t)}function s(t){x();if(typeof t=="string"){t=document.querySelector(t)}if(!t||typeof t!="object"||!t.nodeType){return}var e=S(t);if(e.display=="none"){return E()}var i={};i.width=t.offsetWidth;i.height=t.offsetHeight;var n=i.isBorderBox=e.boxSizing=="border-box";for(var s=0;s<b;s++){var r=y[s];var o=e[r];var a=parseFloat(o);i[r]=!isNaN(a)?a:0}var l=i.paddingLeft+i.paddingRight;var h=i.paddingTop+i.paddingBottom;var c=i.marginLeft+i.marginRight;var u=i.marginTop+i.marginBottom;var d=i.borderLeftWidth+i.borderRightWidth;var f=i.borderTopWidth+i.borderBottomWidth;var p=n&&C;var v=m(e.width);if(v!==false){i.width=v+(p?0:l+d)}var g=m(e.height);if(g!==false){i.height=g+(p?0:h+f)}i.innerWidth=i.width-(l+d);i.innerHeight=i.height-(h+f);i.outerWidth=i.width+c;i.outerHeight=i.height+u;return i}return s});(function(t,e){"use strict";if(typeof define=="function"&&define.amd){define("desandro-matches-selector/matches-selector",e)}else if(typeof module=="object"&&module.exports){module.exports=e()}else{t.matchesSelector=e()}})(window,function t(){"use strict";var n=function(){var t=window.Element.prototype;if(t.matches){return"matches"}if(t.matchesSelector){return"matchesSelector"}var e=["webkit","moz","ms","o"];for(var i=0;i<e.length;i++){var n=e[i];var s=n+"MatchesSelector";if(t[s]){return s}}}();return function t(e,i){return e[n](i)}});(function(e,i){if(typeof define=="function"&&define.amd){define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("desandro-matches-selector"))}else{e.fizzyUIUtils=i(e,e.matchesSelector)}})(window,function t(h,r){var c={};c.extend=function(t,e){for(var i in e){t[i]=e[i]}return t};c.modulo=function(t,e){return(t%e+e)%e};var i=Array.prototype.slice;c.makeArray=function(t){if(Array.isArray(t)){return t}if(t===null||t===undefined){return[]}var e=typeof t=="object"&&typeof t.length=="number";if(e){return i.call(t)}return[t]};c.removeFrom=function(t,e){var i=t.indexOf(e);if(i!=-1){t.splice(i,1)}};c.getParent=function(t,e){while(t.parentNode&&t!=document.body){t=t.parentNode;if(r(t,e)){return t}}};c.getQueryElement=function(t){if(typeof t=="string"){return document.querySelector(t)}return t};c.handleEvent=function(t){var e="on"+t.type;if(this[e]){this[e](t)}};c.filterFindElements=function(t,n){t=c.makeArray(t);var s=[];t.forEach(function(t){if(!(t instanceof HTMLElement)){return}if(!n){s.push(t);return}if(r(t,n)){s.push(t)}var e=t.querySelectorAll(n);for(var i=0;i<e.length;i++){s.push(e[i])}});return s};c.debounceMethod=function(t,e,n){n=n||100;var s=t.prototype[e];var r=e+"Timeout";t.prototype[e]=function(){var t=this[r];clearTimeout(t);var e=arguments;var i=this;this[r]=setTimeout(function(){s.apply(i,e);delete i[r]},n)}};c.docReady=function(t){var e=document.readyState;if(e=="complete"||e=="interactive"){setTimeout(t)}else{document.addEventListener("DOMContentLoaded",t)}};c.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var u=h.console;c.htmlInit=function(a,l){c.docReady(function(){var t=c.toDashed(l);var s="data-"+t;var e=document.querySelectorAll("["+s+"]");var i=document.querySelectorAll(".js-"+t);var n=c.makeArray(e).concat(c.makeArray(i));var r=s+"-options";var o=h.jQuery;n.forEach(function(e){var t=e.getAttribute(s)||e.getAttribute(r);var i;try{i=t&&JSON.parse(t)}catch(t){if(u){u.error("Error parsing "+s+" on "+e.className+": "+t)}return}var n=new a(e,i);if(o){o.data(e,l,n)}})})};return c});(function(e,i){if(typeof define=="function"&&define.amd){define("flickity/js/cell",["get-size/get-size"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("get-size"))}else{e.Flickity=e.Flickity||{};e.Flickity.Cell=i(e,e.getSize)}})(window,function t(e,i){function n(t,e){this.element=t;this.parent=e;this.create()}var s=n.prototype;s.create=function(){this.element.style.position="absolute";this.element.setAttribute("aria-hidden","true");this.x=0;this.shift=0;this.element.style[this.parent.originSide]=0};s.destroy=function(){this.unselect();this.element.style.position="";var t=this.parent.originSide;this.element.style[t]="";this.element.style.transform="";this.element.removeAttribute("aria-hidden")};s.getSize=function(){this.size=i(this.element)};s.setPosition=function(t){this.x=t;this.updateTarget();this.renderPosition(t)};s.updateTarget=s.setDefaultTarget=function(){var t=this.parent.originSide=="left"?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign};s.renderPosition=function(t){var e=this.parent.originSide==="left"?1:-1;var i=this.parent.options.percentPosition?t*e*(this.parent.size.innerWidth/this.size.width):t*e;this.element.style.transform="translateX("+this.parent.getPositionValue(i)+")"};s.select=function(){this.element.classList.add("is-selected");this.element.removeAttribute("aria-hidden")};s.unselect=function(){this.element.classList.remove("is-selected");this.element.setAttribute("aria-hidden","true")};s.wrapShift=function(t){this.shift=t;this.renderPosition(this.x+this.parent.slideableWidth*t)};s.remove=function(){this.element.parentNode.removeChild(this.element)};return n});(function(t,e){if(typeof define=="function"&&define.amd){define("flickity/js/slide",e)}else if(typeof module=="object"&&module.exports){module.exports=e()}else{t.Flickity=t.Flickity||{};t.Flickity.Slide=e()}})(window,function t(){"use strict";function e(t){this.parent=t;this.isOriginLeft=t.originSide=="left";this.cells=[];this.outerWidth=0;this.height=0}var i=e.prototype;i.addCell=function(t){this.cells.push(t);this.outerWidth+=t.size.outerWidth;this.height=Math.max(t.size.outerHeight,this.height);if(this.cells.length==1){this.x=t.x;var e=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=t.size[e]}};i.updateTarget=function(){var t=this.isOriginLeft?"marginRight":"marginLeft";var e=this.getLastCell();var i=e?e.size[t]:0;var n=this.outerWidth-(this.firstMargin+i);this.target=this.x+this.firstMargin+n*this.parent.cellAlign};i.getLastCell=function(){return this.cells[this.cells.length-1]};i.select=function(){this.cells.forEach(function(t){t.select()})};i.unselect=function(){this.cells.forEach(function(t){t.unselect()})};i.getCellElements=function(){return this.cells.map(function(t){return t.element})};return e});(function(e,i){if(typeof define=="function"&&define.amd){define("flickity/js/animate",["fizzy-ui-utils/utils"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("fizzy-ui-utils"))}else{e.Flickity=e.Flickity||{};e.Flickity.animatePrototype=i(e,e.fizzyUIUtils)}})(window,function t(e,i){var n={};n.startAnimation=function(){if(this.isAnimating){return}this.isAnimating=true;this.restingFrames=0;this.animate()};n.animate=function(){this.applyDragForce();this.applySelectedAttraction();var t=this.x;this.integratePhysics();this.positionSlider();this.settle(t);if(this.isAnimating){var e=this;requestAnimationFrame(function t(){e.animate()})}};n.positionSlider=function(){var t=this.x;if(this.options.wrapAround&&this.cells.length>1){t=i.modulo(t,this.slideableWidth);t-=this.slideableWidth;this.shiftWrapCells(t)}this.setTranslateX(t,this.isAnimating);this.dispatchScrollEvent()};n.setTranslateX=function(t,e){t+=this.cursorPosition;t=this.options.rightToLeft?-t:t;var i=this.getPositionValue(t);this.slider.style.transform=e?"translate3d("+i+",0,0)":"translateX("+i+")"};n.dispatchScrollEvent=function(){var t=this.slides[0];if(!t){return}var e=-this.x-t.target;var i=e/this.slidesWidth;this.dispatchEvent("scroll",null,[i,e])};n.positionSliderAtSelected=function(){if(!this.cells.length){return}this.x=-this.selectedSlide.target;this.velocity=0;this.positionSlider()};n.getPositionValue=function(t){if(this.options.percentPosition){return Math.round(t/this.size.innerWidth*1e4)*.01+"%"}else{return Math.round(t)+"px"}};n.settle=function(t){var e=!this.isPointerDown&&Math.round(this.x*100)==Math.round(t*100);if(e){this.restingFrames++}if(this.restingFrames>2){this.isAnimating=false;delete this.isFreeScrolling;this.positionSlider();this.dispatchEvent("settle",null,[this.selectedIndex])}};n.shiftWrapCells=function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)};n._shiftCells=function(t,e,i){for(var n=0;n<t.length;n++){var s=t[n];var r=e>0?i:0;s.wrapShift(r);e-=s.size.outerWidth}};n._unshiftCells=function(t){if(!t||!t.length){return}for(var e=0;e<t.length;e++){t[e].wrapShift(0)}};n.integratePhysics=function(){this.x+=this.velocity;this.velocity*=this.getFrictionFactor()};n.applyForce=function(t){this.velocity+=t};n.getFrictionFactor=function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]};n.getRestingPosition=function(){return this.x+this.velocity/(1-this.getFrictionFactor())};n.applyDragForce=function(){if(!this.isDraggable||!this.isPointerDown){return}var t=this.dragX-this.x;var e=t-this.velocity;this.applyForce(e)};n.applySelectedAttraction=function(){var t=this.isDraggable&&this.isPointerDown;if(t||this.isFreeScrolling||!this.slides.length){return}var e=this.selectedSlide.target*-1-this.x;var i=e*this.options.selectedAttraction;this.applyForce(i)};return n});(function(o,a){if(typeof define=="function"&&define.amd){define("flickity/js/flickity",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(t,e,i,n,s,r){return a(o,t,e,i,n,s,r)})}else if(typeof module=="object"&&module.exports){module.exports=a(o,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate"))}else{var t=o.Flickity;o.Flickity=a(o,o.EvEmitter,o.getSize,o.fizzyUIUtils,t.Cell,t.Slide,t.animatePrototype)}})(window,function t(n,e,i,a,s,o,r){var l=n.jQuery;var h=n.getComputedStyle;var c=n.console;function u(t,e){t=a.makeArray(t);while(t.length){e.appendChild(t.shift())}}var d=0;var f={};function p(t,e){var i=a.getQueryElement(t);if(!i){if(c){c.error("Bad element for Flickity: "+(i||t))}return}this.element=i;if(this.element.flickityGUID){var n=f[this.element.flickityGUID];if(n)n.option(e);return n}if(l){this.$element=l(this.element)}this.options=a.extend({},this.constructor.defaults);this.option(e);this._create()}p.defaults={accessibility:true,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:true,percentPosition:true,resize:true,selectedAttraction:.025,setGallerySize:true};p.createMethods=[];var v=p.prototype;a.extend(v,e.prototype);v._create=function(){var t=this.guid=++d;this.element.flickityGUID=t;f[t]=this;this.selectedIndex=0;this.restingFrames=0;this.x=0;this.velocity=0;this.originSide=this.options.rightToLeft?"right":"left";this.viewport=document.createElement("div");this.viewport.className="flickity-viewport";this._createSlider();if(this.options.resize||this.options.watchCSS){n.addEventListener("resize",this)}for(var e in this.options.on){var i=this.options.on[e];this.on(e,i)}p.createMethods.forEach(function(t){this[t]()},this);if(this.options.watchCSS){this.watchCSS()}else{this.activate()}};v.option=function(t){a.extend(this.options,t)};v.activate=function(){if(this.isActive){return}this.isActive=true;this.element.classList.add("flickity-enabled");if(this.options.rightToLeft){this.element.classList.add("flickity-rtl")}this.getSize();var t=this._filterFindCellElements(this.element.children);u(t,this.slider);this.viewport.appendChild(this.slider);this.element.appendChild(this.viewport);this.reloadCells();if(this.options.accessibility){this.element.tabIndex=0;this.element.addEventListener("keydown",this)}this.emitEvent("activate");this.selectInitialIndex();this.isInitActivated=true;this.dispatchEvent("ready")};v._createSlider=function(){var t=document.createElement("div");t.className="flickity-slider";t.style[this.originSide]=0;this.slider=t};v._filterFindCellElements=function(t){return a.filterFindElements(t,this.options.cellSelector)};v.reloadCells=function(){this.cells=this._makeCells(this.slider.children);this.positionCells();this._getWrapShiftCells();this.setGallerySize()};v._makeCells=function(t){var e=this._filterFindCellElements(t);var i=e.map(function(t){return new s(t,this)},this);return i};v.getLastCell=function(){return this.cells[this.cells.length-1]};v.getLastSlide=function(){return this.slides[this.slides.length-1]};v.positionCells=function(){this._sizeCells(this.cells);this._positionCells(0)};v._positionCells=function(t){t=t||0;this.maxCellHeight=t?this.maxCellHeight||0:0;var e=0;if(t>0){var i=this.cells[t-1];e=i.x+i.size.outerWidth}var n=this.cells.length;for(var s=t;s<n;s++){var r=this.cells[s];r.setPosition(e);e+=r.size.outerWidth;this.maxCellHeight=Math.max(r.size.outerHeight,this.maxCellHeight)}this.slideableWidth=e;this.updateSlides();this._containSlides();this.slidesWidth=n?this.getLastSlide().target-this.slides[0].target:0};v._sizeCells=function(t){t.forEach(function(t){t.getSize()})};v.updateSlides=function(){this.slides=[];if(!this.cells.length){return}var n=new o(this);this.slides.push(n);var t=this.originSide=="left";var s=t?"marginRight":"marginLeft";var r=this._getCanCellFit();this.cells.forEach(function(t,e){if(!n.cells.length){n.addCell(t);return}var i=n.outerWidth-n.firstMargin+(t.size.outerWidth-t.size[s]);if(r.call(this,e,i)){n.addCell(t)}else{n.updateTarget();n=new o(this);this.slides.push(n);n.addCell(t)}},this);n.updateTarget();this.updateSelectedSlide()};v._getCanCellFit=function(){var t=this.options.groupCells;if(!t){return function(){return false}}else if(typeof t=="number"){var e=parseInt(t,10);return function(t){return t%e!==0}}var i=typeof t=="string"&&t.match(/^(\d+)%$/);var n=i?parseInt(i[1],10)/100:1;return function(t,e){return e<=(this.size.innerWidth+1)*n}};v._init=v.reposition=function(){this.positionCells();this.positionSliderAtSelected()};v.getSize=function(){this.size=i(this.element);this.setCellAlign();this.cursorPosition=this.size.innerWidth*this.cellAlign};var g={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};v.setCellAlign=function(){var t=g[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign};v.setGallerySize=function(){if(this.options.setGallerySize){var t=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=t+"px"}};v._getWrapShiftCells=function(){if(!this.options.wrapAround){return}this._unshiftCells(this.beforeShiftCells);this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition;var e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1);t=this.size.innerWidth-this.cursorPosition;this.afterShiftCells=this._getGapCells(t,0,1)};v._getGapCells=function(t,e,i){var n=[];while(t>0){var s=this.cells[e];if(!s){break}n.push(s);e+=i;t-=s.size.outerWidth}return n};v._containSlides=function(){if(!this.options.contain||this.options.wrapAround||!this.cells.length){return}var t=this.options.rightToLeft;var e=t?"marginRight":"marginLeft";var i=t?"marginLeft":"marginRight";var n=this.slideableWidth-this.getLastCell().size[i];var s=n<this.size.innerWidth;var r=this.cursorPosition+this.cells[0].size[e];var o=n-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(t){if(s){t.target=n*this.cellAlign}else{t.target=Math.max(t.target,r);t.target=Math.min(t.target,o)}},this)};v.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;this.emitEvent(t,n);if(l&&this.$element){t+=this.options.namespaceJQueryEvents?".flickity":"";var s=t;if(e){var r=new l.Event(e);r.type=t;s=r}this.$element.trigger(s,i)}};v.select=function(t,e,i){if(!this.isActive){return}t=parseInt(t,10);this._wrapSelect(t);if(this.options.wrapAround||e){t=a.modulo(t,this.slides.length)}if(!this.slides[t]){return}var n=this.selectedIndex;this.selectedIndex=t;this.updateSelectedSlide();if(i){this.positionSliderAtSelected()}else{this.startAnimation()}if(this.options.adaptiveHeight){this.setGallerySize()}this.dispatchEvent("select",null,[t]);if(t!=n){this.dispatchEvent("change",null,[t])}this.dispatchEvent("cellSelect")};v._wrapSelect=function(t){var e=this.slides.length;var i=this.options.wrapAround&&e>1;if(!i){return t}var n=a.modulo(t,e);var s=Math.abs(n-this.selectedIndex);var r=Math.abs(n+e-this.selectedIndex);var o=Math.abs(n-e-this.selectedIndex);if(!this.isDragSelect&&r<s){t+=e}else if(!this.isDragSelect&&o<s){t-=e}if(t<0){this.x-=this.slideableWidth}else if(t>=e){this.x+=this.slideableWidth}};v.previous=function(t,e){this.select(this.selectedIndex-1,t,e)};v.next=function(t,e){this.select(this.selectedIndex+1,t,e)};v.updateSelectedSlide=function(){var t=this.slides[this.selectedIndex];if(!t){return}this.unselectSelectedSlide();this.selectedSlide=t;t.select();this.selectedCells=t.cells;this.selectedElements=t.getCellElements();this.selectedCell=t.cells[0];this.selectedElement=this.selectedElements[0]};v.unselectSelectedSlide=function(){if(this.selectedSlide){this.selectedSlide.unselect()}};v.selectInitialIndex=function(){var t=this.options.initialIndex;if(this.isInitActivated){this.select(this.selectedIndex,false,true);return}if(t&&typeof t=="string"){var e=this.queryCell(t);if(e){this.selectCell(t,false,true);return}}var i=0;if(t&&this.slides[t]){i=t}this.select(i,false,true)};v.selectCell=function(t,e,i){var n=this.queryCell(t);if(!n){return}var s=this.getCellSlideIndex(n);this.select(s,e,i)};v.getCellSlideIndex=function(t){for(var e=0;e<this.slides.length;e++){var i=this.slides[e];var n=i.cells.indexOf(t);if(n!=-1){return e}}};v.getCell=function(t){for(var e=0;e<this.cells.length;e++){var i=this.cells[e];if(i.element==t){return i}}};v.getCells=function(t){t=a.makeArray(t);var i=[];t.forEach(function(t){var e=this.getCell(t);if(e){i.push(e)}},this);return i};v.getCellElements=function(){return this.cells.map(function(t){return t.element})};v.getParentCell=function(t){var e=this.getCell(t);if(e){return e}t=a.getParent(t,".flickity-slider > *");return this.getCell(t)};v.getAdjacentCellElements=function(t,e){if(!t){return this.selectedSlide.getCellElements()}e=e===undefined?this.selectedIndex:e;var i=this.slides.length;if(1+t*2>=i){return this.getCellElements()}var n=[];for(var s=e-t;s<=e+t;s++){var r=this.options.wrapAround?a.modulo(s,i):s;var o=this.slides[r];if(o){n=n.concat(o.getCellElements())}}return n};v.queryCell=function(t){if(typeof t=="number"){return this.cells[t]}if(typeof t=="string"){if(t.match(/^[#.]?[\d/]/)){return}t=this.element.querySelector(t)}return this.getCell(t)};v.uiChange=function(){this.emitEvent("uiChange")};v.childUIPointerDown=function(t){if(t.type!="touchstart"){t.preventDefault()}this.focus()};v.onresize=function(){this.watchCSS();this.resize()};a.debounceMethod(p,"onresize",150);v.resize=function(){if(!this.isActive||this.isAnimating||this.isDragging){return}this.getSize();if(this.options.wrapAround){this.x=a.modulo(this.x,this.slideableWidth)}this.positionCells();this._getWrapShiftCells();this.setGallerySize();this.emitEvent("resize");var t=this.selectedElements&&this.selectedElements[0];this.selectCell(t,false,true)};v.watchCSS=function(){var t=this.options.watchCSS;if(!t){return}var e=h(this.element,":after").content;if(e.indexOf("flickity")!=-1){this.activate()}else{this.deactivate()}};v.onkeydown=function(t){var e=document.activeElement&&document.activeElement!=this.element;if(!this.options.accessibility||e){return}var i=p.keyboardHandlers[t.keyCode];if(i){i.call(this)}};p.keyboardHandlers={37:function(){var t=this.options.rightToLeft?"next":"previous";this.uiChange();this[t]()},39:function(){var t=this.options.rightToLeft?"previous":"next";this.uiChange();this[t]()}};v.focus=function(){var t=n.pageYOffset;this.element.focus({preventScroll:true});if(n.pageYOffset!=t){n.scrollTo(n.pageXOffset,t)}};v.deactivate=function(){if(!this.isActive){return}this.element.classList.remove("flickity-enabled");this.element.classList.remove("flickity-rtl");this.unselectSelectedSlide();this.cells.forEach(function(t){t.destroy()});this.element.removeChild(this.viewport);u(this.slider.children,this.element);if(this.options.accessibility){this.element.removeAttribute("tabIndex");this.element.removeEventListener("keydown",this)}this.isActive=false;this.emitEvent("deactivate")};v.destroy=function(){this.deactivate();n.removeEventListener("resize",this);this.allOff();this.emitEvent("destroy");if(l&&this.$element){l.removeData(this.element,"flickity")}delete this.element.flickityGUID;delete f[this.guid]};a.extend(v,r);p.data=function(t){t=a.getQueryElement(t);var e=t&&t.flickityGUID;return e&&f[e]};a.htmlInit(p,"flickity");if(l&&l.bridget){l.bridget("flickity",p)}p.setJQuery=function(t){l=t};p.Cell=s;p.Slide=o;return p});
/*!
 * Unipointer v2.4.0
 * base class for doing one thing with pointer event
 * MIT license
 */
(function(e,i){if(typeof define=="function"&&define.amd){define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("ev-emitter"))}else{e.Unipointer=i(e,e.EvEmitter)}})(window,function t(s,e){function i(){}function n(){}var r=n.prototype=Object.create(e.prototype);r.bindStartEvent=function(t){this._bindStartEvent(t,true)};r.unbindStartEvent=function(t){this._bindStartEvent(t,false)};r._bindStartEvent=function(t,e){e=e===undefined?true:e;var i=e?"addEventListener":"removeEventListener";var n="mousedown";if("ontouchstart"in s){n="touchstart"}else if(s.PointerEvent){n="pointerdown"}t[i](n,this)};r.handleEvent=function(t){var e="on"+t.type;if(this[e]){this[e](t)}};r.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.identifier==this.pointerIdentifier){return i}}};r.onmousedown=function(t){var e=t.button;if(e&&(e!==0&&e!==1)){return}this._pointerDown(t,t)};r.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])};r.onpointerdown=function(t){this._pointerDown(t,t)};r._pointerDown=function(t,e){if(t.button||this.isPointerDown){return}this.isPointerDown=true;this.pointerIdentifier=e.pointerId!==undefined?e.pointerId:e.identifier;this.pointerDown(t,e)};r.pointerDown=function(t,e){this._bindPostStartEvents(t);this.emitEvent("pointerDown",[t,e])};var o={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};r._bindPostStartEvents=function(t){if(!t){return}var e=o[t.type];e.forEach(function(t){s.addEventListener(t,this)},this);this._boundPointerEvents=e};r._unbindPostStartEvents=function(){if(!this._boundPointerEvents){return}this._boundPointerEvents.forEach(function(t){s.removeEventListener(t,this)},this);delete this._boundPointerEvents};r.onmousemove=function(t){this._pointerMove(t,t)};r.onpointermove=function(t){if(t.pointerId==this.pointerIdentifier){this._pointerMove(t,t)}};r.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);if(e){this._pointerMove(t,e)}};r._pointerMove=function(t,e){this.pointerMove(t,e)};r.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])};r.onmouseup=function(t){this._pointerUp(t,t)};r.onpointerup=function(t){if(t.pointerId==this.pointerIdentifier){this._pointerUp(t,t)}};r.ontouchend=function(t){var e=this.getTouch(t.changedTouches);if(e){this._pointerUp(t,e)}};r._pointerUp=function(t,e){this._pointerDone();this.pointerUp(t,e)};r.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])};r._pointerDone=function(){this._pointerReset();this._unbindPostStartEvents();this.pointerDone()};r._pointerReset=function(){this.isPointerDown=false;delete this.pointerIdentifier};r.pointerDone=i;r.onpointercancel=function(t){if(t.pointerId==this.pointerIdentifier){this._pointerCancel(t,t)}};r.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);if(e){this._pointerCancel(t,e)}};r._pointerCancel=function(t,e){this._pointerDone();this.pointerCancel(t,e)};r.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])};n.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}};return n});
/*!
 * Unidragger v2.4.0
 * Draggable base class
 * MIT license
 */
(function(e,i){if(typeof define=="function"&&define.amd){define("unidragger/unidragger",["unipointer/unipointer"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("unipointer"))}else{e.Unidragger=i(e,e.Unipointer)}})(window,function t(r,e){function i(){}var n=i.prototype=Object.create(e.prototype);n.bindHandles=function(){this._bindHandles(true)};n.unbindHandles=function(){this._bindHandles(false)};n._bindHandles=function(t){t=t===undefined?true:t;var e=t?"addEventListener":"removeEventListener";var i=t?this._touchActionValue:"";for(var n=0;n<this.handles.length;n++){var s=this.handles[n];this._bindStartEvent(s,t);s[e]("click",this);if(r.PointerEvent){s.style.touchAction=i}}};n._touchActionValue="none";n.pointerDown=function(t,e){var i=this.okayPointerDown(t);if(!i){return}this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY};t.preventDefault();this.pointerDownBlur();this._bindPostStartEvents(t);this.emitEvent("pointerDown",[t,e])};var s={TEXTAREA:true,INPUT:true,SELECT:true,OPTION:true};var o={radio:true,checkbox:true,button:true,submit:true,image:true,file:true};n.okayPointerDown=function(t){var e=s[t.target.nodeName];var i=o[t.target.type];var n=!e||i;if(!n){this._pointerReset()}return n};n.pointerDownBlur=function(){var t=document.activeElement;var e=t&&t.blur&&t!=document.body;if(e){t.blur()}};n.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]);this._dragMove(t,e,i)};n._dragPointerMove=function(t,e){var i={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};if(!this.isDragging&&this.hasDragStarted(i)){this._dragStart(t,e)}return i};n.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3};n.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]);this._dragPointerUp(t,e)};n._dragPointerUp=function(t,e){if(this.isDragging){this._dragEnd(t,e)}else{this._staticClick(t,e)}};n._dragStart=function(t,e){this.isDragging=true;this.isPreventingClicks=true;this.dragStart(t,e)};n.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])};n._dragMove=function(t,e,i){if(!this.isDragging){return}this.dragMove(t,e,i)};n.dragMove=function(t,e,i){t.preventDefault();this.emitEvent("dragMove",[t,e,i])};n._dragEnd=function(t,e){this.isDragging=false;setTimeout(function(){delete this.isPreventingClicks}.bind(this));this.dragEnd(t,e)};n.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])};n.onclick=function(t){if(this.isPreventingClicks){t.preventDefault()}};n._staticClick=function(t,e){if(this.isIgnoringMouseUp&&t.type=="mouseup"){return}this.staticClick(t,e);if(t.type!="mouseup"){this.isIgnoringMouseUp=true;setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)}};n.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])};i.getPointerPoint=e.getPointerPoint;return i});(function(n,s){if(typeof define=="function"&&define.amd){define("flickity/js/drag",["./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)})}else if(typeof module=="object"&&module.exports){module.exports=s(n,require("./flickity"),require("unidragger"),require("fizzy-ui-utils"))}else{n.Flickity=s(n,n.Flickity,n.Unidragger,n.fizzyUIUtils)}})(window,function t(n,e,i,a){a.extend(e.defaults,{draggable:">1",dragThreshold:3});e.createMethods.push("_createDrag");var s=e.prototype;a.extend(s,i.prototype);s._touchActionValue="pan-y";s._createDrag=function(){this.on("activate",this.onActivateDrag);this.on("uiChange",this._uiChangeDrag);this.on("deactivate",this.onDeactivateDrag);this.on("cellChange",this.updateDraggable)};s.onActivateDrag=function(){this.handles=[this.viewport];this.bindHandles();this.updateDraggable()};s.onDeactivateDrag=function(){this.unbindHandles();this.element.classList.remove("is-draggable")};s.updateDraggable=function(){if(this.options.draggable==">1"){this.isDraggable=this.slides.length>1}else{this.isDraggable=this.options.draggable}if(this.isDraggable){this.element.classList.add("is-draggable")}else{this.element.classList.remove("is-draggable")}};s.bindDrag=function(){this.options.draggable=true;this.updateDraggable()};s.unbindDrag=function(){this.options.draggable=false;this.updateDraggable()};s._uiChangeDrag=function(){delete this.isFreeScrolling};s.pointerDown=function(t,e){if(!this.isDraggable){this._pointerDownDefault(t,e);return}var i=this.okayPointerDown(t);if(!i){return}this._pointerDownPreventDefault(t);this.pointerDownFocus(t);if(document.activeElement!=this.element){this.pointerDownBlur()}this.dragX=this.x;this.viewport.classList.add("is-pointer-down");this.pointerDownScroll=o();n.addEventListener("scroll",this);this._pointerDownDefault(t,e)};s._pointerDownDefault=function(t,e){this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY};this._bindPostStartEvents(t);this.dispatchEvent("pointerDown",t,[e])};var r={INPUT:true,TEXTAREA:true,SELECT:true};s.pointerDownFocus=function(t){var e=r[t.target.nodeName];if(!e){this.focus()}};s._pointerDownPreventDefault=function(t){var e=t.type=="touchstart";var i=t.pointerType=="touch";var n=r[t.target.nodeName];if(!e&&!i&&!n){t.preventDefault()}};s.hasDragStarted=function(t){return Math.abs(t.x)>this.options.dragThreshold};s.pointerUp=function(t,e){delete this.isTouchScrolling;this.viewport.classList.remove("is-pointer-down");this.dispatchEvent("pointerUp",t,[e]);this._dragPointerUp(t,e)};s.pointerDone=function(){n.removeEventListener("scroll",this);delete this.pointerDownScroll};s.dragStart=function(t,e){if(!this.isDraggable){return}this.dragStartPosition=this.x;this.startAnimation();n.removeEventListener("scroll",this);this.dispatchEvent("dragStart",t,[e])};s.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,i]);this._dragMove(t,e,i)};s.dragMove=function(t,e,i){if(!this.isDraggable){return}t.preventDefault();this.previousDragX=this.dragX;var n=this.options.rightToLeft?-1:1;if(this.options.wrapAround){i.x%=this.slideableWidth}var s=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.slides.length){var r=Math.max(-this.slides[0].target,this.dragStartPosition);s=s>r?(s+r)*.5:s;var o=Math.min(-this.getLastSlide().target,this.dragStartPosition);s=s<o?(s+o)*.5:s}this.dragX=s;this.dragMoveTime=new Date;this.dispatchEvent("dragMove",t,[e,i])};s.dragEnd=function(t,e){if(!this.isDraggable){return}if(this.options.freeScroll){this.isFreeScrolling=true}var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingPosition();this.isFreeScrolling=-n>this.slides[0].target&&-n<this.getLastSlide().target}else if(!this.options.freeScroll&&i==this.selectedIndex){i+=this.dragEndBoostSelect()}delete this.previousDragX;this.isDragSelect=this.options.wrapAround;this.select(i);delete this.isDragSelect;this.dispatchEvent("dragEnd",t,[e])};s.dragEndRestingSelect=function(){var t=this.getRestingPosition();var e=Math.abs(this.getSlideDistance(-t,this.selectedIndex));var i=this._getClosestResting(t,e,1);var n=this._getClosestResting(t,e,-1);var s=i.distance<n.distance?i.index:n.index;return s};s._getClosestResting=function(t,e,i){var n=this.selectedIndex;var s=Infinity;var r=this.options.contain&&!this.options.wrapAround?function(t,e){return t<=e}:function(t,e){return t<e};while(r(e,s)){n+=i;s=e;e=this.getSlideDistance(-t,n);if(e===null){break}e=Math.abs(e)}return{distance:s,index:n-i}};s.getSlideDistance=function(t,e){var i=this.slides.length;var n=this.options.wrapAround&&i>1;var s=n?a.modulo(e,i):e;var r=this.slides[s];if(!r){return null}var o=n?this.slideableWidth*Math.floor(e/i):0;return t-(r.target+o)};s.dragEndBoostSelect=function(){if(this.previousDragX===undefined||!this.dragMoveTime||new Date-this.dragMoveTime>100){return 0}var t=this.getSlideDistance(-this.dragX,this.selectedIndex);var e=this.previousDragX-this.dragX;if(t>0&&e>0){return 1}else if(t<0&&e<0){return-1}return 0};s.staticClick=function(t,e){var i=this.getParentCell(t.target);var n=i&&i.element;var s=i&&this.cells.indexOf(i);this.dispatchEvent("staticClick",t,[e,n,s])};s.onscroll=function(){var t=o();var e=this.pointerDownScroll.x-t.x;var i=this.pointerDownScroll.y-t.y;if(Math.abs(e)>3||Math.abs(i)>3){this._pointerDone()}};function o(){return{x:n.pageXOffset,y:n.pageYOffset}}return e});(function(n,s){if(typeof define=="function"&&define.amd){define("flickity/js/prev-next-button",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)})}else if(typeof module=="object"&&module.exports){module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils"))}else{s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}})(window,function t(e,i,n,s){"use strict";var r="http://www.w3.org/2000/svg";function o(t,e){this.direction=t;this.parent=e;this._create()}o.prototype=Object.create(n.prototype);o.prototype._create=function(){this.isEnabled=true;this.isPrevious=this.direction==-1;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");e.className="flickity-button flickity-prev-next-button";e.className+=this.isPrevious?" previous":" next";e.setAttribute("type","button");this.disable();e.setAttribute("aria-label",this.isPrevious?"Previous":"Next");var i=this.createSVG();e.appendChild(i);this.parent.on("select",this.update.bind(this));this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))};o.prototype.activate=function(){this.bindStartEvent(this.element);this.element.addEventListener("click",this);this.parent.element.appendChild(this.element)};o.prototype.deactivate=function(){this.parent.element.removeChild(this.element);this.unbindStartEvent(this.element);this.element.removeEventListener("click",this)};o.prototype.createSVG=function(){var t=document.createElementNS(r,"svg");t.setAttribute("class","flickity-button-icon");t.setAttribute("viewBox","0 0 100 100");var e=document.createElementNS(r,"path");var i=a(this.parent.options.arrowShape);e.setAttribute("d",i);e.setAttribute("class","arrow");if(!this.isLeft){e.setAttribute("transform","translate(100, 100) rotate(180) ")}t.appendChild(e);return t};function a(t){if(typeof t=="string"){return t}return"M "+t.x0+",50"+" L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50 "+" L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z"}o.prototype.handleEvent=s.handleEvent;o.prototype.onclick=function(){if(!this.isEnabled){return}this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()};o.prototype.enable=function(){if(this.isEnabled){return}this.element.disabled=false;this.isEnabled=true};o.prototype.disable=function(){if(!this.isEnabled){return}this.element.disabled=true;this.isEnabled=false};o.prototype.update=function(){var t=this.parent.slides;if(this.parent.options.wrapAround&&t.length>1){this.enable();return}var e=t.length?t.length-1:0;var i=this.isPrevious?0:e;var n=this.parent.selectedIndex==i?"disable":"enable";this[n]()};o.prototype.destroy=function(){this.deactivate();this.allOff()};s.extend(i.defaults,{prevNextButtons:true,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}});i.createMethods.push("_createPrevNextButtons");var l=i.prototype;l._createPrevNextButtons=function(){if(!this.options.prevNextButtons){return}this.prevButton=new o(-1,this);this.nextButton=new o(1,this);this.on("activate",this.activatePrevNextButtons)};l.activatePrevNextButtons=function(){this.prevButton.activate();this.nextButton.activate();this.on("deactivate",this.deactivatePrevNextButtons)};l.deactivatePrevNextButtons=function(){this.prevButton.deactivate();this.nextButton.deactivate();this.off("deactivate",this.deactivatePrevNextButtons)};i.PrevNextButton=o;return i});(function(n,s){if(typeof define=="function"&&define.amd){define("flickity/js/page-dots",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)})}else if(typeof module=="object"&&module.exports){module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils"))}else{s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}})(window,function t(e,i,n,s){function r(t){this.parent=t;this._create()}r.prototype=Object.create(n.prototype);r.prototype._create=function(){this.holder=document.createElement("ol");this.holder.className="flickity-page-dots";this.dots=[];this.handleClick=this.onClick.bind(this);this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))};r.prototype.activate=function(){this.setDots();this.holder.addEventListener("click",this.handleClick);this.bindStartEvent(this.holder);this.parent.element.appendChild(this.holder)};r.prototype.deactivate=function(){this.holder.removeEventListener("click",this.handleClick);this.unbindStartEvent(this.holder);this.parent.element.removeChild(this.holder)};r.prototype.setDots=function(){var t=this.parent.slides.length-this.dots.length;if(t>0){this.addDots(t)}else if(t<0){this.removeDots(-t)}};r.prototype.addDots=function(t){var e=document.createDocumentFragment();var i=[];var n=this.dots.length;var s=n+t;for(var r=n;r<s;r++){var o=document.createElement("li");o.className="dot";o.setAttribute("aria-label","Page dot "+(r+1));e.appendChild(o);i.push(o)}this.holder.appendChild(e);this.dots=this.dots.concat(i)};r.prototype.removeDots=function(t){var e=this.dots.splice(this.dots.length-t,t);e.forEach(function(t){this.holder.removeChild(t)},this)};r.prototype.updateSelected=function(){if(this.selectedDot){this.selectedDot.className="dot";this.selectedDot.removeAttribute("aria-current")}if(!this.dots.length){return}this.selectedDot=this.dots[this.parent.selectedIndex];this.selectedDot.className="dot is-selected";this.selectedDot.setAttribute("aria-current","step")};r.prototype.onTap=r.prototype.onClick=function(t){var e=t.target;if(e.nodeName!="LI"){return}this.parent.uiChange();var i=this.dots.indexOf(e);this.parent.select(i)};r.prototype.destroy=function(){this.deactivate();this.allOff()};i.PageDots=r;s.extend(i.defaults,{pageDots:true});i.createMethods.push("_createPageDots");var o=i.prototype;o._createPageDots=function(){if(!this.options.pageDots){return}this.pageDots=new r(this);this.on("activate",this.activatePageDots);this.on("select",this.updateSelectedPageDots);this.on("cellChange",this.updatePageDots);this.on("resize",this.updatePageDots);this.on("deactivate",this.deactivatePageDots)};o.activatePageDots=function(){this.pageDots.activate()};o.updateSelectedPageDots=function(){this.pageDots.updateSelected()};o.updatePageDots=function(){this.pageDots.setDots()};o.deactivatePageDots=function(){this.pageDots.deactivate()};i.PageDots=r;return i});(function(t,n){if(typeof define=="function"&&define.amd){define("flickity/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickity"],function(t,e,i){return n(t,e,i)})}else if(typeof module=="object"&&module.exports){module.exports=n(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickity"))}else{n(t.EvEmitter,t.fizzyUIUtils,t.Flickity)}})(window,function t(e,i,n){function s(t){this.parent=t;this.state="stopped";this.onVisibilityChange=this.visibilityChange.bind(this);this.onVisibilityPlay=this.visibilityPlay.bind(this)}s.prototype=Object.create(e.prototype);s.prototype.play=function(){if(this.state=="playing"){return}var t=document.hidden;if(t){document.addEventListener("visibilitychange",this.onVisibilityPlay);return}this.state="playing";document.addEventListener("visibilitychange",this.onVisibilityChange);this.tick()};s.prototype.tick=function(){if(this.state!="playing"){return}var t=this.parent.options.autoPlay;t=typeof t=="number"?t:3e3;var e=this;this.clear();this.timeout=setTimeout(function(){e.parent.next(true);e.tick()},t)};s.prototype.stop=function(){this.state="stopped";this.clear();document.removeEventListener("visibilitychange",this.onVisibilityChange)};s.prototype.clear=function(){clearTimeout(this.timeout)};s.prototype.pause=function(){if(this.state=="playing"){this.state="paused";this.clear()}};s.prototype.unpause=function(){if(this.state=="paused"){this.play()}};s.prototype.visibilityChange=function(){var t=document.hidden;this[t?"pause":"unpause"]()};s.prototype.visibilityPlay=function(){this.play();document.removeEventListener("visibilitychange",this.onVisibilityPlay)};i.extend(n.defaults,{pauseAutoPlayOnHover:true});n.createMethods.push("_createPlayer");var r=n.prototype;r._createPlayer=function(){this.player=new s(this);this.on("activate",this.activatePlayer);this.on("uiChange",this.stopPlayer);this.on("pointerDown",this.stopPlayer);this.on("deactivate",this.deactivatePlayer)};r.activatePlayer=function(){if(!this.options.autoPlay){return}this.player.play();this.element.addEventListener("mouseenter",this)};r.playPlayer=function(){this.player.play()};r.stopPlayer=function(){this.player.stop()};r.pausePlayer=function(){this.player.pause()};r.unpausePlayer=function(){this.player.unpause()};r.deactivatePlayer=function(){this.player.stop();this.element.removeEventListener("mouseenter",this)};r.onmouseenter=function(){if(!this.options.pauseAutoPlayOnHover){return}this.player.pause();this.element.addEventListener("mouseleave",this)};r.onmouseleave=function(){this.player.unpause();this.element.removeEventListener("mouseleave",this)};n.Player=s;return n});(function(i,n){if(typeof define=="function"&&define.amd){define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)})}else if(typeof module=="object"&&module.exports){module.exports=n(i,require("./flickity"),require("fizzy-ui-utils"))}else{n(i,i.Flickity,i.fizzyUIUtils)}})(window,function t(e,i,n){function l(t){var e=document.createDocumentFragment();t.forEach(function(t){e.appendChild(t.element)});return e}var s=i.prototype;s.insert=function(t,e){var i=this._makeCells(t);if(!i||!i.length){return}var n=this.cells.length;e=e===undefined?n:e;var s=l(i);var r=e==n;if(r){this.slider.appendChild(s)}else{var o=this.cells[e].element;this.slider.insertBefore(s,o)}if(e===0){this.cells=i.concat(this.cells)}else if(r){this.cells=this.cells.concat(i)}else{var a=this.cells.splice(e,n-e);this.cells=this.cells.concat(i).concat(a)}this._sizeCells(i);this.cellChange(e,true)};s.append=function(t){this.insert(t,this.cells.length)};s.prepend=function(t){this.insert(t,0)};s.remove=function(t){var e=this.getCells(t);if(!e||!e.length){return}var i=this.cells.length-1;e.forEach(function(t){t.remove();var e=this.cells.indexOf(t);i=Math.min(e,i);n.removeFrom(this.cells,t)},this);this.cellChange(i,true)};s.cellSizeChange=function(t){var e=this.getCell(t);if(!e){return}e.getSize();var i=this.cells.indexOf(e);this.cellChange(i)};s.cellChange=function(t,e){var i=this.selectedElement;this._positionCells(t);this._getWrapShiftCells();this.setGallerySize();var n=this.getCell(i);if(n){this.selectedIndex=this.getCellSlideIndex(n)}this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex);this.emitEvent("cellChange",[t]);this.select(this.selectedIndex);if(e){this.positionSliderAtSelected()}};return i});(function(i,n){if(typeof define=="function"&&define.amd){define("flickity/js/lazyload",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)})}else if(typeof module=="object"&&module.exports){module.exports=n(i,require("./flickity"),require("fizzy-ui-utils"))}else{n(i,i.Flickity,i.fizzyUIUtils)}})(window,function t(e,i,o){"use strict";i.createMethods.push("_createLazyload");var n=i.prototype;n._createLazyload=function(){this.on("select",this.lazyLoad)};n.lazyLoad=function(){var t=this.options.lazyLoad;if(!t){return}var e=typeof t=="number"?t:0;var i=this.getAdjacentCellElements(e);var n=[];i.forEach(function(t){var e=s(t);n=n.concat(e)});n.forEach(function(t){new r(t,this)},this)};function s(t){if(t.nodeName=="IMG"){var e=t.getAttribute("data-flickity-lazyload");var i=t.getAttribute("data-flickity-lazyload-src");var n=t.getAttribute("data-flickity-lazyload-srcset");if(e||i||n){return[t]}}var s="img[data-flickity-lazyload], "+"img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]";var r=t.querySelectorAll(s);return o.makeArray(r)}function r(t,e){this.img=t;this.flickity=e;this.load()}r.prototype.handleEvent=o.handleEvent;r.prototype.load=function(){this.img.addEventListener("load",this);this.img.addEventListener("error",this);var t=this.img.getAttribute("data-flickity-lazyload")||this.img.getAttribute("data-flickity-lazyload-src");var e=this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src=t;if(e){this.img.setAttribute("srcset",e)}this.img.removeAttribute("data-flickity-lazyload");this.img.removeAttribute("data-flickity-lazyload-src");this.img.removeAttribute("data-flickity-lazyload-srcset")};r.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")};r.prototype.onerror=function(t){this.complete(t,"flickity-lazyerror")};r.prototype.complete=function(t,e){this.img.removeEventListener("load",this);this.img.removeEventListener("error",this);var i=this.flickity.getParentCell(this.img);var n=i&&i.element;this.flickity.cellSizeChange(n);this.img.classList.add(e);this.flickity.dispatchEvent("lazyLoad",t,n)};i.LazyLoader=r;return i});
/*!
 * Flickity v2.3.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2021 Metafizzy
 */
(function(t,e){if(typeof define=="function"&&define.amd){define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e)}else if(typeof module=="object"&&module.exports){module.exports=e(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload"))}})(window,function t(e){return e});
/*!
 * Flickity asNavFor v2.0.2
 * enable asNavFor for Flickity
 */
(function(t,e){if(typeof define=="function"&&define.amd){define("flickity-as-nav-for/as-nav-for",["flickity/js/index","fizzy-ui-utils/utils"],e)}else if(typeof module=="object"&&module.exports){module.exports=e(require("flickity"),require("fizzy-ui-utils"))}else{t.Flickity=e(t.Flickity,t.fizzyUIUtils)}})(window,function t(n,s){n.createMethods.push("_createAsNavFor");var e=n.prototype;e._createAsNavFor=function(){this.on("activate",this.activateAsNavFor);this.on("deactivate",this.deactivateAsNavFor);this.on("destroy",this.destroyAsNavFor);var e=this.options.asNavFor;if(!e){return}var i=this;setTimeout(function t(){i.setNavCompanion(e)})};e.setNavCompanion=function(t){t=s.getQueryElement(t);var e=n.data(t);if(!e||e==this){return}this.navCompanion=e;var i=this;this.onNavCompanionSelect=function(){i.navCompanionSelect()};e.on("select",this.onNavCompanionSelect);this.on("staticClick",this.onNavStaticClick);this.navCompanionSelect(true)};e.navCompanionSelect=function(t){var e=this.navCompanion&&this.navCompanion.selectedCells;if(!e){return}var i=e[0];var n=this.navCompanion.cells.indexOf(i);var s=n+e.length-1;var r=Math.floor(a(n,s,this.navCompanion.cellAlign));this.selectCell(r,false,t);this.removeNavSelectedElements();if(r>=this.cells.length){return}var o=this.cells.slice(n,s+1);this.navSelectedElements=o.map(function(t){return t.element});this.changeNavSelectedClass("add")};function a(t,e,i){return(e-t)*i+t}e.changeNavSelectedClass=function(e){this.navSelectedElements.forEach(function(t){t.classList[e]("is-nav-selected")})};e.activateAsNavFor=function(){this.navCompanionSelect(true)};e.removeNavSelectedElements=function(){if(!this.navSelectedElements){return}this.changeNavSelectedClass("remove");delete this.navSelectedElements};e.onNavStaticClick=function(t,e,i,n){if(typeof n=="number"){this.navCompanion.selectCell(n)}};e.deactivateAsNavFor=function(){this.removeNavSelectedElements()};e.destroyAsNavFor=function(){if(!this.navCompanion){return}this.navCompanion.off("select",this.onNavCompanionSelect);this.off("staticClick",this.onNavStaticClick);delete this.navCompanion};return n});
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(e,i){"use strict";if(typeof define=="function"&&define.amd){define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("ev-emitter"))}else{e.imagesLoaded=i(e,e.EvEmitter)}})(typeof window!=="undefined"?window:this,function t(e,i){var s=e.jQuery;var r=e.console;function o(t,e){for(var i in e){t[i]=e[i]}return t}var n=Array.prototype.slice;function a(t){if(Array.isArray(t)){return t}var e=typeof t=="object"&&typeof t.length=="number";if(e){return n.call(t)}return[t]}function l(t,e,i){if(!(this instanceof l)){return new l(t,e,i)}var n=t;if(typeof t=="string"){n=document.querySelectorAll(t)}if(!n){r.error("Bad element for imagesLoaded "+(n||t));return}this.elements=a(n);this.options=o({},this.options);if(typeof e=="function"){i=e}else{o(this.options,e)}if(i){this.on("always",i)}this.getImages();if(s){this.jqDeferred=new s.Deferred}setTimeout(this.check.bind(this))}l.prototype=Object.create(i.prototype);l.prototype.options={};l.prototype.getImages=function(){this.images=[];this.elements.forEach(this.addElementImages,this)};l.prototype.addElementImages=function(t){if(t.nodeName=="IMG"){this.addImage(t)}if(this.options.background===true){this.addElementBackgroundImages(t)}var e=t.nodeType;if(!e||!h[e]){return}var i=t.querySelectorAll("img");for(var n=0;n<i.length;n++){var s=i[n];this.addImage(s)}if(typeof this.options.background=="string"){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var o=r[n];this.addElementBackgroundImages(o)}}};var h={1:true,9:true,11:true};l.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(!e){return}var i=/url\((['"])?(.*?)\1\)/gi;var n=i.exec(e.backgroundImage);while(n!==null){var s=n&&n[2];if(s){this.addBackground(s,t)}n=i.exec(e.backgroundImage)}};l.prototype.addImage=function(t){var e=new c(t);this.images.push(e)};l.prototype.addBackground=function(t,e){var i=new u(t,e);this.images.push(i)};l.prototype.check=function(){var n=this;this.progressedCount=0;this.hasAnyBroken=false;if(!this.images.length){this.complete();return}function e(t,e,i){setTimeout(function(){n.progress(t,e,i)})}this.images.forEach(function(t){t.once("progress",e);t.check()})};l.prototype.progress=function(t,e,i){this.progressedCount++;this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded;this.emitEvent("progress",[this,t,e]);if(this.jqDeferred&&this.jqDeferred.notify){this.jqDeferred.notify(this,t)}if(this.progressedCount==this.images.length){this.complete()}if(this.options.debug&&r){r.log("progress: "+i,t,e)}};l.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";this.isComplete=true;this.emitEvent(t,[this]);this.emitEvent("always",[this]);if(this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}};function c(t){this.img=t}c.prototype=Object.create(i.prototype);c.prototype.check=function(){var t=this.getIsImageComplete();if(t){this.confirm(this.img.naturalWidth!==0,"naturalWidth");return}this.proxyImage=new Image;this.proxyImage.addEventListener("load",this);this.proxyImage.addEventListener("error",this);this.img.addEventListener("load",this);this.img.addEventListener("error",this);this.proxyImage.src=this.img.src};c.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth};c.prototype.confirm=function(t,e){this.isLoaded=t;this.emitEvent("progress",[this,this.img,e])};c.prototype.handleEvent=function(t){var e="on"+t.type;if(this[e]){this[e](t)}};c.prototype.onload=function(){this.confirm(true,"onload");this.unbindEvents()};c.prototype.onerror=function(){this.confirm(false,"onerror");this.unbindEvents()};c.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this);this.proxyImage.removeEventListener("error",this);this.img.removeEventListener("load",this);this.img.removeEventListener("error",this)};function u(t,e){this.url=t;this.element=e;this.img=new Image}u.prototype=Object.create(c.prototype);u.prototype.check=function(){this.img.addEventListener("load",this);this.img.addEventListener("error",this);this.img.src=this.url;var t=this.getIsImageComplete();if(t){this.confirm(this.img.naturalWidth!==0,"naturalWidth");this.unbindEvents()}};u.prototype.unbindEvents=function(){this.img.removeEventListener("load",this);this.img.removeEventListener("error",this)};u.prototype.confirm=function(t,e){this.isLoaded=t;this.emitEvent("progress",[this,this.element,e])};l.makeJQueryPlugin=function(t){t=t||e.jQuery;if(!t){return}s=t;s.fn.imagesLoaded=function(t,e){var i=new l(this,t,e);return i.jqDeferred.promise(s(this))}};l.makeJQueryPlugin();return l});
/*!
 * Flickity imagesLoaded v2.0.0
 * enables imagesLoaded option for Flickity
 */
(function(i,n){if(typeof define=="function"&&define.amd){define(["flickity/js/index","imagesloaded/imagesloaded"],function(t,e){return n(i,t,e)})}else if(typeof module=="object"&&module.exports){module.exports=n(i,require("flickity"),require("imagesloaded"))}else{i.Flickity=n(i,i.Flickity,i.imagesLoaded)}})(window,function t(e,i,s){"use strict";i.createMethods.push("_createImagesLoaded");var n=i.prototype;n._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)};n.imagesLoaded=function(){if(!this.options.imagesLoaded){return}var n=this;function t(t,e){var i=n.getParentCell(e.img);n.cellSizeChange(i&&i.element);if(!n.options.freeScroll){n.positionSliderAtSelected()}}s(this.slider).on("progress",t)};return i});
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
			(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.IMask = {}));
})(this, (function (exports) {
	'use strict';

	/** Checks if value is string */
	function isString(str) {
		return typeof str === 'string' || str instanceof String;
	}

	/** Checks if value is object */
	function isObject(obj) {
		var _obj$constructor;
		return typeof obj === 'object' && obj != null && (obj == null || (_obj$constructor = obj.constructor) == null ? void 0 : _obj$constructor.name) === 'Object';
	}
	function pick(obj, keys) {
		if (Array.isArray(keys)) return pick(obj, (_, k) => keys.includes(k));
		return Object.entries(obj).reduce((acc, _ref) => {
			let [k, v] = _ref;
			if (keys(v, k)) acc[k] = v;
			return acc;
		}, {});
	}

	/** Direction */
	const DIRECTION = {
		NONE: 'NONE',
		LEFT: 'LEFT',
		FORCE_LEFT: 'FORCE_LEFT',
		RIGHT: 'RIGHT',
		FORCE_RIGHT: 'FORCE_RIGHT'
	};

	/** Direction */

	function forceDirection(direction) {
		switch (direction) {
			case DIRECTION.LEFT:
				return DIRECTION.FORCE_LEFT;
			case DIRECTION.RIGHT:
				return DIRECTION.FORCE_RIGHT;
			default:
				return direction;
		}
	}

	/** Escapes regular expression control chars */
	function escapeRegExp(str) {
		return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
	}

	// cloned from https://github.com/epoberezkin/fast-deep-equal with small changes
	function objectIncludes(b, a) {
		if (a === b) return true;
		const arrA = Array.isArray(a),
			arrB = Array.isArray(b);
		let i;
		if (arrA && arrB) {
			if (a.length != b.length) return false;
			for (i = 0; i < a.length; i++) if (!objectIncludes(a[i], b[i])) return false;
			return true;
		}
		if (arrA != arrB) return false;
		if (a && b && typeof a === 'object' && typeof b === 'object') {
			const dateA = a instanceof Date,
				dateB = b instanceof Date;
			if (dateA && dateB) return a.getTime() == b.getTime();
			if (dateA != dateB) return false;
			const regexpA = a instanceof RegExp,
				regexpB = b instanceof RegExp;
			if (regexpA && regexpB) return a.toString() == b.toString();
			if (regexpA != regexpB) return false;
			const keys = Object.keys(a);
			// if (keys.length !== Object.keys(b).length) return false;

			for (i = 0; i < keys.length; i++) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
			for (i = 0; i < keys.length; i++) if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
			return true;
		} else if (a && b && typeof a === 'function' && typeof b === 'function') {
			return a.toString() === b.toString();
		}
		return false;
	}

	/** Selection range */

	/** Provides details of changing input */
	class ActionDetails {
		/** Current input value */

		/** Current cursor position */

		/** Old input value */

		/** Old selection */

		constructor(opts) {
			Object.assign(this, opts);

			// double check if left part was changed (autofilling, other non-standard input triggers)
			while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
				--this.oldSelection.start;
			}
			if (this.insertedCount) {
				// double check right part
				while (this.value.slice(this.cursorPos) !== this.oldValue.slice(this.oldSelection.end)) {
					if (this.value.length - this.cursorPos < this.oldValue.length - this.oldSelection.end) ++this.oldSelection.end; else ++this.cursorPos;
				}
			}
		}

		/** Start changing position */
		get startChangePos() {
			return Math.min(this.cursorPos, this.oldSelection.start);
		}

		/** Inserted symbols count */
		get insertedCount() {
			return this.cursorPos - this.startChangePos;
		}

		/** Inserted symbols */
		get inserted() {
			return this.value.substr(this.startChangePos, this.insertedCount);
		}

		/** Removed symbols count */
		get removedCount() {
			// Math.max for opposite operation
			return Math.max(this.oldSelection.end - this.startChangePos ||
				// for Delete
				this.oldValue.length - this.value.length, 0);
		}

		/** Removed symbols */
		get removed() {
			return this.oldValue.substr(this.startChangePos, this.removedCount);
		}

		/** Unchanged head symbols */
		get head() {
			return this.value.substring(0, this.startChangePos);
		}

		/** Unchanged tail symbols */
		get tail() {
			return this.value.substring(this.startChangePos + this.insertedCount);
		}

		/** Remove direction */
		get removeDirection() {
			if (!this.removedCount || this.insertedCount) return DIRECTION.NONE;

			// align right if delete at right
			return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) &&
				// if not range removed (event with backspace)
				this.oldSelection.end === this.oldSelection.start ? DIRECTION.RIGHT : DIRECTION.LEFT;
		}
	}

	/** Applies mask on element */
	function IMask(el, opts) {
		// currently available only for input-like elements
		return new IMask.InputMask(el, opts);
	}

	// TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754
	// export function maskedClass(mask: string): typeof MaskedPattern;
	// export function maskedClass(mask: DateConstructor): typeof MaskedDate;
	// export function maskedClass(mask: NumberConstructor): typeof MaskedNumber;
	// export function maskedClass(mask: Array<any> | ArrayConstructor): typeof MaskedDynamic;
	// export function maskedClass(mask: MaskedDate): typeof MaskedDate;
	// export function maskedClass(mask: MaskedNumber): typeof MaskedNumber;
	// export function maskedClass(mask: MaskedEnum): typeof MaskedEnum;
	// export function maskedClass(mask: MaskedRange): typeof MaskedRange;
	// export function maskedClass(mask: MaskedRegExp): typeof MaskedRegExp;
	// export function maskedClass(mask: MaskedFunction): typeof MaskedFunction;
	// export function maskedClass(mask: MaskedPattern): typeof MaskedPattern;
	// export function maskedClass(mask: MaskedDynamic): typeof MaskedDynamic;
	// export function maskedClass(mask: Masked): typeof Masked;
	// export function maskedClass(mask: typeof Masked): typeof Masked;
	// export function maskedClass(mask: typeof MaskedDate): typeof MaskedDate;
	// export function maskedClass(mask: typeof MaskedNumber): typeof MaskedNumber;
	// export function maskedClass(mask: typeof MaskedEnum): typeof MaskedEnum;
	// export function maskedClass(mask: typeof MaskedRange): typeof MaskedRange;
	// export function maskedClass(mask: typeof MaskedRegExp): typeof MaskedRegExp;
	// export function maskedClass(mask: typeof MaskedFunction): typeof MaskedFunction;
	// export function maskedClass(mask: typeof MaskedPattern): typeof MaskedPattern;
	// export function maskedClass(mask: typeof MaskedDynamic): typeof MaskedDynamic;
	// export function maskedClass<Mask extends typeof Masked> (mask: Mask): Mask;
	// export function maskedClass(mask: RegExp): typeof MaskedRegExp;
	// export function maskedClass(mask: (value: string, ...args: any[]) => boolean): typeof MaskedFunction;

	/** Get Masked class by mask type */
	function maskedClass(mask) /* TODO */ {
		if (mask == null) throw new Error('mask property should be defined');
		if (mask instanceof RegExp) return IMask.MaskedRegExp;
		if (isString(mask)) return IMask.MaskedPattern;
		if (mask === Date) return IMask.MaskedDate;
		if (mask === Number) return IMask.MaskedNumber;
		if (Array.isArray(mask) || mask === Array) return IMask.MaskedDynamic;
		if (IMask.Masked && mask.prototype instanceof IMask.Masked) return mask;
		if (IMask.Masked && mask instanceof IMask.Masked) return mask.constructor;
		if (mask instanceof Function) return IMask.MaskedFunction;
		console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
		return IMask.Masked;
	}
	function normalizeOpts(opts) {
		if (!opts) throw new Error('Options in not defined');
		if (IMask.Masked) {
			if (opts.prototype instanceof IMask.Masked) return {
				mask: opts
			};

			/*
			  handle cases like:
			  1) opts = Masked
			  2) opts = { mask: Masked, ...instanceOpts }
			*/
			const {
				mask = undefined,
				...instanceOpts
			} = opts instanceof IMask.Masked ? {
				mask: opts
			} : isObject(opts) && opts.mask instanceof IMask.Masked ? opts : {};
			if (mask) {
				const _mask = mask.mask;
				return {
					...pick(mask, (_, k) => !k.startsWith('_')),
					mask: mask.constructor,
					_mask,
					...instanceOpts
				};
			}
		}
		if (!isObject(opts)) return {
			mask: opts
		};
		return {
			...opts
		};
	}

	// TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754

	// From masked
	// export default function createMask<Opts extends Masked, ReturnMasked=Opts> (opts: Opts): ReturnMasked;
	// // From masked class
	// export default function createMask<Opts extends MaskedOptions<typeof Masked>, ReturnMasked extends Masked=InstanceType<Opts['mask']>> (opts: Opts): ReturnMasked;
	// export default function createMask<Opts extends MaskedOptions<typeof MaskedDate>, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
	// export default function createMask<Opts extends MaskedOptions<typeof MaskedNumber>, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
	// export default function createMask<Opts extends MaskedOptions<typeof MaskedEnum>, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
	// export default function createMask<Opts extends MaskedOptions<typeof MaskedRange>, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
	// export default function createMask<Opts extends MaskedOptions<typeof MaskedRegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
	// export default function createMask<Opts extends MaskedOptions<typeof MaskedFunction>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;
	// export default function createMask<Opts extends MaskedOptions<typeof MaskedPattern>, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
	// export default function createMask<Opts extends MaskedOptions<typeof MaskedDynamic>, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
	// // From mask opts
	// export default function createMask<Opts extends MaskedOptions<Masked>, ReturnMasked=Opts extends MaskedOptions<infer M> ? M : never> (opts: Opts): ReturnMasked;
	// export default function createMask<Opts extends MaskedNumberOptions, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
	// export default function createMask<Opts extends MaskedDateFactoryOptions, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
	// export default function createMask<Opts extends MaskedEnumOptions, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
	// export default function createMask<Opts extends MaskedRangeOptions, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
	// export default function createMask<Opts extends MaskedPatternOptions, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
	// export default function createMask<Opts extends MaskedDynamicOptions, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
	// export default function createMask<Opts extends MaskedOptions<RegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
	// export default function createMask<Opts extends MaskedOptions<Function>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;

	/** Creates new {@link Masked} depending on mask type */
	function createMask(opts) {
		if (IMask.Masked && opts instanceof IMask.Masked) return opts;
		const nOpts = normalizeOpts(opts);
		const MaskedClass = maskedClass(nOpts.mask);
		if (!MaskedClass) throw new Error("Masked class is not found for provided mask " + nOpts.mask + ", appropriate module needs to be imported manually before creating mask.");
		if (nOpts.mask === MaskedClass) delete nOpts.mask;
		if (nOpts._mask) {
			nOpts.mask = nOpts._mask;
			delete nOpts._mask;
		}
		return new MaskedClass(nOpts);
	}
	IMask.createMask = createMask;

	/**  Generic element API to use with mask */
	class MaskElement {
		/** */

		/** */

		/** */

		/** Safely returns selection start */
		get selectionStart() {
			let start;
			try {
				start = this._unsafeSelectionStart;
			} catch { }
			return start != null ? start : this.value.length;
		}

		/** Safely returns selection end */
		get selectionEnd() {
			let end;
			try {
				end = this._unsafeSelectionEnd;
			} catch { }
			return end != null ? end : this.value.length;
		}

		/** Safely sets element selection */
		select(start, end) {
			if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;
			try {
				this._unsafeSelect(start, end);
			} catch { }
		}

		/** */
		get isActive() {
			return false;
		}
		/** */

		/** */

		/** */
	}
	IMask.MaskElement = MaskElement;

	const KEY_Z = 90;
	const KEY_Y = 89;

	/** Bridge between HTMLElement and {@link Masked} */
	class HTMLMaskElement extends MaskElement {
		/** HTMLElement to use mask on */

		constructor(input) {
			super();
			this.input = input;
			this._onKeydown = this._onKeydown.bind(this);
			this._onInput = this._onInput.bind(this);
			this._onBeforeinput = this._onBeforeinput.bind(this);
			this._onCompositionEnd = this._onCompositionEnd.bind(this);
		}
		get rootElement() {
			var _this$input$getRootNo, _this$input$getRootNo2, _this$input;
			return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) == null ? void 0 : _this$input$getRootNo2.call(_this$input)) != null ? _this$input$getRootNo : document;
		}

		/** Is element in focus */
		get isActive() {
			return this.input === this.rootElement.activeElement;
		}

		/** Binds HTMLElement events to mask internal events */
		bindEvents(handlers) {
			this.input.addEventListener('keydown', this._onKeydown);
			this.input.addEventListener('input', this._onInput);
			this.input.addEventListener('beforeinput', this._onBeforeinput);
			this.input.addEventListener('compositionend', this._onCompositionEnd);
			this.input.addEventListener('drop', handlers.drop);
			this.input.addEventListener('click', handlers.click);
			this.input.addEventListener('focus', handlers.focus);
			this.input.addEventListener('blur', handlers.commit);
			this._handlers = handlers;
		}
		_onKeydown(e) {
			if (this._handlers.redo && (e.keyCode === KEY_Z && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === KEY_Y && e.ctrlKey)) {
				e.preventDefault();
				return this._handlers.redo(e);
			}
			if (this._handlers.undo && e.keyCode === KEY_Z && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				return this._handlers.undo(e);
			}
			if (!e.isComposing) this._handlers.selectionChange(e);
		}
		_onBeforeinput(e) {
			if (e.inputType === 'historyUndo' && this._handlers.undo) {
				e.preventDefault();
				return this._handlers.undo(e);
			}
			if (e.inputType === 'historyRedo' && this._handlers.redo) {
				e.preventDefault();
				return this._handlers.redo(e);
			}
		}
		_onCompositionEnd(e) {
			this._handlers.input(e);
		}
		_onInput(e) {
			if (!e.isComposing) this._handlers.input(e);
		}

		/** Unbinds HTMLElement events to mask internal events */
		unbindEvents() {
			this.input.removeEventListener('keydown', this._onKeydown);
			this.input.removeEventListener('input', this._onInput);
			this.input.removeEventListener('beforeinput', this._onBeforeinput);
			this.input.removeEventListener('compositionend', this._onCompositionEnd);
			this.input.removeEventListener('drop', this._handlers.drop);
			this.input.removeEventListener('click', this._handlers.click);
			this.input.removeEventListener('focus', this._handlers.focus);
			this.input.removeEventListener('blur', this._handlers.commit);
			this._handlers = {};
		}
	}
	IMask.HTMLMaskElement = HTMLMaskElement;

	/** Bridge between InputElement and {@link Masked} */
	class HTMLInputMaskElement extends HTMLMaskElement {
		/** InputElement to use mask on */

		constructor(input) {
			super(input);
			this.input = input;
		}

		/** Returns InputElement selection start */
		get _unsafeSelectionStart() {
			return this.input.selectionStart != null ? this.input.selectionStart : this.value.length;
		}

		/** Returns InputElement selection end */
		get _unsafeSelectionEnd() {
			return this.input.selectionEnd;
		}

		/** Sets InputElement selection */
		_unsafeSelect(start, end) {
			this.input.setSelectionRange(start, end);
		}
		get value() {
			return this.input.value;
		}
		set value(value) {
			this.input.value = value;
		}
	}
	IMask.HTMLMaskElement = HTMLMaskElement;

	class HTMLContenteditableMaskElement extends HTMLMaskElement {
		/** Returns HTMLElement selection start */
		get _unsafeSelectionStart() {
			const root = this.rootElement;
			const selection = root.getSelection && root.getSelection();
			const anchorOffset = selection && selection.anchorOffset;
			const focusOffset = selection && selection.focusOffset;
			if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
				return anchorOffset;
			}
			return focusOffset;
		}

		/** Returns HTMLElement selection end */
		get _unsafeSelectionEnd() {
			const root = this.rootElement;
			const selection = root.getSelection && root.getSelection();
			const anchorOffset = selection && selection.anchorOffset;
			const focusOffset = selection && selection.focusOffset;
			if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
				return anchorOffset;
			}
			return focusOffset;
		}

		/** Sets HTMLElement selection */
		_unsafeSelect(start, end) {
			if (!this.rootElement.createRange) return;
			const range = this.rootElement.createRange();
			range.setStart(this.input.firstChild || this.input, start);
			range.setEnd(this.input.lastChild || this.input, end);
			const root = this.rootElement;
			const selection = root.getSelection && root.getSelection();
			if (selection) {
				selection.removeAllRanges();
				selection.addRange(range);
			}
		}

		/** HTMLElement value */
		get value() {
			return this.input.textContent || '';
		}
		set value(value) {
			this.input.textContent = value;
		}
	}
	IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;

	class InputHistory {
		constructor() {
			this.states = [];
			this.currentIndex = 0;
		}
		get currentState() {
			return this.states[this.currentIndex];
		}
		get isEmpty() {
			return this.states.length === 0;
		}
		push(state) {
			// if current index points before the last element then remove the future
			if (this.currentIndex < this.states.length - 1) this.states.length = this.currentIndex + 1;
			this.states.push(state);
			if (this.states.length > InputHistory.MAX_LENGTH) this.states.shift();
			this.currentIndex = this.states.length - 1;
		}
		go(steps) {
			this.currentIndex = Math.min(Math.max(this.currentIndex + steps, 0), this.states.length - 1);
			return this.currentState;
		}
		undo() {
			return this.go(-1);
		}
		redo() {
			return this.go(+1);
		}
		clear() {
			this.states.length = 0;
			this.currentIndex = 0;
		}
	}
	InputHistory.MAX_LENGTH = 100;

	/** Listens to element events and controls changes between element and {@link Masked} */
	class InputMask {
		/**
		  View element
		*/

		/** Internal {@link Masked} model */

		constructor(el, opts) {
			this.el = el instanceof MaskElement ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new HTMLContenteditableMaskElement(el) : new HTMLInputMaskElement(el);
			this.masked = createMask(opts);
			this._listeners = {};
			this._value = '';
			this._unmaskedValue = '';
			this._rawInputValue = '';
			this.history = new InputHistory();
			this._saveSelection = this._saveSelection.bind(this);
			this._onInput = this._onInput.bind(this);
			this._onChange = this._onChange.bind(this);
			this._onDrop = this._onDrop.bind(this);
			this._onFocus = this._onFocus.bind(this);
			this._onClick = this._onClick.bind(this);
			this._onUndo = this._onUndo.bind(this);
			this._onRedo = this._onRedo.bind(this);
			this.alignCursor = this.alignCursor.bind(this);
			this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
			this._bindEvents();

			// refresh
			this.updateValue();
			this._onChange();
		}
		maskEquals(mask) {
			var _this$masked;
			return mask == null || ((_this$masked = this.masked) == null ? void 0 : _this$masked.maskEquals(mask));
		}

		/** Masked */
		get mask() {
			return this.masked.mask;
		}
		set mask(mask) {
			if (this.maskEquals(mask)) return;
			if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
				// TODO "any" no idea
				this.masked.updateOptions({
					mask
				});
				return;
			}
			const masked = mask instanceof IMask.Masked ? mask : createMask({
				mask
			});
			masked.unmaskedValue = this.masked.unmaskedValue;
			this.masked = masked;
		}

		/** Raw value */
		get value() {
			return this._value;
		}
		set value(str) {
			if (this.value === str) return;
			this.masked.value = str;
			this.updateControl('auto');
		}

		/** Unmasked value */
		get unmaskedValue() {
			return this._unmaskedValue;
		}
		set unmaskedValue(str) {
			if (this.unmaskedValue === str) return;
			this.masked.unmaskedValue = str;
			this.updateControl('auto');
		}

		/** Raw input value */
		get rawInputValue() {
			return this._rawInputValue;
		}
		set rawInputValue(str) {
			if (this.rawInputValue === str) return;
			this.masked.rawInputValue = str;
			this.updateControl();
			this.alignCursor();
		}

		/** Typed unmasked value */
		get typedValue() {
			return this.masked.typedValue;
		}
		set typedValue(val) {
			if (this.masked.typedValueEquals(val)) return;
			this.masked.typedValue = val;
			this.updateControl('auto');
		}

		/** Display value */
		get displayValue() {
			return this.masked.displayValue;
		}

		/** Starts listening to element events */
		_bindEvents() {
			this.el.bindEvents({
				selectionChange: this._saveSelection,
				input: this._onInput,
				drop: this._onDrop,
				click: this._onClick,
				focus: this._onFocus,
				commit: this._onChange,
				undo: this._onUndo,
				redo: this._onRedo
			});
		}

		/** Stops listening to element events */
		_unbindEvents() {
			if (this.el) this.el.unbindEvents();
		}

		/** Fires custom event */
		_fireEvent(ev, e) {
			const listeners = this._listeners[ev];
			if (!listeners) return;
			listeners.forEach(l => l(e));
		}

		/** Current selection start */
		get selectionStart() {
			return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
		}

		/** Current cursor position */
		get cursorPos() {
			return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
		}
		set cursorPos(pos) {
			if (!this.el || !this.el.isActive) return;
			this.el.select(pos, pos);
			this._saveSelection();
		}

		/** Stores current selection */
		_saveSelection( /* ev */
		) {
			if (this.displayValue !== this.el.value) {
				console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
			}
			this._selection = {
				start: this.selectionStart,
				end: this.cursorPos
			};
		}

		/** Syncronizes model value from view */
		updateValue() {
			this.masked.value = this.el.value;
			this._value = this.masked.value;
			this._unmaskedValue = this.masked.unmaskedValue;
			this._rawInputValue = this.masked.rawInputValue;
		}

		/** Syncronizes view from model value, fires change events */
		updateControl(cursorPos) {
			const newUnmaskedValue = this.masked.unmaskedValue;
			const newValue = this.masked.value;
			const newRawInputValue = this.masked.rawInputValue;
			const newDisplayValue = this.displayValue;
			const isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue || this._rawInputValue !== newRawInputValue;
			this._unmaskedValue = newUnmaskedValue;
			this._value = newValue;
			this._rawInputValue = newRawInputValue;
			if (this.el.value !== newDisplayValue) this.el.value = newDisplayValue;
			if (cursorPos === 'auto') this.alignCursor(); else if (cursorPos != null) this.cursorPos = cursorPos;
			if (isChanged) this._fireChangeEvents();
			if (!this._historyChanging && (isChanged || this.history.isEmpty)) this.history.push({
				unmaskedValue: newUnmaskedValue,
				selection: {
					start: this.selectionStart,
					end: this.cursorPos
				}
			});
		}

		/** Updates options with deep equal check, recreates {@link Masked} model if mask type changes */
		updateOptions(opts) {
			const {
				mask,
				...restOpts
			} = opts; // TODO types, yes, mask is optional

			const updateMask = !this.maskEquals(mask);
			const updateOpts = this.masked.optionsIsChanged(restOpts);
			if (updateMask) this.mask = mask;
			if (updateOpts) this.masked.updateOptions(restOpts); // TODO

			if (updateMask || updateOpts) this.updateControl();
		}

		/** Updates cursor */
		updateCursor(cursorPos) {
			if (cursorPos == null) return;
			this.cursorPos = cursorPos;

			// also queue change cursor for mobile browsers
			this._delayUpdateCursor(cursorPos);
		}

		/** Delays cursor update to support mobile browsers */
		_delayUpdateCursor(cursorPos) {
			this._abortUpdateCursor();
			this._changingCursorPos = cursorPos;
			this._cursorChanging = setTimeout(() => {
				if (!this.el) return; // if was destroyed
				this.cursorPos = this._changingCursorPos;
				this._abortUpdateCursor();
			}, 10);
		}

		/** Fires custom events */
		_fireChangeEvents() {
			this._fireEvent('accept', this._inputEvent);
			if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
		}

		/** Aborts delayed cursor update */
		_abortUpdateCursor() {
			if (this._cursorChanging) {
				clearTimeout(this._cursorChanging);
				delete this._cursorChanging;
			}
		}

		/** Aligns cursor to nearest available position */
		alignCursor() {
			this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT));
		}

		/** Aligns cursor only if selection is empty */
		alignCursorFriendly() {
			if (this.selectionStart !== this.cursorPos) return; // skip if range is selected
			this.alignCursor();
		}

		/** Adds listener on custom event */
		on(ev, handler) {
			if (!this._listeners[ev]) this._listeners[ev] = [];
			this._listeners[ev].push(handler);
			return this;
		}

		/** Removes custom event listener */
		off(ev, handler) {
			if (!this._listeners[ev]) return this;
			if (!handler) {
				delete this._listeners[ev];
				return this;
			}
			const hIndex = this._listeners[ev].indexOf(handler);
			if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
			return this;
		}

		/** Handles view input event */
		_onInput(e) {
			this._inputEvent = e;
			this._abortUpdateCursor();
			const details = new ActionDetails({
				// new state
				value: this.el.value,
				cursorPos: this.cursorPos,
				// old state
				oldValue: this.displayValue,
				oldSelection: this._selection
			});
			const oldRawValue = this.masked.rawInputValue;
			const offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection, {
				input: true,
				raw: true
			}).offset;

			// force align in remove direction only if no input chars were removed
			// otherwise we still need to align with NONE (to get out from fixed symbols for instance)
			const removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
			let cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
			if (removeDirection !== DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, DIRECTION.NONE);
			this.updateControl(cursorPos);
			delete this._inputEvent;
		}

		/** Handles view change event and commits model value */
		_onChange() {
			if (this.displayValue !== this.el.value) this.updateValue();
			this.masked.doCommit();
			this.updateControl();
			this._saveSelection();
		}

		/** Handles view drop event, prevents by default */
		_onDrop(ev) {
			ev.preventDefault();
			ev.stopPropagation();
		}

		/** Restore last selection on focus */
		_onFocus(ev) {
			this.alignCursorFriendly();
		}

		/** Restore last selection on focus */
		_onClick(ev) {
			this.alignCursorFriendly();
		}
		_onUndo() {
			this._applyHistoryState(this.history.undo());
		}
		_onRedo() {
			this._applyHistoryState(this.history.redo());
		}
		_applyHistoryState(state) {
			if (!state) return;
			this._historyChanging = true;
			this.unmaskedValue = state.unmaskedValue;
			this.el.select(state.selection.start, state.selection.end);
			this._saveSelection();
			this._historyChanging = false;
		}

		/** Unbind view events and removes element reference */
		destroy() {
			this._unbindEvents();
			this._listeners.length = 0;
			delete this.el;
		}
	}
	IMask.InputMask = InputMask;

	/** Provides details of changing model value */
	class ChangeDetails {
		/** Inserted symbols */

		/** Additional offset if any changes occurred before tail */

		/** Raw inserted is used by dynamic mask */

		/** Can skip chars */

		static normalize(prep) {
			return Array.isArray(prep) ? prep : [prep, new ChangeDetails()];
		}
		constructor(details) {
			Object.assign(this, {
				inserted: '',
				rawInserted: '',
				tailShift: 0,
				skip: false
			}, details);
		}

		/** Aggregate changes */
		aggregate(details) {
			this.inserted += details.inserted;
			this.rawInserted += details.rawInserted;
			this.tailShift += details.tailShift;
			this.skip = this.skip || details.skip;
			return this;
		}

		/** Total offset considering all changes */
		get offset() {
			return this.tailShift + this.inserted.length;
		}
		get consumed() {
			return Boolean(this.rawInserted) || this.skip;
		}
		equals(details) {
			return this.inserted === details.inserted && this.tailShift === details.tailShift && this.rawInserted === details.rawInserted && this.skip === details.skip;
		}
	}
	IMask.ChangeDetails = ChangeDetails;

	/** Provides details of continuous extracted tail */
	class ContinuousTailDetails {
		/** Tail value as string */

		/** Tail start position */

		/** Start position */

		constructor(value, from, stop) {
			if (value === void 0) {
				value = '';
			}
			if (from === void 0) {
				from = 0;
			}
			this.value = value;
			this.from = from;
			this.stop = stop;
		}
		toString() {
			return this.value;
		}
		extend(tail) {
			this.value += String(tail);
		}
		appendTo(masked) {
			return masked.append(this.toString(), {
				tail: true
			}).aggregate(masked._appendPlaceholder());
		}
		get state() {
			return {
				value: this.value,
				from: this.from,
				stop: this.stop
			};
		}
		set state(state) {
			Object.assign(this, state);
		}
		unshift(beforePos) {
			if (!this.value.length || beforePos != null && this.from >= beforePos) return '';
			const shiftChar = this.value[0];
			this.value = this.value.slice(1);
			return shiftChar;
		}
		shift() {
			if (!this.value.length) return '';
			const shiftChar = this.value[this.value.length - 1];
			this.value = this.value.slice(0, -1);
			return shiftChar;
		}
	}

	/** Append flags */

	/** Extract flags */

	// see https://github.com/microsoft/TypeScript/issues/6223

	/** Provides common masking stuff */
	class Masked {
		/** */

		/** */

		/** Transforms value before mask processing */

		/** Transforms each char before mask processing */

		/** Validates if value is acceptable */

		/** Does additional processing at the end of editing */

		/** Format typed value to string */

		/** Parse string to get typed value */

		/** Enable characters overwriting */

		/** */

		/** */

		/** */

		/** */

		constructor(opts) {
			this._value = '';
			this._update({
				...Masked.DEFAULTS,
				...opts
			});
			this._initialized = true;
		}

		/** Sets and applies new options */
		updateOptions(opts) {
			if (!this.optionsIsChanged(opts)) return;
			this.withValueRefresh(this._update.bind(this, opts));
		}

		/** Sets new options */
		_update(opts) {
			Object.assign(this, opts);
		}

		/** Mask state */
		get state() {
			return {
				_value: this.value,
				_rawInputValue: this.rawInputValue
			};
		}
		set state(state) {
			this._value = state._value;
		}

		/** Resets value */
		reset() {
			this._value = '';
		}
		get value() {
			return this._value;
		}
		set value(value) {
			this.resolve(value, {
				input: true
			});
		}

		/** Resolve new value */
		resolve(value, flags) {
			if (flags === void 0) {
				flags = {
					input: true
				};
			}
			this.reset();
			this.append(value, flags, '');
			this.doCommit();
		}
		get unmaskedValue() {
			return this.value;
		}
		set unmaskedValue(value) {
			this.resolve(value, {});
		}
		get typedValue() {
			return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
		}
		set typedValue(value) {
			if (this.format) {
				this.value = this.format(value, this);
			} else {
				this.unmaskedValue = String(value);
			}
		}

		/** Value that includes raw user input */
		get rawInputValue() {
			return this.extractInput(0, this.displayValue.length, {
				raw: true
			});
		}
		set rawInputValue(value) {
			this.resolve(value, {
				raw: true
			});
		}
		get displayValue() {
			return this.value;
		}
		get isComplete() {
			return true;
		}
		get isFilled() {
			return this.isComplete;
		}

		/** Finds nearest input position in direction */
		nearestInputPos(cursorPos, direction) {
			return cursorPos;
		}
		totalInputPositions(fromPos, toPos) {
			if (fromPos === void 0) {
				fromPos = 0;
			}
			if (toPos === void 0) {
				toPos = this.displayValue.length;
			}
			return Math.min(this.displayValue.length, toPos - fromPos);
		}

		/** Extracts value in range considering flags */
		extractInput(fromPos, toPos, flags) {
			if (fromPos === void 0) {
				fromPos = 0;
			}
			if (toPos === void 0) {
				toPos = this.displayValue.length;
			}
			return this.displayValue.slice(fromPos, toPos);
		}

		/** Extracts tail in range */
		extractTail(fromPos, toPos) {
			if (fromPos === void 0) {
				fromPos = 0;
			}
			if (toPos === void 0) {
				toPos = this.displayValue.length;
			}
			return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
		}

		/** Appends tail */
		appendTail(tail) {
			if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
			return tail.appendTo(this);
		}

		/** Appends char */
		_appendCharRaw(ch, flags) {
			if (!ch) return new ChangeDetails();
			this._value += ch;
			return new ChangeDetails({
				inserted: ch,
				rawInserted: ch
			});
		}

		/** Appends char */
		_appendChar(ch, flags, checkTail) {
			if (flags === void 0) {
				flags = {};
			}
			const consistentState = this.state;
			let details;
			[ch, details] = this.doPrepareChar(ch, flags);
			if (ch) {
				details = details.aggregate(this._appendCharRaw(ch, flags));

				// TODO handle `skip`?

				// try `autofix` lookahead
				if (!details.rawInserted && this.autofix === 'pad') {
					const noFixState = this.state;
					this.state = consistentState;
					let fixDetails = this.pad(flags);
					const chDetails = this._appendCharRaw(ch, flags);
					fixDetails = fixDetails.aggregate(chDetails);

					// if fix was applied or
					// if details are equal use skip restoring state optimization
					if (chDetails.rawInserted || fixDetails.equals(details)) {
						details = fixDetails;
					} else {
						this.state = noFixState;
					}
				}
			}
			if (details.inserted) {
				let consistentTail;
				let appended = this.doValidate(flags) !== false;
				if (appended && checkTail != null) {
					// validation ok, check tail
					const beforeTailState = this.state;
					if (this.overwrite === true) {
						consistentTail = checkTail.state;
						for (let i = 0; i < details.rawInserted.length; ++i) {
							checkTail.unshift(this.displayValue.length - details.tailShift);
						}
					}
					let tailDetails = this.appendTail(checkTail);
					appended = tailDetails.rawInserted.length === checkTail.toString().length;

					// not ok, try shift
					if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
						this.state = beforeTailState;
						consistentTail = checkTail.state;
						for (let i = 0; i < details.rawInserted.length; ++i) {
							checkTail.shift();
						}
						tailDetails = this.appendTail(checkTail);
						appended = tailDetails.rawInserted.length === checkTail.toString().length;
					}

					// if ok, rollback state after tail
					if (appended && tailDetails.inserted) this.state = beforeTailState;
				}

				// revert all if something went wrong
				if (!appended) {
					details = new ChangeDetails();
					this.state = consistentState;
					if (checkTail && consistentTail) checkTail.state = consistentTail;
				}
			}
			return details;
		}

		/** Appends optional placeholder at the end */
		_appendPlaceholder() {
			return new ChangeDetails();
		}

		/** Appends optional eager placeholder at the end */
		_appendEager() {
			return new ChangeDetails();
		}

		/** Appends symbols considering flags */
		append(str, flags, tail) {
			if (!isString(str)) throw new Error('value should be string');
			const checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
			if (flags != null && flags.tail) flags._beforeTailState = this.state;
			let details;
			[str, details] = this.doPrepare(str, flags);
			for (let ci = 0; ci < str.length; ++ci) {
				const d = this._appendChar(str[ci], flags, checkTail);
				if (!d.rawInserted && !this.doSkipInvalid(str[ci], flags, checkTail)) break;
				details.aggregate(d);
			}
			if ((this.eager === true || this.eager === 'append') && flags != null && flags.input && str) {
				details.aggregate(this._appendEager());
			}

			// append tail but aggregate only tailShift
			if (checkTail != null) {
				details.tailShift += this.appendTail(checkTail).tailShift;
				// TODO it's a good idea to clear state after appending ends
				// but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
				// this._resetBeforeTailState();
			}
			return details;
		}
		remove(fromPos, toPos) {
			if (fromPos === void 0) {
				fromPos = 0;
			}
			if (toPos === void 0) {
				toPos = this.displayValue.length;
			}
			this._value = this.displayValue.slice(0, fromPos) + this.displayValue.slice(toPos);
			return new ChangeDetails();
		}

		/** Calls function and reapplies current value */
		withValueRefresh(fn) {
			if (this._refreshing || !this._initialized) return fn();
			this._refreshing = true;
			const rawInput = this.rawInputValue;
			const value = this.value;
			const ret = fn();
			this.rawInputValue = rawInput;
			// append lost trailing chars at the end
			if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
				this.append(value.slice(this.displayValue.length), {}, '');
				this.doCommit();
			}
			delete this._refreshing;
			return ret;
		}
		runIsolated(fn) {
			if (this._isolated || !this._initialized) return fn(this);
			this._isolated = true;
			const state = this.state;
			const ret = fn(this);
			this.state = state;
			delete this._isolated;
			return ret;
		}
		doSkipInvalid(ch, flags, checkTail) {
			return Boolean(this.skipInvalid);
		}

		/** Prepares string before mask processing */
		doPrepare(str, flags) {
			if (flags === void 0) {
				flags = {};
			}
			return ChangeDetails.normalize(this.prepare ? this.prepare(str, this, flags) : str);
		}

		/** Prepares each char before mask processing */
		doPrepareChar(str, flags) {
			if (flags === void 0) {
				flags = {};
			}
			return ChangeDetails.normalize(this.prepareChar ? this.prepareChar(str, this, flags) : str);
		}

		/** Validates if value is acceptable */
		doValidate(flags) {
			return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
		}

		/** Does additional processing at the end of editing */
		doCommit() {
			if (this.commit) this.commit(this.value, this);
		}
		splice(start, deleteCount, inserted, removeDirection, flags) {
			if (inserted === void 0) {
				inserted = '';
			}
			if (removeDirection === void 0) {
				removeDirection = DIRECTION.NONE;
			}
			if (flags === void 0) {
				flags = {
					input: true
				};
			}
			const tailPos = start + deleteCount;
			const tail = this.extractTail(tailPos);
			const eagerRemove = this.eager === true || this.eager === 'remove';
			let oldRawValue;
			if (eagerRemove) {
				removeDirection = forceDirection(removeDirection);
				oldRawValue = this.extractInput(0, tailPos, {
					raw: true
				});
			}
			let startChangePos = start;
			const details = new ChangeDetails();

			// if it is just deletion without insertion
			if (removeDirection !== DIRECTION.NONE) {
				startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !eagerRemove ? DIRECTION.NONE : removeDirection);

				// adjust tailShift if start was aligned
				details.tailShift = startChangePos - start;
			}
			details.aggregate(this.remove(startChangePos));
			if (eagerRemove && removeDirection !== DIRECTION.NONE && oldRawValue === this.rawInputValue) {
				if (removeDirection === DIRECTION.FORCE_LEFT) {
					let valLength;
					while (oldRawValue === this.rawInputValue && (valLength = this.displayValue.length)) {
						details.aggregate(new ChangeDetails({
							tailShift: -1
						})).aggregate(this.remove(valLength - 1));
					}
				} else if (removeDirection === DIRECTION.FORCE_RIGHT) {
					tail.unshift();
				}
			}
			return details.aggregate(this.append(inserted, flags, tail));
		}
		maskEquals(mask) {
			return this.mask === mask;
		}
		optionsIsChanged(opts) {
			return !objectIncludes(this, opts);
		}
		typedValueEquals(value) {
			const tval = this.typedValue;
			return value === tval || Masked.EMPTY_VALUES.includes(value) && Masked.EMPTY_VALUES.includes(tval) || (this.format ? this.format(value, this) === this.format(this.typedValue, this) : false);
		}
		pad(flags) {
			return new ChangeDetails();
		}
	}
	Masked.DEFAULTS = {
		skipInvalid: true
	};
	Masked.EMPTY_VALUES = [undefined, null, ''];
	IMask.Masked = Masked;

	class ChunksTailDetails {
		/** */

		constructor(chunks, from) {
			if (chunks === void 0) {
				chunks = [];
			}
			if (from === void 0) {
				from = 0;
			}
			this.chunks = chunks;
			this.from = from;
		}
		toString() {
			return this.chunks.map(String).join('');
		}
		extend(tailChunk) {
			if (!String(tailChunk)) return;
			tailChunk = isString(tailChunk) ? new ContinuousTailDetails(String(tailChunk)) : tailChunk;
			const lastChunk = this.chunks[this.chunks.length - 1];
			const extendLast = lastChunk && (
				// if stops are same or tail has no stop
				lastChunk.stop === tailChunk.stop || tailChunk.stop == null) &&
				// if tail chunk goes just after last chunk
				tailChunk.from === lastChunk.from + lastChunk.toString().length;
			if (tailChunk instanceof ContinuousTailDetails) {
				// check the ability to extend previous chunk
				if (extendLast) {
					// extend previous chunk
					lastChunk.extend(tailChunk.toString());
				} else {
					// append new chunk
					this.chunks.push(tailChunk);
				}
			} else if (tailChunk instanceof ChunksTailDetails) {
				if (tailChunk.stop == null) {
					// unwrap floating chunks to parent, keeping `from` pos
					let firstTailChunk;
					while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
						firstTailChunk = tailChunk.chunks.shift(); // not possible to be `undefined` because length was checked above
						firstTailChunk.from += tailChunk.from;
						this.extend(firstTailChunk);
					}
				}

				// if tail chunk still has value
				if (tailChunk.toString()) {
					// if chunks contains stops, then popup stop to container
					tailChunk.stop = tailChunk.blockIndex;
					this.chunks.push(tailChunk);
				}
			}
		}
		appendTo(masked) {
			if (!(masked instanceof IMask.MaskedPattern)) {
				const tail = new ContinuousTailDetails(this.toString());
				return tail.appendTo(masked);
			}
			const details = new ChangeDetails();
			for (let ci = 0; ci < this.chunks.length; ++ci) {
				const chunk = this.chunks[ci];
				const lastBlockIter = masked._mapPosToBlock(masked.displayValue.length);
				const stop = chunk.stop;
				let chunkBlock;
				if (stop != null && (
					// if block not found or stop is behind lastBlock
					!lastBlockIter || lastBlockIter.index <= stop)) {
					if (chunk instanceof ChunksTailDetails ||
						// for continuous block also check if stop is exist
						masked._stops.indexOf(stop) >= 0) {
						details.aggregate(masked._appendPlaceholder(stop));
					}
					chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
				}
				if (chunkBlock) {
					const tailDetails = chunkBlock.appendTail(chunk);
					details.aggregate(tailDetails);

					// get not inserted chars
					const remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
					if (remainChars) details.aggregate(masked.append(remainChars, {
						tail: true
					}));
				} else {
					details.aggregate(masked.append(chunk.toString(), {
						tail: true
					}));
				}
			}
			return details;
		}
		get state() {
			return {
				chunks: this.chunks.map(c => c.state),
				from: this.from,
				stop: this.stop,
				blockIndex: this.blockIndex
			};
		}
		set state(state) {
			const {
				chunks,
				...props
			} = state;
			Object.assign(this, props);
			this.chunks = chunks.map(cstate => {
				const chunk = "chunks" in cstate ? new ChunksTailDetails() : new ContinuousTailDetails();
				chunk.state = cstate;
				return chunk;
			});
		}
		unshift(beforePos) {
			if (!this.chunks.length || beforePos != null && this.from >= beforePos) return '';
			const chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
			let ci = 0;
			while (ci < this.chunks.length) {
				const chunk = this.chunks[ci];
				const shiftChar = chunk.unshift(chunkShiftPos);
				if (chunk.toString()) {
					// chunk still contains value
					// but not shifted - means no more available chars to shift
					if (!shiftChar) break;
					++ci;
				} else {
					// clean if chunk has no value
					this.chunks.splice(ci, 1);
				}
				if (shiftChar) return shiftChar;
			}
			return '';
		}
		shift() {
			if (!this.chunks.length) return '';
			let ci = this.chunks.length - 1;
			while (0 <= ci) {
				const chunk = this.chunks[ci];
				const shiftChar = chunk.shift();
				if (chunk.toString()) {
					// chunk still contains value
					// but not shifted - means no more available chars to shift
					if (!shiftChar) break;
					--ci;
				} else {
					// clean if chunk has no value
					this.chunks.splice(ci, 1);
				}
				if (shiftChar) return shiftChar;
			}
			return '';
		}
	}

	class PatternCursor {
		constructor(masked, pos) {
			this.masked = masked;
			this._log = [];
			const {
				offset,
				index
			} = masked._mapPosToBlock(pos) || (pos < 0 ?
				// first
				{
					index: 0,
					offset: 0
				} :
				// last
				{
					index: this.masked._blocks.length,
					offset: 0
				});
			this.offset = offset;
			this.index = index;
			this.ok = false;
		}
		get block() {
			return this.masked._blocks[this.index];
		}
		get pos() {
			return this.masked._blockStartPos(this.index) + this.offset;
		}
		get state() {
			return {
				index: this.index,
				offset: this.offset,
				ok: this.ok
			};
		}
		set state(s) {
			Object.assign(this, s);
		}
		pushState() {
			this._log.push(this.state);
		}
		popState() {
			const s = this._log.pop();
			if (s) this.state = s;
			return s;
		}
		bindBlock() {
			if (this.block) return;
			if (this.index < 0) {
				this.index = 0;
				this.offset = 0;
			}
			if (this.index >= this.masked._blocks.length) {
				this.index = this.masked._blocks.length - 1;
				this.offset = this.block.displayValue.length; // TODO this is stupid type error, `block` depends on index that was changed above
			}
		}
		_pushLeft(fn) {
			this.pushState();
			for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) == null ? void 0 : _this$block.displayValue.length) || 0) {
				var _this$block;
				if (fn()) return this.ok = true;
			}
			return this.ok = false;
		}
		_pushRight(fn) {
			this.pushState();
			for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
				if (fn()) return this.ok = true;
			}
			return this.ok = false;
		}
		pushLeftBeforeFilled() {
			return this._pushLeft(() => {
				if (this.block.isFixed || !this.block.value) return;
				this.offset = this.block.nearestInputPos(this.offset, DIRECTION.FORCE_LEFT);
				if (this.offset !== 0) return true;
			});
		}
		pushLeftBeforeInput() {
			// cases:
			// filled input: 00|
			// optional empty input: 00[]|
			// nested block: XX<[]>|
			return this._pushLeft(() => {
				if (this.block.isFixed) return;
				this.offset = this.block.nearestInputPos(this.offset, DIRECTION.LEFT);
				return true;
			});
		}
		pushLeftBeforeRequired() {
			return this._pushLeft(() => {
				if (this.block.isFixed || this.block.isOptional && !this.block.value) return;
				this.offset = this.block.nearestInputPos(this.offset, DIRECTION.LEFT);
				return true;
			});
		}
		pushRightBeforeFilled() {
			return this._pushRight(() => {
				if (this.block.isFixed || !this.block.value) return;
				this.offset = this.block.nearestInputPos(this.offset, DIRECTION.FORCE_RIGHT);
				if (this.offset !== this.block.value.length) return true;
			});
		}
		pushRightBeforeInput() {
			return this._pushRight(() => {
				if (this.block.isFixed) return;

				// const o = this.offset;
				this.offset = this.block.nearestInputPos(this.offset, DIRECTION.NONE);
				// HACK cases like (STILL DOES NOT WORK FOR NESTED)
				// aa|X
				// aa<X|[]>X_    - this will not work
				// if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;
				return true;
			});
		}
		pushRightBeforeRequired() {
			return this._pushRight(() => {
				if (this.block.isFixed || this.block.isOptional && !this.block.value) return;

				// TODO check |[*]XX_
				this.offset = this.block.nearestInputPos(this.offset, DIRECTION.NONE);
				return true;
			});
		}
	}

	class PatternFixedDefinition {
		/** */

		/** */

		/** */

		/** */

		/** */

		/** */

		constructor(opts) {
			Object.assign(this, opts);
			this._value = '';
			this.isFixed = true;
		}
		get value() {
			return this._value;
		}
		get unmaskedValue() {
			return this.isUnmasking ? this.value : '';
		}
		get rawInputValue() {
			return this._isRawInput ? this.value : '';
		}
		get displayValue() {
			return this.value;
		}
		reset() {
			this._isRawInput = false;
			this._value = '';
		}
		remove(fromPos, toPos) {
			if (fromPos === void 0) {
				fromPos = 0;
			}
			if (toPos === void 0) {
				toPos = this._value.length;
			}
			this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
			if (!this._value) this._isRawInput = false;
			return new ChangeDetails();
		}
		nearestInputPos(cursorPos, direction) {
			if (direction === void 0) {
				direction = DIRECTION.NONE;
			}
			const minPos = 0;
			const maxPos = this._value.length;
			switch (direction) {
				case DIRECTION.LEFT:
				case DIRECTION.FORCE_LEFT:
					return minPos;
				case DIRECTION.NONE:
				case DIRECTION.RIGHT:
				case DIRECTION.FORCE_RIGHT:
				default:
					return maxPos;
			}
		}
		totalInputPositions(fromPos, toPos) {
			if (fromPos === void 0) {
				fromPos = 0;
			}
			if (toPos === void 0) {
				toPos = this._value.length;
			}
			return this._isRawInput ? toPos - fromPos : 0;
		}
		extractInput(fromPos, toPos, flags) {
			if (fromPos === void 0) {
				fromPos = 0;
			}
			if (toPos === void 0) {
				toPos = this._value.length;
			}
			if (flags === void 0) {
				flags = {};
			}
			return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
		}
		get isComplete() {
			return true;
		}
		get isFilled() {
			return Boolean(this._value);
		}
		_appendChar(ch, flags) {
			if (flags === void 0) {
				flags = {};
			}
			if (this.isFilled) return new ChangeDetails();
			const appendEager = this.eager === true || this.eager === 'append';
			const appended = this.char === ch;
			const isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && (!flags.raw || !appendEager) && !flags.tail;
			const details = new ChangeDetails({
				inserted: this.char,
				rawInserted: isResolved ? this.char : ''
			});
			this._value = this.char;
			this._isRawInput = isResolved && (flags.raw || flags.input);
			return details;
		}
		_appendEager() {
			return this._appendChar(this.char, {
				tail: true
			});
		}
		_appendPlaceholder() {
			const details = new ChangeDetails();
			if (this.isFilled) return details;
			this._value = details.inserted = this.char;
			return details;
		}
		extractTail() {
			return new ContinuousTailDetails('');
		}
		appendTail(tail) {
			if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
			return tail.appendTo(this);
		}
		append(str, flags, tail) {
			const details = this._appendChar(str[0], flags);
			if (tail != null) {
				details.tailShift += this.appendTail(tail).tailShift;
			}
			return details;
		}
		doCommit() { }
		get state() {
			return {
				_value: this._value,
				_rawInputValue: this.rawInputValue
			};
		}
		set state(state) {
			this._value = state._value;
			this._isRawInput = Boolean(state._rawInputValue);
		}
		pad(flags) {
			return this._appendPlaceholder();
		}
	}

	class PatternInputDefinition {
		/** */

		/** */

		/** */

		/** */

		/** */

		/** */

		/** */

		/** */

		constructor(opts) {
			const {
				parent,
				isOptional,
				placeholderChar,
				displayChar,
				lazy,
				eager,
				...maskOpts
			} = opts;
			this.masked = createMask(maskOpts);
			Object.assign(this, {
				parent,
				isOptional,
				placeholderChar,
				displayChar,
				lazy,
				eager
			});
		}
		reset() {
			this.isFilled = false;
			this.masked.reset();
		}
		remove(fromPos, toPos) {
			if (fromPos === void 0) {
				fromPos = 0;
			}
			if (toPos === void 0) {
				toPos = this.value.length;
			}
			if (fromPos === 0 && toPos >= 1) {
				this.isFilled = false;
				return this.masked.remove(fromPos, toPos);
			}
			return new ChangeDetails();
		}
		get value() {
			return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
		}
		get unmaskedValue() {
			return this.masked.unmaskedValue;
		}
		get rawInputValue() {
			return this.masked.rawInputValue;
		}
		get displayValue() {
			return this.masked.value && this.displayChar || this.value;
		}
		get isComplete() {
			return Boolean(this.masked.value) || this.isOptional;
		}
		_appendChar(ch, flags) {
			if (flags === void 0) {
				flags = {};
			}
			if (this.isFilled) return new ChangeDetails();
			const state = this.masked.state;
			// simulate input
			let details = this.masked._appendChar(ch, this.currentMaskFlags(flags));
			if (details.inserted && this.doValidate(flags) === false) {
				details = new ChangeDetails();
				this.masked.state = state;
			}
			if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
				details.inserted = this.placeholderChar;
			}
			details.skip = !details.inserted && !this.isOptional;
			this.isFilled = Boolean(details.inserted);
			return details;
		}
		append(str, flags, tail) {
			// TODO probably should be done via _appendChar
			return this.masked.append(str, this.currentMaskFlags(flags), tail);
		}
		_appendPlaceholder() {
			if (this.isFilled || this.isOptional) return new ChangeDetails();
			this.isFilled = true;
			return new ChangeDetails({
				inserted: this.placeholderChar
			});
		}
		_appendEager() {
			return new ChangeDetails();
		}
		extractTail(fromPos, toPos) {
			return this.masked.extractTail(fromPos, toPos);
		}
		appendTail(tail) {
			return this.masked.appendTail(tail);
		}
		extractInput(fromPos, toPos, flags) {
			if (fromPos === void 0) {
				fromPos = 0;
			}
			if (toPos === void 0) {
				toPos = this.value.length;
			}
			return this.masked.extractInput(fromPos, toPos, flags);
		}
		nearestInputPos(cursorPos, direction) {
			if (direction === void 0) {
				direction = DIRECTION.NONE;
			}
			const minPos = 0;
			const maxPos = this.value.length;
			const boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
			switch (direction) {
				case DIRECTION.LEFT:
				case DIRECTION.FORCE_LEFT:
					return this.isComplete ? boundPos : minPos;
				case DIRECTION.RIGHT:
				case DIRECTION.FORCE_RIGHT:
					return this.isComplete ? boundPos : maxPos;
				case DIRECTION.NONE:
				default:
					return boundPos;
			}
		}
		totalInputPositions(fromPos, toPos) {
			if (fromPos === void 0) {
				fromPos = 0;
			}
			if (toPos === void 0) {
				toPos = this.value.length;
			}
			return this.value.slice(fromPos, toPos).length;
		}
		doValidate(flags) {
			return this.masked.doValidate(this.currentMaskFlags(flags)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(flags)));
		}
		doCommit() {
			this.masked.doCommit();
		}
		get state() {
			return {
				_value: this.value,
				_rawInputValue: this.rawInputValue,
				masked: this.masked.state,
				isFilled: this.isFilled
			};
		}
		set state(state) {
			this.masked.state = state.masked;
			this.isFilled = state.isFilled;
		}
		currentMaskFlags(flags) {
			var _flags$_beforeTailSta;
			return {
				...flags,
				_beforeTailState: (flags == null || (_flags$_beforeTailSta = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta.masked) || (flags == null ? void 0 : flags._beforeTailState)
			};
		}
		pad(flags) {
			return new ChangeDetails();
		}
	}
	PatternInputDefinition.DEFAULT_DEFINITIONS = {
		'0': /\d/,
		'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
		// http://stackoverflow.com/a/22075070
		'*': /./
	};

	/** Masking by RegExp */
	class MaskedRegExp extends Masked {
		/** */

		/** Enable characters overwriting */

		/** */

		/** */

		/** */

		updateOptions(opts) {
			super.updateOptions(opts);
		}
		_update(opts) {
			const mask = opts.mask;
			if (mask) opts.validate = value => value.search(mask) >= 0;
			super._update(opts);
		}
	}
	IMask.MaskedRegExp = MaskedRegExp;

	/** Pattern mask */
	class MaskedPattern extends Masked {
		/** */

		/** */

		/** Single char for empty input */

		/** Single char for filled input */

		/** Show placeholder only when needed */

		/** Enable characters overwriting */

		/** */

		/** */

		/** */

		constructor(opts) {
			super({
				...MaskedPattern.DEFAULTS,
				...opts,
				definitions: Object.assign({}, PatternInputDefinition.DEFAULT_DEFINITIONS, opts == null ? void 0 : opts.definitions)
			});
		}
		updateOptions(opts) {
			super.updateOptions(opts);
		}
		_update(opts) {
			opts.definitions = Object.assign({}, this.definitions, opts.definitions);
			super._update(opts);
			this._rebuildMask();
		}
		_rebuildMask() {
			const defs = this.definitions;
			this._blocks = [];
			this.exposeBlock = undefined;
			this._stops = [];
			this._maskedBlocks = {};
			const pattern = this.mask;
			if (!pattern || !defs) return;
			let unmaskingBlock = false;
			let optionalBlock = false;
			for (let i = 0; i < pattern.length; ++i) {
				if (this.blocks) {
					const p = pattern.slice(i);
					const bNames = Object.keys(this.blocks).filter(bName => p.indexOf(bName) === 0);
					// order by key length
					bNames.sort((a, b) => b.length - a.length);
					// use block name with max length
					const bName = bNames[0];
					if (bName) {
						const {
							expose,
							repeat,
							...bOpts
						} = normalizeOpts(this.blocks[bName]); // TODO type Opts<Arg & Extra>
						const blockOpts = {
							lazy: this.lazy,
							eager: this.eager,
							placeholderChar: this.placeholderChar,
							displayChar: this.displayChar,
							overwrite: this.overwrite,
							autofix: this.autofix,
							...bOpts,
							repeat,
							parent: this
						};
						const maskedBlock = repeat != null ? new IMask.RepeatBlock(blockOpts /* TODO */) : createMask(blockOpts);
						if (maskedBlock) {
							this._blocks.push(maskedBlock);
							if (expose) this.exposeBlock = maskedBlock;

							// store block index
							if (!this._maskedBlocks[bName]) this._maskedBlocks[bName] = [];
							this._maskedBlocks[bName].push(this._blocks.length - 1);
						}
						i += bName.length - 1;
						continue;
					}
				}
				let char = pattern[i];
				let isInput = (char in defs);
				if (char === MaskedPattern.STOP_CHAR) {
					this._stops.push(this._blocks.length);
					continue;
				}
				if (char === '{' || char === '}') {
					unmaskingBlock = !unmaskingBlock;
					continue;
				}
				if (char === '[' || char === ']') {
					optionalBlock = !optionalBlock;
					continue;
				}
				if (char === MaskedPattern.ESCAPE_CHAR) {
					++i;
					char = pattern[i];
					if (!char) break;
					isInput = false;
				}
				const def = isInput ? new PatternInputDefinition({
					isOptional: optionalBlock,
					lazy: this.lazy,
					eager: this.eager,
					placeholderChar: this.placeholderChar,
					displayChar: this.displayChar,
					...normalizeOpts(defs[char]),
					parent: this
				}) : new PatternFixedDefinition({
					char,
					eager: this.eager,
					isUnmasking: unmaskingBlock
				});
				this._blocks.push(def);
			}
		}
		get state() {
			return {
				...super.state,
				_blocks: this._blocks.map(b => b.state)
			};
		}
		set state(state) {
			if (!state) {
				this.reset();
				return;
			}
			const {
				_blocks,
				...maskedState
			} = state;
			this._blocks.forEach((b, bi) => b.state = _blocks[bi]);
			super.state = maskedState;
		}
		reset() {
			super.reset();
			this._blocks.forEach(b => b.reset());
		}
		get isComplete() {
			return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every(b => b.isComplete);
		}
		get isFilled() {
			return this._blocks.every(b => b.isFilled);
		}
		get isFixed() {
			return this._blocks.every(b => b.isFixed);
		}
		get isOptional() {
			return this._blocks.every(b => b.isOptional);
		}
		doCommit() {
			this._blocks.forEach(b => b.doCommit());
			super.doCommit();
		}
		get unmaskedValue() {
			return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce((str, b) => str += b.unmaskedValue, '');
		}
		set unmaskedValue(unmaskedValue) {
			if (this.exposeBlock) {
				const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
				this.exposeBlock.unmaskedValue = unmaskedValue;
				this.appendTail(tail);
				this.doCommit();
			} else super.unmaskedValue = unmaskedValue;
		}
		get value() {
			return this.exposeBlock ? this.exposeBlock.value :
				// TODO return _value when not in change?
				this._blocks.reduce((str, b) => str += b.value, '');
		}
		set value(value) {
			if (this.exposeBlock) {
				const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
				this.exposeBlock.value = value;
				this.appendTail(tail);
				this.doCommit();
			} else super.value = value;
		}
		get typedValue() {
			return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue;
		}
		set typedValue(value) {
			if (this.exposeBlock) {
				const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
				this.exposeBlock.typedValue = value;
				this.appendTail(tail);
				this.doCommit();
			} else super.typedValue = value;
		}
		get displayValue() {
			return this._blocks.reduce((str, b) => str += b.displayValue, '');
		}
		appendTail(tail) {
			return super.appendTail(tail).aggregate(this._appendPlaceholder());
		}
		_appendEager() {
			var _this$_mapPosToBlock;
			const details = new ChangeDetails();
			let startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : _this$_mapPosToBlock.index;
			if (startBlockIndex == null) return details;

			// TODO test if it works for nested pattern masks
			if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;
			for (let bi = startBlockIndex; bi < this._blocks.length; ++bi) {
				const d = this._blocks[bi]._appendEager();
				if (!d.inserted) break;
				details.aggregate(d);
			}
			return details;
		}
		_appendCharRaw(ch, flags) {
			if (flags === void 0) {
				flags = {};
			}
			const blockIter = this._mapPosToBlock(this.displayValue.length);
			const details = new ChangeDetails();
			if (!blockIter) return details;
			for (let bi = blockIter.index, block; block = this._blocks[bi]; ++bi) {
				var _flags$_beforeTailSta;
				const blockDetails = block._appendChar(ch, {
					...flags,
					_beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) == null || (_flags$_beforeTailSta = _flags$_beforeTailSta._blocks) == null ? void 0 : _flags$_beforeTailSta[bi]
				});
				details.aggregate(blockDetails);
				if (blockDetails.consumed) break; // go next char
			}
			return details;
		}
		extractTail(fromPos, toPos) {
			if (fromPos === void 0) {
				fromPos = 0;
			}
			if (toPos === void 0) {
				toPos = this.displayValue.length;
			}
			const chunkTail = new ChunksTailDetails();
			if (fromPos === toPos) return chunkTail;
			this._forEachBlocksInRange(fromPos, toPos, (b, bi, bFromPos, bToPos) => {
				const blockChunk = b.extractTail(bFromPos, bToPos);
				blockChunk.stop = this._findStopBefore(bi);
				blockChunk.from = this._blockStartPos(bi);
				if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
				chunkTail.extend(blockChunk);
			});
			return chunkTail;
		}
		extractInput(fromPos, toPos, flags) {
			if (fromPos === void 0) {
				fromPos = 0;
			}
			if (toPos === void 0) {
				toPos = this.displayValue.length;
			}
			if (flags === void 0) {
				flags = {};
			}
			if (fromPos === toPos) return '';
			let input = '';
			this._forEachBlocksInRange(fromPos, toPos, (b, _, fromPos, toPos) => {
				input += b.extractInput(fromPos, toPos, flags);
			});
			return input;
		}
		_findStopBefore(blockIndex) {
			let stopBefore;
			for (let si = 0; si < this._stops.length; ++si) {
				const stop = this._stops[si];
				if (stop <= blockIndex) stopBefore = stop; else break;
			}
			return stopBefore;
		}

		/** Appends placeholder depending on laziness */
		_appendPlaceholder(toBlockIndex) {
			const details = new ChangeDetails();
			if (this.lazy && toBlockIndex == null) return details;
			const startBlockIter = this._mapPosToBlock(this.displayValue.length);
			if (!startBlockIter) return details;
			const startBlockIndex = startBlockIter.index;
			const endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;
			this._blocks.slice(startBlockIndex, endBlockIndex).forEach(b => {
				if (!b.lazy || toBlockIndex != null) {
					var _blocks2;
					details.aggregate(b._appendPlaceholder((_blocks2 = b._blocks) == null ? void 0 : _blocks2.length));
				}
			});
			return details;
		}

		/** Finds block in pos */
		_mapPosToBlock(pos) {
			let accVal = '';
			for (let bi = 0; bi < this._blocks.length; ++bi) {
				const block = this._blocks[bi];
				const blockStartPos = accVal.length;
				accVal += block.displayValue;
				if (pos <= accVal.length) {
					return {
						index: bi,
						offset: pos - blockStartPos
					};
				}
			}
		}
		_blockStartPos(blockIndex) {
			return this._blocks.slice(0, blockIndex).reduce((pos, b) => pos += b.displayValue.length, 0);
		}
		_forEachBlocksInRange(fromPos, toPos, fn) {
			if (toPos === void 0) {
				toPos = this.displayValue.length;
			}
			const fromBlockIter = this._mapPosToBlock(fromPos);
			if (fromBlockIter) {
				const toBlockIter = this._mapPosToBlock(toPos);
				// process first block
				const isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
				const fromBlockStartPos = fromBlockIter.offset;
				const fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].displayValue.length;
				fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
				if (toBlockIter && !isSameBlock) {
					// process intermediate blocks
					for (let bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
						fn(this._blocks[bi], bi, 0, this._blocks[bi].displayValue.length);
					}

					// process last block
					fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
				}
			}
		}
		remove(fromPos, toPos) {
			if (fromPos === void 0) {
				fromPos = 0;
			}
			if (toPos === void 0) {
				toPos = this.displayValue.length;
			}
			const removeDetails = super.remove(fromPos, toPos);
			this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos) => {
				removeDetails.aggregate(b.remove(bFromPos, bToPos));
			});
			return removeDetails;
		}
		nearestInputPos(cursorPos, direction) {
			if (direction === void 0) {
				direction = DIRECTION.NONE;
			}
			if (!this._blocks.length) return 0;
			const cursor = new PatternCursor(this, cursorPos);
			if (direction === DIRECTION.NONE) {
				// -------------------------------------------------
				// NONE should only go out from fixed to the right!
				// -------------------------------------------------
				if (cursor.pushRightBeforeInput()) return cursor.pos;
				cursor.popState();
				if (cursor.pushLeftBeforeInput()) return cursor.pos;
				return this.displayValue.length;
			}

			// FORCE is only about a|* otherwise is 0
			if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
				// try to break fast when *|a
				if (direction === DIRECTION.LEFT) {
					cursor.pushRightBeforeFilled();
					if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
					cursor.popState();
				}

				// forward flow
				cursor.pushLeftBeforeInput();
				cursor.pushLeftBeforeRequired();
				cursor.pushLeftBeforeFilled();

				// backward flow
				if (direction === DIRECTION.LEFT) {
					cursor.pushRightBeforeInput();
					cursor.pushRightBeforeRequired();
					if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
					cursor.popState();
					if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
					cursor.popState();
				}
				if (cursor.ok) return cursor.pos;
				if (direction === DIRECTION.FORCE_LEFT) return 0;
				cursor.popState();
				if (cursor.ok) return cursor.pos;
				cursor.popState();
				if (cursor.ok) return cursor.pos;
				return 0;
			}
			if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
				// forward flow
				cursor.pushRightBeforeInput();
				cursor.pushRightBeforeRequired();
				if (cursor.pushRightBeforeFilled()) return cursor.pos;
				if (direction === DIRECTION.FORCE_RIGHT) return this.displayValue.length;

				// backward flow
				cursor.popState();
				if (cursor.ok) return cursor.pos;
				cursor.popState();
				if (cursor.ok) return cursor.pos;
				return this.nearestInputPos(cursorPos, DIRECTION.LEFT);
			}
			return cursorPos;
		}
		totalInputPositions(fromPos, toPos) {
			if (fromPos === void 0) {
				fromPos = 0;
			}
			if (toPos === void 0) {
				toPos = this.displayValue.length;
			}
			let total = 0;
			this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos) => {
				total += b.totalInputPositions(bFromPos, bToPos);
			});
			return total;
		}

		/** Get block by name */
		maskedBlock(name) {
			return this.maskedBlocks(name)[0];
		}

		/** Get all blocks by name */
		maskedBlocks(name) {
			const indices = this._maskedBlocks[name];
			if (!indices) return [];
			return indices.map(gi => this._blocks[gi]);
		}
		pad(flags) {
			const details = new ChangeDetails();
			this._forEachBlocksInRange(0, this.displayValue.length, b => details.aggregate(b.pad(flags)));
			return details;
		}
	}
	MaskedPattern.DEFAULTS = {
		...Masked.DEFAULTS,
		lazy: true,
		placeholderChar: '_'
	};
	MaskedPattern.STOP_CHAR = '`';
	MaskedPattern.ESCAPE_CHAR = '\\';
	MaskedPattern.InputDefinition = PatternInputDefinition;
	MaskedPattern.FixedDefinition = PatternFixedDefinition;
	IMask.MaskedPattern = MaskedPattern;

	/** Pattern which accepts ranges */
	class MaskedRange extends MaskedPattern {
		/**
		  Optionally sets max length of pattern.
		  Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
		*/

		/** Min bound */

		/** Max bound */

		get _matchFrom() {
			return this.maxLength - String(this.from).length;
		}
		constructor(opts) {
			super(opts); // mask will be created in _update
		}
		updateOptions(opts) {
			super.updateOptions(opts);
		}
		_update(opts) {
			const {
				to = this.to || 0,
				from = this.from || 0,
				maxLength = this.maxLength || 0,
				autofix = this.autofix,
				...patternOpts
			} = opts;
			this.to = to;
			this.from = from;
			this.maxLength = Math.max(String(to).length, maxLength);
			this.autofix = autofix;
			const fromStr = String(this.from).padStart(this.maxLength, '0');
			const toStr = String(this.to).padStart(this.maxLength, '0');
			let sameCharsCount = 0;
			while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) ++sameCharsCount;
			patternOpts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(this.maxLength - sameCharsCount);
			super._update(patternOpts);
		}
		get isComplete() {
			return super.isComplete && Boolean(this.value);
		}
		boundaries(str) {
			let minstr = '';
			let maxstr = '';
			const [, placeholder, num] = str.match(/^(\D*)(\d*)(\D*)/) || [];
			if (num) {
				minstr = '0'.repeat(placeholder.length) + num;
				maxstr = '9'.repeat(placeholder.length) + num;
			}
			minstr = minstr.padEnd(this.maxLength, '0');
			maxstr = maxstr.padEnd(this.maxLength, '9');
			return [minstr, maxstr];
		}
		doPrepareChar(ch, flags) {
			if (flags === void 0) {
				flags = {};
			}
			let details;
			[ch, details] = super.doPrepareChar(ch.replace(/\D/g, ''), flags);
			if (!ch) details.skip = !this.isComplete;
			return [ch, details];
		}
		_appendCharRaw(ch, flags) {
			if (flags === void 0) {
				flags = {};
			}
			if (!this.autofix || this.value.length + 1 > this.maxLength) return super._appendCharRaw(ch, flags);
			const fromStr = String(this.from).padStart(this.maxLength, '0');
			const toStr = String(this.to).padStart(this.maxLength, '0');
			const [minstr, maxstr] = this.boundaries(this.value + ch);
			if (Number(maxstr) < this.from) return super._appendCharRaw(fromStr[this.value.length], flags);
			if (Number(minstr) > this.to) {
				if (!flags.tail && this.autofix === 'pad' && this.value.length + 1 < this.maxLength) {
					return super._appendCharRaw(fromStr[this.value.length], flags).aggregate(this._appendCharRaw(ch, flags));
				}
				return super._appendCharRaw(toStr[this.value.length], flags);
			}
			return super._appendCharRaw(ch, flags);
		}
		doValidate(flags) {
			const str = this.value;
			const firstNonZero = str.search(/[^0]/);
			if (firstNonZero === -1 && str.length <= this._matchFrom) return true;
			const [minstr, maxstr] = this.boundaries(str);
			return this.from <= Number(maxstr) && Number(minstr) <= this.to && super.doValidate(flags);
		}
		pad(flags) {
			const details = new ChangeDetails();
			if (this.value.length === this.maxLength) return details;
			const value = this.value;
			const padLength = this.maxLength - this.value.length;
			if (padLength) {
				this.reset();
				for (let i = 0; i < padLength; ++i) {
					details.aggregate(super._appendCharRaw('0', flags));
				}

				// append tail
				value.split('').forEach(ch => this._appendCharRaw(ch));
			}
			return details;
		}
	}
	IMask.MaskedRange = MaskedRange;

	const DefaultPattern = 'd{.}`m{.}`Y';

	// Make format and parse required when pattern is provided

	/** Date mask */
	class MaskedDate extends MaskedPattern {
		static extractPatternOptions(opts) {
			const {
				mask,
				pattern,
				...patternOpts
			} = opts;
			return {
				...patternOpts,
				mask: isString(mask) ? mask : pattern
			};
		}

		/** Pattern mask for date according to {@link MaskedDate#format} */

		/** Start date */

		/** End date */

		/** Format typed value to string */

		/** Parse string to get typed value */

		constructor(opts) {
			super(MaskedDate.extractPatternOptions({
				...MaskedDate.DEFAULTS,
				...opts
			}));
		}
		updateOptions(opts) {
			super.updateOptions(opts);
		}
		_update(opts) {
			const {
				mask,
				pattern,
				blocks,
				...patternOpts
			} = {
				...MaskedDate.DEFAULTS,
				...opts
			};
			const patternBlocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS());
			// adjust year block
			if (opts.min) patternBlocks.Y.from = opts.min.getFullYear();
			if (opts.max) patternBlocks.Y.to = opts.max.getFullYear();
			if (opts.min && opts.max && patternBlocks.Y.from === patternBlocks.Y.to) {
				patternBlocks.m.from = opts.min.getMonth() + 1;
				patternBlocks.m.to = opts.max.getMonth() + 1;
				if (patternBlocks.m.from === patternBlocks.m.to) {
					patternBlocks.d.from = opts.min.getDate();
					patternBlocks.d.to = opts.max.getDate();
				}
			}
			Object.assign(patternBlocks, this.blocks, blocks);
			super._update({
				...patternOpts,
				mask: isString(mask) ? mask : pattern,
				blocks: patternBlocks
			});
		}
		doValidate(flags) {
			const date = this.date;
			return super.doValidate(flags) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
		}

		/** Checks if date is exists */
		isDateExist(str) {
			return this.format(this.parse(str, this), this).indexOf(str) >= 0;
		}

		/** Parsed Date */
		get date() {
			return this.typedValue;
		}
		set date(date) {
			this.typedValue = date;
		}
		get typedValue() {
			return this.isComplete ? super.typedValue : null;
		}
		set typedValue(value) {
			super.typedValue = value;
		}
		maskEquals(mask) {
			return mask === Date || super.maskEquals(mask);
		}
		optionsIsChanged(opts) {
			return super.optionsIsChanged(MaskedDate.extractPatternOptions(opts));
		}
	}
	MaskedDate.GET_DEFAULT_BLOCKS = () => ({
		d: {
			mask: MaskedRange,
			from: 1,
			to: 31,
			maxLength: 2
		},
		m: {
			mask: MaskedRange,
			from: 1,
			to: 12,
			maxLength: 2
		},
		Y: {
			mask: MaskedRange,
			from: 1900,
			to: 9999
		}
	});
	MaskedDate.DEFAULTS = {
		...MaskedPattern.DEFAULTS,
		mask: Date,
		pattern: DefaultPattern,
		format: (date, masked) => {
			if (!date) return '';
			const day = String(date.getDate()).padStart(2, '0');
			const month = String(date.getMonth() + 1).padStart(2, '0');
			const year = date.getFullYear();
			return [day, month, year].join('.');
		},
		parse: (str, masked) => {
			const [day, month, year] = str.split('.').map(Number);
			return new Date(year, month - 1, day);
		}
	};
	IMask.MaskedDate = MaskedDate;

	/** Dynamic mask for choosing appropriate mask in run-time */
	class MaskedDynamic extends Masked {
		constructor(opts) {
			super({
				...MaskedDynamic.DEFAULTS,
				...opts
			});
			this.currentMask = undefined;
		}
		updateOptions(opts) {
			super.updateOptions(opts);
		}
		_update(opts) {
			super._update(opts);
			if ('mask' in opts) {
				this.exposeMask = undefined;
				// mask could be totally dynamic with only `dispatch` option
				this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(m => {
					const {
						expose,
						...maskOpts
					} = normalizeOpts(m);
					const masked = createMask({
						overwrite: this._overwrite,
						eager: this._eager,
						skipInvalid: this._skipInvalid,
						...maskOpts
					});
					if (expose) this.exposeMask = masked;
					return masked;
				}) : [];

				// this.currentMask = this.doDispatch(''); // probably not needed but lets see
			}
		}
		_appendCharRaw(ch, flags) {
			if (flags === void 0) {
				flags = {};
			}
			const details = this._applyDispatch(ch, flags);
			if (this.currentMask) {
				details.aggregate(this.currentMask._appendChar(ch, this.currentMaskFlags(flags)));
			}
			return details;
		}
		_applyDispatch(appended, flags, tail) {
			if (appended === void 0) {
				appended = '';
			}
			if (flags === void 0) {
				flags = {};
			}
			if (tail === void 0) {
				tail = '';
			}
			const prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
			const inputValue = this.rawInputValue;
			const insertValue = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._rawInputValue : inputValue;
			const tailValue = inputValue.slice(insertValue.length);
			const prevMask = this.currentMask;
			const details = new ChangeDetails();
			const prevMaskState = prevMask == null ? void 0 : prevMask.state;

			// clone flags to prevent overwriting `_beforeTailState`
			this.currentMask = this.doDispatch(appended, {
				...flags
			}, tail);

			// restore state after dispatch
			if (this.currentMask) {
				if (this.currentMask !== prevMask) {
					// if mask changed reapply input
					this.currentMask.reset();
					if (insertValue) {
						this.currentMask.append(insertValue, {
							raw: true
						});
						details.tailShift = this.currentMask.value.length - prevValueBeforeTail.length;
					}
					if (tailValue) {
						details.tailShift += this.currentMask.append(tailValue, {
							raw: true,
							tail: true
						}).tailShift;
					}
				} else if (prevMaskState) {
					// Dispatch can do something bad with state, so
					// restore prev mask state
					this.currentMask.state = prevMaskState;
				}
			}
			return details;
		}
		_appendPlaceholder() {
			const details = this._applyDispatch();
			if (this.currentMask) {
				details.aggregate(this.currentMask._appendPlaceholder());
			}
			return details;
		}
		_appendEager() {
			const details = this._applyDispatch();
			if (this.currentMask) {
				details.aggregate(this.currentMask._appendEager());
			}
			return details;
		}
		appendTail(tail) {
			const details = new ChangeDetails();
			if (tail) details.aggregate(this._applyDispatch('', {}, tail));
			return details.aggregate(this.currentMask ? this.currentMask.appendTail(tail) : super.appendTail(tail));
		}
		currentMaskFlags(flags) {
			var _flags$_beforeTailSta, _flags$_beforeTailSta2;
			return {
				...flags,
				_beforeTailState: ((_flags$_beforeTailSta = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta.currentMaskRef) === this.currentMask && ((_flags$_beforeTailSta2 = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta2.currentMask) || flags._beforeTailState
			};
		}
		doDispatch(appended, flags, tail) {
			if (flags === void 0) {
				flags = {};
			}
			if (tail === void 0) {
				tail = '';
			}
			return this.dispatch(appended, this, flags, tail);
		}
		doValidate(flags) {
			return super.doValidate(flags) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(flags)));
		}
		doPrepare(str, flags) {
			if (flags === void 0) {
				flags = {};
			}
			let [s, details] = super.doPrepare(str, flags);
			if (this.currentMask) {
				let currentDetails;
				[s, currentDetails] = super.doPrepare(s, this.currentMaskFlags(flags));
				details = details.aggregate(currentDetails);
			}
			return [s, details];
		}
		doPrepareChar(str, flags) {
			if (flags === void 0) {
				flags = {};
			}
			let [s, details] = super.doPrepareChar(str, flags);
			if (this.currentMask) {
				let currentDetails;
				[s, currentDetails] = super.doPrepareChar(s, this.currentMaskFlags(flags));
				details = details.aggregate(currentDetails);
			}
			return [s, details];
		}
		reset() {
			var _this$currentMask;
			(_this$currentMask = this.currentMask) == null || _this$currentMask.reset();
			this.compiledMasks.forEach(m => m.reset());
		}
		get value() {
			return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : '';
		}
		set value(value) {
			if (this.exposeMask) {
				this.exposeMask.value = value;
				this.currentMask = this.exposeMask;
				this._applyDispatch();
			} else super.value = value;
		}
		get unmaskedValue() {
			return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : '';
		}
		set unmaskedValue(unmaskedValue) {
			if (this.exposeMask) {
				this.exposeMask.unmaskedValue = unmaskedValue;
				this.currentMask = this.exposeMask;
				this._applyDispatch();
			} else super.unmaskedValue = unmaskedValue;
		}
		get typedValue() {
			return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : '';
		}
		set typedValue(typedValue) {
			if (this.exposeMask) {
				this.exposeMask.typedValue = typedValue;
				this.currentMask = this.exposeMask;
				this._applyDispatch();
				return;
			}
			let unmaskedValue = String(typedValue);

			// double check it
			if (this.currentMask) {
				this.currentMask.typedValue = typedValue;
				unmaskedValue = this.currentMask.unmaskedValue;
			}
			this.unmaskedValue = unmaskedValue;
		}
		get displayValue() {
			return this.currentMask ? this.currentMask.displayValue : '';
		}
		get isComplete() {
			var _this$currentMask2;
			return Boolean((_this$currentMask2 = this.currentMask) == null ? void 0 : _this$currentMask2.isComplete);
		}
		get isFilled() {
			var _this$currentMask3;
			return Boolean((_this$currentMask3 = this.currentMask) == null ? void 0 : _this$currentMask3.isFilled);
		}
		remove(fromPos, toPos) {
			const details = new ChangeDetails();
			if (this.currentMask) {
				details.aggregate(this.currentMask.remove(fromPos, toPos))
					// update with dispatch
					.aggregate(this._applyDispatch());
			}
			return details;
		}
		get state() {
			var _this$currentMask4;
			return {
				...super.state,
				_rawInputValue: this.rawInputValue,
				compiledMasks: this.compiledMasks.map(m => m.state),
				currentMaskRef: this.currentMask,
				currentMask: (_this$currentMask4 = this.currentMask) == null ? void 0 : _this$currentMask4.state
			};
		}
		set state(state) {
			const {
				compiledMasks,
				currentMaskRef,
				currentMask,
				...maskedState
			} = state;
			if (compiledMasks) this.compiledMasks.forEach((m, mi) => m.state = compiledMasks[mi]);
			if (currentMaskRef != null) {
				this.currentMask = currentMaskRef;
				this.currentMask.state = currentMask;
			}
			super.state = maskedState;
		}
		extractInput(fromPos, toPos, flags) {
			return this.currentMask ? this.currentMask.extractInput(fromPos, toPos, flags) : '';
		}
		extractTail(fromPos, toPos) {
			return this.currentMask ? this.currentMask.extractTail(fromPos, toPos) : super.extractTail(fromPos, toPos);
		}
		doCommit() {
			if (this.currentMask) this.currentMask.doCommit();
			super.doCommit();
		}
		nearestInputPos(cursorPos, direction) {
			return this.currentMask ? this.currentMask.nearestInputPos(cursorPos, direction) : super.nearestInputPos(cursorPos, direction);
		}
		get overwrite() {
			return this.currentMask ? this.currentMask.overwrite : this._overwrite;
		}
		set overwrite(overwrite) {
			this._overwrite = overwrite;
		}
		get eager() {
			return this.currentMask ? this.currentMask.eager : this._eager;
		}
		set eager(eager) {
			this._eager = eager;
		}
		get skipInvalid() {
			return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid;
		}
		set skipInvalid(skipInvalid) {
			this._skipInvalid = skipInvalid;
		}
		get autofix() {
			return this.currentMask ? this.currentMask.autofix : this._autofix;
		}
		set autofix(autofix) {
			this._autofix = autofix;
		}
		maskEquals(mask) {
			return Array.isArray(mask) ? this.compiledMasks.every((m, mi) => {
				if (!mask[mi]) return;
				const {
					mask: oldMask,
					...restOpts
				} = mask[mi];
				return objectIncludes(m, restOpts) && m.maskEquals(oldMask);
			}) : super.maskEquals(mask);
		}
		typedValueEquals(value) {
			var _this$currentMask5;
			return Boolean((_this$currentMask5 = this.currentMask) == null ? void 0 : _this$currentMask5.typedValueEquals(value));
		}
	}
	/** Currently chosen mask */
	/** Currently chosen mask */
	/** Compliled {@link Masked} options */
	/** Chooses {@link Masked} depending on input value */
	MaskedDynamic.DEFAULTS = {
		...Masked.DEFAULTS,
		dispatch: (appended, masked, flags, tail) => {
			if (!masked.compiledMasks.length) return;
			const inputValue = masked.rawInputValue;

			// simulate input
			const inputs = masked.compiledMasks.map((m, index) => {
				const isCurrent = masked.currentMask === m;
				const startInputPos = isCurrent ? m.displayValue.length : m.nearestInputPos(m.displayValue.length, DIRECTION.FORCE_LEFT);
				if (m.rawInputValue !== inputValue) {
					m.reset();
					m.append(inputValue, {
						raw: true
					});
				} else if (!isCurrent) {
					m.remove(startInputPos);
				}
				m.append(appended, masked.currentMaskFlags(flags));
				m.appendTail(tail);
				return {
					index,
					weight: m.rawInputValue.length,
					totalInputPositions: m.totalInputPositions(0, Math.max(startInputPos, m.nearestInputPos(m.displayValue.length, DIRECTION.FORCE_LEFT)))
				};
			});

			// pop masks with longer values first
			inputs.sort((i1, i2) => i2.weight - i1.weight || i2.totalInputPositions - i1.totalInputPositions);
			return masked.compiledMasks[inputs[0].index];
		}
	};
	IMask.MaskedDynamic = MaskedDynamic;

	/** Pattern which validates enum values */
	class MaskedEnum extends MaskedPattern {
		constructor(opts) {
			super({
				...MaskedEnum.DEFAULTS,
				...opts
			}); // mask will be created in _update
		}
		updateOptions(opts) {
			super.updateOptions(opts);
		}
		_update(opts) {
			const {
				enum: enum_,
				...eopts
			} = opts;
			if (enum_) {
				const lengths = enum_.map(e => e.length);
				const requiredLength = Math.min(...lengths);
				const optionalLength = Math.max(...lengths) - requiredLength;
				eopts.mask = '*'.repeat(requiredLength);
				if (optionalLength) eopts.mask += '[' + '*'.repeat(optionalLength) + ']';
				this.enum = enum_;
			}
			super._update(eopts);
		}
		_appendCharRaw(ch, flags) {
			if (flags === void 0) {
				flags = {};
			}
			const matchFrom = Math.min(this.nearestInputPos(0, DIRECTION.FORCE_RIGHT), this.value.length);
			const matches = this.enum.filter(e => this.matchValue(e, this.unmaskedValue + ch, matchFrom));
			if (matches.length) {
				if (matches.length === 1) {
					this._forEachBlocksInRange(0, this.value.length, (b, bi) => {
						const mch = matches[0][bi];
						if (bi >= this.value.length || mch === b.value) return;
						b.reset();
						b._appendChar(mch, flags);
					});
				}
				const d = super._appendCharRaw(matches[0][this.value.length], flags);
				if (matches.length === 1) {
					matches[0].slice(this.unmaskedValue.length).split('').forEach(mch => d.aggregate(super._appendCharRaw(mch)));
				}
				return d;
			}
			return new ChangeDetails({
				skip: !this.isComplete
			});
		}
		extractTail(fromPos, toPos) {
			if (fromPos === void 0) {
				fromPos = 0;
			}
			if (toPos === void 0) {
				toPos = this.displayValue.length;
			}
			// just drop tail
			return new ContinuousTailDetails('', fromPos);
		}
		remove(fromPos, toPos) {
			if (fromPos === void 0) {
				fromPos = 0;
			}
			if (toPos === void 0) {
				toPos = this.displayValue.length;
			}
			if (fromPos === toPos) return new ChangeDetails();
			const matchFrom = Math.min(super.nearestInputPos(0, DIRECTION.FORCE_RIGHT), this.value.length);
			let pos;
			for (pos = fromPos; pos >= 0; --pos) {
				const matches = this.enum.filter(e => this.matchValue(e, this.value.slice(matchFrom, pos), matchFrom));
				if (matches.length > 1) break;
			}
			const details = super.remove(pos, toPos);
			details.tailShift += pos - fromPos;
			return details;
		}
		get isComplete() {
			return this.enum.indexOf(this.value) >= 0;
		}
	}
	/** Match enum value */
	MaskedEnum.DEFAULTS = {
		...MaskedPattern.DEFAULTS,
		matchValue: (estr, istr, matchFrom) => estr.indexOf(istr, matchFrom) === matchFrom
	};
	IMask.MaskedEnum = MaskedEnum;

	/** Masking by custom Function */
	class MaskedFunction extends Masked {
		/** */

		/** Enable characters overwriting */

		/** */

		/** */

		/** */

		updateOptions(opts) {
			super.updateOptions(opts);
		}
		_update(opts) {
			super._update({
				...opts,
				validate: opts.mask
			});
		}
	}
	IMask.MaskedFunction = MaskedFunction;

	var _MaskedNumber;
	/** Number mask */
	class MaskedNumber extends Masked {
		/** Single char */

		/** Single char */

		/** Array of single chars */

		/** */

		/** */

		/** Digits after point */

		/** Flag to remove leading and trailing zeros in the end of editing */

		/** Flag to pad trailing zeros after point in the end of editing */

		/** Enable characters overwriting */

		/** */

		/** */

		/** */

		/** Format typed value to string */

		/** Parse string to get typed value */

		constructor(opts) {
			super({
				...MaskedNumber.DEFAULTS,
				...opts
			});
		}
		updateOptions(opts) {
			super.updateOptions(opts);
		}
		_update(opts) {
			super._update(opts);
			this._updateRegExps();
		}
		_updateRegExps() {
			const start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
			const mid = '\\d*';
			const end = (this.scale ? "(" + escapeRegExp(this.radix) + "\\d{0," + this.scale + "})?" : '') + '$';
			this._numberRegExp = new RegExp(start + mid + end);
			this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(escapeRegExp).join('') + "]", 'g');
			this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
		}
		_removeThousandsSeparators(value) {
			return value.replace(this._thousandsSeparatorRegExp, '');
		}
		_insertThousandsSeparators(value) {
			// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
			const parts = value.split(this.radix);
			parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
			return parts.join(this.radix);
		}
		doPrepareChar(ch, flags) {
			if (flags === void 0) {
				flags = {};
			}
			const [prepCh, details] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && (
				/*
				  radix should be mapped when
				  1) input is done from keyboard = flags.input && flags.raw
				  2) unmasked value is set = !flags.input && !flags.raw
				  and should not be mapped when
				  1) value is set = flags.input && !flags.raw
				  2) raw value is set = !flags.input && flags.raw
				*/
				flags.input && flags.raw || !flags.input && !flags.raw) ? ch.replace(this._mapToRadixRegExp, this.radix) : ch), flags);
			if (ch && !prepCh) details.skip = true;
			if (prepCh && !this.allowPositive && !this.value && prepCh !== '-') details.aggregate(this._appendChar('-'));
			return [prepCh, details];
		}
		_separatorsCount(to, extendOnSeparators) {
			if (extendOnSeparators === void 0) {
				extendOnSeparators = false;
			}
			let count = 0;
			for (let pos = 0; pos < to; ++pos) {
				if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
					++count;
					if (extendOnSeparators) to += this.thousandsSeparator.length;
				}
			}
			return count;
		}
		_separatorsCountFromSlice(slice) {
			if (slice === void 0) {
				slice = this._value;
			}
			return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
		}
		extractInput(fromPos, toPos, flags) {
			if (fromPos === void 0) {
				fromPos = 0;
			}
			if (toPos === void 0) {
				toPos = this.displayValue.length;
			}
			[fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
			return this._removeThousandsSeparators(super.extractInput(fromPos, toPos, flags));
		}
		_appendCharRaw(ch, flags) {
			if (flags === void 0) {
				flags = {};
			}
			const prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
			const prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
			this._value = this._removeThousandsSeparators(this.value);
			const oldValue = this._value;
			this._value += ch;
			const num = this.number;
			let accepted = !isNaN(num);
			let skip = false;
			if (accepted) {
				let fixedNum;
				if (this.min != null && this.min < 0 && this.number < this.min) fixedNum = this.min;
				if (this.max != null && this.max > 0 && this.number > this.max) fixedNum = this.max;
				if (fixedNum != null) {
					if (this.autofix) {
						this._value = this.format(fixedNum, this).replace(MaskedNumber.UNMASKED_RADIX, this.radix);
						skip || (skip = oldValue === this._value && !flags.tail); // if not changed on tail it's still ok to proceed
					} else {
						accepted = false;
					}
				}
				accepted && (accepted = Boolean(this._value.match(this._numberRegExp)));
			}
			let appendDetails;
			if (!accepted) {
				this._value = oldValue;
				appendDetails = new ChangeDetails();
			} else {
				appendDetails = new ChangeDetails({
					inserted: this._value.slice(oldValue.length),
					rawInserted: skip ? '' : ch,
					skip
				});
			}
			this._value = this._insertThousandsSeparators(this._value);
			const beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
			const beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
			appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
			return appendDetails;
		}
		_findSeparatorAround(pos) {
			if (this.thousandsSeparator) {
				const searchFrom = pos - this.thousandsSeparator.length + 1;
				const separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
				if (separatorPos <= pos) return separatorPos;
			}
			return -1;
		}
		_adjustRangeWithSeparators(from, to) {
			const separatorAroundFromPos = this._findSeparatorAround(from);
			if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;
			const separatorAroundToPos = this._findSeparatorAround(to);
			if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
			return [from, to];
		}
		remove(fromPos, toPos) {
			if (fromPos === void 0) {
				fromPos = 0;
			}
			if (toPos === void 0) {
				toPos = this.displayValue.length;
			}
			[fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
			const valueBeforePos = this.value.slice(0, fromPos);
			const valueAfterPos = this.value.slice(toPos);
			const prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
			this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
			const beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
			return new ChangeDetails({
				tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
			});
		}
		nearestInputPos(cursorPos, direction) {
			if (!this.thousandsSeparator) return cursorPos;
			switch (direction) {
				case DIRECTION.NONE:
				case DIRECTION.LEFT:
				case DIRECTION.FORCE_LEFT:
					{
						const separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
						if (separatorAtLeftPos >= 0) {
							const separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
							if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
								return separatorAtLeftPos;
							}
						}
						break;
					}
				case DIRECTION.RIGHT:
				case DIRECTION.FORCE_RIGHT:
					{
						const separatorAtRightPos = this._findSeparatorAround(cursorPos);
						if (separatorAtRightPos >= 0) {
							return separatorAtRightPos + this.thousandsSeparator.length;
						}
					}
			}
			return cursorPos;
		}
		doCommit() {
			if (this.value) {
				const number = this.number;
				let validnum = number;

				// check bounds
				if (this.min != null) validnum = Math.max(validnum, this.min);
				if (this.max != null) validnum = Math.min(validnum, this.max);
				if (validnum !== number) this.unmaskedValue = this.format(validnum, this);
				let formatted = this.value;
				if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
				if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
				this._value = formatted;
			}
			super.doCommit();
		}
		_normalizeZeros(value) {
			const parts = this._removeThousandsSeparators(value).split(this.radix);

			// remove leading zeros
			parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, (match, sign, zeros, num) => sign + num);
			// add leading zero
			if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';
			if (parts.length > 1) {
				parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros
				if (!parts[1].length) parts.length = 1; // remove fractional
			}
			return this._insertThousandsSeparators(parts.join(this.radix));
		}
		_padFractionalZeros(value) {
			if (!value) return value;
			const parts = value.split(this.radix);
			if (parts.length < 2) parts.push('');
			parts[1] = parts[1].padEnd(this.scale, '0');
			return parts.join(this.radix);
		}
		doSkipInvalid(ch, flags, checkTail) {
			if (flags === void 0) {
				flags = {};
			}
			const dropFractional = this.scale === 0 && ch !== this.thousandsSeparator && (ch === this.radix || ch === MaskedNumber.UNMASKED_RADIX || this.mapToRadix.includes(ch));
			return super.doSkipInvalid(ch, flags, checkTail) && !dropFractional;
		}
		get unmaskedValue() {
			return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, MaskedNumber.UNMASKED_RADIX);
		}
		set unmaskedValue(unmaskedValue) {
			super.unmaskedValue = unmaskedValue;
		}
		get typedValue() {
			return this.parse(this.unmaskedValue, this);
		}
		set typedValue(n) {
			this.rawInputValue = this.format(n, this).replace(MaskedNumber.UNMASKED_RADIX, this.radix);
		}

		/** Parsed Number */
		get number() {
			return this.typedValue;
		}
		set number(number) {
			this.typedValue = number;
		}
		get allowNegative() {
			return this.min != null && this.min < 0 || this.max != null && this.max < 0;
		}
		get allowPositive() {
			return this.min != null && this.min > 0 || this.max != null && this.max > 0;
		}
		typedValueEquals(value) {
			// handle  0 -> '' case (typed = 0 even if value = '')
			// for details see https://github.com/uNmAnNeR/imaskjs/issues/134
			return (super.typedValueEquals(value) || MaskedNumber.EMPTY_VALUES.includes(value) && MaskedNumber.EMPTY_VALUES.includes(this.typedValue)) && !(value === 0 && this.value === '');
		}
	}
	_MaskedNumber = MaskedNumber;
	MaskedNumber.UNMASKED_RADIX = '.';
	MaskedNumber.EMPTY_VALUES = [...Masked.EMPTY_VALUES, 0];
	MaskedNumber.DEFAULTS = {
		...Masked.DEFAULTS,
		mask: Number,
		radix: ',',
		thousandsSeparator: '',
		mapToRadix: [_MaskedNumber.UNMASKED_RADIX],
		min: Number.MIN_SAFE_INTEGER,
		max: Number.MAX_SAFE_INTEGER,
		scale: 2,
		normalizeZeros: true,
		padFractionalZeros: false,
		parse: Number,
		format: n => n.toLocaleString('en-US', {
			useGrouping: false,
			maximumFractionDigits: 20
		})
	};
	IMask.MaskedNumber = MaskedNumber;

	/** Mask pipe source and destination types */
	const PIPE_TYPE = {
		MASKED: 'value',
		UNMASKED: 'unmaskedValue',
		TYPED: 'typedValue'
	};
	/** Creates new pipe function depending on mask type, source and destination options */
	function createPipe(arg, from, to) {
		if (from === void 0) {
			from = PIPE_TYPE.MASKED;
		}
		if (to === void 0) {
			to = PIPE_TYPE.MASKED;
		}
		const masked = createMask(arg);
		return value => masked.runIsolated(m => {
			m[from] = value;
			return m[to];
		});
	}

	/** Pipes value through mask depending on mask type, source and destination options */
	function pipe(value, mask, from, to) {
		return createPipe(mask, from, to)(value);
	}
	IMask.PIPE_TYPE = PIPE_TYPE;
	IMask.createPipe = createPipe;
	IMask.pipe = pipe;

	/** Pattern mask */
	class RepeatBlock extends MaskedPattern {
		get repeatFrom() {
			var _ref;
			return (_ref = Array.isArray(this.repeat) ? this.repeat[0] : this.repeat === Infinity ? 0 : this.repeat) != null ? _ref : 0;
		}
		get repeatTo() {
			var _ref2;
			return (_ref2 = Array.isArray(this.repeat) ? this.repeat[1] : this.repeat) != null ? _ref2 : Infinity;
		}
		constructor(opts) {
			super(opts);
		}
		updateOptions(opts) {
			super.updateOptions(opts);
		}
		_update(opts) {
			var _ref3, _ref4, _this$_blocks;
			const {
				repeat,
				...blockOpts
			} = normalizeOpts(opts); // TODO type
			this._blockOpts = Object.assign({}, this._blockOpts, blockOpts);
			const block = createMask(this._blockOpts);
			this.repeat = (_ref3 = (_ref4 = repeat != null ? repeat : block.repeat) != null ? _ref4 : this.repeat) != null ? _ref3 : Infinity; // TODO type

			super._update({
				mask: 'm'.repeat(Math.max(this.repeatTo === Infinity && ((_this$_blocks = this._blocks) == null ? void 0 : _this$_blocks.length) || 0, this.repeatFrom)),
				blocks: {
					m: block
				},
				eager: block.eager,
				overwrite: block.overwrite,
				skipInvalid: block.skipInvalid,
				lazy: block.lazy,
				placeholderChar: block.placeholderChar,
				displayChar: block.displayChar
			});
		}
		_allocateBlock(bi) {
			if (bi < this._blocks.length) return this._blocks[bi];
			if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) {
				this._blocks.push(createMask(this._blockOpts));
				this.mask += 'm';
				return this._blocks[this._blocks.length - 1];
			}
		}
		_appendCharRaw(ch, flags) {
			if (flags === void 0) {
				flags = {};
			}
			const details = new ChangeDetails();
			for (let bi = (_this$_mapPosToBlock$ = (_this$_mapPosToBlock = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : _this$_mapPosToBlock.index) != null ? _this$_mapPosToBlock$ : Math.max(this._blocks.length - 1, 0), block, allocated;
				// try to get a block or
				// try to allocate a new block if not allocated already
				block = (_this$_blocks$bi = this._blocks[bi]) != null ? _this$_blocks$bi : allocated = !allocated && this._allocateBlock(bi); ++bi) {
				var _this$_mapPosToBlock$, _this$_mapPosToBlock, _this$_blocks$bi, _flags$_beforeTailSta;
				const blockDetails = block._appendChar(ch, {
					...flags,
					_beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) == null || (_flags$_beforeTailSta = _flags$_beforeTailSta._blocks) == null ? void 0 : _flags$_beforeTailSta[bi]
				});
				if (blockDetails.skip && allocated) {
					// remove the last allocated block and break
					this._blocks.pop();
					this.mask = this.mask.slice(1);
					break;
				}
				details.aggregate(blockDetails);
				if (blockDetails.consumed) break; // go next char
			}
			return details;
		}
		_trimEmptyTail(fromPos, toPos) {
			var _this$_mapPosToBlock2, _this$_mapPosToBlock3;
			if (fromPos === void 0) {
				fromPos = 0;
			}
			const firstBlockIndex = Math.max(((_this$_mapPosToBlock2 = this._mapPosToBlock(fromPos)) == null ? void 0 : _this$_mapPosToBlock2.index) || 0, this.repeatFrom, 0);
			let lastBlockIndex;
			if (toPos != null) lastBlockIndex = (_this$_mapPosToBlock3 = this._mapPosToBlock(toPos)) == null ? void 0 : _this$_mapPosToBlock3.index;
			if (lastBlockIndex == null) lastBlockIndex = this._blocks.length - 1;
			let removeCount = 0;
			for (let blockIndex = lastBlockIndex; firstBlockIndex <= blockIndex; --blockIndex, ++removeCount) {
				if (this._blocks[blockIndex].unmaskedValue) break;
			}
			if (removeCount) {
				this._blocks.splice(lastBlockIndex - removeCount + 1, removeCount);
				this.mask = this.mask.slice(removeCount);
			}
		}
		reset() {
			super.reset();
			this._trimEmptyTail();
		}
		remove(fromPos, toPos) {
			if (fromPos === void 0) {
				fromPos = 0;
			}
			if (toPos === void 0) {
				toPos = this.displayValue.length;
			}
			const removeDetails = super.remove(fromPos, toPos);
			this._trimEmptyTail(fromPos, toPos);
			return removeDetails;
		}
		totalInputPositions(fromPos, toPos) {
			if (fromPos === void 0) {
				fromPos = 0;
			}
			if (toPos == null && this.repeatTo === Infinity) return Infinity;
			return super.totalInputPositions(fromPos, toPos);
		}
		get state() {
			return super.state;
		}
		set state(state) {
			this._blocks.length = state._blocks.length;
			this.mask = this.mask.slice(0, this._blocks.length);
			super.state = state;
		}
	}
	IMask.RepeatBlock = RepeatBlock;

	try {
		globalThis.IMask = IMask;
	} catch { }

	exports.ChangeDetails = ChangeDetails;
	exports.ChunksTailDetails = ChunksTailDetails;
	exports.DIRECTION = DIRECTION;
	exports.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
	exports.HTMLInputMaskElement = HTMLInputMaskElement;
	exports.HTMLMaskElement = HTMLMaskElement;
	exports.InputMask = InputMask;
	exports.MaskElement = MaskElement;
	exports.Masked = Masked;
	exports.MaskedDate = MaskedDate;
	exports.MaskedDynamic = MaskedDynamic;
	exports.MaskedEnum = MaskedEnum;
	exports.MaskedFunction = MaskedFunction;
	exports.MaskedNumber = MaskedNumber;
	exports.MaskedPattern = MaskedPattern;
	exports.MaskedRange = MaskedRange;
	exports.MaskedRegExp = MaskedRegExp;
	exports.PIPE_TYPE = PIPE_TYPE;
	exports.PatternFixedDefinition = PatternFixedDefinition;
	exports.PatternInputDefinition = PatternInputDefinition;
	exports.RepeatBlock = RepeatBlock;
	exports.createMask = createMask;
	exports.createPipe = createPipe;
	exports.default = IMask;
	exports.forceDirection = forceDirection;
	exports.normalizeOpts = normalizeOpts;
	exports.pipe = pipe;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=imask.js.map
