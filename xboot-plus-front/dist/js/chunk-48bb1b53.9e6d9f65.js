(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48bb1b53"],{"4de4":function(t,n,a){"use strict";a("f03a")},ab7e:function(t,n,a){"use strict";a.r(n);var s=function(){var t=this,n=t._self._c;return n("div",{staticClass:"lang-icon"},[n("Dropdown",{attrs:{transfer:""},on:{"on-click":t.langChange}},[n("Icon",{attrs:{type:"md-globe",size:"26"}}),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",{attrs:{name:"zh-CN",selected:"zh-CN"==t.currLang}},[n("div",{staticClass:"lan-logo-content"},[n("img",{staticClass:"country-logo",attrs:{src:a("6336")}}),t._v("简体中文 ")])]),n("DropdownItem",{attrs:{name:"en-US",selected:"en-US"==t.currLang}},[n("div",{staticClass:"lan-logo-content"},[n("img",{staticClass:"country-logo",attrs:{src:a("38f6")}}),t._v("English ")])])],1)],1)],1)},o=[],e={name:"langSwitch",data(){return{currLang:"zh-CN"}},methods:{langChange(t){this.currLang=t,this.$i18n.locale=t,this.$store.commit("switchLang",t)}},mounted(){localStorage.lang&&(this.currLang=localStorage.lang)}},l=e,r=(a("4de4"),a("2877")),c=Object(r["a"])(l,s,o,!1,null,null,null);n["default"]=c.exports},f03a:function(t,n,a){}}]);