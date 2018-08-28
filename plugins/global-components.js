import Vue from "vue";
import AppContainer from "~/components/AppContainer.vue";

const components = { AppContainer };

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
