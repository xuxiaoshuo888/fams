webpackJsonp([13],{Lu3U:function(e,l){},WBLB:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var r={name:"passport",data:function(){return{dialogVisible:!1,add_dialogVisible:!1,input1:"",input2:"",input3:"",currentPage4:1,tableData3:[{nj:"2018级",bj:"电气1班",xh:"20180808001",name:"Tom",cnName:"王小虎",hzhm:"123123123",hzyxq:"3年",jlxkdqr:"20180808",gxhdqr:"20190909"},{nj:"2018级",bj:"电气1班",xh:"20180808001",name:"Tom",cnName:"王小虎",hzhm:"123123123",hzyxq:"3年",jlxkdqr:"20180808",gxhdqr:"20190909"},{nj:"2018级",bj:"电气1班",xh:"20180808001",name:"Tom",cnName:"王小虎",hzhm:"123123123",hzyxq:"3年",jlxkdqr:"20180808",gxhdqr:"20190909"},{nj:"2018级",bj:"电气1班",xh:"20180808001",name:"Tom",cnName:"王小虎",hzhm:"123123123",hzyxq:"3年",jlxkdqr:"20180808",gxhdqr:"20190909"}],ruleForm:{name:"",zwm:"",xh:"",bj:"",nj:"",ssh:"",sex:"",tel:"",birth:"",hzhm:"",gj:"",xjzch:"",dxrq:"",region:"",bzr:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},rules:{}}},computed:{},methods:{showStd:function(e){this.add_dialogVisible=!0,console.log(e)}}},a={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"pad20"},[t("div",{staticClass:"pad20"},[t("el-row",{staticClass:"search_area",attrs:{gutter:20}},[t("el-col",{attrs:{span:24}},[t("el-input",{attrs:{placeholder:"学号",size:"mini",clearable:""},model:{value:e.input1,callback:function(l){e.input1=l},expression:"input1"}},[t("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),e._v(" "),t("el-input",{attrs:{placeholder:"性别",size:"mini",clearable:""},model:{value:e.input2,callback:function(l){e.input2=l},expression:"input2"}},[t("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),e._v(" "),t("el-input",{attrs:{placeholder:"姓名",size:"mini",clearable:""},model:{value:e.input3,callback:function(l){e.input3=l},expression:"input3"}},[t("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),e._v(" "),t("el-input",{attrs:{placeholder:"护照号",size:"mini",clearable:""}},[t("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),e._v(" "),t("el-input",{attrs:{placeholder:"护照有效期",size:"mini",clearable:""}},[t("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),e._v(" "),t("el-input",{attrs:{placeholder:"拘留许可到期时间",size:"mini",clearable:""}},[t("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),e._v(" "),t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",size:"mini",placeholder:"拘留许可到期时间"}})],1),e._v(" "),t("el-col",{attrs:{span:24}},[t("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-search"}},[e._v("搜索")]),e._v(" "),t("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},on:{click:function(l){e.add_dialogVisible=!0}}},[e._v("新增")]),e._v(" "),t("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-upload2"}},[e._v("上传")]),e._v(" "),t("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete"}},[e._v("批量删除")]),e._v(" "),t("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-document"}},[e._v("导出")])],1)],1),e._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData3,border:""}},[t("el-table-column",{attrs:{label:"操作",width:"150","header-align":"center",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.showStd(l.row)}}},[e._v("详情")]),e._v(" "),t("el-button",{attrs:{type:"danger",size:"mini"}},[e._v("删除")])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"nj",label:"年级",width:"","header-align":"center",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"bj",label:"班级",width:"","header-align":"center",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"xh",label:"学号",width:"","header-align":"center",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"name",label:"姓名",width:"","header-align":"center",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"cnName",label:"中文名",width:"","header-align":"center",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"hzhm",label:"护照号码",width:"","header-align":"center",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"hzyxq",label:"护照有效期",width:"","header-align":"center",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"jlxkdqr",label:"居留许可到期日",width:"","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(l){return[e._v("\n          "+e._s(l.row.jlxkdqr)+"\n          "),t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){e.dialogVisible=!0}}},[e._v("设置")])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"gxhdqr",label:"更新后到期日",width:"","header-align":"center",align:"center"}})],1),e._v(" "),t("div",{staticClass:"pagination-block"},[t("el-pagination",{attrs:{background:"","current-page":e.currentPage4,"page-sizes":[10,20,30,40],"page-size":10,layout:"total, sizes, prev, pager, next,->",total:400},on:{"size-change":function(e){},"current-change":function(e){},"prev-click":function(e){},"next-click":function(e){}}})],1),e._v(" "),t("el-dialog",{attrs:{title:"",visible:e.add_dialogVisible,width:"900px"},on:{"update:visible":function(l){e.add_dialogVisible=l}}},[t("div",{attrs:{slot:"title"},slot:"title"},[e._v("学生基本信息管理")]),e._v(" "),t("div",[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,inline:"",rules:e.rules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"学号",prop:""}},[t("el-input",{model:{value:e.ruleForm.xh,callback:function(l){e.$set(e.ruleForm,"xh",l)},expression:"ruleForm.xh"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"姓名",prop:"name"}},[t("el-input",{model:{value:e.ruleForm.name,callback:function(l){e.$set(e.ruleForm,"name",l)},expression:"ruleForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"中文名",prop:""}},[t("el-input",{model:{value:e.ruleForm.zwm,callback:function(l){e.$set(e.ruleForm,"zwm",l)},expression:"ruleForm.zwm"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"性别",prop:""}},[t("el-radio-group",{model:{value:e.ruleForm.xb,callback:function(l){e.$set(e.ruleForm,"xb",l)},expression:"ruleForm.xb"}},[t("el-radio",{attrs:{label:"男",value:"1"}}),e._v(" "),t("el-radio",{attrs:{label:"女",value:"1"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"年级",prop:""}},[t("el-input",{model:{value:e.ruleForm.nj,callback:function(l){e.$set(e.ruleForm,"nj",l)},expression:"ruleForm.nj"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"出生年月",required:""}},[t("el-form-item",{attrs:{prop:""}},[t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date1,callback:function(l){e.$set(e.ruleForm,"date1",l)},expression:"ruleForm.date1"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"学院",prop:""}},[t("el-input")],1),e._v(" "),t("el-form-item",{attrs:{label:"专业",prop:""}},[t("el-input")],1),e._v(" "),t("el-form-item",{attrs:{label:"班级",prop:""}},[t("el-input",{model:{value:e.ruleForm.bj,callback:function(l){e.$set(e.ruleForm,"bj",l)},expression:"ruleForm.bj"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"入学年月",required:""}},[t("el-form-item",{attrs:{prop:""}},[t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date2,callback:function(l){e.$set(e.ruleForm,"date2",l)},expression:"ruleForm.date2"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"在校状态",prop:"region"}},[t("el-select",{attrs:{placeholder:"请选择在校状态"}},[t("el-option",{attrs:{label:"在校",value:"1"}}),e._v(" "),t("el-option",{attrs:{label:"不在校",value:"2"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"电话号码",prop:""}},[t("el-input",{model:{value:e.ruleForm.tel,callback:function(l){e.$set(e.ruleForm,"tel",l)},expression:"ruleForm.tel"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"宿舍号",prop:""}},[t("el-input",{model:{value:e.ruleForm.ssh,callback:function(l){e.$set(e.ruleForm,"ssh",l)},expression:"ruleForm.ssh"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"出生地",prop:""}},[t("el-input")],1),e._v(" "),t("el-form-item",{attrs:{label:"国籍",prop:""}},[t("el-input",{model:{value:e.ruleForm.gj,callback:function(l){e.$set(e.ruleForm,"gj",l)},expression:"ruleForm.gj"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"宗教信仰",prop:""}},[t("el-input",{model:{value:e.ruleForm.religion,callback:function(l){e.$set(e.ruleForm,"religion",l)},expression:"ruleForm.religion"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"辅导员工号",prop:""}},[t("el-input")],1),e._v(" "),t("el-form-item",{attrs:{label:"辅导员姓名",prop:""}},[t("el-input",{model:{value:e.ruleForm.bzr,callback:function(l){e.$set(e.ruleForm,"bzr",l)},expression:"ruleForm.bzr"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"辅导员联系方式",prop:""}},[t("el-input",{model:{value:e.ruleForm.hzhm,callback:function(l){e.$set(e.ruleForm,"hzhm",l)},expression:"ruleForm.hzhm"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"毕业去向",prop:""}},[t("el-input")],1),e._v(" "),t("el-form-item",{attrs:{label:"永久联系电话",prop:""}},[t("el-input")],1)],1),e._v(" "),t("el-form",{attrs:{"label-width":"120px"}},[t("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"备注",prop:"desc"}},[t("el-input",{staticStyle:{width:"100%"},attrs:{type:"textarea"},model:{value:e.ruleForm.bz,callback:function(l){e.$set(e.ruleForm,"bz",l)},expression:"ruleForm.bz"}})],1)],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"small"},on:{click:function(l){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(l){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],1),e._v(" "),t("el-dialog",{attrs:{title:"",visible:e.dialogVisible,width:"60%"},on:{"update:visible":function(l){e.dialogVisible=l}}},[t("div",{attrs:{slot:"title"},slot:"title"},[e._v("学生详情")]),e._v(" "),t("div",[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"150px"}},[t("el-form-item",{attrs:{label:"姓名",prop:"name"}},[t("el-input",{model:{value:e.ruleForm.name,callback:function(l){e.$set(e.ruleForm,"name",l)},expression:"ruleForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"护照到期时间",required:""}},[t("el-form-item",{attrs:{prop:""}},[t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date1,callback:function(l){e.$set(e.ruleForm,"date1",l)},expression:"ruleForm.date1"}})],1)],1)],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(l){e.dialogVisible=!1}}},[e._v("取消设置")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(l){e.dialogVisible=!1}}},[e._v("设置")])],1)])],1)},staticRenderFns:[]};var i=t("VU/8")(r,a,!1,function(e){t("Lu3U")},"data-v-39f52286",null);l.default=i.exports}});