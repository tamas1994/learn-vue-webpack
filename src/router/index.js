import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/Index';
import ElementContainer from '../pages/ElementContainer.vue';
import ElementButton from '../pages/ElementButton.vue';
import ElementRadio from '../pages/ElementRadio.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/element-container',
      name: 'element-container',
      component: ElementContainer
    },
    {
      path: '/element-button',
      name: 'element-button',
      component: ElementButton
    },
    {
      path: '/element-radio',
      name: 'element-radio',
      component: ElementRadio
    }
  ]
});
