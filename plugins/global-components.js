import Vue from 'vue'
import TimePicker from '~/components/TimePicker.vue'
import TextEditor from '~/components/TextEditor.vue'

const components = { TimePicker, TextEditor }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
