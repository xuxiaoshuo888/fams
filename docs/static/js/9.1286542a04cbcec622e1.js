webpackJsonp([9],{"Itz/":function(e,t){},UVtM:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"insurance",data:function(){return{input1:"",input2:"",input3:"",dialogVisible:!1,tableData3:[{xh:"1",xm:"2018",bxxm:"人生意外险",passport:"计算机技术1班",gj:"20180808001",bxf:"12333.4",bxrq:"20180909",gmqk:"男",jzyy:"省人民医院",bq:"",bxba:"",bz:"无"},{xh:"1",xm:"2018",passport:"计算机技术1班",gj:"20180808001",bxf:"12333.4",bxrq:"20180909",gmqk:"男",jzyy:"省人民医院",bq:"",bxba:"",bz:"无"},{xh:"1",xm:"2018",passport:"计算机技术1班",gj:"20180808001",bxf:"12333.4",bxrq:"20180909",gmqk:"男",jzyy:"省人民医院",bq:"",bxba:"",bz:"无"},{xh:"1",xm:"2018",passport:"计算机技术1班",gj:"20180808001",bxf:"12333.4",bxrq:"20180909",gmqk:"男",jzyy:"省人民医院",bq:"",bxba:"",bz:"无"},{xh:"1",xm:"2018",passport:"计算机技术1班",gj:"20180808001",bxf:"12333.4",bxrq:"20180909",gmqk:"男",jzyy:"省人民医院",bq:"",bxba:"",bz:"无"}],ruleForm:{name:"",zwm:"",xh:"",bj:"",nj:"",ssh:"",sex:"",tel:"",birth:"",hzhm:"",gj:"",xjzch:"",dxrq:"",region:"",bzr:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},rules:{}}},computed:{},methods:{showStd:function(e){this.dialogVisible=!0,console.log(e)}}},a={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"pad20"},[l("el-row",{staticClass:"search_area",attrs:{gutter:20}},[l("el-col",{attrs:{span:24}},[l("el-input",{attrs:{placeholder:"学号",size:"mini",clearable:""},model:{value:e.input1,callback:function(t){e.input1=t},expression:"input1"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),e._v(" "),l("el-input",{attrs:{placeholder:"性别",size:"mini",clearable:""},model:{value:e.input2,callback:function(t){e.input2=t},expression:"input2"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),e._v(" "),l("el-input",{attrs:{placeholder:"姓名",size:"mini",clearable:""},model:{value:e.input3,callback:function(t){e.input3=t},expression:"input3"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),e._v(" "),l("el-input",{attrs:{placeholder:"保险种类",size:"mini",clearable:""}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),e._v(" "),l("el-col",{staticClass:"search_btn_area",attrs:{span:24}},[l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-search"}},[e._v("搜索")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-refresh"}},[e._v("重置")])],1),e._v(" "),l("el-col",{staticClass:"functional_area",attrs:{span:24}},[l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"}},[e._v("新增")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("修改")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-download"}},[e._v("导出Excel")])],1)],1),e._v(" "),l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData3,border:""}},[l("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),l("el-table-column",{attrs:{prop:"xh",label:"学号",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"xm",label:"姓名(护照用名)",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"hzhm",label:"护照号码",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"gj",label:"国籍",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"bxxm",label:"保险项目",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"bxf",label:"保险费",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"bxrq",label:"保险日期",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"gmqk",label:"购买情况",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"jzyy",label:"就诊医院",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"bq",label:"病情",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"bxba",label:"保险报案",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"bz",label:"备注",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",width:"80","header-align":"center",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"danger",size:"mini"}},[e._v("删除")])]}}])})],1),e._v(" "),l("el-dialog",{attrs:{title:"",visible:e.dialogVisible,width:"900px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("div",{attrs:{slot:"title"},slot:"title"},[e._v("学生详情")]),e._v(" "),l("div",[l("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{inline:!0,model:e.ruleForm,rules:e.rules,"label-width":"150px"}},[l("el-form-item",{attrs:{label:"姓名",prop:"name"}},[l("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"性别",prop:""}},[l("el-radio-group",{model:{value:e.ruleForm.xb,callback:function(t){e.$set(e.ruleForm,"xb",t)},expression:"ruleForm.xb"}},[l("el-radio",{attrs:{label:"男"}}),e._v(" "),l("el-radio",{attrs:{label:"女"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"学号",prop:""}},[l("el-input",{model:{value:e.ruleForm.xh,callback:function(t){e.$set(e.ruleForm,"xh",t)},expression:"ruleForm.xh"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"班级",prop:""}},[l("el-input",{model:{value:e.ruleForm.bj,callback:function(t){e.$set(e.ruleForm,"bj",t)},expression:"ruleForm.bj"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"年级",prop:""}},[l("el-input",{model:{value:e.ruleForm.nj,callback:function(t){e.$set(e.ruleForm,"nj",t)},expression:"ruleForm.nj"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"中文名",prop:""}},[l("el-input",{model:{value:e.ruleForm.zwm,callback:function(t){e.$set(e.ruleForm,"zwm",t)},expression:"ruleForm.zwm"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"出生年月",required:""}},[l("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date1,callback:function(t){e.$set(e.ruleForm,"date1",t)},expression:"ruleForm.date1"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"电话号码",prop:""}},[l("el-input",{model:{value:e.ruleForm.tel,callback:function(t){e.$set(e.ruleForm,"tel",t)},expression:"ruleForm.tel"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"保险项目",prop:""}},[l("el-input")],1),e._v(" "),l("el-form-item",{attrs:{label:"保险费",prop:""}},[l("el-input")],1),e._v(" "),l("el-form-item",{attrs:{label:"保险日期",prop:""}},[l("el-input")],1),e._v(" "),l("el-form-item",{attrs:{label:"购买情况",prop:""}},[l("el-input")],1),e._v(" "),l("el-form-item",{attrs:{label:"就诊医院",prop:""}},[l("el-input")],1)],1),e._v(" "),l("el-form",{attrs:{"label-width":"150px"}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"备注",prop:"desc"}},[l("el-input",{staticStyle:{width:"100%"},attrs:{type:"textarea"},model:{value:e.ruleForm.bz,callback:function(t){e.$set(e.ruleForm,"bz",t)},expression:"ruleForm.bz"}})],1)],1)],1),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var i=l("VU/8")(r,a,!1,function(e){l("Itz/")},"data-v-75190544",null);t.default=i.exports}});