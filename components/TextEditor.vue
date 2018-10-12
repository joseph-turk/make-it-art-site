<template>
  <div
    class="quill-editor"
    :content="content"
    @change="onEditorChange($event)"
    v-quill:myQuillEditor="editorOption"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      content: this.value,
      editorOption: {
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, false] }],
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'align': [] }],
            ['clean']
          ]
        }
      }
    }
  },

  methods: {
    onEditorChange ({ editor, html, text }) {
      console.log('editor change')
      this.content = html
      this.$emit('input', this.content)
    }
  }
}
</script>
