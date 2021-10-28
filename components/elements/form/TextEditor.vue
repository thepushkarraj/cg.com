<template>
  <span>
    <quill-editor
      v-model="editor"
      :options="editorOption"
      :value="editor"
    />
    <input type="hidden" :name="name" :value="editor">
  </span>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      editor: this.value,
      editorOption: {
        theme: 'snow',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block']
          ]
        }
      }
    }
  }
}
</script>

<style>
  .ql-editor {
    min-height: 100px;
    height: auto;
    overflow-y: auto;
  }
</style>
