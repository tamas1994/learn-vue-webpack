import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/Index';
import ElementContainer from '../pages/ElementContainer.vue';
import ElementButton from '../pages/ElementButton.vue';
import ElementRadio from '../pages/ElementRadio.vue';
import LifeCycle from '../pages/LifeCycle.vue';
import Axios from '../pages/Axios.vue';

import RouterParamTo from '../pages/RouterParamTo.vue';
import Loan from '../pages/Loan.vue';


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
    },
    {
      path: '/life-cycle',
      name: 'life-cycle',
      component: LifeCycle
    },
    {
      path: '/axios',
      name: 'axios',
      component: Axios
    },
    {
      path: '/router-param-to/:param1',
      name: 'router-param-to',
      component: RouterParamTo
    },
    {
      path: '/loan',
      name: 'loan',
      component: Loan
    }
  ]
});
