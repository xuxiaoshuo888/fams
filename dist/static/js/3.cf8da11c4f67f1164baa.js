webpackJsonp([3],{"+tgE":function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={name:"stdpic",data:function(){return{imageUrl:""}},methods:{handleAvatarSuccess:function(a,t){this.imageUrl=URL.createObjectURL(t.raw)},beforeAvatarUpload:function(a){var t="image/jpeg"===a.type,s=a.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),s||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&s}}},r={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"pad20"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:6}},[s("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":a.handleAvatarSuccess,"before-upload":a.beforeAvatarUpload}},[a.imageUrl?s("img",{staticClass:"avatar",attrs:{src:a.imageUrl}}):s("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),a._v(" "),s("div",[a._v("姓名：张三")]),a._v(" "),s("div",[a._v("学号：20180808000111")])],1),a._v(" "),s("el-col",{attrs:{span:6}},[s("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":a.handleAvatarSuccess,"before-upload":a.beforeAvatarUpload}},[a.imageUrl?s("img",{staticClass:"avatar",attrs:{src:a.imageUrl}}):s("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),a._v(" "),s("div",[a._v("姓名：张三")]),a._v(" "),s("div",[a._v("学号：20180808000111")])],1),a._v(" "),s("el-col",{attrs:{span:6}},[s("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":a.handleAvatarSuccess,"before-upload":a.beforeAvatarUpload}},[a.imageUrl?s("img",{staticClass:"avatar",attrs:{src:a.imageUrl}}):s("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),a._v(" "),s("div",[a._v("姓名：张三")]),a._v(" "),s("div",[a._v("学号：20180808000111")])],1),a._v(" "),s("el-col",{attrs:{span:6}},[s("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":a.handleAvatarSuccess,"before-upload":a.beforeAvatarUpload}},[a.imageUrl?s("img",{staticClass:"avatar",attrs:{src:a.imageUrl}}):s("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),a._v(" "),s("div",[a._v("姓名：张三")]),a._v(" "),s("div",[a._v("学号：20180808000111")])],1)],1)],1)},staticRenderFns:[]};var l=s("VU/8")(e,r,!1,function(a){s("pLm7")},"data-v-cf8cc1ee",null);t.default=l.exports},pLm7:function(a,t){}});