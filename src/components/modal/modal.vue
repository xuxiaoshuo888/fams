<template>
  <div>
    <el-dialog
      width="60%"
    >
      <span slot="title">
        <slot name="title"></slot>
      </span>
      <span><slot name="body"></slot></span>
      <span slot="footer" class="dialog-footer">
        <slot name="footer"></slot>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'Modal'
  }
</script>

<style scoped>

</style>
