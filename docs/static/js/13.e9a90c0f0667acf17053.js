webpackJsonp([13],{I2ka:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"tempAccommodation",data:function(){return{input1:"",input2:"",input3:"",dialogVisible:!1,xslb:"",date1:"",date2:"",date3:"",date4:"",date5:"",date6:"",date7:"",options1:[{value:"1",label:"出境学生"},{value:"2",label:"国内旅游学生"}],tableData3:[{order:"1",nj:"2018",class:"计算机技术1班",xh:"20180808001",name:"Tom",cnName:"王小虎",gender:"男",roomNum:"503",tel:"13888888888",birthday:"19900808",passport:"126351263715283",Nation:"美国"},{order:"1",nj:"2018",class:"计算机技术1班",xh:"20180808001",name:"Tom",cnName:"王小虎",gender:"男",roomNum:"503",tel:"13888888888",birthday:"19900808",passport:"126351263715283",Nation:"美国",stdNo:"1231323123213",arriveDate:"20170707",religion:"无宗教信仰",bzr:"张洋",bz:"无"}],ruleForm:{name:"",zwm:"",xh:"",bj:"",nj:"",ssh:"",sex:"",tel:"",birth:"",hzhm:"",gj:"",xjzch:"",dxrq:"",region:"",bzr:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},rules:{}}},computed:{},methods:{showStd:function(e){this.dialogVisible=!0,console.log(e)}}},r={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"pad20"},[l("el-row",{staticClass:"search_area",attrs:{gutter:20}},[l("el-col",{attrs:{span:24}},[l("el-input",{attrs:{placeholder:"学号",size:"mini",clearable:""},model:{value:e.input1,callback:function(t){e.input1=t},expression:"input1"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),e._v(" "),l("el-input",{attrs:{placeholder:"姓名",size:"mini",clearable:""},model:{value:e.input2,callback:function(t){e.input2=t},expression:"input2"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),e._v(" "),l("el-input",{attrs:{placeholder:"学院",size:"mini",clearable:""}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),e._v(" "),l("el-input",{attrs:{placeholder:"专业",size:"mini",clearable:""},model:{value:e.input3,callback:function(t){e.input3=t},expression:"input3"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),e._v(" "),l("el-input",{attrs:{placeholder:"班级",size:"mini",clearable:""}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),e._v(" "),l("el-input",{attrs:{placeholder:"辅导员姓名",size:"mini",clearable:""}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),e._v(" "),l("el-input",{attrs:{placeholder:"登记老师姓名",size:"mini",clearable:""}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),e._v(" "),l("el-input",{attrs:{placeholder:"护照号",size:"mini",clearable:""}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),e._v(" "),l("el-input",{attrs:{placeholder:"联系号码",size:"mini",clearable:""}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),e._v(" "),l("el-col",{staticClass:"search_btn_area",attrs:{span:24}},[l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-search"}},[e._v("搜索")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-refresh"}},[e._v("重置")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-view"}},[e._v("即将到期")])],1),e._v(" "),l("el-col",{staticClass:"functional_area",attrs:{span:24}},[l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("新增")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("修改")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-download"}},[e._v("导出Excel")])],1)],1),e._v(" "),l("el-tabs",{attrs:{type:"border-card"}},[l("el-tab-pane",{attrs:{label:"出境学生"}},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData3,border:"","header-align":"center",align:"center"}},[l("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),l("el-table-column",{attrs:{prop:"order",label:"序号",width:"50","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"name",label:"姓名",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"nj",label:"年级",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"xh",label:"学号",width:"120","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"birthday",label:"旧护照号",width:"120","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"passport",label:"新护照号",width:"150","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"cnName",label:"联系号码",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"gender",label:"出境学生",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"gender",label:"入境时间",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"gender",label:"入境地点",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"gender",label:"回长时间",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"gender",label:"回长地点",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"gender",label:"到校时间",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"Nation",label:"辅导员姓名",width:"160","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"Nation",label:"登记日期",width:"160","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"stdNo",label:"登记老师姓名",width:"170","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"stdNo",label:"上报日期",width:"170","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"arriveDate",label:"备注",width:"100","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(l){e.showStd(t.row)}}},[e._v("详情")]),e._v(" "),l("el-button",{attrs:{type:"danger",size:"mini"}},[e._v("删除")])]}}])})],1)],1),e._v(" "),l("el-tab-pane",{attrs:{label:"国内旅游学生"}},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData3,border:"","header-align":"center",align:"center"}},[l("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),l("el-table-column",{attrs:{prop:"order",label:"序号",width:"50","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"name",label:"姓名",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"nj",label:"年级",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"xh",label:"学号",width:"120","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"birthday",label:"旧护照号",width:"120","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"passport",label:"新护照号",width:"150","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"cnName",label:"联系号码",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"roomNum",label:"国内旅游学生",width:"120","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"gender",label:"离长时间",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"gender",label:"离长地点",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"gender",label:"到长时间",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"gender",label:"到长地点",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"gender",label:"到校时间",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"Nation",label:"辅导员姓名",width:"160","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"Nation",label:"登记日期",width:"160","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"stdNo",label:"登记老师姓名",width:"170","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"stdNo",label:"上报日期",width:"170","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"arriveDate",label:"备注",width:"100","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(l){e.showStd(t.row)}}},[e._v("详情")]),e._v(" "),l("el-button",{attrs:{type:"danger",size:"mini"}},[e._v("删除")])]}}])})],1)],1)],1),e._v(" "),l("el-dialog",{attrs:{title:"",visible:e.dialogVisible,width:"900px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("div",{attrs:{slot:"title"},slot:"title"},[e._v("学生详情")]),e._v(" "),l("div",[l("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{inline:!0,model:e.ruleForm,rules:e.rules,"label-width":"200px"}},[l("el-form-item",{attrs:{label:"序号",prop:"name"}},[l("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"姓名",prop:""}},[l("el-input",{model:{value:e.ruleForm.xh,callback:function(t){e.$set(e.ruleForm,"xh",t)},expression:"ruleForm.xh"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"年级",prop:""}},[l("el-input",{model:{value:e.ruleForm.nj,callback:function(t){e.$set(e.ruleForm,"nj",t)},expression:"ruleForm.nj"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"学号",prop:""}},[l("el-input",{model:{value:e.ruleForm.bj,callback:function(t){e.$set(e.ruleForm,"bj",t)},expression:"ruleForm.bj"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"旧护照号",prop:""}},[l("el-input",{model:{value:e.ruleForm.zwm,callback:function(t){e.$set(e.ruleForm,"zwm",t)},expression:"ruleForm.zwm"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"新护照号",prop:""}},[l("el-input",{model:{value:e.ruleForm.zwm,callback:function(t){e.$set(e.ruleForm,"zwm",t)},expression:"ruleForm.zwm"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"联系号码",prop:""}},[l("el-input",{model:{value:e.ruleForm.zwm,callback:function(t){e.$set(e.ruleForm,"zwm",t)},expression:"ruleForm.zwm"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"类别",prop:""}},[l("el-select",{attrs:{placeholder:""},model:{value:e.xslb,callback:function(t){e.xslb=t},expression:"xslb"}},e._l(e.options1,function(e){return l("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})}))],1),e._v(" "),"1"===e.xslb?l("el-form-item",{attrs:{label:"入境时间",prop:""}},[l("el-date-picker",{attrs:{type:"datetime"},model:{value:e.date1,callback:function(t){e.date1=t},expression:"date1"}})],1):e._e(),e._v(" "),"1"===e.xslb?l("el-form-item",{attrs:{label:"入境地点",prop:""}},[l("el-input",{model:{value:e.ruleForm.zwm,callback:function(t){e.$set(e.ruleForm,"zwm",t)},expression:"ruleForm.zwm"}})],1):e._e(),e._v(" "),"1"===e.xslb?l("el-form-item",{attrs:{label:"回长时间",prop:""}},[l("el-date-picker",{attrs:{type:"datetime"},model:{value:e.date2,callback:function(t){e.date2=t},expression:"date2"}})],1):e._e(),e._v(" "),"1"===e.xslb?l("el-form-item",{attrs:{label:"回长地点",prop:""}},[l("el-input",{model:{value:e.ruleForm.zwm,callback:function(t){e.$set(e.ruleForm,"zwm",t)},expression:"ruleForm.zwm"}})],1):e._e(),e._v(" "),"2"===e.xslb?l("el-form-item",{attrs:{label:"离长时间",prop:""}},[l("el-date-picker",{attrs:{type:"datetime"},model:{value:e.date3,callback:function(t){e.date3=t},expression:"date3"}})],1):e._e(),e._v(" "),"2"===e.xslb?l("el-form-item",{attrs:{label:"离长地点",prop:""}},[l("el-input",{model:{value:e.ruleForm.zwm,callback:function(t){e.$set(e.ruleForm,"zwm",t)},expression:"ruleForm.zwm"}})],1):e._e(),e._v(" "),"2"===e.xslb?l("el-form-item",{attrs:{label:"到长时间",prop:""}},[l("el-date-picker",{attrs:{type:"datetime"},model:{value:e.date4,callback:function(t){e.date4=t},expression:"date4"}})],1):e._e(),e._v(" "),"2"===e.xslb?l("el-form-item",{attrs:{label:"到长地点",prop:""}},[l("el-input",{model:{value:e.ruleForm.zwm,callback:function(t){e.$set(e.ruleForm,"zwm",t)},expression:"ruleForm.zwm"}})],1):e._e(),e._v(" "),l("el-form-item",{attrs:{label:"到校时间",prop:""}},[l("el-date-picker",{attrs:{type:"datetime"},model:{value:e.date5,callback:function(t){e.date5=t},expression:"date5"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"辅导员姓名",prop:""}},[l("el-input",{model:{value:e.ruleForm.gj,callback:function(t){e.$set(e.ruleForm,"gj",t)},expression:"ruleForm.gj"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"登记日期",prop:""}},[l("el-date-picker",{attrs:{type:"datetime"},model:{value:e.date6,callback:function(t){e.date6=t},expression:"date6"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"登记老师姓名",prop:""}},[l("el-input",{model:{value:e.ruleForm.xjzch,callback:function(t){e.$set(e.ruleForm,"xjzch",t)},expression:"ruleForm.xjzch"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"上报日期",prop:""}},[l("el-date-picker",{attrs:{type:"datetime"},model:{value:e.date7,callback:function(t){e.date7=t},expression:"date7"}})],1)],1),e._v(" "),l("el-form",{attrs:{"label-width":"200px"}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"备注",prop:"desc"}},[l("el-input",{staticStyle:{width:"100%"},attrs:{type:"textarea"},model:{value:e.ruleForm.bz,callback:function(t){e.$set(e.ruleForm,"bz",t)},expression:"ruleForm.bz"}})],1)],1)],1),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var n=l("VU/8")(a,r,!1,function(e){l("TvFJ")},"data-v-4753c3f8",null);t.default=n.exports},TvFJ:function(e,t){}});