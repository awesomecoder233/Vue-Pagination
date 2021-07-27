require('./bootstrap');
window.Vue = require('vue');

import { Form, HasError, AlertError } from 'vform';
import Vue from 'vue';
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component('pagination', require('laravel-vue-pagination'));

let Fire = new Vue();
window.Fire = Fire;
Vue.component('category-component', require('./components/CategoryComponent.vue').default);
const app = new Vue({
    el: '#app',
    router
});

