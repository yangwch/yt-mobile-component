webpackJsonp([7],{"9aLt":function(e,t){},xC3D:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("yt-page",{attrs:{title:"count计数器"}},[e._l(e.list,function(t,u){return n("yt-cell",{key:u,attrs:{labelWidth:"100px",border:"none",label:t.label+"(剩余"+t.count+")"}},[n("yt-count",{model:{value:t.useCount,callback:function(n){e.$set(t,"useCount",n)},expression:"item.useCount"}})],1)}),e._v(" "),n("yt-split"),e._v(" "),n("yt-cell",{attrs:{label:"润滑油"}},[n("yt-count",{attrs:{alwaysShowNum:"",alwaysShowReduce:"",min:1,max:5},model:{value:e.use,callback:function(t){e.use=t},expression:"use"}})],1)],2)},staticRenderFns:[]};var l=n("VU/8")({name:"count-example",data:function(){return{use:5,list:[{label:"润滑油",useCount:0,count:8},{label:"灯泡",useCount:2,count:10},{label:"螺丝",useCount:0,count:15}]}}},u,!1,function(e){n("9aLt")},"data-v-f49de5ce",null);t.default=l.exports}});