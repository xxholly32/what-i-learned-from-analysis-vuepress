import Vue from 'vue';
import App from './App.vue';

import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import { setHighlighter } from 'vue-mark-display';

setHighlighter(code => hljs.highlightAuto(code).value || code);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
