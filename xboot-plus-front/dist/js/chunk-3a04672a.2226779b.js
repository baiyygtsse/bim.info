(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a04672a"],{5231:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"c",(function(){return n})),t.d(a,"b",(function(){return s}));const l=[{title:"事件名",key:"name",width:150},{title:"说明",key:"type",width:300},{title:"返回值",key:"value"}],n=[{title:"属性",key:"name",width:135},{title:"说明",key:"desc"},{title:"类型",key:"type",width:130},{title:"默认值",key:"value"}],s=[{title:"方法名",key:"name",width:150},{title:"说明",key:"type",width:300},{title:"参数",key:"value"}]},a825:function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e._self._c;return a("div",[a("Divider",{staticClass:"component-blue",attrs:{orientation:"left"}},[e._v("wangEditor 富文本编辑器")]),a("Alert",{attrs:{type:"info","show-icon":""}},[e._v(" 基于 "),a("a",{attrs:{href:"http://www.wangeditor.com",target:"_blank"}},[e._v("wangEditor v4")]),e._v(" 封装，已配置好图片上传(上传至XBoot文件服务或Base64)、视频上传；扩展编辑HTML代码、清空、XSS攻击过滤等。 ")]),a("Tabs",{model:{value:e.tabName,callback:function(a){e.tabName=a},expression:"tabName"}},[a("TabPane",{attrs:{label:"素材中心上传",name:"material"}}),a("TabPane",{attrs:{label:"直接上传",name:"direct"}})],1),a("editor",{directives:[{name:"show",rawName:"v-show",value:"material"==e.tabName,expression:"tabName=='material'"}],attrs:{id:"editor-material",material:""},model:{value:e.editorData,callback:function(a){e.editorData=a},expression:"editorData"}}),a("editor",{directives:[{name:"show",rawName:"v-show",value:"direct"==e.tabName,expression:"tabName=='direct'"}],attrs:{id:"editor-direct"}}),a("h3",{staticClass:"component-article"},[e._v("基础用法")]),e._v(" 使用 "),a("code",[e._v("v-model")]),e._v(" 实现数据的双向绑定，赋值时外层需包含一个HTML标签（编辑HTML代码时同需注意）。单页面同时使用两个及以上该组件时，需设定不同的id值加以区分。 "),a("h3",{staticClass:"component-article"},[e._v("props")]),a("Table",{attrs:{columns:e.props,data:e.data1,border:"",size:"small",width:"1000"}}),a("h3",{staticClass:"component-article"},[e._v("events")]),a("Table",{attrs:{columns:e.events,data:e.data2,border:"",size:"small",width:"1000"}}),a("h3",{staticClass:"component-article"},[e._v("methods")]),a("Table",{attrs:{columns:e.methods,data:e.data3,border:"",size:"small",width:"1000"}})],1)},n=[],s=t("5231"),o=t("ee24"),i={components:{editor:o["default"]},data(){return{tabName:"material",props:s["c"],events:s["a"],methods:s["b"],editorData:'<p><img src="http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a1/2018new_doge02_org.png" alt="[doge]"></p>',data1:[{name:"value",desc:"绑定的值，可使用 v-model 双向绑定（赋值时外层需包含一个HTML标签）",type:"String",value:"空"},{name:"id",desc:"富文本编辑器的id值，用于绑定富文本编辑器，当同时使用两个及以上该组件时，需设定不同的id值加以区分",type:"String",value:"editor"},{name:"height",desc:"编辑器的高度层级，默认为300，单位px",type:"Number | String",value:"300"},{name:"placeholder",desc:"占位文本",type:"String",value:"在这里输入内容"},{name:"material",desc:"是否启用素材中心上传图片、视频",type:"Boolean",value:"false"},{name:"maxSize",desc:"启用素材中心时，单个上传文件最大限制大小（单位Mb）",type:"Number",value:"5"},{name:"uploadPic",desc:"是否开启上传图片功能",type:"Boolean",value:"true"},{name:"base64",desc:"是否使用base64存储图片，默认false上传至XBoot配置的文件存储服务中，不推荐使用base64存储",type:"Boolean",value:"false"},{name:"uploadVideo",desc:"是否开启上传视频功能",type:"Boolean",value:"true"},{name:"expandHtml",desc:"是否显示顶部扩展 编辑Html代码 按钮",type:"Boolean",value:"true"},{name:"expandClear",desc:"是否显示顶部扩展 清空 按钮",type:"Boolean",value:"true"},{name:"showFullScreen",desc:"是否显示 全屏 按钮",type:"Boolean",value:"true"},{name:"openXss",desc:"是否打开XSS过滤，无需过滤的标签请自行在组件中添加白名单 https://github.com/leizongmin/js-xss",type:"Boolean",value:"false"},{name:"zIndex",desc:"编辑器的z-index层级，默认为1",type:"Number",value:"1"},{name:"uploadImgTimeout",desc:"图片上传超时时间，单位毫秒，默认为10秒",type:"Number",value:"10000"},{name:"uploadVideoTimeout",desc:"视频上传超时时间，单位毫秒，默认为5分钟",type:"Number",value:"300000"}],data2:[{name:"on-change",type:"返回富文本编辑器内容",value:"value（富文本编辑器内容）"}],data3:[{name:"setData",type:"设置富文本编辑器内容（外层需包含一个HTML标签）",value:"你要传入的内容，示例 setData(‘<p>data</p>’)"}]}},methods:{},mounted(){}},d=i,r=t("2877"),m=Object(r["a"])(d,l,n,!1,null,null,null);a["default"]=m.exports}}]);