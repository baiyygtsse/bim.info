(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3baf23d2","chunk-2d21802a"],{5231:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return s}));const n=[{title:"事件名",key:"name",width:150},{title:"说明",key:"type",width:300},{title:"返回值",key:"value"}],l=[{title:"属性",key:"name",width:135},{title:"说明",key:"desc"},{title:"类型",key:"type",width:130},{title:"默认值",key:"value"}],s=[{title:"方法名",key:"name",width:150},{title:"说明",key:"type",width:300},{title:"参数",key:"value"}]},bbad:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",[t("Divider",{staticClass:"component-blue",attrs:{orientation:"left"}},[e._v("地图选点组件")]),t("Alert",{attrs:{type:"info","show-icon":""}},[e._v(" 基于 "),t("a",{attrs:{href:"https://docs.mapbox.com/mapbox-gl-js/api/",target:"_blank"}},[e._v("Mapbox GL JS")]),e._v(" 封装，已配置好中文、属性配置等。为何不选择国内地图产品？- 国内产品针对非公众项目时需进行商用授权： "),t("a",{attrs:{href:"https://developer.amap.com/upgrade#business",target:"_blank"}},[e._v("高德")]),e._v("、 "),t("a",{attrs:{href:"http://lbsyun.baidu.com/cashier/auth",target:"_blank"}},[e._v("百度")]),e._v("、 "),t("a",{attrs:{href:"https://lbs.qq.com/dev/console/authorization",target:"_blank"}},[e._v("腾讯")]),e._v("。 Mapbox按量付费，支持全球国际化地图，每月有一定"),t("a",{attrs:{href:"https://www.mapbox.com/pricing",target:"_blank"}},[e._v("免费额度")])]),t("mapLocate",{staticStyle:{width:"400px"},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}}),t("h3",{staticClass:"component-article"},[e._v("基础用法")]),e._v(" 基本用法，使用"),t("code",[e._v("v-model")]),e._v("实现数据的双向绑定。不同页面使用该组件时，需设定不同的id值加以区分。 "),t("h3",{staticClass:"component-article"},[e._v("props")]),t("Table",{attrs:{columns:e.props,data:e.data1,border:"",size:"small",width:"1000"}}),t("h3",{staticClass:"component-article"},[e._v("events")]),t("Table",{attrs:{columns:e.events,data:e.data2,border:"",size:"small",width:"1000"}})],1)},l=[],s=a("5231"),o=a("1c77"),c={components:{mapLocate:o["default"]},data(){return{data:"",props:s["c"],events:s["a"],methods:s["b"],data1:[{name:"value",desc:"绑定的值，可使用 v-model 双向绑定",type:"String",value:"空"},{name:"id",desc:"地图组件的id值，用于绑定地图，当同时使用两个及以上该组件时，需设定不同的id值加以区分",type:"String",value:"map"},{name:"showInput",desc:"是否显示输入框",type:"Boolean",value:"true"},{name:"preview",desc:"是否启用预览模式，设为true后不显示提交按钮，且无法更改点击地图坐标",type:"Boolean",value:"false"},{name:"width",desc:"默认地图选点弹框宽度，单位px",type:"Number",value:"900"},{name:"decimal",desc:"坐标精确的小数点位数（0~14位）",type:"Number",value:"6"},{name:"draggable",desc:"标记点是否支持拖拽",type:"Boolean",value:"true"},{name:"styles",desc:"地图默认样式，详见 https://docs.mapbox.com/mapbox-gl-js/api/map",type:"String",value:"mapbox://styles/mapbox/streets-v11"},{name:"center",desc:"地图默认中心点经纬度，默认经纬度坐标为北京",type:"Array",value:"[116.35, 39.85]"},{name:"zoom",desc:"地图默认缩放级别，0~24",type:"Number",value:"9"},{name:"pitch",desc:"地图的初始俯仰角（倾斜度），0-85度",type:"Number",value:"0"},{name:"compact",desc:"右下角版权信息是否仅显示图标，设为false后自适应界面大小显示",type:"Boolean",value:"true"},{name:"customAttribution",desc:"自定义额外的版权属性信息",type:"String",value:"空"},{name:"searchable",desc:"地图右上角是否显示搜索栏",type:"Boolean",value:"true"},{name:"changeStyle",desc:"地图右上角是否显示切换地图样式按钮",type:"Boolean",value:"true"},{name:"navigation",desc:"地图右上角是否显示缩放及罗盘导航",type:"Boolean",value:"true"},{name:"locate",desc:"地图右上角是否显示定位按钮",type:"Boolean",value:"true"},{name:"fullscreen",desc:"地图右上角是否显示全屏按钮",type:"Boolean",value:"false"},{name:"building3D",desc:"地图中建筑是否显示3D效果",type:"Boolean",value:"true"},{name:"clearable",desc:"输入框是否支持清空",type:"Boolean",value:"true"},{name:"type",desc:"按钮类型，可选值为 default、primary、dashed、text、info、success、warning、error或者不设置",type:"String",value:"default"},{name:"ghost",desc:"幽灵属性，使按钮背景透明",type:"Boolean",value:"false"},{name:"size",desc:"大小，可选值为large、small、default或者不设置",type:"String",value:"default"},{name:"shape",desc:"按钮形状，可选值为circle或者不设置",type:"String",value:"-"},{name:"placeholder",desc:"占位文本",type:"String",value:"输入坐标或选择地点"},{name:"disabled",desc:"设置输入框和选择按钮为禁用状态",type:"Boolean",value:"false"},{name:"readonly",desc:"设置输入框为只读",type:"Boolean",value:"false"},{name:"maxlength",desc:"设置输入框最大输入长度",type:"Number",value:"-"},{name:"text",desc:"选择按钮文字",type:"Number",value:"地图选点"},{name:"icon",desc:"设置选择按钮图标",type:"String",value:"md-locate"}],data2:[{name:"on-change",type:"返回用户在输入框输入编辑或选点后提交的经纬度坐标",value:"value"},{name:"on-click",type:"返回用户在点击后的经纬度坐标",value:"value"}]}},methods:{},mounted(){}},r=c,u=a("2877"),d=Object(u["a"])(r,n,l,!1,null,null,null);t["default"]=d.exports},c8ba:function(e,t){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(n){"object"===typeof window&&(a=window)}e.exports=a}}]);