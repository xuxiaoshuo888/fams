<template>
  <div>
    <div ref="editor" style="text-align:left"></div>
    <!--<button v-on:click="getContent">查看内容</button>-->
  </div>
</template>


<script>
  import E from 'wangeditor'

  export default {
    name: 'editor',
    data() {
      return {
        editorContent: ""
      }
    },
    props: ['msg'],//接收父组件的传入的值
    methods: {
      getContent: function () {
        alert(this.editorContent)
      }
    },
    mounted() {
      var editor = new E(this.$refs.editor)
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
      }
      editor.create()
      console.log(this.msg)
      this.editorContent = this.msg
    }
  }
</script>

<style scoped>

</style>
