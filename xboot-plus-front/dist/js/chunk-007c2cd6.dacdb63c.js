(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-007c2cd6","chunk-660b82a7","chunk-2d0bd650"],{"0a21":function(e,t,a){"use strict";var s=a("5f5c"),i=a.n(s);function l(e,t){const a=t.map(e=>e.map(e=>null==e?{wch:10}:e.toString().charCodeAt(0)>255?{wch:2*e.toString().length}:{wch:e.toString().length}));let s=a[0];for(let i=1;i<a.length;i++)for(let e=0;e<a[i].length;e++)s[e]["wch"]<a[i][e]["wch"]&&(s[e]["wch"]=a[i][e]["wch"]);e["!cols"]=s}function o(e,t){return t.map(t=>e.map(e=>t[e]))}function r(e){const t=[],a=i.a.utils.decode_range(e["!ref"]);let s;const l=a.s.r;for(s=a.s.c;s<=a.e.c;++s){var o=e[i.a.utils.encode_cell({c:s,r:l})],r="UNKNOWN "+s;o&&o.t&&(r=i.a.utils.format_cell(o)),t.push(r)}return t}const n=(e,t)=>{const a=document.getElementById(e),s=i.a.utils.table_to_book(a);i.a.writeFile(s,t)},c=({data:e,key:t,title:a,filename:s,autoWidth:r})=>{const n=i.a.utils.book_new();e.unshift(a);const c=i.a.utils.json_to_sheet(e,{header:t,skipHeader:!0});if(r){const a=o(t,e);l(c,a)}i.a.utils.book_append_sheet(n,c,s),i.a.writeFile(n,s+".xlsx")},d=({key:e,data:t,title:a,filename:s,autoWidth:r})=>{const n=i.a.utils.book_new(),c=o(e,t);c.unshift(a);const d=i.a.utils.aoa_to_sheet(c);r&&l(d,c),i.a.utils.book_append_sheet(n,d,s),i.a.writeFile(n,s+".xlsx")},h=(e,t)=>{const a=i.a.read(e,{type:t}),s=a.SheetNames[0],l=a.Sheets[s],o=r(l),n=i.a.utils.sheet_to_json(l);return{header:o,results:n}};t["a"]={export_table_to_excel:n,export_array_to_excel:d,export_json_to_excel:c,read:h}},"240f":function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return i}));const s=[{title:"username",key:"username"},{title:"nickname",key:"nickname"},{title:"password",key:"password"},{title:"avatar",key:"avatar"},{title:"departmentId",key:"departmentId"},{title:"mobile",key:"mobile"},{title:"email",key:"email"},{title:"sex",key:"sex"},{title:"address",key:"address"},{title:"birth",key:"birth"},{title:"type",key:"type"},{title:"status",key:"status"},{title:"delFlag",key:"delFlag"},{title:"defaultRole",key:"defaultRole"}],i=[{username:"【记得删除该说明行】唯一用户名[不能为空]",nickname:"昵称/姓名[不能为空]",password:"密码[不能为空]",avatar:"头像图片链接",departmentId:"部门表主键id",email:"邮箱[不能为空]",mobile:"手机[不能为空]",sex:"性别",address:"地址数据省市名称 英文逗号,分隔",birth:"生日[yyyy-MM-dd]",type:"用户类型 0(普通用户) 1(管理员)",status:"用户状态 0(正常) -1(禁用)",delFlag:"删除标志 0(正常) 1(已删)",defaultRole:"角色 0(不分配默认角色) 1(分配默认注册用户角色)"},{username:"xboot",nickname:"exrick",password:"123456",avatar:"https://s1.ax1x.com/2018/05/19/CcdVQP.png",departmentId:"40652338142121984",email:"1012139570@qq.com",sex:"男",address:"北京市,市辖区,东城区",mobile:"18782059033",birth:"1997-12-02",type:0,status:0,delFlag:0,defaultRole:1}]},"2c8a":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",[t("Cascader",{attrs:{data:e.department,"load-data":e.loadData,"change-on-select":"",size:e.size,transfer:e.transfer,"transfer-class-name":e.transferClassName,disabled:e.disabled,filterable:e.filterable,clearable:e.clearable,placeholder:e.placeholder},on:{"on-change":e.handleChangeDep,"on-visible-change":e.handleVisibleChange},model:{value:e.selectDep,callback:function(t){e.selectDep=t},expression:"selectDep"}})],1)},i=[],l=a("365c"),o={name:"departmentChoose",props:{size:String,transfer:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},clearable:{type:Boolean,default:!0},placeholder:{type:String,default:"请选择或输入搜索部门"},transferClassName:String},data(){return{selectDep:[],department:[]}},methods:{initDepartmentData(){Object(l["jc"])().then(e=>{e.success&&(e.result.forEach((function(e){e.isParent?(e.value=e.id,e.label=e.title,e.loading=!1,e.children=[]):(e.value=e.id,e.label=e.title),-1==e.status&&(e.label="[已禁用] "+e.label,e.disabled=!0)})),this.department=e.result)})},loadData(e,t){e.loading=!0,Object(l["lc"])(e.value).then(a=>{e.loading=!1,a.success&&(a.result.forEach((function(e){e.isParent?(e.value=e.id,e.label=e.title,e.loading=!1,e.children=[]):(e.value=e.id,e.label=e.title),-1==e.status&&(e.label="[已禁用] "+e.label,e.disabled=!0)})),e.children=a.result,t())})},handleChangeDep(e,t){let a="";e&&e.length>0&&(a=e[e.length-1]),this.$emit("on-change",a)},handleVisibleChange(e){this.$emit("on-visible-change",e)},clearSelect(){this.selectDep=[],this.$emit("on-change","")}},mounted(){this.initDepartmentData()}},r=o,n=a("2877"),c=Object(n["a"])(r,s,i,!1,null,null,null);t["default"]=c.exports},"30fa":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",[t("Modal",{attrs:{title:"身份验证",fullscreen:"","footer-hide":""},model:{value:e.passCheckVisible,callback:function(t){e.passCheckVisible=t},expression:"passCheckVisible"}},[t("div",{staticClass:"pass-check",on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.checkPass.apply(null,arguments)}}},[t("Icon",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"md-lock",size:"30"}}),t("div",{staticClass:"title",staticStyle:{"margin-bottom":"40px"}},[e._v("密码认证")]),t("div",{staticClass:"desc"},[e._v("请输入您的密码")]),t("Input",{staticStyle:{width:"300px","margin-bottom":"40px"},attrs:{autofocus:"",password:"",size:"large",placeholder:"请输入您的密码",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),t("div",{staticStyle:{"margin-bottom":"60px"}},[t("Button",{staticStyle:{"margin-right":"20px"},attrs:{size:"large"},on:{click:function(t){e.passCheckVisible=!1}}},[e._v("取消")]),t("Button",{attrs:{loading:e.loading,disabled:!e.password,type:"primary",size:"large"},on:{click:e.checkPass}},[e._v("提交")])],1)],1)])],1)},i=[],l=a("365c"),o={name:"checkPassword",data(){return{loading:!1,passCheckVisible:!1,password:""}},methods:{checkPass(){this.loading=!0,Object(l["Sc"])({password:this.password}).then(e=>{this.loading=!1,e.success&&(this.passCheckVisible=!1,this.$emit("on-success",!0))})},show(){this.password="",this.passCheckVisible=!0}}},r=o,n=(a("74b2"),a("2877")),c=Object(n["a"])(r,s,i,!1,null,null,null);t["default"]=c.exports},4320:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search"},[t("Card",[t("Row",{directives:[{name:"show",rawName:"v-show",value:e.openSearch,expression:"openSearch"}],nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearch.apply(null,arguments)}}},[t("Form",{ref:"searchForm",attrs:{model:e.searchForm,inline:"","label-width":70}},[t("FormItem",{attrs:{label:"用户名",prop:"nickname"}},[t("Input",{staticStyle:{width:"200px"},attrs:{type:"text",clearable:"",placeholder:"请输入用户名"},model:{value:e.searchForm.nickname,callback:function(t){e.$set(e.searchForm,"nickname",t)},expression:"searchForm.nickname"}})],1),t("FormItem",{attrs:{label:"部门",prop:"department"}},[t("department-choose",{ref:"dep",staticStyle:{width:"200px"},on:{"on-change":e.handleSelectDep}})],1),e.drop?t("span",[t("FormItem",{attrs:{label:"手机号",prop:"mobile"}},[t("Input",{staticStyle:{width:"200px"},attrs:{type:"text",clearable:"",placeholder:"请输入手机号"},model:{value:e.searchForm.mobile,callback:function(t){e.$set(e.searchForm,"mobile",t)},expression:"searchForm.mobile"}})],1),t("FormItem",{attrs:{label:"邮箱",prop:"email"}},[t("Input",{staticStyle:{width:"200px"},attrs:{type:"text",clearable:"",placeholder:"请输入邮箱"},model:{value:e.searchForm.email,callback:function(t){e.$set(e.searchForm,"email",t)},expression:"searchForm.email"}})],1),t("FormItem",{attrs:{label:"性别",prop:"sex"}},[t("dict",{staticStyle:{width:"200px"},attrs:{dict:"sex"},model:{value:e.searchForm.sex,callback:function(t){e.$set(e.searchForm,"sex",t)},expression:"searchForm.sex"}})],1),t("FormItem",{attrs:{label:"登录账号",prop:"username"}},[t("Input",{staticStyle:{width:"200px"},attrs:{type:"text",clearable:"",placeholder:"请输入登录账号"},model:{value:e.searchForm.username,callback:function(t){e.$set(e.searchForm,"username",t)},expression:"searchForm.username"}})],1),t("FormItem",{attrs:{label:"用户ID",prop:"id"}},[t("Input",{staticStyle:{width:"200px"},attrs:{type:"text",clearable:"",placeholder:"请输入用户ID"},model:{value:e.searchForm.id,callback:function(t){e.$set(e.searchForm,"id",t)},expression:"searchForm.id"}})],1),t("FormItem",{attrs:{label:"创建时间"}},[t("DatePicker",{staticStyle:{width:"200px"},attrs:{options:e.options,type:"daterange",format:"yyyy-MM-dd",clearable:"",placeholder:"选择起始时间"},on:{"on-change":e.selectDateRange},model:{value:e.selectDate,callback:function(t){e.selectDate=t},expression:"selectDate"}})],1)],1):e._e(),t("FormItem",{staticClass:"br",staticStyle:{"margin-left":"-35px"}},[t("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:e.handleSearch}},[e._v("搜索")]),t("Button",{on:{click:e.handleReset}},[e._v("重置")]),t("a",{staticClass:"drop-down",on:{click:e.dropDown}},[e._v(" "+e._s(e.dropDownContent)+" "),t("Icon",{attrs:{type:e.dropDownIcon}})],1)],1)],1)],1),t("Row",{staticClass:"operation",attrs:{align:"middle",justify:"space-between"}},[t("div",[t("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:e.add}},[e._v("添加用户")]),t("Button",{attrs:{icon:"md-trash"},on:{click:e.delAll}},[e._v("批量删除")]),t("Dropdown",{on:{"on-click":e.handleDropdown}},[t("Button",[e._v(" 更多操作 "),t("Icon",{attrs:{type:"md-arrow-dropdown"}})],1),t("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[t("DropdownItem",{attrs:{name:"reset"}},[e._v("重置用户密码")]),t("DropdownItem",{attrs:{name:"exportData"}},[e._v("导出所选数据")]),t("DropdownItem",{attrs:{name:"exportAll"}},[e._v("导出全部数据")]),t("DropdownItem",{attrs:{name:"importData"}},[e._v("导入数据(付费)")])],1)],1)],1),t("div",{staticClass:"icons"},[t("Tooltip",{attrs:{content:"刷新",placement:"top",transfer:""}},[t("Icon",{staticClass:"item",attrs:{type:"md-refresh",size:"18"},on:{click:e.getDataList}})],1),t("Tooltip",{attrs:{content:e.openSearch?"关闭搜索":"开启搜索",placement:"top",transfer:""}},[t("Icon",{staticClass:"item tip",attrs:{type:"ios-search",size:"18"},on:{click:function(t){e.openSearch=!e.openSearch}}})],1),t("Tooltip",{attrs:{content:e.openTip?"关闭提示":"开启提示",placement:"top",transfer:""}},[t("Icon",{staticClass:"item tip",attrs:{type:"md-bulb",size:"18"},on:{click:function(t){e.openTip=!e.openTip}}})],1),t("Tooltip",{attrs:{content:"表格密度",placement:"top",transfer:""}},[t("Dropdown",{attrs:{trigger:"click"},on:{"on-click":e.changeTableSize}},[t("Icon",{staticClass:"item",attrs:{type:"md-list",size:"18"}}),t("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[t("DropdownItem",{attrs:{selected:"default"==e.tableSize,name:"default"}},[e._v("默认")]),t("DropdownItem",{attrs:{selected:"large"==e.tableSize,name:"large"}},[e._v("宽松")]),t("DropdownItem",{attrs:{selected:"small"==e.tableSize,name:"small"}},[e._v("紧密")])],1)],1)],1)],1)]),t("Alert",{directives:[{name:"show",rawName:"v-show",value:e.openTip,expression:"openTip"}],attrs:{"show-icon":""}},[e._v(" 已选择 "),t("span",{staticClass:"select-count"},[e._v(e._s(e.selectList.length))]),e._v(" 项 "),t("a",{staticClass:"select-clear",on:{click:e.clearSelectAll}},[e._v("清空")])]),t("Table",{ref:"table",attrs:{loading:e.loading,border:"",columns:e.columns,data:e.data,size:e.tableSize,sortable:"custom"},on:{"on-sort-change":e.changeSort,"on-selection-change":e.showSelect}}),t("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[t("Page",{attrs:{current:e.searchForm.pageNumber,total:e.total,"page-size":e.searchForm.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1),t("Modal",{attrs:{title:e.exportTitle,loading:e.loadingExport},on:{"on-ok":e.exportCustomData},model:{value:e.exportModalVisible,callback:function(t){e.exportModalVisible=t},expression:"exportModalVisible"}},[t("Form",{ref:"exportForm",attrs:{"label-width":100}},[t("FormItem",{attrs:{label:"导出文件名"}},[t("Input",{model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}})],1),t("FormItem",{attrs:{label:"自定义导出列"}},[t("CheckboxGroup",{model:{value:e.chooseColumns,callback:function(t){e.chooseColumns=t},expression:"chooseColumns"}},e._l(e.exportColumns,(function(e,a){return t("Checkbox",{key:a,attrs:{label:e.title,value:e.checked,disabled:e.disabled}})})),1)],1)],1)],1),t("Drawer",{attrs:{title:"导入数据",closable:"",width:"800",draggable:""},model:{value:e.importModalVisible,callback:function(t){e.importModalVisible=t},expression:"importModalVisible"}},[t("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[t("Upload",{attrs:{action:"","before-upload":e.beforeUploadImport,accept:".xls, .xlsx"}},[t("Button",{staticStyle:{"margin-right":"10px"},attrs:{loading:e.reading,icon:"ios-cloud-upload-outline"}},[e._v("上传Excel文件")]),e.uploadfile.name?t("span",[e._v("当前选择文件："+e._s(e.uploadfile.name))]):e._e()],1),t("Button",{attrs:{icon:"md-trash"},on:{click:e.clearImportData}},[e._v("清空数据")])],1),t("Alert",{attrs:{type:"warning","show-icon":""}},[e._v("导入前请下载查看导入模版数据文件查看所需字段及说明，确保数据格式正确，不得修改列英文名称")]),t("Table",{ref:"importTable",attrs:{columns:e.importColumns,border:"",height:e.height,data:e.importTableData}}),t("div",{staticClass:"drawer-footer"},[t("Button",{attrs:{type:"info"},on:{click:e.downloadTemple}},[e._v("下载导入模板")]),t("div",{staticStyle:{position:"absolute",right:"15px",display:"inline-block"}},[t("Button",{on:{click:function(t){e.importModalVisible=!1}}},[e._v("关闭")]),t("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:e.importLoading,disabled:e.importTableData.length<=0,type:"primary"},on:{click:e.importData}},[e._v(" 确认导入 "),e.importTableData.length>0?t("span",[e._v(e._s(e.importTableData.length)+" 条数据")]):e._e()])],1)],1)],1),t("check-password",{ref:"checkPass",on:{"on-success":e.resetPass}}),t("addEdit",{attrs:{data:e.form,type:e.showType},on:{"on-submit":e.getDataList},model:{value:e.showUser,callback:function(t){e.showUser=t},expression:"showUser"}})],1)},i=[],l=a("365c"),o=a("2c8a"),r=a("30fa"),n=a("6c6d"),c=a("240f");const d=[{title:"用户名",key:"username"},{title:"头像",key:"avatar"},{title:"所属部门ID",key:"departmentId"},{title:"所属部门",key:"departmentTitle"},{title:"手机",key:"mobile",disabled:!0},{title:"邮箱",key:"email"},{title:"性别",key:"sex"},{title:"地址",key:"address"},{title:"用户类型",key:"type"},{title:"状态",key:"status"},{title:"删除标志",key:"delFlag"},{title:"创建时间",key:"createTime"},{title:"更新时间",key:"updateTime"}];var h=a("0a21"),p=a("ae68"),m=a("76e2"),u={name:"user-manage",components:{departmentChoose:o["default"],checkPassword:r["default"],addEdit:p["default"],dict:m["default"]},data(){return{tableSize:"default",height:510,showUser:!1,showType:"0",openSearch:!0,openTip:!0,loading:!0,reading:!1,importLoading:!1,loadingExport:!0,exportModalVisible:!1,importModalVisible:!1,drop:!1,dropDownContent:"展开",dropDownIcon:"ios-arrow-down",selectList:[],searchForm:{id:"",nickname:"",username:"",departmentId:"",mobile:"",email:"",sex:"",type:"",status:"",pageNumber:1,pageSize:10,sort:"createTime",order:"desc",startDate:"",endDate:""},selectDate:null,options:{shortcuts:n["a"]},form:{},columns:[{type:"selection",width:60,align:"center",fixed:"left"},{type:"index",width:60,align:"center",fixed:"left"},{title:"登录账号",key:"username",minWidth:125,sortable:!0,fixed:"left"},{title:"用户名",key:"nickname",minWidth:125,sortable:!0,fixed:"left",render:(e,t)=>e("a",{on:{click:()=>{this.showDetail(t.row)}}},t.row.nickname)},{title:"头像",key:"avatar",width:80,align:"center",render:(e,t)=>e("Avatar",{props:{src:t.row.avatar}})},{title:"所属部门",key:"departmentTitle",minWidth:120},{title:"手机",key:"mobile",minWidth:125,sortable:!0},{title:"邮箱",key:"email",minWidth:180,sortable:!0},{title:"性别",key:"sex",width:70,align:"center"},{title:"类型",key:"type",align:"center",width:110,render:(e,t)=>{let a="",s="";return 0==t.row.type?(a="普通用户",s="default"):1==t.row.type&&(a="管理员",s="blue"),e("div",[e("Tag",{props:{color:s}},a)])},filters:[{label:"普通用户",value:0},{label:"管理员",value:1}],filterMultiple:!1,filterRemote:e=>{let t="";e.length>0&&(t=e[0]),this.searchForm.type=t,this.searchForm.pageNumber=1,this.getDataList()}},{title:"状态",key:"status",align:"center",width:100,render:(e,t)=>0==t.row.status?e("div",[e("Badge",{props:{status:"success",text:"启用"}})]):-1==t.row.status?e("div",[e("Badge",{props:{status:"error",text:"禁用"}})]):void 0,filters:[{label:"启用",value:0},{label:"禁用",value:-1}],filterMultiple:!1,filterRemote:e=>{let t="";e.length>0&&(t=e[0]),this.searchForm.status=t,this.searchForm.pageNumber=1,this.getDataList()}},{title:"创建时间",key:"createTime",sortable:!0,sortType:"desc",width:180},{title:"操作",key:"action",width:170,align:"center",fixed:"right",render:(e,t)=>{let a="";return a=0==t.row.status?e("a",{on:{click:()=>{this.disable(t.row)}}},"禁用"):e("a",{on:{click:()=>{this.enable(t.row)}}},"启用"),e("div",[e("a",{on:{click:()=>{this.edit(t.row)}}},"编辑"),e("Divider",{props:{type:"vertical"}}),a,e("Divider",{props:{type:"vertical"}}),e("a",{on:{click:()=>{this.remove(t.row)}}},"删除")])}}],exportColumns:d,chooseColumns:[],filename:"用户数据",exportTitle:"确认导出",exportType:"",importTableData:[],importColumns:[],uploadfile:{name:""},tempColumns:c["a"],tempData:c["b"],data:[],exportData:[],total:0}},methods:{init(){this.getDataList();let e=[];this.exportColumns.forEach(t=>{this.getStore("roles").includes("ROLE_ADMIN")||"mobile"!=t.key?t.disabled=!1:(t.title="[无权导出] "+t.title,t.disabled=!0),e.push(t.title)}),this.chooseColumns=e},handleSelectDep(e){this.searchForm.departmentId=e},changePage(e){this.searchForm.pageNumber=e,this.getDataList(),this.clearSelectAll()},changePageSize(e){this.searchForm.pageSize=e,this.getDataList()},selectDateRange(e){e&&(this.searchForm.startDate=e[0],this.searchForm.endDate=e[1])},changeTableSize(e){this.tableSize=e},getDataList(){this.loading=!0,Object(l["ec"])(this.searchForm).then(e=>{this.loading=!1,e.success&&(this.getStore("roles").includes("ROLE_ADMIN")||e.result.content.forEach(e=>{e.mobile="您无权查看该数据"}),this.data=e.result.content,this.total=e.result.totalElements,0==this.data.length&&this.searchForm.pageNumber>1&&(this.searchForm.pageNumber-=1,this.getDataList()))})},handleSearch(){this.searchForm.pageNumber=1,this.searchForm.pageSize=10,this.getDataList()},handleReset(){this.$refs.searchForm.resetFields(),this.searchForm.pageNumber=1,this.searchForm.pageSize=10,this.selectDate=null,this.searchForm.startDate="",this.searchForm.endDate="",this.$refs.dep.clearSelect(),this.searchForm.departmentId="",this.getDataList()},changeSort(e){this.searchForm.sort=e.key,this.searchForm.order=e.order,"normal"==e.order&&(this.searchForm.order=""),this.getDataList()},handleDropdown(e){if("reset"==e){if(this.selectList.length<=0)return void this.$Message.warning("您还未选择要重置密码的用户");this.$refs.checkPass.show()}else if("exportData"==e){if(this.selectList.length<=0)return void this.$Message.warning("您还未选择要导出的数据");this.exportType="part",this.exportModalVisible=!0,this.exportTitle="确认导出 "+this.selectList.length+" 条数据(付费)"}else"exportAll"==e?(this.exportType="all",this.exportModalVisible=!0,this.exportTitle="确认导出全部 "+this.total+" 条数据(付费)",Object(l["yb"])().then(e=>{e.success&&(this.exportData=e.result)})):"importData"==e&&(this.importModalVisible=!0)},resetPass(){this.$Modal.confirm({title:"确认重置",content:"您确认要重置所选的 "+this.selectList.length+" 条用户数据密码为 123456 ?",loading:!0,onOk:()=>{let e="";this.selectList.forEach((function(t){e+=t.id+","})),e=e.substring(0,e.length-1),Object(l["yc"])({ids:e}).then(e=>{this.$Modal.remove(),e.success&&(this.$Message.success("操作成功"),this.clearSelectAll(),this.getDataList())})}})},exportCustomData(){""==this.filename&&(this.filename="用户数据");let e=[];this.exportColumns.forEach(t=>{this.chooseColumns.forEach(a=>{t.title!=a||t.disabled||e.push(t)})}),this.exportModalVisible=!1;let t=[],a=[];e.forEach(e=>{t.push(e.title),a.push(e.key)});const s={title:t,key:a,data:this.exportData,autoWidth:!0,filename:this.filename};h["a"].export_array_to_excel(s)},beforeUploadImport(e){this.uploadfile=e;const t=e.name.split(".").pop().toLocaleLowerCase();return"xlsx"==t||"xls"==t?(this.readFile(e),this.file=e):this.$Notice.warning({title:"文件类型错误",desc:"所选文件‘ "+e.name+" ’不是EXCEL文件，请选择后缀为.xlsx或者.xls的EXCEL文件。"}),!1},readFile(e){this.reading=!0;const t=new FileReader;t.readAsArrayBuffer(e),t.onerror=e=>{this.reading=!1,this.$Message.error("文件读取出错")},t.onload=e=>{const t=e.target.result,{header:a,results:s}=h["a"].read(t,"array"),i=a.map(e=>({title:e,key:e,minWidth:130,align:"center"}));this.importTableData=s,this.importColumns=i,this.reading=!1,this.$Message.success("读取数据成功")}},clearImportData(){this.importTableData=[],this.importColumns=[],this.uploadfile={}},downloadTemple(){let e=[],t=[];c["a"].forEach(a=>{e.push(a.title),t.push(a.key)});const a={title:e,key:t,data:c["b"],autoWidth:!0,filename:"导入用户数据模版"};h["a"].export_array_to_excel(a)},importData(){this.importLoading=!0,Object(l["hc"])(this.importTableData).then(e=>{this.importLoading=!1,e.success&&(this.importModalVisible=!1,this.getDataList(),this.$Modal.info({title:"导入结果",content:e.message}))})},showDetail(e){for(let s in e)null==e[s]&&(e[s]="");let t=JSON.stringify(e),a=JSON.parse(t);this.form=a,this.showType="0",this.showUser=!0},add(){this.showType="2",this.showUser=!0},edit(e){for(let s in e)null==e[s]&&(e[s]="");let t=JSON.stringify(e),a=JSON.parse(t);this.form=a,this.showType="1",this.showUser=!0},enable(e){this.$Modal.confirm({title:"确认启用",content:"您确认要启用用户 "+e.username+" ?",loading:!0,onOk:()=>{Object(l["rb"])(e.id).then(e=>{this.$Modal.remove(),e.success&&(this.$Message.success("操作成功"),this.getDataList())})}})},disable(e){this.$Modal.confirm({title:"确认禁用",content:"您确认要禁用用户 "+e.username+" ?",loading:!0,onOk:()=>{Object(l["S"])(e.id).then(e=>{this.$Modal.remove(),e.success&&(this.$Message.success("操作成功"),this.getDataList())})}})},remove(e){this.$Modal.confirm({title:"确认删除",content:"您确认要删除用户 "+e.username+" ?",loading:!0,onOk:()=>{Object(l["P"])({ids:e.id}).then(e=>{this.$Modal.remove(),e.success&&(this.clearSelectAll(),this.$Message.success("删除成功"),this.getDataList())})}})},dropDown(){this.drop?(this.dropDownContent="展开",this.dropDownIcon="ios-arrow-down"):(this.dropDownContent="收起",this.dropDownIcon="ios-arrow-up"),this.drop=!this.drop},showSelect(e){this.exportData=e,this.selectList=e},clearSelectAll(){this.$refs.table.selectAll(!1)},delAll(){this.selectList.length<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectList.length+" 条数据?",loading:!0,onOk:()=>{let e="";this.selectList.forEach((function(t){e+=t.id+","})),e=e.substring(0,e.length-1),Object(l["P"])({ids:e}).then(e=>{this.$Modal.remove(),e.success&&(this.$Message.success("删除成功"),this.clearSelectAll(),this.getDataList())})}})}},mounted(){this.height=Number(document.documentElement.clientHeight-230),this.init()}},b=u,g=(a("cceb"),a("2877")),f=Object(g["a"])(b,s,i,!1,null,null,null);t["default"]=f.exports},"6c6d":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));const s=[{text:"今日",value(){var e=new Date,t=new Date;return e.setTime(t.getTime()),[t,e]}},{text:"昨日",value(){var e=new Date,t=new Date;return t.setTime(t.getTime()-864e5),e.setTime(e.getTime()-864e5),[t,e]}},{text:"本周",value(){var e=new Date,t=e.getDay(),a=e.getDate(),s=e.getMonth(),i=t||7,l=new Date(e.getFullYear(),s,a+1-i),o=new Date(e.getFullYear(),s,a+7-i);return l.setTime(l.getTime()),o.setTime(o.getTime()),[l,o]}},{text:"本月",value(){var e=new Date,t=e.getYear();t+=t<2e3?1900:0;var a=e.getMonth(),s=new Date(t,a,1),i=new Date(t,a+1,1),l=(i-s)/864e5,o=new Date(t,a,1),r=new Date(t,a,l);return o.setTime(o.getTime()),r.setTime(r.getTime()),[o,r]}}]},"6db7":function(e,t,a){},"74b2":function(e,t,a){"use strict";a("6db7")},"8fbb":function(e,t,a){},cceb:function(e,t,a){"use strict";a("8fbb")}}]);