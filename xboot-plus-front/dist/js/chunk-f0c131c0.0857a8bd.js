(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f0c131c0","chunk-48bb1b53","chunk-6a894892"],{"035b":function(t,e,s){},"4de4":function(t,e,s){"use strict";s("f03a")},"5c11":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"authorize"},[e("Row",{staticStyle:{height:"100%"},attrs:{type:"flex",justify:"center",align:"middle"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit.apply(null,arguments)}}},[e("Col",{staticClass:"content",style:{width:t.userInfo?"450px":"390px"}},[e("div",[e("div",{staticClass:"logos-wrap"},[e("div",{staticClass:"logos"},[e("Avatar",{staticClass:"top site-logo",style:{background:"#fff"},attrs:{src:t.site.logo,size:"96"}}),e("Icon",{staticClass:"top",attrs:{type:"ios-checkmark-circle",color:"#52c41a",size:"32"}}),e("Avatar",{staticClass:"top",style:{background:"#f1f2f5"},attrs:{src:s("d1e0"),size:"96"}}),e("div",{staticClass:"line"})],1),e("div",{staticClass:"auth-title"},[t._v(t._s(t.$t("authorize"))+" "+t._s(t.site.name))])]),t.error||t.authLoading||t.userInfo?t._e():e("div",[e("Tabs",{attrs:{value:"1"}},[e("TabPane",{attrs:{label:t.$t("sso"),name:"1",icon:"md-people"}},[e("Form",{ref:"loginForm",staticClass:"form",attrs:{model:t.form,rules:t.rules}},[e("FormItem",{attrs:{prop:"username"}},[e("Input",{attrs:{prefix:"ios-person-outline",size:"large",clearable:"",placeholder:"账号/邮箱/手机号",autocomplete:"off"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),e("FormItem",{attrs:{prop:"password"}},[e("Input",{attrs:{type:"password",prefix:"ios-lock-outline",size:"large",clearable:"",placeholder:"请输入密码",autocomplete:"off"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),e("FormItem",{attrs:{prop:"code"}},[e("Row",{staticStyle:{"align-items":"center",overflow:"hidden"},attrs:{type:"flex",justify:"space-between"}},[e("Input",{staticStyle:{width:"67%"},attrs:{size:"large",clearable:"",placeholder:"请输入图片验证码",maxlength:10},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),e("div",{staticClass:"code-image",staticStyle:{position:"relative","font-size":"12px"}},[t.loadingCaptcha?e("Spin",{attrs:{fix:""}}):t._e(),e("img",{staticStyle:{width:"110px",cursor:"pointer",display:"block"},attrs:{src:t.captchaImg,alt:"加载验证码失败"},on:{click:t.getCaptchaImg}})],1)],1)],1)],1)],1)],1),e("Row",[e("Button",{attrs:{type:"primary",size:"large",loading:t.loading,long:""},on:{click:t.submit}},[t.loading?e("span",[t._v(t._s(t.$t("authorizing")))]):e("span",[t._v(t._s(t.$t("authorizeAndSignin")))])])],1),e("Row",{staticClass:"other-thing",attrs:{type:"flex",justify:"space-between"}},[e("router-link",{staticClass:"back",attrs:{to:"/reset"}},[t._v(t._s(t.$t("forgetPass")))]),e("router-link",{staticClass:"back",attrs:{to:"/register"}},[t._v(" "+t._s(t.$t("registerNow"))+" ")])],1)],1),t.error||t.authLoading||!t.userInfo?t._e():e("div",[t.error?t._e():e("Card",{attrs:{"dis-hover":"",padding:0}},[e("div",{staticClass:"auth-card"},[e("div",{staticClass:"auth-info-wrap"},[e("div",{staticClass:"auth-detail",staticStyle:{"margin-bottom":"25px"}},[e("Avatar",{staticClass:"auth-pic",style:{background:"#fff"},attrs:{src:t.userInfo.avatar,size:"40"}}),e("div",[e("a",{staticClass:"auth-detail-href",attrs:{href:t.site.homeUri,target:"_blank"}},[t._v(t._s(t.site.name))]),e("div",{staticClass:"auth-detail-sub-title"},[t._v(" "+t._s(t.$t("wants"))+" "),e("span",{staticClass:"auth-detail-strong"},[t._v(t._s(t.userInfo.username))]),t._v(" "+t._s(t.$t("wants2"))+" ")])])],1),e("div",{staticClass:"auth-detail",staticStyle:{"margin-bottom":"15px"}},[e("Icon",{staticClass:"auth-pic",attrs:{type:"md-person",color:"#6a737d",size:"40"}}),e("div",[e("div",{staticClass:"auth-detail-title"},[t._v(" "+t._s(t.$t("authAquire"))+" ")]),e("div",{staticClass:"auth-detail-sub-title"},[t._v(" "+t._s(t.$t("aquireInfo"))+" ")])])],1)]),e("Row",{staticClass:"button-confirm"},[e("Button",{attrs:{type:"primary",size:"large",loading:t.loading,long:""},on:{click:t.confirm}},[t.loading?e("span",[t._v(t._s(t.$t("authorizing")))]):e("span",[t._v(t._s(t.$t("authorize")))])])],1),e("Row",{staticClass:"to-wrap"},[e("div",[t._v(t._s(t.$t("afterAuth")))]),e("div",{staticClass:"to-strong"},[t._v(t._s(t.site.homeUri))])])],1)])],1),t.error&&!t.authLoading?e("div",{staticStyle:{"margin-top":"15vh"}},[e("Alert",{attrs:{type:"error","show-icon":""}},[t._v(" "+t._s(t.title)+" "),e("span",{attrs:{slot:"desc"},slot:"desc"},[t._v(t._s(t.msg))])])],1):t._e(),t.authLoading?e("div",[e("RectLoading")],1):t._e()]),e("Footer")],1),e("LangSwitch")],1)],1)},i=[],r=s("852e"),o=s.n(r),n=s("365c"),c=s("c809"),l=s("c9d5"),u=s("ab7e"),d=s("8d45"),h={components:{LangSwitch:u["default"],Footer:l["default"],RectLoading:d["default"]},data(){return{authLoading:!1,title:"",msg:"",error:!1,loadingCaptcha:!0,captchaImg:"",loading:!1,userInfo:{},site:{name:"",homeUri:"",logo:"",autoApprove:!1},form:{username:"",password:"",code:"",client_id:"",redirect_uri:"",state:"",response_type:"",captchaId:this.captchaId},rules:{username:[{required:!0,message:"账号不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],code:[{required:!0,message:"验证码不能为空",trigger:"blur"}]}}},methods:{init(){let t=this.$route.query;return t.client_id?t.redirect_uri?t.state?(this.form.client_id=t.client_id,this.form.redirect_uri=t.redirect_uri,this.form.state=t.state,this.form.responseType=t.responseType,void this.getSiteInfo(this.form.client_id)):(this.title="参数state非法",this.msg="The parameter state is illegal.",void(this.error=!0)):(this.title="参数redirect_uri非法",this.msg="The parameter redirect_uri is illegal.",void(this.error=!0)):(this.title="参数client_id非法",this.msg="The parameter client_id is illegal.",void(this.error=!0))},getSiteInfo(t){Object(c["g"])(t).then(t=>{t.success?(this.site=t.result,this.isAuthed()):(this.error=!0,this.title=t.message,this.authLoading=!1)})},isAuthed(){let t=o.a.get("userInfo");this.userInfo=t,t?(this.userInfo=JSON.parse(t),this.site.autoApprove?Object(c["c"])(this.form).then(t=>{if(t.success){let e=t.result.redirect_uri+"?code="+t.result.code+"&state="+t.result.state;window.location.href=e}else this.authLoading=!1}):this.authLoading=!1):this.authLoading=!1},confirm(){this.loading=!0,Object(c["c"])(this.form).then(t=>{if(this.loading=!1,t.success){let e=t.result.redirect_uri+"?code="+t.result.code+"&state="+t.result.state;window.location.href=e}})},getCaptchaImg(){this.loadingCaptcha=!0,Object(n["ic"])().then(t=>{this.loadingCaptcha=!1,t.success&&(this.form.captchaId=t.result,this.captchaImg=n["T"]+t.result)})},submit(){this.$refs.loginForm.validate(t=>{t&&(this.loading=!0,Object(c["b"])(this.form).then(t=>{if(t.success){this.setStore("accessToken",t.result.accessToken);let e=t.result;Object(n["Uc"])().then(t=>{if(t.success){delete t.result.permissions;let s=[];t.result.roles.forEach(t=>{s.push(t.name)}),this.setStore("roles",s),o.a.set("userInfo",JSON.stringify(t.result),{expires:7}),this.setStore("userInfo",t.result),this.$store.commit("setUserInfo",t.result);let a=e.redirect_uri+"?code="+e.code+"&state="+e.state;window.location.href=a}else this.loading=!1,this.getCaptchaImg()})}else this.loading=!1,this.getCaptchaImg()}))})}},mounted(){this.init(),this.getCaptchaImg()}},g=h,f=(s("9e31"),s("2877")),p=Object(f["a"])(g,a,i,!1,null,null,null);e["default"]=p.exports},"8cc9":function(t,e,s){"use strict";s("da43")},"8d45":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"spinner"},[e("div",{staticClass:"rect1"}),e("div",{staticClass:"rect2"}),e("div",{staticClass:"rect3"}),e("div",{staticClass:"rect4"}),e("div",{staticClass:"rect5"})])}],r={name:"rectLoading"},o=r,n=(s("8cc9"),s("2877")),c=Object(n["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports},"9e31":function(t,e,s){"use strict";s("035b")},ab7e:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"lang-icon"},[e("Dropdown",{attrs:{transfer:""},on:{"on-click":t.langChange}},[e("Icon",{attrs:{type:"md-globe",size:"26"}}),e("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[e("DropdownItem",{attrs:{name:"zh-CN",selected:"zh-CN"==t.currLang}},[e("div",{staticClass:"lan-logo-content"},[e("img",{staticClass:"country-logo",attrs:{src:s("6336")}}),t._v("简体中文 ")])]),e("DropdownItem",{attrs:{name:"en-US",selected:"en-US"==t.currLang}},[e("div",{staticClass:"lan-logo-content"},[e("img",{staticClass:"country-logo",attrs:{src:s("38f6")}}),t._v("English ")])])],1)],1)],1)},i=[],r={name:"langSwitch",data(){return{currLang:"zh-CN"}},methods:{langChange(t){this.currLang=t,this.$i18n.locale=t,this.$store.commit("switchLang",t)}},mounted(){localStorage.lang&&(this.currLang=localStorage.lang)}},o=r,n=(s("4de4"),s("2877")),c=Object(n["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports},c809:function(t,e,s){"use strict";s.d(e,"g",(function(){return i})),s.d(e,"b",(function(){return r})),s.d(e,"c",(function(){return o})),s.d(e,"f",(function(){return n})),s.d(e,"e",(function(){return c})),s.d(e,"a",(function(){return l})),s.d(e,"h",(function(){return u})),s.d(e,"d",(function(){return d}));var a=s("7f80");const i=(t,e)=>Object(a["a"])("/oauth2/info/"+t,e),r=t=>Object(a["d"])("/oauth2/authorize",t),o=t=>Object(a["e"])("/oauth2/authorized",t),n=t=>Object(a["b"])("/client/getSecretKey",t),c=t=>Object(a["b"])("/client/getByCondition",t),l=t=>Object(a["e"])("/client/save",t),u=t=>Object(a["f"])("/client/update",t),d=t=>Object(a["e"])("/client/delByIds",t)},da43:function(t,e,s){},f03a:function(t,e,s){}}]);