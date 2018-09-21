import Vue from 'vue'
import TimePicker from '~/components/TimePicker.vue'

const components = { TimePicker }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
