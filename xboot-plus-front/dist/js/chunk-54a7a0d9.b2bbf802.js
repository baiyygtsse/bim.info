(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54a7a0d9"],{"432a":function(e,t,l){},"60fd":function(e,t,l){"use strict";l.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search"},[t("Card",[t("p",{attrs:{slot:"title"},slot:"title"},[e._v("Spring Boot 2.x Actuator监控列表")]),t("Table",{ref:"table",attrs:{border:"",columns:e.columns,data:e.data}})],1),t("Modal",{attrs:{"mask-closable":!1,width:900,fullscreen:e.full},model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("div",{staticClass:"ivu-modal-header-inner"},[e._v(e._s(e.modalTitle))]),t("a",{staticClass:"modal-fullscreen",on:{click:function(t){e.full=!e.full}}},[t("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.full,expression:"!full"}],staticClass:"model-fullscreen-icon",attrs:{type:"ios-expand"}}),t("Icon",{directives:[{name:"show",rawName:"v-show",value:e.full,expression:"full"}],staticClass:"model-fullscreen-icon",attrs:{type:"ios-contract"}})],1),t("a",{staticClass:"ivu-modal-close",on:{click:function(t){e.modalVisible=!1}}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close"}})],1)]),t("div",{staticStyle:{position:"relative"}},[e.full?e._e():t("div",{staticStyle:{"max-height":"60vh",overflow:"auto"}},[e.full?e._e():t("vue-json-pretty",{attrs:{data:e.jsonData,deep:e.deep,showLength:""}})],1),e.full?t("vue-json-pretty",{attrs:{data:e.jsonData,deep:e.deep,showLength:""}}):e._e(),e.loading?t("Spin",{attrs:{fix:""}}):e._e()],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[e._v(" 展开数据级数深度： "),t("InputNumber",{staticStyle:{"margin-right":"10px"},attrs:{min:0},on:{"on-change":e.changDeep},model:{value:e.myDeep,callback:function(t){e.myDeep=t},expression:"myDeep"}}),t("Button",{on:{click:function(t){e.modalVisible=!1}}},[e._v("关闭")])],1)])],1)},o=[],s=l("838b"),a=l.n(s),i=(l("b83f"),{name:"actuator",components:{VueJsonPretty:a.a},data(){return{loading:!1,modalTitle:"",modalVisible:!1,full:!1,deep:1/0,myDeep:null,jsonData:{},columns:[{type:"index",width:60,align:"center"},{title:"功能名称",key:"name",sortable:!0},{title:"URL",key:"url",sortable:!0},{title:"备注",key:"description"},{title:"操作",key:"action",width:200,align:"center",render:(e,t)=>!t.row.needPerm||this.$route.meta.permTypes&&this.$route.meta.permTypes.includes("view")?e("div",[e("Button",{props:{size:"small",icon:"md-eye"},style:{marginRight:"5px"},on:{click:()=>{this.showData(t.row)}}},"查看数据")]):e("div",[e("Button",{props:{size:"small",icon:"ios-close-circle-outline"},style:{marginRight:"5px"},on:{click:()=>{}}},"您无权查看")])}],data:[{name:"查看健康状态",url:"/health",needPerm:!1},{name:"查看应用信息",url:"/info",needPerm:!1},{name:"查看环境变量",url:"/env",needPerm:!0},{name:"查看metrics指标",url:"/metrics",needPerm:!1},{name:"查看@Scheduled定时计划任务",url:"/scheduledtasks",needPerm:!1},{name:"查看日志文件",url:"/logfile",description:"数据极多，最大10M，可能加载较慢甚至造成卡顿，网速不给力可能将加载超时",needPerm:!0},{name:"查看最近100个请求",url:"/httptrace",description:"数据较多，可能加载较慢甚至造成卡顿",needPerm:!0},{name:"查看线程栈",url:"/threaddump",description:"数据较多，可能加载较慢甚至造成卡顿",needPerm:!0},{name:"查看所有URL映射列表",url:"/mappings",description:"数据较多，可能加载较慢甚至造成卡顿",needPerm:!0},{name:"查看所有Spring Beans的完整列表",url:"/beans",description:"数据较多，可能加载较慢甚至造成卡顿",needPerm:!0},{name:"查看配置类和自动配置类状态",url:"/conditions",description:"包含被应用或未被应用的原因，数据较多，可能加载较慢",needPerm:!0},{name:"查看所有@ConfigurationProperties的属性集合列表",url:"/configprops",description:"数据较多，可能加载较慢甚至造成卡顿",needPerm:!0},{name:"查看日志配置",url:"/loggers",description:"数据较多，可能加载较慢甚至造成卡顿",needPerm:!0}]}},methods:{showData(e){this.deep=1/0,this.myDeep=null,this.modalVisible=!0,this.loading=!0,this.getRequest("/actuator"+e.url).then(e=>{this.loading=!1,this.jsonData=e}),this.modalTitle=e.name+" (搜索快捷键Ctrl+F)"},changDeep(e){this.deep=e}},mounted(){}}),r=i,c=(l("a6aa"),l("2877")),d=Object(c["a"])(r,n,o,!1,null,null,null);t["default"]=d.exports},"838b":function(e,t,l){!function(t,l){e.exports=l()}(0,(function(){return function(){"use strict";var e={102:function(e,t,l){function n(e,t,l,n,o,s,a,i){var r,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=l,c._compiled=!0),n&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),a?(r=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=r):o&&(r=i?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),r)if(c.functional){c._injectStyles=r;var d=c.render;c.render=function(e,t){return r.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,r):[r]}return{exports:e,options:c}}l.r(t),l.d(t,{default:function(){return d}});var o=n({props:{data:{required:!0,type:String},collapsedOnClickBrackets:Boolean},methods:{toggleBrackets(e){this.collapsedOnClickBrackets&&this.$emit("click",e)}}},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"vjs-tree__brackets",on:{click:function(t){return t.stopPropagation(),e.toggleBrackets(t)}}},[e._v(e._s(e.data))])}),[],!1,null,null,null).exports,s=n({props:{checked:{type:Boolean,default:!1},isMultiple:Boolean},data:()=>({focus:!1}),computed:{uiType(){return this.isMultiple?"checkbox":"radio"},model:{get(){return this.checked},set(e){this.$emit("input",e)}}}},(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("label",{class:["vjs-check-controller",e.checked?"is-checked":""],on:{click:function(e){e.stopPropagation()}}},[l("span",{class:"vjs-check-controller__inner is-"+e.uiType}),"checkbox"===e.uiType?l("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.model)?e._i(e.model,null)>-1:e.model},on:{change:[function(t){var l=e.model,n=t.target,o=!!n.checked;if(Array.isArray(l)){var s=e._i(l,null);n.checked?s<0&&(e.model=l.concat([null])):s>-1&&(e.model=l.slice(0,s).concat(l.slice(s+1)))}else e.model=o},function(t){return e.$emit("change",e.model)}],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}}):"radio"===e.uiType?l("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:"radio"},domProps:{checked:e._q(e.model,null)},on:{change:[function(t){e.model=null},function(t){return e.$emit("change",e.model)}],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}}):l("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:e.uiType},domProps:{value:e.model},on:{change:function(t){return e.$emit("change",e.model)},focus:function(t){e.focus=!0},blur:function(t){e.focus=!1},input:function(t){t.target.composing||(e.model=t.target.value)}}})])}),[],!1,null,null,null);function a(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function i(e,t="root",l=0,{key:n,index:o,type:s="content",showComma:r=!1,length:c=1}={}){const d=a(e);if("array"===d){const o=e.map((e,n,o)=>i(e,`${t}[${n}]`,l+1,{index:n,showComma:n!==o.length-1,length:c,type:s})).reduce((e,t)=>e.concat(t),[]);return[i("[",t,l,{key:n,length:e.length,type:"arrayStart"})[0]].concat(o,i("]",t,l,{showComma:r,length:e.length,type:"arrayEnd"})[0])}if("object"===d){const a=Object.keys(e),d=a.map((n,o,a)=>i(e[n],n.includes(".")?`${t}["${n}"]`:`${t}.${n}`,l+1,{key:n,showComma:o!==a.length-1,length:c,type:s})).reduce((e,t)=>e.concat(t),[]);return[i("{",t,l,{key:n,index:o,length:a.length,type:"objectStart"})[0]].concat(d,i("}",t,l,{showComma:r,length:a.length,type:"objectEnd"})[0])}const u=Object.entries({content:e,level:l,key:n,index:o,path:t,showComma:r,length:c,type:s}).reduce((e,[t,l])=>void 0!==l?{...e,[t]:l}:e,{});return"object"===a(u)?[u]:u}var r=n({components:{Brackets:o,CheckController:s.exports},props:{node:{required:!0,type:Object},collapsed:Boolean,collapsedOnClickBrackets:Boolean,showDoubleQuotes:Boolean,showLength:Boolean,checked:Boolean,selectableType:{type:String,default:""},showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},selectOnClickNode:{type:Boolean,default:!0},pathSelectable:{type:Function,default:()=>!0},highlightSelectedNode:{type:Boolean,default:!0},customValueFormatter:{type:Function,default:null}},computed:{valueClass(){return"vjs-value vjs-value__"+this.dataType},dataType(){return a(this.node.content)},prettyKey(){return this.showDoubleQuotes?`"${this.node.key}"`:this.node.key},selectable(){return this.pathSelectable(this.node.path,this.node.content)&&(this.isMultiple||this.isSingle)},isMultiple(){return"multiple"===this.selectableType},isSingle(){return"single"===this.selectableType}},methods:{defaultFormatter(e){let t=e+"";return"string"===this.dataType&&(t=`"${t}"`),t},valueFormatter(e){return this.customValueFormatter?this.customValueFormatter(e,this.node.key,this.node.path,this.defaultFormatter(e)):this.defaultFormatter(e)},onBracketsClick(){this.$emit("brackets-click",!this.collapsed,this.node.path)},onCheckedChange(){this.$emit("selected-change",this.node)},onTreeNodeClick(){this.$emit("tree-node-click",this.node),this.selectable&&this.selectOnClickNode&&this.$emit("selected-change",this.node)}}},(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{class:{"vjs-tree__node":!0,"has-selector":e.showSelectController,"is-highlight":e.highlightSelectedNode&&e.checked},on:{click:e.onTreeNodeClick}},[e.showSelectController&&e.selectable&&"objectEnd"!==e.node.type&&"arrayEnd"!==e.node.type?[l("check-controller",{attrs:{"is-multiple":e.isMultiple,checked:e.checked},on:{change:e.onCheckedChange}})]:e._e(),e._l(e.node.level,(function(t,n){return l("div",{key:n,class:{"vjs-tree__indent":!0,"has-line":e.showLine}})})),e.node.key?l("span",{staticClass:"vjs-key"},[e._v(e._s(e.prettyKey)+":")]):e._e(),l("span",["content"!==e.node.type?l("brackets",{attrs:{data:e.node.content,"collapsed-on-click-brackets":e.collapsedOnClickBrackets},on:{click:e.onBracketsClick}}):e.customValueFormatter?l("span",{class:e.valueClass,domProps:{innerHTML:e._s(e.valueFormatter(e.node.content))}}):l("span",{class:e.valueClass,domProps:{textContent:e._s(e.valueFormatter(e.node.content))}}),e.node.showComma?l("span",[e._v(",")]):e._e(),e.showLength&&e.collapsed?l("span",{staticClass:"vjs-comment"},[e._v(" // "+e._s(e.node.length)+" items ")]):e._e()],1)],2)}),[],!1,null,null,null),c=n({name:"VueJsonPretty",components:{TreeNode:r.exports},props:{data:{type:[String,Number,Boolean,Array,Object],default:null},deep:{type:Number,default:1/0},deepCollapseChildren:{type:Boolean,default:!1},path:{type:String,default:"root"},virtual:{type:Boolean,default:!1},itemHeight:{type:Number,default:20},showLength:{type:Boolean,default:!1},showDoubleQuotes:{type:Boolean,default:!0},selectableType:{type:String,default:""},showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},selectOnClickNode:{type:Boolean,default:!0},value:{type:[Array,String],default:()=>""},pathSelectable:{type:Function,default:()=>!0},highlightSelectedNode:{type:Boolean,default:!0},collapsedOnClickBrackets:{type:Boolean,default:!0},customValueFormatter:{type:Function,default:null},virtualLines:{type:Number,default:10}},data(){return{translateY:0,visibleData:null,hiddenPaths:i(this.data,this.path).reduce((e,t)=>{const l=this.deepCollapseChildren?t.level>=this.deep:t.level===this.deep;return"objectStart"!==t.type&&"arrayStart"!==t.type||!l?e:{...e,[t.path]:1}},{})}},computed:{flatData(){let e=null;return i(this.data,this.path).reduce((t,l,n)=>{const o={...l,id:n},s=this.hiddenPaths[o.path];if(e&&e.path===o.path){const l="objectStart"===e.type,n={...e,...o,content:l?"{...}":"[...]",type:l?"objectCollapsed":"arrayCollapsed"};return e=null,t.concat(n)}return s&&!e?(e=o,t):e?t:t.concat(o)},[])},selectedPaths:{get(){return this.value&&"single"===this.selectableType?[this.value]:this.value||[]},set(e){this.$emit("input",e)}},propsError(){return!this.selectableType||this.selectOnClickNode||this.showSelectController?"":"When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail."}},watch:{propsError:{handler(e){if(e)throw new Error("[VueJsonPretty] "+e)},immediate:!0},flatData:{handler(){this.onTreeScroll()},immediate:!0}},methods:{onTreeScroll(){if(this.virtual){const e=this.virtualLines,t=this.$refs.tree&&this.$refs.tree.scrollTop||0,l=Math.floor(t/this.itemHeight);let n=l<0?0:l+e>this.flatData.length?this.flatData.length-e:l;n<0&&(n=0);const o=n+e;this.translateY=n*this.itemHeight,this.visibleData=this.flatData.filter((e,t)=>t>=n&&t<o)}else this.visibleData=this.flatData},onSelectedChange({path:e}){const t=this.selectableType;if("multiple"===t){const t=this.selectedPaths.findIndex(t=>t===e),l=[...this.selectedPaths];-1!==t?this.selectedPaths.splice(t,1):this.selectedPaths.push(e),this.$emit("change",this.selectedPaths,l)}else if("single"===t&&this.selectedPaths!==e){const t=this.selectedPaths,l=e;this.selectedPaths=l,this.$emit("change",l,t)}},onTreeNodeClick({content:e,path:t}){this.$emit("click",t,e)},onBracketsClick(e,t){if(e)this.hiddenPaths={...this.hiddenPaths,[t]:1};else{const e={...this.hiddenPaths};delete e[t],this.hiddenPaths=e}}}},(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{ref:"tree",class:{"vjs-tree":!0,"is-virtual":e.virtual},on:{scroll:e.onTreeScroll}},[l("div",{style:e.virtual&&{height:e.flatData.length*e.itemHeight+"px"}},[l("div",{style:e.virtual&&{transform:"translateY("+e.translateY+"px)"}},e._l(e.visibleData,(function(t){return l("tree-node",{key:t.id,attrs:{node:t,collapsed:!!e.hiddenPaths[t.path],"custom-value-formatter":e.customValueFormatter,"show-double-quotes":e.showDoubleQuotes,"show-length":e.showLength,"collapsed-on-click-brackets":e.collapsedOnClickBrackets,checked:e.selectedPaths.includes(t.path),"selectable-type":e.selectableType,"show-line":e.showLine,"show-select-controller":e.showSelectController,"select-on-click-node":e.selectOnClickNode,"path-selectable":e.pathSelectable,"highlight-selected-node":e.highlightSelectedNode},on:{"tree-node-click":e.onTreeNodeClick,"brackets-click":e.onBracketsClick,"selected-change":e.onSelectedChange}})})),1)])])}),[],!1,null,null,null).exports,d=Object.assign({},c,{version:"1.8.3"})}},t={};function l(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,l),o.exports}return l.d=function(e,t){for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l(102)}()}))},a6aa:function(e,t,l){"use strict";l("432a")},b83f:function(e,t,l){}}]);