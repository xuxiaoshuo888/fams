webpackJsonp([10],{OIkI:function(e,t){},vxbh:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"stdDt",data:function(){return{input1:"",input2:"",input3:"",dialogVisible:!1,tableData3:[{order:"1",nj:"2018",class:"计算机技术1班",xh:"20180808001",name:"Tom",cnName:"王小虎",gender:"男",roomNum:"503",tel:"13888888888",birthday:"19900808",passport:"126351263715283",Nation:"美国"},{order:"1",nj:"2018",class:"计算机技术1班",xh:"20180808001",name:"Tom",cnName:"王小虎",gender:"男",roomNum:"503",tel:"13888888888",birthday:"19900808",passport:"126351263715283",Nation:"美国",stdNo:"1231323123213",arriveDate:"20170707",religion:"无宗教信仰",bzr:"张洋",bz:"无"}],ruleForm:{name:"",zwm:"",xh:"",bj:"",nj:"",ssh:"",sex:"",tel:"",birth:"",hzhm:"",gj:"",xjzch:"",dxrq:"",region:"",bzr:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},rules:{}}},computed:{},methods:{showStd:function(e){this.dialogVisible=!0,console.log(e)}}},o={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"pad20"},[l("el-row",{staticClass:"marginbot20",attrs:{gutter:20}},[l("el-col",{attrs:{span:4}},[l("el-input",{attrs:{placeholder:"学号"},model:{value:e.input1,callback:function(t){e.input1=t},expression:"input1"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),e._v(" "),l("el-col",{attrs:{span:4}},[l("el-input",{attrs:{placeholder:"性别"},model:{value:e.input2,callback:function(t){e.input2=t},expression:"input2"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),e._v(" "),l("el-col",{attrs:{span:4}},[l("el-input",{attrs:{placeholder:"姓名"},model:{value:e.input3,callback:function(t){e.input3=t},expression:"input3"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),e._v(" "),l("el-col",{attrs:{span:12}},[l("el-button",{attrs:{type:"primary",icon:"el-icon-search"}},[e._v("搜索")]),e._v(" "),l("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("新增")])],1)],1),e._v(" "),l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData3,border:"",height:"250"}},[l("el-table-column",{attrs:{prop:"order",label:"学号",width:"150"}}),e._v(" "),l("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"nj",label:"是否请假",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"xh",label:"离开事由",width:"120"}},[e._v("1\n    ")]),e._v(" "),l("el-table-column",{attrs:{prop:"passport",label:"目的地",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"cnName",label:"离开时间",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"gender",label:"返回时间",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"roomNum",label:"记录日期",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"birthday",label:"备注",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){e.showStd(t.row)}}},[e._v("详情")]),e._v(" "),l("el-button",{attrs:{type:"text",size:"small"}},[e._v("删除")])]}}])})],1),e._v(" "),l("el-dialog",{attrs:{title:"",visible:e.dialogVisible,width:"60%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("div",{attrs:{slot:"title"},slot:"title"},[e._v("学生详情")]),e._v(" "),l("div",[l("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{inline:!0,model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[l("el-form-item",{attrs:{label:"序号",prop:"name"}},[l("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"姓名",prop:""}},[l("el-input",{model:{value:e.ruleForm.xh,callback:function(t){e.$set(e.ruleForm,"xh",t)},expression:"ruleForm.xh"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"年级",prop:""}},[l("el-input",{model:{value:e.ruleForm.nj,callback:function(t){e.$set(e.ruleForm,"nj",t)},expression:"ruleForm.nj"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"学号",prop:""}},[l("el-input",{model:{value:e.ruleForm.bj,callback:function(t){e.$set(e.ruleForm,"bj",t)},expression:"ruleForm.bj"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"护照号",prop:""}},[l("el-input",{model:{value:e.ruleForm.zwm,callback:function(t){e.$set(e.ruleForm,"zwm",t)},expression:"ruleForm.zwm"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"联系号码",prop:""}},[l("el-input",{model:{value:e.ruleForm.zwm,callback:function(t){e.$set(e.ruleForm,"zwm",t)},expression:"ruleForm.zwm"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"出境学生",prop:""}},[l("el-input",{model:{value:e.ruleForm.ssh,callback:function(t){e.$set(e.ruleForm,"ssh",t)},expression:"ruleForm.ssh"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"国内旅游学生",prop:""}},[l("el-input",{model:{value:e.ruleForm.tel,callback:function(t){e.$set(e.ruleForm,"tel",t)},expression:"ruleForm.tel"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"更新护照学生",prop:""}},[l("el-input",{model:{value:e.ruleForm.hzhm,callback:function(t){e.$set(e.ruleForm,"hzhm",t)},expression:"ruleForm.hzhm"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"辅导员姓名/登记日期",prop:""}},[l("el-input",{model:{value:e.ruleForm.gj,callback:function(t){e.$set(e.ruleForm,"gj",t)},expression:"ruleForm.gj"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"登记老师姓名/上报日期",prop:""}},[l("el-input",{model:{value:e.ruleForm.xjzch,callback:function(t){e.$set(e.ruleForm,"xjzch",t)},expression:"ruleForm.xjzch"}})],1)],1),e._v(" "),l("el-form",{attrs:{"label-width":"100px"}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"备注",prop:"desc"}},[l("el-input",{staticStyle:{width:"100%"},attrs:{type:"textarea"},model:{value:e.ruleForm.bz,callback:function(t){e.$set(e.ruleForm,"bz",t)},expression:"ruleForm.bz"}})],1)],1)],1),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var a=l("VU/8")(r,o,!1,function(e){l("OIkI")},"data-v-b844aa98",null);t.default=a.exports}});