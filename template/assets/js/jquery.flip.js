!function(s){var n=function(e,t,i){this.setting={axis:"y",reverse:!1,trigger:"click",speed:500,forceHeight:!1,forceWidth:!1,autoSize:!0,front:".front",back:".back"},this.setting=s.extend(this.setting,t),"string"!=typeof t.axis||"x"!==t.axis.toLowerCase()&&"y"!==t.axis.toLowerCase()||(this.setting.axis=t.axis.toLowerCase()),"boolean"==typeof t.reverse&&(this.setting.reverse=t.reverse),"string"==typeof t.trigger&&(this.setting.trigger=t.trigger.toLowerCase());var n=parseInt(t.speed);isNaN(n)||(this.setting.speed=n),"boolean"==typeof t.forceHeight&&(this.setting.forceHeight=t.forceHeight),"boolean"==typeof t.forceWidth&&(this.setting.forceWidth=t.forceWidth),"boolean"==typeof t.autoSize&&(this.setting.autoSize=t.autoSize),("string"==typeof t.front||t.front instanceof s)&&(this.setting.front=t.front),("string"==typeof t.back||t.back instanceof s)&&(this.setting.back=t.back),this.element=e,this.frontElement=this.getFrontElement(),this.backElement=this.getBackElement(),this.isFlipped=!1,this.init(i)};s.extend(n.prototype,{flipDone:function(e){var t=this;t.element.one(function(){var e,t=document.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}(),function(){t.element.trigger("flip:done"),"function"==typeof e&&e.call(t.element)})},flip:function(e){if(!this.isFlipped){this.isFlipped=!0;var t="rotate"+this.setting.axis;this.frontElement.css({transform:t+(this.setting.reverse?"(-180deg)":"(180deg)"),"z-index":"0"}),this.backElement.css({transform:t+"(0deg)","z-index":"1"}),this.flipDone(e)}},unflip:function(e){if(this.isFlipped){this.isFlipped=!1;var t="rotate"+this.setting.axis;this.frontElement.css({transform:t+"(0deg)","z-index":"1"}),this.backElement.css({transform:t+(this.setting.reverse?"(180deg)":"(-180deg)"),"z-index":"0"}),this.flipDone(e)}},getFrontElement:function(){return this.setting.front instanceof s?this.setting.front:this.element.find(this.setting.front)},getBackElement:function(){return this.setting.back instanceof s?this.setting.back:this.element.find(this.setting.back)},init:function(t){var i=this,n=i.frontElement.add(i.backElement),e="rotate"+i.setting.axis,s={perspective:2*i.element["outer"+("rotatex"===e?"Height":"Width")](),position:"relative"},o={transform:e+"("+(i.setting.reverse?"180deg":"-180deg")+")","z-index":"0",position:"relative"},r={"backface-visibility":"hidden","transform-style":"preserve-3d",position:"absolute","z-index":"1"};i.setting.forceHeight?n.outerHeight(i.element.height()):i.setting.autoSize&&(r.height="100%"),i.setting.forceWidth?n.outerWidth(i.element.width()):i.setting.autoSize&&(r.width="100%"),(window.chrome||window.Intl&&Intl.v8BreakIterator)&&"CSS"in window&&(s["-webkit-transform-style"]="preserve-3d"),n.css(r).find("*").css({"backface-visibility":"hidden"}),i.element.css(s),i.backElement.css(o),setTimeout(function(){var e=i.setting.speed/1e3||.5;n.css({transition:"all "+e+"s ease-out"}),"function"==typeof t&&t.call(i.element)},20),i.attachEvents()},clickHandler:function(e){e||(e=window.event),this.element.find(s(e.target).closest('button, a, input[type="submit"]')).length||(this.isFlipped?this.unflip():this.flip())},hoverHandler:function(){var e=this;e.element.off("mouseleave.flip"),e.flip(),setTimeout(function(){e.element.on("mouseleave.flip",s.proxy(e.unflip,e)),e.element.is(":hover")||e.unflip()},e.setting.speed+150)},attachEvents:function(){var e=this;"click"===e.setting.trigger?e.element.on(s.fn.tap?"tap.flip":"click.flip",s.proxy(e.clickHandler,e)):"hover"===e.setting.trigger&&(e.element.on("mouseenter.flip",s.proxy(e.hoverHandler,e)),e.element.on("mouseleave.flip",s.proxy(e.unflip,e)))},flipChanged:function(e){this.element.trigger("flip:change"),"function"==typeof e&&e.call(this.element)},changeSettings:function(e,t){var i=this,n=!1;if(void 0!==e.axis&&i.setting.axis!==e.axis.toLowerCase()&&(i.setting.axis=e.axis.toLowerCase(),n=!0),void 0!==e.reverse&&i.setting.reverse!==e.reverse&&(i.setting.reverse=e.reverse,n=!0),n){var s=i.frontElement.add(i.backElement),o=s.css(["transition-property","transition-timing-function","transition-duration","transition-delay"]);s.css({transition:"none"});var r="rotate"+i.setting.axis;i.isFlipped?i.frontElement.css({transform:r+(i.setting.reverse?"(-180deg)":"(180deg)"),"z-index":"0"}):i.backElement.css({transform:r+(i.setting.reverse?"(180deg)":"(-180deg)"),"z-index":"0"}),setTimeout(function(){s.css(o),i.flipChanged(t)},0)}else i.flipChanged(t)}}),s.fn.flip=function(t,i){return"function"==typeof t&&(i=t),"string"==typeof t||"boolean"==typeof t?this.each(function(){var e=s(this).data("flip-model");"toggle"===t&&(t=!e.isFlipped),t?e.flip(i):e.unflip(i)}):this.each(function(){if(s(this).data("flip-model")){var e=s(this).data("flip-model");!t||void 0===t.axis&&void 0===t.reverse||e.changeSettings(t,i)}else s(this).data("flip-model",new n(s(this),t||{},i))}),this}}(jQuery);