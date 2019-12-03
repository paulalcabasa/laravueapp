

import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
axios.defaults.baseURL = 'http://laravueapp/api';

import App from '../views/App'
import About from '../views/About'
import Home from '../views/Home'
import Login from '../views/Login';
import Register from '../views/Register.vue';
import Dashboard from '../views/Dashboard';
require('./bootstrap'); 
const router = new VueRouter({
    mode: 'history',
    base : 'laravueapp',
    routes: [
        
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/about',
            name: 'about',
            component: About,
           
        },
        {        
            path: '/register',        
            name: 'register',        
            component: Register,
            meta: {            
                auth: false
            }
        },
        {        
            path: '/login',        
            name: 'login',        
            component: Login,
            meta: {            
                auth: false
            } 
        }
    ],
});

Vue.router = router

Vue.use(require('@websanova/vue-auth'), {   
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),  
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),   
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});

App.router = Vue.router
new Vue(App).$mount('#app');

// const app = new Vue({
//     el: '#app',
//     components: { App },
//     router,
// });