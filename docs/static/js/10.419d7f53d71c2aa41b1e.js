webpackJsonp([10],{HWbw:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var r={name:"regist",data:function(){return{input1:"",input2:"",input3:"",dialogVisible:!1,tableData3:[{xh:"12312321",xm:"tom"},{xh:"12312321",xm:"tom"},{xh:"12312321",xm:"tom"}],ruleForm:{name:"",zwm:"",xh:"",bj:"",nj:"",ssh:"",sex:"",tel:"",birth:"",hzhm:"",gj:"",xjzch:"",dxrq:"",region:"",bzr:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},rules:{}}},methods:{showStd:function(e){this.dialogVisible=!0,console.log(e)}}},o={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"pad20"},[t("el-row",{staticClass:"marginbot20",attrs:{gutter:20}},[t("el-col",{attrs:{span:4}},[t("el-input",{attrs:{placeholder:"学号"},model:{value:e.input1,callback:function(l){e.input1=l},expression:"input1"}},[t("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),e._v(" "),t("el-col",{attrs:{span:4}},[t("el-input",{attrs:{placeholder:"性别"},model:{value:e.input2,callback:function(l){e.input2=l},expression:"input2"}},[t("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),e._v(" "),t("el-col",{attrs:{span:4}},[t("el-input",{attrs:{placeholder:"姓名"},model:{value:e.input3,callback:function(l){e.input3=l},expression:"input3"}},[t("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-button",{attrs:{type:"primary",icon:"el-icon-search"}},[e._v("搜索")]),e._v(" "),t("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(l){e.dialogVisible=!0}}},[e._v("新增")])],1)],1),e._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData3,border:"",height:"250"}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),t("el-table-column",{attrs:{prop:"xh",label:"学号",width:""}}),e._v(" "),t("el-table-column",{attrs:{prop:"xm",label:"姓名",width:""}}),e._v(" "),t("el-table-column",{attrs:{fixed:"right",label:"操作",width:""},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.showStd(l.row)}}},[e._v("详情")]),e._v(" "),t("el-button",{attrs:{type:"text",size:"small"}},[e._v("删除")])]}}])})],1),e._v(" "),t("el-dialog",{attrs:{title:"",visible:e.dialogVisible,width:"60%"},on:{"update:visible":function(l){e.dialogVisible=l}}},[t("div",{attrs:{slot:"title"},slot:"title"},[e._v("学生详情")]),e._v(" "),t("div",[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{inline:!0,model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"姓名",prop:"name"}},[t("el-input",{model:{value:e.ruleForm.name,callback:function(l){e.$set(e.ruleForm,"name",l)},expression:"ruleForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"性别",prop:""}},[t("el-radio-group",{model:{value:e.ruleForm.xb,callback:function(l){e.$set(e.ruleForm,"xb",l)},expression:"ruleForm.xb"}},[t("el-radio",{attrs:{label:"男"}}),e._v(" "),t("el-radio",{attrs:{label:"女"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"学号",prop:""}},[t("el-input",{model:{value:e.ruleForm.xh,callback:function(l){e.$set(e.ruleForm,"xh",l)},expression:"ruleForm.xh"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"班级",prop:""}},[t("el-input",{model:{value:e.ruleForm.bj,callback:function(l){e.$set(e.ruleForm,"bj",l)},expression:"ruleForm.bj"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"年级",prop:""}},[t("el-input",{model:{value:e.ruleForm.nj,callback:function(l){e.$set(e.ruleForm,"nj",l)},expression:"ruleForm.nj"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"中文名",prop:""}},[t("el-input",{model:{value:e.ruleForm.zwm,callback:function(l){e.$set(e.ruleForm,"zwm",l)},expression:"ruleForm.zwm"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"出生年月",required:""}},[t("el-form-item",{attrs:{prop:""}},[t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date1,callback:function(l){e.$set(e.ruleForm,"date1",l)},expression:"ruleForm.date1"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"到校日期",required:""}},[t("el-form-item",{attrs:{prop:""}},[t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date2,callback:function(l){e.$set(e.ruleForm,"date2",l)},expression:"ruleForm.date2"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"宿舍号",prop:""}},[t("el-input",{model:{value:e.ruleForm.ssh,callback:function(l){e.$set(e.ruleForm,"ssh",l)},expression:"ruleForm.ssh"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"电话号码",prop:""}},[t("el-input",{model:{value:e.ruleForm.tel,callback:function(l){e.$set(e.ruleForm,"tel",l)},expression:"ruleForm.tel"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"护照号码",prop:""}},[t("el-input",{model:{value:e.ruleForm.hzhm,callback:function(l){e.$set(e.ruleForm,"hzhm",l)},expression:"ruleForm.hzhm"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"国籍",prop:""}},[t("el-input",{model:{value:e.ruleForm.gj,callback:function(l){e.$set(e.ruleForm,"gj",l)},expression:"ruleForm.gj"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"学籍注册号",prop:""}},[t("el-input",{model:{value:e.ruleForm.xjzch,callback:function(l){e.$set(e.ruleForm,"xjzch",l)},expression:"ruleForm.xjzch"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"宗教",prop:""}},[t("el-input",{model:{value:e.ruleForm.religion,callback:function(l){e.$set(e.ruleForm,"religion",l)},expression:"ruleForm.religion"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"班主任",prop:""}},[t("el-input",{model:{value:e.ruleForm.bzr,callback:function(l){e.$set(e.ruleForm,"bzr",l)},expression:"ruleForm.bzr"}})],1)],1),e._v(" "),t("el-form",{attrs:{"label-width":"100px"}},[t("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"备注",prop:"desc"}},[t("el-input",{staticStyle:{width:"100%"},attrs:{type:"textarea"},model:{value:e.ruleForm.bz,callback:function(l){e.$set(e.ruleForm,"bz",l)},expression:"ruleForm.bz"}})],1)],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(l){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(l){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var a=t("VU/8")(r,o,!1,function(e){t("go7M")},"data-v-78f78c04",null);l.default=a.exports},go7M:function(e,l){}});