webpackJsonp([13],{O6PP:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var r={name:"leader",data:function(){return{dialogVisible:!1,tableData3:[{xh:"20180808001",name:"Tom",cnName:"王小虎",gender:"男",bjzw:"班长",tel:"13888888888",roomNum:"503",rzqx:"1年",gzbx:"好"},{xh:"20180808001",name:"Tom",cnName:"王小虎",gender:"男",bjzw:"班长",tel:"13888888888",roomNum:"503",rzqx:"1年",gzbx:"好"},{xh:"20180808001",name:"Tom",cnName:"王小虎",gender:"男",bjzw:"班长",tel:"13888888888",roomNum:"503",rzqx:"1年",gzbx:"好"},{xh:"20180808001",name:"Tom",cnName:"王小虎",gender:"男",bjzw:"班长",tel:"13888888888",roomNum:"503",rzqx:"1年",gzbx:"好"}],ruleForm:{xh:"20180808001",name:"Tom",cnName:"王小虎",gender:"男",bjzw:"班长",tel:"13888888888",roomNum:"503",rzqx:"1年",gzbx:"好"},rules:{}}},computed:{},methods:{showStd:function(e){this.dialogVisible=!0,console.log(e)}}},o={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{staticClass:"pad20"},[t("el-row",{staticClass:"marginbot10",attrs:{gutter:20}},[t("el-col",{attrs:{span:8}},[t("label",[e._v("年级:")]),e._v(" "),t("span",[e._v("2018级")])]),e._v(" "),t("el-col",{attrs:{span:8}},[t("label",[e._v("班级:")]),e._v(" "),t("span",[e._v("电气1班")])]),e._v(" "),t("el-col",{attrs:{span:8}},[t("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(l){e.dialogVisible=!0}}},[e._v("新增")])],1)],1),e._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData3,border:"",height:"250"}},[t("el-table-column",{attrs:{prop:"xh",label:"学号",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"name",label:"英文名",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"cnName",label:"中文名",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"gender",label:"性别",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"bjzw",label:"班级职务",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"tel",label:"电话号码",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"roomNum",label:"宿舍号",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"rzqx",label:"任职期限",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"gzbx",label:"工作表现",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.showStd(l.row)}}},[e._v("详情")]),e._v(" "),t("el-button",{attrs:{type:"text",size:"small"}},[e._v("删除")])]}}])})],1),e._v(" "),t("el-dialog",{attrs:{title:"",visible:e.dialogVisible,width:"60%"},on:{"update:visible":function(l){e.dialogVisible=l}}},[t("div",{attrs:{slot:"title"},slot:"title"},[e._v("学生详情")]),e._v(" "),t("div",[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{inline:!0,model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"英文名",prop:"name"}},[t("el-input",{model:{value:e.ruleForm.name,callback:function(l){e.$set(e.ruleForm,"name",l)},expression:"ruleForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"中文名",prop:""}},[t("el-input",{model:{value:e.ruleForm.zwm,callback:function(l){e.$set(e.ruleForm,"zwm",l)},expression:"ruleForm.zwm"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"学号",prop:""}},[t("el-input",{model:{value:e.ruleForm.xh,callback:function(l){e.$set(e.ruleForm,"xh",l)},expression:"ruleForm.xh"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"性别",prop:""}},[t("el-radio-group",{model:{value:e.ruleForm.xb,callback:function(l){e.$set(e.ruleForm,"xb",l)},expression:"ruleForm.xb"}},[t("el-radio",{attrs:{label:"男"}}),e._v(" "),t("el-radio",{attrs:{label:"女"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"宿舍号",prop:""}},[t("el-input",{model:{value:e.ruleForm.ssh,callback:function(l){e.$set(e.ruleForm,"ssh",l)},expression:"ruleForm.ssh"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"电话号码",prop:""}},[t("el-input",{model:{value:e.ruleForm.tel,callback:function(l){e.$set(e.ruleForm,"tel",l)},expression:"ruleForm.tel"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"班级职务",prop:""}},[t("el-input",{model:{value:e.ruleForm.bjzw,callback:function(l){e.$set(e.ruleForm,"bjzw",l)},expression:"ruleForm.bjzw"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"任职期限",prop:""}},[t("el-input",{model:{value:e.ruleForm.rzqx,callback:function(l){e.$set(e.ruleForm,"rzqx",l)},expression:"ruleForm.rzqx"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"工作表现",prop:""}},[t("el-input",{model:{value:e.ruleForm.gzbx,callback:function(l){e.$set(e.ruleForm,"gzbx",l)},expression:"ruleForm.gzbx"}})],1)],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(l){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(l){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var a=t("VU/8")(r,o,!1,function(e){t("VsiY")},"data-v-526536e3",null);l.default=a.exports},VsiY:function(e,l){}});