(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6af3b6f4","chunk-f619604c","chunk-2d237c65","chunk-2d21802a"],{"11c9":function(t,e,a){},"21a6":function(t,e,a){(function(a){var o,s,i;(function(a,l){s=[],o=l,i="function"===typeof o?o.apply(e,s):o,void 0===i||(t.exports=i)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function o(t,e,a){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){r(o.response,e,a)},o.onerror=function(){console.error("could not download file")},o.send()}function s(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function i(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(o){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var l="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a&&a.global===a?a:void 0,n=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),r=l.saveAs||("object"!=typeof window||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!n?function(t,e,a){var n=l.URL||l.webkitURL,r=document.createElement("a");e=e||t.name||"download",r.download=e,r.rel="noopener","string"==typeof t?(r.href=t,r.origin===location.origin?i(r):s(r.href)?o(t,e,a):i(r,r.target="_blank")):(r.href=n.createObjectURL(t),setTimeout((function(){n.revokeObjectURL(r.href)}),4e4),setTimeout((function(){i(r)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,a,l){if(a=a||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,l),a);else if(s(t))o(t,a,l);else{var n=document.createElement("a");n.href=t,n.target="_blank",setTimeout((function(){i(n)}))}}:function(t,e,a,s){if(s=s||open("","_blank"),s&&(s.document.title=s.document.body.innerText="downloading..."),"string"==typeof t)return o(t,e,a);var i="application/octet-stream"===t.type,r=/constructor/i.test(l.HTMLElement)||l.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||i&&r||n)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var t=d.result;t=c?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=t:location=t,s=null},d.readAsDataURL(t)}else{var u=l.URL||l.webkitURL,h=u.createObjectURL(t);s?s.location=h:location.href=h,s=null,setTimeout((function(){u.revokeObjectURL(h)}),4e4)}});l.saveAs=r.saveAs=r,t.exports=r}))}).call(this,a("c8ba"))},"2f49":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{position:"relative"},attrs:{id:t.id+"-monaco-editor-content"}},[t.showHeader?e("div",{class:{"header-dark":t.themeDark,"monaco-header":!0}},[e("div",{class:{"title-dark":t.themeDark,title:!0}},[t._v(" "+t._s(t.showTitle?t.title:"")+" ")]),e("div",{staticClass:"icons"},[t.showUndo?e("div",{class:{"btn-dark":t.themeDark,btn:!0},on:{click:t.undo}},[e("Icon",{staticClass:"icon",attrs:{type:"ios-undo"}}),t._v(" 撤销 ")],1):t._e(),t.showRedo?e("div",{class:{"btn-dark":t.themeDark,btn:!0},on:{click:t.redo}},[e("Icon",{staticClass:"icon l",attrs:{type:"ios-redo"}}),t._v(" 恢复 ")],1):t._e(),t.showCopy?e("div",{class:{"btn-dark":t.themeDark,btn:!0},on:{click:t.copy}},[e("Icon",{staticClass:"icon l",attrs:{type:"md-copy"}}),t._v(" 复制 ")],1):t._e(),t.showDownload?e("div",{class:{"btn-dark":t.themeDark,btn:!0},on:{click:t.download}},[e("Icon",{staticClass:"icon l",attrs:{type:"md-download"}}),t._v(" 下载 ")],1):t._e(),t.showFormat?e("div",{class:{"btn-dark":t.themeDark,btn:!0},on:{click:t.format}},[e("Icon",{staticClass:"icon l",attrs:{type:"md-color-palette"}}),t._v(" 美化排版 ")],1):t._e(),t.showSearch?e("div",{class:{"btn-dark":t.themeDark,btn:!0},on:{click:t.find}},[e("Icon",{staticClass:"icon l",attrs:{type:"ios-search"}}),t._v(" 搜索 ")],1):t._e(),t.showFullscreen?e("div",{class:{"btn-dark":t.themeDark,"btn l":!0},on:{click:t.fullscreen}},[e("Icon",{staticClass:"icon",attrs:{type:t.openFull?"md-contract":"md-expand"}}),t._v(" "+t._s(t.openFull?"退出全屏":"全屏")+" ")],1):t._e(),t.showTheme?e("div",{class:{"btn-dark":t.themeDark,"btn l":!0},on:{click:t.changeTheme}},[e("Icon",{staticClass:"icon",attrs:{type:t.themeDark?"md-sunny":"md-moon"}}),t._v(" "+t._s(t.themeDark?"明亮主题":"暗黑主题")+" ")],1):t._e()])]):t._e(),e("div",{style:{overflow:"hidden",height:t.realHeight},attrs:{id:t.id}})])},s=[],i=a("21a6"),l=a.n(i),n={name:"monaco",props:{id:{type:String,default:"monaco"},height:{type:[Number,String],default:500},value:{type:String,default:""},language:String,lineNumbers:{type:String,default:"on"},readOnly:{type:Boolean,default:!1},cursorStyle:{type:String,default:"line"},fontSize:{type:Number,default:14},contextmenu:{type:Boolean,default:!0},defaultTheme:{type:String,default:"vs"},autoFormat:{type:Boolean,default:!1},showHeader:{type:Boolean,default:!0},title:{type:String},showTitle:{type:Boolean,default:!0},showUndo:{type:Boolean,default:!0},showRedo:{type:Boolean,default:!0},showCopy:{type:Boolean,default:!0},showDownload:{type:Boolean,default:!0},downloadSuffix:{type:String,default:".txt"},showFormat:{type:Boolean,default:!0},showSearch:{type:Boolean,default:!0},showFullscreen:{type:Boolean,default:!0},showTheme:{type:Boolean,default:!0}},data(){return{data:this.value,monacoEditor:null,themeDark:"vs-dark"==this.defaultTheme,theme:this.defaultTheme,realHeight:this.height+"px",openFull:!1}},methods:{init(){this.monacoEditor=monaco.editor.create(document.getElementById(this.id),{value:this.value,language:this.language,theme:this.theme,lineNumbers:this.lineNumbers,readOnly:this.readOnly,cursorStyle:this.cursorStyle,fontSize:this.fontSize,contextmenu:this.contextmenu,formatOnPaste:!0,formatOnType:!0}),this.autoFormat&&setTimeout(()=>{this.monacoEditor&&this.monacoEditor.getAction(["editor.action.formatDocument"])._run()},200),this.monacoEditor.onDidChangeModelContent(t=>{let e=this.monacoEditor.getValue();this.data=e,this.$emit("input",this.data),this.$emit("on-change",this.data)})},changeTheme(){this.themeDark=!this.themeDark;let t="vs";this.themeDark&&(t="vs-dark"),this.monacoEditor.updateOptions({theme:t})},setData(t){this.monacoEditor||this.init(),t!=this.data&&(this.data=t,this.monacoEditor.setValue(this.data),this.autoFormat&&this.monacoEditor.getAction(["editor.action.formatDocument"])._run(),this.$emit("input",this.data),this.$emit("on-change",this.data))},layout(){this.realHeight=this.height+"px",setTimeout(()=>{this.monacoEditor.layout()},10)},undo(){var t;null===(t=this.monacoEditor.getModel())||void 0===t||t.undo()},redo(){var t;null===(t=this.monacoEditor.getModel())||void 0===t||t.redo()},copy(){this.$copyText(this.data).then(t=>{this.$Message.success("复制成功")})},download(){var t=new Blob([this.data],{type:"text/plain;charset=utf-8"});let e=this.title;e||(e="文件"),e+=this.downloadSuffix,l.a.saveAs(t,e)},format(){this.monacoEditor.getAction(["editor.action.formatDocument"])._run()},find(){this.monacoEditor.getAction(["actions.find"])._run()},fullscreen(){let t=document.getElementById(this.id+"-monaco-editor-content");this.openFull=!this.openFull,this.openFull?(this.realHeight="100%",t.classList.add("editor-fullscreen"),setTimeout(()=>{this.monacoEditor.layout()},10)):(this.realHeight=this.height+"px",t.classList.remove("editor-fullscreen"),setTimeout(()=>{this.monacoEditor.layout()},10))}},beforeDestroy(){null!=this.monacoEditor&&this.monacoEditor.dispose()},watch:{value(t){this.setData(t)}},mounted(){this.$nextTick(()=>{this.init()})}},r=n,c=(a("ce20"),a("2877")),d=Object(c["a"])(r,o,s,!1,null,"3b145ebe",null);e["default"]=d.exports},"6c43":function(module,__webpack_exports__,__webpack_require__){"use strict";var _api_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("365c"),_views_my_components_xboot_custom_list__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("fd0a"),_views_my_components_xboot_monaco__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("2f49");__webpack_exports__["a"]={name:"table-generator",components:{customList:_views_my_components_xboot_custom_list__WEBPACK_IMPORTED_MODULE_1__["default"],monaco:_views_my_components_xboot_monaco__WEBPACK_IMPORTED_MODULE_2__["default"]},data(){return{entityHeight:400,fullEntityHeight:100,codeHeight:500,fullHeight:100,resultType:"drawerApi",tabName:"index.vue",modalStyle:{top:"30px"},entityModal:!1,fullEntity:!1,entityData:"",entityForm:{path:""},loading:!1,code:"",vueName:"",rowNum:"1",full:!1,codeModal:!1,modalVisible:!1,modalType:0,modalTitle:"",form:{sortOrder:0,field:"",name:"",dictType:"",customUrl:"",searchDictType:"",searchCustomUrl:"",level:"2",tableShow:!0,editable:!0,type:"text",searchType:"text",searchLevel:"2",validate:!0,searchable:!1,sortable:!1,defaultSort:!1,defaultSortType:"desc"},formValidate:{field:[{required:!0,message:"不能为空",trigger:"change"}],name:[{required:!0,message:"不能为空",trigger:"change"}]},entityFormValidate:{path:[{required:!0,message:"不能为空",trigger:"change"}]},columns:[{title:"排序",key:"sortOrder",sortType:"asc",sortable:!0,align:"center",minWidth:90},{title:"字段英文名",slot:"field",minWidth:150},{title:"字段中文名",slot:"name",minWidth:150},{title:"表格中显示",slot:"tableShow",align:"center",minWidth:110},{title:"可添加编辑",slot:"editable",align:"center",minWidth:110},{title:"表单类型",slot:"type",minWidth:200},{title:"是否必填",slot:"validate",align:"center",minWidth:100},{title:"可搜索",slot:"searchable",align:"center",minWidth:100},{title:"搜索框类型",slot:"searchType",minWidth:200},{title:"可排序",slot:"sortable",align:"center",minWidth:80},{title:"操作",slot:"action",align:"center",fixed:"right",width:120}],data:[],daterangeSearch:!1,result:{}}},methods:{init(){let data=this.getStore("tableData"),vueName=this.getStore("tableVueName"),rowNum=this.getStore("tableRowNum"),daterangeSearch=this.getStore("tableDaterangeSearch");data&&"undefined"!=data&&(this.data=JSON.parse(data)),vueName&&"undefined"!=vueName&&(this.vueName=vueName),rowNum&&"undefined"!=rowNum&&(this.rowNum=rowNum),daterangeSearch&&"undefined"!=daterangeSearch&&(this.daterangeSearch=eval(daterangeSearch))},changeEntityFull(){this.fullEntity=!this.fullEntity,this.fullEntity?this.entityHeight=this.fullEntityHeight:this.entityHeight=400,setTimeout(()=>{this.$refs.monacoEntity.layout()},10)},changeCodeFull(){this.full=!this.full,this.full?this.codeHeight=this.fullHeight:this.codeHeight=500,setTimeout(()=>{this.$refs.monaco.layout()},10)},generateEntityData(){this.$refs.entityForm.validate(t=>{t&&Object(_api_index__WEBPACK_IMPORTED_MODULE_0__["Cb"])({path:this.entityForm.path}).then(t=>{t.success&&(this.entityData=t.result,this.$Message.success("读取成功"))})})},submitEntityData(){if(this.entityData)try{let t=JSON.parse(this.entityData);this.data=t.data,this.entityModal=!1}catch(t){this.$Message.error("请确保JSON数据格式正确")}else this.$Message.warning("请先输入实体类引用路径生成JSON数据")},preview(){this.$router.push({name:"search-table"})},changeField(t,e){for(let s in t)null==t[s]&&(t[s]="");let a=JSON.stringify(t),o=JSON.parse(a);o.field=e.target.value,this.data.splice(t._index,1,o),this.save()},changeName(t,e){for(let s in t)null==t[s]&&(t[s]="");let a=JSON.stringify(t),o=JSON.parse(a);o.name=e.target.value,this.data.splice(t._index,1,o),this.save()},changeTableShow(t,e){for(let s in t)null==t[s]&&(t[s]="");let a=JSON.stringify(t),o=JSON.parse(a);o.tableShow=e,this.data.splice(t._index,1,o),this.save()},changeType(t,e){for(let s in t)null==t[s]&&(t[s]="");let a=JSON.stringify(t),o=JSON.parse(a);o.type=e,this.data.splice(t._index,1,o),this.save()},changeEditable(t,e){for(let s in t)null==t[s]&&(t[s]="");let a=JSON.stringify(t),o=JSON.parse(a);o.editable=e,this.data.splice(t._index,1,o),this.save()},changeValidate(t,e){for(let s in t)null==t[s]&&(t[s]="");let a=JSON.stringify(t),o=JSON.parse(a);o.validate=e,this.data.splice(t._index,1,o),this.save()},changeSearchable(t,e){for(let s in t)null==t[s]&&(t[s]="");let a=JSON.stringify(t),o=JSON.parse(a);o.searchable=e,this.data.splice(t._index,1,o),this.save()},changeSearchType(t,e){for(let s in t)null==t[s]&&(t[s]="");let a=JSON.stringify(t),o=JSON.parse(a);o.searchType=e,this.data.splice(t._index,1,o),this.daterangeSearch&&"daterange"!=e?this.daterangeSearch=!1:"daterange"==e&&(this.daterangeSearch=!0),this.save()},changeSortable(t,e){for(let s in t)null==t[s]&&(t[s]="");let a=JSON.stringify(t),o=JSON.parse(a);o.sortable=e,this.data.splice(t._index,1,o),this.save()},handleSubmit(){this.$refs.form.validate(t=>{if(t){let t=this.form;for(let o in t)null==t[o]&&(t[o]="");let e=JSON.stringify(t),a=JSON.parse(e);if(this.daterangeSearch&&"daterange"==a.searchType)return void this.$Message.warning("已设定了日期范围搜索的字段，日期范围搜索暂仅支持设定1个");0==this.modalType?(this.data.push(a),this.data=this.data):this.data.splice(t._index,1,a),"daterange"==a.searchType&&(this.daterangeSearch=!0),this.save(),this.modalVisible=!1}})},add(){this.modalType=0,this.modalTitle="添加字段",this.$refs.form.resetFields(),this.form.sortOrder=this.data.length+1,this.modalVisible=!0},edit(t){this.modalType=1,this.modalTitle="编辑字段";for(let o in t)null==t[o]&&(t[o]="");let e=JSON.stringify(t),a=JSON.parse(e);this.form=a,this.modalVisible=!0},remove(t){this.data.splice(t._index,1),this.save(),this.$Message.success("操作成功")},clear(){this.$Modal.confirm({title:"确认清空",content:"您确认要清空所有数据 ?",onOk:()=>{this.data=[],this.vueName="",this.rowNum="1",this.daterangeSearch=!1,this.save(),this.$Message.success("操作成功")}})},generate(){if(!this.vueName)return void this.$Message.warning("请输入组件名");let t=0;this.data.forEach(e=>{e.defaultSort&&t++}),t>1?this.$Message.warning("默认排序字段仅能设置一个，请勿设置多个"):(this.loading=!0,Object(_api_index__WEBPACK_IMPORTED_MODULE_0__["sb"])(this.vueName,this.rowNum,this.data).then(t=>{this.loading=!1,t.success&&(this.result=t.result,this.changeCode(),this.codeModal=!0,this.save())}))},changeRadio(){this.tabName="index.vue",this.changeCode()},changeCode(){"drawerApi"==this.resultType&&("index.vue"==this.tabName&&(this.code=this.result.drawerApi),"addEdit.vue"==this.tabName&&(this.code=this.result.addEditApi),"api.js"==this.tabName&&(this.code=this.result.api)),"drawer"==this.resultType&&("index.vue"==this.tabName&&(this.code=this.result.drawer),"addEdit.vue"==this.tabName&&(this.code=this.result.addEdit)),"componentApi"==this.resultType&&("index.vue"==this.tabName&&(this.code=this.result.componentApi),"add.vue"==this.tabName&&(this.code=this.result.addApi),"edit.vue"==this.tabName&&(this.code=this.result.editApi),"api.js"==this.tabName&&(this.code=this.result.api)),"component"==this.resultType&&("index.vue"==this.tabName&&(this.code=this.result.component),"add.vue"==this.tabName&&(this.code=this.result.add),"edit.vue"==this.tabName&&(this.code=this.result.edit)),"singleApi"==this.resultType&&("index.vue"==this.tabName&&(this.code=this.result.singleApi),"api.js"==this.tabName&&(this.code=this.result.api)),"single"==this.resultType&&(this.code=this.result.single)},save(){this.setStore("tableData",JSON.stringify(this.data)),this.setStore("tableVueName",this.vueName),this.setStore("tableRowNum",this.rowNum),this.setStore("tableDaterangeSearch",this.daterangeSearch)}},created(){this.init(),this.fullHeight=Number(document.body.clientHeight-218),this.fullEntityHeight=Number(document.body.clientHeight-288)}}},aa25:function(t,e,a){},aa53:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search"},[e("Card",[e("Row",{staticClass:"operation",attrs:{align:"middle"}},[e("span",[t._v("组件英文名：")]),e("Tooltip",{attrs:{content:"生成的请求api文件中将使用该组件名拼接，建议驼峰法命名",placement:"right",transfer:"","max-width":"250"}},[e("Input",{staticStyle:{width:"150px","margin-right":"10px"},attrs:{clearable:""},model:{value:t.vueName,callback:function(e){t.vueName=e},expression:"vueName"}})],1),e("span",[t._v("表单显示：")]),e("Select",{staticStyle:{width:"150px","margin-right":"10px"},attrs:{transfer:""},model:{value:t.rowNum,callback:function(e){t.rowNum=e},expression:"rowNum"}},[e("Option",{attrs:{value:"1"}},[t._v("一行一列")]),e("Option",{attrs:{value:"2"}},[t._v("一行两列")]),e("Option",{attrs:{value:"3"}},[t._v("一行三列")]),e("Option",{attrs:{value:"4"}},[t._v("一行四列")])],1),e("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加字段")]),e("Button",{attrs:{type:"warning",icon:"ios-construct"},on:{click:function(e){t.entityModal=!0}}},[t._v("读取字段")]),e("Button",{attrs:{loading:t.loading,type:"success",icon:"md-send"},on:{click:t.generate}},[t._v("生成代码")]),e("Button",{attrs:{icon:"md-trash"},on:{click:t.clear}},[t._v("清空全部")])],1),e("Alert",{attrs:{"show-icon":""}},[t._v(" 将生成的代码复制粘贴至XBoot前端新建的空白组件中，再做少许修改并自行调通接口即可 "),e("span",{staticClass:"preview",on:{click:t.preview}},[t._v("增删改表格预览")])]),e("Table",{ref:"table",attrs:{border:"",columns:t.columns,data:t.data},scopedSlots:t._u([{key:"field",fn:function({row:a}){return[e("Input",{on:{"on-blur":function(e){return t.changeField(a,e)}},model:{value:a.field,callback:function(e){t.$set(a,"field",e)},expression:"row.field"}})]}},{key:"name",fn:function({row:a}){return[e("Input",{on:{"on-blur":function(e){return t.changeName(a,e)}},model:{value:a.name,callback:function(e){t.$set(a,"name",e)},expression:"row.name"}})]}},{key:"tableShow",fn:function({row:a}){return[e("i-switch",{on:{"on-change":function(e){return t.changeTableShow(a,e)}},model:{value:a.tableShow,callback:function(e){t.$set(a,"tableShow",e)},expression:"row.tableShow"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])]}},{key:"editable",fn:function({row:a}){return[e("i-switch",{on:{"on-change":function(e){return t.changeEditable(a,e)}},model:{value:a.editable,callback:function(e){t.$set(a,"editable",e)},expression:"row.editable"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])]}},{key:"type",fn:function({row:a}){return[e("Select",{attrs:{disabled:!a.editable,transfer:""},on:{"on-change":function(e){return t.changeType(a,e)}},model:{value:a.type,callback:function(e){t.$set(a,"type",e)},expression:"row.type"}},[e("Option",{attrs:{value:"text"}},[t._v("文本输入框")]),e("Option",{attrs:{value:"textarea"}},[t._v("多行文本输入框")]),e("Option",{attrs:{value:"select"}},[t._v("选择下拉框")]),e("Option",{attrs:{value:"number"}},[t._v("数字输入框")]),e("Option",{attrs:{value:"dict"}},[t._v("数据字典选择组件")]),e("Option",{attrs:{value:"customList"}},[t._v("自定义列表选择组件")]),e("Option",{attrs:{value:"date"}},[t._v("日期选择器")]),e("Option",{attrs:{value:"datetime"}},[t._v("日期时间选择器")]),e("Option",{attrs:{value:"daterange"}},[t._v("日期范围选择器")]),e("Option",{attrs:{value:"upload"}},[t._v("图片上传输入组件")]),e("Option",{attrs:{value:"uploadThumb"}},[t._v("图片上传缩略图组件")]),e("Option",{attrs:{value:"fileUpload"}},[t._v("文件上传/下载组件")]),e("Option",{attrs:{value:"switch"}},[t._v("Switch开关")]),e("Option",{attrs:{value:"radio"}},[t._v("Radio单选框")]),e("Option",{attrs:{value:"time"}},[t._v("时间选择器")]),e("Option",{attrs:{value:"area"}},[t._v("省市县级联")]),e("Option",{attrs:{value:"slider"}},[t._v("Slider滑块")]),e("Option",{attrs:{value:"editor"}},[t._v("富文本组件wangEditor")]),e("Option",{attrs:{value:"password"}},[t._v("密码强度提示输入框")])],1)]}},{key:"validate",fn:function({row:a}){return[e("i-switch",{attrs:{disabled:!a.editable},on:{"on-change":function(e){return t.changeValidate(a,e)}},model:{value:a.validate,callback:function(e){t.$set(a,"validate",e)},expression:"row.validate"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("是")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("否")])])]}},{key:"searchable",fn:function({row:a}){return[e("i-switch",{on:{"on-change":function(e){return t.changeSearchable(a,e)}},model:{value:a.searchable,callback:function(e){t.$set(a,"searchable",e)},expression:"row.searchable"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])]}},{key:"searchType",fn:function({row:a}){return[e("Select",{attrs:{disabled:!a.searchable,transfer:""},on:{"on-change":function(e){return t.changeSearchType(a,e)}},model:{value:a.searchType,callback:function(e){t.$set(a,"searchType",e)},expression:"row.searchType"}},[e("Option",{attrs:{value:"text"}},[t._v("文本输入框")]),e("Option",{attrs:{value:"select"}},[t._v("选择下拉框")]),e("Option",{attrs:{value:"dict"}},[t._v("数据字典选择组件")]),e("Option",{attrs:{value:"customList"}},[t._v("自定义列表选择组件")]),e("Option",{attrs:{value:"daterange",disabled:t.daterangeSearch}},[t._v("日期范围选择器")]),e("Option",{attrs:{value:"date"}},[t._v("日期选择器")]),e("Option",{attrs:{value:"area"}},[t._v("省市县级联")])],1)]}},{key:"sortable",fn:function({row:a}){return[e("i-switch",{on:{"on-change":function(e){return t.changeSortable(a,e)}},model:{value:a.sortable,callback:function(e){t.$set(a,"sortable",e)},expression:"row.sortable"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])]}},{key:"action",fn:function({row:a}){return[e("a",{on:{click:function(e){return t.edit(a)}}},[t._v("编辑")]),e("Divider",{attrs:{type:"vertical"}}),e("a",{on:{click:function(e){return t.remove(a)}}},[t._v("删除")])]}}])})],1),e("Modal",{attrs:{title:t.modalTitle,"mask-closable":!1,width:750},model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[e("Form",{ref:"form",attrs:{model:t.form,"label-width":100,rules:t.formValidate,inline:""}},[e("FormItem",{attrs:{label:"字段英文名",prop:"field"}},[e("Tooltip",{attrs:{placement:"right",content:"与后端实体字段匹配"}},[e("Input",{staticStyle:{width:"245px"},model:{value:t.form.field,callback:function(e){t.$set(t.form,"field",e)},expression:"form.field"}})],1)],1),e("FormItem",{attrs:{label:"字段中文名",prop:"name"}},[e("Input",{staticStyle:{width:"245px"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("FormItem",{staticStyle:{width:"345px"},attrs:{label:"表格中显示",prop:"tableShow"}},[e("i-switch",{model:{value:t.form.tableShow,callback:function(e){t.$set(t.form,"tableShow",e)},expression:"form.tableShow"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),e("FormItem",{staticStyle:{width:"345px"},attrs:{label:"可添加编辑",prop:"editable"}},[e("i-switch",{model:{value:t.form.editable,callback:function(e){t.$set(t.form,"editable",e)},expression:"form.editable"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),e("FormItem",{directives:[{name:"show",rawName:"v-show",value:t.form.editable,expression:"form.editable"}],attrs:{label:"字段表单类型",prop:"type"}},[e("Select",{staticStyle:{width:"245px"},attrs:{filterable:"",transfer:""},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[e("Option",{attrs:{value:"text"}},[t._v("文本输入框")]),e("Option",{attrs:{value:"textarea"}},[t._v("多行文本输入框")]),e("Option",{attrs:{value:"select"}},[t._v("选择下拉框")]),e("Option",{attrs:{value:"number"}},[t._v("数字输入框")]),e("Option",{attrs:{value:"dict"}},[t._v("数据字典选择组件")]),e("Option",{attrs:{value:"customList"}},[t._v("自定义列表选择组件")]),e("Option",{attrs:{value:"date"}},[t._v("日期选择器")]),e("Option",{attrs:{value:"datetime"}},[t._v("日期时间选择器")]),e("Option",{attrs:{value:"daterange"}},[t._v("日期范围选择器")]),e("Option",{attrs:{value:"upload"}},[t._v("图片上传输入组件")]),e("Option",{attrs:{value:"uploadThumb"}},[t._v("图片上传缩略图组件")]),e("Option",{attrs:{value:"fileUpload"}},[t._v("文件上传/下载组件")]),e("Option",{attrs:{value:"switch"}},[t._v("Switch开关")]),e("Option",{attrs:{value:"radio"}},[t._v("Radio单选框")]),e("Option",{attrs:{value:"time"}},[t._v("时间选择器")]),e("Option",{attrs:{value:"area"}},[t._v("省市县级联")]),e("Option",{attrs:{value:"slider"}},[t._v("Slider滑块")]),e("Option",{attrs:{value:"editor"}},[t._v("富文本组件wangEditor")]),e("Option",{attrs:{value:"password"}},[t._v("密码强度提示输入框")])],1)],1),e("FormItem",{directives:[{name:"show",rawName:"v-show",value:"dict"==t.form.type,expression:"form.type == 'dict'"}],attrs:{label:"字典类型",prop:"dictType"}},[e("customList",{staticStyle:{width:"245px"},attrs:{filterable:"",url:"/dict/getAll",valueBind:"type",description:"type"},model:{value:t.form.dictType,callback:function(e){t.$set(t.form,"dictType",e)},expression:"form.dictType"}})],1),e("FormItem",{directives:[{name:"show",rawName:"v-show",value:"customList"==t.form.type,expression:"form.type == 'customList'"}],attrs:{label:"自定义URL",prop:"customUrl"}},[e("Input",{staticStyle:{width:"245px"},attrs:{placeholder:"输入自定义选择组件url属性"},model:{value:t.form.customUrl,callback:function(e){t.$set(t.form,"customUrl",e)},expression:"form.customUrl"}})],1),e("FormItem",{directives:[{name:"show",rawName:"v-show",value:"area"==t.form.type,expression:"form.type == 'area'"}],attrs:{label:"显示级别",prop:"level"}},[e("Select",{staticStyle:{width:"245px"},attrs:{transfer:""},model:{value:t.form.level,callback:function(e){t.$set(t.form,"level",e)},expression:"form.level"}},[e("Option",{attrs:{value:"0"}},[t._v("仅显示省")]),e("Option",{attrs:{value:"1"}},[t._v("显示省和县")]),e("Option",{attrs:{value:"2"}},[t._v("显示省市县")])],1)],1),e("FormItem",{directives:[{name:"show",rawName:"v-show",value:t.form.editable,expression:"form.editable"}],staticStyle:{width:"345px"},attrs:{label:"是否必填",prop:"validate"}},[e("i-switch",{model:{value:t.form.validate,callback:function(e){t.$set(t.form,"validate",e)},expression:"form.validate"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("是")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("否")])])],1),e("FormItem",{staticStyle:{width:"345px"},attrs:{label:"可搜索",prop:"searchable"}},[e("i-switch",{model:{value:t.form.searchable,callback:function(e){t.$set(t.form,"searchable",e)},expression:"form.searchable"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),e("FormItem",{directives:[{name:"show",rawName:"v-show",value:t.form.searchable,expression:"form.searchable"}],attrs:{label:"搜索框类型",prop:"searchType"}},[e("Select",{staticStyle:{width:"245px"},attrs:{transfer:""},model:{value:t.form.searchType,callback:function(e){t.$set(t.form,"searchType",e)},expression:"form.searchType"}},[e("Option",{attrs:{value:"text"}},[t._v("文本输入框")]),e("Option",{attrs:{value:"select"}},[t._v("选择下拉框")]),e("Option",{attrs:{value:"dict"}},[t._v("数据字典选择组件")]),e("Option",{attrs:{value:"customList"}},[t._v("自定义列表选择组件")]),e("Option",{attrs:{value:"daterange"}},[t._v("日期范围选择器")]),e("Option",{attrs:{value:"date"}},[t._v("日期选择器")]),e("Option",{attrs:{value:"area"}},[t._v("省市县级联")])],1)],1),e("FormItem",{directives:[{name:"show",rawName:"v-show",value:"dict"==t.form.searchType,expression:"form.searchType == 'dict'"}],attrs:{label:"字典类型",prop:"searchDictType"}},[e("customList",{staticStyle:{width:"245px"},attrs:{filterable:"",url:"/dict/getAll",valueBind:"type",description:"type"},model:{value:t.form.searchDictType,callback:function(e){t.$set(t.form,"searchDictType",e)},expression:"form.searchDictType"}})],1),e("FormItem",{directives:[{name:"show",rawName:"v-show",value:"customList"==t.form.searchType,expression:"form.searchType == 'customList'"}],attrs:{label:"自定义URL",prop:"searchCustomUrl"}},[e("Input",{staticStyle:{width:"245px"},attrs:{placeholder:"输入自定义选择组件url属性"},model:{value:t.form.searchCustomUrl,callback:function(e){t.$set(t.form,"searchCustomUrl",e)},expression:"form.searchCustomUrl"}})],1),e("FormItem",{directives:[{name:"show",rawName:"v-show",value:"area"==t.form.searchType,expression:"form.searchType == 'area'"}],attrs:{label:"显示级别",prop:"searchLevel"}},[e("Select",{staticStyle:{width:"245px"},attrs:{transfer:""},model:{value:t.form.searchLevel,callback:function(e){t.$set(t.form,"searchLevel",e)},expression:"form.searchLevel"}},[e("Option",{attrs:{value:"0"}},[t._v("仅显示省")]),e("Option",{attrs:{value:"1"}},[t._v("显示省和县")]),e("Option",{attrs:{value:"2"}},[t._v("显示省市县")])],1)],1),e("FormItem",{staticStyle:{width:"345px"},attrs:{label:"可排序",prop:"sortable"}},[e("i-switch",{model:{value:t.form.sortable,callback:function(e){t.$set(t.form,"sortable",e)},expression:"form.sortable"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),e("FormItem",{directives:[{name:"show",rawName:"v-show",value:t.form.sortable,expression:"form.sortable"}],staticStyle:{width:"345px"},attrs:{label:"默认排序",prop:"defaultSort"}},[e("i-switch",{model:{value:t.form.defaultSort,callback:function(e){t.$set(t.form,"defaultSort",e)},expression:"form.defaultSort"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1),e("FormItem",{directives:[{name:"show",rawName:"v-show",value:t.form.defaultSort&&t.form.sortable,expression:"form.defaultSort && form.sortable"}],attrs:{label:"默认排序方式",prop:"defaultSortType"}},[e("Select",{staticStyle:{width:"245px"},attrs:{transfer:""},model:{value:t.form.defaultSortType,callback:function(e){t.$set(t.form,"defaultSortType",e)},expression:"form.defaultSortType"}},[e("Option",{attrs:{value:"desc"}},[t._v("倒序(大到小)")]),e("Option",{attrs:{value:"asc"}},[t._v("正序(小到大)")])],1)],1),e("FormItem",{staticStyle:{width:"345px"},attrs:{label:"排序值",prop:"sortOrder"}},[e("InputNumber",{model:{value:t.form.sortOrder,callback:function(e){t.$set(t.form,"sortOrder",e)},expression:"form.sortOrder"}})],1)],1),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"text"},on:{click:function(e){t.modalVisible=!1}}},[t._v("取消")]),e("Button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("提交")])],1)],1),e("Modal",{attrs:{width:1e3,fullscreen:t.full,styles:t.full?{}:t.modalStyle,"footer-hide":""},model:{value:t.codeModal,callback:function(e){t.codeModal=e},expression:"codeModal"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"ivu-modal-header-inner"},[t._v("生成代码")]),e("a",{staticClass:"modal-fullscreen",on:{click:t.changeCodeFull}},[e("Icon",{directives:[{name:"show",rawName:"v-show",value:!t.full,expression:"!full"}],staticClass:"model-fullscreen-icon",attrs:{type:"ios-expand"}}),e("Icon",{directives:[{name:"show",rawName:"v-show",value:t.full,expression:"full"}],staticClass:"model-fullscreen-icon",attrs:{type:"ios-contract"}})],1),e("a",{staticClass:"ivu-modal-close",on:{click:function(e){t.codeModal=!1}}},[e("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close"}})],1)]),e("RadioGroup",{staticStyle:{"margin-bottom":"15px"},on:{"on-change":t.changeRadio},model:{value:t.resultType,callback:function(e){t.resultType=e},expression:"resultType"}},[e("Radio",{attrs:{label:"drawerApi",border:""}},[t._v("抽屉组件(API)")]),e("Radio",{attrs:{label:"drawer",border:""}},[t._v("抽屉组件(模拟请求)")]),e("Radio",{attrs:{label:"singleApi",border:""}},[t._v("弹框(API)")]),e("Radio",{attrs:{label:"single",border:""}},[t._v("弹框(模拟请求)")]),e("Radio",{attrs:{label:"componentApi",border:""}},[t._v("动态组件(API)")]),e("Radio",{attrs:{label:"component",border:""}},[t._v("动态组件(模拟请求)")])],1),e("Tabs",{attrs:{type:"card"},on:{"on-click":t.changeCode},model:{value:t.tabName,callback:function(e){t.tabName=e},expression:"tabName"}},[e("TabPane",{attrs:{name:"index.vue",label:"index.vue"}}),"drawerApi"==t.resultType||"drawer"==t.resultType?e("TabPane",{attrs:{name:"addEdit.vue",label:"addEdit.vue"}}):t._e(),"componentApi"==t.resultType||"component"==t.resultType?e("TabPane",{attrs:{name:"add.vue",label:"add.vue"}}):t._e(),"componentApi"==t.resultType||"component"==t.resultType?e("TabPane",{attrs:{name:"edit.vue",label:"edit.vue"}}):t._e(),"drawerApi"==t.resultType||"componentApi"==t.resultType||"singleApi"==t.resultType?e("TabPane",{attrs:{name:"api.js",label:"api.js"}}):t._e()],1),t.codeModal?e("monaco",{ref:"monaco",attrs:{id:"monaco",title:t.tabName,language:"html",showTitle:!1,showUndo:!1,showRedo:!1,height:t.codeHeight},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}):t._e()],1),e("Modal",{attrs:{width:700,fullscreen:t.fullEntity},model:{value:t.entityModal,callback:function(e){t.entityModal=e},expression:"entityModal"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"ivu-modal-header-inner"},[t._v("自动读取字段")]),e("a",{staticClass:"modal-fullscreen",on:{click:t.changeEntityFull}},[e("Icon",{directives:[{name:"show",rawName:"v-show",value:!t.fullEntity,expression:"!fullEntity"}],staticClass:"model-fullscreen-icon",attrs:{type:"ios-expand"}}),e("Icon",{directives:[{name:"show",rawName:"v-show",value:t.fullEntity,expression:"fullEntity"}],staticClass:"model-fullscreen-icon",attrs:{type:"ios-contract"}})],1),e("a",{staticClass:"ivu-modal-close",on:{click:function(e){t.entityModal=!1}}},[e("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close"}})],1)]),e("Alert",{attrs:{"show-icon":""}},[t._v("输入实体类的引用路径，将自动读取其字段生成所需JSON配置数据，免去手动配置添加字段")]),e("Form",{ref:"entityForm",attrs:{model:t.entityForm,"label-width":130,rules:t.entityFormValidate}},[e("FormItem",{attrs:{label:"实体类引用路径",prop:"path"}},[e("Row",{attrs:{type:"flex"}},[e("Input",{staticStyle:{width:"410px"},attrs:{placeholder:"例如：cn.exrick.xboot.modules.base.entity.User",clearable:""},model:{value:t.entityForm.path,callback:function(e){t.$set(t.entityForm,"path",e)},expression:"entityForm.path"}}),e("Button",{staticStyle:{"margin-left":"18px"},attrs:{type:"warning",icon:"md-play"},on:{click:t.generateEntityData}},[t._v("读取字段")])],1)],1)],1),t.entityModal?e("monaco",{ref:"monacoEntity",attrs:{id:"monacoEntity",language:"json",showTitle:!1,showFormat:!1,showUndo:!1,showRedo:!1,height:t.entityHeight},model:{value:t.entityData,callback:function(e){t.entityData=e},expression:"entityData"}}):t._e(),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"primary",disabled:!t.entityForm.path},on:{click:t.submitEntityData}},[t._v("确认生成")])],1)],1)],1)},s=[],i=a("6c43"),l=i["a"],n=(a("e34f"),a("2877")),r=Object(n["a"])(l,o,s,!1,null,null,null);e["default"]=r.exports},c8ba:function(t,e){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(o){"object"===typeof window&&(a=window)}t.exports=a},ce20:function(t,e,a){"use strict";a("11c9")},e34f:function(t,e,a){"use strict";a("aa25")},fd0a:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",[t.description?t._e():e("Select",{attrs:{size:t.size,loading:t.loading,placeholder:t.placeholder,multiple:t.multiple,disabled:t.disabled,filterable:t.filterable,transfer:t.transfer,clearable:t.clearable,placement:t.placement,"not-found-text":t.notFoundText,"label-in-value":t.labelInValue,"transfer-class-name":t.transferClassName,prefix:t.prefix,"max-tag-count":t.maxTagCount,"max-tag-placeholder":t.maxTagPlaceholder},on:{"on-change":t.handleChange,"on-query-change":t.handleQueryChange,"on-clear":t.handleClear,"on-open-change":t.handleOpenChange,"on-select":t.handleSelect},model:{value:t.currentValue,callback:function(e){t.currentValue=e},expression:"currentValue"}},t._l(t.data,(function(a,o){return e("Option",{key:o,attrs:{value:a.value}},[t._v(t._s(a.title))])})),1),t.description?e("Select",{attrs:{size:t.size,loading:t.loading,placeholder:t.placeholder,multiple:t.multiple,disabled:t.disabled,filterable:t.filterable,transfer:t.transfer,clearable:t.clearable,placement:t.placement,"not-found-text":t.notFoundText,"label-in-value":t.labelInValue,"transfer-class-name":t.transferClassName,prefix:t.prefix,"max-tag-count":t.maxTagCount,"max-tag-placeholder":t.maxTagPlaceholder},on:{"on-change":t.handleChange,"on-query-change":t.handleQueryChange,"on-clear":t.handleClear,"on-open-change":t.handleOpenChange,"on-select":t.handleSelect},model:{value:t.currentValue,callback:function(e){t.currentValue=e},expression:"currentValue"}},t._l(t.data,(function(a,o){return e("Option",{key:o,attrs:{value:a.value,label:a.title}},[e("span",{staticStyle:{"margin-right":"10px"}},[t._v(t._s(a.title))]),e("span",{staticStyle:{color:"#ccc"}},[t._v(t._s(a.description))])])})),1):t._e()],1)},s=[],i=a("cebe"),l=a.n(i),n={name:"customList",props:{value:"",url:String,preUrl:{type:String,default:"/xboot"},method:{type:String,default:"get"},auth:{type:Boolean,default:!0},valueBind:{type:String,default:"id"},title:{type:String,default:"title"},description:{type:String,default:"description"},size:String,placeholder:{type:String,default:"请选择"},placement:{type:String,default:"bottom-start"},multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},transfer:{type:Boolean,default:!1},notFoundText:{type:String,default:"无匹配数据"},labelInValue:{type:Boolean,default:!1},transferClassName:String,prefix:String,maxTagCount:Number,maxTagPlaceholder:Function,clearable:{type:Boolean,default:!0}},data(){return{currentValue:this.value,data:[],loading:!1}},methods:{getData(t){this.loading=!0;let e="";this.auth&&(e=window.localStorage.getItem("accessToken"));let a=this.preUrl+this.url;l()({method:this.method,url:a,headers:{accessToken:e}}).then(t=>{this.loading=!1,t.success&&(this.valueBind&&t.result.forEach(t=>{t.value=t[this.valueBind]}),this.title&&t.result.forEach(t=>{t.title=t[this.title]}),this.description&&t.result.forEach(t=>{t.description=t[this.description]}),this.data=t.result)})},handleChange(t){this.$emit("input",t),this.$emit("on-change",t)},handleQueryChange(t){this.$emit("on-query-change",t)},handleClear(){this.$emit("on-clear","")},handleOpenChange(t){this.$emit("on-open-change",t)},handleSelect(t){this.$emit("on-select",t)},setCurrentValue(t){t!==this.currentValue&&(this.currentValue=t,this.$emit("on-change",this.currentValue))}},watch:{value(t){this.setCurrentValue(t)},url(t){this.getData(t)}},mounted(){this.getData(this.url)}},r=n,c=a("2877"),d=Object(c["a"])(r,o,s,!1,null,null,null);e["default"]=d.exports}}]);