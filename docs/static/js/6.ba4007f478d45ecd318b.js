webpackJsonp([6],{HWbw:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"regist",data:function(){return{input1:"",input2:"",input3:"",dialogVisible:!1,tableData3:[{xh:"12312321",xm:"tom"},{xh:"12312321",xm:"tom"},{xh:"12312321",xm:"tom"}],add_name_list:[{name:"奖学金1",value:"奖学金1"},{name:"奖学金2",value:"奖学金2"},{name:"奖学金3",value:"奖学金3"},{name:"奖学金4",value:"奖学金4"},{name:"奖学金5",value:"奖学金5"},{name:"奖学金6",value:"奖学金6"}],koufen_name_list:[{name:"打架斗殴",value:"打架斗殴"},{name:"旷课",value:"旷课"},{name:"迟到",value:"迟到"},{name:"早退",value:"早退"},{name:"违纪",value:"违纪"},{name:"记大过",value:"记大过"}],jiafen_list:[{no:"1",name:"奖学金1",datetime:"2018-08-08",content:"获得奖学金",count:"1",department:"文学院"},{no:"2",name:"奖学金2",datetime:"2018-08-08",content:"获得奖学金",count:"2",department:"文学院"},{no:"3",name:"奖学金3",datetime:"2018-08-08",content:"获得奖学金",count:"3",department:"文学院"},{no:"4",name:"奖学金4",datetime:"2018-08-08",content:"获得奖学金",count:"4",department:"文学院"}],koufen_list:[{no:"A",name:"打架斗殴",datetime:"2018-08-08",content:"打架斗殴",count:"5",department:"文学院"},{no:"B",name:"旷课",datetime:"2018-08-08",content:"旷课",count:"2",department:"文学院"},{no:"B",name:"旷课",datetime:"2018-08-08",content:"旷课",count:"1",department:"文学院"}],ruleForm:{name:"",zwm:"",xh:"",bj:"",nj:"",ssh:"",sex:"",tel:"",birth:"",hzhm:"",gj:"",xjzch:"",dxrq:"",region:"",bzr:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},rules:{}}},methods:{showStd:function(e){this.dialogVisible=!0,console.log(e)},add_item:function(e){e.push({no:"",name:"",datetime:"",content:"",count:"",department:"",editable:!0})},delete_item:function(e,t){var l=this;console.log(t),this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.splice(t.$index,1),l.$message({type:"success",message:"删除成功!"})}).catch(function(){l.$message({type:"info",message:"已取消删除"})})},deliver_item:function(e,t){e[t.$index].editable=!1}}},a={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"pad20"},[l("el-row",{staticClass:"search_area",attrs:{gutter:20}},[l("el-col",{attrs:{span:24}},[l("el-input",{attrs:{placeholder:"学号",size:"mini",clearable:""},model:{value:e.input1,callback:function(t){e.input1=t},expression:"input1"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),e._v(" "),l("el-input",{attrs:{placeholder:"姓名",size:"mini",clearable:""},model:{value:e.input3,callback:function(t){e.input3=t},expression:"input3"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),e._v(" "),l("el-input",{attrs:{placeholder:"学院",size:"mini",clearable:""}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),e._v(" "),l("el-input",{attrs:{placeholder:"专业",size:"mini",clearable:""}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),e._v(" "),l("el-input",{attrs:{placeholder:"班级",size:"mini",clearable:""}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),e._v(" "),l("el-col",{staticClass:"search_btn_area",attrs:{span:24}},[l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-search"}},[e._v("搜索")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-refresh"}},[e._v("重置")])],1),e._v(" "),l("el-col",{staticClass:"functional_area",attrs:{span:24}},[l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("新增")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"}},[e._v("修改")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-download"}},[e._v("导出Excel")])],1)],1),e._v(" "),l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData3,border:""}},[l("el-table-column",{attrs:{type:"selection",width:"55","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"xh",label:"学号",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"xm",label:"姓名",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"",label:"学院",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"",label:"专业",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"",label:"班级",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"",label:"加分总分",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"",label:"扣分总分",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"",label:"总分",width:"","header-align":"center",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",width:"150","header-align":"center",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(l){e.showStd(t.row)}}},[e._v("详情")]),e._v(" "),l("el-button",{attrs:{type:"danger",size:"mini"}},[e._v("删除")])]}}])})],1),e._v(" "),l("div",{staticClass:"pagination-block"},[l("el-pagination",{attrs:{background:"","current-page":e.currentPage4,"page-sizes":[10,20,30,40],"page-size":10,layout:"total, sizes, prev, pager, next,->",total:400},on:{"size-change":function(e){},"current-change":function(e){},"prev-click":function(e){},"next-click":function(e){}}})],1),e._v(" "),l("el-dialog",{attrs:{title:"",width:"1200px",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("div",{attrs:{slot:"title"},slot:"title"},[e._v("学生详情")]),e._v(" "),l("div",[l("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{inline:!0,model:e.ruleForm,rules:e.rules,"label-width":"150px"}},[l("el-form-item",{attrs:{label:"学号",prop:""}},[l("el-input",{model:{value:e.ruleForm.xh,callback:function(t){e.$set(e.ruleForm,"xh",t)},expression:"ruleForm.xh"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"性别",prop:""}},[l("el-radio-group",{model:{value:e.ruleForm.xb,callback:function(t){e.$set(e.ruleForm,"xb",t)},expression:"ruleForm.xb"}},[l("el-radio",{attrs:{label:"男"}}),e._v(" "),l("el-radio",{attrs:{label:"女"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"姓名",prop:"name"}},[l("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"班级",prop:""}},[l("el-input",{model:{value:e.ruleForm.bj,callback:function(t){e.$set(e.ruleForm,"bj",t)},expression:"ruleForm.bj"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"年级",prop:""}},[l("el-input",{model:{value:e.ruleForm.nj,callback:function(t){e.$set(e.ruleForm,"nj",t)},expression:"ruleForm.nj"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"中文名",prop:""}},[l("el-input",{model:{value:e.ruleForm.zwm,callback:function(t){e.$set(e.ruleForm,"zwm",t)},expression:"ruleForm.zwm"}})],1)],1),e._v(" "),l("div",{staticClass:"score_div"},[l("header",[l("span",{},[e._v("加分项")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus",circle:""},on:{click:function(t){e.add_item(e.jiafen_list)}}})],1),e._v(" "),l("div",{staticClass:"score_list"},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.jiafen_list,"header-align":"center",align:"center"}},[l("el-table-column",{attrs:{prop:"no",label:"序号",width:"","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.editable?l("el-input",{attrs:{clearable:"",placeholder:"请输入序号"},model:{value:t.row.no,callback:function(l){e.$set(t.row,"no",l)},expression:"scope.row.no"}}):l("span",[e._v(e._s(t.row.no))])]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"name",label:"活动名称",width:"","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.editable?l("el-select",{staticStyle:{width:"100%","text-align":"center"},attrs:{placeholder:"选择名称"},model:{value:t.row.name,callback:function(l){e.$set(t.row,"name",l)},expression:"scope.row.name"}},e._l(e.add_name_list,function(e){return l("el-option",{key:e.value,staticStyle:{width:"100%","text-align":"center"},attrs:{label:e.name,value:e.value}})})):l("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"datetime",label:"活动时间","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.editable?l("el-date-picker",{attrs:{type:"date",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.row.datetime,callback:function(l){e.$set(t.row,"datetime",l)},expression:"scope.row.datetime"}}):l("span",[e._v(e._s(t.row.datetime))])]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"content",label:"活动内容","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.editable?l("el-input",{attrs:{clearable:"",placeholder:"请输入内容"},model:{value:t.row.content,callback:function(l){e.$set(t.row,"content",l)},expression:"scope.row.content"}}):l("span",[e._v(e._s(t.row.content))])]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"count",label:"分值",width:"","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.editable?l("el-input",{attrs:{clearable:"",placeholder:"请输入分值"},model:{value:t.row.count,callback:function(l){e.$set(t.row,"count",l)},expression:"scope.row.count"}}):l("span",[e._v(e._s(t.row.count))])]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"department",label:"单位","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.editable?l("el-input",{attrs:{clearable:"",placeholder:"请输入单位"},model:{value:t.row.department,callback:function(l){e.$set(t.row,"department",l)},expression:"scope.row.department"}}):l("span",[e._v(e._s(t.row.department))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"操作",width:"","header-align":"center",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.editable?l("span",[l("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-check",circle:""},on:{click:function(l){e.deliver_item(e.jiafen_list,t)}}}),e._v(" "),l("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-close",circle:""},on:{click:function(l){e.delete_item(e.jiafen_list,t)}}})],1):l("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-close",circle:""},on:{click:function(l){e.delete_item(e.jiafen_list,t)}}})]}}])})],1)],1)]),e._v(" "),l("div",{staticClass:"score_div"},[l("header",[l("span",{},[e._v("扣分项")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus",circle:""},on:{click:function(t){e.add_item(e.koufen_list)}}})],1),e._v(" "),l("div",{staticClass:"score_list"},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.koufen_list,"header-align":"center",align:"center"}},[l("el-table-column",{attrs:{prop:"no",label:"序号",width:"","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.editable?l("el-input",{attrs:{clearable:"",placeholder:"请输入序号"},model:{value:t.row.no,callback:function(l){e.$set(t.row,"no",l)},expression:"scope.row.no"}}):l("span",[e._v(e._s(t.row.no))])]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"name",label:"活动名称",width:"","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.editable?l("el-select",{staticStyle:{width:"100%","text-align":"center"},attrs:{placeholder:"选择名称"},model:{value:t.row.name,callback:function(l){e.$set(t.row,"name",l)},expression:"scope.row.name"}},e._l(e.koufen_name_list,function(e){return l("el-option",{key:e.value,staticStyle:{width:"100%","text-align":"center"},attrs:{label:e.name,value:e.value}})})):l("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"datetime",label:"扣分时间","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.editable?l("el-date-picker",{attrs:{type:"date",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.row.datetime,callback:function(l){e.$set(t.row,"datetime",l)},expression:"scope.row.datetime"}}):l("span",[e._v(e._s(t.row.datetime))])]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"content",label:"扣分内容","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.editable?l("el-input",{attrs:{clearable:"",placeholder:"请输入内容"},model:{value:t.row.content,callback:function(l){e.$set(t.row,"content",l)},expression:"scope.row.content"}}):l("span",[e._v(e._s(t.row.content))])]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"count",label:"分值",width:"","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.editable?l("el-input",{attrs:{clearable:"",placeholder:"请输入分值"},model:{value:t.row.count,callback:function(l){e.$set(t.row,"count",l)},expression:"scope.row.count"}}):l("span",[e._v(e._s(t.row.count))])]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"department",label:"单位","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.editable?l("el-input",{attrs:{clearable:"",placeholder:"请输入单位"},model:{value:t.row.department,callback:function(l){e.$set(t.row,"department",l)},expression:"scope.row.department"}}):l("span",[e._v(e._s(t.row.department))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"操作",width:"","header-align":"center",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.editable?l("span",[l("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-check",circle:""},on:{click:function(l){e.deliver_item(e.koufen_list,t)}}}),e._v(" "),l("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-close",circle:""},on:{click:function(l){e.delete_item(e.koufen_list,t)}}})],1):l("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-close",circle:""},on:{click:function(l){e.delete_item(e.koufen_list,t)}}})]}}])})],1)],1)])],1),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var r=l("VU/8")(n,a,!1,function(e){l("iJ50")},"data-v-e820d5d8",null);t.default=r.exports},iJ50:function(e,t){}});