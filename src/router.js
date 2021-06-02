import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import todo from './components/todo';
import todoView from './components/todoView';

const routes = [
  {
    path: '/',
    component: todo
  },
  {
    path: '/view',
    component: todoView
  }
];

export default new VueRouter({ routes, mode: 'history' });