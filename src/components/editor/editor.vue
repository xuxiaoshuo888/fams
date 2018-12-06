<template>
  <div>
    <div ref="editor" style="text-align:left"></div>
  </div>
</template>


<script>
  import E from 'wangeditor'

  // const editor = new E(this.$refs.editor)
  export default {
    name: 'editor',
    props: {
      msg: String
    },//接收父组件的传入的值
    mounted() {
      var editor = new E(this.$refs.editor)
      editor.customConfig.onchange = (html) => {
        console.log('123')
        this.$emit('content', html)
      }
      editor.create()
      editor.txt.html(this.msg)
    }
  }
</script>

<style scoped>

</style>
