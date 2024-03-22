"use strict";var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,i.key,i)}}return function(t,r,i){if(r)e(t.prototype,r);if(i)e(t,i);return t}}();var _widget=require("$:/core/modules/widgets/widget.js");var _utils=require("$:/plugins/felixhayashi/tiddlymap/js/utils");var _utils2=_interopRequireDefault(_utils);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}/* @preserve TW-Guard */
/*\

title: $:/plugins/felixhayashi/tiddlymap/js/widget/EdgeListWidgetItem
type: application/javascript
module-type: widget

@preserve

\*/
/* @preserve TW-Guard */var EdgeListItemWidget=function(e){_inherits(t,e);function t(e,r){_classCallCheck(this,t);var i=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));i.arrows=$tm.misc.arrows;return i}_createClass(t,[{key:"execute",value:function e(){var t=this.parseTreeNode;var r=$tm.tracker.getTiddlerById(t.neighbour.id);var i=_utils2.default.flatten(t.edge);for(var o in i){if(typeof i[o]==="string"){this.setVariable("edge."+o,i[o])}}this.setVariable("currentTiddler",r);this.setVariable("neighbour",r);var n=$tm.indeces.allETy[i.type];var s=i.to===t.neighbour.id?"to":"from";var a=s;if(n.biArrow){a="bi"}else{if(s==="to"&&n.invertedArrow){a="from"}else if(s==="from"&&n.invertedArrow){a="to"}}this.setVariable("direction",a);this.setVariable("directionSymbol",a==="bi"?this.arrows.bi:a==="from"?this.arrows.in:this.arrows.out);this.makeChildWidgets()}},{key:"refresh",value:function e(t){return this.refreshChildren(t)}}]);return t}(_widget.widget);exports["tmap-edgelistitem"]=EdgeListItemWidget;
//# sourceMappingURL=./maps/felixhayashi/tiddlymap/js/widget/EdgeListItemWidget.js.map