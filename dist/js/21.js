webpackJsonp([21],{"JAe+":function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var c=e("koUC"),r={name:"Toast-service",methods:{doTool:function(){Object(c.d)("这是一条提醒信息","tool")},doSuccess:function(){Object(c.d)("这是一条成功信息","success")},doError:function(){Object(c.d)("这是一条错误信息","error")},doTool2:function(){this.$Toast("这是一条提醒信息","tool")},doSuccess2:function(){this.$Toast("这是一条成功信息","success")},doError2:function(){this.$Toast("这是一条错误信息","error")}}},n={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("yt-page",{attrs:{title:"Toast组件"}},[e("yt-card",{attrs:{title:"import引入调用"}},[e("yt-btn",{on:{click:t.doTool}},[t._v("提醒")]),t._v(" "),e("yt-btn",{attrs:{theme:"green"},on:{click:t.doSuccess}},[t._v("成功")]),t._v(" "),e("yt-btn",{attrs:{theme:"red"},on:{click:t.doError}},[t._v("错误")])],1),t._v(" "),e("yt-card",{attrs:{title:"this调用"}},[e("yt-btn",{on:{click:t.doTool2}},[t._v("提醒")]),t._v(" "),e("yt-btn",{attrs:{theme:"green"},on:{click:t.doSuccess2}},[t._v("成功")]),t._v(" "),e("yt-btn",{attrs:{theme:"red"},on:{click:t.doError2}},[t._v("错误")])],1)],1)},staticRenderFns:[]};var s=e("VU/8")(r,n,!1,function(t){e("NK31")},"data-v-6d2e9c87",null);o.default=s.exports},NK31:function(t,o){}});