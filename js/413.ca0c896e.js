"use strict";(self["webpackChunkluensen_v1"]=self["webpackChunkluensen_v1"]||[]).push([[413],{4413:function(a,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("section",{staticClass:"team container"},[r("h3",{staticClass:"mt-3 mt-sm-5"},[a._v("醫師團隊")]),r("TeamBranchPills",{staticClass:"my-3",attrs:{"branch-value-pair":a.branchValuePair,"current-branch":a.currentBranch},on:{"change-branch":a.changeFilter}}),r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("div",{key:a.currentBranch,staticClass:"row g-3 mb-3"},a._l(a.doctors,(function(t){return r("div",{key:t.id,staticClass:"col-12 col-sm-6 col-md-4 col-lg-3"},[r("div",{staticClass:"card",attrs:{"data-bs-toggle":"modal","data-bs-target":"#modal"+t.id}},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[a._v(a._s(t.name+" "+t.title))]),r("div",{staticClass:"tag"},[a._v(a._s(a.branchValuePair[t.branch]))]),r("div",{staticClass:"mt-1 text-truncate"},[t.experience.length>0?a._l(t.experience,(function(t){return r("span",{key:t},[a._v(" "+a._s(t)+" / ")])})):r("span",[a._v(" （尚無資料） ")])],2)])])])})),0)]),a._l(a.doctors,(function(t){return r("DoctorModal",{key:t.id,attrs:{doctor:t,"branch-value-pair":a.branchValuePair}})}))],2)},e=[],c=r(5983),s=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ul",{staticClass:"nav nav-pills"},[r("li",{staticClass:"nav-item"},[r("div",{class:["nav-link",{active:""===a.currentBranch}],attrs:{"aria-current":"page"},on:{click:function(t){return a.changeBranch("")}}},[a._v(" 全部 ")])]),a._l(a.branches,(function(t){return r("li",{key:t,staticClass:"nav-item"},[r("div",{class:["nav-link",{active:t===a.currentBranch}],on:{click:function(r){return a.changeBranch(t)}}},[a._v(" "+a._s(a.branchValuePair[t]+"診所")+" ")])])}))],2)},i=[],l={props:{branchValuePair:{type:Object},currentBranch:{type:String,default:""}},data(){return{branches:Object.keys(this.branchValuePair)}},methods:{changeBranch(a){this.$emit("change-branch",a)}}},o=l,h=r(1001),u=(0,h.Z)(o,s,i,!1,null,"4b80e2ba",null),d=u.exports,v=r(4861),b=r(8247),m={name:"Team",mixins:[b.n],components:{TeamBranchPills:d,DoctorModal:v.Z},data(){return{allDoctors:[],doctors:[],branchValuePair:{},currentBranch:""}},created(){Object.entries(c).forEach((([a,t])=>{this.allDoctors=[...this.allDoctors,...t.doctors],this.branchValuePair[a]=t.name})),this.doctors=[...this.allDoctors]},methods:{changeFilter(a){this.currentBranch=a,this.doctors=""!==a?this.allDoctors.filter((t=>t.branch===a)):[...this.allDoctors]}}},_=m,f=(0,h.Z)(_,n,e,!1,null,"616051b7",null),p=f.exports}}]);
//# sourceMappingURL=413.ca0c896e.js.map