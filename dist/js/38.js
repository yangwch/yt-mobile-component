webpackJsonp([38],{aQAO:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("yt-page",{attrs:{title:t.title,leftData:[],rightData:[]}},[l("yt-cell",{attrs:{label:"从上面出来",isLink:""},on:{click:function(e){t.handlerClick("top")}}}),t._v(" "),l("yt-cell",{attrs:{label:"从下面出来",isLink:""},on:{click:function(e){t.handlerClick("bottom")}}}),t._v(" "),l("yt-cell",{attrs:{label:"从左面出来",isLink:""},on:{click:function(e){t.handlerClick("left")}}}),t._v(" "),l("yt-cell",{attrs:{label:"从右面出来",isLink:""},on:{click:function(e){t.handlerClick("right")}}}),t._v(" "),l("yt-cell",{attrs:{label:"从中间出来",isLink:""},on:{click:function(e){t.handlerClick("center")}}}),t._v(" "),l("yt-popup",{attrs:{pos:"top"},model:{value:t.top,callback:function(e){t.top=e},expression:"top"}},[l("yt-checkList",{attrs:{max:1,val:"id",label:"label",list:t.list},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1),t._v(" "),l("yt-popup",{attrs:{pos:"bottom",fixed:""},model:{value:t.bottom,callback:function(e){t.bottom=e},expression:"bottom"}},[l("yt-checkList",{attrs:{max:1,val:"id",label:"label",list:t.list},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1),t._v(" "),l("yt-popup",{attrs:{slot:"alert",pos:"left"},slot:"alert",model:{value:t.left,callback:function(e){t.left=e},expression:"left"}},[l("yt-page",{staticClass:"page",attrs:{flex:!0,leftData:[],title:"选择分区"}},[l("yt-checkList",{staticStyle:{flex:"1"},attrs:{max:1,val:"id",label:"label",list:t.list},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1)],1),t._v(" "),l("yt-popup",{attrs:{slot:"alert",pos:"right",mask:!1},slot:"alert",model:{value:t.right,callback:function(e){t.right=e},expression:"right"}},[l("yt-page",{staticClass:"page",attrs:{flex:!0,leftData:[],title:"选择分区"}},[l("yt-checkList",{staticStyle:{flex:"1"},attrs:{max:1,val:"id",label:"label",list:t.list},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}}),t._v(" "),l("yt-btn",{attrs:{edge:""},on:{click:function(e){t.right=!1}}},[t._v("关闭")])],1)],1),t._v(" "),l("yt-popup",{attrs:{pos:"center",fixed:""},model:{value:t.center,callback:function(e){t.center=e},expression:"center"}},[l("yt-checkList",{attrs:{max:1,val:"id",label:"label",list:t.list},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1)],1)},staticRenderFns:[]};var c=l("VU/8")({name:"popup-example",data:function(){return{top:!1,bottom:!1,left:!1,right:!1,center:!1,select:[],list:[{label:"101分区",id:1},{label:"102分区",id:2},{label:"103分区",id:3},{label:"104分区",id:4},{label:"105分区",id:5},{label:"106分区",id:6}],title:"popover组件"}},methods:{handlerClick:function(t){this[t]=!0}}},a,!1,function(t){l("uYLM")},"data-v-1bfebdcd",null);e.default=c.exports},uYLM:function(t,e){}});