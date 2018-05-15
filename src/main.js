import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import 'element-ui/lib/theme-chalk/index.css';
import { Button, Dialog, Form, FormItem, Input, Checkbox, Alert} from 'element-ui';

Vue.use(Button);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Alert);


Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})

